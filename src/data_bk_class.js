/* ============================================================ BOOKKEEPING — IN-CLASS NOTES (Prof. Cloer, handwritten notes received 27.10.2026) ============================================================ */
// Same schema as BK_TUTS (intro + tasks with q/sol/warn), n = session number C1…C10.
// Solutions follow the board examples from class; where the notes slip, it is flagged in warn.
const BK_CLASS = [
{n:1, topic:'bk-5', title:'Enterprise, legal forms & equity vs debt',
intro:R`**The enterprise is a value creation system.** It combines resources (people, physical space, technology, capital, information) to produce goods and services, satisfy consumer needs, generate profits and create shareholder value.

Services are intangible and cannot be stored. The customer has to be integrated into production, so production and consumption happen at the same time (**uno-actu principle**).

[[t:Legal forms as drawn in class
Group|Forms|Focus
Sole proprietor|registered merchant (e.K.)|one person
Partnerships|civil law partnership (GbR), general partnership (OHG), limited partnership (KG)|persons / partners
Hybrid|partnership limited by shares (KGaA)|both
Capital companies|GmbH (special form UG), AG, European company (SE)|capital
Special forms|cooperative (eG), association (Verein), foundation (Stiftung)|members / purpose]]

- Capital companies :: legal persons that come into existence by legal fiction; the focus is on capital, not on the partners
- Limited partnership :: the general partner (Komplementär) is liable without limit, the limited partner only up to the contribution
- Cooperative :: one member, one vote, independent of the capital share
- Numerus clausus :: founders can only choose among the forms the law provides
- Partnerships in the balance sheet :: equity is shown per partner (A, B, C), often split into capital account I (fixed) and II (variable)
- Commercial vs civil code :: the HGB only applies to merchants; for everyone else the BGB applies. Germany is a code-law country (vs case law)
- Three pillars of German banking :: cooperative banks, public banks (Sparkassen), private banks; their functions are financing, investment and payments`,
tasks:[
{id:'a', q:R`a) Compare an equity contribution with a loan on five criteria: ownership, voting rights, participation in losses, remuneration, term.`,
sol:R`[[t:Equity vs debt (board table)
Criterion|Contribution (equity)|Loan (debt)
Ownership|yes|no
Voting rights|yes|no
Losses|full participation|generally no participation
Remuneration|share in profit (dividend)|interest
Term|unlimited|fixed maturity]]`},
{id:'b', q:R`b) Why is a hairdresser's service a typical example of the uno-actu principle?`,
sol:R`A haircut is intangible, cannot be stored and needs the customer as an external factor. It is produced and consumed at the same moment.`},
{id:'c', q:R`c) Name the two groups of companies from the class diagram and the main difference between them.`,
sol:R`Partnerships (GbR, OHG, KG) focus on the persons. At least one partner is personally liable. Capital companies (GmbH/UG, AG, SE) focus on capital. They are legal persons created by legal fiction and liability is limited to company assets. The KGaA is the hybrid of both.`}
]},

{n:2, topic:'bk-1', title:'The four pairs of terms: the pub timeline',
intro:R`Cloer walked through one evening in a pub to separate the four pairs of terms.

[[t:German → English
German|English|German|English
Einzahlung|payment in|Auszahlung|payment out
Einnahme|income|Ausgabe|expenditure
Ertrag|earnings|Aufwand|expenses
Leistung|revenues|Kosten|costs]]

- Financial assets (Geldvermögen) :: cash holding (cash in hand + positive bank balance) + receivables − liabilities
- Equity :: financial assets ± all other assets (assets − debt capital = equity)
- Provisions and other liabilities :: belong to the debts side of the balance sheet
- Pending transaction (schwebendes Geschäft) :: a contract that neither side has fulfilled yet. It is not booked

**Second example (the landlord's view):** 100 l of beer are bought for 50€. Bank 1,000 → 950, a stock of beer 50 appears, equity stays 1,050. That is an expenditure and a payment out, but no expense. Later one glass (0.5 l) costs 0.25€ of beer (expense = input) and sells for 5€ (earnings = output), so the margin is 4.75€. If the owner also counts an imputed wage for themselves, the cost is higher than the expense.`,
tasks:[
{id:'a', q:R`a) Classify each step: 1. you withdraw 30€ from the ATM · 2. you enter the pub and order a beer · 3. the order is accepted, nothing delivered yet · 4. the beer is served · 5. you drink it · 6. you pay.`,
sol:R`- 1. ATM :: bank → cash, both are cash holdings: no payment in/out, nothing else changes
- 2.–3. Order :: a promise only, so it is a **pending transaction**. Nothing is recognised
- 4. Beer served :: you now owe the price. The liability rises, so this is an **expenditure**
- 5. Drinking :: consumption, so your equity falls. This is an **expense**
- 6. Paying :: cash falls and the liability falls. This is a **payment out** only`},
{id:'b', q:R`b) The landlord buys 100 l of beer for 50€ by bank. Expense or not? Show the balance sheet effect (start: bank 1,000, cash 50, equity 1,050).`,
sol:R`Payment out and expenditure of 50, but **no expense**. Bank 1,000 → 950 and a new asset "beer" 50 appear, so it is an asset exchange. The balance sheet total stays 1,050: bank 950 + cash 50 + beer 50 = equity 1,050. The expense only arises when the beer is served and consumed.`},
{id:'c', q:R`c) One glass uses 0.25€ of beer and sells for 5€. Name expense, earnings and profit, and explain why the owner's view of cost can differ.`,
sol:R`Expense 0.25 (= basic cost), earnings 5 (= basic revenue), profit 4.75 (margin). In cost accounting the owner adds imputed costs, e.g. an imputed wage for their own work. These are costs without an expense, so the calculated cost is higher than 0.25.`}
]},

{n:3, topic:'bk-1', title:'Expenses vs costs, earnings vs revenues (two circles)',
intro:R`Two overlapping circles per side. The overlap is the part that counts for both financial accounting and cost accounting.

[[t:Expenses (Aufwendungen) vs costs (Kosten)
No.|Area|Example from class
1|non-operating expense|donation
2|extraordinary expense|premises burn down
3|prior-period expense|additional taxes after a tax audit
4|functional expense = basic costs|overlap: expense and cost
5|calculatory risks|cost only
6|additional costs = imputed costs|imputed wages, interest on equity, rent (fictitious, opportunity costs)
7|other costs|e.g. calculatory depreciation differing from the balance sheet]]

1–3 are **neutral expenses** (expense, but no cost).

[[t:Earnings (Erträge) vs revenues (Leistungen)
No.|Area|Example from class
1|non-operating earnings|subsidies; a dividend from an investment outside the core business
2|extraordinary earnings|insurance compensation
3|prior-period earnings|unexpected tax refund; a debtor pays an already written-off receivable
4|functional earnings = basic revenues|sales proceeds (turnover)
5|additional revenues|e.g. self-made software that is used but not capitalised
6|other revenues|e.g. products on stock valued higher in cost accounting than in the balance sheet]]

1–3 are **neutral earnings** (earnings, but no revenue). Further reading named in class: Wöhe, *Einführung in die ABWL*.`,
tasks:[
{id:'a', q:R`a) Place each item in the circles: donation to a sports club · fire destroys the warehouse · back taxes after an audit · imputed wage of the owner · wages of employees.`,
sol:R`- Donation :: non-operating expense (1), neutral
- Fire :: extraordinary expense (2), neutral
- Back taxes :: prior-period expense (3), neutral
- Imputed owner wage :: additional cost (6), cost but no expense
- Employee wages :: functional expense = basic costs (4), the overlap`},
{id:'b', q:R`b) Place on the earnings side: insurance pays for the fire · a written-off customer pays after all · sales of the core product · a dividend from a stake unrelated to the business.`,
sol:R`- Insurance compensation :: extraordinary earnings (2), neutral
- Written-off receivable paid :: prior-period earnings (3), neutral
- Core sales :: functional earnings = basic revenues (4)
- Dividend outside the core business :: non-operating earnings (1), neutral`},
{id:'c', q:R`c) Why are imputed costs called "fictitious" or "opportunity" costs?`,
sol:R`No money flows and no expense is booked. They price the next-best use of the owner's resources: wage for their own work, interest on their own capital, rent for their own building. This makes costs comparable with a company that has to pay for all three.`}
]},

{n:4, topic:'bk-14', title:'Map of accounting: internal vs external',
intro:R`- Internal accounting :: budgeting accounting. It consists of the investment plan and budgeting (payments in/out) and cost accounting (costs/revenues)
- External accounting :: financial statements under German GAAP (HGB). There are separate financial statements (earnings/expenses) and consolidated statements (parent entity + subsidiaries)
- Cash-based (pagatoric) accounting :: an information instrument. It is needed to assess what can be distributed and consists of the balance sheet and the P&L account
- Book value vs fair market value :: the market value is often higher than the book value. The difference is a hidden reserve (see C9)`,
tasks:[
{id:'a', q:R`a) Which pair of terms does each area work with: investment plan, cost accounting, separate financial statements?`,
sol:R`Investment plan and budgeting work with payments in/out. Cost accounting works with costs/revenues. Separate (and consolidated) financial statements work with earnings/expenses, and the balance sheet with assets and debts.`},
{id:'b', q:R`b) What distinguishes separate from consolidated financial statements?`,
sol:R`Separate statements cover one legal entity. Consolidated statements combine the parent entity with its subsidiaries ("daughter companies") as if they were one company.`}
]},

{n:5, topic:'bk-4', title:'Opening and closing via OBSA and CBSA',
intro:R`- Balance sheet sides :: assets (debit) = equity + debts (credit). Fixed and current assets per § 266 para. 2 HGB, equity and liabilities per § 266 para. 3 HGB. § 247 para. 1 HGB requires fixed assets, current assets, equity and debts to be shown separately
- Order on the asset side :: by liquidity. The least liquid item (land) comes first, cash last
- OBSA is an auxiliary account :: it mirrors the opening balance sheet on the **opposite** sides (equity on the debit side, assets on the credit side). Cloer: "wrong side, because auxiliary account"
- Every balance sheet item needs its own T-account; the starting value goes to the side where the account grows
- Equity comparison :: equity CBS − equity OBS − contributions + withdrawals = profit. If it is 0, there is no profit and no loss
- Transaction types :: asset exchange (withdraw funds: Debit Cash / Credit Bank), liability exchange (debt → equity: Debit Liabilities / Credit Equity; or short-term → long-term), extension (Debit Bank / Credit Liabilities), contraction (repay: Debit Liabilities / Credit Bank)`,
tasks:[
{id:'a', q:R`a) Opening balance sheet: raw materials 50, bank 60, equity 110. One transaction: raw materials for 10 are bought by bank. Open, book and close all accounts.`,
sol:R`Opening: Debit Raw materials 50 / Credit OBSA · Debit Bank 60 / Credit OBSA · Debit OBSA 110 / Credit Equity.
[[e:
D|Raw materials|10
C|Bank|10]]
Raw materials 50 + 10 = **60**, bank 60 − 10 = **50**. Close: Debit CBSA / Credit Raw materials 60 · Debit CBSA / Credit Bank 50 · Debit Equity / Credit CBSA 110.
[[t:Closing balance sheet
Assets|€|Equity & liabilities|€
Raw materials|60|Equity|110
Bank|50|Debts|0
Total|110|Total|110]]
An asset exchange: the total stays 110 and there is no profit.`},
{id:'b', q:R`b) A sole trader starts with 500,000€ cash. She opens a bank account and pays in 450,000€, then buys a piece of land for 400,000€ by bank. Give every entry (1)–(8) and the closing balance sheet.`,
sol:R`- (1) :: Debit Cash 500,000 / Credit OBSA
- (2) :: Debit OBSA 500,000 / Credit Equity
- (3) :: Debit Bank 450,000 / Credit Cash
- (4) :: Debit Land 400,000 / Credit Bank
- (5) :: Debit CBSA 50,000 / Credit Cash
- (6) :: Debit CBSA 50,000 / Credit Bank
- (7) :: Debit CBSA 400,000 / Credit Land
- (8) :: Debit Equity 500,000 / Credit CBSA
[[t:Closing balance sheet (order by liquidity)
Assets|€|Equity & liabilities|€
Land|400,000|Equity|500,000
Bank|50,000||
Cash|50,000||
Total|500,000|Total|500,000]]
Equity comparison: 500,000 − 500,000 − 0 + 0 = 0, so there is no profit and no loss. Only the asset side was restructured.`},
{id:'c', q:R`c) Which of the transactions in b) are payments out, which are expenses?`,
sol:R`Cash → bank is no payment in or out, because the total means of payment stays the same. Buying the land is a payment out and an expenditure, but **no expense**: cash turns into land and equity is unchanged.`},
{id:'d', q:R`d) Assets 1,000 = equity 800 + debts 200. The supplier agrees to turn 100 of an open short-term trade payable into a long-term loan. Which transaction type, and what is the entry?`,
sol:R`A liability exchange: debts stay 200, only their maturity changes.
[[e:
D|Trade payables|100
C|Loan / Liability|100]]`}
]},

{n:6, topic:'bk-4', title:'A full year: rent 200, interest 5',
intro:R`The class example that runs through every step: opening, two transactions, closing of the P&L accounts, closing of the balance sheet accounts.

[[t:Opening balance sheet 1.1.
Assets|€|Equity & liabilities|€
Land|150|Equity|250
Bank|80|Liabilities|50
Cash|70||
Total|300|Total|300]]

Two transactions during the year: the tenant pays rent of 200 to the bank, and the company pays 10% interest on the loan of 50 (= 5).

- Three kinds of entries :: stock/stock (income-neutral, e.g. Debit Bank / Credit Cash), expense/stock (Debit Interest expense / Credit Bank), stock/earnings (Debit Bank / Credit Rental earnings)
- Expense and earnings accounts :: they have no opening value. They are closed into the P&L, and the P&L is closed into equity
- Balance sheet identity § 252 para. 1 no. 1 HGB :: the opening balance sheet must equal the previous year's closing balance sheet`,
tasks:[
{id:'a', q:R`a) Write the opening entries (1)–(5).`,
sol:R`Assets: Debit asset / Credit OBSA. Liabilities: Debit OBSA / Credit liability.
- (1) :: Debit Land 150 / Credit OBSA
- (2) :: Debit Bank 80 / Credit OBSA
- (3) :: Debit Cash 70 / Credit OBSA
- (4) :: Debit OBSA 250 / Credit Equity
- (5) :: Debit OBSA 50 / Credit Liabilities`},
{id:'b', q:R`b) Book the two transactions (6) and (7).`,
sol:R`[[e:
D|Bank|200
C|Rental earnings|200]]
[[e:
D|Interest expense|5
C|Bank|5]]`},
{id:'c', q:R`c) Close the P&L accounts (8)–(10) and state the profit.`,
sol:R`- (8) :: Debit Rental earnings 200 / Credit P&L
- (9) :: Debit P&L 5 / Credit Interest expense
- (10) :: Debit P&L 195 / Credit Equity
[[t:P&L
Expenses|€|Earnings|€
Interest expense|5|Rental earnings|200
Profit → equity|195||
Total|200|Total|200]]`},
{id:'d', q:R`d) Close the balance sheet accounts (11)–(15) and draw the CBSA.`,
sol:R`Bank: 80 + 200 − 5 = **275**. Equity: 250 + 195 = **445**.
- (11) :: Debit CBSA 150 / Credit Land
- (12) :: Debit CBSA 275 / Credit Bank
- (13) :: Debit CBSA 70 / Credit Cash
- (14) :: Debit Equity 445 / Credit CBSA
- (15) :: Debit Liabilities 50 / Credit CBSA
[[t:CBSA
Debit|€|Credit|€
Land|150|Equity|445
Bank|275|Liabilities|50
Cash|70||
Total|495|Total|495]]`, warn:'In the notes the OBS total is written as 800 instead of 300, and a draft CBS beside it has bank and cash swapped (70/80). The figures above are the consistent ones.'}
]},

{n:7, topic:'bk-11', title:'Car, loan granted & depreciation',
intro:R`Opening balance sheet: bank 1,000, cash 50, equity 1,050. Four events:
- a) :: a car for 20 is bought, useful life 5 years, paid later
- b) :: the company lends 500 to a third party at 10% interest (by bank)
- c) :: on 31 Dec it receives the 10% interest in cash
- d) :: "something is missing", which is the depreciation of the car`,
tasks:[
{id:'a', q:R`a) Book a)–d).`,
sol:R`[[e:
D|Vehicles|20
C|Trade payables|20]]
[[e:
D|Loan receivable|500
C|Bank|500]]
[[e:
D|Cash|50
C|Interest earnings|50]]
[[e:
D|Depreciation|4
C|Vehicles|4]]
Depreciation = 20 / 5 years = 4 per year.`},
{id:'b', q:R`b) Close the P&L and give the closing balance sheet.`,
sol:R`P&L: depreciation 4 | interest earnings 50 → **profit 46**, so equity is 1,050 + 46 = 1,096.
[[t:Closing balance sheet
Assets|€|Equity & liabilities|€
Vehicles|16|Equity|1,096
Loan receivable|500|Trade payables|20
Bank|500||
Cash|100||
Total|1,116|Total|1,116]]`}
]},

{n:8, topic:'bk-6', title:'VAT: the beauty salon',
intro:R`A beauty salon buys soap, milk and creams from a supplier for 1,000 net and sells services to customers for 10,000 net. Opening balance sheet: bank 10,000, equity 10,000. VAT 19%.

- Input tax :: a receivable from the tax office
- VAT (output) :: a liability to the tax office
- Using up own consumables :: an internal event, so there is **no VAT**
- Result :: VAT runs past the P&L. Profit is 10,000 − 1,000 = 9,000 with or without VAT`,
tasks:[
{id:'a', q:R`a) Book the five steps: purchase, consumption, sale, offsetting, payment of the VAT liability.`,
sol:R`- (1) Purchase :: Debit Consumables 1,000, Debit Input tax 190 / Credit Bank 1,190
- (2) Consumption :: Debit Consumables expense 1,000 / Credit Consumables 1,000
- (3) Sale :: Debit Bank 11,900 / Credit Sales revenue 10,000, Credit VAT 1,900
- (4) Offsetting :: Debit VAT 190 / Credit Input tax 190
- (5) Payment :: Debit VAT 1,710 / Credit Bank 1,710`},
{id:'b', q:R`b) Bank balance, profit and closing balance sheet?`,
sol:R`Bank: 10,000 − 1,190 + 11,900 − 1,710 = **19,000**. P&L: consumables expense 1,000 | sales 10,000 → **profit 9,000**. Equity 10,000 + 9,000 = 19,000.
[[t:CBSA
Debit|€|Credit|€
Bank|19,000|Equity|19,000
Consumables|0||
Total|19,000|Total|19,000]]`}
]},

{n:9, topic:'bk-7', title:'Hidden reserves & lower of cost or market',
intro:R`- Valuation rules :: § 252 HGB (general valuation principles) and § 253 HGB (valuation limits)
- Hidden reserve :: the difference when the fair market value is above the book value. Under HGB it may not be shown, because historical costs are the upper limit and gains are only realised at sale
- Prudence / imparity :: § 252 para. 1 no. 4 HGB. Losses are shown as soon as they impend, gains only once realised
- Current assets :: § 253 para. 4 HGB. If the market value at year-end is lower, the asset must be written down **even though nothing has been sold**
- Also noted :: direct vs overhead costs (→ production costs, chapter 10)`,
tasks:[
{id:'a', q:R`a) Land with a book value of 10,000 is worth 100,000 today. What does the balance sheet show, and what happens when it is sold for 100,000 by bank?`,
sol:R`The balance sheet keeps 10,000 and the 90,000 is a hidden reserve. Only at the moment of sale is the gain realised:
[[e:
D|Bank|100,000
C|Land|10,000
C|Gain on disposal|90,000]]`},
{id:'b', q:R`b) Stock bought for 20,000 has a market value of 15,000 at year-end and is not sold yet. Entry and legal basis?`,
sol:R`[[e:
D|Depreciation|5,000
C|Inventories|5,000]]
Strict lower-of-cost-or-market rule for current assets (§ 253 para. 4 HGB), which follows from the imparity principle (§ 252 para. 1 no. 4 HGB). It applies even though no sale has happened yet.`}
]},

{n:10, topic:'bk-9', title:'Merchandise: gross vs net method',
intro:R`Opening stock of merchandise 1,000, purchases 1,400 by bank, closing stock (inventory count) 600, sales 2,250 to the bank.

**Input of merchandise = 1,000 + 1,400 − 600 = 1,800**, gross profit = 2,250 − 1,800 = **450**.

- Gross method :: input of merchandise 1,800 and sales 2,250 both appear in the P&L. You see input, output and margin, so it gives more information
- Net method :: the input of merchandise is offset on the sales account. Only the gross profit 450 goes to the P&L
- Both :: same profit of 450`,
tasks:[
{id:'a', q:R`a) Book the gross method from the closing stock onwards.`,
sol:R`- Closing stock :: Debit CBSA 600 / Credit Merchandise 600
- Input :: Debit Input of merchandise 1,800 / Credit Merchandise 1,800
- Close input :: Debit P&L 1,800 / Credit Input of merchandise 1,800
- Close sales :: Debit Sales revenue 2,250 / Credit P&L 2,250
P&L: input 1,800 | sales 2,250 → profit 450.`},
{id:'b', q:R`b) Book the net method.`,
sol:R`- Input :: Debit Input of merchandise 1,800 / Credit Merchandise 1,800
- Offset :: Debit Sales revenue 1,800 / Credit Input of merchandise 1,800
- Close sales :: Debit Sales revenue 450 / Credit P&L 450
P&L shows only the gross profit of 450.`, warn:'In the handwritten notes the two labels are swapped: the diagram marked "gross method (1)" offsets on the sales account (= net method), the one marked "net method (2) — better, see input + output + margin" shows both in the P&L (= gross method). The slides and the textbook use the names as above.'}
]}
];

