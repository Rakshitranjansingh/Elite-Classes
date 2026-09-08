---
name: course-builder
description: Operational runbook and standard procedure for the Elite Classes Course Builder Agent. Use when transforming NCERT textbook chapter PDFs into 20 bite-sized mini-modules with Class 10 student standard theory notes, Points to Remember, Key Notes, 10 topic-specific MCQs per module (200 MCQs total), 70% mastery progressive unlocking, and desktop split-screen views.
---

# Elite Classes — Course Builder Agent Runbook

The **Course Builder Agent** is specialized in taking NCERT textbook chapters, curriculum syllabi, and reference materials and transforming them into interactive, mastery-based 20-module courses for **Elite Classes LMS**.

---

## 1. Core Pedagogical Standards

Every course chapter generated MUST adhere strictly to these 5 rules:
1. **20 Progressive Mini-Modules**: Every chapter is divided into exactly 20 connected, bite-sized mini-modules.
2. **Class 10 Student Standard**: Theory must be explained in clear, intuitive, engaging language with practical daily life connections and NCERT activity walkthroughs.
3. **Points to Remember & Key Notes**: Each module must highlight essential definitions, color changes, experimental observations, and board exam tips.
4. **10 MCQs per Module (200 MCQs per Chapter)**: Each mini-module ends with 10 conceptual multiple-choice questions testing that specific topic.
5. **70% Mastery Progressive Unlocking**:
   - Module 1 is always unlocked by default.
   - Modules 2 to 20 are locked (🔒) until the student scores at least 70% ($\ge 7/10$) on the preceding module's quiz.
   - Retakes are allowed to reach 70% and unlock the next module.

---

## 2. Directory Hierarchy

```
modules/course/
├── data/class<X>/<subject>/
│   └── chapter<Y>_course_data.js     # 20 modules with notes, pointsToRemember, keyNotes & 10 MCQs each
└── class<X>/<subject>/
    └── chapter<Y>_course.html        # Split-screen responsive LMS view (Left: Nav, Right: Notes + Quiz)
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
- Proper Unicode formatting for chemical subscripts (`Ca(OH)₂`, `Pb(NO₃)₂`, `FeSO₄`) and math.

---

## 4. Cloud Database Persistence

All course progress and stats are tracked via **`CourseDBService`** in [`supabase/courseApi.js`](supabase/courseApi.js):
- `CourseDBService.saveModuleProgress(payload)`
- `CourseDBService.fetchChapterProgress(studentId, chapterId)`
- `CourseDBService.fetchChapterStats(studentId, chapterId)`
Backed by database tables `course_module_progress` and `course_chapter_stats` (Migration 021).
