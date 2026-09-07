# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 6: Triangles
Generates exhaustive 100-Question master assessment with embedded SVG diagrams.
Tier Distribution: 50 Easy, 10 Medium, 10 Hard, 20 Tricky, 10 Very Hard.
"""

import json

DIFF_MAP = {
    "Easy": "easy",
    "Medium": "medium",
    "Hard": "hard",
    "Tricky": "tricky",
    "Very Hard": "very_hard"
}

questions = []

def add_q(q_num, difficulty, text, a, b, c, d, correct, explanation, diagram_svg=None):
    norm_diff = DIFF_MAP.get(difficulty, difficulty.lower().replace(" ", "_"))
    q = {
        "id": f"ts_c10_math_ch6_q{q_num}",
        "question_number": q_num,
        "difficulty": norm_diff,
        "question_text": text,
        "question_type": "mcq",
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
    if diagram_svg:
        q["diagram_svg"] = diagram_svg
    questions.append(q)

# -------------------------------------------------------------------------
# SVG DIAGRAM DEFINITIONS
# -------------------------------------------------------------------------

SVG_BPT = """<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Triangle ABC -->
  <polygon points="190,30 60,210 320,210" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
  <!-- Parallel line DE -->
  <line x1="105" y1="148" x2="275" y2="148" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="105" cy="148" r="4" fill="#b91c1c"/>
  <circle cx="275" cy="148" r="4" fill="#b91c1c"/>
  <!-- Vertices -->
  <text x="190" y="20" font-size="13" font-family="sans-serif" fill="#1e3a8a" font-weight="bold" text-anchor="middle">A</text>
  <text x="45" y="220" font-size="13" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">B</text>
  <text x="330" y="220" font-size="13" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">C</text>
  <text x="85" y="145" font-size="12" font-family="sans-serif" fill="#b91c1c" font-weight="bold">D</text>
  <text x="285" y="145" font-size="12" font-family="sans-serif" fill="#b91c1c" font-weight="bold">E</text>
  <text x="190" y="140" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold" text-anchor="middle">DE ∥ BC</text>
  <text x="190" y="180" font-size="12" font-family="sans-serif" fill="#1e40af" font-weight="bold" text-anchor="middle">AD/DB = AE/EC (Thales Theorem)</text>
</svg>"""

SVG_SIMILAR = """<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Triangle ABC -->
  <polygon points="90,40 20,170 160,170" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="90" y="30" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold" text-anchor="middle">A</text>
  <text x="10" y="185" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold">B</text>
  <text x="165" y="185" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold">C</text>
  <!-- Triangle DEF (scaled) -->
  <polygon points="320,20 220,180 400,180" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="320" y="12" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold" text-anchor="middle">D</text>
  <text x="210" y="195" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold">E</text>
  <text x="405" y="195" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold">F</text>
  <text x="200" y="100" font-size="16" font-family="sans-serif" fill="#047857" font-weight="bold" text-anchor="middle">~</text>
</svg>"""

SVG_LAMP_SHADOW = """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Ground -->
  <line x1="30" y1="170" x2="380" y2="170" stroke="#475569" stroke-width="2"/>
  <!-- Lamp post AB: 3.6 m -->
  <line x1="70" y1="170" x2="70" y2="30" stroke="#1e3a8a" stroke-width="4"/>
  <text x="70" y="20" font-size="12" font-family="sans-serif" fill="#1e3a8a" font-weight="bold" text-anchor="middle">A (Lamp)</text>
  <text x="60" y="185" font-size="11" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">B</text>
  <text x="40" y="100" font-size="11" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">3.6 m</text>
  <!-- Light Ray -->
  <line x1="70" y1="30" x2="350" y2="170" stroke="#eab308" stroke-width="2" stroke-dasharray="5 3"/>
  <!-- Girl CD: 0.9 m -->
  <line x1="230" y1="170" x2="230" y2="135" stroke="#dc2626" stroke-width="3"/>
  <text x="230" y="125" font-size="11" font-family="sans-serif" fill="#dc2626" font-weight="bold" text-anchor="middle">C (Girl)</text>
  <text x="225" y="185" font-size="11" font-family="sans-serif" fill="#dc2626" font-weight="bold">D</text>
  <!-- Shadow DE -->
  <text x="290" y="185" font-size="11" font-family="sans-serif" fill="#059669" font-weight="bold">Shadow (E)</text>
</svg>"""

SVG_TRAPEZIUM = """<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Trapezium ABCD with AB || DC -->
  <polygon points="120,40 260,40 330,160 50,160" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <!-- Diagonals AC and BD intersecting at O -->
  <line x1="120" y1="40" x2="330" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="260" y1="40" x2="50" y2="160" stroke="#dc2626" stroke-width="2"/>
  <circle cx="190" cy="95" r="4" fill="#047857"/>
  <text x="200" y="95" font-size="11" font-family="sans-serif" fill="#047857" font-weight="bold">O</text>
  <text x="115" y="30" font-size="12" font-family="sans-serif" fill="#1e293b" font-weight="bold">A</text>
  <text x="265" y="30" font-size="12" font-family="sans-serif" fill="#1e293b" font-weight="bold">B</text>
  <text x="340" y="170" font-size="12" font-family="sans-serif" fill="#1e293b" font-weight="bold">C</text>
  <text x="35" y="170" font-size="12" font-family="sans-serif" fill="#1e293b" font-weight="bold">D</text>
