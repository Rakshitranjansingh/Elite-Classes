---
name: course-builder
description: Operational runbook and standard procedure for the Elite Classes Course Builder Agent. Use when transforming NCERT textbook chapter PDFs into 20 bite-sized mini-modules with Class 10 student standard theory notes, Points to Remember, Key Notes, 10 topic-specific MCQs per module (200 MCQs total), 70% mastery progressive unlocking, and desktop split-screen views.
---

# Elite Classes — Course Builder Agent Runbook

The **Course Builder Agent** is specialized in transforming textbook chapters, curriculum syllabi, and reference materials into interactive, mastery-based 20-module courses for **Elite Classes LMS**.

---

## 1. Core Pedagogical Standards & Directives

Every course chapter generated MUST adhere strictly to these 6 core rules:
1. **20 Progressive Mini-Modules**: Every chapter is divided into exactly 20 connected, bite-sized mini-modules.
2. **Class 10 Student Standard & Anti-Boilerplate**: 
   - Theory must be explained in clear, intuitive, engaging language with practical daily life connections and activity walkthroughs.
   - Strictly NO placeholder notes, repetitive text, or nonsensical distractors (e.g., "color of the notebook", "day of the week").
   - Balanced chemical equations with proper Unicode subscripts (`Ca(OH)₂`, `Pb(NO₃)₂`, `Fe₃O₄`, `SO₄²⁻`), reaction arrows (`→`, `⇌`, `↑`, `↓`), and physical formulas ($V = IR$, $P = VI$, $R = \rho L/A$).
3. **Zero External Publisher Mentions**:
   - **MANDATORY**: Strictly remove any mention of "NCERT" anywhere in course notes, titles, points to remember, key notes, or questions. All content must present as Elite Classes' native curriculum.
4. **Points to Remember & Key Notes Format**:
   - `pointsToRemember`: Array of at least 3 high-yield takeaways.
   - `keyNotes`: Strictly an **array of strings** (`Array.isArray(mod.keyNotes) && mod.keyNotes.length >= 1`), NOT a plain string.
5. **10 MCQs per Module (200 MCQs per Chapter)**:
   - Each mini-module ends with exactly 10 conceptual multiple-choice questions testing that specific topic.
   - 4 plausible options, an exact answer matching one option, and a clear explanation.
6. **70% Mastery Progressive Unlocking**:
   - Module 1 is always unlocked by default.
   - Modules 2 to 20 are locked (🔒) until the student scores at least 70% ($\ge 7/10$) on the preceding module's quiz.
   - Retakes are allowed to reach 70% and unlock the next module.

---

## 2. Directory Hierarchy & Data Schema

```
modules/course/
├── data/class<X>/<subject>/
│   └── chapter<Y>_course_data.js     # 20 modules with notes, pointsToRemember, keyNotes & 10 MCQs each
└── class<X>/<subject>/
    ├── course_player.html            # Dynamic split-screen player (?chapter=N)
    └── science_course_hub.html       # 13-chapter progress dashboard
```

### Root Object Schema:
```javascript
const COURSE_CHAPTER_<Y>_<SUBJECT> = {
    "chapterId": "c10_sci_ch<Y>",      // e.g. "c10_sci_ch1" (matches progress key)
    "chapterNumber": <Y>,              // Integer 1 to 13
    "chapterTitle": "<Title>",
    "subject": "Science",
    "className": "Class 10",
    "totalModules": 20,
    "modules": [ /* 20 module objects */ ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_<Y>_<SUBJECT>;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_<Y>_<SUBJECT>;
}
```

---

## 3. Automated Validation CLI

Before shipping or integrating any course chapter, run the deterministic validator:

```bash
node .agents/skills/course-builder/scripts/validate_course.js <path-to-course-chapter-data.js>
```

This enforces:
- Exactly 20 modules per chapter.
- Required fields (`id`, `moduleNumber`, `title`, `tagline`, `theoryHtml`, `pointsToRemember`, `keyNotes`, `questions`).
- Exactly 10 questions with 4 unique options, a valid answer matching one option, and an explanation.
- Proper Unicode formatting for chemical subscripts and math symbols.
- Array type verification for `keyNotes`.

---

## 4. Cloud Database Persistence

All course progress and stats are tracked via **`CourseDBService`** in [`supabase/courseApi.js`](supabase/courseApi.js):
- `CourseDBService.saveModuleProgress(payload)`
- `CourseDBService.fetchChapterProgress(studentId, chapterId)`
- `CourseDBService.fetchChapterStats(studentId, chapterId)`
- Progress key pattern: `ec_course_prog_${studentId}_${chapterId}`
Backed by database tables `course_module_progress` and `course_chapter_stats` (Migration 021).

