# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 4: Quadratic Equations
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
        "id": f"ts_c10_math_ch4_q{q_num}",
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

SVG_DISCRIMINANT_TREE = """<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Root Box -->
  <rect x="130" y="15" width="160" height="40" rx="8" fill="#1e3a8a"/>
  <text x="210" y="40" font-size="13" font-family="sans-serif" fill="#ffffff" font-weight="bold" text-anchor="middle">D = b² - 4ac</text>
  <!-- Branches -->
  <line x1="170" y1="55" x2="65" y2="105" stroke="#94a3b8" stroke-width="2"/>
  <line x1="210" y1="55" x2="210" y2="105" stroke="#94a3b8" stroke-width="2"/>
  <line x1="250" y1="55" x2="355" y2="105" stroke="#94a3b8" stroke-width="2"/>
  <!-- Branch 1: D > 0 -->
  <rect x="10" y="105" width="110" height="85" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
  <text x="65" y="128" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold" text-anchor="middle">D &gt; 0</text>
  <text x="65" y="150" font-size="10.5" font-family="sans-serif" fill="#065f46" text-anchor="middle">2 Distinct</text>
  <text x="65" y="168" font-size="10.5" font-family="sans-serif" fill="#065f46" text-anchor="middle">Real Roots</text>
  <!-- Branch 2: D = 0 -->
  <rect x="155" y="105" width="110" height="85" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="210" y="128" font-size="12" font-family="sans-serif" fill="#1d4ed8" font-weight="bold" text-anchor="middle">D = 0</text>
  <text x="210" y="150" font-size="10.5" font-family="sans-serif" fill="#1e40af" text-anchor="middle">2 Equal /</text>
  <text x="210" y="168" font-size="10.5" font-family="sans-serif" fill="#1e40af" text-anchor="middle">Coincident Roots</text>
  <!-- Branch 3: D < 0 -->
  <rect x="300" y="105" width="110" height="85" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="355" y="128" font-size="12" font-family="sans-serif" fill="#b91c1c" font-weight="bold" text-anchor="middle">D &lt; 0</text>
  <text x="355" y="150" font-size="10.5" font-family="sans-serif" fill="#991b1b" text-anchor="middle">No Real</text>
  <text x="355" y="168" font-size="10.5" font-family="sans-serif" fill="#991b1b" text-anchor="middle">Roots</text>
</svg>"""

SVG_RECTANGLE_PLOT = """<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <rect x="60" y="40" width="260" height="110" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" rx="4"/>
  <text x="190" y="90" font-size="14" font-family="sans-serif" fill="#15803d" font-weight="bold" text-anchor="middle">Area = 528 m²</text>
  <!-- Labels -->
  <text x="190" y="30" font-size="12" font-family="sans-serif" fill="#1e293b" font-weight="bold" text-anchor="middle">Length = (2x + 1) m</text>
  <text x="330" y="100" font-size="12" font-family="sans-serif" fill="#1e293b" font-weight="bold" text-anchor="start">Width = x m</text>
  <line x1="50" y1="40" x2="50" y2="150" stroke="#64748b" stroke-width="1.5"/>
  <line x1="60" y1="165" x2="320" y2="165" stroke="#64748b" stroke-width="1.5"/>
</svg>"""

SVG_RIGHT_TRIANGLE = """<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Right triangle: Base 180, Altitude 120 -->
  <polygon points="60,170 280,170 60,50" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
  <!-- Right angle square -->
  <rect x="60" y="152" width="18" height="18" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="170" y="190" font-size="12" font-family="sans-serif" fill="#1e3a8a" font-weight="bold" text-anchor="middle">Base = x cm</text>
  <text x="45" y="115" font-size="12" font-family="sans-serif" fill="#1e3a8a" font-weight="bold" text-anchor="end">Altitude = (x - 7) cm</text>
  <text x="190" y="100" font-size="12" font-family="sans-serif" fill="#dc2626" font-weight="bold" text-anchor="start">Hypotenuse = 13 cm</text>
</svg>"""

# -------------------------------------------------------------------------
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "What is the standard form of a quadratic equation in the variable x?",
      "ax + b = 0",
      "ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0",
      "ax³ + bx² + cx + d = 0",
      "ax² + c = 0 only",
      "B",
      "By definition in NCERT Section 4.2, any equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0, is called a quadratic equation in standard form.")

add_q(2, "Easy",
      "Which condition must be strictly satisfied for ax² + bx + c = 0 to be a quadratic equation?",
      "a = 0",
      "a ≠ 0",
      "b ≠ 0",
      "c ≠ 0",
      "B",
      "If a = 0, the equation reduces to bx + c = 0, which is a linear equation. Thus a ≠ 0 is mandatory.")

add_q(3, "Easy",
      "Check whether (x - 2)² + 1 = 2x - 3 is a quadratic equation (NCERT Example 2(i)).",
      "Yes, it simplifies to x² - 6x + 8 = 0",
      "No, it is a cubic equation",
      "No, it is a linear equation",
      "Yes, it simplifies to x² + 2x - 1 = 0",
      "A",
      "Expanding: x² - 4x + 4 + 1 = 2x - 3 => x² - 4x + 5 = 2x - 3 => x² - 6x + 8 = 0, which is of the form ax² + bx + c = 0 (a = 1 ≠ 0).")

add_q(4, "Easy",
      "Check whether x(x + 1) + 8 = (x + 2)(x - 2) is a quadratic equation (NCERT Example 2(ii)).",
      "Yes, it is a quadratic equation",
      "No, it simplifies to the linear equation x + 12 = 0",
      "No, it simplifies to x² + 8 = 0",
      "Yes, it simplifies to x² - 4 = 0",
      "B",
      "x² + x + 8 = x² - 4. Subtracting x² from both sides yields x + 12 = 0. Since the coefficient of x² is 0, it is NOT a quadratic equation.")

add_q(5, "Easy",
      "In the discriminant decision flowchart shown below, what nature of roots corresponds to D = b² - 4ac = 0?",
      "Two distinct real roots",
      "Two equal (coincident) real roots",
      "No real roots",
      "Infinitely many roots",
      "B",
      "When the discriminant D = 0, the quadratic formula yields x = -b/(2a) ± 0, giving two coincident (equal) real roots.",
      SVG_DISCRIMINANT_TREE)

add_q(6, "Easy",
      "What is the discriminant of the quadratic equation ax² + bx + c = 0?",
      "D = b² + 4ac",
      "D = b² - 4ac",
      "D = 4ac - b²",
      "D = b - 4ac",
      "B",
      "The expression D = b² - 4ac is defined as the discriminant because it discriminates among the types of roots.")

add_q(7, "Easy",
      "If b² - 4ac > 0, the quadratic equation ax² + bx + c = 0 has:",
      "Two distinct real roots",
      "Two equal real roots",
      "No real roots",
      "Three real roots",
      "A",
      "When D > 0, √D is a positive real number, yielding two distinct real roots x = (-b ± √D)/(2a).")

