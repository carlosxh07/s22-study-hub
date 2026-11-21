/* ============================================================ BOOKKEEPING — CLOER'S MOCK EXAM (21.11.2026) ============================================================ */
// "EBS - BS BSc Bookkeeping Mock Exam.pdf" (Open-response model solutions, 6 pages). Same schema as BK_EXAM
// (n, topic, title, intro, tasks[id,q,sol]) + pts per task, so Mistakes & Memory can read bk-mock-state ("n-id").
const BK_MOCK_FORMAT = R`**Exam format (from the mock, 21.11.)**
- Working time :: 135 minutes, **135 points** (1 point per minute)
- Permitted aids :: non-programmable calculator only
- Format :: open response: show all calculations, every journal entry as **Debit / Soll — Credit / Haben**
- Defaults :: VAT ignored unless stated, financial year = calendar year, **gross principle** (sales revenue and cost of goods sold are never netted)
- Structure :: 7 number cases × 15 P (Task 1 = 30 P) + 2 theory tasks × 7.5 P (banking system, legal forms & merchant status)

**Points per topic:** classification + entries 30 · VAT with discount 15 · merchandise accounts 15 · provisions 15 · deferrals/accruals 15 · production GKV/UKV 15 · depreciation + disposal 15 · banking 7.5 · legal form 7.5.`;

