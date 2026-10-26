/* ============================================================ BASIC PRINCIPLES OF MARKETING (fifth subject) ============================================================ */
// Loaded after app_fs.js. Wraps the shared overrides again (sidebar, search, home, radar, plan) and adds the Marketing pages:
// home, one page per lecture, Exam-Format Trainer (Henkel MC: 5 statements, partial points), Open Questions, Cheat Sheet.
const MK_NAV = [
  {sec:'Overview', items:[{id:'mk-home', label:'Marketing Home & Exam Info', icon:'home'}]},
  {sec:'Practice', items:[
    {id:'mk-mc', label:'Exam-Format Trainer (5 statements)', icon:'quiz'},
    {id:'mk-open', label:'Open Questions (model answers)', icon:'logic'},
    {id:'mkcb-mock', label:'Mock Exam 16 Dec (with Consumer Behaviour)', icon:'timer'},
    {id:'mkcb-guest', label:'Guest Talks — notes for the exam', icon:'doc'},
    {id:'mk-cheat', label:'Cheat Sheet (A4, printable)', icon:'cheat'}
  ]}
];
const MK_POINTS = [0, 0.25, 0.5, 1, 1.5, 2.5]; // points for 0…5 correctly judged statements
function mkDaysLeft(){ return Math.max(0, Math.ceil((PLAN_EXAM_MK - new Date().setHours(0,0,0,0))/86400000)); }

