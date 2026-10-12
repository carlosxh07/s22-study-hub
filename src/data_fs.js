/* ============================================================ FINANCIAL STATEMENT ANALYSIS DATA (Langenhövel, slides WS 26/27) ============================================================ */
// Plain text (no KaTeX: never use the dollar sign — write USD). Summary markup: "- " bullets, "Term :: Description" vocab rows, "=> A (desc) → B" flows, **bold**.
const PLAN_EXAM_FS = new Date(2026,11,21); // Klausur "Bookkeeping & Accounting" + Financial Statement Analysis — 21.12.2026, 09:00–12:00 (FSA part: 90 min MC, 90 points)

const FS_TOPICS = [
{id:'fs-1', ch:1, title:'Basic Overview & Applicable Rules', examWeight:'Who has to prepare what: size classes (2 of 3 criteria), legal form, listed vs non-listed and the IAS Regulation are typical multiple-choice material',
summary:R`Accounting is an information system. It works in three steps:
- Record business activity :: document activity through invoices, shipments and internal production processes; record systematically with generally accepted practices; use double-entry accounting (debit–credit rules)
- Process information :: bring it into a readable format, apply guidelines and aggregate it
- Communicate information efficiently to addressees :: communicate concisely in financial statements, give the best possible information and allow the best possible decision making

Accounting splits into an internal and an external part:
- Management accounting (internal) :: cost accounting, planning and decision support, business statistics and performance evaluation; no legal regulation, designed by company-specific criteria
- Financial accounting (external) :: accounting and financial reporting plus tax accounting; regulated by national GAAP such as the German Commercial Code (HGB), tax law and/or IFRS → financial reporting

The financial accounting cycle has four stages:
=> Business transaction (give something, receive something) → Journal entry (debit = credit) → Ledger & accounts (T-accounts) → Trial balance (assets, liabilities, equity, revenues, expenses)

From the trial balance to the financial statements, several accounts have to be brought up to date before the balance sheet and the profit and loss account can be generated: **deferrals, accruals, depreciation and provisions**.

Financial statements serve many general purposes: information, profitability ("rentability"), comparability, dividend payments, taxes, credibility and sustainability.

Under German GAAP the purpose has three parts:
- Documentation :: on the basis of structured, organised bookkeeping, the financial statements summarise and document all relevant business occurrences of a defined period
- Accountability :: information about the performance of the company to the stakeholders
- Capital preservation :: based on German GAAP rules, in particular the prudence principle, the financial statements shall ensure that capital is preserved — this mainly protects creditors

Three perspectives meet in financial reporting: the preparer (e.g. BMW AG), the auditor (e.g. PwC AG) and the user (e.g. a shareholder).

Elements of financial statements under German GAAP:
- All companies (mandatory) :: balance sheet and profit and loss account (income statement, P&L)
- Corporations in addition :: notes
- Capital-market-oriented ("listed") corporations under § 264d HGB in addition :: cash flow statement and equity table (statement of changes in equity)
- Management report ("Lagebericht") :: not part of the financial statements, but prepared next to them

"Corporations" here mainly means the stock company (AG) and the limited liability company (GmbH).

Five dimensions decide which rules apply:
- Applicable jurisdiction
- Legal form of the company
- Size of the company
- Stand-alone vs consolidated financial statements
- Listed vs non-listed company

**Jurisdiction.** The course focuses on the German Commercial Code (GCC, HGB), 3rd Book "Commercial Books". Its 1st chapter (§§ 238 ff.) applies to all merchants: bookkeeping, inventory, financial statements. Its 2nd chapter (§§ 264 ff.) adds provisions for corporations: balance sheet, P&L, notes, management report, consolidated financial statements, audit, disclosure and penalties.

**Legal form.** Unlimited liability forms — sole proprietorship, general partnership (OHG), limited partnership (KG) — have a lower need for regulation. Limited liability forms — stock company (AG), limited liability company (GmbH), limited partnership with shares (KGaA) — have a higher need for regulation. Further rules are in the Stock Corporation Act (AktG) and the GmbH Act. Special rules apply to registered cooperatives, credit and financial service institutions, insurance companies and pension funds; companies under the Disclosure Act (Publizitätsgesetz) are not considered further.

**Size (§§ 267, 267a HGB)** — four classes for corporations:
- Micro :: balance sheet total < €0.45 m, revenues < €0.9 m, < 10 employees
- Small :: balance sheet total < €7.5 m, revenues < €15 m, < 50 employees
- Medium :: balance sheet total < €25 m, revenues < €50 m, < 250 employees
- Large :: balance sheet total ≥ €25 m, revenues ≥ €50 m, ≥ 250 employees

Rule: **2 out of 3 criteria in 2 consecutive years.** Micro, small and medium companies get reliefs, e.g. in preparing the financial statements and in the audit obligation. Large corporations have to fulfil all regulations.

**Stand-alone vs consolidated.** Every legal entity of a group (parent A, subsidiaries B, C, D, E) prepares its own separate financial statements. In addition, the ultimate parent prepares consolidated financial statements for the whole group, the "economic entity". The course focuses on stand-alone financial statements; consolidation is introduced in chapter 9.

**Listed company** = capital-market-oriented company under § 264d HGB. It has issued securities that are traded on an organised market — shares, but also bonds or other debt or equity instruments. A company that is only in the process of applying for admission is already treated as capital-market-oriented.

Consequences of being listed:
- Irrespective of its size it counts as a large corporation
- Cash flow statement and equity table become mandatory (if no consolidated financial statements are prepared)
- The IAS Regulation applies

**IAS Regulation (EC) No 1606/2002.** IFRS apply in the EU since 2005. A regulation applies directly in all member states, whereas a directive first has to be transposed into national law. The IAS Regulation is the milestone for the wide use of IFRS:
- Mandatory rule (Article 4) :: all EU listed (capital-market-oriented) companies must use IFRS as adopted by the EU for their consolidated financial statements
- Member state options (Article 5) :: member states may extend IFRS to stand-alone financial statements and/or to non-listed companies

How Germany used the options:
- Listed companies :: consolidated FS: IFRS mandatory · stand-alone FS: German GAAP mandatory
- Non-listed companies :: consolidated FS: option German GAAP or IFRS · stand-alone FS: German GAAP mandatory

Stand-alone German GAAP accounts stay mandatory for everyone because the **tax assessment and the dividend payments** are based on them. That is why the course focuses on stand-alone German GAAP accounting; key differences to IFRS follow in chapter 10.`,
cards:[
{q:R`Three steps of accounting as an information system`, a:R`Record business activity (documents, systematic recording, double entry) → process information (readable format, guidelines, aggregation) → communicate efficiently to addressees (financial statements for best decisions).`},
{q:R`Management vs financial accounting`, a:R`Management accounting is internal (cost accounting, planning, performance evaluation) and has no legal regulation. Financial accounting is external (financial reporting, tax accounting) and is regulated by HGB, tax law and/or IFRS.`},
{q:R`Four stages of the financial accounting cycle`, a:R`Business transaction → journal entry → ledger & accounts → trial balance.`},
{q:R`Which adjustments lead from the trial balance to the financial statements?`, a:R`Deferrals, accruals, depreciation and provisions.`},
{q:R`Three purposes of financial statements under German GAAP`, a:R`Documentation, accountability, capital preservation (prudence → protects creditors).`},
{q:R`Size classes §§ 267, 267a HGB (thresholds)`, a:R`Micro < €0.45 m / €0.9 m / 10 · Small < €7.5 m / €15 m / 50 · Medium < €25 m / €50 m / 250 · Large ≥ €25 m / €50 m / 250 (balance sheet total / revenues / employees). 2 of 3 criteria in 2 consecutive years.`},
{q:R`Consequences of being capital-market-oriented (§ 264d HGB)`, a:R`Always a large corporation; cash flow statement and equity table mandatory (if no consolidated FS); IAS Regulation applies.`},
{q:R`IAS Regulation: Article 4 vs Article 5`, a:R`Art. 4: EU listed companies must use EU-endorsed IFRS for consolidated FS. Art. 5: member-state options to extend IFRS to stand-alone FS and/or non-listed companies.`},
{q:R`Germany's use of the IFRS options`, a:R`Consolidated: listed → IFRS mandatory, non-listed → choice HGB or IFRS. Stand-alone: German GAAP mandatory for all (tax assessment and dividends).`}
],
quiz:[
{q:R`A GmbH reports for two consecutive years: balance sheet total €20 m, revenues €55 m, 180 employees. Which size class applies?`, opts:[R`Medium-sized`,R`Large (all rules apply)`,R`Small`,R`Micro`], correct:0, exp:R`Two of three criteria must be met in two consecutive years. Balance sheet (< €25 m) and employees (< 250) are within "medium"; only revenues exceed €50 m. So it stays medium-sized.`},
{q:R`A GmbH with €3 m balance sheet total has just applied for its bonds to be traded on a regulated market. How is it treated under German GAAP?`, opts:[R`As a large corporation`,R`As a small corporation`,R`As a micro corporation`,R`As a medium-sized one`], correct:0, exp:R`Issuing bonds makes it capital-market-oriented (§ 264d HGB), already during the application. Listed companies are large irrespective of their size.`},
{q:R`Which elements must every merchant prepare, regardless of legal form?`, opts:[R`Balance sheet and P&L`,R`Balance sheet, P&L and notes`,R`Balance sheet and cash flow statement`,R`P&L and management report`], correct:0, exp:R`Balance sheet and P&L are mandatory for all companies. Notes are added for corporations; cash flow statement and equity table for listed corporations.`},
{q:R`Which statement about the management report is correct?`, opts:[R`It is not part of the financial statements but prepared next to them`,R`It is a mandatory part of the financial statements of every merchant`,R`It replaces the notes for medium-sized corporations`,R`It is only required in consolidated financial statements`], correct:0, exp:R`The management report ("Lagebericht") is a separate element, prepared next to the financial statements.`},
{q:R`Under the IAS Regulation, what is mandatory for an EU listed company?`, opts:[R`IFRS (as adopted by the EU) in its consolidated FS`,R`IFRS in both its stand-alone and its consolidated FS`,R`IFRS in its stand-alone FS only`,R`US GAAP or IFRS, whichever the company itself chooses`], correct:0, exp:R`Article 4 makes EU-endorsed IFRS mandatory only for consolidated statements of listed companies. Stand-alone use is a member-state option (Article 5).`},
{q:R`Why do German companies still prepare stand-alone financial statements under German GAAP even if they report IFRS in their group accounts?`, opts:[R`Tax assessment and dividends are based on them`,R`IFRS does not allow stand-alone financial statements`,R`The IAS Regulation requires a second set of accounts`,R`Auditors may only certify HGB accounts`], correct:0, exp:R`Germany kept German GAAP mandatory for stand-alone FS because the tax assessment and the dividend payments are based on them.`},
{q:R`Which of these is a limited liability legal form with a higher need for regulation?`, opts:[R`KGaA`,R`OHG`,R`KG`,R`Sole proprietorship`], correct:0, exp:R`AG, GmbH and KGaA have limited liability; sole proprietorship, OHG and KG have (at least partly) unlimited liability and a lower need for regulation.`},
{q:R`What distinguishes an EU regulation from an EU directive?`, opts:[R`A regulation applies directly, a directive needs national transposition`,R`A directive applies directly, a regulation needs national transposition`,R`Both need to be transposed into national law first`,R`A regulation only applies to listed companies`], correct:0, exp:R`Regulations (like the IAS Regulation) are directly applicable; directives must first be transposed by each member state.`},
{q:R`Which list contains only purposes of financial statements under German GAAP?`, opts:[R`Documentation, accountability, capital preservation`,R`Documentation, valuation at fair value, tax optimisation`,R`Accountability, fair value, market valuation`,R`Capital preservation, budgeting and internal cost control`], correct:0, exp:R`German GAAP balances documentation, accountability and capital preservation (prudence protects creditors).`},
{q:R`Which part of the GCC contains the supplementary provisions for corporations?`, opts:[R`3rd Book, 2nd chapter (§§ 264 ff.)`,R`3rd Book, 1st chapter (§§ 238 ff.)`,R`1st Book (§§ 1 ff.)`,R`The Stock Corporation Act only`], correct:0, exp:R`§§ 238 ff. apply to all merchants; §§ 264 ff. add the rules for corporations (notes, management report, consolidation, audit, disclosure).`}
]},

{id:'fs-2', ch:2, title:'German GAAP — Principles', examWeight:'The slide cases (Bad Luck AG, Hugo Ross AG) on the closing date and prudence principles are classic exam cases',
summary:R`**Legal systems.** Accounting rules mirror the legal system:
- Common law (case law) :: based on judicial precedent; about 80 countries incl. US/UK; very detailed accounting rules covering almost every case → US GAAP very detailed, IFRS detailed with a "Conceptual Framework"
- Civil law (code law) :: based on codified statutes; about 150 countries incl. continental Europe and China; shorter, structured laws with principles, interpreted in commentaries → German GAAP: basic rules in the HGB with reference to generally accepted accounting principles

Three paragraphs anchor the principles in the HGB:
- § 238 I HGB :: every merchant must keep books that clearly show his commercial transactions and financial position in accordance with generally accepted accounting principles
- § 243 I HGB :: financial statements have to be prepared in accordance with generally accepted accounting principles
- § 264 II HGB :: financial statements of corporations must present a factually accurate picture ("true and fair view") of the net assets, financial position and results of operations in accordance with generally accepted accounting principles

Generally accepted accounting principles (GoB) are applied in current bookkeeping and in the financial statements. They are used for transactions that lack specific rules, represent best practice and are mostly codified in the HGB. Two groups:
- Principles of documentation :: HOW to record → bookkeeping
- Principles of accounting :: WHAT to record → financial statements

**Principles of documentation.**
- Clarity and transparency :: systematic order, living language, voucher principle ("no booking without voucher"), recognition of subsequent changes, timeliness, keeping retention periods
- Completeness and correctness :: completeness of transactions, correctness of transactions — plus the implementation of an internal control system (ICS)

**Principles of accounting** fall into three groups (the ones marked with ★ are most relevant for preparing financial statements):
- General principles :: compliance with GAAP, true and fair view, clarity and transparency, preparation in German and in euros, correctness, ★ closing date principle, timely preparation
- Recognition principles :: ★ balance sheet identity, completeness, no offsetting, formal comparability
- Measurement principles :: ★ prudence principle (realisation and imparity principle), accrual basis, ★ going concern, substantial comparability, individual measurement, paid cost

**Closing date principle.** Only the circumstances at the balance sheet date count. Information that arrives after the closing date but before the statements are prepared is treated in two ways:
- Value-clarifying events :: the cause already existed at the closing date; the new information only reveals it → must be taken into account in the old year (positive and negative ones)
- Value-creating events :: the cause arises only after the closing date → no adjustment in the old year; if material, report them as subsequent events

Case "Bad Luck AG" (closing date 31.12.2024, facts found in mid-January 2025):
- Key customer declares bankruptcy at the start of the new year, receivables €2.1 m :: the financial distress already existed at year end → value-clarifying → write the receivable down in 2024
- Court case won although management expected to lose, provision €0.4 m :: the lawsuit existed at year end; the judgment clarifies that there was no obligation → no provision; release the €0.4 m in 2024
- Storm damages a plant in early January 2025, €1.2 m, fully insured :: cause arose after the closing date → value-creating → no adjustment in 2024 (at most a note on subsequent events)
- Supplier "Lazy Cleaning GmbH" forgot to invoice its November 2024 services; the €0.2 m invoice arrives in January :: the service was received in 2024 → recognise expense and liability (€0.2 m) in 2024 (accrual basis)

**Balance sheet identity.** Closing balances = opening balances of the next year. Corrections are handled differently:
- German GAAP :: change of accounting policy → prospectively, through current-year income, with disclosure; correction of an error → in current-year income, with disclosure
- IFRS :: change of accounting policy → retrospectively, adjusting comparatives and equity; error → retrospective restatement if material, adjusting comparatives and equity

**Prudence principle.** Present the company "less rich rather than too rich". For corporations this stands in tension with the true and fair view. It has two parts:
- Realisation principle :: income must be realised, i.e. all obligations fulfilled; no increases above cost to higher market values
- Imparity principle :: losses are recognised as soon as they are probable; decreases to lower market values are recognised

Effect: **probable losses reduce profit, probable gains do not.**

Case "Hugo Ross AG" (31.12.2024):
- Office building in the centre of Munich bought 2010 for €2.2 m; expert value €8.5 m; binding offer of €9.3 m :: stays at historical cost €2.2 m less depreciation of the building part — neither the expert value nor the offer may be recognised; the gain is only realised when the sale happens
- 1,000 suits sold for €0.5 m on 28.12. under DAP (delivered at the customer's place); inventory value €0.3 m; truck still on the way on 31.12. :: risk only passes on delivery → no revenue yet; the suits stay in inventory at €0.3 m; the €0.2 m profit is not realised in 2024
- Shares bought for €2.0 m (€100 each), price €85 at year end, decline probably not permanent :: as current assets (cash surplus investment) → strict lower-of-cost-or-market → write down to €1.7 m (€0.3 m expense); as non-current financial assets → impairment is only an option for a temporary decline (mandatory only if permanent)

**Going concern (§ 252 I No. 2 HGB).** Measurement assumes that the business continues, unless actual facts or the legal situation prevent it. Time horizon: at least 12 months from the balance sheet date; no indication of bankruptcy in the foreseeable future; no intention to close down or liquidate by selling all assets. Then assets are valued at historical cost less depreciation over the useful life.

Indicators for going concern issues:
- Negative trends :: declining sales, increasing costs, recurring losses
- Systems :: inadequate accounting record keeping
- Legal :: major legal proceedings, pending liabilities and penalties for violations of law
- Intellectual property :: loss or expiry of a key licence or patent
- Business structure :: a major customer or key supplier was lost and cannot be replaced
- Financing :: default on a loan or no new financing available

Without going concern the statements are prepared on a **break-up basis**: all assets at market prices minus costs to sell, plus additional liabilities (e.g. legal fees, redundancy payments) → additional losses.`,
cards:[
{q:R`Common law vs civil law accounting`, a:R`Common law (US/UK): case-based, very detailed rules (US GAAP; IFRS with Conceptual Framework). Civil law (Germany): codified statutes with principles, interpreted in commentaries (German GAAP in the HGB).`},
{q:R`§ 238 I, § 243 I, § 264 II HGB`, a:R`§ 238 I: bookkeeping by GoB. § 243 I: FS by GoB. § 264 II: corporations' FS give a true and fair view of net assets, financial position and results.`},
{q:R`Principles of documentation vs principles of accounting`, a:R`Documentation = HOW to record (bookkeeping): clarity/transparency, completeness/correctness, ICS. Accounting = WHAT to record (FS): general, recognition and measurement principles.`},
{q:R`Value-clarifying vs value-creating events`, a:R`Value-clarifying: cause existed at the closing date → adjust the old year. Value-creating: cause arises after the closing date → no adjustment, report as subsequent event if material.`},
{q:R`Realisation vs imparity principle`, a:R`Realisation: gains only when realised (obligations fulfilled), no write-up above cost. Imparity: probable losses and decreases in value are recognised immediately.`},
{q:R`Balance sheet identity: German GAAP vs IFRS`, a:R`HGB: policy changes prospectively and errors in current-year income (with disclosure). IFRS: policy changes retrospectively, material errors restated retrospectively (comparatives and equity).`},
{q:R`Going concern assumption`, a:R`§ 252 I No. 2 HGB: assume continuation for at least 12 months; no bankruptcy indication, no liquidation intention → historical cost less depreciation. Otherwise break-up basis (market prices minus costs to sell plus extra liabilities).`},
{q:R`Six groups of going concern indicators`, a:R`Negative trends, systems (poor record keeping), legal proceedings, loss of key licence/patent, loss of major customer/supplier, financing problems (loan default, no new financing).`}
],
quiz:[
{q:R`Bad Luck AG (closing date 31.12.2024) learns in January 2025 that a key customer filed for bankruptcy at the start of the year. Receivables at year end: €2.1 m. Treatment?`, opts:[R`Write the receivable down in 2024 (value-clarifying)`,R`No adjustment, the bankruptcy happened only in 2025`,R`Disclose it in the notes and write it down in 2025`,R`Recognise a provision of €2.1 m in 2025`], correct:0, exp:R`The customer's financial distress already existed at the closing date; the bankruptcy only reveals it. Value-clarifying information must be reflected in the 2024 statements.`},
{q:R`Bad Luck AG had a €0.4 m provision for a lawsuit at 31.12.2024. In January 2025, before preparing the statements, it wins the case. What happens in the 2024 statements?`, opts:[R`The provision is released in 2024`,R`The provision stays, because gains may not be anticipated`,R`The provision is kept and released only in 2025`,R`The provision is increased for legal fees`], correct:0, exp:R`The lawsuit existed at the closing date; the judgment clarifies that no obligation existed. Value-clarifying facts count in both directions, so no provision is needed at 31.12.2024.`},
{q:R`A storm in early January 2025 damages a plant of Bad Luck AG (€1.2 m, fully insured). Effect on the 2024 balance sheet?`, opts:[R`None — value-creating event after the closing date`,R`Impairment of the plant by €1.2 m in the 2024 statements`,R`A provision of €1.2 m in the 2024 balance sheet`,R`An insurance receivable of €1.2 m in 2024`], correct:0, exp:R`The cause (the storm) arose after the closing date, so the 2024 values stay. At most it is reported as a subsequent event.`},
{q:R`Hugo Ross AG owns a building bought for €2.2 m in 2010; an expert values it at €8.5 m and a fund has made a binding offer of €9.3 m before year end. At which value is it shown?`, opts:[R`Historical cost less depreciation`,R`€8.5 m expert value`,R`€9.3 m binding offer`,R`€8.5 m, with the difference in a reserve`], correct:0, exp:R`Realisation principle: no write-up above (amortised) historical cost. The gain only counts once the sale is completed.`},
{q:R`Hugo Ross AG sells suits for €0.5 m on 28.12.2024 under DAP (delivered at the customer's place); on 31.12. the truck is still on the way. Inventory value €0.3 m. Treatment in 2024?`, opts:[R`No revenue yet; the suits stay in inventory at €0.3 m`,R`Revenue €0.5 m and cost of goods sold €0.3 m, both in 2024`,R`Revenue €0.5 m and a receivable, inventory stays`,R`A profit of €0.2 m is recognised directly in equity in 2024`], correct:0, exp:R`Under DAP the risk passes only on delivery at the customer's place. The obligation is not yet fulfilled, so the revenue is not realised in 2024.`},
{q:R`Hugo Ross AG holds shares as a short-term investment of surplus cash: cost €2.0 m (€100 per share), price at year end €85, decline probably temporary. Treatment?`, opts:[R`Mandatory write-down to €1.7 m`,R`Option to write down to €1.7 m`,R`No write-down because the decline is temporary`,R`Write-down to €1.7 m directly against equity`], correct:0, exp:R`Current assets follow the strict lower-of-cost-or-market principle: even temporary decreases must be recognised (€0.3 m expense). Only for non-current financial assets would a write-down for a temporary decline be optional.`},
{q:R`What is the effect of the prudence principle?`, opts:[R`Probable losses reduce profit, probable gains do not`,R`Probable gains and losses both affect profit`,R`Only realised losses and realised gains affect profit`,R`Probable gains are shown in equity, losses in P&L`], correct:0, exp:R`Realisation (gains only when realised) plus imparity (losses as soon as probable) create this asymmetry.`},
{q:R`Under German GAAP a company changes an accounting policy. How is this handled?`, opts:[R`Prospectively through current-year income, with disclosure`,R`Retrospectively, adjusting the comparatives and opening equity`,R`Through other comprehensive income`,R`It is not allowed at all under the balance sheet identity rule`], correct:0, exp:R`Balance sheet identity: closing = opening balances, so German GAAP handles changes prospectively. Retrospective restatement is the IFRS approach.`},
{q:R`Which belongs to the principles of documentation?`, opts:[R`Voucher principle`,R`Imparity principle`,R`Going concern`,R`Individual measurement`], correct:0, exp:R`Voucher principle, systematic order, living language, timeliness, retention periods, completeness, correctness and the ICS are documentation principles (HOW to record).`},
{q:R`What is the minimum time horizon of the going concern assumption?`, opts:[R`At least 12 months from the balance sheet date`,R`12 months from the date of preparation`,R`24 months from the balance sheet date`,R`Until the next audit opinion`], correct:0, exp:R`Going concern requires at least 12 months from the balance sheet date without indications of bankruptcy or liquidation.`},
{q:R`A company loses its only key licence and cannot find new financing. If going concern no longer holds, how are assets measured?`, opts:[R`Break-up basis: market price less costs to sell`,R`At historical cost less scheduled depreciation over useful life`,R`At replacement cost of equivalent assets on the reporting date`,R`At book value plus all hidden reserves of the business`], correct:0, exp:R`Without going concern the statements are prepared on a break-up basis; additional liabilities like legal fees and redundancy payments are added, causing extra losses.`},
{q:R`Which principle is a recognition principle?`, opts:[R`No offsetting`,R`Prudence`,R`Accrual basis`,R`Paid cost`], correct:0, exp:R`Recognition principles: balance sheet identity, completeness, no offsetting, formal comparability. Prudence, accrual basis and paid cost are measurement principles.`}
]},

{id:'fs-3', ch:3, title:'Balance Sheet — Assets', examWeight:'Asset criteria, § 266 II structure, acquisition vs production costs (mandatory/optional/prohibited) and impairment rules for non-current vs current assets',
summary:R`**Funds of the firm.** The balance sheet shows all investments of a company and their financing at one point in time, in monetary units. Uses of funds (investments) are on the left (debit), sources of funds (financing) on the right (credit). Uses are the **assets**; sources split into **liabilities and equity**.

Two financial accounting equations:
- Equation 1 (financial position) :: Assets = Liabilities + Equity
- Equation 2 (performance of the period) :: Total revenue & gains − total expenses & losses = net income (or loss)

Example Volkswagen AG, 31.12.2023 (€ million):
- Balance sheet = picture at one point in time :: assets 197,754 = liabilities 155,561 + equity 42,193
- P&L = performance of one period :: revenues & gains 107,831 − expenses & losses 101,588 = net income 6,243

**Equity is the link between P&L and balance sheet.** VW AG: net income 6,243 − transfer to revenue reserves 1,720 = 4,523 proposed for the dividend ("net retained profits").

**What is an asset?** Three criteria:
- Economic benefit :: the asset must provide a concrete future economic benefit (materials for production, land/buildings/machinery/software, cash, bonds, stocks); it must be probable — mere chances are not enough. A warehouse that is no longer needed after a change in the product mix has no economic benefit anymore.
- Separately measurable :: its value must be measurable separately from other assets. A new car is one asset (engine, transmission and chassis cannot be measured separately); a car and a trailer are two assets.
- Separately marketable :: it must be possible to sell or otherwise use it separately; otherwise it is no asset.

In addition:
- Economic ownership (§ 246 I HGB) :: the economic owner can use the asset and carries the majority of risks and rewards. Sale with retention of title → buyer is economic owner. Finance lease → lessee is economic owner. Operating lease → lessor is legal and economic owner.
- Specific legal recognition rules :: may deviate from the general rules

Specific recognition rules:
- Prohibited (§ 248 HGB) :: formation expenses of a company; certain self-developed non-current intangible assets (brands, customer lists, print titles …); other self-developed intangibles are allowed but not required
- Required :: acquired goodwill (§ 246 I HGB); prepaid expenses (§ 250 I HGB)
- Allowed :: deferred tax asset for corporations (§ 274 I HGB)

**Legal structure § 266 II HGB (corporations).**
- A. Non-current assets :: I. intangible assets (self-generated industrial rights, acquired concessions/licences, goodwill, payments in advance) · II. tangible assets (land and buildings, technical facilities and machines, other facilities and office equipment, payments in advance and assets under construction) · III. financial assets (shares in and loans to affiliated companies, participations, loans to companies with participation, non-current securities, other loans)
- B. Current assets :: I. inventories (raw materials, unfinished goods, finished goods and merchandise, payments in advance) · II. receivables and other assets · III. securities · IV. cash and bank balances
- C., D., E. :: deferred expenses (prepaid expenses), deferred tax assets, asset surplus from netting

General rules for the structure: it must be applied; current and prior year must be reported; further detailing is possible; items with arabic numbers may be aggregated if not material; once a structure and titles are chosen, they must be kept (comparability). The course shows the asset sides of Bayer AG, BMW AG and Deutsche Post AG (31.12.2023).

**Measurement of assets** is codified in § 253 HGB (initial and subsequent measurement) and § 255 HGB (measurement standards). It rests on the measurement principles prudence (in particular imparity), accrual basis and individual measurement.

Overview:
- Non-current assets (§ 247 II HGB: intended to serve the business long-term) :: initial = acquisition or production cost (intangible assets special) · subsequent = regular depreciation and impairments; reversal
- Current assets :: initial = acquisition or production cost · subsequent = strict lower-of-cost-or-market principle

**Acquisition costs (§ 255 I HGB)** = all expenses incurred to acquire an asset and make it ready for operation, as far as they are directly attributable; directly attributable price reductions are deducted:
=> Purchase price (net, no VAT) → + incidental acquisition costs → + subsequent acquisition costs (later expenses that improve usability or extend the useful life) → − price reductions (discounts, rebates) → = acquisition costs

Interest on borrowed capital is not included (controversial).

**Production costs (§ 255 II, IIa, III HGB)** = expenses for goods and services used to produce an asset, enlarge it or improve it beyond its original condition. Three kinds of components:
- Mandatory (= minimum production costs) :: direct material costs, direct manufacturing costs, special direct costs of manufacturing (models, prototypes, moulds, tools), adequate portion of indirect material costs, adequate portion of indirect manufacturing costs, depreciation of non-current assets used in production
- Optional (up to the maximum) :: adequate portion of general administration costs (HR, finance and accounting, IT), voluntary social benefits (canteen, day care, sports, anniversaries), voluntary pension scheme, borrowing costs (only if the loan financed this specific production and the interest relates to the production period)
- Prohibited :: distribution (selling) costs and research costs

How indirect costs are allocated depends on the company's cost accounting → **principle of substantial comparability** (use the method consistently); a standard (normal) utilisation of capacity is assumed.

Exercise "Mirecard Technology AG" (very prudent ATM producer): a prudent company capitalises only the mandatory components (minimum production costs) in inventory. Optional components are then expensed immediately → lower inventory values and lower profit in the year of production.

**Intangible assets** = assets without physical substance that are not financial assets: patents, software, licences, brands, non-competition obligations, internet domains …
- Acquired :: recognition and measurement like tangible assets
- Self-produced :: § 248 II HGB choice; certain items cannot be recognised; measurement: no research costs, only development costs if they can be clearly separated from research — otherwise usual production cost rules
- Goodwill (§ 246 I HGB) :: difference between the consideration for an acquired business and its net assets at fair value; treated like an asset with a definite useful life (it is not separately marketable)

=> Acquisition costs of the business (purchase price incl. incidental costs) → − net assets at fair value (acquired assets at fair value less acquired liabilities at fair value) → = acquired goodwill

**Subsequent measurement — non-current assets.**
- Definite useful life (buildings, machinery, patents, technical equipment) :: regular depreciation of the initial value over the useful life; impairment to fair value only if the decrease is likely to be permanent
- Indefinite useful life (land, financial assets) :: no regular depreciation; impairment to fair value only if the decrease is likely to be permanent; financial assets: option to impair also for temporary decreases

If the reason for an impairment no longer exists, the impairment **must be reversed**: for assets with indefinite life at most up to the initial book value; for assets with definite life at most up to the book value under the regular depreciation plan. **Exception: no reversal for acquired goodwill.**

**Subsequent measurement — current assets.** Current assets are all assets that are not non-current (§ 247 II HGB): inventories, receivables, securities, cash. No regular depreciation, but impairment under § 253 IV HGB, the **strict lower-of-cost-or-market principle**: current assets must be written down to a lower value from an exchange or market price at the balance sheet date; without a market price, fair value is used. **Temporary decreases must be reflected too**, and a write-down is reversed when its reason no longer applies.

Fair value is derived from:
- Procurement market :: replacement price + incidental acquisition costs − allowances for age or limited usability → for materials, buyable unfinished goods or services
- Sales market :: expected sales price − rebates/bonuses − subsequent costs until sale → for overstocked materials, non-buyable unfinished goods, finished goods (not buyable), securities
- Lower of both :: for merchandise and overstocked finished goods (buyable)

Examples:
- Raw material price falls in December and recovers in January :: write down to the 31 December market price
- Outdated merchandise on stock (older smartphones) :: fair value from the sales market
- Indication that a customer cannot pay on time :: specific allowance on that receivable, possibly plus a general allowance on the net value of all receivables`,
cards:[
{q:R`Two financial accounting equations`, a:R`Assets = liabilities + equity (position at a point in time). Revenue & gains − expenses & losses = net income (performance of a period).`},
{q:R`Three criteria for an asset (HGB)`, a:R`Economic benefit (probable, concrete), separately measurable, separately marketable — plus economic ownership and specific legal rules.`},
{q:R`Who is economic owner? Retention of title / finance lease / operating lease`, a:R`Retention of title → buyer. Finance lease → lessee. Operating lease → lessor (legal and economic owner).`},
{q:R`Recognition prohibited / required / allowed`, a:R`Prohibited (§ 248): formation expenses, self-developed brands, customer lists, print titles. Required: acquired goodwill (§ 246 I), prepaid expenses (§ 250 I). Allowed: deferred tax asset (§ 274 I).`},
{q:R`Acquisition costs (§ 255 I HGB)`, a:R`Purchase price (no VAT) + incidental + subsequent acquisition costs − price reductions; directly attributable only; no interest on borrowed capital.`},
{q:R`Production costs: mandatory / optional / prohibited`, a:R`Mandatory: direct material, direct manufacturing, special direct costs, adequate indirect material and manufacturing costs, production depreciation (= minimum). Optional: general administration, voluntary social benefits, voluntary pensions, borrowing costs (= maximum). Prohibited: distribution and research costs.`},
{q:R`Goodwill under HGB`, a:R`Consideration for the business − net assets at fair value. Must be recognised (§ 246 I), treated as asset with definite useful life, no reversal of impairment.`},
{q:R`Impairment non-current vs current assets`, a:R`Non-current: only if permanent (financial assets: option for temporary). Current: strict lower-of-cost-or-market — also temporary decreases.`},
{q:R`Limits for reversing an impairment`, a:R`Indefinite life: up to initial book value. Definite life: up to the book value of the regular depreciation plan. Acquired goodwill: never.`}
],
quiz:[
{q:R`A company bought a warehouse; after five years a change in its product mix means the warehouse is no longer needed. Which asset criterion is no longer met?`, opts:[R`Economic benefit`,R`Separate measurability`,R`Separate marketability`,R`Economic ownership`], correct:0, exp:R`The warehouse no longer provides a concrete future economic benefit to the company.`},
{q:R`A company buys a new car and a trailer. How many assets are recognised?`, opts:[R`Two: the car and the trailer`,R`One: the car including the trailer`,R`Several: engine, chassis and trailer`,R`None until both are paid in full`], correct:0, exp:R`Each can be measured and marketed separately. The car's parts (engine, transmission, chassis) cannot be measured separately, so the car itself is one asset.`},
{q:R`A machine is bought under retention of title by the seller. Who shows it on the balance sheet?`, opts:[R`The buyer (economic owner)`,R`The seller (legal owner)`,R`Both, each at half the value`,R`Nobody until the title passes`], correct:0, exp:R`§ 246 I HGB: the economic owner, who uses the asset and bears most risks and rewards, recognises it.`},
{q:R`Which item may NOT be recognised as an asset under § 248 HGB?`, opts:[R`A self-developed brand`,R`An acquired brand`,R`Acquired goodwill`,R`A purchased software licence`], correct:0, exp:R`Self-developed brands, customer lists and print titles are prohibited; acquired intangibles and acquired goodwill must be recognised.`},
{q:R`Which item belongs to the acquisition costs of a machine?`, opts:[R`Transport and installation costs`,R`Deductible input VAT`,R`Interest on the loan used to buy it`,R`General administration overhead`], correct:0, exp:R`Acquisition costs include all directly attributable costs to make the asset ready for operation. VAT (deductible) and interest on borrowed capital are not included.`},
{q:R`Which component of production costs is prohibited?`, opts:[R`Distribution (selling) costs`,R`Indirect manufacturing overhead costs`,R`Voluntary social benefits (canteen, sports)`,R`Depreciation of production machines`], correct:0, exp:R`Distribution and research costs are prohibited. Indirect material and production depreciation are mandatory; voluntary social benefits are optional.`},
{q:R`A very prudent company values its inventory of self-produced goods. What does it capitalise?`, opts:[R`Only the mandatory components (minimum)`,R`All mandatory and optional components (maximum)`,R`Mandatory components plus distribution costs`,R`Only direct material and direct labour`], correct:0, exp:R`Prudence → lowest permitted value: minimum production costs. Optional parts are expensed, which lowers inventory and profit (as in the Mirecard exercise).`},
{q:R`When may borrowing costs be included in production costs?`, opts:[R`If a loan financed this production, for the production period`,R`Always, because interest on the loan is a direct cost of production`,R`Never, they are prohibited components`,R`Only for assets whose useful life is longer than ten years in total`], correct:0, exp:R`Borrowing costs are an optional component, allowed only under these two conditions.`},
{q:R`An item of land loses value temporarily. What does German GAAP require?`, opts:[R`No impairment, as the decrease is not permanent`,R`Mandatory impairment to fair value at the balance sheet date`,R`Regular depreciation over 50 years`,R`An option to impair, as for non-current financial assets`], correct:0, exp:R`Non-current assets are only impaired if the decrease is likely to be permanent. The option for temporary decreases exists only for financial assets.`},
{q:R`A machine was impaired; two years later the reason no longer applies. Up to which value must the impairment be reversed?`, opts:[R`Its book value under the regular plan`,R`Original acquisition cost of the machine`,R`Its current fair value, even if that is above amortised cost`,R`No reversal is allowed for machines at all`], correct:0, exp:R`For assets with a definite life the reversal is capped at the amortised cost of the regular plan. Only acquired goodwill may never be reversed.`},
{q:R`Raw material prices fall in December and recover in January. How are the raw materials shown at 31 December?`, opts:[R`At the lower market price of 31 December (impairment)`,R`At cost, because the decrease is temporary`,R`At the recovered January price`,R`At cost with a note on the price drop`], correct:0, exp:R`Current assets follow the strict lower-of-cost-or-market principle, which also covers temporary decreases.`},
{q:R`How is the fair value of overstocked finished goods (not buyable) derived?`, opts:[R`From the sales market`,R`From the procurement market`,R`From the lower of both markets`,R`From production cost plus margin`], correct:0, exp:R`Sales market: expected sales price − rebates − subsequent costs until sale. It applies to non-buyable finished goods, overstocked materials and securities.`},
{q:R`Volkswagen AG reported net income of €6,243 m for 2023 and transferred €1,720 m to revenue reserves. What was proposed for the dividend?`, opts:[R`€4,523 m`,R`€6,243 m`,R`€7,963 m`,R`€1,720 m`], correct:0, exp:R`6,243 − 1,720 = 4,523 ("net retained profits"). Equity links P&L and balance sheet.`}
]},

{id:'fs-4', ch:4, title:'Balance Sheet — Equity & Liabilities', examWeight:'Debt vs provision vs contingent liability, § 249 provisions, settlement amount and higher-of-cost-or-market, and the three ways to present equity',
summary:R`**Legal structure § 266 III HGB (corporations).** The same general rules apply as on the assets side.
- A. Equity :: I. subscribed capital · II. capital reserves · III. revenue reserves (1. legal reserves, 2. reserves for shares of a controlling entity, 3. statutory reserves, 4. other revenue reserves) · IV. profit/loss carry forward · V. net profit/loss of the year
- B. Provisions :: 1. pensions and similar obligations · 2. tax provisions · 3. other provisions
- C. Debt (liabilities) :: bonds (thereof convertible), bank debt, received advance payments for orders, trade payables, payables from bills of exchange, payables to affiliated companies, payables to companies with participation, other payables
- D., E. :: deferred income, deferred tax liabilities

Equity = capital belonging to the owners. Liabilities = obligations of the company to others: certain obligations → **debt**; uncertain obligations → **provisions**.

Equity ratios of the course examples (2022 → 2023): Bayer AG 33 % → 37 %, BMW AG 28 % → 26 %, Deutsche Post AG 41 % → 42 %.

**Recognition of a liability** — all three criteria must be met:
- Obligation :: legal, contractual or constructive
- Economic burden :: settlement requires economic resources (cash, goods, working time); the burden must be probable, i.e. more likely than not
- Quantifiable :: the burden must be quantifiable; if no sufficiently reliable estimate is possible → no liability

If a criterion is missing, it may still be a contingent liability. The probability of the economic burden decides:
- Remote to possible (up to 50 %) :: no recognition, but disclosure in the notes → **contingent liability**
- Probable, "more likely than not" (above 50 %) :: recognition as a liability if it can be measured reliably (else notes disclosure) → **provision**
- Virtually certain (around 90 % and more) :: → **debt**

Example product complaint: if the product is faulty and the company is legally required to repair or exchange it → **legal obligation**. If the customer simply dislikes the colour but the company has always honoured such wishes and the customer expects it → **constructive obligation**. BMW AG's other provisions include statutory and non-statutory warranty obligations and product guarantees.

Example guarantee: a company guarantees to repay a loan of a business partner if the partner fails. This is a contractual and quantifiable obligation, but as long as the partner fulfils its duties no economic burden is probable → **contingent liability**, not recognised in the balance sheet. BMW AG shows contingent liabilities of €61,615 m (2023), mostly guarantees in favour of subsidiaries; in the consolidated statement they are only €1,969 m.

**Debts** are certain liabilities: the basis of the obligation and the settlement amount are virtually certain (bonds, bank debts, advance payments received, trade payables …).

**Provisions** are uncertain liabilities: the reason and/or the settlement amount is uncertain. § 249 HGB lists all reasons for a provision; for any other reason a provision may not be recognised. The general criteria (obligation, economic burden, quantifiable) apply.
- External obligation :: provisions for uncertain liabilities; provisions for warranty services without legal obligation; provisions for onerous contracts
- Internal obligation :: provision for omitted maintenance, if made up within 3 months; provision for omitted waste disposal, if made up within 12 months

Provisions for uncertain liabilities are e.g. for litigation, (legal) warranty services, taxes, pensions and similar obligations.

**Provision for onerous contracts** = expected future loss from a pending transaction. "Pending" means none of the contractual parties has fulfilled its obligation yet. The imparity principle requires anticipating the probable future loss.

Case "Coffee and beans AG": contract signed in July 2024 for 10 tons of Arabica at a fixed 9.50 USD/kg, delivery and payment in March 2025. Due to a strong harvest the price falls to 7.80 USD/kg by 31.12.2024. The contract is pending and onerous → provision for the expected loss: (9.50 − 7.80) × 10,000 kg = **17,000 USD** (converted into euros).

**Measurement of liabilities.**
- § 253 I HGB :: debts at their settlement amount; provisions at the amount required for settlement based on a reasonable commercial assessment
- § 253 II HGB :: provisions with a remaining maturity of more than one year are discounted at the average market interest rate for their remaining maturity
- Debts :: initial = settlement amount · subsequent = settlement amount with the strict higher-of-cost-or-market principle
- Provisions :: initial = estimated settlement amount, present value if maturity > 1 year · subsequent = updated estimate, present value if maturity > 1 year

**Debts — initial measurement.** Settlement amount = all economic resources used to settle the obligation (cash, goods, services); generally the nominal amount. Interest-free long-term debts are **not discounted** (unlike provisions). Examples: trade payables (incl. VAT), bank debts, most other payables.

Bond example "Hugo Ross AG" (5 years, 3 % interest, nominal 100):
- Payout 98 (discount) :: debt at settlement amount 100; the 2 is either interest expense immediately or — option § 250 III HGB — a deferred expense released pro rata over the 5 years (0.4 per year); zero bonds are a special problem
- Payout 102 (premium) :: debt 100 plus deferred income 2, released pro rata over 5 years (realisation principle): Dr cash 102 / Cr debt 100 / Cr deferred income 2; yearly Dr deferred income 0.4 / Cr interest 0.4

**Debts — subsequent measurement**: settlement amount combined with the higher-of-cost-or-market principle. Example bank loan USD 3 m, 10 years:
- 31.12.00, 1.15 USD per EUR :: bank debt €2.61 m
- 31.12.01, 1.05 USD per EUR :: higher value → €2.86 m
- 31.12.02, 1.30 USD per EUR :: stays at €2.61 m, not €2.31 m — never below the initial amount
- Exception § 256a HGB :: remaining maturity within one year → unrealised gains may be realised

**Provisions — initial measurement.** (a) Burden probable and precisely quantifiable → settlement amount. (b) Burden certain or probable, amount unclear but estimable → settlement amount based on a reasonable commercial assessment:
- Prudence principle, without deliberate over- or undervaluation
- Estimate the complete settlement amount (except onerous contracts: only the loss)
- Estimate at the time of settlement (future prices and costs)
- Discount long-term provisions with the defined interest rate

Provision examples:
- Hugo Ross legal claim: 70 % chance of losing and paying €1 m, 30 % of winning with no payment :: probable obligation → provision of **€1 m**, the most likely settlement amount (not an expected value of €0.7 m)
- Damage of about €30 k caused by the company, insurance expected to reimburse, nothing paid yet :: provision **€30 k**; the reimbursement claim may not be offset against it (no offsetting) and is only recognised as an asset once virtually certain (realisation principle)
- "Toys AG" replaces defective mini-trucks for 2 years beyond the legal warranty; experience: 2 % need replacing :: warranty without legal obligation → provision based on experience (2 % of the products still within the extra period × replacement cost)

**Provisions — subsequent measurement.** At every year end: is the obligation still valid, is the burden still probable, is the estimate still reasonable? If the reason no longer exists, the provision **must be released** (increasing profit). A change in the estimated settlement amount adjusts the provision up or down.

Further reading (Nothhelfer): provisions for pensions p. 95–98, deferrals and accruals p. 101–103. Not relevant for this course: deferred taxes, hedge accounting, leasing accounting in detail.

**Equity.** The HGB has no definition, only structure rules. IFRS Conceptual Framework 49: "Equity is the residual interest in the assets of the enterprise after deducting all its liabilities." From an accounting view equity equals net assets; from a legal view it defines the shareholders' claims and what is liable to creditors in insolvency; from a controlling view it shows how much was paid in from outside and how much was earned and retained.

Four functions of equity:
- Working function :: capital provided by the owners, usually for an unlimited period, to finance the company's activities
- Liability function :: the company is liable with all its wealth, but owners of corporations only with their paid-in capital — creditors should know how much that is
- Buffer for losses :: equity rises and falls with the yearly results; continuous losses can make it negative → overindebtedness
- Profit distribution :: the owners decide (e.g. at the annual meeting) to reinvest, distribute via dividends or both; profit is distributed by number of shares

Example Wirecard (30.9.2019, € million): equity 2,314.8, total assets 7,001.5. A write-off of 2.9 bn (Dr expenses 2.9 bn / Cr intangible assets 1.0 bn / Cr cash 1.9 bn), closed via Dr equity / Cr P&L, turns equity into 2,314.8 − 2,900 = **−585.2**. Non-current assets fall to 957.7 and current assets to 3,143.8 (together 4,101.5); the negative equity of 585.2 appears as a balancing item (deficit not covered by equity) on the assets side, so the total is 4,686.7 = liabilities.

**Presentation of equity** — three ways for revenue reserves and profit:
- Without use of profit (§ 266 III HGB) :: shareholders have not yet decided on the profit when the statements are prepared
- With partial use of profit :: the most usual case
- With total use of profit :: rare

Positions without use of profit:
- Subscribed capital :: number of shares outstanding × nominal value per share
- Capital reserves :: additional payments by shareholders, especially the premium (agio)
- Legal reserves :: mandatory for stock companies (§ 150 AktG)
- Reserves for shares of a controlling entity :: corrective position if the company holds shares of its own parent
- Statutory reserves :: if the articles of association require additional reserves
- Other revenue reserves :: accumulated, undistributed profits of prior years
- Profit/loss carry forward :: "left-over" of last year's result, undistributed
- Net profit/loss of the year :: the "bridge" to the P&L

With partial use of profit, the management and supervisory boards approve the statements including transfers to/from reserves and suggest to the annual meeting how to use the retained earnings ("Bilanzgewinn"):
=> Net profit/loss of the year → ± profit/loss carry forward → + transfers from capital/revenue reserves → − transfers to revenue reserves → = retained earnings (Bilanzgewinn)

Management can thus equalise the retained earnings available for dividends via releases from and allocations to reserves.

With total use of profit — basically not possible for a stock company, because the shareholders' meeting decides on dividends; possible for a GmbH depending on the timing of the approval. The dividend is then shown under liabilities, no longer in equity.`,
cards:[
{q:R`Three criteria for a liability`, a:R`Obligation (legal, contractual, constructive), economic burden (probable, more likely than not), quantifiable (reliable estimate). All three needed.`},
{q:R`Contingent liability vs provision vs debt`, a:R`Up to 50 % (remote/possible): contingent liability, notes only. Above 50 % (probable): provision if reliably measurable. Virtually certain: debt.`},
{q:R`§ 249 HGB provisions (external / internal)`, a:R`External: uncertain liabilities, warranty without legal obligation, onerous contracts. Internal: omitted maintenance made up within 3 months, omitted waste disposal made up within 12 months. No other provisions allowed.`},
{q:R`Onerous contract provision`, a:R`Expected future loss from a pending transaction (no party has performed yet); imparity principle. Coffee case: (9.50 − 7.80) × 10,000 kg = 17,000 USD.`},
{q:R`Measurement of debts`, a:R`Settlement amount (nominal), no discounting even if interest-free; subsequently higher-of-cost-or-market (exception § 256a: maturity ≤ 1 year).`},
{q:R`Measurement of provisions`, a:R`Settlement amount by reasonable commercial assessment, future prices, complete amount (onerous: only the loss), discounted if maturity > 1 year; reassessed each year end, released if reason gone.`},
{q:R`Bond issued at 98 / at 102 (nominal 100, 5 years)`, a:R`At 98: debt 100; 2 as interest expense or (option § 250 III) deferred expense released 0.4 p.a. At 102: debt 100 + deferred income 2, released 0.4 p.a. into interest.`},
{q:R`Four functions of equity`, a:R`Working function, liability function, buffer for losses (negative → overindebtedness), profit distribution.`},
{q:R`Retained earnings (Bilanzgewinn) with partial use of profit`, a:R`Net profit/loss ± carry forward + transfers from capital/revenue reserves − transfers to revenue reserves.`}
],
quiz:[
{q:R`A company guarantees a business partner's bank loan. The partner is financially sound and pays on time. How is the guarantee shown?`, opts:[R`Contingent liability, disclosed in the notes`,R`Provision for uncertain liabilities at the full amount`,R`Debt at the guaranteed amount`,R`Not at all, because the amount is not quantifiable`], correct:0, exp:R`The obligation is contractual and quantifiable, but no economic burden is probable while the partner performs → contingent liability (no recognition, notes disclosure).`},
{q:R`A customer dislikes the colour of a product; the company has no legal duty but has always exchanged products in such cases and the customer expects it. What kind of obligation is this?`, opts:[R`Constructive obligation`,R`Legal obligation`,R`Contractual obligation`,R`No obligation at all`], correct:0, exp:R`An obligation created by past practice and justified expectations is constructive. A faulty product would be a legal obligation.`},
{q:R`Which provision is NOT permitted under § 249 HGB?`, opts:[R`Provision for general future business risks`,R`Provision for onerous contracts`,R`Warranty provision without legal obligation`,R`Omitted maintenance made up within 3 months`], correct:0, exp:R`§ 249 lists all permitted provisions exhaustively; a general provision for future risks is not among them.`},
{q:R`Omitted maintenance from 2024 is made up in May 2025. May a provision be recognised at 31.12.2024?`, opts:[R`No, it must be made up within 3 months`,R`Yes, within 12 months is sufficient`,R`Yes, maintenance provisions have no time limit`,R`Only as a contingent liability in the notes`], correct:0, exp:R`Internal-obligation provisions for omitted maintenance require the work to be made up within 3 months (waste disposal: 12 months).`},
{q:R`Coffee and beans AG must buy 10 t of coffee at 9.50 USD/kg in March 2025; at 31.12.2024 the market price is 7.80 USD/kg. Required provision?`, opts:[R`17,000 USD (in euros)`,R`95,000 USD (in euros)`,R`78,000 USD (in euros)`,R`None, the contract is pending`], correct:0, exp:R`Pending + onerous → provision for the expected loss: (9.50 − 7.80) × 10,000 kg = 17,000 USD.`},
{q:R`Hugo Ross faces a claim: 70 % chance of losing and paying €1 m, 30 % of winning with no payment. Provision under German GAAP?`, opts:[R`€1.0 m`,R`€0.7 m`,R`€0.3 m`,R`None, just a notes disclosure`], correct:0, exp:R`The burden is probable (> 50 %), so a provision is required at the most likely settlement amount — the full €1 m, not the expected value.`},
{q:R`A company caused damage of about €30 k; its liability insurance should reimburse it, but nothing has been paid by year end. What is recognised?`, opts:[R`Provision €30 k; no netting with the insurance claim`,R`No provision, because the insurance company will pay it`,R`Provision €30 k and an insurance receivable of the same €30 k`,R`Provision of zero after offsetting both`], correct:0, exp:R`No offsetting: the obligation is shown in full. The reimbursement is only recognised once virtually certain (realisation principle).`},
{q:R`An interest-free loan of €500 k is repayable in 4 years. At which value is it recognised?`, opts:[R`€500 k, not discounted`,R`Present value of €500 k`,R`€500 k less a deferred expense`,R`Present value, increased each year until repayment`], correct:0, exp:R`Debts are measured at their settlement amount; unlike provisions, long-term interest-free debts are not discounted.`},
{q:R`A USD 3 m loan was recognised at €2.61 m (1.15 USD per EUR). At year end the rate is 1.30 USD per EUR; maturity 8 years. Balance sheet value?`, opts:[R`€2.61 m`,R`€2.31 m`,R`€2.86 m`,R`€3.00 m`], correct:0, exp:R`Higher-of-cost-or-market: the debt may not fall below its initial amount; the unrealised gain is not recognised. § 256a only allows it for maturities within one year.`},
{q:R`A bond with nominal 100 (5 years) is issued at 102. How is the premium treated?`, opts:[R`Deferred income of 2, released 0.4 per year`,R`Interest income of 2 in the year the bond is issued`,R`Debt recognised at 102 and kept at that amount`,R`Capital reserve of 2, like a share premium (agio)`], correct:0, exp:R`Debt at settlement amount 100; the premium is deferred and released pro rata over the maturity (realisation principle).`},
{q:R`What does the capital reserve mainly contain?`, opts:[R`Premiums (agio) paid by shareholders`,R`Accumulated, undistributed profits of prior years`,R`Number of shares × nominal value per share`,R`Reserves required by the articles of association`], correct:0, exp:R`Capital reserves = additional payments by shareholders, especially the agio. Accumulated profits are other revenue reserves; shares × nominal value is subscribed capital.`},
{q:R`Net profit €800 k, loss carry forward €100 k, transfer to revenue reserves €300 k. Retained earnings (Bilanzgewinn)?`, opts:[R`€400 k`,R`€600 k`,R`€500 k`,R`€1,000 k`], correct:0, exp:R`800 − 100 − 300 = 400 (net profit ± carry forward + releases − transfers to reserves).`},
{q:R`Why is the "total use of profit" presentation basically not possible for an AG?`, opts:[R`The shareholders' meeting decides on dividends`,R`AGs may not pay dividends from profits`,R`§ 266 HGB prohibits it for all corporations`,R`The supervisory board alone sets the dividend`], correct:0, exp:R`In a stock company the shareholders' meeting decides the dividend, so the profit cannot be fully used before. A GmbH may present it this way; the dividend is then a liability.`},
{q:R`Which equity function warns of overindebtedness when continuous losses occur?`, opts:[R`Buffer for losses`,R`Working function`,R`Liability function`,R`Profit distribution`], correct:0, exp:R`Equity buffers losses; continuous losses can make it negative (as in the Wirecard example), which means overindebtedness.`}
]},

{id:'fs-5', ch:5, title:'Profit and Loss Account', examWeight:'Total-cost vs cost-of-sales format and the effect of inventory changes — compute the door example both ways',
summary:R`**Legal basis.**
- § 242 II HGB :: at the end of every fiscal year a company prepares a comparison of expenses and revenues (P&L statement)
- § 252 I No. 5 HGB (accrual basis) :: expenses and revenues of a fiscal year are recognised irrespective of the time of the corresponding payments

The result is a detailed, **non-netted** performance of the company within one period.

**§ 275 HGB for corporations.** The P&L is prepared in **vertical format** (not in account format), either in the **total-cost format** (nature-of-expense method) or in the **cost-of-sales format**. Basic structure:
=> Operating result (revenues and expenses from ordinary activities) → ± financial result (income/expenses from participations, interest) → ± taxes (income and other taxes) → = profit/loss of the period → ± changes in capital and revenue reserves (optional) → = retained earnings

In the course examples BMW AG uses the **cost-of-sales format** (revenues, cost of sales, gross profit, selling, administrative and R&D expenses) and Deutsche Post AG the **total-cost format** (revenue, other own work capitalised, materials expense, staff costs, amortisation and depreciation).

**Revenues** (sales, turnover) come from the "normal" course of business and are shown net of sales reductions and net of VAT and other taxes directly connected with revenue transactions.

Key measurement principles of the P&L:
- Realisation principle :: governs revenues
- Accrual basis incl. matching principle :: governs expenses — report expenses at the same time as the revenues they relate to

**Total-cost vs cost-of-sales format.**
- Total-cost format :: expenses by nature only (material, staff, depreciation …) → simpler cost accounting; two "corrective" separate lines in the P&L for matching: increase/decrease in finished and unfinished goods and other own work capitalised
- Cost-of-sales format :: expenses by functional area (cost of sales, distribution, administration) → costs must be allocated to functions; no correction lines needed, the matching happens within cost of sales

**The result must be the same** in both formats.

Example: a company makes wooden doors. Material (wood) €100,000 and personnel €300,000; it produces 10,000 doors and sells 8,000 at €60; 2,000 stay in stock.
- Revenues :: 8,000 × €60 = €480,000
- Production cost per door :: €400,000 / 10,000 = €40
- Increase in inventories :: 2,000 × €40 = €80,000 (booking: Dr finished goods 80k / Cr change in inventory 80k)
- Total-cost format :: 480,000 + 80,000 − 100,000 − 300,000 = **€160,000**
- Cost-of-sales format :: 480,000 − cost of sales (8,000 × €40 = 320,000) = **€160,000**

If more is produced than sold, the costs of the over-production are neutralised by the inventory increase (inventory = asset) → over-production increases income compared with the expenses. If fewer are produced than sold, the costs of the "over-sold" products from stock are added → under-production decreases income.`,
cards:[
{q:R`§ 242 II and § 252 I No. 5 HGB`, a:R`§ 242 II: prepare a P&L comparing expenses and revenues every year. § 252 I No. 5: accrual basis — record irrespective of payment dates.`},
{q:R`Structure of the P&L (§ 275 HGB)`, a:R`Operating result ± financial result ± taxes = profit/loss of the period ± changes in reserves (optional) = retained earnings. Vertical format.`},
{q:R`Total-cost vs cost-of-sales format`, a:R`Total-cost: expenses by nature + correction lines (change in inventories, own work capitalised). Cost-of-sales: by function (cost of sales, distribution, administration), no correction lines. Same result.`},
{q:R`Which principles govern revenues and expenses in the P&L?`, a:R`Revenues: realisation principle. Expenses: accrual basis incl. matching principle.`},
{q:R`Door example result`, a:R`Revenue 480,000; inventory increase 2,000 × 40 = 80,000. TCF: 480 + 80 − 100 − 300 = 160k. COS: 480 − 320 = 160k.`},
{q:R`Effect of over-/under-production in the total-cost format`, a:R`Over-production: inventory increase is added (raises income vs expenses). Under-production: inventory decrease is deducted (lowers income).`}
],
quiz:[
{q:R`In which format must corporations present the P&L under § 275 HGB?`, opts:[R`Vertical format, total-cost or cost-of-sales`,R`Account format, with the total-cost format only`,R`Vertical format, with the cost-of-sales format only`,R`Account format, with either of the two methods`], correct:0, exp:R`§ 275 HGB requires the vertical format and allows both the total-cost (nature-of-expense) and the cost-of-sales format.`},
{q:R`Which line appears only in the total-cost format?`, opts:[R`Change in inventories`,R`Cost of sales (by functional area)`,R`Gross profit`,R`Selling expenses`], correct:0, exp:R`The change in inventories and other own work capitalised are the corrective lines of the total-cost format. Cost of sales, gross profit and selling expenses belong to the cost-of-sales format.`},
{q:R`A door maker produces 10,000 doors (material €100 k, personnel €300 k) and sells 8,000 at €60. Profit?`, opts:[R`€160,000`,R`€80,000`,R`€480,000`,R`€240,000`], correct:0, exp:R`Inventory increase 2,000 × €40 = €80 k. 480 + 80 − 100 − 300 = 160 (total-cost) = 480 − 320 (cost-of-sales).`},
{q:R`In the door example, how large is the inventory increase in the total-cost format?`, opts:[R`€80,000`,R`€120,000`,R`€100,000`,R`€160,000`], correct:0, exp:R`2,000 doors in stock × production cost €40 per door = €80,000 (Dr finished goods / Cr change in inventory).`},
{q:R`A company sells more units than it produced this year (stock is reduced). Effect in the total-cost format?`, opts:[R`A decrease in inventory lowers the result`,R`An increase in inventory raises the result`,R`No effect, only the balance sheet changes`,R`Cost of sales rises in a separate line`], correct:0, exp:R`Under-production: the costs of the units taken from stock are added as a decrease in inventory, which lowers income.`},
{q:R`Which principle requires reporting expenses together with the revenues they relate to?`, opts:[R`Matching principle (accrual basis)`,R`Realisation principle`,R`Imparity principle`,R`Principle of individual measurement`], correct:0, exp:R`Matching is part of the accrual basis and governs expenses; the realisation principle governs revenues.`},
{q:R`How are revenues shown in the P&L?`, opts:[R`Net of sales reductions and VAT`,R`Gross, including VAT`,R`Net of VAT, before sales reductions`,R`Including all other operating income`], correct:0, exp:R`Revenues stem from the normal course of business and are shown net of sales reductions and VAT/other directly connected taxes.`},
{q:R`Which company in the course uses the cost-of-sales format?`, opts:[R`BMW AG`,R`Deutsche Post AG`,R`Both BMW AG and Deutsche Post AG`,R`Neither, both use the total-cost format`], correct:0, exp:R`BMW AG reports revenues, cost of sales and gross profit (cost-of-sales format); Deutsche Post AG reports by nature of expense (total-cost format).`}
]},

{id:'fs-6', ch:6, title:'Notes to Financial Statements', examWeight:'The four functions of the notes and typical mandatory content',
summary:R`For corporations the financial statements consist of balance sheet, profit and loss account **and notes** (§ 264 I HGB). The main rules on the notes are in **§§ 284–288 HGB**; depending on the legal form, more requirements follow (e.g. from the Stock Corporation Act).

The notes have four functions:
- Interpretation :: information that allows users to interpret the financial statements, e.g. the recognition and measurement methods
- Relief :: required information is given in the notes instead of the balance sheet or P&L, which can improve clarity and transparency
- Addition :: additional information on balance sheet / P&L positions or other additional information, e.g. the number of employees
- Correction :: the rare case that balance sheet or P&L do not give a true and fair view even though the legal rules were applied

Content of the notes:
- Mandatory :: either only in the notes, or optionally in the balance sheet/P&L or in the notes
- Voluntary :: further information the company chooses to give
- General information :: on presentation and on measurement
- Specific information :: on specific positions and other information

Examples of required content:
- Name and location of the company, company register and registration number
- Recognition and measurement methods applied in balance sheet and P&L
- Changes in naming and structure of balance sheet and P&L, with reasons
- Whether borrowing costs are included in production costs
- Development of non-current assets from opening to closing balance
- For each category of debts: portions maturing within 1 year, in 1–5 years and over 5 years
- Remuneration of the auditors (including fees for services other than the audit)

The course shows the notes of BMW AG, Deutsche Post AG and Bayer AG (31.12.2023). Details: Nothhelfer p. 119–125.`,
cards:[
{q:R`Legal basis of the notes`, a:R`§ 264 I HGB (FS of corporations = balance sheet + P&L + notes); content §§ 284–288 HGB plus legal-form rules (e.g. AktG).`},
{q:R`Four functions of the notes`, a:R`Interpretation, relief, addition, correction.`},
{q:R`Examples of mandatory notes content`, a:R`Company data and register number; recognition/measurement methods; changes in structure with reasons; borrowing costs in production costs; development of non-current assets; debt maturities (< 1, 1–5, > 5 years); auditor fees.`}
],
quiz:[
{q:R`The notes disclose the recognition and measurement methods used. Which function is this?`, opts:[R`Interpretation`,R`Relief`,R`Addition`,R`Correction`], correct:0, exp:R`Interpretation: information that helps users interpret the balance sheet and P&L, such as the methods applied.`},
{q:R`A company reports the number of its employees in the notes. Which function?`, opts:[R`Addition`,R`Interpretation`,R`Relief`,R`Correction`], correct:0, exp:R`Addition: further information to positions or other additional information such as employee numbers.`},
{q:R`Required information is moved from the balance sheet into the notes to keep the balance sheet clear. Which function?`, opts:[R`Relief`,R`Correction`,R`Addition`,R`Interpretation`], correct:0, exp:R`Relief: information is given in the notes instead of in balance sheet or P&L, improving clarity.`},
{q:R`In which rare case do the notes have a correction function?`, opts:[R`When rules are applied but no true and fair view results`,R`When an error of the prior year must be restated retrospectively`,R`When the auditor refuses to issue an unqualified audit opinion`,R`When the management report is missing for a medium-sized firm`], correct:0, exp:R`Correction: the rare case that balance sheet or P&L do not give a true and fair view even though all legal rules were applied.`},
{q:R`Which debt maturity bands must be disclosed for each category of debts?`, opts:[R`Within 1 year, 1–5 years, over 5 years`,R`Within 6 months, 6–12 months, over 1 year`,R`Within 1 year and over 1 year only`,R`Within 3 years, 3–10 years, over 10 years`], correct:0, exp:R`The notes show for each category of debts the portions due within 1 year, in 1–5 years and after more than 5 years.`},
{q:R`Which paragraphs contain the main rules for the notes?`, opts:[R`§§ 284–288 HGB`,R`§§ 238–241 HGB`,R`§§ 289–289f HGB`,R`§§ 290–293 HGB`], correct:0, exp:R`§§ 284–288 HGB regulate the notes; §§ 289 ff. the management report; §§ 290 ff. consolidated statements.`}
]},

{id:'fs-7', ch:7, title:'Cash Flow Statement', examWeight:'Who must prepare it, the three activities, direct vs indirect method and the indirect-method adjustments',
summary:R`**Obligation (§ 264 I HGB).** For capital-market-oriented corporations that do not prepare consolidated financial statements, a cash flow statement is mandatory in the stand-alone financial statements. The HGB contains **no codified rules on HOW** to prepare it.

Purpose of the cash flow statement:
- Information about the development of cash and cash equivalents within one period
- Shows the sources of cash and where the company spends it
- Gives insights into liquidity, solvency and financial flexibility

Definitions:
- Cash :: cash in hand and demand deposits
- Cash equivalents :: short-term, highly liquid investments, readily convertible to known amounts of cash and subject to an insignificant risk of changes in value; what matters is the purpose — they must serve day-to-day cash needs, not investing or longer-term funding
- Cash flows :: inflows and outflows of cash and cash equivalents

Three activities:
- Operating cash flows :: inflows and outflows from operations; operating activities are the principal revenue-producing activities and all other activities that are not investing or financing
- Investing cash flows :: inflows and outflows from non-current assets; acquisition and disposal of long-term assets and other investments not included in cash equivalents
- Financing cash flows :: inflows and outflows from non-current liabilities and equity; activities that change the size and composition of equity and borrowings

**Methods.** Operating cash flows may be reported with the direct or the indirect method; investing and financing cash flows always with the direct method.
- Direct method :: discloses the major classes of gross cash receipts and gross cash payments; might be more accurate, but is almost never found in practice
- Indirect method :: starts from net profit or loss and adjusts for non-cash transactions and for deferrals/accruals of past or future operating receipts or payments; commonly applied in practice

Indirect method for operating activities:
- Start :: net income
- + depreciation of non-current assets
- − gains / + losses from sales of non-current assets
- − increase / + decrease in trade receivables, inventories, other short-term assets
- + increase / − decrease in trade payables and other short-term liabilities
- = net cash provided by operating activities

Example Henkel KGaA (consolidated, IFRS, 2023, € million): operating +3,255, investing −684, financing −1,754 → net change in cash **+817**.

Financial analysts use the **free cash flow** = operating cash flow − capital expenditures. It has no legal definition; Henkel reports it voluntarily (2023: 2,603).`,
cards:[
{q:R`Who must prepare a cash flow statement in stand-alone FS?`, a:R`Capital-market-oriented corporations that do not prepare consolidated FS (§ 264 I HGB). No codified rules on how.`},
{q:R`Cash equivalents`, a:R`Short-term, highly liquid investments, readily convertible into known amounts of cash with insignificant value risk, held for day-to-day cash needs.`},
{q:R`Three cash flow activities`, a:R`Operating (principal revenue-producing + everything else), investing (non-current assets, investments), financing (equity and borrowings).`},
{q:R`Direct vs indirect method`, a:R`Direct: gross receipts and payments (rare). Indirect: net income adjusted for non-cash items and working-capital changes (common). Investing/financing always direct.`},
{q:R`Indirect method adjustments`, a:R`+ depreciation, − gains/+ losses on disposals, − increase/+ decrease in receivables & inventories, + increase/− decrease in payables.`},
{q:R`Free cash flow`, a:R`Operating cash flow − capital expenditures; no legal definition (Henkel 2023: 2,603).`}
],
quiz:[
{q:R`Which company must include a cash flow statement in its stand-alone German GAAP statements?`, opts:[R`A listed AG without consolidated statements`,R`Every large GmbH`,R`Every merchant with more than 250 employees`,R`A listed AG that prepares IFRS group accounts`], correct:0, exp:R`§ 264 I HGB: capital-market-oriented corporations that do not prepare consolidated financial statements.`},
{q:R`Under the indirect method, how does an increase in trade receivables affect operating cash flow?`, opts:[R`It is deducted`,R`It is added`,R`It has no effect`,R`It is shown under investing`], correct:0, exp:R`Revenue was booked but not yet received in cash, so the increase in receivables is deducted from net income.`},
{q:R`Under the indirect method, how is depreciation treated?`, opts:[R`Added back to net income`,R`Deducted from net income`,R`Shown under investing activities`,R`Ignored, it is already in cash`], correct:0, exp:R`Depreciation is a non-cash expense that reduced net income, so it is added back.`},
{q:R`A machine with book value 50 is sold for 70. How is the gain treated in the indirect operating cash flow?`, opts:[R`The gain of 20 is deducted; the 70 appears in investing`,R`The gain of 20 is added to operating cash flow as cash received`,R`The full 70 is added to operating cash flow as sales proceeds`,R`No adjustment is necessary, because the gain is already cash`], correct:0, exp:R`Gains on sales of non-current assets are deducted from net income; the full sales proceeds are an investing inflow.`},
{q:R`Repayment of a long-term bank loan belongs to which activity?`, opts:[R`Financing`,R`Investing`,R`Operating`,R`It is not a cash flow`], correct:0, exp:R`Financing activities change the size and composition of equity and borrowings.`},
{q:R`Which method may be used for investing and financing cash flows?`, opts:[R`Only the direct method`,R`Only the indirect method`,R`Either method, by choice`,R`Indirect for investing, direct for financing`], correct:0, exp:R`Only operating cash flows may be presented indirectly; investing and financing are always shown directly (gross).`},
{q:R`Henkel 2023: operating +3,255, investing −684, financing −1,754. Net change in cash?`, opts:[R`+817`,R`+2,571`,R`+1,501`,R`−817`], correct:0, exp:R`3,255 − 684 − 1,754 = 817.`},
{q:R`How is free cash flow commonly defined by analysts?`, opts:[R`Operating cash flow minus capital expenditures`,R`Net income + depreciation`,R`Operating + investing + financing cash flow`,R`Operating cash flow − dividends paid`], correct:0, exp:R`Free cash flow = operating cash flow − capex. It has no legal definition.`}
]},

{id:'fs-8', ch:8, title:'Management Report', examWeight:'Who prepares it, the three perspectives, DRS 20 contents and the CSR/CSRD update',
summary:R`**Obligation (§ 264 I HGB).** Medium-sized and large corporations prepare a management report next to the financial statements. It is a **separate element and not part of the financial statements**; rules in §§ 289–289f HGB.

Purpose: a true and fair view of the state of the company **not limited by the GAAP**. The information is broader, because the report gives an overall assessment of the company from three perspectives:
- History :: the reporting period
- Current situation :: the closing date
- Future :: expected development

Principles of preparation: **DRS 20**, issued by the DRSC (German Accounting Standards Committee), a recognised private committee that issues recommendations for consolidated financial statements and the management report under German GAAP; also recommended for stand-alone management reports.

Content according to DRS 20 (the first two are the most important):
- Fundamentals of the company/group (DRS 20.36–52) :: basis for everything else: business model, subsidiaries, goals and strategies, management system, research and development
- Business report (DRS 20.53–113) :: core of the report: economic and industrial conditions; course of business in the reporting period; situation at the closing date split into assets, financial and performance situation; financial and non-financial key performance indicators
- Subsequent events (DRS 20.114) :: material events after the closing date that matter for a true and fair view (example: Covid-19)
- Forecast and report on chances and risks (DRS 20.116–167) :: foreseeable development with its likelihood and risks; the risk management system (only for capital-market-oriented companies)
- Internal control and risk management system for the accounting process (DRS 20.K168–K178) :: only capital-market-oriented companies
- Risk report on financial instruments (DRS 20.179–187) :: kinds of risks (price, default, liquidity) and risk management goals and methods incl. hedge accounting
- Share capital and control (DRS 20.K188–K223) :: capital-market-oriented companies: share capital, additional rights or limits of shareholders, authorisations to issue or buy back shares, change-of-control clauses
- Declaration on corporate governance (DRS 20.K224–K231c, § 289a) :: capital-market-oriented stock companies: compliance with the German Corporate Governance Code, management practices beyond the law, working procedures of executive and supervisory boards, goals for the share of women on both boards (and reasons if missed)
- Assurance of legal representatives (DRS 20.K232–K235) :: capital-market-oriented companies: the legal representatives assure that the report gives a true and fair view to the best of their knowledge

**CSR — non-financial reporting under German GAAP (§§ 289b–289e HGB).** Five matters:
- Environment :: emissions, energy, water
- Employees :: working conditions, health and safety
- Social matters :: communities and social dialogue
- Human rights :: respect and prevention
- Anti-corruption :: bribery prevention and controls

For material topics the company discloses: business model, policies and due diligence, outcomes, principal risks and responses, key non-financial performance indicators — and explains if no policy is pursued. Scope (§ 289b HGB): especially certain large public-interest entities with more than 500 employees.

**EU sustainability reporting: CSRD Omnibus 2026.** EU requirements and national implementation must be distinguished:
- EU level (amended CSRD) :: more than 1,000 employees AND more than €450 m net turnover; Directive (EU) 2026/470 in force since March 2026, transposition deadline 19 March 2027
- Germany (HGB) :: the existing §§ 289b–289e HGB continue to apply until German law is amended — do not equate the EU thresholds with current HGB

Double materiality: the company's impacts on people and environment **plus** the financial effects of sustainability matters on the company.

Larger companies usually issue a **combined management report** for stand-alone and consolidated statements (§ 315 V HGB), e.g. Bayer AG's Annual Report 2023 (combined management report as part A).`,
cards:[
{q:R`Who prepares a management report and is it part of the FS?`, a:R`Medium-sized and large corporations (§ 264 I HGB); separate element, not part of the FS; §§ 289–289f HGB.`},
{q:R`Three perspectives of the management report`, a:R`History (reporting period), current situation (closing date), future.`},
{q:R`DRS 20 — the two most important parts`, a:R`Fundamentals of the company (business model, subsidiaries, goals/strategies, management system, R&D) and the business report (conditions, course of business, asset/financial/performance situation, KPIs).`},
{q:R`Which DRS 20 parts are only for capital-market-oriented companies?`, a:R`Risk management system in the forecast/risk report, ICS/RMS for the accounting process, share capital and control, corporate governance declaration (stock companies), assurance of legal representatives.`},
{q:R`Five non-financial matters §§ 289b–289e HGB`, a:R`Environment, employees, social matters, human rights, anti-corruption. Scope: large public-interest entities > 500 employees.`},
{q:R`CSRD Omnibus 2026 thresholds and timing`, a:R`EU: > 1,000 employees AND > €450 m net turnover; Directive (EU) 2026/470 in force March 2026, transposition by 19 March 2027. Germany: §§ 289b–289e HGB apply until amended.`},
{q:R`Double materiality`, a:R`Impacts of the company on people and environment + financial effects of sustainability matters on the company.`}
],
quiz:[
{q:R`Which statement on the management report is correct?`, opts:[R`Medium and large corporations prepare it, separately from the FS`,R`It is part of the financial statements of every corporation, incl. micro`,R`It is required only for capital-market-oriented companies`,R`It is limited to information required by the GAAP`], correct:0, exp:R`§ 264 I HGB: medium and large corporations; separate element; broader than the GAAP.`},
{q:R`Who issues DRS 20?`, opts:[R`The DRSC, a private German standard setter`,R`The IASB in London (via the IFRS Foundation)`,R`The German Federal Ministry of Justice (by ordinance)`,R`The Institute of Public Auditors in Germany (IDW)`], correct:0, exp:R`DRS 20 is issued by the DRSC (German Accounting Standards Committee), a recognised private committee.`},
{q:R`Covid-19 broke out shortly after a company's closing date. Where in the management report does it belong?`, opts:[R`Subsequent events (DRS 20.114)`,R`Fundamentals of the company`,R`Share capital and control`,R`Declaration on corporate governance`], correct:0, exp:R`Material events after the closing date are reported as subsequent events — the slide's Covid-19 example.`},
{q:R`Which content is required only from capital-market-oriented companies?`, opts:[R`ICS and risk management for the accounting process`,R`The business report on the course of business and KPIs`,R`The fundamentals of the company, e.g. its business model`,R`The forecast of the foreseeable development of the company`], correct:0, exp:R`The internal control and risk management system for the accounting process (DRS 20.K168–K178) applies only to capital-market-oriented companies.`},
{q:R`Which matter is NOT one of the five non-financial matters under §§ 289b–289e HGB?`, opts:[R`Tax optimisation`,R`Human rights`,R`Anti-corruption`,R`Employees`], correct:0, exp:R`The five matters are environment, employees, social matters, human rights and anti-corruption.`},
{q:R`Under the CSRD Omnibus 2026, which companies fall into the EU scope?`, opts:[R`More than 1,000 employees and more than €450 m turnover`,R`More than 500 employees, exactly as under § 289b HGB today`,R`All capital-market-oriented companies`,R`More than 250 employees or more than €50 m of net turnover`], correct:0, exp:R`EU level: > 1,000 employees AND > €450 m net turnover. In Germany §§ 289b–289e HGB (> 500 employees) continue until amended.`},
{q:R`What does "double materiality" mean?`, opts:[R`Impacts on people/environment plus financial effects on the firm`,R`Materiality for both auditor and management`,R`Reporting the same topics in both the stand-alone and group accounts`,R`Financial and non-financial KPIs that are audited twice by the auditor`], correct:0, exp:R`Double materiality combines the inside-out view (impacts) with the outside-in view (financial effects).`},
{q:R`Which paragraph allows a combined management report for stand-alone and consolidated statements?`, opts:[R`§ 315 V HGB`,R`§ 289a HGB`,R`§ 264d HGB`,R`§ 297 I HGB`], correct:0, exp:R`§ 315 V HGB — used by larger companies such as Bayer AG.`}
]},

{id:'fs-9', ch:9, title:'Consolidated Financial Statements', examWeight:'Economic vs legal entity, § 290 conditions and control, the 7 steps and the four consolidation measures',
summary:R`**History in Germany.** Since 1965 consolidated statements were mandatory (only for stock companies and their subsidiaries); 1969 extended to parents of other legal forms; 1985 fundamental HGB reform transposing the 4th, 7th and 8th EC Directives → group accounting rules for corporations in the HGB.

**Economic entity vs legal entity.** A parent that controls one or more other companies forms one economic entity together with them. The "true and fair view" on this economic entity is ensured by consolidating the single legal entities. However, **tax assessment and dividends in Germany are generally based on the legal entities**. Every entity of the group prepares separate financial statements; the ultimate parent additionally prepares consolidated statements for the whole group.

**Obligation (§ 290 I HGB).** A corporation has to prepare consolidated financial statements if it:
- has direct or indirect control over one or more companies
- is not itself controlled by another parent that prepares consolidated statements including the local parent (exemption: EU/EEA parent → § 291 HGB, other countries → § 292 HGB)
- exceeds certain size thresholds (total assets, revenues, employees) → § 293 HGB

**Control (§ 290 II HGB):**
- Holding the majority of the shareholders' voting rights
- Other specific rights that let the parent dominate the other company, e.g. the right to appoint or remove the majority of the management board

**Seven steps to prepare consolidated financial statements:**
- 1. Assessment :: does the parent fulfil the criteria for preparation?
- 2. Relevant GAAP :: IFRS or German GAAP
- 3. Scope of consolidation :: which subsidiaries are included (generally all; materiality considerations possible)
- 4. Standardisation :: usually a group accounting manual defines a uniform closing date, group recognition and measurement principles and currency conversion rules → harmonised stand-alone FS
- 5. Summative statement :: add up all harmonised financial statements
- 6. Consolidation (full consolidation) :: capital consolidation, liability consolidation, consolidation of intercompany profits, income consolidation
- 7. Finalisation :: besides consolidated balance sheet and P&L, prepare notes, equity table, cash flow statement etc.

**The four consolidation measures:**
- Capital consolidation :: the parent's carrying amount of the subsidiary (its purchase price) is offset against the subsidiary's equity. The subsidiary's equity is the residual of its revalued assets and liabilities at first consolidation, possibly creating goodwill. Full consolidation assumes all assets and liabilities were purchased; minority shareholders appear as a balancing position in consolidated equity.
- Liability consolidation :: all intercompany receivables and liabilities are eliminated (e.g. a loan from the parent to a subsidiary — from the group view there is no loan)
- Consolidation of intercompany profits :: assets acquired from a group company are measured as if the group were one legal entity (e.g. the margin on non-current assets sold by the parent to a subsidiary is eliminated)
- Income consolidation :: all other intercompany revenues and expenses are eliminated (e.g. interest on an intercompany loan is income for one entity and expense for the other)

Very simple example (balance sheets 31.12.2023): parent Big One AG (total assets 10,250,000 USD, incl. investment in sub 2,000,000 and intercompany receivable 250,000) and subsidiary Small One GmbH (total assets 2,970,000, equity 2,000,000 = common stock 100 + capital reserves 1,919,900 + retained earnings 80,000, intercompany payable 250,000):
=> Step 1 Combine (add all lines: total 13,220,000) → Step 2 Eliminate (investment 2,000,000 against the subsidiary's equity 2,000,000; IC receivable against IC payable 250,000: −2,250,000) → Step 3 Consolidate (total 10,970,000; liabilities 6,370,000; equity 4,600,000 = the parent's equity)

Because the purchase price (2,000,000) equals the subsidiary's equity, no goodwill arises in this example.

**Elements of consolidated FS (§§ 290 I, 297 I HGB):** consolidated balance sheet, consolidated P&L, notes, consolidated cash flow statement, equity table; segment reporting is optional. Plus a group management report (§§ 290 I, 315 HGB).`,
cards:[
{q:R`Economic vs legal entity`, a:R`Group = one economic entity, shown via consolidation (true and fair view). Tax and dividends in Germany are based on the legal entities.`},
{q:R`Three conditions of § 290 I HGB`, a:R`Control over other companies; not itself included in a higher parent's consolidated FS (§§ 291, 292); size thresholds exceeded (§ 293).`},
{q:R`Control under § 290 II HGB`, a:R`Majority of voting rights, or other rights to dominate (e.g. appoint/remove the majority of the management board).`},
{q:R`Seven steps of consolidation`, a:R`Assessment → relevant GAAP → scope → standardisation (group manual) → summative statement → consolidation → finalisation (notes, equity table, CF statement).`},
{q:R`Four consolidation measures`, a:R`Capital consolidation (investment vs sub equity, goodwill), liability consolidation (IC receivables/payables), intercompany profits (eliminate margins), income consolidation (IC revenues/expenses).`},
{q:R`Elements of consolidated FS`, a:R`Consolidated balance sheet, P&L, notes, cash flow statement, equity table; optional segment reporting; plus group management report (§ 315).`}
],
quiz:[
{q:R`On which basis are taxes and dividends generally assessed in Germany?`, opts:[R`The legal entities' stand-alone statements`,R`The consolidated statements of the group as a whole`,R`The IFRS group statements only, as required by the EU`,R`The economic entity's cash flows of the period`], correct:0, exp:R`Consolidation shows the economic entity, but tax and dividends are based on the legal entities.`},
{q:R`A German AG holds 40 % of the votes in a company but has the contractual right to appoint and remove the majority of its management board. Is this control?`, opts:[R`Yes, under § 290 II HGB`,R`No, it needs more than 50 % of the votes`,R`Only if it also holds 50 % of the capital`,R`Only under IFRS, not under the HGB`], correct:0, exp:R`Control exists through a voting majority or other rights to dominate, such as appointing/removing most board members.`},
{q:R`A German sub-group parent is itself included in the consolidated statements of its French parent. What applies?`, opts:[R`It can be exempt under § 291 HGB`,R`It must still prepare its own consolidated FS`,R`It is exempt under § 292 HGB`,R`It must switch to IFRS stand-alone accounts`], correct:0, exp:R`If a higher EU/EEA parent prepares consolidated statements including it, § 291 HGB exempts it (§ 292 covers parents outside the EU/EEA).`},
{q:R`The parent lent €5 m to its subsidiary. Which consolidation measure removes it?`, opts:[R`Liability consolidation`,R`Capital consolidation`,R`Income consolidation`,R`Consolidation of intercompany profits`], correct:0, exp:R`Intercompany receivables and liabilities are eliminated in the liability consolidation; the interest on the loan is removed in the income consolidation.`},
{q:R`The parent sold a machine with a margin to its subsidiary. What must be eliminated?`, opts:[R`The intercompany profit margin`,R`The whole machine`,R`The subsidiary's equity`,R`Nothing, it was an arm's-length sale`], correct:0, exp:R`Assets acquired within the group are measured as if the group were one entity, so the internal margin is eliminated.`},
{q:R`Which step comes directly before the consolidation measures?`, opts:[R`Adding up the harmonised statements`,R`Defining the relevant GAAP (IFRS or HGB)`,R`Defining the scope of consolidation (which subsidiaries)`,R`Preparing notes, equity table and cash flow statement`], correct:0, exp:R`Step 5 (summative statement) precedes step 6 (consolidation); step 7 finalises with notes, equity table, cash flow statement.`},
{q:R`Big One AG paid 2,000,000 for Small One GmbH, whose equity is 2,000,000. What does the capital consolidation create?`, opts:[R`No goodwill — investment and equity cancel out`,R`Goodwill of 2,000,000`,R`Negative goodwill of 2,000,000`,R`A minority interest of 2,000,000`], correct:0, exp:R`The investment is offset against the subsidiary's equity; with price = equity no goodwill remains. Consolidated equity = the parent's 4,600,000.`},
{q:R`Combined total assets are 13,220,000; the investment in the sub (2,000,000) and an IC receivable (250,000) are eliminated. Consolidated total assets?`, opts:[R`10,970,000`,R`11,220,000`,R`13,220,000`,R`12,970,000`], correct:0, exp:R`13,220,000 − 2,000,000 − 250,000 = 10,970,000.`},
{q:R`Which element of consolidated financial statements is optional under the HGB?`, opts:[R`Segment reporting`,R`Consolidated cash flow statement`,R`Equity table`,R`Notes to the consolidated FS`], correct:0, exp:R`§ 297 I HGB: balance sheet, P&L, notes, cash flow statement and equity table are required; segment reporting is optional.`}
]},

{id:'fs-10', ch:10, title:'Key Differences to IFRS', examWeight:'Objective, recognition and measurement differences, and goodwill (HGB: amortise ≤ 10 years vs IFRS: impairment-only)',
summary:R`**Objective.** IFRS Conceptual Framework (2018), paras. 1.2–1.4: provide useful financial information to existing and potential investors, lenders and other creditors; focus on future net cash flows and management's accountability for the entity's economic resources → the **primary objective** of IFRS. Conceptual Framework 12: the objective of financial statements is to provide information about financial position, performance and changes in financial position that is useful to a wide range of users in making economic decisions → the **overriding principle** of IFRS.

German GAAP has **no primary objective and no overriding principle**; it balances documentation, accountability and capital preservation.

**Recognition differences:**
- Assets in general :: similar criteria, but IFRS has no "separate marketability" criterion → HGB stricter
- Self-developed non-current intangible assets :: IFRS generally mandatory (when criteria are met) → HGB optional, with similar prohibitions
- Leasing :: IFRS 16 — the lessee generally capitalises all leases as a "right-of-use asset" with a lease liability → HGB only finance leases, not operating leases
- Revenues :: IFRS 15 — generally earlier revenue recognition → HGB strict realisation principle
- Income/expenses :: IFRS partly via "other comprehensive income" (OCI) directly into equity → HGB without exception via the P&L

**Measurement differences:**
- Overall :: IFRS more symmetric, as the prudence/imparity principle is missing → HGB more "conservative" (objective: capital preservation)
- Non-current assets :: both start at historical cost; IFRS allows revaluation to fair value in subsequent measurement → HGB maximum historical cost
- Intangible assets with indefinite useful life :: IFRS no regular amortisation, but at least an annual impairment test → HGB stricter: self-developed intangibles whose useful life cannot be estimated reliably are amortised over max. 10 years, as is acquired goodwill; impairment in addition

**Special: goodwill.** The goodwill/equity ratio of DAX groups was high already in 2020 (e.g. Eon about 197 %, Bayer about 118 %, while BMW was below 1 %) — and since 2020 it has only become worse, due to new market challenges combined with significant interest rate increases.
- IFRS acquired goodwill :: intangible non-current asset with indefinite useful life; no regular amortisation, at least an annual impairment test; an impairment after a triggering event hits P&L and equity very hard → "ticking time bomb"
- HGB acquired goodwill :: § 246 I: "shall be considered as an asset of limited useful life"; § 253 III: must be amortised over the reliably estimated useful life, otherwise 10 years (tax: must be 15 years); impairment in addition if necessary

**Reversal of a goodwill impairment is not allowed** under either system: HGB § 253 V and IFRS IAS 36.124. Interesting: the FASB (US GAAP) recently discussed re-introducing the "German approach" of amortising goodwill.

Example calculation (acquired company at the day control is taken over): non-current assets 16, current assets 14, equity 10, liabilities 20; purchase price incl. directly attributable costs: 20. An independent valuation finds (a) hidden reserves in non-current assets 1.5, (b) a not yet capitalised patent 2.0, (c) a customer list 1.0, (d) a brand 2.5 — together 7.0. From the acquirer's view all of these are acquired assets, so they are recognised at fair value:
=> Equity at book value 10 → + hidden reserves and identifiable intangibles 7 (net assets at fair value 17) → Purchase price 20 − 17 → Goodwill 3

**Final view.** Pros of IFRS: globalisation and decision makers demand a single set of high-quality international standards; it is the basis for many international transactions and very helpful for investors and shareholders; IFRS is a modern approach focused on useful information. However:
- "True and fair view" :: only experts can understand many of the rules
- Extensive notes :: information overflow?
- Fair value and "impairment only" approach :: increased volatility and vulnerability
- Costs :: high cost of implementing and maintaining IFRS accounting

Further reading: PwC, "Similarities and differences: IFRS and German GAAP" (2018).`,
cards:[
{q:R`Objective of IFRS vs German GAAP`, a:R`IFRS: decision-useful information for investors, lenders and creditors (primary objective, overriding principle). HGB: no primary objective — balance of documentation, accountability, capital preservation.`},
{q:R`Recognition differences HGB vs IFRS`, a:R`HGB: separate marketability criterion; self-developed intangibles optional (IFRS mandatory); only finance leases (IFRS 16 right-of-use for all); strict realisation (IFRS 15 earlier); all through P&L (IFRS partly OCI).`},
{q:R`Measurement differences HGB vs IFRS`, a:R`HGB conservative (prudence/imparity), max historical cost; IFRS symmetric, revaluation to fair value allowed; indefinite-life intangibles: IFRS impairment-only, HGB amortise (max. 10 years if not reliably estimable).`},
{q:R`Goodwill HGB vs IFRS`, a:R`HGB: limited useful life (§ 246 I), amortise over estimated life or 10 years (§ 253 III; tax 15 years) + impairment. IFRS: indefinite life, annual impairment test only. Reversal of impairment: never (§ 253 V, IAS 36.124).`},
{q:R`Goodwill example (price 20, equity 10, hidden reserves/intangibles 7)`, a:R`Net assets at fair value 10 + 7 = 17; goodwill = 20 − 17 = 3.`},
{q:R`Criticism of IFRS`, a:R`Only experts understand the true and fair view; information overflow in the notes; volatility from fair value and impairment-only; high implementation and maintenance costs.`}
],
quiz:[
{q:R`How is acquired goodwill treated under the HGB if its useful life cannot be estimated reliably?`, opts:[R`Amortised over 10 years, plus impairment if necessary`,R`Not amortised, only tested for impairment at least annually`,R`Amortised over 15 years, exactly as required in tax law`,R`Written off immediately against equity`], correct:0, exp:R`§ 253 III HGB: reliable estimate or 10 years (15 years is the tax rule). Impairment-only is the IFRS approach.`},
{q:R`Under which system may a goodwill impairment be reversed later?`, opts:[R`In neither system`,R`Only under IFRS (IAS 36), never under the HGB`,R`Only under the HGB (§ 253 V)`,R`Both, up to amortised cost`], correct:0, exp:R`HGB § 253 V and IAS 36.124 both prohibit reversing a goodwill impairment.`},
{q:R`Price 20 for a company with book equity 10; valuation finds hidden reserves 1.5, an uncapitalised patent 2.0, a customer list 1.0 and a brand 2.5. Goodwill?`, opts:[R`3`,R`10`,R`8`,R`4.5`], correct:0, exp:R`Net assets at fair value = 10 + 7 = 17; goodwill = 20 − 17 = 3. The acquiree's self-developed patent, list and brand are acquired assets from the acquirer's view.`},
{q:R`How does IFRS 16 treat leases at the lessee compared with the HGB?`, opts:[R`Generally all leases capitalised as right-of-use assets`,R`Only finance leases are capitalised, exactly as in the HGB`,R`Leases are only disclosed in the notes, never capitalised`,R`Only operating leases are capitalised`], correct:0, exp:R`IFRS 16: right-of-use asset and lease liability for (almost) all leases; the HGB only recognises finance leases at the lessee.`},
{q:R`Which statement about income and expenses is correct?`, opts:[R`HGB: all through P&L; IFRS: partly through OCI into equity`,R`HGB and IFRS both use OCI for revaluations`,R`HGB: partly OCI; IFRS: always through P&L`,R`Neither system allows any items to be booked directly in equity`], correct:0, exp:R`Under the HGB every income and expense goes through the P&L without exception; IFRS books some items via other comprehensive income.`},
{q:R`Why is measurement under the HGB more "conservative" than under IFRS?`, opts:[R`Prudence and imparity aim at capital preservation`,R`The HGB measures all assets at their current fair values`,R`IFRS requires regular amortisation of all intangible assets`,R`IFRS forbids any impairment of current assets below cost`], correct:0, exp:R`IFRS is more symmetric because it lacks the prudence/imparity principle; the HGB's objective of capital preservation makes it conservative.`},
{q:R`What is the "primary objective" of IFRS according to the Conceptual Framework?`, opts:[R`Useful information for investors, lenders and other creditors`,R`Preservation of capital to protect creditors`,R`Determination of taxable income`,R`Documentation of all business transactions for tax authorities`], correct:0, exp:R`CF 1.2–1.4: decision-useful information for capital providers, focusing on future net cash flows and management accountability.`},
{q:R`Which is an asset recognition criterion under the HGB but not under IFRS?`, opts:[R`Separate marketability`,R`Probable economic benefit`,R`Reliable measurability`,R`Control by the entity`], correct:0, exp:R`Recognition is generally similar, but IFRS has no separate-marketability criterion — the HGB is stricter.`},
{q:R`Which point is a criticism of IFRS raised in the course?`, opts:[R`Fair value and impairment-only increase volatility`,R`It ignores the information needs of investors and lenders`,R`It forbids extensive notes`,R`It is only used in the United States`], correct:0, exp:R`Criticisms: expert-only true and fair view, information overflow, volatility from fair value/impairment-only, high costs.`}
]}
];

