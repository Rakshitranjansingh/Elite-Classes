# -*- coding: utf-8 -*-
"""
CH12 Part 2: Modules 11 to 20
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

modules_11_to_20 = []

# ==========================================
# Module 11: Electric Motor: Principle & Anatomy
# ==========================================
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Electric Motor: Working Principle & Key Anatomical Components",
  "tagline": "Conversion of electrical energy into mechanical rotational kinetic energy, armature, and split rings.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is an Electric Motor?</h4>
    <p>An <strong>electric motor</strong> is a rotating electromagnetic machine that <strong>converts electrical energy into mechanical rotational energy</strong>. Electric motors form the core driving mechanism in ceiling fans, refrigerators, washing machines, mixers, water pumps, and electric vehicles.</p>

    <h4>2. Working Principle of an Electric Motor</h4>
    <p>The operating principle of an electric motor is based on the <strong>magnetic force on a current-carrying conductor (Fleming's Left-Hand Rule)</strong>:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "When a rectangular current-carrying coil is placed in a magnetic field, opposite sides of the coil experience equal, opposite, and non-collinear mechanical forces. These two forces constitute a couple (torque) that rotates the coil continuously about its central axle."
    </blockquote>

    <h4>3. Essential Anatomical Components</h4>
    <ol>
      <li><strong>Armature Core & Coil ($ABCD$):</strong> A rectangular coil consisting of many turns of insulated copper wire wound over a soft iron core. (The soft iron core + coil is called the <strong>armature</strong>).</li>
      <li><strong>Strong Permanent Field Magnet:</strong> Provides a powerful uniform magnetic field between its concave North ($N$) and South ($S$) pole shoes.</li>
      <li><strong>Split-Ring Commutator ($P$ and $Q$):</strong> A metallic ring split into two semi-cylindrical halves ($P$ and $Q$), insulated from each other and mounted on the axle. The two ends of the armature coil are connected to these split halves. The commutator acts as a <strong>current reverser</strong>.</li>
      <li><strong>Carbon Brushes ($X$ and $Y$):</strong> Two flexible, stationary carbon/graphite blocks that press lightly against the rotating split-rings, maintaining smooth electrical contact with the external DC battery.</li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "An electric motor converts electrical energy into mechanical rotational energy.",
    "Operating principle: magnetic torque on a rectangular current-carrying coil in a magnetic field.",
    "Essential parts: Armature coil ($ABCD$), permanent magnet, split-ring commutator ($P, Q$), and carbon brushes ($X, Y$)."
  ],
  "keyNotes": [
    "The function of carbon brushes is to provide a low-friction electrical sliding contact to conduct current from the stationary battery into the rotating commutator rings."
  ],
  "questions": [
    get_bank_q(39, "m11_q01"),
    get_bank_q(41, "m11_q02"),
    get_bank_q(74, "m11_q03"),
    {
      "id": "m11_q04",
      "question": "What energy transformation takes place in an operating electric motor?",
      "options": [
        "Mechanical energy into electrical energy",
        "Electrical energy into mechanical rotational energy",
        "Chemical energy into magnetic energy",
        "Thermal energy into light energy"
      ],
      "answer": "Electrical energy into mechanical rotational energy",
      "explanation": "An electric motor consumes electrical energy and converts it into mechanical rotation of its central axle."
    },
    {
      "id": "m11_q05",
      "question": "On which fundamental physical principle does an electric motor operate?",
      "options": [
        "Electromagnetic induction",
        "A current-carrying coil placed in a magnetic field experiences a mechanical deflecting torque (Fleming's Left-Hand Rule)",
        "Heating effect of electric current",
        "Chemical electrolysis"
      ],
      "answer": "A current-carrying coil placed in a magnetic field experiences a mechanical deflecting torque (Fleming's Left-Hand Rule)",
      "explanation": "Equal and opposite forces on the two parallel arms of the coil create a rotational torque about the axle."
    },
    {
      "id": "m11_q06",
      "question": "What is the combination of the soft iron core and the insulated copper coil in an electric motor called?",
      "options": ["Commutator", "Armature", "Slip ring", "Rotor brush"],
      "answer": "Armature",
      "explanation": "The soft iron core wrapped with copper wire turns is known as the armature, which enhances the magnetic field and motor power."
    },
    {
      "id": "m11_q07",
      "question": "Why are the stationary brushes in an electric motor made of graphite (carbon)?",
      "options": [
        "Graphite is magnetic",
        "Graphite is a good electrical conductor, self-lubricating, and resists high friction wear against the rotating split rings",
        "Graphite produces sparks that light up the motor",
        "Graphite is cheaper than water"
      ],
      "answer": "Graphite is a good electrical conductor, self-lubricating, and resists high friction wear against the rotating split rings",
      "explanation": "Graphite provides excellent electrical contact while its layered structure acts as a solid lubricant, minimizing frictional wear."
    },
    {
      "id": "m11_q08",
      "question": "What component acts as the 'commutator' (current reverser) in a direct current (DC) electric motor?",
      "options": ["A pair of full slip rings", "A split-ring metallic commutator", "A copper knife switch", "A lead fuse"],
      "answer": "A split-ring metallic commutator",
      "explanation": "A split ring consisting of two half-rings mounted on the axle acts as the commutator in a DC motor."
    },
    {
      "id": "m11_q09",
      "question": "Which rule determines the direction of rotation of an electric motor's coil?",
      "options": ["Fleming's Left-Hand Rule", "Fleming's Right-Hand Rule", "Right-Hand Thumb Rule", "Clock Face Rule"],
      "answer": "Fleming's Left-Hand Rule",
      "explanation": "Fleming's Left-Hand Rule determines the direction of mechanical thrust on each arm of the armature coil."
    },
    {
      "id": "m11_q10",
      "question": "Why are the pole faces of the field magnet in an electric motor curved concavely?",
      "options": [
        "To produce a radial magnetic field so the coil always remains parallel to field lines, maximizing continuous torque",
        "To prevent dust accumulation",
        "To make the motor look spherical",
        "To cool the copper wire"
      ],
      "answer": "To produce a radial magnetic field so the coil always remains parallel to field lines, maximizing continuous torque",
      "explanation": "Cylindrical concave pole faces create a radial magnetic field, keeping torque maximum throughout the rotation cycle."
    }
  ]
}
modules_11_to_20.append(m11)

# ==========================================
# Module 12: Working of Motor & Commutator Role
# ==========================================
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Working Mechanism of an Electric Motor & The Commutator's Role",
  "tagline": "How the split-ring commutator reverses current every half-rotation, ensuring continuous unidirectional spin.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Tracing the First Half-Rotation ($0^\circ\text{ to }180^\circ$)</h4>
    <p>Consider rectangular coil $ABCD$ positioned horizontally in the magnetic field between poles $N$ and $S$:</p>
    <ul>
      <li>Current enters via carbon brush $X$, flows along arm $AB$ (away from observer), across $BC$, and down arm $CD$ (towards observer), exiting via brush $Y$.</li>
      <li>Applying <strong>Fleming's Left-Hand Rule</strong>:
        <ul>
          <li>On arm $AB$: Magnetic field is $N \rightarrow S$ (right); current is inwards $\implies$ <strong>Force is directed DOWNWARDS</strong>.</li>
          <li>On arm $CD$: Magnetic field is $N \rightarrow S$ (right); current is outwards $\implies$ <strong>Force is directed UPWARDS</strong>.</li>
        </ul>
      </li>
      <li>These two equal, opposite, and non-collinear forces create an anti-clockwise couple, rotating the coil half a turn until it stands vertically at $90^\circ$.</li>
    </ul>

    <h4>2. Crossing the Vertical Dead Point & The Commutator's Action</h4>
    <p>At the vertical position ($90^\circ$), the brushes touch the insulating gap between split-rings $P$ and $Q$. Current is momentarily interrupted, but <strong>inertia of motion</strong> carries the coil past the vertical position.</p>
    <p>As the coil passes $90^\circ$, split-ring $P$ makes contact with brush $Y$, and split-ring $Q$ makes contact with brush $X$:</p>
    <ul>
      <li><strong>The direction of current in the coil is REVERSED!</strong> Current now flows along $DCBA$ (inwards along $CD$ and outwards along $AB$).</li>
      <li>Now arm $CD$ is pushed DOWNWARDS and arm $AB$ is pushed UPWARDS.</li>
      <li>Consequently, the couple continues to rotate the coil in the <strong>exact same anti-clockwise direction</strong> for the second half-turn!</li>
    </ul>

    <h4>3. The Indispensable Function of the Commutator</h4>
    <p>The split-ring commutator <strong>reverses the direction of current flowing through the coil after every half-rotation ($180^\circ$)</strong>. Without it, the coil would simply oscillate back and forth between $+90^\circ$ and $-90^\circ$ instead of achieving continuous unidirectional rotation.</p>

    <h4>4. Commercial Motor Enhancements</h4>
    <p>Commercial motors increase power by: (1) using an electromagnet instead of a permanent magnet, (2) winding hundreds of turns on the coil, and (3) winding the coil on a laminated soft iron core.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Arm $AB$ is pushed down, arm $CD$ is pushed up, rotating the coil anti-clockwise.",
    "The split-ring commutator reverses the direction of current through the coil every half-rotation ($180^\\circ$).",
    "Continuous unidirectional rotation is maintained by periodic current reversal combined with rotational inertia."
  ],
  "keyNotes": [
    "A commutator is defined in electrical engineering as a mechanical device that reverses the direction of flow of electric current in a circuit."
  ],
  "questions": [
    get_bank_q(60, "m12_q01"),
    get_bank_q(61, "m12_q02"),
    get_bank_q(75, "m12_q03"),
    {
      "id": "m12_q04",
      "question": "What is the precise functional role of the split-ring commutator in a direct current (DC) electric motor?",
      "options": [
        "To cool the motor with moving air",
        "To reverse the direction of electric current flowing through the coil after every half-rotation, ensuring continuous unidirectional spin",
        "To convert DC into high-frequency AC",
        "To hold the motor to the floor"
      ],
      "answer": "To reverse the direction of electric current flowing through the coil after every half-rotation, ensuring continuous unidirectional spin",
      "explanation": "By swapping contact with the brushes every 180°, the commutator reverses the current, keeping torque in the same direction."
    },
    {
      "id": "m12_q05",
      "question": "What would happen to the coil of an electric motor if the split-ring commutator were replaced with two unbroken, continuous slip rings?",
      "options": [
        "It would spin twice as fast",
        "It would rotate half a turn, experience an opposing torque, and merely oscillate back and forth around the vertical position without continuous rotation",
        "It would generate lightning bolts",
        "It would melt immediately"
      ],
      "answer": "It would rotate half a turn, experience an opposing torque, and merely oscillate back and forth around the vertical position without continuous rotation",
      "explanation": "Without current reversal, forces reverse relative to coil arms after 180°, reversing torque and locking the coil in oscillation."
    },
    {
      "id": "m12_q06",
      "question": "When the rotating coil of an electric motor reaches the vertical position, the carbon brushes touch the non-conducting gap between the split rings and current drops to zero. What carries the coil past this dead point?",
      "options": ["Rotational inertia of the armature", "A sudden burst of voltage", "Air currents", "Gravitational repulsion"],
      "answer": "Rotational inertia of the armature",
      "explanation": "The angular momentum (rotational inertia) of the spinning armature carries the coil past the vertical dead spot."
    },
    {
      "id": "m12_q07",
      "question": "Which of the following modifications is used in commercial electric motors to drastically enhance output rotational power?",
      "options": [
        "An electromagnet in place of a permanent magnet, a large number of turns of copper wire, and a soft iron core",
        "Using plastic gears and wooden axles",
        "Connecting the motor to a 1.5 V flashlight cell",
        "Removing the carbon brushes entirely"
      ],
      "answer": "An electromagnet in place of a permanent magnet, a large number of turns of copper wire, and a soft iron core",
      "explanation": "Commercial motors maximize torque by utilizing powerful electromagnets, dense multi-turn coils, and high-permeability soft iron cores."
    },
    {
      "id": "m12_q08",
      "question": "In a horizontal rectangular coil ABCD in a magnetic field directed from left to right, if current in AB is inwards and in CD is outwards, what is the direction of rotation?",
      "options": ["Anti-clockwise", "Clockwise", "No rotation", "First clockwise then anti-clockwise"],
      "answer": "Anti-clockwise",
      "explanation": "AB experiences a downward force and CD experiences an upward force, driving an anti-clockwise couple."
    },
    {
      "id": "m12_q09",
      "question": "Why does soft iron increase the power of an electric motor when used as the armature core?",
      "options": [
        "It makes the motor heavier",
        "It drastically intensifies the magnetic flux density through the coil due to high magnetic permeability",
        "It generates free electricity",
        "It lowers the temperature to absolute zero"
      ],
      "answer": "It drastically intensifies the magnetic flux density through the coil due to high magnetic permeability",
      "explanation": "Soft iron concentrates magnetic lines of force, vastly amplifying the magnetic field acting on the copper coil."
    },
    {
      "id": "m12_q10",
      "question": "How often does the split-ring commutator swap electrical connections with the brushes during a complete 360° rotation of the motor?",
      "options": ["Once every complete rotation", "Twice per rotation (every 180° / half-turn)", "Four times per rotation", "Never"],
      "answer": "Twice per rotation (every 180° / half-turn)",
      "explanation": "The two split halves switch contact with the stationary brushes twice per complete cycle, once every half-turn (180°)."
    }
  ]
}
modules_11_to_20.append(m12)

# ==========================================
# Module 13: Electromagnetic Induction (EMI)
# ==========================================
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Electromagnetic Induction: Michael Faraday's Epochal Discovery",
  "tagline": "Moving magnet and stationary coil, changing magnetic flux, and induced electromotive force.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Michael Faraday's Grand Breakthrough (1831)</h4>
    <p>In 1831, English physicist Michael Faraday achieved one of the greatest milestones in physical science: <em>If an electric current can produce a magnetic field (Oersted), can a magnetic field produce an electric current?</em></p>
    <p>Faraday proved that the answer is <strong>YES</strong>, discovering <strong>Electromagnetic Induction (EMI)</strong>:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "Whenever the magnetic flux linked with a closed conducting coil changes with time, an induced electric current is generated in the coil."
    </blockquote>

    <h4>2. Faraday's Classic Magnet-Coil Experiment</h4>
    <p>A multi-turn copper coil is connected to a sensitive centre-zero <strong>galvanometer ($G$)</strong> (no battery is present in the circuit!):</p>
    <ul>
      <li><strong>1. Magnet Pushed Towards Coil:</strong> When the North pole ($N$) of a bar magnet is thrust rapidly into the coil, the galvanometer pointer deflects momentarily to the right, indicating an <strong>induced electric current</strong>.</li>
      <li><strong>2. Magnet Held Stationary:</strong> While the magnet is held completely stationary inside the coil, the pointer instantly returns to <strong>zero deflection</strong>. (Zero relative motion $\implies$ Zero induced current!).</li>
      <li><strong>3. Magnet Withdrawn from Coil:</strong> When the magnet is pulled rapidly away from the coil, the pointer deflects momentarily to the <strong>left</strong> (current flows in the opposite direction).</li>
      <li><strong>4. Speed of Motion:</strong> Moving the magnet faster produces a much larger, sharper deflection, proving that induced current depends on the <strong>rate of change of magnetic flux</strong>.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Electromagnetic induction is the generation of current in a conductor due to relative motion with a magnetic field.",
    "A stationary magnet inside a coil produces ZERO induced current.",
    "Induced current magnitude is directly proportional to the relative speed of motion (rate of flux change)."
  ],
  "keyNotes": [
    "It makes zero difference whether the magnet moves and the coil is stationary, or the coil moves and the magnet is stationary; only the relative motion matters!"
  ],
  "questions": [
    get_bank_q(42, "m13_q01"),
    get_bank_q(43, "m13_q02"),
    get_bank_q(44, "m13_q03"),
    {
      "id": "m13_q04",
      "question": "What is the phenomenon of generating an electric current in a closed circuit by changing the magnetic flux linked with it called?",
      "options": ["Electrolysis", "Electromagnetic Induction", "Electrostatic precipitation", "Thermoelectric effect"],
      "answer": "Electromagnetic Induction",
      "explanation": "Electromagnetic induction (EMI), discovered by Michael Faraday, is the creation of induced current via changing magnetic fields."
    },
    {
      "id": "m13_q05",
      "question": "What happens to the galvanometer needle connected to a copper coil when a strong bar magnet is held completely STATIONARY inside the coil?",
      "options": [
        "It deflects permanently to the right",
        "It deflects permanently to the left",
        "The pointer returns to exactly ZERO deflection",
        "It spins continuously"
      ],
      "answer": "The pointer returns to exactly ZERO deflection",
      "explanation": "Induced current is generated ONLY when the magnetic flux is changing with time; static magnetic fields produce zero induction."
    },
    {
      "id": "m13_q06",
      "question": "Which English scientist discovered the laws of electromagnetic induction in 1831?",
      "options": ["Michael Faraday", "Hans Christian Oersted", "James Joule", "Isaac Newton"],
      "answer": "Michael Faraday",
      "explanation": "Michael Faraday discovered electromagnetic induction in 1831 through extensive magnet-coil experiments."
    },
    {
      "id": "m13_q07",
      "question": "How does increasing the speed at which a bar magnet is pushed into a coil affect the induced current in the coil?",
      "options": [
        "Induced current increases proportionally with the faster rate of change of magnetic flux",
        "Induced current drops to zero",
        "Induced current reverses polarity constantly",
        "The coil melts"
      ],
      "answer": "Induced current increases proportionally with the faster rate of change of magnetic flux",
      "explanation": "By Faraday's law, induced electromotive force is directly proportional to the time rate of change of magnetic flux (e ∝ dΦ/dt)."
    },
    {
      "id": "m13_q08",
      "question": "What instrument is used to detect the presence and direction of minute induced electric currents in a circuit?",
      "options": ["Ammeter", "Voltmeter", "Centre-zero Galvanometer", "Barometer"],
      "answer": "Centre-zero Galvanometer",
      "explanation": "A centre-zero galvanometer has its pointer at zero in the centre, deflecting left or right to indicate the presence and direction of minute currents."
    },
    {
      "id": "m13_q09",
      "question": "If the North pole of a magnet is pushed into a coil, the galvanometer deflects right. What happens if the SOUTH pole is pushed into the coil at the same speed?",
      "options": [
        "The pointer deflects to the left by an equal amount",
        "The pointer deflects to the right twice as far",
        "Zero deflection occurs",
        "The magnet loses its magnetism"
      ],
      "answer": "The pointer deflects to the left by an equal amount",
      "explanation": "Reversing the magnetic polarity of the approaching pole reverses the direction of the induced electromotive force."
    },
    {
      "id": "m13_q10",
      "question": "Can electromagnetic induction occur if the magnet is held fixed while the copper coil is moved towards it?",
      "options": [
        "No, only moving magnets can induce currents",
        "Yes, identical current is induced because relative motion between the magnet and the coil is what changes magnetic flux",
        "Only in vacuum",
        "Only if the coil is made of iron"
      ],
      "answer": "Yes, identical current is induced because relative motion between the magnet and the coil is what changes magnetic flux",
      "explanation": "Relative motion between the conductor and the magnetic field lines is the sole physical requirement for electromagnetic induction."
    }
  ]
}
modules_11_to_20.append(m13)

# ==========================================
# Module 14: Mutual Induction (Two Coils)
# ==========================================
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Mutual Induction: Inducing Current between Two Adjacent Coils",
  "tagline": "Primary coil with battery and switch vs secondary coil with galvanometer, and transformer basics.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Induction Without Any Moving Parts</h4>
    <p>Michael Faraday demonstrated that mechanical motion is not the only way to induce an electric current. A changing current in an adjacent circuit can achieve the exact same effect—a phenomenon called <strong>mutual induction</strong>.</p>

    <h4>2. The Two-Coil Experiment</h4>
    <p>Two separate insulated copper wire coils are wound over a non-conducting hollow cardboard cylinder (or soft iron ring):</p>
    <ul>
      <li><strong>Coil 1 (Primary Coil):</strong> Has many turns and is connected in series with a battery and a plug key.</li>
      <li><strong>Coil 2 (Secondary Coil):</strong> Is placed in close proximity to Coil 1 and connected ONLY to a sensitive galvanometer. (There is zero physical electrical connection between Coil 1 and Coil 2!).</li>
    </ul>

    <h4>3. Observations during Switching</h4>
    <ol>
      <li><strong>When Plug Key is Closed (Switch ON):</strong> Current in Coil 1 surges from $0$ to its steady value. The magnetic field around Coil 1 expands rapidly, sweeping across the turns of Coil 2. This changing flux induces a momentary current in Coil 2, causing the galvanometer pointer to <strong>deflect briefly to one side and return to zero</strong>.</li>
      <li><strong>While Current is Steady (Key Closed):</strong> The magnetic field of Coil 1 is constant (unchanging). Hence, <strong>galvanometer deflection is strictly ZERO</strong>.</li>
      <li><strong>When Plug Key is Opened (Switch OFF):</strong> Current in Coil 1 collapses from its steady value to $0$. The magnetic field shrinks rapidly, inducing a momentary current in Coil 2 in the <strong>exact opposite direction</strong>.</li>
    </ol>

    <h4>4. Engineering Application: The Transformer</h4>
    <p>This principle of mutual induction forms the exact operational foundation of electrical <strong>transformers</strong> used across power grids worldwide to step voltage up or down without moving parts.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Mutual induction is the induction of current in a secondary coil caused by changing current in a primary coil.",
    "Current is induced in the secondary coil ONLY during the moments of switching ON or switching OFF.",
    "A steady, unchanging DC current in the primary coil produces ZERO induced current in the secondary coil."
  ],
  "keyNotes": [
    "Transformers can operate only on Alternating Current (AC) because AC naturally alternates and changes continuously; they cannot work on steady Direct Current (DC)!"
  ],
  "questions": [
    get_bank_q(62, "m14_q01"),
    get_bank_q(63, "m14_q02"),
    get_bank_q(76, "m14_q03"),
    {
      "id": "m14_q04",
      "question": "In Faraday's two-coil experiment, when is a current induced in Secondary Coil 2?",
      "options": [
        "Continuously while a steady current flows in Primary Coil 1",
        "Only at the moments when current in Primary Coil 1 is switched ON or switched OFF (or varied)",
        "Only when both coils are heated",
        "Never, because they are not connected by wire"
      ],
      "answer": "Only at the moments when current in Primary Coil 1 is switched ON or switched OFF (or varied)",
      "explanation": "Current is induced only when magnetic flux is changing, which occurs exclusively during current transitions (turn-on, turn-off)."
    },
    {
      "id": "m14_q05",
      "question": "What is the deflection of the galvanometer in Coil 2 when a steady, constant current flows in Coil 1?",
      "options": ["Maximum deflection to the right", "Zero deflection", "Oscillating wildly", "Deflection to the left"],
      "answer": "Zero deflection",
      "explanation": "A steady direct current creates a static, unchanging magnetic field; with zero change in flux, no current is induced in Coil 2."
    },
    {
      "id": "m14_q06",
      "question": "What is the phenomenon where changing current in one coil induces an electromotive force in an adjacent coil called?",
      "options": ["Self-induction", "Mutual induction", "Seebeck effect", "Peltier effect"],
      "answer": "Mutual induction",
      "explanation": "Mutual induction is the generation of induced voltage in a secondary circuit due to changing current in a nearby primary circuit."
    },
    {
      "id": "m14_q07",
      "question": "Which crucial electrical grid machine operates entirely on the principle of mutual induction between two coils?",
      "options": ["Electric toaster", "Electrical Transformer", "Incandescent bulb", "Storage battery"],
      "answer": "Electrical Transformer",
      "explanation": "Transformers step AC voltage up or down using mutual induction between primary and secondary windings on a common iron core."
    },
    {
      "id": "m14_q08",
      "question": "Why can an electrical transformer NOT operate on a steady Direct Current (DC) battery source?",
      "options": [
        "DC is too hot for iron cores",
        "Steady DC produces an unchanging magnetic field (dΦ/dt = 0), so zero voltage is induced in the secondary coil",
        "DC destroys copper wire",
        "Batteries have no electrons"
      ],
      "answer": "Steady DC produces an unchanging magnetic field (dΦ/dt = 0), so zero voltage is induced in the secondary coil",
      "explanation": "Transformers require a continuously alternating magnetic flux; steady DC creates static flux, generating zero secondary induction."
    },
    {
      "id": "m14_q09",
      "question": "In the two-coil setup, how can the magnitude of the induced current in Coil 2 be amplified?",
      "options": [
        "By winding both coils on a shared continuous soft iron core and increasing the rate of current switching",
        "By moving the coils 10 metres apart",
        "By removing turns from Coil 1",
        "By replacing the copper wire with plastic wire"
      ],
      "answer": "By winding both coils on a shared continuous soft iron core and increasing the rate of current switching",
      "explanation": "A soft iron core channels magnetic flux efficiently between coils, maximizing mutual magnetic coupling."
    },
    {
      "id": "m14_q10",
      "question": "If closing the switch in Coil 1 produces a momentary deflection to the right in Coil 2, what happens when the switch is OPENED?",
      "options": [
        "A momentary deflection to the right again",
        "A momentary deflection to the left (opposite direction)",
        "Zero deflection",
        "Permanent right deflection"
      ],
      "answer": "A momentary deflection to the left (opposite direction)",
      "explanation": "Collapsing flux has the opposite rate of change (negative slope), inducing a current of opposite polarity."
    }
  ]
}
modules_11_to_20.append(m14)

# ==========================================
# Module 15: Fleming's Right-Hand Rule (Dynamo Rule)
# ==========================================
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Fleming's Right-Hand Rule: The Generator (Dynamo) Rule",
  "tagline": "Thumb = Motion, Forefinger = Field, Centre finger = Induced Current direction.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Determining the Direction of Induced Current</h4>
    <p>To determine the direction of induced current generated in a moving conductor cutting across an external magnetic field, John Ambrose Fleming formulated <strong>Fleming's Right-Hand Rule</strong> (also known as the <strong>Generator or Dynamo Rule</strong>):</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "Stretch the thumb, forefinger, and centre (middle) finger of your RIGHT hand mutually perpendicular to each other. If the forefinger points in the direction of the magnetic field and the thumb in the direction of motion of the conductor, then the centre finger will point in the direction of the INDUCED CURRENT."
    </blockquote>

    <h4>2. Visual Comparison of Left-Hand vs Right-Hand Rules</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Feature</th><th>Fleming's Left-Hand Rule</th><th>Fleming's Right-Hand Rule</th></tr></thead>
      <tbody>
        <tr><td><strong>Common Name</strong></td><td><strong>Motor Rule</strong></td><td><strong>Generator (Dynamo) Rule</strong></td></tr>
        <tr><td><strong>Used For</strong></td><td>Finding <strong>Force/Motion</strong> ($F$) resulting from current</td><td>Finding <strong>Induced Current</strong> ($I$) resulting from motion</td></tr>
        <tr><td><strong>Cause & Effect</strong></td><td>Current + Field $\longrightarrow$ <strong>Mechanical Motion</strong></td><td>Motion + Field $\longrightarrow$ <strong>Induced Current</strong></td></tr>
        <tr><td><strong>Thumb</strong></td><td>Direction of <strong>Force / Motion</strong></td><td>Direction of <strong>Motion</strong> of conductor</td></tr>
        <tr><td><strong>Forefinger</strong></td><td>Magnetic Field ($B$)</td><td>Magnetic Field ($B$)</td></tr>
        <tr><td><strong>Centre Finger</strong></td><td>Supplied Current ($I$)</td><td><strong>Induced Current</strong> ($I$)</td></tr>
      </tbody>
    </table>
  </div>
</div>
""",
  "pointsToRemember": [
    "Fleming's Right-Hand Rule is the 'Generator Rule' for determining induced current direction.",
    "Thumb = Motion of conductor, Forefinger = Magnetic Field, Centre finger = Induced Current.",
    "Remember the mnemonic: Left Hand for Motors (input electricity, output motion); Right Hand for Generators (input motion, output electricity)."
  ],
  "keyNotes": [
    "Always check whether the device is consuming electricity (Motor $\\rightarrow$ Left Hand) or generating electricity (Generator/Dynamo $\\rightarrow$ Right Hand) before choosing which hand to stretch!"
  ],
  "questions": [
    get_bank_q(45, "m15_q01"),
    get_bank_q(46, "m15_q02"),
    get_bank_q(77, "m15_q03"),
    {
      "id": "m15_q04",
      "question": "Which rule is used to determine the direction of INDUCED CURRENT in a conductor moving through a magnetic field?",
      "options": [
        "Fleming's Right-Hand Rule",
        "Fleming's Left-Hand Rule",
        "Maxwell's Corkscrew Rule",
        "Ohm's Law"
      ],
      "answer": "Fleming's Right-Hand Rule",
      "explanation": "Fleming's Right-Hand Rule (the Generator Rule) determines the direction of induced current produced by electromagnetic induction."
    },
    {
      "id": "m15_q05",
      "question": "In Fleming's Right-Hand Rule, which finger represents the direction of the INDUCED CURRENT?",
      "options": ["Centre (Middle) finger", "Thumb", "Forefinger", "Ring finger"],
      "answer": "Centre (Middle) finger",
      "explanation": "The centre finger of the right hand points in the direction of the induced current."
    },
    {
      "id": "m15_q06",
      "question": "In Fleming's Right-Hand Rule, which finger represents the direction of MOTION of the conductor?",
      "options": ["Thumb", "Forefinger", "Centre finger", "Little finger"],
      "answer": "Thumb",
      "explanation": "The outstretched thumb represents the mechanical direction of motion of the conductor."
    },
    {
      "id": "m15_q07",
      "question": "How do you distinguish when to use Fleming's Left-Hand Rule vs Fleming's Right-Hand Rule?",
      "options": [
        "Left Hand for Electric Motors (Motion caused by current); Right Hand for Electric Generators (Current induced by motion)",
        "Left hand for AC and Right hand for DC",
        "Left hand in winter and Right hand in summer",
        "Left hand for magnets and Right hand for batteries"
      ],
      "answer": "Left Hand for Electric Motors (Motion caused by current); Right Hand for Electric Generators (Current induced by motion)",
      "explanation": "Left Hand = Motor Rule (electrical to mechanical); Right Hand = Generator Rule (mechanical to electrical)."
    },
    {
      "id": "m15_q08",
      "question": "A straight wire moved vertically downwards cuts across a horizontal magnetic field directed towards the North. In which direction will induced current flow?",
      "options": ["Towards the West", "Towards the East", "Vertically upwards", "No current is induced"],
      "answer": "Towards the East",
      "explanation": "Applying Fleming's Right-Hand Rule: Thumb DOWN, Forefinger NORTH => Centre finger points EAST."
    },
    {
      "id": "m15_q09",
      "question": "Which machine uses Fleming's Right-Hand Rule to convert mechanical kinetic energy into electrical power?",
      "options": ["Electric generator (Dynamo)", "Electric fan", "Electric toaster", "Electric mixer"],
      "answer": "Electric generator (Dynamo)",
      "explanation": "Electric generators rotate coils inside magnetic fields to generate induced electric currents via Fleming's Right-Hand Rule."
    },
    {
      "id": "m15_q10",
      "question": "What is the physical angle between the three fingers in Fleming's Right-Hand Rule?",
      "options": ["45°", "60°", "90° (mutually perpendicular)", "180°"],
      "answer": "90° (mutually perpendicular)",
      "explanation": "All three fingers (thumb, forefinger, and centre finger) are held mutually perpendicular at 90° angles."
    }
  ]
}
modules_11_to_20.append(m15)

