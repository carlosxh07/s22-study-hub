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
R`Modified duration $D/(1+y)$ · $\frac{\Delta P}{P} \approx -\frac{D}{1+y}\Delta y$ (Δy = 0.01 per point) · big changes: reprice`]}
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
]}
];
