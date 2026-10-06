/* ============================================================ BOOKKEEPING DATA — TOPICS (Prof. Cloer, slides 06.10.2026) ============================================================ */
// Plain text (no KaTeX needed). Summary markup: "- " bullets, "Term :: Description" vocab rows, "=> A (desc) → B" flows, **bold**.
const PLAN_EXAM_BK = new Date(2026,11,21); // Klausur "Bookkeeping & Accounting" + Financial Statement Analysis — 21.12.2026, 09:00–12:00

const BK_TOPICS = [
{id:'bk-1', ch:'1–2', title:'Modelling Reality & Cash-Based Accounting', examWeight:'The four pairs of terms (payments, expenditure, expenses, costs) and their derivation are classic exam material',
summary:R`Accounting models the business reality. It reduces the complex relationships of a company to a representation of its financial movements and movements of goods, in the form of money flows and service flows.

In the model the company is a black box in the real economy sector. Goods and services come in from the purchase market and go out to the sales market. In the financial sector, equity and debt providers and the government stand on both sides, supplying money and receiving payments.

What has to be modelled depends on the company type:
- Trading company :: sells goods without further processing, e.g. supermarkets and car dealers
- Industrial company :: buys raw, auxiliary and operating materials and processes them into new products, usually over several levels (unfinished goods → finished goods), e.g. clothing industry or automobile manufacturers
- Service provider :: supplies consulting, legal, communications and other services, using external factors provided by the client, e.g. tax advisor or cab driver

Accounting serves different recipients. Internal accounting informs the management, external accounting informs third parties (stakeholders).
- Internal accounting = budgetary accounting :: investment plan and budgeting work with payments in/out; cost accounting works with costs/revenues
- External accounting = financial statements under German GAAP (HGB) :: separate FS and consolidated FS work with expenses/earnings; plus the tax balance sheet

The four pairs of terms differ in which stock they change:
- Payment in / payment out :: increase/decrease of the stock of instruments of payment (cash and demand deposits, i.e. cash including bank)
- Income / expenditure :: increase/decrease of financial assets (cash and cash equivalents plus receivables minus liabilities); it is the value of the sale/purchase of material goods, intangible goods and services
- Earnings / expenses :: operational increase/decrease of equity, i.e. of financial assets and tangible assets (net assets), partly caused by legal regulations
- Revenues / costs :: revenues = valued services provided in the course of ordinary business operations; costs = valued use of goods and services caused by operational performance

Because income and expenditure are derived from pay-ins and pay-outs, financial accounting is called cash-based or pagatoric accounting.

The result is earnings ./. expenses. It splits into two parts:
- Ordinary result :: sustainably achievable result from the core business
- Neutral result :: non-operating component (e.g. speculations), extraordinary component (e.g. debt write-off, natural disaster) and prior-period component (based on valuation, e.g. sales above or below book value)

Expenses and earnings capture every value change, so their difference is the overall result (change of net assets). Costs and revenues capture only operations-related value changes, so their difference is the operating result.

Expenses and costs overlap only partly:
- Neutral expenses (expenses, but no costs) :: (1) non-operating expenses, (2) extraordinary expenses, (3) prior-period expenses
- Functional expenses = basic costs (Zweckaufwand = Grundkosten) :: expenses that are costs at the same amount
- Imputed (calculatory) costs (costs, but no expenses) :: (4) calculatory additional depreciation, (5) calculatory risks, (6) additional costs such as imputed interest on equity, imputed rent and imputed wages of management

Revenues work analogously: neutral earnings (non-operating, extraordinary or prior-period) are no revenues.

Derivation from payments to expenses (left) and earnings (right):
- Payments out + decrease of receivables − increase of receivables + increase of liabilities − decrease of liabilities = expenditures
- Expenditures − increase of tangible assets + decrease of tangible assets = expenses
- Payments in + increase of receivables − decrease of receivables + decrease of liabilities − increase of liabilities = income
- Income + increase of tangible assets − decrease of tangible assets = earnings

The single financial statement under German GAAP is an information instrument (not only) for external stakeholders and is necessary for the assessment of distribution. It contains the balance sheet and the profit & loss statement; corporations add notes and a management report.

Financial reporting under German GAAP has three central functions:
- Documentation :: done by double-entry accounting and the inventory
- Information :: done by the single financial statement (P&L, notes, balance sheet)
- Basis for distribution :: the single financial statement shows what may be distributed to owners`,
cards:[
{q:R`What does accounting model?`, a:R`The business reality, reduced to financial movements and movements of goods in the form of money and service flows. The company is a black box between purchase market, sales market, equity/debt providers and the government.`},
{q:R`Three company types and an example each`, a:R`Trading company: sells goods without processing (supermarket, car dealer). Industrial company: processes raw, auxiliary and operating materials into new products (automobile manufacturer). Service provider: uses external factors of the client (tax advisor, cab driver).`},
{q:R`Payment in / payment out`, a:R`Increase/decrease of the stock of instruments of payment: cash and demand deposits (cash including bank).`},
{q:R`Income / expenditure`, a:R`Increase/decrease of financial assets: cash and cash equivalents plus receivables minus liabilities.`},
{q:R`Earnings / expenses`, a:R`Operational increase/decrease of equity, i.e. of financial assets and tangible assets.`},
{q:R`Revenues / costs`, a:R`Revenues: valued services provided in ordinary business operations. Costs: valued use of goods and services caused by operational performance.`},
{q:R`Ordinary vs neutral result`, a:R`Ordinary: sustainably achievable result from the core business. Neutral: non-operating (speculations), extraordinary (debt write-off, natural disaster) and prior-period (sales above/below book value) components.`},
{q:R`What are neutral expenses, basic costs and imputed costs?`, a:R`Neutral expenses are expenses but no costs (non-operating, extraordinary, prior-period). Basic costs = functional expenses (expense = cost). Imputed costs are costs but no expenses (calculatory additional depreciation, calculatory risks, additional costs like imputed interest on equity, imputed rent, imputed management wages).`},
{q:R`Derive expenditures from payments out`, a:R`Payments out + decrease of receivables − increase of receivables + increase of liabilities − decrease of liabilities = expenditures.`},
{q:R`Derive expenses from expenditures`, a:R`Expenditures − increase of tangible assets + decrease of tangible assets = expenses.`},
{q:R`Three central functions of financial reporting under German GAAP`, a:R`Documentation (double-entry accounting, inventory), information and basis for distribution (single financial statement: balance sheet, P&L, notes).`},
{q:R`Which accounting areas belong to internal and which to external accounting?`, a:R`Internal (budgetary): investment plan, budgeting/financial planning, cost accounting. External (German GAAP): separate FS, consolidated FS, tax balance sheet.`}
],
quiz:[
{q:R`A company buys goods on credit. Which statement is correct at the moment of purchase?`, opts:[R`Expenditure, but no payment out`,R`Payment out, but no expenditure`,R`Expense and payment out at once`,R`Neither expenditure nor expense`], correct:0, exp:R`Buying on credit raises liabilities, so financial assets fall (expenditure) while cash is untouched (no payment out). The goods are a tangible asset, so equity is unchanged (no expense yet).`},
{q:R`A customer pays an open invoice into the bank account. What is it?`, opts:[R`Payment in, but no income`,R`Income, but no payment in`,R`Earnings and income at once`,R`Revenue, but no payment in`], correct:0, exp:R`Cash rises and receivables fall by the same amount, so financial assets (cash + receivables − liabilities) are unchanged.`},
{q:R`Imputed interest on equity in cost accounting is an example of…`, opts:[R`additional costs (costs but no expenses)`,R`neutral expenses (expenses but no costs)`,R`basic costs (functional expenses only)`,R`extraordinary expenses (neutral result)`], correct:0, exp:R`Additional costs such as imputed interest on equity, imputed rent and imputed management wages are costs with no matching expense.`},
{q:R`A loss from a natural disaster belongs to the…`, opts:[R`neutral result, extraordinary component`,R`ordinary result from the core business`,R`neutral result, prior-period component`,R`imputed costs as calculatory risks`], correct:0, exp:R`Debt write-offs and natural disasters are the extraordinary component of the neutral result.`},
{q:R`The difference between expenses and earnings is the…`, opts:[R`overall result (change of net assets)`,R`operating result (change of operations)`,R`change in cash and bank deposits only`,R`net VAT payable to the tax office`], correct:0, exp:R`Expenses/earnings capture every value change; costs/revenues only operations-related ones, giving the operating result.`},
{q:R`Which is NOT one of the three central functions of financial reporting under German GAAP?`, opts:[R`Price calculation`,R`Documentation`,R`Information`,R`Basis for distribution`], correct:0, exp:R`Price calculation is a purpose of cost accounting (internal accounting).`},
{q:R`Payments out 100, receivables increase by 30. Liabilities unchanged. Expenditures are…`, opts:[R`70`,R`130`,R`100`,R`30`], correct:0, exp:R`Payments out + decrease of receivables − increase of receivables … = 100 − 30 = 70 (e.g. 30 was an advance payment, which is a receivable).`},
{q:R`A car dealer belongs to which company type?`, opts:[R`Trading company`,R`Industrial company`,R`Service provider`,R`Financial sector`], correct:0, exp:R`Trading companies sell goods without further processing, e.g. supermarkets and car dealers.`}
]},

{id:'bk-2', ch:'3.1', title:'Merchants, Inventory & Stocktaking', examWeight:'Merchant test, inventory example and the quantity problems (fixed value, average, FIFO/LIFO) with calculations',
summary:R`The obligation to keep records follows from § 238 HGB (German Commercial Code). It applies to merchants (§ 1 HGB). There are three ways to become a merchant:
- Merchant by virtue of operations (§ 1 HGB) :: the person runs a commercial business
- Merchant by virtue of registration (§§ 2, 3, 5 HGB) :: the business is entered in the commercial register
- Merchant by virtue of legal form (§ 6 HGB) :: corporations and registered cooperatives are always merchants

The test works step by step:
=> Entrepreneur → Corporation or registered cooperative? (yes: merchant by legal form) → Commercial register entry? (yes: merchant by registration) → Commercial business operations? (yes: merchant by operations, no: no merchant) → Legal obligation to keep records (all merchants)

Freelancers are no merchants. Farmers and trade persons can become merchants by registration or by operations. A non-merchant should consider § 241a HGB, which frees small sole traders from bookkeeping.

§ 1 para. 1 HGB: "Merchant in the sense of this code is a person running a commercial business." All merchants are covered by one uniform term, regardless of their area and of their registration in the commercial register.

Running a commercial business requires:
- Independence
- Permanence
- Systematic approach
- Market presence
- Not breaching the law
- Intention of profit-making

Stocktaking and inventory are two different things:
- Stocktaking (activity) :: physical inventory of all assets and liabilities by counting, measuring, weighing
- Inventory (directory) :: list of all assets and liabilities by kind, amount and value

An inventory is prepared at the beginning of each commercial business (§ 240 para. 1 HGB) and repeated at the end of each business year (§ 240 para. 2 HGB). Simplification procedures solve the timing problem and the quantity problem.

Inventory example "Fit & Fun" (retail sport business, 31.12.01):
- A. Assets 452,450 :: fixed assets: real estate 350,000 (land 100,000 + property 250,000), equipment 3,150 (shelves, office tables, chairs); current assets: goods 65,000 (skis 54,000, ski sticks 3,000, ski boots 8,000), accounts receivable 10,700, bank deposits 17,150, cash 6,450
- B. Liabilities 280,500 :: long-term 255,000 (mortgage 80,000, loan 175,000), short-term supplier liabilities 25,500
- C. Gross equity 171,950 :: sum of assets 452,450 ./. sum of liabilities 280,500

Solutions for the timing problem:
- Annual inventory count (Stichtagsinventur) :: on the business year-end or within 10 days of it (extended inventory count), § 240 paras. 1 and 2 HGB
- Upstream/downstream inventory (vor- oder nachgelagerte Inventur) :: within two months before or three months after the year-end, § 241 para. 3 HGB
- Permanent (ongoing) stocktaking (permanente Inventur) :: § 241 para. 2 HGB
- Sample stocktaking :: statistical samples instead of a full count, § 241 para. 1 HGB

Solutions for the quantity problem:
- Permanent valuation (Festbewertung, § 240 para. 3 HGB) :: a constant fixed quantity and value; a physical count is needed every three years
- Group valuation (Gruppenbewertung, § 240 para. 4 HGB) :: similar items are valued together at the weighted average price
- Consumption sequence procedures (Verbrauchsfolgeverfahren, § 256 HGB) :: an assumed order of consumption, e.g. FIFO or LIFO

Example fixed value: a construction company uses about 5,000 control panels at about 4€ each and records them at a permanent value of 20,000€. This is in line with the law: defective panels are replaced regularly, so quantity and value stay constant and the simplification covers reality. Every three years a physical count is still required.

Example average (diesel in one tank): 10,000 l bought, 2,500 l at 0.70€ and 7,500 l at 0.80€; 1,000 l left. Because both batches are mixed, use the average price: 1,000 × (¼ × 0.70 + ¾ × 0.80) = **775€**.

Example consumption sequence (animal feed in a silo, same numbers):
- FIFO (first in, first out) :: the first purchases are consumed first, so the remaining 1,000 kg come from the last purchase at 0.80€ = **800€**
- LIFO (last in, first out) :: the last purchases are consumed first, so the remaining 1,000 kg come from the first purchase at 0.70€ = **700€**

The central tasks of external accounting so far: qualification as merchant, stocktaking/inventory, consumption fiction and the balance sheet.

Excursus banking law: banks play a decisive role in corporate financing in Germany (in the USA private investors play a stronger role).
- Three-pillar model :: cooperative banks, public-law banks (savings banks), private banks
- Three categories of banking transactions :: financing, investment, payment transactions
- Also covered :: the concept of a credit institution and banking supervision`,
cards:[
{q:R`Which provision obliges merchants to keep records?`, a:R`§ 238 HGB. Who is a merchant follows from § 1 HGB.`},
{q:R`Three ways to qualify as a merchant`, a:R`By virtue of operations (§ 1 HGB, commercial business), by virtue of registration (commercial register, §§ 2, 3, 5 HGB) and by virtue of legal form (§ 6 HGB: corporations, registered cooperatives).`},
{q:R`Six requirements of a commercial business`, a:R`Independence, permanence, systematic approach, market presence, not breaching the law, intention of profit-making.`},
{q:R`Stocktaking vs inventory`, a:R`Stocktaking is the activity: physical count by counting, measuring, weighing. The inventory is the directory: all assets and liabilities by kind, amount and value.`},
{q:R`When must an inventory be prepared?`, a:R`At the beginning of the commercial business (§ 240 para. 1 HGB) and at the end of each business year (§ 240 para. 2 HGB).`},
{q:R`Four solutions to the timing problem`, a:R`Annual count at year-end or within 10 days (extended); up/downstream inventory within 2 months before or 3 months after (§ 241 para. 3); permanent stocktaking (§ 241 para. 2); sample stocktaking (§ 241 para. 1).`},
{q:R`Three solutions to the quantity problem`, a:R`Permanent valuation (Festbewertung, § 240 para. 3), group valuation (Gruppenbewertung, § 240 para. 4), consumption sequence procedures (Verbrauchsfolgeverfahren, § 256 HGB).`},
{q:R`Is a fixed value of 20,000€ for 5,000 control panels at 4€ allowed?`, a:R`Yes. Broken panels are replaced regularly, so quantity and value stay constant. A physical count is still required every three years.`},
{q:R`Diesel: 2,500 l at 0.70€, 7,500 l at 0.80€, 1,000 l left. Value?`, a:R`Average price because the batches are mixed: 1,000 × (¼ × 0.70 + ¾ × 0.80) = 775€.`},
{q:R`Silo: first 2,500 kg at 0.70€, rest at 0.80€, 1,000 kg left. FIFO and LIFO value?`, a:R`FIFO: remaining stock is from the last purchase → 1,000 × 0.80 = 800€. LIFO: remaining stock is from the first purchase → 1,000 × 0.70 = 700€.`},
{q:R`Gross equity in the Fit & Fun inventory`, a:R`Assets 452,450 ./. liabilities 280,500 = gross equity 171,950.`},
{q:R`Three-pillar model of German banking`, a:R`Cooperative banks, public-law banks and private banks. Banking transactions: financing, investment, payment transactions.`}
],
quiz:[
{q:R`A GmbH has not yet been entered in the commercial register and runs only a small business. Is it a merchant?`, opts:[R`Yes, by virtue of its legal form`,R`No, it lacks a register entry`,R`Only if it runs a commercial business`,R`No, a GmbH is never a merchant`], correct:0, exp:R`Corporations and registered cooperatives are merchants by virtue of legal form, whatever their size.`},
{q:R`A freelance architect asks whether he must keep books under § 238 HGB.`, opts:[R`No, freelancers are no merchants`,R`Yes, every entrepreneur must`,R`Yes, once he registers a GmbH`,R`Only above 10 employees in the firm`], correct:0, exp:R`In the merchant test, freelancers lead directly to "no merchant". (Founding a GmbH would make the GmbH, not him, a merchant.)`},
{q:R`Which is NOT a requirement of a commercial business under the slides?`, opts:[R`Registration in the commercial register`,R`Permanence of the business activity`,R`Market presence of the business`,R`Intention of profit-making`], correct:0, exp:R`Registration is a separate route to merchant status; the commercial business requires independence, permanence, a systematic approach, market presence, legality and profit intention.`},
{q:R`The business year ends on 31.12. Until when may an extended annual inventory count take place?`, opts:[R`Within 10 days of the year-end`,R`Within three months after it`,R`Within two months after it`,R`Until the balance sheet is signed`], correct:0, exp:R`Extended count: within 10 days. Downstream inventory (§ 241 para. 3) allows up to three months after, upstream up to two months before.`},
{q:R`10,000 kg feed: 2,500 kg at 0.70€, 7,500 kg at 0.80€. 1,000 kg remain. LIFO value?`, opts:[R`700€`,R`800€`,R`775€`,R`750€`], correct:0, exp:R`LIFO: the last purchases are used first, so the remaining stock is from the first batch: 1,000 × 0.70 = 700€.`},
{q:R`Same feed case, FIFO. What is the value of the remaining stock?`, opts:[R`800€`,R`700€`,R`775€`,R`7,750€`], correct:0, exp:R`FIFO: the first purchases are used first, so the remaining 1,000 kg are valued at the last price 0.80€.`},
{q:R`Which procedure is regulated in § 240 para. 3 HGB?`, opts:[R`Permanent valuation (Festbewertung)`,R`Group valuation (Gruppenbewertung)`,R`Consumption sequence (FIFO/LIFO)`,R`Sample stocktaking (Stichprobe)`], correct:0, exp:R`§ 240 para. 3: permanent valuation; § 240 para. 4: group valuation; § 256: consumption sequence; § 241 para. 1: sample stocktaking.`},
{q:R`How often must assets under permanent valuation be physically counted?`, opts:[R`Every three years`,R`Every business year`,R`Never again`,R`Every five years`], correct:0, exp:R`Fixed values are allowed if quantity and value stay constant, but a physical count is required every three years.`},
{q:R`Inventory: assets 452,450, long-term liabilities 255,000, short-term 25,500. Gross equity?`, opts:[R`171,950`,R`197,450`,R`427,450`,R`280,500`], correct:0, exp:R`452,450 ./. (255,000 + 25,500) = 171,950.`}
]},

{id:'bk-3', ch:'3.2', title:'Balance Sheet & the Four Transaction Types', examWeight:'Recognise asset exchange, liability exchange, extension and contraction and redraw the balance sheet',
summary:R`The basic equation of the balance sheet is **assets = capital**. Rearranged: assets ./. borrowed capital = equity.

The two sides answer two questions:
- Asset side = application of capital :: fixed assets and current assets
- Capital side = source of capital :: equity and liabilities (borrowed capital)

The balance sheet is a time calculation: it compares assets and capital on one key date (the balance sheet date). It is prepared from the inventory and the current accounting records.

Balance sheet "Fit & Fun" as of 31.12.08 (total 452,450):
- Assets :: land and buildings 350,000, business equipment 3,150, finished goods 65,000, accounts receivable 10,700, bank 17,150, cash 6,450
- Capital :: equity 171,950, long-term liabilities 255,000, supplier liabilities 25,500

The result of the period is the operational change in equity:
- Increase in equity between two closing dates = profit for the year
- Reduction in equity between two closing dates = loss for the year
- Equity 31.12.02 ./. equity 31.12.01 = profit or loss for 02

The problem of this comparison: the level of success is visible, but not the reasons for it. That is why the profit and loss account exists. Each closing balance sheet becomes the opening balance sheet of the next year.

Every business transaction changes the balance sheet in one of four ways. Starting balance sheet 31.12.01: machinery 1,000, raw material 500, cash 200 | equity 300, liability 1,400 (total 1,700).
- Restructuring of assets (asset exchange) :: one asset up, another down, liabilities and total unchanged. Example: cash purchase of raw materials for 100 → raw material 600, cash 100, total 1,700. Also: payment of receivables
- Restructuring of liabilities (liability exchange) :: one capital item up, another down, assets and total unchanged. Example: conversion of a bond into shares, 400 → equity 700, liability 1,000, total 1,700. Also: loan restructuring
- Balance sheet extension :: assets and capital increase by the same amount. Example: purchase of raw materials on target (on credit) for 300 → raw material 800, liability 1,700, total 2,000. Also: a loan is credited to the bank account
- Balance sheet contraction :: assets and capital decrease by the same amount. Example: redemption of a loan, 200 → cash 0, liability 1,200, total 1,500

None of these four transactions touches the profit: they are income-neutral. Profit only arises when equity changes through expenses and earnings.`,
cards:[
{q:R`Basic equation of the balance sheet`, a:R`Assets = capital. Assets ./. borrowed capital = equity.`},
{q:R`What do the asset side and the capital side show?`, a:R`Asset side = application of capital (fixed and current assets). Capital side = source of capital (equity and liabilities).`},
{q:R`Why is the balance sheet a "time calculation"?`, a:R`It compares assets and capital on one key date (the balance sheet date), prepared from the inventory and current accounting records.`},
{q:R`How do you get the profit from two balance sheets, and what is the problem?`, a:R`Equity 31.12.02 ./. equity 31.12.01 = profit or loss of 02. The level of success is visible, but not its reasons.`},
{q:R`Restructuring of assets`, a:R`Asset exchange: one asset up, another down; liabilities and total unchanged. Example: cash purchase of raw materials, payment of receivables.`},
{q:R`Restructuring of liabilities`, a:R`Liability exchange: capital side items swap; assets and total unchanged. Example: loan restructuring, conversion of a bond into shares.`},
{q:R`Balance sheet extension`, a:R`Assets and liabilities increase by the same amount. Example: purchase of raw materials on target, loan credited to the bank account.`},
{q:R`Balance sheet contraction`, a:R`Assets and liabilities decrease by the same amount. Example: redemption of a loan.`},
{q:R`Machinery 1,000, raw material 500, cash 200 | equity 300, liability 1,400. Buy raw material on credit for 300. New total?`, a:R`Balance sheet extension: raw material 800, liability 1,700, total 2,000.`}
],
quiz:[
{q:R`A company buys raw materials on target (on credit). Which transaction type is this?`, opts:[R`Balance sheet extension`,R`Restructuring of assets`,R`Balance sheet contraction`,R`Restructuring of liabilities`], correct:0, exp:R`Raw materials (asset) and liabilities increase by the same amount.`},
{q:R`A customer pays an outstanding receivable by bank transfer. Which type?`, opts:[R`Restructuring of assets`,R`Balance sheet extension`,R`Restructuring of liabilities`,R`Balance sheet contraction`], correct:0, exp:R`Bank up, receivables down: both on the asset side, total unchanged.`},
{q:R`A bond of 400 is converted into shares. What happens to the balance sheet total?`, opts:[R`It stays the same`,R`It rises by 400`,R`It falls by 400`,R`It doubles to 800`], correct:0, exp:R`Liability exchange: liability −400, equity +400, assets untouched.`},
{q:R`Machinery 1,000, raw material 500, cash 200 | equity 300, liability 1,400. A loan of 200 is redeemed in cash. New total?`, opts:[R`1,500`,R`1,700`,R`1,900`,R`1,300`], correct:0, exp:R`Contraction: cash 0, liability 1,200, total 1,500.`},
{q:R`Equity was 171,950 on 31.12.01 and 190,000 on 31.12.02 (no contributions/withdrawals). Result for 02?`, opts:[R`Profit of 18,050`,R`Loss of 18,050`,R`Profit of 190,000`,R`It cannot be determined`], correct:0, exp:R`Equity increase between two closing dates = profit: 190,000 − 171,950 = 18,050.`},
{q:R`What does the capital side of the balance sheet show?`, opts:[R`The sources of capital`,R`The application of capital`,R`Only the borrowed capital`,R`The cash flows of the year`], correct:0, exp:R`Capital side = source of capital (equity + liabilities); asset side = application of capital.`},
{q:R`Main weakness of measuring success only by comparing equity on two balance sheets?`, opts:[R`The reasons for success stay hidden`,R`The amount of profit is not visible`,R`It ignores the opening balance sheet`,R`It works only for corporations`], correct:0, exp:R`The level of success is visible, but not its reasons — that is what the P&L adds.`}
]},

{id:'bk-4', ch:'3.3', title:'T-Accounts, Booking Entries & Closing', examWeight:'Core exam skill: book every transaction as "Debit … Credit …" and close accounts via CBSA and P&L',
summary:R`Double-entry accounting uses two formalities: the **T-account** (left side Debit, right side Credit) and the **booking entry** ("Debit account A … Credit account B …").

Every inventory (balance sheet) account follows one logic: opening balance + additions = disposals + closing balance. The sides depend on the account type:
- Asset accounts :: opening balance and additions on the debit side; disposals and closing balance on the credit side
- Liability (and equity) accounts :: opening balance and additions on the credit side; disposals and closing balance on the debit side

Rules for every booking:
- Each business transaction is booked twice: on one account on the debit side and on the counter account on the credit side
- The sum of all debit values must equal the sum of all credit values
- Never write a value into a T-account without first formulating the booking entry, so the counter account cannot be forgotten
- No booking without a booking entry and without a voucher

For income-neutral bookings ask three questions:
- Which accounts are addressed?
- Are they asset or liability accounts?
- Is it an addition or a disposal?

Example: purchase of a machine for 50,000€ via bank transfer. Machinery and bank are addressed, both are asset accounts, machinery has an addition and bank a disposal.
- Booking entry :: Debit Machinery 50,000 / Credit Bank 50,000
- Machinery :: opening 100,000 + 50,000 = closing 150,000
- Bank :: opening 60,000 − 50,000 = closing 10,000
- Closing entries :: Debit CBSA 150,000 / Credit Machinery 150,000 and Debit CBSA 10,000 / Credit Bank 10,000

The four transaction types as booking entries:
- Cash purchase of raw materials 100 :: Debit Raw materials / Credit Cash
- Conversion of a bond into shares 400 :: Debit Liability / Credit Equity
- Purchase of raw materials on target 300 :: Debit Raw materials / Credit Liability
- Redemption of a loan 200 :: Debit Liability / Credit Cash

Inventory accounts show an opening value. Opening balances of assets appear on the debit side, of liabilities on the credit side. Each balance sheet account is closed via the closing balance sheet account (CBSA) at the end of the year.

Careful: the counter account when opening the T-accounts is NOT the opening balance sheet itself but the **opening balance sheet account (OBSA)**. Assets are opened with Debit Asset / Credit OBSA, liabilities with Debit OBSA / Credit Liability.

=> Opening balance sheet → OBSA (opens every account) → Asset and liability accounts (bookings during the year) → CBSA (closes every account) → Closing balance sheet

Profit and loss accounts work differently:
- They show no initial values, so they are not opened via the OBSA; they collect the sums of expenses and earnings
- Expense and earnings accounts are closed via the P&L account
- The P&L account is closed via the equity account
- Example earnings :: renting out office buildings (rental earnings)
- Example expenses :: making use of a credit (interest expense)

Expense accounts book additions on the debit side; earnings accounts book additions on the credit side. In the P&L account expenses stand on the debit side and earnings on the credit side; a net profit is the balancing figure on the debit side and goes to the credit side of equity.

Example rental earnings: bank opens with 10,000, equity with 10,000. Rent of 50,000 is received.
- Booking entry :: Debit Bank 50,000 / Credit Rental earnings 50,000
- Close the earnings account :: Debit Rental earnings 50,000 / Credit P&L 50,000
- Close the bank account :: Debit CBSA 60,000 / Credit Bank 60,000
- Close the P&L :: Debit P&L 50,000 / Credit Equity 50,000
- Result :: equity rises from 10,000 to 60,000, matching bank 60,000`,
cards:[
{q:R`Two formalities of double-entry accounting`, a:R`The T-account (Debit | Credit) and the booking entry (Debit … Credit …).`},
{q:R`Basic logic of every inventory account`, a:R`Opening balance + additions = disposals + closing balance.`},
{q:R`Where are additions and the opening balance on asset vs liability accounts?`, a:R`Asset accounts: opening balance and additions on the debit side. Liability accounts: opening balance and additions on the credit side.`},
{q:R`Golden rule of booking`, a:R`No booking without a booking entry and without a voucher. Each transaction is booked twice; debit sum = credit sum.`},
{q:R`Three questions for income-neutral bookings`, a:R`Which accounts are addressed? Asset or liability accounts? Addition or disposal?`},
{q:R`Machine bought for 50,000 by bank transfer — booking entry?`, a:R`Debit Machinery 50,000 / Credit Bank 50,000.`},
{q:R`Counter account when opening the balance sheet accounts?`, a:R`The opening balance sheet account (OBSA), not the opening balance sheet. Assets: Debit Asset / Credit OBSA. Liabilities: Debit OBSA / Credit Liability.`},
{q:R`How is a balance sheet account closed?`, a:R`Via the closing balance sheet account (CBSA). Asset: Debit CBSA / Credit Asset. Liability: Debit Liability / Credit CBSA.`},
{q:R`How are P&L accounts opened and closed?`, a:R`They have no opening values (no OBSA). Expense and earnings accounts are closed via the P&L account; the P&L is closed via the equity account.`},
{q:R`Rent of 50,000 received by bank — all entries to close the year`, a:R`Debit Bank / Credit Rental earnings 50,000. Debit Rental earnings / Credit P&L 50,000. Debit P&L / Credit Equity 50,000. Debit CBSA / Credit Bank (closing balance).`},
{q:R`Where is a net profit in the P&L account and where does it go?`, a:R`Balancing figure on the debit side of the P&L, transferred to the credit side of equity (Debit P&L / Credit Equity).`}
],
quiz:[
{q:R`Raw materials are bought for 100 in cash. Correct booking entry?`, opts:[R`Debit Raw materials / Credit Cash`,R`Debit Cash / Credit Raw materials`,R`Debit Raw materials / Credit Equity`,R`Debit Expense / Credit Cash 100`], correct:0, exp:R`Addition on an asset account = debit; disposal on the cash asset account = credit.`},
{q:R`A loan of 200 is redeemed in cash. Correct booking entry?`, opts:[R`Debit Liability / Credit Cash`,R`Debit Cash / Credit Liability`,R`Debit Expense / Credit Cash`,R`Debit Liability / Credit Equity`], correct:0, exp:R`Disposal on a liability account = debit; disposal on an asset account = credit.`},
{q:R`On which side of an asset account is the opening balance?`, opts:[R`Debit side`,R`Credit side`,R`Either side`,R`It has none`], correct:0, exp:R`Assets: opening balance and additions on the debit side; liabilities on the credit side.`},
{q:R`The counter account for opening the T-accounts is…`, opts:[R`the opening balance sheet account (OBSA)`,R`the opening balance sheet itself`,R`the closing balance sheet account (CBSA)`,R`the profit and loss account (P&L)`], correct:0, exp:R`The slides stress: it is NOT the opening balance sheet but the OBSA.`},
{q:R`How is the closing balance of the bank account (asset) booked at year-end?`, opts:[R`Debit CBSA / Credit Bank`,R`Debit Bank / Credit CBSA`,R`Debit P&L / Credit Bank`,R`Debit Bank / Credit Equity`], correct:0, exp:R`Asset accounts have their closing balance on the credit side, the counter entry goes to the debit of the CBSA.`},
{q:R`How is the rental earnings account closed?`, opts:[R`Debit Rental earnings / Credit P&L`,R`Debit P&L / Credit Rental earnings`,R`Debit CBSA / Credit Rental earnings`,R`Debit Rental earnings / Credit Equity`], correct:0, exp:R`Earnings and expense accounts are closed via the P&L; the earnings balance moves to the credit side of the P&L.`},
{q:R`The P&L shows a net profit of 50,000. Closing entry?`, opts:[R`Debit P&L / Credit Equity`,R`Debit Equity / Credit P&L`,R`Debit P&L / Credit CBSA`,R`Debit CBSA / Credit P&L`], correct:0, exp:R`The P&L is closed via the equity account; a profit increases equity (credit).`},
{q:R`Why are expense and earnings accounts not opened via the OBSA?`, opts:[R`They show no initial values`,R`They are closed via the CBSA`,R`They are balance sheet accounts`,R`They are only used by corporations`], correct:0, exp:R`P&L accounts only collect the sums of expenses and earnings of the period.`}
]},

{id:'bk-5', ch:'4', title:'Equity: Private Account, Partnerships & Corporations', examWeight:'Private account closing, equity per partner and the GmbH profit distribution entries',
summary:R`If many contributions and withdrawals are made, booking them directly to the equity account is confusing. In practice a **private account** is used instead. It is a sub-account of the equity account and is closed via the equity account.
- Private account :: withdrawals on the debit side, contributions on the credit side; the balance (private balance) is transferred to equity
- Equity account :: debit side: withdrawals (private balance), a net loss and the closing balance; credit side: opening balance, net income and contributions
- P&L account :: expenses on the debit side, earnings on the credit side; the net income or loss goes to equity

Partnerships (e.g. OHG):
- They are no legal entities, i.e. they have no legal personality of their own (irrespective of the number of members)
- They are a community of joint ownership, with rights and obligations for all shareholders (not only tenancy in common)
- They have so-called partial legal capacity
- Net income and equity must be allocated to the shareholders, so each shareholder has his own equity account

Example Müller-Maier-Schulze OHG, closing balance sheet 31.12.02 with a net income of 400:
- Equity Müller :: 800 + net income 200 = 1,000
- Equity Maier :: 400 + net income 100 = 500
- Equity Schulze :: 400 + net income 100 = 500

Corporations (e.g. GmbH, AG):
- They have their own legal personality (irrespective of the number of members)
- They have a fixed minimum capital that may not fall below a legally defined limit: the subscribed capital
- If capital reserves are neglected, equity consists of subscribed capital (fixed amount) and retained earnings (variable amount)

Example X-GmbH, balance sheet 31.12.01: subscribed capital 100,000, retained earnings 50,000. A net income of 400,000 is achieved. The balance of the P&L account is first booked to the equity account "net income". Since the corporation is a legal entity in its own right, this is its own profit.

For the profit to become a dividend, the shareholders' meeting must decide on the profit distribution.
=> P&L (net income 400,000) → Equity account "net income" (31.12.01) → Profit distribution account (1.1.02: Debit Equity / Credit Profit distribution) → Shareholders' meeting decides → Retained earnings (fully retained) or Bank (fully distributed)

- At the beginning of the new fiscal year an adjusting entry moves the net income to the profit distribution account, a sub-account of equity :: Debit Equity (net income) 400,000 / Credit Profit distribution 400,000
- Full retention :: Debit Profit distribution / Credit Retained earnings, so retained earnings become 450,000
- Full distribution :: the company's cash is reduced: Debit Profit distribution / Credit Bank

Chapter 5 (components of single and consolidated financial statements, disclosure and audit) is discussed in the upcoming semester.`,
cards:[
{q:R`Why use a private account?`, a:R`Many contributions and withdrawals booked directly to equity would be confusing. The private account is a sub-account of equity and is closed via equity.`},
{q:R`Sides of the private account`, a:R`Withdrawals on the debit side, contributions on the credit side; the private balance goes to the equity account.`},
{q:R`Four features of partnerships`, a:R`No legal entity (no own legal personality), community of joint ownership, partial legal capacity, net income and equity allocated to the shareholders — one equity account per shareholder.`},
{q:R`Three features of corporations`, a:R`Own legal personality; fixed minimum capital (subscribed capital) that may not fall below a legal limit; equity = subscribed capital (fixed) + retained earnings (variable), ignoring capital reserves.`},
{q:R`Where does a GmbH's net income go first?`, a:R`From the P&L to the equity account "net income". It is the corporation's own profit because it is a legal entity.`},
{q:R`Entry at the start of the new year for the GmbH's profit`, a:R`Debit Equity (net income) / Credit Profit distribution. The profit distribution account is a sub-account of equity.`},
{q:R`Who decides whether a GmbH profit becomes a dividend?`, a:R`The shareholders' meeting decides on the profit distribution; afterwards the profit distribution account is dissolved.`},
{q:R`Entries for full retention vs full distribution`, a:R`Retention: Debit Profit distribution / Credit Retained earnings. Distribution: Debit Profit distribution / Credit Bank.`},
{q:R`OHG: Müller 800, Maier 400, Schulze 400; net income 400 split 200/100/100. Equity accounts?`, a:R`Müller 1,000, Maier 500, Schulze 500.`}
],
quiz:[
{q:R`The owner of a sole proprietorship withdraws cash for private use. Which account is debited?`, opts:[R`Private account`,R`P&L account`,R`Other expenses`,R`Retained earnings`], correct:0, exp:R`Withdrawals are booked on the debit side of the private account (Debit Private / Credit Cash). They are not expenses.`},
{q:R`How is the private account closed?`, opts:[R`Via the equity account`,R`Via the P&L account first`,R`Via the CBSA directly`,R`It is never closed at all`], correct:0, exp:R`The private account is a sub-account of equity and is closed via the equity account.`},
{q:R`Why does each partner of an OHG have his own equity account?`, opts:[R`Net income and equity are allocated to each partner`,R`The OHG is a legal entity with its own legal personality`,R`The OHG has a fixed subscribed capital to protect`,R`The tax office requires one account per partner`], correct:0, exp:R`Partnerships have no legal personality; net income and equity belong to the partners and are allocated to them.`},
{q:R`Which statement about corporations is correct?`, opts:[R`Their subscribed capital may not fall below a limit`,R`They have no legal personality of their own at all`,R`Each shareholder has a separate equity account of his own`,R`Their equity consists only of retained earnings`], correct:0, exp:R`Corporations have own legal personality and a fixed minimum (subscribed) capital.`},
{q:R`X-GmbH (subscribed 100,000, retained 50,000) fully retains a net income of 400,000. Retained earnings afterwards?`, opts:[R`450,000`,R`400,000`,R`550,000`,R`50,000`], correct:0, exp:R`50,000 + 400,000 = 450,000 (Debit Profit distribution / Credit Retained earnings).`},
{q:R`On 1.1.02 the GmbH's net income is transferred for the profit distribution decision. Entry?`, opts:[R`Debit Equity / Credit Profit distribution`,R`Debit Profit distribution / Credit Equity`,R`Debit P&L / Credit Profit distribution`,R`Debit Profit distribution / Credit Bank`], correct:0, exp:R`At the start of the new year the net income moves from the equity account to the profit distribution account.`},
{q:R`The shareholders' meeting decides to distribute the full profit. Entry?`, opts:[R`Debit Profit distribution / Credit Bank`,R`Debit Bank / Credit Profit distribution`,R`Debit Retained earnings / Credit Bank`,R`Debit Profit distribution / Credit P&L`], correct:0, exp:R`A full distribution reduces the company's cash: Debit Profit distribution / Credit Bank.`}
]},

{id:'bk-6', ch:'6', title:'Value Added Tax (VAT)', examWeight:'Slide says "Remember (also for the exam)": VAT facts, input tax vs output VAT and the closing entries',
summary:R`VAT is prescribed by European law in almost all details. The harmonization mandate serves the free movement of goods and services and the promotion of the single market. It is a complex area of tax law. The VAT liability arises for the entrepreneur, who passes the tax on to the end consumer.

Three terms make up the mechanism:
- Input tax (input VAT) :: VAT the entrepreneur pays to other entrepreneurs for deliveries and other services. It is a receivable from the tax authority. Booking: Debit Input tax
- VAT (output VAT) :: VAT the entrepreneur collects from customers. It is a liability to the tax authority. Booking: Credit VAT
- Net VAT payable :: VAT payable to the tax authority after deducting input tax from VAT. VAT is an indirect tax borne by the end consumer

Example chain (19%):
- Manufacturer E1 :: sells for 100 + 19 VAT, pays 19 to the tax office
- Wholesaler E2 :: sells for 200 + 38 VAT, deducts 19 input tax, pays 19
- Retailer E3 :: sells for 250 + 47.50 VAT, deducts 38 input tax, pays 9.50
- Result :: the final consumer is charged with 47.50; E1, E2 and E3 pay it to the tax office in parts (19 + 19 + 9.50)

Remember (also for the exam):
- Tax on the net price of deliveries and other services of an enterprise
- Joint tax :: Federation 45.1%, States 51.2%, municipalities 3.7%
- Indirect tax :: debtor of the tax and bearer of the tax are not identical
- General consumption tax, harmonised within the EU
- One of the most important revenue sources in Germany, ranking 2nd after wage tax
- Regular rate 19%, reduced rate 7%

Example Casimir: the computer retailer Casimir sells a computer to Emil, an end user, for 1,190€. Emil pays in installments over three months from 05.01; Casimir retains ownership until full payment. Casimir bought the computer for 800€ net from a wholesaler. The installments and the retention of title do not postpone the VAT, which arises with the sale.
- Purchase :: Debit Inventory 800, Debit Input tax 152 / Credit Bank 952
- Sale :: Debit Trade receivables 1,190 / Credit Sales 1,000, Credit VAT 190
- Close the input tax account :: Debit VAT 152 / Credit Input tax 152
- Pay the remaining VAT :: Debit VAT 38 / Credit Bank 38

At the end of a period (preliminary self-assessment) the VAT and input tax accounts are offset. The general entry is Debit VAT / Credit Input tax.
- VAT balance higher than input tax :: the input tax account is closed into the VAT account, which results in a net VAT payable; closing entry Debit VAT / Credit CBSA
- Input tax balance higher than VAT :: the VAT account is closed into the input tax account, which results in an excess input tax (a receivable); closing entry Debit CBSA / Credit Input tax`,
cards:[
{q:R`Input tax vs VAT (output VAT)`, a:R`Input tax: VAT paid to other entrepreneurs, a receivable from the tax authority (debit). VAT: collected from customers, a liability to the tax authority (credit).`},
{q:R`What is the net VAT payable?`, a:R`VAT minus input tax, paid to the tax authority. The economic burden lies with the end consumer (indirect tax).`},
{q:R`VAT chain: 100+19 → 200+38 → 250+47.50. What does each pay?`, a:R`Manufacturer 19, wholesaler 38 − 19 = 19, retailer 47.50 − 38 = 9.50. Total 47.50 = charged to the final consumer.`},
{q:R`VAT facts to remember for the exam`, a:R`Tax on the net price of deliveries and other services; joint tax (Federation 45.1%, States 51.2%, municipalities 3.7%); indirect tax; general consumption tax; harmonised within the EU; 2nd biggest revenue source after wage tax; 19% regular, 7% reduced.`},
{q:R`Why is VAT an indirect tax?`, a:R`The debtor of the tax (the entrepreneur) and the bearer of the tax (the end consumer) are not identical.`},
{q:R`Purchase of goods for 800 net by bank — entry?`, a:R`Debit Inventory 800, Debit Input tax 152 / Credit Bank 952.`},
{q:R`Sale for 1,190 gross on credit — entry?`, a:R`Debit Trade receivables 1,190 / Credit Sales 1,000, Credit VAT 190.`},
{q:R`Closing entries when VAT exceeds input tax`, a:R`Debit VAT / Credit Input tax (close input tax into VAT), then Debit VAT / Credit CBSA (net VAT payable) — or Debit VAT / Credit Bank when paid.`},
{q:R`Closing entries when input tax exceeds VAT`, a:R`Close the VAT account into the input tax account; the excess input tax is a receivable: Debit CBSA / Credit Input tax.`}
],
quiz:[
{q:R`Input tax is, from the company's point of view…`, opts:[R`a receivable from the tax authority`,R`a liability to the tax authority (VAT)`,R`an expense shown in the P&L account`,R`part of the acquisition costs`], correct:0, exp:R`Input tax can be deducted from VAT, so it is a receivable (debit side).`},
{q:R`Wholesaler buys for 100 + 19 VAT and sells for 200 + 38 VAT. Payload to the tax office?`, opts:[R`19`,R`38`,R`57`,R`9.50`], correct:0, exp:R`38 collected VAT ./. 19 input tax = 19.`},
{q:R`How is VAT revenue shared in Germany according to the slides?`, opts:[R`Federation 45.1%, States 51.2%, municipalities 3.7%`,R`Federation 51.2%, States 45.1%, municipalities 3.7%`,R`Federation 50%, States 45%, municipalities 5%`,R`Federation 100%, as it is a harmonised EU tax`], correct:0, exp:R`VAT is a joint tax: Federation 45.1%, States 51.2%, municipalities 3.7%.`},
{q:R`Which tax brings Germany more revenue than VAT?`, opts:[R`Wage tax`,R`Trade tax`,R`Corporate tax`,R`Solidarity surcharge`], correct:0, exp:R`VAT ranks 2nd after wage tax.`},
{q:R`Casimir sells a computer for 1,190€ gross on installments. Booking entry for the sale?`, opts:[R`Debit Receivables 1,190 / Credit Sales 1,000, Credit VAT 190`,R`Debit Receivables 1,000 / Credit Sales 1,000 (no VAT yet)`,R`Debit Bank 1,190 / Credit Sales 1,000, Credit VAT 190`,R`Debit Receivables 1,190 / Credit Sales 1,190`], correct:0, exp:R`VAT arises with the sale; installments and retention of title do not postpone it.`},
{q:R`VAT account 190, input tax account 152. Which entry closes input tax?`, opts:[R`Debit VAT 152 / Credit Input tax 152`,R`Debit Input tax 152 / Credit VAT 152`,R`Debit CBSA 152 / Credit Input tax 152`,R`Debit VAT 38 / Credit Input tax 38`], correct:0, exp:R`If VAT is higher, the input tax account is closed into the VAT account; 38 remain payable.`},
{q:R`Input tax exceeds VAT at year-end. Closing entry for the excess?`, opts:[R`Debit CBSA / Credit Input tax`,R`Debit VAT / Credit CBSA`,R`Debit Input tax / Credit CBSA`,R`Debit P&L / Credit Input tax`], correct:0, exp:R`An excess input tax is a receivable; it is shown on the asset side via Debit CBSA / Credit Input tax.`},
{q:R`Which statement about VAT is FALSE?`, opts:[R`Debtor and bearer of the tax are identical`,R`It is a general consumption tax`,R`It is harmonised within the whole EU`,R`It is levied on the net price of services`], correct:0, exp:R`VAT is an indirect tax: the entrepreneur owes it, the end consumer bears it.`}
]},

{id:'bk-7', ch:'7', title:'Valuation Principles of German GAAP', examWeight:'Prudence, realization and imparity principle with the bike example',
summary:R`The **principle of prudence** is the central measurement principle. It is made concrete by two principles: the realization principle and the imparity principle.

Realization principle: profits are shown only at the time of realization.
- Earnings are booked only at the time of economic realization, e.g. the sale or use of a good
- Expenses are booked only at the time of economic realization, i.e. when the return service is received (e.g. wages, rental fee) or when the corresponding earning is booked (e.g. sale or use of a good/service)

Imparity principle: losses are recognised at the time they impend, before they are realised:
- Unscheduled impairment in the value of an asset
- Contingent losses from pending transactions

Gains and losses are therefore treated unequally ("imparity"): unrealised gains are ignored, unrealised losses are anticipated.

Example bike: X buys a bike for 600€ for his retail store (opening balance sheet: bike 600 | equity 280, liabilities 320).
- Fair value rises to 700€ at year-end :: the bike stays at 600 (acquisition cost). The gain of 100 is not realised, so it may not be shown
- Fair value falls to 500€ at year-end :: the bike is written down to 500. The impending loss of 100 is shown now and reduces equity

The measurement system for assets follows from both principles:
- Upper limit :: historical value (acquisition or production costs)
- Lower limit :: fair value (market value at the closing date)
- Comparison :: if fair value < acquisition or production cost, an unscheduled depreciation down to the lower value is made

=> Compare fair value with historical cost → Fair value higher (keep historical cost, no gain) → Fair value lower (unscheduled depreciation to fair value)`,
cards:[
{q:R`Central measurement principle of German GAAP`, a:R`The principle of prudence, made concrete by the realization principle and the imparity principle.`},
{q:R`Realization principle`, a:R`Profits are shown only when realised: earnings at economic realization (sale/use of a good); expenses when the return service is received (wages, rent) or the corresponding earning is booked.`},
{q:R`Imparity principle`, a:R`Losses are recognised when they impend: unscheduled impairment of an asset and contingent losses from pending transactions.`},
{q:R`Bike bought for 600, fair value 700 at year-end. Balance sheet value?`, a:R`600. Historical cost is the upper limit; the unrealised gain may not be shown.`},
{q:R`Bike bought for 600, fair value 500 at year-end. Balance sheet value?`, a:R`500. Unscheduled depreciation of 100 because the loss impends (imparity principle).`},
{q:R`Upper and lower limit in the measurement of assets`, a:R`Upper limit: historical value (acquisition/production costs). Lower limit: fair value (market value at the closing date).`}
],
quiz:[
{q:R`A share bought for 1,000 has a market value of 1,300 on the closing date. Balance sheet value?`, opts:[R`1,000`,R`1,300`,R`1,150`,R`Either, as the firm chooses`], correct:0, exp:R`Realization principle: unrealised gains are not shown; historical cost is the upper limit.`},
{q:R`Goods bought for 600 have a fair value of 500 at year-end. What must happen?`, opts:[R`Unscheduled depreciation to 500`,R`Nothing until the goods are sold`,R`A provision of 100 is formed instead`,R`Write-up to 600 next year only`], correct:0, exp:R`Imparity principle: impending losses are recognised now; fair value is the lower limit.`},
{q:R`Which principle requires anticipating losses from pending transactions?`, opts:[R`Imparity principle`,R`Realization principle`,R`Matching of cash flows`,R`Going-concern principle`], correct:0, exp:R`Imparity: losses are recognised when they impend — unscheduled impairments and contingent losses from pending transactions.`},
{q:R`When is a rental expense booked under the realization principle?`, opts:[R`When the return service is received`,R`When the rent is paid in cash or by bank`,R`When the rental contract is signed`,R`At the end of the rental contract`], correct:0, exp:R`Expenses are booked at economic realization, e.g. when the service (use of the premises) is received.`},
{q:R`Why is the imparity principle called "imparity"?`, opts:[R`Unrealised gains and losses are treated unequally`,R`Assets and liabilities are valued unequally`,R`Debit and credit sums may be unequal at year-end`,R`It applies only to some legal forms of companies`], correct:0, exp:R`Unrealised gains are ignored, unrealised (impending) losses are anticipated — both follow from prudence.`}
]},

{id:'bk-8', ch:'8', title:'Acquisition Costs', examWeight:'Scheme of § 255 para. 1 HGB and the cash discount booking (2% of 1,000 net)',
summary:R`Assets are recognised at acquisition or production costs (historical costs) as the upper limit (§ 253 para. 1 HGB). Acquisition costs are defined in § 255 para. 1 HGB, production costs in § 255 para. 2 HGB.

Scheme of acquisition costs (§ 255 para. 1 HGB):
- Price of acquisition :: generally without VAT, because input tax is a receivable
- + Ancillary costs :: only unit costs that can be assigned directly (e.g. freight, installation, notary)
- ./. Price reductions :: rebates, cash discounts, bonuses
- + Set-up expenditures :: only unit costs, to make the asset ready for operation
- + Subsequent acquisition costs :: e.g. later development
- = Acquisition costs

Price reductions reduce the acquisition costs. Typical ones:
- Rebates :: confirmed directly at purchase; they reduce the selling price
- Cash discounts :: provided only if the invoice is settled within a certain period (credit purchase)
- Bonus :: incentive for large sales volumes within a pre-defined period

Example cash discount: you buy a computer for 1,000€ net in t=0. A 2% cash discount is offered if the invoice is settled within 14 days (t=1).
- Booking in t=0 :: Debit Factory and office equipment 1,000, Debit Input tax 190 / Credit Trade payables 1,190
- Settlement in period 2 (without discount) :: Debit Trade payables 1,190 / Credit Bank 1,190
- Settlement in period 1 (with discount) :: Debit Trade payables 1,190 / Credit Factory and office equipment 20.00, Credit Input tax 3.80, Credit Bank 1,166.20

The discount of 2% on the gross amount (23.80) is split: 20 reduces the acquisition costs of the computer (now 980) and 3.80 corrects the input tax.`,
cards:[
{q:R`Scheme of acquisition costs (§ 255 para. 1 HGB)`, a:R`Price of acquisition (without VAT) + ancillary costs (unit costs only) ./. price reductions + set-up expenditures (unit costs only) + subsequent acquisition costs = acquisition costs.`},
{q:R`Where are acquisition and production costs defined?`, a:R`Acquisition costs: § 255 para. 1 HGB. Production costs: § 255 para. 2 HGB. They are the upper limit (§ 253 para. 1 HGB).`},
{q:R`Why is VAT generally not part of the acquisition costs?`, a:R`Input tax is a receivable from the tax authority and can be deducted, so it is booked separately on the input tax account.`},
{q:R`Rebate vs cash discount vs bonus`, a:R`Rebate: granted at purchase, reduces the price. Cash discount: only if the invoice is paid within a period (credit purchase). Bonus: incentive for large sales volumes in a pre-defined period.`},
{q:R`Computer 1,000 net + 19% VAT, 2% discount used. Payment entry?`, a:R`Debit Trade payables 1,190 / Credit Factory and office equipment 20, Credit Input tax 3.80, Credit Bank 1,166.20.`},
{q:R`Final acquisition cost of the computer after the 2% discount?`, a:R`980€ (1,000 − 20).`}
],
quiz:[
{q:R`Machine price 10,000 net, freight 500, installation 300, rebate 1,000. Acquisition costs?`, opts:[R`9,800`,R`10,800`,R`9,000`,R`11,662`], correct:0, exp:R`10,000 + 500 + 300 − 1,000 = 9,800 (VAT not included).`},
{q:R`Which item reduces the acquisition costs?`, opts:[R`A cash discount used on payment`,R`Freight paid for the delivery`,R`Set-up costs of the machine`,R`Subsequent development costs`], correct:0, exp:R`Price reductions (rebates, cash discounts, bonuses) reduce acquisition costs.`},
{q:R`Computer for 1,000 net, 2% discount used. How much is paid by bank?`, opts:[R`1,166.20`,R`1,170.00`,R`1,190.00`,R`980.00`], correct:0, exp:R`1,190 × 0.98 = 1,166.20.`},
{q:R`In the discount entry, which account is credited with 3.80?`, opts:[R`Input tax`,R`VAT (output)`,R`Trade payables`,R`Discount earnings`], correct:0, exp:R`The discount reduces the net price by 20 and the input tax by 3.80.`},
{q:R`Which ancillary costs may be included in acquisition costs?`, opts:[R`Only unit costs assignable to the asset`,R`All overheads of the purchasing department`,R`Any cost, as long as it is paid in cash`,R`Only costs that also include VAT`], correct:0, exp:R`Ancillary and set-up expenditures count only as unit costs.`},
{q:R`A cash discount is characterised by…`, opts:[R`payment within a certain period`,R`a large volume over a whole year`,R`a reduction confirmed at purchase`,R`a refund for defective goods`], correct:0, exp:R`Cash discounts are granted only if the invoice is settled in time; volume incentives are bonuses, price cuts at purchase are rebates.`}
]},

{id:'bk-9', ch:'9', title:'Merchandise Account', examWeight:'Mixed vs separate merchandise accounts, gross vs net method with the 1,000/1,400/2,250/600 example',
summary:R`Example used throughout:
- Opening balance :: 100 pieces at 10€ = 1,000€
- Additions (purchase) :: 100 pieces at 14€ = 1,400€
- Disposals (sales) :: 150 pieces at 15€ = 2,250€
- Closing balance :: 50 pieces at 12€ = 600€

**Mixed merchandise account:** one account holds both stock and sales. Debit: opening balance 1,000 + additions 1,400 = 2,400. Credit: disposals at sales prices 2,250 + closing balance 600 = 2,850. The account only balances with the **gross profit of 450** on the debit side. Stock values and success are mixed in one account.

**Separate merchandise accounts** split stock and sales. The principle:
- Price − expense per piece = profit per piece
- (Price − expense per piece) × quantity = gross profit
- Sales revenue − costs of purchase = gross profit

Inventory account: opening balance 1,000 + additions 1,400 = closing balance 600 (as per stocktaking) + input of merchandise 1,800 (balancing figure). Merchandise sales account: disposals (sales revenue) 2,250.

The two accounts reach the P&L in two ways:
- Gross method :: input of merchandise 1,800 and sales revenue 2,250 both appear in the P&L; net income 450
- Net method :: the input of merchandise 1,800 is booked against the merchandise sales account; only the gross profit of 450 goes to the P&L; net income 450

Both methods give the same net income. The gross method shows more information (sales volume and cost of goods sold), the net method only the gross profit.`,
cards:[
{q:R`What is the problem of a mixed merchandise account?`, a:R`It mixes stock values (at cost) and sales (at sales prices); the gross profit only appears as a balancing figure.`},
{q:R`OB 1,000, purchases 1,400, sales 2,250, CB 600. Gross profit?`, a:R`Input of merchandise = 1,000 + 1,400 − 600 = 1,800. Gross profit = 2,250 − 1,800 = 450.`},
{q:R`How is the input of merchandise found on the separate inventory account?`, a:R`As balancing figure: opening balance + additions − closing balance (per stocktaking).`},
{q:R`Gross method vs net method`, a:R`Gross: input of merchandise and sales revenue both shown in the P&L. Net: input is offset on the sales account, only the gross profit goes to the P&L. Same net income.`},
{q:R`Basic principle of separate merchandise accounts`, a:R`Sales revenue − costs of purchase = gross profit, i.e. (price − expense per piece) × quantity.`}
],
quiz:[
{q:R`OB 1,000, additions 1,400, CB per stocktaking 600. Input of merchandise?`, opts:[R`1,800`,R`2,400`,R`1,400`,R`2,250`], correct:0, exp:R`1,000 + 1,400 − 600 = 1,800.`},
{q:R`Sales 2,250, input of merchandise 1,800. What appears in the P&L under the net method?`, opts:[R`Only the gross profit of 450`,R`Input 1,800 and sales 2,250`,R`Only sales revenue of 2,250`,R`Closing stock of 600 only`], correct:0, exp:R`Net method: input is offset against sales on the merchandise sales account; only the gross profit is transferred.`},
{q:R`Which method shows input of merchandise and sales revenue separately in the P&L?`, opts:[R`Gross method`,R`Net method`,R`Mixed merchandise account`,R`Group valuation method`], correct:0, exp:R`The gross method presents both in the P&L.`},
{q:R`In a mixed merchandise account the gross profit appears…`, opts:[R`as the balancing figure`,R`on a separate sales account`,R`only in the notes`,R`not at all`], correct:0, exp:R`Debit 2,400 vs credit 2,850 — the gross profit 450 closes the gap.`},
{q:R`Do the gross and net methods lead to different net incomes?`, opts:[R`No, both give the same net income`,R`Yes, the gross method is higher`,R`Yes, the net method is higher`,R`Only if the stock values differ`], correct:0, exp:R`They differ only in presentation; both lead to net income 450.`}
]},

{id:'bk-10', ch:'10', title:'Production Costs & P&L Methods', examWeight:'Components of § 255 para. 2 HGB and why both P&L methods give the same profit (100 produced, 50 sold)',
summary:R`According to § 253 para. 1 sentence 1 HGB, assets are valued at their acquisition or production costs (historical value) at the most. Acquisition costs are defined in § 255 para. 1 HGB, production costs in § 255 para. 2 HGB.

Components of production costs:
- Obligation :: direct material costs (e.g. raw materials), indirect material costs (e.g. auxiliary supplies), direct production costs (e.g. production wages), indirect production costs (e.g. operating supplies), special direct costs of production (e.g. a production module)
- Option :: administration costs (e.g. the porter)
- = Total costs of production (§ 255 para. 2 HGB, note also § 255 para. 3 HGB)

Direct costs are allocated to the product according to the input involved. Indirect costs are allocated using a plausible allocation key.

One-step production example: 100 pieces produced at 10€ = expenses 1,000. 50 pieces sold at 15€ = revenue 750.
- Wrong P&L :: expenses 1,000 against revenue 750 shows a loss of 250, although nothing was lost — 50 pieces worth 500 are still in stock
- Method with change in inventory (slides: "Cost of Sales method", § 275 para. 2 HGB) :: expenses for all produced goods (1,000) are reported; the correction is done via the increase in inventory (+500). Revenue 750 + inventory increase 500 − 1,000 = net income 250
- Method with cost of goods sold only (slides: "Total Costs Accounting method", § 275 para. 3 HGB) :: only the expenses for goods sold (500) are reported against revenue 750 = net income 250

Both methods lead to the same period profit, because changes in inventory have to be valued at their (acquisition or production) costs.

Careful with the names: in HGB and IFRS textbooks, § 275 para. 2 (expenses for all production + change in inventory) is usually called the **total cost method** (Gesamtkostenverfahren) and § 275 para. 3 (only cost of goods sold) the **cost of sales method** (Umsatzkostenverfahren). The slides use the labels the other way round. Learn the mechanics together with the paragraph, and check which labels the exam uses.

Two-step production process, balance sheet view. Start: cash 200 | equity 200.
- Purchase raw material 100 (income-neutral) :: Debit Raw material 100 / Credit Cash 100
- Production stage 1 :: Debit Unfinished goods 100 / Credit Cash (wages) 40, Credit Raw material 60
- Production stage 2 :: Debit Finished goods 200 / Credit Cash (wages) 60, Credit Raw material 40, Credit Unfinished goods 100
- Cash sale of the finished goods for 300 :: Debit Production costs 200 / Credit Finished goods 200 and Debit Cash 300 / Credit Sales revenue 300
- Final balance sheet :: cash 300 | equity 300, i.e. a profit of 100

The slide prints "Credit Unfinished goods 300" for the cash receipt; that account is already zero after stage 2, so the credit must be the sales revenue.

Same process with expense accounts and change in inventory:
- Stage 1 :: Debit Wages 40 / Credit Cash 40; Debit Material 60 / Credit Raw material 60; Debit Unfinished goods 100 / Credit Change in inventory 100
- Stage 2 :: Debit Wages 60 / Credit Cash 60; Debit Material 40 / Credit Raw material 40; Debit Change in inventory 100 / Credit Unfinished goods 100; Debit Finished goods 200 / Credit Change in inventory 200
- Sale :: Debit Change in inventory 200 / Credit Finished goods 200; Debit Cash 300 / Credit Sales revenue 300
- Result :: again cash 300 | equity 300`,
cards:[
{q:R`Mandatory components of production costs (§ 255 para. 2 HGB)`, a:R`Direct material costs (raw materials), indirect material costs (auxiliary supplies), direct production costs (production wages), indirect production costs (operating supplies), special direct costs (production module).`},
{q:R`Which production cost component is only an option on the slides?`, a:R`Administration costs (e.g. the porter).`},
{q:R`How are direct and indirect costs allocated?`, a:R`Direct costs according to the input involved; indirect costs with a plausible allocation key.`},
{q:R`100 produced at 10€, 50 sold at 15€: why is "loss 250" wrong?`, a:R`It treats all 1,000 as expense although 50 pieces worth 500 are still in stock. Correct net income: 250.`},
{q:R`Method of § 275 para. 2 HGB (as on the slides)`, a:R`Expenses for all produced goods are reported and corrected via the change in inventory: 750 + 500 − 1,000 = 250. Slides call it "Cost of Sales method"; textbooks call it total cost method (Gesamtkostenverfahren).`},
{q:R`Method of § 275 para. 3 HGB (as on the slides)`, a:R`Only expenses for goods sold are reported: 750 − 500 = 250. Slides call it "Total Costs Accounting method"; textbooks call it cost of sales method (Umsatzkostenverfahren).`},
{q:R`Why do both P&L methods give the same profit?`, a:R`Because changes in inventory are valued at their acquisition/production costs.`},
{q:R`Production stage 1: wages 40 cash, raw material 60 → entry?`, a:R`Debit Unfinished goods 100 / Credit Cash 40, Credit Raw material 60 (income-neutral).`}
],
quiz:[
{q:R`Which cost is only optional in production costs according to the slides?`, opts:[R`Administration costs (porter)`,R`Production wages (direct)`,R`Raw materials (direct material)`,R`Operating supplies (indirect)`], correct:0, exp:R`Direct/indirect material and production costs and special direct costs are mandatory; administration costs are an option.`},
{q:R`100 pieces produced at 10€, 50 sold at 15€. Correct net income?`, opts:[R`250`,R`−250`,R`750`,R`500`], correct:0, exp:R`Revenue 750 − cost of the 50 sold (500) = 250; or 750 + inventory increase 500 − 1,000 = 250.`},
{q:R`Same case: by how much does inventory increase?`, opts:[R`500`,R`750`,R`1,000`,R`250`], correct:0, exp:R`50 unsold pieces × 10€ production cost = 500.`},
{q:R`Indirect costs are allocated to products…`, opts:[R`using a plausible allocation key`,R`according to the input involved`,R`not at all, they are period costs`,R`only at sales prices`], correct:0, exp:R`Direct costs: input involved. Indirect costs: plausible allocation key.`},
{q:R`Why do both P&L methods show the same period profit?`, opts:[R`Inventory changes are valued at cost`,R`Both ignore unsold production`,R`Both use sales prices for stock`,R`The tax law demands the same profit`], correct:0, exp:R`Changes in inventory are valued at their acquisition/production costs, so the methods only differ in presentation.`},
{q:R`Stage 2: wages 60 cash, raw material 40, unfinished goods 100 are completed. Debit?`, opts:[R`Finished goods 200`,R`Unfinished goods 200`,R`Finished goods 100`,R`Production costs 200`], correct:0, exp:R`Debit Finished goods 200 / Credit Cash 60, Raw material 40, Unfinished goods 100.`}
]},

{id:'bk-11', ch:'11', title:'Depreciation', examWeight:'Depreciation plan, straight-line vs geometric-declining with switch, rules for extraordinary depreciation',
summary:R`Ordinary depreciation has a double function (§ 253 HGB):
- Balance sheet effect :: wear and tear reduces the value of the depreciable assets
- Effect on the P&L statement :: expenditures for assets are distributed proportionally by period as expense

Every depreciation plan has three components:
- Depreciation base :: usually the acquisition or production costs, occasionally less the scrap value
- Ordinary useful life :: the depreciation tables of the fiscal authorities provide information and estimation aids
- Depreciation method :: straight-line, geometric-declining, digital (sum of the years' digits) and performance-related

Example: acquisition cost 100, useful life 8 years.
- Straight-line :: 100 / 8 = 12.5 every year; book values 87.5, 75, 62.5, 50 … 0
- Geometric-declining (20% of the book value) :: 20, 16, 12.8, 10.24, 8.19 …; book values 80, 64, 51.2, 40.96 … The book value never reaches zero (about 16.8 is left after 8 years)
- Declining with a change to straight-line :: switch when the straight-line amount on the remaining book value is at least as high as the declining amount. After year 3 the book value is 51.2 with 5 years left: 51.2 / 5 = 10.24 per year, so years 4–8 each take 10.24 and the book value reaches 0

Extraordinary (unscheduled) depreciation is an outflow of the imparity principle: contingent losses are anticipated. It is relevant for fixed and current assets.
- Fixed assets, probable permanent impairment :: depreciation to fair value is required (§ 253 para. 3 sentence 3 HGB)
- Financial assets, non-permanent impairment :: depreciation may be charged, but does not have to be (§ 253 para. 3 sentence 4 HGB)
- Current assets :: depreciation to the lower value is mandatory (§ 253 para. 4 HGB), strict lower of cost or market principle
- Reversal :: write-downs must be reversed when the reasons for them no longer exist (§ 253 para. 5 HGB)`,
cards:[
{q:R`Double function of ordinary depreciation`, a:R`Balance sheet: wear and tear reduces the asset value. P&L: the expenditure is distributed proportionally over the periods as expense.`},
{q:R`Three components of a depreciation plan`, a:R`Depreciation base (acquisition/production cost, sometimes less scrap value), ordinary useful life (fiscal depreciation tables), depreciation method.`},
{q:R`Four depreciation methods`, a:R`Straight-line, geometric-declining, digital (sum of years' digits), performance-related.`},
{q:R`Cost 100, 8 years, 20% declining: first four amounts?`, a:R`20, 16, 12.8, 10.24 (book values 80, 64, 51.2, 40.96).`},
{q:R`When do you switch from declining to straight-line?`, a:R`When remaining book value / remaining years ≥ the declining amount. In the example: after year 3, 51.2 / 5 = 10.24 per year for years 4–8.`},
{q:R`Extraordinary depreciation for fixed assets`, a:R`Mandatory for probable permanent impairment (§ 253 para. 3 s. 3); optional for non-permanent impairment of financial assets only (§ 253 para. 3 s. 4).`},
{q:R`Extraordinary depreciation for current assets`, a:R`Always mandatory (§ 253 para. 4 HGB) — strict lower of cost or market principle.`},
{q:R`What if the reason for a write-down no longer exists?`, a:R`The write-down must be reversed (§ 253 para. 5 HGB).`}
],
quiz:[
{q:R`Machine 100, useful life 8 years, straight-line. Book value after 3 years?`, opts:[R`62.5`,R`51.2`,R`75`,R`37.5`], correct:0, exp:R`100 − 3 × 12.5 = 62.5.`},
{q:R`Same machine, 20% geometric-declining. Book value after 2 years?`, opts:[R`64`,R`60`,R`75`,R`80`], correct:0, exp:R`100 × 0.8 × 0.8 = 64.`},
{q:R`Main weakness of pure geometric-declining depreciation?`, opts:[R`The book value never reaches zero`,R`It front-loads too little expense`,R`It ignores the useful life entirely`,R`It is forbidden for machines`], correct:0, exp:R`A percentage of the remaining value never ends at zero, hence the change to straight-line.`},
{q:R`Book value 51.2 after year 3, 5 years remaining. Straight-line amount after the switch?`, opts:[R`10.24`,R`12.5`,R`8.19`,R`12.8`], correct:0, exp:R`51.2 / 5 = 10.24, equal to the declining amount, so switch now.`},
{q:R`A machine is impaired, but only temporarily. Extraordinary depreciation is…`, opts:[R`not allowed (only financial assets may)`,R`mandatory for every kind of fixed asset`,R`optional for every kind of fixed asset`,R`mandatory, as for current assets`], correct:0, exp:R`For fixed assets depreciation is required for probable permanent impairment; for non-permanent impairment only financial assets may be written down.`},
{q:R`Merchandise (current asset) has a temporarily lower market value at year-end.`, opts:[R`Write-down is mandatory`,R`Write-down is optional`,R`Write-down is forbidden`,R`A provision is formed instead`], correct:0, exp:R`Current assets: strict lower of cost or market principle (§ 253 para. 4 HGB).`},
{q:R`The reason for an earlier write-down no longer exists. What applies?`, opts:[R`The write-down must be reversed`,R`The lower value must be kept`,R`A reversal is optional`,R`Only the tax balance sheet changes`], correct:0, exp:R`§ 253 para. 5 HGB requires a reversal.`}
]},

{id:'bk-12', ch:'12', title:'Advance Payments & Deferred Expenses/Income', examWeight:'Booking entries for customer and seller at 31.12 and t = 1 in all three cases',
summary:R`A contract alone (t = 0) is a pending transaction and is not shown in the balance sheet. Bookings start when one side performs. There are three cases, each seen from the customer and the seller.

**Case 1: advance payment before delivery.** Contract in t = 0, payment on 31.12, delivery in t = 1.
- Customer on 31.12 :: Debit On-account payment (advance payment made), Debit Input tax / Credit Bank
- Seller on 31.12 :: Debit Bank / Credit Advance payment received, Credit VAT
- Customer in t = 1 :: Debit Inventories / Credit On-account payment
- Seller in t = 1 :: Debit Advance payment received / Credit Merchandise sales

**Case 2: payment for a period-related service** (e.g. rent or insurance paid on 31.12 for the next year). Contract in t = 0, payment on 31.12, the service is consumed in t = 1. The payment belongs to the next period, so it is deferred.
- Customer on 31.12 :: Debit Deferred expense (prepaid expense, an asset), (Debit Input tax) / Credit Bank
- Seller on 31.12 :: Debit Bank / Credit Deferred income (a liability-side item), (Credit VAT)
- Customer in t = 1 :: Debit Expense / Credit Deferred expense
- Seller in t = 1 :: Debit Deferred income / Credit Sales revenue

**Case 3: delivery before payment.** Delivery on 31.12, payment in t = 1.
- Customer on 31.12 :: Debit Inventories, Debit Input tax / Credit Trade accounts payable
- Seller on 31.12 :: Debit Trade accounts receivable / Credit Merchandise sales, Credit VAT
- Customer in t = 1 :: Debit Trade accounts payable / Credit Bank
- Seller in t = 1 :: Debit Bank / Credit Trade accounts receivable

The logic behind it: earnings and expenses belong to the period of the delivery or service (realization principle), not to the period of the payment.`,
cards:[
{q:R`Is a signed contract (t = 0) booked?`, a:R`No. It is a pending transaction and is not balanced.`},
{q:R`Customer pays an advance on 31.12 for delivery next year`, a:R`Debit On-account payment, Debit Input tax / Credit Bank. In t = 1: Debit Inventories / Credit On-account payment.`},
{q:R`Seller receives an advance on 31.12`, a:R`Debit Bank / Credit Advance payment received, Credit VAT. In t = 1: Debit Advance payment received / Credit Merchandise sales.`},
{q:R`Customer pays next year's rent on 31.12`, a:R`Debit Deferred expense / Credit Bank. In t = 1: Debit Expense / Credit Deferred expense.`},
{q:R`Landlord receives next year's rent on 31.12`, a:R`Debit Bank / Credit Deferred income. In t = 1: Debit Deferred income / Credit Sales revenue.`},
{q:R`Delivery on 31.12, payment next year — seller's entries`, a:R`31.12: Debit Trade receivables / Credit Merchandise sales, Credit VAT. t = 1: Debit Bank / Credit Trade receivables.`},
{q:R`Why are deferrals needed?`, a:R`Expenses and earnings belong to the period of the service, not of the payment (realization principle).`}
],
quiz:[
{q:R`On 31.12.01 a company pays the insurance premium for 02. Entry on 31.12.01?`, opts:[R`Debit Deferred expense / Credit Bank`,R`Debit Insurance expense / Credit Bank`,R`Debit Bank / Credit Deferred income`,R`Debit On-account payment / Credit Bank`], correct:0, exp:R`The service belongs to 02, so the payment is deferred as a deferred expense.`},
{q:R`The insurer in the same case books on 31.12.01…`, opts:[R`Debit Bank / Credit Deferred income`,R`Debit Bank / Credit Sales revenue`,R`Debit Deferred expense / Credit Bank`,R`Debit Bank / Credit Advance received`], correct:0, exp:R`The earning belongs to 02, so the seller shows deferred income.`},
{q:R`Seller received an advance in 01 and delivers in 02. Entry in 02?`, opts:[R`Debit Advance payment received / Credit Merchandise sales`,R`Debit Bank / Credit Merchandise sales`,R`Debit Merchandise sales / Credit Advance payment received`,R`Debit Deferred income / Credit Sales revenue`], correct:0, exp:R`The liability "advance payment received" is settled by the delivery, which creates the sale.`},
{q:R`A contract is signed on 12.11.01; payment and delivery follow in 02. What is booked in 01?`, opts:[R`Nothing — it is a pending transaction`,R`A receivable and the sale in full`,R`Deferred income of the full price`,R`An advance payment received of 150,000`], correct:0, exp:R`Pending transactions are not balanced in principle (exception: impending losses).`},
{q:R`Customer receives goods on 31.12 and pays in January. Customer's entry on 31.12?`, opts:[R`Debit Inventories, Input tax / Credit Payables`,R`Debit Inventories / Credit Bank, Credit Input tax`,R`Debit Deferred expense / Credit Trade payables`,R`Nothing until the payment in January arrives`], correct:0, exp:R`Delivery has happened, so inventory and the payable (plus input tax) are booked.`},
{q:R`In t = 1 the customer uses the prepaid service. Entry?`, opts:[R`Debit Expense / Credit Deferred expense`,R`Debit Deferred expense / Credit Expense`,R`Debit Expense / Credit Bank`,R`Debit Deferred income / Credit Expense`], correct:0, exp:R`The deferred expense is released into the expense of the period of the service.`}
]},

{id:'bk-13', ch:'13', title:'Provisions', examWeight:'Provisions vs reserves, the four categories of § 249 HGB and the X-GmbH impending-loss case',
summary:R`Three salary cases show the difference between a payment, a liability and a provision. X works in December 02; the expense of 100 belongs to 02 in every case (P&L 02: expense 100, net loss 100).
- Case 1: salary paid in December 02 :: bank falls from 100 to 0, equity from 100 to 0
- Case 2: salary paid in January 03 :: bank stays 100; a liability of 100 is shown, because amount and timing are certain
- Case 3: salary paid only much later (December 27, e.g. a pension) :: bank stays 100; a provision of 100 is shown, because amount and timing are uncertain

Provisions are no reserves. Both stand on the liabilities side of the balance sheet, but they are different:
- Provisions :: expenses that are uncertain with respect to amount or reason at year-end; they will result in a cash payment later; they are attributed by the causation principle; they are a debt component
- Reserves :: part of equity, either contributions that are not subscribed capital (capital reserves, § 272 para. 2 HGB) or retained earnings derived from the operating result (§ 272 para. 3 HGB)

The four categories of provisions:
- Uncertain liabilities (§ 249 para. 1 sentence 1 alt. 1 HGB) :: liabilities uncertain in amount or reason; a provision is required when the expense arises economically. Examples: pension provisions, provisions for litigation, provisions for warranties. They are an outflow of the realization principle: later cash payments that are already caused economically
- Impending losses from pending transactions (§ 249 para. 1 sentence 1 alt. 2 HGB) :: a predictable excess of obligations from pending operations; required to anticipate impending losses, an outflow of the imparity principle. Examples: losses from sales transactions, possibly hedging
- Omitted maintenance and removal of overburden (§ 249 para. 1 sentence 2 no. 1 HGB) :: expenses omitted in the business year that are caught up within the following three months (maintenance) or within the following business year (removal of overburden); removal of overburden mostly already falls under sentence 1
- Warranties without legal obligation (§ 249 para. 1 sentence 2 no. 2 HGB) :: a subcategory of uncertain liabilities; goodwill warranties. If the aim is to avoid litigation, sentence 1 alt. 1 may already apply; pure generosity falls under no. 2

Pension commitments can be organised in two ways:
- Direct commitment :: the employer pays the pensions later, from retirement onwards; the expense for the future payments is recognised by forming a pension provision already during the employment period
- Pension fund :: the pension fund pays the pension later; the employer pays ongoing contributions to the fund, and each ongoing payment is an expense

Provisions for impending losses must be formed when impending losses from pending transactions cannot be anticipated by non-scheduled depreciation. Depreciation comes first.

Case X-GmbH: on 12.11.01 X-GmbH contracts with Y-AG to deliver a special machine on 15.3.02 for a fixed price of 150,000€ net, payable within 14 days after delivery. How is it shown on 31.12.01?
- Basic case :: a pending transaction, which is not recognised in principle
- Machine already manufactured in 01 for 170,000€ :: the machine is in inventory at 170,000 but can only bring 150,000. Unscheduled depreciation of 20,000 to 150,000 (strict lower of cost or market principle); no provision is needed
- Machine not yet manufactured, costs reliably estimated at 170,000€ :: nothing can be written down, so a provision for impending losses of 20,000 is formed (P&L: other business expenses 20,000); no unscheduled depreciation`,
cards:[
{q:R`Salary for December paid in January vs paid decades later — what is shown?`, a:R`Paid in January: a liability (certain). Paid much later (pension): a provision (uncertain amount/timing). In both cases the expense belongs to the year of the work.`},
{q:R`Provisions vs reserves`, a:R`Provisions: uncertain expenses, later cash payment, causation principle, debt component. Reserves: equity — capital reserves (§ 272 para. 2) or retained earnings (§ 272 para. 3).`},
{q:R`Provisions for uncertain liabilities`, a:R`§ 249 para. 1 s. 1 alt. 1 HGB: uncertain in amount or reason, required when the expense arises economically; pensions, litigation, warranties; outflow of the realization principle.`},
{q:R`Provisions for impending losses`, a:R`§ 249 para. 1 s. 1 alt. 2 HGB: predictable excess of obligations from pending transactions; outflow of the imparity principle; e.g. losses from sales transactions.`},
{q:R`Provisions for omitted maintenance and overburden removal`, a:R`§ 249 para. 1 s. 2 no. 1 HGB: maintenance caught up within the following three months, overburden removal within the following business year.`},
{q:R`Warranties without legal obligation`, a:R`§ 249 para. 1 s. 2 no. 2 HGB: subcategory of uncertain liabilities (goodwill warranties).`},
{q:R`Direct commitment vs pension fund`, a:R`Direct commitment: employer pays later → pension provision during employment. Pension fund: the fund pays later; the employer's ongoing contributions are expenses.`},
{q:R`X-GmbH: machine already built for 170k, fixed price 150k. Balance sheet 31.12.01?`, a:R`Unscheduled depreciation of 20k to 150k (strict lower of cost or market). No provision.`},
{q:R`X-GmbH: machine not yet built, expected cost 170k, price 150k. Balance sheet 31.12.01?`, a:R`Provision for impending losses of 20k (Debit Other business expenses / Credit Provision). No depreciation.`}
],
quiz:[
{q:R`A company is sued; the outcome and amount are unclear. What is formed?`, opts:[R`Provision for uncertain liabilities`,R`Provision for impending losses`,R`Capital reserve under § 272 para. 2 HGB`,R`Deferred expense for the claim`], correct:0, exp:R`Litigation provisions are uncertain liabilities (§ 249 para. 1 s. 1 alt. 1 HGB).`},
{q:R`Which item is part of equity?`, opts:[R`Retained earnings (a reserve)`,R`Pension provisions`,R`Warranty provisions`,R`Provisions for impending losses`], correct:0, exp:R`Reserves (capital reserves, retained earnings) are equity; provisions are a debt component.`},
{q:R`Provisions for impending losses are an outflow of the…`, opts:[R`imparity principle`,R`realization principle`,R`principle of causation only`,R`going-concern principle`], correct:0, exp:R`Impending losses are anticipated (imparity); uncertain liabilities follow from the realization principle.`},
{q:R`X-GmbH has already produced the machine for 170,000; the fixed sales price is 150,000. Treatment on 31.12.01?`, opts:[R`Write the machine down by 20,000`,R`Form a provision of 20,000`,R`Do both, 20,000 each`,R`Nothing, the sale is still pending`], correct:0, exp:R`If the loss can be anticipated by unscheduled depreciation, that comes first; no provision.`},
{q:R`Same contract, but the machine is not yet produced (expected cost 170,000). Treatment?`, opts:[R`Form a provision of 20,000`,R`Write down inventory by 20,000`,R`Show a liability of 170,000`,R`Nothing, the sale is still pending`], correct:0, exp:R`Nothing exists to write down, so a provision for impending losses is formed.`},
{q:R`An employer pays ongoing contributions to an external pension fund. The payments are…`, opts:[R`expenses of the period`,R`added to a pension provision`,R`booked as deferred expense`,R`booked directly against equity`], correct:0, exp:R`With a pension fund the ongoing payment is an expense; provisions are needed only for direct commitments.`},
{q:R`Omitted maintenance can lead to a provision if it is caught up within…`, opts:[R`the following three months`,R`the following business year`,R`the following ten days`,R`the following five years`], correct:0, exp:R`Maintenance: three months; removal of overburden: the following business year (§ 249 para. 1 s. 2 no. 1 HGB).`}
]},

{id:'bk-14', ch:'14', title:'Internal Accounting & the Map of Accounting', examWeight:'NPV example, financial plan with liquidity gap and the purpose of each accounting area',
summary:R`Accounting splits into internal accounting (budgeting) and external accounting (financial statements under German GAAP). Each area has its own purpose:
- Investment calculation (internal) :: forecast of profitability and benchmark for planned investments
- Financial planning (internal) :: liquidity protection
- Cost accounting (internal) :: profitability analysis, price calculation and assessment
- Single financial statement (external) :: documentation, information, basis for profit distribution
- Consolidated financial statement (external) :: information
- Tax balance sheet (external) :: basis for tax liabilities

**Investment calculation** illustrates a planned investment as a series of cash flows for decision-making.
- Net present value :: NPV = A₀ + Σ CFₜ × (1 + r)⁻ᵗ, where A₀ is the (negative) acquisition payment
- Earnings value of an expenditure :: A₀ = Σ CFₜ × (1 + r)⁻ᵗ

Example at r = 5%:
- Machine A :: A₀ = −130; t1: turnover 150 − expenditure 130 = 20 → 19.05; t2: 150 − 20 = 130 → 117.91; NPV = **+6.96**
- Machine B :: A₀ = −100; t1: 60 − 40 = 20 → 19.05; t2: 160 − 60 = 100 → 90.70; NPV = **+9.75**
- Decision :: both are worthwhile, B has the higher NPV

**Financial planning** protects the liquidity of the entity. Illiquidity is a reason for insolvency. Future payments in and out (cash inflows and outflows) are planned to identify liquidity gaps early.
- Simple financial plan :: opening balance + payments in ./. payments out = closing balance
- Period 1 :: 200 + 400 − 500 = 100
- Period 2 :: 100 + 500 − 300 = 300
- Period 3 :: 300 + 400 − 800 = −100, a liquidity gap that is visible already in period 0. Raising additional liquidity (e.g. 200) closes it, giving 100
- Period 4 :: 100 + 800 − 500 = 400
- Ways to raise liquidity :: (additional) bank loans, increasing turnover, collection of accounts receivable

**Cost accounting** serves to:
- Analyse economic profitability (of segments, cost centers, product lines etc.)
- Execute price calculation, including price assessments
- Perform program planning

**Single financial statement:** information instrument (not only) for external stakeholders; basis to determine an entity's profit distribution; contains a balance sheet and a profit & loss account (corporations further publish a management (status) report and notes (annex)).

**Consolidated financial statement:** obligatory for groups (§§ 290 ff. HGB); information function (not only) for external stakeholders; not relevant to determine profit distribution; listed corporations must prepare it in accordance with IFRS.

**Tax balance sheet:** the determination basis for:
- Corporate tax of corporations :: 15% + 5.5% solidarity surcharge
- Trade tax :: of corporations, single entrepreneurs and partnerships, around 14% depending on the municipal trade tax multiplier
- Income tax :: for partners of a partnership and single entrepreneurs, 0–45%
- It is derived from the commercial balance sheet under German GAAP (§ 5 para. 1 German Income Tax Act)

Exam preparation class (from the slides): Tuesday 18.11., Zoom, 19:15.`,
cards:[
{q:R`Purpose of each accounting area`, a:R`Cost accounting: profitability analysis, price calculation. Investment accounting: forecast of profitability, benchmark for investments. Financial planning: liquidity protection. Single FS: documentation, information, basis for profit distribution. Consolidated FS: information. Tax balance sheet: basis for taxes.`},
{q:R`NPV formula`, a:R`NPV = A₀ + Σ CFₜ (1 + r)⁻ᵗ, with A₀ as the negative initial payment.`},
{q:R`Machine A (−130; CF 20, 130) vs B (−100; CF 20, 100) at 5%`, a:R`NPV A = −130 + 19.05 + 117.91 = 6.96. NPV B = −100 + 19.05 + 90.70 = 9.75. B is better.`},
{q:R`Purpose of financial planning`, a:R`Liquidity protection: plan cash inflows and outflows to identify liquidity gaps early, since illiquidity is a reason for insolvency.`},
{q:R`How can a liquidity gap be closed?`, a:R`Raise additional liquidity: (additional) bank loans, increasing turnover, collecting accounts receivable.`},
{q:R`Three purposes of cost accounting`, a:R`Analyse economic profitability (segments, cost centers, product lines), price calculation incl. price assessments, program planning.`},
{q:R`Single vs consolidated financial statement`, a:R`Single FS: basis for profit distribution, documentation and information. Consolidated FS: obligatory for groups (§§ 290 ff. HGB), information only, not relevant for distribution, IFRS for listed corporations.`},
{q:R`Taxes based on the tax balance sheet`, a:R`Corporate tax 15% + 5.5% solidarity surcharge; trade tax about 14% (municipal multiplier); income tax 0–45% for partners and single entrepreneurs. Derived from the commercial balance sheet (§ 5 para. 1 EStG).`}
],
quiz:[
{q:R`Which accounting area serves liquidity protection?`, opts:[R`Financial planning`,R`Cost accounting`,R`Consolidated statement`,R`Investment calculation`], correct:0, exp:R`Financial planning plans payments in and out to detect liquidity gaps.`},
{q:R`Opening balance 300, payments in 400, payments out 800. Closing balance?`, opts:[R`−100`,R`100`,R`−500`,R`900`], correct:0, exp:R`300 + 400 − 800 = −100: a liquidity gap that must be closed in advance.`},
{q:R`Machine B: A₀ = −100, CF₁ = 20, CF₂ = 100, r = 5%. NPV?`, opts:[R`9.75`,R`6.96`,R`20.00`,R`−9.75`], correct:0, exp:R`−100 + 20/1.05 + 100/1.05² = −100 + 19.05 + 90.70 = 9.75.`},
{q:R`Which statement on the consolidated financial statement is correct?`, opts:[R`It is not relevant for profit distribution`,R`It is the basis for the dividend payment`,R`It is the basis for the corporate tax`,R`Only small companies must prepare it`], correct:0, exp:R`It has an information function only; listed groups prepare it under IFRS.`},
{q:R`Corporate tax rate of a German corporation according to the slides?`, opts:[R`15% + 5.5% solidarity surcharge`,R`19% like the regular VAT rate`,R`About 14%, set by the municipality`,R`0–45% depending on the income`], correct:0, exp:R`Corporate tax 15% + 5.5% solidarity surcharge; trade tax about 14%; income tax 0–45%.`},
{q:R`The tax balance sheet is derived from…`, opts:[R`the commercial balance sheet under German GAAP`,R`the consolidated statement under IFRS`,R`the cost accounting of the whole company`,R`the financial plan for the next business year`], correct:0, exp:R`§ 5 para. 1 German Income Tax Act links it to the GAAP balance sheet.`},
{q:R`Which is NOT a purpose of cost accounting?`, opts:[R`Basis for profit distribution`,R`Price calculation and assessment`,R`Program planning`,R`Profitability analysis of segments`], correct:0, exp:R`The basis for profit distribution is the single financial statement.`}
]}
];

