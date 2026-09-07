/* =========================================================================
   ELITE CLASSES — UNIVERSAL CBT ASSESSMENT ENGINE (cbtPlayer.js)
   Self-contained, reusable Computer-Based Testing engine with:
   - Full-Screen Modal Simulation & Live Countdown Timer
   - 100-Question Fast-Navigation Palette with Status Indicators
   - Schema-Resilient Question Parser (supports question/question_text & options array/option_a..d)
   - Instant Automated Evaluation with Negative Marking (-1.0)
   - Dedicated Test Review & Solutions Modal with Interactive Filters (All, Correct, Wrong, Skipped)
   - Offline-First Storage + Cloud Supabase Persistence (DBService)
   ========================================================================= */

const CBTPlayer = {
    activeTest: null,
    currentQIdx: 0,
    userAnswers: {},
    flaggedReview: {},
    timerInterval: null,
    secondsLeft: 0,
    totalSecondsAllocated: 0,
    student: null,
    onCompleteCallback: null,

    // Security & Proctoring State
    _hiddenAnswerKey: {},
    _hiddenExplanations: {},
    proctorStrikes: 0,
    maxProctorStrikes: 3,
    isProctorWarningOpen: false,
    watermarkObserver: null,
    isSubmitted: false,
    _onVisibilityChange: null,
    _onWindowBlur: null,
    _onKeyDown: null,
    _onContextMenu: null,
    _noticeTimer: null,

    // Helper: Normalize Question Text across schemas
    getQuestionText(q) {
        if (!q) return '';
        return q.question_text || q.question || '';
    },

    // Helper: Normalize Question Options across schemas
    getQuestionOptions(q) {
        if (!q) return [];
        if (Array.isArray(q.options) && q.options.length > 0) {
            return q.options.map(o => ({
                key: (o.key || o.option || '').toUpperCase(),
                text: o.text || o.option_text || ''
            }));
        }
        return [
            { key: 'A', text: q.option_a },
            { key: 'B', text: q.option_b },
            { key: 'C', text: q.option_c },
            { key: 'D', text: q.option_d }
        ].filter(o => o.text !== undefined && o.text !== null && o.text !== '');
    },

    // Helper: Fisher-Yates array shuffle
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    // Dynamic Anti-Cheating Randomizer & Memory Answer Stripping:
    // 1. Shuffles options (A, B, C, D) for every question & tracks correct answer
    // 2. Shuffles questions preserving easy/hard pedagogical tiers
    // 3. Strips correct_option & explanation from client view to prevent memory-dump cheats
    randomizeTest(testObj) {
        if (!testObj || !Array.isArray(testObj.questions) || testObj.questions.length === 0) return testObj;

        this._hiddenAnswerKey = {};
        this._hiddenExplanations = {};

        // 1. Randomize options for each question
        const randomizedQuestions = testObj.questions.map((rawQ) => {
            const q = { ...rawQ };
            const opts = this.getQuestionOptions(q);
            if (!opts || opts.length < 2) return q;

            // Target correct text
            const targetCorrectText = (opts.find(o => o.key === (q.correct_option || '').toUpperCase()) || {}).text;

            // Shuffle the options
            const shuffledOpts = this.shuffleArray(opts);
            const keys = ['A', 'B', 'C', 'D'];
            let newCorrectKey = q.correct_option;

            const finalOptions = shuffledOpts.map((opt, idx) => {
                const newKey = keys[idx] || opt.key;
                if (opt.text === targetCorrectText) {
                    newCorrectKey = newKey;
                }
                return { key: newKey, text: opt.text };
            });

            q.options = finalOptions;
            finalOptions.forEach(opt => {
                if (opt.key === 'A') q.option_a = opt.text;
                if (opt.key === 'B') q.option_b = opt.text;
                if (opt.key === 'C') q.option_c = opt.text;
                if (opt.key === 'D') q.option_d = opt.text;
            });
            q.correct_option = newCorrectKey;
            return q;
        });

        // 2. Randomize question order
        // For standard 100Q tests: Tier 1 (Easy Q1-Q50) shuffled among themselves;
        // Tier 2 (Harder Q51-Q100) shuffled among themselves.
        let finalQuestions = [];
        if (randomizedQuestions.length === 100) {
            const tier1 = this.shuffleArray(randomizedQuestions.slice(0, 50));
            const tier2 = this.shuffleArray(randomizedQuestions.slice(50));
            finalQuestions = [...tier1, ...tier2];
        } else {
            finalQuestions = this.shuffleArray(randomizedQuestions);
        }

        // 3. Strip answers from active client memory (stored securely in private CBTPlayer state)
        const sanitizedQuestions = finalQuestions.map((q, idx) => {
            this._hiddenAnswerKey[idx] = q.correct_option;
            this._hiddenExplanations[idx] = q.explanation || '';
            const safeQ = { ...q };
            delete safeQ.correct_option;
            delete safeQ.explanation;
            return safeQ;
        });

        return {
            ...testObj,
            questions: sanitizedQuestions
        };
    },

    // Launch CBT Exam
    launch(testObj, customStudent = null, onComplete = null) {
        if (!testObj || !testObj.questions || testObj.questions.length === 0) {
            alert('Error: This test contains no active questions in the question bank.');
            return;
        }

        // Security Gate: Launch-time DevTools detection
        const devDiffX = window.outerWidth - window.innerWidth;
        const devDiffY = window.outerHeight - window.innerHeight;
        if (devDiffX > 160 || devDiffY > 160) {
            alert('🛑 Security Alert: Developer Tools / Inspect Element is currently open.\n\nPlease close Developer Tools and refresh to proceed to the examination.');
            return;
        }

        // Apply dynamic runtime randomization for this test attempt
        this.activeTest = this.randomizeTest(testObj);
        this.currentQIdx = 0;
        this.userAnswers = {};
        this.flaggedReview = {};
        this.onCompleteCallback = onComplete;
        this.isSubmitted = false;
        let storedActiveStudent = null;
        let storedActiveSub = null;
        try {
            storedActiveStudent = JSON.parse(localStorage.getItem('ec_active_student'));
            storedActiveSub = JSON.parse(localStorage.getItem('ec_active_subscriber'));
        } catch (e) {
            storedActiveStudent = null;
            storedActiveSub = null;
        }

        const role = localStorage.getItem('ec_user_role') || '';
        const defaultStudent = {
            id: localStorage.getItem('ec_student_id') || localStorage.getItem('ec_subscriber_id') || 'st_guest',
            name: localStorage.getItem('ec_student_name') || localStorage.getItem('ec_subscriber_name') || 'Class 10 Student',
            cls: 'Class 10'
        };

        this.student = customStudent || storedActiveStudent || storedActiveSub || defaultStudent;
        const isSubscriber = role === 'testseries_subscriber' || (this.student.id && (this.student.id.startsWith('ts_sub_') || this.student.id.startsWith('sub_')));
        this.student.user_type = isSubscriber ? 'subscriber' : 'student';

        this.totalSecondsAllocated = (testObj.duration_mins || 90) * 60;
        this.secondsLeft = this.totalSecondsAllocated;

        this.ensureModalElements();
        this.openModal();
        this.renderQuestion();
        this.renderPalette();
        this.startTimer();
    },

    ensureModalElements() {
        if (document.getElementById('cbt-engine-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'cbt-engine-overlay';
        overlay.style.cssText = `
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(11, 19, 41, 0.98);
            z-index: 99999;
            flex-direction: column;
            overflow: hidden;
            font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
            color: #0f172a;
            user-select: none;
            -webkit-user-select: none;
        `;

        overlay.innerHTML = `
            <style>
                /* Responsive CBT Layout Rules */
                .cbt-desktop-sidebar {
                    display: flex;
                    width: 290px;
                    background: #f8fafc;
                    border-left: 1px solid #e2e8f0;
                    flex-direction: column;
                    flex-shrink: 0;
                }
                .cbt-mobile-top-ribbon {
                    display: none;
                }
                @media (max-width: 768px) {
                    .cbt-desktop-sidebar {
                        display: none !important;
                    }
                    .cbt-mobile-top-ribbon {
                        display: block !important;
                    }
                    .cbt-workspace-split {
                        flex-direction: column !important;
                    }
                }
            </style>

            <!-- DUAL-LAYER RESPONSIVE CBT HEADER -->
            <header style="flex-shrink:0; width:100%; box-shadow:0 2px 8px rgba(0,0,0,0.18);">
                <!-- LAYER 1: TEST NAME (LEFT) & CANDIDATE NAME (RIGHT) -->
                <div style="background:#070d1e; color:#ffffff; padding:8px 16px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); gap:10px;">
                    <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
                        <div style="width:28px; height:28px; border-radius:50%; background:#2563eb; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:11px; color:#fff; flex-shrink:0;">EC</div>
                        <div style="min-width:0; overflow:hidden;">
                            <div style="font-size:13px; font-weight:800; color:#ffffff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" id="cbt-header-title">Assessment</div>
                            <div style="font-size:10.5px; color:#94a3b8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" id="cbt-header-subtitle">Class 10 Science</div>
                        </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:6px; flex-shrink:0; background:rgba(255,255,255,0.08); padding:4px 10px; border-radius:20px; border:1px solid rgba(255,255,255,0.12);">
                        <span style="font-size:12px;">👤</span>
                        <span style="font-size:11.5px; color:#f1f5f9; font-weight:700; max-width:140px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" id="cbt-header-student-name">Student</span>
                    </div>
                </div>

                <!-- LAYER 2: TIMER & PROCTOR (LEFT) & FINISH & SUBMIT (RIGHT) -->
                <div style="background:#0b1329; color:#ffffff; padding:6px 16px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.12); gap:10px;">
                    <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <!-- TIMER -->
                        <div style="background:rgba(239, 68, 68, 0.18); border:1px solid rgba(239, 68, 68, 0.4); padding:4px 12px; border-radius:16px; display:flex; align-items:center; gap:6px; flex-shrink:0;">
                            <span style="font-size:11px; color:#fca5a5; font-weight:800; letter-spacing:0.5px;">⏱️ TIME LEFT:</span>
                            <span id="cbt-header-timer" style="font-size:14px; font-weight:800; font-family:'Courier New', monospace; color:#fef2f2; letter-spacing:1px;">00:00:00</span>
                        </div>

                        <!-- PROCTOR STATUS BADGE -->
                        <div id="cbt-proctor-pill" style="background:rgba(16, 185, 129, 0.15); border:1px solid rgba(16, 185, 129, 0.4); padding:4px 10px; border-radius:16px; display:flex; align-items:center; gap:6px; font-size:11px; font-weight:700; color:#6ee7b7;">
                            <span>🛡️ PROCTOR:</span>
                            <span id="cbt-proctor-strikes" style="color:#ffffff;">0/3 Strikes</span>
                        </div>
                    </div>

                    <!-- FINISH & SUBMIT -->
                    <button onclick="CBTPlayer.confirmSubmit()" style="background:#ef4444; color:#ffffff; border:none; padding:6px 14px; border-radius:8px; font-weight:800; font-size:12px; cursor:pointer; display:inline-flex; align-items:center; gap:5px; box-shadow:0 2px 4px rgba(239,68,68,0.3); flex-shrink:0;">
                        <span>✓ Finish & Submit</span>
                    </button>
                </div>
            </header>

            <!-- 1. MOBILE ONLY: TOP HORIZONTAL SCROLLING QUESTION RIBBON -->
            <div class="cbt-mobile-top-ribbon" style="background:#ffffff; border-bottom:1px solid #e2e8f0; flex-shrink:0; box-shadow:0 1px 3px rgba(0,0,0,0.04);">
                <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 16px 2px; font-size:11px; color:#64748b; font-weight:600;">
                    <span style="font-weight:700; color:#0f172a;">Jump to Question:</span>
                    <div style="display:flex; gap:10px;">
                        <span style="display:inline-flex; align-items:center; gap:3px;"><span style="width:8px; height:8px; border-radius:2px; background:#10b981; display:inline-block;"></span> Ans (<span id="pal-c-ans-m">0</span>)</span>
                        <span style="display:inline-flex; align-items:center; gap:3px;"><span style="width:8px; height:8px; border-radius:2px; background:#8b5cf6; display:inline-block;"></span> Rev (<span id="pal-c-rev-m">0</span>)</span>
                        <span style="display:inline-flex; align-items:center; gap:3px;"><span style="width:8px; height:8px; border-radius:2px; background:#f1f5f9; border:1px solid #cbd5e1; display:inline-block;"></span> Un (<span id="pal-c-un-m">0</span>)</span>
                    </div>
                </div>
                
                <div id="cbt-palette-horizontal-bar" style="display:flex; gap:6px; overflow-x:auto; padding:6px 16px 8px; scroll-behavior:smooth; -webkit-overflow-scrolling:touch;">
                    <!-- Horizontal buttons for Mobile -->
                </div>
            </div>

            <!-- 2. MAIN WORKSPACE -->
            <div class="cbt-workspace-split" style="flex:1; display:flex; overflow:hidden; background:#f8fafc; position:relative;">
                
                <!-- QUESTION VIEWPORT -->
                <main id="cbt-question-viewport" style="flex:1; display:flex; flex-direction:column; justify-content:space-between; padding:22px 28px; background:#ffffff; overflow-y:auto; position:relative;">
                    
                    <!-- FORENSIC WATERMARK CONTAINER (POINTER-EVENTS NONE) -->
                    <div id="cbt-forensic-watermark" style="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none; user-select:none; z-index:5; opacity:0.065; overflow:hidden;"></div>

                    <div style="position:relative; z-index:6;">
                        <!-- META BAR -->
                        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid #e2e8f0; margin-bottom:18px; flex-wrap:wrap; gap:10px;">
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span style="background:#eff6ff; color:#2563eb; font-weight:800; font-size:12px; padding:3px 10px; border-radius:14px;" id="cbt-q-number-badge">Question 1</span>
                                <span style="background:#ecfdf5; color:#10b981; font-weight:700; font-size:11px; padding:3px 8px; border-radius:14px;">+4.00 Marks</span>
                                <span style="background:#fef2f2; color:#ef4444; font-weight:700; font-size:11px; padding:3px 8px; border-radius:14px;">-1.00 Penalty</span>
                            </div>

                            <div style="display:flex; align-items:center; gap:12px;">
                                <!-- CANARY QR DIGITAL SEAL -->
                                <div id="cbt-canary-seal" style="display:flex; align-items:center; gap:6px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:3px 8px; cursor:default;" title="Official Elite Digital Verification Seal">
                                    <div id="cbt-canary-qr-wrap" style="display:flex; align-items:center;"></div>
                                    <div style="font-size:9.5px; font-weight:700; color:#475569; line-height:1.2; text-align:left;">
                                        <span style="color:#2563eb;">🔒 VERIFIED SEAL</span><br>
                                        <span id="cbt-canary-seal-id" style="font-family:monospace; font-size:8.5px; color:#64748b;">EC-SEC-VERIFIED</span>
                                    </div>
                                </div>
                                <div id="cbt-q-status-badge" style="font-size:12px; font-weight:700; color:#64748b;">
                                    ⚪ Unattempted
                                </div>
                            </div>
                        </div>

                        <!-- QUESTION TEXT -->
                        <div id="cbt-q-body-text" style="font-size:15.5px; font-weight:700; color:#0f172a; line-height:1.6; margin-bottom:14px;">
                            Question text loading...
                        </div>

                        <!-- QUESTION FIGURE / DIAGRAM CONTAINER -->
                        <div id="cbt-q-diagram-wrap" style="display:none; margin-bottom:18px; text-align:center;"></div>

                        <!-- OPTIONS CONTAINER -->
                        <div id="cbt-q-options-wrap" style="display:flex; flex-direction:column; gap:10px;">
                            <!-- Options injected here -->
                        </div>
                    </div>

                    <!-- BOTTOM CONTROLS (SINGLE RESPONSIVE LINE) -->
                    <div style="padding-top:14px; border-top:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:16px; flex-wrap:nowrap; width:100%; position:relative; z-index:6;">
                        <!-- PREVIOUS BUTTON -->
                        <button id="cbt-btn-prev" onclick="CBTPlayer.navigate(-1)" title="Previous Question" style="min-width:44px; height:38px; padding:0 12px; border-radius:8px; background:#ffffff; border:1.5px solid #cbd5e1; color:#0f172a; font-size:16px; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0;">
                            ←
                        </button>

                        <!-- CLEAR RESPONSE BUTTON -->
                        <button onclick="CBTPlayer.clearSelection()" title="Clear Response" style="flex:1; height:38px; padding:0 8px; border-radius:8px; background:#ffffff; border:1px solid #cbd5e1; color:#64748b; font-size:12px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:4px; white-space:nowrap;">
                            <span>🧹</span><span>Clear</span>
                        </button>

                        <!-- MARK FOR REVIEW BUTTON -->
                        <button id="cbt-btn-review" onclick="CBTPlayer.toggleReviewFlag()" title="Mark for Review & Next" style="flex:1.2; height:38px; padding:0 8px; border-radius:8px; background:#f5f3ff; border:1.5px solid #8b5cf6; color:#7c3aed; font-size:12px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:4px; white-space:nowrap;">
                            <span>🔖</span><span>Review</span>
                        </button>

                        <!-- SAVE & NEXT BUTTON -->
                        <button id="cbt-btn-next" onclick="CBTPlayer.navigate(1)" title="Save & Next" style="min-width:48px; height:38px; padding:0 14px; border-radius:8px; background:#2563eb; color:#ffffff; border:none; font-size:16px; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 2px 6px rgba(37,99,235,0.35);">
                            →
                        </button>
                    </div>
                </main>

                <!-- DESKTOP ONLY: RIGHT SIDEBAR QUESTION PALETTE -->
                <aside class="cbt-desktop-sidebar">
                    <div style="padding:14px; background:#ffffff; border-bottom:1px solid #e2e8f0;">
                        <div style="font-size:12px; font-weight:800; color:#0f172a; margin-bottom:8px;">Question Palette</div>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:11px; color:#64748b; font-weight:600;">
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:10px; height:10px; border-radius:2px; background:#10b981;"></span>Answered (<span id="pal-c-ans-d">0</span>)</div>
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:10px; height:10px; border-radius:2px; background:#8b5cf6;"></span>Review (<span id="pal-c-rev-d">0</span>)</div>
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:10px; height:10px; border-radius:2px; background:#f1f5f9; border:1px solid #cbd5e1;"></span>Unattempted (<span id="pal-c-un-d">0</span>)</div>
                        </div>
                    </div>

                    <div style="flex:1; overflow-y:auto; padding:12px;">
                        <div id="cbt-palette-desktop-grid" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px;">
                            <!-- Desktop 1 to 100 buttons -->
                        </div>
                    </div>

                    <div style="padding:12px; background:#ffffff; border-top:1px solid #e2e8f0;">
                        <button onclick="CBTPlayer.confirmSubmit()" style="width:100%; background:#2563eb; color:#ffffff; border:none; padding:9px; border-radius:8px; font-weight:800; font-size:12.5px; cursor:pointer;">
                            ✓ Submit Assessment
                        </button>
                    </div>
                </aside>
            </div>

            <!-- PROCTOR 3-STRIKE WARNING MODAL -->
            <div id="cbt-proctor-warning-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:100005; align-items:center; justify-content:center; padding:16px;">
                <div style="background:#ffffff; border-radius:16px; max-width:440px; width:100%; padding:28px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.3); border:2px solid #ef4444;">
                    <div style="font-size:44px; margin-bottom:12px;" id="cbt-proctor-modal-icon">⚠️</div>
                    <h3 style="font-size:18px; font-weight:800; color:#0f172a; margin:0 0 8px;" id="cbt-proctor-modal-title">Warning: Tab Switching Detected!</h3>
                    <p style="font-size:13px; color:#64748b; line-height:1.5; margin:0 0 20px;" id="cbt-proctor-modal-body">
                        Navigating away from the test window or switching background applications is strictly monitored.
                    </p>
                    <button id="cbt-proctor-modal-btn" onclick="CBTPlayer.resumeFromProctorWarning()" style="background:#2563eb; color:#ffffff; font-weight:800; padding:10px 24px; border:none; border-radius:8px; cursor:pointer; font-size:13.5px; width:100%;">
                        Return to Exam
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
    },

    // Inject Dynamic Repeating Forensic Watermark
    injectWatermark() {
        const wm = document.getElementById('cbt-forensic-watermark');
        if (!wm) return;

        const studentName = (this.student?.name || 'STUDENT').toUpperCase();
        const studentId = (this.student?.id || 'EC-CANDIDATE').toUpperCase();
        const testTitle = (this.activeTest?.title || 'TEST').toUpperCase();
        const nowStr = new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

        wm.innerHTML = `
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="cbt-wm-pattern" width="460" height="260" patternUnits="userSpaceOnUse" patternTransform="rotate(-26)">
                        <text x="20" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#0f172a" letter-spacing="1">ELITE CLASSES • SECURE CBT ASSESSMENT</text>
                        <text x="50" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#2563eb">${studentName} • ${studentId}</text>
                        <text x="30" y="175" font-family="'Courier New', monospace" font-size="11.5" font-weight="700" fill="#475569">${testTitle} • ${nowStr}</text>
                        <text x="60" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#94a3b8">AUTHENTIC DIGITAL COPY • LEAKS TRACEABLE</text>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cbt-wm-pattern)" />
            </svg>
        `;
    },

    // DOM MutationObserver to guard watermark against tampering / CSS hiding
    setupWatermarkProtection() {
        if (this.watermarkObserver) this.watermarkObserver.disconnect();
        const target = document.getElementById('cbt-engine-overlay');
        if (!target) return;

        this.watermarkObserver = new MutationObserver(() => {
            const wm = document.getElementById('cbt-forensic-watermark');
            if (!wm || wm.style.display === 'none' || wm.style.visibility === 'hidden' || parseFloat(wm.style.opacity || '1') < 0.03) {
                this.injectWatermark();
            }
        });

        this.watermarkObserver.observe(target, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
    },

    // Lightweight Pure Vector SVG QR Generator for Canary Seal
    generateCanaryQRSvg(seedStr) {
        const size = 25;
        let hash = 0;
        for (let i = 0; i < seedStr.length; i++) {
            hash = ((hash << 5) - hash) + seedStr.charCodeAt(i);
            hash |= 0;
        }

        const grid = Array(size).fill(0).map(() => Array(size).fill(false));

        const drawFinder = (r, c) => {
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 7; j++) {
                    const isBorder = (i === 0 || i === 6 || j === 0 || j === 6);
                    const isCenter = (i >= 2 && i <= 4 && j >= 2 && j <= 4);
                    grid[r + i][c + j] = isBorder || isCenter;
                }
            }
        };

        drawFinder(0, 0);          // Top-Left
        drawFinder(0, size - 7);   // Top-Right
        drawFinder(size - 7, 0);   // Bottom-Left

        for (let i = 8; i < size - 8; i++) {
            grid[6][i] = (i % 2 === 0);
            grid[i][6] = (i % 2 === 0);
        }

        let h = Math.abs(hash);
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const inFinder1 = (r < 8 && c < 8);
                const inFinder2 = (r < 8 && c >= size - 8);
                const inFinder3 = (r >= size - 8 && c < 8);
                if (!inFinder1 && !inFinder2 && !inFinder3 && r !== 6 && c !== 6) {
                    h = (h * 1103515245 + 12345) & 0x7fffffff;
                    grid[r][c] = (h % 2 === 0);
                }
            }
        }

        let rects = '';
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (grid[r][c]) {
                    rects += `<rect x="${c}" y="${r}" width="1" height="1" fill="#0f172a"/>`;
                }
            }
        }

        return `<svg viewBox="0 0 ${size} ${size}" width="24" height="24" style="background:#ffffff; border-radius:2px;">${rects}</svg>`;
    },

    // Initialize 3-Strike Tab Proctor & Anti-Inspection Hotkey Lockouts
    initProctoringAndSecurity() {
        this.proctorStrikes = 0;
        this.isProctorWarningOpen = false;
        this.isSubmitted = false;
        this.updateProctorBadge();

        this._onVisibilityChange = () => {
            if (!this.activeTest || this.isSubmitted || this.isProctorWarningOpen) return;
            if (document.hidden) {
                this.triggerProctorStrike('Tab switching or navigating away from the test window is prohibited.');
            }
        };

        this._onWindowBlur = () => {
            if (!this.activeTest || this.isSubmitted || this.isProctorWarningOpen) return;
            setTimeout(() => {
                if (!document.hasFocus() && !this.isSubmitted && !this.isProctorWarningOpen) {
                    this.triggerProctorStrike('Application focus lost. Navigating to other windows is strictly monitored.');
                }
            }, 400);
        };

        this._onKeyDown = (e) => {
            if (!this.activeTest || this.isSubmitted) return;

            // F12
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
                e.stopPropagation();
                this.showProctorNotice('Developer Tools (F12) is disabled during the assessment.');
                return false;
            }

            // Ctrl+Shift+I / J / C (DevTools)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
                this.showProctorNotice('Inspect shortcuts are disabled.');
                return false;
            }

            // Ctrl+U (View Source)
            if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
                e.preventDefault();
                e.stopPropagation();
                this.showProctorNotice('View source is disabled.');
                return false;
            }

            // Ctrl+S / Ctrl+P (Save / Print)
            if ((e.ctrlKey || e.metaKey) && ['s', 'S', 'p', 'P'].includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        this._onContextMenu = (e) => {
            if (!this.activeTest || this.isSubmitted) return;
            e.preventDefault();
            this.showProctorNotice('Right-click context menu is disabled.');
            return false;
        };

        window.addEventListener('visibilitychange', this._onVisibilityChange);
        window.addEventListener('blur', this._onWindowBlur);
        window.addEventListener('keydown', this._onKeyDown, true);
        window.addEventListener('contextmenu', this._onContextMenu, true);
    },

    cleanupProctoringAndSecurity() {
        if (this._onVisibilityChange) window.removeEventListener('visibilitychange', this._onVisibilityChange);
        if (this._onWindowBlur) window.removeEventListener('blur', this._onWindowBlur);
        if (this._onKeyDown) window.removeEventListener('keydown', this._onKeyDown, true);
        if (this._onContextMenu) window.removeEventListener('contextmenu', this._onContextMenu, true);
        if (this.watermarkObserver) {
            this.watermarkObserver.disconnect();
            this.watermarkObserver = null;
        }
    },

    triggerProctorStrike(reason) {
        if (this.isSubmitted || this.isProctorWarningOpen) return;
        this.proctorStrikes++;
        this.updateProctorBadge();

        // Audit log to backend security audit table
        if (typeof DBService !== 'undefined' && DBService.logSecurityIncident) {
            DBService.logSecurityIncident({
                test_id: this.activeTest ? this.activeTest.id : 'unknown_test',
                student_id: this.student ? this.student.id : 'anonymous_student',
                student_name: this.student ? this.student.name : 'Unknown',
                incident_type: 'proctor_strike',
                strike_count: this.proctorStrikes,
                incident_details: { reason: reason, question_number: this.currentQIdx + 1 }
            }).catch(() => {});
        }

        if (this.proctorStrikes >= this.maxProctorStrikes) {
            alert(`🛑 Assessment Terminated & Auto-Submitted!\n\nViolation Limit Exceeded (3/3 Strikes).\nReason: ${reason}\n\nYour attempt has been finalized and recorded.`);
            this.finishAndSubmit();
        } else {
            this.showProctorWarningModal(reason);
        }
    },

    updateProctorBadge() {
        const badge = document.getElementById('cbt-proctor-strikes');
        const pill = document.getElementById('cbt-proctor-pill');
        if (!badge) return;
        badge.textContent = `${this.proctorStrikes}/${this.maxProctorStrikes} Strikes`;
        if (pill) {
            if (this.proctorStrikes === 0) {
                pill.style.background = 'rgba(16, 185, 129, 0.15)';
                pill.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                badge.style.color = '#6ee7b7';
            } else if (this.proctorStrikes === 1) {
                pill.style.background = 'rgba(245, 158, 11, 0.2)';
                pill.style.borderColor = 'rgba(245, 158, 11, 0.6)';
                badge.style.color = '#fde047';
            } else {
                pill.style.background = 'rgba(239, 68, 68, 0.25)';
                pill.style.borderColor = 'rgba(239, 68, 68, 0.7)';
                badge.style.color = '#fca5a5';
            }
        }
    },

    showProctorWarningModal(reason) {
        this.isProctorWarningOpen = true;
        const modal = document.getElementById('cbt-proctor-warning-modal');
        const titleEl = document.getElementById('cbt-proctor-modal-title');
        const bodyEl = document.getElementById('cbt-proctor-modal-body');
        const iconEl = document.getElementById('cbt-proctor-modal-icon');

        if (titleEl) {
            titleEl.textContent = this.proctorStrikes === 1 ? '⚠️ Warning (1/3): Tab Switching Detected!' : '🚨 Final Warning (2/3): Violation Recorded!';
        }
        if (bodyEl) {
            bodyEl.innerHTML = `
                <b>${reason}</b><br><br>
                Tab switching, minimizing, or interacting with other applications is strictly monitored.<br><br>
                <span style="color:#ef4444; font-weight:700;">${this.maxProctorStrikes - this.proctorStrikes} more violation will permanently terminate and auto-submit your exam.</span>
            `;
        }
        if (iconEl) {
            iconEl.textContent = this.proctorStrikes === 1 ? '⚠️' : '🚨';
        }
        if (modal) modal.style.display = 'flex';
    },

    resumeFromProctorWarning() {
        this.isProctorWarningOpen = false;
        const modal = document.getElementById('cbt-proctor-warning-modal');
        if (modal) modal.style.display = 'none';
    },

    showProctorNotice(msg) {
        let toast = document.getElementById('cbt-proctor-notice-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cbt-proctor-notice-toast';
            toast.style.cssText = `
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%);
                background: #0f172a;
                color: #ffffff;
                padding: 10px 20px;
                border-radius: 8px;
                font-size: 12.5px;
                font-weight: 700;
                z-index: 100010;
                box-shadow: 0 4px 14px rgba(0,0,0,0.3);
                border: 1px solid #334155;
                transition: opacity 0.3s ease;
                pointer-events: none;
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = `🛡️ Security Notice: ${msg}`;
        toast.style.opacity = '1';
        clearTimeout(this._noticeTimer);
        this._noticeTimer = setTimeout(() => {
            if (toast) toast.style.opacity = '0';
        }, 2200);
    },

    openModal() {
        const modal = document.getElementById('cbt-engine-overlay');
        if (!modal) return;
        modal.style.display = 'flex';
        document.getElementById('cbt-header-title').textContent = this.activeTest.title;
        document.getElementById('cbt-header-subtitle').textContent = `${this.activeTest.cls} ${this.activeTest.subject} • ${this.activeTest.questions.length} Questions`;
        document.getElementById('cbt-header-student-name').textContent = this.student.name;

        // Initialize forensic watermark, DOM observer, and proctoring
        this.injectWatermark();
        this.setupWatermarkProtection();
        this.initProctoringAndSecurity();
    },

    closeModal() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.cleanupProctoringAndSecurity();
        const modal = document.getElementById('cbt-engine-overlay');
        if (modal) modal.style.display = 'none';
    },

    renderQuestion() {
        const q = this.activeTest.questions[this.currentQIdx];
        if (!q) return;

        const qText = this.getQuestionText(q);
        const opts = this.getQuestionOptions(q);

        document.getElementById('cbt-q-number-badge').textContent = `Question ${this.currentQIdx + 1} of ${this.activeTest.questions.length}`;
        document.getElementById('cbt-q-body-text').innerHTML = `Q${this.currentQIdx + 1}. ${qText}`;

        // Update Canary Forensic Seal with candidate & question-specific hash
        const canaryWrap = document.getElementById('cbt-canary-qr-wrap');
        const canarySealId = document.getElementById('cbt-canary-seal-id');
        if (canaryWrap && this.student) {
            const seed = `${this.student.id || 'std'}_${this.activeTest.id || 'test'}_q${this.currentQIdx + 1}_${this.student.phone || '0000'}`;
            canaryWrap.innerHTML = this.generateCanaryQRSvg(seed);
            if (canarySealId) {
                const shortHash = Math.abs(seed.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0)).toString(16).toUpperCase().padStart(6, '0').slice(-6);
                canarySealId.textContent = `EC-${shortHash}-Q${this.currentQIdx + 1}`;
            }
        }

        const diagWrap = document.getElementById('cbt-q-diagram-wrap');
        if (diagWrap) {
            if (q.diagram_svg) {
                diagWrap.style.display = 'block';
                diagWrap.innerHTML = `<div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:12px 16px; display:inline-block; max-width:100%; box-shadow:0 2px 6px rgba(0,0,0,0.03);">${q.diagram_svg}</div>`;
            } else if (q.image_url) {
                diagWrap.style.display = 'block';
                diagWrap.innerHTML = `<div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:12px 16px; display:inline-block; max-width:100%; box-shadow:0 2px 6px rgba(0,0,0,0.03);"><img src="${q.image_url}" alt="Question Diagram" style="max-width:100%; max-height:280px; object-fit:contain; border-radius:8px;"></div>`;
            } else {
                diagWrap.style.display = 'none';
                diagWrap.innerHTML = '';
            }
        }

        const isAnswered = this.userAnswers[this.currentQIdx] !== undefined;
        const isFlagged = this.flaggedReview[this.currentQIdx] === true;

        const statusBadge = document.getElementById('cbt-q-status-badge');
        if (isAnswered && isFlagged) {
            statusBadge.innerHTML = `<span style="color:#f59e0b;">🟡 Answered & Marked for Review</span>`;
        } else if (isAnswered) {
            statusBadge.innerHTML = `<span style="color:#10b981;">🟢 Answered (Selected: Option ${this.userAnswers[this.currentQIdx]})</span>`;
        } else if (isFlagged) {
            statusBadge.innerHTML = `<span style="color:#8b5cf6;">🟣 Marked for Review</span>`;
        } else {
            statusBadge.innerHTML = `<span style="color:#64748b;">⚪ Unattempted</span>`;
        }

        const wrap = document.getElementById('cbt-q-options-wrap');
        let html = '';
        opts.forEach(opt => {
            const isSelected = this.userAnswers[this.currentQIdx] === opt.key;
            html += `
                <div onclick="CBTPlayer.selectOption('${opt.key}')" style="
                    display: flex; align-items: flex-start; gap: 10px;
                    padding: 12px 14px;
                    border: 1.5px solid ${isSelected ? '#2563eb' : '#e2e8f0'};
                    background: ${isSelected ? '#eff6ff' : '#ffffff'};
                    color: ${isSelected ? '#1d4ed8' : '#0f172a'};
                    font-weight: ${isSelected ? '700' : '500'};
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                    font-size: 13.5px;
                ">
                    <b>(${opt.key})</b>
                    <span>${opt.text}</span>
                </div>
            `;
        });
        wrap.innerHTML = html;

        const prevBtn = document.getElementById('cbt-btn-prev');
        if (prevBtn) {
            prevBtn.disabled = this.currentQIdx === 0;
            prevBtn.style.opacity = this.currentQIdx === 0 ? '0.35' : '1';
            prevBtn.style.cursor = this.currentQIdx === 0 ? 'not-allowed' : 'pointer';
        }

        const isLastQ = this.currentQIdx === this.activeTest.questions.length - 1;
        const nextBtn = document.getElementById('cbt-btn-next');
        if (nextBtn) {
            nextBtn.textContent = isLastQ ? '✓' : '→';
            nextBtn.title = isLastQ ? 'Last Question (Review Palette)' : 'Save & Next Question';
        }

        const revBtn = document.getElementById('cbt-btn-review');
        if (revBtn) {
            revBtn.style.background = isFlagged ? '#ede9fe' : '#f5f3ff';
            revBtn.style.borderColor = isFlagged ? '#6d28d9' : '#8b5cf6';
            revBtn.style.color = isFlagged ? '#5b21b6' : '#7c3aed';
        }

        this.renderPalette();
    },

    selectOption(key) {
        this.userAnswers[this.currentQIdx] = key;
        this.renderQuestion();
    },

    clearSelection() {
        delete this.userAnswers[this.currentQIdx];
        this.renderQuestion();
    },

    toggleReviewFlag() {
        this.flaggedReview[this.currentQIdx] = !this.flaggedReview[this.currentQIdx];
        this.navigate(1);
    },

    navigate(delta) {
        const nextIdx = this.currentQIdx + delta;
        if (nextIdx >= 0 && nextIdx < this.activeTest.questions.length) {
            this.currentQIdx = nextIdx;
            this.renderQuestion();
        }
    },

    jumpTo(idx) {
        if (idx >= 0 && idx < this.activeTest.questions.length) {
            this.currentQIdx = idx;
            this.renderQuestion();
        }
    },

    renderPalette() {
        const bar = document.getElementById('cbt-palette-horizontal-bar');
        const grid = document.getElementById('cbt-palette-desktop-grid');
        if (!this.activeTest) return;

        let answeredCount = 0;
        let reviewCount = 0;
        let unattemptedCount = 0;

        let mobileHtml = '';
        let desktopHtml = '';

        this.activeTest.questions.forEach((q, idx) => {
            const isAns = this.userAnswers[idx] !== undefined;
            const isRev = this.flaggedReview[idx] === true;
            const isCurrent = this.currentQIdx === idx;

            let bgColor = '#f8fafc';
            let textColor = '#475569';
            let borderColor = '#cbd5e1';

            if (isAns && isRev) {
                bgColor = '#f59e0b';
                textColor = '#ffffff';
                borderColor = '#d97706';
                answeredCount++;
            } else if (isAns) {
                bgColor = '#10b981';
                textColor = '#ffffff';
                borderColor = '#059669';
                answeredCount++;
            } else if (isRev) {
                bgColor = '#8b5cf6';
                textColor = '#ffffff';
                borderColor = '#7c3aed';
                reviewCount++;
            } else {
                unattemptedCount++;
            }

            // Mobile Button (Horizontal Ribbon)
            mobileHtml += `
                <button id="cbt-pal-btn-m-${idx}" onclick="CBTPlayer.jumpTo(${idx})" style="
                    min-width: 36px;
                    height: 30px;
                    padding: 0 6px;
                    border-radius: 6px;
                    border: ${isCurrent ? '2px solid #2563eb' : `1px solid ${borderColor}`};
                    background: ${bgColor};
                    color: ${textColor};
                    font-weight: 800;
                    font-size: 11.5px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: ${isCurrent ? '0 0 0 2px #bfdbfe' : 'none'};
                    transform: ${isCurrent ? 'scale(1.06)' : 'none'};
                ">
                    ${idx + 1}
                </button>
            `;

            // Desktop Button (Sidebar Grid)
            desktopHtml += `
                <button id="cbt-pal-btn-d-${idx}" onclick="CBTPlayer.jumpTo(${idx})" style="
                    height: 32px;
                    border-radius: 6px;
                    border: ${isCurrent ? '2px solid #2563eb' : `1px solid ${borderColor}`};
                    background: ${bgColor};
                    color: ${textColor};
                    font-weight: 800;
                    font-size: 11.5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    outline: ${isCurrent ? '2px solid #93c5fd' : 'none'};
                    transition: all 0.15s ease;
                ">
                    ${idx + 1}
                </button>
            `;
        });

        if (bar) bar.innerHTML = mobileHtml;
        if (grid) grid.innerHTML = desktopHtml;

        // Update Mobile Badges
        const amEl = document.getElementById('pal-c-ans-m');
        const rmEl = document.getElementById('pal-c-rev-m');
        const umEl = document.getElementById('pal-c-un-m');
        if (amEl) amEl.textContent = answeredCount;
        if (rmEl) rmEl.textContent = reviewCount;
        if (umEl) umEl.textContent = unattemptedCount;

        // Update Desktop Badges
        const adEl = document.getElementById('pal-c-ans-d');
        const rdEl = document.getElementById('pal-c-rev-d');
        const udEl = document.getElementById('pal-c-un-d');
        if (adEl) adEl.textContent = answeredCount;
        if (rdEl) rdEl.textContent = reviewCount;
        if (udEl) udEl.textContent = unattemptedCount;

        // Auto-scroll active question chip into center view on mobile
        setTimeout(() => {
            const activeBtn = document.getElementById(`cbt-pal-btn-m-${this.currentQIdx}`);
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }, 50);
    },

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        const timerEl = document.getElementById('cbt-header-timer');

        this.timerInterval = setInterval(() => {
            if (this.secondsLeft <= 0) {
                clearInterval(this.timerInterval);
                alert('Time expired! Your test is being automatically evaluated and submitted.');
                this.finishAndSubmit();
                return;
            }
            this.secondsLeft--;
            const hrs = Math.floor(this.secondsLeft / 3600);
            const mins = Math.floor((this.secondsLeft % 3600) / 60);
            const secs = this.secondsLeft % 60;
            timerEl.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }, 1000);
    },

    confirmSubmit() {
        const answered = Object.keys(this.userAnswers).length;
        const total = this.activeTest.questions.length;
        const unattempted = total - answered;

        const conf = confirm(`Are you sure you want to finish and submit this test assessment?\n\n• Total Questions: ${total}\n• Answered: ${answered}\n• Unattempted: ${unattempted}`);
        if (conf) {
            this.finishAndSubmit();
        }
    },

    async finishAndSubmit() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        let correctCount = 0;
        let wrongCount = 0;
        let unattemptedCount = 0;

        const marksPerCorrect = this.activeTest.marks_per_question || 4;
        const negMarkPerWrong = (this.activeTest.negative_mark !== undefined) ? this.activeTest.negative_mark : 1;

        this.activeTest.questions.forEach((q, idx) => {
            const userChoice = this.userAnswers[idx];
            const correctOpt = (this._hiddenAnswerKey && this._hiddenAnswerKey[idx] !== undefined) ? this._hiddenAnswerKey[idx] : q.correct_option;
            if (!userChoice) {
                unattemptedCount++;
            } else if (userChoice === correctOpt) {
                correctCount++;
            } else {
                wrongCount++;
            }
        });

        // Restore hidden answers and explanations for solutions review
        const reviewQuestions = this.activeTest.questions.map((q, idx) => ({
            ...q,
            correct_option: (this._hiddenAnswerKey && this._hiddenAnswerKey[idx] !== undefined) ? this._hiddenAnswerKey[idx] : q.correct_option,
            explanation: (this._hiddenExplanations && this._hiddenExplanations[idx] !== undefined) ? this._hiddenExplanations[idx] : q.explanation
        }));
        this.activeTest.questions = reviewQuestions;

        const rawScore = (correctCount * marksPerCorrect) - (wrongCount * negMarkPerWrong);
        const score = rawScore;
        const totalMarks = this.activeTest.total_marks || (this.activeTest.questions.length * marksPerCorrect);
        const percentage = totalMarks > 0 ? Math.max(0, Math.round((score / totalMarks) * 100)) : 0;
        const accuracy = (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
        const timeTakenSecs = this.totalSecondsAllocated - this.secondsLeft;

        const storageKey = `ec_cbt_enrollment_${this.student.id}`;
        let localData = JSON.parse(localStorage.getItem(storageKey) || '{"enrolled":{}, "attempts":{}}');
        const prevAttempt = localData.attempts ? localData.attempts[this.activeTest.id] : null;
        const prevAttempts = prevAttempt ? parseInt(prevAttempt.total_attempts || 1, 10) : 0;
        const prevAvg = prevAttempt ? parseFloat(prevAttempt.avg_score !== undefined ? prevAttempt.avg_score : (prevAttempt.score || 0)) : 0;
        const newAttempts = prevAttempts + 1;
        const newAvg = Math.round(((prevAvg * prevAttempts) + score) / newAttempts * 100) / 100;

        const submissionObj = {
            id: `sub_${this.activeTest.id}_${this.student.id}_${Date.now()}`,
            test_id: this.activeTest.id,
            student_id: this.student.id,
            student_name: this.student.name,
            cls: this.activeTest.cls || this.student.cls || 'Class 10',
            subject: this.activeTest.subject || 'Science',
            user_type: this.student.user_type || 'student',
            score: score,
            avg_score: newAvg,
            total_attempts: newAttempts,
            total_marks: totalMarks,
            percentage: percentage,
            accuracy_pct: accuracy,
            correct_count: correctCount,
            incorrect_count: wrongCount,
            unattempted_count: unattemptedCount,
            time_taken_seconds: timeTakenSecs,
            answers_json: { ...this.userAnswers },
            submitted_at: new Date().toISOString()
        };

        // 1. Save Locally with exact userAnswers and reconstructed solutions snapshot
        localData.enrolled = localData.enrolled || {};
        localData.attempts = localData.attempts || {};
        localData.enrolled[this.activeTest.id] = true;
        localData.attempts[this.activeTest.id] = {
            score: score,
            avg_score: newAvg,
            total_attempts: newAttempts,
            total_marks: totalMarks,
            pct: percentage,
            accuracy: accuracy,
            correct: correctCount,
            wrong: wrongCount,
            unattempted: unattemptedCount,
            userAnswers: { ...this.userAnswers },
            shuffledQuestions: reviewQuestions,
            timeFormatted: `${Math.floor(timeTakenSecs / 60)}m ${timeTakenSecs % 60}s`,
            submitted_at: new Date().toISOString()
        };
        localStorage.setItem(storageKey, JSON.stringify(localData));

        // 2. Persist to Supabase if DBService is available
        if (typeof DBService !== 'undefined' && DBService.submitTestAttempt) {
            try {
                const res = await DBService.submitTestAttempt(submissionObj);
                if (res && res.avg_score !== undefined) {
                    submissionObj.avg_score = res.avg_score;
                    submissionObj.total_attempts = res.total_attempts;
                    localData.attempts[this.activeTest.id].avg_score = res.avg_score;
                    localData.attempts[this.activeTest.id].total_attempts = res.total_attempts;
                    localStorage.setItem(storageKey, JSON.stringify(localData));
                }
            } catch (e) {
                console.warn('[CBTPlayer] Supabase cloud sync warning:', e);
            }
        }

        // 3. Close the Exam modal cleanly
        this.closeModal();

        // 4. Callback to update card score and show toast (no intrusive auto-popup)
        if (this.onCompleteCallback) {
            this.onCompleteCallback(submissionObj);
        }
    },

    // =========================================================================
    // DEDICATED REVIEW & SOLUTIONS MODAL
    // Interactive Question-by-Question Analysis with Filter Tabs
    // =========================================================================
    openReview(testObj, customStudent = null, attemptData = null) {
        let student = customStudent;
        if (!student) {
            try {
                student = JSON.parse(localStorage.getItem('ec_active_student'));
            } catch (e) {
                student = null;
            }
        }
        if (!student) {
            student = {
                id: localStorage.getItem('ec_student_id') || 'st_guest',
                name: localStorage.getItem('ec_student_name') || 'Class 10 Student',
                cls: 'Class 10'
            };
        }

        const testId = (testObj && typeof testObj === 'object') ? testObj.id : (typeof testObj === 'string' ? testObj : null);
        const storageKey = `ec_cbt_enrollment_${student.id}`;
        const localData = JSON.parse(localStorage.getItem(storageKey) || '{"enrolled":{}, "attempts":{}}');
        const attempt = attemptData || (testId && localData.attempts ? localData.attempts[testId] : null) || {};
        const userAnswers = attempt.userAnswers || attempt.answers_json || {};

        const reviewQuestions = (attempt && attempt.shuffledQuestions && attempt.shuffledQuestions.length > 0)
            ? attempt.shuffledQuestions
            : (testObj && Array.isArray(testObj.questions) && testObj.questions.length > 0 ? testObj.questions : null);

        if (!reviewQuestions || reviewQuestions.length === 0) {
            alert('Error: Question bank or review snapshot not found for this test.');
            return;
        }

        let revOverlay = document.getElementById('cbt-review-modal-overlay');
        if (!revOverlay) {
            revOverlay = document.createElement('div');
            revOverlay.id = 'cbt-review-modal-overlay';
            revOverlay.style.cssText = `
                position: fixed; top: 0; left: 0;
                width: 100vw; height: 100vh;
                background: rgba(11, 19, 41, 0.9);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                z-index: 100000;
                display: flex; align-items: center; justify-content: center;
                font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
            `;
            document.body.appendChild(revOverlay);
        }

        const score = attempt.score !== undefined ? attempt.score : '--';
        const totalMarks = attempt.total_marks || testObj.total_marks || 400;
        const pct = attempt.pct !== undefined ? attempt.pct : (attempt.percentage || 0);
        const correct = attempt.correct !== undefined ? attempt.correct : (attempt.correct_count || 0);
        const wrong = attempt.wrong !== undefined ? attempt.wrong : (attempt.incorrect_count || 0);
        const skipped = attempt.unattempted !== undefined ? attempt.unattempted : (reviewQuestions.length - (correct + wrong));
        const accuracy = attempt.accuracy !== undefined ? attempt.accuracy : (attempt.accuracy_pct || 0);
        const timeFormatted = attempt.timeFormatted || (attempt.time_taken_seconds ? `${Math.floor(attempt.time_taken_seconds / 60)}m ${attempt.time_taken_seconds % 60}s` : '--');

        revOverlay.style.display = 'flex';
        revOverlay.innerHTML = `
            <div style="background:#ffffff; border-radius:14px; max-width:900px; width:95%; max-height:92vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 24px 48px rgba(0,0,0,0.35);">
                
                <!-- HEADER -->
                <div style="background:#0b1329; color:#ffffff; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; flex-shrink:0; border-bottom:1px solid rgba(255,255,255,0.1);">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:20px;">🔍</span>
                        <div>
                            <div style="font-size:15px; font-weight:800; color:#fff;">Test Analysis & Detailed Solutions</div>
                            <div style="font-size:11.5px; color:#94a3b8;">${testObj.title} • Candidate: <b>${student.name}</b></div>
                        </div>
                    </div>
                    <button onclick="document.getElementById('cbt-review-modal-overlay').style.display='none';" style="background:#1e293b; color:#fff; border:1px solid #334155; width:32px; height:32px; border-radius:50%; font-size:15px; font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center;">✕</button>
                </div>

                <!-- PERFORMANCE SUMMARY BAR -->
                <div style="background:#f8fafc; border-bottom:1px solid #e2e8f0; padding:12px 20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; flex-shrink:0;">
                    <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:6px 12px; text-align:center;">
                            <span style="font-size:10px; color:#1e40af; font-weight:700; text-transform:uppercase;">Score</span>
                            <div style="font-size:16px; font-weight:800; color:#2563eb;">${score} / ${totalMarks} <span style="font-size:12px; font-weight:600;">(${pct}%)</span></div>
                        </div>
                        <div style="display:flex; gap:6px;">
                            <span style="background:#ecfdf5; color:#065f46; border:1px solid #a7f3d0; padding:4px 10px; border-radius:6px; font-size:11.5px; font-weight:700;">✓ Correct: ${correct}</span>
                            <span style="background:#fef2f2; color:#991b1b; border:1px solid #fecaca; padding:4px 10px; border-radius:6px; font-size:11.5px; font-weight:700;">✕ Wrong: ${wrong}</span>
                            <span style="background:#f1f5f9; color:#475569; border:1px solid #cbd5e1; padding:4px 10px; border-radius:6px; font-size:11.5px; font-weight:700;">⚪ Skipped: ${skipped}</span>
                            <span style="background:#f5f3ff; color:#6d28d9; border:1px solid #ddd6fe; padding:4px 10px; border-radius:6px; font-size:11.5px; font-weight:700;">🎯 Accuracy: ${accuracy}%</span>
                        </div>
                    </div>
                </div>

                <!-- FILTER TABS -->
                <div style="padding:10px 20px; background:#ffffff; border-bottom:1px solid #e2e8f0; display:flex; gap:8px; flex-shrink:0; overflow-x:auto;">
                    <button id="rev-tab-all" onclick="CBTPlayer.filterReview('all')" style="background:#2563eb; color:#fff; border:none; padding:6px 14px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer;">
                        All Questions (${reviewQuestions.length})
                    </button>
                    <button id="rev-tab-correct" onclick="CBTPlayer.filterReview('correct')" style="background:#f1f5f9; color:#0f172a; border:1px solid #cbd5e1; padding:6px 14px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer;">
                        ✓ Correct Only (${correct})
                    </button>
                    <button id="rev-tab-wrong" onclick="CBTPlayer.filterReview('wrong')" style="background:#f1f5f9; color:#0f172a; border:1px solid #cbd5e1; padding:6px 14px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer;">
                        ✕ Incorrect Only (${wrong})
                    </button>
                    <button id="rev-tab-skipped" onclick="CBTPlayer.filterReview('skipped')" style="background:#f1f5f9; color:#0f172a; border:1px solid #cbd5e1; padding:6px 14px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer;">
                        ⚪ Skipped Only (${skipped})
                    </button>
                </div>

                <!-- QUESTIONS LIST CONTAINER -->
                <div id="cbt-review-questions-list" style="padding:18px 20px; overflow-y:auto; flex:1; display:flex; flex-direction:column; gap:16px; background:#f8fafc;">
                    ${reviewQuestions.map((q, idx) => {
                        const qText = this.getQuestionText(q);
                        const opts = this.getQuestionOptions(q);
                        const userAns = userAnswers[idx];
                        const correctOpt = (q.correct_option || '').toUpperCase();
                        const isAnswered = userAns !== undefined && userAns !== null && userAns !== '';
                        const isCorrect = isAnswered && userAns === correctOpt;
                        const statusType = !isAnswered ? 'skipped' : (isCorrect ? 'correct' : 'wrong');

                        return `
                            <div class="rev-q-card rev-status-${statusType}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:16px; box-shadow:0 1px 3px rgba(0,0,0,0.04);">
                                <!-- Q HEADER -->
                                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; gap:8px;">
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <span style="background:#0f172a; color:#fff; font-size:11px; font-weight:800; padding:3px 9px; border-radius:6px;">Q${idx + 1}</span>
                                        ${q.difficulty ? `<span style="background:#f1f5f9; color:#475569; font-size:10.5px; font-weight:700; padding:2px 7px; border-radius:4px; text-transform:uppercase;">${q.difficulty}</span>` : ''}
                                    </div>
                                    <div>
                                        ${!isAnswered ? `
                                            <span style="background:#f1f5f9; color:#475569; border:1px solid #cbd5e1; font-size:11px; font-weight:700; padding:3px 8px; border-radius:12px;">⚪ Skipped (0)</span>
                                        ` : (isCorrect ? `
                                            <span style="background:#ecfdf5; color:#065f46; border:1px solid #a7f3d0; font-size:11px; font-weight:700; padding:3px 8px; border-radius:12px;">✓ Correct (+4)</span>
                                        ` : `
                                            <span style="background:#fef2f2; color:#991b1b; border:1px solid #fecaca; font-size:11px; font-weight:700; padding:3px 8px; border-radius:12px;">✕ Incorrect (-1)</span>
                                        `)}
                                    </div>
                                </div>

                                <!-- Q TEXT -->
                                <div style="font-size:14px; font-weight:700; color:#0f172a; line-height:1.55; margin-bottom:12px;">
                                    ${qText}
                                </div>

                                <!-- Q DIAGRAM (IF ANY) -->
                                ${q.diagram_svg ? `
                                    <div style="margin-bottom:14px; text-align:center;">
                                        <div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:10px; padding:10px 14px; display:inline-block; max-width:100%;">
                                            ${q.diagram_svg}
                                        </div>
                                    </div>
                                ` : (q.image_url ? `
                                    <div style="margin-bottom:14px; text-align:center;">
                                        <div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:10px; padding:10px 14px; display:inline-block; max-width:100%;">
                                            <img src="${q.image_url}" alt="Question Diagram" style="max-width:100%; max-height:240px; object-fit:contain; border-radius:6px;">
                                        </div>
                                    </div>
                                ` : '')}

                                <!-- OPTIONS -->
                                <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
                                    ${opts.map(opt => {
                                        const isThisCorrect = opt.key === correctOpt;
                                        const isThisUserSelected = isAnswered && userAns === opt.key;

                                        let optBorder = '#e2e8f0';
                                        let optBg = '#ffffff';
                                        let optColor = '#0f172a';
                                        let badgeTag = '';

                                        if (isThisCorrect && isThisUserSelected) {
                                            optBorder = '#10b981';
                                            optBg = '#ecfdf5';
                                            optColor = '#065f46';
                                            badgeTag = `<span style="background:#10b981; color:#fff; font-size:10px; font-weight:800; padding:2px 6px; border-radius:4px; margin-left:auto;">✓ Your Choice (Correct)</span>`;
                                        } else if (isThisCorrect) {
                                            optBorder = '#10b981';
                                            optBg = '#f0fdf4';
                                            optColor = '#065f46';
                                            badgeTag = `<span style="background:#059669; color:#fff; font-size:10px; font-weight:800; padding:2px 6px; border-radius:4px; margin-left:auto;">✓ Correct Answer</span>`;
                                        } else if (isThisUserSelected) {
                                            optBorder = '#ef4444';
                                            optBg = '#fef2f2';
                                            optColor = '#991b1b';
                                            badgeTag = `<span style="background:#ef4444; color:#fff; font-size:10px; font-weight:800; padding:2px 6px; border-radius:4px; margin-left:auto;">✕ Your Choice</span>`;
                                        }

                                        return `
                                            <div style="display:flex; align-items:center; gap:8px; padding:10px 12px; border:1.5px solid ${optBorder}; background:${optBg}; color:${optColor}; border-radius:6px; font-size:13px; font-weight:${isThisCorrect || isThisUserSelected ? '700' : '500'};">
                                                <b style="font-size:12.5px;">(${opt.key})</b>
                                                <span style="flex:1;">${opt.text}</span>
                                                ${badgeTag}
                                            </div>
                                        `;
                                    }).join('')}
                                </div>

                                <!-- EXPLANATION CALLOUT -->
                                ${q.explanation ? `
                                    <div style="background:#f0f9ff; border-left:4px solid #0284c7; padding:10px 12px; border-radius:4px; font-size:12px; color:#0369a1; line-height:1.5;">
                                        <b style="color:#0284c7;">💡 Detailed Explanation:</b> ${q.explanation}
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- FOOTER -->
                <div style="padding:12px 20px; background:#ffffff; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-shrink:0;">
                    <div style="font-size:12px; color:#64748b;">Reviewing ${testObj.questions.length} Questions</div>
                    <button onclick="document.getElementById('cbt-review-modal-overlay').style.display='none';" style="background:#2563eb; color:#ffffff; border:none; padding:8px 18px; border-radius:8px; font-weight:700; font-size:12.5px; cursor:pointer;">
                        Close Review
                    </button>
                </div>
            </div>
        `;
    },

    // Filter review questions
    filterReview(type) {
        const cards = document.querySelectorAll('.rev-q-card');
        cards.forEach(card => {
            if (type === 'all') {
                card.style.display = 'block';
            } else if (type === 'correct') {
                card.style.display = card.classList.contains('rev-status-correct') ? 'block' : 'none';
            } else if (type === 'wrong') {
                card.style.display = card.classList.contains('rev-status-wrong') ? 'block' : 'none';
            } else if (type === 'skipped') {
                card.style.display = card.classList.contains('rev-status-skipped') ? 'block' : 'none';
            }
        });

        // Update active tab buttons styling
        ['all', 'correct', 'wrong', 'skipped'].forEach(t => {
            const btn = document.getElementById(`rev-tab-${t}`);
            if (!btn) return;
            if (t === type) {
                btn.style.background = '#2563eb';
                btn.style.color = '#ffffff';
                btn.style.border = 'none';
            } else {
                btn.style.background = '#f1f5f9';
                btn.style.color = '#0f172a';
                btn.style.border = '1px solid #cbd5e1';
            }
        });
    }
};

if (typeof window !== 'undefined') {
    window.CBTPlayer = CBTPlayer;
}
