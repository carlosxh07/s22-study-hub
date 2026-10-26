/* ============================================================ FUNDAMENTALS OF CONSUMER BEHAVIOR (seventh subject) ============================================================ */
// Loaded after app_dt.js. Same exam format as Marketing (Krause and Henkel share the slot and the MC rules), so the pages mirror app_mk.js:
// home, one page per lecture and per assigned reading, Exam-Format Trainer (5 statements, partial points), Open Questions, Cheat Sheet.
const CB_NAV = [
  {sec:'Overview', items:[{id:'cb-home', label:'Consumer Behaviour Home & Exam Info', icon:'home'}]},
  {sec:'Practice', items:[
    {id:'cb-mc', label:'Exam-Format Trainer (5 statements)', icon:'quiz'},
    {id:'cb-open', label:'Open Questions (model answers)', icon:'logic'},
    {id:'cb-cases', label:'Case Recognizer (heuristics, biases, decision types)', icon:'quiz'},
    {id:'mkcb-mock', label:'Mock Exam 16 Dec (with Marketing)', icon:'timer'},
    {id:'mkcb-guest', label:'Guest Talks — notes for the exam', icon:'doc'},
    {id:'cb-cheat', label:'Cheat Sheet (A4, printable)', icon:'cheat'}
  ]}
];
const CB_POINTS = [0, 0.25, 0.5, 1, 1.5, 2.5]; // points for 0…5 correctly judged statements
function cbDaysLeft(){ return Math.max(0, Math.ceil((PLAN_EXAM_CB - new Date().setHours(0,0,0,0))/86400000)); }
function cbLabel(t){ return t.kind==='read' ? `Reading LS ${t.ch}` : `Lecture ${t.ch}`; }
function cbShort(t){ return t.kind==='read' ? `R${t.ch}` : `L${t.ch}`; }