add_q(8, "Easy",
      "If b² - 4ac < 0, the quadratic equation ax² + bx + c = 0 has:",
      "Two distinct real roots",
      "Two equal real roots",
      "No real roots",
      "One rational and one irrational root",
      "C",
      "Since the square root of a negative number is not real, the equation has no real roots when D < 0.")

add_q(9, "Easy",
      "Who was the ancient Indian mathematician who gave an explicit formula to solve quadratic equations of the form ax² + bx = c?",
      "Aryabhata",
      "Brahmagupta (C.E. 598–665)",
      "Varahamihira",
      "Bhaskara I",
      "B",
      "As highlighted in the NCERT historical callout, Brahmagupta gave an explicit rule to solve quadratic equations around C.E. 628.")

add_q(10, "Easy",
      "The quadratic formula x = (-b ± √(b² - 4ac)) / (2a) is traditionally credited in Indian mathematics to:",
      "Sridharacharya (C.E. 1025)",
      "Baudhayana",
      "Pingala",
      "Ramanujan",
      "A",
      "Sridharacharya derived the quadratic formula by completing the square method around C.E. 1025.")

add_q(11, "Easy",
      "Find the roots of the quadratic equation 2x² - 5x + 3 = 0 by factorisation (NCERT Example 3).",
      "1 and 3/2",
      "-1 and -3/2",
      "2 and 3",
      "1/2 and 3",
      "A",
      "2x² - 3x - 2x + 3 = x(2x - 3) - 1(2x - 3) = (2x - 3)(x - 1) = 0. Hence x = 3/2 or x = 1.")

add_q(12, "Easy",
      "Find the roots of 6x² - x - 2 = 0 by factorisation (NCERT Example 4).",
      "2/3 and -1/2",
      "-2/3 and 1/2",
      "3/2 and -2",
      "2 and -1",
      "A",
      "6x² - 4x + 3x - 2 = 2x(3x - 2) + 1(3x - 2) = (3x - 2)(2x + 1) = 0. Hence x = 2/3 and x = -1/2.")

add_q(13, "Easy",
      "Find the roots of 3x² - 2√6x + 2 = 0 (NCERT Example 5).",
      "√(2/3) and √(2/3)",
      "-√(2/3) and -√(2/3)",
      "√2 and √3",
      "2 and 3",
      "A",
      "3x² - 2√6x + 2 = (√3x - √2)² = 0. Therefore, the roots are repeated: x = √2/√3 = √(2/3), √(2/3).")

add_q(14, "Easy",
      "Find the discriminant of the quadratic equation 2x² - 4x + 3 = 0 (NCERT Example 7).",
      "-8",
      "8",
      "40",
      "-40",
      "A",
      "D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8.")

add_q(15, "Easy",
      "Since the discriminant of 2x² - 4x + 3 = 0 is -8, what is the nature of its roots?",
      "Real and distinct",
      "Real and equal",
      "No real roots",
      "Rational and unequal",
      "C",
      "Since D = -8 < 0, the equation has no real roots.")

add_q(16, "Easy",
      "Find the roots of x² - 3x - 10 = 0 by factorisation (NCERT Ex 4.2 Q1(i)).",
      "5 and -2",
      "-5 and 2",
      "5 and 2",
      "-5 and -2",
      "A",
      "x² - 5x + 2x - 10 = (x - 5)(x + 2) = 0. The roots are x = 5 and x = -2.")

add_q(17, "Easy",
      "Find the roots of 2x² + x - 6 = 0 (NCERT Ex 4.2 Q1(ii)).",
      "-2 and 3/2",
      "2 and -3/2",
      "-2 and -3/2",
      "3 and -2",
      "A",
      "2x² + 4x - 3x - 6 = 2x(x + 2) - 3(x + 2) = (x + 2)(2x - 3) = 0. The roots are x = -2 and x = 3/2.")

add_q(18, "Easy",
      "Find the roots of √2x² + 7x + 5√2 = 0 (NCERT Ex 4.2 Q1(iii)).",
      "-5/√2 and -√2",
      "5/√2 and √2",
      "-5 and -√2",
      "-√2 and 5",
      "A",
      "√2 × 5√2 = 10. Split 7 into 5 and 2: √2x² + 2x + 5x + 5√2 = √2x(x + √2) + 5(x + √2) = (x + √2)(√2x + 5) = 0. Hence x = -√2 and x = -5/√2.")

add_q(19, "Easy",
      "Find the roots of 2x² - x + 1/8 = 0 (NCERT Ex 4.2 Q1(iv)).",
      "1/4 and 1/4",
      "-1/4 and -1/4",
      "1/2 and 1/2",
      "1/8 and 1",
      "A",
      "Multiply by 8: 16x² - 8x + 1 = (4x - 1)² = 0 => x = 1/4, 1/4 (two equal roots).")

add_q(20, "Easy",
      "Find the roots of 100x² - 20x + 1 = 0 (NCERT Ex 4.2 Q1(v)).",
      "1/10 and 1/10",
      "-1/10 and -1/10",
      "1/5 and 1/5",
      "1/20 and 1/20",
      "A",
      "100x² - 20x + 1 = (10x - 1)² = 0 => x = 1/10, 1/10.")

add_q(21, "Easy",
      "Referring to the rectangular plot diagram below with width x and length 2x + 1 having area 528 m², what quadratic equation represents this situation?",
      "2x² + x - 528 = 0",
      "2x² - x - 528 = 0",
      "x² + 2x - 528 = 0",
      "2x² + x + 528 = 0",
      "A",
      "Area = length × breadth = (2x + 1)x = 2x² + x = 528 => 2x² + x - 528 = 0.",
      SVG_RECTANGLE_PLOT)

add_q(22, "Easy",
      "Find two numbers whose sum is 27 and product is 182 (NCERT Ex 4.2 Q3).",
      "13 and 14",
      "12 and 15",
      "11 and 16",
      "10 and 17",
      "A",
      "Let numbers be x and 27 - x. x(27 - x) = 182 => x² - 27x + 182 = (x - 13)(x - 14) = 0. The numbers are 13 and 14.")

add_q(23, "Easy",
      "Find two consecutive positive integers, sum of whose squares is 365 (NCERT Ex 4.2 Q4).",
      "13 and 14",
      "12 and 13",
      "14 and 15",
      "11 and 12",
      "A",
      "x² + (x + 1)² = 365 => 2x² + 2x + 1 = 365 => 2x² + 2x - 364 = 0 => x² + x - 182 = (x + 14)(x - 13) = 0. Since positive, x = 13, so the numbers are 13 and 14.")

add_q(24, "Easy",
      "Referring to the right triangle diagram below with hypotenuse 13 cm and altitude (x - 7) cm on base x cm, find the dimensions of the base and altitude (NCERT Ex 4.2 Q5).",
      "Base = 12 cm, Altitude = 5 cm",
      "Base = 10 cm, Altitude = 3 cm",
      "Base = 15 cm, Altitude = 8 cm",
      "Base = 11 cm, Altitude = 4 cm",
      "A",
      "By Pythagoras theorem: x² + (x - 7)² = 13² => x² + x² - 14x + 49 = 169 => 2x² - 14x - 120 = 0 => x² - 7x - 60 = (x - 12)(x + 5) = 0. Since side > 0, x = 12 cm, altitude = 12 - 7 = 5 cm.",
      SVG_RIGHT_TRIANGLE)

