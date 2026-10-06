/* ============================================================ MATH RENDERING (KaTeX) ============================================================ */
// $…$ / $$…$$ segments are swapped for placeholders before any text processing (escaping, sentence splitting, lists)
// and rendered with KaTeX afterwards, so the generic summary/flashcard/cheat formatting never breaks a formula.
function mathProtect(s){
  const parts = [];
  const t = String(s).replace(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g, (m, d, i)=>{ parts.push({tex: d!=null ? d : i, disp: d!=null}); return '\u0001'+(parts.length-1)+'\u0002'; });
  return {t, parts};
}
function katexHtml(p){
  try{
    if(window.katex) return katex.renderToString(p.tex, {displayMode:p.disp, throwOnError:false, strict:false});
  }catch(e){}
  return `<code>${esc(p.tex)}</code>`;
}
function mathRestore(html, parts){ return html.replace(/\u0001(\d+)\u0002/g, (m,k)=>katexHtml(parts[+k])); }
// inline text with math + **bold**
function mathText(s){
  const {t, parts} = mathProtect(s);
  return mathRestore(esc(t).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'), parts);
}
function texPlain(s){ return String(s).replace(/\$\$?/g,'').replace(/\\(begin|end)\{[a-z]+\}/g,' ').replace(/\\[a-zA-Z]+/g,' ').replace(/[{}&\\^_]/g,' ').replace(/\s+/g,' ').trim(); }

// summaries: identical markup rules as before (bullets, "Term :: Description", "=> A → B" flows), math-safe
const __summaryParasHtmlBase = summaryParasHtml;
summaryParasHtml = function(text){
  const {t, parts} = mathProtect(text);
  const norm = t.split('\n').map(l=>/^- .* :: /.test(l) ? l.slice(2) : l).join('\n');
  return mathRestore(__summaryParasHtmlBase(norm).replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>'), parts);
};
const __cheatItemHtmlBase = cheatItemHtml;
cheatItemHtml = function(item){ const {t, parts} = mathProtect(item); return mathRestore(__cheatItemHtmlBase(t), parts); };
function fcFormatM(text){ const {t, parts} = mathProtect(text); return mathRestore(fcFormat(t), parts); }
function flowSplitSafe(x){ return flowSplit(x); }

// rich block text for exam questions/solutions: paragraphs, "- " bullets, [[tab:caption …]] tableaux
function richHtml(src){
  const blocks = [];
  let s = String(src).replace(/\[\[tab:([^\n]*)\n([\s\S]*?)\]\]/g, (m, cap, body)=>{
    blocks.push(tabHtml(cap, body)); return `\n\n\u0003${blocks.length-1}\u0004\n\n`;
  });
  const paras = s.trim().split(/\n\n+/);
  let html = '', group = [];
  const flush = ()=>{ if(group.length){ html += `<div class="tab-row">${group.map((g,i)=>(i?'<span class="tab-arrow">→</span>':'')+g).join('')}</div>`; group = []; } };
  paras.forEach(p=>{
    const m = p.trim().match(/^\u0003(\d+)\u0004$/);
    if(m){ group.push(blocks[+m[1]]); return; }
    flush();
    // consecutive "- " lines → bullet list, everything else → paragraph (keeps display math intact)
    const groups = [];
    p.split('\n').forEach(l=>{ const li = /^- /.test(l); const g = groups[groups.length-1]; if(g && g.li===li) g.lines.push(l); else groups.push({li, lines:[l]}); });
    groups.forEach(g=>{ html += g.li ? `<ul class="sum-list">${g.lines.map(l=>`<li>${mathText(l.slice(2))}</li>`).join('')}</ul>` : `<p>${mathText(g.lines.join('\n'))}</p>`; });
  });
  flush();
  return html;
}
function tabHtml(cap, body){
  const rows = body.trim().split('\n').map(r=>r.split('|').map(c=>c.trim()));
  const head = rows.shift();
  const cell = c => c==='' ? '' : katexHtml({tex:c, disp:false});
  return `<div class="tab-wrap"><div class="tab-cap">${esc(cap)}</div><table class="tableau"><thead><tr>${head.map(h=>`<th>${cell(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr${r[0]==='z'?' class="zrow"':''}>${r.map(c=>`<td>${cell(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

/* ============================================================ SUBJECT META ============================================================ */
const PLAN_EXAM_M2 = new Date(2026,11,14); // Klausur "Quantitative Analytics II" (Math II part) — 14.12.2026
const M2_NAV = [
  {sec:'Overview', items:[{id:'m2-home', label:'Math II Home & Exam Info', icon:'home'}]},
  {sec:'Exam Prep — newest first', items:[
    ...M2_EXAMS.map(e=>({id:'m2-'+e.id, label:e.title+(e.latest?' · newest':''), icon:'doc'})),
    {id:'m2-bank', label:'Problem Bank 2005–2021', icon:'quiz'},
    {id:'m2-sim', label:'Mock Exam (90 min)', icon:'timer'}
  ]},
  {sec:'Tools', items:[
    {id:'m2-cheat', label:'Cheat Sheet (A4, printable)', icon:'cheat'},
    {id:'m2-lab', label:'Matrix Lab (step-by-step)', icon:'calc'},
    {id:'m2-drill', label:'Random Drills', icon:'logic'}
  ]}
];

buildSidebarNav = function(subjId){
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  M2_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  html += `<div class="nav-section-label">Chapters</div>`;
  M2_TOPICS.forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon('summary')}<span>${t.ch}. ${esc(t.title)}</span></div>`; });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};

/* ============================================================ SEARCH ============================================================ */
buildSearchIndex = function(){
  const idx = [];
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  M2_TOPICS.forEach(t=>{
    const where = `Math II · Chapter ${t.ch}`;
    add({type:'Topic', rank:0, title:t.title, text:'', where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:texPlain(searchFlat(p)), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:texPlain(c.q), text:texPlain(c.a), where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:texPlain(q.q), text:texPlain(q.exp||''), where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  M2_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:texPlain(it), where:'Math II · Cheat Sheet', page:'m2-cheat'})));
  M2_EXAMS.forEach(e=>e.ex.forEach(x=>add({type:'Exam', rank:1, title:`${e.title} · Ex. ${x.n}: ${x.title}`, text:texPlain(x.given), where:`Exam Prep · ${x.pts} points`, page:'m2-'+e.id, exTab:x.n})));
  M2_BANK.forEach(b=>add({type:'Old exam', rank:2, title:`${b.exam} · Ex. ${b.n}: ${b.title}`, text:M2_TYPES.find(t=>t.id===b.type).label, where:'Problem Bank', page:'m2-bank', bank:b.id}));
  M2_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`Math II · ${sec.sec}`, page:it.id})));
  add({type:'Page', rank:0, title:'Study Plan', text:'weak-spot radar revision plan exam date', where:'Math II', page:'plan'});
  return idx;
};
const __searchOpenBase = searchOpen;
searchOpen = function(e, words){
  if(e.exTab){ navTo(e.page); const b = document.querySelector(`#page-${e.page} .ex-tab[data-ex="${e.exTab}"]`); if(b) b.click(); return; }
  if(e.bank){ navTo('m2-bank'); bankOpen(e.bank); return; }
  __searchOpenBase(e, words);
};

/* ============================================================ HOME ============================================================ */
buildHomeCards = function(){
  const wrap = document.getElementById('home-cards');
  const days = Math.max(0, Math.ceil((PLAN_EXAM_M2 - new Date().setHours(0,0,0,0))/86400000));
  wrap.innerHTML = SUBJECTS.map(s=>`<div class="subj-card" onclick="selectSubject('${s.id}',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon(s.id)}</div>
      <div class="body">
        <span class="tag" style="background:var(--bg2);color:var(--ink-soft)">MATH II</span>
        <h3>${s.label}</h3>
        <p>${s.short}</p>
        <div class="stats"><span>7 chapters</span><span>4 exams + 150 old tasks</span><span>${days} days to 14 Dec</span></div>
      </div>
    </div>`).join('') + M2_UPCOMING.map(u=>`<div class="subj-card soon"><div class="banner" style="background:var(--tile-banner)">${homeIcon(u.icon)}</div><div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">${u.tag}</span><h3>${esc(u.label)}</h3><p>${esc(u.note)}</p><div class="stats"><span>${u.date}</span><span>coming later</span></div></div></div>`).join('');
};
// S2/2 written exams without material yet — shown as placeholder cards with their exam slot
const M2_UPCOMING = [
  {label:'Statistics', tag:'STATISTICS', icon:'stat', date:'Mon 14 Dec · 09:00–12:00', note:'Second half of "Quantitative Analytics II", same slot as Math II.'},
  {label:'Basic Principles of Marketing', tag:'MARKETING', icon:'mkt', date:'Wed 16 Dec · 13:30–16:00', note:'Shares the exam slot with Consumer Behaviour.'},
  {label:'Fundamentals of Consumer Behaviour', tag:'CONSUMER BEHAVIOUR', icon:'mkt', date:'Wed 16 Dec · 13:30–16:00', note:'Shares the exam slot with Marketing.'},
  {label:'Decision Theory & Investments', tag:'DECISION THEORY', icon:'stat', date:'Fri 18 Dec · 09:00–10:30', note:'Written exam, 90 minutes.'},
  {label:'Bookkeeping & Accounting', tag:'ACCOUNTING', icon:'acc', date:'Mon 21 Dec · 09:00–12:00', note:'Shares the exam slot with Financial Statement Analysis.'},
  {label:'Financial Statement Analysis', tag:'FSA', icon:'acc', date:'Mon 21 Dec · 09:00–12:00', note:'Shares the exam slot with Bookkeeping & Accounting.'}
];
homeIcon = function(id){
  if(id==='mkt') return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M3 11v2l13 5V6L3 11z"/><path d="M16 9a3 3 0 0 1 0 6"/><path d="M6 13.5V18h3v-3.4"/></svg>';
  if(id==='acc') return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>';
  if(id==='stat') return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>';
  return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M7 4H4v16h3M17 4h3v16h-3"/><path d="M9 9h2M13 9h2M9 15h2M13 15h2"/></svg>';
};

