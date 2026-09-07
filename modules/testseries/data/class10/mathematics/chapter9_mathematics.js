/* =========================================================================
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
    questions: [
    {
        "id": "ts_c10_math_ch9_q1",
        "question_number": 1,
        "question": "The line drawn from the eye of an observer to the point in the object viewed by the observer is called the:",
        "difficulty": "easy",
        "option_a": "Line of sight",
        "option_b": "Horizontal line",
        "option_c": "Line of inclination",
        "option_d": "Axis of observation",
        "options": {
            "A": "Line of sight",
            "B": "Horizontal line",
            "C": "Line of inclination",
            "D": "Axis of observation"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 9.1: The line of sight is defined as the line drawn from the eye of an observer to the point in the object viewed by the observer.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 220\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"40\" y1=\"180\" x2=\"360\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"340\" y1=\"180\" x2=\"340\" y2=\"40\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"340\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2.5\" stroke-dasharray=\"4,4\"/>\n  <circle cx=\"60\" cy=\"180\" r=\"4\" fill=\"#0f172a\"/>\n  <text x=\"50\" y=\"200\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\">Observer (A)</text>\n  <circle cx=\"340\" cy=\"40\" r=\"4\" fill=\"#0284c7\"/>\n  <text x=\"350\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">Top (C)</text>\n  <circle cx=\"340\" cy=\"180\" r=\"4\" fill=\"#334155\"/>\n  <text x=\"350\" y=\"195\" font-size=\"12\" font-weight=\"bold\" fill=\"#334155\">Base (B)</text>\n  <path d=\"M 100 180 A 40 40 0 0 0 94 163\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"108\" y=\"172\" font-size=\"13\" font-weight=\"bold\" fill=\"#dc2626\">θ (Elevation)</text>\n  <text x=\"180\" y=\"100\" font-size=\"12\" fill=\"#ea580c\" font-style=\"italic\">Line of Sight</text>\n  <text x=\"180\" y=\"200\" font-size=\"12\" fill=\"#475569\">Horizontal Ground</text>\n  <text x=\"345\" y=\"115\" font-size=\"12\" fill=\"#0284c7\" font-weight=\"bold\">Height h</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch9_q2",
        "question_number": 2,
        "question": "The angle of elevation of a point viewed is formed by the line of sight with the horizontal when the point being viewed is:",
        "difficulty": "easy",
        "option_a": "Below the horizontal level",
        "option_b": "Above the horizontal level",
        "option_c": "Directly at eye level",
        "option_d": "At infinite distance",
        "options": {
            "A": "Below the horizontal level",
            "B": "Above the horizontal level",
            "C": "Directly at eye level",
            "D": "At infinite distance"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT: Angle of elevation is the angle formed when we raise our head to look at an object, meaning the point is above the horizontal level."
    },
    {
        "id": "ts_c10_math_ch9_q3",
        "question_number": 3,
        "question": "The angle of depression of a point viewed is formed by the line of sight with the horizontal when the point being viewed is:",
        "difficulty": "easy",
        "option_a": "Above the horizontal level",
        "option_b": "Below the horizontal level",
        "option_c": "Along the vertical axis",
        "option_d": "At infinity",
        "options": {
            "A": "Above the horizontal level",
            "B": "Below the horizontal level",
            "C": "Along the vertical axis",
            "D": "At infinity"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT: Angle of depression is formed when the object is below the horizontal level, i.e., when we lower our head to view the object.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 220\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"60\" y1=\"40\" x2=\"280\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,5\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"380\" y2=\"180\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"60\" y2=\"40\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n  <line x1=\"60\" y1=\"40\" x2=\"320\" y2=\"180\" stroke=\"#ea580c\" stroke-width=\"2.5\"/>\n  <circle cx=\"60\" cy=\"40\" r=\"4\" fill=\"#0284c7\"/>\n  <text x=\"15\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">Observer (A)</text>\n  <circle cx=\"320\" cy=\"180\" r=\"4\" fill=\"#0f172a\"/>\n  <text x=\"325\" y=\"200\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\">Object (C)</text>\n  <path d=\"M 110 40 A 50 50 0 0 1 103 62\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"120\" y=\"55\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">θ (Depression)</text>\n  <path d=\"M 270 180 A 50 50 0 0 1 278 158\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"240\" y=\"172\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">θ</text>\n  <text x=\"170\" y=\"105\" font-size=\"12\" fill=\"#ea580c\" font-style=\"italic\">Line of Sight</text>\n  <text x=\"80\" y=\"30\" font-size=\"11\" fill=\"#64748b\">Horizontal Line</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch9_q4",
        "question_number": 4,
        "question": "If an observer looks down at an object from the top of a tower with an angle of depression θ, what is the angle of elevation of the observer from the object?",
        "difficulty": "easy",
        "option_a": "90° - θ",
        "option_b": "θ",
        "option_c": "180° - θ",
        "option_d": "2θ",
        "options": {
            "A": "90° - θ",
            "B": "θ",
            "C": "180° - θ",
            "D": "2θ"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Because the horizontal line at the top and the ground level are parallel, the angle of depression and the angle of elevation are alternate interior angles, hence both are equal to θ."
    },
    {
        "id": "ts_c10_math_ch9_q5",
        "question_number": 5,
        "question": "A tower stands vertically on the ground. From a point on the ground which is 15 m away from the foot of the tower, the angle of elevation of the top is 60°. The height of the tower is:",
        "difficulty": "easy",
        "option_a": "15 m",
        "option_b": "15√3 m",
        "option_c": "15/√3 m",
        "option_d": "30 m",
        "options": {
            "A": "15 m",
            "B": "15√3 m",
            "C": "15/√3 m",
            "D": "30 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In right ΔABC, tan 60° = AB/BC ⇒ √3 = AB/15 ⇒ AB = 15√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q6",
        "question_number": 6,
        "question": "A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. If the angle made by the rope with ground level is 30°, the height of the pole is:",
        "difficulty": "easy",
        "option_a": "10 m",
        "option_b": "20 m",
        "option_c": "10√3 m",
        "option_d": "5 m",
        "options": {
            "A": "10 m",
            "B": "20 m",
            "C": "10√3 m",
            "D": "5 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In right triangle, sin 30° = Height / Rope ⇒ 1/2 = h / 20 ⇒ h = 10 m."
    },
    {
        "id": "ts_c10_math_ch9_q7",
        "question_number": 7,
        "question": "The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. The height of the tower is:",
        "difficulty": "easy",
        "option_a": "10 m",
        "option_b": "10√3 m",
        "option_c": "30√3 m",
        "option_d": "15 m",
        "options": {
            "A": "10 m",
            "B": "10√3 m",
            "C": "30√3 m",
            "D": "15 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 30° = h / 30 ⇒ 1/√3 = h / 30 ⇒ h = 30/√3 = 10√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q8",
        "question_number": 8,
        "question": "A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground inclined at 60°. Assuming no slack in the string, the length of the string is:",
        "difficulty": "easy",
        "option_a": "40√3 m",
        "option_b": "30√3 m",
        "option_c": "60√3 m",
        "option_d": "120 m",
        "options": {
            "A": "40√3 m",
            "B": "30√3 m",
            "C": "60√3 m",
            "D": "120 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin 60° = Height / Length ⇒ √3/2 = 60 / L ⇒ L = 120 / √3 = 40√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q9",
        "question_number": 9,
        "question": "If the height of a vertical pole is equal to the length of its shadow on the ground, the angle of elevation of the sun is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "90°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "90°"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = Height / Shadow = h / h = 1 ⇒ θ = 45°."
    },
    {
        "id": "ts_c10_math_ch9_q10",
        "question_number": 10,
        "question": "If the ratio of the height of a tower and the length of its shadow is 1 : √3, then the angle of elevation of the sun is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "75°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "75°"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = h / shadow = 1 / √3 ⇒ θ = 30°."
    },
    {
        "id": "ts_c10_math_ch9_q11",
        "question_number": 11,
        "question": "If the ratio of the height of a tower and the length of its shadow is √3 : 1, then the angle of elevation of the sun is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "90°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "90°"
        },
        "correct_option": "C",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = h / shadow = √3 / 1 = √3 ⇒ θ = 60°."
    },
    {
        "id": "ts_c10_math_ch9_q12",
        "question_number": 12,
        "question": "An observer 1.5 m tall is 28.5 m away from a chimney. The chimney is 30 m high. The angle of elevation of the top of the chimney from her eyes is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "15°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "15°"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Height of chimney above eye level = 30 - 1.5 = 28.5 m. Distance = 28.5 m. tan θ = 28.5 / 28.5 = 1 ⇒ θ = 45°."
    },
    {
        "id": "ts_c10_math_ch9_q13",
        "question_number": 13,
        "question": "What surveying instrument is traditionally used to measure angles of elevation and depression?",
        "difficulty": "easy",
        "option_a": "Periscope",
        "option_b": "Theodolite",
        "option_c": "Sextant",
        "option_d": "Altimeter",
        "options": {
            "A": "Periscope",
            "B": "Theodolite",
            "C": "Sextant",
            "D": "Altimeter"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT footnote / callout box: A theodolite is a precision optical instrument used by surveyors to measure horizontal and vertical angles."
    },
    {
        "id": "ts_c10_math_ch9_q14",
        "question_number": 14,
        "question": "During the Great Trigonometric Survey of India in 1852, which giant theodolite was used to measure the height of Mount Everest?",
        "difficulty": "easy",
        "option_a": "Theodolite weighing over half a ton (now housed at Survey of India museum, Dehradun)",
        "option_b": "Digital infrared total station",
        "option_c": "GPS differential receiver",
        "option_d": "Pendulum clinometer",
        "options": {
            "A": "Theodolite weighing over half a ton (now housed at Survey of India museum, Dehradun)",
            "B": "Digital infrared total station",
            "C": "GPS differential receiver",
            "D": "Pendulum clinometer"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Chapter 9 historical note mentions the Great Theodolite weighing over half a ton built in 1852, housed at Dehradun."
    },
    {
        "id": "ts_c10_math_ch9_q15",
        "question_number": 15,
        "question": "When the angle of elevation of the sun increases from 30° to 60°, the length of the shadow of a vertical tower:",
        "difficulty": "easy",
        "option_a": "Increases",
        "option_b": "Decreases",
        "option_c": "Remains unchanged",
        "option_d": "Doubles",
        "options": {
            "A": "Increases",
            "B": "Decreases",
            "C": "Remains unchanged",
            "D": "Doubles"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "As the sun rises higher in the sky (θ increases), the shadow length decreases because shadow = h / tan θ."
    },
    {
        "id": "ts_c10_math_ch9_q16",
        "question_number": 16,
        "question": "If an observer moves towards the foot of a tall building, the angle of elevation of the top of the building:",
        "difficulty": "easy",
        "option_a": "Decreases",
        "option_b": "Increases",
        "option_c": "Remains constant",
        "option_d": "First increases then decreases",
        "options": {
            "A": "Decreases",
            "B": "Increases",
            "C": "Remains constant",
            "D": "First increases then decreases"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "As distance d decreases, tan θ = h / d increases, so the angle of elevation θ increases."
    },
    {
        "id": "ts_c10_math_ch9_q17",
        "question_number": 17,
        "question": "A ladder placed against a wall makes an angle of 60° with the ground. If the foot of the ladder is 2.5 m away from the wall, the length of the ladder is:",
        "difficulty": "easy",
        "option_a": "5 m",
        "option_b": "2.5√3 m",
        "option_c": "5√3 m",
        "option_d": "1.25 m",
        "options": {
            "A": "5 m",
            "B": "2.5√3 m",
            "C": "5√3 m",
            "D": "1.25 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "cos 60° = Base / Hypotenuse ⇒ 1/2 = 2.5 / L ⇒ L = 5 m."
    },
    {
        "id": "ts_c10_math_ch9_q18",
        "question_number": 18,
        "question": "A ladder leaning against a wall reaches a height of 6 m. If the ladder makes an angle of 30° with the ground, the length of the ladder is:",
        "difficulty": "easy",
        "option_a": "12 m",
        "option_b": "6√3 m",
        "option_c": "3 m",
        "option_d": "8 m",
        "options": {
            "A": "12 m",
            "B": "6√3 m",
            "C": "3 m",
            "D": "8 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin 30° = 6 / L ⇒ 1/2 = 6 / L ⇒ L = 12 m."
    },
    {
        "id": "ts_c10_math_ch9_q19",
        "question_number": 19,
        "question": "A tree breaks due to a storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. The height of the tree is:",
        "difficulty": "easy",
        "option_a": "8√3 m",
        "option_b": "16/√3 m",
        "option_c": "24 m",
        "option_d": "8 m",
        "options": {
            "A": "8√3 m",
            "B": "16/√3 m",
            "C": "24 m",
            "D": "8 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In right Δ, tan 30° = h1 / 8 ⇒ h1 = 8/√3. cos 30° = 8 / h2 ⇒ h2 = 16/√3. Total height = h1 + h2 = 24/√3 = 8√3 m.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 220\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"40\" y1=\"190\" x2=\"360\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"80\" y1=\"190\" x2=\"80\" y2=\"110\" stroke=\"#15803d\" stroke-width=\"5\"/>\n  <line x1=\"80\" y1=\"110\" x2=\"260\" y2=\"190\" stroke=\"#b45309\" stroke-width=\"4\"/>\n  <line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n  <circle cx=\"80\" cy=\"190\" r=\"4\" fill=\"#334155\"/>\n  <text x=\"60\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#334155\">B (Foot)</text>\n  <circle cx=\"80\" cy=\"110\" r=\"4\" fill=\"#15803d\"/>\n  <text x=\"35\" y=\"115\" font-size=\"12\" font-weight=\"bold\" fill=\"#15803d\">C (Bend)</text>\n  <circle cx=\"260\" cy=\"190\" r=\"4\" fill=\"#b45309\"/>\n  <text x=\"265\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#b45309\">A' (Top on ground)</text>\n  <text x=\"150\" y=\"208\" font-size=\"12\" fill=\"#0f172a\" font-weight=\"bold\">8 m</text>\n  <path d=\"M 230 190 A 30 30 0 0 1 236 179\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"215\" y=\"175\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">30°</text>\n  <text x=\"170\" y=\"140\" font-size=\"12\" fill=\"#b45309\">Broken part (AC)</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch9_q20",
        "question_number": 20,
        "question": "From a point on the ground 20 m away from the foot of a vertical tower, the angle of elevation of the top is found to be 45°. The height of the tower is:",
        "difficulty": "easy",
        "option_a": "10 m",
        "option_b": "20 m",
        "option_c": "20√2 m",
        "option_d": "20√3 m",
        "options": {
            "A": "10 m",
            "B": "20 m",
            "C": "20√2 m",
            "D": "20√3 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 45° = h / 20 ⇒ 1 = h / 20 ⇒ h = 20 m."
    },
    {
        "id": "ts_c10_math_ch9_q21",
        "question_number": 21,
        "question": "A 6 m high pole casts a shadow of 2√3 m on the ground. The sun's elevation at that moment is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "90°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "90°"
        },
        "correct_option": "C",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = 6 / (2√3) = 3/√3 = √3 ⇒ θ = 60°."
    },
    {
        "id": "ts_c10_math_ch9_q22",
        "question_number": 22,
        "question": "The angle of depression of a car parked on the road from the top of a 150 m high cliff is 30°. The distance of the car from the base of the cliff is:",
        "difficulty": "easy",
        "option_a": "150√3 m",
        "option_b": "150/√3 m",
        "option_c": "75 m",
        "option_d": "300 m",
        "options": {
            "A": "150√3 m",
            "B": "150/√3 m",
            "C": "75 m",
            "D": "300 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Angle of elevation = 30°. tan 30° = 150 / d ⇒ 1/√3 = 150 / d ⇒ d = 150√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q23",
        "question_number": 23,
        "question": "An electrician has to repair an electric fault on a pole of height 5 m. She needs to reach a point 1.3 m below the top of the pole. What is the height she needs to reach?",
        "difficulty": "easy",
        "option_a": "5 m",
        "option_b": "3.7 m",
        "option_c": "6.3 m",
        "option_d": "2.6 m",
        "options": {
            "A": "5 m",
            "B": "3.7 m",
            "C": "6.3 m",
            "D": "2.6 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Example 2: Height to reach = 5 m - 1.3 m = 3.7 m."
    },
    {
        "id": "ts_c10_math_ch9_q24",
        "question_number": 24,
        "question": "In the electrician problem, if the ladder is inclined at an angle of 60° to the horizontal, what trigonometric ratio is used to find the length of the ladder?",
        "difficulty": "easy",
        "option_a": "sin 60°",
        "option_b": "cos 60°",
        "option_c": "tan 60°",
        "option_d": "sec 60°",
        "options": {
            "A": "sin 60°",
            "B": "cos 60°",
            "C": "tan 60°",
            "D": "sec 60°"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin 60° = Opposite / Hypotenuse = 3.7 / L, which gives the ladder length directly."
    },
    {
        "id": "ts_c10_math_ch9_q25",
        "question_number": 25,
        "question": "A slide for small children has a height of 1.5 m and is inclined at an angle of 30° to the ground. The length of the slide is:",
        "difficulty": "easy",
        "option_a": "1.5 m",
        "option_b": "3 m",
        "option_c": "3√3 m",
        "option_d": "4.5 m",
        "options": {
            "A": "1.5 m",
            "B": "3 m",
            "C": "3√3 m",
            "D": "4.5 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin 30° = 1.5 / L ⇒ 1/2 = 1.5 / L ⇒ L = 3 m."
    },
    {
        "id": "ts_c10_math_ch9_q26",
        "question_number": 26,
        "question": "A steep slide for elder children has a height of 3 m and is inclined at an angle of 60° to the ground. The length of this slide is:",
        "difficulty": "easy",
        "option_a": "2√3 m",
        "option_b": "6 m",
        "option_c": "3√3 m",
        "option_d": "4 m",
        "options": {
            "A": "2√3 m",
            "B": "6 m",
            "C": "3√3 m",
            "D": "4 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin 60° = 3 / L ⇒ √3/2 = 3 / L ⇒ L = 6/√3 = 2√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q27",
        "question_number": 27,
        "question": "From a point on the ground, the angles of elevation of the bottom and top of a water tank fixed at the top of a 20 m high building are 45° and 60° respectively. The distance of the observation point from the building is:",
        "difficulty": "easy",
        "option_a": "20 m",
        "option_b": "20√3 m",
        "option_c": "10 m",
        "option_d": "40 m",
        "options": {
            "A": "20 m",
            "B": "20√3 m",
            "C": "10 m",
            "D": "40 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let distance be d. For the bottom of the tank (top of building), tan 45° = 20 / d ⇒ 1 = 20 / d ⇒ d = 20 m."
    },
    {
        "id": "ts_c10_math_ch9_q28",
        "question_number": 28,
        "question": "A vertical wire attached to a 12 m high pole reaches a stake on the ground. If the wire makes an angle of 45° with the horizontal, the length of the wire is:",
        "difficulty": "easy",
        "option_a": "12 m",
        "option_b": "12√2 m",
        "option_c": "24 m",
        "option_d": "12√3 m",
        "options": {
            "A": "12 m",
            "B": "12√2 m",
            "C": "24 m",
            "D": "12√3 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin 45° = 12 / L ⇒ 1/√2 = 12 / L ⇒ L = 12√2 m."
    },
    {
        "id": "ts_c10_math_ch9_q29",
        "question_number": 29,
        "question": "If an airplane climbs at an angle of 30° with the ground at a speed of 360 km/h, what is its vertical altitude after 1 minute?",
        "difficulty": "easy",
        "option_a": "3000 m",
        "option_b": "1500 m",
        "option_c": "6000 m",
        "option_d": "1000 m",
        "options": {
            "A": "3000 m",
            "B": "1500 m",
            "C": "6000 m",
            "D": "1000 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Speed = 360 × (5/18) = 100 m/s. In 1 min (60 s), distance traveled along slope = 6000 m. Altitude = 6000 × sin 30° = 3000 m."
    },
    {
        "id": "ts_c10_math_ch9_q30",
        "question_number": 30,
        "question": "From the top of a 7 m high building, the angle of depression of the foot of a cable tower is 45°. The distance between the building and the tower is:",
        "difficulty": "easy",
        "option_a": "7 m",
        "option_b": "14 m",
        "option_c": "7√3 m",
        "option_d": "3.5 m",
        "options": {
            "A": "7 m",
            "B": "14 m",
            "C": "7√3 m",
            "D": "3.5 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 45° = 7 / d ⇒ 1 = 7 / d ⇒ d = 7 m."
    },
    {
        "id": "ts_c10_math_ch9_q31",
        "question_number": 31,
        "question": "If the sun's angle of elevation is 0°, the length of the shadow of any vertical object is theoretically:",
        "difficulty": "easy",
        "option_a": "Zero",
        "option_b": "Equal to height",
        "option_c": "Infinitely long",
        "option_d": "Undefined",
        "options": {
            "A": "Zero",
            "B": "Equal to height",
            "C": "Infinitely long",
            "D": "Undefined"
        },
        "correct_option": "C",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Shadow length = h / tan θ. As θ → 0°, tan θ → 0, so shadow length → ∞."
    },
    {
        "id": "ts_c10_math_ch9_q32",
        "question_number": 32,
        "question": "If the sun's angle of elevation is 90° (overhead noon), the length of the shadow of a vertical pole is:",
        "difficulty": "easy",
        "option_a": "Equal to height",
        "option_b": "Zero",
        "option_c": "Twice the height",
        "option_d": "Infinite",
        "options": {
            "A": "Equal to height",
            "B": "Zero",
            "C": "Twice the height",
            "D": "Infinite"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Shadow length = h / tan 90° = h / ∞ = 0."
    },
    {
        "id": "ts_c10_math_ch9_q33",
        "question_number": 33,
        "question": "In a right triangle with acute angle θ, if the opposite side is known and the adjacent side is to be determined, which ratio is most convenient?",
        "difficulty": "easy",
        "option_a": "cos θ",
        "option_b": "sin θ",
        "option_c": "tan θ",
        "option_d": "cosec θ",
        "options": {
            "A": "cos θ",
            "B": "sin θ",
            "C": "tan θ",
            "D": "cosec θ"
        },
        "correct_option": "C",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = Opposite / Adjacent, directly relating the opposite and adjacent sides."
    },
    {
        "id": "ts_c10_math_ch9_q34",
        "question_number": 34,
        "question": "In a right triangle with acute angle θ, if the opposite side is known and the hypotenuse is to be determined, which ratio is most convenient?",
        "difficulty": "easy",
        "option_a": "sin θ",
        "option_b": "cos θ",
        "option_c": "tan θ",
        "option_d": "cot θ",
        "options": {
            "A": "sin θ",
            "B": "cos θ",
            "C": "tan θ",
            "D": "cot θ"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "sin θ = Opposite / Hypotenuse connects the known opposite side to the hypotenuse."
    },
    {
        "id": "ts_c10_math_ch9_q35",
        "question_number": 35,
        "question": "A boy standing on horizontal ground observes a bird on top of a tree. The line segment connecting the boy's eye to the bird is called the:",
        "difficulty": "easy",
        "option_a": "Line of sight",
        "option_b": "Horizontal ray",
        "option_c": "Altitude line",
        "option_d": "Tangent ray",
        "options": {
            "A": "Line of sight",
            "B": "Horizontal ray",
            "C": "Altitude line",
            "D": "Tangent ray"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT: The line connecting the eye of the observer to the object is the line of sight."
    },
    {
        "id": "ts_c10_math_ch9_q36",
        "question_number": 36,
        "question": "A girl sitting on a balcony looks down at a flower pot on a garden pathway. Her line of sight is:",
        "difficulty": "easy",
        "option_a": "Above the horizontal line",
        "option_b": "Below the horizontal line",
        "option_c": "Parallel to vertical",
        "option_d": "Coincident with horizontal line",
        "options": {
            "A": "Above the horizontal line",
            "B": "Below the horizontal line",
            "C": "Parallel to vertical",
            "D": "Coincident with horizontal line"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "When looking down, the line of sight lies below the horizontal line of sight."
    },
    {
        "id": "ts_c10_math_ch9_q37",
        "question_number": 37,
        "question": "The value of √3 often required in trigonometric heights and distances problems is approximately:",
        "difficulty": "easy",
        "option_a": "1.414",
        "option_b": "1.732",
        "option_c": "2.236",
        "option_d": "3.141",
        "options": {
            "A": "1.414",
            "B": "1.732",
            "C": "2.236",
            "D": "3.141"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "√3 ≈ 1.732 (standard NCERT value used in calculations)."
    },
    {
        "id": "ts_c10_math_ch9_q38",
        "question_number": 38,
        "question": "The value of √2 commonly used in trigonometry problems is approximately:",
        "difficulty": "easy",
        "option_a": "1.732",
        "option_b": "1.414",
        "option_c": "1.618",
        "option_d": "2.718",
        "options": {
            "A": "1.732",
            "B": "1.414",
            "C": "1.618",
            "D": "2.718"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "√2 ≈ 1.414."
    },
    {
        "id": "ts_c10_math_ch9_q39",
        "question_number": 39,
        "question": "From a point P on the ground, the angle of elevation of the top of a 10 m tall building is 30°. The distance of point P from the building is (take √3 = 1.732):",
        "difficulty": "easy",
        "option_a": "17.32 m",
        "option_b": "10 m",
        "option_c": "5.77 m",
        "option_d": "20 m",
        "options": {
            "A": "17.32 m",
            "B": "10 m",
            "C": "5.77 m",
            "D": "20 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 30° = 10 / d ⇒ 1/√3 = 10 / d ⇒ d = 10√3 = 10 × 1.732 = 17.32 m."
    },
    {
        "id": "ts_c10_math_ch9_q40",
        "question_number": 40,
        "question": "A pole 10 m high casts a shadow 10 m long on the ground. The sun's altitude is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "90°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "90°"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = 10 / 10 = 1 ⇒ θ = 45°."
    },
    {
        "id": "ts_c10_math_ch9_q41",
        "question_number": 41,
        "question": "If an observer's height is h_obs and the total height of a tower is H, the vertical distance from the observer's eye to the top of the tower is:",
        "difficulty": "easy",
        "option_a": "H + h_obs",
        "option_b": "H - h_obs",
        "option_c": "H × h_obs",
        "option_d": "H / h_obs",
        "options": {
            "A": "H + h_obs",
            "B": "H - h_obs",
            "C": "H × h_obs",
            "D": "H / h_obs"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The eye is elevated at h_obs from the ground, so the remaining height above the eye is H - h_obs."
    },
    {
        "id": "ts_c10_math_ch9_q42",
        "question_number": 42,
        "question": "A tower is 100√3 m high. The angle of elevation of its top from a point 100 m away from its foot is:",
        "difficulty": "easy",
        "option_a": "30°",
        "option_b": "45°",
        "option_c": "60°",
        "option_d": "90°",
        "options": {
            "A": "30°",
            "B": "45°",
            "C": "60°",
            "D": "90°"
        },
        "correct_option": "C",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan θ = 100√3 / 100 = √3 ⇒ θ = 60°."
    },
    {
        "id": "ts_c10_math_ch9_q43",
        "question_number": 43,
        "question": "A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of 30°. If the height of the tower is 60 m, the distance of the car from the tower is:",
        "difficulty": "easy",
        "option_a": "60 m",
        "option_b": "60√3 m",
        "option_c": "20√3 m",
        "option_d": "120 m",
        "options": {
            "A": "60 m",
            "B": "60√3 m",
            "C": "20√3 m",
            "D": "120 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 30° = 60 / d ⇒ d = 60 / (1/√3) = 60√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q44",
        "question_number": 44,
        "question": "A bridge across a river is at a height of 3 m. If an observer on the bridge looks down at a boat with an angle of depression of 45°, the horizontal distance of the boat from the bridge is:",
        "difficulty": "easy",
        "option_a": "3 m",
        "option_b": "3√3 m",
        "option_c": "6 m",
        "option_d": "1.5 m",
        "options": {
            "A": "3 m",
            "B": "3√3 m",
            "C": "6 m",
            "D": "1.5 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 45° = 3 / d ⇒ 1 = 3 / d ⇒ d = 3 m."
    },
    {
        "id": "ts_c10_math_ch9_q45",
        "question_number": 45,
        "question": "A straight vertical mast of a ship is 25 m tall. From a buoy in the sea, the angle of elevation of the top of the mast is 30°. The buoy is at what distance from the ship?",
        "difficulty": "easy",
        "option_a": "25 m",
        "option_b": "25√3 m",
        "option_c": "50 m",
        "option_d": "25/√3 m",
        "options": {
            "A": "25 m",
            "B": "25√3 m",
            "C": "50 m",
            "D": "25/√3 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 30° = 25 / d ⇒ d = 25√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q46",
        "question_number": 46,
        "question": "A 1.6 m tall statue stands on the top of a pedestal. If the angle of elevation of the top of the pedestal from a point on the ground is 45°, the distance from the point to the pedestal is equal to:",
        "difficulty": "easy",
        "option_a": "The height of the statue",
        "option_b": "The height of the pedestal",
        "option_c": "Half the height of the pedestal",
        "option_d": "Twice the height of the pedestal",
        "options": {
            "A": "The height of the statue",
            "B": "The height of the pedestal",
            "C": "Half the height of the pedestal",
            "D": "Twice the height of the pedestal"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Because tan 45° = 1 = h_pedestal / d, distance d is exactly equal to the height of the pedestal."
    },
    {
        "id": "ts_c10_math_ch9_q47",
        "question_number": 47,
        "question": "If the angle of elevation of a cloud from a point h metres above a lake is θ, what is the nature of the triangle formed by the observer, cloud, and the vertical line through the cloud?",
        "difficulty": "easy",
        "option_a": "Obtuse triangle",
        "option_b": "Right-angled triangle",
        "option_c": "Equilateral triangle",
        "option_d": "Isosceles right triangle",
        "options": {
            "A": "Obtuse triangle",
            "B": "Right-angled triangle",
            "C": "Equilateral triangle",
            "D": "Isosceles right triangle"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The horizontal line from observer's eye and the vertical line through the cloud meet at 90°, forming a right-angled triangle."
    },
    {
        "id": "ts_c10_math_ch9_q48",
        "question_number": 48,
        "question": "A 15 m long ladder leans against a vertical wall making an angle of 60° with the wall. How high does the ladder reach on the wall?",
        "difficulty": "easy",
        "option_a": "15√3/2 m",
        "option_b": "7.5 m",
        "option_c": "15 m",
        "option_d": "7.5√3 m",
        "options": {
            "A": "15√3/2 m",
            "B": "7.5 m",
            "C": "15 m",
            "D": "7.5√3 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The angle with the wall is 60°, so the angle with the ground is 30°. Height = 15 × sin 30° = 7.5 m (or cos 60° = Height / 15 ⇒ Height = 15 × 0.5 = 7.5 m)."
    },
    {
        "id": "ts_c10_math_ch9_q49",
        "question_number": 49,
        "question": "A vertical flagstaff stands on horizontal ground. At a distance of 90 m from its foot, the angle of elevation of its top is found to be 30°. The height of the flagstaff is:",
        "difficulty": "easy",
        "option_a": "30√3 m",
        "option_b": "90√3 m",
        "option_c": "45 m",
        "option_d": "30 m",
        "options": {
            "A": "30√3 m",
            "B": "90√3 m",
            "C": "45 m",
            "D": "30 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 30° = h / 90 ⇒ h = 90 / √3 = 30√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q50",
        "question_number": 50,
        "question": "In any right-angled triangle application problem, if the angle of elevation is 45°, the perpendicular and base of the triangle are:",
        "difficulty": "easy",
        "option_a": "Equal",
        "option_b": "In the ratio 1 : √3",
        "option_c": "In the ratio √3 : 1",
        "option_d": "In the ratio 1 : 2",
        "options": {
            "A": "Equal",
            "B": "In the ratio 1 : √3",
            "C": "In the ratio √3 : 1",
            "D": "In the ratio 1 : 2"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "tan 45° = Perpendicular / Base = 1 ⇒ Perpendicular = Base."
    },
    {
        "id": "ts_c10_math_ch9_q51",
        "question_number": 51,
        "question": "From a point on the ground, the angles of elevation of the bottom and top of a transmission tower fixed at the top of a 20 m high building are 45° and 60° respectively. The height of the transmission tower is:",
        "difficulty": "medium",
        "option_a": "20√3 m",
        "option_b": "20(√3 - 1) m",
        "option_c": "20(√3 + 1) m",
        "option_d": "40 m",
        "options": {
            "A": "20√3 m",
            "B": "20(√3 - 1) m",
            "C": "20(√3 + 1) m",
            "D": "40 m"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let distance be d. tan 45° = 20/d ⇒ d = 20 m. tan 60° = (20 + h)/d ⇒ √3 = (20 + h)/20 ⇒ 20 + h = 20√3 ⇒ h = 20(√3 - 1) m."
    },
    {
        "id": "ts_c10_math_ch9_q52",
        "question_number": 52,
        "question": "A 1.5 m tall boy is standing at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from 30° to 60° as he walks towards the building. The distance he walked towards the building is:",
        "difficulty": "medium",
        "option_a": "19√3 m",
        "option_b": "28.5√3 m",
        "option_c": "9.5√3 m",
        "option_d": "15√3 m",
        "options": {
            "A": "19√3 m",
            "B": "28.5√3 m",
            "C": "9.5√3 m",
            "D": "15√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Height above eye level = 30 - 1.5 = 28.5 m. At 30°, distance d1 = 28.5 / tan 30° = 28.5√3. At 60°, distance d2 = 28.5 / tan 60° = 28.5/√3 = 9.5√3. Distance walked = 28.5√3 - 9.5√3 = 19√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q53",
        "question_number": 53,
        "question": "The shadow of a tower standing on level ground is found to be 40 m longer when the sun's altitude is 30° than when it is 60°. The height of the tower is:",
        "difficulty": "medium",
        "option_a": "20√3 m",
        "option_b": "40√3 m",
        "option_c": "20 m",
        "option_d": "30√3 m",
        "options": {
            "A": "20√3 m",
            "B": "40√3 m",
            "C": "20 m",
            "D": "30√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let height be h. Shadow at 60° = h/√3. Shadow at 30° = h√3. Difference: h√3 - h/√3 = 40 ⇒ 2h/√3 = 40 ⇒ h = 20√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q54",
        "question_number": 54,
        "question": "As observed from the top of a 75 m high lighthouse from the sea-level, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, the distance between the two ships is:",
        "difficulty": "medium",
        "option_a": "75(√3 - 1) m",
        "option_b": "75(√3 + 1) m",
        "option_c": "75√3 m",
        "option_d": "150 m",
        "options": {
            "A": "75(√3 - 1) m",
            "B": "75(√3 + 1) m",
            "C": "75√3 m",
            "D": "150 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Distance to first ship d1 = 75 / tan 45° = 75 m. Distance to second ship d2 = 75 / tan 30° = 75√3 m. Distance between them = 75√3 - 75 = 75(√3 - 1) m.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 440 230\" width=\"100%\" height=\"200\" style=\"background:#f0f9ff; border-radius:8px; border:1px solid #bae6fd;\">\n  <line x1=\"50\" y1=\"190\" x2=\"410\" y2=\"190\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n  <line x1=\"80\" y1=\"190\" x2=\"80\" y2=\"40\" stroke=\"#475569\" stroke-width=\"6\"/>\n  <line x1=\"80\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <line x1=\"80\" y1=\"40\" x2=\"240\" y2=\"190\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <line x1=\"80\" y1=\"40\" x2=\"360\" y2=\"190\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n  <text x=\"20\" y=\"115\" font-size=\"12\" font-weight=\"bold\" fill=\"#334155\">75 m Light</text>\n  <circle cx=\"240\" cy=\"190\" r=\"5\" fill=\"#ea580c\"/>\n  <text x=\"230\" y=\"210\" font-size=\"12\" font-weight=\"bold\" fill=\"#ea580c\">Ship 1 (45°)</text>\n  <circle cx=\"360\" cy=\"190\" r=\"5\" fill=\"#7c3aed\"/>\n  <text x=\"350\" y=\"210\" font-size=\"12\" font-weight=\"bold\" fill=\"#7c3aed\">Ship 2 (30°)</text>\n  <text x=\"285\" y=\"180\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\">Distance d = ?</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch9_q55",
        "question_number": 55,
        "question": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. The height of the tower is:",
        "difficulty": "medium",
        "option_a": "7(√3 + 1) m",
        "option_b": "7(√3 - 1) m",
        "option_c": "14√3 m",
        "option_d": "21 m",
        "options": {
            "A": "7(√3 + 1) m",
            "B": "7(√3 - 1) m",
            "C": "14√3 m",
            "D": "21 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Distance d between building and tower = 7 / tan 45° = 7 m. Height of tower above building = d × tan 60° = 7√3 m. Total tower height = 7 + 7√3 = 7(√3 + 1) m."
    },
    {
        "id": "ts_c10_math_ch9_q56",
        "question_number": 56,
        "question": "The angle of elevation of the top of a building from the foot of a tower is 30° and the angle of elevation of the top of the tower from the foot of the building is 60°. If the tower is 50 m high, the height of the building is:",
        "difficulty": "medium",
        "option_a": "16⅔ m (50/3 m)",
        "option_b": "25 m",
        "option_c": "10√3 m",
        "option_d": "50√3 m",
        "options": {
            "A": "16⅔ m (50/3 m)",
            "B": "25 m",
            "C": "10√3 m",
            "D": "50√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "From tower of 50 m: tan 60° = 50 / d ⇒ d = 50 / √3. From building: tan 30° = h / d ⇒ h = d × tan 30° = (50 / √3) × (1 / √3) = 50 / 3 = 16⅔ m."
    },
    {
        "id": "ts_c10_math_ch9_q57",
        "question_number": 57,
        "question": "Two poles of equal heights are standing opposite each other on either side of the road, which is 80 m wide. From a point between them on the road, the angles of elevation of the tops of the poles are 60° and 30°. The height of the poles is:",
        "difficulty": "medium",
        "option_a": "20√3 m",
        "option_b": "40 m",
        "option_c": "30√3 m",
        "option_d": "20 m",
        "options": {
            "A": "20√3 m",
            "B": "40 m",
            "C": "30√3 m",
            "D": "20 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let height be h. Distances are x and 80 - x. tan 60° = h/x ⇒ x = h/√3. tan 30° = h/(80-x) ⇒ 80 - x = h√3. Adding: 80 = h√3 + h/√3 = 4h/√3 ⇒ h = 20√3 m.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 440 230\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"40\" y1=\"190\" x2=\"400\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"50\" stroke=\"#0284c7\" stroke-width=\"4\"/>\n  <line x1=\"380\" y1=\"190\" x2=\"380\" y2=\"50\" stroke=\"#0284c7\" stroke-width=\"4\"/>\n  <circle cx=\"160\" cy=\"190\" r=\"4\" fill=\"#dc2626\"/>\n  <text x=\"155\" y=\"210\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">Point P</text>\n  <line x1=\"160\" y1=\"190\" x2=\"60\" y2=\"50\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"190\" x2=\"380\" y2=\"50\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n  <text x=\"45\" y=\"40\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">Pole 1 (h)</text>\n  <text x=\"365\" y=\"40\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">Pole 2 (h)</text>\n  <text x=\"95\" y=\"180\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"bold\">60°</text>\n  <text x=\"195\" y=\"180\" font-size=\"11\" fill=\"#16a34a\" font-weight=\"bold\">30°</text>\n  <text x=\"200\" y=\"208\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\">Road width = 80 m</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch9_q58",
        "question_number": 58,
        "question": "In the two poles problem (road width 80 m, angles 60° and 30°), what are the respective distances of the observation point from the two poles?",
        "difficulty": "medium",
        "option_a": "20 m and 60 m",
        "option_b": "30 m and 50 m",
        "option_c": "40 m and 40 m",
        "option_d": "25 m and 55 m",
        "options": {
            "A": "20 m and 60 m",
            "B": "30 m and 50 m",
            "C": "40 m and 40 m",
            "D": "25 m and 55 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Since x = h / √3 = 20√3 / √3 = 20 m. The second distance = 80 - 20 = 60 m."
    },
    {
        "id": "ts_c10_math_ch9_q59",
        "question_number": 59,
        "question": "A TV tower stands vertically on a bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of the top is 60°. From another point 20 m away from this point on the line joining this point to the foot of the tower, the angle of elevation of the top is 30°. The width of the canal is:",
        "difficulty": "medium",
        "option_a": "10 m",
        "option_b": "20 m",
        "option_c": "10√3 m",
        "option_d": "15 m",
        "options": {
            "A": "10 m",
            "B": "20 m",
            "C": "10√3 m",
            "D": "15 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let canal width be x. Height h = x tan 60° = x√3. Also tan 30° = h / (x + 20) ⇒ x + 20 = h√3 = (x√3)√3 = 3x ⇒ 2x = 20 ⇒ x = 10 m."
    },
    {
        "id": "ts_c10_math_ch9_q60",
        "question_number": 60,
        "question": "In the canal and TV tower problem above, what is the height of the TV tower?",
        "difficulty": "medium",
        "option_a": "10√3 m",
        "option_b": "20√3 m",
        "option_c": "30 m",
        "option_d": "15√3 m",
        "options": {
            "A": "10√3 m",
            "B": "20√3 m",
            "C": "30 m",
            "D": "15√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Height h = x√3 = 10√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q61",
        "question_number": 61,
        "question": "A 1.2 m tall girl spots a balloon moving with the wind in a horizontal line at a height of 88.2 m from the ground. The angle of elevation of the balloon from the eyes of the girl at any instant is 60°. After some time, the angle of elevation reduces to 30°. The distance travelled by the balloon during the interval is:",
        "difficulty": "hard",
        "option_a": "58√3 m",
        "option_b": "87√3 m",
        "option_c": "29√3 m",
        "option_d": "58 m",
        "options": {
            "A": "58√3 m",
            "B": "87√3 m",
            "C": "29√3 m",
            "D": "58 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Height above eye level = 88.2 - 1.2 = 87 m. Initially, d1 = 87 / tan 60° = 87 / √3 = 29√3 m. Later, d2 = 87 / tan 30° = 87√3 m. Distance travelled = d2 - d1 = 87√3 - 29√3 = 58√3 m."
    },
    {
        "id": "ts_c10_math_ch9_q62",
        "question_number": 62,
        "question": "A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of 30°, which is approaching the foot of the tower with a uniform speed. Six seconds later, the angle of depression of the car is found to be 60°. The time taken by the car to reach the foot of the tower from this point is:",
        "difficulty": "hard",
        "option_a": "3 seconds",
        "option_b": "6 seconds",
        "option_c": "4 seconds",
        "option_d": "2 seconds",
        "options": {
            "A": "3 seconds",
            "B": "6 seconds",
            "C": "4 seconds",
            "D": "2 seconds"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let tower height be h. Initial distance = h√3. Later distance = h/√3. Distance covered in 6 s = h√3 - h/√3 = 2h/√3. Remaining distance to foot = h/√3, which is exactly half of the distance covered. At uniform speed, time taken = 6 / 2 = 3 seconds."
    },
    {
        "id": "ts_c10_math_ch9_q63",
        "question_number": 63,
        "question": "A statue, 1.6 m tall, stands on the top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and from the same point the angle of elevation of the top of the pedestal is 45°. The height of the pedestal is:",
        "difficulty": "hard",
        "option_a": "0.8(√3 + 1) m",
        "option_b": "0.8(√3 - 1) m",
        "option_c": "1.6(√3 + 1) m",
        "option_d": "1.6√3 m",
        "options": {
            "A": "0.8(√3 + 1) m",
            "B": "0.8(√3 - 1) m",
            "C": "1.6(√3 + 1) m",
            "D": "1.6√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let pedestal height be h. tan 45° = h / d ⇒ d = h. tan 60° = (h + 1.6) / d = (h + 1.6) / h ⇒ h√3 = h + 1.6 ⇒ h(√3 - 1) = 1.6 ⇒ h = 1.6 / (√3 - 1) = 1.6(√3 + 1) / 2 = 0.8(√3 + 1) m."
    },
    {
        "id": "ts_c10_math_ch9_q64",
        "question_number": 64,
        "question": "The angles of depression of the top and the bottom of an 8 m tall building from the top of a multi-storeyed building are 30° and 45°, respectively. The height of the multi-storeyed building is:",
        "difficulty": "hard",
        "option_a": "4(3 + √3) m",
        "option_b": "8(3 + √3) m",
        "option_c": "4(√3 - 1) m",
        "option_d": "12√3 m",
        "options": {
            "A": "4(3 + √3) m",
            "B": "8(3 + √3) m",
            "C": "4(√3 - 1) m",
            "D": "12√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let height be H and distance between buildings be d. tan 45° = H / d ⇒ d = H. Also tan 30° = (H - 8) / d = (H - 8) / H ⇒ H / √3 = H - 8 ⇒ H(1 - 1/√3) = 8 ⇒ H(√3 - 1)/√3 = 8 ⇒ H = 8√3 / (√3 - 1) = 8√3(√3 + 1)/2 = 4(3 + √3) m."
    },
    {
        "id": "ts_c10_math_ch9_q65",
        "question_number": 65,
        "question": "From a point on a bridge across a river, the angles of depression of the banks on opposite sides of the river are 30° and 45°, respectively. If the bridge is at a height of 3 m from the banks, the width of the river is:",
        "difficulty": "hard",
        "option_a": "3(1 + √3) m",
        "option_b": "3(√3 - 1) m",
        "option_c": "6√3 m",
        "option_d": "3√3 m",
        "options": {
            "A": "3(1 + √3) m",
            "B": "3(√3 - 1) m",
            "C": "6√3 m",
            "D": "3√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The two banks are on opposite sides of the perpendicular from the bridge. Distance to bank 1 = 3 / tan 30° = 3√3 m. Distance to bank 2 = 3 / tan 45° = 3 m. Total river width = 3√3 + 3 = 3(1 + √3) m."
    },
    {
        "id": "ts_c10_math_ch9_q66",
        "question_number": 66,
        "question": "An aeroplane at an altitude of 1200 m finds that two ships are sailing towards it in the same direction. The angles of depression of the ships as observed from the aeroplane are 45° and 30° respectively. The distance between the ships is:",
        "difficulty": "hard",
        "option_a": "1200(√3 - 1) m",
        "option_b": "1200(√3 + 1) m",
        "option_c": "600√3 m",
        "option_d": "2400 m",
        "options": {
            "A": "1200(√3 - 1) m",
            "B": "1200(√3 + 1) m",
            "C": "600√3 m",
            "D": "2400 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Distance to nearer ship = 1200 / tan 45° = 1200 m. Distance to farther ship = 1200 / tan 30° = 1200√3 m. Distance between ships = 1200√3 - 1200 = 1200(√3 - 1) m."
    },
    {
        "id": "ts_c10_math_ch9_q67",
        "question_number": 67,
        "question": "The angle of elevation of a cloud from a point h metres above a lake is α and the angle of depression of its reflection in the lake is β. The height of the cloud above the lake surface is:",
        "difficulty": "hard",
        "option_a": "h(tan β + tan α) / (tan β - tan α)",
        "option_b": "h(tan β - tan α) / (tan β + tan α)",
        "option_c": "h(cot α + cot β) / (cot α - cot β)",
        "option_d": "h tan α tan β",
        "options": {
            "A": "h(tan β + tan α) / (tan β - tan α)",
            "B": "h(tan β - tan α) / (tan β + tan α)",
            "C": "h(cot α + cot β) / (cot α - cot β)",
            "D": "h tan α tan β"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let height of cloud above lake be H. Cloud is H - h above observation level. Reflection is H + h below observation level. tan α = (H - h)/d and tan β = (H + h)/d. Eliminating d: (H - h)/tan α = (H + h)/tan β ⇒ H(tan β - tan α) = h(tan β + tan α) ⇒ H = h(tan β + tan α)/(tan β - tan α)."
    },
    {
        "id": "ts_c10_math_ch9_q68",
        "question_number": 68,
        "question": "If the angle of elevation of a cloud from a point 60 m above a lake is 30° and the angle of depression of its reflection in the lake is 60°, the height of the cloud above the surface of the lake is:",
        "difficulty": "hard",
        "option_a": "120 m",
        "option_b": "180 m",
        "option_c": "60√3 m",
        "option_d": "240 m",
        "options": {
            "A": "120 m",
            "B": "180 m",
            "C": "60√3 m",
            "D": "240 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Using H = h(tan 60° + tan 30°) / (tan 60° - tan 30°) = 60(√3 + 1/√3) / (√3 - 1/√3) = 60(4/√3) / (2/√3) = 60 × 2 = 120 m."
    },
    {
        "id": "ts_c10_math_ch9_q69",
        "question_number": 69,
        "question": "A round balloon of radius r subtends an angle α at the eye of the observer, while the angle of elevation of its centre is β. The height of the centre of the balloon is:",
        "difficulty": "hard",
        "option_a": "r sin β cosec(α/2)",
        "option_b": "r cos β cosec(α/2)",
        "option_c": "r sin(α/2) cosec β",
        "option_d": "r sin β sin(α/2)",
        "options": {
            "A": "r sin β cosec(α/2)",
            "B": "r cos β cosec(α/2)",
            "C": "r sin(α/2) cosec β",
            "D": "r sin β sin(α/2)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let O be centre and d be distance from eye to O. In tangent triangle, sin(α/2) = r / d ⇒ d = r cosec(α/2). Height of centre h = d sin β = r sin β cosec(α/2)."
    },
    {
        "id": "ts_c10_math_ch9_q70",
        "question_number": 70,
        "question": "From the top of a light house, the angles of depression of two ships on opposite sides of it are observed to be α and β. If the height of the light house is h metres and the line joining the ships passes through the foot of the light house, the distance between the ships is:",
        "difficulty": "hard",
        "option_a": "h(cot α + cot β)",
        "option_b": "h(tan α + tan β)",
        "option_c": "h(tan α - tan β)",
        "option_d": "h / (cot α + cot β)",
        "options": {
            "A": "h(cot α + cot β)",
            "B": "h(tan α + tan β)",
            "C": "h(tan α - tan β)",
            "D": "h / (cot α + cot β)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Distance to ship 1 = h cot α. Distance to ship 2 on opposite side = h cot β. Since they are on opposite sides, total distance = h cot α + h cot β = h(cot α + cot β)."
    },
    {
        "id": "ts_c10_math_ch9_q71",
        "question_number": 71,
        "question": "A student states: 'If the angle of elevation of the top of a tower doubles, the height of the tower must also double (for a fixed observation point)'. This statement is:",
        "difficulty": "tricky",
        "option_a": "Always false because tan(2θ) ≠ 2 tan θ",
        "option_b": "Always true by linearity of triangles",
        "option_c": "True only when θ = 30°",
        "option_d": "True only when θ = 45°",
        "options": {
            "A": "Always false because tan(2θ) ≠ 2 tan θ",
            "B": "Always true by linearity of triangles",
            "C": "True only when θ = 30°",
            "D": "True only when θ = 45°"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Height h = d tan θ. Since tan 2θ = 2 tan θ / (1 - tan²θ) ≠ 2 tan θ (except at θ = 0), doubling the angle does NOT double the height."
    },
    {
        "id": "ts_c10_math_ch9_q72",
        "question_number": 72,
        "question": "When a person standing on the ground looks at the top of a tower, the angle of elevation is θ. If the person climbs onto a stool of height s, the new angle of elevation θ':",
        "difficulty": "tricky",
        "option_a": "Decreases",
        "option_b": "Increases",
        "option_c": "Remains unchanged",
        "option_d": "Becomes 90°",
        "options": {
            "A": "Decreases",
            "B": "Increases",
            "C": "Remains unchanged",
            "D": "Becomes 90°"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Common student misconception! The vertical distance from eye to top is now (H - s), which is LESS than before, while horizontal distance remains the same. Thus tan θ' = (H - s)/d < H/d = tan θ, so the angle of elevation decreases!"
    },
    {
        "id": "ts_c10_math_ch9_q73",
        "question_number": 73,
        "question": "If the angle of elevation of the sun changes from 45° to 30°, by what factor does the shadow of a vertical pole increase?",
        "difficulty": "tricky",
        "option_a": "Increases by √3 times",
        "option_b": "Increases by (√3 - 1) times the pole height",
        "option_c": "Increases by a factor of 2",
        "option_d": "Decreases by 50%",
        "options": {
            "A": "Increases by √3 times",
            "B": "Increases by (√3 - 1) times the pole height",
            "C": "Increases by a factor of 2",
            "D": "Decreases by 50%"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initial shadow = h / tan 45° = h. Final shadow = h / tan 30° = h√3. Increase in shadow length = h√3 - h = h(√3 - 1). It increases by (√3 - 1) times the pole height, not √3 times!"
    },
    {
        "id": "ts_c10_math_ch9_q74",
        "question_number": 74,
        "question": "In measuring the height of a building, an observer forgets to add his own height of 1.7 m to the calculated vertical side of the right triangle. His final calculated height will be:",
        "difficulty": "tricky",
        "option_a": "Underestimated by 1.7 m",
        "option_b": "Overestimated by 1.7 m",
        "option_c": "Exactly correct",
        "option_d": "Dependent on the angle of elevation",
        "options": {
            "A": "Underestimated by 1.7 m",
            "B": "Overestimated by 1.7 m",
            "C": "Exactly correct",
            "D": "Dependent on the angle of elevation"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The eye is 1.7 m above the ground, so the right triangle only yields the height ABOVE the eye. Omitting observer height underestimates total height by 1.7 m."
    },
    {
        "id": "ts_c10_math_ch9_q75",
        "question_number": 75,
        "question": "A man on the deck of a ship is 10 m above water level. He observes the angle of elevation of the top of a cliff is 60° and the angle of depression of the base of the cliff is 30°. The height of the cliff is:",
        "difficulty": "tricky",
        "option_a": "40 m",
        "option_b": "30 m",
        "option_c": "20 m",
        "option_d": "50 m",
        "options": {
            "A": "40 m",
            "B": "30 m",
            "C": "20 m",
            "D": "50 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "From depression of base: tan 30° = 10 / d ⇒ d = 10√3 m. Height of cliff above deck = d tan 60° = 10√3 × √3 = 30 m. Total cliff height = 30 + 10 = 40 m. Many students forget to add the 10 m deck height!"
    },
    {
        "id": "ts_c10_math_ch9_q76",
        "question_number": 76,
        "question": "The angle of elevation of the top of a vertical tower from two points on the ground at distances 'a' and 'b' (where a > b) from the foot of the tower and in the same straight line with it are complementary. The height of the tower is:",
        "difficulty": "tricky",
        "option_a": "√(ab)",
        "option_b": "ab",
        "option_c": "a / b",
        "option_d": "√(a/b)",
        "options": {
            "A": "√(ab)",
            "B": "ab",
            "C": "a / b",
            "D": "√(a/b)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let angles be θ and 90° - θ. tan θ = h/a, and tan(90° - θ) = cot θ = h/b. Multiplying: tan θ × cot θ = (h/a) × (h/b) ⇒ 1 = h² / (ab) ⇒ h = √(ab)."
    },
    {
        "id": "ts_c10_math_ch9_q77",
        "question_number": 77,
        "question": "If two towers of heights h1 and h2 subtend angles of 60° and 30° respectively at the midpoint of the line joining their feet, then the ratio h1 : h2 is:",
        "difficulty": "tricky",
        "option_a": "3 : 1",
        "option_b": "1 : 3",
        "option_c": "√3 : 1",
        "option_d": "1 : √3",
        "options": {
            "A": "3 : 1",
            "B": "1 : 3",
            "C": "√3 : 1",
            "D": "1 : √3"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Midpoint distance is d for both. tan 60° = h1 / d ⇒ h1 = d√3. tan 30° = h2 / d ⇒ h2 = d / √3. Ratio h1 / h2 = (d√3) / (d / √3) = 3 / 1."
    },
    {
        "id": "ts_c10_math_ch9_q78",
        "question_number": 78,
        "question": "A flagstaff of height h stands on top of a tower of height H. If the angles of elevation of the bottom and top of the flagstaff from a point on the ground are α and β respectively, then H equals:",
        "difficulty": "tricky",
        "option_a": "h tan α / (tan β - tan α)",
        "option_b": "h tan β / (tan β - tan α)",
        "option_c": "h (tan β - tan α) / tan α",
        "option_d": "h cot α / (cot α - cot β)",
        "options": {
            "A": "h tan α / (tan β - tan α)",
            "B": "h tan β / (tan β - tan α)",
            "C": "h (tan β - tan α) / tan α",
            "D": "h cot α / (cot α - cot β)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let distance be d. tan α = H / d ⇒ d = H / tan α. tan β = (H + h)/d ⇒ d = (H + h)/tan β. Equating d: H / tan α = (H + h)/tan β ⇒ H tan β = H tan α + h tan α ⇒ H(tan β - tan α) = h tan α ⇒ H = h tan α / (tan β - tan α)."
    },
    {
        "id": "ts_c10_math_ch9_q79",
        "question_number": 79,
        "question": "From an airplane flying horizontally above a straight road, the angles of depression of two consecutive kilometre stones on the same side of the aircraft are α and β (α > β). The height of the aircraft is:",
        "difficulty": "tricky",
        "option_a": "tan α tan β / (tan α - tan β) km",
        "option_b": "(tan α - tan β) / (tan α tan β) km",
        "option_c": "(cot α - cot β) km",
        "option_d": "tan α tan β / (tan α + tan β) km",
        "options": {
            "A": "tan α tan β / (tan α - tan β) km",
            "B": "(tan α - tan β) / (tan α tan β) km",
            "C": "(cot α - cot β) km",
            "D": "tan α tan β / (tan α + tan β) km"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Distance between stones = 1 km. d1 = h cot α, d2 = h cot β. d2 - d1 = 1 ⇒ h(cot β - cot α) = 1 ⇒ h = 1 / (1/tan β - 1/tan α) = tan α tan β / (tan α - tan β) km."
    },
    {
        "id": "ts_c10_math_ch9_q80",
        "question_number": 80,
        "question": "A pole of height 6 m casts a shadow of 2√3 m at 9:00 AM. At 12:00 noon on the same day at the equator (sun directly overhead), the length of the shadow is:",
        "difficulty": "tricky",
        "option_a": "0 m",
        "option_b": "2√3 m",
        "option_c": "6 m",
        "option_d": "3 m",
        "options": {
            "A": "0 m",
            "B": "2√3 m",
            "C": "6 m",
            "D": "3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "At noon at the equator, the sun is directly overhead (elevation = 90°), so shadow length = 6 / tan 90° = 0 m."
    },
    {
        "id": "ts_c10_math_ch9_q81",
        "question_number": 81,
        "question": "If the angle of elevation of the top of a tower from three collinear points A, B, C on a line passing through the foot are 30°, 45°, 60° respectively, then the ratio of AB : BC is:",
        "difficulty": "tricky",
        "option_a": "(√3 - 1) : (3 - √3)",
        "option_b": "√3 : 1",
        "option_c": "1 : 1",
        "option_d": "2 : 1",
        "options": {
            "A": "(√3 - 1) : (3 - √3)",
            "B": "√3 : 1",
            "C": "1 : 1",
            "D": "2 : 1"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "OA = h cot 30° = h√3. OB = h cot 45° = h. OC = h cot 60° = h/√3. AB = OA - OB = h(√3 - 1). BC = OB - OC = h(1 - 1/√3) = h(√3 - 1)/√3. Thus AB / BC = h(√3 - 1) / [h(√3 - 1)/√3] = √3 : 1."
    },
    {
        "id": "ts_c10_math_ch9_q82",
        "question_number": 82,
        "question": "An observer looks at a 2 m high window on the first floor from a distance of 10 m and then at a 2 m high window on the third floor. Do both windows subtend the same angle at the observer's eye?",
        "difficulty": "tricky",
        "option_a": "No, the higher window subtends a smaller angle at the eye",
        "option_b": "Yes, because both windows are 2 m in height",
        "option_c": "No, the higher window subtends a larger angle",
        "option_d": "It depends on the observer's height",
        "options": {
            "A": "No, the higher window subtends a smaller angle at the eye",
            "B": "Yes, because both windows are 2 m in height",
            "C": "No, the higher window subtends a larger angle",
            "D": "It depends on the observer's height"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "As distance to the object increases, the angle subtended by a fixed vertical height diminishes (visual angle decreases)."
    },
    {
        "id": "ts_c10_math_ch9_q83",
        "question_number": 83,
        "question": "A 5 m long ladder leans against a wall. The bottom slips away from the wall at a certain distance. If the angle of inclination with the ground decreases, the height reached by the ladder on the wall:",
        "difficulty": "tricky",
        "option_a": "Decreases",
        "option_b": "Increases",
        "option_c": "Remains 5 m",
        "option_d": "First increases then decreases",
        "options": {
            "A": "Decreases",
            "B": "Increases",
            "C": "Remains 5 m",
            "D": "First increases then decreases"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Height = 5 × sin θ. As θ decreases, sin θ decreases, so the ladder slides DOWN the wall."
    },
    {
        "id": "ts_c10_math_ch9_q84",
        "question_number": 84,
        "question": "If the angle of elevation of the top of a tower from a distance of 100 m is 45°, and from the top of the tower the angle of depression of the observer is measured, it must be:",
        "difficulty": "tricky",
        "option_a": "45°",
        "option_b": "90°",
        "option_c": "135°",
        "option_d": "0°",
        "options": {
            "A": "45°",
            "B": "90°",
            "C": "135°",
            "D": "0°"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "By alternate interior angles between parallel horizontals, angle of depression = angle of elevation = 45°."
    },
    {
        "id": "ts_c10_math_ch9_q85",
        "question_number": 85,
        "question": "A bird is sitting on top of an 80 m high tree. From a point on the ground, the angle of elevation of the bird is 45°. The bird flies away horizontally with constant speed. After 2 seconds, the angle of elevation is 30°. The speed of the bird is (take √3 = 1.732):",
        "difficulty": "tricky",
        "option_a": "29.28 m/s",
        "option_b": "58.56 m/s",
        "option_c": "40 m/s",
        "option_d": "14.64 m/s",
        "options": {
            "A": "29.28 m/s",
            "B": "58.56 m/s",
            "C": "40 m/s",
            "D": "14.64 m/s"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initially d1 = 80 / tan 45° = 80 m. Later d2 = 80 / tan 30° = 80√3 ≈ 138.56 m. Distance flown in 2 s = 138.56 - 80 = 58.56 m. Speed = 58.56 / 2 = 29.28 m/s."
    },
    {
        "id": "ts_c10_math_ch9_q86",
        "question_number": 86,
        "question": "A man in a boat rowing away from a cliff 150 m high takes 2 minutes to change the angle of elevation of the top of the cliff from 60° to 45°. The speed of the boat in metres per minute is:",
        "difficulty": "tricky",
        "option_a": "75(√3 - 1) m/min",
        "option_b": "150(1 - 1/√3) m/min",
        "option_c": "75(3 - √3) m/min",
        "option_d": "25√3 m/min",
        "options": {
            "A": "75(√3 - 1) m/min",
            "B": "150(1 - 1/√3) m/min",
            "C": "75(3 - √3) m/min",
            "D": "25√3 m/min"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initial distance = 150 / tan 60° = 150/√3 = 50√3 m. Final distance = 150 / tan 45° = 150 m. Distance travelled = 150 - 50√3 = 150(1 - 1/√3) m. Speed = (150 - 50√3) / 2 = 75 - 25√3 = 25(3 - √3) m/min = 150(1 - 1/√3) / 2 = 75(1 - 1/√3) m/min = 25(3 - √3) m/min = 75(1 - 1/√3) m/min."
    },
    {
        "id": "ts_c10_math_ch9_q87",
        "question_number": 87,
        "question": "The shadow of a vertical tower on level ground increases by 10 m when the altitude of the sun changes from 45° to 30°. The height of the tower is:",
        "difficulty": "tricky",
        "option_a": "5(√3 + 1) m",
        "option_b": "10(√3 + 1) m",
        "option_c": "5(√3 - 1) m",
        "option_d": "10√3 m",
        "options": {
            "A": "5(√3 + 1) m",
            "B": "10(√3 + 1) m",
            "C": "5(√3 - 1) m",
            "D": "10√3 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let height be h. Shadow at 45° = h. Shadow at 30° = h√3. h√3 - h = 10 ⇒ h(√3 - 1) = 10 ⇒ h = 10 / (√3 - 1) = 10(√3 + 1) / 2 = 5(√3 + 1) m."
    },
    {
        "id": "ts_c10_math_ch9_q88",
        "question_number": 88,
        "question": "A vertical stick 20 m long casts a shadow 10 m long on the ground. At the same time, a tower casts a shadow 50 m long on the ground. The height of the tower is:",
        "difficulty": "tricky",
        "option_a": "100 m",
        "option_b": "25 m",
        "option_c": "50 m",
        "option_d": "75 m",
        "options": {
            "A": "100 m",
            "B": "25 m",
            "C": "50 m",
            "D": "75 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "At the same time, the sun's elevation θ is the same. tan θ = 20 / 10 = 2. For tower: tan θ = H / 50 ⇒ 2 = H / 50 ⇒ H = 100 m."
    },
    {
        "id": "ts_c10_math_ch9_q89",
        "question_number": 89,
        "question": "If the angles of elevation of the top of a tower from two points at distances of 4 m and 9 m from the base of the tower and in the same straight line with it are complementary, the height of the tower is:",
        "difficulty": "tricky",
        "option_a": "6 m",
        "option_b": "13 m",
        "option_c": "36 m",
        "option_d": "5 m",
        "options": {
            "A": "6 m",
            "B": "13 m",
            "C": "36 m",
            "D": "5 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Exercise 9.1 (famous problem): h = √(a × b) = √(4 × 9) = √36 = 6 m."
    },
    {
        "id": "ts_c10_math_ch9_q90",
        "question_number": 90,
        "question": "In the complementary angles problem, why do the angles θ and (90° - θ) guarantee that h = √(ab)?",
        "difficulty": "tricky",
        "option_a": "Because tan θ × tan(90° - θ) = tan θ × cot θ = 1",
        "option_b": "Because tan θ + tan(90° - θ) = 1",
        "option_c": "Because sin²θ + cos²θ = 1",
        "option_d": "Because sec²θ - tan²θ = 1",
        "options": {
            "A": "Because tan θ × tan(90° - θ) = tan θ × cot θ = 1",
            "B": "Because tan θ + tan(90° - θ) = 1",
            "C": "Because sin²θ + cos²θ = 1",
            "D": "Because sec²θ - tan²θ = 1"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Since tan(90° - θ) = cot θ, their product is identically 1, leading to (h/a)(h/b) = 1 ⇒ h² = ab ⇒ h = √(ab)."
    },
    {
        "id": "ts_c10_math_ch9_q91",
        "question_number": 91,
        "question": "A man on the top of a vertical observation tower observes a car moving at a uniform speed directly towards the base. If it takes 12 minutes for the angle of depression to change from 30° to 45°, how much additional time will it take to reach the base?",
        "difficulty": "very_hard",
        "option_a": "6(√3 + 1) minutes ≈ 16.39 min",
        "option_b": "12 / (√3 - 1) minutes = 6(√3 + 1) min",
        "option_c": "6(√3 - 1) minutes",
        "option_d": "12√3 minutes",
        "options": {
            "A": "6(√3 + 1) minutes ≈ 16.39 min",
            "B": "12 / (√3 - 1) minutes = 6(√3 + 1) min",
            "C": "6(√3 - 1) minutes",
            "D": "12√3 minutes"
        },
        "correct_option": "B",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initial distance = h√3, intermediate distance = h. Distance travelled in 12 min = h(√3 - 1). Speed v = h(√3 - 1) / 12. Remaining distance = h. Additional time = h / v = 12 / (√3 - 1) = 12(√3 + 1) / 2 = 6(√3 + 1) minutes."
    },
    {
        "id": "ts_c10_math_ch9_q92",
        "question_number": 92,
        "question": "From the top of a tower of height h, the angles of depression of two objects on the horizontal ground in the same direction are α and β (where α > β). The distance between the two objects is:",
        "difficulty": "very_hard",
        "option_a": "h(cot β - cot α)",
        "option_b": "h(cot α - cot β)",
        "option_c": "h(tan α - tan β)",
        "option_d": "h / (cot β - cot α)",
        "options": {
            "A": "h(cot β - cot α)",
            "B": "h(cot α - cot β)",
            "C": "h(tan α - tan β)",
            "D": "h / (cot β - cot α)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The nearer object has depression α, distance d1 = h cot α. The farther object has depression β, distance d2 = h cot β. Distance between them = d2 - d1 = h(cot β - cot α)."
    },
    {
        "id": "ts_c10_math_ch9_q93",
        "question_number": 93,
        "question": "A ladder rests against a vertical wall at an angle α to the horizontal. Its foot is pulled away from the wall through a distance 'a', so that its upper end slides a distance 'b' down the wall, making an angle β with the horizontal. Which equation correctly relates a and b?",
        "difficulty": "very_hard",
        "option_a": "a / b = (cos β - cos α) / (sin α - sin β)",
        "option_b": "a / b = (sin α - sin β) / (cos β - cos α)",
        "option_c": "a / b = tan α tan β",
        "option_d": "a × b = L²",
        "options": {
            "A": "a / b = (cos β - cos α) / (sin α - sin β)",
            "B": "a / b = (sin α - sin β) / (cos β - cos α)",
            "C": "a / b = tan α tan β",
            "D": "a × b = L²"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let ladder length be L. Initially, foot x1 = L cos α, top y1 = L sin α. After sliding, foot x2 = L cos β, top y2 = L sin β. Here a = x2 - x1 = L(cos β - cos α), and b = y1 - y2 = L(sin α - sin β). Dividing gives a / b = (cos β - cos α) / (sin α - sin β)."
    },
    {
        "id": "ts_c10_math_ch9_q94",
        "question_number": 94,
        "question": "The angle of elevation of the top of a vertical tower from a point A due south of it is 45° and from a point B due east of it is 30°. If AB = 40 m, the height of the tower is:",
        "difficulty": "very_hard",
        "option_a": "20 m",
        "option_b": "20√2 m",
        "option_c": "40 m",
        "option_d": "10√2 m",
        "options": {
            "A": "20 m",
            "B": "20√2 m",
            "C": "40 m",
            "D": "10√2 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let tower foot be O. Triangle AOB is right-angled at O (South and East are perpendicular). OA = h cot 45° = h. OB = h cot 30° = h√3. By Pythagoras in ΔAOB: OA² + OB² = AB² ⇒ h² + (h√3)² = 40² ⇒ h² + 3h² = 1600 ⇒ 4h² = 1600 ⇒ h² = 400 ⇒ h = 20 m!"
    },
    {
        "id": "ts_c10_math_ch9_q95",
        "question_number": 95,
        "question": "A pole stands vertically inside a triangular park ABC. If the angle of elevation of the top of the pole from each of the vertices A, B, and C is the same, the foot of the pole must be at the:",
        "difficulty": "very_hard",
        "option_a": "Circumcentre of ΔABC",
        "option_b": "Incentre of ΔABC",
        "option_c": "Orthocentre of ΔABC",
        "option_d": "Centroid of ΔABC",
        "options": {
            "A": "Circumcentre of ΔABC",
            "B": "Incentre of ΔABC",
            "C": "Orthocentre of ΔABC",
            "D": "Centroid of ΔABC"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "If elevation θ is same from A, B, C: h / OA = h / OB = h / OC = tan θ ⇒ OA = OB = OC. The point equidistant from all three vertices of a triangle is its circumcentre!"
    },
    {
        "id": "ts_c10_math_ch9_q96",
        "question_number": 96,
        "question": "A pole stands vertically inside a triangular park ABC. If the angle of elevation of the top of the pole from each of the three sides (edges) of the park is equal, the foot of the pole must be at the:",
        "difficulty": "very_hard",
        "option_a": "Incentre of ΔABC",
        "option_b": "Circumcentre of ΔABC",
        "option_c": "Centroid of ΔABC",
        "option_d": "Orthocentre of ΔABC",
        "options": {
            "A": "Incentre of ΔABC",
            "B": "Circumcentre of ΔABC",
            "C": "Centroid of ΔABC",
            "D": "Orthocentre of ΔABC"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "If the angle of elevation is the same from all three sides, the perpendicular distance from the foot of the pole to each side must be equal (h / d = tan θ ⇒ d is constant). The unique point equidistant from all three sides of a triangle is the incentre!"
    },
    {
        "id": "ts_c10_math_ch9_q97",
        "question_number": 97,
        "question": "The angle of elevation of a cliff from a fixed point is θ. After going up a distance of 'k' metres towards the top of the cliff at an angle of inclination φ, the angle of elevation is found to be α. The height of the cliff is:",
        "difficulty": "very_hard",
        "option_a": "k(sin φ - cos φ tan α) / (1 - tan α cot θ)",
        "option_b": "k(cos φ sin α - sin φ cos α) / (sin(α - θ))",
        "option_c": "k sin φ / (tan α - tan θ)",
        "option_d": "k cos φ / (cot θ - cot α)",
        "options": {
            "A": "k(sin φ - cos φ tan α) / (1 - tan α cot θ)",
            "B": "k(cos φ sin α - sin φ cos α) / (sin(α - θ))",
            "C": "k sin φ / (tan α - tan θ)",
            "D": "k cos φ / (cot θ - cot α)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Standard classic problem: Resolving the displacement k into horizontal k cos φ and vertical k sin φ, the remaining height H - k sin φ and remaining distance (H cot θ - k cos φ) satisfy tan α = (H - k sin φ)/(H cot θ - k cos φ), giving H = k(sin φ - cos φ tan α) / (1 - tan α cot θ)."
    },
    {
        "id": "ts_c10_math_ch9_q98",
        "question_number": 98,
        "question": "Two boats approach a lighthouse along lines making an angle of 60° with each other. When both boats are at equal distances of 100 m from the base of the lighthouse, the angle of elevation of the top of the lighthouse from each boat is 45°. The distance between the two boats is:",
        "difficulty": "very_hard",
        "option_a": "100 m",
        "option_b": "100√3 m",
        "option_c": "50√3 m",
        "option_d": "200 m",
        "options": {
            "A": "100 m",
            "B": "100√3 m",
            "C": "50√3 m",
            "D": "200 m"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let base of lighthouse be O, and boats be B1 and B2. OB1 = 100 m, OB2 = 100 m, and ∠B1OB2 = 60°. ΔB1OB2 is an isosceles triangle with vertex angle 60°, which makes it an equilateral triangle! Therefore, the distance B1B2 = 100 m."
    },
    {
        "id": "ts_c10_math_ch9_q99",
        "question_number": 99,
        "question": "An observer at ground level observes that a satellite passes directly overhead at an altitude of 600 km. When the satellite has moved so that its angle of elevation from the observer is 30°, what is the straight-line distance from the observer to the satellite (neglecting Earth's curvature)?",
        "difficulty": "very_hard",
        "option_a": "1200 km",
        "option_b": "600√3 km",
        "option_c": "300 km",
        "option_d": "600 km",
        "options": {
            "A": "1200 km",
            "B": "600√3 km",
            "C": "300 km",
            "D": "600 km"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In the right triangle formed by observer, point on ground directly under satellite, and satellite: sin 30° = Altitude / Line of Sight Distance ⇒ 1/2 = 600 / d ⇒ d = 1200 km."
    },
    {
        "id": "ts_c10_math_ch9_q100",
        "question_number": 100,
        "question": "A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff of height h. At a point on the plane, the angles of elevation of the bottom and top of the flagstaff are α and β. If α = 30° and β = 60°, what fraction of the total combined height is the flagstaff alone?",
        "difficulty": "very_hard",
        "option_a": "2/3",
        "option_b": "1/2",
        "option_c": "3/4",
        "option_d": "1/3",
        "options": {
            "A": "2/3",
            "B": "1/2",
            "C": "3/4",
            "D": "1/3"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let tower height be H and distance be d. tan 30° = H / d ⇒ d = H√3. tan 60° = (H + h)/d ⇒ H + h = d√3 = (H√3)√3 = 3H ⇒ h = 2H. Total height = H + h = 3H. Fraction = h / (H + h) = 2H / 3H = 2/3!"
    }
]
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter9FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter9FullBank;
}
