# -*- coding: utf-8 -*-
"""
CH12 Part 1: Modules 1 to 10
Magnetic Effects of Electric Current (Class 10 Science)
"""
import json

with open('scratch/ch12_bank_questions.json', 'r', encoding='utf-8') as f:
    bank_questions = json.load(f)

bank_by_id = {q['id']: q for q in bank_questions}

def get_bank_q(qid, new_id):
    q = bank_by_id[qid]
    opts = [opt['text'] for opt in q['options']]
    correct_key = q['correct_option']
    correct_text = next(opt['text'] for opt in q['options'] if opt['key'] == correct_key)
    qtext = q['question'].replace('NCERT', 'standard curriculum')
    exp = q['explanation'].replace('NCERT', 'standard curriculum')
    return {
        "id": new_id,
        "question": qtext,
        "options": opts,
        "answer": correct_text,
        "explanation": exp
    }

modules_1_to_10 = []

# ==========================================
# Module 1: Oersted's Discovery & Magnetic Field
# ==========================================
m01 = {
  "id": "m01", "moduleNumber": 1,
  "title": "Hans Christian Oersted's Discovery & The Concept of Magnetic Field",
  "tagline": "The unity of electricity and magnetism, compass deflection, and vector nature of magnetic fields.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Oersted's Epochal Experiment (1820)</h4>
    <p>In 1820, Danish physicist Hans Christian Oersted accidentally observed that a small magnetic compass needle placed near a metallic conducting wire was deflected whenever an electric current was switched on in the wire. When the current was turned off, the compass returned to its normal north-south orientation. Reversing the direction of current deflected the needle in the exact opposite direction!</p>
    <p>This monumental experiment established for the first time in scientific history that <strong>moving electric charges (electric current) generate a magnetic field</strong> in the surrounding space, forging the foundational branch of physics known as <strong>electromagnetism</strong>.</p>

    <h4>2. What is a Magnetic Field ($\vec{B}$)?</h4>
    <p>A <strong>magnetic field</strong> is the region of space surrounding a magnet or a current-carrying conductor in which its magnetic force can be detected by other magnets or moving charges.</p>
    <ul>
      <li>It is a <strong>vector quantity</strong> possessing both magnitude and direction.</li>
      <li>The direction of the magnetic field at any point is defined as the direction in which the <strong>north pole of a magnetic compass needle points</strong> when placed at that point.</li>
      <li>The SI unit of magnetic field intensity (magnetic flux density) is the <strong>tesla (T)</strong>, named in honour of Nikola Tesla ($1\text{ T} = 1\text{ N}\cdot\text{A}^{-1}\cdot\text{m}^{-1} = 10^4\text{ Gauss}$).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Hans Christian Oersted (1820) discovered that an electric current produces a magnetic field.",
    "Magnetic field is a VECTOR quantity having both magnitude and direction.",
    "The SI unit of magnetic field strength is the Tesla ($\\text{T}$)."
  ],
  "keyNotes": [
    "A magnetic compass is simply a miniature bar magnet pivoted on a sharp spindle, whose north-seeking pole points toward Earth's geographic north."
  ],
  "questions": [
    get_bank_q(1, "m01_q01"),
    get_bank_q(2, "m01_q02"),
    get_bank_q(21, "m01_q03"),
    get_bank_q(50, "m01_q04"),
    get_bank_q(70, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "Which Danish scientist first discovered in 1820 that an electric current produces a magnetic field?",
      "options": ["Michael Faraday", "Hans Christian Oersted", "James Clerk Maxwell", "André-Marie Ampère"],
      "answer": "Hans Christian Oersted",
      "explanation": "Hans Christian Oersted discovered electromagnetism in 1820 by observing the deflection of a compass needle near a current-carrying wire."
    },
    {
      "id": "m01_q07",
      "question": "What is the SI unit of magnetic field intensity (magnetic flux density)?",
      "options": ["Weber (Wb)", "Tesla (T)", "Ampere (A)", "Oersted (Oe)"],
      "answer": "Tesla (T)",
      "explanation": "The SI unit of magnetic field strength is the tesla (T), named after Nikola Tesla."
    },
    {
      "id": "m01_q08",
      "question": "Is the magnetic field a scalar quantity or a vector quantity, and why?",
      "options": [
        "Scalar, because it only has energy",
        "Vector, because it possesses both magnitude and direction at every point in space",
        "Dimensionless, because it has no units",
        "Variable scalar"
      ],
      "answer": "Vector, because it possesses both magnitude and direction at every point in space",
      "explanation": "Magnetic field is a vector quantity; its direction is defined by the orientation of the north pole of a compass needle."
    },
    {
      "id": "m01_q09",
      "question": "What is a magnetic compass needle essentially composed of?",
      "options": [
        "A piece of copper wire",
        "A tiny permanent bar magnet freely pivoted at its centre of gravity",
        "A coil carrying direct current",
        "A slice of lead crystal"
      ],
      "answer": "A tiny permanent bar magnet freely pivoted at its centre of gravity",
      "explanation": "A compass needle is a small permanent magnet whose north-seeking tip aligns with ambient magnetic field lines."
    },
    {
      "id": "m01_q10",
      "question": "What happens to the deflection of a compass needle placed below a horizontal wire when the direction of electric current in the wire is REVERSED?",
      "options": [
        "Deflection stops completely",
        "The needle deflects in the exact opposite direction",
        "The needle spins continuously at 100 rpm",
        "The needle demagnetizes instantly"
      ],
      "answer": "The needle deflects in the exact opposite direction",
      "explanation": "Reversing current reverses the direction of the concentric circular magnetic field, reversing the needle's deflection."
    }
  ]
}
modules_1_to_10.append(m01)