# ==========================================
# Module 16: AC vs DC Current
# ==========================================
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Direct Current (DC) vs Alternating Current (AC)",
  "tagline": "Unidirectional current vs periodic polarity reversal, frequency (50 Hz), and long-distance transmission.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Direct Current (DC)</h4>
    <p><strong>Direct Current (DC)</strong> is an electric current that flows strictly in <strong>one constant direction</strong> through a circuit. The terminals of a DC source have fixed positive ($+$) and negative ($-$) polarities that never change over time. Common DC sources include chemical electrochemical cells, solar photovoltaic panels, and DC dynamos.</p>

    <h4>2. Alternating Current (AC)</h4>
    <p><strong>Alternating Current (AC)</strong> is an electric current that <strong>reverses its direction periodically</strong> with respect to time. The voltage waveform follows a smooth sinusoidal oscillation, alternating between positive peak voltage and negative peak voltage.</p>

    <h4>3. Characteristics of Domestic AC in India</h4>
    <ul>
      <li><strong>Supply Voltage:</strong> $220\text{ V}$ (Root-Mean-Square value, peaking at $\sim 311\text{ V}$).</li>
      <li><strong>Frequency ($f$):</strong> <strong>$50\text{ Hz}$ ($50\text{ cycles per second}$)</strong>.</li>
      <li><strong>Time Period ($T$):</strong> $T = \frac{1}{f} = \frac{1}{50}\text{ s} = 0.02\text{ seconds}$ per complete cycle.</li>
      <li><strong>Direction Reversals per Second:</strong> Because current reverses direction <em>twice</em> during each cycle (once positive, once negative), a $50\text{ Hz}$ current reverses its direction <strong>100 times every second</strong> (every $\frac{1}{100}\text{ s} = 0.01\text{ s}$)!</li>
    </ul>

    <h4>4. Why AC is Superior for Power Transmission</h4>
    <p>The monumental advantage of AC over DC is that <strong>AC voltage can be stepped up to extreme high voltages (e.g., $400,000\text{ V}$) using transformers</strong> for long-distance transmission with negligible $I^2R$ copper heat loss, and then stepped down safely to $220\text{ V}$ at substations for domestic use. Long-distance transmission of DC was historically unfeasible without catastrophic power loss.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Direct Current (DC) flows in one fixed direction; Alternating Current (AC) reverses direction periodically.",
    "In India, domestic AC has a voltage of $220\\text{ V}$ and frequency of $50\\text{ Hz}$.",
    "A $50\\text{ Hz}$ AC current reverses direction 100 times every second (every $1/100\\text{ s}$).",
    "Major advantage of AC: can be stepped up/down easily using transformers, enabling long-distance transmission with minimal energy loss."
  ],
  "keyNotes": [
    "In the United States and Canada, domestic AC electricity is supplied at 120V with a frequency of 60 Hz (reversing 120 times per second)."
  ],
  "questions": [
    get_bank_q(33, "m16_q01"),
    get_bank_q(34, "m16_q02"),
    get_bank_q(47, "m16_q03"),
    get_bank_q(48, "m16_q04"),
    {
      "id": "m16_q05",
      "question": "What is the standard frequency of domestic alternating current (AC) supplied in India?",
      "options": ["50 Hz", "60 Hz", "100 Hz", "220 Hz"],
      "answer": "50 Hz",
      "explanation": "In India, the frequency of alternating current is standardized at 50 cycles per second (50 Hz)."
    },
    {
      "id": "m16_q06",
      "question": "How many times does a 50 Hz alternating current reverse its direction of flow in ONE second?",
      "options": ["50 times", "100 times", "25 times", "200 times"],
      "answer": "100 times",
      "explanation": "In each cycle, current reverses twice. Therefore, in 50 cycles (1 second), it reverses direction 50 × 2 = 100 times."
    },
    {
      "id": "m16_q07",
      "question": "What is the time interval after which a 50 Hz alternating current reverses its direction?",
      "options": ["1/50 second", "1/100 second (0.01 s)", "1/25 second", "1 second"],
      "answer": "1/100 second (0.01 s)",
      "explanation": "Reversing 100 times per second means each reversal takes exactly 1/100 of a second (0.01 seconds)."
    },
    {
      "id": "m16_q08",
      "question": "What is the primary engineering advantage of Alternating Current (AC) over Direct Current (DC) for national power grids?",
      "options": [
        "AC is safer to touch",
        "AC can be transmitted over tremendous distances at high voltages with minimal heat energy loss using transformers",
        "AC produces zero magnetic fields",
        "AC batteries are cheaper"
      ],
      "answer": "AC can be transmitted over tremendous distances at high voltages with minimal heat energy loss using transformers",
      "explanation": "Transformers can step AC up to hundreds of kilovolts to minimize I^2R transmission loss over hundreds of kilometres."
    },
    {
      "id": "m16_q09",
      "question": "Which of the following electrical sources generates pure Direct Current (DC)?",
      "options": ["Chemical dry cell battery and solar photovoltaic cell", "Hydroelectric dam alternator", "Bicycle dynamo", "Wind turbine generator"],
      "answer": "Chemical dry cell battery and solar photovoltaic cell",
      "explanation": "Batteries and solar cells produce steady unidirectional current (DC), unlike rotating grid alternators that generate AC."
    },
    {
      "id": "m16_q10",
      "question": "What device is used in electronic adapters (like mobile phone chargers) to convert AC mains electricity into DC?",
      "options": ["Inverter", "Rectifier (Diode bridge)", "Transformer alone", "Rheostat"],
      "answer": "Rectifier (Diode bridge)",
      "explanation": "A rectifier converts bidirectional alternating current into unidirectional direct current."
    }
  ]
}
modules_11_to_20.append(m16)

