# -*- coding: utf-8 -*-
"""
CH11 Part 2: Modules 11 to 20
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

modules_11_to_20 = []

# ==========================================
# Module 11: Complex Resistor Networks
# ==========================================
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Complex Resistor Networks: Series-Parallel Combinations",
  "tagline": "Stepwise network simplification, nodal analysis, and equivalent resistance calculations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Mixed Series-Parallel Resistor Circuits</h4>
    <p>Real-world electronic circuits rarely consist of pure series or pure parallel configurations; instead, they feature intricate <strong>mixed combinations</strong>. To determine the overall equivalent resistance ($R_\text{eq}$) of such a network, we apply a methodical reduction strategy:</p>
    <ol>
      <li><strong>Identify Inner Pure Groups:</strong> Look for pairs or sub-groups of resistors that are connected strictly in series (carrying identical current) or strictly in parallel (connected across identical nodes).</li>
      <li><strong>Replace with Equivalent Resistors:</strong> Calculate the sub-equivalent resistance ($R_s = R_1 + R_2$ or $R_p = \frac{R_1 R_2}{R_1 + R_2}$) and redraw the circuit replacing the group with a single equivalent resistor.</li>
      <li><strong>Iterate Stepwise:</strong> Repeat the simplification from the inside out until the entire circuit collapses into a single master equivalent resistor.</li>
    </ol>

    <h4>2. Classic Bridge and Delta Configurations</h4>
    <p>Consider two parallel branches containing series pairs: Branch 1 has $R_1 + R_2$ and Branch 2 has $R_3 + R_4$. First compute the series sum of each branch, then solve the two resulting branches in parallel:</p>
    $$R_\text{eq} = \frac{(R_1 + R_2)(R_3 + R_4)}{(R_1 + R_2) + (R_3 + R_4)}$$
  </div>
</div>
""",
  "pointsToRemember": [
    "Simplify complex networks by isolating and reducing inner pure series and parallel sub-blocks.",
    "Two series resistors in parallel: $R_\\text{eq} = \\frac{R_A \\cdot R_B}{R_A + R_B}$ where $R_A = R_1 + R_2$ and $R_B = R_3 + R_4$.",
    "Always trace current paths from node to node to confirm series vs parallel relationships."
  ],
  "keyNotes": [
    "Resistors are in series ONLY if they carry identical current without any branch tapping off between them; resistors are in parallel ONLY if both their terminals share identical common pairs of nodes."
  ],
  "questions": [
    get_bank_q(60, "m11_q01"),
    get_bank_q(61, "m11_q02"),
    get_bank_q(62, "m11_q03"),
    get_bank_q(63, "m11_q04"),
    {
      "id": "m11_q05",
      "question": "How can three resistors of 2 Ω, 3 Ω, and 6 Ω be connected to give an equivalent total resistance of 4 Ω?",
      "options": [
        "All three in series",
        "All three in parallel",
        "Connect 3 Ω and 6 Ω in parallel, and place this combination in series with the 2 Ω resistor",
        "Connect 2 Ω and 3 Ω in series, in parallel with 6 Ω"
      ],
      "answer": "Connect 3 Ω and 6 Ω in parallel, and place this combination in series with the 2 Ω resistor",
      "explanation": "3 Ω and 6 Ω in parallel give Rp = (3 × 6)/(3 + 6) = 18/9 = 2 Ω. In series with the 2 Ω resistor: Req = 2 Ω + 2 Ω = 4 Ω."
    },
    {
      "id": "m11_q06",
      "question": "How can three resistors of 2 Ω, 3 Ω, and 6 Ω be connected to give an equivalent total resistance of 1 Ω?",
      "options": [
        "Connect all three resistors in parallel",
        "Connect all three resistors in series",
        "Connect 2 Ω and 6 Ω in series, in parallel with 3 Ω",
        "Connect 2 Ω and 3 Ω in parallel, in series with 6 Ω"
      ],
      "answer": "Connect all three resistors in parallel",
      "explanation": "1/Rp = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 6/6 = 1 => Rp = 1 Ω."
    },
    {
      "id": "m11_q07",
      "question": "Four resistors each of resistance 4 Ω are connected to form the four sides of a square ABCD. What is the equivalent resistance between two diagonally opposite corners A and C?",
      "options": ["16 Ω", "4 Ω", "8 Ω", "2 Ω"],
      "answer": "4 Ω",
      "explanation": "Path ABC has 4 + 4 = 8 Ω. Path ADC has 4 + 4 = 8 Ω. These two 8 Ω branches are in parallel between A and C: Req = 8/2 = 4 Ω."
    },
    {
      "id": "m11_q08",
      "question": "In the square resistor circuit above (four 4 Ω sides), what is the equivalent resistance between two adjacent corners A and B?",
      "options": ["3 Ω", "4 Ω", "8 Ω", "16 Ω"],
      "answer": "3 Ω",
      "explanation": "Branch 1 is side AB (4 Ω). Branch 2 is path AD + DC + CB = 4 + 4 + 4 = 12 Ω. In parallel: Req = (4 × 12)/(4 + 12) = 48/16 = 3 Ω."
    },
    {
      "id": "m11_q09",
      "question": "What is the minimum resistance that can be obtained using four resistors each of 1/4 Ω?",
      "options": ["1 Ω", "1/16 Ω", "1/4 Ω", "4 Ω"],
      "answer": "1/16 Ω",
      "explanation": "Minimum resistance is achieved by connecting all in parallel: Rp = R / n = (1/4) / 4 = 1/16 Ω."
    },
    {
      "id": "m11_q10",
      "question": "What is the maximum resistance that can be obtained using four resistors each of 1/4 Ω?",
      "options": ["1 Ω", "1/16 Ω", "1/2 Ω", "4 Ω"],
      "answer": "1 Ω",
      "explanation": "Maximum resistance is obtained by connecting all in series: Rs = 4 × (1/4 Ω) = 1 Ω."
    }
  ]
}
modules_11_to_20.append(m11)