# ==========================================
# Module 2: Magnetic Field Lines
# ==========================================
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Magnetic Field Lines: Properties, Field Patterns & Non-Intersection Rule",
  "tagline": "Continuous closed loops, relative density as field strength, and why two lines never cross.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What are Magnetic Field Lines?</h4>
    <p><strong>Magnetic field lines</strong> are imaginary continuous lines drawn in a magnetic field along which an isolated imaginary north magnetic pole would move if free to do so. The tangent drawn to a magnetic field line at any point indicates the exact direction of the magnetic field vector ($\vec{B}$) at that point.</p>

    <h4>2. Fundamental Properties of Magnetic Field Lines</h4>
    <ol>
      <li><strong>Continuous Closed Loops:</strong>
        <ul>
          <li><strong>Outside the magnet:</strong> Field lines emerge from the <strong>North pole ($N$)</strong> and enter the <strong>South pole ($S$)</strong>.</li>
          <li><strong>Inside the magnet:</strong> Field lines travel from the <strong>South pole ($S$) back to the North pole ($N$)</strong>.</li>
          <li>Therefore, magnetic field lines form unbroken, <strong>continuous closed loops</strong>. (This contrasts with electrostatic field lines, which start on positive charges and end on negative charges).</li>
        </ul>
      </li>
      <li><strong>Relative Crowding (Degree of Closeness):</strong> The degree of closeness (crowding) of the field lines represents the relative strength of the magnetic field. Where lines are crowded (near the poles), the field is strong; where lines are widely spaced, the field is weak.</li>
      <li><strong>The Non-Intersection Rule:</strong> <strong>No two magnetic field lines can ever intersect or cross each other!</strong> If two lines crossed at a point $P$, a compass needle placed at that point would have to point simultaneously in two different directions at the same time—which is physically impossible.</li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "Outside a magnet, field lines run North to South; inside, they run South to North (forming continuous closed loops).",
    "Crowding of field lines indicates magnetic field strength (strongest at poles).",
    "No two magnetic field lines can ever intersect, because that would imply two distinct field directions at one point."
  ],
  "keyNotes": [
    "Magnetic field lines are continuous closed curves because isolated magnetic monopoles do not exist in nature; cutting a magnet always produces a pair of dipoles (N and S)."
  ],
  "questions": [
    get_bank_q(3, "m02_q01"),
    get_bank_q(4, "m02_q02"),
    get_bank_q(22, "m02_q03"),
    get_bank_q(51, "m02_q04"),
    {
      "id": "m02_q05",
      "question": "What is the direction of magnetic field lines OUTSIDE a bar magnet?",
      "options": [
        "From North pole to South pole",
        "From South pole to North pole",
        "Radially outward in all directions",
        "In concentric horizontal rings"
      ],
      "answer": "From North pole to South pole",
      "explanation": "Outside the body of a bar magnet, magnetic field lines emerge from the North pole and curve around to enter the South pole."
    },
    {
      "id": "m02_q06",
      "question": "What is the direction of magnetic field lines INSIDE a bar magnet?",
      "options": [
        "From North pole to South pole",
        "From South pole to North pole",
        "There are no field lines inside a magnet",
        "Perpendicular to the axis"
      ],
      "answer": "From South pole to North pole",
      "explanation": "Inside the magnet, field lines complete the continuous closed loop by travelling from the South pole back to the North pole."
    },
    {
      "id": "m02_q07",
      "question": "Why can two magnetic field lines NEVER intersect each other?",
      "options": [
        "Because magnetic lines repel each other with electrostatic charge",
        "Because at the point of intersection, a compass needle would point in two different directions simultaneously, which is impossible",
        "Because they travel at the speed of sound",
        "Because the magnetic field is a scalar quantity"
      ],
      "answer": "Because at the point of intersection, a compass needle would point in two different directions simultaneously, which is impossible",
      "explanation": "A unique point in a vector field can have only one resultant direction; intersection would imply two conflicting directions."
    },
    {
      "id": "m02_q08",
      "question": "Where is the magnetic field of a bar magnet the STRONGEST?",
      "options": [
        "Near the magnetic poles where the field lines are most crowded",
        "At the exact geometric centre of the magnet",
        "Far away at infinity",
        "Above the North pole only"
      ],
      "answer": "Near the magnetic poles where the field lines are most crowded",
      "explanation": "The density of field lines represents field intensity; lines are most densely packed near the magnetic poles."
    },
    {
      "id": "m02_q09",
      "question": "How can magnetic field lines around a bar magnet be made visually observable in a classroom laboratory?",
      "options": [
        "By sprinkling fine iron filings on a smooth cardboard sheet tapped gently over the magnet",
        "By shining green laser light through glass",
        "By heating the magnet over a Bunsen flame",
        "By placing the magnet in distilled water"
      ],
      "answer": "By sprinkling fine iron filings on a smooth cardboard sheet tapped gently over the magnet",
      "explanation": "Iron filings become magnetized by induction and align along magnetic field lines, creating visible patterns."
    },
    {
      "id": "m02_q10",
      "question": "What fundamental difference distinguishes magnetic field lines from electrostatic field lines?",
      "options": [
        "Magnetic lines form continuous closed loops, whereas electrostatic lines begin on positive charges and end on negative charges",
        "Electrostatic lines have no direction",
        "Magnetic lines can cross each other",
        "Magnetic lines only exist in vacuum"
      ],
      "answer": "Magnetic lines form continuous closed loops, whereas electrostatic lines begin on positive charges and end on negative charges",
      "explanation": "Because magnetic monopoles do not exist, magnetic field lines are unbroken continuous loops."
    }
  ]
}
modules_1_to_10.append(m02)

