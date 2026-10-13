/* ============================================================ BOOKKEEPING TUTORIALS (TUT 1–11, official solutions, received 12.10.2026) ============================================================ */
// Rich text: paragraphs, "- " bullets ("Term :: text" allowed), **bold**,
// [[t:caption\nHead|Head\ncell|cell]] = table, [[e:\nD|Account|amount\nC|Account|amount]] = booking entry.
// warn = a mistake or inconsistency in the official solution (flagged, not silently changed).
const BK_TUTS = [
{n:1, topic:'bk-1', title:'Basic terms of financial accounting',
intro:R`The Flower GmbH grows tulips. The tutorial uses these translations:

[[t:German → English
German|English|German|English
Einzahlung|payments in|Auszahlung|payments out
Einnahme|income|Ausgabe|expenditures
Ertrag|earnings|Aufwand|expenses
Erlös / Leistung|revenues|Kosten|costs]]

Every transaction is recognised only once per pair. Check routine: cash changed → payment in/out · receivables or liabilities changed so that financial assets change → income/expenditure · equity changed → earnings/expenses · operational purpose → revenue/costs.`,
tasks:[
{id:'a', q:R`a) For each transaction, examine whether and when payments in, income, earnings and revenues as well as payments out, expenditures, expenses and costs need to be recognised:
- 1. The GmbH buys and pays fertilizer in t0, which is used in t1.
- 2. The GmbH receives a new delivery van in t0 and pays the bill in t1.
- 3. The GmbH signs a contract in t0 to deliver tulips. The tulips are delivered in t1 and the customer settles the bill in t2.`,
sol:R`- 1. t0 :: payment out and expenditure — cash falls, receivables and liabilities do not change, equity stays the same (the fertilizer is an asset)
- 1. t1 :: expense and cost — the fertilizer is consumed for operations, equity falls
- 2. t0 :: expenditure only — the liability rises, cash is untouched, equity unchanged (the van is an asset; expenses follow later as depreciation)
- 2. t1 :: payment out only — cash and the liability fall by the same amount, financial assets and equity unchanged
- 3. t0 :: nothing — pending contract
- 3. t1 :: income, earnings and revenue — the receivable rises (income), equity rises (earnings), operational sale of tulips (revenue)
- 3. t2 :: payment in only — cash rises, the receivable falls

Memory rule: **expenditure** = liabilities up or receivables down; **income** = receivables up or liabilities down.`},
{id:'b', q:R`b) Tick the relevant boxes for the following transactions.`,
grid:{cols:['Payments out','Expenditure','Expenses','Costs','Payments in','Income','Earnings','Revenue'], rows:[
 [R`1. Fertilizer is ordered and paid in cash on delivery; it is delivered the same day.`, [0,1], R`Cash falls and financial assets fall. The fertilizer is an asset, so equity is unchanged: no expense.`],
 [R`2. The company takes the fertilizer from the warehouse and uses it.`, [2,3], R`Operational consumption reduces equity (expense) and is a valued operational use of resources (cost). Cash and financial assets were already affected in 1.`],
 [R`3. More fertilizer is ordered, delivered, used immediately; the bill is paid later.`, [1,2,3], R`Liability up → expenditure; immediate consumption → expense and cost; no cash yet.`],
 [R`4. The greenhouse owned by the GmbH burns down.`, [2], R`Equity falls (non-operating/extraordinary expense). No cash or financial asset change. No cost: a fire is not an operational use of resources.`],
 [R`5. The bank waives the loan it granted to the GmbH.`, [5,6], R`The liability falls → financial assets up (income) and equity up (earnings). No revenue: not an operational creation of value.`],
 [R`6. Tulips are sold above book value; the customer pays cash.`, [4,5,6,7], R`Cash up, financial assets up, equity up, and it is the core business (basic revenue).`],
 [R`7. The GmbH also sells some financial assets (above book value).`, [4,5,6], R`Payments in, income and earnings — but no revenue: selling securities is not the business purpose of a tulip grower.`],
 [R`8. Tulips are sold above book value on credit.`, [5,6,7], R`Receivable up → income; equity up → earnings; operational sale → revenue. No cash yet.`],
 [R`9. The customer from transaction 8 pays the bill.`, [4], R`Cash up, receivable down: financial assets and equity unchanged.`],
 [R`10. A different customer cannot pay; the receivable is unrecoverable.`, [1,2,3], R`Receivable down → expenditure; equity down → expense; bad debts belong to normal operations → cost (a correction of earlier income, earnings and revenue).`],
 [R`11. The bank agrees to grant another loan.`, [], R`Pending transaction: nothing changes yet.`],
 [R`12. The GmbH recalculates its tulip prices and includes the fire hazard as a flat rate.`, [3], R`Imputed risk cost ("other costs") in cost accounting only — no cash, no financial asset, no equity change.`]
]}}
]},

{n:2, topic:'bk-2', title:'Stocktaking, inventory, balance sheet',
intro:R`Inventory of the Flower GmbH as of 31.12.t1:

[[t:Inventory Flower GmbH 31.12.t1
Item|€
1 land|400,000
1 building|200,000
3 machines|90,000
600 kg fertilizer|30,000
Factory and office equipment|60,000
387 bulbs (unfinished goods)|80,000
127 tulips (finished goods)|127,000
Carpool (2 delivery vans, 1 car)|90,000
Cash|8,800
Bank balance (Sparkasse Wiesbaden)|25,000
Trade accounts receivable|48,000
Bank mortgage (Sparkasse Wiesbaden)|350,000
Trade accounts payable|65,000
Short-term back rents|10,000
On-account payments (received)|50,000]]`,
tasks:[
{id:'a', q:R`a) What is stocktaking?`, sol:R`Under § 240 HGB together with §§ 140, 141 AO every merchant must list the assets and liabilities at the end of each financial year; the activity needed to do so is **stocktaking**: verifying type, quantity and value of assets and liabilities at a certain time.
- Physical stocktaking :: all physical assets (counting, measuring, weighing)
- Book (record) inventory :: non-physical assets and liabilities such as receivables, bank balances, payables and bank loans`},
{id:'b', q:R`b) What is an inventory?`, sol:R`The complete listing of all assets and liabilities by type, quantity and value at a particular date. It is the result of the stocktaking and the basis for the balance sheet (§ 240 para. 1 HGB), prepared at the start of the business and at the end of every financial year (§ 240 para. 2), and retained for 10 years (§ 257 paras. 1 and 4 HGB).
- Assets :: fixed assets first, then current assets — ordered by increasing liquidity
- Liabilities :: ordered by time to maturity, long-term (bank loan) and short-term (rent)`},
{id:'c', q:R`c) What is net equity?`, sol:R`Sum of assets ./. sum of liabilities = net equity (= equity capital).`},
{id:'d', q:R`d) Determine the net equity and assign the items to the balance sheet.`, sol:R`Net equity = 1,158,800 ./. 475,000 = **683,800 €**.

[[t:Balance sheet Flower GmbH 31.12.t1
Assets|€|Equity and liabilities|€
I. Fixed assets: land and buildings|600,000|I. Equity|683,800
Machines|90,000|II. Provisions|—
Carpool|90,000|III. Long-term: bank loan Sparkasse|350,000
Factory and office equipment|60,000|Short-term: trade payables|65,000
III. Inventory: fertilizer|30,000|On-account payments received|50,000
Unfinished products|80,000|Other liabilities (back rents)|10,000
Finished products|127,000||
IV. Other current assets: trade receivables|48,000||
Bank|25,000||
Cash|8,800||
Total|1,158,800|Total|1,158,800]]`},
{id:'e', q:R`e) Determine the balance sheet structure in % of the balance sheet total.`, sol:R`[[t:Structure
Assets|€|%|Capital|€|%
Fixed assets|840,000|72|Equity|683,800|59
Current assets|318,800|28|External capital|475,000|41
Total|1,158,800|100|Total|1,158,800|100]]`},
{id:'f', q:R`f) The back rents are shown as other liabilities. What changes if the entity takes out a loan with Sparkasse Wiesbaden to pay off the back rents before year-end?`, sol:R`Other liabilities fall by 10,000 €, the loan liabilities rise by 10,000 €: **restructuring of liabilities** (liability exchange). Balance sheet total and assets stay unchanged.`},
{id:'g', q:R`g) What changes if it pays the back rents from its bank balance instead?`, sol:R`Other liabilities and the bank account both fall by 10,000 €, so the balance sheet total falls by 10,000 € while equity is unchanged: **balance sheet contraction**.`},
{id:'h', q:R`h) In t2 the net equity is 1,683,800 € at year-end. Determine the profit in t2. What is the disadvantage of this calculation?`, sol:R`Net worth comparison: 1,683,800 ./. 683,800 = **1,000,000 €** profit. Disadvantage: you cannot see the sources of success (which earnings and expenses caused it).`},
{id:'i', q:R`i) Why is profit determined yearly instead of over the total life of the company?`, sol:R`The annual calculation is a compromise between the information purpose (shareholders and stakeholders need timely information to react to economic developments) and the extra cost of calculating the result. A calculation only at liquidation would come too late for decisions.`}
]},

{n:3, topic:'bk-2', title:'Obligation to keep accounts',
intro:R`Who must keep books — commercial law (HGB) and tax law (AO).`,
tasks:[
{id:'a', q:R`a) Is every merchant obliged to keep accounts? Why or why not?`, sol:R`Yes in principle: § 238 para. 1 HGB and § 140 AO oblige every merchant. A merchant runs a commercial business (§ 1 para. 1 HGB, defined in § 1 para. 2).
- Merchant by registration (§ 2 sentence 1 HGB) :: every merchant in the commercial register
- Merchant by legal form (§ 6 para. 1 HGB) :: all corporations
- Exemption (§ 241a HGB) :: sole traders with no more than 600,000 € turnover **and** 60,000 € profit in two consecutive years — they may still opt for bookkeeping
- Tax law (§ 141 AO, derivative obligation) :: even non-merchants such as farmers must keep books once turnover exceeds 600,000 € or profit exceeds 60,000 € (once is enough)`},
{id:'b', q:R`b) X runs a small flower store at Wiesbaden station without employees. Turnover in 01 is 50,000 €, profit 12,000 €. Must X keep accounts?`, sol:R`No. X does not run a business that requires a commercially set-up operation (§ 1 para. 2 HGB), so X is **not a merchant** and cannot be obliged under § 238 para. 1 HGB. The thresholds of § 241a HGB are not even relevant, because they only exempt merchants.`}
]},

{n:4, topic:'bk-3', title:'Income-neutral business transactions',
intro:R`For each transaction of the Flower GmbH: which balance sheet accounts change, asset or liability side, addition or disposal, which of the four types (restructuring of assets, restructuring of liabilities, balance sheet extension, balance sheet contraction) and the booking entry. A booking entry is always written **from debit to credit**.`,
tasks:[
{id:'1', q:R`1. Purchase of a used gift spraying plant via bank transfer of 15,000 €.`, sol:R`Machinery up, bank down: **restructuring of assets**.
[[e:
D|Machinery|15,000
C|Bank|15,000]]`},
{id:'2', q:R`2. The Flower GmbH pays an already booked delivery invoice of 1,500 € via bank transfer.`, sol:R`Trade payables down, bank down: **balance sheet contraction**.
[[e:
D|Trade accounts payable|1,500
C|Bank|1,500]]`},
{id:'3', q:R`3. It pays another already booked invoice of 3,000 € via a loan (redeployment).`, sol:R`Trade payables down, amounts due to banks up: **restructuring of liabilities**.
[[e:
D|Trade accounts payable|3,000
C|Amounts due to banks|3,000]]`},
{id:'4', q:R`4. It buys fertilizer on credit for 1,000 €.`, sol:R`Raw materials up, trade payables up: **balance sheet extension**.
[[e:
D|Raw materials|1,000
C|Trade accounts payable|1,000]]`},
{id:'5', q:R`5. It delivers tulips worth 5,200 € (book value) to a customer and books the invoice amount.`, sol:R`Receivables up, finished goods down: **restructuring of assets** (at book value, no profit).
[[e:
D|Trade accounts receivable|5,200
C|Finished goods|5,200]]`},
{id:'6', q:R`6. The customer settles the booked invoice of 5,200 € by bank transfer.`, sol:R`Bank up, receivables down: **restructuring of assets**.
[[e:
D|Bank|5,200
C|Trade accounts receivable|5,200]]`},
{id:'7', q:R`7. It sells the gift spraying plant at its book value of 15,000 €: 5,000 € in cash, 10,000 € by bank transfer.`, sol:R`Machinery down, cash and bank up: **restructuring of assets** (combined booking entry).
[[e:
D|Bank|10,000
D|Cash register|5,000
C|Machinery|15,000]]`},
{id:'8', q:R`8. It gets flower bulbs for 2,500 €: 500 € in cash, 2,000 € once more liquidity is available.`, sol:R`Goods up, cash down, payables up: **restructuring of assets and balance sheet extension** at once.
[[e:
D|Goods (goods receipt account)|2,500
C|Trade accounts payable|2,000
C|Cash register|500]]`},
{id:'9', q:R`9. A supplier liability of 2,000 € is redeployed into a loan for liquidity reasons.`, sol:R`Trade payables down, amounts due to banks up: **restructuring of liabilities**.
[[e:
D|Trade accounts payable|2,000
C|Amounts due to banks|2,000]]`},
{id:'10', q:R`10. It pays an already booked parking ticket of 10 € in cash.`, sol:R`Other liabilities down, cash down: **balance sheet contraction**.
[[e:
D|Other liabilities|10
C|Cash register|10]]`}
]},

{n:5, topic:'bk-4', title:'From opening (OBSA) to closing balance sheet account (CBSA)',
intro:R`[[t:Balance sheet Flower GmbH 31.12.2011
Assets|€|Liabilities|€
Land|200,000|Equity|30,000
Buildings|300,000|Mortgage liabilities|450,000
Machinery|25,000|Liabilities to banks|100,000
Factory and office equipment|10,000|Trade accounts payable|90,000
Raw material|90,000|Advance payment received|10,000
Trade accounts receivable|5,000||
Bank|40,000||
Cash|10,000||
Total|680,000|Total|680,000]]

Transactions in 2012:
- 1. Taking out a bank loan of 42,000 €.
- 2. A customer pays a due invoice of 2,000 € in cash.
- 3. Special tulip soil is bought on credit for 5,000 €.
- 4. A picking machine is sold for 20,000 €. The buyer already paid 10,000 € in advance last year; the rest is paid during 2012.
- 5. The buyer transfers the remaining 10,000 €.
- 6. The GmbH orders 200 more tulip bulbs for 0.20 € each.

Opening entries: Debit asset accounts / Credit OBSA; Debit OBSA / Credit liability accounts. The OBSA mirrors the opening balance sheet. Closing: Debit CBSA / Credit asset accounts; Debit liability accounts / Credit CBSA. Balance sheet identity (§ 252 para. 1 no. 1 HGB): closing balance sheet = next year's opening balance sheet.`,
tasks:[
{id:'a', q:R`a) Compile the opening balance sheet.`, sol:R`It is identical to the closing balance sheet of 31.12.2011 (balance sheet identity): total 680,000 €.`},
{id:'b', q:R`b) Give the opening booking entries and compile the OBSA.`, sol:R`[[e:
D|Land|200,000
D|Buildings|300,000
D|Machinery|25,000
D|Factory and office equipment|10,000
D|Raw material|90,000
D|Trade accounts receivable|5,000
D|Bank|40,000
D|Cash register|10,000
C|Opening balance sheet account|680,000]]
[[e:
D|Opening balance sheet account|680,000
C|Equity|30,000
C|Mortgage liabilities|450,000
C|Liabilities to banks|100,000
C|Trade accounts payable|90,000
C|Advance payment received|10,000]]
The OBSA shows the liabilities on the debit side and the assets on the credit side (680,000 each).`},
{id:'c', q:R`c) Book the 2012 transactions.`, sol:R`1. [[e:
D|Bank|42,000
C|Liabilities to banks|42,000]]
2. [[e:
D|Cash register|2,000
C|Trade accounts receivable|2,000]]
3. [[e:
D|Raw materials|5,000
C|Trade accounts payable|5,000]]
4. The advance received last year is settled, the rest becomes a receivable (book value = price, no gain).
[[e:
D|Advance payment received|10,000
D|Trade accounts receivable|10,000
C|Machinery|20,000]]
5. [[e:
D|Bank|10,000
C|Trade accounts receivable|10,000]]
6. Only ordered — **pending transaction, no booking**.`},
{id:'d', q:R`d) Close the accounts via the CBSA and compile it.`, sol:R`[[t:Closing balance sheet account 31.12.2012
Debit|€|Credit|€
Land|200,000|Equity|30,000
Buildings|300,000|Mortgage liabilities|450,000
Machinery (25,000 − 20,000)|5,000|Liabilities to banks (100,000 + 42,000)|142,000
Factory and office equipment|10,000|Trade accounts payable (90,000 + 5,000)|95,000
Raw material (90,000 + 5,000)|95,000|Advance payment received|0
Trade receivables (5,000 − 2,000 + 10,000 − 10,000)|3,000||
Bank (40,000 + 42,000 + 10,000)|92,000||
Cash (10,000 + 2,000)|12,000||
Total|717,000|Total|717,000]]
Entries: Debit CBSA 717,000 / Credit each asset account; Debit each liability account / Credit CBSA 717,000. The closing balance sheet is a copy of the CBSA.`},
{id:'e', q:R`e) Why did the equity account not change / why was no profit made?`, sol:R`All 2012 transactions are **income-neutral**: none of them changed equity, so equity stays at 30,000 € and there is no profit.`}
]},

{n:6, topic:'bk-5', title:'Transactions affecting the income statement (P&L, private account)',
intro:R`Sole proprietorship "Organic Flowers", balance sheet 31.12.2011: land and buildings 400,000, machinery 100,000, trade receivables 20,000, bank 40,000, cash 10,000 (total 570,000) | equity 300,000, liability to banks 270,000.

Expense accounts record decreases in equity on the debit side, earnings accounts increases on the credit side: Debit inventory account / Credit earning; Debit expense / Credit inventory account. Private withdrawal: Debit Private / Credit Cash or Bank; private contribution: Debit Cash or Bank / Credit Private.`,
tasks:[
{id:'1', q:R`1. Open the accounts and prepare the OBSA.`, sol:R`Debit OBSA / Credit Equity 300,000 and Credit Liabilities to banks 270,000; Debit Land and buildings 400,000, Machinery 100,000, Trade receivables 20,000, Bank 40,000, Cash 10,000 / Credit OBSA. OBSA total 570,000 on both sides.`},
{id:'2', q:R`2. Book: (1) interest of 500 € paid by bank · (2) electricity 650 € by bank · (3) owner takes 200 € from the cash register for anniversary flowers · (4) machine with book value 50,000 € sold for 50,500 € by bank transfer · (5) owner puts 100 € from his private account back into the cash register · (6) interest income of 1,000 € on the bank account.`, sol:R`(1) [[e:
D|Interest expense|500
C|Bank|500]]
(2) [[e:
D|Expense for energy|650
C|Bank|650]]
(3) [[e:
D|Private withdrawal|200
C|Cash register|200]]
(4) [[e:
D|Bank|50,500
C|Machinery|50,000
C|Extraordinary earnings|500]]
(5) [[e:
D|Cash register|100
C|Private contribution|100]]
(6) [[e:
D|Bank|1,000
C|Interest earning|1,000]]`},
{id:'3', q:R`3. Compile the P&L account, the private and equity accounts and perform the closing entries.`, sol:R`Preparatory closing: expense and earning accounts → P&L, P&L balance → Equity, private balance → Equity.
[[t:P&L
Debit|€|Credit|€
Interest expense|500|Interest earning|1,000
Expense for energy|650|Extraordinary earnings|500
Equity (profit)|350||
Total|1,500|Total|1,500]]
[[t:Private
Debit|€|Credit|€
Cash register (withdrawal)|200|Cash register (contribution)|100
||Equity (balance)|100
Total|200|Total|200]]
[[t:Equity
Debit|€|Credit|€
Private|100|OBSA|300,000
CBSA|300,250|P&L|350
Total|300,350|Total|300,350]]
Final closing (CBSA): land and buildings 400,000, machinery 50,000, receivables 20,000, bank 90,350 (40,000 − 500 − 650 + 50,500 + 1,000), cash 9,900 | equity 300,250, liabilities to banks 270,000 → total 570,250.`},
{id:'b', q:R`b) What is the profit of the fiscal year?`, sol:R`- Flow variable :: earnings 1,500 ./. expenses 1,150 = **350 €**
- Stock variable :: equity end 300,250 ./. equity start 300,000 + withdrawals 200 ./. contributions 100 = **350 €**

Private withdrawals and contributions change equity but are not profit — that is why they are added back / deducted.`, warn:R`The task asks for "the profit of 2011", but the transactions happen in the year after the 31.12.2011 balance sheet. The 350 € is the profit of that following year.`}
]},

{n:7, topic:'bk-6', title:'Value-added tax (VAT)',
intro:R`Standard rate 19%; cut and potted flowers for decoration 7% (artificial flowers 19%).`,
tasks:[
{id:'a', q:R`a) How do you get the VAT from a net price and from a gross price?`, sol:R`- Gross / 1.19 = net · net × 1.19 = gross
- VAT = net × 0.19 = (gross × 0.19) / 1.19`},
{id:'b', q:R`b) Fill in the table and explain why VAT is an "all-phase net tax with input tax deduction". Net prices: forest enterprise 2,000 → furniture manufacturer 6,500 → wholesaler 9,520 → retailer 10,000 → end user pays 11,900 gross.`, sol:R`[[t:VAT chain (19%)
Stage|Net|VAT|Gross|Input tax|Tax payable
Forest enterprise|2,000|380.00|2,380.00|0.00|380.00
Furniture manufacturer|6,500|1,235.00|7,735.00|380.00|855.00
Wholesaler|9,520|1,808.80|11,328.80|1,235.00|573.80
Retailer|10,000|1,900.00|11,900.00|1,808.80|91.20
Sum|—|5,323.80|—|3,423.80|1,900.00]]
Every stage pays VAT only on its own value added (VAT − input tax): all phases are taxed, but only on the net added value. The sum paid (1,900) equals 19% of the final net price 10,000, which the end user bears.`, warn:R`The official table puts the sums (5,323.80 / 3,423.80 / 1,900) into the row "End user". The end user pays 11,900 gross and cannot deduct input tax — that row is really the column total.`},
{id:'c', q:R`c) Book the transactions, develop the VAT account, close it and book the VAT balance:
- 1) Wood for production, 30,000 € net, on credit, delivered the same day.
- 2) Truck repair, invoice 2,856 € gross, paid by bank.
- 3) Interest of 2,000 € paid by bank.
- 4) Chemical fertilizer 450 € net, paid in cash.
- 5) 1,000 high-quality tulips sold at 1.07 €/piece gross, paid by bank; production cost 0.50 €/piece.
- 6) The truck (book value 4,000 €) is sold for 5,000 € net on credit; 2% discount within eight days; the customer pays after six days.
- 7) 20,000 of 40,000 low-quality tulips sold at 0.20 €/piece net, payment in the coming months; production cost 0.10 €/piece.
- 8) Advertising 800 € net, paid by bank.`, sol:R`1) [[e:
D|Raw material|30,000
D|Input tax|5,700
C|Trade accounts payable|35,700]]
2) [[e:
D|External maintenance|2,400
D|Input tax|456
C|Bank|2,856]]
3) Interest is VAT-free. [[e:
D|Interest expense|2,000
C|Bank|2,000]]
4) [[e:
D|Raw material|450
D|Input tax|85.50
C|Cash register|535.50]]
5) 7% on flowers: 1,070 / 1.07 = 1,000 net. [[e:
D|Bank|1,070
C|Sales revenue|1,000
C|VAT|70]]
Production company: the whole price goes to sales revenue; at year-end the stock of tulips is corrected by their book value 500 — total cost method: Debit Change in inventory 500 / Credit Finished goods 500; cost of sales method: Debit Production expenses 500 / Credit Finished goods 500.
6) Sale: [[e:
D|Trade accounts receivable|5,950
C|Carpool|4,000
C|Extraordinary earnings|1,000
C|VAT|950]]
Payment with 2% discount (119 gross = 100 net + 19 VAT): [[e:
D|Bank|5,831
D|VAT|19
D|Extraordinary earnings|100
C|Trade accounts receivable|5,950]]
7) [[e:
D|Trade accounts receivable|4,280
C|Sales revenue|4,000
C|VAT|280]]
Year-end correction 20,000 × 0.10 = 2,000: Debit Change in inventory (GKV) or Production expenses (UKV) 2,000 / Credit Finished goods 2,000.
8) [[e:
D|Expenses for advertisement|800
D|Input tax|152
C|Bank|952]]
Input tax account: 5,700 + 456 + 85.50 + 152 = 6,393.50. VAT account: credits 950 + 70 + 280 = 1,300, debit 19 → VAT 1,281.

Closing — input tax is always closed via the VAT account:
[[e:
D|VAT|6,393.50
C|Input tax|6,393.50]]
Input tax exceeds VAT by 6,393.50 − 1,281 = 5,112.50 → receivable from the tax office:
[[e:
D|Receivables from the tax office|5,112.50
C|VAT|5,112.50]]`, warn:R`In the official VAT T-account the credit entries (6) 950 and (7) 280 are labelled "Trade accounts payable" — the counter account is Trade accounts **receivable** (sales on credit).`}
]},

{n:8, topic:'bk-8', title:'Acquisition costs',
intro:R`The Recycling AG buys an additional machine. Costs incurred:

[[t:Costs of the machine purchase
Item|€
Purchase price (gross)|238,000
Packaging (net)|2,000
Transport insurance|3,000
Adjustment of the machine by another supplier (gross)|11,900
Transport (net)|1,500
Implicit costs of selecting the best machine (net)|2,499
Security wall required by law (net)|11,000
Marketing for park benches made of recycled gnomes (net)|1,500]]

The supplier offers 3% cash discount within 30 days, which the AG uses. All other items come from other suppliers. The supplier's main business is producing garden gnomes, not selling machines. Assume VAT only where a gross amount is shown.

Scheme (§ 255 para. 1 HGB): acquisition price (without VAT) + ancillary costs + subsequent acquisition costs ./. price reductions = acquisition costs. Only direct costs are ancillary costs; interest and other indirect costs are expensed. Exception for **production** costs (§ 255 para. 3 HGB): interest on debt used to produce an asset may be capitalised for the production period. Rebates are deducted at once; cash discounts and bonuses only when granted (at payment).`,
tasks:[
{id:'1', q:R`1. What are the acquisition costs of the machine?`, sol:R`[[t:Acquisition costs
Item|€
Purchase price net (238,000 / 1.19)|200,000
./. 3% cash discount|−6,000
+ Packaging|2,000
+ Transport insurance|3,000
+ Adjustment (11,900 / 1.19)|10,000
+ Transport|1,500
+ Security wall (industrial safety by law)|11,000
= Acquisition costs|221,500]]
Not included: the implicit selection costs (imputed costs, no expenditure) and the marketing costs (distribution costs may not be capitalised).`},
{id:'2', q:R`2. Booking entries for the Recycling AG.`, sol:R`At delivery the discount is not yet certain, so the machine is first recognised including it (221,500 + 6,000 = 227,500).
[[e:
D|Machinery|227,500
D|Input tax|43,225
C|Trade accounts payable|270,725]]
At payment the discount is certain: the machine is reduced by 6,000 and the input tax on the discount (6,000 × 19% = 1,140) is corrected. The discount only applies to the purchase price.
[[e:
D|Trade accounts payable|270,725
C|Bank|263,585
C|Input tax|1,140
C|Machinery|6,000]]`, warn:R`The official solution takes 19% input tax on the whole 227,500 (= 43,225), although the task says VAT only arises where a gross amount is shown (purchase price 38,000 + adjustment 1,900 = 39,900 input tax). Consistent with the assumption: Debit Machinery 227,500, Input tax 39,900 / Credit Payables 267,400; at payment Debit Payables 267,400 / Credit Bank 260,260, Input tax 1,140, Machinery 6,000. The acquisition costs (221,500) are the same either way.`},
{id:'3', q:R`3. Booking entries for the supplier (book value of the machine 150,000 €).`, sol:R`The supplier only invoices the purchase price + VAT; selling a machine is not its main business, so the gain is extraordinary.
Delivery: [[e:
D|Trade accounts receivable|238,000
C|Machinery|150,000
C|VAT|38,000
C|Extraordinary earnings|50,000]]
Payment with 3% customer discount (7,140 gross = 6,000 + 1,140 VAT):
[[e:
D|Bank|230,860
D|VAT|1,140
D|Extraordinary earnings|6,000
C|Trade accounts receivable|238,000]]
A customer discount reduces revenue and corrects VAT at the seller (§ 277 para. 1 HGB).`},
{id:'4', q:R`4. Booking entries for the implicit selection costs and the marketing costs.`, sol:R`- Implicit costs :: imputed (calculatory) costs belong to internal accounting only — **no booking** and not part of the acquisition costs
- Marketing :: distribution costs may not be capitalised (§ 255 para. 2 sentence 4 HGB) → immediate expense
[[e:
D|Marketing costs|1,500
D|Input tax|285
C|Trade accounts payable|1,785]]`}
]},

{n:9, topic:'bk-10', title:'Cost of sales vs total cost method',
intro:R`Garden Gnomes OHG (one-stage production of plastic gnomes). Balance sheet 31.12.2010: raw material 20,000, cash 14,000 | equity 34,000.

Transactions 2011:
- 1. 01.01.: loan of 10,000 € to finance raw materials; repayment on 31.12.: 11,000 €.
- 2. Wages for administrative staff (general administration) 3,000 € by bank.
- 3. Cash purchase of raw materials 10,000 € net.
- 4. Raw materials of 15,000 € are used in production.
- 5. Cash sale of 100 gnomes for 37,000 € net.
- 6. The freight forwarder's invoice of 2,380 € gross for delivering the gnomes is still unpaid on 31.12.

190 gnomes were produced. The OHG wants to report a **high** operating profit.

Names as in the tutorial: total cost method (GKV) = all production expenses + change in inventory; cost of sales method (UKV) = only the production expenses of goods sold.`,
tasks:[
{id:'a', q:R`a) State and explain the main differences between the two methods.`, sol:R`- Total cost method (GKV) :: costs of all goods produced are matched against sales revenue and the change in inventory; cost-type oriented
- Cost of sales method (UKV) :: only the production costs of the goods sold are matched against sales revenue; cost-centre oriented, internationally preferred
- Both always give the same profit; only the presentation of expenses differs`},
{id:'bi', q:R`b) i) Booking entries under the total cost method.`, sol:R`1. [[e:
D|Bank|10,000
C|Liabilities to banks|10,000]]
31.12.: [[e:
D|Liabilities to banks|10,000
D|Interest expense|1,000
C|Bank|11,000]]
2. [[e:
D|Wage expenses|3,000
C|Bank|3,000]]
3. [[e:
D|Raw material|10,000
D|Input tax|1,900
C|Cash register|11,900]]
4. [[e:
D|Expenses for raw material|15,000
C|Raw material|15,000]]
5. [[e:
D|Cash|44,030
C|Sales revenue|37,000
C|VAT|7,030]]
6. [[e:
D|Expenses for delivery|2,000
D|Input tax|380
C|Trade accounts payable|2,380]]`},
{id:'bii', q:R`b) ii) Value the gnome inventory and book the necessary adjustments (high profit wanted).`, sol:R`Close VAT: Debit VAT 2,280 / Credit Input tax 2,280; Debit VAT 4,750 / Credit Liabilities to the tax office 4,750.

High profit → capitalise as much as possible (all options used):
[[t:Production costs
Component|€
Raw material (obligation)|15,000
General administration (option)|3,000
Interest on debt (option, § 255 para. 3, production only)|1,000
Sum|19,000]]
19,000 / 190 = 100 € per gnome. 90 unsold × 100 = **9,000** inventory.
[[e:
D|Finished goods|9,000
C|Change in inventory of finished goods|9,000]]`},
{id:'biii', q:R`b) iii) Set up the P&L and determine the net income.`, sol:R`[[t:P&L (total cost method)
Debit|€|Credit|€
Wage expense|3,000|Sales revenue|37,000
Expenses for raw material|15,000|Change in inventory|9,000
Expenses for delivery|2,000||
Interest expense|1,000||
Equity (net income)|25,000||
Total|46,000|Total|46,000]]`},
{id:'c', q:R`c) Same with the cost of sales method, incl. the P&L.`, sol:R`Production-related outlays go to Finished goods (income-neutral):
1. 31.12.: [[e:
D|Liabilities to banks|10,000
D|Finished goods|1,000
C|Bank|11,000]]
2. [[e:
D|Finished goods|3,000
C|Bank|3,000]]
3. as before (Debit Raw material 10,000, Input tax 1,900 / Credit Cash 11,900)
4. [[e:
D|Finished goods|15,000
C|Raw material|15,000]]
5. and 6. as before.
Cost of the 100 sold gnomes: 100 × 100 = 10,000.
[[e:
D|Production expenses|10,000
C|Finished goods|10,000]]
[[t:P&L (cost of sales method)
Debit|€|Credit|€
Production expenses|10,000|Sales revenue|37,000
Expenses for delivery|2,000||
Equity (net income)|25,000||
Total|37,000|Total|37,000]]`},
{id:'d', q:R`d) Compare the results.`, sol:R`Net income is **25,000 €** under both methods. GKV shows all 19,000 of production outlays and corrects with +9,000 change in inventory; UKV shows only the 10,000 for goods sold.`}
]},

{n:10, topic:'bk-11', title:'Ordinary and extraordinary depreciation',
intro:R`Ordinary depreciation applies only to depreciable fixed assets (buildings, machinery, equipment, vehicles); undeveloped land, shares or art have unlimited use. Booking: Debit Ordinary (or Extraordinary) depreciation / Credit asset account.`,
tasks:[
{id:'Aa', q:R`A a) Y GmbH: machine delivered 01.01.x1 on credit, acquisition costs 100,000 € net, useful life 10 years, straight-line. Yearly amount and booking entries at delivery and year-end?`, sol:R`100,000 / 10 = **10,000 € per year**.
Delivery: [[e:
D|Machinery|100,000
D|Input tax|19,000
C|Trade accounts payable|119,000]]
Year-end: [[e:
D|Ordinary depreciation|10,000
C|Machinery|10,000]]`},
{id:'Ab', q:R`A b) Geometric-degressive at 25%: amounts for x1–x3? Optimal year to switch to straight-line?`, sol:R`[[t:Book value depreciation 25%
Year|Book value at start|Depreciation
x1|100,000|25,000
x2|75,000|18,750
x3|56,250|14,063]]
Switch year: t = useful life − 100/p + 1 = 10 − 100/25 + 1 = **year 7**.`},
{id:'Ac', q:R`A c) Arithmetic-degressive: depreciation in years 1 and 2?`, sol:R`Digression amount D = (cost − residual value) / (1 + 2 + … + 10) = 100,000 / 55 = 1,818.18 €.
- Year 1 :: 10 × D = 18,181.80 → book 18,182
- Year 2 :: 9 × D = 16,363.62 → book 16,364`},
{id:'Ad', q:R`A d) Performance-related: total capacity 800,000 hours, 10,000 hours used in 2010. Depreciation?`, sol:R`100,000 / 800,000 h = 0.125 €/h × 10,000 h = **1,250 €** (Debit Ordinary depreciation / Credit Machinery).`},
{id:'Ba', q:R`B a) G GmbH buys a machine on 05.01.x1 for 300,000 € net, 10 years, straight-line. Ordinary depreciation x1–x4?`, sol:R`300,000 / 10 = **30,000 € per year** (Debit Ordinary depreciation / Credit Machinery).`},
{id:'Bb', q:R`B b) Book value on 31.12.x4?`, sol:R`300,000 − 4 × 30,000 = **180,000 €**.`},
{id:'Bc', q:R`B c) Fair value on 31.12.x4 is 150,000 €, permanent impairment. What now?`, sol:R`Extraordinary depreciation is mandatory (§ 253 para. 3 sentence 3 HGB), after the ordinary depreciation: 180,000 − 150,000 = 30,000.
[[e:
D|Extraordinary depreciation|30,000
C|Machinery|30,000]]`},
{id:'Bd', q:R`B d) Ordinary depreciation on 31.12.x5?`, sol:R`New plan on the lower base: 150,000 / 6 remaining years = **25,000 €** → book value 31.12.x5 = 125,000.`},
{id:'Be', q:R`B e) Fair value on 31.12.x5 is 160,000 €. How do you treat the increase?`, sol:R`The reason for the write-down no longer exists → **write-up is mandatory** (§ 253 para. 5 sentence 1 HGB), but only up to the amortised cost without the impairment: 180,000 − 30,000 = 150,000. Write-up = 150,000 − 125,000 = **25,000**.
[[e:
D|Machinery|25,000
C|Other operating earnings|25,000]]
Afterwards the original plan continues: 30,000 per year.`}
]},

{n:11, topic:'bk-12', title:'Accruals, deferrals and advance payments',
intro:R`Recycling GmbH (park benches from recycled garden gnomes) — a production company, so sales from stock are corrected at year-end with the total cost or cost of sales method.

- Payment after delivery :: receivable (seller) and liability (buyer); revenue at delivery, the later payment is income-neutral. Receivables and payables are always gross amounts
- Payment before delivery :: advance payment made (a receivable) / advance payment received (a liability), shown separately (§ 266 HGB); VAT arises already on the advance (§ 13 UStG)
- Deferrals (§ 250 HGB) :: payment before, time-related service (rent, interest, insurance) after the balance sheet date → deferred expense (aRAP) / deferred income (pRAP); usually VAT-free (option § 9 UStG), not valued, not discounted`,
tasks:[
{id:'Aa', q:R`A a) 6.5.x1: contract with D (entrepreneur) for two benches at 400 € net each (book value 600 €). Book for the GmbH and D.`, sol:R`Nothing — a **pending transaction**: both sides have an equal obligation and claim; profit and assets are not affected.`},
{id:'Ab', q:R`A b) 7.8.x1: D picks up the benches and pays cash. Entries for both?`, sol:R`GmbH: [[e:
D|Cash register|952
C|Sales revenue|800
C|VAT|152]]
Year-end correction (book value 600) — GKV: Debit Change in inventory 600 / Credit Finished goods 600; UKV: Debit Production expenses 600 / Credit Finished goods 600.
D: [[e:
D|Factory and office equipment|800
D|Input tax|152
C|Cash register|952]]`},
{id:'Ac', q:R`A c) D buys another bench on 1.4.x2 for 400 € net (book value 300 €), delivered 5.4.x2, paid by bank 10.4.x2. Entries?`, sol:R`1.4.: nothing (pending). 5.4. (delivery = realisation; economic ownership counts even with retention of title, § 246 para. 1 sentence 2 HGB):
GmbH: [[e:
D|Trade accounts receivable|476
C|Sales revenue|400
C|VAT|76]]
(+ year-end: Debit Change in inventory / Production expenses 300 / Credit Finished goods 300)
D: [[e:
D|Factory and office equipment|400
D|Input tax|76
C|Trade accounts payable|476]]
10.4.: GmbH Debit Bank 476 / Credit Trade receivables 476; D Debit Trade payables 476 / Credit Bank 476.`},
{id:'Ba', q:R`B a) 5.5.x3: three benches sold to G for 1,200 € net. G pays 714 € incl. VAT on 6.5., delivery 10.5., the rest by bank on 11.5. Entries for both?`, sol:R`5.5.: nothing (pending). 6.5. advance:
GmbH: [[e:
D|Bank|714
C|Advance payment received|600
C|VAT|114]]
G: [[e:
D|Advance payment made|600
D|Input tax|114
C|Bank|714]]
10.5. delivery — GmbH: [[e:
D|Advance payment received|600
D|Trade accounts receivable|714
C|Sales revenue|1,200
C|VAT|114]]
(+ year-end correction 900: Debit Change in inventory / Production expenses / Credit Finished goods)
G: [[e:
D|Factory and office equipment|1,200
D|Input tax|114
C|Advance payment made|600
C|Trade accounts payable|714]]
11.5.: GmbH Debit Bank 714 / Credit Trade receivables 714; G Debit Trade payables 714 / Credit Bank 714.`, warn:R`The official solution calls the buyer "customer D" in part B (it is G) and credits "Advance payment received" in G's delivery entry. From G's view the advance is an **advance payment made** (a receivable), so the credit is Advance payment made 600.`},
{id:'Bb', q:R`B b) G rents his office from H (no VAT, § 9 UStG not opted). On 1.12.x3 G transfers the rent for December, January and February: 10,000 € per month. Entries on 1.12.x3?`, sol:R`The whole payment is first booked as expense / earning:
Tenant G: [[e:
D|Rental expenses|30,000
C|Bank|30,000]]
Landlord H: [[e:
D|Bank|30,000
C|Rental earnings|30,000]]`},
{id:'Bc', q:R`B c) Entries on 31.12.x3?`, sol:R`Two months belong to x4 → defer 20,000.
G: [[e:
D|Deferred expenses|20,000
C|Rental expenses|20,000]]
H: [[e:
D|Rental earnings|20,000
C|Deferred income|20,000]]`},
{id:'Bd', q:R`B d) When are the deferrals released and how?`, sol:R`When the service is provided: 10,000 at the end of January and 10,000 at the end of February x4.
G: [[e:
D|Rental expenses|10,000
C|Deferred expenses|10,000]]
H: [[e:
D|Deferred income|10,000
C|Rental earnings|10,000]]
The lecture books the prepaid part directly into the deferral; the tutorial books everything as expense/earning first and corrects on 31.12. Both give the same result.`}
]}
];