# ==========================================
# Module 12: Heating Effect of Current
# ==========================================
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "The Heating Effect of Electric Current: Molecular Mechanism",
  "tagline": "Electron-lattice inelastic collisions, dissipation of electrical work, and thermal energy conversion.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Why Does an Electric Conductor Get Warm?</h4>
    <p>When an electric cell or battery is connected across a conductor, its chemical reactions maintain a potential difference ($V$) that establishes an electric field. This field exerts electrostatic forces on the conduction electrons, accelerating them along the conductor.</p>

    <h4>2. Microscopic Collision Mechanism</h4>
    <p>As the free electrons drift towards the positive terminal:</p>
    <ul>
      <li>They continually collide inelastically with the fixed, vibrating metallic lattice ions and atoms.</li>
      <li>At each collision, the electrons transfer a portion of their kinetic energy to the lattice ions.</li>
      <li>This transferred energy amplifies the amplitude of thermal vibrations of the lattice ions.</li>
      <li>Macroscopically, increased lattice vibration manifests as a rise in the temperature of the conductor—the <strong>heating effect of electric current</strong> (also termed <em>Joule heating</em>).</li>
    </ul>

    <h4>3. Energy Conversion Perspective</h4>
    <p>If an electric circuit is purely resistive (consisting purely of resistors and battery with no mechanical motors):</p>
    $$\text{Chemical Energy of Battery} \longrightarrow \text{Electrical Energy} \longrightarrow \mathbf{100\%\text{ Thermal Heat Dissipation}}$$
    <p>All the electrical work performed by the battery is steadily dissipated into the surroundings as heat.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Drifting electrons collide with metallic lattice ions, transferring kinetic energy into thermal vibrations.",
    "Heating effect of electric current (Joule heating) converts electrical work into thermal energy.",
    "In a purely resistive circuit, all electrical energy supplied by the source is converted entirely into heat."
  ],
  "keyNotes": [
    "While Joule heating is deliberately utilized in toasters and geysers, it represents an undesirable energy loss (called $I^2R$ copper loss) in electric motors, computers, and power grid transmission lines."
  ],
  "questions": [
    get_bank_q(64, "m12_q01"),
    get_bank_q(65, "m12_q02"),
    get_bank_q(70, "m12_q03"),
    {
      "id": "m12_q04",
      "question": "At the microscopic level, what directly generates heat when electric current flows through a metallic wire?",
      "options": [
        "Friction between air molecules and the outside of the insulation",
        "Inelastic collisions between drifting conduction electrons and the vibrating positive ions of the metal lattice",
        "Nuclear fusion inside copper atoms",
        "Chemical reaction between electrons and protons"
      ],
      "answer": "Inelastic collisions between drifting conduction electrons and the vibrating positive ions of the metal lattice",
      "explanation": "Electrons accelerated by the electric field collide with lattice ions, transferring kinetic energy into thermal vibrations."
    },
    {
      "id": "m12_q05",
      "question": "In a purely resistive electrical circuit containing only a resistor and a battery, into what form of energy is all electrical energy converted?",
      "options": ["Mechanical energy", "Heat (thermal) energy", "Chemical energy", "Magnetic potential energy"],
      "answer": "Heat (thermal) energy",
      "explanation": "Without mechanical motors or storage capacitors, 100% of electrical energy is dissipated as heat into the surroundings."
    },
    {
      "id": "m12_q06",
      "question": "In which of the following electrical devices is the heating effect of current an UNDESIRABLE wasteful energy loss?",
      "options": ["Electric toaster", "Electric room heater", "Electric computer processor (CPU) and motor", "Electric iron"],
      "answer": "Electric computer processor (CPU) and motor",
      "explanation": "In motors and microprocessors, Joule heating wastes energy and requires cooling fans to prevent thermal failure."
    },
    {
      "id": "m12_q07",
      "question": "What is the term given to the energy lost as heat in long-distance electrical power transmission cables?",
      "options": ["I^2R copper loss", "Eddy wind loss", "Capacitive leak", "Hall loss"],
      "answer": "I^2R copper loss",
      "explanation": "The continuous dissipation of electrical energy as heat in conducting wires due to internal resistance is known as I^2R loss."
    },
    {
      "id": "m12_q08",
      "question": "How do electrical grid utilities minimize I^2R heating losses when transmitting power over hundreds of kilometres?",
      "options": [
        "By transmitting electricity at extremely high voltages (e.g., 400 kV) to minimize the current I",
        "By cooling power lines with liquid nitrogen",
        "By using wooden wires",
        "By turning off electricity at night"
      ],
      "answer": "By transmitting electricity at extremely high voltages (e.g., 400 kV) to minimize the current I",
      "explanation": "Since P = VI, transmitting at very high voltage lowers current I drastically; since heat H ∝ I^2, energy losses are minimized."
    },
    {
      "id": "m12_q09",
      "question": "If a current I flows through a resistor of resistance R for time t under potential difference V, what is the work done W by the source?",
      "options": ["W = V × I × t", "W = V / (I × t)", "W = I / (V × t)", "W = V × t / I"],
      "answer": "W = V × I × t",
      "explanation": "W = V × Q. Since Q = I × t, W = V × I × t = I^2Rt."
    },
    {
      "id": "m12_q10",
      "question": "Why does a laptop or mobile phone become noticeably warm when running heavy applications or charging?",
      "options": [
        "The battery emits infrared laser beams",
        "High current flowing through the internal resistance of the microprocessor and battery dissipates heat via Joule's effect",
        "The screen reflects body heat back into the phone",
        "Air pressure compresses the phone"
      ],
      "answer": "High current flowing through the internal resistance of the microprocessor and battery dissipates heat via Joule's effect",
      "explanation": "Rapid switching of billions of transistors and high charging currents generate thermal dissipation (P = I^2R)."
    }
  ]
}
modules_11_to_20.append(m12)

# ==========================================
# Module 13: Joule's Law of Heating
# ==========================================
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Joule's Law of Heating: Mathematical Derivation ($H = I^2Rt$)",
  "tagline": "Proportionality to I^2, R, and t; alternate formulas VIt and V^2t/R.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Derivation of Joule's Law</h4>
    <p>Consider a current $I$ flowing through a resistor of resistance $R$ across which a potential difference $V$ is maintained for a time $t$:</p>
    <ul>
      <li>The total electric charge transported in time $t$ is $Q = I \cdot t$.</li>
      <li>The work done ($W$) in moving charge $Q$ across potential difference $V$ is:
        $$W = V \cdot Q = V \cdot (I \cdot t) = V I t$$
      </li>
      <li>By Ohm's law, $V = I \cdot R$. Substituting $V$ into the work equation gives:
        $$W = (I \cdot R) \cdot I \cdot t = \mathbf{I^2 R t}$$
      </li>
    </ul>
    <p>Assuming all electrical energy is dissipated as thermal energy, the heat generated ($H$) is:</p>
    $$\mathbf{H = I^2 R t}$$

    <h4>2. The Three Formal Laws of Joule's Heating</h4>
    <ol>
      <li><strong>Current Law:</strong> Heat generated is directly proportional to the <strong>square of the current</strong> ($H \propto I^2$) for a given resistance. (Doubling current quadruples heat!).</li>
      <li><strong>Resistance Law:</strong> Heat generated is directly proportional to the <strong>resistance</strong> of the conductor ($H \propto R$) for a given current.</li>
      <li><strong>Time Law:</strong> Heat generated is directly proportional to the <strong>time</strong> for which current flows ($H \propto t$).</li>
    </ol>

    <h4>3. Alternate Equivalent Mathematical Expressions</h4>
    $$H = I^2 R t = V I t = \frac{V^2}{R} t$$
    <p><em>Note on application:</em> Use $H = I^2Rt$ for series circuits (constant current); use $H = \frac{V^2}{R}t$ for parallel circuits (constant voltage).</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Joule's Law of Heating: $H = I^2Rt = VIt = \\frac{V^2}{R}t$.",
    "Heat is proportional to the square of current ($I^2$): doubling $I$ produces $4\\times$ more heat.",
    "In series (constant $I$), higher $R$ generates more heat; in parallel (constant $V$), lower $R$ generates more heat!"
  ],
  "keyNotes": [
    "Beware of the classic exam trap: for domestic parallel appliances on 220V, heat is inversely proportional to resistance ($H \\propto 1/R$), so low-resistance appliances produce the most heat!"
  ],
  "questions": [
    get_bank_q(30, "m13_q01"),
    get_bank_q(66, "m13_q02"),
    get_bank_q(67, "m13_q03"),
    {
      "id": "m13_q04",
      "question": "According to Joule's Law of Heating, what happens to the heat produced in a resistor if the current flowing through it is DOUBLED while resistance and time remain constant?",
      "options": ["Heat is doubled (2x)", "Heat is quadrupled (4x)", "Heat is halved", "Heat increases by 8x"],
      "answer": "Heat is quadrupled (4x)",
      "explanation": "Since H ∝ I^2, doubling current (2I)^2 = 4I^2, which quadruples the heat generated."
    },
    {
      "id": "m13_q05",
      "question": "Which of the following mathematical expressions correctly represents Joule's Law of Heating?",
      "options": ["H = I^2 R t", "H = I R^2 t", "H = I R t^2", "H = V / (I R t)"],
      "answer": "H = I^2 R t",
      "explanation": "Joule's law states that thermal energy generated is H = I^2 R t."
    },
    {
      "id": "m13_q06",
      "question": "100 Joules of heat is produced each second in a 4 Ω resistor. What is the potential difference across the resistor?",
      "options": ["20 V", "25 V", "400 V", "10 V"],
      "answer": "20 V",
      "explanation": "H/t = P = V^2 / R => 100 = V^2 / 4 => V^2 = 400 => V = 20 V."
    },
    {
      "id": "m13_q07",
      "question": "An electric iron of resistance 20 Ω takes a current of 5 A. What is the heat developed in 30 seconds?",
      "options": ["15,000 J", "3,000 J", "1500 J", "300 J"],
      "answer": "15,000 J",
      "explanation": "H = I^2 R t = (5)^2 × 20 × 30 = 25 × 20 × 30 = 15,000 Joules."
    },
    {
      "id": "m13_q08",
      "question": "Between two resistors of 5 Ω and 10 Ω connected in SERIES across a battery, which resistor produces MORE heat?",
      "options": [
        "The 10 Ω resistor produces more heat because current is constant (H = I^2 R t => H ∝ R)",
        "The 5 Ω resistor produces more heat",
        "Both produce equal heat",
        "Neither produces any heat"
      ],
      "answer": "The 10 Ω resistor produces more heat because current is constant (H = I^2 R t => H ∝ R)",
      "explanation": "In series, identical current flows through both, so heat is directly proportional to resistance (H ∝ R)."
    },
    {
      "id": "m13_q09",
      "question": "Between two resistors of 5 Ω and 10 Ω connected in PARALLEL across a 220 V supply, which resistor produces MORE heat?",
      "options": [
        "The 5 Ω resistor produces more heat because voltage is constant (H = (V^2 / R) t => H ∝ 1/R)",
        "The 10 Ω resistor produces more heat",
        "Both produce equal heat",
        "Heat production depends on atmospheric pressure"
      ],
      "answer": "The 5 Ω resistor produces more heat because voltage is constant (H = (V^2 / R) t => H ∝ 1/R)",
      "explanation": "In parallel, both receive identical voltage (220 V), so heat is inversely proportional to resistance (H ∝ 1/R)."
    },
    {
      "id": "m13_q10",
      "question": "What is the SI unit of heat energy dissipated by an electric circuit?",
      "options": ["Watt (W)", "Joule (J)", "Calorie per minute", "Ampere-second"],
      "answer": "Joule (J)",
      "explanation": "Heat is a form of energy; its standard SI unit is the joule (J)."
    }
  ]
}
modules_11_to_20.append(m13)

