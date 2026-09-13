# -*- coding: utf-8 -*-
"""
Creates history_course_hub.html and course_player.html for Class 10 History
"""
import re

# 1. Create history_course_hub.html based on economics_course_hub.html
with open('modules/course/class10/economics/economics_course_hub.html', 'r', encoding='utf-8') as f:
    hub_html = f.read()

hub_html = hub_html.replace('Class 10 Economics Interactive Courses Hub — Elite Classes', 'Class 10 History Interactive Courses Hub — Elite Classes')
hub_html = hub_html.replace('Class 10 • Economics Interactive Curriculum', 'Class 10 • History Interactive Curriculum')
hub_html = hub_html.replace('Class 10 • Economics', 'Class 10 • History')
hub_html = hub_html.replace('Economics Interactive Courses Hub', 'History Interactive Courses Hub')
hub_html = hub_html.replace('Overall Economics Curriculum Mastery', 'Overall History Curriculum Mastery')
hub_html = hub_html.replace('class10_economics', 'class10_history')

# Palette adjustments: Amber / Bronze / Gold
hub_html = hub_html.replace('--primary-emerald: #059669;', '--primary-emerald: #b45309;')
hub_html = hub_html.replace('--accent-green: #10b981;', '--accent-green: #d97706;')
hub_html = hub_html.replace('#059669', '#b45309')
hub_html = hub_html.replace('#10b981', '#d97706')
hub_html = hub_html.replace('#ecfdf5', '#fffbeb')
hub_html = hub_html.replace('#d1fae5', '#fef3c7')
hub_html = hub_html.replace('#065f46', '#92400e')
hub_html = hub_html.replace('#047857', '#92400e')

hist_chapters_json = """const CHAPTERS_LIST = [
            { num: 1, id: 'c10_hist_ch1', title: 'The Rise of Nationalism in Europe', icon: '🏛️', desc: 'French Revolution, liberal nationalism, 1848 revolutions, German/Italian unification & Balkans.' },
            { num: 2, id: 'c10_hist_ch2', title: 'Nationalism in India', icon: '🇮🇳', desc: 'Satyagraha, Jallianwala Bagh, Non-Cooperation, Civil Disobedience, Salt March & Dalits.' },
            { num: 3, id: 'c10_hist_ch3', title: 'The Making of a Global World', icon: '🗺️', desc: 'Silk routes, colonial conquest, 19th-century trade flows, Great Depression & Bretton Woods.' },
            { num: 4, id: 'c10_hist_ch4', title: 'The Age of Industrialisation', icon: '⚙️', desc: 'Proto-industrialisation, steam power, colonial weavers, early Indian mills & Swadeshi.' },
            { num: 5, id: 'c10_hist_ch5', title: 'Print Culture and the Modern World', icon: '📖', desc: 'Gutenberg press, religious reform, French revolution, Indian print culture & censorship.' }
        ];"""

hub_html = re.sub(r'const CHAPTERS_LIST = \[[\s\S]*?\];', hist_chapters_json, hub_html)

with open('modules/course/class10/history/history_course_hub.html', 'w', encoding='utf-8') as f:
    f.write(hub_html)

print("Generated history_course_hub.html successfully!")

# 2. Create course_player.html based on economics course_player.html
with open('modules/course/class10/economics/course_player.html', 'r', encoding='utf-8') as f:
    player_html = f.read()

player_html = player_html.replace('Class 10 Economics Interactive Course — Elite Classes', 'Class 10 History Interactive Course — Elite Classes')
player_html = player_html.replace('Class 10 Economics', 'Class 10 History')
player_html = player_html.replace('economics_course_hub.html', 'history_course_hub.html')
player_html = player_html.replace('../../data/class10/economics/chapter', '../../data/class10/history/chapter')
player_html = player_html.replace('c10_econ_ch', 'c10_hist_ch')
player_html = player_html.replace("subject: 'Economics'", "subject: 'History'")

# Colors: Amber / Warm Brown
player_html = player_html.replace('--c-primary: #065f46;', '--c-primary: #92400e;')
player_html = player_html.replace('--c-primary-light: #ecfdf5;', '--c-primary-light: #fffbeb;')
player_html = player_html.replace('--c-accent: #059669;', '--c-accent: #b45309;')

hist_picker = """<select class="chapter-picker-select" id="global-chapter-picker" onchange="onChapterSelectChange(this.value)">
                <option value="1">Ch 1: Nationalism in Europe</option>
                <option value="2">Ch 2: Nationalism in India</option>
                <option value="3">Ch 3: Making of Global World</option>
                <option value="4">Ch 4: Age of Industrialisation</option>
                <option value="5">Ch 5: Print Culture</option>
            </select>"""

player_html = re.sub(r'<select class="chapter-picker-select"[\s\S]*?</select>', hist_picker, player_html, count=1)

with open('modules/course/class10/history/course_player.html', 'w', encoding='utf-8') as f:
    f.write(player_html)

print("Generated history course_player.html successfully!")