/* ============================================================ MASTERY / KNOWLEDGE ============================================================ */
fcMasteryLecture = function(){
  let gotit=0, partial=0, dontknow=0, total=0;
  M2_TOPICS.forEach(t=>{
    const known = ls('fc-'+t.id, {});
    Object.values(known).forEach(v=>{ if(v==='gotit') gotit++; else if(v==='partial') partial++; else if(v==='dontknow') dontknow++; });
    total += t.cards.length;
  });
  const unrated = total - gotit - partial - dontknow;
  return { gotit, partial, dontknow: dontknow+unrated, total, pct: total? Math.round(gotit/total*100) : 0 };
};
// exam practice score per part: best fraction of checks passed (0..1); revealing the solution without checking counts as 0
function exKey(examId, n, part){ return `m2x-${examId}-${n}-${part}`; }
function exScore(examId, x){
  let got = 0, any = false;
  x.parts.forEach(p=>{ const s = ls(exKey(examId, x.n, p.id), null); if(s && s.best!=null){ any = true; got += s.best*p.pts; } });
  return any ? got/x.pts : null;
}
function examScore(e){
  let got = 0, tot = 0, any = false;
  e.ex.forEach(x=>{ const s = exScore(e.id, x); tot += x.pts; if(s!=null){ any = true; got += s*x.pts; } });
  return any ? {pts:Math.round(got), tot, frac:got/tot} : null;
}
function bankState(){ return ls('m2-bank-state', {}); }
function typeScore(typeId){
  // exam practice (checks) + problem bank self-ratings for this exercise type
  const vals = [];
  M2_EXAMS.forEach(e=>e.ex.filter(x=>x.type===typeId || (typeId==='det' && x.type==='cramer') || (typeId==='hessian' && x.type==='lagrange')).forEach(x=>{ const s = exScore(e.id, x); if(s!=null) vals.push(s); }));
  const st = bankState();
  M2_BANK.filter(b=>b.type===typeId).forEach(b=>{ if(st[b.id]==='ok') vals.push(1); else if(st[b.id]==='half') vals.push(.5); else if(st[b.id]==='bad') vals.push(0); });
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
radarAxes = function(mode){
  if(mode==='types') return M2_TYPES.filter(t=>t.id!=='under').map(t=>({label:t.label, page:'m2-bank', bankType:t.id, score:typeScore(t.id)}));
  return M2_TOPICS.map(t=>({label:t.title, page:t.id, score:topicKnowledge(t)}));
};

/* ============================================================ STUDY PLAN ============================================================ */
planItemPool = function(){
  const items = [];
  const weightOf = s => s==null ? 1 : 1-s;
  M2_TOPICS.forEach(t=> items.push({subj:'m2', label:`Ch. ${t.ch} · ${t.title}`, page:t.id, weight:weightOf(topicKnowledge(t)), size:topicSize(t)}));
  M2_EXAMS.forEach(e=>{ const s = examScore(e); items.push({subj:'exam', label:`${e.title} — all 6 exercises`, page:'m2-'+e.id, weight:s==null ? .95 : 1-s.frac, size:40}); });
  M2_TYPES.filter(t=>t.id!=='under').forEach(t=>{ const s = typeScore(t.id); items.push({subj:'bank', label:`Old exams: ${t.label}`, page:'m2-bank', bankType:t.id, weight:s==null ? .8 : 1-s, size:M2_BANK.filter(b=>b.type===t.id).length}); });
  items.push({subj:'exam', label:'Mock Exam — 90 minutes, full conditions', page:'m2-sim', weight:.7, size:30});
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  const ranked = items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size);
  ranked.slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  return items;
};
planDaysLeft = function(){ return Math.max(1, Math.ceil((PLAN_EXAM_M2 - planStart())/86400000)); };
// chapters first, then exams/bank, mocks towards the end (stable, readable order within the spread)
const __planScheduleBase = planSchedule;
planSchedule = function(item, idx){
  const days = __planScheduleBase(item, idx);
  if(item.page==='m2-sim'){ const h = planDaysLeft(); return Array.from(new Set([Math.max(1,h-10), Math.max(1,h-4), Math.max(1,h-1)])); }
  return days;
};
buildStudyPlan = function(){
  registerPage('plan', (div)=>{
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">Math II</div><h2>Study Plan</h2><p>See where you are weak, then follow a day-by-day plan up to the exam on 14 December. Weak chapters and exercise types show up more often; mock exams sit at the end.</p></div>
      <div class="page-body">
        <div class="radar-card glass">
          <div class="radar-head"><h3>Weak-Spot Radar</h3>
            <div class="tabbar radar-tabs"><button class="tabbtn" data-subj="topics">Chapters</button><button class="tabbtn" data-subj="types">Exam exercise types</button></div>
          </div>
          <div class="radar-wrap"><div class="radar-svg-wrap"></div><div class="radar-side"><div class="radar-list"></div><div class="radar-reco"></div></div></div>
        </div>
        <div class="plan-settings glass" style="padding:18px 22px;border-radius:var(--radius);">
          <label>Plan starts on
            <span class="plan-start-row"><input type="date" class="plan-start-input" max="${planIso(PLAN_EXAM_M2)}"><button type="button" class="btn ghost plan-start-today">Today</button></span>
          </label>
          <label>Math II — exam date
            <span class="plan-exam-val" data-subj="m2"></span>
          </label>
          <button class="btn ghost plan-regen">Regenerate plan</button>
        </div>
        <div class="plan-legend"><span class="plan-badge prio">Priority</span> weakest topics, do these first <span class="plan-badge large">Lots of content</span> big topic, plan extra time</div>
        <div id="plan-days-list"></div>
      </div>`;
    const startInput = div.querySelector('.plan-start-input');
    startInput.value = planIso(planStart());
    startInput.addEventListener('change', ()=>{ if(!startInput.value) return; lsSet('plan-start', startInput.value); renderPlanDays(div); });
    div.querySelector('.plan-start-today').addEventListener('click', ()=>{ lsSet('plan-start', null); startInput.value = planIso(planStart()); renderPlanDays(div); });
    div.querySelector('.plan-regen').addEventListener('click', ()=>renderPlanDays(div));
    div.querySelector('.radar-tabs').addEventListener('click', e=>{ const b = e.target.closest('.tabbtn'); if(!b) return; div.dataset.radarSubj = b.dataset.subj; renderRadar(div); });
    div.querySelector('#plan-days-list').addEventListener('change', e=>{
      const cb = e.target.closest('input[type=checkbox][data-key]'); if(!cb) return;
      const state = ls('plan-checks', {}); state[cb.dataset.key] = cb.checked; lsSet('plan-checks', state); renderPlanDays(div);
    });
    renderPlanDays(div);
  });
};
const __renderPlanDaysBase = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysBase(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val').forEach(el=>{ el.textContent = `${PLAN_EXAM_M2.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft()}d`; });
  const tagName = {m2:'CHAPTER', exam:'EXAM', bank:'BANK'};
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ const k = el.textContent.toLowerCase(); if(tagName[k]) el.textContent = tagName[k]; });
  div.querySelectorAll('.plan-item label').forEach(l=>{
    const txt = l.textContent; const bt = M2_TYPES.find(t=>txt==='Old exams: '+t.label);
    if(bt) l.setAttribute('onclick', `event.preventDefault();navTo('m2-bank');bankFilter('${bt.id}')`);
  });
};
const __renderRadarBase = renderRadar;
renderRadar = function(div){
  if(!div.dataset.radarSubj) div.dataset.radarSubj = 'topics';
  __renderRadarBase(div);
  if(div.dataset.radarSubj==='types'){
    const axes = radarAxes('types');
    div.querySelectorAll('.radar-row').forEach(r=>{
      const lab = r.querySelector('.radar-row-label').textContent; const a = axes.find(x=>x.label===lab);
      if(a) r.setAttribute('onclick', `navTo('m2-bank');bankFilter('${a.bankType}')`);
    });
    const reco = div.querySelector('.radar-reco');
    if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes/, 'Use "Check full" in Exam Prep and rate old exam tasks');
  }
};

/* ============================================================ TOPIC PAGES ============================================================ */
buildTopicPage = function(t){
  registerPage(t.id, (div)=>{
    const exams = [];
    M2_EXAMS.forEach(e=>e.ex.forEach(x=>{ if(x.topic===t.id) exams.push({e, x}); }));
    div.innerHTML = `
      <div class="page-header">
        <div class="eyebrow">${icon('summary')} Chapter ${t.ch}</div>
        <h2>${esc(t.title)}</h2>
        <p>${esc(t.examWeight)}</p>
      </div>
      <div class="page-body">
        ${exams.length?`<div class="chip-row"><span class="chip-label">Practise in real exams:</span>${exams.map(({e,x})=>`<button class="chip" onclick="navTo('m2-${e.id}');document.querySelector('#page-m2-${e.id} .ex-tab[data-ex=&quot;${x.n}&quot;]').click()">${e.year} · Ex. ${x.n}</button>`).join('')}</div>`:''}
        <div class="tabbar">
          <button class="tabbtn active" data-tab="sum">Summary</button>
          <button class="tabbtn" data-tab="fc">Flashcards</button>
          <button class="tabbtn" data-tab="qz">Quiz</button>
        </div>
        <div class="tabpanel active" id="${t.id}-sum"></div>
        <div class="tabpanel" id="${t.id}-fc"></div>
        <div class="tabpanel" id="${t.id}-qz"></div>
      </div>`;
    div.querySelectorAll('.tabbtn').forEach(btn=>{
      btn.onclick = ()=>{
        div.querySelectorAll('.tabbtn').forEach(b=>b.classList.remove('active'));
        div.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
        btn.classList.add('active');
        const panel = div.querySelector(`#${t.id}-${btn.dataset.tab}`);
        panel.classList.add('active');
        if(btn.dataset.tab==='fc' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderFlashcards(panel, t.cards, 'fc-'+t.id); }
        if(btn.dataset.tab==='qz' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderQuiz(panel, shuffledQuiz(t), 'quiz-'+t.id); }
      };
    });
    renderSummary(div.querySelector(`#${t.id}-sum`), t.title, t.summary, t.id);
  });
};
// authored options always list the right answer first — shuffle once per page build
function shuffledQuiz(t){
  return t.quiz.map(q=>{ const order = shuffle(q.opts.map((_,i)=>i)); return {...q, opts:order.map(i=>q.opts[i]), correct:order.indexOf(q.correct)}; });
}