const BK_MOCK = [
{n:1, pts:30, topic:'bk-1', title:'Classification and journal entries',
intro:R`For each case: (1) classify cash inflow/outflow (payment-in / payment-out), income/expenditure, earnings/expense and revenues/costs; (2) prepare all financial-accounting journal entries required in 20X1; (3) briefly explain any difference between financial accounting and cost accounting.`,
tasks:[
{id:'a', pts:6, q:R`a) Merchandise with a carrying amount of €12,600 is sold on account for €21,000. VAT is ignored.`,
 sol:R`**What happens?** Two things at the same moment: (1) we sell, so the customer now owes us 21,000; (2) the goods leave our warehouse, and they were worth 12,600 to us. **Gross principle:** book both separately. Never book only the margin of 8,400.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Trade receivables 21,000|Sales revenue 21,000|The customer owes us money → asset up = debit. The sale is earnings → credit.
Cost of goods sold 12,600|Merchandise inventory 12,600|Goods given away = expense → debit. Inventory (asset) goes down → credit.]]

[[t:Classification
Level|Amount|Why
Payment-in / payment-out|none|On account: no money moves yet
Income / expenditure|income 21,000|The receivable raises our monetary assets (cash + receivables − payables)
Earnings / expense|earnings 21,000, expense 12,600|Equity rises by the sale and falls by the goods we gave away
Revenue / cost|revenue 21,000, cost 12,600|Ordinary business → the same amounts count in cost accounting]]

**Financial vs cost accounting:** no difference here. Profit effect: 21,000 − 12,600 = **+8,400**.`},
{id:'b', pts:6, q:R`b) A trade receivable of €9,500 is collected by bank transfer. A 2% cash discount had not previously been recognised; VAT is ignored.`,
 sol:R`**What happens?** The sale happened earlier, so the 9,500 was already booked as income and earnings back then. Now the customer pays, but deducts 2% cash discount: 2% × 9,500 = **190**. So only 9,500 − 190 = **9,310** arrives.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Bank 9,310|—|Money arrives → asset up = debit
Cash discount expense 190|—|We will never get these 190 → equity falls = expense
—|Trade receivables 9,500|The whole receivable is settled, so it has to disappear completely]]

[[t:Classification
Level|Amount|Why
Payment-in|9,310|Money really arrives in the bank
Income|none (new)|The receivable just turns into money (asset exchange); it was counted as income at the time of the sale
Earnings / expense|expense 190|Only the discount reduces equity
Revenue / cost|cost 190|Discounts belong to ordinary business]]

**Traps:** do not book 9,310 as revenue again (that would count the sale twice), and do not leave 190 standing in receivables.`},
{id:'c', pts:6, q:R`c) A machine is acquired for €48,000 and paid immediately. It is ready for use on 1 October 20X1, useful life six years, no residual value.`,
 sol:R`**Two steps.** (1) Buying: we only swap money for a machine, so equity does not change. (2) Using it: the machine wears out, and depreciation spreads its cost over the 6 years of use.

**Depreciation 20X1:** 48,000 / 6 = 8,000 per year. It is ready for use on 1 October, so it is used for October to December = **3 months**. 8,000 × 3/12 = **2,000**. Rule: depreciate pro rata from the month the asset is ready for use, not from the day you pay.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Machinery 48,000|Bank 48,000|New asset up, bank down: an asset exchange, no expense yet
Depreciation expense 2,000|Accumulated depreciation / Machinery 2,000|Wear and tear for 3 months reduces the machine's value → expense]]

[[t:Classification
Level|Amount|Why
Payment-out|48,000|Paid immediately
Expenditure|48,000|Monetary assets fall
Expense|0 at purchase, 2,000 depreciation|The purchase itself does not reduce equity; only the wear and tear does
Cost|2,000|Depreciation of an operating machine is a cost]]

**Financial vs cost accounting:** here they are the same. Cost accounting **may** use different (imputed) depreciation: based on replacement cost, a different useful life or a different method. Then the cost differs from the expense.`},
{id:'d', pts:6, q:R`d) A flood destroys non-insured office furniture with a carrying amount of €6,000. The event is outside ordinary operations.`,
 sol:R`**What happens?** No money moves, but an asset is simply gone. When an asset disappears without anything in return, equity falls → **expense** of 6,000.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Neutral expense 6,000|Office furniture 6,000|The loss reduces equity → expense on the debit side. The furniture is gone → asset down = credit]]

[[t:Classification
Level|Amount|Why
Payment / income / expenditure|none|No money and no receivables or payables are involved
Expense|6,000|Equity falls
Cost|none|A flood is extraordinary and not part of normal operations]]

**Financial vs cost accounting:** this is the classic **neutral expense**: expense yes, cost no. If cost accounting included it, a one-off disaster would make the product prices look too high.`},
{id:'e', pts:6, q:R`e) A sole proprietor uses privately owned premises for the business. Appropriate imputed rent is €14,400 per year. **Additional question:** the entrepreneur would also like to account for the general entrepreneurial risk as an imputed cost. Is this permissible?`,
 sol:R`**What happens?** The owner uses their own building for the business, so no rent is paid. In financial accounting **nothing happens**: no payment, no expense. A sole proprietor cannot pay rent to themself. → **no journal entry**.

**Why cost accounting still counts 14,400:** a competitor who rents a building has rent costs. To compare fairly and calculate correct prices, cost accounting adds what the building would cost on the market. This is an **additional cost** (Zusatzkosten) = **cost without expense**.

[[t:Classification
Level|Amount
Payment / income / expenditure / expense|none
Cost|14,400 (imputed rent, additional cost)]]

**Additional question: No.** The general entrepreneurial risk (that the whole business might fail) is exactly what the entrepreneur is paid for through **profit**. Making it a cost would count the reward twice. Only **specific, measurable operating risks** may be imputed as risk costs (Wagniskosten), based on experience: fire, bad debts, warranty claims.

[[t:Overview of Task 1
Case|Payment|Income/Expenditure|Expense|Cost
a) Sale on account|—|income 21,000|12,600|12,600 (revenue 21,000)
b) Collection with discount|in 9,310|— (asset exchange)|190|190
c) Machine + depreciation|out 48,000|expenditure 48,000|2,000|2,000
d) Flood|—|—|6,000 (neutral)|—
e) Imputed rent|—|—|—|14,400]]`}
]},

{n:2, pts:15, topic:'bk-6', title:'VAT with cash discount and settlement',
intro:R`A taxable trader purchases merchandise on account for net €25,000 plus 19% VAT. The supplier offers a 2% cash discount if payment is made within ten days. The trader pays within that period. Later, one half of the merchandise is sold on account for net €18,000 plus 19% VAT.`,
tasks:[
{id:'a', pts:15, q:R`Prepare all journal entries, including the VAT settlement and payment to the tax authority.`,
 sol:R`**Step 1 – Purchase.** Net 25,000 + 19% VAT 4,750 = gross 29,750. Input VAT is **not** part of the cost of the goods: it is a claim against the tax office, because we get it back.

**Step 2 – Payment with discount.** The discount is taken on the **gross** amount: 2% × 29,750 = **595**, so we pay 29,750 − 595 = **29,155**. The 595 contains VAT, so we split it: 595 / 1.19 = **500 net** + **95 VAT**.
- 500 :: the goods got cheaper → their acquisition cost falls (credit Merchandise)
- 95 :: because the price fell, we can reclaim less VAT → input VAT falls (credit Input VAT)
- Check :: 29,155 + 500 + 95 = 29,750 ✓

**Step 3 – Sale.** Net 18,000 + 19% = 3,420 output VAT = 21,420 gross. The output VAT is a **debt** to the tax office: we collected it for them.

**Step 4 – Settlement.** Offset the two VAT accounts:
- Input VAT :: 4,750 − 95 = **4,655** (what the tax office owes us)
- Output VAT :: **3,420** (what we owe the tax office)
- Difference :: 4,655 − 3,420 = **1,235 in our favour** → the tax office pays us back. There is **no** payment to the tax office.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Merchandise 25,000; Input VAT 4,750|Trade payables 29,750|Goods + VAT claim up; we owe the supplier the gross amount
Trade payables 29,750|Bank 29,155; Merchandise 500; Input VAT 95|The debt is fully settled; we pay less, and the goods and the VAT claim become cheaper
Trade receivables 21,420|Sales revenue 18,000; Output VAT 3,420|The customer owes the gross amount; only the net is our earnings
Output VAT 3,420|Input VAT 3,420|Offset: the smaller account is cleared against the bigger one
Input VAT receivable / Closing balance 1,235|Input VAT 1,235|The remaining 1,235 is a refund claim against the tax office]]

**Memory rule:** output VAT > input VAT → pay the difference. Input VAT > output VAT → refund claim. **Trap:** the task says "payment to the tax authority", but with these numbers there is none.

Not asked by Cloer, but complete: the half that was sold leaves inventory at cost: Cost of goods sold 12,250 / Merchandise 12,250 (half of 25,000 − 500 = 24,500).`}
]},

{n:3, pts:15, topic:'bk-9', title:'Separate merchandise accounts and returns',
intro:R`Opening inventory €34,000. Purchases on account €126,000. Purchase returns at acquisition cost €6,000. Sales on account €205,000. Goods returned by customers reduce sales by €10,000 and have a carrying amount of €6,500. Closing physical inventory €42,500. VAT is ignored.`,
tasks:[
{id:'a', pts:15, q:R`Calculate net sales, cost of goods sold and gross profit; prepare the relevant journal entries and closing entries.`,
 sol:R`**Idea of separate merchandise accounts:** one account for the goods at **cost** (Merchandise inventory), one for sales at **selling price** (Merchandise sales), and a correction account for customer returns (Sales returns). That way you can still see the gross figures.

**Step 1 – Purchases and purchase returns.** Buy 126,000 on account, then send 6,000 back: we owe less and the goods are gone, so reverse the purchase for that part.

**Step 2 – Sales.** 205,000 at selling price: Trade receivables / Merchandise sales.

**Step 3 – Customer returns: two effects.**
- At selling price, 10,000 :: part of the sale is cancelled and the customer owes less → Sales returns / Trade receivables. Use a separate account so the returns stay visible
- At cost, 6,500 :: the goods are back in our warehouse → Merchandise inventory / Cost of goods sold

**Step 4 – Cost of goods sold from the stocktaking.**
- Available :: opening 34,000 + purchases 126,000 − returns 6,000 = **154,000**
- Still there at year-end :: 42,500 (counted)
- Went out :: 154,000 − 42,500 = **111,500**
- Minus what came back :: 111,500 − 6,500 = **105,000** = final cost of goods sold

**Step 5 – Closing.** COGS 105,000 goes to the P&L debit side. Sales 205,000 minus returns 10,000 = 195,000 goes to the P&L credit side.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Merchandise inventory 126,000|Trade payables 126,000|Goods in, debt up
Trade payables 6,000|Merchandise inventory 6,000|Goods sent back, debt down
Trade receivables 205,000|Merchandise sales 205,000|Sale at selling price
Sales returns 10,000|Trade receivables 10,000|Part of the sale cancelled
Merchandise inventory 6,500|Cost of goods sold 6,500|Returned goods back in stock at cost
Cost of goods sold 111,500|Merchandise inventory 111,500|Goods consumed according to the stocktaking
P&L 105,000|Cost of goods sold 105,000|Close the expense account
Merchandise sales 205,000|Sales returns 10,000; P&L 195,000|Close sales: the returns reduce them, net sales go to the P&L]]

[[t:Result
Item|Amount
Net sales|205,000 − 10,000 = 195,000
Cost of goods sold|105,000
Gross profit|195,000 − 105,000 = 90,000]]

**Watch out:** Cloer's numbers only add up if the 42,500 was counted **before** the returned goods came back. The real closing stock is then 42,500 + 6,500 = 49,000, and the inventory account confirms it: 154,000 + 6,500 − 111,500 = 49,000. If the 42,500 already includes the returned goods, they would be counted twice: then COGS = 111,500 and gross profit = 83,500, and you skip the 6,500 entry. **In the exam write one sentence stating your assumption.**`}
]},

{n:4, pts:15, topic:'bk-13', title:'Provisions and subsequent utilisation',
intro:R`At 31 December 20X1, litigation relating to events in 20X1 is expected to result in a payment between €70,000 and €90,000. The amounts are equally probable. Legal fees of €8,000 are also expected. In 20X2 the company pays damages of €76,000 and legal fees of €7,500; no further outflow is expected.`,
tasks:[
{id:'a', pts:15, q:R`Explain recognition and prepare all entries.`,
 sol:R`**Why a provision?** It is required (§ 249 I HGB) when all three hold:
- Obligation to someone else :: the lawsuit, we will probably have to pay
- Caused in 20X1 :: the events happened in 20X1, so the expense belongs to 20X1
- Uncertain :: the exact amount is not known yet

Behind it is the **prudence/imparity principle**: expected losses must be shown in the year they are caused, even before they are certain.

**Amount.** Anything between 70,000 and 90,000 is equally likely → take the middle = **80,000** (expected value). Add the legal fees we expect anyway: **8,000**. Provision = **88,000**.

**20X2: what really happens.** We pay 76,000 + 7,500 = **83,500**. The expense was already booked in 20X1, so it must **not** be booked again. We use up the provision instead. 88,000 − 83,500 = **4,500** is left over and no longer needed → release it as **income** in 20X2 (20X1 was estimated too high).

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Litigation expense 88,000|Litigation provision 88,000|31.12.20X1: expense in the year it was caused; the provision is a debt-like item
Litigation provision 83,500|Bank 83,500|20X2: the payment uses up the provision, no new expense
Litigation provision 4,500|Income from release of provisions 4,500|The rest is not needed → back to earnings]]

**Opposite case:** if we had paid 95,000, use the full 88,000 and book the extra 7,000 as an expense of 20X2: Litigation provision 88,000 + Litigation expense 7,000 / Bank 95,000.

**Trap:** booking the 83,500 as an expense in 20X2. That would count the loss twice.`}
]},

{n:5, pts:15, topic:'bk-12', title:'Accruals and advance payments (deferrals)',
intro:R`On 1 November 20X1, the company pays €30,000 for a 15-month insurance period beginning that day and initially records the full amount as expense. On 1 October 20X1, it receives €48,000 for a 12-month maintenance contract and initially records the full amount as revenue. Electricity of €9,600 was consumed in December but will be invoiced and paid in January.`,
tasks:[
{id:'a', pts:15, q:R`Prepare year-end entries, reversals or settlement entries, and classify each item.`,
 sol:R`**Key idea (accrual principle):** an expense or a revenue belongs to the period in which the service is used or delivered, not to the period in which the money moves. Here the company first booked the full amounts, so on 31.12. we correct them.

**1. Insurance (we paid in advance).** 30,000 for 15 months = **2,000 per month**. 20X1 covers November and December = 2 months = **4,000**. The other 13 months = **26,000** belong to the future → take them out of the expense and park them as an asset: **Prepaid expenses**. Check: 30,000 − 26,000 = 4,000 expense in 20X1 ✓

**2. Maintenance (we received money in advance).** 48,000 for 12 months = **4,000 per month**. 20X1 covers October to December = 3 months = **12,000** earned. For 9 months = **36,000** we still owe the service → take it out of revenue and show it as a liability: **Deferred income**. Check: 48,000 − 36,000 = 12,000 revenue in 20X1 ✓

**3. Electricity (we pay later).** Used in December, so it is an expense of 20X1. There is no invoice yet, so nothing has been booked → add the expense and a liability now. In January we just pay the debt, with no new expense.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Prepaid expenses 26,000|Insurance expense 26,000|31.12.: 26,000 of expense belongs to the future → asset
Insurance expense 26,000|Prepaid expenses 26,000|1.1.: reversal, now it is expense of the new year
Service revenue 36,000|Deferred income 36,000|31.12.: 36,000 not yet earned → liability
Deferred income 36,000|Service revenue 36,000|1.1.: reversal, earned in the new year
Electricity expense 9,600|Accrued liability 9,600|31.12.: expense of 20X1, cash not yet paid
Accrued liability 9,600|Bank 9,600|January: pay the debt, no new expense]]

[[t:Classification
Type|Rule|Items here|Balance sheet account
Transitory|Money first, expense/revenue later|Insurance, maintenance|Prepaid expenses (asset) / Deferred income (liability)
Anticipatory|Expense/revenue first, money later|Electricity|Accrued liability (other liability), not a deferral account]]

**Memory rule:** money already moved → deferral account. Money still to come → liability or receivable. Reversing the full amount on 1 January is Cloer's simplified method. Strictly, of the 26,000 only 24,000 belongs to 20X2 and 2,000 to 20X3.`}
]},

{n:6, pts:15, topic:'bk-10', title:'Production, inventory and both P&L methods',
intro:R`A company produces 1,200 units. Direct material €36 per unit, direct labour €24 per unit, allocable production overhead €18 per unit. It sells 900 units for €125 per unit. No opening inventory.`,
tasks:[
{id:'a', pts:15, q:R`Prepare the production, inventory-transfer and sales/cost-of-sales entries using simplified accounts. Present profit under both presentation methods.`,
 sol:R`**Step 1 – Production cost per unit.** Direct material 36 + direct labour 24 + production overhead 18 = **78** (all three belong to production cost under § 255 II HGB).

**Step 2 – Where the units go.**
- Produced :: 1,200 × 78 = **93,600** → goes into finished goods
- Sold :: 900 × 78 = **70,200** → leaves as cost of goods sold
- Still in stock :: 300 × 78 = **23,400** → closing inventory (an asset, not a loss)
- Revenue :: 900 × 125 = **112,500**

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Work in progress / Finished goods 93,600|Material, wages and production overhead 93,600|The production costs become the value of the products in stock
Cost of goods sold 70,200|Finished goods 70,200|The 900 sold units leave the stock → expense
Trade receivables / Bank 112,500|Sales revenue 112,500|The sale]]

**Step 3 – Profit, two ways, same result.**
[[t:Both P&L methods
Total cost method (GKV)|Cost-of-sales method (UKV)
Revenue 112,500|Revenue 112,500
+ Increase in inventory 23,400|− Cost of goods sold 70,200
− All production expenses 93,600|
= Profit 42,300|= Profit 42,300]]

**Why does GKV add the inventory increase?** GKV deducts the costs of **all** 1,200 units, including the 300 not yet sold. Those 300 are not lost, they sit in the warehouse worth 23,400. Adding the inventory increase cancels their costs, so only the costs of the 900 sold units reduce profit, exactly like UKV.

**Memory rule:** GKV = everything **produced** (by type of expense). UKV = only what is **sold** (by function).`}
]},

{n:7, pts:15, topic:'bk-11', title:'Depreciation, disposal and journal entries',
intro:R`A machine is acquired on 1 April 20X1 for €150,000. Additional directly attributable installation costs are €12,000. Useful life six years, no residual value, straight-line depreciation. The machine is sold on 30 September 20X3 for €105,000, paid by bank transfer. VAT is ignored.`,
tasks:[
{id:'a', pts:15, q:R`Calculate and record acquisition, depreciation for each relevant year and disposal.`,
 sol:R`**Step 1 – Acquisition cost.** Price 150,000 + installation 12,000 = **162,000**. The installation is needed to make the machine usable, so it is part of the acquisition cost (§ 255 I HGB) and is **not** an expense.

**Step 2 – Annual depreciation.** 162,000 / 6 years = **27,000 per year** (= 2,250 per month).

**Step 3 – Year by year.** Count only the months the machine is actually used. In the year of sale, depreciate up to the sale date **first**.
[[t:Depreciation plan
Year|Months used|Depreciation|Book value at the end
20X1|April–December = 9|27,000 × 9/12 = 20,250|141,750
20X2|full year = 12|27,000|114,750
20X3|January–September = 9|27,000 × 9/12 = 20,250|94,500 (at the sale)]]
Accumulated depreciation: 20,250 + 27,000 + 20,250 = **67,500**.

**Step 4 – Sale.** We get 105,000 for something whose book value is 94,500 → **gain of 10,500**. In the entry, remove the machine at full cost (162,000) together with its accumulated depreciation (67,500), so 94,500 net goes out. The bank receives 105,000 and the difference is the gain.

[[t:Entries — and why
Debit / Soll|Credit / Haben|Why
Machinery 162,000|Bank / Payables 162,000|Acquisition incl. installation
Depreciation expense 20,250|Accumulated depreciation 20,250|20X1, 9 months
Depreciation expense 27,000|Accumulated depreciation 27,000|20X2, full year
Depreciation expense 20,250|Accumulated depreciation 20,250|20X3 up to the sale
Bank 105,000; Accumulated depreciation 67,500|Machinery 162,000; Gain on disposal 10,500|Machine and its depreciation leave the books, money in, gain = the difference]]
Check: debit 105,000 + 67,500 = 172,500 = credit 162,000 + 10,500 ✓

**Note:** Cloer uses a separate "Accumulated depreciation" account (indirect method). If you credit Machinery directly, as in the lecture, the sale is simply Bank 105,000 / Machinery 94,500 + Gain on disposal 10,500. Same result. **If the price had been below 94,500**, the difference would be a loss on disposal on the **debit** side.`}
]},

{n:8, pts:7.5, topic:'bk-2', title:'German banking system',
intro:R`Theory task (7.5 points).`,
tasks:[
{id:'a', pts:1.5, q:R`a) Describe the structural model of the German banking sector and identify its three pillars. (1.5)`,
 sol:R`Germany has a **universal banking system** (most banks offer all services) organised in **three pillars** by ownership:
- Private commercial banks :: owned by shareholders, profit-oriented (e.g. Deutsche Bank, Commerzbank)
- Public-law banks :: owned by municipalities/federal states, serve the public interest (Sparkassen, Landesbanken)
- Cooperative banks :: owned by their members (Volksbanken, Raiffeisenbanken)`},
{id:'b', pts:1.5, q:R`b) Distinguish three core categories of banking transactions and give one example for each. (1.5)`,
 sol:R`- Payment transactions :: moving money, e.g. bank transfers, current accounts, card payments
- Investment / deposit business :: keeping and investing money, e.g. savings accounts, securities custody
- Credit / financing business :: lending money, e.g. a company loan or a mortgage`},
{id:'c', pts:2, q:R`c) Explain the defining purpose and governance idea of a cooperative. (2.0)`,
 sol:R`- Purpose :: a cooperative exists to **promote its members** (support principle). The members are owners **and** customers at the same time (identity principle), e.g. farmers who buy seed together. The goal is the members' benefit, not a return for investors
- Governance :: **democratic**: generally **one member = one vote**, no matter how much capital they hold (democracy principle), plus self-help, self-governance and self-responsibility`},
{id:'d', pts:2.5, q:R`d) Identify the German major bank currently targeted by UniCredit's acquisition strategy and describe the situation precisely. (2.5)`,
 sol:R`- Bank :: **Commerzbank AG**
- Situation :: UniCredit (Italy) has built up a **substantial stake** and is pursuing a possible combination/takeover
- Precisely :: it is **not** a completed full takeover. The German federal government, itself a shareholder, has opposed it

For 2.5 points: name the bank, say "stake + possible takeover", and say "not completed".`}
]},

{n:9, pts:7.5, topic:'bk-5', title:'Choice of legal form and merchant status',
intro:R`Theory task (7.5 points).`,
tasks:[
{id:'a', pts:1, q:R`a) Explain two material disadvantages of operating a risk-bearing, growing business as a sole proprietorship. (1.0)`,
 sol:R`Any two, each with one reason:
- Unlimited personal liability :: the owner pays business debts with their **private** assets as well, which is dangerous for a risky, growing business
- No separation of private and business assets :: no protective "wall" between them
- Financing limits :: only one person's capital and credit standing, so it is hard to bring in investors
- Succession risk :: the business depends on one person (illness, death)`},
{id:'b', pts:2.75, q:R`b) Set out the three basic categories of legal form and name the principal forms belonging to the partnership category and to the capital company category. (2.75)`,
 sol:R`- Three categories :: **sole proprietorship**, **partnership**, **capital company (corporation)**
- Partnerships :: civil-law partnership (GbR), general partnership (OHG), limited partnership (KG)
- Capital companies :: entrepreneurial company (UG, "mini-GmbH"), private limited company (GmbH), public limited company / stock corporation (AG), partnership limited by shares (KGaA), European company (SE)

Difference: in a partnership at least one partner is personally liable; a capital company is a legal person, and liability is limited to the company's assets.`},
{id:'c', pts:0.75, q:R`c) Name three additional organisational forms that are legal persons (corporations). (0.75)`,
 sol:R`Registered association (**e.V.**), foundation (**Stiftung**), registered cooperative (**eG**). They are legal persons, like the GmbH and the AG, but they are not capital companies.`},
{id:'d', pts:3, q:R`d) Explain the principal routes by which merchant status arises under the HGB and the main bookkeeping consequence, including one relevant exception. (3.0)`,
 sol:R`**Three routes to merchant status:**
- By operating a commercial business (§ 1 HGB) :: automatically, if the business needs a commercially organised operation (size, turnover, employees)
- By registration (§§ 2, 3, 5 HGB) :: a small business or a farmer becomes a merchant by entering the commercial register voluntarily
- By legal form (§ 6 HGB) :: GmbH, AG, eG etc. are always merchants, whatever their size

**Bookkeeping consequence:** every merchant must keep books (**§ 238 HGB**), take an inventory (§ 240) and prepare annual financial statements (§ 242).

**Exception** (Cloer's key does not name one; best answer): small sole merchants with at most **€800,000 revenue and €80,000 profit** in two consecutive years are exempt (§ 241a HGB). This does not apply to corporations. Also: a small trader who is not a merchant and not registered does not need commercial books.`}
]}
];

