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

6. **Progressive Test Activation & Portal UI Locking**:
   - **Chapter 1 Active, Chapters 2+ Inactive by Default**: New subject test series must deploy Chapter 1 as `published` and all subsequent chapters as `inactive` to allow faculty/administrators to release assessments progressively.
   - **Portal UI Lock**: Inactive chapters must display `🔒 Inactive / Locked` badges and disabled `🔒 Locked by Admin` buttons.
   - **Guarded Execution**: `enrollInTest` and `launchTest` must verify active status before allowing student entry.
   - **Cloud Sync**: Portals must execute `syncCloudTestStatuses()` on page load to reflect real-time admin status changes from Supabase.

7. **Database Migration & Admin Switchboard Registration**:
   - Every subject deployment must include a migration script in `database/migrations/` setting Ch 1 to `'published'` and Ch 2+ to `'inactive'`.
   - Update `js/adminTestSeries.js` with the subject's test metadata array and ensure subject filter tabs in `admin_home.html` allow 1-click and bulk activation/deactivation.
