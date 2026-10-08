/* ============================================================ STATISTICS (third subject) ============================================================ */
// Loaded after app_bk.js. Wraps the shared overrides again (sidebar, search, home, radar, plan) and adds the Statistics pages:
// home, 8 chapters, Random Drills (step-by-step), Data Lab, Distribution & CI Calculator, Tables II/IV, Cheat Sheet.
const ST_NAV = [
  {sec:'Overview', items:[{id:'st-home', label:'Statistics Home & Exam Info', icon:'home'}]},
  {sec:'Practice', items:[
    {id:'st-drill', label:'Random Drills (step-by-step)', icon:'logic'},
    {id:'st-calc', label:'Distribution & CI Calculator', icon:'calc'},
    {id:'st-lab', label:'Data Lab (describe a data set)', icon:'quiz'},
    {id:'st-tables', label:'Tables II & IV (z and t)', icon:'doc'},
    {id:'st-cheat', label:'Cheat Sheet (A4, printable)', icon:'cheat'}
  ]}
];

/* ---------- numeric helpers ---------- */
function stErf(x){ // Abramowitz–Stegun 7.1.26, |error| < 1.5e-7 — enough for 4-decimal tables
  const s = x<0 ? -1 : 1; x = Math.abs(x);
  const t = 1/(1+0.3275911*x);
  const y = 1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x);
  return s*y;
}
function stPhi(z){ return 0.5*(1+stErf(z/Math.SQRT2)); }
function stR(x, d){ const f = Math.pow(10, d); return Math.round(x*f + (x>=0?1e-9:-1e-9))/f; }
function stTab(z){ const zr = stR(z, 2); if(zr<=-3.9) return 0; if(zr>=3.9) return 1; return stR(stPhi(zr), 4); } // Table II area left of z (z rounded to 2 decimals)
function stZFor(area){ // z (2 decimals) whose Table II area is closest to `area`
  let best = 0, bd = 9, tie = null;
  for(let k=-390;k<=390;k++){ const z = k/100, d = Math.abs(stTab(z)-area); if(d<bd-1e-12){ bd = d; best = z; tie = null; } else if(Math.abs(d-bd)<1e-12 && Math.abs(z-best-0.01)<1e-9 && tie===null){ tie = z; } }
  return tie!==null ? stR((best+tie)/2, 3) : best; // exactly between two table entries (e.g. 0.95) → midpoint, as the course does (1.645)
}
function stF(x, d){ if(x==null || isNaN(x)) return '—'; const v = stR(x, d); return (Object.is(v,-0)?0:v).toFixed(d); }
function stFact(n){ let r = 1; for(let i=2;i<=n;i++) r *= i; return r; }
function stC(n, k){ if(k<0||k>n) return 0; let r = 1; for(let i=1;i<=k;i++) r = r*(n-k+i)/i; return Math.round(r); }
function stP(n, k){ let r = 1; for(let i=0;i<k;i++) r *= (n-i); return r; }
function stBinom(n, p, x){ return stC(n, x)*Math.pow(p, x)*Math.pow(1-p, n-x); }
function stPois(l, x){ return Math.exp(-l)*Math.pow(l, x)/stFact(x); }
const ST_ZA = {90:1.645, 95:1.96, 98:2.326, 99:2.576};
function stT(df, conf){ // Table IV, nearest df not above (conservative), conf 80/90/95/98/99
  const col = {80:1, 90:2, 95:3, 98:4, 99:5}[conf];
  let row = ST_TTABLE[0]; ST_TTABLE.forEach(r=>{ if(r[0]<=df) row = r; });
  return {t: row[col], dfUsed: row[0]};
}
function stMedian(a){ const n = a.length; return n%2 ? a[(n-1)/2] : (a[n/2-1]+a[n/2])/2; }
function stQuartiles(sorted){ // Weiss: odd n → median belongs to both halves
  const n = sorted.length, q2 = stMedian(sorted);
  const h = Math.ceil(n/2);
  const lo = sorted.slice(0, h), hi = sorted.slice(n-h);
  return {q1: stMedian(lo), q2, q3: stMedian(hi), lo, hi};
}
function stDescribe(arr){
  const a = arr.slice().sort((x,y)=>x-y), n = a.length;
  const sum = a.reduce((s,x)=>s+x, 0), sum2 = a.reduce((s,x)=>s+x*x, 0), mean = sum/n;
  const s = n>1 ? Math.sqrt((sum2 - sum*sum/n)/(n-1)) : 0;
  const sigma = Math.sqrt(sum2/n - mean*mean);
  const cnt = {}; a.forEach(x=>cnt[x]=(cnt[x]||0)+1);
  const maxc = Math.max(...Object.values(cnt));
  const modes = maxc>1 ? Object.keys(cnt).filter(k=>cnt[k]===maxc).map(Number) : [];
  const q = stQuartiles(a), iqr = q.q3-q.q1, lowL = q.q1-1.5*iqr, upL = q.q3+1.5*iqr;
  const out = a.filter(x=>x<lowL || x>upL), inside = a.filter(x=>x>=lowL && x<=upL);
  return {a, n, sum, sum2, mean, s, sigma, median:q.q2, modes, min:a[0], max:a[n-1], range:a[n-1]-a[0], ...q, iqr, lowL, upL, out, adjLo:inside[0], adjHi:inside[inside.length-1]};
}
function stNum(v){ if(v==null) return NaN; const t = String(v).trim().replace(/\s/g,'').replace(',', '.').replace(/%$/, ''); if(t==='') return NaN; if(/^-?\d+\/\d+$/.test(t)){ const [a,b] = t.split('/').map(Number); return a/b; } return Number(t); }
function stRnd(a, b){ return a + Math.floor(Math.random()*(b-a+1)); }
function stPick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* ---------- sidebar / search / home ---------- */
const __buildSidebarNavBK = buildSidebarNav;
buildSidebarNav = function(subjId){
  if(subjId!=='st') return __buildSidebarNavBK(subjId);
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  ST_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  html += `<div class="nav-section-label">Chapters</div>`;
  ST_TOPICS.forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon('summary')}<span>${t.ch}. ${esc(t.title)}</span></div>`; });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};
const __buildSearchIndexBK = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexBK();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  ST_TOPICS.forEach(t=>{
    const where = `Statistics · Chapter ${t.ch}`;
    add({type:'Topic', rank:0, title:t.title, text:'', where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:texPlain(searchFlat(p)), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:texPlain(c.q), text:texPlain(c.a), where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:texPlain(q.q), text:texPlain(q.exp||''), where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  ST_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:texPlain(it), where:'Statistics · Cheat Sheet', page:'st-cheat'})));
  ST_KINDS.forEach(k=>add({type:'Drill', rank:2, title:k.label, text:'random drill step-by-step', where:'Statistics · Random Drills', page:'st-drill', stKind:k.id}));
  ST_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`Statistics · ${sec.sec}`, page:it.id})));
  return idx;
};
const __searchOpenBK = searchOpen;
searchOpen = function(e, words){
  if(e.stKind){ stDrillOpen(e.stKind); return; }
  __searchOpenBK(e, words);
};
buildHomeCards = function(){
  const wrap = document.getElementById('home-cards');
  const d0 = new Date().setHours(0,0,0,0);
  const daysM2 = Math.max(0, Math.ceil((PLAN_EXAM_M2 - d0)/86400000));
  const card = (id, ic, tag, stats)=>{ const s = SUBJECTS.find(x=>x.id===id); return `<div class="subj-card" onclick="selectSubject('${id}',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon(ic)}</div>
      <div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">${tag}</span><h3>${s.label}</h3><p>${s.short}</p>
        <div class="stats">${stats.map(x=>`<span>${x}</span>`).join('')}</div></div></div>`; };
  const nQ = l => l.reduce((n,t)=>n+t.quiz.length, 0);
  wrap.innerHTML = card('m2', 'm2', 'MATH II', ['7 chapters', '4 exams + 150 old tasks', `${daysM2} days to 14 Dec`])
    + card('st', 'stat', 'STATISTICS', [`8 chapters · ${nQ(ST_TOPICS)} quiz questions`, `${ST_KINDS.length} drill types`, `${daysM2} days to 14 Dec`])
    + card('bk', 'acc', 'ACCOUNTING', [`${BK_TOPICS.length} chapters · ${nQ(BK_TOPICS)} quiz questions`, `${BK_TRAIN.length} booking drills`, `${bkDaysLeft()} days to 21 Dec`])
    + M2_UPCOMING.filter(u=>u.tag!=='ACCOUNTING' && u.tag!=='STATISTICS').map(u=>`<div class="subj-card soon"><div class="banner" style="background:var(--tile-banner)">${homeIcon(u.icon)}</div><div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">${u.tag}</span><h3>${esc(u.label)}</h3><p>${esc(u.note)}</p><div class="stats"><span>${u.date}</span><span>coming later</span></div></div></div>`).join('');
};

/* ---------- scores: quiz + drills (flashcards optional, not counted) ---------- */
const __fcMasteryLectureBK = fcMasteryLecture;
fcMasteryLecture = function(subjId){
  if(subjId!=='st') return __fcMasteryLectureBK(subjId);
  let gotit=0, partial=0, dontknow=0, total=0;
  ST_TOPICS.forEach(t=>{ Object.values(ls('fc-'+t.id, {})).forEach(v=>{ if(v==='gotit') gotit++; else if(v==='partial') partial++; else if(v==='dontknow') dontknow++; }); total += t.cards.length; });
  return { gotit, partial, dontknow: dontknow+(total-gotit-partial-dontknow), total, pct: total? Math.round(gotit/total*100) : 0 };
};
function stDrillStats(){ return ls('st-drill-stats', {}); }
function stDrillScore(topicId){
  const st = stDrillStats(); let ok = 0, n = 0;
  ST_KINDS.filter(k=>!topicId || k.topics.includes(topicId)).forEach(k=>{ const v = st[k.id]; if(v){ ok += v.ok; n += v.n; } });
  return n ? ok/n : null;
}
function stTopicScore(t){
  const parts = [];
  const q = knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); if(q!=null) parts.push(q);
  const d = stDrillScore(t.id); if(d!=null) parts.push(d);
  return parts.length ? parts.reduce((a,b)=>a+b,0)/parts.length : null;
}
const __radarAxesBK = radarAxes;
radarAxes = function(mode){
  if(mode==='st') return ST_TOPICS.map(t=>({label:`${t.ch}. ${t.title}`, page:t.id, score:stTopicScore(t)}));
  return __radarAxesBK(mode);
};