/* ---------- sidebar / search / home ---------- */
const __buildSidebarNavDT = buildSidebarNav;
buildSidebarNav = function(subjId){
  if(subjId!=='cb') return __buildSidebarNavDT(subjId);
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  CB_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  [['lec','Lectures'],['read','Readings (exam-relevant)']].forEach(([kind, sec])=>{
    html += `<div class="nav-section-label">${sec}</div>`;
    CB_TOPICS.filter(t=>t.kind===kind).forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon(kind==='read'?'doc':'summary')}<span>${cbShort(t)}. ${esc(t.title)}</span></div>`; });
  });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};
const __buildSearchIndexDT = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexDT();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  CB_TOPICS.forEach(t=>{
    const where = `Consumer Behaviour · ${cbLabel(t)}`;
    add({type:'Topic', rank:0, title:t.title, text:t.source||'', where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:searchFlat(p), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:c.q, text:c.a, where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:q.q, text:q.exp||'', where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  CB_MC.forEach(m=>add({type:'Exam format', rank:2, title:m.q, text:m.s.map(x=>x[0]).join(' '), where:'Consumer Behaviour · Exam-Format Trainer', page:'cb-mc'}));
  CB_OPEN.forEach(o=>add({type:'Open question', rank:2, title:o.q, text:o.a, where:'Consumer Behaviour · Open Questions', page:'cb-open'}));
  CB_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:it, where:'Consumer Behaviour · Cheat Sheet', page:'cb-cheat'})));
  CB_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`Consumer Behaviour · ${sec.sec}`, page:it.id})));
  return idx;
};
const __buildHomeCardsDT = buildHomeCards;
buildHomeCards = function(){
  __buildHomeCardsDT();
  const wrap = document.getElementById('home-cards');
  const s = SUBJECTS.find(x=>x.id==='cb');
  const nQ = CB_TOPICS.reduce((n,t)=>n+t.quiz.length, 0);
  const nL = CB_TOPICS.filter(t=>t.kind==='lec').length, nR = CB_TOPICS.filter(t=>t.kind==='read').length;
  const html = `<div class="subj-card" onclick="selectSubject('cb',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon('mkt')}</div>
      <div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">CONSUMER BEHAVIOUR</span><h3>${s.label}</h3><p>${s.short}</p>
        <div class="stats"><span>${nL} of 8 lectures · ${nR} readings · ${nQ} quiz questions</span><span>${CB_MC.length} exam-format questions</span><span>${cbDaysLeft()} days to 16 Dec</span></div></div></div>`;
  const ph = [...wrap.querySelectorAll('.subj-card.soon')].find(c=>{ const tag = c.querySelector('.tag'); return tag && tag.textContent==='CONSUMER BEHAVIOUR'; });
  if(ph) ph.outerHTML = html; else wrap.insertAdjacentHTML('beforeend', html);
};

/* ---------- scores: lecture/reading quiz + exam-format trainer (flashcards optional, not counted) ---------- */
const __fcMasteryLectureDT = fcMasteryLecture;
fcMasteryLecture = function(subjId){
  if(subjId!=='cb') return __fcMasteryLectureDT(subjId);
  let gotit=0, partial=0, dontknow=0, total=0;
  CB_TOPICS.forEach(t=>{ Object.values(ls('fc-'+t.id, {})).forEach(v=>{ if(v==='gotit') gotit++; else if(v==='partial') partial++; else if(v==='dontknow') dontknow++; }); total += t.cards.length; });
  return { gotit, partial, dontknow: dontknow+(total-gotit-partial-dontknow), total, pct: total? Math.round(gotit/total*100) : 0 };
};
// latest result per exam-format question = points/2.5, keyed by question text so it survives reordering
function cbMcState(){ return ls('cb-mc-state', {}); }
function cbMcScore(filter){
  const st = cbMcState();
  const vals = CB_MC.filter(m=>!filter || filter(m)).map(m=>st[m.q]).filter(v=>v!=null);
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function cbQuizScore(t){ return knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); }
function cbQuizArea(area){
  const st = ls('cb-quiz-area', {}); const v = st[area];
  return v && v.n ? v.ok/v.n : null;
}
function cbAreaScore(a){
  const parts = [cbMcScore(m=>m.area===a.id), cbQuizArea(a.id)].filter(v=>v!=null);
  return parts.length ? parts.reduce((x,y)=>x+y,0)/parts.length : null;
}
function cbTopicScore(t){
  const parts = [cbQuizScore(t), cbMcScore(m=>m.lec===t.id)].filter(v=>v!=null);
  return parts.length ? parts.reduce((a,b)=>a+b,0)/parts.length : null;
}
const __radarAxesDT = radarAxes;
radarAxes = function(mode){
  if(mode==='cb') return CB_AREAS.map(a=>{ const t = CB_TOPICS.find(x=>x.id===a.lec); return {label:`${cbShort(t)} · ${a.label}`, page:a.lec, score:cbAreaScore(a)}; });
  return __radarAxesDT(mode);
};

/* ---------- study plan ---------- */
const __planDaysLeftDT = planDaysLeft;
planDaysLeft = function(subj){ if(subj==='cb') return Math.max(1, Math.ceil((PLAN_EXAM_CB - planStart())/86400000)); return __planDaysLeftDT(subj); };
const __planItemPoolDT = planItemPool;
planItemPool = function(){
  const items = __planItemPoolDT();
  CB_TOPICS.forEach(t=>{ const s = cbTopicScore(t); items.push({subj:'cb', label:`${cbShort(t)} · ${t.title}`, page:t.id, weight:s==null ? 1 : 1-s, size:t.quiz.length + CB_MC.filter(m=>m.lec===t.id).length + Math.round(t.summary.split(/\s+/).length/120)}); });
  const m = cbMcScore();
  items.push({subj:'cb', label:'Exam-Format Trainer — all questions (5 statements each)', page:'cb-mc', weight:m==null ? .9 : 1-m, size:CB_MC.length});
  items.push({subj:'cb', label:'Open Questions — answer on paper, compare', page:'cb-open', weight:.7, size:CB_OPEN.length});
  items.forEach(i=>{ i.large = false; i.prio = false; });
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size).slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  return items;
};
const __planScheduleDT = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='cb-mc'){ const h = planDaysLeft('cb'); return Array.from(new Set([Math.max(1,h-18), Math.max(1,h-7), Math.max(1,h-2)])); }
  if(item.page==='cb-open'){ const h = planDaysLeft('cb'); return Array.from(new Set([Math.max(1,h-10), Math.max(1,h-3)])); }
  return __planScheduleDT(item, idx);
};
const __buildStudyPlanDT = buildStudyPlan;
buildStudyPlan = function(){
  __buildStudyPlanDT();
  const build = lazyPages['plan'];
  if(build) lazyPages['plan'] = ()=>{ build(); cbPatchPlanPage(document.getElementById('page-plan')); };
};
function cbPatchPlanPage(div){
  if(div.__cbPatched) return; div.__cbPatched = true;
  const eb = div.querySelector('.page-header .eyebrow'); if(eb) eb.textContent = 'S2/2 · Math II, Statistics, Marketing, Consumer Behaviour, Decision Theory, Bookkeeping & FSA';
  const p = div.querySelector('.page-header p'); if(p) p.textContent = 'See where you are weak, then follow a day-by-day plan up to your exams: Math II and Statistics on 14 December (Quantitative Analytics II), Marketing and Consumer Behaviour on 16 December, Decision Theory & Investments on 18 December, Bookkeeping and Financial Statement Analysis on 21 December. Weak chapters and task types show up more often; mock exams, past exams and mixed drills sit near the end.';
  const tabs = div.querySelector('.radar-tabs');
  if(tabs){ const mk = tabs.querySelector('[data-subj="mk"]'); const b = '<button class="tabbtn" data-subj="cb">Consumer Behaviour</button>'; if(mk) mk.insertAdjacentHTML('afterend', b); else tabs.insertAdjacentHTML('beforeend', b); }
  const mkLab = div.querySelector('.plan-exam-val[data-subj="mk"]');
  const lab = `<label>Fundamentals of Consumer Behaviour — exam date <span class="plan-exam-val" data-subj="cb"></span></label>`;
  if(mkLab) mkLab.parentElement.insertAdjacentHTML('afterend', lab);
  renderPlanDays(div);
}
const __renderPlanDaysDT = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysDT(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val[data-subj="cb"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_CB.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('cb')}d`; });
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ if(el.textContent==='CB') el.textContent = 'CONSUMER BEHAVIOUR'; });
};
const __renderRadarDT = renderRadar;
renderRadar = function(div){
  __renderRadarDT(div);
  if(div.dataset.radarSubj==='cb'){ const reco = div.querySelector('.radar-reco'); if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes/, 'Finish the lecture and reading quizzes and the Exam-Format Trainer'); }
};

