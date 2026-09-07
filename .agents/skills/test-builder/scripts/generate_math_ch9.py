# -*- coding: utf-8 -*-
"""
Generator script for Class 10 Mathematics Chapter 9: Some Applications of Trigonometry
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
        "id": f"ts_c10_math_ch9_q{q_count}",
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
svg_elevation = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <line x1="40" y1="180" x2="360" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="340" y1="180" x2="340" y2="40" stroke="#0284c7" stroke-width="3"/>
  <line x1="60" y1="180" x2="340" y2="40" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,4"/>
  <circle cx="60" cy="180" r="4" fill="#0f172a"/>
  <text x="50" y="200" font-size="12" font-weight="bold" fill="#0f172a">Observer (A)</text>
  <circle cx="340" cy="40" r="4" fill="#0284c7"/>
  <text x="350" y="45" font-size="12" font-weight="bold" fill="#0284c7">Top (C)</text>
  <circle cx="340" cy="180" r="4" fill="#334155"/>
  <text x="350" y="195" font-size="12" font-weight="bold" fill="#334155">Base (B)</text>
  <path d="M 100 180 A 40 40 0 0 0 94 163" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="108" y="172" font-size="13" font-weight="bold" fill="#dc2626">θ (Elevation)</text>
  <text x="180" y="100" font-size="12" fill="#ea580c" font-style="italic">Line of Sight</text>
  <text x="180" y="200" font-size="12" fill="#475569">Horizontal Ground</text>
  <text x="345" y="115" font-size="12" fill="#0284c7" font-weight="bold">Height h</text>
</svg>'''

svg_depression = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <line x1="60" y1="40" x2="280" y2="40" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="60" y1="180" x2="380" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="180" x2="60" y2="40" stroke="#0284c7" stroke-width="3"/>
  <line x1="60" y1="40" x2="320" y2="180" stroke="#ea580c" stroke-width="2.5"/>
  <circle cx="60" cy="40" r="4" fill="#0284c7"/>
  <text x="15" y="45" font-size="12" font-weight="bold" fill="#0284c7">Observer (A)</text>
  <circle cx="320" cy="180" r="4" fill="#0f172a"/>
  <text x="325" y="200" font-size="12" font-weight="bold" fill="#0f172a">Object (C)</text>
  <path d="M 110 40 A 50 50 0 0 1 103 62" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="55" font-size="12" font-weight="bold" fill="#dc2626">θ (Depression)</text>
  <path d="M 270 180 A 50 50 0 0 1 278 158" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="240" y="172" font-size="12" font-weight="bold" fill="#dc2626">θ</text>
  <text x="170" y="105" font-size="12" fill="#ea580c" font-style="italic">Line of Sight</text>
  <text x="80" y="30" font-size="11" fill="#64748b">Horizontal Line</text>
</svg>'''

svg_broken_tree = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <line x1="40" y1="190" x2="360" y2="190" stroke="#334155" stroke-width="2"/>
  <line x1="80" y1="190" x2="80" y2="110" stroke="#15803d" stroke-width="5"/>
  <line x1="80" y1="110" x2="260" y2="190" stroke="#b45309" stroke-width="4"/>
  <line x1="80" y1="110" x2="80" y2="30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
  <circle cx="80" cy="190" r="4" fill="#334155"/>
  <text x="60" y="208" font-size="12" font-weight="bold" fill="#334155">B (Foot)</text>
  <circle cx="80" cy="110" r="4" fill="#15803d"/>
  <text x="35" y="115" font-size="12" font-weight="bold" fill="#15803d">C (Bend)</text>
  <circle cx="260" cy="190" r="4" fill="#b45309"/>
  <text x="265" y="208" font-size="12" font-weight="bold" fill="#b45309">A' (Top on ground)</text>
  <text x="150" y="208" font-size="12" fill="#0f172a" font-weight="bold">8 m</text>
  <path d="M 230 190 A 30 30 0 0 1 236 179" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="215" y="175" font-size="12" font-weight="bold" fill="#dc2626">30°</text>
  <text x="170" y="140" font-size="12" fill="#b45309">Broken part (AC)</text>
</svg>'''

svg_lighthouse_ships = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" width="100%" height="200" style="background:#f0f9ff; border-radius:8px; border:1px solid #bae6fd;">
  <line x1="50" y1="190" x2="410" y2="190" stroke="#0284c7" stroke-width="3"/>
  <line x1="80" y1="190" x2="80" y2="40" stroke="#475569" stroke-width="6"/>
  <line x1="80" y1="40" x2="300" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="80" y1="40" x2="240" y2="190" stroke="#ea580c" stroke-width="2"/>
  <line x1="80" y1="40" x2="360" y2="190" stroke="#7c3aed" stroke-width="2"/>
  <text x="20" y="115" font-size="12" font-weight="bold" fill="#334155">75 m Light</text>
  <circle cx="240" cy="190" r="5" fill="#ea580c"/>
  <text x="230" y="210" font-size="12" font-weight="bold" fill="#ea580c">Ship 1 (45°)</text>
  <circle cx="360" cy="190" r="5" fill="#7c3aed"/>
  <text x="350" y="210" font-size="12" font-weight="bold" fill="#7c3aed">Ship 2 (30°)</text>
  <text x="285" y="180" font-size="12" font-weight="bold" fill="#0369a1">Distance d = ?</text>
</svg>'''

svg_two_poles = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <line x1="40" y1="190" x2="400" y2="190" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="190" x2="60" y2="50" stroke="#0284c7" stroke-width="4"/>
  <line x1="380" y1="190" x2="380" y2="50" stroke="#0284c7" stroke-width="4"/>
  <circle cx="160" cy="190" r="4" fill="#dc2626"/>
  <text x="155" y="210" font-size="12" font-weight="bold" fill="#dc2626">Point P</text>
  <line x1="160" y1="190" x2="60" y2="50" stroke="#ea580c" stroke-width="2"/>
  <line x1="160" y1="190" x2="380" y2="50" stroke="#16a34a" stroke-width="2"/>
  <text x="45" y="40" font-size="12" font-weight="bold" fill="#0284c7">Pole 1 (h)</text>
  <text x="365" y="40" font-size="12" font-weight="bold" fill="#0284c7">Pole 2 (h)</text>
  <text x="95" y="180" font-size="11" fill="#ea580c" font-weight="bold">60°</text>
  <text x="195" y="180" font-size="11" fill="#16a34a" font-weight="bold">30°</text>
  <text x="200" y="208" font-size="12" font-weight="bold" fill="#0f172a">Road width = 80 m</text>
</svg>'''

# =========================================================================
# 50 EASY QUESTIONS (Concept definitions, basic single-step calculations)
# =========================================================================
add_q("easy",
      "The line drawn from the eye of an observer to the point in the object viewed by the observer is called the:",
      "Line of sight", "Horizontal line", "Line of inclination", "Axis of observation",
      "A",
      "NCERT Section 9.1: The line of sight is defined as the line drawn from the eye of an observer to the point in the object viewed by the observer.",
      svg_elevation)

add_q("easy",
      "The angle of elevation of a point viewed is formed by the line of sight with the horizontal when the point being viewed is:",
      "Below the horizontal level", "Above the horizontal level", "Directly at eye level", "At infinite distance",
      "B",
      "NCERT: Angle of elevation is the angle formed when we raise our head to look at an object, meaning the point is above the horizontal level.")

add_q("easy",
      "The angle of depression of a point viewed is formed by the line of sight with the horizontal when the point being viewed is:",
      "Above the horizontal level", "Below the horizontal level", "Along the vertical axis", "At infinity",
      "B",
      "NCERT: Angle of depression is formed when the object is below the horizontal level, i.e., when we lower our head to view the object.",
      svg_depression)

add_q("easy",
      "If an observer looks down at an object from the top of a tower with an angle of depression θ, what is the angle of elevation of the observer from the object?",
      "90° - θ", "θ", "180° - θ", "2θ",
      "B",
      "Because the horizontal line at the top and the ground level are parallel, the angle of depression and the angle of elevation are alternate interior angles, hence both are equal to θ.")

add_q("easy",
      "A tower stands vertically on the ground. From a point on the ground which is 15 m away from the foot of the tower, the angle of elevation of the top is 60°. The height of the tower is:",
      "15 m", "15√3 m", "15/√3 m", "30 m",
      "B",
      "In right ΔABC, tan 60° = AB/BC ⇒ √3 = AB/15 ⇒ AB = 15√3 m.")

add_q("easy",
      "A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. If the angle made by the rope with ground level is 30°, the height of the pole is:",
      "10 m", "20 m", "10√3 m", "5 m",
      "A",
      "In right triangle, sin 30° = Height / Rope ⇒ 1/2 = h / 20 ⇒ h = 10 m.")

add_q("easy",
      "The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. The height of the tower is:",
      "10 m", "10√3 m", "30√3 m", "15 m",
      "B",
      "tan 30° = h / 30 ⇒ 1/√3 = h / 30 ⇒ h = 30/√3 = 10√3 m.")

add_q("easy",
      "A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground inclined at 60°. Assuming no slack in the string, the length of the string is:",
      "40√3 m", "30√3 m", "60√3 m", "120 m",
      "A",
      "sin 60° = Height / Length ⇒ √3/2 = 60 / L ⇒ L = 120 / √3 = 40√3 m.")

add_q("easy",
      "If the height of a vertical pole is equal to the length of its shadow on the ground, the angle of elevation of the sun is:",
      "30°", "45°", "60°", "90°",
      "B",
      "tan θ = Height / Shadow = h / h = 1 ⇒ θ = 45°.")

add_q("easy",
      "If the ratio of the height of a tower and the length of its shadow is 1 : √3, then the angle of elevation of the sun is:",
      "30°", "45°", "60°", "75°",
      "A",
      "tan θ = h / shadow = 1 / √3 ⇒ θ = 30°.")

add_q("easy",
      "If the ratio of the height of a tower and the length of its shadow is √3 : 1, then the angle of elevation of the sun is:",
      "30°", "45°", "60°", "90°",
      "C",
      "tan θ = h / shadow = √3 / 1 = √3 ⇒ θ = 60°.")

add_q("easy",
      "An observer 1.5 m tall is 28.5 m away from a chimney. The chimney is 30 m high. The angle of elevation of the top of the chimney from her eyes is:",
      "30°", "45°", "60°", "15°",
      "B",
      "Height of chimney above eye level = 30 - 1.5 = 28.5 m. Distance = 28.5 m. tan θ = 28.5 / 28.5 = 1 ⇒ θ = 45°.")

add_q("easy",
      "What surveying instrument is traditionally used to measure angles of elevation and depression?",
      "Periscope", "Theodolite", "Sextant", "Altimeter",
      "B",
      "NCERT footnote / callout box: A theodolite is a precision optical instrument used by surveyors to measure horizontal and vertical angles.")

add_q("easy",
      "During the Great Trigonometric Survey of India in 1852, which giant theodolite was used to measure the height of Mount Everest?",
      "Theodolite weighing over half a ton (now housed at Survey of India museum, Dehradun)",
      "Digital infrared total station",
      "GPS differential receiver",
      "Pendulum clinometer",
      "A",
      "NCERT Chapter 9 historical note mentions the Great Theodolite weighing over half a ton built in 1852, housed at Dehradun.")

add_q("easy",
      "When the angle of elevation of the sun increases from 30° to 60°, the length of the shadow of a vertical tower:",
      "Increases", "Decreases", "Remains unchanged", "Doubles",
      "B",
      "As the sun rises higher in the sky (θ increases), the shadow length decreases because shadow = h / tan θ.")

add_q("easy",
      "If an observer moves towards the foot of a tall building, the angle of elevation of the top of the building:",
      "Decreases", "Increases", "Remains constant", "First increases then decreases",
      "B",
      "As distance d decreases, tan θ = h / d increases, so the angle of elevation θ increases.")

add_q("easy",
      "A ladder placed against a wall makes an angle of 60° with the ground. If the foot of the ladder is 2.5 m away from the wall, the length of the ladder is:",
      "5 m", "2.5√3 m", "5√3 m", "1.25 m",
      "A",
      "cos 60° = Base / Hypotenuse ⇒ 1/2 = 2.5 / L ⇒ L = 5 m.")

add_q("easy",
      "A ladder leaning against a wall reaches a height of 6 m. If the ladder makes an angle of 30° with the ground, the length of the ladder is:",
      "12 m", "6√3 m", "3 m", "8 m",
      "A",
      "sin 30° = 6 / L ⇒ 1/2 = 6 / L ⇒ L = 12 m.")

add_q("easy",
      "A tree breaks due to a storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. The height of the tree is:",
      "8√3 m", "16/√3 m", "24 m", "8 m",
      "A",
      "In right Δ, tan 30° = h1 / 8 ⇒ h1 = 8/√3. cos 30° = 8 / h2 ⇒ h2 = 16/√3. Total height = h1 + h2 = 24/√3 = 8√3 m.",
      svg_broken_tree)

add_q("easy",
      "From a point on the ground 20 m away from the foot of a vertical tower, the angle of elevation of the top is found to be 45°. The height of the tower is:",
      "10 m", "20 m", "20√2 m", "20√3 m",
      "B",
      "tan 45° = h / 20 ⇒ 1 = h / 20 ⇒ h = 20 m.")

add_q("easy",
      "A 6 m high pole casts a shadow of 2√3 m on the ground. The sun's elevation at that moment is:",
      "30°", "45°", "60°", "90°",
      "C",
      "tan θ = 6 / (2√3) = 3/√3 = √3 ⇒ θ = 60°.")

add_q("easy",
      "The angle of depression of a car parked on the road from the top of a 150 m high cliff is 30°. The distance of the car from the base of the cliff is:",
      "150√3 m", "150/√3 m", "75 m", "300 m",
      "A",
      "Angle of elevation = 30°. tan 30° = 150 / d ⇒ 1/√3 = 150 / d ⇒ d = 150√3 m.")

add_q("easy",
      "An electrician has to repair an electric fault on a pole of height 5 m. She needs to reach a point 1.3 m below the top of the pole. What is the height she needs to reach?",
      "5 m", "3.7 m", "6.3 m", "2.6 m",
      "B",
      "NCERT Example 2: Height to reach = 5 m - 1.3 m = 3.7 m.")

add_q("easy",
      "In the electrician problem, if the ladder is inclined at an angle of 60° to the horizontal, what trigonometric ratio is used to find the length of the ladder?",
      "sin 60°", "cos 60°", "tan 60°", "sec 60°",
      "A",
      "sin 60° = Opposite / Hypotenuse = 3.7 / L, which gives the ladder length directly.")

add_q("easy",
      "A slide for small children has a height of 1.5 m and is inclined at an angle of 30° to the ground. The length of the slide is:",
      "1.5 m", "3 m", "3√3 m", "4.5 m",
      "B",
      "sin 30° = 1.5 / L ⇒ 1/2 = 1.5 / L ⇒ L = 3 m.")

add_q("easy",
      "A steep slide for elder children has a height of 3 m and is inclined at an angle of 60° to the ground. The length of this slide is:",
      "2√3 m", "6 m", "3√3 m", "4 m",
      "A",
      "sin 60° = 3 / L ⇒ √3/2 = 3 / L ⇒ L = 6/√3 = 2√3 m.")

add_q("easy",
      "From a point on the ground, the angles of elevation of the bottom and top of a water tank fixed at the top of a 20 m high building are 45° and 60° respectively. The distance of the observation point from the building is:",
      "20 m", "20√3 m", "10 m", "40 m",
      "A",
      "Let distance be d. For the bottom of the tank (top of building), tan 45° = 20 / d ⇒ 1 = 20 / d ⇒ d = 20 m.")

add_q("easy",
      "A vertical wire attached to a 12 m high pole reaches a stake on the ground. If the wire makes an angle of 45° with the horizontal, the length of the wire is:",
      "12 m", "12√2 m", "24 m", "12√3 m",
      "B",
      "sin 45° = 12 / L ⇒ 1/√2 = 12 / L ⇒ L = 12√2 m.")

add_q("easy",
      "If an airplane climbs at an angle of 30° with the ground at a speed of 360 km/h, what is its vertical altitude after 1 minute?",
      "3000 m", "1500 m", "6000 m", "1000 m",
      "A",
      "Speed = 360 × (5/18) = 100 m/s. In 1 min (60 s), distance traveled along slope = 6000 m. Altitude = 6000 × sin 30° = 3000 m.")

add_q("easy",
      "From the top of a 7 m high building, the angle of depression of the foot of a cable tower is 45°. The distance between the building and the tower is:",
      "7 m", "14 m", "7√3 m", "3.5 m",
      "A",
      "tan 45° = 7 / d ⇒ 1 = 7 / d ⇒ d = 7 m.")

add_q("easy",
      "If the sun's angle of elevation is 0°, the length of the shadow of any vertical object is theoretically:",
      "Zero", "Equal to height", "Infinitely long", "Undefined",
      "C",
      "Shadow length = h / tan θ. As θ → 0°, tan θ → 0, so shadow length → ∞.")

add_q("easy",
      "If the sun's angle of elevation is 90° (overhead noon), the length of the shadow of a vertical pole is:",
      "Equal to height", "Zero", "Twice the height", "Infinite",
      "B",
      "Shadow length = h / tan 90° = h / ∞ = 0.")

add_q("easy",
      "In a right triangle with acute angle θ, if the opposite side is known and the adjacent side is to be determined, which ratio is most convenient?",
      "cos θ", "sin θ", "tan θ", "cosec θ",
      "C",
      "tan θ = Opposite / Adjacent, directly relating the opposite and adjacent sides.")

add_q("easy",
      "In a right triangle with acute angle θ, if the opposite side is known and the hypotenuse is to be determined, which ratio is most convenient?",
      "sin θ", "cos θ", "tan θ", "cot θ",
      "A",
      "sin θ = Opposite / Hypotenuse connects the known opposite side to the hypotenuse.")

add_q("easy",
      "A boy standing on horizontal ground observes a bird on top of a tree. The line segment connecting the boy's eye to the bird is called the:",
      "Line of sight", "Horizontal ray", "Altitude line", "Tangent ray",
      "A",
      "NCERT: The line connecting the eye of the observer to the object is the line of sight.")

add_q("easy",
      "A girl sitting on a balcony looks down at a flower pot on a garden pathway. Her line of sight is:",
      "Above the horizontal line", "Below the horizontal line", "Parallel to vertical", "Coincident with horizontal line",
      "B",
      "When looking down, the line of sight lies below the horizontal line of sight.")

add_q("easy",
      "The value of √3 often required in trigonometric heights and distances problems is approximately:",
      "1.414", "1.732", "2.236", "3.141",
      "B",
      "√3 ≈ 1.732 (standard NCERT value used in calculations).")

add_q("easy",
      "The value of √2 commonly used in trigonometry problems is approximately:",
      "1.732", "1.414", "1.618", "2.718",
      "B",
      "√2 ≈ 1.414.")

add_q("easy",
      "From a point P on the ground, the angle of elevation of the top of a 10 m tall building is 30°. The distance of point P from the building is (take √3 = 1.732):",
      "17.32 m", "10 m", "5.77 m", "20 m",
      "A",
      "tan 30° = 10 / d ⇒ 1/√3 = 10 / d ⇒ d = 10√3 = 10 × 1.732 = 17.32 m.")

add_q("easy",
      "A pole 10 m high casts a shadow 10 m long on the ground. The sun's altitude is:",
      "30°", "45°", "60°", "90°",
      "B",
      "tan θ = 10 / 10 = 1 ⇒ θ = 45°.")

add_q("easy",
      "If an observer's height is h_obs and the total height of a tower is H, the vertical distance from the observer's eye to the top of the tower is:",
      "H + h_obs", "H - h_obs", "H × h_obs", "H / h_obs",
      "B",
      "The eye is elevated at h_obs from the ground, so the remaining height above the eye is H - h_obs.")

add_q("easy",
      "A tower is 100√3 m high. The angle of elevation of its top from a point 100 m away from its foot is:",
      "30°", "45°", "60°", "90°",
      "C",
      "tan θ = 100√3 / 100 = √3 ⇒ θ = 60°.")

add_q("easy",
      "A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of 30°. If the height of the tower is 60 m, the distance of the car from the tower is:",
      "60 m", "60√3 m", "20√3 m", "120 m",
      "B",
      "tan 30° = 60 / d ⇒ d = 60 / (1/√3) = 60√3 m.")

add_q("easy",
      "A bridge across a river is at a height of 3 m. If an observer on the bridge looks down at a boat with an angle of depression of 45°, the horizontal distance of the boat from the bridge is:",
      "3 m", "3√3 m", "6 m", "1.5 m",
      "A",
      "tan 45° = 3 / d ⇒ 1 = 3 / d ⇒ d = 3 m.")

add_q("easy",
      "A straight vertical mast of a ship is 25 m tall. From a buoy in the sea, the angle of elevation of the top of the mast is 30°. The buoy is at what distance from the ship?",
      "25 m", "25√3 m", "50 m", "25/√3 m",
      "B",
      "tan 30° = 25 / d ⇒ d = 25√3 m.")

add_q("easy",
      "A 1.6 m tall statue stands on the top of a pedestal. If the angle of elevation of the top of the pedestal from a point on the ground is 45°, the distance from the point to the pedestal is equal to:",
      "The height of the statue", "The height of the pedestal", "Half the height of the pedestal", "Twice the height of the pedestal",
      "B",
      "Because tan 45° = 1 = h_pedestal / d, distance d is exactly equal to the height of the pedestal.")

add_q("easy",
      "If the angle of elevation of a cloud from a point h metres above a lake is θ, what is the nature of the triangle formed by the observer, cloud, and the vertical line through the cloud?",
      "Obtuse triangle", "Right-angled triangle", "Equilateral triangle", "Isosceles right triangle",
      "B",
      "The horizontal line from observer's eye and the vertical line through the cloud meet at 90°, forming a right-angled triangle.")

add_q("easy",
      "A 15 m long ladder leans against a vertical wall making an angle of 60° with the wall. How high does the ladder reach on the wall?",
      "15√3/2 m", "7.5 m", "15 m", "7.5√3 m",
      "B",
      "The angle with the wall is 60°, so the angle with the ground is 30°. Height = 15 × sin 30° = 7.5 m (or cos 60° = Height / 15 ⇒ Height = 15 × 0.5 = 7.5 m).")

add_q("easy",
      "A vertical flagstaff stands on horizontal ground. At a distance of 90 m from its foot, the angle of elevation of its top is found to be 30°. The height of the flagstaff is:",
      "30√3 m", "90√3 m", "45 m", "30 m",
      "A",
      "tan 30° = h / 90 ⇒ h = 90 / √3 = 30√3 m.")

add_q("easy",
      "In any right-angled triangle application problem, if the angle of elevation is 45°, the perpendicular and base of the triangle are:",
      "Equal", "In the ratio 1 : √3", "In the ratio √3 : 1", "In the ratio 1 : 2",
      "A",
      "tan 45° = Perpendicular / Base = 1 ⇒ Perpendicular = Base.")

# =========================================================================
# 10 MEDIUM QUESTIONS (Standard 2-step NCERT textbook problems)
# =========================================================================
add_q("medium",
      "From a point on the ground, the angles of elevation of the bottom and top of a transmission tower fixed at the top of a 20 m high building are 45° and 60° respectively. The height of the transmission tower is:",
      "20√3 m", "20(√3 - 1) m", "20(√3 + 1) m", "40 m",
      "B",
      "Let distance be d. tan 45° = 20/d ⇒ d = 20 m. tan 60° = (20 + h)/d ⇒ √3 = (20 + h)/20 ⇒ 20 + h = 20√3 ⇒ h = 20(√3 - 1) m.")

add_q("medium",
      "A 1.5 m tall boy is standing at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from 30° to 60° as he walks towards the building. The distance he walked towards the building is:",
      "19√3 m", "28.5√3 m", "9.5√3 m", "15√3 m",
      "A",
      "Height above eye level = 30 - 1.5 = 28.5 m. At 30°, distance d1 = 28.5 / tan 30° = 28.5√3. At 60°, distance d2 = 28.5 / tan 60° = 28.5/√3 = 9.5√3. Distance walked = 28.5√3 - 9.5√3 = 19√3 m.")

add_q("medium",
      "The shadow of a tower standing on level ground is found to be 40 m longer when the sun's altitude is 30° than when it is 60°. The height of the tower is:",
      "20√3 m", "40√3 m", "20 m", "30√3 m",
      "A",
      "Let height be h. Shadow at 60° = h/√3. Shadow at 30° = h√3. Difference: h√3 - h/√3 = 40 ⇒ 2h/√3 = 40 ⇒ h = 20√3 m.")

add_q("medium",
      "As observed from the top of a 75 m high lighthouse from the sea-level, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, the distance between the two ships is:",
      "75(√3 - 1) m", "75(√3 + 1) m", "75√3 m", "150 m",
      "A",
      "Distance to first ship d1 = 75 / tan 45° = 75 m. Distance to second ship d2 = 75 / tan 30° = 75√3 m. Distance between them = 75√3 - 75 = 75(√3 - 1) m.",
      svg_lighthouse_ships)

add_q("medium",
      "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. The height of the tower is:",
      "7(√3 + 1) m", "7(√3 - 1) m", "14√3 m", "21 m",
      "A",
      "Distance d between building and tower = 7 / tan 45° = 7 m. Height of tower above building = d × tan 60° = 7√3 m. Total tower height = 7 + 7√3 = 7(√3 + 1) m.")

add_q("medium",
      "The angle of elevation of the top of a building from the foot of a tower is 30° and the angle of elevation of the top of the tower from the foot of the building is 60°. If the tower is 50 m high, the height of the building is:",
      "16⅔ m (50/3 m)", "25 m", "10√3 m", "50√3 m",
      "A",
      "From tower of 50 m: tan 60° = 50 / d ⇒ d = 50 / √3. From building: tan 30° = h / d ⇒ h = d × tan 30° = (50 / √3) × (1 / √3) = 50 / 3 = 16⅔ m.")

add_q("medium",
      "Two poles of equal heights are standing opposite each other on either side of the road, which is 80 m wide. From a point between them on the road, the angles of elevation of the tops of the poles are 60° and 30°. The height of the poles is:",
      "20√3 m", "40 m", "30√3 m", "20 m",
      "A",
      "Let height be h. Distances are x and 80 - x. tan 60° = h/x ⇒ x = h/√3. tan 30° = h/(80-x) ⇒ 80 - x = h√3. Adding: 80 = h√3 + h/√3 = 4h/√3 ⇒ h = 20√3 m.",
      svg_two_poles)

add_q("medium",
      "In the two poles problem (road width 80 m, angles 60° and 30°), what are the respective distances of the observation point from the two poles?",
      "20 m and 60 m", "30 m and 50 m", "40 m and 40 m", "25 m and 55 m",
      "A",
      "Since x = h / √3 = 20√3 / √3 = 20 m. The second distance = 80 - 20 = 60 m.")

add_q("medium",
      "A TV tower stands vertically on a bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of the top is 60°. From another point 20 m away from this point on the line joining this point to the foot of the tower, the angle of elevation of the top is 30°. The width of the canal is:",
      "10 m", "20 m", "10√3 m", "15 m",
      "A",
      "Let canal width be x. Height h = x tan 60° = x√3. Also tan 30° = h / (x + 20) ⇒ x + 20 = h√3 = (x√3)√3 = 3x ⇒ 2x = 20 ⇒ x = 10 m.")

add_q("medium",
      "In the canal and TV tower problem above, what is the height of the TV tower?",
      "10√3 m", "20√3 m", "30 m", "15√3 m",
      "A",
      "Height h = x√3 = 10√3 m.")

# =========================================================================
# 10 HARD QUESTIONS (Multi-step conditions, algebraic elimination)
# =========================================================================
add_q("hard",
      "A 1.2 m tall girl spots a balloon moving with the wind in a horizontal line at a height of 88.2 m from the ground. The angle of elevation of the balloon from the eyes of the girl at any instant is 60°. After some time, the angle of elevation reduces to 30°. The distance travelled by the balloon during the interval is:",
      "58√3 m", "87√3 m", "29√3 m", "58 m",
      "A",
      "Height above eye level = 88.2 - 1.2 = 87 m. Initially, d1 = 87 / tan 60° = 87 / √3 = 29√3 m. Later, d2 = 87 / tan 30° = 87√3 m. Distance travelled = d2 - d1 = 87√3 - 29√3 = 58√3 m.")

add_q("hard",
      "A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of 30°, which is approaching the foot of the tower with a uniform speed. Six seconds later, the angle of depression of the car is found to be 60°. The time taken by the car to reach the foot of the tower from this point is:",
      "3 seconds", "6 seconds", "4 seconds", "2 seconds",
      "A",
      "Let tower height be h. Initial distance = h√3. Later distance = h/√3. Distance covered in 6 s = h√3 - h/√3 = 2h/√3. Remaining distance to foot = h/√3, which is exactly half of the distance covered. At uniform speed, time taken = 6 / 2 = 3 seconds.")

add_q("hard",
      "A statue, 1.6 m tall, stands on the top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and from the same point the angle of elevation of the top of the pedestal is 45°. The height of the pedestal is:",
      "0.8(√3 + 1) m", "0.8(√3 - 1) m", "1.6(√3 + 1) m", "1.6√3 m",
      "A",
      "Let pedestal height be h. tan 45° = h / d ⇒ d = h. tan 60° = (h + 1.6) / d = (h + 1.6) / h ⇒ h√3 = h + 1.6 ⇒ h(√3 - 1) = 1.6 ⇒ h = 1.6 / (√3 - 1) = 1.6(√3 + 1) / 2 = 0.8(√3 + 1) m.")

add_q("hard",
      "The angles of depression of the top and the bottom of an 8 m tall building from the top of a multi-storeyed building are 30° and 45°, respectively. The height of the multi-storeyed building is:",
      "4(3 + √3) m", "8(3 + √3) m", "4(√3 - 1) m", "12√3 m",
      "A",
      "Let height be H and distance between buildings be d. tan 45° = H / d ⇒ d = H. Also tan 30° = (H - 8) / d = (H - 8) / H ⇒ H / √3 = H - 8 ⇒ H(1 - 1/√3) = 8 ⇒ H(√3 - 1)/√3 = 8 ⇒ H = 8√3 / (√3 - 1) = 8√3(√3 + 1)/2 = 4(3 + √3) m.")

add_q("hard",
      "From a point on a bridge across a river, the angles of depression of the banks on opposite sides of the river are 30° and 45°, respectively. If the bridge is at a height of 3 m from the banks, the width of the river is:",
      "3(1 + √3) m", "3(√3 - 1) m", "6√3 m", "3√3 m",
      "A",
      "The two banks are on opposite sides of the perpendicular from the bridge. Distance to bank 1 = 3 / tan 30° = 3√3 m. Distance to bank 2 = 3 / tan 45° = 3 m. Total river width = 3√3 + 3 = 3(1 + √3) m.")

add_q("hard",
      "An aeroplane at an altitude of 1200 m finds that two ships are sailing towards it in the same direction. The angles of depression of the ships as observed from the aeroplane are 45° and 30° respectively. The distance between the ships is:",
      "1200(√3 - 1) m", "1200(√3 + 1) m", "600√3 m", "2400 m",
      "A",
      "Distance to nearer ship = 1200 / tan 45° = 1200 m. Distance to farther ship = 1200 / tan 30° = 1200√3 m. Distance between ships = 1200√3 - 1200 = 1200(√3 - 1) m.")

add_q("hard",
      "The angle of elevation of a cloud from a point h metres above a lake is α and the angle of depression of its reflection in the lake is β. The height of the cloud above the lake surface is:",
      "h(tan β + tan α) / (tan β - tan α)",
      "h(tan β - tan α) / (tan β + tan α)",
      "h(cot α + cot β) / (cot α - cot β)",
      "h tan α tan β",
      "A",
      "Let height of cloud above lake be H. Cloud is H - h above observation level. Reflection is H + h below observation level. tan α = (H - h)/d and tan β = (H + h)/d. Eliminating d: (H - h)/tan α = (H + h)/tan β ⇒ H(tan β - tan α) = h(tan β + tan α) ⇒ H = h(tan β + tan α)/(tan β - tan α).")

add_q("hard",
      "If the angle of elevation of a cloud from a point 60 m above a lake is 30° and the angle of depression of its reflection in the lake is 60°, the height of the cloud above the surface of the lake is:",
      "120 m", "180 m", "60√3 m", "240 m",
      "A",
      "Using H = h(tan 60° + tan 30°) / (tan 60° - tan 30°) = 60(√3 + 1/√3) / (√3 - 1/√3) = 60(4/√3) / (2/√3) = 60 × 2 = 120 m.")

add_q("hard",
      "A round balloon of radius r subtends an angle α at the eye of the observer, while the angle of elevation of its centre is β. The height of the centre of the balloon is:",
      "r sin β cosec(α/2)", "r cos β cosec(α/2)", "r sin(α/2) cosec β", "r sin β sin(α/2)",
      "A",
      "Let O be centre and d be distance from eye to O. In tangent triangle, sin(α/2) = r / d ⇒ d = r cosec(α/2). Height of centre h = d sin β = r sin β cosec(α/2).")

add_q("hard",
      "From the top of a light house, the angles of depression of two ships on opposite sides of it are observed to be α and β. If the height of the light house is h metres and the line joining the ships passes through the foot of the light house, the distance between the ships is:",
      "h(cot α + cot β)", "h(tan α + tan β)", "h(tan α - tan β)", "h / (cot α + cot β)",
      "A",
      "Distance to ship 1 = h cot α. Distance to ship 2 on opposite side = h cot β. Since they are on opposite sides, total distance = h cot α + h cot β = h(cot α + cot β).")

# =========================================================================
# 20 TRICKY QUESTIONS (Common student pitfalls, subtleties, edge cases)
# =========================================================================
add_q("tricky",
      "A student states: 'If the angle of elevation of the top of a tower doubles, the height of the tower must also double (for a fixed observation point)'. This statement is:",
      "Always false because tan(2θ) ≠ 2 tan θ",
      "Always true by linearity of triangles",
      "True only when θ = 30°",
      "True only when θ = 45°",
      "A",
      "Height h = d tan θ. Since tan 2θ = 2 tan θ / (1 - tan²θ) ≠ 2 tan θ (except at θ = 0), doubling the angle does NOT double the height.")

add_q("tricky",
      "When a person standing on the ground looks at the top of a tower, the angle of elevation is θ. If the person climbs onto a stool of height s, the new angle of elevation θ':",
      "Decreases", "Increases", "Remains unchanged", "Becomes 90°",
      "A",
      "Common student misconception! The vertical distance from eye to top is now (H - s), which is LESS than before, while horizontal distance remains the same. Thus tan θ' = (H - s)/d < H/d = tan θ, so the angle of elevation decreases!")

add_q("tricky",
      "If the angle of elevation of the sun changes from 45° to 30°, by what factor does the shadow of a vertical pole increase?",
      "Increases by √3 times",
      "Increases by (√3 - 1) times the pole height",
      "Increases by a factor of 2",
      "Decreases by 50%",
      "B",
      "Initial shadow = h / tan 45° = h. Final shadow = h / tan 30° = h√3. Increase in shadow length = h√3 - h = h(√3 - 1). It increases by (√3 - 1) times the pole height, not √3 times!")

add_q("tricky",
      "In measuring the height of a building, an observer forgets to add his own height of 1.7 m to the calculated vertical side of the right triangle. His final calculated height will be:",
      "Underestimated by 1.7 m",
      "Overestimated by 1.7 m",
      "Exactly correct",
      "Dependent on the angle of elevation",
      "A",
      "The eye is 1.7 m above the ground, so the right triangle only yields the height ABOVE the eye. Omitting observer height underestimates total height by 1.7 m.")

add_q("tricky",
      "A man on the deck of a ship is 10 m above water level. He observes the angle of elevation of the top of a cliff is 60° and the angle of depression of the base of the cliff is 30°. The height of the cliff is:",
      "40 m", "30 m", "20 m", "50 m",
      "A",
      "From depression of base: tan 30° = 10 / d ⇒ d = 10√3 m. Height of cliff above deck = d tan 60° = 10√3 × √3 = 30 m. Total cliff height = 30 + 10 = 40 m. Many students forget to add the 10 m deck height!")

add_q("tricky",
      "The angle of elevation of the top of a vertical tower from two points on the ground at distances 'a' and 'b' (where a > b) from the foot of the tower and in the same straight line with it are complementary. The height of the tower is:",
      "√(ab)", "ab", "a / b", "√(a/b)",
      "A",
      "Let angles be θ and 90° - θ. tan θ = h/a, and tan(90° - θ) = cot θ = h/b. Multiplying: tan θ × cot θ = (h/a) × (h/b) ⇒ 1 = h² / (ab) ⇒ h = √(ab).")

add_q("tricky",
      "If two towers of heights h1 and h2 subtend angles of 60° and 30° respectively at the midpoint of the line joining their feet, then the ratio h1 : h2 is:",
      "3 : 1", "1 : 3", "√3 : 1", "1 : √3",
      "A",
      "Midpoint distance is d for both. tan 60° = h1 / d ⇒ h1 = d√3. tan 30° = h2 / d ⇒ h2 = d / √3. Ratio h1 / h2 = (d√3) / (d / √3) = 3 / 1.")

add_q("tricky",
      "A flagstaff of height h stands on top of a tower of height H. If the angles of elevation of the bottom and top of the flagstaff from a point on the ground are α and β respectively, then H equals:",
      "h tan α / (tan β - tan α)",
      "h tan β / (tan β - tan α)",
      "h (tan β - tan α) / tan α",
      "h cot α / (cot α - cot β)",
      "A",
      "Let distance be d. tan α = H / d ⇒ d = H / tan α. tan β = (H + h)/d ⇒ d = (H + h)/tan β. Equating d: H / tan α = (H + h)/tan β ⇒ H tan β = H tan α + h tan α ⇒ H(tan β - tan α) = h tan α ⇒ H = h tan α / (tan β - tan α).")

add_q("tricky",
      "From an airplane flying horizontally above a straight road, the angles of depression of two consecutive kilometre stones on the same side of the aircraft are α and β (α > β). The height of the aircraft is:",
      "tan α tan β / (tan α - tan β) km",
      "(tan α - tan β) / (tan α tan β) km",
      "(cot α - cot β) km",
      "tan α tan β / (tan α + tan β) km",
      "A",
      "Distance between stones = 1 km. d1 = h cot α, d2 = h cot β. d2 - d1 = 1 ⇒ h(cot β - cot α) = 1 ⇒ h = 1 / (1/tan β - 1/tan α) = tan α tan β / (tan α - tan β) km.")

add_q("tricky",
      "A pole of height 6 m casts a shadow of 2√3 m at 9:00 AM. At 12:00 noon on the same day at the equator (sun directly overhead), the length of the shadow is:",
      "0 m", "2√3 m", "6 m", "3 m",
      "A",
      "At noon at the equator, the sun is directly overhead (elevation = 90°), so shadow length = 6 / tan 90° = 0 m.")

add_q("tricky",
      "If the angle of elevation of the top of a tower from three collinear points A, B, C on a line passing through the foot are 30°, 45°, 60° respectively, then the ratio of AB : BC is:",
      "(√3 - 1) : (3 - √3)",
      "√3 : 1",
      "1 : 1",
      "2 : 1",
      "B",
      "OA = h cot 30° = h√3. OB = h cot 45° = h. OC = h cot 60° = h/√3. AB = OA - OB = h(√3 - 1). BC = OB - OC = h(1 - 1/√3) = h(√3 - 1)/√3. Thus AB / BC = h(√3 - 1) / [h(√3 - 1)/√3] = √3 : 1.")

add_q("tricky",
      "An observer looks at a 2 m high window on the first floor from a distance of 10 m and then at a 2 m high window on the third floor. Do both windows subtend the same angle at the observer's eye?",
      "No, the higher window subtends a smaller angle at the eye",
      "Yes, because both windows are 2 m in height",
      "No, the higher window subtends a larger angle",
      "It depends on the observer's height",
      "A",
      "As distance to the object increases, the angle subtended by a fixed vertical height diminishes (visual angle decreases).")

add_q("tricky",
      "A 5 m long ladder leans against a wall. The bottom slips away from the wall at a certain distance. If the angle of inclination with the ground decreases, the height reached by the ladder on the wall:",
      "Decreases", "Increases", "Remains 5 m", "First increases then decreases",
      "A",
      "Height = 5 × sin θ. As θ decreases, sin θ decreases, so the ladder slides DOWN the wall.")

add_q("tricky",
      "If the angle of elevation of the top of a tower from a distance of 100 m is 45°, and from the top of the tower the angle of depression of the observer is measured, it must be:",
      "45°", "90°", "135°", "0°",
      "A",
      "By alternate interior angles between parallel horizontals, angle of depression = angle of elevation = 45°.")

add_q("tricky",
      "A bird is sitting on top of an 80 m high tree. From a point on the ground, the angle of elevation of the bird is 45°. The bird flies away horizontally with constant speed. After 2 seconds, the angle of elevation is 30°. The speed of the bird is (take √3 = 1.732):",
      "29.28 m/s", "58.56 m/s", "40 m/s", "14.64 m/s",
      "A",
      "Initially d1 = 80 / tan 45° = 80 m. Later d2 = 80 / tan 30° = 80√3 ≈ 138.56 m. Distance flown in 2 s = 138.56 - 80 = 58.56 m. Speed = 58.56 / 2 = 29.28 m/s.")

add_q("tricky",
      "A man in a boat rowing away from a cliff 150 m high takes 2 minutes to change the angle of elevation of the top of the cliff from 60° to 45°. The speed of the boat in metres per minute is:",
      "75(√3 - 1) m/min",
      "150(1 - 1/√3) m/min",
      "75(3 - √3) m/min",
      "25√3 m/min",
      "B",
      "Initial distance = 150 / tan 60° = 150/√3 = 50√3 m. Final distance = 150 / tan 45° = 150 m. Distance travelled = 150 - 50√3 = 150(1 - 1/√3) m. Speed = (150 - 50√3) / 2 = 75 - 25√3 = 25(3 - √3) m/min = 150(1 - 1/√3) / 2 = 75(1 - 1/√3) m/min = 25(3 - √3) m/min = 75(1 - 1/√3) m/min.")

add_q("tricky",
      "The shadow of a vertical tower on level ground increases by 10 m when the altitude of the sun changes from 45° to 30°. The height of the tower is:",
      "5(√3 + 1) m", "10(√3 + 1) m", "5(√3 - 1) m", "10√3 m",
      "A",
      "Let height be h. Shadow at 45° = h. Shadow at 30° = h√3. h√3 - h = 10 ⇒ h(√3 - 1) = 10 ⇒ h = 10 / (√3 - 1) = 10(√3 + 1) / 2 = 5(√3 + 1) m.")

add_q("tricky",
      "A vertical stick 20 m long casts a shadow 10 m long on the ground. At the same time, a tower casts a shadow 50 m long on the ground. The height of the tower is:",
      "100 m", "25 m", "50 m", "75 m",
      "A",
      "At the same time, the sun's elevation θ is the same. tan θ = 20 / 10 = 2. For tower: tan θ = H / 50 ⇒ 2 = H / 50 ⇒ H = 100 m.")

add_q("tricky",
      "If the angles of elevation of the top of a tower from two points at distances of 4 m and 9 m from the base of the tower and in the same straight line with it are complementary, the height of the tower is:",
      "6 m", "13 m", "36 m", "5 m",
      "A",
      "NCERT Exercise 9.1 (famous problem): h = √(a × b) = √(4 × 9) = √36 = 6 m.")

add_q("tricky",
      "In the complementary angles problem, why do the angles θ and (90° - θ) guarantee that h = √(ab)?",
      "Because tan θ × tan(90° - θ) = tan θ × cot θ = 1",
      "Because tan θ + tan(90° - θ) = 1",
      "Because sin²θ + cos²θ = 1",
      "Because sec²θ - tan²θ = 1",
      "A",
      "Since tan(90° - θ) = cot θ, their product is identically 1, leading to (h/a)(h/b) = 1 ⇒ h² = ab ⇒ h = √(ab).")

# =========================================================================
# 10 VERY HARD QUESTIONS (Deep multi-concept synthesis, Olympiad/Exemplar)
# =========================================================================
add_q("very_hard",
      "A man on the top of a vertical observation tower observes a car moving at a uniform speed directly towards the base. If it takes 12 minutes for the angle of depression to change from 30° to 45°, how much additional time will it take to reach the base?",
      "6(√3 + 1) minutes ≈ 16.39 min",
      "12 / (√3 - 1) minutes = 6(√3 + 1) min",
      "6(√3 - 1) minutes",
      "12√3 minutes",
      "B",
      "Initial distance = h√3, intermediate distance = h. Distance travelled in 12 min = h(√3 - 1). Speed v = h(√3 - 1) / 12. Remaining distance = h. Additional time = h / v = 12 / (√3 - 1) = 12(√3 + 1) / 2 = 6(√3 + 1) minutes.")

add_q("very_hard",
      "From the top of a tower of height h, the angles of depression of two objects on the horizontal ground in the same direction are α and β (where α > β). The distance between the two objects is:",
      "h(cot β - cot α)", "h(cot α - cot β)", "h(tan α - tan β)", "h / (cot β - cot α)",
      "A",
      "The nearer object has depression α, distance d1 = h cot α. The farther object has depression β, distance d2 = h cot β. Distance between them = d2 - d1 = h(cot β - cot α).")

add_q("very_hard",
      "A ladder rests against a vertical wall at an angle α to the horizontal. Its foot is pulled away from the wall through a distance 'a', so that its upper end slides a distance 'b' down the wall, making an angle β with the horizontal. Which equation correctly relates a and b?",
      "a / b = (cos β - cos α) / (sin α - sin β)",
      "a / b = (sin α - sin β) / (cos β - cos α)",
      "a / b = tan α tan β",
      "a × b = L²",
      "A",
      "Let ladder length be L. Initially, foot x1 = L cos α, top y1 = L sin α. After sliding, foot x2 = L cos β, top y2 = L sin β. Here a = x2 - x1 = L(cos β - cos α), and b = y1 - y2 = L(sin α - sin β). Dividing gives a / b = (cos β - cos α) / (sin α - sin β).")

add_q("very_hard",
      "The angle of elevation of the top of a vertical tower from a point A due south of it is 45° and from a point B due east of it is 30°. If AB = 40 m, the height of the tower is:",
      "20 m", "20√2 m", "40 m", "10√2 m",
      "A",
      "Let tower foot be O. Triangle AOB is right-angled at O (South and East are perpendicular). OA = h cot 45° = h. OB = h cot 30° = h√3. By Pythagoras in ΔAOB: OA² + OB² = AB² ⇒ h² + (h√3)² = 40² ⇒ h² + 3h² = 1600 ⇒ 4h² = 1600 ⇒ h² = 400 ⇒ h = 20 m!")

add_q("very_hard",
      "A pole stands vertically inside a triangular park ABC. If the angle of elevation of the top of the pole from each of the vertices A, B, and C is the same, the foot of the pole must be at the:",
      "Circumcentre of ΔABC",
      "Incentre of ΔABC",
      "Orthocentre of ΔABC",
      "Centroid of ΔABC",
      "A",
      "If elevation θ is same from A, B, C: h / OA = h / OB = h / OC = tan θ ⇒ OA = OB = OC. The point equidistant from all three vertices of a triangle is its circumcentre!")

add_q("very_hard",
      "A pole stands vertically inside a triangular park ABC. If the angle of elevation of the top of the pole from each of the three sides (edges) of the park is equal, the foot of the pole must be at the:",
      "Incentre of ΔABC",
      "Circumcentre of ΔABC",
      "Centroid of ΔABC",
      "Orthocentre of ΔABC",
      "A",
      "If the angle of elevation is the same from all three sides, the perpendicular distance from the foot of the pole to each side must be equal (h / d = tan θ ⇒ d is constant). The unique point equidistant from all three sides of a triangle is the incentre!")

add_q("very_hard",
      "The angle of elevation of a cliff from a fixed point is θ. After going up a distance of 'k' metres towards the top of the cliff at an angle of inclination φ, the angle of elevation is found to be α. The height of the cliff is:",
      "k(sin φ - cos φ tan α) / (1 - tan α cot θ)",
      "k(cos φ sin α - sin φ cos α) / (sin(α - θ))",
      "k sin φ / (tan α - tan θ)",
      "k cos φ / (cot θ - cot α)",
      "A",
      "Standard classic problem: Resolving the displacement k into horizontal k cos φ and vertical k sin φ, the remaining height H - k sin φ and remaining distance (H cot θ - k cos φ) satisfy tan α = (H - k sin φ)/(H cot θ - k cos φ), giving H = k(sin φ - cos φ tan α) / (1 - tan α cot θ).")

add_q("very_hard",
      "Two boats approach a lighthouse along lines making an angle of 60° with each other. When both boats are at equal distances of 100 m from the base of the lighthouse, the angle of elevation of the top of the lighthouse from each boat is 45°. The distance between the two boats is:",
      "100 m", "100√3 m", "50√3 m", "200 m",
      "A",
      "Let base of lighthouse be O, and boats be B1 and B2. OB1 = 100 m, OB2 = 100 m, and ∠B1OB2 = 60°. ΔB1OB2 is an isosceles triangle with vertex angle 60°, which makes it an equilateral triangle! Therefore, the distance B1B2 = 100 m.")

add_q("very_hard",
      "An observer at ground level observes that a satellite passes directly overhead at an altitude of 600 km. When the satellite has moved so that its angle of elevation from the observer is 30°, what is the straight-line distance from the observer to the satellite (neglecting Earth's curvature)?",
      "1200 km", "600√3 km", "300 km", "600 km",
      "A",
      "In the right triangle formed by observer, point on ground directly under satellite, and satellite: sin 30° = Altitude / Line of Sight Distance ⇒ 1/2 = 600 / d ⇒ d = 1200 km.")

add_q("very_hard",
      "A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff of height h. At a point on the plane, the angles of elevation of the bottom and top of the flagstaff are α and β. If α = 30° and β = 60°, what fraction of the total combined height is the flagstaff alone?",
      "2/3", "1/2", "3/4", "1/3",
      "A",
      "Let tower height be H and distance be d. tan 30° = H / d ⇒ d = H√3. tan 60° = (H + h)/d ⇒ H + h = d√3 = (H√3)√3 = 3H ⇒ h = 2H. Total height = H + h = 3H. Fraction = h / (H + h) = 2H / 3H = 2/3!")

# Verification of distribution
tiers = {}
for q in questions:
    d = q["difficulty"]
    tiers[d] = tiers.get(d, 0) + 1

print(f"Total questions generated: {len(questions)}")
print(f"Tier distribution: {tiers}")

# Output JS content
output_path = "modules/testseries/data/class10/mathematics/chapter9_mathematics.js"
header = """/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 9: Some Applications of Trigonometry
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter9FullBank = {
    id: 'ts_c10_math_ch9',
    title: 'Chapter 9: Some Applications of Trigonometry Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Comprehensive 100-Question master assessment for Class 10 NCERT Mathematics Chapter 9 (Some Applications of Trigonometry). Exhaustively tests line of sight, angle of elevation, angle of depression, multi-step height/distance calculations, and visual geometric diagrams.',
    questions: """

footer = """
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter9FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter9FullBank;
}
"""

js_content = header + json.dumps(questions, indent=4, ensure_ascii=False) + footer

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Saved assessment to {output_path}")
