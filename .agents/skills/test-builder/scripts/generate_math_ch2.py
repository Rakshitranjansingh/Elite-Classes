# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 2: Polynomials
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
        "id": f"ts_c10_math_ch2_q{q_num}",
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

SVG_PARABOLA_UP = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="150" x2="370" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="180" y1="220" x2="180" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="154" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="185" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <text x="168" y="165" font-size="11" font-family="sans-serif" fill="#64748b">O</text>
  <path d="M 80 40 Q 230 250 340 40" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="130" cy="150" r="5" fill="#ef4444"/>
  <text x="110" y="140" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold">A (-1, 0)</text>
  <circle cx="300" cy="150" r="5" fill="#ef4444"/>
  <text x="305" y="140" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold">B (4, 0)</text>
  <circle cx="230" cy="195" r="4" fill="#0d9488"/>
  <text x="238" y="205" font-size="11" font-family="sans-serif" fill="#0f766e">Vertex</text>
</svg>"""

SVG_PARABOLA_DOWN = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="160" x2="370" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="200" y1="220" x2="200" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="164" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="205" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <path d="M 90 220 Q 200 40 310 220" fill="none" stroke="#dc2626" stroke-width="3"/>
  <circle cx="130" cy="160" r="5" fill="#2563eb"/>
  <text x="100" y="180" font-size="11" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">(-1, 0)</text>
  <circle cx="270" cy="160" r="5" fill="#2563eb"/>
  <text x="260" y="180" font-size="11" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">(3, 0)</text>
  <circle cx="200" cy="85" r="4" fill="#047857"/>
  <text x="210" y="85" font-size="11" font-family="sans-serif" fill="#047857" font-weight="bold">Max Vertex (a &lt; 0)</text>
</svg>"""

SVG_PARABOLA_TANGENT = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="160" x2="370" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="120" y1="220" x2="120" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="164" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="125" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <path d="M 150 40 Q 240 280 330 40" fill="none" stroke="#7c3aed" stroke-width="3"/>
  <circle cx="240" cy="160" r="6" fill="#f59e0b"/>
  <text x="215" y="185" font-size="12" font-family="sans-serif" fill="#b45309" font-weight="bold">A (k, 0) [1 zero / coincident]</text>
</svg>"""

SVG_PARABOLA_NO_ZERO = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="180" x2="370" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="180" y1="220" x2="180" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="184" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="185" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <path d="M 100 40 Q 210 200 320 40" fill="none" stroke="#059669" stroke-width="3"/>
  <text x="130" y="120" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold">Does not cut X-axis (0 real zeros)</text>
</svg>"""

SVG_CUBIC_CURVE = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="120" x2="370" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="200" y1="220" x2="200" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="124" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="205" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <path d="M 80 220 C 130 0, 160 80, 200 120 C 240 160, 270 240, 320 20" fill="none" stroke="#d97706" stroke-width="3"/>
  <circle cx="120" cy="120" r="5" fill="#dc2626"/>
  <text x="105" y="140" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold">-2</text>
  <circle cx="200" cy="120" r="5" fill="#dc2626"/>
  <text x="205" y="140" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold">0</text>
  <circle cx="280" cy="120" r="5" fill="#dc2626"/>
  <text x="275" y="140" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold">2</text>
