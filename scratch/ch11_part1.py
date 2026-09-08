# -*- coding: utf-8 -*-
"""
CH11 Part 1: Modules 1 to 10
Electricity (Class 10 Science)
"""
import json

with open('scratch/ch11_bank_questions.json', 'r', encoding='utf-8') as f:
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
# Module 1: Electric Charge & Electric Current
# ==========================================
m01 = {
  "id": "m01", "moduleNumber": 1,
  "title": "Electric Charge, Quantization of Charge & Electric Current",
  "tagline": "Fundamental charge e, Q = ne, rate of flow of charge I = Q/t, and the Ampere.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Electric Charge ($Q$) & Quantization</h4>
    <p><strong>Electric charge</strong> is an intrinsic fundamental property of subatomic particles that causes them to experience an electrostatic force. Charges exist in two polarities: positive (carried by protons) and negative (carried by electrons). The SI unit of electric charge is the <strong>coulomb (C)</strong>.</p>
    <p>Charge is quantized: any observable quantity of charge $Q$ is an integral multiple of the fundamental elementary charge $e \approx 1.6 \times 10^{-19}\text{ C}$:</p>
    $$Q = n \cdot e$$
    <p>Where $n$ is an integer ($1, 2, 3, \dots$). From this relation, the number of electrons constituting $1\text{ coulomb}$ of negative charge is:</p>
    $$n = \frac{Q}{e} = \frac{1\text{ C}}{1.6 \times 10^{-19}\text{ C}} = \mathbf{6.25 \times 10^{18}\text{ electrons}}$$

    <h4>2. Definition of Electric Current ($I$)</h4>
    <p><strong>Electric current</strong> is defined as the rate of flow of electric charge across any cross-section of a conductor in unit time:</p>
    $$I = \frac{Q}{t}$$
    <p>Where $I$ is electric current, $Q$ is net charge flowing, and $t$ is the time interval.</p>

    <h4>3. The SI Unit of Electric Current: The Ampere ($\text{A}$)</h4>
    <p>The SI unit of electric current is the <strong>ampere (A)</strong>, named in honour of French physicist André-Marie Ampère:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "1 ampere is constituted by the flow of 1 coulomb of charge through a conductor in 1 second ($1\text{ A} = 1\text{ C/s}$)."
    </blockquote>
    <p>Smaller sub-units commonly used in electronics:</p>
    <ul>
      <li>$1\text{ milliampere (mA)} = 10^{-3}\text{ A}$</li>
      <li>$1\text{ microampere (}\mu\text{A)} = 10^{-6}\text{ A}$</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Charge is quantized: $Q = ne$; $1\\text{ C}$ equals the charge of approximately $6.25 \\times 10^{18}$ electrons.",
    "Electric current is the rate of flow of charge: $I = Q/t$.",
    "The SI unit of current is the Ampere ($1\\text{ A} = 1\\text{ C/s}$)."
  ],
  "keyNotes": [
    "A steady current of 1 ampere flowing through a copper wire means that $6.25 \\times 10^{18}$ electrons pass through its cross-sectional area every single second!"
  ],
  "questions": [
    get_bank_q(1, "m01_q01"),
    get_bank_q(2, "m01_q02"),
    get_bank_q(3, "m01_q03"),
    get_bank_q(4, "m01_q04"),
    get_bank_q(5, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "How many electrons constitute a net electric charge of 1 Coulomb?",
      "options": ["6.25 × 10^18 electrons", "1.6 × 10^-19 electrons", "6.023 × 10^23 electrons", "1.0 × 10^6 electrons"],
      "answer": "6.25 × 10^18 electrons",
      "explanation": "n = Q / e = 1 / (1.6 × 10^-19) = 6.25 × 10^18 electrons."
    },
    {
      "id": "m01_q07",
      "question": "If an electric current of 0.5 A is drawn by a filament of an electric bulb for 10 minutes, what is the amount of electric charge that flows through the circuit?",
      "options": ["5 C", "300 C", "50 C", "3000 C"],
      "answer": "300 C",
      "explanation": "t = 10 minutes = 10 × 60 s = 600 s. Q = I × t = 0.5 A × 600 s = 300 C."
    },
    {
      "id": "m01_q08",
      "question": "What is the SI unit of electric charge?",
      "options": ["Ampere (A)", "Coulomb (C)", "Volt (V)", "Joule (J)"],
      "answer": "Coulomb (C)",
      "explanation": "The SI unit of electric charge is the coulomb, symbolized as C."
    },
    {
      "id": "m01_q09",
      "question": "A current of 1 milliampere (1 mA) is equal to how many amperes?",
      "options": ["10^-3 A", "10^-6 A", "10^3 A", "10^-1 A"],
      "answer": "10^-3 A",
      "explanation": "1 milliampere (mA) is one-thousandth of an ampere: 1 mA = 10^-3 A."
    },
    {
      "id": "m01_q10",
      "question": "What is the elementary charge carried by a single electron?",
      "options": ["-1.6 × 10^-19 C", "+1.6 × 10^-19 C", "-1.0 C", "-9.1 × 10^-31 C"],
      "answer": "-1.6 × 10^-19 C",
      "explanation": "The fundamental quantum of electric charge on an electron is -1.6 × 10^-19 coulombs."
    }
  ]
}
modules_1_to_10.append(m01)