/* ============================================================ MATH II HOME ============================================================ */
function buildM2Home(){
  registerPage('m2-home', (div)=>{
    const days = Math.max(0, Math.ceil((PLAN_EXAM_M2 - new Date().setHours(0,0,0,0))/86400000));
    const slot = [['Ex. 1','Solvability with a, b (Gauss)',12],['Ex. 2','Market shares / economic LES',16],['Ex. 3','Laplace determinant or Cramer',12],['Ex. 4','Inverse: coupon stripping',15],['Ex. 5','Extreme values: Hessian / Lagrange',18],['Ex. 6','Linear optimization (simplex)',17]];
    div.innerHTML = `
      <div class="page-header">
        <div class="eyebrow">${icon('home')} Mathematics II — Linear Algebra</div>
        <h2>Math II</h2>
        <p>Prof. Rülke · 7 chapters · the exam always has the same six exercise types, so the fastest route is: understand the chapter, then drill the matching exam exercise.</p>
      </div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Mon 14 Dec 2026 · 09:00–12:00 · ${days} days</span></div>
          <div class="exam-grid">
            <div class="exam-col">
              <div class="exam-label">Quantitative Analytics II · 180 points (two 90-min exams)</div>
              <div class="exam-bar"><span class="me" style="flex:90">Math II 90</span><span style="flex:90">Statistics 90</span></div>
              <p class="exam-total">You pass the module with <b>90 of 180 points</b> in total. Math II: <b>90 points in 90 minutes</b>, one point ≈ one minute.</p>
              <ul class="exam-facts" style="margin-top:12px">
                <li><b>Allowed:</b> EBS-approved calculator and a one-page DIN A4 cheat sheet (student number on it, <b>no name</b>, hand it in with the exam).</li>
                <li><b>Graded:</b> the way to the result — always show your intermediate steps and tableaux.</li>
              </ul>
            </div>
            <div class="exam-col">
              <div class="exam-label">The six exercises (2022–2025 pattern)</div>
              <table class="slot-table">${slot.map(s=>`<tr><td><b>${s[0]}</b></td><td>${s[1]}</td><td>~${s[2]} P</td></tr>`).join('')}</table>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('m2-e25')">Start with Exam 2025 →</button>
            <button class="btn ghost" onclick="navTo('m2-sim')">90-min mock exam</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        ${lectureMasteryHtml('m2')}
        <div class="nav-section-label" style="padding-left:0;margin-top:8px;">Past exams — interactive (newest are most relevant)</div>
        <div class="tool-tiles">
          ${M2_EXAMS.map(e=>{ const s = examScore(e); return `<div class="tool-tile" onclick="navTo('m2-${e.id}')"><div class="ic">${icon('doc')}</div><h4>${e.title}${e.latest?' <span class="new-dot">newest</span>':''}</h4><p>${s?`Your checks: ${s.pts}/${s.tot} P`:'6 exercises · hints · checks · full solutions'}</p></div>`; }).join('')}
          <div class="tool-tile" onclick="navTo('m2-bank')"><div class="ic">${icon('quiz')}</div><h4>Problem Bank</h4><p>150 original tasks 2005–2021, sorted by type.</p></div>
          <div class="tool-tile" onclick="navTo('m2-sim')"><div class="ic">${icon('timer')}</div><h4>Mock Exam</h4><p>Random 6-exercise exam, 90-min timer, self-grading.</p></div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Chapters</div>
        <div class="topic-grid">
          ${M2_TOPICS.map(t=>`<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">CHAPTER ${t.ch}</div><h4>${esc(t.title)}</h4><p>${t.cards.length} flashcards · ${t.quiz.length} quiz questions</p>${fcMasteryHtml('fc-'+t.id, t.cards.length)}</div>`).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('m2-cheat')"><div class="ic">${icon('cheat')}</div><h4>Cheat Sheet</h4><p>All formulas + exam recipes. Prints on one A4 page.</p></div>
          <div class="tool-tile" onclick="navTo('m2-lab')"><div class="ic">${icon('calc')}</div><h4>Matrix Lab</h4><p>Check your own Gauss, inverse, determinant, Hessian and simplex steps.</p></div>
          <div class="tool-tile" onclick="navTo('m2-drill')"><div class="ic">${icon('logic')}</div><h4>Random Drills</h4><p>Endless fresh numbers: determinants, Cramer, definiteness, market shares.</p></div>
        </div>
      </div>`;
  });
}
lectureMasteryHtml = (function(base){ return function(subj){ return base(subj||'m2'); }; })(lectureMasteryHtml);

/* ============================================================ CHEAT SHEET ============================================================ */
function buildM2Cheat(){
  registerPage('m2-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>Cheat Sheet</h2><p>Everything you need on the one allowed A4 page: formulas, rules and the recipe for each of the six exam exercises. Your highlights are printed too.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="m2-cheat-body" class="cheat-print"></div></div>`;
    renderCheat(div.querySelector('#m2-cheat-body'), M2_CHEAT, '', 'm2-cheat');
  });
}
function printCheat(){ document.body.classList.add('print-cheat'); window.print(); setTimeout(()=>document.body.classList.remove('print-cheat'), 500); }
window.addEventListener('afterprint', ()=>document.body.classList.remove('print-cheat'));

