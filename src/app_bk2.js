/* ============================================================ BOOKKEEPING — NUMBER DRILLS + CLOSING TRAINER ============================================================ */
// Loaded last. Fresh numbers in the course's own conventions (§ 255 HGB scheme, the depreciation methods of chapter 11,
// VAT 19%, deferrals of chapter 12) and full mini closings: OBSA → bookings → T-accounts → P&L → equity → CBSA.
function bkR(x, d=2){ const f = Math.pow(10, d); return Math.round(x*f + (x>=0?1e-9:-1e-9))/f; }
function bkE(x, d=2){ const v = bkR(x, d); return (Object.is(v,-0)?0:v).toLocaleString('en-US', {minimumFractionDigits:d, maximumFractionDigits:d}); }
function bkRnd(a, b, step=1){ return a + step*Math.floor(Math.random()*(Math.floor((b-a)/step)+1)); }
function bkPick(a){ return a[Math.floor(Math.random()*a.length)]; }
function bkNum(v){ const t = String(v||'').trim().replace(/[€\s]/g,'').replace(/,(?=\d{3}(\D|$))/g,'').replace(',', '.'); return t==='' ? NaN : Number(t); }

const BK_CALC_KINDS = [
{id:'ac', label:'Acquisition costs (§ 255 para. 1 HGB)', topic:'bk-8', gen(){
  const P = bkRnd(20, 120, 5)*1000, reb = bkPick([0, 2, 3, 5]), disc = bkPick([0, 2, 3]), freight = bkRnd(5, 40)*100, inst = bkRnd(10, 60)*100;
  const interest = bkRnd(5, 30)*100, mkt = bkRnd(5, 20)*100, imputed = bkRnd(10, 30)*100;
  const afterReb = P*(1-reb/100), discAmt = afterReb*disc/100, AC = afterReb - discAmt + freight + inst;
  return {q:`A company buys a machine. List price ${bkE(P,0)}€ net${reb?`, rebate ${reb}% agreed in the contract`:''}${disc?`; the invoice is paid within the discount period with ${disc}% cash discount`:''}. Further: freight ${bkE(freight,0)}€, installation ${bkE(inst,0)}€, interest on the loan that financed the machine ${bkE(interest,0)}€, an advert announcing the new product line ${bkE(mkt,0)}€, imputed costs for choosing the supplier ${bkE(imputed,0)}€ (all net). What are the acquisition costs?`,
    fields:['Acquisition costs €'], ans:[AC],
    sol:`Scheme of § 255 para. 1 HGB (net amounts — input tax is a receivable):
- Price of acquisition :: ${bkE(P,0)}${reb?` − ${reb}% rebate = ${bkE(afterReb)}`:''}
${disc?`- ./. Cash discount :: ${disc}% of ${bkE(afterReb)} = −${bkE(discAmt)} (paid within the period, so it reduces the acquisition costs)\n`:''}- + Ancillary costs :: freight ${bkE(freight,0)} + installation ${bkE(inst,0)} (directly assignable)
- Not included :: financing interest (expense), the advert (distribution costs), imputed costs (never booked)

**Acquisition costs = ${bkE(AC)}€**`};
}},
{id:'sl', label:'Straight-line depreciation', topic:'bk-11', gen(){
  const AC = bkRnd(12, 90)*1000, n = bkPick([4,5,6,8,10]), rv = bkPick([0,0,0,AC*0.1]), k = bkRnd(2, n-1);
  const a = (AC-rv)/n, bv = AC - k*a;
  return {q:`A machine costs ${bkE(AC,0)}€${rv?` and is expected to have a residual value of ${bkE(rv,0)}€`:''}, useful life ${n} years, straight-line depreciation (bought at the start of year 1). Find the annual depreciation and the book value at the end of year ${k}.`,
    fields:['Annual depreciation €', `Book value end of year ${k} €`], ans:[a, bv],
    sol:`Depreciation base = ${rv?`acquisition costs − residual value = ${bkE(AC,0)} − ${bkE(rv,0)} = ${bkE(AC-rv,0)}`:`acquisition costs ${bkE(AC,0)}`}.
Annual depreciation = ${bkE(AC-rv,0)} / ${n} = **${bkE(a)}€**.
Book value end of year ${k} = ${bkE(AC,0)} − ${k} × ${bkE(a)} = **${bkE(bv)}€**.
Booking every year: Debit Depreciation ${bkE(a)} / Credit Machinery ${bkE(a)}.`};
}},
{id:'geo', label:'Geometric-declining depreciation', topic:'bk-11', gen(){
  const AC = bkRnd(10, 80)*1000, p = bkPick([20, 25, 30]), k = bkRnd(2, 4);
  let bv = AC; const rows = []; for(let t=1;t<=k;t++){ const d = bv*p/100; rows.push([t, d, bv-d]); bv -= d; }
  return {q:`Acquisition costs ${bkE(AC,0)}€, geometric-declining (book value) depreciation of ${p}% per year. Find the depreciation in year ${k} and the book value at the end of year ${k}.`,
    fields:[`Depreciation year ${k} €`, `Book value end of year ${k} €`], ans:[rows[k-1][1], rows[k-1][2]],
    sol:`Each year ${p}% of the **remaining book value**:
[[t:Depreciation plan
Year|Depreciation|Book value
${rows.map(r=>`${r[0]}|${bkE(r[1])}|${bkE(r[2])}`).join('\n')}]]
The book value never reaches zero with this method. (Currently not allowed for tax purposes.)`};
}},
{id:'switch', label:'Switch from declining to straight-line', topic:'bk-11', gen(){
  const [n, p] = bkPick([[10,25],[8,25],[10,20],[5,40],[8,20],[12,25]]), AC = bkRnd(10, 60)*1000;
  const t = n - 100/p + 1; let bv = AC; for(let y=1;y<t;y++) bv -= bv*p/100; const sl = bv/(n-t+1);
  return {q:`Acquisition costs ${bkE(AC,0)}€, useful life ${n} years, declining depreciation of ${p}%. In which year is the switch to straight-line optimal, and what is the straight-line amount from then on?`,
    fields:['Switch year', 'Straight-line amount from then on €'], ans:[t, sl], tol:[0, .6],
    sol:`Optimal switch year: $t = n - \\frac{100}{p} + 1 = ${n} - \\frac{100}{${p}} + 1 = ${t}$.
Book value at the end of year ${t-1}: ${bkE(AC,0)} × ${(1-p/100).toFixed(2)}^${t-1} = ${bkE(bv)}.
Straight-line on the remaining ${n-t+1} years: ${bkE(bv)} / ${n-t+1} = **${bkE(sl)}€** per year, so the book value reaches 0 at the end of year ${n}.`};
}},
{id:'digital', label:'Digital (sum-of-the-years) & performance-related', topic:'bk-11', gen(){
  if(Math.random()<.5){
    const AC = bkRnd(20, 120)*1000, rv = bkPick([0, 2000, 5000]), n = bkPick([4,5,6,10]), k = bkRnd(1, 3);
    const S = n*(n+1)/2, D = (AC-rv)/S, a = D*(n-k+1);
    return {q:`Acquisition costs ${bkE(AC,0)}€${rv?`, residual value ${bkE(rv,0)}€`:''}, useful life ${n} years, digital (arithmetic-degressive) depreciation. Find the depreciation in year ${k}.`,
      fields:[`Depreciation year ${k} €`], ans:[a],
      sol:`Digression amount $D = \\frac{\\text{cost} - \\text{residual value}}{1 + 2 + \\dots + n} = \\frac{${AC-rv}}{${S}} = ${bkE(D)}$.
Year ${k} = D × remaining years = ${bkE(D)} × ${n-k+1} = **${bkE(a)}€**. (Not allowed for tax purposes.)`};
  }
  const AC = bkRnd(40, 200)*1000, rv = bkPick([0, 10000]), H = bkPick([400000, 500000, 800000, 1000000]), h = bkRnd(5, 30)*1000;
  const a = (AC-rv)/H*h;
  return {q:`A machine costs ${bkE(AC,0)}€${rv?`, residual value ${bkE(rv,0)}€`:''}, total expected performance ${bkE(H,0)} machine hours. This year it ran ${bkE(h,0)} hours. Performance-related depreciation?`,
    fields:['Depreciation €'], ans:[a],
    sol:`(cost − residual value) / total performance × actual use = ${bkE(AC-rv,0)} / ${bkE(H,0)} × ${bkE(h,0)} = **${bkE(a)}€**. Allowed in commercial and tax law.`};
}},
{id:'vat', label:'VAT payable (input tax vs output VAT)', topic:'bk-6', gen(){
  const buy = bkRnd(10, 80)*1000, sell = bkRnd(30, 150)*1000, it = buy*.19, vat = sell*.19;
  return {q:`In one month a company buys goods for ${bkE(buy,0)}€ net and sells goods for ${bkE(sell,0)}€ net (both with 19% VAT). Find the input tax, the output VAT and the amount payable to the tax office.`,
    fields:['Input tax €', 'Output VAT €', 'VAT payable €'], ans:[it, vat, vat-it],
    sol:`- Input tax :: 19% × ${bkE(buy,0)} = ${bkE(it)} — a receivable against the tax office (Debit Input tax)
- Output VAT :: 19% × ${bkE(sell,0)} = ${bkE(vat)} — a liability (Credit VAT)
- VAT payable :: ${bkE(vat)} − ${bkE(it)} = **${bkE(vat-it)}€** — close Input tax into VAT: Debit VAT / Credit Input tax ${bkE(it)}, then pay: Debit VAT / Credit Bank ${bkE(vat-it)}

VAT is neutral for the company's profit — it only passes through.`};
}},
{id:'disc', label:'Cash discount at payment (net booking)', topic:'bk-8', gen(){
  const N = bkRnd(5, 60)*100, d = bkPick([2, 3]), G = N*1.19, dG = G*d/100, dN = N*d/100, dT = dN*.19;
  return {q:`Office equipment is bought on credit for ${bkE(N,0)}€ net + 19% VAT. The invoice is paid within the discount period with ${d}% cash discount. Find the bank payment, the reduction of the asset and the correction of the input tax.`,
    fields:['Bank payment €', 'Reduction of the asset €', 'Input tax correction €'], ans:[G-dG, dN, dT],
    sol:`At purchase: Debit Factory & office equipment ${bkE(N)}, Debit Input tax ${bkE(N*.19)} / Credit Trade payables ${bkE(G)}.
Discount on the gross amount: ${d}% × ${bkE(G)} = ${bkE(dG)}, split into ${bkE(dN)} (asset) + ${bkE(dT)} (input tax).
At payment: Debit Trade payables ${bkE(G)} / Credit Factory & office equipment **${bkE(dN)}**, Credit Input tax **${bkE(dT)}**, Credit Bank **${bkE(G-dG)}**.
The acquisition costs fall to ${bkE(N-dN)}.`};
}},
{id:'defer', label:'Deferred expense / income at 31.12.', topic:'bk-12', gen(){
  const m0 = bkPick([10, 11, 12]), M = bkPick([3, 6, 12].filter(v=>v>12-m0+1)), mon = bkRnd(1, 5)*1000, X = mon*M, inYear = 12-m0+1, pre = M-inYear;
  const who = bkPick(['tenant','landlord']);
  const mName = {10:'1 October', 11:'1 November', 12:'1 December'}[m0];
  return {q:`On ${mName} the ${who} ${who==='tenant'?'pays':'receives'} rent of ${bkE(X,0)}€ by bank for ${M} months in advance (no VAT). How much must be deferred on 31.12., and how much ${who==='tenant'?'expense':'earning'} belongs to this year?`,
    fields:['Deferred amount €', `${who==='tenant'?'Expense':'Earning'} this year €`], ans:[pre*mon, inYear*mon],
    sol:`Monthly rent ${bkE(mon,0)}. Months in this year: ${inYear} → ${bkE(inYear*mon,0)} belongs to this year. Months in the next year: ${pre} → **${bkE(pre*mon,0)}** must be deferred (realisation: expenses and earnings belong to the period of the service).
${who==='tenant' ? `Lecture method: Debit Rental expense ${bkE(inYear*mon,0)}, Debit Deferred expense ${bkE(pre*mon,0)} / Credit Bank ${bkE(X,0)}.` : `Lecture method: Debit Bank ${bkE(X,0)} / Credit Rental earnings ${bkE(inYear*mon,0)}, Credit Deferred income ${bkE(pre*mon,0)}.`}
In the next year the deferral is released into ${who==='tenant'?'expense':'earnings'}.`};
}}
];