/* ============================================================ BOOKKEEPING CHEAT SHEET ============================================================ */
const BK_CHEAT = [
{h:"Terms & derivation", items:[
R`Payments in/out: cash + bank · Income/expenditure: + receivables − liabilities · Earnings/expenses: + tangible assets (change of equity) · Revenues/costs: operational only`,
R`Neutral expenses (non-operating, extraordinary, prior-period) = expenses, no costs · Basic costs = both · Imputed costs (add. depreciation, risks, imputed interest/rent/wages) = costs, no expenses`,
R`Functions of German GAAP FS: documentation · information · basis for distribution`]},
{h:"Merchant & inventory", items:[
R`§ 238 HGB records · merchant by operations (§ 1), registration (§§ 2, 3, 5), legal form (§ 6) · freelancers: no merchant (§ 241a)`,
R`Timing: year-end or ±10 days · up 2 months before / down 3 months after (§ 241 III) · permanent (§ 241 II) · sample (§ 241 I)`,
R`Quantity: fixed value (§ 240 III, count every 3 years) · group/average (§ 240 IV) · FIFO/LIFO (§ 256)`]},
{h:"Balance sheet & booking", items:[
R`Assets = capital · asset exchange · liability exchange · extension (both +) · contraction (both −)`,
R`Asset account: OB + additions DEBIT · Liability: OB + additions CREDIT · OB + additions = disposals + CB`,
R`Open via OBSA (not opening balance sheet) · close via CBSA · expense/earnings → P&L → Equity`,
R`No booking without booking entry and voucher · debit sum = credit sum`]},
{h:"Equity", items:[
R`Private: Debit withdrawals, Credit contributions → closed via Equity`,
R`OHG: one equity account per partner · GmbH: subscribed capital + retained earnings`,
R`1.1.: Debit Equity / Credit Profit distribution → retain: Credit Retained earnings · distribute: Credit Bank`]},
{h:"VAT", items:[
R`Purchase: Debit Asset + Input tax / Credit Bank or Payables · Sale: Debit Receivables / Credit Sales + VAT`,
R`Close: Debit VAT / Credit Input tax · payable: Debit VAT / Credit CBSA (or Bank) · excess input: Debit CBSA / Credit Input tax`,
R`19% / 7% · joint tax 45.1 / 51.2 / 3.7 · indirect · 2nd after wage tax`]},
{h:"Valuation, acquisition & production costs", items:[
R`Prudence → realization (gains when realised) + imparity (losses when impending) · upper limit cost, lower limit fair value`,
R`AC = price (no VAT) + ancillary (unit) − reductions + set-up (unit) + subsequent · 2% discount on 1,190: Credit Asset 20, Input tax 3.80, Bank 1,166.20`,
R`PC obligation: direct/indirect material + production costs + special direct costs · option: administration`,
R`§ 275 II: all production + change in inventory · § 275 III: cost of goods sold only · same profit (slides swap the textbook names!)`]},
{h:"Merchandise & depreciation", items:[
R`Input of merchandise = OB + additions − CB · gross profit = sales − input · gross method: both in P&L · net method: only gross profit`,
R`Plan: base, useful life, method (straight-line, geometric-declining, digital, performance) · switch when BV / remaining years ≥ declining amount`,
R`Unscheduled: fixed assets permanent → must · financial assets temporary → may · current assets → must · reversal must (§ 253 V)`]},
{h:"Deferrals & provisions", items:[
R`Advance: customer Debit On-account payment / seller Credit Advance received · prepaid service: Deferred expense / Deferred income → released in t = 1`,
R`Provisions (debt, uncertain) ≠ reserves (equity, § 272 II/III) · § 249: uncertain liabilities, impending losses, maintenance (3 months)/overburden (1 year), goodwill warranties`,
R`Impending loss: write-down first (asset exists) · else provision (Debit Other expenses / Credit Provision)`]},
{h:"Internal accounting & taxes", items:[
R`NPV = A₀ + Σ CFₜ(1+r)⁻ᵗ · financial plan: OB + in − out = CB, detect gaps`,
R`Corporate tax 15% + 5.5% soli · trade tax ~14% · income tax 0–45% · tax BS from GAAP BS (§ 5 I EStG)`]}
];

