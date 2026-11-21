/* ============================================================ BOOKKEEPING — EXAM FOCUS (Prof. Cloer's exam hints, lectures 02.11. + 03.11.2026) ============================================================ */
// Same schema as BK_CLASS (n, topic, title, intro, tasks[id,q,sol]) + tier (must|likely|core|new) + date.
// Filtered from the lecture transcripts: what Cloer said is "in the exam", what he quizzed students on, what he repeated.
const BK_EXAM_TIERS = {
  must:   {label:'Said: "in the exam"', color:'var(--bad)'},
  likely: {label:'Quizzed in class', color:'var(--warn, #e8890c)'},
  core:   {label:'Deferrals & payments on account', color:'#3b82f6'},
  new:    {label:'Provisions (new, killer question)', color:'var(--good)'}
};
const BK_EXAM_STYLE = R`**How Cloer will probably ask**
- **Short definitions:** one sentence, best case one keyword ("Sie schreiben nur einen Satz hin, best case ein Stichwort"). Write legibly.
- **Booking entries in English** (Debit … / Credit …): "Das darf nie schiefgehen in der Klausur." Account names are given in the exam.
- **"Why?" questions:** the answer is usually a principle (prudence, imparity, completeness, accrual).
- **Number cases:** garden gnomes (Germania GmbH), washing machine, rent December–May, pension, litigation.
- The level goes up, but he gives more help than before (and grades generously).
- **Mock exam 21.11.:** 135 min / 135 P, open response, 7 number cases + 2 theory tasks (banking, legal form). Practise it on the Mock Exam page and in Number Drills → "Mock exam mix".`;