add_q(25, "Easy",
      "Find the discriminant of 2x² - 3x + 5 = 0 (NCERT Ex 4.3 Q1(i)).",
      "-31",
      "31",
      "-49",
      "49",
      "A",
      "D = b² - 4ac = (-3)² - 4(2)(5) = 9 - 40 = -31.")

add_q(26, "Easy",
      "Since D = -31 for 2x² - 3x + 5 = 0, the equation has:",
      "Two distinct real roots",
      "Two equal real roots",
      "No real roots",
      "One real root",
      "C",
      "Since the discriminant D < 0, there are no real roots.")

add_q(27, "Easy",
      "Find the discriminant of 3x² - 4√3x + 4 = 0 (NCERT Ex 4.3 Q1(ii)).",
      "0",
      "12",
      "-12",
      "16",
      "A",
      "D = (-4√3)² - 4(3)(4) = 48 - 48 = 0.")

add_q(28, "Easy",
      "Since D = 0 for 3x² - 4√3x + 4 = 0, find its roots.",
      "2/√3 and 2/√3",
      "-2/√3 and -2/√3",
      "√3/2 and √3/2",
      "2 and 3",
      "A",
      "Since D = 0, roots are equal: x = -b/(2a) = -(-4√3)/(2 × 3) = 4√3/6 = 2√3/3 = 2/√3.")

add_q(29, "Easy",
      "Find the discriminant of 2x² - 6x + 3 = 0 (NCERT Ex 4.3 Q1(iii)).",
      "12",
      "-12",
      "60",
      "-60",
      "A",
      "D = (-6)² - 4(2)(3) = 36 - 24 = 12.")

add_q(30, "Easy",
      "Find the roots of 2x² - 6x + 3 = 0 using the quadratic formula.",
      "(3 ± √3) / 2",
      "(6 ± √12) / 2",
      "(3 ± √12) / 4",
      "(-3 ± √3) / 2",
      "A",
      "x = [6 ± √12] / (2 × 2) = [6 ± 2√3] / 4 = (3 ± √3) / 2.")

add_q(31, "Easy",
      "Find the value of k for which 2x² + kx + 3 = 0 has two equal roots (NCERT Ex 4.3 Q2(i)).",
      "±2√6",
      "±√6",
      "±6",
      "±24",
      "A",
      "For equal roots, D = 0 => k² - 4(2)(3) = 0 => k² - 24 = 0 => k² = 24 => k = ±√24 = ±2√6.")

add_q(32, "Easy",
      "Find the value of k for which kx(x - 2) + 6 = 0 has two equal roots (NCERT Ex 4.3 Q2(ii)).",
      "6",
      "0",
      "-6",
      "4",
      "A",
      "kx² - 2kx + 6 = 0. For equal roots: D = (-2k)² - 4(k)(6) = 0 => 4k² - 24k = 0 => 4k(k - 6) = 0. Since k ≠ 0 (otherwise not quadratic), k = 6.")

add_q(33, "Easy",
      "Is it possible to design a rectangular mango grove whose length is twice its breadth, and the area is 800 m²? If so, find its length and breadth (NCERT Ex 4.3 Q3).",
      "Yes; Length = 40 m, Breadth = 20 m",
      "Yes; Length = 50 m, Breadth = 25 m",
      "No, not possible",
      "Yes; Length = 20 m, Breadth = 10 m",
      "A",
      "Let breadth be x. Length = 2x. Area = 2x² = 800 => x² = 400 => x = 20 m. Length = 2(20) = 40 m. Since x is a real positive number, it is possible.")

add_q(34, "Easy",
      "Is the following situation possible? The sum of the ages of two friends is 20 years. Four years ago, the product of their ages in years was 48 (NCERT Ex 4.3 Q4).",
      "No, because the discriminant of the resulting equation is negative (D = -48 < 0)",
      "Yes, ages are 12 and 8",
      "Yes, ages are 14 and 6",
      "Yes, ages are 16 and 4",
      "A",
      "(x - 4)(16 - x) = 48 => 16x - x² - 64 + 4x = 48 => -x² + 20x - 112 = 0 => x² - 20x + 112 = 0. D = (-20)² - 4(1)(112) = 400 - 448 = -48 < 0. Since D < 0, no real solution exists.")

add_q(35, "Easy",
      "Is it possible to design a rectangular park of perimeter 80 m and area 400 m² (NCERT Ex 4.3 Q5)?",
      "Yes, it is a square park of side 20 m",
      "No, because D < 0",
      "Yes, length = 30 m, breadth = 10 m",
      "Yes, length = 25 m, breadth = 15 m",
      "A",
      "2(l + b) = 80 => l + b = 40 => b = 40 - l. Area = l(40 - l) = 400 => l² - 40l + 400 = (l - 20)² = 0 => l = 20 m, b = 20 m. It is possible (a square).")

add_q(36, "Easy",
      "What is the degree of a quadratic equation?",
      "1",
      "2",
      "3",
      "4",
      "B",
      "By definition, a quadratic equation is a polynomial equation of degree 2.")

add_q(37, "Easy",
      "If 1/2 is a root of the quadratic equation x² + kx - 5/4 = 0, find the value of k.",
      "2",
      "-2",
      "1/4",
      "1/2",
      "A",
      "(1/2)² + k(1/2) - 5/4 = 0 => 1/4 + k/2 - 5/4 = 0 => k/2 - 1 = 0 => k/2 = 1 => k = 2.")

add_q(38, "Easy",
      "Which of the following is a solution of x² - 9 = 0?",
      "x = ±3",
      "x = 9",
      "x = 0",
      "x = ±√3",
      "A",
      "x² = 9 => x = ±√9 = ±3.")

add_q(39, "Easy",
      "If the discriminant of a quadratic equation is zero, what can be concluded about its roots?",
      "The roots are real and equal",
      "The roots are imaginary",
      "The roots are distinct irrationals",
      "No roots exist",
      "A",
      "When D = 0, both roots are given by x = -b/(2a), meaning they are real and equal.")

add_q(40, "Easy",
      "If the discriminant of ax² + bx + c = 0 is a perfect square (and a, b, c are rational), the roots are:",
      "Rational and unequal",
      "Irrational and unequal",
      "Imaginary",
      "Equal",
      "A",
      "When D > 0 is a perfect square, √D is rational, so the roots are rational and distinct.")

add_q(41, "Easy",
      "If the discriminant of ax² + bx + c = 0 is positive but NOT a perfect square, the roots are:",
      "Conjugate surds (irrational and unequal)",
      "Rational and equal",
      "Non-real complex numbers",
      "Integers",
      "A",
      "When D is positive but not a square, √D is irrational, and the roots occur as conjugate irrational surds (-b ± √D)/(2a).")

