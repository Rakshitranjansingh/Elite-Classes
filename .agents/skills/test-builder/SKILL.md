---
name: test-builder
description: Operational runbook and standard procedure for the Elite Classes Test Builder Agent. Use when creating, scaffolding, or generating chapter-wise CBT test series, assessments, and portals across any class and subject (Mathematics, Science, Social Science, Physics, Chemistry, Biology, English, etc.) from NCERT or curriculum PDFs.
---

# Elite Classes — Test Builder Agent Runbook

The **Test Builder Agent** is specialized in taking NCERT textbook chapters, curriculum syllabi, and reference materials and transforming them into exhaustive, enterprise-grade 100-Question Computer-Based Testing (CBT) chapter assessments and interactive subject portals for **Elite Classes**.

---

## 1. End-to-End Autonomous Operating Flow

Whenever a user requests to build or add tests for a new subject or class, follow this strict 6-phase procedure:

```
┌────────────────────────────────────────────────────────┐
│  PHASE 1: INQUIRE / DETECT TARGET SUBJECT & CLASS      │
│  - Prompt user for Class (e.g. 10) and Subject (e.g.   │
│    Mathematics, Social Science, Physics, etc.)         │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│  PHASE 2: VERIFY / SCAFFOLD DIRECTORY STRUCTURE        │
│  - Check: modules/testseries/data/class<X>/<subject>/  │
│  - If absent, run scaffold_subject.js CLI helper       │
│  - Creates ncert/ holding folder & subject portal HTML │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│  PHASE 3: USER NCERT PDF UPLOAD & CONFIRMATION         │
│  - Instruct user to place chapter PDFs in ncert/ dir   │
│  - Wait for user confirmation that PDFs are added      │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│  PHASE 4: EXHAUSTIVE CHAPTER ANALYSIS & GENERATION     │
│  - Read chapter text, activities, "Do You Know?",      │
│    in-text questions, summary, exercises               │
│  - Author 100-Question Assessment (5-tier breakdown)   │
│  - Strict Unicode typography (subscripts, math symbols)│
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│  PHASE 5: AUTOMATED VALIDATION (validate_test.js)      │
│  - Run node validate_test.js <assessment.js>           │
│  - Verify 100Q, 50E/10M/10H/20T/10VH, options, keys   │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│  PHASE 6: HUB INTEGRATION & CBT VERIFICATION           │
│  - Link portal in modules/testseries/data/class<X>/... │
│  - Verify shared modules/testseries/cbtPlayer.js load  │
└────────────────────────────────────────────────────────┘
```

---

## 2. Phase-by-Phase Instructions

### Phase 1: Inquire / Detect Target Subject
If the user hasn't specified both the class and subject, politely ask:
> *"Which Class (e.g., Class 6 to 12) and Subject (e.g., Mathematics, Social Science, Physics, English) would you like to build test series for?"*

### Phase 2: Check & Scaffold Folder Structure
1. Target Directory Pattern:
   `modules/testseries/data/class<class_num>/<subject_slug>/`
   - `ncert/` (Stores the uploaded textbook chapter PDFs)
   - `<subject_slug>_<class_num>.html` (Interactive Subject Portal)
   - `chapter<N>_<name>.js` (100-Question chapter test datasets)

2. If the directory does not exist, run the scaffolder:
   ```bash
   node .agents/skills/test-builder/scripts/scaffold_subject.js --class <CLASS_NUM> --subject <SUBJECT_NAME> --chapters <COUNT>
   ```
   *Example:*
   ```bash
   node .agents/skills/test-builder/scripts/scaffold_subject.js --class 10 --subject mathematics --chapters 14
   ```

### Phase 3: Guide User to Upload NCERT Chapter PDFs
Immediately provide the exact path for the user:
> *"I have prepared the subject structure and portal! Please place the chapter PDF files into:*
> `modules/testseries/data/class<X>/<subject>/ncert/`
> *(e.g. `jemh101.pdf` for Chapter 1, `jemh102.pdf` for Chapter 2).*
> *Once added, confirm to proceed with test generation."*

### Phase 4: Exhaustive Content Extraction & Assessment Authoring
Once PDFs are present, inspect each chapter PDF thoroughly:
1. **Exhaustive NCERT Source Coverage**:
   - Cover every single section, definition, derivation, table, experiment/activity, callout box, summary bullet, in-text question, and end-of-chapter exercise.
