import re, json, subprocess, os
from PIL import Image
E="/Users/carloschmidt/Desktop/EBS/S2:2/Math II/Exams.pdf"
OUT=os.path.expanduser("~/Desktop/EBS/S2:2/Study Hub/bank")
os.makedirs(OUT,exist_ok=True)
html=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'bbox.html')).read()  # pdftotext -bbox Exams.pdf bbox.html
pages=re.findall(r'<page width="([\d.]+)" height="([\d.]+)">(.*?)</page>',html,re.S)
W,H=float(pages[0][0]),float(pages[0][1])
words=[]  # (page, y, x, text, yMax)
for pi,(w,h,body) in enumerate(pages,1):
    for m in re.finditer(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>',body):
        words.append((pi,float(m.group(2)),float(m.group(1)),m.group(5),float(m.group(4))))
# events
events=[]
for i,(p,y,x,t,ym) in enumerate(words):
    nxt=words[i+1][3] if i+1<len(words) else ''
    nxt2=words[i+2][3] if i+2<len(words) else ''
    if t=='Exercise' and re.match(r'^\d\.?:$',nxt) and x<120: events.append(('ex',p,y,int(nxt[0])))
    elif t in('Pointers','Pointer') and nxt=='to' and x<120: events.append(('sol',p,y,None))
    elif t in('Exam','Retake') and y<260 and p<=197:
        if t=='Exam' and re.match(r'^20\d\d$',nxt) and not (i>0 and words[i-1][3]=='Retake'): events.append(('exam',p,y,'Exam '+nxt))
        if t=='Retake' and nxt=='Exam' and re.match(r'^20\d\d$',nxt2): events.append(('exam',p,y,'Retake '+nxt2))
# page content bounds (exclude page number footer) : footer at y>~760?
def footer_y(p):
    ys=[ (y,t) for (pp,y,x,t,ym) in words if pp==p]
    return max(y for y,t in ys) if ys else H
# build segments
segs=[]; cur_exam=None; cur=None
evs=[e for e in events if e[1]<=197]
evs.append(('end',198,0,None))
for k,e in enumerate(evs):
    if e[0]=='exam':
        if cur: cur['end']=(e[1],128); segs.append(cur); cur=None
        cur_exam=e[3]
    elif e[0]=='ex':
        if cur: cur['end']=(e[1],e[2]); segs.append(cur)
        cur={'exam':cur_exam,'n':e[3],'start':(e[1],e[2]),'sol':None}
    elif e[0]=='sol':
        if cur and not cur['sol']: cur['sol']=(e[1],e[2])
    elif e[0]=='end':
        if cur: cur['end']=(197,H); segs.append(cur)
print(len(segs))
DPI=110; S=DPI/72
cache={}
def pageimg(p):
    if p not in cache:
        fn=f'/tmp/_pg' ; 
        subprocess.run(['pdftoppm','-gray','-r',str(DPI),'-f',str(p),'-l',str(p),'-png',E,'pg'],check=True)
        c=[f for f in os.listdir('.') if f.startswith('pg') and f.endswith('.png')][0]
        cache[p]=Image.open(c).convert('L'); os.remove(c)
    return cache[p]
TOP=95; BOT=735  # content area in pt (skip header/page number)
def crop(a,b):
    (p1,y1),(p2,y2)=a,b
    ims=[]
    for p in range(p1,p2+1):
        ya = y1-6 if p==p1 else TOP
        yb = y2-6 if p==p2 else BOT
        if p==p2 and y2>=H: yb=BOT
        if yb-ya<8: continue
        im=pageimg(p).crop((int(70*S),int(ya*S),int((W-60)*S),int(yb*S)))
        # skip near-empty
        ext=im.getextrema()
        if ext[0]>245: continue
        ims.append(im)
    if not ims: return None
    w=max(i.width for i in ims); h=sum(i.height for i in ims)
    out=Image.new('L',(w,h),255); yy=0
    for i in ims: out.paste(i,(0,yy)); yy+=i.height
    # trim bottom whitespace
    return out
def squeeze(im, keep=18, thr=248):
    import numpy as np
    a=np.asarray(im)
    blank=(a.min(axis=1)>=thr)
    rows=[]; run=0
    for i,b in enumerate(blank):
        run = run+1 if b else 0
        if not b or run<=keep: rows.append(i)
    # trim trailing blank
    while rows and blank[rows[-1]]: rows.pop()
    return Image.fromarray(a[rows])
meta=[]
for s in segs:
    slug=re.sub(r'\W+','-',s['exam'].lower())+f"-e{s['n']}"
    # dedupe duplicate exam names
    while any(m['id']==slug for m in meta): slug+='b'
    q=crop(s['start'], s['sol'] or s['end'])
    a=crop(s['sol'], s['end']) if s['sol'] else None
    ent={'id':slug,'exam':s['exam'],'n':s['n']}
    if q: q=squeeze(q).quantize(16); q.save(f"{OUT}/{slug}-q.png",optimize=True); ent['q']=f"bank/{slug}-q.png"; ent['qh']=q.height
    if a: a=squeeze(a).quantize(16); a.save(f"{OUT}/{slug}-a.png",optimize=True); ent['a']=f"bank/{slug}-a.png"
    meta.append(ent)
json.dump(meta,open('bank_meta.json','w'),indent=0)
print(len(meta))