# ==========================================
# Module 2: Direction of Current & Circuits
# ==========================================
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Direction of Electric Current vs Electron Drift & Circuit Diagrams",
  "tagline": "Conventional current from positive to negative vs physical electron drift from negative to positive.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Conventional Current vs Electronic Current</h4>
    <p>Electricity was discovered before the electron was identified by J.J. Thomson in 1897. Early scientists postulated that electricity consisted of a flow of positive charges:</p>
    <ul>
      <li><strong>Conventional Current Direction:</strong> By historical convention, the direction of electric current is defined as the direction in which positive charges would move—from the <strong>positive terminal ($+$) to the negative terminal ($-$)</strong> of the cell through the external circuit.</li>
      <li><strong>Actual Electron Flow (Electronic Current):</strong> In metallic conductors, the atomic nuclei and positive ions are anchored in a solid crystal lattice and cannot migrate. The actual mobile charge carriers are <strong>free electrons</strong> (negative charges) which drift from the <strong>negative terminal ($-$) to the positive terminal ($+$)</strong>.</li>
      <li>Therefore, conventional electric current is always <strong>opposite to the direction of electron drift</strong>.</li>
    </ul>

    <h4>2. Electric Circuits & Closed Loops</h4>
    <p>An <strong>electric circuit</strong> is a continuous and closed conducting loop through which an electric current flows. If the circuit is broken anywhere (e.g., an open switch or a broken filament), current ceases instantly.</p>

    <h4>3. Standard Circuit Symbols</h4>
    <ul>
      <li><strong>Electric Cell:</strong> Long thin vertical line (positive) and short thick vertical line (negative).</li>
      <li><strong>Battery:</strong> Series combination of two or more cells.</li>
      <li><strong>Plug Key (Open vs Closed):</strong> $( \quad )$ for open; $( \cdot )$ for closed.</li>
      <li><strong>Rheostat (Variable Resistor):</strong> Resistor with an arrow across or sliding contact on top.</li>
      <li><strong>Ammeter & Voltmeter:</strong> Circles enclosing letter 'A' and letter 'V' respectively.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Conventional current flows from positive ($+$) to negative ($-$) terminal through the external circuit.",
    "Electrons physically drift in the opposite direction, from negative ($-$) to positive ($+$) terminal.",
    "A continuous, closed conducting loop is required for electric current to flow."
  ],
  "keyNotes": [
    "Even though individual electron drift velocity in a wire is surprisingly slow (~1 mm/s), the electric field propagates through the circuit near the speed of light, causing appliances to turn on instantaneously!"
  ],
  "questions": [
    get_bank_q(6, "m02_q01"),
    get_bank_q(7, "m02_q02"),
    get_bank_q(21, "m02_q03"),
    get_bank_q(51, "m02_q04"),
    {
      "id": "m02_q05",
      "question": "What is the direction of conventional electric current in an external electrical circuit?",
      "options": [
        "From the positive terminal (+) to the negative terminal (-) of the battery",
        "From the negative terminal (-) to the positive terminal (+) of the battery",
        "From the ground to the sky",
        "It oscillates randomly in all directions"
      ],
      "answer": "From the positive terminal (+) to the negative terminal (-) of the battery",
      "explanation": "By international convention, current is defined as flowing from the positive terminal to the negative terminal."
    },
    {
      "id": "m02_q06",
      "question": "In a metallic copper wire carrying electric current, in what direction do the mobile free electrons physically move?",
      "options": [
        "From the positive terminal to the negative terminal",
        "From the negative terminal to the positive terminal (opposite to conventional current)",
        "They remain completely stationary and spin",
        "Perpendicular to the wire into the surrounding air"
      ],
      "answer": "From the negative terminal to the positive terminal (opposite to conventional current)",
      "explanation": "Negatively charged electrons are repelled by the negative terminal and attracted towards the positive terminal."
    },
    {
      "id": "m02_q07",
      "question": "What happens in an electric circuit when the switch (plug key) is opened?",
      "options": [
        "Current increases by 200%",
        "The conducting loop is broken and current ceases to flow instantly",
        "Electrons leak out onto the floor",
        "The battery voltage reverses"
      ],
      "answer": "The conducting loop is broken and current ceases to flow instantly",
      "explanation": "An open switch creates an infinite-resistance air gap, breaking the closed loop and halting current flow."
    },
    {
      "id": "m02_q08",
      "question": "What component in an electrical circuit is used to regulate current without changing the voltage source?",
      "options": ["Ammeter", "Rheostat (variable resistor)", "Voltmeter", "Electric fuse"],
      "answer": "Rheostat (variable resistor)",
      "explanation": "A rheostat provides an adjustable resistance to vary the circuit current smoothly without altering the power source."
    },
    {
      "id": "m02_q09",
      "question": "Why does an electric light bulb illuminate virtually instantaneously when the wall switch is closed, despite the slow drift speed of electrons (~1 mm/s)?",
      "options": [
        "Electrons jump through the air",
        "The electromagnetic field travels through the conducting wire at near the speed of light, mobilizing electrons everywhere simultaneously",
        "The filament stores spare light in advance",
        "The wall switch emits thermal photons"
      ],
      "answer": "The electromagnetic field travels through the conducting wire at near the speed of light, mobilizing electrons everywhere simultaneously",
      "explanation": "The electric field establishes almost instantaneously throughout the entire circuit, driving all conduction electrons concurrently."
    },
    {
      "id": "m02_q10",
      "question": "What are the mobile charge carriers responsible for electric current in metallic conductors?",
      "options": ["Protons", "Free conduction electrons", "Neutrons", "Positively charged ions"],
      "answer": "Free conduction electrons",
      "explanation": "In solid metals, outer valence electrons are delocalized, forming a mobile electron gas that drifts under an electric field."
    }
  ]
}
modules_1_to_10.append(m02)

# ==========================================
# Module 3: Electric Potential & Potential Difference
# ==========================================
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Electric Potential & Potential Difference ($V = W/Q$)",
  "tagline": "Electrostatic work done per unit charge, the Volt, and gravitational water-pipe analogy.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Water-Pipe Analogy: Why Do Charges Flow?</h4>
    <p>Water does not flow spontaneously through a perfectly horizontal copper tube. However, if one end of the tube is connected to an elevated tank, a <strong>pressure difference</strong> is created by gravity, and water gushes through. Similarly, electric charges do not flow through a metal wire on their own. For electrons to move in a conductor, there must be a difference of electric pressure—called <strong>potential difference</strong>.</p>

    <h4>2. Definition of Electric Potential Difference ($V$)</h4>
    <p>The <strong>electric potential difference</strong> between two points in an electric circuit is defined as the amount of work done ($W$) in moving a unit positive charge ($Q$) from one point to the other:</p>
    $$V = \frac{W}{Q}$$
    <p>Where $V$ is potential difference, $W$ is work done in joules, and $Q$ is electric charge in coulombs.</p>

    <h4>3. The SI Unit: The Volt ($\text{V}$)</h4>
    <p>The SI unit of electric potential difference is the <strong>volt (V)</strong>, named in honour of Italian physicist Alessandro Volta:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "1 volt is defined as the potential difference between two points in a current-carrying conductor when 1 joule of work is done in moving a charge of 1 coulomb from one point to the other ($1\text{ V} = 1\text{ J/C} = 1\text{ J}\cdot\text{C}^{-1}$)."
    </blockquote>

    <h4>4. How is Potential Difference Maintained?</h4>
    <p>A chemical <strong>cell or battery</strong> maintains a constant potential difference between its terminals through internal electrochemical reactions. Chemical energy is converted into electrical potential energy, driving electrons continuously through the external circuit.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Potential difference is the work done per unit charge moving between two points: $V = W/Q$.",
    "The SI unit of potential difference is the Volt ($1\\text{ V} = 1\\text{ J/C}$).",
    "Chemical reactions inside a battery maintain the potential difference across its terminals."
  ],
  "keyNotes": [
    "Charge always flows naturally from a region of higher potential (positive terminal) to a region of lower potential (negative terminal)."
  ],
  "questions": [
    get_bank_q(8, "m03_q01"),
    get_bank_q(9, "m03_q02"),
    get_bank_q(22, "m03_q03"),
    get_bank_q(52, "m03_q04"),
    {
      "id": "m03_q05",
      "question": "What is the SI unit of electric potential difference?",
      "options": ["Ampere (A)", "Volt (V)", "Ohm (Ω)", "Watt (W)"],
      "answer": "Volt (V)",
      "explanation": "The SI unit of potential difference is the volt, symbolized as V (where 1 V = 1 Joule / Coulomb)."
    },
    {
      "id": "m03_q06",
      "question": "How much work is done in moving a charge of 2 Coulombs across two points having a potential difference of 12 Volts?",
      "options": ["6 J", "24 J", "14 J", "10 J"],
      "answer": "24 J",
      "explanation": "W = V × Q = 12 V × 2 C = 24 Joules."
    },
    {
      "id": "m03_q07",
      "question": "Define 1 Volt of electric potential difference:",
      "options": [
        "The potential difference when 1 Joule of work is done in moving 1 Coulomb of charge",
        "The current flowing when 1 Ohm is connected to 1 Ampere",
        "The power dissipated by 1 Watt in 1 second",
        "The charge carried by 1 electron in 1 second"
      ],
      "answer": "The potential difference when 1 Joule of work is done in moving 1 Coulomb of charge",
      "explanation": "By definition, 1 V = 1 J / 1 C (1 joule of work per coulomb of charge)."
    },
    {
      "id": "m03_q08",
      "question": "What device is used in a circuit to maintain a constant potential difference across a conductor?",
      "options": ["A voltmeter", "An electric cell or battery", "An ammeter", "A resistor"],
      "answer": "An electric cell or battery",
      "explanation": "Electrochemical reactions inside a battery continuously regenerate the potential difference between its terminals."
    },
    {
      "id": "m03_q09",
      "question": "If 100 Joules of work is performed to transfer 20 Coulombs of charge from point A to point B, what is the potential difference between A and B?",
      "options": ["2000 V", "5 V", "0.2 V", "80 V"],
      "answer": "5 V",
      "explanation": "V = W / Q = 100 J / 20 C = 5 V."
    },
    {
      "id": "m03_q10",
      "question": "In the gravitational water-pipe analogy, electric potential difference corresponds directly to:",
      "options": ["Water flow rate", "Water pressure difference caused by height difference", "Diameter of the pipe", "Turbulence of water"],
      "answer": "Water pressure difference caused by height difference",
      "explanation": "Just as hydrostatic pressure drives water flow, electric potential difference (voltage) drives electric charge flow."
    }
  ]
}
modules_1_to_10.append(m03)

