/* ============================================================ DECISION THEORY & INVESTMENTS DATA (Prof. Raša Karapandža) ============================================================ */
// Exam tool only. Each past-exam task is a generator call (DT_GEN in app_dt.js) with the exam's own numbers, so
// solutions are computed, not typed. Never write the dollar sign in text (KaTeX delimiter) — use USD.
// Answer keys were checked against our own calculation; differences are shown as notes/flags on the task.
const PLAN_EXAM_DT = new Date(2026,11,18); // written exam 18.12.2026, 09:00–10:30

const DT_TYPES = [
  {id:'pvadd', label:'Adding present values', short:'PV add', pts:2, desc:'PVs are additive; duration is a distractor'},
  {id:'perp', label:'Retirement perpetuity', short:'Perpetuity', pts:4, desc:'C / r with the rate per payment period'},
  {id:'fwd', label:'Forward rate from the spot curve', short:'Forward', pts:6, desc:'no arbitrage, semiannual / continuous / annual / quarterly quotes'},
  {id:'mort', label:'Mortgage / annuity', short:'Mortgage', pts:4, desc:'payment or number of months of an ordinary annuity'},
  {id:'bond', label:'Bond priced off the spot curve', short:'Bond', pts:11, desc:'timeline, PV of coupons, PV of last payment, price'},
  {id:'proj', label:'Project NPV with irregular cash flows', short:'Project NPV', pts:13, desc:'timeline, segment PVs, growing perpetuity, NPV'},
  {id:'rates', label:'Fisher & effective rates', short:'Rates', pts:4, desc:'real vs nominal, daily compounding, EAR'},
  {id:'port', label:'Portfolio return & risk', short:'Portfolio', pts:11, desc:'value weights, expected return, standard deviation'},
  {id:'capm', label:'CAPM & beta', short:'CAPM', pts:3, desc:'risk premium, expected return, diversified investor'},
  {id:'dur', label:'Duration & interest-rate risk', short:'Duration', pts:3, desc:'Macaulay duration in years'},
  {id:'irr', label:'Internal rate of return', short:'IRR', pts:4, desc:'two-period IRR via quadratic, accept/reject'},
  {id:'dec', label:'Decision rules & expected utility', short:'Decisions', pts:25, desc:'outcome matrix, Maximin, Maximax, Hurwicz, Laplace, expected value, expected utility'},
  {id:'ret', label:'Stock returns', short:'Returns', pts:4, desc:'holding period return with dividends'}
];

const DT_T25 = [3.52,3.58,3.61,3.74,3.89,3.98,4.05,4.12,4.18,4.24,4.45];
const DT_T19 = [1.52,1.55,1.53,1.56,1.57,1.61,1.64,1.67,1.78,1.84,2.14];
const DT_T18 = [2.32,2.40,2.40,2.54,2.68,2.72,2.72,2.70,2.77,2.85,3.01];
const DT_T17 = [1.18,1.33,1.47,1.69,1.82,1.95,2.16,2.30,2.39,2.59,2.77];
const DT_T16 = [0.41,0.54,0.64,0.85,1.15,1.43,1.89,2.26,2.47,2.87,3.16];
function dtDoubling(cf, from, to){ for(let t=from;t<=to;t++) cf[t] = cf[t-1]*2; return cf; }
const DT_SIM_CF = (()=>{ const cf = {1:200, 2:200, 3:200}; for(let t=4;t<=10;t++) cf[t] = 200*Math.pow(.95, t-3); return cf; })();

const DT_EXAMS = [
/* ---------------------------------------------------------------- FT 2025 ---------------------------------------------------------------- */
{id:'ft25', title:'Exam FT 2025', short:'FT 25', when:'19 Dec 2025', kind:'Real exam · answer key', latest:true,
 desc:'The newest real exam (90 min, 90 points, 12 tasks) — the layout to expect. Write it in 90 minutes on paper, then type in your results task by task.',
 notes:['**Q6 d/e — the key discounts one year too many.** $C_{13}/(r-g) = 640{,}000$ is the value at **year 12** (one year before the first payment), so it must be divided by $1.08^{12}$, not $1.08^{13}$: PV = 254,152.80 and NPV = 77,568.29 (key: 235,326.67 and 58,742.15). Both are accepted here. Prof. Karapandža\'s Class 3 slides confirm the correct values (254,152.81 and 77,568.3).'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:850, b:-320, da:5, db:3, names:['A','B'], opts:['USD 1,170','USD 530','−USD 530','USD 170','None of the above'], correct:1}},
 {n:2, gen:'perp', pts:4, p:{C:15000, per:'month', nom:.048, opts:['USD 3,750,000','USD 37,500,000','USD 312,500','None of the above'], correct:0}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T25, a:3, len:2, firm:'Tesla', b2:'cont'}},
 {n:4, gen:'mort', pts:4, p:{P:1500000, nom:.054, n:360, name:'Sarah', opts:['USD 8,422.96','USD 8,612.19','USD 7,854.32','None of the above'], correct:0}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T25, F:5000, c:.035, T:3, freq:1}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:185000, r:.08, cf:dtDoubling({1:0,2:150,3:0,4:150,5:0,6:150}, 7, 12), tail:{s:13, cf:19200, g:.05}, segs:[[1,5],[6,12],[13,null]], name:'CCC',
   listing:'Year 1: USD 0\nYear 2: USD 150\nYear 3: USD 0\nYear 4: USD 150\nYear 5: USD 0\nYear 6: USD 150\nYear 7: USD 300 (100% more than in year 6)\n… increases at the rate of 100% each year …\nYear 12: USD 9,600\nYear 13: USD 19,200\nYear 14: USD 20,160 (5% more than in year 13)\nYear 15: USD 21,168 (5% more than in year 14)\n… and then continues to grow at the rate of 5% till eternity.'},
   flags:{d:'The answer key divides 640,000 by $1.08^{13}$ and gets 235,326.67. Wrong by one year: $C/(r-g)$ already sits at year 12. Correct: $640{,}000/1.08^{12} = 254{,}152.80$.', e:'Key: NPV = 58,742.15 (follows from the error in d). Correct: 77,568.29 — both accepted here.'},
   alt:{d:[235326.67], e:[58742.15]}},
 {n:7, gen:'fisher', pts:4, p:{real:.03, inf:.025}},
 {n:8, gen:'port3', pts:11, p:{names:['Nvidia','Apple','Microsoft'], V:[4500,4200,3600], ER:[.22,.18,.20], SD:[.35,.28,.30], rho:[.65,.70,.75]}},
 {n:9, gen:'capm', pts:3, p:{mrp:.07, beta:1.8, opts:['Less than 12.6%','12.6%','Greater than 12.6%','14.2%','Cannot be determined'], correct:1}},
 {n:10, gen:'dur', pts:3, p:{F:10000, c:.04, T:4, y:.035, opts:['3.78 years','3.78%','4 years','4%','None of the above'], correct:0}},
 {n:11, gen:'irr', pts:4, p:{I:2850000, cfs:[1200000,2000000], k:.12, name:'Amazon', opts:['The IRR is roughly 7.43% and the project should not be accepted.','The IRR is roughly 7.43% and the project should be accepted.','The IRR is roughly 13.8% and the project should not be accepted.','The IRR is roughly 13.8% and the project should be accepted.'], correct:0}},
 {n:12, gen:'dec', pts:25, p:{W0:25000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Recession',p:.45},{n:'Stable',p:.30},{n:'Boom',p:.25}],
   strat:[{n:'I', d:'100% bonds', desc:'You can invest 100% of your money into bonds.', r:[.035,.035,.035]},
          {n:'II', d:'100% market', desc:'You can invest 100% of your money into the value-weighted market portfolio.', r:[-.20,.12,.35]},
          {n:'III', d:'60% market / 40% bonds', desc:'You can invest 60% of the money into the value-weighted market portfolio and 40% into bonds.', r:[.6*-.2+.4*.035, .6*.12+.4*.035, .6*.35+.4*.035]},
          {n:'IV', d:'40% market / 60% bonds', desc:'You can invest 40% of the money into the value-weighted market portfolio and 60% into bonds.', r:[.4*-.2+.6*.035, .4*.12+.6*.035, .4*.35+.6*.035]}],
   rules:[{k:'matrix',pts:8},{k:'maximin',pts:2},{k:'hurwicz',a:.4,pts:4},{k:'laplace',pts:4},{k:'eu',pts:7,q:'Together with your banking advisor you establish the opinion that it is 45% probable that markets enter a recession, 30% that they remain stable and 25% that they boom. '}],
   intro:'You would like to invest €25,000 which you have received from your grandparents after your graduation. You can choose how much to invest into a well-diversified value-weighted market portfolio and into bonds. You are considering the following four investment opportunities:',
   env:'You estimate that there is a 45% chance of a recession taking place in 1 year from now, 30% that markets will remain stable, and 25% of a booming economy. If a recession takes place, the value-weighted market portfolio will experience a −20% return. If the economy remains stable, markets will grow 12%. If an economic boom happens, markets will grow 35%. Bonds will grow by 3.5% no matter what happens with the economy.'}}
 ]},
/* ---------------------------------------------------------------- SIMULATION ---------------------------------------------------------------- */
{id:'sim', title:'Simulation (solved)', short:'Sim', when:'19 Dec 2024 · in class 12 Dec 2025', kind:'Practice exam · answer key',
 desc:'The simulation with answer key (90 points). The in-class practice of 12 Dec 2025 used exactly these tasks with 60 points — so it shows what Karapandža likes to ask beyond the standard layout: effective rates, stock returns with dividends and a two-stock portfolio.',
 notes:['**Q2 a:** the key marks 10.55%, but its own calculation gives $(1+0.10/365)^{365}-1 = 10.52\\%$ → answer a (10.51%) is the closest.',
        '**Q4:** the key grows the USD 5 dividend by 10% (9.5%). The USD 5 is already paid at the end of this year, so the one-year return is $(5+104-100)/100 = 9\\%$. Both accepted.',
        '**Q6 c:** the key writes −0.0243 for the covariance term; correct is $2\\cdot0.5\\cdot0.5\\cdot(-0.9)\\cdot0.15\\cdot0.18 = -0.01215$. Its final 3.97% is right.',
        '**Q7 e:** the key squares the returns in % (so −15% gives a utility of +225). Squaring final wealth instead gives the same choice (commodities): with $U = x^2$ the investor is risk-seeking.'],
 q:[
 {n:1, gen:'proj', pts:20, points:[2,5,5,5,3], title:'Nvidia mini pipeline — declining cash flows', p:{I:3000, r:.085, cf:DT_SIM_CF, tail:{s:11, cf:139.66, g:0}, segs:[[1,3],[4,10],[11,null]], name:'Nvidia mini pipeline',
   listing:'Year 1: USD 200\nYear 2: USD 200\nYear 3: USD 200\nYear 4: USD 190 (5% less than in year 3)\nYear 5: USD 180.50 (5% less than in year 4) — decreases at the rate of 5% …\nYear 10: USD 139.66\nYear 11: USD 139.66 (the same as in year 10)\n… and then continues to pay USD 139.66 every year till eternity.'},
   text:'Retail shareholders in Nvidia have a chance to invest USD 3,000 today (year 0) into a mini pipeline project of the company that offers the following cash flow stream:\n\n- Year 1: USD 200\n- Year 2: USD 200\n- Year 3: USD 200\n- Year 4: USD 190 (5% less than in year 3)\n- Year 5: USD 180.50 (5% less than in year 4) — decreases at the rate of 5% …\n- Year 10: USD 139.66\n- Year 11: USD 139.66 (the same as in year 10)\n- … and then continues to pay USD 139.66 every year till eternity.\n\nOpportunity cost of capital is 8.5%.'},
 {n:2, gen:'ear', pts:10, p:{A:{nom:.10, m:365}, B:{nom:.11, m:12}, pts:[4,4,2], optsA:['10.51%','10.55%','9.43%','11.19%'], cA:0, optsB:['11.78%','10.85%','11.57%','10.12%'], cB:2, cC:2,
   flagA:'The answer key marks b (10.55%) although its own line computes 10.51%. $(1+0.10/365)^{365}-1 = 10.52\\%$ → a is the right choice.'}},
 {n:3, gen:'mort', pts:7, p:{P:200000, perMonth:.003, n:500, name:'Alex', cur:'€', opts:['842 Euros','773 Euros','519 Euros','680 Euros'], correct:1}},
 {n:4, gen:'ret', pts:6, p:{kind:'div', P0:100, D:5, g:.10, P1:104, alt:[9.5],
   flag:'The key gets 9.5% by growing the dividend: $(104-100)/100 + 5\\cdot1.1/100$. But the USD 5 is the dividend at the end of this year — the 10% growth only concerns later years. The clean one-year return is 9%. Both are accepted here; in the exam, state how you read the question.'}},
 {n:5, gen:'ret', pts:4, p:{kind:'tot', inv:500, dP:-.2, D:3, stock:'Pfizer'}},
 {n:6, gen:'port2', pts:18, points:[4,4,5,5], p:{names:['Costco','Home Depot'], ER:[.20,.25], SD:[.15,.18], V:[50,800], vu:['bn','m'], rho:-.9}},
 {n:7, gen:'dec', pts:25, p:{W0:100, cur:'USD', unit:'return', u:'sq',
   states:[{n:'Boom',p:.25},{n:'Normal',p:.50},{n:'Recession',p:.25}],
   strat:[{n:'1', d:'stocks only', desc:'Stocks only: 10% in a normal economy, 19 points more in a boom, −4% in a recession.', r:[.29,.10,-.04]},
          {n:'2', d:'bonds only', desc:'Bonds only: 5% in a normal economy, 10 points more in a boom, −2% in a recession.', r:[.15,.05,-.02]},
          {n:'3', d:'commodity futures only', desc:'Commodity futures only: 25% in a normal economy, twice as much in a boom, −15% in a recession.', r:[.50,.25,-.15]},
          {n:'4', d:'equal mix', desc:'Invest equally in all three asset classes.', r:[(.29+.15+.5)/3, (.10+.05+.25)/3, (-.04-.02-.15)/3]}],
   rules:[{k:'matrix',pts:3},{k:'maximin',pts:5},{k:'hurwicz',a:.5,pts:5},{k:'laplace',pts:5},{k:'eu',pts:7,u:'sq',on:'return',q:'A consultant estimates a 25% chance of a boom, 50% of a stable economy and 25% of a recession. ',
     note:'The key squares the returns in %, as done here. Squaring final wealth (USD 100m × (1+r)) gives the same choice.'}],
   intro:'You are a fund manager at Vanguard and would like to invest USD 100 million for a short-term horizon in stocks, bonds or commodity futures. "19% more returns than in a normal economy" is read as +19 percentage points (29%), as in the answer key. You have four options:',
   env:'Treat the matrix in returns (%), as the answer key does.'}}
 ]},
/* ---------------------------------------------------------------- 2019 ---------------------------------------------------------------- */
{id:'e19', title:'Exam 2019', short:'2019', when:'17 Dec 2019', kind:'Real exam (Finance 1) · answer key',
 desc:'Real exam from 2019 (then "Finance 1", same professor, same task types, 14 tasks).',
 notes:['**Q5:** the key’s PV of the last payment is 975.47 and the price 1,034.31; exact calculation gives 975.60 and 1,034.44 (rounding in the key — both accepted). Its formula for the 1-year coupon also shows a wrong average, but the number 58.84 is right.',
        '**Q14:** the key builds the outcome matrix in returns and the expected utility in € — the rankings are the same. Here the matrix is in final values (€).'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:400, b:-150, da:4, db:2, names:['X','Y'], opts:['USD 200','USD 250','USD 50','USD 600','None of the above'], correct:1}},
 {n:2, gen:'perp', pts:2, p:{C:250000, per:'year', nom:.025, opts:['USD 1,000,000','USD 10,000,000','USD 100,000','None of the above'], correct:1}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T19, a:2, len:1, firm:'Lufthansa', b2:'ann'}},
 {n:4, gen:'irr', pts:3, p:{I:1735537.19, cfs:[1000000,1000000], name:'Tesla', opts:['8%','9%','10%','11%'], correct:2, text:'Tesla is considering investing USD 1,735,537.19 in a new project. The project will pay USD 1,000,000 in each of the next two years. Calculate the IRR of the project.'}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T19, F:1000, c:.03, T:2.5, freq:2}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:20000, r:.04, cf:Object.assign(dtDoubling({1:0,2:100,3:0,4:100,5:0,6:100}, 7, 13), {14:25600}), tail:{s:15, cf:25600, g:.02}, segs:[[1,5],[6,13],[14,null]], name:'AAA',
   listing:'Year 1: USD 0\nYear 2: USD 100\nYear 3: USD 0\nYear 4: USD 100\nYear 5: USD 0\nYear 6: USD 100\nYear 7: USD 200 (100% more than in year 6)\n… increases at the rate of 100% each year …\nYear 13: USD 12,800\nYear 14: USD 25,600\nYear 15: USD 25,600\nYear 16: USD 26,112 (2% more than in year 15)\n… and then continues to grow at the rate of 2% till eternity.'}},
 {n:7, gen:'fisher', pts:3, points:[1,2], p:{real:.20, inf:.02}},
 {n:8, gen:'port3', pts:11, p:{names:['Apple','Microsoft','Google'], V:[1094,1158,924], ER:[.04,.06,.08], SD:[.20,.25,.15], rho:[.6,.8,.8]}},
 {n:9, gen:'mc', pts:1, p:{type:'capm', title:'Same return, different total risk', text:'Investments A and B both offer an expected rate of return of 12%. If the standard deviation of A is 20% and that of B is 30%, then a well-diversified investor would:',
   opts:['Prefer A to B','Prefer B to A','Cannot answer without knowing betas and the investor’s risk preference'], correct:2,
   sol:'A well-diversified investor has already diversified away the firm-specific risk, so the standard deviation of a single asset does not matter to them — only its **systematic** risk (beta) does. Without the betas you cannot rank A and B → **c**.'}},
 {n:10, gen:'capm', pts:4, p:{rf:.015, mrp:.02, stocks:[['Apple',1.9],['Microsoft',1.23]]}},
 {n:11, gen:'mort', pts:4, p:{P:300000, perMonth:.0005, pay:1500, name:'John', opts:['151 months','305 months','211 months','None of the above'], correct:2}},
 {n:12, gen:'mc', pts:2, p:{type:'dur', title:'Which bond has the most interest-rate risk?', text:'Which of the following U.S. government bonds has the greatest interest rate risk?',
   opts:['An 8-year maturity, 10% coupon bond.','An 8-year maturity, 5% coupon bond.','A 10-year maturity, 5% coupon bond.','A 10-year maturity, 10% coupon bond.','Cannot tell from the information given.'], correct:2,
   sol:'Interest-rate risk grows with **duration**. Duration is longer when maturity is longer and when the coupon is lower (more of the value sits in the distant face value). The 10-year, 5% coupon bond has the longest duration → **c**.'}},
 {n:13, gen:'irr', pts:4, p:{I:1240000, cfs:[500000,1000000], k:.14, name:'Lufthansa', opts:['The IRR is roughly 12.2% and the project should not be accepted.','The IRR is roughly 12.2% and the project should be accepted.','The IRR is roughly 14.47% and the project should not be accepted.','The IRR is roughly 14.47% and the project should be accepted.'], correct:0}},
 {n:14, gen:'dec', pts:24, p:{W0:200000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Stable',p:.4},{n:'Good',p:.3},{n:'Crisis',p:.3}],
   strat:[{n:'I', d:'A only', desc:'Invest in shares of company A only: 10% if the economy stays stable, 10% if things go very well, −15% in a crisis.', r:[.10,.10,-.15]},
          {n:'II', d:'B only', desc:'Invest in shares of company B only: 5% in normal times, 15% in good times, −5% in bad times.', r:[.05,.15,-.05]},
          {n:'III', d:'50% A / 50% B', desc:'Invest 50% in each of the two companies.', r:[.075,.125,-.10]}],
   rules:[{k:'matrix',pts:6},{k:'maximin',pts:2},{k:'hurwicz',a:.3,pts:4},{k:'laplace',pts:4},{k:'eu',pts:8,q:'Together with your banking advisor you estimate that markets remain stable with 40% probability, and slide into a boom or a crisis with 30% each. '}],
   intro:'You would like to invest €200,000 which you have received from your grandparents after your graduation. You consider three ways to split it between two companies:',
   env:'Final values = €200,000 × (1 + return).'}}
 ]},