/* ---------- extra accounts and booking drills from the tutorials ---------- */
BK_ACCOUNTS.push('Interest expense','Interest earnings','Extraordinary earnings','Other operating earnings','Other liabilities','Production expenses','Raw material expense','Wage expense','Energy expense','Advertising expense','Maintenance expense','Rental expenses','Extraordinary depreciation','Carpool','Receivable from tax office','Liability to tax office');
BK_TRAIN.push(
{id:'tut4-1', topic:'bk-3', src:'TUT 4', text:'A used gift spraying plant is bought by bank transfer for 15,000€.', lines:[['D','Machinery','15,000'],['C','Bank','15,000']]},
{id:'tut4-3', topic:'bk-3', src:'TUT 4', text:'An already booked supplier invoice of 3,000€ is paid with a new bank loan.', lines:[['D','Trade payables','3,000'],['C','Loan / Liability','3,000']]},
{id:'tut4-4', topic:'bk-3', src:'TUT 4', text:'Fertilizer (raw material) is bought on credit for 1,000€.', lines:[['D','Raw materials','1,000'],['C','Trade payables','1,000']]},
{id:'tut4-5', topic:'bk-3', src:'TUT 4', text:'Tulips with a book value of 5,200€ are delivered and invoiced at book value.', lines:[['D','Trade receivables','5,200'],['C','Finished goods','5,200']]},
{id:'tut4-7', topic:'bk-3', src:'TUT 4', text:'A machine is sold at its book value of 15,000€: 10,000€ by bank, 5,000€ in cash.', lines:[['D','Bank','10,000'],['D','Cash','5,000'],['C','Machinery','15,000']]},
{id:'tut4-8', topic:'bk-3', src:'TUT 4', text:'Flower bulbs (goods) for 2,500€: 2,000€ paid later, 500€ in cash.', lines:[['D','Inventories','2,500'],['C','Trade payables','2,000'],['C','Cash','500']]},
{id:'tut4-10', topic:'bk-3', src:'TUT 4', text:'An already booked parking ticket of 10€ is paid in cash.', lines:[['D','Other liabilities','10'],['C','Cash','10']]},
{id:'tut5-4', topic:'bk-4', src:'TUT 5', text:'A machine (book value 20,000€) is sold for 20,000€. The buyer paid 10,000€ in advance last year; the rest is still open.', lines:[['D','Advance payment received','10,000'],['D','Trade receivables','10,000'],['C','Machinery','20,000']]},
{id:'tut6-1', topic:'bk-5', src:'TUT 6', text:'Interest of 500€ is paid by bank transfer.', lines:[['D','Interest expense','500'],['C','Bank','500']]},
{id:'tut6-2', topic:'bk-5', src:'TUT 6', text:'Electricity costs of 650€ are paid by bank (no VAT given).', lines:[['D','Energy expense','650'],['C','Bank','650']]},
{id:'tut6-4', topic:'bk-5', src:'TUT 6', text:'A machine with a book value of 50,000€ is sold for 50,500€ by bank transfer (no VAT given).', lines:[['D','Bank','50,500'],['C','Machinery','50,000'],['C','Extraordinary earnings','500']]},
{id:'tut6-5', topic:'bk-5', src:'TUT 6', text:'The owner puts 100€ from his private account into the cash register.', lines:[['D','Cash','100'],['C','Private','100']]},
{id:'tut6-6', topic:'bk-5', src:'TUT 6', text:'The company receives interest of 1,000€ on its bank account.', lines:[['D','Bank','1,000'],['C','Interest earnings','1,000']]},
{id:'tut6-7', topic:'bk-5', src:'TUT 6', text:'Year-end: the private account shows net withdrawals of 100€. Close it.', lines:[['D','Equity','100'],['C','Private','100']]},
{id:'tut7-1', topic:'bk-6', src:'TUT 7', text:'Wood (raw material) for 30,000€ net + 19% VAT is bought on credit.', lines:[['D','Raw materials','30,000'],['D','Input tax','5,700'],['C','Trade payables','35,700']]},
{id:'tut7-2', topic:'bk-6', src:'TUT 7', text:'A truck repair invoice of 2,856€ gross is paid by bank.', lines:[['D','Maintenance expense','2,400'],['D','Input tax','456'],['C','Bank','2,856']]},
{id:'tut7-5', topic:'bk-6', src:'TUT 7', text:'1,000 tulips are sold for 1.07€ gross each (7% VAT), paid by bank.', lines:[['D','Bank','1,070'],['C','Sales revenue','1,000'],['C','VAT','70']]},
{id:'tut7-6', topic:'bk-6', src:'TUT 7', text:'A truck with a book value of 4,000€ is sold for 5,000€ net + 19% VAT on credit.', lines:[['D','Trade receivables','5,950'],['C','Carpool','4,000'],['C','Extraordinary earnings','1,000'],['C','VAT','950']]},
{id:'tut7-6b', topic:'bk-6', src:'TUT 7', text:'The truck buyer pays the 5,950€ invoice within six days and deducts 2% cash discount.', lines:[['D','Bank','5,831'],['D','VAT','19'],['D','Extraordinary earnings','100'],['C','Trade receivables','5,950']]},
{id:'tut7-8', topic:'bk-6', src:'TUT 7', text:'Advertising for 800€ net + 19% VAT is paid by bank.', lines:[['D','Advertising expense','800'],['D','Input tax','152'],['C','Bank','952']]},
{id:'tut7-9', topic:'bk-6', src:'TUT 7', text:'Year-end: input tax (6,393.50€) exceeds VAT (1,281€). Book the remaining receivable of 5,112.50€ after closing input tax into the VAT account.', lines:[['D','Receivable from tax office','5,112.50'],['C','VAT','5,112.50']]},
{id:'tut8-1', topic:'bk-8', src:'TUT 8', text:'Supplier view: a machine (book value 150,000€, not the main business) is sold on credit for 200,000€ net + 19% VAT.', lines:[['D','Trade receivables','238,000'],['C','Machinery','150,000'],['C','VAT','38,000'],['C','Extraordinary earnings','50,000']]},
{id:'tut8-2', topic:'bk-8', src:'TUT 8', text:'Supplier view: the customer pays the 238,000€ invoice with 3% cash discount.', lines:[['D','Bank','230,860'],['D','VAT','1,140'],['D','Extraordinary earnings','6,000'],['C','Trade receivables','238,000']]},
{id:'tut8-3', topic:'bk-8', src:'TUT 8', text:'Marketing costs of 1,500€ net + 19% VAT arrive on credit.', lines:[['D','Advertising expense','1,500'],['D','Input tax','285'],['C','Trade payables','1,785']]},
{id:'tut8-4', topic:'bk-8', src:'TUT 8', text:'A machine with a list price of 10,000€ net is delivered on credit with a 2% rebate agreed in the contract.', lines:[['D','Machinery','9,800'],['D','Input tax','1,862'],['C','Trade payables','11,662']]},
{id:'tut9-1', topic:'bk-10', src:'TUT 9', text:'31.12.: a bank loan of 10,000€ is repaid with 1,000€ interest by bank (total cost method).', lines:[['D','Loan / Liability','10,000'],['D','Interest expense','1,000'],['C','Bank','11,000']]},
{id:'tut9-4', topic:'bk-10', src:'TUT 9', text:'Total cost method: raw materials of 15,000€ are used in production.', lines:[['D','Raw material expense','15,000'],['C','Raw materials','15,000']]},
{id:'tut9-4u', topic:'bk-10', src:'TUT 9', text:'Cost of sales method: raw materials of 15,000€ are used in production.', lines:[['D','Finished goods','15,000'],['C','Raw materials','15,000']]},
{id:'tut9-5', topic:'bk-10', src:'TUT 9', text:'100 gnomes are sold for cash at 37,000€ net + 19% VAT.', lines:[['D','Cash','44,030'],['C','Sales revenue','37,000'],['C','VAT','7,030']]},
{id:'tut9-6', topic:'bk-10', src:'TUT 9', text:'Total cost method, year-end: 90 unsold gnomes at 100€ production cost are added to inventory.', lines:[['D','Finished goods','9,000'],['C','Change in inventory','9,000']]},
{id:'tut9-7', topic:'bk-10', src:'TUT 9', text:'Cost of sales method, year-end: book the production costs of the 100 gnomes sold (100€ each).', lines:[['D','Production expenses','10,000'],['C','Finished goods','10,000']]},
{id:'tut10-1', topic:'bk-11', src:'TUT 10', text:'A machine is delivered on credit for 100,000€ net + 19% VAT.', lines:[['D','Machinery','100,000'],['D','Input tax','19,000'],['C','Trade payables','119,000']]},
{id:'tut10-2', topic:'bk-11', src:'TUT 10', text:'Book value 180,000€, permanent fair value 150,000€: book the impairment.', lines:[['D','Extraordinary depreciation','30,000'],['C','Machinery','30,000']]},
{id:'tut10-3', topic:'bk-11', src:'TUT 10', text:'The reason for an earlier write-down no longer exists: write the machine up by 25,000€.', lines:[['D','Machinery','25,000'],['C','Other operating earnings','25,000']]},
{id:'tut11-1', topic:'bk-12', src:'TUT 11', text:'Seller (production company): a bench is delivered on credit for 400€ net + 19% VAT.', lines:[['D','Trade receivables','476'],['C','Sales revenue','400'],['C','VAT','76']]},
{id:'tut11-2', topic:'bk-12', src:'TUT 11', text:'Year-end, total cost method: the sold bench (book value 300€) leaves finished goods.', lines:[['D','Change in inventory','300'],['C','Finished goods','300']]},
{id:'tut11-3', topic:'bk-12', src:'TUT 11', text:'Buyer: pays an advance of 714€ incl. 19% VAT by bank for benches delivered later.', lines:[['D','On-account payment','600'],['D','Input tax','114'],['C','Bank','714']]},
{id:'tut11-4', topic:'bk-12', src:'TUT 11', text:'Seller: delivers benches for 1,200€ net; 600€ net was received in advance, the rest (714€ gross) is invoiced.', lines:[['D','Advance payment received','600'],['D','Trade receivables','714'],['C','Sales revenue','1,200'],['C','VAT','114']]},
{id:'tut11-5', topic:'bk-12', src:'TUT 11', text:'Tenant, 31.12.: 20,000€ of rent already booked as expense belongs to next year.', lines:[['D','Deferred expense','20,000'],['C','Rental expenses','20,000']]},
{id:'tut11-6', topic:'bk-12', src:'TUT 11', text:'Landlord, 31.12.: 20,000€ of rent already booked as earning belongs to next year.', lines:[['D','Rental earnings','20,000'],['C','Deferred income','20,000']]}
);