2. **Mandatory 100-Question Difficulty Breakdown**:
   - 🟢 **50 Easy (Q1–Q50)**: Core concepts, direct definitions, basic formulas, direct recall.
   - 🟡 **10 Medium (Q51–Q60)**: Single-step equations, simple calculations, direct concept application.
   - 🟠 **10 Hard (Q61–Q70)**: Multi-step problems, reasoning, apparatus/diagram interpretation.
   - 🟣 **20 Tricky (Q71–Q90)**: Distractor-heavy options, common student pitfalls, footnote details.
   - 🔴 **10 Very Hard / Olympiad (Q91–Q100)**: Multi-concept synthesis, Exemplar/Olympiad deductions, advanced numerical/analytical reasoning.
3. **Assessment Object Parameters**:
   - `id`: `ts_c<CLASS>_<SUBJ_4LETTERS>_ch<N>` (e.g. `ts_c10_math_ch1`)
   - `duration_mins`: `90` (or `120` for intensive math/physics)
   - `total_marks`: `400`
   - `passing_marks`: `160`
   - `negative_marking`: `1.00`
   - `questions_count`: `100`
4. **Export Paradigm**:
   ```javascript
   if (typeof window !== 'undefined') {
       if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
       window.EliteTestRegistry.push(Class10MathChapter1FullBank);
   }
   if (typeof module !== 'undefined' && module.exports) {
       module.exports = Class10MathChapter1FullBank;
   }
   ```

### Phase 5: Automated Quality & Schema Validation
Run the validator on every generated assessment file:
```bash
node .agents/skills/test-builder/scripts/validate_test.js modules/testseries/data/class<X>/<subject>/chapter<N>_<name>.js
```
The validator guarantees:
- Exactly 100 questions exist
- Exact 5-tier distribution (50/10/10/20/10)
- Options A, B, C, D are present and populated
- `correct_option` is valid ('A', 'B', 'C', or 'D')
- Explanations exist for every question
- Proper scientific/mathematical typography is used

### Phase 6: Portal & Class Hub Integration
1. **Universal CBT Player Parity**:
   Every subject portal MUST link to the global CBT player:
   `<script src="../../../cbtPlayer.js"></script>`
2. **Unified Authentication Session**:
   Every subject portal must inherit `ec_active_student`, `ec_user_role`, and `ec_student_id`. No isolated login prompts!
3. **Class Hub Subject Card**:
   Update `modules/testseries/data/class<X>/testseries_class_<X>.html`:
   - Change the subject card badge from 🟡 `Scheduled / Coming Soon` to 🟢 `Active & Live`.
   - Update `href` to point directly to `<subject>/<subject>_<X>.html`.

---

## 3. Strict Typography & Formatting Guidelines

Never use raw ASCII shortcuts for mathematical and scientific notation:

| Field | ❌ Incorrect Format | ✅ Correct Unicode Format |
| :--- | :--- | :--- |
| **Chemical Formulas** | `H2O`, `Ca(OH)2`, `SO4^2-`, `Fe3O4` | `H₂O`, `Ca(OH)₂`, `SO₄²⁻`, `Fe₃O₄` |
| **Chemical Reactions** | `A + B -> C + D (gas)` | `A + B → C + D↑` |
| **Precipitation / Heat** | `AgCl (ppt)`, `heat` | `AgCl↓`, `Δ` |
| **Multiplication / Division** | `*`, `x`, `/` | `×`, `÷` |
| **Exponents / Powers** | `x^2`, `y^3`, `10^-5` | `x²`, `y³`, `10⁻⁵` |
| **Roots & Geometry** | `sqrt(3)`, `pi`, `theta`, `degree` | `√3`, `π`, `θ`, `°`, `∠ABC`, `△PQR` |
| **Inequalities** | `<=`, `>=`, `!=`, `~=` | `≤`, `≥`, `≠`, `≈` |

---

## 4. Reusable Tools Reference

- **Scaffolder**: [scaffold_subject.js](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/.agents/skills/test-builder/scripts/scaffold_subject.js)
- **Validator**: [validate_test.js](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/.agents/skills/test-builder/scripts/validate_test.js)
- **Template**: [chapter_test_template.js](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/.agents/skills/test-builder/templates/chapter_test_template.js)
- **Global CBT Player**: [cbtPlayer.js](file:///c:/Users/raksh/Desktop/Projects/EliteClasses/modules/testseries/cbtPlayer.js)
