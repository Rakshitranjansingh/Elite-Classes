# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 8: Introduction to Trigonometry
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
        "id": f"ts_c10_math_ch8_q{q_num}",
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

SVG_TRIG_TRIANGLE = """<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Right triangle ABC -->
  <polygon points="60,170 300,170 60,40" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
  <!-- Right angle box at A -->
  <rect x="60" y="152" width="18" height="18" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <!-- Angle theta arc at C -->
  <path d="M 260 170 A 40 40 0 0 0 270 152" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="250" y="160" font-size="12" font-family="sans-serif" fill="#b91c1c" font-weight="bold">θ</text>
  <!-- Vertices and labels -->
  <text x="45" y="185" font-size="12" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">A (90°)</text>
  <text x="45" y="35" font-size="12" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">B</text>
  <text x="310" y="180" font-size="12" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">C</text>
  <text x="180" y="190" font-size="11.5" font-family="sans-serif" fill="#047857" font-weight="bold" text-anchor="middle">Adjacent Side (Base)</text>
  <text x="25" y="105" font-size="11.5" font-family="sans-serif" fill="#b45309" font-weight="bold" text-anchor="middle" transform="rotate(-90 25 105)">Opposite Side</text>
  <text x="195" y="95" font-size="12" font-family="sans-serif" fill="#2563eb" font-weight="bold">Hypotenuse</text>
</svg>"""

SVG_UNIT_CIRCLE = """<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="180" x2="330" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="70" y1="200" x2="70" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="70,180 250,180 250,70" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <line x1="70" y1="180" x2="250" y2="70" stroke="#16a34a" stroke-width="2.5"/>
  <text x="160" y="200" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold" text-anchor="middle">cos θ</text>
  <text x="270" y="130" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold">sin θ</text>
  <text x="140" y="115" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold">r = 1</text>
  <text x="180" y="40" font-size="13" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">sin²θ + cos²θ = 1</text>
</svg>"""

# -------------------------------------------------------------------------
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "The word 'trigonometry' is derived from the Greek words 'tri', 'gon', and 'metron', which respectively mean:",
      "Three, sides, and measure",
      "Three, angles, and geometry",
      "Triangle, circle, and measure",
      "Three, points, and space",
      "A",
      "By definition in NCERT Section 8.1, 'tri' means three, 'gon' means sides, and 'metron' means measure.")

add_q(2, "Easy",
      "In a right-angled triangle ABC right-angled at B, the ratio of the side opposite to angle A to the hypotenuse is called the:",
      "Cosine of angle A",
      "Sine of angle A",
      "Tangent of angle A",
      "Cotangent of angle A",
      "B",
      "sin A = (side opposite to angle A) / hypotenuse = BC / AC.")

add_q(3, "Easy",
      "In the right triangle diagram below with angle θ at C, what is the trigonometric ratio tan θ defined as?",
      "(Opposite Side) / (Adjacent Side)",
      "(Adjacent Side) / (Opposite Side)",
      "(Opposite Side) / Hypotenuse",
      "Hypotenuse / (Adjacent Side)",
      "A",
      "tan θ = (side opposite to angle θ) / (side adjacent to angle θ).",
      SVG_TRIG_TRIANGLE)

add_q(4, "Easy",
      "Which trigonometric ratio is the reciprocal of sin A?",
      "cos A",
      "sec A",
      "cosec A",
      "cot A",
      "C",
      "cosec A = 1 / sin A = hypotenuse / (side opposite to angle A).")

add_q(5, "Easy",
      "Which trigonometric ratio is the reciprocal of cos A?",
      "sin A",
      "sec A",
      "tan A",
      "cosec A",
      "B",
      "sec A = 1 / cos A = hypotenuse / (side adjacent to angle A).")

add_q(6, "Easy",
      "Which trigonometric ratio is the reciprocal of tan A?",
      "cot A",
      "sec A",
      "cosec A",
      "cos A",
      "A",
      "cot A = 1 / tan A = (side adjacent to angle A) / (side opposite to angle A).")

add_q(7, "Easy",
      "In ΔABC right-angled at B, AB = 24 cm and BC = 7 cm. Find sin A (NCERT Ex 8.1 Q1(i)).",
      "7/25",
      "24/25",
      "7/24",
      "25/7",
      "A",
      "Hypotenuse AC = √(24² + 7²) = √(576 + 49) = √625 = 25 cm. For angle A, opposite side is BC = 7 cm. Thus sin A = BC/AC = 7/25.")

add_q(8, "Easy",
      "For the same triangle ABC with AB = 24 cm, BC = 7 cm, and AC = 25 cm, find cos A (NCERT Ex 8.1 Q1(i)).",
      "24/25",
      "7/25",
      "24/7",
      "25/24",
      "A",
      "Adjacent side to angle A is AB = 24 cm. cos A = AB/AC = 24/25.")

add_q(9, "Easy",
      "For the same triangle ABC, find sin C (NCERT Ex 8.1 Q1(ii)).",
      "24/25",
      "7/25",
      "25/24",
      "7/24",
      "A",
      "For angle C, the opposite side is AB = 24 cm. sin C = AB/AC = 24/25.")

add_q(10, "Easy",
      "For the same triangle ABC, find cos C (NCERT Ex 8.1 Q1(ii)).",
      "7/25",
      "24/25",
      "7/24",
      "25/7",
      "A",
      "For angle C, the adjacent side is BC = 7 cm. cos C = BC/AC = 7/25.")

add_q(11, "Easy",
      "In a right triangle PQR right-angled at Q, PQ = 12 cm and PR = 13 cm. Find tan P - cot R (NCERT Ex 8.1 Q2).",
      "0",
      "1",
      "5/12",
      "12/5",
      "A",
      "QR = √(13² - 12²) = √(169 - 144) = √25 = 5 cm. tan P = QR/PQ = 5/12. cot R = QR/PQ = 5/12. tan P - cot R = 5/12 - 5/12 = 0.")