# ==========================================
# Module 4: Measuring Instruments: Ammeter & Voltmeter
# ==========================================
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Measuring Instruments: Ammeter vs Voltmeter Connection & Resistance",
  "tagline": "Series connection of low-resistance ammeter vs parallel connection of high-resistance voltmeter.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Ammeter (Measuring Electric Current)</h4>
    <p>An <strong>ammeter</strong> measures the electric current flowing through a circuit branch:</p>
    <ul>
      <li><strong>Connection:</strong> Always connected in <strong>SERIES</strong> with the component whose current is to be measured. All current flowing through the component must pass through the ammeter.</li>
      <li><strong>Internal Resistance:</strong> An ideal ammeter must have <strong>zero resistance</strong> (and a practical ammeter has extremely low resistance). If an ammeter had significant resistance, it would increase the total circuit resistance and falsely decrease the current it is trying to measure.</li>
    </ul>

    <h4>2. The Voltmeter (Measuring Potential Difference)</h4>
    <p>A <strong>voltmeter</strong> measures the electrical potential difference between two designated points:</p>
    <ul>
      <li><strong>Connection:</strong> Always connected in <strong>PARALLEL</strong> across the two points or component.</li>
      <li><strong>Internal Resistance:</strong> An ideal voltmeter must have <strong>infinite resistance</strong> (and a practical voltmeter has very high resistance). High resistance ensures that negligible current is drawn from the main circuit branch, preventing perturbation of the voltage being measured.</li>
    </ul>

    <h4>3. Summary of Differences</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Feature</th><th>Ammeter</th><th>Voltmeter</th></tr></thead>
      <tbody>
        <tr><td><strong>Measures</strong></td><td>Electric Current ($I$, Amperes)</td><td>Potential Difference ($V$, Volts)</td></tr>
        <tr><td><strong>Circuit Connection</strong></td><td><strong>Series</strong></td><td><strong>Parallel</strong></td></tr>
        <tr><td><strong>Internal Resistance</strong></td><td><strong>Extremely Low</strong> (Ideal: $R = 0$)</td><td><strong>Extremely High</strong> (Ideal: $R = \infty$)</td></tr>
      </tbody>
    </table>
  </div>