# ==========================================
# Module 14: Practical Heating Applications & Nichrome
# ==========================================
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Practical Thermal Applications: Electric Iron, Heater & Nichrome",
  "tagline": "Heating elements, alloy advantages: high resistivity, high melting point, and oxidation resistance.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Practical Domestic Heating Appliances</h4>
    <p>The heating effect of electric current is harnessed in indispensable household appliances such as <strong>electric irons, room heaters, water geysers, toasters, and electric kettles</strong>. All these appliances incorporate an internal metallic coil known as the <strong>heating element</strong>.</p>

    <h4>2. Why Nichrome Alloy is the Material of Choice</h4>
    <p>Pure copper or silver is never used for heating elements. Instead, an alloy—most notably <strong>Nichrome</strong> (composed of $60\%\text{ Nickel}$, $16\%\text{ Chromium}$, $23\%\text{ Iron}$, and $1\%\text{ Manganese}$)—is exclusively employed for three crucial engineering reasons:</p>
    <ol>
      <li><strong>High Electrical Resistivity ($\rho \approx 100 \times 10^{-8}\ \Omega\cdot\text{m}$):</strong> Roughly 60 times higher than that of copper. This allows compact heating coils to achieve high resistance ($R$) without requiring absurdly long wires.</li>
      <li><strong>Extremely High Melting Point (~$1400^\circ\text{C}$):</strong> Can operate red-hot without melting.</li>
      <li><strong>Resistance to Oxidation (Does Not Burn):</strong> Unlike pure metals that rapidly oxidize and vaporize when red-hot in atmospheric air, nichrome forms a tough, self-passivating chromium oxide outer film that prevents further oxidation even at $900\text{--}1000^\circ\text{C}$.</li>
    </ol>

    <h4>3. Why Does the Heating Element Glow While the Cord Does Not?</h4>
    <p>The connecting power cord is made of thick, low-resistance <strong>copper wire</strong>, whereas the heating element is a coiled, thin, high-resistance <strong>nichrome wire</strong>:</p>
    <ul>
      <li>Because they are in series, the exact same current ($I$) flows through both the power cord and the heating element.</li>
      <li>By Joule's law ($H \propto R$), heat generated in the low-resistance copper cord ($R_\text{copper} \approx 0.01\ \Omega$) is negligible, so it stays cool.</li>
      <li>In contrast, the high resistance of the nichrome element ($R_\text{element} \approx 50\ \Omega$) generates immense heat, causing it to become red-hot and glow brilliantly!</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Heating appliances (electric iron, toaster, geyser) utilize high-resistance heating elements.",
    "Nichrome alloy (Ni-Cr-Fe-Mn) has high resistivity, high melting point, and does not oxidize at red-hot temperatures.",
    "The heating element glows red-hot because its resistance is huge ($H \\propto R$), while the low-resistance copper cord stays cool."
  ],
  "keyNotes": [
    "Mica sheets are placed inside electric irons to insulate the red-hot nichrome heating element from the metallic soleplate because mica is an excellent conductor of heat but an exceptional insulator of electricity!"
  ],
  "questions": [
    get_bank_q(31, "m14_q01"),
    get_bank_q(32, "m14_q02"),
    get_bank_q(68, "m14_q03"),
    {
      "id": "m14_q04",
      "question": "Why does the heating element of an electric room heater glow red-hot while the connecting power cord does not?",
      "options": [
        "The cord has a separate battery",
        "The connecting cord is made of thick low-resistance copper that produces negligible heat (H ∝ R), whereas the heating element has very high resistance and becomes red-hot",
        "The cord is kept in liquid nitrogen",
        "The current only flows inside the heating element"
      ],
      "answer": "The connecting cord is made of thick low-resistance copper that produces negligible heat (H ∝ R), whereas the heating element has very high resistance and becomes red-hot",
      "explanation": "Because current is identical in series, Joule heating H ∝ R ensures that the high-resistance nichrome element gets scorching hot while the copper cord stays cool."
    },
    {
      "id": "m14_q05",
      "question": "What is the chemical composition of the alloy Nichrome used in heating elements?",
      "options": [
        "Nickel, Chromium, Iron, and Manganese",
        "Copper and Zinc",
        "Lead and Tin",
        "Aluminium and Magnesium"
      ],
      "answer": "Nickel, Chromium, Iron, and Manganese",
      "explanation": "Nichrome is an alloy consisting of approximately 60% Nickel, 16% Chromium, 23% Iron, and 1% Manganese."
    },
    {
      "id": "m14_q06",
      "question": "Why are alloys like Nichrome preferred over pure metals for electrical heating devices?",
      "options": [
        "Alloys have higher resistivity and do not oxidize (burn) readily even at high red-hot temperatures",
        "Alloys are transparent to light",
        "Alloys melt at 50°C",
        "Alloys have zero resistance"
      ],
      "answer": "Alloys have higher resistivity and do not oxidize (burn) readily even at high red-hot temperatures",
      "explanation": "Nichrome combines high resistivity with remarkable oxidation resistance at incandescent temperatures (~1000°C)."
    },
    {
      "id": "m14_q07",
      "question": "Why is a sheet of natural Mica used to sandwich the heating element in a domestic electric iron?",
      "options": [
        "Mica is magnetic",
        "Mica is a good thermal conductor of heat, but a superb electrical insulator, conducting heat to the baseplate while preventing electric shocks",
        "Mica produces pleasant perfume when heated",
        "Mica cools the iron down"
      ],
      "answer": "Mica is a good thermal conductor of heat, but a superb electrical insulator, conducting heat to the baseplate while preventing electric shocks",
      "explanation": "Mica conducts heat efficiently to the soleplate while insulating the user from lethal electrical current."
    },
    {
      "id": "m14_q08",
      "question": "What is the approximate melting point of Nichrome alloy?",
      "options": ["100°C", "500°C", "~1400°C", "3380°C"],
      "answer": "~1400°C",
      "explanation": "Nichrome melts at approximately 1400°C, enabling it to glow red-hot (~900°C) safely without melting."
    },
    {
      "id": "m14_q09",
      "question": "If an electric toaster draws 4 A of current on a 220 V line, what is the resistance of its internal heating element?",
      "options": ["55 Ω", "880 Ω", "25 Ω", "110 Ω"],
      "answer": "55 Ω",
      "explanation": "R = V / I = 220 V / 4 A = 55 Ω."
    },
    {
      "id": "m14_q10",
      "question": "What happens if a heating element made of pure copper wire is connected to a 220 V mains supply?",
      "options": [
        "It glows with green light forever",
        "Due to extremely low resistance, it draws massive current, burns out, melts, and causes a dangerous short circuit",
        "It acts as a refrigerator",
        "It produces zero current"
      ],
      "answer": "Due to extremely low resistance, it draws massive current, burns out, melts, and causes a dangerous short circuit",
      "explanation": "Low resistance copper across 220V causes an extreme current spike that instantly melts the wire and trips the breaker."
    }
  ]
}
modules_11_to_20.append(m14)