// Mock booking entries for the Booking Entry Trainer (account names as in Cloer's key)
BK_ACCOUNTS.push('Merchandise inventory','Merchandise sales','Sales returns','Cash discount expense','Accumulated depreciation','Office furniture','Neutral expense','Output VAT','Input VAT','Input VAT receivable','Litigation expense','Litigation provision','Income from release of provisions','Accrued liability');
// Synonyms: the mock uses other names than the slides for the same account — the trainer accepts either.
const BK_ACC_ALIAS = [['Input tax','Input VAT'],['VAT','Output VAT'],['Merchandise','Merchandise inventory','Trading goods inventory'],['Depreciation','Depreciation expense'],['Provision','Litigation provision'],['Accrued liability','Accrued liability for electricity'],['Input VAT receivable','Receivable from tax office']];
function bkAccEq(a, b){ if(a===b) return true; return BK_ACC_ALIAS.some(g=>g.includes(a) && g.includes(b)); }
BK_TRAIN.push(
{id:'mk-1', topic:'bk-9', src:'Mock', text:'Merchandise with a carrying amount of 12,600€ is sold on account for 21,000€ (no VAT, gross principle). Both entries.', lines:[['D','Trade receivables','21,000'],['C','Sales revenue','21,000'],['D','Cost of goods sold','12,600'],['C','Merchandise inventory','12,600']]},
{id:'mk-2', topic:'bk-8', src:'Mock', text:'A trade receivable of 9,500€ is collected by bank transfer after the customer deducted 2% cash discount (no VAT).', lines:[['D','Bank','9,310'],['D','Cash discount expense','190'],['C','Trade receivables','9,500']]},
{id:'mk-3', topic:'bk-11', src:'Mock', text:'Machine bought for 48,000€ (paid), ready for use 1 October, useful life 6 years: depreciation at 31.12.', lines:[['D','Depreciation','2,000'],['C','Accumulated depreciation','2,000']]},
{id:'mk-4', topic:'bk-1', src:'Mock', text:'A flood destroys uninsured office furniture with a carrying amount of 6,000€ (outside ordinary operations).', lines:[['D','Neutral expense','6,000'],['C','Office furniture','6,000']]},
{id:'mk-5', topic:'bk-6', src:'Mock', text:'Merchandise bought on account: 25,000€ net + 19% VAT.', lines:[['D','Merchandise','25,000'],['D','Input VAT','4,750'],['C','Trade payables','29,750']]},
{id:'mk-6', topic:'bk-6', src:'Mock', text:'The 29,750€ invoice (25,000 net + 19% VAT) is paid within ten days with 2% cash discount.', lines:[['D','Trade payables','29,750'],['C','Bank','29,155'],['C','Merchandise','500'],['C','Input VAT','95']]},
{id:'mk-7', topic:'bk-6', src:'Mock', text:'VAT settlement: output VAT 3,420€, input VAT 4,655€. Offset and close the remaining balance.', lines:[['D','Output VAT','3,420'],['C','Input VAT','3,420'],['D','Input VAT receivable','1,235'],['C','Input VAT','1,235']]},
{id:'mk-8', topic:'bk-9', src:'Mock', text:'Customers return goods: sales reduced by 10,000€ (separate accounts); the goods (carrying amount 6,500€) go back into inventory.', lines:[['D','Sales returns','10,000'],['C','Trade receivables','10,000'],['D','Merchandise inventory','6,500'],['C','Cost of goods sold','6,500']]},
{id:'mk-9', topic:'bk-9', src:'Mock', text:'Closing: merchandise sales 205,000€, sales returns 10,000€. Close both accounts.', lines:[['D','Merchandise sales','205,000'],['C','Sales returns','10,000'],['C','P&L','195,000']]},
{id:'mk-10', topic:'bk-13', src:'Mock', text:'31.12.: litigation expected to cost 70,000–90,000€ (equally probable) plus 8,000€ legal fees.', lines:[['D','Litigation expense','88,000'],['C','Litigation provision','88,000']]},
{id:'mk-11', topic:'bk-13', src:'Mock', text:'Next year 83,500€ is paid in total for the litigation (provision 88,000€); nothing more is expected.', lines:[['D','Litigation provision','83,500'],['C','Bank','83,500'],['D','Litigation provision','4,500'],['C','Income from release of provisions','4,500']]},
{id:'mk-12', topic:'bk-12', src:'Mock', text:'1 Nov: 30,000€ paid for 15 months of insurance, fully booked as expense. Year-end entry.', lines:[['D','Prepaid expenses','26,000'],['C','Insurance expense','26,000']]},
{id:'mk-13', topic:'bk-12', src:'Mock', text:'1 Oct: 48,000€ received for a 12-month maintenance contract, fully booked as revenue. Year-end entry.', lines:[['D','Service revenue','36,000'],['C','Deferred income','36,000']]},
{id:'mk-14', topic:'bk-12', src:'Mock', text:'Electricity of 9,600€ consumed in December, invoiced and paid in January. Entry at 31.12.', lines:[['D','Electricity expense','9,600'],['C','Accrued liability','9,600']]},
{id:'mk-15', topic:'bk-10', src:'Mock', text:'900 of 1,200 produced units (production cost 78€ each) are sold: cost-of-sales entry.', lines:[['D','Cost of goods sold','70,200'],['C','Finished goods','70,200']]},
{id:'mk-16', topic:'bk-11', src:'Mock', text:'Machine (cost 162,000€, accumulated depreciation 67,500€) is sold for 105,000€ by bank transfer.', lines:[['D','Bank','105,000'],['D','Accumulated depreciation','67,500'],['C','Machinery','162,000'],['C','Gain on disposal','10,500']]}
);