add_q(12, "Easy",
      "If sin A = 3/4, calculate cos A (NCERT Ex 8.1 Q3).",
      "√7 / 4",
      "4/3",
      "3/√7",
      "√7 / 3",
      "A",
      "cos A = √(1 - sin²A) = √(1 - 9/16) = √(7/16) = √7 / 4.")

add_q(13, "Easy",
      "If sin A = 3/4, calculate tan A (NCERT Ex 8.1 Q3).",
      "3 / √7",
      "√7 / 3",
      "4 / √7",
      "3/4",
      "A",
      "tan A = sin A / cos A = (3/4) / (√7 / 4) = 3 / √7.")

add_q(14, "Easy",
      "Given 15 cot A = 8, find sin A (NCERT Ex 8.1 Q4).",
      "15/17",
      "8/17",
      "17/15",
      "8/15",
      "A",
      "cot A = 8/15 => base = 8, perpendicular = 15. Hypotenuse = √(8² + 15²) = √(64 + 225) = √289 = 17. Thus sin A = 15/17.")

add_q(15, "Easy",
      "Given 15 cot A = 8, find sec A (NCERT Ex 8.1 Q4).",
      "17/8",
      "15/8",
      "17/15",
      "8/17",
      "A",
      "sec A = hypotenuse / base = 17/8.")

add_q(16, "Easy",
      "Given sec θ = 13/12, calculate sin θ (NCERT Ex 8.1 Q5).",
      "5/13",
      "12/13",
      "5/12",
      "13/5",
      "A",
      "sec θ = 13/12 => cos θ = 12/13. Perpendicular = √(13² - 12²) = 5. sin θ = 5/13.")

add_q(17, "Easy",
      "If cot θ = 7/8, evaluate (1 + sin θ)(1 - sin θ) / [(1 + cos θ)(1 - cos θ)] (NCERT Ex 8.1 Q7(i)).",
      "49/64",
      "64/49",
      "7/8",
      "8/7",
      "A",
      "(1 - sin²θ) / (1 - cos²θ) = cos²θ / sin²θ = cot²θ = (7/8)² = 49/64.")

add_q(18, "Easy",
      "If 3 cot A = 4, find the value of (1 - tan²A) / (1 + tan²A) (NCERT Ex 8.1 Q8).",
      "7/25",
      "25/7",
      "1/2",
      "4/5",
      "A",
      "cot A = 4/3 => tan A = 3/4. (1 - 9/16) / (1 + 9/16) = (7/16) / (25/16) = 7/25.")

add_q(19, "Easy",
      "In ΔABC right-angled at B, if tan A = 1/√3, find sin A cos C + cos A sin C (NCERT Ex 8.1 Q9(i)).",
      "1",
      "0",
      "1/2",
      "√3/2",
      "A",
      "tan A = 1/√3 => A = 30°, so C = 60°. sin 30° cos 60° + cos 30° sin 60° = (1/2)(1/2) + (√3/2)(√3/2) = 1/4 + 3/4 = 1. (This also equals sin(A + C) = sin 90° = 1).")

add_q(20, "Easy",
      "What is the exact value of sin 30°?",
      "1/2",
      "√3/2",
      "1/√2",
      "1",
      "A",
      "sin 30° = 1/2.")

add_q(21, "Easy",
      "What is the exact value of cos 60°?",
      "1/2",
      "√3/2",
      "1/√2",
      "0",
      "A",
      "cos 60° = 1/2.")

add_q(22, "Easy",
      "What is the exact value of tan 45°?",
      "1",
      "0",
      "1/√3",
      "√3",
      "A",
      "In an isosceles right triangle (45°-45°-90°), opposite and adjacent sides are equal, so tan 45° = 1.")

add_q(23, "Easy",
      "What is the exact value of sin 60°?",
      "√3/2",
      "1/2",
      "1/√2",
      "√3",
      "A",
      "sin 60° = √3/2.")

add_q(24, "Easy",
      "What is the exact value of cos 30°?",
      "√3/2",
      "1/2",
      "1/√2",
      "1",
      "A",
      "cos 30° = √3/2.")

add_q(25, "Easy",
      "What is the value of tan 30°?",
      "1/√3",
      "√3",
      "1",
      "1/2",
      "A",
      "tan 30° = sin 30° / cos 30° = (1/2) / (√3/2) = 1/√3.")

add_q(26, "Easy",
      "What is the value of tan 60°?",
      "√3",
      "1/√3",
      "1",
      "2",
      "A",
      "tan 60° = sin 60° / cos 60° = (√3/2) / (1/2) = √3.")

add_q(27, "Easy",
      "Evaluate: 2 tan²45° + cos²30° - sin²60° (NCERT Ex 8.2 Q1(ii)).",
      "2",
      "1",
      "0",
      "3",
      "A",
      "2(1)² + (√3/2)² - (√3/2)² = 2(1) + 3/4 - 3/4 = 2.")

add_q(28, "Easy",
      "Evaluate: (2 tan 30°) / (1 + tan²30°) (NCERT Ex 8.2 Q2(i)).",
      "sin 60°",
      "cos 60°",
      "tan 60°",
      "sin 30°",
      "A",
      "[2(1/√3)] / [1 + 1/3] = (2/√3) / (4/3) = (2/√3) × (3/4) = √3/2 = sin 60°.")

add_q(29, "Easy",
      "Evaluate: (1 - tan²45°) / (1 + tan²45°) (NCERT Ex 8.2 Q2(ii)).",
      "0",
      "tan 90°",
      "1",
      "sin 45°",
      "A",
      "(1 - 1²) / (1 + 1²) = (1 - 1) / 2 = 0 / 2 = 0.")