# ==========================================
# Module 15: The Incandescent Electric Bulb
# ==========================================
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "The Incandescent Electric Bulb: Tungsten Filament & Inert Gases",
  "tagline": "Thermal incandescence, extreme melting point (3380°C), and inactive Argon/Nitrogen atmosphere.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Principle of Incandescence</h4>
    <p>An <strong>incandescent electric bulb</strong> generates light by heating a thin metallic filament to such an extreme temperature that it becomes white-hot and emits electromagnetic thermal radiation in the visible spectrum (<strong>incandescence</strong>). However, only about $5\text{--}10\%$ of electrical energy is converted into visible light; the remaining $90\text{--}95\%$ is dissipated as invisible infrared heat radiation!</p>

    <h4>2. Why Tungsten ($W$) is Exclusively Used for Bulb Filaments</h4>
    <p>Tungsten is the only metal suited for incandescent filaments due to unmatched physical properties:</p>
    <ul>
      <li><strong>Extremely High Melting Point ($3380^\circ\text{C}$):</strong> The highest melting point of any metallic element on the periodic table. It can glow at dazzling white-hot temperatures (~$2500\text{--}2700^\circ\text{C}$) without melting.</li>
      <li><strong>High Resistivity & Ductility:</strong> Can be drawn into ultra-thin, long coiled-coil filaments to maximize resistance and surface area in a tiny glass bulb.</li>
    </ul>

    <h4>3. Why are Bulbs Filled with Chemically Inactive Gases?</h4>
    <p>If air were present inside the glass bulb, atmospheric oxygen would react instantly with the white-hot tungsten filament, burning it to tungsten oxide and destroying the bulb in a split second. To prevent this:</p>
    <ul>
      <li>The glass bulb is evacuated and filled with chemically non-reactive, inert gases—principally <strong>Argon</strong> mixed with some <strong>Nitrogen</strong>.</li>
      <li>The inert gas pressure suppresses the thermal vaporization (sublimation) of tungsten atoms from the filament, significantly <strong>prolonging the operational lifespan of the bulb</strong>.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Tungsten has an extraordinarily high melting point of $3380^\\circ\\text{C}$ and high tensile ductility.",
    "Incandescent bulbs convert only $\sim 5\\text{--}10\\%$ of electrical energy into light; the rest is lost as heat.",
    "Bulbs are filled with inactive Argon and Nitrogen to prevent oxidation and retard filament evaporation."
  ],
  "keyNotes": [
    "Because of their poor energy efficiency (~90% wasted as heat), incandescent tungsten bulbs have been largely superseded by compact fluorescent lamps (CFLs) and modern solid-state light-emitting diodes (LEDs)."
  ],
  "questions": [
    get_bank_q(33, "m15_q01"),
    get_bank_q(34, "m15_q02"),
    get_bank_q(69, "m15_q03"),
    {
      "id": "m15_q04",
      "question": "Which metal is exclusively used for making the filament of traditional incandescent electric lamps?",
      "options": ["Copper", "Tungsten (W)", "Aluminium", "Lead"],
      "answer": "Tungsten (W)",
      "explanation": "Tungsten is used because of its extraordinary melting point of 3380°C, allowing it to glow white-hot without melting."
    },
    {
      "id": "m15_q05",
      "question": "What is the melting point of Tungsten metal?",
      "options": ["1085°C", "1538°C", "3380°C", "5000°C"],
      "answer": "3380°C",
      "explanation": "Tungsten has the highest melting point among all metals at 3380°C."
    },
    {
      "id": "m15_q06",
      "question": "Which chemically inactive gases are typically filled inside an incandescent bulb to prolong filament life?",
      "options": [
        "Argon and Nitrogen",
        "Oxygen and Hydrogen",
        "Carbon dioxide and Chlorine",
        "Pure Helium at 100 atmospheres"
      ],
      "answer": "Argon and Nitrogen",
      "explanation": "Argon and nitrogen are chemically unreactive gases that prevent tungsten oxidation and suppress filament evaporation."
    },
    {
      "id": "m15_q07",
      "question": "What happens immediately if an incandescent light bulb develops a hairline crack that lets atmospheric air enter the bulb?",
      "options": [
        "The bulb glows twice as bright",
        "The white-hot tungsten filament oxidizes (burns) instantly in oxygen and snaps, destroying the bulb",
        "The argon gas liquifies",
        "The glass turns yellow"
      ],
      "answer": "The white-hot tungsten filament oxidizes (burns) instantly in oxygen and snaps, destroying the bulb",
      "explanation": "Hot tungsten reacts violently with atmospheric oxygen to form volatile tungsten oxide, burning out the filament in milliseconds."
    },
    {
      "id": "m15_q08",
      "question": "Approximately what percentage of electrical energy consumed by a traditional incandescent bulb is actually converted into useful visible light?",
      "options": ["100%", "50%", "Only about 5% to 10%", "85%"],
      "answer": "Only about 5% to 10%",
      "explanation": "Traditional incandescent bulbs are notoriously inefficient; roughly 90-95% of energy is wasted as invisible infrared heat."
    },
    {
      "id": "m15_q09",
      "question": "Why is the tungsten filament wound into a tight 'coiled-coil' helical shape inside the bulb?",
      "options": [
        "To make it fit into a small glass bulb while maintaining a long length (high resistance) and reducing cooling by gas convection",
        "To act as a spring against earthquakes",
        "To reflect magnetic waves",
        "Because straight wires cannot conduct current"
      ],
      "answer": "To make it fit into a small glass bulb while maintaining a long length (high resistance) and reducing cooling by gas convection",
      "explanation": "Coiling packs a long thin filament into a compact space, raising resistance and trapping heat to maintain incandescence."
    },
    {
      "id": "m15_q10",
      "question": "Why have modern Solid-State LED (Light Emitting Diode) bulbs largely replaced traditional incandescent tungsten bulbs?",
      "options": [
        "LEDs produce cold laser light that cures skin diseases",
        "LEDs convert over 80% of electrical energy into light with minimal heat loss, consuming far less power and lasting 25 times longer",
        "Incandescent bulbs emit radiation that attracts insects only",
        "LEDs do not use electricity"
      ],
      "answer": "LEDs convert over 80% of electrical energy into light with minimal heat loss, consuming far less power and lasting 25 times longer",
      "explanation": "LEDs emit light via quantum bandgap recombination rather than heat incandescence, providing massive energy savings."
    }
  ]
}
modules_11_to_20.append(m15)