# ==========================================
# Module 17: Domestic Electric Circuits
# ==========================================
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Domestic Electric Circuits: Live, Neutral & Earth Wiring (220V, 50Hz)",
  "tagline": "Wire color codes, 220V potential difference, electricity meter, and distribution box circuits.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Mains Supply to Houses</h4>
    <p>Electric power is delivered to our homes via overhead utility cables or underground conduits as a 3-wire system supplying <strong>$220\text{ V}\text{ at }50\text{ Hz}$</strong>:</p>
    <ul>
      <li><strong>1. Live Wire (Phase Wire):</strong> Carries alternating high potential of $+220\text{ V}$ to $-220\text{ V}$. (Colour code: <strong>Red</strong> in old Indian standard; <strong>Brown</strong> in international IEC standard).</li>
      <li><strong>2. Neutral Wire:</strong> Completes the circuit back to the local substation transformer and is maintained at zero ground potential ($0\text{ V}$). (Colour code: <strong>Black</strong> in old Indian standard; <strong>Light Blue</strong> in international IEC standard).</li>
      <li><strong>Potential Difference:</strong> The potential difference between the Live wire and the Neutral wire is <strong>$220\text{ V}$</strong>.</li>
      <li><strong>3. Earth Wire (Grounding Wire):</strong> Safety wire connected to a metal plate buried deep in moist earth. (Colour code: <strong>Green</strong> in old standard; <strong>Green with Yellow stripes</strong> in international standard).</li>
    </ul>

    <h4>2. Route of Domestic Electricity into the House</h4>
    <ol>
      <li><strong>Company Electric Pole Fuse:</strong> High-capacity fuse on the incoming service line.</li>
      <li><strong>Electricity Meter:</strong> Records commercial energy consumption in kilowatt-hours (kWh).</li>
      <li><strong>Main Switch & Distribution Board:</strong> Contains the master switch and separate Miniature Circuit Breakers (MCBs) or fuses for individual house circuits:
        <ul>
          <li><strong>5 A Lighting Circuit:</strong> For low-power appliances (bulbs, fans, TV, computers).</li>
          <li><strong>15 A Power Circuit:</strong> For heavy appliances (geysers, air conditioners, refrigerators, room heaters).</li>
        </ul>
      </li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "Three-wire domestic system: Live ($220\\text{ V}$), Neutral ($0\\text{ V}$), and Earth ($0\\text{ V}$).",
    "Potential difference between Live and Neutral is $220\\text{ V}$.",
    "Two independent parallel circuits: $5\\text{ A}$ lighting circuit and $15\\text{ A}$ power circuit."
  ],
  "keyNotes": [
    "Color code summary: Live = Red/Brown; Neutral = Black/Blue; Earth = Green/Yellow-Green."
  ],
  "questions": [
    get_bank_q(30, "m17_q01"),
    get_bank_q(31, "m17_q02"),
    get_bank_q(78, "m17_q03"),
    {
      "id": "m17_q04",
      "question": "What is the potential difference between the Live wire and the Neutral wire in domestic electrical wiring in India?",
      "options": ["110 V", "220 V", "440 V", "0 V"],
      "answer": "220 V",
      "explanation": "The voltage between the live wire (220 V alternating) and the neutral wire (0 V reference) is 220 V."
    },
    {
      "id": "m17_q05",
      "question": "What is the colour code of the insulation on the LIVE wire according to the old Indian standard and the new international standard?",
      "options": [
        "Old: Red; New: Brown",
        "Old: Black; New: Green",
        "Old: Green; New: White",
        "Old: Blue; New: Black"
      ],
      "answer": "Old: Red; New: Brown",
      "explanation": "Live wire insulation is traditionally Red in India and Brown under new international IEC conventions."
    },
    {
      "id": "m17_q06",
      "question": "What is the colour code of the insulation on the NEUTRAL wire?",
      "options": ["Red", "Black (old) or Light Blue (new)", "Green", "Yellow"],
      "answer": "Black (old) or Light Blue (new)",
      "explanation": "The neutral wire is traditionally coated with black insulation (or light blue in modern systems)."
    },
    {
      "id": "m17_q07",
      "question": "What is the colour code of the insulation on the safety EARTH wire?",
      "options": ["Green (or Green with Yellow stripes)", "Red", "Black", "Brown"],
      "answer": "Green (or Green with Yellow stripes)",
      "explanation": "The safety earth wire is universally colored green (or green with yellow stripes)."
    },
    {
      "id": "m17_q08",
      "question": "What are the current ratings of the two common separate electrical circuits installed in domestic households?",
      "options": [
        "5 A circuit for low-power lights/fans and 15 A circuit for high-power geysers/heaters",
        "1 A and 100 A",
        "10 A and 20 A",
        "0.1 A and 0.5 A"
      ],
      "answer": "5 A circuit for low-power lights/fans and 15 A circuit for high-power geysers/heaters",
      "explanation": "Homes use a 5 A circuit for lighting and small electronics, and a 15 A power circuit for heavy appliances."
    },
    {
      "id": "m17_q09",
      "question": "In which domestic wire should the ON/OFF switch of an appliance always be connected?",
      "options": [
        "In the Live wire",
        "In the Neutral wire",
        "In the Earth wire",
        "In any wire randomly"
      ],
      "answer": "In the Live wire",
      "explanation": "Connecting the switch in the live wire ensures that when the switch is OFF, high 220 V voltage is disconnected from the appliance."
    },
    {
      "id": "m17_q10",
      "question": "What dangerous hazard occurs if an appliance switch is erroneously connected in the NEUTRAL wire instead of the Live wire?",
      "options": [
        "The appliance will never turn on",
        "Even when the switch is turned OFF, the internal heating element remains at high 220 V live potential, giving a lethal shock if touched",
        "The electric meter spins in reverse",
        "The bulb glows with ultraviolet light"
      ],
      "answer": "Even when the switch is turned OFF, the internal heating element remains at high 220 V live potential, giving a lethal shock if touched",
      "explanation": "Switching the neutral stops current, but the appliance remains live at 220 V relative to ground, presenting an electrocution hazard."
    }
  ]
}
modules_11_to_20.append(m17)

