/* ============================================================ BOOKKEEPING — TEXTBOOK CHAPTER GROUP (Rechnungswesen – leicht gemacht, 8. Aufl.) ============================================================ */
// Supplementary reading for Cloer's course. Own GERMAN summaries of the 12 lessons (Carlo, 2026-10-29: textbook part in German,
// English only in brackets for terms/principles that matter in the English exam), grouped into pages bk-rw-1 … bk-rw-11.
// Same schema as BK_TOPICS (summary markup: "- " bullets, "Term :: Description", "=> A → B" flows, **bold**), plus `course` = matching course chapters.
// "Buch vs. Kurs" paragraphs flag where the book goes beyond the lecture or says something different. Example numbers are our own.
// Quiz count and order per page stay fixed (best scores are stored per page as quiz-<id>-best).

const BK_RW_TOPICS = [
{id:'bk-rw-1', ch:'T1', lessons:'Lektionen 1–2', course:['bk-1','bk-14'], title:'Rechnungswesen als Modell & Bereiche des Rechnungswesens',
examWeight:'Warum das Rechnungswesen ein Modell der Realität ist, internes vs. externes Rechnungswesen und die vier Begriffspaare der Stromgrößen — eine zweite Erklärung zu den Kurskapiteln 1–2 und 14',
summary:R`**Rechnungswesen ist ein Modell.** Ein Modell vereinfacht die Realität, damit sich eine bestimmte Frage beantworten lässt. Buchführung und Jahresabschluss reduzieren ein Unternehmen auf Geldgrößen wie Gewinn und Reinvermögen. Weil das Zahlen sind, kann man sie vergleichen: über die Zeit, mit Unternehmen derselben Branche oder mit einem Soll-Wert.

Ein Unternehmen hat in zwei Sphären mit seiner Umwelt zu tun:
- Leistungssphäre (real sphere) :: Einsatzgüter auf dem Beschaffungsmarkt kaufen, kombinieren und die Leistung auf dem Absatzmarkt verkaufen; Käufer und Verkäufer zahlen meist später oder früher, dadurch entstehen Forderungen, Verbindlichkeiten und Anzahlungen
- Finanzsphäre (financial sphere) :: Geld, das kein Preis für Güter oder Leistungen ist: Eigen- und Fremdkapital vom Kapitalmarkt und deren Rückzahlung, Steuern und Subventionen vom Staat

Zinsen gehören zur Leistungssphäre, denn sie sind der Preis für die Nutzung von Kapital. Der Kredit selbst und seine Tilgung gehören zur Finanzsphäre.

Ein Gewinn entsteht nur, wenn das Unternehmen für das, was es verkauft, mehr bekommt (Erträge) als es für das, was es kauft und verbraucht, hergibt (Aufwendungen). Das Buch betont diesen einfachen Punkt, weil er in Klausuren oft vergessen wird.

Was das Modell zeigen muss, hängt vom Unternehmenstyp ab:
- Handelsunternehmen :: kauft Waren und verkauft sie unverarbeitet weiter; Wareneinkaufs- und Warenverkaufskonto reichen
- Industrieunternehmen :: macht aus Rohstoffen über mehrere Stufen unfertige und dann fertige Erzeugnisse, braucht also viel mehr Bestandskonten
- Dienstleistungsunternehmen :: produziert zusammen mit einem externen Faktor, den der Kunde einbringt (die Haare, der Taxifahrgast, die Steuerunterlagen); kann nicht auf Lager produzieren, immaterielle Leistungen sind schwerer zu bewerten

**Internes vs. externes Rechnungswesen (internal vs external accounting).** Das interne Rechnungswesen informiert die Unternehmensleitung. Sender und Empfänger der Information sind dieselben Personen, also braucht es kein Gesetz; das Unternehmen gestaltet es, wie es will. Das externe Rechnungswesen informiert Außenstehende (Eigen- und Fremdkapitalgeber, Finanzamt, Wettbewerber). Hier hat die Leitung kein natürliches Interesse an vollständiger und wahrer Offenlegung, deshalb zwingt das Gesetz sie dazu.
- Kostenrechnung (cost accounting) :: Preiskalkulation (Preisuntergrenze, Preisobergrenze im Einkauf), Wirtschaftlichkeitskontrolle (Soll- vs. Ist-Kosten) und Planung des Produktionsprogramms
- Investitionsrechnung (investment appraisal) :: prüft, ob sich eine Investition lohnt; Standardmethode ist der Kapitalwert (net present value): Anschaffungsauszahlung plus abgezinste Überschüsse; ein positiver Kapitalwert heißt, die Investition verdient mehr als die geforderte Verzinsung
- Finanzplanung :: stellt erwartete Ein- und Auszahlungen gegenüber, damit das Unternehmen zahlungsfähig bleibt; nur Bargeld zu halten wäre vollkommen liquide, brächte aber nichts ein, also gleicht der Plan Rendite und Liquidität aus
- Einzelabschluss :: Dokumentation, Information und Zahlungsbemessung (Ausschüttungen)
- Konzernabschluss (consolidated statements) :: nur Information; wird zusätzlich zum Einzelabschluss aufgestellt, nie statt ihm; keine Grundlage für Ausschüttungen
- Steuerbilanz :: Grundlage der Ertragsteuern; Adressat ist das Finanzamt

Die Kostenrechnung spricht von "Herstellkosten", die Finanzbuchhaltung von "Herstellungskosten" (production cost, siehe T8).

**Drei Funktionen des Einzelabschlusses:**
- Dokumentation :: Buchführung und Inventar halten jeden Geschäftsvorfall vollständig, zeitlich geordnet und systematisch fest, auf Basis von Belegen
- Information :: Bilanz (ein Foto zu einem Stichtag) und GuV (der Film der Periode) geben Einblick in Vermögens-, Ertrags- und Finanzlage; Kapitalgesellschaften ergänzen einen Anhang
- Zahlungsbemessung :: der Jahresüberschuss entscheidet, was ausgeschüttet werden darf

Die Gewinnverwendung ist ein Interessendreieck. Gesellschafter wollen einen hohen ausgewiesenen Gewinn (mehr Dividende). Gläubiger bevorzugen einen niedrigen (weniger Geld verlässt das Unternehmen). Manager können beides wollen: hoch, um Investoren anzulocken oder Boni zu steigern, niedrig, um Geld für Investitionen zu behalten.

**Das pagatorische Prinzip.** Das Rechnungswesen geht von Zahlungen aus (lateinisch pagare = zahlen). Jedes Begriffspaar der Stromgrößen verändert einen anderen Bestand:
- Einzahlung / Auszahlung (payment in / payment out) :: Veränderung von Kasse und Bankguthaben (Zahlungsmittelbestand); genutzt in der Finanzplanung
- Einnahme / Ausgabe (income / expenditure) :: Veränderung des Geldvermögens = Zahlungsmittel + Forderungen − Verbindlichkeiten; entspricht dem Wert der verkauften bzw. gekauften Güter und Leistungen; genutzt in der Investitionsrechnung, wenn die Finanzierung ausgeklammert wird
- Ertrag / Aufwand (earnings / expenses) :: betriebliche Veränderung des Eigenkapitals (Reinvermögen = Geldvermögen + Sachvermögen); genutzt in der GuV
- Leistung / Kosten (revenues / costs) :: bewerteter Output und bewerteter Güterverbrauch für den Betriebszweck; genutzt in der Kostenrechnung

Auszahlungen teilen sich in finanzielle Auszahlungen (z. B. Kredittilgung, ohne Wirkung auf den Gewinn) und leistungswirtschaftliche Auszahlungen (z. B. Lieferanten bezahlen oder Kreditzinsen). Einlagen und Entnahmen verändern das Eigenkapital, sind aber weder Ertrag noch Aufwand.

Typische Kombinationen:
- Barverkauf :: Einzahlung und Einnahme im selben Moment
- Verkauf auf Ziel :: jetzt Einnahme (Forderung steigt), Einzahlung später; die spätere Zahlung ist keine Einnahme, weil die Forderung um denselben Betrag sinkt
- Verbrauch von Rohstoffen, die im Vorjahr gekauft und bezahlt wurden :: Aufwand, aber in diesem Jahr weder Ausgabe noch Auszahlung

Über die gesamte Lebensdauer eines Unternehmens gilt: Ausgaben = Aufwand und Einnahmen = Ertrag. Nur die Verteilung auf die einzelnen Perioden unterscheidet sich.`,
cards:[
{q:R`Leistungssphäre vs. Finanzsphäre — wohin gehören Zinsen und Kredittilgung?`, a:R`Zinsen = Preis für die Kapitalnutzung → Leistungssphäre (real sphere). Kreditaufnahme und Tilgung → Finanzsphäre (financial sphere).`},
{q:R`Warum braucht das interne Rechnungswesen kein Gesetz?`, a:R`Sender und Empfänger der Information sind dieselben (die Leitung), es gibt also keinen Interessenkonflikt.`},
{q:R`Welchen Bestand verändert jedes Begriffspaar der Stromgrößen?`, a:R`Ein-/Auszahlungen: Kasse und Bank. Einnahmen/Ausgaben (income/expenditure): Geldvermögen (Zahlungsmittel + Forderungen − Verbindlichkeiten). Ertrag/Aufwand (earnings/expenses): Eigenkapital (Reinvermögen). Leistung/Kosten (revenues/costs): betrieblicher Output/Verbrauch in der Kostenrechnung.`},
{q:R`Funktion von Einzelabschluss vs. Konzernabschluss vs. Steuerbilanz`, a:R`Einzelabschluss: Dokumentation, Information, Zahlungsbemessung. Konzernabschluss: nur Information. Steuerbilanz: Zahlungsbemessung (Steuern).`}
],
quiz:[
{q:R`Ein Verkauf auf Ziel wird heute geliefert und nächsten Monat bezahlt. Was passiert heute?`, opts:[R`Einnahme, aber keine Einzahlung`,R`Einzahlung, aber keine Einnahme`,R`Einzahlung und Einnahme zugleich`,R`Weder Einnahme noch Einzahlung`], correct:0, exp:R`Die Lieferung auf Ziel erhöht die Forderungen, also steigt das Geldvermögen (Einnahme). Das Geld kommt erst später; diese Einzahlung ist dann keine Einnahme, weil die Forderung sinkt.`},
{q:R`Zu welcher Sphäre gehört die Zinszahlung auf einen Bankkredit?`, opts:[R`Zur Leistungssphäre, als Preis der Kapitalnutzung`,R`Zur Finanzsphäre, wie die Tilgung des Kredits`,R`Zu keiner Sphäre, nur eine interne Buchung`,R`Zum Staat, denn Zinsen sind eine Art Steuer`], correct:0, exp:R`Kredit und Tilgung sind finanziell; die Zinsen sind der Preis für die Kapitalnutzung und gehören zur Leistungssphäre (real sphere).`},
{q:R`Warum braucht das externe Rechnungswesen gesetzliche Regeln, das interne aber nicht?`, opts:[R`Die Leitung sagt Außenstehenden nicht alles`,R`Interne Zahlen sind immer weniger genau`,R`Das Finanzamt erstellt die internen Zahlen`,R`Außenstehende bezahlen den Abschluss`], correct:0, exp:R`Im externen Rechnungswesen sind Sender (Leitung) und Empfänger (Investoren, Gläubiger, Finanzamt) verschieden, also gibt es kein natürliches Interesse an vollständiger und wahrer Offenlegung.`},
{q:R`Welche Funktion hat der Konzernabschluss?`, opts:[R`Nur Information`,R`Grundlage für Dividenden`,R`Grundlage für Ertragsteuern`,R`Dokumentation und Dividenden`], correct:0, exp:R`Der Konzernabschluss wird zusätzlich zu den Einzelabschlüssen aufgestellt und dient nur der Information; Dividenden hängen am Einzelabschluss.`},
{q:R`Rohstoffe, in Jahr 1 gekauft und bezahlt, werden in Jahr 2 verbraucht. Wirkung in Jahr 2?`, opts:[R`Nur Aufwand`,R`Ausgabe und Aufwand zugleich`,R`Auszahlung ganz ohne Aufwand`,R`Keine, die Kosten lagen in Jahr 1`], correct:0, exp:R`Ausgabe und Auszahlung fanden in Jahr 1 statt. Der Verbrauch in Jahr 2 mindert dann das Reinvermögen: nur Aufwand.`},
{q:R`Welche Interessengruppe will eher einen NIEDRIGEN ausgewiesenen Gewinn?`, opts:[R`Gläubiger`,R`Gesellschafter`,R`Neue Investoren`,R`Manager mit Bonus`], correct:0, exp:R`Gläubiger bevorzugen niedrige Gewinne, weil weniger ausgeschüttet wird und ihre Kredite sicherer bleiben. Gesellschafter wollen hohe Gewinne; Manager können in beide Richtungen tendieren.`},
{q:R`Ein Friseur ist ein typisches…`, opts:[R`Dienstleistungsunternehmen mit externem Faktor`,R`Handelsunternehmen, das Waren unverarbeitet verkauft`,R`Industrieunternehmen mit Lager an Fertigerzeugnissen`,R`Finanzunternehmen am Kapitalmarkt`], correct:0, exp:R`Dienstleistungen entstehen zusammen mit einem Faktor, den der Kunde einbringt (hier: die Haare), und sind nicht lagerfähig.`}
]},

{id:'bk-rw-2', ch:'T2', lessons:'Lektion 3 (1–3)', course:['bk-2'], title:'Buchführungspflicht, Inventur & Inventar',
examWeight:'Wer nach HGB und Steuerrecht Bücher führen muss, die Inventurverfahren und die Vereinfachungen bei den Mengen — ergänzt Kurskapitel 3.1',
summary:R`**Buchführung (bookkeeping)** ist eine Periodenrechnung. Sie erfasst alle Geschäftsvorfälle eines Geschäftsjahres zeitlich geordnet, systematisch, zeitnah und lückenlos, damit der Jahresabschluss seine Dokumentationsfunktion erfüllen kann. Luca Pacioli hat die doppelte Buchführung 1494 als Erster beschrieben. "Buchhaltung" ist nur die Abteilung, in der die Buchführung stattfindet.

**Pflicht nach Handelsrecht (§ 238 HGB):** Jeder Kaufmann muss Bücher führen. Kaufmann ist, wer ein Handelsgewerbe betreibt (§ 1 HGB): eine Tätigkeit, die selbständig, auf Dauer angelegt, planmäßig, am Markt erkennbar, erlaubt und auf Gewinn gerichtet ist und kein freier Beruf und keine Land- und Forstwirtschaft ist. Außerdem muss sie einen in kaufmännischer Weise eingerichteten Geschäftsbetrieb erfordern. Anzeichen dafür sind Umsatz und Gewinn, Zahl der Mitarbeiter, Warensortiment, viele Lieferanten und Kunden und die Organisation.

Wege zur Kaufmannseigenschaft:
- Istkaufmann (§ 1 HGB) :: Handelsgewerbe, das einen kaufmännischen Geschäftsbetrieb erfordert; die Eintragung spielt keine Rolle
- Kannkaufmann durch Eintragung (§ 2 HGB) :: ein Kleingewerbetreibender kann sich freiwillig eintragen lassen und muss dann Bücher führen
- Land- und Forstwirte (§ 3 HGB) :: können sich eintragen lassen, wenn der Betrieb eine kaufmännische Einrichtung erfordert
- Formkaufmann (§ 6 HGB) :: AG, KGaA, GmbH und eingetragene Genossenschaft sind immer Kaufleute, egal wie klein oder rein vermögensverwaltend sie sind

Keine Kaufleute:
- Kleingewerbetreibende :: ihr Betrieb braucht keine kaufmännische Einrichtung
- Freie Berufe :: Ärzte, Anwälte, Steuerberater, Wirtschaftsprüfer, Tierärzte, Künstler; § 18 EStG zählt sie auf

**Befreiung (§ 241a HGB):** Ein Einzelkaufmann mit höchstens 600.000 € Umsatz und höchstens 60.000 € Gewinn an den Abschlussstichtagen zweier aufeinanderfolgender Jahre darf auf die Buchführung nach HGB verzichten und stattdessen eine Einnahmen-Überschuss-Rechnung (§ 4 Abs. 3 EStG) machen.

**Pflicht nach Steuerrecht:**
- Derivative (abgeleitete) Pflicht (§ 140 AO) :: wer nach anderen Gesetzen (HGB) Bücher führen muss, muss das auch für die Besteuerung tun; das trifft jeden Kaufmann, die Größe spielt keine Rolle
- Originäre Pflicht (§ 141 AO) :: Nicht-Kaufleute müssen Bücher führen, wenn das Finanzamt feststellt, dass eine Größengrenze überschritten ist (Umsatz über 600.000 €, Gewinn aus Gewerbebetrieb oder Land- und Forstwirtschaft über 60.000 € oder Wirtschaftswert der Landwirtschaft über 25.000 €); freie Berufe fallen nie unter § 141 AO

Die Pflicht eines Kaufmanns umfasst drei Dinge: laufende Buchführung (§ 238), regelmäßiges Inventar (§ 240) und Jahresabschluss (§ 242).

**Inventur vs. Inventar (stocktaking vs inventory):**
- Inventur :: die Tätigkeit, alle Vermögensgegenstände und Schulden zu einem Stichtag nach Art, Menge und Wert zu erfassen
- Körperliche Inventur :: Zählen, Wiegen, Messen der körperlichen Gegenstände
- Buchinventur :: Prüfung der nicht körperlichen Posten und Schulden (Forderungen, Bankguthaben, Verbindlichkeiten, Darlehen) anhand von Unterlagen wie Saldenbestätigungen
- Inventar :: das daraus entstehende ausführliche Verzeichnis aller Vermögensgegenstände und Schulden nach Art, Menge und Wert, in Staffelform; zehn Jahre aufzubewahren (§ 257 HGB)

Das Inventar hat immer drei Teile: Vermögen ./. Schulden = Reinvermögen (Eigenkapital). Das Vermögen wird nach steigender Liquidität geordnet, zuerst Anlagevermögen, dann Umlaufvermögen. Die Schulden werden in langfristige und kurzfristige getrennt.

Das Geschäftsjahr hat zwölf Monate und entspricht meist dem Kalenderjahr. Ein abweichendes Geschäftsjahr ist erlaubt (Saisonbetriebe). Ein Rumpfgeschäftsjahr ist in Ausnahmefällen möglich, vor allem im ersten und letzten Jahr.

**Das Zeitproblem — drei Inventurverfahren:**
- Stichtagsinventur :: Zählen am Abschlussstichtag; erweitert innerhalb von zehn Tagen davor oder danach, mit Fort- oder Rückrechnung der Bewegungen; viel Arbeit an wenigen Tagen
- Vor- oder nachverlegte Inventur (§ 241 Abs. 3 HGB) :: körperliche Aufnahme innerhalb von drei Monaten vor oder zwei Monaten nach dem Stichtag, Werte auf den Stichtag fort- oder zurückgerechnet
- Permanente Inventur (§ 241 Abs. 2 HGB) :: Zählungen über das Jahr verteilt, auf Basis einer Lagerbuchführung, die jeden Zu- und Abgang erfasst

Die letzten beiden sind für besonders wertvolle Gegenstände oder solche mit Gefahr unkontrollierter Abgänge nicht erlaubt.

**Das Mengenproblem — drei Vereinfachungen:**
- Festwert (§ 240 Abs. 3 HGB) :: Roh-, Hilfs- und Betriebsstoffe und Sachanlagen, deren Menge und Wert sich kaum ändern, dürfen mit gleichbleibender Menge und gleichbleibendem Wert angesetzt werden; etwa alle drei Jahre ist trotzdem eine körperliche Aufnahme fällig
- Gruppenbewertung (§ 240 Abs. 4 HGB) :: gleichartige Gegenstände werden zu einer Gruppe zusammengefasst und mit dem gewogenen Durchschnitt bewertet
- Verbrauchsfolgeverfahren (§ 256 HGB) :: wenn unklar ist, welche Einheiten verbraucht wurden, darf das Unternehmen eine Reihenfolge unterstellen: gewogener Durchschnitt, LIFO (last in, first out — wie ein Stapel) oder FIFO (first in, first out — wie ein Silo)

Eigenes Beispiel: Ein Unternehmen kauft 4.000 Liter Treibstoff zu 1,20 € und 6.000 Liter zu 1,30 €; 2.000 Liter sind übrig. Mit dem gewogenen Durchschnitt (0,4 × 1,20 + 0,6 × 1,30 = 1,26 €) beträgt der Bestand 2.520 €.

**Buch vs. Kurs:** Beide verwenden die Grenzen 600.000 € / 60.000 € für § 241a HGB und § 141 AO. Für Geschäftsjahre ab 2024 hat der Gesetzgeber beide Grenzen auf 800.000 € Umsatz und 80.000 € Gewinn angehoben. In der Klausur die Kurszahlen verwenden, außer Prof. Cloer sagt etwas anderes.`,
cards:[
{q:R`Vier Wege zur Kaufmannseigenschaft`, a:R`Istkaufmann (§ 1), Kannkaufmann durch Eintragung (§ 2), Land-/Forstwirte durch Eintragung (§ 3), Formkaufmann (§ 6: AG, KGaA, GmbH, eG).`},
{q:R`§ 140 AO vs. § 141 AO`, a:R`§ 140: abgeleitete steuerliche Pflicht für alle, die nach HGB Bücher führen müssen. § 141: originäre Pflicht für Nicht-Kaufleute über den Größengrenzen; nicht für freie Berufe.`},
{q:R`Inventur vs. Inventar (stocktaking vs inventory)`, a:R`Inventur = Tätigkeit, Vermögen/Schulden nach Art, Menge, Wert zu erfassen. Inventar = das daraus entstehende Verzeichnis in Staffelform (Vermögen − Schulden = Reinvermögen).`},
{q:R`Drei Inventurverfahren`, a:R`Stichtagsinventur (±10 Tage), vor-/nachverlegte Inventur (3 Monate vorher / 2 nachher, § 241 III), permanente Inventur (Lagerbuchführung, § 241 II).`},
{q:R`Drei Vereinfachungen für das Mengenproblem`, a:R`Festwert (§ 240 III), Gruppenbewertung (§ 240 IV), Verbrauchsfolge: Durchschnitt, LIFO, FIFO (§ 256).`}
],
quiz:[
{q:R`Eine GmbH verwaltet nur ein kleines Mietshaus und ein paar Aktien. Ist sie Kaufmann?`, opts:[R`Ja, immer, kraft Rechtsform`,R`Nein, sie hat kein Handelsgewerbe`,R`Erst nach freiwilliger Eintragung`,R`Erst ab 600.000 € Umsatz`], correct:0, exp:R`Kapitalgesellschaften sind Formkaufleute (§ 6 HGB mit § 13 GmbHG), egal wie klein oder vermögensverwaltend sie sind.`},
{q:R`Ein selbständiger Tierarzt führt eine planmäßige, dauerhafte und profitable Praxis. Muss er nach HGB Bücher führen?`, opts:[R`Nein, Tierärzte sind ein freier Beruf`,R`Ja, er betreibt ein Handelsgewerbe`,R`Ja, aber erst ab 60.000 € Gewinn`,R`Nur über den Grenzen des § 141 AO`], correct:0, exp:R`Freie Berufe sind kein Gewerbe und daher keine Kaufleute; § 141 AO gilt für sie auch nicht.`},
{q:R`Ein Einzelkaufmann hat 700.000 € Umsatz. Welche Steuervorschrift verpflichtet ihn zur Buchführung?`, opts:[R`§ 140 AO, abgeleitet aus dem HGB`,R`§ 141 AO, wegen der Größengrenzen`,R`§ 241a HGB, die Befreiungsregel`,R`Keine, nur die handelsrechtliche`], correct:0, exp:R`Jeder Kaufmann führt schon nach HGB Bücher, also gilt § 140 AO; die Größengrenzen des § 141 AO spielen keine Rolle.`},
{q:R`In welchem Zeitfenster darf eine vor- oder nachverlegte Inventur stattfinden?`, opts:[R`Drei Monate vorher bis zwei Monate nachher`,R`Zehn Tage vor bis zehn Tage nach dem Stichtag`,R`Zwei Monate vorher bis drei Monate nachher`,R`Jederzeit im laufenden Geschäftsjahr`], correct:0, exp:R`§ 241 Abs. 3 HGB: drei Monate vor oder zwei Monate nach dem Abschlussstichtag; die Werte werden auf den Stichtag gerechnet.`},
{q:R`Was ist Voraussetzung für die permanente Inventur?`, opts:[R`Eine Lagerbuchführung mit jeder Bewegung`,R`Eine Zählung genau am Abschlussstichtag`,R`Ein Festwert für alle Vorratsposten`,R`Ein Prüfer, der die Liste bestätigt`], correct:0, exp:R`Die permanente Inventur (§ 241 Abs. 2 HGB) braucht eine Lagerbuchführung; der Buchbestand ersetzt dann die vollständige Zählung am Stichtag.`},
{q:R`Welche Vereinfachung erlaubt es, tausende gleichartige Werkzeuge mit einem konstanten Betrag anzusetzen?`, opts:[R`Festwert nach § 240 Abs. 3 HGB`,R`Gruppenbewertung nach § 240 Abs. 4 HGB`,R`FIFO-Verbrauchsfolge (§ 256 HGB)`,R`Permanente Inventur (§ 241 HGB)`], correct:0, exp:R`Ein Festwert (gleichbleibende Menge zu gleichbleibendem Preis) ist erlaubt, wenn sich Größe und Wert kaum ändern; etwa alle drei Jahre ist eine Zählung fällig.`},
{q:R`Wie wird das Vermögen im Inventar geordnet?`, opts:[R`Nach Liquidität, Anlagevermögen zuerst`,R`Nach fallendem Wert, das Größte zuerst`,R`Nach Kaufdatum, das Älteste zuerst`,R`Alphabetisch innerhalb jeder Gruppe`], correct:0, exp:R`Zuerst Anlagevermögen, dann Umlaufvermögen, am Ende Bank und Kasse; danach die Schulden, nach Fälligkeit getrennt.`}
]},

{id:'bk-rw-3', ch:'T3', lessons:'Lektion 3 (4–7)', course:['bk-3','bk-4'], title:'Bilanz, vier Arten von Geschäftsvorfällen, T-Konten & Buchungssätze',
examWeight:'Vom Inventar zur Bilanz, die vier erfolgsneutralen Arten von Geschäftsvorfällen und die zwei formalen Werkzeuge (T-Konto, Buchungssatz) — ergänzt Kurskapitel 3.2–3.3',
summary:R`**Vom Inventar zur Bilanz.** Jeder Kaufmann stellt eine Eröffnungsbilanz und zu jedem Geschäftsjahresende eine Bilanz auf (§ 242 Abs. 1 HGB). Sie entsteht aus dem Inventar und der laufenden Buchführung. Im Vergleich zum Inventar:
- fasst sie Einzelposten zu größeren Posten zusammen
- lässt sie die Mengen weg
- stellt sie Vermögen und Kapital in Kontoform nebeneinander statt untereinander

Die linke Seite ist die Aktivseite (assets side), geordnet nach steigender Liquidität. Die rechte Seite ist die Passivseite (equity-and-liabilities side), geordnet nach der Rechtsstellung des Kapitalgebers (Eigen- vs. Fremdkapital) und der Dringlichkeit der Zahlung. Das Eigenkapital ist die Restgröße, deshalb ist die Bilanz immer ausgeglichen.

Grundgleichung: Vermögen = Kapital, also Vermögen − Schulden = Eigenkapital.

§ 247 Abs. 1 HGB verlangt nur gesonderte Posten für Anlage- und Umlaufvermögen, Eigenkapital, Schulden und Rechnungsabgrenzungsposten; für Einzelkaufleute gibt es keine genaue Gliederung. In der Praxis folgen sie der Gliederung für große Kapitalgesellschaften in § 266 Abs. 2 HGB. Die Bilanz wird auf Deutsch und in Euro aufgestellt (§ 244) und vom Kaufmann mit Datum unterschrieben, bei Personengesellschaften von allen persönlich haftenden Gesellschaftern (§ 245).

Übersteigen die Schulden das Vermögen, ist das Eigenkapital aufgebraucht. Der negative Betrag steht dann am Ende der Aktivseite als "nicht durch Eigenkapital gedeckter Fehlbetrag" (§ 268 Abs. 3 HGB). Diese bilanzielle Überschuldung signalisiert Insolvenzgefahr.

Die Bilanz ist eine Zeitpunktrechnung: eine zusammengefasste Gegenüberstellung von Vermögen und Kapital an einem Stichtag.

**Vier erfolgsneutrale Arten von Geschäftsvorfällen.** Jeder Geschäftsvorfall berührt mindestens zwei Bilanzposten, und die Grundgleichung gilt immer. Eigene Beispiele:
- Aktivtausch (asset swap) :: ein Kunde zahlt 2.000 € einer Forderung aufs Bankkonto; Forderungen sinken, Bank steigt, Bilanzsumme unverändert
- Passivtausch (liability swap) :: eine Lieferantenschuld von 5.000 € wird in ein Bankdarlehen umgewandelt; eine Verbindlichkeit sinkt, eine andere steigt, Bilanzsumme unverändert
- Aktiv-Passiv-Mehrung (balance sheet extension) :: ein Drucker für 800 € wird auf Ziel gekauft; BGA steigt, Verbindlichkeiten aus L. u. L. steigen, Bilanzsumme steigt
- Aktiv-Passiv-Minderung (balance sheet contraction) :: eine Darlehensrate von 1.000 € wird von der Bank bezahlt; Bank sinkt, Darlehen sinkt, Bilanzsumme sinkt

Wird ein Posten null, darf er wegfallen, außer er hatte im Vorjahr einen Betrag (§ 265 Abs. 8 HGB).

**T-Konto (T-account).** Die Bilanz nach jedem Geschäftsvorfall neu aufzustellen wäre bei tausenden Vorfällen pro Tag unmöglich. Deshalb bekommt jeder Bilanzposten ein T-Konto. Die linke Seite heißt Soll (debit), die rechte Haben (credit). Historisch: der Schuldner "soll" uns zahlen, der Gläubiger "hat" einen Anspruch.

Die Logik jedes Bestandskontos: Anfangsbestand + Zugänge − Abgänge = Schlussbestand, oder Anfangsbestand + Zugänge = Abgänge + Schlussbestand.
- Aktivkonto (asset account) :: Soll = Anfangsbestand und Zugänge; Haben = Abgänge und Schlussbestand
- Passivkonto (liability/equity account) :: Haben = Anfangsbestand und Zugänge; Soll = Abgänge und Schlussbestand

Tipp aus dem Buch: Diese beiden T-Konten zu Beginn jeder Klausur auf Schmierpapier skizzieren.

**Buchungssatz (booking entry).** Bei vielen Konten sieht niemand mehr, welche Buchung zu welcher gehört. Der Buchungssatz nennt die berührten Konten und die Seite: immer "Soll an Haben" (debit to credit). Das Wort "an" (to) bedeutet nichts; es verbindet nur die beiden Konten. Soll- und Habensumme müssen gleich sein. Zusammengesetzte Buchungssätze berühren mehr als zwei Konten (ein Soll und mehrere Haben, mehrere und mehrere oder mehrere Soll und ein Haben).

Die Regeln kurz:
- Jeder Geschäftsvorfall wird doppelt gebucht: erst Soll, dann Haben
- Nie einen Betrag ins T-Konto eintragen, ohne vorher den Buchungssatz aufzuschreiben — dann vergisst man das Gegenkonto nicht

**Kontenrahmen (chart of accounts).** Ein Kontenrahmen vereinheitlicht die Konten einer Branche; jedes Unternehmen leitet daraus seinen eigenen Kontenplan ab. Verbreitet sind: Einzelhandel (EKR), Groß- und Außenhandel, Industrie (GKR und IKR) sowie DATEV SKR 03 und SKR 04. Sie sind dekadisch aufgebaut: zehn Kontenklassen, unterteilt in Gruppen, Konten und Unterkonten. Geordnet sind sie entweder nach dem Abschluss (Bilanz- und GuV-Gliederung, Abschlussgliederungsprinzip) oder nach dem Prozess (Wertefluss durch das Unternehmen, Prozessgliederungsprinzip).`,
cards:[
{q:R`Drei Unterschiede zwischen Inventar und Bilanz`, a:R`Die Bilanz fasst Posten zusammen, lässt die Mengen weg und nutzt Kontoform (zwei Seiten) statt Staffelform.`},
{q:R`Vier erfolgsneutrale Arten von Geschäftsvorfällen`, a:R`Aktivtausch (asset swap), Passivtausch (liability swap), Aktiv-Passiv-Mehrung (balance sheet extension), Aktiv-Passiv-Minderung (balance sheet contraction).`},
{q:R`Was gilt, wenn die Schulden das Vermögen übersteigen?`, a:R`"Nicht durch Eigenkapital gedeckter Fehlbetrag" am Ende der Aktivseite (§ 268 III HGB) — bilanzielle Überschuldung.`},
{q:R`Seiten von Aktiv- vs. Passivkonto`, a:R`Aktivkonto: Anfangsbestand + Zugänge im Soll; Abgänge + Schlussbestand im Haben. Passivkonto: umgekehrt.`}
],
quiz:[
{q:R`Ein Unternehmen wandelt eine Lieferantenschuld von 5.000 € in ein Bankdarlehen um. Welche Art von Geschäftsvorfall?`, opts:[R`Passivtausch`,R`Aktivtausch`,R`Aktiv-Passiv-Mehrung`,R`Aktiv-Passiv-Minderung`], correct:0, exp:R`Nur die Struktur der Passivseite ändert sich; die Bilanzsumme bleibt gleich.`},
{q:R`Ein Unternehmen kauft einen Drucker auf Ziel. Welche Art von Geschäftsvorfall?`, opts:[R`Aktiv-Passiv-Mehrung`,R`Aktiv-Passiv-Minderung`,R`Aktivtausch`,R`Passivtausch`], correct:0, exp:R`Vermögen (BGA) und Schulden (Verbindlichkeiten aus L. u. L.) steigen um denselben Betrag; die Bilanzsumme steigt.`},
{q:R`Wo steht ein nicht durch Eigenkapital gedeckter Fehlbetrag?`, opts:[R`Am Ende der Aktivseite`,R`Ganz oben im Eigenkapital`,R`Als negative Zeile in der GuV`,R`Nur im Anhang, nicht in der Bilanz`], correct:0, exp:R`§ 268 Abs. 3 HGB: Der Überschuss der Schulden über das Vermögen wird gesondert am Ende der Aktivseite ausgewiesen.`},
{q:R`Auf welcher Seite steht der Anfangsbestand eines Passivkontos?`, opts:[R`Im Haben`,R`Im Soll`,R`Beliebig, nach Wahl`,R`Er hat keinen Anfangsbestand`], correct:0, exp:R`Passivkonten (Schulden und Eigenkapital) nehmen Anfangsbestand und Zugänge im Haben auf, wie die rechte Seite der Bilanz.`},
{q:R`Was bedeutet das Wort "an" in "Bank an Forderungen"?`, opts:[R`Nichts; es verbindet nur die Konten`,R`Dass Geld von der Bank zum Kunden fließt`,R`Dass das Bankkonto im Haben gebucht wird`,R`Dass die Forderungen um den Betrag steigen`], correct:0, exp:R`Der Buchungssatz lautet immer Soll an Haben; "an" (to) hat keine eigene Bedeutung. Hier wird die Bank im Soll, die Forderungen im Haben gebucht.`},
{q:R`Wie sind die Posten der Passivseite geordnet?`, opts:[R`Nach Rechtsstellung des Gebers und Fälligkeit`,R`Nach steigender Liquidität, Kasse und Bank zuletzt`,R`Nach Größe, der größte Posten zuerst`,R`Nach dem Datum der Entstehung der Schuld`], correct:0, exp:R`Erst Eigenkapital, dann Schulden, geordnet nach Dringlichkeit der Zahlung; die Aktivseite ist nach Liquidität geordnet.`},
{q:R`Was leistet ein Kontenrahmen (chart of accounts)?`, opts:[R`Er vereinheitlicht die Konten einer Branche`,R`Er listet das Vermögen nach Menge und Wert`,R`Er legt die gesetzliche GuV-Gliederung fest`,R`Er ersetzt den Kontenplan jedes Unternehmens`], correct:0, exp:R`Er ist ein branchenweites dekadisches System (zehn Klassen); jedes Unternehmen leitet daraus seinen eigenen Kontenplan ab.`}
]},

{id:'bk-rw-4', ch:'T4', lessons:'Lektion 4', course:['bk-4'], title:'Technik: EBK, SBK, Erfolgskonten & GuV-Konto',
examWeight:'Eröffnen und Abschließen aller Konten, Buchen auf Erfolgskonten und die Abschlusskette GuV → Eigenkapital → SBK — ergänzt Kurskapitel 3.3 und den Closing Trainer',
summary:R`**Eröffnung über das Eröffnungsbilanzkonto (EBK, opening balance sheet account / OBSA).** Die Schlussbilanz eines Jahres ist die Eröffnungsbilanz des nächsten (Bilanzidentität / balance sheet identity, § 252 Abs. 1 Nr. 1 HGB). Jeder Posten bekommt ein Konto. Weil jede Buchung eine Gegenbuchung braucht, werden die Anfangsbestände gegen das EBK gebucht. Das EBK ist das Spiegelbild der Eröffnungsbilanz: Aktiva im Haben, Eigenkapital und Schulden im Soll.
- Eröffnung eines Aktivkontos :: Aktivkonto an EBK (z. B. Kasse 3.000 an EBK 3.000)
- Eröffnung eines Passivkontos :: EBK an Schuld- bzw. Eigenkapitalkonto

**Vier Fragen vor jeder Buchung:**
- Welche Bilanzposten ändern sich, welche Konten sind also berührt?
- Sind es Aktiv- oder Passivkonten?
- Ist es ein Zugang oder ein Abgang?
- Auf welche Seite des jeweiligen Kontos kommt der Betrag?

Eigenes Beispiel: Ein Kunde überweist 1.500 €. Konten: Bank und Forderungen, beides Aktivkonten; die Bank steigt (Soll), die Forderungen sinken (Haben). Buchung: Bank 1.500 an Forderungen 1.500.

**Abschluss über das Schlussbilanzkonto (SBK, closing balance sheet account / CBSA).** Am Jahresende wird jedes Konto aufaddiert und sein Saldo mit der Inventur abgeglichen. Der Saldo (Schlussbestand) wird auf der kleineren Seite gebucht. Bei Aktivkonten landet er im Haben, bei Passivkonten im Soll. Das Gegenkonto ist das SBK:
- SBK an Aktivkonto
- Passivkonto an SBK

Anders als das EBK ist das SBK genauso aufgebaut wie die Bilanz. Die Schlussbilanz ist nur eine Reinschrift davon.

=> Inventur und Inventar (altes Jahr) → Eröffnungsbilanz (gleich der letzten Schlussbilanz) → Eröffnungsbuchungen über EBK → laufende Geschäftsvorfälle auf Bestandskonten → Abschlussbuchungen über SBK → Schlussbilanz, abgeglichen mit dem neuen Inventar

**Erfolgskonten (income-statement accounts).** Viele Geschäftsvorfälle verändern das Eigenkapital: Mieterträge erhöhen es, Löhne mindern es. Den Gewinn kann man auf zwei Wegen messen, und beide ergeben immer dieselbe Zahl:
- Bestandsvergleich (comparison of stocks) :: Eigenkapital am Jahresende − Eigenkapital am Jahresanfang
- Stromgrößenvergleich (GuV) :: Erträge − Aufwendungen

Die GuV braucht man trotzdem. § 242 Abs. 2 HGB verlangt sie, und alles direkt auf dem Eigenkapitalkonto zu buchen würde es unlesbar machen und die Erfolgsquellen verdecken. Deshalb führt man Aufwands- und Ertragskonten als Unterkonten des Eigenkapitals.

Weil sie Unterkonten des Eigenkapitals sind, folgen sie dessen Seiten:
- Aufwendungen stehen immer im Soll :: Aufwandskonto an Bestandskonto
- Erträge stehen immer im Haben :: Bestandskonto an Ertragskonto

Eigene Beispiele: Telefonrechnung per Bank abgebucht, 90 €: Telefonaufwand 90 an Bank 90. Zinsgutschrift, 40 €: Bank 40 an Zinserträge 40. Reparaturrechnung auf Ziel, 300 €: Instandhaltungsaufwand 300 an Verbindlichkeiten aus L. u. L. 300.

**Abschluss der Erfolgskonten.** Ihre Salden gehen zuerst ins GuV-Konto, nicht direkt ins Eigenkapital:
- GuV an jedes Aufwandskonto
- Jedes Ertragskonto an GuV
- Jahresüberschuss (Saldo im Soll der GuV): GuV an Eigenkapital
- Jahresfehlbetrag (Saldo im Haben der GuV): Eigenkapital an GuV
- Zum Schluss: Eigenkapital an SBK

Es gilt das Saldierungsverbot (offsetting prohibition, § 246 Abs. 2 HGB): Mietaufwand und Mietertrag dürfen nicht verrechnet werden. Jede Erfolgsart behält ihr eigenes Konto, damit die GuV neben der Höhe auch die Quellen des Gewinns zeigt.

Die Schlussbilanz ist das nach § 266 HGB gegliederte SBK. Die GuV-Rechnung ist das nach § 275 HGB gegliederte GuV-Konto. Geht das SBK nicht auf, steckt ein Buchungsfehler drin.`,
cards:[
{q:R`Eröffnungsbuchungen über das EBK (OBSA)`, a:R`Aktivkonto an EBK; EBK an Passivkonto. Das EBK ist das Spiegelbild der Eröffnungsbilanz.`},
{q:R`Abschlussbuchungen über das SBK (CBSA)`, a:R`SBK an Aktivkonto; Passivkonto an SBK. Das SBK ist genauso aufgebaut wie die Bilanz.`},
{q:R`Abschlusskette der Erfolgskonten`, a:R`GuV an Aufwandskonten; Ertragskonten an GuV; GuV an Eigenkapital (Jahresüberschuss) oder Eigenkapital an GuV (Jahresfehlbetrag); Eigenkapital an SBK.`},
{q:R`Zwei Wege der Gewinnermittlung`, a:R`Eigenkapitalvergleich (Ende − Anfang) und Vergleich der Stromgrößen (Erträge − Aufwendungen); beide ergeben dasselbe.`}
],
quiz:[
{q:R`Wie wird der Anfangsbestand des Kassenkontos gebucht?`, opts:[R`Kasse an EBK`,R`EBK an Kasse`,R`Kasse an SBK`,R`Eigenkapital an Kasse`], correct:0, exp:R`Aktivkonten werden im Soll gegen das EBK eröffnet, das die Aktiva im Haben aufnimmt.`},
{q:R`Auf welcher Seite des EBK stehen die Schulden?`, opts:[R`Im Soll — Spiegelbild der Bilanz`,R`Im Haben — wie in der Bilanz selbst`,R`Gar nicht im EBK, nur in der Bilanz`,R`Auf beiden Seiten, als Ausgleich`], correct:0, exp:R`Das EBK ist das Spiegelbild der Eröffnungsbilanz: Aktiva im Haben, Eigenkapital und Schulden im Soll.`},
{q:R`Wie wird der Schlussbestand eines Darlehenskontos gebucht?`, opts:[R`Darlehen an SBK`,R`SBK an Darlehen`,R`Darlehen an GuV`,R`EBK an Darlehen`], correct:0, exp:R`Passivkonten haben ihren Schlussbestand im Soll; die Gegenbuchung steht im Haben des SBK.`},
{q:R`Strom für 250 € wird vom Bankkonto abgebucht. Buchungssatz?`, opts:[R`Energieaufwand 250 an Bank 250`,R`Bank 250 an Energieaufwand 250`,R`Energieaufwand 250 an Eigenkapital 250`,R`Verbindlichkeiten 250 an Bank 250`], correct:0, exp:R`Aufwendungen stehen immer im Soll; das Bankguthaben sinkt (Haben).`},
{q:R`Das GuV-Konto zeigt einen Jahresfehlbetrag. Wie wird es abgeschlossen?`, opts:[R`Eigenkapital an GuV`,R`GuV an Eigenkapital`,R`GuV an SBK`,R`SBK an GuV`], correct:0, exp:R`Ein Jahresfehlbetrag ist ein Saldo im Haben der GuV; er mindert das Eigenkapital, also Eigenkapital (Soll) an GuV (Haben).`},
{q:R`Warum dürfen Mieterträge und Mietaufwand in der GuV nicht verrechnet werden?`, opts:[R`§ 246 Abs. 2 HGB verbietet die Saldierung`,R`Beide gehören zu verschiedenen Geschäftsjahren`,R`Mieterträge sind immer steuerfrei`,R`Mietaufwand ist kein betrieblicher Aufwand`], correct:0, exp:R`Das Saldierungsverbot (offsetting prohibition) hält die Erfolgsquellen sichtbar; jede Erfolgsart bleibt auf ihrem eigenen Konto.`},
{q:R`Eigenkapital am Anfang 80.000 €, am Ende 95.000 €, keine Einlagen oder Entnahmen. Was ergibt Erträge − Aufwendungen?`, opts:[R`15.000 €`,R`95.000 €`,R`175.000 €`,R`80.000 €`], correct:0, exp:R`Bestandsvergleich und Stromgrößenvergleich ergeben immer dasselbe: 95.000 − 80.000 = 15.000.`}
]},

{id:'bk-rw-5', ch:'T5', lessons:'Lektion 5', course:['bk-7'], title:'Rechtsrahmen: HGB, Anhang, Lagebericht, Prüfung, Konzern & IFRS',
examWeight:'Größtenteils über die Vorlesung hinaus: zweistufiger Aufbau des HGB, Bestandteile des Jahresabschlusses nach Größe und Rechtsform, Prüfung, Offenlegung, Konzernabschluss und IFRS',
summary:R`**Über die Vorlesung hinaus:** Prof. Cloers Kurs streift diesen Rahmen nur am Rand. Lies ihn als Hintergrund für die HGB-Verweise und für Financial Statement Analysis.

**Drei Epochen haben das deutsche Bilanzrecht geprägt:**
- Industrialisierung :: das ADHGB von 1861 und das HGB von 1897 (in Kraft seit 1900) hatten nur wenige Regeln; große Aktiengesellschaften mit hohem Kapitalbedarf ließen Aktienbörsen entstehen, das erhöhte den Informationsbedarf; es folgten ein eigenes Aktienrecht (1870), die erste Pflicht zu Bilanz und GuV für AGs (1884) und strengere Aktiengesetze 1937 und 1965
- Europäisierung :: die 4., 7. und 8. EG-Richtlinie harmonisierten die Rechnungslegung; die 4. (Bilanz-)Richtlinie wurde 1985 zum Dritten Buch des HGB; das BilRUG von 2015 setzte die neue EU-Bilanzrichtlinie 2013/34/EU um
- Globalisierung :: internationale Kapitalmärkte wollen vergleichbare Abschlüsse (IFRS)

**Zweistufiger Aufbau des Dritten Buchs des HGB:**
- §§ 238–263 HGB :: Vorschriften für alle Kaufleute (Buchführung, Inventar, Eröffnungsbilanz, Jahresabschluss, Aufbewahrung)
- §§ 264–342e HGB :: ergänzende Vorschriften für Kapitalgesellschaften (Einzelabschluss, Konzernabschluss, Offenlegung, Prüfung)

Vorgehen bei einem Fall: immer zuerst §§ 238–263 prüfen. Bei einem Einzelkaufmann oder einer Personengesellschaft ist man dann fertig. Nur bei einer Kapitalgesellschaft prüft man danach §§ 264 ff.

**Bestandteile des Jahresabschlusses:**
- Alle Kaufleute (§ 242 Abs. 3 HGB) :: Bilanz und GuV
- Kapitalgesellschaften (§ 264 Abs. 1 HGB) :: zusätzlich Anhang (notes); Kleinstkapitalgesellschaften (§ 267a) sind vom Anhang befreit
- Lagebericht (management report, § 289 HGB) :: Pflicht für Kapitalgesellschaften, aber NICHT Teil des Jahresabschlusses; er steht daneben; kleine Kapitalgesellschaften (§ 267 Abs. 1) dürfen ihn weglassen
- Kapitalmarktorientierte Kapitalgesellschaften (§ 264d) :: zusätzlich Kapitalflussrechnung (cash flow statement) und Eigenkapitalspiegel (statement of changes in equity); Segmentberichterstattung freiwillig

**Bilanz und GuV.** Die Bilanz stellt Vermögen und Kapital an einem Stichtag gegenüber. Anlagevermögen soll dem Geschäftsbetrieb dauerhaft dienen (§ 247 Abs. 2 HGB). Umlaufvermögen wird bald verkauft oder verbraucht. Derselbe Computer ist im Steuerbüro Anlagevermögen und beim Computerhändler Umlaufvermögen: entscheidend ist die Funktion. Faustregel: Anlagevermögen wird genutzt, Umlaufvermögen wird verbraucht oder verkauft. Fremdkapital steht befristet zur Verfügung, Eigenkapital grundsätzlich unbefristet.

Das HGB enthält Ansatzvorschriften (recognition rules, §§ 246–251, dazu §§ 267–274, 277), Bewertungsvorschriften (valuation rules, §§ 252–256a) und Gliederungsvorschriften (layout rules, §§ 246, 247, dazu §§ 266, 275).

Die GuV zeigt, wie das Ergebnis entstanden ist: Stromgrößen (€ pro Jahr), keine Bestände. Alle Kaufleute dürfen die Kontoform nutzen; Kapitalgesellschaften müssen die Staffelform verwenden (§ 275 Abs. 1 HGB). Beide Formen ergeben dasselbe Ergebnis. Die GuV beginnt mit den Umsatzerlösen (sales revenue, § 277 Abs. 1 HGB): Erlöse aus Verkauf, Vermietung oder Verpachtung von Produkten und aus Dienstleistungen, nach Abzug von Erlösschmälerungen (Rabatte, Skonti) und der Umsatzsteuer sowie sonstiger direkt mit dem Umsatz verbundener Steuern. Der Verkauf von Anlagevermögen oder Forderungen ist kein Umsatzerlös, sondern sonstiger betrieblicher Ertrag. Zwischenergebnisse: Gesamtkostenverfahren (§ 275 Abs. 2) Nr. 15; Umsatzkostenverfahren (Abs. 3) Nr. 3 und 14.

**Anhang (notes).** Kapitalgesellschaften stellen einen Anhang auf. Er hat zwei Aufgaben:
- Erläuterung :: wie Wahlrechte genutzt wurden, Bewertungsmethoden, Änderungen zum Vorjahr (§ 284), der Anlagenspiegel
- Ergänzung :: Informationen über Bilanz und GuV hinaus, z. B. Bezüge der Geschäftsführung (§ 285 Nr. 9) und sonstige finanzielle Verpflichtungen (§ 285 Nr. 3a)

Manche Angaben dürfen entfallen (§ 286; z. B. die Bezüge eines einzelnen Geschäftsführers). Kleine Kapitalgesellschaften bekommen weitere Erleichterungen (§ 288).

**Lagebericht.** Er behandelt die Vergangenheit und die erwartete Zukunft einschließlich der Risiken der künftigen Entwicklung (Risikobericht). Er muss z. B. auch Forschung und Entwicklung abdecken. Das zwingt mittelgroße und große Kapitalgesellschaften indirekt zu einem Risikomanagementsystem. Manche Unternehmen ergänzen eine nichtfinanzielle Erklärung (§ 289b) und eine Erklärung zur Unternehmensführung (§ 289f).

**Prüfung und Offenlegung:**
- Pflichtprüfung (statutory audit, §§ 316 ff.) :: für mittelgroße und große Kapitalgesellschaften; umfasst Jahresabschluss, Lagebericht und Buchführung; nur Wirtschaftsprüfer, bei mittelgroßen GmbHs auch vereidigte Buchprüfer; Ergebnis: Prüfungsbericht und Bestätigungsvermerk, uneingeschränkt, eingeschränkt oder versagt; nicht mit der steuerlichen Betriebsprüfung verwechseln
- Offenlegung (disclosure, §§ 325–329) :: Kapitalgesellschaften veröffentlichen elektronisch; Erleichterungen nach Größe: kleine Kapitalgesellschaften müssen ihre GuV nicht offenlegen (aber aufstellen); mittelgroße und große legen alles offen, einschließlich Bericht des Aufsichtsrats und Bestätigungsvermerk
- GmbH & Co. KG (§ 264a) :: Personengesellschaften ohne natürliche Person als Vollhafter müssen die Vorschriften für Kapitalgesellschaften zu Abschluss, Prüfung, Offenlegung und Konzernabschluss anwenden

**Konzernabschluss (consolidated statements).** Konzernunternehmen können mit Verrechnungspreisen Gewinne verschieben, z. B. Verkäufe über dem Marktpreis oder Darlehen unter dem Marktzins. Das verzerrt die Einzelabschlüsse. Deshalb stellt ein Mutterunternehmen mit Beherrschung über Tochterunternehmen einen Konzernabschluss auf (§ 290). Er folgt der Einheitstheorie (unity theory, § 297 Abs. 3): den Konzern so darstellen, als wäre er ein einziges Unternehmen, die Einzelabschlüsse addieren und konzerninterne Forderungen und Schulden, Zinsen und Umsätze eliminieren.

Konzernabschluss = Konzernbilanz, Konzern-GuV, Konzernanhang, Kapitalflussrechnung, Eigenkapitalspiegel (Segmentbericht freiwillig), dazu ein Konzernlagebericht.

Befreiungen:
- Mutter ist in einen EU/EWR-Konzernabschluss einbezogen :: befreit (§ 291)
- Kleine Konzerne :: größenabhängig befreit (§ 293), außer sie sind kapitalmarktorientiert

Börsennotierte Konzerne müssen ihren Konzernabschluss nach IFRS aufstellen (§ 315e). Andere dürfen wählen.

**IFRS.** Das IASB, eine private Stiftung, entwickelt die internationalen Standards. Sie stehen der angloamerikanischen, investororientierten Tradition nahe. Das deutsche HGB schützt traditionell die Gläubiger, weil sich deutsche Unternehmen vor allem über Bankkredite und Pensionsrückstellungen finanzieren. Seit 2005 sind IFRS für die Konzernabschlüsse EU-börsennotierter Unternehmen Pflicht, und die US-SEC akzeptiert IFRS seit 2009. § 342 HGB erlaubt ein privates Rechnungslegungsgremium (DRSC). Das BilMoG von 2009 hat das HGB einen kleinen Schritt Richtung IFRS bewegt.

IFRS weisen Gewinne tendenziell früher aus, über die gesamte Lebensdauer zeigen aber beide Systeme dieselbe Summe, weil die Zahlungen identisch sind:
- Die Realisation wird lockerer ausgelegt (langfristige Fertigung nach Fertigstellungsgrad, Wertpapiere zum Fair Value)
- Manche selbst geschaffenen immateriellen Vermögenswerte müssen aktiviert werden
- Nutzungsdauern sind meist länger als in den deutschen AfA-Tabellen

**Buch vs. Kurs:** Die Ausgabe von 2019 zitiert IAS 11 und IAS 39. Diese wurden inzwischen durch IFRS 15 (Umsatzerlöse) und IFRS 9 (Finanzinstrumente) ersetzt. Das Prinzip der früheren Gewinnrealisierung nach IFRS gilt weiterhin.`,
cards:[
{q:R`Zweistufiger Aufbau des Dritten Buchs des HGB`, a:R`§§ 238–263 für alle Kaufleute; §§ 264–342e zusätzlich für Kapitalgesellschaften. Immer zuerst den allgemeinen Teil prüfen.`},
{q:R`Ist der Lagebericht (management report) Teil des Jahresabschlusses?`, a:R`Nein. Der Anhang (notes) gehört zum Abschluss einer Kapitalgesellschaft; der Lagebericht steht daneben (§ 289; kleine Kapitalgesellschaften dürfen ihn weglassen).`},
{q:R`Zwei Funktionen des Anhangs`, a:R`Erläuterung (Wahlrechte, Methoden, Änderungen, Anlagenspiegel) und Ergänzung (z. B. Bezüge der Geschäftsführung, sonstige finanzielle Verpflichtungen).`},
{q:R`Einheitstheorie (unity theory) im Konzernabschluss`, a:R`Der Konzern wird dargestellt, als wäre er ein Unternehmen: Einzelabschlüsse addieren, konzerninterne Salden, Zinsen und Umsätze eliminieren (§ 297 III).`}
],
quiz:[
{q:R`Eine GmbH hat Bilanz und GuV aufgestellt. Was gehört noch zu ihrem Jahresabschluss (keine Kleinst-GmbH)?`, opts:[R`Der Anhang`,R`Der Lagebericht`,R`Eine Kapitalflussrechnung`,R`Der Bestätigungsvermerk`], correct:0, exp:R`§ 264 Abs. 1 HGB ergänzt für Kapitalgesellschaften den Anhang. Der Lagebericht ist auch Pflicht, steht aber neben dem Abschluss, nicht darin.`},
{q:R`Welche Kapitalgesellschaften müssen ihren Abschluss prüfen lassen?`, opts:[R`Mittelgroße und große`,R`Alle, unabhängig von der Größe`,R`Nur börsennotierte Gesellschaften`,R`Nur große über den § 267-Grenzen`], correct:0, exp:R`§§ 316 ff. HGB: Pflichtprüfung für mittelgroße und große Kapitalgesellschaften; kleine sind befreit.`},
{q:R`Was darf eine kleine Kapitalgesellschaft bei der Offenlegung weglassen?`, opts:[R`Ihre GuV — aufstellen muss sie sie aber`,R`Ihre Bilanz zusammen mit dem ganzen Anhang`,R`Alles, sie hat gar keine Pflicht`,R`Nur den Bestätigungsvermerk`], correct:0, exp:R`§ 326 HGB: Kleine Kapitalgesellschaften müssen die GuV nicht offenlegen; einen Lagebericht brauchen sie gar nicht.`},
{q:R`Warum muss eine GmbH & Co. KG die Vorschriften für Kapitalgesellschaften befolgen?`, opts:[R`Keine natürliche Person haftet voll`,R`Sie ist kraft Rechtsform Kapitalgesellschaft`,R`Jede KG muss diese Regeln befolgen`,R`Sie gilt immer als große Gesellschaft`], correct:0, exp:R`§ 264a HGB stellt Personengesellschaften ohne natürliche Person als Komplementär den Kapitalgesellschaften gleich.`},
{q:R`Schwesterunternehmen handeln Waren zum doppelten Marktpreis. Welches Instrument korrigiert die Verzerrung?`, opts:[R`Der Konzernabschluss`,R`Der Anhang jedes einzelnen Konzernunternehmens`,R`Die Steuerbilanz des Käufers`,R`Der Risikoteil des Lageberichts`], correct:0, exp:R`Die Konsolidierung (Einheitstheorie) eliminiert konzerninterne Umsätze, Forderungen, Schulden und Zinsen.`},
{q:R`Ein Computerhändler hat einen PC zum Verkauf auf Lager. Wo steht er?`, opts:[R`Im Umlaufvermögen, weil er verkauft wird`,R`Im Anlagevermögen, Computer sind Ausstattung`,R`Auf beiden Seiten, nach freier Wahl des Kaufmanns`,R`Außerhalb der Bilanz, bis er verkauft ist`], correct:0, exp:R`Die Zuordnung folgt der Funktion: Anlagevermögen wird genutzt, Umlaufvermögen wird verbraucht oder verkauft.`},
{q:R`Warum weisen IFRS Gewinne tendenziell früher aus als das HGB?`, opts:[R`Sie legen die Realisation lockerer aus`,R`Sie ignorieren die Abschreibung des Anlagevermögens`,R`Sie verlangen eine höhere Zahl an Rückstellungen`,R`Sie buchen Umsätze erst bei Zahlungseingang`], correct:0, exp:R`Beispiele: Gewinn nach Fertigstellungsgrad, Fair Value für Handelswertpapiere, Aktivierung mancher selbst geschaffener immaterieller Werte. Über die ganze Lebensdauer sind die Summen gleich.`}
]},

{id:'bk-rw-6', ch:'T6', lessons:'Lektion 6', course:['bk-7'], title:'GoB: Vorsicht, Realisation, Imparität & was bilanziert werden darf',
examWeight:'Realisations- vs. Imparitätsprinzip, wertaufhellende Ereignisse, das den tatsächlichen Verhältnissen entsprechende Bild, die drei Kriterien eines Vermögensgegenstands, stille Reserven und Geschäfts- oder Firmenwert — ergänzt Kurskapitel 7',
summary:R`**GoB und das den tatsächlichen Verhältnissen entsprechende Bild (true and fair view).** Der Abschluss folgt den Grundsätzen ordnungsmäßiger Buchführung (GoB, principles of proper bookkeeping, § 243 Abs. 1 HGB). Nicht alle sind aufgeschrieben; starre Regeln würden nicht zu einer sich wandelnden Realität passen. Sie stammen aus dem HGB, der Rechtsprechung (vor allem des Bundesfinanzhofs), der Wissenschaft, dem IDW und der Praxis ehrbarer Kaufleute. Die wichtigsten kodifizierten:
- Bewertung :: Vorsichtsprinzip (prudence principle) mit seinen Ausprägungen Realisationsprinzip, Imparitätsprinzip und Wertaufhellung (§ 252 Abs. 1 Nr. 4 HGB)
- Ansatz :: Vollständigkeit und wirtschaftliche Betrachtungsweise (§ 246 Abs. 1 HGB)

Für Kapitalgesellschaften verlangt § 264 Abs. 2 HGB ein den tatsächlichen Verhältnissen entsprechendes Bild der Vermögens-, Finanz- und Ertragslage; der Gedanke gilt für alle Kaufleute. Vermögen führt zu künftigen Einzahlungen und Schulden zu Auszahlungen, also gibt die Bilanz Hinweise auf die Finanzlage. Ein Finanzplan wäre besser, ist aber intern. Anhang und, bei kapitalmarktorientierten Unternehmen, die Kapitalflussrechnung helfen.

**Konflikt zwischen Vermögens- und Ertragslage.** Eigenes Beispiel: Ein Grundstück, für 500.000 € zum Weiterverkauf gekauft, hat am Jahresende einen Marktwert von 620.000 €.
- Die Vermögenslage richtig zu zeigen hieße 620.000 € und ein Gewinn von 120.000 €
- Es gab aber keinen Verkauf, die Ertragslage richtig zu zeigen heißt also, bei 500.000 € zu bleiben

Das Realisationsprinzip (realisation principle) gibt der richtigen Ertragslage den Vorrang. Das Grundstück bleibt bei seinen Anschaffungskosten (§ 252 Abs. 1 Nr. 4 zweiter Halbsatz, § 253 Abs. 1 HGB).

Jetzt fällt der Marktwert dauerhaft auf 410.000 €. Realisiert ist noch kein Verlust. Das Imparitätsprinzip (imparity principle) durchbricht aber die Realisation: vorhersehbare Verluste müssen vorweggenommen werden. Das Grundstück wird um 90.000 € abgeschrieben. Wird es im nächsten Jahr für 410.000 € verkauft, ist der Verkauf ein reiner Aktivtausch, weil der Verlust schon gebucht ist.

Vorsicht ist der dominierende GoB des deutschen Bilanzrechts. Er hält den Kaufmann davon ab, sein Unternehmen zu optimistisch darzustellen.

**Wertaufhellende vs. wertbeeinflussende Ereignisse.** Die Bilanz zeigt die Lage am Stichtag.
- Wertaufhellend (value-adjusting) :: die Ursache bestand am Abschlussstichtag und wird erst später bekannt; sie muss berücksichtigt werden (§ 252 Abs. 1 Nr. 4 HGB). Beispiel: ein Lager ist am 31.12. abgebrannt, entdeckt im Februar → im alten Jahr abschreiben
- Wertbeeinflussend (value-changing) :: die Ursache entstand nach dem Stichtag; keine Anpassung im alten Jahr, aber Angabe im Anhang (§ 285 Nr. 33). Beispiel: eine Halle wird am 1.1. zerstört

**Die zwei Wertmaßstäbe:**
- Historischer Wert :: Anschaffungs- oder Herstellungskosten, die Obergrenze
- Tageswert am Stichtag :: abgeleitet aus Börsen- oder Marktpreisen, die Untergrenze
- Wenn Tageswert < historischer Wert :: eine außerplanmäßige Abschreibung ist Pflicht, mit wenigen Ausnahmen (§ 253 Abs. 3 Satz 5/6, Abs. 4 HGB)
- Wenn Tageswert > historischer Wert :: der historische Wert bleibt (§ 253 Abs. 1 HGB)

Realisations- und Imparitätsprinzip zusammen machen die Gewinnermittlung vorsichtig. Das in der HGB-Bilanz ausgewiesene Eigenkapital ist eine vorsichtig gemessene Untergrenze des Ertragswerts des Unternehmens.

Anwendungen:
- Langfristiger Fertigungsauftrag (HGB) :: der Gewinn wird erst bei Abnahme des fertigen Werks realisiert (completed contract method); spätere Zahlung spielt keine Rolle, gebucht wird eine Forderung
- Derselbe Auftrag nach IFRS :: Gewinn nach Fertigstellungsgrad (stage of completion), also frühere Gewinne in den ersten Jahren und ein kleinerer am Ende
- Handelsaktien für 40.000 € gekauft, Börsenkurs 52.000 € :: das HGB bleibt bei 40.000 € (Realisation); IFRS zeigen den Gewinn
- Ausschüttungen hängen immer am HGB-Einzelabschluss, deshalb können nach IFRS "fast realisierte" Gewinne nicht ausgeschüttet werden

**Ansatz: Vollständigkeit und Objektivierung.** Der Abschluss muss sämtliche Vermögensgegenstände, Schulden und Rechnungsabgrenzungsposten enthalten, soweit gesetzlich nichts anderes bestimmt ist (§ 246 Abs. 1 Satz 1 HGB). Was nicht greifbar und nachprüfbar ist (eine gute Idee, das Know-how der Mitarbeiter, der Ruf), darf nicht angesetzt werden.

Eigenkapital und Ertragswert können daher weit auseinanderliegen. Die Lücke hat zwei Teile:
- Stille Reserven (hidden reserves) :: Tageswert eines bilanzierten Vermögensgegenstands über seinem Buchwert (z. B. Grundstück 300.000 wert, angesetzt mit 180.000 → 120.000 stille Reserve)
- Originärer Geschäfts- oder Firmenwert (original goodwill) :: Wert des ganzen Unternehmens − bilanzielles Eigenkapital − stille Reserven (Kundenstamm, motivierte Mitarbeiter und Ähnliches)

**Die drei Kriterien eines Vermögensgegenstands (Bundesfinanzhof):**
- Wirtschaftlicher Wert :: er bringt wahrscheinlich künftige Überschüsse
- Greifbarkeit :: er geht nicht im allgemeinen Geschäftswert auf
- Selbständige Bewertbarkeit :: er lässt sich einzeln bewerten

Der steuerliche Begriff "Wirtschaftsgut" ist aus dieser handelsrechtlichen Definition abgeleitet.

**Wahlrecht für selbst geschaffene immaterielle Vermögensgegenstände (§ 248 Abs. 2 HGB).** Selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens (z. B. selbst entwickelte, intern genutzte Software, Patente) dürfen aktiviert werden. Ihr künftiger Wert ist besonders unsicher, und es gibt keinen Marktpreis, der ihn bestätigt.
- Dieselbe Software im Umlaufvermögen (zum Verkauf) :: muss aktiviert werden; der Markt zeigt schnell, ob sie ihre Kosten deckt, sonst wird sie abgeschrieben
- Im Anlagevermögen :: hohes Risiko der Überbewertung, daher nur ein Wahlrecht; mit Ausschüttungssperre (§ 268 Abs. 8 HGB) und den Bewertungsregeln des § 255 Abs. 2a; ein Zugeständnis an IFRS, wo die Aktivierung Pflicht ist
- Gekaufte Software :: immer zu Anschaffungskosten aktiviert

**Derivativer Geschäfts- oder Firmenwert (acquired goodwill).** Ein Käufer zahlt für ein Unternehmen mehr als den Marktwert der einzelnen Vermögensgegenstände abzüglich Schulden. Eigenes Beispiel: Kaufpreis 900.000 €, Vermögen zu Marktwerten 700.000 €, Schulden 100.000 € → Geschäftswert 300.000 €. Seit dem BilMoG von 2009 gilt der entgeltlich erworbene Geschäftswert per gesetzlicher Fiktion als Vermögensgegenstand (§ 246 Abs. 1 Satz 4 HGB) und muss aktiviert werden. Das Wahlrecht des § 248 Abs. 2 greift nicht, weil es nur selbst geschaffene immaterielle Werte betrifft. Der originäre (selbst geschaffene) Geschäftswert wird nie angesetzt.`,
cards:[
{q:R`Realisationsprinzip vs. Imparitätsprinzip`, a:R`Realisation (realisation principle): Gewinne erst, wenn sie durch Verkauf realisiert sind. Imparität (imparity principle): vorhersehbare, unrealisierte Verluste müssen vorweggenommen werden. Zusammen: Vorsicht (prudence, § 252 I Nr. 4).`},
{q:R`Wertaufhellendes vs. wertbeeinflussendes Ereignis`, a:R`Wertaufhellend (value-adjusting): Ursache bestand am Stichtag, später bekannt → berücksichtigen. Wertbeeinflussend (value-changing): Ursache nach dem Stichtag → keine Anpassung, Angabe im Anhang.`},
{q:R`Drei Kriterien eines Vermögensgegenstands`, a:R`Wirtschaftlicher Wert (künftige Überschüsse), Greifbarkeit (geht nicht im Geschäftsbetrieb auf), selbständige Bewertbarkeit.`},
{q:R`Lücke zwischen Eigenkapital und Ertragswert`, a:R`Stille Reserven (hidden reserves: Tageswert > Buchwert) + originärer Geschäftswert (Unternehmenswert − Eigenkapital − stille Reserven).`},
{q:R`Derivativer vs. originärer Geschäftswert (goodwill)`, a:R`Derivativ (entgeltlich erworben): Vermögensgegenstand per Fiktion, muss aktiviert werden (§ 246 I S. 4). Originär (selbst geschaffen): wird nie angesetzt.`}
],
quiz:[
{q:R`Ein Grundstück, für 500.000 € gekauft, ist am Jahresende 620.000 € wert. Bilanzwert nach HGB?`, opts:[R`500.000 € — Realisationsprinzip`,R`620.000 € — tatsächliche Verhältnisse`,R`560.000 € — der Durchschnitt beider`,R`Wahl zwischen beiden Werten`], correct:0, exp:R`Die Anschaffungskosten sind die Obergrenze; unrealisierte Gewinne dürfen nicht gezeigt werden (§ 253 Abs. 1, § 252 Abs. 1 Nr. 4 HGB).`},
{q:R`Dasselbe Grundstück fällt dauerhaft auf 410.000 €. Was folgt?`, opts:[R`Jetzt auf 410.000 € abschreiben`,R`Keine Buchung bis zum tatsächlichen Verkauf`,R`Eine Rückstellung über 90.000 € für den Verlust`,R`Eine Angabe im Anhang, keine Buchung`], correct:0, exp:R`Vorhersehbare Verluste müssen vorweggenommen werden (Imparitätsprinzip); der spätere Verkauf zu 410.000 € ist dann ein reiner Aktivtausch.`},
{q:R`Ein Lager ist am 31.12. abgebrannt; das Unternehmen erfährt es im Februar bei der Abschlusserstellung. Behandlung?`, opts:[R`Im alten Jahr abschreiben`,R`Keine Wirkung; am 31.12. war es unbekannt`,R`Nur Anhangangabe, da später entdeckt`,R`Abschreibung im neuen Jahr bei Entdeckung`], correct:0, exp:R`Die Ursache bestand am Abschlussstichtag; spätere Kenntnis muss berücksichtigt werden (wertaufhellendes Ereignis).`},
{q:R`Eine Fabrikhalle wird am 2. Januar zerstört. Behandlung im Abschluss des alten Jahres?`, opts:[R`Keine Abschreibung, aber Angabe im Anhang`,R`Abschreibung auf null im alten Jahr`,R`Eine Rückstellung für den erwarteten Verlust`,R`Gar nichts, nicht einmal eine Anhangangabe`], correct:0, exp:R`Wertbeeinflussendes Ereignis: Es geschah nach dem Stichtag, also keine Anpassung; § 285 Nr. 33 HGB verlangt eine Angabe im Anhang.`},
{q:R`Wann wird nach HGB der Gewinn eines fünfjährigen schlüsselfertigen Bauauftrags realisiert?`, opts:[R`Bei Abnahme des fertigen Werks`,R`Jahr für Jahr nach dem Fertigstellungsgrad`,R`Wenn der Kunde die Rechnung endgültig bezahlt`,R`Bei Unterzeichnung des Vertrags`], correct:0, exp:R`Completed contract method aus dem Realisationsprinzip; IFRS verwenden stattdessen den Fertigstellungsgrad.`},
{q:R`Selbst entwickelte Software zur internen Nutzung. Ansatz nach HGB?`, opts:[R`Aktivierungswahlrecht (§ 248 Abs. 2)`,R`Aktivierungspflicht wie bei gekaufter Software`,R`Verboten, immer Aufwand`,R`Aktiviert erst nach einer Prüfung`], correct:0, exp:R`Selbst geschaffene immaterielle Anlagegüter: Wahlrecht, mit Ausschüttungssperre. Gekaufte Software muss aktiviert werden; dieselbe Software zum Verkauf ebenfalls.`},
{q:R`Ein Käufer zahlt 900.000 € für ein Unternehmen, dessen Vermögen zu Marktwerten abzüglich Schulden 600.000 € beträgt. Behandlung der 300.000 €?`, opts:[R`Als derivativen Geschäftswert aktivieren`,R`Darf nach § 248 Abs. 2 aktiviert werden`,R`Sofort Aufwand, da kein Vermögensgegenstand`,R`Als stille Reserve im Eigenkapital zeigen`], correct:0, exp:R`Der entgeltlich erworbene Geschäftswert (acquired goodwill) gilt per Fiktion als Vermögensgegenstand (§ 246 Abs. 1 Satz 4 HGB); das Wahlrecht des § 248 betrifft nur selbst geschaffene immaterielle Werte.`},
{q:R`Was gehört NICHT zu den drei Kriterien eines Vermögensgegenstands?`, opts:[R`Er ist vollständig bezahlt`,R`Er bringt künftige Überschüsse`,R`Er ist als Einzelnes greifbar`,R`Er lässt sich einzeln bewerten`], correct:0, exp:R`Die Bezahlung ist egal (auch ein auf Ziel gekaufter Gegenstand ist ein Vermögensgegenstand). Die Kriterien: wirtschaftlicher Wert, Greifbarkeit, selbständige Bewertbarkeit.`}
]},

{id:'bk-rw-7', ch:'T7', lessons:'Lektion 7', course:['bk-6','bk-8','bk-9'], title:'Anschaffungskosten, Umsatzsteuer, Preisnachlässe & Warenkonten',
examWeight:'Das Schema des § 255 Abs. 1 HGB, das Umsatzsteuersystem und seine Abschlussbuchungen, Rabatt vs. Skonto vs. Bonus, gemischtes und getrennte Warenkonten, Rücksendungen — ergänzt Kurskapitel 6, 8 und 9',
summary:R`**Anschaffungskosten (acquisition cost, § 255 Abs. 1 HGB)** sind der Ausgangswert für gekaufte Vermögensgegenstände und die absolute Wertobergrenze (§ 253 Abs. 1). Dazu gehört, was aufgewendet wird, um einen Vermögensgegenstand zu erwerben und in einen betriebsbereiten Zustand zu versetzen, soweit es ihm einzeln zugeordnet werden kann.
- Anschaffungspreis (normalerweise netto ohne Umsatzsteuer)
- + Anschaffungsnebenkosten
- + nachträgliche Anschaffungskosten
- ./. Anschaffungspreisminderungen, die dem Gegenstand zugeordnet werden können
- = Anschaffungskosten

Das Gesetz sagt "Aufwendungen", meint aber Ausgaben.

**Anschaffungspreis und Umsatzsteuer.** Der Anschaffungspreis ist der Nettopreis. Für ein vorsteuerabzugsberechtigtes Unternehmen ist die Umsatzsteuer ein durchlaufender Posten, also kein Teil der Anschaffungskosten.
- Netto aus brutto :: brutto ÷ 1,19 (bzw. ÷ 1,07 beim ermäßigten Satz)
- Alternativ :: brutto × 100 ÷ 119
- Umsatzsteuer in einem Bruttobetrag :: brutto × 19 ÷ 119
- Eigenes Beispiel :: 4.760 € brutto → 4.000 € netto und 760 € USt

NICHT 19 % vom Bruttobetrag nehmen; das ist der klassische Fehler.

**Das Umsatzsteuersystem** ist eine Allphasen-Netto-Umsatzsteuer mit Vorsteuerabzug. Jedes Unternehmen in der Kette ist beteiligt, zahlt aber nur auf seine eigene Wertschöpfung. Die Last trägt der Endverbraucher, es ist also eine indirekte Steuer. Regelsatz 19 %, ermäßigt 7 % (z. B. Blumen, Milchprodukte, Bücher). Manche Umsätze sind steuerfrei, z. B. Wohnungsvermietung, Kreditgewährung und Versicherungen (§ 4 UStG). Bei Vermietung an andere Unternehmer kann der Vermieter zur Umsatzsteuer optieren (§ 9 UStG).
- Vorsteuer (input tax) :: an Lieferanten gezahlte Umsatzsteuer; eine Forderung gegenüber dem Finanzamt; Aktivkonto, Buchung im Soll
- Umsatzsteuer (output VAT) :: den Kunden berechnete Umsatzsteuer; eine Verbindlichkeit gegenüber dem Finanzamt; Passivkonto, Buchung im Haben
- Zahllast (VAT payable) :: Umsatzsteuer ./. Vorsteuer

Eigene Kette: Ein Hersteller verkauft für 200 + 38 USt, ein Großhändler für 300 + 57, ein Einzelhändler an einen Verbraucher für 400 + 76. Sie zahlen 38, 19 und 19 ans Finanzamt. Der Verbraucher trägt die vollen 76.

Weitere Punkte:
- Vorsteuer ist auf alles abziehbar, was für steuerpflichtige Umsätze gekauft wird, auch indirekt (z. B. Reinigungsmittel eines Beraters)
- Ein Vorsteuerüberhang wird vom Finanzamt erstattet (häufig bei großen Investitionen, Produktion auf Lager oder Verlustphasen)
- Wer nur steuerfreie Umsätze macht (Vermietung, Versicherung, Kredite), bekommt keinen Vorsteuerabzug; deshalb kann ein Vermieter bei Vermietung an Unternehmer optieren, z. B. um die Vorsteuer auf eine Renovierung abzuziehen
- Umsatzsteuer und Vorsteuer werden gebucht, wenn die Leistung erbracht ist, nicht wenn bezahlt wird

Abschluss am Ende des Voranmeldungszeitraums (Monat oder Quartal):
- Zuerst verrechnen :: Umsatzsteuer an Vorsteuer (der kleinere Saldo wird in den größeren abgeschlossen)
- Umsatzsteuer größer :: Umsatzsteuer an SBK (Zahllast, eine Verbindlichkeit)
- Vorsteuer größer :: SBK an Vorsteuer (Erstattungsanspruch)

**Anschaffungsnebenkosten (incidental acquisition costs).** Ausgaben, um den Gegenstand in die Verfügungsgewalt des Unternehmens zu bringen und betriebsbereit zu machen, werden zu seinen Anschaffungskosten addiert, aber nur, wenn sie direkt zurechenbar sind, ohne Schätzung oder Schlüssel.
- Grundstücke :: Grunderwerbsteuer, Notar- und Grundbuchgebühren, Vermessungsgebühren
- Bewegliche Gegenstände :: Verpackung, Fracht, Abladen, Transportversicherung
- Interne Kosten :: Montage, Fundamente, Aufstellung
- Gemeinkosten :: nie Teil der Anschaffungskosten; sie sind sofort Aufwand (z. B. Waren mit dem eigenen LKW abholen: Treibstoff und Fahrerlohn lassen sich nur schätzen)
- Finanzierungskosten :: Zinsen auf einen Kredit für den Kauf sind keine Anschaffungskosten, sondern laufender Aufwand; Investition und Finanzierung werden getrennt

Eigenes Beispiel: ein Transporter, Listenpreis 40.000 € + Überführung 900 € + Zulassung 300 € = 41.200 € netto. Buchung bei Barzahlung: Fuhrpark 41.200 und Vorsteuer 7.828 an Kasse 49.028.

**Nachträgliche Anschaffungskosten (subsequent acquisition costs)** entstehen, nachdem der Gegenstand betriebsbereit ist, in engem Zusammenhang mit dem Kauf. Beispiele: spätere Erschließungs- oder Kanalanschlussbeiträge für ein Grundstück oder ein später eingebautes Navigationsgerät in einem Fahrzeug.

**Anschaffungspreisminderungen (price reductions)** sind abzuziehen, wenn sie dem Gegenstand zugeordnet werden können (§ 255 Abs. 1 Satz 3 HGB):
- Rabatt (rebate) :: steht bei Vertragsschluss fest (Mengen-, Treue-, Wiederverkäufer-, Personalrabatt) → von Anfang an netto gebucht
- Skonto (cash discount) :: bei Lieferung unsicher, hängt von der Zahlung innerhalb einer Frist ab → zuerst den vollen Preis buchen, bei Zahlung korrigieren
- Bonus (bonus) :: unsicher, hängt vom Gesamtvolumen späterer Bestellungen ab → bei Gewährung auf Unterkonten gebucht, am Jahresende ins Wareneinkaufs- bzw. Warenverkaufskonto abgeschlossen; ein umsatzabhängiger Bonus lässt sich meist nicht einzelnen Gegenständen zuordnen

Eigenes Skonto-Beispiel: Waren 5.000 € + 950 € USt auf Ziel, 2 % Skonto innerhalb von 10 Tagen.
- Käufer bei Lieferung :: Waren 5.000 und Vorsteuer 950 an Verbindlichkeiten aus L. u. L. 5.950
- Käufer zahlt mit Skonto :: Verbindlichkeiten 5.950 an Bank 5.831, Vorsteuer 19 und Lieferantenskonti 100
- Verkäufer bei Lieferung :: Forderungen 5.950 an Umsatzerlöse 5.000 und Umsatzsteuer 950
- Verkäufer erhält Zahlung :: Bank 5.831, Kundenskonti 100 und Umsatzsteuer 19 an Forderungen 5.950

Die abgezogenen 119 teilen sich in netto (119 ÷ 1,19 = 100) und die USt-Korrektur (19). Lieferantenskonti (discounts received) mindern die Anschaffungskosten und werden ins Wareneinkaufskonto abgeschlossen, nicht in die GuV. Kundenskonti (discounts granted) mindern die Umsätze und werden ins Warenverkaufskonto abgeschlossen.

**Warenkonten (merchandise accounts).** Anfangsbestand und Einkäufe werden zu Anschaffungskosten bewertet, Verkäufe zu Verkaufspreisen. Dieselbe Menge trägt also zwei verschiedene Werte.

Das gemischte Warenkonto nimmt alles in einem Konto auf: Anfangsbestand und Einkäufe zu Einstandspreisen im Soll; Verkäufe zu Verkaufspreisen und der gezählte Schlussbestand zu Einstandspreisen im Haben. Der Saldo im Soll ist der Warenrohgewinn (gross profit). Das Konto ist teils Bestands-, teils Erfolgskonto.

Getrennte Konten vermeiden das:
- Wareneinkaufskonto (purchase account, Bestandskonto) :: Anfangsbestand + Einkäufe zu Einstandspreisen im Soll, Schlussbestand laut Inventur im Haben; der Saldo ist der Wareneinsatz (cost of goods sold), der Aufwand für das Verkaufte
- Warenverkaufskonto (sales account, Erfolgskonto) :: Verkäufe zu Verkaufspreisen im Haben

Eigenes Beispiel: Anfangsbestand 3.000, Einkäufe 5.000, Verkäufe 11.000, Schlussbestand 2.000 → Wareneinsatz 6.000, Rohgewinn 5.000.
- Bruttomethode (gross method) :: SBK an Wareneinkauf 2.000; GuV an Wareneinkauf 6.000; Warenverkauf an GuV 11.000. Die GuV zeigt Umsatz und Wareneinsatz nebeneinander
- Nettomethode (net method) :: SBK an Wareneinkauf 2.000; Warenverkauf an Wareneinkauf 6.000; Warenverkauf an GuV 5.000. Die GuV zeigt nur den Rohgewinn

Die Bruttomethode informiert besser, intern wie extern. Unternehmen können für interne Analysen auch mehrere Einkaufs- und Verkaufskonten führen (nach Produkt, Kunde oder Region).

**Rücksendungen (returns):**
- Rücksendung an den Lieferanten (unbezahlt) :: den Einkauf stornieren: Verbindlichkeiten an Wareneinkauf und Vorsteuer
- Rücksendung vom Kunden (unbezahlt) :: den Verkauf korrigieren, keinen Einkauf: Warenverkauf und Umsatzsteuer an Forderungen

**Buch vs. Kurs:** Das Buch sagt, nur große Kapitalgesellschaften müssten die Bruttomethode verwenden (§§ 275, 276 HGB). Cloers Handout ist strenger, und ihm ist zu folgen. Das Saldierungsverbot des § 246 Abs. 2 schließt einen Nettoausweis im HGB-Abschluss aus, während kleine und mittelgroße Kapitalgesellschaften nach § 276 nur Posten zum "Rohergebnis" zusammenfassen dürfen. Das ist eine Ausweiserleichterung, nicht die Nettomethode aus dem Lehrbuch. Die Bezeichnung ist in beiden gleich: brutto und netto beschreiben, wie die Konten abgeschlossen werden, nicht Beträge mit oder ohne Umsatzsteuer.`,
cards:[
{q:R`Schema der Anschaffungskosten (§ 255 I HGB)`, a:R`Anschaffungspreis (netto) + Nebenkosten + nachträgliche Kosten − zurechenbare Preisminderungen = Anschaffungskosten (acquisition cost).`},
{q:R`Nettobetrag und USt aus einem Bruttobetrag (19 %)`, a:R`Netto = brutto ÷ 1,19; USt = brutto × 19 ÷ 119. Nie 19 % vom Bruttobetrag.`},
{q:R`Abschluss der Umsatzsteuerkonten`, a:R`Umsatzsteuer an Vorsteuer; dann Umsatzsteuer an SBK (Zahllast) oder SBK an Vorsteuer (Erstattung).`},
{q:R`Rabatt vs. Skonto vs. Bonus`, a:R`Rabatt (rebate): steht bei Vertragsschluss fest → von Anfang an netto. Skonto (cash discount): hängt von früher Zahlung ab → bei Zahlung korrigiert. Bonus: hängt vom Volumen ab → bei Gewährung gebucht, ins Einkaufs-/Verkaufskonto abgeschlossen.`},
{q:R`Abschlussbuchungen Brutto- vs. Nettomethode`, a:R`Brutto (gross method): GuV an Wareneinkauf (Wareneinsatz), Warenverkauf an GuV. Netto (net method): Warenverkauf an Wareneinkauf (Wareneinsatz), Warenverkauf an GuV (nur Rohgewinn).`}
],
quiz:[
{q:R`Eine Rechnung lautet über 5.950 € inklusive 19 % USt. Wie hoch ist der Nettobetrag?`, opts:[R`5.000 €`,R`4.819,50 €`,R`5.130,50 €`,R`4.950 €`], correct:0, exp:R`5.950 ÷ 1,19 = 5.000. 19 % vom Bruttobetrag (1.130,50) zu nehmen ist der klassische Fehler.`},
{q:R`Welcher Posten gehört NICHT zu den Anschaffungskosten einer Maschine?`, opts:[R`Zinsen auf den Kredit, mit dem sie bezahlt wird`,R`Fracht, um die Maschine ins Werk zu bringen`,R`Kosten des Fundaments, auf dem sie steht`,R`Transportversicherung für die Lieferung`], correct:0, exp:R`Finanzierungskosten sind laufender Aufwand; Investition und Finanzierung werden getrennt. Fracht, Fundament und Versicherung sind direkt zurechenbare Nebenkosten.`},
{q:R`Ein Unternehmen holt Waren mit dem eigenen LKW ab. Wie werden Treibstoff und Fahrerlohn behandelt?`, opts:[R`Sofort als Aufwand`,R`Als Nebenkosten zu den Waren addiert`,R`Als nachträgliche Anschaffungskosten`,R`Vom Kaufpreis abgezogen`], correct:0, exp:R`Sie lassen sich nur schätzen oder schlüsseln (Gemeinkosten), sind also nicht direkt zurechenbar und sofort Aufwand.`},
{q:R`Welche Preisminderung wird von Anfang an netto gebucht?`, opts:[R`Ein im Vertrag vereinbarter Mengenrabatt`,R`2 % Skonto für Zahlung innerhalb von zehn Tagen`,R`Ein Jahresbonus auf den Gesamteinkauf`,R`Eine Rücksendung mangelhafter Ware an den Lieferanten`], correct:0, exp:R`Ein Rabatt steht bei Vertragsschluss fest. Skonti und Boni sind unsicher und werden erst gebucht, wenn sie eintreten.`},
{q:R`Umsatzsteuer 8.000 €, Vorsteuer 9.500 € am Ende des Voranmeldungszeitraums. Ergebnis?`, opts:[R`Ein Erstattungsanspruch von 1.500 €`,R`Eine Zahllast von 1.500 € ans Finanzamt`,R`17.500 € Zahllast ans Finanzamt`,R`Nichts, verrechnet wird nur einmal jährlich`], correct:0, exp:R`Umsatzsteuer an Vorsteuer 8.000; die restliche Vorsteuer von 1.500 ist eine Forderung: SBK an Vorsteuer 1.500.`},
{q:R`Wohin geht bei der Nettomethode der Wareneinsatz?`, opts:[R`Ins Soll des Warenverkaufskontos`,R`Ins Soll des GuV-Kontos`,R`Ins Haben des SBK`,R`Ins Haben des Warenverkaufskontos`], correct:0, exp:R`Warenverkauf an Wareneinkauf (Wareneinsatz); nur der verbleibende Rohgewinn geht in die GuV.`},
{q:R`Ein Kunde schickt unbezahlte Ware über 1.000 € netto (19 % USt) zurück. Der Verkäufer bucht…`, opts:[R`Warenverkauf 1.000 und USt 190 an Forderungen 1.190`,R`Wareneinkauf 1.000 und USt 190 an Forderungen 1.190`,R`Forderungen 1.190 an Warenverkauf 1.000 und USt 190`,R`Warenverkauf 1.190 an Forderungen 1.190`], correct:0, exp:R`Eine Kundenrücksendung korrigiert den Verkauf (und die Umsatzsteuer); für den Verkäufer ist sie kein Einkauf.`},
{q:R`Ein Großhändler kauft für 300 + 57 USt und verkauft für 420 + 79,80 USt. Was zahlt er ans Finanzamt?`, opts:[R`22,80 €`,R`79,80 €`,R`57,00 €`,R`136,80 €`], correct:0, exp:R`Umsatzsteuer 79,80 − Vorsteuer 57,00 = 22,80; der Großhändler zahlt nur auf seine Wertschöpfung von 120.`}
]},

{id:'bk-rw-8', ch:'T8', lessons:'Lektion 8', course:['bk-10'], title:'Herstellungskosten & Buchung von Erzeugnissen (Gesamtkosten- vs. Umsatzkostenverfahren)',
examWeight:'Pflicht-, Wahl- und Verbotsbestandteile des § 255 Abs. 2 HGB, Wertunter- und -obergrenze und die Buchung ein- und zweistufiger Fertigung nach beiden GuV-Verfahren — ergänzt Kurskapitel 10',
summary:R`**Herstellungskosten (production cost, § 255 Abs. 2 HGB)** sind der Wert für alles, was ein Unternehmen selbst herstellt und am Abschlussstichtag noch hat: selbst erstellte Gebäude, Maschinen und Fahrzeuge zur eigenen Nutzung sowie unfertige und fertige Erzeugnisse. Dazu gehört, was für die Herstellung eines Vermögensgegenstands, seine Erweiterung oder seine wesentliche Verbesserung über den ursprünglichen Zustand hinaus aufgewendet wird. Auch hier sagt das Gesetz "Aufwendungen", meint aber Ausgaben.

Die Bestandteile:
- Materialeinzelkosten :: Pflicht (verbrauchte Roh- und Hilfsstoffe, Zukaufteile)
- Fertigungseinzelkosten :: Pflicht (Fertigungslöhne inkl. Arbeitgeberanteil zur Sozialversicherung, Urlaubs- und Weihnachtsgeld)
- Sondereinzelkosten der Fertigung :: Pflicht (Modelle, Schablonen, Spezialwerkzeuge, Lizenzgebühren)
- Materialgemeinkosten :: Pflicht (Einkauf, Lagerung, Prüfung, innerbetrieblicher Materialtransport)
- Fertigungsgemeinkosten :: Pflicht (Energie, Instandhaltung der Anlagen, Arbeitsvorbereitung, Meistergehälter)
- Abschreibungen auf Fertigungsanlagen :: Pflicht, aber nur planmäßige Abschreibungen für den Herstellungszeitraum; außerplanmäßige nie
- Allgemeine Verwaltung :: Wahlrecht (Geschäftsleitung, Finanzen, Controlling, Personal, IT, Telefonzentrale, Werkschutz)
- Soziale Einrichtungen, freiwillige soziale Leistungen, betriebliche Altersversorgung :: Wahlrecht (Kantine, Kindergarten, Jubiläumsgeschenke, Pensionszuführungen)
- Vertriebskosten :: Verbot, auch wenn direkt zurechenbar (z. B. eine Verkaufsprovision, Spezialaußenverpackung, Kreditversicherung) — um etwas herzustellen, muss man es nicht verkaufen
- Forschungskosten :: Verbot

Einzelkosten lassen sich dem einzelnen Produkt zuordnen. Gemeinkosten entstehen durch mehrere Produkte und lassen sich nur mit Zuschlagssätzen aus der Kostenrechnung verteilen.

Fremdkapitalzinsen sind keine Herstellungskosten (§ 255 Abs. 3 Satz 1), genau wie bei den Anschaffungskosten. Ausnahme: Sie dürfen einbezogen werden, wenn der Kredit die Herstellung dieses Gegenstands finanziert und die Zinsen auf den Herstellungszeitraum entfallen (Satz 2).

Eigenes Beispiel, eine von eigenen Mitarbeitern gebaute Werkstatt:
- Materialeinzelkosten 40.000 + Materialgemeinkosten 15 % = 6.000
- Fertigungseinzelkosten 25.000 + Fertigungsgemeinkosten 80 % = 20.000
- Abschreibung der eingesetzten Maschinen 4.000 + Sondereinzelkosten 3.000
- **Wertuntergrenze (Pflichtbestandteile) = 98.000 €**
- + allgemeine Verwaltung 7.000 → **Wertobergrenze = 105.000 €**

**Warum Erzeugnisse bewertet werden müssen.** Eigenes Beispiel: Ein Unternehmen stellt 200 Tische zu je 80 € her, verkauft 150 zu 150 € in diesem Jahr und 50 im nächsten. Bucht es die gesamten Herstellungsausgaben von 16.000 als Aufwand dieses Jahres, zeigt Jahr 1 22.500 − 16.000 = 6.500 und Jahr 2 7.500 − 0 = 7.500. Beides ist falsch. Ordnet man die Kosten den Verkäufen zu, ergibt sich Jahr 1: 22.500 − 12.000 = 10.500 und Jahr 2: 7.500 − 4.000 = 3.500, genau wie es ein Händler zeigen würde. Selbst hergestellte Bestände werden zu Herstellungskosten angesetzt.

**Gesamtkostenverfahren (GKV, total cost method, § 275 Abs. 2 HGB)** zeigt alle Herstellungsaufwendungen der Periode nach Arten (Material, Personal, Abschreibungen), egal ob die Produkte verkauft wurden. Deshalb müssen die Erträge an die produzierte Menge angepasst werden:
- Produziert = verkauft :: keine Bestandsveränderung
- Produziert > verkauft :: Bestandserhöhung an Fertigerzeugnissen → Fertigerzeugnisse an Bestandsveränderungen (Haben, wirkt wie ein Ertrag)
- Produziert < verkauft :: Bestandsminderung → Bestandsveränderungen an Fertigerzeugnisse (Soll, wirkt wie ein Aufwand)

Das Konto "Bestandsveränderungen" (change in inventory) wird in die GuV abgeschlossen. Eine Erhöhung neutralisiert den Aufwand für noch nicht verkaufte Güter. Eine Minderung spielt die Rolle, die beim Händler der Wareneinsatz spielt.

**Umsatzkostenverfahren (UKV, cost of sales method, § 275 Abs. 3 HGB)**, international verbreitet, zeigt nur die Herstellungskosten des Verkauften. Produktion auf Lager ist erfolgsneutral: Fertigerzeugnisse an Rohstoffe, Bank usw. (Aktivtausch). Bei Lieferung bucht das Unternehmen Umsatzerlöse und als Aufwand die Herstellungskosten der abgehenden Güter: Herstellungskosten (Aufwand) an Fertigerzeugnisse.

Beide Verfahren ergeben immer denselben Jahresüberschuss. Das GKV bucht jeden Herstellungsaufwand und braucht die Bestandsveränderung als Korrektur. Das UKV nimmt den einfacheren Weg und bucht nur die Kosten des Verkauften.

**Zweistufige Fertigung.** Aus Material werden zuerst unfertige Erzeugnisse (work in progress), dann fertige Erzeugnisse. Eigenes Beispiel: Jahr 1 Material 6.000 + Löhne 9.000 → unfertige Erzeugnisse 15.000; Jahr 2 Weiterverarbeitung mit Material 3.000 + Löhnen 2.000 → Fertigerzeugnisse 20.000; Jahr 3 Verkauf für 26.000 netto.
- UKV :: Jahr 1 Unfertige Erzeugnisse 15.000 an Material 6.000 und Bank 9.000; Jahr 2 Fertigerzeugnisse 20.000 an Material 3.000, Bank 2.000 und Unfertige Erzeugnisse 15.000; Jahr 3 Bank an Umsatzerlöse und USt, Herstellungskosten 20.000 an Fertigerzeugnisse 20.000
- GKV :: jedes Jahr Material- und Lohnaufwand buchen; Jahr 1 Unfertige Erzeugnisse 15.000 an Bestandsveränderungen (Erhöhung); Jahr 2 Bestandsveränderungen (Minderung UE) 15.000 an Unfertige Erzeugnisse und Fertigerzeugnisse 20.000 an Bestandsveränderungen (Erhöhung); Jahr 3 Verkauf plus Bestandsveränderungen (Minderung) 20.000 an Fertigerzeugnisse
- In beiden entsteht der Gewinn von 6.000 erst in Jahr 3

**Buch vs. Kurs:** Das Buch bestätigt die Lehrbuchbezeichnung: § 275 Abs. 2 = Gesamtkostenverfahren (GKV, nach Aufwandsarten), § 275 Abs. 3 = Umsatzkostenverfahren (UKV, nach Funktionen). Prof. Cloers Folie in Kapitel 10 bezeichnet die beiden Absätze genau umgekehrt. Das ist auch in Kurskapitel 10 markiert.`,
cards:[
{q:R`Pflichtbestandteile der Herstellungskosten`, a:R`Materialeinzelkosten, Fertigungseinzelkosten, Sondereinzelkosten der Fertigung, Materialgemeinkosten, Fertigungsgemeinkosten, planmäßige Abschreibung der Fertigungsanlagen.`},
{q:R`Wahl- und Verbotsbestandteile`, a:R`Wahlrecht: allgemeine Verwaltung, soziale Einrichtungen, freiwillige Leistungen, betriebliche Altersversorgung (und Zinsen nach § 255 III S. 2). Verbot: Vertriebskosten, Forschung.`},
{q:R`GKV vs. UKV in je einem Satz`, a:R`GKV (total cost method): alle Herstellungsaufwendungen nach Arten + Bestandsveränderung als Korrektur. UKV (cost of sales method): nur die Herstellungskosten des Verkauften. Gleicher Jahresüberschuss.`},
{q:R`Buchung einer Bestandserhöhung an Fertigerzeugnissen im GKV`, a:R`Fertigerzeugnisse an Bestandsveränderungen; das Konto Bestandsveränderungen wird in die GuV abgeschlossen (Haben).`}
],
quiz:[
{q:R`Welcher Bestandteil darf NICHT in die Herstellungskosten?`, opts:[R`Eine Verkaufsprovision`,R`Materialgemeinkosten für die Lagerung`,R`Planmäßige Abschreibung der Maschinen`,R`Allgemeine Verwaltungskosten`], correct:0, exp:R`Vertriebskosten sind verboten (§ 255 Abs. 2 Satz 4), auch wenn direkt zurechenbar. Verwaltung ist Wahlrecht; Materialgemeinkosten und Abschreibung sind Pflicht.`},
{q:R`Allgemeine Verwaltungskosten in den Herstellungskosten sind…`, opts:[R`ein Wahlrecht, das die Obergrenze erhöht`,R`Pflicht, Teil der Wertuntergrenze`,R`verboten, wie Vertriebskosten`,R`nur nach IFRS erlaubt`], correct:0, exp:R`Sie sind ein Wahlrecht (§ 255 Abs. 2 Satz 3); Untergrenze = Pflichtbestandteile, Obergrenze = Pflicht- + Wahlbestandteile.`},
{q:R`Materialeinzelkosten 10.000, MGK 20 %, Fertigungslöhne 6.000, FGK 50 %, Abschreibung 1.000. Wertuntergrenze?`, opts:[R`22.000 €`,R`17.000 €`,R`20.000 €`,R`25.000 €`], correct:0, exp:R`10.000 + 2.000 + 6.000 + 3.000 + 1.000 = 22.000.`},
{q:R`Beim Gesamtkostenverfahren produziert ein Unternehmen mehr, als es verkauft. Buchung am Jahresende?`, opts:[R`Fertigerzeugnisse an Bestandsveränderungen`,R`Bestandsveränderungen an Fertigerzeugnisse`,R`Herstellungskosten an Fertigerzeugnisse`,R`Fertigerzeugnisse an Umsatzerlöse`], correct:0, exp:R`Eine Bestandserhöhung steht im Haben der Bestandsveränderungen und neutralisiert den Aufwand für unverkaufte Güter.`},
{q:R`Wie wird beim Umsatzkostenverfahren die Produktion auf Lager gebucht?`, opts:[R`Erfolgsneutraler Aktivtausch`,R`Als Aufwand, korrigiert über Bestandsveränderung`,R`Als Umsatzerlös zu erwarteten Preisen`,R`Gar nicht, bis die Güter verkauft sind`], correct:0, exp:R`Das UKV bucht die Herstellung als Aktivtausch; Aufwand entsteht erst beim Verkauf (Herstellungskosten an Fertigerzeugnisse).`},
{q:R`Welche Aussage zu GKV und UKV stimmt?`, opts:[R`Beide ergeben immer denselben Jahresüberschuss`,R`Das UKV zeigt bei Lageraufbau mehr Gewinn`,R`Das GKV ignoriert die Bestandsveränderung`,R`Nur das GKV ist für Kapitalgesellschaften erlaubt`], correct:0, exp:R`Nur der Weg unterscheidet sich: Das GKV korrigiert über die Bestandsveränderung, das UKV bucht nur die Herstellungskosten des Verkauften.`},
{q:R`Dürfen Zinsen auf einen Kredit, der eine selbst gebaute Maschine finanziert, in deren Herstellungskosten?`, opts:[R`Ja, wenn sie auf den Herstellungszeitraum entfallen`,R`Nein, Zinsen sind immer Aufwand`,R`Ja, aber nur für die gesamte Restlaufzeit des Kredits`,R`Nur beim Umsatzkostenverfahren`], correct:0, exp:R`§ 255 Abs. 3: Zinsen sind grundsätzlich keine Herstellungskosten, dürfen aber für den Herstellungszeitraum einbezogen werden, wenn der Kredit diesen Gegenstand finanziert.`}
]},

{id:'bk-rw-9', ch:'T9', lessons:'Lektionen 9–10', course:['bk-11'], title:'Abschreibungen, außerplanmäßige Abschreibungen & Bewertung von Forderungen',
examWeight:'Abschreibungsplan, fünf Methoden mit Formeln, Niederstwertprinzip für Anlage- und Umlaufvermögen und die Bewertung von Forderungen aus L. u. L. (zweifelhaft, uneinbringlich, Pauschalwertberichtigung) — ergänzt Kurskapitel 11',
summary:R`**Warum Abschreibungen (depreciation).** Beim Kauf eines Vermögensgegenstands entsteht die Ausgabe sofort (Zahlung jetzt oder eine Verbindlichkeit entsteht). Wäre er Umlaufvermögen, entstünde der Aufwand beim Verkauf. Anlagevermögen wird aber genutzt, nicht verkauft. Ohne Abschreibung würde der Aufwand nie erscheinen.
- Nicht abnutzbares Anlagevermögen :: unbegrenzte Nutzung, z. B. unbebaute Grundstücke, Beteiligungen, Kunstwerke
- Abnutzbares Anlagevermögen :: begrenzte Nutzung, z. B. Gebäude, Maschinen, Büroausstattung, Fahrzeuge

Ursachen der Wertminderung:
- Technisch :: körperlicher Verschleiß
- Zeitlich :: Ablauf von Lizenzen oder Patenten
- Wirtschaftlich :: Veralten durch technischen Fortschritt

§ 253 Abs. 3 Satz 1 HGB: Die Anschaffungs- oder Herstellungskosten des abnutzbaren Anlagevermögens werden um planmäßige Abschreibungen vermindert. Sie haben eine Doppelfunktion:
- Bilanzwirkung :: senkt den Buchwert entsprechend der Abnutzung
- GuV-Wirkung :: verteilt die Ausgabe als Aufwand auf die Nutzungsperioden

**Der Abschreibungsplan hat drei Teile:**
- Ausgangswert :: Anschaffungs- oder Herstellungskosten, abzüglich eines nennenswerten Restwerts, wenn er von Anfang an erwartet wird (z. B. Schrottwert eines Schiffs)
- Nutzungsdauer (useful life) :: geschätzter Nutzungszeitraum; technische (länger) oder wirtschaftliche (kürzer) Nutzungsdauer; Orientierung an Erfahrung und den AfA-Tabellen der Finanzverwaltung, die kein Gesetz sind; lässt sich die Nutzungsdauer selbst geschaffener immaterieller Werte oder eines entgeltlich erworbenen Geschäftswerts nicht schätzen, gelten 10 Jahre (§ 253 Abs. 3 Satz 3–4)
- Methode :: wie die Kosten verteilt werden

Die Abschreibung beginnt bei Lieferung (gekauft) oder Fertigstellung (selbst hergestellt). Im ersten Jahr erfolgt sie zeitanteilig (pro rata temporis), monatsgenau. Nach Ablauf der Nutzungsdauer ist der Gegenstand voll abgeschrieben. Wird er weiter genutzt, bleibt er mit einem Erinnerungswert von 1 € stehen.

**Fünf nach HGB zulässige Methoden:**
- Linear (straight-line) :: (AK − Restwert) ÷ Nutzungsdauer; handels- und steuerrechtlich erlaubt
- Geometrisch-degressiv (Buchwertmethode, declining-balance) :: fester Prozentsatz vom Restbuchwert; anfangs höhere Beträge, näher am echten Wertverlust (man denke an den Marktwert eines Autos); erreicht nie null, deshalb wechselt man in dem Jahr zur linearen Methode, in dem der lineare Betrag den degressiven erreicht: t = n − 100/p + 1
- Arithmetisch-degressiv (digital, sum-of-the-years) :: die Beträge fallen jedes Jahr um denselben Schritt D; D = (AK − Restwert) ÷ (1 + 2 + … + n); Jahr k = D × Restjahre; endet genau bei null; nur handelsrechtlich
- Progressiv :: die Beträge steigen im Zeitablauf; widerspricht meist der Vorsicht; nur in engen Ausnahmen (z. B. Anlaufphasen); steuerlich nicht erlaubt
- Leistungsabhängig (performance-based) :: (AK − Restwert) ÷ erwartete Gesamtleistung × tatsächliche Leistung (Stück, km, Maschinenstunden); handels- und steuerrechtlich erlaubt (bewegliche Güter)

Eigenes Beispiel: Maschine 60.000 €, 6 Jahre.
- Linear :: 10.000 pro Jahr
- Geometrisch 25 % :: Jahr 1 15.000, Jahr 2 11.250; Wechseljahr t = 6 − 4 + 1 = 3
- Digital :: D = 60.000 ÷ 21 = 2.857,14; Jahr 1 = 6 × D = 17.142,86, Jahr 2 = 5 × D = 14.285,71
- Leistungsabhängig :: LKW 90.000 € für 450.000 km, 70.000 km gefahren → 14.000 €

Buchungen für eine linear abgeschriebene Maschine, gekauft am 2. Januar für 50.000 €, 5 Jahre:
- Kauf :: Maschinen 50.000 und Vorsteuer 9.500 an Verbindlichkeiten aus L. u. L. 59.500
- Jahresende :: Abschreibungen 10.000 an Maschinen 10.000; GuV an Abschreibungen; SBK an Maschinen 40.000

Degressive Methoden lassen sich auch als Verteilung von Ausgaben lesen, nicht als Messung des Verschleißes. Hohe Abschreibung am Anfang plus später steigende Reparaturkosten ergeben eine ungefähr gleichmäßige Gesamtbelastung pro Jahr. Alle Methoden sind nur zeitliche Verschiebungen: Mehr als 100 % kann man nicht abschreiben. IFRS unterstellen meist längere Nutzungsdauern.

**Außerplanmäßige Abschreibungen: das Niederstwertprinzip (lower of cost or market principle).** Die Anschaffungskosten sind die Obergrenze. Ein höherer Tageswert wird ignoriert (Realisation). Ein niedrigerer Tageswert wird berücksichtigt (Imparität).
- Umlaufvermögen :: strenges Niederstwertprinzip: immer auf den niedrigeren Börsen-/Marktpreis bzw. beizulegenden Wert abschreiben (§ 253 Abs. 4)
- Anlagevermögen :: Abschreibung Pflicht, wenn die Wertminderung voraussichtlich dauerhaft ist (§ 253 Abs. 3 Satz 5)
- Finanzanlagen, vorübergehende Wertminderung :: Wahlrecht zur Abschreibung (Satz 6, gemildertes Niederstwertprinzip)
- Übriges Anlagevermögen, vorübergehende Wertminderung :: Abschreibung verboten; Anlagevermögen wird behalten, nicht verkauft, ein vorübergehender Rückgang droht also keinen Verlust
- Grund fällt später weg :: Zuschreibung Pflicht (§ 253 Abs. 5, Wertaufholungsgebot)

Technisch gibt es keinen Unterschied zwischen planmäßiger und außerplanmäßiger Abschreibung. Nach den GoB wird die außerplanmäßige nach der planmäßigen gebucht, auf einem eigenen Konto. Im Steuerrecht heißt sie AfaA.

Eigenes Beispiel: Ausstattung 80.000 €, 8 Jahre linear, Buchwert zu Beginn von Jahr 4 = 50.000; beizulegender Wert am Ende von Jahr 4 = 12.000, dauerhaft.
- Planmäßig :: Abschreibungen 10.000 an Ausstattung
- Außerplanmäßig :: Außerplanmäßige Abschreibungen 28.000 an Ausstattung (40.000 → 12.000)
- Abschluss :: SBK an Ausstattung 12.000

Bei der Inventur festgestellte Fehlbestände (z. B. gestohlene Hubwagen) werden ebenfalls außerplanmäßig abgeschrieben. Im GKV erscheinen sie als Abschreibungen (§ 275 Abs. 2 Nr. 7). Im UKV gehen sie in die Funktion, in der sie entstanden sind, z. B. Vertriebskosten (§ 275 Abs. 3 Nr. 4).

**Bewertung von Forderungen aus L. u. L. (trade receivables).** Eine Forderung entsteht, wenn die Leistung erbracht ist (Realisation), nicht bei Rechnungsstellung oder Fälligkeit. Sie ist Umlaufvermögen und wird zum Nennwert einschließlich USt bewertet. Die spätere Zahlung ist ein Aktivtausch. Drei Klassen:
- Einwandfreie Forderungen :: Nennwert
- Uneinbringliche Forderungen (uncollectible) :: sicherer Totalausfall (z. B. Insolvenzmasse reicht nicht, eidesstattliche Versicherung des Schuldners, Verjährung, fruchtlose Zwangsvollstreckung) → den Nettobetrag abschreiben und die USt korrigieren: Abschreibungen auf Forderungen (netto) und Umsatzsteuer an Forderungen (brutto)
- Zweifelhafte Forderungen (doubtful) :: nur Teilzahlung erwartet (keine Reaktion auf Mahnungen, geplatzter Scheck, Vergleichsverfahren) → zuerst auf ein eigenes Konto umbuchen (Zweifelhafte Forderungen an Forderungen; erfolgsneutral), dann den erwarteten Ausfall NUR vom Nettobetrag abschreiben; die USt wird erst korrigiert, wenn der Ausfall tatsächlich eintritt (§ 17 UStG)

Eigenes Beispiel: zweifelhafte Forderung 4.760 € brutto, erwarteter Ausfall 60 %. Netto 4.000 → Abschreibung 2.400: Abschreibungen auf Forderungen 2.400 an Zweifelhafte Forderungen 2.400.

Pauschalwertberichtigung (general allowance): Für die übrigen Forderungen auf netto umrechnen und einen Erfahrungssatz für den Ausfall anwenden (z. B. 1 %). Die gemischte Methode = Einzelbewertung für zweifelhafte Posten plus Pauschalwertberichtigung für den Rest.

**Buch vs. Kurs:** Die Ausgabe von 2019 sagt, die degressive Abschreibung sei steuerlich seit 2011 verboten. Das Steuerrecht hat sich seitdem wieder geändert, mit befristeten Zulassungen in späteren Jahren. Für Cloers Klausur zählen nur die handelsrechtlichen Methoden. Zweifelhafte und uneinbringliche Forderungen und die Pauschalwertberichtigung gehen **über die Vorlesung hinaus**.`,
cards:[
{q:R`Drei Teile eines Abschreibungsplans`, a:R`Ausgangswert (AK − Restwert), Nutzungsdauer (useful life), Methode (§ 253 III S. 2 HGB).`},
{q:R`Wechseljahr geometrisch → linear; digitaler Schritt`, a:R`t = n − 100/p + 1. Digital: D = AK ÷ (1 + … + n); Jahr k = D × Restjahre.`},
{q:R`Niederstwertprinzip (lower of cost or market): Anlage- vs. Umlaufvermögen`, a:R`Umlaufvermögen: immer abschreiben (streng). Anlagevermögen: wenn dauerhaft; Finanzanlagen vorübergehend = Wahlrecht; übriges Anlagevermögen vorübergehend = verboten. Später Zuschreibung Pflicht.`},
{q:R`Zweifelhafte Forderung — zwei Schritte`, a:R`Umbuchen (Zweifelhafte Forderungen an Forderungen), dann den erwarteten Ausfall vom Nettobetrag abschreiben; USt erst korrigieren, wenn der Ausfall endgültig ist.`}
],
quiz:[
{q:R`Maschine 80.000 €, 10 Jahre, geometrisch-degressiv mit 20 %. In welchem Jahr sollte auf linear gewechselt werden?`, opts:[R`Jahr 6`,R`Jahr 5`,R`Jahr 7`,R`Jahr 4`], correct:0, exp:R`t = n − 100/p + 1 = 10 − 5 + 1 = 6.`},
{q:R`Gegenstand 30.000 €, 5 Jahre, digitale (arithmetisch-degressive) Abschreibung. Betrag in Jahr 1?`, opts:[R`10.000 €`,R`6.000 €`,R`2.000 €`,R`12.000 €`], correct:0, exp:R`D = 30.000 ÷ 15 = 2.000; Jahr 1 = 5 × 2.000 = 10.000.`},
{q:R`Ein Taxi kostet 36.000 € bei erwarteten 300.000 km und fährt dieses Jahr 50.000 km. Leistungsabhängige Abschreibung?`, opts:[R`6.000 €`,R`7.200 €`,R`5.000 €`,R`12.000 €`], correct:0, exp:R`36.000 ÷ 300.000 = 0,12 € pro km × 50.000 km = 6.000.`},
{q:R`Der Marktwert einer Produktionsmaschine fällt unter ihren Buchwert, aber nur vorübergehend. Behandlung?`, opts:[R`Abschreibung ist verboten`,R`Abschreibung ist Pflicht`,R`Abschreibung ist ein Wahlrecht`,R`Eine Rückstellung ist Pflicht`], correct:0, exp:R`Anlagevermögen außer Finanzanlagen: Abschreibung nur bei dauerhafter Wertminderung (§ 253 Abs. 3 Satz 5); das Wahlrecht bei vorübergehender Minderung gilt nur für Finanzanlagen.`},
{q:R`Waren auf Lager (Umlaufvermögen) haben am Stichtag einen Marktwert unter den Anschaffungskosten. Behandlung?`, opts:[R`Abschreibung ist immer Pflicht`,R`Abschreibung nur bei Dauerhaftigkeit`,R`Abschreibung ist ein Wahlrecht`,R`Keine Abschreibung bis zum Verkauf`], correct:0, exp:R`Strenges Niederstwertprinzip für das Umlaufvermögen (§ 253 Abs. 4 HGB).`},
{q:R`Eine Forderung über 2.380 € brutto (19 % USt) ist sicher uneinbringlich. Buchung?`, opts:[R`Abschreibung 2.000 und USt 380 an Forderungen 2.380`,R`Abschreibung 2.380 an Forderungen 2.380`,R`Zweifelhafte Ford. 2.380 an Forderungen 2.380`,R`Abschreibung 2.000 an Forderungen 2.000`], correct:0, exp:R`Nur der Nettobetrag ist Aufwand; die USt wird korrigiert, weil der Ausfall endgültig ist.`},
{q:R`Eine zweifelhafte Forderung über 3.570 € brutto; 40 % Ausfall erwartet. Höhe der Abschreibung?`, opts:[R`1.200 €`,R`1.428 €`,R`3.000 €`,R`2.142 €`], correct:0, exp:R`Netto = 3.570 ÷ 1,19 = 3.000; 40 % = 1.200. Die USt wird erst korrigiert, wenn der Ausfall endgültig ist.`},
{q:R`Wann entsteht eine Forderung aus L. u. L.?`, opts:[R`Wenn die Leistung erbracht ist`,R`Wenn die Rechnung geschrieben wird`,R`Wenn die Zahlung fällig ist`,R`Wenn der Vertrag unterschrieben wird`], correct:0, exp:R`Realisationsprinzip: bei Lieferung oder Leistung; Rechnung und Fälligkeit spielen keine Rolle.`}
]},

{id:'bk-rw-10', ch:'T10', lessons:'Lektion 11', course:['bk-12','bk-13'], title:'Zahlungen über Periodengrenzen: Anzahlungen, Rechnungsabgrenzung, Disagio & Rückstellungen',
examWeight:'Schwebende Geschäfte, Anzahlungen mit Umsatzsteuer, aktive und passive Rechnungsabgrenzung, das Disagio-Wahlrecht und die drei Arten von Rückstellungen — ergänzt Kurskapitel 12 und 13',
summary:R`**Schwebende Geschäfte (pending transactions).** Ein Vertrag verpflichtet Verkäufer und Käufer, aber solange keine Seite geleistet hat, wird nichts gebucht. Beide Ansprüche gelten als gleichwertig und ohne Wirkung auf den Gewinn. Erträge entstehen, wenn die Leistung erbracht ist, nicht bei Vertragsschluss oder Zahlung. Es zählt das wirtschaftliche Eigentum, nicht das rechtliche (§ 246 Abs. 1 Satz 2 HGB), deshalb sind unter Eigentumsvorbehalt gelieferte Waren schon Vermögen des Käufers und Umsatz des Verkäufers.

Fallen Leistung und Zahlung auseinander, ergeben sich vier Fälle:
- Zahlung vor einer Lieferung :: geleistete und erhaltene Anzahlungen
- Zahlung vor einer zeitraumbezogenen Leistung :: Rechnungsabgrenzungsposten (RAP)
- Zahlung nach einer Lieferung :: Forderungen und Verbindlichkeiten aus L. u. L.
- Zahlung nach einer Leistung :: sonstige Forderungen und Verbindlichkeiten

**Anzahlungen (advance payments; Zahlung vor einer Lieferung).** Ein Unternehmen, das für einen Gegenstand im Voraus zahlt, hat einen echten Anspruch auf Lieferung oder Rückzahlung. Dieser Anspruch erfüllt schon die Kriterien eines Vermögensgegenstands.
- Kunde :: geleistete Anzahlung (on-account payment), ein Vermögensgegenstand; im Anlagevermögen (§ 266 Abs. 2 A.I.4 bzw. A.II.4), wenn der Gegenstand Anlagevermögen wird, sonst bei den Vorräten (B.I.4), nicht bei den Forderungen
- Lieferant :: erhaltene Anzahlung (advance payment received), eine Lieferverpflichtung (C.3)

Auf jede Anzahlung fällt Umsatzsteuer an (§ 13 UStG). Das auswendig lernen; es ist nicht systematisch. Eigenes Beispiel: Ein Kunde zahlt 1.190 € im Voraus für Waren über 1.000 € netto.
- Lieferant bei Zahlung :: Bank 1.190 an Erhaltene Anzahlungen 1.000 und Umsatzsteuer 190
- Kunde bei Zahlung :: Geleistete Anzahlungen 1.000 und Vorsteuer 190 an Bank 1.190
- Lieferant bei Lieferung :: Erhaltene Anzahlungen 1.000 an Umsatzerlöse 1.000
- Kunde bei Lieferung :: Waren 1.000 an Geleistete Anzahlungen 1.000

Bei einer Teilanzahlung (z. B. 238 = 200 + 38) enthält der Rest bei Lieferung wieder seinen Anteil an USt (800 + 152).

**Rechnungsabgrenzungsposten (prepaid expenses and deferred income; Zahlung vor einer zeitraumbezogenen Leistung).** Typische Fälle sind Miete, Darlehenszinsen und Versicherungen. Eine Vorauszahlung für eine spätere Leistung mindert den Ertragswert des Unternehmens meist nicht. Ihr Wert ist aber weniger greifbar als eine Anzahlung auf einen Gegenstand. Deshalb stellt das Gesetz eine Bedingung: Abgegrenzt werden nur Vorauszahlungen für eine bestimmte Zeit nach dem Abschlussstichtag (§ 250 HGB).
- Aktiver RAP (prepaid expense) :: Ausgabe vor dem Stichtag, die Aufwand für eine bestimmte Zeit danach ist
- Passiver RAP (deferred income) :: Einnahme vor dem Stichtag, die Ertrag für eine bestimmte Zeit danach ist; wird in dem Jahr als Ertrag aufgelöst, in dem die Leistung erbracht wird

Eigenes Beispiel: Miete von 24.000 € für 1. Juli bis 30. Juni geht am 1. Juli ein.
- Eingang :: Bank 24.000 an Mieterträge 24.000
- 31.12. :: Mieterträge 12.000 an Passive RAP 12.000
- Nächstes Jahr :: Passive RAP 12.000 an Mieterträge 12.000

In der Praxis wird die ganze Zahlung zuerst als Aufwand oder Ertrag gebucht und am Jahresende mit einem RAP korrigiert. RAP sind meist umsatzsteuerfrei, weil Miete, Zinsen und Versicherungen steuerfrei sind (§ 4 UStG). Hat der Vermieter zur Umsatzsteuer optiert (§ 9), wird die USt bei Zahlung gebucht, wie bei einer Anzahlung.

**Forderungen und Verbindlichkeiten (Zahlung nach der Leistung).** Der Umsatz wird bei Leistung gebucht; die spätere Zahlung ist erfolgsneutral. Forderungen und Verbindlichkeiten werden brutto, einschließlich USt, ausgewiesen (§ 266 Abs. 2 B.II.1 und Abs. 3 C.4). Verbindlichkeiten stehen nach Höhe und Zeitpunkt fest und werden mit ihrem Erfüllungsbetrag bewertet (§ 253 Abs. 1 Satz 2). Kapitalforderungen (gewährte Darlehen) gehören zur Finanzsphäre. Forderungen aus L. u. L. gehören zur Leistungssphäre.

**Disagio (über die Vorlesung hinaus).** Banken zahlen oft weniger aus, als zurückzuzahlen ist; die Differenz ist das Disagio. Eigenes Beispiel: Darlehen 200.000 €, ausgezahlt 194.000 €. § 250 Abs. 3 HGB gibt ein Wahlrecht:
- Als aktiver RAP :: Bank 194.000 und Aktive RAP 6.000 an Darlehen 200.000; die 6.000 werden über die Laufzeit abgeschrieben (gesehen als vorausgezahlter Zins)
- Als sofortiger Aufwand :: Bank 194.000 und Zinsaufwand 6.000 an Darlehen 200.000 (gesehen als Bearbeitungsgebühr)

IFRS setzen das Darlehen mit dem Auszahlungsbetrag an und schreiben die Differenz über die Laufzeit zu. Ein weiteres Beispiel für früheren Gewinn nach IFRS.

**Rückstellungen (provisions).** Eigenes Beispiel: Ein Mitarbeiter arbeitet im Dezember. Drei Fälle:
- Bezahlt im Dezember :: Lohnaufwand an Bank
- Bezahlt am 3. Januar :: im Dezember Lohnaufwand an Sonstige Verbindlichkeiten; im Januar Sonstige Verbindlichkeiten an Bank
- Erst Jahrzehnte später als Pension bezahlt :: jetzt Lohnaufwand an Pensionsrückstellungen; bei Zahlung Pensionsrückstellungen an Bank

Im dritten Fall besteht die Schuld, aber ob und wie viel gezahlt wird, ist unsicher. § 249 Abs. 1 Satz 1 HGB verlangt eine Rückstellung. Rückstellungen für ungewisse Verbindlichkeiten sind Schulden, deren spätere Zahlung oder Höhe unsicher ist. Die künftige Zahlung wird schon am Abschlussstichtag als Aufwand erfasst. Wie Verbindlichkeiten werden sie angesetzt, wenn die Schuld wirtschaftlich verursacht ist, nicht wenn sie fällig ist. Die Bildung einer Rückstellung ist Aufwand. War sie richtig bemessen, ist ihre spätere Inanspruchnahme erfolgsneutral. War sie zu hoch, wird der Überschuss zum Ertrag.

Das Buch nennt drei Arten von Rückstellungen:
- Für ungewisse Verbindlichkeiten :: Pflicht; braucht eine Außenverpflichtung gegenüber einem Dritten; aus dem Realisationsprinzip; z. B. Pensionen, Gewährleistungen, Prozesse (Zivilrecht), Umweltsanierung, Körperschaft- und Gewerbesteuer (öffentliches Recht)
- Aufwandsrückstellungen :: keine Außenverpflichtung, aber künftige Zahlungen gehören zu schon realisierten Erträgen; Pflicht für unterlassene Instandhaltung, die innerhalb von drei Monaten des Folgejahres nachgeholt wird, Abraumbeseitigung, die im Folgejahr nachgeholt wird, und Kulanzleistungen (§ 249 Abs. 1 Satz 2); nach IFRS nicht erlaubt (IAS 37 verlangt eine Außenverpflichtung)
- Für drohende Verluste aus schwebenden Geschäften :: aus dem Imparitätsprinzip

Gewährleistungsrückstellungen sind wie Wertberichtigungen auf Forderungen aufgebaut. Einzelrückstellungen werden gebildet, wo ein Mangel schon bekannt ist. Pauschalrückstellungen decken den Rest mit statistischen Sätzen (z. B. 3 % vom Umsatz). Ein verkauftes Auto, dessen Käufer sich noch nicht beschwert hat, fällt unter die Pauschalrückstellung. Beschwert sich ein Käufer ohne Gewährleistungsanspruch, gibt es keine Außenverpflichtung. Repariert das Unternehmen trotzdem, um den Kunden zu halten, ist eine Kulanzrückstellung Pflicht.

Eigenes Drohverlust-Beispiel: Ein Unternehmen hat vereinbart, nächstes Jahr eine Maschine für 120.000 € netto zu liefern; sie kostet in der Herstellung 130.000 € plus 1.000 € Fracht.
- Maschine schon fertig zu 130.000 € :: der aus dem Vertrag abgeleitete Wert ist 120.000 − 1.000 = 119.000 → außerplanmäßige Abschreibung von 11.000 auf das Fertigerzeugnis (Niederstwertprinzip); keine Rückstellung
- Wurden 6.000 € wahlweiser Gemeinkosten als Aufwand gebucht statt aktiviert :: Buchwert 124.000 → Abschreibung 5.000; zusammen ist der Verlust von 11.000 vorweggenommen
- Maschine noch nicht hergestellt :: es gibt nichts zum Abschreiben → Sonstiger betrieblicher Aufwand 11.000 an Rückstellung für drohende Verluste; im nächsten Jahr wird die Lieferung normal gebucht und die Rückstellung in die sonstigen betrieblichen Erträge aufgelöst

Eine Drohverlustrückstellung wird also nur gebildet, wenn der Verlust nicht durch eine Abschreibung vorweggenommen werden kann. Schwebende Geschäfte werden normalerweise nicht bilanziert. Nur ein Verpflichtungsüberschuss wird erfasst.

**Buch vs. Kurs:** Der Kurs zählt vier Kategorien von Rückstellungen nach § 249. Das Buch fasst denselben Inhalt in drei Arten zusammen: Instandhaltung, Abraum und Kulanz bilden gemeinsam die "Aufwandsrückstellungen". Gleiche Regeln, andere Gruppierung. Das Disagio geht **über die Vorlesung hinaus**.`,
cards:[
{q:R`Erhaltene Anzahlung: Umsatzsteuer?`, a:R`Ja — auf jede Anzahlung fällt USt an (§ 13 UStG): Bank an Erhaltene Anzahlungen (netto) und Umsatzsteuer.`},
{q:R`Aktiver vs. passiver RAP`, a:R`Aktiver RAP (prepaid expense): Ausgabe vor dem Stichtag, Aufwand für eine bestimmte Zeit danach (Aktivseite). Passiver RAP (deferred income): Einnahme vorher, Ertrag für eine bestimmte Zeit danach (Passivseite). § 250 HGB.`},
{q:R`Disagio-Wahlrecht (§ 250 III HGB)`, a:R`Als aktiven RAP aktivieren und über die Laufzeit abschreiben oder sofort als Aufwand buchen.`},
{q:R`Drohverlustrückstellung — wann?`, a:R`Nur für einen Verpflichtungsüberschuss aus einem schwebenden Geschäft, der nicht durch eine außerplanmäßige Abschreibung vorweggenommen werden kann (noch kein Vermögensgegenstand).`},
{q:R`Pflicht-Aufwandsrückstellungen`, a:R`Unterlassene Instandhaltung, nachgeholt innerhalb von 3 Monaten, Abraumbeseitigung im Folgejahr, Kulanzleistungen (§ 249 I S. 2).`}
],
quiz:[
{q:R`Ein Kunde zahlt 595 € (inkl. 19 % USt) im Voraus für Waren, die nächsten Monat geliefert werden. Buchung des Lieferanten bei Zahlung?`, opts:[R`Bank 595 an Erh. Anzahlungen 500 und USt 95`,R`Bank 595 an Umsatzerlöse 500 und USt 95`,R`Bank 595 an Erhaltene Anzahlungen 595`,R`Noch nichts, weil es ein schwebendes Geschäft ist`], correct:0, exp:R`Eine erhaltene Anzahlung ist eine Lieferverpflichtung; auf Anzahlungen fällt Umsatzsteuer an (§ 13 UStG).`},
{q:R`Wo zeigt ein Käufer eine geleistete Anzahlung auf eine Maschine, die er in der Produktion nutzen wird?`, opts:[R`Im Anlagevermögen (A.II.4)`,R`Bei den Forderungen (B.II)`,R`Bei den Vorräten (B.I.4)`,R`Als aktiven RAP (C)`], correct:0, exp:R`Sie folgt dem späteren Gegenstand: Anlagegut → Anlagevermögen; bei Waren wären es die Vorräte, nie die Forderungen.`},
{q:R`Miete von 12.000 € für Oktober–September geht am 1. Oktober ein und wird als Ertrag gebucht. Buchung am Jahresende?`, opts:[R`Mieterträge 9.000 an Passive RAP 9.000`,R`Mieterträge 3.000 an Passive RAP 3.000`,R`Passive RAP 9.000 an Mieterträge 9.000`,R`Aktive RAP 9.000 an Mieterträge 9.000`], correct:0, exp:R`Neun von zwölf Monaten gehören ins nächste Jahr: 9.000 sind passiver RAP; 3.000 bleiben Ertrag dieses Jahres.`},
{q:R`Warum wird auf vorausgezahlte Miete, Zinsen oder Versicherung meist keine USt gebucht?`, opts:[R`Diese Leistungen sind umsatzsteuerfrei`,R`USt wird nur am Jahresende gebucht`,R`Abgrenzungen sind nie umsatzsteuerpflichtig`,R`Der Kunde zahlt die USt immer später`], correct:0, exp:R`Vermietung, Kredite und Versicherungen sind steuerfrei (§ 4 UStG). Optiert der Vermieter (§ 9), wird die USt bei Zahlung gebucht wie bei einer Anzahlung.`},
{q:R`Eine Bank zahlt 97.000 € auf ein Darlehen über 100.000 € aus. Was erlaubt § 250 Abs. 3 HGB für die 3.000 €?`, opts:[R`Wahlrecht: aktiver RAP oder sofort Aufwand`,R`Muss als aktiver RAP aktiviert werden`,R`Muss sofort als Zinsaufwand gebucht werden`,R`Ausweis als Minderung der Verbindlichkeit`], correct:0, exp:R`Das Disagio darf aktiviert und über die Laufzeit abgeschrieben oder sofort als Aufwand gebucht werden; die Verbindlichkeit ist immer die zurückzuzahlenden 100.000.`},
{q:R`Ein Käufer reklamiert einen Mangel, eine Gewährleistungspflicht besteht aber nicht. Das Unternehmen repariert trotzdem, um den Kunden zu halten. Rückstellung?`, opts:[R`Ja, eine Pflicht-Kulanzrückstellung`,R`Nein, es gibt keine Außenverpflichtung`,R`Wahlrecht nach Belieben des Kaufmanns`,R`Nur nach IFRS, nicht nach HGB`], correct:0, exp:R`§ 249 Abs. 1 Satz 2 Nr. 2 HGB verlangt Rückstellungen für Gewährleistungen ohne rechtliche Verpflichtung (Kulanz); nach IFRS wäre das nicht erlaubt.`},
{q:R`Ein Verlustauftrag: Das Produkt ist schon fertig und auf Lager. Wie wird der Verlust vorweggenommen?`, opts:[R`Das Fertigerzeugnis abschreiben`,R`Rückstellung für drohende Verluste`,R`Gar nicht, bis zur Lieferung`,R`Passiver RAP für den Vertragspreis`], correct:0, exp:R`Gibt es einen Vermögensgegenstand, wird er nach dem Niederstwertprinzip abgeschrieben; eine Drohverlustrückstellung entsteht nur, wenn nichts abgeschrieben werden kann.`},
{q:R`Eine Gewährleistungsrückstellung von 5.000 € wird für Reparaturen von genau 5.000 € in Anspruch genommen. Wirkung auf den Gewinn zu diesem Zeitpunkt?`, opts:[R`Keine, der Aufwand fiel bei der Bildung an`,R`Ein Aufwand von 5.000 € im Jahr der Reparatur`,R`Ein Ertrag von 5.000 € aus der Auflösung`,R`Insgesamt ein Aufwand von 10.000 €`], correct:0, exp:R`Die Bildung der Rückstellung ist der Aufwand; die Inanspruchnahme einer richtig bemessenen Rückstellung ist erfolgsneutral (Rückstellung an Bank).`}
]},

{id:'bk-rw-11', ch:'T11', lessons:'Lektion 12', course:['bk-5'], title:'Eigenkapital als Restgröße: Einzelkaufmann, Personengesellschaft, Kapitalgesellschaft',
examWeight:'Privatkonto und erweiterter Eigenkapitalvergleich, Kapitalkonten I/II der Gesellschafter, Gewinnverwendung in der GmbH und die UG — ergänzt Kurskapitel 4',
summary:R`**Das Eigenkapital ist besonders.** Es ist ein passives Bestandskonto, über das aber Gewinne gebucht werden:
- Jeder erfolgswirksame Geschäftsvorfall erreicht es über den Saldo des GuV-Kontos (Jahresüberschuss oder Jahresfehlbetrag)
- Erfolgsneutrale Veränderungen kommen aus Einlagen und Entnahmen

Eine Einlage (contribution) bringt Geld oder Gegenstände aus dem Privatvermögen des Inhabers ins Unternehmen. Eine Entnahme (withdrawal) bringt Geld, Gegenstände oder die Nutzung von Gegenständen ins Privatvermögen. Private Rechnungen vom Geschäftskonto zu bezahlen ist ebenfalls eine Entnahme. Bei Kapitalgesellschaften sind Einlagen Kapitalerhöhungen. Entnahmen aus dem Gewinn sind Dividenden (Gewinnausschüttungen). Die Rückzahlung ursprünglich eingelegten Kapitals ist eine Kapitalherabsetzung.

Der Gewinn per Eigenkapitalvergleich muss diese Vorgänge des Inhabers herausrechnen (erweiterter Eigenkapitalvergleich, extended comparison of equity):
- Eigenkapital am Ende ./. Eigenkapital am Anfang + Entnahmen ./. Einlagen = Jahresergebnis

**Einzelkaufmann: das Privatkonto (private account).** Einlagen und Entnahmen werden auf einem Privatkonto gebucht, einem Unterkonto des Eigenkapitals, das ins Eigenkapital abgeschlossen wird. Es folgt den Seiten des Eigenkapitals: Einlagen (Zugänge) im Haben, Entnahmen (Abgänge) im Soll. Es enthält nur Stromgrößen, hat also keinen Anfangs- oder Schlussbestand.

Eigenes Beispiel: Eigenkapital am Anfang 70.000 €, Jahresüberschuss 45.000 €. Der Inhaber nimmt 15.000 € bar für den Lebensunterhalt; seine private Einkommensteuererstattung von 3.000 € geht auf dem Geschäftskonto ein; er bringt sein privates Auto ins Unternehmen ein (Marktwert 20.000 € netto).
- Entnahme :: Privat 15.000 an Kasse 15.000
- Steuererstattung :: Bank 3.000 an Privat 3.000 (die Einkommensteuer ist privat, eine Erstattung aufs Geschäftskonto ist also eine Einlage)
- Auto :: Fuhrpark 20.000 an Privat 20.000 (eine Sacheinlage, sinnvollerweise zum Marktwert)
- Saldo des Privatkontos :: 8.000 im Haben → Privat 8.000 an Eigenkapital 8.000
- GuV :: GuV 45.000 an Eigenkapital 45.000
- Eigenkapital am Ende :: 70.000 + 45.000 + 8.000 = 123.000 → Eigenkapital an SBK 123.000

**Personengesellschaften (partnerships).** In der OHG haften alle Gesellschafter mit ihrem gesamten Vermögen. In der KG haftet der Komplementär voll und der Kommanditist nur bis zur Höhe seiner Einlage. Eine GbR kann beides sein. Eine Personengesellschaft ist keine juristische Person, ihr Gewinn gehört also den Gesellschaftern (Transparenzprinzip). Jeder Gesellschafter bekommt ein Eigenkapitalkonto und ein Privatkonto.

Das HGB schlägt eine Gewinnverteilung vor (§ 121 OHG, §§ 167–169 KG), das ist aber dispositives Recht. In der Praxis entscheidet der Gesellschaftsvertrag. Eine Verteilung nach dem aktuellen Eigenkapital würde sich mit jeder Einlage und Entnahme ständig ändern, deshalb nutzen Unternehmen oft zwei Konten pro Gesellschafter:
- Kapitalkonto I (fest) :: der vereinbarte Anteil, der Schlüssel für die Gewinnverteilung; er ändert sich nicht
- Kapitalkonto II (variabel) :: Gewinnanteile und spätere Einlagen erhöhen es; Verluste und Entnahmen mindern es; wird oft fest verzinst

Eigenes Beispiel: Gewinn 101.000 €. Zuerst 4 % Zinsen auf das Vorjahres-Kapitalkonto II (A: 25.000 → 1.000; B: 0 → 0). Der Rest von 100.000 wird nach Kapitalkonto I verteilt (A 300.000, B 200.000 → 60 : 40). Buchung: GuV 101.000 an Kapital II A 61.000 und Kapital II B 40.000.

Das Eigenkapital eines Kommanditisten bleibt bei der eingetragenen Summe. Sein nicht ausgezahlter Gewinnanteil wird als sonstige Verbindlichkeit der KG ihm gegenüber ausgewiesen.

**Kapitalgesellschaften (corporations).** AG und GmbH sind juristische Personen. Die Haftung ist auf das Gesellschaftsvermögen beschränkt. Die KGaA ist selten (z. B. manche Fußballvereine). Sie haben ein festes Mindestkapital: 50.000 € bei der AG (Grundkapital) und 25.000 € bei der GmbH (Stammkapital). Ohne Kapitalrücklagen gilt: Eigenkapital = gezeichnetes Kapital (fest) + Gewinnrücklagen (variabel) (§ 266 Abs. 3 A).

Nie **Rückstellungen** (provisions, Schulden) mit **Rücklagen** (reserves, Eigenkapital) verwechseln.

Die Gewinnverwendung in der GmbH folgt dem Trennungsprinzip. Der Gewinn gehört der Gesellschaft, und die Gesellschafterversammlung beschließt, was ausgeschüttet wird.
- 31.12. :: GuV an Jahresüberschuss
- 1.1. :: Jahresüberschuss an Gewinnverwendung (Unterkonto des Eigenkapitals)
- Beschluss, eigenes Beispiel 60 % Ausschüttung von 150.000 :: Gewinnverwendung 150.000 an Bank 90.000 und Gewinnrücklagen 60.000

Was jeder Beschluss in der Bilanz bewirkt:
- Volle Thesaurierung :: Passivtausch
- Volle Ausschüttung :: Aktiv-Passiv-Minderung
- Teilausschüttung :: beides zugleich
- Noch kein Beschluss :: Gewinnverwendung an Gewinnvortrag (§ 266 Abs. 3 A.IV), da das Unterkonto selbst nicht im Abschluss erscheint

Gewinnrücklagen teilen sich in gesetzliche, satzungsmäßige und andere Rücklagen (§ 266 Abs. 3 A.III).

**UG (haftungsbeschränkt).** Für Gründer ohne 25.000 € schuf das MoMiG von 2008 die Mini-GmbH (§ 5a GmbHG). Sie kann mit 1 € gegründet werden und muss "UG (haftungsbeschränkt)" im Namen tragen. Sie muss 25 % des Jahresüberschusses jedes Jahres in eine gesetzliche Rücklage einstellen. Diese Rücklage kann nicht ausgeschüttet, aber zur Kapitalerhöhung genutzt werden. Sobald das Kapital 25.000 € erreicht, darf sie sich GmbH nennen. Vorher nutzten Gründer oft eine britische Ltd. mit 1 £ Mindestkapital, mussten dann aber auch in Großbritannien Abschlüsse einreichen.`,
cards:[
{q:R`Erweiterter Eigenkapitalvergleich`, a:R`Eigenkapital Ende − Eigenkapital Anfang + Entnahmen − Einlagen = Jahresergebnis.`},
{q:R`Seiten des Privatkontos`, a:R`Einlagen im Haben, Entnahmen im Soll; kein Anfangs- oder Schlussbestand; wird ins Eigenkapital abgeschlossen.`},
{q:R`Kapitalkonto I vs. II`, a:R`I: fester vereinbarter Anteil, Schlüssel für die Gewinnverteilung. II: variabel — Gewinnanteile und Einlagen erhöhen, Verluste und Entnahmen mindern.`},
{q:R`Buchungen der Gewinnverwendung in der GmbH`, a:R`GuV an Jahresüberschuss; Jahresüberschuss an Gewinnverwendung; Gewinnverwendung an Bank (Ausschüttung) und Gewinnrücklagen (Thesaurierung) oder an Gewinnvortrag.`},
{q:R`UG (haftungsbeschränkt)`, a:R`Ab 1 € Kapital (§ 5a GmbHG); 25 % des Jahresüberschusses in eine gesetzliche Rücklage, bis 25.000 € Kapital erreicht sind.`}
],
quiz:[
{q:R`Die private Einkommensteuererstattung des Inhabers geht auf dem Geschäftskonto ein. Buchung?`, opts:[R`Bank an Privat (Einlage)`,R`Privat an Bank (Entnahme)`,R`Bank an Sonstige betriebliche Erträge`,R`Bank an Verbindlichkeiten gegenüber Finanzamt`], correct:0, exp:R`Die Einkommensteuer ist privat; Geld aus einer privaten Angelegenheit, das im Unternehmen landet, ist eine Einlage.`},
{q:R`Eigenkapital Anfang 60.000, Ende 85.000; Entnahmen 30.000; Einlagen 10.000. Jahresergebnis?`, opts:[R`45.000 €`,R`25.000 €`,R`5.000 €`,R`65.000 €`], correct:0, exp:R`85.000 − 60.000 + 30.000 − 10.000 = 45.000.`},
{q:R`Welches Konto hat keinen Anfangs- oder Schlussbestand?`, opts:[R`Das Privatkonto`,R`Das Eigenkapitalkonto`,R`Das Kapitalkonto I`,R`Die Gewinnrücklagen`], correct:0, exp:R`Das Privatkonto sammelt nur die Einlagen und Entnahmen des Jahres und wird ins Eigenkapital abgeschlossen.`},
{q:R`Was misst das Kapitalkonto I eines Gesellschafters?`, opts:[R`Den festen Anteil, der den Gewinn verteilt`,R`Die laufenden Gewinne und Verluste des Gesellschafters`,R`Die Entnahmen des Gesellschafters im Jahr`,R`Das Privatvermögen des Gesellschafters`], correct:0, exp:R`Das Kapitalkonto I bleibt konstant und ist der Schlüssel für die Gewinnverteilung; das Kapitalkonto II nimmt die Veränderungen auf.`},
{q:R`Eine GmbH thesauriert ihren gesamten Jahresüberschuss. Was passiert in der Bilanz?`, opts:[R`Passivtausch`,R`Aktiv-Passiv-Minderung`,R`Aktiv-Passiv-Mehrung`,R`Aktivtausch auf der Aktivseite`], correct:0, exp:R`Die Gewinnverwendung sinkt, die Gewinnrücklagen steigen um denselben Betrag; eine volle Ausschüttung wäre eine Aktiv-Passiv-Minderung.`},
{q:R`Die Gesellschafterversammlung hat noch nicht über die Gewinnverwendung beschlossen. Wohin geht der Gewinn?`, opts:[R`In den Gewinnvortrag`,R`In die Gewinnrücklagen als Reserve`,R`In die sonstigen Verbindlichkeiten`,R`Er bleibt in der GuV stehen`], correct:0, exp:R`Die Gewinnverwendung ist nur ein Unterkonto; § 266 Abs. 3 A.IV sieht den Posten Gewinn-/Verlustvortrag vor.`},
{q:R`Wie viel ihres Jahresüberschusses muss eine UG in die gesetzliche Rücklage einstellen?`, opts:[R`25 %`,R`10 %`,R`50 %`,R`5 %`], correct:0, exp:R`§ 5a Abs. 3 GmbHG: 25 %, bis das Kapital 25.000 € erreicht; die Rücklage darf nicht ausgeschüttet werden.`},
{q:R`Rückstellungen vs. Rücklagen — welche Aussage stimmt?`, opts:[R`Rückstellungen sind Schulden, Rücklagen Eigenkapital`,R`Beide sind Teile des Eigenkapitals auf der Passivseite`,R`Rückstellungen sind Eigenkapital, Rücklagen Schulden`,R`Beide sind Teile der Schulden`], correct:0, exp:R`Rückstellungen (provisions) sind ungewisse Schulden; Rücklagen (reserves) gehören zum Eigenkapital.`}
]}
];