/* ---------- lecture and reading pages (quiz first, flashcards optional) ---------- */
function cbTrackQuiz(panel, t){
  panel.addEventListener('click', ev=>{
    const o = ev.target.closest('.quiz-option'); if(!o || o.classList.contains('disabled')) return;
    const title = panel.querySelector('.qtitle'); if(!title) return;
    const q = t.quiz.find(x=>x.q===title.textContent); if(!q || !q.area) return;
    const ok = o.querySelector('span:last-child').textContent===q.opts[q.correct];
    const st = ls('cb-quiz-area', {}); st[q.area] = st[q.area] || {ok:0, n:0}; st[q.area].n++; if(ok) st[q.area].ok++; lsSet('cb-quiz-area', st);
  }, true);
}
const __buildTopicPageDT = buildTopicPage;
buildTopicPage = function(t){
  if(!t.id.startsWith('cb-')) return __buildTopicPageDT(t);
  registerPage(t.id, (div)=>{
    const nMc = CB_MC.filter(m=>m.lec===t.id).length, nOpen = CB_OPEN.filter(o=>o.lec===t.id).length;
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon(t.kind==='read'?'doc':'summary')} Consumer Behaviour · ${cbLabel(t)} · ${esc(t.date)}</div><h2>${esc(t.title)}</h2>${t.source?`<p class="cb-source">${esc(t.source)}</p>`:''}<p>${esc(t.examWeight)}</p></div>
      <div class="page-body">
        <div class="chip-row"><span class="chip-label">Practise it:</span>${nMc?`<button class="chip" onclick="cbMcOpen('${t.id}')">${nMc} exam-format questions</button>`:''}${nOpen?`<button class="chip" onclick="navTo('cb-open')">${nOpen} open questions</button>`:''}</div>
        <div class="tabbar"><button class="tabbtn active" data-tab="sum">Summary</button>${nMc?`<button class="tabbtn" data-tab="ex">Exam format (${nMc})</button>`:''}<button class="tabbtn" data-tab="qz">Quick check</button><button class="tabbtn fc-side" data-tab="fc">Flashcards (optional)</button></div>
        <div class="tabpanel active" id="${t.id}-sum"></div><div class="tabpanel" id="${t.id}-ex"></div><div class="tabpanel" id="${t.id}-qz"></div><div class="tabpanel" id="${t.id}-fc"></div>
      </div>`;
    div.querySelectorAll('.tabbtn').forEach(btn=>{
      btn.onclick = ()=>{
        div.querySelectorAll('.tabbtn').forEach(b=>b.classList.remove('active'));
        div.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
        btn.classList.add('active');
        const panel = div.querySelector(`#${t.id}-${btn.dataset.tab}`); panel.classList.add('active');
        if(btn.dataset.tab==='fc' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderFlashcards(panel, t.cards, 'fc-'+t.id); }
        if(btn.dataset.tab==='ex' && !panel.dataset.loaded){ panel.dataset.loaded='1'; stmtRunEmbed(panel, CB_MC.filter(m=>m.lec===t.id), 'cb-mc-state', CB_POINTS); }
        if(btn.dataset.tab==='qz' && !panel.dataset.loaded){ panel.dataset.loaded='1'; cbTrackQuiz(panel, t); renderQuiz(panel, shuffledQuiz(t), 'quiz-'+t.id); }
      };
    });
    renderSummary(div.querySelector(`#${t.id}-sum`), t.title, t.summary, t.id);
  });
};

