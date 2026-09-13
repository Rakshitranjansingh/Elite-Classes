# -*- coding: utf-8 -*-
"""
Creates geography_course_hub.html and course_player.html for Class 10 Geography
"""
import re

# 1. Create geography_course_hub.html based on economics_course_hub.html
with open('modules/course/class10/economics/economics_course_hub.html', 'r', encoding='utf-8') as f:
    hub_html = f.read()

hub_html = hub_html.replace('Class 10 Economics Interactive Courses Hub — Elite Classes', 'Class 10 Geography Interactive Courses Hub — Elite Classes')
hub_html = hub_html.replace('Class 10 • Economics Interactive Curriculum', 'Class 10 • Geography Interactive Curriculum')
hub_html = hub_html.replace('Class 10 • Economics', 'Class 10 • Geography')
hub_html = hub_html.replace('Economics Interactive Courses Hub', 'Geography Interactive Courses Hub')
hub_html = hub_html.replace('5 Chapters • 100 Bite-Sized Mini-Modules • 1,000 Questions', '7 Chapters • 140 Bite-Sized Mini-Modules • 1,400 Questions')
hub_html = hub_html.replace('Overall Economics Curriculum Mastery', 'Overall Geography Curriculum Mastery')
hub_html = hub_html.replace('(0/100 Modules)', '(0/140 Modules)')
hub_html = hub_html.replace('5 * 20; // 100', '7 * 20; // 140')
hub_html = hub_html.replace('/100 Modules)', '/140 Modules)')
hub_html = hub_html.replace('class10_economics', 'class10_geography')

# Palette adjustments: Blue / Cyan / Sky
hub_html = hub_html.replace('--primary-emerald: #059669;', '--primary-emerald: #0284c7;')
hub_html = hub_html.replace('--accent-green: #10b981;', '--accent-green: #0ea5e9;')
hub_html = hub_html.replace('#059669', '#0284c7')
hub_html = hub_html.replace('#10b981', '#0ea5e9')
hub_html = hub_html.replace('#ecfdf5', '#f0f9ff')
hub_html = hub_html.replace('#d1fae5', '#e0f2fe')
hub_html = hub_html.replace('#065f46', '#0369a1')
hub_html = hub_html.replace('#047857', '#0369a1')

geo_chapters_json = """const CHAPTERS_LIST = [
            { num: 1, id: 'c10_geo_ch1', title: 'Resources and Development', icon: '🌍', desc: 'Resource classification, land use, soil types, erosion & Gandhian conservation.' },
            { num: 2, id: 'c10_geo_ch2', title: 'Forest and Wildlife Resources', icon: '🌲', desc: 'Biodiversity, IUCN categories, Project Tiger, Chipko, JFM & sacred groves.' },
            { num: 3, id: 'c10_geo_ch3', title: 'Water Resources', icon: '💧', desc: 'Water scarcity, multi-purpose dams, rainwater harvesting & rooftop systems.' },
            { num: 4, id: 'c10_geo_ch4', title: 'Agriculture', icon: '🌾', desc: 'Subsistence, commercial farming, cropping seasons, major crops & Bhoodan.' },
            { num: 5, id: 'c10_geo_ch5', title: 'Minerals and Energy Resources', icon: '⛏️', desc: 'Ferrous/non-ferrous ores, coal, petroleum, solar, wind & nuclear energy.' },
            { num: 6, id: 'c10_geo_ch6', title: 'Manufacturing Industries', icon: '🏭', desc: 'Agro/mineral industries, textiles, iron/steel, automobiles & pollution control.' },
            { num: 7, id: 'c10_geo_ch7', title: 'Lifelines of National Economy', icon: '🚢', desc: 'Roadways, railways, waterways, major ports, airways, telecom & tourism.' }
        ];"""

hub_html = re.sub(r'const CHAPTERS_LIST = \[[\s\S]*?\];', geo_chapters_json, hub_html)

with open('modules/course/class10/geography/geography_course_hub.html', 'w', encoding='utf-8') as f:
    f.write(hub_html)

print("Generated geography_course_hub.html successfully!")

# 2. Create course_player.html based on economics course_player.html
with open('modules/course/class10/economics/course_player.html', 'r', encoding='utf-8') as f:
    player_html = f.read()

player_html = player_html.replace('Class 10 Economics Interactive Course — Elite Classes', 'Class 10 Geography Interactive Course — Elite Classes')
player_html = player_html.replace('Class 10 Economics', 'Class 10 Geography')
player_html = player_html.replace('economics_course_hub.html', 'geography_course_hub.html')
player_html = player_html.replace('../../data/class10/economics/chapter', '../../data/class10/geography/chapter')
player_html = player_html.replace('c10_econ_ch', 'c10_geo_ch')
player_html = player_html.replace('Math.min(5, chParam)', 'Math.min(7, chParam)')
player_html = player_html.replace("subject: 'Economics'", "subject: 'Geography'")

# Colors: Sky / Navy
player_html = player_html.replace('--c-primary: #065f46;', '--c-primary: #0369a1;')
player_html = player_html.replace('--c-primary-light: #ecfdf5;', '--c-primary-light: #f0f9ff;')
player_html = player_html.replace('--c-accent: #059669;', '--c-accent: #0284c7;')

geo_picker = """<select class="chapter-picker-select" id="global-chapter-picker" onchange="onChapterSelectChange(this.value)">
                <option value="1">Ch 1: Resources & Dev</option>
                <option value="2">Ch 2: Forest & Wildlife</option>
                <option value="3">Ch 3: Water Resources</option>
                <option value="4">Ch 4: Agriculture</option>
                <option value="5">Ch 5: Minerals & Energy</option>
                <option value="6">Ch 6: Manufacturing</option>
                <option value="7">Ch 7: Lifelines of Economy</option>
            </select>"""

player_html = re.sub(r'<select class="chapter-picker-select"[\s\S]*?</select>', geo_picker, player_html, count=1)

with open('modules/course/class10/geography/course_player.html', 'w', encoding='utf-8') as f:
    f.write(player_html)

print("Generated geography course_player.html successfully!")