/* ---------- sidebar / search / home ---------- */
const __buildSidebarNavFS = buildSidebarNav;
buildSidebarNav = function(subjId){
  if(subjId!=='mk') return __buildSidebarNavFS(subjId);
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  MK_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  html += `<div class="nav-section-label">Lectures</div>`;
  MK_TOPICS.forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon('summary')}<span>${t.ch}. ${esc(t.title)}</span></div>`; });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};
const __buildSearchIndexFS = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexFS();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  MK_TOPICS.forEach(t=>{
    const where = `Marketing · Lecture ${t.ch}`;
    add({type:'Topic', rank:0, title:t.title, text:'', where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:searchFlat(p), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:c.q, text:c.a, where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:q.q, text:q.exp||'', where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  MK_MC.forEach(m=>add({type:'Exam format', rank:2, title:m.q, text:m.s.map(x=>x[0]).join(' '), where:'Marketing · Exam-Format Trainer', page:'mk-mc'}));
  MK_OPEN.forEach(o=>add({type:'Open question', rank:2, title:o.q, text:o.a, where:'Marketing · Open Questions', page:'mk-open'}));
  MK_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:it, where:'Marketing · Cheat Sheet', page:'mk-cheat'})));
  MK_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`Marketing · ${sec.sec}`, page:it.id})));
  return idx;
};
const __buildHomeCardsFS = buildHomeCards;
buildHomeCards = function(){
  __buildHomeCardsFS();
  const wrap = document.getElementById('home-cards');
  const s = SUBJECTS.find(x=>x.id==='mk');
  const nQ = MK_TOPICS.reduce((n,t)=>n+t.quiz.length, 0);
  const html = `<div class="subj-card" onclick="selectSubject('mk',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon('mkt')}</div>
      <div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">MARKETING</span><h3>${s.label}</h3><p>${s.short}</p>
        <div class="stats"><span>${MK_TOPICS.length} of 8 lectures · ${nQ} quiz questions</span><span>${MK_MC.length} exam-format questions</span><span>${mkDaysLeft()} days to 16 Dec</span></div></div></div>`;
  // the real card replaces the "coming later" placeholder (same position: between Statistics/Math and Consumer Behaviour)
  const ph = [...wrap.querySelectorAll('.subj-card.soon')].find(c=>{ const tag = c.querySelector('.tag'); return tag && tag.textContent==='MARKETING'; });
  if(ph) ph.outerHTML = html; else wrap.insertAdjacentHTML('beforeend', html);
};

/* ---------- scores: lecture quiz + exam-format trainer (flashcards optional, not counted) ---------- */
const __fcMasteryLectureFS = fcMasteryLecture;
fcMasteryLecture = function(subjId){
  if(subjId!=='mk') return __fcMasteryLectureFS(subjId);
  let gotit=0, partial=0, dontknow=0, total=0;
  MK_TOPICS.forEach(t=>{ Object.values(ls('fc-'+t.id, {})).forEach(v=>{ if(v==='gotit') gotit++; else if(v==='partial') partial++; else if(v==='dontknow') dontknow++; }); total += t.cards.length; });
  return { gotit, partial, dontknow: dontknow+(total-gotit-partial-dontknow), total, pct: total? Math.round(gotit/total*100) : 0 };
};
// latest result per exam-format question = points/2.5, keyed by question text so it survives reordering
function mkMcState(){ return ls('mk-mc-state', {}); }
function mkMcScore(filter){
  const st = mkMcState();
  const vals = MK_MC.filter(m=>!filter || filter(m)).map(m=>st[m.q]).filter(v=>v!=null);
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function mkQuizScore(t){ return knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); }
// lecture quiz results per question (the engine only keeps the best total) → per area: own store written by the quiz wrapper below
function mkQuizArea(area){
  const st = ls('mk-quiz-area', {}); const v = st[area];
  return v && v.n ? v.ok/v.n : null;
}
function mkAreaScore(a){
  const parts = [mkMcScore(m=>m.area===a.id), mkQuizArea(a.id)].filter(v=>v!=null);
  return parts.length ? parts.reduce((x,y)=>x+y,0)/parts.length : null;
}
function mkTopicScore(t){
  const parts = [mkQuizScore(t), mkMcScore(m=>m.lec===t.id)].filter(v=>v!=null);
  return parts.length ? parts.reduce((a,b)=>a+b,0)/parts.length : null;
}
const __radarAxesFS = radarAxes;
radarAxes = function(mode){
  if(mode==='mk') return MK_AREAS.map(a=>{ const t = MK_TOPICS.find(x=>x.id===a.lec); return {label:`L${t.ch} · ${a.label}`, page:a.lec, score:mkAreaScore(a)}; });
  return __radarAxesFS(mode);
};

/* ---------- study plan ---------- */
const __planDaysLeftFS = planDaysLeft;
planDaysLeft = function(subj){ if(subj==='mk') return Math.max(1, Math.ceil((PLAN_EXAM_MK - planStart())/86400000)); return __planDaysLeftFS(subj); };
const __planItemPoolFS = planItemPool;
planItemPool = function(){
  const items = __planItemPoolFS();
  MK_TOPICS.forEach(t=>{ const s = mkTopicScore(t); items.push({subj:'mk', label:`L${t.ch} · ${t.title}`, page:t.id, weight:s==null ? 1 : 1-s, size:t.quiz.length + MK_MC.filter(m=>m.lec===t.id).length + Math.round(t.summary.split(/\s+/).length/120)}); });
  const m = mkMcScore();
  items.push({subj:'mk', label:'Exam-Format Trainer — all questions (5 statements each)', page:'mk-mc', weight:m==null ? .9 : 1-m, size:MK_MC.length});
  items.push({subj:'mk', label:'Open Questions — answer on paper, compare', page:'mk-open', weight:.7, size:MK_OPEN.length});
  items.forEach(i=>{ i.large = false; i.prio = false; });
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size).slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  return items;
};
const __planScheduleFS = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='mk-mc'){ const h = planDaysLeft('mk'); return Array.from(new Set([Math.max(1,h-18), Math.max(1,h-7), Math.max(1,h-2)])); }
  if(item.page==='mk-open'){ const h = planDaysLeft('mk'); return Array.from(new Set([Math.max(1,h-10), Math.max(1,h-3)])); }
  return __planScheduleFS(item, idx);
};
const __buildStudyPlanFS = buildStudyPlan;
buildStudyPlan = function(){
  __buildStudyPlanFS();
  const build = lazyPages['plan'];
  if(build) lazyPages['plan'] = ()=>{ build(); mkPatchPlanPage(document.getElementById('page-plan')); };
};
function mkPatchPlanPage(div){
  if(div.__mkPatched) return; div.__mkPatched = true;
  const eb = div.querySelector('.page-header .eyebrow'); if(eb) eb.textContent = 'S2/2 · Math II, Statistics, Marketing, Bookkeeping & FSA';
  const p = div.querySelector('.page-header p'); if(p) p.textContent = 'See where you are weak, then follow a day-by-day plan up to your exams: Math II and Statistics on 14 December (Quantitative Analytics II), Marketing on 16 December, Bookkeeping and Financial Statement Analysis on 21 December. Weak chapters show up more often; mock exams, case runs and mixed drills sit near the end.';
  const tabs = div.querySelector('.radar-tabs');
  if(tabs){ const bk = tabs.querySelector('[data-subj="bk"]'); const b = '<button class="tabbtn" data-subj="mk">Marketing</button>'; if(bk) bk.insertAdjacentHTML('beforebegin', b); else tabs.insertAdjacentHTML('beforeend', b); }
  const bkLab = div.querySelector('.plan-exam-val[data-subj="bk"]');
  const lab = `<label>Basic Principles of Marketing — exam date <span class="plan-exam-val" data-subj="mk"></span></label>`;
  if(bkLab) bkLab.parentElement.insertAdjacentHTML('beforebegin', lab);
  renderPlanDays(div);
}
const __renderPlanDaysFS = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysFS(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val[data-subj="mk"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_MK.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('mk')}d`; });
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ if(el.textContent==='MK') el.textContent = 'MARKETING'; });
};
const __renderRadarFS = renderRadar;
renderRadar = function(div){
  __renderRadarFS(div);
  if(div.dataset.radarSubj==='mk'){ const reco = div.querySelector('.radar-reco'); if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes/, 'Finish the lecture quizzes and the Exam-Format Trainer'); }
};

