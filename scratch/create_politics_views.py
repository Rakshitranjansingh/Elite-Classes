import os

def generate_politics_hub():
    # Read history hub as base and replace theme colors and chapters
    with open('modules/course/class10/history/history_course_hub.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace colors and branding
    content = content.replace('Class 10 History Interactive Courses Hub', 'Class 10 Democratic Politics Interactive Courses Hub')
    content = content.replace('Class 10 • History Interactive Curriculum', 'Class 10 • Democratic Politics Curriculum')
    content = content.replace('History Interactive Course', 'Democratic Politics Interactive Course')
    content = content.replace('--primary-emerald: #b45309;', '--primary-emerald: #4338ca;')
    content = content.replace('--accent-green: #d97706;', '--accent-green: #6366f1;')
    content = content.replace('#b45309', '#4338ca')
    content = content.replace('#d97706', '#6366f1')
    content = content.replace('#92400e', '#312e81')
    content = content.replace('#fffbeb', '#eef2ff')
    content = content.replace('#fef3c7', '#e0e7ff')
    content = content.replace("class10_history", "class10_politics")

    # Replace CHAPTERS_LIST
    old_chapters_block = """        const CHAPTERS_LIST = [
            { num: 1, id: 'c10_hist_ch1', title: 'The Rise of Nationalism in Europe', icon: '🏛️', desc: 'French Revolution, liberal nationalism, 1848 revolutions, German/Italian unification & Balkans.' },
            { num: 2, id: 'c10_hist_ch2', title: 'Nationalism in India', icon: '🇮🇳', desc: 'Satyagraha, Jallianwala Bagh, Non-Cooperation, Civil Disobedience, Salt March & Dalits.' },
            { num: 3, id: 'c10_hist_ch3', title: 'The Making of a Global World', icon: '🗺️', desc: 'Silk routes, colonial conquest, 19th-century trade flows, Great Depression & Bretton Woods.' },
            { num: 4, id: 'c10_hist_ch4', title: 'The Age of Industrialisation', icon: '⚙️', desc: 'Proto-industrialisation, steam power, colonial weavers, early Indian mills & Swadeshi.' },
            { num: 5, id: 'c10_hist_ch5', title: 'Print Culture and the Modern World', icon: '📖', desc: 'Gutenberg press, religious reform, French revolution, Indian print culture & censorship.' }
        ];"""

    new_chapters_block = """        const CHAPTERS_LIST = [
            { num: 1, id: 'c10_pol_ch1', title: 'Power-sharing', icon: '⚖️', desc: 'Belgium accommodation vs Sri Lanka majoritarianism, forms of power-sharing.' },
            { num: 2, id: 'c10_pol_ch2', title: 'Federalism', icon: '🏛️', desc: 'Union, State & Concurrent lists, federal decentralisation & 1992 constitutional amendment.' },
            { num: 3, id: 'c10_pol_ch3', title: 'Gender, Religion and Caste', icon: '🤝', desc: 'Gender division, feminist movements, secular state & caste inequalities in politics.' },
            { num: 4, id: 'c10_pol_ch4', title: 'Political Parties', icon: '🗳️', desc: 'National vs State parties, party functions, challenges & electoral reforms.' },
            { num: 5, id: 'c10_pol_ch5', title: 'Outcomes of Democracy', icon: '🕊️', desc: 'Accountability, responsiveness, economic growth, reduction of inequality & dignity.' }
        ];"""

    content = content.replace(old_chapters_block, new_chapters_block)

    out_path = 'modules/course/class10/politics/politics_course_hub.html'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {out_path}")

def generate_politics_player():
    # Read history course player as base and adapt for politics
    with open('modules/course/class10/history/course_player.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace branding & colors
    content = content.replace('Class 10 History Interactive Course — Elite Classes', 'Class 10 Democratic Politics Interactive Course — Elite Classes')
    content = content.replace('Class 10 History • 20 Mini-Modules', 'Class 10 Democratic Politics • 20 Mini-Modules')
    content = content.replace('history_course_hub.html', 'politics_course_hub.html')
    content = content.replace('../../data/class10/history/', '../../data/class10/politics/')
    content = content.replace('c10_hist_ch', 'c10_pol_ch')
    content = content.replace('History', 'Democratic Politics')

    # Color scheme: indigo/violet
    content = content.replace('--c-primary: #92400e;', '--c-primary: #4338ca;')
    content = content.replace('--c-primary-light: #fffbeb;', '--c-primary-light: #eef2ff;')
    content = content.replace('--c-accent: #b45309;', '--c-accent: #6366f1;')

    # Replace dropdown chapter list options
    # Find select options in top nav
    old_options = """                    <option value="1">Ch 01: The Rise of Nationalism in Europe</option>
                    <option value="2">Ch 02: Nationalism in India</option>
                    <option value="3">Ch 03: The Making of a Global World</option>
                    <option value="4">Ch 04: The Age of Industrialisation</option>
                    <option value="5">Ch 05: Print Culture and the Modern World</option>"""

    new_options = """                    <option value="1">Ch 01: Power-sharing</option>
                    <option value="2">Ch 02: Federalism</option>
                    <option value="3">Ch 03: Gender, Religion and Caste</option>
                    <option value="4">Ch 04: Political Parties</option>
                    <option value="5">Ch 05: Outcomes of Democracy</option>"""

    content = content.replace(old_options, new_options)

    out_path = 'modules/course/class10/politics/course_player.html'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {out_path}")

if __name__ == '__main__':
    generate_politics_hub()
    generate_politics_player()
