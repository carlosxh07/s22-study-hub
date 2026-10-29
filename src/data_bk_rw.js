/* ============================================================ BOOKKEEPING — TEXTBOOK CHAPTER GROUP (Rechnungswesen – leicht gemacht, 8th ed.) ============================================================ */
// Supplementary reading for Cloer's course. Own English summaries of the 12 lessons, grouped into pages bk-rw-1 … bk-rw-11.
// Same schema as BK_TOPICS (summary markup: "- " bullets, "Term :: Description", "=> A → B" flows, **bold**), plus `course` = matching course chapters.
// "Book vs. course" paragraphs flag where the book goes beyond the lecture or says something different. Example numbers are our own.

const BK_RW_TOPICS = [
{id:'bk-rw-1', ch:'T1', lessons:'Lessons 1–2', course:['bk-1','bk-14'], title:'Accounting as a Model & the Areas of Accounting',
examWeight:'Why accounting is a model of reality, internal vs external accounting, and the four pairs of flow terms — a second explanation of course chapters 1–2 and 14',
summary:R`**Accounting is a model.** A model simplifies reality so that one question can be answered. Bookkeeping and the financial statements reduce a company to money figures such as profit and net assets. Because these figures are numbers, they can be compared over time, across companies of the same industry, or against a target.

A company deals with its environment in two spheres:
- Real (operating) sphere :: buying inputs on the procurement market, combining them, and selling the output on the sales market; buyer and seller usually pay later or earlier, which creates receivables, payables and advance payments
- Financial sphere :: money that is not a price for goods or services: equity and loans from the capital market and their repayment, taxes and subsidies from the state

Interest belongs to the real sphere, because it is the price for using capital. The loan itself and its repayment belong to the financial sphere.

A profit only arises if the company is entitled to more for what it sells (earnings) than it gives up for what it buys and uses (expenses). The book stresses this simple point because it is often forgotten in exams.

What the model must show depends on the company type:
- Trading company :: buys goods and sells them without processing; inventory and sales accounts are enough
- Industrial company :: turns raw materials into unfinished and then finished goods over several stages, so it needs many more stock accounts
- Service company :: produces together with an external factor supplied by the customer (the hair, the taxi passenger, the tax documents); it cannot produce for stock, and intangible output is harder to value

**Internal vs external accounting.** Internal accounting informs management. Giver and receiver of the information are the same people, so no law is needed; the firm builds it as it likes. External accounting informs outsiders (equity and debt providers, tax office, competitors). Here management has no natural interest in full and true disclosure, so the law forces it.
- Cost accounting :: price calculation (lowest selling price, highest purchase price), efficiency control (planned vs actual costs) and planning of the production programme
- Investment appraisal :: tests whether an investment pays; standard method is the net present value: initial outlay plus discounted surpluses; a positive NPV means the investment earns more than the required rate
- Financial planning :: compares expected payments in and out to keep the firm solvent; holding only cash would be perfectly liquid but earn nothing, so the plan balances return and solvency
- Single financial statements :: documentation, information and basis for payments (dividends)
- Consolidated statements :: information only; prepared in addition to, never instead of, the single statements; not a basis for dividends
- Tax balance sheet :: basis for income taxes; addressee is the tax office

Cost accounting speaks of "Herstellkosten", financial accounting of "Herstellungskosten" (production cost, see T8).

**Three functions of the single financial statements:**
- Documentation :: bookkeeping and inventory record every transaction completely, in time order and systematically, based on vouchers
- Information :: balance sheet (a photo at one date) and P&L (the film of the period) give insight into net assets, earnings and financial position; corporations add notes
- Payment basis :: the net income decides what may be distributed

Profit appropriation is a triangle of interests. Shareholders want a high reported profit (more dividend). Creditors prefer a low one (less money leaves the firm). Managers can want either: high to attract investors or raise bonuses, low to keep money for investment.

**The pagatoric principle.** Accounting starts from payments (Latin pagare = to pay). Each pair of flow terms changes a different stock:
- Payment in / payment out :: change of cash and bank balances (stock of means of payment); used in financial planning
- Income / expenditure :: change of monetary assets = cash + receivables − liabilities; equals the value of goods and services sold or bought; used in investment appraisal when financing is ignored
- Earnings / expenses :: operating change of equity (net assets = monetary + non-monetary assets); used in the P&L
- Revenues / costs :: valued output and valued use of goods for the operating purpose; used in cost accounting

Payments out split into financial payments (e.g. repaying a loan, no effect on profit) and operating payments (e.g. paying a supplier or loan interest). Contributions and withdrawals change equity but are not earnings or expenses.

Typical combinations:
- Cash sale :: payment in and income at the same moment
- Sale on credit :: income now (receivable rises), payment in later; the later payment is no income, because the receivable falls by the same amount
- Using raw materials bought and paid last year :: expense, but neither expenditure nor payment out this year

Over the whole life of a company expenditure equals expense and income equals earnings. Only the allocation to single periods differs.`,
cards:[
{q:R`Real sphere vs financial sphere — where do interest and loan repayment belong?`, a:R`Interest = price for using capital → real (operating) sphere. Taking up and repaying the loan → financial sphere.`},
{q:R`Why is no law needed for internal accounting?`, a:R`Giver and receiver of the information are the same (management), so there is no conflict of interest.`},
{q:R`Which stock does each pair of flow terms change?`, a:R`Payments: cash and bank. Income/expenditure: monetary assets (cash + receivables − liabilities). Earnings/expenses: equity (net assets). Revenues/costs: operating output/use in cost accounting.`},
{q:R`Function of single vs consolidated statements vs tax balance sheet`, a:R`Single: documentation, information, payment basis. Consolidated: information only. Tax balance sheet: payment basis (taxes).`}
],
quiz:[
{q:R`A sale on credit is delivered today and paid next month. What happens today?`, opts:[R`Income, but no payment in`,R`Payment in, but no income`,R`Payment in and income together`,R`Neither income nor payment in`], correct:0, exp:R`Delivery on credit raises receivables, so monetary assets rise (income). Cash only comes later; that payment in is then no income, because the receivable falls.`},
{q:R`Paying interest on a bank loan belongs to which sphere?`, opts:[R`The real sphere, as the price of using capital`,R`The financial sphere, like the loan repayment`,R`Neither sphere, as it is only an internal booking`,R`The state, because interest is a kind of tax`], correct:0, exp:R`The loan and its repayment are financial; the interest is the price for using the capital and belongs to the real (operating) sphere.`},
{q:R`Why does external accounting need legal rules while internal accounting does not?`, opts:[R`Management will not tell outsiders all`,R`Internal figures are always less exact`,R`The tax office prepares the internal figures`,R`Outsiders pay for the external statements`], correct:0, exp:R`In external accounting giver (management) and receivers (investors, creditors, tax office) differ, so there is no natural interest in full and true disclosure.`},
{q:R`Which function does the consolidated financial statement have?`, opts:[R`Information only`,R`Basis for dividends`,R`Basis for income taxes`,R`Documentation and dividends`], correct:0, exp:R`Group statements are prepared in addition to the single statements and serve only information; dividends depend on the single statements.`},
{q:R`Raw materials bought and paid in year 1 are used in production in year 2. What is year 2's effect?`, opts:[R`Only an expense`,R`An expenditure and an expense together`,R`A payment out without any expense`,R`No effect, the cost was in year 1`], correct:0, exp:R`Expenditure and payment happened in year 1. Using the material in year 2 reduces net assets then: expense only.`},
{q:R`Which interest group tends to want a LOW reported profit?`, opts:[R`Creditors`,R`Shareholders`,R`New investors`,R`Bonus-paid managers`], correct:0, exp:R`Creditors prefer low reported profits, because less is distributed and their loans stay safer. Shareholders want high profits; managers can lean either way.`},
{q:R`A hairdresser is a typical…`, opts:[R`service company with an external factor`,R`trading company selling goods unprocessed`,R`industrial company with stock of finished goods`,R`financial company in the capital market`], correct:0, exp:R`Services are produced together with a factor the customer supplies (here: the hair) and cannot be stored.`}
]},

{id:'bk-rw-2', ch:'T2', lessons:'Lesson 3 (1–3)', course:['bk-2'], title:'Duty to Keep Books, Stocktaking & Inventory',
examWeight:'Who must keep books under HGB and tax law, the stocktaking procedures and the simplifications for quantities — supports course chapter 3.1',
summary:R`**Bookkeeping** is a period calculation. It records all transactions of a business year in time order, systematically, promptly and without gaps, so that the financial statements can fulfil their documentation function. Luca Pacioli first described double-entry bookkeeping in 1494. "Buchhaltung" is only the department where bookkeeping ("Buchführung") happens.

**Duty under commercial law (§ 238 HGB):** every merchant must keep books. A merchant runs a commercial trade (§ 1 HGB): an activity that is independent, lasting, planned, visible on the market, legal, aimed at profit, and not a liberal profession or farming. It must also need a business set up in a commercial manner. Signs for that are turnover and profit, number of employees, range of goods, many suppliers and customers, and the organisation.

The ways to become a merchant:
- By operations (§ 1 HGB) :: a commercial trade that needs a commercial set-up; registration does not matter
- By registration (§ 2 HGB) :: a small trader may register voluntarily and then has to keep books
- Farmers and foresters (§ 3 HGB) :: may register if the business needs a commercial set-up
- By legal form (§ 6 HGB) :: AG, KGaA, GmbH and registered cooperative are always merchants, however small or purely asset-managing they are

Not merchants:
- Small traders :: their business does not need a commercial set-up
- Liberal professions :: doctors, lawyers, tax advisers, auditors, vets, artists; § 18 EStG lists them

**Exemption (§ 241a HGB):** a sole trader with at most 600,000€ revenue and at most 60,000€ profit on the balance sheet dates of two consecutive years may skip HGB bookkeeping and use a cash-basis surplus calculation (§ 4 para. 3 EStG) instead.

**Duty under tax law:**
- Derived duty (§ 140 AO) :: whoever must keep books under other laws (HGB) must also do so for tax purposes; this covers every merchant, size does not matter
- Original duty (§ 141 AO) :: non-merchants must keep books if the tax office finds that a size limit is exceeded (revenue above 600,000€, profit from trade or farming above 60,000€, or farm land value above 25,000€); liberal professions are never caught by § 141 AO

A merchant's duty includes three things: ongoing bookkeeping (§ 238), a regular inventory (§ 240) and annual financial statements (§ 242).

**Stocktaking vs inventory:**
- Stocktaking (Inventur) :: the activity of recording all assets and debts by type, quantity and value on a reference date
- Physical stocktaking :: counting, weighing, measuring tangible items
- Book stocktaking :: checking intangible items and debts (receivables, bank balances, payables, loans) with documents such as balance confirmations
- Inventory (Inventar) :: the resulting detailed list of all assets and debts by type, quantity and value, in vertical (staggered) form; kept for ten years (§ 257 HGB)

The inventory always has three parts: assets ./. debts = net assets (equity). Assets are listed by increasing liquidity, fixed assets first, then current assets. Debts are split into long-term and short-term.

The business year has twelve months and usually equals the calendar year. A different business year is allowed (seasonal businesses). A shortened business year is possible in exceptional cases, mainly the first and the last year.

**The time problem — three stocktaking procedures:**
- Reference-date stocktaking :: counting on the balance sheet date; extended version within ten days before or after, with roll-forward or roll-back of movements; heavy workload in a few days
- Advanced or postponed stocktaking (§ 241 para. 3 HGB) :: physical count within three months before or two months after the balance sheet date, values rolled forward/back to the date
- Permanent stocktaking (§ 241 para. 2 HGB) :: counts spread over the year, based on a stock ledger that records every addition and disposal

The last two are not allowed for especially valuable items or items at risk of uncontrolled losses.

**The quantity problem — three simplifications:**
- Fixed value (§ 240 para. 3 HGB) :: raw materials, supplies and tangible fixed assets whose quantity and value hardly change may be carried at a constant fixed quantity and price; a physical count is still due about every three years
- Group valuation (§ 240 para. 4 HGB) :: similar items are combined into a group and valued at the weighted average
- Consumption sequence (§ 256 HGB) :: when it is unclear which units were used, the firm may assume an order: weighted average, LIFO (last in, first out — like a pile) or FIFO (first in, first out — like a silo)

Own example: a firm buys 4,000 litres of fuel at 1.20€ and 6,000 litres at 1.30€; 2,000 litres are left. With the weighted average (0.4 × 1.20 + 0.6 × 1.30 = 1.26€) the stock is 2,520€.

**Book vs. course:** both use the 600,000€ / 60,000€ limits for § 241a HGB and § 141 AO. For business years from 2024 the legislator raised both limits to 800,000€ revenue and 80,000€ profit. Use the course figures in the exam unless Prof. Cloer says otherwise.`,
cards:[
{q:R`Four ways to become a merchant`, a:R`By operations (§ 1), by registration (§ 2), farmers/foresters by registration (§ 3), by legal form (§ 6: AG, KGaA, GmbH, eG).`},
{q:R`§ 140 AO vs § 141 AO`, a:R`§ 140: derived tax duty for everyone who must keep books under HGB. § 141: original duty for non-merchants above size limits; not for liberal professions.`},
{q:R`Stocktaking vs inventory`, a:R`Stocktaking = the activity of recording assets/debts by type, quantity, value. Inventory = the resulting list in staggered form (assets − debts = net assets).`},
{q:R`Three stocktaking procedures`, a:R`Reference date (±10 days), advanced/postponed (3 months before / 2 after, § 241 III), permanent (stock ledger, § 241 II).`},
{q:R`Three simplifications for the quantity problem`, a:R`Fixed value (§ 240 III), group valuation (§ 240 IV), consumption sequence: average, LIFO, FIFO (§ 256).`}
],
quiz:[
{q:R`A GmbH only manages a small rental building and some shares. Is it a merchant?`, opts:[R`Yes, always, by its legal form`,R`No, as it runs no commercial trade`,R`Only after it registers voluntarily`,R`Only above 600,000€ of revenue`], correct:0, exp:R`Corporations are merchants by legal form (§ 6 HGB with § 13 GmbHG), however small or asset-managing they are.`},
{q:R`A self-employed vet runs a planned, lasting and profitable practice. Must he keep books under HGB?`, opts:[R`No, vets are a liberal profession`,R`Yes, as he runs a commercial trade`,R`Yes, but only above 60,000€ profit`,R`Only if § 141 AO limits are exceeded`], correct:0, exp:R`Liberal professions are no trade and therefore no merchants; § 141 AO does not apply to them either.`},
{q:R`A merchant sole trader has 700,000€ revenue. Which tax provision obliges him to keep books?`, opts:[R`§ 140 AO, derived from the HGB duty`,R`§ 141 AO, because of the size limits`,R`§ 241a HGB, the small-trader exemption rule`,R`No tax duty, only commercial duty`], correct:0, exp:R`Every merchant already keeps books under HGB, so § 140 AO applies; the size limits of § 141 AO do not matter.`},
{q:R`Within which window may an advanced or postponed stocktaking be carried out?`, opts:[R`Three months before to two months after`,R`Ten days before to ten days after the date`,R`Two months before to three months after`,R`Any time during the business year`], correct:0, exp:R`§ 241 para. 3 HGB: three months before or two months after the balance sheet date; values are rolled to the date.`},
{q:R`What is a precondition for permanent stocktaking?`, opts:[R`A stock ledger recording every movement`,R`A count on the balance sheet date itself`,R`A fixed value for all of the inventory items`,R`An auditor confirming the stock list`], correct:0, exp:R`Permanent stocktaking (§ 241 para. 2 HGB) needs a stock ledger; the book quantity then replaces a full count on the date.`},
{q:R`Which simplification lets a firm carry thousands of similar tools at a constant amount?`, opts:[R`Fixed value under § 240 para. 3 HGB`,R`Group valuation under § 240 para. 4 HGB`,R`FIFO consumption sequence (§ 256 HGB)`,R`Permanent stocktaking (§ 241 HGB)`], correct:0, exp:R`A fixed value (constant quantity at constant price) is allowed if size and value hardly change; a count is due about every three years.`},
{q:R`How are assets ordered in the inventory?`, opts:[R`By liquidity, fixed assets first`,R`By decreasing value, the largest first`,R`By date of purchase, the oldest first`,R`Alphabetically within each group`], correct:0, exp:R`Fixed assets come first, then current assets, ending with bank and cash; debts follow, split by maturity.`}
]},

{id:'bk-rw-3', ch:'T3', lessons:'Lesson 3 (4–7)', course:['bk-3','bk-4'], title:'Balance Sheet, Four Transaction Types, T-Accounts & Booking Entries',
examWeight:'From inventory to balance sheet, the four income-neutral transaction types and the two formal tools (T-account, booking entry) — supports course chapters 3.2–3.3',
summary:R`**From inventory to balance sheet.** Every merchant draws up an opening balance sheet and a balance sheet for each year-end (§ 242 para. 1 HGB). It is built from the inventory and the ongoing bookkeeping. Compared with the inventory it:
- aggregates single items into larger positions
- drops the quantities
- puts assets and capital side by side in account form instead of one below the other

The left side is the assets side, ordered by increasing liquidity. The right side is the equity-and-liabilities side, ordered by legal position of the capital provider (equity vs debt) and urgency of payment. Equity is the balancing figure, so the balance sheet always balances.

Basic equation: assets = capital, so assets − liabilities = equity.

§ 247 para. 1 HGB only demands separate items for fixed and current assets, equity, debts and prepaid/deferred items; there is no detailed layout for sole traders. In practice they follow the layout for large corporations in § 266 para. 2 HGB. The balance sheet is drawn up in German and in euro (§ 244) and signed with the date by the merchant, and by all personally liable partners (§ 245).

If debts exceed assets, equity is used up. The negative amount then appears at the end of the assets side as "deficit not covered by equity" (§ 268 para. 3 HGB). This balance-sheet over-indebtedness signals a risk of insolvency.

The balance sheet is a point-in-time statement: a summarised comparison of assets and capital on one reference date.

**Four income-neutral transaction types.** Every transaction touches at least two balance sheet items, and the basic equation always holds. Own examples:
- Asset swap :: a customer pays 2,000€ of a receivable into the bank; receivables down, bank up, total unchanged
- Liability swap :: a supplier debt of 5,000€ is converted into a bank loan; one liability down, another up, total unchanged
- Balance sheet extension :: a printer for 800€ is bought on credit; equipment up, trade payables up, total up
- Balance sheet contraction :: a loan instalment of 1,000€ is paid from the bank; bank down, loan down, total down

If an item becomes zero it may be left out, unless it showed an amount in the previous year (§ 265 para. 8 HGB).

**T-account.** Rewriting the balance sheet after every transaction would be impossible with thousands of transactions a day. So each balance sheet item gets a T-account. The left side is debit (Soll), the right side credit (Haben). Historically: the debtor "shall" pay us, the creditor "has" a claim.

The logic of every stock account: opening balance + additions − disposals = closing balance, or opening balance + additions = disposals + closing balance.
- Asset account :: debit = opening balance and additions; credit = disposals and closing balance
- Liability/equity account :: credit = opening balance and additions; debit = disposals and closing balance

Tip from the book: sketch these two T-accounts on scrap paper at the start of every exam.

**Booking entry.** With many accounts nobody can see which entry belongs to which. The booking entry names the accounts touched and the side: always "debit account to credit account" (Soll an Haben). The word "to" (an) means nothing; it only links the two accounts. Debit and credit totals must be equal. Compound entries touch more than two accounts (one debit and several credits, several and several, or several debits and one credit).

The rules in short:
- Every transaction is booked twice: first debit, then credit
- Never put an amount into a T-account without writing the booking entry first — then you cannot forget the counter-account

**Charts of accounts.** A chart of accounts (Kontenrahmen) standardises the accounts of an industry; each firm derives its own plan of accounts from it. Common ones: retail (EKR), wholesale and foreign trade, industry (GKR and IKR), and DATEV SKR 03 and SKR 04. They are decimal: ten account classes, split into groups, accounts and sub-accounts. They are ordered either by the financial statements (balance sheet and P&L layout) or by the process (flow of values through the firm).`,
cards:[
{q:R`Three differences between inventory and balance sheet`, a:R`Balance sheet aggregates items, drops quantities, uses account form (two sides) instead of staggered form.`},
{q:R`Four income-neutral transaction types`, a:R`Asset swap, liability swap, balance sheet extension, balance sheet contraction.`},
{q:R`What if debts exceed assets?`, a:R`"Deficit not covered by equity" at the end of the assets side (§ 268 III HGB) — balance-sheet over-indebtedness.`},
{q:R`Asset vs liability account sides`, a:R`Asset: opening + additions debit; disposals + closing credit. Liability/equity: the reverse.`}
],
quiz:[
{q:R`A firm converts a 5,000€ supplier debt into a bank loan. Which transaction type is it?`, opts:[R`Liability swap`,R`Asset swap`,R`Balance sheet extension`,R`Balance sheet contraction`], correct:0, exp:R`Only the liabilities side changes structure; the total stays the same.`},
{q:R`A firm buys a printer on credit. Which transaction type is it?`, opts:[R`Balance sheet extension`,R`Balance sheet contraction`,R`Asset swap`,R`Liability swap`], correct:0, exp:R`Assets (equipment) and liabilities (trade payables) rise by the same amount; the total rises.`},
{q:R`Where does a deficit not covered by equity appear?`, opts:[R`At the end of the assets side`,R`At the top of the equity section`,R`As a negative line in the P&L`,R`Only in the notes, not on the face`], correct:0, exp:R`§ 268 para. 3 HGB: the excess of liabilities over assets is shown separately at the end of the assets side.`},
{q:R`On which side does the opening balance of a liability account stand?`, opts:[R`Credit side`,R`Debit side`,R`Either side, by choice`,R`It has no opening balance`], correct:0, exp:R`Liability and equity accounts take opening balance and additions on the credit side, like the right side of the balance sheet.`},
{q:R`What does the word "to" in "Bank to Receivables" mean?`, opts:[R`Nothing; it just links the accounts`,R`That money flows from bank to customer`,R`That the bank account is credited`,R`That receivables increase by the amount`], correct:0, exp:R`The booking entry always reads debit to credit; "to" (an) has no meaning of its own. Here bank is debited, receivables credited.`},
{q:R`How are the items on the equity-and-liabilities side ordered?`, opts:[R`By legal position of the provider and due date`,R`By increasing liquidity, with cash and bank last`,R`By size, the largest first`,R`By the date the debt arose`], correct:0, exp:R`Equity first, then debts, ordered by urgency of payment; assets are ordered by liquidity.`},
{q:R`What does a chart of accounts (Kontenrahmen) do?`, opts:[R`Standardises an industry's accounts`,R`Lists the firm's assets by quantity and value`,R`Sets out the legal layout of the P&L`,R`Replaces the plan of accounts of each firm`], correct:0, exp:R`It is an industry-wide decimal system (ten classes); each firm derives its own plan of accounts from it.`}
]},

{id:'bk-rw-4', ch:'T4', lessons:'Lesson 4', course:['bk-4'], title:'Technique: OBSA, CBSA, Income Accounts & the P&L Account',
examWeight:'Opening and closing all accounts, booking on income-statement accounts and the closing chain P&L → equity → CBSA — supports course chapter 3.3 and the Closing Trainer',
summary:R`**Opening via the opening balance sheet account (OBSA).** The closing balance sheet of one year equals the opening balance sheet of the next (balance sheet identity, § 252 para. 1 no. 1 HGB). Each item gets an account. Because every booking needs a counter-booking, the opening balances are booked against the OBSA (Eröffnungsbilanzkonto, EBK). The OBSA is the mirror image of the opening balance sheet: assets on its credit side, equity and liabilities on its debit side.
- Opening an asset account :: Asset account to OBSA (e.g. Cash 3,000 to OBSA 3,000)
- Opening a liability or equity account :: OBSA to liability/equity account

**Answering four questions before every entry:**
- Which balance sheet items change, so which accounts are touched?
- Are they asset or liability accounts?
- Is it an addition or a disposal?
- On which side of each account does the amount go?

Own example: a customer transfers 1,500€. Accounts: bank and receivables, both asset accounts; bank rises (debit), receivables fall (credit). Entry: Bank 1,500 to Receivables 1,500.

**Closing via the closing balance sheet account (CBSA).** At year-end each account is totalled and its balance is compared with the stocktaking. The balance (closing balance) is booked on the smaller side. For asset accounts it lands on the credit side, for liability accounts on the debit side. The counter-account is the CBSA (Schlussbilanzkonto, SBK):
- CBSA to asset account
- Liability/equity account to CBSA

Unlike the OBSA, the CBSA has the same layout as the balance sheet. The closing balance sheet is just a clean copy of it.

=> Stocktaking and inventory (old year) → opening balance sheet (equals last closing balance sheet) → opening entries via OBSA → current transactions on stock accounts → closing entries via CBSA → closing balance sheet, checked against the new inventory

**Income-statement accounts.** Many transactions change equity: rent received raises it, wages reduce it. Profit can be measured in two ways, and both always give the same number:
- Comparison of stocks :: equity at the end of the year − equity at the start of the year
- Comparison of flows (P&L) :: earnings − expenses

The P&L is still needed. § 242 para. 2 HGB demands it, and booking everything directly on the equity account would make it unreadable and hide the sources of profit. So expense and earnings accounts are kept as sub-accounts of equity.

Because they are sub-accounts of equity, they follow its sides:
- Expenses are always booked on the debit side :: Expense account to stock account
- Earnings are always booked on the credit side :: Stock account to earnings account

Own examples: telephone bill debited by the bank, 90€: Telephone expense 90 to Bank 90. Interest credited, 40€: Bank 40 to Interest earnings 40. Repair invoice on credit, 300€: Maintenance expense 300 to Trade payables 300.

**Closing the income-statement accounts.** Their balances go to the P&L account first, not directly to equity:
- P&L to every expense account
- Every earnings account to P&L
- Net income (balance on the debit side of the P&L): P&L to Equity
- Net loss (balance on the credit side of the P&L): Equity to P&L
- Finally: Equity to CBSA

Offsetting is prohibited (§ 246 para. 2 HGB): rent expense and rent earnings may not be netted. Each kind of result keeps its own account, so the P&L shows the sources of profit as well as its size.

The closing balance sheet is the CBSA laid out according to § 266 HGB. The P&L statement is the P&L account laid out according to § 275 HGB. If the CBSA does not balance, there is a booking error.`,
cards:[
{q:R`Opening entries via OBSA`, a:R`Asset account to OBSA; OBSA to liability/equity account. The OBSA is the mirror image of the opening balance sheet.`},
{q:R`Closing entries via CBSA`, a:R`CBSA to asset account; liability/equity account to CBSA. The CBSA has the same layout as the balance sheet.`},
{q:R`Closing chain of income-statement accounts`, a:R`P&L to expenses; earnings to P&L; P&L to Equity (net income) or Equity to P&L (net loss); Equity to CBSA.`},
{q:R`Two ways to measure profit`, a:R`Comparison of equity stocks (end − start) and comparison of flows (earnings − expenses); both give the same result.`}
],
quiz:[
{q:R`How is the opening balance of the cash account booked?`, opts:[R`Cash to OBSA`,R`OBSA to Cash`,R`Cash to CBSA`,R`Equity to Cash`], correct:0, exp:R`Asset accounts are opened on the debit side against the OBSA, which takes the assets on its credit side.`},
{q:R`On which side of the OBSA do the liabilities appear?`, opts:[R`Debit side — it mirrors the balance sheet`,R`Credit side — same as in the balance sheet`,R`They are not shown on the OBSA, only in the balance sheet`,R`On both sides, as a balancing entry`], correct:0, exp:R`The OBSA is the mirror image of the opening balance sheet: assets on the credit side, equity and liabilities on the debit side.`},
{q:R`How is the closing balance of a loan account booked?`, opts:[R`Loan to CBSA`,R`CBSA to Loan`,R`Loan to P&L`,R`OBSA to Loan`], correct:0, exp:R`Liability accounts carry their closing balance on the debit side; the counter-entry is the credit side of the CBSA.`},
{q:R`Electricity of 250€ is debited from the bank account. Booking entry?`, opts:[R`Energy expense 250 to Bank 250`,R`Bank 250 to Energy expense 250`,R`Energy expense 250 to Equity 250`,R`Trade payables 250 to Bank 250`], correct:0, exp:R`Expenses are always booked on the debit side; the bank balance falls (credit).`},
{q:R`The P&L account shows a net loss. How is it closed?`, opts:[R`Equity to P&L`,R`P&L to Equity`,R`P&L to CBSA`,R`CBSA to P&L`], correct:0, exp:R`A net loss is a balance on the credit side of the P&L; it reduces equity, so Equity (debit) to P&L (credit).`},
{q:R`Why may rent earnings and rent expenses not be netted in the P&L?`, opts:[R`§ 246 para. 2 HGB prohibits offsetting`,R`Both belong to different business years`,R`Rent earnings are always tax-free`,R`Rent expense is not an operating expense`], correct:0, exp:R`The offsetting prohibition keeps the sources of profit visible; each kind of result stays on its own account.`},
{q:R`Equity at the start 80,000€, at the end 95,000€, no contributions or withdrawals. What do earnings − expenses equal?`, opts:[R`15,000€`,R`95,000€`,R`175,000€`,R`80,000€`], correct:0, exp:R`Comparison of stocks and comparison of flows always give the same result: 95,000 − 80,000 = 15,000.`}
]},

{id:'bk-rw-5', ch:'T5', lessons:'Lesson 5', course:['bk-7'], title:'Legal Framework: HGB, Notes, Management Report, Audit, Groups & IFRS',
examWeight:'Mostly beyond the lecture: two-step structure of the HGB, components of the financial statements by size and legal form, audit, disclosure, group accounts and IFRS',
summary:R`**Beyond the lecture:** Prof. Cloer's course touches this framework only in passing. Read it as background for the HGB references and for Financial Statement Analysis.

**Three eras shaped German accounting law:**
- Industrialisation :: the 1861 ADHGB and the HGB of 1897 (in force since 1900) had only a few rules; large joint-stock companies with big capital needs created stock exchanges for shares, which raised demand for information; a separate company law for AGs followed (1870), the first duty to prepare balance sheet and P&L for AGs (1884), and stricter Stock Corporation Acts in 1937 and 1965
- Europeanisation :: the 4th, 7th and 8th EC Directives harmonised accounts; the 4th (accounting) Directive became the Third Book of the HGB in 1985; the BilRUG of 2015 implemented the new EU Accounting Directive 2013/34/EU
- Globalisation :: international capital markets want comparable statements (IFRS)

**Two-step structure of the Third Book of the HGB:**
- §§ 238–263 HGB :: rules for all merchants (bookkeeping, inventory, opening balance sheet, annual statements, retention)
- §§ 264–342e HGB :: additional rules for corporations (single statements, group accounts, disclosure, audit)

Method for a case: always check §§ 238–263 first. For a sole trader or partnership you are then done. Only for a corporation do you check §§ 264 ff. afterwards.

**Components of the annual financial statements:**
- All merchants (§ 242 para. 3 HGB) :: balance sheet and P&L
- Corporations (§ 264 para. 1 HGB) :: plus notes; micro-corporations (§ 267a) are exempt from the notes
- Management report (§ 289 HGB) :: required for corporations, but NOT part of the financial statements; it stands next to them; small corporations (§ 267 para. 1) may skip it
- Capital-market-oriented corporations (§ 264d) :: plus cash flow statement and statement of changes in equity; segment report optional

**Balance sheet and P&L.** The balance sheet compares assets and capital on one date. Fixed assets are meant to serve the business for a long time (§ 247 para. 2 HGB). Current assets are sold or used up soon. The same computer is fixed in an accounting office and current at a computer dealer: what counts is its function. Rule of thumb: fixed assets are used, current assets are used up or sold. Debt is available for a limited time, equity in principle without limit.

The HGB contains recognition rules (§§ 246–251, plus §§ 267–274, 277), valuation rules (§§ 252–256a) and layout rules (§§ 246, 247, plus §§ 266, 275).

The P&L shows how the result arose: flows (€ per year), not stocks. All merchants may use account form; corporations must use the vertical (staggered) form (§ 275 para. 1 HGB). Both forms give the same result. The P&L starts with sales revenue (§ 277 para. 1 HGB): proceeds from selling, renting or leasing products and from services, after sales deductions (discounts, cash discounts) and VAT and other taxes linked directly to sales. Selling fixed assets or receivables is no sales revenue but other operating income. Intermediate results: total cost method (§ 275 para. 2) no. 15; cost of sales method (para. 3) nos. 3 and 14.

**Notes.** Corporations add notes. They have two jobs:
- Explanation :: how options were used, valuation methods, changes from last year (§ 284), the fixed-asset schedule
- Supplement :: information beyond balance sheet and P&L, e.g. management pay (§ 285 no. 9) and other financial obligations (§ 285 no. 3a)

Some details may be left out (§ 286; e.g. pay of a single managing director). Small corporations get further relief (§ 288).

**Management report.** It covers the past and the expected future, including the risks of future development (risk report). It must also cover, for example, research and development. This indirectly forces medium and large corporations to run a risk management system. Some firms add a non-financial statement (§ 289b) and a corporate governance statement (§ 289f).

**Audit and disclosure:**
- Statutory audit (§§ 316 ff.) :: for medium and large corporations; covers financial statements, management report and bookkeeping; only certified auditors (Wirtschaftsprüfer), for medium GmbHs also sworn accountants; result: audit report and audit opinion, unqualified, qualified or refused; not to be confused with tax inspectors
- Disclosure (§§ 325–329) :: corporations publish electronically; relief by size: small corporations need not publish their P&L (but must prepare it); medium and large publish everything including the supervisory board report and audit opinion
- GmbH & Co. KG (§ 264a) :: partnerships without a natural person with unlimited liability must apply the corporate rules on accounts, audit, disclosure and group accounts

**Group accounts.** Group firms can shift profit with transfer prices, e.g. sales above market price or loans below market interest. This distorts the single statements. So a parent with control over subsidiaries prepares consolidated statements (§ 290). They follow the unity theory (§ 297 para. 3): show the group as if it were one company, add up the single statements and eliminate intra-group receivables and payables, interest and sales.

Consolidated statements = group balance sheet, group P&L, group notes, cash flow statement, statement of changes in equity (segment report optional), plus a group management report.

Exemptions:
- Parent included in an EU/EEA group account :: exempt (§ 291)
- Small groups :: exempt by size (§ 293), unless capital-market-oriented

Listed groups must use IFRS for their consolidated statements (§ 315e). Others may choose.

**IFRS.** The IASB, a private foundation, develops the international standards. They lean towards the Anglo-American, investor-oriented tradition. German GAAP traditionally protects creditors, because German firms finance themselves mainly with bank loans and pension provisions. IFRS has been mandatory for the group accounts of EU-listed companies since 2005, and the US SEC has accepted IFRS since 2009. § 342 HGB allows a private standard-setter (DRSC). The 2009 BilMoG moved the HGB a small step towards IFRS.

IFRS tends to report profits earlier, but over the whole life both systems show the same total, because the payments are identical:
- Realisation is read more loosely (long-term construction by stage of completion, securities at fair value)
- Some self-created intangible assets must be capitalised
- Useful lives are usually longer than in German tax tables

**Book vs. course:** the 2019 edition cites IAS 11 and IAS 39. These have since been replaced by IFRS 15 (revenue) and IFRS 9 (financial instruments). The principle of earlier profit recognition under IFRS still holds.`,
cards:[
{q:R`Two-step structure of the Third Book of the HGB`, a:R`§§ 238–263 for all merchants; §§ 264–342e additionally for corporations. Always check the general part first.`},
{q:R`Is the management report part of the financial statements?`, a:R`No. Notes are part of a corporation's statements; the management report stands next to them (§ 289; small corporations may skip it).`},
{q:R`Two functions of the notes`, a:R`Explanation (options, methods, changes, fixed-asset schedule) and supplement (e.g. management pay, other financial obligations).`},
{q:R`Unity theory in group accounts`, a:R`The group is shown as if it were one company: add up single statements, eliminate intra-group balances, interest and sales (§ 297 III).`}
],
quiz:[
{q:R`A GmbH has prepared balance sheet and P&L. What else belongs to its annual financial statements (not micro)?`, opts:[R`The notes`,R`The management report`,R`A cash flow statement`,R`The audit opinion`], correct:0, exp:R`§ 264 para. 1 HGB adds the notes for corporations. The management report is required too, but stands next to the statements, not inside them.`},
{q:R`Which corporations must have their statements audited?`, opts:[R`Medium-sized and large ones`,R`All corporations, whatever their size`,R`Only listed corporations`,R`Only large ones above § 267 limits`], correct:0, exp:R`§§ 316 ff. HGB: statutory audit for medium and large corporations; small ones are exempt.`},
{q:R`What may a small corporation leave out when publishing?`, opts:[R`Its P&L — but it must still prepare it`,R`Its balance sheet together with all of its notes`,R`Everything, as it has no duty`,R`Only the audit opinion`], correct:0, exp:R`§ 326 HGB: small corporations need not publish the P&L; they need no management report at all.`},
{q:R`Why must a GmbH & Co. KG follow corporate accounting rules?`, opts:[R`No natural person is fully liable`,R`It is a corporation by its legal form`,R`Every KG must follow these rules`,R`It always counts as a large company`], correct:0, exp:R`§ 264a HGB puts partnerships without a natural person as general partner on the same footing as corporations.`},
{q:R`Sister firms trade goods at twice the market price. Which instrument corrects the distortion?`, opts:[R`The consolidated financial statements`,R`The notes of each single company in the group`,R`The tax balance sheet of the buyer`,R`The management report's risk section`], correct:0, exp:R`Consolidation (unity theory) eliminates intra-group sales, receivables, payables and interest.`},
{q:R`A computer dealer holds a PC for sale. Where is it shown?`, opts:[R`Current assets, because it is for sale`,R`Fixed assets, as computers are equipment`,R`Either side, at the merchant's own free choice`,R`Off balance sheet until it is sold`], correct:0, exp:R`Classification follows the function: fixed assets are used, current assets are used up or sold.`},
{q:R`Why does IFRS tend to show profits earlier than HGB?`, opts:[R`It reads realisation more loosely`,R`It ignores the depreciation of fixed assets`,R`It requires a higher number of provisions`,R`It records sales only when the cash arrives`], correct:0, exp:R`Examples: profit by stage of completion, fair value for trading securities, capitalising some self-made intangibles. Over the whole life the totals are equal.`}
]},

{id:'bk-rw-6', ch:'T6', lessons:'Lesson 6', course:['bk-7'], title:'GoB: Prudence, Realisation, Imparity & What May Be Recognised',
examWeight:'Realisation vs imparity principle, adjusting events, the true and fair view, the three criteria of an asset, hidden reserves and goodwill — supports course chapter 7',
summary:R`**GoB and the true and fair view.** The statements follow the principles of proper bookkeeping (GoB, § 243 para. 1 HGB). Not all of them are written down; rigid rules would not fit a changing reality. They come from the HGB, court rulings (mainly the Federal Fiscal Court), science, the IDW and the practice of honest merchants. The key written ones:
- Valuation :: prudence principle with its forms realisation, imparity and value-adjusting events (§ 252 para. 1 no. 4 HGB)
- Recognition :: completeness and economic substance (§ 246 para. 1 HGB)

For corporations, § 264 para. 2 HGB asks for a true and fair view of net assets, financial position and results; the idea applies to all merchants. Assets lead to future payments in and debts to payments out, so the balance sheet hints at the financial position. A financial plan would be better, but it is internal. The notes and, for capital-market firms, the cash flow statement help.

**Conflict between net assets and earnings.** Own example: land bought for 500,000€ for resale has a market value of 620,000€ at year-end.
- Showing net assets correctly would mean 620,000€ and a gain of 120,000€
- But no sale has happened, so showing earnings correctly means staying at 500,000€

The realisation principle gives the correct earnings priority. The land stays at its cost (§ 252 para. 1 no. 4 second half-sentence, § 253 para. 1 HGB).

Now the market value falls permanently to 410,000€. No loss has been realised yet. But the imparity principle breaks realisation: foreseeable losses must be anticipated. The land is written down by 90,000€. If it is sold for 410,000€ next year, the sale is a pure asset swap, because the loss was already booked.

Prudence is the dominant GoB of German accounting. It keeps the merchant from presenting the business too optimistically.

**Value-adjusting vs value-changing events.** The balance sheet shows the situation at the reference date.
- Value-adjusting (wertaufhellend) :: the cause existed on the balance sheet date and becomes known only later; it must be taken into account (§ 252 para. 1 no. 4 HGB). Example: a warehouse burned down on 31.12., discovered in February → write it down in the old year
- Value-changing (wertbeeinflussend) :: the cause arose after the date; no adjustment in the old year, but disclose it in the notes (§ 285 no. 33). Example: a hall destroyed on 1.1.

**The two valuation yardsticks:**
- Historical value :: acquisition or production cost, the upper limit
- Current value on the reference date :: derived from stock-exchange or market prices, the lower limit
- If current value < historical value :: an unscheduled write-down is required, with few exceptions (§ 253 para. 3 sentences 5/6, para. 4 HGB)
- If current value > historical value :: the historical value stays (§ 253 para. 1 HGB)

Realisation and imparity together make profit measurement prudent. The equity shown in the HGB balance sheet is a prudently measured lower limit of the firm's earnings value.

Applications:
- Long-term construction contract (HGB) :: the profit is realised only at acceptance of the finished work (completed contract method); later payment does not matter, a receivable is booked
- Same contract under IFRS :: profit by stage of completion, so earlier profits in the early years and a smaller one at the end
- Trading shares bought for 40,000€ with a market price of 52,000€ :: HGB keeps 40,000€ (realisation); IFRS shows the gain
- Dividends always depend on the HGB single statements, so IFRS "almost realised" profits cannot be distributed

**Recognition: completeness and objectivity.** The statements must contain all assets, debts and prepaid/deferred items unless the law says otherwise (§ 246 para. 1 sentence 1 HGB). Items that are not concrete and verifiable (a good idea, staff know-how, reputation) may not be recognised.

So equity and the earnings value can differ widely. The gap has two parts:
- Hidden reserves :: current value of a recognised asset above its book value (e.g. land at 300,000 shown at 180,000 → 120,000 hidden reserve)
- Original goodwill :: value of the whole firm − book equity − hidden reserves (customer base, motivated staff and the like)

**The three criteria of an asset (Federal Fiscal Court):**
- Part of the firm's wealth :: it will probably bring future surpluses (value)
- Tangibility :: it does not dissolve into the general business
- Separately measurable :: it can be valued on its own

The tax term "Wirtschaftsgut" is derived from this commercial definition.

**Option for self-created intangibles (§ 248 para. 2 HGB).** Self-created intangible fixed assets (e.g. self-developed software used in-house, patents) may be capitalised. Their future value is especially uncertain and there is no market price to confirm it.
- Same software as current assets (for sale) :: must be capitalised; the market quickly shows whether it covers its cost, otherwise it is written down
- As fixed assets :: high risk of overvaluation, hence only an option; with a payout block (§ 268 para. 8 HGB) and the measurement rules of § 255 para. 2a; a bow to IFRS, where capitalisation is required
- Bought software :: always capitalised at acquisition cost

**Acquired goodwill.** A buyer pays more for a firm than the market value of its single assets minus debts. Own example: purchase price 900,000€, assets at market value 700,000€, debts 100,000€ → goodwill 300,000€. Since the BilMoG of 2009 acquired goodwill is treated as an asset by legal fiction (§ 246 para. 1 sentence 4 HGB) and must be capitalised. The option of § 248 para. 2 does not apply, because it covers self-created intangibles only. Original (self-created) goodwill is never recognised.`,
cards:[
{q:R`Realisation vs imparity principle`, a:R`Realisation: gains only when realised by a sale. Imparity: foreseeable, unrealised losses must be anticipated. Together: prudence (§ 252 I no. 4).`},
{q:R`Value-adjusting vs value-changing event`, a:R`Adjusting: cause existed at the balance sheet date, known later → adjust. Changing: cause after the date → no adjustment, note disclosure.`},
{q:R`Three criteria of an asset`, a:R`Part of wealth (future surpluses), tangibility (not dissolved into the business), separately measurable.`},
{q:R`Gap between equity and earnings value`, a:R`Hidden reserves (current value > book value) + original goodwill (firm value − equity − hidden reserves).`},
{q:R`Acquired vs self-created goodwill`, a:R`Acquired: asset by fiction, must be capitalised (§ 246 I s. 4). Self-created: never recognised.`}
],
quiz:[
{q:R`Land bought for 500,000€ is worth 620,000€ at year-end. Balance sheet value under HGB?`, opts:[R`500,000€ — realisation principle`,R`620,000€ — true and fair view`,R`560,000€ — the average of both`,R`Choice between both values`], correct:0, exp:R`Cost is the upper limit; unrealised gains may not be shown (§ 253 para. 1, § 252 para. 1 no. 4 HGB).`},
{q:R`The same land falls permanently to 410,000€. What follows?`, opts:[R`Write down to 410,000€ now`,R`No entry until the land is actually sold`,R`A provision of 90,000€ for the loss`,R`A note in the notes, no booking`], correct:0, exp:R`Foreseeable losses must be anticipated; the later sale at 410,000€ is then a pure asset swap.`},
{q:R`A warehouse burned on 31.12.; the firm learns of it in February while preparing the statements. Treatment?`, opts:[R`Write down in the old year`,R`No effect; it was unknown on 31.12.`,R`Note only, since it was found later`,R`Write-down in the new year when found`], correct:0, exp:R`The cause existed on the balance sheet date; later knowledge must be considered (value-adjusting event).`},
{q:R`A factory hall is destroyed on 2 January. Treatment in the statements of the old year?`, opts:[R`No write-down, but a note disclosure`,R`Write-down to zero in the old year`,R`A provision for the expected loss of the hall`,R`Nothing at all, not even a note`], correct:0, exp:R`Value-changing event: it happened after the date, so no adjustment; § 285 no. 33 HGB asks for a note.`},
{q:R`Under HGB, when is the profit on a five-year turnkey construction contract realised?`, opts:[R`At acceptance of the finished work`,R`Year by year by stage of completion`,R`When the customer finally pays the invoice`,R`When the contract is signed`], correct:0, exp:R`Completed contract method from the realisation principle; IFRS instead uses stage of completion.`},
{q:R`Self-developed software for in-house use. Recognition under HGB?`, opts:[R`Option to capitalise (§ 248 para. 2)`,R`Must be capitalised like bought software`,R`Prohibited, always an expense`,R`Capitalised only after an audit`], correct:0, exp:R`Self-created intangible fixed assets: option, with payout block. Bought software must be capitalised; the same software held for sale too.`},
{q:R`A buyer pays 900,000€ for a firm whose assets at market value minus debts are 600,000€. Treatment of the 300,000€?`, opts:[R`Capitalise it as acquired goodwill`,R`May be capitalised under § 248 para. 2`,R`Expense at once, as it is no asset`,R`Shown as a hidden reserve in equity`], correct:0, exp:R`Acquired goodwill counts as an asset by fiction (§ 246 para. 1 sentence 4 HGB); the § 248 option only covers self-created intangibles.`},
{q:R`Which is NOT one of the three criteria of an asset?`, opts:[R`It has been fully paid for`,R`It brings future surpluses`,R`It is tangible as a separate item`,R`It can be measured on its own`], correct:0, exp:R`Payment is irrelevant (an asset bought on credit is still an asset). The criteria: part of wealth, tangibility, separately measurable.`}
]},

{id:'bk-rw-7', ch:'T7', lessons:'Lesson 7', course:['bk-6','bk-8','bk-9'], title:'Acquisition Costs, VAT, Price Reductions & Merchandise Accounts',
examWeight:'The § 255 para. 1 scheme, VAT system and closing entries, rebates vs cash discounts vs bonuses, mixed and separate merchandise accounts, returns — supports course chapters 6, 8 and 9',
summary:R`**Acquisition cost (§ 255 para. 1 HGB)** is the starting value for bought assets and the absolute upper limit of valuation (§ 253 para. 1). It covers what is spent to acquire an asset and make it ready for use, as far as it can be assigned to the single asset.
- Purchase price (normally net of VAT)
- + incidental acquisition costs
- + subsequent acquisition costs
- ./. price reductions that can be assigned to the asset
- = acquisition cost

The law says "Aufwendungen" (expenses), but means expenditure.

**Purchase price and VAT.** The purchase price is the net price. VAT is a transitory item for a firm entitled to deduct input tax, so it is not part of the cost.
- Net from gross :: gross ÷ 1.19 (or ÷ 1.07 at the reduced rate)
- Alternatively :: gross × 100 ÷ 119
- VAT inside a gross amount :: gross × 19 ÷ 119
- Own example :: 4,760€ gross → 4,000€ net and 760€ VAT

Do NOT take 19 % of the gross amount; that is the classic mistake.

**The VAT system** is an all-stage net VAT with input tax deduction. Every firm in the chain is involved, but each pays only on its own value added. The burden ends with the final consumer, so it is an indirect tax. Standard rate 19 %, reduced 7 % (e.g. flowers, dairy products, books). Some supplies are exempt, e.g. residential letting, granting loans and insurance (§ 4 UStG). For letting to other businesses the landlord may opt for VAT (§ 9 UStG).
- Input tax (Vorsteuer) :: VAT paid to suppliers; a receivable from the tax office; asset account, booked on the debit side
- Output VAT (Umsatzsteuer) :: VAT charged to customers; a liability to the tax office; liability account, booked on the credit side
- VAT payable (Zahllast) :: output VAT ./. input tax

Own chain: a producer sells for 200 + 38 VAT, a wholesaler for 300 + 57, a retailer to a consumer for 400 + 76. They pay 38, 19 and 19 to the tax office. The consumer bears the full 76.

Further points:
- Input tax may be deducted on everything bought for taxable sales, even indirectly (e.g. cleaning supplies of a consultant)
- An input tax surplus is refunded by the tax office (common with big investments, production for stock or loss periods)
- Whoever makes only exempt sales (letting, insurance, loans) gets no input tax deduction; this is why a landlord may opt for VAT when renting to businesses, e.g. to deduct input tax on a renovation
- VAT and input tax are booked when the supply is made, not when it is paid

Closing at the end of the filing period (month or quarter):
- Offset first :: VAT to Input tax (the smaller balance is closed into the larger one)
- Output VAT larger :: VAT to CBSA (VAT payable, a liability)
- Input tax larger :: CBSA to Input tax (refund claim)

**Incidental acquisition costs.** Spending to bring the asset into the firm's control and make it ready for use is added to its cost, but only if it can be assigned directly, without estimate or key.
- Land :: real estate transfer tax, notary and land register fees, surveying fees
- Movable assets :: packaging, freight, unloading, transport insurance
- Internal costs :: installation, foundations, assembly
- Overheads :: never part of the cost; they are expenses at once (e.g. fetching goods with the firm's own truck: fuel and driver's wage can only be estimated)
- Financing costs :: interest on a loan taken for the purchase is no acquisition cost but an ongoing expense; investment and financing are kept apart

Own example: a van, list price 40,000€ + delivery 900€ + registration 300€ = 41,200€ net. Entry when paid in cash: Vehicles 41,200 and Input tax 7,828 to Cash 49,028.

**Subsequent acquisition costs** arise after the asset is ready for use, in close connection with the purchase. Examples: later road development or sewer connection charges for land, or a navigation device built into a vehicle later.

**Price reductions** must be deducted if they can be assigned to the asset (§ 255 para. 1 sentence 3 HGB):
- Rebate (Rabatt) :: certain at the time of the contract (quantity, loyalty, reseller, staff rebate) → booked net from the start
- Cash discount (Skonto) :: uncertain at the time of delivery, depends on paying within a deadline → book the full price first, correct at payment
- Bonus (Bonus) :: uncertain, depends on the total volume of later orders → booked when granted on sub-accounts, closed into the purchase or sales account at year-end; a volume-based bonus usually cannot be assigned to single assets

Own cash-discount example: goods 5,000€ + 950€ VAT on credit, 2 % discount within 10 days.
- Buyer at delivery :: Inventory 5,000 and Input tax 950 to Trade payables 5,950
- Buyer pays with discount :: Trade payables 5,950 to Bank 5,831, Input tax 19 and Discounts received 100
- Seller at delivery :: Receivables 5,950 to Sales 5,000 and VAT 950
- Seller receives payment :: Bank 5,831, Discounts granted 100 and VAT 19 to Receivables 5,950

The deducted 119 splits into net (119 ÷ 1.19 = 100) and the VAT correction (19). Discounts received reduce acquisition cost and are closed into the purchase account, not the P&L. Discounts granted reduce sales and are closed into the sales account.

**Merchandise accounts.** Opening stock and purchases are valued at cost, sales at selling prices. So the same quantity carries two different values.

The mixed merchandise account puts everything into one account: opening stock and purchases at cost on the debit side; sales at selling prices and the counted closing stock at cost on the credit side. The balance on the debit side is the gross profit (Warenrohgewinn). The account is part stock, part income account.

Separate accounts avoid this:
- Purchase account (stock account) :: opening stock + purchases at cost on the debit side, closing stock from stocktaking on the credit side; the balance is the cost of goods sold (Wareneinsatz), the expense for what was sold
- Sales account (income account) :: sales at selling prices on the credit side

Own example: opening stock 3,000, purchases 5,000, sales 11,000, closing stock 2,000 → cost of goods sold 6,000, gross profit 5,000.
- Gross method :: CBSA to purchase account 2,000; P&L to purchase account 6,000; sales account to P&L 11,000. The P&L shows revenue and cost of goods sold side by side
- Net method :: CBSA to purchase account 2,000; sales account to purchase account 6,000; sales account to P&L 5,000. The P&L shows only the gross profit

The gross method informs better, internally and externally. Firms can also open several purchase and sales accounts (by product, customer or region) for internal analysis.

**Returns:**
- Return to the supplier (unpaid) :: reverse the purchase: Trade payables to purchase account and Input tax
- Return from a customer (unpaid) :: correct the sale, not a purchase: Sales account and VAT to Receivables

**Book vs. course:** the book says only large corporations must use the gross method (§§ 275, 276 HGB). Cloer's handout is stricter and is the one to follow. The § 246 para. 2 offsetting ban rules out net presentation in the HGB statements, while small and medium corporations may only combine items into "Rohergebnis" under § 276. That is a disclosure relief, not the teaching net method. The naming is the same in both: gross and net describe how the accounts are closed, not amounts with or without VAT.`,
cards:[
{q:R`Scheme of acquisition cost (§ 255 I HGB)`, a:R`Purchase price (net) + incidental costs + subsequent costs − assignable price reductions = acquisition cost.`},
{q:R`Net amount and VAT from a gross amount (19 %)`, a:R`Net = gross ÷ 1.19; VAT = gross × 19 ÷ 119. Never 19 % of the gross amount.`},
{q:R`Closing the VAT accounts`, a:R`VAT to Input tax; then VAT to CBSA (payable) or CBSA to Input tax (refund).`},
{q:R`Rebate vs cash discount vs bonus`, a:R`Rebate: certain at contract → net from the start. Cash discount: depends on paying early → corrected at payment. Bonus: depends on volume → booked when granted, closed into purchase/sales account.`},
{q:R`Gross vs net method closing entries`, a:R`Gross: P&L to purchase account (COGS), sales to P&L. Net: sales to purchase account (COGS), sales to P&L (gross profit only).`}
],
quiz:[
{q:R`An invoice shows 5,950€ including 19 % VAT. What is the net amount?`, opts:[R`5,000€`,R`4,819.50€`,R`5,130.50€`,R`4,950€`], correct:0, exp:R`5,950 ÷ 1.19 = 5,000. Taking 19 % of the gross amount (1,130.50) is the classic mistake.`},
{q:R`Which item is NOT part of the acquisition cost of a machine?`, opts:[R`Interest on the loan used to pay for it`,R`Freight paid to bring the machine to the plant`,R`Cost of the foundation it stands on`,R`Transport insurance for its delivery`], correct:0, exp:R`Financing costs are ongoing expenses; investment and financing are kept apart. Freight, foundation and insurance are directly assignable incidental costs.`},
{q:R`A firm picks up goods with its own truck. How are fuel and the driver's wage treated?`, opts:[R`As an expense at once`,R`Added to the goods as incidental costs`,R`Added as subsequent acquisition costs`,R`Deducted from the purchase price`], correct:0, exp:R`They can only be estimated or keyed (overheads), so they are not directly assignable and are expensed at once.`},
{q:R`Which price reduction is booked net from the start?`, opts:[R`A quantity rebate agreed in the contract`,R`A 2 % discount for paying within ten days`,R`A year-end bonus on total purchases`,R`A return of faulty goods to the supplier`], correct:0, exp:R`A rebate is certain at the time of the contract. Cash discounts and bonuses are uncertain and are booked only when they occur.`},
{q:R`Output VAT 8,000€, input tax 9,500€ at the end of the filing period. Result?`, opts:[R`A 1,500€ refund claim`,R`A 1,500€ VAT payable to the tax office`,R`17,500€ payable to the tax office`,R`Nothing, VAT is offset only once a year`], correct:0, exp:R`VAT to Input tax 8,000; the remaining input tax of 1,500 is a receivable: CBSA to Input tax 1,500.`},
{q:R`Under the net method, where does the cost of goods sold go?`, opts:[R`To the debit side of the sales account`,R`To the debit side of the P&L account`,R`To the credit side of the CBSA`,R`To the credit side of the sales account`], correct:0, exp:R`Sales account to purchase account (COGS); only the remaining gross profit is transferred to the P&L.`},
{q:R`A customer returns unpaid goods of 1,000€ net (19 % VAT). The seller books…`, opts:[R`Sales 1,000 and VAT 190 to Receivables 1,190`,R`Purchases 1,000 and VAT 190 to Receivables 1,190`,R`Receivables 1,190 to Sales 1,000 and VAT 190`,R`Sales 1,190 to Receivables 1,190`], correct:0, exp:R`A customer return corrects the sale (and the output VAT); it is not a purchase for the seller.`},
{q:R`A wholesaler buys for 300 + 57 VAT and sells for 420 + 79.80 VAT. What does it pay to the tax office?`, opts:[R`22.80€`,R`79.80€`,R`57.00€`,R`136.80€`], correct:0, exp:R`Output VAT 79.80 − input tax 57.00 = 22.80; the wholesaler pays only on its value added of 120.`}
]},

{id:'bk-rw-8', ch:'T8', lessons:'Lesson 8', course:['bk-10'], title:'Production Costs & Booking Finished Goods (Total Cost vs Cost of Sales Method)',
examWeight:'Mandatory, optional and prohibited parts of § 255 para. 2 HGB, lower and upper limit, and booking one- and two-stage production under both P&L methods — supports course chapter 10',
summary:R`**Production cost (§ 255 para. 2 HGB)** is the value for everything a firm makes itself and still holds on the balance sheet date: self-built buildings, machines and vehicles used in-house, and unfinished and finished goods. It covers what is spent for producing an asset, extending it, or improving it substantially beyond its original state. Again the law says "costs" but means expenditure.

The components:
- Direct material costs :: mandatory (raw materials and supplies used, bought-in parts)
- Direct labour costs :: mandatory (production wages incl. employer social security, holiday and Christmas pay)
- Special direct costs of production :: mandatory (models, templates, special tools, licence fees)
- Material overheads :: mandatory (purchasing, storage, inspection, internal transport of materials)
- Production overheads :: mandatory (energy, maintenance of plant, work preparation, foremen's salaries)
- Depreciation of production assets :: mandatory, but only scheduled depreciation for the production period; unscheduled write-downs never
- General administration :: option (management, finance, controlling, HR, IT, switchboard, plant security)
- Social facilities, voluntary social benefits, company pensions :: option (canteen, kindergarten, anniversary bonuses, pension contributions)
- Selling costs :: prohibited, even when directly assignable (e.g. a sales commission, special outer packaging, credit insurance) — to make an asset you do not have to sell it
- Research costs :: prohibited

Direct costs can be assigned to the single product. Overheads are caused by several products and can only be allocated with surcharge rates from cost accounting.

Interest on debt is no production cost (§ 255 para. 3 sentence 1), just as with acquisition cost. Exception: it may be included if the loan finances the production of this asset and the interest falls into the production period (sentence 2).

Own example, a workshop built by own staff:
- Direct material 40,000 + material overhead 15 % = 6,000
- Direct labour 25,000 + production overhead 80 % = 20,000
- Depreciation of the machines used 4,000 + special direct costs 3,000
- **Lower limit (mandatory parts) = 98,000€**
- + general administration 7,000 → **upper limit = 105,000€**

**Why finished goods must be valued.** Own example: a firm makes 200 tables at 80€ each, sells 150 at 150€ this year and 50 next year. If it books all production spending of 16,000 as this year's expense, year 1 shows 22,500 − 16,000 = 6,500 and year 2 shows 7,500 − 0 = 7,500. Both are wrong. Matching cost to sales gives year 1: 22,500 − 12,000 = 10,500 and year 2: 7,500 − 4,000 = 3,500, just as a trader would show. Self-made stock is carried at production cost.

**Total cost method (GKV, § 275 para. 2 HGB)** shows all production expenses of the period by type (material, personnel, depreciation), whether or not the products were sold. So the earnings must be adjusted to the quantity produced:
- Produced = sold :: no change in inventory
- Produced > sold :: increase in finished goods → Finished goods to Change in inventory (credit, works like an earning)
- Produced < sold :: decrease → Change in inventory to Finished goods (debit, works like an expense)

The account "Change in inventory" is closed to the P&L. An increase neutralises the expense for goods not yet sold. A decrease plays the role that cost of goods sold plays at a trader.

**Cost of sales method (UKV, § 275 para. 3 HGB)**, common internationally, shows only the production cost of what was sold. Producing for stock is income-neutral: Finished goods to raw materials, bank etc. (asset swap). At delivery the firm books sales revenue and, as expense, the production cost of the goods leaving stock: Production expense to Finished goods.

Both methods always give the same net income. GKV books every production expense and needs the change in inventory as a correction. UKV takes the simpler path and books only the cost of what was sold.

**Two-stage production.** Materials first become unfinished goods (WIP), then finished goods. Own example: year 1 materials 6,000 + wages 9,000 → WIP 15,000; year 2 refining with materials 3,000 + wages 2,000 → finished goods 20,000; year 3 sale for 26,000 net.
- UKV :: year 1 WIP 15,000 to Materials 6,000 and Bank 9,000; year 2 Finished goods 20,000 to Materials 3,000, Bank 2,000 and WIP 15,000; year 3 Bank to Sales and VAT, Production expense 20,000 to Finished goods 20,000
- GKV :: each year book material and wage expense; year 1 WIP 15,000 to Change in inventory (increase); year 2 Change in inventory (decrease WIP) 15,000 to WIP and Finished goods 20,000 to Change in inventory (increase); year 3 sale plus Change in inventory (decrease) 20,000 to Finished goods
- In both, the profit of 6,000 arises only in year 3

**Book vs. course:** the book confirms the textbook naming: § 275 para. 2 = total cost method (GKV, by type of expense), § 275 para. 3 = cost of sales method (UKV, by function). Prof. Cloer's slide in chapter 10 labels the two paragraphs the other way round. This is flagged in course chapter 10 too.`,
cards:[
{q:R`Mandatory parts of production cost`, a:R`Direct material, direct labour, special direct costs of production, material overheads, production overheads, scheduled depreciation of production assets.`},
{q:R`Optional and prohibited parts`, a:R`Optional: general administration, social facilities, voluntary benefits, company pensions (and interest under § 255 III s. 2). Prohibited: selling costs, research.`},
{q:R`GKV vs UKV in one line each`, a:R`GKV: all production expenses by type + change in inventory as correction. UKV: only the production cost of goods sold. Same net income.`},
{q:R`Booking an increase in finished goods under GKV`, a:R`Finished goods to Change in inventory; the change account is closed to the P&L (credit side).`}
],
quiz:[
{q:R`Which component may NOT be included in production cost?`, opts:[R`A sales commission`,R`Material overheads for storage`,R`Scheduled depreciation of machines`,R`General administration costs`], correct:0, exp:R`Selling costs are prohibited (§ 255 para. 2 sentence 4), even when directly assignable. Administration is optional; material overheads and depreciation are mandatory.`},
{q:R`General administration costs in production cost are…`, opts:[R`an option, raising the upper limit`,R`mandatory, part of the lower limit`,R`prohibited, like selling costs`,R`allowed only under IFRS`], correct:0, exp:R`They are optional (§ 255 para. 2 sentence 3); lower limit = mandatory parts, upper limit = mandatory + optional parts.`},
{q:R`Direct material 10,000, material overhead 20 %, direct labour 6,000, production overhead 50 %, depreciation 1,000. Lower limit?`, opts:[R`22,000€`,R`17,000€`,R`20,000€`,R`25,000€`], correct:0, exp:R`10,000 + 2,000 + 6,000 + 3,000 + 1,000 = 22,000.`},
{q:R`Under the total cost method a firm produces more than it sells. Entry at year-end?`, opts:[R`Finished goods to Change in inventory`,R`Change in inventory to Finished goods`,R`Production expense to Finished goods`,R`Finished goods to Sales revenue`], correct:0, exp:R`An increase in stock is booked on the credit side of Change in inventory and neutralises the expense for unsold goods.`},
{q:R`Under the cost of sales method, how is producing goods for stock booked?`, opts:[R`Income-neutral asset swap`,R`As expense, corrected by change in inventory`,R`As sales revenue at expected prices`,R`Not at all until the goods are sold`], correct:0, exp:R`UKV books production as an asset swap; expense arises only at sale (Production expense to Finished goods).`},
{q:R`Which statement about GKV and UKV is true?`, opts:[R`Both always give the same net income`,R`UKV shows a higher profit when stock grows`,R`GKV ignores the change in inventory`,R`Only GKV is allowed for corporations`], correct:0, exp:R`Only the path differs: GKV corrects with the change in inventory, UKV books only the cost of goods sold.`},
{q:R`May interest on a loan financing a self-built machine be included in its production cost?`, opts:[R`Yes, if it falls into the production period`,R`No, interest is always an expense`,R`Yes, but only for the whole remaining life of the loan`,R`Only under the cost of sales method`], correct:0, exp:R`§ 255 para. 3: interest is no production cost in principle, but may be included for the production period if the loan finances this asset.`}
]},

{id:'bk-rw-9', ch:'T9', lessons:'Lessons 9–10', course:['bk-11'], title:'Depreciation, Unscheduled Write-Downs & Valuing Receivables',
examWeight:'Depreciation plan, five methods with formulas, lower of cost or market for fixed and current assets, and the valuation of trade receivables (doubtful, uncollectible, general allowance) — supports course chapter 11',
summary:R`**Why depreciation.** When an asset is bought, the expenditure arises at once (paid now or a payable arises). If it were current assets, the expense would arise at the sale. But fixed assets are used, not sold. Without depreciation the expense would never appear.
- Non-depreciable fixed assets :: unlimited use, e.g. land without buildings, investments, works of art
- Depreciable fixed assets :: limited use, e.g. buildings, machines, office equipment, vehicles

Causes of wear:
- Technical :: physical wear and tear
- Time-based :: expiry of licences or patents
- Economic :: obsolescence through technical progress

§ 253 para. 3 sentence 1 HGB: the cost of depreciable fixed assets is reduced by scheduled depreciation. It has a double function:
- Balance sheet effect :: lowers the book value in line with wear
- P&L effect :: spreads the expenditure over the periods of use as expense

**The depreciation plan has three parts:**
- Basis :: acquisition or production cost, minus a significant residual value if one is expected from the start (e.g. scrap value of a ship)
- Useful life :: estimated period of use; technical (longer) or economic (shorter) life; guidance from experience and the tax office's depreciation tables (AfA-Tabellen), which are not law; if the life of self-created intangibles or acquired goodwill cannot be estimated, 10 years apply (§ 253 para. 3 sentences 3–4)
- Method :: how the cost is spread

Depreciation starts at delivery (bought) or completion (self-made). In the first year it is pro rata temporis, by months. After the useful life the asset is fully written off. If still in use it is kept at a memo value of 1€.

**Five methods allowed under HGB:**
- Straight-line :: (cost − residual value) ÷ useful life; allowed in commercial and tax law
- Geometric-declining (book value method) :: fixed % of the remaining book value; higher amounts at first, closer to the real loss of value (think of a car's market value); never reaches zero, so firms switch to straight-line in the year the straight-line amount reaches the declining amount: t = n − 100/p + 1
- Arithmetic-declining (digital = sum-of-the-years) :: amounts fall by the same step D each year; D = (cost − residual value) ÷ (1 + 2 + … + n); year k = D × remaining years; ends exactly at zero; commercial law only
- Progressive :: amounts rise over time; mostly against prudence; only in narrow exceptions (e.g. start-ups); not for tax
- Performance-based :: (cost − residual value) ÷ total expected output × actual output (units, km, machine hours); allowed in commercial and tax law (movable assets)

Own example: machine 60,000€, 6 years.
- Straight-line :: 10,000 per year
- Geometric 25 % :: year 1 15,000, year 2 11,250; switch year t = 6 − 4 + 1 = 3
- Digital :: D = 60,000 ÷ 21 = 2,857.14; year 1 = 6 × D = 17,142.86, year 2 = 5 × D = 14,285.71
- Performance :: truck 90,000€ for 450,000 km, 70,000 km driven → 14,000€

Bookings for a straight-line asset bought 2 January for 50,000€, 5 years:
- Purchase :: Machinery 50,000 and Input tax 9,500 to Trade payables 59,500
- Year-end :: Depreciation 10,000 to Machinery 10,000; P&L to Depreciation; CBSA to Machinery 40,000

Declining methods can also be read as spreading expenditure, not as measuring wear. High depreciation at first plus repair costs that rise later gives a roughly even total burden per year. All methods are only timing differences: you cannot depreciate more than 100 %. IFRS usually assumes longer useful lives.

**Unscheduled write-downs: the lower of cost or market principle.** Cost is the upper limit. A higher current value is ignored (realisation). A lower current value is recognised (imparity).
- Current assets :: strict lower of cost or market: always write down to the lower stock-exchange/market value or fair value (§ 253 para. 4)
- Fixed assets :: write-down required if the impairment is expected to be permanent (§ 253 para. 3 sentence 5)
- Financial fixed assets, temporary impairment :: option to write down (sentence 6, mitigated principle)
- Other fixed assets, temporary impairment :: write-down not allowed; fixed assets are kept, not sold, so a temporary dip threatens no loss
- Reason falls away later :: write-up required (§ 253 para. 5, strict reversal)

Technically there is no difference between scheduled and unscheduled write-downs. By GoB the unscheduled one is booked after the scheduled one, on its own account. In tax law it is called AfaA.

Own example: equipment 80,000€, 8 years straight-line, book value at the start of year 4 = 50,000; fair value at the end of year 4 = 12,000, permanent.
- Scheduled :: Depreciation 10,000 to Equipment
- Unscheduled :: Extraordinary depreciation 28,000 to Equipment (40,000 → 12,000)
- Closing :: CBSA to Equipment 12,000

Missing items found at stocktaking (e.g. stolen pallet trucks) are also written off as unscheduled write-downs. Under GKV they appear as depreciation (§ 275 para. 2 no. 7). Under UKV they go to the function where they arose, e.g. selling costs (§ 275 para. 3 no. 4).

**Valuing trade receivables.** A receivable arises when the supply is made (realisation), not at invoicing or due date. It is current assets, valued at nominal value including VAT. Payment later is an asset swap. Three classes:
- Sound receivables :: nominal value
- Uncollectible receivables :: certain total loss (e.g. insolvency estate does not cover it, debtor's sworn statement of assets, statute of limitation, enforcement failed) → write off the net amount and correct the VAT: Write-down on receivables (net) and VAT to Receivables (gross)
- Doubtful receivables :: only partial payment expected (no reaction to reminders, bounced cheque, composition proceedings) → first move them to a separate account (Doubtful receivables to Receivables; no effect on profit), then write down the expected loss on the NET amount only; VAT is corrected only when the loss actually happens (§ 17 UStG)

Own example: doubtful receivable 4,760€ gross, expected loss 60 %. Net 4,000 → write-down 2,400: Write-down on receivables 2,400 to Doubtful receivables 2,400.

General allowance: for the remaining receivables convert to net and apply an experience-based loss rate (e.g. 1 %). The mixed method = single valuation for doubtful items plus a general allowance for the rest.

**Book vs. course:** the 2019 edition says declining-balance depreciation is banned for tax since 2011. Tax rules have changed again since, with temporary permissions in later years. For Cloer's exam only the commercial-law methods matter. Doubtful and uncollectible receivables and the general allowance are **beyond the lecture**.`,
cards:[
{q:R`Three parts of a depreciation plan`, a:R`Basis (cost − residual value), useful life, method (§ 253 III s. 2 HGB).`},
{q:R`Switch year geometric → straight-line; digital step`, a:R`t = n − 100/p + 1. Digital: D = cost ÷ (1 + … + n); year k = D × remaining years.`},
{q:R`Lower of cost or market: fixed vs current assets`, a:R`Current: always write down (strict). Fixed: if permanent; financial assets temporary = option; other fixed temporary = not allowed. Reversal required later.`},
{q:R`Doubtful receivable — two steps`, a:R`Reclassify (Doubtful receivables to Receivables), then write down the expected loss on the net amount; VAT only corrected when the loss is final.`}
],
quiz:[
{q:R`Machine 80,000€, 10 years, geometric-declining at 20 %. In which year should the firm switch to straight-line?`, opts:[R`Year 6`,R`Year 5`,R`Year 7`,R`Year 4`], correct:0, exp:R`t = n − 100/p + 1 = 10 − 5 + 1 = 6.`},
{q:R`Asset 30,000€, 5 years, digital (sum-of-the-years) depreciation. Amount in year 1?`, opts:[R`10,000€`,R`6,000€`,R`2,000€`,R`12,000€`], correct:0, exp:R`D = 30,000 ÷ 15 = 2,000; year 1 = 5 × 2,000 = 10,000.`},
{q:R`A taxi costs 36,000€ for an expected 300,000 km and runs 50,000 km this year. Performance-based depreciation?`, opts:[R`6,000€`,R`7,200€`,R`5,000€`,R`12,000€`], correct:0, exp:R`36,000 ÷ 300,000 = 0.12€ per km × 50,000 km = 6,000.`},
{q:R`The market value of a production machine drops below its book value, but only temporarily. Treatment?`, opts:[R`No write-down is allowed`,R`Write-down is required`,R`Write-down is optional`,R`A provision is required`], correct:0, exp:R`Fixed assets other than financial assets: write-down only if permanent (§ 253 para. 3 sentence 5); the option for temporary impairment covers financial assets only.`},
{q:R`Merchandise in stock (current assets) has a market value below cost on the balance sheet date. Treatment?`, opts:[R`Write-down is always required`,R`Write-down only if permanent`,R`Write-down is optional`,R`No write-down until sold`], correct:0, exp:R`Strict lower of cost or market principle for current assets (§ 253 para. 4 HGB).`},
{q:R`A receivable of 2,380€ gross (19 % VAT) is certainly uncollectible. Entry?`, opts:[R`Write-down 2,000 and VAT 380 to Receivables 2,380`,R`Write-down 2,380 to Receivables 2,380`,R`Doubtful receivables 2,380 to Trade receivables 2,380`,R`Write-down 2,000 to Receivables 2,000`], correct:0, exp:R`Only the net amount is an expense; the VAT is corrected because the loss is final.`},
{q:R`A doubtful receivable of 3,570€ gross; 40 % loss expected. Write-down amount?`, opts:[R`1,200€`,R`1,428€`,R`3,000€`,R`2,142€`], correct:0, exp:R`Net = 3,570 ÷ 1.19 = 3,000; 40 % = 1,200. VAT is corrected only when the loss is final.`},
{q:R`When does a trade receivable arise?`, opts:[R`When the supply is made`,R`When the invoice is written`,R`When the payment is due`,R`When the contract is signed`], correct:0, exp:R`Realisation principle: at delivery or performance; invoice and due date do not matter.`}
]},

{id:'bk-rw-10', ch:'T10', lessons:'Lesson 11', course:['bk-12','bk-13'], title:'Payments Across Periods: Advance Payments, Deferrals, Disagio & Provisions',
examWeight:'Pending transactions, advance payments with VAT, prepaid expenses and deferred income, the disagio option, and the three kinds of provisions — supports course chapters 12 and 13',
summary:R`**Pending transactions.** A contract obliges seller and buyer, but as long as neither side has performed, nothing is booked. Both claims are assumed to be equal and to have no effect on profit. Earnings arise when the supply is made, not when the contract is signed or the cash flows. Economic ownership counts, not legal title (§ 246 para. 1 sentence 2 HGB), so goods delivered under retention of title are already the buyer's asset and the seller's sale.

When performance and payment fall apart, four cases arise:
- Payment before a delivery :: advance payments made and received
- Payment before a service over time :: prepaid expenses and deferred income (RAP)
- Payment after a delivery :: trade receivables and payables
- Payment after a service :: receivables and payables

**Advance payments (payment before a delivery).** A firm that pays in advance for an asset has a real claim to delivery or refund. That claim already meets the asset criteria.
- Customer :: on-account payment (geleistete Anzahlung), an asset; shown with fixed assets (§ 266 para. 2 A.I.4 or A.II.4) if the asset will be fixed, otherwise under inventories (B.I.4), not under receivables
- Supplier :: advance payment received (erhaltene Anzahlung), a liability to deliver (C.3)

VAT is due on every advance payment (§ 13 UStG). Learn this by heart; it is not systematic. Own example: a customer pays 1,190€ in advance for goods of 1,000€ net.
- Supplier at payment :: Bank 1,190 to Advance payments received 1,000 and VAT 190
- Customer at payment :: On-account payment 1,000 and Input tax 190 to Bank 1,190
- Supplier at delivery :: Advance payments received 1,000 to Sales 1,000
- Customer at delivery :: Inventory 1,000 to On-account payment 1,000

With a partial advance (e.g. 238 = 200 + 38), the rest at delivery again includes its share of VAT (800 + 152).

**Prepaid expenses and deferred income (payment before a service over time).** Typical cases are rent, loan interest and insurance. A prepayment for a later service usually does not reduce the firm's earnings value. But its value is less tangible than an advance payment for an asset. So the law adds a condition: only prepayments for a definite period after the balance sheet date are deferred (§ 250 HGB).
- Prepaid expense (aktiver RAP) :: payment made before the date that is expense for a definite period after it
- Deferred income (passiver RAP) :: payment received before the date that is earnings for a definite period after it; released into earnings in the year the service is given

Own example: rent of 24,000€ for 1 July to 30 June is received on 1 July.
- Receipt :: Bank 24,000 to Rental earnings 24,000
- 31.12. :: Rental earnings 12,000 to Deferred income 12,000
- Next year :: Deferred income 12,000 to Rental earnings 12,000

In practice the whole payment is first booked as expense or earnings and corrected at year-end with a RAP. RAP are usually free of VAT, because rent, interest and insurance are exempt (§ 4 UStG). If the landlord has opted for VAT (§ 9), the VAT is booked at payment, like an advance payment.

**Receivables and payables (payment after the performance).** Revenue is booked at performance; the later payment is income-neutral. Receivables and payables are shown gross, including VAT (§ 266 para. 2 B.II.1 and para. 3 C.4). Liabilities are fixed in amount and timing and are valued at their settlement amount (§ 253 para. 1 sentence 2). Capital receivables (loans given) belong to the financial sphere. Trade receivables belong to the real sphere.

**Disagio (beyond the lecture).** Banks often pay out less than the amount to be repaid; the difference is the disagio. Own example: loan 200,000€, paid out 194,000€. § 250 para. 3 HGB gives an option:
- As prepaid expense :: Bank 194,000 and Prepaid expense 6,000 to Loan 200,000; the 6,000 is written off over the loan term (seen as interest paid in advance)
- As immediate expense :: Bank 194,000 and Interest expense 6,000 to Loan 200,000 (seen as a processing fee)

IFRS books the loan at the amount paid out and adds the difference over the term. This is another example of earlier profit under IFRS.

**Provisions.** Own example: an employee works in December. Three cases:
- Paid in December :: Wage expense to Bank
- Paid on 3 January :: Wage expense to Other liabilities in December; Other liabilities to Bank in January
- Paid only decades later as a pension :: Wage expense to Pension provision now; Pension provision to Bank at payment

In the third case the debt exists, but whether and how much will be paid is uncertain. § 249 para. 1 sentence 1 HGB requires a provision. Provisions for uncertain liabilities are debts whose later payment or amount is uncertain. The future payment is already recognised as expense at the balance sheet date. Like liabilities, they are recognised when the debt is economically caused, not when it is due. Forming a provision is an expense. If it was measured correctly, using it later has no effect on profit. If it was too high, the surplus becomes earnings.

The book names three kinds of provisions:
- For uncertain liabilities :: required; needs an external obligation to a third party; from the realisation principle; e.g. pensions, warranties, litigation (civil law), environmental clean-up, corporate and trade tax (public law)
- Expense provisions :: no external obligation, but future payments belong to earnings already realised; required for omitted maintenance caught up within three months of the next year, removal of overburden caught up within the next year, and goodwill warranties (§ 249 para. 1 sentence 2); not allowed under IFRS (IAS 37 needs an external obligation)
- For impending losses from pending transactions :: from the imparity principle

Warranty provisions are built like receivable allowances. Single provisions are formed where a defect is already known. General provisions cover the rest with statistical rates (e.g. 3 % of sales). A sold car whose buyer has not complained yet falls under the general provision. If a buyer without a warranty contract complains, there is no external obligation. If the firm repairs anyway to keep the customer, a goodwill provision is required.

Own impending-loss example: a firm agreed to deliver a machine next year for 120,000€ net; it will cost 130,000€ to make plus 1,000€ freight.
- Machine already finished at 130,000€ :: the value derived from the contract is 120,000 − 1,000 = 119,000 → unscheduled write-down of 11,000 on the finished good (lower of cost or market); no provision
- If 6,000€ of optional overheads were expensed instead of capitalised :: book value 124,000 → write-down 5,000; together the loss of 11,000 is anticipated
- Machine not yet produced :: nothing exists to write down → Other operating expense 11,000 to Provision for impending losses; next year the delivery is booked normally and the provision is released into other operating income

So an impending-loss provision is only formed when the loss cannot be anticipated by a write-down. Pending transactions are normally not recognised. Only an excess of obligations is.

**Book vs. course:** the course counts four categories of provisions under § 249. The book groups the same content into three kinds: maintenance, overburden and goodwill warranties together form "expense provisions". Same rules, different grouping. The disagio is **beyond the lecture**.`,
cards:[
{q:R`Advance payment received: VAT?`, a:R`Yes — VAT is due on every advance payment (§ 13 UStG): Bank to Advance payments received (net) and VAT.`},
{q:R`Prepaid expense vs deferred income`, a:R`Prepaid expense: paid before the date, expense for a definite period after it (asset side). Deferred income: received before, earnings for a definite period after (liabilities side). § 250 HGB.`},
{q:R`Disagio options (§ 250 III HGB)`, a:R`Capitalise as prepaid expense and write off over the term, or expense at once.`},
{q:R`Provision for impending losses — when?`, a:R`Only for an excess of obligations from a pending transaction that cannot be anticipated by an unscheduled write-down (no asset yet).`},
{q:R`Expense provisions that are required`, a:R`Omitted maintenance caught up within 3 months, removal of overburden within the next year, goodwill warranties (§ 249 I s. 2).`}
],
quiz:[
{q:R`A customer pays 595€ (incl. 19 % VAT) in advance for goods delivered next month. Supplier's entry at payment?`, opts:[R`Bank 595 to Advance payments received 500 and VAT 95`,R`Bank 595 to Sales revenue 500 and VAT 95`,R`Bank 595 to Advance payments received 595`,R`Nothing yet, because it is still a pending transaction`], correct:0, exp:R`An advance payment is a liability to deliver; VAT is due on advance payments (§ 13 UStG).`},
{q:R`Where does a buyer show an on-account payment for a machine it will use in production?`, opts:[R`Fixed assets (A.II.4)`,R`Under receivables (B.II)`,R`Under inventories (B.I.4)`,R`As a prepaid expense (C)`], correct:0, exp:R`It follows the later asset: a fixed asset → under fixed assets; for goods it would be inventories, never receivables.`},
{q:R`Rent of 12,000€ for October–September is received on 1 October and booked as earnings. Year-end entry?`, opts:[R`Rental earnings 9,000 to Deferred income 9,000`,R`Rental earnings 3,000 to Deferred income 3,000`,R`Deferred income 9,000 to Rental earnings 9,000`,R`Prepaid expense 9,000 to Rental earnings 9,000`], correct:0, exp:R`Nine of twelve months belong to next year: 9,000 is deferred income; 3,000 stays as earnings this year.`},
{q:R`Why is VAT usually not booked on prepaid rent, interest or insurance?`, opts:[R`These services are exempt from VAT`,R`VAT is only booked at year-end`,R`Deferrals are never subject to VAT`,R`The customer always pays the VAT later`], correct:0, exp:R`Letting, loans and insurance are VAT-exempt (§ 4 UStG). If the landlord opts for VAT (§ 9), it is booked at payment like an advance payment.`},
{q:R`A bank pays out 97,000€ on a loan of 100,000€. What does § 250 para. 3 HGB allow for the 3,000€?`, opts:[R`Option: prepaid or immediate expense`,R`Must be capitalised as a prepaid expense`,R`Must be expensed at once as interest`,R`Shown as a reduction of the liability`], correct:0, exp:R`The disagio may be capitalised and written off over the term or expensed at once; the liability is always the 100,000 to repay.`},
{q:R`A buyer complains about a defect, but there is no warranty obligation. The firm repairs anyway to keep the customer. Provision?`, opts:[R`Yes, a required goodwill provision`,R`No, as there is no external obligation`,R`Optional, at the merchant's choice`,R`Only under IFRS rules, not under HGB`], correct:0, exp:R`§ 249 para. 1 sentence 2 no. 2 HGB requires provisions for goodwill warranties without legal obligation; IFRS would not allow it.`},
{q:R`A loss-making delivery contract: the product is already finished and in stock. How is the loss anticipated?`, opts:[R`Write down the finished good`,R`Provision for impending losses`,R`Nothing until the delivery happens`,R`Deferred income for the contract price`], correct:0, exp:R`If an asset exists, the lower of cost or market principle writes it down; a provision for impending losses is formed only when no asset can be written down.`},
{q:R`A provision for warranties of 5,000€ is used for repairs costing exactly 5,000€. Effect on profit at that time?`, opts:[R`None, it was expensed when formed`,R`An expense of 5,000€ in the year of repair`,R`Earnings of 5,000€ from releasing it`,R`An expense of 10,000€ in total`], correct:0, exp:R`Forming the provision is the expense; using a correctly measured provision is income-neutral (Provision to Bank).`}
]},

{id:'bk-rw-11', ch:'T11', lessons:'Lesson 12', course:['bk-5'], title:'Equity as a Balancing Figure: Sole Trader, Partnership, Corporation',
examWeight:'Private account and extended comparison of equity, capital accounts I/II of partners, profit appropriation in a GmbH and the UG — supports course chapter 4',
summary:R`**Equity is special.** It is a liability-side stock account, but profits are booked over it:
- Every income-related transaction reaches it via the balance of the P&L account (net income or net loss)
- Income-neutral changes come from contributions and withdrawals

A contribution moves cash or assets from the owner's private wealth into the business. A withdrawal moves cash, assets or the use of assets into private wealth. Paying private bills from the business account is a withdrawal too. In corporations, contributions are capital increases. Withdrawals out of profits are dividends (profit distributions). Returning originally contributed capital is a capital reduction.

Profit by comparison of equity must remove these owner transactions (extended comparison):
- Equity at the end ./. equity at the start + withdrawals ./. contributions = result of the year

**Sole trader: the private account.** Contributions and withdrawals are booked on a private account, a sub-account of equity closed into equity. It follows equity's sides: contributions (additions) on the credit side, withdrawals (disposals) on the debit side. It only holds flows, so it has no opening or closing balance.

Own example: equity at the start 70,000€, net income 45,000€. The owner takes 15,000€ cash for living costs; his private income tax refund of 3,000€ arrives on the business bank account; he brings his private car into the business (market value 20,000€ net).
- Withdrawal :: Private 15,000 to Cash 15,000
- Tax refund :: Bank 3,000 to Private 3,000 (income tax is private, so a refund on the business account is a contribution)
- Car :: Vehicles 20,000 to Private 20,000 (a contribution in kind, sensibly at market value)
- Private account balance :: 8,000 on the credit side → Private 8,000 to Equity 8,000
- P&L :: P&L 45,000 to Equity 45,000
- Closing equity :: 70,000 + 45,000 + 8,000 = 123,000 → Equity to CBSA 123,000

**Partnerships.** In a general partnership (OHG) all partners are liable with all their wealth. In a limited partnership (KG) the general partner is fully liable and the limited partner only up to the contribution. A GbR can be either. A partnership is no legal person, so its profit belongs to the partners (transparency principle). Each partner gets an equity account and a private account.

The HGB proposes a profit split (§ 121 OHG, §§ 167–169 KG), but it is optional law. In practice the partnership agreement decides. Splitting by current equity would change constantly with every contribution and withdrawal, so firms often use two accounts per partner:
- Capital account I (fixed) :: the agreed share, the key for splitting profit; it does not change
- Capital account II (variable) :: profit shares and later contributions raise it; losses and withdrawals lower it; often bears a fixed interest

Own example: profit 101,000€. Interest of 4 % on last year's capital account II first (A: 25,000 → 1,000; B: 0 → 0). The rest of 100,000 is split by capital account I (A 300,000, B 200,000 → 60 : 40). Entry: P&L 101,000 to A capital II 61,000 and B capital II 40,000.

A limited partner's equity stays at the registered amount. His unpaid profit share is shown as another liability of the KG to him.

**Corporations.** AG and GmbH are legal persons. Liability is limited to the company's assets. The KGaA is rare (e.g. some football clubs). They have a fixed minimum subscribed capital: 50,000€ for an AG (share capital) and 25,000€ for a GmbH (registered capital). Ignoring capital reserves, equity = subscribed capital (fixed) + retained earnings (variable) (§ 266 para. 3 A).

Never confuse **provisions** (Rückstellungen, debt) with **reserves** (Rücklagen, equity).

Profit appropriation in a GmbH follows the separation principle. The profit belongs to the company, and the shareholders' meeting decides what is paid out.
- 31.12. :: P&L to Net income for the year
- 1.1. :: Net income for the year to Profit appropriation (sub-account of equity)
- Decision, own example 60 % payout of 150,000 :: Profit appropriation 150,000 to Bank 90,000 and Retained earnings 60,000

What each decision does to the balance sheet:
- Full retention :: liability swap
- Full payout :: balance sheet contraction
- Partial payout :: both at once
- No decision yet :: Profit appropriation to Profit carried forward (§ 266 para. 3 A.IV), since the sub-account itself does not appear in the statements

Retained earnings are split into legal, statutory (articles of association) and other reserves (§ 266 para. 3 A.III).

**UG (haftungsbeschränkt).** For founders without 25,000€, the MoMiG of 2008 created the mini-GmbH (§ 5a GmbHG). It can be founded with 1€ and must carry "UG (haftungsbeschränkt)" in its name. It must put 25 % of each year's net income into a legal reserve. That reserve cannot be paid out, but can be used to raise the capital. Once the capital reaches 25,000€ it may call itself a GmbH. Before that, founders often used a British Ltd. with a 1£ minimum, but then also had to file accounts in Great Britain.`,
cards:[
{q:R`Extended comparison of equity`, a:R`Equity end − equity start + withdrawals − contributions = result of the year.`},
{q:R`Sides of the private account`, a:R`Contributions credit, withdrawals debit; no opening or closing balance; closed into equity.`},
{q:R`Capital account I vs II`, a:R`I: fixed agreed share, key for the profit split. II: variable — profit shares and contributions up, losses and withdrawals down.`},
{q:R`Profit appropriation entries in a GmbH`, a:R`P&L to Net income; Net income to Profit appropriation; Profit appropriation to Bank (payout) and Retained earnings (retention), or to Profit carried forward.`},
{q:R`UG (haftungsbeschränkt)`, a:R`From 1€ capital (§ 5a GmbHG); 25 % of net income into a legal reserve until 25,000€ capital is reached.`}
],
quiz:[
{q:R`The owner's private income tax refund arrives on the business bank account. Entry?`, opts:[R`Bank to Private (contribution)`,R`Private to Bank (withdrawal)`,R`Bank to Other operating income`,R`Bank to Liability to tax office`], correct:0, exp:R`Income tax is private; money from a private matter landing in the business is a contribution.`},
{q:R`Equity start 60,000, end 85,000; withdrawals 30,000; contributions 10,000. Result of the year?`, opts:[R`45,000€`,R`25,000€`,R`5,000€`,R`65,000€`], correct:0, exp:R`85,000 − 60,000 + 30,000 − 10,000 = 45,000.`},
{q:R`Which account has no opening or closing balance?`, opts:[R`The private account`,R`The equity account`,R`Capital account I`,R`Retained earnings`], correct:0, exp:R`The private account only collects contributions and withdrawals of the year and is closed into equity.`},
{q:R`What does capital account I of a partner measure?`, opts:[R`The fixed share that splits profit`,R`The partner's current profit and losses`,R`The partner's withdrawals in the year`,R`The partner's private wealth outside`], correct:0, exp:R`Capital account I stays constant and is the key for the profit split; capital account II carries the changes.`},
{q:R`A GmbH retains its whole net income. What happens in the balance sheet?`, opts:[R`Liability swap`,R`Balance sheet contraction`,R`Balance sheet extension`,R`Asset swap on the asset side`], correct:0, exp:R`Profit appropriation falls and retained earnings rise by the same amount; a full payout would be a contraction.`},
{q:R`The shareholders' meeting has not yet decided how to use the profit. Where does it go?`, opts:[R`To profit carried forward`,R`To retained earnings as a reserve`,R`To other liabilities`,R`It stays in the P&L`], correct:0, exp:R`Profit appropriation is only a sub-account; § 266 para. 3 A.IV provides the item profit/loss carried forward.`},
{q:R`How much of its yearly net income must a UG put into the legal reserve?`, opts:[R`25 %`,R`10 %`,R`50 %`,R`5 %`], correct:0, exp:R`§ 5a para. 3 GmbHG: 25 % until the capital reaches 25,000€; the reserve cannot be distributed.`},
{q:R`Provisions vs reserves — which statement is correct?`, opts:[R`Provisions are debt, reserves are equity`,R`Both are parts of equity on the liabilities side`,R`Provisions are equity, reserves are debt`,R`Both are parts of debt`], correct:0, exp:R`Provisions (Rückstellungen) are uncertain debts; reserves (Rücklagen) belong to equity.`}
]}
];

