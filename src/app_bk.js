/* ============================================================ BOOKKEEPING & ACCOUNTING (second subject, Prof. Cloer) ============================================================ */
// Loaded after app.js: wraps the Math II overrides so both subjects share sidebar, search, home, radar and study plan.
const BK_NAV = [
  {sec:'Overview', items:[{id:'bk-home', label:'Bookkeeping Home & Exam Info', icon:'home'}]},
  {sec:'Practice', items:[
    {id:'bk-tut', label:'Tutorials TUT 1–11 (official solutions)', icon:'doc'},
    {id:'bk-train', label:'Booking Entry Trainer', icon:'logic'},
    {id:'bk-calc', label:'Number Drills (costs, depreciation, VAT, deferrals)', icon:'calc'},
    {id:'bk-close', label:'Closing Trainer (OBSA → P&L → CBSA)', icon:'logic'},
    {id:'bk-cheat', label:'Cheat Sheet (A4, printable)', icon:'cheat'}
  ]}
];
const BK_CHAPTER_COUNT = BK_TOPICS.length;
function bkDaysLeft(){ return Math.max(0, Math.ceil((PLAN_EXAM_BK - new Date().setHours(0,0,0,0))/86400000)); }

/* ---------- sidebar / search / home ---------- */
const __buildSidebarNavM2 = buildSidebarNav;
buildSidebarNav = function(subjId){
  if(subjId!=='bk') return __buildSidebarNavM2(subjId);
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  BK_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  html += `<div class="nav-section-label">Chapters</div>`;
  BK_TOPICS.forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon('summary')}<span>${t.ch}. ${esc(t.title)}</span></div>`; });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};

const __buildSearchIndexM2 = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexM2();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  BK_TOPICS.forEach(t=>{
    const where = `Bookkeeping · Chapter ${t.ch}`;
    add({type:'Topic', rank:0, title:t.title, text:'', where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:searchFlat(p), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:c.q, text:c.a, where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:q.q, text:q.exp||'', where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  BK_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:it, where:'Bookkeeping · Cheat Sheet', page:'bk-cheat'})));
  BK_TUTS.forEach(tu=>tu.tasks.forEach(k=>add({type:'Tutorial', rank:2, title:`TUT ${tu.n} · ${tu.title}`, text:searchFlat(k.q+' '+(k.sol||'')), where:`Bookkeeping · Tutorials · TUT ${tu.n}`, page:'bk-tut'})));
  BK_TRAIN.forEach(x=>add({type:'Booking entry', rank:2, title:x.text, text:x.lines.map(l=>l[1]).join(' '), where:'Bookkeeping · Booking Entry Trainer', page:'bk-train'}));
  BK_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`Bookkeeping · ${sec.sec}`, page:it.id})));
  return idx;
};

buildHomeCards = function(){
  const wrap = document.getElementById('home-cards');
  const daysM2 = Math.max(0, Math.ceil((PLAN_EXAM_M2 - new Date().setHours(0,0,0,0))/86400000));
  const nQuiz = BK_TOPICS.reduce((n,t)=>n+t.quiz.length, 0);
  const card = (id, tag, label, short, stats)=>`<div class="subj-card" onclick="selectSubject('${id}',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon(id==='bk'?'acc':id)}</div>
      <div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">${tag}</span><h3>${label}</h3><p>${short}</p>
        <div class="stats">${stats.map(s=>`<span>${s}</span>`).join('')}</div></div></div>`;
  const m2 = SUBJECTS.find(s=>s.id==='m2'), bk = SUBJECTS.find(s=>s.id==='bk');
  wrap.innerHTML = card('m2', 'MATH II', m2.label, m2.short, ['7 chapters', '4 exams + 150 old tasks', `${daysM2} days to 14 Dec`])
    + card('bk', 'ACCOUNTING', bk.label, bk.short, [`${BK_CHAPTER_COUNT} chapters · ${nQuiz} quiz questions`, `${BK_TRAIN.length} booking drills`, `${bkDaysLeft()} days to 21 Dec`])
    + M2_UPCOMING.filter(u=>u.tag!=='ACCOUNTING').map(u=>`<div class="subj-card soon"><div class="banner" style="background:var(--tile-banner)">${homeIcon(u.icon)}</div><div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">${u.tag}</span><h3>${esc(u.label)}</h3><p>${esc(u.note)}</p><div class="stats"><span>${u.date}</span><span>coming later</span></div></div></div>`).join('');
};

