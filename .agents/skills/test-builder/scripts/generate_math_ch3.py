# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 3: Pair of Linear Equations in Two Variables
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
        "id": f"ts_c10_math_ch3_q{q_num}",
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

SVG_INTERSECTING = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="160" x2="370" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="160" y1="220" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="164" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="165" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <!-- Line 1: y = x - 2 -->
  <line x1="70" y1="210" x2="330" y2="50" stroke="#2563eb" stroke-width="2.5"/>
  <text x="335" y="55" font-size="11" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">L₁</text>
  <!-- Line 2: y = -x + 6 -->
  <line x1="70" y1="50" x2="330" y2="210" stroke="#dc2626" stroke-width="2.5"/>
  <text x="335" y="215" font-size="11" font-family="sans-serif" fill="#b91c1c" font-weight="bold">L₂</text>
  <!-- Intersection Point P(4, 2) -->
  <circle cx="200" cy="130" r="5" fill="#047857"/>
  <text x="210" y="125" font-size="12" font-family="sans-serif" fill="#065f46" font-weight="bold">P(x, y) [Unique Solution]</text>
</svg>"""

SVG_PARALLEL = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="160" x2="370" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="160" y1="220" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="164" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="165" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <!-- Parallel Lines -->
  <line x1="60" y1="130" x2="340" y2="50" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="345" y="55" font-size="11" font-family="sans-serif" fill="#6d28d9" font-weight="bold">L₁: a₁x + b₁y + c₁ = 0</text>
  <line x1="60" y1="200" x2="340" y2="120" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="345" y="125" font-size="11" font-family="sans-serif" fill="#6d28d9" font-weight="bold">L₂: a₂x + b₂y + c₂ = 0</text>
  <text x="140" y="180" font-size="12" font-family="sans-serif" fill="#b91c1c" font-weight="bold">Parallel Lines: No Solution (Inconsistent)</text>
</svg>"""

SVG_COINCIDENT = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="150" x2="370" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="160" y1="220" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="154" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="165" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <!-- Single overlapping line with dashes -->
  <line x1="60" y1="200" x2="340" y2="40" stroke="#059669" stroke-width="4"/>
  <line x1="60" y1="200" x2="340" y2="40" stroke="#fbbf24" stroke-width="2" stroke-dasharray="8 6"/>
  <text x="170" y="70" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold">Coincident Lines (L₁ ≡ L₂)</text>
  <text x="170" y="90" font-size="11" font-family="sans-serif" fill="#475569">Infinitely many common solutions</text>
</svg>"""

SVG_SHADED_TRIANGLE = """<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="180" x2="370" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="160" y1="220" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="375" y="184" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">X</text>
  <text x="165" y="25" font-size="12" font-family="sans-serif" fill="#475569" font-weight="bold">Y</text>
  <!-- Shaded polygon: (-1,0), (4,0), (2,3) -->
  <polygon points="110,180 320,180 220,70" fill="rgba(37, 99, 235, 0.25)" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="60" y1="235" x2="280" y2="10" stroke="#2563eb" stroke-width="2"/>
  <line x1="360" y1="220" x2="160" y2="20" stroke="#dc2626" stroke-width="2"/>
  <circle cx="110" cy="180" r="4" fill="#1e40af"/>
  <text x="80" y="200" font-size="11" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">(-1, 0)</text>
  <circle cx="320" cy="180" r="4" fill="#1e40af"/>
  <text x="315" y="200" font-size="11" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">(4, 0)</text>
  <circle cx="220" cy="70" r="4" fill="#b91c1c"/>
  <text x="225" y="65" font-size="11" font-family="sans-serif" fill="#991b1b" font-weight="bold">(2, 3)</text>
  <text x="180" y="150" font-size="12" font-family="sans-serif" fill="#1e40af" font-weight="bold">Shaded Δ Region</text>