# ==========================================
# Module 18: Earth Wire & Grounding Safety
# ==========================================
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "The Earth Wire & Grounding: Protection Against Lethal Electric Shocks",
  "tagline": "Low-resistance path to ground, metallic appliance bodies, and fuse tripping during live-to-body faults.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Earthing (Grounding)?</h4>
    <p>The <strong>earth wire</strong> (green insulation) is a low-resistance safety conductor connected to a heavy copper plate buried deep in the moist ground near the building. In domestic installations, the earth wire is connected to the thick top pin of every 3-pin wall socket.</p>

    <h4>2. Why are Metallic Appliances Earthed?</h4>
    <p>Heavy electrical appliances featuring exposed metallic casings—such as <strong>electric irons, refrigerators, toasters, washing machines, and microwave ovens</strong>—are mandatory candidates for grounding:</p>
    <ul>
      <li>Suppose internal insulation frays due to wear, causing the <strong>bare live wire to touch the metallic outer casing</strong> of an electric iron.</li>
      <li><strong>WITHOUT an Earth Wire:</strong> The entire metal body becomes energized at lethal mains potential ($220\text{ V}$). A person touching the iron completes the circuit to ground through their body ($R_\text{human} \approx 1000\text{--}100,000\ \Omega$), suffering a massive, often fatal electrical shock!</li>
      <li><strong>WITH an Earth Wire:</strong> The metal casing is bonded directly to the low-resistance earth wire ($R_\text{earth} \approx 0\ \Omega$). Current from the live fault surges overwhelmingly down the path of least resistance into the ground rather than through the human body.</li>
      <li>This colossal surge of fault current instantly <strong>blows the circuit fuse or trips the MCB</strong>, completely disconnecting the power in milliseconds and saving the user's life!</li>
    </ul>

    <h4>3. Why is the Earth Pin on a 3-Pin Plug Thicker and Longer?</h4>
    <ul>
      <li><strong>Longer:</strong> Ensures the earth connection is established <em>first</em> before live and neutral pins engage, and broken <em>last</em> when unplugging.</li>
      <li><strong>Thicker:</strong> Prevents the earth pin from being accidentally inserted into the live or neutral sockets.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "The earth wire connects metallic appliance bodies to a low-resistance copper plate in the ground.",
    "Provides a low-resistance path for fault currents, preventing lethal electric shocks.",
    "Causes the fuse to blow or MCB to trip immediately during an insulation failure.",
    "The earth pin is longer and thicker for pre-engagement safety."
  ],
  "keyNotes": [
    "Appliances with all-plastic double-insulated casings (like hair dryers or mobile phone chargers) do not require an earth wire and use simple 2-pin plugs."
  ],
  "questions": [
    get_bank_q(32, "m18_q01"),
    get_bank_q(79, "m18_q02"),
    get_bank_q(80, "m18_q03"),
    {
      "id": "m18_q04",
      "question": "What is the primary safety purpose of connecting the metallic body of electrical appliances (like an electric iron or refrigerator) to the EARTH wire?",
      "options": [
        "To reduce electricity consumption by 50%",
        "To provide a low-resistance path to ground for leakage currents, ensuring the fuse trips and protecting the user from lethal electric shocks",
        "To make the motor run faster",
        "To prevent radio interference"
      ],
      "answer": "To provide a low-resistance path to ground for leakage currents, ensuring the fuse trips and protecting the user from lethal electric shocks",
      "explanation": "Grounding shunts fault current safely to earth, keeping the chassis at 0 V and tripping the protective breaker."
    },
    {
      "id": "m18_q05",
      "question": "Why is the top earth pin of a standard 3-pin electrical plug made LONGER than the live and neutral pins?",
      "options": [
        "To save copper metal",
        "So that the safety earth connection is established first before live pins engage, and broken last upon removal",
        "To lock the plug into the wall permanently",
        "To improve room aesthetics"
      ],
      "answer": "So that the safety earth connection is established first before live pins engage, and broken last upon removal",
      "explanation": "A longer earth pin guarantees ground protection is active the instant the live pin contacts mains voltage."
    },
    {
      "id": "m18_q06",
      "question": "Why is the earth pin also made THICKER than the live and neutral pins?",
      "options": [
        "To prevent it from ever being accidentally inserted into the live or neutral slots of the wall socket",
        "To hold more electrical charge",
        "To withstand high water pressure",
        "To increase resistance"
      ],
      "answer": "To prevent it from ever being accidentally inserted into the live or neutral slots of the wall socket",
      "explanation": "The thicker diameter prevents misinsertion into energized live or neutral receptacles."
    },
    {
      "id": "m18_q07",
      "question": "Which of the following electrical appliances MUST be grounded using a 3-pin earthed plug?",
      "options": [
        "Electric iron with metallic soleplate",
        "Plastic-bodied battery-operated wall clock",
        "Plastic cell phone charger adapter",
        "Wooden reading desk lamp"
      ],
      "answer": "Electric iron with metallic soleplate",
      "explanation": "Appliances with exposed conductive metallic enclosures require grounding to protect users against insulation failure."
    },
    {
      "id": "m18_q08",
      "question": "What happens if a live wire accidentally touches the metal chassis of an appliance that is properly connected to the EARTH wire?",
      "options": [
        "The appliance glows like a light bulb",
        "A heavy surge of fault current flows safely to ground, blowing the fuse and cutting off power immediately",
        "The person touching it receives a fatal shock",
        "The battery voltage doubles"
      ],
      "answer": "A heavy surge of fault current flows safely to ground, blowing the fuse and cutting off power immediately",
      "explanation": "The near-zero ground resistance creates an instantaneous high fault current that blows the fuse, disconnecting power."
    },
    {
      "id": "m18_q09",
      "question": "Why do mobile phone chargers and plastic table fans have only 2-pin plugs without an earth pin?",
      "options": [
        "They use double insulation (all external surfaces are non-conductive plastic), so no electric shock is possible even if internal wires touch the casing",
        "They do not use electric current",
        "They run on solar power only",
        "Because 3-pin plugs are illegal on small devices"
      ],
      "answer": "They use double insulation (all external surfaces are non-conductive plastic), so no electric shock is possible even if internal wires touch the casing",
      "explanation": "Double-insulated appliances have no exposed metal that can become live, eliminating the need for a protective earth wire."
    },
    {
      "id": "m18_q10",
      "question": "What is the typical electrical resistance of a properly installed domestic grounding earth pit?",
      "options": ["Very low (typically less than 1 to 5 Ohms)", "Over 1,000,000 Ohms", "Zero in winter, infinite in summer", "Negative 10 Ohms"],
      "answer": "Very low (typically less than 1 to 5 Ohms)",
      "explanation": "A safe earth pit maintains very low resistance (<1-5 Ω) to ensure fault current easily chooses the ground path over a human body."
    }
  ]
}
modules_11_to_20.append(m18)