/* ---------- study plan ---------- */
const __planDaysLeftBK = planDaysLeft;
planDaysLeft = function(subj){ if(subj==='st') return Math.max(1, Math.ceil((PLAN_EXAM_ST - planStart())/86400000)); return __planDaysLeftBK(subj); };
const __planItemPoolBK = planItemPool;
planItemPool = function(){
  const items = __planItemPoolBK();
  ST_TOPICS.forEach(t=>{ const s = stTopicScore(t); items.push({subj:'st', label:`Ch. ${t.ch} · ${t.title}`, page:t.id, weight:s==null ? 1 : 1-s, size:t.quiz.length + 4*ST_KINDS.filter(k=>k.topics.includes(t.id)).length + Math.round(t.summary.split(/\s+/).length/120)}); });
  const d = stDrillScore();
  items.push({subj:'st', label:'Random Drills — mixed (exam warm-up)', page:'st-drill', weight:d==null ? .9 : 1-d, size:30});
  items.forEach(i=>{ i.large = false; i.prio = false; });
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size).slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  return items;
};
const __planScheduleBK = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='st-drill'){ const h = planDaysLeft('st'); return Array.from(new Set([Math.max(1,h-24), Math.max(1,h-12), Math.max(1,h-5), Math.max(1,h-2)])); }
  return __planScheduleBK(item, idx);
};
const __buildStudyPlanBK = buildStudyPlan;
buildStudyPlan = function(){
  __buildStudyPlanBK();
  const build = lazyPages['plan'];
  if(build) lazyPages['plan'] = ()=>{ build(); stPatchPlanPage(document.getElementById('page-plan')); };
};
function stPatchPlanPage(div){
  if(div.__stPatched) return; div.__stPatched = true;
  const eb = div.querySelector('.page-header .eyebrow'); if(eb) eb.textContent = 'S2/2 · Math II, Statistics & Bookkeeping';
  const p = div.querySelector('.page-header p'); if(p) p.textContent = 'See where you are weak, then follow a day-by-day plan up to your exams: Math II and Statistics on 14 December (Quantitative Analytics II), Bookkeeping on 21 December. Weak chapters show up more often; mock exams and mixed drills sit near the end.';
  const tabs = div.querySelector('.radar-tabs');
  if(tabs){ const bk = tabs.querySelector('[data-subj="bk"]'); (bk||tabs.lastChild).insertAdjacentHTML(bk?'beforebegin':'afterend', '<button class="tabbtn" data-subj="st">Statistics</button>'); }
  const m2lab = div.querySelector('.plan-exam-val[data-subj="m2"]');
  if(m2lab) m2lab.parentElement.insertAdjacentHTML('afterend', `<label>Statistics — exam date <span class="plan-exam-val" data-subj="st"></span></label>`);
  renderPlanDays(div);
}
const __renderPlanDaysBK = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysBK(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val[data-subj="st"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_ST.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('st')}d`; });
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ if(el.textContent==='ST') el.textContent = 'STATISTICS'; });
};
const __renderRadarBK = renderRadar;
renderRadar = function(div){
  __renderRadarBK(div);
  if(div.dataset.radarSubj==='st'){ const reco = div.querySelector('.radar-reco'); if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes/, 'Finish chapter quizzes and do the Random Drills'); }
};

/* ---------- topic pages (same layout as Bookkeeping: quiz first, flashcards optional) ---------- */
const __buildTopicPageBK = buildTopicPage;
buildTopicPage = function(t){
  if(!t.id.startsWith('st-')) return __buildTopicPageBK(t);
  registerPage(t.id, (div)=>{
    const kinds = ST_KINDS.filter(k=>k.topics.includes(t.id));
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('summary')} Statistics · Chapter ${t.ch}</div><h2>${esc(t.title)}</h2><p>${esc(t.examWeight)}</p></div>
      <div class="page-body">
        ${kinds.length?`<div class="chip-row"><span class="chip-label">Drill it:</span>${kinds.map(k=>`<button class="chip" onclick="stDrillOpen('${k.id}')">${esc(k.label)}</button>`).join('')}</div>`:''}
        <div class="tabbar"><button class="tabbtn active" data-tab="sum">Summary</button><button class="tabbtn" data-tab="qz">Quiz</button><button class="tabbtn fc-side" data-tab="fc">Flashcards (optional)</button></div>
        <div class="tabpanel active" id="${t.id}-sum"></div><div class="tabpanel" id="${t.id}-qz"></div><div class="tabpanel" id="${t.id}-fc"></div>
      </div>`;
    div.querySelectorAll('.tabbtn').forEach(btn=>{
      btn.onclick = ()=>{
        div.querySelectorAll('.tabbtn').forEach(b=>b.classList.remove('active'));
        div.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
        btn.classList.add('active');
        const panel = div.querySelector(`#${t.id}-${btn.dataset.tab}`); panel.classList.add('active');
        if(btn.dataset.tab==='fc' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderFlashcards(panel, t.cards, 'fc-'+t.id); }
        if(btn.dataset.tab==='qz' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderQuiz(panel, shuffledQuiz(t), 'quiz-'+t.id); }
      };
    });
    renderSummary(div.querySelector(`#${t.id}-sum`), t.title, t.summary, t.id);
  });
};

/* ---------- Statistics home ---------- */
function buildSTHome(){
  registerPage('st-home', (div)=>{
    const days = Math.max(0, Math.ceil((PLAN_EXAM_ST - new Date().setHours(0,0,0,0))/86400000));
    const d = stDrillScore();
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('home')} Statistics</div><h2>Statistics</h2>
        <p>8 chapters from the slides (based on Weiss, <i>Introductory Statistics</i>): from sampling and descriptive measures to probability, distributions and confidence intervals. Statistics is a calculation subject — read a chapter, then drill its task types until they are automatic.</p></div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Mon 14 Dec 2026 · 09:00–12:00 · ${days} days</span></div>
          <div class="exam-grid">
            <div class="exam-col">
              <div class="exam-label">Quantitative Analytics II · 180 points (two 90-min exams)</div>
              <div class="exam-bar"><span style="flex:90">Math II 90</span><span class="me" style="flex:90">Statistics 90</span></div>
              <p class="exam-total">You pass the module with <b>90 of 180 points</b> in total, so strong Statistics points can make up for Math and vice versa.</p>
            </div>
            <div class="exam-col">
              <div class="exam-label">Tables from the course</div>
              <ul class="exam-facts">
                <li><b>Table II</b> (areas under the standard normal curve, left of z) and <b>Table IV</b> (values of t) were handed out with the slides — practise reading them in <a href="#st-tables" onclick="navTo('st-tables');return false;">Tables II & IV</a>.</li>
                <li><b>Slide typos to know:</b> the t-interval slide says "σ known" (it is σ unknown); the Poisson-approximation slide says "np ≥ 10" (it is np ≤ 10); the ER Poisson table shows 0.0131 for x = 5 (it is 0.131).</li>
                <li>No past Statistics exams yet — send them when you get them and they become interactive like Math II.</li>
              </ul>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('st-1')">Start with chapter 1 →</button>
            <button class="btn ghost" onclick="navTo('st-drill')">Random Drills${d!=null?` · ${Math.round(d*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:8px;">Chapters</div>
        <div class="topic-grid">
          ${ST_TOPICS.map(t=>{ const s = stTopicScore(t); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">CHAPTER ${t.ch}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions · ${ST_KINDS.filter(k=>k.topics.includes(t.id)).length} drill types${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('st-drill')"><div class="ic">${icon('logic')}</div><h4>Random Drills</h4><p>${ST_KINDS.length} task types with fresh numbers and full step-by-step solutions.</p></div>
          <div class="tool-tile" onclick="navTo('st-calc')"><div class="ic">${icon('calc')}</div><h4>Distribution & CI Calculator</h4><p>Normal, binomial, Poisson, x̄, confidence intervals, sample size — with the steps.</p></div>
          <div class="tool-tile" onclick="navTo('st-lab')"><div class="ic">${icon('quiz')}</div><h4>Data Lab</h4><p>Paste a data set: mean, s, quartiles, outliers, boxplot, stem-and-leaf.</p></div>
          <div class="tool-tile" onclick="navTo('st-tables')"><div class="ic">${icon('doc')}</div><h4>Tables II & IV</h4><p>The z- and t-tables with a lookup that highlights the right cell.</p></div>
          <div class="tool-tile" onclick="navTo('st-cheat')"><div class="ic">${icon('cheat')}</div><h4>Cheat Sheet</h4><p>Every formula on one printable page.</p></div>
        </div>
      </div>`;
  });
}
function buildSTCheat(){
  registerPage('st-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>Statistics Cheat Sheet</h2><p>All formulas and decision rules of the eight chapters. Your highlights are printed too.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="st-cheat-body" class="cheat-print"></div></div>`;
    renderCheat(div.querySelector('#st-cheat-body'), ST_CHEAT, '', 'st-cheat');
  });
}

