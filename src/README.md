# Sources of the S2/2 Study Hub (Math II)

`index.html` in the repo root is generated — edit the files here, then run `python3 build.py`.

- `data_topics.js` — 7 chapters: summary, flashcards, quiz (math as `$…$`, KaTeX), cheat sheet
- `data_exams.js` — interactive exams 2022–2025 (parts, hints, check regexes, tableau solutions)
- `bank.js` — problem bank metadata; images in `../bank/` come from `bank.py` (needs `bbox.html`: `pdftotext -bbox Exams.pdf bbox.html`)
- `app.js` — Math II pages (exam prep engine, bank, mock exam, matrix lab, drills, plan overrides)
- `extra.css` — styles added on top of the S2/1 design
- `engine-s21.html` — frozen copy of the S2/1 hub; `build.py` takes CSS, highlighter, search, flashcards, quiz and plan from it