</div>
""",
  "pointsToRemember": [
    "An ammeter is connected in SERIES and has very LOW resistance (ideal: $0$).",
    "A voltmeter is connected in PARALLEL and has very HIGH resistance (ideal: $\\infty$).",
    "Reversing the connection (connecting ammeter in parallel) will cause a massive short circuit!"
  ],
  "keyNotes": [
    "Always connect the positive ($+$) terminal of an ammeter or voltmeter towards the positive pole of the battery, and the negative ($-$) terminal towards the negative pole."
  ],
  "questions": [
    get_bank_q(10, "m04_q01"),
    get_bank_q(23, "m04_q02"),
    get_bank_q(53, "m04_q03"),
    {
      "id": "m04_q04",
      "question": "How is an ammeter connected in an electric circuit to measure current?",
      "options": ["Always in parallel", "Always in series", "Across the battery terminals only", "Outside the room"],
      "answer": "Always in series",
      "explanation": "An ammeter must be placed in series so the entire current of the branch passes through its sensor."
    },
    {
      "id": "m04_q05",
      "question": "How is a voltmeter connected in an electric circuit to measure potential difference across a resistor?",
      "options": ["Always in series", "Always in parallel across the resistor", "Between ground and sky", "Directly inside the battery acid"],
      "answer": "Always in parallel across the resistor",
      "explanation": "A voltmeter is connected in parallel across the two points to measure the potential difference between them."
    },
    {
      "id": "m04_q06",
      "question": "What is the internal resistance of an IDEAL ammeter and an IDEAL voltmeter?",
      "options": [
        "Ammeter: Zero; Voltmeter: Infinite",
        "Ammeter: Infinite; Voltmeter: Zero",
        "Both have 100 Ohms",
        "Both have zero resistance"
      ],
      "answer": "Ammeter: Zero; Voltmeter: Infinite",
      "explanation": "An ideal ammeter has 0 Ω resistance so it doesn't change circuit current; an ideal voltmeter has ∞ Ω resistance so it draws zero current."
    },
    {
      "id": "m04_q07",
      "question": "What catastrophic mistake occurs if an ammeter (having very low resistance) is accidentally connected in PARALLEL across a battery?",
      "options": [
        "The voltmeter explodes",
        "A massive short-circuit current flows through the ammeter, which may burn out the meter and damage the battery",
        "The circuit current drops to zero permanently",
        "The battery voltage doubles"
      ],
      "answer": "A massive short-circuit current flows through the ammeter, which may burn out the meter and damage the battery",
      "explanation": "Low resistance across a voltage source causes excessive current (I = V/R), damaging the ammeter coil."
    },
    {
      "id": "m04_q08",
      "question": "What happens to the circuit current if a high-resistance voltmeter is accidentally connected in SERIES in a simple circuit?",
      "options": [
        "The current becomes dangerously high",
        "The total circuit resistance becomes enormous, causing the current to drop to nearly zero",
        "The bulb glows 10 times brighter",
        "The battery explodes"
      ],
      "answer": "The total circuit resistance becomes enormous, causing the current to drop to nearly zero",
      "explanation": "A voltmeter's huge internal resistance in series throttles the circuit current down to near zero."
    },
    {
      "id": "m04_q09",
      "question": "Why must an ammeter have low resistance?",
      "options": [
        "To prevent it from altering the actual current flowing in the circuit",
        "To make it lighter in weight",
        "To allow it to measure voltage as well",
        "To reduce battery chemical reactions"
      ],
      "answer": "To prevent it from altering the actual current flowing in the circuit",
      "explanation": "Adding series resistance alters total circuit impedance; keeping it near zero ensures the ammeter measures true undisturbed current."
    },
    {
      "id": "m04_q10",
      "question": "A milliammeter has a range of 0 to 500 mA with 50 divisions on its scale. What is its least count?",
      "options": ["10 mA", "1 mA", "5 mA", "0.1 mA"],
      "answer": "10 mA",
      "explanation": "Least count = Total range / Number of divisions = 500 mA / 50 = 10 mA per division."
    }
  ]
}
modules_1_to_10.append(m04)

# ==========================================
# Module 5: Ohm's Law & V-I Graphs
# ==========================================
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Ohm's Law: Mathematical Formulation ($V = IR$) & The V-I Graph",
  "tagline": "Direct proportionality between V and I, linear V-I graphs, and the concept of electrical resistance.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Georg Simon Ohm's Discovery (1827)</h4>
    <p>German physicist Georg Simon Ohm conducted precise experiments investigating the relationship between the potential difference across a metallic conductor and the resulting current flowing through it. He formulated <strong>Ohm's Law</strong>:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "The electric current flowing through a metallic conductor is directly proportional to the potential difference applied across its ends, provided its temperature and other physical conditions remain constant."
    </blockquote>
    $$V \propto I \quad \implies \quad \frac{V}{I} = \text{constant} = R$$
    $$V = I \cdot R$$
    <p>Where the proportionality constant $R$ is called the <strong>electrical resistance</strong> of the conductor.</p>

    <h4>2. The V-I Characteristic Graph</h4>
    <p>If we plot a graph of potential difference ($V$) along the $y$-axis against current ($I$) along the $x$-axis for a metallic conductor at constant temperature:</p>
    <ul>
      <li>The graph is a <strong>straight line passing through the origin $(0,0)$</strong>.</li>
      <li>The <strong>slope of the $V\text{-}I$ graph</strong> represents the electrical resistance ($R$) of the conductor:
        $$\text{Slope} = \frac{\Delta V}{\Delta I} = R$$
      </li>
      <li>Conductors that obey Ohm's law with a straight-line graph are called <strong>ohmic conductors</strong> (e.g., metals, nichrome wire). Devices where the $V\text{-}I$ graph is non-linear (e.g., diodes, transistors) are called <strong>non-ohmic conductors</strong>.</li>
    </ul>

    <h4>3. SI Unit of Resistance: The Ohm ($\Omega$)</h4>
    <p>The SI unit of resistance is the <strong>ohm</strong>, symbolized by the Greek capital letter $\mathbf{\Omega}$:</p>
    $$1\ \Omega = \frac{1\text{ Volt}}{1\text{ Ampere}} = 1\text{ V/A}$$
  </div>
</div>
""",
  "pointsToRemember": [
    "Ohm's Law: $V = IR$ at constant temperature and physical dimensions.",
    "The $V\\text{-}I$ graph for an ohmic conductor is a straight line through the origin; its slope equals resistance $R$.",
    "SI unit of resistance is the Ohm ($\\Omega$): $1\\ \\Omega = 1\\text{ V}/1\\text{ A}$."
  ],
  "keyNotes": [
    "Temperature must remain constant for Ohm's law to hold; if a filament gets red-hot, its resistance increases and the V-I curve bends upwards away from linearity."
  ],
  "questions": [
    get_bank_q(11, "m05_q01"),
    get_bank_q(12, "m05_q02"),
    get_bank_q(24, "m05_q03"),
    get_bank_q(54, "m05_q04"),
    {
      "id": "m05_q05",
      "question": "What is the mathematical formulation of Ohm's Law?",
      "options": ["V = I / R", "V = I × R", "I = V × R", "R = V × I"],
      "answer": "V = I × R",
      "explanation": "Ohm's law states that potential difference equals current multiplied by resistance: V = IR."
    },
    {
      "id": "m05_q06",
      "question": "What does the slope of a linear Potential Difference vs Current (V-I) graph represent?",
      "options": ["Electric charge", "Electrical resistance (R)", "Electric power", "Heat energy"],
      "answer": "Electrical resistance (R)",
      "explanation": "Slope = ΔV / ΔI = R, which represents the resistance of the metallic conductor."
    },
    {
      "id": "m05_q07",
      "question": "Under what essential physical condition does Ohm's Law hold strictly true for a metallic conductor?",
      "options": [
        "Temperature and physical state of the conductor must remain constant",
        "It must be placed in a magnetic field",
        "Current must be greater than 100 Amperes",
        "Light must shine on the wire"
      ],
      "answer": "Temperature and physical state of the conductor must remain constant",
      "explanation": "Resistance changes with temperature; Ohm's law strictly applies only when temperature and dimensions remain unchanged."
    },
    {
      "id": "m05_q08",
      "question": "What is the resistance of an electric lamp if a potential difference of 220 V draws a current of 0.5 A?",
      "options": ["110 Ω", "440 Ω", "220 Ω", "55 Ω"],
      "answer": "440 Ω",
      "explanation": "R = V / I = 220 V / 0.5 A = 440 Ω."
    },
    {
      "id": "m05_q09",
      "question": "Define 1 Ohm (1 Ω) of electrical resistance:",
      "options": [
        "The resistance of a conductor through which a current of 1 A flows when 1 V potential difference is maintained across its ends",
        "The resistance of 1 meter of copper wire",
        "The power dissipated by 1 Watt in 1 second",
        "The charge of 6.25 × 10^18 electrons"
      ],
      "answer": "The resistance of a conductor through which a current of 1 A flows when 1 V potential difference is maintained across its ends",
      "explanation": "1 Ω = 1 V / 1 A, by definition of the SI unit of resistance."
    },
    {
      "id": "m05_q10",
      "question": "If the potential difference across a constant resistor is doubled, what happens to the current flowing through it?",
      "options": ["It is halved", "It doubles", "It quadruples", "It remains unchanged"],
      "answer": "It doubles",
      "explanation": "According to Ohm's law (I = V/R), current is directly proportional to voltage, so doubling V doubles I."
    }
  ]
}
modules_1_to_10.append(m05)

