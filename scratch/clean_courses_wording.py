import os
import re

WORKSPACE = r"c:\Users\raksh\Desktop\Projects\EliteClasses"

def update_course_hubs():
    hub_files = [
        os.path.join(WORKSPACE, "modules", "course", "class10", "science", "science_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "geography", "geography_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "economics", "economics_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "history", "history_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "politics", "politics_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "polity", "polity_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "physics", "physics_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "history", "history_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "geography", "geography_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "economy", "economy_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "csat", "csat_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "chemistry", "chemistry_course_hub.html"),
        os.path.join(WORKSPACE, "modules", "course", "civilservices", "biology", "biology_course_hub.html"),
    ]

    for fpath in hub_files:
        if not os.path.exists(fpath):
            print(f"Skipping non-existent: {fpath}")
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        orig = content

        # Replace hub-sub-text
        # e.g.: <p class="hub-sub-text">13 Chapters • 260 Mini-Modules • 70% Mastery Unlocking</p>
        # or: <p class="hub-sub-text">7 Chapters • 140 Bite-Sized Mini-Modules • 1,400 Questions • 70% Progressive Mastery Gating</p>
        content = re.sub(
            r'<p class="hub-sub-text">\s*(\d+)\s+Chapters\s*•[^<]*</p>',
            r'<p class="hub-sub-text">\1 Chapters • Comprehensive Chapter Curriculum & Mastery Quizzes</p>',
            content
        )

        # Replace (0/260 Modules) or similar in progress labels
        content = re.sub(
            r'<span id="total-progress-pct">0% Completed \([^)]*\)</span>',
            r'<span id="total-progress-pct">0% Completed</span>',
            content
        )

        # Replace JS totalProgressEl.textContent
        content = re.sub(
            r'totalProgressEl\.textContent\s*=\s*`\$\{overallPct\}% Completed \(\$\{totalPassedAcrossAll\}\/\d+ Modules\)`',
            r'totalProgressEl.textContent = `${overallPct}% Completed`',
            content
        )

        # Replace card meta
        # <span>📘 20 Modules</span>\s*<span>📝 200 Questions</span>
        content = re.sub(
            r'<span>📘\s*20 Modules</span>\s*<span>📝\s*200 Questions</span>',
            r'<span>📘 Comprehensive Theory</span>\n                                <span>📝 Mastery Quizzes</span>',
            content
        )

        # Replace card progress header: ${passedCount} / 20 Modules Passed
        content = re.sub(
            r'\$\{passedCount\}\s*\/\s*20 Modules Passed',
            r'${passedCount} / 20 Topics Mastered',
            content
        )

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated hub: {os.path.basename(fpath)}")
        else:
            print(f"No changes in hub: {os.path.basename(fpath)}")

def update_course_players():
    player_files = [
        os.path.join(WORKSPACE, "modules", "course", "class10", "science", "course_player.html"),
        os.path.join(WORKSPACE, "modules", "course", "class10", "science", "chapter1_course.html"),
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

        # Replace topSub.textContent = `... • 20 Mini-Modules`;
        content = re.sub(
            r'if\s*\(\s*topSub\s*\)\s*topSub\.textContent\s*=\s*`([^`]+)•\s*20 Mini-Modules`;',
            r'if (topSub) topSub.textContent = `\1• Interactive Course`;',
            content
        )

        # In chapter1_course.html: <span>Chemical Reactions and Equations • 20 Mini-Modules</span>
        content = content.replace(
            "Chemical Reactions and Equations • 20 Mini-Modules",
            "Chemical Reactions and Equations • Interactive Course"
        )

        # Replace Topic Mastery Assessment (10 Questions) -> Topic Mastery Assessment
        content = re.sub(
            r'📝 Topic Mastery Assessment\s*\(10 Questions\)',
            r'📝 Topic Mastery Assessment',
            content
        )

        # Replace <!-- Topic Mastery Quiz (10 MCQs) -->
        content = re.sub(
            r'<!-- Topic Mastery Quiz \(10 MCQs\) -->',
            r'<!-- Topic Mastery Quiz -->',
            content
        )

        # Replace "Select answers for all 10 questions above."
        content = content.replace(
            "Select answers for all 10 questions above.",
            "Select answers for all questions above."
        )

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated player: {os.path.basename(os.path.dirname(fpath))}/{os.path.basename(fpath)}")
        else:
            print(f"No changes in player: {os.path.basename(fpath)}")

def update_student_view():
    fpath = os.path.join(WORKSPACE, "modules", "studentView", "studentView.js")
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    orig = content

    content = content.replace(
        "'13 Chapters • 260 Mini-Modules • 2,600 Questions • 70% Mastery Gating'",
        "'13 Chapters • Comprehensive Theory & Mastery Assessments'"
    )
    content = content.replace(
        "'4 Core Disciplines • 22 Chapters • 440 Mini-Modules • 4,400 Questions'",
        "'4 Core Disciplines • 22 Chapters • Comprehensive Theory & Mastery Quizzes'"
    )
    content = content.replace(
        "5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery",
        "5 Chapters • Comprehensive Theory & Concept Quizzes"
    )
    content = content.replace(
        "7 Chapters • 140 Mini-Modules • 1,400 Questions • 70% Mastery",
        "7 Chapters • Comprehensive Theory & Concept Quizzes"
    )
    content = content.replace(
        "8 Chapters • 160 Modules •",
        "8 Chapters • Comprehensive Syllabus &"
    )
    content = content.replace(
        "6 Chapters • 120 Modules •",
        "6 Chapters • Comprehensive Syllabus &"
    )
    content = content.replace(
        "7 Chapters • 140 Modules •",
        "7 Chapters • Comprehensive Syllabus &"
    )

    if content != orig:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated studentView.js")
    else:
        print("No changes in studentView.js")

if __name__ == "__main__":
    update_course_hubs()
    update_course_players()
    update_student_view()
