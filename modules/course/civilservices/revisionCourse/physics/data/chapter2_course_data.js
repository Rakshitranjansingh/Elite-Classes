// Elite Classes — Civil Services Physics Revision Course
// Chapter 02: Mechanics (Motion, Laws & Gravitation)

const COURSE_CHAPTER_DATA = {
  "chapterId": "cs_phy_ch2",
  "chapterNumber": 2,
  "chapterTitle": "Mechanics (Motion, Laws & Gravitation)",
  "totalModules": 20,
  "totalQuestions": 200,
  "modules": [
    {
      "id": "mod_1",
      "number": 1,
      "title": "Rest, Motion, Distance & Displacement",
      "description": "Foundations of kinematics: frame of reference, scalar distance vs vector displacement, and path dependence.",
      "theoryHtml": "<h4>1. Rest and Motion as Relative Concepts</h4>\n<p>In physics, an object is defined to be at <strong>rest</strong> if its position does not change with respect to its immediate surroundings (a reference frame) with the passage of time. Conversely, an object is in <strong>motion</strong> if its position changes continuously relative to a chosen reference frame.</p>\n<div class=\"notes-callout\"><strong>Crucial Principle:</strong> Rest and motion are relative terms; there is no such thing as absolute rest or absolute motion in the universe. A passenger sitting in a moving bus is at rest relative to other passengers, but in motion relative to trees on the roadside.</div>\n<h4>2. Distance vs. Displacement</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Parameter</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Distance</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Displacement</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Definition</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Total actual path length traversed by an object.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Shortest straight-line distance from initial to final position.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Quantity Type</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Scalar (has magnitude only).</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Vector (has both magnitude and spatial direction).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Signs & Values</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Always positive for a moving object (cannot decrease).</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Can be positive, negative, or zero.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Comparative Ratio</strong></td>\n    <td colspan=\"2\" style=\"padding:8px; border:1px solid #cbd5e1;\">Distance ≥ |Displacement|. The numerical ratio (Distance / |Displacement|) is always ≥ 1.</td>\n  </tr>\n</table>\n<h4>3. Circular Motion Coordinates</h4>\n<p>Consider an object moving along a circular path of radius r:</p>\n<ul>\n  <li>When it completes 1 full revolution: Distance = 2πr, Displacement = 0.</li>\n  <li>When it completes half a revolution: Distance = πr, Displacement = 2r (along the diameter).</li>\n</ul>",
      "pointsToRemember": [
        "Distance is a scalar quantity measuring the actual path traversed; it is always positive and never decreases for a moving body.",
        "Displacement is a vector quantity pointing from initial to final position and can be positive, negative, or zero.",
        "Distance is always greater than or equal to the magnitude of displacement (Distance ≥ |Displacement|)."
      ],
      "keyNotes": [
        "Whenever an object returns to its starting point after traversing any arbitrary path, its net displacement is exactly zero, even though its total distance traveled is non-zero."
      ],
      "questions": [
        {
          "id": "q1_1",
          "question": "Which of the following statements regarding distance and displacement is INCORRECT?",
          "options": [
            "Distance is a scalar quantity whereas displacement is a vector quantity.",
            "The magnitude of displacement can never exceed the distance traveled.",
            "Distance traveled can be zero even if displacement is non-zero.",
            "Displacement can be negative, zero, or positive depending on direction."
          ],
          "answer": "Distance traveled can be zero even if displacement is non-zero.",
          "explanation": "Distance traveled cannot be zero if displacement is non-zero. If a body moves, distance must be strictly greater than zero."
        },
        {
          "id": "q1_2",
          "question": "An athlete completes one round of a circular track of radius R in 40 seconds. What is the magnitude of displacement at the end of 2 minutes and 20 seconds?",
          "options": [
            "Zero",
            "2R",
            "2πR",
            "7πR"
          ],
          "answer": "2R",
          "explanation": "Total time = 140 s. Number of rounds = 140 / 40 = 3.5 rounds. After 3 full rounds the athlete is at the start; after the remaining 0.5 round, the athlete is diametrically opposite. Hence displacement = 2R."
        },
        {
          "id": "q1_3",
          "question": "A particle moves 3 meters north and then 4 meters east. The total distance and magnitude of displacement are respectively:",
          "options": [
            "7 m and 5 m",
            "5 m and 7 m",
            "7 m and 1 m",
            "5 m and 1 m"
          ],
          "answer": "7 m and 5 m",
          "explanation": "Distance = 3 + 4 = 7 m. Magnitude of displacement = √(3² + 4²) = √(9 + 16) = √25 = 5 m."
        },
        {
          "id": "q1_4",
          "question": "Under what condition is the magnitude of displacement strictly equal to the distance traveled?",
          "options": [
            "When the body moves along a curved path with constant speed.",
            "When the body moves along a straight line in a fixed unidirectional path without reversing.",
            "When the body moves in a circular orbit at constant acceleration.",
            "When the body moves in simple harmonic oscillation."
          ],
          "answer": "When the body moves along a straight line in a fixed unidirectional path without reversing.",
          "explanation": "Distance equals magnitude of displacement if and only if the motion is strictly unidirectional along a straight line."
        },
        {
          "id": "q1_5",
          "question": "The numerical ratio of displacement to distance for a moving object is always:",
          "options": [
            "Always less than 1",
            "Always equal to 1",
            "Always greater than 1",
            "Equal to or less than 1"
          ],
          "answer": "Equal to or less than 1",
          "explanation": "Since distance is always greater than or equal to the magnitude of displacement, the ratio |Displacement| / Distance is always ≤ 1."
        },
        {
          "id": "q1_6",
          "question": "A car travels from city A to city B (distance 100 km) and returns back to city A. What are the total distance and net displacement of the car?",
          "options": [
            "Distance = 200 km, Displacement = 0 km",
            "Distance = 100 km, Displacement = 100 km",
            "Distance = 200 km, Displacement = 200 km",
            "Distance = 0 km, Displacement = 0 km"
          ],
          "answer": "Distance = 200 km, Displacement = 0 km",
          "explanation": "Total distance traveled = 100 km + 100 km = 200 km. Since the car returns to its starting point, initial position = final position, making net displacement = 0 km."
        },
        {
          "id": "q1_7",
          "question": "Which of the following physical quantities is completely independent of the choice of coordinate origin?",
          "options": [
            "Position vector of a particle",
            "Displacement vector between two points",
            "Instantaneous coordinates",
            "Potential energy"
          ],
          "answer": "Displacement vector between two points",
          "explanation": "Displacement vector Δr = r₂ - r₁ is independent of the location of origin because shifting origin changes both r₁ and r₂ by the same translation vector."
        },
        {
          "id": "q1_8",
          "question": "If the displacement of an object is proportional to the square of time (s ∝ t²), the object is moving with:",
          "options": [
            "Uniform velocity",
            "Uniform acceleration",
            "Increasing acceleration",
            "Decreasing acceleration"
          ],
          "answer": "Uniform acceleration",
          "explanation": "From kinematics, s = ut + ½at². If s ∝ t², taking the second derivative d²s/dt² yields a constant value, meaning uniform acceleration."
        },
        {
          "id": "q1_9",
          "question": "An object moves along the perimeter of an equilateral triangle of side 10 m. If it starts from vertex A and stops at vertex C, what is the magnitude of displacement?",
          "options": [
            "20 m",
            "10 m",
            "15 m",
            "30 m"
          ],
          "answer": "10 m",
          "explanation": "The distance traveled along two sides (A to B to C) is 10 + 10 = 20 m. However, displacement is the straight-line segment from A to C, which is exactly the length of side AC = 10 m."
        },
        {
          "id": "q1_10",
          "question": "Can an object have a constant speed but a changing velocity?",
          "options": [
            "No, constant speed always implies constant velocity.",
            "Yes, in uniform circular motion where the speed is constant but direction changes continuously.",
            "No, velocity and speed are identical in all physical dimensions.",
            "Yes, but only if the motion takes place in a gravitational vacuum."
          ],
          "answer": "Yes, in uniform circular motion where the speed is constant but direction changes continuously.",
          "explanation": "Velocity is a vector comprising magnitude (speed) and direction. In uniform circular motion, magnitude remains constant while direction changes continuously at every point, giving a non-zero centripetal acceleration."
        }
      ]
    },
    {
      "id": "mod_2",
      "number": 2,
      "title": "Speed, Velocity & Relative Velocity",
      "description": "Uniform vs non-uniform speed, instantaneous velocity, harmonic mean in average speed, and relative velocity.",
      "theoryHtml": "<h4>1. Speed and Velocity Defined</h4>\n<p><strong>Speed</strong> is the time rate of change of distance (Speed = Distance / Time). It is a scalar quantity with SI unit m/s and dimensional formula [M⁰ L¹ T⁻¹].</p>\n<p><strong>Velocity</strong> is the time rate of change of displacement (Velocity = Displacement / Time). It is a vector quantity pointing in the direction of displacement.</p>\n<h4>2. Average Speed vs Average Velocity</h4>\n<ul>\n  <li><strong>Average Speed</strong> = Total Distance / Total Time.</li>\n  <li><strong>Average Velocity</strong> = Net Displacement / Total Time.</li>\n</ul>\n<div class=\"notes-callout\"><strong>High-Yield Case 1 (Equal Distances):</strong> If a body covers distance d at speed v₁ and the next equal distance d at speed v₂, the average speed is the harmonic mean:\n<br><strong>v_avg = (2 v₁ v₂) / (v₁ + v₂)</strong></div>\n<div class=\"notes-callout\"><strong>High-Yield Case 2 (Equal Time Intervals):</strong> If a body travels for time t at speed v₁ and for the next equal time t at speed v₂, the average speed is the arithmetic mean:\n<br><strong>v_avg = (v₁ + v₂) / 2</strong></div>\n<h4>3. Relative Velocity in One Dimension</h4>\n<p>The relative velocity of body A with respect to body B is given by:</p>\n<ul>\n  <li><strong>Same direction:</strong> v_AB = v_A - v_B</li>\n  <li><strong>Opposite directions:</strong> v_AB = v_A - (-v_B) = v_A + v_B</li>\n</ul>",
      "pointsToRemember": [
        "Speed is a scalar and can never be negative; velocity is a vector and can be positive, negative, or zero.",
        "When equal distances are traversed at speeds v₁ and v₂, the average speed is given by the harmonic mean 2v₁v₂ / (v₁ + v₂).",
        "Relative velocity of two objects moving towards each other is the sum of their speeds (v₁ + v₂), while moving in the same direction it is the difference (v₁ - v₂)."
      ],
      "keyNotes": [
        "An automobile speedometer measures instantaneous speed, not average speed or velocity."
      ],
      "questions": [
        {
          "id": "q2_1",
          "question": "A car travels the first half of a total distance at 40 km/h and the remaining half at 60 km/h. What is the average speed of the car for the entire journey?",
          "options": [
            "50 km/h",
            "48 km/h",
            "45 km/h",
            "52 km/h"
          ],
          "answer": "48 km/h",
          "explanation": "For equal distances, average speed = 2v₁v₂ / (v₁ + v₂) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h."
        },
        {
          "id": "q2_2",
          "question": "A vehicle moves for 30 minutes at a speed of 60 km/h and for the next 30 minutes at a speed of 40 km/h. What is the average speed of the vehicle?",
          "options": [
            "48 km/h",
            "50 km/h",
            "45 km/h",
            "55 km/h"
          ],
          "answer": "50 km/h",
          "explanation": "For equal time intervals, average speed is the arithmetic mean = (v₁ + v₂) / 2 = (60 + 40) / 2 = 50 km/h."
        },
        {
          "id": "q2_3",
          "question": "Two trains, each of length 150 m, are moving in opposite directions on parallel tracks at speeds of 40 km/h and 32 km/h. How long will they take to cross each other?",
          "options": [
            "15 seconds",
            "20 seconds",
            "12 seconds",
            "18 seconds"
          ],
          "answer": "15 seconds",
          "explanation": "Total relative distance = 150 + 150 = 300 m. Relative speed = 40 + 32 = 72 km/h = 72 × (5/18) = 20 m/s. Time to cross = 300 / 20 = 15 seconds."
        },
        {
          "id": "q2_4",
          "question": "What does the speedometer of an automobile measure at any given moment?",
          "options": [
            "Average speed",
            "Instantaneous speed",
            "Average velocity",
            "Instantaneous acceleration"
          ],
          "answer": "Instantaneous speed",
          "explanation": "A vehicle's speedometer measures the instantaneous speed at that precise instant of time, independent of direction."
        },
        {
          "id": "q2_5",
          "question": "A particle moves in a circular path of radius r with uniform speed v. What is its average velocity over one complete revolution?",
          "options": [
            "v",
            "2v / π",
            "Zero",
            "πv"
          ],
          "answer": "Zero",
          "explanation": "In one complete revolution, the net displacement is zero. Hence, average velocity = Total Displacement / Total Time = 0."
        },
        {
          "id": "q2_6",
          "question": "If a body travels with uniform velocity, which of the following must be true?",
          "options": [
            "Its speed must be variable.",
            "Its acceleration must be zero.",
            "Its direction must change continuously.",
            "Its total distance equals zero."
          ],
          "answer": "Its acceleration must be zero.",
          "explanation": "Uniform velocity implies that both the magnitude (speed) and direction of motion remain constant. Therefore, acceleration a = dv/dt = 0."
        },
        {
          "id": "q2_7",
          "question": "Two cars A and B are traveling in the same direction on a highway at 80 km/h and 60 km/h respectively. What is the velocity of car A relative to car B?",
          "options": [
            "140 km/h",
            "20 km/h",
            "-20 km/h",
            "0 km/h"
          ],
          "answer": "20 km/h",
          "explanation": "Since both cars move in the same direction, relative velocity v_AB = v_A - v_B = 80 - 60 = 20 km/h."
        },
        {
          "id": "q2_8",
          "question": "A swimmer can swim in still water at 5 km/h. If river water flows at 3 km/h, what is the swimmer's speed relative to the ground when swimming downstream?",
          "options": [
            "2 km/h",
            "8 km/h",
            "5 km/h",
            "4 km/h"
          ],
          "answer": "8 km/h",
          "explanation": "When swimming downstream (with the current), river velocity adds to swimmer velocity: v = 5 + 3 = 8 km/h."
        },
        {
          "id": "q2_9",
          "question": "Which of the following conditions is IMPOSSIBLE for a moving particle?",
          "options": [
            "Zero speed with non-zero velocity",
            "Zero velocity with non-zero acceleration",
            "Constant speed with non-zero acceleration",
            "Non-zero speed with zero acceleration"
          ],
          "answer": "Zero speed with non-zero velocity",
          "explanation": "Speed is the magnitude of velocity. If speed is zero, the magnitude of velocity is zero, making non-zero velocity impossible."
        },
        {
          "id": "q2_10",
          "question": "An object moves along a straight line such that its position x is given by x = 4t² - 2t + 5 (in meters). What is its instantaneous velocity at t = 2 seconds?",
          "options": [
            "14 m/s",
            "16 m/s",
            "10 m/s",
            "8 m/s"
          ],
          "answer": "14 m/s",
          "explanation": "Instantaneous velocity v = dx/dt = d(4t² - 2t + 5)/dt = 8t - 2. At t = 2 s, v = 8(2) - 2 = 16 - 2 = 14 m/s."
        }
      ]
    },
    {
      "id": "mod_3",
      "number": 3,
      "title": "Acceleration, Retardation & Graphical Analysis",
      "description": "Concept of acceleration, negative acceleration (deceleration/retardation), slopes and areas of motion graphs.",
      "theoryHtml": "<h4>1. Acceleration and Retardation</h4>\n<p><strong>Acceleration (a)</strong> is defined as the time rate of change of velocity:</p>\n<p><strong>a = (v - u) / t</strong></p>\n<p>where u = initial velocity, v = final velocity, and t = elapsed time. The SI unit of acceleration is <strong>m/s²</strong> and its dimensional formula is <strong>[M⁰ L¹ T⁻²]</strong>.</p>\n<ul>\n  <li>If v > u, acceleration is positive (speed increases).</li>\n  <li>If v < u, acceleration is negative, also termed <strong>retardation</strong> or <strong>deceleration</strong> (speed decreases).</li>\n  <li>If v = u, acceleration is zero (uniform velocity).</li>\n</ul>\n<h4>2. Graphical Representation of Motion</h4>\n<p>Motion graphs provide powerful analytical tools:</p>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Graph Type</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Slope Represents</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Area Under Curve Represents</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Displacement - Time (s-t)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Velocity (v = ds/dt)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">No physical quantity</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Velocity - Time (v-t)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Acceleration (a = dv/dt)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Displacement (s = ∫ v dt)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Acceleration - Time (a-t)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Jerk (rate of change of acceleration)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Change in Velocity (Δv = ∫ a dt)</td>\n  </tr>\n</table>\n<h4>3. Key Graph Shapes</h4>\n<ul>\n  <li>A horizontal straight line on an s-t graph indicates a stationary body (v = 0).</li>\n  <li>An inclined straight line on an s-t graph indicates uniform velocity.</li>\n  <li>A parabolic curve on an s-t graph indicates uniform acceleration.</li>\n  <li>An inclined straight line on a v-t graph indicates constant acceleration.</li>\n</ul>",
      "pointsToRemember": [
        "Acceleration is the rate of change of velocity with SI unit m/s²; negative acceleration is termed retardation or deceleration.",
        "The slope of a displacement-time graph gives instantaneous velocity, while the slope of a velocity-time graph gives acceleration.",
        "The area under a velocity-time graph between two time points equals the net displacement of the object."
      ],
      "keyNotes": [
        "A body can have zero velocity at an instant while having non-zero acceleration, such as a ball at the highest point of its vertical upward throw."
      ],
      "questions": [
        {
          "id": "q3_1",
          "question": "What physical quantity is represented by the slope of a velocity-time graph?",
          "options": [
            "Displacement",
            "Acceleration",
            "Speed",
            "Force"
          ],
          "answer": "Acceleration",
          "explanation": "The slope of a v-t graph represents dv/dt, which is the acceleration of the object."
        },
        {
          "id": "q3_2",
          "question": "What does the area under a velocity-time graph over a given time interval represent?",
          "options": [
            "Distance traveled only",
            "Displacement",
            "Instantaneous speed",
            "Acceleration"
          ],
          "answer": "Displacement",
          "explanation": "Integrating velocity with respect to time (∫ v dt) yields the displacement of the moving body."
        },
        {
          "id": "q3_3",
          "question": "A car moving at 20 m/s is brought to a stop in 5 seconds by applying brakes. What is the retardation produced?",
          "options": [
            "4 m/s²",
            "-4 m/s²",
            "5 m/s²",
            "2 m/s²"
          ],
          "answer": "4 m/s²",
          "explanation": "Acceleration a = (v - u) / t = (0 - 20) / 5 = -4 m/s². Retardation is the magnitude of negative acceleration, which is 4 m/s²."
        },
        {
          "id": "q3_4",
          "question": "When a ball is thrown vertically upwards, what are its velocity and acceleration at the topmost point of its flight?",
          "options": [
            "Velocity is zero and acceleration is zero.",
            "Velocity is zero and acceleration is 9.8 m/s² downwards.",
            "Velocity is 9.8 m/s upwards and acceleration is zero.",
            "Velocity is maximum and acceleration is 9.8 m/s² downwards."
          ],
          "answer": "Velocity is zero and acceleration is 9.8 m/s² downwards.",
          "explanation": "At the peak of vertical flight, the instantaneous velocity is momentarily zero, but gravity continues to act downwards with g = 9.8 m/s²."
        },
        {
          "id": "q3_5",
          "question": "If the displacement-time graph of a moving object is a straight line parallel to the time axis, what can be inferred about the object?",
          "options": [
            "The object is moving with constant acceleration.",
            "The object is moving with uniform velocity.",
            "The object is at rest.",
            "The object is decelerating."
          ],
          "answer": "The object is at rest.",
          "explanation": "A horizontal line parallel to time axis on an s-t graph means position is constant over time, indicating zero velocity (at rest)."
        },
        {
          "id": "q3_6",
          "question": "What is represented by the area under an acceleration-time graph?",
          "options": [
            "Total displacement",
            "Change in velocity",
            "Average speed",
            "Force"
          ],
          "answer": "Change in velocity",
          "explanation": "The area under an acceleration-time curve is ∫ a dt = v - u = change in velocity (Δv)."
        },
        {
          "id": "q3_7",
          "question": "Which of the following velocity-time graphs represents uniform retardation?",
          "options": [
            "A horizontal line parallel to time axis.",
            "A straight line sloping upwards from left to right.",
            "A straight line sloping downwards from left to right.",
            "A parabola curving upwards."
          ],
          "answer": "A straight line sloping downwards from left to right.",
          "explanation": "A downward sloping straight line on a v-t graph indicates constant negative slope (dv/dt < 0), which is uniform retardation."
        },
        {
          "id": "q3_8",
          "question": "Can an object have a northward velocity while experiencing a southward acceleration?",
          "options": [
            "No, acceleration and velocity must always point in the same direction.",
            "Yes, when a vehicle moving north applies brakes to slow down.",
            "No, this violates Newton's laws of motion.",
            "Yes, but only in circular orbits."
          ],
          "answer": "Yes, when a vehicle moving north applies brakes to slow down.",
          "explanation": "When an object moving in one direction slows down (decelerates), its acceleration vector points opposite to its velocity vector."
        },
        {
          "id": "q3_9",
          "question": "A triangular area on a v-t graph has base = 10 s and height = 20 m/s. What is the total displacement?",
          "options": [
            "200 m",
            "100 m",
            "50 m",
            "150 m"
          ],
          "answer": "100 m",
          "explanation": "Displacement = Area of triangle = ½ × base × height = ½ × 10 × 20 = 100 m."
        },
        {
          "id": "q3_10",
          "question": "The velocity of a body is given by v = 3t² + 2t. What is its acceleration at t = 3 seconds?",
          "options": [
            "20 m/s²",
            "18 m/s²",
            "24 m/s²",
            "15 m/s²"
          ],
          "answer": "20 m/s²",
          "explanation": "Acceleration a = dv/dt = d(3t² + 2t)/dt = 6t + 2. At t = 3 s, a = 6(3) + 2 = 18 + 2 = 20 m/s²."
        }
      ]
    },
    {
      "id": "mod_4",
      "number": 4,
      "title": "Kinematic Equations of Motion under Constant Acceleration",
      "description": "Derivation and application of the 3 kinematic equations, vertical motion under gravity, and distance in nth second.",
      "theoryHtml": "<h4>1. The Three Kinematic Equations</h4>\n<p>For an object moving in a straight line with <strong>constant (uniform) acceleration (a)</strong>, the relations between initial velocity (u), final velocity (v), acceleration (a), time (t), and displacement (s) are given by:</p>\n<ol>\n  <li><strong>v = u + at</strong> (Velocity-time relation)</li>\n  <li><strong>s = ut + ½at²</strong> (Displacement-time relation)</li>\n  <li><strong>v² = u² + 2as</strong> (Velocity-displacement relation)</li>\n</ol>\n<div class=\"notes-callout\"><strong>Displacement in the nth Second:</strong> The distance covered specifically during the nth second of motion is given by:\n<br><strong>s_n = u + ½a(2n - 1)</strong></div>\n<h4>2. Vertical Motion Under Gravity</h4>\n<p>When an object moves vertically under gravity (neglecting air resistance), acceleration a is replaced by <strong>g = 9.8 m/s²</strong>:</p>\n<ul>\n  <li><strong>Case A: Free Fall (dropped from rest, u = 0, taking downward as positive):</strong>\n    <ul>\n      <li>v = gt</li>\n      <li>h = ½gt²</li>\n      <li>v² = 2gh  ==>  v = √(2gh)</li>\n    </ul>\n  </li>\n  <li><strong>Case B: Thrown Vertically Upwards (taking upward as positive, a = -g):</strong>\n    <ul>\n      <li>v = u - gt</li>\n      <li>h = ut - ½gt²</li>\n      <li>v² = u² - 2gh</li>\n      <li>Maximum height reached: <strong>H_max = u² / (2g)</strong></li>\n      <li>Time to reach peak: <strong>t_rise = u / g</strong></li>\n      <li>Total time of flight: <strong>T_total = 2u / g</strong></li>\n    </ul>\n  </li>\n</ul>",
      "pointsToRemember": [
        "The 3 kinematic equations apply strictly and exclusively to motion with constant (uniform) acceleration.",
        "An object dropped from height h acquires a landing velocity v = √(2gh) and takes time t = √(2h/g) to reach the ground.",
        "When a projectile is thrown vertically upwards with speed u, time of ascent equals time of descent (t = u/g), and total time of flight is 2u/g."
      ],
      "keyNotes": [
        "The distance covered by a freely falling body from rest in successive equal time intervals follows Galileo's Law of Odd Numbers: 1 : 3 : 5 : 7 : 9..."
      ],
      "questions": [
        {
          "id": "q4_1",
          "question": "A stone is dropped from the top of a tower of height 45 m. Taking g = 10 m/s², how long does it take to reach the ground?",
          "options": [
            "3 seconds",
            "4.5 seconds",
            "2 seconds",
            "5 seconds"
          ],
          "answer": "3 seconds",
          "explanation": "From h = ut + ½gt² with u = 0: 45 = ½(10)t² ==> 45 = 5t² ==> t² = 9 ==> t = 3 seconds."
        },
        {
          "id": "q4_2",
          "question": "A car accelerates uniformly from rest at 2 m/s² for 10 seconds. What is the total distance covered by the car?",
          "options": [
            "100 m",
            "200 m",
            "50 m",
            "150 m"
          ],
          "answer": "100 m",
          "explanation": "From s = ut + ½at² with u = 0, a = 2 m/s², t = 10 s: s = 0 + ½(2)(10)² = 100 m."
        },
        {
          "id": "q4_3",
          "question": "A bullet moving at 100 m/s penetrates a wooden target and comes to rest after penetrating 5 cm (0.05 m). What is the magnitude of retardation?",
          "options": [
            "10⁵ m/s²",
            "10⁴ m/s²",
            "5 × 10⁴ m/s²",
            "2 × 10⁵ m/s²"
          ],
          "answer": "10⁵ m/s²",
          "explanation": "From v² = u² + 2as: 0 = (100)² + 2a(0.05) ==> 0 = 10000 + 0.1a ==> a = -100000 m/s² = -10⁵ m/s². Retardation = 10⁵ m/s²."
        },
        {
          "id": "q4_4",
          "question": "A ball thrown vertically upwards reaches a maximum height of 20 m. With what speed was it thrown? (Take g = 10 m/s²)",
          "options": [
            "20 m/s",
            "10 m/s",
            "14.1 m/s",
            "25 m/s"
          ],
          "answer": "20 m/s",
          "explanation": "From H_max = u² / (2g): 20 = u² / (2 × 10) ==> u² = 400 ==> u = 20 m/s."
        },
        {
          "id": "q4_5",
          "question": "What is the ratio of distances fallen by a freely dropped body in the 1st, 2nd, and 3rd seconds of its fall?",
          "options": [
            "1 : 2 : 3",
            "1 : 3 : 5",
            "1 : 4 : 9",
            "1 : 1 : 1"
          ],
          "answer": "1 : 3 : 5",
          "explanation": "Distance in nth second is s_n = ½g(2n - 1). For n = 1, 2, 3: (2(1)-1) : (2(2)-1) : (2(3)-1) = 1 : 3 : 5 (Galileo's Law of Odd Numbers)."
        },
        {
          "id": "q4_6",
          "question": "A body starting from rest moves with a uniform acceleration of 3 m/s². What distance does it travel specifically in the 5th second?",
          "options": [
            "13.5 m",
            "15 m",
            "12 m",
            "37.5 m"
          ],
          "answer": "13.5 m",
          "explanation": "s_n = u + ½a(2n - 1). Here u = 0, a = 3, n = 5: s_5 = ½(3)(2×5 - 1) = 1.5 × 9 = 13.5 m."
        },
        {
          "id": "q4_7",
          "question": "Two balls of masses 1 kg and 5 kg are dropped simultaneously from the same height in a vacuum. Which ball strikes the ground first?",
          "options": [
            "The 5 kg ball because it is heavier.",
            "The 1 kg ball because it experiences less inertia.",
            "Both balls reach the ground at the exact same instant.",
            "Depends on the volume and shape of the balls."
          ],
          "answer": "Both balls reach the ground at the exact same instant.",
          "explanation": "In a vacuum, acceleration due to gravity g is independent of the mass of the falling object (t = √(2h/g)). Both strike simultaneously."
        },
        {
          "id": "q4_8",
          "question": "A car travelling at speed v stops within a minimum distance s on applying brakes. If the speed is doubled to 2v, what will be the minimum stopping distance under identical braking force?",
          "options": [
            "2s",
            "4s",
            "s / 2",
            "8s"
          ],
          "answer": "4s",
          "explanation": "From v² = u² + 2as, stopping distance s = u² / (2a). Since s ∝ u², doubling speed (2u) quadruples stopping distance to 4s."
        },
        {
          "id": "q4_9",
          "question": "A stone dropped from a balloon rising upwards with velocity 10 m/s at height 40 m reaches the ground in: (Take g = 10 m/s²)",
          "options": [
            "4 seconds",
            "2 seconds",
            "3 seconds",
            "5 seconds"
          ],
          "answer": "4 seconds",
          "explanation": "Initial velocity of stone is upwards: u = -10 m/s (taking downward as positive). From h = ut + ½gt²: 40 = -10t + 5t² ==> 5t² - 10t - 40 = 0 ==> t² - 2t - 8 = 0 ==> (t - 4)(t + 2) = 0 ==> t = 4 seconds."
        },
        {
          "id": "q4_10",
          "question": "Under what condition can the equation s = ut + ½at² NOT be applied?",
          "options": [
            "When acceleration is zero.",
            "When acceleration varies with time (variable acceleration).",
            "When initial velocity is negative.",
            "When the body moves vertically under gravity."
          ],
          "answer": "When acceleration varies with time (variable acceleration).",
          "explanation": "The standard kinematic equations are derived assuming constant acceleration. If acceleration is variable (a = f(t)), calculus methods (integration) must be used instead."
        }
      ]
    },
    {
      "id": "mod_5",
      "number": 5,
      "title": "Newton's First Law of Motion & Law of Inertia",
      "description": "Aristotle's fallacy, Galileo's thought experiments, Newton's 1st Law, qualitative definition of force, and types of inertia.",
      "theoryHtml": "<h4>1. Historical Context: Galileo vs. Aristotle</h4>\n<p>Aristotle maintained that an external force is continuously required to keep a body in uniform motion. <strong>Galileo Galilei</strong> disproved this by showing that a body in motion on a frictionless inclined plane would continue moving indefinitely without any external push.</p>\n<h4>2. Newton's First Law of Motion (1687)</h4>\n<p>Presented in the <em>Philosophiae Naturalis Principia Mathematica</em>, the First Law states:</p>\n<div class=\"notes-callout\"><strong>The First Law:</strong> Every object continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by an external unbalanced force.</div>\n<p>Newton's First Law provides two vital concepts:</p>\n<ol>\n  <li><strong>Qualitative Definition of Force:</strong> Force is an external agency capable of changing or tending to change a body's state of rest, uniform motion, or direction.</li>\n  <li><strong>Concept of Inertia:</strong> The inherent inability of a body to alter its state of rest or motion by itself. <strong>Mass is the quantitative measure of inertia</strong> (greater mass = greater inertia).</li>\n</ol>\n<h4>3. The Three Types of Inertia</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Type of Inertia</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Scientific Principle</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Real-World Everyday Examples</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Inertia of Rest</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Tendency of a stationary body to remain at rest.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      • Passengers jerk backwards when a stationary bus starts suddenly.<br>\n      • Dust falls off a carpet when beaten with a stick.<br>\n      • Coin falls into a tumbler when the card below it is flicked away.\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Inertia of Motion</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Tendency of a moving body to continue in uniform motion.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      • Passengers jerk forward when brakes are applied suddenly in a moving bus.<br>\n      • An athlete runs some distance before taking a long jump.<br>\n      • Disembarking passenger falls forward if stepping out of a moving vehicle.\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Inertia of Direction</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Tendency of a body to maintain its straight-line direction.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      • Passengers lean outwards when a vehicle takes a sharp turn.<br>\n      • Sparks flying off a grinding stone leave tangentially.<br>\n      • Mud flying tangentially off a rotating car tire (hence mudguards).\n    </td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Newton's First Law of Motion is also known as the Law of Inertia.",
        "Mass is the sole quantitative measure of inertia: a massive object resists changes in motion more strongly than a lighter one.",
        "Newton's First Law gives the qualitative definition of force, while the Second Law gives its quantitative measurement (F = ma)."
      ],
      "keyNotes": [
        "In an inertial frame of reference, Newton's First Law holds strictly; a non-inertial frame is an accelerating reference frame where fictitious (pseudo) forces must be introduced."
      ],
      "questions": [
        {
          "id": "q5_1",
          "question": "Newton's First Law of Motion is primarily based on the concept of:",
          "options": [
            "Conservation of Energy",
            "Inertia",
            "Momentum",
            "Action-Reaction"
          ],
          "answer": "Inertia",
          "explanation": "Newton's First Law formalizes Galileo's concept of inertia, which is why it is widely called the Law of Inertia."
        },
        {
          "id": "q5_2",
          "question": "Which physical quantity serves as the quantitative measure of the inertia of an object?",
          "options": [
            "Velocity",
            "Weight",
            "Mass",
            "Volume"
          ],
          "answer": "Mass",
          "explanation": "Mass is the intrinsic property of matter that quantifies its inertia. Larger mass implies greater resistance to changes in motion."
        },
        {
          "id": "q5_3",
          "question": "When a stationary bus suddenly moves forward, passengers seated inside tend to fall backward. This phenomenon illustrates:",
          "options": [
            "Inertia of rest",
            "Inertia of motion",
            "Inertia of direction",
            "Newton's Third Law"
          ],
          "answer": "Inertia of rest",
          "explanation": "The lower body in contact with the bus moves forward while the upper body tends to stay at rest due to inertia of rest, causing a backward jerk."
        },
        {
          "id": "q5_4",
          "question": "Why does an athlete run a certain distance before taking a long jump?",
          "options": [
            "To build up inertia of motion",
            "To overcome gravitational attraction",
            "To reduce bodily mass",
            "To increase frictional traction with the ground"
          ],
          "answer": "To build up inertia of motion",
          "explanation": "Running prior to the jump imparts momentum and inertia of motion to the athlete's body, helping cover a greater horizontal distance during the flight."
        },
        {
          "id": "q5_5",
          "question": "A cardboard placed over a glass tumbler with a coin resting on it is flicked sharply with a finger. The coin falls into the tumbler. This demonstrates:",
          "options": [
            "Newton's Second Law",
            "Inertia of rest",
            "Inertia of motion",
            "Law of Conservation of Energy"
          ],
          "answer": "Inertia of rest",
          "explanation": "The flick applies force to the cardboard, which moves away quickly, while the coin remains at rest due to inertia of rest and falls under gravity."
        },
        {
          "id": "q5_6",
          "question": "When a car takes a sudden sharp left turn on a horizontal road, the passengers lean towards the right. This occurs due to:",
          "options": [
            "Inertia of direction",
            "Inertia of rest",
            "Centripetal acceleration",
            "Gravitational pull"
          ],
          "answer": "Inertia of direction",
          "explanation": "The passengers tend to continue moving in their original straight-line direction due to inertia of direction while the vehicle changes path to the left."
        },
        {
          "id": "q5_7",
          "question": "Why are mudguards fitted over the wheels of bicycles and motorcycles?",
          "options": [
            "To streamline aerodynamics",
            "To prevent mud flying off tangentially due to inertia of direction",
            "To increase wheel moment of inertia",
            "To reduce frictional rolling resistance"
          ],
          "answer": "To prevent mud flying off tangentially due to inertia of direction",
          "explanation": "Mud particles sticking to the rotating tire leave the rim along the tangent due to inertia of direction; mudguards intercept these flying particles."
        },
        {
          "id": "q5_8",
          "question": "What is the net external force acting on a rain drop falling vertically downward at a constant terminal velocity?",
          "options": [
            "Equal to the weight of the drop",
            "Zero",
            "Greater than the weight of the drop",
            "Equal to upward air resistance minus gravitational pull"
          ],
          "answer": "Zero",
          "explanation": "According to Newton's First Law, when a body moves with constant velocity, its acceleration is zero, which means the net external force acting on it is exactly zero."
        },
        {
          "id": "q5_9",
          "question": "A book rests on a horizontal table. The force of reaction exerted by the table on the book is equal and opposite to:",
          "options": [
            "The gravitational force exerted by Earth on the book",
            "The atmospheric pressure on the book",
            "The frictional force",
            "The book's momentum"
          ],
          "answer": "The gravitational force exerted by Earth on the book",
          "explanation": "In equilibrium on a horizontal surface, the normal contact reaction N balances the downward gravitational pull mg, yielding a net vertical force of zero."
        },
        {
          "id": "q5_10",
          "question": "Which of Newton's laws of motion provides a qualitative definition of force?",
          "options": [
            "First Law of Motion",
            "Second Law of Motion",
            "Third Law of Motion",
            "Universal Law of Gravitation"
          ],
          "answer": "First Law of Motion",
          "explanation": "The First Law defines force qualitatively as the agency that alters or tends to alter the state of rest or motion. The Second Law defines force quantitatively as F = ma."
        }
      ]
    },
    {
      "id": "mod_6",
      "number": 6,
      "title": "Linear Momentum & Newton's Second Law of Motion",
      "description": "Definition of momentum (p = mv), relation between force and rate of change of momentum, quantitative formula F = ma.",
      "theoryHtml": "<h4>1. Linear Momentum (p)</h4>\n<p><strong>Linear Momentum</strong> is the quantity of motion contained in a body. It is defined as the product of mass (m) and velocity (v):</p>\n<p><strong>p = m × v</strong></p>\n<ul>\n  <li>It is a <strong>vector quantity</strong> possessing the same direction as the velocity vector.</li>\n  <li><strong>SI Unit:</strong> kg·m/s (or N·s).</li>\n  <li><strong>Dimensional Formula:</strong> [M¹ L¹ T⁻¹].</li>\n</ul>\n<h4>2. Newton's Second Law of Motion</h4>\n<div class=\"notes-callout\"><strong>The Second Law:</strong> The time rate of change of linear momentum of an object is directly proportional to the applied unbalanced force and takes place in the direction in which the force acts.</div>\n<p>Mathematically:</p>\n<p>F ∝ dp/dt  ==>  F = k (dp/dt)</p>\n<p>In SI units, the constant of proportionality k = 1. Since p = m v (for constant mass m):</p>\n<p><strong>F = m (dv/dt) = m × a</strong></p>\n<p>where <strong>a</strong> is the acceleration produced.</p>\n<h4>3. Kinetic Energy and Momentum Relation</h4>\n<p>Kinetic Energy (KE) and linear momentum (p) are interconnected by:</p>\n<p>KE = ½ m v² = p² / (2m)  ==>  <strong>p = √(2m × KE)</strong></p>\n<div class=\"notes-callout\"><strong>High-Yield Deduction:</strong> If two bodies of masses m₁ and m₂ (where m₁ < m₂) have identical kinetic energies, the heavier body possesses greater momentum (p ∝ √m). Conversely, if they have identical momentum, the lighter body possesses greater kinetic energy (KE ∝ 1/m).</div>",
      "pointsToRemember": [
        "Linear momentum p = mv is a vector with SI unit kg·m/s and dimensions [M¹ L¹ T⁻¹].",
        "Newton's Second Law states that Force is the time rate of change of momentum (F = dp/dt = ma), providing the quantitative measurement of force.",
        "The SI unit of force is the Newton (1 N = 1 kg·m/s²); in CGS units, 1 N = 10⁵ dynes."
      ],
      "keyNotes": [
        "Newton's Second Law is considered the real/fundamental law of motion because both the First Law and Third Law can be derived from it."
      ],
      "questions": [
        {
          "id": "q6_1",
          "question": "What is the SI unit and dimensional formula of linear momentum?",
          "options": [
            "kg·m/s and [M¹ L¹ T⁻¹]",
            "kg·m/s² and [M¹ L¹ T⁻²]",
            "N·m and [M¹ L² T⁻²]",
            "kg·m² and [M¹ L² T⁻¹]"
          ],
          "answer": "kg·m/s and [M¹ L¹ T⁻¹]",
          "explanation": "Linear momentum p = mv has SI units kg × m/s = kg·m/s, and dimensional formula [M¹ L¹ T⁻¹]."
        },
        {
          "id": "q6_2",
          "question": "A force of 10 N acts on a mass of 2 kg initially at rest for 4 seconds. What is the final momentum acquired by the body?",
          "options": [
            "40 kg·m/s",
            "20 kg·m/s",
            "80 kg·m/s",
            "10 kg·m/s"
          ],
          "answer": "40 kg·m/s",
          "explanation": "From F = dp/dt, change in momentum Δp = F × Δt = 10 N × 4 s = 40 kg·m/s. Since initial momentum is zero, final momentum is 40 kg·m/s."
        },
        {
          "id": "q6_3",
          "question": "How many dynes are there in one Newton?",
          "options": [
            "10³ dynes",
            "10⁵ dynes",
            "10⁷ dynes",
            "10⁶ dynes"
          ],
          "answer": "10⁵ dynes",
          "explanation": "1 N = 1 kg × 1 m/s² = 1000 g × 100 cm/s² = 10⁵ g·cm/s² = 10⁵ dynes."
        },
        {
          "id": "q6_4",
          "question": "Two bodies of masses 2 kg and 8 kg have equal kinetic energies. What is the ratio of their linear momenta?",
          "options": [
            "1 : 2",
            "1 : 4",
            "2 : 1",
            "1 : 1"
          ],
          "answer": "1 : 2",
          "explanation": "p = √(2m × KE). Since KE is equal, p₁ / p₂ = √(m₁ / m₂) = √(2 / 8) = √(1 / 4) = 1 / 2."
        },
        {
          "id": "q6_5",
          "question": "If the linear momentum of an object is increased by 50%, by what percentage does its kinetic energy increase?",
          "options": [
            "50%",
            "100%",
            "125%",
            "225%"
          ],
          "answer": "125%",
          "explanation": "KE = p² / (2m). If p becomes 1.5p, new KE' = (1.5p)² / (2m) = 2.25 KE. Increase = (2.25 - 1) × 100% = 125%."
        },
        {
          "id": "q6_6",
          "question": "Which of Newton's laws is considered the fundamental law of motion from which the other two can be derived?",
          "options": [
            "First Law",
            "Second Law",
            "Third Law",
            "Law of Gravitation"
          ],
          "answer": "Second Law",
          "explanation": "The Second Law (F = dp/dt) contains both the First Law (if F = 0, dp/dt = 0 ==> v = constant) and Third Law (using conservation of momentum)."
        },
        {
          "id": "q6_7",
          "question": "A body of mass 5 kg accelerates from 4 m/s to 10 m/s in 3 seconds. What constant net force was exerted on it?",
          "options": [
            "10 N",
            "15 N",
            "20 N",
            "30 N"
          ],
          "answer": "10 N",
          "explanation": "Acceleration a = (10 - 4) / 3 = 2 m/s². Force F = m × a = 5 kg × 2 m/s² = 10 N."
        },
        {
          "id": "q6_8",
          "question": "When a constant force acts on an object of mass m, which of the following remains constant?",
          "options": [
            "Velocity",
            "Displacement",
            "Acceleration",
            "Momentum"
          ],
          "answer": "Acceleration",
          "explanation": "According to F = ma, if force F and mass m are constant, acceleration a = F/m must also be constant."
        },
        {
          "id": "q6_9",
          "question": "A heavy truck and a light compact car are moving with the exact same kinetic energy. Which one has greater momentum?",
          "options": [
            "The compact car",
            "The heavy truck",
            "Both have identical momentum",
            "Cannot be determined without knowing their speeds"
          ],
          "answer": "The heavy truck",
          "explanation": "Since p = √(2m × KE), for identical KE, momentum is directly proportional to the square root of mass (p ∝ √m). Hence the heavy truck has greater momentum."
        },
        {
          "id": "q6_10",
          "question": "What happens to the acceleration of an object if the net applied force is doubled while its mass is halved?",
          "options": [
            "Acceleration doubles (2x)",
            "Acceleration quadruples (4x)",
            "Acceleration remains unchanged",
            "Acceleration increases eightfold (8x)"
          ],
          "answer": "Acceleration quadruples (4x)",
          "explanation": "a = F / m. If F' = 2F and m' = m / 2, then a' = (2F) / (m / 2) = 4 (F / m) = 4a. The acceleration quadruples."
        }
      ]
    },
    {
      "id": "mod_7",
      "number": 7,
      "title": "Newton's Third Law & Conservation of Linear Momentum",
      "description": "Action and reaction forces, simultaneity, recoil of firearms, rocket propulsion, and collisions in isolated systems.",
      "theoryHtml": "<h4>1. Newton's Third Law of Motion</h4>\n<div class=\"notes-callout\"><strong>The Third Law:</strong> To every action, there is always an equal and opposite reaction. Alternatively, mutual forces between two bodies are always equal in magnitude and opposite in direction.</div>\n<p><strong>F_AB = - F_BA</strong></p>\n<h4>Critical Characteristics of Action-Reaction Pairs:</h4>\n<ul>\n  <li>Action and reaction act on <strong>two entirely different bodies</strong>. Consequently, they <strong>never cancel each other</strong>.</li>\n  <li>They occur simultaneously; neither is the cause nor the effect.</li>\n  <li>They represent the exact same fundamental type of force (e.g., both gravitational, both normal, both electrostatic).</li>\n</ul>\n<h4>2. Law of Conservation of Linear Momentum</h4>\n<p>If the net external force acting on an isolated system of particles is zero, the total vector linear momentum of the system remains strictly constant over time:</p>\n<p><strong>Σ p_initial = Σ p_final (when F_ext = 0)</strong></p>\n<h4>3. Prominent Applications</h4>\n<ul>\n  <li><strong>Recoil of Gun:</strong> When a bullet of mass m is fired with muzzle velocity v from a gun of mass M:\n    <br>0 = M V_recoil + m v  ==>  <strong>V_recoil = - (m / M) v</strong>\n    <br>(The recoil velocity is directed opposite to bullet motion; greater gun mass reduces recoil velocity).\n  </li>\n  <li><strong>Rocket Propulsion:</strong> High-speed expulsion of hot exhaust gases backward exerts an equal and opposite forward thrust force on the rocket.</li>\n  <li><strong>Walking:</strong> Feet push the ground backward (action); the ground pushes the feet forward with normal contact reaction and friction (reaction).</li>\n</ul>",
      "pointsToRemember": [
        "Action and reaction forces are equal in magnitude, opposite in direction, and act on two different bodies simultaneously.",
        "Action and reaction never cancel each other because they act on different bodies.",
        "Linear momentum is conserved in any closed system where the net external force is zero."
      ],
      "keyNotes": [
        "Rocket propulsion relies fundamentally on both Newton's Third Law and the Law of Conservation of Linear Momentum."
      ],
      "questions": [
        {
          "id": "q7_1",
          "question": "Why do action and reaction forces not cancel each other out to produce equilibrium?",
          "options": [
            "Because they are not equal in magnitude.",
            "Because they act on two entirely different objects.",
            "Because they act in the same direction.",
            "Because they act at different times."
          ],
          "answer": "Because they act on two entirely different objects.",
          "explanation": "Forces cancel only when they act on the same single body. Action and reaction act simultaneously on two different bodies, so they cannot cancel each other."
        },
        {
          "id": "q7_2",
          "question": "A bullet of mass 20 g (0.02 kg) is fired from a rifle of mass 4 kg with a muzzle velocity of 400 m/s. What is the recoil velocity of the rifle?",
          "options": [
            "-2 m/s",
            "-4 m/s",
            "-0.5 m/s",
            "-8 m/s"
          ],
          "answer": "-2 m/s",
          "explanation": "From conservation of momentum: M V + m v = 0 ==> 4 × V + 0.02 × 400 = 0 ==> 4V + 8 = 0 ==> V = -8 / 4 = -2 m/s."
        },
        {
          "id": "q7_3",
          "question": "On which fundamental law of physics is the propulsion of a rocket based?",
          "options": [
            "Newton's First Law",
            "Conservation of Energy",
            "Conservation of Linear Momentum and Newton's Third Law",
            "Kepler's Laws"
          ],
          "answer": "Conservation of Linear Momentum and Newton's Third Law",
          "explanation": "A rocket propels forward due to the reaction of exhaust gases ejected backwards at high speed, conserving total linear momentum."
        },
        {
          "id": "q7_4",
          "question": "A person is standing on a completely frictionless horizontal sheet of ice. How can they move horizontally to the bank?",
          "options": [
            "By running vigorously",
            "By spitting, blowing air forcefully, or throwing an object horizontally",
            "By jumping vertically",
            "Motion is physically impossible"
          ],
          "answer": "By spitting, blowing air forcefully, or throwing an object horizontally",
          "explanation": "By throwing an item or expelling air/spit horizontally, an equal and opposite reaction force accelerates the person in the opposite direction (conservation of momentum)."
        },
        {
          "id": "q7_5",
          "question": "When a horse pulls a cart, the force that causes the horse and cart to move forward is exerted by:",
          "options": [
            "The cart on the horse",
            "The horse on the cart",
            "The ground on the horse's feet",
            "The horse on the ground"
          ],
          "answer": "The ground on the horse's feet",
          "explanation": "The horse pushes backward on the ground with its hooves; the reaction force of the ground on the horse pushes the horse-cart system forward."
        },
        {
          "id": "q7_6",
          "question": "Why does a heavy rifle kick (recoil) less forcefully than a lighter rifle firing the exact same bullet?",
          "options": [
            "Because the heavy rifle absorbs momentum internally.",
            "Because recoil velocity V = -(m/M)v, so larger gun mass M yields smaller recoil speed V.",
            "Because gravity cancels the recoil in heavier rifles.",
            "Because the bullet leaves with lower speed from a heavier rifle."
          ],
          "answer": "Because recoil velocity V = -(m/M)v, so larger gun mass M yields smaller recoil speed V.",
          "explanation": "Recoil velocity is inversely proportional to the mass of the gun (V_recoil ∝ 1/M). A heavier firearm acquires lower recoil velocity."
        },
        {
          "id": "q7_7",
          "question": "An open boat of mass 100 kg is stationary in still water. A 50 kg person walks from one end of the 6 m boat to the other end. How far does the boat shift relative to the water?",
          "options": [
            "2 m",
            "3 m",
            "4 m",
            "1 m"
          ],
          "answer": "2 m",
          "explanation": "Shift of boat Δx = (m × L) / (M + m) = (50 × 6) / (100 + 50) = 300 / 150 = 2 m in the opposite direction."
        },
        {
          "id": "q7_8",
          "question": "When a man jumps out of a rowboat onto the bank, the boat moves:",
          "options": [
            "Forward towards the bank",
            "Backward away from the bank",
            "Remains stationary",
            "Sinks downward"
          ],
          "answer": "Backward away from the bank",
          "explanation": "To leap forward onto the shore, the person exerts a backward force on the boat; the reaction pushes the person forward while the boat moves backward."
        },
        {
          "id": "q7_9",
          "question": "Which of the following is an example of an internal force in a system?",
          "options": [
            "Atmospheric friction on a car",
            "Forces of attraction between molecules within a falling droplet",
            "Gravitational pull of the Earth on a spacecraft",
            "Braking force applied by the road on tires"
          ],
          "answer": "Forces of attraction between molecules within a falling droplet",
          "explanation": "Internal forces act between components of the same system and always sum to zero, having no effect on the system's center of mass acceleration."
        },
        {
          "id": "q7_10",
          "question": "In an elastic collision between two isolated bodies, which of the following quantities is/are conserved?",
          "options": [
            "Total linear momentum only",
            "Total kinetic energy only",
            "Both total linear momentum and total kinetic energy",
            "Neither momentum nor kinetic energy"
          ],
          "answer": "Both total linear momentum and total kinetic energy",
          "explanation": "In an elastic collision, both total linear momentum and total mechanical kinetic energy are conserved."
        }
      ]
    },
    {
      "id": "mod_8",
      "number": 8,
      "title": "Impulse & Everyday Impact Dynamics",
      "description": "Impulse definition (J = F Δt = Δp), impact duration modulation, shock absorbers, cricket catches, and automotive safety.",
      "theoryHtml": "<h4>1. Impulse of a Force</h4>\n<p><strong>Impulse (J)</strong> is defined as the total effect of a large force acting over a very short interval of time. Mathematically, impulse is the product of average force and time duration:</p>\n<p><strong>Impulse (J) = F_avg × Δt</strong></p>\n<h4>2. Impulse-Momentum Theorem</h4>\n<p>From Newton's Second Law, F = dp/dt  ==>  F dt = dp. Integrating over time:</p>\n<p><strong>J = ∫ F dt = p_final - p_initial = Δp</strong></p>\n<p>The impulse of a force equals the <strong>change in linear momentum</strong> produced by it.</p>\n<ul>\n  <li><strong>Vector Nature:</strong> Same direction as applied force / change in momentum.</li>\n  <li><strong>SI Unit:</strong> N·s or kg·m/s.</li>\n  <li><strong>Dimensional Formula:</strong> [M¹ L¹ T⁻¹] (identical to linear momentum).</li>\n</ul>\n<h4>3. Modulation of Impact Force via Time of Contact</h4>\n<p>Since Δp is fixed for a given change in velocity:</p>\n<p><strong>F_avg = Δp / Δt</strong></p>\n<p>If the contact time <strong>Δt is increased</strong>, the impact force <strong>F_avg is greatly reduced</strong>.</p>\n<h4>Everyday Practical Applications:</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Practical Case</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Mechanism</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Safety / Performance Outcome</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Catching a Cricket Ball</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Fielder draws hands backward with the ball.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Increases time interval Δt, reducing impact force on palms to prevent injury.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Vehicle Shock Absorbers</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Springs and dampers compress over time.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Prolongs impact duration when hitting bumps, softening the jerk felt by passengers.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Crumple Zones & Airbags</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Car structure crushes and airbags deploy.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Increases collision duration during crash, dramatically cutting peak force on occupants.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Landing on Sand / Cushion</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">High jumpers land on foam mattress or sand.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Yielding surface increases deceleration time, preventing severe bone fractures.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Impulse J = F Δt = Δp is equal to the change in momentum and has units of N·s or kg·m/s.",
        "The area under a Force-Time (F-t) curve represents the total impulse delivered.",
        "Increasing the duration of an impact reduces the peak impact force (F = Δp / Δt)."
      ],
      "keyNotes": [
        "Impulse and momentum share the exact same dimensional formula [M¹ L¹ T⁻¹] and SI units (N·s = kg·m/s)."
      ],
      "questions": [
        {
          "id": "q8_1",
          "question": "A cricket player pulls his hands backward while catching a fast cricket ball. This action enables him to:",
          "options": [
            "Exert larger force on the ball",
            "Reduce the time of impact",
            "Increase the time of impact to reduce force on hands",
            "Increase the change in momentum"
          ],
          "answer": "Increase the time of impact to reduce force on hands",
          "explanation": "Drawing hands backward increases the time of deceleration (Δt), thereby minimizing the force (F = Δp / Δt) felt by the palms."
        },
        {
          "id": "q8_2",
          "question": "What is the physical meaning of the area under a Force-Time (F-t) graph?",
          "options": [
            "Work done",
            "Power",
            "Impulse (or change in momentum)",
            "Acceleration"
          ],
          "answer": "Impulse (or change in momentum)",
          "explanation": "The area under an F-t curve is ∫ F dt, which equals the impulse of the force or the net change in linear momentum."
        },
        {
          "id": "q8_3",
          "question": "A 0.15 kg ball moving at 20 m/s is caught and brought to rest in 0.1 s. What is the average force exerted on the catcher's hand?",
          "options": [
            "30 N",
            "15 N",
            "45 N",
            "3 N"
          ],
          "answer": "30 N",
          "explanation": "Δp = m(v - u) = 0.15 × (0 - 20) = -3 kg·m/s. Average force F = |Δp| / Δt = 3 / 0.1 = 30 N."
        },
        {
          "id": "q8_4",
          "question": "Why are cars manufactured with crumple zones in the front and rear?",
          "options": [
            "To increase vehicle top speed",
            "To prolong collision time and reduce impact force on passengers",
            "To reduce manufacturing cost",
            "To minimize vehicle weight"
          ],
          "answer": "To prolong collision time and reduce impact force on passengers",
          "explanation": "Crumple zones deform progressively during a collision, extending the duration of deceleration and lowering the lethal peak forces acting on passengers."
        },
        {
          "id": "q8_5",
          "question": "Which of the following pairs of physical quantities have identical dimensions?",
          "options": [
            "Force and Work",
            "Momentum and Impulse",
            "Pressure and Power",
            "Energy and Velocity"
          ],
          "answer": "Momentum and Impulse",
          "explanation": "Both Momentum (p = mv) and Impulse (J = F Δt) have the dimensional formula [M¹ L¹ T⁻¹]."
        },
        {
          "id": "q8_6",
          "question": "China glassware items are wrapped in straw paper or bubble wrap before packing to:",
          "options": [
            "Prevent discoloration",
            "Increase impact duration during transit shocks, thereby reducing force",
            "Make the parcel lighter",
            "Keep the glass warm"
          ],
          "answer": "Increase impact duration during transit shocks, thereby reducing force",
          "explanation": "Bubble wrap and straw paper cushion shocks by lengthening the time of impact, drastically lowering the breaking force on fragile glass."
        },
        {
          "id": "q8_7",
          "question": "A hammer of mass 1 kg striking a nail at 10 m/s is brought to rest in 0.01 seconds. What is the average force exerted on the nail?",
          "options": [
            "1000 N",
            "100 N",
            "500 N",
            "10 N"
          ],
          "answer": "1000 N",
          "explanation": "F = Δp / Δt = (1 × 10) / 0.01 = 10 / 0.01 = 1000 N."
        },
        {
          "id": "q8_8",
          "question": "Why does an athlete landing on a cement floor suffer more severe injury than landing on loose sand from the same height?",
          "options": [
            "Cement floor has higher friction than sand.",
            "Cement floor stops the athlete in much shorter time, producing a huge impact force.",
            "Sand increases gravitational potential energy.",
            "Cement floor conducts body heat away rapidly."
          ],
          "answer": "Cement floor stops the athlete in much shorter time, producing a huge impact force.",
          "explanation": "A hard cement floor causes nearly instantaneous deceleration (very small Δt), generating a tremendous impact force. Sand yields, increasing Δt and lowering force."
        },
        {
          "id": "q8_9",
          "question": "A force of 50 N acts on a body for 0.2 seconds. What is the impulse imparted to the body?",
          "options": [
            "10 N·s",
            "250 N·s",
            "5 N·s",
            "100 N·s"
          ],
          "answer": "10 N·s",
          "explanation": "Impulse J = F × Δt = 50 N × 0.2 s = 10 N·s."
        },
        {
          "id": "q8_10",
          "question": "In karate, a martial artist breaks a stack of bricks with a swift barehand strike by:",
          "options": [
            "Striking with large mass",
            "Delivering the strike over an extremely short time interval to generate huge force",
            "Applying constant static force",
            "Decreasing the momentum change"
          ],
          "answer": "Delivering the strike over an extremely short time interval to generate huge force",
          "explanation": "A very rapid strike brings the hand to rest in a tiny fraction of a second (tiny Δt), concentrating a massive impulsive force (F = Δp / Δt) that shatters the bricks."
        }
      ]
    },
    {
      "id": "mod_9",
      "number": 9,
      "title": "Friction: Static, Limiting, Kinetic & Rolling",
      "description": "Origin of friction, static vs kinetic vs rolling friction, laws of limiting friction, coefficient of friction, angle of repose.",
      "theoryHtml": "<h4>1. Nature and Origin of Friction</h4>\n<p><strong>Frictional force</strong> is the opposing contact force that arises between two surfaces in contact whenever one body moves or tends to move over the other. It acts tangentially along the contact interface.</p>\n<div class=\"notes-callout\"><strong>Modern Electromagnetic Origin:</strong> Microscopic surface roughness exhibits interlocking asperities and intermolecular electromagnetic bonds (cold welds) formed at microscopic contact points.</div>\n<h4>2. Types of Friction</h4>\n<ol>\n  <li><strong>Static Friction (f_s):</strong> Self-adjusting opposing force when there is applied force but no relative motion. It adjusts from 0 up to a maximum threshold called <strong>Limiting Friction (f_max)</strong>.</li>\n  <li><strong>Kinetic (Dynamic) Friction (f_k):</strong> Opposing force when relative motion is actively occurring.\n    <br>• Sliding friction < Limiting friction.\n  </li>\n  <li><strong>Rolling Friction (f_r):</strong> Opposing force when one body rolls over another.\n    <br>• Arises due to momentary indentation/deformation of surfaces.\n    <br>• <strong>Hierarchy:</strong> <em>Static (Limiting) > Kinetic (Sliding) >> Rolling</em>.\n  </li>\n</ol>\n<h4>3. Laws of Limiting Friction</h4>\n<ul>\n  <li>Limiting friction is directly proportional to normal contact reaction (R or N):\n    <br><strong>f_s(max) = μ_s × R</strong> (where μ_s is the coefficient of static friction).\n  </li>\n  <li>Kinetic friction: <strong>f_k = μ_k × R</strong> (where μ_k < μ_s).</li>\n  <li>Friction is independent of the apparent macroscopic area of contact as long as normal reaction remains constant.</li>\n  <li>Friction depends solely on the nature of the materials and surface roughness.</li>\n</ul>\n<h4>4. Angle of Friction (θ) and Angle of Repose (α)</h4>\n<ul>\n  <li><strong>Angle of Friction (θ):</strong> tan θ = μ_s.</li>\n  <li><strong>Angle of Repose (α):</strong> Minimum angle of inclination of an inclined plane at which a body placed on it just begins to slide down under gravity:\n    <br><strong>tan α = μ_s</strong>  ==>  <strong>Angle of Friction = Angle of Repose (θ = α)</strong>.\n  </li>\n</ul>",
      "pointsToRemember": [
        "Static friction is a self-adjusting force whose maximum value is the limiting friction (f_max = μ_s R).",
        "Friction hierarchy: Limiting Friction > Kinetic Friction >> Rolling Friction.",
        "Angle of Repose equals Angle of Friction (tan α = tan θ = μ_s)."
      ],
      "keyNotes": [
        "Ball bearings convert sliding friction into rolling friction, drastically reducing energy dissipation in rotating machinery."
      ],
      "questions": [
        {
          "id": "q9_1",
          "question": "Which of the following is the correct hierarchy of friction types in decreasing order of magnitude?",
          "options": [
            "Rolling friction > Kinetic friction > Static limiting friction",
            "Static limiting friction > Kinetic (sliding) friction > Rolling friction",
            "Kinetic friction > Static limiting friction > Rolling friction",
            "Rolling friction > Static limiting friction > Kinetic friction"
          ],
          "answer": "Static limiting friction > Kinetic (sliding) friction > Rolling friction",
          "explanation": "Static limiting friction is highest because surface bonds are fully formed. Once sliding starts, bonds shear continuously (kinetic < static). Rolling causes minimal surface shear (rolling is smallest)."
        },
        {
          "id": "q9_2",
          "question": "A horizontal force of 10 N is applied to a 5 kg block resting on a rough floor with limiting friction of 20 N. What is the magnitude of the static friction force acting on the block?",
          "options": [
            "20 N",
            "10 N",
            "0 N",
            "5 N"
          ],
          "answer": "10 N",
          "explanation": "Static friction is a self-adjusting force. Since the applied force (10 N) is less than the limiting friction threshold (20 N), static friction adjusts to exactly equal the applied force (10 N), keeping the block at rest."
        },
        {
          "id": "q9_3",
          "question": "Why are ball bearings commonly used in bicycle hubs and rotating electric motor axles?",
          "options": [
            "To increase wheel moment of inertia",
            "To convert sliding friction into much smaller rolling friction",
            "To prevent lubricating oil from evaporating",
            "To increase the normal reaction force"
          ],
          "answer": "To convert sliding friction into much smaller rolling friction",
          "explanation": "Ball bearings allow surfaces to roll over one another instead of sliding, converting sliding friction into rolling friction, which is orders of magnitude smaller."
        },
        {
          "id": "q9_4",
          "question": "The coefficient of static friction between a box and an inclined plane is 1 / √3 (≈ 0.577). At what angle of inclination will the box just begin to slide down?",
          "options": [
            "45°",
            "30°",
            "60°",
            "15°"
          ],
          "answer": "30°",
          "explanation": "Angle of repose α satisfies tan α = μ_s. Here tan α = 1 / √3, which gives α = 30°."
        },
        {
          "id": "q9_5",
          "question": "Which of the following statements concerning friction is FALSE?",
          "options": [
            "Friction is an electromagnetic contact force.",
            "Friction depends directly on the macroscopic apparent surface area in contact.",
            "Friction between two smooth polished surfaces increases if they are excessively polished (cold welding).",
            "Rolling friction is significantly less than sliding friction."
          ],
          "answer": "Friction depends directly on the macroscopic apparent surface area in contact.",
          "explanation": "According to the laws of friction, frictional force is independent of apparent area of contact as long as the normal reaction remains constant."
        },
        {
          "id": "q9_6",
          "question": "A block of weight 100 N rests on a horizontal floor where μ_s = 0.4. What minimum horizontal force is required to start moving the block?",
          "options": [
            "40 N",
            "100 N",
            "25 N",
            "10 N"
          ],
          "answer": "40 N",
          "explanation": "Limiting friction f_max = μ_s × R = 0.4 × 100 N = 40 N. A horizontal force just exceeding 40 N is required to initiate motion."
        },
        {
          "id": "q9_7",
          "question": "Why does a car skid on a wet asphalt road when brakes are applied abruptly?",
          "options": [
            "Water layer acts as a lubricant, drastically reducing the coefficient of friction μ.",
            "Water increases the normal contact reaction of the vehicle.",
            "Water increases the mass of the tires.",
            "Atmospheric pressure pushes the car sideways."
          ],
          "answer": "Water layer acts as a lubricant, drastically reducing the coefficient of friction μ.",
          "explanation": "A thin film of water separates tire rubber from road aggregate (hydroplaning), reducing the friction coefficient μ and causing wheels to lock and skid."
        },
        {
          "id": "q9_8",
          "question": "What is the angle of friction if the coefficient of static friction μ_s between two surfaces is 1.0?",
          "options": [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          "answer": "45°",
          "explanation": "tan θ = μ_s ==> tan θ = 1.0 ==> θ = 45°."
        },
        {
          "id": "q9_9",
          "question": "Why is sand thrown on railway tracks covered with snow or frost?",
          "options": [
            "To melt the snow chemically",
            "To increase frictional grip between the locomotive steel wheels and rails",
            "To decrease the weight of the train",
            "To cushion the tracks"
          ],
          "answer": "To increase frictional grip between the locomotive steel wheels and rails",
          "explanation": "Sand particles roughen the icy surface, significantly increasing the coefficient of friction to prevent the drive wheels from spinning freely."
        },
        {
          "id": "q9_10",
          "question": "Why is friction termed a 'necessary evil' in mechanics?",
          "options": [
            "Because it causes energy loss as heat while being indispensable for walking, driving, and holding objects.",
            "Because it violates Newton's Third Law.",
            "Because it increases gravitational force.",
            "Because it only exists in non-inertial frames."
          ],
          "answer": "Because it causes energy loss as heat while being indispensable for walking, driving, and holding objects.",
          "explanation": "Friction causes mechanical wear and parasitic heat dissipation ('evil'), yet without friction walking, braking vehicles, driving screws, and writing would be impossible ('necessary')."
        }
      ]
    },
    {
      "id": "mod_10",
      "number": 10,
      "title": "Circular Motion, Centripetal & Centrifugal Forces",
      "description": "Angular velocity (ω), centripetal acceleration and force, centrifugal fictitious force, banking of curved roads.",
      "theoryHtml": "<h4>1. Uniform Circular Motion (UCM)</h4>\n<p>When a particle moves along a circular path of radius r with constant speed v, its motion is called <strong>Uniform Circular Motion</strong>.</p>\n<ul>\n  <li>Even though speed is constant, the velocity vector continuously changes direction.</li>\n  <li>Hence, UCM is an <strong>accelerated motion</strong>.</li>\n  <li><strong>Angular Velocity (ω):</strong> ω = dθ/dt = v / r. SI unit: rad/s.</li>\n  <li>Time period: T = 2πr / v = 2π / ω.</li>\n</ul>\n<h4>2. Centripetal Acceleration & Centripetal Force</h4>\n<p>The acceleration directed radially inward toward the center of the circle is <strong>Centripetal Acceleration (a_c)</strong>:</p>\n<p><strong>a_c = v² / r = r ω²</strong></p>\n<p>According to F = ma, the real force required to maintain circular motion is <strong>Centripetal Force (F_c)</strong>:</p>\n<p><strong>F_c = (m v²) / r = m r ω²</strong></p>\n<div class=\"notes-callout\"><strong>Crucial Insight:</strong> Centripetal force is not a new fundamental force; it is provided by existing forces:\n<br>• Earth orbiting Sun: Provided by Gravitational Force.\n<br>• Car rounding a curve: Provided by Friction between tires and road.\n<br>• Stone whirled on a string: Provided by String Tension.\n<br>• Electron orbiting nucleus: Provided by Electrostatic Coulomb force.</div>\n<h4>3. Centrifugal Force (Pseudo/Fictitious Force)</h4>\n<p>In a rotating (non-inertial) frame of reference, an apparent outward force of magnitude <strong>(m v²) / r</strong> is felt, termed <strong>Centrifugal Force</strong>.</p>\n<ul>\n  <li><strong>Cream Separator:</strong> Dense milk serum moves outward while lighter cream particles gather near the central axis.</li>\n  <li><strong>Washing Machine Spin Dryer:</strong> Water droplets fly outward through drum perforations due to lack of inward centripetal adhesion.</li>\n  <li><strong>Centrifuge:</strong> Suspended cellular precipitates settle rapidly at the bottom of test tubes.</li>\n</ul>\n<h4>4. Banking of Curved Roads and Tracks</h4>\n<p>To avoid skidding when friction alone is insufficient or unreliable (e.g. on wet roads), curves are banked by raising the outer edge at an angle θ:</p>\n<p><strong>tan θ = v² / (r g)  ==>  v_safe = √(r g tan θ)</strong></p>",
      "pointsToRemember": [
        "Uniform circular motion has constant speed but continuously changing velocity, giving inward centripetal acceleration a_c = v²/r.",
        "Centripetal force F_c = mv²/r is a real inward force; centrifugal force is an outward pseudo-force observed in rotating frames.",
        "The optimum angle of banking for a road of radius r at speed v is given by tan θ = v² / (rg)."
      ],
      "keyNotes": [
        "The work done by a centripetal force on an object in uniform circular motion is always exactly zero because force is perpendicular to displacement (W = F·s·cos 90° = 0)."
      ],
      "questions": [
        {
          "id": "q10_1",
          "question": "What is the amount of work done by the centripetal force on a satellite revolving in a circular orbit around the Earth?",
          "options": [
            "Positive work proportional to satellite mass",
            "Negative work overcoming gravity",
            "Exactly zero",
            "Proportional to orbital radius"
          ],
          "answer": "Exactly zero",
          "explanation": "Centripetal force acts perpendicularly to the instantaneous displacement vector at every point (θ = 90°). Work W = F s cos 90° = 0."
        },
        {
          "id": "q10_2",
          "question": "On what principle does a dairy cream separator operate to separate cream from milk?",
          "options": [
            "Centrifugal effect",
            "Atmospheric pressure difference",
            "Capillary action",
            "Osmotic diffusion"
          ],
          "answer": "Centrifugal effect",
          "explanation": "Rapid rotation forces heavier skim milk outwards while lighter cream particles remain near the central rotational axis, achieving clean separation."
        },
        {
          "id": "q10_3",
          "question": "Why are railway tracks banked on curved sections?",
          "options": [
            "To prevent rainwater from accumulating on tracks",
            "To provide required centripetal force via the horizontal component of normal reaction",
            "To reduce gravitational acceleration",
            "To increase train weight on rails"
          ],
          "answer": "To provide required centripetal force via the horizontal component of normal reaction",
          "explanation": "Elevating the outer rail tilts the train so the horizontal component of the normal reaction provides the centripetal force, reducing lateral flange wear."
        },
        {
          "id": "q10_4",
          "question": "A body of mass 2 kg is rotated in a horizontal circle of radius 2 m with a constant speed of 4 m/s. What is the centripetal force acting on it?",
          "options": [
            "16 N",
            "8 N",
            "32 N",
            "4 N"
          ],
          "answer": "16 N",
          "explanation": "Centripetal force F_c = (m v²) / r = (2 × 4²) / 2 = (2 × 16) / 2 = 16 N."
        },
        {
          "id": "q10_5",
          "question": "If the speed of a vehicle rounding a curve of radius r is doubled, by what factor does the required centripetal force increase?",
          "options": [
            "Doubles (2x)",
            "Triples (3x)",
            "Quadruples (4x)",
            "Remains unchanged"
          ],
          "answer": "Quadruples (4x)",
          "explanation": "F_c = m v² / r. Since F_c ∝ v², doubling speed (2v) quadruples the required centripetal force (4x)."
        },
        {
          "id": "q10_6",
          "question": "In a spin dryer washing machine, wet clothes are dried because:",
          "options": [
            "Hot air evaporates water rapidly",
            "Centrifugal effect pushes water outward through drum holes due to insufficient centripetal adhesion",
            "Atmospheric pressure draws moisture out",
            "Friction between fabrics heats the water"
          ],
          "answer": "Centrifugal effect pushes water outward through drum holes due to insufficient centripetal adhesion",
          "explanation": "At high angular speeds, the adhesive forces cannot provide the enormous centripetal force needed to keep water droplets in a circle, so they fly outward through drum holes."
        },
        {
          "id": "q10_7",
          "question": "What provides the required centripetal force for an automobile negotiating an unbanked level circular curve?",
          "options": [
            "The normal reaction of the road",
            "The gravitational pull of the Earth",
            "Static friction between vehicle tires and the road surface",
            "Centrifugal push of the engine"
          ],
          "answer": "Static friction between vehicle tires and the road surface",
          "explanation": "On a flat unbanked road, the inward static friction between tires and pavement exclusively provides the necessary centripetal force (f_s = mv²/r)."
        },
        {
          "id": "q10_8",
          "question": "A cyclist negotiating a sharp turn leans inwards towards the center of the curve in order to:",
          "options": [
            "Minimize wind resistance",
            "Generate a horizontal ground reaction component that provides necessary centripetal force and prevents toppling",
            "Increase gravitational pull",
            "Reduce tire rolling friction"
          ],
          "answer": "Generate a horizontal ground reaction component that provides necessary centripetal force and prevents toppling",
          "explanation": "Leaning inward tilts the ground reaction force so its horizontal component provides centripetal force while creating zero net toppling torque about the center of mass."
        },
        {
          "id": "q10_9",
          "question": "Which of the following physical quantities remains strictly CONSTANT for a particle undergoing uniform circular motion?",
          "options": [
            "Velocity vector",
            "Acceleration vector",
            "Kinetic Energy",
            "Linear Momentum vector"
          ],
          "answer": "Kinetic Energy",
          "explanation": "In UCM, speed is constant. Since Kinetic Energy (½mv²) depends on speed magnitude (a scalar), it remains constant, whereas velocity, acceleration, and momentum constantly change direction."
        },
        {
          "id": "q10_10",
          "question": "What is the angle of banking θ for a highway curve of radius 100 m designed for a speed of 10 m/s? (Take g = 10 m/s²)",
          "options": [
            "tan θ = 0.1",
            "tan θ = 1.0",
            "tan θ = 0.5",
            "tan θ = 0.25"
          ],
          "answer": "tan θ = 0.1",
          "explanation": "tan θ = v² / (r g) = (10)² / (100 × 10) = 100 / 1000 = 0.1."
        }
      ]
    },
    {
      "id": "mod_11",
      "number": 11,
      "title": "Projectile Motion: Trajectory, Range & Flight Time",
      "description": "Two-dimensional motion under constant gravity, parabolic trajectory, flight time, maximum height, and maximum horizontal range.",
      "theoryHtml": "<h4>1. Projectile Motion Principles</h4>\n<p>A <strong>projectile</strong> is any object thrown into space with an initial velocity that moves solely under the influence of gravity (neglecting air resistance). It is a two-dimensional motion consisting of two independent simultaneous motions:</p>\n<ol>\n  <li><strong>Horizontal Motion:</strong> Uniform velocity (acceleration a_x = 0; velocity u_x = u cos θ remains constant throughout flight).</li>\n  <li><strong>Vertical Motion:</strong> Uniformly accelerated motion under gravity (a_y = -g; initial velocity u_y = u sin θ).</li>\n</ol>\n<h4>2. Mathematical Formulation</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Parameter</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Formula</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Critical Insights</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Trajectory Equation</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">y = x tan θ - (g x²) / (2 u² cos² θ)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Path is always a <strong>parabola</strong>.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Time of Flight (T)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>T = (2 u sin θ) / g</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Time of ascent = Time of descent = (u sin θ) / g.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Maximum Height (H)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>H = (u² sin² θ) / (2 g)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">At highest point, vertical velocity v_y = 0, but speed = u cos θ.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Horizontal Range (R)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>R = (u² sin 2θ) / g</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Range is maximum when <strong>θ = 45°</strong>: <strong>R_max = u² / g</strong>.</td>\n  </tr>\n</table>\n<div class=\"notes-callout\"><strong>Complementary Angles Property:</strong> The horizontal range is identical for two angles of projection θ and (90° - θ) projected with the same initial speed (e.g., 30° and 60°, or 15° and 75°), because sin 2(90° - θ) = sin(180° - 2θ) = sin 2θ.</div>\n<div class=\"notes-callout\"><strong>Relation Between H_max and R_max:</strong> At θ = 45°, H = u² / (4g). Therefore: <strong>R_max = 4 × H</strong>.</div>",
      "pointsToRemember": [
        "The trajectory of a projectile in vacuum is a parabola.",
        "Horizontal velocity (u cos θ) remains strictly constant throughout the flight, while vertical velocity varies continuously under gravity.",
        "Maximum horizontal range is achieved at a projection angle of 45°, where R_max = u²/g = 4 H.",
        "Two complementary angles of projection, θ and (90° - θ), yield the exact same horizontal range."
      ],
      "keyNotes": [
        "At the highest point of a projectile's parabolic path, its velocity is minimum (v = u cos θ) and is directed horizontally, perpendicular to the vertical acceleration due to gravity."
      ],
      "questions": [
        {
          "id": "q11_1",
          "question": "At what angle with the horizontal must an athlete throw a javelin or shot put to achieve the maximum horizontal range in vacuum?",
          "options": [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          "answer": "45°",
          "explanation": "From R = (u² sin 2θ) / g, sin 2θ attains its maximum value of 1 when 2θ = 90°, which yields θ = 45°."
        },
        {
          "id": "q11_2",
          "question": "For which of the following pairs of projection angles with the same initial velocity is the horizontal range of a projectile identical?",
          "options": [
            "20° and 60°",
            "30° and 60°",
            "40° and 70°",
            "25° and 55°"
          ],
          "answer": "30° and 60°",
          "explanation": "Ranges are identical for complementary angles where θ₁ + θ₂ = 90°. Since 30° + 60° = 90°, their ranges are equal."
        },
        {
          "id": "q11_3",
          "question": "At the highest point of a projectile's flight, the angle between its velocity vector and acceleration vector is:",
          "options": [
            "0°",
            "45°",
            "90°",
            "180°"
          ],
          "answer": "90°",
          "explanation": "At the peak, vertical velocity is zero, so velocity is purely horizontal (u cos θ). Acceleration due to gravity is purely vertical (downward). The angle between them is 90°."
        },
        {
          "id": "q11_4",
          "question": "What is the relation between maximum horizontal range (R_max) and the corresponding height (H) achieved at a projection angle of 45°?",
          "options": [
            "R_max = H",
            "R_max = 2H",
            "R_max = 4H",
            "R_max = 8H"
          ],
          "answer": "R_max = 4H",
          "explanation": "At θ = 45°, R_max = u² / g, while H = u² sin² 45° / (2g) = u² / (4g). Therefore, R_max = 4H."
        },
        {
          "id": "q11_5",
          "question": "A bomb is released from an airplane flying horizontally with uniform velocity. The trajectory of the bomb as observed by the pilot inside the plane is:",
          "options": [
            "A parabola curving backwards",
            "A straight vertical line directly beneath the airplane",
            "A horizontal straight line",
            "A hyperbola"
          ],
          "answer": "A straight vertical line directly beneath the airplane",
          "explanation": "Both the airplane and the bomb have the same forward horizontal velocity (u). The bomb remains directly below the plane throughout its fall, appearing as a vertical line to the pilot (though an observer on the ground sees a parabola)."
        },
        {
          "id": "q11_6",
          "question": "If a projectile is thrown with initial velocity u at angle θ, its velocity at the topmost point of its trajectory is:",
          "options": [
            "Zero",
            "u",
            "u cos θ",
            "u sin θ"
          ],
          "answer": "u cos θ",
          "explanation": "At the peak, the vertical velocity component becomes zero (v_y = 0), while the horizontal component remains unchanged at v_x = u cos θ."
        },
        {
          "id": "q11_7",
          "question": "What is the kinetic energy of a projectile of mass m at the peak of its trajectory if it was fired with initial kinetic energy E at an angle of 60°?",
          "options": [
            "Zero",
            "E / 2",
            "E / 4",
            "3E / 4"
          ],
          "answer": "E / 4",
          "explanation": "At peak, velocity v = u cos 60° = u / 2. Kinetic energy KE_peak = ½ m (u / 2)² = ¼ (½ m u²) = E / 4."
        },
        {
          "id": "q11_8",
          "question": "A projectile has a time of flight of 4 seconds. What is the maximum vertical height attained by it? (Take g = 10 m/s²)",
          "options": [
            "20 m",
            "40 m",
            "10 m",
            "80 m"
          ],
          "answer": "20 m",
          "explanation": "Time of ascent t = T / 2 = 4 / 2 = 2 s. Maximum height H = ½ g t² = ½ × 10 × 2² = 20 m."
        },
        {
          "id": "q11_9",
          "question": "Which of the following physical quantities of a projectile remains strictly constant throughout its motion in vacuum?",
          "options": [
            "Vertical velocity component",
            "Horizontal velocity component",
            "Kinetic energy",
            "Total linear momentum"
          ],
          "answer": "Horizontal velocity component",
          "explanation": "Since there is no horizontal force acting on the projectile in vacuum (a_x = 0), the horizontal component of velocity u_x = u cos θ remains strictly constant."
        },
        {
          "id": "q11_10",
          "question": "If the initial velocity of a projectile is doubled without changing the angle of projection, its maximum horizontal range will:",
          "options": [
            "Double (2x)",
            "Quadruple (4x)",
            "Increase eightfold (8x)",
            "Remain unchanged"
          ],
          "answer": "Quadruple (4x)",
          "explanation": "Range R = (u² sin 2θ) / g. Since R ∝ u², doubling the launch speed (2u) quadruples the range (4x)."
        }
      ]
    },
    {
      "id": "mod_12",
      "number": 12,
      "title": "Newton's Universal Law of Gravitation & Constant G",
      "description": "Inverse square law, Universal Gravitational Constant G, Cavendish experiment, and gravitational attraction between masses.",
      "theoryHtml": "<h4>1. Newton's Universal Law of Gravitation (1687)</h4>\n<p>Every particle in the universe attracts every other particle with a mutually attractive force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers:</p>\n<p><strong>F = G × (m₁ × m₂) / r²</strong></p>\n<h4>Key Characteristics of Gravitational Force:</h4>\n<ul>\n  <li>It is a <strong>universal central force</strong>: acts along the line joining the centers of the two interacting bodies.</li>\n  <li>It is always <strong>attractive</strong> in nature (never repulsive).</li>\n  <li>It is a <strong>conservative force</strong>: work done in a closed loop is zero.</li>\n  <li>It obeys the <strong>inverse square law</strong> (F ∝ 1/r²).</li>\n  <li>It is independent of the intervening medium between the two masses.</li>\n  <li>It forms an <strong>action-reaction pair</strong> (F₁₂ = -F₂₁).</li>\n  <li>It is the <strong>weakest fundamental force</strong> in nature (10³⁸ times weaker than the strong nuclear force).</li>\n</ul>\n<h4>2. Universal Gravitational Constant (G)</h4>\n<p>In the formula F = G m₁ m₂ / r², <strong>G</strong> is the universal gravitational constant.</p>\n<ul>\n  <li><strong>SI Value:</strong> <strong>G = 6.674 × 10⁻¹¹ N·m²/kg²</strong></li>\n  <li><strong>Dimensional Formula:</strong> [M⁻¹ L³ T⁻²]</li>\n  <li><strong>Measurement:</strong> First experimentally determined with high precision by <strong>Henry Cavendish</strong> in 1798 using a sensitive torsion balance.</li>\n</ul>\n<div class=\"notes-callout\"><strong>Distinction:</strong>\n<br>• <strong>G</strong>: Universal scalar constant; invariant across all space and time; value 6.674 × 10⁻¹¹ N·m²/kg².\n<br>• <strong>g</strong>: Acceleration due to gravity; local vector quantity; varies with location, height, depth, and celestial body.</div>",
      "pointsToRemember": [
        "Newton's Universal Law of Gravitation states F = G m₁ m₂ / r², an inverse square central force.",
        "The Universal Gravitational Constant G = 6.674 × 10⁻¹¹ N·m²/kg² with dimensions [M⁻¹ L³ T⁻²].",
        "G was first determined experimentally by Henry Cavendish in 1798 using a torsion balance."
      ],
      "keyNotes": [
        "Gravitational force is completely independent of the intervening physical medium (placing iron, water, or air between two masses does not alter the gravitational attraction between them)."
      ],
      "questions": [
        {
          "id": "q12_1",
          "question": "What is the SI value and dimensional formula of the Universal Gravitational Constant (G)?",
          "options": [
            "6.674 × 10⁻¹¹ N·m²/kg² and [M⁻¹ L³ T⁻²]",
            "9.8 N·m²/kg² and [M¹ L¹ T⁻²]",
            "6.674 × 10⁻¹¹ N/kg and [M⁰ L¹ T⁻²]",
            "3.0 × 10⁸ N·m²/kg² and [M⁻¹ L² T⁻¹]"
          ],
          "answer": "6.674 × 10⁻¹¹ N·m²/kg² and [M⁻¹ L³ T⁻²]",
          "explanation": "G = F r² / (m₁ m₂), giving units N·m²/kg² and dimensions (M L T⁻²)(L²) / (M²) = [M⁻¹ L³ T⁻²]."
        },
        {
          "id": "q12_2",
          "question": "Who was the first scientist to experimentally measure the value of the Universal Gravitational Constant (G)?",
          "options": [
            "Sir Isaac Newton",
            "Henry Cavendish",
            "Galileo Galilei",
            "Johannes Kepler"
          ],
          "answer": "Henry Cavendish",
          "explanation": "Henry Cavendish measured the value of G in 1798 using a sensitive torsion balance in an experiment famous for 'weighing the Earth'."
        },
        {
          "id": "q12_3",
          "question": "If the distance between two point masses is halved, the gravitational force between them will:",
          "options": [
            "Be halved (1/2)",
            "Double (2x)",
            "Quadruple (4x)",
            "Increase eightfold (8x)"
          ],
          "answer": "Quadruple (4x)",
          "explanation": "Since F ∝ 1 / r², reducing distance to r / 2 increases force by a factor of 1 / (1/2)² = 4 times."
        },
        {
          "id": "q12_4",
          "question": "What happens to the gravitational attraction between two lead spheres if they are submerged in water?",
          "options": [
            "It increases due to water density.",
            "It decreases due to buoyant shielding.",
            "It remains strictly unchanged.",
            "It reduces to zero."
          ],
          "answer": "It remains strictly unchanged.",
          "explanation": "Gravitational attraction between two masses is an intrinsic property completely independent of the intervening medium."
        },
        {
          "id": "q12_5",
          "question": "If the masses of both interacting bodies are doubled while the distance between them is also doubled, the gravitational force will:",
          "options": [
            "Double",
            "Quadruple",
            "Remain unchanged",
            "Be halved"
          ],
          "answer": "Remain unchanged",
          "explanation": "F' = G (2m₁ × 2m₂) / (2r)² = G (4 m₁ m₂) / (4 r²) = G m₁ m₂ / r² = F. The force remains unchanged."
        },
        {
          "id": "q12_6",
          "question": "Which of the four fundamental forces of nature is the weakest?",
          "options": [
            "Gravitational force",
            "Weak nuclear force",
            "Electromagnetic force",
            "Strong nuclear force"
          ],
          "answer": "Gravitational force",
          "explanation": "Gravitational force is the weakest fundamental force in the universe, roughly 10³⁸ times weaker than the strong nuclear force."
        },
        {
          "id": "q12_7",
          "question": "Why do two bowling balls resting side-by-side on a table not visibly roll towards each other under their mutual gravitational attraction?",
          "options": [
            "Because gravitation only exists between celestial bodies.",
            "Because their mutual gravitational pull is minuscule and easily held in check by static friction.",
            "Because normal reaction cancels gravity horizontally.",
            "Because air pressure repels them."
          ],
          "answer": "Because their mutual gravitational pull is minuscule and easily held in check by static friction.",
          "explanation": "Due to the tiny value of G (10⁻¹¹), the attractive force between ordinary masses is fractions of a micro-newton, completely overwhelmed by tabletop friction."
        },
        {
          "id": "q12_8",
          "question": "Gravitational force is classified as a conservative force because:",
          "options": [
            "It conserves the shape of bodies.",
            "Work done by gravity around any closed path is strictly zero.",
            "It cannot be converted into heat.",
            "Its magnitude never changes over time."
          ],
          "answer": "Work done by gravity around any closed path is strictly zero.",
          "explanation": "A force is conservative if the work done by it in moving a particle between two points is independent of the path taken, and the work done around any closed loop is zero."
        },
        {
          "id": "q12_9",
          "question": "The gravitational force between the Sun and the Earth acts as:",
          "options": [
            "Centrifugal force keeping Earth away",
            "Centripetal force maintaining Earth's orbital revolution",
            "A dissipative friction force",
            "Electromagnetic induction"
          ],
          "answer": "Centripetal force maintaining Earth's orbital revolution",
          "explanation": "The gravitational pull of the Sun provides the essential centripetal force (F_grav = mv²/r) that keeps the Earth in its stable elliptical orbit."
        },
        {
          "id": "q12_10",
          "question": "What is the ratio of gravitational force exerted by the Earth on a 1 kg stone to the gravitational force exerted by the 1 kg stone on the Earth?",
          "options": [
            "1 : 1",
            "6 × 10²⁴ : 1",
            "9.8 : 1",
            "1 : 9.8"
          ],
          "answer": "1 : 1",
          "explanation": "By Newton's Third Law and Universal Gravitation, the mutual forces form an action-reaction pair: F_earth-on-stone = F_stone-on-earth in magnitude (ratio is 1 : 1)."
        }
      ]
    },
    {
      "id": "mod_13",
      "number": 13,
      "title": "Acceleration Due to Gravity (g) & Its Planetary Variations",
      "description": "Relation g = GM/R², standard value, variation with altitude (h), depth (d), Earth's oblateness (poles vs equator), and rotation.",
      "theoryHtml": "<h4>1. Acceleration Due to Gravity (g)</h4>\n<p><strong>Acceleration due to gravity (g)</strong> is the acceleration experienced by an object falling freely under the gravitational attraction of the Earth. Equating weight mg with Newton's gravitational force:</p>\n<p>m g = G (M m) / R²  ==>  <strong>g = (G × M) / R²</strong></p>\n<ul>\n  <li>g is <strong>completely independent of the mass (m), size, or shape</strong> of the falling object.</li>\n  <li>Standard value at sea level: <strong>g ≈ 9.8 m/s²</strong> (or 980 cm/s²).</li>\n  <li>Dimensional formula: [M⁰ L¹ T⁻²].</li>\n</ul>\n<h4>2. Variations in the Value of g</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Factor</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Governing Mathematical Formula</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Physical Consequence</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Shape of Earth (Oblateness)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">g ∝ 1 / R²</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Earth is an oblate spheroid: Equatorial radius R_e is ~21 km greater than polar radius R_p (R_e > R_p). Therefore, <strong>g is maximum at the poles</strong> and <strong>minimum at the equator</strong> (g_pole > g_equator).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Altitude (Height h above surface)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">g_h = g (1 - 2h / R) [for h << R]</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>g decreases continuously with altitude</strong> as one moves above the surface of the Earth.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Depth (d below surface)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">g_d = g (1 - d / R)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>g decreases linearly with depth</strong> inside a mine. At the <strong>center of the Earth (d = R), g = 0</strong>.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Rotation of Earth (Latitude λ)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">g' = g - R ω² cos² λ</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">• At Equator (λ = 0°): g_eq = g - R ω² (maximum reduction due to centrifugal effect).<br>• At Poles (λ = 90°): g_pole = g (unaffected by rotation).</td>\n  </tr>\n</table>\n<div class=\"notes-callout\"><strong>High-Yield Deduction:</strong> If the Earth stops rotating on its axis (ω = 0), the value of g at the equator will increase by R ω², while g at the poles will remain completely unchanged.</div>",
      "pointsToRemember": [
        "Acceleration due to gravity g = GM/R² is independent of the falling object's mass.",
        "g is maximum at the poles and minimum at the equator due to Earth's equatorial bulge and axial rotation.",
        "g decreases both when moving upwards to high altitudes and when descending into deep underground mines, becoming zero at the Earth's center."
      ],
      "keyNotes": [
        "Acceleration due to gravity on the surface of the Moon is approximately 1/6th of that on the Earth (g_moon ≈ g_earth / 6 ≈ 1.63 m/s²)."
      ],
      "questions": [
        {
          "id": "q13_1",
          "question": "Where on the Earth's surface is the acceleration due to gravity (g) maximum?",
          "options": [
            "At the Equator",
            "At the Poles",
            "At the Tropic of Cancer",
            "Equally identical at all latitudes"
          ],
          "answer": "At the Poles",
          "explanation": "Due to Earth's oblate shape (polar radius is ~21 km smaller than equatorial radius) and zero centrifugal force at the poles, g is maximum at the poles."
        },
        {
          "id": "q13_2",
          "question": "What is the value of acceleration due to gravity at the exact geometrical center of the Earth?",
          "options": [
            "9.8 m/s²",
            "Zero",
            "Infinite",
            "4.9 m/s²"
          ],
          "answer": "Zero",
          "explanation": "From g_d = g (1 - d/R), at the center d = R, yielding g_center = g(1 - 1) = 0 m/s². The gravitational pull from surrounding mass cancels symmetrically."
        },
        {
          "id": "q13_3",
          "question": "How does the acceleration due to gravity (g) vary as an observer descends down into a deep mine shaft?",
          "options": [
            "g increases linearly",
            "g decreases linearly",
            "g remains completely unchanged",
            "g first increases then decreases"
          ],
          "answer": "g decreases linearly",
          "explanation": "According to g_d = g(1 - d/R), acceleration due to gravity decreases linearly with depth d inside the Earth."
        },
        {
          "id": "q13_4",
          "question": "If the Earth were to suddenly cease its diurnal axial rotation, what would happen to the value of g at the equator?",
          "options": [
            "It would decrease.",
            "It would increase by R ω².",
            "It would remain unchanged.",
            "It would become zero."
          ],
          "answer": "It would increase by R ω².",
          "explanation": "At the equator g' = g - R ω². If rotation stops (ω = 0), the outward centrifugal reduction disappears and g increases by R ω²."
        },
        {
          "id": "q13_5",
          "question": "If the Earth were to suddenly cease its diurnal axial rotation, what would happen to the value of g at the North and South Poles?",
          "options": [
            "It would increase significantly.",
            "It would decrease.",
            "It would remain completely unchanged.",
            "It would double."
          ],
          "answer": "It would remain completely unchanged.",
          "explanation": "At the poles (latitude λ = 90°), cos 90° = 0, so rotational centrifugal reduction is already zero. Hence rotation cessation has zero effect at the poles."
        },
        {
          "id": "q13_6",
          "question": "The acceleration due to gravity on the Moon's surface is approximately:",
          "options": [
            "Equal to Earth's g",
            "1/6th of Earth's g",
            "1/2 of Earth's g",
            "6 times Earth's g"
          ],
          "answer": "1/6th of Earth's g",
          "explanation": "Due to smaller lunar mass and radius, g_moon ≈ g_earth / 6 ≈ 1.63 m/s²."
        },
        {
          "id": "q13_7",
          "question": "At what height h above the Earth's surface does the acceleration due to gravity become one-fourth (g/4) of its value at the surface? (R = Earth's radius)",
          "options": [
            "h = R",
            "h = 2R",
            "h = R / 2",
            "h = 4R"
          ],
          "answer": "h = R",
          "explanation": "g_h = g [R / (R + h)]². For g_h = g / 4: [R / (R + h)]² = 1 / 4 ==> R / (R + h) = 1 / 2 ==> R + h = 2R ==> h = R."
        },
        {
          "id": "q13_8",
          "question": "A merchant buys gold in grams at the poles and sells it using a spring balance at the equator. Assuming honest measurement, the merchant:",
          "options": [
            "Gains profit",
            "Suffers a loss",
            "Neither gains nor loses",
            "Gains or loses depending on temperature"
          ],
          "answer": "Suffers a loss",
          "explanation": "A spring balance measures weight (W = mg). Since g is lower at the equator than at the poles, the gold weighs less at the equator, resulting in a loss for the seller."
        },
        {
          "id": "q13_9",
          "question": "If the radius of the Earth shrinks by 1% while its mass remains constant, the value of acceleration due to gravity on its surface will:",
          "options": [
            "Decrease by 2%",
            "Increase by 2%",
            "Increase by 1%",
            "Decrease by 1%"
          ],
          "answer": "Increase by 2%",
          "explanation": "From g = GM / R², fractional change Δg / g = -2 (ΔR / R). If R decreases by 1% (ΔR / R = -1%), then Δg / g = -2(-1%) = +2% (increases by 2%)."
        },
        {
          "id": "q13_10",
          "question": "Which of the following statements about g is INCORRECT?",
          "options": [
            "g is independent of the mass of the falling object.",
            "g is maximum on the Earth's surface at the poles.",
            "g increases as one ascends to higher altitudes in the atmosphere.",
            "g is zero at the center of the Earth."
          ],
          "answer": "g increases as one ascends to higher altitudes in the atmosphere.",
          "explanation": "g decreases with height above the Earth's surface (g_h ∝ 1 / (R + h)²), making the statement that it increases incorrect."
        }
      ]
    },
    {
      "id": "mod_14",
      "number": 14,
      "title": "Mass, Weight & Apparent Weight in an Elevator",
      "description": "Fundamental mass vs gravitational weight, spring balance vs beam balance, and the 5 classic lift acceleration cases.",
      "theoryHtml": "<h4>1. Mass vs. Weight</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Property</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Mass (m)</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Weight (W)</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Definition</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Quantity of matter contained in a body.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Gravitational force with which Earth pulls the body (W = mg).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Nature</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Scalar quantity.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Vector quantity (directed toward Earth's center).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Invariance</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Constant everywhere across the universe.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Varies from place to place with variations in local g.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Measurement Instrument</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Measured using a <strong>Physical (Beam) Balance</strong>.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Measured using a <strong>Spring Balance</strong>.</td>\n  </tr>\n</table>\n<h4>2. Apparent Weight of a Person in an Elevator (Lift)</h4>\n<p>A person of mass m standing on a weighing scale in an elevator feels an <strong>apparent weight R</strong> (the normal contact reaction from the floor):</p>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Lift Motion State</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Apparent Weight Formula</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Observed Effect on Weighing Scale</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Case 1: At Rest or Moving with Constant Velocity (a = 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>R = m g</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Apparent weight = Actual true weight.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Case 2: Accelerating Upwards with acceleration 'a'</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>R = m (g + a)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Apparent weight <strong>increases</strong> (scale reads heavier).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Case 3: Accelerating Downwards with acceleration 'a' (a < g)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>R = m (g - a)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Apparent weight <strong>decreases</strong> (scale reads lighter).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Case 4: Free Fall (Cable Snaps, a = g)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>R = m (g - g) = 0</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>State of Weightlessness</strong> (scale reads zero).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Case 5: Accelerating Downwards with a > g</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>R is negative</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">The person lifts off the floor and sticks to the ceiling of the elevator.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Mass is invariant and measured by a beam balance; weight varies with local g and is measured by a spring balance.",
        "In an upward accelerating elevator (a), apparent weight is R = m(g + a); in downward acceleration, R = m(g - a).",
        "In free fall (a = g), apparent weight R = 0, producing the condition of true weightlessness."
      ],
      "keyNotes": [
        "Astronauts inside an orbiting space station experience weightlessness not because gravity is zero in orbit, but because both the astronaut and the station are in perpetual free fall toward the Earth."
      ],
      "questions": [
        {
          "id": "q14_1",
          "question": "A person stands on a spring balance inside an elevator. In which of the following cases will the balance display the HIGHEST reading?",
          "options": [
            "The elevator moves upwards with uniform velocity.",
            "The elevator accelerates upwards with uniform acceleration a.",
            "The elevator accelerates downwards with uniform acceleration a.",
            "The elevator is in free fall after its cable snaps."
          ],
          "answer": "The elevator accelerates upwards with uniform acceleration a.",
          "explanation": "When accelerating upwards, normal reaction R = m(g + a), which exceeds the true weight mg, registering the highest reading."
        },
        {
          "id": "q14_2",
          "question": "What will a spring scale read if the elevator cable snaps and the cab falls freely under gravity?",
          "options": [
            "mg",
            "2 mg",
            "Zero",
            "mg / 2"
          ],
          "answer": "Zero",
          "explanation": "In free fall, a = g. Apparent weight R = m(g - g) = 0. The scale registers zero (weightlessness)."
        },
        {
          "id": "q14_3",
          "question": "Why does an astronaut experience weightlessness while orbiting inside the International Space Station (ISS)?",
          "options": [
            "Because gravitational pull is zero at the orbital altitude of 400 km.",
            "Because both the astronaut and the ISS are in perpetual free fall toward the Earth.",
            "Because atmospheric pressure is absent in vacuum.",
            "Because solar radiation pressure counteracts gravity."
          ],
          "answer": "Because both the astronaut and the ISS are in perpetual free fall toward the Earth.",
          "explanation": "At 400 km, Earth's gravity is still ~90% of sea-level value. Weightlessness is felt because the spacecraft and occupants free-fall together around the Earth."
        },
        {
          "id": "q14_4",
          "question": "An object has a mass of 60 kg on Earth. What will be its mass and weight on the surface of the Moon? (g_earth = 10 m/s², g_moon = 1.67 m/s²)",
          "options": [
            "Mass = 10 kg, Weight = 100 N",
            "Mass = 60 kg, Weight = 100 N",
            "Mass = 60 kg, Weight = 600 N",
            "Mass = 10 kg, Weight = 600 N"
          ],
          "answer": "Mass = 60 kg, Weight = 100 N",
          "explanation": "Mass is an invariant scalar (remains 60 kg everywhere). Weight on Moon W_moon = m × g_moon = 60 kg × (10 / 6) = 100 N."
        },
        {
          "id": "q14_5",
          "question": "If an elevator accelerates downwards with an acceleration a = 12 m/s² (greater than g = 9.8 m/s²), a passenger standing inside will:",
          "options": [
            "Fall to the floor and feel heavier",
            "Float in the center of the cabin",
            "Rise and remain pressed against the ceiling of the elevator",
            "Continue standing normally"
          ],
          "answer": "Rise and remain pressed against the ceiling of the elevator",
          "explanation": "When downward acceleration exceeds g, the floor falls away faster than the passenger falls under gravity, pressing the passenger against the ceiling."
        },
        {
          "id": "q14_6",
          "question": "Which measuring instrument correctly determines the mass of an object regardless of variations in local gravity?",
          "options": [
            "Spring balance",
            "Equal-arm beam balance",
            "Digital strain gauge",
            "Pressure sensor"
          ],
          "answer": "Equal-arm beam balance",
          "explanation": "A beam balance compares unknown weight (m₁g) with standard reference weights (m₂g). The factor g cancels on both arms, measuring true mass m independently of g."
        },
        {
          "id": "q14_7",
          "question": "A 50 kg man stands in an elevator moving downwards with a uniform constant velocity of 5 m/s. His apparent weight is: (Take g = 10 m/s²)",
          "options": [
            "500 N",
            "250 N",
            "0 N",
            "750 N"
          ],
          "answer": "500 N",
          "explanation": "Since velocity is uniform, acceleration a = 0. Therefore R = m(g ± 0) = mg = 50 × 10 = 500 N (equal to his true weight)."
        },
        {
          "id": "q14_8",
          "question": "A spring balance with a body suspended from it is dropped from a height. During its free fall, the reading on the balance will be:",
          "options": [
            "Equal to the true weight of the body",
            "Zero",
            "Twice the weight",
            "Half the weight"
          ],
          "answer": "Zero",
          "explanation": "During free fall, both the body and the spring balance accelerate downward at g, so the spring does not stretch (reading = 0)."
        },
        {
          "id": "q14_9",
          "question": "Where will a body weigh more: on the top of Mount Everest or at the bottom of a deep sea trench?",
          "options": [
            "On Mount Everest",
            "At sea level or trench level (closer to Earth's center)",
            "Weight is identical at both places",
            "Cannot be determined"
          ],
          "answer": "At sea level or trench level (closer to Earth's center)",
          "explanation": "On Everest, altitude h is ~8.8 km, which reduces g. At sea level / trench, the body is closer to Earth's center, where g is higher, yielding greater weight."
        },
        {
          "id": "q14_10",
          "question": "The weight of a body at the center of the Earth is:",
          "options": [
            "Infinite",
            "Zero",
            "Same as on the surface",
            "Double its surface weight"
          ],
          "answer": "Zero",
          "explanation": "Since g = 0 at the center of the Earth, the gravitational weight W = mg = m × 0 = 0 N."
        }
      ]
    },
    {
      "id": "mod_15",
      "number": 15,
      "title": "Kepler's Laws of Planetary Motion & Orbital Mechanics",
      "description": "Historical context (Tycho Brahe & Kepler), Law of Orbits, Law of Areas (areal velocity conservation), and Law of Periods (T² ∝ r³).",
      "theoryHtml": "<h4>1. Kepler's Three Laws of Planetary Motion</h4>\n<p>Between 1609 and 1619, <strong>Johannes Kepler</strong> formulated three empirical laws governing planetary motion based on precise observational data recorded by <strong>Tycho Brahe</strong>:</p>\n<h4>A. First Law: The Law of Orbits</h4>\n<div class=\"notes-callout\"><strong>Law of Orbits:</strong> All planets revolve around the Sun in <strong>elliptical orbits</strong>, with the Sun located at one of the two foci of the ellipse.</div>\n<ul>\n  <li>The closest approach to the Sun is termed <strong>Perihelion</strong>.</li>\n  <li>The farthest distance from the Sun is termed <strong>Aphelion</strong>.</li>\n</ul>\n<h4>B. Second Law: The Law of Areas</h4>\n<div class=\"notes-callout\"><strong>Law of Areas:</strong> The imaginary line (radius vector) joining the planet to the Sun sweeps out <strong>equal areas in equal intervals of time</strong>. That is, the <strong>areal velocity (dA/dt) of a planet is constant</strong>.</div>\n<p><strong>dA / dt = L / (2 m) = constant</strong></p>\n<p>where L is the angular momentum. Kepler's Second Law is a direct mathematical consequence of the <strong>Conservation of Angular Momentum</strong> under a central gravitational force:</p>\n<ul>\n  <li>At <strong>Perihelion</strong> (closest distance r_min): orbital speed is <strong>maximum</strong>.</li>\n  <li>At <strong>Aphelion</strong> (farthest distance r_max): orbital speed is <strong>minimum</strong>.</li>\n  <li>v_perihelion × r_perihelion = v_aphelion × r_aphelion = constant.</li>\n</ul>\n<h4>C. Third Law: The Law of Periods (Harmonic Law)</h4>\n<div class=\"notes-callout\"><strong>Law of Periods:</strong> The square of the orbital time period (T) of a planet is directly proportional to the cube of the semi-major axis (r) of its elliptical orbit:\n<br><strong>T² ∝ r³  ==>  T² / r³ = constant</strong></div>\n<ul>\n  <li>Planets closer to the Sun have much shorter orbital periods (Mercury: ~88 days; Neptune: ~165 years).</li>\n  <li>Newton derived his Inverse Square Law of Gravitation (F ∝ 1/r²) mathematically from Kepler's Third Law.</li>\n</ul>",
      "pointsToRemember": [
        "Kepler's 1st Law: Planetary orbits are ellipses with the Sun at one focus.",
        "Kepler's 2nd Law: A planet's radius vector sweeps equal areas in equal times; areal velocity is constant, reflecting Conservation of Angular Momentum.",
        "Kepler's 3rd Law: The square of orbital period is proportional to the cube of semi-major axis (T² ∝ r³)."
      ],
      "keyNotes": [
        "A planet moves fastest when closest to the Sun (Perihelion) and slowest when farthest from the Sun (Aphelion)."
      ],
      "questions": [
        {
          "id": "q15_1",
          "question": "Kepler's Second Law of planetary motion (Law of Areas) is a direct consequence of the conservation of:",
          "options": [
            "Linear momentum",
            "Angular momentum",
            "Mechanical energy",
            "Mass"
          ],
          "answer": "Angular momentum",
          "explanation": "Since gravitational force is central, it exerts zero torque (τ = r × F = 0). Therefore, angular momentum L = m r v is conserved, keeping areal velocity dA/dt = L/(2m) constant."
        },
        {
          "id": "q15_2",
          "question": "At which point in its elliptical orbit does an orbiting planet move with the HIGHEST orbital speed?",
          "options": [
            "At Aphelion (farthest from the Sun)",
            "At Perihelion (closest to the Sun)",
            "At the semi-minor axis",
            "Orbital speed is strictly constant throughout the orbit"
          ],
          "answer": "At Perihelion (closest to the Sun)",
          "explanation": "From conservation of angular momentum (m v r = constant), when radius r is minimum (at Perihelion), speed v is maximum."
        },
        {
          "id": "q15_3",
          "question": "According to Kepler's Third Law, if the distance of a planet from the Sun becomes 4 times its original value, what will its new orbital time period become?",
          "options": [
            "2 times",
            "4 times",
            "8 times",
            "16 times"
          ],
          "answer": "8 times",
          "explanation": "T² ∝ r³ ==> T ∝ r^(3/2). If r' = 4r, then T' = (4)^(3/2) T = (√4)³ T = 2³ T = 8 T. The orbital period increases eightfold."
        },
        {
          "id": "q15_4",
          "question": "What is the shape of planetary orbits around the Sun according to Kepler's First Law?",
          "options": [
            "Perfect circles",
            "Ellipses with the Sun at one focus",
            "Parabolas",
            "Hyperbolas"
          ],
          "answer": "Ellipses with the Sun at one focus",
          "explanation": "Kepler's First Law (Law of Orbits) states that all planets move in elliptical orbits with the Sun situated at one of the focal points."
        },
        {
          "id": "q15_5",
          "question": "Which astronomer's meticulous observational records formed the empirical foundation for Kepler's laws?",
          "options": [
            "Nicolaus Copernicus",
            "Tycho Brahe",
            "Galileo Galilei",
            "Claudius Ptolemy"
          ],
          "answer": "Tycho Brahe",
          "explanation": "Johannes Kepler analyzed decades of precise naked-eye planetary measurements made by Danish astronomer Tycho Brahe."
        },
        {
          "id": "q15_6",
          "question": "Newton deduced that the gravitational force between masses obeys the inverse-square law (F ∝ 1/r²) primarily using:",
          "options": [
            "Kepler's First Law",
            "Kepler's Second Law",
            "Kepler's Third Law (T² ∝ r³)",
            "Galileo's inclined plane experiment"
          ],
          "answer": "Kepler's Third Law (T² ∝ r³)",
          "explanation": "For circular orbits, centripetal force F = m v² / r = m (2πr/T)² / r = 4π² m r / T². Substituting T² ∝ r³ yields F ∝ r / r³ = 1 / r²."
        },
        {
          "id": "q15_7",
          "question": "If the semi-major axis of a newly discovered planet's orbit is 9 Astronomical Units (AU), what is its orbital period around the Sun?",
          "options": [
            "3 years",
            "9 years",
            "27 years",
            "81 years"
          ],
          "answer": "27 years",
          "explanation": "In astronomical units for the solar system, T² = r³. Here r = 9 AU, so T² = 9³ = 729 ==> T = √729 = 27 years."
        },
        {
          "id": "q15_8",
          "question": "As a comet moves from aphelion to perihelion along an eccentric orbit, its potential energy and kinetic energy:",
          "options": [
            "Both increase",
            "Potential energy increases and kinetic energy decreases",
            "Potential energy decreases and kinetic energy increases",
            "Both remain constant"
          ],
          "answer": "Potential energy decreases and kinetic energy increases",
          "explanation": "As it gets closer to the Sun, gravitational potential energy (-GMm/r) becomes more negative (decreases), converting into higher kinetic energy (speed increases)."
        },
        {
          "id": "q15_9",
          "question": "Which planet in our solar system has the shortest orbital period around the Sun?",
          "options": [
            "Venus",
            "Earth",
            "Mercury",
            "Mars"
          ],
          "answer": "Mercury",
          "explanation": "Mercury is the closest planet to the Sun (smallest semi-major axis r). By Kepler's Third Law, it has the shortest period (~88 Earth days)."
        },
        {
          "id": "q15_10",
          "question": "Does Kepler's Third Law apply to artificial satellites orbiting the Earth?",
          "options": [
            "No, it only applies to planets around the Sun.",
            "Yes, T² ∝ r³ holds for any system of satellites orbiting a central mass.",
            "Only if the satellite is in a polar orbit.",
            "Only for natural moons, not artificial satellites."
          ],
          "answer": "Yes, T² ∝ r³ holds for any system of satellites orbiting a central mass.",
          "explanation": "Kepler's laws apply universally to any closed gravitational two-body orbit, including artificial satellites and the Moon orbiting Earth."
        }
      ]
    },
    {
      "id": "mod_16",
      "number": 16,
      "title": "Artificial Satellites, Orbital Speed & Escape Velocity",
      "description": "Orbital velocity (v_o), geostationary vs polar satellites, escape velocity (v_e), and relation v_e = √2 v_o.",
      "theoryHtml": "<h4>1. Orbital Velocity of a Satellite (v_o)</h4>\n<p>The speed required to put a satellite into a stable circular orbit around the Earth is its <strong>Orbital Velocity (v_o)</strong>. Equating gravitational pull with centripetal force:</p>\n<p>G (M m) / (R + h)² = (m v_o²) / (R + h)  ==>  <strong>v_o = √[ G M / (R + h) ]</strong></p>\n<p>For a satellite orbiting very close to Earth's surface (h << R):</p>\n<p><strong>v_o = √(g R) ≈ √(9.8 × 6.4 × 10⁶) ≈ 7.92 km/s (≈ 8 km/s)</strong></p>\n<p>Time period for a close-orbit satellite: <strong>T = 2π √(R / g) ≈ 84.6 minutes (≈ 1.4 hours)</strong>.</p>\n<h4>2. Geostationary (Geosynchronous) vs Polar Satellites</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Parameter</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Geostationary Satellite (GEO)</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Polar (Sun-Synchronous) Satellite</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Orbital Altitude (h)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>~35,786 km (≈ 36,000 km)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">500 km to 800 km (Low Earth Orbit)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Time Period (T)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>24 hours</strong> (synchronous with Earth's rotation)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">~100 minutes (14 to 15 orbits/day)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Orbital Plane & Direction</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Equatorial plane, revolving <strong>West to East</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Passes over North and South poles (meridional)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Apparent Position</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Appears stationary from Earth surface</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Scans entire globe strips daily as Earth rotates</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Applications</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Telecommunication, television broadcasting, weather monitoring (INSAT)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Remote sensing, military reconnaissance, mapping, environmental tracking (IRS)</td>\n  </tr>\n</table>\n<h4>3. Escape Velocity (v_e)</h4>\n<p><strong>Escape velocity</strong> is the minimum speed with which a body must be projected from the surface of a celestial body to overcome its gravitational pull and escape into space permanently:</p>\n<p>½ m v_e² = G M m / R  ==>  <strong>v_e = √(2 G M / R) = √(2 g R)</strong></p>\n<ul>\n  <li>On Earth: <strong>v_e = √(2 × 9.8 × 6.4 × 10⁶) ≈ 11.2 km/s</strong></li>\n  <li>On Moon: <strong>v_e ≈ 2.38 km/s</strong></li>\n  <li><strong>Vital Relationship:</strong> <strong>v_e = √2 × v_o ≈ 1.414 v_o</strong> (Escape velocity is 41.4% greater than orbital velocity).</li>\n</ul>\n<div class=\"notes-callout\"><strong>Why Moon has No Atmosphere:</strong> The thermal root-mean-square (rms) speed of common atmospheric gas molecules (O₂, N₂, CO₂) at lunar daytime temperatures exceeds the Moon's low escape velocity (2.38 km/s). Consequently, gases escaped into space long ago.</div>",
      "pointsToRemember": [
        "Near-Earth orbital speed is v_o = √(gR) ≈ 7.92 km/s (~8 km/s) with a period of ~84.6 minutes.",
        "Escape velocity from Earth's surface is v_e = √(2gR) ≈ 11.2 km/s, which is √2 times orbital velocity (v_e = 1.414 v_o).",
        "Geostationary satellites orbit at ~36,000 km in the equatorial plane with a 24-hour period, revolving West to East."
      ],
      "keyNotes": [
        "Escape velocity is completely independent of the mass of the projectile and the angle of launch (it is the same whether launched at 30°, 45°, or vertically 90°)."
      ],
      "questions": [
        {
          "id": "q16_1",
          "question": "What is the escape velocity of an object projected from the surface of the Earth?",
          "options": [
            "11.2 km/s",
            "7.9 km/s",
            "9.8 km/s",
            "11.2 m/s"
          ],
          "answer": "11.2 km/s",
          "explanation": "From v_e = √(2gR), substituting g = 9.8 m/s² and R = 6.4 × 10⁶ m yields v_e ≈ 11.2 km/s."
        },
        {
          "id": "q16_2",
          "question": "What is the mathematical relationship between the escape velocity (v_e) and orbital velocity (v_o) for a satellite close to Earth's surface?",
          "options": [
            "v_e = v_o",
            "v_e = √2 v_o",
            "v_e = 2 v_o",
            "v_e = v_o / √2"
          ],
          "answer": "v_e = √2 v_o",
          "explanation": "v_e = √(2gR) and v_o = √(gR). Hence v_e = √2 × v_o ≈ 1.414 v_o (escape velocity is 41.4% higher than orbital velocity)."
        },
        {
          "id": "q16_3",
          "question": "At approximately what altitude above the Earth's equator do geostationary communication satellites orbit?",
          "options": [
            "36,000 km",
            "3,600 km",
            "400 km",
            "100,000 km"
          ],
          "answer": "36,000 km",
          "explanation": "To have an orbital period matching Earth's 24-hour rotation, a geostationary satellite must orbit at an altitude of approximately 35,786 km (~36,000 km)."
        },
        {
          "id": "q16_4",
          "question": "In which direction does a geostationary satellite revolve around the Earth?",
          "options": [
            "From East to West",
            "From West to East",
            "From North to South",
            "From South to North"
          ],
          "answer": "From West to East",
          "explanation": "To appear stationary relative to an observer on Earth, the satellite must orbit in the equatorial plane in the same direction as Earth's rotation: West to East."
        },
        {
          "id": "q16_5",
          "question": "Why is there no permanent atmosphere on the surface of the Moon?",
          "options": [
            "Solar wind blown it all away",
            "The rms speed of gas molecules exceeds the low escape velocity of the Moon (2.38 km/s)",
            "Lunar temperature is absolute zero",
            "Moon has no magnetic core"
          ],
          "answer": "The rms speed of gas molecules exceeds the low escape velocity of the Moon (2.38 km/s)",
          "explanation": "Because the Moon's escape velocity is only 2.38 km/s, thermal molecular speeds of atmospheric gases easily exceeded escape velocity and dissipated into space."
        },
        {
          "id": "q16_6",
          "question": "If a satellite's speed in a circular orbit close to Earth is increased by 41.4% (multiplied by √2), what will happen to the satellite?",
          "options": [
            "It will fall to Earth.",
            "It will orbit at twice the altitude.",
            "It will escape Earth's gravitational field along a parabolic trajectory.",
            "Its orbital period will be halved."
          ],
          "answer": "It will escape Earth's gravitational field along a parabolic trajectory.",
          "explanation": "Since v_e = √2 v_o ≈ 1.414 v_o, increasing orbital speed by 41.4% equals the escape velocity, causing the satellite to escape permanently into interplanetary space."
        },
        {
          "id": "q16_7",
          "question": "Does the escape velocity of an object from Earth depend on the angle at which it is projected into space?",
          "options": [
            "Yes, it is minimum when projected at 45°.",
            "Yes, it is minimum when projected vertically (90°).",
            "No, it is independent of the projection angle.",
            "Yes, it depends on whether launch is towards East or West."
          ],
          "answer": "No, it is independent of the projection angle.",
          "explanation": "Escape velocity is derived from scalar energy conservation (KE + PE = 0). It is a scalar speed independent of launch direction (neglecting Earth's rotational boost)."
        },
        {
          "id": "q16_8",
          "question": "What is the orbital time period of a low-Earth-orbit satellite orbiting just above the Earth's surface?",
          "options": [
            "24 hours",
            "84.6 minutes",
            "12 hours",
            "48 minutes"
          ],
          "answer": "84.6 minutes",
          "explanation": "T = 2π √(R / g) = 2π √(6.4 × 10⁶ / 9.8) ≈ 5075 s ≈ 84.6 minutes (~1.4 hours)."
        },
        {
          "id": "q16_9",
          "question": "What minimum number of geostationary satellites is required to provide complete global communication coverage over the entire Earth (excluding polar caps)?",
          "options": [
            "1",
            "2",
            "3",
            "6"
          ],
          "answer": "3",
          "explanation": "Three geostationary satellites positioned 120° apart in equatorial orbit can provide line-of-sight communication coverage across virtually the entire inhabited globe."
        },
        {
          "id": "q16_10",
          "question": "What is the orbital speed of a satellite revolving very close to the surface of the Earth?",
          "options": [
            "11.2 km/s",
            "7.92 km/s",
            "3.1 km/s",
            "1.6 km/s"
          ],
          "answer": "7.92 km/s",
          "explanation": "Near-surface orbital velocity is v_o = √(g R) = √(9.8 × 6.4 × 10⁶) ≈ 7919 m/s ≈ 7.92 km/s (~8 km/s)."
        }
      ]
    },
    {
      "id": "mod_17",
      "number": 17,
      "title": "Simple Harmonic Motion & The Simple Pendulum",
      "description": "Characteristics of SHM, restoring force (F = -kx), time period of simple pendulum T = 2π√(l/g), and seconds pendulum.",
      "theoryHtml": "<h4>1. Simple Harmonic Motion (SHM)</h4>\n<p><strong>Simple Harmonic Motion</strong> is a special periodic oscillatory motion in which the restoring force (and acceleration) acting on the body is directly proportional to its displacement from the mean (equilibrium) position and is always directed toward that mean position:</p>\n<p><strong>F = - k x  ==>  a = - (k / m) x = - ω² x</strong></p>\n<h4>Key Properties of SHM:</h4>\n<ul>\n  <li>At the <strong>Mean Position (x = 0):</strong>\n    <br>• Displacement x = 0\n    <br>• Restoring force F = 0 and acceleration a = 0\n    <br>• Velocity v is <strong>maximum</strong> (v_max = ω A)\n    <br>• Kinetic Energy is <strong>maximum</strong>, Potential Energy is <strong>minimum (zero)</strong>\n  </li>\n  <li>At the <strong>Extreme Positions (x = ± A):</strong>\n    <br>• Displacement x = ± A (amplitude)\n    <br>• Restoring force F and acceleration a are <strong>maximum</strong> (a_max = ω² A)\n    <br>• Velocity v = 0\n    <br>• Kinetic Energy = 0, Potential Energy is <strong>maximum</strong> (½ k A²)\n  </li>\n</ul>\n<h4>2. The Simple Pendulum</h4>\n<p>A simple pendulum consists of a point mass (bob) suspended from a rigid support by a light, inextensible string of length l. For small angular oscillations (θ < 4°):</p>\n<p><strong>Time Period: T = 2π √(l / g)</strong></p>\n<p>Frequency: f = 1 / T = (1 / 2π) √(g / l)</p>\n<h4>Laws of the Simple Pendulum:</h4>\n<ol>\n  <li><strong>Law of Length:</strong> T ∝ √l (longer pendulum oscillates slower).</li>\n  <li><strong>Law of Gravity:</strong> T ∝ 1 / √g (pendulum oscillates slower where g is smaller).</li>\n  <li><strong>Independence of Mass:</strong> T is <strong>completely independent of the mass or material</strong> of the bob.</li>\n  <li><strong>Independence of Amplitude:</strong> T is independent of the amplitude of oscillation as long as angular displacement remains small.</li>\n</ol>\n<div class=\"notes-callout\"><strong>The Seconds Pendulum:</strong> A pendulum whose time period is exactly <strong>2 seconds</strong> (takes 1 second for each single swing):\n<br>T = 2 s  ==>  2 = 2π √(l / g)  ==>  <strong>l = g / π² ≈ 9.8 / (3.1416)² ≈ 0.993 m ≈ 1 meter</strong>.</div>\n<h4>3. Variations in Pendulum Clock Timekeeping</h4>\n<ul>\n  <li><strong>Seasonal Variations:</strong> In summer, temperature increases cause thermal expansion of the metal rod (l increases), so T increases ==> <strong>the clock loses time (runs slow)</strong>. In winter, contraction makes l shorter ==> <strong>the clock gains time (runs fast)</strong>.</li>\n  <li><strong>At High Altitudes or Mines:</strong> g decreases ==> T increases ==> <strong>clock runs slow</strong>.</li>\n  <li><strong>On the Moon:</strong> g_moon = g/6 ==> T_moon = √6 T ≈ 2.45 T (oscillates much slower).</li>\n  <li><strong>Inside an Orbiting Satellite (or in Free Fall):</strong> Effective g = 0 ==> T = 2π √(l / 0) = <strong>∞ (pendulum does not oscillate at all)</strong>.</li>\n</ul>",
      "pointsToRemember": [
        "In SHM, acceleration is directly proportional to displacement and directed toward the mean position: a = -ω²x.",
        "The time period of a simple pendulum is T = 2π√(l/g), independent of the bob's mass and material.",
        "A seconds pendulum has a time period of exactly 2 seconds and an effective length of approximately 1 meter (~99.3 cm).",
        "A pendulum clock runs slow in summer (thermal expansion increases length l) and runs fast in winter (contraction decreases l)."
      ],
      "keyNotes": [
        "In an artificial satellite or freely falling elevator where effective g is zero, the time period of a simple pendulum becomes infinite (T = ∞), meaning it will not oscillate."
      ],
      "questions": [
        {
          "id": "q17_1",
          "question": "What is the time period of a 'Seconds Pendulum'?",
          "options": [
            "1 second",
            "2 seconds",
            "0.5 seconds",
            "4 seconds"
          ],
          "answer": "2 seconds",
          "explanation": "A seconds pendulum takes 1 second to swing from one extreme to the other (half-oscillation), so its complete back-and-forth time period is exactly 2 seconds."
        },
        {
          "id": "q17_2",
          "question": "What is the approximate length of a seconds pendulum on the surface of the Earth?",
          "options": [
            "50 cm",
            "99.3 cm (≈ 1 m)",
            "2 m",
            "25 cm"
          ],
          "answer": "99.3 cm (≈ 1 m)",
          "explanation": "From T = 2π √(l/g) with T = 2 s: 2 = 2π √(l/9.8) ==> l = 9.8 / π² ≈ 0.993 m ≈ 99.3 cm (~1 meter)."
        },
        {
          "id": "q17_3",
          "question": "A girl is swinging on a swing in a sitting position. If she stands up on the swing, what will happen to the periodic time of oscillation?",
          "options": [
            "The time period will increase",
            "The time period will decrease",
            "The time period will remain unchanged",
            "The swing will come to a complete stop immediately"
          ],
          "answer": "The time period will decrease",
          "explanation": "When the girl stands up, the center of gravity of the system rises, reducing the effective pendulum length l. Since T ∝ √l, the time period decreases (oscillates faster)."
        },
        {
          "id": "q17_4",
          "question": "What happens to a pendulum clock in the hot summer months if its pendulum rod is made of brass or steel?",
          "options": [
            "It gains time and runs fast",
            "It loses time and runs slow",
            "Its timekeeping remains unaffected",
            "It stops ticking completely"
          ],
          "answer": "It loses time and runs slow",
          "explanation": "In summer, thermal expansion increases the length (l) of the metal rod. Since T ∝ √l, the period T increases (each tick takes longer), causing the clock to lose time (run slow)."
        },
        {
          "id": "q17_5",
          "question": "If a simple pendulum is transported to the Moon, its time period will:",
          "options": [
            "Decrease by a factor of 6",
            "Increase by a factor of √6",
            "Remain unchanged",
            "Become zero"
          ],
          "answer": "Increase by a factor of √6",
          "explanation": "On the Moon, g_moon = g/6. Since T ∝ 1/√g, T_moon = T √(g / (g/6)) = √6 T ≈ 2.45 T. The period increases."
        },
        {
          "id": "q17_6",
          "question": "If the mass of the bob of a simple pendulum is doubled, its time period of oscillation will:",
          "options": [
            "Double (2x)",
            "Be halved (1/2)",
            "Remain unchanged",
            "Increase by √2"
          ],
          "answer": "Remain unchanged",
          "explanation": "The formula T = 2π √(l/g) contains no mass term. The period of a simple pendulum is completely independent of the mass or composition of the bob."
        },
        {
          "id": "q17_7",
          "question": "What will be the time period of oscillation of a simple pendulum inside an artificial satellite orbiting the Earth?",
          "options": [
            "Zero",
            "84.6 minutes",
            "Infinite (will not oscillate)",
            "2 seconds"
          ],
          "answer": "Infinite (will not oscillate)",
          "explanation": "Inside an orbiting satellite, the effective acceleration due to gravity is zero (g_eff = 0). Therefore, T = 2π √(l / 0) = ∞. The bob will not oscillate."
        },
        {
          "id": "q17_8",
          "question": "To quadruple (4x) the time period of a simple pendulum, its length must be:",
          "options": [
            "Doubled (2x)",
            "Quadrupled (4x)",
            "Increased by 16 times",
            "Halved (1/2)"
          ],
          "answer": "Increased by 16 times",
          "explanation": "T ∝ √l ==> T² ∝ l. To make T' = 4T, the new length must be l' = 4² l = 16l."
        },
        {
          "id": "q17_9",
          "question": "At which point during the oscillation of a simple pendulum is the kinetic energy of the bob maximum?",
          "options": [
            "At the extreme positions",
            "At the mean equilibrium position",
            "Midway between mean and extreme positions",
            "Kinetic energy is constant everywhere"
          ],
          "answer": "At the mean equilibrium position",
          "explanation": "At the central mean position, the bob is at its lowest height (potential energy is minimum) and moves with maximum speed, making kinetic energy maximum."
        },
        {
          "id": "q17_10",
          "question": "A hollow sphere filled with water is used as the bob of a simple pendulum. If a tiny hole at the bottom allows water to slowly leak out, the time period of oscillation will:",
          "options": [
            "Continuously decrease",
            "Continuously increase",
            "First increase then decrease back to original value",
            "Remain strictly unchanged throughout"
          ],
          "answer": "First increase then decrease back to original value",
          "explanation": "As water leaks, the center of gravity shifts downward, increasing effective length l (T increases). When the sphere becomes completely empty, the center of gravity returns to the sphere's geometric center, restoring original l and T."
        }
      ]
    },
    {
      "id": "mod_18",
      "number": 18,
      "title": "Work: Scientific Concept & Dot Product Definition",
      "description": "Scientific definition of work, scalar dot product W = F s cos θ, positive, negative, and zero work conditions.",
      "theoryHtml": "<h4>1. Scientific Definition of Work</h4>\n<p>In physics, <strong>work (W)</strong> is said to be done by a force when the point of application of the force undergoes a displacement in the direction of the force (or has a component along the displacement).</p>\n<p>If a constant force <strong>F</strong> acts on a body producing displacement <strong>s</strong> at an angle <strong>θ</strong> to the force vector, work done is the <strong>scalar (dot) product</strong>:</p>\n<p><strong>W = F · s = F × s × cos θ</strong></p>\n<ul>\n  <li>Work is a <strong>scalar quantity</strong> (possesses magnitude and sign, but no spatial direction).</li>\n  <li><strong>SI Unit:</strong> Joule (J). <strong>1 Joule = 1 N × 1 m = 1 kg·m²/s²</strong>.</li>\n  <li><strong>CGS Unit:</strong> Erg. <strong>1 Joule = 10⁷ ergs</strong>.</li>\n  <li><strong>Dimensional Formula:</strong> [M¹ L² T⁻²].</li>\n</ul>\n<h4>2. The Three Thermodynamic Signs of Work</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Type of Work</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Condition (Angle θ)</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Representative Everyday Examples</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Positive Work (W > 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">0° ≤ θ < 90° (cos θ > 0)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      • Work done by gravity on a freely falling stone (θ = 0°).<br>\n      • Work done by a horse pulling a cart forward.<br>\n      • Work done by engine pulling a car forward.\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Negative Work (W < 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">90° < θ ≤ 180° (cos θ < 0)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      • <strong>Work done by friction</strong> when a body slides on a surface (θ = 180°, cos 180° = -1).<br>\n      • Work done by gravity on a ball thrown upwards.<br>\n      • Work done by braking force stopping a vehicle.\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Zero Work (W = 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      1. Displacement s = 0<br>\n      2. Force F = 0<br>\n      3. Angle <strong>θ = 90°</strong> (cos 90° = 0)\n    </td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">\n      • <strong>Coolie carrying luggage on his head</strong> walking on a flat horizontal platform: Upward normal reaction force is perpendicular to horizontal displacement (θ = 90°, W_gravity = 0).<br>\n      • <strong>A person pushing a rigid stone wall</strong> without moving it (s = 0, W = 0).<br>\n      • <strong>Centripetal force</strong> on a planet orbiting the Sun or electron in circular orbit (θ = 90°, W = 0).\n    </td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Work is a scalar quantity defined as W = F s cos θ with SI unit Joule (1 J = 10⁷ ergs) and dimensions [M¹ L² T⁻²].",
        "Friction almost always performs negative work (W = -f s) on a sliding body because θ = 180°.",
        "Work done is zero whenever force is perpendicular to displacement (θ = 90°), such as work done by centripetal force in uniform circular motion or gravity on a coolie walking horizontally."
      ],
      "keyNotes": [
        "A coolie carrying a heavy suitcase on his head does zero work against gravity when walking along a horizontal platform, but does positive work against horizontal friction and positive work against gravity when climbing stairs."
      ],
      "questions": [
        {
          "id": "q18_1",
          "question": "A coolie carries a load of 50 kg on his head and walks 100 meters along a horizontal railway platform. How much work is done by the coolie against gravity?",
          "options": [
            "5000 Joules",
            "49,000 Joules",
            "Zero",
            "500 Joules"
          ],
          "answer": "Zero",
          "explanation": "The gravitational force acts vertically downwards while displacement is purely horizontal. Angle θ = 90°. Work done against gravity W = F s cos 90° = 0."
        },
        {
          "id": "q18_2",
          "question": "How many ergs are there in one Joule?",
          "options": [
            "10⁵ ergs",
            "10⁷ ergs",
            "10⁶ ergs",
            "10⁹ ergs"
          ],
          "answer": "10⁷ ergs",
          "explanation": "1 Joule = 1 N × 1 m = (10⁵ dynes) × (10² cm) = 10⁷ dyne·cm = 10⁷ ergs."
        },
        {
          "id": "q18_3",
          "question": "A man pushes a massive concrete wall with a force of 200 N for 1 hour but the wall does not move. What is the work done by the man?",
          "options": [
            "200 J",
            "720 kJ",
            "Zero",
            "100 J"
          ],
          "answer": "Zero",
          "explanation": "Since the wall does not move, displacement s = 0. Work done W = F × s = 200 × 0 = 0."
        },
        {
          "id": "q18_4",
          "question": "What is the sign of the work done by the force of friction on a block sliding to a stop on a rough horizontal floor?",
          "options": [
            "Positive",
            "Negative",
            "Zero",
            "Can be positive or negative"
          ],
          "answer": "Negative",
          "explanation": "Frictional force opposes relative motion, acting in the direction opposite to displacement (θ = 180°). Since cos 180° = -1, work done by friction is strictly negative."
        },
        {
          "id": "q18_5",
          "question": "A force F = 20 N acts on a crate, displacing it by 5 meters at an angle of 60° to the direction of force. What is the work done?",
          "options": [
            "100 J",
            "50 J",
            "86.6 J",
            "25 J"
          ],
          "answer": "50 J",
          "explanation": "W = F s cos θ = 20 N × 5 m × cos 60° = 100 × 0.5 = 50 Joules."
        },
        {
          "id": "q18_6",
          "question": "When a ball thrown vertically upwards rises through height h, what is the work done by the gravitational force on the ball during the ascent?",
          "options": [
            "+ mgh",
            "- mgh",
            "Zero",
            "mgh / 2"
          ],
          "answer": "- mgh",
          "explanation": "During ascent, displacement is upward while gravity acts downward (θ = 180°). Work done by gravity = mg h cos 180° = -mgh."
        },
        {
          "id": "q18_7",
          "question": "Which of the following is NOT a unit of work or energy?",
          "options": [
            "Joule",
            "Erg",
            "Kilowatt-hour",
            "Kilowatt"
          ],
          "answer": "Kilowatt",
          "explanation": "Kilowatt (kW) is a unit of Power (rate of doing work), whereas Joule, Erg, and Kilowatt-hour (kWh) are units of Work/Energy."
        },
        {
          "id": "q18_8",
          "question": "In which of the following scenarios is work done maximum for a given force F and displacement s?",
          "options": [
            "When force and displacement are in the same direction (θ = 0°)",
            "When force is at 45° to displacement",
            "When force is at 90° to displacement",
            "When force opposes displacement (θ = 180°)"
          ],
          "answer": "When force and displacement are in the same direction (θ = 0°)",
          "explanation": "W = F s cos θ. The maximum value of cos θ is 1 when θ = 0° (force and displacement collinear in the same direction), giving maximum work W = F s."
        },
        {
          "id": "q18_9",
          "question": "The work done by tension in the string of an oscillating simple pendulum over any displacement is:",
          "options": [
            "Positive",
            "Negative",
            "Zero",
            "Depends on amplitude"
          ],
          "answer": "Zero",
          "explanation": "Tension acts along the string toward the support, perpendicular to the circular arc path of the bob at every instant (θ = 90°). Hence work done by tension is always zero."
        },
        {
          "id": "q18_10",
          "question": "What is the dimensional formula of mechanical work?",
          "options": [
            "[M¹ L¹ T⁻²]",
            "[M¹ L² T⁻²]",
            "[M¹ L² T⁻³]",
            "[M¹ L¹ T⁻¹]"
          ],
          "answer": "[M¹ L² T⁻²]",
          "explanation": "Work = Force × Displacement = [M¹ L¹ T⁻²] × [L] = [M¹ L² T⁻²]."
        }
      ]
    },
    {
      "id": "mod_19",
      "number": 19,
      "title": "Energy, Work-Energy Theorem & Conservation",
      "description": "Kinetic energy (½mv²), gravitational potential energy (mgh), work-energy theorem, and the law of conservation of mechanical energy.",
      "theoryHtml": "<h4>1. Concept of Energy</h4>\n<p><strong>Energy</strong> is the capacity of a physical system to perform work. Like work, energy is a <strong>scalar quantity</strong> with SI unit <strong>Joule (J)</strong> and dimensional formula <strong>[M¹ L² T⁻²]</strong>.</p>\n<h4>2. Mechanical Energy Forms</h4>\n<ol>\n  <li><strong>Kinetic Energy (KE):</strong> Energy possessed by an object by virtue of its motion:\n    <br><strong>KE = ½ m v² = p² / (2m)</strong>\n    <br>KE is always positive (since mass m > 0 and v² ≥ 0).\n  </li>\n  <li><strong>Potential Energy (PE):</strong> Energy possessed by a body by virtue of its position, configuration, or state of strain:\n    <br>• <strong>Gravitational PE:</strong> U = <strong>m × g × h</strong> (near Earth's surface relative to ground).\n    <br>• <strong>Elastic PE of a Stretched Spring:</strong> U = <strong>½ k x²</strong> (where k is spring constant and x is elongation).\n  </li>\n</ol>\n<h4>3. The Work-Energy Theorem</h4>\n<div class=\"notes-callout\"><strong>Work-Energy Theorem:</strong> The net work done by all forces (conservative, non-conservative, and external) acting on an object equals the net change in its kinetic energy:\n<br><strong>W_net = ΔKE = KE_final - KE_initial = ½ m v² - ½ m u²</strong></div>\n<h4>4. Law of Conservation of Mechanical Energy</h4>\n<p>In an isolated system where only <strong>conservative forces</strong> (like gravity or spring force) perform work, the total mechanical energy (E = KE + PE) remains strictly constant:</p>\n<p><strong>E_total = KE + PE = constant</strong></p>\n<h4>Freely Falling Body Energy Profile:</h4>\n<ul>\n  <li>At release point (height h, u = 0): KE = 0, PE = mgh ==> <strong>E_total = mgh</strong></li>\n  <li>At midpoint (height h/2): KE = ½ mgh, PE = ½ mgh ==> <strong>E_total = mgh</strong></li>\n  <li>Just before striking ground (height 0, v = √(2gh)): KE = mgh, PE = 0 ==> <strong>E_total = mgh</strong></li>\n</ul>",
      "pointsToRemember": [
        "Kinetic Energy KE = ½mv² = p²/(2m) is always positive.",
        "Work-Energy Theorem states that net work done by all forces equals the change in kinetic energy (W_net = ΔKE).",
        "Total mechanical energy (KE + PE) is strictly conserved when only conservative forces perform work."
      ],
      "keyNotes": [
        "When a car's speed is doubled, its kinetic energy increases fourfold (KE ∝ v²), which is why the braking distance required to stop also quadruples."
      ],
      "questions": [
        {
          "id": "q19_1",
          "question": "If the speed of a moving car is doubled, its kinetic energy will:",
          "options": [
            "Double (2x)",
            "Triple (3x)",
            "Quadruple (4x)",
            "Increase eightfold (8x)"
          ],
          "answer": "Quadruple (4x)",
          "explanation": "KE = ½ m v². Since KE is proportional to the square of speed (v²), doubling speed (2v)² yields 4 times the original kinetic energy."
        },
        {
          "id": "q19_2",
          "question": "The work-energy theorem states that the work done by the net force acting on a particle is equal to the change in its:",
          "options": [
            "Potential energy",
            "Kinetic energy",
            "Linear momentum",
            "Total acceleration"
          ],
          "answer": "Kinetic energy",
          "explanation": "By definition, the Work-Energy Theorem establishes that W_net = ΔKE = ½ m v² - ½ m u²."
        },
        {
          "id": "q19_3",
          "question": "A body of mass 2 kg is dropped from a height of 10 m. What is its kinetic energy just before striking the ground? (Take g = 10 m/s²)",
          "options": [
            "100 J",
            "200 J",
            "400 J",
            "50 J"
          ],
          "answer": "200 J",
          "explanation": "By conservation of mechanical energy, KE at the bottom equals initial PE at top: KE = mgh = 2 kg × 10 m/s² × 10 m = 200 Joules."
        },
        {
          "id": "q19_4",
          "question": "What type of energy is stored in the wound spring of a mechanical wristwatch or a toy car?",
          "options": [
            "Kinetic energy",
            "Elastic potential energy",
            "Thermal energy",
            "Electrical potential energy"
          ],
          "answer": "Elastic potential energy",
          "explanation": "Winding the spring performs work against elastic restoring forces, storing it as elastic potential energy (U = ½ k x²), which unwinds gradually to drive gears."
        },
        {
          "id": "q19_5",
          "question": "Water stored at a high elevation behind a hydroelectric dam primarily possesses:",
          "options": [
            "Kinetic energy",
            "Gravitational potential energy",
            "Chemical energy",
            "Electrical energy"
          ],
          "answer": "Gravitational potential energy",
          "explanation": "Water held in an elevated reservoir possesses gravitational potential energy (mgh), which converts into kinetic energy as it flows through penstocks to turn turbines."
        },
        {
          "id": "q19_6",
          "question": "When an arrow is drawn back in a bow, what energy transformation takes place when the arrow is released?",
          "options": [
            "Kinetic energy transforms into potential energy",
            "Elastic potential energy of the bow transforms into kinetic energy of the arrow",
            "Chemical energy transforms into thermal energy",
            "Gravitational potential energy transforms into kinetic energy"
          ],
          "answer": "Elastic potential energy of the bow transforms into kinetic energy of the arrow",
          "explanation": "Drawing the bowstring stores elastic potential energy in the bent limbs of the bow; releasing the string transfers this energy into kinetic energy of the speeding arrow."
        },
        {
          "id": "q19_7",
          "question": "A compressed spring with a mass attached is released on a frictionless surface. As it passes through the natural uncompressed position, the system possesses:",
          "options": [
            "Maximum potential energy and zero kinetic energy",
            "Maximum kinetic energy and zero potential energy",
            "Equal kinetic and potential energy",
            "Zero total mechanical energy"
          ],
          "answer": "Maximum kinetic energy and zero potential energy",
          "explanation": "At the natural equilibrium length (x = 0), spring potential energy U = ½ k (0)² = 0, and all energy is converted into maximum kinetic energy."
        },
        {
          "id": "q19_8",
          "question": "Which of the following forces is a non-conservative force?",
          "options": [
            "Gravitational force",
            "Electrostatic force",
            "Frictional force",
            "Elastic spring force"
          ],
          "answer": "Frictional force",
          "explanation": "Friction is non-conservative because the work done depends on the path taken, and work done in a closed loop is not zero (dissipates mechanical energy into heat)."
        },
        {
          "id": "q19_9",
          "question": "An electric motor lifts a 50 kg mass vertically through 12 meters in 10 seconds. What is the potential energy gained by the mass? (g = 9.8 m/s²)",
          "options": [
            "5880 J",
            "600 J",
            "4900 J",
            "1200 J"
          ],
          "answer": "5880 J",
          "explanation": "PE gained = m g h = 50 kg × 9.8 m/s² × 12 m = 5880 Joules."
        },
        {
          "id": "q19_10",
          "question": "Can kinetic energy ever be negative?",
          "options": [
            "Yes, when velocity is directed along the negative axis.",
            "Yes, when a body is decelerating.",
            "No, because mass is positive and velocity is squared (½mv² ≥ 0).",
            "Yes, for subatomic particles."
          ],
          "answer": "No, because mass is positive and velocity is squared (½mv² ≥ 0).",
          "explanation": "Since mass m is always positive and velocity squared (v²) is non-negative, kinetic energy KE = ½ m v² cannot be negative under any physical conditions."
        }
      ]
    },
    {
      "id": "mod_20",
      "number": 20,
      "title": "Power, Commercial Units & Simple Machines",
      "description": "Definition of power (P = W/t = F·v), Horsepower, Kilowatt-hour, classes of levers, mechanical advantage, and stable equilibrium.",
      "theoryHtml": "<h4>1. Power Defined</h4>\n<p><strong>Power (P)</strong> is the time rate of doing work or the rate at which energy is transferred:</p>\n<p><strong>P = Work / Time = W / t</strong></p>\n<p>For instantaneous power with force F and velocity v:</p>\n<p><strong>P = F · v = F × v × cos θ</strong></p>\n<ul>\n  <li>Power is a <strong>scalar quantity</strong> with dimensional formula <strong>[M¹ L² T⁻³]</strong>.</li>\n  <li><strong>SI Unit:</strong> Watt (W). <strong>1 Watt = 1 Joule / second</strong>.</li>\n  <li>1 Kilowatt (kW) = 1000 W = 10³ W</li>\n  <li>1 Megawatt (MW) = 10⁶ W</li>\n  <li><strong>Horsepower (HP):</strong> Traditional engineering unit: <strong>1 HP = 746 Watts</strong>.</li>\n</ul>\n<h4>2. Commercial Unit of Electrical Energy</h4>\n<p>The commercial unit of electric energy billing is the <strong>Kilowatt-hour (kWh)</strong>, commonly called 1 \"Unit\" of electricity:</p>\n<p><strong>1 kWh = 1 kW × 1 hour = (1000 W) × (3600 s) = 3.6 × 10⁶ Joules (3.6 MJ)</strong></p>\n<h4>3. Simple Machines: The Three Classes of Levers</h4>\n<p>A <strong>lever</strong> is a rigid bar capable of rotating about a fixed point called the <strong>Fulcrum (F)</strong> under an <strong>Effort (E)</strong> to overcome a <strong>Load (L)</strong>.</p>\n<p><strong>Mechanical Advantage (MA) = Load / Effort = Effort Arm / Load Arm</strong></p>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Class of Lever</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Central Component</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Mechanical Advantage (MA)</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Real-World Examples</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Class I Lever</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Fulcrum in Middle</strong> (between Load and Effort)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Can be > 1, = 1, or < 1</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Crowbar, scissors, seesaw, beam balance, pliers, hand pump handle.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Class II Lever</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Load in Middle</strong> (between Fulcrum and Effort)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Always > 1</strong> (force multiplier)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Wheelbarrow, nutcracker, bottle opener, paper cutter.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Class III Lever</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Effort in Middle</strong> (between Fulcrum and Load)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Always < 1</strong> (speed multiplier)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Human forearm lifting weight, sugar tongs, tweezers, fishing rod, broom.</td>\n  </tr>\n</table>\n<h4>4. Equilibrium Conditions & Stability</h4>\n<p>For a body to be in stable equilibrium:</p>\n<ol>\n  <li>The center of gravity must be as <strong>low as possible</strong>.</li>\n  <li>The base area of support must be as <strong>large as possible</strong>.</li>\n  <li>The vertical line passing through the center of gravity must fall safely within the base of support (reason why double-decker buses tilt without toppling, and leaning tower of Pisa stays erect).</li>\n</ol>",
      "pointsToRemember": [
        "Power is the rate of doing work (P = W/t = F·v) with SI unit Watt (1 W = 1 J/s) and dimensions [M¹ L² T⁻³].",
        "1 Horsepower (HP) = 746 Watts; Commercial unit of energy 1 kWh = 3.6 × 10⁶ Joules.",
        "Class I Lever: Fulcrum in middle (scissors, crowbar); Class II: Load in middle, MA > 1 (nutcracker, wheelbarrow); Class III: Effort in middle, MA < 1 (human arm, tweezers)."
      ],
      "keyNotes": [
        "Class II levers always have Mechanical Advantage greater than 1 (MA > 1), acting as true force multipliers."
      ],
      "questions": [
        {
          "id": "q20_1",
          "question": "How many Watts are there in one Horsepower (HP)?",
          "options": [
            "746 W",
            "1000 W",
            "500 W",
            "750 W"
          ],
          "answer": "746 W",
          "explanation": "By definition, 1 British/Imperial Horsepower is equal to exactly 746 Watts."
        },
        {
          "id": "q20_2",
          "question": "How many Joules of energy correspond to 1 Kilowatt-hour (kWh)?",
          "options": [
            "3.6 × 10⁶ Joules",
            "3.6 × 10⁵ Joules",
            "10³ Joules",
            "3600 Joules"
          ],
          "answer": "3.6 × 10⁶ Joules",
          "explanation": "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10⁶ Joules (or 3.6 MJ)."
        },
        {
          "id": "q20_3",
          "question": "Which class of lever always has a Mechanical Advantage strictly greater than 1 (MA > 1)?",
          "options": [
            "Class I Lever",
            "Class II Lever",
            "Class III Lever",
            "All classes of levers"
          ],
          "answer": "Class II Lever",
          "explanation": "In a Class II lever (like a nutcracker or wheelbarrow), the load is between the fulcrum and effort, so effort arm is always longer than load arm, guaranteeing MA > 1."
        },
        {
          "id": "q20_4",
          "question": "A pair of sugar tongs or tweezers is an example of which class of lever?",
          "options": [
            "Class I Lever",
            "Class II Lever",
            "Class III Lever",
            "Compound pulley"
          ],
          "answer": "Class III Lever",
          "explanation": "In tongs or tweezers, the fulcrum is at one end and the load is at the other, with the effort applied in the middle, defining a Class III lever."
        },
        {
          "id": "q20_5",
          "question": "An electric engine delivers a constant force of 5000 N to move a train at a uniform speed of 20 m/s. What is the power delivered by the engine?",
          "options": [
            "100 kW",
            "250 kW",
            "50 kW",
            "10 kW"
          ],
          "answer": "100 kW",
          "explanation": "Power P = Force × Velocity = 5000 N × 20 m/s = 100,000 W = 100 kW."
        },
        {
          "id": "q20_6",
          "question": "A bottle opener and a wheelbarrow are classic examples of which type of simple machine?",
          "options": [
            "Class I Lever",
            "Class II Lever",
            "Class III Lever",
            "Screw jack"
          ],
          "answer": "Class II Lever",
          "explanation": "Both have the load positioned between the fulcrum and the effort, which characterizes a Class II lever."
        },
        {
          "id": "q20_7",
          "question": "What is the dimensional formula of power?",
          "options": [
            "[M¹ L² T⁻³]",
            "[M¹ L² T⁻²]",
            "[M¹ L¹ T⁻²]",
            "[M¹ L³ T⁻³]"
          ],
          "answer": "[M¹ L² T⁻³]",
          "explanation": "Power = Work / Time = [M¹ L² T⁻²] / [T] = [M¹ L² T⁻³]."
        },
        {
          "id": "q20_8",
          "question": "Why does the Leaning Tower of Pisa not topple over despite its severe tilt?",
          "options": [
            "Because its foundation is magnetic",
            "Because the vertical line drawn from its center of gravity falls safely within its base of support",
            "Because it has zero gravitational potential energy",
            "Because atmospheric pressure supports the leaning wall"
          ],
          "answer": "Because the vertical line drawn from its center of gravity falls safely within its base of support",
          "explanation": "A structure remains in stable equilibrium as long as the vertical line passing through its center of gravity falls inside its base area."
        },
        {
          "id": "q20_9",
          "question": "A crane lifts an 800 kg load through a vertical height of 15 meters in 20 seconds. What is the average power output of the crane? (Take g = 10 m/s²)",
          "options": [
            "6 kW",
            "12 kW",
            "3 kW",
            "24 kW"
          ],
          "answer": "6 kW",
          "explanation": "Work W = mgh = 800 × 10 × 15 = 120,000 J. Power P = W / t = 120,000 / 20 = 6000 W = 6 kW."
        },
        {
          "id": "q20_10",
          "question": "Why are racing sports cars designed with a very low ground clearance and wide wheelbase?",
          "options": [
            "To increase air drag",
            "To lower the center of gravity and widen the base for maximum cornering stability",
            "To increase tire rolling friction",
            "To maximize mechanical advantage"
          ],
          "answer": "To lower the center of gravity and widen the base for maximum cornering stability",
          "explanation": "Lowering the center of gravity and increasing the width of the base maximizes rotational stability, preventing vehicles from rolling over during high-speed turns."
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_DATA;
}