# ==========================================
# Module 16: The Electric Fuse
# ==========================================
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "The Electric Fuse: Working Principle, Current Rating & Circuit Safety",
  "tagline": "Sacrificial circuit protection, low melting point alloy, series placement on live wire.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is an Electric Fuse?</h4>
    <p>An <strong>electric fuse</strong> is an indispensable safety device inserted into an electrical circuit to protect delicate appliances and domestic building wiring against catastrophic damage caused by <strong>overloading</strong> or <strong>short-circuiting</strong>.</p>

    <h4>2. Physical Construction & Material Properties</h4>
    <p>A fuse consists of a piece of thin wire made of a metallic alloy having:</p>
    <ul>
      <li><strong>Low Melting Point:</strong> Typically made of an alloy of <strong>lead ($63\%$) and tin ($37\%$)</strong>, or tin-plated copper.</li>
      <li><strong>Appropriate Resistance:</strong> Sufficient to heat up rapidly if current exceeds safety thresholds.</li>
      <li>Enclosed inside a fireproof cartridge of porcelain, ceramic, or glass with metal end-caps.</li>
    </ul>

    <h4>3. How Does a Fuse Operate?</h4>
    <p>The fuse is <strong>always connected in SERIES with the LIVE wire</strong> ahead of any appliance:</p>
    <ol>
      <li>Under normal conditions, circuit current is below the fuse's rated capacity; heat dissipated is safely conducted away.</li>
      <li>If a fault occurs—such as a <strong>short circuit</strong> (direct contact between live and neutral wires) or <strong>overloading</strong> (too many high-power appliances switched on simultaneously)—current spikes dangerously.</li>
      <li>By Joule's law ($H \propto I^2$), the excessive current instantly raises the fuse wire temperature past its melting point.</li>
      <li>The fuse wire <strong>melts, burns apart, and breaks the circuit</strong> in milliseconds, cutting off power before wires can catch fire or appliances explode!</li>
    </ol>

    <h4>4. Standard Current Ratings</h4>
    <p>Fuses are rated in amperes according to the maximum safe current they can carry without blowing: $1\text{ A}, 2\text{ A}, 3\text{ A}, 5\text{ A}, 10\text{ A}, 15\text{ A}, 16\text{ A}$.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "An electric fuse protects circuits by melting when current exceeds its designated rating.",
    "Fuse wire has a LOW melting point (alloy of lead and tin).",
    "A fuse is ALWAYS connected in SERIES with the LIVE wire ahead of appliances."
  ],
  "keyNotes": [
    "Never replace a blown fuse with a thick copper wire or iron nail! A copper wire will not melt during a fault, causing house wiring to overheat and trigger catastrophic electrical fires."
  ],
  "questions": [
    get_bank_q(35, "m16_q01"),
    get_bank_q(36, "m16_q02"),
    get_bank_q(71, "m16_q03"),
    {
      "id": "m16_q04",
      "question": "What is the primary function of an electric fuse in a household electrical circuit?",
      "options": [
        "To increase the voltage of the battery",
        "To break the circuit automatically by melting when current exceeds safe limits, preventing fire and appliance damage",
        "To store spare electricity",
        "To regulate the colour of lights"
      ],
      "answer": "To break the circuit automatically by melting when current exceeds safe limits, preventing fire and appliance damage",
      "explanation": "A fuse is a sacrificial protective device that melts under excessive current to isolate the circuit."
    },
    {
      "id": "m16_q05",
      "question": "What key physical property must the wire used in an electric fuse possess?",
      "options": ["Extremely high melting point", "Low melting point and suitable resistance", "Infinite resistance", "Magnetic attraction"],
      "answer": "Low melting point and suitable resistance",
      "explanation": "A low melting point ensures the fuse wire melts quickly before building wires can overheat."
    },
    {
      "id": "m16_q06",
      "question": "In which domestic wire must an electric fuse always be connected?",
      "options": [
        "In series with the Live (Phase) wire",
        "In parallel with the Neutral wire",
        "In series with the Earth wire",
        "Outside on the roof"
      ],
      "answer": "In series with the Live (Phase) wire",
      "explanation": "Connecting in series with the live wire ensures that when the fuse blows, high mains voltage is completely isolated from the appliance."
    },
    {
      "id": "m16_q07",
      "question": "An electric iron consumes 1 kW (1000 W) of electric power when operated at 220 V. What rating fuse must be installed in its circuit?",
      "options": ["1 A", "2 A", "5 A", "15 A"],
      "answer": "5 A",
      "explanation": "Current I = P / V = 1000 W / 220 V = 4.54 A. The next standard fuse rating above 4.54 A is 5 A."
    },
    {
      "id": "m16_q08",
      "question": "What common alloy is used to manufacture safety fuse wire?",
      "options": ["Alloy of Lead and Tin (Pb-Sn)", "Copper and Zinc", "Iron and Carbon", "Silver and Gold"],
      "answer": "Alloy of Lead and Tin (Pb-Sn)",
      "explanation": "A lead-tin alloy is used because of its low eutectic melting point (~183°C) and stable conductivity."
    },
    {
      "id": "m16_q09",
      "question": "Why is it extremely dangerous to replace a blown fuse with a thick copper wire or an iron nail?",
      "options": [
        "Copper wire absorbs too much moisture",
        "Thick copper wire has a high melting point and will not melt during a fault, allowing excessive current to cause electrical fires",
        "Copper wire causes the bulb to turn green",
        "Nails attract lightning indoors"
      ],
      "answer": "Thick copper wire has a high melting point and will not melt during a fault, allowing excessive current to cause electrical fires",
      "explanation": "Bypassing the fuse with heavy copper disables protection; massive fault currents will overheat wires and ignite walls."
    },
    {
      "id": "m16_q10",
      "question": "What is the difference between an 'overload' and a 'short circuit'?",
      "options": [
        "They are identical terms",
        "A short circuit occurs when live and neutral wires touch directly with near-zero resistance; overloading occurs when total current drawn by multiple appliances exceeds safe wiring limits",
        "Overload happens only on batteries",
        "Short circuit happens only in summer"
      ],
      "answer": "A short circuit occurs when live and neutral wires touch directly with near-zero resistance; overloading occurs when total current drawn by multiple appliances exceeds safe wiring limits",
      "explanation": "Short circuit is direct wire-to-wire contact (zero resistance); overloading is cumulative excessive load from too many running appliances."
    }
  ]
}
modules_11_to_20.append(m16)