/* ---------- scores: quiz + booking trainer (flashcards stay optional and do not count) ---------- */
const __fcMasteryLectureM2 = fcMasteryLecture;
fcMasteryLecture = function(subjId){
  if(subjId!=='bk') return __fcMasteryLectureM2(subjId);
  let gotit=0, partial=0, dontknow=0, total=0;
  BK_TOPICS.forEach(t=>{
    Object.values(ls('fc-'+t.id, {})).forEach(v=>{ if(v==='gotit') gotit++; else if(v==='partial') partial++; else if(v==='dontknow') dontknow++; });
    total += t.cards.length;
  });
  return { gotit, partial, dontknow: dontknow+(total-gotit-partial-dontknow), total, pct: total? Math.round(gotit/total*100) : 0 };
};
function bkTrainState(){ return ls('bk-train-state', {}); }
function bkTrainScore(topicId){
  const st = bkTrainState();
  const vals = BK_TRAIN.filter(x=>!topicId || x.topic===topicId).map(x=>st[x.id]).filter(v=>v!=null);
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function bkTutState(){ return ls('bk-tut-state', {}); }
function bkTutScore(topicId){
  const st = bkTutState(); const vals = [];
  BK_TUTS.filter(tu=>!topicId || tu.topic===topicId).forEach(tu=>tu.tasks.forEach(k=>{ const v = st[tu.n+'-'+k.id]; if(v!=null) vals.push(v); }));
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function bkTopicScore(t){
  const parts = [];
  const q = knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); if(q!=null) parts.push(q);
  const tr = bkTrainScore(t.id); if(tr!=null) parts.push(tr);
  const tu = bkTutScore(t.id); if(tu!=null) parts.push(tu);
  return parts.length ? parts.reduce((a,b)=>a+b,0)/parts.length : null;
}
const __radarAxesM2 = radarAxes;
radarAxes = function(mode){
  if(mode==='bk') return BK_TOPICS.map(t=>({label:`${t.ch}. ${t.title}`, page:t.id, score:bkTopicScore(t)}));
  return __radarAxesM2(mode);
};

/* ---------- study plan: both exams ---------- */
planDaysLeft = function(subj){ return Math.max(1, Math.ceil(((subj==='bk' ? PLAN_EXAM_BK : PLAN_EXAM_M2) - planStart())/86400000)); };
const __planItemPoolM2 = planItemPool;
planItemPool = function(){
  const items = __planItemPoolM2();
  BK_TOPICS.forEach(t=>{ const s = bkTopicScore(t); items.push({subj:'bk', label:`Ch. ${t.ch} · ${t.title}`, page:t.id, weight:s==null ? 1 : 1-s, size:t.quiz.length + BK_TRAIN.filter(x=>x.topic===t.id).length + Math.round(t.summary.split(/\s+/).length/120)}); });
  const tr = bkTrainScore();
  items.push({subj:'bk', label:'Booking Entry Trainer — full run', page:'bk-train', weight:tr==null ? .9 : 1-tr, size:BK_TRAIN.length});
  const tuS = bkTutScore();
  items.push({subj:'bk', label:'Tutorials TUT 1–11 — solve, then compare with the official solution', page:'bk-tut', weight:tuS==null ? .9 : 1-tuS, size:BK_TUTS.reduce((n,tu)=>n+tu.tasks.length,0)});
  // flags over both subjects together
  items.forEach(i=>{ i.large = false; i.prio = false; });
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size).slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  return items;
};
const __planScheduleM2 = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='bk-train'){ const h = planDaysLeft('bk'); return Array.from(new Set([Math.max(1,h-20), Math.max(1,h-9), Math.max(1,h-3)])); }
  return __planScheduleM2(item, idx);
};
const __buildStudyPlanM2 = buildStudyPlan;
buildStudyPlan = function(){
  __buildStudyPlanM2();
  const build = lazyPages['plan'];
  if(build) lazyPages['plan'] = ()=>{ build(); bkPatchPlanPage(document.getElementById('page-plan')); };
};
function bkPatchPlanPage(div){
  if(div.__bkPatched) return; div.__bkPatched = true;
  const eb = div.querySelector('.page-header .eyebrow'); if(eb) eb.textContent = 'S2/2 · Math II & Bookkeeping';
  const p = div.querySelector('.page-header p'); if(p) p.textContent = 'See where you are weak, then follow a day-by-day plan up to both exams: Math II on 14 December and Bookkeeping on 21 December. Weak chapters show up more often; mock exams and full trainer runs sit near the end.';
  const tabs = div.querySelector('.radar-tabs');
  if(tabs){ tabs.querySelector('[data-subj="topics"]').textContent = 'Math II chapters'; tabs.querySelector('[data-subj="types"]').textContent = 'Math II exercise types'; tabs.insertAdjacentHTML('beforeend', '<button class="tabbtn" data-subj="bk">Bookkeeping</button>'); }
  const m2lab = div.querySelector('.plan-exam-val[data-subj="m2"]');
  if(m2lab) m2lab.parentElement.insertAdjacentHTML('afterend', `<label>Bookkeeping — exam date <span class="plan-exam-val" data-subj="bk"></span></label>`);
  const inp = div.querySelector('.plan-start-input'); if(inp) inp.max = planIso(PLAN_EXAM_BK);
  renderPlanDays(div);
}
const __renderPlanDaysM2 = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysM2(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val[data-subj="bk"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_BK.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('bk')}d`; });
  div.querySelectorAll('.plan-exam-val[data-subj="m2"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_M2.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('m2')}d`; });
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ if(el.textContent==='BK') el.textContent = 'BOOKKEEPING'; });
};
const __renderRadarM2 = renderRadar;
renderRadar = function(div){
  __renderRadarM2(div);
  if(div.dataset.radarSubj==='bk'){
    const reco = div.querySelector('.radar-reco');
    if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes/, 'Finish chapter quizzes and run the Booking Entry Trainer');
  }
};