# ==========================================
# Module 3: Field Due to a Straight Conductor
# ==========================================
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Magnetic Field Due to a Straight Current-Carrying Conductor",
  "tagline": "Concentric circular field lines, dependence on current I (B ∝ I) and distance r (B ∝ 1/r).",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Field Pattern Around a Straight Conductor</h4>
    <p>When a straight, vertical copper wire carrying electric current passes perpendicularly through a horizontal cardboard sprinkled with iron filings, gentle tapping causes the filings to align in a stunning pattern of <strong>concentric circles centered on the wire</strong>.</p>

    <h4>2. Characteristics of the Magnetic Field Pattern</h4>
    <ul>
      <li>The magnetic field lines are <strong>concentric circles</strong> lying in planes perpendicular to the straight conductor.</li>
      <li>Near the wire, the concentric circles are closely spaced, indicating a strong magnetic field.</li>
      <li>As the radial distance ($r$) from the wire increases, the circles become progressively wider and more spaced apart, indicating that field strength diminishes with distance.</li>
    </ul>

    <h4>3. Mathematical Proportionality of the Magnetic Field ($B$)</h4>
    <p>The magnitude of the magnetic field ($B$) at any point produced by a straight current-carrying wire depends on two physical factors:</p>
    <ol>
      <li><strong>Directly proportional to the Current ($I$):</strong>
        $$B \propto I$$
        Increasing the current flowing through the wire proportionally intensifies the magnetic field.
      </li>
      <li><strong>Inversely proportional to the Distance ($r$):</strong>
        $$B \propto \frac{1}{r}$$
        Moving twice as far away from the wire halves the magnetic field strength.
      </li>
    </ol>
    <p>Combining both factors gives: $B \propto \frac{I}{r}$ (Biot-Savart Law / Ampère's Law: $B = \frac{\mu_0 I}{2\pi r}$).</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Magnetic field lines around a straight current-carrying wire are concentric circles centered on the wire.",
    "Field strength is directly proportional to current: $B \\propto I$.",
    "Field strength is inversely proportional to distance from the wire: $B \\propto 1/r$."
  ],
  "keyNotes": [
    "If the current through a straight wire is tripled and the distance from the wire is doubled, the new magnetic field is $B' = \\frac{3}{2} B = 1.5 B$."
  ],
  "questions": [
    get_bank_q(5, "m03_q01"),
    get_bank_q(10, "m03_q02"),
    get_bank_q(23, "m03_q03"),
    get_bank_q(52, "m03_q04"),
    {
      "id": "m03_q05",
      "question": "What is the geometric pattern of magnetic field lines produced around a long straight current-carrying conductor?",
      "options": [
        "Concentric circles centered on the wire in planes perpendicular to it",
        "Straight parallel lines radiating outward like sunbeams",
        "Helical spirals along the wire",
        "A single square loop"
      ],
      "answer": "Concentric circles centered on the wire in planes perpendicular to it",
      "explanation": "Field lines form closed concentric circles around the axis of the wire in planes perpendicular to the current."
    },
    {
      "id": "m03_q06",
      "question": "How does the magnitude of the magnetic field (B) produced by a straight current-carrying conductor change as the radial distance (r) from the wire INCREASES?",
      "options": [
        "It increases proportionally",
        "It decreases inversely (B ∝ 1/r)",
        "It remains strictly constant",
        "It increases exponentially"
      ],
      "answer": "It decreases inversely (B ∝ 1/r)",
      "explanation": "Magnetic field strength drops off inversely with perpendicular distance from the conductor (B ∝ 1/r)."
    },
    {
      "id": "m03_q07",
      "question": "If the electric current flowing through a straight wire is TRIPLED, what happens to the magnetic field strength at a fixed distance from the wire?",
      "options": ["It is halved", "It triples (3B)", "It increases by 9 times", "It remains unchanged"],
      "answer": "It triples (3B)",
      "explanation": "Because magnetic field strength is directly proportional to current (B ∝ I), tripling current triples field intensity."
    },
    {
      "id": "m03_q08",
      "question": "If the distance from a current-carrying straight wire is doubled, what happens to the magnetic field strength?",
      "options": ["It is halved (B/2)", "It doubles (2B)", "It drops to zero", "It quadruples (4B)"],
      "answer": "It is halved (B/2)",
      "explanation": "Since B ∝ 1/r, doubling distance (r' = 2r) halves the magnetic field strength (B' = B/2)."
    },
    {
      "id": "m03_q09",
      "question": "In which plane do the magnetic field lines of a vertical straight wire lie?",
      "options": [
        "In horizontal planes perpendicular to the wire",
        "In vertical planes parallel to the wire",
        "Along the wire inside the copper",
        "At 45° to the horizon"
      ],
      "answer": "In horizontal planes perpendicular to the wire",
      "explanation": "The concentric field circles lie entirely in planes perpendicular to the conductor's direction of current flow."
    },
    {
      "id": "m03_q10",
      "question": "Which of the following equations correctly represents the relationship between magnetic field B, current I, and distance r for a straight wire?",
      "options": ["B ∝ I / r", "B ∝ r / I", "B ∝ I × r", "B ∝ 1 / (I × r)"],
      "answer": "B ∝ I / r",
      "explanation": "Magnetic field is directly proportional to current I and inversely proportional to distance r: B ∝ I/r."
    }
  ]
}
modules_1_to_10.append(m03)

# ==========================================
# Module 4: Right-Hand Thumb Rule
# ==========================================
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Right-Hand Thumb Rule (Maxwell's Corkscrew Rule)",
  "tagline": "Determining circular field direction, curled fingers rule, and clockwise vs anticlockwise field.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Right-Hand Thumb Rule</h4>
    <p>To determine the direction of the magnetic field lines produced by a current-carrying conductor, we use a simple and elegant mnemonic called the <strong>Right-Hand Thumb Rule</strong>:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "Imagine that you are grasping a current-carrying straight conductor in your RIGHT hand such that your outstretched thumb points in the direction of the electric current. Then, the direction in which your fingers curl naturally around the conductor gives the direction of the magnetic field lines."
    </blockquote>

    <h4>2. Vertical Conductor Conventions</h4>
    <ul>
      <li><strong>Current Flowing Vertically UPWARDS:</strong> Looking down from above, the curled fingers circle in an <strong>ANTI-CLOCKWISE (counter-clockwise)</strong> direction.</li>
      <li><strong>Current Flowing Vertically DOWNWARDS:</strong> Looking down from above, the curled fingers circle in a <strong>CLOCKWISE</strong> direction.</li>
    </ul>

    <h4>3. Maxwell's Corkscrew Rule</h4>
    <p>An alternative representation is <strong>Maxwell's Corkscrew Rule</strong>: If we consider a standard right-handed corkscrew being driven forward in the direction of current, the direction in which the handle of the corkscrew must be rotated gives the direction of the magnetic field lines.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Right-Hand Thumb Rule: Outstretched thumb indicates current; curled fingers indicate magnetic field direction.",
    "Upward current $\\rightarrow$ Anti-clockwise field lines (viewed from top).",
    "Downward current $\\rightarrow$ Clockwise field lines (viewed from top)."
  ],
  "keyNotes": [
    "Always use your RIGHT hand! Grasping with your left hand will give the exact opposite (wrong) magnetic field direction."
  ],
  "questions": [
    get_bank_q(6, "m04_q01"),
    get_bank_q(7, "m04_q02"),
    get_bank_q(24, "m04_q03"),
    get_bank_q(53, "m04_q04"),
    {
      "id": "m04_q05",
      "question": "Which rule is used to determine the DIRECTION of magnetic field lines around a straight current-carrying wire?",
      "options": [
        "Right-Hand Thumb Rule",
        "Fleming's Left-Hand Rule",
        "Fleming's Right-Hand Rule",
        "Snell's Law"
      ],
      "answer": "Right-Hand Thumb Rule",
      "explanation": "The Right-Hand Thumb Rule (or Maxwell's Corkscrew Rule) provides the circular magnetic field direction around a current."
    },
    {
      "id": "m04_q06",
      "question": "In a vertical straight conductor carrying electric current directed vertically UPWARDS, what is the direction of the magnetic field lines when viewed from above?",
      "options": ["Clockwise", "Anti-clockwise (counter-clockwise)", "Towards the North only", "Radially inward"],
      "answer": "Anti-clockwise (counter-clockwise)",
      "explanation": "With the right thumb pointing upwards, the fingers curl in an anti-clockwise direction when viewed from above."
    },
    {
      "id": "m04_q07",
      "question": "In a vertical wire carrying current directed vertically DOWNWARDS, what is the direction of the magnetic field lines when viewed from above?",
      "options": ["Clockwise", "Anti-clockwise", "Vertical", "Zero"],
      "answer": "Clockwise",
      "explanation": "With the right thumb pointing downwards, the fingers curl in a clockwise direction when viewed from above."
    },
    {
      "id": "m04_q08",
      "question": "An electric current is flowing through a horizontal power line from East to West. What is the direction of the magnetic field at a point directly BELOW the wire?",
      "options": ["Towards North", "Towards South", "Towards East", "Towards West"],
      "answer": "Towards South",
      "explanation": "Pointing the right thumb West, curled fingers underneath the wire point towards the South."
    },
    {
      "id": "m04_q09",
      "question": "What is the alternative physical rule that describes the same field direction as the Right-Hand Thumb Rule using a right-handed screw?",
      "options": ["Maxwell's Corkscrew Rule", "Ampère's Swimming Rule", "Faraday's Cage Rule", "Newton's Screw Rule"],
      "answer": "Maxwell's Corkscrew Rule",
      "explanation": "Driving a right-handed corkscrew in the direction of current requires rotating it in the direction of the magnetic field."
    },
    {
      "id": "m04_q10",
      "question": "If an observer uses their LEFT hand instead of their right hand for the thumb rule, what error occurs?",
      "options": [
        "The calculated magnitude is doubled",
        "The deduced direction of the magnetic field will be exactly reversed (180° wrong)",
        "The current reverses",
        "No error occurs"
      ],
      "answer": "The deduced direction of the magnetic field will be exactly reversed (180° wrong)",
      "explanation": "Using the left hand reverses the curl direction, giving the diametrically opposite direction."
    }
  ]
}
modules_1_to_10.append(m04)