</svg>"""

# -------------------------------------------------------------------------
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "The general form of a linear equation in two variables x and y is:",
      "ax² + bx + c = 0",
      "ax + by + c = 0, where a, b, c are real numbers and a² + b² ≠ 0",
      "ax + by² + c = 0",
      "axy + b = 0",
      "B",
      "An equation which can be put in the form ax + by + c = 0, where a, b and c are real numbers and a and b are not both zero (a² + b² ≠ 0), is called a linear equation in two variables.")

add_q(2, "Easy",
      "Geometrically, every solution (x, y) of a linear equation ax + by + c = 0 corresponds to a:",
      "Point on the parabola representing the equation",
      "Point on the line representing the equation",
      "Center of a circle",
      "Point only in the first quadrant",
      "B",
      "Every solution of the equation is a point on the line representing it in the Cartesian plane.")

add_q(3, "Easy",
      "A pair of linear equations in two variables which has no solution is called:",
      "A consistent pair of linear equations",
      "An inconsistent pair of linear equations",
      "A dependent pair of linear equations",
      "A coincident system",
      "B",
      "By definition in NCERT Section 3.2, a pair of linear equations which has no common solution is called an inconsistent pair.")

add_q(4, "Easy",
      "A pair of linear equations in two variables which has at least one solution is called:",
      "An inconsistent pair",
      "A consistent pair",
      "A divergent pair",
      "An empty system",
      "B",
      "A pair of linear equations which has a solution (either unique or infinitely many) is called a consistent pair of linear equations.")

add_q(5, "Easy",
      "In the diagram below showing two straight lines L₁ and L₂ intersecting at point P(x, y), what type of solution does the system possess?",
      "No solution",
      "Infinitely many solutions",
      "A unique solution",
      "Exactly two solutions",
      "C",
      "Two lines intersecting at a single point have exactly one common point, representing a unique solution.",
      SVG_INTERSECTING)

add_q(6, "Easy",
      "For a pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the lines intersect in a single point if:",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁/b₁ = a₂/b₂",
      "A",
      "If a₁/a₂ ≠ b₁/b₂, the lines intersect at exactly one point and the pair has a unique solution.")

add_q(7, "Easy",
      "For a pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the lines are coincident (overlapping) if:",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁ b₁ = a₂ b₂",
      "B",
      "If a₁/a₂ = b₁/b₂ = c₁/c₂, the two lines coincide and there are infinitely many solutions.")

add_q(8, "Easy",
      "For a pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the lines are parallel and have no solution if:",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
      "a₁/a₂ + b₁/b₂ = 0",
      "C",
      "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel and never intersect, meaning the system has no solution (inconsistent).")

add_q(9, "Easy",
      "In the diagram below, two parallel lines never meet anywhere in the plane. What is this pair of linear equations called?",
      "Consistent with unique solution",
      "Consistent and dependent",
      "Inconsistent pair of linear equations",
      "Coincident pair",
      "C",
      "Parallel lines do not intersect at any point; hence the system has no solution and is called inconsistent.",
      SVG_PARALLEL)

add_q(10, "Easy",
      "In the diagram below, line L₁ lies exactly on top of line L₂. How many common solutions exist?",
      "Zero solutions",
      "Exactly one solution",
      "Infinitely many solutions",
      "Exactly two solutions",
      "C",
      "Coincident lines share every single point along their length, yielding infinitely many solutions.",
      SVG_COINCIDENT)

add_q(11, "Easy",
      "A dependent pair of linear equations is always:",
      "Inconsistent",
      "Consistent with infinitely many solutions",
      "Having exactly 2 solutions",
      "Parallel to the X-axis",
      "B",
      "A pair of linear equations which are equivalent (coincident lines) is dependent and consistent, possessing infinitely many solutions.")

add_q(12, "Easy",
      "The lines representing 2x + 3y - 9 = 0 and 4x + 6y - 18 = 0 are:",
      "Intersecting at a single point",
      "Coincident",
      "Parallel",
      "Perpendicular to the X-axis",
      "B",
      "a₁/a₂ = 2/4 = 1/2; b₁/b₂ = 3/6 = 1/2; c₁/c₂ = -9/-18 = 1/2. Since a₁/a₂ = b₁/b₂ = c₁/c₂, the lines are coincident.")

add_q(13, "Easy",
      "The lines representing x + 2y - 4 = 0 and 2x + 4y - 12 = 0 are:",
      "Intersecting",
      "Coincident",
      "Parallel",
      "Passing through origin",
      "C",
      "a₁/a₂ = 1/2; b₁/b₂ = 2/4 = 1/2; c₁/c₂ = -4/-12 = 1/3. Here a₁/a₂ = b₁/b₂ ≠ c₁/c₂, so the lines are parallel.")

add_q(14, "Easy",
      "The lines representing x - 2y = 0 and 3x + 4y - 20 = 0 are:",
      "Intersecting at a unique point",
      "Parallel",
      "Coincident",
      "Identical to the Y-axis",
      "A",
      "a₁/a₂ = 1/3, b₁/b₂ = -2/4 = -1/2. Since a₁/a₂ ≠ b₁/b₂, the lines intersect at exactly one point (4, 2).")

add_q(15, "Easy",
      "Check the consistency of the pair 5x - 4y + 8 = 0 and 7x + 6y - 9 = 0 (NCERT Ex 3.1 Q2(i)).",
      "Intersecting at one point (Consistent)",
      "Parallel (Inconsistent)",
      "Coincident (Dependent)",
      "Cannot be determined",
      "A",
      "a₁/a₂ = 5/7 and b₁/b₂ = -4/6 = -2/3. Since 5/7 ≠ -2/3, the lines intersect at one point and are consistent.")

add_q(16, "Easy",
      "Check the consistency of 9x + 3y + 12 = 0 and 18x + 6y + 24 = 0 (NCERT Ex 3.1 Q2(ii)).",
      "Intersecting",
      "Coincident (Consistent & Dependent)",
      "Parallel (Inconsistent)",
      "No solution",
      "B",
      "a₁/a₂ = 9/18 = 1/2, b₁/b₂ = 3/6 = 1/2, c₁/c₂ = 12/24 = 1/2. They are coincident with infinitely many solutions.")

add_q(17, "Easy",
      "Check the consistency of 6x - 3y + 10 = 0 and 2x - y + 9 = 0 (NCERT Ex 3.1 Q2(iii)).",
      "Intersecting",
      "Coincident",
      "Parallel (Inconsistent)",
      "Consistent with unique solution",
      "C",
      "a₁/a₂ = 6/2 = 3, b₁/b₂ = -3/-1 = 3, c₁/c₂ = 10/9. Here a₁/a₂ = b₁/b₂ ≠ c₁/c₂, so lines are parallel and inconsistent.")

add_q(18, "Easy",
      "Solve the pair by substitution: x + y = 14 and x - y = 4 (NCERT Ex 3.2 Q1(i)).",
      "x = 9, y = 5",
      "x = 5, y = 9",
      "x = 8, y = 6",
      "x = 10, y = 4",
      "A",
      "Adding both equations gives 2x = 18 => x = 9. Substituting x = 9 gives 9 + y = 14 => y = 5.")

add_q(19, "Easy",
      "Solve the pair: s - t = 3 and s/3 + t/2 = 6 (NCERT Ex 3.2 Q1(ii)).",
      "s = 9, t = 6",
      "s = 6, t = 9",
      "s = 8, t = 5",
      "s = 7, t = 4",
      "A",
      "s = t + 3. Multiplying second equation by 6: 2s + 3t = 36. Substituting s: 2(t + 3) + 3t = 36 => 5t + 6 = 36 => 5t = 30 => t = 6, then s = 6 + 3 = 9.")

add_q(20, "Easy",
      "Solve the pair by elimination: x + y = 5 and 2x - 3y = 4 (NCERT Ex 3.3 Q1(i)).",
      "x = 19/5, y = 6/5",
      "x = 6/5, y = 19/5",
      "x = 3, y = 2",
      "x = 4, y = 1",
      "A",
      "Multiply first equation by 2: 2x + 2y = 10. Subtract (2x - 3y = 4) gives 5y = 6 => y = 6/5. Then x = 5 - 6/5 = 19/5.")

add_q(21, "Easy",
      "Solve the pair: 3x + 4y = 10 and 2x - 2y = 2 (NCERT Ex 3.3 Q1(ii)).",
      "x = 2, y = 1",
      "x = 1, y = 2",
      "x = 3, y = 1/2",
      "x = 0, y = 5/2",
      "A",
      "Multiply second equation by 2: 4x - 4y = 4. Add to first equation: 7x = 14 => x = 2. Then 2(2) - 2y = 2 => 4 - 2y = 2 => 2y = 2 => y = 1.")

add_q(22, "Easy",
      "Solve the pair: 3x - 5y - 4 = 0 and 9x = 2y + 7 (NCERT Ex 3.3 Q1(iii)).",
      "x = 9/13, y = -5/13",
      "x = -9/13, y = 5/13",
      "x = 5/13, y = 9/13",
      "x = 1, y = -1/5",
      "A",
      "Equations: 3x - 5y = 4 and 9x - 2y = 7. Multiply first by 3: 9x - 15y = 12. Subtract: -13y = 5 => y = -5/13. Then 3x = 4 + 5(-5/13) = 27/13 => x = 9/13.")

add_q(23, "Easy",
      "Solve the pair: x/2 + 2y/3 = -1 and x - y/3 = 3 (NCERT Ex 3.3 Q1(iv)).",
      "x = 2, y = -3",
      "x = -2, y = 3",
      "x = 3, y = -2",
      "x = 1, y = -1",
      "A",
      "Eq 1: 3x + 4y = -6. Eq 2: 3x - y = 9. Subtract Eq 2 from Eq 1: 5y = -15 => y = -3. Then 3x - (-3) = 9 => 3x = 6 => x = 2.")

add_q(24, "Easy",
      "The larger of two supplementary angles exceeds the smaller by 18°. What are the angles (NCERT Ex 3.2 Q3(ii))?",
      "99° and 81°",
      "100° and 80°",
      "108° and 72°",
      "95° and 77°",
      "A",
      "x + y = 180° and x - y = 18°. Adding them gives 2x = 198° => x = 99°. Then y = 180° - 99° = 81°.")

add_q(25, "Easy",
      "The coach of a cricket team buys 7 bats and 6 balls for Rs 3800. Later, she buys 3 bats and 5 balls for Rs 1750. What is the cost of each bat and each ball (NCERT Ex 3.2 Q3(iii))?",
      "Bat = Rs 500, Ball = Rs 50",
      "Bat = Rs 400, Ball = Rs 60",
      "Bat = Rs 550, Ball = Rs 40",
      "Bat = Rs 450, Ball = Rs 70",
      "A",
      "7x + 6y = 3800 and 3x + 5y = 1750. Multiplying Eq 1 by 5 and Eq 2 by 6: 35x + 30y = 19000, 18x + 30y = 10500. Subtracting: 17x = 8500 => x = 500. Then 3(500) + 5y = 1750 => 5y = 250 => y = 50.")

add_q(26, "Easy",
      "The taxi charges in a city consist of a fixed charge together with the charge for the distance covered. For 10 km, the charge is Rs 105, and for 15 km, it is Rs 155. What are the fixed charge and charge per km (NCERT Ex 3.2 Q3(iv))?",
      "Fixed = Rs 5, Per km = Rs 10",
      "Fixed = Rs 10, Per km = Rs 5",
      "Fixed = Rs 15, Per km = Rs 8",
      "Fixed = Rs 0, Per km = Rs 10.5",
      "A",
      "x + 10y = 105 and x + 15y = 155. Subtracting gives 5y = 50 => y = 10 (per km). Then x + 100 = 105 => x = 5 (fixed charge).")

add_q(27, "Easy",
      "A fraction becomes 9/11 if 2 is added to both numerator and denominator. If 3 is added to both, it becomes 5/6. What is the fraction (NCERT Ex 3.2 Q3(v))?",
      "7/9",
      "5/7",
      "3/5",
      "9/11",
      "A",
      "(x + 2)/(y + 2) = 9/11 => 11x - 9y = -4. (x + 3)/(y + 3) = 5/6 => 6x - 5y = -3. Solving yields x = 7, y = 9. Fraction is 7/9.")

add_q(28, "Easy",
      "Five years hence, the age of Jacob will be three times that of his son. Five years ago, Jacob's age was seven times that of his son. What are their present ages (NCERT Ex 3.2 Q3(vi))?",
      "Jacob = 40 years, Son = 10 years",
      "Jacob = 45 years, Son = 15 years",
      "Jacob = 35 years, Son = 10 years",
      "Jacob = 50 years, Son = 20 years",
      "A",
      "x + 5 = 3(y + 5) => x - 3y = 10. Also x - 5 = 7(y - 5) => x - 7y = -30. Subtracting gives 4y = 40 => y = 10. Then x = 3(10) + 10 = 40 years.")

add_q(29, "Easy",
      "If we add 1 to the numerator and subtract 1 from the denominator, a fraction reduces to 1. It becomes 1/2 if we only add 1 to the denominator. What is the fraction (NCERT Ex 3.3 Q2(i))?",
      "3/5",
      "2/5",
      "3/7",
      "4/5",
      "A",
      "(x + 1)/(y - 1) = 1 => x - y = -2. x/(y + 1) = 1/2 => 2x - y = 1. Subtracting gives x = 3, then y = 5. Fraction is 3/5.")

add_q(30, "Easy",
      "Five years ago, Nuri was thrice as old as Sonu. Ten years later, Nuri will be twice as old as Sonu. How old are Nuri and Sonu (NCERT Ex 3.3 Q2(ii))?",
      "Nuri = 50 years, Sonu = 20 years",
      "Nuri = 40 years, Sonu = 15 years",
      "Nuri = 60 years, Sonu = 25 years",
      "Nuri = 45 years, Sonu = 20 years",
      "A",
      "x - 5 = 3(y - 5) => x - 3y = -10. x + 10 = 2(y + 10) => x - 2y = 10. Subtracting gives y = 20, so x = 50 years.")

add_q(31, "Easy",
      "The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number (NCERT Ex 3.3 Q2(iii)).",
      "18",
      "27",
      "36",
      "45",
      "A",
      "Let tens digit be x and units be y. x + y = 9. Original number = 10x + y, reversed = 10y + x. 9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x = 11y => 8x = y. Since x + y = 9 => x + 8x = 9 => 9x = 9 => x = 1, y = 8. The number is 18.")

add_q(32, "Easy",
      "Meena went to a bank to withdraw Rs 2000. She asked the cashier to give her Rs 50 and Rs 100 notes only. Meena got 25 notes in all. How many notes of Rs 50 and Rs 100 did she receive (NCERT Ex 3.3 Q2(iv))?",
      "10 notes of Rs 50 and 15 notes of Rs 100",
      "15 notes of Rs 50 and 10 notes of Rs 100",
      "12 notes of Rs 50 and 13 notes of Rs 100",
      "8 notes of Rs 50 and 17 notes of Rs 100",
      "A",
      "x + y = 25. 50x + 100y = 2000 => x + 2y = 40. Subtracting gives y = 15. Then x = 25 - 15 = 10.")

add_q(33, "Easy",
      "A lending library has a fixed charge for the first three days and an additional charge for each day thereafter. Saritha paid Rs 27 for a book kept for seven days, while Susy paid Rs 21 for the book she kept for five days. Find the fixed charge and charge per extra day (NCERT Ex 3.3 Q2(v)).",
      "Fixed = Rs 15, Extra per day = Rs 3",
      "Fixed = Rs 12, Extra per day = Rs 4",
      "Fixed = Rs 10, Extra per day = Rs 3",
      "Fixed = Rs 14, Extra per day = Rs 2",
      "A",
      "Let fixed charge be x and per day charge be y. 7 days means 4 extra days: x + 4y = 27. 5 days means 2 extra days: x + 2y = 21. Subtracting gives 2y = 6 => y = 3. Then x + 2(3) = 21 => x = 15.")

add_q(34, "Easy",
      "If the pair of linear equations 2x + 3y = 7 and (k - 1)x + (k + 2)y = 3k has infinitely many solutions, find k.",
      "7",
      "5",
      "3",
      "9",
      "A",
      "For infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/(k - 1) = 3/(k + 2) = 7/(3k). From 2/(k - 1) = 3/(k + 2) => 2k + 4 = 3k - 3 => k = 7. Checking 7/(3*7) = 1/3 and 2/(7-1) = 2/6 = 1/3, which matches.")

add_q(35, "Easy",
      "For what value of k will the equations x + 2y = 5 and 3x + ky + 15 = 0 have NO solution?",
      "6",
      "-6",
      "3",
      "2",
      "A",
      "For no solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ => 1/3 = 2/k => k = 6. Check c₁/c₂ = -5/15 = -1/3 ≠ 1/3.")

add_q(36, "Easy",
      "For what value of p will the equations 4x + py + 8 = 0 and 2x + 2y + 2 = 0 have a UNIQUE solution (NCERT Example 15)?",
      "p ≠ 4",
      "p = 4",
      "p = 2",
      "p ≠ 2",
      "A",
      "For a unique solution, a₁/a₂ ≠ b₁/b₂ => 4/2 ≠ p/2 => 2 ≠ p/2 => p ≠ 4. Therefore, for any value of p other than 4, the pair has a unique solution.")

add_q(37, "Easy",
      "What is the point of intersection of the line x = 3 with the line y = -2?",
      "(3, -2)",
      "(-2, 3)",
      "(3, 2)",
      "(0, 0)",
      "A",
      "The intersection of vertical line x = 3 and horizontal line y = -2 is precisely (3, -2).")

add_q(38, "Easy",
      "What is the equation of the X-axis?",
      "x = 0",
      "y = 0",
      "x + y = 0",
      "y = 1",
      "B",
      "At every point on the X-axis, the y-coordinate is 0; hence its equation is y = 0.")

add_q(39, "Easy",
      "What is the equation of the Y-axis?",
      "x = 0",
      "y = 0",
      "x = 1",
      "x - y = 0",
      "A",
      "At every point on the Y-axis, the x-coordinate is 0; hence its equation is x = 0.")

add_q(40, "Easy",
      "Does the point (2, 3) satisfy the equation 2x + 3y = 13?",
      "Yes, 2(2) + 3(3) = 4 + 9 = 13",
      "No, 2(2) + 3(3) = 12",
      "Yes, only if x is negative",
      "No, it lies on the Y-axis",
      "A",
      "Substituting x = 2, y = 3: 2(2) + 3(3) = 4 + 9 = 13. LHS = RHS, so (2, 3) is a solution.")

add_q(41, "Easy",
      "If x = a, y = b is the solution of the equations x - y = 2 and x + y = 4, then the values of a and b are, respectively:",
      "3 and 1",
      "1 and 3",
      "4 and 2",
      "-1 and -3",
      "A",
      "Adding both equations: 2x = 6 => x = 3. Then 3 - y = 2 => y = 1. So a = 3, b = 1.")

add_q(42, "Easy",
      "The pair of equations y = 0 and y = -7 has:",
      "One solution",
      "Two solutions",
      "Infinitely many solutions",
      "No solution",
      "D",
      "y = 0 and y = -7 are two distinct horizontal lines parallel to each other. They never intersect, so there is no solution.")

add_q(43, "Easy",
      "The pair of equations x = a and y = b graphically represents lines which are:",
      "Parallel",
      "Intersecting at (b, a)",
      "Coincident",
      "Intersecting at (a, b)",
      "D",
      "x = a is a vertical line and y = b is a horizontal line. They intersect perpendicularly at the point (a, b).")

add_q(44, "Easy",
      "In the shaded triangular region shown below between lines and the X-axis, what are the coordinates of the vertices?",
      "(-1, 0), (4, 0), and (2, 3)",
      "(0, -1), (0, 4), and (3, 2)",
      "(1, 0), (-4, 0), and (2, 3)",
      "(0, 0), (4, 0), and (0, 3)",
      "A",
      "The vertices are the x-intercepts of the two lines (-1, 0) and (4, 0) along with their point of intersection (2, 3).",
      SVG_SHADED_TRIANGLE)

add_q(45, "Easy",
      "If a pair of linear equations is consistent, then the lines representing them will be:",
      "Always parallel",
      "Always coincident",
      "Intersecting or coincident",
      "Always intersecting",
      "C",
      "A system is consistent if it has at least one solution. This occurs when lines intersect (1 solution) or coincide (infinitely many solutions).")

add_q(46, "Easy",
      "If 2x + 3y = 11 and 2x - 4y = -24, find the value of m for which y = mx + 3 (NCERT Ex 3.2 Q2).",
      "m = -1",
      "m = 1",
      "m = 2",
      "m = -2",
      "A",
      "Subtracting equations gives 7y = 35 => y = 5. Then 2x + 15 = 11 => 2x = -4 => x = -2. Substituting into y = mx + 3: 5 = m(-2) + 3 => -2m = 2 => m = -1.")

add_q(47, "Easy",
      "Which method replaces one variable in terms of the other from one equation into the second equation?",
      "Elimination method",
      "Substitution method",
      "Matrix inversion method",
      "Determinant method",
      "B",
      "The substitution method involves expressing one variable in terms of the other and substituting that expression into the other equation.")

add_q(48, "Easy",
      "In the elimination method, what is the primary initial objective?",
      "To multiply both equations by zero",
      "To make the coefficients of one variable numerically equal so that adding or subtracting eliminates that variable",
      "To set both equations equal to 1",
      "To find the slope of both lines",
      "B",
      "The primary step in the elimination method is making the coefficients of one variable equal by multiplication, allowing it to be eliminated upon addition or subtraction.")

add_q(49, "Easy",
      "If 217x + 131y = 913 and 131x + 217y = 827, what is the value of x + y?",
      "5",
      "6",
      "7",
      "8",
      "A",
      "Adding both equations: 348x + 348y = 1740 => 348(x + y) = 1740 => x + y = 1740 / 348 = 5.")

add_q(50, "Easy",
      "For the same system 217x + 131y = 913 and 131x + 217y = 827, what is the value of x - y?",
      "1",
      "2",
      "3",
      "-1",
      "A",
      "Subtracting the second equation from the first: 86x - 86y = 86 => 86(x - y) = 86 => x - y = 1.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "Find the values of a and b for which the pair of equations 2x + 3y = 7 and (a - b)x + (a + b)y = 3a + b - 2 have infinitely many solutions (NCERT Example 16).",
      "a = 5, b = 1",
      "a = 1, b = 5",
      "a = -5, b = -1",
      "a = 4, b = 2",
      "A",
      "2/(a - b) = 3/(a + b) = 7/(3a + b - 2). From 2/(a-b) = 3/(a+b): 2a + 2b = 3a - 3b => a - 5b = 0. From 3/(a+b) = 7/(3a+b-2): 9a + 3b - 6 = 7a + 7b => 2a - 4b = 6 => a - 2b = 3. Subtracting: 3b = 3 => b = 1, then a = 5.")

add_q(52, "Medium",
      "For which value of k will the pair of equations 3x + y = 1 and (2k - 1)x + (k - 1)y = 2k + 1 have NO solution (NCERT Ex 3.2 Q2(ii))?",
      "k = 2",
      "k = -2",
      "k = 1",
      "k = 3",
      "A",
      "Condition for no solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂. So 3/(2k - 1) = 1/(k - 1) => 3k - 3 = 2k - 1 => k = 2. Check: 1/(2k+1) = 1/5 ≠ 1/(2-1) = 1.")

add_q(53, "Medium",
      "Half the perimeter of a rectangular garden, whose length is 4 m more than its width, is 36 m. Find the dimensions of the garden (NCERT Ex 3.1 Q5).",
      "Length = 20 m, Width = 16 m",
      "Length = 24 m, Width = 12 m",
      "Length = 22 m, Width = 14 m",
      "Length = 18 m, Width = 18 m",
      "A",
      "Let length be l and width be w. Half perimeter: l + w = 36. Given l = w + 4. Substituting: (w + 4) + w = 36 => 2w = 32 => w = 16 m, then l = 20 m.")

add_q(54, "Medium",
      "Determine the area of the triangle formed by the lines x - y + 1 = 0, 3x + 2y - 12 = 0 and the X-axis (NCERT Ex 3.1 Q7).",
      "7.5 sq units",
      "15 sq units",
      "6 sq units",
      "9 sq units",
      "A",
      "Line 1 crosses X-axis at (-1, 0). Line 2 crosses X-axis at (4, 0). Length of base = 4 - (-1) = 5 units. Intersection point: x - y = -1, 3x + 2y = 12. Multiplying Eq 1 by 2: 2x - 2y = -2. Adding gives 5x = 10 => x = 2, so y = 3. Height = 3. Area = 1/2 × base × height = 1/2 × 5 × 3 = 7.5 sq units.")

add_q(55, "Medium",
      "Solve for x and y: 152x - 378y = -74 and -378x + 152y = -604 (NCERT Optional Exercise).",
      "x = 2, y = 1",
      "x = 1, y = 2",
      "x = 3, y = 2",
      "x = -2, y = -1",
      "A",
      "Adding both: -226x - 226y = -678 => x + y = 3. Subtracting Eq 2 from Eq 1: 530x - 530y = 530 => x - y = 1. Adding gives 2x = 4 => x = 2, then y = 1.")

add_q(56, "Medium",
      "A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Find the speed of the stream and that of the boat in still water (NCERT Example 19).",
      "Boat = 8 km/h, Stream = 3 km/h",
      "Boat = 9 km/h, Stream = 2 km/h",
      "Boat = 10 km/h, Stream = 4 km/h",
      "Boat = 7 km/h, Stream = 3 km/h",
      "A",
      "Let speed of boat be x and stream be y. 30/(x - y) + 44/(x + y) = 10 and 40/(x - y) + 55/(x + y) = 13. Let u = 1/(x - y), v = 1/(x + y). 30u + 44v = 10 and 40u + 55v = 13. Solving gives u = 1/5, v = 1/11. Thus x - y = 5 and x + y = 11 => 2x = 16 => x = 8 km/h, y = 3 km/h.")

add_q(57, "Medium",
      "2 women and 5 men can together finish an embroidery work in 4 days, while 3 women and 6 men can finish it in 3 days. Find the time taken by 1 woman alone to finish the work.",
      "18 days",
      "36 days",
      "24 days",
      "12 days",
      "A",
      "Let 1 woman take x days and 1 man take y days. 2/x + 5/y = 1/4 and 3/x + 6/y = 1/3. Let u = 1/x, v = 1/y: 2u + 5v = 1/4, 3u + 6v = 1/3 => u + 2v = 1/9. Solving gives u = 1/18, v = 1/36. Hence 1 woman alone takes 18 days (and 1 man takes 36 days).")

add_q(58, "Medium",
      "Roohi travels 300 km to her home partly by train and partly by bus. She takes 4 hours if she travels 60 km by train and the remaining by bus. If she travels 100 km by train and the remaining by bus, she takes 10 minutes longer. Find the speed of the train and the bus (NCERT Ex 3.6).",
      "Train = 60 km/h, Bus = 80 km/h",
      "Train = 80 km/h, Bus = 60 km/h",
      "Train = 50 km/h, Bus = 70 km/h",
      "Train = 60 km/h, Bus = 90 km/h",
      "A",
      "60/u + 240/v = 4 and 100/u + 200/v = 25/6. Dividing first by 4: 15/u + 60/v = 1. Solving gives 1/u = 1/60 => u = 60 km/h (train), and 1/v = 1/80 => v = 80 km/h (bus).")

add_q(59, "Medium",
      "For which value of k do the equations kx + 3y = k - 3 and 12x + ky = k have infinitely many solutions?",
      "k = 6",
      "k = -6",
      "k = 3",
      "k = 12",
      "A",
      "k/12 = 3/k = (k - 3)/k. From k/12 = 3/k: k² = 36 => k = ±6. If k = 6: 6/12 = 1/2, 3/6 = 1/2, (6-3)/6 = 3/6 = 1/2 (all equal). If k = -6: 3/-6 = -1/2 but (-6-3)/-6 = -9/-6 = 3/2 (not equal). Therefore, only k = 6 gives infinitely many solutions.")

add_q(60, "Medium",
      "If 47x + 31y = 18 and 31x + 47y = 60, find the value of x + y.",
      "1",
      "2",
      "-1",
      "0",
      "A",
      "Adding both equations: 78x + 78y = 78 => 78(x + y) = 78 => x + y = 1.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "Points A and B are 100 km apart on a highway. One car starts from A and another from B at the same time. If the cars travel in the same direction at different speeds, they meet in 5 hours. If they travel towards each other, they meet in 1 hour. What are the speeds of the two cars (NCERT Ex 3.5 Q4(iv))?",
      "60 km/h and 40 km/h",
      "70 km/h and 30 km/h",
      "65 km/h and 35 km/h",
      "55 km/h and 45 km/h",
      "A",
      "Let speeds be x and y (x > y). Same direction: 5(x - y) = 100 => x - y = 20. Opposite direction: 1(x + y) = 100 => x + y = 100. Adding gives 2x = 120 => x = 60 km/h, y = 40 km/h.")

add_q(62, "Hard",
      "The area of a rectangle gets reduced by 9 square units if its length is reduced by 5 units and breadth is increased by 3 units. If we increase the length by 3 units and the breadth by 2 units, the area increases by 67 square units. Find the dimensions of the rectangle (NCERT Ex 3.5 Q4(v)).",
      "Length = 17 units, Breadth = 9 units",
      "Length = 15 units, Breadth = 8 units",
      "Length = 18 units, Breadth = 10 units",
      "Length = 20 units, Breadth = 7 units",
      "A",
      "(x - 5)(y + 3) = xy - 9 => 3x - 5y = 6. (x + 3)(y + 2) = xy + 67 => 2x + 3y = 61. Multiplying Eq 1 by 3 and Eq 2 by 5: 9x - 15y = 18, 10x + 15y = 305. Adding: 19x = 323 => x = 17. Then 3(17) - 5y = 6 => 51 - 6 = 5y => y = 9.")

add_q(63, "Hard",
      "Solve the system of equations for x and y: ax + by = a - b and bx - ay = a + b (NCERT Optional Exercise).",
      "x = 1, y = -1",
      "x = -1, y = 1",
      "x = a, y = b",
      "x = 1, y = 1",
      "A",
      "Multiply Eq 1 by a: a²x + aby = a² - ab. Multiply Eq 2 by b: b²x - aby = ab + b². Adding them: (a² + b²)x = a² + b² => x = 1. Then a(1) + by = a - b => by = -b => y = -1.")

add_q(64, "Hard",
      "Solve for x and y: x/a + y/b = 2 and ax - by = a² - b² (NCERT Optional Exercise).",
      "x = a, y = b",
      "x = b, y = a",
      "x = a², y = b²",
      "x = 2a, y = 2b",
      "A",
      "From x/a + y/b = 2 => bx + ay = 2ab. Second equation: ax - by = a² - b² => by = ax - (a² - b²). Multiply first by a and second by b: abx + a²y = 2a²b, abx - b²y = a²b - b³. Subtracting: (a² + b²)y = a²b + b³ = b(a² + b²) => y = b. Then bx + ab = 2ab => bx = ab => x = a.")

add_q(65, "Hard",
      "Solve for x and y: (a - b)x + (a + b)y = a² - 2ab - b² and (a + b)(x + y) = a² + b² (NCERT Optional Exercise).",
      "x = a + b, y = -2ab/(a + b)",
      "x = a - b, y = 2ab/(a + b)",
      "x = a, y = b",
      "x = a², y = -b²",
      "A",
      "Second equation: (a + b)x + (a + b)y = a² + b². Subtract Eq 1 from Eq 2: [(a + b) - (a - b)]x = (a² + b²) - (a² - 2ab - b²) => 2bx = 2ab + 2b² = 2b(a + b) => x = a + b. Then (a + b)(a + b) + (a + b)y = a² + b² => (a + b)y = a² + b² - (a + b)² = -2ab => y = -2ab/(a + b).")

add_q(66, "Hard",
      "ABCD is a cyclic quadrilateral. Find the angles of the cyclic quadrilateral if ∠A = 4y + 20, ∠B = 3y - 5, ∠C = -4x, ∠D = -7x + 5 (NCERT Optional Exercise).",
      "∠A = 120°, ∠B = 70°, ∠C = 60°, ∠D = 110°",
      "∠A = 110°, ∠B = 80°, ∠C = 70°, ∠D = 100°",
      "∠A = 130°, ∠B = 60°, ∠C = 50°, ∠D = 120°",
      "∠A = 100°, ∠B = 90°, ∠C = 80°, ∠D = 90°",
      "A",
      "In a cyclic quadrilateral, opposite angles sum to 180°. ∠A + ∠C = 180° => 4y + 20 - 4x = 180 => -4x + 4y = 160 => -x + y = 40. ∠B + ∠D = 180° => 3y - 5 - 7x + 5 = 180 => -7x + 3y = 180. From first, y = x + 40. Substituting: -7x + 3(x + 40) = 180 => -4x + 120 = 180 => -4x = 60 => x = -15. Then y = -15 + 40 = 25. Thus: ∠A = 4(25) + 20 = 120°, ∠B = 3(25) - 5 = 70°, ∠C = -4(-15) = 60°, ∠D = -7(-15) + 5 = 110°.")

add_q(67, "Hard",
      "If (x₁ - x₂)² + (y₁ - y₂)² represents the square of distance between two points, under what condition do the two linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 represent the SAME straight line in coordinate space?",
      "a₁/a₂ = b₁/b₂ = c₁/c₂",
      "a₁ a₂ + b₁ b₂ = 0",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁ = a₂ and b₁ = b₂ only",
      "A",
      "Two linear equations represent the exact same line if and only if their corresponding coefficients and constant terms are proportional: a₁/a₂ = b₁/b₂ = c₁/c₂.")

add_q(68, "Hard",
      "Find the coordinates of the vertices of the triangle formed by the lines y = x, 3y = x, and x + y = 8.",
      "(0, 0), (4, 4), and (6, 2)",
      "(0, 0), (2, 6), and (4, 4)",
      "(1, 1), (3, 1), and (4, 4)",
      "(0, 0), (3, 3), and (5, 3)",
      "A",
      "Intersection of y = x and 3y = x is (0, 0). Intersection of y = x and x + y = 8 is 2x = 8 => x = 4, y = 4. Intersection of x = 3y and x + y = 8 is 3y + y = 8 => 4y = 8 => y = 2, so x = 6. Vertices are (0, 0), (4, 4), and (6, 2).")

add_q(69, "Hard",
      "The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits of the number differ by 2, how many such numbers exist (NCERT Example 13)?",
      "Two numbers (42 and 24)",
      "Only one number (42)",
      "Four numbers",
      "No such number exists",
      "A",
      "Let number be 10x + y. (10x + y) + (10y + x) = 11(x + y) = 66 => x + y = 6. Digits differ by 2: |x - y| = 2. Case 1: x - y = 2 => 2x = 8 => x = 4, y = 2 (number 42). Case 2: y - x = 2 => 2y = 8 => y = 4, x = 2 (number 24). There are two such numbers.")

add_q(70, "Hard",
      "If the system of equations 2x + 3y = 7 and 2ax + (a + b)y = 28 has infinitely many solutions, then the values of a and b are:",
      "a = 4, b = 8",
      "a = 2, b = 4",
      "a = 4, b = 4",
      "a = 8, b = 4",
      "A",
      "2/(2a) = 3/(a + b) = 7/28 = 1/4. 1/a = 1/4 => a = 4. Then 3/(4 + b) = 1/4 => 4 + b = 12 => b = 8.")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "Can a system of two linear equations in two variables have exactly two distinct solutions?",
      "Yes, if the lines are curved",
      "No, two straight lines can intersect at 1 point, coincide at infinitely many points, or never intersect (0 points)",
      "Yes, if the equations are perpendicular",
      "Yes, when a₁ a₂ = -1",
      "B",
      "Because straight lines can intersect in at most one point or be identical, a linear system can have 0, 1, or infinitely many solutions, but never exactly 2.")

add_q(72, "Tricky",
      "If a₁/a₂ = b₁/b₂ = c₁/c₂, is the system guaranteed to be consistent?",
      "No, it is inconsistent",
      "Yes, it is consistent with infinitely many solutions",
      "Yes, with exactly one solution",
      "It depends on the sign of c₁",
      "B",
      "By definition, coincident lines share all points, representing a consistent system with infinitely many solutions.")

add_q(73, "Tricky",
      "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, what is the graphical appearance of the lines?",
      "Intersecting at origin",
      "Two parallel lines with no point of intersection",
      "A single line",
      "Intersecting at right angles",
      "B",
      "When the slope is identical but intercepts differ, the lines are strictly parallel and non-intersecting.")

add_q(74, "Tricky",
      "What is the value of k for which the system kx - y = 2 and 6x - 2y = 3 has a UNIQUE solution?",
      "k = 3",
      "k ≠ 3",
      "k = 0",
      "k ≠ 0",
      "B",
      "Unique solution condition: a₁/a₂ ≠ b₁/b₂ => k/6 ≠ -1/-2 => k/6 ≠ 1/2 => k ≠ 3.")

add_q(75, "Tricky",
      "What is the value of k for which the system kx - y = 2 and 6x - 2y = 3 has NO solution?",
      "k = 3",
      "k ≠ 3",
      "k = -3",
      "k = 6",
      "A",
      "No solution condition: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ => k/6 = 1/2 ≠ 2/3. Since 1/2 ≠ 2/3 holds, k/6 = 1/2 gives k = 3.")

add_q(76, "Tricky",
      "Can the system kx - y = 2 and 6x - 2y = 3 EVER have infinitely many solutions for any real value of k?",
      "Yes, when k = 3",
      "No, because c₁/c₂ = 2/3 while b₁/b₂ = 1/2, so the constants ratio can never match the coefficients ratio",
      "Yes, when k = 0",
      "Yes, when k = 4",
      "B",
      "For infinite solutions, b₁/b₂ must equal c₁/c₂. Here 1/2 ≠ 2/3 (which is independent of k), so no value of k can yield infinitely many solutions.")

add_q(77, "Tricky",
      "The equation x = 5 is a line:",
      "Parallel to the X-axis at a distance of 5 units",
      "Parallel to the Y-axis at a distance of 5 units to the right of origin",
      "Passing through the origin",
      "Making an angle of 45° with the X-axis",
      "B",
      "x = 5 is a vertical line parallel to the Y-axis, situated 5 units to the right of the Y-axis.")

add_q(78, "Tricky",
      "The equation y = -3 represents a line:",
      "Parallel to the X-axis at a distance of 3 units below it",
      "Parallel to the Y-axis at a distance of 3 units to the left",
      "Passing through (3, 0)",
      "Coincident with the X-axis",
      "A",
      "y = -3 is a horizontal line parallel to the X-axis, located 3 units below the origin.")

add_q(79, "Tricky",
      "What is the solution of the pair of equations x + 2y = 0 and 3x + 4y = 0?",
      "x = 1, y = -1",
      "x = 0, y = 0",
      "x = 2, y = -1",
      "Infinitely many solutions",
      "B",
      "Here c₁ = c₂ = 0 (homogeneous system). Since a₁/a₂ = 1/3 ≠ b₁/b₂ = 2/4 = 1/2, there is a unique solution, which must be the origin (0, 0).")

add_q(80, "Tricky",
      "Under what condition does a homogeneous system a₁x + b₁y = 0 and a₂x + b₂y = 0 have non-zero solutions?",
      "a₁/a₂ ≠ b₁/b₂",
      "a₁/a₂ = b₁/b₂",
      "a₁ b₁ = 1",
      "a₂ b₂ = 1",
      "B",
      "When a₁/a₂ = b₁/b₂, the two lines coincide through the origin, providing infinitely many non-zero solutions.")

add_q(81, "Tricky",
      "If the line 2x + 3y = 12 intersects the X-axis at point P and the Y-axis at point Q, what are the coordinates of P and Q?",
      "P(6, 0) and Q(0, 4)",
      "P(0, 6) and Q(4, 0)",
      "P(3, 0) and Q(0, 2)",
      "P(12, 0) and Q(0, 12)",
      "A",
      "On X-axis, y = 0 => 2x = 12 => x = 6, so P = (6, 0). On Y-axis, x = 0 => 3y = 12 => y = 4, so Q = (0, 4).")

add_q(82, "Tricky",
      "What is the area of the right-angled triangle formed by the line 2x + 3y = 12 with the coordinate axes?",
      "12 sq units",
      "24 sq units",
      "6 sq units",
      "10 sq units",
      "A",
      "The intercepts are base = 6 (on X-axis) and height = 4 (on Y-axis). Area = 1/2 × 6 × 4 = 12 sq units.")

add_q(83, "Tricky",
      "If 2x - 3y = 7 and (a + b)x - (a + b - 3)y = 4a + b have infinitely many solutions, then the relation between a and b is:",
      "a - 5b = 0",
      "5a - b = 0",
      "a + 5b = 0",
      "a - b = 5",
      "A",
      "2/(a + b) = -3/[-(a + b - 3)] = 3/(a + b - 3). Cross-multiplying: 2(a + b - 3) = 3(a + b) => 2a + 2b - 6 = 3a + 3b => a + b = -6. Also from 2/(a+b) = 7/(4a+b): 8a + 2b = 7a + 7b => a - 5b = 0.")

add_q(84, "Tricky",
      "If a pair of linear equations has equations of the form ax + by = c and bx - ay = d, the lines are always:",
      "Parallel",
      "Coincident",
      "Perpendicular to each other",
      "Intersecting at 45°",
      "C",
      "The slopes are m₁ = -a/b and m₂ = -b/(-a) = b/a. The product of slopes is m₁ m₂ = (-a/b)(b/a) = -1. Hence the lines are always perpendicular.")

add_q(85, "Tricky",
      "If the perimeter of a rectangle is 28 cm and its diagonal is 10 cm, find its length and breadth.",
      "8 cm and 6 cm",
      "9 cm and 5 cm",
      "10 cm and 4 cm",
      "7 cm and 7 cm",
      "A",
      "2(l + w) = 28 => l + w = 14. Diagonal: l² + w² = 10² = 100. Note (l + w)² = l² + w² + 2lw => 14² = 100 + 2lw => 196 - 100 = 2lw => 2lw = 96 => lw = 48. Two numbers with sum 14 and product 48 are 8 and 6.")

add_q(86, "Tricky",
      "What can be said about the consistency of the system 3x - y + 2 = 0 and 6x - 2y + 4 = 0?",
      "Inconsistent",
      "Consistent with infinitely many solutions (coincident)",
      "Consistent with unique solution",
      "Undefined",
      "B",
      "a₁/a₂ = 3/6 = 1/2, b₁/b₂ = -1/-2 = 1/2, c₁/c₂ = 2/4 = 1/2. All three ratios are equal, so the system is consistent with infinitely many solutions.")

add_q(87, "Tricky",
      "If x = 2 and y = 3 is a solution of 5x - 3y = k, what is the value of k?",
      "1",
      "-1",
      "2",
      "19",
      "A",
      "5(2) - 3(3) = 10 - 9 = 1 => k = 1.")

add_q(88, "Tricky",
      "If the line 3x + 4y = k passes through the origin, what must be the value of k?",
      "0",
      "1",
      "7",
      "12",
      "A",
      "If a line passes through the origin (0, 0), then 3(0) + 4(0) = k => k = 0.")

add_q(89, "Tricky",
      "A student solves the system 2x + y = 5 and 4x + 2y = 7 by elimination and obtains the statement 0 = 3. What does this outcome signify?",
      "The system has a unique solution at x = 0",
      "The student made a mistake because 0 = 3 is impossible",
      "The statement is false, proving that the lines are parallel and the system has NO solution",
      "The system has infinitely many solutions",
      "C",
      "Arriving at a false statement like 0 = k (k ≠ 0) algebraically indicates that no pair (x, y) can satisfy both equations, proving the system has no solution.")

add_q(90, "Tricky",
      "If a student solves a system and obtains the true identity 0 = 0, what does this signify?",
      "The system has no solution",
      "The system has a unique solution at the origin",
      "The system has infinitely many solutions (coincident lines)",
      "The variables must both be 0",
      "C",
      "Arriving at a universally true statement like 0 = 0 means that any solution of the first equation is also a solution of the second equation, meaning there are infinitely many solutions.")

# -------------------------------------------------------------------------
# 🔴 10 VERY HARD QUESTIONS (Q91 to Q100)
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "Solve for x and y: (a - b)x + (a + b)y = 2(a² - b²) and ax - by = a² + b².",
      "x = a + b, y = a - b",
      "x = a - b, y = a + b",
      "x = a, y = b",
      "x = 2a, y = -2b",
      "A",
      "Adding the two equations: (a - b + a)x + (a + b - b)y = 2a² - 2b² + a² + b² => (2a - b)x + ay = 3a² - b². Alternatively, substitute x = a + b and y = a - b: ax - by = a(a + b) - b(a - b) = a² + ab - ab + b² = a² + b² (satisfied!). Also (a - b)(a + b) + (a + b)(a - b) = 2(a² - b²) (satisfied!). Thus x = a + b, y = a - b.")

add_q(92, "Very Hard",
      "Solve the system for non-zero x and y: 2/√x + 3/√y = 2 and 4/√x - 9/√y = -1 (NCERT Example 17).",
      "x = 4, y = 9",
      "x = 2, y = 3",
      "x = 9, y = 4",
      "x = 1/4, y = 1/9",
      "A",
      "Let u = 1/√x and v = 1/√y: 2u + 3v = 2 and 4u - 9v = -1. Multiply first by 3: 6u + 9v = 6. Add to second: 10u = 5 => u = 1/2. Then 2(1/2) + 3v = 2 => 3v = 1 => v = 1/3. Since 1/√x = 1/2 => √x = 2 => x = 4. Since 1/√y = 1/3 => √y = 3 => y = 9.")

add_q(93, "Very Hard",
      "Solve for x and y: 5/(x - 1) + 1/(y - 2) = 2 and 6/(x - 1) - 3/(y - 2) = 1 (NCERT Example 18).",
      "x = 4, y = 5",
      "x = 5, y = 4",
      "x = 3, y = 5",
      "x = 4, y = 3",
      "A",
      "Let u = 1/(x - 1), v = 1/(y - 2): 5u + v = 2 and 6u - 3v = 1. Multiply first by 3: 15u + 3v = 6. Add to second: 21u = 7 => u = 1/3. Then v = 2 - 5/3 = 1/3. So x - 1 = 3 => x = 4, and y - 2 = 3 => y = 5.")

add_q(94, "Very Hard",
      "Solve for x and y: 7x - 2y = 5xy and 8x + 7y = 15xy (where x, y ≠ 0).",
      "x = 1, y = 1",
      "x = 2, y = 1",
      "x = 1, y = 2",
      "x = 3, y = 1",
      "A",
      "Divide both equations by xy: 7/y - 2/x = 5 and 8/y + 7/x = 15. Let u = 1/x, v = 1/y: -2u + 7v = 5 and 7u + 8v = 15. Multiply first by 7 and second by 2: -14u + 49v = 35, 14u + 16v = 30. Adding: 65v = 65 => v = 1 => y = 1. Then -2u + 7 = 5 => 2u = 2 => u = 1 => x = 1.")

add_q(95, "Very Hard",
      "Solve for x and y: 10/(x + y) + 2/(x - y) = 4 and 15/(x + y) - 5/(x - y) = -2 (where x + y ≠ 0, x - y ≠ 0).",
      "x = 3, y = 2",
      "x = 2, y = 3",
      "x = 5, y = 1",
      "x = 4, y = 1",
      "A",
      "Let u = 1/(x + y) and v = 1/(x - y): 10u + 2v = 4 => 5u + v = 2. Second: 15u - 5v = -2. From first, v = 2 - 5u. Substitute: 15u - 5(2 - 5u) = -2 => 40u = 8 => u = 1/5, so v = 2 - 1 = 1. Therefore x + y = 5 and x - y = 1 => 2x = 6 => x = 3, y = 2.")

add_q(96, "Very Hard",
      "A two-digit number is 4 times the sum of its digits and twice the product of its digits. Find the number.",
      "36",
      "48",
      "24",
      "18",
      "A",
      "Number = 10x + y. 10x + y = 4(x + y) => 6x = 3y => y = 2x. Also 10x + y = 2xy => 10x + 2x = 2x(2x) => 12x = 4x² => 4x(x - 3) = 0. Since x ≠ 0, x = 3, so y = 2(3) = 6. The number is 36.")

add_q(97, "Very Hard",
      "The incomes of two persons are in the ratio 9 : 7 and their expenditures are in the ratio 4 : 3. If each of them manages to save Rs 2000 per month, find their monthly incomes (NCERT Example 11).",
      "Rs 18,000 and Rs 14,000",
      "Rs 9,000 and Rs 7,000",
      "Rs 27,000 and Rs 21,000",
      "Rs 36,000 and Rs 28,000",
      "A",
      "Let incomes be 9x and 7x, expenditures be 4y and 3y. 9x - 4y = 2000 and 7x - 3y = 2000. Multiply first by 3 and second by 4: 27x - 12y = 6000, 28x - 12y = 8000. Subtracting gives x = 2000. Incomes are 9(2000) = Rs 18,000 and 7(2000) = Rs 14,000.")

add_q(98, "Very Hard",
      "A train covered a certain distance at a uniform speed. If the train had been 10 km/h faster, it would have taken 2 hours less than the scheduled time. And, if the train were slower by 10 km/h, it would have taken 3 hours more than the scheduled time. Find the distance covered by the train (NCERT Optional Exercise).",
      "600 km",
      "480 km",
      "720 km",
      "540 km",
      "A",
      "Let scheduled speed be s and scheduled time be t. Distance d = st. Case 1: (s + 10)(t - 2) = st => -2s + 10t = 20 => -s + 5t = 10. Case 2: (s - 10)(t + 3) = st => 3s - 10t = 30. Multiply Eq 1 by 2: -2s + 10t = 20. Add to Eq 2: s = 50 km/h. Then 5t = 10 + 50 = 60 => t = 12 hours. Distance = st = 50 × 12 = 600 km.")

add_q(99, "Very Hard",
      "Ankit travels 14 km to his home partly by rickshaw and partly by bus. If he travels 2 km by rickshaw and remaining by bus, he takes 1/2 hour. But if he travels 4 km by rickshaw and remaining by bus, he takes 9 minutes longer. Find the speed of the rickshaw and the bus.",
      "Rickshaw = 10 km/h, Bus = 40 km/h",
      "Rickshaw = 12 km/h, Bus = 36 km/h",
      "Rickshaw = 8 km/h, Bus = 32 km/h",
      "Rickshaw = 15 km/h, Bus = 45 km/h",
      "A",
      "Let rickshaw speed be x and bus speed be y. 2/x + 12/y = 1/2 = 30 mins. 4/x + 10/y = 39/60 = 13/20. Let u = 1/x, v = 1/y: 2u + 12v = 1/2 => 4u + 24v = 1. Also 4u + 10v = 13/20. Subtracting: 14v = 1 - 13/20 = 7/20 => v = 7/(20 × 14) = 1/40 => y = 40 km/h. Then 2u + 12(1/40) = 1/2 => 2u + 3/10 = 5/10 => 2u = 2/10 = 1/5 => u = 1/10 => x = 10 km/h.")

add_q(100, "Very Hard",
      "Find the values of α and β for which the following system of linear equations has infinitely many solutions: 2x + 3y = 7 and 2α x + (α + β) y = 28.",
      "α = 4, β = 8",
      "α = 8, β = 4",
      "α = 2, β = 6",
      "α = 6, β = 2",
      "A",
      "For infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => 2/(2α) = 3/(α + β) = 7/28 = 1/4. From 1/α = 1/4 => α = 4. From 3/(4 + β) = 1/4 => 4 + β = 12 => β = 8.")

print(f"Total questions generated: {len(questions)}")
diff_count = {}
for q in questions:
    d = q['difficulty']
    diff_count[d] = diff_count.get(d, 0) + 1
print("Tier distribution:", diff_count)

js_content = f"""/* Elite Classes — Modular Test Series: Class 10 Mathematics Chapter 3
   Pair of Linear Equations in Two Variables (100 Questions Exhaustive Master Assessment)
   Difficulty Breakdown:
   - 50 Easy Questions (Q1 to Q50)
   - 10 Medium Questions (Q51 to Q60)
   - 10 Hard Questions (Q61 to Q70)
   - 20 Tricky Questions (Q71 to Q90)
   - 10 Very Hard / Olympiad Level Questions (Q91 to Q100)
*/

const Class10MathematicsChapter3FullBank = {{
    id: 'ts_c10_math_ch3',
    title: 'Chapter 3: Pair of Linear Equations in Two Variables Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 3 (Pair of Linear Equations in Two Variables). Includes graphical representation, consistency conditions, substitution, elimination, word problems, and coordinate geometry diagrams.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter3FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter3FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter3_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter3_mathematics.js")