/* ---------------------------------------------------------------- 2018 ---------------------------------------------------------------- */
{id:'e18', title:'Exam 2018', short:'2018', when:'2018', kind:'Real exam · answer key',
 desc:'Real exam from 2018 with answer key (11 tasks). The decision task here is the biggest ever: 27 points incl. Maximax.',
 notes:['**Q11 d — Hurwicz with α the other way round.** The key computes $H = \\alpha\\cdot\\text{worst} + (1-\\alpha)\\cdot\\text{best}$ and picks 100% market (12,050). Every newer key (FT 2025, 2019, simulation) uses $H = \\alpha\\cdot\\text{best} + (1-\\alpha)\\cdot\\text{worst}$; with α = 0.3 that gives **100% bonds** (10,400). This hub uses the newer convention — in the exam, write your formula down.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:-600, b:450, da:3, db:5, names:['X','Y'], opts:['USD 650','−USD 150','−USD 50','USD 150','I need more data'], correct:1}},
 {n:2, gen:'perp', pts:4, p:{C:10000, per:'month', nom:.06, opts:['USD 2,000,000','USD 20,000,000','USD 166,666.67','None of the above'], correct:0}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T18, a:4, len:2, firm:'Lufthansa', b2:'cont'}},
 {n:4, gen:'mort', pts:4, p:{P:2000000, nom:.04, n:300, name:'John', opts:['USD 10,707.15','USD 10,556.74','USD 8,069.63','None of the above'], correct:1}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T18, F:10000, c:.02, T:4, freq:1}},
 {n:6, gen:'proj', pts:15, points:[2,2,4,3,2,2], p:{I:213113.87, r:.07, cf:dtDoubling({1:40,2:80,3:0,4:300,5:50,6:100}, 7, 13), tail:{s:14, cf:14560, g:.04}, segs:[[1,5],[6,13],[14,null]], name:'BBB', irr:true,
   listing:'Year 1: USD 40\nYear 2: USD 80\nYear 3: USD 0\nYear 4: USD 300\nYear 5: USD 50\nYear 6: USD 100\n… 100% more each year …\nYear 13: USD 12,800\nYear 14: USD 14,560\nYear 15: USD 15,142.40\n… and then continues to receive 4% more till eternity.'}},
 {n:7, gen:'fisher', pts:4, p:{real:.02, inf:.03}},
 {n:8, gen:'port3', pts:11, p:{names:['Apple','Microsoft','Google'], V:[800,804,723], ER:[.20,.15,.25], SD:[.25,.20,.30], rho:[.5,.1,.2]}},
 {n:9, gen:'capm', pts:3, p:{mrp:.08, beta:1.5, opts:['Less than 12%','12%','Greater than 12%','13.6%','Cannot be determined'], correct:1}},
 {n:10, gen:'dur', pts:3, p:{F:1000, c:.05, T:3, y:.03, opts:['2.86 years','2.86%','3 years','3%'], correct:0}},
 {n:11, gen:'dec', pts:27, p:{W0:10000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Recession',p:.5},{n:'Stable',p:.25},{n:'Boom',p:.25}],
   strat:[{n:'1', d:'100% bonds', desc:'Invest 100% of your money into bonds.', r:[.04,.04,.04]},
          {n:'2', d:'100% market', desc:'Invest 100% into the value-weighted market portfolio.', r:[-.25,.10,.40]},
          {n:'3', d:'50% market / 50% bonds', desc:'Invest 50% into the market portfolio and 50% into bonds.', r:[.5*-.25+.5*.04, .5*.10+.5*.04, .5*.40+.5*.04]},
          {n:'4', d:'30% market / 70% bonds', desc:'Invest 30% into the market portfolio and 70% into bonds.', r:[.3*-.25+.7*.04, .3*.10+.7*.04, .3*.40+.7*.04]}],
   rules:[{k:'matrix',pts:8},{k:'maximin',pts:2},{k:'maximax',pts:2},{k:'hurwicz',a:.3,pts:4,flag:'The 2018 key uses α as the weight of the **worst** outcome and picks 100% market (H = 12,050). With the convention of all newer keys, $H = \\alpha\\cdot\\text{best} + (1-\\alpha)\\cdot\\text{worst}$, α = 0.3 gives 100% bonds (10,400 vs 9,450 / 9,925 / 10,115). Write the formula in the exam.'},{k:'laplace',pts:4},{k:'eu',pts:7}],
   intro:'You would like to invest €10,000 which you have received from your grandparents after your graduation. You can choose how much to invest into a well-diversified value-weighted market portfolio and into bonds:',
   env:'You estimate a 50% chance of a recession in 1 year, 25% that markets remain stable and 25% of a boom. In a recession the market portfolio returns −25%, in a stable economy +10%, in a boom +40%. Bonds grow by 4% no matter what.'}}
 ]},
/* ---------------------------------------------------------------- 2017 ---------------------------------------------------------------- */
{id:'e17', title:'Exam 2017', short:'2017', when:'2017', kind:'Real exam · no key (self-computed)', src:'self',
 desc:'Real exam from 2017 without answer key — every solution here is computed by the hub (same formulas as the solved exams).',
 notes:['No official answer key exists for this exam: all solutions are self-computed.','**Q9:** 13.6% is also "greater than 12%", but d is the exact CAPM value → d.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:-400, b:250, da:3, db:5, names:['X','Y'], opts:['USD 650','−USD 150','−USD 50','USD 150','I need more data'], correct:1}},
 {n:2, gen:'perp', pts:2, p:{C:100000, per:'year', nom:.04, opts:['USD 2,500,000','USD 25,000,000','USD 250,000','None of the above'], correct:0}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T17, a:3, len:4, firm:'Lufthansa', b2:'cont'}},
 {n:4, gen:'mort', pts:3, p:{P:400000, perMonth:.002, n:300, name:'John', opts:['USD 1,707.15','USD 1,774.39','USD 8,069.63','None of the above'], correct:1}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T17, F:1300, c:.03, T:2.5, freq:2}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:1000, r:.07, cf:dtDoubling({1:90,2:50,3:0,4:250,5:50,6:100}, 7, 13), tail:{s:14, cf:1000, g:-.10}, segs:[[1,4],[5,13],[14,null]], name:'AAA',
   listing:'Year 1: USD 90\nYear 2: USD 50\nYear 3: USD 0\nYear 4: USD 250\nYear 5: USD 50\nYear 6: USD 100\n… 100% more each year …\nYear 13: USD 12,800\nYear 14: USD 1,000\nYear 15: USD 900\n… and then continues to pay 10% less till eternity.'}},
 {n:7, gen:'fisher', pts:4, p:{real:.17, inf:.02}},
 {n:8, gen:'port3', pts:13, points:[3,3,5,2], p:{names:['Apple','Microsoft','Google'], V:[886,657,723], ER:[.20,.15,.25], SD:[.25,.20,.17], rho:[.5,.7,.2], d:true}},
 {n:9, gen:'capm', pts:3, p:{mrp:.08, beta:1.7, opts:['Less than 12%','12%','Greater than 12%','13.6%','Cannot be determined'], correct:3, note:'13.6% is also "greater than 12%", but d is the exact value — choose d.'}},
 {n:10, gen:'dur', pts:3, p:{F:1000, c:.05, T:3, y:.03, opts:['2.86 years','2.86%','3 years','3%'], correct:0}},
 {n:11, gen:'dec', pts:30, p:{W0:100000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Stable',p:.5},{n:'Boom',p:.25},{n:'Recession',p:.25}],
   strat:[{n:'1', d:'A only', desc:'Shares of company A only: 10% if the economy stays stable, 30% in a boom, −45% in a crisis.', r:[.10,.30,-.45]},
          {n:'2', d:'B only', desc:'Shares of company B only: 5% in a stable economy, 10% in a boom, −5% in a recession.', r:[.05,.10,-.05]},
          {n:'3', d:'50% A / 50% B', desc:'Invest 50% of the money in each share.', r:[.075,.20,-.25]}],
   rules:[{k:'matrix',pts:8},{k:'maximin',pts:2},{k:'maximax',pts:2},{k:'hurwicz',a:.7,pts:4},{k:'laplace',pts:4},{k:'ev',pts:4},{k:'eu',pts:6}],
   intro:'You would like to invest €100,000 which you have received from your grandparents after your graduation. You consider three ways to distribute it:',
   env:'Together with your banking advisor you estimate that markets remain stable with 50% probability, and slide into a boom or a recession with 25% each.'}}
 ]},
/* ---------------------------------------------------------------- 2016 ---------------------------------------------------------------- */
{id:'e16', title:'Exam 2016', short:'2016', when:'2016', kind:'Real exam · no key (self-computed)', src:'self',
 desc:'Real exam from 2016 without answer key — every solution here is computed by the hub.',
 notes:['No official answer key exists for this exam: all solutions are self-computed.',
        '**Q8:** Google’s expected return is printed as 118% — almost certainly a typo for 18%. The hub calculates with the printed number.',
        '**Q12:** A’s and B’s luck are given separately (30/70 and 90/10). The hub assumes they are independent → four joint states (probabilities 0.27 / 0.03 / 0.63 / 0.07). Say this assumption in the exam.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:-400, b:350, da:3, db:5, names:['X','Y'], opts:['USD 650','−USD 150','−USD 50','USD 150','I need more data'], correct:2}},
 {n:2, gen:'perp', pts:2, p:{C:50000, per:'year', nom:.002, opts:['USD 2,500,000','USD 25,000,000','USD 250,000','None of the above'], correct:1}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T16, a:3, len:4, firm:'Siemens', b2:'q'}},
 {n:4, gen:'mort', pts:3, p:{P:400000, perMonth:.0002, n:240, name:'John', opts:['USD 1,707.15','USD 1,670.69','USD 8,069.63','None of the above'], correct:0}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T16, F:1300, c:.03, T:2, freq:2}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:1000, r:.05, cf:dtDoubling({1:110,2:70,3:60,4:25,5:50,6:100}, 7, 13), tail:{s:14, cf:1000, g:-.10}, segs:[[1,3],[4,13],[14,null]], name:'AAA',
   listing:'Year 1: USD 110\nYear 2: USD 70\nYear 3: USD 60\nYear 4: USD 25\nYear 5: USD 50\nYear 6: USD 100\n… 100% more each year …\nYear 13: USD 12,800\nYear 14: USD 1,000\nYear 15: USD 900\n… and then continues to pay 10% less till eternity.'}},
 {n:7, gen:'fisher', pts:4, p:{real:.13, inf:.02}},
 {n:8, gen:'port3', pts:14, points:[3,3,6,2], p:{names:['Apple','Microsoft','Google'], V:[613.6,479,553.9], ER:[.20,.15,1.18], SD:[.20,.22,.25], rho:[.5,.7,.2], d:true}},
 {n:9, gen:'mc', pts:2, p:{type:'capm', title:'Return vs beta', text:'Stock A offers an expected return of 10% and stock B 12%. The standard deviation of A is 18% and of B 20%; the beta of A is 1.1 and of B 1.05. A well-diversified investor would:',
   opts:['Prefer A to B','Prefer B to A','Be indifferent','Cannot answer without additional data'], correct:1,
   sol:'For a well-diversified investor only **beta** (systematic risk) matters, not the standard deviation. B offers the higher expected return (12% vs 10%) with the lower beta (1.05 vs 1.1) → **prefer B**.'}},
 {n:10, gen:'capm', pts:3, p:{mrp:.08, beta:1.7, opts:['Less than 12%','12%','Greater than 12%','13.6%','Cannot be determined'], correct:3, note:'13.6% is also "greater than 12%", but d is the exact value — choose d.'}},
 {n:11, gen:'dur', pts:4, p:{F:1000, c:.05, T:3, y:.03, opts:['2.86 years','2.86%','3 years','3%','None of the above'], correct:0}},
 {n:12, gen:'dec', pts:26, p:{W0:50000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'A up · B normal',p:.27},{n:'A up · B good',p:.03},{n:'A down · B normal',p:.63},{n:'A down · B good',p:.07}],
   strat:[{n:'1', d:'A only', desc:'Shares of company A only: +20% with probability 30% (lucky), −45% with probability 70%.', r:[.20,.20,-.45,-.45]},
          {n:'2', d:'B only', desc:'Shares of company B only: +5% with probability 90%, +10% with probability 10%.', r:[.05,.10,.05,.10]},
          {n:'3', d:'50% A / 50% B', desc:'Invest 50% in each share.', r:[.125,.15,-.20,-.175]},
          {n:'4', d:'bonds', desc:'Invest into bonds that return 1%.', r:[.01,.01,.01,.01]}],
   rules:[{k:'matrix',pts:6},{k:'maximin',pts:4},{k:'hurwicz',a:.3,pts:4},{k:'laplace',pts:4},{k:'eu',pts:4,u:'sqrt',who:'You'},{k:'eu',pts:4,u:'sq',who:'Your sibling'}],
   intro:'You and your sibling would like to invest €50,000 (in total) which you have received from your grandparents after your graduation. You consider four possibilities:',
   env:'Your utility function is $U = \\sqrt{x}$, your sibling’s is $U = x^2$. Assumption (not stated in the exam): A’s and B’s outcomes are independent, so there are four joint states.'}}
 ]}
];

/* ---------- formula sheet (template for the handwritten A4 sheet) ---------- */
const DT_CHEAT = [
{h:'Exam rules', items:[
R`90 min · 90 points · calculator · 1 handwritten A4 sheet (both sides, collected) · show formula + steps everywhere (MC too: partial points) · timeline for every cash-flow task`]},
{h:'Rates & compounding', items:[
R`Effective annual rate: $EAR = \left(1+\frac{j}{m}\right)^m - 1$ · continuous: $e^{j}-1$`,
R`Convert quotes via the same EAR: $\left(1+\frac{j_1}{m_1}\right)^{m_1} = \left(1+\frac{j_2}{m_2}\right)^{m_2}$ · daily: $j = 365\left[(1+EAR)^{1/365}-1\right]$`,
R`Fisher: $1+r_{nom} = (1+r_{real})(1+\pi)$ (not just the sum)`,
R`Always state the units: "nominal annual with semiannual compounding"`]},
{h:'Present value', items:[
R`$PV = \frac{C_t}{(1+r)^t}$ · continuous $C_t e^{-rt}$ · PVs are additive (duration is irrelevant for adding)`,
R`$NPV = C_0 + \sum_t \frac{C_t}{(1+r)^t}$ → invest if $NPV > 0$`,
R`Perpetuity (first payment in 1 period): $PV = \frac{C}{r}$ · monthly payments → monthly rate $r = j/12$`,
R`Growing perpetuity: $V_{s-1} = \frac{C_s}{r-g}$ — value **one period before** the first payment $C_s$ → discount $(1+r)^{s-1}$ · declining: $g<0$ → $r-g = r+|g|$`,
R`Annuity: $PV = C\cdot\frac{1-(1+r)^{-n}}{r}$ · payment $C = PV\cdot\frac{r}{1-(1+r)^{-n}}$ · months: $n = \frac{\ln\left(1/(1-\frac{PV}{C}r)\right)}{\ln(1+r)}$`]},
{h:'Spot & forward rates', items:[
R`Missing maturity: average of the neighbours (1.5y = avg 1y & 2y; 6y = avg 5y & 7y)`,
R`Semiannual quotes: $DF_t = \left(1+\frac{r_t}{2}\right)^{-2t}$`,
R`Forward $a\to b$: $\left(1+\frac{r_b}{2}\right)^{2b} = \left(1+\frac{r_a}{2}\right)^{2a}\left(1+\frac{f}{2}\right)^{2(b-a)}$`,
R`Continuous: $f = \frac{r_b\,b - r_a\,a}{b-a}$ · annual: $(1+f)^{b-a} = \frac{(1+r_b)^b}{(1+r_a)^a}$`]},
{h:'Bonds', items:[
R`Coupon $= c\cdot F$ (÷2 if semiannual) · last date pays coupon + face value`,
R`Price = each cash flow discounted with the spot rate of its own date · coupon < rates → below par`,
R`Macaulay duration: $D = \frac{\sum t\cdot PV(CF_t)}{P}$ in **years** · longer maturity / lower coupon → higher duration → more interest-rate risk`]},
{h:'IRR', items:[
R`IRR: $NPV(IRR) = 0$ · 2 periods: $x = 1+IRR$, $C_0x^2 - C_1x - C_2 = 0$, $x = \frac{C_1 + \sqrt{C_1^2 + 4C_0C_2}}{2C_0}$ · accept if IRR > cost of capital (and NPV > 0)`]},
{h:'Portfolio & CAPM', items:[
R`Value weights $w_i = V_i/\sum V$ (same units: million vs billion!) · $E(R_p) = \sum w_iE(R_i)$`,
R`$\sigma_p^2 = \sum w_i^2\sigma_i^2 + 2\sum_{i<j} w_iw_j\sigma_i\sigma_j\rho_{ij}$ · $\sigma_{ij} = \sigma_i\sigma_j\rho_{ij}$`,
R`CAPM: $E(R_i) = r_f + \beta_i(r_m - r_f)$ · risk premium $= \beta_i(r_m-r_f)$ · diversified investors care about beta, not σ`,
R`Holding return: $r = \frac{D_1 + P_1 - P_0}{P_0}$`]},
{h:'Decision rules', items:[
R`Outcome matrix: rows = strategies, columns = states · final value $= W_0(1+\sum_k w_kr_k)$`,
R`Maximin: best of the worst · Maximax: best of the best`,
R`Hurwicz: $H = \alpha\cdot\text{best} + (1-\alpha)\cdot\text{worst}$ (α = optimism) — write it down`,
R`Laplace: equal probabilities → plain average · Expected value: $\sum p_s x_s$`,
R`Expected utility: $EU = \sum p_s U(x_s)$ · $\sqrt{x}$ concave = risk-averse · $x^2$ convex = risk-seeking`]},
{h:'From the classes (growing streams, bonds)', items:[
R`Growing annuity: $PV = \frac{C_1}{r-g}\left[1-\left(\frac{1+g}{1+r}\right)^T\right]$ — any $r\ne g$ (also $g>r$!) · $r=g$: $PV = \frac{T\,C_1}{1+r}$`,
R`Delayed stream: value it one period before its first payment, then discount from there`,
R`Bond: $P = \frac{C}{y}\left[1-\frac{1}{(1+y)^T}\right] + \frac{F}{(1+y)^T}$ · coupon rate > y → premium, = → par, < → discount`,
R`Current yield $= C/P$ · YTM = the $y$ that solves the price equation · yearly coupons with a semiannual quote $q$: $(1+q/2)^2-1$`,
R`Modified duration $D/(1+y)$ · $\frac{\Delta P}{P} \approx -\frac{D}{1+y}\Delta y$ (Δy = 0.01 per point) · big changes: reprice`]},
{h:'Class 4 (forward rates, inflation, stocks)', items:[
R`Bond → cash flows: coupon = rate × face (÷ 2 if semiannual) · last payment = coupon + face`,
R`Forward: $(1+r_b)^b = (1+r_a)^a(1+f_{a,b})^{b-a}$ · semiannual: halve rates, double exponents · continuous: $f = (b\,r_b - a\,r_a)/(b-a)$`,
R`Real rate: $(1+\text{nominal})/(1+\text{inflation}) - 1$ (110 vs 3% → 6.80%)`,
R`Stock return $R = (P_1 - P_0 + D_1)/P_0$ · value $P_0 = D_1/(r-g)$ ($r>g$), constant dividend $D/r$`]}
];