/* ---------- Consumer Behaviour home ---------- */
function buildCBHome(){
  registerPage('cb-home', (div)=>{
    const m = cbMcScore();
    const card = t=>{ const s = cbTopicScore(t); const n = CB_MC.filter(x=>x.lec===t.id).length; return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">${cbLabel(t).toUpperCase()} · ${esc(t.date)}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions · ${n} exam-format${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; };
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('home')} Fundamentals of Consumer Behavior</div><h2>Fundamentals of Consumer Behaviour</h2>
        <p>Prof. Dr. Franziska Krause, Marketing & Customer Insight · Fall Term 2026 · ${CB_TOPICS.filter(t=>t.kind==='lec').length} of 8 lectures so far, all ${CB_TOPICS.filter(t=>t.kind==='read').length} assigned readings. Read a lecture or reading, do its quiz, then train the real exam format: five statements per question, any of them can be true.</p></div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Wed 16 Dec 2026 · 13:30–16:00 · ${cbDaysLeft()} days</span></div>
          <div class="exam-grid">
            <div class="exam-col">
              <div class="exam-label">90 points in total · written exam 75</div>
              <ul class="exam-facts">
                <li><b>Part 1 — Multiple choice: 60 points.</b> 24 questions with 5 statements each, 2.5 points per question; 1, 2, 3, 4 or all 5 can be correct.</li>
                <li><b>Scoring per question:</b> 5/5 statements right → 2.5 · 4/5 → 1.5 · 3/5 → 1 · 2/5 → 0.5 · 1/5 → 0.25 · 0/5 → 0. No minus points.</li>
                <li><b>Part 2 — Open questions: 15 points.</b></li>
                <li><b>Relevant:</b> the readings and company presentations are included in the exam, and there will be questions on the guest talks (their slides might not be shared — take notes).</li>
                <li><b>Shared slot</b> with Basic Principles of Marketing · recap & Q&A on 8 Dec.</li>
              </ul>
            </div>
            <div class="exam-col">
              <div class="exam-label">Part 3 — 15 points outside the exam (no partial credit)</div>
              <ul class="exam-facts">
                <li><b>Experiment, 7.5 points — both parts needed:</b> part I on campus (Burg, Room Bangalore), one booked slot 21–23 Oct, about 1.5 h, student ID, come 5–10 min early. Part II online, 30 min, any time 2–15 Nov (link on Canvas on 1 Nov; laptop, quiet place, you will listen and talk). One sign-up counts for both courses.</li>
                <li><b>Guest lectures, 3 × 2.5 points:</b> attend in person in the Schloss Forum and scan the QR code shown at a random moment (student ID number ready) — 10 Nov Florian Knieß (Aybee), 17 Nov OC&C, 23 Nov Dr. Philip Bradonjic (Oracle).</li>
                <li><b>Literature:</b> most chapters from Michael R. Solomon, <i>Consumer Behavior: Buying, Having, and Being</i> (12th edition). Readings have to be prepared before each session.</li>
                <li><b>Admin questions:</b> TA Julia Schulze Boelling — always with the Marketing TA in CC. Experiment part II: Franziska Föller.</li>
              </ul>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('cb-1')">Start with lecture 1 →</button>
            <button class="btn ghost" onclick="navTo('cb-mc')">Exam-Format Trainer${m!=null?` · ${Math.round(m*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('cb-open')">Open Questions</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:8px;">Lectures</div>
        <div class="topic-grid">${CB_TOPICS.filter(t=>t.kind==='lec').map(card).join('')}</div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Readings — prepare before the session, exam-relevant</div>
        <div class="topic-grid">${CB_TOPICS.filter(t=>t.kind==='read').map(card).join('')}</div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('cb-mc')"><div class="ic">${icon('quiz')}</div><h4>Exam-Format Trainer</h4><p>${CB_MC.length} questions in Krause’s format: tick every true statement, get the exam’s partial points.</p></div>
          <div class="tool-tile" onclick="navTo('cb-open')"><div class="ic">${icon('logic')}</div><h4>Open Questions</h4><p>${CB_OPEN.length} practice questions for the 15-point part, with model answers.</p></div>
          <div class="tool-tile" onclick="navTo('cb-cheat')"><div class="ic">${icon('cheat')}</div><h4>Cheat Sheet</h4><p>Definitions, models and the key facts of every reading on one printable page.</p></div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Session overview</div>
        <ul class="exam-facts mk-sessions">
          ${CB_SESSIONS.map(s=>{ const go = s.topic || s.reading; return `<li${go?` onclick="navTo('${go}')" style="cursor:pointer"`:''}><b>${s.n}. ${esc(s.date)}</b> — ${esc(s.title)}${s.topic?' · <span class="mk-in">in the hub</span>':s.reading?' · <span class="mk-in">reading in the hub</span>':''}</li>`; }).join('')}
        </ul>
      </div>`;
  });
}
function buildCBCheat(){
  registerPage('cb-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>Consumer Behaviour Cheat Sheet</h2><p>Exam format, definitions, models and the key facts of every reading in short form. Your highlights are printed too.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="cb-cheat-body" class="cheat-print"></div></div>`;
    renderCheat(div.querySelector('#cb-cheat-body'), CB_CHEAT, '', 'cb-cheat');
  });
}

