#!/usr/bin/env python3
"""Assemble the S2/2 (Math II) study hub from the S2/1 engine + Math II data/app code."""
import os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'engine-s21.html')  # frozen copy of the S2/1 hub (engine + design)
OUT = os.path.join(HERE, '..', 'index.html')
src = open(SRC, encoding='utf-8').read()
L = src.split('\n')

def find(pred, start=0):
    for i in range(start, len(L)):
        if pred(L[i]): return i
    raise SystemExit('marker not found')

style_end = find(lambda l: l.strip() == '</style>')
head_end = find(lambda l: l.strip() == '</head>')
script_start = find(lambda l: l.strip() == '<script>', head_end)
sec = lambda name: find(lambda l: l.startswith('/* ====') and name in l, script_start)
i_theme = sec(' THEME ')
i_subj = sec('SUBJECT META')
i_route = sec('APP STATE / ROUTING')
i_obpages = sec('OB PAGES')
i_init = sec(' INIT ')
i_script_end = find(lambda l: l.strip() == '</script>', i_init)

head = '\n'.join(L[:style_end])
head += '\n' + open(os.path.join(HERE, 'extra.css'), encoding='utf-8').read() + '\n' + '\n'.join(L[style_end:head_end])
head = re.sub(r'<title>.*?</title>', '<title>S2/2 Study Hub</title>', head)
katex = ('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">\n'
         '<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>\n')
head += '\n' + katex + L[head_end]

body = '\n'.join(L[head_end+1:script_start])
reps = [
    ('<h1>S2/1 Study Hub</h1>', '<h1>S2/2 Study Hub</h1>'),
    ('Semester 2 · Block 1', 'Semester 2 · Block 2'),
    ("selectSubject('ob',true)", "selectSubject('m2',true)"),
    ('Search topics, keywords, theories…', 'Search topics, formulas, exam tasks…'),
]
for a, b in reps:
    assert a in body, a
    body = body.replace(a, b)
body = re.sub(r'(<div class="kicker">Semester 2 · Block 2</div>\s*<h1>Your Study Hub</h1>\s*<p>)(.*?)(</p>)',
              r'\1Mathematics II — Linear Algebra: every chapter, the four newest exams fully interactive, 150 original exam tasks, a 90-minute mock exam and a step-by-step matrix lab. Bookkeeping & Accounting: every chapter of Prof. Cloer\'s slides with summaries, quizzes and a booking entry trainer.\3', body, flags=re.S)
body = re.sub(r'(<div class="home-strip">)(.*?)(</div>)', r'\1Built from the real slides, exercises and past exams. Math II: newest exams first — they are the most relevant.\3', body, flags=re.S)

engine_a = '\n'.join(L[i_theme:i_subj])            # theme, icons, helpers
engine_b = '\n'.join(L[i_route:i_obpages])         # routing … flashcards, quiz, cheat, topic builder
patches = [
    ('<div class="fc-body">${esc(c.q)}</div>', '<div class="fc-body">${mathText(c.q)}</div>'),
    ('${fcFormat(c.a)}', '${fcFormatM(c.a)}'),
    ('<div class="qtitle">${esc(q.q)}</div>', '<div class="qtitle">${mathText(q.q)}</div>'),
    ('<span>${esc(o)}</span></div>', '<span>${mathText(o)}</span></div>'),
    ("container.querySelector('#qexp').textContent = q.exp;", "container.querySelector('#qexp').innerHTML = mathText(q.exp);"),
]
for a, b in patches:
    assert a in engine_b, a
    engine_b = engine_b.replace(a, b)

subjects = """/* ============================================================ SUBJECT META ============================================================ */
const SUBJECTS = [
  {id:'m2', label:'Mathematics II — Linear Algebra', short:'Vectors, matrices, Gauss, inverse, determinants, optimization and the simplex method.', color:'m2'},
  {id:'bk', label:'Bookkeeping & Accounting', short:'Double-entry bookkeeping, VAT, valuation, depreciation, deferrals and provisions under German GAAP.', color:'bk'}
];
"""
data = ''.join(open(os.path.join(HERE, f), encoding='utf-8').read() + '\n' for f in ('data_topics.js', 'data_exams.js', 'bank.js', 'data_bk.js'))
app = ''.join(open(os.path.join(HERE, f), encoding='utf-8').read() + '\n' for f in ('app.js', 'app_bk.js'))
init = """
/* ============================================================ INIT ============================================================ */
buildM2Home();
M2_TOPICS.forEach(t=>buildTopicPage(t));
M2_EXAMS.forEach(e=>buildExamPage(e));
buildM2Bank(); buildM2Sim(); buildM2Cheat(); buildM2Lab(); buildM2Drill();
buildBKHome(); BK_TOPICS.forEach(t=>buildTopicPage(t)); buildBKCheat(); buildBKTrainer();
buildStudyPlan();
buildSubjectSwitch();
buildHomeCards();
initHomeSearch();
initHighlighting();
hlIslandEl();
updateHlIslandVisibility();
selectSubject('m2', false);
navTo('home');
"""
tail = '\n'.join(L[i_script_end:])
html = '\n'.join([head, body, L[script_start], engine_a, subjects, data, engine_b, app, init, tail])
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w', encoding='utf-8').write(html)
print('wrote', OUT, len(html)//1024, 'KB')
