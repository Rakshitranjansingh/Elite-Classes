/* =========================================================================
   ELITE CLASSES — CLASS 10 SCIENCE TEST SERIES
   Chapter 11: Electricity (100 Questions Master Assessment)
   NCERT Standard Assessment with Proper Scientific & Mathematical Typography
   Difficulty Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10ScienceChapter11FullBank = {
    id: 'ts_c10_sci_ch11',
    title: 'Chapter 11: Electricity Assessment',
    subject: 'Science',
    cls: 'Class 10',
    duration_mins: 120,
    total_marks: 400,
    marks_per_question: 4,
    negative_mark: 1,
    questions_count: 100,
    questions: [
        // =================================================================
        // TIER 1: EASY QUESTIONS (Q1 - Q50)
        // Direct NCERT Concepts, Units, Formulas, Ohm's Law, Series/Parallel & Power
        // =================================================================
        {
            id: 1,
            question: "Electric current is defined as the rate of flow of electric charges across a cross-section of a conductor. What is its mathematical formula?",
            options: [
                { key: 'A', text: "I = Q × t" },
                { key: 'B', text: "I = Q / t" },
                { key: 'C', text: "I = t / Q" },
                { key: 'D', text: "I = W / Q" }
            ],
            correct_option: 'B',
            explanation: "Electric current I = Q / t, where Q is net charge flowing in time t."
        },
        {
            id: 2,
            question: "What is the SI unit of electric current?",
            options: [
                { key: 'A', text: "Coulomb (C)" },
                { key: 'B', text: "Ampere (A)" },
                { key: 'C', text: "Volt (V)" },
                { key: 'D', text: "Ohm (Ω)" }
            ],
            correct_option: 'B',
            explanation: "The SI unit of electric current is ampere (A), named after André-Marie Ampère."
        },
        {
            id: 3,
            question: "What is the SI unit of electric charge?",
            options: [
                { key: 'A', text: "Ampere" },
                { key: 'B', text: "Coulomb (C)" },
                { key: 'C', text: "Joule" },
                { key: 'D', text: "Watt" }
            ],
            correct_option: 'B',
            explanation: "The SI unit of electric charge is the coulomb (C)."
        },
        {
            id: 4,
            question: "How many electrons collectively constitute a net charge of ONE COULOMB (1 C)?",
            options: [
                { key: 'A', text: "1.6 × 10⁻¹⁹ electrons" },
                { key: 'B', text: "6.25 × 10¹⁸ electrons (≈ 6 × 10¹⁸)" },
                { key: 'C', text: "6.022 × 10²³ electrons" },
                { key: 'D', text: "10⁶ electrons" }
            ],
            correct_option: 'B',
            explanation: "Number of electrons n = Q / e = 1 C / (1.6 × 10⁻¹⁹ C) = 6.25 × 10¹⁸ electrons."
        },
        {
            id: 5,
            question: "What is the magnitude of the negative charge possessed by a single electron?",
            options: [
                { key: 'A', text: "1.6 × 10⁻¹⁹ C" },
                { key: 'B', text: "9.1 × 10⁻³¹ C" },
                { key: 'C', text: "1.6 × 10¹⁹ C" },
                { key: 'D', text: "1.0 C" }
            ],
            correct_option: 'A',
            explanation: "The elementary charge of an electron is e = -1.6 × 10⁻¹⁹ C."
        },
        {
            id: 6,
            question: "By convention, what is the direction of electric current in an electric circuit relative to the flow of electrons?",
            options: [
                { key: 'A', text: "In the exact same direction as electron flow" },
                { key: 'B', text: "Opposite to the direction of flow of electrons (from positive to negative terminal outside the cell)" },
                { key: 'C', text: "Perpendicular to electron flow" },
                { key: 'D', text: "From negative to positive terminal" }
            ],
            correct_option: 'B',
            explanation: "Conventional current flows from the positive to negative terminal, opposite to the direction of negatively charged electron drift."
        },
        {
            id: 7,
            question: "Which measuring instrument is connected in SERIES in an electric circuit to measure electric current?",
            options: [
                { key: 'A', text: "Voltmeter" },
                { key: 'B', text: "Ammeter" },
                { key: 'C', text: "Galvanometer in parallel" },
                { key: 'D', text: "Rheostat" }
            ],
            correct_option: 'B',
            explanation: "An ammeter has very low electrical resistance and is always connected in series to measure current flowing through a branch."
        },
        {
            id: 8,
            question: "How is electric potential difference (V) between two points defined mathematically in terms of work done (W) and charge (Q)?",
            options: [
                { key: 'A', text: "V = W × Q" },
                { key: 'B', text: "V = W / Q" },
                { key: 'C', text: "V = Q / W" },
                { key: 'D', text: "V = W / t" }
            ],
            correct_option: 'B',
            explanation: "Potential difference V = W / Q is the work done in moving a unit positive charge between two points."
        },
        {
            id: 9,
            question: "What is the SI unit of electric potential and potential difference?",
            options: [
                { key: 'A', text: "Ohm" },
                { key: 'B', text: "Volt (V, where 1 V = 1 J/C)" },
                { key: 'C', text: "Watt" },
                { key: 'D', text: "Ampere" }
            ],
            correct_option: 'B',
            explanation: "The SI unit of potential difference is volt (V), named after Alessandro Volta (1 V = 1 J C⁻¹)."
        },
        {
            id: 10,
            question: "Which measuring instrument is always connected in PARALLEL across two points to measure the potential difference between them?",
            options: [
                { key: 'A', text: "Ammeter" },
                { key: 'B', text: "Voltmeter" },
                { key: 'C', text: "Galvanometer in series" },
                { key: 'D', text: "Rheostat" }
            ],
            correct_option: 'B',
            explanation: "A voltmeter has high electrical resistance and is connected in parallel across components to measure voltage drop."
        },
        {
            id: 11,
            question: "According to Georg Simon Ohm's Law (1827), what is the relationship between potential difference (V) and current (I) across a metallic conductor at constant temperature?",
            options: [
                { key: 'A', text: "V ∝ 1/I" },
                { key: 'B', text: "V ∝ I (V = IR)" },
                { key: 'C', text: "V ∝ I²" },
                { key: 'D', text: "V × I = constant" }
            ],
            correct_option: 'B',
            explanation: "Ohm's Law: The potential difference across a conductor is directly proportional to the current flowing through it at constant temperature (V = IR)."
        },
        {
            id: 12,
            question: "What is the shape of the V–I graph for a metallic conductor (like nichrome wire) obeying Ohm's Law?",
            options: [
                { key: 'A', text: "A parabolic curve" },
                { key: 'B', text: "A straight line passing through the origin" },
                { key: 'C', text: "A circular arc" },
                { key: 'D', text: "A hyperbolic wave" }
            ],
            correct_option: 'B',
            explanation: "A linear V-I plot passing through the origin confirms constant resistance (R = V/I = slope)."
        },
        {
            id: 13,
            question: "What is the SI unit of electrical resistance?",
            options: [
                { key: 'A', text: "Ampere" },
                { key: 'B', text: "Ohm (Ω, where 1 Ω = 1 V / 1 A)" },
                { key: 'C', text: "Volt" },
                { key: 'D', text: "Siemens" }
            ],
            correct_option: 'B',
            explanation: "The SI unit of resistance is the ohm (Ω). 1 Ω = 1 V / 1 A."
        },
        {
            id: 14,
            question: "A circuit component used to adjust and regulate current in an electric circuit without changing the potential difference of the voltage source is called a:",
            options: [
                { key: 'A', text: "Voltmeter" },
                { key: 'B', text: "Rheostat (Variable resistor)" },
                { key: 'C', text: "Galvanometer" },
                { key: 'D', text: "Fuse" }
            ],
            correct_option: 'B',
            explanation: "A rheostat provides variable resistance, allowing continuous regulation of current without altering the source voltage."
        },
        {
            id: 15,
            question: "The electrical resistance (R) of a uniform cylindrical metallic conductor depends directly on its length (l) and inversely on its area of cross-section (A). What is the formula?",
            options: [
                { key: 'A', text: "R = ρ × (A / l)" },
                { key: 'B', text: "R = ρ × (l / A)" },
                { key: 'C', text: "R = ρ × l × A" },
                { key: 'D', text: "R = l / (ρ × A)" }
            ],
            correct_option: 'B',
            explanation: "Resistance R = ρ(l / A), where ρ is the electrical resistivity of the material."
        },
        {
            id: 16,
            question: "What is the SI unit of electrical resistivity (ρ)?",
            options: [
                { key: 'A', text: "Ohm (Ω)" },
                { key: 'B', text: "Ohm metre (Ω m)" },
                { key: 'C', text: "Ohm per metre (Ω/m)" },
                { key: 'D', text: "Volt metre" }
            ],
            correct_option: 'B',
            explanation: "Resistivity ρ = R·A / l = (Ω · m²) / m = Ω m."
        },
        {
            id: 17,
            question: "Which metal has the LOWEST electrical resistivity (1.60 × 10⁻⁸ Ω m at 20°C) and is the BEST conductor of electricity?",
            options: [
                { key: 'A', text: "Copper" },
                { key: 'B', text: "Silver" },
                { key: 'C', text: "Aluminium" },
                { key: 'D', text: "Iron" }
            ],
            correct_option: 'B',
            explanation: "Silver has the lowest electrical resistivity (1.60 × 10⁻⁸ Ω m), making it the finest electrical conductor."
        },
        {
            id: 18,
            question: "Why are copper and aluminium metals universally employed for electrical power transmission lines?",
            options: [
                { key: 'A', text: "They are insulators" },
                { key: 'B', text: "They have very low electrical resistivity, minimizing I²Rt energy losses, and are ductile and economical" },
                { key: 'C', text: "They melt easily" },
                { key: 'D', text: "They have negative resistance" }
            ],
            correct_option: 'B',
            explanation: "Low resistivity of copper (1.62 × 10⁻⁸ Ω m) and aluminium (2.63 × 10⁻⁸ Ω m) minimizes resistive heat dissipation during power transmission."
        },
        {
            id: 19,
            question: "Which metal with an exceptionally high melting point of 3380°C is used almost exclusively for the filaments of incandescent electric lamps?",
            options: [
                { key: 'A', text: "Copper" },
                { key: 'B', text: "Tungsten (W)" },
                { key: 'C', text: "Aluminium" },
                { key: 'D', text: "Lead" }
            ],
            correct_option: 'B',
            explanation: "Tungsten has a melting point of 3380°C and high tensile strength, allowing filaments to glow white-hot without melting."
        },
        {
            id: 20,
            question: "Why are the heating elements of electric irons, toasters, and geysers made of ALLOY (like nichrome) rather than pure metals?",
            options: [
                { key: 'A', text: "Alloys conduct zero electricity" },
                { key: 'B', text: "Alloys have higher resistivity than constituent metals and do not oxidize (burn) readily at high temperatures (red-hot states)" },
                { key: 'C', text: "Alloys are transparent" },
                { key: 'D', text: "Alloys freeze at 100°C" }
            ],
            correct_option: 'B',
            explanation: "Nichrome (Ni-Cr-Mn-Fe) possesses high resistivity (100 × 10⁻⁶ Ω m) and resists high-temperature thermal oxidation."
        },
        {
            id: 21,
            question: "What gases are filled inside incandescent electric light bulbs to prolong the life of the tungsten filament?",
            options: [
                { key: 'A', text: "Hydrogen and oxygen" },
                { key: 'B', text: "Chemically inactive nitrogen and argon gases" },
                { key: 'C', text: "Chlorine gas" },
                { key: 'D', text: "Carbon dioxide" }
            ],
            correct_option: 'B',
            explanation: "Unreactive nitrogen and argon prevent tungsten filament oxidation and suppress thermal evaporation."
        },
        {
            id: 22,
            question: "When several resistors R₁, R₂, R₃ are connected in SERIES, what is the formula for the equivalent resistance (Rs)?",
            options: [
                { key: 'A', text: "1/Rs = 1/R₁ + 1/R₂ + 1/R₃" },
                { key: 'B', text: "Rs = R₁ + R₂ + R₃" },
                { key: 'C', text: "Rs = R₁ × R₂ × R₃" },
                { key: 'D', text: "Rs = (R₁ + R₂) / R₃" }
            ],
            correct_option: 'B',
            explanation: "In series, the total resistance equals the sum of individual resistances: Rs = R₁ + R₂ + R₃."
        },
        {
            id: 23,
            question: "In a series circuit containing multiple resistors connected across a battery, which quantity remains CONSTANT through every resistor?",
            options: [
                { key: 'A', text: "Potential difference (V)" },
                { key: 'B', text: "Electric current (I)" },
                { key: 'C', text: "Power dissipation" },
                { key: 'D', text: "Resistance" }
            ],
            correct_option: 'B',
            explanation: "In a single unbranched series loop, electric current I is identical through all components."
        },
        {
            id: 24,
            question: "When three resistors R₁, R₂, R₃ are connected in PARALLEL across a battery, what is the formula for the equivalent resistance (Rp)?",
            options: [
                { key: 'A', text: "Rp = R₁ + R₂ + R₃" },
                { key: 'B', text: "1/Rp = 1/R₁ + 1/R₂ + 1/R₃" },
                { key: 'C', text: "Rp = 1/(R₁ + R₂ + R₃)" },
                { key: 'D', text: "Rp = R₁R₂R₃" }
            ],
            correct_option: 'B',
            explanation: "In parallel, reciprocal of equivalent resistance equals sum of reciprocals: 1/Rp = 1/R₁ + 1/R₂ + 1/R₃."
        },
        {
            id: 25,
            question: "In a parallel electric circuit, which physical quantity is the SAME across each individual branch resistor?",
            options: [
                { key: 'A', text: "Electric current (I)" },
                { key: 'B', text: "Potential difference (V, Voltage)" },
                { key: 'C', text: "Resistance" },
                { key: 'D', text: "Charge flow rate" }
            ],
            correct_option: 'B',
            explanation: "All parallel branches connect between the same two common nodes, maintaining identical potential difference V."
        },
        {
            id: 26,
            question: "Why is domestic household wiring connected in PARALLEL rather than in series?",
            options: [
                { key: 'A', text: "Series wiring uses too many fuses" },
                { key: 'B', text: "Parallel connection provides the same rated voltage (220 V) to every appliance, allows independent on/off switching, and prevents total circuit failure if one device fails" },
                { key: 'C', text: "Parallel wiring increases total resistance" },
                { key: 'D', text: "Series wiring produces no heat" }
            ],
            correct_option: 'B',
            explanation: "Parallel circuits provide full supply voltage to each load, enable independent control, and prevent single-point failure."
        },
        {
            id: 27,
            question: "What is Joule's Law of Heating for the heat (H) produced in a resistor of resistance R carrying current I for time t?",
            options: [
                { key: 'A', text: "H = I R t" },
                { key: 'B', text: "H = I² R t (or H = V I t = V²t / R)" },
                { key: 'C', text: "H = I R² t" },
                { key: 'D', text: "H = I² / (R t)" }
            ],
            correct_option: 'B',
            explanation: "Joule's Law: Heat generated is directly proportional to I², R, and t: H = I²Rt."
        },
        {
            id: 28,
            question: "How is an electric safety fuse connected in a domestic circuit to protect appliances from overcurrent and short-circuits?",
            options: [
                { key: 'A', text: "In parallel across the neutral wire" },
                { key: 'B', text: "In series with the live wire before appliances" },
                { key: 'C', text: "In parallel with the earth wire" },
                { key: 'D', text: "Inside the electricity meter only" }
            ],
            correct_option: 'B',
            explanation: "A fuse is placed in series with the live wire so excessive current heats and melts the fuse wire, breaking the circuit."
        },
        {
            id: 29,
            question: "What is the SI unit of electric power?",
            options: [
                { key: 'A', text: "Joule (J)" },
                { key: 'B', text: "Watt (W, where 1 W = 1 V × 1 A = 1 J/s)" },
                { key: 'C', text: "Kilowatt hour" },
                { key: 'D', text: "Coulomb" }
            ],
            correct_option: 'B',
            explanation: "Electric power P = VI is measured in watts (W), where 1 W = 1 J/s = 1 V A."
        },
        {
            id: 30,
            question: "Which of the following mathematical expressions correctly represents electric power (P)?",
            options: [
                { key: 'A', text: "P = VI" },
                { key: 'B', text: "P = I²R" },
                { key: 'C', text: "P = V² / R" },
                { key: 'D', text: "All of the above" }
            ],
            correct_option: 'D',
            explanation: "By Ohm's law substitutions: P = VI = I(IR) = I²R = V(V/R) = V² / R."
        },
        {
            id: 31,
            question: "What is the commercial unit of electrical energy consumed in households (commonly called a 'unit' on electric bills)?",
            options: [
                { key: 'A', text: "Joule (J)" },
                { key: 'B', text: "Kilowatt-hour (kWh)" },
                { key: 'C', text: "Watt-second" },
                { key: 'D', text: "Volt-ampere" }
            ],
            correct_option: 'B',
            explanation: "The commercial billing unit of electrical energy is kilowatt-hour (kWh)."
        },
        {
            id: 32,
            question: "How many Joules (J) are equal to ONE KILOWATT-HOUR (1 kWh)?",
            options: [
                { key: 'A', text: "3.6 × 10⁵ J" },
                { key: 'B', text: "3.6 × 10⁶ J (3,600,000 Joules)" },
                { key: 'C', text: "1000 J" },
                { key: 'D', text: "3600 J" }
            ],
            correct_option: 'B',
            explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J."
        },
        {
            id: 33,
            question: "A current of 0.5 A flows through the filament of an electric bulb for 10 minutes. What is the total electric charge that flows through the circuit?",
            options: [
                { key: 'A', text: "5 C" },
                { key: 'B', text: "300 C" },
                { key: 'C', text: "50 C" },
                { key: 'D', text: "6000 C" }
            ],
            correct_option: 'B',
            explanation: "Q = I × t = 0.5 A × (10 × 60 s) = 0.5 A × 600 s = 300 C."
        },
        {
            id: 34,
            question: "How much work (W) is done in moving a charge of 2 C across two points having a potential difference of 12 V?",
            options: [
                { key: 'A', text: "6 J" },
                { key: 'B', text: "24 J" },
                { key: 'C', text: "14 J" },
                { key: 'D', text: "0.16 J" }
            ],
            correct_option: 'B',
            explanation: "W = V × Q = 12 V × 2 C = 24 J."
        },
        {
            id: 35,
            question: "How much energy is given to each coulomb of charge passing through a 6 V battery?",
            options: [
                { key: 'A', text: "1 J" },
                { key: 'B', text: "6 J" },
                { key: 'C', text: "12 J" },
                { key: 'D', text: "36 J" }
            ],
            correct_option: 'B',
            explanation: "Energy W = V × Q = 6 V × 1 C = 6 J."
        },
        {
            id: 36,
            question: "An electric bulb of resistance 1200 Ω is connected to a 220 V supply. How much current does it draw?",
            options: [
                { key: 'A', text: "5.45 A" },
                { key: 'B', text: "0.18 A" },
                { key: 'C', text: "1.2 A" },
                { key: 'D', text: "2.2 A" }
            ],
            correct_option: 'B',
            explanation: "I = V / R = 220 V / 1200 Ω ≈ 0.183 A."
        },
        {
            id: 37,
            question: "An electric heater coil of resistance 100 Ω is connected to a 220 V supply. How much current does it draw?",
            options: [
                { key: 'A', text: "0.18 A" },
                { key: 'B', text: "2.2 A" },
                { key: 'C', text: "22 A" },
                { key: 'D', text: "0.45 A" }
            ],
            correct_option: 'B',
            explanation: "I = V / R = 220 V / 100 Ω = 2.2 A."
        },
        {
            id: 38,
            question: "An electric heater draws 4 A when connected to a 60 V line. What current will it draw if the potential difference is increased to 120 V?",
            options: [
                { key: 'A', text: "2 A" },
                { key: 'B', text: "8 A" },
                { key: 'C', text: "16 A" },
                { key: 'D', text: "4 A" }
            ],
            correct_option: 'B',
            explanation: "R = V₁ / I₁ = 60 V / 4 A = 15 Ω. At 120 V: I₂ = V₂ / R = 120 V / 15 Ω = 8 A."
        },
        {
            id: 39,
            question: "An electric lamp of resistance 20 Ω and a series resistor of 4 Ω are connected to a 6 V battery. What is the total circuit resistance and current?",
            options: [
                { key: 'A', text: "Total R = 5 Ω; Current = 1.2 A" },
                { key: 'B', text: "Total R = 24 Ω; Current = 0.25 A" },
                { key: 'C', text: "Total R = 80 Ω; Current = 0.075 A" },
                { key: 'D', text: "Total R = 16 Ω; Current = 0.375 A" }
            ],
            correct_option: 'B',
            explanation: "Rs = 20 Ω + 4 Ω = 24 Ω. Current I = V / Rs = 6 V / 24 Ω = 0.25 A."
        },
        {
            id: 40,
            question: "Three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery. What is the equivalent resistance of the combination?",
            options: [
                { key: 'A', text: "45 Ω" },
                { key: 'B', text: "3 Ω" },
                { key: 'C', text: "15 Ω" },
                { key: 'D', text: "1.5 Ω" }
            ],
            correct_option: 'B',
            explanation: "1/Rp = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30 = 1/3 ⇒ Rp = 3 Ω."
        },
        {
            id: 41,
            question: "What is the equivalent resistance when a 1 Ω resistor and a 10⁶ Ω resistor are connected in PARALLEL?",
            options: [
                { key: 'A', text: "10⁶ Ω" },
                { key: 'B', text: "Slightly less than 1 Ω (≈ 0.999999 Ω)" },
                { key: 'C', text: "10⁶ + 1 Ω" },
                { key: 'D', text: "500,000 Ω" }
            ],
            correct_option: 'B',
            explanation: "The equivalent resistance of any parallel combination is strictly less than the smallest individual resistor (Rp < 1 Ω)."
        },
        {
            id: 42,
            question: "Why does the cord (connecting cable) of an electric heater not glow while the heating element glows bright red?",
            options: [
                { key: 'A', text: "Cord is made of rubber" },
                { key: 'B', text: "The copper cord has extremely low resistance (producing negligible I²Rt heat), while the nichrome heating element has very high resistance, generating intense heat to glow red" },
                { key: 'C', text: "Cord carries zero current" },
                { key: 'D', text: "Element is painted red" }
            ],
            correct_option: 'B',
            explanation: "Heat H = I²Rt; since current is identical, the high-resistance nichrome element generates high heat while low-resistance copper cord stays cool."
        },
        {
            id: 43,
            question: "An electric iron consumes 1 kW (1000 W) of electric power when operated on a 220 V line. What rating fuse must be used?",
            options: [
                { key: 'A', text: "1 A fuse" },
                { key: 'B', text: "5 A fuse (as current I = 1000/220 = 4.54 A)" },
                { key: 'C', text: "2 A fuse" },
                { key: 'D', text: "20 A fuse" }
            ],
            correct_option: 'B',
            explanation: "Current I = P / V = 1000 W / 220 V = 4.54 A. The next standard safety fuse rating is 5 A."
        },
        {
            id: 44,
            question: "An electric bulb is connected to a 220 V generator and draws a current of 0.50 A. What is the electric power of the bulb?",
            options: [
                { key: 'A', text: "440 W" },
                { key: 'B', text: "110 W" },
                { key: 'C', text: "220 W" },
                { key: 'D', text: "55 W" }
            ],
            correct_option: 'B',
            explanation: "P = V × I = 220 V × 0.50 A = 110 W."
        },
        {
            id: 45,
            question: "An electric refrigerator rated 400 W operates 8 hours/day. What is the cost of operating it for 30 days at ₹ 3.00 per kWh?",
            options: [
                { key: 'A', text: "₹ 96.00" },
                { key: 'B', text: "₹ 288.00" },
                { key: 'C', text: "₹ 576.00" },
                { key: 'D', text: "₹ 144.00" }
            ],
            correct_option: 'B',
            explanation: "Energy = 400 W × 8 h/day × 30 days = 96,000 Wh = 96 kWh. Cost = 96 kWh × ₹ 3.00 = ₹ 288.00."
        },
        {
            id: 46,
            question: "Which of the following terms does NOT represent electric power in an electric circuit?",
            options: [
                { key: 'A', text: "I²R" },
                { key: 'B', text: "I R²" },
                { key: 'C', text: "VI" },
                { key: 'D', text: "V² / R" }
            ],
            correct_option: 'B',
            explanation: "Power is VI, I²R, or V²/R. The term 'IR²' is dimensionally incorrect for power."
        },
        {
            id: 47,
            question: "An electric bulb is rated 220 V and 100 W. When it is operated on a 110 V line, what will be the power consumed?",
            options: [
                { key: 'A', text: "100 W" },
                { key: 'B', text: "25 W" },
                { key: 'C', text: "50 W" },
                { key: 'D', text: "75 W" }
            ],
            correct_option: 'B',
            explanation: "Resistance R = V²/P = 220²/100 = 484 Ω. At 110 V: P' = V'²/R = 110²/484 = 12100/484 = 25 W."
        },
        {
            id: 48,
            question: "What determines the rate at which electrical energy is delivered by an electric current?",
            options: [
                { key: 'A', text: "Electric charge" },
                { key: 'B', text: "Electric power (P = VI)" },
                { key: 'C', text: "Electric potential only" },
                { key: 'D', text: "Circuit length" }
            ],
            correct_option: 'B',
            explanation: "The rate of doing work or rate of energy delivery is defined as electric power (P = dW/dt)."
        },
        {
            id: 49,
            question: "How much heat is developed in 30 seconds in an electric iron of resistance 20 Ω drawing a current of 5 A?",
            options: [
                { key: 'A', text: "3000 J" },
                { key: 'B', text: "15,000 J (1.5 × 10⁴ J)" },
                { key: 'C', text: "600 J" },
                { key: 'D', text: "30,000 J" }
            ],
            correct_option: 'B',
            explanation: "H = I²Rt = (5 A)² × 20 Ω × 30 s = 25 × 20 × 30 = 15,000 J."
        },
        {
            id: 50,
            question: "Compute the heat generated while transferring 96,000 C of charge in 1 hour through a potential difference of 50 V:",
            options: [
                { key: 'A', text: "4.8 × 10⁶ J (4.8 MJ)" },
                { key: 'B', text: "1.92 × 10⁵ J" },
                { key: 'C', text: "9.6 × 10⁶ J" },
                { key: 'D', text: "4800 J" }
            ],
            correct_option: 'A',
            explanation: "H = W = V × Q = 50 V × 96,000 C = 4,800,000 J = 4.8 × 10⁶ J."
        },

        // =================================================================
        // TIER 2: MEDIUM QUESTIONS (Q51 - Q60)
        // Two-Step Calculations, Resistivity Predictions & Wire Resizing
        // =================================================================
        {
            id: 51,
            question: "A metal wire of length 1 m and diameter 0.3 mm has a resistance of 26 Ω at 20°C. What is the electrical resistivity of the metal?",
            options: [
                { key: 'A', text: "1.84 × 10⁻⁶ Ω m (Manganese)" },
                { key: 'B', text: "1.60 × 10⁻⁸ Ω m" },
                { key: 'C', text: "10.0 × 10⁻⁸ Ω m" },
                { key: 'D', text: "44 × 10⁻⁶ Ω m" }
            ],
            correct_option: 'A',
            explanation: "r = 0.15 mm = 1.5 × 10⁻⁴ m. A = πr² = π(1.5 × 10⁻⁴)² ≈ 7.068 × 10⁻⁸ m². ρ = RA/l = (26 × 7.068 × 10⁻⁸) / 1 = 1.84 × 10⁻⁶ Ω m."
        },
        {
            id: 52,
            question: "A wire of length l and cross-sectional area A has a resistance of 4 Ω. What is the resistance of another wire of the SAME material having length l/2 and area 2A?",
            options: [
                { key: 'A', text: "4 Ω" },
                { key: 'B', text: "1 Ω" },
                { key: 'C', text: "16 Ω" },
                { key: 'D', text: "2 Ω" }
            ],
            correct_option: 'B',
            explanation: "R₂ = ρ(l/2) / (2A) = (1/4) ρ(l/A) = (1/4) R₁ = (1/4) × 4 Ω = 1 Ω."
        },
        {
            id: 53,
            question: "How can three resistors of resistances 2 Ω, 3 Ω, and 6 Ω be connected to yield a total equivalent resistance of EXACTLY 4 Ω?",
            options: [
                { key: 'A', text: "All three connected in series" },
                { key: 'B', text: "Connect 3 Ω and 6 Ω in parallel, and put this combination in series with the 2 Ω resistor" },
                { key: 'C', text: "Connect 2 Ω and 3 Ω in parallel, in series with 6 Ω" },
                { key: 'D', text: "All three connected in parallel" }
            ],
            correct_option: 'B',
            explanation: "Parallel of 3 Ω and 6 Ω: Rp = (3 × 6)/(3 + 6) = 18/9 = 2 Ω. Adding 2 Ω in series: R_total = 2 Ω + 2 Ω = 4 Ω."
        },
        {
            id: 54,
            question: "How can three resistors of resistances 2 Ω, 3 Ω, and 6 Ω be connected to yield a total equivalent resistance of EXACTLY 1 Ω?",
            options: [
                { key: 'A', text: "All three connected in parallel" },
                { key: 'B', text: "All three connected in series" },
                { key: 'C', text: "2 Ω in series with parallel of 3 Ω and 6 Ω" },
                { key: 'D', text: "6 Ω in parallel with 2 Ω, in series with 3 Ω" }
            ],
            correct_option: 'A',
            explanation: "1/Rp = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 6/6 = 1 ⇒ Rp = 1 Ω."
        },
        {
            id: 55,
            question: "What are the HIGHEST and LOWEST total resistances that can be secured by combining four resistance coils of 4 Ω, 8 Ω, 12 Ω, and 24 Ω?",
            options: [
                { key: 'A', text: "Highest = 24 Ω; Lowest = 4 Ω" },
                { key: 'B', text: "Highest = 48 Ω (in series); Lowest = 2 Ω (in parallel)" },
                { key: 'C', text: "Highest = 96 Ω; Lowest = 1 Ω" },
                { key: 'D', text: "Highest = 48 Ω; Lowest = 4 Ω" }
            ],
            correct_option: 'B',
            explanation: "Highest (series): 4 + 8 + 12 + 24 = 48 Ω. Lowest (parallel): 1/Rp = 1/4 + 1/8 + 1/12 + 1/24 = (6 + 3 + 2 + 1)/24 = 12/24 = 1/2 ⇒ Rp = 2 Ω."
        },
        {
            id: 56,
            question: "How many 176 Ω resistors connected in parallel are required to carry a current of 5 A on a 220 V line?",
            options: [
                { key: 'A', text: "2 resistors" },
                { key: 'B', text: "4 resistors" },
                { key: 'C', text: "8 resistors" },
                { key: 'D', text: "10 resistors" }
            ],
            correct_option: 'B',
            explanation: "Required total resistance R = V / I = 220 V / 5 A = 44 Ω. Since R = 176 / n ⇒ n = 176 / 44 = 4 resistors."
        },
        {
            id: 57,
            question: "An electric oven hot plate has two resistance coils A and B, each of 24 Ω, connected to a 220 V line. What are the currents when used (i) separately, (ii) in series, and (iii) in parallel?",
            options: [
                { key: 'A', text: "Separately = 9.17 A; Series = 4.58 A; Parallel = 18.33 A" },
                { key: 'B', text: "Separately = 10 A; Series = 5 A; Parallel = 20 A" },
                { key: 'C', text: "Separately = 4.58 A; Series = 9.17 A; Parallel = 18.33 A" },
                { key: 'D', text: "Separately = 24 A; Series = 48 A; Parallel = 12 A" }
            ],
            correct_option: 'A',
            explanation: "(i) Separately: I = 220/24 = 9.167 A. (ii) Series (48 Ω): I = 220/48 = 4.583 A. (iii) Parallel (12 Ω): I = 220/12 = 18.33 A."
        },
        {
            id: 58,
            question: "Which appliance consumes more electrical energy: a 250 W TV set operated for 1 hour, or a 1200 W toaster operated for 10 minutes?",
            options: [
                { key: 'A', text: "Toaster uses more energy" },
                { key: 'B', text: "TV set uses more energy (250 Wh = 9.0 × 10⁵ J vs Toaster 200 Wh = 7.2 × 10⁵ J)" },
                { key: 'C', text: "Both consume identical energy" },
                { key: 'D', text: "Cannot be determined without voltage" }
            ],
            correct_option: 'B',
            explanation: "E_TV = 250 W × 1 h = 250 Wh. E_Toaster = 1200 W × (10/60 h) = 200 Wh. The TV consumes 250 Wh > 200 Wh."
        },
        {
            id: 59,
            question: "Two lamps, one rated 100 W at 220 V and the other 60 W at 220 V, are connected in parallel to a 220 V mains supply. What is the total current drawn from the line?",
            options: [
                { key: 'A', text: "0.45 A" },
                { key: 'B', text: "0.73 A (160 W / 220 V)" },
                { key: 'C', text: "1.25 A" },
                { key: 'D', text: "2.0 A" }
            ],
            correct_option: 'B',
            explanation: "Total power P = 100 W + 60 W = 160 W. Total current I = P / V = 160 W / 220 V = 0.727 A ≈ 0.73 A."
        },
        {
            id: 60,
            question: "An electric heater of resistance 44 Ω draws 5 A from service mains for 2 hours. What is the rate at which heat is developed in the heater?",
            options: [
                { key: 'A', text: "220 J/s" },
                { key: 'B', text: "1100 W (1100 J/s)" },
                { key: 'C', text: "7.92 × 10⁶ J" },
                { key: 'D', text: "440 W" }
            ],
            correct_option: 'B',
            explanation: "The 'rate of heat development' means power: P = I²R = (5 A)² × 44 Ω = 25 × 44 = 1100 W = 1100 J/s."
        },

        // =================================================================
        // TIER 3: HARD QUESTIONS (Q61 - Q70)
        // Multi-Step Networks, Power Comparisons & Wire Stretching Calculations
        // =================================================================
        {
            id: 61,
            question: "A uniform cylindrical wire of resistance R is STRETCHED uniformly until its length becomes THREE TIMES (3l) its original length. What is its new resistance?",
            options: [
                { key: 'A', text: "3R" },
                { key: 'B', text: "9R (volume is constant, so area becomes A/3)" },
                { key: 'C', text: "R / 3" },
                { key: 'D', text: "R / 9" }
            ],
            correct_option: 'B',
            explanation: "Volume V = l × A is constant. If length triples (l' = 3l), area becomes A' = A/3. R' = ρ(3l)/(A/3) = 9 ρ(l/A) = 9R."
        },
        {
            id: 62,
            question: "A piece of wire of resistance R is cut into FIVE equal parts. These five parts are then connected in parallel. If the equivalent resistance of this parallel combination is R', what is the ratio R / R'?",
            options: [
                { key: 'A', text: "1/25" },
                { key: 'B', text: "25" },
                { key: 'C', text: "5" },
                { key: 'D', text: "1/5" }
            ],
            correct_option: 'B',
            explanation: "Each piece has resistance r = R/5. When 5 pieces of R/5 are in parallel: R' = (R/5)/5 = R/25. Thus R / R' = 25."
        },
        {
            id: 63,
            question: "Two conducting wires of identical material, length, and diameter are connected across the same voltage source, first in series and then in parallel. What is the ratio of heat produced in series to parallel combination in a given time (H_series : H_parallel)?",
            options: [
                { key: 'A', text: "1 : 2" },
                { key: 'B', text: "1 : 4" },
                { key: 'C', text: "4 : 1" },
                { key: 'D', text: "2 : 1" }
            ],
            correct_option: 'B',
            explanation: "For constant V: H = (V²/R)t. Rs = 2R, Rp = R/2. H_series / H_parallel = (V²/(2R)) / (V²/(R/2)) = (1/2) / 2 = 1/4 (1 : 4)."
        },
        {
            id: 64,
            question: "A copper wire has a diameter of 0.5 mm and resistivity of 1.6 × 10⁻⁸ Ω m. What length of this wire is required to obtain a resistance of 10 Ω?",
            options: [
                { key: 'A', text: "12.27 m" },
                { key: 'B', text: "122.7 m" },
                { key: 'C', text: "1227 m" },
                { key: 'D', text: "1.23 m" }
            ],
            correct_option: 'B',
            explanation: "r = 0.25 mm = 2.5 × 10⁻⁴ m. A = πr² = π(2.5 × 10⁻⁴)² = 1.9635 × 10⁻⁷ m². l = RA / ρ = (10 × 1.9635 × 10⁻⁷) / (1.6 × 10⁻⁸) = 1.9635 × 10 / 0.16 = 122.7 m."
        },
        {
            id: 65,
            question: "In the above copper wire of resistance 10 Ω, if the diameter of the wire is DOUBLED while keeping length unchanged, what will be the new resistance?",
            options: [
                { key: 'A', text: "20 Ω" },
                { key: 'B', text: "2.5 Ω (decreases by a factor of 4)" },
                { key: 'C', text: "5.0 Ω" },
                { key: 'D', text: "40 Ω" }
            ],
            correct_option: 'B',
            explanation: "Area A ∝ d². Doubling diameter quadruples area (A' = 4A). Since R ∝ 1/A, R' = R / 4 = 10 Ω / 4 = 2.5 Ω."
        },
        {
            id: 66,
            question: "Compare the power consumed in the 2 Ω resistor in two circuits: Circuit 1 (6 V battery in series with 1 Ω and 2 Ω resistors) and Circuit 2 (4 V battery in parallel with 12 Ω and 2 Ω resistors):",
            options: [
                { key: 'A', text: "Circuit 1: 4 W; Circuit 2: 4 W (Both consume equal power = 8 W)" },
                { key: 'B', text: "Circuit 1: P₁ = 8 W; Circuit 2: P₂ = 8 W (Equal power of 8 W in both)" },
                { key: 'C', text: "Circuit 1: 2 W; Circuit 2: 8 W" },
                { key: 'D', text: "Circuit 1: 8 W; Circuit 2: 2 W" }
            ],
            correct_option: 'B',
            explanation: "Circuit 1: I = 6 V / (1 + 2) = 2 A. P₁ = I²R = (2 A)² × 2 Ω = 8 W. Circuit 2: V across 2 Ω is 4 V. P₂ = V²/R = 4²/2 = 16/2 = 8 W. Both consume exactly 8 W."
        },
        {
            id: 67,
            question: "A battery of 9 V is connected in series with resistors of 0.2 Ω, 0.3 Ω, 0.4 Ω, 0.5 Ω, and 12 Ω. What is the current flowing through the 12 Ω resistor?",
            options: [
                { key: 'A', text: "0.75 A" },
                { key: 'B', text: "0.67 A (I = 9 V / 13.4 Ω)" },
                { key: 'C', text: "1.34 A" },
                { key: 'D', text: "9.0 A" }
            ],
            correct_option: 'B',
            explanation: "Total series resistance Rs = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 Ω. In series, current is identical everywhere: I = V / Rs = 9 / 13.4 = 0.6716 A ≈ 0.67 A."
        },
        {
            id: 68,
            question: "How many 10 W, 220 V electric lamps can be safely connected in parallel across a 220 V line if the maximum permissible fuse current is 5 A?",
            options: [
                { key: 'A', text: "50 lamps" },
                { key: 'B', text: "110 lamps" },
                { key: 'C', text: "22 lamps" },
                { key: 'D', text: "220 lamps" }
            ],
            correct_option: 'B',
            explanation: "Total allowable power P_total = V × I_max = 220 V × 5 A = 1100 W. Number of 10 W lamps = 1100 W / 10 W = 110 lamps."
        },
        {
            id: 69,
            question: "When a 12 V battery is connected across an unknown resistor, a current of 2.5 mA flows through it. What is the resistance of the resistor?",
            options: [
                { key: 'A', text: "4.8 Ω" },
                { key: 'B', text: "4800 Ω (4.8 kΩ)" },
                { key: 'C', text: "48 Ω" },
                { key: 'D', text: "30 kΩ" }
            ],
            correct_option: 'B',
            explanation: "R = V / I = 12 V / (2.5 × 10⁻³ A) = 12,000 / 2.5 = 4800 Ω = 4.8 kΩ."
        },
        {
            id: 70,
            question: "An electric iron consumes 840 W at maximum heating and 360 W at minimum heating from a 220 V source. What are the resistance values of the iron in each case?",
            options: [
                { key: 'A', text: "Max: 57.6 Ω; Min: 134.15 Ω" },
                { key: 'B', text: "Max: 134.15 Ω; Min: 57.6 Ω" },
                { key: 'C', text: "Max: 24 Ω; Min: 48 Ω" },
                { key: 'D', text: "Max: 100 Ω; Min: 200 Ω" }
            ],
            correct_option: 'A',
            explanation: "R_max = V² / P_max = 220² / 840 = 48400 / 840 = 57.60 Ω. R_min = V² / P_min = 220² / 360 = 48400 / 360 = 134.44 Ω (≈ 134.15 Ω)."
        },

        // =================================================================
        // TIER 4: TRICKY QUESTIONS (Q71 - Q90)
        // Bridge Networks, Real/Internal Resistance, Temperature Effects & Edge Cases
        // =================================================================
        {
            id: 71,
            question: "What happens to the electrical resistance and resistivity of a metallic conductor when its temperature INCREASES?",
            options: [
                { key: 'A', text: "Resistance decreases, resistivity increases" },
                { key: 'B', text: "Both resistance and resistivity increase due to increased thermal vibrations of metal lattice ions colliding with drifting electrons" },
                { key: 'C', text: "Both remain strictly unchanged" },
                { key: 'D', text: "Both decrease to zero" }
            ],
            correct_option: 'B',
            explanation: "Increasing temperature intensifies ionic lattice vibrations, increasing electron collision frequency and raising both resistance and resistivity."
        },
        {
            id: 72,
            question: "A uniform wire of resistance R is bent into the shape of a closed CIRCLE. What is the effective resistance between two diametrically opposite points A and B on the circle?",
            options: [
                { key: 'A', text: "R" },
                { key: 'B', text: "R / 4" },
                { key: 'C', text: "R / 2" },
                { key: 'D', text: "2R" }
            ],
            correct_option: 'B',
            explanation: "The circle splits into two semicircular halves of resistance R/2 connected in parallel: R_eff = (R/2) / 2 = R/4."
        },
        {
            id: 73,
            question: "Two electric bulbs rated 220 V, 40 W and 220 V, 100 W are connected in SERIES across a 220 V supply. Which bulb will glow BRIGHTER?",
            options: [
                { key: 'A', text: "The 100 W bulb" },
                { key: 'B', text: "The 40 W bulb (it has higher filament resistance and dissipates more I²R power in series)" },
                { key: 'C', text: "Both glow with equal brightness" },
                { key: 'D', text: "Neither bulb will glow" }
            ],
            correct_option: 'B',
            explanation: "R = V²/P ⇒ R₄₀ > R₁₀₀. In series, I is identical, so heat P = I²R is greater in the 40 W bulb, making it glow brighter."
        },
        {
            id: 74,
            question: "Two electric bulbs rated 220 V, 40 W and 220 V, 100 W are connected in PARALLEL across a 220 V supply. Which bulb will glow BRIGHTER?",
            options: [
                { key: 'A', text: "The 40 W bulb" },
                { key: 'B', text: "The 100 W bulb (it draws more current and consumes full rated power P = V²/R = 100 W)" },
                { key: 'C', text: "Both glow equally" },
                { key: 'D', text: "The bulbs will explode" }
            ],
            correct_option: 'B',
            explanation: "In parallel, both receive 220 V, so the 100 W bulb consumes its full 100 W rating and glows brighter than the 40 W bulb."
        },
        {
            id: 75,
            question: "If a 0.1% increase in length is produced in a wire by stretching, what is the approximate percentage change in its electrical resistance?",
            options: [
                { key: 'A', text: "0.1% increase" },
                { key: 'B', text: "0.2% increase (ΔR/R ≈ 2 Δl/l)" },
                { key: 'C', text: "0.01% decrease" },
                { key: 'D', text: "1.0% increase" }
            ],
            correct_option: 'B',
            explanation: "For small fractional stretching with constant volume: R ∝ l² ⇒ ΔR/R ≈ 2(Δl/l) = 2(0.1%) = +0.2%."
        },
        {
            id: 76,
            question: "In an electric circuit, five identical resistors of resistance R are connected in a symmetrical bridge network. If the bridge is balanced, what is the equivalent resistance across the main terminals?",
            options: [
                { key: 'A', text: "5R" },
                { key: 'B', text: "R (no current flows through the central bridging resistor)" },
                { key: 'C', text: "R / 5" },
                { key: 'D', text: "2.5R" }
            ],
            correct_option: 'B',
            explanation: "In a balanced Wheatstone bridge (R₁/R₂ = R₃/R₄ = 1), potential across the bridge is zero (no current through central R). Equivalent is two parallel branches of 2R: Rp = (2R)/2 = R."
        },
        {
            id: 77,
            question: "Why does the statement 'Electrons are consumed in an electric circuit' represent a fundamental physical misconception?",
            options: [
                { key: 'A', text: "Electrons turn into photons" },
                { key: 'B', text: "Electrons are charge carriers that circulate continuously without being destroyed; what is consumed is the potential energy provided by the electric source" },
                { key: 'C', text: "Electrons evaporate into air" },
                { key: 'D', text: "Electrons are only present in batteries" }
            ],
            correct_option: 'B',
            explanation: "Charge is conserved; electrons merely transport electrochemical energy from source to load where it is converted to thermal/kinetic work."
        },
        {
            id: 78,
            question: "An ammeter has a resistance of 0.02 Ω. If it is erroneously connected in PARALLEL across a 12 V battery, what will occur?",
            options: [
                { key: 'A', text: "It measures the battery voltage accurately" },
                { key: 'B', text: "An enormous short-circuit current (I = 12/0.02 = 600 A) flows through the low-resistance ammeter, burning out the meter coil immediately" },
                { key: 'C', text: "No current flows" },
                { key: 'D', text: "The battery becomes permanently charged" }
            ],
            correct_option: 'B',
            explanation: "Due to negligible internal resistance, connecting an ammeter in parallel short-circuits the battery, causing destructive overcurrent."
        },
        {
            id: 79,
            question: "A voltmeter has an extremely high internal resistance of 100,000 Ω. If it is accidentally connected in SERIES in a torch circuit, what happens?",
            options: [
                { key: 'A', text: "The bulb burns out" },
                { key: 'B', text: "The huge series resistance drops the circuit current almost to zero, so the bulb fails to glow while the voltmeter reads the full battery voltage" },
                { key: 'C', text: "The circuit operates normally" },
                { key: 'D', text: "The battery explodes" }
            ],
            correct_option: 'B',
            explanation: "The high resistance of the voltmeter in series throttles circuit current, stopping bulb illumination while recording battery EMF."
        },
        {
            id: 80,
            question: "Three identical resistors connected in series consume 10 W of power from a DC source. If the same three resistors are reconnected in PARALLEL across the same source, what power will they consume?",
            options: [
                { key: 'A', text: "30 W" },
                { key: 'B', text: "90 W (P_parallel = n² × P_series = 3² × 10 W = 90 W)" },
                { key: 'C', text: "10 W" },
                { key: 'D', text: "3.33 W" }
            ],
            correct_option: 'B',
            explanation: "Rs = 3R ⇒ P_s = V² / (3R) = 10 W ⇒ V²/R = 30 W. In parallel: Rp = R/3 ⇒ P_p = V² / (R/3) = 3(V²/R) = 3 × 30 W = 90 W."
        },
        {
            id: 81,
            question: "If the current flowing through a fixed ohmic resistor increases by 100% (doubles), what is the percentage increase in the power dissipated in the resistor?",
            options: [
                { key: 'A', text: "100%" },
                { key: 'B', text: "300% increase (power quadruples to 4P, an increase of 300%)" },
                { key: 'C', text: "200%" },
                { key: 'D', text: "400%" }
            ],
            correct_option: 'B',
            explanation: "P ∝ I². Doubling current (I' = 2I) makes P' = (2I)²R = 4 I²R = 4P. Percentage increase = ((4P - P)/P) × 100% = 300%."
        },
        {
            id: 82,
            question: "A wire of resistance R is cut into 'n' equal parts, and all 'n' parts are connected in parallel. What is the equivalent resistance of this combination?",
            options: [
                { key: 'A', text: "R / n" },
                { key: 'B', text: "R / n²" },
                { key: 'C', text: "n² R" },
                { key: 'D', text: "n R" }
            ],
            correct_option: 'B',
            explanation: "Each part has resistance r = R/n. Parallel of n such parts gives R_eq = r / n = (R/n) / n = R / n²."
        },
        {
            id: 83,
            question: "Why does the resistivity of semiconductors (like silicon and germanium) DECREASE with rising temperature, unlike metallic conductors?",
            options: [
                { key: 'A', text: "Semiconductors melt at room temperature" },
                { key: 'B', text: "Thermal energy breaks covalent bonds, exponentially increasing the concentration of free electron-hole charge carriers" },
                { key: 'C', text: "Semiconductors have no resistance" },
                { key: 'D', text: "Semiconductors turn into superconductors" }
            ],
            correct_option: 'B',
            explanation: "In semiconductors, thermal carrier generation dominates over lattice scattering, dramatically decreasing resistivity (negative temperature coefficient)."
        },
        {
            id: 84,
            question: "An electric kettle has two heating coils. When coil 1 is used alone, water boils in 10 minutes. When coil 2 is used alone, water boils in 15 minutes. If both coils are connected in PARALLEL, how long will it take to boil the same water?",
            options: [
                { key: 'A', text: "25 minutes" },
                { key: 'B', text: "6 minutes [t = (t₁ × t₂) / (t₁ + t₂) = (10 × 15)/25 = 6 min]" },
                { key: 'C', text: "12.5 minutes" },
                { key: 'D', text: "5 minutes" }
            ],
            correct_option: 'B',
            explanation: "Heat required H is constant. Power P = H/t = V²/R ⇒ 1/t ∝ 1/R. In parallel, 1/Rp = 1/R₁ + 1/R₂ ⇒ 1/t = 1/t₁ + 1/t₂ ⇒ t = (10 × 15)/(10 + 15) = 150/25 = 6 mins."
        },
        {
            id: 85,
            question: "In the same electric kettle, if both coils (10 min and 15 min) are connected in SERIES, how long will it take to boil the water?",
            options: [
                { key: 'A', text: "6 minutes" },
                { key: 'B', text: "25 minutes (t = t₁ + t₂ = 10 + 15 = 25 min)" },
                { key: 'C', text: "12.5 minutes" },
                { key: 'D', text: "150 minutes" }
            ],
            correct_option: 'B',
            explanation: "In series: Rs = R₁ + R₂. Since t ∝ R (from H = (V²/Rs)t): t = t₁ + t₂ = 10 min + 15 min = 25 min."
        },
        {
            id: 86,
            question: "A cell of EMF E and internal resistance r is connected across an external resistor R. For what value of external resistance R is MAXIMUM power transferred to the load (Maximum Power Transfer Theorem)?",
            options: [
                { key: 'A', text: "R = 0" },
                { key: 'B', text: "R = r (external load resistance equals internal resistance of source)" },
                { key: 'C', text: "R = ∞" },
                { key: 'D', text: "R = 2r" }
            ],
            correct_option: 'B',
            explanation: "Maximum power transfer theorem dictates that maximum power is delivered to the load when load resistance R equals internal resistance r (R = r)."
        },
        {
            id: 87,
            question: "Which of the following materials has a resistivity of approximately 100 × 10⁻⁶ Ω m and is composed of nickel, chromium, manganese, and iron?",
            options: [
                { key: 'A', text: "Constantan" },
                { key: 'B', text: "Nichrome" },
                { key: 'C', text: "Manganin" },
                { key: 'D', text: "Ebonite" }
            ],
            correct_option: 'B',
            explanation: "Nichrome is an alloy of Ni, Cr, Mn, and Fe with high resistivity (100 × 10⁻⁶ Ω m)."
        },
        {
            id: 88,
            question: "Constantan is an alloy commonly used for standard laboratory resistance coils because its resistivity changes negligibly with temperature. What are its constituent metals?",
            options: [
                { key: 'A', text: "Copper and Zinc" },
                { key: 'B', text: "Copper and Nickel (Cu 60%, Ni 40%)" },
                { key: 'C', text: "Iron and Carbon" },
                { key: 'D', text: "Aluminium and Magnesium" }
            ],
            correct_option: 'B',
            explanation: "Constantan (Eureka) is an alloy of copper (60%) and nickel (40%) possessing a nearly zero temperature coefficient of resistance."
        },
        {
            id: 89,
            question: "What is the order of electrical resistivity for electrical insulators like rubber, glass, and diamond?",
            options: [
                { key: 'A', text: "10⁻⁸ to 10⁻⁶ Ω m" },
                { key: 'B', text: "10¹² to 10¹⁷ Ω m" },
                { key: 'C', text: "10¹ to 10⁵ Ω m" },
                { key: 'D', text: "10⁻² to 10² Ω m" }
            ],
            correct_option: 'B',
            explanation: "Insulators have extremely high resistivities in the range of 10¹² to 10¹⁷ Ω m, preventing measurable current conduction."
        },
        {
            id: 90,
            question: "Why does the resistance of an electric bulb filament increase substantially when it is illuminated compared to its cold state at room temperature?",
            options: [
                { key: 'A', text: "Tungsten absorbs air inside bulb" },
                { key: 'B', text: "The glowing filament reaches operating temperatures exceeding 2500°C, drastically increasing the thermal resistivity of tungsten (by ~10 to 12 times its cold value)" },
                { key: 'C', text: "Filament shrinks in length" },
                { key: 'D', text: "Current creates friction" }
            ],
            correct_option: 'B',
            explanation: "Tungsten has a positive temperature coefficient; at white heat (~2700 K), its resistance is 10–12 times higher than when cold at 300 K."
        },

        // =================================================================
        // TIER 5: VERY VERY HARD QUESTIONS (Q91 - Q100)
        // Complex Circuit Analysis, Infinite Grids & Advanced Thermal Power Systems
        // =================================================================
        {
            id: 91,
            question: "An infinite ladder network of resistors is constructed using 1 Ω series resistors and 2 Ω shunt resistors connected across a DC voltage source. What is the equivalent input resistance (R_eq) of this infinite network?",
            options: [
                { key: 'A', text: "1.0 Ω" },
                { key: 'B', text: "2.0 Ω [R_eq = 1 + (2 R_eq)/(2 + R_eq) ⇒ R_eq² - R_eq - 2 = 0 ⇒ R_eq = 2 Ω]" },
                { key: 'C', text: "3.0 Ω" },
                { key: 'D', text: "1.5 Ω" }
            ],
            correct_option: 'B',
            explanation: "Setting R_eq = 1 + (2 × R_eq)/(2 + R_eq) ⇒ R_eq(2 + R_eq) = 2 + R_eq + 2R_eq ⇒ R_eq² + 2R_eq = 3R_eq + 2 ⇒ R_eq² - R_eq - 2 = 0 ⇒ (R_eq - 2)(R_eq + 1) = 0 ⇒ R_eq = 2.0 Ω."
        },
        {
            id: 92,
            question: "Twelve identical wires, each having resistance r = 6 Ω, are soldered together to form the edges of a regular CUBE. What is the equivalent resistance between two diagonally opposite body corners of the cube?",
            options: [
                { key: 'A', text: "6.0 Ω" },
                { key: 'B', text: "5.0 Ω (R_body = 5/6 × r = 5/6 × 6 Ω = 5 Ω)" },
                { key: 'C', text: "3.5 Ω" },
                { key: 'D', text: "7.2 Ω" }
            ],
            correct_option: 'B',
            explanation: "By 3D cubic symmetry, the equivalent resistance across body diagonals is R = (5/6)r = (5/6) × 6 Ω = 5.0 Ω."
        },
        {
            id: 93,
            question: "In the same 12-wire resistance cube of edge resistance r = 6 Ω, what is the equivalent resistance across two adjacent corners along one EDGE of the cube?",
            options: [
                { key: 'A', text: "4.5 Ω" },
                { key: 'B', text: "3.5 Ω (R_edge = 7/12 × r = 7/12 × 6 Ω = 3.5 Ω)" },
                { key: 'C', text: "5.0 Ω" },
                { key: 'D', text: "2.0 Ω" }
            ],
            correct_option: 'B',
            explanation: "Across edge corners of a cube of edge resistors r: R_edge = (7/12)r = (7/12) × 6 Ω = 3.5 Ω."
        },
        {
            id: 94,
            question: "In the same 12-wire resistance cube of edge resistance r = 6 Ω, what is the equivalent resistance across two diagonally opposite corners on the SAME FACE of the cube?",
            options: [
                { key: 'A', text: "3.5 Ω" },
                { key: 'B', text: "4.5 Ω (R_face = 3/4 × r = 3/4 × 6 Ω = 4.5 Ω)" },
                { key: 'C', text: "5.0 Ω" },
                { key: 'D', text: "6.0 Ω" }
            ],
            correct_option: 'B',
            explanation: "Across face diagonal corners of a cube of edge resistors r: R_face = (3/4)r = (3/4) × 6 Ω = 4.5 Ω."
        },
        {
            id: 95,
            question: "A uniform metallic ring of total resistance R = 12 Ω has two tap points A and B subtending an angle θ = 60° at the centre. What is the equivalent resistance between terminals A and B?",
            options: [
                { key: 'A', text: "2.0 Ω" },
                { key: 'B', text: "1.67 Ω [R₁ = 2 Ω, R₂ = 10 Ω in parallel: Rp = (2 × 10)/12 = 20/12 = 1.67 Ω]" },
                { key: 'C', text: "3.0 Ω" },
                { key: 'D', text: "6.0 Ω" }
            ],
            correct_option: 'B',
            explanation: "Angle 60° represents 60/360 = 1/6 of perimeter (R₁ = 12/6 = 2 Ω); remainder is 5/6 (R₂ = 10 Ω). In parallel: Rp = (2 × 10)/(2 + 10) = 20/12 = 5/3 = 1.67 Ω."
        },
        {
            id: 96,
            question: "A 100 W, 220 V bulb and a 200 W, 220 V bulb are connected in SERIES across a 440 V supply. What will happen to the bulbs?",
            options: [
                { key: 'A', text: "Both bulbs operate safely at full brightness" },
                { key: 'B', text: "The 100 W bulb will fuse immediately (it experiences 293.3 V > 220 V rating across its higher resistance filament)" },
                { key: 'C', text: "The 200 W bulb will fuse" },
                { key: 'D', text: "Neither bulb will conduct" }
            ],
            correct_option: 'B',
            explanation: "R₁ = 220²/100 = 484 Ω; R₂ = 220²/200 = 242 Ω. In series across 440 V, voltage across 100 W bulb is V₁ = 440 × (484/(484 + 242)) = 440 × (2/3) = 293.3 V, exceeding its 220 V limit and blowing the filament."
        },
        {
            id: 97,
            question: "A galvanometer of coil resistance G = 50 Ω gives a full-scale deflection for a current of 2 mA (0.002 A). How can it be converted into an AMMETER reading up to 5 A?",
            options: [
                { key: 'A', text: "Connect a shunt resistance of 0.02 Ω in parallel with the coil" },
                { key: 'B', text: "Connect a low shunt resistance S ≈ 0.020008 Ω (S = I_g G / (I - I_g) = (0.002 × 50) / 4.998 ≈ 0.02 Ω) in PARALLEL" },
                { key: 'C', text: "Connect a high multiplier resistor of 2500 Ω in series" },
                { key: 'D', text: "Connect a 50 Ω resistor in series" }
            ],
            correct_option: 'B',
            explanation: "Shunt resistance S = (I_g · G) / (I - I_g) = (0.002 × 50) / (5 - 0.002) = 0.1 / 4.998 ≈ 0.0200 Ω in parallel."
        },
        {
            id: 98,
            question: "The same galvanometer (G = 50 Ω, I_g = 2 mA) is to be converted into a VOLTMETER reading up to 10 V. What series multiplier resistance (R) must be added?",
            options: [
                { key: 'A', text: "4950 Ω in series [R = (V / I_g) - G = (10 / 0.002) - 50 = 5000 - 50 = 4950 Ω]" },
                { key: 'B', text: "5000 Ω in parallel" },
                { key: 'C', text: "0.02 Ω in series" },
                { key: 'D', text: "250 Ω in series" }
            ],
            correct_option: 'A',
            explanation: "R = (V / I_g) - G = (10 V / 0.002 A) - 50 Ω = 5000 Ω - 50 Ω = 4950 Ω in series."
        },
        {
            id: 99,
            question: "An electric immersion heater of power 1000 W (1 kW) is immersed in 2 kg of water at 20°C. Assuming zero heat loss, how long will it take to raise the water temperature to boiling point (100°C)? (Specific heat of water c = 4200 J kg⁻¹ °C⁻¹)",
            options: [
                { key: 'A', text: "336 seconds (5.6 minutes)" },
                { key: 'B', text: "672 seconds (11.2 minutes) [Q = mcΔT = 2 × 4200 × 80 = 672,000 J; t = 672,000 / 1000 = 672 s]" },
                { key: 'C', text: "100 seconds" },
                { key: 'D', text: "1200 seconds" }
            ],
            correct_option: 'B',
            explanation: "Thermal energy Q = mcΔT = 2 kg × 4200 J/(kg·°C) × 80°C = 672,000 J. Time t = Q / P = 672,000 J / 1000 W = 672 seconds (11.2 minutes)."
        },
        {
            id: 100,
            question: "In an electric transmission line of resistance R = 5 Ω delivering 100 kW of electric power, compare the I²R transmission power loss when power is transmitted at (i) 220 V vs (ii) 22,000 V (22 kV):",
            options: [
                { key: 'A', text: "Loss is identical in both cases" },
                { key: 'B', text: "At 220 V, loss is 1,033,000 W (disastrous loss > 100%); at 22 kV, loss is only 103.3 W (0.1% loss, saving 99.99% of energy)" },
                { key: 'C', text: "Loss is higher at 22 kV" },
                { key: 'D', text: "Loss at 220 V is zero" }
            ],
            correct_option: 'B',
            explanation: "I₁ (220 V) = 100,000/220 = 454.5 A ⇒ Loss = (454.5)² × 5 = 1,033,000 W (exceeds generated power!). I₂ (22 kV) = 100,000/22,000 = 4.545 A ⇒ Loss = (4.545)² × 5 = 103.3 W (minimal loss)."
        }
    ]
};
