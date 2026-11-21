/* ============================================================ BOOKKEEPING — MOCK EXAM PAGE + MOCK-STYLE NUMBER DRILLS ============================================================ */
// Loaded after app_bk5.js, before app_st_exam.js / app_mistakes.js. Cloer's mock (BK_MOCK in data_bk_mock.js):
// page bk-mock (answer box, model solution, self-rating → estimated points /135, state bk-mock-state "n-id"),
// plus six number-drill kinds that copy the mock's tasks 2–7 with fresh numbers (flag mock:true → "Mock exam mix").
const BK_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const bkT = (rows)=>`[[t:Entries\nDebit / Soll|Credit / Haben\n${rows.map(r=>r.join('|')).join('\n')}]]`;

BK_CALC_KINDS.push(
{id:'m-vat', mock:true, label:'Mock T2 · VAT with discount + settlement', topic:'bk-6', gen(){
  const N = bkRnd(10, 60)*1000, d = bkPick([2, 3]), S = bkRnd(8, 70)*1000;
  const G = N*1.19, dG = G*d/100, dN = N*d/100, dT = dN*.19, it = N*.19 - dT, ov = S*.19, diff = ov - it;
  return {q:`A taxable trader buys merchandise on account for net ${bkE(N,0)}€ + 19% VAT. The supplier grants ${d}% cash discount for payment within ten days; the trader pays in time. Later part of the merchandise is sold on account for net ${bkE(S,0)}€ + 19% VAT. Find the bank payment, the input VAT after the discount and the VAT settlement (positive = payable to the tax office, negative = receivable).`,
    fields:['Bank payment €', 'Input VAT after discount €', 'Settlement € (+ payable / − receivable)'], ans:[G-dG, it, diff],
    sol:`${bkT([[`Merchandise ${bkE(N)}; Input VAT ${bkE(N*.19)}`, `Trade payables ${bkE(G)}`], [`Trade payables ${bkE(G)}`, `Bank ${bkE(G-dG)}; Merchandise ${bkE(dN)}; Input VAT ${bkE(dT)}`], [`Trade receivables ${bkE(S*1.19)}`, `Sales revenue ${bkE(S)}; Output VAT ${bkE(ov)}`], diff>=0 ? [`Output VAT ${bkE(ov)}`, `Input VAT ${bkE(it)}; Bank ${bkE(diff)}`] : [`Output VAT ${bkE(ov)}; Input VAT receivable ${bkE(-diff)}`, `Input VAT ${bkE(it)}`]])}
- Discount :: ${d}% × ${bkE(G)} gross = ${bkE(dG)} = ${bkE(dN)} net (reduces the merchandise) + ${bkE(dT)} VAT
- Input VAT :: ${bkE(N*.19)} − ${bkE(dT)} = **${bkE(it)}**
- Output VAT :: 19% × ${bkE(S,0)} = ${bkE(ov)}
- Settlement :: ${bkE(ov)} − ${bkE(it)} = **${bkE(diff)}** → ${diff>=0 ? 'payable, paid by bank' : 'input VAT receivable, no payment (trap in the mock)'}`};
}},
{id:'m-merch', mock:true, label:'Mock T3 · Separate merchandise accounts + returns', topic:'bk-9', gen(){
  const O = bkRnd(20, 50)*1000, P = bkRnd(80, 160)*1000, R = bkRnd(2, 9)*1000, C = bkRnd(25, 50)*1000 + 500*bkRnd(0,1);
  const avail = O + P - R, cogs0 = avail - C, m = bkPick([1.5, 1.6, 1.7, 1.8]), Sa = Math.round(cogs0*m/1000)*1000, SR = bkRnd(4, 12)*1000, ret = Math.round(SR*bkPick([.6, .65, .7])/100)*100;
  const cogs = cogs0 - ret, net = Sa - SR, gp = net - cogs;
  return {q:`Opening inventory ${bkE(O,0)}€. Purchases on account ${bkE(P,0)}€. Purchase returns at acquisition cost ${bkE(R,0)}€. Sales on account ${bkE(Sa,0)}€. Goods returned by customers reduce sales by ${bkE(SR,0)}€ and have a carrying amount of ${bkE(ret,0)}€. Closing physical inventory ${bkE(C,0)}€ (counted before the returned goods came back). VAT is ignored. Find net sales, cost of goods sold and gross profit.`,
    fields:['Net sales €', 'Cost of goods sold €', 'Gross profit €'], ans:[net, cogs, gp],
    sol:`${bkT([[`Merchandise inventory ${bkE(P,0)}`, `Trade payables ${bkE(P,0)}`], [`Trade payables ${bkE(R,0)}`, `Merchandise inventory ${bkE(R,0)}`], [`Trade receivables ${bkE(Sa,0)}`, `Merchandise sales ${bkE(Sa,0)}`], [`Sales returns ${bkE(SR,0)}`, `Trade receivables ${bkE(SR,0)}`], [`Merchandise inventory ${bkE(ret,0)}`, `Cost of goods sold ${bkE(ret,0)}`], [`Cost of goods sold ${bkE(cogs0,0)}`, `Merchandise inventory ${bkE(cogs0,0)}`], [`P&L ${bkE(cogs,0)}`, `Cost of goods sold ${bkE(cogs,0)}`], [`Merchandise sales ${bkE(Sa,0)}`, `Sales returns ${bkE(SR,0)}; P&L ${bkE(net,0)}`]])}
- Available :: ${bkE(O,0)} + ${bkE(P,0)} − ${bkE(R,0)} = ${bkE(avail,0)}; minus closing ${bkE(C,0)} = ${bkE(cogs0,0)}
- Customer return :: goods re-enter inventory → COGS ${bkE(cogs0,0)} − ${bkE(ret,0)} = **${bkE(cogs,0)}**
- Net sales :: ${bkE(Sa,0)} − ${bkE(SR,0)} = **${bkE(net,0)}** (gross principle: never net sales with COGS)
- Gross profit :: **${bkE(gp,0)}**`};
}},
{id:'m-prov', mock:true, label:'Mock T4 · Litigation provision + utilisation', topic:'bk-13', gen(){
  const lo = bkRnd(3, 12)*10000, hi = lo + bkRnd(1, 3)*20000, F = bkRnd(4, 12)*1000, exp = (lo+hi)/2, prov = exp + F;
  const paid = Math.round((prov + bkPick([-1, -1, -1, 1])*bkRnd(2, 9)*500)/500)*500, dmg = paid - Math.round(F*bkPick([.9, .95, 1, 1.1])/500)*500, fees = paid - dmg, rel = prov - paid;
  return {q:`At 31.12.20X1 litigation about events of 20X1 is expected to cost between ${bkE(lo,0)}€ and ${bkE(hi,0)}€, all amounts equally probable. Legal fees of ${bkE(F,0)}€ are also expected. In 20X2 the company pays damages of ${bkE(dmg,0)}€ and legal fees of ${bkE(fees,0)}€; nothing further is expected. Find the provision at 31.12.20X1 and the effect in 20X2 (positive = income from release, negative = additional expense).`,
    fields:['Provision 31.12.20X1 €', 'Effect 20X2 € (+ release / − expense)'], ans:[prov, rel],
    sol:`${bkT([[`Litigation expense ${bkE(prov,0)}`, `Litigation provision ${bkE(prov,0)}`], rel>=0 ? [`Litigation provision ${bkE(paid,0)}`, `Bank ${bkE(paid,0)}`] : [`Litigation provision ${bkE(prov,0)}; Litigation expense ${bkE(-rel,0)}`, `Bank ${bkE(paid,0)}`]].concat(rel>0 ? [[`Litigation provision ${bkE(rel,0)}`, `Income from release of provisions ${bkE(rel,0)}`]] : []))}
- Recognition :: economically caused in 20X1, uncertain in amount → provision required (§ 249 I HGB)
- Amount :: expected value (${bkE(lo,0)} + ${bkE(hi,0)}) / 2 = ${bkE(exp,0)} + legal fees ${bkE(F,0)} = **${bkE(prov,0)}**
- 20X2 :: paid ${bkE(dmg,0)} + ${bkE(fees,0)} = ${bkE(paid,0)} → ${rel>=0 ? `release **${bkE(rel,0)}** as income` : `provision too small: **${bkE(-rel,0)}** additional expense in 20X2`}`};
}},
{id:'m-accr', mock:true, label:'Mock T5 · Prepaid, deferred income, accrual', topic:'bk-12', gen(){
  const mI = bkPick([9, 10, 11, 12]), MI = bkPick([12, 15, 18, 24]), monI = bkRnd(1, 4)*500, XI = monI*MI, inI = 13 - mI;
  const mM = bkPick([7, 8, 9, 10, 11]), MM = mM>=8 ? bkPick([6, 12]) : 12, monM = bkRnd(2, 8)*500, XM = monM*MM, inM = Math.min(MM, 13 - mM);
  const E = bkRnd(3, 15)*800, pre = XI - inI*monI, def = XM - inM*monM;
  return {q:`(1) On 1 ${BK_MONTHS[mI-1]} 20X1 the company pays ${bkE(XI,0)}€ for ${MI} months of insurance starting that day and books it fully as expense. (2) On 1 ${BK_MONTHS[mM-1]} 20X1 it receives ${bkE(XM,0)}€ for a ${MM}-month maintenance contract and books it fully as revenue. (3) Electricity of ${bkE(E,0)}€ was used in December, invoiced and paid in January. Find the three balance sheet items at 31.12.20X1.`,
    fields:['Prepaid expenses €', 'Deferred income €', 'Accrued liability €'], ans:[pre, def, E],
    sol:`${bkT([[`Prepaid expenses ${bkE(pre,0)}`, `Insurance expense ${bkE(pre,0)}`], [`Service revenue ${bkE(def,0)}`, `Deferred income ${bkE(def,0)}`], [`Electricity expense ${bkE(E,0)}`, `Accrued liability ${bkE(E,0)}`]])}
- Insurance :: ${bkE(XI,0)} / ${MI} = ${bkE(monI,0)} per month; ${inI} month(s) in 20X1 = ${bkE(inI*monI,0)} expense → **${bkE(pre,0)}** prepaid (transitory)
- Maintenance :: ${bkE(XM,0)} / ${MM} = ${bkE(monM,0)} per month; ${inM} month(s) in 20X1 = ${bkE(inM*monM,0)} revenue → **${bkE(def,0)}** deferred income (transitory)
- Electricity :: expense now, cash later → **accrued liability ${bkE(E,0)}** (anticipatory)
- 1 January :: reverse the two deferrals (Insurance expense / Prepaid expenses; Deferred income / Service revenue); in January Accrued liability / Bank`};
}},
{id:'m-prod', mock:true, label:'Mock T6 · Production, inventory, GKV vs UKV profit', topic:'bk-10', gen(){
  const Q = bkRnd(8, 30)*100, q = Q - bkRnd(1, Math.floor(Q/200))*100, DM = bkRnd(15, 45), DL = bkRnd(10, 35), OH = bkRnd(5, 25), u = DM+DL+OH, p = Math.round(u*bkPick([1.4, 1.5, 1.6, 1.8])/5)*5;
  const prod = Q*u, inv = (Q-q)*u, cogs = q*u, rev = q*p, profit = rev - cogs;
  return {q:`A company produces ${bkE(Q,0)} units: direct material ${DM}€, direct labour ${DL}€ and allocable production overhead ${OH}€ per unit. It sells ${bkE(q,0)} units for ${p}€ each. No opening inventory. Find the closing inventory of finished goods, the cost of goods sold and the profit.`,
    fields:['Closing inventory €', 'Cost of goods sold €', 'Profit €'], ans:[inv, cogs, profit],
    sol:`${bkT([[`Finished goods ${bkE(prod,0)}`, `Material, wages and production overhead ${bkE(prod,0)}`], [`Cost of goods sold ${bkE(cogs,0)}`, `Finished goods ${bkE(cogs,0)}`], [`Trade receivables ${bkE(rev,0)}`, `Sales revenue ${bkE(rev,0)}`]])}
- Production cost per unit :: ${DM} + ${DL} + ${OH} = **${u}**; total ${bkE(Q,0)} × ${u} = ${bkE(prod,0)}
- Closing inventory :: ${bkE(Q-q,0)} × ${u} = **${bkE(inv,0)}**; COGS ${bkE(q,0)} × ${u} = **${bkE(cogs,0)}**
- GKV (total cost) :: ${bkE(rev,0)} + inventory increase ${bkE(inv,0)} − production expenses ${bkE(prod,0)} = **${bkE(profit,0)}**
- UKV (cost of sales) :: ${bkE(rev,0)} − ${bkE(cogs,0)} = **${bkE(profit,0)}** — same profit`};
}},
{id:'m-disp', mock:true, label:'Mock T7 · Depreciation pro rata + disposal', topic:'bk-11', gen(){
  const P = bkRnd(6, 30)*10000, I = bkRnd(2, 12)*1000, AC = P + I, n = bkPick([4, 5, 6, 8, 10]), m1 = bkRnd(2, 11), yS = bkRnd(2, Math.min(4, n-1)), mS = bkRnd(3, 11);
  const a = AC/n, d1 = a*(13-m1)/12, mid = a*(yS-2), dS = a*mS/12, acc = d1 + mid + dS, bv = AC - acc;
  const price = Math.round(bv*bkPick([.85, .95, 1.05, 1.12])/500)*500, g = price - bv;
  return {q:`A machine is acquired on 1 ${BK_MONTHS[m1-1]} 20X1 for ${bkE(P,0)}€ plus directly attributable installation costs of ${bkE(I,0)}€. Useful life ${n} years, no residual value, straight-line. It is sold on ${mS===2?28:[4,6,9,11].includes(mS)?30:31} ${BK_MONTHS[mS-1]} 20X${yS} for ${bkE(price,0)}€ by bank transfer. Find the depreciation for 20X1, the carrying amount at disposal and the gain (positive) or loss (negative).`,
    fields:['Depreciation 20X1 €', 'Carrying amount at disposal €', 'Gain (+) / loss (−) €'], ans:[d1, bv, g],
    sol:`${bkT([[`Machinery ${bkE(AC,0)}`, `Bank ${bkE(AC,0)}`], [`Depreciation expense ${bkE(d1)}`, `Accumulated depreciation ${bkE(d1)}`]].concat(yS>2 ? [[`Depreciation expense ${bkE(a)} (each full year)`, `Accumulated depreciation ${bkE(a)}`]] : []).concat([[`Depreciation expense ${bkE(dS)}`, `Accumulated depreciation ${bkE(dS)}`], g>=0 ? [`Bank ${bkE(price,0)}; Accumulated depreciation ${bkE(acc)}`, `Machinery ${bkE(AC,0)}; Gain on disposal ${bkE(g)}`] : [`Bank ${bkE(price,0)}; Accumulated depreciation ${bkE(acc)}; Loss on disposal ${bkE(-g)}`, `Machinery ${bkE(AC,0)}`]]))}
- Acquisition cost :: ${bkE(P,0)} + installation ${bkE(I,0)} = **${bkE(AC,0)}**; annual depreciation ${bkE(AC,0)} / ${n} = ${bkE(a)}
- 20X1 :: ${BK_MONTHS[m1-1]}–December = ${13-m1}/12 → **${bkE(d1)}**${yS>2 ? `\n- Full years :: ${yS-2} × ${bkE(a)} = ${bkE(mid)}` : ''}
- 20X${yS} :: January–${BK_MONTHS[mS-1]} = ${mS}/12 → ${bkE(dS)}
- Carrying amount :: ${bkE(AC,0)} − ${bkE(acc)} = **${bkE(bv)}**
- ${g>=0?'Gain':'Loss'} :: ${bkE(price,0)} − ${bkE(bv)} = **${bkE(g)}**`};
}},
{id:'m-pro', mock:true, label:'Mock T1c · Pro-rata depreciation in the first year', topic:'bk-11', gen(){
  const AC = bkRnd(12, 96)*1000, n = bkPick([3, 4, 5, 6, 8, 10]), m = bkRnd(2, 12), d = AC/n*(13-m)/12;
  return {q:`A machine is acquired for ${bkE(AC,0)}€ and paid immediately. It is ready for use on 1 ${BK_MONTHS[m-1]} 20X1, useful life ${n} years, no residual value, straight-line. Depreciation for 20X1?`,
    fields:['Depreciation 20X1 €'], ans:[d],
    sol:`${bkE(AC,0)} / ${n} × ${13-m}/12 = **${bkE(d)}** (pro rata temporis from the month it is ready for use).
${bkT([[`Machinery ${bkE(AC,0)}`, `Bank ${bkE(AC,0)}`], [`Depreciation expense ${bkE(d)}`, `Accumulated depreciation ${bkE(d)}`]])}
Classification: purchase = cash outflow + expenditure, no expense; depreciation = expense and cost.`};
}}
);