/* ============================================================ CASE TRAINER — every case from the slides ============================================================ */
// Case texts follow the slides (cases on slides 37–45, 77, 98, 103–108, 116, 128–129, 177; pptx "Example consolidation").
// The student slides contain no solutions — every answer key here is self-written from the course rules.
const FS_CASES = [
{src:'Slide 37 · Bad Luck AG', q:R`Bad Luck AG (closing date 31.12.2024). In mid-January 2025 the head of accounting learns that a key customer surprisingly declared bankruptcy at the beginning of the new year. Receivables at 31.12.2024: €2.1 m. What is the correct treatment?`, opts:[R`Write down the receivable in the 2024 statements`,R`Keep €2.1 m and write it down in 2025`,R`Keep €2.1 m and only disclose the bankruptcy in the notes`,R`Recognise a provision of €2.1 m in 2025`], correct:0, exp:R`Value-clarifying: the customer's distress already existed at the closing date. The 2024 statements must show the receivable at its recoverable value.`},
{src:'Slide 37 · Bad Luck AG', q:R`Bad Luck AG had built a €0.4 m provision at year end 2024 because management expected to lose a court case with a former supplier. In January 2025 the company fully wins. Treatment in 2024?`, opts:[R`No provision at 31.12.2024 — release the €0.4 m in 2024`,R`Keep the provision — gains may not be anticipated`,R`Keep the provision and release it in 2025`,R`Reduce the provision to €0.2 m as a compromise`], correct:0, exp:R`The lawsuit existed at the closing date; the judgment clarifies the situation at that date. Value-clarifying information counts whether it is favourable or not.`},
{src:'Slide 37 · Bad Luck AG', q:R`Heavy storms in early January 2025 damage one of Bad Luck AG's plants; an expert assesses the damage at €1.2 m; the company is fully insured. Effect on the 2024 statements?`, opts:[R`No adjustment: the storm is a value-creating event`,R`Impairment of €1.2 m on the damaged plant in 2024`,R`Provision of €1.2 m in 2024`,R`Insurance receivable and impairment in 2024`], correct:0, exp:R`The cause arose after 31.12.2024 (value-creating), so 2024 is not adjusted; if material, it is reported as a subsequent event.`},
{src:'Slide 37 · Bad Luck AG', q:R`"Lazy Cleaning GmbH" forgot to invoice its November 2024 services; the €0.2 m invoice arrives in mid-January 2025. Treatment at Bad Luck AG?`, opts:[R`Expense and liability of €0.2 m in 2024`,R`Expense in 2025 when the invoice arrives`,R`Only a note on subsequent events`,R`A contingent liability in the 2024 notes`], correct:0, exp:R`The service was received in 2024: accrual basis and completeness require the expense and the liability (or a provision for outstanding invoices) in 2024.`},
{src:'Slide 42 · Hugo Ross AG', q:R`Hugo Ross AG bought an office building in Munich in 2010 for €2.2 m. At 31.12.2024 an expert values it at €8.5 m and a fund has made a binding offer of €9.3 m. At which value does it appear?`, opts:[R`Historical cost less depreciation of the building`,R`€8.5 m, the value determined by the independent expert`,R`€9.3 m, the price in the binding offer of the fund`,R`€8.5 m with the unrealised gain in a revaluation reserve`], correct:0, exp:R`Realisation principle: no write-up above amortised historical cost; the gain is realised only when the building is sold.`},
{src:'Slide 42 · Hugo Ross AG', q:R`Hugo Ross AG sold 1,000 suits for €0.5 m on 28.12.2024, terms DAP (delivered at the customer's place). Inventory value €0.3 m. On 31.12. the truck is still on the way. Effect on 2024?`, opts:[R`No revenue; suits stay in inventory at €0.3 m`,R`Revenue €0.5 m, cost of sales €0.3 m, profit €0.2 m`,R`Revenue €0.5 m but no cost until delivery`,R`Profit €0.2 m booked directly in equity`], correct:0, exp:R`Under DAP the seller fulfils its obligation only at delivery. Until then the revenue is not realised and the suits remain the seller's inventory.`},
{src:'Slide 42 · Hugo Ross AG', q:R`Hugo Ross AG invested surplus cash in shares for €2.0 m (€100/share) in summer 2024. At 31.12.2024 the price is €85; strong indications say the decrease is not permanent. If the shares are current assets, what applies?`, opts:[R`Write-down to €1.7 m is mandatory`,R`Write-down to €1.7 m is optional`,R`No write-down, the decrease is temporary`,R`Write-down to €1.7 m against equity`], correct:0, exp:R`Strict lower-of-cost-or-market for current assets: temporary decreases count too (€0.3 m expense). Only non-current financial assets have an option for temporary decreases.`},
{src:'Slide 42 · Hugo Ross AG', q:R`Same shares (cost €2.0 m, year-end value €1.7 m, decline temporary), but held long-term as non-current financial assets. What applies?`, opts:[R`Write-down is optional`,R`Write-down is mandatory`,R`Write-down is prohibited`,R`Write-up to €2.0 m plus a note`], correct:0, exp:R`Financial assets may be impaired for temporary decreases (option); impairment is mandatory only if the decrease is likely to be permanent.`},
{src:'Slide 77 · Mirecard Technology AG', q:R`"Mirecard Technology AG" accounts very prudently and produces ATMs. How will it value its inventory of finished ATMs?`, opts:[R`Only mandatory components (minimum production costs)`,R`Mandatory plus optional components (maximum production costs)`,R`Production costs plus the distribution costs of the ATMs`,R`The expected market sales price of the finished ATMs today`], correct:0, exp:R`Prudent accounting chooses the lowest permitted value: minimum production costs. Optional components (administration, voluntary benefits, borrowing costs) are expensed; distribution costs are prohibited anyway.`},
{src:'Slide 98 · Coffee and beans AG', q:R`Coffee and beans AG signed in July 2024 to buy 10 t of Arabica at a fixed 9.50 USD/kg, delivery and payment in March 2025. At 31.12.2024 the price is 7.80 USD/kg. What must be recognised?`, opts:[R`Provision for onerous contracts of 17,000 USD (in €)`,R`Liability of 95,000 USD (in €)`,R`Nothing, because the contract is still pending at year end`,R`Contingent liability of 17,000 USD, disclosed in the notes`], correct:0, exp:R`Pending (neither side has performed) and onerous → imparity requires a provision for the expected loss: (9.50 − 7.80) × 10,000 kg = 17,000 USD.`},
{src:'Slide 103 · Hugo Ross AG bond', q:R`Hugo Ross AG issues a 5-year 3 % bond, nominal 100, payout 98. Which treatment is possible under the HGB?`, opts:[R`Debt 100; the discount of 2 deferred and released 0.4 a year`,R`Debt 98, increased by 0.4 per year until it reaches 100`,R`Debt 98; difference shown in the notes only`,R`Debt 100; discount 2 as deferred income`], correct:0, exp:R`Debts are shown at their settlement amount (100). The discount is either expensed at once or — option § 250 III HGB — deferred and released pro rata over 5 years.`},
{src:'Slide 103 · Hugo Ross AG bond', q:R`The same bond is issued at 102. Which entry is correct at issue?`, opts:[R`Dr cash 102 / Cr debt 100 / Cr deferred income 2`,R`Dr cash 102 / Cr debt 102`,R`Dr cash 102 / Cr debt 100 / Cr interest income 2`,R`Dr cash 102 / Cr debt 100 / Cr capital reserve 2`], correct:0, exp:R`Debt at settlement amount 100; the premium is deferred income, released 0.4 per year into interest (realisation principle).`},
{src:'Slide 104 · FX bank loan', q:R`A 10-year bank loan of USD 3 m was booked at €2.61 m (1.15 USD per EUR). At the next year end the rate is 1.05 USD per EUR. Balance sheet value?`, opts:[R`€2.86 m`,R`€2.61 m`,R`€2.31 m`,R`€3.15 m`], correct:0, exp:R`3 m / 1.05 = €2.86 m. Higher-of-cost-or-market: an increase of the debt must be recognised (imparity).`},
{src:'Slide 104 · FX bank loan', q:R`One year later the rate is 1.30 USD per EUR (remaining maturity 8 years). Value of the USD 3 m loan (initially €2.61 m)?`, opts:[R`€2.61 m`,R`€2.31 m`,R`€2.86 m`,R`€2.46 m`], correct:0, exp:R`The debt may not fall below its initial amount — an unrealised gain is not recognised. Only for maturities within one year does § 256a HGB allow it.`},
{src:'Slide 106 · Hugo Ross legal claim', q:R`Hugo Ross faces a legal claim: 70 % chance of losing and paying €1 m, 30 % of winning with zero payment. Treatment?`, opts:[R`Provision of €1 m`,R`Provision of €0.7 m (expected value)`,R`Contingent liability, notes only`,R`Debt of €1 m`], correct:0, exp:R`Probable (> 50 %) but uncertain → provision. Under prudence and the settlement-amount rule the full most likely amount of €1 m is recognised, not a probability-weighted €0.7 m.`},
{src:'Slide 107 · Damage with insurance', q:R`The company caused damage of about €30 k. Its third-party liability insurance is expected to reimburse it; nothing was reimbursed by year end. Treatment?`, opts:[R`Provision €30 k; no offsetting with the insurance claim`,R`No provision, since the insurer is expected to pay it all`,R`Provision €30 k and an insurance receivable of €30 k as well`,R`Contingent liability of €30 k, disclosed in the notes only`], correct:0, exp:R`The obligation is shown in full (no offsetting). The reimbursement claim is only recognised once virtually certain, so not at year end (realisation principle).`},
{src:'Slide 108 · Toys AG', q:R`Toys AG voluntarily replaces defective "Mini-trucks" for 2 more years beyond the legal warranty; experience says 2 % need replacing. Treatment?`, opts:[R`Warranty provision without legal obligation (2 % basis)`,R`No provision, because there is no legal obligation to replace`,R`Contingent liability in the notes only`,R`Provision for 100 % of products sold`], correct:0, exp:R`§ 249 HGB allows (requires) provisions for warranty services without legal obligation (constructive). Amount: experience-based 2 % × replacement cost of products still covered.`},
{src:'Slide 116 · Wirecard', q:R`Wirecard (30.9.2019): equity 2,314.8, total assets 7,001.5 (€ m). Intangibles of 1.0 bn and cash of 1.9 bn turn out to be worthless (write-off 2.9 bn). What happens to equity?`, opts:[R`It becomes −585.2 (negative equity)`,R`It falls to 1,414.8`,R`It stays 2,314.8, the loss goes to provisions`,R`It falls to zero; the rest is a liability`], correct:0, exp:R`2,314.8 − 2,900 = −585.2: the buffer is used up and turns negative (overindebtedness); the deficit is shown as a balancing item on the assets side.`},
{src:'Slide 116 · Wirecard', q:R`After the 2.9 bn write-off, what are Wirecard's new total assets (old 7,001.5; liabilities 4,686.7)?`, opts:[R`4,686.7, including the deficit not covered by equity`,R`4,101.5 — liabilities now exceed the total assets`,R`7,001.5, unchanged`,R`2,314.8, equal to the old equity`], correct:0, exp:R`Assets after the write-off are 957.7 + 3,143.8 = 4,101.5; adding the negative equity of 585.2 as a balancing item gives 4,686.7 = liabilities.`},
{src:'Slides 128–129 · Wooden doors', q:R`A door maker incurs material €100,000 and personnel €300,000, produces 10,000 doors and sells 8,000 at €60. What does the total-cost format show as "increase in finished goods"?`, opts:[R`€80,000`,R`€120,000`,R`€40,000`,R`€100,000`], correct:0, exp:R`€400,000 / 10,000 = €40 per door; 2,000 doors in stock × €40 = €80,000.`},
{src:'Slides 128–129 · Wooden doors', q:R`Same door maker, cost-of-sales format. What is the cost of sales and the result?`, opts:[R`Cost of sales €320,000, result €160,000`,R`Cost of sales €400,000, result €80,000`,R`Cost of sales €320,000, result €80,000`,R`Cost of sales €400,000, result €160,000`], correct:0, exp:R`Cost of sales = 8,000 sold × €40 = €320,000; 480,000 − 320,000 = €160,000 — the same result as the total-cost format.`},
{src:'Slide 177 · Goodwill', q:R`Acquired company: equity 10, liabilities 20; valuation: hidden reserves 1.5, uncapitalised patent 2.0, customer list 1.0, brand 2.5. Price incl. directly attributable costs: 20. Goodwill on the day of acquisition?`, opts:[R`3.0`,R`10.0`,R`5.5`,R`8.5`], correct:0, exp:R`Net assets at fair value = 10 + 7 = 17; goodwill = 20 − 17 = 3.`},
{src:'Slide 177 · Goodwill', q:R`In the goodwill example, why may the acquired company's own patent, customer list and brand be recognised in the acquisition?`, opts:[R`For the acquirer they are acquired, not self-developed`,R`§ 248 HGB allows all self-developed intangibles to be capitalised`,R`Because IFRS 16 requires it in every business acquisition`,R`They may not — they simply increase the goodwill instead`], correct:0, exp:R`The § 248 prohibition covers self-developed items of the reporting entity. In an acquisition they are bought, so they are identifiable assets at fair value and reduce the goodwill.`},
{src:'pptx · Big One AG / Small One GmbH', q:R`Big One AG (investment in sub 2,000,000; IC receivable 250,000) and Small One GmbH (equity 2,000,000; IC payable 250,000). Combined total assets 13,220,000. What are the consolidated total assets?`, opts:[R`10,970,000`,R`13,220,000`,R`11,220,000`,R`12,970,000`], correct:0, exp:R`Eliminate investment vs equity (2,000,000) and IC receivable vs IC payable (250,000): 13,220,000 − 2,250,000 = 10,970,000.`},
{src:'pptx · Big One AG / Small One GmbH', q:R`In the same example, what is consolidated equity?`, opts:[R`4,600,000 — the parent's equity`,R`6,600,000 — both equities added`,R`2,000,000 — the subsidiary's equity`,R`4,350,000 — after IC elimination`], correct:0, exp:R`The subsidiary's equity (100 + 1,919,900 + 80,000 = 2,000,000) is eliminated against the investment; the parent's 4,600,000 remains.`}
];