const BK_EXAM = [
{n:1, tier:'must', date:'03.11.', topic:'bk-1', title:'One-word questions: pagatoric, completeness, uno actu',
intro:R`- Pagatoric (pagatorisch) :: external accounting is based on payments: every booking can be traced back to a payment transaction. Cloer: "Ich will nur ein Wort hören. Frag ich Sie in der Klausur ab."
- Principle of completeness :: all business transactions must be recorded, because the purpose of bookkeeping is documentation
- Uno actu :: with a service, production and consumption happen at the same time (hairdresser). "Frage ich Sie nämlich in der Klausur."
- Internal accounting :: cost accounting (KLR) removes certain items (neutral expenses), so it is not purely pagatoric`,
tasks:[
{id:'a', q:R`a) On which principle is external (commercial-law) accounting based? One word.`, sol:R`**Pagatoric** (pagatorisch): every booking goes back to a payment transaction.`},
{id:'b', q:R`b) Why do you record every single business transaction in external accounting?`, sol:R`**Principle of completeness**: bookkeeping has to fulfil its documentation function.`},
{id:'c', q:R`c) What is special about a service compared with a product?`, sol:R`**Uno actu**: provision and consumption of a service coincide (it cannot be stored).`}
]},

{n:2, tier:'must', date:'02.11. + 03.11.', topic:'bk-10', title:'GKV vs UKV: same result, high or low profit, inventory increase',
intro:R`- Same result :: GKV (total cost method) and UKV (cost of sales method) **always** lead to the same net income. Only the procedure differs
- Exam checklist :: ① do we want a **high or low profit**? ② is there an **inventory increase or decrease**?
- Main exam :: inventory **increase**. Inventory decrease only in the resit
- High profit :: capitalize as much as possible: options in **§ 255 (2) sentences 3 and 4 HGB** → higher production costs → higher inventory → higher profit. "To capitalize an expense" = aktivieren
- Low profit :: capitalize only the minimum (e.g. as managing director you don't want shareholder "Dieter" to get a big dividend)

**Garden gnomes:** 10,000 produced, 8,000 sold, 2,000 left in stock.

**GKV** (book expenses as usual, then add the inventory increase on the credit side of the P&L):
- Dr Finished goods / Cr Change in inventory
- Dr Change in inventory / Cr P&L
- At year end: Dr CBSA / Cr Finished goods

**UKV** (no expense at first, asset swap into finished goods):
- Production: Dr Finished goods / Cr (raw materials, bank …)
- For the 8,000 sold: Dr Production expenses (cost of sales) / Cr Finished goods
- Closing: Dr P&L / Cr Production expenses
- Remaining 2,000: Dr CBSA / Cr Finished goods`,
tasks:[
{id:'a', q:R`a) Do GKV and UKV lead to the same net income? Explain in two sentences how their approach differs.`, sol:R`Yes, always the same net income. GKV groups expenses **by type** and shows the costs of everything produced, so it adds the **change in inventory**; UKV groups expenses **by function** and only shows the cost of the goods **actually sold**, so no inventory adjustment is needed.`},
{id:'b', q:R`b) GKV, inventory increase of 2,000 gnomes: give the two booking entries that bring the increase into the P&L.`, sol:R`1. Debit Finished goods / Credit Change in inventory
2. Debit Change in inventory / Credit P&L
(year end: Debit CBSA / Credit Finished goods)`},
{id:'c', q:R`c) UKV: 10,000 gnomes are in finished goods, 8,000 are sold. Booking entries?`, sol:R`- Debit Production expenses / Credit Finished goods (for the 8,000 sold)
- Debit P&L / Credit Production expenses
- Debit CBSA / Credit Finished goods (2,000 left)`},
{id:'d', q:R`d) The task says: "show the highest possible profit". What do you do with production costs and why does it work?`, sol:R`Use every capitalization option in **§ 255 (2) sentences 3–4 HGB** (capitalize as much as possible). Production costs rise, so the inventory increase is valued higher, the credit side of the P&L grows and profit rises.`}
]},

{n:3, tier:'must', date:'03.11.', topic:'bk-10', title:'Direct costs vs overheads (Einzel- vs Gemeinkosten)',
intro:R`Cloer: "Muss ich abprüfen." Needed to understand the capitalization options.
- Direct costs :: one single cause → can be assigned directly to the cost object (no allocation problem). Example: material per gnome
- Overheads :: several causes → must be **allocated with keys** (Schlüsselung) to the cost objects. Example: factory rent, admin
- Study :: how production expenses are allocated to the product (cost object)`,
tasks:[
{id:'a', q:R`a) Define direct costs and overheads and say what the problem with overheads is.`, sol:R`**Direct costs** have one cause and can be assigned directly to the cost object. **Overheads** have several causes; they have to be **allocated to the cost objects with allocation keys**.`}
]},

{n:4, tier:'must', date:'03.11.', topic:'bk-4', title:'Opening balance sheet vs EBK',
intro:R`"Das schreiben Sie hin." In the exam you build an opening and a closing balance sheet and point out the difference:
- EBK (opening balance sheet account) :: only an **auxiliary account** (Hilfskonto)
- Sides swapped :: in the EBK assets are on the credit side and equity/liabilities on the debit side, so each account can be opened with a double entry
- Where to look :: the opening balance sheet = last year's closing balance sheet (balance sheet continuity, § 252 (1) No. 1 HGB)`,
tasks:[
{id:'a', q:R`a) How does the opening balance sheet account (EBK) differ from the opening balance sheet?`, sol:R`The EBK is only an **auxiliary account** and shows everything on the **opposite side** (assets on credit, equity and liabilities on debit). Opening entries: Debit asset accounts / Credit EBK; Debit EBK / Credit equity & liability accounts.`}
]},

{n:5, tier:'must', date:'02.11.', topic:'bk-11', title:'Depreciation: only straight-line + why cost accounting differs',
intro:R`- Exam scope :: only **straight-line (linear) depreciation** (tax law only allows linear)
- "In the exam" :: why imputed depreciation in cost accounting differs from balance-sheet depreciation: ① **replacement cost** as base instead of acquisition cost, ② a different method, ③ a different useful life`,
tasks:[
{id:'a', q:R`a) Give three reasons why depreciation in cost accounting differs from depreciation in the balance sheet.`, sol:R`1. Base = **replacement cost** instead of acquisition cost
2. A different depreciation **method**
3. A different **useful life**`}
]},

{n:6, tier:'likely', date:'02.11. + 03.11.', topic:'bk-14', title:'Net income vs operating income, expenses vs costs',
intro:R`- External accounting (HGB) :: expenses and income → **net income** (Jahresüberschuss, "net income under GAAP")
- Internal accounting :: cost accounting (KLR) with costs and revenues → **operating income** (Betriebsergebnis)
- Bridge :: operating expenses (Zweckaufwand) = basic costs (Grundkosten)

**Neutral expenses (three types)** — transcript says "mutual expenses":
- Non-operating :: donation to the Red Cross (a donation that promotes the business = sponsoring, something else)
- Prior-period :: tax back-payment after a tax audit. **Not costs**, because cost accounting is strictly tied to one period
- Extraordinary :: fire damage, a broken machine

**Imputed costs:** other costs (Anderskosten, e.g. imputed depreciation), additional costs (imputed salary/rent/interest — a sole proprietor can't contract with himself), calculatory risks.`,
tasks:[
{id:'a', q:R`a) What is the residual figure in external accounting and in internal accounting?`, sol:R`External (HGB): **net income** (Jahresüberschuss). Internal (cost accounting): **operating income** (Betriebsergebnis).`},
{id:'b', q:R`b) Name the three types of neutral expenses with one example each.`, sol:R`- Non-operating: donation to the Red Cross
- Prior-period: tax back-payment for last year after a tax audit
- Extraordinary: fire damage`},
{id:'c', q:R`c) Why can prior-period expenses never be costs?`, sol:R`Cost accounting is strictly related to **one period** (static); anything relating to another period cannot be a cost of the current period.`},
{id:'d', q:R`d) Germania GmbH produces garden gnomes and holds 10,000 Telekom shares, which pay a dividend. Classify and book.`, sol:R`Nothing to do with the business purpose → **neutral income**, not a revenue (Leistung) of cost accounting.
**Debit Bank / Credit Income from investments**`}
]},

{n:7, tier:'likely', date:'03.11.', topic:'bk-3', title:'Three transaction types, P&L sides, why HGB, GoB',
intro:R`- Asset/liability only :: no effect on equity, e.g. balance sheet extension Dr Bank / Cr Liabilities
- Expense :: equity ↓, e.g. Dr Interest expense / Cr Bank
- Income :: equity ↑, e.g. Dr Bank / Cr Interest income
- Mnemonic :: "Aufwand – Bestand, Bestand – Ertrag"
- P&L :: expenses left, income right ("A vor E"); profit as balancing figure left, loss right ("G vor V")
- Why HGB? :: how much may be distributed is a **company-law question** (GmbHG/AktG), which refers to the **HGB** balance sheet, not IFRS. Low profit → lower dividend. Telekom: steady profit → steady dividend (share like a bond)
- GoB :: clarity, truth, prudence (Klarheit, Wahrheit, Vorsicht)`,
tasks:[
{id:'a', q:R`a) Why do companies still need an HGB balance sheet if they also report under IFRS?`, sol:R`The amount that can be **distributed** is a company-law question (GmbHG/AktG), and company law refers to the **HGB** balance sheet. IFRS does not matter for the dividend.`},
{id:'b', q:R`b) You receive interest on your bank account. Booking entry in English?`, sol:R`**Debit Bank / Credit Interest income** (income increases equity → credit side).`}
]},

{n:8, tier:'core', date:'03.11.', topic:'bk-12', title:'Prepaid expenses (aktiver RAP) and accruals',
intro:R`- § 250 HGB :: the law says "Ausgaben", but it **means payments** (Auszahlungen). Cloer asks about this
- Definition :: payment before the balance sheet date for an expense relating to the following financial year (*deferred expenses*: "deferred" = pushed back)
- Legal basis :: accrual principle, **§ 252 (1) No. 5 HGB**: success is recognised independent of the payment
- Accruals (antizipativ) :: expense now, payment later → no RAP, normal liability: Dr Interest/Rental expenses / Cr **Accrued liabilities**`,
tasks:[
{id:'a', q:R`a) § 250 HGB speaks of "Ausgaben" (expenditure). What is actually meant?`, sol:R`**Payments** (Auszahlungen) before the balance sheet date that are expense for a period after it.`},
{id:'b', q:R`b) On 1 December you pay rent of 6,000 for December–May. Give the entries on 1 Dec, 31 Dec and 1 Jan.`, sol:R`**1 Dec**
[[e:
D|Rental expenses|6,000
C|Bank|6,000]]
**31 Dec**
[[e:
D|Deferred expenses (prepaid)|5,000
C|Rental expenses|5,000]]
**1 Jan**
[[e:
D|Rental expenses|5,000
C|Deferred expenses (prepaid)|5,000]]
Only 1/6 (1,000) belongs to the current year.`},
{id:'c', q:R`c) December interest is owed but will be paid in January. Entry?`, sol:R`**Debit Interest expenses / Credit Accrued liabilities** (accrual, no deferral item).`}
]},

{n:9, tier:'core', date:'03.11.', topic:'bk-12', title:'Payments on account: washing machine',
intro:R`- Received :: customer pays in advance → under civil law the money is yours, but in the balance sheet it is **debt capital** (you haven't delivered yet)
- Made :: you pay in advance for equipment → asset "prepayments", later reclassified
- Merchandise :: purchase Dr Merchandise / Cr Accounts payable; sale Dr Cost of sales / Cr Merchandise (cost of sales = **expense** account); netting against sales is **not GoB-compliant**`,
tasks:[
{id:'a', q:R`a) Seller's view: the customer pays 1,000 in advance, later you deliver the washing machine. All entries incl. the goods leaving stock.`, sol:R`- Payment: Debit Bank / Credit Payments received on account
- Delivery: Debit Payments received on account / Credit Sales
- Goods out: Debit Cost of sales / Credit Merchandise
- Closing: Debit P&L / Credit Cost of sales`},
{id:'b', q:R`b) Why are payments received on account debt capital, although the money legally belongs to you?`, sol:R`You have **not delivered yet** — it is a pending contract where the customer has performed in advance. You owe the delivery.`},
{id:'c', q:R`c) Buyer's view: you pay in advance for a washing machine (office equipment), it arrives later. Entries?`, sol:R`- Debit Prepayments on office & business equipment / Credit Cash
- Later: Debit Office & business equipment / Credit Prepayments on office & business equipment`}
]},

{n:10, tier:'new', date:'03.11.', topic:'bk-13', title:'Provisions & the imparity principle',
intro:R`- § 249 HGB :: provisions are formed for **contingent (uncertain) liabilities** and **anticipated losses from pending transactions**. Common feature: **uncertainty**
- Imparity principle (§ 252 (1) No. 4) :: risks/losses are recognised as soon as foreseeable (even if they become known after the balance sheet date but before the accounts are prepared), profits only when realised. Reason: **prudence**
- Pending transactions :: normally not booked (performance = counter-performance); an anticipated loss is brought forward because of imparity
- Position :: in § 266 HGB between equity and liabilities. § 247 uses "Schulden" (debt) as generic term = **provisions + liabilities**
- Pension :: Dr Wages/Expense / Cr Provision. Uncertain whether and how much (life expectancy) → provision, not deferral. Reduces profit → de-facto **block on distributions** → **internal financing**
- Internal financing :: ① retained profits ② depreciation ③ provisions`,
tasks:[
{id:'a', q:R`a) What does the imparity principle say (in English) and on what is it based?`, sol:R`*Potential risks/losses have to be taken into account, whereas profits are only recognised when they are realised.* It is based on the **prudence principle**.`},
{id:'b', q:R`b) For which two cases must provisions be formed under § 249 HGB, and what do they have in common?`, sol:R`Contingent (uncertain) liabilities and anticipated losses from pending transactions. Common feature: **uncertainty**.`},
{id:'c', q:R`c) § 247 HGB says "equity and debt", § 266 lists "provisions" and "liabilities". What do you conclude?`, sol:R`"Debt" (Schulden) is the **generic term**: it comprises provisions **and** liabilities.`},
{id:'d', q:R`d) Why is a pension commitment a provision and not a deferral? Entry?`, sol:R`It is **uncertain** whether and how much will be paid (the employee may die before retirement); a deferral is certain. **Debit (Wage/pension) expense / Credit Provision.**`},
{id:'e', q:R`e) Name the three forms of internal financing and explain how provisions finance the company.`, sol:R`Retained profits, depreciation, provisions. The provision expense reduces profit, so less is distributed, while the cash stays in the company until it has to be paid.`}
]},

{n:11, tier:'new', date:'03.11.', topic:'bk-13', title:'Reserves vs provisions + litigation provision',
intro:R`Cloer's classic internship interview question.
- Reserves (Rücklagen) :: **equity**. Revenue reserves = profits not distributed; capital reserves = premium (shares issued at 60, nominal 50 → 10 into capital reserve). Nothing to do with risk
- Provisions (Rückstellungen) :: **debt**, based on uncertainty
- Litigation :: threatened lawsuit before year end → form a provision (prudence); profit ↓. If the case is dropped next year → release it as income`,
tasks:[
{id:'a', q:R`a) What is the difference between a reserve and a provision?`, sol:R`A **reserve** is part of **equity** (retained profits or capital paid in above nominal value) and has nothing to do with risk. A **provision** is **debt** for an uncertain liability or an anticipated loss.`},
{id:'b', q:R`b) Shares are issued at 60 with a nominal value of 50. Where does the 10 go?`, sol:R`Into the **capital reserve** (equity).`},
{id:'c', q:R`c) A lawsuit threatens at year end. Next year the chamber drops the case. Entries in both years?`, sol:R`- Year 1: Debit Litigation expense / Credit Provision for pending litigation (profit ↓)
- Year 2: Debit Provision / Credit Income from the release of provisions`}
]}
];