/* ============================================================ BOOKING ENTRY TRAINER ============================================================ */
// lines: [side 'D'|'C', account, amount] — the user picks the account for every line (amounts and sides are given)
const BK_ACCOUNTS = ['Bank','Cash','Machinery','Factory & office equipment','Raw materials','Inventories','Unfinished goods','Finished goods','Trade receivables','Trade payables','Loan / Liability','Equity','Private','Profit distribution','Retained earnings','Input tax','VAT','Sales revenue','Rental earnings','Expense','Other business expenses','Depreciation','Change in inventory','P&L','OBSA','CBSA','On-account payment','Advance payment received','Deferred expense','Deferred income','Provision'];
const BK_TRAIN = [
{id:'t1', topic:'bk-4', text:'A machine is purchased for 50,000€ via bank transfer.', lines:[['D','Machinery','50,000'],['C','Bank','50,000']]},
{id:'t2', topic:'bk-4', text:'Raw materials are purchased for 100€ in cash.', lines:[['D','Raw materials','100'],['C','Cash','100']]},
{id:'t3', topic:'bk-4', text:'Raw materials are purchased on target (on credit) for 300€.', lines:[['D','Raw materials','300'],['C','Trade payables','300']]},
{id:'t4', topic:'bk-4', text:'A bond of 400€ is converted into shares.', lines:[['D','Loan / Liability','400'],['C','Equity','400']]},
{id:'t5', topic:'bk-4', text:'A loan of 200€ is redeemed in cash.', lines:[['D','Loan / Liability','200'],['C','Cash','200']]},
{id:'t6', topic:'bk-4', text:'Rent of 50,000€ for office space you let is received on the bank account.', lines:[['D','Bank','50,000'],['C','Rental earnings','50,000']]},
{id:'t7', topic:'bk-4', text:'Year-end: close the rental earnings account (balance 50,000€).', lines:[['D','Rental earnings','50,000'],['C','P&L','50,000']]},
{id:'t8', topic:'bk-4', text:'Year-end: the P&L account shows a net profit of 50,000€. Close it.', lines:[['D','P&L','50,000'],['C','Equity','50,000']]},
{id:'t9', topic:'bk-4', text:'Year-end: close the bank account with a closing balance of 60,000€.', lines:[['D','CBSA','60,000'],['C','Bank','60,000']]},
{id:'t10', topic:'bk-4', text:'Start of year: open the machinery account with an opening balance of 100,000€.', lines:[['D','Machinery','100,000'],['C','OBSA','100,000']]},
{id:'t11', topic:'bk-4', text:'Start of year: open the liability account with an opening balance of 1,400€.', lines:[['D','OBSA','1,400'],['C','Loan / Liability','1,400']]},
{id:'t12', topic:'bk-5', text:'The sole proprietor withdraws 500€ cash for private use.', lines:[['D','Private','500'],['C','Cash','500']]},
{id:'t13', topic:'bk-5', text:'Year-end: close the private account, which shows a debit balance (net withdrawals) of 500€.', lines:[['D','Equity','500'],['C','Private','500']]},
{id:'t14', topic:'bk-5', text:'X-GmbH, 1.1.02: transfer last year\'s net income of 400,000€ for the shareholders\' decision.', lines:[['D','Equity','400,000'],['C','Profit distribution','400,000']]},
{id:'t15', topic:'bk-5', text:'The shareholders\' meeting decides to retain the full profit of 400,000€.', lines:[['D','Profit distribution','400,000'],['C','Retained earnings','400,000']]},
{id:'t16', topic:'bk-5', text:'The shareholders\' meeting decides to distribute the full profit of 400,000€.', lines:[['D','Profit distribution','400,000'],['C','Bank','400,000']]},
{id:'t17', topic:'bk-6', text:'Merchandise is bought for 800€ net + 19% VAT and paid by bank.', lines:[['D','Inventories','800'],['D','Input tax','152'],['C','Bank','952']]},
{id:'t18', topic:'bk-6', text:'A computer is sold to an end user for 1,190€ gross on installments.', lines:[['D','Trade receivables','1,190'],['C','Sales revenue','1,000'],['C','VAT','190']]},
{id:'t19', topic:'bk-6', text:'End of period: offset the input tax account (152€) against the VAT account (190€).', lines:[['D','VAT','152'],['C','Input tax','152']]},
{id:'t20', topic:'bk-6', text:'The remaining VAT of 38€ is paid to the tax office.', lines:[['D','VAT','38'],['C','Bank','38']]},
{id:'t21', topic:'bk-6', text:'Year-end: a net VAT payable of 38€ remains unpaid. Close the VAT account.', lines:[['D','VAT','38'],['C','CBSA','38']]},
{id:'t22', topic:'bk-6', text:'Year-end: input tax exceeds VAT by 60€. Close the input tax account.', lines:[['D','CBSA','60'],['C','Input tax','60']]},
{id:'t23', topic:'bk-8', text:'A computer is bought on credit for 1,000€ net + 19% VAT.', lines:[['D','Factory & office equipment','1,000'],['D','Input tax','190'],['C','Trade payables','1,190']]},
{id:'t24', topic:'bk-8', text:'The computer invoice (1,190€) is paid within 14 days, using the 2% cash discount.', lines:[['D','Trade payables','1,190'],['C','Factory & office equipment','20'],['C','Input tax','3.80'],['C','Bank','1,166.20']]},
{id:'t25', topic:'bk-8', text:'The computer invoice (1,190€) is paid after the discount period.', lines:[['D','Trade payables','1,190'],['C','Bank','1,190']]},
{id:'t26', topic:'bk-10', text:'Production stage 1: raw material of 60€ and cash wages of 40€ go into unfinished goods.', lines:[['D','Unfinished goods','100'],['C','Cash','40'],['C','Raw materials','60']]},
{id:'t27', topic:'bk-10', text:'Expense-account method: capitalise the unfinished goods of 100€ produced this period.', lines:[['D','Unfinished goods','100'],['C','Change in inventory','100']]},
{id:'t28', topic:'bk-11', text:'Ordinary straight-line depreciation of 12,500€ on a machine.', lines:[['D','Depreciation','12,500'],['C','Machinery','12,500']]},
{id:'t29', topic:'bk-13', text:'A finished machine (cost 170,000€) can only be sold for a fixed 150,000€. Write it down.', lines:[['D','Depreciation','20,000'],['C','Finished goods','20,000']]},
{id:'t30', topic:'bk-13', text:'The machine is not yet produced; expected cost 170,000€, fixed price 150,000€. Book the impending loss.', lines:[['D','Other business expenses','20,000'],['C','Provision','20,000']]},
{id:'t31', topic:'bk-12', text:'Customer, 31.12.01: pays an advance of 10,000€ net + 19% VAT for goods delivered in 02.', lines:[['D','On-account payment','10,000'],['D','Input tax','1,900'],['C','Bank','11,900']]},
{id:'t32', topic:'bk-12', text:'Seller, 31.12.01: receives the advance of 10,000€ net + 19% VAT.', lines:[['D','Bank','11,900'],['C','Advance payment received','10,000'],['C','VAT','1,900']]},
{id:'t33', topic:'bk-12', text:'Customer, 02: the goods paid in advance (10,000€ net) arrive.', lines:[['D','Inventories','10,000'],['C','On-account payment','10,000']]},
{id:'t34', topic:'bk-12', text:'Seller, 02: delivers the goods paid in advance (10,000€ net).', lines:[['D','Advance payment received','10,000'],['C','Sales revenue','10,000']]},
{id:'t35', topic:'bk-12', text:'Tenant, 31.12.01: pays next year\'s rent of 12,000€ (no VAT).', lines:[['D','Deferred expense','12,000'],['C','Bank','12,000']]},
{id:'t36', topic:'bk-12', text:'Tenant, 02: release the prepaid rent of 12,000€.', lines:[['D','Expense','12,000'],['C','Deferred expense','12,000']]},
{id:'t37', topic:'bk-12', text:'Landlord, 31.12.01: receives next year\'s rent of 12,000€ (no VAT).', lines:[['D','Bank','12,000'],['C','Deferred income','12,000']]},
{id:'t38', topic:'bk-12', text:'Landlord, 02: release the rent received in advance (12,000€).', lines:[['D','Deferred income','12,000'],['C','Sales revenue','12,000']]}
];