/* ============================================================ EXAM PREP (interactive, like Micro/Macro S1/1) ============================================================ */
function answerNorm(s){
  const sub = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','ᵦ':'b'};
  return String(s).toLowerCase()
    .replace(/[₀-₉]/g, c=>sub[c])
    .replace(/[−–—]/g,'-').replace(/≠|=\/=|<>|not ?equal( to)?|ungleich/g,'!=').replace(/≤|=</g,'<=').replace(/≥|=>/g,'>=')
    .replace(/½/g,'1/2').replace(/⅓/g,'1/3').replace(/⅔/g,'2/3').replace(/¼/g,'1/4').replace(/¾/g,'3/4')
    .replace(/(\d),(\d)/g,'$1.$2').replace(/[·×*]/g,'').replace(/λ/g,'λ').replace(/lambda/g,'λ')
    .replace(/_/g,'').replace(/\s+/g,'');
}
function buildExamPage(e){
  registerPage('m2-'+e.id, (div)=>{
    div.innerHTML = `
      <div class="page-header">
        <div class="eyebrow">${icon('doc')} Exam Prep${e.latest?' · newest exam':''}</div>
        <h2>${e.title}</h2>
        <p>90 points · 90 minutes. Write your solution, then <b>Check so far</b> (what is already right) or <b>Check full</b> (what is still missing). Hints come one at a time; the full solution shows every tableau.</p>
        <div class="exam-toolbar"><span class="exam-score" data-score></span><button class="btn ghost" data-timer>⏱ Start 90-min timer</button><span class="exam-timer" data-clock></span></div>
      </div>
      <div class="page-body">
        <div class="ex-tabs">${e.ex.map((x,i)=>`<button class="ex-tab${i?'':' active'}" data-ex="${x.n}"><b>Ex. ${x.n}</b><span>${esc(x.title)}</span><i>${x.pts} P</i></button>`).join('')}</div>
        ${e.ex.map((x,i)=>`<section class="ex-panel${i?'':' active'}" data-ex="${x.n}"></section>`).join('')}
      </div>`;
    const updateScore = ()=>{ const s = examScore(e); div.querySelector('[data-score]').innerHTML = s ? `Checked so far: <b>${s.pts}</b> / 90 points` : 'No checks yet'; };
    updateScore();
    div.querySelectorAll('.ex-tab').forEach(b=>b.addEventListener('click', ()=>{
      div.querySelectorAll('.ex-tab').forEach(x=>x.classList.toggle('active', x===b));
      div.querySelectorAll('.ex-panel').forEach(p=>p.classList.toggle('active', p.dataset.ex===b.dataset.ex));
      const panel = div.querySelector(`.ex-panel[data-ex="${b.dataset.ex}"]`);
      if(!panel.dataset.loaded){ panel.dataset.loaded='1'; renderExercise(panel, e, e.ex.find(x=>String(x.n)===b.dataset.ex), updateScore); }
      requestAnimationFrame(updateHlIslandVisibility);
    }));
    renderExercise(div.querySelector('.ex-panel.active'), e, e.ex[0], updateScore);
    div.querySelector('.ex-panel.active').dataset.loaded = '1';
    examTimer(div.querySelector('[data-timer]'), div.querySelector('[data-clock]'), 'm2-timer-'+e.id);
  });
}
function examTimer(btn, clock, key){
  let h = null;
  const fmt = s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
  const tick = ()=>{
    const st = ls(key, null);
    if(!st){ clock.textContent=''; btn.textContent='⏱ Start 90-min timer'; return; }
    const left = Math.max(0, Math.round((st.end - Date.now())/1000));
    clock.textContent = left ? fmt(left)+' left' : "Time's up";
    clock.classList.toggle('late', left < 600);
    btn.textContent = 'Reset timer';
    if(!left && h){ clearInterval(h); h = null; }
  };
  btn.addEventListener('click', ()=>{
    if(ls(key, null)){ lsSet(key, null); if(h){ clearInterval(h); h = null; } tick(); return; }
    lsSet(key, {end: Date.now() + 90*60*1000}); tick(); h = setInterval(tick, 1000);
  });
  if(ls(key, null)){ tick(); h = setInterval(tick, 1000); }
}
function renderExercise(panel, e, x, onScore){
  panel.innerHTML = `
    <div class="ex-head"><h3>Exercise ${x.n}: ${esc(x.title)} <span class="pts-badge">${x.pts} points</span></h3>
      <button class="chip" onclick="navTo('${x.topic}')">Chapter ${M2_TOPICS.find(t=>t.id===x.topic).ch}: ${esc(M2_TOPICS.find(t=>t.id===x.topic).title)} →</button></div>
    ${x.note?`<div class="exam-note">${esc(x.note)}</div>`:''}
    <div class="given-card">${richHtml(x.given)}</div>
    ${x.parts.length>1?`<div class="tabbar part-tabs">${x.parts.map((p,i)=>`<button class="tabbtn${i?'':' active'}" data-part="${p.id}">${esc(p.label)} · ${p.pts} P</button>`).join('')}</div>`:''}
    ${x.parts.map((p,i)=>`<div class="part-panel${i?'':' active'}" data-part="${p.id}"></div>`).join('')}`;
  panel.querySelectorAll('.part-tabs .tabbtn').forEach(b=>b.addEventListener('click', ()=>{
    panel.querySelectorAll('.part-tabs .tabbtn').forEach(t=>t.classList.toggle('active', t===b));
    panel.querySelectorAll('.part-panel').forEach(pp=>pp.classList.toggle('active', pp.dataset.part===b.dataset.part));
  }));
  x.parts.forEach((p, pi)=>{
    const pp = panel.querySelector(`.part-panel[data-part="${p.id}"]`);
    const key = exKey(e.id, x.n, p.id);
    const st = ls(key, {ans:'', hints:0, best:null, sol:false});
    pp.innerHTML = `
      <div class="q-card"><div class="q-title">${esc(p.label)} <span class="pts-badge">${p.pts} P</span></div><div class="q-text">${richHtml(p.q)}</div></div>
      <div class="ans-card">
        <div class="q-title">Your answer</div>
        <textarea class="ans-input" rows="5" placeholder="Write your steps and results… e.g. a != -4, x1 = 10, rk(A) = 3, buy 1 BMW"></textarea>
        <div class="ans-actions">
          <button class="btn ghost" data-act="partial">Check so far</button>
          <button class="btn" data-act="full">Check full</button>
          <span class="ans-best"></span>
        </div>
        <div class="ans-feedback"></div>
      </div>
      <div class="ans-actions">
        <button class="btn ghost" data-act="hint">+ Next hint</button>
        <button class="btn ghost" data-act="sol">Show solution</button>
        ${pi < x.parts.length-1 ? `<button class="btn ghost" data-act="next" style="margin-left:auto">Next part →</button>` : ''}
      </div>
      <div class="hint-list"></div>
      <div class="sol-card" hidden><div class="q-title">Solution ${esc(p.label)}</div><div class="sol-body"></div></div>`;
    const ta = pp.querySelector('.ans-input');
    ta.value = st.ans || '';
    ta.addEventListener('input', ()=>{ st.ans = ta.value; lsSet(key, st); });
    const hintList = pp.querySelector('.hint-list');
    const hintBtn = pp.querySelector('[data-act="hint"]');
    const showHints = ()=>{
      hintList.innerHTML = p.hints.slice(0, st.hints).map((h,i)=>`<div class="hint"><b>Hint ${i+1}</b> ${mathText(h)}</div>`).join('');
      hintBtn.disabled = st.hints >= p.hints.length;
      hintBtn.textContent = st.hints >= p.hints.length ? 'No more hints' : `+ Next hint (${st.hints}/${p.hints.length})`;
    };
    showHints();
    const best = pp.querySelector('.ans-best');
    const showBest = ()=>{ best.textContent = st.best!=null ? `Best check: ${Math.round(st.best*100)}% ≈ ${Math.round(st.best*p.pts)}/${p.pts} P` : ''; };
    showBest();
    const solCard = pp.querySelector('.sol-card');
    const showSol = ()=>{ solCard.hidden = false; const body = solCard.querySelector('.sol-body'); if(!body.innerHTML) body.innerHTML = richHtml(p.sol); };
    if(st.sol) showSol();
    pp.addEventListener('click', ev=>{
      const b = ev.target.closest('[data-act]'); if(!b) return;
      const act = b.dataset.act;
      if(act==='hint'){ st.hints = Math.min(p.hints.length, st.hints+1); lsSet(key, st); showHints(); }
      else if(act==='sol'){ st.sol = true; if(st.best==null){ st.best = 0; } lsSet(key, st); showSol(); showBest(); onScore(); }
      else if(act==='next'){ const nb = panel.querySelector(`.part-tabs .tabbtn[data-part="${x.parts[pi+1].id}"]`); if(nb) nb.click(); }
      else if(act==='partial' || act==='full'){
        const v = answerNorm(ta.value);
        const fb = pp.querySelector('.ans-feedback');
        if(!v){ fb.className = 'ans-feedback show warn'; fb.innerHTML = 'Write something first.'; return; }
        const res = p.checks.map(c=>({c, ok:c.rx.test(v)}));
        const n = res.filter(r=>r.ok).length;
        const frac = n/res.length;
        if(act==='full'){ st.best = Math.max(st.best||0, frac); lsSet(key, st); showBest(); onScore(); }
        fb.className = 'ans-feedback show ' + (frac===1 ? 'good' : frac>=.5 ? 'mid' : 'warn');
        if(act==='partial'){
          fb.innerHTML = `<b>${n} of ${res.length} key elements found.</b>` + (n ? `<ul>${res.filter(r=>r.ok).map(r=>`<li class="ok">✓ ${esc(r.c.name)}: ${esc(r.c.label)}</li>`).join('')}</ul>` : '') + (n<res.length ? `<div class="fb-note">Keep going — use "Check full" to see what is missing.</div>` : '');
        } else {
          fb.innerHTML = `<b>${frac===1 ? 'Complete!' : `${n} of ${res.length} key elements`}</b><ul>${res.map(r=>`<li class="${r.ok?'ok':'miss'}">${r.ok?'✓':'✗'} ${esc(r.c.name)}${r.ok?'':' — '+esc(r.c.miss)}</li>`).join('')}</ul><div class="fb-note">The check looks for key results in your text (e.g. <code>a != -4</code>, <code>x1 = 10</code>). Compare with the solution for the full way.</div>`;
        }
      }
    });
  });
}

