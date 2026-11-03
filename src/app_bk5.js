/* ============================================================ BOOKKEEPING — EXAM FOCUS PAGE (bk-exam) ============================================================ */
// Loaded after app_bk4.js, before app_mistakes.js. Cloer's exam hints (BK_EXAM in data_bk_exam.js), same flow as In-Class Notes:
// write your answer, reveal the solution, rate yourself (bk-exam-state, keys "n-id").
BK_NAV[1].items.unshift({id:'bk-exam', label:'Exam Focus (Cloer\'s hints)', icon:'logic'});

function bkExamState(){ return ls('bk-exam-state', {}); }
function bkExamScore(topicId){
  const st = bkExamState(); const vals = [];
  BK_EXAM.filter(c=>!topicId || c.topic===topicId).forEach(c=>c.tasks.forEach(k=>{ const v = st[c.n+'-'+k.id]; if(v!=null) vals.push(v); }));
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
const __bkTopicScoreEX = bkTopicScore;
bkTopicScore = function(t){
  const base = __bkTopicScoreEX(t), ex = bkExamScore(t.id);
  return ex==null ? base : base==null ? ex : (base*2 + ex)/3;
};

const __buildSearchIndexEX = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexEX();
  BK_EXAM.forEach(c=>{
    const e = {type:'Exam focus', rank:1, title:`E${c.n} · ${c.title}`, text:searchFlat(c.intro+' '+c.tasks.map(k=>k.q+' '+k.sol).join(' ')), where:'Bookkeeping · Exam Focus', page:'bk-exam'};
    e.norm = searchNorm(e.title+' '+e.text); idx.push(e);
  });
  return idx;
};

const __planItemPoolEX = planItemPool;
planItemPool = function(){
  const items = __planItemPoolEX();
  const s = bkExamScore();
  items.push({subj:'bk', label:'Exam Focus — Cloer\'s exam hints (E1–E'+BK_EXAM.length+')', page:'bk-exam', weight:s==null ? 1 : Math.max(.25, 1-s), size:BK_EXAM.reduce((n,c)=>n+c.tasks.length,0), large:true, prio:s==null || s<.8});
  return items;
};