# ==========================================
# Module 19: Short-Circuiting & Overloading
# ==========================================
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Short-Circuiting & Overloading: Causes, Dangers & MCB Protection",
  "tagline": "Direct live-neutral contact, multi-plug socket overloading, Joule heating fires, and MCBs.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is a Short Circuit?</h4>
    <p>A <strong>short circuit</strong> occurs when the <strong>Live wire and Neutral wire come into direct physical contact</strong> with each other:</p>
    <ul>
      <li><strong>Causes:</strong> Damaged or melted insulation on wires, faulty appliance cords, or rodents chewing through insulation.</li>
      <li><strong>Electrical Consequence:</strong> Direct wire contact bypasses all appliance resistance ($R \approx 0\ \Omega$). By Ohm's law ($I = V/R$), the current abruptly <strong>surges to an astronomically high value</strong>.</li>
      <li><strong>Hazard:</strong> Intense Joule heating ($H \propto I^2$) at the contact point generates violent sparks and white-hot temperatures that can ignite building walls within seconds!</li>
    </ul>

    <h4>2. What is Overloading?</h4>
    <p><strong>Overloading</strong> occurs when the total electric current drawn by all running appliances exceeds the safe current-carrying capacity of the circuit's copper wiring:</p>
    <ul>
      <li><strong>Causes:</strong> Connecting too many high-power appliances (e.g., heater, air conditioner, microwave, iron) into a single multi-socket adapter simultaneously; or a sudden temporary voltage spike from the supply grid.</li>
      <li><strong>Electrical Consequence:</strong> Total current exceeds the $5\text{ A}$ or $15\text{ A}$ wire limit, causing building wires to heat up dangerously behind walls.</li>
    </ul>

    <h4>3. Modern Protection: Miniature Circuit Breakers (MCBs)</h4>
    <p>In modern domestic electrical installations, traditional rewirable wire fuses have been replaced by <strong>Miniature Circuit Breakers (MCBs)</strong>:</p>
    <ul>
      <li>Operate electromagnetically and thermally to automatically <strong>trip (flip switch OFF)</strong> within milliseconds during short-circuits or overloads.</li>
      <li>Unlike sacrificial fuses that must be rewired with new wire, an MCB can simply be reset by <strong>flipping the lever back ON</strong> once the fault is cleared!</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Short circuit: Live and Neutral wires touch directly ($R \\approx 0$), causing current to surge dangerously.",
    "Overloading: Too many appliances drawn simultaneously on one circuit, exceeding safe wire capacity.",
    "Miniature Circuit Breakers (MCBs) trip automatically during faults and can be reset without replacing wires."
  ],
  "keyNotes": [
    "Short circuit is caused by a physical wiring fault bypassing resistance; overloading is caused by drawing excessive total current from too many running appliances."
  ],
  "questions": [
    get_bank_q(35, "m19_q01"),
    get_bank_q(36, "m19_q02"),
    get_bank_q(37, "m19_q03"),
    get_bank_q(38, "m19_q04"),
    {
      "id": "m19_q05",
      "question": "What happens to the electric current in a domestic circuit during a SHORT CIRCUIT?",
      "options": [
        "It decreases drastically to zero",
        "It increases enormously and abruptly",
        "It oscillates between 0 and 1 A",
        "It remains strictly constant"
      ],
      "answer": "It increases enormously and abruptly",
      "explanation": "Direct contact between live and neutral wires drops circuit resistance to near zero, causing a massive current surge (I = V/R)."
    },
    {
      "id": "m19_q06",
      "question": "What is the primary physical cause of a short circuit in domestic installations?",
      "options": [
        "Low atmospheric humidity",
        "Direct physical contact between the live wire and the neutral wire due to worn or damaged insulation",
        "Connecting a bulb of 40 W",
        "Using a copper ground plate"
      ],
      "answer": "Direct physical contact between the live wire and the neutral wire due to worn or damaged insulation",
      "explanation": "Damaged insulation allows energized live conductors to touch neutral lines directly, bypassing load resistance."
    },
    {
      "id": "m19_q07",
      "question": "What is the primary cause of electrical OVERLOADING in a household?",
      "options": [
        "Turning off all lights at night",
        "Connecting too many high-power appliances into a single multi-plug socket simultaneously, exceeding the safe current limit",
        "Using thick copper wires",
        "Installing solar panels"
      ],
      "answer": "Connecting too many high-power appliances into a single multi-plug socket simultaneously, exceeding the safe current limit",
      "explanation": "Plugging multiple heavy loads into one socket causes cumulative parallel currents to exceed the wiring's thermal capacity."
    },
    {
      "id": "m19_q08",
      "question": "What modern electromagnetic safety device has largely replaced traditional rewirable fuses in household distribution boxes?",
      "options": [
        "Miniature Circuit Breaker (MCB)",
        "Step-up Transformer",
        "Rheostat",
        "Centre-zero Galvanometer"
      ],
      "answer": "Miniature Circuit Breaker (MCB)",
      "explanation": "MCBs automatically trip open during overcurrent conditions and can be effortlessly reset with a lever."
    },
    {
      "id": "m19_q09",
      "question": "What is the major operational advantage of an MCB over a traditional lead-tin wire fuse?",
      "options": [
        "An MCB can be reset simply by flipping its switch back ON after clearing the fault, whereas a blown fuse wire must be manually replaced",
        "An MCB generates electricity",
        "An MCB works without wires",
        "An MCB is completely free"
      ],
      "answer": "An MCB can be reset simply by flipping its switch back ON after clearing the fault, whereas a blown fuse wire must be manually replaced",
      "explanation": "MCBs eliminate the hazard and inconvenience of rewiring melted fuse links; a simple switch flip restores power."
    },
    {
      "id": "m19_q10",
      "question": "Why does a short circuit frequently cause catastrophic residential fires?",
      "options": [
        "Because massive short-circuit currents generate intense Joule heating (H ∝ I^2) and white-hot sparks that ignite nearby flammable walls",
        "Because electrons turn into carbon monoxide gas",
        "Because magnetic waves dissolve brick mortar",
        "Because water in the wires boils into steam"
      ],
      "answer": "Because massive short-circuit currents generate intense Joule heating (H ∝ I^2) and white-hot sparks that ignite nearby flammable walls",
      "explanation": "Currents reaching hundreds of amperes generate extreme I^2R thermal energy that vaporizes insulation and ignites building materials."
    }
  ]
}
modules_11_to_20.append(m19)