/* ============================================================ PROBLEM BANK ============================================================ */
let bankFilterType = null;
function bankFilter(type){ bankFilterType = type; const pg = document.getElementById('page-m2-bank'); if(pg && pg.__render) pg.__render(); }
function bankOpen(id){
  const b = M2_BANK.find(x=>x.id===id); if(!b) return;
  bankFilterType = b.type;
  const pg = document.getElementById('page-m2-bank'); if(pg && pg.__render) pg.__render();
  requestAnimationFrame(()=>{ const card = document.querySelector(`.bank-card[data-id="${id}"]`); if(card){ card.querySelector('details').open = true; loadBankImgs(card); card.scrollIntoView({block:'center', behavior:'smooth'}); } });
}
function loadBankImgs(card){ card.querySelectorAll('img[data-src]').forEach(img=>{ img.src = img.dataset.src; img.removeAttribute('data-src'); }); }
function buildM2Bank(){
  registerPage('m2-bank', (div)=>{
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('quiz')} Exam Prep</div><h2>Problem Bank 2005–2021</h2>
        <p>All ${M2_BANK.length} exercises of the older exams and retakes, cut straight from the original sheet — nothing retyped, so every number is exact. Solve on paper, reveal the official pointer to the solution, then rate yourself. Ratings feed the Weak-Spot Radar.</p></div>
      <div class="page-body">
        <div class="chip-row bank-types"></div>
        <div class="bank-controls"><label>Sort <select class="bank-sort"><option value="new">Newest first</option><option value="old">Oldest first</option></select></label><label><input type="checkbox" class="bank-open"> only unsolved / needs work</label><span class="bank-count"></span></div>
        <div class="exam-note">Graphs (market-share diagrams, production chains) sometimes float to the top of the solution in the original sheet — if a question refers to a graph you cannot see, peek at the first lines of the solution.</div>
        <div class="bank-list"></div>
      </div>`;
    const render = ()=>{
      const st = bankState();
      div.querySelector('.bank-types').innerHTML = `<button class="chip${!bankFilterType?' active':''}" data-t="">All (${M2_BANK.length})</button>` + M2_TYPES.map(t=>{ const n = M2_BANK.filter(b=>b.type===t.id).length; if(!n) return ''; const done = M2_BANK.filter(b=>b.type===t.id && st[b.id]==='ok').length; return `<button class="chip${bankFilterType===t.id?' active':''}" data-t="${t.id}">${esc(t.label)} <i>${done}/${n}</i></button>`; }).join('');
      const onlyOpen = div.querySelector('.bank-open').checked;
      let list = M2_BANK.filter(b=>(!bankFilterType || b.type===bankFilterType) && (!onlyOpen || st[b.id]!=='ok'));
      list = list.slice().sort((a,b)=>(div.querySelector('.bank-sort').value==='old'?1:-1)*((a.year-b.year) || (a.retake-b.retake)) || a.n-b.n);
      div.querySelector('.bank-count').textContent = `${list.length} exercises`;
      div.querySelector('.bank-list').innerHTML = list.map(b=>`
        <div class="bank-card ${st[b.id]||''}" data-id="${b.id}">
          <details>
            <summary><span class="bank-exam">${esc(b.exam)}</span><span class="bank-title">Ex. ${b.n}: ${esc(b.title)}</span><span class="bank-pts">${b.pts?b.pts+' P':''}</span><span class="bank-status">${st[b.id]==='ok'?'✓ solved':st[b.id]==='half'?'≈ partly':st[b.id]==='bad'?'✗ needs work':''}</span></summary>
            <div class="bank-body">
              <img class="bank-img" data-src="${b.q}" alt="${esc(b.exam)} exercise ${b.n}">
              <div class="ans-actions"><button class="btn ghost" data-bact="sol">Show official solution</button></div>
              <div class="bank-sol" hidden><img class="bank-img" data-src="${b.a}" alt="Solution"></div>
              <div class="ans-actions bank-rate"><span>How did it go?</span><button class="btn ghost" data-rate="ok">✓ Solved</button><button class="btn ghost" data-rate="half">≈ Partly</button><button class="btn ghost" data-rate="bad">✗ Needs work</button></div>
            </div>
          </details>
        </div>`).join('') || '<p style="color:var(--ink-soft)">Nothing left here — well done.</p>';
    };
    div.__render = render;
    div.addEventListener('click', ev=>{
      const chip = ev.target.closest('.bank-types .chip');
      if(chip){ bankFilterType = chip.dataset.t || null; render(); return; }
      const card = ev.target.closest('.bank-card'); if(!card) return;
      if(ev.target.closest('summary')) setTimeout(()=>loadBankImgs(card), 0);
      const sb = ev.target.closest('[data-bact="sol"]');
      if(sb){ const s = card.querySelector('.bank-sol'); s.hidden = !s.hidden; sb.textContent = s.hidden ? 'Show official solution' : 'Hide solution'; loadBankImgs(card); }
      const rb = ev.target.closest('[data-rate]');
      if(rb){ const st = bankState(); st[card.dataset.id] = rb.dataset.rate; lsSet('m2-bank-state', st); const open = card.dataset.id; render(); const c2 = div.querySelector(`.bank-card[data-id="${open}"]`); if(c2){ c2.querySelector('details').open = true; loadBankImgs(c2); } }
    });
    div.querySelector('.bank-sort').addEventListener('change', render);
    div.querySelector('.bank-open').addEventListener('change', render);
    render();
  });
}

/* ============================================================ MOCK EXAM SIMULATOR ============================================================ */
function buildM2Sim(){
  registerPage('m2-sim', (div)=>{
    const slots = [['solv','Exercise 1 · Solvability / Gauss'],['market','Exercise 2 · Market shares / economic LES'],['det','Exercise 3 · Determinant / Cramer'],['inverse','Exercise 4 · Inverse'],['hessian','Exercise 5 · Extreme values'],['lp','Exercise 6 · Linear optimization']];
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('timer')} Exam Prep</div><h2>Mock Exam</h2>
        <p>A fresh exam in the real 2022–2025 structure: one original exercise per slot, drawn from the ${M2_BANK.length} old tasks. 90 minutes, paper and calculator, your cheat sheet. Afterwards reveal the solutions and grade yourself.</p></div>
      <div class="page-body"><div class="sim-area"></div><div class="sim-history"></div></div>`;
    const area = div.querySelector('.sim-area');
    let timer = null;
    const hist = ()=>{
      const h = ls('m2-sim-history', []);
      div.querySelector('.sim-history').innerHTML = h.length ? `<div class="nav-section-label" style="padding-left:0;margin-top:26px">Your mock exams</div><div class="sim-hist">${h.slice(-8).reverse().map(r=>`<div class="sim-hist-row"><span>${new Date(r.date).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</span><div class="qb-bar"><div class="qb-bar-fill" style="width:${Math.round(r.pts/r.tot*100)}%;background:${r.pts>=45?'var(--good)':'var(--bad)'}"></div></div><b>${r.pts}/${r.tot}</b></div>`).join('')}</div>` : '';
    };
    const start = ()=>{
      const picks = slots.map(([t,label])=>{ const pool = M2_BANK.filter(b=>b.type===t); return {label, b:pool[Math.floor(Math.random()*pool.length)]}; });
      const end = Date.now() + 90*60*1000;
      area.innerHTML = `<div class="sim-bar glass"><b class="sim-clock">90:00</b><span>${picks.reduce((s,p)=>s+(p.b.pts||15),0)} points in this exam</span><button class="btn" data-sim="finish">Finish &amp; grade</button></div>
        ${picks.map((p,i)=>`<div class="sim-ex" data-i="${i}"><div class="q-title">${esc(p.label)} <span class="pts-badge">${p.b.pts||'?'} P</span> <span class="bank-exam">${esc(p.b.exam)}</span></div><img class="bank-img" src="${p.b.q}" alt="exercise"><div class="sim-sol" hidden><img class="bank-img" src="${p.b.a}" alt="solution"><div class="sim-grade"><label>Your points <input type="number" min="0" max="${p.b.pts||20}" step="1" value="0"></label> / ${p.b.pts||'?'}</div></div></div>`).join('')}`;
      const clock = area.querySelector('.sim-clock');
      clearInterval(timer);
      timer = setInterval(()=>{ const s = Math.max(0, Math.round((end-Date.now())/1000)); clock.textContent = `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`; clock.classList.toggle('late', s<600); if(!s){ clearInterval(timer); finish(); } }, 1000);
      const finish = ()=>{
        clearInterval(timer);
        area.querySelectorAll('.sim-sol').forEach(s=>s.hidden = false);
        const bar = area.querySelector('.sim-bar');
        bar.innerHTML = `<b>Grade yourself with the official solutions</b><button class="btn" data-sim="save">Save score</button>`;
      };
      area.onclick = ev=>{
        const b = ev.target.closest('[data-sim]'); if(!b) return;
        if(b.dataset.sim==='finish') finish();
        if(b.dataset.sim==='save'){
          let pts = 0, tot = 0;
          area.querySelectorAll('.sim-ex').forEach((ex,i)=>{ const inp = ex.querySelector('input'); const max = picks[i].b.pts||15; pts += Math.min(max, Math.max(0, +inp.value||0)); tot += max; });
          const h = ls('m2-sim-history', []); h.push({date:Date.now(), pts, tot}); lsSet('m2-sim-history', h);
          area.innerHTML = `<div class="sim-result glass"><h3>${pts} / ${tot} points</h3><p>${pts/tot>=.5?'That would be enough for your half of the module.':'Below 50% — check the radar and drill the weak exercise types.'}</p><button class="btn" data-sim="new">New mock exam</button></div>`;
          hist();
        }
        if(b.dataset.sim==='new') start();
      };
    };
    area.innerHTML = `<div class="sim-start glass"><ul class="exam-facts">${slots.map(s=>`<li>${esc(s[1])}</li>`).join('')}</ul><button class="btn" data-go>Start mock exam (90:00)</button></div>`;
    area.querySelector('[data-go]').addEventListener('click', start);
    hist();
  });
}

/* ============================================================ EXACT FRACTIONS ============================================================ */
function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ [a,b]=[b,a%b]; } return a||1; }
class Fr{
  constructor(n,d=1){ if(d<0){ n=-n; d=-d; } const g = gcd(n,d); this.n = n/g; this.d = d/g; }
  static of(v){
    if(v instanceof Fr) return v;
    const s = String(v).trim().replace(',', '.').replace('−','-');
    if(/^-?\d+\/\d+$/.test(s)){ const [a,b] = s.split('/').map(Number); return new Fr(a,b); }
    if(/^-?\d*\.?\d+$/.test(s)){ const dec = (s.split('.')[1]||'').length; const d = Math.pow(10,dec); return new Fr(Math.round(parseFloat(s)*d), d); }
    return null;
  }
  add(o){ return new Fr(this.n*o.d + o.n*this.d, this.d*o.d); }
  sub(o){ return new Fr(this.n*o.d - o.n*this.d, this.d*o.d); }
  mul(o){ return new Fr(this.n*o.n, this.d*o.d); }
  div(o){ return new Fr(this.n*o.d, this.d*o.n); }
  get zero(){ return this.n===0; }
  sign(){ return Math.sign(this.n); }
  val(){ return this.n/this.d; }
  tex(){ if(this.d===1) return String(this.n); return (this.n<0?'-':'')+`\\tfrac{${Math.abs(this.n)}}{${this.d}}`; }
  str(){ return this.d===1 ? String(this.n) : `${this.n}/${this.d}`; }
}
function parseMatrix(text){
  const rows = text.trim().split(/\n+/).map(r=>r.trim().split(/[\s;|]+/).filter(Boolean).map(Fr.of));
  if(!rows.length || rows.some(r=>r.some(c=>c===null))) return null;
  const w = rows[0].length; if(rows.some(r=>r.length!==w)) return null;
  return rows;
}
function pivotStep(M, r, c){
  const p = M[r][c];
  return M.map((row,i)=> i===r ? row.map(v=>v.div(p)) : row.map((v,j)=> v.sub(row[c].mul(M[r][j]).div(p))));
}
function detFr(M){
  const n = M.length; if(n===1) return M[0][0];
  if(n===2) return M[0][0].mul(M[1][1]).sub(M[0][1].mul(M[1][0]));
  let s = new Fr(0);
  for(let j=0;j<n;j++){ if(M[0][j].zero) continue; const minor = M.slice(1).map(r=>r.filter((_,k)=>k!==j)); const t = M[0][j].mul(detFr(minor)); s = j%2 ? s.sub(t) : s.add(t); }
  return s;
}
function matTex(M, opts={}){
  const body = M.map(r=>r.map(v=>v.tex()).join(' & ')).join(' \\\\ ');
  return opts.bars ? `\\begin{vmatrix}${body}\\end{vmatrix}` : `\\begin{pmatrix}${body}\\end{pmatrix}`;
}