add_q(30, "Easy",
      "sin 2A = 2 sin A is true when A equals (NCERT Ex 8.2 Q2(iii)):",
      "0°",
      "30°",
      "45°",
      "60°",
      "A",
      "For A = 0°: sin(2 × 0°) = sin 0° = 0. Also 2 sin 0° = 2(0) = 0. Both sides equal 0.")

add_q(31, "Easy",
      "Evaluate: (2 tan 30°) / (1 - tan²30°) (NCERT Ex 8.2 Q2(iv)).",
      "tan 60°",
      "cos 60°",
      "sin 60°",
      "sin 30°",
      "A",
      "[2(1/√3)] / [1 - 1/3] = (2/√3) / (2/3) = (2/√3) × (3/2) = √3 = tan 60°.")

add_q(32, "Easy",
      "If tan(A + B) = √3 and tan(A - B) = 1/√3, where 0° < A + B ≤ 90° and A > B, find A and B (NCERT Ex 8.2 Q3).",
      "A = 45°, B = 15°",
      "A = 60°, B = 30°",
      "A = 50°, B = 10°",
      "A = 55°, B = 25°",
      "A",
      "tan(A + B) = √3 => A + B = 60°. tan(A - B) = 1/√3 => A - B = 30°. Adding gives 2A = 90° => A = 45°. Then B = 60° - 45° = 15°.")

add_q(33, "Easy",
      "In the unit circle diagram below, which fundamental Pythagorean identity relates sin θ and cos θ?",
      "sin²θ + cos²θ = 1",
      "sin²θ - cos²θ = 1",
      "sin θ + cos θ = 1",
      "tan²θ + 1 = cos²θ",
      "A",
      "Theorem 8.3 (NCERT Section 8.4) proves that sin²θ + cos²θ = 1 for all angles 0° ≤ θ ≤ 90°.",
      SVG_UNIT_CIRCLE)

add_q(34, "Easy",
      "Which identity correctly relates 1, tan²A, and sec²A?",
      "1 + tan²A = sec²A",
      "1 + sec²A = tan²A",
      "tan²A - sec²A = 1",
      "1 - tan²A = sec²A",
      "A",
      "Dividing sin²A + cos²A = 1 by cos²A gives tan²A + 1 = sec²A.")

add_q(35, "Easy",
      "Which identity correctly relates 1, cot²A, and cosec²A?",
      "1 + cot²A = cosec²A",
      "1 + cosec²A = cot²A",
      "cot²A - cosec²A = 1",
      "cosec²A + cot²A = 1",
      "A",
      "Dividing sin²A + cos²A = 1 by sin²A gives 1 + cot²A = cosec²A.")

add_q(36, "Easy",
      "Evaluate: 9 sec²A - 9 tan²A (NCERT Ex 8.3 Q4(i)).",
      "9",
      "1",
      "8",
      "0",
      "A",
      "9(sec²A - tan²A) = 9(1) = 9, because sec²A - tan²A = 1.")

add_q(37, "Easy",
      "Evaluate: (sec A + tan A)(1 - sin A) (NCERT Ex 8.3 Q4(iii)).",
      "cos A",
      "sin A",
      "sec A",
      "cosec A",
      "A",
      "(1/cos A + sin A/cos A)(1 - sin A) = [(1 + sin A)(1 - sin A)] / cos A = (1 - sin²A) / cos A = cos²A / cos A = cos A.")

add_q(38, "Easy",
      "Evaluate: (1 + tan²A) / (1 + cot²A) (NCERT Ex 8.3 Q4(iv)).",
      "tan²A",
      "sec²A",
      "-1",
      "cot²A",
      "A",
      "(1 + tan²A) / (1 + cot²A) = sec²A / cosec²A = (1/cos²A) / (1/sin²A) = sin²A / cos²A = tan²A.")

add_q(39, "Easy",
      "As θ increases from 0° to 90°, the value of sin θ:",
      "Increases from 0 to 1",
      "Decreases from 1 to 0",
      "Remains constant",
      "Increases then decreases",
      "A",
      "sin 0° = 0, sin 30° = 0.5, sin 45° ≈ 0.707, sin 60° ≈ 0.866, sin 90° = 1; it increases strictly from 0 to 1.")

add_q(40, "Easy",
      "As θ increases from 0° to 90°, the value of cos θ:",
      "Decreases from 1 to 0",
      "Increases from 0 to 1",
      "Remains constant",
      "Decreases then increases",
      "A",
      "cos 0° = 1, cos 30° ≈ 0.866, cos 45° ≈ 0.707, cos 60° = 0.5, cos 90° = 0; it decreases strictly from 1 to 0.")

add_q(41, "Easy",
      "For what acute angle value is sin θ = cos θ?",
      "45°",
      "30°",
      "60°",
      "0°",
      "A",
      "sin 45° = cos 45° = 1/√2.")

add_q(42, "Easy",
      "What is the value of sin 0°?",
      "0",
      "1",
      "1/2",
      "Not defined",
      "A",
      "sin 0° = 0.")

add_q(43, "Easy",
      "What is the value of cos 0°?",
      "1",
      "0",
      "1/2",
      "Not defined",
      "A",
      "cos 0° = 1.")

add_q(44, "Easy",
      "What is the value of tan 0°?",
      "0",
      "1",
      "Not defined",
      "1/√3",
      "A",
      "tan 0° = sin 0° / cos 0° = 0 / 1 = 0.")

add_q(45, "Easy",
      "What is the value of tan 90°?",
      "Not defined",
      "0",
      "1",
      "∞",
      "A",
      "tan 90° = sin 90° / cos 90° = 1 / 0, which is not defined.")