/* booking drills worked out from the companion exercise book's topics where the course has few drills (own wording and numbers).
   Task text in German like the textbook pages; account names and amounts stay in the course's English format because the
   Booking Entry Trainer picks from the shared English account list. */
BK_ACCOUNTS.push('Doubtful receivables','Write-down on receivables','Discounts received','Discounts granted','Profit appropriation','Profit carried forward','Net income for the year');
BK_TRAIN.push(
{id:'rw-1', topic:'bk-6', src:'Textbook', text:'Waren für 4.000 € netto + 19 % USt werden auf Ziel gekauft; 2 % Skonto bei Zahlung innerhalb von 10 Tagen. Buche die Lieferung beim Käufer (Wareneinkaufskonto = Trading goods inventory).', lines:[['D','Trading goods inventory','4,000'],['D','Input tax','760'],['C','Trade payables','4,760']]},
{id:'rw-2', topic:'bk-6', src:'Textbook', text:'Der Käufer bezahlt die Rechnung über 4.760 € innerhalb von 10 Tagen unter Abzug von 2 % Skonto per Banküberweisung.', lines:[['D','Trade payables','4,760'],['C','Bank','4,664.80'],['C','Input tax','15.20'],['C','Discounts received','80']]},
{id:'rw-3', topic:'bk-6', src:'Textbook', text:'Sicht des Verkäufers: Ein Kunde bezahlt eine Rechnung über 2.380 € (inkl. 19 % USt) per Bank unter Abzug von 3 % Skonto.', lines:[['D','Bank','2,308.60'],['D','Discounts granted','60'],['D','VAT','11.40'],['C','Trade receivables','2,380']]},
{id:'rw-4', topic:'bk-9', src:'Textbook', text:'Mangelhafte Waren, auf Ziel für 2.000 € netto + 19 % USt gekauft, werden vor der Zahlung an den Lieferanten zurückgeschickt.', lines:[['D','Trade payables','2,380'],['C','Trading goods inventory','2,000'],['C','Input tax','380']]},
{id:'rw-5', topic:'bk-9', src:'Textbook', text:'Ein Kunde schickt unbezahlte Waren zurück, die für 500 € netto + 19 % USt verkauft wurden.', lines:[['D','Sales revenue','500'],['D','VAT','95'],['C','Trade receivables','595']]},
{id:'rw-6', topic:'bk-6', src:'Textbook', text:'Ende des Voranmeldungszeitraums: Umsatzsteuer 12.000 €, Vorsteuer 7.500 €. Verrechne zuerst die beiden Konten.', lines:[['D','VAT','7,500'],['C','Input tax','7,500']]},
{id:'rw-7', topic:'bk-12', src:'Textbook', text:'Sicht des Lieferanten: Ein Kunde überweist eine Anzahlung von 3.570 € (inkl. 19 % USt) für Waren, die nächsten Monat geliefert werden.', lines:[['D','Bank','3,570'],['C','Advance payment received','3,000'],['C','VAT','570']]},
{id:'rw-8', topic:'bk-12', src:'Textbook', text:'Sicht des Kunden bei derselben Anzahlung von 3.570 € (inkl. 19 % USt) für Waren.', lines:[['D','On-account payment','3,000'],['D','Input tax','570'],['C','Bank','3,570']]},
{id:'rw-9', topic:'bk-12', src:'Textbook', text:'Ein Darlehen über 50.000 € wird unter Einbehalt von 4 % Disagio dem Bankkonto gutgeschrieben; das Unternehmen aktiviert das Disagio.', lines:[['D','Bank','48,000'],['D','Deferred expense','2,000'],['C','Loan / Liability','50,000']]},
{id:'rw-10', topic:'bk-11', src:'Textbook', text:'Ein Kunde hat eine Rechnung über 5.950 € (inkl. 19 % USt) trotz mehrerer Mahnungen nicht bezahlt. Buche sie auf zweifelhafte Forderungen um.', lines:[['D','Doubtful receivables','5,950'],['C','Trade receivables','5,950']]},
{id:'rw-11', topic:'bk-11', src:'Textbook', text:'Für die zweifelhafte Forderung über 5.950 € brutto wird am Jahresende ein Ausfall von 30 % erwartet. Buche die Abschreibung.', lines:[['D','Write-down on receivables','1,500'],['C','Doubtful receivables','1,500']]},
{id:'rw-12', topic:'bk-11', src:'Textbook', text:'Eine Forderung über 1.190 € (inkl. 19 % USt) wird nach der Insolvenz des Kunden endgültig uneinbringlich.', lines:[['D','Write-down on receivables','1,000'],['D','VAT','190'],['C','Trade receivables','1,190']]},
{id:'rw-13', topic:'bk-5', src:'Textbook', text:'Ein Einzelkaufmann bringt sein privates Auto (Marktwert 18.000 € netto) ins Unternehmen ein.', lines:[['D','Vehicles','18,000'],['C','Private','18,000']]},
{id:'rw-14', topic:'bk-5', src:'Textbook', text:'GmbH: Die Gesellschafter beschließen, von 100.000 € Jahresüberschuss (bereits auf Gewinnverwendung / Profit appropriation) 40.000 € per Bank auszuschütten und den Rest zu thesaurieren.', lines:[['D','Profit appropriation','100,000'],['C','Bank','40,000'],['C','Retained earnings','60,000']]},
{id:'rw-15', topic:'bk-13', src:'Textbook', text:'Ein Unternehmen hat einen Verlustauftrag; das Produkt ist noch nicht hergestellt, der erwartete Verlust beträgt 8.000 €. Buche am Jahresende.', lines:[['D','Other business expenses','8,000'],['C','Provision','8,000']]}
);