/* ============================================================ RANDOM DRILLS ============================================================ */
// each generator returns {q, fields:[labels] + ans:[numbers] + tol, or choice:[[value,label]] + ans:value, sol (rich text with $…$)}
const ST_CLASSIFY = [
  ['Number of cars a household owns', 'Discrete quantitative', 'Countable values 0, 1, 2, …'],
  ['Time a customer waits at a counter, in seconds with decimals', 'Continuous quantitative', 'Values form an interval of numbers.'],
  ['Blood type of a patient (A, B, AB, 0)', 'Qualitative', 'Non-numerical categories.'],
  ['Brand of smartphone a student uses', 'Qualitative', 'Non-numerical categories.'],
  ['Weight of a parcel in kg', 'Continuous quantitative', 'Measured on an interval.'],
  ['Number of goals in a football match', 'Discrete quantitative', 'Countable values.'],
  ['Annual rainfall in mm', 'Continuous quantitative', 'Measured on an interval.'],
  ['Political party a voter prefers', 'Qualitative', 'Non-numerical categories.'],
  ['Number of siblings of a student', 'Discrete quantitative', 'Countable values.']
];
const ST_DESIGN = [
  ['A university lists all 12,000 students, picks a random start between 1 and 40 and then takes every 40th student.', 'Systematic random sampling'],
  ['A city is divided into 200 blocks; 15 blocks are chosen at random and every household in them is interviewed.', 'Cluster sampling'],
  ['Employees are split into managers, office staff and workers; from each group a random sample proportional to its size is drawn.', 'Stratified random sampling'],
  ['Every possible group of 50 customers has the same chance of being the sample, drawn with a random-number generator.', 'Simple random sampling'],
  ['A bank chooses 10 of its 120 branches at random and surveys all clients of those branches.', 'Cluster sampling'],
  ['Voters are divided by federal state; each state contributes a random sample in proportion to its population.', 'Stratified random sampling']
];
const ST_EXPTERMS = [
  ['A farmer tests three fertilizers on 30 plots and measures the tomato yield per plot. What is "tomato yield"?', 'Response variable'],
  ['A farmer tests three fertilizers on 30 plots and measures the tomato yield per plot. What is "fertilizer"?', 'Factor'],
  ['A farmer tests three fertilizers on 30 plots and measures the tomato yield per plot. What are the 30 plots?', 'Experimental units'],
  ['A study compares 2 doses of a drug crossed with 3 diets (6 conditions). What is "dose 1 with diet 2"?', 'Treatment'],
  ['In a study comparing low, medium and high temperature, what are low/medium/high?', 'Levels'],
  ['Golfers are first split into men and women, then randomly assigned to ball brands within each gender. Design?', 'Randomized block design'],
  ['All 40 golfers are randomly assigned to the five ball brands without any grouping. Design?', 'Completely randomized design']
];
function stMethodTask(){
  const known = Math.random()<.5, n = stPick([10, 12, 20, 25, 36, 50, 64]);
  const shapes = n>=30 ? ['roughly normal','clearly right skewed'] : ['roughly normal','clearly right skewed','roughly normal but with one clear outlier'];
  const shape = stPick(shapes);
  let ok;
  if(n<15) ok = shape==='roughly normal';
  else if(n<30) ok = shape==='roughly normal';
  else ok = true;
  const ans = ok ? (known ? 'z' : 't') : 'none';
  const why = ok ? (known ? `σ is known and the conditions hold (${n<15?'small sample, but normal data':n<30?'moderate sample without outliers, roughly normal':'large sample, CLT'}) → one-mean z-interval.` : `σ is unknown → studentize with s: one-mean t-interval with df = ${n-1}.`)
    : `${n<15?'For n < 15 the variable must be (close to) normal':'For 15 ≤ n < 30 there may be no outliers and the data may not be far from normal'} — violated. Fundamental principle: do not apply the procedure; use a different one.`;
  return {q:`A simple random sample of $n = ${n}$ is taken to estimate $\\mu$. The population standard deviation is ${known?'known':'unknown'}. The normal probability plot of the sample is ${shape}. Which procedure fits?`,
    choice:[['z','one-mean z-interval'],['t','one-mean t-interval'],['none','neither — conditions violated']], ans, sol:why};
}
function stDistTask(){
  const v = stRnd(0, 2);
  if(v===0){ const n = stPick([150, 200, 400, 500]), p = stPick([0.01, 0.02, 0.025]); return {q:`$n = ${n}$ independent trials with success probability $p = ${p}$. You need $P(X = 3)$ quickly. Which approximation is allowed by the course rules?`, choice:[['pois','Poisson with λ = np'],['norm','normal with continuity correction'],['none','none — use the exact formula only']], ans:'pois', sol:`$n \\ge 100$ and $np = ${stR(n*p,2)} \\le 10$ → Poisson approximation with $\\lambda = ${stR(n*p,2)}$. The normal approximation needs $np \\ge 5$, which fails.`}; }
  if(v===1){ const n = stPick([60, 80, 100, 120]), p = stPick([0.3, 0.4, 0.5]); return {q:`$n = ${n}$, $p = ${p}$. You need $P(X \\le ${Math.round(n*p)-3})$. Which approximation is allowed?`, choice:[['norm','normal with continuity correction'],['pois','Poisson with λ = np'],['none','none — use the exact formula only']], ans:'norm', sol:`$np = ${stR(n*p,1)} \\ge 5$ and $n(1-p) = ${stR(n*(1-p),1)} \\ge 5$ → normal approximation with $\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$ and continuity correction. Poisson needs $np \\le 10$.`}; }
  const n = stPick([20, 30]), p = 0.05; return {q:`$n = ${n}$, $p = ${p}$. Which approximation is allowed by the course rules?`, choice:[['none','none — use the exact binomial formula'],['pois','Poisson with λ = np'],['norm','normal with continuity correction']], ans:'none', sol:`Poisson needs $n \\ge 100$ (here ${n}); normal needs $np \\ge 5$ (here $${stR(n*p,2)}$). So compute exactly with $\\binom{n}{x}p^x(1-p)^{n-x}$.`};
}
const ST_KINDS = [
  {id:'classify', label:'Classify: variables, sampling, design', topics:['st-1','st-2'], gen(){
    const v = stRnd(0, 2);
    if(v===0){ const [t, a, w] = stPick(ST_CLASSIFY); return {q:`Classify the variable: **${t}**`, choice:[['Qualitative','qualitative'],['Discrete quantitative','discrete quantitative'],['Continuous quantitative','continuous quantitative']], ans:a, sol:w}; }
    if(v===1){ const [t, a] = stPick(ST_DESIGN); return {q:t+' Which sampling design is this?', choice:['Simple random sampling','Systematic random sampling','Cluster sampling','Stratified random sampling'].map(x=>[x,x]), ans:a, sol:`${a}. Cluster: whole groups are chosen. Stratified: a sample from every group, proportional to its size. Systematic: every m-th member after a random start.`}; }
    const [t, a] = stPick(ST_EXPTERMS); const opts = a.includes('design') ? ['Completely randomized design','Randomized block design'] : ['Response variable','Factor','Levels','Treatment','Experimental units'];
    return {q:t, choice:opts.map(x=>[x,x]), ans:a, sol:`${a}. Response = measured outcome; factor = variable whose effect is studied; levels = its values; treatment = each experimental condition; experimental units = what the experiment is performed on.`};
  }},
  {id:'desc', label:'Mean, median, s of a small data set', topics:['st-3'], gen(){
    const n = stRnd(5, 8), a = Array.from({length:n}, ()=>stRnd(1, 20)); const d = stDescribe(a);
    return {q:`Data: $${a.join(',\\ ')}$. Find the mean, the median and the sample standard deviation $s$.`, fields:['mean','median','s'], ans:[d.mean, d.median, d.s], tol:[0.01, 0.01, 0.01],
      sol:`- Ordered: ${d.a.join(', ')} ($n = ${n}$)
- Mean: $\\bar x = ${d.sum}/${n} = ${stF(d.mean,2)}$
- Median at position $(n+1)/2 = ${(n+1)/2}$: **${d.median}**
- $\\sum x^2 = ${d.sum2}$, so $s = \\sqrt{\\frac{${d.sum2} - ${d.sum}^2/${n}}{${n-1}}} = ${stF(d.s,2)}$`};
  }},
  {id:'quart', label:'Quartiles, IQR and outliers', topics:['st-3'], gen(){
    const n = stRnd(9, 13), a = Array.from({length:n}, ()=>stRnd(10, 40)); if(Math.random()<.6) a[stRnd(0,n-1)] = stRnd(60, 80); const d = stDescribe(a);
    return {q:`Data: $${a.join(',\\ ')}$. Find $Q_1$, $Q_2$, $Q_3$ and the upper limit $Q_3 + 1.5\\cdot IQR$.`, fields:['Q1','Q2','Q3','upper limit'], ans:[d.q1, d.q2, d.q3, d.upL], tol:[0.001,0.001,0.001,0.001],
      sol:`- Ordered: ${d.a.join(', ')} ($n = ${n}$)
- $Q_2$ = median = **${d.q2}**
- ${n%2?'n is odd, so the median belongs to both halves':'n is even, so the halves split evenly'}: bottom half ${d.lo.join(', ')} → $Q_1 = ${d.q1}$; top half ${d.hi.join(', ')} → $Q_3 = ${d.q3}$
- $IQR = ${d.q3} - ${d.q1} = ${d.iqr}$; limits $${d.q1} - 1.5\\cdot${d.iqr} = ${stF(d.lowL,2)}$ and $${d.q3} + 1.5\\cdot${d.iqr} = ${stF(d.upL,2)}$
- Potential outliers: ${d.out.length?d.out.join(', '):'none'}; adjacent values ${d.adjLo} and ${d.adjHi}`};
  }},
  {id:'cheb', label:'Chebyshev & empirical rule', topics:['st-3','st-6'], gen(){
    const m = stRnd(4, 20)*5, s = stRnd(2, 8);
    if(Math.random()<.5){ const k = stPick([1.5, 2, 2.5, 3, 4]); const pct = (1-1/(k*k))*100;
      return {q:`A data set (shape unknown) has $\\bar x = ${m}$ and $s = ${s}$. By Chebyshev's rule, at least what percentage of the observations lie between $${stR(m-k*s,2)}$ and $${stR(m+k*s,2)}$?`, fields:['% (at least)'], ans:[pct], tol:[0.1],
        sol:`The bounds are $k = ${k}$ standard deviations from the mean. Chebyshev: at least $1 - 1/k^2 = 1 - 1/${stR(k*k,2)} = ${stF(1-1/(k*k),4)}$, i.e. **${stF(pct,2)}%**. (The empirical rule may not be used: the shape is unknown.)`}; }
    const v = stPick([[1,68,'μ − σ','μ + σ'],[2,95,'μ − 2σ','μ + 2σ'],[3,99.7,'μ − 3σ','μ + 3σ'],[2,47.5,'μ','μ + 2σ'],[1,34,'μ − σ','μ'],[2,13.5,'μ + σ','μ + 2σ']]);
    const lo = {'μ':m,'μ − σ':m-s,'μ + σ':m+s,'μ − 2σ':m-2*s,'μ + 2σ':m+2*s,'μ − 3σ':m-3*s,'μ + 3σ':m+3*s};
    return {q:`A bell-shaped data set has mean $${m}$ and standard deviation $${s}$. Using the empirical rule, approximately what percentage lies between $${lo[v[2]]}$ and $${lo[v[3]]}$?`, fields:['%'], ans:[v[1]], tol:[0.05],
      sol:`$${lo[v[2]]}$ = ${v[2]} and $${lo[v[3]]}$ = ${v[3]}. Empirical rule: 68% within 1 s, 95% within 2 s, 99.7% within 3 s; by symmetry half on each side (34%, 47.5%, 49.85%), and 95 − 68 = 27 → 13.5% on each side between 1 s and 2 s. Answer: **${v[1]}%**.`};
  }},
  {id:'zscore', label:'z-scores', topics:['st-3','st-6'], gen(){
    const mu = stRnd(10, 120), sd = stRnd(2, 20), x = mu + stPick([-1,1])*stRnd(1, 3*sd);
    const z = (x-mu)/sd;
    return {q:`A variable has $\\mu = ${mu}$ and $\\sigma = ${sd}$. Find the z-score of $x = ${x}$ (2 decimals).`, fields:['z'], ans:[z], tol:[0.006], sol:`$z = \\frac{x - \\mu}{\\sigma} = \\frac{${x} - ${mu}}{${sd}} = ${stF(z,2)}$: the value lies ${stF(Math.abs(z),2)} standard deviations ${z>=0?'above':'below'} the mean.`};
  }},
  {id:'addrule', label:'Addition & complement rule', topics:['st-4'], gen(){
    const pa = stRnd(2, 6)/10, pb = stRnd(2, 6)/10, pab = stR(stRnd(1, Math.round(Math.min(pa, pb)*20)-1)/20, 2);
    const or = pa+pb-pab;
    return {q:`$P(A) = ${pa}$, $P(B) = ${pb}$, $P(A \\,\\&\\, B) = ${pab}$. Find $P(A \\text{ or } B)$ and $P(\\text{not } A)$. Are A and B independent (1 = yes, 0 = no)?`, fields:['P(A or B)','P(not A)','independent? 1/0'], ans:[or, 1-pa, Math.abs(pa*pb-pab)<1e-9?1:0], tol:[0.0005,0.0005,0],
      sol:`- General addition rule: $${pa} + ${pb} - ${pab} = ${stF(or,3)}$
- Complement: $1 - ${pa} = ${stF(1-pa,2)}$
- Independence check: $P(A)\\cdot P(B) = ${stF(pa*pb,3)}$ ${Math.abs(pa*pb-pab)<1e-9?'=':'≠'} $${pab}$ → **${Math.abs(pa*pb-pab)<1e-9?'independent':'not independent'}**`};
  }},
  {id:'cond', label:'Contingency table: joint, marginal, conditional', topics:['st-4'], gen(){
    const c = [[stRnd(10,60),stRnd(10,60),stRnd(10,60)],[stRnd(10,60),stRnd(10,60),stRnd(10,60)]];
    const rT = c.map(r=>r.reduce((a,b)=>a+b,0)), cT = [0,1,2].map(j=>c[0][j]+c[1][j]), N = rT[0]+rT[1];
    const j = stRnd(0,2), i = stRnd(0,1); const rows = ['Male','Female'], cols = ['Economics','Law','Psychology'];
    const tab = `[[tab:Students by gender and program\n | ${cols.map(c=>`\\text{${c}}`).join(' | ')} | \\text{Total}\n${rows.map((r,ri)=>`\\text{${r}} | ${c[ri].join(' | ')} | ${rT[ri]}`).join('\n')}\n\\text{Total} | ${cT.join(' | ')} | ${N}\n]]`;
    const pJ = c[i][j]/N, pM = cT[j]/N, pC = c[i][j]/rT[i], pOr = (rT[i]+cT[j]-c[i][j])/N;
    return {q:`A student is selected at random. Find (4 decimals): $P(\\text{${cols[j]}})$, $P(\\text{${rows[i]}} \\,\\&\\, \\text{${cols[j]}})$, $P(\\text{${cols[j]}} \\mid \\text{${rows[i]}})$, $P(\\text{${rows[i]}} \\text{ or } \\text{${cols[j]}})$.`, table:tab, fields:['P(program)','P(joint)','P(program | gender)','P(or)'], ans:[pM, pJ, pC, pOr], tol:[0.0006,0.0006,0.0006,0.0006],
      sol:`- Marginal: $${cT[j]}/${N} = ${stF(pM,4)}$
- Joint: $${c[i][j]}/${N} = ${stF(pJ,4)}$
- Conditional: only the ${rows[i]} row counts: $${c[i][j]}/${rT[i]} = ${stF(pC,4)}$ (same as $P(A\\,\\&\\,B)/P(A)$)
- General addition: $(${rT[i]} + ${cT[j]} - ${c[i][j]})/${N} = ${stF(pOr,4)}$`};
  }},
  {id:'bayes', label:'Total probability & Bayes', topics:['st-4'], gen(){
    const a1 = stRnd(3, 7)/10, d1 = stRnd(1, 6)/100, d2 = stRnd(1, 8)/100; const a2 = stR(1-a1, 2);
    const pd = a1*d1 + a2*d2, post = a1*d1/pd;
    return {q:`Machine A produces ${stR(a1*100,0)}% of all parts with ${stR(d1*100,0)}% defective; machine B produces the rest with ${stR(d2*100,0)}% defective. A random part is defective. Find $P(D)$ and $P(A \\mid D)$ (4 decimals).`, fields:['P(D)','P(A | D)'], ans:[pd, post], tol:[0.0006, 0.0006],
      sol:`- Total probability: $P(D) = ${a1}\\cdot${d1} + ${a2}\\cdot${d2} = ${stF(a1*d1,4)} + ${stF(a2*d2,4)} = ${stF(pd,4)}$
- Bayes: $P(A \\mid D) = \\frac{${stF(a1*d1,4)}}{${stF(pd,4)}} = ${stF(post,4)}$`};
  }},
  {id:'count', label:'Counting: permutations & combinations', topics:['st-4'], gen(){
    const v = stRnd(0, 2), m = stRnd(6, 12), r = stRnd(2, 4);
    if(v===0) return {q:`In how many ways can a committee of ${r} be chosen from ${m} people?`, fields:['number'], ans:[stC(m, r)], tol:[0], sol:`Order does not matter → combinations: $_{${m}}C_{${r}} = \\frac{${m}!}{${r}!\\,${m-r}!} = ${stC(m, r)}$.`};
    if(v===1) return {q:`In how many ways can ${r} different prizes (1st, 2nd, …) be awarded to ${m} participants (no one wins twice)?`, fields:['number'], ans:[stP(m, r)], tol:[0], sol:`Order matters → permutations: $_{${m}}P_{${r}} = \\frac{${m}!}{${m-r}!} = ${stP(m, r)}$.`};
    const k = stRnd(3, 6); return {q:`A code consists of ${k} digits (0–9), digits may repeat. How many codes are possible?`, fields:['number'], ans:[Math.pow(10, k)], tol:[0], sol:`Basic counting rule: $10 \\cdot 10 \\cdots 10 = 10^{${k}} = ${Math.pow(10, k)}$.`};
  }},
  {id:'dmean', label:'Mean & σ of a discrete random variable', topics:['st-5'], gen(){
    const k = 4; let w = Array.from({length:k}, ()=>stRnd(1, 8)); const tot = w.reduce((a,b)=>a+b,0); let p = w.map(x=>stR(x/tot, 2)); p[k-1] = stR(1-p.slice(0,k-1).reduce((a,b)=>a+b,0), 2); if(p[k-1]<=0){ p = [0.1,0.3,0.4,0.2]; }
    const xs = [0,1,2,3]; const mu = xs.reduce((s,x,i)=>s+x*p[i],0), ex2 = xs.reduce((s,x,i)=>s+x*x*p[i],0), sg = Math.sqrt(ex2-mu*mu);
    return {q:`$X$ = number of complaints per day: $P(0) = ${p[0]}$, $P(1) = ${p[1]}$, $P(2) = ${p[2]}$, $P(3) = ${p[3]}$. Find $\\mu$ and $\\sigma$.`, fields:['μ','σ'], ans:[mu, sg], tol:[0.005, 0.006],
      sol:`- $\\mu = \\sum x P(x) = 0\\cdot${p[0]} + 1\\cdot${p[1]} + 2\\cdot${p[2]} + 3\\cdot${p[3]} = ${stF(mu,3)}$
- $\\sum x^2 P(x) = ${stF(ex2,3)}$
- $\\sigma = \\sqrt{${stF(ex2,3)} - ${stF(mu,3)}^2} = ${stF(sg,3)}$`};
  }},
  {id:'binom', label:'Binomial probabilities', topics:['st-5'], gen(){
    const n = stRnd(4, 12), p = stPick([0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.8]), x = stRnd(0, Math.min(n, 6));
    const pr = stBinom(n, p, x);
    return {q:`Each customer buys with probability $p = ${p}$, independently. Of $n = ${n}$ customers, find $P(X = ${x})$ (4 decimals), $\\mu$ and $\\sigma$.`, fields:[`P(X=${x})`,'μ','σ'], ans:[pr, n*p, Math.sqrt(n*p*(1-p))], tol:[0.0006, 0.001, 0.002],
      sol:`- Bernoulli trials: success = buys, $p = ${p}$, $n = ${n}$
- $P(X = ${x}) = \\binom{${n}}{${x}}\\, ${p}^{${x}}\\, ${stR(1-p,2)}^{${n-x}} = ${stC(n,x)}\\cdot ${stF(Math.pow(p,x),6)} \\cdot ${stF(Math.pow(1-p,n-x),6)} = ${stF(pr,4)}$
- $\\mu = np = ${stF(n*p,2)}$, $\\sigma = \\sqrt{np(1-p)} = \\sqrt{${stF(n*p*(1-p),3)}} = ${stF(Math.sqrt(n*p*(1-p)),3)}$`};
  }},
  {id:'pois', label:'Poisson probabilities', topics:['st-5'], gen(){
    const l = stRnd(5, 80)/10, x = stRnd(0, 8), pr = stPois(l, x);
    return {q:`Calls arrive at a hotline with on average $\\lambda = ${l}$ per hour (Poisson). Find $P(X = ${x})$ (4 decimals) and $\\sigma$.`, fields:[`P(X=${x})`,'σ'], ans:[pr, Math.sqrt(l)], tol:[0.0006, 0.002],
      sol:`- $P(X = ${x}) = e^{-${l}}\\frac{${l}^{${x}}}{${x}!} = ${stF(Math.exp(-l),6)}\\cdot\\frac{${stF(Math.pow(l,x),4)}}{${stFact(x)}} = ${stF(pr,4)}$
- $\\mu = \\lambda = ${l}$, $\\sigma = \\sqrt{\\lambda} = ${stF(Math.sqrt(l),3)}$`};
  }},
  {id:'norm', label:'Normal probabilities (Table II)', topics:['st-6'], gen(){
    const mu = stRnd(20, 120), sd = stRnd(3, 20), t = stRnd(0, 2);
    const a = mu + stRnd(-25, 20)/10*sd, b = a + stRnd(5, 25)/10*sd; const A = stR(a, 0), B = stR(b, 0);
    const za = stR((A-mu)/sd, 2), zb = stR((B-mu)/sd, 2);
    if(t===0) return {q:`$X$ is normal with $\\mu = ${mu}$, $\\sigma = ${sd}$. Find $P(X < ${A})$.`, fields:['probability'], ans:[stTab(za)], tol:[0.0015], sol:`- $z = (${A} - ${mu})/${sd} = ${stF(za,2)}$
- Table II (area to the left): **${stF(stTab(za),4)}**`};
    if(t===1) return {q:`$X$ is normal with $\\mu = ${mu}$, $\\sigma = ${sd}$. Find $P(X > ${A})$.`, fields:['probability'], ans:[1-stTab(za)], tol:[0.0015], sol:`- $z = (${A} - ${mu})/${sd} = ${stF(za,2)}$
- Table II gives the left area ${stF(stTab(za),4)}, so the right area is $1 - ${stF(stTab(za),4)} = ${stF(1-stTab(za),4)}$`};
    return {q:`$X$ is normal with $\\mu = ${mu}$, $\\sigma = ${sd}$. Find $P(${A} < X < ${B})$.`, fields:['probability'], ans:[stTab(zb)-stTab(za)], tol:[0.0015], sol:`- $z_1 = (${A} - ${mu})/${sd} = ${stF(za,2)}$, $z_2 = (${B} - ${mu})/${sd} = ${stF(zb,2)}$
- Table II: $${stF(stTab(zb),4)} - ${stF(stTab(za),4)} = ${stF(stTab(zb)-stTab(za),4)}$`};
  }},
  {id:'invnorm', label:'Percentiles (inverse normal)', topics:['st-6'], gen(){
    const mu = stRnd(20, 120), sd = stRnd(3, 20), pc = stPick([5,10,20,25,75,80,90,95,99]), top = Math.random()<.4 && pc>50;
    const area = pc/100, z = stZFor(area), x = mu + z*sd;
    return {q:top ? `$X$ is normal with $\\mu = ${mu}$, $\\sigma = ${sd}$. Which value separates the top ${100-pc}% from the rest?` : `$X$ is normal with $\\mu = ${mu}$, $\\sigma = ${sd}$. Find the ${pc}th percentile.`, fields:['x'], ans:[x], tol:[0.02*sd+0.01],
      sol:`- Area to the left: ${area}${top?` (top ${100-pc}% means ${area} to the left)`:''}
- Table II backwards: closest area ${stF(stTab(stR(z,2)),4)} → $z = ${Number.isInteger(z*100)?stF(z,2):stF(z,3)}$
- $x = \\mu + z\\sigma = ${mu} + ${Number.isInteger(z*100)?stF(z,2):stF(z,3)}\\cdot${sd} = ${stF(x,2)}$`};
  }},
  {id:'normapprox', label:'Normal approximation to the binomial', topics:['st-6'], gen(){
    const n = stPick([40,50,60,80,100,120,150]), p = stPick([0.2,0.3,0.4,0.5,0.6]); const mu = n*p, sd = Math.sqrt(n*p*(1-p)); const c = Math.round(mu + stRnd(-15, 15)/10*sd), t = stRnd(0, 2);
    let q, lo, hi, txt;
    if(t===0){ q = `P(X \\le ${c})`; hi = c+.5; lo = null; txt = `area to the left of ${c}.5`; }
    else if(t===1){ q = `P(X \\ge ${c})`; lo = c-.5; hi = null; txt = `area to the right of ${c-0.5}`; }
    else { q = `P(X = ${c})`; lo = c-.5; hi = c+.5; txt = `area between ${c-0.5} and ${c}.5`; }
    const zl = lo!=null ? stR((lo-mu)/sd, 2) : null, zh = hi!=null ? stR((hi-mu)/sd, 2) : null;
    const pr = (zh!=null ? stTab(zh) : 1) - (zl!=null ? stTab(zl) : 0);
    return {q:`$n = ${n}$, $p = ${p}$. Use the normal approximation to find $${q}$.`, fields:['probability'], ans:[pr], tol:[0.002],
      sol:`- Check: $np = ${stF(mu,1)} \\ge 5$ and $n(1-p) = ${stF(n-mu,1)} \\ge 5$ ✓
- $\\mu = ${stF(mu,2)}$, $\\sigma = \\sqrt{${stF(n*p*(1-p),2)}} = ${stF(sd,4)}$
- Continuity correction: ${txt}
${zl!=null?`- $z = (${lo} - ${stF(mu,2)})/${stF(sd,4)} = ${stF(zl,2)}$ → left area ${stF(stTab(zl),4)}\n`:''}${zh!=null?`- $z = (${hi} - ${stF(mu,2)})/${stF(sd,4)} = ${stF(zh,2)}$ → left area ${stF(stTab(zh),4)}\n`:''}- Result: ${zh==null?`$1 - ${stF(stTab(zl),4)} = $ `:zl!=null?`$${stF(stTab(zh),4)} - ${stF(stTab(zl),4)} = $ `:''}**${stF(pr,4)}**`};
  }},
  {id:'xbar', label:'Probabilities for the sample mean', topics:['st-7'], gen(){
    const mu = stRnd(40, 200), sd = stRnd(5, 30), n = stPick([4,9,16,25,36,49,64,100]); const se = sd/Math.sqrt(n);
    const c = stR(mu + stRnd(-20, 20)/10*se, 1), z = stR((c-mu)/se, 2), gt = Math.random()<.5;
    const pr = gt ? 1-stTab(z) : stTab(z);
    return {q:`A variable has $\\mu = ${mu}$ and $\\sigma = ${sd}$. For samples of size $n = ${n}$ (large enough or normal population), find $P(\\bar x ${gt?'>':'<'} ${c})$.`, fields:['probability'], ans:[pr], tol:[0.0015],
      sol:`- $\\sigma_{\\bar x} = \\sigma/\\sqrt n = ${sd}/${Math.sqrt(n)} = ${stF(se,4)}$
- $z = (${c} - ${mu})/${stF(se,4)} = ${stF(z,2)}$
- Table II: left area ${stF(stTab(z),4)}${gt?`, right area $1 - ${stF(stTab(z),4)} = ${stF(pr,4)}$`:''} → **${stF(pr,4)}**`};
  }},
  {id:'zci', label:'z-interval (σ known)', topics:['st-8'], gen(){
    const conf = stPick([90,95,99]), za = ST_ZA[conf], n = stPick([16,25,36,49,64,100]), sd = stRnd(4, 30), xb = stRnd(200, 900)/10; const E = za*sd/Math.sqrt(n);
    return {q:`SRS of $n = ${n}$, $\\bar x = ${xb}$, $\\sigma = ${sd}$ known. Find the ${conf}% confidence interval for $\\mu$ (2 decimals).`, fields:['lower','upper'], ans:[xb-E, xb+E], tol:[0.02, 0.02],
      sol:`- $z_{\\alpha/2} = ${za}$ for ${conf}%
- $E = ${za}\\cdot\\frac{${sd}}{\\sqrt{${n}}} = ${za}\\cdot${stF(sd/Math.sqrt(n),4)} = ${stF(E,3)}$
- Interval: $${xb} \\pm ${stF(E,3)}$ → **${stF(xb-E,2)} to ${stF(xb+E,2)}**`};
  }},
  {id:'tci', label:'t-interval (σ unknown)', topics:['st-8'], gen(){
    const conf = stPick([90,95,99]), n = stRnd(6, 30), s = stRnd(3, 25), xb = stRnd(200, 900)/10; const {t} = stT(n-1, conf); const E = t*s/Math.sqrt(n);
    return {q:`SRS of $n = ${n}$ from a normal population: $\\bar x = ${xb}$, $s = ${s}$, $\\sigma$ unknown. Find the ${conf}% confidence interval for $\\mu$ (2 decimals).`, fields:['lower','upper'], ans:[xb-E, xb+E], tol:[0.03, 0.03],
      sol:`- σ unknown → t-interval, $df = ${n-1}$
- Table IV: $t_{${stR((100-conf)/200,3)}} = ${t}$
- $E = ${t}\\cdot\\frac{${s}}{\\sqrt{${n}}} = ${stF(E,3)}$
- Interval: $${xb} \\pm ${stF(E,3)}$ → **${stF(xb-E,2)} to ${stF(xb+E,2)}**`};
  }},
  {id:'nsize', label:'Required sample size', topics:['st-8'], gen(){
    const conf = stPick([90,95,99]), za = ST_ZA[conf], sd = stRnd(3, 40), E = stPick([0.5,1,1.5,2,2.5,3,4,5]); const raw = Math.pow(za*sd/E, 2), n = Math.ceil(raw - 1e-9);
    return {q:`$\\sigma = ${sd}$. How large must the sample be for a ${conf}% confidence interval with margin of error $E = ${E}$?`, fields:['n'], ans:[n], tol:[0],
      sol:`$n = \\left(\\frac{${za}\\cdot${sd}}{${E}}\\right)^2 = ${stF(raw,2)}$ → always round **up**: $n = ${n}$`};
  }},
  {id:'method', label:'Which procedure? (z, t or neither)', topics:['st-8'], gen:stMethodTask},
  {id:'approx', label:'Which approximation? (Poisson / normal)', topics:['st-5','st-6'], gen:stDistTask}
];
let stDrillKind = 'mixed';
function stDrillOpen(kind){ stDrillKind = kind; navTo('st-drill'); const pg = document.getElementById('page-st-drill'); if(pg && pg.__set) pg.__set(kind); }
function buildSTDrill(){
  registerPage('st-drill', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Random Drills</h2><p>Fresh numbers every time. Solve on paper first, type the result, check — one try per task, then the full step-by-step solution. Probabilities to 4 decimals; z-scores are rounded to 2 decimals before using Table II, exactly like in the exam.</p></div>
      <div class="page-body">
        <div class="chip-row st-kinds"><button class="chip" data-k="mixed">Mixed (exam warm-up)</button>${ST_TOPICS.map(t=>{ const ks = ST_KINDS.filter(k=>k.topics[0]===t.id); return ks.length ? `<span class="chip-label">Ch. ${t.ch}</span>${ks.map(k=>`<button class="chip" data-k="${k.id}">${esc(k.label)}</button>`).join('')}` : ''; }).join('')}</div>
        <select class="st-kind-select"><option value="mixed">Mixed (exam warm-up)</option>${ST_TOPICS.map(t=>{ const ks = ST_KINDS.filter(k=>k.topics[0]===t.id); return ks.length ? `<optgroup label="Chapter ${t.ch}">${ks.map(k=>`<option value="${k.id}">${esc(k.label)}</option>`).join('')}</optgroup>` : ''; }).join('')}</select>
        <div class="bk-score-row"><span class="bk-live st-live"></span><span class="st-saved"></span><button class="btn ghost st-reset">Reset session</button></div>
        <div class="drill-card glass st-card"></div>
      </div>`;
    const card = div.querySelector('.st-card');
    let cur = null, curKind = null, done = false, sOk = 0, sN = 0;
    const label = ()=>{
      div.querySelector('.st-live').textContent = `This session: ${sOk}/${sN}`;
      const st = stDrillStats(); const k = curKind && st[curKind];
      div.querySelector('.st-saved').textContent = k ? `${ST_KINDS.find(x=>x.id===curKind).label}: ${k.ok}/${k.n} correct overall` : '';
    };
    const next = ()=>{
      curKind = stDrillKind==='mixed' ? stPick(ST_KINDS).id : stDrillKind;
      const K = ST_KINDS.find(k=>k.id===curKind);
      cur = K.gen(); done = false;
      if(cur.choice) cur.choice = shuffle(cur.choice);
      card.innerHTML = `<div class="qtag">${esc(K.label)}</div>
        <div class="drill-q st-q">${mathText(cur.q)}</div>${cur.table?richHtml(cur.table):''}
        ${cur.choice ? `<div class="chip-row st-choices">${cur.choice.map(([v,l])=>`<button class="chip" data-choice="${esc(v)}">${esc(l)}</button>`).join('')}</div>`
          : `<div class="drill-fields">${cur.fields.map(f=>`<label>${esc(f)} <input type="text" inputmode="decimal"></label>`).join('')}</div><div class="ans-actions"><button class="btn" data-d="check">Check</button></div>`}
        <div class="ans-feedback"></div><div class="ans-actions"><button class="btn ghost" data-d="next">New task →</button></div>`;
      label();
      const first = card.querySelector('input'); if(first) first.focus();
    };
    const result = (ok, detail)=>{
      done = true; sN++; if(ok) sOk++;
      const st = stDrillStats(); st[curKind] = st[curKind] || {ok:0, n:0}; st[curKind].n++; if(ok) st[curKind].ok++; lsSet('st-drill-stats', st);
      const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(ok?'good':'warn');
      fb.innerHTML = (ok?'<b>Correct.</b>':'<b>Not quite.</b>') + (detail?` ${detail}`:'') + `<div class="st-sol">${richHtml(cur.sol)}</div>`;
      card.querySelectorAll('input,[data-choice],[data-d="check"]').forEach(el=>el.disabled = true);
      label();
    };
    card.addEventListener('click', ev=>{
      const ch = ev.target.closest('[data-choice]');
      if(ch && !done){ const ok = ch.dataset.choice===cur.ans; ch.classList.add(ok?'st-ok':'st-bad'); if(!ok) card.querySelectorAll('[data-choice]').forEach(b=>{ if(b.dataset.choice===cur.ans) b.classList.add('st-ok'); }); result(ok); return; }
      const b = ev.target.closest('[data-d]'); if(!b) return;
      if(b.dataset.d==='next') next();
      if(b.dataset.d==='check' && !done){
        const ins = [...card.querySelectorAll('.drill-fields input')]; const vals = ins.map(i=>stNum(i.value));
        if(vals.some(v=>isNaN(v))){ const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show warn'; fb.textContent = 'Fill in every field with a number first.'; return; }
        const okEach = vals.map((v,i)=>Math.abs(v-cur.ans[i]) <= (cur.tol[i]||1e-9)+1e-9);
        ins.forEach((inp,i)=>inp.classList.add(okEach[i]?'st-ok':'st-bad'));
        result(okEach.every(Boolean), okEach.every(Boolean) ? '' : `Expected: ${cur.fields.map((f,i)=>`${f} = ${Number.isInteger(cur.ans[i])?cur.ans[i]:stF(cur.ans[i], 4)}`).join(', ')}.`);
      }
    });
    card.addEventListener('keydown', ev=>{ if(ev.key==='Enter'){ const c = card.querySelector('[data-d="check"]'); if(c && !done) c.click(); else if(done) next(); } });
    const set = (k)=>{ stDrillKind = k; div.querySelectorAll('.st-kinds .chip').forEach(c=>c.classList.toggle('active', c.dataset.k===k)); div.querySelector('.st-kind-select').value = k; next(); };
    div.querySelector('.st-kind-select').addEventListener('change', ev=>set(ev.target.value));
    div.querySelector('.st-kinds').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(c) set(c.dataset.k); });
    div.querySelector('.st-reset').addEventListener('click', ()=>{ sOk = 0; sN = 0; next(); });
    div.__set = set;
    set(stDrillKind);
  });
}

/* ============================================================ DATA LAB ============================================================ */
function buildSTLab(){
  registerPage('st-lab', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('quiz')} Practice</div><h2>Data Lab</h2><p>Paste or type a data set (separated by spaces, commas or line breaks). You get every descriptive measure of chapter 3 with the working, a boxplot and a stem-and-leaf diagram — use it to check your own hand calculations.</p></div>
      <div class="page-body">
        <div class="glass st-panel">
          <textarea class="st-data" rows="3" spellcheck="false">25 41 27 32 43 66 35 31 15 5 34 26 32 38 16 30 38 30 20 21</textarea>
          <div class="chip-row" style="margin-top:8px"><span class="chip-label">Slide data:</span>
            <button class="chip" data-set="25 41 27 32 43 66 35 31 15 5 34 26 32 38 16 30 38 30 20 21">TV viewing times</button>
            <button class="chip" data-set="70 64 99 55 64 89 87 65 62 38 67 70 60 69 78 39 75 56 71 51 99 68 95 86 57 53 47 50 55 81 80 98 51 36 63 66 85 79 83 70">Days to maturity</button>
            <button class="chip" data-set="41 44 45 47 47 48 51 53 58 66">Data Set I</button>
            <button class="chip" data-set="20 37 48 48 49 50 53 61 64 70">Data Set II</button>
            <button class="chip" data-set="210 219 214 197 224 219 199 199 208 209 215 199 212 212 219 210">DVD prices</button>
            <button class="chip" data-set="447 207 627 430 883 313 844 253 397 274 217 768 1064 26 587 833 277 805 653 549 649 554 570 223 443">Pickpocket losses</button>
          </div>
          <div class="st-row"><label>z-score of value <input type="text" class="st-zx" inputmode="decimal" placeholder="e.g. 50"></label><label>Chebyshev k <input type="text" class="st-k" value="2" inputmode="decimal"></label></div>
        </div>
        <div class="st-out"></div>
      </div>`;
    const ta = div.querySelector('.st-data'), out = div.querySelector('.st-out');
    const render = ()=>{
      const arr = ta.value.split(/[\s,;]+/).map(stNum).filter(v=>!isNaN(v));
      if(arr.length<2){ out.innerHTML = '<p class="st-hint">Enter at least two numbers.</p>'; return; }
      const d = stDescribe(arr), n = d.n, k = Math.max(1, stNum(div.querySelector('.st-k').value)||2), zx = stNum(div.querySelector('.st-zx').value);
      const freq = {}; d.a.forEach(x=>freq[x]=(freq[x]||0)+1); const distinct = Object.keys(freq).map(Number).sort((a,b)=>a-b);
      const ints = d.a.every(x=>Number.isInteger(x) && x>=0);
      const stem = ints ? stStem(d.a) : '';
      const inK = d.a.filter(x=>Math.abs(x-d.mean)<=k*d.s).length;
      out.innerHTML = `
        <div class="st-grid">
          <div class="glass st-panel"><h4>Center</h4>${richHtml(`- $n = ${n}$, $\\sum x = ${stF(d.sum,4).replace(/\.?0+$/,'')}$
- Mean $\\bar x = ${stF(d.sum,4).replace(/\.?0+$/,'')}/${n} = ${stF(d.mean,4)}$
- Median at position $(n+1)/2 = ${(n+1)/2}$: **${stF(d.median,4).replace(/\.?0+$/,'')}**
- Mode: ${d.modes.length ? d.modes.join(', ') : 'none (no value repeats)'}`)}</div>
          <div class="glass st-panel"><h4>Variation</h4>${richHtml(`- Range $= ${d.max} - ${d.min} = ${stF(d.range,4).replace(/\.?0+$/,'')}$
- $\\sum x^2 = ${stF(d.sum2,4).replace(/\.?0+$/,'')}$
- Sample $s = \\sqrt{\\frac{\\sum x^2 - (\\sum x)^2/n}{n-1}} = ${stF(d.s,4)}$
- If the data are a whole population: $\\sigma = ${stF(d.sigma,4)}$`)}</div>
          <div class="glass st-panel"><h4>Quartiles & outliers</h4>${richHtml(`- Ordered: ${d.a.join(', ')}
- ${n%2?'n odd → median in both halves':'n even → halves split evenly'}: $Q_1 = ${d.q1}$, $Q_2 = ${d.q2}$, $Q_3 = ${d.q3}$
- $IQR = ${stF(d.iqr,4).replace(/\.?0+$/,'')}$; limits $${stF(d.lowL,3)}$ and $${stF(d.upL,3)}$
- Potential outliers: ${d.out.length?d.out.join(', '):'none'}; adjacent values ${d.adjLo} and ${d.adjHi}
- Five-number summary: ${d.min}, ${d.q1}, ${d.q2}, ${d.q3}, ${d.max}`)}</div>
          <div class="glass st-panel"><h4>Spread rules</h4>${richHtml(`- Within $\\bar x \\pm ${k}s$ (${stF(d.mean-k*d.s,2)} to ${stF(d.mean+k*d.s,2)}): ${inK} of ${n} = ${stF(inK/n*100,1)}%
- Chebyshev guarantees at least $1 - 1/${k}^2 = ${stF((1-1/(k*k))*100,1)}\\%$${k===1?' (trivial for k = 1)':''}
- Empirical rule (bell-shaped only): ${k===1?'≈68%':k===2?'≈95%':k===3?'≈99.7%':'k must be 1, 2 or 3'}
${!isNaN(zx)?`- z-score of ${zx}: $(${zx} - ${stF(d.mean,3)})/${stF(d.s,3)} = ${stF((zx-d.mean)/d.s,2)}$`:''}`)}</div>
        </div>
        <div class="glass st-panel"><h4>Boxplot</h4>${stBoxplot(d)}</div>
        ${stem?`<div class="glass st-panel"><h4>Stem-and-leaf diagram</h4><pre class="st-stem">${stem}</pre></div>`:''}
        ${distinct.length<=12?`<div class="glass st-panel"><h4>Frequency distribution (single-value grouping)</h4><table class="bk-entry st-freq"><thead><tr><th>Value</th><th>Frequency</th><th>Relative frequency</th></tr></thead><tbody>${distinct.map(v=>`<tr><td>${v}</td><td class="num">${freq[v]}</td><td class="num">${stF(freq[v]/n,3)}</td></tr>`).join('')}</tbody></table></div>`:''}`;
    };
    ta.addEventListener('input', render);
    div.querySelectorAll('.st-zx,.st-k').forEach(i=>i.addEventListener('input', render));
    div.querySelector('.chip-row').addEventListener('click', ev=>{ const c = ev.target.closest('[data-set]'); if(!c) return; ta.value = c.dataset.set; render(); });
    render();
  });
}
function stStem(a){
  const stems = {}; a.forEach(x=>{ const s = Math.floor(x/10), l = x%10; (stems[s] = stems[s]||[]).push(l); });
  const keys = Object.keys(stems).map(Number); const lo = Math.min(...keys), hi = Math.max(...keys);
  if(hi-lo>40) return '';
  let out = ''; for(let s=lo;s<=hi;s++){ out += `${String(s).padStart(String(hi).length,' ')} | ${(stems[s]||[]).sort((x,y)=>x-y).join('')}\n`; }
  return out;
}
function stBoxplot(d){
  const W = 640, H = 96, pad = 30, lo = d.min, hi = d.max === d.min ? d.min+1 : d.max;
  const X = v => pad + (v-lo)/(hi-lo)*(W-2*pad);
  const ticks = []; const step = Math.pow(10, Math.floor(Math.log10(hi-lo||1))); let st = step; if((hi-lo)/st>12) st *= 2; if((hi-lo)/st>12) st *= 2.5; if((hi-lo)/st<4) st /= 2;
  for(let t = Math.ceil(lo/st)*st; t<=hi+1e-9; t+=st) ticks.push(stR(t, 6));
  return `<svg class="st-box" viewBox="0 0 ${W} ${H}" role="img" aria-label="Boxplot">
    <line x1="${X(d.adjLo)}" y1="34" x2="${X(d.q1)}" y2="34" class="w"/><line x1="${X(d.q3)}" y1="34" x2="${X(d.adjHi)}" y2="34" class="w"/>
    <line x1="${X(d.adjLo)}" y1="24" x2="${X(d.adjLo)}" y2="44" class="w"/><line x1="${X(d.adjHi)}" y1="24" x2="${X(d.adjHi)}" y2="44" class="w"/>
    <rect x="${X(d.q1)}" y="16" width="${Math.max(1,X(d.q3)-X(d.q1))}" height="36" class="b"/><line x1="${X(d.q2)}" y1="16" x2="${X(d.q2)}" y2="52" class="m"/>
    ${d.out.map(o=>`<text x="${X(o)}" y="40" class="o" text-anchor="middle">*</text>`).join('')}
    <line x1="${pad}" y1="70" x2="${W-pad}" y2="70" class="ax"/>
    ${ticks.map(t=>`<line x1="${X(t)}" y1="70" x2="${X(t)}" y2="75" class="ax"/><text x="${X(t)}" y="89" text-anchor="middle" class="tk">${t}</text>`).join('')}
  </svg>`;
}