/* ---------- lectures (Prof. Karapandža's class slides, content only) ---------- */
// One topic per class: summary + quiz (+ optional flashcards). `drills` = DT_DRILL_KINDS ids that train the same tool.
// New class slides: add a topic dt-cN here — sidebar, home, search and study plan pick it up automatically.
const DT_TOPICS = [
/* ------------------------------------------------------------ CLASS 1 ------------------------------------------------------------ */
{id:'dt-c1', ch:1, title:'Money Through Time & NPV', date:'Class 1', drills:['rates2','pvadd'],
examWeight:'Simple vs compound interest, quoted vs effective rates, continuous compounding and e, present value and the discount factor, the NPV rule, the return rule, why all owners agree on NPV (Grandma and the parent), the agency problem — plus what financial markets and the financial manager do',
summary:R`**The course in one question: how do we make good investment decisions?** Three blocks:
- Value :: money through time — bonds, shares and projects
- Risk & markets :: diversification and the CAPM, what prices tell us (Nobel Prizes: William Sharpe 1990 for the CAPM, Eugene Fama 2013 for asset prices)
- AI & decisions :: choices under uncertainty, human and AI judgement

**Exam and how to prepare.** The exam rewards decisions — "Should we invest?" and "What is it worth?". It is an individual final exam worth 100% of the grade. The recent paper had 90 minutes, 12 tasks and one A4 sheet (both sides); the official exam notice sets the current rules.
- Homework :: weekly and ungraded — it is how you prepare. Attempt first, check, correct, then solve it again
- Formula sheet :: build your own as you learn
- Past papers :: practise one under the exam clock
- Reading :: lecture notes first, then Brealey, Myers & Allen, "Principles of Corporate Finance"
- Questions :: try for 20 minutes, then the course notebook, then send your question with your attempted answer (e-mail or Canvas Q&A) — a wrong attempt is useful

**What is a company worth?** With a market price it is simple: €40 a share × 10 million shares = €400 million market value of equity. Without a traded price you need the future. Twitter in 2009 was three years old, private and losing money, yet a funding round raised USD 100m at a reported valuation of USD 1bn. Later prices: USD 26 a share at the 2013 IPO, USD 54.20 a share at the 2022 buyout, USD 33bn equity when X joined xAI in 2025; in 2026 SpaceX acquired xAI including X and listed at USD 135 a share. The company changes, and so does the claim being priced — funding valuations, IPO prices and buyouts measure different things.

**Why shares exist.** The Dutch East India Company (VOC, founded 1602) let many investors share one expensive, uncertain voyage — a 1606 receipt shows a share of 150 guilders.

**Who owns the business, and who runs it?**
- Sole proprietor :: one owner, often the manager; unlimited liability — business debts can reach your home; profit taxed as owner profit
- Partnership :: partners own and usually manage; usually unlimited liability; taxed as partner profit
- Corporation :: shareholders own, managers can run it (separation of ownership and control); usually limited liability — your investment can fall to zero, but no further (personal guarantees can change this); tax on company profit and on dividends
- CFO :: the treasurer handles cash, funding and banking; the controller handles reporting, budgets and controls

**Capitalism, crises and reinvention:** 1602 joint-stock enterprise, 1929 crash and 1973 oil shock, 2008 financial crisis and 2020 pandemic — what survives, what changes, who bears the losses? The S&P index rose from 17 (January 1950) to 7,669 (September 2026), a 454-fold price increase before dividends and inflation (log scale: equal vertical steps are tenfold increases).

**What financial markets do:**
- Funding :: build the ship — raise money for investment
- Liquidity :: pay the crew today — a profitable business can still need cash; a loan bridges the cash gap, a share sale lets an investor exit
- Risk management :: the baker with a fixed bread price can agree today on the flour price
- Information :: learn from prices

Silicon Valley Bank lost USD 42bn of deposits in one day (9 March 2023) and was closed the next day: assets that pay later may not meet withdrawals today.

**The financial manager's job:**
=> Raise money (from investors) → Invest in operations → Generate cash (from operations) → Reinvest or pay out (to investors)

The complication: the owners supply the money, someone else makes the decisions. How do we judge whether the manager did a good job? Answer below: by NPV.

**Interest.** USD 100 at 8% for one year becomes USD 108 — for any principal $P$, one year multiplies it by $1+r$. The question is what happens to the first year's interest:
- Simple interest :: keep the 8 in your pocket: $108 + 8 = 116$; $FV = P(1+rT)$
- Compound interest :: put the 8 back in the bank: $108 \times 1.08 = 116.64$; $FV = P(1+r)^T$ — reinvesting earns an extra 0.64 over two years

Compounding needs time, a rate and reinvestment: USD 1 at 10% for 30 years grows to 17.45 with compounding but only 4.00 with simple interest. Saving €100 a month until 67 at 7%: starting at 20 gives about €408,000 (€56,400 paid in), starting at 30 only €199,000 (€44,400 paid in) — €12,000 more paid in, twice the result, because earlier euros compound for longer.

**A "10%" quote is incomplete.** "10% nominal per year" with quarterly compounding means 2.5% each quarter. Compare offers by the **effective annual rate**:
$$EAR = \left(1+\frac{j}{m}\right)^m - 1$$
- j :: nominal (quoted) annual rate
- m :: compounding periods per year
- Example :: $(1+0.10/4)^4 - 1 = 10.3813\%$
- Two accounts :: €10,000 at 4.00% compounded annually gives €10,400; at 3.95% nominal compounded monthly $10{,}000(1+0.0395/12)^{12} = 10{,}402.23$ — the lower quote pays €2.23 more

**Finding e.** Borrow USD 1 at 100% nominal: repay 2.0000 with annual compounding, 2.2500 with two half-years (the second 50% applies to the whole 1.50, EAR 125%), 2.6130 monthly, 2.7146 daily, 2.7181 hourly. The repayment does not grow forever — it approaches $e = 2.718281828\ldots$:
$$\lim_{m\to\infty}\left(1+\frac{1}{m}\right)^m = e$$
For any amount: $P(1+j/m)^{mT}$; set $x = m/j$ and it becomes $P[(1+1/x)^x]^{jT} \to Pe^{jT}$. With a continuous rate $r$: $FV = Pe^{rT}$ (rates as decimals, $T$ in years).
- Example :: USD 50 at 6% continuous for ten years: $50e^{0.06\times10} = 91.11$
- Solving for the rate :: $50e^{10r} = 500 \Rightarrow r = \ln(500/50)/10 = 23.03\%$ continuous, equal to 25.89% effective annual
- Conventions matter :: USD 100 for five years at 6% effective annual gives $100(1.06)^5 = 133.82$, at 6% continuous $100e^{0.3} = 134.99$

Moving money through time, by convention:
- Simple :: $FV = P(1+rT)$, $PV = FV/(1+rT)$
- Annual :: $FV = P(1+r)^T$, $PV = FV/(1+r)^T$
- m periods per year :: $FV = P(1+j/m)^{mT}$, $PV = FV/(1+j/m)^{mT}$
- Continuous :: $FV = Pe^{rT}$, $PV = FV\,e^{-rT}$

**Present value.** USD 100 today or USD 110 next year? Assume the 110 is certain and you can borrow or lend at 5% without fees. Take the 110 — even if you want to spend today: borrow $110/1.05 = 104.76$ now and repay the loan with next year's 110. That 104.76 is the present value of the 110 at 5%. Compounding forward and discounting back are the same comparison in either direction: $FV = PV(1+r)^T$ and $PV = FV/(1+r)^T$. The present value of 1 is the **discount factor** $DF = 1/(1+r)^T$.

**Should we build it?** An office building costs USD 370,000 today; its forecast sale in one year brings USD 420,000. "But we make 50,000!" is not enough — what if the same money could double elsewhere? The comparison must be an alternative with comparable risk. At 5% the alternative turns 370,000 into $370{,}000\times1.05 = 388{,}500$; the building delivers 31,500 more one year from now. In today's money:
$$PV = \frac{420{,}000}{1.05} = 400{,}000 \qquad NPV = C_0 + \frac{C_1}{1+r} = -370{,}000 + 400{,}000 = 30{,}000$$
Accept if NPV > 0. $C_0$ includes its sign (an investment is negative). $r$ is the **opportunity cost of capital** — the return on an alternative with the same risk.

**The same 10% can mean different risks.** In February 2012 Greek 10-year government bonds yielded 29.24% while German ones yielded 1.85%: a higher promised yield can come with a greater chance of loss. So the required return must match the project's risk. Holding the 420,000 forecast fixed:
- 5% required return :: PV 400,000 → NPV +30,000
- 12% :: PV 375,000 → NPV +5,000
- 20% :: PV 350,000 → NPV −20,000

**The return rule** checks the same decision: the building earns $(420{,}000-370{,}000)/370{,}000 = 13.51\%$. Against a comparable alternative at 12% the building wins; at 20% the alternative wins. For this one-period project the return rule and the NPV rule agree.

**Zero NPV.** Pay 1,000 today, receive 1,210 in two years at a 10% opportunity cost: $NPV = -1{,}000 + 1{,}210/1.10^2 = 0$. You earn exactly the alternative's 10% — zero NPV means no extra value, not a loss.

**Why every owner wants a positive-NPV project.** Grandma wants a holiday now; a parent is saving for a child. Each owns half of the building: each invests 185,000 today and receives 210,000 next year (certain receipts, borrowing and lending at 5%).
- Grandma :: borrows $210{,}000/1.05 = 200{,}000$ today, spends it, and repays the loan next year with her project receipt → 15,000 more to spend today than the 185,000 she put in
- Parent :: without the project, 185,000 at 5% grows to 194,250; with it, 210,000 → 15,750 more next year, worth $15{,}750/1.05 = 15{,}000$ today
- Together :: 30,000 of value today — exactly the NPV. Both owners gain whatever their time preference, because they can borrow or lend at the market rate

**Now we can judge the manager:** a good manager takes positive-NPV projects. But the manager may want a nicer office instead. Owners and managers can have different incentives — that conflict is an **agency problem**.

Whose interests do managers emphasise? A historical survey of 378 managers (Yoshimori, 1995):
- All stakeholders :: Japan 97%, Germany 83%, France 78%
- Shareholders :: United States 76%, United Kingdom 71%

Asked "dividends or jobs?" (399 managers): job security first in Japan (97%), Germany (60%) and France (59%); dividends first in the UK and the US (89% each).

**How owners keep managers accountable:**
- The board :: can appoint and replace executives
- Compensation :: can reward value creation
- Auditors :: check reporting
- Investors :: monitor
- Takeovers :: put control at stake

Who decides what the CEO deserves? Tesla's 2018 option award had a maximum potential value of USD 55.8bn (grant-date fair value USD 2.6bn); a trial court cancelled the grant in January 2024, the Supreme Court reversed that remedy in December 2025.

**Back to Twitter:** a loss today can coexist with valuable future cash flows. Their value depends on **when they arrive and how much risk they carry**. That logic explains how a valuation is possible — it does not prove the valuation is right.

**The 1895 classroom:** USD 512.60 at 7% for 8 months and 18 days, with simple interest, 30-day months and a 360-day year: $512.60 \times 0.07 \times 258/360 = 25.72$.`,
cards:[
{q:R`Simple vs compound interest`, a:R`Simple: interest is not reinvested, $FV = P(1+rT)$. Compound: interest earns interest, $FV = P(1+r)^T$. 100 at 8% for two years: 116 vs 116.64.`},
{q:R`Effective annual rate`, a:R`$EAR = (1+j/m)^m - 1$ with j = nominal annual rate, m = periods per year. 10% quarterly → 10.3813%. Compare offers by EAR, not by the quote.`},
{q:R`Account A 4.00% annual vs B 3.95% monthly — which pays more on €10,000?`, a:R`B: $10{,}000(1+0.0395/12)^{12} = 10{,}402.23$ vs 10,400 → B pays €2.23 more.`},
{q:R`Where does e come from?`, a:R`USD 1 at 100% nominal, renewed in ever shorter periods: 2 → 2.25 → 2.6130 (monthly) → 2.7146 (daily) → limit $e = 2.71828\ldots$ = $\lim (1+1/m)^m$.`},
{q:R`Continuous compounding: FV and PV`, a:R`$FV = Pe^{rT}$, $PV = FV\,e^{-rT}$. 50 at 6% for 10 years → 91.11. Solving $50e^{10r} = 500$ → $r = \ln(10)/10 = 23.03\%$ (EAR 25.89%).`},
{q:R`100 today or 110 next year (certain, borrow/lend at 5%)?`, a:R`Take 110: borrow its PV $110/1.05 = 104.76$ today and repay with the 110. You can spend more today than 100.`},
{q:R`NPV rule (one period)`, a:R`$NPV = C_0 + C_1/(1+r)$, $C_0$ with its sign; r = return of an alternative with the same risk. Accept if NPV > 0. Building: $-370{,}000 + 420{,}000/1.05 = 30{,}000$.`},
{q:R`Building NPV at 5%, 12%, 20%`, a:R`PV 400,000 / 375,000 / 350,000 → NPV +30,000 / +5,000 / −20,000. The required return must match the risk.`},
{q:R`Return rule`, a:R`Project return $(420{,}000-370{,}000)/370{,}000 = 13.51\%$ vs a comparable alternative: beats 12%, loses to 20%. For a one-period project it agrees with NPV.`},
{q:R`Grandma and the parent`, a:R`Each invests 185,000, receives 210,000 (5%). Grandma borrows 200,000 today → +15,000 today. Parent: 210,000 vs 194,250 → +15,750 next year = 15,000 today. Together 30,000 = NPV — all owners agree.`},
{q:R`Agency problem`, a:R`Owners supply the money, managers decide; their incentives can differ (nicer office instead of value). Checks: board, compensation, auditors, investors monitoring, takeovers.`},
{q:R`Four functions of financial markets`, a:R`Funding (build the ship) · liquidity (pay the crew today) · risk management (fix an input price) · information (learn from prices).`}
],
quiz:[
{q:R`USD 100 is invested at 8% for two years and the first year's interest is put back in the bank. What is the balance?`, opts:[R`USD 116.64`,R`USD 116.00`,R`USD 108.00`,R`USD 117.28`], correct:0, exp:R`Compound interest: $100\times1.08^2 = 116.64$. Keeping the first 8 in your pocket (simple interest) gives 116 — reinvesting earns the extra 0.64.`},
{q:R`A bank quotes 10% nominal per year, compounded quarterly. What is the effective annual rate?`, opts:[R`10.0000%`,R`10.3813%`,R`10.2500%`,R`10.4713%`], correct:1, exp:R`$(1+0.10/4)^4 - 1 = 10.3813\%$. The quote alone is incomplete; the compounding convention decides the effective rate.`},
{q:R`€10,000 for one year: account A pays 4.00% compounded annually, account B 3.95% nominal compounded monthly. Which pays more?`, opts:[R`A, by €5.00, because its quoted rate is higher`,R`They pay the same, because both quotes are annual rates`,R`B, by €2.23, because its effective annual rate is higher`,R`B, by €0.50, because monthly compounding adds one twelfth`], correct:2, exp:R`B: $10{,}000(1+0.0395/12)^{12} = 10{,}402.23$ vs A: 10,400. Compare effective annual rates, not quotes.`},
{q:R`USD 1 is borrowed at 100% nominal and renewed every instant. What does the repayment after one year approach?`, opts:[R`It grows without limit as the periods get shorter`,R`USD 2.0000, because the nominal rate is 100%`,R`USD 2.6130, the monthly result`,R`USD 2.7183, the number e`], correct:3, exp:R`2 (annual) → 2.25 → 2.6130 (monthly) → 2.7146 (daily) → 2.7181 (hourly) → the limit $e = 2.71828\ldots$`},
{q:R`USD 50 is invested today at 6% continuous compounding for ten years. What is the future value?`, opts:[R`USD 91.11`,R`USD 89.54`,R`USD 80.00`,R`USD 95.03`], correct:0, exp:R`$FV = Pe^{rT} = 50e^{0.06\times10} = 91.11$. P = 50, r = 0.06, T = 10. (89.54 would be 6% effective annual.)`},
{q:R`USD 50 grows to USD 500 in ten years with continuous compounding. Which continuous rate is that?`, opts:[R`25.89%`,R`23.03%`,R`10.00%`,R`90.00%`], correct:1, exp:R`$50e^{10r} = 500 \Rightarrow r = \ln(10)/10 = 23.03\%$. 25.89% is the equivalent effective annual rate — the quote's convention matters.`},
{q:R`You can receive USD 100 today or a certain USD 110 next year, and borrow or lend at 5%. You want to spend today. What should you do?`, opts:[R`Take the 100, because you want to spend the money today`,R`Take the 110 and spend nothing until next year`,R`Take the 110 and borrow 104.76 today against it`,R`It does not matter, because both are worth the same today`], correct:2, exp:R`The PV of 110 at 5% is $110/1.05 = 104.76 > 100$. Borrow 104.76 now and repay it with next year's 110 — more to spend today.`},
{q:R`A building costs USD 370,000 today and sells for USD 420,000 in one year. Equally risky alternatives earn 5%. What is the NPV?`, opts:[R`USD 50,000`,R`USD 31,500`,R`USD 30,000`,R`USD 400,000`], correct:2, exp:R`$PV = 420{,}000/1.05 = 400{,}000$, $NPV = -370{,}000 + 400{,}000 = 30{,}000$. 50,000 ignores the time value; 31,500 is the gain measured next year.`},
{q:R`The forecast of USD 420,000 stays the same, but the project is riskier and needs a 20% return. What happens?`, opts:[R`NPV −20,000: reject, the alternative wins`,R`NPV +5,000: accept with a smaller margin`,R`NPV +30,000: the forecast did not change`,R`NPV +50,000: risk only affects the forecast`], correct:0, exp:R`$420{,}000/1.20 = 350{,}000$, NPV $= -20{,}000$. Higher risk → higher required return → lower PV. At 12% the NPV would be +5,000.`},
{q:R`The building earns 13.51% in one year. When does the return rule say "build"?`, opts:[R`Whenever the return is positive, whatever the alternatives earn`,R`When a comparable-risk alternative earns less, e.g. 12%`,R`Only when the return exceeds the 20% that risky stocks earn`,R`Never — the return rule and the NPV rule disagree here`], correct:1, exp:R`Compare with an alternative of the same risk: 13.51% beats 12% (build) but loses to 20%. For a one-period project the return rule and the NPV rule agree.`},
{q:R`Pay 1,000 today, receive 1,210 in two years, opportunity cost 10%. What does the result mean?`, opts:[R`NPV 210: the project creates 210 of value`,R`NPV −90: the project destroys value`,R`NPV 100: half the gain belongs to each year`,R`NPV 0: you earn exactly the 10% of the alternative`], correct:3, exp:R`$-1{,}000 + 1{,}210/1.10^2 = 0$. Zero NPV means no extra value — you earn exactly what the alternative pays.`},
{q:R`Grandma and a parent each own half of the building. Why do both want the manager to invest?`, opts:[R`Because both of them prefer to receive their money next year`,R`Because the parent can pay Grandma her share of next year's receipt in cash today`,R`Because both can borrow or lend at 5%, so the NPV of 15,000 each helps both`,R`Because the manager decides for them by majority vote of the owners`], correct:2, exp:R`Grandma borrows 200,000 today against the 210,000 (+15,000 today); the parent gets 210,000 instead of 194,250 (+15,750 next year = 15,000 today). With a market rate, every owner gains from a positive NPV.`},
{q:R`The project adds value, but the manager would rather spend the money on a nicer office. What is this called?`, opts:[R`An agency problem`,R`Limited liability`,R`A liquidity problem`,R`The return rule`], correct:0, exp:R`Owners supply the money, someone else decides, and their incentives can differ — an agency problem. Boards, compensation, auditors, investor monitoring and takeovers keep managers accountable.`},
{q:R`Which legal form usually protects the owners' personal assets from business debts?`, opts:[R`Sole proprietor`,R`Partnership`,R`Corporation`,R`None — liability is always unlimited`], correct:2, exp:R`Shareholders of a corporation usually have limited liability: the investment can fall to zero, but business debts do not reach their home (unless they gave a personal guarantee). Sole proprietors and partners are usually liable without limit.`},
{q:R`Silicon Valley Bank lost USD 42bn of deposits in one day in March 2023. Which function of financial markets does the case illustrate?`, opts:[R`Risk management: fixing an input price today`,R`Liquidity: assets that pay later may not meet withdrawals today`,R`Information: learning about the bank from its share price`,R`Funding: raising money to build new branches`], correct:1, exp:R`Liquidity — cash leaving faster than it arrives. The bank's assets paid later, the withdrawals came today; it was closed the next day.`},
{q:R`In the Yoshimori survey (1995), where did most managers say the firm exists for its shareholders?`, opts:[R`Japan and Germany`,R`Germany and France`,R`France and Japan`,R`The US and the UK`], correct:3, exp:R`Shareholders: US 76%, UK 71%. All stakeholders: Japan 97%, Germany 83%, France 78%.`}
]},

/* ------------------------------------------------------------ CLASS 2 ------------------------------------------------------------ */
{id:'dt-c2', ch:2, title:'Valuing Cash-Flow Streams', date:'Class 2', drills:['perp','mort','proj','pvadd'],
examWeight:'Cash flows and timelines, adding PVs only at the same date, NPV of a stream, perpetuity, annuity, growing perpetuity and growing annuity (derived with the geometric series), delayed streams, instalment and mortgage examples — the tools behind the perpetuity, mortgage and project-NPV exam tasks',
summary:R`**Revision: the compounding convention.** USD 100 for 2 years and 3 months at 8% a year:
- Quarterly :: $100(1+0.08/4)^9 = 119.51$
- Monthly :: $100(1+0.08/12)^{27} = 119.65$
- Daily :: $100(1+0.08/365)^{821} = 119.71$
- Continuously :: $100e^{0.08\times2.25} = 119.72$

After exactly one year the same 8% quote gives 8.24% (quarterly), 8.30% (monthly) or 8.33% (continuous) effective. Compare offers by the effective annual rate $(1+j/m)^m - 1$.

**One payment.** $PV = C_t/(1+r)^t$ with periodic compounding, $PV = C_t e^{-rt}$ with continuous compounding, and $NPV = C_0 + C_1/(1+r)$ — invest if NPV > 0. A positive NPV makes every owner better off. Example: you need €6,000 in one year for a semester abroad, savings earn 3%: $P\times1.03 = 6{,}000 \Rightarrow P = 5{,}825.24$.

**Which discount rate?** Not the stock return you hope to earn. Compare alternatives with **similar risk and timing**; in the exercises the rate is given.

**Investment science** means committing resources now for later benefits and evaluating the whole pattern of payments and receipts over time. In this class the cash flows are known and the discount rate is stated; risk comes later in the course.

**Vocabulary:**
- Cash flow :: net cash at a date $t$: $C_t$ = receipts at $t$ − payments at $t$. $C_t > 0$: you receive cash; $C_t < 0$: you pay. Fix whose perspective you take first
- Cash-flow stream :: an ordered sequence of dated cash flows $C_0, C_1, \dots, C_T$, e.g. (−100, +120) = pay 100 today, receive 120 in one year
- Date 0 :: today; every number has a date, one period is usually one year
- Cash-flow diagram :: a timeline with arrows up (receipts) and down (payments), e.g. (−100, 10, 10, 10, 110) from the investor's view

**Add amounts only at the same date.** USD 100 today = 50 today + 50 today. But 100 in year 1 + 200 in year 2 ≠ 300 today. First bring every amount to today — **present values can be added**. At 7%: $100/1.07 = 93.46$ and $200/1.07^2 = 174.69$, so $PV_0 = 268.15$.

**Valuing a whole stream:**
$$PV_0 = \sum_{t=1}^{T}\frac{C_t}{(1+r)^t} \qquad NPV = C_0 + PV_0$$
$r$ is the rate per period; $C_0$ is paid today, so it is not discounted (negative for an investment). A building that takes two years: −170,000 today, −100,000 in year 1, +320,000 in year 2, at 5%: $NPV = -170{,}000 - 100{,}000/1.05 + 320{,}000/1.05^2 \approx -170{,}000 - 95{,}238 + 290{,}249 \approx 25{,}011$ — value created above the comparable-risk alternative.

**Perpetuity:** equal payments $C$, the first one period from now, forever ($r > 0$). Infinitely many payments, but a finite value — like $1 + \tfrac12 + \tfrac14 + \tfrac18 + \dots = 2$, where each term fills half of the remaining gap.

The geometric-series step: $S = 1 + x + x^2 + \dots$; multiply by $x$, subtract: $S - xS = 1 \Rightarrow S = 1/(1-x)$, valid for $0 < x < 1$. In the perpetuity, factor out $C/(1+r)$; the bracket is the same series with $x = 1/(1+r)$. Since $1 - x = r/(1+r)$, the $(1+r)$ cancels:
$$PV_0 = \frac{C}{r}$$
**The value C/r sits one period before the first payment.** Check by living on interest: €300,000 at 4% pays €12,000 a year forever, so $PV\times r = C \Rightarrow PV = C/r = 12{,}000/0.04 = 300{,}000$.

**What is an apartment in Oestrich-Winkel worth?** Rent €1,000 a month → $C = 12\times1{,}000 = 12{,}000$ a year; $r \approx 4\%$ (10-year fixed German mortgages, about 4–4.5% in October 2026) → $PV = 12{,}000/0.04 = 300{,}000$ (rough: no costs, no rent growth). The market agrees: asking rent €12.07 per m² a month (€144.84 a year) and price €3,661 per m² → price ÷ rent = 25.3 years of rent, rent ÷ price = 3.96% ≈ 4%. Buyers pay about 25 years of rent. Value $= 12\times$ monthly rent $/ r$: at 3.5% instead of 4.5% every value is 29% higher — **rates move prices**.

**Delayed perpetuity.** First payment in year 2: value $C/r = 300{,}000$ sits in year 1, so $PV_0 = 300{,}000/1.04 = 288{,}461.54$. First payment in year 5: $C/r$ sits in year 4, so $PV_0 = 300{,}000/1.04^4 = 256{,}441.26$. On the timeline the open circle is a value, not a payment. A real perpetuity: Britain's 3½% War Loan (borrowed 1917, perpetual from 1932, finally repaid in 2015); a pure perpetuity of £1,000 a year at 2% is worth £50,000.

**Annuity = perpetuity minus its tail.** A (payments 1…T) + B (payments from T+1 on) = F (a perpetuity), so $PV_0(A) = PV_0(F) - PV_0(B)$. The tail is worth $C/r$ at date T, i.e. $\frac{C}{r}\frac{1}{(1+r)^T}$ today:
$$PV_0 = \frac{C}{r}\left[1 - \frac{1}{(1+r)^T}\right]$$
Timing decides the formula:
- Perpetuity :: payments at 1, 2, 3, … → $C/r$
- Delayed perpetuity :: payments at T+1, T+2, … → $\frac{C}{r}\frac{1}{(1+r)^T}$
- Annuity :: payments at 1, …, T → $\frac{C}{r}\left[1-\frac{1}{(1+r)^T}\right]$

**A phone at "0% interest".** €1,200 cash or 24 × €50, first instalment in one month; your savings earn 0.25% a month: $PV = \frac{50}{0.0025}\left[1 - \frac{1}{1.0025^{24}}\right] = 20{,}000\times(1-0.94184) = 1{,}163.30$. The instalments win by €36.70. If another shop sells the phone for €1,150 cash, cash wins by €13.30. A "0% interest" contract does not make your own rate zero — compare values at one date. If the first instalment is due today (annuity due), every payment comes one month earlier: $PV = 1{,}163.30\times1.0025 = 1{,}166.21$.

**A car for €249 a month?** €3,000 today + €249 a month for 36 months + €9,000 at the end of month 36, monthly rate 0.4%, vs €18,000 cash: $3{,}000 + \frac{249}{0.004}\left[1-\frac{1}{1.004^{36}}\right] + \frac{9{,}000}{1.004^{36}} = 3{,}000 + 8{,}333.00 + 7{,}795.23 = 19{,}128.23 > 18{,}000$ → pay cash. The €20,964 paid in total is meaningless, because euros at different dates cannot simply be added.

**A house in the Rheingau.** Price €500,000, savings €80,000 → loan €420,000 at 0.5% a month for 360 months. Solve the annuity for $C$: $1.005^{360} = 6.022575$, annuity factor $(1 - 0.166042)/0.005 = 166.7916$, so $C = 420{,}000/166.7916 = 2{,}518.11$ per month. Keep full precision until the last step — a rounded factor changes the cents.
- First payment :: interest $420{,}000\times0.005 = 2{,}100$, debt repaid 418.11, new balance 419,581.89
- Later :: the payment stays fixed, its composition changes — less interest, more repayment
- After 15 years :: still €298,405 owed, 71% of the original loan
- Yearly rate :: banks quote $12\times0.5\% = 6\%$ compounded monthly; effective $1.005^{12} - 1 = 6.17\%$. The annuity formula needs the rate per payment period (0.5% a month)

**Growing streams.** Payment $t$ has grown $t-1$ times: $C_t = C_1(1+g)^{t-1}$ (scholarship €12,000 next year, then 2% more each year: 12,240, 12,484.80, …). Factor out $C_1/(1+r)$; the bracket is the geometric series with $x = (1+g)/(1+r)$, and $1 - x = (r-g)/(1+r)$:
$$\text{Growing perpetuity: } PV_0 = \frac{C_1}{r-g} \quad (r > g)$$
Check: €600,000 at 4% earns €24,000; spend half, reinvest half → capital grows at $g = \tfrac12\times4\% = 2\%$, and $12{,}000/(0.04-0.02) = 600{,}000$. If $g \ge r$ the discounted payments do not shrink and the sum has no finite value: €1 billion growing at 4% discounted at 10% is worth $1/(0.10-0.04) = 16.67$ billion, but €1 growing at 4% discounted at 2% has no finite present value.

**Growing annuity** = growing perpetuity minus its growing tail. Payment T+1 has grown T times, its value $C_1(1+g)^T/(r-g)$ sits at T:
$$PV_0 = \frac{C_1}{r-g}\left[1 - \left(\frac{1+g}{1+r}\right)^T\right]$$
The final formula holds for any $r \ne g$ — ten payments are only ten payments, always finite. €1 next year, 4% growth, exactly ten payments: 7.155 at 10%, 10.716 at 2%, and at $r = g$ every discounted payment is $1/1.04$, so $10/1.04 = 9.615$. In general $r = g \Rightarrow PV = T\,C_1/(1+r)$.

**A mistake in your book:** some older editions of Brealey, Myers & Allen print the growing annuity as $\frac{1}{r-g} - \frac{1}{(r-g)(1+r)^T}$ — the $(1+g)^T$ in the numerator is missing.

**Delayed growing annuity (your turn).** €12,000 first paid in year 3, then 2% more, four payments (years 3–6), r = 4%. Stand at year 2: $V_2 = \frac{12{,}000}{0.04-0.02}\left[1-\left(\frac{1.02}{1.04}\right)^4\right] = 44{,}839.47$, then $PV_0 = 44{,}839.47/1.04^2 = 41{,}456.61$. Draw the dates before choosing a formula.

**Four patterns, one valuation idea:**
- Level, forever :: perpetuity
- Level, stops after T :: annuity
- Growing at g, forever :: growing perpetuity
- Growing at g, stops after T :: growing annuity

Every shortcut prices cash flows at the same date; a stream that starts later is valued one period before its first payment, then discounted. Before investing (a coffee machine for €5,000 that "makes €250 a month for two years"), ask: net cash after costs? final value? discount rate? Next: bonds = coupons + final repayment. When you check an AI answer, check the dates, convergence and an explicit sum.`,
cards:[
{q:R`Can you add 100 in year 1 and 200 in year 2?`, a:R`Not directly — only amounts at the same date. Bring both to today first: at 7%, $93.46 + 174.69 = 268.15$. Present values can be added.`},
{q:R`Perpetuity formula and where its value sits`, a:R`$PV = C/r$ ($r>0$), first payment one period from now. C/r always sits one period before the first payment.`},
{q:R`Derive the perpetuity with the geometric series`, a:R`$S = 1+x+x^2+\dots = 1/(1-x)$ for $0<x<1$. With $x = 1/(1+r)$: $PV = \frac{C}{1+r}\cdot\frac{1+r}{r} = C/r$.`},
{q:R`€12,000 a year forever at 4%, first payment in year 5`, a:R`$C/r = 300{,}000$ sits in year 4 → $300{,}000/1.04^4 = 256{,}441.26$.`},
{q:R`Annuity formula and its logic`, a:R`$PV = \frac{C}{r}\left[1-\frac{1}{(1+r)^T}\right]$ = perpetuity minus the tail starting at T+1 (worth C/r at T).`},
{q:R`Phone: €1,200 cash vs 24 × €50 (monthly rate 0.25%)`, a:R`PV of instalments = 1,163.30 → instalments win by €36.70. Against a €1,150 cash price, cash wins by €13.30. First instalment today: ×1.0025 = 1,166.21.`},
{q:R`Mortgage: €420,000, 0.5% a month, 360 months`, a:R`$C = 420{,}000 / \frac{1-1.005^{-360}}{0.005} = 2{,}518.11$. First month: interest 2,100, repayment 418.11. After 15 years 71% still owed. EAR $1.005^{12}-1 = 6.17\%$.`},
{q:R`Growing perpetuity`, a:R`$PV = C_1/(r-g)$, needs $r > g$; $C_t = C_1(1+g)^{t-1}$. Value sits one period before $C_1$. If $g \ge r$: no finite value.`},
{q:R`Growing annuity`, a:R`$PV = \frac{C_1}{r-g}\left[1-\left(\frac{1+g}{1+r}\right)^T\right]$, valid for any $r\ne g$; at $r = g$: $PV = T C_1/(1+r)$.`},
{q:R`Apartment value from the rent`, a:R`Value = 12 × monthly rent / r. €1,000 at 4% → €300,000. Oestrich-Winkel: price ÷ rent ≈ 25 years, rent ÷ price ≈ 4%. Lower rates → higher prices.`},
{q:R`The book mistake (Brealey, Myers & Allen, older editions)`, a:R`Growing annuity printed without $(1+g)^T$: correct is $\frac{1}{r-g} - \frac{(1+g)^T}{(r-g)(1+r)^T}$.`}
],
quiz:[
{q:R`At 7% a year, what are USD 100 in year 1 plus USD 200 in year 2 worth today?`, opts:[R`USD 300.00`,R`USD 280.37`,R`USD 268.15`,R`USD 261.99`], correct:2, exp:R`$100/1.07 + 200/1.07^2 = 93.46 + 174.69 = 268.15$. Amounts at different dates must be brought to the same date before adding.`},
{q:R`A building costs 170,000 today and 100,000 in year 1 and is sold for 320,000 in year 2. At 5%, what is the NPV?`, opts:[R`About 25,011`,R`About 50,000`,R`About 20,249`,R`About −25,011`], correct:0, exp:R`$-170{,}000 - 100{,}000/1.05 + 320{,}000/1.05^2 \approx -170{,}000 - 95{,}238 + 290{,}249 = 25{,}011$. $C_0$ is not discounted.`},
{q:R`A perpetuity pays C every year forever, first payment in one year. Where does the value C/r sit on the timeline?`, opts:[R`At the date of the first payment`,R`One period before the first payment`,R`At the midpoint of all payments`,R`At infinity, so it must be discounted forever`], correct:1, exp:R`C/r is a value one period before the first payment. With the first payment in year 1 it is today's value; with the first payment in year 5 it sits in year 4.`},
{q:R`€12,000 a year forever at 4%, but the first payment comes in year 5. What is it worth today?`, opts:[R`€300,000.00`,R`€246,578.13`,R`€288,461.54`,R`€256,441.26`], correct:3, exp:R`$C/r = 300{,}000$ sits in year 4: $300{,}000/1.04^4 = 256{,}441.26$. Discounting five years (246,578) is the classic mistake; 288,461.54 is the value for a first payment in year 2.`},
{q:R`Why is an annuity worth "perpetuity minus tail"?`, opts:[R`A level annuity and the tail starting at T+1 together make a perpetuity`,R`Because annuity payments are smaller than perpetuity payments`,R`Because the tail is the interest that the annuity loses in each year of its life`,R`Because a perpetuity is always worth twice an annuity`], correct:0, exp:R`A (1…T) + B (T+1…∞) = F (perpetuity). So $PV(A) = C/r - \frac{C}{r}\frac{1}{(1+r)^T}$.`},
{q:R`A phone costs €1,200 cash or 24 monthly instalments of €50 (first in one month). Your savings earn 0.25% a month. Which is cheaper?`, opts:[R`Cash, because 24 × 50 = 1,200 is the same and the shop pays no interest`,R`Instalments, worth €1,163.30 today — they win by €36.70`,R`Instalments, because "0% interest" means they cost nothing`,R`Cash, because the instalments are worth €1,236.70 today`], correct:1, exp:R`$\frac{50}{0.0025}\left[1-\frac{1}{1.0025^{24}}\right] = 1{,}163.30 < 1{,}200$. "0% interest" does not make your own rate zero.`},
{q:R`Same 24 × €50, but the first instalment is due today. What happens to the present value?`, opts:[R`It falls to €1,160.40`,R`It stays at €1,163.30`,R`It rises to €1,166.21`,R`It rises to €1,200.00`], correct:2, exp:R`Every payment comes one month earlier and is discounted one month less: $1{,}163.30\times1.0025 = 1{,}166.21$.`},
{q:R`Car: €3,000 today + 36 × €249 + €9,000 at month 36 (0.4% a month), or €18,000 cash?`, opts:[R`Financing, because €20,964 paid over three years is spread out`,R`Financing, because its value today is only €17,128`,R`Indifferent, because both are worth about €18,000`,R`Cash, because the financing is worth €19,128.23 today`], correct:3, exp:R`$3{,}000 + 8{,}333.00 + 7{,}795.23 = 19{,}128.23 > 18{,}000$. The nominal total of 20,964 adds euros at different dates — meaningless.`},
{q:R`€420,000 mortgage, 0.5% a month, 360 month-end payments. What is the first month's split of the €2,518.11 payment?`, opts:[R`€2,100.00 interest and €418.11 debt repaid`,R`€1,166.67 debt repaid and €1,351.44 interest`,R`€418.11 interest and €2,100.00 debt repaid`,R`€2,518.11 interest and nothing repaid yet`], correct:0, exp:R`Interest = $420{,}000\times0.005 = 2{,}100$; the rest, 418.11, repays debt. The payment stays fixed; interest falls and repayment rises over time.`},
{q:R`Banks quote the 0.5% monthly mortgage rate as "6% a year". What does the borrower effectively pay per year?`, opts:[R`6.00%`,R`6.17%`,R`6.50%`,R`5.84%`], correct:1, exp:R`$1.005^{12} - 1 = 6.17\%$ — interest is charged on interest every month. The annuity formula still needs the rate per payment period, 0.5%.`},
{q:R`A growing perpetuity starts with C₁ next year and grows at g. When does C₁/(r − g) give a finite value?`, opts:[R`Always, as long as the first payment is positive`,R`Only when g is negative`,R`Only when g < r: discounted payments must shrink`,R`Only when r and g are both above 4%`], correct:2, exp:R`The series has $x = (1+g)/(1+r)$ and converges only for $x<1$, i.e. $g<r$. With $g\ge r$ the discounted payments do not shrink: no finite value.`},
{q:R`€1 next year, growing 4% a year, exactly ten payments, discounted at 4% (r = g). What is the value?`, opts:[R`It is infinite, because r = g`,R`€10.000`,R`€7.155`,R`€9.615`], correct:3, exp:R`At $r = g$ every discounted payment equals $1/1.04$, so $PV = 10/1.04 = 9.615$. A finite number of payments always has a finite value.`},
{q:R`€600,000 earns 4%. Half the interest is spent (€12,000), half reinvested. Which growth rate makes C₁/(r − g) = 600,000?`, opts:[R`g = 2%`,R`g = 4%`,R`g = 1%`,R`g = 3%`], correct:0, exp:R`Reinvesting half of 4% grows the capital — and the payout — at $g = \tfrac12\times4\% = 2\%$: $12{,}000/(0.04-0.02) = 600{,}000$.`},
{q:R`€12,000 first paid in year 3, then +2% a year, four payments in total, r = 4%. Where do you place the growing-annuity value before discounting?`, opts:[R`In year 3, at the first payment, then discount three years`,R`In year 2, one period before the first payment, then discount two years`,R`Today, because the annuity formula always gives today's value directly`,R`In year 6, at the last payment, then discount six years`], correct:1, exp:R`$V_2 = \frac{12{,}000}{0.02}\left[1-(1.02/1.04)^4\right] = 44{,}839.47$, then $44{,}839.47/1.04^2 = 41{,}456.61$.`},
{q:R`Rent €1,000 a month, rate 4%. Why is the apartment worth more at 3.5%?`, opts:[R`Because the rent rises when rates fall`,R`Because value = 12 × rent / r, so a lower r raises it`,R`Because banks lend more at low rates, so buyers can bid more for the same flat`,R`Because the perpetuity starts earlier at a lower rate`], correct:1, exp:R`$12\times1{,}000/0.035 = 342{,}857$ vs $300{,}000$ at 4% and $266{,}667$ at 4.5%. Rates move prices.`}
]},

/* ------------------------------------------------------------ CLASS 3 ------------------------------------------------------------ */
{id:'dt-c3', ch:3, title:'Bonds & Interest-Rate Risk', date:'Class 3', drills:['bond','dur','proj'],
examWeight:'FT 2025 Q6 worked through (and the key error), bond vocabulary, zero-coupon bonds and yield to maturity, pricing a coupon bond, premium/par/discount, coupon rate vs current yield vs YTM, semiannual coupons and the half-year-quote exam trap, Macaulay and modified duration, the duration rule, Austria 2120, SVB and default history',
summary:R`**Revision:** present values can be added once all payments sit at the same date (e.g. 10, 10, 10, 110 → $\frac{10}{1+r} + \frac{10}{(1+r)^2} + \frac{10}{(1+r)^3} + \frac{110}{(1+r)^4}$). Perpetuity $C/r$, annuity $\frac{C}{r}[1 - (1+r)^{-T}]$, growing perpetuity $C_1/(r-g)$ with $r>g$, growing annuity $\frac{C_1}{r-g}[1 - (\frac{1+g}{1+r})^T]$ — all valued one period before the first payment.

**From the exam: December 2025, Question 6 (13 points).** Invest USD 185,000 today in project CCC; cash flows: year 1: 0, year 2: 150, year 3: 0, year 4: 150, year 5: 0, year 6: 150, year 7: 300, doubling each year up to 9,600 in year 12, then 19,200 in year 13, growing 5% a year forever. Opportunity cost 8% (annual compounding).
- a) Diagram (2 P) :: draw the whole stream including −185,000 at year 0; three blocks: years 1–5, 6–12, 13 → ∞
- b) Years 1–5 (2 P) :: only years 2 and 4 pay: $150/1.08^2 + 150/1.08^4 = 128.601 + 110.254 \approx 238.86$
- c) Years 6–12 (4 P) :: stand at year 5 — a growing annuity of 7 payments, first 150, $g = 100\%$: $V_5 = \frac{150}{0.08-1.00}\left[1 - \left(\frac{2}{1.08}\right)^7\right] = (-163.04)\times(-73.69) = 12{,}014.15$, then $PV = 12{,}014.15/1.08^5 = 8{,}176.63$. $g > r$ is no problem: only 7 payments, so the value is finite (minus times minus is plus)
- d) Year 13 → ∞ (3 P) :: stand at year 12: $V_{12} = 19{,}200/(0.08-0.05) = 640{,}000$, $PV = 640{,}000/1.08^{12} = 254{,}152.81$ — **year 12, not year 13**: discount 12 years
- e) NPV (2 P) :: $238.86 + 8{,}176.63 + 254{,}152.81 - 185{,}000 \approx 77{,}568.3$

The value of a (growing) perpetuity sits one period before its first payment. (The official answer key had divided by $1.08^{13}$ — the slides confirm 254,152.81 and 77,568.3.)

**Finance is counting dollars.** A mortgage (monthly payments), a company (future profits) and a bond (interest, then the money back) are all streams of dated payments, valued the same way. Bonds are the simplest stream with a market price.

**Same promises, a fraction of the price.** Austria sold a 100-year bond in June 2020 (repays in June 2120, pays 0.85% interest a year). Every payment was made on time, yet the price per €100 of face value fell from about €140 (end of 2020) to about €30 (December 2025) — almost 80%. The payments never changed. Why? (Solved below.)

**Equity vs debt.** The VOC needs another €5m for new ships (assets €10m → €15m):
- Equity :: sell 500,000 new shares at €10 (now 1.5m shares) — new investors become owners and share in every future profit
- Debt :: borrow €5m — the lender receives interest and the money back, but no share of future profits

Same money for the same ships, a different claim.

**Words for today:**
- Bond (Anleihe) :: a promise to pay dated amounts
- Face value, principal, par (Nennwert) :: the amount repaid at the end
- Coupon (Kupon, Zinsschein) :: the regular interest payment — historically a slip cut off the certificate and handed in for the interest (e.g. USD 40m = 4% of a USD 1bn face value); today a bond is a database entry
- Maturity (Laufzeit, Fälligkeit) :: time until (and date of) the last payment
- Yield, yield to maturity, YTM (Rendite) :: the market interest rate, symbol $y$ (in Class 2: $r$)
- Current yield (laufende Verzinsung) :: coupon ÷ price
- Zero-coupon bond (Nullkuponanleihe) :: one payment only, at maturity
- Premium / discount (Agio / Disagio) :: price above / below face value
- Duration :: in years — the bond reacts like a zero of that maturity

A real bond: the Free State of Prussia, 1927, face value USD 1,000, coupon 6% a year paid twice yearly, stated maturity 15 October 1952.

**The simplest bond — a zero.** Pay €950 today for "€1,000 in one year": $y = (1{,}000-950)/950 = 5.26\%$. The **yield to maturity** is what you earn per year if you keep the bond until it pays. Pay €980 instead: $y = 2.04\%$. Pay more today, earn less — the promise of €1,000 never changes. Examples: German Bubills, US Treasury bills.

**Pricing a coupon bond.** Our classroom bond: face value €1,000, annual coupon 10% of face = €100, maturity 3 years; the final payment is coupon + face = €1,100. The investor pays $P$ today and receives 100, 100, 1,100. At a 5% yield (what bonds of similar risk pay):
$$P = \frac{100}{1.05} + \frac{100}{1.05^2} + \frac{1{,}100}{1.05^3} = 95.24 + 90.70 + 950.22 = 1{,}136.16$$
The same as an annuity plus the face value: $\frac{100}{0.05}\left[1 - \frac{1}{1.05^3}\right] + \frac{1{,}000}{1.05^3} = 272.32 + 863.84 = 1{,}136.16$. In general:
$$P = \frac{C}{y}\left[1 - \frac{1}{(1+y)^T}\right] + \frac{F}{(1+y)^T}$$

**Premium, par or discount?**
- Coupon rate above the yield → premium :: 5% yield → €1,136.16
- Coupon rate equal to the yield → par :: 10% yield → €1,000.00
- Coupon rate below the yield → discount :: 15% yield → €885.84

Why pay more than €1,000? At a 5% coupon the price would be €1,000; our bond adds €50 at each of the three dates, worth $50/1.05 + 50/1.05^2 + 50/1.05^3 = 136.16$. A 10% coupon is worth more when the yield is only 5%.

**Three percentages, one bond:**
- Coupon rate :: coupon ÷ face value = 100/1,000 = 10.00%
- Current yield :: coupon ÷ price = 100/1,136.16 = 8.80%
- Yield to maturity :: the single $y$ that solves $P = \sum C_t/(1+y)^t$ = 5.00%

For a premium bond: coupon rate > current yield > YTM. Finding the YTM is the calculation in reverse — the price and the promised payments are known, $y$ is unknown: $1{,}136.16 = \frac{100}{1+y} + \frac{100}{(1+y)^2} + \frac{1{,}100}{(1+y)^3}$ → $y = 5\%$. Excel: =RATE(3, 100, −1136.16, 1000); by hand: try, compare, adjust.

**Most bonds pay every six months.** Our bond with half-year coupons pays €50 at each of 6 half-years. Bond yields are quoted per year, compounded twice a year: "5% a year" means 2.5% per half-year. Same method — count half-years, use the half-year rate:
$$P = \frac{50}{0.025}\left[1 - \frac{1}{1.025^6}\right] + \frac{1{,}000}{1.025^6} = 275.41 + 862.30 = 1{,}137.70$$

**Exam trap: yearly coupons, half-year quote.** Same quote (2.5% per half-year), but the bond pays once a year (100, 100, 1,100). One year = two half-years, so the rate per year is $1.025^2 - 1 = 5.0625\%$, and $P = \frac{100}{1.050625} + \frac{100}{1.050625^2} + \frac{1{,}100}{1.050625^3} = 1{,}134.30$ — not 1,136.16. Read how the rate is quoted (as in the 2025 exam, Question 5, where each year also has its own rate — next class). Quote $q$ twice a year → $q/2$ per half-year, $(1+q/2)^2 - 1$ per year.

**Yield up → price down.** If market yields rise to 6% (no time passes, same promises), every future payment has a smaller present value. The contract stays fixed; the price moves along a convex curve: 4% → €1,166.51, 5% → €1,136.16, 6% → €1,106.92, 10% → €1,000 (par).

**The longer the wait, the bigger the reaction.** Zero-coupon bonds paying €1,000, yield from 5% to 6%:
- 1 year :: €952.38 → €943.40, −0.94%
- 3 years :: €863.84 → €839.62, −2.80%
- 10 years :: €613.91 → €558.39, −9.04%
- 30 years :: €231.38 → €174.11, −24.75% (a 100-year zero would lose 61%)

For otherwise identical bonds: longer maturity, bigger reaction.

**Why banks care.** A bank is one giant cash-flow stream: loans it gave, bonds it holds, deposits it owes (30 years of daily payments ≈ 11,000 numbers). When rates change, the value of the whole bank changes, so regulators ask every bank how sensitive it is. A small asset loss can be a large equity loss: assets €10bn, debt €9bn, equity €1bn — a 5% fall in asset value (to €9.5bn) halves equity to €0.5bn.

**Puzzle: which price moves more?** Bond A: 4 years, 40% coupon (€200 every six months). Bond B: 3 years, 1% coupon (€5 every six months). Both yields fall from 4.96% to 3.00% a year (2.48% → 1.50% per half-year). A: €2,257.28 → €2,384.90 (+5.65%). B: €890.87 → €943.03 (+5.86%). **B, the shorter bond, moves more.** A coupon bond is a bundle of zeros, one per payment — maturity alone does not tell the story.

**Duration (Macaulay duration)** = the average maturity of those zeros, weighted by value. Recipe: PV of each payment → share of the price → × its year → add.
$$D = \frac{\sum_t t \times PV(C_t)}{P}$$
- Bond A :: D = 2.85 years — 43.70% of its value comes at year 4, but large coupons pull the average forward
- Bond B :: D = 2.96 years — 97.39% of its value comes at year 3. Higher duration: B moves more. Puzzle solved
- Our 3-year bond :: shares 8.38%, 7.98%, 83.63% → $D = \frac{1\times95.24 + 2\times90.70 + 3\times950.22}{1{,}136.16} = 2.7525$ years

What does 2.75 years mean? The bond reacts to interest rates like a zero-coupon bond maturing in 2.75 years. It is **not** the time until you have your money back — after 2.75 years you have received only €200 of the €1,300. A zero's duration equals its maturity. (Named after Frederick Macaulay, 1938.)

**Modified duration** = $D/(1+y)$ = the % price change for one point of yield. Our bond: $2.7525/1.05 = 2.62$. Check: 4.5% → €1,151.19 (+1.32%), 5.5% → €1,121.41 (−1.30%) — one point (0.01) moves the price by 1.32% + 1.30% = 2.62%. (Why ÷ (1+y)? Calculus; in the exam, just divide.)

**The duration rule.** Δ means "change"; one point of yield = one percentage point = 0.01.
$$\frac{\Delta P}{P} \approx -\frac{D}{1+y}\,\Delta y$$
In words: % price change ≈ − modified duration × change in yield.
- 5% → 5.5% :: $-2.62\times0.005 = -1.31\%$ (exact −1.30%)
- 5% → 6% :: $-2.62\times0.01 = -2.62\%$ (exact −2.57%)
- 5% → 15% :: line −26.2% (€838), curve −22.0% (€886)

Duration draws a straight line on a curve: fine for small changes; for big changes discount the payments again.

**Worked exercise.** €1,000 face, 4% annual coupon, two years, yield 5%: $P = 40/1.05 + 1{,}040/1.05^2 = 981.41$ — a discount, because the 4% coupon is below the 5% yield. $D = (1\times38.0952 + 2\times943.3107)/981.4059 = 1.9612$ years. Yield up to 6%: $\Delta P/P \approx -\frac{1.9612}{1.05}\times0.01 = -1.87\%$; exact repricing €963.33, a fall of 1.84%.

**Austria solved.** The 2120 bond had a duration of about 73 years at the end of 2020 (yield 0.37%, price €140). Yield 1.37% → €72 (D 61), 2.37% → €43 (D 48), 3.25% → €30 (D 37). The first point of yield already halves the price; later points cost less because the duration shrinks and the curve bends. Yield +3 points with D ≈ 73 is far too big for the straight line, so we discount again. Nobody broke a promise.

**Did the investor lose money?** Hold to maturity: every promised euro arrives (100, 100, 1,100). Sell before maturity: you get today's lower market price. Default can reduce payments; inflation can reduce their purchasing power.

**Silicon Valley Bank, March 2023:** deposits poured in (2019–21) and the bank bought long-term bonds; rates rose in 2022 and its bonds lost ≈ USD 15bn while its equity was only ≈ USD 16bn; depositors withdrew USD 42bn in one day and the bank was closed. The bonds never defaulted — their prices fell.

**A bond is a promise, and promises can break.** Governments can print money, but only their own:
- Germany 1933 :: Prussia's dollar bond was paid only in part and cut by half in 1953
- Argentina 2001 :: default on USD 82bn of bonds (mostly US dollars), about 30% repaid later
- Greece 2012 :: borrowed in euros it could not print, lost 53.5% of face value

Printing money pays every bill, in money worth less — inflation. Today every payment was assumed to arrive; default risk comes later.

**There is more than one interest rate.** AAA euro-area government zero-coupon yields (ECB, 16 October 2026): 3 months 2.57%, 10 years 3.44%, 30 years 3.71%. Next class: price each payment with the rate for its own date (the spot curve), forward rates and inflation — that is how banks price bonds.

**Five rules from today:**
- 1 :: price = present value of the promised payments
- 2 :: yield up → price down; the contract does not change
- 3 :: coupon rate above the yield → premium; below → discount
- 4 :: duration D: the bond reacts like a zero-coupon bond maturing in D years
- 5 :: $\Delta P/P \approx -\frac{D}{1+y}\Delta y$ with Δy as a decimal (one point = 0.01); $D/(1+y)$ is the modified duration`,
cards:[
{q:R`FT 2025 Q6 d: growing perpetuity from year 13 — which year do you discount from?`, a:R`From year 12: $V_{12} = 19{,}200/(0.08-0.05) = 640{,}000$, $PV = 640{,}000/1.08^{12} = 254{,}152.81$. NPV ≈ 77,568.3.`},
{q:R`FT 2025 Q6 c: years 6–12 doubling — why is g = 100% > r allowed?`, a:R`Only 7 payments → a growing annuity is always finite. $V_5 = \frac{150}{0.08-1}[1-(2/1.08)^7] = 12{,}014.15$, $PV = 8{,}176.63$.`},
{q:R`Zero-coupon bond yield: pay €950 for €1,000 in one year`, a:R`$y = (1{,}000-950)/950 = 5.26\%$. Pay €980 → 2.04%. Pay more, earn less.`},
{q:R`Price of a coupon bond`, a:R`$P = \frac{C}{y}[1-(1+y)^{-T}] + F/(1+y)^T$. €1,000 face, 10% coupon, 3 years, y = 5%: 1,136.16.`},
{q:R`Premium, par, discount`, a:R`Coupon rate > yield → premium (above face); = → par; < → discount. 10% coupon: 5% → 1,136.16, 10% → 1,000, 15% → 885.84.`},
{q:R`Coupon rate vs current yield vs YTM`, a:R`Coupon/face (10%) · coupon/price (8.80%) · the y that solves the price equation (5%). Premium bond: coupon rate > current yield > YTM.`},
{q:R`Exam trap: yearly coupons, yield quoted 5% compounded twice a year`, a:R`Annual rate $1.025^2-1 = 5.0625\%$ → price 1,134.30 (not 1,136.16). Read how the rate is quoted.`},
{q:R`Macaulay duration`, a:R`$D = \sum t\,PV(C_t)/P$ in years: PV of each payment → share of price → × year → add. The bond reacts like a zero of maturity D. Zero: D = maturity.`},
{q:R`Modified duration and the duration rule`, a:R`$D/(1+y)$; $\Delta P/P \approx -\frac{D}{1+y}\Delta y$, Δy as a decimal (0.01 = one point). Our bond: 2.62 → +1 point ≈ −2.62% (exact −2.57%).`},
{q:R`Puzzle: 4-year 40% coupon bond vs 3-year 1% coupon bond — which moves more?`, a:R`The 3-year bond B (+5.86% vs +5.65%): D = 2.96 vs 2.85 years. Almost all of B's value comes at the end.`},
{q:R`Why did Austria's 2120 bond fall from €140 to €30?`, a:R`Yield rose from 0.37% to 3.25% with duration ≈ 73 years — no broken promise. Too big for the straight line; the duration shrinks as yields rise (the curve bends).`},
{q:R`Silicon Valley Bank`, a:R`Bought long-term bonds with deposits; rates rose → bonds lost ≈ USD 15bn vs equity ≈ USD 16bn → USD 42bn withdrawn in one day → closed. No default — prices fell.`}
],
quiz:[
{q:R`FT 2025 Q6: from year 13 the cash flow is 19,200, growing 5% forever, r = 8%. What is its present value?`, opts:[R`640,000/1.08¹³ = 235,326.67`,R`640,000/1.08¹² = 254,152.81`,R`19,200/0.08 = 240,000.00`,R`640,000/1.08¹⁴ = 217,895.06`], correct:1, exp:R`$19{,}200/(0.08-0.05) = 640{,}000$ is the value at year 12, one period before the first payment, so discount 12 years: 254,152.81. Dividing by $1.08^{13}$ was the answer-key error.`},
{q:R`FT 2025 Q6 c: seven payments from year 6 to 12, starting at 150 and doubling each year, r = 8%. Why can you use the growing-annuity formula although g = 100% > r?`, opts:[R`You cannot — g > r means the value is infinite`,R`Because the formula only needs g < 1, not g < r`,R`Because there are only 7 payments, so the value is finite`,R`Because the doubling stops before the 8% rate applies`], correct:2, exp:R`The growing-annuity formula holds for any $r\ne g$; only a growing perpetuity needs $g<r$. $V_5 = \frac{150}{0.08-1}[1-(2/1.08)^7] = 12{,}014.15$, $PV = 12{,}014.15/1.08^5 = 8{,}176.63$.`},
{q:R`You pay €950 today for a government paper that pays €1,000 in one year. What is the yield to maturity?`, opts:[R`5.00%`,R`4.75%`,R`2.04%`,R`5.26%`], correct:3, exp:R`$y = (1{,}000-950)/950 = 5.26\%$ — the gain relative to the price you paid. 2.04% would be the yield at a price of €980.`},
{q:R`€1,000 face value, 10% annual coupon, 3 years, yield 5%. What is the price?`, opts:[R`€1,136.16`,R`€1,000.00`,R`€1,150.00`,R`€1,134.30`], correct:0, exp:R`$100/1.05 + 100/1.05^2 + 1{,}100/1.05^3 = 95.24 + 90.70 + 950.22 = 1{,}136.16$. 1,134.30 is the price at 5.0625% (half-year quote).`},
{q:R`A bond's coupon rate is below the market yield. How does it trade?`, opts:[R`At a premium, because the coupons are paid for sure`,R`At a discount, below face value`,R`At par, because the face value is always repaid`,R`It depends only on the maturity`], correct:1, exp:R`Coupon rate < yield → discount; = → par; > → premium. Our 10% bond at a 15% yield: €885.84.`},
{q:R`The 10% coupon bond trades at €1,136.16 with a 5% YTM. What is its current yield?`, opts:[R`10.00%`,R`5.00%`,R`8.80%`,R`13.62%`], correct:2, exp:R`Current yield = coupon ÷ price = 100/1,136.16 = 8.80%. For a premium bond: coupon rate (10%) > current yield (8.80%) > YTM (5%).`},
{q:R`A bond pays annual coupons of €100 (3 years, €1,000 face), and the yield is quoted as 5% a year compounded twice a year. Which annual rate do you discount with?`, opts:[R`5.0000%, because the quote is already annual`,R`2.5000%, the half-year rate`,R`10.2500%, two half-years added`,R`5.0625%, because 1.025² − 1 = 5.0625%`], correct:3, exp:R`2.5% per half-year, so per year $1.025^2 - 1 = 5.0625\%$, price 1,134.30 — not 1,136.16. Read how the rate is quoted.`},
{q:R`Market yields rise from 5% to 6%; no time passes. What happens to the 3-year 10% bond?`, opts:[R`Its price falls to €1,106.92 — same payments, higher yield`,R`Its coupons rise to €106, so the price stays the same as before`,R`Its price rises, because new investors earn more`,R`Nothing — the contract is fixed`], correct:0, exp:R`Yield up → price down. The bond still promises 100, 100, 1,100, but each has a smaller PV at 6%.`},
{q:R`Zero-coupon bonds, yield from 5% to 6%. Which one loses about a quarter of its value?`, opts:[R`The 1-year zero`,R`The 3-year zero`,R`The 10-year zero`,R`The 30-year zero`], correct:3, exp:R`1 year −0.94%, 3 years −2.80%, 10 years −9.04%, 30 years −24.75%. Longer maturity, bigger reaction.`},
{q:R`Bond A (4 years, 40% coupon) and bond B (3 years, 1% coupon) see the same fall in yields. Which price rises more, and why?`, opts:[R`A, because it has the longer maturity`,R`A, because large coupons make it more sensitive`,R`B, because its duration is higher (2.96 vs 2.85 years)`,R`Both the same, because the yield change is the same`], correct:2, exp:R`B +5.86% vs A +5.65%. Almost all of B's value comes at the end, so its duration is higher. A coupon bond is a bundle of zeros.`},
{q:R`Our 3-year bond has a Macaulay duration of 2.75 years. What does that mean?`, opts:[R`It reacts to rates like a 2.75-year zero-coupon bond`,R`After 2.75 years you have your money back`,R`The price falls by 2.75% whenever the yield rises by one point`,R`It pays 2.75% of its value per year`], correct:0, exp:R`Duration is the value-weighted average maturity of the payments. After 2.75 years you have received only €200 of €1,300. The price sensitivity is the modified duration $2.7525/1.05 = 2.62$.`},
{q:R`D = 2.7525 years, y = 5%. Using the duration rule, by how much does the price change if the yield rises to 5.5%?`, opts:[R`About −2.75%`,R`About −1.31%`,R`About −0.50%`,R`About −2.62%`], correct:1, exp:R`$\Delta P/P \approx -\frac{2.7525}{1.05}\times0.005 = -2.62\times0.005 = -1.31\%$ (exact −1.30%). −2.62% would be the estimate for a full point.`},
{q:R`When is the duration rule a poor guide?`, opts:[R`When the bond pays coupons twice a year`,R`When the bond trades at a premium`,R`When the yield change is small`,R`When the yield change is large, e.g. 5% → 15%`], correct:3, exp:R`Duration draws a straight line on a convex curve: 5% → 15% gives −26.2% on the line but −22.0% on the curve. For big changes, discount the payments again.`},
{q:R`Austria's 100-year bond fell from about €140 to €30 between 2020 and 2025. Why?`, opts:[R`Austria missed coupon payments`,R`Inflation reduced the face value`,R`Yields rose about 3 points at a duration of about 73 years`,R`The coupon was cut from 0.85% to 0.37% in the restructuring`], correct:2, exp:R`Every payment was made. The yield rose from 0.37% to 3.25%; with D ≈ 73 the first point already halves the price. The duration shrinks as yields rise, so later points cost less.`},
{q:R`Assets €10bn, debt €9bn, equity €1bn. Asset values fall by 5%. What happens to equity?`, opts:[R`It falls by 5% to €0.95bn`,R`It falls by 50% to €0.5bn`,R`It stays at €1bn, because debt is fixed`,R`It falls by 10% to €0.9bn`], correct:1, exp:R`Assets €9.5bn − debt €9bn = equity €0.5bn: a small asset loss is a large equity loss. That is why regulators ask banks how sensitive they are to rates — and why SVB failed.`},
{q:R`Silicon Valley Bank's bonds lost about USD 15bn in 2022. What caused the loss?`, opts:[R`The issuers defaulted on their payments`,R`Interest rates rose, so the bond prices fell`,R`The bank sold the bonds at par`,R`Inflation lowered the coupons`], correct:1, exp:R`The bonds never defaulted — their prices fell when rates rose. With equity of only ≈ USD 16bn, depositors withdrew USD 42bn in one day and the bank was closed.`}
]},
/* ------------------------------------------------------------ CLASS 4 ------------------------------------------------------------ */
// Built from the lecture recording of 4 Nov 2026; checked against the Class 4 slides (Canvas) on 16 Nov 2026 — slide extras appended at the end of the summary.
{id:'dt-c4', ch:4, title:'Forward Rates, Inflation & Stocks', date:'Class 4', drills:['fwd','rates','bond','ret'],
examWeight:'From the recording of 4 Nov (slides not yet uploaded): bond description → cash-flow timeline (certain exam task), semiannual quotes, the forward-rate thought experiment in annual, semiannual and continuous units, why companies borrow and lock in rates, inflation and real vs nominal, why the ECB targets 2%, negative bond yields, what a share is (limited liability), IPO vs secondary market, trading traps (single-dealer markets, trading hours, FX, delayed prices), holding-period return with dividends, stock splits and buybacks, price = discounted dividends and the growing-perpetuity (Gordon) model',
summary:R`**Built from the lecture recording (4 Nov).** The slides for this class are not uploaded yet — check the numbers against them later.

**Where you stand.** With discounting, present values and bond pricing you can already solve roughly 30–40% of a past exam (all in Canvas). Karapandža: being correct is not enough — be **quick**, so practise until it is automatic.

**Exam task, 100% certain: bond description → cash flows.** Four inputs:
- Maturity :: the date of the last payment
- Face value :: the largest part of the last payment
- Coupon rate :: in percent **of the face value**
- Frequency :: annual or semiannual (twice a year)

Example: face value 1,000, coupon rate 10%, semiannual → 10% × 1,000 / 2 = **50 every six months**, and 1,050 at maturity. Annual coupons would be 100 once a year. Those are the only two rules. The timeline shows what the bond **pays you**; the price you pay today is the discounted value of those payments (so it is only known once you have calculated it).

**Pricing with a semiannual quote.** US government bond rates are almost always "nominal annual, compounded semiannually": 4.25% means 2.125% per half-year. So 6 months is discounted with $1.02125$, 1 year with $1.02125^2$, 1.5 years with $1.02125^3$ — never with $1.0425$. With continuous compounding the same 6-month payment would be $50/e^{0.0425\times0.5}$. **4% without a compounding frequency means nothing** — always ask in which units the rate is quoted.

**Why companies borrow.** Microsoft: about USD 750bn of assets (not market value), roughly 300-something billion of it debt — close to half. Having no debt is not optimal: with taxes, debt saves tax (in a world without taxes it would not matter; the optimal capital structure comes in later courses). Two forms: loans and bonds, and **forward contracts** — fixing today the rate on a loan you will take later. Lufthansa needs EUR 100m in two years: sign today at, say, 7%, or wait and carry the **interest-rate risk**. The forward rate is the market's current expectation — the first financial derivative of the course.

**The forward-rate thought experiment.** The yield curve tells you the rate from today to year 2 and from today to year 3 — but not from year 2 to year 3. Two ways to leave your money in the bank for 3 years:
- One contract :: 3 years at the 3-year rate → $(1+r_3)^3$
- Two contracts :: 2 years at the 2-year rate, plus a contract signed **today** to reinvest for year 3 → $(1+r_2)^2(1+f_{2,3})$

Both oblige you to the same thing, so they must be equal: $(1+r_3)^3 = (1+r_2)^2(1+f_{2,3})$. Only $f$ is unknown. Example: $r_2 = 4\%$, $r_3 = 5\%$ → $f_{2,3} = 1.05^3/1.04^2 - 1 = 7.03\%$.

Same logic for any gap, e.g. year 2 to year 7, in whatever units the data come in:
- Annual :: $(1+r_7)^7 = (1+r_2)^2(1+f_{2,7})^5$
- Semiannual :: $(1+r_7/2)^{14} = (1+r_2/2)^4(1+f_{2,7}/2)^{10}$
- Continuous :: $e^{7r_7} = e^{2r_2}\,e^{5f_{2,7}}$, so $f_{2,7} = (7r_7 - 2r_2)/5$

**Inflation = the average increase in prices.** It cuts what your money can buy. Your salary rises from 100 to 110 (+10% nominal) while prices rise 3%: real increase $1.10/1.03 - 1 = 6.80\%$ — you can buy 6.8% more apples, not 10%. Karapandža's caveat: official figures (e.g. 2.8%) depend on which basket is measured, and every government prefers a low number.

**Why the ECB targets 2%, not 0%.** The ECB's mandate is price stability, done as inflation targeting at 2%. Targeting misses up and down; aim at 0% and you regularly land in **deflation**. Falling prices make people delay purchases (the car is 2% cheaper next year), spending stalls and the economy stagnates. His critique: 2% a year is 2% poorer every year — over 30 years that adds up.

**Compare money through time in real terms.** Microsoft was worth USD 604bn in 1999 — in today's money more than Apple's "record" 800bn later. Adjusted for inflation, the Dutch East India Company (VOC, 1600s) is by far the most valuable company ever, more than double Nvidia today; PetroChina's IPO (≈ 1.2 trillion) beats today's "record" IPOs. Long-run averages also mislead: over 100 years Japan looks like a high-inflation country, although it had almost none (even deflation) for the last 50.

**Protecting yourself against inflation.** Invest at a return above inflation. Government bonds (UK example): nominal and real returns move together, but for long stretches **real** returns were negative — more pounds, less stuff. Bonds are a weak inflation hedge.

**Negative nominal yields (Germany, Netherlands, Nordics, roughly 2015–2020).** Lend the state EUR 100, get back less. Why would anyone buy? **Regulation**: banks must hold part of their deposits in AAA government bonds in the same currency — a forced buyer, so the seller sets the price. Karapandža calls it "taxation without legislation". Side effects: loans at negative rates (he took a EUR 1,000 loan in class and repaid 980), banks charging companies negative deposit rates. In a free market nobody would accept less than the safe-deposit box gives (0%).

**What a share is.** Ownership of a company with **limited liability** — the worst case is losing what you paid; you never pay the company's debts (the big change of the early 17th century). A bond = lending to the company: contractual coupons and face value. A share = dividends and a later sale price, **nothing guaranteed**.
- Which is riskier? :: The share, for the same company — bonds usually rank before shares in bankruptcy (assets sold, debt repaid first, shareholders get the rest)
- But :: read the contract — German high-yield bonds existed where bondholders ranked **after** shareholders

**How shares are traded.**
- Primary market (IPO) :: new shares sold by the company to investors after a roadshow and an auction — like buying a new car at the dealer; the company gets the money
- Listing rules :: e.g. uniform accounting standards (IFRS in Germany for listed firms, not German GAAP), so 130m in earnings really means more than 100m
- Secondary market :: the stock exchange (NYSE, Nasdaq, Xetra) matches buyers and sellers; the company receives **nothing** from these trades

History: NYSE floor auctions with hand signals until 2007; Nasdaq 1971 as the first electronic dealer market (slow dial-up, days to fill an order). Today ≈ 300,000 trades per second — a signal needs 0.02 s from New York to Frankfurt, so the price on your screen is already old.

**Traps for retail investors (the industry is "there to get you" — read the contract):**
- Fake shares :: "Alibaba" in a German app is usually a special-purpose vehicle (Cayman Islands) that tracks the price; in bankruptcy you get nothing
- Single-dealer market :: app brokers route orders to one dealer instead of an auction exchange (Trade Republic → LS Exchange of Lang & Schwarz, Scalable → gettex with Baader Bank) and receive **payment for order flow**; the dealer keeps the spread
- Trading hours :: only trade while the stock's main exchange is open — US stocks after 15:30 German time, Mercedes during Xetra hours (9:00–17:30); outside those hours spreads can reach ≈ 10%
- FX :: a US stock shown in euros still costs a conversion spread (2–4%)
- Prices :: free quotes are usually delayed 10–15 minutes and come from one venue; the price you pay is set by bid and ask at execution
- Taxes in Germany :: withheld by the broker (capital gains, solidarity surcharge, church tax), which is why foreign brokers are impractical

**US reporting is criminal law.** In the 10-K (annual report to the SEC) the CEO and CFO are personally liable: misstating a few million can mean around 20 years in prison. In Germany it is an offence you can insure against. Karapandža's story: a fund manager who only ever showed his "predictions" after the fact ended up in prison.

**Return on a share** = price gain plus dividend, over the price you paid:
$$R = \frac{P_1 - P_0 + D_1}{P_0}$$
Pay 100, price 110, dividend 5 → $(110 - 100 + 5)/100 = 15\%$. Watch the data: charts are usually adjusted for **stock splits** (1 share → 2, price halves, your stake is unchanged) and **share buybacks** (fewer shares, more value per share), sometimes also for dividends — so an old chart price is not the price traded on that day.

**What a share should be worth: discounted cash flows.** Dividends look like coupons, the sale price like a face value — only nothing is fixed, and the discount rate $r$ must match the company's **risk**.
$$P_0 = \frac{D_1}{1+r} + \frac{P_1}{1+r} = \frac{D_1}{1+r} + \frac{D_2}{(1+r)^2} + \frac{P_2}{(1+r)^2} = \dots$$
Push the horizon out and the far-away price matters less and less, the dividends more and more. Companies live forever, so:
- Constant dividend :: $P_0 = D/r$ (perpetuity)
- Dividend growing at $g$ forever :: $P_0 = \frac{D_1}{r-g}$ (growing perpetuity, $r > g$), e.g. $D_1 = 3$, $r = 8\%$, $g = 4\%$ → 75

Why dividends and not prices: dividends are stable and predictable, prices are not (a known puzzle). Companies pay ever fewer dividends and bet on growth, which makes valuing them harder. Next: risk.

**Checked against the Class 4 slides (uploaded on Canvas) — extra slide content:**
- Duration recipe :: PV of each payment → its share of the price → × its year → add. Example: 1,000 face, 10% annual coupon, 3 years, yield 5% → price 1,136.16 and duration 2.75 years: the bond reacts to rates like a zero-coupon bond maturing in 2.75 years
- Modified duration :: $D/(1+y) = 2.7525/1.05 = 2.62$ = % price change for one point of yield. Check: at 5.5% the price falls 1.30%, at 4.5% it rises 1.32% — together 2.62% for one point. Good for small moves (the ECB moves in 0.25-point steps)
- One yield, three ways to say it :: 1,000 face, 50 semiannual coupons, 2 years, half-year rates 2.0/2.5/3.0/3.5% → price 1,057.38 → yield 3.44% per half-year = 6.88% a year nominal = 7.00% a year effective. Always ask: per half-year or per year, nominal or effective?
- Where the yield curve comes from :: a zero-coupon price gives the rate directly; coupon bonds mix many rates in one price, so central banks fit a smooth curve through many bonds (ECB/Bundesbank: Nelson–Siegel–Svensson; US Treasury: a spline). You read the curve in the right units
- Normal vs inverted curve :: normal = lend longer, earn more per year; inverted = investors expect a crash, buy long bonds, long yields fall. A signal, not a law: the US curve was inverted Oct 2022–Dec 2024 without a recession (Harvey 1986 found inverted curves predicted recessions)
- The baker’s contract :: a supermarket fixes today the bread price for deliveries from year 2; the baker needs a one-year loan in year 2, so to fix his price today he must fix his rate today — the forward rate $f_{2,3}$
- Gordon model, handle with care :: DIV₁ = 3, r = 12%: g = 8% → 75, 9% → 100, 10% → 150, 11% → 300. Turned around: a price of 100 means the market assumes 9% growth forever
- Five rules of Class 4 :: discount each payment with the spot rate for its own date · US Treasury rates are compounded twice a year (r/2 per half-year) · the forward rate is fixed today for a loan later and hidden in today’s spot rates · real = more apples · a stock is worth the PV of its expected dividends, with growth DIV₁/(r − g)`,
cards:[
{q:R`Bond: face value 1,000, coupon rate 10%, semiannual, 3 years — the cash flows?`, a:R`50 every six months (10% × 1,000 / 2), and 1,050 at the end (year 3). Annual coupons would be 100 once a year.`},
{q:R`A US government rate of 4.25% — how do you discount a payment in 1.5 years?`, a:R`Nominal annual, compounded semiannually → 2.125% per half-year: divide by $1.02125^3$. Continuous instead: $e^{0.0425\times1.5}$.`},
{q:R`Forward rate from year 2 to year 3 (annual rates)`, a:R`$(1+r_3)^3 = (1+r_2)^2(1+f_{2,3})$ — one 3-year contract = a 2-year contract plus a forward signed today. $r_2 = 4\%$, $r_3 = 5\%$ → 7.03%.`},
{q:R`Forward rate from year 2 to year 7, continuous and semiannual`, a:R`Continuous: $e^{7r_7} = e^{2r_2}e^{5f}$ → $f = (7r_7 - 2r_2)/5$. Semiannual: $(1+r_7/2)^{14} = (1+r_2/2)^4(1+f/2)^{10}$.`},
{q:R`Salary +10% nominal, inflation 3% — real increase?`, a:R`$1.10/1.03 - 1 = 6.80\%$ (not 7%).`},
{q:R`Why does the ECB target 2% and not 0%?`, a:R`It misses its target both ways; at 0% it would often hit deflation → people delay purchases → stagnation. A 2% target keeps a buffer.`},
{q:R`Why were German government bond yields negative (≈ 2015–2020)?`, a:R`Regulation forced banks to hold AAA government bonds in their own currency — a forced buyer lets the seller set the price. "Taxation without legislation."`},
{q:R`Primary vs secondary market`, a:R`Primary = IPO, the company sells new shares and gets the money. Secondary = stock exchange, investors trade with each other; the company gets nothing.`},
{q:R`Share vs bond of the same company — which is riskier, and the catch?`, a:R`The share: nothing is guaranteed and bonds usually rank first in bankruptcy. Catch: the contract decides the ranking — read it.`},
{q:R`Holding-period return: buy at 100, price 110, dividend 5`, a:R`$R = (P_1 - P_0 + D_1)/P_0 = (110 - 100 + 5)/100 = 15\%$.`},
{q:R`Dividend discount model`, a:R`$P_0 = \sum D_t/(1+r)^t$ (+ far-away price that matters less and less). Constant: $D/r$. Growing forever: $D_1/(r-g)$, $r > g$.`},
{q:R`Retail trading rules from Karapandža`, a:R`Trade only while the main exchange is open (US stocks after 15:30) · watch FX spreads · free quotes are delayed · check it is the real share, not an SPV · read the contract.`}
],
quiz:[
{q:R`A bond has a face value of 1,000, a coupon rate of 8% paid semiannually and matures in 2 years. What does it pay?`, opts:[R`80 per year, 1,080 at the end`,R`40 every six months, 1,040 at the end`,R`8 every six months, 1,008 at the end`,R`40 every six months, 1,000 at the end`], correct:1, exp:R`Coupon = 8% × 1,000 / 2 = 40 every half-year; the last payment is coupon + face = 1,040. 80 once a year would be annual coupons.`},
{q:R`A US government bond rate is quoted at 4.25% (nominal annual, semiannual compounding). With which factor do you discount a payment in one year?`, opts:[R`$1.0425$`,R`$1.02125$`,R`$1.02125^2$`,R`$e^{0.0425}$`], correct:2, exp:R`4.25% means 2.125% per half-year; one year = two half-years → $1.02125^2$. $e^{0.0425}$ would be continuous compounding.`},
{q:R`The 2-year spot rate is 4% and the 3-year spot rate 5% (annual compounding). What is the forward rate from year 2 to year 3?`, opts:[R`5.00%`,R`6.00%`,R`7.03%`,R`9.00%`], correct:2, exp:R`$(1+r_3)^3 = (1+r_2)^2(1+f)$ → $f = 1.05^3/1.04^2 - 1 = 1.157625/1.0816 - 1 = 7.03\%$.`},
{q:R`Why must $(1+r_3)^3 = (1+r_2)^2(1+f_{2,3})$ hold?`, opts:[R`Because forward rates are set by the central bank`,R`Because both routes oblige you to leave your money in the bank for 3 years`,R`Because spot rates are always equal across maturities`,R`Because the yield curve is always upward-sloping`], correct:1, exp:R`One 3-year contract and "2-year contract + forward signed today" are the same commitment, so they must pay the same — only $f$ is unknown.`},
{q:R`With continuous compounding, which equation gives the forward rate from year 2 to year 7?`, opts:[R`$e^{7r_7} = e^{2r_2}e^{5f}$`,R`$e^{7r_7} = e^{2r_2}e^{7f}$`,R`$(1+r_7)^7 = (1+r_2)^2(1+f)^5$`,R`$7r_7 = 2r_2 + 7f$`], correct:0, exp:R`Years 2 to 7 are 5 years: $e^{7r_7} = e^{2r_2}e^{5f}$, so $f = (7r_7 - 2r_2)/5$. Option c is the annual-compounding version.`},
{q:R`Your salary rises from 100 to 110 while inflation is 3%. What is your real salary increase?`, opts:[R`10.00%`,R`7.00%`,R`6.80%`,R`13.30%`], correct:2, exp:R`$1.10/1.03 - 1 = 6.80\%$. Subtracting (10% − 3% = 7%) is only an approximation.`},
{q:R`Why does the ECB target 2% inflation rather than 0%?`, opts:[R`Because 2% makes everyone richer each year`,R`Because missing a 0% target would often mean deflation, and people would delay purchases`,R`Because governments must repay their debts at 2%`,R`Because inflation below 2% cannot be measured`], correct:1, exp:R`Targeting is imprecise. Aim at 0% and you regularly fall into deflation: things get cheaper, people wait, spending stalls, the economy stagnates.`},
{q:R`Why could German government bonds have negative nominal yields around 2015–2020?`, opts:[R`Because Germany was close to default`,R`Because inflation was negative for years`,R`Because regulation forced banks to hold AAA government bonds — a forced buyer`,R`Because German bonds paid no coupons`], correct:2, exp:R`Banks had to hold part of their deposits in AAA government bonds in their own currency. Without the rule, nobody would accept less than the 0% of a safe-deposit box.`},
{q:R`What does limited liability mean for a shareholder?`, opts:[R`The company must pay a minimum dividend`,R`The worst case is losing the money paid for the share; you never pay the company's debts`,R`Shareholders are repaid before bondholders in bankruptcy`,R`The share price cannot fall below the IPO price`], correct:1, exp:R`You own part of the company but are not liable for what it does — the most you can lose is your investment.`},
{q:R`You sell a SpaceX share on Nasdaq to another investor. What does SpaceX receive?`, opts:[R`The full sale price`,R`The difference to the IPO price`,R`A small exchange fee`,R`Nothing — it is a secondary-market trade between two investors`], correct:3, exp:R`Only in the primary market (IPO) does the company sell shares and receive money. On the exchange, investors trade with each other.`},
{q:R`Which statement about stocks and bonds of the same company is right?`, opts:[R`Bondholders are always repaid before shareholders, whatever the contract says`,R`The share is typically riskier, but the contract decides who is repaid first`,R`Dividends are fixed in the share contract like coupons`,R`Bonds are riskier because coupons can be cancelled`], correct:1, exp:R`Usually bonds rank first in bankruptcy, so the share is riskier — but contracts can say otherwise (German high-yield bonds ranked after shareholders). Read the contract.`},
{q:R`You buy a share at 100. A year later it trades at 110 and paid a dividend of 5. What is your return?`, opts:[R`5%`,R`10%`,R`15%`,R`15.5%`], correct:2, exp:R`$R = (P_1 - P_0 + D_1)/P_0 = (110 - 100 + 5)/100 = 15\%$.`},
{q:R`A company announces a 1-for-2 stock split; one share cost 100. What happens?`, opts:[R`You own twice as much of the company`,R`Each share now costs about 50 and your stake is unchanged`,R`The company receives new money`,R`The dividend per share doubles`], correct:1, exp:R`One share becomes two, the price halves, your percentage ownership stays the same. Charts are usually adjusted for splits, so old chart prices are not the prices traded then.`},
{q:R`A share pays a dividend of 3 next year, growing 4% a year forever; the risk-appropriate rate is 8%. Fundamental value?`, opts:[R`37.50`,R`75.00`,R`78.00`,R`25.00`], correct:1, exp:R`Growing perpetuity: $P_0 = D_1/(r-g) = 3/(0.08 - 0.04) = 75$. $3/0.08 = 37.50$ ignores growth.`},
{q:R`Why does Karapandža value shares through dividends rather than a far-away sale price?`, opts:[R`Because prices are always lower than dividends`,R`Because the further out the horizon, the less the price matters, and dividends are stable and predictable`,R`Because dividends are guaranteed by law`,R`Because shares cannot be sold after 50 years`], correct:1, exp:R`$P_0 = \sum D_t/(1+r)^t + P_T/(1+r)^T$; as T grows, the discounted price shrinks and the value rests on dividends, which are much more predictable than prices.`},
{q:R`You want to buy US stocks through a German app. When should you trade, according to Karapandža?`, opts:[R`Early in the morning, before the US opens`,R`Around noon German time`,R`After 15:30 German time, while the US exchange is open`,R`Late in the evening, when spreads are smallest`], correct:2, exp:R`Trade while the stock's main exchange is open — then arbitrage keeps the single-dealer price close; outside those hours spreads can reach about 10%.`}
]},
/* ------------------------------------------------------------ CLASS 5 ------------------------------------------------------------ */
// Built from the "New Slides class5" deck (Canvas, 4 Nov 2026).
{id:'dt-c5', ch:5, title:'Valuing Stocks & Growth', date:'Class 5', drills:['ret','fwd','rates'],
examWeight:'Holding-period return (two resit 2025 questions on the slides), dividend discount model, no-growth value EPS/r, Gordon model DIV₁/(r − g), sustainable growth g = plowback × ROE, PVGO and when growth adds value, free-cash-flow valuation with horizon value, P/E and market value (exam 2019 Q2), plus the forward-rate and real-rate revision — Karapandža: "all five rules come back in the exam"',
summary:R`**Source:** Class 5 slides "Valuing stocks" (Brealey, Myers and Allen, chapter 4). Questions of the class: what is a share worth, and where does growth come from?

**Revision: pricing a US Treasury note with the curve.** 1,000 face, 10% coupon paid twice a year, 2 years → 50, 50, 50, 1,050. Half-year rates from the curve: 4.25%/2, 4.36%/2, 4.46%/2, 4.56%/2:
$P = \frac{50}{1.02125} + \frac{50}{1.0218^2} + \frac{50}{1.0223^3} + \frac{1050}{1.0228^4} = 1{,}103.11$ — above 1,000 because the note pays 10% while the market pays about 4.5%.

**Revision: forward rates — two more examples.**
- Rate for year 3 :: 2-year zero 8.995%, 3-year zero 9.660% → $1+f_{2,3} = 1.0966^3/1.08995^2 = 1.1100$ → $f_{2,3} = 11.0\%$
- Project from year 2 to year 7 :: $r_2 = 5\%$, $r_7 = 7.05\%$ → $(1+f_{2,7})^5 = 1.0705^7/1.05^2$ → $f_{2,7} = 7.88\%$
- Why is the forward above the 7-year spot rate? :: the 7-year rate covers years 1–7 (on average 3½ years away), the forward only years 3–7 (4½ years away). Further away = more uncertain = higher rate when the curve slopes up; 7.05% mixes 5% for years 1–2 with the forward, so the forward must be higher. With an inverted curve it is the other way round

**Revision: inflation.** Inflation = what the same basket costs a year later (CPI; in Germany measured monthly by Destatis). Measuring it is hard: products change (which phone replaces last year’s?), places and seasons differ, and governments have a reason to report low inflation — know how the number is made. Germany: 6.9% in 2022, October 2026 2.8%.

**Nominal vs real — count apples.** €100 buys 100 apples at €1. Invest at 10% → €110; inflation 3% → apple costs €1.03 → 110/1.03 = 106.8 apples: real rate 6.8%, not 7%.
- Exact :: $(1 + \text{nominal}) = (1 + \text{real})(1 + \text{inflation})$
- Shortcut :: nominal ≈ real + inflation — fine only for small rates
- Microsoft example :: worth 604bn at the end of 1999; US prices doubled (CPI 168.3 → 336.9), so that is 1,209bn in today’s dollars. Nvidia today 4,989bn = 2,492bn in 1999 dollars: 8 times Microsoft in dollars, about 4 times in apples
- Long run :: countries that stayed out of the wars had the lowest inflation 1900–2006; Germany (two wars; 1922–23 hyperinflation not even counted) is among the lowest since the 1960s. UK bond yields follow inflation: the gap between nominal and real 10-year yields ≈ expected inflation; real yields were below zero 2011–2022 (lenders lost apples)

**From bonds to stocks.**
- Bond :: you are a lender; coupons and face value are promised; price = PV of the payments
- Stock :: you are an owner; dividends are hoped for, at the end you get the price you can sell for; price = PV of the payments too — same method, but nobody promises a stock’s payments
- Primary market :: the company sells new shares (often an IPO after a roadshow) and gets the money — SpaceX sold 75bn of new shares in June 2026, the largest IPO ever
- Secondary market :: investors trade among themselves; the company gets nothing (SpaceX on Nasdaq since 12 June)
- Trading :: auction markets (NYSE floor until 2007), dealer/electronic markets (NASDAQ 1971, Xetra), ETFs (one fund share owns a little of many firms); high-frequency traders do thousands of trades per second — New York to Frankfurt (6,200 km) takes light 0.021 s, so being close to the exchange is worth money
- Balance sheet :: assets = liabilities + equity, to the dollar (Microsoft 30 June 2026: 758.4 − 316.0 = 442.4bn equity). After Enron and WorldCom, the Sarbanes–Oxley Act (2002) makes CEO and CFO sign the report personally — false numbers on purpose: up to 5 million and 20 years in prison

**What a stock earns in one year:** $r = \frac{DIV_1 + P_1 - P_0}{P_0}$ (also called the market capitalization rate). Buy at 100, dividend 5, sell at 110 → 15%.
- Resit 2025 Q5 (4 P) :: invest 500 in Pfizer, price falls 20%, dividend 3 → $r = -20\% + 3/500 = -19.4\%$; you have $500 \times 0.806 = 403$ (shares 400 + dividend 3)
- Resit 2025 Q4 (6 P) :: price 100, dividend 5 "at the end of the present year" growing 10% → paid in one year as 5.50; sold for 104 → $r = 4\% + 5.5\% = 9.5\%$. Read every date in the question

**Dividend discount model.** $P_0 = \frac{DIV_1}{1+r} + \frac{DIV_2}{(1+r)^2} + \dots + \frac{DIV_H + P_H}{(1+r)^H}$ — r = what investors expect from equally risky stocks, H = how long you hold.
- Company XYZ :: dividends 3.00, 3.24, 3.50 and a sale price of 94.48 after 3 years, r = 12% → 2.68 + 2.58 + 69.74 = **75.00**; do not pay more if you trust the forecasts
- Fifty years away :: at r = 10% a price of 100 in year 50 is worth 0.85 today ($1/1.1^{50} = 0.0085$); if it were only 50, the mistake is under half a dollar. The longer the horizon, the more of the value comes from dividends — so a share is worth the PV of **all** its future dividends (XYZ total is always 75, whatever H)

**No growth:** a firm that pays out all earnings and invests nothing cannot grow: $DIV_1 = EPS_1$ and $P_0 = DIV_1/r = EPS_1/r$ (EPS = earnings per share; in this course earnings = profits).

**Growth forever — Gordon model (1959):** $P_0 = \frac{DIV_1}{r-g}$. Problems: growth changes with booms and recessions; no dividend next year gives zero; r close to g → a small mistake gives a huge error. Turned around: price 100, DIV₁ 3, r 12% → g = 9%.

**Why value a share that already has a price?** Not every firm is listed (Twitter 2011), and courts need a formula a judge can follow: in Motorola vs Apple (Mannheim 2011–12) Apple asked for a €2bn guarantee, the court set €100m; when German firms buy out small shareholders, courts check the price with $DIV_1/(r-g)$.

**Pay out or plow back.** Earnings per share are split into dividends (payout ratio) and reinvestment (plowback ratio b = 1 − payout). ROE = what each extra dollar in the business earns (Dutch East India Company: 100 more in ships earns 25 a year → ROE 25%).
- Sustainable growth :: $g = b \times ROE$
- Example :: EPS 8.33, r = 15%. Pay out everything → $P_0 = 8.33/0.15 = 55.53$. Reinvest 40% at ROE 25% → $g = 0.40 \times 0.25 = 10\%$, $DIV_1 = 8.33 \times 0.6 = 5.00$, $P_0 = 5/(0.15 - 0.10) = 100$. The dividend falls but the price rises
- PVGO :: $P_0 = \frac{EPS_1}{r} + PVGO$ — 100 = 55.53 (assets in place) + 44.47 (present value of growth opportunities = NPV of all future investments)

**Does growth always add value?** Same firm, plowback 40%:
- ROE 25% :: g = 10%, price 100, PVGO +44
- ROE 15% (= r) :: g = 6%, price 56, PVGO 0 — reinvesting at ROE = r adds nothing
- ROE 10% (< r) :: g = 4%, price 45, PVGO −11 — growth destroys value; better pay it out

**Your turn — Mexican Motors (Canvas quiz):** price 200 pesos, next dividend 8.5, analysts expect 7.5% growth → $r = 8.5/200 + 0.075 = 11.75\%$. With ROE 12% and payout 50%: $g = 6\%$ and $P_0 = 8.5/(0.1175 - 0.06) = 147.83$ — the analysts’ 7.5% does not fit.

**Growth slows down.** How long can high growth last? Shorter for big firms and easy entry for competitors, longer for firms growing fast now. Stable growth forever cannot be above the growth of the economy.

**Valuing a business: free cash flows + horizon value.**
$PV = \frac{FCF_1}{1+r} + \dots + \frac{FCF_H}{(1+r)^H} + \frac{PV_H}{(1+r)^H}$ — FCF = what the business earns minus what it invests (can be negative); r must match the risk of the cash flows. (Your first consulting job: a due diligence — the folders hold the past, but the value needs the future.)
- Bakery chain / Concatenator (BMA) :: earnings 12% of assets; years 1–6 heavy investment → FCF −0.80, −0.96, −1.15, −1.39, −0.20, −0.23; from year 7 half of earnings reinvested at 12% → g = 6%, FCF₇ = 1.59; r = 10%
- PV of near-term FCF :: −3.6
- Horizon value in year 6 :: $PV_6 = 1.59/(0.10 - 0.06) = 39.75$ → today $39.75/1.1^6 = 22.4$
- Total :: −3.6 + 22.4 = **18.8 million**

**Price–earnings ratio.** No growth: $P_0/EPS_1 = 1/r$. Example: 55.53/8.33 = 6.7 without growth, 100/8.33 = 12.0 with growth — a high P/E means the market expects growth opportunities (PVGO). Valuing by comparison: apply the P/E of similar listed firms to your firm’s earnings.
- Exam 2019 Q2 (2 P) :: GE has 10.3bn shares at 37.10, P/E 18.3 → market value = shares × price = **382bn**. The P/E is a distractor "to see if you know what you are doing"

**Twitter 2011.** About 800m paid for about 10% → 8bn for the firm; revenue about 200m, profit about zero. Pretend 200m profit next year and a value of 10bn → $r - g = 2\%$. Small mistakes, huge errors: g 8% instead of 10% → 5bn; profit 20m → 1bn; both → 500m — less than what was paid for 10%.

**Five rules of Class 5 (all come back in the exam):**
- Real = more apples :: $(1+\text{nominal}) = (1+\text{real})(1+\text{inflation})$
- A share is worth the PV of its dividends :: growth forever $P_0 = DIV_1/(r-g)$
- Growth comes from reinvesting :: $g = b \times ROE$
- Growth adds value only if ROE > r :: $P_0 = EPS_1/r + PVGO$
- r close to g :: small mistakes give huge errors

**Before we leave (exit questions):** salary +5%, prices +3% → 1.05/1.03 − 1 = 1.94% more apples. EPS 6 fully paid out, r 12% → 50. Reinvest half at ROE 18% → g = 9%, DIV₁ = 3, price 3/0.03 = 100, PVGO = 50.`,
cards:[
{q:R`Holding-period / expected return of a stock`, a:R`$r = (DIV_1 + P_1 - P_0)/P_0$. Pfizer: −20% price, dividend 3 on 500 → −19.4%, 403 after a year.`},
{q:R`Dividend discount model`, a:R`$P_0 = \sum_{t=1}^{H} DIV_t/(1+r)^t + P_H/(1+r)^H$; the further away H, the less $P_H$ matters → value = PV of all dividends. XYZ: 3, 3.24, 3.50 + 94.48 at 12% → 75.`},
{q:R`No-growth value`, a:R`All earnings paid out, nothing invested: $P_0 = DIV_1/r = EPS_1/r$.`},
{q:R`Gordon growth model and its problems`, a:R`$P_0 = DIV_1/(r-g)$. Growth changes, no dividend gives zero, r close to g → huge errors (DIV₁ 3, r 12%: g 8% → 75, 9% → 100, 10% → 150, 11% → 300).`},
{q:R`Sustainable growth rate`, a:R`$g = b \times ROE$, b = plowback ratio = 1 − payout ratio. 40% × 25% = 10%.`},
{q:R`PVGO`, a:R`$P_0 = EPS_1/r + PVGO$. EPS 8.33, r 15%, b 40%, ROE 25% → 100 = 55.53 + 44.47. PVGO > 0 only if ROE > r; ROE = r → 0; ROE < r → negative.`},
{q:R`Business value with horizon value`, a:R`PV(FCF years 1–H) + $PV_H/(1+r)^H$ with $PV_H = FCF_{H+1}/(r-g)$. Concatenator: −3.6 + 39.75/1.1⁶ (= 22.4) = 18.8m.`},
{q:R`P/E ratio`, a:R`No growth: $P_0/EPS_1 = 1/r$. High P/E = expected growth opportunities. Value by comparison with similar listed firms. Market value = shares × price (GE: 10.3bn × 37.10 = 382bn).`},
{q:R`Forward rate year 2 → 7 (annual)`, a:R`$(1+r_7)^7 = (1+r_2)^2(1+f_{2,7})^5$. 5% and 7.05% → 7.88%; above the 7-year rate because years 3–7 are further away (normal curve).`},
{q:R`Primary vs secondary market`, a:R`Primary: firm sells new shares (IPO, SpaceX 75bn) and gets the money. Secondary: investors trade among themselves (Nasdaq), the firm gets nothing.`}
],
quiz:[
{q:R`You invest 500 in a stock. The price falls 20% over the year and you receive a dividend of 3. What is your total return?`, opts:[R`−20.0%`,R`−19.4%`,R`−17.0%`,R`−20.6%`], correct:1, exp:R`$-20\% + 3/500 = -20\% + 0.6\% = -19.4\%$; you end with $500 \times 0.806 = 403$.`},
{q:R`A stock sells for 100. It pays a dividend of 5 at the end of this year, growing 10% thereafter, and will be sold for 104 at the end of the first year. Expected return (Karapandža’s posted solution)?`, opts:[R`9.0%`,R`9.5%`,R`10.0%`,R`14.0%`], correct:1, exp:R`The posted solution uses $DIV_1 = 5 \times 1.10 = 5.50$: $r = (104-100)/100 + 5.5/100 = 9.5\%$. Read every date in the question.`},
{q:R`Forecast dividends 3.00, 3.24, 3.50 and a sale price of 94.48 after 3 years, r = 12%. What is the stock worth?`, opts:[R`About 104`,R`About 69.74`,R`About 75.00`,R`About 84.00`], correct:2, exp:R`2.68 + 2.58 + (3.50 + 94.48)/1.12³ = 2.68 + 2.58 + 69.74 = 75.00.`},
{q:R`A firm pays all of its EPS of 6 as dividends and never grows; r = 12%. Share value?`, opts:[R`50`,R`72`,R`100`,R`5.36`], correct:0, exp:R`No growth: $P_0 = EPS_1/r = 6/0.12 = 50$.`},
{q:R`Price 100, next dividend 3, r = 12%. What growth rate does the market assume (Gordon)?`, opts:[R`3%`,R`12%`,R`15%`,R`9%`], correct:3, exp:R`$100 = 3/(0.12 - g)$ → $g = 9\%$.`},
{q:R`A firm reinvests 40% of its earnings at an ROE of 25%. Sustainable growth rate?`, opts:[R`10%`,R`15%`,R`25%`,R`65%`], correct:0, exp:R`$g = b \times ROE = 0.40 \times 0.25 = 10\%$.`},
{q:R`EPS 8.33, r = 15%, plowback 40%, ROE 15%. What happens to the share price compared with paying everything out?`, opts:[R`It rises to 100`,R`It falls to 45`,R`It stays at about 56 — PVGO is zero`,R`It doubles, because the dividend grows faster than before`], correct:2, exp:R`ROE = r: g = 6%, DIV₁ = 5, $5/(0.15-0.06) = 55.6$ ≈ the no-growth value. Reinvesting at ROE = r adds nothing.`},
{q:R`When does reinvesting earnings destroy value?`, opts:[R`When the payout ratio is below 50%`,R`When ROE is below the required return r`,R`When growth is above 5% and the payout ratio is falling`,R`Never — growth always adds value`], correct:1, exp:R`Below r, PVGO is negative (ROE 10%, r 15% → price 45 vs 56).`},
{q:R`GE has 10.3bn shares at 37.10 and a P/E of 18.3. Approximate value of GE?`, opts:[R`679bn`,R`188bn`,R`382bn`,R`None of the above`], correct:2, exp:R`Market value = shares × price = 10.3 × 37.10 ≈ 382bn. The P/E is a distractor.`},
{q:R`FCF years 1–6 have PV −3.6; from year 7 FCF of 1.59 grows 6% forever; r = 10%. Business value?`, opts:[R`About 39.8m`,R`About 22.4m`,R`About 36.2m`,R`About 18.8m`], correct:3, exp:R`$PV_6 = 1.59/0.04 = 39.75$, today $39.75/1.1^6 = 22.4$; total −3.6 + 22.4 = 18.8m.`},
{q:R`2-year spot 5%, 7-year spot 7.05% (annual). Forward rate from year 2 to year 7?`, opts:[R`7.05%`,R`7.88%`,R`2.05%`,R`6.40%`], correct:1, exp:R`$(1+f)^5 = 1.0705^7/1.05^2 = 1.4613$ → $f = 7.88\%$.`},
{q:R`Your salary rises 5% while prices rise 3%. How many more apples can you buy?`, opts:[R`2.00%`,R`8.15%`,R`1.94%`,R`1.67%`], correct:2, exp:R`$1.05/1.03 - 1 = 1.94\%$, not 2%.`}
]},
/* ------------------------------------------------------------ CLASS 6 ------------------------------------------------------------ */
// Built from the "New Slides class6" deck (Canvas, 10 Nov 2026).
{id:'dt-c6', ch:6, title:'NPV and Its Competitors', date:'Class 6', drills:['irr','proj','mort'],
examWeight:'Why NPV beats the other rules; book rate of return, payback (and its flaw), IRR by trial and error and its five pitfalls (lending vs borrowing, multiple IRRs, undefined IRR, mutually exclusive projects, term structure), profitability index with capital rationing (weighted-average PI), what to discount in practice (incremental cash, sunk costs, opportunity costs, working capital), inflation handled consistently (nominal with nominal, real with real) and the equivalent annual cost of machines with different lives',
summary:R`**Source:** Class 6 slides "NPV and its competitors" (Brealey, Myers and Allen, chapters 6 and 7), starting with a revision of Class 5.

**Revision of Class 5.** Expected return $r = (DIV_1 + P_1 - P_0)/P_0$ (market capitalization rate); dividend discount model; constant-growth model $P_0 = DIV_1/(r-g)$ with its problems (growth changes, no dividend, r close to g); the 8.33 example (no growth 55.53, with 40% plowback at ROE 25% → 100).

**Valuing firms.** A listed firm can live forever, but we cannot forecast cash flows forever. So: forecast a growth period of N years, then a **terminal (horizon) value** $TV_N$ for everything after:
$\text{Value} = \frac{C_1}{1+r} + \dots + \frac{C_N}{(1+r)^N} + \frac{TV_N}{(1+r)^N}$, with $TV_N = C_{N+1}/(r-g)$ in stable growth.
- Stable growth rate :: cannot be higher than the growth of the economy; all firms reach it at some point
- Growth patterns :: 2-stage (high, then drop) or 3-stage (high, gradual decline, stable); high growth lasts shorter for larger firms, longer with higher growth now and high barriers to entry or real advantages
- Concatenator example :: PV(FCF years 1–6) = −3.6; $PV_6 = 1.59/(0.10-0.06) = 39.75$, × $1/1.1^6 = 0.5645$ → 22.4; total 18.8m
- By comparison :: collect market values of similar firms, use similar ratios such as P/E

**Part 2 — NPV and its competitors.** Every method affects the cash flow of the firm: cash can go into a real investment or be paid out so shareholders invest in financial assets themselves. **Invest only if the project beats what shareholders can earn themselves** — that is exactly the NPV rule.

**What CFOs use** (Graham and Harvey 2001, 392 US CFOs, "always or almost always"): IRR 76%, NPV 75%, payback 57%, book rate of return 20%, profitability index 12%.

**Book rate of return** (accounting rate of return) = average book income / average book assets over the project’s life. Managers rarely decide with it: its parts reflect tax and accounting figures, not market values or cash flows.

**Payback period** = years until the cumulative forecast cash flow equals the initial outlay; the rule accepts projects that pay back within a cutoff. Flawed: it **ignores cash flows after the cutoff** and the **time value of money**.
- Example :: A: −2,000, 500, 500, 5,000 → payback 3 years, NPV(10%) +2,624. B: −2,000, 500, 1,800, 0 → 2 years, NPV −58. C: −2,000, 1,800, 500, 0 → 2 years, NPV +50. A 2-year cutoff accepts B and C and rejects A, although A has by far the highest NPV and B’s is negative

**Internal rate of return** = the discount rate at which NPV = 0.
- Example :: machine costs 4,000, pays 2,000 and 4,000 → $-4000 + \frac{2000}{1+IRR} + \frac{4000}{(1+IRR)^2} = 0$ → IRR = 28.08%
- Trial and error :: NPV at 10% = +1,124, at 25% = +160, at 28.75% = −34, at 32.5% = −212, at 40% = −531 → the sign changes between 25% and 28.75%
- NPV profile :: NPV falls as the discount rate rises and crosses zero at the IRR
- Rule :: accept if IRR > opportunity cost of capital (for a normal project)

**Five pitfalls of IRR:**
- 1 Lending or borrowing :: A: −1,000, +1,500 and B: +1,000, −1,500 both have IRR 50%, but NPV(10%) +364 vs −364. A lends (good if IRR > r), B borrows (good if IRR < r); for B the NPV rises with the discount rate
- 2 Multiple IRRs :: −600, then +120 in years 1–9, −150 in year 10 (AUD m) → NPV = 0 at both −44% and +11.6%; cash flows that change sign twice give two IRRs
- 3 Undefined IRR :: +1,000, +3,000, +2,500 → NPV > 0 at every rate (+5,793 at 10%), no IRR exists
- 4 Mutually exclusive projects :: D: −10,000 → +20,000 (IRR 100%, NPV 8,182); E: −20,000 → +35,000 (IRR 75%, NPV 11,818). IRR ignores size — if you can take only one, take E (higher NPV)
- 5 Term structure :: IRR assumes one stable rate and implicitly reinvestment at the IRR — false when rates differ by maturity

**Profitability index** — for capital rationing (not enough money for every good project): $PI = NPV/\text{investment}$. Budget 300,000:
- Projects :: A NPV 230,000 / inv. 200,000 → PI 1.15; B 141,250/125,000 → 1.13; C 194,250/175,000 → 1.11; D 162,000/150,000 → 1.08
- Weighted-average PI :: weights = share of the 300,000 budget; leftover money earns nothing (PI 0). $WAPI(BD) = \frac{125}{300}1.13 + \frac{150}{300}1.08 + \frac{25}{300}\cdot 0 = 1.01$; WAPI(A) = 0.77; **WAPI(BC) = 1.12** → select B and C

**Part 3 — using NPV in practice** (chapter 7). Only **cash flow** is relevant — not profits, not accounting numbers. Points to watch out for:
- Estimate cash flows on an incremental basis; do not confuse average with incremental payoffs
- Include all incidental effects
- Do not forget working capital requirements
- Include opportunity costs
- Forget sunk costs
- Beware of allocated overhead costs
- Treat inflation consistently

**Inflation consistently:** discount nominal cash flows with nominal rates and real cash flows with real rates — both give the same result.
- Nominal :: cash flows 8,000, 8,240, 8,487.2, 8,741.8 (growing 3%) at 10% → 7,272.73 + 6,809.92 + 6,376.56 + 5,970.78 = **26,429.99**
- Real :: each nominal flow / 1.03ᵗ = 7,766.99 every year; real rate $1.10/1.03 - 1 = 6.7961\%$ → same 26,429.99

**Equivalent annual cost (EAC)** = the cost per period with the same PV as buying and operating a machine; used to compare machines with different lives. Cost of capital 6%, costs in thousand:
- Machine A :: 15 now, 5 in years 1–3 → PV 28.37. Find C paid today and in years 1–3 with the same PV: $28.37 = C\left(\frac{1}{r} - \frac{1}{r(1+r)^3} + 1\right)$ → C = 7.72
- Machine B :: 10 now, 6 in years 1–2 → PV 21.00 → $21 = C\left(\frac{1}{r} - \frac{1}{r(1+r)^2} + 1\right)$ → C = 7.41
- Decision :: B costs 7.41 a year, A 7.72 → choose the cheaper machine B (comparing the PVs 28.37 vs 21 would be wrong because the lives differ)
- Note :: in this course the equal cost C is paid **today and** at the end of each year (annuity plus one C today)`,
cards:[
{q:R`Book rate of return`, a:R`Average book income / average book assets (accounting rate of return). Rarely used: tax and accounting figures, not cash flows or market values.`},
{q:R`Payback and its flaw`, a:R`Years until cumulative cash flow = outlay. Ignores cash flows after the cutoff and the time value of money (2-year cutoff accepts B with NPV −58, rejects A with +2,624).`},
{q:R`IRR definition and the machine example`, a:R`Discount rate where NPV = 0. −4,000, +2,000, +4,000 → 28.08% (NPV +160 at 25%, −34 at 28.75%).`},
{q:R`Five IRR pitfalls`, a:R`Lending vs borrowing (same IRR, opposite NPV) · multiple IRRs (sign changes twice: −44% and 11.6%) · undefined IRR (all flows positive) · mutually exclusive projects (ignores size: take higher NPV) · term structure (assumes one rate / reinvestment at IRR).`},
{q:R`Profitability index and WAPI`, a:R`PI = NPV / investment. With a budget, pick the combination with the highest weighted-average PI (weights = budget shares, leftover PI 0). Example: B + C → 1.12.`},
{q:R`What to discount in practice`, a:R`Only incremental cash flows: include incidental effects, working capital, opportunity costs; forget sunk costs; beware allocated overheads; treat inflation consistently.`},
{q:R`Inflation consistency`, a:R`Nominal cash flows with nominal rate, real with real rate — same PV (26,429.99 both ways, real rate 1.10/1.03 − 1 = 6.7961%).`},
{q:R`Equivalent annual cost`, a:R`C with the same PV as the machine’s costs: $PV = C(1/r - 1/(r(1+r)^t) + 1)$. A (15; 5,5,5) → 7.72; B (10; 6,6) → 7.41 → choose B.`},
{q:R`Terminal / horizon value`, a:R`$TV_N = C_{N+1}/(r-g)$ at year N, discounted with $1/(1+r)^N$; stable g ≤ growth of the economy.`},
{q:R`CFO survey (Graham & Harvey 2001)`, a:R`IRR 76%, NPV 75%, payback 57%, book rate of return 20%, profitability index 12%.`}
],
quiz:[
{q:R`Which rule does the NPV rule express according to Karapandža?`, opts:[R`Invest whenever the payback is short enough`,R`Invest only if the project beats what shareholders can earn on their own`,R`Invest whenever the book rate of return is positive`,R`Invest in the project with the highest IRR and the shortest payback period`], correct:1, exp:R`The alternative to investing is paying cash out so shareholders invest in financial assets themselves.`},
{q:R`What is the main flaw of the payback rule?`, opts:[R`It ignores cash flows after the cutoff and the time value of money`,R`It needs the cost of capital as an input`,R`It cannot be computed for projects lasting more than three years`,R`It always rejects projects with negative NPV`], correct:0, exp:R`Project A (+2,624 NPV) is rejected by a 2-year cutoff, B (−58) accepted.`},
{q:R`A machine costs 4,000 and pays 2,000 in year 1 and 4,000 in year 2. NPV at 25% is +160 and at 28.75% is −34. The IRR is …`, opts:[R`about 25%`,R`about 32.5%`,R`about 28.1%`,R`about 40%`], correct:2, exp:R`The sign changes between 25% and 28.75%; exactly 28.08%.`},
{q:R`Project B: +1,000 today, −1,500 next year (IRR 50%). When is B worth taking?`, opts:[R`When the cost of capital is below 50%`,R`Never, because the first cash flow is positive`,R`When the cost of capital is above 50%`,R`Always, because the IRR is high`], correct:2, exp:R`B is borrowing: good if IRR < r. At 10% its NPV is −364.`},
{q:R`Cash flows −600, +120 (years 1–9), −150 (year 10) have NPV = 0 at −44% and 11.6%. This is the pitfall of …`, opts:[R`an undefined IRR`,R`mutually exclusive projects`,R`multiple rates of return`,R`the term structure`], correct:2, exp:R`Cash flows that change sign twice can give two IRRs.`},
{q:R`D: −10,000 → +20,000 (IRR 100%, NPV 8,182). E: −20,000 → +35,000 (IRR 75%, NPV 11,818). You can take only one.`, opts:[R`D, because its IRR is higher`,R`E, because its NPV is higher`,R`Both are equal`,R`Neither, because IRR > 50%`], correct:1, exp:R`IRR ignores size; for mutually exclusive projects choose the higher NPV.`},
{q:R`Budget 300,000. B (inv. 125,000, PI 1.13), C (175,000, 1.11), D (150,000, 1.08), A (200,000, 1.15). Which combination maximises the weighted-average PI?`, opts:[R`A alone`,R`B and D`,R`A and B`,R`B and C`], correct:3, exp:R`WAPI(BC) = 1.12 > WAPI(BD) = 1.01 > WAPI(A) = 0.77; A + B would exceed the budget.`},
{q:R`Which item belongs in a project’s cash flows?`, opts:[R`Money already spent on a market study last year`,R`An allocated share of head-office overhead that does not change`,R`The rent the firm could earn on a building it uses for the project`,R`Accounting depreciation of the new equipment as a separate cash outflow`], correct:2, exp:R`Opportunity costs count; sunk costs and unchanged allocated overheads do not; only cash flows matter.`},
{q:R`Nominal cash flows grow with 3% inflation and are discounted at a 10% nominal rate. Which real rate gives the same PV for the real cash flows?`, opts:[R`7.0000%`,R`6.7961%`,R`13.3000%`,R`10.0000%`], correct:1, exp:R`$1.10/1.03 - 1 = 6.7961\%$.`},
{q:R`Machine A: PV of costs 28.37 over 3 years (+ today); machine B: PV 21.00 over 2 years (+ today); r = 6%. Equivalent annual costs 7.72 and 7.41. Which do you buy?`, opts:[R`A, because it lasts longer`,R`B, because its equivalent annual cost is lower`,R`B, because its PV is lower`,R`A, because its higher PV means it delivers more value per year of use`], correct:1, exp:R`Lives differ, so compare cost per year: B 7.41 < A 7.72.`},
{q:R`According to the CFO survey on the slides, which two tools are used about equally often?`, opts:[R`Payback and NPV`,R`IRR and NPV`,R`Book rate of return and PI`,R`PI and IRR`], correct:1, exp:R`IRR 76%, NPV 75%, payback 57%, book rate 20%, PI 12%.`}
]},
/* ------------------------------------------------------------ CLASS 7 ------------------------------------------------------------ */
// Built from the "New Slides Class7" deck (Canvas, 13 Nov 2026).
{id:'dt-c7', ch:7, title:'Risk, Return & Portfolios', date:'Class 7', drills:['port','irr','capm'],
examWeight:'IRR revision, inflation and EAC revision, utility and lotteries (risk aversion via √c, risk loving via c²), variance and standard deviation (coin-toss example), a century of stocks vs bonds, market risk premium, portfolio expected return and the two-stock variance box with correlation 0.8 / 1 / −1, the N × N box, and market vs unique risk (Nvidia’s two Thursdays) — the portfolio task is worth about 11 points in past exams',
summary:R`**Source:** Class 7 slides "Risk and return" (Brealey, Myers and Allen, chapter 8), starting with a revision of IRR, inflation and the equivalent annual cost.

**Revision.** CFO tools (IRR 76%, NPV 75%, payback 57%, book rate 20%, PI 12%); the machine with −4,000, 2,000, 4,000 has IRR 28.08% — with NPV the answer depends on the discount rate (+160 at 25%, −531 at 40%); the five IRR pitfalls; what to discount (incremental cash, opportunity costs, forget sunk costs, consistent inflation: 26,429.99 both ways); EAC of machine A 7.72 vs B 7.41 → buy B.

**Lotteries and utility.** Safe: 5 for sure. Risky: 0 or 10, each with probability 0.5 — same expected value 5. Which you prefer depends on your utility function U(c):
- Risk neutral :: $U(c) = c/2$ → safe U(5) = 2.5 and risky ½U(10) + ½U(0) = 2.5 → indifferent
- Risk averse :: $U(c) = \sqrt{c}$ → safe $\sqrt5 = 2.24$ > risky $\tfrac12\sqrt{10} = 1.58$ → take the safe 5
- Risk loving :: $U(c) = c^2$ → safe 25 < risky ½ · 100 = 50 → take the lottery
- With 5 million vs 0 or 10 million most people suddenly prefer the safe amount: the stakes change the answer

**Measuring risk.** Two sets of returns can have the same middle but a very different spread.
- Variance :: average of squared deviations from the mean — a measure of volatility
- Standard deviation :: square root of the variance
- Coin-toss game :: returns +40, +10, +10, −20 (equally likely), mean 10% → deviations +30, 0, 0, −30 → squared 900, 0, 0, 900 → variance 1,800/4 = 450 → σ = $\sqrt{450}$ = 21.2%

**A century of capital-market history.**
- Stocks vs bonds 1926–2025 :: 1 invested at the end of 1926 grows to about 16,000 in US stocks but only about 25 in Treasury bills (on a log scale each step is ten times more)
- Volatility :: stock returns swing between roughly −45% and +50% a year; bill yields stay in a narrow band (daily data since 1963: compare the scales)
- Market risk premium :: return on stocks minus Treasury bills, averaged 1900–2006, differs by country; equity market risk (σ of annual returns) is high for Germany, Italy and Japan

**Portfolio expected return** = weighted average of the assets’ returns: $E(r_p) = \sum_{i=1}^{n} w_i r_i$.
- Two stocks :: 60% Walmart (10%) + 40% IBM (15%) → 0.6 · 10% + 0.4 · 15% = 12%
- Three stocks :: 20% Walmart, 30% IBM (15%), 50% Microsoft (20%) → 16.5%

**Portfolio risk — the variance box.** For two stocks, add up the four boxes:
$\sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho\sigma_1\sigma_2$ (covariance $\sigma_{12} = \rho\sigma_1\sigma_2$).
- ρ = 0.8 :: 60/40 Walmart (σ 22%) and IBM (σ 23%): $0.6^2 \cdot 0.22^2 + 0.4^2 \cdot 0.23^2 + 2 \cdot 0.6 \cdot 0.4 \cdot 0.8 \cdot 0.22 \cdot 0.23 = 0.0453$ → σ = 21.3%
- ρ = 1.0 :: variance 0.0502 → σ = 22.4% = exactly the weighted average 0.6 · 22% + 0.4 · 23% (no diversification)
- ρ = −1.0 :: variance 0.0016 → σ = 4% — almost all risk disappears
- Correlation :: each point cloud of two returns has a coefficient between −1 and +1

**N stocks:** an N × N box — N variance terms on the diagonal, every covariance term appears twice; add up all boxes to get the portfolio variance. With many stocks the covariance terms dominate.

**Market risk vs unique risk — Nvidia’s two Thursdays (November 2026):**
- 5 Nov, fears about AI spending :: 431 of the S&P 500 fall — Nvidia −9.3%, AMD −17.3%, S&P 500 −4.4%; half Nvidia, half AMD → −13.3%: a portfolio does not help against a shock to all firms (**market risk**)
- 12 Nov, Nvidia’s CEO resigns :: Nvidia −4.3%, AMD +5.9%, S&P 500 −0.4%; half/half → +0.8%: a shock to one firm sits only in its own box and is diversified away (**unique risk**)`,
cards:[
{q:R`Risk averse, neutral, loving — the lottery`, a:R`Safe 5 vs 0/10 at 50%. $\sqrt c$: 2.24 vs 1.58 → safe (averse). $c/2$: 2.5 vs 2.5 → indifferent (neutral). $c^2$: 25 vs 50 → lottery (loving).`},
{q:R`Variance and standard deviation`, a:R`Variance = average squared deviation from the mean; σ = √variance. Coin toss +40, +10, +10, −20 → mean 10, variance 450, σ 21.2%.`},
{q:R`Portfolio expected return`, a:R`$\sum w_i r_i$. 60% at 10% + 40% at 15% = 12%; 20/30/50 at 10/15/20% = 16.5%.`},
{q:R`Two-stock portfolio variance`, a:R`$w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho\sigma_1\sigma_2$. 60/40, σ 22%/23%: ρ 0.8 → 21.3%, ρ 1 → 22.4% (weighted average), ρ −1 → 4%.`},
{q:R`N-stock variance box`, a:R`N × N boxes: N variance terms on the diagonal, each covariance term twice; add all.`},
{q:R`Market vs unique risk`, a:R`Market risk hits all firms, a portfolio cannot remove it (5 Nov: S&P −4.4%). Unique risk hits one firm and is diversified away (12 Nov: Nvidia/AMD half-half +0.8%).`},
{q:R`Stocks vs bills 1926–2025`, a:R`1 → about 16,000 in stocks vs about 25 in bills — higher return comes with far higher volatility.`}
],
quiz:[
{q:R`With $U(c) = \sqrt{c}$, which do you choose: 5 for sure or 0/10 with 50% each?`, opts:[R`The lottery, because its expected value is higher`,R`You are indifferent`,R`The safe 5, because 2.24 > 1.58`,R`The lottery, because 3.16 > 2.24`], correct:2, exp:R`Safe $\sqrt5 = 2.24$; risky $\tfrac12\sqrt{10} + \tfrac12\cdot0 = 1.58$. Concave utility = risk averse.`},
{q:R`Which utility function makes the person prefer the lottery 0/10 over a safe 5?`, opts:[R`$U(c) = c^2$`,R`$U(c) = \sqrt{c}$`,R`$U(c) = c/2$`,R`$U(c) = \ln(1+c)$`], correct:0, exp:R`$c^2$: safe 25, risky 50 → risk loving.`},
{q:R`Returns +40, +10, +10, −20 are equally likely. Standard deviation?`, opts:[R`10.0%`,R`15.0%`,R`21.2%`,R`450%`], correct:2, exp:R`Mean 10; squared deviations 900, 0, 0, 900; variance 450; σ = √450 = 21.2%.`},
{q:R`20% Walmart (10%), 30% IBM (15%), 50% Microsoft (20%). Expected portfolio return?`, opts:[R`15.0%`,R`16.5%`,R`45.0%`,R`17.5%`], correct:1, exp:R`0.2·10 + 0.3·15 + 0.5·20 = 2 + 4.5 + 10 = 16.5%.`},
{q:R`60/40 in two stocks with σ 22% and 23% and correlation 1.0. Portfolio σ?`, opts:[R`21.3%`,R`4.0%`,R`22.4%`,R`22.5%`], correct:2, exp:R`With ρ = 1 the σ is the weighted average: 0.6·22 + 0.4·23 = 22.4%.`},
{q:R`Same two stocks, correlation −1.0. Portfolio σ?`, opts:[R`About 4%`,R`About 21.3%`,R`About 22.4%`,R`Zero`], correct:0, exp:R`Variance 0.0502 − 4·0.6·0.4·0.22·0.23 ≈ 0.0016 → σ ≈ 4%.`},
{q:R`In an N-stock variance box, how often does each covariance term appear?`, opts:[R`Once`,R`N times`,R`Twice`,R`Never — only variances count`], correct:2, exp:R`The box is symmetric: $w_iw_j\sigma_{ij}$ appears at (i, j) and (j, i).`},
{q:R`On a day when Nvidia’s CEO resigns, Nvidia falls 4.3% and AMD rises 5.9%. A half-half portfolio earns +0.8%. This shows that …`, opts:[R`market risk can be diversified away`,R`unique risk can be diversified away`,R`portfolios increase risk`,R`correlation is always −1`], correct:1, exp:R`A shock to one firm sits only in its own box — unique risk. A shock to all firms (5 Nov) is market risk.`},
{q:R`1 invested in US stocks at the end of 1926 grew to about … by 2025, versus about 25 in Treasury bills.`, opts:[R`160`,R`1,600`,R`16,000`,R`160,000`], correct:2, exp:R`About 16,000 — with much higher year-to-year swings.`}
]},
/* ------------------------------------------------------------ OLDER PRACTICE EXAMS ------------------------------------------------------------ */
// MockupExam (1).pdf and exam2012 (1).pdf from Canvas (online since July 2026) — older exam layout, worked solutions recomputed; key errors flagged.
{id:'dt-cx', ch:'X', title:'Older Exams: Mockup & 2012 (worked)', date:'Practice', drills:['pvadd','fwd','bond','proj','rates','port','capm'],
examWeight:'Two older Karapandža exams with posted solutions, both on Canvas since July: same task types as the newer exams (PV/FV, market value with a P/E distractor, forward rates, duration, bond off the curve, project NPV with segments, rate conversions, 3-stock portfolio, CAPM and Fama–French). Solve on paper first, then compare. The 2012 key gets the portfolio standard deviation wrong (flagged below)',
summary:R`**How to use this page:** cover the solution lines, solve each task on paper in exam time, then compare. Both exams follow the classic layout (mark the answer **and** show why). Tasks are summarised; the numbers are the original ones.

**Mockup exam — tasks and worked solutions**
- Q1 (3 P) PV ↔ FV :: PV of 1 in n years at r is 0.3855 → $(1+r)^n = 1/0.3855$ → FV of 1 = **2.594** (answer b)
- Q2 (2 P) Market value :: GE: 10.3bn shares × 37.10 = **382bn**; the P/E of 18.3 is a distractor (answer c)
- Q3 (3 P) Forward rate from period 3 to 4 :: it is extracted from the 3- and 4-year spot rates (**II only**); it cannot be observed directly and the 1- and 2-year rates are not enough
- Q4 (3 P) "Duration equals maturity for any bond" :: **false** — only for zero-coupon bonds
- Q5 (11 P) Bond off the curve :: 1,000 face, 5% semiannual coupons (25), 3 years; half-year discounting with averaged missing maturities (1.5 y = average of 1 y and 2 y, 2.5 y = average of 2 y and 3 y). PV of the first 5 coupons **124.61**; PV of the last payment $1025/(1+0.0037/2)^6$ = **1,013.70**; price **1,138.31**
- Q6 (13 P) Project AAA, invest 1,000, r = 6% :: 151.63 in years 1–3; then −10% a year from year 4 (136.47) to year 20 (25.29); then 25.29 forever. PV years 1–3 **405.31**; years 4–20 as a shrinking annuity $\frac{136.467}{0.06+0.10}\left(1-\left(\frac{0.9}{1.06}\right)^{17}\right)\frac{1}{1.06^3}$ = **671.78**; from year 21 $\frac{25.29}{0.06}\cdot\frac{1}{1.06^{20}}$ = **131.43**; NPV **+208.51**
- Q7 (3 P) Annual → continuous :: $e^r = 1.15$ → $r = \ln 1.15$ = **13.98%**
- Q8 (3 P) Continuous → semiannual :: $e^{0.08} = (1+r/2)^2$ → $r = 2(e^{0.04}-1)$ = **8.16%**
- Q9 (11 P) 3-stock value-weighted portfolio :: values 150/350/400m → weights **16.67% / 38.89% / 44.44%**; expected return **20.05%**; variance = sum of the 3 × 3 box = 0.0398 → σ = **19.95%**
- Q10 (1 P) Highest average risk premium 1900–2006 :: **common stocks**
- Q11 (1 P) Beta of US government bonds :: **zero** (the course treats them as risk-free)
- Q12 (2 P) With a risk-free asset the investor’s job is to :: **invest in the market portfolio and borrow or lend at the risk-free rate** (I and III)
- Q13 (2 P) CAPM :: β 2.2, risk-free 5.5%, market risk premium 8% → 5.5 + 2.2 · 8 = **23.1%**
- Q14 (2 P) Fama–French :: 5 + 1.4 · 7 + 0.4 · 3.7 − 1.1 · 5.2 = **10.6%**

**Exam 2012 — tasks and worked solutions**
- Q1 (3 P) PV ↔ FV :: PV of 1 is 0.2 → FV of 1 = 1/0.2 = **5**
- Q2 (2 P) Market value :: Google 328.59m shares × 667.97 = **219.5bn** (P/E 20.92 and EPS 31.92 are distractors; the question says "GE" by mistake)
- Q3 (6 P) Lufthansa forward loan :: spot rates 1 y 0.18%, 2 y 0.30%, 3 y 0.38%, 5 y 0.73% (annual); borrow in 3 years for 1 year → the 4-year rate is the average of 3 y and 5 y (0.555%): $(1.0038)^3(1+f) = (1.00555)^4$ → **1.08%**. For 2 years: $(1.0038)^3(1+f)^2 = (1.0073)^5$ → **1.26%**
- Q4 (3 P) Which bond is more rate-sensitive :: zero-coupon AAA (2 years → duration 2) vs coupon bond BBB with duration 1.5 → **AAA** (larger duration)
- Q5 (11 P) Bond off the curve :: 1,000 face, 10% semiannual (50), 3 years; half-year rates 0.15%, 0.18%, 0.24% (avg), 0.30%, 0.34% (avg), 0.38%. PV first 5 coupons **248.97**; PV last payment $1050/1.0019^6$ = **1,038.11**; price **1,287.08**
- Q6 (13 P) Project AAA, invest 5,000, r = 15% :: 300, 0, 600, 400 in years 1–4 → **884.08**; 800 a year in years 5–28 (24 payments) $\left(\frac{800}{0.15}-\frac{800}{0.15}\frac{1}{1.15^{24}}\right)\frac{1}{1.15^4}$ = **2,942.82**; 1,000 in year 29 growing 10% forever $\frac{1000}{0.15-0.10}\cdot\frac{1}{1.15^{28}}$ = **399.48**; NPV **−773.62** → reject
- Q7 (3 P) Continuous → daily :: $e^{0.07} = (1+r/365)^{365}$ → $r = 365(e^{0.07/365}-1)$ = **7.00%** (6.9993%)
- Q8 (11 P) 3-stock value-weighted portfolio :: values 216.3/229.2/223.4bn → weights **32.3% / 34.3% / 33.4%**; expected return **11.02%**; σ — see the flag below
- Q10 (2 P) More stocks in the portfolio :: **unique risk decreases and approaches zero** (market risk stays)
- Q12 (2 P) An underpriced stock plots :: **above** the security market line (it offers more return than its risk requires)
- Q13 (2 P) CAPM :: β 0.98, risk-free 0.5%, market return 4% → 0.5 + 0.98 · (4 − 0.5) = **3.93%** (careful: here the market RETURN is given, so subtract the risk-free rate first)
- Q14 Fama–French :: risk-free 0.5%, market premium 2.5%, SMB 3.7%, HML 5.2%. Apple (β 1.21, 0.8, 0.21) → **7.58%**; MSFT (β 1.17, 0.78, 0.30) → **7.87%** (no key posted — computed here)

**Flag — 2012 Q8 c, the posted standard deviation is wrong.** The key’s 3 × 3 matrix does not match the inputs and sums to a variance of 0.0379 → σ = 19.46%. With weights 0.323/0.343/0.334, σ = 7%/8%/12% and ρ = 0.7/0.7/0.4 the box gives variance **0.00589** → σ = **7.67%**. Sanity check: a portfolio of stocks with σ of 7–12% cannot have σ 19.5%; with positive correlations below 1 it must lie below the weighted average σ (9.0%).

**Typical traps in these old exams:** distractor data (P/E, EPS, duration); missing curve points → average the neighbours; semiannual quotes → divide by 2 and count half-years; CAPM with the market return instead of the market risk premium; segment discounting (an annuity starting in year 5 is valued at year 4, a perpetuity starting in year 29 at year 28).`,
cards:[
{q:R`PV of 1 is 0.3855 — FV of 1?`, a:R`$(1+r)^n = 1/0.3855 = 2.594$.`},
{q:R`Missing maturity on the curve (e.g. 1.5 years)`, a:R`Use the average of the neighbouring maturities (1 y and 2 y).`},
{q:R`Annuity of 800 in years 5–28 at 15% — PV today?`, a:R`$(800/0.15)(1 - 1/1.15^{24})$ gives the value at year 4; divide by $1.15^4$ → 2,942.82.`},
{q:R`Growing perpetuity from year 29 (1,000, g 10%, r 15%)`, a:R`$1000/(0.15-0.10) = 20{,}000$ at year 28 → $/1.15^{28}$ = 399.48.`},
{q:R`CAPM with the market RETURN given`, a:R`$r = r_f + \beta(r_m - r_f)$: 0.5 + 0.98 · 3.5 = 3.93%.`},
{q:R`Fama–French three-factor model`, a:R`$r = r_f + \beta \cdot MRP + b_{SMB} \cdot SMB + b_{HML} \cdot HML$: 5 + 1.4·7 + 0.4·3.7 − 1.1·5.2 = 10.6%.`},
{q:R`Underpriced stock and the SML`, a:R`Plots above the security market line — more expected return than its beta requires.`}
],
quiz:[
{q:R`The PV of 1 received in n years at rate r is 0.2. What is the FV of 1 invested today at r for n years?`, opts:[R`5`,R`10`,R`1`,R`Not enough information`], correct:0, exp:R`$(1+r)^n = 1/0.2 = 5$.`},
{q:R`Google has 328.59m shares at 667.97, P/E 20.92 and EPS 31.92. Approximate market value?`, opts:[R`About 336bn`,R`About 382bn`,R`About 219.5bn`,R`None of the above`], correct:2, exp:R`Shares × price = 219.5bn; P/E and EPS are distractors.`},
{q:R`A forward rate from period 3 to period 4 can be …`, opts:[R`observed directly in the market place`,R`extracted from the 3- and 4-year spot rates`,R`extracted from the 1- and 2-year spot rates`,R`observed and extracted from 1- and 2-year rates`], correct:1, exp:R`$(1+r_4)^4 = (1+r_3)^3(1+f_{3,4})$ — only II.`},
{q:R`"The duration of any bond is the same as its maturity."`, opts:[R`True`,R`False — only for zero-coupon bonds`], correct:1, exp:R`Coupons before maturity pull the duration below the maturity.`},
{q:R`Zero-coupon bond AAA matures in 2 years; coupon bond BBB matures in 4 years with duration 1.5. Which price is more sensitive to rate changes?`, opts:[R`AAA`,R`BBB`,R`Equally sensitive`,R`Not enough data`], correct:0, exp:R`AAA’s duration = maturity = 2 > 1.5.`},
{q:R`15% nominal annual with annual compounding equals which continuously compounded rate?`, opts:[R`15.00%`,R`13.98%`,R`16.18%`,R`14.49%`], correct:1, exp:R`$r = \ln(1.15) = 13.98\%$.`},
{q:R`8% continuously compounded equals which nominal annual rate with semiannual compounding?`, opts:[R`8.00%`,R`8.33%`,R`7.85%`,R`8.16%`], correct:3, exp:R`$2(e^{0.04} - 1) = 8.16\%$.`},
{q:R`As the number of stocks in a portfolio increases …`, opts:[R`unique risk decreases and approaches zero`,R`market risk decreases`,R`unique risk becomes equal to market risk`,R`total risk approaches zero`], correct:0, exp:R`Diversification removes unique risk; market risk remains.`},
{q:R`An underpriced stock (cheaper than stocks of equal risk) plots …`, opts:[R`below the security market line`,R`on the security market line`,R`above the security market line`,R`on the y-axis`], correct:2, exp:R`It offers a higher expected return than its beta requires → above the SML.`},
{q:R`β = 2.2, risk-free 5.5%, market risk premium 8%. Expected return?`, opts:[R`15.8%`,R`14.3%`,R`35.2%`,R`23.1%`], correct:3, exp:R`5.5 + 2.2 · 8 = 23.1%.`},
{q:R`β = 0.98, risk-free 0.5%, market return 4%. Expected return?`, opts:[R`3.43%`,R`3.92%`,R`4.42%`,R`3.93%`], correct:3, exp:R`0.5 + 0.98 · (4 − 0.5) = 3.93%. The market return is given, not the premium.`},
{q:R`Risk-free 5%, β 1.4, MRP 7%, SMB 3.7% (loading 0.4), HML 5.2% (loading −1.1). Fama–French expected return?`, opts:[R`22.3%`,R`7.8%`,R`10.6%`,R`None of the above`], correct:2, exp:R`5 + 9.8 + 1.48 − 5.72 = 10.56 ≈ 10.6%.`},
{q:R`Which portfolio had the highest average risk premium 1900–2006?`, opts:[R`Common stocks`,R`Government bonds`,R`Treasury bills`], correct:0, exp:R`Stocks carry the highest risk and the highest average premium.`}
]}
];
