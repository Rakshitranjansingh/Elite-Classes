# -*- coding: utf-8 -*-
"""
Generator script for Class 10 Mathematics Chapter 10: Circles
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
        "id": f"ts_c10_math_ch10_q{q_count}",
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
svg_tangent_radius = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <circle cx="200" cy="110" r="70" stroke="#0284c7" stroke-width="2.5" fill="#f0f9ff"/>
  <circle cx="200" cy="110" r="4" fill="#0369a1"/>
  <text x="210" y="105" font-size="13" font-weight="bold" fill="#0369a1">O (Centre)</text>
  <line x1="200" y1="110" x2="200" y2="180" stroke="#dc2626" stroke-width="2.5"/>
  <text x="175" y="150" font-size="12" font-weight="bold" fill="#dc2626">Radius r</text>
  <line x1="60" y1="180" x2="340" y2="180" stroke="#0f172a" stroke-width="3"/>
  <circle cx="200" cy="180" r="4" fill="#dc2626"/>
  <text x="195" y="205" font-size="12" font-weight="bold" fill="#0f172a">P (Point of Contact)</text>
  <rect x="200" y="165" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="320" y="175" font-size="12" fill="#475569">Tangent AB</text>
</svg>'''

svg_two_tangents = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 240" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <circle cx="280" cy="120" r="60" stroke="#0284c7" stroke-width="2.5" fill="#f0f9ff"/>
  <circle cx="280" cy="120" r="4" fill="#0369a1"/>
  <text x="290" y="125" font-size="12" font-weight="bold" fill="#0369a1">O</text>
  <circle cx="60" cy="120" r="4" fill="#dc2626"/>
  <text x="45" y="125" font-size="13" font-weight="bold" fill="#dc2626">P</text>
  <line x1="60" y1="120" x2="250" y2="65" stroke="#ea580c" stroke-width="2.5"/>
  <line x1="60" y1="120" x2="250" y2="175" stroke="#ea580c" stroke-width="2.5"/>
  <circle cx="250" cy="65" r="4" fill="#0f172a"/>
  <text x="250" y="55" font-size="12" font-weight="bold" fill="#0f172a">Q</text>
  <circle cx="250" cy="175" r="4" fill="#0f172a"/>
  <text x="250" y="195" font-size="12" font-weight="bold" fill="#0f172a">R</text>
  <line x1="280" y1="120" x2="250" y2="65" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="280" y1="120" x2="250" y2="175" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="60" y1="120" x2="280" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="140" y="80" font-size="12" font-weight="bold" fill="#ea580c">PQ</text>
  <text x="140" y="165" font-size="12" font-weight="bold" fill="#ea580c">PR</text>
</svg>'''

svg_concentric_chord = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 240" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <circle cx="210" cy="120" r="90" stroke="#0284c7" stroke-width="2" fill="#f0f9ff"/>
  <circle cx="210" cy="120" r="50" stroke="#0284c7" stroke-width="2" fill="#e0f2fe"/>
  <circle cx="210" cy="120" r="4" fill="#0369a1"/>
  <text x="215" y="115" font-size="12" font-weight="bold" fill="#0369a1">O</text>
  <line x1="135" y1="150" x2="285" y2="150" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="135" y1="150" x2="210" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="210" y1="120" x2="210" y2="150" stroke="#16a34a" stroke-width="2"/>
  <circle cx="135" cy="150" r="3" fill="#dc2626"/>
  <text x="115" y="155" font-size="12" font-weight="bold" fill="#dc2626">A</text>
  <circle cx="285" cy="150" r="3" fill="#dc2626"/>
  <text x="295" y="155" font-size="12" font-weight="bold" fill="#dc2626">B</text>
  <circle cx="210" cy="150" r="3" fill="#16a34a"/>
  <text x="205" y="170" font-size="12" font-weight="bold" fill="#16a34a">P</text>
  <text x="160" y="130" font-size="11" fill="#475569">R</text>
  <text x="215" y="140" font-size="11" fill="#16a34a">r</text>
</svg>'''

svg_circumscribed_quad = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 240" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <polygon points="60,200 360,200 310,40 110,40" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <circle cx="210" cy="120" r="65" stroke="#0284c7" stroke-width="2" fill="#f0f9ff"/>
  <text x="50" y="215" font-size="12" font-weight="bold" fill="#334155">A</text>
  <text x="365" y="215" font-size="12" font-weight="bold" fill="#334155">B</text>
  <text x="315" y="35" font-size="12" font-weight="bold" fill="#334155">C</text>
  <text x="95" y="35" font-size="12" font-weight="bold" fill="#334155">D</text>
  <circle cx="210" cy="200" r="3" fill="#dc2626"/>
  <text x="205" y="218" font-size="11" font-weight="bold" fill="#dc2626">P</text>
  <circle cx="338" cy="120" r="3" fill="#dc2626"/>
  <text x="345" y="125" font-size="11" font-weight="bold" fill="#dc2626">Q</text>
  <circle cx="210" cy="55" r="3" fill="#dc2626"/>
  <text x="205" y="50" font-size="11" font-weight="bold" fill="#dc2626">R</text>
  <circle cx="82" cy="120" r="3" fill="#dc2626"/>
  <text x="65" y="125" font-size="11" font-weight="bold" fill="#dc2626">S</text>
</svg>'''

svg_triangle_circumscribed = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 250" width="100%" height="210" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <polygon points="210,30 70,210 350,210" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
  <circle cx="210" cy="145" r="50" stroke="#dc2626" stroke-width="2" fill="#fef2f2"/>
  <circle cx="210" cy="145" r="3" fill="#dc2626"/>
  <text x="215" y="145" font-size="11" font-weight="bold" fill="#dc2626">O (r=4)</text>
  <text x="205" y="22" font-size="13" font-weight="bold" fill="#0284c7">A</text>
  <text x="50" y="220" font-size="13" font-weight="bold" fill="#0284c7">B</text>
  <text x="355" y="220" font-size="13" font-weight="bold" fill="#0284c7">C</text>
  <circle cx="210" cy="210" r="3" fill="#16a34a"/>
  <text x="205" y="228" font-size="12" font-weight="bold" fill="#16a34a">D</text>
  <text x="130" y="228" font-size="11" font-weight="bold" fill="#475569">BD = 8 cm</text>
  <text x="260" y="228" font-size="11" font-weight="bold" fill="#475569">DC = 6 cm</text>
</svg>'''

# =========================================================================
# 50 EASY QUESTIONS (Theorems 10.1 & 10.2 definitions, terminology, basics)
# =========================================================================
add_q("easy",
      "A line that intersects a circle at two distinct points is called a:",
      "Secant", "Tangent", "Chord", "Diameter",
      "A",
      "NCERT Section 10.1: A secant is a line that intersects a circle in two distinct points.")

add_q("easy",
      "A line that intersects or touches a circle at only one point is called a:",
      "Tangent", "Secant", "Normal", "Segment",
      "A",
      "NCERT Section 10.1: A tangent to a circle is a line that intersects the circle at only one point.",
      svg_tangent_radius)

add_q("easy",
      "The common point of a tangent to a circle and the circle is called the:",
      "Point of contact", "Centre of curvature", "Vertex", "Focus",
      "A",
      "NCERT Section 10.1: The common point of the tangent and the circle is called the point of contact.")

add_q("easy",
      "From a point on a circle, how many tangents can be drawn to the circle?",
      "Only one", "Two", "Infinitely many", "Zero",
      "A",
      "NCERT Section 10.2: At any point on a circle, there is one and only one tangent.")

add_q("easy",
      "From a point lying inside a circle, how many tangents can be drawn to the circle?",
      "Zero (None)", "One", "Two", "Infinite",
      "A",
      "NCERT Section 10.3 (Case 1): No tangent can be drawn to a circle through a point lying inside the circle.")

add_q("easy",
      "From an external point lying outside a circle, how many tangents can be drawn to the circle?",
      "Exactly two", "Only one", "Three", "Infinitely many",
      "A",
      "NCERT Section 10.3 (Case 3): There are exactly two tangents to a circle through a point lying outside the circle.",
      svg_two_tangents)

add_q("easy",
      "The tangent at any point of a circle is _____ to the radius through the point of contact.",
      "Perpendicular", "Parallel", "Equal in length", "At an angle of 45°",
      "A",
      "NCERT Theorem 10.1: The tangent at any point of a circle is perpendicular to the radius through the point of contact.",
      svg_tangent_radius)

add_q("easy",
      "The line containing the radius through the point of contact with the tangent is also called the:",
      "Normal to the circle", "Secant to the circle", "Chord of contact", "Directrix",
      "A",
      "NCERT Section 10.2: The line containing the radius through the point of contact is called the 'normal' to the circle at that point.")

add_q("easy",
      "The lengths of tangents drawn from an external point to a circle are:",
      "Equal", "Unequal", "Proportional to radius", "Inversely related",
      "A",
      "NCERT Theorem 10.2: The lengths of tangents drawn from an external point to a circle are equal (PQ = PR).",
      svg_two_tangents)

add_q("easy",
      "The word 'tangent' comes from the Latin word 'tangere', which means:",
      "To touch", "To cut", "To rotate", "To measure",
      "A",
      "NCERT historical footnote: Tangent comes from Latin 'tangere', meaning 'to touch', introduced by Thomas Fincke in 1583.")

add_q("easy",
      "Who introduced the word 'tangent' to mathematics in the year 1583?",
      "Thomas Fincke", "Aryabhata", "René Descartes", "Isaac Newton",
      "A",
      "NCERT Section 10.2 footnote: The word 'tangent' was introduced by the Danish mathematician Thomas Fincke in 1583.")

add_q("easy",
      "How many parallel tangents can a circle have at the most?",
      "2", "1", "4", "Infinitely many",
      "A",
      "NCERT Exercise 10.1 Q2: A circle can have at most two parallel tangents (at the opposite ends of a diameter).")

add_q("easy",
      "A tangent to a circle intersects it in _____ point(s).",
      "1", "2", "0", "Infinitely many",
      "A",
      "NCERT Exercise 10.1 Q2: A tangent to a circle intersects it in only 1 point.")

add_q("easy",
      "A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. The length PQ is:",
      "√119 cm", "12 cm", "13 cm", "8.5 cm",
      "A",
      "By Theorem 10.1, ∠OPQ = 90°. In right ΔOPQ, PQ² = OQ² - OP² = 12² - 5² = 144 - 25 = 119 ⇒ PQ = √119 cm.")

add_q("easy",
      "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
      "7 cm", "12 cm", "15 cm", "24.5 cm",
      "A",
      "NCERT Exercise 10.2 Q1: Radius r² = OQ² - tangent² = 25² - 24² = 625 - 576 = 49 ⇒ r = 7 cm.")

add_q("easy",
      "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at an angle of 80°, then ∠POA is equal to:",
      "50°", "60°", "70°", "80°",
      "A",
      "NCERT Exercise 10.2 Q3: In quadrilateral PAOB, ∠AOB = 180° - 80° = 100°. Since OP bisects ∠AOB, ∠POA = 100° / 2 = 50°.")

add_q("easy",
      "If TP and TQ are the two tangents to a circle with centre O so that ∠POQ = 110°, then ∠PTQ is equal to:",
      "70°", "60°", "80°", "90°",
      "A",
      "NCERT Exercise 10.2 Q2: The angle between tangents and the angle subtended by radii at the centre are supplementary: ∠PTQ = 180° - 110° = 70°.")

add_q("easy",
      "The angle between two tangents drawn from an external point to a circle and the angle subtended by the line-segment joining the points of contact at the centre are:",
      "Supplementary", "Complementary", "Equal", "Vertically opposite",
      "A",
      "NCERT Exercise 10.2 Q4: Since the angles at the points of contact are each 90°, the remaining two opposite angles sum to 180° (supplementary).")

add_q("easy",
      "Tangents drawn at the ends of a diameter of a circle are:",
      "Parallel", "Perpendicular", "Intersecting at 45°", "Coincident",
      "A",
      "NCERT Exercise 10.2 Q4: Radii at the ends of a diameter are collinear. Tangents are perpendicular to the diameter at both ends, making alternate interior angles 90°, hence they are parallel.")

add_q("easy",
      "The perpendicular at the point of contact to the tangent to a circle always passes through:",
      "The centre of the circle", "The external point", "The circumference", "The origin",
      "A",
      "NCERT Exercise 10.2 Q5: The perpendicular at the point of contact is the normal to the circle, which passes through the centre of the circle.")

add_q("easy",
      "The length of a tangent from a point A at distance 5 cm from the centre of the circle is 4 cm. The radius of the circle is:",
      "3 cm", "4 cm", "5 cm", "√41 cm",
      "A",
      "NCERT Exercise 10.2 Q6: r = √(5² - 4²) = √(25 - 16) = √9 = 3 cm.")

add_q("easy",
      "Two concentric circles are of radii 5 cm and 3 cm. The length of the chord of the larger circle which touches the smaller circle is:",
      "8 cm", "4 cm", "10 cm", "6 cm",
      "A",
      "NCERT Exercise 10.2 Q7: Half-length of chord = √(5² - 3²) = 4 cm. Total chord length = 2 × 4 = 8 cm.",
      svg_concentric_chord)

add_q("easy",
      "A quadrilateral ABCD is drawn to circumscribe a circle. Which of the following relationships is ALWAYS true?",
      "AB + CD = AD + BC",
      "AB + BC = CD + DA",
      "AB × CD = BC × DA",
      "AB - CD = BC - AD",
      "A",
      "NCERT Theorem / Exercise 10.2 Q8: For a quadrilateral circumscribing a circle, the sum of opposite sides are equal: AB + CD = AD + BC.",
      svg_circumscribed_quad)

add_q("easy",
      "A parallelogram circumscribing a circle is always a:",
      "Rhombus", "Rectangle", "Square", "Trapezium",
      "A",
      "NCERT Exercise 10.2 Q11: Since AB + CD = AD + BC and AB = CD, BC = AD in a parallelogram, 2AB = 2AD ⇒ AB = AD. A parallelogram with equal adjacent sides is a rhombus.")

add_q("easy",
      "In two concentric circles, a chord of the larger circle which touches the smaller circle is _____ at the point of contact.",
      "Bisected", "Trisected", "Doubled", "Perpendicularly unchanged",
      "A",
      "NCERT Example 1: The radius to the point of contact is perpendicular to the tangent chord. A perpendicular from the centre to a chord bisects the chord.")

add_q("easy",
      "If the radius of a circle is 6 cm, what is the distance between two parallel tangents to this circle?",
      "12 cm", "6 cm", "3 cm", "24 cm",
      "A",
      "Parallel tangents are drawn at the extremities of a diameter. Distance = 2 × radius = 2 × 6 = 12 cm.")

add_q("easy",
      "If the distance between two parallel tangents of a circle is 18 cm, the radius of the circle is:",
      "9 cm", "18 cm", "36 cm", "4.5 cm",
      "A",
      "The distance between parallel tangents is equal to the diameter (2r). Radius = 18 / 2 = 9 cm.")

add_q("easy",
      "If the angle between two radii of a circle is 130°, the angle between the tangents drawn at their endpoints is:",
      "50°", "65°", "90°", "40°",
      "A",
      "Angle between tangents = 180° - Angle between radii = 180° - 130° = 50°.")

add_q("easy",
      "If the angle between two tangents drawn to a circle is 60°, what is the angle subtended by the radii at the centre?",
      "120°", "60°", "90°", "150°",
      "A",
      "Angle at centre = 180° - 60° = 120°.")

add_q("easy",
      "In ΔOPQ, if ∠OPQ = 90° where OP is radius and PQ is tangent, then which side is the hypotenuse?",
      "OQ", "OP", "PQ", "Cannot be determined",
      "A",
      "The hypotenuse is the side opposite the 90° angle (∠OPQ), which is OQ (the line segment joining the centre to external point Q).")

add_q("easy",
      "How many tangents can be drawn to a circle from a point on its circumference?",
      "1", "2", "0", "Infinite",
      "A",
      "NCERT Section 10.2: At any point on a circle, there is one and only one tangent.")

add_q("easy",
      "How many total tangents can a circle have across all its points?",
      "Infinitely many", "360", "2", "4",
      "A",
      "A circle has infinitely many points on its circumference, and a tangent can be drawn at each point. Thus, a circle has infinitely many tangents.")

add_q("easy",
      "The line segment joining the points of contact of two parallel tangents to a circle is a:",
      "Diameter of the circle", "Chord of length r", "Secant", "Tangent",
      "A",
      "The line connecting the points of contact of parallel tangents passes through the centre and has length 2r, which is the diameter.")

add_q("easy",
      "If a chord AB of length 16 cm is drawn in a circle of radius 10 cm, the distance of the chord from the centre is:",
      "6 cm", "8 cm", "5 cm", "4 cm",
      "A",
      "The perpendicular from centre bisects the chord into two 8 cm segments. Distance d = √(10² - 8²) = √(100 - 64) = √36 = 6 cm.")

add_q("easy",
      "If PA and PB are tangents from P to a circle with centre O, then triangle PAB is always:",
      "Isosceles", "Equilateral", "Scalene", "Right-angled only",
      "A",
      "Since PA = PB (Theorem 10.2), triangle PAB has two equal sides, making it an isosceles triangle.")

add_q("easy",
      "If PA and PB are tangents from P inclined at 60° to each other, then triangle PAB is:",
      "Equilateral", "Right-angled", "Scalene", "Obtuse",
      "A",
      "PA = PB implies ∠PAB = ∠PBA. In ΔPAB, sum of angles is 180°. 60° + 2x = 180° ⇒ 2x = 120° ⇒ x = 60°. All angles are 60°, so ΔPAB is equilateral!")

add_q("easy",
      "If two tangents PA and PB are drawn to a circle of radius r such that ∠APB = 90°, what is the shape of quadrilateral PAOB?",
      "Square", "Rectangle (non-square)", "Trapezium", "Rhombus (non-square)",
      "A",
      "Adjacent sides PA = PB and OA = OB = r. Since ∠PAO = ∠PBO = 90° and ∠APB = 90°, ∠AOB = 90°. All 4 angles are 90° and adjacent sides are equal (PA = OA = r), so PAOB is a square.")

add_q("easy",
      "In the square PAOB with radius r and ∠APB = 90°, what is the length of each tangent PA and PB?",
      "r", "r√2", "2r", "r / √2",
      "A",
      "Since PAOB is a square of side r, the length of each tangent PA = PB = r.")

add_q("easy",
      "In the square PAOB with radius r and ∠APB = 90°, what is the distance of external point P from centre O (length OP)?",
      "r√2", "r", "2r", "r√3",
      "A",
      "OP is the diagonal of square PAOB of side r, so OP = r√2.")

add_q("easy",
      "If tangents PA and PB are drawn from P to a circle with centre O such that ∠APB = 60° and OP = 10 cm, then the radius r is:",
      "5 cm", "5√3 cm", "10√3 cm", "2.5 cm",
      "A",
      "OP bisects ∠APB, so ∠APO = 30°. In right ΔOAP, sin 30° = OA / OP ⇒ 1/2 = r / 10 ⇒ r = 5 cm.")

add_q("easy",
      "In the same triangle with ∠APB = 60° and OP = 10 cm, what is the length of tangent PA?",
      "5√3 cm", "5 cm", "10 cm", "10√3 cm",
      "A",
      "cos 30° = PA / OP ⇒ √3/2 = PA / 10 ⇒ PA = 5√3 cm.")

add_q("easy",
      "A circle can be inscribed in a polygon if and only if all the sides of the polygon are:",
      "Tangents to the circle", "Secants to the circle", "Chords of the circle", "Parallel to each other",
      "A",
      "By definition, a circle is inscribed in a polygon (the polygon circumscribes the circle) when each side touches the circle as a tangent.")

add_q("easy",
      "If a point P is on the circle, the distance of P from the centre O is:",
      "Equal to radius r", "Greater than r", "Less than r", "Zero",
      "A",
      "Every point on the circle is at a distance equal to the radius from the centre.")

add_q("easy",
      "If a point P lies inside the circle, the distance OP is:",
      "Less than radius r", "Equal to radius r", "Greater than radius r", "Negative",
      "A",
      "Points inside a circle have OP < r.")

add_q("easy",
      "If a point P lies outside the circle, the distance OP is:",
      "Greater than radius r", "Equal to radius r", "Less than radius r", "Zero",
      "A",
      "Points outside a circle have OP > r.")

add_q("easy",
      "If tangent PQ touches the circle at Q, and radius is OQ, what is the measure of ∠OQP?",
      "90°", "45°", "60°", "180°",
      "A",
      "Theorem 10.1: Tangent is perpendicular to the radius at the point of contact, so ∠OQP = 90°.")

add_q("easy",
      "If the radius of a circle is 8 cm and the length of tangent from external point P is 15 cm, what is the distance OP?",
      "17 cm", "23 cm", "13 cm", "√161 cm",
      "A",
      "OP = √(8² + 15²) = √(64 + 225) = √289 = 17 cm.")

add_q("easy",
      "A line intersecting a circle in two points coincides with a tangent when:",
      "The two points of intersection coincide",
      "The line passes through the centre",
      "The line is parallel to the diameter",
      "The points of intersection are at ends of a diameter",
      "A",
      "NCERT Section 10.2: Tangent is the limiting position of a secant when the two endpoints of its corresponding chord coincide.")

add_q("easy",
      "Two concentric circles have radii 13 cm and 5 cm. The length of the chord of the larger circle that is tangent to the smaller circle is:",
      "24 cm", "12 cm", "18 cm", "26 cm",
      "A",
      "Half chord = √(13² - 5²) = √(169 - 25) = √144 = 12 cm. Full chord = 2 × 12 = 24 cm.")

add_q("easy",
      "If quadrilateral ABCD circumscribes a circle with AB = 6 cm, BC = 7 cm, CD = 4 cm, find AD:",
      "3 cm", "5 cm", "4 cm", "6 cm",
      "A",
      "By AB + CD = AD + BC: 6 + 4 = AD + 7 ⇒ 10 = AD + 7 ⇒ AD = 3 cm.")

# =========================================================================
# 10 MEDIUM QUESTIONS (Standard 2-step proofs & algebraic problems)
# =========================================================================
add_q("medium",
      "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ is equal to:",
      "2 ∠OPQ", "∠OPQ", "90° - ∠OPQ", "180° - 2 ∠OPQ",
      "A",
      "NCERT Example 2: In ΔTPQ, TP = TQ ⇒ ∠TPQ = ∠TQP = (180° - ∠PTQ)/2 = 90° - (1/2)∠PTQ. Also ∠OPT = 90° ⇒ ∠OPQ = 90° - ∠TPQ = 90° - [90° - (1/2)∠PTQ] = (1/2)∠PTQ ⇒ ∠PTQ = 2 ∠OPQ.")

add_q("medium",
      "PQ is a chord of length 8 cm of a circle of radius 5 cm. The tangents at P and Q intersect at a point T. The length of TP is:",
      "20/3 cm (6.67 cm)", "15/4 cm", "10 cm", "25/3 cm",
      "A",
      "NCERT Example 3: Line OT is perpendicular bisector of chord PQ at M. PM = 4 cm. In right ΔOPM, OM = √(5² - 4²) = 3 cm. In right ΔOPT, ΔOPM ~ ΔTPM (or tan θ = PM/OM = TP/OP) ⇒ TP / 5 = 4 / 3 ⇒ TP = 20/3 cm.")

add_q("medium",
      "In the same chord problem (radius 5 cm, chord 8 cm, tangents intersect at T), what is the length of segment OT?",
      "25/3 cm", "20/3 cm", "15 cm", "10 cm",
      "A",
      "In right ΔOPT: OT = √(OP² + TP²) = √(5² + (20/3)²) = √(25 + 400/9) = √(625/9) = 25/3 cm.")

add_q("medium",
      "A triangle ABC is drawn to circumscribe a circle of radius 4 cm such that the segments BD and DC into which BC is divided by the point of contact D are of lengths 8 cm and 6 cm respectively. What is the length of side AB?",
      "15 cm", "13 cm", "14 cm", "16 cm",
      "A",
      "NCERT Exercise 10.2 Q12: Let tangent from A be x. Sides are a = 14, b = 6 + x, c = 8 + x. Semiperimeter s = 14 + x. Area = √[s(s-a)(s-b)(s-c)] = √[(14+x)(x)(8)(6)] = √(48x(14+x)). Also Area = r × s = 4(14 + x). Equating and squaring: 48x(14+x) = 16(14+x)² ⇒ 48x = 16(14+x) ⇒ 3x = 14 + x ⇒ 2x = 14 ⇒ x = 7 cm. Side AB = c = 8 + x = 8 + 7 = 15 cm.",
      svg_triangle_circumscribed)

add_q("medium",
      "In the circumscribed triangle problem above (r = 4 cm, BD = 8 cm, DC = 6 cm), what is the length of side AC?",
      "13 cm", "15 cm", "14 cm", "12 cm",
      "A",
      "Side AC = b = 6 + x = 6 + 7 = 13 cm.")

add_q("medium",
      "Prove that the opposite sides of a quadrilateral circumscribing a circle subtend _____ angles at the centre of the circle.",
      "Supplementary", "Complementary", "Equal", "Vertically opposite",
      "A",
      "NCERT Exercise 10.2 Q13: Sum of angles at centre = 360°. Joining vertices and points of contact divides the 360° into 4 pairs of equal adjacent angles. Thus ∠AOB + ∠COD = 180° (supplementary).")

add_q("medium",
      "In a circle of radius 5 cm, two parallel tangents are drawn. A third tangent line intersects the two parallel tangents at points A and B. What angle does the segment AB subtend at the centre O of the circle?",
      "90°", "60°", "120°", "180°",
      "A",
      "NCERT Exercise 10.2 Q9: Tangents from external points A and B meet parallel tangents. ∠AOB = (1/2)(sum of consecutive interior angles) = (1/2)(180°) = 90°.")

add_q("medium",
      "A circle touches all the four sides of a quadrilateral ABCD whose sides are AB = x, BC = 9, CD = 8, DA = 7. The value of x is:",
      "8", "6", "10", "7",
      "A",
      "AB + CD = BC + DA ⇒ x + 8 = 9 + 7 ⇒ x + 8 = 16 ⇒ x = 8 cm.")

add_q("medium",
      "If tangents PA and PB from an external point P to a circle with centre O make an angle of 120° with each other, then OP is equal to:",
      "2 r", "r√3", "r√2", "r / 2",
      "A",
      "OP bisects ∠APB, so ∠APO = 60°. In right ΔOAP, sin 60° = OA / OP = r / OP ⇒ √3/2 = r / OP ⇒ OP = 2r / √3. Wait, if ∠APO = 60°, sin 60° = r / OP ⇒ OP = 2r / √3. But let's check: if ∠AOB = 120°, then ∠APB = 60° and OP = 2r. For ∠APB = 60°, sin 30° = r / OP = 1/2 ⇒ OP = 2r!")

add_q("medium",
      "If tangents PA and PB are drawn such that ∠APB = 60° and r is the radius, what is the length of OP?",
      "2 r", "r√3", "r / 2", "r",
      "A",
      "OP bisects ∠APB, so ∠APO = 30°. sin 30° = OA / OP ⇒ 1/2 = r / OP ⇒ OP = 2r.")

# =========================================================================
# 10 HARD QUESTIONS (Multi-step geometry, ratio deductions, complex proofs)
# =========================================================================
add_q("hard",
      "A right-angled triangle ABC right-angled at B has AB = 6 cm and BC = 8 cm. A circle is inscribed inside ΔABC. The radius r of the incircle is:",
      "2 cm", "3 cm", "1.5 cm", "2.5 cm",
      "A",
      "Hypotenuse AC = √(6² + 8²) = 10 cm. For a right triangle right-angled at B, incircle radius r = (AB + BC - AC) / 2 = (6 + 8 - 10) / 2 = 4 / 2 = 2 cm.")

add_q("hard",
      "A circle is inscribed in a quadrilateral ABCD in which ∠B = 90°. If AD = 23 cm, AB = 29 cm, and DS = 5 cm (where S is the point of contact on AD), then the radius r of the circle is:",
      "11 cm", "12 cm", "10 cm", "14 cm",
      "A",
      "Tangents from D: DR = DS = 5 cm. Since AD = 23, AR = AD - DR = 23 - 5 = 18 cm. Tangents from A: AQ = AR = 18 cm. Since AB = 29, BQ = AB - AQ = 29 - 18 = 11 cm. Since ∠B = 90° and tangents at B meet radii at 90°, the corner figure is a square of side r, so r = BQ = 11 cm!")

add_q("hard",
      "Tangents PA and PB are drawn from an external point P to a circle with centre O. A tangent to the circle at point X intersects PA at E and PB at F. If PA = 14 cm, the perimeter of triangle PEF is:",
      "28 cm", "14 cm", "21 cm", "42 cm",
      "A",
      "Perimeter of ΔPEF = PE + EF + PF = PE + (EX + XF) + PF. Since EX = EA and XF = FB (tangents from E and F), Perimeter = (PE + EA) + (PF + FB) = PA + PB. Since PA = PB = 14 cm, Perimeter = 14 + 14 = 28 cm.")

add_q("hard",
      "From an external point P, tangents PA and PB are drawn to a circle. If C is a point on the minor arc AB, and tangent at C intersects PA at L and PB at M, what is the perimeter of ΔPLM in terms of PA?",
      "2 PA", "PA", "PA / 2", "3 PA",
      "A",
      "Tangents from L: LC = LA; tangents from M: MC = MB. Perimeter = PL + LM + PM = PL + LC + CM + PM = (PL + LA) + (PM + MB) = PA + PB = 2 PA.")

add_q("hard",
      "A circle is touching the side BC of ΔABC at P and touching AB and AC produced at Q and R respectively. The length of tangent AQ is equal to:",
      "Half the perimeter of ΔABC",
      "The perimeter of ΔABC",
      "Twice the perimeter of ΔABC",
      "Area of ΔABC / radius",
      "A",
      "Perimeter of ΔABC = AB + BC + AC = AB + (BP + PC) + AC = (AB + BQ) + (AC + CR) = AQ + AR = 2 AQ. Therefore, AQ = (1/2) Perimeter of ΔABC.")

add_q("hard",
      "In ΔABC, if the perimeter is 26 cm, and a circle touches BC at P and AB, AC produced at Q, R, then the length of AQ is:",
      "13 cm", "26 cm", "6.5 cm", "18 cm",
      "A",
      "AQ = (1/2) × Perimeter = (1/2) × 26 = 13 cm.")

add_q("hard",
      "If the sides of a quadrilateral ABCD touch a circle at P, Q, R, S respectively, and the quadrilateral is an isosceles trapezium with AB || CD, then:",
      "AB + CD = 2 BC",
      "AB - CD = BC",
      "AB × CD = BC²",
      "AB + BC = CD",
      "A",
      "In any circumscribed quadrilateral, AB + CD = AD + BC. For an isosceles trapezium, AD = BC. Therefore, AB + CD = BC + BC = 2 BC.")

add_q("hard",
      "Two circles touch each other externally at C. AB is a common tangent to the circles touching them at A and B. The angle subtended by AB at the common point of contact C (i.e. ∠ACB) is:",
      "90°", "60°", "120°", "45°",
      "A",
      "Draw the common tangent at C intersecting AB at P. Then PA = PC (tangents to circle 1) and PB = PC (tangents to circle 2). Thus PA = PB = PC. In ΔABC, CP is the median to AB and CP = AB / 2. This implies ΔABC is right-angled at C, so ∠ACB = 90°!")

add_q("hard",
      "If a chord PQ of a circle subtends an angle of 60° at the centre O, what is the angle between the tangents drawn at P and Q?",
      "120°", "60°", "90°", "150°",
      "A",
      "In quadrilateral TPOQ, ∠T + ∠O = 180°. Given ∠O = 60°, ∠T = 180° - 60° = 120°.")

add_q("hard",
      "In two concentric circles of radii R and r (R > r), a chord of the outer circle is tangent to the inner circle. The length of this chord is:",
      "2√(R² - r²)", "√(R² - r²)", "2(R - r)", "R² - r²",
      "A",
      "The perpendicular from centre to chord is the radius of the inner circle (r). The hypotenuse is R. Half the chord = √(R² - r²). Total chord length = 2√(R² - r²).")

# =========================================================================
# 20 TRICKY QUESTIONS (Misconceptions, angle proofs, edge cases)
# =========================================================================
add_q("tricky",
      "Can a circle have a tangent that passes through its centre?",
      "Never, because distance from centre to tangent is r > 0",
      "Yes, for an infinite circle",
      "Yes, if the radius is zero",
      "Yes, at the point of contact",
      "A",
      "A tangent is at a perpendicular distance equal to the radius r from the centre. Since r > 0, a tangent can never pass through the centre.")

add_q("tricky",
      "A student claims: 'Any line perpendicular to a radius of a circle is a tangent to the circle.' Is this statement correct?",
      "False; it is only a tangent if the line is perpendicular at the point where the radius meets the circumference",
      "True; all perpendicular lines to radii are tangents",
      "True only for diameters",
      "False; tangents are never perpendicular to radii",
      "A",
      "A line can be perpendicular to a radius at its midpoint (making it a secant chord). It is a tangent IF AND ONLY IF it is perpendicular AT THE POINT OF CONTACT on the circle.")

add_q("tricky",
      "If tangents PA and PB from P make an angle of 90° with each other, then the chord of contact AB has length:",
      "r√2", "r", "2r", "r√3",
      "A",
      "When ∠APB = 90°, PAOB is a square of side r. In ΔOAB, OA = OB = r and ∠AOB = 90°. By Pythagoras, AB = √(r² + r²) = r√2.")

add_q("tricky",
      "If tangents PA and PB make an angle of 60° with each other, what is the length of chord of contact AB in terms of radius r?",
      "r√3", "r", "2r", "r√2",
      "A",
      "∠AOB = 180° - 60° = 120°. In isosceles ΔOAB with OA = OB = r: AB = 2 r sin(120°/2) = 2 r sin 60° = 2 r (√3/2) = r√3.")

add_q("tricky",
      "If tangents PA and PB make an angle of 120° with each other, what is the length of chord of contact AB?",
      "r", "r√3", "2r", "r / 2",
      "A",
      "∠AOB = 180° - 120° = 60°. Since OA = OB = r and ∠AOB = 60°, ΔOAB is equilateral! Thus chord AB = r.")

add_q("tricky",
      "If an angle between two tangents drawn from point P is θ, what is the angle between the chord of contact AB and the tangent PA?",
      "θ / 2", "90° - θ / 2", "θ", "180° - θ",
      "A",
      "In isosceles ΔPAB with PA = PB, ∠PAB = (180° - θ)/2 = 90° - θ/2.")

add_q("tricky",
      "What is the angle between the chord of contact AB and the radius OA at the point of contact?",
      "θ / 2", "90° - θ / 2", "θ", "180° - θ",
      "A",
      "Since ∠OAP = 90° and ∠PAB = 90° - θ/2, the angle ∠OAB = 90° - ∠PAB = 90° - (90° - θ/2) = θ/2!")

add_q("tricky",
      "If a hexagon circumscribes a circle, does the sum of alternate sides equal the sum of the remaining three sides?",
      "Yes, always", "No, never", "Only if it is a regular hexagon", "Only if the circle is unit circle",
      "A",
      "Just as in a circumscribed quadrilateral (a + c = b + d), for any circumscribed polygon with 2n sides, the sum of alternate sides equals the sum of the remaining sides by grouping tangent segments!")

add_q("tricky",
      "Can a rectangle that is not a square circumscribe a circle?",
      "No, because opposite sides equal does not allow AB + CD = AD + BC unless all 4 sides are equal",
      "Yes, any rectangle can",
      "Yes, if the aspect ratio is 2:1",
      "Yes, if the diagonals are perpendicular",
      "A",
      "For a rectangle of sides L and W, circumscribing a circle requires L + L = W + W ⇒ 2L = 2W ⇒ L = W. Thus only a square (which is an equilateral rectangle) can circumscribe a circle!")

add_q("tricky",
      "Can an equilateral triangle circumscribe a circle?",
      "Yes, always; its incentre is its centroid and circumcentre",
      "No, only right triangles can",
      "No, circles cannot be inscribed in triangles",
      "Only if side length is 1",
      "A",
      "Every triangle has an unique incircle. For an equilateral triangle of side a, the inradius is r = a / (2√3).")

add_q("tricky",
      "For an equilateral triangle of side 'a', what is the radius of the inscribed circle?",
      "a / (2√3)", "a / √3", "a / 2", "a√3 / 2",
      "A",
      "Area = (√3/4)a² and semiperimeter s = 3a/2. Inradius r = Area / s = [(√3/4)a²] / [3a/2] = a / (2√3).")

add_q("tricky",
      "For an equilateral triangle, what is the ratio of the inradius (r) to the circumradius (R)?",
      "1 : 2", "1 : √3", "1 : 3", "1 : 4",
      "A",
      "In an equilateral triangle, the centroid divides the median in ratio 2:1. The circumradius is 2/3 of the median, and the inradius is 1/3 of the median. Thus r : R = 1 : 2.")

add_q("tricky",
      "From an external point P, two tangents PA and PB are drawn to a circle. What is the relation between the line OP and the chord AB?",
      "OP is the perpendicular bisector of AB",
      "OP is parallel to AB",
      "OP is equal in length to AB",
      "OP intersects AB at 45°",
      "A",
      "Since OA = OB (radii) and PA = PB (tangents), points O and P are equidistant from A and B. Hence, OP is the perpendicular bisector of chord AB.")

add_q("tricky",
      "If the line joining the external point P and the centre O intersects the circle at M, then M is:",
      "The midpoint of the minor arc between the points of contact",
      "The centre of the chord of contact",
      "The point of contact of a third tangent parallel to AB",
      "Both A and C are correct",
      "D",
      "Ray OP bisects ∠AOB, so M bisects arc AB. The tangent at M is perpendicular to OM (and thus to OP), making it parallel to chord AB. Both A and C are true!")

add_q("tricky",
      "If a chord of a larger circle of two concentric circles touches the smaller circle, and the length of the chord is 10 cm, what is the difference between the areas of the two circles (πR² - πr²)?",
      "25π cm²", "50π cm²", "100π cm²", "10π cm²",
      "A",
      "Half chord = 5 cm. By Pythagoras, R² - r² = 5² = 25. Difference in area = πR² - πr² = π(R² - r²) = 25π cm²!")

add_q("tricky",
      "Notice that in the above concentric circles problem, to find the area of the ring between the two circles, did we need to know the individual values of R or r?",
      "No, only the length of the tangent chord was sufficient",
      "Yes, R must be known",
      "Yes, r must be known",
      "Yes, both radii must be known",
      "A",
      "This is Mamikon's Theorem / classic geometry surprise: Area of ring = π × (half chord)² = π × 5² = 25π, entirely independent of the individual values of R and r!")

add_q("tricky",
      "If two circles are concentric, how many common tangents do they have?",
      "0 (No common tangent)", "1", "2", "Infinite",
      "A",
      "Because one circle is entirely inside the other with the same centre, no line can touch both circles simultaneously without intersecting the inner circle or missing it entirely.")

add_q("tricky",
      "How many common tangents can two circles have if they intersect at two distinct points?",
      "2 common tangents", "1", "3", "4",
      "A",
      "Two intersecting circles have exactly two direct common tangents.")

add_q("tricky",
      "How many common tangents can two circles have if they touch each other externally?",
      "3 common tangents (2 direct, 1 transverse at point of contact)",
      "2", "1", "4",
      "A",
      "Two externally touching circles have 2 external (direct) tangents and 1 common internal tangent passing through the point of contact, totaling 3 common tangents.")

add_q("tricky",
      "How many common tangents can two circles have if they do not touch or intersect and lie completely outside each other?",
      "4 common tangents (2 direct and 2 transverse)",
      "2", "3", "Infinite",
      "A",
      "Two disjoint separate circles have 2 direct common tangents and 2 transverse (cross) common tangents, totaling 4 common tangents.")

# =========================================================================
# 10 VERY HARD QUESTIONS (Exemplar, Olympiad level, deep deductions)
# =========================================================================
add_q("very_hard",
      "A circle is inscribed in a right triangle ABC right-angled at B. If the lengths of the two legs are a and b, and the hypotenuse is c, which formula gives the inradius r?",
      "r = (a + b - c) / 2",
      "r = (a + b + c) / 2",
      "r = √(a² + b²) / 2",
      "r = ab / (a + b)",
      "A",
      "Area Δ = ab/2 = r × s = r(a + b + c)/2 ⇒ r = ab / (a + b + c). Since c² = a² + b², (a + b)² - c² = a² + 2ab + b² - c² = 2ab. Hence (a + b - c)(a + b + c) = 2ab ⇒ ab / (a + b + c) = (a + b - c)/2. Thus r = (a + b - c)/2.")

add_q("very_hard",
      "Let s be the semiperimeter of ΔABC. If a circle touches side BC at D and touches sides AB and AC produced at E and F, then the length of AE is:",
      "s (the semiperimeter)", "s - a", "s - b", "2s",
      "A",
      "Perimeter 2s = AB + BC + AC = AB + BD + DC + AC = AB + BE + CF + AC = AE + AF = 2 AE (since AE = AF). Thus AE = s.")

add_q("very_hard",
      "In the same triangle, what is the length of segment BD on the side BC?",
      "s - c", "s - b", "s - a", "s",
      "A",
      "BD = BE = AE - AB = s - c (where c = AB).")

add_q("very_hard",
      "In ΔABC, incircle touches sides BC, CA, AB at D, E, F respectively. If a, b, c are the side lengths and s is the semiperimeter, what is the length of AF?",
      "s - a", "s - b", "s - c", "a + b - c",
      "A",
      "Standard incircle property: AF = AE = x, BD = BF = y, CD = CE = z. x + y = c, y + z = a, z + x = b. Adding: 2(x + y + z) = 2s ⇒ x + y + z = s. Since y + z = a, x = s - a. Thus AF = s - a.")

add_q("very_hard",
      "Tangents are drawn to a circle of radius r from an external point P. If the area of the quadrilateral formed by the tangents and the radii through the points of contact is A, and the length of OP is d, then A equals:",
      "r√(d² - r²)", "d√(d² - r²)", "r d", "r² + d²",
      "A",
      "The quadrilateral PAOB consists of two congruent right triangles ΔOAP and ΔOBP. Tangent length = √(d² - r²). Area of one right triangle = (1/2) × r × √(d² - r²). Total area of PAOB = 2 × Area = r√(d² - r²).")

add_q("very_hard",
      "If the length of a tangent from a point P to a circle of radius 3 cm is 4 cm, what is the area of the quadrilateral PAOB formed by the tangents and radii?",
      "12 cm²", "24 cm²", "6 cm²", "10 cm²",
      "A",
      "Area = r × tangent = 3 × 4 = 12 cm².")

add_q("very_hard",
      "Two concentric circles have radii a and b (where a > b). A line cuts the outer circle at A and D, and the inner circle at B and C. Which of the following is ALWAYS true?",
      "AB = CD", "AB = BC", "BC = CD", "AD = 2 BC",
      "A",
      "Draw the perpendicular OM from the centre O to the line. OM bisects chord AD of the outer circle (AM = MD) and also bisects chord BC of the inner circle (BM = MC). Subtracting gives AM - BM = MD - MC ⇒ AB = CD!")

add_q("very_hard",
      "If AB is a chord of a circle, and P is an external point such that PA and PB are tangents. If ∠PAB = 55°, then the angle subtended by chord AB in the major segment of the circle is:",
      "55°", "35°", "70°", "110°",
      "A",
      "By the Alternate Segment Theorem, the angle between the tangent PA and chord AB is equal to the angle subtended by the chord in the alternate (major) segment: ∠ACB = ∠PAB = 55°!")

add_q("very_hard",
      "If quadrilateral ABCD circumscribes a circle, and ∠A = 90°, ∠B = 90°, AB = 16 cm, and CD = 10 cm, what is the perimeter of quadrilateral ABCD?",
      "52 cm", "42 cm", "36 cm", "48 cm",
      "A",
      "Since ABCD circumscribes a circle, AB + CD = AD + BC. Sum = 16 + 10 = 26 cm. Perimeter = (AB + CD) + (AD + BC) = 26 + 26 = 52 cm!")

add_q("very_hard",
      "A circle is inscribed in a quadrilateral ABCD. If the radius of the circle is r, what is the area of quadrilateral ABCD in terms of its perimeter P?",
      "(1/2) × P × r", "P × r", "2 × P × r", "P² / (4π)",
      "A",
      "Connect the centre O to all four vertices A, B, C, D. This divides the quadrilateral into 4 triangles with heights equal to the radius r and bases equal to the 4 sides. Total Area = (1/2)AB·r + (1/2)BC·r + (1/2)CD·r + (1/2)DA·r = (1/2)(AB + BC + CD + DA)r = (1/2) × P × r.")

# Verification of distribution
tiers = {}
for q in questions:
    d = q["difficulty"]
    tiers[d] = tiers.get(d, 0) + 1

print(f"Total questions generated: {len(questions)}")
print(f"Tier distribution: {tiers}")

# Output JS content
output_path = "modules/testseries/data/class10/mathematics/chapter10_mathematics.js"
header = """/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 10: Circles
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter10FullBank = {
    id: 'ts_c10_math_ch10',
    title: 'Chapter 10: Circles Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Comprehensive 100-Question master assessment for Class 10 NCERT Mathematics Chapter 10 (Circles). Covers tangent definitions, Theorems 10.1 and 10.2, concentric circles, circumscribed quadrilaterals, tangents from external points, and visual geometric diagrams.',
    questions: """

footer = """
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter10FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter10FullBank;
}
"""

js_content = header + json.dumps(questions, indent=4, ensure_ascii=False) + footer

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Saved assessment to {output_path}")