add_q(46, "Easy",
      "What is the value of cosec 0°?",
      "Not defined",
      "0",
      "1",
      "-1",
      "A",
      "cosec 0° = 1 / sin 0° = 1 / 0, which is not defined.")

add_q(47, "Easy",
      "What is the value of sec 0°?",
      "1",
      "0",
      "Not defined",
      "-1",
      "A",
      "sec 0° = 1 / cos 0° = 1 / 1 = 1.")

add_q(48, "Easy",
      "What is the value of cot 0°?",
      "Not defined",
      "0",
      "1",
      "-1",
      "A",
      "cot 0° = cos 0° / sin 0° = 1 / 0, which is not defined.")

add_q(49, "Easy",
      "What is the value of cot 90°?",
      "0",
      "1",
      "Not defined",
      "-1",
      "A",
      "cot 90° = cos 90° / sin 90° = 0 / 1 = 0.")

add_q(50, "Easy",
      "Can the value of sin A or cos A ever be greater than 1 for any acute angle A?",
      "No, because the hypotenuse is the longest side in a right triangle, so opposite/hypotenuse ≤ 1",
      "Yes, when A > 45°",
      "Yes, for large triangles",
      "Yes, when tan A > 1",
      "A",
      "In any right triangle, the hypotenuse is the longest side; hence neither opposite/hypotenuse nor adjacent/hypotenuse can ever exceed 1.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "Evaluate: (1 + tan θ + sec θ)(1 + cot θ - cosec θ) (NCERT Ex 8.3 Q4(ii)).",
      "2",
      "0",
      "1",
      "-1",
      "A",
      "Convert to sin and cos: [1 + sin/cos + 1/cos][1 + cos/sin - 1/sin] = [(cos + sin + 1)/cos][(sin + cos - 1)/sin] = [((sin + cos) + 1)((sin + cos) - 1)] / (sin cos) = [(sin + cos)² - 1] / (sin cos) = [sin² + cos² + 2 sin cos - 1] / (sin cos) = [1 + 2 sin cos - 1] / (sin cos) = 2.")

add_q(52, "Medium",
      "Prove that (cosec θ - cot θ)² is equal to (NCERT Ex 8.3 Q5(i)):",
      "(1 - cos θ) / (1 + cos θ)",
      "(1 + cos θ) / (1 - cos θ)",
      "(1 - sin θ) / (1 + sin θ)",
      "(1 + sin θ) / (1 - sin θ)",
      "A",
      "(cosec θ - cot θ)² = (1/sin - cos/sin)² = (1 - cos θ)² / sin²θ = (1 - cos θ)² / (1 - cos²θ) = (1 - cos θ)² / [(1 - cos θ)(1 + cos θ)] = (1 - cos θ) / (1 + cos θ).")

add_q(53, "Medium",
      "Prove that cos A / (1 + sin A) + (1 + sin A) / cos A is equal to (NCERT Ex 8.3 Q5(ii)):",
      "2 sec A",
      "2 cosec A",
      "2 cos A",
      "sec A",
      "A",
      "[cos²A + (1 + sin A)²] / [cos A(1 + sin A)] = [cos²A + 1 + 2 sin A + sin²A] / [cos A(1 + sin A)] = [2 + 2 sin A] / [cos A(1 + sin A)] = 2(1 + sin A) / [cos A(1 + sin A)] = 2 / cos A = 2 sec A.")

add_q(54, "Medium",
      "Prove that √[(1 + sin A) / (1 - sin A)] is equal to (NCERT Ex 8.3 Q5(vi)):",
      "sec A + tan A",
      "sec A - tan A",
      "cosec A + cot A",
      "cos A + sin A",
      "A",
      "Multiply numerator and denominator inside root by (1 + sin A): √[(1 + sin A)² / (1 - sin²A)] = √[(1 + sin A)² / cos²A] = (1 + sin A) / cos A = 1/cos A + sin A/cos A = sec A + tan A.")

add_q(55, "Medium",
      "Prove that (sin θ - 2 sin³θ) / (2 cos³θ - cos θ) is equal to (NCERT Ex 8.3 Q5(vii)):",
      "tan θ",
      "cot θ",
      "sin θ cos θ",
      "1",
      "A",
      "[sin θ(1 - 2 sin²θ)] / [cos θ(2 cos²θ - 1)]. Note 1 - 2 sin²θ = cos²θ + sin²θ - 2 sin²θ = cos²θ - sin²θ. And 2 cos²θ - 1 = 2 cos²θ - (cos²θ + sin²θ) = cos²θ - sin²θ. Both cancel: sin θ / cos θ = tan θ.")

add_q(56, "Medium",
      "Prove that (sin A + cosec A)² + (cos A + sec A)² is equal to (NCERT Ex 8.3 Q5(viii)):",
      "7 + tan²A + cot²A",
      "5 + tan²A + cot²A",
      "7 + sec²A + cosec²A",
      "9 + tan²A + cot²A",
      "A",
      "(sin²A + cosec²A + 2 sin A cosec A) + (cos²A + sec²A + 2 cos A sec A) = (sin²A + cos²A) + (2 + 2) + cosec²A + sec²A = 1 + 4 + (1 + cot²A) + (1 + tan²A) = 7 + tan²A + cot²A.")

add_q(57, "Medium",
      "Prove that (cosec A - sin A)(sec A - cos A) is equal to (NCERT Ex 8.3 Q5(ix)):",
      "1 / (tan A + cot A)",
      "tan A + cot A",
      "sin A cos A",
      "1",
      "A",
      "(1/sin A - sin A)(1/cos A - cos A) = [(1 - sin²A)/sin A][(1 - cos²A)/cos A] = (cos²A/sin A)(sin²A/cos A) = sin A cos A. Also 1/(tan A + cot A) = 1/(sin/cos + cos/sin) = 1/[(sin² + cos²)/(sin cos)] = sin A cos A.")

