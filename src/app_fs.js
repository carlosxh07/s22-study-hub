/* ============================================================ FINANCIAL STATEMENT ANALYSIS (fourth subject) ============================================================ */
// Loaded after app_st.js. Wraps the shared overrides again (sidebar, search, home, radar, plan) and adds the FSA pages:
// home, 10 chapters, Case Trainer (all slide cases), Number Drills (fresh numbers, step-by-step), Cheat Sheet.
const FS_NAV = [
  {sec:'Overview', items:[{id:'fs-home', label:'FSA Home & Exam Info', icon:'home'}]},
  {sec:'Practice', items:[
    {id:'fs-cases', label:'Case Trainer (slide cases)', icon:'quiz'},
    {id:'fs-drill', label:'Number Drills (step-by-step)', icon:'logic'},
    {id:'fs-cheat', label:'Cheat Sheet (A4, printable)', icon:'cheat'}
  ]}
];
const FS_CASE_TOPIC = src => /Bad Luck|Slide 42/.test(src) ? 'fs-2' : /Mirecard/.test(src) ? 'fs-3' : /doors/.test(src) ? 'fs-5' : /Goodwill/.test(src) ? 'fs-10' : /pptx/.test(src) ? 'fs-9' : 'fs-4';
function fsDaysLeft(){ return Math.max(0, Math.ceil((PLAN_EXAM_FS - new Date().setHours(0,0,0,0))/86400000)); }
function fsMoney(x){ return Math.round(x).toLocaleString('en-US'); }

/* ---------- sidebar / search / home ---------- */
const __buildSidebarNavST = buildSidebarNav;
buildSidebarNav = function(subjId){
  if(subjId!=='fs') return __buildSidebarNavST(subjId);
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  FS_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  html += `<div class="nav-section-label">Chapters</div>`;
  FS_TOPICS.forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon('summary')}<span>${t.ch}. ${esc(t.title)}</span></div>`; });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};
const __buildSearchIndexST = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexST();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  FS_TOPICS.forEach(t=>{
    const where = `FSA · Chapter ${t.ch}`;
    add({type:'Topic', rank:0, title:t.title, text:'', where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:searchFlat(p), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:c.q, text:c.a, where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:q.q, text:q.exp||'', where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  FS_CASES.forEach(c=>add({type:'Case', rank:2, title:c.q, text:c.exp, where:`FSA · Case Trainer · ${c.src}`, page:'fs-cases'}));
  FS_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:it, where:'FSA · Cheat Sheet', page:'fs-cheat'})));
  FS_KINDS.forEach(k=>add({type:'Drill', rank:2, title:k.label, text:'number drill step-by-step', where:'FSA · Number Drills', page:'fs-drill', fsKind:k.id}));
  FS_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`FSA · ${sec.sec}`, page:it.id})));
  return idx;
};
const __searchOpenST = searchOpen;
searchOpen = function(e, words){
  if(e.fsKind){ fsDrillOpen(e.fsKind); return; }
  __searchOpenST(e, words);
};
const __buildHomeCardsST = buildHomeCards;
buildHomeCards = function(){
  __buildHomeCardsST();
  const wrap = document.getElementById('home-cards');
  // drop the "coming later" placeholder for FSA and put the real card right after Bookkeeping (same exam slot)
  wrap.querySelectorAll('.subj-card.soon').forEach(c=>{ const tag = c.querySelector('.tag'); if(tag && tag.textContent==='FSA') c.remove(); });
  const s = SUBJECTS.find(x=>x.id==='fs');
  const nQ = FS_TOPICS.reduce((n,t)=>n+t.quiz.length, 0);
  const html = `<div class="subj-card" onclick="selectSubject('fs',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon('acc')}</div>
      <div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">FSA</span><h3>${s.label}</h3><p>${s.short}</p>
        <div class="stats"><span>${FS_TOPICS.length} chapters · ${nQ} quiz questions</span><span>${FS_CASES.length} slide cases · ${FS_KINDS.length} drill types</span><span>${fsDaysLeft()} days to 21 Dec</span></div></div></div>`;
  const bk = [...wrap.querySelectorAll('.subj-card')].find(c=>(c.getAttribute('onclick')||'').includes("'bk'"));
  if(bk) bk.insertAdjacentHTML('afterend', html); else wrap.insertAdjacentHTML('beforeend', html);
};

/* ---------- scores: chapter quiz + number drills + slide cases (flashcards optional, not counted) ---------- */
const __fcMasteryLectureST = fcMasteryLecture;
fcMasteryLecture = function(subjId){
  if(subjId!=='fs') return __fcMasteryLectureST(subjId);
  let gotit=0, partial=0, dontknow=0, total=0;
  FS_TOPICS.forEach(t=>{ Object.values(ls('fc-'+t.id, {})).forEach(v=>{ if(v==='gotit') gotit++; else if(v==='partial') partial++; else if(v==='dontknow') dontknow++; }); total += t.cards.length; });
  return { gotit, partial, dontknow: dontknow+(total-gotit-partial-dontknow), total, pct: total? Math.round(gotit/total*100) : 0 };
};
function fsDrillStats(){ return ls('fs-drill-stats', {}); }
function fsDrillScore(topicId){
  const st = fsDrillStats(); let ok = 0, n = 0;
  FS_KINDS.filter(k=>!topicId || k.topic===topicId).forEach(k=>{ const v = st[k.id]; if(v){ ok += v.ok; n += v.n; } });
  return n ? ok/n : null;
}
// case results per case (latest attempt), keyed by case text so they survive reordering
function fsCaseState(){ return ls('fs-case-state', {}); }
function fsCaseScore(topicId){
  const st = fsCaseState();
  const vals = FS_CASES.filter(c=>!topicId || FS_CASE_TOPIC(c.src)===topicId).map(c=>st[c.q]).filter(v=>v!=null);
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function fsTopicScore(t){
  const parts = [];
  const q = knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); if(q!=null) parts.push(q);
  const d = fsDrillScore(t.id); if(d!=null) parts.push(d);
  const c = fsCaseScore(t.id); if(c!=null) parts.push(c);
  return parts.length ? parts.reduce((a,b)=>a+b,0)/parts.length : null;
}
const __radarAxesST = radarAxes;
radarAxes = function(mode){
  if(mode==='fs') return FS_TOPICS.map(t=>({label:`${t.ch}. ${t.title}`, page:t.id, score:fsTopicScore(t)}));
  return __radarAxesST(mode);
};

/* ---------- study plan ---------- */
const __planDaysLeftST = planDaysLeft;
planDaysLeft = function(subj){ if(subj==='fs') return Math.max(1, Math.ceil((PLAN_EXAM_FS - planStart())/86400000)); return __planDaysLeftST(subj); };
const __planItemPoolST = planItemPool;
planItemPool = function(){
  const items = __planItemPoolST();
  FS_TOPICS.forEach(t=>{ const s = fsTopicScore(t); items.push({subj:'fs', label:`Ch. ${t.ch} · ${t.title}`, page:t.id, weight:s==null ? 1 : 1-s, size:t.quiz.length + FS_CASES.filter(c=>FS_CASE_TOPIC(c.src)===t.id).length + 3*FS_KINDS.filter(k=>k.topic===t.id).length + Math.round(t.summary.split(/\s+/).length/120)}); });
  const c = fsCaseScore();
  items.push({subj:'fs', label:'Case Trainer — all slide cases', page:'fs-cases', weight:c==null ? .9 : 1-c, size:FS_CASES.length});
  const d = fsDrillScore();
  items.push({subj:'fs', label:'Number Drills — mixed (exam warm-up)', page:'fs-drill', weight:d==null ? .9 : 1-d, size:20});
  items.forEach(i=>{ i.large = false; i.prio = false; });
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size).slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  return items;
};
const __planScheduleST = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='fs-cases'){ const h = planDaysLeft('fs'); return Array.from(new Set([Math.max(1,h-18), Math.max(1,h-7), Math.max(1,h-2)])); }
  if(item.page==='fs-drill'){ const h = planDaysLeft('fs'); return Array.from(new Set([Math.max(1,h-14), Math.max(1,h-5), Math.max(1,h-1)])); }
  return __planScheduleST(item, idx);
};
const __buildStudyPlanST = buildStudyPlan;
buildStudyPlan = function(){
  __buildStudyPlanST();
  const build = lazyPages['plan'];
  if(build) lazyPages['plan'] = ()=>{ build(); fsPatchPlanPage(document.getElementById('page-plan')); };
};
function fsPatchPlanPage(div){
  if(div.__fsPatched) return; div.__fsPatched = true;
  const eb = div.querySelector('.page-header .eyebrow'); if(eb) eb.textContent = 'S2/2 · Math II, Statistics, Bookkeeping & FSA';
  const p = div.querySelector('.page-header p'); if(p) p.textContent = 'See where you are weak, then follow a day-by-day plan up to your exams: Math II and Statistics on 14 December (Quantitative Analytics II), Bookkeeping and Financial Statement Analysis on 21 December. Weak chapters show up more often; mock exams, case runs and mixed drills sit near the end.';
  const tabs = div.querySelector('.radar-tabs');
  if(tabs) tabs.insertAdjacentHTML('beforeend', '<button class="tabbtn" data-subj="fs">FSA</button>');
  const bkLab = div.querySelector('.plan-exam-val[data-subj="bk"]');
  if(bkLab) bkLab.parentElement.insertAdjacentHTML('afterend', `<label>Financial Statement Analysis — exam date <span class="plan-exam-val" data-subj="fs"></span></label>`);
  renderPlanDays(div);
}
const __renderPlanDaysST = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysST(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val[data-subj="fs"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_FS.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('fs')}d`; });
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ if(el.textContent==='FS') el.textContent = 'FSA'; });
};
const __renderRadarST = renderRadar;
renderRadar = function(div){
  __renderRadarST(div);
  if(div.dataset.radarSubj==='fs'){ const reco = div.querySelector('.radar-reco'); if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes/, 'Finish chapter quizzes, the Case Trainer and the Number Drills'); }
};

