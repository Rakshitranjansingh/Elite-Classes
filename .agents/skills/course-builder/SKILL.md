---
name: course-builder
description: Operational runbook and standard procedure for the Elite Classes Course Builder Agent. Use when transforming curriculum textbook chapters into 20 bite-sized mini-modules with student standard theory notes, Points to Remember, Key Notes, 10 topic-specific MCQs per module (200 MCQs total), 70% mastery progressive unlocking, and desktop split-screen views.
---

# Elite Classes — Course Builder Agent Runbook

The **Course Builder Agent** is specialized in transforming textbook chapters, curriculum syllabi, and reference materials into interactive, mastery-based 20-module courses for **Elite Classes LMS**.

---

## 1. Core Pedagogical Standards & Directives

Every course chapter generated MUST adhere strictly to these 8 core rules:
1. **20 Progressive Mini-Modules (Internal Data Structure)**: Every chapter is structured into exactly 20 connected, bite-sized mini-modules in data files.
2. **Clean User-Facing Wording (Anti-Boilerplate)**:
   - **STRICT MANDATE**: Do NOT expose technical boilerplate counters like *"20 Progressive Mini-Modules per Chapter • 10 MCQs/Module"* or raw module numbers in hero headers, subtitles, card badges, or page titles.
   - Use clean, student-centric wording:
     - Hero Subtitle: *"Comprehensive Chapter Curriculum • Concept Theory & Interactive Mastery Assessments"*
     - Card Badges: `Complete Theory`, `Interactive Quizzes`, `Mastery Unlocking`
     - Quiz Header: `📝 Topic Mastery Assessment` (never expose `(10 MCQs)` or `(10 Questions)`)
     - Topic Progress: `X / 20 Topics Mastered`
3. **Mandatory Clickable Header Logo**:
   - Every course page (Class Hubs, Subject Hubs, and Course Players) MUST include an interactive brand logo link in the top header (`<a href="...student_home.html" ...>`) allowing instant 1-click return to the Student Portal.
4. **Class Standard & Depth**: 
   - Theory must be explained in clear, intuitive, engaging language with practical daily life connections and activity walkthroughs.
   - Strictly NO placeholder notes, repetitive text, or nonsensical distractors (e.g., "color of the notebook", "day of the week").
   - Balanced chemical equations with proper Unicode subscripts (`Ca(OH)₂`, `Pb(NO₃)₂`, `Fe₃O₄`, `SO₄²⁻`), reaction arrows (`→`, `⇌`, `↑`, `↓`), and physical formulas ($V = IR$, $P = VI$, $R = \rho L/A$).
5. **Zero External Publisher Mentions**:
   - **MANDATORY**: Strictly remove any mention of "NCERT" anywhere in course notes, titles, points to remember, key notes, or questions. All content must present as Elite Classes' native curriculum.
6. **Points to Remember & Key Notes Format**:
   - `pointsToRemember`: Array of at least 3 high-yield takeaways.
   - `keyNotes`: Strictly an **array of strings** (`Array.isArray(mod.keyNotes) && mod.keyNotes.length >= 1`), NOT a plain string.
7. **10 High-Yield MCQs per Module (200 MCQs per Chapter)**:
   - Each mini-module ends with exactly 10 conceptual multiple-choice questions testing that specific topic.
   - 4 plausible options, an exact answer matching one option, and a clear explanation.
8. **70% Mastery Progressive Unlocking**:
   - Module 1 is always unlocked by default.
   - Modules 2 to 20 are locked (🔒) until the student scores at least 70% ($\ge 7/10$) on the preceding module's quiz.
   - Retakes are allowed to reach 70% and unlock the next module.

---

## 2. Directory Hierarchy & Navigation Architecture

The course system operates across 3 synchronized levels:
- **Level 2 (Portal Gateway)**: `student_home.html` with direct action button calling `navigateToStudentCourses()`.
- **Level 3 (Master Class Course Hubs)**:
  - Class 10: `modules/course/class10/courses_class_10.html`
  - Civil Services: `modules/course/civilservices/courses_civilservices.html`
- **Level 4 (Subject Hubs & Player)**:
  - `modules/course/<class_slug>/<subject>/<subject>_course_hub.html`
  - `modules/course/<class_slug>/<subject>/course_player.html?chapter=N`
  - `modules/course/data/<class_slug>/<subject>/chapter<N>_course_data.js`

```
modules/course/
├── class10/
│   ├── courses_class_10.html             # Master Class 10 Course Hub
│   └── <subject>/
│       ├── <subject>_course_hub.html     # Subject Chapters Hub (Clickable Logo)
│       └── course_player.html            # Split-screen player (?chapter=N)
├── civilservices/
│   ├── courses_civilservices.html        # Master Civil Services Course Hub
│   └── <subject>/
│       ├── <subject>_course_hub.html     # Subject Chapters Hub (Clickable Logo)
│       └── course_player.html            # Split-screen player (?chapter=N)
└── data/<class_slug>/<subject>/
    └── chapter<Y>_course_data.js         # 20 modules with notes, pointsToRemember, keyNotes & 10 MCQs each
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

