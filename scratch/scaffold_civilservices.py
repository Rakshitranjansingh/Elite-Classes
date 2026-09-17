import os
import json

subjects = [
    {
        "id": "polity",
        "name": "Indian Polity & Governance",
        "short": "Polity",
        "icon": "⚖️",
        "color": "#4338ca",
        "color_accent": "#6366f1",
        "gradient": "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
        "desc": "Constitutional Framework, Fundamental Rights, Directive Principles, Parliament, Judiciary & Federal Structure.",
        "chapters": [
            "Constitutional Framework & Preamble",
            "Fundamental Rights, Duties & DPSPs",
            "Union Executive: President, PM & Cabinet",
            "Parliament & Parliamentary Committees",
            "Supreme Court & Judicial Review",
            "Federal Structure & Center-State Relations",
            "Emergency Provisions & Constitutional Amendments",
            "Constitutional & Non-Constitutional Bodies"
        ]
    },
    {
        "id": "history",
        "name": "Indian History & National Movement",
        "short": "History",
        "icon": "🏛️",
        "color": "#b45309",
        "color_accent": "#d97706",
        "gradient": "linear-gradient(135deg, #78350f 0%, #451a03 100%)",
        "desc": "Ancient & Medieval India, Modern Freedom Struggle, Social Reform Movements, and Post-Independence Consolidation.",
        "chapters": [
            "Ancient India: Indus Valley & Vedic Age",
            "Mauryan & Gupta Empires & Cultural Heritage",
            "Medieval India: Delhi Sultanate & Mughals",
            "British Rule: Expansion & Economic Impact",
            "Revolt of 1857 & Early Resistance",
            "Indian National Movement: Gandhian Era (1915-1947)",
            "Tribal, Peasant & Social Reform Movements",
            "Post-Independence Consolidation & Reorganisation"
        ]
    },
    {
        "id": "geography",
        "name": "Geography & Environment",
        "short": "Geography",
        "icon": "🌐",
        "color": "#0284c7",
        "color_accent": "#0ea5e9",
        "gradient": "linear-gradient(135deg, #075985 0%, #082f49 100%)",
        "desc": "Physical Geography, Geomorphology, Climatology, Indian River Systems, Biodiversity & Ecological Conservation.",
        "chapters": [
            "Physical Geography & Earth's Interior",
            "Climatology: Atmosphere & Monsoon Dynamics",
            "Oceanography & Marine Resources",
            "Indian Physiography & Drainage Systems",
            "Soil, Vegetation & Agricultural Patterns",
            "Minerals, Energy & Industrial Corridors",
            "Ecology, Biodiversity & Biosphere Reserves",
            "Climate Change & Environmental Treaties"
        ]
    },
    {
        "id": "economy",
        "name": "Indian Economy & Development",
        "short": "Economy",
        "icon": "📈",
        "color": "#059669",
        "color_accent": "#10b981",
        "gradient": "linear-gradient(135deg, #065f46 0%, #022c22 100%)",
        "desc": "Macroeconomics, Fiscal & Monetary Policies, Banking System, Inflation, Budgeting, and Sustainable Development.",
        "chapters": [
            "National Income & Economic Growth",
            "Fiscal Policy, Budgeting & Taxation",
            "Monetary Policy & Reserve Bank of India",
            "Indian Banking & Financial Sector",
            "Agriculture, Food Security & PDS Reforms",
            "International Trade, Balance of Payments & IMF/WTO"
        ]
    },
    {
        "id": "csat",
        "name": "CSAT: Aptitude & Reasoning",
        "short": "CSAT",
        "icon": "📐",
        "color": "#7c3aed",
        "color_accent": "#8b5cf6",
        "gradient": "linear-gradient(135deg, #5b21b6 0%, #2e1065 100%)",
        "desc": "Reading Comprehension, Logical & Analytical Reasoning, Quantitative Aptitude & Data Interpretation.",
        "chapters": [
            "Reading Comprehension & Inference",
            "Logical & Analytical Reasoning",
            "Syllogisms & Critical Deduction",
            "Number System & Basic Arithmetic",
            "Data Interpretation & Sufficiency",
            "Decision Making & Problem Solving"
        ]
    },
    {
        "id": "physics",
        "name": "General Science: Physics",
        "short": "Physics",
        "icon": "⚛️",
        "color": "#2563eb",
        "color_accent": "#3b82f6",
        "gradient": "linear-gradient(135deg, #1e40af 0%, #172554 100%)",
        "desc": "Mechanics, Thermodynamics, Optics, Wave Theory, Electricity, Magnetism & Nuclear Energy Applications.",
        "chapters": [
            "Units, Dimensions & Classical Mechanics",
            "Gravitation, Friction & Fluid Mechanics",
            "Heat, Thermodynamics & Transfer Modes",
            "Optics: Reflection, Refraction & Optical Instruments",
            "Electricity, Magnetism & Electromagnetic Induction",
            "Modern Physics, Radiation & Nuclear Technology"
        ]
    },
    {
        "id": "chemistry",
        "name": "General Science: Chemistry",
        "short": "Chemistry",
        "icon": "🧪",
        "color": "#0891b2",
        "color_accent": "#06b6d4",
        "gradient": "linear-gradient(135deg, #155e75 0%, #083344 100%)",
        "desc": "Atomic Structure, Periodic Trends, Chemical Bonding, Carbon Compounds, Polymers & Everyday Chemistry.",
        "chapters": [
            "Atomic Structure & Periodic Table Trends",
            "Chemical Bonding & Molecular Forces",
            "Acids, Bases, Salts & pH Scale",
            "Metals, Non-Metals & Metallurgy",
            "Carbon Chemistry, Hydrocarbons & Polymers",
            "Environmental Chemistry & Everyday Applications"
        ]
    },
    {
        "id": "biology",
        "name": "General Science: Biology & Life Sciences",
        "short": "Biology",
        "icon": "🧬",
        "color": "#10b981",
        "color_accent": "#34d399",
        "gradient": "linear-gradient(135deg, #047857 0%, #064e3b 100%)",
        "desc": "Cell Biology, Genetics, Human Physiology, Plant Anatomy, Immunology, Diseases & Biotechnology.",
        "chapters": [
            "Cell Structure, Organelles & Cell Division",
            "Genetics, DNA/RNA & Inheritance",
            "Human Digestive, Circulatory & Nervous Systems",
            "Endocrine, Reproductive & Excretory Systems",
            "Human Diseases, Pathogens & Vaccines",
            "Plant Anatomy, Photosynthesis & Hormones",
            "Biotechnology, Genetic Engineering & Stem Cells"
        ]
    }
]

