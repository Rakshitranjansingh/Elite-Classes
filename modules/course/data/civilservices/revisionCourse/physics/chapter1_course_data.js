/* =============================================================================
   ELITE CLASSES — CIVIL SERVICES REVISION COURSE: PHYSICS
   CHAPTER 1: UNIT, DIMENSIONS AND MEASUREMENT
   - Exactly 20 Progressive Mini-Modules
   - 10 High-Yield Conceptual MCQs per Module (200 MCQs total)
   - 70% Mastery Progressive Unlocking Threshold
   - Complete Pedagogical Standard Notes & Practical Instrument Guides
   - Clean Unicode Typographic Symbols (No raw LaTeX delimiters)
   ============================================================================= */

const COURSE_CHAPTER_1_PHYSICS = {
    "chapterId": "csₚhy_ch1",
    "chapterNumber": 1,
    "chapterTitle": "Unit, Dimensions and Measurement",
    "subject": "Physics",
    "cls": "Civil Services",
    "totalModules": 20,
    "totalQuestions": 200,
    "passingPercentage": 70,
    "modules": [
        {
            "id": "m01",
            "moduleNumber": 1,
            "title": "Physical Quantities & The 7 Fundamental Base Quantities",
            "tagline": "Understanding measurable properties of nature and the foundational building blocks of physics.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>In physics, any property of a phenomenon, body, or substance that can be quantified and measured objectively is defined as a <strong>Physical Quantity</strong>. If a property cannot be measured numerically using an instrument or formula (such as emotions, beauty, or happiness), it does not constitute a physical quantity.</p>\n <p>Every measurement of a physical quantity consists of two essential components: a <strong>numerical value (magnitude n)</strong> and a <strong>standard unit (u)</strong>, expressed mathematically as:</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:12px 0; border-radius:6px; font-weight:600;\">\n Measurement Q = n × u &nbsp;(where n is inversely proportional to unit size u: n₁ u₁ = n₂ u₂)\n </div>\n <p>Physical quantities are classified fundamentally into two broad categories based on their independence:</p>\n <ol style=\"margin:8px 0 14px 20px; line-height:1.6;\">\n <li><strong>Fundamental (Base) Physical Quantities:</strong> Quantities that are completely independent of each other and cannot be defined or expressed in terms of any other physical quantities. In the International System of Units (SI), there are exactly <strong>seven fundamental physical quantities</strong>.</li>\n <li><strong>Derived Physical Quantities:</strong> Quantities that are derived from, or expressed as mathematical combinations of, one or more fundamental quantities (e.g., speed, force, density, pressure).</li>\n </ol>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:16px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Table: The 7 Fundamental Physical Quantities & Their SI Base Units</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Fundamental Quantity</th>\n <th style=\"padding:6px 10px;\">SI Base Unit</th>\n <th style=\"padding:6px 10px;\">Unit Symbol</th>\n <th style=\"padding:6px 10px;\">Dimensional Symbol</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:6px 10px;\">1. Length</td><td style=\"padding:6px 10px;\">Metre</td><td style=\"padding:6px 10px;\">m</td><td style=\"padding:6px 10px;\">[L]</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:6px 10px;\">2. Mass</td><td style=\"padding:6px 10px;\">Kilogram</td><td style=\"padding:6px 10px;\">kg</td><td style=\"padding:6px 10px;\">[M]</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:6px 10px;\">3. Time</td><td style=\"padding:6px 10px;\">Second</td><td style=\"padding:6px 10px;\">s</td><td style=\"padding:6px 10px;\">[T]</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:6px 10px;\">4. Thermodynamic Temperature</td><td style=\"padding:6px 10px;\">Kelvin</td><td style=\"padding:6px 10px;\">K</td><td style=\"padding:6px 10px;\">[K] or [θ]</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:6px 10px;\">5. Electric Current</td><td style=\"padding:6px 10px;\">Ampere</td><td style=\"padding:6px 10px;\">A</td><td style=\"padding:6px 10px;\">[A] or [I]</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:6px 10px;\">6. Luminous Intensity</td><td style=\"padding:6px 10px;\">Candela</td><td style=\"padding:6px 10px;\">cd</td><td style=\"padding:6px 10px;\">[cd]</td></tr>\n <tr><td style=\"padding:6px 10px;\">7. Amount of Substance</td><td style=\"padding:6px 10px;\">Mole</td><td style=\"padding:6px 10px;\">mol</td><td style=\"padding:6px 10px;\">[mol] or [N]</td></tr>\n </tbody>\n </table>\n </div>\n <p>No fundamental quantity can be reduced to simpler components. All other macroscopic and microscopic physical measurements in the universe are synthesized from these seven pillars.</p>\n ",
            "pointsToRemember": [
                "A physical quantity must be objectively measurable and expressible as magnitude × unit (n × u).",
                "There are exactly 7 base fundamental quantities in the modern SI framework: Length, Mass, Time, Temperature, Electric Current, Luminous Intensity, and Amount of Substance.",
                "The numerical value of a measurement is inversely proportional to the magnitude of the unit chosen (n₁ u₁ = n₂ u₂)."
            ],
            "keyNotes": [
                "Civil Services Core Fact: Electric current is treated as a fundamental base quantity in SI, whereas electric charge (Coulomb = Ampere × second) is a derived quantity."
            ],
            "questions": [
                {
                    "id": "m01_q01",
                    "question": "Which of the following is defined as a physical quantity in scientific terminology?",
                    "options": [
                        "The feeling of happiness experienced by a scholar",
                        "The density of an iron sphere",
                        "The aesthetic beauty of an architectural monument",
                        "The intensity of sorrow during a tragedy"
                    ],
                    "answer": "The density of an iron sphere",
                    "explanation": "A physical quantity is any property that can be measured quantitatively and expressed with a numerical value and unit. Density can be measured, whereas emotions and beauty cannot."
                },
                {
                    "id": "m01_q02",
                    "question": "How many fundamental base physical quantities are formally established in the International System of Units (SI)?",
                    "options": [
                        "Five",
                        "Seven",
                        "Nine",
                        "Three"
                    ],
                    "answer": "Seven",
                    "explanation": "The SI framework explicitly defines seven fundamental base quantities: Length, Mass, Time, Electric Current, Thermodynamic Temperature, Amount of Substance, and Luminous Intensity."
                },
                {
                    "id": "m01_q03",
                    "question": "Which of the following is a fundamental base quantity rather than a derived quantity in the SI system?",
                    "options": [
                        "Electric Charge",
                        "Electric Current",
                        "Electric Potential",
                        "Electrical Resistance"
                    ],
                    "answer": "Electric Current",
                    "explanation": "Electric Current (Ampere) is one of the seven base fundamental quantities. Electric Charge is derived (Q = I × t, Coulomb = Ampere · second)."
                },
                {
                    "id": "m01_q04",
                    "question": "What is the SI base unit of Thermodynamic Temperature?",
                    "options": [
                        "Degree Celsius (°C)",
                        "Kelvin (K)",
                        "Degree Fahrenheit (°F)",
                        "Rankine (°R)"
                    ],
                    "answer": "Kelvin (K)",
                    "explanation": "The Kelvin (K) is the SI base unit for thermodynamic temperature. Degree Celsius and Fahrenheit are practical temperature scales, not the SI base unit."
                },
                {
                    "id": "m01_q05",
                    "question": "Candela (cd) is the SI base unit used to measure which fundamental physical quantity?",
                    "options": [
                        "Illuminance of a surface",
                        "Luminous Intensity of a light source",
                        "Luminous Flux emitted in all directions",
                        "Radiant energy per unit frequency"
                    ],
                    "answer": "Luminous Intensity of a light source",
                    "explanation": "Candela (cd) is the base unit of luminous intensity in a given direction from a light source."
                },
                {
                    "id": "m01_q06",
                    "question": "If a physical quantity Q is measured in two different units u₁ and u₂ with corresponding numerical values n₁ and n₂, what is the fundamental relation between them?",
                    "options": [
                        "n₁ / u₁ = n₂ / u₂",
                        "n₁ × u₁ = n₂ × u₂",
                        "n₁ + u₁ = n₂ + u₂",
                        "n₁ × n₂ = u₁ × u₂"
                    ],
                    "answer": "n₁ × u₁ = n₂ × u₂",
                    "explanation": "The actual magnitude of a physical quantity remains constant regardless of the unit system. Thus Q = n₁ u₁ = n₂ u₂, meaning numerical value is inversely proportional to unit magnitude."
                },
                {
                    "id": "m01_q07",
                    "question": "Which base unit is assigned to measure the Amount of Substance in the SI system?",
                    "options": [
                        "Kilogram (kg)",
                        "Gram-equivalent",
                        "Mole (mol)",
                        "Atomic mass unit (amu)"
                    ],
                    "answer": "Mole (mol)",
                    "explanation": "The mole (symbol: mol) is the SI base unit for the amount of substance, containing exactly 6.02214076 × 10²³ elementary entities."
                },
                {
                    "id": "m01_q08",
                    "question": "Which of the following pairs contains only fundamental base quantities?",
                    "options": [
                        "Mass and Velocity",
                        "Length and Time",
                        "Force and Acceleration",
                        "Electric Current and Potential Difference"
                    ],
                    "answer": "Length and Time",
                    "explanation": "Both Length and Time are fundamental base quantities. Velocity, Force, Acceleration, and Potential Difference are derived quantities."
                },
                {
                    "id": "m01_q09",
                    "question": "Why is mass considered a fundamental quantity rather than a derived quantity?",
                    "options": [
                        "Because mass is always zero in free space",
                        "Because mass is independent of all other physical quantities and cannot be resolved into simpler quantities",
                        "Because mass changes with temperature and pressure",
                        "Because mass can only be measured on Earth"
                    ],
                    "answer": "Because mass is independent of all other physical quantities and cannot be resolved into simpler quantities",
                    "explanation": "Fundamental quantities are chosen by convention to be mutually independent; mass cannot be defined or resolved in terms of length, time, or other quantities."
                },
                {
                    "id": "m01_q10",
                    "question": "In the relation Q = n × u, what happens to the numerical value n if the chosen unit u is made 100 times larger?",
                    "options": [
                        "It increases by 100 times",
                        "It decreases to 1/100th of its original value",
                        "It remains completely unchanged",
                        "It becomes zero"
                    ],
                    "answer": "It decreases to 1/100th of its original value",
                    "explanation": "Since n ∝ 1/u, choosing a unit 100 times larger (e.g., measuring 100 metres in hectometres) reduces the numerical value to 1/100th (100 m = 1 hm)."
                }
            ]
        },
        {
            "id": "m02",
            "moduleNumber": 2,
            "title": "Historical Systems of Units: CGS, MKS, and FPS",
            "tagline": "Evolution of measurement frameworks across scientific history before international standardization.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Before the universal adoption of the SI system, different regions and scientific communities developed distinct systems of units based on three primary mechanics quantities: <strong>Length</strong>, <strong>Mass</strong>, and <strong>Time</strong>.</p>\n <p>The three dominant historical systems were:</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">System</th>\n <th style=\"padding:6px 10px;\">Length Unit</th>\n <th style=\"padding:6px 10px;\">Mass Unit</th>\n <th style=\"padding:6px 10px;\">Time Unit</th>\n <th style=\"padding:6px 10px;\">Force Unit</th>\n <th style=\"padding:6px 10px;\">Work/Energy Unit</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>CGS System</strong> (Centimetre-Gram-Second / French Gaussian)</td>\n <td style=\"padding:6px 10px;\">Centimetre (cm)</td>\n <td style=\"padding:6px 10px;\">Gram (g)</td>\n <td style=\"padding:6px 10px;\">Second (s)</td>\n <td style=\"padding:6px 10px;\">Dyne (1 N = 10⁵ dyne)</td>\n <td style=\"padding:6px 10px;\">Erg (1 J = 10⁷ erg)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>MKS System</strong> (Metre-Kilogram-Second)</td>\n <td style=\"padding:6px 10px;\">Metre (m)</td>\n <td style=\"padding:6px 10px;\">Kilogram (kg)</td>\n <td style=\"padding:6px 10px;\">Second (s)</td>\n <td style=\"padding:6px 10px;\">Newton (N)</td>\n <td style=\"padding:6px 10px;\">Joule (J)</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>FPS System</strong> (Foot-Pound-Second / British Imperial)</td>\n <td style=\"padding:6px 10px;\">Foot (ft)</td>\n <td style=\"padding:6px 10px;\">Pound (lb)</td>\n <td style=\"padding:6px 10px;\">Second (s)</td>\n <td style=\"padding:6px 10px;\">Poundal (pdl)</td>\n <td style=\"padding:6px 10px;\">Foot-pound (ft-lb)</td>\n </tr>\n </tbody>\n </table>\n </div>\n <p>Notice that the unit of <strong>time (Second)</strong> was universally identical across all three historical systems. However, converting between CGS, MKS, and FPS caused significant friction, especially with non-decimal conversions in the British FPS system (1 foot = 12 inches, 1 pound = 16 ounces).</p>\n <p>The MKS system later formed the mechanical core for the comprehensive International System of Units (SI) established in 1960.</p>\n ",
            "pointsToRemember": [
                "In all three traditional systems (CGS, MKS, FPS), the unit of time was uniformly the Second.",
                "1 Newton = 10⁵ dynes and 1 Joule = 10⁷ ergs.",
                "The FPS system is a non-metric British Imperial system, whereas CGS and MKS are decimal metric systems."
            ],
            "keyNotes": [
                "Conversion Memory Trick: 1 N = 10⁵ dynes (1 kg × 1 m/s² = 1000 g × 100 cm/s² = 10⁵ g·cm/s²)."
            ],
            "questions": [
                {
                    "id": "m02_q01",
                    "question": "Which base physical quantity shared the exact same fundamental unit across the CGS, MKS, and FPS systems?",
                    "options": [
                        "Length",
                        "Mass",
                        "Time",
                        "Temperature"
                    ],
                    "answer": "Time",
                    "explanation": "In all three historical systems (CGS, MKS, and FPS), the unit of time was uniformly the second (s)."
                },
                {
                    "id": "m02_q02",
                    "question": "What is the CGS unit of Force?",
                    "options": [
                        "Newton",
                        "Dyne",
                        "Erg",
                        "Poundal"
                    ],
                    "answer": "Dyne",
                    "explanation": "In the CGS system, force is measured in dynes (1 dyne = 1 g·cm/s²)."
                },
                {
                    "id": "m02_q03",
                    "question": "How many dynes are equivalent to 1 Newton of force?",
                    "options": [
                        "10³ dynes",
                        "10⁵ dynes",
                        "10⁷ dynes",
                        "10⁹ dynes"
                    ],
                    "answer": "10⁵ dynes",
                    "explanation": "1 N = 1 kg·m/s² = (10³ g) × (10² cm/s²) = 10⁵ g·cm/s² = 10⁵ dynes."
                },
                {
                    "id": "m02_q04",
                    "question": "The CGS unit of work and energy is the erg. How many ergs make up 1 Joule?",
                    "options": [
                        "10⁵ ergs",
                        "10⁷ ergs",
                        "10⁹ ergs",
                        "10⁶ ergs"
                    ],
                    "answer": "10⁷ ergs",
                    "explanation": "1 Joule = 1 N·m = 10⁵ dynes × 10² cm = 10⁷ dyne·cm = 10⁷ ergs."
                },
                {
                    "id": "m02_q05",
                    "question": "The FPS system of units originated primarily in which geographical region?",
                    "options": [
                        "France (Gaussian Continental)",
                        "Great Britain (British Imperial)",
                        "Germany",
                        "Russia"
                    ],
                    "answer": "Great Britain (British Imperial)",
                    "explanation": "The Foot-Pound-Second (FPS) system was the traditional British Imperial system widely utilized in Great Britain and its territories."
                },
                {
                    "id": "m02_q06",
                    "question": "In the FPS system, what is the standard unit of mass?",
                    "options": [
                        "Ounce",
                        "Pound",
                        "Slug",
                        "Grain"
                    ],
                    "answer": "Pound",
                    "explanation": "The letter 'P' in FPS stands for Pound (lb), which is the standard unit of mass in this system."
                },
                {
                    "id": "m02_q07",
                    "question": "Which of the following is a major advantage of the MKS metric system over the FPS system?",
                    "options": [
                        "MKS uses base-12 non-decimal multiples",
                        "MKS is a decimal system where conversions use simple powers of 10",
                        "MKS eliminated the need for measuring time",
                        "MKS cannot be used for astronomical distances"
                    ],
                    "answer": "MKS is a decimal system where conversions use simple powers of 10",
                    "explanation": "Metric systems (MKS and CGS) are decimal-based, making sub-unit and multi-unit conversions straightforward via powers of 10, unlike the non-decimal Imperial system."
                },
                {
                    "id": "m02_q08",
                    "question": "Which modern system directly evolved by expanding the MKS system with additional fundamental units?",
                    "options": [
                        "The CGS Gaussian System",
                        "The International System of Units (SI)",
                        "The Natural Planck Units System",
                        "The FPS Imperial System"
                    ],
                    "answer": "The International System of Units (SI)",
                    "explanation": "The SI system was constructed by expanding the MKS framework (adding Ampere, Kelvin, Candela, and Mole) at the 1960 CGPM."
                },
                {
                    "id": "m02_q09",
                    "question": "What is the unit of force in the British gravitational / engineering FPS framework?",
                    "options": [
                        "Pound-force (lbf)",
                        "Dyne",
                        "Newton",
                        "Pascal"
                    ],
                    "answer": "Pound-force (lbf)",
                    "explanation": "In British engineering usage, pound-force (lbf) or poundal (in absolute FPS) is used to represent force."
                },
                {
                    "id": "m02_q10",
                    "question": "If an object has a mass of 2 kg, what is its mass in the CGS unit system?",
                    "options": [
                        "200 g",
                        "2,000 g",
                        "20,000 g",
                        "20 g"
                    ],
                    "answer": "2,000 g",
                    "explanation": "In CGS, the unit of mass is the gram. Since 1 kg = 1,000 g, 2 kg = 2,000 g."
                }
            ]
        },
        {
            "id": "m03",
            "moduleNumber": 3,
            "title": "The International System of Units (SI) & Modern Standards",
            "tagline": "The global scientific metric standard adopted in 1960 and redefined by universal constants.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>The <strong>Système International d'Unités (SI)</strong> was formally established in 1960 by the <strong>11th General Conference on Weights and Measures (CGPM)</strong> held in Paris. It resolved centuries of regional discrepancies by providing a coherent, rationalized, and universally reproducible standard for all scientific, industrial, and commercial measurements.</p>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">Why the SI System is Superior:</h4>\n <ul style=\"margin:6px 0 14px 20px; line-height:1.6;\">\n <li><strong>Coherent System:</strong> All derived units are obtained solely by simple multiplication or division of base units without introducing numerical conversion factors (e.g., 1 N = 1 kg·m/s²).</li>\n <li><strong>Rational System:</strong> It assigns only one single unit to a given physical quantity (e.g., Joule for all forms of energy: mechanical, thermal, electrical), whereas older systems used calorie for heat, erg for mechanical work, and kWh for electrical energy.</li>\n <li><strong>Metric Decimal System:</strong> Multiples and submultiples are strictly decimal powers of 10 using standardized Greek/Latin prefixes.</li>\n </ul>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n <strong>🔬 2019 Historic SI Redefinition:</strong><br>\n Historically, base units relied on physical artifacts (like the platinum-iridium cylinder for the kilogram in Sèvres, France). In May 2019, the CGPM redefined all 7 base units entirely in terms of <strong>seven fundamental physical constants of nature</strong>:\n <ul style=\"margin:6px 0 0 16px;\">\n <li>Speed of light in vacuum (c = 299,792,458 m/s) defines the <strong>Metre</strong>.</li>\n <li>Planck constant (h = 6.62607015 × 10⁻³⁴ J·s) defines the <strong>Kilogram</strong>.</li>\n <li>Hyperfine transition frequency of Caesium-133 (Δ ν_{Cs} = 9,192,631,770 Hz) defines the <strong>Second</strong>.</li>\n <li>Elementary charge (e = 1.602176634 × 10⁻¹⁹ C) defines the <strong>Ampere</strong>.</li>\n <li>Boltzmann constant (k_B = 1.380649 × 10⁻²³ J/K) defines the <strong>Kelvin</strong>.</li>\n <li>Avogadro constant (N_A = 6.02214076 × 10²³ mol⁻¹) defines the <strong>Mole</strong>.</li>\n <li>Luminous efficacy (K_{cd} = 683 lm/W) defines the <strong>Candela</strong>.</li>\n </ul>\n </div>\n <p>Today, any laboratory with standard quantum apparatus can recreate identical primary standards without referencing any physical prototype artifact.</p>\n ",
            "pointsToRemember": [
                "The SI system was established in 1960 at the 11th General Conference on Weights and Measures (CGPM).",
                "SI is a coherent and rational system: exactly one unit per physical quantity (e.g., Joule for both heat and mechanical work).",
                "Since the 2019 redefinition, no SI base unit depends on a physical prototype artifact; all 7 units are tied to universal fundamental constants (c, h, e, k_B, N_A, Δν_{Cs}, K_{cd})."
            ],
            "keyNotes": [
                "Exam Distinction: Prior to 2019, the Kilogram was the only SI unit still defined by a physical prototype artifact (the International Prototype of the Kilogram / IPK in Paris)."
            ],
            "questions": [
                {
                    "id": "m03_q01",
                    "question": "In which year was the International System of Units (SI) formally adopted by the 11th CGPM?",
                    "options": [
                        "1947",
                        "1960",
                        "1975",
                        "1991"
                    ],
                    "answer": "1960",
                    "explanation": "The International System of Units (SI) was formally established and adopted in October 1960 by the 11th General Conference on Weights and Measures (CGPM)."
                },
                {
                    "id": "m03_q02",
                    "question": "Why is the SI system described as a 'rational system' of units?",
                    "options": [
                        "Because it uses irrational square root conversion factors",
                        "Because it assigns only one standard unit for a given physical quantity across all domains",
                        "Because it requires fractional measurements",
                        "Because it can only measure rational numbers"
                    ],
                    "answer": "Because it assigns only one standard unit for a given physical quantity across all domains",
                    "explanation": "A rational system uses one single unit for a physical quantity regardless of its form (e.g., Joule is used for mechanical work, heat, and electrical energy, avoiding separate units like calorie or erg)."
                },
                {
                    "id": "m03_q03",
                    "question": "What does it mean for a unit system to be 'coherent'?",
                    "options": [
                        "Derived units are obtained from base units by simple multiplication or division without numerical constant factors",
                        "All units must be expressed in Roman numerals",
                        "Units must never change their spelling in any language",
                        "The system must only use three fundamental quantities"
                    ],
                    "answer": "Derived units are obtained from base units by simple multiplication or division without numerical constant factors",
                    "explanation": "In a coherent system, the quotient or product of base units produces derived units directly with a conversion factor of unity (1)."
                },
                {
                    "id": "m03_q04",
                    "question": "Following the historic May 2019 SI redefinition, the Kilogram is fundamentally defined using which universal physical constant?",
                    "options": [
                        "Speed of light in vacuum (c)",
                        "Planck constant (h)",
                        "Universal gravitational constant (G)",
                        "Boltzmann constant (k_B)"
                    ],
                    "answer": "Planck constant (h)",
                    "explanation": "Since May 20, 2019, the kilogram is defined by fixing the numerical value of the Planck constant h to exactly 6.62607015 × 10⁻³⁴ kg·m²s⁻¹ via the Kibble balance."
                },
                {
                    "id": "m03_q05",
                    "question": "The SI base unit of length, the Metre, is officially defined based on which fundamental constant?",
                    "options": [
                        "Radius of the Earth",
                        "Speed of light in vacuum (c)",
                        "Wavelength of Krypton-86 orange line",
                        "Diameter of a hydrogen atom"
                    ],
                    "answer": "Speed of light in vacuum (c)",
                    "explanation": "The metre is defined by fixing the speed of light in vacuum c at exactly 299,792,458 m/s, making 1 metre the distance light travels in vacuum in 1/299,792,458 seconds."
                },
                {
                    "id": "m03_q06",
                    "question": "Which fundamental physical constant is used to define the SI base unit Kelvin?",
                    "options": [
                        "Stefan-Boltzmann constant",
                        "Boltzmann constant (k_B)",
                        "Universal gas constant (R)",
                        "Triple point of pure water"
                    ],
                    "answer": "Boltzmann constant (k_B)",
                    "explanation": "The Kelvin is defined by taking the fixed numerical value of the Boltzmann constant k_B to be 1.380649 × 10⁻²³ J/K."
                },
                {
                    "id": "m03_q07",
                    "question": "Until the 2019 redefinition, which was the only remaining SI base unit still defined by a physical metal artifact stored in a vault?",
                    "options": [
                        "Metre",
                        "Kilogram",
                        "Second",
                        "Ampere"
                    ],
                    "answer": "Kilogram",
                    "explanation": "The Kilogram was the last unit defined by a physical prototype artifact—the International Prototype Kilogram (IPK), a platinum-iridium cylinder kept in Sèvres near Paris."
                },
                {
                    "id": "m03_q08",
                    "question": "The SI unit of electric current, the Ampere, is now defined by fixing the exact value of which constant?",
                    "options": [
                        "Magnetic permeability of vacuum (μ₀)",
                        "Elementary electric charge (e)",
                        "Permittivity of free space (ε₀)",
                        "Faraday constant (F)"
                    ],
                    "answer": "Elementary electric charge (e)",
                    "explanation": "The Ampere is defined by fixing the elementary charge e = 1.602176634 × 10⁻¹⁹ C, meaning 1 A corresponds to a flow of 1/(1.602176634 × 10⁻¹⁹) elementary charges per second."
                },
                {
                    "id": "m03_q09",
                    "question": "How is the SI base unit of time, the Second, scientifically realized with maximum precision?",
                    "options": [
                        "By the rotation period of planet Earth",
                        "By the oscillation frequency between the two hyperfine levels of the ground state of Caesium-133 atom",
                        "By the swing of a 1-metre simple pendulum at sea level",
                        "By the decay rate of Carbon-14 isotopes"
                    ],
                    "answer": "By the oscillation frequency between the two hyperfine levels of the ground state of Caesium-133 atom",
                    "explanation": "The second is defined by taking the fixed numerical value of the Caesium frequency Δν_{Cs} to be 9,192,631,770 Hz."
                },
                {
                    "id": "m03_q10",
                    "question": "Which international body oversees and decides modifications to the International System of Units?",
                    "options": [
                        "United Nations Security Council",
                        "General Conference on Weights and Measures (CGPM)",
                        "International Astronomical Union",
                        "World Health Organization"
                    ],
                    "answer": "General Conference on Weights and Measures (CGPM)",
                    "explanation": "The CGPM (Conférence Générale des Poids et Mesures) is the supreme intergovernmental authority on the SI metric system."
                }
            ]
        },
        {
            "id": "m04",
            "moduleNumber": 4,
            "title": "Supplementary SI Units: Radian & Steradian",
            "tagline": "Pure geometric angular measures bridging 2D circular arcs and 3D solid conical spaces.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>In addition to the seven fundamental base units, the SI system originally classified two purely geometrical units as <strong>Supplementary Units</strong>: the <strong>Radian (rad)</strong> and the <strong>Steradian (sr)</strong>. (In 1995, the CGPM reclassified them as dimensionless derived units, but they remain distinct conceptual standards for angular measurement).</p>\n <h4 style=\"color:#1e3a8a; margin:12px 0 6px 0;\">1. Radian (rad) — Plane Angle:</h4>\n <p>The <strong>Radian</strong> measures angles in a two-dimensional plane. By definition:</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px;\">\n Plane Angle θ = frac{Arc Length (s)}{Radius (r)} [unit: radian (rad)]\n </div>\n <p>One radian is the angle subtended at the center of a circle by an arc whose length is exactly equal to the radius of the circle (s = r).</p>\n <ul style=\"margin:6px 0 12px 20px; line-height:1.6;\">\n <li>For a complete circle: Arc length = Circumference = 2π r.</li>\n <li>Total plane angle of a circle = (2π r / r) = 2π radians = 360^°.</li>\n <li>1 radian = (180^° / π) ≈ 57.296^° ≈ 57^° 17' 45''.</li>\n </ul>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">2. Steradian (sr) — Solid Angle:</h4>\n <p>The <strong>Steradian</strong> measures angles in three-dimensional space, such as the conical beam of light emitted by a spotlight or the solid angle subtended by a sphere.</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px;\">\n Solid Angle Ω = frac{Intersected Surface Area (A)}{r²} [unit: steradian (sr)]\n </div>\n <p>One steradian is the solid angle subtended at the center of a sphere of radius r by a surface area on the sphere equal to r².</p>\n <ul style=\"margin:6px 0 12px 20px; line-height:1.6;\">\n <li>For a full sphere, total surface area = 4π r².</li>\n <li>Total solid angle subtended by a complete closed sphere at its center = (4π r² / r²) = 4π steradians ≈ 12.57 sr.</li>\n </ul>\n <p>Crucially, both Radian and Steradian are ratios of identical physical dimensions ([L]/[L] and [L²]/[L²]), making them <strong>strictly dimensionless quantities</strong> with dimensional formula [M⁰ L⁰ T⁰].</p>\n ",
            "pointsToRemember": [
                "Radian (rad) measures 2D plane angles: θ = s/r; total angle of a circle is 2π rad = 360^°.",
                "Steradian (sr) measures 3D solid angles: Ω = A/r²; total solid angle of a complete sphere is 4π sr.",
                "Both Radian and Steradian have units but possess NO physical dimensions ([M⁰ L⁰ T⁰])."
            ],
            "keyNotes": [
                "High-Yield Civil Services MCQ: A quantity can possess a unit without having dimensions! Radian and Steradian are classic examples of unit-bearing yet dimensionless quantities."
            ],
            "questions": [
                {
                    "id": "m04_q01",
                    "question": "Which supplementary SI unit is designated to measure two-dimensional plane angles?",
                    "options": [
                        "Degree",
                        "Radian (rad)",
                        "Steradian (sr)",
                        "Gradian"
                    ],
                    "answer": "Radian (rad)",
                    "explanation": "The Radian (rad) is the SI unit for plane angles, defined as arc length divided by radius."
                },
                {
                    "id": "m04_q02",
                    "question": "What is the total plane angle subtended by a full circular circumference at its center?",
                    "options": [
                        "π radians",
                        "2π radians",
                        "4π radians",
                        "π/2 radians"
                    ],
                    "answer": "2π radians",
                    "explanation": "Circumference is 2π r. Thus θ = (2π r)/r = 2π radians, which corresponds to 360^°."
                },
                {
                    "id": "m04_q03",
                    "question": "One radian is approximately equal to how many degrees?",
                    "options": [
                        "45.0^°",
                        "57.3^°",
                        "60.0^°",
                        "90.0^°"
                    ],
                    "answer": "57.3^°",
                    "explanation": "1 rad = 180^° / π ≈ 57.2958^° ≈ 57.3^° (or 57^° 17' 45'')."
                },
                {
                    "id": "m04_q04",
                    "question": "Which SI unit is used to measure three-dimensional solid angles?",
                    "options": [
                        "Steradian (sr)",
                        "Radian (rad)",
                        "Square degree",
                        "Candela"
                    ],
                    "answer": "Steradian (sr)",
                    "explanation": "The Steradian (symbol: sr) is the SI unit for solid angles subtended in 3D conical geometry."
                },
                {
                    "id": "m04_q05",
                    "question": "What is the total solid angle subtended by an entire closed spherical surface at its center?",
                    "options": [
                        "2π steradians",
                        "4π steradians",
                        "π steradians",
                        "8π steradians"
                    ],
                    "answer": "4π steradians",
                    "explanation": "Total surface area of a sphere is 4π r². Thus Ω = (4π r²)/r² = 4π steradians ≈ 12.57 sr."
                },
                {
                    "id": "m04_q06",
                    "question": "What are the physical dimensions of the Radian and Steradian?",
                    "options": [
                        "[M⁰ L¹ T⁰]",
                        "[M⁰ L⁰ T⁰] (Dimensionless)",
                        "[M¹ L⁰ T⁻¹]",
                        "[M⁰ L² T⁰]"
                    ],
                    "answer": "[M⁰ L⁰ T⁰] (Dimensionless)",
                    "explanation": "Radian is length/length ([L]/[L] = 1) and Steradian is area/radius² ([L²]/[L²] = 1). Both are completely dimensionless ([M⁰ L⁰ T⁰])."
                },
                {
                    "id": "m04_q07",
                    "question": "Which of the following statements is scientifically TRUE regarding physical quantities, units, and dimensions?",
                    "options": [
                        "A quantity cannot have a unit if it has no dimensions",
                        "A quantity can have a unit while having no dimensions",
                        "Every dimensionless quantity must have an SI unit",
                        "Dimensions can exist without any physical quantity"
                    ],
                    "answer": "A quantity can have a unit while having no dimensions",
                    "explanation": "Plane angle (radian) and solid angle (steradian) have well-defined units despite having zero physical dimensions ([M⁰ L⁰ T⁰])."
                },
                {
                    "id": "m04_q08",
                    "question": "An arc of length 10 cm on a circle of radius 5 cm subtends what angle at the center?",
                    "options": [
                        "0.5 radians",
                        "2.0 radians",
                        "50 radians",
                        "2π radians"
                    ],
                    "answer": "2.0 radians",
                    "explanation": "θ = s / r = 10 cm / 5 cm = 2.0 radians."
                },
                {
                    "id": "m04_q09",
                    "question": "What solid angle is subtended at the center of a sphere of radius 2 m by a spherical cap surface area of 8 m²?",
                    "options": [
                        "4 steradians",
                        "2 steradians",
                        "16 steradians",
                        "0.5 steradians"
                    ],
                    "answer": "2 steradians",
                    "explanation": "Ω = A / r² = 8 m² / (2 m)² = 8 / 4 = 2 steradians."
                },
                {
                    "id": "m04_q10",
                    "question": "In 1995, the CGPM officially reclassified supplementary units (rad and sr) into which category?",
                    "options": [
                        "Fundamental base units",
                        "Dimensionless derived units",
                        "Historical archaic units",
                        "Empirical constants"
                    ],
                    "answer": "Dimensionless derived units",
                    "explanation": "In 1995, the CGPM formally designated radians and steradians as dimensionless derived units."
                }
            ]
        },
        {
            "id": "m05",
            "moduleNumber": 5,
            "title": "Derived Physical Quantities & Formula Formulations",
            "tagline": "How base quantities combine mathematically to govern the mechanics of the universe.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>A <strong>Derived Physical Quantity</strong> is any quantity whose measurement depends on, and can be calculated from, algebraic combinations (multiplication, division, or powers) of the seven fundamental base quantities.</p>\n <p>Every derived physical quantity has an associated <strong>governing formula</strong> that directly dictates its derived SI unit.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Formulations of Key Derived Physical Quantities</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Derived Quantity</th>\n <th style=\"padding:6px 10px;\">Defining Formula</th>\n <th style=\"padding:6px 10px;\">Derivation from Base Units</th>\n <th style=\"padding:6px 10px;\">SI Derived Unit & Special Name</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Speed / Velocity</strong></td>\n <td style=\"padding:6px 10px;\">v = Distance / Time</td>\n <td style=\"padding:6px 10px;\">m / s</td>\n <td style=\"padding:6px 10px;\">m·s⁻¹</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Acceleration</strong></td>\n <td style=\"padding:6px 10px;\">a = Δ v / Δ t</td>\n <td style=\"padding:6px 10px;\">(m/s) / s</td>\n <td style=\"padding:6px 10px;\">m·s⁻²</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Linear Momentum</strong></td>\n <td style=\"padding:6px 10px;\">p = m × v</td>\n <td style=\"padding:6px 10px;\">kg × (m/s)</td>\n <td style=\"padding:6px 10px;\">kg·m·s⁻¹</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Force</strong></td>\n <td style=\"padding:6px 10px;\">F = m × a</td>\n <td style=\"padding:6px 10px;\">kg × (m/s²)</td>\n <td style=\"padding:6px 10px;\">kg·m·s⁻² = Newton (N)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Work & Energy</strong></td>\n <td style=\"padding:6px 10px;\">W = F × d</td>\n <td style=\"padding:6px 10px;\">N × m = kg·m²/s²</td>\n <td style=\"padding:6px 10px;\">kg·m²·s⁻² = Joule (J)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Power</strong></td>\n <td style=\"padding:6px 10px;\">P = W / t</td>\n <td style=\"padding:6px 10px;\">J / s = kg·m²/s³</td>\n <td style=\"padding:6px 10px;\">J·s⁻¹ = Watt (W)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Pressure & Stress</strong></td>\n <td style=\"padding:6px 10px;\">P = F / A</td>\n <td style=\"padding:6px 10px;\">N / m² = kg/(m·s²)</td>\n <td style=\"padding:6px 10px;\">N·m⁻² = Pascal (Pa)</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>Density</strong></td>\n <td style=\"padding:6px 10px;\">ρ = m / V</td>\n <td style=\"padding:6px 10px;\">kg / m³</td>\n <td style=\"padding:6px 10px;\">kg·m⁻³</td>\n </tr>\n </tbody>\n </table>\n </div>\n <p>Notice how special names honoring pioneering physicists (Newton, Joule, Watt, Pascal) are adopted for convenience, but every one of them can be decomposed into the elementary SI base units.</p>\n ",
            "pointsToRemember": [
                "Derived quantities are mathematical combinations of fundamental quantities.",
                "Special SI unit names decompose cleanly into base units: 1 N = 1 kg·m/s², 1 J = 1 N·m = 1 kg·m²/s², 1 W = 1 J/s = 1 kg·m²/s³.",
                "Pressure is force per unit area: 1 Pascal (Pa) = 1 N/m² = 1 kg/(m·s²)."
            ],
            "keyNotes": [
                "Civil Services Derivation Trick: If you forget a dimensional formula or unit, write out the most basic formula (e.g., F = ma → kg·m/s²) to instantly reconstruct the base units."
            ],
            "questions": [
                {
                    "id": "m05_q01",
                    "question": "Which of the following is the correct expression of the derived unit 'Newton (N)' in terms of SI base units?",
                    "options": [
                        "kg·m·s⁻¹",
                        "kg·m·s⁻²",
                        "kg·m²·s⁻²",
                        "kg·s⁻²"
                    ],
                    "answer": "kg·m·s⁻²",
                    "explanation": "From Newton's second law, F = m × a. Mass is in kg and acceleration is in m/s², giving kg·m·s⁻²."
                },
                {
                    "id": "m05_q02",
                    "question": "The derived SI unit of Work and Energy is the Joule (J). In terms of base units, 1 Joule equals:",
                    "options": [
                        "1 kg·m²·s⁻²",
                        "1 kg·m·s⁻²",
                        "1 kg·m²·s⁻³",
                        "1 kg·m⁻¹·s⁻²"
                    ],
                    "answer": "1 kg·m²·s⁻²",
                    "explanation": "Work = Force × Displacement = (kg·m/s²) × m = kg·m²·s⁻²."
                },
                {
                    "id": "m05_q03",
                    "question": "What is the SI unit of Power expressed in base units?",
                    "options": [
                        "kg·m²·s⁻¹",
                        "kg·m²·s⁻²",
                        "kg·m²·s⁻³",
                        "kg·m⁻²·s⁻³"
                    ],
                    "answer": "kg·m²·s⁻³",
                    "explanation": "Power = Work / Time = (kg·m²·s⁻²) / s = kg·m²·s⁻³ = Watt (W)."
                },
                {
                    "id": "m05_q04",
                    "question": "The Pascal (Pa) is the derived SI unit for Pressure. 1 Pa is equivalent to:",
                    "options": [
                        "1 N·m",
                        "1 N·m⁻²",
                        "1 N·m²",
                        "1 J·s"
                    ],
                    "answer": "1 N·m⁻²",
                    "explanation": "Pressure is defined as Force divided by Area (P = F/A), so its unit is N/m², termed Pascal."
                },
                {
                    "id": "m05_q05",
                    "question": "Which derived physical quantity has the SI base unit kg·m·s⁻¹?",
                    "options": [
                        "Force",
                        "Linear Momentum",
                        "Power",
                        "Acceleration"
                    ],
                    "answer": "Linear Momentum",
                    "explanation": "Linear momentum p = m × v = kg × (m/s) = kg·m·s⁻¹ (also equal to Impulse: N·s)."
                },
                {
                    "id": "m05_q06",
                    "question": "What is the SI unit of volumetric mass density?",
                    "options": [
                        "kg/m²",
                        "kg/m³",
                        "g/cm²",
                        "kg·m³"
                    ],
                    "answer": "kg/m³",
                    "explanation": "Density is mass divided by volume (ρ = m/V), so its SI unit is kilogram per cubic metre (kg/m³)."
                },
                {
                    "id": "m05_q07",
                    "question": "Which of the following derived quantities is defined as the rate of change of velocity with respect to time?",
                    "options": [
                        "Speed",
                        "Displacement",
                        "Acceleration",
                        "Jerk"
                    ],
                    "answer": "Acceleration",
                    "explanation": "Acceleration is defined as a = Δ v / Δ t and has the derived unit m/s²."
                },
                {
                    "id": "m05_q08",
                    "question": "What is the derived unit of Electric Charge in terms of fundamental SI base units?",
                    "options": [
                        "Ampere·second",
                        "Ampere/second",
                        "Volt·metre",
                        "Joule/second"
                    ],
                    "answer": "Ampere·second",
                    "explanation": "Q = I × t, so the Coulomb is equal to Ampere · second (A·s)."
                },
                {
                    "id": "m05_q09",
                    "question": "The derived quantity 'Frequency' measures the number of oscillations per second. Its SI unit Hertz (Hz) is equivalent to:",
                    "options": [
                        "s",
                        "s⁻¹",
                        "s⁻²",
                        "m·s⁻¹"
                    ],
                    "answer": "s⁻¹",
                    "explanation": "Frequency f = 1 / T, so 1 Hz = 1 / second = s⁻¹."
                },
                {
                    "id": "m05_q10",
                    "question": "Which of the following derived quantities does NOT have the same base unit representation as Energy?",
                    "options": [
                        "Mechanical Work",
                        "Heat",
                        "Torque",
                        "Power"
                    ],
                    "answer": "Power",
                    "explanation": "Work, Heat, and Torque all share the base unit kg·m²·s⁻². Power is rate of energy transfer and has the base unit kg·m²·s⁻³."
                }
            ]
        },
        {
            "id": "m06",
            "moduleNumber": 6,
            "title": "Comprehensive Catalog of Scalar Quantities",
            "tagline": "Quantities defined purely by magnitude and adhering to ordinary algebraic laws.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Physical quantities are classified based on directional properties into <strong>Scalars</strong> and <strong>Vectors</strong>. A <strong>Scalar Quantity</strong> is completely described and determined by its <strong>magnitude (numerical value and appropriate unit) alone</strong>. It possesses no spatial direction whatsoever.</p>\n <p>Scalars obey the standard laws of <strong>ordinary algebra</strong> (addition, subtraction, multiplication, and division). For example, adding 5 kg of sugar to 3 kg of sugar always equals 8 kg, regardless of spatial orientation.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Catalog of Scalar Physical Quantities</h4>\n <div style=\"display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:8px; font-size:13px;\">\n <div>• <strong>Distance</strong></div>\n <div>• <strong>Speed</strong></div>\n <div>• <strong>Mass</strong></div>\n <div>• <strong>Time</strong></div>\n <div>• <strong>Density</strong></div>\n <div>• <strong>Volume</strong> & Area</div>\n <div>• <strong>Pressure</strong> (acts uniformly)</div>\n <div>• <strong>Temperature</strong></div>\n <div>• <strong>Work & Energy</strong></div>\n <div>• <strong>Power</strong></div>\n <div>• <strong>Electric Charge</strong></div>\n <div>• <strong>Electric Current</strong></div>\n <div>• <strong>Voltage / Potential</strong></div>\n <div>• <strong>Electrical Resistance</strong></div>\n <div>• <strong>Capacitance</strong></div>\n <div>• <strong>Inductance</strong></div>\n <div>• <strong>Specific Heat Capacity</strong></div>\n <div>• <strong>Latent Heat</strong></div>\n <div>• <strong>Entropy</strong></div>\n <div>• <strong>Viscosity</strong></div>\n <div>• <strong>Refractive Index</strong></div>\n <div>• <strong>Frequency</strong> & Wavelength</div>\n <div>• <strong>Radioactive Half-life</strong></div>\n <div>• <strong>Permittivity & Permeability</strong></div>\n </div>\n </div>\n <div style=\"background:#fffbeb; border-left:4px solid #f59e0b; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n <strong>⚠️ Civil Services Classic Conceptual Pitfalls:</strong>\n <ul style=\"margin:6px 0 0 16px; line-height:1.6;\">\n <li><strong>Electric Current:</strong> Although electric current has a specified direction of flow in a circuit (from positive to negative terminal), it is a <strong>SCALAR quantity</strong> because it does NOT obey the vector law of addition (e.g., currents of 3 A and 4 A meeting at a perpendicular junction always sum algebraically to 7 A, not √(3²+4²) = 5 A).</li>\n <li><strong>Pressure:</strong> Although defined as Force / Area, fluid pressure exerts force perpendicular to any submerged surface in every direction uniformly; it has no fixed spatial vector direction, making pressure a <strong>scalar quantity</strong>.</li>\n </ul>\n </div>\n ",
            "pointsToRemember": [
                "Scalar quantities require only magnitude and unit; they obey ordinary laws of scalar algebra.",
                "Electric current possesses direction yet remains a SCALAR because it does NOT follow vector addition laws.",
                "Pressure is a scalar quantity because hydrostatic pressure acts omnidirectionally at any given depth."
            ],
            "keyNotes": [
                "Civil Services Exam Trap: Whenever asked whether Electric Current or Pressure is scalar or vector, both are strictly SCALARS."
            ],
            "questions": [
                {
                    "id": "m06_q01",
                    "question": "Which fundamental property characterizes all scalar physical quantities?",
                    "options": [
                        "They possess both magnitude and a specific direction in space",
                        "They are fully described by their magnitude (numerical value and unit) alone",
                        "They can only be measured in outer space",
                        "They always change sign under coordinate rotation"
                    ],
                    "answer": "They are fully described by their magnitude (numerical value and unit) alone",
                    "explanation": "Scalars are physical quantities that require only magnitude (size/number and unit) for complete specification and have no associated direction."
                },
                {
                    "id": "m06_q02",
                    "question": "Why is Electric Current classified as a scalar quantity despite having a defined direction of flow in a wire?",
                    "options": [
                        "Because electrons have negligible mass",
                        "Because it does not follow the vector law of addition (triangle / parallelogram law)",
                        "Because current moves at the speed of light",
                        "Because current can only flow through solid metals"
                    ],
                    "answer": "Because it does not follow the vector law of addition (triangle / parallelogram law)",
                    "explanation": "A quantity is only a vector if it obeys the laws of vector addition. Electric currents simply add algebraically (I₁ + I₂), so current is a scalar."
                },
                {
                    "id": "m06_q03",
                    "question": "Which of the following physical quantities is a scalar?",
                    "options": [
                        "Acceleration",
                        "Displacement",
                        "Pressure",
                        "Momentum"
                    ],
                    "answer": "Pressure",
                    "explanation": "Pressure acts uniformly in all directions at a given point in a fluid and does not have a unique spatial direction, making it a scalar."
                },
                {
                    "id": "m06_q04",
                    "question": "Which of the following lists consists EXCLUSIVELY of scalar quantities?",
                    "options": [
                        "Distance, Speed, Work, Mass",
                        "Velocity, Force, Acceleration, Torque",
                        "Displacement, Speed, Momentum, Energy",
                        "Impulse, Weight, Electric Current, Area"
                    ],
                    "answer": "Distance, Speed, Work, Mass",
                    "explanation": "Distance, Speed, Work, and Mass are all pure scalars. Velocity, Force, Displacement, Momentum, Impulse, and Weight are vectors."
                },
                {
                    "id": "m06_q05",
                    "question": "Two currents of 3 A and 4 A meet at a junction wire oriented at an angle of 90^°. What is the total resultant current leaving the junction?",
                    "options": [
                        "5 A",
                        "7 A",
                        "1 A",
                        "12 A"
                    ],
                    "answer": "7 A",
                    "explanation": "Because current is a scalar obeying Kirchhoff's Current Law and ordinary arithmetic, I = 3 A + 4 A = 7 A, irrespective of junction angle."
                },
                {
                    "id": "m06_q06",
                    "question": "Is Mechanical Work a scalar or a vector quantity?",
                    "options": [
                        "Vector, because force has a direction",
                        "Scalar, because it is the dot (scalar) product of two vectors: Force and Displacement",
                        "Vector, because displacement can be negative",
                        "Neither scalar nor vector"
                    ],
                    "answer": "Scalar, because it is the dot (scalar) product of two vectors: Force and Displacement",
                    "explanation": "W = F · d = F d cosθ. The dot product of two vectors always yields a pure scalar."
                },
                {
                    "id": "m06_q07",
                    "question": "Which of the following thermodynamic quantities is a scalar?",
                    "options": [
                        "Temperature",
                        "Entropy",
                        "Specific Heat Capacity",
                        "All of the above"
                    ],
                    "answer": "All of the above",
                    "explanation": "Temperature, Entropy, and Specific Heat Capacity are all state variables fully described by magnitude alone."
                },
                {
                    "id": "m06_q08",
                    "question": "Refractive index of an optical medium is an example of:",
                    "options": [
                        "A vector quantity with unit m/s",
                        "A dimensionless scalar quantity",
                        "A fundamental base quantity",
                        "A pseudo-vector"
                    ],
                    "answer": "A dimensionless scalar quantity",
                    "explanation": "Refractive index μ = c / v is a ratio of speeds, making it a pure dimensionless scalar."
                },
                {
                    "id": "m06_q09",
                    "question": "Which electrical property is a vector quantity among the following?",
                    "options": [
                        "Electric Potential",
                        "Electric Field Intensity",
                        "Electric Charge",
                        "Electrical Resistance"
                    ],
                    "answer": "Electric Field Intensity",
                    "explanation": "Electric Field Intensity (E = F/q) has both magnitude and direction (away from positive charges, toward negative charges). Potential, charge, and resistance are scalars."
                },
                {
                    "id": "m06_q10",
                    "question": "How are two scalar quantities added together mathematically?",
                    "options": [
                        "By the parallelogram law of vectors",
                        "By ordinary algebraic rules of arithmetic",
                        "By cross product multiplication",
                        "By taking the square root of their sum of squares"
                    ],
                    "answer": "By ordinary algebraic rules of arithmetic",
                    "explanation": "Scalars do not require directional geometry; they are combined using standard algebraic arithmetic."
                }
            ]
        },
        {
            "id": "m07",
            "moduleNumber": 7,
            "title": "Comprehensive Catalog of Vector Quantities",
            "tagline": "Physical quantities requiring both magnitude and directional orientation to be fully realized.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>A <strong>Vector Quantity</strong> is a physical quantity that possesses both a <strong>magnitude</strong> and a definite <strong>direction</strong> in space, and critically, obeys the laws of <strong>vector addition</strong> (such as the Triangle Law or Parallelogram Law of Vectors).</p>\n <p>If a quantity possesses direction but does not obey vector addition laws, it is NOT a vector (as demonstrated by electric current).</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Catalog of Vector Physical Quantities</h4>\n <div style=\"display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:8px; font-size:13px;\">\n <div>• <strong>Displacement</strong></div>\n <div>• <strong>Velocity</strong></div>\n <div>• <strong>Acceleration</strong></div>\n <div>• <strong>Linear Momentum</strong></div>\n <div>• <strong>Force</strong> (all forms)</div>\n <div>• <strong>Weight</strong> (gravitational force)</div>\n <div>• <strong>Thrust & Tension</strong></div>\n <div>• <strong>Impulse</strong> (J = FΔ t)</div>\n <div>• <strong>Torque</strong> (vec{τ} = r × F)</div>\n <div>• <strong>Angular Velocity</strong> (vec{ω})</div>\n <div>• <strong>Angular Acceleration</strong> (vec{α})</div>\n <div>• <strong>Angular Momentum</strong> (L)</div>\n <div>• <strong>Electric Field Intensity</strong> (E)</div>\n <div>• <strong>Magnetic Field / Flux Density</strong> (B)</div>\n <div>• <strong>Gravitational Field</strong> (g)</div>\n <div>• <strong>Electric Dipole Moment</strong> (p)</div>\n <div>• <strong>Magnetic Dipole Moment</strong> (M)</div>\n <div>• <strong>Current Density</strong> (J = I / A)</div>\n <div>• <strong>Drag Force & Lift Force</strong></div>\n <div>• <strong>Restoring Force</strong> (Spring)</div>\n </div>\n </div>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n <strong>💡 Polar Vectors vs Axial Vectors (Pseudo-vectors):</strong>\n <ul style=\"margin:6px 0 0 16px; line-height:1.6;\">\n <li><strong>Polar Vectors:</strong> Have a clear linear point of application and act in the direction of motion (e.g., Displacement, Velocity, Force, Momentum).</li>\n <li><strong>Axial Vectors:</strong> Represent rotational effects and act along the axis of rotation in accordance with the Right-Hand Screw Rule (e.g., Angular Velocity vec{ω}, Torque vec{τ}, Angular Momentum L).</li>\n </ul>\n </div>\n ",
            "pointsToRemember": [
                "Vector quantities require magnitude, spatial direction, and strict adherence to vector addition laws.",
                "Weight is a VECTOR because it is the gravitational force directed downward toward Earth's center (W = mg).",
                "Current Density (J) is a VECTOR, even though Electric Current (I) is a scalar."
            ],
            "keyNotes": [
                "Crucial Distinction: Current (I) is a Scalar; Current Density (J = I/A) is a Vector with direction parallel to positive charge drift."
            ],
            "questions": [
                {
                    "id": "m07_q01",
                    "question": "Which of the following is an indispensable criterion for a physical quantity to be classified as a true vector?",
                    "options": [
                        "It must have magnitude and direction, and obey the triangle/parallelogram laws of vector addition",
                        "It must be expressed only in SI base units",
                        "Its magnitude must always be greater than zero",
                        "It cannot be measured with digital sensors"
                    ],
                    "answer": "It must have magnitude and direction, and obey the triangle/parallelogram laws of vector addition",
                    "explanation": "Having direction is necessary but not sufficient; a true vector must strictly obey the geometric laws of vector addition."
                },
                {
                    "id": "m07_q02",
                    "question": "Which of the following pairs distinguishes a vector from its corresponding scalar counterpart?",
                    "options": [
                        "Velocity (Vector) vs Speed (Scalar)",
                        "Displacement (Vector) vs Distance (Scalar)",
                        "Weight (Vector) vs Mass (Scalar)",
                        "All of the above"
                    ],
                    "answer": "All of the above",
                    "explanation": "Velocity/Speed, Displacement/Distance, and Weight/Mass are classic pairs where the former is a directional vector and the latter is a non-directional scalar."
                },
                {
                    "id": "m07_q03",
                    "question": "What type of vector represents rotational motion and acts along the axis of rotation?",
                    "options": [
                        "Polar vector",
                        "Axial vector (Pseudo-vector)",
                        "Null vector",
                        "Unit vector"
                    ],
                    "answer": "Axial vector (Pseudo-vector)",
                    "explanation": "Axial vectors represent rotational motion and point along the axis of rotation following the right-hand grip rule (e.g., Torque, Angular Momentum)."
                },
                {
                    "id": "m07_q04",
                    "question": "Which of the following is an axial vector?",
                    "options": [
                        "Linear Velocity",
                        "Force",
                        "Torque",
                        "Displacement"
                    ],
                    "answer": "Torque",
                    "explanation": "Torque (vec{τ} = r × F) is an axial vector pointing along the axis of rotation perpendicular to both radius and force."
                },
                {
                    "id": "m07_q05",
                    "question": "While electric current is a scalar, which related electrical quantity is a true vector?",
                    "options": [
                        "Electric Potential",
                        "Current Density (J)",
                        "Electrical Resistance",
                        "Capacitance"
                    ],
                    "answer": "Current Density (J)",
                    "explanation": "Current Density J = I/A is a vector whose direction at any point is the direction of flow of positive charge."
                },
                {
                    "id": "m07_q06",
                    "question": "Impulse has the same dimensions and vector nature as which of the following?",
                    "options": [
                        "Linear Momentum",
                        "Angular Momentum",
                        "Work",
                        "Force"
                    ],
                    "answer": "Linear Momentum",
                    "explanation": "Impulse J = F Δ t = Δ p (change in linear momentum). Both are vectors sharing the unit N·s = kg·m/s."
                },
                {
                    "id": "m07_q07",
                    "question": "What is the magnitude of the resultant when two equal orthogonal forces of 10 N act at a 90^° angle?",
                    "options": [
                        "20 N",
                        "10√(2) N ≈ 14.14 N",
                        "0 N",
                        "10 N"
                    ],
                    "answer": "10√(2) N ≈ 14.14 N",
                    "explanation": "For two perpendicular vectors: R = √(A² + B²) = √(10² + 10²) = √(200) = 10√(2) N."
                },
                {
                    "id": "m07_q08",
                    "question": "Which of the following is NOT a vector quantity?",
                    "options": [
                        "Electric Dipole Moment",
                        "Magnetic Flux Density",
                        "Gravitational Potential",
                        "Acceleration due to Gravity"
                    ],
                    "answer": "Gravitational Potential",
                    "explanation": "Gravitational potential is the work done per unit mass in bringing an object from infinity, which is a scalar. Electric dipole moment, magnetic flux density, and gravitational acceleration are vectors."
                },
                {
                    "id": "m07_q09",
                    "question": "Why is Weight considered a vector quantity?",
                    "options": [
                        "Because it is measured in kilograms",
                        "Because it is the gravitational force acting on a mass directed toward the center of the Earth",
                        "Because it remains constant everywhere in the universe",
                        "Because it has no unit"
                    ],
                    "answer": "Because it is the gravitational force acting on a mass directed toward the center of the Earth",
                    "explanation": "Weight is a force (W = mg) with a specific downward direction toward the planetary center of mass."
                },
                {
                    "id": "m07_q10",
                    "question": "A particle moves along a circular track of radius R and completes half a revolution. What is the magnitude of its displacement?",
                    "options": [
                        "π R",
                        "2R",
                        "0",
                        "R / 2"
                    ],
                    "answer": "2R",
                    "explanation": "Distance traveled is π R, but displacement is the shortest straight-line distance between initial and diametrically opposite final point, which is the diameter 2R."
                }
            ]
        },
        {
            "id": "m08",
            "moduleNumber": 8,
            "title": "Astronomical Length Scales: The Astronomical Unit (AU)",
            "tagline": "Standardizing planetary distances across our solar system based on Earth's orbit.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Ordinary metric units like the metre or kilometre are completely inadequate for measuring astronomical distances. In planetary astronomy, the primary reference unit is the <strong>Astronomical Unit (AU)</strong>.</p>\n <h4 style=\"color:#1e3a8a; margin:12px 0 6px 0;\">Definition of Astronomical Unit (AU):</h4>\n <p>The <strong>Astronomical Unit (AU)</strong> is defined as the <strong>mean (average) distance between the center of the Earth and the center of the Sun</strong>.</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px; font-size:15px; font-weight:700;\">\n 1 AU = 1.496 × 10¹¹ metres ≈ 1.5 × 10⁸ km (149.6 million kilometres)\n </div>\n <p>Because Earth moves around the Sun in an elliptical orbit (Kepler's First Law), the distance varies throughout the year:</p>\n <ul style=\"margin:6px 0 14px 20px; line-height:1.6;\">\n <li><strong>Perihelion (Closest Approach, ~Jan 3):</strong> ≈ 147.1 million km ≈ 0.983 AU.</li>\n <li><strong>Aphelion (Furthest Distance, ~July 4):</strong> ≈ 152.1 million km ≈ 1.017 AU.</li>\n <li>The Astronomical Unit represents the semi-major axis of Earth's orbit, rigorously standardized in 2012 by the International Astronomical Union (IAU) as exactly 149,597,870,700 m.</li>\n </ul>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px; margin:14px 0;\">\n <h4 style=\"margin:0 0 8px 0; color:#1e3a8a; font-size:13px;\">Planetary Distances from the Sun in AU:</h4>\n <ul style=\"margin:4px 0 0 16px; font-size:13px; line-height:1.6;\">\n <li>Mercury: ≈ 0.39 AU &nbsp;|&nbsp; Venus: ≈ 0.72 AU &nbsp;|&nbsp; Earth: 1.00 AU</li>\n <li>Mars: ≈ 1.52 AU &nbsp;|&nbsp; Jupiter: ≈ 5.20 AU &nbsp;|&nbsp; Saturn: ≈ 9.58 AU</li>\n <li>Neptune: ≈ 30.07 AU &nbsp;|&nbsp; Kuiper Belt: ≈ 30 to 50 AU</li>\n </ul>\n </div>\n <p>AU is primarily suitable for measuring distances <strong>within our Solar System</strong>, whereas interstellar distances between stars require much larger units (Light Year and Parsec).</p>\n ",
            "pointsToRemember": [
                "1 AU = 1.496 × 10¹¹ m ≈ 1.5 × 10⁸ km (average distance between Earth and Sun).",
                "AU is the standard yardstick for interplanetary distances within the solar system.",
                "Earth is closest to the Sun at Perihelion (~Jan 3) and furthest at Aphelion (~July 4)."
            ],
            "keyNotes": [
                "Memory Landmark: Light takes approximately 8 minutes and 20 seconds (500 seconds) to travel 1 AU from Sun to Earth (3 × 10⁸ m/s × 500 s = 1.5 × 10¹¹ m)."
            ],
            "questions": [
                {
                    "id": "m08_q01",
                    "question": "How is the Astronomical Unit (AU) scientifically defined?",
                    "options": [
                        "The distance from Earth to the Moon",
                        "The average (mean) distance between the Earth and the Sun",
                        "The radius of the Sun",
                        "The distance light travels in one solar year"
                    ],
                    "answer": "The average (mean) distance between the Earth and the Sun",
                    "explanation": "The Astronomical Unit (AU) is defined as the mean distance between the center of the Earth and the center of the Sun."
                },
                {
                    "id": "m08_q02",
                    "question": "What is the numerical value of 1 Astronomical Unit in metres?",
                    "options": [
                        "9.46 × 10¹⁵ m",
                        "1.496 × 10¹¹ m",
                        "3.086 × 10¹⁶ m",
                        "1.5 × 10⁶ m"
                    ],
                    "answer": "1.496 × 10¹¹ m",
                    "explanation": "1 AU = 1.496 × 10¹¹ metres ≈ 1.5 × 10⁸ kilometres."
                },
                {
                    "id": "m08_q03",
                    "question": "Approximately how long does it take for sunlight to travel 1 Astronomical Unit to reach the Earth?",
                    "options": [
                        "8 seconds",
                        "8 minutes and 20 seconds",
                        "1 hour",
                        "24 hours"
                    ],
                    "answer": "8 minutes and 20 seconds",
                    "explanation": "t = d / c = (1.496 × 10¹¹ m) / (3 × 10⁸ m/s) ≈ 499 s ≈ 8 min 20 s."
                },
                {
                    "id": "m08_q04",
                    "question": "What is the average orbital distance of Mars from the Sun expressed in AU?",
                    "options": [
                        "0.52 AU",
                        "1.00 AU",
                        "1.52 AU",
                        "5.20 AU"
                    ],
                    "answer": "1.52 AU",
                    "explanation": "Mars orbits at an average distance of approximately 1.52 AU (about 228 million km) from the Sun."
                },
                {
                    "id": "m08_q05",
                    "question": "The orbital position where Earth is closest to the Sun is termed:",
                    "options": [
                        "Aphelion",
                        "Perihelion",
                        "Perigee",
                        "Apogee"
                    ],
                    "answer": "Perihelion",
                    "explanation": "Perihelion (occurring around January 3) is the point in Earth's orbit where it is closest to the Sun (~0.983 AU)."
                },
                {
                    "id": "m08_q06",
                    "question": "The orbital position where Earth is farthest from the Sun is termed:",
                    "options": [
                        "Aphelion",
                        "Perihelion",
                        "Solstice",
                        "Equinox"
                    ],
                    "answer": "Aphelion",
                    "explanation": "Aphelion (occurring around July 4) is the orbital point of maximum distance from the Sun (~1.017 AU)."
                },
                {
                    "id": "m08_q07",
                    "question": "Which astronomical domain is most appropriately measured using the Astronomical Unit (AU)?",
                    "options": [
                        "Atomic orbital radii",
                        "Interplanetary distances within the solar system",
                        "Distances between distant galactic clusters",
                        "The diameter of neutron stars"
                    ],
                    "answer": "Interplanetary distances within the solar system",
                    "explanation": "AU is the standard unit for solar system scales (distances of planets, asteroids, and comets from the Sun)."
                },
                {
                    "id": "m08_q08",
                    "question": "Jupiter is approximately how many Astronomical Units away from the Sun?",
                    "options": [
                        "1.5 AU",
                        "5.2 AU",
                        "9.6 AU",
                        "30.1 AU"
                    ],
                    "answer": "5.2 AU",
                    "explanation": "Jupiter orbits at an average distance of about 5.2 AU (approximately 778 million km) from the Sun."
                },
                {
                    "id": "m08_q09",
                    "question": "In 2012, the International Astronomical Union redefined the Astronomical Unit as:",
                    "options": [
                        "A variable quantity tied to solar mass loss",
                        "An exact constant value of 149,597,870,700 metres",
                        "The distance to Mars divided by 2",
                        "The distance traveled by sound in space"
                    ],
                    "answer": "An exact constant value of 149,597,870,700 metres",
                    "explanation": "In 2012, the IAU fixed 1 AU to the exact conventional value of 149,597,870,700 m."
                },
                {
                    "id": "m08_q10",
                    "question": "Convert 3 × 10¹¹ metres into Astronomical Units approximately:",
                    "options": [
                        "0.5 AU",
                        "1.0 AU",
                        "2.0 AU",
                        "4.0 AU"
                    ],
                    "answer": "2.0 AU",
                    "explanation": "Since 1 AU ≈ 1.5 × 10¹¹ m, (3.0 × 10¹¹) / (1.5 × 10¹¹) = 2.0 AU."
                }
            ]
        },
        {
            "id": "m09",
            "moduleNumber": 9,
            "title": "Interstellar Distance Units: Light Year & Parsec",
            "tagline": "Navigating deep cosmic voids between stars and galaxies with Light Years and Parsecs.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>For interstellar and intergalactic scales, even the Astronomical Unit is too small. Astronomers use two premier units: the <strong>Light Year (ly)</strong> and the <strong>Parsec (pc)</strong>.</p>\n <h4 style=\"color:#1e3a8a; margin:12px 0 6px 0;\">1. Light Year (ly):</h4>\n <p>A <strong>Light Year</strong> is defined as the <strong>total distance traveled by light in vacuum in one Julian year</strong> (365.25 days):</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px;\">\n 1 ly = c × t = (2.9979 × 10⁸ m/s) × (365.25 × 24 × 3600 s) = mathbf{9.461 × 10¹⁵ metres} ≈ 9.46 × 10¹² km\n </div>\n <p><em>Crucial Note:</em> Despite the word 'year' in its name, a Light Year is strictly a <strong>unit of distance/length</strong>, NEVER of time.</p>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">2. Parsec (Parallax Second - pc):</h4>\n <p>The <strong>Parsec</strong> is the <strong>largest practical unit of length</strong> in astronomy. It is defined based on stellar parallax:</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px;\">\n One <strong>Parsec</strong> is the distance at which an arc of length 1 AU subtends an angle of exactly <strong>one second of arc (1'')</strong>.\n r = (s / θ) = frac{1 AU}{1'' in radians} = frac{1.496 × 10¹¹ m}{(1/3600) × (π/180)} = mathbf{3.0857 × 10¹⁶ metres}\n </div>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">Master Astronomical Conversions & Ascending Order:</h4>\n <ul style=\"margin:6px 0 12px 20px; line-height:1.6;\">\n <li>1 Parsec ≈ 3.26 Light Years</li>\n <li>1 Parsec ≈ 206,265 AU</li>\n <li>1 Light Year ≈ 63,241 AU</li>\n </ul>\n <div style=\"background:#f1f5f9; border:1px solid #cbd5e1; border-radius:8px; padding:10px 14px; font-weight:700; text-align:center;\">\n Ascending Order of Length: Astronomical Unit (AU) < Light Year (ly) < Parsec (pc)\n </div>\n <p>The nearest star system to our Sun, <em>Proxima Centauri</em>, is located approximately 4.24 light years (about 1.3 parsecs) away.</p>\n ",
            "pointsToRemember": [
                "A Light Year is a unit of DISTANCE (not time): 1 ly = 9.461 × 10¹⁵ m.",
                "Parsec (parallax second) is the largest astronomical unit of distance: 1 pc = 3.086 × 10¹⁶ m ≈ 3.26 ly ≈ 206,265 AU.",
                "Ascending order of astronomical distances: AU < Light Year < Parsec."
            ],
            "keyNotes": [
                "Civil Services Favorite Trap: 'Light Year' is frequently tested in exams to trick students into answering 'time'. It is unequivocally a unit of DISTANCE."
            ],
            "questions": [
                {
                    "id": "m09_q01",
                    "question": "'Light Year' is a measurement unit of which physical quantity?",
                    "options": [
                        "Time",
                        "Distance (Length)",
                        "Speed of light",
                        "Intensity of sunlight"
                    ],
                    "answer": "Distance (Length)",
                    "explanation": "A light year is the distance light travels in vacuum in one Julian year (9.46 × 10¹⁵ m); it is strictly a unit of distance."
                },
                {
                    "id": "m09_q02",
                    "question": "What is the exact numerical value of 1 Light Year in metres?",
                    "options": [
                        "1.496 × 10¹¹ m",
                        "9.461 × 10¹⁵ m",
                        "3.086 × 10¹⁶ m",
                        "6.023 × 10²³ m"
                    ],
                    "answer": "9.461 × 10¹⁵ m",
                    "explanation": "1 ly = c × 1 year ≈ (3 × 10⁸ m/s) × (3.1536 × 10⁷ s) ≈ 9.461 × 10¹⁵ metres."
                },
                {
                    "id": "m09_q03",
                    "question": "What is the largest practical unit of length used in astronomy?",
                    "options": [
                        "Astronomical Unit (AU)",
                        "Light Year",
                        "Parsec",
                        "Kilometre"
                    ],
                    "answer": "Parsec",
                    "explanation": "Parsec (3.086 × 10¹⁶ m) is larger than both the Light Year and Astronomical Unit, making it the largest practical astronomical distance unit."
                },
                {
                    "id": "m09_q04",
                    "question": "One Parsec is approximately equal to how many Light Years?",
                    "options": [
                        "1.44 ly",
                        "3.26 ly",
                        "9.46 ly",
                        "206,265 ly"
                    ],
                    "answer": "3.26 ly",
                    "explanation": "1 pc = (3.086 × 10¹⁶ m) / (9.461 × 10¹⁵ m) ≈ 3.2616 light years."
                },
                {
                    "id": "m09_q05",
                    "question": "The word 'Parsec' is a portmanteau derived from which two scientific terms?",
                    "options": [
                        "Particle and Second",
                        "Parallax and Second (of arc)",
                        "Partial Sector",
                        "Parametric Sector"
                    ],
                    "answer": "Parallax and Second (of arc)",
                    "explanation": "Parsec stands for 'Parallax Second', denoting the distance of a star having a parallax angle of 1 arcsecond from a baseline of 1 AU."
                },
                {
                    "id": "m09_q06",
                    "question": "Which of the following correctly displays astronomical distance units in strictly ASCENDING order?",
                    "options": [
                        "Parsec < Light Year < Astronomical Unit",
                        "Astronomical Unit < Light Year < Parsec",
                        "Light Year < Astronomical Unit < Parsec",
                        "Astronomical Unit < Parsec < Light Year"
                    ],
                    "answer": "Astronomical Unit < Light Year < Parsec",
                    "explanation": "1 AU (1.5 × 10¹¹ m) < 1 ly (9.46 × 10¹⁵ m) < 1 pc (3.09 × 10¹⁶ m)."
                },
                {
                    "id": "m09_q07",
                    "question": "Approximately how many Astronomical Units are contained within one Parsec?",
                    "options": [
                        "3,600 AU",
                        "63,241 AU",
                        "206,265 AU",
                        "1,000,000 AU"
                    ],
                    "answer": "206,265 AU",
                    "explanation": "Because 1 radian = 206,265 arcseconds, an arc of 1 AU subtending 1 arcsecond yields a distance of 206,265 AU."
                },
                {
                    "id": "m09_q08",
                    "question": "Proxima Centauri, the nearest known star to our solar system, is located at what approximate distance?",
                    "options": [
                        "1.3 AU",
                        "4.24 light years",
                        "500 light seconds",
                        "300 parsecs"
                    ],
                    "answer": "4.24 light years",
                    "explanation": "Proxima Centauri is located ≈ 4.24 ly ≈ 1.3 pc from our Sun."
                },
                {
                    "id": "m09_q09",
                    "question": "If a star shows a parallax angle of 0.5 arcseconds when observed from opposite sides of Earth's orbit, what is its distance in parsecs?",
                    "options": [
                        "0.5 parsecs",
                        "1.0 parsec",
                        "2.0 parsecs",
                        "4.0 parsecs"
                    ],
                    "answer": "2.0 parsecs",
                    "explanation": "Stellar distance d (in pc) = 1 / p (in arcseconds) = 1 / 0.5 = 2.0 parsecs."
                },
                {
                    "id": "m09_q10",
                    "question": "Why can astronomers not measure distances to galaxies millions of light years away using direct parallax from Earth's orbit?",
                    "options": [
                        "Light bends backwards in deep space",
                        "The parallax angle becomes imperceptibly tiny, far smaller than resolving limits of instruments",
                        "Galaxies do not emit optical light",
                        "Earth stops orbiting the Sun"
                    ],
                    "answer": "The parallax angle becomes imperceptibly tiny, far smaller than resolving limits of instruments",
                    "explanation": "Parallax angle decreases inversely with distance (p ∝ 1/d). Beyond thousands of light years, the angle becomes unmeasurably small, requiring standard candles (Cepheids/Type Ia supernovae)."
                }
            ]
        },
        {
            "id": "m10",
            "moduleNumber": 10,
            "title": "Microscopic & Subatomic Length Scales",
            "tagline": "From cellular biology down to atomic radii and the nuclear realm: Microns, Angstroms, and Fermis.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Just as interstellar astronomy requires massive units like Parsecs, atomic and nuclear physics requires specialized miniature units to express dimensions of cells, molecules, atoms, and atomic nuclei.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Table of Microscopic & Subatomic Units of Length</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Unit Name</th>\n <th style=\"padding:6px 10px;\">Symbol</th>\n <th style=\"padding:6px 10px;\">Value in Metres</th>\n <th style=\"padding:6px 10px;\">Typical Physical Realm / Application</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Micron (Micrometre)</strong></td>\n <td style=\"padding:6px 10px;\">μm</td>\n <td style=\"padding:6px 10px;\">10⁻⁶ m = 10⁻⁴ cm</td>\n <td style=\"padding:6px 10px;\">Biological cells (bacteria, RBCs ≈ 7μm, human hair ≈ 50μm)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Nanometre</strong></td>\n <td style=\"padding:6px 10px;\">nm</td>\n <td style=\"padding:6px 10px;\">10⁻⁹ m = 10⁻⁷ cm</td>\n <td style=\"padding:6px 10px;\">Visible light wavelengths (380--700 nm), viruses, DNA helix diameter (2 nm)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Angstrom</strong></td>\n <td style=\"padding:6px 10px;\">Å</td>\n <td style=\"padding:6px 10px;\">10⁻¹⁰ m = 10⁻⁸ cm = 0.1 nm</td>\n <td style=\"padding:6px 10px;\">Atomic sizes, interatomic bond lengths, X-ray wavelengths (Bohr radius a₀ ≈ 0.529 Å)</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>Fermi (Femtometre)</strong></td>\n <td style=\"padding:6px 10px;\">fm</td>\n <td style=\"padding:6px 10px;\">10⁻¹⁵ m = 10⁻¹³ cm</td>\n <td style=\"padding:6px 10px;\">Nuclear diameters, proton size (rₚ ≈ 0.84 fm), range of strong nuclear force</td>\n </tr>\n </tbody>\n </table>\n </div>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n <strong>🔬 Comparison of Atomic vs Nuclear Sizes:</strong>\n <p style=\"margin:4px 0 0 0; line-height:1.6;\">\n An atom has a typical diameter of ≈ 1 Å = 10⁻¹⁰ m, whereas its central nucleus has a diameter of ≈ 1 to 10 Fermi = 10⁻¹⁵ to 10⁻¹⁴ m.\n This means the atom is roughly <strong>100,000 times larger</strong> than its nucleus (10⁻¹⁰ / 10⁻¹⁵ = 10⁵), showing that matter is overwhelmingly empty space!\n </p>\n </div>\n ",
            "pointsToRemember": [
                "Micron: 1μm = 10⁻⁶ m; used for cellular biology.",
                "Angstrom: 1 Å = 10⁻¹⁰ m = 0.1 nm = 10⁻⁸ cm; used for atomic radii and chemical bond lengths.",
                "Fermi (femtometre): 1 fm = 10⁻¹⁵ m; used for atomic nuclei (1 fm = 10⁻⁵ Å)."
            ],
            "keyNotes": [
                "Exam Ratio: The ratio of atomic diameter to nuclear diameter is approximately 10⁵ (1 Å / 1 fm = 10⁻¹⁰ m / 10⁻¹⁵ m = 100,000)."
            ],
            "questions": [
                {
                    "id": "m10_q01",
                    "question": "What is the equivalent value of 1 Angstrom (Å) in metres?",
                    "options": [
                        "10⁻⁶ m",
                        "10⁻⁸ m",
                        "10⁻¹⁰ m",
                        "10⁻¹⁵ m"
                    ],
                    "answer": "10⁻¹⁰ m",
                    "explanation": "1 Angstrom (Å) = 10⁻¹⁰ metres = 10⁻⁸ cm = 0.1 nanometre."
                },
                {
                    "id": "m10_q02",
                    "question": "One Fermi (or femtometre) is equal to:",
                    "options": [
                        "10⁻⁹ m",
                        "10⁻¹² m",
                        "10⁻¹⁵ m",
                        "10⁻¹⁸ m"
                    ],
                    "answer": "10⁻¹⁵ m",
                    "explanation": "1 Fermi = 1 femtometre (fm) = 10⁻¹⁵ metres."
                },
                {
                    "id": "m10_q03",
                    "question": "Which microscopic unit is universally used to express atomic nuclei dimensions?",
                    "options": [
                        "Micron",
                        "Fermi",
                        "Angstrom",
                        "Astronomical unit"
                    ],
                    "answer": "Fermi",
                    "explanation": "Nuclear radii are of the order of 10⁻¹⁵ m, making the Fermi the dedicated unit for nuclear physics."
                },
                {
                    "id": "m10_q04",
                    "question": "How many Angstroms are equal to 1 nanometre (nm)?",
                    "options": [
                        "0.1 Å",
                        "1 Å",
                        "10 Å",
                        "100 Å"
                    ],
                    "answer": "10 Å",
                    "explanation": "1 nm = 10⁻⁹ m = 10 × 10⁻¹⁰ m = 10 Å."
                },
                {
                    "id": "m10_q05",
                    "question": "What is the approximate ratio of the diameter of an atom to the diameter of its nucleus?",
                    "options": [
                        "10¹",
                        "10³",
                        "10⁵",
                        "10¹⁰"
                    ],
                    "answer": "10⁵",
                    "explanation": "Atomic diameter ≈ 10⁻¹⁰ m and nuclear diameter ≈ 10⁻¹⁵ m. Ratio = 10⁻¹⁰ / 10⁻¹⁵ = 10⁵ (100,000 times larger)."
                },
                {
                    "id": "m10_q06",
                    "question": "The diameter of a human red blood cell is approximately 7μm. What is this in metres?",
                    "options": [
                        "7 × 10⁻³ m",
                        "7 × 10⁻⁶ m",
                        "7 × 10⁻⁹ m",
                        "7 × 10⁻¹² m"
                    ],
                    "answer": "7 × 10⁻⁶ m",
                    "explanation": "Since 1μm = 10⁻⁶ m, 7μm = 7 × 10⁻⁶ m."
                },
                {
                    "id": "m10_q07",
                    "question": "The Bohr radius of a ground-state hydrogen atom (a₀) is approximately:",
                    "options": [
                        "0.529 Å",
                        "5.29 Å",
                        "0.0529 nm",
                        "Both A and C"
                    ],
                    "answer": "Both A and C",
                    "explanation": "a₀ = 0.529 × 10⁻¹⁰ m = 0.529 Å = 0.0529 nm. Both A and C are mathematically identical and correct."
                },
                {
                    "id": "m10_q08",
                    "question": "How many Fermis are there in 1 Angstrom?",
                    "options": [
                        "10³ fm",
                        "10⁵ fm",
                        "10⁷ fm",
                        "10⁻⁵ fm"
                    ],
                    "answer": "10⁵ fm",
                    "explanation": "1 Å / 1 fm = 10⁻¹⁰ m / 10⁻¹⁵ m = 10⁵ fm."
                },
                {
                    "id": "m10_q09",
                    "question": "The unit Angstrom is named in honour of which renowned Swedish physicist?",
                    "options": [
                        "Anders Jonas Ångström",
                        "Svante Arrhenius",
                        "Alfred Nobel",
                        "Niels Bohr"
                    ],
                    "answer": "Anders Jonas Ångström",
                    "explanation": "The unit is named after Anders Jonas Ångström, one of the founders of optical spectroscopy."
                },
                {
                    "id": "m10_q10",
                    "question": "Wavelengths of visible light range approximately from 4000 Å to 7000 Å. Expressed in nanometres, this corresponds to:",
                    "options": [
                        "40 to 70 nm",
                        "400 to 700 nm",
                        "0.4 to 0.7 nm",
                        "4000 to 7000 nm"
                    ],
                    "answer": "400 to 700 nm",
                    "explanation": "Since 1 nm = 10 Å, 4000 Å = 400 nm and 7000 Å = 700 nm."
                }
            ]
        },
        {
            "id": "m11",
            "moduleNumber": 11,
            "title": "Units of Mass & Practical Measurement Conversions",
            "tagline": "Practical mass scales from commercial gemstones to agricultural metric tonnes.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Mass is a measure of the amount of matter in a body and the fundamental measure of its inertia. The SI base unit of mass is the <strong>Kilogram (kg)</strong>. In commerce, industry, agriculture, and jewelry, various practical units are utilized.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Conversion Table for Units of Mass</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Unit Name</th>\n <th style=\"padding:6px 10px;\">Relation to Kilogram (kg)</th>\n <th style=\"padding:6px 10px;\">Value in Grams (g)</th>\n <th style=\"padding:6px 10px;\">Primary Application / Notes</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Kilogram</strong></td>\n <td style=\"padding:6px 10px;\">1 kg</td>\n <td style=\"padding:6px 10px;\">1,000 g</td>\n <td style=\"padding:6px 10px;\">SI base unit</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Gram</strong></td>\n <td style=\"padding:6px 10px;\">10⁻³ kg</td>\n <td style=\"padding:6px 10px;\">1 g</td>\n <td style=\"padding:6px 10px;\">CGS base unit, chemistry laboratories</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Quintal</strong></td>\n <td style=\"padding:6px 10px;\">100 kg</td>\n <td style=\"padding:6px 10px;\">100,000 g = 10⁵ g</td>\n <td style=\"padding:6px 10px;\">Agricultural produce and wholesale grain markets</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Metric Tonne (T)</strong></td>\n <td style=\"padding:6px 10px;\">1,000 kg = 10 quintals</td>\n <td style=\"padding:6px 10px;\">10⁶ g</td>\n <td style=\"padding:6px 10px;\">Heavy industrial freight, coal, steel, and shipping</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Pound (lb)</strong></td>\n <td style=\"padding:6px 10px;\">≈ 0.4536 kg</td>\n <td style=\"padding:6px 10px;\">453.592 g</td>\n <td style=\"padding:6px 10px;\">FPS / US customary & British avoirdupois weight</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Ounce (oz)</strong></td>\n <td style=\"padding:6px 10px;\">≈ 0.02835 kg</td>\n <td style=\"padding:6px 10px;\">28.3495 g</td>\n <td style=\"padding:6px 10px;\">1/16th of an avoirdupois pound</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>Carat</strong></td>\n <td style=\"padding:6px 10px;\">0.0002 kg = 2 × 10⁻⁴ kg</td>\n <td style=\"padding:6px 10px;\">0.2 g = 200 mg</td>\n <td style=\"padding:6px 10px;\">Precious gemstones, diamonds, and natural pearls</td>\n </tr>\n </tbody>\n </table>\n </div>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n <strong>💎 Crucial Civil Services Distinction: Carat (Mass) vs Karat (Purity):</strong>\n <ul style=\"margin:6px 0 0 16px; line-height:1.6;\">\n <li><strong>Carat (ct):</strong> A unit of <strong>mass</strong> equal to exactly 200 mg = 0.2 g for gemstones. (A 5-carat diamond weighs exactly 1.0 gram).</li>\n <li><strong>Karat (K):</strong> A measure of <strong>purity of gold</strong> on a 24-part scale. 24 Karat = 100% pure gold (24/24); 22 Karat = 22/24 ≈ 91.6% pure gold (916 Hallmark). Karat is NOT a unit of weight!</li>\n </ul>\n </div>\n ",
            "pointsToRemember": [
                "1 Quintal = 100 kg; 1 Metric Tonne = 1,000 kg = 10 quintals.",
                "1 Pound (lb) ≈ 0.4536 kg = 453.59 g; 1 Ounce = 1/16 lb ≈ 28.35 g.",
                "1 Carat = 200 milligrams = 0.2 grams; Karat measures gold purity, whereas Carat measures gemstone mass."
            ],
            "keyNotes": [
                "Frequent Civil Services Question: 1 Carat of diamond equals exactly 200 mg (0.2 g). Never confuse with 24K gold purity!"
            ],
            "questions": [
                {
                    "id": "m11_q01",
                    "question": "What is the exact mass equivalent of 1 Carat used for diamonds and gemstones?",
                    "options": [
                        "20 mg",
                        "100 mg",
                        "200 mg",
                        "500 mg"
                    ],
                    "answer": "200 mg",
                    "explanation": "One metric carat is defined as exactly 200 milligrams = 0.2 grams."
                },
                {
                    "id": "m11_q02",
                    "question": "How many kilograms are there in 1 Quintal?",
                    "options": [
                        "10 kg",
                        "50 kg",
                        "100 kg",
                        "1,000 kg"
                    ],
                    "answer": "100 kg",
                    "explanation": "A quintal is standardly defined as 100 kilograms."
                },
                {
                    "id": "m11_q03",
                    "question": "How many quintals constitute 1 Metric Tonne?",
                    "options": [
                        "5 quintals",
                        "10 quintals",
                        "20 quintals",
                        "100 quintals"
                    ],
                    "answer": "10 quintals",
                    "explanation": "1 Metric Tonne = 1,000 kg = 10 × 100 kg = 10 quintals."
                },
                {
                    "id": "m11_q04",
                    "question": "What is the mass of 1 avoirdupois pound in grams?",
                    "options": [
                        "350.2 g",
                        "453.59 g",
                        "500.00 g",
                        "1,000.0 g"
                    ],
                    "answer": "453.59 g",
                    "explanation": "1 lb = 0.45359237 kg ≈ 453.59 grams."
                },
                {
                    "id": "m11_q05",
                    "question": "How many ounces (oz) are there in one pound (lb)?",
                    "options": [
                        "10 oz",
                        "12 oz",
                        "16 oz",
                        "20 oz"
                    ],
                    "answer": "16 oz",
                    "explanation": "In the standard avoirdupois system, 1 pound = 16 ounces (1 oz ≈ 28.35 g)."
                },
                {
                    "id": "m11_q06",
                    "question": "What is the fundamental difference between 'Carat' and 'Karat'?",
                    "options": [
                        "Carat is a unit of mass (200 mg); Karat is a measure of gold purity (out of 24 parts)",
                        "Carat measures volume; Karat measures density",
                        "Carat is British; Karat is French",
                        "There is no difference; they are alternate spellings"
                    ],
                    "answer": "Carat is a unit of mass (200 mg); Karat is a measure of gold purity (out of 24 parts)",
                    "explanation": "Carat is a weight unit (0.2 g) for gemstones, whereas Karat measures purity of gold (24K = 100% gold)."
                },
                {
                    "id": "m11_q07",
                    "question": "If an ornament is hallmarked as 18 Karat gold, what percentage of pure gold does it contain?",
                    "options": [
                        "50%",
                        "75%",
                        "91.6%",
                        "100%"
                    ],
                    "answer": "75%",
                    "explanation": "Gold purity percentage = (18 / 24) × 100 = 0.75 × 100 = 75% (the remaining 25% consists of copper or silver alloys)."
                },
                {
                    "id": "m11_q08",
                    "question": "A diamond weighs exactly 1.0 gram. What is its weight in carats?",
                    "options": [
                        "2 carats",
                        "5 carats",
                        "10 carats",
                        "0.2 carats"
                    ],
                    "answer": "5 carats",
                    "explanation": "Since 1 carat = 0.2 g, a 1.0 g diamond weighs 1.0 / 0.2 = 5 carats."
                },
                {
                    "id": "m11_q09",
                    "question": "In rural wholesale markets, a farmer sells 25 quintals of wheat. What is this quantity in metric tonnes?",
                    "options": [
                        "0.25 tonnes",
                        "2.5 tonnes",
                        "25 tonnes",
                        "250 tonnes"
                    ],
                    "answer": "2.5 tonnes",
                    "explanation": "25 quintals = 25 × 100 kg = 2,500 kg = 2.5 metric tonnes."
                },
                {
                    "id": "m11_q10",
                    "question": "Which of the following units represents the largest mass?",
                    "options": [
                        "One Metric Tonne",
                        "One Quintal",
                        "One Kilogram",
                        "One Pound"
                    ],
                    "answer": "One Metric Tonne",
                    "explanation": "One Metric Tonne (1000 kg) is greater than 1 Quintal (100 kg), 1 Kilogram (1 kg), and 1 Pound (0.454 kg)."
                }
            ]
        },
        {
            "id": "m12",
            "moduleNumber": 12,
            "title": "Microscopic Mass & The Chandrasekhar Limit",
            "tagline": "From atomic mass units to the astrophysical threshold determining stellar death.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>At the extreme microscopic and macroscopic limits of mass, physics relies on two profound benchmarks: the <strong>Atomic Mass Unit</strong> and the <strong>Chandrasekhar Limit</strong>.</p>\n <h4 style=\"color:#1e3a8a; margin:12px 0 6px 0;\">1. Atomic Mass Unit (amu or u):</h4>\n <p>The standard kilogram is far too colossal for measuring individual atoms and subatomic particles. The <strong>unified atomic mass unit (u)</strong> is defined as <strong>exactly 1/12th of the mass of one unbound neutral Carbon-12 (¹²C) atom at rest</strong>:</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px;\">\n 1 amu = 1 u = (1 / 12) × frac{0.012 kg}{6.02214 × 10²³} = mathbf{1.66054 × 10⁻²⁷ kg} = 1.66054 × 10⁻²⁴ g\n Mass of Proton mₚ ≈ 1.00727 u, Mass of Neutron mₙ ≈ 1.00866 u, Mass of Electron mₑ ≈ 0.00055 u\n </div>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">2. The Chandrasekhar Limit (1.44 M☉):</h4>\n <p>Formulated by the illustrious Indian-American astrophysicist <strong>Subrahmanyan Chandrasekhar</strong> (who won the <strong>Nobel Prize in Physics in 1983</strong>), the <strong>Chandrasekhar Limit</strong> represents the <strong>maximum theoretical mass that a stable white dwarf star can possess</strong> without succumbing to gravitational collapse.</p>\n <div style=\"background:#f1f5f9; border:1px solid #cbd5e1; border-radius:8px; padding:12px 16px; margin:12px 0;\">\n Chandrasekhar Limit M_{ch} ≈ 1.44 M☉ ≈ 1.44 × (1.989 × 10³⁰ kg) ≈ mathbf{2.8 × 10³⁰ kg}\n (where M☉ denotes the mass of our Sun).\n </div>\n <h4 style=\"color:#1e3a8a; margin:12px 0 6px 0;\">Astrophysical Fate of Dying Stars:</h4>\n <ul style=\"margin:6px 0 14px 20px; line-height:1.6;\">\n <li><strong>Core Mass < 1.44 M☉:</strong> Electron degeneracy pressure counterbalances gravity. The dying star settles peacefully into a stable <strong>White Dwarf</strong> (the eventual fate of our Sun).</li>\n <li><strong>Core Mass > 1.44 M☉:</strong> Gravity overwhelms electron degeneracy pressure. The star undergoes a catastrophic supernova explosion.\n <ul style=\"margin:4px 0 0 16px;\">\n <li>If the remnant core is between 1.44 M☉ and ≈ 3 M☉ (Tolman-Oppenheimer-Volkoff limit), it forms an ultra-dense <strong>Neutron Star</strong> (supported by neutron degeneracy pressure).</li>\n <li>If the remnant core exceeds ≈ 3 M☉, complete gravitational collapse occurs, creating a <strong>Black Hole</strong>.</li>\n </ul>\n </li>\n </ul>\n ",
            "pointsToRemember": [
                "1 amu = 1.6605 × 10⁻²⁷ kg = 1.6605 × 10⁻²⁴ g (defined as 1/12th of Carbon-12 atom).",
                "Chandrasekhar Limit is 1.44 Solar Masses (≈ 2.8 × 10³⁰ kg); discovered by S. Chandrasekhar (Nobel Prize 1983).",
                "Stars with core mass < 1.44 M☉ become White Dwarfs; those > 1.44 M☉ collapse into Neutron Stars or Black Holes."
            ],
            "keyNotes": [
                "Civil Services Milestone: S. Chandrasekhar shared the 1983 Nobel Prize in Physics with William A. Fowler for theoretical studies of the physical processes important to the structure and evolution of stars."
            ],
            "questions": [
                {
                    "id": "m12_q01",
                    "question": "What is the numerical value of the Chandrasekhar Limit in terms of solar masses (M☉)?",
                    "options": [
                        "1.0 Solar Mass",
                        "1.44 Solar Masses",
                        "2.5 Solar Masses",
                        "3.0 Solar Masses"
                    ],
                    "answer": "1.44 Solar Masses",
                    "explanation": "The Chandrasekhar Limit is approximately 1.44 times the mass of the Sun (1.44 M☉ ≈ 2.8 × 10³⁰ kg)."
                },
                {
                    "id": "m12_q02",
                    "question": "In which year was Subrahmanyan Chandrasekhar awarded the Nobel Prize in Physics for his work on stellar evolution?",
                    "options": [
                        "1930",
                        "1974",
                        "1983",
                        "1998"
                    ],
                    "answer": "1983",
                    "explanation": "S. Chandrasekhar was awarded the Nobel Prize in Physics in 1983 along with William A. Fowler."
                },
                {
                    "id": "m12_q03",
                    "question": "What is the physical significance of the Chandrasekhar Limit?",
                    "options": [
                        "It is the minimum mass required for a planet to hold an atmosphere",
                        "It is the maximum stable mass possible for a White Dwarf star",
                        "It is the speed of light inside a dense star",
                        "It is the escape velocity of the Sun"
                    ],
                    "answer": "It is the maximum stable mass possible for a White Dwarf star",
                    "explanation": "The Chandrasekhar limit represents the upper mass threshold where electron degeneracy pressure can prevent a white dwarf from collapsing."
                },
                {
                    "id": "m12_q04",
                    "question": "What will be the ultimate evolutionary fate of a star whose dying core mass is LESS than 1.44 M☉?",
                    "options": [
                        "White Dwarf",
                        "Neutron Star",
                        "Black Hole",
                        "Supernova with complete annihilation"
                    ],
                    "answer": "White Dwarf",
                    "explanation": "Stars with core masses below 1.44 M☉ (including our Sun) cool stably into White Dwarfs."
                },
                {
                    "id": "m12_q05",
                    "question": "If a dying stellar core's mass exceeds the Chandrasekhar Limit, what celestial object may be formed after gravitational collapse?",
                    "options": [
                        "Neutron Star or Black Hole",
                        "Brown Dwarf",
                        "Red Giant",
                        "Main-sequence star"
                    ],
                    "answer": "Neutron Star or Black Hole",
                    "explanation": "Beyond 1.44 M☉, electron degeneracy pressure fails, collapsing the core into either a Neutron Star or a Black Hole."
                },
                {
                    "id": "m12_q06",
                    "question": "How is 1 unified atomic mass unit (amu or u) defined relative to chemical isotopes?",
                    "options": [
                        "Mass of a hydrogen atom",
                        "Mass of an oxygen-16 atom",
                        "1/12th the mass of a single unbound Carbon-12 atom",
                        "1/14th the mass of a Nitrogen-14 atom"
                    ],
                    "answer": "1/12th the mass of a single unbound Carbon-12 atom",
                    "explanation": "1 amu is standardly defined as exactly 1/12th the mass of an isolated Carbon-12 atom."
                },
                {
                    "id": "m12_q07",
                    "question": "What is the value of 1 atomic mass unit (amu) in kilograms?",
                    "options": [
                        "9.11 × 10⁻³¹ kg",
                        "1.6605 × 10⁻²⁷ kg",
                        "1.6605 × 10⁻²⁴ kg",
                        "6.022 × 10⁻²³ kg"
                    ],
                    "answer": "1.6605 × 10⁻²⁷ kg",
                    "explanation": "1 amu = 1.66054 × 10⁻²⁷ kg = 1.66054 × 10⁻²⁴ g."
                },
                {
                    "id": "m12_q08",
                    "question": "Which quantum mechanical principle provides the pressure that stabilizes a white dwarf star below the Chandrasekhar Limit?",
                    "options": [
                        "Pauli Exclusion Principle (Electron Degeneracy Pressure)",
                        "Heisenberg Uncertainty Principle",
                        "Bohr Complementarity Principle",
                        "Planck Radiation Law"
                    ],
                    "answer": "Pauli Exclusion Principle (Electron Degeneracy Pressure)",
                    "explanation": "The Pauli exclusion principle forbids two identical fermions (electrons) from occupying the same quantum state, generating electron degeneracy pressure."
                },
                {
                    "id": "m12_q09",
                    "question": "Approximately what is the total mass of the Sun (1 M☉)?",
                    "options": [
                        "5.97 × 10²⁴ kg",
                        "1.989 × 10³⁰ kg",
                        "2.8 × 10³⁵ kg",
                        "1.5 × 10¹¹ kg"
                    ],
                    "answer": "1.989 × 10³⁰ kg",
                    "explanation": "The mass of the Sun is approximately 1.989 × 10³⁰ kg (about 333,000 times Earth's mass)."
                },
                {
                    "id": "m12_q10",
                    "question": "What will eventually happen to our Sun at the end of its life cycle?",
                    "options": [
                        "It will explode as a Type II Supernova and form a Black Hole",
                        "It will collapse into a stable White Dwarf because its mass is well below the Chandrasekhar Limit",
                        "It will expand forever into empty space",
                        "It will turn into a neutron star directly"
                    ],
                    "answer": "It will collapse into a stable White Dwarf because its mass is well below the Chandrasekhar Limit",
                    "explanation": "With a mass of 1.0 M☉ (below 1.44 M☉), the Sun will shed its outer envelope as a planetary nebula and leave a white dwarf."
                }
            ]
        },
        {
            "id": "m13",
            "moduleNumber": 13,
            "title": "Time Standards & Chronometry",
            "tagline": "Defining the flow of time from atomic oscillations to solar and sidereal days.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Time is the interval between two successive events or the continuous progression of existence. In the SI system, the fundamental unit of time is the <strong>Second (s)</strong>.</p>\n <h4 style=\"color:#1e3a8a; margin:12px 0 6px 0;\">Atomic Definition of the Second:</h4>\n <p>Solar time varies slightly due to Earth's elliptical orbit and axial tilt. Therefore, since 1967, the <strong>Second</strong> is defined with absolute quantum precision using the <strong>Caesium-133 atomic clock</strong>:</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px;\">\n One <strong>Second</strong> is the duration of exactly <strong>9,192,631,770 periods</strong> of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the Caesium-133 atom.\n </div>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">Astronomical & Practical Time Units:</h4>\n <ul style=\"margin:6px 0 12px 20px; line-height:1.6;\">\n <li><strong>Mean Solar Day:</strong> Average time taken by Earth to rotate once on its axis relative to the Sun:\n 1 Mean Solar Day = 24 hours = 1,440 minutes = 86,400 seconds\n </li>\n <li><strong>Sidereal Day:</strong> Time taken by Earth to complete one true 360^° rotation relative to distant fixed stars:\n 1 Sidereal Day = 23 hours, 56 minutes, 4.09 seconds ≈ 86,164.1 s\n <em>(A sidereal day is about 4 minutes shorter than a solar day because Earth advances in its orbit while spinning).</em>\n </li>\n <li><strong>Solar Year:</strong> Time taken by Earth to complete one revolution around the Sun = 365.2422 mean solar days ≈ 365 days, 5 hours, 48 minutes, 46 seconds.</li>\n <li><strong>Julian Year:</strong> Standardized astronomical year = 365.25 days = 31,557,600 seconds.</li>\n <li><strong>Shake (Nuclear Physics):</strong> An informal unit of time used in nuclear reaction cross-sections and nuclear bomb explosions:\n 1 Shake = 10⁻⁸ seconds = 10 nanoseconds\n </li>\n </ul>\n ",
            "pointsToRemember": [
                "1 Second = 9,192,631,770 oscillations of Caesium-133 ground state hyperfine radiation.",
                "1 Mean Solar Day = 86,400 seconds (24 hours).",
                "A Sidereal Day is ≈ 23h 56m 4s (about 4 minutes shorter than a solar day).",
                "1 Shake = 10⁻⁸ s = 10 ns (used in nuclear physics)."
            ],
            "keyNotes": [
                "Civil Services Exam Fact: Why is a sidereal day 4 minutes shorter than a solar day? Because Earth rotates 360^° on its axis in 23h 56m, but must rotate an extra ≈ 1^° (taking ~4 mins) to realign with the Sun."
            ],
            "questions": [
                {
                    "id": "m13_q01",
                    "question": "How many seconds are there in one full Mean Solar Day (24 hours)?",
                    "options": [
                        "3,600 s",
                        "43,200 s",
                        "86,400 s",
                        "100,000 s"
                    ],
                    "answer": "86,400 s",
                    "explanation": "1 day = 24 × 60 × 60 = 86,400 seconds."
                },
                {
                    "id": "m13_q02",
                    "question": "The atomic standard of time (the Second) is based on the hyperfine transition frequency of which chemical element?",
                    "options": [
                        "Rubidium-87",
                        "Caesium-133",
                        "Hydrogen-1",
                        "Carbon-12"
                    ],
                    "answer": "Caesium-133",
                    "explanation": "The SI second is officially defined by 9,192,631,770 radiation periods of the Caesium-133 ground state hyperfine transition."
                },
                {
                    "id": "m13_q03",
                    "question": "What is the exact duration of a Sidereal Day on Earth?",
                    "options": [
                        "Exactly 24 hours 00 minutes",
                        "23 hours 56 minutes 4 seconds",
                        "24 hours 04 minutes 00 seconds",
                        "23 hours 30 minutes 00 seconds"
                    ],
                    "answer": "23 hours 56 minutes 4 seconds",
                    "explanation": "A sidereal day is the time for a true 360^° axial rotation relative to fixed distant stars, taking 23h 56m 4.1s."
                },
                {
                    "id": "m13_q04",
                    "question": "Why is a Mean Solar Day approximately 4 minutes longer than a Sidereal Day?",
                    "options": [
                        "Due to relativistic time dilation from Earth's core",
                        "Because while Earth rotates, it also moves forward in its orbit around the Sun, requiring an additional rotation of ~1° to face the Sun again",
                        "Due to lunar tidal friction slowing the oceans",
                        "Because solar clocks use daylight saving offsets"
                    ],
                    "answer": "Because while Earth rotates, it also moves forward in its orbit around the Sun, requiring an additional rotation of ~1° to face the Sun again",
                    "explanation": "Earth travels ≈ 360^° / 365.25 ≈ 1^° along its orbit each day. Earth must rotate ≈ 361^° relative to the Sun, which takes an extra 4 minutes."
                },
                {
                    "id": "m13_q05",
                    "question": "In nuclear physics, what is a 'Shake' equivalent to?",
                    "options": [
                        "10⁻³ s",
                        "10⁻⁶ s",
                        "10⁻⁸ s",
                        "10⁻¹² s"
                    ],
                    "answer": "10⁻⁸ s",
                    "explanation": "1 Shake is a specialized nuclear time unit equal to 10⁻⁸ seconds = 10 nanoseconds."
                },
                {
                    "id": "m13_q06",
                    "question": "How many seconds are contained in an ordinary tropical calendar year (non-leap year of 365 days)?",
                    "options": [
                        "3.1536 × 10⁷ s",
                        "8.64 × 10⁴ s",
                        "5.256 × 10⁵ s",
                        "3.65 × 10⁶ s"
                    ],
                    "answer": "3.1536 × 10⁷ s",
                    "explanation": "365 × 86,400 s = 31,536,000 s = 3.1536 × 10⁷ seconds."
                },
                {
                    "id": "m13_q07",
                    "question": "Which of the following is a unit of time rather than distance?",
                    "options": [
                        "Light Year",
                        "Parsec",
                        "Lunar Month",
                        "Astronomical Unit"
                    ],
                    "answer": "Lunar Month",
                    "explanation": "A lunar month is a time interval (~29.53 days). Light year, Parsec, and AU are all units of length/distance."
                },
                {
                    "id": "m13_q08",
                    "question": "Atomic clocks operated at national standards laboratories (like NPL in New Delhi) achieve what order of precision?",
                    "options": [
                        "Error of 1 second in 100 years",
                        "Error of 1 second in over 100 million years",
                        "Error of 1 minute per decade",
                        "Error of 1 millisecond per hour"
                    ],
                    "answer": "Error of 1 second in over 100 million years",
                    "explanation": "Modern Caesium fountain and optical atomic clocks achieve accuracies exceeding 1 second error in 100 to 300 million years."
                },
                {
                    "id": "m13_q09",
                    "question": "What is the frequency of the radiation that defines the SI second?",
                    "options": [
                        "1,000,000 Hz",
                        "9,192,631,770 Hz",
                        "3 × 10⁸ Hz",
                        "6.626 × 10⁻³⁴ Hz"
                    ],
                    "answer": "9,192,631,770 Hz",
                    "explanation": "The exact defining transition frequency Δν_{Cs} is 9,192,631,770 Hz."
                },
                {
                    "id": "m13_q10",
                    "question": "How many milliseconds are there in one second?",
                    "options": [
                        "100 ms",
                        "1,000 ms",
                        "10,000 ms",
                        "1,000,000 ms"
                    ],
                    "answer": "1,000 ms",
                    "explanation": "1 second = 10³ milliseconds (ms) = 1,000 ms."
                }
            ]
        },
        {
            "id": "m14",
            "moduleNumber": 14,
            "title": "SI Metric Prefixes: From Micro to Quetta",
            "tagline": "Standard powers of ten spanning 60 orders of magnitude across physical scales.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>To eliminate extremely cumbersome strings of zeros when expressing macroscopic astronomical dimensions or microscopic subatomic scales, the SI system utilizes standardized <strong>Metric Prefixes</strong>. Each prefix denotes a specific power of 10.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Table of SI Prefixes (Positive & Negative Powers of 10)</h4>\n <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:16px;\">\n <div>\n <h5 style=\"color:#059669; margin:0 0 6px 0;\">Multiples (Positive Powers ≥ 10¹)</h5>\n <table style=\"width:100%; border-collapse:collapse; font-size:12px;\">\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10¹</td><td style=\"padding:3px 6px;\"><strong>Deka (da)</strong></td><td style=\"padding:3px 6px;\">10</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10²</td><td style=\"padding:3px 6px;\"><strong>Hecto (h)</strong></td><td style=\"padding:3px 6px;\">100</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10³</td><td style=\"padding:3px 6px;\"><strong>Kilo (k)</strong></td><td style=\"padding:3px 6px;\">1,000 (Thousand)</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁶</td><td style=\"padding:3px 6px;\"><strong>Mega (M)</strong></td><td style=\"padding:3px 6px;\">Million</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁹</td><td style=\"padding:3px 6px;\"><strong>Giga (G)</strong></td><td style=\"padding:3px 6px;\">Billion</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10¹²</td><td style=\"padding:3px 6px;\"><strong>Tera (T)</strong></td><td style=\"padding:3px 6px;\">Trillion</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10¹⁵</td><td style=\"padding:3px 6px;\"><strong>Peta (P)</strong></td><td style=\"padding:3px 6px;\">Quadrillion</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10¹⁸</td><td style=\"padding:3px 6px;\"><strong>Exa (E)</strong></td><td style=\"padding:3px 6px;\">Quintillion</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10²¹</td><td style=\"padding:3px 6px;\"><strong>Zetta (Z)</strong></td><td style=\"padding:3px 6px;\">Sextillion</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10²⁴</td><td style=\"padding:3px 6px;\"><strong>Yotta (Y)</strong></td><td style=\"padding:3px 6px;\">Septillion</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10²⁷</td><td style=\"padding:3px 6px;\"><strong>Ronna (R)*</strong></td><td style=\"padding:3px 6px;\">Octillion (2022)</td></tr>\n <tr><td style=\"padding:3px 6px;\">10³⁰</td><td style=\"padding:3px 6px;\"><strong>Quetta (Q)*</strong></td><td style=\"padding:3px 6px;\">Nonillion (2022)</td></tr>\n </table>\n </div>\n <div>\n <h5 style=\"color:#dc2626; margin:0 0 6px 0;\">Submultiples (Negative Powers ≤ 10⁻¹)</h5>\n <table style=\"width:100%; border-collapse:collapse; font-size:12px;\">\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻¹</td><td style=\"padding:3px 6px;\"><strong>Deci (d)</strong></td><td style=\"padding:3px 6px;\">0.1</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻²</td><td style=\"padding:3px 6px;\"><strong>Centi (c)</strong></td><td style=\"padding:3px 6px;\">0.01</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻³</td><td style=\"padding:3px 6px;\"><strong>Milli (m)</strong></td><td style=\"padding:3px 6px;\">Thousandth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻⁶</td><td style=\"padding:3px 6px;\"><strong>Micro (μ)</strong></td><td style=\"padding:3px 6px;\">Millionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻⁹</td><td style=\"padding:3px 6px;\"><strong>Nano (n)</strong></td><td style=\"padding:3px 6px;\">Billionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻¹²</td><td style=\"padding:3px 6px;\"><strong>Pico (p)</strong></td><td style=\"padding:3px 6px;\">Trillionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻¹⁵</td><td style=\"padding:3px 6px;\"><strong>Femto (f)</strong></td><td style=\"padding:3px 6px;\">Quadrillionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻¹⁸</td><td style=\"padding:3px 6px;\"><strong>Atto (a)</strong></td><td style=\"padding:3px 6px;\">Quintillionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻²¹</td><td style=\"padding:3px 6px;\"><strong>Zepto (z)</strong></td><td style=\"padding:3px 6px;\">Sextillionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻²⁴</td><td style=\"padding:3px 6px;\"><strong>Yocto (y)</strong></td><td style=\"padding:3px 6px;\">Septillionth</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:3px 6px;\">10⁻²⁷</td><td style=\"padding:3px 6px;\"><strong>Ronto (r)*</strong></td><td style=\"padding:3px 6px;\">Octillionth (2022)</td></tr>\n <tr><td style=\"padding:3px 6px;\">10⁻³⁰</td><td style=\"padding:3px 6px;\"><strong>Quecto (q)*</strong></td><td style=\"padding:3px 6px;\">Nonillionth (2022)</td></tr>\n </table>\n </div>\n </div>\n </div>\n <p><em>*Note on 2022 Additions:</em> In November 2022, the 27th CGPM introduced four new prefixes to meet growing data and astrophysics scales: <strong>Ronna (10²⁷)</strong>, <strong>Quetta (10³⁰)</strong>, <strong>Ronto (10⁻²⁷)</strong>, and <strong>Quecto (10⁻³⁰)</strong>.</p>\n ",
            "pointsToRemember": [
                "Positive multiples: Kilo (10³), Mega (10⁶), Giga (10⁹), Tera (10¹²), Peta (10¹⁵), Exa (10¹⁸), Zetta (10²¹), Yotta (10²⁴), Ronna (10²⁷), Quetta (10³⁰).",
                "Negative submultiples: Milli (10⁻³), Micro (10⁻⁶), Nano (10⁻⁹), Pico (10⁻¹²), Femto (10⁻¹⁵), Atto (10⁻¹⁸), Zepto (10⁻²¹), Yocto (10⁻²⁴), Ronto (10⁻²⁷), Quecto (10⁻³⁰).",
                "Ronna/Quetta and Ronto/Quecto were officially adopted at the 27th CGPM in November 2022."
            ],
            "keyNotes": [
                "High-Yield Prefix Pairs: Femto (10⁻¹⁵) vs Peta (10¹⁵); Nano (10⁻⁹) vs Giga (10⁹); Pico (10⁻¹²) vs Tera (10¹²)."
            ],
            "questions": [
                {
                    "id": "m14_q01",
                    "question": "Which prefix represents a factor of 10⁹ (one billion) in the SI system?",
                    "options": [
                        "Mega",
                        "Giga",
                        "Tera",
                        "Peta"
                    ],
                    "answer": "Giga",
                    "explanation": "Giga (symbol: G) represents 10⁹ (e.g., Gigahertz, Gigabyte)."
                },
                {
                    "id": "m14_q02",
                    "question": "What power of 10 corresponds to the prefix 'Femto'?",
                    "options": [
                        "10⁻⁹",
                        "10⁻¹²",
                        "10⁻¹⁵",
                        "10⁻¹⁸"
                    ],
                    "answer": "10⁻¹⁵",
                    "explanation": "Femto (symbol: f) represents 10⁻¹⁵ (e.g., femtosecond, femtometre/Fermi)."
                },
                {
                    "id": "m14_q03",
                    "question": "What is the SI prefix for 10⁻¹²?",
                    "options": [
                        "Nano",
                        "Pico",
                        "Femto",
                        "Atto"
                    ],
                    "answer": "Pico",
                    "explanation": "Pico (symbol: p) represents 10⁻¹² (e.g., picofarad, picosecond)."
                },
                {
                    "id": "m14_q04",
                    "question": "Which prefix denotes a factor of 10¹⁵?",
                    "options": [
                        "Tera",
                        "Peta",
                        "Exa",
                        "Zetta"
                    ],
                    "answer": "Peta",
                    "explanation": "Peta (symbol: P) represents 10¹⁵ (e.g., Petabyte, Petaflops)."
                },
                {
                    "id": "m14_q05",
                    "question": "In November 2022, the 27th CGPM added 'Quetta' as an official SI prefix. What power of 10 does Quetta represent?",
                    "options": [
                        "10²⁴",
                        "10²⁷",
                        "10³⁰",
                        "10³²"
                    ],
                    "answer": "10³⁰",
                    "explanation": "Quetta (symbol: Q) represents 10³⁰, making it the largest approved SI prefix."
                },
                {
                    "id": "m14_q06",
                    "question": "What is the smallest official SI submultiple prefix representing 10⁻³⁰ adopted in 2022?",
                    "options": [
                        "Yocto",
                        "Ronto",
                        "Quecto",
                        "Zepto"
                    ],
                    "answer": "Quecto",
                    "explanation": "Quecto (symbol: q) represents 10⁻³⁰, the smallest approved SI prefix."
                },
                {
                    "id": "m14_q07",
                    "question": "A supercomputer achieves a processing speed of 1 Exaflop. How many floating-point operations per second is this?",
                    "options": [
                        "10¹²",
                        "10¹⁵",
                        "10¹⁸",
                        "10²¹"
                    ],
                    "answer": "10¹⁸",
                    "explanation": "Exa (E) represents 10¹⁸ operations per second."
                },
                {
                    "id": "m14_q08",
                    "question": "How many micrometres (microns) are there in one millimetre?",
                    "options": [
                        "10",
                        "100",
                        "1,000",
                        "10,000"
                    ],
                    "answer": "1,000",
                    "explanation": "1 mm = 10⁻³ m; 1μm = 10⁻⁶ m. Ratio = 10⁻³ / 10⁻⁶ = 10³ = 1,000μm."
                },
                {
                    "id": "m14_q09",
                    "question": "Which of the following correctly pairs a prefix with its exact numerical exponent?",
                    "options": [
                        "Mega : 10⁵",
                        "Tera : 10¹²",
                        "Micro : 10⁻⁵",
                        "Deci : 10⁻³"
                    ],
                    "answer": "Tera : 10¹²",
                    "explanation": "Tera is 10¹². Mega is 10⁶, Micro is 10⁻⁶, and Deci is 10⁻¹."
                },
                {
                    "id": "m14_q10",
                    "question": "Express 50 nanoseconds in seconds:",
                    "options": [
                        "5 × 10⁻⁷ s",
                        "5 × 10⁻⁸ s",
                        "5 × 10⁻⁹ s",
                        "50 × 10⁻⁶ s"
                    ],
                    "answer": "5 × 10⁻⁸ s",
                    "explanation": "50 ns = 50 × 10⁻⁹ s = 5.0 × 10⁻⁸ seconds."
                }
            ]
        },
        {
            "id": "m15",
            "moduleNumber": 15,
            "title": "Fundamentals of Dimensional Analysis & Principle of Homogeneity",
            "tagline": "The algebraic powers of base quantities that unlock consistency checks in physical laws.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>The <strong>Dimensions</strong> of a physical quantity are the powers (or exponents) to which the fundamental base quantities must be raised to represent that quantity. A mathematical expression displaying these powers enclosed in square brackets is called the <strong>Dimensional Formula</strong>.</p>\n <p>Using the primary base dimensions: [M] for Mass, [L] for Length, [T] for Time, [I] or [A] for Electric Current, [K] or [θ] for Temperature, [cd] for Luminous Intensity, and [mol] for Amount of Substance, any physical quantity Q is expressed as:</p>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:10px 14px; margin:10px 0; border-radius:6px; font-weight:700;\">\n [Q] = [M^a L^b T^c I^d K^e ...]\n </div>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">The Principle of Homogeneity of Dimensions:</h4>\n <p>This fundamental theorem states that: <strong>A physical equation is dimensionally valid if and only if every single term on both sides of the equation possesses identical dimensions.</strong></p>\n <p>In accordance with the Principle of Homogeneity:</p>\n <ul style=\"margin:6px 0 12px 20px; line-height:1.6;\">\n <li>You can only add or subtract physical quantities having the <strong>same dimensional formula</strong> (e.g., you cannot add 5 metres of length to 3 kilograms of mass).</li>\n <li>In any valid equation A = B + C - D, the dimensions must satisfy: [A] = [B] = [C] = [D].</li>\n <li>Arguments of transcendental functions (trigonometric sinθ, exponential e^x, logarithmic ln x) must be completely <strong>dimensionless</strong> ([M⁰ L⁰ T⁰]).</li>\n </ul>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">Core Applications of Dimensional Analysis:</h4>\n <ol style=\"margin:6px 0 12px 20px; line-height:1.6;\">\n <li><strong>Testing Correctness of Equations:</strong> Checking whether a newly proposed formula is dimensionally consistent.</li>\n <li><strong>Deriving Physical Relationships:</strong> Deducing dependencies between physical variables (e.g., finding the formula for the time period of a pendulum T = 2π √(l/g)).</li>\n <li><strong>Unit Conversion:</strong> Transforming numerical values across different unit systems using n₁ [u₁] = n₂ [u₂].</li>\n </ol>\n ",
            "pointsToRemember": [
                "Dimensions are the exponents to which fundamental base quantities are raised.",
                "Principle of Homogeneity: Only physical quantities with identical dimensions can be added, subtracted, or equated ([A] = [B] = [C] in A = B + C).",
                "Trigonometric, logarithmic, and exponential functions are always dimensionless.",
                "A dimensionally correct equation is not necessarily physically correct (due to dimensionless constants like 2π or 1/2), but a dimensionally incorrect equation is ALWAYS false."
            ],
            "keyNotes": [
                "Golden Rule for Exams: If an equation is dimensionally inconsistent, it is definitively WRONG. If it is dimensionally consistent, it may be right, but dimensionless constants cannot be checked by dimensional analysis."
            ],
            "questions": [
                {
                    "id": "m15_q01",
                    "question": "What is the Principle of Homogeneity of Dimensions in physics?",
                    "options": [
                        "All physical quantities must be expressed in kilograms",
                        "In any valid physical equation, each term on both sides must have identical dimensions",
                        "Mass and energy are interchangeable at all velocities",
                        "Vectors and scalars can be added if they have the same unit"
                    ],
                    "answer": "In any valid physical equation, each term on both sides must have identical dimensions",
                    "explanation": "The principle states that only terms having the same dimensions can be added, subtracted, or equated in a physical law."
                },
                {
                    "id": "m15_q02",
                    "question": "In the kinematic equation s = ut + (1 / 2)at², what are the dimensions of the term (1 / 2)at²?",
                    "options": [
                        "[L T⁻¹]",
                        "[L T⁻²]",
                        "[L]",
                        "[M⁰ L⁰ T⁰]"
                    ],
                    "answer": "[L]",
                    "explanation": "[a] = [L T⁻²] and [t²] = [T²]. Multiplying yields [L T⁻²][T²] = [L], which matches the displacement [s] on the LHS."
                },
                {
                    "id": "m15_q03",
                    "question": "Which of the following operations is physically meaningful according to dimensional analysis?",
                    "options": [
                        "Adding 5 Newtons to 10 Joules",
                        "Subtracting 2 metres from 8 seconds",
                        "Dividing 20 Joules of work by 4 seconds of time",
                        "Adding 3 kilograms to 5 Pascals"
                    ],
                    "answer": "Dividing 20 Joules of work by 4 seconds of time",
                    "explanation": "Quantities with different dimensions cannot be added or subtracted, but they CAN be multiplied or divided to yield new derived quantities (here, Work / Time = Power = 5 W)."
                },
                {
                    "id": "m15_q04",
                    "question": "In the equation v = at + b, if v is velocity and t is time, what must be the dimension of constant b?",
                    "options": [
                        "[L T⁻²]",
                        "[L T⁻¹]",
                        "[L]",
                        "[T]"
                    ],
                    "answer": "[L T⁻¹]",
                    "explanation": "By the Principle of Homogeneity, each term being added must share the dimensions of the LHS. Since [v] = [L T⁻¹], [b] must also be [L T⁻¹]."
                },
                {
                    "id": "m15_q05",
                    "question": "If y = A sin(kx - ω t), what is the dimensional formula of the argument (kx - ω t)?",
                    "options": [
                        "[L]",
                        "[T⁻¹]",
                        "[M⁰ L⁰ T⁰] (Dimensionless)",
                        "[L T⁻¹]"
                    ],
                    "answer": "[M⁰ L⁰ T⁰] (Dimensionless)",
                    "explanation": "The argument of any trigonometric function represents an angle (in radians), which is strictly dimensionless ([M⁰ L⁰ T⁰])."
                },
                {
                    "id": "m15_q06",
                    "question": "Which of the following is a fundamental limitation of dimensional analysis?",
                    "options": [
                        "It cannot determine dimensionless proportionality constants (such as 1/2, 2π)",
                        "It fails if a physical quantity depends on more than three mechanical variables",
                        "It cannot handle equations involving trigonometric or exponential terms",
                        "All of the above are fundamental limitations"
                    ],
                    "answer": "All of the above are fundamental limitations",
                    "explanation": "Dimensional analysis cannot evaluate dimensionless constants, cannot resolve relationships involving more variables than fundamental equations, and cannot derive transcendental relations."
                },
                {
                    "id": "m15_q07",
                    "question": "If an equation is verified to be dimensionally consistent, does it guarantee that the equation is physically correct?",
                    "options": [
                        "Yes, dimensional consistency guarantees physical correctness 100%",
                        "No, it might still have incorrect dimensionless constants or missing additive terms",
                        "No, dimensional analysis only works in astronomy",
                        "Yes, but only for scalar quantities"
                    ],
                    "answer": "No, it might still have incorrect dimensionless constants or missing additive terms",
                    "explanation": "An equation like s = at² is dimensionally consistent ([L] = [L]) but physically incorrect (missing the factor 1/2 and initial velocity ut)."
                },
                {
                    "id": "m15_q08",
                    "question": "If an equation is dimensionally INCONSISTENT, what can be concluded with certainty?",
                    "options": [
                        "It might still be true in relativistic physics",
                        "It is definitely and unconditionally incorrect",
                        "It is correct only in the CGS system",
                        "It can be corrected by multiplying by c"
                    ],
                    "answer": "It is definitely and unconditionally incorrect",
                    "explanation": "Any equation violating the Principle of Homogeneity cannot represent a valid physical law under any circumstances."
                },
                {
                    "id": "m15_q09",
                    "question": "In the relation P = (a - t² / b x), where P is pressure, x is distance, and t is time, what is the dimension of a?",
                    "options": [
                        "[T²]",
                        "[T⁻²]",
                        "[L²]",
                        "[M¹ L⁻¹ T⁻²]"
                    ],
                    "answer": "[T²]",
                    "explanation": "In the numerator (a - t²), a is subtracted from t². By homogeneity, [a] = [t²] = [T²]."
                },
                {
                    "id": "m15_q10",
                    "question": "The time period of a simple pendulum depends on mass m, length l, and gravitational acceleration g. Dimensional analysis reveals that period T is independent of:",
                    "options": [
                        "Length of pendulum l",
                        "Acceleration due to gravity g",
                        "Mass of the bob m",
                        "Both length and gravity"
                    ],
                    "answer": "Mass of the bob m",
                    "explanation": "T = 2π √(l/g). Mass m has exponent 0 ([T] = [M⁰ L⁰ T¹]), proving the period is independent of bob mass."
                }
            ]
        },
        {
            "id": "m16",
            "moduleNumber": 16,
            "title": "Dimensional Formulas in Mechanics",
            "tagline": "Systematic derivations of standard mechanical quantities from fundamental base powers.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>Mechanics forms the bedrock of classical physics. In mechanics, all physical quantities can be expressed solely using the three fundamental dimensions: <strong>Mass [M]</strong>, <strong>Length [L]</strong>, and <strong>Time [T]</strong>.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Derivations of Fundamental Mechanics Quantities</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Physical Quantity</th>\n <th style=\"padding:6px 10px;\">Defining Relation</th>\n <th style=\"padding:6px 10px;\">Step-by-Step Derivation</th>\n <th style=\"padding:6px 10px;\">Standard Dimensional Formula</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Area</strong></td>\n <td style=\"padding:6px 10px;\">Length × Breadth</td>\n <td style=\"padding:6px 10px;\">[L] × [L]</td>\n <td style=\"padding:6px 10px;\">[M⁰ L² T⁰]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Volume</strong></td>\n <td style=\"padding:6px 10px;\">L × B × H</td>\n <td style=\"padding:6px 10px;\">[L] × [L] × [L]</td>\n <td style=\"padding:6px 10px;\">[M⁰ L³ T⁰]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Density</strong></td>\n <td style=\"padding:6px 10px;\">Mass / Volume</td>\n <td style=\"padding:6px 10px;\">[M] / [L³]</td>\n <td style=\"padding:6px 10px;\">[M¹ L⁻³ T⁰]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Speed / Velocity</strong></td>\n <td style=\"padding:6px 10px;\">Distance / Time</td>\n <td style=\"padding:6px 10px;\">[L] / [T]</td>\n <td style=\"padding:6px 10px;\">[M⁰ L¹ T⁻¹]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Acceleration</strong></td>\n <td style=\"padding:6px 10px;\">Velocity / Time</td>\n <td style=\"padding:6px 10px;\">[L T⁻¹] / [T]</td>\n <td style=\"padding:6px 10px;\">[M⁰ L¹ T⁻²]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Force</strong></td>\n <td style=\"padding:6px 10px;\">Mass × Acceleration</td>\n <td style=\"padding:6px 10px;\">[M] × [L T⁻²]</td>\n <td style=\"padding:6px 10px;\">[M¹ L¹ T⁻²]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Linear Momentum</strong></td>\n <td style=\"padding:6px 10px;\">Mass × Velocity</td>\n <td style=\"padding:6px 10px;\">[M] × [L T⁻¹]</td>\n <td style=\"padding:6px 10px;\">[M¹ L¹ T⁻¹]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Impulse</strong></td>\n <td style=\"padding:6px 10px;\">Force × Time</td>\n <td style=\"padding:6px 10px;\">[M L T⁻²] × [T]</td>\n <td style=\"padding:6px 10px;\">[M¹ L¹ T⁻¹]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Work / Energy</strong></td>\n <td style=\"padding:6px 10px;\">Force × Distance</td>\n <td style=\"padding:6px 10px;\">[M L T⁻²] × [L]</td>\n <td style=\"padding:6px 10px;\">[M¹ L² T⁻²]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Power</strong></td>\n <td style=\"padding:6px 10px;\">Work / Time</td>\n <td style=\"padding:6px 10px;\">[M L² T⁻²] / [T]</td>\n <td style=\"padding:6px 10px;\">[M¹ L² T⁻³]</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>Pressure / Stress</strong></td>\n <td style=\"padding:6px 10px;\">Force / Area</td>\n <td style=\"padding:6px 10px;\">[M L T⁻²] / [L²]</td>\n <td style=\"padding:6px 10px;\">[M¹ L⁻¹ T⁻²]</td>\n </tr>\n </tbody>\n </table>\n </div>\n <p>Mastering these foundational formulas allows you to derive almost any complex formula instantly during examinations.</p>\n ",
            "pointsToRemember": [
                "Force is [M¹ L¹ T⁻²]; Linear Momentum and Impulse are both [M¹ L¹ T⁻¹].",
                "Work and Energy (Kinetic, Potential, Mechanical) are all [M¹ L² T⁻²].",
                "Power is rate of work: [M¹ L² T⁻³]; Pressure is force per area: [M¹ L⁻¹ T⁻²]."
            ],
            "keyNotes": [
                "Civil Services Memory Anchor: Remember the 'Big Three' powers for Force ([M L T⁻²]), Work/Energy ([M L² T⁻²]), and Power ([M L² T⁻³])."
            ],
            "questions": [
                {
                    "id": "m16_q01",
                    "question": "What is the dimensional formula of Force?",
                    "options": [
                        "[M¹ L¹ T⁻¹]",
                        "[M¹ L¹ T⁻²]",
                        "[M¹ L² T⁻²]",
                        "[M¹ L⁻¹ T⁻²]"
                    ],
                    "answer": "[M¹ L¹ T⁻²]",
                    "explanation": "Force = Mass × Acceleration = [M] × [L T⁻²] = [M¹ L¹ T⁻²]."
                },
                {
                    "id": "m16_q02",
                    "question": "The dimensional formula [M¹ L² T⁻²] corresponds to which physical quantity?",
                    "options": [
                        "Force",
                        "Power",
                        "Work and Kinetic Energy",
                        "Pressure"
                    ],
                    "answer": "Work and Kinetic Energy",
                    "explanation": "Work = Force × Displacement = [M L T⁻²] × [L] = [M¹ L² T⁻²]. All forms of energy have this exact dimension."
                },
                {
                    "id": "m16_q03",
                    "question": "What is the dimensional formula of Power?",
                    "options": [
                        "[M¹ L² T⁻²]",
                        "[M¹ L² T⁻³]",
                        "[M¹ L¹ T⁻³]",
                        "[M⁰ L² T⁻²]"
                    ],
                    "answer": "[M¹ L² T⁻³]",
                    "explanation": "Power = Work / Time = [M L² T⁻²] / [T] = [M¹ L² T⁻³]."
                },
                {
                    "id": "m16_q04",
                    "question": "What is the dimensional formula of Pressure and Mechanical Stress?",
                    "options": [
                        "[M¹ L⁻¹ T⁻²]",
                        "[M¹ L⁻² T⁻²]",
                        "[M¹ L¹ T⁻²]",
                        "[M⁰ L⁻¹ T⁻²]"
                    ],
                    "answer": "[M¹ L⁻¹ T⁻²]",
                    "explanation": "Pressure = Force / Area = [M L T⁻²] / [L²] = [M¹ L⁻¹ T⁻²]."
                },
                {
                    "id": "m16_q05",
                    "question": "Which pair of physical quantities share the identical dimensional formula [M¹ L¹ T⁻¹]?",
                    "options": [
                        "Force and Torque",
                        "Linear Momentum and Impulse",
                        "Work and Energy",
                        "Pressure and Power"
                    ],
                    "answer": "Linear Momentum and Impulse",
                    "explanation": "Linear momentum p = mv = [M L T⁻¹]; Impulse J = F Δ t = [M L T⁻²][T] = [M L T⁻¹]."
                },
                {
                    "id": "m16_q06",
                    "question": "What is the dimensional formula of volumetric mass density?",
                    "options": [
                        "[M¹ L⁻² T⁰]",
                        "[M¹ L⁻³ T⁰]",
                        "[M⁰ L⁻³ T⁰]",
                        "[M¹ L³ T⁰]"
                    ],
                    "answer": "[M¹ L⁻³ T⁰]",
                    "explanation": "Density = Mass / Volume = [M] / [L³] = [M¹ L⁻³ T⁰]."
                },
                {
                    "id": "m16_q07",
                    "question": "What are the dimensions of linear acceleration?",
                    "options": [
                        "[M⁰ L¹ T⁻¹]",
                        "[M⁰ L¹ T⁻²]",
                        "[M⁰ L² T⁻²]",
                        "[M¹ L¹ T⁻²]"
                    ],
                    "answer": "[M⁰ L¹ T⁻²]",
                    "explanation": "Acceleration = Velocity / Time = [L T⁻¹] / [T] = [M⁰ L¹ T⁻²]."
                },
                {
                    "id": "m16_q08",
                    "question": "Surface mass density is defined as mass per unit area. Its dimensional formula is:",
                    "options": [
                        "[M¹ L⁻¹ T⁰]",
                        "[M¹ L⁻² T⁰]",
                        "[M¹ L⁻³ T⁰]",
                        "[M⁰ L⁻² T⁰]"
                    ],
                    "answer": "[M¹ L⁻² T⁰]",
                    "explanation": "Surface density σ = m / A = [M] / [L²] = [M¹ L⁻² T⁰]."
                },
                {
                    "id": "m16_q09",
                    "question": "Rate of change of acceleration with time is termed 'Jerk'. What is the dimensional formula of Jerk?",
                    "options": [
                        "[M⁰ L¹ T⁻²]",
                        "[M⁰ L¹ T⁻³]",
                        "[M⁰ L¹ T⁻⁴]",
                        "[M¹ L¹ T⁻³]"
                    ],
                    "answer": "[M⁰ L¹ T⁻³]",
                    "explanation": "Jerk = Δ a / Δ t = [L T⁻²] / [T] = [M⁰ L¹ T⁻³]."
                },
                {
                    "id": "m16_q10",
                    "question": "Which of the following physical quantities has NO mass dimension (M⁰)?",
                    "options": [
                        "Velocity",
                        "Acceleration",
                        "Frequency",
                        "All of the above"
                    ],
                    "answer": "All of the above",
                    "explanation": "Velocity ([L T⁻¹]), Acceleration ([L T⁻²]), and Frequency ([T⁻¹]) are all kinematic/temporal quantities with zero mass dimension (M⁰)."
                }
            ]
        },
        {
            "id": "m17",
            "moduleNumber": 17,
            "title": "Advanced Dimensional Formulas in Classical Dynamics",
            "tagline": "Deriving universal constants: Gravitation G, Viscosity η, Surface Tension, and Planck's h.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>In classical dynamics and astrophysics, several critical physical constants govern interactions across planetary systems, fluids, and quantum physics.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Derivations of Advanced Physical Constants & Properties</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Quantity / Constant</th>\n <th style=\"padding:6px 10px;\">Governing Formula</th>\n <th style=\"padding:6px 10px;\">Dimensional Derivation</th>\n <th style=\"padding:6px 10px;\">Standard Dimensional Formula</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Universal Gravitational Constant (G)</strong></td>\n <td style=\"padding:6px 10px;\">F = (G m₁ m₂ / r²) ⟹ G = (F r² / m₁ m₂)</td>\n <td style=\"padding:6px 10px;\">frac{[M L T⁻²] [L²]}{[M][M]} = [M⁻¹ L³ T⁻²]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M⁻¹ L³ T⁻²]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Surface Tension (T)</strong></td>\n <td style=\"padding:6px 10px;\">T = Force / Length</td>\n <td style=\"padding:6px 10px;\">frac{[M L T⁻²]}{[L]} = [M L⁰ T⁻²]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L⁰ T⁻²]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Spring Constant (k)</strong></td>\n <td style=\"padding:6px 10px;\">F = k x ⟹ k = F / x</td>\n <td style=\"padding:6px 10px;\">frac{[M L T⁻²]}{[L]} = [M L⁰ T⁻²]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L⁰ T⁻²]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Coefficient of Viscosity (η)</strong></td>\n <td style=\"padding:6px 10px;\">F = η A (Δ v / Δ x) ⟹ η = (F Δ x / A Δ v)</td>\n <td style=\"padding:6px 10px;\">frac{[M L T⁻²][L]}{[L²][L T⁻¹]} = [M L⁻¹ T⁻¹]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L⁻¹ T⁻¹]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Planck's Constant (h)</strong></td>\n <td style=\"padding:6px 10px;\">E = h ν ⟹ h = E / ν</td>\n <td style=\"padding:6px 10px;\">frac{[M L² T⁻²]}{[T⁻¹]} = [M L² T⁻¹]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L² T⁻¹]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Angular Momentum (L)</strong></td>\n <td style=\"padding:6px 10px;\">L = m v r</td>\n <td style=\"padding:6px 10px;\">[M] × [L T⁻¹] × [L] = [M L² T⁻¹]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L² T⁻¹]}</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>Moment of Inertia (I)</strong></td>\n <td style=\"padding:6px 10px;\">I = m r²</td>\n <td style=\"padding:6px 10px;\">[M] × [L²]</td>\n <td style=\"padding:6px 10px;\">[M¹ L² T⁰]</td>\n </tr>\n </tbody>\n </table>\n </div>\n <p>Notice that <strong>Planck's Constant (h)</strong> and <strong>Angular Momentum (L)</strong> share the exact same dimensional formula: [M¹ L² T⁻¹]! This profound connection underpins Niels Bohr's quantum postulate that atomic angular momentum is quantized in integer multiples of h / 2π.</p>\n ",
            "pointsToRemember": [
                "Gravitational constant G is [M⁻¹ L³ T⁻²]; SI unit is N·m²/kg².",
                "Surface Tension and Spring Constant both share [M¹ L⁰ T⁻²].",
                "Coefficient of Viscosity η is [M¹ L⁻¹ T⁻¹]; SI unit is Pa·s or Poiseuille.",
                "Planck's constant h and Angular Momentum L share the exact same dimension: [M¹ L² T⁻¹]."
            ],
            "keyNotes": [
                "Civil Services Hall-of-Fame MCQ: Which two quantities have identical dimensions? (A) Planck's constant and Angular momentum ([M L² T⁻¹]); (B) Surface tension and Spring constant ([M L⁰ T⁻²])."
            ],
            "questions": [
                {
                    "id": "m17_q01",
                    "question": "What is the dimensional formula of the Universal Gravitational Constant (G)?",
                    "options": [
                        "[M⁻¹ L³ T⁻²]",
                        "[M¹ L³ T⁻²]",
                        "[M⁻¹ L² T⁻²]",
                        "[M¹ L² T⁻¹]"
                    ],
                    "answer": "[M⁻¹ L³ T⁻²]",
                    "explanation": "From Newton's law: G = F r² / m² = ([M L T⁻²][L²]) / [M²] = [M⁻¹ L³ T⁻²]."
                },
                {
                    "id": "m17_q02",
                    "question": "Planck's Constant (h) has the exact same dimensional formula as which physical quantity?",
                    "options": [
                        "Linear Momentum",
                        "Angular Momentum",
                        "Torque",
                        "Power"
                    ],
                    "answer": "Angular Momentum",
                    "explanation": "Planck's constant h = E / ν = [M L² T⁻²] / [T⁻¹] = [M L² T⁻¹], which is identical to angular momentum L = mvr = [M L² T⁻¹]."
                },
                {
                    "id": "m17_q03",
                    "question": "What is the dimensional formula for the Coefficient of Viscosity (η)?",
                    "options": [
                        "[M¹ L¹ T⁻¹]",
                        "[M¹ L⁻¹ T⁻¹]",
                        "[M¹ L⁻¹ T⁻²]",
                        "[M¹ L⁰ T⁻²]"
                    ],
                    "answer": "[M¹ L⁻¹ T⁻¹]",
                    "explanation": "From Newton's viscous force law: η = (F · dx) / (A · dv) = ([M L T⁻²][L]) / ([L²][L T⁻¹]) = [M¹ L⁻¹ T⁻¹]."
                },
                {
                    "id": "m17_q04",
                    "question": "Which of the following quantities has the dimensional formula [M¹ L⁰ T⁻²]?",
                    "options": [
                        "Surface Tension",
                        "Spring Constant (Force Constant)",
                        "Surface Energy per unit area",
                        "All of the above"
                    ],
                    "answer": "All of the above",
                    "explanation": "Surface Tension (F/L), Spring Constant (F/x), and Surface Energy (E/A) all reduce to [M¹ L⁰ T⁻²]."
                },
                {
                    "id": "m17_q05",
                    "question": "What is the SI unit of the Coefficient of Viscosity?",
                    "options": [
                        "Pascal",
                        "Pascal-second (Pa·s)",
                        "Newton per metre",
                        "Joule per second"
                    ],
                    "answer": "Pascal-second (Pa·s)",
                    "explanation": "The SI unit is Pa·s (or Poiseuille). Note: 1 Pa·s = 10 poise (CGS unit)."
                },
                {
                    "id": "m17_q06",
                    "question": "What is the dimensional formula of Moment of Inertia?",
                    "options": [
                        "[M¹ L¹ T⁰]",
                        "[M¹ L² T⁰]",
                        "[M¹ L² T⁻¹]",
                        "[M¹ L⁰ T²]"
                    ],
                    "answer": "[M¹ L² T⁰]",
                    "explanation": "Moment of inertia I = m r² = [M][L²] = [M¹ L² T⁰]."
                },
                {
                    "id": "m17_q07",
                    "question": "Torque has the dimensional formula [M¹ L² T⁻²]. Which other quantity shares this dimension but is a SCALAR?",
                    "options": [
                        "Work / Energy",
                        "Linear Momentum",
                        "Force",
                        "Angular Momentum"
                    ],
                    "answer": "Work / Energy",
                    "explanation": "Both Torque and Work have dimensions [M L² T⁻²], but Torque is an axial vector whereas Work/Energy is a scalar."
                },
                {
                    "id": "m17_q08",
                    "question": "What is the numerical value of Planck's Constant (h) in SI units?",
                    "options": [
                        "6.626 × 10⁻³⁴ J·s",
                        "6.674 × 10⁻¹¹ N·m²/kg²",
                        "1.602 × 10⁻¹⁹ C",
                        "1.381 × 10⁻²³ J/K"
                    ],
                    "answer": "6.626 × 10⁻³⁴ J·s",
                    "explanation": "h = 6.62607015 × 10⁻³⁴ J·s."
                },
                {
                    "id": "m17_q09",
                    "question": "What is the numerical value and unit of the Universal Gravitational Constant (G)?",
                    "options": [
                        "9.8 m/s²",
                        "6.674 × 10⁻¹¹ N·m²/kg²",
                        "3.0 × 10⁸ m/s",
                        "6.023 × 10²³ mol⁻¹"
                    ],
                    "answer": "6.674 × 10⁻¹¹ N·m²/kg²",
                    "explanation": "First measured by Henry Cavendish, G ≈ 6.674 × 10⁻¹¹ N·m²/kg²."
                },
                {
                    "id": "m17_q10",
                    "question": "Modulus of Rigidity (Shear Modulus η) has the dimensional formula:",
                    "options": [
                        "[M¹ L⁻¹ T⁻²]",
                        "[M¹ L⁰ T⁻²]",
                        "[M¹ L¹ T⁻²]",
                        "[M⁰ L⁰ T⁰]"
                    ],
                    "answer": "[M¹ L⁻¹ T⁻²]",
                    "explanation": "All elastic moduli (Young's, Bulk, Shear) are Stress / Strain = [M L⁻¹ T⁻²] / 1 = [M¹ L⁻¹ T⁻²]."
                }
            ]
        },
        {
            "id": "m18",
            "moduleNumber": 18,
            "title": "Dimensional Formulas in Thermal Physics & Electromagnetism",
            "tagline": "Extending base dimensions to include Temperature [K] and Electric Current [A].",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>When analyzing heat, thermodynamics, and electrical circuits, we introduce two additional base dimensions: <strong>Temperature [K]</strong> (or [θ]) and <strong>Electric Current [A]</strong> (or [I]).</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Thermal & Electromagnetism Dimensional Formulas</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Physical Quantity</th>\n <th style=\"padding:6px 10px;\">Defining Formula</th>\n <th style=\"padding:6px 10px;\">Dimensional Derivation</th>\n <th style=\"padding:6px 10px;\">Dimensional Formula</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Specific Heat Capacity (s)</strong></td>\n <td style=\"padding:6px 10px;\">Q = m s Δ T ⟹ s = (Q / m Δ T)</td>\n <td style=\"padding:6px 10px;\">frac{[M L² T⁻²]}{[M][K]} = [L² T⁻² K⁻¹]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M⁰ L² T⁻² K⁻¹]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Latent Heat (L)</strong></td>\n <td style=\"padding:6px 10px;\">Q = m L ⟹ L = Q / m</td>\n <td style=\"padding:6px 10px;\">frac{[M L² T⁻²]}{[M]} = [L² T⁻²]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M⁰ L² T⁻²]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Universal Gas Constant (R)</strong></td>\n <td style=\"padding:6px 10px;\">P V = n R T ⟹ R = (P V / n T)</td>\n <td style=\"padding:6px 10px;\">frac{[M L⁻¹ T⁻²][L³]}{[mol][K]} = [M L² T⁻² K⁻¹ mol⁻¹]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L² T⁻² K⁻¹ mol⁻¹]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Electric Charge (Q)</strong></td>\n <td style=\"padding:6px 10px;\">Q = I × t</td>\n <td style=\"padding:6px 10px;\">[A] × [T]</td>\n <td style=\"padding:6px 10px;\">[M⁰ L⁰ T¹ A¹]</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Electric Potential (V)</strong></td>\n <td style=\"padding:6px 10px;\">V = Work / Charge = W / Q</td>\n <td style=\"padding:6px 10px;\">frac{[M L² T⁻²]}{[A T]} = [M L² T⁻³ A⁻¹]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L² T⁻³ A⁻¹]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Electrical Resistance (R)</strong></td>\n <td style=\"padding:6px 10px;\">R = V / I (Ohm's Law)</td>\n <td style=\"padding:6px 10px;\">frac{[M L² T⁻³ A⁻¹]}{[A]} = [M L² T⁻³ A⁻²]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L² T⁻³ A⁻²]}</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>Capacitance (C)</strong></td>\n <td style=\"padding:6px 10px;\">C = Q / V</td>\n <td style=\"padding:6px 10px;\">frac{[A T]}{[M L² T⁻³ A⁻¹]} = [M⁻¹ L⁻² T⁴ A²]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M⁻¹ L⁻² T⁴ A²]}</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>Magnetic Flux (Φ)</strong></td>\n <td style=\"padding:6px 10px;\">e = -(dΦ / dt) ⟹ Φ = V × t</td>\n <td style=\"padding:6px 10px;\">[M L² T⁻³ A⁻¹] × [T]</td>\n <td style=\"padding:6px 10px;\">mathbf{[M¹ L² T⁻² A⁻¹]}</td>\n </tr>\n </tbody>\n </table>\n </div>\n <p>Notice how Faraday's Law of Induction (e = -dΦ/dt) reveals that Magnetic Flux is simply <strong>Voltage × Time</strong> ([M L² T⁻² A⁻¹]), yielding the Weber (Wb = V·s).</p>\n ",
            "pointsToRemember": [
                "Electric Charge Q = I t has dimensions [A¹ T¹]; Electric Potential V = W/Q is [M¹ L² T⁻³ A⁻¹].",
                "Electrical Resistance R = V/I is [M¹ L² T⁻³ A⁻²].",
                "Specific Heat Capacity is [M⁰ L² T⁻² K⁻¹], whereas Latent Heat is [M⁰ L² T⁻²] (no temperature dimension).",
                "Magnetic Flux Φ = V × t is [M¹ L² T⁻² A⁻¹] (Weber)."
            ],
            "keyNotes": [
                "Quick Rule: Latent heat has NO temperature dimension ([L² T⁻²]) because phase change occurs at constant temperature!"
            ],
            "questions": [
                {
                    "id": "m18_q01",
                    "question": "What is the dimensional formula of Electric Potential (Voltage)?",
                    "options": [
                        "[M¹ L² T⁻³ A⁻¹]",
                        "[M¹ L² T⁻² A⁻¹]",
                        "[M¹ L¹ T⁻³ A⁻¹]",
                        "[M¹ L² T⁻³ A⁻²]"
                    ],
                    "answer": "[M¹ L² T⁻³ A⁻¹]",
                    "explanation": "Potential V = Work / Charge = [M L² T⁻²] / [A T] = [M¹ L² T⁻³ A⁻¹]."
                },
                {
                    "id": "m18_q02",
                    "question": "What is the dimensional formula of Electrical Resistance (R)?",
                    "options": [
                        "[M¹ L² T⁻³ A⁻¹]",
                        "[M¹ L² T⁻³ A⁻²]",
                        "[M¹ L¹ T⁻² A⁻²]",
                        "[M⁻¹ L⁻² T³ A²]"
                    ],
                    "answer": "[M¹ L² T⁻³ A⁻²]",
                    "explanation": "From Ohm's law: R = V / I = [M L² T⁻³ A⁻¹] / [A] = [M¹ L² T⁻³ A⁻²]."
                },
                {
                    "id": "m18_q03",
                    "question": "Why does the dimensional formula of Latent Heat contain no temperature term ([K⁰])?",
                    "options": [
                        "Because latent heat cannot be measured with thermometers",
                        "Because phase transitions (melting/boiling) occur at a constant temperature without temperature change",
                        "Because heat has no dimension",
                        "Because latent heat only occurs in liquids"
                    ],
                    "answer": "Because phase transitions (melting/boiling) occur at a constant temperature without temperature change",
                    "explanation": "Latent heat L = Q / m involves no Δ T. Its dimension is strictly Energy / Mass = [L² T⁻²]."
                },
                {
                    "id": "m18_q04",
                    "question": "What is the dimensional formula of Specific Heat Capacity?",
                    "options": [
                        "[M⁰ L² T⁻² K⁻¹]",
                        "[M¹ L² T⁻² K⁻¹]",
                        "[M⁰ L¹ T⁻² K⁻¹]",
                        "[M⁰ L² T⁻¹ K⁻¹]"
                    ],
                    "answer": "[M⁰ L² T⁻² K⁻¹]",
                    "explanation": "s = Q / (m Δ T) = [M L² T⁻²] / ([M][K]) = [M⁰ L² T⁻² K⁻¹]."
                },
                {
                    "id": "m18_q05",
                    "question": "What is the dimensional formula of Capacitance (C = Q / V)?",
                    "options": [
                        "[M⁻¹ L⁻² T⁴ A²]",
                        "[M¹ L² T⁻⁴ A⁻²]",
                        "[M⁻¹ L⁻² T² A¹]",
                        "[M⁰ L⁰ T¹ A¹]"
                    ],
                    "answer": "[M⁻¹ L⁻² T⁴ A²]",
                    "explanation": "C = Q / V = [A T] / [M L² T⁻³ A⁻¹] = [M⁻¹ L⁻² T⁴ A²]."
                },
                {
                    "id": "m18_q06",
                    "question": "The Weber is the SI unit of Magnetic Flux (Φ). Its dimensional formula is:",
                    "options": [
                        "[M¹ L² T⁻² A⁻¹]",
                        "[M¹ L¹ T⁻² A⁻¹]",
                        "[M¹ L² T⁻³ A⁻¹]",
                        "[M⁰ L² T⁻² A⁻¹]"
                    ],
                    "answer": "[M¹ L² T⁻² A⁻¹]",
                    "explanation": "From Faraday's law, Φ = Voltage × Time = [M L² T⁻³ A⁻¹][T] = [M¹ L² T⁻² A⁻¹]."
                },
                {
                    "id": "m18_q07",
                    "question": "What is the dimensional formula of the Universal Gas Constant (R)?",
                    "options": [
                        "[M¹ L² T⁻² K⁻¹ mol⁻¹]",
                        "[M¹ L¹ T⁻² K⁻¹ mol⁻¹]",
                        "[M⁰ L² T⁻² K⁻¹]",
                        "[M¹ L² T⁻³ K⁻¹]"
                    ],
                    "answer": "[M¹ L² T⁻² K⁻¹ mol⁻¹]",
                    "explanation": "From P V = n R T: R = (PV) / (nT) = Work / (moles × temp) = [M¹ L² T⁻² K⁻¹ mol⁻¹]."
                },
                {
                    "id": "m18_q08",
                    "question": "What is the dimensional formula of Electric Charge (Q)?",
                    "options": [
                        "[A¹ T¹]",
                        "[A¹ T⁻¹]",
                        "[M¹ A¹ T¹]",
                        "[A¹ T²]"
                    ],
                    "answer": "[A¹ T¹]",
                    "explanation": "Charge = Current × Time = [A T] (or [I T])."
                },
                {
                    "id": "m18_q09",
                    "question": "Electrical Conductance (G) is the reciprocal of electrical resistance (G = 1/R). Its unit Siemens has dimensions:",
                    "options": [
                        "[M⁻¹ L⁻² T³ A²]",
                        "[M¹ L² T⁻³ A⁻²]",
                        "[M⁻¹ L⁻¹ T² A¹]",
                        "[M⁰ L⁰ T⁰ A¹]"
                    ],
                    "answer": "[M⁻¹ L⁻² T³ A²]",
                    "explanation": "Inverting the dimensions of resistance [M¹ L² T⁻³ A⁻²] gives [M⁻¹ L⁻² T³ A²]."
                },
                {
                    "id": "m18_q10",
                    "question": "What are the dimensions of Boltzmann's Constant (k_B = R / N_A)?",
                    "options": [
                        "[M¹ L² T⁻² K⁻¹]",
                        "[M⁰ L² T⁻² K⁻¹]",
                        "[M¹ L¹ T⁻² K⁻¹]",
                        "[M¹ L² T⁻¹ K⁻¹]"
                    ],
                    "answer": "[M¹ L² T⁻² K⁻¹]",
                    "explanation": "Energy E = k_B T ⟹ k_B = E / T = [M L² T⁻²] / [K] = [M¹ L² T⁻² K⁻¹]."
                }
            ]
        },
        {
            "id": "m19",
            "moduleNumber": 19,
            "title": "Physical Quantities Sharing Identical Dimensions",
            "tagline": "Mastering high-yield exam clusters of quantities with identical dimensional formulas.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>A recurring topic in Civil Services preliminary examinations is identifying pairs of physical quantities that share identical dimensional formulas despite having completely different physical meanings or vector natures.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Taxonomy of Quantities Having Identical Dimensions</h4>\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <thead>\n <tr style=\"background:#f1f5f9; border-bottom:2px solid #cbd5e1;\">\n <th style=\"padding:6px 10px;\">Shared Dimensional Formula</th>\n <th style=\"padding:6px 10px;\">Physical Quantities in this Cluster</th>\n <th style=\"padding:6px 10px;\">Key Physical Nuances</th>\n </tr>\n </thead>\n <tbody>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M⁰ L¹ T⁻¹]</strong></td>\n <td style=\"padding:6px 10px;\">Speed, Velocity</td>\n <td style=\"padding:6px 10px;\">Speed is scalar; Velocity is vector</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M¹ L¹ T⁻²]</strong></td>\n <td style=\"padding:6px 10px;\">Force, Weight, Thrust, Tension, Frictional Force, Restoring Force, Centripetal Force</td>\n <td style=\"padding:6px 10px;\">All representations of mechanical and field forces</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M¹ L² T⁻²]</strong></td>\n <td style=\"padding:6px 10px;\">Work, Kinetic Energy, Potential Energy, Heat, Torque (Moment of Force), Internal Energy</td>\n <td style=\"padding:6px 10px;\">Torque is an axial vector; Work, Heat, and Energy are scalars!</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M¹ L⁻¹ T⁻²]</strong></td>\n <td style=\"padding:6px 10px;\">Pressure, Mechanical Stress, Young's Modulus, Bulk Modulus, Shear Modulus, Energy Density</td>\n <td style=\"padding:6px 10px;\">Energy density = Energy/Volume = [M L² T⁻²]/[L³] = [M L⁻¹ T⁻²] (identical to Pressure)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M¹ L¹ T⁻¹]</strong></td>\n <td style=\"padding:6px 10px;\">Linear Momentum, Impulse</td>\n <td style=\"padding:6px 10px;\">Impulse is the integral of force over time (Δ p)</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M¹ L⁰ T⁻²]</strong></td>\n <td style=\"padding:6px 10px;\">Surface Tension, Spring Constant (Force Constant), Surface Energy per unit area</td>\n <td style=\"padding:6px 10px;\">Force per length or Energy per area</td>\n </tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\">\n <td style=\"padding:6px 10px;\"><strong>[M¹ L² T⁻¹]</strong></td>\n <td style=\"padding:6px 10px;\">Angular Momentum, Planck's Constant (h)</td>\n <td style=\"padding:6px 10px;\">Quantum angular momentum is quantized as n(h/2π)</td>\n </tr>\n <tr>\n <td style=\"padding:6px 10px;\"><strong>[M⁰ L⁰ T⁻¹]</strong></td>\n <td style=\"padding:6px 10px;\">Frequency, Angular Frequency (ω), Angular Velocity, Radioactive Decay Constant (λ)</td>\n <td style=\"padding:6px 10px;\">All represent inverse time periods (1/T)</td>\n </tr>\n </tbody>\n </table>\n </div>\n <div style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n <strong>💡 Surprising Identity — Pressure vs Energy Density:</strong>\n <p style=\"margin:4px 0 0 0; line-height:1.6;\">\n Energy Density = frac{Energy}{Volume} = frac{[M L² T⁻²]}{[L³]} = [M L⁻¹ T⁻²]\n Notice that Energy Density has the exact same dimensions as <strong>Pressure</strong>! In fluid mechanics and relativistic cosmology, pressure literally acts as an energy density.\n </p>\n </div>\n ",
            "pointsToRemember": [
                "Torque, Work, and Energy share [M¹ L² T⁻²] (Torque is vector; Work/Energy are scalars).",
                "Pressure, Stress, and all Moduli of Elasticity share [M¹ L⁻¹ T⁻²]; Energy Density also has this exact formula!",
                "Planck's Constant and Angular Momentum share [M¹ L² T⁻¹].",
                "Surface Tension and Spring Constant share [M¹ L⁰ T⁻²]."
            ],
            "keyNotes": [
                "Civil Services Hall-of-Fame Match: Frequency, Angular Velocity, and Radioactive Decay Constant all share [T⁻¹]."
            ],
            "questions": [
                {
                    "id": "m19_q01",
                    "question": "Which of the following pairs of physical quantities does NOT have identical dimensions?",
                    "options": [
                        "Torque and Work",
                        "Impulse and Momentum",
                        "Pressure and Young's Modulus",
                        "Force and Surface Tension"
                    ],
                    "answer": "Force and Surface Tension",
                    "explanation": "Force is [M L T⁻²], whereas Surface Tension is Force / Length = [M L⁰ T⁻²]. They do not match."
                },
                {
                    "id": "m19_q02",
                    "question": "Energy Density (energy per unit volume) has the identical dimensional formula as which physical quantity?",
                    "options": [
                        "Power",
                        "Pressure",
                        "Force",
                        "Acceleration"
                    ],
                    "answer": "Pressure",
                    "explanation": "Energy Density = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²], which is identical to Pressure (F/A = [M L⁻¹ T⁻²])."
                },
                {
                    "id": "m19_q03",
                    "question": "Which physical quantity has the same dimensions as Planck's constant (h)?",
                    "options": [
                        "Linear momentum",
                        "Angular momentum",
                        "Torque",
                        "Energy"
                    ],
                    "answer": "Angular momentum",
                    "explanation": "Both Planck's constant and angular momentum share [M¹ L² T⁻¹]."
                },
                {
                    "id": "m19_q04",
                    "question": "The Spring Constant k has identical dimensions to which property of liquids?",
                    "options": [
                        "Viscosity",
                        "Surface Tension",
                        "Density",
                        "Pressure"
                    ],
                    "answer": "Surface Tension",
                    "explanation": "Spring constant k = F/x = [M L⁰ T⁻²]; Surface tension T = F/L = [M L⁰ T⁻²]."
                },
                {
                    "id": "m19_q05",
                    "question": "Which group of quantities all share the dimensional formula [T⁻¹]?",
                    "options": [
                        "Frequency, Angular Velocity, Radioactive Decay Constant",
                        "Time Period, Wavelength, Speed",
                        "Velocity, Acceleration, Force",
                        "Half-life, Mean Life, Period"
                    ],
                    "answer": "Frequency, Angular Velocity, Radioactive Decay Constant",
                    "explanation": "Frequency (1/T), Angular velocity (rad/s), and Decay constant (activity equation dN/dt = -λ N) all share [T⁻¹]."
                },
                {
                    "id": "m19_q06",
                    "question": "What is the common dimensional formula for Young's Modulus, Bulk Modulus, and Shear Modulus?",
                    "options": [
                        "[M¹ L¹ T⁻²]",
                        "[M¹ L⁻¹ T⁻²]",
                        "[M¹ L² T⁻²]",
                        "[M⁰ L⁰ T⁰]"
                    ],
                    "answer": "[M¹ L⁻¹ T⁻²]",
                    "explanation": "Modulus = Stress / Strain. Since strain is dimensionless, modulus has the dimensions of Stress/Pressure: [M¹ L⁻¹ T⁻²]."
                },
                {
                    "id": "m19_q07",
                    "question": "Although Torque and Mechanical Work have identical dimensions ([M L² T⁻²]), what is the fundamental difference between them?",
                    "options": [
                        "Work is a scalar, whereas Torque is an axial vector",
                        "Work is in Watts, Torque is in Joules",
                        "Torque has no physical dimensions",
                        "Work can never be negative"
                    ],
                    "answer": "Work is a scalar, whereas Torque is an axial vector",
                    "explanation": "Work is a scalar (W = F · d in Joules); Torque is a rotational vector (vec{τ} = r × F in N·m)."
                },
                {
                    "id": "m19_q08",
                    "question": "Which of the following does NOT belong to the Force cluster ([M L T⁻²])?",
                    "options": [
                        "Thrust",
                        "Weight",
                        "Surface Tension",
                        "Tension in a string"
                    ],
                    "answer": "Surface Tension",
                    "explanation": "Surface tension is Force / Length ([M L⁰ T⁻²]). Thrust, Weight, and Tension are all true forces ([M L T⁻²])."
                },
                {
                    "id": "m19_q09",
                    "question": "The quantity √(L / g) (where L is length and g is gravitational acceleration) has the dimensions of:",
                    "options": [
                        "Velocity",
                        "Acceleration",
                        "Time",
                        "Frequency"
                    ],
                    "answer": "Time",
                    "explanation": "sqrt{[L] / [L T⁻²]} = √([T²]) = [T] (Time period of pendulum T = 2π √(L/g))."
                },
                {
                    "id": "m19_q10",
                    "question": "What are the dimensions of the product of Resistance and Capacitance (R × C)?",
                    "options": [
                        "[M¹ L² T⁻¹]",
                        "[T] (Time)",
                        "[T⁻¹] (Frequency)",
                        "[A¹ T¹] (Charge)"
                    ],
                    "answer": "[T] (Time)",
                    "explanation": "RC is the time constant of a capacitive circuit. [R][C] = [M L² T⁻³ A⁻²] × [M⁻¹ L⁻² T⁴ A²] = [T]."
                }
            ]
        },
        {
            "id": "m20",
            "moduleNumber": 20,
            "title": "Dimensionless Quantities & Precision Measuring Instruments",
            "tagline": "Pure numerical ratios in nature and the classical instruments used to measure them.",
            "readingTimeMins": 5,
            "theoryHtml": "\n <p>A <strong>Dimensionless Physical Quantity</strong> is one whose dimensional formula has all base powers equal to zero: <strong>[M⁰ L⁰ T⁰]</strong>. These quantities represent pure numerical ratios where units of identical physical nature cancel out.</p>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin:14px 0;\">\n <h4 style=\"margin:0 0 10px 0; color:#1e3a8a; font-size:14px;\">Master Catalog of Dimensionless Quantities in Physics</h4>\n <ul style=\"margin:6px 0 12px 20px; line-height:1.6; font-size:13px;\">\n <li><strong>Plane Angle & Solid Angle:</strong> Radians and Steradians (have units, but [M⁰ L⁰ T⁰]).</li>\n <li><strong>Mechanical Strain:</strong> Δ L / L (Linear), Δ V / V (Volumetric), Δ x / L (Shear).</li>\n <li><strong>Poisson's Ratio (σ):</strong> Ratio of lateral strain to longitudinal strain.</li>\n <li><strong>Relative Density / Specific Gravity:</strong> Density of substance / Density of pure water at 4°C.</li>\n <li><strong>Refractive Index (n or μ):</strong> Ratio of speed of light in vacuum to speed in medium (c / v).</li>\n <li><strong>Relative Permittivity (Dielectric Constant κ) & Relative Permeability (μ_r).</strong></li>\n <li><strong>Mach Number:</strong> Speed of object / Speed of sound in medium (>1 Supersonic, >5 Hypersonic).</li>\n <li><strong>Reynolds Number (Re):</strong> Ratio of inertial forces to viscous forces in fluid flow (Re = ρ v D / η).</li>\n <li><strong>Coefficient of Friction (μ):</strong> Frictional Force / Normal Reaction (F_f / N).</li>\n <li><strong>Relative Humidity:</strong> Partial water vapor pressure / Saturation vapor pressure.</li>\n </ul>\n </div>\n <h4 style=\"color:#1e3a8a; margin:14px 0 6px 0;\">Precision Scientific Instruments in General Physics:</h4>\n <div style=\"background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px; margin:10px 0;\">\n <table style=\"width:100%; border-collapse:collapse; font-size:13px; text-align:left;\">\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Vernier Caliper</strong></td><td style=\"padding:5px 8px;\">Measures internal/external diameters & depths down to 0.1 mm = 0.01 cm.</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Micrometer Screw Gauge</strong></td><td style=\"padding:5px 8px;\">Measures thin wires and sheet thickness down to 0.01 mm = 0.001 cm = 10μm.</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Spherometer</strong></td><td style=\"padding:5px 8px;\">Measures radius of curvature of spherical optical surfaces (lenses/mirrors).</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Barometer</strong></td><td style=\"padding:5px 8px;\">Measures atmospheric air pressure (Torricelli mercury barometer).</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Pyrometer</strong></td><td style=\"padding:5px 8px;\">Measures extremely high temperatures remotely via radiation (e.g., surface of the Sun).</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Lactometer</strong></td><td style=\"padding:5px 8px;\">Measures purity and specific gravity of milk based on Archimedes' principle.</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Anemometer</strong></td><td style=\"padding:5px 8px;\">Measures wind speed and aerodynamic velocity.</td></tr>\n <tr style=\"border-bottom:1px solid #e2e8f0;\"><td style=\"padding:5px 8px;\"><strong>Hygrometer</strong></td><td style=\"padding:5px 8px;\">Measures relative humidity and moisture content in the atmosphere.</td></tr>\n <tr><td style=\"padding:5px 8px;\"><strong>Fathometer</strong></td><td style=\"padding:5px 8px;\">Measures oceanic depth using acoustic echo sounding.</td></tr>\n </table>\n </div>\n ",
            "pointsToRemember": [
                "Dimensionless quantities have formula [M⁰ L⁰ T⁰]; they represent pure ratios (Strain, Poisson's ratio, Refractive index, Relative density, Mach number, Reynolds number).",
                "Vernier caliper least count is typically 0.1 mm; Screw gauge least count is 0.01 mm.",
                "Pyrometer measures extremely high temperatures without contact via Stefan-Boltzmann radiation law; Barometer measures atmospheric pressure."
            ],
            "keyNotes": [
                "Civil Services Rapid-Fire Pairings: Lactometer → Milk purity/density; Hygrometer → Humidity; Pyrometer → High temperatures (>800^°C); Fathometer → Ocean depth."
            ],
            "questions": [
                {
                    "id": "m20_q01",
                    "question": "Which of the following physical quantities is completely dimensionless ([M⁰ L⁰ T⁰])?",
                    "options": [
                        "Mechanical Strain",
                        "Refractive Index",
                        "Relative Density",
                        "All of the above"
                    ],
                    "answer": "All of the above",
                    "explanation": "Strain (Δ L / L), Refractive Index (c/v), and Relative Density (ρ / ρ_{water}) are all pure numerical ratios with no physical dimensions."
                },
                {
                    "id": "m20_q02",
                    "question": "Which scientific instrument is specifically designed to measure extremely high temperatures (above 800^°C) without physical contact?",
                    "options": [
                        "Clinical thermometer",
                        "Optical Pyrometer",
                        "Barometer",
                        "Bolometer"
                    ],
                    "answer": "Optical Pyrometer",
                    "explanation": "A pyrometer measures temperature remotely by analyzing the thermal radiation emitted by a glowing hot object based on Stefan-Boltzmann law."
                },
                {
                    "id": "m20_q03",
                    "question": "What is the typical Least Count of a standard laboratory Vernier Caliper?",
                    "options": [
                        "1.0 mm",
                        "0.1 mm (0.01 cm)",
                        "0.01 mm (0.001 cm)",
                        "0.001 mm"
                    ],
                    "answer": "0.1 mm (0.01 cm)",
                    "explanation": "Least Count = 1 MSD - 1 VSD = 1 mm - 0.9 mm = 0.1 mm = 0.01 cm."
                },
                {
                    "id": "m20_q04",
                    "question": "What is the typical Least Count of a standard Micrometer Screw Gauge?",
                    "options": [
                        "0.1 mm",
                        "0.01 mm (10μm)",
                        "0.001 mm",
                        "1.0 cm"
                    ],
                    "answer": "0.01 mm (10μm)",
                    "explanation": "Least count of a screw gauge = Pitch / Total head divisions = 1 mm / 100 = 0.01 mm = 10μm."
                },
                {
                    "id": "m20_q05",
                    "question": "Which instrument measures relative humidity in the atmosphere?",
                    "options": [
                        "Hydrometer",
                        "Hygrometer",
                        "Barometer",
                        "Anemometer"
                    ],
                    "answer": "Hygrometer",
                    "explanation": "A Hygrometer measures atmospheric moisture/humidity. (Note: A Hydrometer measures the relative density of liquids)."
                },
                {
                    "id": "m20_q06",
                    "question": "The purity of milk is tested using a Lactometer, which operates on which physical principle?",
                    "options": [
                        "Bernoulli's theorem",
                        "Archimedes' principle of buoyancy",
                        "Pascal's law",
                        "Newton's law of cooling"
                    ],
                    "answer": "Archimedes' principle of buoyancy",
                    "explanation": "A lactometer is a specialized hydrometer that floats in milk according to Archimedes' principle, measuring its specific gravity."
                },
                {
                    "id": "m20_q07",
                    "question": "What does the Mach Number measure in aerodynamics?",
                    "options": [
                        "Speed of an aircraft relative to the speed of sound",
                        "Altitude above sea level",
                        "Rate of fuel consumption",
                        "Turbulence intensity"
                    ],
                    "answer": "Speed of an aircraft relative to the speed of sound",
                    "explanation": "Mach Number is the ratio of object speed to the speed of sound (v / v_{sound}). Mach > 1 denotes supersonic flight."
                },
                {
                    "id": "m20_q08",
                    "question": "In fluid dynamics, the Reynolds Number (Re) predicts:",
                    "options": [
                        "Whether fluid flow will be smooth laminar or chaotic turbulent",
                        "The boiling temperature of water",
                        "The atmospheric pressure at high altitude",
                        "The magnetic permeability of liquid oxygen"
                    ],
                    "answer": "Whether fluid flow will be smooth laminar or chaotic turbulent",
                    "explanation": "Reynolds number compares inertial to viscous forces; low Re (<2000) signifies laminar flow, while high Re (>4000) signifies turbulent flow."
                },
                {
                    "id": "m20_q09",
                    "question": "Which instrument is used to measure oceanic depth?",
                    "options": [
                        "Altimeter",
                        "Fathometer",
                        "Chronometer",
                        "Galvanometer"
                    ],
                    "answer": "Fathometer",
                    "explanation": "A Fathometer uses sound pulses (echo sounding) to measure ocean depth (1 fathom = 6 feet = 1.8288 m)."
                },
                {
                    "id": "m20_q10",
                    "question": "Which instrument is used by meteorologists to measure wind speed?",
                    "options": [
                        "Barometer",
                        "Anemometer",
                        "Speedometer",
                        "Odometer"
                    ],
                    "answer": "Anemometer",
                    "explanation": "An anemometer (cup anemometer) measures wind velocity and force in weather observation stations."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_1_PHYSICS;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_1_PHYSICS;
}