# ==========================================
# Module 6: Factors Affecting Resistance (R = rho * l / A)
# ==========================================
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "Factors Affecting Electrical Resistance ($R = \\rho l / A$)",
  "tagline": "Dependence of resistance on conductor length, cross-sectional area, material nature, and temperature.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Electrical Resistance?</h4>
    <p><strong>Resistance</strong> is the property of a conductor by virtue of which it opposes the flow of electric charges through it. At the microscopic level, drifting electrons continuously collide with vibrating lattice ions, losing kinetic energy and facing resistance.</p>

    <h4>2. The Four Determinative Factors of Resistance</h4>
    <p>Systematic laboratory experiments prove that the electrical resistance ($R$) of a uniform metallic conductor depends on four distinct factors:</p>
    <ol>
      <li><strong>Length of the Conductor ($l$):</strong> Resistance is <strong>directly proportional</strong> to length:
        $$R \propto l$$
        Doubling the length doubles the number of ion collisions, doubling resistance.
      </li>
      <li><strong>Cross-Sectional Area ($A$):</strong> Resistance is <strong>inversely proportional</strong> to cross-sectional area (thickness):
        $$R \propto \frac{1}{A} \quad \left(\text{or } R \propto \frac{1}{r^2} \text{ where } r \text{ is radius}\right)$$
        A thicker wire provides a wider path with more free electrons, offering less resistance.
      </li>
      <li><strong>Nature of the Material:</strong> Different metals possess differing free electron densities and lattice structures, characterized by <strong>electrical resistivity ($\rho$)</strong>.</li>
      <li><strong>Temperature:</strong> For pure metallic conductors, resistance <strong>increases with increasing temperature</strong> due to enhanced thermal lattice vibrations.</li>
    </ol>

    <h4>3. The Master Resistance Formula</h4>
    <p>Combining the geometric dependencies yields:</p>
    $$R = \rho \frac{l}{A} = \rho \frac{l}{\pi r^2}$$
    <p>Where $\rho$ (rho) is the specific electrical resistivity of the material.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Resistance is directly proportional to length: $R \\propto l$.",
    "Resistance is inversely proportional to cross-sectional area: $R \\propto 1/A$.",
    "Master resistance equation: $R = \\rho \\frac{l}{A}$.",
    "Resistance of pure metals increases with temperature."
  ],
  "keyNotes": [
    "If a wire is stretched to double its length, its volume remains constant ($V = A \\cdot l$), so its area is halved ($A' = A/2$), causing its resistance to increase by a factor of FOUR ($R' = 4R$)!"
  ],
  "questions": [
    get_bank_q(13, "m06_q01"),
    get_bank_q(14, "m06_q02"),
    get_bank_q(25, "m06_q03"),
    get_bank_q(55, "m06_q04"),
    {
      "id": "m06_q05",
      "question": "How does the electrical resistance of a uniform metallic wire change if its length is doubled while keeping its thickness constant?",
      "options": ["It is halved", "It doubles (2R)", "It quadruples (4R)", "It remains unchanged"],
      "answer": "It doubles (2R)",
      "explanation": "Since R ∝ l, doubling length at constant cross-sectional area directly doubles resistance."
    },
    {
      "id": "m06_q06",
      "question": "Between a thick wire and a thin wire of the same material and length, which one offers LESS resistance to current flow?",
      "options": [
        "The thick wire offers less resistance",
        "The thin wire offers less resistance",
        "Both offer identical resistance",
        "It depends on atmospheric humidity"
      ],
      "answer": "The thick wire offers less resistance",
      "explanation": "Resistance is inversely proportional to cross-sectional area (R ∝ 1/A); a thicker wire provides a wider path and lower resistance."
    },
    {
      "id": "m06_q07",
      "question": "A cylindrical wire of resistance R is stretched mechanically so that its length is doubled without changing its mass. What is its new resistance?",
      "options": ["2R", "4R", "R/2", "R/4"],
      "answer": "4R",
      "explanation": "Volume is constant: when length doubles (l' = 2l), area is halved (A' = A/2). New resistance R' = ρ(2l)/(A/2) = 4(ρl/A) = 4R."
    },
    {
      "id": "m06_q08",
      "question": "If the radius of a metallic wire is halved while its length remains constant, how does its resistance change?",
      "options": ["It increases by 2 times", "It increases by 4 times", "It increases by 16 times", "It is halved"],
      "answer": "It increases by 4 times",
      "explanation": "Area A = πr^2. Halving radius makes A' = π(r/2)^2 = A/4. Since R ∝ 1/A, resistance increases by 4 times."
    },
    {
      "id": "m06_q09",
      "question": "How does increasing the temperature affect the electrical resistance of pure metallic conductors like copper and aluminium?",
      "options": [
        "Resistance decreases",
        "Resistance increases because thermal vibrations of lattice ions increase collisions with electrons",
        "Resistance drops to zero",
        "Resistance remains strictly constant"
      ],
      "answer": "Resistance increases because thermal vibrations of lattice ions increase collisions with electrons",
      "explanation": "Heating increases amplitude of metallic lattice ion vibrations, causing more frequent collisions and higher resistance."
    },
    {
      "id": "m06_q10",
      "question": "Which mathematical equation correctly relates resistance (R), resistivity (ρ), length (l), and cross-sectional area (A)?",
      "options": ["R = ρ × l / A", "R = ρ × A / l", "R = l × A / ρ", "ρ = R × l / A"],
      "answer": "R = ρ × l / A",
      "explanation": "Resistance is directly proportional to length and inversely proportional to area: R = ρl/A."
    }
  ]
}
modules_1_to_10.append(m06)

