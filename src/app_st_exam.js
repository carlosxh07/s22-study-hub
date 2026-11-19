/* ============================================================ STATISTICS — PAST EXAMS PAGE (st-exams) ============================================================ */
// Loaded after app_bk5.js, before app_mistakes.js. Data: ST_EXAMS / ST_EXAM_INFO (data_st_exam.js).
// Same flow as the tutorials: write, reveal, rate (st-exam-state, keys "n-id"); the score is weighted by exercise points.
ST_NAV[1].items.unshift({id:'st-exams', label:'Past Exams 2025 + Mock (official keys)', icon:'timer'});

function stExamState(){ return ls('st-exam-state', {}); }
function stExamPts(ex){ // {got, rated, total} in points
  const st = stExamState(); let got = 0, rated = 0, total = 0;
  ex.tasks.forEach(k=>{ total += k.pts; const v = st[ex.n+'-'+k.id]; if(v!=null){ got += v*k.pts; rated += k.pts; } });
  return {got, rated, total};
}
function stExamScore(topicId){
  const st = stExamState(); let w = 0, s = 0;
  ST_EXAMS.forEach(ex=>ex.tasks.forEach(k=>{ if(topicId && k.topic!==topicId) return; const v = st[ex.n+'-'+k.id]; if(v!=null){ const p = k.pts || 2; w += p; s += v*p; } }));
  return w ? s/w : null;
}
const __stTopicScoreEX = stTopicScore;
stTopicScore = function(t){
  const base = __stTopicScoreEX(t), ex = stExamScore(t.id);
  return ex==null ? base : base==null ? ex : (base + ex)/2; // real exam tasks count as much as everything else together
};

const __buildSearchIndexSTX = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexSTX();
  ST_EXAMS.forEach(ex=>ex.tasks.forEach(k=>{
    const e = {type:'Past exam', rank:1, title:`${ex.short} · ${texPlain(k.q).slice(0,90)}`, text:texPlain(k.sol), where:`Statistics · ${ex.title}`, page:'st-exams', stExam:ex.n};
    e.norm = searchNorm(e.title+' '+e.text); idx.push(e);
  }));
  return idx;
};

const __planItemPoolSTX = planItemPool;
planItemPool = function(){
  const items = __planItemPoolSTX();
  ST_EXAMS.forEach(ex=>{
    const p = stExamPts(ex), s = p.rated ? p.got/p.rated : null;
    items.push({subj:'st', label:`${ex.title} — under exam conditions, then compare`, page:'st-exams', weight:s==null ? 1 : Math.max(.25, 1-s), size:ex.tasks.length*2, large:true, prio:s==null || s<.8});
  });
  return items;
};

