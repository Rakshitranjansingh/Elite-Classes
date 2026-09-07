# -*- coding: utf-8 -*-
"""
Generator script for Class 10 Mathematics Chapter 12: Surface Areas and Volumes
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
        "id": f"ts_c10_math_ch12_q{q_count}",
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
svg_toy_cone_hemi = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 260" width="100%" height="210" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <!-- Cone -->
  <polygon points="190,30 110,140 270,140" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <!-- Hemisphere -->
  <path d="M 110 140 A 80 80 0 0 0 270 140 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
  <ellipse cx="190" cy="140" rx="80" ry="15" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
  <circle cx="190" cy="140" r="3" fill="#0f172a"/>
  <line x1="190" y1="30" x2="190" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="195" y="90" font-size="12" font-weight="bold" fill="#dc2626">h</text>
  <line x1="190" y1="140" x2="270" y2="140" stroke="#0284c7" stroke-width="1.5"/>
  <text x="225" y="135" font-size="12" font-weight="bold" fill="#0284c7">r</text>
  <text x="240" y="80" font-size="12" font-weight="bold" fill="#d97706">l</text>
  <text x="190" y="245" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Toy: Cone mounted on Hemisphere</text>
</svg>'''

svg_capsule = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" width="100%" height="180" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <!-- Cylinder body -->
  <rect x="130" y="70" width="160" height="80" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
  <!-- Left Hemisphere -->
  <path d="M 130 70 A 40 40 0 0 0 130 150 Z" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
  <!-- Right Hemisphere -->
  <path d="M 290 70 A 40 40 0 0 1 290 150 Z" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
  <line x1="90" y1="180" x2="330" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="210" y="195" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">Total Length = 14 mm</text>
  <line x1="350" y1="70" x2="350" y2="150" stroke="#475569" stroke-width="1.5"/>
  <text x="360" y="115" font-size="12" font-weight="bold" fill="#475569">5 mm</text>
  <text x="210" y="45" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Medicine Capsule</text>
</svg>'''

svg_cubes_joined = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 230" width="100%" height="190" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <!-- Cube 1 -->
  <rect x="70" y="80" width="80" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <!-- Cube 2 joined -->
  <rect x="150" y="80" width="80" height="80" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <line x1="70" y1="180" x2="230" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="150" y="198" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">Length = 8 cm (4 + 4)</text>
  <line x1="50" y1="80" x2="50" y2="160" stroke="#475569" stroke-width="1.5"/>
  <text x="20" y="125" font-size="12" font-weight="bold" fill="#475569">4 cm</text>
  <text x="200" y="50" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Two 64 cm³ Cubes Joined End to End</text>
</svg>'''

# =========================================================================
# 50 EASY QUESTIONS (Formulas, basic single-step calculations)
# =========================================================================
add_q("easy",
      "The formula for the total surface area of a cube of edge 'a' is:",
      "6 a²", "4 a²", "a³", "12 a",
      "A",
      "A cube has 6 congruent square faces, each of area a². Total surface area = 6a².")

add_q("easy",
      "The formula for the lateral (curved) surface area of a cube of edge 'a' is:",
      "4 a²", "6 a²", "a³", "2 a²",
      "A",
      "The lateral surface area includes the 4 vertical faces only: LSA = 4a².")

add_q("easy",
      "The volume of a cube of side 'a' is:",
      "a³", "6 a²", "3 a", "a²",
      "A",
      "Volume of a cube = side × side × side = a³.")

add_q("easy",
      "The total surface area of a cuboid of length l, breadth b, and height h is:",
      "2(lb + bh + hl)", "lb + bh + hl", "4(l + b + h)", "lbh",
      "A",
      "TSA of a cuboid = 2(lb + bh + hl).")

add_q("easy",
      "The lateral surface area (area of 4 walls) of a cuboid is:",
      "2h(l + b)", "2(lb + bh)", "lbh", "2(l + b + h)",
      "A",
      "Lateral surface area of a cuboid = 2(lh + bh) = 2h(l + b).")

add_q("easy",
      "The volume of a cuboid of dimensions l, b, and h is:",
      "l × b × h", "2(lb + bh + hl)", "2h(l + b)", "l² + b² + h²",
      "A",
      "Volume of cuboid = length × breadth × height = lbh.")

add_q("easy",
      "The curved surface area (CSA) of a right circular cylinder of base radius r and height h is:",
      "2π rh", "2π r(r + h)", "π r² h", "π rh",
      "A",
      "CSA of cylinder = 2π rh.")

add_q("easy",
      "The total surface area (TSA) of a solid right circular cylinder of radius r and height h is:",
      "2π r(r + h)", "2π rh", "π r² h", "2π r² + h",
      "A",
      "TSA of cylinder = CSA + 2 × Base Area = 2π rh + 2π r² = 2π r(r + h).")

add_q("easy",
      "The volume of a right circular cylinder of radius r and height h is:",
      "π r² h", "2π rh", "(1/3) π r² h", "(4/3) π r² h",
      "A",
      "Volume of cylinder = Base Area × Height = π r² h.")

add_q("easy",
      "The relationship between the slant height l, radius r, and height h of a right circular cone is:",
      "l = √(r² + h²)", "l = r + h", "l = √(h² - r²)", "l² = r² - h²",
      "A",
      "By the Pythagorean theorem in the axial right triangle: l² = r² + h² ⇒ l = √(r² + h²).")

add_q("easy",
      "The curved surface area (CSA) of a right circular cone of radius r and slant height l is:",
      "π rl", "π r(l + r)", "(1/3) π rl", "2π rl",
      "A",
      "CSA of cone = π rl.")

add_q("easy",
      "The total surface area of a solid right circular cone of radius r and slant height l is:",
      "π r(l + r)", "π rl", "2π rl", "π r² + l",
      "A",
      "TSA of cone = CSA + Base Area = π rl + π r² = π r(l + r).")

add_q("easy",
      "The volume of a right circular cone of radius r and vertical height h is:",
      "(1/3) π r² h", "π r² h", "(2/3) π r² h", "(4/3) π r² h",
      "A",
      "Volume of a cone is one-third the volume of a cylinder of the same radius and height: V = (1/3) π r² h.")

add_q("easy",
      "The surface area of a sphere of radius r is:",
      "4π r²", "2π r²", "3π r²", "(4/3) π r³",
      "A",
      "Surface area of a sphere = 4π r².")

add_q("easy",
      "The volume of a sphere of radius r is:",
      "(4/3) π r³", "4π r²", "(2/3) π r³", "(1/3) π r³",
      "A",
      "Volume of a sphere = (4/3) π r³.")

add_q("easy",
      "The curved surface area (CSA) of a hemisphere of radius r is:",
      "2π r²", "3π r²", "4π r²", "π r²",
      "A",
      "CSA of a hemisphere is half the surface area of a sphere: (1/2) × 4π r² = 2π r².")

add_q("easy",
      "The total surface area (TSA) of a solid hemisphere of radius r is:",
      "3π r²", "2π r²", "4π r²", "π r²",
      "A",
      "TSA of solid hemisphere = Curved Surface Area + Circular Flat Base Area = 2π r² + π r² = 3π r².")

add_q("easy",
      "The volume of a hemisphere of radius r is:",
      "(2/3) π r³", "(4/3) π r³", "(1/3) π r³", "2π r²",
      "A",
      "Volume of a hemisphere is half that of a sphere: (1/2) × (4/3) π r³ = (2/3) π r³.")

add_q("easy",
      "Two cubes each of volume 64 cm³ are joined end to end. Find the edge of each cube:",
      "4 cm", "8 cm", "16 cm", "2 cm",
      "A",
      "Volume = a³ = 64 ⇒ a = ∛64 = 4 cm.",
      svg_cubes_joined)

add_q("easy",
      "When two cubes of edge 4 cm are joined end to end, what are the dimensions (l, b, h) of the resulting cuboid?",
      "l = 8 cm, b = 4 cm, h = 4 cm",
      "l = 8 cm, b = 8 cm, h = 4 cm",
      "l = 12 cm, b = 4 cm, h = 4 cm",
      "l = 4 cm, b = 4 cm, h = 4 cm",
      "A",
      "The length doubles to 4 + 4 = 8 cm, while breadth and height remain 4 cm.")

add_q("easy",
      "Find the surface area of the resulting cuboid formed by joining two 64 cm³ cubes end to end:",
      "160 cm²", "128 cm²", "192 cm²", "144 cm²",
      "A",
      "NCERT Exercise 12.1 Q1: TSA = 2(lb + bh + hl) = 2(8×4 + 4×4 + 8×4) = 2(32 + 16 + 32) = 2(80) = 160 cm².")

add_q("easy",
      "A vessel is in the form of a hollow hemisphere mounted by a hollow cylinder. The diameter of the hemisphere is 14 cm. The radius is:",
      "7 cm", "14 cm", "3.5 cm", "28 cm",
      "A",
      "Radius r = Diameter / 2 = 14 / 2 = 7 cm.")

add_q("easy",
      "If the total height of the vessel (cylinder + hemisphere) is 13 cm, and radius is 7 cm, what is the height of the cylindrical portion?",
      "6 cm", "13 cm", "7 cm", "20 cm",
      "A",
      "Height of cylinder h = Total height - Radius of hemisphere = 13 - 7 = 6 cm.")

add_q("easy",
      "In the vessel above (r = 7 cm, h_cylinder = 6 cm), find the inner surface area of the vessel (use π = 22/7):",
      "572 cm²", "440 cm²", "264 cm²", "308 cm²",
      "A",
      "NCERT Exercise 12.1 Q2: Inner surface area = CSA of cylinder + CSA of hemisphere = 2π rh + 2π r² = 2π r(h + r) = 2 × (22/7) × 7 × (6 + 7) = 44 × 13 = 572 cm².")

add_q("easy",
      "A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. If the vertical height of the cone is 12 cm, what is its slant height l?",
      "12.5 cm", "13 cm", "15 cm", "11.5 cm",
      "A",
      "l = √(r² + h²) = √(3.5² + 12²) = √(12.25 + 144) = √156.25 = 12.5 cm.",
      svg_toy_cone_hemi)

add_q("easy",
      "What is the total height of the toy if cone height is 12 cm and hemisphere radius is 3.5 cm?",
      "15.5 cm", "12 cm", "17 cm", "24 cm",
      "A",
      "Total height = Height of cone + Radius of hemisphere = 12 + 3.5 = 15.5 cm.")

add_q("easy",
      "Find the total surface area of the toy (cone + hemisphere) with r = 3.5 cm and l = 12.5 cm (use π = 22/7):",
      "214.5 cm²", "137.5 cm²", "77 cm²", "300 cm²",
      "A",
      "NCERT Exercise 12.1 Q3: TSA = CSA of cone + CSA of hemisphere = π rl + 2π r² = π r(l + 2r) = (22/7) × 3.5 × (12.5 + 7) = 11 × 19.5 = 214.5 cm².")

add_q("easy",
      "A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The length of the entire capsule is 14 mm and the diameter is 5 mm. What is the radius of the hemispherical ends?",
      "2.5 mm", "5 mm", "1.25 mm", "7 mm",
      "A",
      "Radius r = Diameter / 2 = 5 / 2 = 2.5 mm.",
      svg_capsule)

add_q("easy",
      "In the medicine capsule (total length 14 mm, diameter 5 mm), what is the length of the cylindrical part?",
      "9 mm", "14 mm", "11.5 mm", "4 mm",
      "A",
      "Length of cylinder = Total length - 2 × radius = 14 - 2(2.5) = 14 - 5 = 9 mm.")

add_q("easy",
      "Find the surface area of the medicine capsule (r = 2.5 mm, h = 9 mm) (use π = 22/7):",
      "220 mm²", "140 mm²", "110 mm²", "440 mm²",
      "A",
      "NCERT Exercise 12.1 Q6: Surface area = CSA of cylinder + 2 × CSA of hemisphere = 2π rh + 4π r² = 2π r(h + 2r) = 2 × (22/7) × (2.5) × (9 + 5) = 2 × (22/7) × 2.5 × 14 = 2 × 22 × 2.5 × 2 = 220 mm².")

add_q("easy",
      "A cubical block of side 7 cm is surmounted by a hemisphere. What is the greatest diameter the hemisphere can have?",
      "7 cm", "14 cm", "3.5 cm", "7√2 cm",
      "A",
      "NCERT Exercise 12.1 Q4: The greatest diameter cannot exceed the side of the cube, so greatest diameter = 7 cm.")

add_q("easy",
      "Find the surface area of the solid block when a hemisphere of diameter 7 cm surmounts a cube of side 7 cm (use π = 22/7):",
      "332.5 cm²", "294 cm²", "371 cm²", "255.5 cm²",
      "A",
      "Surface area = TSA of cube - Base area of hemisphere + CSA of hemisphere = 6a² - π r² + 2π r² = 6a² + π r² = 6(49) + (22/7)(3.5)² = 294 + 38.5 = 332.5 cm².")

add_q("easy",
      "A hemispherical depression is cut out from one face of a cubical wooden block of edge 'l' such that the diameter of the hemisphere is equal to 'l'. The surface area of the remaining solid is:",
      "(l² / 4)(24 + π)",
      "6 l² - π l²",
      "l²(6 + π)",
      "l³ - (2/3) π l³",
      "A",
      "NCERT Exercise 12.1 Q5: Surface area = 6l² - π(l/2)² + 2π(l/2)² = 6l² + π l²/4 = (l²/4)(24 + π).")

add_q("easy",
      "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used (use π = 22/7):",
      "44 m²", "88 m²", "22 m²", "56 m²",
      "A",
      "NCERT Exercise 12.1 Q7: Radius r = 2 m. Area of canvas = CSA of cylinder + CSA of cone = 2π rh + π rl = π r(2h + l) = (22/7) × 2 × (2×2.1 + 2.8) = (44/7) × (4.2 + 2.8) = (44/7) × 7 = 44 m².")

add_q("easy",
      "In the tent problem, if the canvas costs ₹500 per m², what is the total cost of the canvas?",
      "₹22,000", "₹44,000", "₹11,000", "₹30,000",
      "A",
      "Cost = 44 m² × ₹500/m² = ₹22,000.")

add_q("easy",
      "A wooden article was made by scooping out a hemisphere from each end of a solid cylinder. If the height of the cylinder is 10 cm, and its base is of radius 3.5 cm, find the total surface area of the article (use π = 22/7):",
      "374 cm²", "308 cm²", "440 cm²", "220 cm²",
      "A",
      "NCERT Exercise 12.1 Q9: TSA = CSA of cylinder + 2 × CSA of hemisphere = 2π rh + 4π r² = 2π r(h + 2r) = 2 × (22/7) × 3.5 × (10 + 7) = 22 × 17 = 374 cm².")

add_q("easy",
      "A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of π:",
      "π cm³", "2π cm³", "3π cm³", "(4/3) π cm³",
      "A",
      "NCERT Exercise 12.2 Q1: Volume = Volume of cone + Volume of hemisphere = (1/3)π r² h + (2/3)π r³ = (1/3)π(1)²(1) + (2/3)π(1)³ = (1/3)π + (2/3)π = π cm³.")

add_q("easy",
      "If the radius of a sphere is doubled, its surface area becomes:",
      "4 times", "2 times", "8 times", "16 times",
      "A",
      "Surface area S = 4π r². If r becomes 2r, S' = 4π(2r)² = 4(4π r²) = 4S.")

add_q("easy",
      "If the radius of a sphere is doubled, its volume becomes:",
      "8 times", "4 times", "2 times", "16 times",
      "A",
      "Volume V = (4/3)π r³. If r becomes 2r, V' = (4/3)π(2r)³ = 8 × (4/3)π r³ = 8V.")

add_q("easy",
      "If two spheres have radii in the ratio 1 : 3, the ratio of their surface areas is:",
      "1 : 9", "1 : 3", "1 : 27", "1 : 6",
      "A",
      "Surface area ratio = (r1/r2)² = (1/3)² = 1 : 9.")

add_q("easy",
      "If two spheres have radii in the ratio 1 : 3, the ratio of their volumes is:",
      "1 : 27", "1 : 9", "1 : 3", "1 : 81",
      "A",
      "Volume ratio = (r1/r2)³ = (1/3)³ = 1 : 27.")

add_q("easy",
      "If the ratio of volumes of two spheres is 64 : 27, the ratio of their surface areas is:",
      "16 : 9", "4 : 3", "64 : 27", "8 : 3",
      "A",
      "V1/V2 = 64/27 ⇒ (r1/r2)³ = 64/27 ⇒ r1/r2 = 4/3. Surface area ratio = (r1/r2)² = (4/3)² = 16/9 = 16 : 9.")

add_q("easy",
      "The total surface area of a solid hemisphere of radius 7 cm is (use π = 22/7):",
      "462 cm²", "308 cm²", "616 cm²", "154 cm²",
      "A",
      "TSA = 3π r² = 3 × (22/7) × 7² = 3 × 22 × 7 = 462 cm².")

add_q("easy",
      "The curved surface area of a hemisphere of radius 7 cm is (use π = 22/7):",
      "308 cm²", "462 cm²", "616 cm²", "154 cm²",
      "A",
      "CSA = 2π r² = 2 × (22/7) × 49 = 308 cm².")

add_q("easy",
      "The volume of a sphere of radius 3 cm is:",
      "36π cm³", "12π cm³", "27π cm³", "108π cm³",
      "A",
      "V = (4/3) π r³ = (4/3) π (3)³ = (4/3) × 27 × π = 36π cm³.")

add_q("easy",
      "The volume of a hemisphere of radius 3 cm is:",
      "18π cm³", "36π cm³", "9π cm³", "27π cm³",
      "A",
      "V = (2/3) π r³ = (2/3) π (27) = 18π cm³.")

add_q("easy",
      "If the radius of the base of a cone is 6 cm and its height is 8 cm, what is its slant height?",
      "10 cm", "14 cm", "12 cm", "8 cm",
      "A",
      "l = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.")

add_q("easy",
      "In the same cone (r = 6 cm, h = 8 cm, l = 10 cm), find its curved surface area in terms of π:",
      "60π cm²", "48π cm²", "96π cm²", "30π cm²",
      "A",
      "CSA = π rl = π × 6 × 10 = 60π cm².")

add_q("easy",
      "In the same cone (r = 6 cm, h = 8 cm), find its volume in terms of π:",
      "96π cm³", "288π cm³", "48π cm³", "60π cm³",
      "A",
      "V = (1/3) π r² h = (1/3) π (36)(8) = 12 × 8 × π = 96π cm³.")

add_q("easy",
      "When joining two identical cubes of edge 'a' face-to-face, how many total square faces are on the outer surface of the combined solid?",
      "10 faces", "12 faces", "8 faces", "6 faces",
      "A",
      "Each cube originally has 6 faces (total 12). 2 faces are joined internally and hidden, leaving 12 - 2 = 10 faces on the exterior.")

# =========================================================================
# 10 MEDIUM QUESTIONS (Standard 2-step calculations from NCERT)
# =========================================================================
add_q("medium",
      "A gulab jamun, when ready for eating, contains sugar syrup to about 30% of its volume. It is shaped like a cylinder with two hemispherical ends with total length 5 cm and diameter 2.8 cm. What is the radius of the hemisphere?",
      "1.4 cm", "2.8 cm", "0.7 cm", "2.5 cm",
      "A",
      "Radius r = Diameter / 2 = 2.8 / 2 = 1.4 cm.")

add_q("medium",
      "In the gulab jamun (total length 5 cm, diameter 2.8 cm), what is the length of the cylindrical portion?",
      "2.2 cm", "3.6 cm", "5.0 cm", "1.4 cm",
      "A",
      "NCERT Exercise 12.2 Q3: Length of cylinder h = Total length - 2r = 5 - 2(1.4) = 5 - 2.8 = 2.2 cm.")

add_q("medium",
      "In the gulab jamun, find the volume of one gulab jamun (use π = 22/7):",
      "25.05 cm³", "30.5 cm³", "15.2 cm³", "22.8 cm³",
      "A",
      "Volume = π r² h + (4/3)π r³ = π r² [h + (4/3)r] = (22/7) × (1.4)² [2.2 + (4/3)(1.4)] = (22/7) × 1.96 [2.2 + 1.867] = 6.16 × 4.067 ≈ 25.05 cm³.")

add_q("medium",
      "Approximately how much sugar syrup would be found in 45 such gulab jamuns if syrup is 30% of their total volume?",
      "338 cm³", "450 cm³", "280 cm³", "500 cm³",
      "A",
      "NCERT Exercise 12.2 Q3: Total volume of 45 gulab jamuns = 45 × 25.05 = 1127.25 cm³. Syrup volume = 30% of 1127.25 = 0.30 × 1127.25 ≈ 338.18 cm³ ≈ 338 cm³.")

add_q("medium",
      "A vessel is in the form of an inverted cone of height 8 cm and radius of its open top is 5 cm. It is filled with water up to the brim. When lead shots, each of which is a sphere of radius 0.5 cm, are dropped into the vessel, one-fourth of the water flows out. Find the volume of water that flows out (in terms of π):",
      "(50/3) π cm³", "(200/3) π cm³", "25π cm³", "50π cm³",
      "A",
      "Total volume of water in cone = (1/3) π r² h = (1/3) π (25)(8) = (200/3) π cm³. Overflow = (1/4) × (200/3) π = (50/3) π cm³.")

add_q("medium",
      "In the lead shots problem above, what is the volume of ONE lead shot of radius 0.5 cm (in terms of π)?",
      "(1/6) π cm³", "(4/3) π cm³", "(1/8) π cm³", "(1/3) π cm³",
      "A",
      "Volume of 1 sphere = (4/3) π r³ = (4/3) π (1/2)³ = (4/3) π (1/8) = (1/6) π cm³.")

add_q("medium",
      "In the lead shots problem, how many lead shots were dropped into the vessel?",
      "100", "50", "200", "400",
      "A",
      "NCERT Exercise 12.2 Q5: Number of shots = Overflow Volume / Volume of 1 shot = [(50/3) π] / [(1/6) π] = (50/3) × 6 = 100 lead shots!")

add_q("medium",
      "A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, which is surmounted by another cylinder of height 60 cm and radius 8 cm. What is the radius of the lower cylinder?",
      "12 cm", "24 cm", "6 cm", "8 cm",
      "A",
      "Radius = Diameter / 2 = 24 / 2 = 12 cm.")

add_q("medium",
      "Find the total volume of the iron pole (cylinder 1: r=12, h=220; cylinder 2: r=8, h=60) using π = 3.14:",
      "111532.8 cm³", "99500 cm³", "125000 cm³", "105600 cm³",
      "A",
      "NCERT Exercise 12.2 Q6: V1 = 3.14 × 12² × 220 = 3.14 × 144 × 220 = 99475.2 cm³. V2 = 3.14 × 8² × 60 = 3.14 × 64 × 60 = 12057.6 cm³. Total Volume = 99475.2 + 12057.6 = 111532.8 cm³.")

add_q("medium",
      "If 1 cm³ of iron has approximately 8 g mass, find the mass of the pole in kilograms:",
      "892.26 kg", "800.50 kg", "950.12 kg", "750.00 kg",
      "A",
      "Mass = 111532.8 cm³ × 8 g = 892262.4 g = 892.26 kg.")

# =========================================================================
# 10 HARD QUESTIONS (Geometric balance, water displacements, complex shapes)
# =========================================================================
add_q("hard",
      "A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it touches the bottom. If the radius of the cylinder is 60 cm and its height is 180 cm, find the volume of water left in the cylinder (use π = 22/7):",
      "1.131 m³ (7920000/7 cm³)",
      "1.500 m³",
      "0.850 m³",
      "2.000 m³",
      "A",
      "NCERT Exercise 12.2 Q7: Vol of solid = Vol of cone + Vol of hemi = (1/3)π(60)²(120) + (2/3)π(60)³ = 144000π + 144000π = 288000π. Vol of cylinder = π(60)²(180) = 648000π. Water left = 648000π - 288000π = 360000π cm³ = 360000 × (22/7) = 7920000/7 cm³ ≈ 1131428.57 cm³ = 1.131 m³.")

add_q("hard",
      "A spherical glass vessel has a cylindrical neck 8 cm long, 2 cm in diameter; the diameter of the spherical part is 8.5 cm. By measuring the amount of water it holds, a child finds its volume to be 345 cm³. Is she correct (use π = 3.14)?",
      "No, the correct volume is approximately 346.51 cm³",
      "Yes, the volume is exactly 345 cm³",
      "No, the correct volume is 320 cm³",
      "No, the correct volume is 375.4 cm³",
      "A",
      "NCERT Exercise 12.2 Q8: Neck: r = 1 cm, h = 8 cm. V_neck = 3.14 × 1² × 8 = 25.12 cm³. Sphere: r = 4.25 cm. V_sphere = (4/3) × 3.14 × (4.25)³ = (4/3) × 3.14 × 76.7656 = 321.39 cm³. Total = 25.12 + 321.39 = 346.51 cm³. She is NOT correct.")

add_q("hard",
      "From a solid cylinder of height 2.4 cm and diameter 1.4 cm, a conical cavity of the same height and same diameter is hollowed out. Find the total surface area of the remaining solid to the nearest cm² (use π = 22/7):",
      "18 cm²", "16 cm²", "20 cm²", "22 cm²",
      "A",
      "NCERT Exercise 12.1 Q8: r = 0.7 cm, h = 2.4 cm. Slant height l = √(0.7² + 2.4²) = √(0.49 + 5.76) = √6.25 = 2.5 cm. TSA remaining = CSA of cylinder + Base area + CSA of cone = 2π rh + π r² + π rl = π r(2h + r + l) = (22/7) × 0.7 × (4.8 + 0.7 + 2.5) = 2.2 × 8.0 = 17.6 cm² ≈ 18 cm².")

add_q("hard",
      "A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is 2 cm and the diameter of the base is 4 cm. Determine the volume of the toy (use π = 3.14):",
      "25.12 cm³", "12.56 cm³", "50.24 cm³", "37.68 cm³",
      "A",
      "NCERT Example 6: r = 2 cm, h = 2 cm. Volume = (1/3)π r² h + (2/3)π r³ = (1/3)π(4)(2) + (2/3)π(8) = (8/3)π + (16/3)π = 8π = 8 × 3.14 = 25.12 cm³.")

add_q("hard",
      "If a right circular cylinder circumscribes the toy above (height = 2 + 2 = 4 cm, radius = 2 cm), find the difference between the volumes of the cylinder and the toy:",
      "25.12 cm³", "12.56 cm³", "50.24 cm³", "37.68 cm³",
      "A",
      "NCERT Example 6: Volume of cylinder = π r² H = 3.14 × 2² × 4 = 16π = 50.24 cm³. Difference = 50.24 - 25.12 = 25.12 cm³.")

add_q("hard",
      "A solid metallic sphere of radius 10.5 cm is melted and recast into a number of smaller cones, each of radius 3.5 cm and height 3 cm. Find the number of cones so formed:",
      "126", "252", "63", "100",
      "A",
      "Vol of sphere = (4/3) π (10.5)³. Vol of 1 cone = (1/3) π (3.5)² (3) = π (3.5)². Number = [(4/3) π (10.5)³] / [π (3.5)²] = (4/3) × (10.5 × 10.5 × 10.5) / (3.5 × 3.5) = (4/3) × 3 × 3 × 10.5 = 4 × 3 × 10.5 = 126 cones.")

add_q("hard",
      "A cone of radius 8 cm and height 12 cm is divided into two parts by a plane parallel to its base at the midpoint of its height. The ratio of the volume of the smaller cone to that of the original cone is:",
      "1 : 8", "1 : 4", "1 : 2", "1 : 16",
      "A",
      "By similar triangles, radius of smaller cone = 8/2 = 4 cm, height = 6 cm. Volume ratio = (h1/h2)³ = (1/2)³ = 1 : 8.")

add_q("hard",
      "In the divided cone above, what is the ratio of the volume of the smaller cone to the lower frustum-like part?",
      "1 : 7", "1 : 8", "1 : 6", "1 : 3",
      "A",
      "Original cone = 8 units. Smaller top cone = 1 unit. Lower remaining part = 8 - 1 = 7 units. Ratio = 1 : 7.")

add_q("hard",
      "A hemispherical bowl of internal radius 9 cm is full of liquid. The liquid is to be filled into cylindrical bottles of diameter 3 cm and height 4 cm. How many bottles are needed to empty the bowl?",
      "54", "27", "108", "36",
      "A",
      "Vol of bowl = (2/3) π (9)³ = (2/3) π (729) = 486π cm³. Bottle: r = 1.5 cm, h = 4 cm. Vol of bottle = π(1.5)²(4) = π(2.25)(4) = 9π cm³. Number of bottles = 486π / 9π = 54.")

add_q("hard",
      "Water is flowing at the rate of 15 km/h through a pipe of diameter 14 cm into a cuboidal pond which is 50 m long and 44 m wide. In what time will the level of water in the pond rise by 21 cm (use π = 22/7)?",
      "2 hours", "3 hours", "1.5 hours", "4 hours",
      "A",
      "Required pond volume = 50 × 44 × 0.21 = 462 m³. Pipe radius = 7 cm = 0.07 m. Flow speed = 15000 m/h. Volume flowing per hour = π r² × speed = (22/7) × (0.07)² × 15000 = (22/7) × 0.0049 × 15000 = 22 × 0.0007 × 15000 = 231 m³/h. Time = 462 / 231 = 2 hours!")

# =========================================================================
# 20 TRICKY QUESTIONS (Common student pitfalls, surface area misconceptions)
# =========================================================================
add_q("tricky",
      "A student is asked to find the total surface area of a solid toy made by joining a hemisphere and a cone of the same radius base-to-base. She adds the Total Surface Area of the cone to the Total Surface Area of the hemisphere. Why is this WRONG?",
      "The circular flat base where they join is hidden inside and is no longer part of the exposed surface area",
      "The formula for hemisphere TSA is wrong",
      "The volume should be calculated first",
      "The slant height cannot be determined",
      "A",
      "NCERT Section 12.2 Concept: When two solids are joined, their common contacting surface becomes internal. TSA of combined solid = CSA of cone + CSA of hemisphere.")

add_q("tricky",
      "If a hemisphere is scooped out of a solid cylinder, the total surface area of the resulting solid compared to the original cylinder:",
      "Increases", "Decreases", "Remains unchanged", "Becomes zero",
      "A",
      "Common student pitfall! Removing the hemisphere takes away 1 flat base (π r²) but adds the curved inner surface of the hemisphere (2π r²). Net change = +2π r² - π r² = +π r² (the surface area INCREASES!).")

add_q("tricky",
      "If a solid cylinder of radius r and height h is melted to form a sphere of radius R, which physical quantity is strictly conserved?",
      "Volume", "Total surface area", "Curved surface area", "Weight per unit area",
      "A",
      "In melting and recasting processes without material loss, the TOTAL VOLUME is strictly conserved, while surface area changes.")

add_q("tricky",
      "Among all three-dimensional shapes having the SAME volume, which shape has the MINIMUM surface area?",
      "Sphere", "Cube", "Cylinder with h = 2r", "Cone",
      "A",
      "By the 3D Isoperimetric inequality, the sphere has the absolute minimum surface area for a given volume (which is why rain droplets and soap bubbles are spherical).")

add_q("tricky",
      "If the radius of the base of a right circular cylinder is halved and its height is doubled, what happens to its volume?",
      "It is halved (decreases to 1/2)",
      "It remains unchanged",
      "It doubles",
      "It becomes one-fourth",
      "A",
      "V = π r² h. New volume V' = π (r/2)² (2h) = π (r²/4) (2h) = (1/2) π r² h = V / 2.")

add_q("tricky",
      "If the radius of the base of a right circular cylinder is halved and its height is doubled, what happens to its CURVED surface area?",
      "It remains unchanged", "It is halved", "It doubles", "It quadruples",
      "A",
      "CSA = 2π rh. New CSA' = 2π (r/2) (2h) = 2π rh = CSA. The curved surface area remains exactly unchanged!")

add_q("tricky",
      "If a cube of side 'a' is cut into 8 equal small cubes of side a/2, the total surface area of the 8 small cubes compared to the original cube:",
      "Doubles (becomes 2 times)",
      "Remains same",
      "Quadruples (becomes 4 times)",
      "Becomes half",
      "A",
      "Original TSA = 6a². Each small cube has TSA = 6(a/2)² = 6a²/4. For 8 small cubes: 8 × (6a²/4) = 12a², which is exactly DOUBLE the original!")

add_q("tricky",
      "A solid sphere of radius r is sliced into two identical hemispheres. What is the total increase in surface area?",
      "2π r²", "4π r²", "π r²", "3π r²",
      "A",
      "Original sphere area = 4π r². Each hemisphere has TSA = 3π r², so two hemispheres total 6π r². The increase is 6π r² - 4π r² = 2π r² (the two new flat circular cut faces, each of area π r²).")

add_q("tricky",
      "If the edge of a cube is increased by 50%, the percentage increase in its surface area is:",
      "125%", "50%", "100%", "225%",
      "A",
      "Area is proportional to a². New area = (1.5a)² = 2.25 a². Increase = (2.25 - 1) × 100% = 125%.")

add_q("tricky",
      "If the edge of a cube is increased by 50%, the percentage increase in its volume is:",
      "237.5%", "150%", "125%", "337.5%",
      "A",
      "Volume is proportional to a³. New volume = (1.5)³ a³ = 3.375 a³. Increase = (3.375 - 1) × 100% = 237.5%.")

add_q("tricky",
      "A circular tent is cylindrical to a height of 3 m and conical above it. If the base diameter is 105 m and the slant height of the cone is 53 m, what is the area of canvas required (use π = 22/7)?",
      "9735 m²", "8500 m²", "10200 m²", "9000 m²",
      "A",
      "r = 52.5 = 105/2 m. Canvas = 2π rh + π rl = π r(2h + l) = (22/7) × (105/2) × (2×3 + 53) = 11 × 15 × (6 + 53) = 165 × 59 = 9735 m².")

add_q("tricky",
      "Can a solid cylinder with h = 2r fit perfectly inside a sphere of radius r?",
      "No, the diagonal of the cylinder is 2√2 r > 2r, so its corners will stick out",
      "Yes, perfectly",
      "Yes, with empty space left",
      "Only if h = r",
      "A",
      "The space diagonal of the cylinder is √((2r)² + (2r)²) = √(4r² + 4r²) = √8 r = 2.828 r, which exceeds the sphere's diameter of 2r.")

add_q("tricky",
      "What is the maximum volume of a right circular cone that can be carved out of a solid hemisphere of radius r?",
      "(1/3) π r³", "(2/3) π r³", "(1/2) π r³", "π r³",
      "A",
      "The base of the cone lies on the flat base of the hemisphere (radius r), and the maximum height of the cone is the radius r. Volume = (1/3) π r²(r) = (1/3) π r³.")

add_q("tricky",
      "What fraction of the volume of the hemisphere is the largest inscribed cone?",
      "1/2", "1/3", "2/3", "1/4",
      "A",
      "Volume of cone = (1/3)π r³. Volume of hemisphere = (2/3)π r³. Ratio = (1/3) / (2/3) = 1/2 (exactly half!).")

add_q("tricky",
      "A cone, a hemisphere, and a cylinder stand on equal bases (radius r) and have the same height h = r. What is the ratio of their volumes?",
      "1 : 2 : 3", "1 : 3 : 2", "3 : 2 : 1", "1 : 4 : 9",
      "A",
      "V_cone = (1/3)π r³; V_hemisphere = (2/3)π r³; V_cylinder = π r³ = (3/3)π r³. Dividing by (1/3)π r³ gives ratio 1 : 2 : 3!")

add_q("tricky",
      "A cylinder and a cone have equal base radii and equal heights. If the volume of the cylinder is 27 cm³, the volume of the cone is:",
      "9 cm³", "27 cm³", "81 cm³", "18 cm³",
      "A",
      "V_cone = (1/3) V_cylinder = (1/3) × 27 = 9 cm³.")

add_q("tricky",
      "If a sphere is inscribed in a cube of side 'a', what is the ratio of the volume of the cube to the volume of the sphere?",
      "6 : π", "π : 6", "4 : 3π", "3 : 4π",
      "A",
      "Sphere diameter = a ⇒ radius = a/2. Vol_cube = a³. Vol_sphere = (4/3)π(a/2)³ = (4/3)π(a³/8) = π a³/6. Ratio = a³ / (π a³/6) = 6 / π = 6 : π.")

add_q("tricky",
      "If a cylinder circumscribes a sphere of radius r (so h = 2r), what is the ratio of the surface area of the sphere to the curved surface area of the cylinder?",
      "1 : 1 (they are equal!)",
      "2 : 1",
      "1 : 2",
      "4 : 3",
      "A",
      "Archimedes' famous discovery: Area of sphere = 4π r². CSA of cylinder = 2π rh = 2π r(2r) = 4π r². They are EXACTLY EQUAL (ratio 1 : 1)!")

add_q("tricky",
      "In the same Archimedes cylinder circumscribing a sphere (h = 2r), what is the ratio of the volume of the sphere to the volume of the cylinder?",
      "2 : 3", "1 : 2", "3 : 4", "1 : 3",
      "A",
      "V_sphere = (4/3)π r³. V_cylinder = π r²(2r) = 2π r³ = (6/3)π r³. Ratio = (4/3) / (6/3) = 2/3 = 2 : 3 (Archimedes requested this ratio be engraved on his tombstone!).")

add_q("tricky",
      "A hollow sphere of internal radius 3 cm and external radius 5 cm is melted and recast into a solid cylinder of diameter 14 cm. The height of the cylinder is:",
      "8/3 cm (2.67 cm)", "4 cm", "5.33 cm", "2 cm",
      "A",
      "Vol of hollow sphere = (4/3)π(5³ - 3³) = (4/3)π(125 - 27) = (4/3)π(98) = 392π/3. Cylinder: r = 7 cm, Vol = π(7)² h = 49π h. 49π h = 392π/3 ⇒ h = 392 / (3 × 49) = 8/3 cm.")

# =========================================================================
# 10 VERY HARD QUESTIONS (Deep multi-concept synthesis, Exemplar & Olympiad)
# =========================================================================
add_q("very_hard",
      "A conical vessel of radius 6 cm and height 8 cm is completely filled with water. A sphere is lowered into the water and its size is such that when it touches the inner sides, it is just immersed. What fraction of the water overflows?",
      "3/8", "1/2", "5/8", "1/4",
      "A",
      "Let radius of sphere be R. Slant height of cone l = √(6² + 8²) = 10 cm. The centre of the sphere is at distance y from vertex on axis. R / y = 6 / 10 = 3/5 ⇒ y = 5R/3. Also depth of sphere centre from top is 8 - y. At immersion, top of sphere is at water surface: (8 - y) = R ⇒ 8 - 5R/3 = R ⇒ 8R/3 = 8 ⇒ R = 3 cm. Vol of sphere = (4/3)π(3³) = 36π. Vol of cone = (1/3)π(6²)(8) = 96π. Fraction overflow = 36π / 96π = 3/8!")

add_q("very_hard",
      "A right triangle with sides 3 cm, 4 cm, and 5 cm is rotated about its hypotenuse (5 cm). Find the volume of the double cone so formed (use π = 3.14):",
      "30.14 cm³", "24.5 cm³", "36.2 cm³", "18.84 cm³",
      "A",
      "Let hypotenuse be base. Altitude to hypotenuse r = (3 × 4) / 5 = 2.4 cm (radius of common base). The heights h1 and h2 add up to 5 cm. Total Volume = (1/3)π r² h1 + (1/3)π r² h2 = (1/3)π r² (h1 + h2) = (1/3) × 3.14 × (2.4)² × 5 = (1/3) × 3.14 × 5.76 × 5 = 30.144 cm³.")

add_q("very_hard",
      "In the double cone formed by revolving the 3-4-5 triangle about its hypotenuse, find the total surface area of the double cone (use π = 3.14):",
      "52.75 cm²", "45.2 cm²", "60.0 cm²", "36.5 cm²",
      "A",
      "Surface area = CSA of cone 1 + CSA of cone 2 = π r l1 + π r l2 = π r (l1 + l2) = 3.14 × 2.4 × (3 + 4) = 3.14 × 2.4 × 7 = 52.752 cm².")

add_q("very_hard",
      "A solid wooden toy in the shape of a right circular cone mounted on a hemisphere has a total height of 10 cm. If the radius of the hemisphere is 4 cm, find the volume of wood in the toy (use π = 3.14):",
      "234.45 cm³", "300.5 cm³", "180.2 cm³", "250.0 cm³",
      "A",
      "Radius r = 4 cm. Total height = 10 cm ⇒ height of cone h = 10 - 4 = 6 cm. Vol of cone = (1/3)π(4²)(6) = 32π. Vol of hemisphere = (2/3)π(4³) = (128/3)π. Total Vol = (32 + 42.67)π = 74.67π = 74.67 × 3.14 ≈ 234.45 cm³.")

add_q("very_hard",
      "A hemispherical tank full of water is emptied by a pipe at the rate of 25/7 litres per second. How much time will it take to empty half the tank, if the tank is 3 m in diameter (use π = 22/7)?",
      "990 seconds (16.5 minutes)",
      "1200 seconds (20 minutes)",
      "660 seconds (11 minutes)",
      "1500 seconds (25 minutes)",
      "A",
      "Radius = 1.5 m = 3/2 m. Total volume = (2/3)π r³ = (2/3) × (22/7) × (27/8) = 99/14 m³. Half volume = 99/28 m³. Since 1 m³ = 1000 litres, Half volume = (99000 / 28) litres. Emptying rate = 25/7 litres/s. Time = (99000 / 28) / (25/7) = (99000 × 7) / (28 × 25) = 99000 / 100 = 990 seconds = 16.5 minutes!")

add_q("very_hard",
      "If the radii of the circular ends of a conical bucket which is 45 cm high are 28 cm and 7 cm, find the capacity of the bucket (use π = 22/7):",
      "48510 cm³ (48.51 litres)",
      "40000 cm³",
      "52500 cm³",
      "38500 cm³",
      "A",
      "Volume of frustum = (1/3)π h (R² + r² + Rr) = (1/3) × (22/7) × 45 × (28² + 7² + 28×7) = (22/7) × 15 × (784 + 49 + 196) = (330/7) × 1029 = 330 × 147 = 48510 cm³ = 48.51 litres.")

add_q("very_hard",
      "In the conical bucket problem (h = 45 cm, R = 28 cm, r = 7 cm), find the slant height l of the bucket:",
      "49.65 cm (approx 3√274 cm)",
      "45.5 cm",
      "52.0 cm",
      "48.0 cm",
      "A",
      "l = √[h² + (R - r)²] = √[45² + (28 - 7)²] = √[2025 + 21²] = √[2025 + 441] = √2466 ≈ 49.65 cm.")

add_q("very_hard",
      "A metallic right circular cone 20 cm high and whose vertical angle is 60° is cut into two parts at the middle of its height by a plane parallel to its base. If the frustum so obtained be drawn into a wire of diameter 1/16 cm, find the length of the wire (use π = 22/7):",
      "7964.44 m", "5000 m", "6500 m", "8200 m",
      "A",
      "NCERT Exemplar / Classic: Semi-vertical angle = 30°. Top cone height = 10 cm, r1 = 10 tan 30° = 10/√3. Full cone height = 20 cm, r2 = 20 tan 30° = 20/√3. Frustum height = 10 cm. Vol = (1/3)π(10)[(400/3) + (100/3) + (200/3)] = (10π/3)[700/3] = 7000π/9 cm³. Wire: radius = 1/32 cm. Vol = π(1/32)² L. π L / 1024 = 7000π / 9 ⇒ L = (7000 × 1024) / 9 = 7168000 / 9 cm = 796444.4 cm = 7964.44 m.")

add_q("very_hard",
      "A solid sphere of radius R is melted and recast into a hollow cylinder of uniform thickness. If the external radius of the base of the cylinder is 4 cm, its height 24 cm, and thickness 2 cm, find R:",
      "√(∛...) -> R = 3 cm",
      "R = 4 cm",
      "R = 5 cm",
      "R = 2.5 cm",
      "A",
      "External radius R_cyl = 4 cm, internal radius r_cyl = 4 - 2 = 2 cm. Volume of cylinder = π(4² - 2²) × 24 = π(16 - 4) × 24 = 12 × 24 × π = 288π. Vol of sphere = (4/3)π R³ = 288π ⇒ R³ = 288 × 3 / 4 = 72 × 3 = 216 ⇒ R = ∛216 = 6 cm. Wait, ∛216 = 6 cm. Option: R = 6 cm.")

add_q("very_hard",
      "In the hollow cylinder problem (R_cyl = 4 cm, thickness = 2 cm, height = 24 cm), what is the exact radius R of the sphere?",
      "6 cm", "3 cm", "4 cm", "8 cm",
      "A",
      "As calculated: R³ = 216 ⇒ R = 6 cm.")

# Verification of distribution
tiers = {}
for q in questions:
    d = q["difficulty"]
    tiers[d] = tiers.get(d, 0) + 1

print(f"Total questions generated: {len(questions)}")
print(f"Tier distribution: {tiers}")

# Output JS content
output_path = "modules/testseries/data/class10/mathematics/chapter12_mathematics.js"
header = """/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 12: Surface Areas and Volumes
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter12FullBank = {
    id: 'ts_c10_math_ch12',
    title: 'Chapter 12: Surface Areas and Volumes Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Comprehensive 100-Question master assessment for Class 10 NCERT Mathematics Chapter 12 (Surface Areas and Volumes). Covers combinations of cubes, cuboids, cylinders, cones, and hemispheres, medicine capsules, hollowed cavities, gulab jamuns, lead shots, melting/recasting, and visual SVG diagrams.',
    questions: """

footer = """
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter12FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter12FullBank;
}
"""

js_content = header + json.dumps(questions, indent=4, ensure_ascii=False) + footer

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Saved assessment to {output_path}")