# ==========================================
# Module 7: Electrical Resistivity
# ==========================================
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Electrical Resistivity ($\\rho$): The Intrinsic Material Property",
  "tagline": "Specific resistance, SI unit Ohm-metre (Ω·m), and conductors, alloys vs insulators.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Definition of Electrical Resistivity ($\rho$)</h4>
    <p>From the resistance formula $R = \rho \frac{l}{A}$, solving for $\rho$ gives:</p>
    $$\rho = R \frac{A}{l}$$
    <p>If we consider a specimen of a material with unit length ($l = 1\text{ m}$) and unit cross-sectional area ($A = 1\text{ m}^2$):</p>
    $$\rho = R$$
    <p>Hence, <strong>electrical resistivity</strong> (or specific resistance) of a substance is numerically equal to the resistance offered by a unit cube ($1\text{ m} \times 1\text{ m} \times 1\text{ m}$) of that material across opposing faces.</p>

    <h4>2. SI Unit of Electrical Resistivity: The Ohm-metre ($\Omega\cdot\text{m}$)</h4>
    $$\text{Unit of } \rho = \frac{\Omega \cdot \text{m}^2}{\text{m}} = \mathbf{\Omega\cdot\text{m}}$$

    <h4>3. Classification of Materials by Resistivity</h4>
    <ul>
      <li><strong>Conductors (Metals):</strong> Extremely low resistivity in the range of $10^{-8}\ \Omega\cdot\text{m}\text{ to }10^{-6}\ \Omega\cdot\text{m}$.
        <ul>
          <li><strong>Silver ($\rho \approx 1.60 \times 10^{-8}\ \Omega\cdot\text{m}$):</strong> Best electrical conductor.</li>
          <li><strong>Copper ($\rho \approx 1.62 \times 10^{-8}\ \Omega\cdot\text{m}$) & Aluminium:</strong> Used universally for domestic transmission cables.</li>
        </ul>
      </li>
      <li><strong>Alloys (e.g., Nichrome, Manganin, Constantan):</strong> Higher resistivity than constituent metals ($10^{-6}\ \Omega\cdot\text{m}$). They do not oxidize (burn) readily even at high red-hot temperatures ($>800^\circ\text{C}$), making them ideal for heating elements.</li>
      <li><strong>Insulators (e.g., Glass, Hard Rubber):</strong> Enormously high resistivity in the range of $10^{12}\ \Omega\cdot\text{m}\text{ to }10^{17}\ \Omega\cdot\text{m}$.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Resistivity ($\\rho$) is an intrinsic material property; it does NOT depend on wire length or thickness.",
    "The SI unit of electrical resistivity is the Ohm-metre ($\\Omega\\cdot\\text{m}$).",
    "Silver is the best electrical conductor; copper/aluminium are used for wiring; nichrome alloy is used for heating elements."
  ],
  "keyNotes": [
    "Resistance changes when you cut or stretch a wire, but electrical resistivity ($\\rho$) remains completely unchanged because resistivity depends only on material and temperature!"
  ],
  "questions": [
    get_bank_q(15, "m07_q01"),
    get_bank_q(16, "m07_q02"),
    get_bank_q(26, "m07_q03"),
    get_bank_q(56, "m07_q04"),
    {
      "id": "m07_q05",
      "question": "What is the SI unit of electrical resistivity?",
      "options": ["Ohm (Ω)", "Ohm-metre (Ω·m)", "Ohm / metre (Ω/m)", "Siemens / metre"],
      "answer": "Ohm-metre (Ω·m)",
      "explanation": "From ρ = R·A/l = (Ω·m²)/m = Ω·m, the SI unit of resistivity is the ohm-metre."
    },
    {
      "id": "m07_q06",
      "question": "If a copper wire of length l and area A is cut into two equal halves, what happens to the electrical RESISTIVITY of each piece?",
      "options": [
        "It is halved",
        "It doubles",
        "It remains completely unchanged",
        "It becomes zero"
      ],
      "answer": "It remains completely unchanged",
      "explanation": "Resistivity is an intensive material property that depends only on the chemical nature of the metal and temperature, not on dimensions."
    },
    {
      "id": "m07_q07",
      "question": "Which of the following metals has the lowest electrical resistivity, making it the best known electrical conductor?",
      "options": ["Copper", "Silver", "Gold", "Aluminium"],
      "answer": "Silver",
      "explanation": "Silver has the lowest resistivity (~1.60 × 10^-8 Ω·m), making it the superior electrical conductor."
    },
    {
      "id": "m07_q08",
      "question": "Why are copper and aluminium preferred for commercial electric transmission lines rather than silver?",
      "options": [
        "Silver cannot conduct electricity",
        "Silver is too expensive and precious, whereas copper and aluminium are abundant, economical, and have very low resistivity",
        "Copper is lighter than air",
        "Aluminium does not have electrons"
      ],
      "answer": "Silver is too expensive and precious, whereas copper and aluminium are abundant, economical, and have very low resistivity",
      "explanation": "While silver is slightly better, copper and aluminium provide outstanding conductivity at a fraction of the cost."
    },
    {
      "id": "m07_q09",
      "question": "What is the typical order of magnitude of electrical resistivity for good metallic conductors?",
      "options": ["10^-8 to 10^-6 Ω·m", "10^12 to 10^17 Ω·m", "10^2 to 10^4 Ω·m", "1.0 Ω·m"],
      "answer": "10^-8 to 10^-6 Ω·m",
      "explanation": "Metals have very low resistivities ranging from 10^-8 to 10^-6 Ω·m, allowing easy charge transport."
    },
    {
      "id": "m07_q10",
      "question": "What two physical parameters solely determine the electrical resistivity of a given pure substance?",
      "options": [
        "Length and cross-sectional area of the wire",
        "Nature of the material and temperature",
        "Battery voltage and current",
        "Atmospheric pressure and altitude"
      ],
      "answer": "Nature of the material and temperature",
      "explanation": "Resistivity is an intrinsic property governed strictly by the material's atomic structure and its thermal temperature."
    }
  ]
}
modules_1_to_10.append(m07)

# ==========================================
# Module 8: Resistors in Series
# ==========================================
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Resistors in Series: Current Invariance & Equivalent Resistance ($R_s$)",
  "tagline": "Single conducting pathway, identical current throughout, voltage addition, and Rs = R1 + R2 + R3.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Definition of a Series Combination</h4>
    <p>Two or more resistors are said to be connected in <strong>series</strong> when they are joined end-to-end consecutively so that there is only a <strong>single continuous conducting path</strong> for electric current to flow from the source through all the resistors.</p>

    <h4>2. Fundamental Laws of Series Circuits</h4>
    <ol>
      <li><strong>Current Invariance ($I$ is Constant):</strong> The electric current ($I$) flowing through each individual resistor in series is <strong>strictly identical</strong>, because electric charge cannot accumulate or leak along the single pathway:
        $$I = I_1 = I_2 = I_3$$
      </li>
      <li><strong>Voltage Division ($V$ Adds Up):</strong> The total potential difference ($V$) applied across the combination equals the sum of the individual potential drops across each resistor:
        $$V = V_1 + V_2 + V_3$$
      </li>
    </ol>

    <h4>3. Derivation of Equivalent Resistance ($R_s$)</h4>
    <p>Applying Ohm's law to each resistor:</p>
    $$V_1 = I R_1, \quad V_2 = I R_2, \quad V_3 = I R_3$$
    <p>If $R_s$ is the equivalent resistance of the series combination, then $V = I R_s$. Substituting into the voltage addition equation:</p>
    $$I R_s = I R_1 + I R_2 + I R_3$$
    <p>Dividing throughout by the common current $I$:</p>
    $$\mathbf{R_s = R_1 + R_2 + R_3}$$
    <p>For $n$ identical resistors of resistance $R$ in series: $R_s = n \cdot R$.</p>
    <p><em>Conclusion:</em> The equivalent resistance of a series combination is <strong>always greater than the highest individual resistance</strong> in the circuit.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "In a series circuit, the current ($I$) through all resistors is strictly identical.",
    "The total voltage equals the sum of individual voltage drops: $V = V_1 + V_2 + V_3$.",
    "Equivalent series resistance is the sum: $R_s = R_1 + R_2 + R_3$.",
    "$R_s$ is always larger than the greatest individual resistor in the combination."
  ],
  "keyNotes": [
    "The potential difference divides across series resistors in direct proportion to their resistances ($V_1 : V_2 = R_1 : R_2$)."
  ],
  "questions": [
    get_bank_q(17, "m08_q01"),
    get_bank_q(18, "m08_q02"),
    get_bank_q(27, "m08_q03"),
    get_bank_q(57, "m08_q04"),
    {
      "id": "m08_q05",
      "question": "What is the equivalent resistance of three resistors of 2 Ω, 3 Ω, and 5 Ω connected in series?",
      "options": ["10 Ω", "1 Ω", "30 Ω", "0.97 Ω"],
      "answer": "10 Ω",
      "explanation": "In series, equivalent resistance is the algebraic sum: Rs = R1 + R2 + R3 = 2 + 3 + 5 = 10 Ω."
    },
    {
      "id": "m08_q06",
      "question": "What physical quantity remains strictly IDENTICAL through every resistor connected in a series circuit?",
      "options": ["Electric current (I)", "Potential difference (V)", "Power consumed", "Heat energy"],
      "answer": "Electric current (I)",
      "explanation": "Because there is only one pathway for charge, the current flowing through every series component is identical."
    },
    {
      "id": "m08_q07",
      "question": "If an electric lamp of resistance 20 Ω and a conductor of resistance 4 Ω are connected in series to a 6 V battery, what is the total circuit current?",
      "options": ["0.25 A", "1.5 A", "0.5 A", "2.4 A"],
      "answer": "0.25 A",
      "explanation": "Rs = 20 + 4 = 24 Ω. By Ohm's law, I = V / Rs = 6 V / 24 Ω = 0.25 A."
    },
    {
      "id": "m08_q08",
      "question": "In the circuit above (I = 0.25 A, R_lamp = 20 Ω, R_conductor = 4 Ω), what is the potential difference across the electric lamp?",
      "options": ["5 V", "1 V", "6 V", "4 V"],
      "answer": "5 V",
      "explanation": "V_lamp = I × R_lamp = 0.25 A × 20 Ω = 5 V. (The remaining 1 V drops across the 4 Ω conductor)."
    },
    {
      "id": "m08_q09",
      "question": "If n identical resistors each of resistance R are connected in series, what is the equivalent resistance of the combination?",
      "options": ["n × R", "R / n", "n^2 × R", "R / n^2"],
      "answer": "n × R",
      "explanation": "Rs = R + R + ... (n times) = nR."
    },
    {
      "id": "m08_q10",
      "question": "How does the equivalent resistance of a series combination compare to the individual resistors?",
      "options": [
        "It is always smaller than the smallest resistor",
        "It is always larger than the greatest individual resistance in the combination",
        "It is the geometric mean",
        "It equals zero"
      ],
      "answer": "It is always larger than the greatest individual resistance in the combination",
      "explanation": "Because resistors add directly in series, Rs is strictly greater than any individual resistance in the group."
    }
  ]
}
modules_1_to_10.append(m08)