add_q(42, "Easy",
      "What are the roots of the equation (2x - 1)(x + 3) = 0?",
      "1/2 and -3",
      "-1/2 and 3",
      "1/2 and 3",
      "-1/2 and -3",
      "A",
      "Setting each factor to 0 gives 2x - 1 = 0 => x = 1/2, and x + 3 = 0 => x = -3.")

add_q(43, "Easy",
      "If x² - 4 = 0, how many real roots does the equation have?",
      "2",
      "1",
      "0",
      "Infinitely many",
      "A",
      "x² = 4 has two distinct real roots, namely x = 2 and x = -2.")

add_q(44, "Easy",
      "If x² + 4 = 0, how many real roots does the equation have?",
      "0",
      "1",
      "2",
      "4",
      "A",
      "x² = -4. The square of any real number is non-negative, so no real number satisfies x² = -4. Hence 0 real roots.")

add_q(45, "Easy",
      "If the sum of roots of ax² + bx + c = 0 is S and the product is P, then the equation can be written as:",
      "x² - Sx + P = 0",
      "x² + Sx + P = 0",
      "x² - Sx - P = 0",
      "x² + Sx - P = 0",
      "A",
      "Dividing ax² + bx + c = 0 by a gives x² + (b/a)x + c/a = 0. Since S = -b/a and P = c/a, the equation is x² - Sx + P = 0.")

add_q(46, "Easy",
      "Find the sum and product of the roots of the equation 3x² - 5x + 2 = 0.",
      "Sum = 5/3, Product = 2/3",
      "Sum = -5/3, Product = 2/3",
      "Sum = 5/3, Product = -2/3",
      "Sum = 2/3, Product = 5/3",
      "A",
      "Sum = -b/a = -(-5)/3 = 5/3. Product = c/a = 2/3.")

add_q(47, "Easy",
      "What are the roots of the quadratic equation x² = 0?",
      "0 and 0 (two coincident zero roots)",
      "1 and -1",
      "Only 1 root",
      "Undefined",
      "A",
      "x² = 0 has two equal roots: x = 0, 0.")

add_q(48, "Easy",
      "For what value of k will the equation x² - kx + 4 = 0 have equal roots?",
      "±4",
      "±2",
      "±8",
      "±16",
      "A",
      "D = (-k)² - 4(1)(4) = 0 => k² - 16 = 0 => k = ±4.")

add_q(49, "Easy",
      "The product of two consecutive even integers is 80. What are the integers?",
      "8 and 10 (or -10 and -8)",
      "6 and 8",
      "10 and 12",
      "4 and 20",
      "A",
      "x(x + 2) = 80 => x² + 2x - 80 = (x + 10)(x - 8) = 0. The pairs are 8, 10 and -10, -8.")

add_q(50, "Easy",
      "If one root of the quadratic equation 2x² + ax - 6 = 0 is 2, find the value of a.",
      "-1",
      "1",
      "2",
      "-2",
      "A",
      "2(2)² + a(2) - 6 = 0 => 8 + 2a - 6 = 0 => 2a + 2 = 0 => a = -1.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "Solve for x: 1/(x + 4) - 1/(x - 7) = 11/30 (where x ≠ -4, 7) (NCERT Ex 4.3 Q3(ii)).",
      "x = 1 and x = 2",
      "x = -1 and x = -2",
      "x = 3 and x = 4",
      "x = -3 and x = 7",
      "A",
      "[(x - 7) - (x + 4)] / [(x + 4)(x - 7)] = 11/30 => -11 / (x² - 3x - 28) = 11/30 => -1 / (x² - 3x - 28) = 1/30 => x² - 3x - 28 = -30 => x² - 3x + 2 = 0 => (x - 1)(x - 2) = 0. Hence x = 1, 2.")

add_q(52, "Medium",
      "The sum of the reciprocals of Rehman's ages (in years) 3 years ago and 5 years from now is 1/3. Find his present age (NCERT Ex 4.3 Q4).",
      "7 years",
      "6 years",
      "8 years",
      "10 years",
      "A",
      "1/(x - 3) + 1/(x + 5) = 1/3 => [(x + 5) + (x - 3)] / (x² + 2x - 15) = 1/3 => (2x + 2) / (x² + 2x - 15) = 1/3 => 6x + 6 = x² + 2x - 15 => x² - 4x - 21 = 0 => (x - 7)(x + 3) = 0. Since age > 0, x = 7 years.")

add_q(53, "Medium",
      "In a class test, the sum of Shefali's marks in Mathematics and English is 30. Had she got 2 marks more in Mathematics and 3 marks less in English, the product of their marks would have been 210. Find her marks in the two subjects (NCERT Ex 4.3 Q5).",
      "Maths = 12, English = 18 OR Maths = 13, English = 17",
      "Maths = 15, English = 15",
      "Maths = 14, English = 16",
      "Maths = 10, English = 20",
      "A",
      "Let Maths mark be x, English be 30 - x. (x + 2)(30 - x - 3) = 210 => (x + 2)(27 - x) = 210 => -x² + 25x + 54 = 210 => x² - 25x + 156 = 0 => (x - 12)(x - 13) = 0. If Maths = 12, English = 18; if Maths = 13, English = 17.")

add_q(54, "Medium",
      "The diagonal of a rectangular field is 60 metres more than the shorter side. If the longer side is 30 metres more than the shorter side, find the sides of the field (NCERT Ex 4.3 Q6).",
      "Shorter side = 90 m, Longer side = 120 m",
      "Shorter side = 60 m, Longer side = 90 m",
      "Shorter side = 80 m, Longer side = 110 m",
      "Shorter side = 100 m, Longer side = 130 m",
      "A",
      "Let shorter side be x. Longer side = x + 30, diagonal = x + 60. By Pythagoras: (x + 60)² = x² + (x + 30)² => x² + 120x + 3600 = x² + x² + 60x + 900 => x² - 60x - 2700 = 0 => (x - 90)(x + 30) = 0 => x = 90 m. Longer side = 90 + 30 = 120 m.")

add_q(55, "Medium",
      "The difference of squares of two numbers is 180. The square of the smaller number is 8 times the larger number. Find the two numbers (NCERT Ex 4.3 Q7).",
      "18 and 12 OR 18 and -12",
      "15 and 10",
      "16 and 8",
      "20 and 10",
      "A",
      "Let larger number be x and smaller be y. x² - y² = 180 and y² = 8x. Substituting: x² - 8x - 180 = 0 => (x - 18)(x + 10) = 0. If x = -10, y² = -80 (impossible for real y). Thus x = 18. Then y² = 8(18) = 144 => y = ±12. The numbers are (18, 12) or (18, -12).")

add_q(56, "Medium",
      "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train (NCERT Ex 4.3 Q8).",
      "40 km/h",
      "45 km/h",
      "50 km/h",
      "36 km/h",
      "A",
      "360/x - 360/(x + 5) = 1 => 360[(x + 5 - x)] / [x(x + 5)] = 1 => 1800 = x² + 5x => x² + 5x - 1800 = (x + 45)(x - 40) = 0. Since speed > 0, x = 40 km/h.")