/* ============================================================ MATRIX LAB ============================================================ */
function buildM2Lab(){
  registerPage('m2-lab', (div)=>{
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('calc')} Tools</div><h2>Matrix Lab</h2><p>Check your own work with exact fractions. Type numbers separated by spaces, one row per line (fractions like <code>2/3</code> or decimals like <code>0.5</code> are fine).</p></div>
      <div class="page-body">
        <div class="tabbar lab-tabs">
          <button class="tabbtn active" data-lab="tab">Tableau / Gauss / Simplex</button>
          <button class="tabbtn" data-lab="inv">Inverse</button>
          <button class="tabbtn" data-lab="det">Determinant &amp; Cramer</button>
          <button class="tabbtn" data-lab="def">Definiteness (MSD)</button>
          <button class="tabbtn" data-lab="mkt">Market shares</button>
        </div>
        <div class="lab-panel active" data-lab="tab">
          <p class="lab-help">Enter a tableau (last column = RHS). <b>Click any cell to pivot on it</b> — exactly like on paper. For simplex, tick "first row is the z-row" and enter the objective coefficients with a minus sign.</p>
          <textarea class="lab-in" rows="5" spellcheck="false">-4 -1 0 0 0 0
3 0.5 1 0 0 80
2 1 0 1 0 120
0 -1 0 0 1 -10</textarea>
          <div class="ans-actions"><label><input type="checkbox" class="lab-z" checked> first row is the z-row (simplex)</label><button class="btn" data-go="load">Load tableau</button><button class="btn ghost" data-go="suggest">Suggest pivot (course rules)</button><button class="btn ghost" data-go="undo">Undo</button><button class="btn ghost" data-go="rank">Rank</button></div>
          <div class="lab-msg"></div><div class="lab-out"></div>
        </div>
        <div class="lab-panel" data-lab="inv">
          <textarea class="lab-in" rows="4" spellcheck="false">4 3 6
3 2 4
-2 -2 -6</textarea>
          <div class="ans-actions"><button class="btn" data-go="inv">Invert with steps</button></div><div class="lab-out"></div>
        </div>
        <div class="lab-panel" data-lab="det">
          <p class="lab-help">Square matrix → determinant (Laplace along the row/column with the most zeros, Sarrus for 3×3). Add a right-hand side column and tick Cramer to solve $A x = b$.</p>
          <textarea class="lab-in" rows="5" spellcheck="false">0 5 0 2 4
0 2 0 0 1
0 1 0 6 4
0 8 2 12 4
1 0 0 5 4</textarea>
          <div class="ans-actions"><label><input type="checkbox" class="lab-cramer"> last column is b (Cramer)</label><button class="btn" data-go="det">Calculate</button></div><div class="lab-out"></div>
        </div>
        <div class="lab-panel" data-lab="def">
          <p class="lab-help">Symmetric matrix (Hessian at a point, or the matrix of a quadratic form) → main section determinants and verdict.</p>
          <textarea class="lab-in" rows="3" spellcheck="false">44 8 -6
8 4 0
-6 0 6</textarea>
          <div class="ans-actions"><button class="btn" data-go="def">Classify</button></div><div class="lab-out"></div>
        </div>
        <div class="lab-panel" data-lab="mkt">
          <p class="lab-help">Transition matrix $T$ (rows = incoming, columns sum to 1) and starting shares $s_1$ as the last column.</p>
          <textarea class="lab-in" rows="3" spellcheck="false">0.6 0.4 0.1 0.6
0.4 0.4 0.4 0.2
0 0.2 0.5 0.2</textarea>
          <div class="ans-actions"><button class="btn" data-go="mkt">Next period &amp; steady state</button></div><div class="lab-out"></div>
        </div>
      </div>`;
    div.querySelector('.lab-help') && div.querySelectorAll('.lab-help').forEach(h=>h.innerHTML = mathRestoreInline(h.innerHTML));
    div.querySelectorAll('.lab-tabs .tabbtn').forEach(b=>b.addEventListener('click', ()=>{
      div.querySelectorAll('.lab-tabs .tabbtn').forEach(x=>x.classList.toggle('active', x===b));
      div.querySelectorAll('.lab-panel').forEach(p=>p.classList.toggle('active', p.dataset.lab===b.dataset.lab));
    }));
    // ---- tableau stepper
    const tp = div.querySelector('.lab-panel[data-lab="tab"]');
    let hist = [], used = [];
    const msg = (h, cls)=>{ const m = tp.querySelector('.lab-msg'); m.className = 'lab-msg show '+(cls||''); m.innerHTML = h; };
    const draw = ()=>{
      const M = hist[hist.length-1]; if(!M) return;
      const z = tp.querySelector('.lab-z').checked;
      const n = M[0].length - 1;
      tp.querySelector('.lab-out').innerHTML = `<div class="tab-row">${hist.slice(-3).map((T,k,arr)=>`${k?'<span class="tab-arrow">→</span>':''}<div class="tab-wrap"><div class="tab-cap">${hist.length-arr.length+k===0?'Start':'Step '+(hist.length-arr.length+k)}</div><table class="tableau lab-tab${k===arr.length-1?' live':''}"><thead><tr>${z?'<th></th>':''}${Array.from({length:n},(_,j)=>`<th>${katexHtml({tex:'x_{'+(j+1)+'}',disp:false})}</th>`).join('')}<th>RHS</th></tr></thead><tbody>${T.map((row,i)=>`<tr class="${z&&i===0?'zrow':''}">${z?`<td>${i===0?'z':''}</td>`:''}${row.map((v,j)=>`<td data-r="${i}" data-c="${j}">${katexHtml({tex:v.tex(),disp:false})}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`).join('')}</div>`;
    };
    tp.addEventListener('click', ev=>{
      const td = ev.target.closest('.lab-tab.live td[data-r]');
      if(td){
        const r = +td.dataset.r, c = +td.dataset.c, M = hist[hist.length-1];
        const z = tp.querySelector('.lab-z').checked;
        if(c===M[0].length-1){ msg('The RHS column cannot be a pivot column.', 'warn'); return; }
        if(z && r===0){ msg('The z-row is never used as pivot row.', 'warn'); return; }
        if(M[r][c].zero){ msg('A pivot element must not be zero.', 'warn'); return; }
        hist.push(pivotStep(M, r, c));
        msg(`Pivot on ${M[r][c].str()} (row ${z?r:r+1}, x${c+1}). ${optimalNote()}`);
        draw(); return;
      }
      const b = ev.target.closest('[data-go]'); if(!b) return;
      const go = b.dataset.go;
      if(go==='load'){ const M = parseMatrix(tp.querySelector('.lab-in').value); if(!M){ msg('Could not read the tableau — same number of numbers in every row?', 'warn'); return; } hist = [M]; msg('Loaded. Click a cell to pivot, or let the lab suggest one.'); draw(); }
      if(go==='undo'){ if(hist.length>1){ hist.pop(); draw(); msg('Undone.'); } }
      if(go==='rank'){ const M = hist[hist.length-1]; if(!M) return; const z = tp.querySelector('.lab-z').checked; const A = (z?M.slice(1):M).map(r=>r.slice(0,-1)); msg(`Rank of the coefficient matrix: <b>${rankFr(A)}</b>.`); }
      if(go==='suggest'){
        const M = hist[hist.length-1]; if(!M){ msg('Load a tableau first.', 'warn'); return; }
        const z = tp.querySelector('.lab-z').checked; const last = M[0].length-1;
        if(!z){ // plain Gauss-Jordan: next row without a unit column
          const done = new Set(); for(let c=0;c<last;c++){ const col = M.map(r=>r[c]); const ones = col.filter(v=>v.n===1&&v.d===1).length, zeros = col.filter(v=>v.zero).length; if(ones===1 && zeros===M.length-1) done.add(col.findIndex(v=>!v.zero)); }
          for(let r=0;r<M.length;r++){ if(done.has(r)) continue; const c = M[r].slice(0,last).findIndex(v=>!v.zero && Math.abs(v.val())===1); const c2 = c>=0?c:M[r].slice(0,last).findIndex(v=>!v.zero); if(c2>=0){ hi(r,c2); msg(`Suggestion: pivot row ${r+1}, column x${c2+1} (element ${M[r][c2].str()}).`); return; } }
          msg('Every row has been used as pivot row — you are done (a zero row means linear dependence).'); return;
        }
        const neg = M.slice(1).findIndex(r=>r[last].sign()<0);
        if(neg>=0){ const r = neg+1; const c = M[r].slice(0,last).findIndex(v=>v.sign()<0); if(c>=0){ hi(r,c); msg(`RHS of row ${r} is negative → the basis solution is infeasible. Pivot on a <b>negative</b> element of that row first, e.g. ${M[r][c].str()} in column x${c+1}.`, 'mid'); } else msg(`Row ${r} has a negative RHS but no negative coefficient — the problem is infeasible.`, 'warn'); return; }
        let c = -1, mn = null; M[0].slice(0,last).forEach((v,j)=>{ if(v.sign()<0 && (mn===null || v.val()<mn)){ mn = v.val(); c = j; } });
        if(c<0){ msg(`<b>Optimal.</b> All z-row entries are ≥ 0. Maximum z = ${M[0][last].str()}. ${readSolution(M)}`, 'good'); return; }
        let r = -1, best = null; for(let i=1;i<M.length;i++){ if(M[i][c].sign()>0){ const q = M[i][last].div(M[i][c]).val(); if(best===null || q<best){ best = q; r = i; } } }
        if(r<0){ msg(`Column x${c+1} has a negative z-entry but no positive coefficient → the solution is open-constrained (unbounded).`, 'warn'); return; }
        hi(r,c); msg(`Pivot column x${c+1} (most negative z-entry ${M[0][c].str()}), pivot row ${r} (smallest ratio ${M[r][last].str()} / ${M[r][c].str()} = ${+best.toFixed(4)}).`, 'mid');
      }
    });
    const hi = (r,c)=>{ tp.querySelectorAll('.lab-tab.live td').forEach(td=>td.classList.toggle('hl-pivot', +td.dataset.r===r && +td.dataset.c===c)); };
    const optimalNote = ()=>{ const M = hist[hist.length-1]; if(!tp.querySelector('.lab-z').checked) return ''; const last = M[0].length-1; if(M.slice(1).some(r=>r[last].sign()<0)) return 'A RHS is still negative.'; return M[0].slice(0,last).every(v=>v.sign()>=0) ? `<b>Optimal:</b> z = ${M[0][last].str()}. ${readSolution(M)}` : 'Not optimal yet (negative z-entry left).'; };
    const readSolution = (M)=>{ const last = M[0].length-1; const out = []; for(let c=0;c<last;c++){ const col = M.slice(1).map(r=>r[c]); const i = col.findIndex(v=>v.n===1&&v.d===1); const unit = i>=0 && col.every((v,k)=>k===i||v.zero) && M[0][c].zero; out.push(`x${c+1} = ${unit?M[i+1][last].str():'0'}`); } return out.join(', '); };
    // ---- inverse
    const ip = div.querySelector('.lab-panel[data-lab="inv"]');
    ip.querySelector('[data-go="inv"]').addEventListener('click', ()=>{
      const A = parseMatrix(ip.querySelector('.lab-in').value); const out = ip.querySelector('.lab-out');
      if(!A || A.length!==A[0].length){ out.innerHTML = '<p class="lab-msg show warn">Enter a square matrix.</p>'; return; }
      const n = A.length; let M = A.map((r,i)=>[...r, ...Array.from({length:n},(_,j)=>new Fr(i===j?1:0))]);
      const steps = [M]; const usedRows = new Set(); const colRow = [];
      for(let c=0;c<n;c++){
        let r = -1; for(let i=0;i<n;i++){ if(!usedRows.has(i) && !M[i][c].zero){ if(r<0 || (Math.abs(M[i][c].val())===1 && Math.abs(M[r][c].val())!==1)) r = i; } }
        if(r<0){ out.innerHTML = tabsFr(steps, n) + `<p class="lab-msg show warn">The last possible pivot element in column x${c+1} is 0 → <b>A is singular, the inverse does not exist</b>. Rank = ${c}.</p>`; return; }
        usedRows.add(r); colRow[c] = r; M = pivotStep(M, r, c); steps.push(M);
      }
      const inv = colRow.map(r=>M[r].slice(n));
      const permuted = colRow.some((r,c)=>r!==c);
      out.innerHTML = tabsFr(steps, n) + (permuted?`<p class="lab-msg show mid">Pivots outside the main diagonal were used → rows sorted back (columns unchanged).</p>`:'') + `<div class="lab-result">${katexHtml({tex:'A^{-1} = '+matTex(inv), disp:true})}<p>Row sums (risk-free coupon $(1,\\dots,1)^T$): ${inv.map(r=>r.reduce((s,v)=>s.add(v), new Fr(0)).str()).join(' · ')}</p></div>`;
      out.querySelectorAll('p').forEach(p=>p.innerHTML = mathRestoreInline(p.innerHTML));
    });
    // ---- determinant & Cramer
    const dp = div.querySelector('.lab-panel[data-lab="det"]');
    dp.querySelector('[data-go="det"]').addEventListener('click', ()=>{
      const M = parseMatrix(dp.querySelector('.lab-in').value); const out = dp.querySelector('.lab-out');
      const cr = dp.querySelector('.lab-cramer').checked;
      if(!M){ out.innerHTML = '<p class="lab-msg show warn">Could not read the matrix.</p>'; return; }
      const A = cr ? M.map(r=>r.slice(0,-1)) : M;
      if(A.length!==A[0].length){ out.innerHTML = '<p class="lab-msg show warn">The coefficient matrix must be square.</p>'; return; }
      const D = detFr(A);
      let html = `<div class="lab-result">${katexHtml({tex:matTex(A,{bars:true})+' = '+D.tex(), disp:true})}${laplaceHint(A)}</div>`;
      if(cr){
        if(D.zero) html += `<p class="lab-msg show warn">det A = 0 → Cramer's rule is not applicable (no unique solution).</p>`;
        else { const b = M.map(r=>r[r.length-1]); const xs = A.map((_,j)=>{ const Aj = A.map((r,i)=>r.map((v,k)=>k===j?b[i]:v)); const Dj = detFr(Aj); return {Dj, x:Dj.div(D)}; });
          html += `<div class="lab-result">${xs.map((o,j)=>katexHtml({tex:`x_{${j+1}} = \\dfrac{\\det A_{${j+1}}}{\\det A} = \\dfrac{${o.Dj.tex()}}{${D.tex()}} = ${o.x.tex()}`, disp:true})).join('')}</div>`; }
      }
      out.innerHTML = html;
    });
    // ---- definiteness
    const fp = div.querySelector('.lab-panel[data-lab="def"]');
    fp.querySelector('[data-go="def"]').addEventListener('click', ()=>{
      const A = parseMatrix(fp.querySelector('.lab-in').value); const out = fp.querySelector('.lab-out');
      if(!A || A.length!==A[0].length){ out.innerHTML = '<p class="lab-msg show warn">Enter a square (symmetric) matrix.</p>'; return; }
      const ms = A.map((_,k)=>detFr(A.slice(0,k+1).map(r=>r.slice(0,k+1))));
      const s = ms.map(m=>m.sign());
      const pos = s.every(v=>v>0), neg = s.every((v,k)=>v === (k%2 ? 1 : -1));
      const verdict = pos ? 'positive definite → <b>minimum</b>' : neg ? 'negative definite → <b>maximum</b>' : 'no definite pattern → <b>no optimum</b> (indefinite / semidefinite)';
      out.innerHTML = `<div class="lab-result">${ms.map((m,k)=>katexHtml({tex:`|H_{${k+1}}| = ${m.tex()}\\ (${m.sign()>0?'+':m.sign()<0?'-':'0'})`, disp:false})).join('<br>')}<p style="margin-top:10px">Pattern (${s.map(v=>v>0?'+':v<0?'−':'0').join(', ')}): ${verdict}</p></div>`;
    });
    // ---- market shares
    const mp = div.querySelector('.lab-panel[data-lab="mkt"]');
    mp.querySelector('[data-go="mkt"]').addEventListener('click', ()=>{
      const M = parseMatrix(mp.querySelector('.lab-in').value); const out = mp.querySelector('.lab-out');
      if(!M || M.length+1!==M[0].length){ out.innerHTML = '<p class="lab-msg show warn">Enter n rows with n+1 numbers (T and s₁ as last column).</p>'; return; }
      const n = M.length; const T = M.map(r=>r.slice(0,n)); const s = M.map(r=>r[n]);
      const colSums = T[0].map((_,j)=>T.reduce((a,r)=>a.add(r[j]), new Fr(0)));
      const s2 = T.map(r=>r.reduce((a,v,j)=>a.add(v.mul(s[j])), new Fr(0)));
      // steady state: (T - I)s = 0 with last equation replaced by sum = 1
      let A = T.map((r,i)=>[...r.map((v,j)=>i===j?v.sub(new Fr(1)):v), new Fr(0)]);
      A[n-1] = [...Array.from({length:n},()=>new Fr(1)), new Fr(1)];
      const used = new Set();
      for(let c=0;c<n;c++){ let r = -1; for(let i=0;i<n;i++) if(!used.has(i) && !A[i][c].zero){ r = i; break; } if(r<0) continue; used.add(r); A = pivotStep(A, r, c); }
      const ss = Array.from({length:n},(_,c)=>{ const i = A.findIndex(row=>row[c].n===1&&row[c].d===1&&row.slice(0,n).every((v,k)=>k===c||v.zero)); return i>=0 ? A[i][n] : null; });
      const pct = f=>f ? (Math.round(f.val()*10000)/100)+'%' : '–';
      out.innerHTML = `${colSums.some(c=>!(c.n===1&&c.d===1))?`<p class="lab-msg show warn">Careful: column sums are ${colSums.map(c=>c.str()).join(', ')} — every column (outgoing customers) should sum to 1. Did you build T the other way round?</p>`:''}<div class="lab-result">${katexHtml({tex:'s_2 = T\\cdot s_1 = '+matTex(s2.map(v=>[v])), disp:true})}<p>Next period: ${s2.map(pct).join(' · ')}</p><p>Steady state (s = T·s, Σ = 1): <b>${ss.map(pct).join(' · ')}</b></p></div>`;
    });
  });
}
function mathRestoreInline(html){ const {t, parts} = mathProtect(html); return mathRestore(t, parts); }
function tabsFr(steps, n){
  return `<div class="tab-row">${steps.map((M,k)=>`${k?'<span class="tab-arrow">→</span>':''}<div class="tab-wrap"><div class="tab-cap">${k?'Pivot '+k:'[A | I]'}</div><table class="tableau"><tbody>${M.map(r=>`<tr>${r.map((v,j)=>`<td class="${j===n?'sep':''}">${katexHtml({tex:v.tex(),disp:false})}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`).join('')}</div>`;
}
function rankFr(A){
  let M = A.map(r=>r.slice()); const used = new Set(); let rk = 0;
  for(let c=0;c<M[0].length;c++){ let r = -1; for(let i=0;i<M.length;i++) if(!used.has(i) && !M[i][c].zero){ r = i; break; } if(r<0) continue; used.add(r); rk++; M = pivotStep(M, r, c); }
  return rk;
}
function laplaceHint(A){
  const n = A.length; if(n<4) return n===3 ? '<p>Order 3 → Sarrus.</p>' : '';
  let best = {k:0, i:0, row:true};
  for(let i=0;i<n;i++){ const zr = A[i].filter(v=>v.zero).length, zc = A.map(r=>r[i]).filter(v=>v.zero).length; if(zr>best.k) best = {k:zr, i, row:true}; if(zc>best.k) best = {k:zc, i, row:false}; }
  return `<p>Laplace tip: expand along <b>${best.row?'row':'column'} ${best.i+1}</b> (${best.k} zeros). Signs follow the chessboard $(-1)^{i+j}$.</p>`.replace(/\$([^$]+)\$/g, (m,t)=>katexHtml({tex:t, disp:false}));
}

/* ============================================================ RANDOM DRILLS ============================================================ */
function buildM2Drill(){
  registerPage('m2-drill', (div)=>{
    const kinds = [
      {id:'det2', label:'2×2 determinant'}, {id:'det3', label:'3×3 determinant (Sarrus)'}, {id:'cramer', label:"Cramer 2×2"},
      {id:'def', label:'Definiteness of a quadratic form'}, {id:'mkt', label:'Market shares next period'}, {id:'inv2', label:'Inverse 2×2'}
    ];
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Tools</div><h2>Random Drills</h2><p>Fresh numbers every time. Solve on paper, type the result, check. Good for warming up before a full exercise.</p></div>
      <div class="page-body"><div class="chip-row drill-kinds">${kinds.map((k,i)=>`<button class="chip${i?'':' active'}" data-k="${k.id}">${k.label}</button>`).join('')}</div><div class="drill-card glass"></div><div class="drill-streak"></div></div>`;
    let kind = 'det2', cur = null;
    const R = (a,b)=>{ let v; do{ v = rnd(a,b); }while(v===0); return v; };
    const gen = {
      det2(){ const A = [[R(-6,9),R(-6,9)],[R(-6,9),R(-6,9)]]; return {q:`\\det${matTexN(A)} = ?`, ans:[A[0][0]*A[1][1]-A[0][1]*A[1][0]], fields:['det'], sol:`${A[0][0]}\\cdot${A[1][1]} - (${A[0][1]})\\cdot(${A[1][0]}) = ${A[0][0]*A[1][1]-A[0][1]*A[1][0]}`}; },
      det3(){ const A = [0,1,2].map(()=>[0,1,2].map(()=>rnd(-4,5))); const d = detFr(A.map(r=>r.map(v=>new Fr(v)))).n; return {q:`\\det${matTexN(A)} = ?`, ans:[d], fields:['det'], sol:`\\text{Sarrus: } ${d}`}; },
      cramer(){ const x = [rnd(-5,5), rnd(-5,5)]; let A; do{ A = [[R(-5,6),R(-5,6)],[R(-5,6),R(-5,6)]]; }while(A[0][0]*A[1][1]-A[0][1]*A[1][0]===0); const b = A.map(r=>r[0]*x[0]+r[1]*x[1]); const D = A[0][0]*A[1][1]-A[0][1]*A[1][0]; return {q:`${A[0][0]}x_1 ${sgn(A[0][1])}x_2 = ${b[0]},\\quad ${A[1][0]}x_1 ${sgn(A[1][1])}x_2 = ${b[1]}`, ans:x, fields:['x1','x2'], sol:`\\det A = ${D},\\ \\det A_1 = ${b[0]*A[1][1]-A[0][1]*b[1]},\\ \\det A_2 = ${A[0][0]*b[1]-b[0]*A[1][0]} \\Rightarrow x = (${x[0]}, ${x[1]})`}; },
      def(){ const a = R(-6,6), b = rnd(-4,4), c = R(-6,6); const D = a*c-b*b; const v = D>0 ? (a>0?'pos':'neg') : D===0 ? 'semi' : 'indef'; return {q:`q(x,y) = ${a}x^2 ${sgn(2*b)}xy ${sgn(c)}y^2`, choice:[['pos','positive definite'],['neg','negative definite'],['semi','semidefinite'],['indef','indefinite']], ans:v, sol:`a = ${a},\\ b = ${b},\\ c = ${c}:\\ ac - b^2 = ${D}`}; },
      mkt(){ const cols = [0,1,2].map(()=>{ const p = [rnd(1,8),rnd(1,8),rnd(1,8)]; const s = p.reduce((x,y)=>x+y,0); const q = p.map(v=>Math.round(v/s*10)/10); q[2] = Math.round((1-q[0]-q[1])*10)/10; if(q[2]<0){ q[1] += q[2]; q[2] = 0; } return q; }); const T = [0,1,2].map(i=>cols.map(c=>c[i])); const s = [0.2,0.3,0.5].sort(()=>Math.random()-.5); const s2 = T.map(r=>Math.round(r.reduce((a,v,j)=>a+v*s[j],0)*1000)/10); return {q:`T = ${matTexN(T)},\\quad s_1 = ${matTexN(s.map(v=>[v]))}\\quad\\Rightarrow s_2 \\text{ in \\%?}`, ans:s2, fields:['firm 1 %','firm 2 %','firm 3 %'], tol:.15, sol:`s_2 = T\\cdot s_1 = (${s2.join('\\%,\\ ')}\\%)`}; },
      inv2(){ let A, D; do{ A = [[rnd(-4,5),rnd(-4,5)],[rnd(-4,5),rnd(-4,5)]]; D = A[0][0]*A[1][1]-A[0][1]*A[1][0]; }while(Math.abs(D)!==1 && Math.abs(D)!==2); const inv = [[A[1][1]/D, -A[0][1]/D],[-A[1][0]/D, A[0][0]/D]]; return {q:`A = ${matTexN(A)},\\quad A^{-1} = ?`, ans:inv.flat(), fields:['a11','a12','a21','a22'], sol:`A^{-1} = \\tfrac{1}{${D}}${matTexN([[A[1][1],-A[0][1]],[-A[1][0],A[0][0]]])}`}; }
    };
    const card = div.querySelector('.drill-card');
    const streak = ()=>{ const s = ls('m2-drill-streak', {}); div.querySelector('.drill-streak').textContent = s[kind] ? `Correct in this drill so far: ${s[kind]}` : ''; };
    const next = ()=>{
      cur = gen[kind]();
      card.innerHTML = `<div class="drill-q">${katexHtml({tex:cur.q, disp:true})}</div>
        ${cur.choice ? `<div class="chip-row">${cur.choice.map(([v,l])=>`<button class="chip" data-choice="${v}">${l}</button>`).join('')}</div>` : `<div class="drill-fields">${cur.fields.map(f=>`<label>${f} <input type="text" inputmode="decimal"></label>`).join('')}</div><div class="ans-actions"><button class="btn" data-d="check">Check</button></div>`}
        <div class="ans-feedback"></div><div class="ans-actions"><button class="btn ghost" data-d="next">New task →</button></div>`;
      streak();
    };
    const result = ok=>{
      const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(ok?'good':'warn');
      fb.innerHTML = (ok?'<b>Correct.</b> ':'<b>Not quite.</b> ') + katexHtml({tex:cur.sol, disp:false});
      if(ok){ const s = ls('m2-drill-streak', {}); s[kind] = (s[kind]||0)+1; lsSet('m2-drill-streak', s); streak(); }
    };
    card.addEventListener('click', ev=>{
      const ch = ev.target.closest('[data-choice]'); if(ch){ result(ch.dataset.choice===cur.ans); return; }
      const b = ev.target.closest('[data-d]'); if(!b) return;
      if(b.dataset.d==='next') next();
      if(b.dataset.d==='check'){ const vals = [...card.querySelectorAll('.drill-fields input')].map(i=>{ const f = Fr.of(i.value); return f ? f.val() : NaN; }); result(vals.every((v,i)=>Math.abs(v-cur.ans[i]) <= (cur.tol||1e-6))); }
    });
    div.querySelector('.drill-kinds').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; kind = c.dataset.k; div.querySelectorAll('.drill-kinds .chip').forEach(x=>x.classList.toggle('active', x===c)); next(); });
    next();
  });
}
function matTexN(A){ return `\\begin{pmatrix}${A.map(r=>r.join(' & ')).join(' \\\\ ')}\\end{pmatrix}`; }
function sgn(v){ return v<0 ? `- ${Math.abs(v)}` : `+ ${v}`; }

/* ============================================================ LAZY PAGE BUILDING ============================================================ */
// Pages are registered at start-up but only built (HTML, KaTeX, flashcards…) on their first visit,
// so start-up stays fast no matter how many subjects the hub gets.
const lazyPages = {};
registerPage = function(id, buildFn){
  if(registeredPages[id]) return;
  registeredPages[id] = true;
  const div = document.createElement('div');
  div.className = 'page';
  div.id = 'page-'+id;
  dynPages.appendChild(div);
  lazyPages[id] = ()=>{ delete lazyPages[id]; buildFn(div); };
};
const __navToEager = navTo;
navTo = function(pageId){
  if(lazyPages[pageId]) lazyPages[pageId]();
  return __navToEager(pageId);
};