# ==========================================
# Module 9: Resistors in Parallel
# ==========================================
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Resistors in Parallel: Voltage Invariance & Equivalent Resistance ($R_p$)",
  "tagline": "Multiple conducting branches, common voltage V, current splitting, and 1/Rp = 1/R1 + 1/R2 + 1/R3.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Definition of a Parallel Combination</h4>
    <p>Resistors are connected in <strong>parallel</strong> when they are connected across the same two common junction points, providing <strong>multiple alternative conducting branches</strong> for electric current.</p>

    <h4>2. Fundamental Laws of Parallel Circuits</h4>
    <ol>
      <li><strong>Voltage Invariance ($V$ is Constant):</strong> The potential difference ($V$) across each individual parallel branch is <strong>strictly identical</strong> and equal to the applied voltage of the power source:
        $$V = V_1 = V_2 = V_3$$
      </li>
      <li><strong>Current Division ($I$ Adds Up):</strong> The total current ($I$) entering the junction splits among the branches according to their individual resistances:
        $$I = I_1 + I_2 + I_3$$
      </li>
    </ol>

    <h4>3. Derivation of Equivalent Resistance ($R_p$)</h4>
    <p>Applying Ohm's law to each branch:</p>
    $$I_1 = \frac{V}{R_1}, \quad I_2 = \frac{V}{R_2}, \quad I_3 = \frac{V}{R_3}$$
    <p>If $R_p$ is the equivalent resistance, then $I = \frac{V}{R_p}$. Substituting into the current equation:</p>
    $$\frac{V}{R_p} = \frac{V}{R_1} + \frac{V}{R_2} + \frac{V}{R_3}$$
    <p>Dividing throughout by the common potential difference $V$:</p>
    $$\mathbf{\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}}$$

    <h4>4. Two Resistors in Parallel (Shortcut Formula)</h4>
    $$R_p = \frac{R_1 R_2}{R_1 + R_2} = \frac{\text{Product}}{\text{Sum}}$$
    <p>For $n$ identical resistors of resistance $R$ in parallel: $R_p = \frac{R}{n}$.</p>
    <p><em>Conclusion:</em> The equivalent resistance of a parallel circuit is <strong>always smaller than the smallest individual resistance</strong> in the group!</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "In a parallel circuit, the voltage ($V$) across all branches is strictly identical.",
    "Total current is the sum of branch currents: $I = I_1 + I_2 + I_3$.",
    "Reciprocal formula: $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$.",
    "$R_p$ is always smaller than the smallest individual resistor in the combination."
  ],
  "keyNotes": [
    "Current splits in parallel inversely proportional to resistance: lower resistance branches carry the lion's share of current."
  ],
  "questions": [
    get_bank_q(19, "m09_q01"),
    get_bank_q(28, "m09_q02"),
    get_bank_q(58, "m09_q03"),
    {
      "id": "m09_q04",
      "question": "What is the equivalent resistance of two resistors of 6 Ω and 3 Ω connected in parallel?",
      "options": ["9 Ω", "2 Ω", "0.5 Ω", "18 Ω"],
      "answer": "2 Ω",
      "explanation": "Rp = (R1 × R2) / (R1 + R2) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω."
    },
    {
      "id": "m09_q05",
      "question": "What physical quantity remains strictly CONSTANT across each resistor in a parallel circuit?",
      "options": ["Electric current", "Potential difference (Voltage)", "Power consumed", "Electric charge flow rate"],
      "answer": "Potential difference (Voltage)",
      "explanation": "Because all parallel resistors connect across the same two common nodes, the potential difference across each is identical."
    },
    {
      "id": "m09_q06",
      "question": "How does the equivalent resistance of a parallel combination compare to the individual resistors?",
      "options": [
        "It is always smaller than the smallest individual resistor in the combination",
        "It is always greater than the largest resistor",
        "It equals the average of the resistors",
        "It is infinite"
      ],
      "answer": "It is always smaller than the smallest individual resistor in the combination",
      "explanation": "Adding parallel paths provides more conduits for charge flow, reducing total resistance below that of any single branch."
    },
    {
      "id": "m09_q07",
      "question": "If five identical resistors each of 10 Ω are connected in parallel, what is the effective resistance?",
      "options": ["50 Ω", "2 Ω", "10 Ω", "0.5 Ω"],
      "answer": "2 Ω",
      "explanation": "Rp = R / n = 10 Ω / 5 = 2 Ω."
    },
    {
      "id": "m09_q08",
      "question": "In a parallel circuit consisting of a 10 Ω resistor and a 1000 Ω resistor, where does the majority of current flow?",
      "options": [
        "Equally through both",
        "Nearly all current flows through the low-resistance 10 Ω branch",
        "Current flows only through the 1000 Ω resistor",
        "No current flows"
      ],
      "answer": "Nearly all current flows through the low-resistance 10 Ω branch",
      "explanation": "Current divides inversely proportional to resistance (I = V/R), concentrating in the path of least resistance."
    },
    {
      "id": "m09_q09",
      "question": "What is the equivalent resistance of three resistors of 1 Ω, 10^3 Ω, and 10^6 Ω connected in parallel?",
      "options": [
        "Slightly less than 1 Ω",
        "10^6 Ω",
        "10^3 Ω",
        "Zero"
      ],
      "answer": "Slightly less than 1 Ω",
      "explanation": "The equivalent resistance in parallel is always strictly less than the smallest individual resistor, so Rp < 1 Ω."
    },
    {
      "id": "m09_q10",
      "question": "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. What is the total current drawn from the battery?",
      "options": ["1 A", "4 A", "12 A", "0.5 A"],
      "answer": "4 A",
      "explanation": "1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 => Rp = 3 Ω. Total current I = V / Rp = 12 V / 3 Ω = 4 A."
    }
  ]
}
modules_1_to_10.append(m09)

