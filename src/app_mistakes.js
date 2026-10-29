/* ============================================================ MISTAKES & MEMORY (all subjects) ============================================================ */
// Loaded last. Same idea as the S2/1 hub: one page with a tab per subject that lists everything answered wrong (or only partly),
// lets you practise the wrong single-choice questions in place, and links every other item to the tool where it lives.
// Sources: topic quizzes (tracked per question from 29 Oct 2026 via the quizAnswered hook build.py adds to renderQuiz) plus the
// per-item states the tools already saved before (booking drills, tutorials, in-class tasks, exam-format MC, open questions,
// FSA slide cases, Math II exam bank and past-exam parts), so earlier results show up straight away.

function qresKey(text){ let h = 5381; for(let i=0;i<text.length;i++) h = ((h<<5) + h + text.charCodeAt(i)) | 0; return 'q'+(h>>>0).toString(36); }
function qresRecord(text, right){
  const k = qresKey(text);
  const r = ls('qres', {}); r[k] = right ? 1 : 0; lsSet('qres', r);
  const m = ls('qmeta', {}); const e = m[k] || {n:0, w:0};
  e.n++; if(!right) e.w++; e.t = Date.now(); m[k] = e; lsSet('qmeta', m);
}
const FS_CASE_TEXTS = new Set(FS_CASES.map(c=>c.q));
function quizAnswered(q, right){
  if(!q || !q.q) return;
  qresRecord(q.q, right);
  if(FS_CASE_TEXTS.has(q.q)){ const st = ls('fs-case-state', {}); st[q.q] = right ? 1 : 0; lsSet('fs-case-state', st); }
}

const MS_SUBJ = [['m2','Math II'],['st','Statistics'],['mk','Marketing'],['cb','Consumer Behaviour'],['dt','Decision Theory'],['bk','Bookkeeping'],['fs','FSA']];
const MS_SUBJ_NAME = Object.fromEntries(MS_SUBJ);
const msShort = (s, n=170)=>{ s = String(s||'').replace(/\s+/g,' ').trim(); return s.length>n ? s.slice(0,n-1)+'…' : s; };

// every item with a saved result: {key, subj, kind, text, src, page, score (0..1), m (meta, quizzes only), sc (question object if practisable here)}
function msItems(){
  const out = [], seen = new Set();
  const qres = ls('qres', {}), meta = ls('qmeta', {});
  const push = it=>{ if(it.score==null || isNaN(it.score) || seen.has(it.key)) return; seen.add(it.key); out.push(it); };
  // 1. single-choice topic quizzes
  const quiz = (subj, list, label)=>(list||[]).forEach(t=>(t.quiz||[]).forEach(q=>{
    const k = qresKey(q.q); if(qres[k]===undefined) return;
    push({key:k, subj, kind:'Quiz', text:q.q, src:label(t), page:t.id, score:qres[k], m:meta[k], sc:q});
  }));
  quiz('m2', M2_TOPICS, t=>t.title);
  quiz('st', ST_TOPICS, t=>t.title);
  quiz('mk', MK_TOPICS, t=>t.title);
  quiz('cb', CB_TOPICS, t=>t.title);
  quiz('dt', DT_TOPICS, t=>t.title);
  quiz('bk', BK_TOPICS, t=>t.title);
  quiz('bk', BK_RW_TOPICS, t=>`Lehrbuch ${t.ch} · ${t.title}`);
  quiz('fs', FS_TOPICS, t=>t.title);
  // 2. FSA slide cases (Case Trainer + case questions of the MC simulator)
  const fsc = ls('fs-case-state', {});
  FS_CASES.forEach(c=>{ if(fsc[c.q]!=null) push({key:'fsc:'+c.q, subj:'fs', kind:'Slide case', text:c.q, src:c.src, page:'fs-cases', score:+fsc[c.q], sc:c}); });
  // 3. exam-format MC (5 statements): latest share of the 2.5 points
  [['mk', MK_MC, 'mk-mc-state', 'mk-mc'], ['cb', CB_MC, 'cb-mc-state', 'cb-mc']].forEach(([subj, list, key, page])=>{
    const st = ls(key, {}); list.forEach(m=>{ if(st[m.q]!=null) push({key:key+':'+m.q, subj, kind:'Exam format', text:m.q, src:'Exam-Format Trainer', page, score:+st[m.q]}); });
  });
  // 4. open questions (self-rated)
  const rate = {good:1, part:.5, bad:0};
  [['mk', MK_OPEN, 'mk-open-state', 'mk-open'], ['cb', CB_OPEN, 'cb-open-state', 'cb-open']].forEach(([subj, list, key, page])=>{
    const st = ls(key, {}); list.forEach(o=>{ if(st[o.q]!=null) push({key:key+':'+o.q, subj, kind:'Open question', text:o.q, src:'Open Questions (self-rated)', page, score:rate[st[o.q]]}); });
  });
  // 5. booking drills
  const bt = ls('bk-train-state', {});
  BK_TRAIN.forEach(x=>{ if(bt[x.id]!=null) push({key:'bkt:'+x.id, subj:'bk', kind:'Booking drill', text:x.text, src:'Booking Entry Trainer'+(x.src?' · '+x.src:''), page:'bk-train', score:+bt[x.id]}); });
  // 6. tutorial / in-class tasks (self-rated or graded)
  const tasks = (subj, list, key, page, label)=>{ const st = ls(key, {}); list.forEach(tu=>(tu.tasks||[]).forEach(k=>{ const v = st[tu.n+'-'+k.id]; if(v!=null) push({key:key+':'+tu.n+'-'+k.id, subj, kind:label, text:k.q||k.title||'', src:`${label} ${tu.n} · ${tu.title} · task ${k.id}`, page, score:+v}); })); };
  tasks('bk', BK_TUTS, 'bk-tut-state', 'bk-tut', 'TUT');
  tasks('bk', BK_CLASS, 'bk-class-state', 'bk-class', 'Class');
  tasks('st', ST_TUTS, 'st-tut-state', 'st-tut', 'TUT');
  // 7. Math II: old exam tasks (self-rated) and parts of the interactive past exams (best check)
  const bank = ls('m2-bank-state', {}), brate = {ok:1, half:.5, bad:0};
  M2_BANK.forEach(b=>{ if(bank[b.id]!=null) push({key:'m2b:'+b.id, subj:'m2', kind:'Exam bank', text:`${b.exam} · Ex. ${b.n}: ${b.title}`, src:'150 old exam tasks (self-rated)', page:'m2-bank', score:brate[bank[b.id]]}); });
  M2_EXAMS.forEach(e=>e.ex.forEach(x=>x.parts.forEach(p=>{ const s = ls(exKey(e.id, x.n, p.id), null); if(s && s.best!=null) push({key:'m2x:'+e.id+x.n+p.id, subj:'m2', kind:'Past exam', text:`${e.title} · Ex. ${x.n} ${p.label||p.id}: ${x.title}`, src:'Exam Prep', page:'m2-'+e.id, score:s.best}); })));
  return out;
}