# ==========================================
# Module 5: Field Due to a Circular Loop
# ==========================================
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Magnetic Field Due to a Current through a Circular Loop",
  "tagline": "Superposition of field lines, straight lines at the centre, and the Clock Face Rule.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Bending a Straight Conductor into a Circular Loop</h4>
    <p>Imagine bending a straight current-carrying wire into a circular loop. At every tiny segment of the circular wire, the magnetic field consists of concentric circles centered on that wire segment.</p>

    <h4>2. Evolution of Field Pattern towards the Centre</h4>
    <ul>
      <li>Near the circular wire rim, the magnetic field lines appear as tight concentric circles.</li>
      <li>As we move inward towards the centre of the loop, the circles grow increasingly large.</li>
      <li>At the <strong>exact centre of the circular loop</strong>, the arcs of these colossal circles become so vast that they appear as <strong>straight, parallel lines perpendicular to the plane of the coil</strong>.</li>
      <li>Because current flows in opposite directions on opposite sides of the loop, the field contributions from every infinitesimal segment of the wire <strong>add up constructively in the same direction</strong> inside the loop.</li>
    </ul>

    <h4>3. Field Enhancement with Multiple Turns ($N$)</h4>
    <p>If a coil has $N$ circular turns wound closely together, the magnetic field produced is <strong>$N$ times as large</strong> as that produced by a single turn ($B \propto N \cdot I$). This occurs because the current in each turn has the same direction and their magnetic fields add together constructively.</p>

    <h4>4. The Clock Face Rule for Magnetic Polarity</h4>
    <p>Looking face-on at one side of a circular current-carrying coil:</p>
    <ul>
      <li>If current flows in a <strong>CLOCKWISE</strong> direction $\rightarrow$ that face behaves as a <strong>SOUTH pole ($S$)</strong>.</li>
      <li>If current flows in an <strong>ANTI-CLOCKWISE</strong> direction $\rightarrow$ that face behaves as a <strong>NORTH pole ($N$)</strong>.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Field lines at the centre of a circular current loop are uniform, straight, and perpendicular to the loop's plane.",
    "A coil of $N$ turns produces a field $N$ times stronger than a single turn: $B \\propto N \\cdot I$.",
    "Clock Face Rule: Clockwise current = South pole ($S$); Anti-clockwise current = North pole ($N$)."
  ],
  "keyNotes": [
    "Every current-carrying circular loop acts as an ultra-thin magnetic dipole having a North face on one side and a South face on the opposite side."
  ],
  "questions": [
    get_bank_q(8, "m05_q01"),
    get_bank_q(9, "m05_q02"),
    get_bank_q(25, "m05_q03"),
    get_bank_q(54, "m05_q04"),
    {
      "id": "m05_q05",
      "question": "What is the shape of the magnetic field lines at the EXACT CENTRE of a current-carrying circular loop?",
      "options": [
        "Concentric circles",
        "Straight and parallel lines perpendicular to the plane of the coil",
        "Helical zigzags",
        "A figure-8 loop"
      ],
      "answer": "Straight and parallel lines perpendicular to the plane of the coil",
      "explanation": "At the centre of the loop, the vast circular field arcs merge and appear as straight, parallel lines perpendicular to the loop plane."
    },
    {
      "id": "m05_q06",
      "question": "If a circular coil of wire has N turns wound closely together, how does its magnetic field compare to that of a single turn carrying the same current?",
      "options": [
        "It is N times as strong",
        "It is N^2 times weaker",
        "It is identical to a single turn",
        "It cancels out to zero"
      ],
      "answer": "It is N times as strong",
      "explanation": "Because current flows in the same direction in each turn, the magnetic fields of all N turns add up constructively: B ∝ N·I."
    },
    {
      "id": "m05_q07",
      "question": "According to the Clock Face Rule, if the current in a circular loop appears to flow in a CLOCKWISE direction to an observer, which magnetic pole does that face represent?",
      "options": ["North pole (N)", "South pole (S)", "Neither pole", "Both poles simultaneously"],
      "answer": "South pole (S)",
      "explanation": "Clockwise current corresponds to a South magnetic pole (the letter S has arrows pointing clockwise at its ends)."
    },
    {
      "id": "m05_q08",
      "question": "According to the Clock Face Rule, if the current in a circular loop appears to flow in an ANTI-CLOCKWISE direction, which magnetic pole does that face represent?",
      "options": ["South pole (S)", "North pole (N)", "Earth pole", "Zero pole"],
      "answer": "North pole (N)",
      "explanation": "Anti-clockwise current corresponds to a North magnetic pole (the letter N has arrows pointing anti-clockwise at its tips)."
    },
    {
      "id": "m05_q09",
      "question": "If a circular loop is lying horizontally on a tabletop and carrying an anti-clockwise current when viewed from above, what is the direction of the magnetic field at the centre of the loop?",
      "options": [
        "Vertically upwards (pointing out of the table)",
        "Vertically downwards (pointing into the table)",
        "Horizontally towards the East",
        "Horizontally towards the South"
      ],
      "answer": "Vertically upwards (pointing out of the table)",
      "explanation": "By the right-hand rule, curling fingers anti-clockwise causes the outstretched thumb to point vertically upwards out of the table."
    },
    {
      "id": "m05_q10",
      "question": "How does increasing the radius (R) of a circular loop carrying constant current affect the magnetic field strength at its centre?",
      "options": [
        "Field strength increases",
        "Field strength decreases inversely with radius (B ∝ 1/R)",
        "Field strength remains constant",
        "Field strength drops to zero instantly"
      ],
      "answer": "Field strength decreases inversely with radius (B ∝ 1/R)",
      "explanation": "At the centre of a circular loop, B = μ0 I / (2R); a larger radius places the wire segments farther from the centre, reducing field strength."
    }
  ]
}
modules_1_to_10.append(m05)