/* ---------- topic pages: Summary · Quiz first, flashcards as optional grey tab ---------- */
const __buildTopicPageM2 = buildTopicPage;
buildTopicPage = function(t){
  if(!t.id.startsWith('bk-')) return __buildTopicPageM2(t);
  registerPage(t.id, (div)=>{
    const drills = BK_TRAIN.filter(x=>x.topic===t.id).length;
    div.innerHTML = `
      <div class="page-header">
        <div class="eyebrow">${icon('summary')} Bookkeeping · Chapter ${t.ch}</div>
        <h2>${esc(t.title)}</h2>
        <p>${esc(t.examWeight)}</p>
      </div>
      <div class="page-body">
        ${(()=>{ const tuts = BK_TUTS.filter(tu=>tu.topic===t.id); return (drills||tuts.length||BK_CLASS.some(c=>c.topic===t.id)) ? `<div class="chip-row"><span class="chip-label">Practise:</span>${drills?`<button class="chip" onclick="bkTrainOpen('${t.id}')">${drills} booking drills for this chapter</button>`:''}${tuts.map(tu=>`<button class="chip" onclick="bkTutOpen(${tu.n})">TUT ${tu.n} · ${esc(tu.title)}</button>`).join('')}${BK_CLASS.filter(c=>c.topic===t.id).map(c=>`<button class="chip" onclick="bkClassOpen(${c.n})">In class C${c.n} · ${esc(c.title)}</button>`).join('')}</div>` : ''; })()}
        <div class="tabbar">
          <button class="tabbtn active" data-tab="sum">Summary</button>
          <button class="tabbtn" data-tab="qz">Quiz</button>
          <button class="tabbtn fc-side" data-tab="fc">Flashcards (optional)</button>
        </div>
        <div class="tabpanel active" id="${t.id}-sum"></div>
        <div class="tabpanel" id="${t.id}-qz"></div>
        <div class="tabpanel" id="${t.id}-fc"></div>
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

/* ---------- Bookkeeping home ---------- */
function buildBKHome(){
  registerPage('bk-home', (div)=>{
    const tr = bkTrainScore();
    div.innerHTML = `
      <div class="page-header">
        <div class="eyebrow">${icon('home')} Bookkeeping & Accounting</div>
        <h2>Bookkeeping</h2>
        <p>Prof. Adrian Cloer · ${BK_CHAPTER_COUNT} chapter pages from the slides of 06.10.2026 plus Amendments 1/2 and 3, and all eleven tutorials with their official solutions. The core skill is writing booking entries ("Debit … / Credit …"), so pair every chapter with its tutorial and booking drills.</p>
      </div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Mon 21 Dec 2026 · 09:00–12:00 · ${bkDaysLeft()} days</span></div>
          <div class="exam-grid">
            <div class="exam-col">
              <div class="exam-label">Shared slot with Financial Statement Analysis</div>
              <ul class="exam-facts">
                <li><b>Exam preparation class:</b> Tuesday 18.11., Zoom, 19:15 (announced on the last slide).</li>
                <li><b>VAT:</b> the slide "Remember (also for the exam)" lists the VAT facts — they are all in chapter 6.</li>
                <li><b>Not in this deck:</b> chapter 5 (components of single and consolidated financial statements, disclosure and audit) is covered next semester.</li>
              </ul>
            </div>
            <div class="exam-col">
              <div class="exam-label">Reading requirements — "you will be tested on it in the exam"</div>
              <ul class="exam-facts">
                <li>Brösel/Freichel/Mindermann, <i>German Accounting</i>: ch. 1–5, 6.1, 6.2, 6.4, 7, 10, 13.3, 13.4.1, 13.4.2, 13.4.4. Chapter 2 is not covered in the lectures but is still exam-relevant.</li>
                <li>Wöhe, <i>Einführung in die ABWL</i> (28th ed.): ch. 2 C.1 (choice of legal forms, incl. GmbH & Co. KG) and ch. 6 A.</li>
                <li>Solution keys of the exercises — TUT 1–11 are in the hub (<a href="#bk-tut" onclick="navTo('bk-tut');return false">Tutorials</a>): basic terms, inventory, obligation to keep accounts, income-neutral transactions, OBSA/CBSA, P&L, VAT, acquisition costs, production costs, depreciation, deferrals. The keys for merchandise and provisions are not in the folder yet.</li>
                <li><b>Amendments:</b> 1/2 (enterprise, equity vs debt, legal forms) is in chapters 1–2 and 4; 3 (inventory and valuation simplification) in chapter 3.1 — it corrects the pre/post-year-end deadlines to 3 months before / 2 months after.</li>
              </ul>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('bk-1')">Start with chapter 1 →</button>
            <button class="btn ghost" onclick="navTo('bk-tut')">Tutorials${bkTutScore()!=null?` · ${Math.round(bkTutScore()*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('bk-train')">Booking Entry Trainer${tr!=null?` · ${Math.round(tr*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:8px;">Chapters</div>
        <div class="topic-grid">
          ${BK_TOPICS.map(t=>{ const s = bkTopicScore(t); const nt = BK_TUTS.filter(tu=>tu.topic===t.id).map(tu=>tu.n); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">CHAPTER ${t.ch}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions · ${BK_TRAIN.filter(x=>x.topic===t.id).length} booking drills${nt.length?` · TUT ${nt.join(', ')}`:''}${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('bk-tut')"><div class="ic">${icon('doc')}</div><h4>Tutorials TUT 1–11</h4><p>${BK_TUTS.reduce((n,tu)=>n+tu.tasks.length,0)} tasks: write your answer, reveal the official solution, rate yourself.</p></div>
          <div class="tool-tile" onclick="navTo('bk-class')"><div class="ic">${icon('doc')}</div><h4>In-Class Notes</h4><p>${BK_CLASS.length} board examples from Prof. Cloer's lectures with ${BK_CLASS.reduce((n,c)=>n+c.tasks.length,0)} tasks to redo yourself.</p></div>
          <div class="tool-tile" onclick="navTo('bk-train')"><div class="ic">${icon('logic')}</div><h4>Booking Entry Trainer</h4><p>${BK_TRAIN.length} transactions from the slides, tutorials and lectures: pick the debit and credit accounts.</p></div>
          <div class="tool-tile" onclick="navTo('bk-cheat')"><div class="ic">${icon('cheat')}</div><h4>Cheat Sheet</h4><p>All rules, entries and numbers on one printable page.</p></div>
        </div>
      </div>`;
  });
}

/* ---------- cheat sheet ---------- */
function buildBKCheat(){
  registerPage('bk-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>Bookkeeping Cheat Sheet</h2><p>Every rule and booking pattern from the slides in short form. Your highlights are printed too.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="bk-cheat-body" class="cheat-print"></div></div>`;
    renderCheat(div.querySelector('#bk-cheat-body'), BK_CHEAT, '', 'bk-cheat');
  });
}

/* ---------- Booking Entry Trainer ---------- */
let bkTrainFilter = 'all';
function bkTrainOpen(topicId){ bkTrainFilter = topicId; navTo('bk-train'); const pg = document.getElementById('page-bk-train'); if(pg && pg.__start) pg.__start(); }
function buildBKTrainer(){
  registerPage('bk-train', (div)=>{
    const topicsWith = BK_TOPICS.filter(t=>BK_TRAIN.some(x=>x.topic===t.id));
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Booking Entry Trainer</h2><p>Each transaction shows its sides and amounts. Pick the account for every line, then check. One try per task — the result counts for the radar and the study plan.</p></div>
      <div class="page-body">
        <div class="chip-row bk-filter"><button class="chip" data-f="all">All (${BK_TRAIN.length})</button><button class="chip" data-f="wrong">My mistakes</button><button class="chip" data-f="src:tut">Only tutorial & class drills (${BK_TRAIN.filter(x=>x.src).length})</button>${topicsWith.map(t=>`<button class="chip" data-f="${t.id}">Ch. ${t.ch} ${esc(t.title.split(/[&,:]/)[0].trim())}</button>`).join('')}</div>
        <div class="bk-score-row"><span class="bk-live"></span><span class="bk-best"></span><button class="btn ghost bk-reset">Reset run</button></div>
        <div class="drill-card glass bk-card"></div>
      </div>`;
    let run = [], i = 0, right = 0, done = 0, checked = false;
    const card = div.querySelector('.bk-card');
    const opts = BK_ACCOUNTS.slice().sort((a,b)=>a.localeCompare(b));
    const pool = ()=>{
      const st = bkTrainState();
      if(bkTrainFilter==='wrong') return BK_TRAIN.filter(x=>st[x.id]===0);
      if(bkTrainFilter==='src:tut') return BK_TRAIN.filter(x=>x.src);
      if(bkTrainFilter.startsWith('src:')) return BK_TRAIN.filter(x=>x.src===bkTrainFilter.slice(4));
      return BK_TRAIN.filter(x=>bkTrainFilter==='all' || x.topic===bkTrainFilter);
    };
    const score = ()=>{
      div.querySelector('.bk-live').textContent = `Score: ${right}/${done}${run.length?` · task ${Math.min(i+1, run.length)} of ${run.length}`:''}`;
      const all = bkTrainScore(); const st = bkTrainState();
      div.querySelector('.bk-best').textContent = all!=null ? `Overall: ${Math.round(all*100)}% of ${Object.keys(st).length} tried tasks correct (latest attempt)` : 'No attempts yet';
    };
    const start = ()=>{
      div.querySelectorAll('.bk-filter .chip').forEach(c=>c.classList.toggle('active', c.dataset.f===bkTrainFilter));
      run = shuffle(pool()); i = 0; right = 0; done = 0; show();
    };
    const show = ()=>{
      checked = false; score();
      if(!run.length){ card.innerHTML = `<p>${bkTrainFilter==='wrong' ? 'No open mistakes — well done.' : 'No tasks here.'}</p>`; return; }
      if(i>=run.length){
        const pct = Math.round(right/run.length*100);
        card.innerHTML = `<h3 style="margin:0 0 6px">Run finished: ${right}/${run.length} (${pct}%)</h3><p>${right<run.length?'Repeat your mistakes or start a new shuffled run.':'Every entry correct.'}</p><div class="ans-actions"><button class="btn" data-a="again">New shuffled run</button>${right<run.length?'<button class="btn ghost" data-a="wrong">Repeat my mistakes</button>':''}</div>`;
        return;
      }
      const x = run[i]; const t = BK_TOPICS.find(tt=>tt.id===x.topic);
      card.innerHTML = `<div class="qtag">Ch. ${t.ch} · ${esc(t.title)}${x.src?` · ${x.src}`:''}</div>
        <div class="bk-task">${esc(x.text)}</div>
        <table class="bk-entry"><thead><tr><th>Side</th><th>Account</th><th>Amount €</th></tr></thead><tbody>
          ${x.lines.map((l,k)=>`<tr class="${l[0]==='D'?'deb':'cre'}"><td>${l[0]==='D'?'Debit':'Credit'}</td><td><select data-k="${k}"><option value="">— choose account —</option>${opts.map(o=>`<option>${esc(o)}</option>`).join('')}</select><div class="bk-sol"></div></td><td class="num">${l[2]}</td></tr>`).join('')}
        </tbody></table>
        <div class="ans-feedback"></div>
        <div class="ans-actions"><button class="btn" data-a="check">Check</button><button class="btn ghost" data-a="next" style="display:none">Next →</button></div>`;
    };
    const check = ()=>{
      const x = run[i]; const sels = [...card.querySelectorAll('select')];
      if(sels.some(s=>!s.value)){ const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show warn'; fb.textContent = 'Pick an account for every line first.'; return; }
      checked = true;
      let ok = true;
      sels.forEach((s,k)=>{ const good = s.value===x.lines[k][1]; if(!good) ok = false; s.disabled = true; s.closest('tr').classList.add(good?'ok':'bad'); if(!good) s.parentElement.querySelector('.bk-sol').textContent = '→ ' + x.lines[k][1]; });
      done++; if(ok) right++;
      const st = bkTrainState(); st[x.id] = ok ? 1 : 0; lsSet('bk-train-state', st);
      const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(ok?'good':'warn');
      fb.innerHTML = (ok?'<b>Correct.</b> ':'<b>Not quite.</b> ') + esc(x.lines.filter(l=>l[0]==='D').map(l=>`Debit ${l[1]} ${l[2]}`).join(', ') + ' / ' + x.lines.filter(l=>l[0]==='C').map(l=>`Credit ${l[1]} ${l[2]}`).join(', '));
      card.querySelector('[data-a="check"]').style.display = 'none';
      card.querySelector('[data-a="next"]').style.display = '';
      score();
    };
    card.addEventListener('click', ev=>{
      const b = ev.target.closest('[data-a]'); if(!b) return;
      if(b.dataset.a==='check' && !checked) check();
      if(b.dataset.a==='next'){ i++; show(); }
      if(b.dataset.a==='again'){ bkTrainFilter = bkTrainFilter==='wrong' ? 'all' : bkTrainFilter; start(); }
      if(b.dataset.a==='wrong'){ bkTrainFilter = 'wrong'; start(); }
    });
    div.querySelector('.bk-filter').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; bkTrainFilter = c.dataset.f; start(); });
    div.querySelector('.bk-reset').addEventListener('click', start);
    div.__start = start;
    start();
  });
}

/* ---------- Tutorials TUT 1–11 (official solutions) ---------- */
function bkCell(c){ return esc(c).replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>'); }
function bkTable(cap, body){
  const rows = body.trim().split('\n').map(r=>r.split('|').map(c=>c.trim()));
  const head = rows.shift();
  const isNum = c => /^[−\-]?[\d.,]+ ?%?$|^—$/.test(c);
  return `<div class="bk-tw">${cap?`<div class="tab-cap">${esc(cap)}</div>`:''}<table class="bk-tt"><thead><tr>${head.map(h=>`<th>${bkCell(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr${/^(Total|Sum)/.test(r[0])?' class="tot"':''}>${r.map(c=>`<td${isNum(c)?' class="num"':''}>${bkCell(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function bkEntryHtml(body){
  const rows = body.trim().split('\n').map(r=>r.split('|').map(c=>c.trim()));
  return `<table class="bk-entry bk-entry-static"><tbody>${rows.map(r=>`<tr class="${r[0]==='D'?'deb':'cre'}"><td>${r[0]==='D'?'Debit':'Credit'}</td><td>${esc(r[1])}</td><td class="num">${esc(r[2]||'')} €</td></tr>`).join('')}</tbody></table>`;
}
function bkRich(src){
  const blocks = [];
  let s = String(src).replace(/\[\[(t|e):([^\n]*)\n([\s\S]*?)\]\]/g, (m, kind, cap, body)=>{ blocks.push(kind==='t' ? bkTable(cap.trim(), body) : bkEntryHtml(body)); return `\n\n\u0005${blocks.length-1}\u0006\n\n`; });
  // single line breaks become paragraphs, except between consecutive "- " bullet lines
  const lines = s.split('\n'); let out = '';
  lines.forEach((l,i)=>{ if(i){ const prev = lines[i-1]; out += (/^- /.test(prev) && /^- /.test(l)) || prev==='' || l==='' ? '\n' : '\n\n'; } out += l; });
  return richHtml(out)
    .replace(/<p>\s*\u0005(\d+)\u0006\s*<\/p>/g, (m,k)=>blocks[+k])
    .replace(/\u0005(\d+)\u0006/g, (m,k)=>blocks[+k])
    .replace(/<li>([^<]*?) :: /g, '<li><b>$1</b>: ');
}
// task text in normal weight, only the leading task label ("Review 2.", "(1.8)", "B c)", "Extra (…).") in bold
function tutQ(html){
  return html.replace(/^(\s*<p>)((?:(?:Review|Python)(?: [\d–]+)?\.|Extra \([^)]*\)\.?|\([\d.–]+\)|\d+\.(?= )|[A-Z] [a-z]\)|[a-z]\)(?: [ivx]+\))?|\d+[a-z]?\)))/, '$1<span class="tut-label">$2</span>');
}
let bkTutSel = null;
function bkTutOpen(n){ bkTutSel = n; navTo('bk-tut'); const pg = document.getElementById('page-bk-tut'); if(pg && pg.__show) pg.__show(n); }
function buildBKTut(){
  registerPage('bk-tut', (div)=>{
    const nTasks = BK_TUTS.reduce((n,tu)=>n+tu.tasks.length,0);
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Practice · official solutions</div><h2>Tutorials TUT 1–11</h2><p>All ${nTasks} tasks of the eleven tutorial sheets. Write your answer first, then reveal the official solution and rate yourself — the rating counts for the radar and the study plan. Where the official solution contains a mistake, it is flagged in orange.</p></div>
      <div class="page-body">
        <div class="chip-row bk-filter bk-tut-chips"></div>
        <div class="bk-tut-body"></div>
      </div>`;
    const chips = div.querySelector('.bk-tut-chips'), body = div.querySelector('.bk-tut-body');
    const pct = tu=>{ const st = bkTutState(); const v = tu.tasks.map(k=>st[tu.n+'-'+k.id]).filter(x=>x!=null); return v.length ? Math.round(v.reduce((a,b)=>a+b,0)/tu.tasks.length*100) : null; };
    const drawChips = ()=>{ chips.innerHTML = BK_TUTS.map(tu=>{ const p = pct(tu); return `<button class="chip${tu.n===bkTutSel?' active':''}" data-n="${tu.n}">TUT ${tu.n}${p!=null?` · ${p}%`:''}</button>`; }).join(''); };
    const rateRow = key=>{ const v = bkTutState()[key]; return `<div class="bk-rate"><span>How did you do?</span>${[[1,'Got it'],[.5,'Partly'],[0,'Not yet']].map(([val,l])=>`<button class="chip${v===val?' active':''}" data-rate="${val}">${l}</button>`).join('')}</div>`; };
    const gridHtml = (tu,k)=>{
      const g = k.grid;
      return `<div class="bk-grid-wrap"><table class="bk-grid"><thead><tr><th>Transaction</th>${g.cols.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${g.rows.map((r,i)=>`<tr data-i="${i}"><td>${esc(r[0])}<div class="bk-grid-exp"></div></td>${g.cols.map((c,j)=>`<td class="cb"><input type="checkbox" data-j="${j}" aria-label="${esc(c)}"></td>`).join('')}</tr>`).join('')}</tbody></table></div>
        <div class="ans-feedback"></div><div class="ans-actions"><button class="btn" data-a="grid-check">Check</button><button class="btn ghost" data-a="grid-reset">Reset</button></div>`;
    };
    const show = n=>{
      bkTutSel = n || bkTutSel || ls('bk-tut-sel', 1); lsSet('bk-tut-sel', bkTutSel);
      const tu = BK_TUTS.find(x=>x.n===bkTutSel) || BK_TUTS[0];
      const t = BK_TOPICS.find(x=>x.id===tu.topic);
      const drills = BK_TRAIN.filter(x=>x.src==='TUT '+tu.n).length;
      const answers = ls('bk-tut-ans', {});
      drawChips();
      body.innerHTML = `<div class="bk-tut-head"><h3>TUT ${tu.n} · ${esc(tu.title)}</h3><div class="chip-row"><button class="chip" onclick="navTo('${t.id}')">Chapter ${t.ch} · ${esc(t.title)}</button>${drills?`<button class="chip" onclick="bkTrainFilter='src:TUT ${tu.n}';navTo('bk-train');const pg=document.getElementById('page-bk-train');if(pg&&pg.__start)pg.__start();">${drills} booking drills from this sheet</button>`:''}</div></div>
        <div class="bk-tut-intro glass">${bkRich(tu.intro)}</div>
        ${tu.tasks.map(k=>{ const key = tu.n+'-'+k.id; return `<div class="drill-card glass bk-tut-task" data-key="${key}">
          <div class="bk-tut-q">${tutQ(bkRich(k.q))}</div>
          ${k.grid ? gridHtml(tu,k) : `<textarea class="bk-tut-ans" rows="3" placeholder="Your answer or booking entries (saved on this device)">${esc(answers[key]||'')}</textarea>
          <div class="ans-actions"><button class="btn" data-a="sol">Show official solution</button></div>
          <div class="bk-tut-sol" hidden>${bkRich(k.sol)}${k.warn?`<div class="bk-warn"><b>Note on the official solution:</b> ${esc(k.warn)}</div>`:''}${rateRow(key)}</div>`}
        </div>`; }).join('')}`;
    };
    body.addEventListener('input', ev=>{ const ta = ev.target.closest('.bk-tut-ans'); if(!ta) return; const a = ls('bk-tut-ans', {}); a[ta.closest('.bk-tut-task').dataset.key] = ta.value; lsSet('bk-tut-ans', a); });
    body.addEventListener('click', ev=>{
      const task = ev.target.closest('.bk-tut-task'); if(!task) return;
      const key = task.dataset.key;
      const b = ev.target.closest('[data-a],[data-rate]'); if(!b) return;
      if(b.dataset.a==='sol'){ const sol = task.querySelector('.bk-tut-sol'); sol.hidden = !sol.hidden; b.textContent = sol.hidden ? 'Show official solution' : 'Hide solution'; }
      if(b.dataset.rate!=null){ const st = bkTutState(); st[key] = +b.dataset.rate; lsSet('bk-tut-state', st); task.querySelectorAll('[data-rate]').forEach(c=>c.classList.toggle('active', c===b)); drawChips(); }
      if(b.dataset.a==='grid-check' || b.dataset.a==='grid-reset'){
        const [n, id] = key.split('-'); const k = BK_TUTS.find(x=>x.n===+n).tasks.find(x=>x.id===id);
        let ok = 0;
        task.querySelectorAll('tr[data-i]').forEach(tr=>{
          const r = k.grid.rows[+tr.dataset.i]; const exp = tr.querySelector('.bk-grid-exp');
          if(b.dataset.a==='grid-reset'){ tr.className = ''; tr.querySelectorAll('input').forEach(i=>{ i.checked = false; i.parentElement.className = 'cb'; }); exp.textContent = ''; return; }
          let rowOk = true;
          tr.querySelectorAll('input').forEach(i=>{ const want = r[1].includes(+i.dataset.j); const good = i.checked===want; if(!good) rowOk = false; i.parentElement.className = 'cb'+(want?' want':'')+(good?'':' miss'); });
          tr.className = rowOk ? 'ok' : 'bad'; if(rowOk) ok++;
          exp.textContent = (r[1].length ? r[1].map(j=>k.grid.cols[j]).join(', ') : 'nothing') + ' — ' + r[2];
        });
        const fb = task.querySelector('.ans-feedback');
        if(b.dataset.a==='grid-reset'){ fb.className = 'ans-feedback'; return; }
        fb.className = 'ans-feedback show '+(ok===k.grid.rows.length?'good':'warn'); fb.innerHTML = `<b>${ok}/${k.grid.rows.length} rows completely right.</b> Highlighted boxes are the official answer; the reason is under each transaction.`;
        const st = bkTutState(); st[key] = ok/k.grid.rows.length; lsSet('bk-tut-state', st); drawChips();
      }
    });
    chips.addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; show(+c.dataset.n); div.scrollIntoView ? window.scrollTo({top:0, behavior:'smooth'}) : 0; });
    div.__show = show;
    show(bkTutSel);
  });
}