add_q(58, "Medium",
      "If sin θ + cos θ = √3, then evaluate tan θ + cot θ.",
      "1",
      "2",
      "√3",
      "1/2",
      "A",
      "Squaring: (sin θ + cos θ)² = 3 => sin²θ + cos²θ + 2 sin θ cos θ = 3 => 1 + 2 sin θ cos θ = 3 => 2 sin θ cos θ = 2 => sin θ cos θ = 1. Then tan θ + cot θ = sin/cos + cos/sin = (sin² + cos²)/(sin cos) = 1 / 1 = 1.")

add_q(59, "Medium",
      "If x = a sin θ and y = b tan θ, then a²/x² - b²/y² equals:",
      "1",
      "0",
      "-1",
      "a²b²",
      "A",
      "a/x = 1/sin θ = cosec θ. b/y = 1/tan θ = cot θ. Then a²/x² - b²/y² = cosec²θ - cot²θ = 1.")

add_q(60, "Medium",
      "If sin θ + sin²θ = 1, then the value of cos²θ + cos⁴θ is:",
      "1",
      "0",
      "2",
      "-1",
      "A",
      "sin θ = 1 - sin²θ = cos²θ. Squaring both sides: sin²θ = cos⁴θ. Therefore cos²θ + cos⁴θ = cos²θ + sin²θ = 1.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "Prove that tan θ / (1 - cot θ) + cot θ / (1 - tan θ) is equal to (NCERT Ex 8.3 Q5(iii)):",
      "1 + sec θ cosec θ",
      "1 + sin θ cos θ",
      "sec θ + cosec θ",
      "1 - sec θ cosec θ",
      "A",
      "[sin/cos] / [1 - cos/sin] + [cos/sin] / [1 - sin/cos] = sin²/[cos(sin - cos)] - cos²/[sin(sin - cos)] = (sin³ - cos³) / [sin cos(sin - cos)] = (sin - cos)(sin² + sin cos + cos²) / [sin cos(sin - cos)] = (1 + sin cos) / (sin cos) = 1/(sin cos) + 1 = 1 + sec θ cosec θ.")

add_q(62, "Hard",
      "Prove that (cos A - sin A + 1) / (cos A + sin A - 1) is equal to (NCERT Ex 8.3 Q5(v)):",
      "cosec A + cot A",
      "cosec A - cot A",
      "sec A + tan A",
      "sec A - tan A",
      "A",
      "Divide numerator and denominator by sin A: (cot A - 1 + cosec A) / (cot A + 1 - cosec A) = [(cot A + cosec A) - (cosec²A - cot²A)] / (cot A - cosec A + 1) = (cosec A + cot A)[1 - (cosec A - cot A)] / (1 - cosec A + cot A) = cosec A + cot A.")

add_q(63, "Hard",
      "If sec θ + tan θ = p, then evaluate sin θ in terms of p.",
      "(p² - 1) / (p² + 1)",
      "(p² + 1) / (p² - 1)",
      "(p - 1) / (p + 1)",
      "2p / (p² + 1)",
      "A",
      "We know sec²θ - tan²θ = 1 => (sec θ + tan θ)(sec θ - tan θ) = 1 => sec θ - tan θ = 1/p. Adding gives 2 sec θ = p + 1/p = (p² + 1)/p => sec θ = (p² + 1)/(2p), so cos θ = 2p/(p² + 1). Subtracting gives 2 tan θ = (p² - 1)/p => tan θ = (p² - 1)/(2p). Then sin θ = tan θ × cos θ = [(p² - 1)/(2p)] × [2p/(p² + 1)] = (p² - 1)/(p² + 1).")

add_q(64, "Hard",
      "If a cos θ + b sin θ = m and a sin θ - b cos θ = n, prove that a² + b² equals:",
      "m² + n²",
      "m² - n²",
      "mn",
      "(m + n)²",
      "A",
      "Squaring and adding both equations: m² + n² = (a cos θ + b sin θ)² + (a sin θ - b cos θ)² = a²cos²θ + b²sin²θ + 2ab sin cos + a²sin²θ + b²cos²θ - 2ab sin cos = a²(cos²θ + sin²θ) + b²(sin²θ + cos²θ) = a²(1) + b²(1) = a² + b².")

add_q(65, "Hard",
      "If a cos θ - b sin θ = c, find the value of a sin θ + b cos θ.",
      "±√(a² + b² - c²)",
      "√(a² - b² + c²)",
      "±√(a² + b² + c²)",
      "a + b - c",
      "A",
      "Let x = a sin θ + b cos θ. (a cos θ - b sin θ)² + (a sin θ + b cos θ)² = a² + b² => c² + x² = a² + b² => x² = a² + b² - c² => x = ±√(a² + b² - c²).")

add_q(66, "Hard",
      "If cosec θ - sin θ = l and sec θ - cos θ = m, prove that:",
      "l^(2/3) m^(2/3) (l^(2/3) + m^(2/3)) = 1 (or l² m²(l² + m² + 3) = 1)",
      "l^(2/3) + m^(2/3) = 1",
      "l m = 1",
      "l² + m² = 1",
      "A",
      "l = 1/sin - sin = cos²θ/sin θ. m = 1/cos - cos = sin²θ/cos θ. l² m = (cos⁴/sin²)(sin²/cos) = cos³θ => cos θ = (l² m)^(1/3). lm² = (cos²/sin)(sin⁴/cos²) = sin³θ => sin θ = (l m²)^(1/3). Since cos²θ + sin²θ = 1 => (l² m)^(2/3) + (l m²)^(2/3) = 1 => l^(4/3) m^(2/3) + l^(2/3) m^(4/3) = 1 => l^(2/3) m^(2/3) (l^(2/3) + m^(2/3)) = 1.")