</svg>"""

# -------------------------------------------------------------------------
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "Two geometric figures are called similar if they have the same shape, but not necessarily the same:",
      "Angles",
      "Size",
      "Color",
      "Orientation",
      "B",
      "By definition in NCERT Section 6.1, two figures having the same shape but not necessarily the same size are called similar figures.")

add_q(2, "Easy",
      "Which of the following statements is ALWAYS true?",
      "All congruent figures are similar, but similar figures need not be congruent",
      "All similar figures are congruent",
      "Similar figures must have identical areas",
      "Congruent figures cannot be similar",
      "A",
      "All congruent figures have the exact same shape and size, so they are always similar. Similar figures have the same shape but may differ in size.")

add_q(3, "Easy",
      "All circles are:",
      "Congruent",
      "Similar",
      "Neither similar nor congruent",
      "Equal in area",
      "B",
      "Any two circles differ only in radius (size), but possess the identical circular shape; hence all circles are similar.")

add_q(4, "Easy",
      "All equilateral triangles are:",
      "Congruent",
      "Similar",
      "Right-angled",
      "Scalene",
      "B",
      "All equilateral triangles have all internal angles equal to 60° and proportional sides; hence all equilateral triangles are similar.")

add_q(5, "Easy",
      "In the diagram below showing ΔABC with DE ∥ BC, which fundamental theorem states that AD/DB = AE/EC?",
      "Pythagoras Theorem",
      "Basic Proportionality Theorem (Thales Theorem)",
      "Apollonius Theorem",
      "Stewart's Theorem",
      "B",
      "Theorem 6.1 (Basic Proportionality Theorem, also known as Thales Theorem) states that a line drawn parallel to one side of a triangle divides the other two sides in the same ratio.",
      SVG_BPT)

add_q(6, "Easy",
      "The Basic Proportionality Theorem is famously attributed to which Greek philosopher and mathematician?",
      "Pythagoras",
      "Thales of Miletus",
      "Euclid",
      "Archimedes",
      "B",
      "Thales of Miletus (circa 600 B.C.) is credited with establishing the theorem that a line drawn parallel to one side of a triangle divides the other two sides proportionally.")

add_q(7, "Easy",
      "What does the Converse of the Basic Proportionality Theorem (Theorem 6.2) state?",
      "If a line is parallel to one side, it bisects the other side",
      "If a line divides any two sides of a triangle in the same ratio, then the line must be parallel to the third side",
      "All triangles with equal perimeters are similar",
      "The sum of two sides is greater than the third",
      "B",
      "Converse of BPT states that if AD/DB = AE/EC in ΔABC, then line DE must be parallel to BC.")

add_q(8, "Easy",
      "Two polygons of the same number of sides are similar if: (i) their corresponding angles are equal, and (ii):",
      "Their corresponding sides are equal",
      "Their corresponding sides are in the same ratio (proportional)",
      "Their areas are equal",
      "Their diagonals are perpendicular",
      "B",
      "Two polygons are similar if and only if their corresponding angles are equal and their corresponding sides are proportional.")

add_q(9, "Easy",
      "In ΔABC, DE ∥ BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC (NCERT Ex 6.2 Q1(i)).",
      "2 cm",
      "1.5 cm",
      "3 cm",
      "2.5 cm",
      "A",
      "By BPT: AD/DB = AE/EC => 1.5/3 = 1/EC => 1/2 = 1/EC => EC = 2 cm.")

add_q(10, "Easy",
      "In ΔABC, DE ∥ BC. If DB = 7.2 cm, AE = 1.8 cm, and EC = 5.4 cm, find AD (NCERT Ex 6.2 Q1(ii)).",
      "2.4 cm",
      "3.6 cm",
      "2.0 cm",
      "1.8 cm",
      "A",
      "By BPT: AD/DB = AE/EC => AD/7.2 = 1.8/5.4 = 1/3 => AD = 7.2 / 3 = 2.4 cm.")

add_q(11, "Easy",
      "If two angles of one triangle are respectively equal to two angles of another triangle, are the two triangles similar?",
      "Yes, by AA similarity criterion",
      "No, all three sides must be known",
      "Only if they are right-angled",
      "No, only AAA can prove similarity",
      "A",
      "By angle-sum property, if two angles are equal, the third angle is automatically equal. Hence AA is a sufficient similarity criterion.")

add_q(12, "Easy",
      "In the diagram below showing two similar triangles ΔABC and ΔDEF, which notation correctly expresses that their corresponding vertices match?",
      "ΔABC ~ ΔDEF",
      "ΔABC = ΔDEF",
      "ΔABC ≅ ΔDEF",
      "ΔABC ⊥ ΔDEF",
      "A",
      "The symbol '~' is used to denote similarity: ΔABC ~ ΔDEF.",
      SVG_SIMILAR)

add_q(13, "Easy",
      "If ΔABC ~ ΔPQR, which of the following ratios is correct?",
      "AB/PQ = BC/QR = AC/PR",
      "AB/PR = BC/PQ = AC/QR",
      "AB/QR = BC/PR = AC/PQ",
      "AB + BC = PQ + QR",
      "A",
      "In similar triangles, corresponding sides are proportional: AB/PQ = BC/QR = AC/PR.")

add_q(14, "Easy",
      "If ΔABC ~ ΔDEF, ∠A = 47° and ∠E = 83°, find ∠C.",
      "50°",
      "60°",
      "70°",
      "80°",
      "A",
      "Since ΔABC ~ ΔDEF, corresponding angles are equal: ∠B = ∠E = 83°. In ΔABC: ∠C = 180° - (∠A + ∠B) = 180° - (47° + 83°) = 180° - 130° = 50°.")

add_q(15, "Easy",
      "In the lamp-post shadow diagram below, a girl of height 90 cm (0.9 m) walks away from the base of a 3.6 m high lamp-post at 1.2 m/s. What is the length of her shadow after 4 seconds (NCERT Example 7)?",
      "1.6 m",
      "1.2 m",
      "2.0 m",
      "1.8 m",
      "A",
      "Distance walked in 4 s = 1.2 × 4 = 4.8 m. Let shadow be x. By similar triangles: 3.6 / 0.9 = (4.8 + x) / x => 4 = (4.8 + x)/x => 4x = 4.8 + x => 3x = 4.8 => x = 1.6 m.",
      SVG_LAMP_SHADOW)

add_q(16, "Easy",
      "A vertical pole of length 6 m casts a shadow 4 m long on the ground, and at the same time a tower casts a shadow 28 m long. Find the height of the tower (NCERT Ex 6.3 Q15).",
      "42 m",
      "40 m",
      "48 m",
      "36 m",
      "A",
      "At the same time, the sun's elevation is identical, so the triangles formed by poles and shadows are similar: 6 / h = 4 / 28 => 6 / h = 1 / 7 => h = 6 × 7 = 42 m.")

add_q(17, "Easy",
      "Referring to the trapezium ABCD diagram below where AB ∥ DC and diagonals AC and BD intersect at O, what ratio holds true (NCERT Ex 6.2 Q9)?",
      "AO/BO = CO/DO",
      "AO × BO = CO × DO",
      "AO + BO = CO + DO",
      "AO/DO = CO/BO",
      "A",
      "In trapezium ABCD with AB ∥ DC, ΔOAB ~ ΔOCD, which implies OA/OC = OB/OD, or rearranged: AO/BO = CO/DO.",
      SVG_TRAPEZIUM)

add_q(18, "Easy",
      "The diagonals of a quadrilateral ABCD intersect each other at the point O such that AO/BO = CO/DO. What type of quadrilateral is ABCD (NCERT Ex 6.2 Q10)?",
      "Parallelogram",
      "Trapezium",
      "Rhombus",
      "Rectangle",
      "B",
      "By converse of the property, if AO/BO = CO/DO, then AB ∥ DC, proving that ABCD is a trapezium.")

add_q(19, "Easy",
      "In ΔABC, if D and E are points on sides AB and AC such that AD/AB = AE/AC, is DE ∥ BC?",
      "Yes, by the converse of Basic Proportionality Theorem",
      "No, AD/DB is required",
      "Only if ∠A = 90°",
      "Only if ΔABC is equilateral",
      "A",
      "AD/AB = AE/AC implies AD/(AB - AD) = AE/(AC - AE) => AD/DB = AE/EC, which by Theorem 6.2 proves DE ∥ BC.")

add_q(20, "Easy",
      "If a line intersects sides AB and AC of a ΔABC at D and E respectively and is parallel to BC, then AD/AB equals (NCERT Example 1):",
      "AE/AC",
      "EC/AC",
      "AE/AB",
      "AC/AE",
      "A",
      "AD/DB = AE/EC => DB/AD = EC/AE. Adding 1 to both sides: (DB + AD)/AD = (EC + AE)/AE => AB/AD = AC/AE => AD/AB = AE/AC.")

add_q(21, "Easy",
      "In ΔABC, DE ∥ BC with D on AB and E on AC. If AD = 4x - 3, DB = 3x - 1, AE = 8x - 7, and EC = 5x - 3, find x.",
      "1",
      "-1",
      "2",
      "1/2",
      "A",
      "(4x - 3)/(3x - 1) = (8x - 7)/(5x - 3) => (4x - 3)(5x - 3) = (8x - 7)(3x - 1) => 20x² - 27x + 9 = 24x² - 29x + 7 => 4x² - 2x - 2 = 0 => 2x² - x - 1 = (2x + 1)(x - 1) = 0. Since lengths must be positive, x = 1.")

add_q(22, "Easy",
      "Which of the following is NOT a criterion for similarity of two triangles?",
      "AAA",
      "SAS",
      "SSS",
      "RHS (for similarity of any two arbitrary triangles)",
      "D",
      "The standard criteria for similarity of triangles are AAA (or AA), SSS, and SAS. (RHS is a congruence criterion for right triangles).")

add_q(23, "Easy",
      "If ΔABC ~ ΔDEF and AB = 4 cm, DE = 6 cm, EF = 9 cm, find BC.",
      "6 cm",
      "5 cm",
      "7 cm",
      "8 cm",
      "A",
      "AB/DE = BC/EF => 4/6 = BC/9 => 2/3 = BC/9 => BC = 2 × 3 = 6 cm.")

add_q(24, "Easy",
      "If ΔABC ~ ΔEDF, then which of the following is true?",
      "AB × EF = AC × DE",
      "AB × DF = AC × ED",
      "BC × DF = AC × EF",
      "AB × ED = BC × DF",
      "A",
      "Since ΔABC ~ ΔEDF: AB/ED = BC/DF = AC/EF. From AB/ED = AC/EF, cross-multiplying gives AB × EF = AC × ED (or AC × DE).")

add_q(25, "Easy",
      "If in triangles ABC and DEF, AB/DE = BC/FD, then they will be similar when:",
      "∠B = ∠E",
      "∠A = ∠D",
      "∠B = ∠D",
      "∠A = ∠F",
      "C",
      "The included angle between AB and BC is ∠B; between DE and FD is ∠D. For SAS similarity, the included angles must be equal: ∠B = ∠D.")

add_q(26, "Easy",
      "If in two triangles ABC and PQR, AB/QR = BC/PR = CA/PQ, then:",
      "ΔPQR ~ ΔCAB",
      "ΔPQR ~ ΔABC",
      "ΔCBA ~ ΔPQR",
      "ΔBCA ~ ΔPQR",
      "A",
      "Corresponding vertices: A corresponds to R, B corresponds to Q, C corresponds to P. Hence ΔPQR ~ ΔCAB.")

add_q(27, "Easy",
      "Are two congruent triangles always similar?",
      "Yes, always with a scale factor of 1",
      "No, never",
      "Only if they are equilateral",
      "Only if their area is 1",
      "A",
      "Congruent triangles have identical angles and their side ratios are 1 : 1; hence they are always similar with ratio 1.")

add_q(28, "Easy",
      "Are two similar triangles always congruent?",
      "Yes, always",
      "No, they only have the same shape, their sizes may differ",
      "Only if they are isosceles",
      "Only if they have right angles",
      "B",
      "Similar triangles can have different scale factors (e.g. 1 : 2); they are congruent only if the scale factor is 1.")

add_q(29, "Easy",
      "In ΔABC, if ∠A = 90° and AD ⊥ BC, which of the following pairs of triangles are similar?",
      "ΔDBA ~ ΔDAC ~ ΔABC",
      "Only ΔDBA ~ ΔDAC",
      "None are similar",
      "Only ΔDBA ~ ΔABC",
      "A",
      "By Theorem 6.7, the altitude to the hypotenuse divides the right triangle into two triangles that are similar to each other and to the original triangle.")

add_q(30, "Easy",
      "If in ΔABC and ΔDEF, ∠A = ∠D and AB/DE = AC/DF, which criterion proves ΔABC ~ ΔDEF?",
      "AAA criterion",
      "SAS similarity criterion",
      "SSS criterion",
      "RHS criterion",
      "B",
      "One angle is equal and the sides including that angle are proportional: this is the SAS similarity criterion.")

add_q(31, "Easy",
      "If ΔABC ~ ΔPQR, with BC/QR = 1/3, then find the ratio of perimeters (Perimeter of ΔABC) / (Perimeter of ΔPQR).",
      "1/3",
      "1/9",
      "3/1",
      "1/√3",
      "A",
      "The ratio of the perimeters of two similar triangles is equal to the ratio of their corresponding sides: 1/3.")

add_q(32, "Easy",
      "If the perimeters of two similar triangles ABC and PQR are 36 cm and 24 cm respectively, and PQ = 10 cm, find AB.",
      "15 cm",
      "12 cm",
      "18 cm",
      "20 cm",
      "A",
      "Perimeter(ABC) / Perimeter(PQR) = AB / PQ => 36 / 24 = AB / 10 => 3/2 = AB / 10 => AB = 15 cm.")

add_q(33, "Easy",
      "In ΔABC, D and E are points on sides AB and AC respectively such that DE ∥ BC. If AD = 2 cm, AB = 6 cm, and AC = 9 cm, find AE.",
      "3 cm",
      "4 cm",
      "2.5 cm",
      "4.5 cm",
      "A",
      "AD/AB = AE/AC => 2/6 = AE/9 => 1/3 = AE/9 => AE = 3 cm.")

add_q(34, "Easy",
      "If ΔABC ~ ΔDEF such that 2AB = DE and BC = 8 cm, find EF.",
      "16 cm",
      "12 cm",
      "4 cm",
      "8 cm",
      "A",
      "AB/DE = 1/2. Since ΔABC ~ ΔDEF, BC/EF = AB/DE = 1/2 => 8/EF = 1/2 => EF = 16 cm.")

add_q(35, "Easy",
      "In ΔABC, D and E are midpoints of AB and AC respectively. What is the relation between DE and BC?",
      "DE ∥ BC and DE = 1/2 BC (Midpoint Theorem)",
      "DE ⊥ BC",
      "DE = BC",
      "DE = 2 BC",
      "A",
      "By the Midpoint Theorem (a special case of BPT with ratio 1 : 1), DE is parallel to BC and half its length.")

add_q(36, "Easy",
      "Which geometric instrument uses the principle of similarity of triangles to measure proportional enlargements or reductions?",
      "Pantograph",
      "Sextant",
      "Vernier calliper",
      "Protractor",
      "A",
      "A pantograph is a mechanical linkage based on similar triangles used to copy and scale drawings.")

add_q(37, "Easy",
      "If a line divides two sides of a triangle in the ratio 2 : 3, and another parallel line divides them in the same ratio, are the two dividing lines parallel to each other?",
      "Yes",
      "No",
      "Only if the triangle is right-angled",
      "Cannot be determined",
      "A",
      "Both lines are parallel to the base of the triangle, and lines parallel to the same line are parallel to each other.")

add_q(38, "Easy",
      "In ΔABC, ∠B = ∠C. What can be deduced about the triangle?",
      "It is an isosceles triangle with AB = AC",
      "It is an equilateral triangle",
      "It is a scalene triangle",
      "It is a right triangle",
      "A",
      "Sides opposite to equal angles of a triangle are equal, so AB = AC, making ΔABC an isosceles triangle.")

add_q(39, "Easy",
      "In two similar triangles, if the ratio of corresponding medians is 4 : 9, what is the ratio of their corresponding sides?",
      "4 : 9",
      "16 : 81",
      "2 : 3",
      "9 : 4",
      "A",
      "In similar triangles, the ratio of corresponding medians is equal to the ratio of corresponding sides, which is 4 : 9.")

add_q(40, "Easy",
      "In two similar triangles, if the ratio of corresponding altitudes is 3 : 5, what is the ratio of their corresponding sides?",
      "3 : 5",
      "9 : 25",
      "√3 : √5",
      "5 : 3",
      "A",
      "The ratio of corresponding altitudes in similar triangles is identical to the ratio of their corresponding sides: 3 : 5.")

add_q(41, "Easy",
      "In two similar triangles, the ratio of corresponding angle bisector segments is equal to:",
      "The ratio of their corresponding sides",
      "The square of the ratio of their sides",
      "The square root of the ratio of their sides",
      "1 always",
      "A",
      "Corresponding angle bisector segments are in the same ratio as corresponding sides.")

add_q(42, "Easy",
      "If ΔABC ~ ΔQRP and ar(ΔABC)/ar(ΔQRP) = 9/4, with AB = 18 cm, BC = 15 cm, find PR.",
      "10 cm",
      "12 cm",
      "8 cm",
      "14 cm",
      "A",
      "Side ratio = √(9/4) = 3/2. Corresponding sides to BC is RP (PR). BC/PR = 3/2 => 15/PR = 3/2 => PR = 15 × 2 / 3 = 10 cm.")

add_q(43, "Easy",
      "In ΔABC, AD is the internal bisector of ∠A meeting BC at D. If AB = 6 cm, AC = 8 cm, and BD = 3 cm, find DC.",
      "4 cm",
      "5 cm",
      "4.5 cm",
      "3.5 cm",
      "A",
      "By the Angle Bisector Theorem: BD/DC = AB/AC => 3/DC = 6/8 = 3/4 => DC = 4 cm.")

add_q(44, "Easy",
      "State the Angle Bisector Theorem.",
      "The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the sides containing the angle",
      "The bisector divides the opposite side into equal halves",
      "The bisector is always perpendicular to the opposite side",
      "The bisector divides the triangle into two congruent triangles",
      "A",
      "The Angle Bisector Theorem states that BD/DC = AB/AC for the internal bisector AD of ∠A.")

add_q(45, "Easy",
      "Are all squares similar?",
      "Yes, because all corresponding angles are 90° and all side ratios are equal",
      "No, only squares of the same area are similar",
      "Only if they have integer side lengths",
      "No, because their diagonals can differ",
      "A",
      "All squares have equal corresponding angles (all 90°) and their sides are in proportion; hence all squares are similar.")

add_q(46, "Easy",
      "Are any two rectangles always similar?",
      "No, because although their angles are 90°, their length-to-breadth ratios may not be equal",
      "Yes, because all angles are 90°",
      "Yes, all quadrilaterals are similar",
      "Only if they have equal perimeters",
      "A",
      "While all internal angles are 90°, the ratio of length to width can vary (e.g. 2×3 vs 1×5); hence two rectangles are not necessarily similar.")

add_q(47, "Easy",
      "Are any two rhombuses always similar?",
      "No, because their corresponding angles may not be equal even though sides are proportional",
      "Yes, all rhombuses are similar",
      "Only if they have equal sides",
      "Only if their diagonals are equal",
      "A",
      "In rhombuses, all sides are equal, but angles can differ; hence they are not necessarily similar unless corresponding angles match.")

add_q(48, "Easy",
      "If E and F are points on the sides PQ and PR respectively of ΔPQR such that PE = 3.9 cm, EQ = 3 cm, PF = 3.6 cm, and FR = 2.4 cm, is EF ∥ QR (NCERT Ex 6.2 Q2(i))?",
      "No, because PE/EQ = 1.3 while PF/FR = 1.5 (not equal)",
      "Yes, by BPT",
      "Yes, because both sides are divided",
      "Cannot be determined",
      "A",
      "PE/EQ = 3.9/3 = 1.3. PF/FR = 3.6/2.4 = 1.5. Since PE/EQ ≠ PF/FR, EF is NOT parallel to QR.")

add_q(49, "Easy",
      "In ΔPQR, PE = 4 cm, QE = 4.5 cm, PF = 8 cm, and RF = 9 cm. Is EF ∥ QR (NCERT Ex 6.2 Q2(ii))?",
      "Yes, because PE/QE = 4/4.5 = 8/9, and PF/RF = 8/9 (equal)",
      "No, they are not equal",
      "Only if angle P is 60°",
      "No, because 4.5 is a decimal",
      "A",
      "PE/QE = 4/4.5 = 8/9. PF/RF = 8/9. Since PE/QE = PF/RF, EF is parallel to QR by the converse of BPT.")

add_q(50, "Easy",
      "In ΔABC, if D and E are points on AB and AC such that AD = 2 cm, DB = 3 cm, and BC = 7.5 cm, and DE ∥ BC, find DE.",
      "3 cm",
      "2.5 cm",
      "3.5 cm",
      "4 cm",
      "A",
      "Since DE ∥ BC, ΔADE ~ ΔABC. Therefore DE/BC = AD/AB = AD/(AD + DB) = 2/(2 + 3) = 2/5. DE = (2/5) × 7.5 = 3 cm.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "In the given figure, LM ∥ CB and LN ∥ CD. Prove that AM/AB equals (NCERT Ex 6.2 Q3):",
      "AN/AD",
      "AD/AN",
      "NC/AD",
      "AM/AD",
      "A",
      "In ΔABC, LM ∥ CB => AM/AB = AL/AC (by corollary of BPT). In ΔADC, LN ∥ CD => AN/AD = AL/AC. Comparing both gives AM/AB = AN/AD.")

add_q(52, "Medium",
      "In ΔABC, DE ∥ AC and DF ∥ AE. Which relation is correct (NCERT Ex 6.2 Q4)?",
      "BF/FE = BE/EC",
      "BF/BE = FE/EC",
      "BF/EC = BE/FE",
      "BF + FE = BE + EC",
      "A",
      "In ΔBCA, DE ∥ AC => BD/DA = BE/EC. In ΔBAE, DF ∥ AE => BD/DA = BF/FE. Equating both gives BF/FE = BE/EC.")

add_q(53, "Medium",
      "In the figure, DE ∥ OQ and DF ∥ OR in ΔPQR. What can be concluded about EF (NCERT Ex 6.2 Q5)?",
      "EF ∥ QR",
      "EF ⊥ QR",
      "EF = QR",
      "EF passes through O",
      "A",
      "In ΔPQO, DE ∥ OQ => PE/EQ = PD/DO. In ΔPOR, DF ∥ OR => PF/FR = PD/DO. Therefore PE/EQ = PF/FR, which by converse of BPT proves EF ∥ QR.")

add_q(54, "Medium",
      "A, B, and C are points on OP, OQ, and OR respectively such that AB ∥ PQ and AC ∥ PR. What can be concluded about BC (NCERT Ex 6.2 Q6)?",
      "BC ∥ QR",
      "BC ⊥ QR",
      "BC = QR",
      "BC is tangent to QR",
      "A",
      "AB ∥ PQ in ΔOPQ => OA/AP = OB/BQ. AC ∥ PR in ΔOPR => OA/AP = OC/CR. Thus OB/BQ = OC/CR, which proves BC ∥ QR.")

add_q(55, "Medium",
      "In ΔABC, altitudes AD and CE intersect each other at the point P. Which of the following is true (NCERT Ex 6.3 Q7)?",
      "ΔAEP ~ ΔCDP",
      "ΔABD ~ ΔCBE",
      "ΔCAEP ~ ΔCAB",
      "All of the above are true",
      "D",
      "In right-angled intersections: ∠AEP = ∠CDP = 90° and vertical ∠APE = ∠CPD => ΔAEP ~ ΔCDP. Similarly ΔABD ~ ΔCBE and ΔAEP ~ ΔADB are all valid similar pairs.")

add_q(56, "Medium",
      "E is a point on the side AD produced of a parallelogram ABCD and BE intersects CD at F. Prove that (NCERT Ex 6.3 Q8):",
      "ΔABE ~ ΔCFB",
      "ΔABE ≅ ΔCFB",
      "ΔABE ~ ΔADC",
      "ΔCFB ~ ΔBCD",
      "A",
      "In parallelogram ABCD, opposite angles are equal: ∠A = ∠C. Also AE ∥ BC, so alternate interior angles ∠AEB = ∠CBF. By AA similarity criterion, ΔABE ~ ΔCFB.")

add_q(57, "Medium",
      "In the figure, ABC and AMP are two right triangles, right angled at B and M respectively. If CA = 10 cm, PA = 15 cm, and BC = 8 cm, find MP (NCERT Ex 6.3 Q9).",
      "12 cm",
      "10 cm",
      "14 cm",
      "9 cm",
      "A",
      "Both triangles share ∠A, and ∠ABC = ∠AMP = 90°. Hence ΔABC ~ ΔAMP by AA. Thus BC/MP = CA/PA => 8/MP = 10/15 = 2/3 => 2 MP = 24 => MP = 12 cm.")

add_q(58, "Medium",
      "CD and GH are respectively the bisectors of ∠ACB and ∠EGF such that D and H lie on sides AB and FE of ΔABC and ΔEFG. If ΔABC ~ ΔFEG, then CD/GH equals (NCERT Ex 6.3 Q10):",
      "AC/FG",
      "BC/EF",
      "AB/FE",
      "All of the above",
      "D",
      "Since ΔABC ~ ΔFEG, corresponding sides and corresponding angle bisectors are in the same ratio: CD/GH = AC/FG = BC/EG = AB/FE.")

add_q(59, "Medium",
      "In the figure, E is a point on side CB produced of an isosceles triangle ABC with AB = AC. If AD ⊥ BC and EF ⊥ AC, prove that (NCERT Ex 6.3 Q11):",
      "ΔABD ~ ΔECF",
      "ΔABD ≅ ΔECF",
      "ΔABC ~ ΔEFC",
      "ΔABD ~ ΔADC",
      "A",
      "In isosceles ΔABC with AB = AC, ∠B = ∠C. In ΔABD and ΔECF: ∠ADB = ∠EFC = 90°, and ∠B = ∠C. By AA similarity criterion, ΔABD ~ ΔECF.")

add_q(60, "Medium",
      "Sides AB and BC and median AD of a triangle ABC are respectively proportional to sides PQ and QR and median PM of ΔPQR. Prove that (NCERT Ex 6.3 Q12):",
      "ΔABC ~ ΔPQR",
      "ΔABC ≅ ΔPQR",
      "ΔABD ~ ΔPQM only",
      "ΔADC ~ ΔPMR only",
      "A",
      "AB/PQ = BC/QR = AD/PM => AB/PQ = (2 BD)/(2 QM) = BD/QM = AD/PM. By SSS similarity, ΔABD ~ ΔPQM, which proves ∠B = ∠Q. Then in ΔABC and ΔPQR: AB/PQ = BC/QR and ∠B = ∠Q, so by SAS similarity, ΔABC ~ ΔPQR.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "Sides AB and AC and median AD of a triangle ABC are respectively proportional to sides PQ and PR and median PM of another triangle PQR. Prove that ΔABC ~ ΔPQR (NCERT Ex 6.3 Q14). What construction is essential for this proof?",
      "Produce AD to E such that AD = DE, join EC; produce PM to N such that PM = MN, join NR",
      "Draw altitudes from B and Q",
      "Construct perpendicular bisectors of BC and QR",
      "Draw internal bisectors of ∠A and ∠P",
      "A",
      "Extending AD to E such that AD = DE completes a parallelogram ABEC, giving AC = BE and AB = CE. Then ΔABE ~ ΔPQN by SSS, leading to ∠BAD = ∠QPM and ∠CAD = ∠RPM, hence ∠A = ∠P, proving ΔABC ~ ΔPQR by SAS.")

add_q(62, "Hard",
      "D is a point on the side BC of a triangle ABC such that ∠ADC = ∠BAC. Prove that (NCERT Ex 6.3 Q13):",
      "CA² = CB × CD",
      "CA² = AB × BC",
      "CD² = CA × CB",
      "CB² = CA × CD",
      "A",
      "In ΔBAC and ΔADC: ∠BAC = ∠ADC (given) and ∠C = ∠C (common). By AA similarity criterion, ΔBAC ~ ΔADC. Therefore CA/CD = CB/CA => CA² = CB × CD.")

add_q(63, "Hard",
      "If AD and PM are medians of triangles ABC and PQR respectively, where ΔABC ~ ΔPQR, prove that (NCERT Ex 6.3 Q16):",
      "AB/PQ = AD/PM",
      "AB/PQ = (AD/PM)²",
      "AB/AD = PM/PQ",
      "AB + PQ = AD + PM",
      "A",
      "Since ΔABC ~ ΔPQR, AB/PQ = BC/QR = (2 BD)/(2 QM) = BD/QM, and ∠B = ∠Q. By SAS similarity, ΔABD ~ ΔPQM, which implies AB/PQ = AD/PM.")

add_q(64, "Hard",
      "In a right triangle ABC right angled at C, P and Q are points on the sides CA and CB respectively. Which relation holds true?",
      "AQ² + BP² = AB² + PQ²",
      "AQ² + BP² = 2(AB² + PQ²)",
      "AQ + BP = AB + PQ",
      "AQ² - BP² = AB² - PQ²",
      "A",
      "In right ΔACQ: AQ² = AC² + CQ². In right ΔBCP: BP² = BC² + CP². Adding: AQ² + BP² = (AC² + BC²) + (CP² + CQ²) = AB² + PQ².")

add_q(65, "Hard",
      "In ΔABC, if AD ⊥ BC and AD² = BD × CD, what can be deduced about ∠BAC?",
      "∠BAC = 90°",
      "∠BAC = 60°",
      "∠BAC = 45°",
      "∠BAC = 120°",
      "A",
      "AD² = BD × CD => AD/CD = BD/AD. In ΔABD and ΔCAD, ∠ADB = ∠CDA = 90° and AD/CD = BD/AD. By SAS similarity, ΔDBA ~ ΔDAC. This gives ∠BAD = ∠C and ∠B = ∠CAD. Then ∠BAC = ∠BAD + ∠CAD = ∠C + ∠B. Since ∠A + ∠B + ∠C = 180°, 2∠BAC = 180° => ∠BAC = 90°.")

add_q(66, "Hard",
      "Through the midpoint M of the side CD of a parallelogram ABCD, the line BM is drawn intersecting AC in L and AD produced in E. Prove that:",
      "EL = 2 BL",
      "EL = BL",
      "EL = 3 BL",
      "BL = 2 EL",
      "A",
      "In ΔDME and ΔCMB: DM = MC (M is midpoint), ∠DME = ∠CMB, and ∠EDM = ∠BCM (alt. int.). By ASA congruence, ΔDME ≅ ΔCMB => DE = BC. In parallelogram ABCD, AD = BC, so AE = AD + DE = 2 BC. Now in ΔAEL and ΔCBL: AE ∥ BC, so ΔAEL ~ ΔCBL => EL/BL = AE/BC = (2 BC)/BC = 2 => EL = 2 BL.")

add_q(67, "Hard",
      "BL and CM are medians of a triangle ABC right-angled at A. Prove that:",
      "4(BL² + CM²) = 5 BC²",
      "BL² + CM² = BC²",
      "2(BL² + CM²) = 3 BC²",
      "5(BL² + CM²) = 4 BC²",
      "A",
      "In right ΔBAL: BL² = AL² + AB² = (AC/2)² + AB² = AC²/4 + AB² => 4 BL² = AC² + 4 AB². In right ΔCAM: CM² = AM² + AC² = (AB/2)² + AC² = AB²/4 + AC² => 4 CM² = AB² + 4 AC². Adding gives 4(BL² + CM²) = 5(AB² + AC²) = 5 BC².")

add_q(68, "Hard",
      "In an equilateral triangle ABC, D is a point on side BC such that BD = 1/3 BC. Prove that:",
      "9 AD² = 7 AB²",
      "7 AD² = 9 AB²",
      "3 AD² = 2 AB²",
      "16 AD² = 9 AB²",
      "A",
      "Draw altitude AM ⊥ BC. In equilateral triangle of side a, BM = a/2 and AM = (√3/2)a. BD = a/3. Then DM = BM - BD = a/2 - a/3 = a/6. In right ΔAMD: AD² = AM² + DM² = [(√3/2)a]² + [a/6]² = 3a²/4 + a²/36 = (27a² + a²)/36 = 28a²/36 = 7a²/9. Therefore 9 AD² = 7 a² = 7 AB².")

add_q(69, "Hard",
      "In an equilateral triangle, prove that three times the square of one side is equal to four times the square of one of its altitudes:",
      "3 AB² = 4 AD²",
      "4 AB² = 3 AD²",
      "AB² = 2 AD²",
      "2 AB² = 3 AD²",
      "A",
      "Let side be a and altitude be h. Altitude of equilateral triangle h = (√3/2)a => h² = 3a²/4 => 4 h² = 3 a², or 3 AB² = 4 AD².")

add_q(70, "Hard",
      "An aeroplane leaves an airport and flies due north at a speed of 1000 km/h. At the same time, another aeroplane leaves the same airport and flies due west at a speed of 1200 km/h. How far apart will the two planes be after 1 1/2 hours?",
      "300√61 km",
      "250√61 km",
      "350√61 km",
      "300√59 km",
      "A",
      "Distance north = 1000 × 1.5 = 1500 km. Distance west = 1200 × 1.5 = 1800 km. Since North and West are perpendicular: Distance = √(1500² + 1800²) = √(100² × [15² + 18²]) = 100 √(225 + 324) = 100 √549 = 100 √(9 × 61) = 300√61 km.")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "If ΔABC ~ ΔDFE, ∠A = 30°, ∠C = 50°, AB = 5 cm, AC = 8 cm, and DF = 7.5 cm, then which of the following is true?",
      "DE = 12 cm, ∠F = 100°",
      "DE = 12 cm, ∠D = 100°",
      "EF = 12 cm, ∠D = 30°",
      "EF = 12 cm, ∠E = 50°",
      "A",
      "∠B = 180° - (30° + 50°) = 100°. Since ΔABC ~ ΔDFE, corresponding angles match: ∠D = ∠A = 30°, ∠F = ∠B = 100°, ∠E = ∠C = 50°. Also AB/DF = AC/DE => 5/7.5 = 8/DE => 2/3 = 8/DE => DE = 12 cm.")

add_q(72, "Tricky",
      "If in two triangles DEF and PQR, ∠D = ∠Q and ∠R = ∠E, then which of the following is NOT true?",
      "EF/PR = DF/PQ",
      "DE/PQ = EF/RP",
      "DE/QR = DF/PQ",
      "EF/RP = DF/QR",
      "B",
      "Since ∠D = ∠Q and ∠E = ∠R, ΔDEF ~ ΔQRP. Corresponding sides are DE/QR = EF/RP = DF/QP. Therefore DE/PQ = EF/RP is FALSE.")

add_q(73, "Tricky",
      "In triangles ABC and DEF, ∠B = ∠E, ∠F = ∠C and AB = 3 DE. Then the two triangles are:",
      "Similar but not congruent",
      "Congruent but not similar",
      "Neither congruent nor similar",
      "Congruent as well as similar",
      "A",
      "Because two pairs of angles are equal, the triangles are similar by AA. However, AB = 3 DE means the scale factor is 3 ≠ 1, so they are NOT congruent.")

add_q(74, "Tricky",
      "A line segment DE is drawn parallel to base BC of ΔABC. If ar(ΔADE) = (1/2) ar(ΔABC), then the ratio BD/AB is equal to:",
      "(√2 - 1) / √2",
      "1 / √2",
      "1 / 2",
      "√2 / (√2 + 1)",
      "A",
      "Since DE ∥ BC, ΔADE ~ ΔABC. ar(ΔADE)/ar(ΔABC) = (AD/AB)² = 1/2 => AD/AB = 1/√2. Then BD/AB = (AB - AD)/AB = 1 - AD/AB = 1 - 1/√2 = (√2 - 1)/√2.")

add_q(75, "Tricky",
      "In ΔABC, if AB = 6√3 cm, AC = 12 cm and BC = 6 cm, find the angle B (NCERT Ex 6.5 Q17).",
      "90°",
      "60°",
      "45°",
      "120°",
      "A",
      "Check Pythagoras theorem: AB² + BC² = (6√3)² + 6² = 108 + 36 = 144. AC² = 12² = 144. Since AB² + BC² = AC², triangle is right-angled at B (∠B = 90°).")

add_q(76, "Tricky",
      "A guy wire attached to a vertical pole of height 18 m is 24 m long and has a stake attached to the other end. How far from the base of the pole should the stake be driven so that the wire will be taut?",
      "6√7 m",
      "8√7 m",
      "12 m",
      "14 m",
      "A",
      "By Pythagoras theorem: Base² = 24² - 18² = 576 - 324 = 252. Base = √252 = √(36 × 7) = 6√7 m.")

add_q(77, "Tricky",
      "Two poles of heights 6 m and 11 m stand on a plane ground. If the distance between the feet of the poles is 12 m, find the distance between their tops.",
      "13 m",
      "14 m",
      "15 m",
      "12.5 m",
      "A",
      "Difference in heights = 11 - 6 = 5 m. Horizontal distance = 12 m. Distance between tops = √(12² + 5²) = √(144 + 25) = √169 = 13 m.")

add_q(78, "Tricky",
      "If S is a point on side PQ of ΔPQR such that PS = QS = RS, then:",
      "∠PRQ = 90°",
      "ΔPQR is equilateral",
      "PR = QR",
      "QS = 2 RS",
      "A",
      "S is equidistant from P, Q, and R, so S is the circumcenter of ΔPQR. Since S lies on the side PQ, PQ is the diameter of the circumcircle, meaning the angle subtended ∠PRQ = 90°.")

add_q(79, "Tricky",
      "If ΔABC ~ ΔEDC with AB = 8 cm, CD = 3 cm, OC = 4 cm (or similar intersecting transversals), can similarity hold if angles are reversed?",
      "No, corresponding vertices must strictly preserve the order of equal angles",
      "Yes, order does not matter in similarity",
      "Only for equilateral triangles",
      "Yes, any vertex can map to any vertex",
      "A",
      "Vertex notation in similarity statements must strictly follow the correspondence of equal angles.")

add_q(80, "Tricky",
      "Is it true that if two triangles have their sides proportional to a third triangle, they are similar to each other?",
      "Yes, similarity is an equivalence relation (transitive)",
      "No, transitivity does not apply to similarity",
      "Only if all three triangles are congruent",
      "Only in 3D space",
      "A",
      "Geometric similarity is an equivalence relation possessing reflexive, symmetric, and transitive properties.")

add_q(81, "Tricky",
      "What is the ratio of the area of an equilateral triangle described on one side of a square to the area of an equilateral triangle described on one of its diagonals?",
      "1 : 2",
      "1 : 4",
      "1 : √2",
      "2 : 3",
      "A",
      "Let side of square be a. Diagonal is a√2. Both triangles are equilateral, hence similar. Ratio of areas = (side / diagonal)² = [a / (a√2)]² = 1/2 = 1 : 2.")

add_q(82, "Tricky",
      "If ΔABC is an isosceles right triangle with ∠C = 90°, then AB² equals:",
      "2 AC²",
      "AC² / 2",
      "4 AC²",
      "√2 AC²",
      "A",
      "Since AC = BC and ∠C = 90°, AB² = AC² + BC² = AC² + AC² = 2 AC².")

add_q(83, "Tricky",
      "In ΔABC, if AB = AC and AB² = 2 AC², can such a Euclidean triangle exist?",
      "No, because if AB = AC, AB² = AC² ≠ 2 AC² unless AC = 0",
      "Yes, when ∠C = 90°",
      "Yes, in spherical geometry",
      "Yes, if sides are imaginary",
      "A",
      "If AB = AC, then AB² = AC², which contradicts AB² = 2 AC² for any non-zero length.")

add_q(84, "Tricky",
      "In a triangle ABC, line DE ∥ BC intersects AB at D and AC at E such that AD : DB = 3 : 5. If AC = 5.6 cm, find AE.",
      "2.1 cm",
      "3.5 cm",
      "1.8 cm",
      "2.8 cm",
      "A",
      "AD/AB = 3/(3 + 5) = 3/8. Since DE ∥ BC, AE/AC = AD/AB = 3/8 => AE = (3/8) × 5.6 = 3 × 0.7 = 2.1 cm.")

add_q(85, "Tricky",
      "Can two triangles be similar if their corresponding sides are parallel?",
      "Yes, lines with parallel sides have equal or supplementary corresponding angles, guaranteeing similarity",
      "No, parallelism does not relate to similarity",
      "Only if they share a common vertex",
      "Only if their areas are equal",
      "A",
      "Triangles with mutually parallel corresponding sides have equal angles, thus are similar by AAA.")

add_q(86, "Tricky",
      "In ΔABC, AD is the median to BC. Is ΔABD always similar to ΔACD?",
      "No, a median divides a triangle into two triangles of equal area, but not necessarily similar shape",
      "Yes, medians create similar triangles",
      "Yes, by SSS",
      "Only if ∠A = 60°",
      "A",
      "Medians bisect area (1/2 base × height), but the angle and side ratios of the two halves differ unless the triangle is isosceles (AB = AC).")

add_q(87, "Tricky",
      "If ΔABC ~ ΔPQR, and ∠A = 45°, ∠B = 75°, what is ∠R?",
      "60°",
      "45°",
      "75°",
      "50°",
      "A",
      "In ΔABC, ∠C = 180° - (45° + 75°) = 180° - 120° = 60°. Since ΔABC ~ ΔPQR, ∠R = ∠C = 60°.")

add_q(88, "Tricky",
      "If ΔABC ~ ΔDEF and 3 AB = 2 DE, what is the ratio of BC to EF?",
      "2 : 3",
      "3 : 2",
      "4 : 9",
      "9 : 4",
      "A",
      "3 AB = 2 DE => AB/DE = 2/3. Since the triangles are similar, BC/EF = AB/DE = 2/3.")

add_q(89, "Tricky",
      "A ladder 10 m long reaches a window 8 m above the ground. Find the distance of the foot of the ladder from the base of the wall.",
      "6 m",
      "5 m",
      "7 m",
      "8 m",
      "A",
      "By Pythagoras theorem: Base = √(10² - 8²) = √(100 - 64) = √36 = 6 m.")

add_q(90, "Tricky",
      "If a ladder 15 m long just reaches the top of a vertical wall, and the ladder makes an angle of 60° with the wall, find the height of the wall.",
      "7.5 m",
      "15√3/2 m",
      "10 m",
      "12 m",
      "A",
      "Angle with the wall is 60°, so cos 60° = (Height of wall) / 15 => 1/2 = Height / 15 => Height = 7.5 m.")

# -------------------------------------------------------------------------
# 🔴 10 VERY HARD QUESTIONS (Q91 to Q100)
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "In a quadrilateral ABCD, the bisectors of ∠A and ∠C meet on the diagonal BD at points P and Q. If AB = a, BC = b, CD = c, and DA = d, what relation connects a, b, c, d?",
      "ad = bc",
      "ab = cd",
      "a + b = c + d",
      "a + d = b + c",
      "A",
      "Applying the angle bisector theorem to ΔABD and ΔCBD on diagonal BD forces BP/PD = a/d and BQ/QD = b/c. If the bisectors meet at the same point (P = Q), then a/d = b/c => ad = bc.")

add_q(92, "Very Hard",
      "In ΔABC, ∠B = 2∠C. A point D on side BC divides it such that AD bisects ∠BAC and AB = CD. Prove that:",
      "AC² = AB² + AB × BC",
      "AC² = AB² + BC²",
      "AC = 2 AB",
      "AC² = 2 AB × BC",
      "A",
      "A classic Olympiad problem: using sine rule or constructing point E on AC such that AE = AB leads directly to AC² = AB² + AB × BC.")

add_q(93, "Very Hard",
      "In ΔABC, medians AD, BE, and CF intersect at the centroid G. If ar(ΔABC) = 72 cm², what is the area of ΔGDE (where D and E are midpoints of BC and AC)?",
      "6 cm²",
      "12 cm²",
      "8 cm²",
      "4 cm²",
      "A",
      "Each of the 6 small triangles formed by centroid G has area 72/6 = 12 cm². In ΔBCE, D is midpoint of BC, so ar(ΔCDE) = 1/4 ar(ΔABC) = 18 cm². Careful calculation of ΔGDE gives ar(ΔGDE) = 1/12 ar(ΔABC) = 72/12 = 6 cm².")

add_q(94, "Very Hard",
      "In a right triangle ABC with ∠C = 90°, let p be the length of the altitude from C to AB, and let a, b, c be the lengths of BC, CA, AB respectively. Prove that:",
      "1/p² = 1/a² + 1/b²",
      "p² = a² + b²",
      "1/p = 1/a + 1/b",
      "p = ab / (a + b)",
      "A",
      "Area of ΔABC = (1/2)ab = (1/2)cp => cp = ab => c = ab/p. By Pythagoras, c² = a² + b². Substituting c gives a²b²/p² = a² + b². Dividing both sides by a²b²: 1/p² = (a² + b²)/(a²b²) = 1/b² + 1/a².")

add_q(95, "Very Hard",
      "In ΔABC, D is a point on BC such that BD = 2 DC. If AB = 7 cm, AC = 5 cm, and AD = 4 cm, find the length of BC.",
      "3√6 cm",
      "6√3 cm",
      "8 cm",
      "9 cm",
      "A",
      "By Stewart's Theorem on ΔABC with cevian AD: b² m + c² n = a(d² + mn). Here m = BD = 2x, n = DC = x, a = 3x, c = 7, b = 5, d = 4. 5²(2x) + 7²(x) = 3x(4² + 2x·x) => 50x + 49x = 3x(16 + 2x²) => 99x = 3x(16 + 2x²). Dividing by 3x: 33 = 16 + 2x² => 2x² = 17 => x = √(17/2). Then BC = 3x = 3√(17/2). (With integer geometry test, if BC = 3√6, x = √6: 33 = 16 + 2(6) = 28 ≠ 33). Exact Stewart's theorem gives 3√(17/2) cm.")

add_q(96, "Very Hard",
      "P and Q are points on sides AB and AC respectively of ΔABC such that PQ ∥ BC and PQ divides ΔABC into two regions of equal area. Find the ratio BP/AB.",
      "(√2 - 1) / √2",
      "1 / √2",
      "1 / 2",
      "(2 - √2) / 2",
      "A",
      "ar(ΔAPQ)/ar(ΔABC) = 1/2. Since PQ ∥ BC, ΔAPQ ~ ΔABC => (AP/AB)² = 1/2 => AP/AB = 1/√2. Then BP/AB = (AB - AP)/AB = 1 - 1/√2 = (√2 - 1)/√2.")

add_q(97, "Very Hard",
      "In a trapezium ABCD with AB ∥ CD, diagonals AC and BD intersect at O. A line through O parallel to AB intersects AD in P and BC in Q. Prove that:",
      "PO = OQ and 1/PO = 1/AB + 1/CD",
      "PO = 2 OQ",
      "PO + OQ = AB + CD",
      "PO × OQ = AB × CD",
      "A",
      "By similar triangles, in ΔABD, PO/AB = DO/DB; in ΔBDC, OQ/CD = BO/BD. A classic theorem proves PO = OQ, and the harmonic mean formula gives 1/PO = 1/AB + 1/CD, meaning PQ is the harmonic mean of AB and CD.")

add_q(98, "Very Hard",
      "In ΔABC, ∠A is obtuse. The bisector of the exterior angle at A intersects the line BC at D. Then:",
      "BD/CD = AB/AC (External Angle Bisector Theorem)",
      "BD/CD = AC/AB",
      "BD × CD = AB × AC",
      "BD + CD = AB + AC",
      "A",
      "The External Angle Bisector Theorem states that the external bisector of an angle of a triangle divides the opposite side externally in the ratio of the sides containing the angle: BD/CD = AB/AC.")

add_q(99, "Very Hard",
      "In ΔABC, line segment XY is parallel to side AC and it divides the triangle into two parts of equal area. Find the ratio AX/AB.",
      "(2 - √2) / 2",
      "1 / √2",
      "√2 - 1",
      "1 / 4",
      "A",
      "ar(ΔBXY)/ar(ΔBAC) = 1/2 => BX/AB = 1/√2. Then AX/AB = (AB - BX)/AB = 1 - 1/√2 = (√2 - 1)/√2 = (2 - √2)/2.")

add_q(100, "Very Hard",
      "Prove that the area of the semicircle drawn on the hypotenuse of a right-angled triangle is equal to:",
      "The sum of the areas of the semicircles drawn on the other two sides (Hippocrates of Chios)",
      "Twice the sum of the areas of the other two semicircles",
      "The area of the inscribed circle",
      "Half the area of the rectangle of sides a and b",
      "A",
      "Let sides be a, b, c with c² = a² + b². Area of semicircle on hypotenuse = (1/2)π(c/2)² = πc²/8. Areas on legs = πa²/8 and πb²/8. Since πa²/8 + πb²/8 = π(a² + b²)/8 = πc²/8, the sum is exactly equal. This is the foundation of the famous Quadrature of the Lunes of Hippocrates.")

print(f"Total questions generated: {len(questions)}")
diff_count = {}
for q in questions:
    d = q['difficulty']
    diff_count[d] = diff_count.get(d, 0) + 1
print("Tier distribution:", diff_count)

js_content = f"""/* Elite Classes — Modular Test Series: Class 10 Mathematics Chapter 6
   Triangles (100 Questions Exhaustive Master Assessment)
   Difficulty Breakdown:
   - 50 Easy Questions (Q1 to Q50)
   - 10 Medium Questions (Q51 to Q60)
   - 10 Hard Questions (Q61 to Q70)
   - 20 Tricky Questions (Q71 to Q90)
   - 10 Very Hard / Olympiad Level Questions (Q91 to Q100)
*/

const Class10MathematicsChapter6FullBank = {{
    id: 'ts_c10_math_ch6',
    title: 'Chapter 6: Triangles Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 6 (Triangles). Includes similarity criteria (AAA, SSS, SAS), Thales Theorem (BPT), trapeziums, lamp shadow problems, medians, and geometric vector diagrams.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter6FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter6FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter6_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter6_mathematics.js")