</svg>"""

# -------------------------------------------------------------------------
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "If p(x) is a polynomial in x, the highest power of x in p(x) is defined as the:",
      "Value of the polynomial",
      "Degree of the polynomial",
      "Coefficient of the polynomial",
      "Constant of the polynomial",
      "B",
      "By definition in NCERT Section 2.1, the highest exponent of x in a polynomial p(x) is called the degree of the polynomial.")

add_q(2, "Easy",
      "A polynomial of degree 1 is called a:",
      "Quadratic polynomial",
      "Linear polynomial",
      "Cubic polynomial",
      "Zero polynomial",
      "B",
      "A polynomial of degree 1 is defined as a linear polynomial (e.g. 2x - 3, √3x + 5).")

add_q(3, "Easy",
      "A polynomial of degree 2 is known as a:",
      "Linear polynomial",
      "Quadratic polynomial",
      "Cubic polynomial",
      "Biquadratic polynomial",
      "B",
      "The name quadratic is derived from 'quadrat', meaning square. A polynomial of degree 2 is a quadratic polynomial.")

add_q(4, "Easy",
      "What is the degree of a cubic polynomial?",
      "1",
      "2",
      "3",
      "4",
      "C",
      "A polynomial of degree 3 is called a cubic polynomial (e.g. 2 - x³, x³ - x²).")

add_q(5, "Easy",
      "In the given graph of a quadratic polynomial y = ax² + bx + c shown below, what geometric shape is formed?",
      "Straight line",
      "Circle",
      "Parabola",
      "Hyperbola",
      "C",
      "The graph of any quadratic equation y = ax² + bx + c (a ≠ 0) has the shape of a U-shaped curve called a parabola.",
      SVG_PARABOLA_UP)

add_q(6, "Easy",
      "For a quadratic polynomial ax² + bx + c, the parabola opens upwards when:",
      "a < 0",
      "a > 0",
      "a = 0",
      "c > 0",
      "B",
      "As stated in NCERT, the parabola opens upwards if a > 0 and opens downwards if a < 0.")

add_q(7, "Easy",
      "For a quadratic polynomial ax² + bx + c, the parabola opens downwards when:",
      "a > 0",
      "a < 0",
      "b = 0",
      "c < 0",
      "B",
      "If the coefficient of x² is negative (a < 0), the parabola opens downwards.")

add_q(8, "Easy",
      "The zeros of a polynomial p(x) are precisely the x-coordinates of the points where the graph of y = p(x) intersects the:",
      "Y-axis",
      "X-axis",
      "Line y = x",
      "Origin only",
      "B",
      "The zeros of p(x) are the x-coordinates of the points where y = 0, which means where the graph intersects the X-axis.")

add_q(9, "Easy",
      "At most how many real zeros can a polynomial of degree n have?",
      "n - 1",
      "n",
      "n + 1",
      "2n",
      "B",
      "In general, a polynomial p(x) of degree n crosses or touches the x-axis at at most n points, so it has at most n zeros.")

add_q(10, "Easy",
      "A quadratic polynomial can have at most how many real zeros?",
      "1",
      "2",
      "3",
      "Infinitely many",
      "B",
      "A quadratic polynomial has degree 2, and therefore has at most 2 real zeros.")

add_q(11, "Easy",
      "A cubic polynomial can have at most how many real zeros?",
      "1",
      "2",
      "3",
      "4",
      "C",
      "A cubic polynomial has degree 3, so its graph intersects the x-axis at at most 3 points; hence it has at most 3 zeros.")

add_q(12, "Easy",
      "If a real number k is a zero of polynomial p(x), then what must be the value of p(k)?",
      "1",
      "k",
      "-k",
      "0",
      "D",
      "By definition, k is a zero of p(x) if and only if p(k) = 0.")

add_q(13, "Easy",
      "What is the zero of the linear polynomial p(x) = ax + b (where a ≠ 0)?",
      "b/a",
      "-b/a",
      "-a/b",
      "a/b",
      "B",
      "Setting ax + b = 0 gives ax = -b, hence x = -b/a.")

add_q(14, "Easy",
      "If α and β are the zeros of a quadratic polynomial ax² + bx + c (a ≠ 0), then their sum (α + β) is equal to:",
      "c/a",
      "-b/a",
      "b/a",
      "-c/a",
      "B",
      "The sum of the zeros of ax² + bx + c is given by α + β = -b/a = -(coefficient of x) / (coefficient of x²).")

add_q(15, "Easy",
      "Referring to the downward-opening parabola graph shown below, what does its peak point represent?",
      "Minimum value of the polynomial",
      "Maximum value of the polynomial (vertex)",
      "Zero of the polynomial",
      "Y-intercept only",
      "B",
      "When a < 0, the parabola opens downward and its vertex is the highest (maximum) point of the curve.",
      SVG_PARABOLA_DOWN)

add_q(16, "Easy",
      "If α and β are the zeros of a quadratic polynomial ax² + bx + c, then their product (αβ) is equal to:",
      "-b/a",
      "b/a",
      "c/a",
      "-c/a",
      "C",
      "The product of the zeros is αβ = c/a = (constant term) / (coefficient of x²).")

add_q(17, "Easy",
      "Find the zeros of the quadratic polynomial p(x) = x² - 2x - 8 (NCERT Exercise 2.2 Q1(i)).",
      "4 and -2",
      "-4 and 2",
      "4 and 2",
      "-4 and -2",
      "A",
      "x² - 2x - 8 = (x - 4)(x + 2) = 0. Therefore, the zeros are x = 4 and x = -2.")

add_q(18, "Easy",
      "For the polynomial p(x) = x² - 2x - 8, what is the sum of its zeros?",
      "-2",
      "2",
      "8",
      "-8",
      "B",
      "Sum of zeros α + β = -(-2)/1 = 2 (or 4 + (-2) = 2).")

add_q(19, "Easy",
      "For the polynomial p(x) = x² - 2x - 8, what is the product of its zeros?",
      "8",
      "-8",
      "2",
      "-2",
      "B",
      "Product of zeros αβ = c/a = -8/1 = -8 (or 4 × (-2) = -8).")

add_q(20, "Easy",
      "Find the zeros of the quadratic polynomial p(s) = 4s² - 4s + 1 (NCERT Exercise 2.2 Q1(ii)).",
      "1/2 and 1/2",
      "-1/2 and -1/2",
      "1/4 and 1",
      "2 and 2",
      "A",
      "4s² - 4s + 1 = (2s - 1)² = 0. The zeros are s = 1/2, 1/2 (two equal zeros).")

add_q(21, "Easy",
      "Find the zeros of the polynomial p(x) = 6x² - 3 - 7x (NCERT Exercise 2.2 Q1(iii)).",
      "3/2 and -1/3",
      "-3/2 and 1/3",
      "3 and -1",
      "7/6 and -3/6",
      "A",
      "Arranging in standard form: 6x² - 7x - 3 = (2x - 3)(3x + 1) = 0. Hence x = 3/2 and x = -1/3.")

add_q(22, "Easy",
      "Find the zeros of the polynomial p(u) = 4u² + 8u (NCERT Exercise 2.2 Q1(iv)).",
      "0 and 2",
      "0 and -2",
      "-4 and 2",
      "4 and -8",
      "B",
      "4u² + 8u = 4u(u + 2) = 0. Therefore, u = 0 or u = -2.")

add_q(23, "Easy",
      "Find the zeros of the polynomial p(t) = t² - 15 (NCERT Exercise 2.2 Q1(v)).",
      "15 and -15",
      "√15 and -√15",
      "0 and 15",
      "3 and -5",
      "B",
      "t² - 15 = (t - √15)(t + √15) = 0. Therefore, t = √15 and t = -√15.")

add_q(24, "Easy",
      "For the polynomial p(t) = t² - 15, what is the sum of its zeros?",
      "15",
      "-15",
      "0",
      "2√15",
      "C",
      "Sum of zeros = √15 + (-√15) = 0. Also, coefficient of t is 0, so -b/a = -0/1 = 0.")

add_q(25, "Easy",
      "In the graph below, the parabola touches the X-axis at exactly one point A. How many zeros does this polynomial have?",
      "Zero",
      "One (two coincident equal zeros)",
      "Two distinct zeros",
      "Three zeros",
      "B",
      "When the vertex of the parabola lies on the X-axis, the two zeros coincide; it has 1 zero (or 2 equal zeros).",
      SVG_PARABOLA_TANGENT)

add_q(26, "Easy",
      "Find a quadratic polynomial whose sum and product of zeros are 1/4 and -1 respectively (NCERT Ex 2.2 Q2(i)).",
      "4x² - x - 4",
      "4x² + x - 4",
      "x² - 4x - 1",
      "4x² - x + 4",
      "A",
      "p(x) = k[x² - (α+β)x + αβ] = k[x² - (1/4)x - 1]. For k = 4, p(x) = 4x² - x - 4.")

add_q(27, "Easy",
      "Find a quadratic polynomial with sum of zeros = √2 and product of zeros = 1/3 (NCERT Ex 2.2 Q2(ii)).",
      "3x² - 3√2x + 1",
      "3x² + 3√2x + 1",
      "x² - √2x + 3",
      "3x² - √2x + 1",
      "A",
      "p(x) = k[x² - √2x + 1/3]. For k = 3, p(x) = 3x² - 3√2x + 1.")

add_q(28, "Easy",
      "Find a quadratic polynomial with sum of zeros = 0 and product of zeros = √5 (NCERT Ex 2.2 Q2(iii)).",
      "x² - √5",
      "x² + √5",
      "x² + 5",
      "√5x² + 1",
      "B",
      "p(x) = x² - (0)x + √5 = x² + √5.")

add_q(29, "Easy",
      "Find a quadratic polynomial with sum of zeros = 1 and product of zeros = 1 (NCERT Ex 2.2 Q2(iv)).",
      "x² - x + 1",
      "x² + x + 1",
      "x² - x - 1",
      "x² + x - 1",
      "A",
      "p(x) = x² - (1)x + 1 = x² - x + 1.")

add_q(30, "Easy",
      "Find a quadratic polynomial with sum of zeros = -1/4 and product of zeros = 1/4 (NCERT Ex 2.2 Q2(v)).",
      "4x² + x + 1",
      "4x² - x + 1",
      "4x² - x - 1",
      "x² + 4x + 1",
      "A",
      "p(x) = k[x² - (-1/4)x + 1/4] = k[x² + x/4 + 1/4]. For k = 4, p(x) = 4x² + x + 1.")

add_q(31, "Easy",
      "Find a quadratic polynomial with sum of zeros = 4 and product of zeros = 1 (NCERT Ex 2.2 Q2(vi)).",
      "x² - 4x + 1",
      "x² + 4x + 1",
      "4x² - x + 1",
      "x² - 4x - 1",
      "A",
      "p(x) = x² - (sum)x + product = x² - 4x + 1.")

add_q(32, "Easy",
      "Which of the following is NOT a polynomial?",
      "x² + 2x + 1",
      "x + 1/x",
      "√3x² + 7",
      "3x³ - 5x² + 2",
      "B",
      "In a polynomial, the exponent of the variable must be a non-negative integer. x + 1/x = x + x⁻¹ has a negative power, so it is not a polynomial.")

add_q(33, "Easy",
      "What is the value of the quadratic polynomial p(x) = 5x² - 3x + 7 at x = 1 (NCERT Example 2)?",
      "9",
      "7",
      "5",
      "15",
      "A",
      "p(1) = 5(1)² - 3(1) + 7 = 5 - 3 + 7 = 9.")

add_q(34, "Easy",
      "What is the value of q(y) = 3y³ - 4y + √11 at y = 2 (NCERT Example 2)?",
      "16 + √11",
      "24 + √11",
      "16 - √11",
      "20",
      "A",
      "q(2) = 3(2)³ - 4(2) + √11 = 3(8) - 8 + √11 = 24 - 8 + √11 = 16 + √11.")

add_q(35, "Easy",
      "If the graph of y = p(x) does not cut or touch the X-axis at all, how many real zeros does p(x) have?",
      "0",
      "1",
      "2",
      "Infinitely many",
      "A",
      "If the graph does not meet the X-axis, y is never zero for any real x; hence the polynomial has 0 real zeros.")

add_q(36, "Easy",
      "How many zeros does the linear polynomial p(x) = 2x + 3 have?",
      "0",
      "Exactly 1",
      "2",
      "Infinite",
      "B",
      "A linear polynomial ax + b (a ≠ 0) has exactly one zero, namely x = -b/a = -3/2.")

add_q(37, "Easy",
      "What is the shape of the graph of a linear polynomial y = ax + b?",
      "Parabola",
      "Straight line",
      "Ellipse",
      "Circle",
      "B",
      "The graph of a linear polynomial y = ax + b is always a straight line.")

add_q(38, "Easy",
      "If α, β, γ are the zeros of a cubic polynomial ax³ + bx² + cx + d, what is the formula for their sum (α + β + γ)?",
      "-b/a",
      "b/a",
      "c/a",
      "-d/a",
      "A",
      "For a cubic polynomial, the sum of zeros is α + β + γ = -b/a = -(coefficient of x²) / (coefficient of x³).")

add_q(39, "Easy",
      "For a cubic polynomial ax³ + bx² + cx + d, what is the product of zeros taken two at a time (αβ + βγ + γα)?",
      "-b/a",
      "c/a",
      "-c/a",
      "-d/a",
      "B",
      "The sum of products of zeros taken two at a time is αβ + βγ + γα = c/a = (coefficient of x) / (coefficient of x³).")

add_q(40, "Easy",
      "For a cubic polynomial ax³ + bx² + cx + d, what is the product of all three zeros (αβγ)?",
      "d/a",
      "-d/a",
      "-c/a",
      "b/a",
      "B",
      "The product of the zeros of a cubic polynomial is αβγ = -d/a = -(constant term) / (coefficient of x³).")

add_q(41, "Easy",
      "What is the degree of a constant non-zero polynomial like p(x) = 7?",
      "0",
      "1",
      "Not defined",
      "7",
      "A",
      "A constant polynomial p(x) = c (c ≠ 0) can be written as cx⁰; its degree is 0.")

add_q(42, "Easy",
      "What is the degree of the zero polynomial p(x) = 0?",
      "0",
      "1",
      "Not defined",
      "-1",
      "C",
      "The degree of the zero polynomial is conventionally not defined.")

add_q(43, "Easy",
      "If 2 is a zero of p(x) = 2x² + x + k, then the value of k is:",
      "-10",
      "10",
      "-6",
      "6",
      "A",
      "p(2) = 2(2)² + (2) + k = 0 => 8 + 2 + k = 0 => k = -10.")

add_q(44, "Easy",
      "If -1 is a zero of p(x) = kx² - 4x + k, find the value of k.",
      "2",
      "-2",
      "4",
      "-4",
      "B",
      "p(-1) = k(-1)² - 4(-1) + k = 0 => k + 4 + k = 0 => 2k = -4 => k = -2.")

add_q(45, "Easy",
      "Which of the following is a quadratic polynomial with zeros -3 and 4?",
      "x² - x - 12",
      "x² + x - 12",
      "x² - 7x + 12",
      "x² + 7x + 12",
      "A",
      "Sum of zeros = -3 + 4 = 1. Product = (-3)(4) = -12. Polynomial = x² - (sum)x + product = x² - x - 12.")

add_q(46, "Easy",
      "Find the number of zeros for a polynomial y = p(x) whose graph crosses the X-axis at 3 points and the Y-axis at 1 point.",
      "4",
      "3",
      "1",
      "2",
      "B",
      "The zeros of p(x) correspond solely to intersections with the X-axis. Since it crosses the X-axis at 3 points, it has 3 zeros.")

add_q(47, "Easy",
      "What is the maximum number of times the graph of a quadratic polynomial can intersect the X-axis?",
      "1",
      "2",
      "3",
      "0",
      "B",
      "A quadratic polynomial has degree 2 and can intersect the X-axis at most 2 times.")

add_q(48, "Easy",
      "If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:",
      "10",
      "-10",
      "-7",
      "-2",
      "B",
      "(2)² + 3(2) + k = 0 => 4 + 6 + k = 0 => k = -10.")

add_q(49, "Easy",
      "The zeros of the quadratic polynomial x² + 99x + 127 are:",
      "Both positive",
      "Both negative",
      "One positive and one negative",
      "Both equal to zero",
      "B",
      "Sum of zeros = -99 (negative) and product = +127 (positive). Two numbers with positive product and negative sum must both be negative.")

add_q(50, "Easy",
      "If the zeros of the quadratic polynomial ax² + bx + c (c ≠ 0) are equal, then:",
      "c and a have opposite signs",
      "c and b have opposite signs",
      "c and a have the same sign",
      "c and b have the same sign",
      "C",
      "For equal zeros, discriminant D = b² - 4ac = 0, so b² = 4ac. Since b² > 0, 4ac must be positive, which means a and c must have the same sign.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "If α and β are the zeros of the polynomial f(x) = x² - p(x + 1) - c such that (α + 1)(β + 1) = 0, then what is the value of c?",
      "1",
      "0",
      "-1",
      "2",
      "A",
      "f(x) = x² - px - (p + c). Here α + β = p and αβ = -(p + c). Expanding (α + 1)(β + 1) = αβ + (α + β) + 1 = -(p + c) + p + 1 = 1 - c = 0 => c = 1.")

add_q(52, "Medium",
      "If one zero of the polynomial 3x² + 8x + k is the reciprocal of the other, what is the value of k?",
      "3",
      "-3",
      "1/3",
      "8",
      "A",
      "Let the zeros be α and 1/α. Their product is α × (1/α) = 1. From the equation, product of zeros = c/a = k/3. Therefore, k/3 = 1 => k = 3.")

add_q(53, "Medium",
      "If the sum of the zeros of the quadratic polynomial kx² + 2x + 3k is equal to their product, then k equals:",
      "1/3",
      "-2/3",
      "2/3",
      "-1/3",
      "B",
      "Sum of zeros = -2/k. Product of zeros = 3k/k = 3. Setting them equal: -2/k = 3 => k = -2/3.")

add_q(54, "Medium",
      "If α and β are the zeros of p(x) = 2x² + 5x + k such that α² + β² + αβ = 21/4, find the value of k.",
      "1",
      "2",
      "3",
      "4",
      "B",
      "α + β = -5/2, αβ = k/2. Note α² + β² + αβ = (α + β)² - αβ = (-5/2)² - k/2 = 25/4 - k/2. Given 25/4 - k/2 = 21/4 => k/2 = 4/4 = 1 => k = 2.")

add_q(55, "Medium",
      "Examining the parabola graph below which lies strictly above the X-axis without touching it, what can be deduced about the discriminant D = b² - 4ac?",
      "D > 0",
      "D = 0",
      "D < 0",
      "D can be any real number",
      "C",
      "A parabola that does not intersect or touch the X-axis has no real zeros, which corresponds strictly to D = b² - 4ac < 0.",
      SVG_PARABOLA_NO_ZERO)

add_q(56, "Medium",
      "If α and β are the zeros of the polynomial 4x² + 3x + 7, then evaluate 1/α + 1/β.",
      "-3/7",
      "3/7",
      "-7/3",
      "7/3",
      "A",
      "1/α + 1/β = (α + β) / (αβ). Here α + β = -3/4 and αβ = 7/4. Ratio = (-3/4) / (7/4) = -3/7.")

add_q(57, "Medium",
      "Find a quadratic polynomial whose zeros are reciprocals of the zeros of ax² + bx + c (where a, c ≠ 0).",
      "cx² + bx + a",
      "cx² - bx + a",
      "ax² - bx + c",
      "bx² + ax + c",
      "A",
      "Let original zeros be α, β. New zeros are 1/α, 1/β. Sum = (α+β)/αβ = (-b/a)/(c/a) = -b/c. Product = 1/(αβ) = a/c. New polynomial = x² - (-b/c)x + a/c = cx² + bx + a.")

add_q(58, "Medium",
      "If 2 and -3 are the zeros of the quadratic polynomial x² + (a + 1)x + b, then find the values of a and b.",
      "a = 0, b = -6",
      "a = 2, b = -6",
      "a = -1, b = 6",
      "a = 0, b = 6",
      "A",
      "Sum of zeros = 2 + (-3) = -1. From equation, -(a + 1) = -1 => a + 1 = 1 => a = 0. Product = 2(-3) = -6 => b = -6.")

add_q(59, "Medium",
      "If one zero of the quadratic polynomial (k - 1)x² + kx + 1 is -3, then the value of k is:",
      "4/3",
      "-4/3",
      "2/3",
      "-2/3",
      "A",
      "(k - 1)(-3)² + k(-3) + 1 = 0 => 9(k - 1) - 3k + 1 = 0 => 9k - 9 - 3k + 1 = 0 => 6k - 8 = 0 => k = 8/6 = 4/3.")

add_q(60, "Medium",
      "If α and β are the zeros of x² - 6x + a and 3α + 2β = 20, then the value of a is:",
      "-16",
      "16",
      "-8",
      "8",
      "A",
      "We know α + β = 6, so 2α + 2β = 12. Subtracting this from 3α + 2β = 20 gives α = 8. Then β = 6 - 8 = -2. Therefore, a = αβ = 8(-2) = -16.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "If α and β are the zeros of the polynomial f(x) = x² - 5x + k such that α - β = 1, find the value of k.",
      "4",
      "6",
      "5",
      "7",
      "B",
      "(α - β)² = (α + β)² - 4αβ. Given α - β = 1 and α + β = 5: 1² = 5² - 4k => 1 = 25 - 4k => 4k = 24 => k = 6.")

add_q(62, "Hard",
      "If α and β are the zeros of the quadratic polynomial p(x) = x² - (k + 6)x + 2(2k - 1), find the value of k if α + β = (1/2)αβ.",
      "7",
      "5",
      "6",
      "8",
      "A",
      "α + β = k + 6, αβ = 2(2k - 1) = 4k - 2. Given α + β = (1/2)αβ => k + 6 = (1/2)(4k - 2) = 2k - 1 => k = 7.")

add_q(63, "Hard",
      "If the zeros of the polynomial x² - px + q are two consecutive integers, then p² - 4q equals:",
      "1",
      "2",
      "0",
      "-1",
      "A",
      "Let the zeros be α and α + 1. Their difference is (α + 1) - α = 1. We know (α - β)² = (α + β)² - 4αβ = p² - 4q. Since the difference is 1, 1² = p² - 4q => p² - 4q = 1.")

add_q(64, "Hard",
      "If α, β are the zeros of the quadratic polynomial f(x) = 2x² - 5x + 7, find a polynomial whose zeros are 2α + 3β and 3α + 2β.",
      "2x² - 25x + 82",
      "x² - 25x + 41",
      "4x² - 50x + 149",
      "x² - 5x + 7",
      "A",
      "Sum of new zeros = 5(α + β) = 5(5/2) = 25/2. Product = (2α+3β)(3α+2β) = 6(α²+β²) + 13αβ = 6((α+β)² - 2αβ) + 13αβ = 6(25/4 - 7) + 13(7/2) = 6(-3/4) + 91/2 = -9/2 + 91/2 = 82/2 = 41. Scaling by 2 gives 2x² - 25x + 82.")

add_q(65, "Hard",
      "The cubic curve y = x³ - 4x shown below intersects the X-axis at points (-2, 0), (0, 0), and (2, 0). What is the product of its zeros?",
      "-4",
      "4",
      "0",
      "2",
      "C",
      "The zeros are -2, 0, and 2. Their product is (-2) × 0 × 2 = 0. Also, the constant term d = 0, so -d/a = 0.",
      SVG_CUBIC_CURVE)

add_q(66, "Hard",
      "If the polynomial f(x) = ax³ + bx² + cx + d has zeros α, β, γ such that α + β = 0, then what is the relationship between the coefficients?",
      "ab = cd",
      "bc = ad",
      "ac = bd",
      "a + b = c + d",
      "B",
      "α + β + γ = -b/a. Since α + β = 0, γ = -b/a. Also, αβγ = -d/a => αβ(-b/a) = -d/a => αβ = d/b. Sum of pairs: αβ + γ(α + β) = c/a => αβ + 0 = c/a => d/b = c/a => ad = bc.")

add_q(67, "Hard",
      "If α and β are the zeros of the polynomial f(x) = x² - 4x + 3, determine the value of α⁴β³ + α³β⁴.",
      "108",
      "54",
      "27",
      "81",
      "A",
      "α⁴β³ + α³β⁴ = α³β³(α + β) = (αβ)³(α + β). Here α + β = 4 and αβ = 3. Value = 3³ × 4 = 27 × 4 = 108.")

add_q(68, "Hard",
      "Find the condition on a, b, c so that the zeros of ax² + bx + c are in the ratio m : n.",
      "(m + n)² ac = mnb²",
      "(m + n) b² = mn ac",
      "(m - n)² ac = mnb²",
      "m a = n c",
      "A",
      "Let zeros be mk and nk. Sum = (m + n)k = -b/a => k = -b / [a(m + n)]. Product = mn k² = c/a => mn b² / [a²(m + n)²] = c/a => mnb² = ac(m + n)².")

add_q(69, "Hard",
      "If α and β are the zeros of the quadratic polynomial p(x) = 3x² - 4x + 1, find a quadratic polynomial whose zeros are α²/β and β²/α.",
      "9x² - 28x + 3",
      "9x² + 28x + 3",
      "3x² - 28x + 1",
      "x² - 28x + 9",
      "A",
      "α + β = 4/3, αβ = 1/3. Sum of new zeros = (α³ + β³) / (αβ) = [(α+β)³ - 3αβ(α+β)] / (αβ) = [(4/3)³ - 3(1/3)(4/3)] / (1/3) = (28/27) / (1/3) = 28/9. Product of new zeros = αβ = 1/3. For integer coefficients, multiply by 9: 9x² - 28x + 3.")

add_q(70, "Hard",
      "If the sum of the squares of the zeros of the quadratic polynomial f(x) = x² - 8x + k is 40, find the value of k.",
      "12",
      "24",
      "6",
      "18",
      "A",
      "α² + β² = (α + β)² - 2αβ. Given 40 = 8² - 2k => 40 = 64 - 2k => 2k = 24 => k = 12.")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "Can a quadratic polynomial have exactly one real zero without it being a repeated/coincident root?",
      "Yes, when a < 0",
      "Yes, when c = 0",
      "No, over the real numbers a quadratic equation with 1 real root always has two coincident roots",
      "Yes, when the parabola is sideways",
      "C",
      "A quadratic polynomial over ℝ either has two distinct real roots, two equal (coincident) real roots, or no real roots.")

add_q(72, "Tricky",
      "If the graph of y = p(x) is completely below the X-axis, what can be stated about the coefficient a and the discriminant D?",
      "a > 0 and D > 0",
      "a < 0 and D < 0",
      "a < 0 and D = 0",
      "a > 0 and D < 0",
      "B",
      "For the entire parabola to lie strictly below the X-axis, it must open downwards (a < 0) and have no real intersections with the X-axis (D < 0).")

add_q(73, "Tricky",
      "If p(x) = ax² + bx + c and a + b + c = 0, then one of the zeros of p(x) must be:",
      "0",
      "1",
      "-1",
      "c/a",
      "B",
      "Notice that p(1) = a(1)² + b(1) + c = a + b + c. Since a + b + c = 0, p(1) = 0, meaning 1 is guaranteed to be a zero.")

add_q(74, "Tricky",
      "If p(x) = ax² + bx + c and a - b + c = 0, then which number is definitely a zero of p(x)?",
      "1",
      "-1",
      "2",
      "-2",
      "B",
      "p(-1) = a(-1)² + b(-1) + c = a - b + c = 0. Therefore, x = -1 is definitely a zero.")

add_q(75, "Tricky",
      "If one zero of ax² + bx + c is 1, what is the other zero?",
      "-b/a",
      "c/a",
      "-c/a",
      "b/a",
      "B",
      "Since product of zeros is αβ = c/a, if α = 1, then β = c/a.")

add_q(76, "Tricky",
      "If one zero of ax² + bx + c is -1, what is the other zero?",
      "-c/a",
      "c/a",
      "-b/a",
      "b/a",
      "A",
      "Product of zeros αβ = c/a. With α = -1, β = -c/a.")

add_q(77, "Tricky",
      "If both zeros of a quadratic polynomial ax² + bx + c are negative, what must be true about the signs of a, b, and c?",
      "a, b, and c must all have the same sign",
      "a and b have opposite signs",
      "a and c have opposite signs",
      "b must be zero",
      "A",
      "If α, β < 0, then α + β = -b/a < 0 => b/a > 0 (a and b have same sign), and αβ = c/a > 0 (a and c have same sign). Hence a, b, and c all share the same sign.")

add_q(78, "Tricky",
      "If both zeros of the quadratic polynomial ax² + bx + c are positive, which coefficients must have the same sign?",
      "a and b only",
      "a and c only, while b has the opposite sign",
      "a, b, and c all have the same sign",
      "b and c only",
      "B",
      "Sum α + β = -b/a > 0 => b/a < 0 (b has opposite sign of a). Product αβ = c/a > 0 => c and a have the same sign.")

add_q(79, "Tricky",
      "If the zeros of the quadratic polynomial ax² + bx + c are equal in magnitude but opposite in sign, then:",
      "a = 0",
      "b = 0",
      "c = 0",
      "b² - 4ac < 0",
      "B",
      "Let zeros be α and -α. Their sum is α + (-α) = 0. Since sum = -b/a, -b/a = 0 => b = 0.")

add_q(80, "Tricky",
      "A real polynomial of odd degree (such as degree 1, 3, 5) must have at least how many real zeros?",
      "0",
      "1",
      "2",
      "3",
      "B",
      "Complex roots of real polynomials always occur in conjugate pairs. Therefore, any odd-degree polynomial must cross the X-axis at least once, guaranteeing at least 1 real zero.")

add_q(81, "Tricky",
      "What is the maximum number of points at which the graph of a degree 4 polynomial can intersect the X-axis?",
      "2",
      "3",
      "4",
      "5",
      "C",
      "A degree 4 polynomial has at most 4 real zeros, so its graph can intersect the X-axis at at most 4 points.")

add_q(82, "Tricky",
      "If p(x) = x² - 4x + 4, what is the geometric relationship of its graph to the X-axis?",
      "It cuts the X-axis at x = 2 and x = -2",
      "It touches the X-axis at x = 2 without crossing it",
      "It does not meet the X-axis",
      "It lies entirely below the X-axis",
      "B",
      "x² - 4x + 4 = (x - 2)². The vertex is at (2, 0) on the X-axis. Since (x - 2)² ≥ 0 for all real x, the graph touches the X-axis at x = 2 and turns back upwards.")

add_q(83, "Tricky",
      "If α and β are the zeros of x² - x - 2, find the value of α³ + β³.",
      "7",
      "-7",
      "9",
      "-9",
      "A",
      "Zeros of x² - x - 2 are 2 and -1. Then 2³ + (-1)³ = 8 - 1 = 7. (Or using formula: (α+β)³ - 3αβ(α+β) = 1³ - 3(-2)(1) = 1 + 6 = 7).")

add_q(84, "Tricky",
      "What is the value of the constant k if the sum of the zeros of the polynomial p(x) = 2x³ - 3kx² + 4x - 5 is 6?",
      "2",
      "4",
      "-4",
      "6",
      "B",
      "Sum of zeros of cubic = -(-3k)/2 = 3k/2. Setting 3k/2 = 6 => 3k = 12 => k = 4.")

add_q(85, "Tricky",
      "If the vertex of the parabola y = ax² + bx + c lies in the fourth quadrant (x > 0, y < 0) and the parabola opens upwards (a > 0), what can be said about b and c?",
      "b < 0, while c can be positive, zero, or negative",
      "b > 0 and c > 0",
      "b = 0 and c < 0",
      "b > 0 and c < 0",
      "A",
      "Vertex x-coordinate = -b/(2a). Since x > 0 and a > 0, -b must be positive, which means b < 0. Y-intercept is c, which can be positive or negative depending on whether the roots are both positive or of opposite signs.")

add_q(86, "Tricky",
      "If α, β are the zeros of ax² + bx + c, what is the value of α/β + β/α?",
      "(b² - 2ac) / ac",
      "(b² + 2ac) / ac",
      "(b - 2ac) / a",
      "b² / ac",
      "A",
      "α/β + β/α = (α² + β²) / (αβ) = [(α + β)² - 2αβ] / (αβ) = [(-b/a)² - 2(c/a)] / (c/a) = [(b² - 2ac)/a²] / (c/a) = (b² - 2ac) / (ac).")

add_q(87, "Tricky",
      "If the polynomial x² + ax + b has zeros that are squares of the zeros of x² + px + q, then b equals:",
      "q",
      "q²",
      "p²",
      "2q",
      "B",
      "Product of original zeros is q. The new zeros are α² and β², whose product is (αβ)² = q². From the new equation, product is b. Therefore, b = q².")

add_q(88, "Tricky",
      "A student claims that the polynomial p(x) = x⁴ + 4x² + 5 has at least two real zeros because its degree is 4. Is this claim correct?",
      "Yes, because degree 4 always has real zeros",
      "No, because x⁴ ≥ 0 and 4x² ≥ 0 for all real x, so p(x) ≥ 5 > 0, meaning it has zero real zeros",
      "Yes, the zeros are ±√5",
      "No, it has exactly 1 real zero",
      "B",
      "Since x⁴ ≥ 0 and x² ≥ 0 for all real x, x⁴ + 4x² + 5 ≥ 5 > 0 for all x ∈ ℝ. Thus p(x) is never 0 and has NO real zeros.")

add_q(89, "Tricky",
      "How many zeros does the polynomial p(x) = (x - 1)(x - 2)(x - 3) have?",
      "1",
      "2",
      "3",
      "6",
      "C",
      "The product is 0 when x = 1, 2, or 3. There are exactly 3 distinct real zeros.")

add_q(90, "Tricky",
      "What is the zero of the polynomial p(x) = cx + d, where c ≠ 0?",
      "-d/c",
      "d/c",
      "-c/d",
      "c/d",
      "A",
      "Setting cx + d = 0 gives cx = -d => x = -d/c.")

# -------------------------------------------------------------------------
# 🔴 10 VERY HARD QUESTIONS (Q91 to Q100)
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "If α, β, γ are the zeros of the cubic polynomial p(x) = 2x³ + 6x² - 4x + 9, find the value of (1/αβ + 1/βγ + 1/γα).",
      "2/3",
      "-2/3",
      "-4/9",
      "4/9",
      "A",
      "1/αβ + 1/βγ + 1/γα = (α + β + γ) / (αβγ). Here α + β + γ = -6/2 = -3, and αβγ = -9/2. Ratio = (-3) / (-9/2) = (-3) × (-2/9) = 6/9 = 2/3.")

add_q(92, "Very Hard",
      "If α, β are the zeros of the polynomial f(x) = x² - 2x + 3, find the polynomial whose zeros are (α + 2) and (β + 2).",
      "x² - 6x + 11",
      "x² + 6x + 11",
      "x² - 6x - 11",
      "x² - 2x + 7",
      "A",
      "Let y = x + 2 => x = y - 2. Substituting into f(x): (y - 2)² - 2(y - 2) + 3 = y² - 4y + 4 - 2y + 4 + 3 = y² - 6y + 11. Hence the required polynomial is x² - 6x + 11.")

add_q(93, "Very Hard",
      "If α and β are the zeros of p(x) = x² - px + q, then evaluate (α/β + 1)(β/α + 1).",
      "p² / q",
      "q² / p",
      "(p² - q) / q",
      "p / q²",
      "A",
      "(α/β + 1)(β/α + 1) = [(α + β)/β] × [(α + β)/α] = (α + β)² / (αβ). Since α + β = p and αβ = q, this equals p²/q.")

add_q(94, "Very Hard",
      "If α and β are the zeros of the polynomial f(x) = x² + px + q, find a quadratic polynomial whose zeros are (α + β)² and (α - β)².",
      "x² - 2(p² - 2q)x + p²(p² - 4q)",
      "x² - 2(p² - q)x + p²(p² - 4q)",
      "x² - (2p² - 4q)x + p²(p² - 4q)",
      "x² - (p² + 4q)x + p²(p² - 4q)",
      "C",
      "(α + β)² = p². (α - β)² = (α + β)² - 4αβ = p² - 4q. Sum of new zeros = p² + (p² - 4q) = 2p² - 4q. Product of new zeros = p²(p² - 4q). Polynomial = x² - (2p² - 4q)x + p²(p² - 4q).")

add_q(95, "Very Hard",
      "If the polynomial f(x) = 2x⁴ - 3x³ - 3x² + 6x - 2 has √2 and -√2 as two of its zeros, find the remaining two zeros (NCERT Example 9).",
      "1 and 1/2",
      "-1 and -1/2",
      "2 and 1/2",
      "-2 and 1",
      "A",
      "(x - √2)(x + √2) = x² - 2. Dividing 2x⁴ - 3x³ - 3x² + 6x - 2 by (x² - 2) yields 2x² - 3x + 1 = (2x - 1)(x - 1) = 0. Thus the remaining zeros are x = 1 and x = 1/2.")

add_q(96, "Very Hard",
      "Find all the zeros of the polynomial 2x⁴ - 2x³ - 7x² + 3x + 6 if two of its zeros are -√(3/2) and √(3/2).",
      "2 and -1",
      "-2 and 1",
      "1 and 3",
      "-1 and -3",
      "A",
      "(x - √(3/2))(x + √(3/2)) = x² - 3/2 = (2x² - 3)/2. Dividing 2x⁴ - 2x³ - 7x² + 3x + 6 by (2x² - 3) gives x² - x - 2 = (x - 2)(x + 1) = 0. The other zeros are x = 2 and x = -1.")

add_q(97, "Very Hard",
      "If α, β, γ are the zeros of x³ - 7x + 6, find the value of α² + β² + γ².",
      "14",
      "49",
      "0",
      "7",
      "A",
      "For x³ + 0x² - 7x + 6: α + β + γ = 0, αβ + βγ + γα = -7. (α + β + γ)² = α² + β² + γ² + 2(αβ + βγ + γα) => 0 = α² + β² + γ² + 2(-7) => α² + β² + γ² = 14.")

add_q(98, "Very Hard",
      "If α and β are the zeros of the polynomial x² - 4x + 1, find the value of 1/(α + β) + 1/(αβ) + α³ + β³.",
      "53.25",
      "52.25",
      "54.25",
      "55.25",
      "A",
      "α + β = 4, αβ = 1. α³ + β³ = (α + β)³ - 3αβ(α + β) = 4³ - 3(1)(4) = 64 - 12 = 52. Then 1/(α + β) + 1/(αβ) + (α³ + β³) = 1/4 + 1/1 + 52 = 0.25 + 1 + 52 = 53.25.")

add_q(99, "Very Hard",
      "If the zeros of the cubic polynomial x³ - 3x² + x + 1 are a - b, a, a + b, find the values of a and b (NCERT Optional Exercise).",
      "a = 1, b = ±√2",
      "a = -1, b = ±√2",
      "a = 1, b = ±2",
      "a = 2, b = ±1",
      "A",
      "Sum of zeros = (a - b) + a + (a + b) = 3a = -(-3)/1 = 3 => a = 1. Product of zeros = (a - b)(a)(a + b) = a(a² - b²) = -1. Since a = 1: 1(1 - b²) = -1 => 1 - b² = -1 => b² = 2 => b = ±√2.")

add_q(100, "Very Hard",
      "If two zeros of the polynomial x⁴ - 6x³ - 26x² + 138x - 35 are 2 ± √3, find the other zeros (NCERT Optional Exercise).",
      "7 and -5",
      "-7 and 5",
      "7 and 5",
      "-7 and -5",
      "A",
      "[x - (2 + √3)][x - (2 - √3)] = (x - 2)² - 3 = x² - 4x + 1. Dividing x⁴ - 6x³ - 26x² + 138x - 35 by (x² - 4x + 1) yields x² - 2x - 35 = (x - 7)(x + 5) = 0. Therefore, the remaining zeros are 7 and -5.")

print(f"Total questions generated: {len(questions)}")
diff_count = {}
for q in questions:
    d = q['difficulty']
    diff_count[d] = diff_count.get(d, 0) + 1
print("Tier distribution:", diff_count)

js_content = f"""/* Elite Classes — Modular Test Series: Class 10 Mathematics Chapter 2
   Polynomials (100 Questions Exhaustive Master Assessment)
   Difficulty Breakdown:
   - 50 Easy Questions (Q1 to Q50)
   - 10 Medium Questions (Q51 to Q60)
   - 10 Hard Questions (Q61 to Q70)
   - 20 Tricky Questions (Q71 to Q90)
   - 10 Very Hard / Olympiad Level Questions (Q91 to Q100)
*/

const Class10MathematicsChapter2FullBank = {{
    id: 'ts_c10_math_ch2',
    title: 'Chapter 2: Polynomials Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 2 (Polynomials). Includes geometrical meaning of zeros, parabolas, relationship between zeros and coefficients, cubic polynomials, and visual graph interpretations.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter2FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter2FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter2_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter2_mathematics.js")
