---
name: civil-services-course
description: Operational runbook and standard procedure for the Elite Classes Civil Services Course Agent. Use when building, scaffolding, and managing UPSC & State PCS (BPSC 72nd CCE, UPPCS, JPSC) civil services interactive courses, GS revision hubs, Bihar Special curriculum modules, and 70% mastery progressive assessments.
---

# Elite Classes — Civil Services Course Agent Runbook

The **Civil Services Course Agent** is specialized in scaffolding, engineering, and maintaining advanced Civil Services courses (UPSC Civil Services, BPSC 72nd CCE, State PCS) across the **Elite Classes LMS** ecosystem with zero human error.

---

## 1. Operating Responsibilities

1. **Civil Services Curriculum Architecture**: Structure comprehensive GS Prelims & Mains curriculum spanning:
   - General Science (Physics, Chemistry, Biology)
   - Indian History & State History (Ancient, Medieval, Modern & Freedom Struggle)
   - Indian Polity & Governance (Constitution, State Administration, Panchayati Raj)
   - Geography of India & State Geography (Physical, River Systems, Agriculture, Resources)
   - Indian Economy & State Development (Budget, Economic Survey, Welfare Schemes)
   - State-Specific Modules (e.g. Bihar Special: Demographics, Heritage, Art, Census)
   - General Mental Ability & Reasoning (CSAT / Aptitude)
   - Current Affairs & Contemporary Issues
2. **Master Course Hub Provisioning**: Generate responsive, glassmorphic course hubs (`bpsc_72_hub.html`, `revision_course_hub.html`) under `modules/course/civilservices/<Course_Folder>/`.
3. **Subject Chapter Hubs**: Build subject-level chapter hubs (`<subject>_course_hub.html`) with syllabus progress bars, real-time completion status, and dynamic links to `course_player.html`.
4. **20-Module Progressive Mastery Standard**:
   - Each chapter contains exactly 20 progressive mini-modules.
   - 10 topic-tailored conceptual MCQs per module (200 MCQs per chapter).
   - 70% score threshold to unlock subsequent modules.
5. **Zero External Publisher Mentions**: Prohibit and eliminate any mention of external third-party publishers or generic placeholders.
6. **Clickable Header Logo**: Ensure all hubs and course pages wrap the brand logo in an anchor linking directly to `student_home.html`.

---

## 2. Directory Hierarchy & Routing Conventions

All Civil Services courses reside in `modules/course/civilservices/`:

```
modules/course/civilservices/
├── courses_civilservices.html            # Master Civil Services Catalog (Lists all programs)
├── revisionCourse/                       # General Studies Fast-Track Revision Program
│   ├── revision_course_hub.html          # Revision Program Master Hub
│   └── physics/
│       ├── physics_course_hub.html       # Physics Chapter Hub
│       └── data/                         # Chapters 1-7 data files (20 modules, 200 MCQs each)
└── BPSC_72/                              # BPSC 72nd Combined Competitive Exam Course
    ├── bpsc_72_hub.html                  # BPSC 72 Master Course Hub
    └── physics/                          # General Science Physics Module
        ├── physics_course_hub.html       # Physics Chapter Hub
        └── data/                         # Chapters 1-7 data files
```

### URL Parameter Standards for `course_player.html`:
```
modules/course/course_player.html?class=civilservices&course=<Course_Folder>&subject=<subject_name>&chapter=<chapter_num>
```
Example:
`modules/course/course_player.html?class=civilservices&course=BPSC_72&subject=physics&chapter=1`

---

## 3. Automated Validation Script: `validate_civil_course.js`

Run the automated course validator to verify structure, clickable logos, and data fidelity:

```bash
node .agents/skills/civil-services-course/scripts/validate_civil_course.js
```

---

## 4. Quality Checklist

Before finalizing any Civil Services course changes:
- [ ] Brand logo in top navigation links to `student_home.html`.
- [ ] Back button correctly navigates to parent catalog (`courses_civilservices.html`) or course hub.
- [ ] Catalog in `courses_civilservices.html` is updated with active course card and program count.
- [ ] Chapter course data files export to both `window.COURSE_CHAPTER_DATA` and `module.exports`.
- [ ] All equations and formulas use proper Unicode symbols (`Ca(OH)₂`, `V = IR`, `Fe₃O₄`).
- [ ] Tested in `tests/test_clickable_logos.js` and civil services course test suites.