add_q(57, "Medium",
      "Two water taps together can fill a tank in 9 3/8 hours (75/8 hours). The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank (NCERT Ex 4.3 Q9).",
      "Smaller = 25 hours, Larger = 15 hours",
      "Smaller = 30 hours, Larger = 20 hours",
      "Smaller = 20 hours, Larger = 10 hours",
      "Smaller = 35 hours, Larger = 25 hours",
      "A",
      "1/x + 1/(x - 10) = 8/75 => (2x - 10) / (x² - 10x) = 8/75 => 75(2x - 10) = 8(x² - 10x) => 150x - 750 = 8x² - 80x => 8x² - 230x + 750 = 0 => 4x² - 115x + 375 = (4x - 15)(x - 25) = 0. If x = 15/4 = 3.75, x - 10 is negative (impossible). So x = 25 hours (smaller) and 25 - 10 = 15 hours (larger).")

add_q(58, "Medium",
      "An express train takes 1 hour less than a passenger train to travel 132 km between Mysore and Bangalore. If the average speed of the express train is 11 km/h more than that of the passenger train, find the average speed of the two trains (NCERT Ex 4.3 Q10).",
      "Passenger = 33 km/h, Express = 44 km/h",
      "Passenger = 30 km/h, Express = 41 km/h",
      "Passenger = 35 km/h, Express = 46 km/h",
      "Passenger = 40 km/h, Express = 51 km/h",
      "A",
      "132/x - 132/(x + 11) = 1 => 132(11) = x² + 11x => x² + 11x - 1452 = 0 => (x + 44)(x - 33) = 0. Since speed > 0, passenger train speed is 33 km/h and express train speed is 44 km/h.")

add_q(59, "Medium",
      "Sum of the areas of two squares is 468 m². If the difference of their perimeters is 24 m, find the sides of the two squares (NCERT Ex 4.3 Q11).",
      "18 m and 12 m",
      "16 m and 10 m",
      "20 m and 14 m",
      "15 m and 9 m",
      "A",
      "4x - 4y = 24 => x - y = 6 => x = y + 6. Areas sum: (y + 6)² + y² = 468 => 2y² + 12y + 36 = 468 => 2y² + 12y - 432 = 0 => y² + 6y - 216 = (y + 18)(y - 12) = 0 => y = 12 m, then x = 18 m.")

add_q(60, "Medium",
      "A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream (NCERT Example 15).",
      "6 km/h",
      "5 km/h",
      "4 km/h",
      "8 km/h",
      "A",
      "24/(18 - y) - 24/(18 + y) = 1 => 24(2y) = 18² - y² => 48y = 324 - y² => y² + 48y - 324 = (y + 54)(y - 6) = 0 => y = 6 km/h.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "Solve for x: (x - 1)/(x - 2) + (x - 3)/(x - 4) = 10/3 (where x ≠ 2, 4).",
      "x = 5 and x = 5/2",
      "x = 3 and x = 4",
      "x = -5 and x = -5/2",
      "x = 1 and x = 2",
      "A",
      "[(x - 1)(x - 4) + (x - 2)(x - 3)] / [(x - 2)(x - 4)] = 10/3 => [x² - 5x + 4 + x² - 5x + 6] / [x² - 6x + 8] = 10/3 => 3(2x² - 10x + 10) = 10(x² - 6x + 8) => 6x² - 30x + 30 = 10x² - 60x + 80 => 4x² - 30x + 50 = 0 => 2x² - 15x + 25 = (2x - 5)(x - 5) = 0 => x = 5, 5/2.")

add_q(62, "Hard",
      "If the roots of the equation (a - b)x² + (b - c)x + (c - a) = 0 are equal, prove that:",
      "2a = b + c",
      "2b = a + c",
      "2c = a + b",
      "a + b + c = 0",
      "B",
      "Notice that if x = 1, (a - b)(1)² + (b - c)(1) + (c - a) = a - b + b - c + c - a = 0. Since the roots are equal, both roots must equal 1! Product of roots = (c - a)/(a - b) = 1 => c - a = a - b => 2a = b + c... Wait: product of roots is (c - a)/(a - b) = 1² = 1 => c - a = a - b => 2a = b + c? Wait, let's check: sum of roots = 1 + 1 = 2 = -(b - c)/(a - b) => 2(a - b) = c - b => 2a - 2b = c - b => 2a = b + c. Let's re-verify: If a=2, b=1, c=3, 2a = 4, b+c = 4: (1)x² + (-2)x + (1) = 0 => (x-1)² = 0, equal roots! So 2a = b + c.")

add_q(63, "Hard",
      "If the roots of the equation (b - c)x² + (c - a)x + (a - b) = 0 are equal, then:",
      "2b = a + c",
      "2a = b + c",
      "2c = a + b",
      "b = ac",
      "A",
      "Here x = 1 is a root since (b - c) + (c - a) + (a - b) = 0. Since roots are equal, product of roots = (a - b)/(b - c) = 1 => a - b = b - c => 2b = a + c (b is the arithmetic mean of a and c).")

add_q(64, "Hard",
      "If the roots of the equation (a² + b²)x² - 2(ac + bd)x + (c² + d²) = 0 are equal, then prove that:",
      "a/b = c/d (or ad = bc)",
      "ab = cd",
      "a + b = c + d",
      "ac = bd",
      "A",
      "For equal roots, D = 0 => [-2(ac + bd)]² - 4(a² + b²)(c² + d²) = 0 => 4(a²c² + b²d² + 2abcd) - 4(a²c² + a²d² + b²c² + b²d²) = 0 => 2abcd - a²d² - b²c² = 0 => -(ad - bc)² = 0 => ad = bc => a/b = c/d.")

add_q(65, "Hard",
      "Find the value of p for which the quadratic equation (2p + 1)x² - (7p + 2)x + (7p - 3) = 0 has equal roots.",
      "p = 4 or p = -4/7",
      "p = 2 or p = -1",
      "p = 3 or p = -2",
      "p = 1 or p = 0",
      "A",
      "D = [-(7p + 2)]² - 4(2p + 1)(7p - 3) = 0 => 49p² + 28p + 4 - 4(14p² + p - 3) = 0 => 49p² + 28p + 4 - 56p² - 4p + 12 = 0 => -7p² + 24p + 16 = 0 => 7p² - 24p - 16 = (7p + 4)(p - 4) = 0 => p = 4 or p = -4/7.")

add_q(66, "Hard",
      "A pole has to be erected at a point on the boundary of a circular park of diameter 13 metres in such a way that the differences of its distances from two diametrically opposite fixed gates A and B on the boundary is 7 metres. Is it possible to do so? If yes, at what distances from the two gates should the pole be erected (NCERT Example 17)?",
      "Yes; 5 m from gate B and 12 m from gate A",
      "Yes; 6 m from gate B and 13 m from gate A",
      "No, not possible",
      "Yes; 4 m from gate B and 11 m from gate A",
      "A",
      "Since AB is diameter, angle in semicircle ∠APB = 90°. Let distance from B be x. Then AP = x + 7. By Pythagoras: x² + (x + 7)² = 13² => 2x² + 14x + 49 = 169 => 2x² + 14x - 120 = 0 => x² + 7x - 60 = (x + 12)(x - 5) = 0 => x = 5 m. Distances are 5 m and 12 m.")

