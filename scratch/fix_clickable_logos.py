import os
import re

WORKSPACE = r"c:\Users\raksh\Desktop\Projects\EliteClasses"

def fix_testseries_class_hubs():
    files = [
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "testseries_class_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "testseries_civilservices.html"),
    ]
    for fpath in files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        orig = content

        # Replace non-clickable div with clickable a
        pattern = r'<div style="display:flex; align-items:center; gap:10px;">\s*<img src="\.\./\.\./\.\./\.\./eliteLogo_crest\.png"'
        replacement = r'<a href="../../../../student_home.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n            <img src="../../../../eliteLogo_crest.png"'
        content = re.sub(pattern, replacement, content)

        # Close the tag: replace </div>\s*</div>\s*<div style="display:flex; align-items:center; gap:8px;">
        # with </div>\n        </a>\n\n        <div style="display:flex; align-items:center; gap:8px;">
        pattern_close = r'(<div style="font-size:10px; color:var\(--text-muted\); text-transform:uppercase; font-weight:700;">Committed to success</div>\s*</div>)\s*</div>'
        replacement_close = r'\1\n        </a>'
        content = re.sub(pattern_close, replacement_close, content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated testseries class hub: {os.path.basename(fpath)}")
        else:
            print(f"No changes in testseries class hub: {os.path.basename(fpath)}")

def fix_testseries_subject_portals():
    files = [
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "science", "science_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "mathematics", "mathematics_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "history", "history_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "geography", "geography_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "politics", "politics_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "class10", "economics", "economics_10.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "polity", "polity_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "chemistry", "chemistry_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "history", "history_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "geography", "geography_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "physics", "physics_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "economy", "economy_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "biology", "biology_civil.html"),
        os.path.join(WORKSPACE, "modules", "testseries", "data", "civilservices", "csat", "csat_civil.html"),
    ]
    for fpath in files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        orig = content

        pattern = r'<div style="display:flex; align-items:center; gap:10px;">\s*<img src="\.\./\.\./\.\./\.\./\.\./eliteLogo_crest\.png"'
        replacement = r'<a href="../../../../../student_home.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n            <img src="../../../../../eliteLogo_crest.png"'
        content = re.sub(pattern, replacement, content)

        pattern_close = r'(<div style="font-size:10px; color:var\(--text-muted\); text-transform:uppercase; font-weight:700;">Committed to success</div>\s*</div>)\s*</div>'
        replacement_close = r'\1\n        </a>'
        content = re.sub(pattern_close, replacement_close, content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated testseries subject portal: {os.path.basename(fpath)}")
        else:
            print(f"No changes in testseries subject portal: {os.path.basename(fpath)}")

def fix_other_testseries_files():
    # subject_portal.html
    sp_path = os.path.join(WORKSPACE, "modules", "testseries", "subject_portal.html")
    if os.path.exists(sp_path):
        with open(sp_path, "r", encoding="utf-8") as f:
            c = f.read()
        c = re.sub(
            r'<div style="display:flex; align-items:center; gap:10px;">\s*<img src="\.\./\.\./eliteLogo_crest\.png"',
            r'<a href="../../student_home.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n            <img src="../../eliteLogo_crest.png"',
            c
        )
        c = re.sub(
            r'(<div style="font-size:10px; color:var\(--text-muted\); text-transform:uppercase; font-weight:700;">Committed to success</div>\s*</div>)\s*</div>',
            r'\1\n        </a>',
            c
        )
        with open(sp_path, "w", encoding="utf-8") as f:
            f.write(c)
        print("Updated subject_portal.html")

    # testseries.html
    ts_path = os.path.join(WORKSPACE, "modules", "testseries", "testseries.html")
    if os.path.exists(ts_path):
        with open(ts_path, "r", encoding="utf-8") as f:
            c = f.read()
        c = c.replace(
            '<div style="display:flex; align-items:center; gap:14px;">\n                <img src="eliteLogo_crest.png"',
            '<a href="../../student_home.html" style="display:flex; align-items:center; gap:14px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n                <img src="eliteLogo_crest.png"'
        )
        c = c.replace(
            'Chapter Assessment</span> • Full CBT Question Bank</div>\n                </div>\n            </div>',
            'Chapter Assessment</span> • Full CBT Question Bank</div>\n                </div>\n            </a>'
        )
        with open(ts_path, "w", encoding="utf-8") as f:
            f.write(c)
        print("Updated testseries.html")

    # testseries_user_home.html
    tuh_path = os.path.join(WORKSPACE, "testseries_user_home.html")
    if os.path.exists(tuh_path):
        with open(tuh_path, "r", encoding="utf-8") as f:
            c = f.read()
        c = c.replace(
            '<div class="brand-wrapper">\n                <img src="eliteLogo_crest.png" alt="Elite Classes" class="brand-logo-icon">',
            '<a href="student_home.html" class="brand-wrapper" style="text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n                <img src="eliteLogo_crest.png" alt="Elite Classes" class="brand-logo-icon">'
        )
        c = c.replace(
            '<div class="brand-sub">Committed to success</div>\n                </div>\n            </div>\n\n            <div style="display:flex; align-items:center; gap:12px;">',
            '<div class="brand-sub">Committed to success</div>\n                </div>\n            </a>\n\n            <div style="display:flex; align-items:center; gap:12px;">'
        )
        with open(tuh_path, "w", encoding="utf-8") as f:
            f.write(c)
        print("Updated testseries_user_home.html")

def fix_courses_class_hubs():
    files = [
        os.path.join(WORKSPACE, "modules", "course", "class10", "courses_class_10.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "courses_civilservices.html"),
    ]
    for fpath in files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        orig = content
        pattern = r'<div style="display:flex; align-items:center; gap:10px;">\s*<img src="\.\./\.\./\.\./eliteLogo_crest\.png"'
        replacement = r'<a href="../../../student_home.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n            <img src="../../../eliteLogo_crest.png"'
        content = re.sub(pattern, replacement, content)

        pattern_close = r'(<div style="font-size:10px; color:var\(--text-muted\); text-transform:uppercase; font-weight:700;">Interactive Learning Management System</div>\s*</div>)\s*</div>'
        replacement_close = r'\1\n        </a>'
        content = re.sub(pattern_close, replacement_close, content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated course class hub: {os.path.basename(fpath)}")
        else:
            print(f"No changes in course class hub: {os.path.basename(fpath)}")

def fix_course_subject_hubs():
    # 1. science_course_hub.html
    sci_path = os.path.join(WORKSPACE, "modules", "course", "class10", "science", "science_course_hub.html")
    if os.path.exists(sci_path):
        with open(sci_path, "r", encoding="utf-8") as f:
            c = f.read()
        old_header = """    <header class="hub-header">
        <div style="display:flex; align-items:center; gap:10px;">
            <a href="../../../../student_home.html" class="btn-transparent-nav" title="Back to Student Portal">
                ← Back
            </a>
            <span style="font-size:15px; font-weight:800; color:#f8fafc;">Class 10 Science</span>
        </div>
        <div style="font-size:12px; color:#94a3b8; font-weight:600;" id="hub-student-name">Student Portal</div>
    </header>"""
        new_header = """    <header class="hub-header">
        <a href="../../../../student_home.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">
            <img src="../../../../eliteLogo_crest.png" onerror="this.src='../../../../favicon-32x32.png'" alt="Elite Classes" style="height:30px; width:30px; border-radius:6px;">
            <div>
                <div style="font-size:14px; font-weight:800; color:#ffffff; letter-spacing:-0.2px;">ELITE CLASSES</div>
                <div style="font-size:11px; color:#94a3b8;">Class 10 • Science Interactive Curriculum</div>
            </div>
        </a>
        <div style="display:flex; align-items:center; gap:10px;">
            <a href="../../../../student_home.html" class="btn-transparent-nav">
                ← Student Portal
            </a>
        </div>
    </header>"""
        if old_header in c:
            c = c.replace(old_header, new_header)
            with open(sci_path, "w", encoding="utf-8") as f:
                f.write(c)
            print("Updated science_course_hub.html")
        else:
            print("Notice: science_course_hub header format differed")

    # Other 12 subject hubs
    hub_files = [
        (os.path.join(WORKSPACE, "modules", "course", "class10", "geography", "geography_course_hub.html"), "Class 10 • Geography"),
        (os.path.join(WORKSPACE, "modules", "course", "class10", "economics", "economics_course_hub.html"), "Class 10 • Economics"),
        (os.path.join(WORKSPACE, "modules", "course", "class10", "history", "history_course_hub.html"), "Class 10 • History"),
        (os.path.join(WORKSPACE, "modules", "course", "class10", "politics", "politics_course_hub.html"), "Class 10 • Politics"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "polity", "polity_course_hub.html"), "Civil Services • Polity"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "physics", "physics_course_hub.html"), "Civil Services • Physics"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "history", "history_course_hub.html"), "Civil Services • History"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "geography", "geography_course_hub.html"), "Civil Services • Geography"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "economy", "economy_course_hub.html"), "Civil Services • Economy"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "csat", "csat_course_hub.html"), "Civil Services • CSAT"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "chemistry", "chemistry_course_hub.html"), "Civil Services • Chemistry"),
        (os.path.join(WORKSPACE, "modules", "course", "civilservices", "biology", "biology_course_hub.html"), "Civil Services • Biology"),
    ]

    for fpath, label in hub_files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        orig = content

        # Replace separate div + a img + div text with unified <a ...>
        # Pattern matches:
        # <div style="display: flex; align-items: center; gap: 12px;">
        #     <a href="../../../../student_home.html" ...>
        #         <img ...>
        #     </a>
        #     <div>
        #         <div ...>ELITE CLASSES</div>
        #         <div ...>...</div>
        #     </div>
        # </div>
        pattern = (
            r'<div style="display:\s*flex;\s*align-items:\s*center;\s*gap:\s*12px;">\s*'
            r'<a href="\.\./\.\./\.\./\.\./student_home\.html"[^>]*>\s*'
            r'<img src="[^"]*"[^>]*>\s*'
            r'</a>\s*'
            r'<div>\s*'
            r'<div style="font-size:\s*14px;\s*font-weight:\s*800;\s*color:\s*#ffffff;\s*letter-spacing:\s*-0\.2px;">ELITE CLASSES</div>\s*'
            r'<div style="font-size:\s*11px;\s*color:\s*#94a3b8;">([^<]*)</div>\s*'
            r'</div>\s*'
            r'</div>'
        )

        replacement = (
            r'<a href="../../../../student_home.html" style="display:flex; align-items:center; gap:12px; text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">\n'
            r'            <img src="../../../../eliteLogo_crest.png" onerror="this.src=\'../../../../favicon-32x32.png\'" alt="Elite Classes" style="height:30px; width:30px; border-radius:6px;">\n'
            r'            <div>\n'
            r'                <div style="font-size:14px; font-weight:800; color:#ffffff; letter-spacing:-0.2px;">ELITE CLASSES</div>\n'
            r'                <div style="font-size:11px; color:#94a3b8;">\1</div>\n'
            r'            </div>\n'
            r'        </a>'
        )

        content = re.sub(pattern, replacement, content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated subject course hub: {os.path.basename(fpath)}")
        else:
            print(f"No changes in subject course hub: {os.path.basename(fpath)}")

def fix_course_players():
    player_files = [
        os.path.join(WORKSPACE, "modules", "course", "class10", "science", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "geography", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "economics", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "history", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "politics", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "polity", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "physics", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "history", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "geography", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "economy", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "csat", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "chemistry", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "biology", "course_player.html"),
    ]

    for fpath in player_files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        orig = content

        # Check if clickable logo is already there
        if 'title="Return to Student Portal"' not in content:
            # Insert logo link right before <a href="..._course_hub.html" class="btn-transparent-nav"
            pattern = r'(<header class="course-nav-header">\s*<div style="display:flex; align-items:center; gap:8px;">\s*)(<a href="[^"]*_course_hub\.html")'
            replacement = (
                r'\1<a href="../../../../student_home.html" style="display:flex; align-items:center; text-decoration:none; margin-right:4px;" title="Return to Student Portal">\n'
                r'                <img src="../../../../eliteLogo_crest.png" onerror="this.src=\'../../../../favicon-32x32.png\'" alt="Elite Classes" style="height:28px; width:28px; border-radius:6px; cursor:pointer;">\n'
                r'            </a>\n            \2'
            )
            content = re.sub(pattern, replacement, content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated course player: {os.path.basename(os.path.dirname(fpath))}/{os.path.basename(fpath)}")
        else:
            print(f"No changes in course player: {os.path.basename(fpath)}")

if __name__ == "__main__":
    fix_testseries_class_hubs()
    fix_testseries_subject_portals()
    fix_other_testseries_files()
    fix_courses_class_hubs()
    fix_course_subject_hubs()
    fix_course_players()