add_q(67, "Hard",
      "Prove that (1 + cot A + tan A)(sin A - cos A) / (sec³A - cosec³A) is equal to:",
      "sin²A cos²A",
      "sin A cos A",
      "1",
      "tan²A",
      "A",
      "Numerator: (1 + cos/sin + sin/cos)(sin - cos) = [(sin cos + cos² + sin²)/(sin cos)](sin - cos) = (sin³ - cos³) / (sin cos). Denominator: sec³ - cosec³ = (1/cos³ - 1/sin³) = (sin³ - cos³) / (sin³ cos³). Dividing gives: [(sin³ - cos³)/(sin cos)] × [(sin³ cos³)/(sin³ - cos³)] = sin³ cos³ / (sin cos) = sin²A cos²A.")

add_q(68, "Hard",
      "If tan A + sin A = m and tan A - sin A = n, prove that m² - n² equals:",
      "4√(mn)",
      "2√(mn)",
      "4 mn",
      "mn",
      "A",
      "m² - n² = (m + n)(m - n) = (2 tan A)(2 sin A) = 4 tan A sin A. Now mn = (tan A + sin A)(tan A - sin A) = tan²A - sin²A = sin²A/cos²A - sin²A = sin²A(1/cos²A - 1) = sin²A tan²A. Thus √(mn) = sin A tan A. Therefore m² - n² = 4√(mn).")

add_q(69, "Hard",
      "If cos θ + sin θ = √2 cos θ, prove that cos θ - sin θ equals:",
      "√2 sin θ",
      "√2 cos θ",
      "-√2 sin θ",
      "sin θ",
      "A",
      "cos θ - √2 cos θ = -sin θ => (√2 - 1) cos θ = sin θ. Multiply both sides by (√2 + 1): (2 - 1) cos θ = (√2 + 1) sin θ => cos θ = √2 sin θ + sin θ => cos θ - sin θ = √2 sin θ.")

add_q(70, "Hard",
      "If 2 sin²θ - cos²θ = 2, find the value of θ (where 0° ≤ θ ≤ 90°).",
      "90°",
      "60°",
      "45°",
      "30°",
      "A",
      "2 sin²θ - (1 - sin²θ) = 2 => 3 sin²θ - 1 = 2 => 3 sin²θ = 3 => sin²θ = 1 => sin θ = 1 => θ = 90°.")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "Does the expression 'sin A' mean 'sin multiplied by A'?",
      "No, 'sin A' is a single symbol denoting the sine of the angle A; 'sin' separated from A has no meaning",
      "Yes, it is the algebraic product of sin and A",
      "Only when A is in degrees",
      "Yes, by the distributive law",
      "A",
      "As explicitly clarified in NCERT: 'sin A' is NOT the product of 'sin' and 'A'. 'sin' separated from 'A' has no meaning whatsoever.")

add_q(72, "Tricky",
      "Is (sin θ)² written as sin²θ or sin θ²?",
      "sin²θ",
      "sin θ²",
      "Both are identical",
      "(sin θ)² cannot be simplified",
      "A",
      "We write sin²θ for (sin θ)². In contrast, sin θ² means the sine of the squared angle (θ²).")

add_q(73, "Tricky",
      "Is (sin A)⁻¹ equal to sin⁻¹ A in standard notation?",
      "No, (sin A)⁻¹ = 1/sin A = cosec A, whereas sin⁻¹ A denotes the inverse trigonometric function (arcsin)",
      "Yes, they are completely identical",
      "Only for acute angles",
      "Yes, by laws of indices",
      "A",
      "As warned in NCERT: (sin A)⁻¹ is 1/sin A (cosec A) and should NOT be confused with sin⁻¹ A, which denotes an inverse trigonometric angle.")

add_q(74, "Tricky",
      "Can the value of sec A be equal to 1/2 for some angle A?",
      "No, because sec A = hypotenuse/base ≥ 1 always",
      "Yes, when A = 60°",
      "Yes, for obtuse angles",
      "Yes, when cos A = 2",
      "A",
      "Since cos A ≤ 1, sec A = 1/cos A must be ≥ 1 (or ≤ -1). It can never be 1/2.")

add_q(75, "Tricky",
      "If tan A = 4/3, what can be stated about the value of tan A?",
      "It can be greater than 1, because opposite side can be longer than adjacent side",
      "It must always be less than 1",
      "It must equal 1",
      "It is an impossible value",
      "A",
      "Unlike sine and cosine (which are bounded by 1), tangent is the ratio of legs; the opposite leg can easily be longer than the adjacent leg, so tan A can take any non-negative real value.")

add_q(76, "Tricky",
      "If sin θ = cos θ for an acute angle θ, what is the value of 2 tan²θ + sin²θ - 1?",
      "3/2",
      "1",
      "2",
      "1/2",
      "A",
      "sin θ = cos θ => θ = 45°. 2 tan²45° + sin²45° - 1 = 2(1)² + (1/√2)² - 1 = 2 + 1/2 - 1 = 3/2.")

add_q(77, "Tricky",
      "What is the maximum value of 1 / cosec θ for 0° ≤ θ ≤ 90°?",
      "1",
      "0",
      "∞",
      "√2",
      "A",
      "1 / cosec θ = sin θ. The maximum value of sin θ in [0°, 90°] is 1 (at θ = 90°).")

add_q(78, "Tricky",
      "What is the minimum value of sec θ for 0° ≤ θ < 90°?",
      "1",
      "0",
      "-1",
      "1/2",
      "A",
      "sec θ = 1/cos θ. Since the maximum of cos θ is 1 (at 0°), the minimum value of sec θ is 1/1 = 1.")