/* ============================================================ DISTRIBUTION & CI CALCULATOR ============================================================ */
function buildSTCalc(){
  registerPage('st-calc', (div)=>{
    const tabs = [['normal','Normal'],['binom','Binomial'],['pois','Poisson'],['xbar','Sample mean x̄'],['ci','Confidence interval'],['n','Sample size']];
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('calc')} Practice</div><h2>Distribution & CI Calculator</h2><p>Check your own solutions. Every result shows the steps the exam expects; normal areas use Table II with z rounded to 2 decimals, t-values come from Table IV.</p></div>
      <div class="page-body"><div class="tabbar st-ctabs">${tabs.map(([k,l],i)=>`<button class="tabbtn${i?'':' active'}" data-c="${k}">${l}</button>`).join('')}</div><div class="glass st-panel st-cform"></div><div class="st-cout"></div></div>`;
    const form = div.querySelector('.st-cform'), out = div.querySelector('.st-cout');
    const F = {
      normal:{html:`<div class="st-row"><label>μ <input data-f="mu" value="100"></label><label>σ <input data-f="sd" value="16"></label><label>Type <select data-f="t"><option value="left">P(X &lt; a)</option><option value="right">P(X &gt; a)</option><option value="between" selected>P(a &lt; X &lt; b)</option><option value="inv">x for area to the left</option></select></label><label>a / area <input data-f="a" value="115"></label><label>b <input data-f="b" value="140"></label></div>`,
        run(v){ const {mu, sd} = v; if(!(sd>0)) return 'σ must be positive.';
          if(v.t==='inv'){ const z = stZFor(v.a), zs = Number.isInteger(stR(z*100,6)) ? stF(z,2) : stF(z,3); return `- Area to the left: ${v.a}\n- Table II backwards: closest area ${stF(stTab(stR(z,2)),4)} → $z = ${zs}$\n- $x = \\mu + z\\sigma = ${mu} + ${zs}\\cdot${sd} = ${stF(mu+z*sd,3)}$`; }
          const za = stR((v.a-mu)/sd, 2), zb = stR((v.b-mu)/sd, 2);
          if(v.t==='left') return `- $z = (${v.a} - ${mu})/${sd} = ${stF(za,2)}$\n- Table II: **${stF(stTab(za),4)}**`;
          if(v.t==='right') return `- $z = (${v.a} - ${mu})/${sd} = ${stF(za,2)}$\n- $1 - ${stF(stTab(za),4)} = $ **${stF(1-stTab(za),4)}**`;
          return `- $z_a = (${v.a} - ${mu})/${sd} = ${stF(za,2)}$, $z_b = (${v.b} - ${mu})/${sd} = ${stF(zb,2)}$\n- $${stF(stTab(zb),4)} - ${stF(stTab(za),4)} = $ **${stF(stTab(zb)-stTab(za),4)}** (${stF((stTab(zb)-stTab(za))*100,2)}%)`; }},
      binom:{html:`<div class="st-row"><label>n <input data-f="n" value="3"></label><label>p <input data-f="p" value="0.8"></label><label>x <input data-f="x" value="2"></label></div>`,
        run(v){ const n = Math.round(v.n), p = v.p, x = Math.round(v.x); if(!(n>=1 && p>=0 && p<=1 && x>=0 && x<=n) || n>170) return 'Need 1 ≤ n ≤ 170, 0 ≤ p ≤ 1, 0 ≤ x ≤ n.';
          let le = 0; for(let i=0;i<=x;i++) le += stBinom(n,p,i); const eq = stBinom(n,p,x); const mu = n*p, sd = Math.sqrt(n*p*(1-p));
          const ok = mu>=5 && n-mu>=5; let approx = '';
          if(ok){ const z1 = stR((x-.5-mu)/sd,2), z2 = stR((x+.5-mu)/sd,2); approx = `\n- Normal approximation allowed ($np, n(1-p) \\ge 5$): $P(X = ${x}) \\approx$ area between ${x-0.5} and ${x+0.5} → $z = ${stF(z1,2)}, ${stF(z2,2)}$ → ${stF(stTab(z2)-stTab(z1),4)}`; }
          else if(n>=100 && mu<=10) approx = `\n- Poisson approximation allowed ($n \\ge 100$, $np \\le 10$): $P(X = ${x}) \\approx ${stF(stPois(mu,x),4)}$`;
          return `- $P(X = ${x}) = \\binom{${n}}{${x}}\\,${p}^{${x}}\\,${stR(1-p,6)}^{${n-x}} = ${stC(n,x)}\\cdot${stF(Math.pow(p,x),6)}\\cdot${stF(Math.pow(1-p,n-x),6)} = $ **${stF(eq,4)}**\n- $P(X \\le ${x}) = ${stF(le,4)}$, $P(X \\ge ${x}) = ${stF(1-le+eq,4)}$\n- $\\mu = np = ${stF(mu,3)}$, $\\sigma = \\sqrt{np(1-p)} = ${stF(sd,4)}$${approx}`; }},
      pois:{html:`<div class="st-row"><label>λ <input data-f="l" value="6.9"></label><label>x <input data-f="x" value="6"></label></div>`,
        run(v){ const l = v.l, x = Math.round(v.x); if(!(l>0 && x>=0 && x<=170)) return 'Need λ > 0 and 0 ≤ x ≤ 170.'; let le = 0; for(let i=0;i<=x;i++) le += stPois(l,i);
          return `- $P(X = ${x}) = e^{-${l}}\\frac{${l}^{${x}}}{${x}!} = $ **${stF(stPois(l,x),4)}**\n- $P(X \\le ${x}) = ${stF(le,4)}$, $P(X \\ge ${x}) = ${stF(1-le+stPois(l,x),4)}$\n- $\\mu = ${l}$, $\\sigma = \\sqrt{${l}} = ${stF(Math.sqrt(l),4)}$`; }},
      xbar:{html:`<div class="st-row"><label>μ <input data-f="mu" value="100"></label><label>σ <input data-f="sd" value="16"></label><label>n <input data-f="n" value="16"></label><label>Type <select data-f="t"><option value="gt">P(x̄ &gt; c)</option><option value="lt">P(x̄ &lt; c)</option></select></label><label>c <input data-f="c" value="104"></label></div>`,
        run(v){ const se = v.sd/Math.sqrt(v.n), z = stR((v.c-v.mu)/se,2); const pr = v.t==='gt' ? 1-stTab(z) : stTab(z);
          return `- $\\mu_{\\bar x} = ${v.mu}$, $\\sigma_{\\bar x} = ${v.sd}/\\sqrt{${v.n}} = ${stF(se,4)}$\n- $z = (${v.c} - ${v.mu})/${stF(se,4)} = ${stF(z,2)}$\n- Table II → **${stF(pr,4)}**\n- Valid if the population is normal or $n$ is large (CLT)`; }},
      ci:{html:`<div class="st-row"><label>σ known? <select data-f="k"><option value="1">yes → z</option><option value="0" selected>no → t</option></select></label><label>x̄ <input data-f="xb" value="515.72"></label><label>σ or s <input data-f="sd" value="259.64"></label><label>n <input data-f="n" value="25"></label><label>Level <select data-f="conf"><option>90</option><option selected>95</option><option>99</option></select></label></div>`,
        run(v){ const n = Math.round(v.n), conf = Math.round(v.conf); if(!(n>=2 && v.sd>0)) return 'Need n ≥ 2 and a positive standard deviation.';
          if(+v.k===1){ const za = ST_ZA[conf], E = za*v.sd/Math.sqrt(n); return `- σ known → z-interval, $z_{\\alpha/2} = ${za}$\n- $E = ${za}\\cdot${v.sd}/\\sqrt{${n}} = ${stF(E,4)}$\n- **${stF(v.xb-E,2)} to ${stF(v.xb+E,2)}**\n- Check the conditions: SRS; normal population or large sample (n < 15 only for normal data; 15–30 no outliers)`; }
          const {t, dfUsed} = stT(n-1, conf); const E = t*v.sd/Math.sqrt(n);
          return `- σ unknown → t-interval, $df = ${n-1}$${dfUsed!==n-1?` (Table IV row ${dfUsed})`:''}, $t_{\\alpha/2} = ${t}$\n- $E = ${t}\\cdot${v.sd}/\\sqrt{${n}} = ${stF(E,4)}$\n- **${stF(v.xb-E,2)} to ${stF(v.xb+E,2)}**`; }},
      n:{html:`<div class="st-row"><label>σ <input data-f="sd" value="12"></label><label>E <input data-f="e" value="2"></label><label>Level <select data-f="conf"><option>90</option><option selected>95</option><option>99</option></select></label></div>`,
        run(v){ const za = ST_ZA[Math.round(v.conf)], raw = Math.pow(za*v.sd/v.e, 2); if(!(v.e>0)) return 'E must be positive.';
          return `- $n = \\left(\\frac{${za}\\cdot${v.sd}}{${v.e}}\\right)^2 = ${stF(raw,3)}$\n- Round **up**: $n = ${Math.ceil(raw-1e-9)}$`; }}
    };
    let cur = 'normal';
    const run = ()=>{
      const v = {}; form.querySelectorAll('[data-f]').forEach(el=>{ v[el.dataset.f] = el.tagName==='SELECT' && isNaN(stNum(el.value)) ? el.value : stNum(el.value); });
      if(Object.entries(v).some(([k,x])=>typeof x==='number' && isNaN(x))){ out.innerHTML = '<p class="st-hint">Fill in every field with a number.</p>'; return; }
      const r = F[cur].run(v);
      out.innerHTML = `<div class="glass st-panel st-result">${r.startsWith('-') ? richHtml(r) : `<p class="st-hint">${esc(r)}</p>`}</div>`;
    };
    const show = k=>{ cur = k; form.innerHTML = F[k].html; div.querySelectorAll('.st-ctabs .tabbtn').forEach(b=>b.classList.toggle('active', b.dataset.c===k)); run(); };
    div.querySelector('.st-ctabs').addEventListener('click', e=>{ const b = e.target.closest('.tabbtn'); if(b) show(b.dataset.c); });
    form.addEventListener('input', run); form.addEventListener('change', run);
    show('normal');
  });
}

/* ============================================================ TABLES II & IV ============================================================ */
function buildSTTables(){
  registerPage('st-tables', (div)=>{
    const cols = [0,1,2,3,4,5,6,7,8,9];
    let rowsZ = '';
    for(let r=-39;r<=39;r++){
      const base = r/10, neg = r<0 || (r===0 && false);
      rowsZ += `<tr><th>${r<0?'−':''}${Math.abs(base).toFixed(1)}</th>${cols.map(c=>{ const z = r<0 ? stR(base - c/100, 2) : stR(base + c/100, 2); return `<td data-z="${z.toFixed(2)}">${stTab(z).toFixed(4)}</td>`; }).join('')}</tr>`;
      if(r===-1) rowsZ += `<tr><th>−0.0</th>${cols.map(c=>{ const z = stR(-c/100, 2); return `<td data-z="${z.toFixed(2)}">${stTab(z).toFixed(4)}</td>`; }).join('')}</tr>`;
    }
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Reference</div><h2>Tables II & IV</h2><p>The two tables from the course handout. Type a value to highlight the cell you would read in the exam. Table II shows the area to the <b>left</b> of z; for negative z the second decimal is subtracted (−1.2 row, column 0.05 = −1.25).</p></div>
      <div class="page-body">
        <div class="glass st-panel"><h4>Table II — areas under the standard normal curve</h4>
          <div class="st-row"><label>z <input class="st-tz" value="1.96" inputmode="decimal"></label><span class="st-tz-out"></span></div>
          <div class="st-tablewrap"><table class="st-ztab"><thead><tr><th>z</th>${cols.map(c=>`<th>.0${c}</th>`).join('')}</tr></thead><tbody>${rowsZ}</tbody></table></div></div>
        <div class="glass st-panel"><h4>Table IV — values of t<sub>α</sub> (area α to the right)</h4>
          <div class="st-row"><label>df <input class="st-tdf" value="24" inputmode="numeric"></label><label>α <select class="st-ta"><option value="1">0.10</option><option value="2">0.05</option><option value="3" selected>0.025</option><option value="4">0.01</option><option value="5">0.005</option></select></label><span class="st-t-out"></span></div>
          <div class="st-tablewrap"><table class="st-ttab"><thead><tr><th>df</th><th>t<sub>0.10</sub></th><th>t<sub>0.05</sub></th><th>t<sub>0.025</sub></th><th>t<sub>0.01</sub></th><th>t<sub>0.005</sub></th></tr></thead>
            <tbody>${ST_TTABLE.map(r=>`<tr data-df="${r[0]}"><th>${r[0]}</th>${r.slice(1).map((v,i)=>`<td data-c="${i+1}">${v.toFixed(3)}</td>`).join('')}</tr>`).join('')}<tr data-df="z"><th>z</th><td>1.282</td><td>1.645</td><td>1.960</td><td>2.326</td><td>2.576</td></tr></tbody></table></div>
          <p class="st-hint">Confidence level → α/2: 90% → 0.05 · 95% → 0.025 · 99% → 0.005. If your df is not listed, the tool uses the next smaller df (conservative).</p></div>
      </div>`;
    const hz = ()=>{
      div.querySelectorAll('.st-ztab td.on').forEach(td=>td.classList.remove('on'));
      const z = stNum(div.querySelector('.st-tz').value); const o = div.querySelector('.st-tz-out');
      if(isNaN(z)){ o.textContent = ''; return; }
      const zr = stR(z, 2); const td = div.querySelector(`.st-ztab td[data-z="${zr.toFixed(2)}"]`);
      if(td){ td.classList.add('on'); td.scrollIntoView({block:'nearest', inline:'nearest'}); }
      o.innerHTML = `left ${stF(stTab(zr),4)} · right ${stF(1-stTab(zr),4)} · between ±${Math.abs(zr).toFixed(2)}: ${stF(stTab(Math.abs(zr))-stTab(-Math.abs(zr)),4)}`;
    };
    const ht = ()=>{
      div.querySelectorAll('.st-ttab td.on').forEach(td=>td.classList.remove('on'));
      const df = Math.round(stNum(div.querySelector('.st-tdf').value)), c = +div.querySelector('.st-ta').value; const o = div.querySelector('.st-t-out');
      if(!(df>=1)){ o.textContent = ''; return; }
      let row = ST_TTABLE[0]; ST_TTABLE.forEach(r=>{ if(r[0]<=df) row = r; });
      const td = div.querySelector(`.st-ttab tr[data-df="${row[0]}"] td[data-c="${c}"]`); if(td){ td.classList.add('on'); td.scrollIntoView({block:'nearest', inline:'nearest'}); }
      o.innerHTML = `t = <b>${row[c].toFixed(3)}</b>${row[0]!==df?` (row df = ${row[0]})`:''}`;
    };
    div.querySelector('.st-tz').addEventListener('input', hz);
    div.querySelector('.st-tdf').addEventListener('input', ht); div.querySelector('.st-ta').addEventListener('change', ht);
    hz(); ht();
  });
}
