/* =============================================================================
   ELITE CLASSES — INTERACTIVE COURSE DATA
   Class 10 Science — Chapter 11: Electricity
   Comprehensive Curriculum: 20 Mini-Modules, 200 Questions Total
   High Educational Depth | Class 10 Student Standard | Zero Template Boilerplate
   ============================================================================= */

const COURSE_CHAPTER_11_SCIENCE = {
    "chapterId": "c10_sci_ch11",
    "chapterNumber": 11,
    "chapterTitle": "Electricity",
    "subject": "Science",
    "className": "Class 10",
    "totalModules": 20,
    "modules": [
        {
            "id": "m01",
            "moduleNumber": 1,
            "title": "Electric Charge, Quantization of Charge & Electric Current",
            "tagline": "Fundamental charge e, Q = ne, rate of flow of charge I = Q/t, and the Ampere.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Electric Charge ($Q$) & Quantization</h4>\n    <p><strong>Electric charge</strong> is an intrinsic fundamental property of subatomic particles that causes them to experience an electrostatic force. Charges exist in two polarities: positive (carried by protons) and negative (carried by electrons). The SI unit of electric charge is the <strong>coulomb (C)</strong>.</p>\n    <p>Charge is quantized: any observable quantity of charge $Q$ is an integral multiple of the fundamental elementary charge $e \\approx 1.6 \\times 10^{-19}\\text{ C}$:</p>\n    $$Q = n \\cdot e$$\n    <p>Where $n$ is an integer ($1, 2, 3, \\dots$). From this relation, the number of electrons constituting $1\\text{ coulomb}$ of negative charge is:</p>\n    $$n = \\frac{Q}{e} = \\frac{1\\text{ C}}{1.6 \\times 10^{-19}\\text{ C}} = \\mathbf{6.25 \\times 10^{18}\\text{ electrons}}$$\n\n    <h4>2. Definition of Electric Current ($I$)</h4>\n    <p><strong>Electric current</strong> is defined as the rate of flow of electric charge across any cross-section of a conductor in unit time:</p>\n    $$I = \\frac{Q}{t}$$\n    <p>Where $I$ is electric current, $Q$ is net charge flowing, and $t$ is the time interval.</p>\n\n    <h4>3. The SI Unit of Electric Current: The Ampere ($\\text{A}$)</h4>\n    <p>The SI unit of electric current is the <strong>ampere (A)</strong>, named in honour of French physicist André-Marie Ampère:</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"1 ampere is constituted by the flow of 1 coulomb of charge through a conductor in 1 second ($1\\text{ A} = 1\\text{ C/s}$).\"\n    </blockquote>\n    <p>Smaller sub-units commonly used in electronics:</p>\n    <ul>\n      <li>$1\\text{ milliampere (mA)} = 10^{-3}\\text{ A}$</li>\n      <li>$1\\text{ microampere (}\\mu\\text{A)} = 10^{-6}\\text{ A}$</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Charge is quantized: $Q = ne$; $1\\text{ C}$ equals the charge of approximately $6.25 \\times 10^{18}$ electrons.",
                "Electric current is the rate of flow of charge: $I = Q/t$.",
                "The SI unit of current is the Ampere ($1\\text{ A} = 1\\text{ C/s}$)."
            ],
            "keyNotes": [
                "A steady current of 1 ampere flowing through a copper wire means that $6.25 \\times 10^{18}$ electrons pass through its cross-sectional area every single second!"
            ],
            "questions": [
                {
                    "id": "m01_q01",
                    "question": "Electric current is defined as the rate of flow of electric charges across a cross-section of a conductor. What is its mathematical formula?",
                    "options": [
                        "I = Q × t",
                        "I = Q / t",
                        "I = t / Q",
                        "I = W / Q"
                    ],
                    "answer": "I = Q / t",
                    "explanation": "Electric current I = Q / t, where Q is net charge flowing in time t."
                },
                {
                    "id": "m01_q02",
                    "question": "What is the SI unit of electric current?",
                    "options": [
                        "Coulomb (C)",
                        "Ampere (A)",
                        "Volt (V)",
                        "Ohm (Ω)"
                    ],
                    "answer": "Ampere (A)",
                    "explanation": "The SI unit of electric current is ampere (A), named after André-Marie Ampère."
                },
                {
                    "id": "m01_q03",
                    "question": "What is the SI unit of electric charge?",
                    "options": [
                        "Ampere",
                        "Coulomb (C)",
                        "Joule",
                        "Watt"
                    ],
                    "answer": "Coulomb (C)",
                    "explanation": "The SI unit of electric charge is the coulomb (C)."
                },
                {
                    "id": "m01_q04",
                    "question": "How many electrons collectively constitute a net charge of ONE COULOMB (1 C)?",
                    "options": [
                        "1.6 × 10⁻¹⁹ electrons",
                        "6.25 × 10¹⁸ electrons (≈ 6 × 10¹⁸)",
                        "6.022 × 10²³ electrons",
                        "10⁶ electrons"
                    ],
                    "answer": "6.25 × 10¹⁸ electrons (≈ 6 × 10¹⁸)",
                    "explanation": "Number of electrons n = Q / e = 1 C / (1.6 × 10⁻¹⁹ C) = 6.25 × 10¹⁸ electrons."
                },
                {
                    "id": "m01_q05",
                    "question": "What is the magnitude of the negative charge possessed by a single electron?",
                    "options": [
                        "1.6 × 10⁻¹⁹ C",
                        "9.1 × 10⁻³¹ C",
                        "1.6 × 10¹⁹ C",
                        "1.0 C"
                    ],
                    "answer": "1.6 × 10⁻¹⁹ C",
                    "explanation": "The elementary charge of an electron is e = -1.6 × 10⁻¹⁹ C."
                },
                {
                    "id": "m01_q06",
                    "question": "How many electrons constitute a net electric charge of 1 Coulomb?",
                    "options": [
                        "6.25 × 10^18 electrons",
                        "1.6 × 10^-19 electrons",
                        "6.023 × 10^23 electrons",
                        "1.0 × 10^6 electrons"
                    ],
                    "answer": "6.25 × 10^18 electrons",
                    "explanation": "n = Q / e = 1 / (1.6 × 10^-19) = 6.25 × 10^18 electrons."
                },
                {
                    "id": "m01_q07",
                    "question": "If an electric current of 0.5 A is drawn by a filament of an electric bulb for 10 minutes, what is the amount of electric charge that flows through the circuit?",
                    "options": [
                        "5 C",
                        "300 C",
                        "50 C",
                        "3000 C"
                    ],
                    "answer": "300 C",
                    "explanation": "t = 10 minutes = 10 × 60 s = 600 s. Q = I × t = 0.5 A × 600 s = 300 C."
                },
                {
                    "id": "m01_q08",
                    "question": "What is the SI unit of electric charge?",
                    "options": [
                        "Ampere (A)",
                        "Coulomb (C)",
                        "Volt (V)",
                        "Joule (J)"
                    ],
                    "answer": "Coulomb (C)",
                    "explanation": "The SI unit of electric charge is the coulomb, symbolized as C."
                },
                {
                    "id": "m01_q09",
                    "question": "A current of 1 milliampere (1 mA) is equal to how many amperes?",
                    "options": [
                        "10^-3 A",
                        "10^-6 A",
                        "10^3 A",
                        "10^-1 A"
                    ],
                    "answer": "10^-3 A",
                    "explanation": "1 milliampere (mA) is one-thousandth of an ampere: 1 mA = 10^-3 A."
                },
                {
                    "id": "m01_q10",
                    "question": "What is the elementary charge carried by a single electron?",
                    "options": [
                        "-1.6 × 10^-19 C",
                        "+1.6 × 10^-19 C",
                        "-1.0 C",
                        "-9.1 × 10^-31 C"
                    ],
                    "answer": "-1.6 × 10^-19 C",
                    "explanation": "The fundamental quantum of electric charge on an electron is -1.6 × 10^-19 coulombs."
                }
            ]
        },
        {
            "id": "m02",
            "moduleNumber": 2,
            "title": "Direction of Electric Current vs Electron Drift & Circuit Diagrams",
            "tagline": "Conventional current from positive to negative vs physical electron drift from negative to positive.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Conventional Current vs Electronic Current</h4>\n    <p>Electricity was discovered before the electron was identified by J.J. Thomson in 1897. Early scientists postulated that electricity consisted of a flow of positive charges:</p>\n    <ul>\n      <li><strong>Conventional Current Direction:</strong> By historical convention, the direction of electric current is defined as the direction in which positive charges would move—from the <strong>positive terminal ($+$) to the negative terminal ($-$)</strong> of the cell through the external circuit.</li>\n      <li><strong>Actual Electron Flow (Electronic Current):</strong> In metallic conductors, the atomic nuclei and positive ions are anchored in a solid crystal lattice and cannot migrate. The actual mobile charge carriers are <strong>free electrons</strong> (negative charges) which drift from the <strong>negative terminal ($-$) to the positive terminal ($+$)</strong>.</li>\n      <li>Therefore, conventional electric current is always <strong>opposite to the direction of electron drift</strong>.</li>\n    </ul>\n\n    <h4>2. Electric Circuits & Closed Loops</h4>\n    <p>An <strong>electric circuit</strong> is a continuous and closed conducting loop through which an electric current flows. If the circuit is broken anywhere (e.g., an open switch or a broken filament), current ceases instantly.</p>\n\n    <h4>3. Standard Circuit Symbols</h4>\n    <ul>\n      <li><strong>Electric Cell:</strong> Long thin vertical line (positive) and short thick vertical line (negative).</li>\n      <li><strong>Battery:</strong> Series combination of two or more cells.</li>\n      <li><strong>Plug Key (Open vs Closed):</strong> $( \\quad )$ for open; $( \\cdot )$ for closed.</li>\n      <li><strong>Rheostat (Variable Resistor):</strong> Resistor with an arrow across or sliding contact on top.</li>\n      <li><strong>Ammeter & Voltmeter:</strong> Circles enclosing letter 'A' and letter 'V' respectively.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Conventional current flows from positive ($+$) to negative ($-$) terminal through the external circuit.",
                "Electrons physically drift in the opposite direction, from negative ($-$) to positive ($+$) terminal.",
                "A continuous, closed conducting loop is required for electric current to flow."
            ],
            "keyNotes": [
                "Even though individual electron drift velocity in a wire is surprisingly slow (~1 mm/s), the electric field propagates through the circuit near the speed of light, causing appliances to turn on instantaneously!"
            ],
            "questions": [
                {
                    "id": "m02_q01",
                    "question": "By convention, what is the direction of electric current in an electric circuit relative to the flow of electrons?",
                    "options": [
                        "In the exact same direction as electron flow",
                        "Opposite to the direction of flow of electrons (from positive to negative terminal outside the cell)",
                        "Perpendicular to electron flow",
                        "From negative to positive terminal"
                    ],
                    "answer": "Opposite to the direction of flow of electrons (from positive to negative terminal outside the cell)",
                    "explanation": "Conventional current flows from the positive to negative terminal, opposite to the direction of negatively charged electron drift."
                },
                {
                    "id": "m02_q02",
                    "question": "Which measuring instrument is connected in SERIES in an electric circuit to measure electric current?",
                    "options": [
                        "Voltmeter",
                        "Ammeter",
                        "Galvanometer in parallel",
                        "Rheostat"
                    ],
                    "answer": "Ammeter",
                    "explanation": "An ammeter has very low electrical resistance and is always connected in series to measure current flowing through a branch."
                },
                {
                    "id": "m02_q03",
                    "question": "What gases are filled inside incandescent electric light bulbs to prolong the life of the tungsten filament?",
                    "options": [
                        "Hydrogen and oxygen",
                        "Chemically inactive nitrogen and argon gases",
                        "Chlorine gas",
                        "Carbon dioxide"
                    ],
                    "answer": "Chemically inactive nitrogen and argon gases",
                    "explanation": "Unreactive nitrogen and argon prevent tungsten filament oxidation and suppress thermal evaporation."
                },
                {
                    "id": "m02_q04",
                    "question": "A metal wire of length 1 m and diameter 0.3 mm has a resistance of 26 Ω at 20°C. What is the electrical resistivity of the metal?",
                    "options": [
                        "1.84 × 10⁻⁶ Ω m (Manganese)",
                        "1.60 × 10⁻⁸ Ω m",
                        "10.0 × 10⁻⁸ Ω m",
                        "44 × 10⁻⁶ Ω m"
                    ],
                    "answer": "1.84 × 10⁻⁶ Ω m (Manganese)",
                    "explanation": "r = 0.15 mm = 1.5 × 10⁻⁴ m. A = πr² = π(1.5 × 10⁻⁴)² ≈ 7.068 × 10⁻⁸ m². ρ = RA/l = (26 × 7.068 × 10⁻⁸) / 1 = 1.84 × 10⁻⁶ Ω m."
                },
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
                    "options": [
                        "Ammeter",
                        "Rheostat (variable resistor)",
                        "Voltmeter",
                        "Electric fuse"
                    ],
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
                    "options": [
                        "Protons",
                        "Free conduction electrons",
                        "Neutrons",
                        "Positively charged ions"
                    ],
                    "answer": "Free conduction electrons",
                    "explanation": "In solid metals, outer valence electrons are delocalized, forming a mobile electron gas that drifts under an electric field."
                }
            ]
        },
        {
            "id": "m03",
            "moduleNumber": 3,
            "title": "Electric Potential & Potential Difference ($V = W/Q$)",
            "tagline": "Electrostatic work done per unit charge, the Volt, and gravitational water-pipe analogy.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The Water-Pipe Analogy: Why Do Charges Flow?</h4>\n    <p>Water does not flow spontaneously through a perfectly horizontal copper tube. However, if one end of the tube is connected to an elevated tank, a <strong>pressure difference</strong> is created by gravity, and water gushes through. Similarly, electric charges do not flow through a metal wire on their own. For electrons to move in a conductor, there must be a difference of electric pressure—called <strong>potential difference</strong>.</p>\n\n    <h4>2. Definition of Electric Potential Difference ($V$)</h4>\n    <p>The <strong>electric potential difference</strong> between two points in an electric circuit is defined as the amount of work done ($W$) in moving a unit positive charge ($Q$) from one point to the other:</p>\n    $$V = \\frac{W}{Q}$$\n    <p>Where $V$ is potential difference, $W$ is work done in joules, and $Q$ is electric charge in coulombs.</p>\n\n    <h4>3. The SI Unit: The Volt ($\\text{V}$)</h4>\n    <p>The SI unit of electric potential difference is the <strong>volt (V)</strong>, named in honour of Italian physicist Alessandro Volta:</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"1 volt is defined as the potential difference between two points in a current-carrying conductor when 1 joule of work is done in moving a charge of 1 coulomb from one point to the other ($1\\text{ V} = 1\\text{ J/C} = 1\\text{ J}\\cdot\\text{C}^{-1}$).\"\n    </blockquote>\n\n    <h4>4. How is Potential Difference Maintained?</h4>\n    <p>A chemical <strong>cell or battery</strong> maintains a constant potential difference between its terminals through internal electrochemical reactions. Chemical energy is converted into electrical potential energy, driving electrons continuously through the external circuit.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Potential difference is the work done per unit charge moving between two points: $V = W/Q$.",
                "The SI unit of potential difference is the Volt ($1\\text{ V} = 1\\text{ J/C}$).",
                "Chemical reactions inside a battery maintain the potential difference across its terminals."
            ],
            "keyNotes": [
                "Charge always flows naturally from a region of higher potential (positive terminal) to a region of lower potential (negative terminal)."
            ],
            "questions": [
                {
                    "id": "m03_q01",
                    "question": "How is electric potential difference (V) between two points defined mathematically in terms of work done (W) and charge (Q)?",
                    "options": [
                        "V = W × Q",
                        "V = W / Q",
                        "V = Q / W",
                        "V = W / t"
                    ],
                    "answer": "V = W / Q",
                    "explanation": "Potential difference V = W / Q is the work done in moving a unit positive charge between two points."
                },
                {
                    "id": "m03_q02",
                    "question": "What is the SI unit of electric potential and potential difference?",
                    "options": [
                        "Ohm",
                        "Volt (V, where 1 V = 1 J/C)",
                        "Watt",
                        "Ampere"
                    ],
                    "answer": "Volt (V, where 1 V = 1 J/C)",
                    "explanation": "The SI unit of potential difference is volt (V), named after Alessandro Volta (1 V = 1 J C⁻¹)."
                },
                {
                    "id": "m03_q03",
                    "question": "When several resistors R₁, R₂, R₃ are connected in SERIES, what is the formula for the equivalent resistance (Rs)?",
                    "options": [
                        "1/Rs = 1/R₁ + 1/R₂ + 1/R₃",
                        "Rs = R₁ + R₂ + R₃",
                        "Rs = R₁ × R₂ × R₃",
                        "Rs = (R₁ + R₂) / R₃"
                    ],
                    "answer": "Rs = R₁ + R₂ + R₃",
                    "explanation": "In series, the total resistance equals the sum of individual resistances: Rs = R₁ + R₂ + R₃."
                },
                {
                    "id": "m03_q04",
                    "question": "A wire of length l and cross-sectional area A has a resistance of 4 Ω. What is the resistance of another wire of the SAME material having length l/2 and area 2A?",
                    "options": [
                        "4 Ω",
                        "1 Ω",
                        "16 Ω",
                        "2 Ω"
                    ],
                    "answer": "1 Ω",
                    "explanation": "R₂ = ρ(l/2) / (2A) = (1/4) ρ(l/A) = (1/4) R₁ = (1/4) × 4 Ω = 1 Ω."
                },
                {
                    "id": "m03_q05",
                    "question": "What is the SI unit of electric potential difference?",
                    "options": [
                        "Ampere (A)",
                        "Volt (V)",
                        "Ohm (Ω)",
                        "Watt (W)"
                    ],
                    "answer": "Volt (V)",
                    "explanation": "The SI unit of potential difference is the volt, symbolized as V (where 1 V = 1 Joule / Coulomb)."
                },
                {
                    "id": "m03_q06",
                    "question": "How much work is done in moving a charge of 2 Coulombs across two points having a potential difference of 12 Volts?",
                    "options": [
                        "6 J",
                        "24 J",
                        "14 J",
                        "10 J"
                    ],
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
                    "options": [
                        "A voltmeter",
                        "An electric cell or battery",
                        "An ammeter",
                        "A resistor"
                    ],
                    "answer": "An electric cell or battery",
                    "explanation": "Electrochemical reactions inside a battery continuously regenerate the potential difference between its terminals."
                },
                {
                    "id": "m03_q09",
                    "question": "If 100 Joules of work is performed to transfer 20 Coulombs of charge from point A to point B, what is the potential difference between A and B?",
                    "options": [
                        "2000 V",
                        "5 V",
                        "0.2 V",
                        "80 V"
                    ],
                    "answer": "5 V",
                    "explanation": "V = W / Q = 100 J / 20 C = 5 V."
                },
                {
                    "id": "m03_q10",
                    "question": "In the gravitational water-pipe analogy, electric potential difference corresponds directly to:",
                    "options": [
                        "Water flow rate",
                        "Water pressure difference caused by height difference",
                        "Diameter of the pipe",
                        "Turbulence of water"
                    ],
                    "answer": "Water pressure difference caused by height difference",
                    "explanation": "Just as hydrostatic pressure drives water flow, electric potential difference (voltage) drives electric charge flow."
                }
            ]
        },
        {
            "id": "m04",
            "moduleNumber": 4,
            "title": "Measuring Instruments: Ammeter vs Voltmeter Connection & Resistance",
            "tagline": "Series connection of low-resistance ammeter vs parallel connection of high-resistance voltmeter.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The Ammeter (Measuring Electric Current)</h4>\n    <p>An <strong>ammeter</strong> measures the electric current flowing through a circuit branch:</p>\n    <ul>\n      <li><strong>Connection:</strong> Always connected in <strong>SERIES</strong> with the component whose current is to be measured. All current flowing through the component must pass through the ammeter.</li>\n      <li><strong>Internal Resistance:</strong> An ideal ammeter must have <strong>zero resistance</strong> (and a practical ammeter has extremely low resistance). If an ammeter had significant resistance, it would increase the total circuit resistance and falsely decrease the current it is trying to measure.</li>\n    </ul>\n\n    <h4>2. The Voltmeter (Measuring Potential Difference)</h4>\n    <p>A <strong>voltmeter</strong> measures the electrical potential difference between two designated points:</p>\n    <ul>\n      <li><strong>Connection:</strong> Always connected in <strong>PARALLEL</strong> across the two points or component.</li>\n      <li><strong>Internal Resistance:</strong> An ideal voltmeter must have <strong>infinite resistance</strong> (and a practical voltmeter has very high resistance). High resistance ensures that negligible current is drawn from the main circuit branch, preventing perturbation of the voltage being measured.</li>\n    </ul>\n\n    <h4>3. Summary of Differences</h4>\n    <table class=\"table-bordered\" style=\"width:100%; border-collapse:collapse; margin:10px 0;\">\n      <thead><tr style=\"background:#f1f5f9;\"><th>Feature</th><th>Ammeter</th><th>Voltmeter</th></tr></thead>\n      <tbody>\n        <tr><td><strong>Measures</strong></td><td>Electric Current ($I$, Amperes)</td><td>Potential Difference ($V$, Volts)</td></tr>\n        <tr><td><strong>Circuit Connection</strong></td><td><strong>Series</strong></td><td><strong>Parallel</strong></td></tr>\n        <tr><td><strong>Internal Resistance</strong></td><td><strong>Extremely Low</strong> (Ideal: $R = 0$)</td><td><strong>Extremely High</strong> (Ideal: $R = \\infty$)</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "An ammeter is connected in SERIES and has very LOW resistance (ideal: $0$).",
                "A voltmeter is connected in PARALLEL and has very HIGH resistance (ideal: $\\infty$).",
                "Reversing the connection (connecting ammeter in parallel) will cause a massive short circuit!"
            ],
            "keyNotes": [
                "Always connect the positive ($+$) terminal of an ammeter or voltmeter towards the positive pole of the battery, and the negative ($-$) terminal towards the negative pole."
            ],
            "questions": [
                {
                    "id": "m04_q01",
                    "question": "Which measuring instrument is always connected in PARALLEL across two points to measure the potential difference between them?",
                    "options": [
                        "Ammeter",
                        "Voltmeter",
                        "Galvanometer in series",
                        "Rheostat"
                    ],
                    "answer": "Voltmeter",
                    "explanation": "A voltmeter has high electrical resistance and is connected in parallel across components to measure voltage drop."
                },
                {
                    "id": "m04_q02",
                    "question": "In a series circuit containing multiple resistors connected across a battery, which quantity remains CONSTANT through every resistor?",
                    "options": [
                        "Potential difference (V)",
                        "Electric current (I)",
                        "Power dissipation",
                        "Resistance"
                    ],
                    "answer": "Electric current (I)",
                    "explanation": "In a single unbranched series loop, electric current I is identical through all components."
                },
                {
                    "id": "m04_q03",
                    "question": "How can three resistors of resistances 2 Ω, 3 Ω, and 6 Ω be connected to yield a total equivalent resistance of EXACTLY 4 Ω?",
                    "options": [
                        "All three connected in series",
                        "Connect 3 Ω and 6 Ω in parallel, and put this combination in series with the 2 Ω resistor",
                        "Connect 2 Ω and 3 Ω in parallel, in series with 6 Ω",
                        "All three connected in parallel"
                    ],
                    "answer": "Connect 3 Ω and 6 Ω in parallel, and put this combination in series with the 2 Ω resistor",
                    "explanation": "Parallel of 3 Ω and 6 Ω: Rp = (3 × 6)/(3 + 6) = 18/9 = 2 Ω. Adding 2 Ω in series: R_total = 2 Ω + 2 Ω = 4 Ω."
                },
                {
                    "id": "m04_q04",
                    "question": "How is an ammeter connected in an electric circuit to measure current?",
                    "options": [
                        "Always in parallel",
                        "Always in series",
                        "Across the battery terminals only",
                        "Outside the room"
                    ],
                    "answer": "Always in series",
                    "explanation": "An ammeter must be placed in series so the entire current of the branch passes through its sensor."
                },
                {
                    "id": "m04_q05",
                    "question": "How is a voltmeter connected in an electric circuit to measure potential difference across a resistor?",
                    "options": [
                        "Always in series",
                        "Always in parallel across the resistor",
                        "Between ground and sky",
                        "Directly inside the battery acid"
                    ],
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
                    "options": [
                        "10 mA",
                        "1 mA",
                        "5 mA",
                        "0.1 mA"
                    ],
                    "answer": "10 mA",
                    "explanation": "Least count = Total range / Number of divisions = 500 mA / 50 = 10 mA per division."
                }
            ]
        },
        {
            "id": "m05",
            "moduleNumber": 5,
            "title": "Ohm's Law: Mathematical Formulation ($V = IR$) & The V-I Graph",
            "tagline": "Direct proportionality between V and I, linear V-I graphs, and the concept of electrical resistance.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Georg Simon Ohm's Discovery (1827)</h4>\n    <p>German physicist Georg Simon Ohm conducted precise experiments investigating the relationship between the potential difference across a metallic conductor and the resulting current flowing through it. He formulated <strong>Ohm's Law</strong>:</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"The electric current flowing through a metallic conductor is directly proportional to the potential difference applied across its ends, provided its temperature and other physical conditions remain constant.\"\n    </blockquote>\n    $$V \\propto I \\quad \\implies \\quad \\frac{V}{I} = \\text{constant} = R$$\n    $$V = I \\cdot R$$\n    <p>Where the proportionality constant $R$ is called the <strong>electrical resistance</strong> of the conductor.</p>\n\n    <h4>2. The V-I Characteristic Graph</h4>\n    <p>If we plot a graph of potential difference ($V$) along the $y$-axis against current ($I$) along the $x$-axis for a metallic conductor at constant temperature:</p>\n    <ul>\n      <li>The graph is a <strong>straight line passing through the origin $(0,0)$</strong>.</li>\n      <li>The <strong>slope of the $V\\text{-}I$ graph</strong> represents the electrical resistance ($R$) of the conductor:\n        $$\\text{Slope} = \\frac{\\Delta V}{\\Delta I} = R$$\n      </li>\n      <li>Conductors that obey Ohm's law with a straight-line graph are called <strong>ohmic conductors</strong> (e.g., metals, nichrome wire). Devices where the $V\\text{-}I$ graph is non-linear (e.g., diodes, transistors) are called <strong>non-ohmic conductors</strong>.</li>\n    </ul>\n\n    <h4>3. SI Unit of Resistance: The Ohm ($\\Omega$)</h4>\n    <p>The SI unit of resistance is the <strong>ohm</strong>, symbolized by the Greek capital letter $\\mathbf{\\Omega}$:</p>\n    $$1\\ \\Omega = \\frac{1\\text{ Volt}}{1\\text{ Ampere}} = 1\\text{ V/A}$$\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Ohm's Law: $V = IR$ at constant temperature and physical dimensions.",
                "The $V\\text{-}I$ graph for an ohmic conductor is a straight line through the origin; its slope equals resistance $R$.",
                "SI unit of resistance is the Ohm ($\\Omega$): $1\\ \\Omega = 1\\text{ V}/1\\text{ A}$."
            ],
            "keyNotes": [
                "Temperature must remain constant for Ohm's law to hold; if a filament gets red-hot, its resistance increases and the V-I curve bends upwards away from linearity."
            ],
            "questions": [
                {
                    "id": "m05_q01",
                    "question": "According to Georg Simon Ohm's Law (1827), what is the relationship between potential difference (V) and current (I) across a metallic conductor at constant temperature?",
                    "options": [
                        "V ∝ 1/I",
                        "V ∝ I (V = IR)",
                        "V ∝ I²",
                        "V × I = constant"
                    ],
                    "answer": "V ∝ I (V = IR)",
                    "explanation": "Ohm's Law: The potential difference across a conductor is directly proportional to the current flowing through it at constant temperature (V = IR)."
                },
                {
                    "id": "m05_q02",
                    "question": "What is the shape of the V–I graph for a metallic conductor (like nichrome wire) obeying Ohm's Law?",
                    "options": [
                        "A parabolic curve",
                        "A straight line passing through the origin",
                        "A circular arc",
                        "A hyperbolic wave"
                    ],
                    "answer": "A straight line passing through the origin",
                    "explanation": "A linear V-I plot passing through the origin confirms constant resistance (R = V/I = slope)."
                },
                {
                    "id": "m05_q03",
                    "question": "When three resistors R₁, R₂, R₃ are connected in PARALLEL across a battery, what is the formula for the equivalent resistance (Rp)?",
                    "options": [
                        "Rp = R₁ + R₂ + R₃",
                        "1/Rp = 1/R₁ + 1/R₂ + 1/R₃",
                        "Rp = 1/(R₁ + R₂ + R₃)",
                        "Rp = R₁R₂R₃"
                    ],
                    "answer": "1/Rp = 1/R₁ + 1/R₂ + 1/R₃",
                    "explanation": "In parallel, reciprocal of equivalent resistance equals sum of reciprocals: 1/Rp = 1/R₁ + 1/R₂ + 1/R₃."
                },
                {
                    "id": "m05_q04",
                    "question": "How can three resistors of resistances 2 Ω, 3 Ω, and 6 Ω be connected to yield a total equivalent resistance of EXACTLY 1 Ω?",
                    "options": [
                        "All three connected in parallel",
                        "All three connected in series",
                        "2 Ω in series with parallel of 3 Ω and 6 Ω",
                        "6 Ω in parallel with 2 Ω, in series with 3 Ω"
                    ],
                    "answer": "All three connected in parallel",
                    "explanation": "1/Rp = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 6/6 = 1 ⇒ Rp = 1 Ω."
                },
                {
                    "id": "m05_q05",
                    "question": "What is the mathematical formulation of Ohm's Law?",
                    "options": [
                        "V = I / R",
                        "V = I × R",
                        "I = V × R",
                        "R = V × I"
                    ],
                    "answer": "V = I × R",
                    "explanation": "Ohm's law states that potential difference equals current multiplied by resistance: V = IR."
                },
                {
                    "id": "m05_q06",
                    "question": "What does the slope of a linear Potential Difference vs Current (V-I) graph represent?",
                    "options": [
                        "Electric charge",
                        "Electrical resistance (R)",
                        "Electric power",
                        "Heat energy"
                    ],
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
                    "options": [
                        "110 Ω",
                        "440 Ω",
                        "220 Ω",
                        "55 Ω"
                    ],
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
                    "options": [
                        "It is halved",
                        "It doubles",
                        "It quadruples",
                        "It remains unchanged"
                    ],
                    "answer": "It doubles",
                    "explanation": "According to Ohm's law (I = V/R), current is directly proportional to voltage, so doubling V doubles I."
                }
            ]
        },
        {
            "id": "m06",
            "moduleNumber": 6,
            "title": "Factors Affecting Electrical Resistance ($R = \\rho l / A$)",
            "tagline": "Dependence of resistance on conductor length, cross-sectional area, material nature, and temperature.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. What is Electrical Resistance?</h4>\n    <p><strong>Resistance</strong> is the property of a conductor by virtue of which it opposes the flow of electric charges through it. At the microscopic level, drifting electrons continuously collide with vibrating lattice ions, losing kinetic energy and facing resistance.</p>\n\n    <h4>2. The Four Determinative Factors of Resistance</h4>\n    <p>Systematic laboratory experiments prove that the electrical resistance ($R$) of a uniform metallic conductor depends on four distinct factors:</p>\n    <ol>\n      <li><strong>Length of the Conductor ($l$):</strong> Resistance is <strong>directly proportional</strong> to length:\n        $$R \\propto l$$\n        Doubling the length doubles the number of ion collisions, doubling resistance.\n      </li>\n      <li><strong>Cross-Sectional Area ($A$):</strong> Resistance is <strong>inversely proportional</strong> to cross-sectional area (thickness):\n        $$R \\propto \\frac{1}{A} \\quad \\left(\\text{or } R \\propto \\frac{1}{r^2} \\text{ where } r \\text{ is radius}\\right)$$\n        A thicker wire provides a wider path with more free electrons, offering less resistance.\n      </li>\n      <li><strong>Nature of the Material:</strong> Different metals possess differing free electron densities and lattice structures, characterized by <strong>electrical resistivity ($\\rho$)</strong>.</li>\n      <li><strong>Temperature:</strong> For pure metallic conductors, resistance <strong>increases with increasing temperature</strong> due to enhanced thermal lattice vibrations.</li>\n    </ol>\n\n    <h4>3. The Master Resistance Formula</h4>\n    <p>Combining the geometric dependencies yields:</p>\n    $$R = \\rho \\frac{l}{A} = \\rho \\frac{l}{\\pi r^2}$$\n    <p>Where $\\rho$ (rho) is the specific electrical resistivity of the material.</p>\n  </div>\n</div>\n",
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
                {
                    "id": "m06_q01",
                    "question": "What is the SI unit of electrical resistance?",
                    "options": [
                        "Ampere",
                        "Ohm (Ω, where 1 Ω = 1 V / 1 A)",
                        "Volt",
                        "Siemens"
                    ],
                    "answer": "Ohm (Ω, where 1 Ω = 1 V / 1 A)",
                    "explanation": "The SI unit of resistance is the ohm (Ω). 1 Ω = 1 V / 1 A."
                },
                {
                    "id": "m06_q02",
                    "question": "A circuit component used to adjust and regulate current in an electric circuit without changing the potential difference of the voltage source is called a:",
                    "options": [
                        "Voltmeter",
                        "Rheostat (Variable resistor)",
                        "Galvanometer",
                        "Fuse"
                    ],
                    "answer": "Rheostat (Variable resistor)",
                    "explanation": "A rheostat provides variable resistance, allowing continuous regulation of current without altering the source voltage."
                },
                {
                    "id": "m06_q03",
                    "question": "In a parallel electric circuit, which physical quantity is the SAME across each individual branch resistor?",
                    "options": [
                        "Electric current (I)",
                        "Potential difference (V, Voltage)",
                        "Resistance",
                        "Charge flow rate"
                    ],
                    "answer": "Potential difference (V, Voltage)",
                    "explanation": "All parallel branches connect between the same two common nodes, maintaining identical potential difference V."
                },
                {
                    "id": "m06_q04",
                    "question": "What are the HIGHEST and LOWEST total resistances that can be secured by combining four resistance coils of 4 Ω, 8 Ω, 12 Ω, and 24 Ω?",
                    "options": [
                        "Highest = 24 Ω; Lowest = 4 Ω",
                        "Highest = 48 Ω (in series); Lowest = 2 Ω (in parallel)",
                        "Highest = 96 Ω; Lowest = 1 Ω",
                        "Highest = 48 Ω; Lowest = 4 Ω"
                    ],
                    "answer": "Highest = 48 Ω (in series); Lowest = 2 Ω (in parallel)",
                    "explanation": "Highest (series): 4 + 8 + 12 + 24 = 48 Ω. Lowest (parallel): 1/Rp = 1/4 + 1/8 + 1/12 + 1/24 = (6 + 3 + 2 + 1)/24 = 12/24 = 1/2 ⇒ Rp = 2 Ω."
                },
                {
                    "id": "m06_q05",
                    "question": "How does the electrical resistance of a uniform metallic wire change if its length is doubled while keeping its thickness constant?",
                    "options": [
                        "It is halved",
                        "It doubles (2R)",
                        "It quadruples (4R)",
                        "It remains unchanged"
                    ],
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
                    "options": [
                        "2R",
                        "4R",
                        "R/2",
                        "R/4"
                    ],
                    "answer": "4R",
                    "explanation": "Volume is constant: when length doubles (l' = 2l), area is halved (A' = A/2). New resistance R' = ρ(2l)/(A/2) = 4(ρl/A) = 4R."
                },
                {
                    "id": "m06_q08",
                    "question": "If the radius of a metallic wire is halved while its length remains constant, how does its resistance change?",
                    "options": [
                        "It increases by 2 times",
                        "It increases by 4 times",
                        "It increases by 16 times",
                        "It is halved"
                    ],
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
                    "options": [
                        "R = ρ × l / A",
                        "R = ρ × A / l",
                        "R = l × A / ρ",
                        "ρ = R × l / A"
                    ],
                    "answer": "R = ρ × l / A",
                    "explanation": "Resistance is directly proportional to length and inversely proportional to area: R = ρl/A."
                }
            ]
        },
        {
            "id": "m07",
            "moduleNumber": 7,
            "title": "Electrical Resistivity ($\\rho$): The Intrinsic Material Property",
            "tagline": "Specific resistance, SI unit Ohm-metre (Ω·m), and conductors, alloys vs insulators.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Definition of Electrical Resistivity ($\\rho$)</h4>\n    <p>From the resistance formula $R = \\rho \\frac{l}{A}$, solving for $\\rho$ gives:</p>\n    $$\\rho = R \\frac{A}{l}$$\n    <p>If we consider a specimen of a material with unit length ($l = 1\\text{ m}$) and unit cross-sectional area ($A = 1\\text{ m}^2$):</p>\n    $$\\rho = R$$\n    <p>Hence, <strong>electrical resistivity</strong> (or specific resistance) of a substance is numerically equal to the resistance offered by a unit cube ($1\\text{ m} \\times 1\\text{ m} \\times 1\\text{ m}$) of that material across opposing faces.</p>\n\n    <h4>2. SI Unit of Electrical Resistivity: The Ohm-metre ($\\Omega\\cdot\\text{m}$)</h4>\n    $$\\text{Unit of } \\rho = \\frac{\\Omega \\cdot \\text{m}^2}{\\text{m}} = \\mathbf{\\Omega\\cdot\\text{m}}$$\n\n    <h4>3. Classification of Materials by Resistivity</h4>\n    <ul>\n      <li><strong>Conductors (Metals):</strong> Extremely low resistivity in the range of $10^{-8}\\ \\Omega\\cdot\\text{m}\\text{ to }10^{-6}\\ \\Omega\\cdot\\text{m}$.\n        <ul>\n          <li><strong>Silver ($\\rho \\approx 1.60 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$):</strong> Best electrical conductor.</li>\n          <li><strong>Copper ($\\rho \\approx 1.62 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) & Aluminium:</strong> Used universally for domestic transmission cables.</li>\n        </ul>\n      </li>\n      <li><strong>Alloys (e.g., Nichrome, Manganin, Constantan):</strong> Higher resistivity than constituent metals ($10^{-6}\\ \\Omega\\cdot\\text{m}$). They do not oxidize (burn) readily even at high red-hot temperatures ($>800^\\circ\\text{C}$), making them ideal for heating elements.</li>\n      <li><strong>Insulators (e.g., Glass, Hard Rubber):</strong> Enormously high resistivity in the range of $10^{12}\\ \\Omega\\cdot\\text{m}\\text{ to }10^{17}\\ \\Omega\\cdot\\text{m}$.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Resistivity ($\\rho$) is an intrinsic material property; it does NOT depend on wire length or thickness.",
                "The SI unit of electrical resistivity is the Ohm-metre ($\\Omega\\cdot\\text{m}$).",
                "Silver is the best electrical conductor; copper/aluminium are used for wiring; nichrome alloy is used for heating elements."
            ],
            "keyNotes": [
                "Resistance changes when you cut or stretch a wire, but electrical resistivity ($\\rho$) remains completely unchanged because resistivity depends only on material and temperature!"
            ],
            "questions": [
                {
                    "id": "m07_q01",
                    "question": "The electrical resistance (R) of a uniform cylindrical metallic conductor depends directly on its length (l) and inversely on its area of cross-section (A). What is the formula?",
                    "options": [
                        "R = ρ × (A / l)",
                        "R = ρ × (l / A)",
                        "R = ρ × l × A",
                        "R = l / (ρ × A)"
                    ],
                    "answer": "R = ρ × (l / A)",
                    "explanation": "Resistance R = ρ(l / A), where ρ is the electrical resistivity of the material."
                },
                {
                    "id": "m07_q02",
                    "question": "What is the SI unit of electrical resistivity (ρ)?",
                    "options": [
                        "Ohm (Ω)",
                        "Ohm metre (Ω m)",
                        "Ohm per metre (Ω/m)",
                        "Volt metre"
                    ],
                    "answer": "Ohm metre (Ω m)",
                    "explanation": "Resistivity ρ = R·A / l = (Ω · m²) / m = Ω m."
                },
                {
                    "id": "m07_q03",
                    "question": "Why is domestic household wiring connected in PARALLEL rather than in series?",
                    "options": [
                        "Series wiring uses too many fuses",
                        "Parallel connection provides the same rated voltage (220 V) to every appliance, allows independent on/off switching, and prevents total circuit failure if one device fails",
                        "Parallel wiring increases total resistance",
                        "Series wiring produces no heat"
                    ],
                    "answer": "Parallel connection provides the same rated voltage (220 V) to every appliance, allows independent on/off switching, and prevents total circuit failure if one device fails",
                    "explanation": "Parallel circuits provide full supply voltage to each load, enable independent control, and prevent single-point failure."
                },
                {
                    "id": "m07_q04",
                    "question": "How many 176 Ω resistors connected in parallel are required to carry a current of 5 A on a 220 V line?",
                    "options": [
                        "2 resistors",
                        "4 resistors",
                        "8 resistors",
                        "10 resistors"
                    ],
                    "answer": "4 resistors",
                    "explanation": "Required total resistance R = V / I = 220 V / 5 A = 44 Ω. Since R = 176 / n ⇒ n = 176 / 44 = 4 resistors."
                },
                {
                    "id": "m07_q05",
                    "question": "What is the SI unit of electrical resistivity?",
                    "options": [
                        "Ohm (Ω)",
                        "Ohm-metre (Ω·m)",
                        "Ohm / metre (Ω/m)",
                        "Siemens / metre"
                    ],
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
                    "options": [
                        "Copper",
                        "Silver",
                        "Gold",
                        "Aluminium"
                    ],
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
                    "options": [
                        "10^-8 to 10^-6 Ω·m",
                        "10^12 to 10^17 Ω·m",
                        "10^2 to 10^4 Ω·m",
                        "1.0 Ω·m"
                    ],
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
        },
        {
            "id": "m08",
            "moduleNumber": 8,
            "title": "Resistors in Series: Current Invariance & Equivalent Resistance ($R_s$)",
            "tagline": "Single conducting pathway, identical current throughout, voltage addition, and Rs = R1 + R2 + R3.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Definition of a Series Combination</h4>\n    <p>Two or more resistors are said to be connected in <strong>series</strong> when they are joined end-to-end consecutively so that there is only a <strong>single continuous conducting path</strong> for electric current to flow from the source through all the resistors.</p>\n\n    <h4>2. Fundamental Laws of Series Circuits</h4>\n    <ol>\n      <li><strong>Current Invariance ($I$ is Constant):</strong> The electric current ($I$) flowing through each individual resistor in series is <strong>strictly identical</strong>, because electric charge cannot accumulate or leak along the single pathway:\n        $$I = I_1 = I_2 = I_3$$\n      </li>\n      <li><strong>Voltage Division ($V$ Adds Up):</strong> The total potential difference ($V$) applied across the combination equals the sum of the individual potential drops across each resistor:\n        $$V = V_1 + V_2 + V_3$$\n      </li>\n    </ol>\n\n    <h4>3. Derivation of Equivalent Resistance ($R_s$)</h4>\n    <p>Applying Ohm's law to each resistor:</p>\n    $$V_1 = I R_1, \\quad V_2 = I R_2, \\quad V_3 = I R_3$$\n    <p>If $R_s$ is the equivalent resistance of the series combination, then $V = I R_s$. Substituting into the voltage addition equation:</p>\n    $$I R_s = I R_1 + I R_2 + I R_3$$\n    <p>Dividing throughout by the common current $I$:</p>\n    $$\\mathbf{R_s = R_1 + R_2 + R_3}$$\n    <p>For $n$ identical resistors of resistance $R$ in series: $R_s = n \\cdot R$.</p>\n    <p><em>Conclusion:</em> The equivalent resistance of a series combination is <strong>always greater than the highest individual resistance</strong> in the circuit.</p>\n  </div>\n</div>\n",
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
                {
                    "id": "m08_q01",
                    "question": "Which metal has the LOWEST electrical resistivity (1.60 × 10⁻⁸ Ω m at 20°C) and is the BEST conductor of electricity?",
                    "options": [
                        "Copper",
                        "Silver",
                        "Aluminium",
                        "Iron"
                    ],
                    "answer": "Silver",
                    "explanation": "Silver has the lowest electrical resistivity (1.60 × 10⁻⁸ Ω m), making it the finest electrical conductor."
                },
                {
                    "id": "m08_q02",
                    "question": "Why are copper and aluminium metals universally employed for electrical power transmission lines?",
                    "options": [
                        "They are insulators",
                        "They have very low electrical resistivity, minimizing I²Rt energy losses, and are ductile and economical",
                        "They melt easily",
                        "They have negative resistance"
                    ],
                    "answer": "They have very low electrical resistivity, minimizing I²Rt energy losses, and are ductile and economical",
                    "explanation": "Low resistivity of copper (1.62 × 10⁻⁸ Ω m) and aluminium (2.63 × 10⁻⁸ Ω m) minimizes resistive heat dissipation during power transmission."
                },
                {
                    "id": "m08_q03",
                    "question": "What is Joule's Law of Heating for the heat (H) produced in a resistor of resistance R carrying current I for time t?",
                    "options": [
                        "H = I R t",
                        "H = I² R t (or H = V I t = V²t / R)",
                        "H = I R² t",
                        "H = I² / (R t)"
                    ],
                    "answer": "H = I² R t (or H = V I t = V²t / R)",
                    "explanation": "Joule's Law: Heat generated is directly proportional to I², R, and t: H = I²Rt."
                },
                {
                    "id": "m08_q04",
                    "question": "An electric oven hot plate has two resistance coils A and B, each of 24 Ω, connected to a 220 V line. What are the currents when used (i) separately, (ii) in series, and (iii) in parallel?",
                    "options": [
                        "Separately = 9.17 A; Series = 4.58 A; Parallel = 18.33 A",
                        "Separately = 10 A; Series = 5 A; Parallel = 20 A",
                        "Separately = 4.58 A; Series = 9.17 A; Parallel = 18.33 A",
                        "Separately = 24 A; Series = 48 A; Parallel = 12 A"
                    ],
                    "answer": "Separately = 9.17 A; Series = 4.58 A; Parallel = 18.33 A",
                    "explanation": "(i) Separately: I = 220/24 = 9.167 A. (ii) Series (48 Ω): I = 220/48 = 4.583 A. (iii) Parallel (12 Ω): I = 220/12 = 18.33 A."
                },
                {
                    "id": "m08_q05",
                    "question": "What is the equivalent resistance of three resistors of 2 Ω, 3 Ω, and 5 Ω connected in series?",
                    "options": [
                        "10 Ω",
                        "1 Ω",
                        "30 Ω",
                        "0.97 Ω"
                    ],
                    "answer": "10 Ω",
                    "explanation": "In series, equivalent resistance is the algebraic sum: Rs = R1 + R2 + R3 = 2 + 3 + 5 = 10 Ω."
                },
                {
                    "id": "m08_q06",
                    "question": "What physical quantity remains strictly IDENTICAL through every resistor connected in a series circuit?",
                    "options": [
                        "Electric current (I)",
                        "Potential difference (V)",
                        "Power consumed",
                        "Heat energy"
                    ],
                    "answer": "Electric current (I)",
                    "explanation": "Because there is only one pathway for charge, the current flowing through every series component is identical."
                },
                {
                    "id": "m08_q07",
                    "question": "If an electric lamp of resistance 20 Ω and a conductor of resistance 4 Ω are connected in series to a 6 V battery, what is the total circuit current?",
                    "options": [
                        "0.25 A",
                        "1.5 A",
                        "0.5 A",
                        "2.4 A"
                    ],
                    "answer": "0.25 A",
                    "explanation": "Rs = 20 + 4 = 24 Ω. By Ohm's law, I = V / Rs = 6 V / 24 Ω = 0.25 A."
                },
                {
                    "id": "m08_q08",
                    "question": "In the circuit above (I = 0.25 A, R_lamp = 20 Ω, R_conductor = 4 Ω), what is the potential difference across the electric lamp?",
                    "options": [
                        "5 V",
                        "1 V",
                        "6 V",
                        "4 V"
                    ],
                    "answer": "5 V",
                    "explanation": "V_lamp = I × R_lamp = 0.25 A × 20 Ω = 5 V. (The remaining 1 V drops across the 4 Ω conductor)."
                },
                {
                    "id": "m08_q09",
                    "question": "If n identical resistors each of resistance R are connected in series, what is the equivalent resistance of the combination?",
                    "options": [
                        "n × R",
                        "R / n",
                        "n^2 × R",
                        "R / n^2"
                    ],
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
        },
        {
            "id": "m09",
            "moduleNumber": 9,
            "title": "Resistors in Parallel: Voltage Invariance & Equivalent Resistance ($R_p$)",
            "tagline": "Multiple conducting branches, common voltage V, current splitting, and 1/Rp = 1/R1 + 1/R2 + 1/R3.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Definition of a Parallel Combination</h4>\n    <p>Resistors are connected in <strong>parallel</strong> when they are connected across the same two common junction points, providing <strong>multiple alternative conducting branches</strong> for electric current.</p>\n\n    <h4>2. Fundamental Laws of Parallel Circuits</h4>\n    <ol>\n      <li><strong>Voltage Invariance ($V$ is Constant):</strong> The potential difference ($V$) across each individual parallel branch is <strong>strictly identical</strong> and equal to the applied voltage of the power source:\n        $$V = V_1 = V_2 = V_3$$\n      </li>\n      <li><strong>Current Division ($I$ Adds Up):</strong> The total current ($I$) entering the junction splits among the branches according to their individual resistances:\n        $$I = I_1 + I_2 + I_3$$\n      </li>\n    </ol>\n\n    <h4>3. Derivation of Equivalent Resistance ($R_p$)</h4>\n    <p>Applying Ohm's law to each branch:</p>\n    $$I_1 = \\frac{V}{R_1}, \\quad I_2 = \\frac{V}{R_2}, \\quad I_3 = \\frac{V}{R_3}$$\n    <p>If $R_p$ is the equivalent resistance, then $I = \\frac{V}{R_p}$. Substituting into the current equation:</p>\n    $$\\frac{V}{R_p} = \\frac{V}{R_1} + \\frac{V}{R_2} + \\frac{V}{R_3}$$\n    <p>Dividing throughout by the common potential difference $V$:</p>\n    $$\\mathbf{\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}}$$\n\n    <h4>4. Two Resistors in Parallel (Shortcut Formula)</h4>\n    $$R_p = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{\\text{Product}}{\\text{Sum}}$$\n    <p>For $n$ identical resistors of resistance $R$ in parallel: $R_p = \\frac{R}{n}$.</p>\n    <p><em>Conclusion:</em> The equivalent resistance of a parallel circuit is <strong>always smaller than the smallest individual resistance</strong> in the group!</p>\n  </div>\n</div>\n",
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
                {
                    "id": "m09_q01",
                    "question": "Which metal with an exceptionally high melting point of 3380°C is used almost exclusively for the filaments of incandescent electric lamps?",
                    "options": [
                        "Copper",
                        "Tungsten (W)",
                        "Aluminium",
                        "Lead"
                    ],
                    "answer": "Tungsten (W)",
                    "explanation": "Tungsten has a melting point of 3380°C and high tensile strength, allowing filaments to glow white-hot without melting."
                },
                {
                    "id": "m09_q02",
                    "question": "How is an electric safety fuse connected in a domestic circuit to protect appliances from overcurrent and short-circuits?",
                    "options": [
                        "In parallel across the neutral wire",
                        "In series with the live wire before appliances",
                        "In parallel with the earth wire",
                        "Inside the electricity meter only"
                    ],
                    "answer": "In series with the live wire before appliances",
                    "explanation": "A fuse is placed in series with the live wire so excessive current heats and melts the fuse wire, breaking the circuit."
                },
                {
                    "id": "m09_q03",
                    "question": "Which appliance consumes more electrical energy: a 250 W TV set operated for 1 hour, or a 1200 W toaster operated for 10 minutes?",
                    "options": [
                        "Toaster uses more energy",
                        "TV set uses more energy (250 Wh = 9.0 × 10⁵ J vs Toaster 200 Wh = 7.2 × 10⁵ J)",
                        "Both consume identical energy",
                        "Cannot be determined without voltage"
                    ],
                    "answer": "TV set uses more energy (250 Wh = 9.0 × 10⁵ J vs Toaster 200 Wh = 7.2 × 10⁵ J)",
                    "explanation": "E_TV = 250 W × 1 h = 250 Wh. E_Toaster = 1200 W × (10/60 h) = 200 Wh. The TV consumes 250 Wh > 200 Wh."
                },
                {
                    "id": "m09_q04",
                    "question": "What is the equivalent resistance of two resistors of 6 Ω and 3 Ω connected in parallel?",
                    "options": [
                        "9 Ω",
                        "2 Ω",
                        "0.5 Ω",
                        "18 Ω"
                    ],
                    "answer": "2 Ω",
                    "explanation": "Rp = (R1 × R2) / (R1 + R2) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω."
                },
                {
                    "id": "m09_q05",
                    "question": "What physical quantity remains strictly CONSTANT across each resistor in a parallel circuit?",
                    "options": [
                        "Electric current",
                        "Potential difference (Voltage)",
                        "Power consumed",
                        "Electric charge flow rate"
                    ],
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
                    "options": [
                        "50 Ω",
                        "2 Ω",
                        "10 Ω",
                        "0.5 Ω"
                    ],
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
                    "options": [
                        "1 A",
                        "4 A",
                        "12 A",
                        "0.5 A"
                    ],
                    "answer": "4 A",
                    "explanation": "1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 => Rp = 3 Ω. Total current I = V / Rp = 12 V / 3 Ω = 4 A."
                }
            ]
        },
        {
            "id": "m10",
            "moduleNumber": 10,
            "title": "Domestic Electrical Circuits: Why Parallel Wiring is Essential",
            "tagline": "Independent appliance operation, constant 220V supply, low total resistance vs fatal series flaws.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The Major Disadvantages of Series Wiring in Homes</h4>\n    <p>In domestic electrical circuits, household appliances are <strong>never connected in series</strong> because of several critical engineering drawbacks:</p>\n    <ul>\n      <li><strong>1. Single Point of Failure:</strong> In a series circuit, if one appliance burns out, fails, or is switched off, the entire circuit is broken, and <strong>all other appliances turn off simultaneously</strong>. (A classic frustration with old-fashioned decorative fairy lights!).</li>\n      <li><strong>2. No Independent Switching:</strong> All appliances must share a single master switch. It is impossible to turn on the refrigerator without also running the television and air conditioner!</li>\n      <li><strong>3. Voltage Division:</strong> In series, the total $220\\text{ V}$ mains voltage is partitioned among all appliances. High-power appliances (like heaters) would receive very little voltage and fail to operate.</li>\n      <li><strong>4. Different Current Requirements:</strong> An electric bulb requires only $\\sim 0.5\\text{ A}$, while an electric heater requires $\\sim 10\\text{ A}$. In series, forced identical current means either the bulb explodes or the heater fails to warm up!</li>\n    </ul>\n\n    <h4>2. The Decisive Advantages of Parallel Domestic Wiring</h4>\n    <ol>\n      <li><strong>Full Operating Voltage:</strong> Every single appliance receives the full, uncompromised mains potential difference of <strong>$220\\text{ V}$</strong>.</li>\n      <li><strong>Independent Control:</strong> Each appliance has its own dedicated switch and can be operated or turned off independently without affecting others.</li>\n      <li><strong>Tailored Current Supply:</strong> Appliances draw current based solely on their own resistance ($I = V/R$), ensuring proper operation.</li>\n      <li><strong>Fault Isolation:</strong> If one light bulb fuses, all other lights and fans continue operating smoothly.</li>\n      <li><strong>Lower Overall Resistance:</strong> Parallel circuits keep total equivalent resistance low, minimizing energy wastage in wiring.</li>\n    </ol>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Domestic wiring is strictly PARALLEL: every appliance receives the full $220\\text{ V}$ mains voltage.",
                "Parallel connection allows independent switching and isolates faults.",
                "Series wiring fails at home because one burnt bulb kills the entire circuit and appliances receive divided voltage."
            ],
            "keyNotes": [
                "Decorative festive fairy lights use series connections to save copper wire cost, but finding one blown bulb requires testing every single bulb along the string!"
            ],
            "questions": [
                {
                    "id": "m10_q01",
                    "question": "Why are the heating elements of electric irons, toasters, and geysers made of ALLOY (like nichrome) rather than pure metals?",
                    "options": [
                        "Alloys conduct zero electricity",
                        "Alloys have higher resistivity than constituent metals and do not oxidize (burn) readily at high temperatures (red-hot states)",
                        "Alloys are transparent",
                        "Alloys freeze at 100°C"
                    ],
                    "answer": "Alloys have higher resistivity than constituent metals and do not oxidize (burn) readily at high temperatures (red-hot states)",
                    "explanation": "Nichrome (Ni-Cr-Mn-Fe) possesses high resistivity (100 × 10⁻⁶ Ω m) and resists high-temperature thermal oxidation."
                },
                {
                    "id": "m10_q02",
                    "question": "What is the SI unit of electric power?",
                    "options": [
                        "Joule (J)",
                        "Watt (W, where 1 W = 1 V × 1 A = 1 J/s)",
                        "Kilowatt hour",
                        "Coulomb"
                    ],
                    "answer": "Watt (W, where 1 W = 1 V × 1 A = 1 J/s)",
                    "explanation": "Electric power P = VI is measured in watts (W), where 1 W = 1 J/s = 1 V A."
                },
                {
                    "id": "m10_q03",
                    "question": "Two lamps, one rated 100 W at 220 V and the other 60 W at 220 V, are connected in parallel to a 220 V mains supply. What is the total current drawn from the line?",
                    "options": [
                        "0.45 A",
                        "0.73 A (160 W / 220 V)",
                        "1.25 A",
                        "2.0 A"
                    ],
                    "answer": "0.73 A (160 W / 220 V)",
                    "explanation": "Total power P = 100 W + 60 W = 160 W. Total current I = P / V = 160 W / 220 V = 0.727 A ≈ 0.73 A."
                },
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
                    "options": [
                        "110 V",
                        "220 V",
                        "440 V",
                        "12 V"
                    ],
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
                    "options": [
                        "220 V",
                        "4.4 V",
                        "50 V",
                        "0.22 V"
                    ],
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
        },
        {
            "id": "m11",
            "moduleNumber": 11,
            "title": "Complex Resistor Networks: Series-Parallel Combinations",
            "tagline": "Stepwise network simplification, nodal analysis, and equivalent resistance calculations.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Mixed Series-Parallel Resistor Circuits</h4>\n    <p>Real-world electronic circuits rarely consist of pure series or pure parallel configurations; instead, they feature intricate <strong>mixed combinations</strong>. To determine the overall equivalent resistance ($R_\\text{eq}$) of such a network, we apply a methodical reduction strategy:</p>\n    <ol>\n      <li><strong>Identify Inner Pure Groups:</strong> Look for pairs or sub-groups of resistors that are connected strictly in series (carrying identical current) or strictly in parallel (connected across identical nodes).</li>\n      <li><strong>Replace with Equivalent Resistors:</strong> Calculate the sub-equivalent resistance ($R_s = R_1 + R_2$ or $R_p = \\frac{R_1 R_2}{R_1 + R_2}$) and redraw the circuit replacing the group with a single equivalent resistor.</li>\n      <li><strong>Iterate Stepwise:</strong> Repeat the simplification from the inside out until the entire circuit collapses into a single master equivalent resistor.</li>\n    </ol>\n\n    <h4>2. Classic Bridge and Delta Configurations</h4>\n    <p>Consider two parallel branches containing series pairs: Branch 1 has $R_1 + R_2$ and Branch 2 has $R_3 + R_4$. First compute the series sum of each branch, then solve the two resulting branches in parallel:</p>\n    $$R_\\text{eq} = \\frac{(R_1 + R_2)(R_3 + R_4)}{(R_1 + R_2) + (R_3 + R_4)}$$\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Simplify complex networks by isolating and reducing inner pure series and parallel sub-blocks.",
                "Two series resistors in parallel: $R_\\text{eq} = \\frac{R_A \\cdot R_B}{R_A + R_B}$ where $R_A = R_1 + R_2$ and $R_B = R_3 + R_4$.",
                "Always trace current paths from node to node to confirm series vs parallel relationships."
            ],
            "keyNotes": [
                "Resistors are in series ONLY if they carry identical current without any branch tapping off between them; resistors are in parallel ONLY if both their terminals share identical common pairs of nodes."
            ],
            "questions": [
                {
                    "id": "m11_q01",
                    "question": "An electric heater of resistance 44 Ω draws 5 A from service mains for 2 hours. What is the rate at which heat is developed in the heater?",
                    "options": [
                        "220 J/s",
                        "1100 W (1100 J/s)",
                        "7.92 × 10⁶ J",
                        "440 W"
                    ],
                    "answer": "1100 W (1100 J/s)",
                    "explanation": "The 'rate of heat development' means power: P = I²R = (5 A)² × 44 Ω = 25 × 44 = 1100 W = 1100 J/s."
                },
                {
                    "id": "m11_q02",
                    "question": "A uniform cylindrical wire of resistance R is STRETCHED uniformly until its length becomes THREE TIMES (3l) its original length. What is its new resistance?",
                    "options": [
                        "3R",
                        "9R (volume is constant, so area becomes A/3)",
                        "R / 3",
                        "R / 9"
                    ],
                    "answer": "9R (volume is constant, so area becomes A/3)",
                    "explanation": "Volume V = l × A is constant. If length triples (l' = 3l), area becomes A' = A/3. R' = ρ(3l)/(A/3) = 9 ρ(l/A) = 9R."
                },
                {
                    "id": "m11_q03",
                    "question": "A piece of wire of resistance R is cut into FIVE equal parts. These five parts are then connected in parallel. If the equivalent resistance of this parallel combination is R', what is the ratio R / R'?",
                    "options": [
                        "1/25",
                        "25",
                        "5",
                        "1/5"
                    ],
                    "answer": "25",
                    "explanation": "Each piece has resistance r = R/5. When 5 pieces of R/5 are in parallel: R' = (R/5)/5 = R/25. Thus R / R' = 25."
                },
                {
                    "id": "m11_q04",
                    "question": "Two conducting wires of identical material, length, and diameter are connected across the same voltage source, first in series and then in parallel. What is the ratio of heat produced in series to parallel combination in a given time (H_series : H_parallel)?",
                    "options": [
                        "1 : 2",
                        "1 : 4",
                        "4 : 1",
                        "2 : 1"
                    ],
                    "answer": "1 : 4",
                    "explanation": "For constant V: H = (V²/R)t. Rs = 2R, Rp = R/2. H_series / H_parallel = (V²/(2R)) / (V²/(R/2)) = (1/2) / 2 = 1/4 (1 : 4)."
                },
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
                    "options": [
                        "16 Ω",
                        "4 Ω",
                        "8 Ω",
                        "2 Ω"
                    ],
                    "answer": "4 Ω",
                    "explanation": "Path ABC has 4 + 4 = 8 Ω. Path ADC has 4 + 4 = 8 Ω. These two 8 Ω branches are in parallel between A and C: Req = 8/2 = 4 Ω."
                },
                {
                    "id": "m11_q08",
                    "question": "In the square resistor circuit above (four 4 Ω sides), what is the equivalent resistance between two adjacent corners A and B?",
                    "options": [
                        "3 Ω",
                        "4 Ω",
                        "8 Ω",
                        "16 Ω"
                    ],
                    "answer": "3 Ω",
                    "explanation": "Branch 1 is side AB (4 Ω). Branch 2 is path AD + DC + CB = 4 + 4 + 4 = 12 Ω. In parallel: Req = (4 × 12)/(4 + 12) = 48/16 = 3 Ω."
                },
                {
                    "id": "m11_q09",
                    "question": "What is the minimum resistance that can be obtained using four resistors each of 1/4 Ω?",
                    "options": [
                        "1 Ω",
                        "1/16 Ω",
                        "1/4 Ω",
                        "4 Ω"
                    ],
                    "answer": "1/16 Ω",
                    "explanation": "Minimum resistance is achieved by connecting all in parallel: Rp = R / n = (1/4) / 4 = 1/16 Ω."
                },
                {
                    "id": "m11_q10",
                    "question": "What is the maximum resistance that can be obtained using four resistors each of 1/4 Ω?",
                    "options": [
                        "1 Ω",
                        "1/16 Ω",
                        "1/2 Ω",
                        "4 Ω"
                    ],
                    "answer": "1 Ω",
                    "explanation": "Maximum resistance is obtained by connecting all in series: Rs = 4 × (1/4 Ω) = 1 Ω."
                }
            ]
        },
        {
            "id": "m12",
            "moduleNumber": 12,
            "title": "The Heating Effect of Electric Current: Molecular Mechanism",
            "tagline": "Electron-lattice inelastic collisions, dissipation of electrical work, and thermal energy conversion.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Why Does an Electric Conductor Get Warm?</h4>\n    <p>When an electric cell or battery is connected across a conductor, its chemical reactions maintain a potential difference ($V$) that establishes an electric field. This field exerts electrostatic forces on the conduction electrons, accelerating them along the conductor.</p>\n\n    <h4>2. Microscopic Collision Mechanism</h4>\n    <p>As the free electrons drift towards the positive terminal:</p>\n    <ul>\n      <li>They continually collide inelastically with the fixed, vibrating metallic lattice ions and atoms.</li>\n      <li>At each collision, the electrons transfer a portion of their kinetic energy to the lattice ions.</li>\n      <li>This transferred energy amplifies the amplitude of thermal vibrations of the lattice ions.</li>\n      <li>Macroscopically, increased lattice vibration manifests as a rise in the temperature of the conductor—the <strong>heating effect of electric current</strong> (also termed <em>Joule heating</em>).</li>\n    </ul>\n\n    <h4>3. Energy Conversion Perspective</h4>\n    <p>If an electric circuit is purely resistive (consisting purely of resistors and battery with no mechanical motors):</p>\n    $$\\text{Chemical Energy of Battery} \\longrightarrow \\text{Electrical Energy} \\longrightarrow \\mathbf{100\\%\\text{ Thermal Heat Dissipation}}$$\n    <p>All the electrical work performed by the battery is steadily dissipated into the surroundings as heat.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Drifting electrons collide with metallic lattice ions, transferring kinetic energy into thermal vibrations.",
                "Heating effect of electric current (Joule heating) converts electrical work into thermal energy.",
                "In a purely resistive circuit, all electrical energy supplied by the source is converted entirely into heat."
            ],
            "keyNotes": [
                "While Joule heating is deliberately utilized in toasters and geysers, it represents an undesirable energy loss (called $I^2R$ copper loss) in electric motors, computers, and power grid transmission lines."
            ],
            "questions": [
                {
                    "id": "m12_q01",
                    "question": "A copper wire has a diameter of 0.5 mm and resistivity of 1.6 × 10⁻⁸ Ω m. What length of this wire is required to obtain a resistance of 10 Ω?",
                    "options": [
                        "12.27 m",
                        "122.7 m",
                        "1227 m",
                        "1.23 m"
                    ],
                    "answer": "122.7 m",
                    "explanation": "r = 0.25 mm = 2.5 × 10⁻⁴ m. A = πr² = π(2.5 × 10⁻⁴)² = 1.9635 × 10⁻⁷ m². l = RA / ρ = (10 × 1.9635 × 10⁻⁷) / (1.6 × 10⁻⁸) = 1.9635 × 10 / 0.16 = 122.7 m."
                },
                {
                    "id": "m12_q02",
                    "question": "In the above copper wire of resistance 10 Ω, if the diameter of the wire is DOUBLED while keeping length unchanged, what will be the new resistance?",
                    "options": [
                        "20 Ω",
                        "2.5 Ω (decreases by a factor of 4)",
                        "5.0 Ω",
                        "40 Ω"
                    ],
                    "answer": "2.5 Ω (decreases by a factor of 4)",
                    "explanation": "Area A ∝ d². Doubling diameter quadruples area (A' = 4A). Since R ∝ 1/A, R' = R / 4 = 10 Ω / 4 = 2.5 Ω."
                },
                {
                    "id": "m12_q03",
                    "question": "An electric iron consumes 840 W at maximum heating and 360 W at minimum heating from a 220 V source. What are the resistance values of the iron in each case?",
                    "options": [
                        "Max: 57.6 Ω; Min: 134.15 Ω",
                        "Max: 134.15 Ω; Min: 57.6 Ω",
                        "Max: 24 Ω; Min: 48 Ω",
                        "Max: 100 Ω; Min: 200 Ω"
                    ],
                    "answer": "Max: 57.6 Ω; Min: 134.15 Ω",
                    "explanation": "R_max = V² / P_max = 220² / 840 = 48400 / 840 = 57.60 Ω. R_min = V² / P_min = 220² / 360 = 48400 / 360 = 134.44 Ω (≈ 134.15 Ω)."
                },
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
                    "options": [
                        "Mechanical energy",
                        "Heat (thermal) energy",
                        "Chemical energy",
                        "Magnetic potential energy"
                    ],
                    "answer": "Heat (thermal) energy",
                    "explanation": "Without mechanical motors or storage capacitors, 100% of electrical energy is dissipated as heat into the surroundings."
                },
                {
                    "id": "m12_q06",
                    "question": "In which of the following electrical devices is the heating effect of current an UNDESIRABLE wasteful energy loss?",
                    "options": [
                        "Electric toaster",
                        "Electric room heater",
                        "Electric computer processor (CPU) and motor",
                        "Electric iron"
                    ],
                    "answer": "Electric computer processor (CPU) and motor",
                    "explanation": "In motors and microprocessors, Joule heating wastes energy and requires cooling fans to prevent thermal failure."
                },
                {
                    "id": "m12_q07",
                    "question": "What is the term given to the energy lost as heat in long-distance electrical power transmission cables?",
                    "options": [
                        "I^2R copper loss",
                        "Eddy wind loss",
                        "Capacitive leak",
                        "Hall loss"
                    ],
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
                    "options": [
                        "W = V × I × t",
                        "W = V / (I × t)",
                        "W = I / (V × t)",
                        "W = V × t / I"
                    ],
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
        },
        {
            "id": "m13",
            "moduleNumber": 13,
            "title": "Joule's Law of Heating: Mathematical Derivation ($H = I^2Rt$)",
            "tagline": "Proportionality to I^2, R, and t; alternate formulas VIt and V^2t/R.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Derivation of Joule's Law</h4>\n    <p>Consider a current $I$ flowing through a resistor of resistance $R$ across which a potential difference $V$ is maintained for a time $t$:</p>\n    <ul>\n      <li>The total electric charge transported in time $t$ is $Q = I \\cdot t$.</li>\n      <li>The work done ($W$) in moving charge $Q$ across potential difference $V$ is:\n        $$W = V \\cdot Q = V \\cdot (I \\cdot t) = V I t$$\n      </li>\n      <li>By Ohm's law, $V = I \\cdot R$. Substituting $V$ into the work equation gives:\n        $$W = (I \\cdot R) \\cdot I \\cdot t = \\mathbf{I^2 R t}$$\n      </li>\n    </ul>\n    <p>Assuming all electrical energy is dissipated as thermal energy, the heat generated ($H$) is:</p>\n    $$\\mathbf{H = I^2 R t}$$\n\n    <h4>2. The Three Formal Laws of Joule's Heating</h4>\n    <ol>\n      <li><strong>Current Law:</strong> Heat generated is directly proportional to the <strong>square of the current</strong> ($H \\propto I^2$) for a given resistance. (Doubling current quadruples heat!).</li>\n      <li><strong>Resistance Law:</strong> Heat generated is directly proportional to the <strong>resistance</strong> of the conductor ($H \\propto R$) for a given current.</li>\n      <li><strong>Time Law:</strong> Heat generated is directly proportional to the <strong>time</strong> for which current flows ($H \\propto t$).</li>\n    </ol>\n\n    <h4>3. Alternate Equivalent Mathematical Expressions</h4>\n    $$H = I^2 R t = V I t = \\frac{V^2}{R} t$$\n    <p><em>Note on application:</em> Use $H = I^2Rt$ for series circuits (constant current); use $H = \\frac{V^2}{R}t$ for parallel circuits (constant voltage).</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Joule's Law of Heating: $H = I^2Rt = VIt = \\frac{V^2}{R}t$.",
                "Heat is proportional to the square of current ($I^2$): doubling $I$ produces $4\\times$ more heat.",
                "In series (constant $I$), higher $R$ generates more heat; in parallel (constant $V$), lower $R$ generates more heat!"
            ],
            "keyNotes": [
                "Beware of the classic exam trap: for domestic parallel appliances on 220V, heat is inversely proportional to resistance ($H \\propto 1/R$), so low-resistance appliances produce the most heat!"
            ],
            "questions": [
                {
                    "id": "m13_q01",
                    "question": "Which of the following mathematical expressions correctly represents electric power (P)?",
                    "options": [
                        "P = VI",
                        "P = I²R",
                        "P = V² / R",
                        "All of the above"
                    ],
                    "answer": "All of the above",
                    "explanation": "By Ohm's law substitutions: P = VI = I(IR) = I²R = V(V/R) = V² / R."
                },
                {
                    "id": "m13_q02",
                    "question": "Compare the power consumed in the 2 Ω resistor in two circuits: Circuit 1 (6 V battery in series with 1 Ω and 2 Ω resistors) and Circuit 2 (4 V battery in parallel with 12 Ω and 2 Ω resistors):",
                    "options": [
                        "Circuit 1: 4 W; Circuit 2: 4 W (Both consume equal power = 8 W)",
                        "Circuit 1: P₁ = 8 W; Circuit 2: P₂ = 8 W (Equal power of 8 W in both)",
                        "Circuit 1: 2 W; Circuit 2: 8 W",
                        "Circuit 1: 8 W; Circuit 2: 2 W"
                    ],
                    "answer": "Circuit 1: P₁ = 8 W; Circuit 2: P₂ = 8 W (Equal power of 8 W in both)",
                    "explanation": "Circuit 1: I = 6 V / (1 + 2) = 2 A. P₁ = I²R = (2 A)² × 2 Ω = 8 W. Circuit 2: V across 2 Ω is 4 V. P₂ = V²/R = 4²/2 = 16/2 = 8 W. Both consume exactly 8 W."
                },
                {
                    "id": "m13_q03",
                    "question": "A battery of 9 V is connected in series with resistors of 0.2 Ω, 0.3 Ω, 0.4 Ω, 0.5 Ω, and 12 Ω. What is the current flowing through the 12 Ω resistor?",
                    "options": [
                        "0.75 A",
                        "0.67 A (I = 9 V / 13.4 Ω)",
                        "1.34 A",
                        "9.0 A"
                    ],
                    "answer": "0.67 A (I = 9 V / 13.4 Ω)",
                    "explanation": "Total series resistance Rs = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 Ω. In series, current is identical everywhere: I = V / Rs = 9 / 13.4 = 0.6716 A ≈ 0.67 A."
                },
                {
                    "id": "m13_q04",
                    "question": "According to Joule's Law of Heating, what happens to the heat produced in a resistor if the current flowing through it is DOUBLED while resistance and time remain constant?",
                    "options": [
                        "Heat is doubled (2x)",
                        "Heat is quadrupled (4x)",
                        "Heat is halved",
                        "Heat increases by 8x"
                    ],
                    "answer": "Heat is quadrupled (4x)",
                    "explanation": "Since H ∝ I^2, doubling current (2I)^2 = 4I^2, which quadruples the heat generated."
                },
                {
                    "id": "m13_q05",
                    "question": "Which of the following mathematical expressions correctly represents Joule's Law of Heating?",
                    "options": [
                        "H = I^2 R t",
                        "H = I R^2 t",
                        "H = I R t^2",
                        "H = V / (I R t)"
                    ],
                    "answer": "H = I^2 R t",
                    "explanation": "Joule's law states that thermal energy generated is H = I^2 R t."
                },
                {
                    "id": "m13_q06",
                    "question": "100 Joules of heat is produced each second in a 4 Ω resistor. What is the potential difference across the resistor?",
                    "options": [
                        "20 V",
                        "25 V",
                        "400 V",
                        "10 V"
                    ],
                    "answer": "20 V",
                    "explanation": "H/t = P = V^2 / R => 100 = V^2 / 4 => V^2 = 400 => V = 20 V."
                },
                {
                    "id": "m13_q07",
                    "question": "An electric iron of resistance 20 Ω takes a current of 5 A. What is the heat developed in 30 seconds?",
                    "options": [
                        "15,000 J",
                        "3,000 J",
                        "1500 J",
                        "300 J"
                    ],
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
                    "options": [
                        "Watt (W)",
                        "Joule (J)",
                        "Calorie per minute",
                        "Ampere-second"
                    ],
                    "answer": "Joule (J)",
                    "explanation": "Heat is a form of energy; its standard SI unit is the joule (J)."
                }
            ]
        },
        {
            "id": "m14",
            "moduleNumber": 14,
            "title": "Practical Thermal Applications: Electric Iron, Heater & Nichrome",
            "tagline": "Heating elements, alloy advantages: high resistivity, high melting point, and oxidation resistance.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Practical Domestic Heating Appliances</h4>\n    <p>The heating effect of electric current is harnessed in indispensable household appliances such as <strong>electric irons, room heaters, water geysers, toasters, and electric kettles</strong>. All these appliances incorporate an internal metallic coil known as the <strong>heating element</strong>.</p>\n\n    <h4>2. Why Nichrome Alloy is the Material of Choice</h4>\n    <p>Pure copper or silver is never used for heating elements. Instead, an alloy—most notably <strong>Nichrome</strong> (composed of $60\\%\\text{ Nickel}$, $16\\%\\text{ Chromium}$, $23\\%\\text{ Iron}$, and $1\\%\\text{ Manganese}$)—is exclusively employed for three crucial engineering reasons:</p>\n    <ol>\n      <li><strong>High Electrical Resistivity ($\\rho \\approx 100 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$):</strong> Roughly 60 times higher than that of copper. This allows compact heating coils to achieve high resistance ($R$) without requiring absurdly long wires.</li>\n      <li><strong>Extremely High Melting Point (~$1400^\\circ\\text{C}$):</strong> Can operate red-hot without melting.</li>\n      <li><strong>Resistance to Oxidation (Does Not Burn):</strong> Unlike pure metals that rapidly oxidize and vaporize when red-hot in atmospheric air, nichrome forms a tough, self-passivating chromium oxide outer film that prevents further oxidation even at $900\\text{--}1000^\\circ\\text{C}$.</li>\n    </ol>\n\n    <h4>3. Why Does the Heating Element Glow While the Cord Does Not?</h4>\n    <p>The connecting power cord is made of thick, low-resistance <strong>copper wire</strong>, whereas the heating element is a coiled, thin, high-resistance <strong>nichrome wire</strong>:</p>\n    <ul>\n      <li>Because they are in series, the exact same current ($I$) flows through both the power cord and the heating element.</li>\n      <li>By Joule's law ($H \\propto R$), heat generated in the low-resistance copper cord ($R_\\text{copper} \\approx 0.01\\ \\Omega$) is negligible, so it stays cool.</li>\n      <li>In contrast, the high resistance of the nichrome element ($R_\\text{element} \\approx 50\\ \\Omega$) generates immense heat, causing it to become red-hot and glow brilliantly!</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Heating appliances (electric iron, toaster, geyser) utilize high-resistance heating elements.",
                "Nichrome alloy (Ni-Cr-Fe-Mn) has high resistivity, high melting point, and does not oxidize at red-hot temperatures.",
                "The heating element glows red-hot because its resistance is huge ($H \\propto R$), while the low-resistance copper cord stays cool."
            ],
            "keyNotes": [
                "Mica sheets are placed inside electric irons to insulate the red-hot nichrome heating element from the metallic soleplate because mica is an excellent conductor of heat but an exceptional insulator of electricity!"
            ],
            "questions": [
                {
                    "id": "m14_q01",
                    "question": "What is the commercial unit of electrical energy consumed in households (commonly called a 'unit' on electric bills)?",
                    "options": [
                        "Joule (J)",
                        "Kilowatt-hour (kWh)",
                        "Watt-second",
                        "Volt-ampere"
                    ],
                    "answer": "Kilowatt-hour (kWh)",
                    "explanation": "The commercial billing unit of electrical energy is kilowatt-hour (kWh)."
                },
                {
                    "id": "m14_q02",
                    "question": "How many Joules (J) are equal to ONE KILOWATT-HOUR (1 kWh)?",
                    "options": [
                        "3.6 × 10⁵ J",
                        "3.6 × 10⁶ J (3,600,000 Joules)",
                        "1000 J",
                        "3600 J"
                    ],
                    "answer": "3.6 × 10⁶ J (3,600,000 Joules)",
                    "explanation": "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J."
                },
                {
                    "id": "m14_q03",
                    "question": "How many 10 W, 220 V electric lamps can be safely connected in parallel across a 220 V line if the maximum permissible fuse current is 5 A?",
                    "options": [
                        "50 lamps",
                        "110 lamps",
                        "22 lamps",
                        "220 lamps"
                    ],
                    "answer": "110 lamps",
                    "explanation": "Total allowable power P_total = V × I_max = 220 V × 5 A = 1100 W. Number of 10 W lamps = 1100 W / 10 W = 110 lamps."
                },
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
                    "options": [
                        "100°C",
                        "500°C",
                        "~1400°C",
                        "3380°C"
                    ],
                    "answer": "~1400°C",
                    "explanation": "Nichrome melts at approximately 1400°C, enabling it to glow red-hot (~900°C) safely without melting."
                },
                {
                    "id": "m14_q09",
                    "question": "If an electric toaster draws 4 A of current on a 220 V line, what is the resistance of its internal heating element?",
                    "options": [
                        "55 Ω",
                        "880 Ω",
                        "25 Ω",
                        "110 Ω"
                    ],
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
        },
        {
            "id": "m15",
            "moduleNumber": 15,
            "title": "The Incandescent Electric Bulb: Tungsten Filament & Inert Gases",
            "tagline": "Thermal incandescence, extreme melting point (3380°C), and inactive Argon/Nitrogen atmosphere.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Principle of Incandescence</h4>\n    <p>An <strong>incandescent electric bulb</strong> generates light by heating a thin metallic filament to such an extreme temperature that it becomes white-hot and emits electromagnetic thermal radiation in the visible spectrum (<strong>incandescence</strong>). However, only about $5\\text{--}10\\%$ of electrical energy is converted into visible light; the remaining $90\\text{--}95\\%$ is dissipated as invisible infrared heat radiation!</p>\n\n    <h4>2. Why Tungsten ($W$) is Exclusively Used for Bulb Filaments</h4>\n    <p>Tungsten is the only metal suited for incandescent filaments due to unmatched physical properties:</p>\n    <ul>\n      <li><strong>Extremely High Melting Point ($3380^\\circ\\text{C}$):</strong> The highest melting point of any metallic element on the periodic table. It can glow at dazzling white-hot temperatures (~$2500\\text{--}2700^\\circ\\text{C}$) without melting.</li>\n      <li><strong>High Resistivity & Ductility:</strong> Can be drawn into ultra-thin, long coiled-coil filaments to maximize resistance and surface area in a tiny glass bulb.</li>\n    </ul>\n\n    <h4>3. Why are Bulbs Filled with Chemically Inactive Gases?</h4>\n    <p>If air were present inside the glass bulb, atmospheric oxygen would react instantly with the white-hot tungsten filament, burning it to tungsten oxide and destroying the bulb in a split second. To prevent this:</p>\n    <ul>\n      <li>The glass bulb is evacuated and filled with chemically non-reactive, inert gases—principally <strong>Argon</strong> mixed with some <strong>Nitrogen</strong>.</li>\n      <li>The inert gas pressure suppresses the thermal vaporization (sublimation) of tungsten atoms from the filament, significantly <strong>prolonging the operational lifespan of the bulb</strong>.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Tungsten has an extraordinarily high melting point of $3380^\\circ\\text{C}$ and high tensile ductility.",
                "Incandescent bulbs convert only $\\sim 5\\text{--}10\\%$ of electrical energy into light; the rest is lost as heat.",
                "Bulbs are filled with inactive Argon and Nitrogen to prevent oxidation and retard filament evaporation."
            ],
            "keyNotes": [
                "Because of their poor energy efficiency (~90% wasted as heat), incandescent tungsten bulbs have been largely superseded by compact fluorescent lamps (CFLs) and modern solid-state light-emitting diodes (LEDs)."
            ],
            "questions": [
                {
                    "id": "m15_q01",
                    "question": "A current of 0.5 A flows through the filament of an electric bulb for 10 minutes. What is the total electric charge that flows through the circuit?",
                    "options": [
                        "5 C",
                        "300 C",
                        "50 C",
                        "6000 C"
                    ],
                    "answer": "300 C",
                    "explanation": "Q = I × t = 0.5 A × (10 × 60 s) = 0.5 A × 600 s = 300 C."
                },
                {
                    "id": "m15_q02",
                    "question": "How much work (W) is done in moving a charge of 2 C across two points having a potential difference of 12 V?",
                    "options": [
                        "6 J",
                        "24 J",
                        "14 J",
                        "0.16 J"
                    ],
                    "answer": "24 J",
                    "explanation": "W = V × Q = 12 V × 2 C = 24 J."
                },
                {
                    "id": "m15_q03",
                    "question": "When a 12 V battery is connected across an unknown resistor, a current of 2.5 mA flows through it. What is the resistance of the resistor?",
                    "options": [
                        "4.8 Ω",
                        "4800 Ω (4.8 kΩ)",
                        "48 Ω",
                        "30 kΩ"
                    ],
                    "answer": "4800 Ω (4.8 kΩ)",
                    "explanation": "R = V / I = 12 V / (2.5 × 10⁻³ A) = 12,000 / 2.5 = 4800 Ω = 4.8 kΩ."
                },
                {
                    "id": "m15_q04",
                    "question": "Which metal is exclusively used for making the filament of traditional incandescent electric lamps?",
                    "options": [
                        "Copper",
                        "Tungsten (W)",
                        "Aluminium",
                        "Lead"
                    ],
                    "answer": "Tungsten (W)",
                    "explanation": "Tungsten is used because of its extraordinary melting point of 3380°C, allowing it to glow white-hot without melting."
                },
                {
                    "id": "m15_q05",
                    "question": "What is the melting point of Tungsten metal?",
                    "options": [
                        "1085°C",
                        "1538°C",
                        "3380°C",
                        "5000°C"
                    ],
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
                    "options": [
                        "100%",
                        "50%",
                        "Only about 5% to 10%",
                        "85%"
                    ],
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
        },
        {
            "id": "m16",
            "moduleNumber": 16,
            "title": "The Electric Fuse: Working Principle, Current Rating & Circuit Safety",
            "tagline": "Sacrificial circuit protection, low melting point alloy, series placement on live wire.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. What is an Electric Fuse?</h4>\n    <p>An <strong>electric fuse</strong> is an indispensable safety device inserted into an electrical circuit to protect delicate appliances and domestic building wiring against catastrophic damage caused by <strong>overloading</strong> or <strong>short-circuiting</strong>.</p>\n\n    <h4>2. Physical Construction & Material Properties</h4>\n    <p>A fuse consists of a piece of thin wire made of a metallic alloy having:</p>\n    <ul>\n      <li><strong>Low Melting Point:</strong> Typically made of an alloy of <strong>lead ($63\\%$) and tin ($37\\%$)</strong>, or tin-plated copper.</li>\n      <li><strong>Appropriate Resistance:</strong> Sufficient to heat up rapidly if current exceeds safety thresholds.</li>\n      <li>Enclosed inside a fireproof cartridge of porcelain, ceramic, or glass with metal end-caps.</li>\n    </ul>\n\n    <h4>3. How Does a Fuse Operate?</h4>\n    <p>The fuse is <strong>always connected in SERIES with the LIVE wire</strong> ahead of any appliance:</p>\n    <ol>\n      <li>Under normal conditions, circuit current is below the fuse's rated capacity; heat dissipated is safely conducted away.</li>\n      <li>If a fault occurs—such as a <strong>short circuit</strong> (direct contact between live and neutral wires) or <strong>overloading</strong> (too many high-power appliances switched on simultaneously)—current spikes dangerously.</li>\n      <li>By Joule's law ($H \\propto I^2$), the excessive current instantly raises the fuse wire temperature past its melting point.</li>\n      <li>The fuse wire <strong>melts, burns apart, and breaks the circuit</strong> in milliseconds, cutting off power before wires can catch fire or appliances explode!</li>\n    </ol>\n\n    <h4>4. Standard Current Ratings</h4>\n    <p>Fuses are rated in amperes according to the maximum safe current they can carry without blowing: $1\\text{ A}, 2\\text{ A}, 3\\text{ A}, 5\\text{ A}, 10\\text{ A}, 15\\text{ A}, 16\\text{ A}$.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "An electric fuse protects circuits by melting when current exceeds its designated rating.",
                "Fuse wire has a LOW melting point (alloy of lead and tin).",
                "A fuse is ALWAYS connected in SERIES with the LIVE wire ahead of appliances."
            ],
            "keyNotes": [
                "Never replace a blown fuse with a thick copper wire or iron nail! A copper wire will not melt during a fault, causing house wiring to overheat and trigger catastrophic electrical fires."
            ],
            "questions": [
                {
                    "id": "m16_q01",
                    "question": "How much energy is given to each coulomb of charge passing through a 6 V battery?",
                    "options": [
                        "1 J",
                        "6 J",
                        "12 J",
                        "36 J"
                    ],
                    "answer": "6 J",
                    "explanation": "Energy W = V × Q = 6 V × 1 C = 6 J."
                },
                {
                    "id": "m16_q02",
                    "question": "An electric bulb of resistance 1200 Ω is connected to a 220 V supply. How much current does it draw?",
                    "options": [
                        "5.45 A",
                        "0.18 A",
                        "1.2 A",
                        "2.2 A"
                    ],
                    "answer": "0.18 A",
                    "explanation": "I = V / R = 220 V / 1200 Ω ≈ 0.183 A."
                },
                {
                    "id": "m16_q03",
                    "question": "What happens to the electrical resistance and resistivity of a metallic conductor when its temperature INCREASES?",
                    "options": [
                        "Resistance decreases, resistivity increases",
                        "Both resistance and resistivity increase due to increased thermal vibrations of metal lattice ions colliding with drifting electrons",
                        "Both remain strictly unchanged",
                        "Both decrease to zero"
                    ],
                    "answer": "Both resistance and resistivity increase due to increased thermal vibrations of metal lattice ions colliding with drifting electrons",
                    "explanation": "Increasing temperature intensifies ionic lattice vibrations, increasing electron collision frequency and raising both resistance and resistivity."
                },
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
                    "options": [
                        "Extremely high melting point",
                        "Low melting point and suitable resistance",
                        "Infinite resistance",
                        "Magnetic attraction"
                    ],
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
                    "options": [
                        "1 A",
                        "2 A",
                        "5 A",
                        "15 A"
                    ],
                    "answer": "5 A",
                    "explanation": "Current I = P / V = 1000 W / 220 V = 4.54 A. The next standard fuse rating above 4.54 A is 5 A."
                },
                {
                    "id": "m16_q08",
                    "question": "What common alloy is used to manufacture safety fuse wire?",
                    "options": [
                        "Alloy of Lead and Tin (Pb-Sn)",
                        "Copper and Zinc",
                        "Iron and Carbon",
                        "Silver and Gold"
                    ],
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
        },
        {
            "id": "m17",
            "moduleNumber": 17,
            "title": "Electric Power: Definitions, Formulas ($P = VI = I^2R = V^2/R$) & The Watt",
            "tagline": "Rate of electrical energy consumption, SI unit Watt (W), and kilowatt conversions.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Definition of Electric Power ($P$)</h4>\n    <p><strong>Electric power</strong> is defined as the rate at which electrical energy is consumed or dissipated into other forms of energy (such as heat, light, or mechanical motion) in an electric circuit:</p>\n    $$P = \\frac{\\text{Electrical Energy Consumed }(W)}{\\text{Time Interval }(t)} = \\frac{V \\cdot I \\cdot t}{t}$$\n    $$\\mathbf{P = V \\cdot I}$$\n\n    <h4>2. The Three Equivalent Formulas for Electric Power</h4>\n    <p>By substituting Ohm's law ($V = IR$ or $I = V/R$), we obtain three master equations:</p>\n    <ol>\n      <li>$$P = V \\cdot I$$ (Useful when both voltage and current are known)</li>\n      <li>$$P = I^2 \\cdot R$$ (Useful for series circuits where current $I$ is constant)</li>\n      <li>$$P = \\frac{V^2}{R}$$ (Useful for parallel circuits where voltage $V$ is constant)</li>\n    </ol>\n\n    <h4>3. The SI Unit: The Watt ($\\text{W}$)</h4>\n    <p>The SI unit of electric power is the <strong>watt (W)</strong>, named in honour of Scottish engineer James Watt:</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"1 watt is the power consumed by a device that draws 1 ampere of current when operated at a potential difference of 1 volt ($1\\text{ W} = 1\\text{ Volt} \\times 1\\text{ Ampere} = 1\\text{ V}\\cdot\\text{A}$).\"\n    </blockquote>\n    <p>Larger multiple units:</p>\n    <ul>\n      <li>$1\\text{ kilowatt (kW)} = 1000\\text{ W} = 10^3\\text{ W}$</li>\n      <li>$1\\text{ megawatt (MW)} = 10^6\\text{ W}$</li>\n      <li>$1\\text{ gigawatt (GW)} = 10^9\\text{ W}$</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Electric power is the rate of electrical energy consumption: $P = W/t$.",
                "Master power equations: $P = VI = I^2R = \\frac{V^2}{R}$.",
                "The SI unit of power is the Watt ($1\\text{ W} = 1\\text{ V}\\cdot\\text{A} = 1\\text{ J/s}$); $1\\text{ kW} = 1000\\text{ W}$."
            ],
            "keyNotes": [
                "For appliances operating on the fixed 220V domestic supply, power is inversely proportional to resistance ($P = V^2/R$); a high-power 2000W geyser has much lower resistance than a 60W bulb!"
            ],
            "questions": [
                {
                    "id": "m17_q01",
                    "question": "An electric heater coil of resistance 100 Ω is connected to a 220 V supply. How much current does it draw?",
                    "options": [
                        "0.18 A",
                        "2.2 A",
                        "22 A",
                        "0.45 A"
                    ],
                    "answer": "2.2 A",
                    "explanation": "I = V / R = 220 V / 100 Ω = 2.2 A."
                },
                {
                    "id": "m17_q02",
                    "question": "An electric heater draws 4 A when connected to a 60 V line. What current will it draw if the potential difference is increased to 120 V?",
                    "options": [
                        "2 A",
                        "8 A",
                        "16 A",
                        "4 A"
                    ],
                    "answer": "8 A",
                    "explanation": "R = V₁ / I₁ = 60 V / 4 A = 15 Ω. At 120 V: I₂ = V₂ / R = 120 V / 15 Ω = 8 A."
                },
                {
                    "id": "m17_q03",
                    "question": "A uniform wire of resistance R is bent into the shape of a closed CIRCLE. What is the effective resistance between two diametrically opposite points A and B on the circle?",
                    "options": [
                        "R",
                        "R / 4",
                        "R / 2",
                        "2R"
                    ],
                    "answer": "R / 4",
                    "explanation": "The circle splits into two semicircular halves of resistance R/2 connected in parallel: R_eff = (R/2) / 2 = R/4."
                },
                {
                    "id": "m17_q04",
                    "question": "Which of the following does NOT represent electrical power in a circuit?",
                    "options": [
                        "I^2 R",
                        "I R^2",
                        "V I",
                        "V^2 / R"
                    ],
                    "answer": "I R^2",
                    "explanation": "P = VI = I^2 R = V^2 / R. The expression I R^2 has units of Volts-Ohms and does not represent power."
                },
                {
                    "id": "m17_q05",
                    "question": "What is the SI unit of electrical power?",
                    "options": [
                        "Joule (J)",
                        "Watt (W)",
                        "Ampere-hour",
                        "Ohm-metre"
                    ],
                    "answer": "Watt (W)",
                    "explanation": "The SI unit of power is the watt (W), where 1 W = 1 J/s."
                },
                {
                    "id": "m17_q06",
                    "question": "An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, what is the power consumed?",
                    "options": [
                        "100 W",
                        "75 W",
                        "50 W",
                        "25 W"
                    ],
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
                    "options": [
                        "440 Ω and 110 W",
                        "220 Ω and 55 W",
                        "110 Ω and 440 W",
                        "880 Ω and 220 W"
                    ],
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
                    "options": [
                        "100 W",
                        "1,000 W",
                        "10,000 W",
                        "1,000,000 W"
                    ],
                    "answer": "1,000 W",
                    "explanation": "The prefix 'kilo' represents 1000, so 1 kW = 1,000 W."
                }
            ]
        },
        {
            "id": "m18",
            "moduleNumber": 18,
            "title": "Commercial Unit of Electrical Energy: The Kilowatt-Hour (kWh)",
            "tagline": "The Board of Trade Unit, 1 kWh = 3.6 x 10^6 J, and domestic meter recording.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Why is the Joule Impractical for Electricity Billing?</h4>\n    <p>The SI unit of energy, the <strong>joule (J)</strong>, represents the energy consumed by a tiny $1\\text{-watt}$ appliance in just $1\\text{ second}$ ($1\\text{ J} = 1\\text{ W}\\cdot\\text{s}$). Because modern households operate powerful appliances (air conditioners, geysers, refrigerators) consuming millions of joules daily, measuring electricity in joules would result in astronomically large, unwieldy numbers on electricity bills.</p>\n\n    <h4>2. The Commercial Unit: The Kilowatt-Hour ($\\text{kWh}$)</h4>\n    <p>To provide a convenient, practical commercial scale, electricity utilities measure electrical energy in <strong>kilowatt-hours (kWh)</strong>, commonly referred to simply as <strong>\"units\" of electricity</strong> (or Board of Trade Unit, B.O.T.U.):</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"1 kilowatt-hour is the amount of electrical energy consumed by an appliance of 1000 watts (1 kW) power rating running continuously for 1 hour.\"\n    </blockquote>\n\n    <h4>3. Converting Kilowatt-Hours to Joules</h4>\n    $$\\begin{aligned}\n      1\\text{ kWh} &= 1\\text{ kilowatt} \\times 1\\text{ hour} \\\\\n      &= 1000\\text{ watts} \\times 3600\\text{ seconds} \\\\\n      &= 3,600,000\\text{ watt-seconds} \\\\\n      &= \\mathbf{3.6 \\times 10^6\\text{ Joules}}\n    \\end{aligned}$$\n    $$\\mathbf{1\\text{ unit} = 1\\text{ kWh} = 3.6 \\times 10^6\\text{ J} = 3.6\\text{ MJ}}$$\n  </div>\n</div>\n",
            "pointsToRemember": [
                "The commercial unit of electrical energy is the kilowatt-hour ($\\text{kWh}$), commonly termed a 'unit'.",
                "$1\\text{ kWh}$ is the energy consumed by a $1\\text{ kW}$ appliance operating for 1 hour.",
                "Conversion factor: $\\mathbf{1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}}$."
            ],
            "keyNotes": [
                "Electricity meters installed outside homes record energy consumption in kilowatt-hours (units), which forms the basis of monthly utility billing."
            ],
            "questions": [
                {
                    "id": "m18_q01",
                    "question": "An electric lamp of resistance 20 Ω and a series resistor of 4 Ω are connected to a 6 V battery. What is the total circuit resistance and current?",
                    "options": [
                        "Total R = 5 Ω; Current = 1.2 A",
                        "Total R = 24 Ω; Current = 0.25 A",
                        "Total R = 80 Ω; Current = 0.075 A",
                        "Total R = 16 Ω; Current = 0.375 A"
                    ],
                    "answer": "Total R = 24 Ω; Current = 0.25 A",
                    "explanation": "Rs = 20 Ω + 4 Ω = 24 Ω. Current I = V / Rs = 6 V / 24 Ω = 0.25 A."
                },
                {
                    "id": "m18_q02",
                    "question": "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. What is the equivalent resistance of the combination?",
                    "options": [
                        "45 Ω",
                        "3 Ω",
                        "15 Ω",
                        "1.5 Ω"
                    ],
                    "answer": "3 Ω",
                    "explanation": "1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 ⇒ Rp = 3 Ω."
                },
                {
                    "id": "m18_q03",
                    "question": "Two electric bulbs rated 220 V, 40 W and 220 V, 100 W are connected in SERIES across a 220 V supply. Which bulb will glow BRIGHTER?",
                    "options": [
                        "The 100 W bulb",
                        "The 40 W bulb (it has higher filament resistance and dissipates more I²R power in series)",
                        "Both glow with equal brightness",
                        "Neither bulb will glow"
                    ],
                    "answer": "The 40 W bulb (it has higher filament resistance and dissipates more I²R power in series)",
                    "explanation": "R = V²/P ⇒ R₄₀ > R₁₀₀. In series, I is identical, so heat P = I²R is greater in the 40 W bulb, making it glow brighter."
                },
                {
                    "id": "m18_q04",
                    "question": "What is the commercial unit of electrical energy recorded on household electric meters?",
                    "options": [
                        "Volt-ampere",
                        "Kilowatt-hour (kWh) or 'Unit'",
                        "Watt-second",
                        "Coulomb"
                    ],
                    "answer": "Kilowatt-hour (kWh) or 'Unit'",
                    "explanation": "Electricity utilities measure and bill domestic energy in kilowatt-hours (kWh), commonly termed 'units'."
                },
                {
                    "id": "m18_q05",
                    "question": "How many Joules are equivalent to 1 kilowatt-hour (1 kWh)?",
                    "options": [
                        "3.6 × 10^6 J",
                        "3.6 × 10^3 J",
                        "1000 J",
                        "3600 J"
                    ],
                    "answer": "3.6 × 10^6 J",
                    "explanation": "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10^6 Joules."
                },
                {
                    "id": "m18_q06",
                    "question": "How long must a 100 W light bulb burn continuously to consume exactly 1 unit (1 kWh) of electrical energy?",
                    "options": [
                        "1 hour",
                        "10 hours",
                        "100 hours",
                        "24 hours"
                    ],
                    "answer": "10 hours",
                    "explanation": "Energy = Power × time => 1 kWh = 0.1 kW × t => t = 1 / 0.1 = 10 hours."
                },
                {
                    "id": "m18_q07",
                    "question": "An electric refrigerator rated 400 W operates 8 hours/day. What is the electrical energy consumed by the refrigerator in 30 days?",
                    "options": [
                        "96 kWh",
                        "9.6 kWh",
                        "960 kWh",
                        "32 kWh"
                    ],
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
                    "options": [
                        "9.0 × 10^8 J",
                        "2.5 × 10^5 J",
                        "9.0 × 10^6 J",
                        "1.0 × 10^9 J"
                    ],
                    "answer": "9.0 × 10^8 J",
                    "explanation": "250 kWh = 250 × 3.6 × 10^6 J = 900 × 10^6 J = 9.0 × 10^8 Joules."
                },
                {
                    "id": "m18_q10",
                    "question": "If a household consumes 10 kWh of electricity in a day, how many Joules of energy were used?",
                    "options": [
                        "3.6 × 10^7 J",
                        "3.6 × 10^6 J",
                        "1.0 × 10^4 J",
                        "36,000 J"
                    ],
                    "answer": "3.6 × 10^7 J",
                    "explanation": "10 kWh = 10 × 3.6 × 10^6 J = 3.6 × 10^7 Joules."
                }
            ]
        },
        {
            "id": "m19",
            "moduleNumber": 19,
            "title": "Electricity Billing: Power Ratings, Consumption & Cost Estimation",
            "tagline": "Systematic calculation of total units consumed, tariff rates, and monthly utility bills.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Systematic Electricity Bill Calculation Protocol</h4>\n    <p>To calculate the electricity bill for a household over a billing period (e.g., 30 days):</p>\n    <ol>\n      <li><strong>List All Appliances:</strong> For each appliance type, note its power rating in watts ($P$), the quantity of appliances ($N$), and daily operating hours ($t$).</li>\n      <li><strong>Calculate Daily Energy Consumption:</strong>\n        $$E_\\text{daily (Wh)} = N \\times P\\text{ (Watts)} \\times t\\text{ (hours/day)}$$\n      </li>\n      <li><strong>Convert to Kilowatt-Hours (Units):</strong>\n        $$\\text{Units per day (kWh)} = \\frac{E_\\text{daily (Wh)}}{1000}$$\n      </li>\n      <li><strong>Calculate Total Monthly Units:</strong>\n        $$\\text{Total Units} = \\text{Daily Units} \\times \\text{Number of days in month (e.g., 30)}$$\n      </li>\n      <li><strong>Calculate Financial Cost:</strong>\n        $$\\text{Total Cost (Rs.)} = \\text{Total Units (kWh)} \\times \\text{Tariff Rate (Rs. per unit)}$$\n      </li>\n    </ol>\n\n    <h4>2. Worked Example</h4>\n    <p>A household operates the following appliances daily:</p>\n    <ul>\n      <li>4 LED tubes of $20\\text{ W}$ each for $5\\text{ hours}$: $4 \\times 20 \\times 5 = 400\\text{ Wh}$</li>\n      <li>2 ceiling fans of $80\\text{ W}$ each for $10\\text{ hours}$: $2 \\times 80 \\times 10 = 1600\\text{ Wh}$</li>\n      <li>1 refrigerator of $250\\text{ W}$ running $24\\text{ hours}$ (compressor active 10 hrs): $250 \\times 10 = 2500\\text{ Wh}$</li>\n      <li>Total daily consumption $= 400 + 1600 + 2500 = 4500\\text{ Wh} = 4.5\\text{ kWh (units)}$.</li>\n      <li>Consumption in 30 days $= 4.5 \\times 30 = \\mathbf{135\\text{ units}}$.</li>\n      <li>At a rate of $\\text{Rs. } 6.00\\text{ per unit}$, monthly cost $= 135 \\times 6.00 = \\mathbf{\\text{Rs. } 810.00}$.</li>\n    </ul>\n  </div>\n</div>\n",
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
                {
                    "id": "m19_q01",
                    "question": "Two electric bulbs rated 220 V, 40 W and 220 V, 100 W are connected in PARALLEL across a 220 V supply. Which bulb will glow BRIGHTER?",
                    "options": [
                        "The 40 W bulb",
                        "The 100 W bulb (it draws more current and consumes full rated power P = V²/R = 100 W)",
                        "Both glow equally",
                        "The bulbs will explode"
                    ],
                    "answer": "The 100 W bulb (it draws more current and consumes full rated power P = V²/R = 100 W)",
                    "explanation": "In parallel, both receive 220 V, so the 100 W bulb consumes its full 100 W rating and glows brighter than the 40 W bulb."
                },
                {
                    "id": "m19_q02",
                    "question": "If a 0.1% increase in length is produced in a wire by stretching, what is the approximate percentage change in its electrical resistance?",
                    "options": [
                        "0.1% increase",
                        "0.2% increase (ΔR/R ≈ 2 Δl/l)",
                        "0.01% decrease",
                        "1.0% increase"
                    ],
                    "answer": "0.2% increase (ΔR/R ≈ 2 Δl/l)",
                    "explanation": "For small fractional stretching with constant volume: R ∝ l² ⇒ ΔR/R ≈ 2(Δl/l) = 2(0.1%) = +0.2%."
                },
                {
                    "id": "m19_q03",
                    "question": "In an electric circuit, five identical resistors of resistance R are connected in a symmetrical bridge network. If the bridge is balanced, what is the equivalent resistance across the main terminals?",
                    "options": [
                        "5R",
                        "R (no current flows through the central bridging resistor)",
                        "R / 5",
                        "2.5R"
                    ],
                    "answer": "R (no current flows through the central bridging resistor)",
                    "explanation": "In a balanced Wheatstone bridge (R₁/R₂ = R₃/R₄ = 1), potential across the bridge is zero (no current through central R). Equivalent is two parallel branches of 2R: Rp = (2R)/2 = R."
                },
                {
                    "id": "m19_q04",
                    "question": "A 2 kW electric geyser is used for 2 hours every day. At a tariff of Rs. 5.00 per unit, what is the cost of operating the geyser for 30 days?",
                    "options": [
                        "Rs. 600",
                        "Rs. 300",
                        "Rs. 120",
                        "Rs. 1500"
                    ],
                    "answer": "Rs. 600",
                    "explanation": "Daily energy = 2 kW × 2 h = 4 kWh. 30 days energy = 4 × 30 = 120 kWh (units). Total cost = 120 units × Rs. 5 = Rs. 600."
                },
                {
                    "id": "m19_q05",
                    "question": "Five 60 W bulbs are used for 4 hours daily, and three 100 W fans are used for 10 hours daily. What is the total energy consumed in a 30-day month?",
                    "options": [
                        "126 kWh",
                        "4.2 kWh",
                        "420 kWh",
                        "1260 kWh"
                    ],
                    "answer": "126 kWh",
                    "explanation": "Bulbs: 5 × 60 W × 4 h = 1200 Wh. Fans: 3 × 100 W × 10 h = 3000 Wh. Daily total = 4200 Wh = 4.2 kWh. Monthly = 4.2 × 30 = 126 kWh."
                },
                {
                    "id": "m19_q06",
                    "question": "What is the cost of running the appliances in the problem above for 30 days at Rs. 4.00 per unit?",
                    "options": [
                        "Rs. 504.00",
                        "Rs. 252.00",
                        "Rs. 1000.00",
                        "Rs. 126.00"
                    ],
                    "answer": "Rs. 504.00",
                    "explanation": "Total units = 126 kWh. Cost = 126 × Rs. 4.00 = Rs. 504.00."
                },
                {
                    "id": "m19_q07",
                    "question": "How many units of electricity are saved in 30 days by replacing a 100 W incandescent bulb with a 10 W LED bulb, operating 10 hours each day?",
                    "options": [
                        "27 kWh (units)",
                        "30 kWh",
                        "3 kWh",
                        "90 kWh"
                    ],
                    "answer": "27 kWh (units)",
                    "explanation": "Power saved = 100 W - 10 W = 90 W = 0.09 kW. Daily energy saved = 0.09 kW × 10 h = 0.9 kWh. 30 days: 0.9 × 30 = 27 kWh."
                },
                {
                    "id": "m19_q08",
                    "question": "An electric heater rated 1500 W operates for 3 hours. How many units of electricity did it consume?",
                    "options": [
                        "4.5 units",
                        "0.5 units",
                        "45 units",
                        "1.5 units"
                    ],
                    "answer": "4.5 units",
                    "explanation": "Energy = 1.5 kW × 3 h = 4.5 kWh = 4.5 units."
                },
                {
                    "id": "m19_q09",
                    "question": "If an electric toaster consumes 2.2 kWh of energy in a week, how many Joules of energy did it consume?",
                    "options": [
                        "7.92 × 10^6 J",
                        "2.2 × 10^6 J",
                        "7.92 × 10^3 J",
                        "2200 J"
                    ],
                    "answer": "7.92 × 10^6 J",
                    "explanation": "2.2 kWh = 2.2 × 3.6 × 10^6 J = 7.92 × 10^6 Joules."
                },
                {
                    "id": "m19_q10",
                    "question": "A student runs a 50 W laptop for 6 hours a day for an entire 30-day month. At Rs. 6.00 per unit, what is the cost on the electric bill?",
                    "options": [
                        "Rs. 54.00",
                        "Rs. 90.00",
                        "Rs. 18.00",
                        "Rs. 108.00"
                    ],
                    "answer": "Rs. 54.00",
                    "explanation": "Daily energy = 50 W × 6 h = 300 Wh = 0.3 kWh. Monthly = 0.3 × 30 = 9 kWh. Cost = 9 × Rs. 6.00 = Rs. 54.00."
                }
            ]
        },
        {
            "id": "m20",
            "moduleNumber": 20,
            "title": "Comprehensive Electricity Review: Circuits, Resistors & Power Mastery",
            "tagline": "Synthesis of Ohm's law, series/parallel combinations, Joule heating, and power formulas.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Master Summary of Governing Formulas in Electricity</h4>\n    <table class=\"table-bordered\" style=\"width:100%; border-collapse:collapse; margin:10px 0;\">\n      <thead><tr style=\"background:#f1f5f9;\"><th>Physical Quantity</th><th>Formula(s)</th><th>SI Unit</th></tr></thead>\n      <tbody>\n        <tr><td><strong>Electric Current ($I$)</strong></td><td>$I = \\frac{Q}{t} = \\frac{n e}{t} = \\frac{V}{R}$</td><td>Ampere (A)</td></tr>\n        <tr><td><strong>Potential Difference ($V$)</strong></td><td>$V = \\frac{W}{Q} = I \\cdot R$</td><td>Volt (V)</td></tr>\n        <tr><td><strong>Resistance ($R$)</strong></td><td>$R = \\rho \\frac{l}{A} = \\rho \\frac{l}{\\pi r^2}$</td><td>Ohm ($\\Omega$)</td></tr>\n        <tr><td><strong>Resistivity ($\\rho$)</strong></td><td>$\\rho = R \\frac{A}{l}$</td><td>Ohm-metre ($\\Omega\\cdot\\text{m}$)</td></tr>\n        <tr><td><strong>Series Resistance</strong></td><td>$R_s = R_1 + R_2 + R_3$</td><td>Ohm ($\\Omega$)</td></tr>\n        <tr><td><strong>Parallel Resistance</strong></td><td>$\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$</td><td>Ohm ($\\Omega$)</td></tr>\n        <tr><td><strong>Joule's Heating ($H$)</strong></td><td>$H = I^2 R t = V I t = \\frac{V^2}{R} t$</td><td>Joule (J)</td></tr>\n        <tr><td><strong>Electric Power ($P$)</strong></td><td>$P = V I = I^2 R = \\frac{V^2}{R} = \\frac{W}{t}$</td><td>Watt (W)</td></tr>\n        <tr><td><strong>Commercial Energy</strong></td><td>$E = P\\text{ (kW)} \\times t\\text{ (h)}$</td><td>$\\text{kWh}$ ($= 3.6 \\times 10^6\\text{ J}$)</td></tr>\n      </tbody>\n    </table>\n\n    <h4>2. Expert Problem-Solving Guidelines</h4>\n    <ul>\n      <li>In series circuits, current $I$ is constant; voltage splits ($V = V_1 + V_2$).</li>\n      <li>In parallel circuits, voltage $V$ is constant; current splits ($I = I_1 + I_2$).</li>\n      <li>Always ensure units are converted into SI standard base units ($\\text{A, V, }\\Omega\\text{, s, m}$) before calculation!</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Mastery of $V = IR$, $R = \\rho l/A$, and series/parallel equations solves $90\\%$ of board numericals.",
                "Joule heating: $H = I^2Rt$; Power: $P = VI = I^2R = V^2/R$.",
                "Commercial energy is measured in $\\text{kWh}$ ($1\\text{ unit} = 3.6 \\times 10^6\\text{ J}$)."
            ],
            "keyNotes": [
                "Always check whether appliances are in series or parallel before picking the power formula: use $P = I^2R$ for series and $P = V^2/R$ for parallel!"
            ],
            "questions": [
                {
                    "id": "m20_q01",
                    "question": "Why does the statement 'Electrons are consumed in an electric circuit' represent a fundamental physical misconception?",
                    "options": [
                        "Electrons turn into photons",
                        "Electrons are charge carriers that circulate continuously without being destroyed; what is consumed is the potential energy provided by the electric source",
                        "Electrons evaporate into air",
                        "Electrons are only present in batteries"
                    ],
                    "answer": "Electrons are charge carriers that circulate continuously without being destroyed; what is consumed is the potential energy provided by the electric source",
                    "explanation": "Charge is conserved; electrons merely transport electrochemical energy from source to load where it is converted to thermal/kinetic work."
                },
                {
                    "id": "m20_q02",
                    "question": "An ammeter has a resistance of 0.02 Ω. If it is erroneously connected in PARALLEL across a 12 V battery, what will occur?",
                    "options": [
                        "It measures the battery voltage accurately",
                        "An enormous short-circuit current (I = 12/0.02 = 600 A) flows through the low-resistance ammeter, burning out the meter coil immediately",
                        "No current flows",
                        "The battery becomes permanently charged"
                    ],
                    "answer": "An enormous short-circuit current (I = 12/0.02 = 600 A) flows through the low-resistance ammeter, burning out the meter coil immediately",
                    "explanation": "Due to negligible internal resistance, connecting an ammeter in parallel short-circuits the battery, causing destructive overcurrent."
                },
                {
                    "id": "m20_q03",
                    "question": "A voltmeter has an extremely high internal resistance of 100,000 Ω. If it is accidentally connected in SERIES in a torch circuit, what happens?",
                    "options": [
                        "The bulb burns out",
                        "The huge series resistance drops the circuit current almost to zero, so the bulb fails to glow while the voltmeter reads the full battery voltage",
                        "The circuit operates normally",
                        "The battery explodes"
                    ],
                    "answer": "The huge series resistance drops the circuit current almost to zero, so the bulb fails to glow while the voltmeter reads the full battery voltage",
                    "explanation": "The high resistance of the voltmeter in series throttles circuit current, stopping bulb illumination while recording battery EMF."
                },
                {
                    "id": "m20_q04",
                    "question": "Three identical resistors connected in series consume 10 W of power from a DC source. If the same three resistors are reconnected in PARALLEL across the same source, what power will they consume?",
                    "options": [
                        "30 W",
                        "90 W (P_parallel = n² × P_series = 3² × 10 W = 90 W)",
                        "10 W",
                        "3.33 W"
                    ],
                    "answer": "90 W (P_parallel = n² × P_series = 3² × 10 W = 90 W)",
                    "explanation": "Rs = 3R ⇒ P_s = V² / (3R) = 10 W ⇒ V²/R = 30 W. In parallel: Rp = R/3 ⇒ P_p = V² / (R/3) = 3(V²/R) = 3 × 30 W = 90 W."
                },
                {
                    "id": "m20_q05",
                    "question": "If the current flowing through a fixed ohmic resistor increases by 100% (doubles), what is the percentage increase in the power dissipated in the resistor?",
                    "options": [
                        "100%",
                        "300% increase (power quadruples to 4P, an increase of 300%)",
                        "200%",
                        "400%"
                    ],
                    "answer": "300% increase (power quadruples to 4P, an increase of 300%)",
                    "explanation": "P ∝ I². Doubling current (I' = 2I) makes P' = (2I)²R = 4 I²R = 4P. Percentage increase = ((4P - P)/P) × 100% = 300%."
                },
                {
                    "id": "m20_q06",
                    "question": "A wire of resistance R is cut into 'n' equal parts, and all 'n' parts are connected in parallel. What is the equivalent resistance of this combination?",
                    "options": [
                        "R / n",
                        "R / n²",
                        "n² R",
                        "n R"
                    ],
                    "answer": "R / n²",
                    "explanation": "Each part has resistance r = R/n. Parallel of n such parts gives R_eq = r / n = (R/n) / n = R / n²."
                },
                {
                    "id": "m20_q07",
                    "question": "Why does the resistivity of semiconductors (like silicon and germanium) DECREASE with rising temperature, unlike metallic conductors?",
                    "options": [
                        "Semiconductors melt at room temperature",
                        "Thermal energy breaks covalent bonds, exponentially increasing the concentration of free electron-hole charge carriers",
                        "Semiconductors have no resistance",
                        "Semiconductors turn into superconductors"
                    ],
                    "answer": "Thermal energy breaks covalent bonds, exponentially increasing the concentration of free electron-hole charge carriers",
                    "explanation": "In semiconductors, thermal carrier generation dominates over lattice scattering, dramatically decreasing resistivity (negative temperature coefficient)."
                },
                {
                    "id": "m20_q08",
                    "question": "An electric kettle has two heating coils. When coil 1 is used alone, water boils in 10 minutes. When coil 2 is used alone, water boils in 15 minutes. If both coils are connected in PARALLEL, how long will it take to boil the same water?",
                    "options": [
                        "25 minutes",
                        "6 minutes [t = (t₁ × t₂) / (t₁ + t₂) = (10 × 15)/25 = 6 min]",
                        "12.5 minutes",
                        "5 minutes"
                    ],
                    "answer": "6 minutes [t = (t₁ × t₂) / (t₁ + t₂) = (10 × 15)/25 = 6 min]",
                    "explanation": "Heat required H is constant. Power P = H/t = V²/R ⇒ 1/t ∝ 1/R. In parallel, 1/Rp = 1/R₁ + 1/R₂ ⇒ 1/t = 1/t₁ + 1/t₂ ⇒ t = (10 × 15)/(10 + 15) = 150/25 = 6 mins."
                },
                {
                    "id": "m20_q09",
                    "question": "In the same electric kettle, if both coils (10 min and 15 min) are connected in SERIES, how long will it take to boil the water?",
                    "options": [
                        "6 minutes",
                        "25 minutes (t = t₁ + t₂ = 10 + 15 = 25 min)",
                        "12.5 minutes",
                        "150 minutes"
                    ],
                    "answer": "25 minutes (t = t₁ + t₂ = 10 + 15 = 25 min)",
                    "explanation": "In series: Rs = R₁ + R₂. Since t ∝ R (from H = (V²/Rs)t): t = t₁ + t₂ = 10 min + 15 min = 25 min."
                },
                {
                    "id": "m20_q10",
                    "question": "Two electric bulbs rated 60 W, 220 V and 100 W, 220 V are connected in PARALLEL to a 220 V mains supply. What is the total current drawn from the line?",
                    "options": [
                        "0.73 A",
                        "1.5 A",
                        "0.27 A",
                        "2.0 A"
                    ],
                    "answer": "0.73 A",
                    "explanation": "Total power P = 60 + 100 = 160 W. Since in parallel, V = 220 V. Total current I = P / V = 160 W / 220 V ≈ 0.727 A ≈ 0.73 A."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_11_SCIENCE;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_11_SCIENCE;
}