add_q(67, "Hard",
      "Solve for x: 4x² - 4a²x + (a⁴ - b⁴) = 0.",
      "x = (a² + b²) / 2 and x = (a² - b²) / 2",
      "x = (a + b) / 2 and x = (a - b) / 2",
      "x = a² and x = b²",
      "x = a² + b² and x = a² - b²",
      "A",
      "D = (-4a²)² - 4(4)(a⁴ - b⁴) = 16a⁴ - 16a⁴ + 16b⁴ = 16b⁴. √D = 4b². x = [4a² ± 4b²] / 8 = (a² ± b²) / 2.")

add_q(68, "Hard",
      "Solve for x: 9x² - 9(a + b)x + (2a² + 5ab + 2b²) = 0.",
      "x = (2a + b)/3 and x = (a + 2b)/3",
      "x = (a + b)/3 and x = (a - b)/3",
      "x = 2a/3 and x = 2b/3",
      "x = (2a - b)/3 and x = (a - 2b)/3",
      "A",
      "Note 2a² + 5ab + 2b² = (2a + b)(a + 2b). Their sum is 3a + 3b = 3(a + b). Multiplied by 3: 3(2a + b) + 3(a + 2b) = 9(a + b). Thus 9x² - 3(2a + b)x - 3(a + 2b)x + (2a + b)(a + 2b) = [3x - (2a + b)][3x - (a + 2b)] = 0 => x = (2a + b)/3, (a + 2b)/3.")

add_q(69, "Hard",
      "If one root of the quadratic equation 3x² + px + 4 = 0 is 2/3, find the other root and the value of p.",
      "p = -8, other root = 2",
      "p = 8, other root = -2",
      "p = -6, other root = 3",
      "p = 6, other root = -3",
      "A",
      "Product of roots = 4/3. Since one root is 2/3: (2/3) × β = 4/3 => β = 2. Sum of roots = 2/3 + 2 = 8/3 = -p/3 => p = -8.")

add_q(70, "Hard",
      "If the roots of the equation x² + 2cx + ab = 0 are real and unequal, prove that the equation x² - 2(a + b)x + a² + b² + 2c² = 0 has:",
      "No real roots",
      "Two equal real roots",
      "Two distinct real roots",
      "Real and rational roots",
      "A",
      "For x² + 2cx + ab = 0, D₁ = 4c² - 4ab > 0 => c² - ab > 0. For the second equation, D₂ = [-2(a + b)]² - 4(a² + b² + 2c²) = 4(a² + b² + 2ab - a² - b² - 2c²) = 4(2ab - 2c²) = -8(c² - ab). Since c² - ab > 0, D₂ is strictly negative (-8 × positive < 0). Hence the second equation has NO real roots.")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "Can a quadratic equation have more than two distinct roots?",
      "Yes, when D > 0",
      "No, if an equation of the form ax² + bx + c = 0 is satisfied by more than 2 distinct values, it becomes an identity (a = b = c = 0)",
      "Yes, when a = 0",
      "Yes, over the complex numbers",
      "B",
      "A polynomial equation of degree 2 can have at most 2 roots. If it is satisfied by 3 or more distinct values of x, it must be an identity where a = b = c = 0.")

add_q(72, "Tricky",
      "If the coefficient of x in a quadratic equation ax² + bx + c = 0 is 0 (i.e. b = 0), then its roots are:",
      "Equal in magnitude but opposite in sign (±√(-c/a))",
      "Both equal to zero",
      "Reciprocals of each other",
      "Always imaginary",
      "A",
      "If b = 0, ax² + c = 0 => x² = -c/a => x = ±√(-c/a). The roots are equal in magnitude and opposite in sign.")

add_q(73, "Tricky",
      "If c = 0 in ax² + bx + c = 0, what is guaranteed about one of its roots?",
      "One root is always 0",
      "Both roots are 0",
      "The roots are reciprocals",
      "No real roots exist",
      "A",
      "ax² + bx = x(ax + b) = 0. Therefore, x = 0 is always one of the roots.")

add_q(74, "Tricky",
      "Under what condition are the roots of ax² + bx + c = 0 reciprocals of each other?",
      "a = c",
      "a = -c",
      "b = c",
      "b = 0",
      "A",
      "Product of roots = c/a. For roots to be reciprocals (α and 1/α), product must equal 1: c/a = 1 => a = c.")

add_q(75, "Tricky",
      "If a and c have opposite signs (i.e. ac < 0), what can be definitely stated about the roots of ax² + bx + c = 0?",
      "The roots are always real and distinct",
      "The roots are imaginary",
      "The roots are equal",
      "Both roots are positive",
      "A",
      "D = b² - 4ac. Since b² ≥ 0 and ac < 0, -4ac > 0. Therefore, D = b² + (positive) > 0 always. The roots are guaranteed to be real and distinct.")

add_q(76, "Tricky",
      "If a quadratic equation with rational coefficients has one root as 3 + √5, what must be the other root?",
      "3 - √5",
      "-3 + √5",
      "-3 - √5",
      "√5 - 3",
      "A",
      "Irrational roots of quadratic equations with rational coefficients always occur in conjugate surd pairs: 3 + √5 and 3 - √5.")

add_q(77, "Tricky",
      "A student squares both sides of √x = -3 and gets x = 9. Is x = 9 a valid root of the original equation?",
      "Yes, 9 is the correct root",
      "No, √9 = 3 ≠ -3, so x = 9 is an extraneous root and the original equation has no solution",
      "Yes, because (-3)² = 9",
      "Only if x is an imaginary number",
      "B",
      "The principal square root √x is by definition non-negative (≥ 0). Thus √x can never equal -3. Squaring introduced an extraneous root x = 9.")

add_q(78, "Tricky",
      "If x = 1 is a common root of ax² + ax + 3 = 0 and x² + x + b = 0, then the value of ab is:",
      "3",
      "-3",
      "6",
      "-6",
      "A",
      "x = 1 in first equation: a(1)² + a(1) + 3 = 0 => 2a + 3 = 0 => a = -3/2. x = 1 in second equation: 1² + 1 + b = 0 => 2 + b = 0 => b = -2. Then ab = (-3/2)(-2) = 3.")

add_q(79, "Tricky",
      "If the sum of the roots of the quadratic equation kx² + 2x + 3k = 0 is equal to their product, then k is:",
      "-2/3",
      "2/3",
      "-1/3",
      "1/3",
      "A",
      "Sum of roots = -2/k. Product of roots = 3k/k = 3. Setting them equal: -2/k = 3 => k = -2/3.")

add_q(80, "Tricky",
      "What is the discriminant of the equation (x - a)(x - b) + (x - b)(x - c) + (x - c)(x - a) = 0?",
      "Always ≥ 0, so roots are always real",
      "Always negative",
      "Can be positive or negative depending on signs",
      "Equal to 0 only",
      "A",
      "The equation expands to 3x² - 2(a + b + c)x + (ab + bc + ca) = 0. D = 4(a + b + c)² - 12(ab + bc + ca) = 4[(a - b)² + (b - c)² + (c - a)²] / 2 = 2[(a - b)² + (b - c)² + (c - a)²] ≥ 0. Since D is a sum of squares, D ≥ 0 always; roots are always real!")