add_q(79, "Tricky",
      "If sin θ - cos θ = 0, find the value of sin⁴θ + cos⁴θ.",
      "1/2",
      "1",
      "3/4",
      "1/4",
      "A",
      "sin θ = cos θ => θ = 45°. sin⁴45° + cos⁴45° = (1/√2)⁴ + (1/√2)⁴ = 1/4 + 1/4 = 1/2.")

add_q(80, "Tricky",
      "Evaluate: (cos 0° + sin 30° + sin 45°)(sin 90° + cos 60° - cos 45°).",
      "7/4",
      "3/2",
      "5/4",
      "2",
      "A",
      "[1 + 1/2 + 1/√2][1 + 1/2 - 1/√2] = (3/2 + 1/√2)(3/2 - 1/√2) = (3/2)² - (1/√2)² = 9/4 - 1/2 = 9/4 - 2/4 = 7/4.")

add_q(81, "Tricky",
      "If tan θ = a/b, find the value of (a sin θ - b cos θ) / (a sin θ + b cos θ).",
      "(a² - b²) / (a² + b²)",
      "(a² + b²) / (a² - b²)",
      "(a - b) / (a + b)",
      "a² / b²",
      "A",
      "Divide numerator and denominator by cos θ: (a tan θ - b) / (a tan θ + b) = [a(a/b) - b] / [a(a/b) + b] = (a²/b - b) / (a²/b + b) = (a² - b²) / (a² + b²).")

add_q(82, "Tricky",
      "Is the identity (1 + tan²A)/(1 + cot²A) = ( (1 - tan A)/(1 - cot A) )² true for all permissible angles?",
      "Yes, both sides simplify to tan²A",
      "No, only for A = 45°",
      "No, the right side is negative",
      "Only when A = 0°",
      "A",
      "(1 - tan A)/(1 - 1/tan A) = (1 - tan A) / [(tan A - 1)/tan A] = -tan A. Squaring gives (-tan A)² = tan²A. Both sides equal tan²A.")

add_q(83, "Tricky",
      "What is the value of (sec A + tan A - 1) / (tan A - sec A + 1)?",
      "sec A + tan A",
      "sec A - tan A",
      "1",
      "-1",
      "A",
      "Replace 1 in numerator by sec²A - tan²A = (sec A - tan A)(sec A + tan A). Factoring out (sec A + tan A) leaves [1 - (sec A - tan A)] = (tan A - sec A + 1), which cancels the denominator completely, leaving sec A + tan A.")

add_q(84, "Tricky",
      "If sin θ + cos θ = p and sec θ + cosec θ = q, then q(p² - 1) equals:",
      "2p",
      "p",
      "2q",
      "p²",
      "A",
      "p² = (sin + cos)² = 1 + 2 sin cos => p² - 1 = 2 sin cos. q = 1/cos + 1/sin = (sin + cos)/(sin cos) = p / (sin cos). Then q(p² - 1) = [p / (sin cos)] × [2 sin cos] = 2p.")

add_q(85, "Tricky",
      "If tan θ + cot θ = 2, find the value of tan²⁰θ + cot²⁰θ.",
      "2",
      "20",
      "1",
      "40",
      "A",
      "tan θ + 1/tan θ = 2 => tan²θ - 2 tan θ + 1 = (tan θ - 1)² = 0 => tan θ = 1. Then cot θ = 1. tan²⁰θ + cot²⁰θ = 1²⁰ + 1²⁰ = 1 + 1 = 2.")

add_q(86, "Tricky",
      "If tan θ + cot θ = 2, what is the value of θ in [0°, 90°]?",
      "45°",
      "30°",
      "60°",
      "90°",
      "A",
      "tan θ = 1 => θ = 45°.")

add_q(87, "Tricky",
      "If cos(α + β) = 0, then sin(α - β) can be reduced to:",
      "cos 2β",
      "sin 2α",
      "cos α",
      "sin β",
      "A",
      "cos(α + β) = 0 => α + β = 90° => α = 90° - β. Then sin(α - β) = sin(90° - β - β) = sin(90° - 2β) = cos 2β.")

add_q(88, "Tricky",
      "If ΔABC is right-angled at C, then the value of cos(A + B) is:",
      "0",
      "1",
      "1/2",
      "√3/2",
      "A",
      "In ΔABC, A + B + C = 180°. Since C = 90°, A + B = 90°. Then cos(A + B) = cos 90° = 0.")

add_q(89, "Tricky",
      "Evaluate: sin²20° + sin²70°.",
      "1",
      "0",
      "2",
      "1/2",
      "A",
      "Since 70° = 90° - 20°, sin 70° = cos 20°. Thus sin²20° + cos²20° = 1.")

add_q(90, "Tricky",
      "Evaluate: tan 10° · tan 20° · tan 70° · tan 80°.",
      "1",
      "0",
      "2",
      "1/√3",
      "A",
      "tan 80° = cot 10° and tan 70° = cot 20°. Product = (tan 10° cot 10°)(tan 20° cot 20°) = 1 × 1 = 1.")

# -------------------------------------------------------------------------
# 🔴 10 VERY HARD QUESTIONS (Q91 to Q100)
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "Eliminate θ from the equations: x = h + a cos θ and y = k + b sin θ.",
      "(x - h)²/a² + (y - k)²/b² = 1",
      "(x - h)²/a² - (y - k)²/b² = 1",
      "(x - h)² + (y - k)² = a² + b²",
      "(x - h)/a + (y - k)/b = 1",
      "A",
      "cos θ = (x - h)/a and sin θ = (y - k)/b. Using cos²θ + sin²θ = 1 gives (x - h)²/a² + (y - k)²/b² = 1 (equation of an ellipse).")