let msSubj = 'all';
function msOpen(subj){ msSubj = subj || 'all'; navTo('mistakes'); }
function buildMistakes(){
  registerPage('mistakes', (div)=>{
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">Cross-subject</div><h2>Mistakes &amp; Memory</h2><p>Everything you answered wrong or only partly, per subject. Practise the wrong quiz questions here: answer them correctly and they drop off the list.</p></div>
      <div class="page-body">
        <div class="tabbar ms-tabs"></div>
        <div class="ms-overview"></div>
        <div class="ms-practice" style="display:none"><button class="btn ghost ms-back">← Back to overview</button><div class="ms-quiz"></div></div>
      </div>`;
    div.querySelector('.ms-tabs').addEventListener('click', e=>{ const b = e.target.closest('.tabbtn'); if(!b) return; msSubj = b.dataset.subj; div.dataset.showAll = '0'; renderMistakes(div); });
    div.querySelector('.ms-back').addEventListener('click', ()=>renderMistakes(div));
    div.querySelector('.ms-overview').addEventListener('click', e=>{
      const inScope = it=>msSubj==='all' || it.subj===msSubj;
      if(e.target.closest('.ms-start')){
        const qs = shuffle(msItems().filter(it=>inScope(it) && it.sc && it.score<1)).map(it=>{
          const order = shuffle(it.sc.opts.map((_,i)=>i));
          return {...it.sc, opts:order.map(i=>it.sc.opts[i]), correct:order.indexOf(it.sc.correct), __src:`${MS_SUBJ_NAME[it.subj]} · ${it.src}`};
        });
        if(!qs.length) return;
        div.querySelector('.ms-overview').style.display = 'none';
        div.querySelector('.ms-practice').style.display = '';
        renderQuiz(div.querySelector('.ms-quiz'), qs, 'mistakes-practice', {topicOf:qi=>qs[qi].__src});
      }
      if(e.target.closest('.ms-toggle-all')){ div.dataset.showAll = div.dataset.showAll==='1' ? '0' : '1'; renderMistakes(div); }
      if(e.target.closest('.ms-reset')){
        const label = msSubj==='all' ? 'all subjects' : MS_SUBJ_NAME[msSubj];
        if(!confirm(`Reset the quiz memory for ${label}? This forgets which topic-quiz questions you got right or wrong. Best scores, flashcards and the results inside the other tools are not affected.`)) return;
        const keys = msItems().filter(it=>inScope(it) && it.kind==='Quiz').map(it=>it.key);
        const qres = ls('qres', {}), meta = ls('qmeta', {});
        keys.forEach(k=>{ delete qres[k]; delete meta[k]; });
        lsSet('qres', qres); lsSet('qmeta', meta); renderMistakes(div);
      }
    });
  });
}
function renderMistakes(div){
  const all = msItems();
  const wrongIn = s=>all.filter(it=>(s==='all' || it.subj===s) && it.score<1).length;
  div.querySelector('.ms-tabs').innerHTML = [['all','All'], ...MS_SUBJ].map(([id,l])=>{ const n = wrongIn(id); return `<button class="tabbtn${id===msSubj?' active':''}" data-subj="${id}">${esc(l)}${n?` <span class="ms-n">${n}</span>`:''}</button>`; }).join('');
  div.querySelector('.ms-practice').style.display = 'none';
  const ov = div.querySelector('.ms-overview'); ov.style.display = '';
  const items = all.filter(it=>msSubj==='all' || it.subj===msSubj)
    .sort((a,b)=>(a.score-b.score) || (((b.m&&b.m.w)||0)-((a.m&&a.m.w)||0)) || (((b.m&&b.m.t)||0)-((a.m&&a.m.t)||0)));
  const wrong = items.filter(it=>it.score<1), nSc = wrong.filter(it=>it.sc).length;
  const showAll = div.dataset.showAll==='1', rows = showAll ? items : wrong;
  const when = t => t ? new Date(t).toLocaleDateString('en-GB', {day:'numeric', month:'short'}) : '';
  const mark = s => s>=1 ? ['ok','✓'] : s>0 ? ['part','◐'] : ['no','✗'];
  ov.innerHTML = `
    <div class="ms-stats">
      <div class="ms-stat"><b>${items.length}</b><span>answered</span></div>
      <div class="ms-stat good"><b>${items.length-wrong.length}</b><span>right last time</span></div>
      <div class="ms-stat bad"><b>${wrong.length}</b><span>wrong or partly</span></div>
    </div>
    <div class="ms-actions">
      <button class="btn ms-start" ${nSc?'':'disabled'}>Practise ${nSc} wrong quiz question${nSc===1?'':'s'}</button>
      <button class="btn ghost ms-toggle-all">${showAll ? 'Show only mistakes' : 'Show all answered'}</button>
      <button class="btn ghost ms-reset" ${items.some(it=>it.kind==='Quiz')?'':'disabled'}>Reset quiz memory</button>
    </div>
    ${rows.length ? `<div class="ms-list">${rows.map(it=>{ const [c, sym] = mark(it.score); const m = it.m;
      return `<div class="ms-row ${c}"><span class="ms-mark">${sym}</span>
        <div class="ms-q"><div class="ms-text">${mathText(msShort(it.text))}</div><div class="ms-meta">${msSubj==='all'?esc(MS_SUBJ_NAME[it.subj])+' · ':''}${esc(it.kind)} · ${esc(it.src)}${m&&m.n?` · wrong ${m.w} of ${m.n}`:''}${m&&m.t?` · ${when(m.t)}`:''}</div></div>
        <button class="btn ghost ms-go" onclick="navTo('${it.page}')">Open</button></div>`; }).join('')}</div>`
      : `<p class="ms-empty">${items.length ? 'No mistakes here right now. Switch to “Show all answered” to see everything.' : 'Nothing answered here yet. Quizzes, drills, tutorials and exam-format questions show up here once you have done them.'}</p>`}`;
}

/* ---------- sidebar button, subject-home link, routing ---------- */
const __buildBKClassMS = buildBKClass;
buildBKClass = function(){
  __buildBKClassMS();
  buildMistakes();
  const plan = document.getElementById('plan-nav-btn');
  if(plan && !document.getElementById('mistakes-nav-btn')) plan.insertAdjacentHTML('afterend', `<button class="subject-btn" id="mistakes-nav-btn" onclick="msOpen('all')"><span class="dot" style="background:var(--bad)"></span><span><span>Mistakes &amp; Memory</span></span></button>`);
};
const __navToMS = navTo;
navTo = function(pageId){
  __navToMS(pageId);
  const b = document.getElementById('mistakes-nav-btn'); if(b) b.classList.toggle('active', pageId==='mistakes');
  const div = document.getElementById('page-'+pageId); if(!div) return;
  if(pageId==='mistakes'){ renderMistakes(div); return; }
  const hm = /^([a-z0-9]+)-home$/.exec(pageId);
  if(hm && MS_SUBJ_NAME[hm[1]]){
    const s = hm[1], n = msItems().filter(it=>it.subj===s && it.score<1).length;
    let link = div.querySelector('.ms-home-link');
    if(!link){ const body = div.querySelector('.page-body'); if(!body) return; body.insertAdjacentHTML('afterbegin', `<div class="chip-row ms-home-link"></div>`); link = div.querySelector('.ms-home-link'); }
    link.innerHTML = `<button class="chip" onclick="msOpen('${s}')">Mistakes &amp; Memory${n?` · ${n} open`:''}</button>`;
  }
};