# Read sample course_player.html to adapt
with open('modules/course/class10/economics/course_player.html', 'r', encoding='utf-8') as f:
    sample_player = f.read()

# Read sample economics_course_hub.html to adapt
with open('modules/course/class10/economics/economics_course_hub.html', 'r', encoding='utf-8') as f:
    sample_course_hub = f.read()

# Read sample history_10.html to adapt for test series
with open('modules/testseries/data/class10/history/history_10.html', 'r', encoding='utf-8') as f:
    sample_test_hub = f.read()

print("Loaded sample files successfully.")

os.makedirs('modules/course/civilservices', exist_ok=True)
os.makedirs('modules/course/data/civilservices', exist_ok=True)
os.makedirs('modules/testseries/data/civilservices', exist_ok=True)

for sub in subjects:
    sub_id = sub['id']
    sub_name = sub['name']
    sub_short = sub['short']
    sub_icon = sub['icon']
    sub_color = sub['color']
    sub_accent = sub['color_accent']
    chapters = sub['chapters']
    ch_count = len(chapters)

    # 1. Ensure directory existence
    course_dir = f"modules/course/civilservices/{sub_id}"
    course_data_dir = f"modules/course/data/civilservices/{sub_id}"
    testseries_dir = f"modules/testseries/data/civilservices/{sub_id}"

    os.makedirs(course_dir, exist_ok=True)
    os.makedirs(course_data_dir, exist_ok=True)
    os.makedirs(testseries_dir, exist_ok=True)

    # -------------------------------------------------------------
    # GENERATE <subject>_course_hub.html
    # -------------------------------------------------------------
    hub_html = sample_course_hub
    hub_html = hub_html.replace('Class 10 Economics Interactive Courses Hub', f'Civil Services {sub_short} Interactive Courses Hub')
    hub_html = hub_html.replace('Class 10 Economics', f'Civil Services {sub_short}')
    hub_html = hub_html.replace('Economics Courses', f'{sub_short} Courses')
    hub_html = hub_html.replace('Class 10', 'Civil Services')
    hub_html = hub_html.replace('c10_econ', f'civil_{sub_id}')
    hub_html = hub_html.replace('--primary-emerald: #059669;', f'--primary-emerald: {sub_color};')
    hub_html = hub_html.replace('--accent-green: #10b981;', f'--accent-green: {sub_accent};')
    hub_html = hub_html.replace('background: #059669;', f'background: {sub_color};')
    hub_html = hub_html.replace('color: #059669;', f'color: {sub_color};')
    hub_html = hub_html.replace('border-color: #059669;', f'border-color: {sub_color};')
    hub_html = hub_html.replace('5 Chapters • 100 Modules', f'{ch_count} Chapters • {ch_count * 20} Modules')
    hub_html = hub_html.replace('1,000 Questions • 70% Mastery Gated', f'{ch_count * 100} Questions • 70% Mastery Gated')
    hub_html = hub_html.replace('Understanding Economic Development', sub['desc'])

    # Build dynamic chapter cards
    cards_html = []
    for idx, ch_title in enumerate(chapters, start=1):
        card = f"""
            <div class="chapter-card" id="card-chapter-{idx}">
                <div class="chapter-card-top">
                    <span class="chapter-num-badge">Ch {idx}</span>
                    <span class="chapter-status-pill" id="badge-ch{idx}-status">Module 1 Ready</span>
                </div>
                <h3 class="chapter-card-title">{idx}. {ch_title}</h3>
                <div class="chapter-card-meta">
                    <span>📚 20 Modules</span>
                    <span>📝 100 MCQs</span>
                    <span>🎯 70% Pass</span>
                </div>
                <div class="chapter-progress-section">
                    <div class="chapter-progress-header">
                        <span>Mastery Progress</span>
                        <span id="ch{idx}-pct-text">0%</span>
                    </div>
                    <div class="chapter-progress-bar">
                        <div class="chapter-progress-fill" id="ch{idx}-progress-fill" style="width: 0%;"></div>
                    </div>
                </div>
                <div class="chapter-card-action">
                    <span style="font-size:11.5px; font-weight:700; color:#64748b;" id="ch{idx}-modules-completed">0 / 20 Done</span>
                    <button class="btn-start-chapter" onclick="startChapter({idx})">
                        Study Chapter →
                    </button>
                </div>
            </div>
        """
        cards_html.append(card)

    # Replace grid content in hub_html
    # Look for chapter grid
    grid_start = hub_html.find('<div class="chapters-grid">')
    grid_end = hub_html.find('</div>\n\n        <!-- FOOTER INFO BOX -->', grid_start)
    if grid_start != -1 and grid_end != -1:
        new_grid = '<div class="chapters-grid">\n' + '\n'.join(cards_html) + '\n        '
        hub_html = hub_html[:grid_start] + new_grid + hub_html[grid_end:]

    # Fix chapter total in script
    hub_html = hub_html.replace('const TOTAL_CHAPTERS = 5;', f'const TOTAL_CHAPTERS = {ch_count};')
    hub_html = hub_html.replace('c10_econ_ch', f'civil_{sub_id}_ch')

    with open(f"{course_dir}/{sub_id}_course_hub.html", 'w', encoding='utf-8') as f:
        f.write(hub_html)

    # -------------------------------------------------------------
    # GENERATE course_player.html
    # -------------------------------------------------------------
    player_html = sample_player
    player_html = player_html.replace('Class 10 Economics Interactive Course', f'Civil Services {sub_short} Interactive Course')
    player_html = player_html.replace('Class 10 Economics', f'Civil Services {sub_short}')
    player_html = player_html.replace('economics_course_hub.html', f'{sub_id}_course_hub.html')
    player_html = player_html.replace('../../data/class10/economics/', f'../../data/civilservices/{sub_id}/')
    player_html = player_html.replace('c10_econ_ch', f'civil_{sub_id}_ch')
    player_html = player_html.replace('cls: \'Class 10\'', 'cls: \'Civil Services\'')
    player_html = player_html.replace('Math.min(5, chParam)', f'Math.min({ch_count}, chParam)')
    player_html = player_html.replace('--c-primary: #065f46;', f'--c-primary: {sub_color};')
    player_html = player_html.replace('--c-accent: #059669;', f'--c-accent: {sub_accent};')

    # Update chapter dropdown options
    picker_opts = '\n'.join([f'                <option value="{i}">Ch {i}: {ch}</option>' for i, ch in enumerate(chapters, start=1)])
    old_picker_start = player_html.find('<select class="chapter-picker-select" id="global-chapter-picker"')
    if old_picker_start != -1:
        old_picker_open_end = player_html.find('>', old_picker_start) + 1
        old_picker_close = player_html.find('</select>', old_picker_open_end)
        player_html = player_html[:old_picker_open_end] + '\n' + picker_opts + '\n            ' + player_html[old_picker_close:]

    with open(f"{course_dir}/course_player.html", 'w', encoding='utf-8') as f:
        f.write(player_html)

    # -------------------------------------------------------------
    # GENERATE <subject>_civil.html (Subject Test Series Portal)
    # -------------------------------------------------------------
    test_html = sample_test_hub
    test_html = test_html.replace('Class 10 • Comprehensive Test Series', 'Civil Services • CBT Prelims Test Series')
    test_html = test_html.replace('History Chapter-Wise CBT Assessments', f'{sub_name} Chapter-Wise CBT Assessments')
    test_html = test_html.replace('← Class 10 Hub', '← Civil Services Hub')
    test_html = test_html.replace('../testseries_class_10.html', '../testseries_civilservices.html')
    test_html = test_html.replace('ts_c10_hist_', f'ts_civil_{sub_id}_')
    test_html = test_html.replace('Class 10 Student', 'Civil Services Aspirant')
    test_html = test_html.replace('Class 10', 'Civil Services')
    test_html = test_html.replace('linear-gradient(135deg, #1e3a8a, #0b1329)', sub['gradient'])

    # Build test chapter cards
    test_cards = []
    for idx, ch_title in enumerate(chapters, start=1):
        ts_code = f"ts_civil_{sub_id}_ch{idx}"
        card = f"""
            <div class="chapter-card" id="card-{ts_code}">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-primary" style="font-size:10.5px;">100 Questions</span>
                        <span id="badge-status-{ts_code}" class="badge badge-warning" style="font-size:10.5px;">Not Enrolled</span>
                    </div>

                    <div style="font-size:15px; font-weight:800; color:var(--text); margin-bottom:8px;">
                        Chapter {idx}: {ch_title}
                    </div>

                    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">⏱️ 90 Mins</span>
                        <span class="meta-pill">🎯 400 Marks</span>
                        <span class="meta-pill">⚠️ -1.0 Neg</span>
                    </div>
                </div>

                <div id="action-{ts_code}">
                    <button class="btn btn-outline btn-sm" onclick="enrollInTest('{ts_code}')" style="width:100%; font-weight:700; padding:8px;">
                        📝 Enroll in Test
                    </button>
                </div>
            </div>
        """
        test_cards.append(card)

    test_grid_start = test_html.find('<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">')
    test_grid_end = test_html.find('</div>\n    </div>\n\n    <!-- TOAST -->', test_grid_start)
    if test_grid_start != -1 and test_grid_end != -1:
        new_test_grid = '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">\n' + '\n'.join(test_cards) + '\n    '
        test_html = test_html[:test_grid_start] + new_test_grid + test_html[test_grid_end:]

    # Remove history script tags and keep base engine
    script_block_start = test_html.find('<!-- CHAPTER ASSESSMENT DATA SCRIPTS -->')
    script_block_end = test_html.find('<script>', script_block_start)
    if script_block_start != -1 and script_block_end != -1:
        test_html = test_html[:script_block_start] + '<!-- CHAPTER ASSESSMENT SCRIPTS -->\n    ' + test_html[script_block_end:]

    with open(f"{testseries_dir}/{sub_id}_civil.html", 'w', encoding='utf-8') as f:
        f.write(test_html)

    # Create README in course data directory
    with open(f"{course_data_dir}/README.md", 'w', encoding='utf-8') as f:
        f.write(f"# Civil Services — {sub_name}\n\nThis directory stores 20-module bite-sized interactive chapter course data (`chapter1_course_data.js` to `chapter{ch_count}_course_data.js`).\n")

    print(f"[OK] Scaffolding completed for {sub_name} ({sub_id})")

print("\nAll 8 subjects scaffolded successfully!")
