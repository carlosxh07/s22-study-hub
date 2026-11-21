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
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Trade receivables 21,000|Sales revenue 21,000
Cost of goods sold 12,600|Merchandise inventory 12,600]]
Income and earnings (performance) €21,000; expense and cost €12,600; **no cash movement** (sold on account). Gross principle: revenue and COGS are booked separately.`},
{id:'b', pts:6, q:R`b) A trade receivable of €9,500 is collected by bank transfer. A 2% cash discount had not previously been recognised; VAT is ignored.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Bank 9,310; Cash discount expense 190|Trade receivables 9,500]]
Cash inflow €9,310. The collection itself is **not** new income or earnings (asset exchange: receivable → bank). Only the discount of €190 (2% × 9,500) is an expense.`},
{id:'c', pts:6, q:R`c) A machine is acquired for €48,000 and paid immediately. It is ready for use on 1 October 20X1, useful life six years, no residual value.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Machinery 48,000|Bank 48,000
Depreciation expense 2,000|Accumulated depreciation / Machinery 2,000]]
Cash outflow and expenditure €48,000 (no expense at purchase). Depreciation 20X1 = 48,000 / 6 × 3/12 = **€2,000** (pro rata from the month it is ready for use) = expense and cost.`},
{id:'d', pts:6, q:R`d) A flood destroys non-insured office furniture with a carrying amount of €6,000. The event is outside ordinary operations.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Extraordinary / neutral expense 6,000|Office furniture 6,000]]
**Neutral expense** €6,000 (extraordinary, outside operations) → expense but **no cost**; no cash movement.`},
{id:'e', pts:6, q:R`e) A sole proprietor uses privately owned premises for the business. Appropriate imputed rent is €14,400 per year. **Additional question:** the entrepreneur would also like to account for the general entrepreneurial risk as an imputed cost. Is this permissible?`,
 sol:R`**No journal entry.** Imputed rent is a **cost of €14,400 without expense** (additional cost): the owner cannot contract with himself, so financial accounting records nothing; only cost accounting includes it.

**Additional question: No.** General entrepreneurial risk must not be recognised as an imputed cost. Only **specific operating risks** (e.g. fire, bad debts, warranty) may be included as imputed risk costs. The general entrepreneurial risk is compensated by the **entrepreneur's profit**.`}
]},

{n:2, pts:15, topic:'bk-6', title:'VAT with cash discount and settlement',
intro:R`A taxable trader purchases merchandise on account for net €25,000 plus 19% VAT. The supplier offers a 2% cash discount if payment is made within ten days. The trader pays within that period. Later, one half of the merchandise is sold on account for net €18,000 plus 19% VAT.`,
tasks:[
{id:'a', pts:15, q:R`Prepare all journal entries, including the VAT settlement and payment to the tax authority.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Merchandise 25,000; Input VAT 4,750|Trade payables 29,750
Trade payables 29,750|Bank 29,155; Merchandise 500; Input VAT 95
Trade receivables 21,420|Sales revenue 18,000; Output VAT 3,420
Output VAT 3,420|Input VAT 3,420
Input VAT receivable / Closing balance 1,235|Input VAT 1,235]]
- Discount :: 2% × 29,750 gross = 595 = 500 net (reduces the acquisition cost of the merchandise) + 95 VAT (input VAT correction)
- Input VAT after discount :: 4,750 − 95 = **4,655**
- Output VAT :: 19% × 18,000 = **3,420**
- Settlement :: 3,420 − 4,655 = −1,235 → an **input VAT receivable of €1,235**, no payment to the tax office (trap: the task says "payment" but there is none)

Equivalent closing-account entries are accepted.`}
]},

{n:3, pts:15, topic:'bk-9', title:'Separate merchandise accounts and returns',
intro:R`Opening inventory €34,000. Purchases on account €126,000. Purchase returns at acquisition cost €6,000. Sales on account €205,000. Goods returned by customers reduce sales by €10,000 and have a carrying amount of €6,500. Closing physical inventory €42,500. VAT is ignored.`,
tasks:[
{id:'a', pts:15, q:R`Calculate net sales, cost of goods sold and gross profit; prepare the relevant journal entries and closing entries.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Merchandise inventory 126,000|Trade payables 126,000
Trade payables 6,000|Merchandise inventory 6,000
Trade receivables 205,000|Merchandise sales 205,000
Sales returns 10,000|Trade receivables 10,000
Merchandise inventory 6,500|Cost of goods sold 6,500
Cost of goods sold 111,500|Merchandise inventory 111,500
P&L 105,000|Cost of goods sold 105,000
Merchandise sales 205,000|Sales returns 10,000; P&L 195,000]]
- Available inventory :: 34,000 + 126,000 − 6,000 = 154,000
- COGS before customer return :: 154,000 − 42,500 = 111,500
- Customer return :: the goods (6,500) re-enter inventory → final **COGS = 105,000**
- Net sales :: 205,000 − 10,000 = **195,000**
- Gross profit :: 195,000 − 105,000 = **90,000**

**Watch out (my check):** Cloer's key only works if the counted 42,500 does **not** yet include the returned goods. If the stocktaking already includes them, COGS would be 154,000 − 42,500 = 111,500 and gross profit 83,500 (the 6,500 would otherwise be counted twice). In the exam write one sentence stating your assumption.`}
]},

