# -*- coding: utf-8 -*-
"""
Generator script for Class 10 Mathematics Chapter 11: Areas Related to Circles
Exhaustive 100 questions (50 Easy, 10 Medium, 10 Hard, 20 Tricky, 10 Very Hard)
Strict compliance with Elite Classes Test Standards and validation rules.
"""
import json
import os

questions = []
q_count = 0

def add_q(difficulty, text, a, b, c, d, correct, explanation, svg=None):
    global q_count
    q_count += 1
    q = {
        "id": f"ts_c10_math_ch11_q{q_count}",
        "question_number": q_count,
        "question": text,
        "difficulty": difficulty,
        "option_a": a,
        "option_b": b,
        "option_c": c,
        "option_d": d,
        "options": {
            "A": a,
            "B": b,
            "C": c,
            "D": d
        },
        "correct_option": correct,
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": explanation
    }
    if svg:
        q["diagram_svg"] = svg
    questions.append(q)

# SVG Visual Diagrams
svg_sector_segment = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <circle cx="210" cy="115" r="90" stroke="#0284c7" stroke-width="2" fill="#ffffff"/>
  <!-- Sector path -->
  <path d="M 210 115 L 273.6 51.4 A 90 90 0 0 1 295.6 150.3 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
  <!-- Segment path -->
  <path d="M 273.6 51.4 A 90 90 0 0 1 295.6 150.3 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.5"/>
  <circle cx="210" cy="115" r="4" fill="#0369a1"/>
  <text x="195" y="115" font-size="12" font-weight="bold" fill="#0369a1">O</text>
  <text x="280" y="45" font-size="12" font-weight="bold" fill="#0284c7">A</text>
  <text x="305" y="160" font-size="12" font-weight="bold" fill="#0284c7">B</text>
  <line x1="273.6" y1="51.4" x2="295.6" y2="150.3" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="225" y="110" font-size="12" font-weight="bold" fill="#0369a1">θ</text>
  <text x="310" y="105" font-size="12" font-weight="bold" fill="#e11d48">Segment</text>
  <text x="240" y="90" font-size="11" fill="#0369a1">Sector</text>
</svg>'''

svg_horse_field = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 230" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <rect x="60" y="30" width="160" height="160" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
  <path d="M 60 190 L 60 110 A 80 80 0 0 1 140 190 Z" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
  <circle cx="60" cy="190" r="4" fill="#b91c1c"/>
  <text x="45" y="210" font-size="12" font-weight="bold" fill="#b91c1c">Peg (Corner)</text>
  <text x="130" y="100" font-size="13" font-weight="bold" fill="#16a34a">15 m Square Field</text>
  <text x="70" y="160" font-size="12" font-weight="bold" fill="#854d0e">Grazed Area (r=5m)</text>
</svg>'''

svg_brooch = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 230" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <circle cx="200" cy="115" r="80" stroke="#475569" stroke-width="3" fill="#f1f5f9"/>
  <line x1="200" y1="35" x2="200" y2="195" stroke="#64748b" stroke-width="2"/>
  <line x1="120" y1="115" x2="280" y2="115" stroke="#64748b" stroke-width="2"/>
  <line x1="135" y1="65" x2="265" y2="165" stroke="#64748b" stroke-width="2"/>
  <line x1="135" y1="165" x2="265" y2="65" stroke="#64748b" stroke-width="2"/>
  <line x1="150" y1="45" x2="250" y2="185" stroke="#64748b" stroke-width="2"/>
  <circle cx="200" cy="115" r="3" fill="#0f172a"/>
  <text x="200" y="220" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Silver Brooch (5 Diameters, 10 Sectors)</text>