# ==========================================
# Module 6: Magnetic Field in a Solenoid
# ==========================================
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "Magnetic Field in a Solenoid: Uniform Internal Field & Bar Magnet Equivalence",
  "tagline": "Helical coil, uniform parallel interior field lines, and equivalence to a bar magnet.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is a Solenoid?</h4>
    <p>A <strong>solenoid</strong> is a long coil consisting of many closely wound turns of insulated copper wire wrapped in the shape of a cylinder.</p>

    <h4>2. The Magnetic Field Pattern of a Solenoid</h4>
    <p>When an electric current is passed through a solenoid, it produces a magnetic field pattern that is <strong>remarkably identical to that of a permanent bar magnet</strong>:</p>
    <ul>
      <li>One end of the solenoid behaves as a magnetic <strong>North pole ($N$)</strong>, while the opposite end behaves as a magnetic <strong>South pole ($S$)</strong>.</li>
      <li>Outside the solenoid, field lines emerge from the North pole and curve around to enter the South pole.</li>
      <li><strong>Inside the Solenoid:</strong> The magnetic field lines are <strong>parallel straight lines</strong> running along the longitudinal axis from South to North.</li>
    </ul>

    <h4>3. Uniformity of the Internal Field</h4>
    <p>Because the field lines inside the core of a solenoid are perfectly straight, equidistant, and parallel to each other, this proves that the <strong>magnetic field is completely UNIFORM</strong> (has the exact same magnitude and direction at every point inside the solenoid).</p>

    <h4>4. Factors Determining Internal Magnetic Field Strength ($B$)</h4>
    $$B = \mu_0 \cdot n \cdot I$$
    <ul>
      <li>Directly proportional to the <strong>number of turns per unit length ($n = N/L$)</strong>.</li>
      <li>Directly proportional to the <strong>current magnitude ($I$)</strong>.</li>
      <li>Directly dependent on the <strong>core material</strong> inserted inside (permeability $\mu$).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "A solenoid's magnetic field pattern is identical to that of a bar magnet.",
    "Inside a solenoid, field lines are straight parallel lines, indicating a UNIFORM magnetic field.",
    "Internal field strength depends on turns per unit length ($n$), current ($I$), and core material."
  ],
  "keyNotes": [
    "A uniform magnetic field is graphically represented by a set of equidistant, parallel straight lines with arrows pointing in the same direction."
  ],
  "questions": [
    get_bank_q(11, "m06_q01"),
    get_bank_q(12, "m06_q02"),
    get_bank_q(26, "m06_q03"),
    get_bank_q(55, "m06_q04"),
    {
      "id": "m06_q05",
      "question": "What is the nature of the magnetic field inside a long current-carrying cylindrical solenoid?",
      "options": [
        "Zero at all points",
        "Uniform (same magnitude and direction at all points, represented by parallel straight lines)",
        "Increases as you move towards the ends",
        "Circular around the central axis"
      ],
      "answer": "Uniform (same magnitude and direction at all points, represented by parallel straight lines)",
      "explanation": "Field lines inside a solenoid are parallel and equidistant, demonstrating a completely uniform internal magnetic field."
    },
    {
      "id": "m06_q06",
      "question": "The magnetic field pattern produced by a current-carrying solenoid is virtually identical to that of which permanent magnet?",
      "options": ["Horseshoe magnet", "Bar magnet", "Ring magnet", "Spherical ball magnet"],
      "answer": "Bar magnet",
      "explanation": "A solenoid acts as an artificial bar magnet, having a North pole at one end, South at the other, and identical external loops."
    },
    {
      "id": "m06_q07",
      "question": "What does a region of parallel, equidistant straight magnetic field lines indicate about the magnetic field?",
      "options": [
        "The field is non-uniform",
        "The field is uniform",
        "The field is changing rapidly with time",
        "The field has zero strength"
      ],
      "answer": "The field is uniform",
      "explanation": "Equidistant, parallel straight lines graphically represent a uniform vector field of constant magnitude and direction."
    },
    {
      "id": "m06_q08",
      "question": "How can the strength of the magnetic field inside a solenoid be substantially increased?",
      "options": [
        "By inserting a soft iron rod inside the core and increasing the number of turns and current",
        "By replacing copper wire with plastic wire",
        "By dipping the solenoid in oil",
        "By uncoiling the wire into a straight line"
      ],
      "answer": "By inserting a soft iron rod inside the core and increasing the number of turns and current",
      "explanation": "Field strength B = μ n I increases with higher turns per unit length (n), higher current (I), and high permeability core (soft iron)."
    },
    {
      "id": "m06_q09",
      "question": "What is a solenoid?",
      "options": [
        "A long cylindrical coil of many closely spaced turns of insulated copper wire",
        "A straight single copper wire",
        "A permanent iron bar without wire",
        "A chemical battery"
      ],
      "answer": "A long cylindrical coil of many closely spaced turns of insulated copper wire",
      "explanation": "By definition, a solenoid is an insulated wire tightly wound into a helical cylindrical coil."
    },
    {
      "id": "m06_q10",
      "question": "If the direction of electric current in a solenoid is reversed, what happens to its magnetic poles?",
      "options": [
        "The poles disappear permanently",
        "The polarity reverses (the North pole becomes South, and South becomes North)",
        "Both ends become North poles",
        "The field strength drops to zero"
      ],
      "answer": "The polarity reverses (the North pole becomes South, and South becomes North)",
      "explanation": "Reversing current reverses the circulatory curl direction, inverting the magnetic dipoles and swapping N and S poles."
    }
  ]
}
modules_1_to_10.append(m06)