# ==========================================
# Module 10: Series vs Parallel in Domestic Wiring
# ==========================================
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Domestic Electrical Circuits: Why Parallel Wiring is Essential",
  "tagline": "Independent appliance operation, constant 220V supply, low total resistance vs fatal series flaws.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Major Disadvantages of Series Wiring in Homes</h4>
    <p>In domestic electrical circuits, household appliances are <strong>never connected in series</strong> because of several critical engineering drawbacks:</p>
    <ul>
      <li><strong>1. Single Point of Failure:</strong> In a series circuit, if one appliance burns out, fails, or is switched off, the entire circuit is broken, and <strong>all other appliances turn off simultaneously</strong>. (A classic frustration with old-fashioned decorative fairy lights!).</li>
      <li><strong>2. No Independent Switching:</strong> All appliances must share a single master switch. It is impossible to turn on the refrigerator without also running the television and air conditioner!</li>
      <li><strong>3. Voltage Division:</strong> In series, the total $220\text{ V}$ mains voltage is partitioned among all appliances. High-power appliances (like heaters) would receive very little voltage and fail to operate.</li>
      <li><strong>4. Different Current Requirements:</strong> An electric bulb requires only $\sim 0.5\text{ A}$, while an electric heater requires $\sim 10\text{ A}$. In series, forced identical current means either the bulb explodes or the heater fails to warm up!</li>
    </ul>

    <h4>2. The Decisive Advantages of Parallel Domestic Wiring</h4>
    <ol>
      <li><strong>Full Operating Voltage:</strong> Every single appliance receives the full, uncompromised mains potential difference of <strong>$220\text{ V}$</strong>.</li>
      <li><strong>Independent Control:</strong> Each appliance has its own dedicated switch and can be operated or turned off independently without affecting others.</li>
      <li><strong>Tailored Current Supply:</strong> Appliances draw current based solely on their own resistance ($I = V/R$), ensuring proper operation.</li>
      <li><strong>Fault Isolation:</strong> If one light bulb fuses, all other lights and fans continue operating smoothly.</li>
      <li><strong>Lower Overall Resistance:</strong> Parallel circuits keep total equivalent resistance low, minimizing energy wastage in wiring.</li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "Domestic wiring is strictly PARALLEL: every appliance receives the full $220\\text{ V}$ mains voltage.",
    "Parallel connection allows independent switching and isolates faults.",
    "Series wiring fails at home because one burnt bulb kills the entire circuit and appliances receive divided voltage."
  ],
  "keyNotes": [
    "Decorative festive fairy lights use series connections to save copper wire cost, but finding one blown bulb requires testing every single bulb along the string!"
  ],
  "questions": [
    get_bank_q(20, "m10_q01"),
    get_bank_q(29, "m10_q02"),
    get_bank_q(59, "m10_q03"),
    {
      "id": "m10_q04",
      "question": "Why are domestic electrical appliances in a house connected in PARALLEL rather than in series?",
      "options": [
        "To make wires look neat",
        "So each appliance receives the full 220 V mains voltage and can be switched ON/OFF independently without affecting other devices",
        "To double the electricity bill",
        "Because series wires are banned by law"
      ],
      "answer": "So each appliance receives the full 220 V mains voltage and can be switched ON/OFF independently without affecting other devices",
      "explanation": "Parallel wiring provides full mains voltage to all devices and prevents one faulty appliance from cutting power to the whole house."
    },
    {
      "id": "m10_q05",
      "question": "What happens in a series circuit if one bulb's filament burns out and fuses?",
      "options": [
        "All other bulbs glow twice as bright",
        "The entire circuit is broken and all other bulbs go off immediately",
        "Only that bulb turns blue",
        "The battery voltage drops to zero"
      ],
      "answer": "The entire circuit is broken and all other bulbs go off immediately",
      "explanation": "In a series circuit, there is only one conducting pathway; a single break halts current to all components."
    },
    {
      "id": "m10_q06",
      "question": "What is the standard alternating potential difference (voltage) supplied to domestic households in India?",
      "options": ["110 V", "220 V", "440 V", "12 V"],
      "answer": "220 V",
      "explanation": "In India, standard domestic AC electricity is supplied at 220 V at a frequency of 50 Hz."
    },
    {
      "id": "m10_q07",
      "question": "Why is it impractical to connect an electric bulb (current requirement ~0.5 A) and an electric heater (current requirement ~10 A) in series?",
      "options": [
        "Because both devices require identical voltage and resistance",
        "Because a series circuit forces the same current through both; 0.5 A is too low for the heater to work, while 10 A would burn out the bulb",
        "Because heater coils emit magnetic fields that break glass",
        "Because the bulb would absorb the heater's water"
      ],
      "answer": "Because a series circuit forces the same current through both; 0.5 A is too low for the heater to work, while 10 A would burn out the bulb",
      "explanation": "In series, identical current cannot satisfy the vastly differing current demands of bulbs vs heavy heating appliances."
    },
    {
      "id": "m10_q08",
      "question": "What happens to the total equivalent resistance of a house's electrical installation when more electrical appliances are switched ON in parallel?",
      "options": [
        "Total resistance decreases, allowing more total current to be drawn from the mains",
        "Total resistance increases infinitely",
        "Total resistance remains constant at 220 Ω",
        "Voltage drops to zero"
      ],
      "answer": "Total resistance decreases, allowing more total current to be drawn from the mains",
      "explanation": "Adding parallel branches reduces total equivalent resistance (1/Rp increases), drawing proportionally higher total current."
    },
    {
      "id": "m10_q09",
      "question": "In a festive string of 50 miniature decorative fairy lights connected in series across a 220 V supply, what is the voltage drop across each bulb?",
      "options": ["220 V", "4.4 V", "50 V", "0.22 V"],
      "answer": "4.4 V",
      "explanation": "Voltage divides equally across identical series bulbs: V_bulb = 220 V / 50 = 4.4 V per bulb."
    },
    {
      "id": "m10_q10",
      "question": "If one bulb in the 50-bulb series fairy light string fuses, what must a technician do to locate the defect?",
      "options": [
        "Look at the master meter",
        "Test each bulb individually along the entire string because current is cut to all 50 bulbs simultaneously",
        "Shake the wire until it glows",
        "Increase voltage to 1000 V"
      ],
      "answer": "Test each bulb individually along the entire string because current is cut to all 50 bulbs simultaneously",
      "explanation": "Because a single break disables the entire series circuit, locating the blown filament requires checking each bulb one by one."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch11_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 11 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