</svg>'''

# =========================================================================
# 50 EASY QUESTIONS (Formulas, definitions, basic calculations)
# =========================================================================
add_q("easy",
      "The formula for the area of a sector of angle θ of a circle of radius r is:",
      "(θ / 360) × π r²", "(θ / 180) × π r²", "(θ / 360) × 2π r", "(θ / 720) × π r²",
      "A",
      "NCERT Section 11.1: Area of a sector of angle θ is given by (θ / 360) × π r².",
      svg_sector_segment)

add_q("easy",
      "The length of an arc of a sector of angle θ of a circle of radius r is:",
      "(θ / 360) × 2π r", "(θ / 360) × π r²", "(θ / 180) × 2π r", "(θ / 90) × π r",
      "A",
      "NCERT Section 11.1: Arc length l = (θ / 360) × 2π r = (θ / 180) × π r.")

add_q("easy",
      "The portion of a circular region enclosed between two radii and the corresponding arc is called a:",
      "Sector of the circle", "Segment of the circle", "Chord of the circle", "Quadrant",
      "A",
      "NCERT Section 11.1: A sector is the portion enclosed by two radii and the corresponding arc.")

add_q("easy",
      "The portion of a circular region enclosed between a chord and the corresponding arc is called a:",
      "Segment of the circle", "Sector of the circle", "Annulus", "Secant",
      "A",
      "NCERT Section 11.1: A segment of a circle is bounded by a chord and its corresponding arc.",
      svg_sector_segment)

add_q("easy",
      "If θ is the angle of a minor sector, the angle of the corresponding major sector is:",
      "360° - θ", "180° - θ", "90° - θ", "2θ",
      "A",
      "The full circle subtends 360° at the centre. Thus, major sector angle = 360° - θ.")

add_q("easy",
      "Area of a minor segment of a circle is calculated by:",
      "Area of corresponding sector - Area of corresponding triangle",
      "Area of sector + Area of triangle",
      "Area of circle - Area of sector",
      "Area of triangle - Area of sector",
      "A",
      "NCERT: Area of segment = Area of sector OAPB - Area of ΔOAB.")

add_q("easy",
      "Area of the major segment of a circle of radius r is equal to:",
      "Area of circle - Area of corresponding minor segment",
      "Area of sector - Area of triangle",
      "Area of minor segment + Area of triangle",
      "2 × Area of minor segment",
      "A",
      "NCERT: Major segment area = π r² - Area of minor segment.")

add_q("easy",
      "Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60° (use π = 22/7):",
      "132/7 cm² (18.86 cm²)", "120/7 cm²", "66/7 cm²", "44 cm²",
      "A",
      "NCERT Exercise 11.1 Q1: Area = (60/360) × (22/7) × 6² = (1/6) × (22/7) × 36 = 6 × 22 / 7 = 132/7 cm².")

add_q("easy",
      "Find the area of a quadrant of a circle whose circumference is 22 cm (use π = 22/7):",
      "77/8 cm² (9.625 cm²)", "77/4 cm²", "35/8 cm²", "22/7 cm²",
      "A",
      "NCERT Exercise 11.1 Q2: 2π r = 22 ⇒ 2 × (22/7) × r = 22 ⇒ r = 7/2 cm. Quadrant area = (1/4) π r² = (1/4) × (22/7) × (49/4) = 77/8 cm².")

add_q("easy",
      "What angle does the minute hand of a clock describe in 1 minute?",
      "6°", "30°", "12°", "0.5°",
      "A",
      "In 60 minutes, the minute hand describes 360°. In 1 minute, it describes 360° / 60 = 6°.")

add_q("easy",
      "What angle does the minute hand of a clock describe in 5 minutes?",
      "30°", "60°", "15°", "25°",
      "A",
      "Angle = 5 × 6° = 30°.")

add_q("easy",
      "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes (use π = 22/7):",
      "154/3 cm² (51.33 cm²)", "154 cm²", "77/3 cm²", "308/3 cm²",
      "A",
      "NCERT Exercise 11.1 Q3: Angle = 30°. Area = (30/360) × (22/7) × 14² = (1/12) × (22/7) × 196 = (1/12) × 616 = 154/3 cm².")

add_q("easy",
      "A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the minor sector (use π = 3.14):",
      "78.5 cm²", "50 cm²", "28.5 cm²", "100 cm²",
      "A",
      "Area of sector = (90/360) × 3.14 × 10² = (1/4) × 314 = 78.5 cm².")

add_q("easy",
      "In the same circle of radius 10 cm with right angle at centre, what is the area of the corresponding triangle formed by the radii and chord?",
      "50 cm²", "100 cm²", "25 cm²", "78.5 cm²",
      "A",
      "Since angle is 90°, the triangle is right-angled with legs r = 10 cm. Area = (1/2) × 10 × 10 = 50 cm².")

add_q("easy",
      "In the same circle of radius 10 cm with right angle at centre, find the area of the minor segment (use π = 3.14):",
      "28.5 cm²", "78.5 cm²", "50 cm²", "235.5 cm²",
      "A",
      "NCERT Exercise 11.1 Q4: Area of minor segment = Area of sector - Area of Δ = 78.5 - 50 = 28.5 cm².")

add_q("easy",
      "In the same circle of radius 10 cm with minor sector angle 90°, what is the area of the major sector (use π = 3.14)?",
      "235.5 cm²", "314 cm²", "285.5 cm²", "157 cm²",
      "A",
      "NCERT Exercise 11.1 Q4: Major sector angle = 270°. Area = (270/360) × 3.14 × 10² = (3/4) × 314 = 235.5 cm².")

add_q("easy",
      "In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find the length of the arc (use π = 22/7):",
      "22 cm", "44 cm", "11 cm", "21 cm",
      "A",
      "NCERT Exercise 11.1 Q5(i): Arc length = (60/360) × 2 × (22/7) × 21 = (1/6) × 132 = 22 cm.")

add_q("easy",
      "In the same circle of radius 21 cm with sector angle 60°, find the area of the sector (use π = 22/7):",
      "231 cm²", "462 cm²", "154 cm²", "115.5 cm²",
      "A",
      "NCERT Exercise 11.1 Q5(ii): Area = (60/360) × (22/7) × 21² = (1/6) × (22/7) × 441 = (1/6) × 1386 = 231 cm².")

add_q("easy",
      "In the same circle of radius 21 cm with angle 60°, the triangle formed by radii and chord is equilateral. Its area is:",
      "(441√3 / 4) cm²", "(441√3 / 2) cm²", "441√3 cm²", "231 cm²",
      "A",
      "NCERT Exercise 11.1 Q5(iii): For equilateral Δ of side r = 21 cm, Area = (√3/4) r² = (√3/4) × 21² = (441√3 / 4) cm².")

add_q("easy",
      "A horse is tied to a peg at one corner of a square grass field of side 15 m by means of a 5 m long rope. The area of that part of the field in which the horse can graze is (use π = 3.14):",
      "19.625 m²", "78.5 m²", "25 m²", "39.25 m²",
      "A",
      "NCERT Exercise 11.1 Q8(i): The corner of a square is 90°. Grazing area = quadrant of radius 5 m = (1/4) × 3.14 × 5² = (1/4) × 78.5 = 19.625 m².",
      svg_horse_field)

add_q("easy",
      "If the rope tied to the horse was 10 m long instead of 5 m, the total area the horse could graze would be (use π = 3.14):",
      "78.5 m²", "19.625 m²", "58.875 m²", "314 m²",
      "A",
      "Quadrant with r = 10 m: Area = (1/4) × 3.14 × 10² = (1/4) × 314 = 78.5 m².")

add_q("easy",
      "In the horse grazing problem, what is the INCREASE in the grazing area if the rope is increased from 5 m to 10 m?",
      "58.875 m²", "78.5 m²", "19.625 m²", "25 m²",
      "A",
      "NCERT Exercise 11.1 Q8(ii): Increase = 78.5 - 19.625 = 58.875 m².")

add_q("easy",
      "A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. The total length of the silver wire required is (use π = 22/7):",
      "285 mm", "110 mm", "175 mm", "300 mm",
      "A",
      "NCERT Exercise 11.1 Q9(i): Wire = Circumference + 5 diameters = π d + 5d = (22/7)(35) + 5(35) = 110 + 175 = 285 mm.",
      svg_brooch)

add_q("easy",
      "In the silver brooch problem with diameter 35 mm divided into 10 equal sectors, what is the area of each sector (use π = 22/7)?",
      "385/4 mm² (96.25 mm²)", "385/2 mm²", "77/4 mm²", "110 mm²",
      "A",
      "NCERT Exercise 11.1 Q9(ii): r = 35/2 mm. Total area = π r² = (22/7) × (35/2)² = (22/7) × (1225/4) = 3850/4 mm². Each sector = Total / 10 = 385/4 mm².")

add_q("easy",
      "An umbrella has 8 ribs which are equally spaced. Assuming the umbrella to be a flat circle of radius 45 cm, find the area between two consecutive ribs (use π = 22/7):",
      "22275/28 cm²", "22275/14 cm²", "11137/28 cm²", "4500/7 cm²",
      "A",
      "NCERT Exercise 11.1 Q10: Area between 2 ribs = (1/8) × π r² = (1/8) × (22/7) × 45² = (1/8) × (22/7) × 2025 = 44550 / 56 = 22275 / 28 cm².")

add_q("easy",
      "A car has two wipers which do not overlap. Each wiper has a blade of length 25 cm sweeping through an angle of 115°. Find the total area cleaned at each sweep of the blades (use π = 22/7):",
      "158125/126 cm²", "158125/252 cm²", "79062/63 cm²", "316250/126 cm²",
      "A",
      "NCERT Exercise 11.1 Q11: Total area = 2 × [(115/360) × (22/7) × 25²] = 2 × (23/72) × (22/7) × 625 = (23 × 11 × 625) / (36 × 7) = 158125 / 126 cm².")

add_q("easy",
      "To warn ships for underwater rocks, a lighthouse spreads a red coloured light over a sector of angle 80° to a distance of 16.5 km. Find the area of the sea over which the ships are warned (use π = 3.14):",
      "189.97 km²", "170.89 km²", "200.5 km²", "150.25 km²",
      "A",
      "NCERT Exercise 11.1 Q12: Area = (80/360) × 3.14 × 16.5² = (2/9) × 3.14 × 272.25 = (2/9) × 854.865 = 189.97 km².")

add_q("easy",
      "Tick the correct answer: Area of a sector of angle p (in degrees) of a circle with radius R is:",
      "(p / 720) × 2π R²", "(p / 180) × π R²", "(p / 360) × 2π R", "(p / 180) × 2π R",
      "A",
      "NCERT Exercise 11.1 Q14: (p / 720) × 2π R² = (p / 360) × π R², which is the exact standard formula for sector area.")

add_q("easy",
      "If the perimeter and the area of a circle are numerically equal, then the radius of the circle is:",
      "2 units", "π units", "4 units", "7 units",
      "A",
      "2π r = π r² ⇒ 2 = r ⇒ r = 2 units.")

add_q("easy",
      "What is the perimeter of a sector of a circle of radius r and central angle θ?",
      "2r + (θ / 360) × 2π r",
      "(θ / 360) × 2π r",
      "2r + π r²",
      "r + (θ / 180) × π r",
      "A",
      "A sector consists of two straight radii (r + r = 2r) plus the curved arc length: Perimeter = 2r + (θ/360) 2π r.")

add_q("easy",
      "What is the perimeter of a semicircle of radius r (including its diameter)?",
      "π r + 2r", "π r", "2π r", "2r + π r²",
      "A",
      "Perimeter of semicircle = half circumference + diameter = π r + 2r = r(π + 2).")

add_q("easy",
      "What is the area of a semicircle of radius r?",
      "(1/2) π r²", "π r²", "(1/4) π r²", "2π r²",
      "A",
      "A semicircle is exactly half a circle, so its area is (1/2) π r².")

add_q("easy",
      "What is the area of a quadrant of a circle of radius r?",
      "(1/4) π r²", "(1/2) π r²", "π r²", "(1/8) π r²",
      "A",
      "A quadrant corresponds to an angle of 90° (90/360 = 1/4), so its area is (1/4) π r².")

add_q("easy",
      "If the radius of a circle is doubled, its area becomes:",
      "4 times", "2 times", "8 times", "Remains same",
      "A",
      "Area = π r². If radius becomes 2r, new area = π(2r)² = 4π r² (4 times original).")

add_q("easy",
      "If the circumference of a circle increases from 2π to 4π, what happens to its area?",
      "It becomes 4 times", "It doubles", "It triples", "It increases by 2",
      "A",
      "2π r = 2π ⇒ r1 = 1, Area1 = π. 2π r = 4π ⇒ r2 = 2, Area2 = 4π. The area quadruples (becomes 4 times).")

add_q("easy",
      "The relationship between the area of a sector A, arc length l, and radius r is:",
      "A = (1/2) l r", "A = l r", "A = 2 l r", "A = l² / r",
      "A",
      "A = (θ/360) π r² = (1/2) [(θ/360) 2π r] r = (1/2) l r.")

add_q("easy",
      "If the arc length of a sector is 10 cm and the radius of the circle is 6 cm, the area of the sector is:",
      "30 cm²", "60 cm²", "15 cm²", "20 cm²",
      "A",
      "Area = (1/2) l r = (1/2) × 10 × 6 = 30 cm².")

add_q("easy",
      "If the perimeter of a semicircular protractor is 36 cm, then its radius is (use π = 22/7):",
      "7 cm", "14 cm", "21 cm", "3.5 cm",
      "A",
      "Perimeter = π r + 2r = r(22/7 + 2) = r(36/7). Given 36 = r(36/7) ⇒ r = 7 cm.")

add_q("easy",
      "If the angle of a sector is 90°, what fraction of the total area of the circle is the sector?",
      "1/4", "1/2", "1/3", "1/6",
      "A",
      "90° / 360° = 1/4.")

add_q("easy",
      "If the angle of a sector is 180°, what is the sector called?",
      "Semicircle", "Quadrant", "Segment", "Sector of chord",
      "A",
      "When the central angle is 180°, the sector covers exactly half the circle, which is a semicircle.")

add_q("easy",
      "If the angle of a sector is 360°, the sector is:",
      "The entire circular region", "A semicircle", "A line", "Undefined",
      "A",
      "When θ = 360°, the sector encloses the full 360° circle.")

add_q("easy",
      "The area of a circle that can be inscribed in a square of side 10 cm is:",
      "25π cm²", "100π cm²", "50π cm²", "10π cm²",
      "A",
      "The diameter of the inscribed circle is equal to the side of the square: 2r = 10 ⇒ r = 5 cm. Area = π r² = 25π cm².")

add_q("easy",
      "The area of a square that can be inscribed in a circle of radius 8 cm is:",
      "128 cm²", "64 cm²", "256 cm²", "64√2 cm²",
      "A",
      "The diagonal of the inscribed square is equal to the diameter: d = 2r = 16 cm. Area of square = d² / 2 = 16² / 2 = 256 / 2 = 128 cm².")

add_q("easy",
      "If the area of a circle is 154 cm², then its circumference is (use π = 22/7):",
      "44 cm", "22 cm", "88 cm", "308 cm",
      "A",
      "π r² = 154 ⇒ (22/7) r² = 154 ⇒ r² = 49 ⇒ r = 7 cm. Circumference = 2π r = 2 × (22/7) × 7 = 44 cm.")

add_q("easy",
      "What is the angle subtended by an arc at the centre of a circle if the arc length is equal to the circumference?",
      "360°", "180°", "90°", "270°",
      "A",
      "The entire circumference corresponds to a complete turn of 360°.")

add_q("easy",
      "What is the angle subtended by an arc at the centre if its length is half the circumference?",
      "180°", "90°", "60°", "120°",
      "A",
      "Half the circumference corresponds to 360° / 2 = 180°.")

add_q("easy",
      "If an arc of a circle of radius 14 cm subtends an angle of 90° at the centre, its length is (use π = 22/7):",
      "22 cm", "44 cm", "11 cm", "14 cm",
      "A",
      "l = (90/360) × 2 × (22/7) × 14 = (1/4) × 88 = 22 cm.")

add_q("easy",
      "What is the ratio of the area of a circle to the area of its quadrant?",
      "4 : 1", "2 : 1", "1 : 4", "1 : 2",
      "A",
      "A circle consists of 4 quadrants, so Area(Circle) / Area(Quadrant) = 4 : 1.")

add_q("easy",
      "If a circular track has inner radius r and outer radius R, the area of the track (annulus) is:",
      "π(R² - r²)", "π(R - r)²", "2π(R - r)", "π(R + r)",
      "A",
      "Area of ring = Area of outer circle - Area of inner circle = π R² - π r² = π(R² - r²).")

add_q("easy",
      "What is the width of a circular path between an outer radius R and an inner radius r?",
      "R - r", "R + r", "(R - r) / 2", "π(R - r)",
      "A",
      "The track width is the radial difference R - r.")

# =========================================================================
# 10 MEDIUM QUESTIONS (Standard 2-step calculations from NCERT)
# =========================================================================
add_q("medium",
      "A chord of a circle of radius 15 cm subtends an angle of 60° at the centre. Find the area of the corresponding minor segment (use π = 3.14 and √3 = 1.73):",
      "20.4375 cm²", "117.75 cm²", "97.3125 cm²", "40.875 cm²",
      "A",
      "NCERT Exercise 11.1 Q6: Sector area = (60/360) × 3.14 × 15² = (1/6) × 706.5 = 117.75 cm². Triangle area = (√3/4) × 15² = (1.73/4) × 225 = 97.3125 cm². Minor segment = 117.75 - 97.3125 = 20.4375 cm².")

add_q("medium",
      "In the same circle of radius 15 cm with sector angle 60°, find the area of the corresponding major segment (use π = 3.14 and √3 = 1.73):",
      "686.0625 cm²", "706.5 cm²", "609.1875 cm²", "588.75 cm²",
      "A",
      "NCERT Exercise 11.1 Q6: Total area = 3.14 × 225 = 706.5 cm². Major segment = Total - Minor segment = 706.5 - 20.4375 = 686.0625 cm².")

add_q("medium",
      "A chord of a circle of radius 12 cm subtends an angle of 120° at the centre. Find the area of the corresponding segment of the circle (use π = 3.14 and √3 = 1.73):",
      "88.44 cm²", "150.72 cm²", "62.28 cm²", "100.5 cm²",
      "A",
      "NCERT Exercise 11.1 Q7: Sector area = (120/360) × 3.14 × 144 = (1/3) × 452.16 = 150.72 cm². In ΔOAB with 120°, draw OD ⊥ AB. AD = 12 sin 60° = 6√3, OD = 12 cos 60° = 6. Area Δ = (1/2) × 12√3 × 6 = 36√3 = 36 × 1.73 = 62.28 cm². Segment area = 150.72 - 62.28 = 88.44 cm².")

add_q("medium",
      "A round table cover has six equal designs. If the radius of the cover is 28 cm, what is the central angle for each of the six equal designs?",
      "60°", "45°", "30°", "72°",
      "A",
      "NCERT Exercise 11.1 Q13: A full circle is 360°. For 6 equal designs, each design subtends 360° / 6 = 60°.")

add_q("medium",
      "In the round table cover with 6 designs (r = 28 cm, angle 60°), find the area of one equilateral triangle formed by the centre and the chord (use √3 = 1.7):",
      "333.2 cm²", "410.67 cm²", "77.47 cm²", "280 cm²",
      "A",
      "Area of equilateral Δ = (√3/4) r² = (1.7/4) × 28² = (1.7/4) × 784 = 1.7 × 196 = 333.2 cm².")

add_q("medium",
      "In the round table cover with r = 28 cm and angle 60°, what is the area of one sector (use π = 22/7)?",
      "410.67 cm² (1232/3 cm²)", "333.2 cm²", "77.47 cm²", "500 cm²",
      "A",
      "Sector area = (60/360) × (22/7) × 28² = (1/6) × (22/7) × 784 = (1/6) × 2464 = 1232/3 ≈ 410.67 cm².")

add_q("medium",
      "In the round table cover, what is the area of all six designs combined (use π = 22/7 and √3 = 1.7)?",
      "464.8 cm²", "333.2 cm²", "410.67 cm²", "77.47 cm²",
      "A",
      "Area of 1 design = Sector - Triangle = (1232/3) - 333.2 = 410.67 - 333.2 = 77.47 cm². Total area of 6 designs = 6 × [(1232/3) - 333.2] = 2464 - 1999.2 = 464.8 cm².")

add_q("medium",
      "If the cost of making the designs is ₹0.35 per cm², find the total cost of making the 6 designs on the round table cover:",
      "₹162.68", "₹200.50", "₹145.20", "₹180.00",
      "A",
      "NCERT Exercise 11.1 Q13: Total cost = 464.8 × 0.35 = ₹162.68.")

add_q("medium",
      "The wheels of a car are of diameter 80 cm each. How many complete revolutions does each wheel make in 10 minutes when the car is travelling at a speed of 66 km/h?",
      "4375 revolutions", "5000 revolutions", "3500 revolutions", "4000 revolutions",
      "A",
      "Speed = 66 km/h = (66 × 1000 × 100) / 60 = 110000 cm/min. In 10 min, distance = 1,100,000 cm. Wheel circumference = π d = (22/7) × 80 = 1760/7 cm. Revolutions = 1100000 / (1760/7) = 1100000 × 7 / 1760 = 4375 revolutions.")

add_q("medium",
      "The short and long hands of a clock are 4 cm and 6 cm long respectively. Find the sum of distances travelled by their tips in 2 days (48 hours) (use π = 22/7):",
      "1910.85 cm", "1800.5 cm", "2000 cm", "1550.2 cm",
      "A",
      "In 48 hrs, hour hand completes 48/12 = 4 rounds; minute hand completes 48 rounds. Distance hour hand = 4 × 2π(4) = 32π. Distance minute hand = 48 × 2π(6) = 576π. Total distance = 608π = 608 × (22/7) ≈ 1910.85 cm.")

# =========================================================================
# 10 HARD QUESTIONS (Geometric synthesis, multi-shape areas, inscribed shapes)
# =========================================================================
add_q("hard",
      "Find the area of the shaded region enclosed between two concentric circles of radii 7 cm and 14 cm, where ∠AOB = 40° (area between major arcs):",
      "415.8 cm²", "462 cm²", "512.4 cm²", "380 cm²",
      "A",
      "Area of ring = π(R² - r²) = (22/7)(196 - 49) = (22/7)(147) = 462 cm². Unshaded sector ring angle = 40°. Unshaded sector area = (40/360) × 462 = (1/9) × 462 = 462/9 = 51.33 cm². Shaded region = 462 - 51.33 = 410.67 ≈ (8/9) × 462 = 410.67 cm².")

add_q("hard",
      "A square ABCD of side 14 cm has four quadrants drawn with vertices A, B, C, D as centres and radius 7 cm. Find the area of the shaded region inside the square not covered by the four quadrants (use π = 22/7):",
      "42 cm²", "98 cm²", "56 cm²", "84 cm²",
      "A",
      "Area of square = 14² = 196 cm². 4 quadrants of radius 7 cm combine to form 1 full circle of radius 7 cm: Area = π r² = (22/7) × 49 = 154 cm². Shaded area = 196 - 154 = 42 cm².")

add_q("hard",
      "In a circular table cover of radius 32 cm, a design is formed leaving an equilateral triangle ABC in the middle. Find the area of the design (shaded region) (use π = 22/7):",
      "(22528/7 - 768√3) cm²",
      "(22528/7 - 384√3) cm²",
      "(11264/7 - 768√3) cm²",
      "22528/7 cm²",
      "A",
      "Area of circle = (22/7) × 32² = 22528/7 cm². For equilateral Δ inscribed in circle of radius R = 32: side a = R√3 = 32√3. Area of equilateral Δ = (√3/4) a² = (√3/4) (32√3)² = (√3/4) × 1024 × 3 = 768√3 cm². Design area = Area of circle - Area of Δ = (22528/7 - 768√3) cm².")

add_q("hard",
      "Four equal circles, each of radius 'a', touch each other externally. The area enclosed between them is:",
      "(4 - π) a²", "(π - 2) a²", "(2 - π/2) a²", "(4 - 2π) a²",
      "A",
      "Connecting the 4 centres forms a square of side 2a. Area of square = (2a)² = 4a². The 4 corners inside the square are four 90° sectors of radius a, which together form one circle of area π a². Enclosed area = 4a² - π a² = (4 - π) a².")

add_q("hard",
      "If the radius of each of the four touching circles is 7 cm, what is the enclosed area between them (use π = 22/7)?",
      "42 cm²", "84 cm²", "28 cm²", "14 cm²",
      "A",
      "Area = (4 - π) a² = (4 - 22/7) × 7² = (6/7) × 49 = 42 cm².")

add_q("hard",
      "Three equal circles each of radius r touch each other externally. The area of the region enclosed between the three circles is:",
      "(√3 - π/2) r²", "(2√3 - π) r²", "(√3/4 - π/6) r²", "(3 - π/2) r²",
      "A",
      "Connecting the centres of the 3 touching circles gives an equilateral triangle of side 2r. Area of Δ = (√3/4)(2r)² = √3 r². The three sectors inside the triangle each have angle 60°, totaling 3 × 60° = 180° (a semicircle of radius r), area = (1/2)π r². Enclosed area = (√3 - π/2) r².")

add_q("hard",
      "If three coins of radius 1 cm are placed on a table so that each touches the other two, the area enclosed between the coins is:",
      "(√3 - π/2) cm² ≈ 0.161 cm²",
      "(2√3 - π) cm²",
      "√3 cm²",
      "π/2 cm²",
      "A",
      "Area = (√3 - π/2) r² = (√3 - 3.1416/2)(1)² = 1.732 - 1.571 = 0.161 cm².")

add_q("hard",
      "A racetrack is in the form of a ring whose inner circumference is 352 m and outer circumference is 396 m. Find the width of the track (use π = 22/7):",
      "7 m", "14 m", "3.5 m", "10 m",
      "A",
      "2π R - 2π r = 396 - 352 = 44 m ⇒ 2π(R - r) = 44 ⇒ 2 × (22/7) × (R - r) = 44 ⇒ R - r = 7 m. The width of the track is 7 m.")

add_q("hard",
      "In the racetrack problem above (inner circ = 352 m, outer circ = 396 m, width = 7 m), find the area of the track:",
      "2618 m²", "2800 m²", "2450 m²", "3150 m²",
      "A",
      "2π r = 352 ⇒ r = 56 m. R = 56 + 7 = 63 m. Area = π(R² - r²) = (22/7)(63² - 56²) = (22/7)(63 - 56)(63 + 56) = (22/7)(7)(119) = 22 × 119 = 2618 m².")

add_q("hard",
      "An athletic track has semi-circular ends of inner diameter 60 m and straight parallel sides of length 106 m each. If the track is 10 m wide everywhere, what is the distance around the track along its inner edge?",
      "(212 + 1320/7) m ≈ 400.57 m",
      "400 m",
      "412 m",
      "380 m",
      "A",
      "Inner distance = 2 straight tracks + 2 inner semicircular ends = 2(106) + 2π r_inner = 212 + 2 × (22/7) × 30 = 212 + 1320/7 = 212 + 188.57 = 400.57 m.")

# =========================================================================
# 20 TRICKY QUESTIONS (Subtleties, proportionalities, common traps)
# =========================================================================
add_q("tricky",
      "If the perimeter of a circle is equal to that of a square, then the ratio of their areas (Area of circle : Area of square) is:",
      "14 : 11 (approx 4/π)",
      "11 : 14",
      "1 : 1",
      "22 : 7",
      "A",
      "Let 2π r = 4a ⇒ a = π r / 2. Area_circle / Area_square = (π r²) / (π² r² / 4) = 4 / π = 4 / (22/7) = 28/22 = 14/11. The circle encloses MORE area than the square for the same perimeter!")

add_q("tricky",
      "If the area of a circle is equal to the area of a square, what is the ratio of their perimeters (Perimeter of circle : Perimeter of square)?",
      "√π : 2 (approx < 1)",
      "2 : √π",
      "1 : 1",
      "π : 4",
      "A",
      "π r² = a² ⇒ a = r√π. Perimeter_circle / Perimeter_square = 2π r / (4a) = 2π r / (4r√π) = 2π / (4√π) = √π / 2 ≈ 1.77 / 2 ≈ 0.886. The circle has a smaller perimeter!")

add_q("tricky",
      "Is the perimeter of a sector of a circle always greater than the length of its arc?",
      "Yes, always by 2r (since it includes the two radii bounding it)",
      "No, only when θ > 180°",
      "No, they are equal",
      "Only for a semicircle",
      "A",
      "The perimeter of a sector is l + 2r. Since radius r > 0, l + 2r is strictly greater than l by 2r.")

add_q("tricky",
      "A student calculates the area of a sector of 60° with radius 6 cm as 6π cm². Then he concludes the area of the minor segment is 6π - 18 cm². Why is this incorrect?",
      "The triangle is equilateral, so its area is (√3/4)r² = 9√3, NOT (1/2)r² = 18",
      "The sector area formula was wrong",
      "A 60° triangle is right-angled",
      "The minor segment cannot be found without chord length",
      "A",
      "In a 60° sector, the triangle is equilateral with area (√3/4)r² = (√3/4)(36) = 9√3 cm². The student mistakenly used the formula for a right triangle (1/2 r² = 18).")

add_q("tricky",
      "For what central angle θ is the area of ΔOAB in a sector of radius r maximum?",
      "90°", "60°", "120°", "180°",
      "A",
      "Area of ΔOAB = (1/2) r² sin θ. Since sin θ reaches its maximum value of 1 at θ = 90°, the triangle has maximum area at 90°.")

add_q("tricky",
      "If the angle of a sector of a circle of radius r is θ (in degrees), the area of the corresponding triangle formed by radii and chord is:",
      "(1/2) r² sin θ", "r² sin θ", "(1/2) r² cos θ", "(√3/4) r²",
      "A",
      "In any triangle with two sides equal to r and included angle θ, Area = (1/2) r · r · sin θ = (1/2) r² sin θ.")

add_q("tricky",
      "If the radius of a circle is decreased by 50%, what is the percentage decrease in its area?",
      "75%", "50%", "25%", "100%",
      "A",
      "New radius r' = 0.5r. New area = π(0.5r)² = 0.25 π r². Decrease = 1 - 0.25 = 0.75 = 75%.")

add_q("tricky",
      "If the radius of a circle is increased by 100% (doubled), what is the percentage increase in its area?",
      "300%", "100%", "200%", "400%",
      "A",
      "New radius r' = 2r. New area = π(2r)² = 4π r². Increase = (4 - 1) × 100% = 300%.")

add_q("tricky",
      "If the circumference of a circle is increased by 50%, its area increases by:",
      "125%", "50%", "100%", "225%",
      "A",
      "Circumference is linear in r, so r increases by 50% (r' = 1.5r). Area' = (1.5)² Area = 2.25 Area. Increase = (2.25 - 1) × 100% = 125%.")

add_q("tricky",
      "A wire is looped in the form of a circle of radius 28 cm. It is rebent into a square. What is the length of the side of the square (use π = 22/7)?",
      "44 cm", "28 cm", "88 cm", "22 cm",
      "A",
      "Circumference of circle = 2π r = 2 × (22/7) × 28 = 176 cm. Perimeter of square = 4a = 176 cm ⇒ a = 44 cm.")

add_q("tricky",
      "In the above wire problem, which shape has a larger area: the circle of radius 28 cm or the square of side 44 cm?",
      "The circle", "The square", "Both have the same area", "Cannot be compared",
      "A",
      "Area of circle = (22/7) × 28² = 2464 cm². Area of square = 44² = 1936 cm². The circle encloses 2464 cm² > 1936 cm² (Isoperimetric theorem: the circle encloses maximum area for a given perimeter).")

add_q("tricky",
      "If the minute hand of a clock is 7 cm long, what is the area swept by it in 15 minutes (use π = 22/7)?",
      "38.5 cm²", "77 cm²", "154 cm²", "19.25 cm²",
      "A",
      "In 15 minutes, the hand sweeps 1/4 of a circle (90°). Area = (1/4) π r² = (1/4) × (22/7) × 49 = 77/2 = 38.5 cm².")

add_q("tricky",
      "What is the angle swept by the HOUR HAND of a clock in 1 hour?",
      "30°", "60°", "12°", "6°",
      "A",
      "In 12 hours, the hour hand sweeps 360°. In 1 hour, it sweeps 360° / 12 = 30°.")

add_q("tricky",
      "What is the angle swept by the HOUR HAND of a clock in 1 minute?",
      "0.5° (1/2°)", "6°", "1°", "0.1°",
      "A",
      "In 60 minutes, the hour hand sweeps 30°. In 1 minute, it sweeps 30° / 60 = 0.5°.")

add_q("tricky",
      "From 12:00 noon to 12:20 PM, what angle has been described by the hour hand?",
      "10°", "20°", "120°", "5°",
      "A",
      "Angle = 20 minutes × 0.5°/min = 10°.")

add_q("tricky",
      "If an arc of length 22 cm in a circle of radius 21 cm subtends angle θ, then θ is (use π = 22/7):",
      "60°", "45°", "30°", "90°",
      "A",
      "l = (θ/360) × 2π r ⇒ 22 = (θ/360) × 2 × (22/7) × 21 = (θ/360) × 132 ⇒ θ/360 = 22/132 = 1/6 ⇒ θ = 60°.")

add_q("tricky",
      "What is the ratio of the areas of incircle and circumcircle of a square?",
      "1 : 2", "1 : 4", "1 : √2", "2 : 3",
      "A",
      "Let side of square be 2a. Incircle radius r = a. Circumcircle radius R = a√2. Ratio of areas = π r² / π R² = a² / (2a²) = 1 : 2.")

add_q("tricky",
      "What is the ratio of the areas of incircle and circumcircle of an equilateral triangle?",
      "1 : 4", "1 : 2", "1 : 3", "1 : 9",
      "A",
      "For an equilateral triangle, inradius r = a / (2√3) and circumradius R = a / √3. Thus R = 2r. Ratio of areas = π r² / π(2r)² = 1 : 4.")

add_q("tricky",
      "If the diameter of a circle is increased by 40%, its circumference increases by:",
      "40%", "80%", "96%", "20%",
      "A",
      "Circumference C = π d is directly proportional to diameter d. Thus C increases by exactly 40%.")

add_q("tricky",
      "If the diameter of a circle is increased by 40%, its area increases by:",
      "96%", "40%", "80%", "140%",
      "A",
      "New diameter = 1.4 d ⇒ new radius = 1.4 r. New area = π(1.4 r)² = 1.96 π r². Increase = (1.96 - 1) × 100% = 96%.")

# =========================================================================
# 10 VERY HARD QUESTIONS (Exemplar, multi-step geometric locus & calculus-like)
# =========================================================================
add_q("very_hard",
      "A chord AB of a circle of radius 10 cm subtends a right angle at the centre O. Find the area of the minor segment using π = 3.1416:",
      "28.54 cm²", "25 cm²", "31.416 cm²", "28.0 cm²",
      "A",
      "Area of sector = (1/4) × 3.1416 × 100 = 78.54 cm². Area of right Δ = (1/2) × 10 × 10 = 50 cm². Minor segment = 78.54 - 50 = 28.54 cm².")

add_q("very_hard",
      "In a circle of radius R, an arc of length R subtends an angle at the centre equal to:",
      "1 radian (approx 57.3°)", "60°", "45°", "1°",
      "A",
      "By definition of radian measure, angle subtended by an arc equal in length to the radius is 1 radian = 180° / π ≈ 57.296°.")

add_q("very_hard",
      "Two circular pieces of equal radii are cut from a rectangular sheet of dimensions 14 cm × 7 cm such that each circle has maximum possible area. The area of the leftover sheet is (use π = 22/7):",
      "21 cm²", "42 cm²", "14 cm²", "28 cm²",
      "A",
      "The rectangle of 14 × 7 can fit two circles each of diameter 7 cm (radius 3.5 cm). Area of rectangle = 14 × 7 = 98 cm². Area of 2 circles = 2 × (22/7) × (7/2)² = 2 × (22/7) × 49/4 = 77 cm². Leftover area = 98 - 77 = 21 cm².")

add_q("very_hard",
      "If a bicycle wheel makes 5000 revolutions in moving 11 km, what is the diameter of the wheel (use π = 22/7)?",
      "70 cm", "35 cm", "140 cm", "65 cm",
      "A",
      "Distance in 1 revolution = (11 × 1000 × 100) / 5000 = 1,100,000 / 5000 = 220 cm. Circumference π d = 220 ⇒ (22/7) d = 220 ⇒ d = 70 cm.")

add_q("very_hard",
      "A copper wire, when bent in the form of a square, encloses an area of 484 cm². If the same wire is bent in the form of a circle, the area enclosed by it is (use π = 22/7):",
      "616 cm²", "484 cm²", "528 cm²", "644 cm²",
      "A",
      "Side of square a = √484 = 22 cm. Perimeter = 4 × 22 = 88 cm. For circle: 2π r = 88 ⇒ 2 × (22/7) × r = 88 ⇒ r = 14 cm. Area of circle = (22/7) × 14² = (22/7) × 196 = 616 cm².")

add_q("very_hard",
      "An equilateral triangle is inscribed in a circle of radius 6 cm. Find the area of the three segments outside the triangle (use π = 3.14 and √3 = 1.732):",
      "66.24 cm²", "113.04 cm²", "46.8 cm²", "55.5 cm²",
      "A",
      "Circle area = 3.14 × 6² = 113.04 cm². Side of equilateral Δ a = r√3 = 6√3. Area of equilateral Δ = (√3/4) a² = (1.732 / 4) × 108 = 1.732 × 27 = 46.764 cm². Combined area of 3 segments = 113.04 - 46.764 = 66.276 ≈ 66.24 cm².")

add_q("very_hard",
      "A calf is tied with a rope of length 6 m at the corner of a rectangular lawn of dimensions 20 m × 16 m. If the length of the rope is increased by 2 m, find the increase in the grazing area (use π = 22/7):",
      "22 m²", "44 m²", "11 m²", "33 m²",
      "A",
      "At the corner of rectangle, angle = 90° (quadrant). Initial area = (1/4) π (6²) = 9π. New area with 8 m rope = (1/4) π (8²) = 16π. Increase = 16π - 9π = 7π = 7 × (22/7) = 22 m².")

add_q("very_hard",
      "The area of an incircle of an equilateral triangle is 154 cm². The perimeter of the triangle is (use π = 22/7 and √3 = 1.732):",
      "72.74 cm (approx 42√3 cm)",
      "42 cm",
      "84 cm",
      "63.5 cm",
      "A",
      "π r² = 154 ⇒ r = 7 cm. For equilateral triangle, inradius r = a / (2√3) ⇒ a = 2√3 × 7 = 14√3 cm. Perimeter = 3a = 3 × 14√3 = 42√3 ≈ 42 × 1.732 = 72.74 cm.")

add_q("very_hard",
      "Find the area of the largest triangle that can be inscribed in a semicircle of radius r:",
      "r²", "2 r²", "(1/2) r²", "r² / 2",
      "A",
      "Base of the triangle is along the diameter (base = 2r). The maximum possible altitude is from the top of the semicircle to the base, which is the radius r. Area = (1/2) × base × height = (1/2) × 2r × r = r².")

add_q("very_hard",
      "If a chord of length equal to the radius r is drawn in a circle, what is the area of the minor segment cut off by this chord?",
      "(π/6 - √3/4) r²",
      "(π/3 - √3/4) r²",
      "(π/4 - 1/2) r²",
      "(π/6 - 1/2) r²",
      "A",
      "The chord of length r forms an equilateral triangle with the two radii (all sides r), so θ = 60°. Area of sector = (60/360) π r² = (π/6) r². Area of equilateral Δ = (√3/4) r². Area of minor segment = (π/6 - √3/4) r².")

# Verification of distribution
tiers = {}
for q in questions:
    d = q["difficulty"]
    tiers[d] = tiers.get(d, 0) + 1

print(f"Total questions generated: {len(questions)}")
print(f"Tier distribution: {tiers}")

# Output JS content
output_path = "modules/testseries/data/class10/mathematics/chapter11_mathematics.js"
header = """/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 11: Areas Related to Circles
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter11FullBank = {
    id: 'ts_c10_math_ch11',
    title: 'Chapter 11: Areas Related to Circles Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Comprehensive 100-Question master assessment for Class 10 NCERT Mathematics Chapter 11 (Areas Related to Circles). Covers sector and segment definitions, arc length, area of minor and major sectors/segments, wiper blades, grazing horses, brooch wire designs, and visual diagrams.',
    questions: """

footer = """
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter11FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter11FullBank;
}
"""

js_content = header + json.dumps(questions, indent=4, ensure_ascii=False) + footer

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Saved assessment to {output_path}")