function bkCalcStats(){ return ls('bk-calc-stats', {}); }
function buildBKCalc(){
  registerPage('bk-calc', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('calc')} Practice</div><h2>Number Drills</h2><p>The calculations behind the booking entries, with fresh numbers: acquisition costs, every depreciation method, VAT payable, cash discount and deferrals. Solve on paper, type the results (rounded to cents), check — one try, then the full solution with the booking entries.</p></div>
      <div class="page-body">
        <div class="chip-row bk-ckinds"><button class="chip" data-k="mixed">Mixed</button>${BK_CALC_KINDS.map(k=>`<button class="chip" data-k="${k.id}">${esc(k.label)}</button>`).join('')}</div>
        <div class="bk-score-row"><span class="bk-live bk-c-live"></span><button class="btn ghost bk-c-reset">Reset session</button></div>
        <div class="drill-card glass bk-c-card"></div>
      </div>`;
    const card = div.querySelector('.bk-c-card');
    let kind = 'mixed', cur, curK, done, ok = 0, n = 0;
    const live = ()=>{ const v = curK && bkCalcStats()[curK.id]; div.querySelector('.bk-c-live').textContent = `This session: ${ok}/${n}` + (v ? ` · ${curK.label}: ${v.ok}/${v.n} overall` : ''); };
    const next = ()=>{
      curK = kind==='mixed' ? bkPick(BK_CALC_KINDS) : BK_CALC_KINDS.find(k=>k.id===kind); cur = curK.gen(); done = false;
      const t = BK_TOPICS.find(x=>x.id===curK.topic);
      card.innerHTML = `<div class="qtag">${esc(curK.label)} · Ch. ${t.ch}</div><div class="bk-task">${mathText(cur.q)}</div>
        <div class="drill-fields">${cur.fields.map(f=>`<label>${esc(f)} <input type="text" inputmode="decimal"></label>`).join('')}</div>
        <div class="ans-actions"><button class="btn" data-d="check">Check</button><button class="btn ghost" data-d="next">New task →</button></div><div class="ans-feedback"></div>`;
      live(); const f = card.querySelector('input'); if(f) f.focus();
    };
    const check = ()=>{
      if(done) return; const ins = [...card.querySelectorAll('.drill-fields input')]; const vals = ins.map(i=>bkNum(i.value));
      if(vals.some(isNaN)){ const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show warn'; fb.textContent = 'Fill in every field with a number first.'; return; }
      done = true; n++;
      const okEach = vals.map((v,i)=>Math.abs(v-cur.ans[i]) <= ((cur.tol && cur.tol[i]!=null) ? cur.tol[i] : Math.max(.6, Math.abs(cur.ans[i])*.001))+1e-9);
      ins.forEach((inp,i)=>inp.classList.add(okEach[i]?'st-ok':'st-bad')); const good = okEach.every(Boolean); if(good) ok++;
      const st = bkCalcStats(); st[curK.id] = st[curK.id] || {ok:0, n:0}; st[curK.id].n++; if(good) st[curK.id].ok++; lsSet('bk-calc-stats', st);
      const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(good?'good':'warn');
      fb.innerHTML = (good?'<b>Correct.</b>':`<b>Not quite.</b> Expected: ${cur.fields.map((f,i)=>`${esc(f)} = ${bkE(cur.ans[i], Number.isInteger(cur.ans[i])?0:2)}`).join(', ')}.`) + `<div class="st-sol">${bkRich(cur.sol)}</div>`;
      live();
    };
    card.addEventListener('click', ev=>{ const b = ev.target.closest('[data-d]'); if(!b) return; if(b.dataset.d==='check') check(); else next(); });
    card.addEventListener('keydown', ev=>{ if(ev.key==='Enter'){ if(done) next(); else check(); } });
    div.querySelector('.bk-ckinds').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(!c) return; kind = c.dataset.k; div.querySelectorAll('.bk-ckinds .chip').forEach(x=>x.classList.toggle('active', x===c)); next(); });
    div.querySelector('.bk-c-reset').addEventListener('click', ()=>{ ok = 0; n = 0; next(); });
    div.querySelector('.bk-ckinds .chip').classList.add('active');
    next();
  });
}

/* ---------- Closing Trainer: a small company through one whole year ---------- */
const BK_CLOSE_TX = [
  // [id, text(x), debit, credit, amount range, condition(state, x)]
  ['buyRaw', x=>`Raw materials are bought on credit for ${bkE(x,0)}€.`, 'Raw materials', 'Trade payables', [2,12]],
  ['paySup', x=>`A supplier invoice of ${bkE(x,0)}€ is paid by bank transfer.`, 'Trade payables', 'Bank', [1,8], (s,x)=>s['Trade payables']>=x && s.Bank>=x],
  ['custPay', x=>`A customer pays an open invoice of ${bkE(x,0)}€ into the bank account.`, 'Bank', 'Trade receivables', [1,8], (s,x)=>s['Trade receivables']>=x],
  ['repay', x=>`A loan instalment of ${bkE(x,0)}€ is repaid by bank.`, 'Loan / Liability', 'Bank', [2,10], (s,x)=>s['Loan / Liability']>=x && s.Bank>=x],
  ['buyMach', x=>`A machine is bought for ${bkE(x,0)}€ by bank transfer.`, 'Machinery', 'Bank', [5,15], (s,x)=>s.Bank>=x],
  ['sale', x=>`Services are invoiced to a customer for ${bkE(x,0)}€ (on credit).`, 'Trade receivables', 'Sales revenue', [10,30]],
  ['wages', x=>`Wages and rent of ${bkE(x,0)}€ are paid by bank.`, 'Expense', 'Bank', [4,14], (s,x)=>s.Bank>=x],
  ['rentIn', x=>`Rent of ${bkE(x,0)}€ for a sublet office is received by bank.`, 'Bank', 'Rental earnings', [1,5]],
  ['depr', x=>`Depreciation on machinery of ${bkE(x,0)}€ is recorded.`, 'Depreciation', 'Machinery', [2,8], (s,x)=>s.Machinery>=x]
];
const BK_CLOSE_ASSETS = ['Machinery','Raw materials','Trade receivables','Bank'], BK_CLOSE_LIABS = ['Equity','Loan / Liability','Trade payables'], BK_CLOSE_PL = ['Sales revenue','Rental earnings','Expense','Depreciation'];
function bkCloseGen(){
  const o = {Machinery:bkRnd(40,90)*1000, 'Raw materials':bkRnd(5,20)*1000, 'Trade receivables':bkRnd(5,20)*1000, Bank:bkRnd(15,40)*1000, 'Loan / Liability':bkRnd(20,50)*1000, 'Trade payables':bkRnd(5,15)*1000};
  o.Equity = o.Machinery + o['Raw materials'] + o['Trade receivables'] + o.Bank - o['Loan / Liability'] - o['Trade payables'];
  if(o.Equity<10000){ o.Machinery += 20000; o.Equity += 20000; }
  const s = {...o}; BK_CLOSE_PL.forEach(a=>s[a]=0);
  const tx = []; const must = ['sale','wages','depr']; const pool = shuffle(BK_CLOSE_TX.map(t=>t[0]).filter(id=>!must.includes(id))).slice(0,3);
  shuffle(must.concat(pool)).forEach(id=>{
    const T = BK_CLOSE_TX.find(t=>t[0]===id);
    for(let tries=0; tries<20; tries++){
      const x = bkRnd(T[4][0], T[4][1])*1000; if(T[5] && !T[5](s,x)) continue;
      s[T[2]] += (BK_CLOSE_LIABS.includes(T[2]) ? -x : x);
      s[T[3]] += (BK_CLOSE_ASSETS.includes(T[3]) ? -x : x);
      tx.push({id, text:T[1](x), d:T[2], c:T[3], x}); break;
    }
  });
  const earn = s['Sales revenue'] + s['Rental earnings'], exp = s.Expense + s.Depreciation, profit = earn - exp;
  const eqEnd = o.Equity + profit, total = BK_CLOSE_ASSETS.reduce((a,k)=>a+s[k],0);
  return {o, s, tx, earn, exp, profit, eqEnd, total};
}
function bkCloseSolution(c){
  const rows = BK_CLOSE_ASSETS.concat(BK_CLOSE_LIABS).map(a=>{
    const isA = BK_CLOSE_ASSETS.includes(a);
    let dSum = isA ? c.o[a] : 0, cSum = isA ? 0 : c.o[a];
    c.tx.forEach(t=>{ if(t.d===a) dSum += t.x; if(t.c===a) cSum += t.x; });
    if(a==='Equity') cSum += Math.max(0, c.profit), dSum += Math.max(0, -c.profit);
    const close = isA ? dSum - cSum : cSum - dSum;
    return `${a}|${bkE(c.o[a],0)}|${bkE(isA ? dSum - c.o[a] : dSum,0)}|${bkE(isA ? cSum : cSum - c.o[a],0)}|${bkE(close,0)}`;
  });
  return `**1. Booking entries** (each one: Debit / Credit):
${c.tx.map((t,i)=>`- ${i+1} :: Debit ${t.d} ${bkE(t.x,0)} / Credit ${t.c} ${bkE(t.x,0)}`).join('\n')}

**2. Balance sheet accounts** — opened via the OBSA (assets: Debit asset / Credit OBSA; liabilities: Debit OBSA / Credit liability):
[[t:T-accounts (Debit additions incl. opening on the asset side, Credit additions incl. opening on the liability side)
Account|Opening|Debit (bookings)|Credit (bookings)|Closing
${rows.join('\n')}]]

**3. P&L account** — expense and earnings accounts are closed into it:
- Earnings :: Sales revenue ${bkE(c.s['Sales revenue'],0)} + Rental earnings ${bkE(c.s['Rental earnings'],0)} = ${bkE(c.earn,0)} (credit side of P&L)
- Expenses :: Expense ${bkE(c.s.Expense,0)} + Depreciation ${bkE(c.s.Depreciation,0)} = ${bkE(c.exp,0)} (debit side of P&L)
- ${c.profit>=0?'Net profit':'Net loss'} :: ${bkE(Math.abs(c.profit),0)} → ${c.profit>=0?`Debit P&L / Credit Equity ${bkE(c.profit,0)}`:`Debit Equity / Credit P&L ${bkE(-c.profit,0)}`}

**4. Equity and CBSA:** equity ${bkE(c.o.Equity,0)} ${c.profit>=0?'+':'−'} ${bkE(Math.abs(c.profit),0)} = **${bkE(c.eqEnd,0)}**. Every balance sheet account is closed into the CBSA (assets: Debit CBSA / Credit asset). Balance sheet total = sum of the closing asset balances = **${bkE(c.total,0)}** = equity + loan + trade payables ✓`;
}
function buildBKClose(){
  registerPage('bk-close', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Closing Trainer</h2><p>One small company through a whole year: opening balance sheet, six business transactions, then close the books. Draw the T-accounts on paper (open via OBSA, book every transaction, close expenses and earnings via P&L, P&L via equity, everything else via CBSA) and enter the results. VAT is ignored here so the closing logic stays in focus.</p></div>
      <div class="page-body">
        <div class="bk-score-row"><span class="bk-live bk-cl-live"></span><button class="btn ghost bk-cl-new">New company →</button></div>
        <div class="drill-card glass bk-cl-card"></div>
      </div>`;
    const card = div.querySelector('.bk-cl-card'); let c, done;
    const FIELDS = [['Bank', x=>x.s.Bank], ['Trade receivables', x=>x.s['Trade receivables']], ['Machinery', x=>x.s.Machinery], ['Trade payables', x=>x.s['Trade payables']], ['Net profit (loss negative)', x=>x.profit], ['Equity at year end', x=>x.eqEnd], ['Balance sheet total', x=>x.total]];
    const live = ()=>{ const v = ls('bk-close-stats', null); div.querySelector('.bk-cl-live').textContent = v && v.n ? `Closings fully correct: ${v.ok}/${v.n}` : 'No closings yet'; };
    const next = ()=>{
      c = bkCloseGen(); done = false;
      card.innerHTML = `<div class="qtag">Opening balance sheet (€)</div>
        <div class="bk-cl-bs"><table class="bk-entry"><thead><tr><th>Assets</th><th class="num">€</th></tr></thead><tbody>${BK_CLOSE_ASSETS.map(a=>`<tr><td>${a}</td><td class="num">${bkE(c.o[a],0)}</td></tr>`).join('')}</tbody></table>
        <table class="bk-entry"><thead><tr><th>Equity & liabilities</th><th class="num">€</th></tr></thead><tbody>${BK_CLOSE_LIABS.map(a=>`<tr><td>${a}</td><td class="num">${bkE(c.o[a],0)}</td></tr>`).join('')}</tbody></table></div>
        <div class="qtag" style="margin-top:14px">Business transactions during the year</div>
        <ol class="bk-cl-tx">${c.tx.map(t=>`<li>${esc(t.text)}</li>`).join('')}</ol>
        <div class="qtag" style="margin-top:14px">Your results after closing (€)</div>
        <div class="drill-fields">${FIELDS.map(([l])=>`<label>${esc(l)} <input type="text" inputmode="decimal"></label>`).join('')}</div>
        <div class="ans-actions"><button class="btn" data-d="check">Check</button><button class="btn ghost" data-d="sol">Show solution</button></div><div class="ans-feedback"></div>`;
      live();
    };
    const finish = (checked)=>{
      const fb = card.querySelector('.ans-feedback'); let good = true;
      if(checked){
        const ins = [...card.querySelectorAll('.drill-fields input')];
        ins.forEach((inp,i)=>{ const v = bkNum(inp.value), a = FIELDS[i][1](c); const ok = !isNaN(v) && Math.abs(v-a)<=.5; if(!ok) good = false; inp.classList.add(ok?'st-ok':'st-bad'); });
        if(!done){ done = true; const v = ls('bk-close-stats', {ok:0, n:0}); v.n++; if(good) v.ok++; lsSet('bk-close-stats', v); }
      }
      fb.className = 'ans-feedback show '+(!checked ? '' : good ? 'good' : 'warn');
      fb.innerHTML = (checked ? (good ? '<b>All results correct.</b>' : `<b>Not everything matches.</b> Expected: ${FIELDS.map(([l,f])=>`${esc(l)} ${bkE(f(c),0)}`).join(' · ')}.`) : '') + `<div class="st-sol">${bkRich(bkCloseSolution(c))}</div>`;
      live();
    };
    card.addEventListener('click', ev=>{ const b = ev.target.closest('[data-d]'); if(!b) return; finish(b.dataset.d==='check'); });
    div.querySelector('.bk-cl-new').addEventListener('click', next);
    next();
  });
}

