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

    // Launch CBT Exam
    launch(testObj, customStudent = null, onComplete = null) {
        if (!testObj || !testObj.questions || testObj.questions.length === 0) {
            alert('Error: This test contains no active questions in the question bank.');
            return;
        }

        this.activeTest = testObj;
        this.currentQIdx = 0;
        this.userAnswers = {};
        this.flaggedReview = {};
        this.onCompleteCallback = onComplete;
        let storedActiveStudent = null;
        try {
            storedActiveStudent = JSON.parse(localStorage.getItem('ec_active_student'));
        } catch (e) {
            storedActiveStudent = null;
        }
        this.student = customStudent || storedActiveStudent || {
            id: localStorage.getItem('ec_student_id') || 'st_guest',
            name: localStorage.getItem('ec_student_name') || 'Class 10 Student',
            cls: 'Class 10'
        };

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

                <!-- LAYER 2: TIMER (LEFT) & FINISH & SUBMIT (RIGHT) -->
                <div style="background:#0b1329; color:#ffffff; padding:6px 16px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.12); gap:10px;">
                    <!-- TIMER -->
                    <div style="background:rgba(239, 68, 68, 0.18); border:1px solid rgba(239, 68, 68, 0.4); padding:4px 12px; border-radius:16px; display:flex; align-items:center; gap:6px; flex-shrink:0;">
                        <span style="font-size:11px; color:#fca5a5; font-weight:800; letter-spacing:0.5px;">⏱️ TIME LEFT:</span>
                        <span id="cbt-header-timer" style="font-size:14px; font-weight:800; font-family:'Courier New', monospace; color:#fef2f2; letter-spacing:1px;">00:00:00</span>
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
            <div class="cbt-workspace-split" style="flex:1; display:flex; overflow:hidden; background:#f8fafc;">
                
                <!-- QUESTION VIEWPORT -->
                <main style="flex:1; display:flex; flex-direction:column; justify-content:space-between; padding:22px 28px; background:#ffffff; overflow-y:auto;">
                    <div>
                        <!-- META BAR -->
                        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid #e2e8f0; margin-bottom:18px;">
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span style="background:#eff6ff; color:#2563eb; font-weight:800; font-size:12px; padding:3px 10px; border-radius:14px;" id="cbt-q-number-badge">Question 1</span>
                                <span style="background:#ecfdf5; color:#10b981; font-weight:700; font-size:11px; padding:3px 8px; border-radius:14px;">+4.00 Marks</span>
                                <span style="background:#fef2f2; color:#ef4444; font-weight:700; font-size:11px; padding:3px 8px; border-radius:14px;">-1.00 Penalty</span>
                            </div>
                            <div id="cbt-q-status-badge" style="font-size:12px; font-weight:700; color:#64748b;">
                                ⚪ Unattempted
                            </div>
                        </div>

                        <!-- QUESTION TEXT -->
                        <div id="cbt-q-body-text" style="font-size:15.5px; font-weight:700; color:#0f172a; line-height:1.6; margin-bottom:20px;">
                            Question text loading...
                        </div>

                        <!-- OPTIONS CONTAINER -->
                        <div id="cbt-q-options-wrap" style="display:flex; flex-direction:column; gap:10px;">
                            <!-- Options injected here -->
                        </div>
                    </div>

                    <!-- BOTTOM CONTROLS (SINGLE RESPONSIVE LINE) -->
                    <div style="padding-top:14px; border-top:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:16px; flex-wrap:nowrap; width:100%;">
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
        `;

        document.body.appendChild(overlay);
    },

    openModal() {
        const modal = document.getElementById('cbt-engine-overlay');
        if (!modal) return;
        modal.style.display = 'flex';
        document.getElementById('cbt-header-title').textContent = this.activeTest.title;
        document.getElementById('cbt-header-subtitle').textContent = `${this.activeTest.cls} ${this.activeTest.subject} • ${this.activeTest.questions.length} Questions`;
        document.getElementById('cbt-header-student-name').textContent = this.student.name;
    },

    closeModal() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        const modal = document.getElementById('cbt-engine-overlay');
        if (modal) modal.style.display = 'none';
    },

    renderQuestion() {
        const q = this.activeTest.questions[this.currentQIdx];
        if (!q) return;

        const qText = this.getQuestionText(q);
        const opts = this.getQuestionOptions(q);

        document.getElementById('cbt-q-number-badge').textContent = `Question ${this.currentQIdx + 1} of ${this.activeTest.questions.length}`;
        document.getElementById('cbt-q-body-text').textContent = `Q${this.currentQIdx + 1}. ${qText}`;

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
            if (!userChoice) {
                unattemptedCount++;
            } else if (userChoice === q.correct_option) {
                correctCount++;
            } else {
                wrongCount++;
            }
        });

        const rawScore = (correctCount * marksPerCorrect) - (wrongCount * negMarkPerWrong);
        const score = rawScore;
        const totalMarks = this.activeTest.total_marks || (this.activeTest.questions.length * marksPerCorrect);
        const percentage = totalMarks > 0 ? Math.max(0, Math.round((score / totalMarks) * 100)) : 0;
        const accuracy = (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
        const timeTakenSecs = this.totalSecondsAllocated - this.secondsLeft;

        const submissionObj = {
            id: `sub_${this.activeTest.id}_${this.student.id}_${Date.now()}`,
            test_id: this.activeTest.id,
            student_id: this.student.id,
            student_name: this.student.name,
            cls: this.activeTest.cls,
            score: score,
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

        // 1. Save Locally with exact userAnswers
        const storageKey = `ec_cbt_enrollment_${this.student.id}`;
        let localData = JSON.parse(localStorage.getItem(storageKey) || '{"enrolled":{}, "attempts":{}}');
        localData.enrolled[this.activeTest.id] = true;
        localData.attempts[this.activeTest.id] = {
            score: score,
            total_marks: totalMarks,
            pct: percentage,
            accuracy: accuracy,
            correct: correctCount,
            wrong: wrongCount,
            unattempted: unattemptedCount,
            userAnswers: { ...this.userAnswers },
            timeFormatted: `${Math.floor(timeTakenSecs / 60)}m ${timeTakenSecs % 60}s`,
            submitted_at: new Date().toISOString()
        };
        localStorage.setItem(storageKey, JSON.stringify(localData));

        // 2. Persist to Supabase if DBService is available
        if (typeof DBService !== 'undefined' && DBService.submitTestAttempt) {
            try {
                await DBService.submitTestAttempt(submissionObj);
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
        if (!testObj || !testObj.questions) {
            alert('Error: Question bank not found for this test.');
            return;
        }

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

        const storageKey = `ec_cbt_enrollment_${student.id}`;
        const localData = JSON.parse(localStorage.getItem(storageKey) || '{"enrolled":{}, "attempts":{}}');
        const attempt = attemptData || localData.attempts[testObj.id] || {};
        const userAnswers = attempt.userAnswers || attempt.answers_json || {};

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
        const skipped = attempt.unattempted !== undefined ? attempt.unattempted : (testObj.questions.length - (correct + wrong));
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
                        All Questions (${testObj.questions.length})
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
                    ${testObj.questions.map((q, idx) => {
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
                                <div style="font-size:14px; font-weight:700; color:#0f172a; line-height:1.55; margin-bottom:14px;">
                                    ${qText}
                                </div>

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