/* ---------- Mock Exam page ---------- */
BK_NAV[1].items.unshift({id:'bk-mock', label:'Mock Exam (Cloer, 135 P)', icon:'doc'});
function bkMockState(){ return ls('bk-mock-state', {}); }
function bkMockPts(){ const st = bkMockState(); let got = 0, rated = 0; BK_MOCK.forEach(c=>c.tasks.forEach(k=>{ const v = st[c.n+'-'+k.id]; if(v!=null){ got += v*k.pts; rated += k.pts; } })); return {got, rated}; }
function bkMockScore(topicId){
  const st = bkMockState(); let s = 0, w = 0;
  BK_MOCK.filter(c=>!topicId || c.topic===topicId).forEach(c=>c.tasks.forEach(k=>{ const v = st[c.n+'-'+k.id]; if(v!=null){ s += v*k.pts; w += k.pts; } }));
  return w ? s/w : null;
}
const __bkTopicScoreMO = bkTopicScore;
bkTopicScore = function(t){ const base = __bkTopicScoreMO(t), m = bkMockScore(t.id); return m==null ? base : base==null ? m : (base + m)/2; };

const __buildSearchIndexMO = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexMO();
  BK_MOCK.forEach(c=>{ const e = {type:'Mock exam', rank:1, title:`Mock Task ${c.n} · ${c.title}`, text:searchFlat(c.intro+' '+c.tasks.map(k=>k.q+' '+k.sol).join(' ')), where:'Bookkeeping · Mock Exam', page:'bk-mock'}; e.norm = searchNorm(e.title+' '+e.text); idx.push(e); });
  return idx;
};
const __planItemPoolMO = planItemPool;
planItemPool = function(){
  const items = __planItemPoolMO(), s = bkMockScore();
  items.push({subj:'bk', label:'Mock Exam (Cloer) — 9 tasks, 135 P, write it timed', page:'bk-mock', weight:s==null ? 1.2 : Math.max(.3, 1-s), size:20, large:true, prio:s==null || s<.85});
  return items;
};