# ==========================================
# Module 7: Electromagnets & Soft Iron Core
# ==========================================
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Electromagnets: The Role of Soft Iron Core & Temporary Magnetization",
  "tagline": "High magnetic permeability, instantaneous magnetization, and zero retentivity.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is an Electromagnet?</h4>
    <p>A strong magnetic field produced inside a current-carrying solenoid can be harnessed to magnetize a magnetic material placed inside the coil. A temporary magnet formed by placing a rod of <strong>soft iron</strong> inside a current-carrying solenoid is called an <strong>electromagnet</strong>.</p>

    <h4>2. Why Soft Iron is the Ideal Core Material</h4>
    <p>Soft iron is exclusively chosen as the core material for electromagnets because of two unique ferromagnetic properties:</p>
    <ol>
      <li><strong>High Magnetic Permeability:</strong> Soft iron concentrates magnetic field lines immensely, multiplying the magnetic field strength of the solenoid by several thousand times.</li>
      <li><strong>Low Retentivity (Zero Residual Magnetism):</strong> Soft iron is a <strong>temporary magnetic material</strong>. It magnetizes instantly when current is switched on, and <strong>loses all its magnetism immediately when current is switched off</strong>.</li>
    </ol>

    <h4>3. Controlling the Strength of an Electromagnet</h4>
    <p>Unlike permanent magnets whose strength is unalterable, an electromagnet's magnetic strength can be dynamically adjusted:</p>
    <ul>
      <li>By increasing the electric current ($I$) using a rheostat.</li>
      <li>By increasing the number of turns ($N$) in the solenoid coil.</li>
      <li>By minimizing the air gap in its core geometry (e.g., U-shaped horseshoe electromagnets).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "An electromagnet is a solenoid wrapped around a soft iron core.",
    "Soft iron magnetizes easily and loses its magnetism completely when current is cut off (low retentivity).",
    "Strength can be varied at will by altering current, turn count, or coil geometry."
  ],
  "keyNotes": [
    "Electromagnets are temporary magnets; switching off the electric switch immediately drops their magnetic attraction to zero, enabling scrap cranes to release heavy steel plates effortlessly."
  ],
  "questions": [
    get_bank_q(13, "m07_q01"),
    get_bank_q(14, "m07_q02"),
    get_bank_q(27, "m07_q03"),
    get_bank_q(56, "m07_q04"),
    {
      "id": "m07_q05",
      "question": "What material is placed inside a solenoid to create a powerful TEMPORARY electromagnet?",
      "options": ["Soft iron rod", "Hardened steel bar", "Alnico alloy", "Pure copper tube"],
      "answer": "Soft iron rod",
      "explanation": "Soft iron has high permeability and low retentivity, magnetizing strongly under current and demagnetizing instantly when turned off."
    },
    {
      "id": "m07_q06",
      "question": "Why is soft iron described as having 'low retentivity'?",
      "options": [
        "It retains all its magnetism forever",
        "It loses virtually all its residual magnetism immediately when the magnetizing electric current is switched off",
        "It cannot be magnetized",
        "It melts at room temperature"
      ],
      "answer": "It loses virtually all its residual magnetism immediately when the magnetizing electric current is switched off",
      "explanation": "Low retentivity means the material cannot retain residual magnetism once the external magnetic field ceases."
    },
    {
      "id": "m07_q07",
      "question": "Which of the following methods will INCREASE the magnetic strength of an electromagnet?",
      "options": [
        "Decreasing the current flowing in the coil",
        "Increasing the number of turns per unit length and increasing the current",
        "Removing the soft iron core",
        "Heating the core to red heat"
      ],
      "answer": "Increasing the number of turns per unit length and increasing the current",
      "explanation": "Field strength B ∝ n·I; increasing turns and current intensifies the magnetic field."
    },
    {
      "id": "m07_q08",
      "question": "Which of the following devices relies directly on an electromagnet for its operation?",
      "options": ["Electric bell and relay switch", "Plane mirror", "Dry cell battery", "Mercury thermometer"],
      "answer": "Electric bell and relay switch",
      "explanation": "Electric bells, relays, magnetic locks, and scrapyard lifting cranes utilize electromagnets that rapidly cycle on and off."
    },
    {
      "id": "m07_q09",
      "question": "What would happen if a scrap crane used a PERMANENT magnet instead of an electromagnet to lift junk cars?",
      "options": [
        "The crane could not pick up the cars",
        "The crane could lift the cars, but would be unable to release or drop them because the magnet cannot be switched off",
        "The cars would turn into gold",
        "The crane would catch fire"
      ],
      "answer": "The crane could lift the cars, but would be unable to release or drop them because the magnet cannot be switched off",
      "explanation": "Permanent magnets cannot be de-energized; an electromagnet can drop loads instantly by opening the electrical switch."
    },
    {
      "id": "m07_q10",
      "question": "Can the polarity (North and South poles) of an electromagnet be reversed?",
      "options": [
        "No, polarity is permanently fixed during manufacturing",
        "Yes, simply by reversing the direction of electric current flowing through the solenoid coil",
        "Only by striking it with a hammer",
        "Only in vacuum"
      ],
      "answer": "Yes, simply by reversing the direction of electric current flowing through the solenoid coil",
      "explanation": "Inverting current flow reverses the magnetic field direction, instantly swapping the North and South poles."
    }
  ]
}
modules_1_to_10.append(m07)

# ==========================================
# Module 8: Electromagnets vs Permanent Magnets
# ==========================================
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Electromagnets vs Permanent Magnets: Core Materials & Applications",
  "tagline": "Soft iron vs Steel/Alnico, controllable vs fixed strength, and industrial applications.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Permanent Magnets: High Retentivity Materials</h4>
    <p>A <strong>permanent magnet</strong> is a magnet made of a ferromagnetic material that retains its magnetic properties for a prolonged duration without requiring an external electric current. Permanent magnets are manufactured from alloys having <strong>high retentivity and high coercivity</strong>:</p>
    <ul>
      <li><strong>Carbon Steel / Chromium Steel</strong></li>
      <li><strong>Alnico:</strong> An alloy of Aluminium ($Al$), Nickel ($Ni$), and Cobalt ($Co$).</li>
      <li><strong>Neodymium (NdFeB):</strong> Modern rare-earth supermagnets.</li>
    </ul>

    <h4>2. Systematic Comparison</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Characteristic</th><th>Electromagnet (Temporary)</th><th>Permanent Magnet</th></tr></thead>
      <tbody>
        <tr><td><strong>Magnetism Nature</strong></td><td>Temporary; exists only while current flows</td><td>Permanent; persists indefinitely</td></tr>
        <tr><td><strong>Core Material</strong></td><td>Soft Iron (Low retentivity)</td><td>Steel, Alnico, NdFeB (High retentivity)</td></tr>
        <tr><td><strong>Magnetic Strength</strong></td><td>Easily varied by changing current or turns</td><td>Fixed; cannot be varied easily</td></tr>
        <tr><td><strong>Polarity</strong></td><td>Can be reversed by reversing current direction</td><td>Fixed; North and South poles cannot be swapped</td></tr>
        <tr><td><strong>Applications</strong></td><td>Electric bells, cranes, MRI scanners, relays</td><td>Loudspeakers, galvanometers, compasses</td></tr>
      </tbody>
    </table>
  </div>