let bkExamSel = null;
function buildBKExam(){
  registerPage('bk-exam', (div)=>{
    const nTasks = BK_EXAM.reduce((n,c)=>n+c.tasks.length,0);
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice · from the lectures 02.11. + 03.11.</div><h2>Exam Focus</h2><p>What Prof. Cloer said is "in the exam", what he quizzed students on and what he repeated: ${BK_EXAM.length} blocks, ${nTasks} tasks in his question style.</p></div>
      <div class="page-body">
        <div class="bk-tut-intro glass">${bkRich(BK_EXAM_STYLE)}</div>
        <div class="bk-ex-legend">${Object.values(BK_EXAM_TIERS).map(t=>`<span><i style="background:${t.color}"></i>${esc(t.label)}</span>`).join('')}</div>
        <div class="chip-row bk-filter bk-ex-chips"></div>
        <div class="bk-tut-body bk-ex-body"></div>
      </div>`;
    const chips = div.querySelector('.bk-ex-chips'), body = div.querySelector('.bk-ex-body');
    const pct = c=>{ const st = bkExamState(); const v = c.tasks.map(k=>st[c.n+'-'+k.id]).filter(x=>x!=null); return v.length ? Math.round(v.reduce((a,b)=>a+b,0)/c.tasks.length*100) : null; };
    const drawChips = ()=>{ chips.innerHTML = BK_EXAM.map(c=>{ const p = pct(c); return `<button class="chip${c.n===bkExamSel?' active':''}" data-n="${c.n}"><i class="bk-ex-dot" style="background:${BK_EXAM_TIERS[c.tier].color}"></i>E${c.n} · ${esc(c.title.split(/[:(]/)[0].trim())}${p!=null?` · ${p}%`:''}</button>`; }).join(''); };
    const rateRow = key=>{ const v = bkExamState()[key]; return `<div class="bk-rate"><span>How did you do?</span>${[[1,'Got it'],[.5,'Partly'],[0,'Not yet']].map(([val,l])=>`<button class="chip${v===val?' active':''}" data-rate="${val}">${l}</button>`).join('')}</div>`; };
    const show = n=>{
      bkExamSel = n || bkExamSel || ls('bk-exam-sel', 1); lsSet('bk-exam-sel', bkExamSel);
      const c = BK_EXAM.find(x=>x.n===bkExamSel) || BK_EXAM[0];
      const t = BK_TOPICS.find(x=>x.id===c.topic);
      const tier = BK_EXAM_TIERS[c.tier];
      const answers = ls('bk-exam-ans', {});
      drawChips();
      body.innerHTML = `<div class="bk-tut-head"><h3>E${c.n} · ${esc(c.title)}</h3><div class="chip-row"><span class="chip bk-ex-tier" style="border-color:${tier.color}"><i class="bk-ex-dot" style="background:${tier.color}"></i>${esc(tier.label)} · lecture ${esc(c.date)}</span>${t?`<button class="chip" onclick="navTo('${t.id}')">Chapter ${t.ch} · ${esc(t.title)}</button>`:''}</div></div>
        <div class="bk-tut-intro glass">${bkRich(c.intro)}</div>
        ${c.tasks.map(k=>{ const key = c.n+'-'+k.id; return `<div class="drill-card glass bk-tut-task" data-key="${key}">
          <div class="bk-tut-q">${tutQ(bkRich(k.q))}</div>
          <textarea class="bk-tut-ans" rows="3" placeholder="Your answer or booking entries (saved on this device)">${esc(answers[key]||'')}</textarea>
          <div class="ans-actions"><button class="btn" data-a="sol">Show solution</button></div>
          <div class="bk-tut-sol" hidden>${bkRich(k.sol)}${rateRow(key)}</div>
        </div>`; }).join('')}`;
    };
    body.addEventListener('input', ev=>{ const ta = ev.target.closest('.bk-tut-ans'); if(!ta) return; const a = ls('bk-exam-ans', {}); a[ta.closest('.bk-tut-task').dataset.key] = ta.value; lsSet('bk-exam-ans', a); });
    body.addEventListener('click', ev=>{
      const task = ev.target.closest('.bk-tut-task'); if(!task) return;
      const key = task.dataset.key;
      const b = ev.target.closest('[data-a],[data-rate]'); if(!b) return;
      if(b.dataset.a==='sol'){ const sol = task.querySelector('.bk-tut-sol'); sol.hidden = !sol.hidden; b.textContent = sol.hidden ? 'Show solution' : 'Hide solution'; }
      if(b.dataset.rate!=null){ const st = bkExamState(); st[key] = +b.dataset.rate; lsSet('bk-exam-state', st); task.querySelectorAll('[data-rate]').forEach(x=>x.classList.toggle('active', x===b)); drawChips(); }
    });
    chips.addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; show(+c.dataset.n); window.scrollTo({top:0, behavior:'smooth'}); });
    div.__show = show;
    show(bkExamSel);
  });
}

const __buildBKClassEX = buildBKClass;
buildBKClass = function(){
  __buildBKClassEX();
  buildBKExam();
  // prominent tile on the Bookkeeping home, first in the tools grid
  bkRwPatchLazy('bk-home', div=>{
    const tile = div.querySelector('.tool-tile'); if(!tile) return;
    tile.insertAdjacentHTML('beforebegin', `<div class="tool-tile" onclick="navTo('bk-exam')"><div class="ic">${icon('logic')}</div><h4>Exam Focus</h4><p>Cloer's exam hints from the lectures: ${BK_EXAM.reduce((n,c)=>n+c.tasks.length,0)} tasks in his question style.</p></div>`);
  });
};