{n:4, pts:15, topic:'bk-13', title:'Provisions and subsequent utilisation',
intro:R`At 31 December 20X1, litigation relating to events in 20X1 is expected to result in a payment between €70,000 and €90,000. The amounts are equally probable. Legal fees of €8,000 are also expected. In 20X2 the company pays damages of €76,000 and legal fees of €7,500; no further outflow is expected.`,
tasks:[
{id:'a', pts:15, q:R`Explain recognition and prepare all entries.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Litigation expense 88,000|Litigation provision 88,000
Litigation provision 83,500|Bank 83,500
Litigation provision 4,500|Income from release of provisions 4,500]]
- Recognition :: the obligation is **economically caused in 20X1** but uncertain in amount/timing → provision for uncertain liabilities is **required** (§ 249 I HGB)
- Amount :: equally probable 70,000–90,000 → expected value **80,000** + expected legal fees 8,000 = **88,000**
- 20X2 :: paid 76,000 + 7,500 = 83,500 → use the provision; the rest (4,500) is released as **income** (the provision was too high)
- If payments had been higher than the provision :: the difference is an expense of 20X2`}
]},

{n:5, pts:15, topic:'bk-12', title:'Accruals and advance payments (deferrals)',
intro:R`On 1 November 20X1, the company pays €30,000 for a 15-month insurance period beginning that day and initially records the full amount as expense. On 1 October 20X1, it receives €48,000 for a 12-month maintenance contract and initially records the full amount as revenue. Electricity of €9,600 was consumed in December but will be invoiced and paid in January.`,
tasks:[
{id:'a', pts:15, q:R`Prepare year-end entries, reversals or settlement entries, and classify each item.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Prepaid expenses 26,000|Insurance expense 26,000
Insurance expense 26,000|Prepaid expenses 26,000
Service revenue 36,000|Deferred income 36,000
Deferred income 36,000|Service revenue 36,000
Electricity expense 9,600|Accrued liability 9,600
Accrued liability 9,600|Bank 9,600]]
- Insurance :: 30,000 / 15 = 2,000 per month; 20X1 = 2 months = **4,000** expense; 13 months = **26,000** prepaid (reversed 1 January)
- Maintenance :: 48,000 / 12 = 4,000 per month; 20X1 = 3 months = **12,000** revenue; 9 months = **36,000** deferred income
- Electricity :: expense 20X1, cash 20X2 → **accrued liability** 9,600, settled by bank in January
- Classification :: insurance and maintenance are **transitory** (cash first, deferral = prepaid expenses / deferred income); electricity is **anticipatory** (expense first, cash later = accrual)

Full reversal on 1 January is accepted as the simplified teaching method.`}
]},

{n:6, pts:15, topic:'bk-10', title:'Production, inventory and both P&L methods',
intro:R`A company produces 1,200 units. Direct material €36 per unit, direct labour €24 per unit, allocable production overhead €18 per unit. It sells 900 units for €125 per unit. No opening inventory.`,
tasks:[
{id:'a', pts:15, q:R`Prepare the production, inventory-transfer and sales/cost-of-sales entries using simplified accounts. Present profit under both presentation methods.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Work in progress / Finished goods 93,600|Material, wages and production overhead 93,600
Cost of goods sold 70,200|Finished goods 70,200
Trade receivables / Bank 112,500|Sales revenue 112,500]]
- Production cost per unit :: 36 + 24 + 18 = **78**; total 1,200 × 78 = 93,600
- Closing inventory :: 300 × 78 = **23,400**; COGS 900 × 78 = 70,200
- Total cost method (GKV) :: revenue 112,500 + inventory increase 23,400 − production expenses 93,600 = **42,300**
- Cost-of-sales method (UKV) :: revenue 112,500 − COGS 70,200 = **42,300**

Both methods always give the same profit; GKV shows all period expenses plus the change in inventory, UKV only the cost of the units sold.`}
]},