</div>
""",
  "pointsToRemember": [
    "Electromagnets are temporary (soft iron core); Permanent magnets retain magnetism permanently (steel, alnico).",
    "Electromagnet strength and polarity can be dynamically controlled; permanent magnet properties are fixed.",
    "Alnico (Al-Ni-Co) and carbon steel are used to manufacture permanent magnets."
  ],
  "keyNotes": [
    "If steel is placed inside a solenoid, it magnetizes slowly but retains its magnetism permanently even after current is turned off, forming a permanent magnet."
  ],
  "questions": [
    get_bank_q(15, "m08_q01"),
    get_bank_q(40, "m08_q02"),
    get_bank_q(28, "m08_q03"),
    get_bank_q(57, "m08_q04"),
    {
      "id": "m08_q05",
      "question": "Which of the following materials is PERMANENTLY magnetized to manufacture strong permanent magnets?",
      "options": ["Soft iron", "Alnico (Aluminium-Nickel-Cobalt alloy) or Carbon Steel", "Pure copper", "Lead"],
      "answer": "Alnico (Aluminium-Nickel-Cobalt alloy) or Carbon Steel",
      "explanation": "Alnico and hardened carbon steel have high retentivity and coercivity, retaining strong magnetism permanently."
    },
    {
      "id": "m08_q06",
      "question": "What happens if a steel bar is placed inside a current-carrying solenoid for several minutes and the current is then switched off?",
      "options": [
        "The steel loses all magnetism immediately",
        "The steel retains its magnetism and becomes a permanent bar magnet",
        "The steel melts into liquid",
        "The steel explodes"
      ],
      "answer": "The steel retains its magnetism and becomes a permanent bar magnet",
      "explanation": "Steel has high retentivity; once aligned by the solenoid field, its magnetic domains stay locked, forming a permanent magnet."
    },
    {
      "id": "m08_q07",
      "question": "What is a major operational advantage of an electromagnet over a permanent magnet?",
      "options": [
        "It produces zero magnetic lines",
        "Its magnetic strength can be varied by adjusting current, and its polarity can be reversed at will",
        "It does not require any electric power",
        "It never heats up"
      ],
      "answer": "Its magnetic strength can be varied by adjusting current, and its polarity can be reversed at will",
      "explanation": "Electromagnets offer complete dynamic control over on/off states, field strength, and polarity."
    },
    {
      "id": "m08_q08",
      "question": "Which of the following devices relies on a PERMANENT magnet rather than an electromagnet?",
      "options": ["Magnetic compass needle and loudspeaker", "Scrap crane", "Electric bell", "Circuit breaker relay"],
      "answer": "Magnetic compass needle and loudspeaker",
      "explanation": "Compasses and audio speaker drivers rely on permanent magnets that maintain fixed, steady magnetic fields."
    },
    {
      "id": "m08_q09",
      "question": "What is the primary composition of the alloy 'Alnico'?",
      "options": [
        "Aluminium, Nickel, and Cobalt",
        "Aluminium, Nitrogen, and Carbon",
        "Silver, Nickel, and Copper",
        "Lead, Tin, and Zinc"
      ],
      "answer": "Aluminium, Nickel, and Cobalt",
      "explanation": "Alnico is a ferromagnetic alloy composed predominantly of Aluminium (Al), Nickel (Ni), and Cobalt (Co)."
    },
    {
      "id": "m08_q10",
      "question": "Why is soft iron NOT used to make permanent magnets?",
      "options": [
        "Because it is too heavy",
        "Because its low retentivity causes it to lose its magnetism as soon as the external field is removed",
        "Because it does not conduct electricity",
        "Because it dissolves in air"
      ],
      "answer": "Because its low retentivity causes it to lose its magnetism as soon as the external field is removed",
      "explanation": "Soft iron easily loses its magnetic domain alignment, making it unsuitable for permanent magnets."
    }
  ]
}
modules_1_to_10.append(m08)

# ==========================================
# Module 9: Force on a Current-Carrying Conductor
# ==========================================
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Force on a Current-Carrying Conductor in a Magnetic Field",
  "tagline": "Ampere's hypothesis of mutual force, Lorentz magnetic force (F = BIl sin θ), and maximum force condition.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. André-Marie Ampère's Hypothesis (1820)</h4>
    <p>Following Oersted's discovery that a current-carrying wire exerts a mechanical deflecting force on a magnetic compass needle, French physicist André-Marie Ampère reasoned by Newton's third law of motion: <em>If a current-carrying conductor exerts a force on a magnet, the magnet MUST exert an equal and opposite mechanical force on the current-carrying conductor!</em></p>

    <h4>2. The Kicking Wire Experiment</h4>
    <p>A flexible aluminium rod suspended horizontally between the poles of a strong U-shaped horseshoe magnet is connected in an electrical circuit:</p>
    <ul>
      <li>When current is switched on, the aluminium rod is visibly <strong>thrust (kicked) sideways out of the magnetic gap</strong>.</li>
      <li>Reversing the direction of current reverses the direction of the mechanical displacement.</li>
      <li>Inverting the magnetic poles (swapping North and South) also reverses the displacement direction.</li>
    </ul>

    <h4>3. The Magnitude of the Magnetic Force ($F$)</h4>
    <p>The magnetic force ($F$) exerted on a conductor of length $l$ carrying current $I$ immersed in a uniform magnetic field $B$ is given by:</p>
    $$\mathbf{F = B \cdot I \cdot l \cdot \sin\theta}$$
    <p>Where $\theta$ is the angle between the conductor (current direction) and the magnetic field lines:</p>
    <ul>
      <li><strong>Maximum Force ($\theta = 90^\circ$):</strong> When the conductor is placed <strong>perpendicular to the magnetic field</strong> ($\sin 90^\circ = 1$):
        $$\mathbf{F_\text{max} = B \cdot I \cdot l}$$
      </li>
      <li><strong>Zero Force ($\theta = 0^\circ\text{ or }180^\circ$):</strong> When the conductor is placed <strong>parallel or anti-parallel to the magnetic field</strong> ($\sin 0^\circ = 0$):
        $$\mathbf{F = 0}$$
      </li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "A current-carrying conductor in a magnetic field experiences a mechanical deflecting force.",
    "Force equation: $F = BIl\\sin\\theta$.",
    "Maximum force occurs when conductor is PERPENDICULAR to the field ($\\theta = 90^\\circ$); ZERO force occurs when PARALLEL ($\\theta = 0^\\circ$)."
  ],
  "keyNotes": [
    "If an electron or proton moves parallel to magnetic field lines, it experiences ZERO magnetic force ($F = 0$) and continues in a straight path with undeflected velocity."
  ],
  "questions": [
    get_bank_q(16, "m09_q01"),
    get_bank_q(17, "m09_q02"),
    get_bank_q(20, "m09_q03"),
    get_bank_q(58, "m09_q04"),
    {
      "id": "m09_q05",
      "question": "Under what condition is the mechanical force experienced by a current-carrying conductor in a magnetic field MAXIMUM?",
      "options": [
        "When the conductor is parallel to the magnetic field (θ = 0°)",
        "When the conductor is perpendicular to the direction of the magnetic field (θ = 90°)",
        "When the conductor is placed at 45°",
        "When current is zero"
      ],
      "answer": "When the conductor is perpendicular to the direction of the magnetic field (θ = 90°)",
      "explanation": "Since F = BIl sin θ, maximum force occurs when sin θ = 1, which corresponds to θ = 90° (perpendicular alignment)."
    },
    {
      "id": "m09_q06",
      "question": "What is the force on a current-carrying wire placed PARALLEL to the direction of a uniform magnetic field?",
      "options": ["Maximum", "Zero (F = 0)", "BIl", "Infinite"],
      "answer": "Zero (F = 0)",
      "explanation": "When parallel, θ = 0°, so sin 0° = 0, which yields F = BIl sin 0° = 0."
    },
    {
      "id": "m09_q07",
      "question": "A positively charged alpha particle projected towards the West is deflected towards the North by a magnetic field. What is the direction of the magnetic field?",
      "options": ["Towards the South", "Towards the East", "Downward towards Earth", "Upward out of the plane"],
      "answer": "Upward out of the plane",
      "explanation": "Applying Fleming's left-hand rule: Forefinger (Field) = Upward, Centre finger (Current West) = West, Thumb (Force North) = North."
    },
    {
      "id": "m09_q08",
      "question": "Who first hypothesized that a magnet must exert an equal and opposite mechanical force on a current-carrying wire?",
      "options": ["André-Marie Ampère", "Hans Christian Oersted", "Michael Faraday", "Isaac Newton"],
      "answer": "André-Marie Ampère",
      "explanation": "Ampère reasoned from Newton's third law that if current deflects a magnet, the magnet must exert a reciprocal force on the conductor."
    },
    {
      "id": "m09_q09",
      "question": "If an electron enters a uniform magnetic field directed from left to right along a path that is PARALLEL to the field lines, what happens to its trajectory?",
      "options": [
        "It curves in a circle",
        "It experiences zero force and continues to travel straight in its original direction",
        "It stops dead in its tracks",
        "It bounces back"
      ],
      "answer": "It experiences zero force and continues to travel straight in its original direction",
      "explanation": "Because θ = 0°, magnetic Lorentz force F = qvB sin 0° = 0, so the electron continues undeflected in a straight line."
    },
    {
      "id": "m09_q10",
      "question": "Which of the following factors does NOT determine the magnitude of the force on a straight conductor in a magnetic field?",
      "options": [
        "Magnetic field strength B",
        "Current I",
        "Color of the wire's plastic insulation",
        "Length of conductor l inside the field"
      ],
      "answer": "Color of the wire's plastic insulation",
      "explanation": "Force depends solely on B, I, l, and angle θ (F = BIl sin θ); insulation color has zero physical effect."
    }
  ]
}
modules_1_to_10.append(m09)

# ==========================================
# Module 10: Fleming's Left-Hand Rule
# ==========================================
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Fleming's Left-Hand Rule: The Motor Rule (Thrust, Field, Current)",
  "tagline": "Three mutually perpendicular fingers: Thumb = Force/Motion, Forefinger = Field, Centre finger = Current.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Fleming's Left-Hand Rule (The Motor Rule)</h4>
    <p>To determine the direction of the mechanical force (thrust) exerted on a current-carrying conductor placed inside an external magnetic field, John Ambrose Fleming formulated <strong>Fleming's Left-Hand Rule</strong>:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "Stretch the thumb, forefinger, and centre (middle) finger of your LEFT hand mutually perpendicular to each other. If the forefinger points in the direction of the magnetic field and the centre finger in the direction of electric current, then the thumb will point in the direction of motion or the mechanical force (thrust) acting on the conductor."
    </blockquote>

    <h4>2. The FBI Mnemonic</h4>
    <p>An easy way to remember the mapping of the three perpendicular fingers of the LEFT hand:</p>
    <ul>
      <li><strong>Thumb ($\mathbf{F}$):</strong> Force / Thrust / Motion ($\mathbf{F}\text{BI}$)</li>
      <li><strong>Forefinger ($\mathbf{B}$):</strong> Magnetic Field ($\text{F}\mathbf{B}\text{I}$)</li>
      <li><strong>Centre Finger ($\mathbf{I}$):</strong> Electric Current ($\text{FB}\mathbf{I}$)</li>
    </ul>

    <h4>3. Primary Applications of Fleming's Left-Hand Rule</h4>
    <p>This rule governs all electromagnetic devices where electrical energy is converted into mechanical motion:</p>
    <ul>
      <li><strong>Electric Motors</strong> (ceiling fans, washing machines, electric vehicles)</li>
      <li><strong>Moving-Coil Loudspeakers</strong> (converts electrical audio signals into cone vibration)</li>
      <li><strong>Galvanometers & Ammeters</strong> (pointer deflection against a spring)</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Fleming's Left-Hand Rule is the 'Motor Rule': converts electrical current into mechanical motion.",
    "FBI Mnemonic: Thumb = Force ($F$), Forefinger = Field ($B$), Centre finger = Current ($I$).",
    "All three fingers must be held mutually perpendicular ($90^\\circ$ to each other)."
  ],
  "keyNotes": [
    "For moving charged particles: the direction of current ($I$) is along the motion of positive charges (protons/alpha particles), but OPPOSITE to the motion of negative charges (electrons)!"
  ],
  "questions": [
    get_bank_q(18, "m10_q01"),
    get_bank_q(19, "m10_q02"),
    get_bank_q(29, "m10_q03"),
    get_bank_q(59, "m10_q04"),
    {
      "id": "m10_q05",
      "question": "In Fleming's Left-Hand Rule, which finger represents the direction of the MAGNETIC FIELD?",
      "options": ["Thumb", "Forefinger (Index finger)", "Centre (Middle) finger", "Little finger"],
      "answer": "Forefinger (Index finger)",
      "explanation": "By Fleming's Left-Hand Rule, the forefinger represents the direction of the magnetic field (B)."
    },
    {
      "id": "m10_q06",
      "question": "In Fleming's Left-Hand Rule, which finger represents the direction of the MECHANICAL FORCE (thrust)?",
      "options": ["Thumb", "Forefinger", "Centre finger", "Ring finger"],
      "answer": "Thumb",
      "explanation": "The outstretched thumb represents the direction of mechanical force or motion (F)."
    },
    {
      "id": "m10_q07",
      "question": "In Fleming's Left-Hand Rule, which finger represents the direction of ELECTRIC CURRENT?",
      "options": ["Thumb", "Forefinger", "Centre (Middle) finger", "Palm"],
      "answer": "Centre (Middle) finger",
      "explanation": "The centre (middle) finger represents the direction of electric current (I)."
    },
    {
      "id": "m10_q08",
      "question": "A beam of electrons moving horizontally towards the right enters a magnetic field directed vertically downwards. In which direction is the electron beam deflected?",
      "options": [
        "Into the page (away from observer)",
        "Out of the page (towards observer)",
        "Vertically upwards",
        "It is not deflected"
      ],
      "answer": "Into the page (away from observer)",
      "explanation": "Electrons move right, so conventional current is LEFT. Field is DOWN. By Fleming's Left-Hand Rule: Forefinger DOWN, Centre finger LEFT => Thumb points INTO the page."
    },
    {
      "id": "m10_q09",
      "question": "Which of the following devices operates on the principle described by Fleming's Left-Hand Rule?",
      "options": ["Electric generator", "Electric motor", "Solar panel", "Transformer"],
      "answer": "Electric motor",
      "explanation": "An electric motor converts electrical current in a magnetic field into mechanical motion via Fleming's Left-Hand Rule."
    },
    {
      "id": "m10_q10",
      "question": "What is the angle between any two adjacent fingers in Fleming's Left-Hand Rule?",
      "options": ["45°", "60°", "90° (mutually perpendicular)", "180°"],
      "answer": "90° (mutually perpendicular)",
      "explanation": "The thumb, forefinger, and centre finger are held mutually perpendicular to each other (90°)."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch12_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 12 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