BK_ACCOUNTS.push('Land','Vehicles','Loan receivable','Consumables','Consumables expense','Gain on disposal','Merchandise','Input of merchandise');
BK_TRAIN.push(
{id:'cl-1', topic:'bk-4', src:'Class', text:'Raw materials for 10€ are bought by bank transfer.', lines:[['D','Raw materials','10'],['C','Bank','10']]},
{id:'cl-2', topic:'bk-4', src:'Class', text:'Opening: a sole trader starts with 500,000€ cash. Open the cash account.', lines:[['D','Cash','500,000'],['C','OBSA','500,000']]},
{id:'cl-3', topic:'bk-4', src:'Class', text:'Opening: open the equity account of 500,000€.', lines:[['D','OBSA','500,000'],['C','Equity','500,000']]},
{id:'cl-4', topic:'bk-3', src:'Class', text:'The trader pays 450,000€ of cash into a new bank account.', lines:[['D','Bank','450,000'],['C','Cash','450,000']]},
{id:'cl-5', topic:'bk-3', src:'Class', text:'A piece of land is bought for 400,000€ by bank.', lines:[['D','Land','400,000'],['C','Bank','400,000']]},
{id:'cl-6', topic:'bk-3', src:'Class', text:'The supplier agrees to turn 100€ of an open short-term trade payable into a long-term loan.', lines:[['D','Trade payables','100'],['C','Loan / Liability','100']]},
{id:'cl-7', topic:'bk-4', src:'Class', text:'Interest of 5€ (10% on the 50€ loan) is paid by bank.', lines:[['D','Interest expense','5'],['C','Bank','5']]},
{id:'cl-8', topic:'bk-4', src:'Class', text:'Year-end: close the rental earnings account (200€).', lines:[['D','Rental earnings','200'],['C','P&L','200']]},
{id:'cl-9', topic:'bk-4', src:'Class', text:'Year-end: close the interest expense account (5€).', lines:[['D','P&L','5'],['C','Interest expense','5']]},
{id:'cl-10', topic:'bk-4', src:'Class', text:'The P&L shows a profit of 195€. Close it.', lines:[['D','P&L','195'],['C','Equity','195']]},
{id:'cl-11', topic:'bk-4', src:'Class', text:'Year-end: close the equity account (445€).', lines:[['D','Equity','445'],['C','CBSA','445']]},
{id:'cl-12', topic:'bk-11', src:'Class', text:'A car is bought for 20€ (useful life 5 years); payment later.', lines:[['D','Vehicles','20'],['C','Trade payables','20']]},
{id:'cl-13', topic:'bk-11', src:'Class', text:'The company lends 500€ to a third party by bank transfer.', lines:[['D','Loan receivable','500'],['C','Bank','500']]},
{id:'cl-14', topic:'bk-11', src:'Class', text:'31 Dec: 10% interest on the 500€ loan granted is received in cash.', lines:[['D','Cash','50'],['C','Interest earnings','50']]},
{id:'cl-15', topic:'bk-11', src:'Class', text:'Annual depreciation of the 20€ car over 5 years.', lines:[['D','Depreciation','4'],['C','Vehicles','4']]},
{id:'cl-16', topic:'bk-6', src:'Class', text:'A beauty salon buys consumables for 1,000€ net + 19% VAT by bank.', lines:[['D','Consumables','1,000'],['D','Input tax','190'],['C','Bank','1,190']]},
{id:'cl-17', topic:'bk-6', src:'Class', text:'The salon uses up the consumables (1,000€).', lines:[['D','Consumables expense','1,000'],['C','Consumables','1,000']]},
{id:'cl-18', topic:'bk-6', src:'Class', text:'The salon sells services for 10,000€ net + 19% VAT, paid to the bank.', lines:[['D','Bank','11,900'],['C','Sales revenue','10,000'],['C','VAT','1,900']]},
{id:'cl-19', topic:'bk-6', src:'Class', text:'Offset the input tax of 190€ against the VAT.', lines:[['D','VAT','190'],['C','Input tax','190']]},
{id:'cl-20', topic:'bk-6', src:'Class', text:'The remaining VAT liability of 1,710€ is paid by bank.', lines:[['D','VAT','1,710'],['C','Bank','1,710']]},
{id:'cl-21', topic:'bk-7', src:'Class', text:'Land with a book value of 10,000€ is sold for 100,000€ by bank; book the gain as gain on disposal.', lines:[['D','Bank','100,000'],['C','Land','10,000'],['C','Gain on disposal','90,000']]},
{id:'cl-22', topic:'bk-7', src:'Class', text:'Stock bought for 20,000€ is worth only 15,000€ at year-end (not sold yet).', lines:[['D','Depreciation','5,000'],['C','Inventories','5,000']]},
{id:'cl-23', topic:'bk-9', src:'Class', text:'Book the input of merchandise of 1,800€ (OB 1,000 + purchases 1,400 − CB 600).', lines:[['D','Input of merchandise','1,800'],['C','Merchandise','1,800']]},
{id:'cl-24', topic:'bk-9', src:'Class', text:'Net method: offset the input of merchandise (1,800€) on the sales account.', lines:[['D','Sales revenue','1,800'],['C','Input of merchandise','1,800']]},
{id:'cl-25', topic:'bk-9', src:'Class', text:'Net method: transfer the gross profit of 450€ to the P&L.', lines:[['D','Sales revenue','450'],['C','P&L','450']]}
);
