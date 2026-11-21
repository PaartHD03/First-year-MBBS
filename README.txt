SUHANI MBBS STUDY WEBSITE — MASTER PROJECT & DEPLOYMENT GUIDE

1. PROJECT FILES & STRUCTURE
Keep all HTML files and the data/ folder together in the project root:
- index.html — Main homepage, password gate (SuPa), 43-book Google Drive library, study flowchart, syllabus tracker, and love note.
- anatomy.html — Anatomy IMP classroom (reads data/anatomy.json; progress saved in localStorage key 'suhani_anatomy_batch1_done').
- neuroanatomy.html — Neuroanatomy IMP classroom (reads data/neuroanatomy.json; progress saved in localStorage key 'suhani_neuroanatomy_batch3_done').
- classroom.html — Starter interactive classroom (progress saved in localStorage key 'suhani_lesson_done_v1').
- tests.html — Practice and mock tests with instant explanations.
- SYLLABUS_COVERAGE.md — Master syllabus coverage tracker across all 24 pages of FIRST YEAR IMP LIST.pdf (500 total IMP entries: Anatomy 170/170 complete; Physiology 0/190 pending; Biochemistry 0/140 pending).
- data/anatomy.json — Complete 107-lesson Anatomy IMP dataset covering all 9 non-Neuroanatomy units (153/153 PDF entries) plus the 17-entry Neuroanatomy checklist index linking to neuroanatomy.html (Batches 1–10).
- data/neuroanatomy.json — Complete 17-entry Neuroanatomy checklist (10 SN + 7 LAQ) and all 16 unique interactive lessons (Batch 3; Internal Capsule* is listed under both SN and LAQ in the PDF).
- data/lessons.json — Starter classroom lesson dataset (6 lessons: 5 Anatomy + 1 Physiology).

2. RECONCILED LESSON & COVERAGE SUMMARY (BATCHES 1–10)
- Anatomy (Pages 1–6 of FIRST YEAR IMP LIST.pdf): 170 / 170 listed IMP entries covered (100% of Anatomy complete) across 123 unique interactive Anatomy lessons (107 in data/anatomy.json + 16 in data/neuroanatomy.json; 286 MCQs).
  * Batch 1: 10 lessons (Head & Neck 4, Upper Limb 5, Thorax 1)
  * Batch 2: 10 lessons (Abdomen & Pelvis 7, Lower Limb 3)
  * Batch 3: 16 unique Neuroanatomy lessons in data/neuroanatomy.json (covering all 17 Neuroanatomy PDF entries)
  * Batch 4: 9 lessons (Thorax)
  * Batch 5: 13 lessons (Upper Limb)
  * Batch 6: 15 lessons (Head, Neck & Face)
  * Batch 7: 10 lessons (Lower Limb)
  * Batch 8: 13 lessons (Abdomen & Pelvis)
  * Batch 9: 14 lessons (General Anatomy 7 + Histology 7)
  * Batch 10: 13 lessons (Embryology 7 + Genetics 6)
- Overall First Year MBBS IMP Syllabus (Pages 1–24 of FIRST YEAR IMP LIST.pdf): 170 / 500 entries covered (34.0% of total First Year MBBS IMP list). Physiology (190 entries, Pages 7–14) and Biochemistry (140 entries, Pages 15–24) are the next scheduled milestones.

3. DEPLOYMENT (GITHUB PAGES & NETLIFY)
- Upload the entire root folder (including index.html, anatomy.html, neuroanatomy.html, classroom.html, tests.html, and the data/ directory) to your repository root or Netlify drop zone.
- Do not deploy HTML files individually without the data/ folder, as pages fetch JSON datasets via relative paths.

4. MEDICAL DISCLAIMER
Explanatory teaching notes and practice MCQs are supplementary study support and do not replace prescribed textbooks, dissection teaching, or faculty guidance.
