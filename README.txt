SUHANI MBBS STUDY WEBSITE — MASTER PROJECT & DEPLOYMENT GUIDE

1. PROJECT FILES & STRUCTURE
Keep all HTML files and the data/ folder together in the project root:
- index.html — Main homepage, password gate (SuPa), 43-book Google Drive library, study flowchart, syllabus tracker, and love note.
- anatomy.html — Anatomy IMP classroom (reads data/anatomy.json; progress saved in localStorage key 'suhani_anatomy_batch1_done').
- neuroanatomy.html — Neuroanatomy IMP classroom (reads data/neuroanatomy.json; progress saved in localStorage key 'suhani_neuroanatomy_batch3_done').
- classroom.html — Starter interactive classroom (progress saved in localStorage key 'suhani_lesson_done_v1').
- tests.html — Practice and mock tests with instant explanations.
- SYLLABUS_COVERAGE.md — Master syllabus coverage tracker across FIRST YEAR IMP LIST.pdf.
- data/anatomy.json — Complete 106-lesson Anatomy IMP dataset covering 100% of Head & Neck, Upper Limb, Thorax, Abdomen & Pelvis, Lower Limb, General Anatomy, Histology, Embryology, and Genetics (Batches 1–10).
- data/neuroanatomy.json — Complete 17-entry Neuroanatomy checklist and all 16 unique interactive lessons (Batch 3).
- data/lessons.json — Starter classroom lesson dataset.

2. DEPLOYMENT (GITHUB PAGES & NETLIFY)
- Upload the entire root folder (including index.html, anatomy.html, neuroanatomy.html, classroom.html, tests.html, and the data/ directory) to your repository root or Netlify drop zone.
- Do not deploy HTML files individually without the data/ folder, as pages fetch JSON datasets via relative paths.

3. MEDICAL DISCLAIMER
Explanatory teaching notes and practice MCQs are supplementary study support and do not replace prescribed textbooks, dissection teaching, or faculty guidance.