let stExamSel = null;
function stExamOpen(n){ stExamSel = n; navTo('st-exams'); const pg = document.getElementById('page-st-exams'); if(pg && pg.__show) pg.__show(n); }
function buildSTExams(){
  registerPage('st-exams', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('timer')} Practice · real exams with official solutions</div><h2>Past Exams</h2><p>The three Statistics exams of Prof. Hosseinkouchack with official keys: December 2025, March 2025 and Mock Exam 01. Every answer was recomputed and explained; errors in the keys are flagged in orange. Solve one exam in one sitting (formula card and tables only), then reveal exercise by exercise and rate yourself. The rating is weighted by points and counts for the radar and the study plan.</p></div>
      <div class="page-body">
        <div class="bk-tut-intro glass">${stRich(ST_EXAM_INFO)}</div>
        <div class="chip-row bk-filter st-ex-chips"></div>
        <div class="st-ex-body"></div>
      </div>`;
    const chips = div.querySelector('.st-ex-chips'), body = div.querySelector('.st-ex-body');
    const drawChips = ()=>{ chips.innerHTML = ST_EXAMS.map(ex=>{ const p = stExamPts(ex); return `<button class="chip${ex.n===stExamSel?' active':''}" data-n="${ex.n}">${esc(ex.short)}${p.rated?` · ${Math.round(p.got)}/${p.total} P`:''}</button>`; }).join(''); };
    const rateRow = key=>{ const v = stExamState()[key]; return `<div class="bk-rate"><span>How did you do?</span>${[[1,'Full points'],[.5,'Partly'],[0,'Not yet']].map(([val,l])=>`<button class="chip${v===val?' active':''}" data-rate="${val}">${l}</button>`).join('')}</div>`; };
    const tally = ex=>{ const p = stExamPts(ex); return p.rated ? `Self-rated so far: <b>${Math.round(p.got*10)/10} of ${p.rated} P</b> (${p.total} P in the exam)` : `${p.total} P · ${ex.tasks.filter(k=>k.pts).length} exercises`; };
    const show = n=>{
      stExamSel = n || stExamSel || ls('st-exam-sel', 1); lsSet('st-exam-sel', stExamSel);
      const ex = ST_EXAMS.find(x=>x.n===stExamSel) || ST_EXAMS[0];
      const answers = ls('st-exam-ans', {});
      drawChips();
      body.innerHTML = `<div class="bk-tut-head"><h3>${esc(ex.title)}</h3><div class="chip-row"><span class="st-src off">✓ Official solutions, recomputed</span><span class="chip st-ex-tally">${tally(ex)}</span></div></div>
        <div class="bk-tut-intro glass">${stRich(ex.intro)}</div>
        ${ex.tasks.map(k=>{ const key = ex.n+'-'+k.id; const t = ST_TOPICS.find(x=>x.id===k.topic); return `<div class="drill-card glass bk-tut-task" data-key="${key}">
          <div class="bk-tut-q">${tutQ(stRich(k.q))}</div>
          <textarea class="bk-tut-ans" rows="4" placeholder="Your solution with the setup (saved on this device)">${esc(answers[key]||'')}</textarea>
          <div class="ans-actions"><button class="btn" data-a="sol">Show solution</button>${t?`<button class="chip" onclick="navTo('${t.id}')">Ch. ${t.ch} · ${esc(t.title)}</button>`:''}</div>
          <div class="bk-tut-sol" hidden>${stRich(k.sol)}${k.warn?`<div class="bk-warn"><b>Note:</b> ${mathText(k.warn)}</div>`:''}${k.pts?rateRow(key):''}</div>
        </div>`; }).join('')}`;
    };
    body.addEventListener('input', ev=>{ const ta = ev.target.closest('.bk-tut-ans'); if(!ta) return; const a = ls('st-exam-ans', {}); a[ta.closest('.bk-tut-task').dataset.key] = ta.value; lsSet('st-exam-ans', a); });
    body.addEventListener('click', ev=>{
      const task = ev.target.closest('.bk-tut-task'); if(!task) return;
      const b = ev.target.closest('[data-a],[data-rate]'); if(!b) return;
      if(b.dataset.a==='sol'){ const sol = task.querySelector('.bk-tut-sol'); sol.hidden = !sol.hidden; b.textContent = sol.hidden ? 'Show solution' : 'Hide solution'; }
      if(b.dataset.rate!=null){
        const st = stExamState(); st[task.dataset.key] = +b.dataset.rate; lsSet('st-exam-state', st);
        task.querySelectorAll('[data-rate]').forEach(c=>c.classList.toggle('active', c===b)); drawChips();
        const ex = ST_EXAMS.find(x=>x.n===stExamSel); const tl = body.querySelector('.st-ex-tally'); if(ex && tl) tl.innerHTML = tally(ex);
      }
    });
    chips.addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; show(+c.dataset.n); window.scrollTo({top:0, behavior:'smooth'}); });
    div.__show = show;
    show(stExamSel);
  });
}

// build together with the other Statistics practice pages (build.py calls buildSTMock last) + a first tile on the Statistics home
const __buildSTMockEX = buildSTMock;
buildSTMock = function(){
  __buildSTMockEX();
  buildSTExams();
  const home = lazyPages['st-home'];
  if(home) lazyPages['st-home'] = ()=>{ home(); const div = document.getElementById('page-st-home'); const tile = div && div.querySelector('.tool-tile'); if(tile) tile.insertAdjacentHTML('beforebegin', `<div class="tool-tile" onclick="navTo('st-exams')"><div class="ic">${icon('timer')}</div><h4>Past Exams</h4><p>December 2025, March 2025 and Mock Exam 01 with the official keys, recomputed: ${ST_EXAMS.reduce((n,ex)=>n+ex.tasks.length,0)} exercises. Start here.</p></div>`); };
};
