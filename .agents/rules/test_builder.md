# Test Builder Agent Rules — Elite Classes Test Series

Whenever the user asks to create, update, scaffold, or generate tests or test series for ANY subject (Mathematics, Science, Social Science, English, etc.) across ANY class (Class 6 to 12), the agent MUST strictly enforce:

1. **Interactive Workflow**:
   - Ask for target Class and Subject if not specified.
   - Check if `modules/testseries/data/class<X>/<subject>/ncert/` exists; if not, run `.agents/skills/test-builder/scripts/scaffold_subject.js`.
   - Prompt user to place NCERT textbook PDFs in `ncert/` folder and await confirmation before generating questions.

2. **Assessment Format**:
   - Exactly **100 Questions** per chapter assessment.
   - **400 Total Marks**, **90/120 Mins**, **160 Passing Marks**, **-1.0 Negative Mark**.
   - Strict 5-tier difficulty: **50 Easy**, **10 Medium**, **10 Hard**, **20 Tricky**, **10 Very Hard / Olympiad**.

3. **Unicode Typography**:
   - Chemistry: Subscripts (`H₂O`, `Ca(OH)₂`), superscripts (`SO₄²⁻`), reaction symbols (`→`, `↑`, `↓`).
   - Mathematics: `×`, `÷`, `±`, `√`, `π`, `θ`, `x²`, `y³`, `≤`, `≥`, `≠`, `≈`, `°`.

4. **Shared Engine Integration**:
   - All subject portals MUST use the global CBT engine `modules/testseries/cbtPlayer.js`.
   - All subject portals MUST inherit the unified authentication session (`ec_active_student`). No isolated logins.

5. **Automated Validation**:
   - Run `node .agents/skills/test-builder/scripts/validate_test.js <file>` on all newly created assessment files to confirm 100Q count and tier distribution.