let bkMockSel = null;
function bkCalcOpenMock(){ bkCalcKind = 'mock'; navTo('bk-calc'); const pg = document.getElementById('page-bk-calc'); if(pg && pg.__show) pg.__show(); }
function buildBKMock(){
  registerPage('bk-mock', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Practice · Cloer's mock exam 21.11.</div><h2>Mock Exam</h2><p>The official mock with Cloer's model solutions. Write your answer, reveal, rate yourself: the hub adds up your estimated points out of 135.</p></div>
      <div class="page-body">
        <div class="bk-tut-intro glass">${bkRich(BK_MOCK_FORMAT)}</div>
        <div class="bk-score-row"><span class="bk-live bk-mo-live"></span><button class="btn ghost" onclick="bkCalcOpenMock()">Same tasks with new numbers →</button><button class="btn ghost bk-mo-reset">Reset ratings</button></div>
        <div class="chip-row bk-filter bk-mo-chips"></div>
        <div class="bk-tut-body bk-mo-body"></div>
      </div>`;
    const chips = div.querySelector('.bk-mo-chips'), body = div.querySelector('.bk-mo-body');
    const live = ()=>{ const p = bkMockPts(); div.querySelector('.bk-mo-live').textContent = p.rated ? `Estimated: ${bkE(p.got,1)} / ${bkE(p.rated,1)} P rated (${Math.round(p.got/p.rated*100)}%) · 135 P total` : 'Not rated yet · 135 P total'; };
    const pct = c=>{ const st = bkMockState(); let s = 0, any = false; c.tasks.forEach(k=>{ const v = st[c.n+'-'+k.id]; if(v!=null){ any = true; s += v*k.pts; } }); return any ? Math.round(s/c.pts*100) : null; };
    const drawChips = ()=>{ chips.innerHTML = BK_MOCK.map(c=>{ const p = pct(c); return `<button class="chip${c.n===bkMockSel?' active':''}" data-n="${c.n}">T${c.n} · ${esc(c.title.split(/ and | with |,/)[0])} · ${c.pts} P${p!=null?` · ${p}%`:''}</button>`; }).join(''); live(); };
    const rateRow = key=>{ const v = bkMockState()[key]; return `<div class="bk-rate"><span>How did you do?</span>${[[1,'Full points'],[.5,'About half'],[0,'Not yet']].map(([val,l])=>`<button class="chip${v===val?' active':''}" data-rate="${val}">${l}</button>`).join('')}</div>`; };
    const show = n=>{
      bkMockSel = n || bkMockSel || ls('bk-mock-sel', 1); lsSet('bk-mock-sel', bkMockSel);
      const c = BK_MOCK.find(x=>x.n===bkMockSel) || BK_MOCK[0], t = BK_TOPICS.find(x=>x.id===c.topic), answers = ls('bk-mock-ans', {});
      drawChips();
      body.innerHTML = `<div class="bk-tut-head"><h3>Task ${c.n} · ${esc(c.title)} (${c.pts} points)</h3><div class="chip-row">${t?`<button class="chip" onclick="navTo('${t.id}')">Chapter ${t.ch} · ${esc(t.title)}</button>`:''}</div></div>
        <div class="bk-tut-intro glass">${bkRich(c.intro)}</div>
        ${c.tasks.map(k=>{ const key = c.n+'-'+k.id; return `<div class="drill-card glass bk-tut-task" data-key="${key}">
          <div class="bk-tut-q">${tutQ(bkRich(k.q))} <span class="qtag">${k.pts} P</span></div>
          <textarea class="bk-tut-ans" rows="5" placeholder="Debit / Soll … — Credit / Haben … and your calculation (saved on this device)">${esc(answers[key]||'')}</textarea>
          <div class="ans-actions"><button class="btn" data-a="sol">Show model solution</button></div>
          <div class="bk-tut-sol" hidden>${bkRich(k.sol)}${rateRow(key)}</div>
        </div>`; }).join('')}`;
    };
    body.addEventListener('input', ev=>{ const ta = ev.target.closest('.bk-tut-ans'); if(!ta) return; const a = ls('bk-mock-ans', {}); a[ta.closest('.bk-tut-task').dataset.key] = ta.value; lsSet('bk-mock-ans', a); });
    body.addEventListener('click', ev=>{
      const task = ev.target.closest('.bk-tut-task'); if(!task) return;
      const key = task.dataset.key, b = ev.target.closest('[data-a],[data-rate]'); if(!b) return;
      if(b.dataset.a==='sol'){ const sol = task.querySelector('.bk-tut-sol'); sol.hidden = !sol.hidden; b.textContent = sol.hidden ? 'Show model solution' : 'Hide model solution'; }
      if(b.dataset.rate!=null){ const st = bkMockState(); st[key] = +b.dataset.rate; lsSet('bk-mock-state', st); task.querySelectorAll('[data-rate]').forEach(x=>x.classList.toggle('active', x===b)); drawChips(); }
    });
    chips.addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; show(+c.dataset.n); window.scrollTo({top:0, behavior:'smooth'}); });
    div.querySelector('.bk-mo-reset').addEventListener('click', ()=>{ lsSet('bk-mock-state', {}); show(bkMockSel); });
    show(bkMockSel);
  });
}

const __buildBKClassMO = buildBKClass;
buildBKClass = function(){
  __buildBKClassMO();
  buildBKMock();
  bkRwPatchLazy('bk-home', div=>{
    const tile = div.querySelector('.tool-tile'); if(!tile) return;
    tile.insertAdjacentHTML('beforebegin', `<div class="tool-tile" onclick="navTo('bk-mock')"><div class="ic">${icon('doc')}</div><h4>Mock Exam</h4><p>Cloer's mock: 9 tasks, 135 P, model solutions.</p></div>`);
  });
};