# ==========================================
# Module 17: Electric Power (P = VI, I^2R, V^2/R)
# ==========================================
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Electric Power: Definitions, Formulas ($P = VI = I^2R = V^2/R$) & The Watt",
  "tagline": "Rate of electrical energy consumption, SI unit Watt (W), and kilowatt conversions.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Definition of Electric Power ($P$)</h4>
    <p><strong>Electric power</strong> is defined as the rate at which electrical energy is consumed or dissipated into other forms of energy (such as heat, light, or mechanical motion) in an electric circuit:</p>
    $$P = \frac{\text{Electrical Energy Consumed }(W)}{\text{Time Interval }(t)} = \frac{V \cdot I \cdot t}{t}$$
    $$\mathbf{P = V \cdot I}$$

    <h4>2. The Three Equivalent Formulas for Electric Power</h4>
    <p>By substituting Ohm's law ($V = IR$ or $I = V/R$), we obtain three master equations:</p>
    <ol>
      <li>$$P = V \cdot I$$ (Useful when both voltage and current are known)</li>
      <li>$$P = I^2 \cdot R$$ (Useful for series circuits where current $I$ is constant)</li>
      <li>$$P = \frac{V^2}{R}$$ (Useful for parallel circuits where voltage $V$ is constant)</li>
    </ol>

    <h4>3. The SI Unit: The Watt ($\text{W}$)</h4>
    <p>The SI unit of electric power is the <strong>watt (W)</strong>, named in honour of Scottish engineer James Watt:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "1 watt is the power consumed by a device that draws 1 ampere of current when operated at a potential difference of 1 volt ($1\text{ W} = 1\text{ Volt} \times 1\text{ Ampere} = 1\text{ V}\cdot\text{A}$)."
    </blockquote>
    <p>Larger multiple units:</p>
    <ul>
      <li>$1\text{ kilowatt (kW)} = 1000\text{ W} = 10^3\text{ W}$</li>
      <li>$1\text{ megawatt (MW)} = 10^6\text{ W}$</li>
      <li>$1\text{ gigawatt (GW)} = 10^9\text{ W}$</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Electric power is the rate of electrical energy consumption: $P = W/t$.",
    "Master power equations: $P = VI = I^2R = \\frac{V^2}{R}$.",
    "The SI unit of power is the Watt ($1\\text{ W} = 1\\text{ V}\\cdot\\text{A} = 1\\text{ J/s}$); $1\\text{ kW} = 1000\\text{ W}$."
  ],
  "keyNotes": [
    "For appliances operating on the fixed 220V domestic supply, power is inversely proportional to resistance ($P = V^2/R$); a high-power 2000W geyser has much lower resistance than a 60W bulb!"
  ],
  "questions": [
    get_bank_q(37, "m17_q01"),
    get_bank_q(38, "m17_q02"),
    get_bank_q(72, "m17_q03"),
    {
      "id": "m17_q04",
      "question": "Which of the following does NOT represent electrical power in a circuit?",
      "options": ["I^2 R", "I R^2", "V I", "V^2 / R"],
      "answer": "I R^2",
      "explanation": "P = VI = I^2 R = V^2 / R. The expression I R^2 has units of Volts-Ohms and does not represent power."
    },
    {
      "id": "m17_q05",
      "question": "What is the SI unit of electrical power?",
      "options": ["Joule (J)", "Watt (W)", "Ampere-hour", "Ohm-metre"],
      "answer": "Watt (W)",
      "explanation": "The SI unit of power is the watt (W), where 1 W = 1 J/s."
    },
    {
      "id": "m17_q06",
      "question": "An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, what is the power consumed?",
      "options": ["100 W", "75 W", "50 W", "25 W"],
      "answer": "25 W",
      "explanation": "Filament resistance R = V^2 / P = (220)^2 / 100 = 484 Ω. At 110 V: P' = (V')^2 / R = (110)^2 / 484 = 12100 / 484 = 25 W."
    },
    {
      "id": "m17_q07",
      "question": "Between two bulbs rated '220 V, 100 W' and '220 V, 40 W', which bulb's filament has the GREATER electrical resistance?",
      "options": [
        "The 100 W bulb",
        "The 40 W bulb has greater resistance because R = V^2 / P (resistance is inversely proportional to power)",
        "Both have identical resistance",
        "Resistance depends on the switch"
      ],
      "answer": "The 40 W bulb has greater resistance because R = V^2 / P (resistance is inversely proportional to power)",
      "explanation": "Since R = V^2/P, lower rated power means higher filament resistance: R_40 = 1210 Ω vs R_100 = 484 Ω."
    },
    {
      "id": "m17_q08",
      "question": "What is the resistance of an electric lamp that draws a current of 0.5 A from a 220 V line, and what is its power?",
      "options": ["440 Ω and 110 W", "220 Ω and 55 W", "110 Ω and 440 W", "880 Ω and 220 W"],
      "answer": "440 Ω and 110 W",
      "explanation": "P = V × I = 220 V × 0.5 A = 110 W. R = V / I = 220 / 0.5 = 440 Ω."
    },
    {
      "id": "m17_q09",
      "question": "Define 1 Watt of electric power in terms of volts and amperes:",
      "options": [
        "The power consumed by a device that carries 1 Ampere when operated at 1 Volt",
        "1 Joule per minute",
        "1 Coulomb per second",
        "The power dissipated by a 1 Ohm resistor in 1 hour"
      ],
      "answer": "The power consumed by a device that carries 1 Ampere when operated at 1 Volt",
      "explanation": "1 Watt = 1 Volt × 1 Ampere (1 W = 1 V·A = 1 J/s)."
    },
    {
      "id": "m17_q10",
      "question": "1 kilowatt (1 kW) is equivalent to how many watts?",
      "options": ["100 W", "1,000 W", "10,000 W", "1,000,000 W"],
      "answer": "1,000 W",
      "explanation": "The prefix 'kilo' represents 1000, so 1 kW = 1,000 W."
    }
  ]
}
modules_11_to_20.append(m17)

# ==========================================
# Module 18: Commercial Unit of Energy (kWh)
# ==========================================
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Commercial Unit of Electrical Energy: The Kilowatt-Hour (kWh)",
  "tagline": "The Board of Trade Unit, 1 kWh = 3.6 x 10^6 J, and domestic meter recording.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Why is the Joule Impractical for Electricity Billing?</h4>
    <p>The SI unit of energy, the <strong>joule (J)</strong>, represents the energy consumed by a tiny $1\text{-watt}$ appliance in just $1\text{ second}$ ($1\text{ J} = 1\text{ W}\cdot\text{s}$). Because modern households operate powerful appliances (air conditioners, geysers, refrigerators) consuming millions of joules daily, measuring electricity in joules would result in astronomically large, unwieldy numbers on electricity bills.</p>

    <h4>2. The Commercial Unit: The Kilowatt-Hour ($\text{kWh}$)</h4>
    <p>To provide a convenient, practical commercial scale, electricity utilities measure electrical energy in <strong>kilowatt-hours (kWh)</strong>, commonly referred to simply as <strong>"units" of electricity</strong> (or Board of Trade Unit, B.O.T.U.):</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "1 kilowatt-hour is the amount of electrical energy consumed by an appliance of 1000 watts (1 kW) power rating running continuously for 1 hour."
    </blockquote>

    <h4>3. Converting Kilowatt-Hours to Joules</h4>
    $$\begin{aligned}
      1\text{ kWh} &= 1\text{ kilowatt} \times 1\text{ hour} \\
      &= 1000\text{ watts} \times 3600\text{ seconds} \\
      &= 3,600,000\text{ watt-seconds} \\
      &= \mathbf{3.6 \times 10^6\text{ Joules}}
    \end{aligned}$$
    $$\mathbf{1\text{ unit} = 1\text{ kWh} = 3.6 \times 10^6\text{ J} = 3.6\text{ MJ}}$$
  </div>