/* ---------- lecture pages (quiz first, flashcards optional) ---------- */
// per-area quiz tracking: the engine's renderQuiz only reports the best total, so count each answer by its area here
function mkTrackQuiz(panel, t){
  panel.addEventListener('click', ev=>{
    const o = ev.target.closest('.quiz-option'); if(!o || o.classList.contains('disabled')) return;
    const title = panel.querySelector('.qtitle'); if(!title) return;
    const q = t.quiz.find(x=>x.q===title.textContent); if(!q || !q.area) return;
    const ok = o.querySelector('span:last-child').textContent===q.opts[q.correct];
    const st = ls('mk-quiz-area', {}); st[q.area] = st[q.area] || {ok:0, n:0}; st[q.area].n++; if(ok) st[q.area].ok++; lsSet('mk-quiz-area', st);
  }, true);
}
const __buildTopicPageFS = buildTopicPage;
buildTopicPage = function(t){
  if(!t.id.startsWith('mk-')) return __buildTopicPageFS(t);
  registerPage(t.id, (div)=>{
    const nMc = MK_MC.filter(m=>m.lec===t.id).length, nOpen = MK_OPEN.filter(o=>o.lec===t.id).length;
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('summary')} Marketing · Lecture ${t.ch} · ${esc(t.date)}</div><h2>${esc(t.title)}</h2><p>${esc(t.examWeight)}</p></div>
      <div class="page-body">
        <div class="chip-row"><span class="chip-label">Practise it:</span>${nMc?`<button class="chip" onclick="mkMcOpen('${t.id}')">${nMc} exam-format questions</button>`:''}${nOpen?`<button class="chip" onclick="navTo('mk-open')">${nOpen} open questions</button>`:''}</div>
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
        if(btn.dataset.tab==='ex' && !panel.dataset.loaded){ panel.dataset.loaded='1'; stmtRunEmbed(panel, MK_MC.filter(m=>m.lec===t.id), 'mk-mc-state', MK_POINTS); }
        if(btn.dataset.tab==='qz' && !panel.dataset.loaded){ panel.dataset.loaded='1'; mkTrackQuiz(panel, t); renderQuiz(panel, shuffledQuiz(t), 'quiz-'+t.id); }
      };
    });
    renderSummary(div.querySelector(`#${t.id}-sum`), t.title, t.summary, t.id);
  });
};