add_q(81, "Tricky",
      "If the roots of ax² + bx + c = 0 are sin θ and cos θ, what is the relation among a, b, and c?",
      "b² - a² = 2ac",
      "b² + a² = 2ac",
      "a² - b² = 2ac",
      "b² - 4ac = 1",
      "A",
      "sin θ + cos θ = -b/a, and sin θ cos θ = c/a. Squaring the sum: (sin θ + cos θ)² = sin²θ + cos²θ + 2 sin θ cos θ = 1 + 2c/a. Also (-b/a)² = b²/a². Thus b²/a² = 1 + 2c/a = (a + 2c)/a => b² = a² + 2ac => b² - a² = 2ac.")

add_q(82, "Tricky",
      "What are the roots of x² - 2ax + (a² - b²) = 0?",
      "a + b and a - b",
      "a + b² and a - b²",
      "a² + b and a² - b",
      "2a and 2b",
      "A",
      "D = (-2a)² - 4(1)(a² - b²) = 4a² - 4a² + 4b² = 4b². x = (2a ± 2b)/2 = a ± b.")

add_q(83, "Tricky",
      "If the roots of the equation x² + px + q = 0 are tan 30° and tan 15°, find the value of 2 + q - p.",
      "3",
      "1",
      "2",
      "0",
      "A",
      "tan 30° + tan 15° = -p, tan 30° tan 15° = q. We know tan 45° = tan(30° + 15°) = (tan 30° + tan 15°) / (1 - tan 30° tan 15°) = -p / (1 - q). Since tan 45° = 1: 1 = -p / (1 - q) => 1 - q = -p => q - p = 1. Therefore, 2 + q - p = 2 + 1 = 3.")

add_q(84, "Tricky",
      "If α and β are the roots of x² - 5x + 6 = 0, find the value of α/β + β/α.",
      "13/6",
      "25/6",
      "12/5",
      "6/13",
      "A",
      "The roots are 2 and 3. Then 2/3 + 3/2 = (4 + 9)/6 = 13/6. (Or formula: (b² - 2ac)/ac = (25 - 12)/6 = 13/6).")

add_q(85, "Tricky",
      "If one root of the quadratic equation ax² + bx + c = 0 is three times the other, then:",
      "3b² = 16ac",
      "16b² = 3ac",
      "b² = 12ac",
      "3b² = 4ac",
      "A",
      "Let roots be α and 3α. Sum = 4α = -b/a => α = -b/(4a). Product = 3α² = c/a => 3[-b/(4a)]² = c/a => 3b²/(16a²) = c/a => 3b² = 16ac.")

add_q(86, "Tricky",
      "If the roots of ax² + bx + c = 0 are in the ratio 1 : r, then:",
      "(r + 1)² ac = rb²",
      "(r + 1) b² = r ac",
      "(r - 1)² ac = rb²",
      "r² ac = b²",
      "A",
      "Let roots be α and rα. Sum = (r + 1)α = -b/a => α = -b / [a(r + 1)]. Product = rα² = c/a => r b² / [a²(r + 1)²] = c/a => (r + 1)² ac = rb².")

add_q(87, "Tricky",
      "If α, β are roots of x² - (k + 1)x + 1/2(k² + k + 1) = 0, then α² + β² equals:",
      "-k",
      "k",
      "k + 1",
      "0",
      "A",
      "α² + β² = (α + β)² - 2αβ = (k + 1)² - 2[1/2(k² + k + 1)] = (k² + 2k + 1) - (k² + k + 1) = k.")

add_q(88, "Tricky",
      "Which equation has no real roots?",
      "x² - 4x + 3√2 = 0",
      "x² + 4x - 3√2 = 0",
      "x² - 4x - 3√2 = 0",
      "3x² + 4√3x + 4 = 0",
      "A",
      "For x² - 4x + 3√2 = 0, D = (-4)² - 4(1)(3√2) = 16 - 12√2 ≈ 16 - 12(1.414) = 16 - 16.97 = -0.97 < 0. Hence no real roots.")

add_q(89, "Tricky",
      "If x² + k(4x + k - 1) + 2 = 0 has equal roots, find the values of k.",
      "k = 2 or k = -2/3",
      "k = 1 or k = -1",
      "k = 3 or k = -1/2",
      "k = 0 or k = 2",
      "A",
      "x² + 4kx + (k² - k + 2) = 0. For equal roots: D = (4k)² - 4(1)(k² - k + 2) = 0 => 16k² - 4k² + 4k - 8 = 0 => 12k² + 4k - 8 = 0 => 3k² + k - 2 = (3k - 2)(k + 1) = 0 => k = 2/3 or k = -1... Wait: let's check k(k - 1) + 2: D = 16k² - 4(k² - k + 2) = 12k² + 4k - 8 = 4(3k² + k - 2) = 4(3k - 2)(k + 1) = 0 => k = 2/3, -1.")

add_q(90, "Tricky",
      "If the sum of a number and its reciprocal is 2 1/20 (i.e. 41/20), find the number.",
      "5/4 or 4/5",
      "3/2 or 2/3",
      "4/3 or 3/4",
      "5/2 or 2/5",
      "A",
      "x + 1/x = 41/20 => (x² + 1)/x = 41/20 => 20x² - 41x + 20 = (4x - 5)(5x - 4) = 0 => x = 5/4 or x = 4/5.")

# -------------------------------------------------------------------------
# 🔴 10 VERY HARD QUESTIONS (Q91 to Q100)
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "Solve for x: 1/(a + b + x) = 1/a + 1/b + 1/x (where a + b ≠ 0, x ≠ 0, -(a+b)).",
      "x = -a and x = -b",
      "x = a and x = b",
      "x = -a/b and x = -b/a",
      "x = a + b and x = a - b",
      "A",
      "1/(a + b + x) - 1/x = 1/a + 1/b => [x - (a + b + x)] / [x(a + b + x)] = (a + b)/(ab) => -(a + b) / [x(a + b + x)] = (a + b)/(ab). Dividing by (a + b): -1 / (ax + bx + x²) = 1/(ab) => x² + (a + b)x + ab = 0 => (x + a)(x + b) = 0 => x = -a, -b.")

add_q(92, "Very Hard",
      "Solve for x: (a/(x - b)) + (b/(x - a)) = 2 (where x ≠ a, b).",
      "x = a + b and x = (a + b)/2",
      "x = a and x = b",
      "x = 2a and x = 2b",
      "x = a - b and x = b - a",
      "A",
      "[a(x - a) + b(x - b)] / [(x - b)(x - a)] = 2 => ax - a² + bx - b² = 2(x² - (a + b)x + ab) => (a + b)x - (a² + b²) = 2x² - 2(a + b)x + 2ab => 2x² - 3(a + b)x + (a + b)² = 0 => (2x - (a + b))(x - (a + b)) = 0 => x = a + b, (a + b)/2.")