/* ============================================================ FSA CHEAT SHEET ============================================================ */
const FS_CHEAT = [
{h:"Rules that apply", items:[
R`Elements: all → balance sheet + P&L · corporations + notes · listed (§ 264d) + cash flow statement + equity table · management report: separate`,
R`Size §§ 267, 267a: micro < 0.45 / 0.9 / 10 · small < 7.5 / 15 / 50 · medium < 25 / 50 / 250 (€ m BS / € m revenue / employees) · 2 of 3, 2 consecutive years · listed = always large`,
R`IAS Reg. 1606/2002: Art. 4 listed → IFRS consolidated · Art. 5 options · Germany: stand-alone always HGB (tax, dividends)`,
R`Purposes HGB: documentation · accountability · capital preservation (creditors)`]},
{h:"Principles", items:[
R`Documentation (HOW): clarity/transparency (order, language, voucher, timeliness, retention) · completeness/correctness · ICS`,
R`Key accounting principles: closing date · balance sheet identity · prudence (realisation + imparity) · going concern (≥ 12 months)`,
R`Value-clarifying (cause before closing date) → adjust · value-creating (cause after) → no adjustment, subsequent event`,
R`HGB policy change/error: prospectively via P&L · IFRS: retrospective restatement`]},
{h:"Assets", items:[
R`Asset: economic benefit · separately measurable · separately marketable · economic owner (finance lease → lessee; operating → lessor; retention of title → buyer)`,
R`§ 248 prohibited: formation expenses, self-made brands/customer lists/print titles · required: acquired goodwill, prepaid expenses · allowed: deferred tax asset`,
R`Acquisition cost = price (no VAT) + incidental + subsequent − reductions; no interest`,
R`Production cost: mandatory = direct material/manufacturing/special + indirect material/manufacturing + depreciation (minimum) · optional = admin, voluntary social/pension, borrowing costs (maximum) · prohibited = distribution, research`,
R`Non-current: depreciate (definite life), impair only if permanent (financial assets: option if temporary) · reversal mandatory, cap = planned book value · goodwill never`,
R`Current: strict lower-of-cost-or-market (also temporary) · fair value: procurement market / sales market / lower of both`]},
{h:"Liabilities & equity", items:[
R`Liability = obligation (legal/contractual/constructive) + probable burden + quantifiable · ≤ 50 % contingent (notes) · > 50 % provision · virtually certain debt`,
R`§ 249 exhaustive: uncertain liabilities · warranty w/o legal obligation · onerous contracts · maintenance ≤ 3 months · waste disposal ≤ 12 months`,
R`Debts: settlement amount, no discounting, higher-of-cost-or-market (§ 256a ≤ 1 year) · provisions: settlement amount at future prices, discount > 1 year, release if reason gone`,
R`Bond discount: expense or deferred expense (§ 250 III) · premium: deferred income, release pro rata`,
R`Equity: subscribed capital · capital reserves (agio) · revenue reserves (legal § 150 AktG, controlling entity, statutory, other) · carry forward · net profit`,
R`Bilanzgewinn = net profit ± carry forward + releases from reserves − transfers to revenue reserves`]},
{h:"P&L, notes, cash flow", items:[
R`§ 275: vertical · total-cost (nature + change in inventories, own work capitalised) or cost-of-sales (function) · same result`,
R`Revenues net of reductions and VAT · realisation → revenues · matching → expenses`,
R`Notes §§ 284–288: interpretation · relief · addition · correction`,
R`Cash flow: operating (direct/indirect) · investing, financing (direct) · indirect: NI + depreciation − gains + losses − Δ receivables/inventories + Δ payables · FCF = OCF − capex`]},
{h:"Management report & group", items:[
R`Management report: medium + large, §§ 289–289f, not part of FS · history, current situation, future · DRS 20 (DRSC) · combined report § 315 V`,
R`CSR §§ 289b–e: environment, employees, social, human rights, anti-corruption (> 500 employees PIE) · CSRD Omnibus 2026: > 1,000 employees AND > €450 m, transposition 19.3.2027 · double materiality`,
R`§ 290: control (votes or dominance rights) · exemptions §§ 291, 292 · size § 293 · 7 steps · capital, liability, intercompany profit, income consolidation`]},
{h:"IFRS vs HGB", items:[
R`IFRS: decision-useful info (primary objective) · HGB: balance, no overriding principle`,
R`IFRS: no marketability criterion, own intangibles mandatory, IFRS 16 right-of-use, IFRS 15 earlier revenue, OCI, revaluation allowed`,
R`Goodwill: HGB amortise (≤ 10 years if not estimable; tax 15) + impairment · IFRS impairment-only · reversal never (§ 253 V, IAS 36.124) · example 20 − (10 + 7) = 3`]}
];