/* ---------- Marketing home ---------- */
function buildMKHome(){
  registerPage('mk-home', (div)=>{
    const m = mkMcScore();
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('home')} Basic Principles of Marketing</div><h2>Basic Principles of Marketing</h2>
        <p>Prof. Dr. Sven Henkel, Chair of Customer Behaviour & Sales · Fall Term 2026 · ${MK_TOPICS.length} of 8 lectures so far. Read a lecture, do its quiz, then train the real exam format: five statements per question, any of them can be true.</p></div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Wed 16 Dec 2026 · 13:30–16:00 · ${mkDaysLeft()} days</span></div>
          <div class="exam-grid">
            <div class="exam-col">
              <div class="exam-label">90 points in total · written exam 75</div>
              <ul class="exam-facts">
                <li><b>Part 1 — Multiple choice: 60 points.</b> Each question has 5 statements and is worth 2.5 points; 1, 2, 3, 4 or all 5 can be correct.</li>
                <li><b>Scoring per question:</b> 5/5 statements right → 2.5 · 4/5 → 1.5 · 3/5 → 1 · 2/5 → 0.5 · 1/5 → 0.25 · 0/5 → 0. No minus points.</li>
                <li><b>Part 2 — Open questions: 15 points.</b></li>
                <li><b>Relevant:</b> readings and company presentations are included in the exam, and there will be questions on the guest talks (their slides might not be shared — take notes).</li>
                <li><b>Shared slot</b> with Fundamentals of Consumer Behaviour · recap & Q&A on 7 Dec.</li>
              </ul>
            </div>
            <div class="exam-col">
              <div class="exam-label">Part 3 — 15 points outside the exam (no partial credit)</div>
              <ul class="exam-facts">
                <li><b>Experiment, 7.5 points — both parts needed:</b> part I on campus (Burg, Room Bangalore), one time slot 21–23 Oct, about 1.5–2 h, <b>Doodle sign-up deadline 20 Oct, 18:00</b>, bring your student ID, come 5–10 min early. Part II online, 30 min, any time 2–15 Nov (link on Canvas on 1 Nov; laptop, quiet place, headphones). One sign-up counts for both Henkel courses.</li>
                <li><b>Guest lectures, 3 × 2.5 points:</b> attend in person and scan the QR code shown at a random moment (student ID number ready) — 20 Nov Daniel Hagemeier (group.one), 30 Nov Simon Buehler (DHL), 7 Dec Carl Kuhn (Jung von Matt SPORTS), each 15:30–17:00.</li>
                <li><b>Literature:</b> Kotler, Keller & Chernev, <i>Marketing Management</i>, 16th global edition (required). Further: Tomczak, Kuss & Reinecke, <i>Strategic Marketing</i>; Homburg, Kuester & Krohmer, <i>Marketing Management</i>.</li>
                <li><b>Old bonus points</b> from previous semesters no longer count. Admin questions: both TAs in CC.</li>
              </ul>
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('mk-1')">Start with lecture 1 →</button>
            <button class="btn ghost" onclick="navTo('mk-mc')">Exam-Format Trainer${m!=null?` · ${Math.round(m*100)}%`:''}</button>
            <button class="btn ghost" onclick="navTo('mk-open')">Open Questions</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:8px;">Lectures</div>
        <div class="topic-grid">
          ${MK_TOPICS.map(t=>{ const s = mkTopicScore(t); const n = MK_MC.filter(x=>x.lec===t.id).length; return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">LECTURE ${t.ch} · ${esc(t.date)}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions · ${n} exam-format${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('mk-mc')"><div class="ic">${icon('quiz')}</div><h4>Exam-Format Trainer</h4><p>${MK_MC.length} questions in Henkel’s format: tick every true statement, get the exam’s partial points.</p></div>
          <div class="tool-tile" onclick="navTo('mk-open')"><div class="ic">${icon('logic')}</div><h4>Open Questions</h4><p>${MK_OPEN.length} practice questions for the 15-point part, with model answers.</p></div>
          <div class="tool-tile" onclick="navTo('mk-cheat')"><div class="ic">${icon('cheat')}</div><h4>Cheat Sheet</h4><p>Definitions, lists and numbers on one printable page.</p></div>
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Session overview</div>
        <ul class="exam-facts mk-sessions">
          ${MK_SESSIONS.map(s=>`<li${s.topic?` onclick="navTo('${s.topic}')" style="cursor:pointer"`:''}><b>${s.n}. ${esc(s.date)}</b> — ${esc(s.title)}${s.topic?' · <span class="mk-in">in the hub</span>':''}</li>`).join('')}
        </ul>
      </div>`;
  });
}
function buildMKCheat(){
  registerPage('mk-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>Marketing Cheat Sheet</h2><p>Exam format, definitions, lists and numbers of every lecture in short form. Your highlights are printed too.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="mk-cheat-body" class="cheat-print"></div></div>`;
    renderCheat(div.querySelector('#mk-cheat-body'), MK_CHEAT, '', 'mk-cheat');
  });
}

/* ============================================================ EXAM-FORMAT TRAINER ============================================================ */
let mkMcFilter = 'all';
function mkMcOpen(f){ mkMcFilter = f; navTo('mk-mc'); const pg = document.getElementById('page-mk-mc'); if(pg && pg.__start) pg.__start(); }
function buildMKMc(){
  registerPage('mk-mc', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('quiz')} Practice</div><h2>Exam-Format Trainer</h2><p>Exactly like the MC part: five statements per question, 1 to 5 of them are true. Tick every statement you think is true, leave the others empty, then submit. Points as in the exam (5/5 → 2.5 · 4/5 → 1.5 · 3/5 → 1 · 2/5 → 0.5 · 1/5 → 0.25). Self-written in the format from the admin slides — not Prof. Henkel’s questions.</p></div>
      <div class="page-body">
        <div class="chip-row mk-filter"><button class="chip" data-f="all">All (${MK_MC.length})</button><button class="chip" data-f="wrong">Not yet full points</button>${MK_TOPICS.filter(t=>MK_MC.some(m=>m.lec===t.id)).map(t=>`<button class="chip" data-f="${t.id}">L${t.ch} ${esc(t.title)}</button>`).join('')}</div>
        <div class="bk-score-row"><span class="bk-live"></span><span class="bk-best"></span><button class="btn ghost bk-reset">Reset run</button></div>
        <div class="drill-card glass mk-card"></div>
      </div>`;
    const card = div.querySelector('.mk-card');
    let run = [], i = 0, pts = 0, done = 0, answered = false;
    const pool = ()=>{
      const st = mkMcState();
      if(mkMcFilter==='wrong') return MK_MC.filter(m=>st[m.q]!=null && st[m.q]<1);
      return MK_MC.filter(m=>mkMcFilter==='all' || m.lec===mkMcFilter);
    };
    const fmt = v=>String(v).replace(/\.0$/,'');
    const score = ()=>{
      div.querySelector('.bk-live').textContent = `This run: ${fmt(pts)} / ${fmt(done*2.5)} points${run.length?` · question ${Math.min(i+1, run.length)} of ${run.length}`:''}`;
      const all = mkMcScore(); const n = Object.keys(mkMcState()).length;
      div.querySelector('.bk-best').textContent = all!=null ? `Overall: ${Math.round(all*100)}% of the points on ${n} tried questions (latest attempt)` : 'No attempts yet';
    };
    const start = ()=>{
      div.querySelectorAll('.mk-filter .chip').forEach(c=>c.classList.toggle('active', c.dataset.f===mkMcFilter));
      run = shuffle(pool()).map(m=>({...m, s:shuffle(m.s.slice())}));
      i = 0; pts = 0; done = 0; show();
    };
    const show = ()=>{
      answered = false; score();
      if(!run.length){ card.innerHTML = `<p>${mkMcFilter==='wrong' ? 'Every tried question has full points — well done.' : 'No questions here.'}</p>`; return; }
      if(i>=run.length){
        const pct = Math.round(pts/(run.length*2.5)*100);
        card.innerHTML = `<h3 style="margin:0 0 6px">Run finished: ${fmt(pts)} / ${fmt(run.length*2.5)} points (${pct}%)</h3><p>${pct<100?'Repeat the questions without full points or start a new shuffled run.':'Full points on every question.'}</p><div class="ans-actions"><button class="btn" data-a="again">New shuffled run</button>${pct<100?'<button class="btn ghost" data-a="wrong">Repeat questions without full points</button>':''}</div>`;
        return;
      }
      const m = run[i]; const t = MK_TOPICS.find(x=>x.id===m.lec);
      card.innerHTML = `<div class="qtag">Lecture ${t.ch} · ${esc(MK_AREAS.find(a=>a.id===m.area).label)} · self-written, exam format</div>
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
      const p = MK_POINTS[right]; pts += p; done++;
      const st = mkMcState(); st[m.q] = p/2.5; lsSet('mk-mc-state', st);
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
      if(b.dataset.a==='again'){ mkMcFilter = mkMcFilter==='wrong' ? 'all' : mkMcFilter; start(); }
      if(b.dataset.a==='wrong'){ mkMcFilter = 'wrong'; start(); }
    });
    div.querySelector('.mk-filter').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; mkMcFilter = c.dataset.f; start(); });
    div.querySelector('.bk-reset').addEventListener('click', start);
    div.__start = start;
    start();
  });
}