/* ============================================================ EXAM-FORMAT TRAINER ============================================================ */
let cbMcFilter = 'all';
function cbMcOpen(f){ cbMcFilter = f; navTo('cb-mc'); const pg = document.getElementById('page-cb-mc'); if(pg && pg.__start) pg.__start(); }
function buildCBMc(){
  registerPage('cb-mc', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('quiz')} Practice</div><h2>Exam-Format Trainer</h2><p>Exactly like the MC part: five statements per question, 1 to 5 of them are true. Tick every statement you think is true, leave the others empty, then submit. Points as in the exam (5/5 → 2.5 · 4/5 → 1.5 · 3/5 → 1 · 2/5 → 0.5 · 1/5 → 0.25). Self-written in the format from the admin slides — not Prof. Krause’s questions.</p></div>
      <div class="page-body">
        <div class="chip-row mk-filter"><button class="chip" data-f="all">All (${CB_MC.length})</button><button class="chip" data-f="wrong">Not yet full points</button>${CB_TOPICS.filter(t=>CB_MC.some(m=>m.lec===t.id)).map(t=>`<button class="chip" data-f="${t.id}">${cbShort(t)} ${esc(t.title)}</button>`).join('')}</div>
        <div class="bk-score-row"><span class="bk-live"></span><span class="bk-best"></span><button class="btn ghost bk-reset">Reset run</button></div>
        <div class="drill-card glass mk-card"></div>
      </div>`;
    const card = div.querySelector('.mk-card');
    let run = [], i = 0, pts = 0, done = 0, answered = false;
    const pool = ()=>{
      const st = cbMcState();
      if(cbMcFilter==='wrong') return CB_MC.filter(m=>st[m.q]!=null && st[m.q]<1);
      return CB_MC.filter(m=>cbMcFilter==='all' || m.lec===cbMcFilter);
    };
    const fmt = v=>String(v).replace(/\.0$/,'');
    const score = ()=>{
      div.querySelector('.bk-live').textContent = `This run: ${fmt(pts)} / ${fmt(done*2.5)} points${run.length?` · question ${Math.min(i+1, run.length)} of ${run.length}`:''}`;
      const all = cbMcScore(); const n = Object.keys(cbMcState()).length;
      div.querySelector('.bk-best').textContent = all!=null ? `Overall: ${Math.round(all*100)}% of the points on ${n} tried questions (latest attempt)` : 'No attempts yet';
    };
    const start = ()=>{
      div.querySelectorAll('.mk-filter .chip').forEach(c=>c.classList.toggle('active', c.dataset.f===cbMcFilter));
      run = shuffle(pool()).map(m=>({...m, s:shuffle(m.s.slice())}));
      i = 0; pts = 0; done = 0; show();
    };
    const show = ()=>{
      answered = false; score();
      if(!run.length){ card.innerHTML = `<p>${cbMcFilter==='wrong' ? 'Every tried question has full points — well done.' : 'No questions here.'}</p>`; return; }
      if(i>=run.length){
        const pct = Math.round(pts/(run.length*2.5)*100);
        card.innerHTML = `<h3 style="margin:0 0 6px">Run finished: ${fmt(pts)} / ${fmt(run.length*2.5)} points (${pct}%)</h3><p>${pct<100?'Repeat the questions without full points or start a new shuffled run.':'Full points on every question.'}</p><div class="ans-actions"><button class="btn" data-a="again">New shuffled run</button>${pct<100?'<button class="btn ghost" data-a="wrong">Repeat questions without full points</button>':''}</div>`;
        return;
      }
      const m = run[i]; const t = CB_TOPICS.find(x=>x.id===m.lec);
      card.innerHTML = `<div class="qtag">${cbLabel(t)} · ${esc(CB_AREAS.find(a=>a.id===m.area).label)} · self-written, exam format</div>
        <div class="qtitle mk-q">${esc(m.q)}</div>
        <div class="mk-stmts">${m.s.map((x,k)=>`<label class="mk-st" data-k="${k}"><input type="checkbox"><span class="letter">${String.fromCharCode(65+k)}</span><span class="mk-st-text">${esc(x[0])}<span class="mk-why"></span></span></label>`).join('')}</div>
        <div class="ans-feedback"></div>
        <div class="ans-actions"><button class="btn" data-a="submit">Submit</button><button class="btn ghost" data-a="next" style="display:none">Next →</button></div>`;
    };
    const submit = ()=>{
      if(answered) return; answered = true;
      const m = run[i]; let right = 0;
      card.querySelectorAll('.mk-st').forEach(el=>{
        const x = m.s[+el.dataset.k]; const ticked = el.querySelector('input').checked; const ok = ticked===x[1];
        if(ok) right++;
        el.classList.add(ok?'ok':'bad', x[1]?'is-true':'is-false');
        el.querySelector('input').disabled = true;
        el.querySelector('.mk-why').innerHTML = `<b>${x[1]?'True':'False'}.</b> ${esc(x[2])}`;
      });
      const p = CB_POINTS[right]; pts += p; done++;
      const st = cbMcState(); st[m.q] = p/2.5; lsSet('cb-mc-state', st);
      const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(right===5?'good':'warn');
      fb.innerHTML = `<b>${right}/5 statements judged correctly → ${fmt(p)} of 2.5 points.</b> ${m.s.filter(x=>x[1]).length} of the 5 statements were true.`;
      card.querySelector('[data-a="submit"]').style.display = 'none';
      card.querySelector('[data-a="next"]').style.display = '';
      score();
    };
    card.addEventListener('click', ev=>{
      const b = ev.target.closest('[data-a]'); if(!b) return;
      if(b.dataset.a==='submit') submit();
      if(b.dataset.a==='next'){ i++; show(); }
      if(b.dataset.a==='again'){ cbMcFilter = cbMcFilter==='wrong' ? 'all' : cbMcFilter; start(); }
      if(b.dataset.a==='wrong'){ cbMcFilter = 'wrong'; start(); }
    });
    div.querySelector('.mk-filter').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; cbMcFilter = c.dataset.f; start(); });
    div.querySelector('.bk-reset').addEventListener('click', start);
    div.__start = start;
    start();
  });
}

/* ============================================================ OPEN QUESTIONS ============================================================ */
function buildCBOpen(){
  registerPage('cb-open', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Open Questions</h2><p>For the 15-point open part. Answer on paper first, then reveal the model answer and rate yourself. Self-written practice questions — the model answers use only content from the lectures and readings.</p></div>
      <div class="page-body"><div class="bk-score-row"><span class="bk-live cb-open-live"></span><button class="btn ghost cb-open-reset">Reset ratings</button></div><div class="cb-open-list"></div></div>`;
    const list = div.querySelector('.cb-open-list');
    const render = ()=>{
      const st = ls('cb-open-state', {});
      const rated = CB_OPEN.filter(o=>st[o.q]).length, good = CB_OPEN.filter(o=>st[o.q]==='good').length;
      div.querySelector('.cb-open-live').textContent = `${good} of ${CB_OPEN.length} answered well · ${rated} rated`;
      list.innerHTML = CB_TOPICS.map(t=>{
        const qs = CB_OPEN.filter(o=>o.lec===t.id); if(!qs.length) return '';
        return `<div class="nav-section-label" style="padding-left:0">${cbLabel(t)} · ${esc(t.title)}</div>` + qs.map(o=>{ const k = CB_OPEN.indexOf(o); const r = st[o.q];
          return `<div class="drill-card glass mk-open" data-k="${k}"><div class="qtitle">${esc(o.q)}</div>
            <div class="ans-actions"><button class="btn ghost" data-o="show">Show model answer</button>${r?`<span class="mk-rated">Your rating: ${{good:'✓ got it', part:'~ partly', bad:'✗ missed'}[r]}</span>`:''}</div>
            <div class="mk-model" style="display:none"><p>${esc(o.a)}</p><div class="ans-actions"><button class="chip" data-r="good">✓ got it</button><button class="chip" data-r="part">~ partly</button><button class="chip" data-r="bad">✗ missed</button></div></div></div>`; }).join('');
      }).join('');
    };
    list.addEventListener('click', ev=>{
      const box = ev.target.closest('.mk-open'); if(!box) return;
      if(ev.target.closest('[data-o="show"]')){ box.querySelector('.mk-model').style.display = ''; return; }
      const r = ev.target.closest('[data-r]'); if(!r) return;
      const st = ls('cb-open-state', {}); st[CB_OPEN[+box.dataset.k].q] = r.dataset.r; lsSet('cb-open-state', st); render();
    });
    div.querySelector('.cb-open-reset').addEventListener('click', ()=>{ lsSet('cb-open-state', {}); render(); });
    render();
  });
}