/* booking drills worked out from the companion exercise book's topics where the course has few drills (own wording and numbers) */
BK_ACCOUNTS.push('Doubtful receivables','Write-down on receivables','Discounts received','Discounts granted','Profit appropriation','Profit carried forward','Net income for the year');
BK_TRAIN.push(
{id:'rw-1', topic:'bk-6', src:'Textbook', text:'Goods for 4,000€ net + 19 % VAT are bought on credit; 2 % cash discount if paid within 10 days. Book the delivery at the buyer (purchase account = Trading goods inventory).', lines:[['D','Trading goods inventory','4,000'],['D','Input tax','760'],['C','Trade payables','4,760']]},
{id:'rw-2', topic:'bk-6', src:'Textbook', text:'The buyer pays the 4,760€ invoice within 10 days, deducting 2 % cash discount, by bank transfer.', lines:[['D','Trade payables','4,760'],['C','Bank','4,664.80'],['C','Input tax','15.20'],['C','Discounts received','80']]},
{id:'rw-3', topic:'bk-6', src:'Textbook', text:'Seller view: a customer pays a 2,380€ invoice (incl. 19 % VAT) by bank, deducting 3 % cash discount.', lines:[['D','Bank','2,308.60'],['D','Discounts granted','60'],['D','VAT','11.40'],['C','Trade receivables','2,380']]},
{id:'rw-4', topic:'bk-9', src:'Textbook', text:'Faulty goods bought on credit for 2,000€ net + 19 % VAT are sent back to the supplier before payment.', lines:[['D','Trade payables','2,380'],['C','Trading goods inventory','2,000'],['C','Input tax','380']]},
{id:'rw-5', topic:'bk-9', src:'Textbook', text:'A customer returns unpaid goods sold for 500€ net + 19 % VAT.', lines:[['D','Sales revenue','500'],['D','VAT','95'],['C','Trade receivables','595']]},
{id:'rw-6', topic:'bk-6', src:'Textbook', text:'End of the VAT period: output VAT 12,000€, input tax 7,500€. First offset the two accounts.', lines:[['D','VAT','7,500'],['C','Input tax','7,500']]},
{id:'rw-7', topic:'bk-12', src:'Textbook', text:'Supplier view: a customer transfers an advance payment of 3,570€ (incl. 19 % VAT) for goods to be delivered next month.', lines:[['D','Bank','3,570'],['C','Advance payment received','3,000'],['C','VAT','570']]},
{id:'rw-8', topic:'bk-12', src:'Textbook', text:'Customer view of the same advance payment of 3,570€ (incl. 19 % VAT) for merchandise.', lines:[['D','On-account payment','3,000'],['D','Input tax','570'],['C','Bank','3,570']]},
{id:'rw-9', topic:'bk-12', src:'Textbook', text:'A loan of 50,000€ is credited to the bank account with a 4 % disagio withheld; the firm capitalises the disagio.', lines:[['D','Bank','48,000'],['D','Deferred expense','2,000'],['C','Loan / Liability','50,000']]},
{id:'rw-10', topic:'bk-11', src:'Textbook', text:'A customer has not paid a 5,950€ invoice (incl. 19 % VAT) despite several reminders. Move it to doubtful receivables.', lines:[['D','Doubtful receivables','5,950'],['C','Trade receivables','5,950']]},
{id:'rw-11', topic:'bk-11', src:'Textbook', text:'For the doubtful receivable of 5,950€ gross a loss of 30 % is expected at year-end. Book the write-down.', lines:[['D','Write-down on receivables','1,500'],['C','Doubtful receivables','1,500']]},
{id:'rw-12', topic:'bk-11', src:'Textbook', text:'A receivable of 1,190€ (incl. 19 % VAT) becomes finally uncollectible after the customer\'s insolvency.', lines:[['D','Write-down on receivables','1,000'],['D','VAT','190'],['C','Trade receivables','1,190']]},
{id:'rw-13', topic:'bk-5', src:'Textbook', text:'A sole trader brings his private car (market value 18,000€ net) into the business.', lines:[['D','Vehicles','18,000'],['C','Private','18,000']]},
{id:'rw-14', topic:'bk-5', src:'Textbook', text:'GmbH: the shareholders decide to pay out 40,000€ of the 100,000€ net income (already on Profit appropriation) by bank and retain the rest.', lines:[['D','Profit appropriation','100,000'],['C','Bank','40,000'],['C','Retained earnings','60,000']]},
{id:'rw-15', topic:'bk-13', src:'Textbook', text:'A firm has a loss-making delivery contract; the product is not yet made and the expected loss is 8,000€. Book at year-end.', lines:[['D','Other business expenses','8,000'],['C','Provision','8,000']]}
);