add_q(92, "Very Hard",
      "If sin θ + cos θ = m and sec θ + cosec θ = n, find the value of n(m² - 1) / m.",
      "2",
      "1",
      "m/n",
      "4",
      "A",
      "From Q84, n(m² - 1) = 2m. Therefore, n(m² - 1) / m = 2m / m = 2.")

add_q(93, "Very Hard",
      "If 7 sin²θ + 3 cos²θ = 4, find the value of tan θ (where θ is acute).",
      "1/√3",
      "√3",
      "1",
      "1/2",
      "A",
      "4 sin²θ + 3(sin²θ + cos²θ) = 4 => 4 sin²θ + 3(1) = 4 => 4 sin²θ = 1 => sin²θ = 1/4 => sin θ = 1/2 => θ = 30°. Then tan 30° = 1/√3.")

add_q(94, "Very Hard",
      "If tan θ + sec θ = l, prove that sec θ equals:",
      "(l² + 1) / (2l)",
      "(l² - 1) / (2l)",
      "l / (l² + 1)",
      "2l / (l² - 1)",
      "A",
      "sec θ + tan θ = l. We know sec²θ - tan²θ = 1 => sec θ - tan θ = 1/l. Adding both equations gives 2 sec θ = l + 1/l = (l² + 1)/l => sec θ = (l² + 1)/(2l).")

add_q(95, "Very Hard",
      "For the same relation tan θ + sec θ = l, what is tan θ?",
      "(l² - 1) / (2l)",
      "(l² + 1) / (2l)",
      "l / (l² - 1)",
      "2l / (l² + 1)",
      "A",
      "Subtracting the two equations gives 2 tan θ = l - 1/l = (l² - 1)/l => tan θ = (l² - 1)/(2l).")

add_q(96, "Very Hard",
      "If cosec θ - sin θ = a³ and sec θ - cos θ = b³, prove that a² b² (a² + b²) equals:",
      "1",
      "2",
      "0",
      "ab",
      "A",
      "a³ = cos²θ/sin θ and b³ = sin²θ/cos θ. Then a³ b³ = sin θ cos θ => ab = (sin θ cos θ)^(1/3). Also a² = cos^(4/3)θ / sin^(2/3)θ, b² = sin^(4/3)θ / cos^(2/3)θ. Cross-multiplying and using sin²θ + cos²θ = 1 leads to the classic identity a² b²(a² + b²) = 1.")

add_q(97, "Very Hard",
      "If 2 sin²θ - cos²θ = 2, find the value of θ (where θ is acute).",
      "90°",
      "45°",
      "60°",
      "30°",
      "A",
      "2 sin²θ - (1 - sin²θ) = 2 => 3 sin²θ = 3 => sin θ = 1 => θ = 90°.")

add_q(98, "Very Hard",
      "Prove that (sin A + sec A)² + (cos A + cosec A)² is equal to:",
      "(1 + sec A cosec A)²",
      "(1 + sin A cos A)²",
      "sec²A + cosec²A",
      "tan²A + cot²A",
      "A",
      "Expand LHS: sin²A + sec²A + 2 sin A sec A + cos²A + cosec²A + 2 cos A cosec A = (sin²A + cos²A) + (sec²A + cosec²A) + 2(sin/cos + cos/sin) = 1 + (1/cos² + 1/sin²) + 2[(sin² + cos²)/(sin cos)] = 1 + 1/(sin² cos²) + 2/(sin cos) = 1 + 2 sec cosec + sec² cosec² = (1 + sec A cosec A)².")

add_q(99, "Very Hard",
      "Evaluate: (1 + cot A - cosec A)(1 + tan A + sec A).",
      "2",
      "1",
      "0",
      "-2",
      "A",
      "Identical to Q51, expanding in terms of sine and cosine yields 2.")

add_q(100, "Very Hard",
      "If sin θ + cos θ = √2 cos(45° - θ), is this an identity for all values of θ?",
      "Yes, because cos(45° - θ) = cos 45° cos θ + sin 45° sin θ = (1/√2) cos θ + (1/√2) sin θ, so √2 cos(45° - θ) = cos θ + sin θ",
      "No, only when θ = 0°",
      "No, only when θ = 45°",
      "It is false",
      "A",
      "Using the cosine angle subtraction formula cos(45° - θ) = cos 45° cos θ + sin 45° sin θ = (cos θ + sin θ)/√2. Multiplying by √2 gives sin θ + cos θ identically.")

print(f"Total questions generated: {len(questions)}")
diff_count = {}
for q in questions:
    d = q['difficulty']
    diff_count[d] = diff_count.get(d, 0) + 1
print("Tier distribution:", diff_count)

js_content = f"""/* Elite Classes — Modular Test Series: Class 10 Mathematics Chapter 8
   Introduction to Trigonometry (100 Questions Exhaustive Master Assessment)
   Difficulty Breakdown:
   - 50 Easy Questions (Q1 to Q50)
   - 10 Medium Questions (Q51 to Q60)
   - 10 Hard Questions (Q61 to Q70)
   - 20 Tricky Questions (Q71 to Q90)
   - 10 Very Hard / Olympiad Level Questions (Q91 to Q100)
*/

const Class10MathematicsChapter8FullBank = {{
    id: 'ts_c10_math_ch8',
    title: 'Chapter 8: Introduction to Trigonometry Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 8 (Introduction to Trigonometry). Includes trigonometric ratios, specific angle values (0°, 30°, 45°, 60°, 90°), trigonometric identities (sin²θ+cos²θ=1, 1+tan²θ=sec²θ, 1+cot²θ=cosec²θ), algebraic proofs, and vector diagrams.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter8FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter8FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter8_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter8_mathematics.js")