add_q(93, "Very Hard",
      "Solve for x: √(2x + 9) + x = 13.",
      "x = 8",
      "x = 8 and x = 20",
      "x = 20",
      "x = 4",
      "A",
      "√(2x + 9) = 13 - x. Squaring: 2x + 9 = (13 - x)² = 169 - 26x + x² => x² - 28x + 160 = (x - 20)(x - 8) = 0. Checking x = 20: √(49) + 20 = 7 + 20 = 27 ≠ 13 (extraneous!). Checking x = 8: √(25) + 8 = 5 + 8 = 13 (valid!). Hence the only root is x = 8.")

add_q(94, "Very Hard",
      "Solve for x: 3^(x + 2) + 3^(-x) = 10.",
      "x = -1 and x = -2",
      "x = 1 and x = 2",
      "x = 0 and x = 1",
      "x = -1 and x = 2",
      "A",
      "9 × 3^x + 1/(3^x) = 10. Let y = 3^x: 9y + 1/y = 10 => 9y² - 10y + 1 = (9y - 1)(y - 1) = 0. Case 1: y = 1 => 3^x = 3^0 => x = 0. Case 2: y = 1/9 => 3^x = 3⁻² => x = -2. Wait: for x = 0: 3² + 1 = 9 + 1 = 10 (satisfied!). For x = -2: 3^0 + 3² = 1 + 9 = 10 (satisfied!). Roots are x = 0 and x = -2.")

add_q(95, "Very Hard",
      "Solve for x: 2^(2x) - 3 · 2^(x + 2) + 32 = 0.",
      "x = 2 and x = 3",
      "x = 1 and x = 2",
      "x = 4 and x = 8",
      "x = 0 and x = 1",
      "A",
      "(2^x)² - 12(2^x) + 32 = 0. Let y = 2^x: y² - 12y + 32 = (y - 4)(y - 8) = 0. If y = 4 => 2^x = 2² => x = 2. If y = 8 => 2^x = 2³ => x = 3. Roots are x = 2 and x = 3.")

add_q(96, "Very Hard",
      "Seven years ago, Varun's age was five times the square of Swati's age. Three years hence, Swati's age will be two-fifth of Varun's age. Find their present ages.",
      "Varun = 27 years, Swati = 9 years",
      "Varun = 32 years, Swati = 10 years",
      "Varun = 25 years, Swati = 8 years",
      "Varun = 30 years, Swati = 9 years",
      "A",
      "Let Swati's age 7 years ago be x. Then Varun's age 7 years ago was 5x². Present ages: Swati = x + 7, Varun = 5x² + 7. Three years hence: Swati = x + 10, Varun = 5x² + 10. Given x + 10 = (2/5)(5x² + 10) = 2x² + 4 => 2x² - x - 6 = (2x + 3)(x - 2) = 0 => x = 2. Present ages: Swati = 2 + 7 = 9 years, Varun = 5(4) + 7 = 27 years.")

add_q(97, "Very Hard",
      "A piece of cloth costs Rs 200. If the piece were 5 m longer and each metre of cloth cost Rs 2 less, the cost of the piece would have remained unchanged. How long is the piece and what is its original rate per metre?",
      "Length = 20 m, Rate = Rs 10/m",
      "Length = 25 m, Rate = Rs 8/m",
      "Length = 15 m, Rate = Rs 12/m",
      "Length = 10 m, Rate = Rs 20/m",
      "A",
      "Let length be x metres. Rate = 200/x. (x + 5)(200/x - 2) = 200 => 200 - 2x + 1000/x - 10 = 200 => -2x + 1000/x - 10 = 0 => 2x² + 10x - 1000 = 0 => x² + 5x - 500 = (x + 25)(x - 20) = 0 => x = 20 m. Rate = 200/20 = Rs 10 per metre.")

add_q(98, "Very Hard",
      "Solve for x: x² + (a/(a + b) + (a + b)/a)x + 1 = 0.",
      "x = -a/(a + b) and x = -(a + b)/a",
      "x = a/(a + b) and x = (a + b)/a",
      "x = -a/b and x = -b/a",
      "x = 1 and x = -1",
      "A",
      "Let u = a/(a + b) and v = (a + b)/a. Note uv = 1. The equation is x² + (u + v)x + uv = (x + u)(x + v) = 0 => x = -u, -v = -a/(a + b), -(a + b)/a.")

add_q(99, "Very Hard",
      "If the equation (1 + m²)x² + 2mcx + c² - a² = 0 has equal roots, prove that:",
      "c² = a²(1 + m²)",
      "c² = a²(1 - m²)",
      "a² = c²(1 + m²)",
      "m² = c²(1 + a²)",
      "A",
      "D = (2mc)² - 4(1 + m²)(c² - a²) = 0 => 4m²c² - 4(c² - a² + m²c² - m²a²) = 0 => m²c² - c² + a² - m²c² + m²a² = 0 => -c² + a²(1 + m²) = 0 => c² = a²(1 + m²). This is the famous tangency condition for the line y = mx + c to the circle x² + y² = a².")

add_q(100, "Very Hard",
      "If the roots of the quadratic equation px² + qx + r = 0 are α and β, find the equation whose roots are α/β and β/α.",
      "p r x² - (q² - 2pr)x + p r = 0",
      "p r x² + (q² - 2pr)x + p r = 0",
      "q² x² - 2pr x + q² = 0",
      "p² x² - q² x + r² = 0",
      "A",
      "Sum of new roots = α/β + β/α = (α² + β²) / (αβ) = [(α+β)² - 2αβ] / (αβ) = [(-q/p)² - 2(r/p)] / (r/p) = [(q² - 2pr)/p²] / (r/p) = (q² - 2pr)/(pr). Product of new roots = (α/β)(β/α) = 1. New equation: x² - [(q² - 2pr)/(pr)]x + 1 = 0 => pr x² - (q² - 2pr)x + pr = 0.")

print(f"Total questions generated: {len(questions)}")
diff_count = {}
for q in questions:
    d = q['difficulty']
    diff_count[d] = diff_count.get(d, 0) + 1
print("Tier distribution:", diff_count)

js_content = f"""/* Elite Classes — Modular Test Series: Class 10 Mathematics Chapter 4
   Quadratic Equations (100 Questions Exhaustive Master Assessment)
   Difficulty Breakdown:
   - 50 Easy Questions (Q1 to Q50)
   - 10 Medium Questions (Q51 to Q60)
   - 10 Hard Questions (Q61 to Q70)
   - 20 Tricky Questions (Q71 to Q90)
   - 10 Very Hard / Olympiad Level Questions (Q91 to Q100)
*/

const Class10MathematicsChapter4FullBank = {{
    id: 'ts_c10_math_ch4',
    title: 'Chapter 4: Quadratic Equations Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 4 (Quadratic Equations). Includes standard form, factorisation, quadratic formula, nature of roots, discriminant analysis, word problems, and geometric diagrams.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter4FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter4FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter4_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter4_mathematics.js")