# ==========================================
# Module 20: Comprehensive Review & Mastery
# ==========================================
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Comprehensive Electromagnetism Review: Motors, Induction & Circuit Safety",
  "tagline": "Mastery synthesis of magnetic rules, motors vs generators, and domestic safety systems.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Master Summary of Hand Rules in Electromagnetism</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Rule</th><th>Hand</th><th>Used For</th><th>Mapping</th></tr></thead>
      <tbody>
        <tr><td><strong>Right-Hand Thumb Rule</strong></td><td>Right Hand</td><td>Direction of magnetic field around straight wire or circular loop</td><td>Thumb = Current ($I$); Curled Fingers = Field lines ($B$)</td></tr>
        <tr><td><strong>Fleming's Left-Hand Rule</strong></td><td><strong>Left Hand</strong></td><td><strong>Electric Motor</strong> (Mechanical force on current)</td><td>Thumb = Force ($F$); Forefinger = Field ($B$); Centre = Current ($I$)</td></tr>
        <tr><td><strong>Fleming's Right-Hand Rule</strong></td><td><strong>Right Hand</strong></td><td><strong>Electric Generator</strong> (Direction of induced current)</td><td>Thumb = Motion; Forefinger = Field ($B$); Centre = <strong>Induced Current</strong> ($I$)</td></tr>
      </tbody>
    </table>

    <h4>2. Synthesis of Electromagnetic Machinery & Safety</h4>
    <ul>
      <li><strong>Electric Motor:</strong> Converts Electrical $\rightarrow$ Mechanical energy using a split-ring commutator (reverses current every $180^\circ$).</li>
      <li><strong>Electromagnetic Induction (EMI):</strong> Relative motion between magnet and coil generates induced current ($e \propto \frac{d\Phi}{dt}$).</li>
      <li><strong>Transformers:</strong> Rely on mutual induction; operate strictly on Alternating Current (AC).</li>
      <li><strong>Domestic Safety:</strong> Live ($220\text{ V}$), Neutral ($0\text{ V}$), Earth ($0\text{ V}$); Earth wire protects against electrocution, while Fuses/MCBs protect against short-circuits and overloading.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Right-Hand Thumb: field direction around wires; Left Hand: Motors (motion); Right Hand: Generators (induced current).",
    "Commutator reverses current every $180^\\circ$ for continuous rotation in DC motors.",
    "Safety triad: Grounding wire (shock protection) + Fuse/MCB (fire and overcurrent protection) + Polarized switches."
  ],
  "keyNotes": [
    "Never mix up the hands on board exams: Motors use the LEFT hand; Generators use the RIGHT hand!"
  ],
  "questions": [
    get_bank_q(81, "m20_q01"),
    get_bank_q(82, "m20_q02"),
    get_bank_q(83, "m20_q03"),
    get_bank_q(84, "m20_q04"),
    get_bank_q(85, "m20_q05"),
    get_bank_q(86, "m20_q06"),
    get_bank_q(87, "m20_q07"),
    get_bank_q(88, "m20_q08"),
    get_bank_q(89, "m20_q09"),
    {
      "id": "m20_q10",
      "question": "A copper loop is placed in a horizontal magnetic field. In which orientation relative to the field lines does the loop experience MAXIMUM magnetic torque when carrying current?",
      "options": [
        "When the plane of the loop is PARALLEL to the magnetic field lines",
        "When the plane of the loop is PERPENDICULAR to the magnetic field lines",
        "When current is zero",
        "Torque is independent of orientation"
      ],
      "answer": "When the plane of the loop is PARALLEL to the magnetic field lines",
      "explanation": "When the loop plane is parallel to field lines, the angle between the normal to the loop and field is 90°, producing maximum torque (τ = NIAB)."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch12_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 12 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
