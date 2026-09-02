/* =========================================================================
   ELITE CLASSES — UNIVERSAL CBT ASSESSMENT ENGINE (cbtPlayer.js)
   Self-contained, reusable Computer-Based Testing engine with:
   - Full-Screen Modal Simulation & Live Countdown Timer
   - 100-Question Fast-Navigation Palette with Status Indicators
   - Instant Automated Evaluation with Negative Marking (-1.0)
   - Pedagogical Scorecard with Question-by-Question Explanations
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
        this.student = customStudent || JSON.parse(localStorage.getItem('ec_active_student') || '{"id":"st_101", "name":"Rakshit Singh", "cls":"Class 10"}');

        this.totalSecondsAllocated = (testObj.duration_mins || 45) * 60;
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
            <!-- TOP STICKY CBT HEADER -->
            <header style="background:#0b1329; color:#ffffff; padding:10px 20px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); flex-shrink:0;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <div style="width:32px; height:32px; border-radius:50%; background:#2563eb; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px; color:#fff;">EC</div>
                    <div>
                        <div style="font-size:13.5px; font-weight:800; color:#ffffff;" id="cbt-header-title">Assessment</div>
                        <div style="font-size:11px; color:#94a3b8;" id="cbt-header-subtitle">Class 10 Science</div>
                    </div>
                </div>

                <div style="display:flex; align-items:center; gap:14px;">
                    <!-- TIMER -->
                    <div style="background:rgba(239, 68, 68, 0.18); border:1px solid rgba(239, 68, 68, 0.4); padding:4px 14px; border-radius:20px; display:flex; align-items:center; gap:6px;">
                        <span style="font-size:11.5px; color:#fca5a5; font-weight:700;">⏱️ TIME LEFT:</span>
                        <span id="cbt-header-timer" style="font-size:15px; font-weight:800; font-family:'Courier New', monospace; color:#fef2f2; letter-spacing:1px;">00:00:00</span>
                    </div>

                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px; color:#e2e8f0; font-weight:600;" id="cbt-header-student-name">Student</span>
                        <button onclick="CBTPlayer.confirmSubmit()" style="background:#ef4444; color:#ffffff; border:none; padding:6px 14px; border-radius:8px; font-weight:700; font-size:12px; cursor:pointer;">
                            ✓ Finish & Submit
                        </button>
                    </div>
                </div>
            </header>

            <!-- SPLIT WORKSPACE -->
            <div style="flex:1; display:flex; overflow:hidden; background:#f8fafc;">
                
                <!-- LEFT/CENTER: QUESTION VIEWPORT -->
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

                    <!-- BOTTOM CONTROLS -->
                    <div style="padding-top:16px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-top:20px;">
                        <div style="display:flex; gap:8px;">
                            <button id="cbt-btn-prev" onclick="CBTPlayer.navigate(-1)" style="background:#ffffff; border:1px solid #cbd5e1; padding:7px 16px; border-radius:8px; font-size:12.5px; font-weight:700; cursor:pointer;">
                                ← Previous
                            </button>
                            <button onclick="CBTPlayer.clearSelection()" style="background:#ffffff; border:1px solid #cbd5e1; color:#64748b; padding:7px 14px; border-radius:8px; font-size:12px; font-weight:600; cursor:pointer;">
                                🧹 Clear Response
                            </button>
                        </div>

                        <div style="display:flex; gap:8px;">
                            <button onclick="CBTPlayer.toggleReviewFlag()" style="background:#f5f3ff; border:1px solid #8b5cf6; color:#8b5cf6; padding:7px 14px; border-radius:8px; font-size:12.5px; font-weight:700; cursor:pointer;">
                                🔖 Mark for Review & Next
                            </button>
                            <button id="cbt-btn-next" onclick="CBTPlayer.navigate(1)" style="background:#2563eb; color:#ffffff; border:none; padding:7px 20px; border-radius:8px; font-size:12.5px; font-weight:700; cursor:pointer;">
                                Save & Next →
                            </button>
                        </div>
                    </div>
                </main>

                <!-- RIGHT SIDEBAR: QUESTION PALETTE -->
                <aside style="width:310px; background:#f8fafc; border-left:1px solid #e2e8f0; display:flex; flex-direction:column; flex-shrink:0;">
                    <div style="padding:14px; background:#ffffff; border-bottom:1px solid #e2e8f0;">
                        <div style="font-size:12px; font-weight:800; color:#0f172a; margin-bottom:8px;">Question Palette Legend</div>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:11px; color:#64748b; font-weight:600;">
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; border-radius:3px; background:#10b981;"></span>Answered (<span id="pal-c-ans">0</span>)</div>
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; border-radius:3px; background:#8b5cf6;"></span>Review (<span id="pal-c-rev">0</span>)</div>
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; border-radius:3px; background:#e2e8f0; border:1px solid #cbd5e1;"></span>Unattempted (<span id="pal-c-un">0</span>)</div>
                            <div style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; border-radius:3px; background:#f59e0b;"></span>Ans+Marked (<span id="pal-c-both">0</span>)</div>
                        </div>
                    </div>

                    <div style="flex:1; overflow-y:auto; padding:12px;">
                        <div id="cbt-palette-buttons-grid" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px;">
                            <!-- 1 to 100 buttons -->
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

        document.getElementById('cbt-q-number-badge').textContent = `Question ${this.currentQIdx + 1} of ${this.activeTest.questions.length}`;
        document.getElementById('cbt-q-body-text').textContent = `Q${this.currentQIdx + 1}. ${q.question_text}`;

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
        const opts = [
            { key: 'A', text: q.option_a },
            { key: 'B', text: q.option_b },
            { key: 'C', text: q.option_c },
            { key: 'D', text: q.option_d }
        ].filter(o => o.text);

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

        document.getElementById('cbt-btn-prev').disabled = this.currentQIdx === 0;
        document.getElementById('cbt-btn-next').textContent = (this.currentQIdx === this.activeTest.questions.length - 1) ? 'Save & Review Palette' : 'Save & Next →';

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
        const grid = document.getElementById('cbt-palette-buttons-grid');
        if (!grid || !this.activeTest) return;

        let answeredCount = 0;
        let reviewCount = 0;
        let unattemptedCount = 0;
        let bothCount = 0;

        let html = '';
        this.activeTest.questions.forEach((q, idx) => {
            const isAns = this.userAnswers[idx] !== undefined;
            const isRev = this.flaggedReview[idx] === true;
            const isCurrent = this.currentQIdx === idx;

            let bgColor = '#f1f5f9';
            let textColor = '#475569';
            let borderColor = '#cbd5e1';

            if (isAns && isRev) {
                bgColor = '#f59e0b';
                textColor = '#ffffff';
                borderColor = '#d97706';
                bothCount++;
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

            html += `
                <button onclick="CBTPlayer.jumpTo(${idx})" style="
                    height: 32px;
                    border-radius: 6px;
                    border: ${isCurrent ? '2px solid #2563eb' : `1px solid ${borderColor}`};
                    background: ${bgColor};
                    color: ${textColor};
                    font-weight: 800;
                    font-size: 11px;
                    cursor: pointer;
                    outline: ${isCurrent ? '2px solid #93c5fd' : 'none'};
                ">
                    ${idx + 1}
                </button>
            `;
        });

        grid.innerHTML = html;
        document.getElementById('pal-c-ans').textContent = answeredCount;
        document.getElementById('pal-c-rev').textContent = reviewCount;
        document.getElementById('pal-c-un').textContent = unattemptedCount;
        document.getElementById('pal-c-both').textContent = bothCount;
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

        const score = Math.max(0, (correctCount * 4) - (wrongCount * 1));
        const totalMarks = this.activeTest.questions.length * 4;
        const percentage = Math.round((score / totalMarks) * 100);
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
            answers_json: this.userAnswers,
            submitted_at: new Date().toISOString()
        };

        // 1. Save Locally
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

        this.closeModal();

        // 3. Render Pedagogical Scorecard Modal
        this.renderScorecardModal(submissionObj);

        // 4. Callback
        if (this.onCompleteCallback) {
            this.onCompleteCallback(submissionObj);
        }
    },

    renderScorecardModal(result) {
        let scOverlay = document.getElementById('cbt-scorecard-modal-overlay');
        if (!scOverlay) {
            scOverlay = document.createElement('div');
            scOverlay.id = 'cbt-scorecard-modal-overlay';
            scOverlay.style.cssText = `
                position: fixed; top: 0; left: 0;
                width: 100vw; height: 100vh;
                background: rgba(11, 19, 41, 0.85);
                z-index: 100000;
                display: flex; align-items: center; justify-content: center;
                font-family: 'Plus Jakarta Sans', sans-serif;
            `;
            document.body.appendChild(scOverlay);
        }

        scOverlay.style.display = 'flex';
        scOverlay.innerHTML = `
            <div style="background:#ffffff; border-radius:14px; max-width:760px; width:94%; max-height:90vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.3);">
                <!-- HEADER -->
                <div style="background:#0b1329; color:#ffffff; padding:16px 22px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size:16px; font-weight:800; color:#fff;">🎯 Assessment Scorecard</div>
                        <div style="font-size:12px; color:#94a3b8;">${this.activeTest.title}</div>
                    </div>
                    <button onclick="document.getElementById('cbt-scorecard-modal-overlay').style.display='none';" style="background:none; border:none; color:#fff; font-size:18px; cursor:pointer;">✕</button>
                </div>

                <!-- BODY -->
                <div style="padding:20px; overflow-y:auto; flex:1;">
                    <div style="background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border:1px solid #bfdbfe; border-radius:12px; padding:18px; text-align:center; margin-bottom:18px;">
                        <div style="font-size:12px; font-weight:700; color:#1e40af; text-transform:uppercase;">Test Result</div>
                        <div style="font-size:34px; font-weight:800; color:#2563eb; margin:4px 0;">${result.score} / ${result.total_marks}</div>
                        <div style="font-size:14px; font-weight:700; color:#0f172a;">Percentage: ${result.percentage}% • Accuracy: ${result.accuracy_pct}%</div>
                    </div>

                    <!-- METRICS -->
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(110px, 1fr)); gap:10px; margin-bottom:20px;">
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                            <div style="font-size:10.5px; font-weight:700; color:#64748b; text-transform:uppercase;">Correct</div>
                            <div style="font-size:16px; font-weight:800; color:#10b981;">✓ ${result.correct_count}</div>
                        </div>
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                            <div style="font-size:10.5px; font-weight:700; color:#64748b; text-transform:uppercase;">Wrong</div>
                            <div style="font-size:16px; font-weight:800; color:#ef4444;">✕ ${result.incorrect_count}</div>
                        </div>
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                            <div style="font-size:10.5px; font-weight:700; color:#64748b; text-transform:uppercase;">Skipped</div>
                            <div style="font-size:16px; font-weight:800; color:#64748b;">⚪ ${result.unattempted_count}</div>
                        </div>
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                            <div style="font-size:10.5px; font-weight:700; color:#64748b; text-transform:uppercase;">Time Taken</div>
                            <div style="font-size:16px; font-weight:800; color:#8b5cf6;">${Math.floor(result.time_taken_seconds / 60)}m ${result.time_taken_seconds % 60}s</div>
                        </div>
                    </div>

                    <!-- SOLUTIONS & EXPLANATIONS -->
                    <div style="font-size:14px; font-weight:800; color:#0f172a; margin-bottom:10px;">Question-by-Question Solution & Explanations</div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        ${this.activeTest.questions.map((q, idx) => {
                            const userAns = this.userAnswers[idx];
                            const isCorrect = userAns === q.correct_option;
                            return `
                                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px;">
                                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                                        <b style="font-size:13px; color:#0f172a;">Q${idx + 1}. ${q.question_text}</b>
                                        <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; background:${!userAns ? '#e2e8f0' : (isCorrect ? '#ecfdf5' : '#fef2f2')}; color:${!userAns ? '#475569' : (isCorrect ? '#10b981' : '#ef4444')};">
                                            ${!userAns ? 'Skipped' : (isCorrect ? '✓ Correct (+4)' : '✕ Wrong (-1)')}
                                        </span>
                                    </div>
                                    <div style="font-size:12px; margin-bottom:6px;">
                                        <span>Your Answer: <b>${userAns ? `Option (${userAns})` : 'None'}</b></span> • 
                                        <span style="color:#10b981;">Correct Answer: <b>Option (${q.correct_option})</b></span>
                                    </div>
                                    ${q.explanation ? `<div style="font-size:11.5px; color:#475569; background:#ffffff; border-left:3px solid #2563eb; padding:8px 10px; border-radius:4px;">💡 <b>Explanation:</b> ${q.explanation}</div>` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- FOOTER -->
                <div style="padding:12px 20px; border-top:1px solid #e2e8f0; display:flex; justify-content:flex-end;">
                    <button onclick="document.getElementById('cbt-scorecard-modal-overlay').style.display='none';" style="background:#2563eb; color:#ffffff; border:none; padding:8px 18px; border-radius:8px; font-weight:700; font-size:13px; cursor:pointer;">
                        Close Scorecard
                    </button>
                </div>
            </div>
        `;
    }
};

if (typeof window !== 'undefined') {
    window.CBTPlayer = CBTPlayer;
}