/* ---------- study plan ---------- */
const __planItemPoolMKCB = planItemPool;
planItemPool = function(){
  const items = __planItemPoolMKCB();
  const st = bkCalcStats(); let ok = 0, n = 0; Object.values(st).forEach(v=>{ ok += v.ok; n += v.n; });
  items.push({subj:'bk', label:'Number Drills — acquisition costs, depreciation, VAT, deferrals', page:'bk-calc', weight:n ? Math.max(.2, 1-ok/n) : .9, size:16, large:true, prio:!n || ok/n<.7});
  const c = ls('bk-close-stats', null);
  items.push({subj:'bk', label:'Closing Trainer — one company through a whole year', page:'bk-close', weight:c && c.n ? Math.max(.2, 1-c.ok/c.n) : .9, size:14, large:true, prio:!c || !c.n || c.ok/c.n<.7});
  return items;
};
const __planScheduleMKCB = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='bk-calc'){ const h = planDaysLeft('bk'); return Array.from(new Set([Math.max(1,h-28), Math.max(1,h-14), Math.max(1,h-6), Math.max(1,h-2)])); }
  if(item.page==='bk-close'){ const h = planDaysLeft('bk'); return Array.from(new Set([Math.max(1,h-21), Math.max(1,h-9), Math.max(1,h-3)])); }
  return __planScheduleMKCB(item, idx);
};
