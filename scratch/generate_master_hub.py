import re

with open('modules/testseries/data/class10/testseries_class_10.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace general references
html = html.replace('Class 10: Test Series Hub', 'Civil Services: Test Series Hub')
html = html.replace('Class 10 Master Leadership Hub (All Subjects)', 'Civil Services Master Leadership Hub (All Subjects)')
html = html.replace('Class 10 Subject Test Series', 'Civil Services Subject Assessments')
html = html.replace('class10-overall-leaderboard-tbody', 'civilservices-overall-leaderboard-tbody')
html = html.replace('NCERT Curriculum', 'Civil Services (UPSC / State PCS)')
html = html.replace('Class 10 Student', 'Civil Services Aspirant')
html = html.replace('c10_sci', 'civil_gs')

# Replace subject cards grid
cards_html = """
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:14px;">
            
            <!-- SUBJECT 1: POLITY -->
            <a href="polity/polity_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">GS Paper II</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        ⚖️ Indian Polity & Governance
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Constitutional Framework, Fundamental Rights, Parliament, Supreme Court & Federal Structure.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">⚖️ 8 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open Polity Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 2: HISTORY -->
            <a href="history/history_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">GS Paper I</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        🏛️ Indian History & National Movement
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Ancient, Medieval & Modern Indian History, Gandhian Movements & Post-Independence Consolidation.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">🏛️ 8 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open History Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 3: GEOGRAPHY -->
            <a href="geography/geography_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">GS Paper I & III</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        🌐 Geography & Environment
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Physical Geography, Climatology, Indian Physiography, Biodiversity & Climate Treaties.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">🌐 8 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open Geography Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 4: ECONOMY -->
            <a href="economy/economy_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">GS Paper III</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        📈 Indian Economy & Development
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        National Income, Fiscal & Monetary Policies, Banking System, Budgeting, and Foreign Trade.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">📈 6 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open Economy Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 5: CSAT -->
            <a href="csat/csat_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-purple" style="font-size:10.5px;">Prelims Paper II</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        📐 CSAT: Aptitude & Reasoning
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Reading Comprehension, Logical & Analytical Reasoning, Data Interpretation & Arithmetic.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">📐 6 Chapters</span>
                        <span class="meta-pill">🎯 Qualifying Focus</span>
                        <span class="meta-pill">⏱️ Speed Drills</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open CSAT Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 6: PHYSICS -->
            <a href="physics/physics_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">General Science</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        ⚛️ General Science: Physics
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Mechanics, Thermodynamics, Optics, Wave Motion, Electricity, Magnetism & Nuclear Technology.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">⚛️ 6 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open Physics Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 7: CHEMISTRY -->
            <a href="chemistry/chemistry_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">General Science</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        🧪 General Science: Chemistry
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Periodic Trends, Chemical Bonding, Acids & Bases, Metallurgy, Polymers & Applied Chemistry.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">🧪 6 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open Chemistry Tests →
                    </button>
                </div>
            </a>

            <!-- SUBJECT 8: BIOLOGY -->
            <a href="biology/biology_civil.html" class="subject-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                        <span class="badge badge-primary" style="font-size:10.5px;">General Science</span>
                    </div>

                    <div style="font-size:16px; font-weight:800; color:var(--text); margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                        🧬 General Science: Biology & Life Sciences
                    </div>

                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
                        Cell Biology, Genetics, Human Physiology, Immunology, Diseases, Plant Systems & Biotechnology.
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">🧬 7 Chapters</span>
                        <span class="meta-pill">🎯 400 Marks / Test</span>
                        <span class="meta-pill">⏱️ Real-time CBT</span>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700; padding:8px; pointer-events:none;">
                        Open Biology Tests →
                    </button>
                </div>
            </a>
        </div>
"""

# Replace the subjects catalog grid
grid_start = html.find('<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:14px;">')
grid_end = html.find('</div>\n    </div>\n\n    <!-- 4. FLOATING / TOAST NOTIFICATION -->', grid_start)
if grid_start != -1 and grid_end != -1:
    html = html[:grid_start] + cards_html.strip() + '\n    ' + html[grid_end:]

with open('modules/testseries/data/civilservices/testseries_civilservices.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("[OK] testseries_civilservices.html generated successfully!")