{n:7, pts:15, topic:'bk-11', title:'Depreciation, disposal and journal entries',
intro:R`A machine is acquired on 1 April 20X1 for €150,000. Additional directly attributable installation costs are €12,000. Useful life six years, no residual value, straight-line depreciation. The machine is sold on 30 September 20X3 for €105,000, paid by bank transfer. VAT is ignored.`,
tasks:[
{id:'a', pts:15, q:R`Calculate and record acquisition, depreciation for each relevant year and disposal.`,
 sol:R`[[t:Entries
Debit / Soll|Credit / Haben
Machinery 162,000|Bank / Payables 162,000
Depreciation expense 20,250|Accumulated depreciation 20,250
Depreciation expense 27,000|Accumulated depreciation 27,000
Depreciation expense 20,250|Accumulated depreciation 20,250
Bank 105,000; Accumulated depreciation 67,500|Machinery 162,000; Gain on disposal 10,500]]
- Acquisition cost :: 150,000 + 12,000 installation (directly attributable, § 255 I) = **162,000**
- Annual depreciation :: 162,000 / 6 = **27,000**
- 20X1 :: April–December = 9/12 → 20,250
- 20X2 :: full year → 27,000
- 20X3 :: January–September = 9/12 → 20,250
- Carrying amount at disposal :: 162,000 − 67,500 = **94,500**
- Gain :: 105,000 − 94,500 = **10,500** (a price below 94,500 would be a loss on disposal on the debit side)`}
]},

{n:8, pts:7.5, topic:'bk-2', title:'German banking system',
intro:R`Theory task (7.5 points).`,
tasks:[
{id:'a', pts:1.5, q:R`a) Describe the structural model of the German banking sector and identify its three pillars. (1.5)`,
 sol:R`**Three-pillar model:** (1) private commercial banks, (2) public-law banks (savings banks / Sparkassen, Landesbanken), (3) cooperative banks (Volksbanken, Raiffeisenbanken).`},
{id:'b', pts:1.5, q:R`b) Distinguish three core categories of banking transactions and give one example for each. (1.5)`,
 sol:R`- Payment transactions :: transfers, current accounts
- Investment / deposit or securities business :: savings deposits, securities custody
- Credit / financing business :: loans to companies, mortgages`},
{id:'c', pts:2, q:R`c) Explain the defining purpose and governance idea of a cooperative. (2.0)`,
 sol:R`A cooperative is **member-owned** and primarily **promotes its members** through joint business operations (support principle, owners = users), not investor returns. Governance: **democratic member participation**, generally one member = one vote, regardless of capital.`},
{id:'d', pts:2.5, q:R`d) Identify the German major bank currently targeted by UniCredit's acquisition strategy and describe the situation precisely. (2.5)`,
 sol:R`**Commerzbank AG.** UniCredit has accumulated a **substantial stake** and is pursuing a potential combination/takeover; it is **not a completed full purchase**. "Precisely" = name the bank, say it is a stake-building/potential takeover, and that it is not completed.`}
]},

{n:9, pts:7.5, topic:'bk-5', title:'Choice of legal form and merchant status',
intro:R`Theory task (7.5 points).`,
tasks:[
{id:'a', pts:1, q:R`a) Explain two material disadvantages of operating a risk-bearing, growing business as a sole proprietorship. (1.0)`,
 sol:R`Any two: **unlimited personal liability**, no separation of private and business assets, financing constraints (only one owner's capital and credit standing), succession risk.`},
{id:'b', pts:2.75, q:R`b) Set out the three basic categories of legal form and name the principal forms belonging to the partnership category and to the capital company category. (2.75)`,
 sol:R`- Categories :: sole proprietorship, partnership, capital company
- Partnerships :: civil-law partnership (GbR), general partnership (OHG), limited partnership (KG)
- Capital companies :: entrepreneurial company (UG), private limited company (GmbH), public limited company / joint stock corporation (AG), partnership limited by shares (KGaA), SE`},
{id:'c', pts:0.75, q:R`c) Name three additional organisational forms that are legal persons (corporations). (0.75)`,
 sol:R`Registered association (e.V.), foundation (Stiftung), registered cooperative (eG).`},
{id:'d', pts:3, q:R`d) Explain the principal routes by which merchant status arises under the HGB and the main bookkeeping consequence, including one relevant exception. (3.0)`,
 sol:R`- Routes :: by **operating a commercial business** (§ 1 HGB), by **registration** in the commercial register (§§ 2, 3, 5 HGB), by **legal form** (§ 6 HGB: corporations, eG)
- Consequence :: Commercial Code duties, especially **bookkeeping under § 238 HGB** (plus inventory § 240 and annual financial statements § 242)
- Exception (Cloer's key leaves it open; best candidates) :: small sole merchants below **€800,000 revenue and €80,000 profit** in two consecutive years are exempt (§ 241a HGB, not for corporations); a small trader without a commercial business needs no books unless registered`}
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