/* ============================================================ OPEN QUESTIONS ============================================================ */
function buildMKOpen(){
  registerPage('mk-open', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Open Questions</h2><p>For the 15-point open part. Answer on paper first, then reveal the model answer and rate yourself. Self-written practice questions — the model answers use only content from the lectures.</p></div>
      <div class="page-body"><div class="bk-score-row"><span class="bk-live mk-open-live"></span><button class="btn ghost mk-open-reset">Reset ratings</button></div><div class="mk-open-list"></div></div>`;
    const list = div.querySelector('.mk-open-list');
    const render = ()=>{
      const st = ls('mk-open-state', {});
      const rated = MK_OPEN.filter(o=>st[o.q]).length, good = MK_OPEN.filter(o=>st[o.q]==='good').length;
      div.querySelector('.mk-open-live').textContent = `${good} of ${MK_OPEN.length} answered well · ${rated} rated`;
      list.innerHTML = MK_TOPICS.map(t=>{
        const qs = MK_OPEN.filter(o=>o.lec===t.id); if(!qs.length) return '';
        return `<div class="nav-section-label" style="padding-left:0">Lecture ${t.ch} · ${esc(t.title)}</div>` + qs.map(o=>{ const k = MK_OPEN.indexOf(o); const r = st[o.q];
          return `<div class="drill-card glass mk-open" data-k="${k}"><div class="qtitle">${esc(o.q)}</div>
            <div class="ans-actions"><button class="btn ghost" data-o="show">Show model answer</button>${r?`<span class="mk-rated">Your rating: ${{good:'✓ got it', part:'~ partly', bad:'✗ missed'}[r]}</span>`:''}</div>
            <div class="mk-model" style="display:none"><p>${esc(o.a)}</p><div class="ans-actions"><button class="chip" data-r="good">✓ got it</button><button class="chip" data-r="part">~ partly</button><button class="chip" data-r="bad">✗ missed</button></div></div></div>`; }).join('');
      }).join('');
    };
    list.addEventListener('click', ev=>{
      const box = ev.target.closest('.mk-open'); if(!box) return;
      if(ev.target.closest('[data-o="show"]')){ box.querySelector('.mk-model').style.display = ''; return; }
      const r = ev.target.closest('[data-r]'); if(!r) return;
      const st = ls('mk-open-state', {}); st[MK_OPEN[+box.dataset.k].q] = r.dataset.r; lsSet('mk-open-state', st); render();
    });
    div.querySelector('.mk-open-reset').addEventListener('click', ()=>{ lsSet('mk-open-state', {}); render(); });
    render();
  });
}