/* ---------- topic pages (quiz first, flashcards optional) ---------- */
const __buildTopicPageST = buildTopicPage;
buildTopicPage = function(t){
  if(!t.id.startsWith('fs-')) return __buildTopicPageST(t);
  registerPage(t.id, (div)=>{
    const kinds = FS_KINDS.filter(k=>k.topic===t.id);
    const nCases = FS_CASES.filter(c=>FS_CASE_TOPIC(c.src)===t.id).length;
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('summary')} FSA · Chapter ${t.ch}</div><h2>${esc(t.title)}</h2><p>${esc(t.examWeight)}</p></div>
      <div class="page-body">
        ${kinds.length||nCases?`<div class="chip-row"><span class="chip-label">Practise it:</span>${nCases?`<button class="chip" onclick="fsCasesOpen('${t.id}')">${nCases} slide case${nCases>1?'s':''}</button>`:''}${kinds.map(k=>`<button class="chip" onclick="fsDrillOpen('${k.id}')">${esc(k.label)}</button>`).join('')}</div>`:''}
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

/* ---------- FSA home ---------- */
function buildFSHome(){
  registerPage('fs-home', (div)=>{
    const c = fsCaseScore(), d = fsDrillScore();
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('home')} Financial Statement Analysis</div><h2>Financial Statement Analysis</h2>
        <p>Reinhard Langenhövel (certified auditor) · ${FS_TOPICS.length} chapters from the slides WS 26/27: German GAAP (HGB) stand-alone statements — principles, balance sheet, P&L, notes, cash flow statement, management report — plus consolidation and the key differences to IFRS. Read a chapter, do its quiz, then work through the slide cases.</p></div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Mon 21 Dec 2026 · 09:00–12:00 · ${fsDaysLeft()} days</span></div>
          <div class="exam-grid">
            <div class="exam-col">
              <div class="exam-label">Final exam · shared slot with Bookkeeping & Accounting</div>
              <ul class="exam-facts">
                <li><b>Format:</b> multiple-choice questions of different complexity · 90 minutes · max. 90 points.</li>
                <li><b>Course:</b> mandatory, 3 ECTS · 12 sessions plus 9 tutorials for repetition and exercises (David Weidenfeller).</li>
                <li><b>Not relevant:</b> deferred taxes, hedge accounting, leasing accounting in detail (slide "Measurement of liabilities").</li>
              </ul>
            </div>
            <div class="exam-col">
              <div class="exam-label">"Exam: presentation alone will not be sufficient!"</div>
              <ul class="exam-facts">
                <li><b>Primary literature:</b> Nothhelfer, <i>Financial Accounting — Introduction to German GAAP</i> (2nd ed. 2022) and PwC, <i>Similarities and differences: IFRS and German GAAP</i> (2018, in your folder).</li>
                <li><b>"Please read" pages (Nothhelfer):</b> p. 29–30 size and listed companies · 35 ff. principles · 49–50 acquisition/production costs · 80–85 inventories and receivables · 92–98 provisions and pensions · 101–103 deferrals and accruals · 119–125 notes · 131–133 management report. Also read §§ 253 and 255 HGB.</li>
                <li><b>Case answers:</b> the student slides contain no solutions. The answer keys in the Case Trainer are self-written from the course rules — compare them with the tutorial solutions.</li>
              </ul>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('fs-1')">Start with chapter 1 →</button>
            <button class="btn ghost" onclick="navTo('fs-cases')">Case Trainer${c!=null?` · ${Math.round(c*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('fs-drill')">Number Drills${d!=null?` · ${Math.round(d*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:8px;">Chapters</div>
        <div class="topic-grid">
          ${FS_TOPICS.map(t=>{ const s = fsTopicScore(t); const nc = FS_CASES.filter(x=>FS_CASE_TOPIC(x.src)===t.id).length; return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">CHAPTER ${t.ch}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions${nc?` · ${nc} case${nc>1?'s':''}`:''}${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('fs-cases')"><div class="ic">${icon('quiz')}</div><h4>Case Trainer</h4><p>All ${FS_CASES.length} cases from the slides (Bad Luck AG, Hugo Ross AG, Coffee and beans AG, Wirecard, goodwill, Big One AG …) as exam-style questions.</p></div>
          <div class="tool-tile" onclick="navTo('fs-drill')"><div class="ic">${icon('logic')}</div><h4>Number Drills</h4><p>${FS_KINDS.length} task types with fresh numbers: size class, production costs, goodwill, FX loan, onerous contracts, Bilanzgewinn …</p></div>
          <div class="tool-tile" onclick="navTo('fs-cheat')"><div class="ic">${icon('cheat')}</div><h4>Cheat Sheet</h4><p>All rules and thresholds on one printable page.</p></div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Company examples used on the slides</div>
        <ul class="exam-facts">
          <li><b>Volkswagen AG 2023</b> — balance sheet equation and net income → dividend proposal (ch. 3).</li>
          <li><b>Bayer AG, BMW AG, Deutsche Post AG 2023</b> — asset and equity sides, equity ratios, P&L formats, notes (ch. 3–6); BMW contingent liabilities (ch. 4).</li>
          <li><b>Wirecard Q3 2019</b> — what a write-off does to equity (ch. 4) · <b>Henkel 2023</b> — cash flow statement and free cash flow (ch. 7) · <b>Bayer Annual Report 2023</b> — combined management report (ch. 8).</li>
        </ul>
      </div>`;
  });
}
function buildFSCheat(){
  registerPage('fs-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>FSA Cheat Sheet</h2><p>Every rule, threshold and paragraph of the ten chapters in short form. Your highlights are printed too.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="fs-cheat-body" class="cheat-print"></div></div>`;
    renderCheat(div.querySelector('#fs-cheat-body'), FS_CHEAT, '', 'fs-cheat');
  });
}

/* ============================================================ CASE TRAINER ============================================================ */
let fsCaseFilter = 'all';
function fsCasesOpen(topicId){ fsCaseFilter = topicId; navTo('fs-cases'); const pg = document.getElementById('page-fs-cases'); if(pg && pg.__start) pg.__start(); }
function buildFSCases(){
  registerPage('fs-cases', (div)=>{
    const topicsWith = FS_TOPICS.filter(t=>FS_CASES.some(c=>FS_CASE_TOPIC(c.src)===t.id));
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('quiz')} Practice</div><h2>Case Trainer</h2><p>Every case from the slides, asked the way the multiple-choice exam asks. The case texts follow the slides; the answer keys are self-written because the student slides have no solutions. One try per case — the latest result counts for the radar and the study plan.</p></div>
      <div class="page-body">
        <div class="chip-row bk-filter fs-filter"><button class="chip" data-f="all">All (${FS_CASES.length})</button><button class="chip" data-f="wrong">My mistakes</button>${topicsWith.map(t=>`<button class="chip" data-f="${t.id}">Ch. ${t.ch} ${esc(t.title.split(/[—&,]/)[0].trim())}</button>`).join('')}</div>
        <div class="bk-score-row"><span class="bk-live"></span><span class="bk-best"></span><button class="btn ghost bk-reset">Reset run</button></div>
        <div class="drill-card glass fs-card"></div>
      </div>`;
    const card = div.querySelector('.fs-card');
    let run = [], i = 0, right = 0, done = 0, answered = false;
    const pool = ()=>{
      const st = fsCaseState();
      if(fsCaseFilter==='wrong') return FS_CASES.filter(c=>st[c.q]===0);
      return FS_CASES.filter(c=>fsCaseFilter==='all' || FS_CASE_TOPIC(c.src)===fsCaseFilter);
    };
    const score = ()=>{
      div.querySelector('.bk-live').textContent = `Score: ${right}/${done}${run.length?` · case ${Math.min(i+1, run.length)} of ${run.length}`:''}`;
      const all = fsCaseScore(); const n = Object.keys(fsCaseState()).length;
      div.querySelector('.bk-best').textContent = all!=null ? `Overall: ${Math.round(all*100)}% of ${n} tried cases correct (latest attempt)` : 'No attempts yet';
    };
    const start = ()=>{
      div.querySelectorAll('.fs-filter .chip').forEach(c=>c.classList.toggle('active', c.dataset.f===fsCaseFilter));
      run = shuffle(pool()).map(c=>{ const order = shuffle(c.opts.map((_,k)=>k)); return {...c, opts:order.map(k=>c.opts[k]), correct:order.indexOf(c.correct)}; });
      i = 0; right = 0; done = 0; show();
    };
    const show = ()=>{
      answered = false; score();
      if(!run.length){ card.innerHTML = `<p>${fsCaseFilter==='wrong' ? 'No open mistakes — well done.' : 'No cases here.'}</p>`; return; }
      if(i>=run.length){
        const pct = Math.round(right/run.length*100);
        card.innerHTML = `<h3 style="margin:0 0 6px">Run finished: ${right}/${run.length} (${pct}%)</h3><p>${right<run.length?'Repeat your mistakes or start a new shuffled run.':'Every case correct.'}</p><div class="ans-actions"><button class="btn" data-a="again">New shuffled run</button>${right<run.length?'<button class="btn ghost" data-a="wrong">Repeat my mistakes</button>':''}</div>`;
        return;
      }
      const c = run[i]; const t = FS_TOPICS.find(x=>x.id===FS_CASE_TOPIC(c.src));
      card.innerHTML = `<div class="qtag">${esc(c.src)} · Ch. ${t.ch} · case from the slides, answer key self-written</div>
        <div class="qtitle fs-case-q">${esc(c.q)}</div>
        <div class="quiz-options">${c.opts.map((o,k)=>`<div class="quiz-option" data-i="${k}"><span class="letter">${String.fromCharCode(65+k)}</span><span>${esc(o)}</span></div>`).join('')}</div>
        <div class="quiz-exp"></div>
        <div class="ans-actions"><button class="btn ghost" data-a="next" style="display:none">Next →</button></div>`;
    };
    const answer = k=>{
      if(answered) return; answered = true;
      const c = run[i]; const ok = k===c.correct;
      card.querySelectorAll('.quiz-option').forEach(el=>{ const oi = +el.dataset.i; el.classList.add('disabled'); if(oi===c.correct) el.classList.add('correct'); else if(oi===k) el.classList.add('wrong'); });
      done++; if(ok) right++;
      const st = fsCaseState(); st[c.q] = ok ? 1 : 0; lsSet('fs-case-state', st);
      const ex = card.querySelector('.quiz-exp'); ex.textContent = c.exp; ex.classList.add('show');
      card.querySelector('[data-a="next"]').style.display = '';
      score();
    };
    card.addEventListener('click', ev=>{
      const o = ev.target.closest('.quiz-option'); if(o){ answer(+o.dataset.i); return; }
      const b = ev.target.closest('[data-a]'); if(!b) return;
      if(b.dataset.a==='next'){ i++; show(); }
      if(b.dataset.a==='again'){ fsCaseFilter = fsCaseFilter==='wrong' ? 'all' : fsCaseFilter; start(); }
      if(b.dataset.a==='wrong'){ fsCaseFilter = 'wrong'; start(); }
    });
    div.querySelector('.fs-filter').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; fsCaseFilter = c.dataset.f; start(); });
    div.querySelector('.bk-reset').addEventListener('click', start);
    div.__start = start;
    start();
  });
}

/* ============================================================ NUMBER DRILLS ============================================================ */
// each generator returns {q, fields + ans + tol, or choice:[[value,label]] + ans, sol (text with "- " bullets, **bold**)} — never use the dollar sign
const FS_EVENTS = [
  ['A customer who already had payment problems in December files for insolvency on 10 January.', 'adjust', 'Value-clarifying: the distress existed at the closing date → write the receivable down in the old year.'],
  ['A warehouse burns down on 5 January; it was intact on 31 December.', 'none', 'Value-creating: the cause arose after the closing date → no adjustment; report as a subsequent event if material.'],
  ['A lawsuit pending at year end is lost in February; the company must pay more than provided for.', 'adjust', 'Value-clarifying: the obligation existed at the closing date → increase the provision in the old year.'],
  ['A lawsuit pending at year end is won in January; a provision had been built.', 'adjust', 'Value-clarifying (favourable): the judgment reveals there was no obligation at the closing date → release the provision in the old year.'],
  ['Exchange rates move sharply on 15 January after an unexpected central bank decision.', 'none', 'Value-creating: the market change happened after the closing date → year-end rates stay.'],
  ['An invoice for December services arrives on 20 January.', 'adjust', 'The service was received in the old year → expense and liability in the old year (accrual basis).'],
  ['A new competitor enters the market in March and sales prices fall.', 'none', 'Value-creating: the cause arose after the closing date → no adjustment.'],
  ['Goods in stock at year end could only be sold far below cost in January because they were already outdated in December.', 'adjust', 'Value-clarifying: the obsolescence existed at the closing date → write the inventory down (lower-of-cost-or-market).']
];
const FS_LIAB = [
  ['A supplier invoice of €12,000 for goods received, due in 30 days.', 'debt', 'Basis and amount are certain → debt (trade payable).'],
  ['A customer sues for €200 k; lawyers estimate a 65 % chance of losing.', 'prov', 'Probable (> 50 %) but uncertain → provision for uncertain liabilities.'],
  ['The company guarantees a subsidiary\'s loan; the subsidiary is healthy and pays on time.', 'cont', 'Contractual and quantifiable, but no probable burden → contingent liability (notes).'],
  ['Legal warranty claims expected from last year\'s sales, estimated from experience.', 'prov', 'Legal obligation, amount uncertain → provision (warranty).'],
  ['Management plans a large advertising campaign next year.', 'none', 'No obligation to a third party → nothing is recognised (§ 249 allows no provision).'],
  ['A lawsuit with a 20 % chance of losing €1 m.', 'cont', 'Possible but not probable (≤ 50 %) → contingent liability, disclosure only.'],
  ['A bank loan of €2 m repayable in 5 years.', 'debt', 'Certain obligation, certain amount → debt (bank debt).'],
  ['Corporate income tax for the year, assessment not yet received.', 'prov', 'Obligation certain, exact amount not yet → tax provision.'],
  ['Maintenance omitted in December, carried out in February.', 'prov', 'Internal obligation made up within 3 months → provision for omitted maintenance (§ 249).'],
  ['Maintenance omitted in December, carried out in July.', 'none', 'Not made up within 3 months → no provision allowed.']
];
const FS_CFITEMS = [
  ['Purchase of a new production machine', 'inv'], ['Dividend paid to shareholders', 'fin'], ['Cash received from customers', 'op'], ['Wages paid to employees', 'op'],
  ['Proceeds from selling an old building', 'inv'], ['New long-term bank loan received', 'fin'], ['Repayment of a bond', 'fin'], ['Payment to suppliers of raw materials', 'op'],
  ['Purchase of shares in another company (long-term)', 'inv'], ['Capital increase (new shares issued for cash)', 'fin'], ['Income taxes paid', 'op'], ['Purchase of software licences (intangible assets)', 'inv']
];
const FS_KINDS = [
  {id:'size', label:'Size class (§§ 267, 267a)', topic:'fs-1', gen(){
    const bs = stPick([0.3,0.4,2,5,7,9,12,20,24,30,40]), rev = stPick([0.5,0.8,4,10,14,18,30,45,60,80]), emp = stPick([6,8,20,40,45,60,120,200,240,300,500]);
    const listed = Math.random()<.15;
    const cls = (v, lim)=> v<lim[0] ? 0 : v<lim[1] ? 1 : v<lim[2] ? 2 : 3;
    const cs = [cls(bs,[0.45,7.5,25]), cls(rev,[0.9,15,50]), cls(emp,[10,50,250])];
    // 2 of 3: the class reached by at least two criteria = the second-highest value
    const k = listed ? 3 : cs.slice().sort((a,b)=>a-b)[1];
    const names = ['micro','small','medium','large'];
    return {q:`A GmbH reports in two consecutive years: balance sheet total €${bs} m, revenues €${rev} m, ${emp} employees on average.${listed?' It has bonds traded on a regulated market.':''} Size class?`,
      choice:names.map(n=>[n, n[0].toUpperCase()+n.slice(1)]), ans:names[k],
      sol:listed ? `Capital-market-oriented (§ 264d HGB) → always **large**, irrespective of size.` : `- Balance sheet €${bs} m → ${names[cs[0]]}\n- Revenues €${rev} m → ${names[cs[1]]}\n- Employees ${emp} → ${names[cs[2]]}\n- 2 of 3 criteria decide (the middle one): **${names[k]}**`};
  }},
  {id:'events', label:'Closing date: adjust or not?', topic:'fs-2', gen(){
    const [t, a, w] = stPick(FS_EVENTS);
    return {q:`Closing date 31 December; the statements are prepared in March. ${t} Does this change the figures of the old year?`, choice:[['adjust','Yes — adjust the old year (value-clarifying)'],['none','No — value-creating, no adjustment']], ans:a, sol:w};
  }},
  {id:'acq', label:'Acquisition costs (§ 255 I)', topic:'fs-3', gen(){
    const price = stRnd(20, 120)*1000, disc = stPick([0, 2, 3, 5]), trans = stRnd(5, 40)*100, inst = stRnd(10, 60)*100, interest = stRnd(5, 30)*100;
    const ac = price*(1-disc/100) + trans + inst;
    return {q:`A machine costs €${fsMoney(price)} net plus 19 % VAT (deductible). The supplier grants a ${disc} % discount on the price. Transport €${fsMoney(trans)}, installation €${fsMoney(inst)}. The purchase is financed by a loan with €${fsMoney(interest)} interest in the first year. Acquisition costs?`, fields:['acquisition costs €'], ans:[ac], tol:[1],
      sol:`- Net price €${fsMoney(price)}${disc?` − ${disc} % discount = €${fsMoney(price*(1-disc/100))}`:''}\n- + transport €${fsMoney(trans)} + installation €${fsMoney(inst)} (incidental costs)\n- VAT is deductible input tax → not included; loan interest → not included\n- = **€${fsMoney(ac)}**`};
  }},
  {id:'prod', label:'Production costs: minimum / maximum', topic:'fs-3', gen(){
    const dm = stRnd(20, 60), dl = stRnd(15, 50), sp = stPick([0, 2, 4, 6]), im = stRnd(3, 12), ip = stRnd(5, 15), dep = stRnd(3, 10), adm = stRnd(4, 12), soc = stRnd(1, 5), dist = stRnd(4, 15), res = stPick([0, 3, 5]);
    const min = dm+dl+sp+im+ip+dep, max = min+adm+soc;
    return {q:`Per unit (€): direct material ${dm}, direct labour ${dl}${sp?`, special direct costs of manufacturing ${sp}`:''}, indirect material ${im}, indirect manufacturing ${ip}, depreciation of production machines ${dep}, general administration ${adm}, voluntary social benefits ${soc}, distribution costs ${dist}${res?`, research ${res}`:''}. Minimum and maximum production costs per unit?`, fields:['minimum €','maximum €'], ans:[min, max], tol:[0, 0],
      sol:`- Mandatory: ${dm} + ${dl}${sp?` + ${sp}`:''} + ${im} + ${ip} + ${dep} = **${min}** (minimum)\n- Optional: administration ${adm} + voluntary social benefits ${soc}\n- Maximum = ${min} + ${adm} + ${soc} = **${max}**\n- Distribution ${dist}${res?` and research ${res}`:''} are prohibited`};
  }},
  {id:'reversal', label:'Impairment & reversal cap', topic:'fs-3', gen(){
    const cost = stRnd(10, 40)*10000, life = stPick([5, 8, 10]), k = stRnd(1, life-3), imp = stRnd(30, 60)/100, m = k + stRnd(1, 2);
    const plannedK = cost - cost/life*k, valueK = plannedK*(1-imp), restLife = life-k;
    const bookM = valueK - valueK/restLife*(m-k), plannedM = cost - cost/life*m;
    return {q:`A machine bought for €${fsMoney(cost)} (useful life ${life} years, straight-line) is impaired at the end of year ${k} by ${Math.round(imp*100)} % of its book value, because the decrease is permanent; afterwards it is depreciated over the remaining ${restLife} years. At the end of year ${m} the reason no longer exists and the fair value is clearly above the original plan. Book value after the reversal?`, fields:['book value €'], ans:[plannedM], tol:[2],
      sol:`- Planned book value end of year ${k}: ${fsMoney(cost)} − ${k} × ${fsMoney(cost/life)} = ${fsMoney(plannedK)}\n- After impairment: ${fsMoney(valueK)}; book value end of year ${m}: ${fsMoney(bookM)}\n- Reversal is mandatory, capped at the planned book value: ${fsMoney(cost)} − ${m} × ${fsMoney(cost/life)} = **€${fsMoney(plannedM)}** (write-up €${fsMoney(plannedM-bookM)})`};
  }},
  {id:'liab', label:'Debt, provision or contingent liability?', topic:'fs-4', gen(){
    const [t, a, w] = stPick(FS_LIAB);
    return {q:`${t} How is it treated at year end?`, choice:[['debt','Debt (liability)'],['prov','Provision'],['cont','Contingent liability (notes only)'],['none','Nothing at all']], ans:a, sol:w};
  }},
  {id:'onerous', label:'Onerous contract provision', topic:'fs-4', gen(){
    const tons = stRnd(5, 40), cp = stRnd(800, 1200)/100, mp = cp - stRnd(50, 250)/100;
    const loss = (cp-mp)*tons*1000;
    return {q:`A company must buy ${tons} t of coffee at a fixed ${cp.toFixed(2)} USD/kg next spring; nothing has been delivered or paid. At year end the market price is ${mp.toFixed(2)} USD/kg. Provision for onerous contracts (in USD)?`, fields:['provision USD'], ans:[loss], tol:[1],
      sol:`- Pending contract (no side has performed) with an expected loss → imparity principle\n- (${cp.toFixed(2)} − ${mp.toFixed(2)}) × ${fsMoney(tons*1000)} kg = **${fsMoney(loss)} USD** (converted into euros)`};
  }},
  {id:'fx', label:'Foreign-currency loan (higher-of-cost)', topic:'fs-4', gen(){
    const usd = stPick([2, 3, 4, 5, 6]), r0 = stPick([1.05, 1.10, 1.15, 1.20]), r1 = stPick([0.95, 1.00, 1.05, 1.25, 1.30, 1.35]), short = Math.random()<.2;
    const init = usd/r0, now = usd/r1, val = short ? now : Math.max(init, now);
    return {q:`A bank loan of USD ${usd} m was recognised at ${r0.toFixed(2)} USD per EUR. At this year end the rate is ${r1.toFixed(2)} USD per EUR; remaining maturity ${short?'8 months':'6 years'}. Balance sheet value in € m (2 decimals)?`, fields:['€ m'], ans:[val], tol:[0.006],
      sol:`- Initial: ${usd} / ${r0.toFixed(2)} = ${init.toFixed(2)} · at the closing rate: ${usd} / ${r1.toFixed(2)} = ${now.toFixed(2)}\n- ${short ? 'Maturity within one year → § 256a HGB: closing rate, unrealised gains may be realised' : 'Higher-of-cost-or-market: never below the initial amount'}\n- = **€${val.toFixed(2)} m**`};
  }},
  {id:'bond', label:'Bond discount / premium release', topic:'fs-4', gen(){
    const nom = stPick([100, 200, 500, 1000]), years = stPick([4, 5, 8, 10]), pct = stPick([96, 97, 98, 102, 103, 104]);
    const pay = nom*pct/100, diff = Math.abs(nom-pay), yearly = diff/years;
    return {q:`A company issues a ${years}-year bond, nominal €${nom} k, payout ${pct} %. ${pct<100?'It uses the option of § 250 III HGB.':''} Balance sheet value of the debt and yearly release of the ${pct<100?'deferred expense':'deferred income'} (€ k)?`, fields:['debt €k','yearly release €k'], ans:[nom, yearly], tol:[0, 0.01],
      sol:`- Debt at settlement amount: **€${nom} k**\n- ${pct<100?'Discount':'Premium'}: ${fsMoney(diff*1000)} € → ${pct<100?'deferred expense (asset side)':'deferred income (liability side)'}\n- Released pro rata over ${years} years: ${diff} / ${years} = **€${stF(yearly, 2)} k per year** (${pct<100?'interest expense':'reduces interest expense'})`};
  }},
  {id:'bilanz', label:'Retained earnings (Bilanzgewinn)', topic:'fs-4', gen(){
    const np = stRnd(5, 40)*100, cf = stRnd(-8, 8)*50, rel = stPick([0, 0, 100, 200]), tr = stRnd(0, 6)*100;
    const be = np + cf + rel - tr;
    return {q:`Net profit of the year €${fsMoney(np)} k; profit/loss carry forward €${cf>=0?'':'−'}${fsMoney(Math.abs(cf))} k; release from capital/revenue reserves €${rel} k; transfer to revenue reserves €${tr} k. Retained earnings (Bilanzgewinn)?`, fields:['€ k'], ans:[be], tol:[0],
      sol:`${fsMoney(np)} ${cf>=0?'+':'−'} ${fsMoney(Math.abs(cf))} + ${rel} − ${tr} = **€${fsMoney(be)} k**`};
  }},
  {id:'tcf', label:'Total-cost vs cost-of-sales result', topic:'fs-5', gen(){
    const mat = stRnd(5, 20)*10000, pers = stRnd(10, 40)*10000, prod = stPick([5000, 8000, 10000, 12000, 20000]), soldPct = stPick([0.6, 0.7, 0.75, 0.8, 0.9]);
    const sold = Math.round(prod*soldPct), unit = (mat+pers)/prod, price = Math.ceil(unit*stPick([1.2, 1.4, 1.5, 1.8]));
    const rev = sold*price, inv = (prod-sold)*unit, res = rev + inv - mat - pers;
    return {q:`Material €${fsMoney(mat)}, personnel €${fsMoney(pers)}. ${fsMoney(prod)} units produced, ${fsMoney(sold)} sold at €${price}. Increase in inventory (total-cost format) and result?`, fields:['inventory increase €','result €'], ans:[inv, res], tol:[1, 1],
      sol:`- Unit cost: ${fsMoney(mat+pers)} / ${fsMoney(prod)} = €${stF(unit, 2)}\n- Inventory increase: ${fsMoney(prod-sold)} × ${stF(unit, 2)} = **€${fsMoney(inv)}**\n- Total-cost: ${fsMoney(rev)} + ${fsMoney(inv)} − ${fsMoney(mat)} − ${fsMoney(pers)} = **€${fsMoney(res)}**\n- Cost-of-sales check: ${fsMoney(rev)} − ${fsMoney(sold)} × ${stF(unit, 2)} = €${fsMoney(rev - sold*unit)}`};
  }},
  {id:'cfclass', label:'Cash flow: which activity?', topic:'fs-7', gen(){
    const [t, a] = stPick(FS_CFITEMS);
    const why = {op:'Principal revenue-producing activity (and everything that is not investing or financing).', inv:'Acquisition or disposal of non-current assets and investments.', fin:'Changes the size and composition of equity and borrowings.'}[a];
    return {q:`Cash flow statement: "${t}". Which activity?`, choice:[['op','Operating'],['inv','Investing'],['fin','Financing']], ans:a, sol:why};
  }},
  {id:'indirect', label:'Indirect method: operating cash flow', topic:'fs-7', gen(){
    const ni = stRnd(20, 90)*10, dep = stRnd(5, 40)*10, gain = stPick([0, 20, 30, 50]), dRec = stRnd(-6, 6)*10, dInv = stRnd(-6, 6)*10, dPay = stRnd(-5, 5)*10;
    const ocf = ni + dep - gain - dRec - dInv + dPay;
    const sg = v=> v>=0 ? `increased by ${v}` : `decreased by ${-v}`;
    return {q:`Net income ${ni}; depreciation ${dep}; ${gain?`gain on sale of a machine ${gain}; `:''}trade receivables ${sg(dRec)}; inventories ${sg(dInv)}; trade payables ${sg(dPay)}. Operating cash flow (indirect method)?`, fields:['operating CF'], ans:[ocf], tol:[0],
      sol:`- ${ni} + depreciation ${dep}${gain?` − gain ${gain}`:''}\n- ${dRec>=0?'−':'+'} ${Math.abs(dRec)} receivables · ${dInv>=0?'−':'+'} ${Math.abs(dInv)} inventories · ${dPay>=0?'+':'−'} ${Math.abs(dPay)} payables\n- = **${ocf}**`};
  }},
  {id:'goodwill', label:'Goodwill on acquisition', topic:'fs-10', gen(){
    const eq = stRnd(8, 40), hr = stRnd(0, 6), pat = stRnd(0, 4), lst = stRnd(0, 3), brand = stRnd(0, 5), extra = stRnd(1, 12);
    const fv = eq + hr + pat + lst + brand, price = fv + extra;
    return {q:`Acquired company: equity at book value ${eq}. Valuation: hidden reserves in non-current assets ${hr}, a patent not yet capitalised ${pat}, customer list ${lst}, brand ${brand}. Purchase price incl. directly attributable costs ${price}. Goodwill?`, fields:['goodwill'], ans:[extra], tol:[0],
      sol:`- Net assets at fair value: ${eq} + ${hr} + ${pat} + ${lst} + ${brand} = ${fv} (the acquiree's own patent, list and brand are acquired assets for the buyer)\n- Goodwill = ${price} − ${fv} = **${extra}**\n- HGB: amortise over the useful life (10 years if not reliably estimable) · IFRS: impairment test only`};
  }}
];
let fsDrillKind = 'mixed';
function fsDrillOpen(kind){ fsDrillKind = kind; navTo('fs-drill'); const pg = document.getElementById('page-fs-drill'); if(pg && pg.__set) pg.__set(kind); }
function buildFSDrill(){
  registerPage('fs-drill', (div)=>{
    const groups = FS_TOPICS.map(t=>({t, ks:FS_KINDS.filter(k=>k.topic===t.id)})).filter(g=>g.ks.length);
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Number Drills</h2><p>Fresh numbers every time for the calculations and classifications behind the multiple-choice questions. Solve on paper, type the result, check — one try per task, then the full solution.</p></div>
      <div class="page-body">
        <div class="chip-row st-kinds fs-kinds"><button class="chip" data-k="mixed">Mixed (exam warm-up)</button>${groups.map(g=>`<span class="chip-label">Ch. ${g.t.ch}</span>${g.ks.map(k=>`<button class="chip" data-k="${k.id}">${esc(k.label)}</button>`).join('')}`).join('')}</div>
        <select class="st-kind-select fs-kind-select"><option value="mixed">Mixed (exam warm-up)</option>${groups.map(g=>`<optgroup label="Chapter ${g.t.ch}">${g.ks.map(k=>`<option value="${k.id}">${esc(k.label)}</option>`).join('')}</optgroup>`).join('')}</select>
        <div class="bk-score-row"><span class="bk-live fs-live"></span><span class="fs-saved"></span><button class="btn ghost fs-reset">Reset session</button></div>
        <div class="drill-card glass fs-dcard"></div>
      </div>`;
    const card = div.querySelector('.fs-dcard');
    let cur = null, curKind = null, done = false, sOk = 0, sN = 0;
    const label = ()=>{
      div.querySelector('.fs-live').textContent = `This session: ${sOk}/${sN}`;
      const st = fsDrillStats(); const k = curKind && st[curKind];
      div.querySelector('.fs-saved').textContent = k ? `${FS_KINDS.find(x=>x.id===curKind).label}: ${k.ok}/${k.n} correct overall` : '';
    };
    const next = ()=>{
      curKind = fsDrillKind==='mixed' ? stPick(FS_KINDS).id : fsDrillKind;
      const K = FS_KINDS.find(k=>k.id===curKind);
      cur = K.gen(); done = false;
      if(cur.choice && !['size','events'].includes(curKind)) cur.choice = shuffle(cur.choice);
      card.innerHTML = `<div class="qtag">${esc(K.label)}</div>
        <div class="drill-q st-q">${richHtml(cur.q)}</div>
        ${cur.choice ? `<div class="chip-row st-choices">${cur.choice.map(([v,l])=>`<button class="chip" data-choice="${esc(v)}">${esc(l)}</button>`).join('')}</div>`
          : `<div class="drill-fields">${cur.fields.map(f=>`<label>${esc(f)} <input type="text" inputmode="decimal"></label>`).join('')}</div><div class="ans-actions"><button class="btn" data-d="check">Check</button></div>`}
        <div class="ans-feedback"></div><div class="ans-actions"><button class="btn ghost" data-d="next">New task →</button></div>`;
      label();
      const first = card.querySelector('input'); if(first) first.focus();
    };
    const result = (ok, detail)=>{
      done = true; sN++; if(ok) sOk++;
      const st = fsDrillStats(); st[curKind] = st[curKind] || {ok:0, n:0}; st[curKind].n++; if(ok) st[curKind].ok++; lsSet('fs-drill-stats', st);
      const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(ok?'good':'warn');
      fb.innerHTML = (ok?'<b>Correct.</b>':'<b>Not quite.</b>') + (detail?` ${esc(detail)}`:'') + `<div class="st-sol">${richHtml(cur.sol)}</div>`;
      card.querySelectorAll('input,[data-choice],[data-d="check"]').forEach(el=>el.disabled = true);
      label();
    };
    // amounts like "12,345" or "1.234,5" → number (thousands separators tolerated)
    const num = v=>{ let t = String(v||'').trim().replace(/[€\s]/g,''); if(/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(t)) t = t.replace(/,/g,''); else if(/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(t)) t = t.replace(/\./g,'').replace(',', '.'); return stNum(t); };
    card.addEventListener('click', ev=>{
      const ch = ev.target.closest('[data-choice]');
      if(ch && !done){ const ok = ch.dataset.choice===cur.ans; ch.classList.add(ok?'st-ok':'st-bad'); if(!ok) card.querySelectorAll('[data-choice]').forEach(b=>{ if(b.dataset.choice===cur.ans) b.classList.add('st-ok'); }); result(ok); return; }
      const b = ev.target.closest('[data-d]'); if(!b) return;
      if(b.dataset.d==='next') next();
      if(b.dataset.d==='check' && !done){
        const ins = [...card.querySelectorAll('.drill-fields input')]; const vals = ins.map(i=>num(i.value));
        if(vals.some(v=>isNaN(v))){ const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show warn'; fb.textContent = 'Fill in every field with a number first.'; return; }
        const okEach = vals.map((v,i)=>Math.abs(v-cur.ans[i]) <= (cur.tol[i]||1e-9)+1e-9);
        ins.forEach((inp,i)=>inp.classList.add(okEach[i]?'st-ok':'st-bad'));
        result(okEach.every(Boolean), okEach.every(Boolean) ? '' : `Expected: ${cur.fields.map((f,i)=>`${f} = ${Number.isInteger(cur.ans[i])?fsMoney(cur.ans[i]):stF(cur.ans[i], 2)}`).join(', ')}.`);
      }
    });
    card.addEventListener('keydown', ev=>{ if(ev.key==='Enter'){ const c = card.querySelector('[data-d="check"]'); if(c && !done) c.click(); else if(done) next(); } });
    const set = (k)=>{ fsDrillKind = k; div.querySelectorAll('.fs-kinds .chip').forEach(c=>c.classList.toggle('active', c.dataset.k===k)); div.querySelector('.fs-kind-select').value = k; next(); };
    div.querySelector('.fs-kind-select').addEventListener('change', ev=>set(ev.target.value));
    div.querySelector('.fs-kinds').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(c) set(c.dataset.k); });
    div.querySelector('.fs-reset').addEventListener('click', ()=>{ sOk = 0; sN = 0; next(); });
    div.__set = set;
    set(fsDrillKind);
  });
}
