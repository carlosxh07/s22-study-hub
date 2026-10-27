/* ============================================================ BOOKKEEPING — IN-CLASS NOTES PAGE (bk-class) ============================================================ */
// Loaded last. Board examples from Prof. Cloer's lectures (BK_CLASS in data_bk_class.js), same flow as the tutorials page:
// write your answer, reveal the class solution, rate yourself (bk-class-state, keys "n-id").
BK_NAV[1].items.splice(1, 0, {id:'bk-class', label:'In-Class Notes (Cloer, board examples)', icon:'doc'});

function bkClassState(){ return ls('bk-class-state', {}); }
function bkClassScore(topicId){
  const st = bkClassState(); const vals = [];
  BK_CLASS.filter(c=>!topicId || c.topic===topicId).forEach(c=>c.tasks.forEach(k=>{ const v = st[c.n+'-'+k.id]; if(v!=null) vals.push(v); }));
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
const __bkTopicScoreTut = bkTopicScore;
bkTopicScore = function(t){
  const base = __bkTopicScoreTut(t), cl = bkClassScore(t.id);
  return cl==null ? base : base==null ? cl : (base*2 + cl)/3;
};

const __buildSearchIndexCL = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexCL();
  BK_CLASS.forEach(c=>{
    const e = {type:'Class notes', rank:2, title:`C${c.n} · ${c.title}`, text:searchFlat(c.intro+' '+c.tasks.map(k=>k.q+' '+k.sol).join(' ')), where:'Bookkeeping · In-Class Notes', page:'bk-class'};
    e.norm = searchNorm(e.title+' '+e.text); idx.push(e);
  });
  return idx;
};

const __planItemPoolCL = planItemPool;
planItemPool = function(){
  const items = __planItemPoolCL();
  const s = bkClassScore();
  items.push({subj:'bk', label:'In-Class Notes — Cloer\'s board examples (C1–C10)', page:'bk-class', weight:s==null ? .9 : Math.max(.2, 1-s), size:BK_CLASS.reduce((n,c)=>n+c.tasks.length,0), large:true, prio:s==null || s<.7});
  return items;
};

let bkClassSel = null;
function bkClassOpen(n){ bkClassSel = n; navTo('bk-class'); const pg = document.getElementById('page-bk-class'); if(pg && pg.__show) pg.__show(n); }
function buildBKClass(){
  registerPage('bk-class', (div)=>{
    const nTasks = BK_CLASS.reduce((n,c)=>n+c.tasks.length,0);
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Practice · from the lectures</div><h2>In-Class Notes</h2><p>The examples Prof. Cloer worked through on the board, taken from handwritten lecture notes: ${BK_CLASS.length} sessions, ${nTasks} tasks. Each session starts with what was said in class, then you redo the example yourself. Where the notes contain a slip, it is flagged in orange.</p></div>
      <div class="page-body">
        <div class="chip-row bk-filter bk-cl-chips"></div>
        <div class="bk-tut-body bk-cl-body"></div>
      </div>`;
    const chips = div.querySelector('.bk-cl-chips'), body = div.querySelector('.bk-cl-body');
    const pct = c=>{ const st = bkClassState(); const v = c.tasks.map(k=>st[c.n+'-'+k.id]).filter(x=>x!=null); return v.length ? Math.round(v.reduce((a,b)=>a+b,0)/c.tasks.length*100) : null; };
    const drawChips = ()=>{ chips.innerHTML = BK_CLASS.map(c=>{ const p = pct(c); return `<button class="chip${c.n===bkClassSel?' active':''}" data-n="${c.n}">C${c.n} · ${esc(c.title.split(/[:&,(]/)[0].trim())}${p!=null?` · ${p}%`:''}</button>`; }).join(''); };
    const rateRow = key=>{ const v = bkClassState()[key]; return `<div class="bk-rate"><span>How did you do?</span>${[[1,'Got it'],[.5,'Partly'],[0,'Not yet']].map(([val,l])=>`<button class="chip${v===val?' active':''}" data-rate="${val}">${l}</button>`).join('')}</div>`; };
    const show = n=>{
      bkClassSel = n || bkClassSel || ls('bk-class-sel', 1); lsSet('bk-class-sel', bkClassSel);
      const c = BK_CLASS.find(x=>x.n===bkClassSel) || BK_CLASS[0];
      const t = BK_TOPICS.find(x=>x.id===c.topic);
      const drills = BK_TRAIN.filter(x=>x.src==='Class' && x.topic===c.topic).length;
      const answers = ls('bk-class-ans', {});
      drawChips();
      body.innerHTML = `<div class="bk-tut-head"><h3>C${c.n} · ${esc(c.title)}</h3><div class="chip-row"><button class="chip" onclick="navTo('${t.id}')">Chapter ${t.ch} · ${esc(t.title)}</button>${drills?`<button class="chip" onclick="bkTrainFilter='src:Class';navTo('bk-train');const pg=document.getElementById('page-bk-train');if(pg&&pg.__start)pg.__start();">All ${BK_TRAIN.filter(x=>x.src==='Class').length} booking drills from class</button>`:''}</div></div>
        <div class="bk-tut-intro glass">${bkRich(c.intro)}</div>
        ${c.tasks.map(k=>{ const key = c.n+'-'+k.id; return `<div class="drill-card glass bk-tut-task" data-key="${key}">
          <div class="bk-tut-q">${tutQ(bkRich(k.q))}</div>
          <textarea class="bk-tut-ans" rows="3" placeholder="Your answer or booking entries (saved on this device)">${esc(answers[key]||'')}</textarea>
          <div class="ans-actions"><button class="btn" data-a="sol">Show class solution</button></div>
          <div class="bk-tut-sol" hidden>${bkRich(k.sol)}${k.warn?`<div class="bk-warn"><b>Note on the handwritten notes:</b> ${esc(k.warn)}</div>`:''}${rateRow(key)}</div>
        </div>`; }).join('')}`;
    };
    body.addEventListener('input', ev=>{ const ta = ev.target.closest('.bk-tut-ans'); if(!ta) return; const a = ls('bk-class-ans', {}); a[ta.closest('.bk-tut-task').dataset.key] = ta.value; lsSet('bk-class-ans', a); });
    body.addEventListener('click', ev=>{
      const task = ev.target.closest('.bk-tut-task'); if(!task) return;
      const key = task.dataset.key;
      const b = ev.target.closest('[data-a],[data-rate]'); if(!b) return;
      if(b.dataset.a==='sol'){ const sol = task.querySelector('.bk-tut-sol'); sol.hidden = !sol.hidden; b.textContent = sol.hidden ? 'Show class solution' : 'Hide solution'; }
      if(b.dataset.rate!=null){ const st = bkClassState(); st[key] = +b.dataset.rate; lsSet('bk-class-state', st); task.querySelectorAll('[data-rate]').forEach(x=>x.classList.toggle('active', x===b)); drawChips(); }
    });
    chips.addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; show(+c.dataset.n); window.scrollTo({top:0, behavior:'smooth'}); });
    div.__show = show;
    show(bkClassSel);
  });
}
