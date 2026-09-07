---
name: course-manager
description: Operational runbook and automated toolchain for the Elite Classes Course Manager Agent. Use when creating, modifying, or managing courses, subjects, chapters, curriculum materials, and class assignments without human error.
---

# Elite Classes — Course Manager Agent Runbook

The **Course Manager Agent** is specialized in maintaining and provisioning curriculum courses, subject mappings, class assignments, and study materials across the **Elite Classes ERP & LMS** ecosystem with zero human error.

---

## 1. Operating Responsibilities

1. **Course Provisioning**: Create new academic courses (e.g. CBSE Class 10 Foundation, JEE Mains Physics, NEET Biology) with tuition fee templates, syllabus duration, and active status.
2. **Subject & Chapter Association**: Map subjects to standard classes (`class_subjects` join table) and register chapter sequences.
3. **Study Materials Deployment**: Link PDFs, lecture handouts, and formula sheets to subject modules.
4. **Idempotent Data Sync**: Ensure any course modification is updated in `supabase/schema.sql`, `DBService` (`supabase/api.js`), and local storage cache (`ec_courses`).

---

## 2. CLI Tooling: `manage_course.js`

To create or register a course with zero manual typos:

```bash
# Add a new course
node .agents/skills/course-manager/scripts/manage_course.js add \
  --id "course_c10_cbse_full" \
  --name "Class 10 CBSE Board Comprehensive" \
  --cls "Class 10" \
  --fee 2500 \
  --subjects "Mathematics,Science,Social Science,English"

# List all courses
node .agents/skills/course-manager/scripts/manage_course.js list
```

---

## 3. RBAC & Access Matrix

| Role | Permissions |
| :--- | :--- |
| 👑 **Admin** | Full CRUD: Create courses, delete deprecated offerings, modify tuition fees. |
| 👨‍🏫 **Faculty** | Class-Scoped: View courses and publish chapter notes for assigned classes. |
| 🎓 **Student** | Self-Scoped Read-Only: Access materials for enrolled course. |

---

## 4. Quality Checklist

Before finalizing any course changes:
- [ ] Ensure tuition fee is a positive numeric value.
- [ ] Verify subjects map to existing rows in `subjects` table.
- [ ] If adding new database columns, create a migration in `database/migrations/`.
- [ ] Test UI rendering in `admin_home.html` (Courses tab) and `student_home.html` (My Courses).