</div>
""",
  "pointsToRemember": [
    "The commercial unit of electrical energy is the kilowatt-hour ($\\text{kWh}$), commonly termed a 'unit'.",
    "$1\\text{ kWh}$ is the energy consumed by a $1\\text{ kW}$ appliance operating for 1 hour.",
    "Conversion factor: $\\mathbf{1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}}$."
  ],
  "keyNotes": [
    "Electricity meters installed outside homes record energy consumption in kilowatt-hours (units), which forms the basis of monthly utility billing."
  ],
  "questions": [
    get_bank_q(39, "m18_q01"),
    get_bank_q(40, "m18_q02"),
    get_bank_q(73, "m18_q03"),
    {
      "id": "m18_q04",
      "question": "What is the commercial unit of electrical energy recorded on household electric meters?",
      "options": ["Volt-ampere", "Kilowatt-hour (kWh) or 'Unit'", "Watt-second", "Coulomb"],
      "answer": "Kilowatt-hour (kWh) or 'Unit'",
      "explanation": "Electricity utilities measure and bill domestic energy in kilowatt-hours (kWh), commonly termed 'units'."
    },
    {
      "id": "m18_q05",
      "question": "How many Joules are equivalent to 1 kilowatt-hour (1 kWh)?",
      "options": ["3.6 × 10^6 J", "3.6 × 10^3 J", "1000 J", "3600 J"],
      "answer": "3.6 × 10^6 J",
      "explanation": "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10^6 Joules."
    },
    {
      "id": "m18_q06",
      "question": "How long must a 100 W light bulb burn continuously to consume exactly 1 unit (1 kWh) of electrical energy?",
      "options": ["1 hour", "10 hours", "100 hours", "24 hours"],
      "answer": "10 hours",
      "explanation": "Energy = Power × time => 1 kWh = 0.1 kW × t => t = 1 / 0.1 = 10 hours."
    },
    {
      "id": "m18_q07",
      "question": "An electric refrigerator rated 400 W operates 8 hours/day. What is the electrical energy consumed by the refrigerator in 30 days?",
      "options": ["96 kWh", "9.6 kWh", "960 kWh", "32 kWh"],
      "answer": "96 kWh",
      "explanation": "Daily energy = 400 W × 8 h = 3200 Wh = 3.2 kWh. For 30 days: 3.2 kWh × 30 = 96 kWh (96 units)."
    },
    {
      "id": "m18_q08",
      "question": "Why is the kilowatt-hour (kWh) a unit of ENERGY rather than a unit of power?",
      "options": [
        "Because kilowatt is power, and multiplying by time (hours) yields energy (Energy = Power × Time)",
        "Because electricity moves in hours",
        "It is a unit of power, not energy",
        "Because meters measure current"
      ],
      "answer": "Because kilowatt is power, and multiplying by time (hours) yields energy (Energy = Power × Time)",
      "explanation": "Power = Energy / Time, therefore Energy = Power × Time. Kilowatt (power) × Hour (time) = Energy."
    },
    {
      "id": "m18_q09",
      "question": "Convert 250 units (250 kWh) of electrical energy into Joules:",
      "options": ["9.0 × 10^8 J", "2.5 × 10^5 J", "9.0 × 10^6 J", "1.0 × 10^9 J"],
      "answer": "9.0 × 10^8 J",
      "explanation": "250 kWh = 250 × 3.6 × 10^6 J = 900 × 10^6 J = 9.0 × 10^8 Joules."
    },
    {
      "id": "m18_q10",
      "question": "If a household consumes 10 kWh of electricity in a day, how many Joules of energy were used?",
      "options": ["3.6 × 10^7 J", "3.6 × 10^6 J", "1.0 × 10^4 J", "36,000 J"],
      "answer": "3.6 × 10^7 J",
      "explanation": "10 kWh = 10 × 3.6 × 10^6 J = 3.6 × 10^7 Joules."
    }
  ]
}
modules_11_to_20.append(m18)

# ==========================================
# Module 19: Electricity Billing Calculations
# ==========================================
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Electricity Billing: Power Ratings, Consumption & Cost Estimation",
  "tagline": "Systematic calculation of total units consumed, tariff rates, and monthly utility bills.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Systematic Electricity Bill Calculation Protocol</h4>
    <p>To calculate the electricity bill for a household over a billing period (e.g., 30 days):</p>
    <ol>
      <li><strong>List All Appliances:</strong> For each appliance type, note its power rating in watts ($P$), the quantity of appliances ($N$), and daily operating hours ($t$).</li>
      <li><strong>Calculate Daily Energy Consumption:</strong>
        $$E_\text{daily (Wh)} = N \times P\text{ (Watts)} \times t\text{ (hours/day)}$$
      </li>
      <li><strong>Convert to Kilowatt-Hours (Units):</strong>
        $$\text{Units per day (kWh)} = \frac{E_\text{daily (Wh)}}{1000}$$
      </li>
      <li><strong>Calculate Total Monthly Units:</strong>
        $$\text{Total Units} = \text{Daily Units} \times \text{Number of days in month (e.g., 30)}$$
      </li>
      <li><strong>Calculate Financial Cost:</strong>
        $$\text{Total Cost (Rs.)} = \text{Total Units (kWh)} \times \text{Tariff Rate (Rs. per unit)}$$
      </li>
    </ol>

    <h4>2. Worked Example</h4>
    <p>A household operates the following appliances daily:</p>
    <ul>
      <li>4 LED tubes of $20\text{ W}$ each for $5\text{ hours}$: $4 \times 20 \times 5 = 400\text{ Wh}$</li>
      <li>2 ceiling fans of $80\text{ W}$ each for $10\text{ hours}$: $2 \times 80 \times 10 = 1600\text{ Wh}$</li>
      <li>1 refrigerator of $250\text{ W}$ running $24\text{ hours}$ (compressor active 10 hrs): $250 \times 10 = 2500\text{ Wh}$</li>
      <li>Total daily consumption $= 400 + 1600 + 2500 = 4500\text{ Wh} = 4.5\text{ kWh (units)}$.</li>
      <li>Consumption in 30 days $= 4.5 \times 30 = \mathbf{135\text{ units}}$.</li>
      <li>At a rate of $\text{Rs. } 6.00\text{ per unit}$, monthly cost $= 135 \times 6.00 = \mathbf{\text{Rs. } 810.00}$.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Energy in $\\text{kWh} = \\frac{\\text{Power in Watts} \\times \\text{Time in hours}}{1000}$.",
    "Total energy = sum of energies of all running appliances.",
    "Cost = Total $\\text{kWh (units)} \\times \\text{Cost per unit (tariff)}$.",
    "Convert minutes to hours and watts to kilowatts before calculating bills."
  ],
  "keyNotes": [
    "Energy conservation directly lowers utility bills: replacing a 100W incandescent bulb with a 10W LED saves 90% of electricity for identical illumination!"
  ],
  "questions": [
    get_bank_q(74, "m19_q01"),
    get_bank_q(75, "m19_q02"),
    get_bank_q(76, "m19_q03"),
    {
      "id": "m19_q04",
      "question": "A 2 kW electric geyser is used for 2 hours every day. At a tariff of Rs. 5.00 per unit, what is the cost of operating the geyser for 30 days?",
      "options": ["Rs. 600", "Rs. 300", "Rs. 120", "Rs. 1500"],
      "answer": "Rs. 600",
      "explanation": "Daily energy = 2 kW × 2 h = 4 kWh. 30 days energy = 4 × 30 = 120 kWh (units). Total cost = 120 units × Rs. 5 = Rs. 600."
    },
    {
      "id": "m19_q05",
      "question": "Five 60 W bulbs are used for 4 hours daily, and three 100 W fans are used for 10 hours daily. What is the total energy consumed in a 30-day month?",
      "options": ["126 kWh", "4.2 kWh", "420 kWh", "1260 kWh"],
      "answer": "126 kWh",
      "explanation": "Bulbs: 5 × 60 W × 4 h = 1200 Wh. Fans: 3 × 100 W × 10 h = 3000 Wh. Daily total = 4200 Wh = 4.2 kWh. Monthly = 4.2 × 30 = 126 kWh."
    },
    {
      "id": "m19_q06",
      "question": "What is the cost of running the appliances in the problem above for 30 days at Rs. 4.00 per unit?",
      "options": ["Rs. 504.00", "Rs. 252.00", "Rs. 1000.00", "Rs. 126.00"],
      "answer": "Rs. 504.00",
      "explanation": "Total units = 126 kWh. Cost = 126 × Rs. 4.00 = Rs. 504.00."
    },
    {
      "id": "m19_q07",
      "question": "How many units of electricity are saved in 30 days by replacing a 100 W incandescent bulb with a 10 W LED bulb, operating 10 hours each day?",
      "options": ["27 kWh (units)", "30 kWh", "3 kWh", "90 kWh"],
      "answer": "27 kWh (units)",
      "explanation": "Power saved = 100 W - 10 W = 90 W = 0.09 kW. Daily energy saved = 0.09 kW × 10 h = 0.9 kWh. 30 days: 0.9 × 30 = 27 kWh."
    },
    {
      "id": "m19_q08",
      "question": "An electric heater rated 1500 W operates for 3 hours. How many units of electricity did it consume?",
      "options": ["4.5 units", "0.5 units", "45 units", "1.5 units"],
      "answer": "4.5 units",
      "explanation": "Energy = 1.5 kW × 3 h = 4.5 kWh = 4.5 units."
    },
    {
      "id": "m19_q09",
      "question": "If an electric toaster consumes 2.2 kWh of energy in a week, how many Joules of energy did it consume?",
      "options": ["7.92 × 10^6 J", "2.2 × 10^6 J", "7.92 × 10^3 J", "2200 J"],
      "answer": "7.92 × 10^6 J",
      "explanation": "2.2 kWh = 2.2 × 3.6 × 10^6 J = 7.92 × 10^6 Joules."
    },
    {
      "id": "m19_q10",
      "question": "A student runs a 50 W laptop for 6 hours a day for an entire 30-day month. At Rs. 6.00 per unit, what is the cost on the electric bill?",
      "options": ["Rs. 54.00", "Rs. 90.00", "Rs. 18.00", "Rs. 108.00"],
      "answer": "Rs. 54.00",
      "explanation": "Daily energy = 50 W × 6 h = 300 Wh = 0.3 kWh. Monthly = 0.3 × 30 = 9 kWh. Cost = 9 × Rs. 6.00 = Rs. 54.00."
    }
  ]
}
modules_11_to_20.append(m19)

# ==========================================
# Module 20: Comprehensive Review & Mastery
# ==========================================
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Comprehensive Electricity Review: Circuits, Resistors & Power Mastery",
  "tagline": "Synthesis of Ohm's law, series/parallel combinations, Joule heating, and power formulas.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Master Summary of Governing Formulas in Electricity</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Physical Quantity</th><th>Formula(s)</th><th>SI Unit</th></tr></thead>
      <tbody>
        <tr><td><strong>Electric Current ($I$)</strong></td><td>$I = \frac{Q}{t} = \frac{n e}{t} = \frac{V}{R}$</td><td>Ampere (A)</td></tr>
        <tr><td><strong>Potential Difference ($V$)</strong></td><td>$V = \frac{W}{Q} = I \cdot R$</td><td>Volt (V)</td></tr>
        <tr><td><strong>Resistance ($R$)</strong></td><td>$R = \rho \frac{l}{A} = \rho \frac{l}{\pi r^2}$</td><td>Ohm ($\Omega$)</td></tr>
        <tr><td><strong>Resistivity ($\rho$)</strong></td><td>$\rho = R \frac{A}{l}$</td><td>Ohm-metre ($\Omega\cdot\text{m}$)</td></tr>
        <tr><td><strong>Series Resistance</strong></td><td>$R_s = R_1 + R_2 + R_3$</td><td>Ohm ($\Omega$)</td></tr>
        <tr><td><strong>Parallel Resistance</strong></td><td>$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$</td><td>Ohm ($\Omega$)</td></tr>
        <tr><td><strong>Joule's Heating ($H$)</strong></td><td>$H = I^2 R t = V I t = \frac{V^2}{R} t$</td><td>Joule (J)</td></tr>
        <tr><td><strong>Electric Power ($P$)</strong></td><td>$P = V I = I^2 R = \frac{V^2}{R} = \frac{W}{t}$</td><td>Watt (W)</td></tr>
        <tr><td><strong>Commercial Energy</strong></td><td>$E = P\text{ (kW)} \times t\text{ (h)}$</td><td>$\text{kWh}$ ($= 3.6 \times 10^6\text{ J}$)</td></tr>
      </tbody>
    </table>

    <h4>2. Expert Problem-Solving Guidelines</h4>
    <ul>
      <li>In series circuits, current $I$ is constant; voltage splits ($V = V_1 + V_2$).</li>
      <li>In parallel circuits, voltage $V$ is constant; current splits ($I = I_1 + I_2$).</li>
      <li>Always ensure units are converted into SI standard base units ($\text{A, V, }\Omega\text{, s, m}$) before calculation!</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Mastery of $V = IR$, $R = \\rho l/A$, and series/parallel equations solves $90\\%$ of board numericals.",
    "Joule heating: $H = I^2Rt$; Power: $P = VI = I^2R = V^2/R$.",
    "Commercial energy is measured in $\\text{kWh}$ ($1\\text{ unit} = 3.6 \\times 10^6\\text{ J}$)."
  ],
  "keyNotes": [
    "Always check whether appliances are in series or parallel before picking the power formula: use $P = I^2R$ for series and $P = V^2/R$ for parallel!"
  ],
  "questions": [
    get_bank_q(77, "m20_q01"),
    get_bank_q(78, "m20_q02"),
    get_bank_q(79, "m20_q03"),
    get_bank_q(80, "m20_q04"),
    get_bank_q(81, "m20_q05"),
    get_bank_q(82, "m20_q06"),
    get_bank_q(83, "m20_q07"),
    get_bank_q(84, "m20_q08"),
    get_bank_q(85, "m20_q09"),
    {
      "id": "m20_q10",
      "question": "Two electric bulbs rated 60 W, 220 V and 100 W, 220 V are connected in PARALLEL to a 220 V mains supply. What is the total current drawn from the line?",
      "options": ["0.73 A", "1.5 A", "0.27 A", "2.0 A"],
      "answer": "0.73 A",
      "explanation": "Total power P = 60 + 100 = 160 W. Since in parallel, V = 220 V. Total current I = P / V = 160 W / 220 V ≈ 0.727 A ≈ 0.73 A."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch11_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 11 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
