/* =============================================================================
   ELITE CLASSES — CIVIL SERVICES: CHEMISTRY REVISION COURSE
   CHAPTER 2: STATES OF MATTER, GAS LAWS, SOLUTIONS & COLLOIDAL SYSTEMS
   - Exactly 20 Progressive Mini-Modules
   - 10 High-Yield Conceptual MCQs per Module (200 MCQs total)
   - 70% Mastery Progressive Unlocking Threshold
   - Complete Pedagogical Standard Notes & Chemical Equation Analyses
   ============================================================================= */

const COURSE_CHAPTER_2_CHEMISTRY = {
    "chapterId": "cs_chem_ch2",
    "chapterNumber": 2,
    "chapterTitle": "States of Matter, Gas Laws, Solutions & Colloidal Systems",
    "subject": "Chemistry",
    "cls": "Civil Services",
    "course": "revisionCourse",
    "totalModules": 20,
    "totalQuestions": 200,
    "passingPercentage": 70,
    "modules": [
        {
            "id": "m01",
            "moduleNumber": 1,
            "title": "Solid, Liquid & Gas States — Kinetic Molecular Theory & Phase Changes",
            "tagline": "Three classical states of matter, intermolecular forces, kinetic molecular theory, thermal energy competition, and microscopic phase changes.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Classical States of Matter & Kinetic Molecular Postulates</h3><p>Matter exists in distinct physical states determined by the competition between two opposing factors: <b>Intermolecular Attractive Forces</b> (which tend to hold particles together in fixed spatial relationships) and <b>Thermal Energy / Kinetic Energy</b> of the particles (arising from temperature, which causes particles to move apart).</p><ul><li><b>Solid State</b>: Strongest intermolecular forces, fixed lattice positions, particles exhibit only vibrational motion about fixed mean positions. Definite shape, definite volume, high density, and incompressibility.</li><li><b>Liquid State</b>: Intermediate intermolecular forces; particles possess sufficient kinetic energy to slide over one another while remaining within mutual attraction range. Definite volume, but indefinite shape (adapts to container). Exhibits fluidity, surface tension, and viscosity.</li><li><b>Gaseous State</b>: Negligible intermolecular forces; thermal kinetic energy completely overwhelms attractive potential. Complete freedom of translational, rotational, and vibrational motion. Indefinite shape, indefinite volume, extremely high compressibility, and rapid spontaneous diffusion.</li></ul><h3>2. Phase Transitions & Critical States</h3><p>Transitions between states occur when thermal energy or external pressure alters the balance of intermolecular interactions: <b>Fusion / Melting</b> (solid to liquid), <b>Solidification / Freezing</b> (liquid to solid), <b>Vaporization</b> (liquid to gas), <b>Condensation / Liquefaction</b> (gas to liquid), <b>Sublimation</b> (direct transition from solid to gas without entering liquid phase, e.g., Dry Ice $CO_2$, Iodine $I_2$, Camphor, Ammonium chloride $NH_4Cl$, and Naphthalene), and <b>Deposition / Desublimation</b> (direct transition from gas to solid, e.g., frost formation).</p>",
            "pointsToRemember": [
                "Thermal energy promotes molecular disorder and separation; intermolecular attractive forces promote structural ordering.",
                "Sublimation occurs when the vapor pressure of a solid equals the external atmospheric pressure at temperatures below its triple point.",
                "Density typically follows Solid > Liquid > Gas, with anomalous behavior in water where ice is less dense than liquid water at 4°C."
            ],
            "keyNotes": [
                "Water exhibits maximum density at 4°C (3.98°C) due to cage-like open hydrogen-bonded hexamer structures collapsing upon melting."
            ],
            "questions": [
                {
                    "id": "ch2_m01_q01",
                    "question": "Which of the following substances undergoes direct sublimation at room temperature and atmospheric pressure?",
                    "options": [
                        "Solid carbon dioxide (Dry Ice)",
                        "Sodium chloride",
                        "Calcium carbonate",
                        "Pure copper"
                    ],
                    "answer": "Solid carbon dioxide (Dry Ice)",
                    "explanation": "Dry Ice ($CO_2$) has a triple point above 1 atm (5.11 atm at -56.4°C), causing it to sublime directly from solid to vapor at -78.5°C under normal atmospheric pressure."
                },
                {
                    "id": "ch2_m01_q02",
                    "question": "What is the primary governing factor that determines whether a substance exists as a solid, liquid, or gas at standard conditions?",
                    "options": [
                        "The competition between intermolecular attractive forces and the thermal kinetic energy of particles",
                        "The total nuclear binding energy of the constituent atoms",
                        "The gravitational attraction between atoms",
                        "The electromagnetic radiation emitted by core electrons"
                    ],
                    "answer": "The competition between intermolecular attractive forces and the thermal kinetic energy of particles",
                    "explanation": "Physical state is governed by the equilibrium between cohesive intermolecular forces (holding particles together) and thermal energy (promoting particle separation and chaotic motion)."
                },
                {
                    "id": "ch2_m01_q03",
                    "question": "Why does ice float on liquid water?",
                    "options": [
                        "Ice forms an open, hexagonal cage-like hydrogen-bonded lattice that occupies more volume than liquid water",
                        "Ice contains trapped atmospheric nitrogen bubbles",
                        "Hydrogen bonds in ice are shorter and denser than in liquid water",
                        "Covalent O-H bonds elongate dramatically upon freezing"
                    ],
                    "answer": "Ice forms an open, hexagonal cage-like hydrogen-bonded lattice that occupies more volume than liquid water",
                    "explanation": "Upon freezing, water molecules arrange into an open tetrahedral/hexagonal hydrogen-bonded network with empty cage-like voids, decreasing density by ~9%."
                },
                {
                    "id": "ch2_m01_q04",
                    "question": "At what temperature does pure water exhibit its maximum density under standard atmospheric pressure?",
                    "options": [
                        "4°C (3.98°C)",
                        "0°C",
                        "-4°C",
                        "100°C"
                    ],
                    "answer": "4°C (3.98°C)",
                    "explanation": "Water achieves its maximum density of 1.000 g/cm³ at 3.98°C (~4°C) because heating from 0°C to 4°C breaks rigid hydrogen-bonded open cages, causing molecules to pack more closely."
                },
                {
                    "id": "ch2_m01_q05",
                    "question": "Which pair of phase transitions represents mutually reverse physical processes?",
                    "options": [
                        "Sublimation and Deposition",
                        "Fusion and Vaporization",
                        "Condensation and Sublimation",
                        "Solidification and Deposition"
                    ],
                    "answer": "Sublimation and Deposition",
                    "explanation": "Sublimation is the direct transition from solid to gas, while deposition is the direct transition from gas to solid."
                },
                {
                    "id": "ch2_m01_q06",
                    "question": "Which of the following compounds does NOT undergo sublimation under ambient atmospheric conditions?",
                    "options": [
                        "Sodium sulfate ($Na_2SO_4$)",
                        "Ammonium chloride ($NH_4Cl$)",
                        "Camphor",
                        "Naphthalene"
                    ],
                    "answer": "Sodium sulfate ($Na_2SO_4$)",
                    "explanation": "$Na_2SO_4$ is a high-melting ionic salt that does not sublime under standard ambient conditions. Camphor, $NH_4Cl$, and naphthalene readily sublime."
                },
                {
                    "id": "ch2_m01_q07",
                    "question": "In which state of matter do particles possess only vibrational motion about fixed equilibrium positions?",
                    "options": [
                        "Crystalline Solid",
                        "Ideal Gas",
                        "Non-viscous Liquid",
                        "Supercritical Fluid"
                    ],
                    "answer": "Crystalline Solid",
                    "explanation": "In crystalline solids, strong cohesive lattice forces lock particles into fixed mean positions, restricting them to vibrational oscillation."
                },
                {
                    "id": "ch2_m01_q08",
                    "question": "What term describes the direct conversion of gaseous water vapor into solid ice crystals (frost) without passing through a liquid state?",
                    "options": [
                        "Deposition (Desublimation)",
                        "Condensation",
                        "Liquefaction",
                        "Precipitation"
                    ],
                    "answer": "Deposition (Desublimation)",
                    "explanation": "Deposition (or desublimation) is the thermodynamic phase transition where vapor transforms directly into a solid."
                },
                {
                    "id": "ch2_m01_q09",
                    "question": "Why is the compressibility of liquids significantly lower than that of gases?",
                    "options": [
                        "Intermolecular spaces in liquids are negligible compared to the vast empty distances between gas particles",
                        "Liquid molecules have zero kinetic energy",
                        "Liquids lack intermolecular forces",
                        "Liquid atoms repel each other at infinite distances"
                    ],
                    "answer": "Intermolecular spaces in liquids are negligible compared to the vast empty distances between gas particles",
                    "explanation": "In liquids, molecules are in near-contact with tiny interstitial free volume, whereas gas molecules occupy less than 0.1% of the total gaseous volume under standard conditions."
                },
                {
                    "id": "ch2_m01_q10",
                    "question": "Which property is uniquely characteristic of fluids (both liquids and gases) but absent in rigid solids?",
                    "options": [
                        "Ability to flow and deform under shear stress without a restoring threshold force",
                        "Rigid crystalline lattice geometry",
                        "Definite spatial shape",
                        "Inability to transmit hydrostatic pressure"
                    ],
                    "answer": "Ability to flow and deform under shear stress without a restoring threshold force",
                    "explanation": "Fluids yield continuously under applied shear stress, allowing them to flow and conform to the geometry of their containers."
                }
            ]
        },
        {
            "id": "m02",
            "moduleNumber": 2,
            "title": "Fourth & Fifth States of Matter — Plasma & Bose-Einstein Condensates (BEC)",
            "tagline": "High-energy ionized gas (plasma), cosmic abundance, neon/fluorescent signs, fusion reactors, BEC discovery, ultra-low temperatures, and macroscopic quantum phenomena.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. The Fourth State of Matter: Plasma</h3><p><b>Plasma</b> is an ionized gas consisting of free electrons, positive ions, and neutral atoms in an energetic, quasineutral mixture. It is formed when thermal energy or intense electric fields strip electrons from atomic nuclei (thermal ionization or electrical breakdown).</p><ul><li><b>Cosmic Dominance</b>: Plasma makes up over 99% of the visible baryonic universe, including the Sun, stars, interstellar nebulae, and auroras (Aurora Borealis & Australis).</li><li><b>Terrestrial & Practical Examples</b>: Lightning strikes, electric welding arcs, neon advertising sign tubes (noble gases excited by high voltage), fluorescent light bulbs, and plasma display panels.</li><li><b>Unique Properties</b>: Because it contains high concentrations of mobile charge carriers (free electrons and cations), plasma possesses <b>high electrical conductivity</b> and responds strongly to external electromagnetic fields, forming magnetic pinches and self-generated magnetic structures (unlike neutral gases).</li><li><b>Thermonuclear Fusion</b>: Plasma confinement in Tokamaks (e.g., ITER) using magnetic fields is the central engineering challenge for generating clean fusion energy from Deuterium-Tritium plasma ($>10^8\\text{ K}$).</li></ul><h3>2. The Fifth State of Matter: Bose-Einstein Condensate (BEC)</h3><p>In 1924–1925, <b>Satyendra Nath Bose</b> formulated quantum statistics for photons, which <b>Albert Einstein</b> generalized to non-interacting massive integer-spin particles (bosons). They predicted that cooling a gas of bosons to ultra-low temperatures (nano-Kelvins, fractions of a micro-Kelvin above absolute zero $-273.15^\\circ\\text{C}$ / $0\\text{ K}$) causes a macroscopic fraction of particles to drop into the lowest possible quantum ground state.</p><ul><li><b>Experimental Realization (1995)</b>: Eric Cornell, Carl Wieman (JILA, Boulder, using Rubidium-87 $^{87}\\text{Rb}$ atoms) and Wolfgang Ketterle (MIT, using Sodium-23 $^{23}\\text{Na}$ atoms) achieved the first gaseous BEC, sharing the 2001 Nobel Prize in Physics.</li><li><b>Superatom Phenomenon</b>: At de Broglie thermal wavelength $\\lambda_{dB} \\ge$ interatomic spacing, individual atomic wavepackets overlap constructively and lose individuality, behaving as a single coherent macroscopic quantum 'superatom'.</li><li><b>Fermionic Condensates</b>: Paired half-integer spin fermions (e.g., Cooper pairs of electrons or paired fermionic atoms like Potassium-40 $^{40}\\text{K}$) can also exhibit superfluid condensation analogous to BEC.</li></ul>",
            "pointsToRemember": [
                "Plasma is electrically conductive and interacts strongly with magnetic fields, distinguishing it from neutral gases.",
                "Plasma constitutes >99% of the observable universe (Sun, stars, solar wind, interstellar space).",
                "BEC occurs only at extremely low temperatures approaching Absolute Zero (nano-Kelvin scale) for particles with integer spin (bosons)."
            ],
            "keyNotes": [
                "Satyendra Nath Bose's 1924 paper on Planck's law laid the theoretical foundation that Einstein extended, leading to the Nobel-winning 1995 BEC synthesis."
            ],
            "questions": [
                {
                    "id": "ch2_m02_q01",
                    "question": "Which state of matter makes up more than 99% of the visible, baryonic matter in the observable universe?",
                    "options": [
                        "Plasma",
                        "Solid",
                        "Gas",
                        "Liquid"
                    ],
                    "answer": "Plasma",
                    "explanation": "Due to the immense thermal energy in stars, the Sun, and interstellar medium, over 99% of visible matter exists in the ionized plasma state."
                },
                {
                    "id": "ch2_m02_q02",
                    "question": "What physical process leads to the formation of plasma from a neutral gas?",
                    "options": [
                        "Stripping of electrons from atomic nuclei due to extreme heat or intense electrical discharge (ionization)",
                        "Condensation of electrons onto atomic nuclei",
                        "Cooling of atomic gas to nano-Kelvin temperatures",
                        "Covalent bond formation between noble gases"
                    ],
                    "answer": "Stripping of electrons from atomic nuclei due to extreme heat or intense electrical discharge (ionization)",
                    "explanation": "When a gas is subjected to extreme thermal energy or high electric potential, valence electrons detach, producing an ionized gas mixture of cations and free electrons."
                },
                {
                    "id": "ch2_m02_q03",
                    "question": "Which Indian physicist co-discovered the theoretical foundation for the fifth state of matter alongside Albert Einstein?",
                    "options": [
                        "Satyendra Nath Bose",
                        "C. V. Raman",
                        "Homi J. Bhabha",
                        "Meghnad Saha"
                    ],
                    "answer": "Satyendra Nath Bose",
                    "explanation": "Satyendra Nath Bose derived Planck's law using statistical mechanics of indistinguishable photons in 1924, which Einstein extended to atoms, predicting Bose-Einstein Condensation."
                },
                {
                    "id": "ch2_m02_q04",
                    "question": "In 1995, which experimental team first synthesized a Bose-Einstein Condensate in the laboratory using Rubidium-87 atoms?",
                    "options": [
                        "Eric Cornell and Carl Wieman",
                        "Ernest Rutherford and James Chadwick",
                        "Antoine Lavoisier and Joseph Priestley",
                        "John Dalton and Amedeo Avogadro"
                    ],
                    "answer": "Eric Cornell and Carl Wieman",
                    "explanation": "Eric Cornell and Carl Wieman at JILA (University of Colorado Boulder) produced the first BEC in rubidium-87 gas at 170 nanokelvin in 1995, sharing the 2001 Nobel Prize with Wolfgang Ketterle."
                },
                {
                    "id": "ch2_m02_q05",
                    "question": "Under what physical condition does a Bose-Einstein Condensate form?",
                    "options": [
                        "At extremely low temperatures approaching absolute zero (nano-Kelvin scale) in an ultra-low-density gas",
                        "At temperatures exceeding 100 million degrees Celsius under intense pressure",
                        "Under ultra-high pressure at room temperature",
                        "Inside high-voltage lightning discharge channels"
                    ],
                    "answer": "At extremely low temperatures approaching absolute zero (nano-Kelvin scale) in an ultra-low-density gas",
                    "explanation": "BEC forms when a dilute gas of bosons is cooled to temperatures close to absolute zero (nano-Kelvin regime), causing de Broglie wavelengths to overlap and particles to occupy the lowest quantum ground state."
                },
                {
                    "id": "ch2_m02_q06",
                    "question": "Why does plasma conduct electricity with exceptional efficiency while normal gases act as electrical insulators?",
                    "options": [
                        "Plasma contains a high density of mobile free electrons and positive ions",
                        "Plasma molecules are frozen into a superconducting crystalline lattice",
                        "Neutral gas molecules contain free protons that neutralize electric currents",
                        "Plasma emits blackbody radiation that carries charge"
                    ],
                    "answer": "Plasma contains a high density of mobile free electrons and positive ions",
                    "explanation": "Unlike neutral gases with bound electrons, plasma contains detached free electrons and ions that drift readily in response to applied electric fields."
                },
                {
                    "id": "ch2_m02_q07",
                    "question": "Which of the following terrestrial phenomena is an everyday example of plasma in action?",
                    "options": [
                        "A glowing neon advertising sign tube",
                        "Dry Ice sublimating in open air",
                        "Dew drops condensing on grass",
                        "Water freezing in a freezer"
                    ],
                    "answer": "A glowing neon advertising sign tube",
                    "explanation": "In a neon tube, high electrical voltage ionizes neon gas into glowing plasma, emitting characteristic orange-red light through electron recombination."
                },
                {
                    "id": "ch2_m02_q08",
                    "question": "What type of particles are capable of undergoing Bose-Einstein condensation into a single macroscopic quantum state?",
                    "options": [
                        "Bosons (particles with integer spin, such as 0, 1, 2)",
                        "Fermions with half-integer spin without pairing",
                        "Electrons at room temperature",
                        "Protons in high-energy cosmic rays"
                    ],
                    "answer": "Bosons (particles with integer spin, such as 0, 1, 2)",
                    "explanation": "Bosons obey Bose-Einstein statistics and are not constrained by the Pauli Exclusion Principle, allowing unlimited numbers of identical particles to occupy the same quantum ground state."
                },
                {
                    "id": "ch2_m02_q09",
                    "question": "What natural atmospheric phenomenon on Earth displays glowing celestial plasma caused by solar wind interacting with the magnetosphere?",
                    "options": [
                        "Aurora Borealis and Aurora Australis (Northern/Southern Lights)",
                        "Tornadoes",
                        "Trade winds",
                        "Monsoon cloud formation"
                    ],
                    "answer": "Aurora Borealis and Aurora Australis (Northern/Southern Lights)",
                    "explanation": "Auroras occur when energetic solar wind electrons and protons strike atmospheric nitrogen and oxygen atoms, exciting and ionizing them into luminous plasma."
                },
                {
                    "id": "ch2_m02_q10",
                    "question": "In magnetic confinement fusion reactors like Tokamaks, why must plasma be suspended using powerful magnetic fields?",
                    "options": [
                        "Plasma temperatures exceed 100 million °C, which would vaporize any solid physical container wall",
                        "Plasma is diamagnetic and repelled by gravitational fields",
                        "Magnetic fields prevent electrons from binding to neutrons",
                        "Plasma loses its mass if it touches metal"
                    ],
                    "answer": "Plasma temperatures exceed 100 million °C, which would vaporize any solid physical container wall",
                    "explanation": "Thermonuclear fusion requires temperatures $>100\\text{ million K}$. No material vessel can contact such extreme plasma without melting and quenching the fusion reaction; magnetic fields contain the charged particles safely in vacuum."
                }
            ]
        },
        {
            "id": "m03",
            "moduleNumber": 3,
            "title": "Latent Heat of Fusion, Vaporization & Evaporation Dynamics",
            "tagline": "Latent heat of fusion, latent heat of vaporization, constant temperature during phase change, evaporation as a surface cooling phenomenon, and influencing factors.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Latent Heat: The Hidden Energy of Phase Change</h3><p><b>Latent Heat</b> ($Q = m \\cdot L$) is the thermal energy absorbed or released by a unit mass of a substance during a change of physical state at constant temperature and pressure. The energy does not increase the kinetic energy of the molecules (hence temperature remains strictly constant during phase transition); rather, it is consumed in overcoming intermolecular bonds and increasing potential energy.</p><ul><li><b>Latent Heat of Fusion ($L_f$)</b>: Heat required to convert $1\\text{ kg}$ of a solid into a liquid at its melting point. For ice at $0^\\circ\\text{C}$, $L_f \\approx 3.34 \\times 10^5\\text{ J/kg}$ ($80\\text{ cal/g}$). Ice at $0^\\circ\\text{C}$ is more effective in cooling than water at $0^\\circ\\text{C}$ because each gram of ice absorbs an additional $80\\text{ calories}$ merely to melt.</li><li><b>Latent Heat of Vaporization ($L_v$)</b>: Heat required to convert $1\\text{ kg}$ of a liquid into gas at its boiling point. For water at $100^\\circ\\text{C}$, $L_v \\approx 2.26 \\times 10^6\\text{ J/kg}$ ($540\\text{ cal/g}$). Severe burns caused by steam at $100^\\circ\\text{C}$ are much more destructive than boiling water at $100^\\circ\\text{C}$ because steam releases an extra $2.26\\text{ kJ/g}$ of latent heat upon condensing on skin.</li></ul><h3>2. Evaporation vs Boiling & Cooling Mechanics</h3><p><b>Evaporation</b> is a spontaneous surface phenomenon occurring at any temperature below the normal boiling point, whereas <b>Boiling</b> is a bulk phenomenon occurring at a fixed temperature when the liquid's vapor pressure equals external atmospheric pressure.</p><ul><li><b>Cooling by Evaporation</b>: Only the highest kinetic energy molecules at the liquid surface overcome intermolecular forces and escape into the vapor phase. The average kinetic energy of the remaining liquid molecules decreases, causing a temperature drop.</li><li><b>Factors Influencing Evaporation Rate</b>: Surface Area ($\\propto$), Temperature ($\\propto$), Wind Speed ($\\propto$), and Humidity (inversely proportional; high ambient humidity retards evaporation).</li><li><b>Everyday Applications</b>: Cooling of water in porous earthen pots (matkas), perspiration and thermoregulation in human skin, acetone/alcohol feeling cold on the palm, and desert coolers working effectively in hot, dry weather.</li></ul>",
            "pointsToRemember": [
                "Temperature remains constant during a pure substance's phase transition because latent heat alters intermolecular potential energy, not kinetic energy.",
                "Water has an exceptionally high latent heat of vaporization ($540\\text{ cal/g}$ / $2.26\\times 10^6\\text{ J/kg}$) due to extensive hydrogen bonding.",
                "Evaporation is a surface phenomenon occurring at all temperatures, while boiling is a bulk phenomenon occurring only at the boiling point."
            ],
            "keyNotes": [
                "Burns caused by steam at 100°C are substantially more severe than burns from boiling water at 100°C because steam releases 2,260 J/g of latent heat upon condensation."
            ],
            "questions": [
                {
                    "id": "ch2_m03_q01",
                    "question": "Why does steam at 100°C cause significantly more severe skin burns than liquid boiling water at the same 100°C temperature?",
                    "options": [
                        "Steam releases an additional 2,260 J/g of latent heat of vaporization upon condensing on skin",
                        "Steam has a higher temperature than boiling water",
                        "Steam molecules possess higher chemical reactivity than liquid water",
                        "Steam contains acidic hydronium ions formed at boiling point"
                    ],
                    "answer": "Steam releases an additional 2,260 J/g of latent heat of vaporization upon condensing on skin",
                    "explanation": "Steam at 100°C contains latent heat of vaporization ($2.26 \\times 10^6\\text{ J/kg}$ or $540\\text{ cal/g}$). Upon contacting skin, it condenses to water at 100°C, dumping this immense latent energy before the water cools further."
                },
                {
                    "id": "ch2_m03_q02",
                    "question": "Why does the temperature of pure ice-water mixture remain unchanged at 0°C until all the ice has completely melted, despite continuous heat input?",
                    "options": [
                        "Supplied heat is consumed as latent heat of fusion to break crystalline intermolecular bonds rather than increasing kinetic energy",
                        "Ice reflects all incoming thermal radiation",
                        "Water molecules decompose into oxygen and hydrogen gas",
                        "The thermometer reaches absolute equilibrium with atmospheric nitrogen"
                    ],
                    "answer": "Supplied heat is consumed as latent heat of fusion to break crystalline intermolecular bonds rather than increasing kinetic energy",
                    "explanation": "During phase transition, added energy is used to disrupt hydrogen bonds in the solid lattice (increasing molecular potential energy) while the average kinetic energy remains constant."
                },
                {
                    "id": "ch2_m03_q03",
                    "question": "Why is water kept in a traditional porous earthen pot (matka) cooler than water kept in a glass bottle during hot summer days?",
                    "options": [
                        "Continuous evaporation of water seeping through microscopic pores extracts latent heat from the remaining water",
                        "Clay acts as a chemical refrigerator absorbing ambient nitrogen",
                        "Clay absorbs heat and converts it into radiant light",
                        "Pores in earthen pots reflect infrared rays from the sun"
                    ],
                    "answer": "Continuous evaporation of water seeping through microscopic pores extracts latent heat from the remaining water",
                    "explanation": "Water slowly seeps through the porous clay walls of the matka and evaporates from the outer surface, absorbing latent heat of vaporization from the bulk water, keeping it cool."
                },
                {
                    "id": "ch2_m03_q04",
                    "question": "Which of the following modifications will DECREASE the rate of evaporation of a liquid from an open container?",
                    "options": [
                        "Increasing the relative humidity of the surrounding air",
                        "Increasing the surface area of the liquid",
                        "Increasing the temperature of the liquid",
                        "Increasing the speed of wind blowing over the liquid surface"
                    ],
                    "answer": "Increasing the relative humidity of the surrounding air",
                    "explanation": "When ambient humidity is high, air is already close to saturation with water vapor, dramatically reducing the net rate of liquid vaporization."
                },
                {
                    "id": "ch2_m03_q05",
                    "question": "What is the primary physical distinction between evaporation and boiling?",
                    "options": [
                        "Evaporation is a surface phenomenon occurring at any temperature, whereas boiling is a bulk phenomenon occurring at a specific boiling point",
                        "Evaporation occurs only at 100°C, while boiling occurs at all temperatures",
                        "Boiling does not require heat, whereas evaporation absorbs huge latent heat",
                        "Evaporation creates bubbles throughout the liquid volume"
                    ],
                    "answer": "Evaporation is a surface phenomenon occurring at any temperature, whereas boiling is a bulk phenomenon occurring at a specific boiling point",
                    "explanation": "Evaporation happens only at the exposed liquid surface at any temperature below boiling point, whereas boiling involves vapor bubble formation throughout the entire bulk liquid when vapor pressure equals atmospheric pressure."
                },
                {
                    "id": "ch2_m03_q06",
                    "question": "Why does acetone or surgical spirit (alcohol) feel intensely cold when poured on the palm of your hand?",
                    "options": [
                        "It evaporates rapidly, extracting latent heat of vaporization directly from the skin",
                        "It undergoes an endothermic chemical decomposition with keratin",
                        "It chemically freezes the epidermis tissue",
                        "It dissolves subcutaneous adipose fat instantaneously"
                    ],
                    "answer": "It evaporates rapidly, extracting latent heat of vaporization directly from the skin",
                    "explanation": "Acetone and alcohol have low boiling points and high volatility; they evaporate quickly by drawing their latent heat of vaporization directly from the surface of the skin."
                },
                {
                    "id": "ch2_m03_q07",
                    "question": "Why does a desert cooler function much more effectively in hot, dry climates (like Rajasthan in May) than in humid coastal climates (like Mumbai in July)?",
                    "options": [
                        "Low ambient humidity in dry air allows maximum rate of water evaporation and cooling",
                        "Dry air contains more nitrogen that reacts with water",
                        "High humidity accelerates the speed of cooler fan blades",
                        "Desert sand cools the incoming air by conduction"
                    ],
                    "answer": "Low ambient humidity in dry air allows maximum rate of water evaporation and cooling",
                    "explanation": "Evaporative desert coolers rely on water evaporation to lower air temperature. Dry air has high evaporative capacity; humid air cannot absorb more vapor, rendering the cooler ineffective."
                },
                {
                    "id": "ch2_m03_q08",
                    "question": "Why is ice at 0°C more effective at cooling a beverage than liquid water at 0°C?",
                    "options": [
                        "Each gram of ice absorbs an additional 334 Joules of latent heat of fusion simply to melt into water at 0°C",
                        "Ice molecules have higher kinetic energy than liquid water molecules",
                        "Liquid water transfers coldness faster through convection",
                        "Ice has a higher specific heat capacity than liquid water"
                    ],
                    "answer": "Each gram of ice absorbs an additional 334 Joules of latent heat of fusion simply to melt into water at 0°C",
                    "explanation": "To convert 1 g of ice at 0°C to water at 0°C, it must absorb ~334 J (80 calories) of latent heat of fusion from the surrounding beverage, providing much greater total cooling."
                },
                {
                    "id": "ch2_m03_q09",
                    "question": "What happens to the boiling point of water inside a pressure cooker?",
                    "options": [
                        "It increases above 100°C (up to ~120°C) due to increased internal pressure, cooking food faster",
                        "It drops below 100°C, cooking food gently",
                        "It remains exactly 100°C regardless of pressure",
                        "Water cannot boil at all inside a sealed cooker"
                    ],
                    "answer": "It increases above 100°C (up to ~120°C) due to increased internal pressure, cooking food faster",
                    "explanation": "Trapped steam increases internal pressure to ~1.7–2.0 atm. Since boiling occurs when vapor pressure equals external pressure, water boils at ~120°C, transferring more thermal energy to food."
                },
                {
                    "id": "ch2_m03_q10",
                    "question": "Why does water boil at a lower temperature (e.g., 92°C) at high altitudes such as Leh or Mount Everest compared to sea level?",
                    "options": [
                        "Atmospheric pressure decreases with altitude, so vapor pressure equals ambient pressure at a lower temperature",
                        "Gravity is weaker at high altitude, allowing molecules to escape easily",
                        "High altitude air contains less oxygen, reducing heat capacity",
                        "The temperature of surrounding ambient air is colder"
                    ],
                    "answer": "Atmospheric pressure decreases with altitude, so vapor pressure equals ambient pressure at a lower temperature",
                    "explanation": "Boiling occurs when vapor pressure equals external pressure. At high elevations, atmospheric pressure is substantially lower, so water reaches boiling vapor pressure at temperatures well below 100°C."
                }
            ]
        },
        {
            "id": "m04",
            "moduleNumber": 4,
            "title": "Boyle's Law & Charles's Law — Isothermal & Isobaric Gas Behavior",
            "tagline": "Robert Boyle's isothermal law (P proportional to 1/V), Jacques Charles's isobaric law (V proportional to T), absolute zero temperature derivation, and gas behavior graphs.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Robert Boyle's Law (1662) — Isothermal Relation</h3><p><b>Boyle's Law</b> states that at constant temperature ($T = \\text{constant}$) for a fixed mass of an ideal gas ($n = \\text{constant}$), the pressure ($P$) exerted by the gas is inversely proportional to its volume ($V$):</p><p>$$P \\propto \\frac{1}{V} \\quad \\implies \\quad P \\cdot V = k_1 \\quad \\implies \\quad P_1 V_1 = P_2 V_2$$</p><ul><li><b>Isotherm Curves</b>: A plot of $P$ vs $V$ yields a rectangular hyperbola. A plot of $P$ vs $1/V$ yields a straight line passing through the origin.</li><li><b>Density Relationship</b>: Since density $d = m/V$, substituting $V = m/d$ yields $P = k'(d/m)$, meaning at constant temperature, <b>gas density is directly proportional to pressure</b> ($P \\propto d$).</li><li><b>Practical Examples</b>: Scuba diving decompression sickness ('the bends'), medical syringes drawing blood, bicycle air pumps, and weather balloons expanding as they ascend into lower-pressure upper atmosphere.</li></ul><h3>2. Jacques Charles's Law (1787) — Isobaric Relation</h3><p><b>Charles's Law</b> states that at constant pressure ($P = \\text{constant}$) for a fixed mass of gas ($n = \\text{constant}$), the volume ($V$) occupied by the gas is directly proportional to its absolute thermodynamic temperature ($T$ in Kelvin):</p><p>$$V \\propto T \\quad \\implies \\quad \\frac{V}{T} = k_2 \\quad \\implies \\quad \\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$</p><ul><li><b>Isobar Lines</b>: A plot of $V$ vs $T\\text{ (K)}$ yields a straight line passing through origin $(0\\text{ K})$. Extrapolating $V$ vs Celsius temperature ($t\\text{ }^\\circ\\text{C}$) intersects the temperature axis at <b>$-273.15^\\circ\\text{C}$</b>, where theoretical volume becomes zero (Absolute Zero).</li><li><b>Everyday Examples</b>: Hot air balloons rising because heated air expands, becomes less dense ($d \\propto 1/T$), and develops buoyant lift; automobile tires deflating slightly during cold winter mornings.</li></ul>",
            "pointsToRemember": [
                "Boyle's Law ($P_1V_1 = P_2V_2$) describes isothermal conditions ($T = \\text{constant}$); pressure is inversely proportional to volume.",
                "Charles's Law ($V_1/T_1 = V_2/T_2$) describes isobaric conditions ($P = \\text{constant}$); volume is directly proportional to absolute temperature (K).",
                "Absolute Zero ($-273.15^\\circ\\text{C}$ / $0\\text{ K}$) is the theoretical temperature at which the volume of an ideal gas extrapolates to zero."
            ],
            "keyNotes": [
                "Hot air balloons float on the principle of Charles's Law: heating air expands volume, lowering density below ambient cool air."
            ],
            "questions": [
                {
                    "id": "ch2_m04_q01",
                    "question": "According to Boyle's Law, what happens to the volume of a fixed mass of gas if the applied pressure is tripled at constant temperature?",
                    "options": [
                        "The volume is reduced to one-third of its initial value",
                        "The volume triples",
                        "The volume increases ninefold",
                        "The volume remains unchanged"
                    ],
                    "answer": "The volume is reduced to one-third of its initial value",
                    "explanation": "Boyle's law states $P_1V_1 = P_2V_2$. If $P_2 = 3P_1$, then $V_2 = V_1/3$."
                },
                {
                    "id": "ch2_m04_q02",
                    "question": "Why does a weather balloon expand continuously as it ascends into the upper stratosphere?",
                    "options": [
                        "Atmospheric pressure decreases with altitude, so the internal gas expands according to Boyle's Law",
                        "The temperature in the upper stratosphere reaches 1000°C",
                        "Solar ultraviolet rays inject additional helium atoms into the balloon",
                        "Gravity compresses the balloon fabric"
                    ],
                    "answer": "Atmospheric pressure decreases with altitude, so the internal gas expands according to Boyle's Law",
                    "explanation": "As altitude increases, external atmospheric pressure drops. By Boyle's Law ($P \\propto 1/V$), the trapped gas expands until the envelope bursts at high altitude."
                },
                {
                    "id": "ch2_m04_q03",
                    "question": "Which fundamental temperature scale was derived from the extrapolation of Charles's Law where gas volume reaches theoretical zero?",
                    "options": [
                        "Kelvin Scale (Absolute Zero at -273.15°C)",
                        "Fahrenheit Scale",
                        "Rankine Scale starting at 0°C",
                        "Réaumur Scale"
                    ],
                    "answer": "Kelvin Scale (Absolute Zero at -273.15°C)",
                    "explanation": "Lord Kelvin extrapolated Charles's law ($V$ vs $t$) and found that all ideal gas isobars converge to zero volume at $-273.15^\\circ\\text{C}$, defining $0\\text{ K}$ as Absolute Zero."
                },
                {
                    "id": "ch2_m04_q04",
                    "question": "A sealed cylinder contains 2.0 L of an ideal gas at 300 K under constant pressure. If the gas is heated to 600 K, what is the new volume?",
                    "options": [
                        "4.0 L",
                        "1.0 L",
                        "6.0 L",
                        "8.0 L"
                    ],
                    "answer": "4.0 L",
                    "explanation": "By Charles's Law ($V_1/T_1 = V_2/T_2$): $V_2 = V_1 \\times (T_2/T_1) = 2.0 \\times (600/300) = 4.0\\text{ L}$."
                },
                {
                    "id": "ch2_m04_q05",
                    "question": "What graphical shape is obtained when gas pressure (P) is plotted against volume (V) at constant temperature (isotherm)?",
                    "options": [
                        "Rectangular Hyperbola",
                        "Straight line passing through origin",
                        "Parabola opening upwards",
                        "Horizontal straight line"
                    ],
                    "answer": "Rectangular Hyperbola",
                    "explanation": "Since $P \\cdot V = \\text{constant}$, the relation $P = k/V$ yields a classic rectangular hyperbola on a $P-V$ coordinate system."
                },
                {
                    "id": "ch2_m04_q06",
                    "question": "What happens to the density of an ideal gas when its pressure is doubled at constant temperature?",
                    "options": [
                        "Gas density doubles ($d \\propto P$)",
                        "Gas density is halved",
                        "Gas density quadruples",
                        "Gas density remains unaffected"
                    ],
                    "answer": "Gas density doubles ($d \\propto P$)",
                    "explanation": "From $P = (d/M)RT$, density $d$ is directly proportional to pressure at constant temperature. Doubling pressure halves volume, thus doubling mass per unit volume (density)."
                },
                {
                    "id": "ch2_m04_q07",
                    "question": "On what thermodynamic principle does a hot air balloon generate buoyant lift?",
                    "options": [
                        "Charles's Law: heating air expands its volume and decreases its density relative to cooler ambient air",
                        "Boyle's Law: increasing pressure makes hot air lighter",
                        "Dalton's Law: nitrogen separates from oxygen inside the balloon",
                        "Graham's Law: heated air diffuses through the fabric"
                    ],
                    "answer": "Charles's Law: heating air expands its volume and decreases its density relative to cooler ambient air",
                    "explanation": "Heating the air inside the balloon increases its volume (Charles's Law), decreasing its density below that of surrounding cooler air, generating net upward Archimedean buoyant force."
                },
                {
                    "id": "ch2_m04_q08",
                    "question": "Why is it hazardous for scuba divers to hold their breath while rapidly ascending from deep water to the surface?",
                    "options": [
                        "Ambient hydrostatic pressure decreases, causing air in lungs to expand violently and potentially rupture lung alveoli",
                        "Cold ocean water freezes the pulmonary arteries",
                        "Oxygen converts into toxic carbon monoxide under low pressure",
                        "Helium gas solidifies in the bloodstream"
                    ],
                    "answer": "Ambient hydrostatic pressure decreases, causing air in lungs to expand violently and potentially rupture lung alveoli",
                    "explanation": "By Boyle's Law ($P_1V_1 = P_2V_2$), as external water pressure halves upon ascending from 10 m depth to surface, trapped air in lungs doubles in volume, which can cause pulmonary barotrauma if not exhaled."
                },
                {
                    "id": "ch2_m04_q09",
                    "question": "If pressure is kept constant, what temperature in Celsius corresponds to doubling the volume of a gas initially at 27°C?",
                    "options": [
                        "327°C",
                        "54°C",
                        "600°C",
                        "127°C"
                    ],
                    "answer": "327°C",
                    "explanation": "$T_1 = 27 + 273 = 300\\text{ K}$. Doubling volume requires doubling absolute temperature: $T_2 = 2 \\times 300 = 600\\text{ K}$. Converting to Celsius: $600 - 273 = 327^\\circ\\text{C}$."
                },
                {
                    "id": "ch2_m04_q10",
                    "question": "What is an 'isotherm' in thermodynamic gas studies?",
                    "options": [
                        "A curve showing pressure-volume variation at a constant fixed temperature",
                        "A line representing constant pressure across varying temperatures",
                        "A graph showing constant volume with varying pressure",
                        "A phase boundary between solid and plasma"
                    ],
                    "answer": "A curve showing pressure-volume variation at a constant fixed temperature",
                    "explanation": "An isotherm is a plot of thermodynamic state variables (such as $P$ vs $V$) held at a constant, uniform temperature."
                }
            ]
        },
        {
            "id": "m05",
            "moduleNumber": 5,
            "title": "Gay-Lussac's Law, Avogadro's Law & The Ideal Gas Equation (PV = nRT)",
            "tagline": "Gay-Lussac's pressure-temperature law, Avogadro's volume-mole hypothesis, derivation of ideal gas law, universal gas constant R values, and molar volume at STP.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Gay-Lussac's Law (Amontons's Law) — Isochoric Relation</h3><p><b>Gay-Lussac's Law</b> states that at constant volume ($V = \\text{constant}$) for a fixed mass of gas ($n = \\text{constant}$), the pressure exerted by the gas is directly proportional to its absolute temperature ($T$ in Kelvin):</p><p>$$P \\propto T \\quad \\implies \\quad \\frac{P}{T} = k_3 \\quad \\implies \\quad \\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$</p><ul><li><b>Everyday Examples</b>: Automobile tires showing elevated pressure readings after high-speed highway driving due to frictional heating; exploding aerosol spray cans if thrown into an open fire.</li></ul><h3>2. Avogadro's Law & Molar Volume</h3><p><b>Avogadro's Hypothesis (1811)</b> states that equal volumes of all gases under identical conditions of temperature and pressure contain an equal number of molecules:</p><p>$$V \\propto n \\quad (\\text{at constant } P \\text{ and } T)$$</p><ul><li><b>Molar Volume at Standard Conditions</b>: At standard temperature and pressure ($T = 273.15\\text{ K}$, $P = 1\\text{ atm}$), $1\\text{ mole}$ ($6.022 \\times 10^{23}\\text{ molecules}$) of any ideal gas occupies <b>$22.414\\text{ L}$</b> ($22.4\\text{ L}$). Under IUPAC STP ($T = 273.15\\text{ K}$, $P = 1\\text{ bar} = 10^5\\text{ Pa}$), molar volume is $22.71\\text{ L}$.</li></ul><h3>3. Synthesis: The Ideal Gas Equation</h3><p>Combining Boyle's, Charles's, and Avogadro's laws yields the master equation of state for an ideal gas:</p><p>$$PV = nRT = \\frac{m}{M}RT \\quad \\implies \\quad P = \\frac{d}{M}RT \\quad \\implies \\quad M = \\frac{dRT}{P}$$</p><p>where $R$ is the <b>Universal Gas Constant</b>. Key numerical values of $R$:</p><ul><li>$R = 8.314\\text{ J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$ (SI Units)</li><li>$R = 0.0821\\text{ L}\\cdot\\text{atm}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$</li><li>$R = 1.987 \\approx 2.0\\text{ cal}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$</li><li>$R = 8.314 \\times 10^7\\text{ erg}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$</li></ul>",
            "pointsToRemember": [
                "Gay-Lussac's Law ($P_1/T_1 = P_2/T_2$) applies at constant volume; pressure increases linearly with absolute temperature.",
                "Avogadro's Law states that 1 mole of any ideal gas at standard STP (1 atm, 0°C) occupies exactly 22.4 liters.",
                "The Universal Gas Constant $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}) = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$."
            ],
            "keyNotes": [
                "Molar mass of a volatile liquid can be determined experimentally using the Dumas/Victor Meyer method via $M = dRT/P$."
            ],
            "questions": [
                {
                    "id": "ch2_m05_q01",
                    "question": "Why do vehicle tire pressures increase significantly after continuous high-speed driving on a hot summer highway?",
                    "options": [
                        "Frictional heating between tires and road increases tire air temperature, raising pressure at constant volume (Gay-Lussac's Law)",
                        "Rubber contracts when heated, reducing internal volume",
                        "Atmospheric oxygen diffuses through tire rubber into the tube",
                        "Centrifugal force destroys gas molecules"
                    ],
                    "answer": "Frictional heating between tires and road increases tire air temperature, raising pressure at constant volume (Gay-Lussac's Law)",
                    "explanation": "By Gay-Lussac's Law ($P \\propto T$), as friction heats the trapped air inside the rigid tire casing ($V \\approx \\text{constant}$), internal air pressure rises."
                },
                {
                    "id": "ch2_m05_q02",
                    "question": "What volume does exactly 1.0 mole of an ideal gas occupy at Standard Temperature and Pressure (0°C and 1.0 atm)?",
                    "options": [
                        "22.4 Liters",
                        "11.2 Liters",
                        "44.8 Liters",
                        "1.0 Liter"
                    ],
                    "answer": "22.4 Liters",
                    "explanation": "At STP ($T = 273.15\\text{ K}$, $P = 1\\text{ atm}$), $V = nRT/P = 1 \\times 0.0821 \\times 273.15 / 1 = 22.414\\text{ L}$."
                },
                {
                    "id": "ch2_m05_q03",
                    "question": "What is the numerical value of the Universal Gas Constant (R) in SI units (Joules per mole per Kelvin)?",
                    "options": [
                        "8.314 J/(mol·K)",
                        "0.0821 J/(mol·K)",
                        "1.987 J/(mol·K)",
                        "6.022 J/(mol·K)"
                    ],
                    "answer": "8.314 J/(mol·K)",
                    "explanation": "In SI units ($P\\text{ in Pa}$, $V\\text{ in m}^3$), $R = 8.31446\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$."
                },
                {
                    "id": "ch2_m05_q04",
                    "question": "Which expression correctly relates the molar mass (M) of a gas to its density (d), pressure (P), and temperature (T)?",
                    "options": [
                        "M = dRT / P",
                        "M = P / (dRT)",
                        "M = dP / (RT)",
                        "M = RT / (dP)"
                    ],
                    "answer": "M = dRT / P",
                    "explanation": "From $PV = nRT = (m/M)RT$, we rearrange $P = (m/V)(RT/M) = (dRT)/M$, which gives $M = dRT/P$."
                },
                {
                    "id": "ch2_m05_q05",
                    "question": "Why is there an explicit warning never to incinerate or dispose of aerosol spray cans in an open fire even when 'empty'?",
                    "options": [
                        "Residual propellant gas heats up rapidly, causing pressure to soar until the metal can violently explodes (Gay-Lussac's Law)",
                        "Aerosol aluminum turns into explosive nitroglycerin",
                        "Empty cans absorb atmospheric argon and ignite",
                        "The spray nozzle reacts chemically with nitrogen"
                    ],
                    "answer": "Residual propellant gas heats up rapidly, causing pressure to soar until the metal can violently explodes (Gay-Lussac's Law)",
                    "explanation": "Even an 'empty' can contains residual propellant gas. In a fire, temperature skyrockets, and at constant volume, $P_2 = P_1(T_2/T_1)$ increases until the metal ruptures explosively."
                },
                {
                    "id": "ch2_m05_q06",
                    "question": "If two separate flasks of identical volume contain Oxygen gas and Hydrogen gas at the same temperature and pressure, which statement is true according to Avogadro's Law?",
                    "options": [
                        "Both flasks contain the exact same number of molecules",
                        "The oxygen flask contains 16 times more molecules than the hydrogen flask",
                        "The hydrogen flask contains 8 times more molecules",
                        "The oxygen flask contains twice as many molecules"
                    ],
                    "answer": "Both flasks contain the exact same number of molecules",
                    "explanation": "Avogadro's Law dictates that equal volumes of all gases under identical $T$ and $P$ contain identical numbers of molecules, regardless of chemical identity or mass."
                },
                {
                    "id": "ch2_m05_q07",
                    "question": "What is the value of the Universal Gas Constant (R) when pressure is in atmospheres and volume is in liters?",
                    "options": [
                        "0.0821 L·atm/(mol·K)",
                        "8.314 L·atm/(mol·K)",
                        "62.36 L·atm/(mol·K)",
                        "1.987 L·atm/(mol·K)"
                    ],
                    "answer": "0.0821 L·atm/(mol·K)",
                    "explanation": "In liter-atmosphere units, $R = 0.082057 \\approx 0.0821\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$."
                },
                {
                    "id": "ch2_m05_q08",
                    "question": "How many moles of gas are present in a 44.8 L sample of ideal gas measured at 0°C and 1 atm?",
                    "options": [
                        "2.0 moles",
                        "1.0 mole",
                        "0.5 moles",
                        "4.0 moles"
                    ],
                    "answer": "2.0 moles",
                    "explanation": "Since 1 mole occupies 22.4 L at STP, $44.8\\text{ L} / 22.4\\text{ L/mol} = 2.0\\text{ moles}$."
                },
                {
                    "id": "ch2_m05_q09",
                    "question": "Which gas law equation is mathematically formulated as P₁/T₁ = P₂/T₂ at constant volume?",
                    "options": [
                        "Gay-Lussac's Law",
                        "Boyle's Law",
                        "Charles's Law",
                        "Graham's Law"
                    ],
                    "answer": "Gay-Lussac's Law",
                    "explanation": "Gay-Lussac's Law relates pressure directly to absolute temperature for an isochoric ($V = \\text{constant}$) process."
                },
                {
                    "id": "ch2_m05_q10",
                    "question": "Under the ideal gas law, what happens to the pressure of a gas if the volume is halved and the absolute temperature is doubled simultaneously?",
                    "options": [
                        "Pressure quadruples (increases 4 times)",
                        "Pressure remains unchanged",
                        "Pressure doubles",
                        "Pressure decreases by half"
                    ],
                    "answer": "Pressure quadruples (increases 4 times)",
                    "explanation": "From $P = nRT/V$: halving $V$ multiplies $P$ by 2; doubling $T$ multiplies $P$ by 2. Total change is $2 \\times 2 = 4\\text{-fold increase}$."
                }
            ]
        },
        {
            "id": "m06",
            "moduleNumber": 6,
            "title": "Dalton's Law of Partial Pressures & Graham's Law of Gaseous Diffusion",
            "tagline": "John Dalton's partial pressures law, mole fraction relationship, gas collection over water (aqueous tension), and Thomas Graham's rate of diffusion/effusion.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Dalton's Law of Partial Pressures (1801)</h3><p><b>Dalton's Law</b> states that in a mixture of non-reacting gases enclosed in a constant volume, the total pressure ($P_{\\text{total}}$) is equal to the sum of the partial pressures ($p_i$) that each gas would exert if it occupied the entire container alone at the same temperature:</p><p>$$P_{\\text{total}} = p_1 + p_2 + p_3 + \\dots + p_n$$</p><p>The partial pressure of an individual component gas $i$ is directly proportional to its <b>mole fraction</b> ($x_i$):</p><p>$$p_i = x_i \\cdot P_{\\text{total}} \\quad \\text{where } x_i = \\frac{n_i}{n_{\\text{total}}}$$</p><ul><li><b>Limitation</b>: Applies strictly to non-reacting gases. It fails for mixtures of gases that react chemically at ambient temperature, such as $NH_3 + HCl \\rightarrow NH_4Cl\\text{ (s)}$ or $H_2 + Cl_2$ in sunlight.</li><li><b>Gas Collection over Water & Aqueous Tension</b>: When a gas is collected over water by downward displacement, the measured total pressure includes the vapor pressure of water (termed <b>aqueous tension</b>). The true pressure of the dry gas is obtained by subtracting aqueous tension: $P_{\\text{dry gas}} = P_{\\text{total}} - P_{\\text{aqueous tension}}$.</li></ul><h3>2. Graham's Law of Diffusion & Effusion (1833)</h3><p><b>Thomas Graham's Law</b> states that under identical conditions of temperature and pressure, the rate of diffusion or effusion of a gas ($r$) is inversely proportional to the square root of its molar mass ($M$) or vapor density ($d$):</p><p>$$r \\propto \\frac{1}{\\sqrt{M}} \\quad \\implies \\quad \\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{d_2}{d_1}}$$</p><ul><li><b>Diffusion vs Effusion</b>: <i>Diffusion</i> is the spontaneous mixing of gas particles due to thermal motion. <i>Effusion</i> is the passage of gas molecules through a tiny microscopic pinhole into an evacuated space without collisions.</li><li><b>Practical & Historic Applications</b>: Separation of fissile Uranium-235 from Uranium-238 via gaseous diffusion of $UF_6$ (Manhattan Project); Marsh gas ($CH_4$) safety alarms in coal mines; helium balloons deflating faster than air balloons because $He$ ($M = 4$) effuses $\\sqrt{29/4} \\approx 2.7$ times faster than air ($M \\approx 29$).</li></ul>",
            "pointsToRemember": [
                "Dalton's Law applies strictly to non-reacting gases; partial pressure equals mole fraction multiplied by total pressure ($p_i = x_i P_{\\text{total}}$).",
                "Aqueous tension must be subtracted from total moist gas pressure to find dry gas pressure ($P_{\\text{dry}} = P_{\\text{moist}} - P_{\\text{aqueous}}$).",
                "Graham's Law dictates that lighter gases diffuse much faster: rate is inversely proportional to the square root of molar mass ($r_1/r_2 = \\sqrt{M_2/M_1}$)."
            ],
            "keyNotes": [
                "Helium ($M = 4$) escapes a latex balloon ~2.7 times faster than nitrogen/oxygen air ($M \\approx 29$) due to Graham's Law of effusion."
            ],
            "questions": [
                {
                    "id": "ch2_m06_q01",
                    "question": "For which of the following gas pairs does Dalton's Law of Partial Pressures FAIL to apply at room temperature?",
                    "options": [
                        "Ammonia ($NH_3$) and Hydrogen chloride ($HCl$)",
                        "Nitrogen ($N_2$) and Oxygen ($O_2$)",
                        "Helium ($He$) and Argon ($Ar$)",
                        "Hydrogen ($H_2$) and Helium ($He$)"
                    ],
                    "answer": "Ammonia ($NH_3$) and Hydrogen chloride ($HCl$)",
                    "explanation": "Dalton's Law is valid only for non-reacting gases. $NH_3$ and $HCl$ react spontaneously at room temperature to form solid ammonium chloride ($NH_4Cl$), causing a drastic pressure collapse."
                },
                {
                    "id": "ch2_m06_q02",
                    "question": "Under Graham's Law of Diffusion, how much faster does Hydrogen gas ($H_2$, molar mass 2) diffuse compared to Oxygen gas ($O_2$, molar mass 32)?",
                    "options": [
                        "4 times faster",
                        "16 times faster",
                        "2 times faster",
                        "8 times faster"
                    ],
                    "answer": "4 times faster",
                    "explanation": "$r_{H_2} / r_{O_2} = \\sqrt{M_{O_2} / M_{H_2}} = \\sqrt{32 / 2} = \\sqrt{16} = 4$. Hydrogen diffuses 4 times faster than oxygen."
                },
                {
                    "id": "ch2_m06_q03",
                    "question": "When a gas is collected in the laboratory by downward displacement of water, why must 'aqueous tension' be subtracted from the measured pressure?",
                    "options": [
                        "The measured gas is moist and saturated with water vapor whose partial pressure adds to the total pressure",
                        "Water dissolves all the gas molecules",
                        "Water expands the volume of the measuring cylinder",
                        "Water increases the temperature of the collected gas"
                    ],
                    "answer": "The measured gas is moist and saturated with water vapor whose partial pressure adds to the total pressure",
                    "explanation": "Water evaporates until equilibrium vapor pressure (aqueous tension) is reached. Therefore, $P_{\\text{dry gas}} = P_{\\text{moist}} - P_{\\text{aqueous tension}}$."
                },
                {
                    "id": "ch2_m06_q04",
                    "question": "In a gas cylinder containing 8 g of $O_2$ (0.25 mol) and 14 g of $N_2$ (0.50 mol) under a total pressure of 12 atm, what is the partial pressure of $O_2$?",
                    "options": [
                        "4.0 atm",
                        "8.0 atm",
                        "6.0 atm",
                        "3.0 atm"
                    ],
                    "answer": "4.0 atm",
                    "explanation": "Total moles = $0.25 + 0.50 = 0.75\\text{ mol}$. Mole fraction of $O_2$ = $0.25 / 0.75 = 1/3$. Partial pressure = $(1/3) \\times 12\\text{ atm} = 4.0\\text{ atm}$."
                },
                {
                    "id": "ch2_m06_q05",
                    "question": "Why did the Manhattan Project utilize gaseous diffusion of Uranium Hexafluoride ($UF_6$) to enrich Uranium-235 for atomic weapons?",
                    "options": [
                        "$^{235}UF_6$ is slightly lighter than $^{238}UF_6$ and diffuses slightly faster through porous nickel barriers (Graham's Law)",
                        "Uranium-235 is attracted to magnetic poles while Uranium-238 is not",
                        "Fluorine gas reacts exclusively with Uranium-235",
                        "Uranium-238 precipitates as a solid while Uranium-235 remains gaseous"
                    ],
                    "answer": "$^{235}UF_6$ is slightly lighter than $^{238}UF_6$ and diffuses slightly faster through porous nickel barriers (Graham's Law)",
                    "explanation": "Because $^{235}UF_6$ has a molar mass of 349 while $^{238}UF_6$ is 352, the lighter isotope diffuses $\\sqrt{352/349} \\approx 1.0043$ times faster, allowing cascade enrichment."
                },
                {
                    "id": "ch2_m06_q06",
                    "question": "What is the key physical distinction between gaseous diffusion and effusion?",
                    "options": [
                        "Diffusion is bulk intermixing of gases; effusion is the escape of gas through a tiny orifice without collisions",
                        "Diffusion requires high pressure; effusion occurs only in liquids",
                        "Effusion involves chemical reactions; diffusion is purely physical",
                        "Diffusion occurs only for noble gases"
                    ],
                    "answer": "Diffusion is bulk intermixing of gases; effusion is the escape of gas through a tiny orifice without collisions",
                    "explanation": "Diffusion is spontaneous mixing through random molecular motion; effusion is the streaming of gas particles through a pinhole whose diameter is smaller than the mean free path."
                },
                {
                    "id": "ch2_m06_q07",
                    "question": "Why do party balloons filled with helium deflate much more rapidly through the latex membrane than air-filled balloons?",
                    "options": [
                        "Helium atoms are smaller and lighter, effusing through microscopic pores in latex ~2.7 times faster than nitrogen and oxygen",
                        "Helium chemically reacts with rubber polymers",
                        "Air creates an electric charge that seals the balloon",
                        "Helium is absorbed by rubber into a liquid"
                    ],
                    "answer": "Helium atoms are smaller and lighter, effusing through microscopic pores in latex ~2.7 times faster than nitrogen and oxygen",
                    "explanation": "Helium ($M = 4$) effuses $\\sqrt{29/4} \\approx 2.7$ times faster than air ($M \\approx 29$) through microscopic pores in latex according to Graham's Law."
                },
                {
                    "id": "ch2_m06_q08",
                    "question": "If the rate of diffusion of gas X is twice that of gas Y, what is the ratio of their molecular weights ($M_Y / M_X$)?",
                    "options": [
                        "4 : 1",
                        "2 : 1",
                        "1 : 2",
                        "1 : 4"
                    ],
                    "answer": "4 : 1",
                    "explanation": "$r_X / r_Y = \\sqrt{M_Y / M_X} = 2 \\implies M_Y / M_X = 2^2 = 4$."
                },
                {
                    "id": "ch2_m06_q09",
                    "question": "According to Dalton's Law, what determines the partial pressure of a specific gas in a multi-component gaseous mixture?",
                    "options": [
                        "Its mole fraction multiplied by the total mixture pressure",
                        "Its mass density divided by total volume",
                        "Its critical temperature multiplied by molar mass",
                        "Its boiling point relative to room temperature"
                    ],
                    "answer": "Its mole fraction multiplied by the total mixture pressure",
                    "explanation": "$p_i = x_i P_{\\text{total}}$, where $x_i$ is the mole fraction of gas $i$ in the homogeneous mixture."
                },
                {
                    "id": "ch2_m06_q10",
                    "question": "Under what condition does Graham's Law of diffusion strictly hold true?",
                    "options": [
                        "Gases must be compared at identical temperature and pressure conditions",
                        "Gases must be at their boiling points",
                        "Gases must be at ultra-high pressures exceeding 100 atm",
                        "Gases must be in ionized plasma state"
                    ],
                    "answer": "Gases must be compared at identical temperature and pressure conditions",
                    "explanation": "Graham's Law requires constant $T$ and $P$ so that molecular kinetic energy distributions and driving pressure differentials are equal."
                }
            ]
        },
        {
            "id": "m07",
            "moduleNumber": 7,
            "title": "Real Gases, Van der Waals Equation & Liquefaction of Gases",
            "tagline": "Deviations from ideality, compressibility factor (Z), Van der Waals corrections for volume and intermolecular attraction, critical temperature (Tc), and gas liquefaction.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Deviations from Ideal Behavior & Compressibility Factor ($Z$)</h3><p>Real gases deviate from the Ideal Gas Law ($PV = nRT$) because the Kinetic Molecular Theory makes two faulty assumptions: (1) gas molecules possess zero volume, and (2) gas molecules exert zero attractive forces on each other.</p><p>The degree of deviation is quantified by the <b>Compressibility Factor</b> ($Z$):</p><p>$$Z = \\frac{PV}{nRT} = \\frac{V_{\\text{real}}}{V_{\\text{ideal}}}$$</p><ul><li><b>Ideal Gas</b>: $Z = 1$ under all conditions.</li><li><b>Negative Deviation ($Z < 1$)</b>: At intermediate pressures, attractive intermolecular forces dominate, pulling molecules together so $V_{\\text{real}} < V_{\\text{ideal}}$. The gas is more compressible than an ideal gas (e.g., $CH_4, CO_2$).</li><li><b>Positive Deviation ($Z > 1$)</b>: At very high pressures, repulsive forces and finite molecular volume dominate ($V_{\\text{real}} > V_{\\text{ideal}}$); gas is less compressible. For $H_2$ and $He$, $Z > 1$ at all standard temperatures because their attractive forces are negligible.</li><li><b>Approach to Ideality</b>: Real gases behave most ideally at <b>Low Pressure and High Temperature</b>.</li></ul><h3>2. Johannes Diderik van der Waals Equation (1873)</h3><p>Van der Waals introduced two correction terms: an attraction correction ($an^2/V^2$) for internal pressure and an excluded volume correction ($nb$) for finite molecular size:</p><p>$$\\left( P + \\frac{a n^2}{V^2} \\right) (V - nb) = nRT$$</p><ul><li><b>Parameter 'a'</b>: Measures the magnitude of attractive intermolecular forces. Higher $a$ means stronger attraction and easier liquefaction (e.g., $NH_3 > SO_2 > CO_2 > O_2 > H_2 > He$). Units: $\\text{atm}\\cdot\\text{L}^2\\cdot\\text{mol}^{-2}$.</li><li><b>Parameter 'b' (Co-volume / Excluded Volume)</b>: Accounts for the finite incompressible volume of molecules: $b = 4 \\times V_m$ (four times the actual spherical volume of molecules). Units: $\\text{L}\\cdot\\text{mol}^{-1}$.</li></ul><h3>3. Critical Constants & Gas Liquefaction</h3><p>Thomas Andrews discovered that every gas possesses a <b>Critical Temperature ($T_c$)</b> above which it <i>cannot be liquefied</i> no matter how much pressure is applied:</p><p>$$T_c = \\frac{8a}{27Rb}, \\quad P_c = \\frac{a}{27b^2}, \\quad V_c = 3b$$</p><p>For $CO_2$, $T_c = 31.1^\\circ\\text{C}$. Above $31.1^\\circ\\text{C}$, $CO_2$ is a supercritical fluid. Linde's and Claude's processes liquefy gases by cooling below $T_c$ via the <b>Joule-Thomson Effect</b> (isenthalpic expansion of gas through a porous plug causes cooling, except for $H_2$ and $He$ which heat up unless pre-cooled below their inversion temperatures).</p>",
            "pointsToRemember": [
                "Real gases approach ideal behavior under conditions of Low Pressure and High Temperature.",
                "Compressibility factor $Z = PV/nRT$: $Z = 1$ (ideal), $Z < 1$ (attractions dominate), $Z > 1$ (molecular volume/repulsions dominate).",
                "Critical temperature ($T_c$) is the threshold above which a gas cannot be liquefied by pressure alone ($T_c = 8a/27Rb$)."
            ],
            "keyNotes": [
                "Van der Waals constant 'a' signifies intermolecular attraction (high 'a' = easily liquefied); 'b' represents 4 times the actual molecular volume."
            ],
            "questions": [
                {
                    "id": "ch2_m07_q01",
                    "question": "Under which combination of physical conditions does a real gas behave most closely like an ideal gas?",
                    "options": [
                        "Low pressure and High temperature",
                        "High pressure and Low temperature",
                        "High pressure and High temperature",
                        "Low pressure and Low temperature"
                    ],
                    "answer": "Low pressure and High temperature",
                    "explanation": "At low pressure, molecules are widely separated (molecular volume is negligible); at high temperature, high kinetic energy completely overcomes intermolecular attractions, mimicking ideal postulates."
                },
                {
                    "id": "ch2_m07_q02",
                    "question": "What physical parameter does the Van der Waals constant 'a' represent in the real gas equation?",
                    "options": [
                        "Magnitude of intermolecular attractive forces between gas molecules",
                        "Effective incompressible volume occupied by molecules",
                        "The average kinetic energy of gas molecules",
                        "The rate of chemical dissociation"
                    ],
                    "answer": "Magnitude of intermolecular attractive forces between gas molecules",
                    "explanation": "Constant 'a' corrects for intermolecular attractive forces ($an^2/V^2$) that pull molecules inward, reducing impact force against container walls."
                },
                {
                    "id": "ch2_m07_q03",
                    "question": "What is the relationship between the Van der Waals excluded volume constant 'b' and the actual physical volume of gas molecules?",
                    "options": [
                        "b is equal to 4 times the actual spherical volume of the molecules",
                        "b is equal to half the actual volume",
                        "b is equal to the exact actual volume",
                        "b is equal to 10 times the actual volume"
                    ],
                    "answer": "b is equal to 4 times the actual spherical volume of the molecules",
                    "explanation": "Calculations based on collision spheres demonstrate that the excluded volume $b$ is equal to 4 times the actual aggregate volume of the spherical gas molecules ($b = 4 N_A \\cdot \\frac{4}{3}\\pi r^3$)."
                },
                {
                    "id": "ch2_m07_q04",
                    "question": "What is 'Critical Temperature' ($T_c$) of a substance?",
                    "options": [
                        "The temperature above which a gas cannot be liquefied, no matter how much pressure is applied",
                        "The temperature at which a liquid freezes into solid",
                        "The temperature where compressibility factor Z equals zero",
                        "The temperature at which molecular motion ceases entirely"
                    ],
                    "answer": "The temperature above which a gas cannot be liquefied, no matter how much pressure is applied",
                    "explanation": "Above $T_c$, thermal kinetic energy is so great that no external pressure can force molecules close enough to maintain the liquid phase."
                },
                {
                    "id": "ch2_m07_q05",
                    "question": "For Hydrogen ($H_2$) and Helium ($He$) gases, why is the compressibility factor $Z > 1$ at all standard temperatures and moderate pressures?",
                    "options": [
                        "Their intermolecular attractive forces are exceptionally weak (very small 'a'), so molecular volume dominates",
                        "Their nuclei repel each other by magnetic force",
                        "They are polyatomic gases that condense spontaneously",
                        "Their molar mass is zero"
                    ],
                    "answer": "Their intermolecular attractive forces are exceptionally weak (very small 'a'), so molecular volume dominates",
                    "explanation": "Because $H_2$ and $He$ have tiny electron clouds, their London dispersion attractions are negligible ($a \\approx 0$). The equation simplifies to $P(V - b) = RT \\implies Z = 1 + Pb/RT > 1$."
                },
                {
                    "id": "ch2_m07_q06",
                    "question": "Which of the following gases has the highest Van der Waals constant 'a' and is therefore most easily liquefied?",
                    "options": [
                        "Ammonia ($NH_3$)",
                        "Oxygen ($O_2$)",
                        "Hydrogen ($H_2$)",
                        "Helium ($He$)"
                    ],
                    "answer": "Ammonia ($NH_3$)",
                    "explanation": "Ammonia ($NH_3$) possesses strong polar dipole-dipole interactions and hydrogen bonding, giving it a very high 'a' value ($4.17\\text{ atm}\\cdot\\text{L}^2/\\text{mol}^2$), making it easily liquefiable."
                },
                {
                    "id": "ch2_m07_q07",
                    "question": "What is the phenomenon called where an expanding real gas cools down as it passes through a porous throttle into lower pressure without heat exchange?",
                    "options": [
                        "Joule-Thomson Effect",
                        "Raman Effect",
                        "Tyndall Effect",
                        "Doppler Effect"
                    ],
                    "answer": "Joule-Thomson Effect",
                    "explanation": "In the Joule-Thomson effect, isenthalpic expansion forces real gas molecules to overcome intermolecular attractions using internal kinetic energy, producing cooling (basis of refrigeration)."
                },
                {
                    "id": "ch2_m07_q08",
                    "question": "Why do Hydrogen and Helium warm up rather than cool down during Joule-Thomson expansion at room temperature?",
                    "options": [
                        "Their inversion temperatures are far below room temperature (-80°C and -240°C respectively)",
                        "They undergo nuclear fusion upon expansion",
                        "They are diatomic super-conductors",
                        "They form covalent bonds during throttling"
                    ],
                    "answer": "Their inversion temperatures are far below room temperature (-80°C and -240°C respectively)",
                    "explanation": "Gases cool upon Joule-Thomson expansion only below their characteristic Inversion Temperature ($T_i = 2a/Rb$). For $H_2$ ($T_i = -80^\\circ\\text{C}$) and $He$ ($T_i = -240^\\circ\\text{C}$), expansion at room temperature causes heating."
                },
                {
                    "id": "ch2_m07_q09",
                    "question": "What is the value of the Compressibility Factor ($Z$) for an ideal gas?",
                    "options": [
                        "Exactly 1.0",
                        "Zero",
                        "Infinity",
                        "0.5"
                    ],
                    "answer": "Exactly 1.0",
                    "explanation": "For an ideal gas, $PV = nRT$, so $Z = PV / (nRT) = 1.0$ at all temperatures and pressures."
                },
                {
                    "id": "ch2_m07_q10",
                    "question": "What state of matter is achieved when a substance is held at temperatures and pressures above both its critical temperature and critical pressure?",
                    "options": [
                        "Supercritical Fluid",
                        "Bose-Einstein Condensate",
                        "Degenerate Fermi Gas",
                        "Crystalline Solid"
                    ],
                    "answer": "Supercritical Fluid",
                    "explanation": "Above critical point ($T > T_c$ and $P > P_c$), distinct liquid and gas phases cease to exist, forming a Supercritical Fluid (e.g., supercritical $CO_2$ used in decaffeination)."
                }
            ]
        },
        {
            "id": "m08",
            "moduleNumber": 8,
            "title": "Types of Solutions: Solid, Liquid & Gaseous Solutions, Solubility Factors",
            "tagline": "Classification of binary solutions, solute-solvent combinations, saturated/supersaturated solutions, dynamic dissolution equilibrium, and temperature/pressure effects.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Classification of Solutions by Physical State</h3><p>A <b>solution</b> is a homogeneous mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits. The component present in largest quantity is the <b>solvent</b>; the other components are <b>solutes</b>.</p><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Solution Type</th><th>Solvent</th><th>Solute</th><th>Common Real-World Examples</th></tr><tr><td>Gaseous</td><td>Gas</td><td>Gas</td><td>Air ($N_2 + O_2 + Ar$)</td></tr><tr><td>Gaseous</td><td>Gas</td><td>Liquid</td><td>Humidity in air, Chloroform mixed with $N_2$ gas</td></tr><tr><td>Gaseous</td><td>Gas</td><td>Solid</td><td>Camphor vapors in Nitrogen gas, Smoke aerosols</td></tr><tr><td>Liquid</td><td>Liquid</td><td>Gas</td><td>Carbonated soda ($CO_2$ in water), Dissolved $O_2$ in rivers</td></tr><tr><td>Liquid</td><td>Liquid</td><td>Liquid</td><td>Ethanol in water, Vinegar (acetic acid in water)</td></tr><tr><td>Liquid</td><td>Liquid</td><td>Solid</td><td>Salt ($NaCl$) in water, Sugar syrup</td></tr><tr><td>Solid</td><td>Solid</td><td>Gas</td><td>Hydrogen gas absorbed in Palladium ($H_2 / Pd$)</td></tr><tr><td>Solid</td><td>Solid</td><td>Liquid</td><td>Dental amalgam (Mercury in Silver/Tin)</td></tr><tr><td>Solid</td><td>Solid</td><td>Solid</td><td>Alloys: Brass ($Cu + Zn$), Bronze ($Cu + Sn$), 22K Gold ($Au + Cu$)</td></tr></table><h3>2. Solubility Dynamics & Influencing Factors</h3><p><b>Solubility</b> is the maximum amount of solute that can dissolve in a specified quantity of solvent (typically $100\\text{ g}$) at a given temperature to form a <b>saturated solution</b>.</p><ul><li><b>'Like Dissolves Like'</b>: Polar solutes (e.g., $NaCl, HCl$) dissolve in polar solvents ($H_2O$); non-polar solutes (e.g., naphthalene, iodine) dissolve in non-polar solvents ($CCl_4$, benzene).</li><li><b>Temperature Effect on Solid Solutes</b>: If dissolution is endothermic ($\\Delta H_{\\text{sol}} > 0$, e.g., $KNO_3, NH_4Cl$), solubility <i>increases</i> with temperature (Le Chatelier's Principle). If dissolution is exothermic ($\\Delta H_{\\text{sol}} < 0$, e.g., $Ce_2(SO_4)_3, CaO, Li_2CO_3$), solubility <i>decreases</i> with rising temperature.</li><li><b>Temperature Effect on Gas Solutes</b>: Dissolution of gases in liquids is universally exothermic ($\\Delta H_{\\text{sol}} < 0$). Hence, gas solubility strictly <b>decreases as temperature rises</b> (e.g., warm water loses dissolved oxygen, threatening aquatic fauna).</li></ul>",
            "pointsToRemember": [
                "Solutions are homogeneous mixtures classified by physical state: gaseous, liquid, or solid (e.g., brass, dental amalgam).",
                "'Like dissolves like': polar solvents dissolve polar/ionic solutes; non-polar solvents dissolve covalent/non-polar solutes.",
                "Gas solubility in liquids universally decreases with increasing temperature because gas dissolution is an exothermic process."
            ],
            "keyNotes": [
                "Dental amalgam is a solid solution where liquid Mercury ($Hg$) is the solute dissolved in solid Silver/Tin."
            ],
            "questions": [
                {
                    "id": "ch2_m08_q01",
                    "question": "Which of the following is an authentic example of a Solid Solution where a liquid is dissolved in a solid solvent?",
                    "options": [
                        "Dental Amalgam (Mercury dissolved in Silver)",
                        "Brass (Zinc in Copper)",
                        "Camphor vapor in nitrogen gas",
                        "Soda water"
                    ],
                    "answer": "Dental Amalgam (Mercury dissolved in Silver)",
                    "explanation": "In dental amalgams, liquid mercury is the solute dissolved homogeneously in solid silver/tin/copper metal lattice."
                },
                {
                    "id": "ch2_m08_q02",
                    "question": "Why does the solubility of gases (like Oxygen and Carbon dioxide) in water decrease as water temperature rises?",
                    "options": [
                        "Gas dissolution in liquids is an exothermic process (ΔH < 0), so Le Chatelier's principle shifts equilibrium toward gas release",
                        "Gases decompose into plasma at warm temperatures",
                        "Water molecules expand and physically crush gas atoms",
                        "Warm water has stronger hydrogen bonds that repel gas"
                    ],
                    "answer": "Gas dissolution in liquids is an exothermic process (ΔH < 0), so Le Chatelier's principle shifts equilibrium toward gas release",
                    "explanation": "When a gas dissolves in water, entropy decreases ($\\Delta S < 0$) and heat is released ($\\Delta H < 0$). By Le Chatelier's Principle, adding heat drives the equilibrium backwards, expelling dissolved gas."
                },
                {
                    "id": "ch2_m08_q03",
                    "question": "Why is thermal water pollution (discharge of hot industrial cooling water into rivers) hazardous to aquatic life?",
                    "options": [
                        "Elevated water temperature drastically reduces the concentration of dissolved oxygen available for fish respiration",
                        "Hot water converts oxygen into toxic ozone",
                        "Fish blood boils at 35°C",
                        "Hot water solidifies river minerals"
                    ],
                    "answer": "Elevated water temperature drastically reduces the concentration of dissolved oxygen available for fish respiration",
                    "explanation": "Because gas solubility decreases with temperature, warm industrial effluents deplete dissolved oxygen (DO) levels below the critical threshold required for aquatic survival."
                },
                {
                    "id": "ch2_m08_q04",
                    "question": "Hydrogen gas absorbed into the crystalline interstitial spaces of metallic Palladium represents which category of solution?",
                    "options": [
                        "Gas solute in Solid solvent",
                        "Solid solute in Gas solvent",
                        "Gas solute in Liquid solvent",
                        "Liquid solute in Solid solvent"
                    ],
                    "answer": "Gas solute in Solid solvent",
                    "explanation": "Interstitial hydrides like $H_2$ in $Pd$ are solid solutions where gaseous hydrogen acts as the solute dispersed in solid palladium solvent."
                },
                {
                    "id": "ch2_m08_q05",
                    "question": "What type of solution is ordinary atmospheric air?",
                    "options": [
                        "Gaseous solution (gas in gas)",
                        "Liquid aerosol",
                        "Colloidal foam",
                        "Heterogeneous coarse suspension"
                    ],
                    "answer": "Gaseous solution (gas in gas)",
                    "explanation": "Clean atmospheric air is a homogeneous gaseous solution of oxygen, argon, $CO_2$, and other trace gases dissolved in nitrogen solvent (~78%)."
                },
                {
                    "id": "ch2_m08_q06",
                    "question": "Which salt exhibits DECREASING solubility in water as temperature increases?",
                    "options": [
                        "Cerium(III) sulfate ($Ce_2(SO_4)_3$)",
                        "Potassium nitrate ($KNO_3$)",
                        "Ammonium chloride ($NH_4Cl$)",
                        "Sodium chloride ($NaCl$)"
                    ],
                    "answer": "Cerium(III) sulfate ($Ce_2(SO_4)_3$)",
                    "explanation": "For $Ce_2(SO_4)_3$, the heat of solution is exothermic ($\\Delta H < 0$), so increasing temperature decreases its solubility in water."
                },
                {
                    "id": "ch2_m08_q07",
                    "question": "What chemical rule explains why ionic sodium chloride dissolves readily in water but is insoluble in non-polar benzene?",
                    "options": [
                        "'Like dissolves like' (polar solutes dissolve in polar solvents with high dielectric constants)",
                        "Boyle's Law of hydration",
                        "Graham's Law of diffusion",
                        "Aufbau exclusion principle"
                    ],
                    "answer": "'Like dissolves like' (polar solutes dissolve in polar solvents with high dielectric constants)",
                    "explanation": "Water is a polar solvent with a high dielectric constant ($\\approx 80$) that hydrates ions and weakens electrostatic attraction; non-polar benzene cannot solvate ions."
                },
                {
                    "id": "ch2_m08_q08",
                    "question": "What is a 'supersaturated solution'?",
                    "options": [
                        "A metastable solution containing more dissolved solute than the thermodynamic saturation limit at that temperature",
                        "A solution containing equal parts solute and solvent",
                        "A solution at its critical boiling point",
                        "A solution that has turned into a solid block"
                    ],
                    "answer": "A metastable solution containing more dissolved solute than the thermodynamic saturation limit at that temperature",
                    "explanation": "A supersaturated solution holds more dissolved solute than a saturated solution at equilibrium; it is metastable and precipitates excess solute upon seed crystal addition."
                },
                {
                    "id": "ch2_m08_q09",
                    "question": "Brass, an alloy widely used in musical instruments and fittings, is a solid solution composed of:",
                    "options": [
                        "Copper (solvent) and Zinc (solute)",
                        "Copper and Tin",
                        "Iron and Carbon",
                        "Lead and Tin"
                    ],
                    "answer": "Copper (solvent) and Zinc (solute)",
                    "explanation": "Brass is a substitutional solid solution of Zinc (typically ~30–40%) in Copper matrix (~60–70%). Bronze is Copper and Tin."
                },
                {
                    "id": "ch2_m08_q10",
                    "question": "What happens when a crystal of solute is dropped into an unsaturated solution?",
                    "options": [
                        "The crystal dissolves completely into the solution",
                        "The crystal causes instant precipitation of all solute",
                        "The crystal floats on top without any change",
                        "The solution solidifies instantaneously"
                    ],
                    "answer": "The crystal dissolves completely into the solution",
                    "explanation": "In an unsaturated solution, the solvent retains capacity to dissolve additional solute, so the added crystal dissolves."
                }
            ]
        },
        {
            "id": "m09",
            "moduleNumber": 9,
            "title": "Concentration Units: Molarity, Molality, Normality & Mole Fraction",
            "tagline": "Definitions, mathematical formulas, temperature dependence, Molarity (M), Molality (m), Normality (N), Mole Fraction (X), and valence factors.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Quantitative Measures of Solution Concentration</h3><p>Precise stoichiometric calculations require standard units to express the proportion of solute dissolved in a solution or solvent:</p><ul><li><b>Molarity ($M$)</b>: Number of moles of solute dissolved per liter ($1\\text{ dm}^3$) of solution:$$M = \\frac{\\text{Moles of solute } (n)}{\\text{Volume of solution in Liters } (V_{\\text{sol}})} = \\frac{w_B \\times 1000}{M_B \\times V_{(\\text{mL})}}$$<i>Temperature Dependency</i>: Because liquid volume expands or contracts with temperature, <b>Molarity is temperature-dependent</b>.</li><li><b>Molality ($m$)</b>: Number of moles of solute dissolved per kilogram ($1000\\text{ g}$) of solvent:$$m = \\frac{\\text{Moles of solute } (n)}{\\text{Mass of solvent in kg } (W_{\\text{solvent}})} = \\frac{w_B \\times 1000}{M_B \\times W_A(\\text{g})}$$<i>Temperature Independence</i>: Since mass is unaffected by thermal expansion, <b>Molality is strictly temperature-independent</b>, making it the preferred unit for colligative property measurements.</li><li><b>Mole Fraction ($x$ or $X$)</b>: Ratio of moles of a specific component to the total moles of all components in the mixture:$$x_A = \\frac{n_A}{n_A + n_B}, \\quad x_B = \\frac{n_B}{n_A + n_B}, \\quad \\sum x_i = 1$$Dimensionless and temperature-independent.</li><li><b>Normality ($N$)</b>: Number of gram equivalents of solute per liter of solution:$$N = \\frac{\\text{Gram equivalents of solute}}{V_{(\\text{L})}} = M \\times n\\text{-factor (valence factor)}$$For acids, $n$-factor is basicity (e.g., $HCl = 1, H_2SO_4 = 2, H_3PO_4 = 3, H_3PO_3 = 2$). For bases, $n$-factor is acidity (e.g., $NaOH = 1, Ca(OH)_2 = 2$). For redox agents, $n$-factor is electrons gained/lost per molecule ($KMnO_4$ in acidic medium has $n = 5$: $Mn^{+7} \\rightarrow Mn^{+2}$).</li></ul>",
            "pointsToRemember": [
                "Molarity ($M = \\text{mol/L}$) and Normality ($N = \\text{eq/L}$) depend on temperature because solution volume changes with temperature.",
                "Molality ($m = \\text{mol/kg solvent}$) and Mole Fraction ($x$) depend only on mass and are strictly temperature-independent.",
                "Normality = Molarity $\\times n$-factor (where $n$-factor is basicity for acids, acidity for bases, or electron change in redox)."
            ],
            "keyNotes": [
                "Phosphorous acid ($H_3PO_3$) is diprotic ($n=2$) because one hydrogen is directly bonded to phosphorus ($P-H$) and cannot ionize."
            ],
            "questions": [
                {
                    "id": "ch2_m09_q01",
                    "question": "Which of the following concentration units is strictly INDEPENDENT of temperature changes?",
                    "options": [
                        "Molality ($m$)",
                        "Molarity ($M$)",
                        "Normality ($N$)",
                        "Formality ($F$)"
                    ],
                    "answer": "Molality ($m$)",
                    "explanation": "Molality is defined as moles of solute per kilogram of solvent. Because mass does not change with thermal expansion, molality is invariant with temperature."
                },
                {
                    "id": "ch2_m09_q02",
                    "question": "What is the molarity of a solution prepared by dissolving 4.0 g of Sodium hydroxide ($NaOH$, molar mass 40 g/mol) in water to make 500 mL of solution?",
                    "options": [
                        "0.20 M",
                        "0.10 M",
                        "0.40 M",
                        "1.00 M"
                    ],
                    "answer": "0.20 M",
                    "explanation": "Moles of $NaOH = 4.0 / 40 = 0.1\\text{ mol}$. Volume = $500\\text{ mL} = 0.5\\text{ L}$. Molarity = $0.1\\text{ mol} / 0.5\\text{ L} = 0.20\\text{ M}$."
                },
                {
                    "id": "ch2_m09_q03",
                    "question": "What is the relationship between Normality (N) and Molarity (M) for a Sulfuric acid ($H_2SO_4$) solution?",
                    "options": [
                        "N = 2 × M",
                        "N = M / 2",
                        "N = M",
                        "N = 4 × M"
                    ],
                    "answer": "N = 2 × M",
                    "explanation": "$H_2SO_4$ is a dibasic acid with an $n$-factor of 2 (donates $2\\text{ }H^+$ ions). Therefore, $\\text{Normality} = \\text{Molarity} \\times 2$."
                },
                {
                    "id": "ch2_m09_q04",
                    "question": "In a binary solution containing 1 mole of ethanol and 4 moles of water, what is the mole fraction of ethanol?",
                    "options": [
                        "0.20",
                        "0.25",
                        "0.80",
                        "0.50"
                    ],
                    "answer": "0.20",
                    "explanation": "Mole fraction $x_{\\text{ethanol}} = n_{\\text{ethanol}} / (n_{\\text{ethanol}} + n_{\\text{water}}) = 1 / (1 + 4) = 1/5 = 0.20$."
                },
                {
                    "id": "ch2_m09_q05",
                    "question": "Why does the molarity of an aqueous solution change when its temperature is increased from 20°C to 80°C?",
                    "options": [
                        "Liquid volume expands with temperature, decreasing the number of moles per unit volume",
                        "Solute molecules decompose into gas",
                        "Water molecules gain mass when heated",
                        "Atmospheric pressure crushes solute particles"
                    ],
                    "answer": "Liquid volume expands with temperature, decreasing the number of moles per unit volume",
                    "explanation": "Since $M = \\text{moles} / V$ and liquid volume expands upon heating ($V$ increases), molarity decreases with rising temperature."
                },
                {
                    "id": "ch2_m09_q06",
                    "question": "What is the basicity ($n$-factor) of Orthophosphorous acid ($H_3PO_3$)?",
                    "options": [
                        "2 (dibasic acid)",
                        "3 (tribasic acid)",
                        "1 (monobasic acid)",
                        "4 (tetrabasic acid)"
                    ],
                    "answer": "2 (dibasic acid)",
                    "explanation": "$H_3PO_3$ has the structural formula $HP(=O)(OH)_2$. Only the two hydrogen atoms bonded to oxygen in $P-OH$ groups ionize; the $P-H$ hydrogen is non-ionizable."
                },
                {
                    "id": "ch2_m09_q07",
                    "question": "How many grams of Glucose ($C_6H_{12}O_6$, molar mass 180 g/mol) are required to prepare 1.0 L of a 0.5 M solution?",
                    "options": [
                        "90 g",
                        "180 g",
                        "45 g",
                        "360 g"
                    ],
                    "answer": "90 g",
                    "explanation": "Mass = $\\text{Molarity} \\times \\text{Volume (L)} \\times \\text{Molar mass} = 0.5 \\times 1.0 \\times 180 = 90\\text{ g}$."
                },
                {
                    "id": "ch2_m09_q08",
                    "question": "What is the sum of the mole fractions of all components in any homogeneous solution?",
                    "options": [
                        "Always exactly 1.0",
                        "Always 100",
                        "Equal to the total volume in liters",
                        "Varies with temperature"
                    ],
                    "answer": "Always exactly 1.0",
                    "explanation": "By definition, the sum of fractional parts of any whole equals unity: $\\sum x_i = x_A + x_B + \\dots = 1.0$."
                },
                {
                    "id": "ch2_m09_q09",
                    "question": "In an acidic medium, Potassium permanganate ($KMnO_4$) is reduced to $Mn^{2+}$. What is its valence factor ($n$-factor) for calculating normality?",
                    "options": [
                        "5",
                        "3",
                        "1",
                        "7"
                    ],
                    "answer": "5",
                    "explanation": "Manganese is reduced from oxidation state $+7$ ($MnO_4^-$) to $+2$ ($Mn^{2+}$), gaining 5 electrons ($n = 7 - 2 = 5$). Thus, $N = 5 \\times M$."
                },
                {
                    "id": "ch2_m09_q10",
                    "question": "Under what condition are the numerical values of Molarity and Molality nearly identical for an aqueous solution?",
                    "options": [
                        "In very dilute aqueous solutions at room temperature where solution density is ~1.0 g/mL",
                        "In highly concentrated 10 M solutions",
                        "At water's critical temperature (374°C)",
                        "Only in non-aqueous benzene solutions"
                    ],
                    "answer": "In very dilute aqueous solutions at room temperature where solution density is ~1.0 g/mL",
                    "explanation": "In very dilute aqueous solutions, the mass of solute is negligible and $1\\text{ L}$ of solution weighs approximately $1000\\text{ g}$ ($1\\text{ kg}$ solvent), making $M \\approx m$."
                }
            ]
        },
        {
            "id": "m10",
            "moduleNumber": 10,
            "title": "Parts Per Million (PPM), Mass Percentage & Dilution Principles",
            "tagline": "PPM, PPB for trace atmospheric/water pollutants, mass percent (w/w), volume percent (v/v), dilution law (M1V1 = M2V2), and stock solution preparation.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Trace Concentration Units: PPM and PPB</h3><p>When a solute is present in trace or microgram quantities—such as atmospheric air pollutants ($SO_2, NO_x, PM_{2.5}$), fluoride/arsenic in groundwater, or chlorine in municipal water—standard molarity units are inconveniently small. Specialized fractional units are employed:</p><ul><li><b>Parts Per Million (PPM)</b>: Number of parts of solute per million ($10^6$) parts of solution:$$\\text{PPM} = \\frac{\\text{Mass of solute}}{\\text{Total mass of solution}} \\times 10^6 = \\frac{\\text{mg of solute}}{\\text{Liter of water (assuming } d = 1\\text{ g/mL)}}$$Example: Permissible fluoride level in drinking water is $1.0 - 1.5\\text{ ppm}$ ($1.0\\text{ mg/L}$). Excess ($>1.5\\text{ ppm}$) causes dental fluorosis and skeletal deformities; absence ($<1.0\\text{ ppm}$) causes tooth decay.</li><li><b>Parts Per Billion (PPB)</b>: Number of parts of solute per billion ($10^9$) parts of solution:$$\\text{PPB} = \\frac{\\text{Mass of solute}}{\\text{Total mass of solution}} \\times 10^9 = \\frac{\\mu\\text{g of solute}}{\\text{Liter of water}}$$Used for extreme toxins like dioxins, lead ($Pb$), mercury ($Hg$), and pesticide residues.</li></ul><h3>2. Mass & Volume Percentages</h3><ul><li><b>Mass Percentage (w/w)</b>: $\\frac{\\text{Mass of solute}}{\\text{Total mass of solution}} \\times 100$. E.g., commercial Bleaching solution is $3.62\\%\\text{ w/w}$ sodium hypochlorite.</li><li><b>Volume Percentage (v/v)</b>: $\\frac{\\text{Volume of solute}}{\\text{Total volume of solution}} \\times 100$. E.g., a $35\\%\\text{ (v/v)}$ solution of ethylene glycol in water is standard automobile engine antifreeze (lowers freezing point to $-17.6^\\circ\\text{C}$).</li></ul><h3>3. Dilution Formula & Mixing Law</h3><p>When a solvent is added to dilute a concentrated stock solution, the total moles of solute remain constant ($n_1 = n_2$):</p><p>$$M_1 V_1 = M_2 V_2 \\quad \\text{and} \\quad N_1 V_1 = N_2 V_2$$</p><p>When two solutions of the same solute are mixed:</p><p>$$M_{\\text{mix}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}$$</p>",
            "pointsToRemember": [
                "PPM represents milligrams of solute per liter of water ($1\\text{ ppm} = 1\\text{ mg/L}$); PPB represents micrograms per liter ($1\\text{ ppb} = 1\\,\\mu\\text{g/L}$).",
                "Dilution Law: $M_1V_1 = M_2V_2$ because adding pure solvent does not alter the absolute moles of solute.",
                "Automobile antifreeze commonly uses a 35% (v/v) aqueous solution of ethylene glycol to protect engines down to -17.6°C."
            ],
            "keyNotes": [
                "Safe drinking water fluoride guidelines: 1.0–1.5 ppm prevents dental caries; >1.5 ppm leads to fluorosis."
            ],
            "questions": [
                {
                    "id": "ch2_m10_q01",
                    "question": "What physical concentration does 1.0 Part Per Million (PPM) correspond to in an aqueous solution with density 1.0 g/mL?",
                    "options": [
                        "1.0 milligram per liter (1.0 mg/L)",
                        "1.0 gram per liter (1.0 g/L)",
                        "1.0 microgram per liter (1.0 μg/L)",
                        "1.0 nanogram per milliliter"
                    ],
                    "answer": "1.0 milligram per liter (1.0 mg/L)",
                    "explanation": "Since $1\\text{ L}$ of water weighs $10^6\\text{ mg}$, $1\\text{ mg}$ solute per $10^6\\text{ mg}$ water is exactly 1 part in $10^6$ parts (1 PPM)."
                },
                {
                    "id": "ch2_m10_q02",
                    "question": "What volume of concentrated 12.0 M $HCl$ is required to prepare 600 mL of 2.0 M $HCl$ solution?",
                    "options": [
                        "100 mL",
                        "50 mL",
                        "200 mL",
                        "25 mL"
                    ],
                    "answer": "100 mL",
                    "explanation": "Using dilution law $M_1V_1 = M_2V_2$: $12.0 \\times V_1 = 2.0 \\times 600 \\implies V_1 = 1200 / 12 = 100\\text{ mL}$."
                },
                {
                    "id": "ch2_m10_q03",
                    "question": "What compound is universally employed as an automobile radiator antifreeze at approximately 35% (v/v) concentration?",
                    "options": [
                        "Ethylene Glycol",
                        "Methanol",
                        "Glycerol",
                        "Acetone"
                    ],
                    "answer": "Ethylene Glycol",
                    "explanation": "Ethylene glycol ($HO-CH_2-CH_2-OH$) at 35% (v/v) depresses the freezing point of water to $-17.6^\\circ\\text{C}$ while elevating the boiling point, preventing radiator boilover in summer."
                },
                {
                    "id": "ch2_m10_q04",
                    "question": "What adverse medical condition occurs when drinking water contains fluoride ion concentrations exceeding 1.5–2.0 PPM?",
                    "options": [
                        "Dental Fluorosis (mottling and browning of tooth enamel) and Skeletal Fluorosis",
                        "Goitre and thyroid enlargement",
                        "Methemoglobinemia (Blue Baby Syndrome)",
                        "Minamata disease"
                    ],
                    "answer": "Dental Fluorosis (mottling and browning of tooth enamel) and Skeletal Fluorosis",
                    "explanation": "Excess fluoride ($>1.5\\text{ ppm}$) replaces hydroxide in hydroxyapatite to form fragile fluoroapatite, causing brown mottling (dental fluorosis) and bone deformities."
                },
                {
                    "id": "ch2_m10_q05",
                    "question": "If 100 mL of 1.0 M $HCl$ is mixed with 100 mL of 3.0 M $HCl$, what is the molarity of the resulting mixed solution?",
                    "options": [
                        "2.0 M",
                        "1.5 M",
                        "4.0 M",
                        "2.5 M"
                    ],
                    "answer": "2.0 M",
                    "explanation": "$M_{\\text{mix}} = (M_1V_1 + M_2V_2) / (V_1 + V_2) = (1.0 \\times 100 + 3.0 \\times 100) / 200 = 400 / 200 = 2.0\\text{ M}$."
                },
                {
                    "id": "ch2_m10_q06",
                    "question": "What dangerous physiological condition is caused by high nitrate ($NO_3^-$) contamination (>45–50 mg/L) in infant drinking water?",
                    "options": [
                        "Methemoglobinemia ('Blue Baby Syndrome')",
                        "Arsenicosis (Black Foot Disease)",
                        "Itai-Itai disease",
                        "Scurvy"
                    ],
                    "answer": "Methemoglobinemia ('Blue Baby Syndrome')",
                    "explanation": "Nitrates in gut bacteria reduce to nitrites ($NO_2^-$), which oxidize hemoglobin ($Fe^{2+}$) to methemoglobin ($Fe^{3+}$), impairing oxygen transport and causing cyanosis in infants."
                },
                {
                    "id": "ch2_m10_q07",
                    "question": "What concentration unit is most appropriate for measuring extremely hazardous toxins like lead ($Pb$), mercury ($Hg$), and dioxins in drinking water?",
                    "options": [
                        "Parts Per Billion (PPB) or micrograms per liter (μg/L)",
                        "Molarity (M)",
                        "Normality (N)",
                        "Molality (m)"
                    ],
                    "answer": "Parts Per Billion (PPB) or micrograms per liter (μg/L)",
                    "explanation": "Heavy metals and persistent organic pollutants exert severe toxicity at microgram levels, quantified as Parts Per Billion ($1\\text{ ppb} = 1\\,\\mu\\text{g/L} = 10^{-9}$)."
                },
                {
                    "id": "ch2_m10_q08",
                    "question": "A solution contains 20 g of salt dissolved in 80 g of water. What is the mass percentage (w/w) of the salt?",
                    "options": [
                        "20%",
                        "25%",
                        "16.7%",
                        "80%"
                    ],
                    "answer": "20%",
                    "explanation": "Total solution mass = $20\\text{ g} + 80\\text{ g} = 100\\text{ g}$. Mass % = $(20 / 100) \\times 100 = 20\\%$."
                },
                {
                    "id": "ch2_m10_q09",
                    "question": "Why does adding 500 mL of pure distilled water to 500 mL of a 0.5 M glucose solution halve its molarity?",
                    "options": [
                        "The total moles of glucose remain constant while the solution volume doubles from 0.5 L to 1.0 L",
                        "Glucose decomposes into carbon dioxide upon contact with water",
                        "Water destroys half of the glucose molecules",
                        "Hydrogen bonding consumes the solute"
                    ],
                    "answer": "The total moles of glucose remain constant while the solution volume doubles from 0.5 L to 1.0 L",
                    "explanation": "By Dilution Law ($M_1V_1 = M_2V_2$), since volume doubles ($V_2 = 2V_1$), molarity must halve ($M_2 = M_1 / 2 = 0.25\\text{ M}$)."
                },
                {
                    "id": "ch2_m10_q10",
                    "question": "Commercial household liquid bleach is typically sold as an aqueous solution containing approximately 3.5% to 5.0% (w/w) of which active chemical agent?",
                    "options": [
                        "Sodium Hypochlorite ($NaOCl$)",
                        "Sodium Hydroxide ($NaOH$)",
                        "Hydrogen Peroxide ($H_2O_2$)",
                        "Potassium Chlorate ($KClO_3$)"
                    ],
                    "answer": "Sodium Hypochlorite ($NaOCl$)",
                    "explanation": "Household bleach contains 3–6% sodium hypochlorite ($NaOCl$), a potent oxidizing and disinfecting agent."
                }
            ]
        },
        {
            "id": "m11",
            "moduleNumber": 11,
            "title": "Henry's Law of Gas Solubility & Hyperbaric Applications",
            "tagline": "William Henry's gas solubility law, Henry's constant (Kh) temperature dependence, soda carbonation, scuba diving bends, and hyperbaric oxygen chambers.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. William Henry's Law (1803)</h3><p><b>Henry's Law</b> states that at constant temperature, the solubility ($S$ or mole fraction $x$) of a gas in a liquid is directly proportional to the partial pressure ($p$) of the gas present above the surface of the liquid or solution:</p><p>$$p = K_H \\cdot x \\quad \\text{or} \\quad m = k \\cdot p$$</p><ul><li><b>Henry's Law Constant ($K_H$)</b>: Higher value of $K_H$ at a given pressure signifies <b>lower solubility</b> of the gas in the liquid.</li><li><b>Temperature Dependence of $K_H$</b>: Because gas dissolution in liquids is exothermic, gas solubility decreases with increasing temperature; hence, the value of $K_H$ <b>increases with rising temperature</b>.</li><li><b>Limitations</b>: Fails if the pressure is excessively high, temperature is extremely low, or if the gas reacts chemically with the solvent (e.g., $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$, $HCl + H_2O \\rightarrow H_3O^+ + Cl^-$) or dissociates into ions.</li></ul><h3>2. Real-World & Biomedical Applications</h3><ul><li><b>Carbonated Beverages</b>: To increase $CO_2$ solubility, soft drink and soda bottles are sealed under high artificial $CO_2$ pressure ($3-4\\text{ atm}$). When the bottle is uncapped, external pressure drops to $1\\text{ atm}$, gas solubility plunges, and effervescent $CO_2$ bubbles vigorously escape.</li><li><b>Scuba Diving & 'The Bends' (Decompression Sickness)</b>: At high underwater hydrostatic pressure, atmospheric $N_2$ dissolves in high amounts into blood and tissues. During rapid ascent, pressure drops suddenly, causing dissolved $N_2$ to come out of solution as microscopic gas bubbles in blood capillaries, blocking circulation and creating agonizing joint pain ('the bends') or lethal embolisms. To prevent this, deep-sea breathing tanks are diluted with <b>Helium</b> (mixture of $11.7\\%\\text{ He}, 56.2\\%\\text{ N}_2, 32.1\\%\\text{ O}_2$) because helium has low blood solubility and high diffusivity.</li><li><b>High Altitude Anoxia</b>: At high mountain elevations, atmospheric $pO_2$ is low, leading to low oxygen saturation in arterial blood and brain tissues, causing weakness, cognitive impairment, and hypoxia ('altitude sickness').</li><li><b>Hyperbaric Medicine</b>: Hyperbaric oxygen chambers deliver pure $O_2$ at $2-3\\text{ atm}$ pressure, dramatically increasing dissolved $O_2$ in plasma to treat carbon monoxide poisoning, gangrene, and diabetic ulcers.</li></ul>",
            "pointsToRemember": [
                "Henry's Law: $p = K_H \\cdot x$. Higher $K_H$ indicates lower gas solubility; $K_H$ increases as temperature rises.",
                "Soft drinks are sealed under high $CO_2$ pressure to force more gas into aqueous solution.",
                "Deep-sea scuba tanks are diluted with Helium ($~11.7\\%$) to prevent Nitrogen narcosis and decompression sickness ('the bends')."
            ],
            "keyNotes": [
                "Gases that chemically react with water (such as $NH_3$ and $HCl$) do not obey Henry's Law because they dissociate rather than remaining intact dissolved gas molecules."
            ],
            "questions": [
                {
                    "id": "ch2_m11_q01",
                    "question": "Why is Helium gas (approximately 11.7%) mixed into the breathing air cylinders of deep-sea scuba divers?",
                    "options": [
                        "Helium has extremely low solubility in blood even under high pressure, preventing painful decompression sickness ('the bends')",
                        "Helium reacts with nitrogen to form breathable oxygen",
                        "Helium makes diver vocal cords louder underwater",
                        "Helium solidifies nitrogen bubbles"
                    ],
                    "answer": "Helium has extremely low solubility in blood even under high pressure, preventing painful decompression sickness ('the bends')",
                    "explanation": "Unlike nitrogen, helium has low lipid/blood solubility and high diffusivity, preventing bubbles from forming in blood vessels during ascent."
                },
                {
                    "id": "ch2_m11_q02",
                    "question": "What is the relationship between Henry's Law constant ($K_H$) and the solubility of a gas in a liquid at a specified temperature?",
                    "options": [
                        "Higher $K_H$ value corresponds to lower gas solubility",
                        "Higher $K_H$ corresponds to higher gas solubility",
                        "$K_H$ has no relationship to solubility",
                        "$K_H$ is always zero for non-polar gases"
                    ],
                    "answer": "Higher $K_H$ value corresponds to lower gas solubility",
                    "explanation": "From $p = K_H \\cdot x$, rearranging gives $x = p / K_H$. At constant pressure $p$, as $K_H$ increases, solubility $x$ must decrease."
                },
                {
                    "id": "ch2_m11_q03",
                    "question": "Why does a bottle of carbonated soda vigorously effervesce and fizz immediately when the cap is unscrewed?",
                    "options": [
                        "Sudden drop in headspace pressure lowers $CO_2$ solubility according to Henry's Law, causing dissolved gas to bubble out",
                        "External air heats up the soda instantly",
                        "Carbonic acid turns into solid carbon",
                        "The soda cap reacts with atmospheric nitrogen"
                    ],
                    "answer": "Sudden drop in headspace pressure lowers $CO_2$ solubility according to Henry's Law, causing dissolved gas to bubble out",
                    "explanation": "The bottle is sealed under high pressure ($~4\\text{ atm}$). Opening it exposes the liquid to $1\\text{ atm}$, drastically reducing $CO_2$ solubility."
                },
                {
                    "id": "ch2_m11_q04",
                    "question": "Why does Henry's Law constant ($K_H$) for gases like $N_2$ and $O_2$ in water INCREASE as temperature rises?",
                    "options": [
                        "Gas dissolution is an exothermic process, so higher temperatures decrease gas solubility, raising $K_H$",
                        "Gas molecules gain mass at higher temperatures",
                        "Water molecules contract upon heating",
                        "Pressure becomes infinite at higher temperatures"
                    ],
                    "answer": "Gas dissolution is an exothermic process, so higher temperatures decrease gas solubility, raising $K_H$",
                    "explanation": "Since dissolution is exothermic, heating reduces solubility $x$. Since $K_H = p/x$, a decrease in $x$ produces an increase in $K_H$."
                },
                {
                    "id": "ch2_m11_q05",
                    "question": "Which of the following gases deviates drastically from Henry's Law in aqueous solution because it chemically reacts with water?",
                    "options": [
                        "Ammonia ($NH_3$)",
                        "Oxygen ($O_2$)",
                        "Nitrogen ($N_2$)",
                        "Helium ($He$)"
                    ],
                    "answer": "Ammonia ($NH_3$)",
                    "explanation": "Ammonia reacts chemically with water ($NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$) to form ions, violating the assumption of non-reacting molecular dissolution."
                },
                {
                    "id": "ch2_m11_q06",
                    "question": "Why do mountaineers climbing high peaks like Mount Everest experience symptoms of hypoxia ('altitude sickness')?",
                    "options": [
                        "Low atmospheric partial pressure of oxygen ($pO_2$) at high altitude reduces dissolved oxygen in blood and brain tissue",
                        "High altitude air contains zero nitrogen",
                        "Gravity breaks down hemoglobin into iron",
                        "Cold temperatures freeze oxygen molecules in the trachea"
                    ],
                    "answer": "Low atmospheric partial pressure of oxygen ($pO_2$) at high altitude reduces dissolved oxygen in blood and brain tissue",
                    "explanation": "Atmospheric pressure is low at high altitudes, reducing oxygen partial pressure and arterial oxygen saturation, leading to cerebral hypoxia."
                },
                {
                    "id": "ch2_m11_q07",
                    "question": "What medical treatment employs a pressurized chamber containing 100% oxygen at 2 to 3 atmospheres to treat severe carbon monoxide poisoning?",
                    "options": [
                        "Hyperbaric Oxygen Therapy (HBOT)",
                        "Dialysis filtration",
                        "Chemotherapy infusion",
                        "Electroconvulsive shock therapy"
                    ],
                    "answer": "Hyperbaric Oxygen Therapy (HBOT)",
                    "explanation": "Hyperbaric therapy uses high pressure ($2–3\\text{ atm}$) to dissolve large amounts of oxygen directly in plasma (Henry's Law), displacing carbon monoxide from carboxyhemoglobin."
                },
                {
                    "id": "ch2_m11_q08",
                    "question": "What happens to the taste and dissolved oxygen content of boiled drinking water when it is cooled in a sealed container?",
                    "options": [
                        "It tastes flat because boiling expelled dissolved atmospheric gases ($O_2, CO_2$)",
                        "It tastes salty because water turns into sodium",
                        "It becomes carbonated naturally",
                        "It turns highly acidic with pH 1.0"
                    ],
                    "answer": "It tastes flat because boiling expelled dissolved atmospheric gases ($O_2, CO_2$)",
                    "explanation": "Boiling strips out dissolved $O_2$ and $CO_2$ gases. Dissolved gases give water its crisp taste; de-aerated water tastes flat."
                },
                {
                    "id": "ch2_m11_q09",
                    "question": "Under Henry's Law, what will happen to the amount of gas dissolved in a liquid if the gas partial pressure above it is doubled at constant temperature?",
                    "options": [
                        "The mass of dissolved gas doubles",
                        "The mass of dissolved gas is halved",
                        "The mass of dissolved gas quadruples",
                        "Dissolved gas remains unchanged"
                    ],
                    "answer": "The mass of dissolved gas doubles",
                    "explanation": "By Henry's Law ($m = k \\cdot p$), the mass of dissolved gas is directly proportional to partial pressure; doubling $p$ doubles $m$."
                },
                {
                    "id": "ch2_m11_q10",
                    "question": "Why is aquatic life significantly more comfortable and energetic in cold mountain streams than in warm tropical stagnant pools?",
                    "options": [
                        "Cold water dissolves higher concentrations of dissolved oxygen necessary for gills respiration (Henry's Law / exothermic dissolution)",
                        "Cold water contains less salt",
                        "Fish hibernate in warm water",
                        "Warm water converts oxygen into hydrogen sulfide"
                    ],
                    "answer": "Cold water dissolves higher concentrations of dissolved oxygen necessary for gills respiration (Henry's Law / exothermic dissolution)",
                    "explanation": "Because gas solubility increases at lower temperatures, cold water holds far more dissolved oxygen than warm water."
                }
            ]
        },
        {
            "id": "m12",
            "moduleNumber": 12,
            "title": "Raoult's Law & Colligative Properties: Relative Lowering of Vapor Pressure",
            "tagline": "François-Marie Raoult's law, ideal vs non-ideal solutions, azeotropes, definition of colligative properties, and Relative Lowering of Vapor Pressure (RLVP).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Raoult's Law for Volatile and Non-Volatile Solutes</h3><p><b>Raoult's Law (1886)</b> states that for a solution of volatile liquids, the partial vapor pressure of each component ($p_i$) in the solution is directly proportional to its mole fraction ($x_i$):</p><p>$$p_A = p_A^\\circ \\cdot x_A \\quad \\text{and} \\quad p_B = p_B^\\circ \\cdot x_B$$</p><p>For a non-volatile solute ($p_B^\\circ = 0$): the vapor pressure of the solution ($P$) is due solely to the solvent: $P = p_A^\\circ \\cdot x_A = p_A^\\circ (1 - x_B)$.</p><ul><li><b>Ideal Solutions</b>: Obey Raoult's Law across all concentrations. $\\Delta H_{\\text{mix}} = 0$, $\\Delta V_{\\text{mix}} = 0$. Intermolecular forces $A-B = A-A = B-B$. Examples: Benzene + Toluene, n-Hexane + n-Heptane, Bromoethane + Chloroethane.</li><li><b>Non-Ideal with Positive Deviation</b>: $A-B$ forces are weaker than $A-A$ and $B-B$. Vapor pressure is higher than expected. $\\Delta H_{\\text{mix}} > 0$ (endothermic), $\\Delta V_{\\text{mix}} > 0$. Forms <b>Minimum Boiling Azeotropes</b> (e.g., Ethanol $95.6\\%$ + Water $4.4\\%$, Acetone + $CS_2$).</li><li><b>Non-Ideal with Negative Deviation</b>: $A-B$ forces are stronger than $A-A$ and $B-B$ (often due to new hydrogen bonding). Vapor pressure is lower than expected. $\\Delta H_{\\text{mix}} < 0$ (exothermic), $\\Delta V_{\\text{mix}} < 0$. Forms <b>Maximum Boiling Azeotropes</b> (e.g., Nitric acid $68\\%$ + Water $32\\%$, Chloroform + Acetone).</li></ul><h3>2. Colligative Properties & RLVP</h3><p><b>Colligative Properties</b> are properties that depend strictly on the <b>number of solute particles</b> (ions or molecules) present in a given volume of solution, independent of their chemical identity or nature.</p><p><b>Relative Lowering of Vapor Pressure (RLVP)</b>: Adding a non-volatile solute decreases the surface fraction occupied by solvent molecules, lowering vapor pressure from $p_A^\\circ$ to $P$:</p><p>$$\\frac{p_A^\\circ - P}{p_A^\\circ} = x_B = \\frac{n_B}{n_A + n_B} \\approx \\frac{w_B \\cdot M_A}{M_B \\cdot w_A} \\quad (\\text{for dilute solutions})$$</p><p>Ostwald-Walker dynamic method is historically used to measure RLVP experimentally.</p>",
            "pointsToRemember": [
                "Colligative properties depend only on the number of solute particles, not on their chemical identity.",
                "Ideal solutions satisfy Raoult's Law with $\\Delta H_{\\text{mix}} = 0$ and $\\Delta V_{\\text{mix}} = 0$ (e.g., Benzene + Toluene).",
                "Relative Lowering of Vapor Pressure: $(p_A^\\circ - P) / p_A^\\circ = x_B$ (mole fraction of non-volatile solute)."
            ],
            "keyNotes": [
                "A mixture of $95.6\\%$ Ethanol and $4.4\\%$ Water forms a minimum-boiling azeotrope that cannot be separated further by simple fractional distillation."
            ],
            "questions": [
                {
                    "id": "ch2_m12_q01",
                    "question": "What defines a 'Colligative Property' of a solution?",
                    "options": [
                        "A property that depends strictly on the total number of solute particles present, independent of their chemical nature or identity",
                        "A property that depends exclusively on the color of the solute",
                        "A property that depends on the radioactive decay rate of the solvent",
                        "A property that varies only with the nuclear charge of atoms"
                    ],
                    "answer": "A property that depends strictly on the total number of solute particles present, independent of their chemical nature or identity",
                    "explanation": "Colligative properties (RLVP, boiling elevation, freezing depression, osmotic pressure) depend entirely on particle count/concentration."
                },
                {
                    "id": "ch2_m12_q02",
                    "question": "Which of the following liquid pairs forms an almost IDEAL solution obeying Raoult's Law across all compositions?",
                    "options": [
                        "Benzene and Toluene",
                        "Ethanol and Water",
                        "Acetone and Chloroform",
                        "Nitric acid and Water"
                    ],
                    "answer": "Benzene and Toluene",
                    "explanation": "Benzene and toluene have near-identical structures, polarities, and intermolecular forces ($A-B \\approx A-A \\approx B-B$), behaving as an ideal solution."
                },
                {
                    "id": "ch2_m12_q03",
                    "question": "Why does a mixture of Chloroform ($CHCl_3$) and Acetone ($CH_3COCH_3$) exhibit a NEGATIVE deviation from Raoult's Law?",
                    "options": [
                        "Formation of new hydrogen bonds between chloroform's hydrogen and acetone's carbonyl oxygen strengthens intermolecular attraction",
                        "Chloroform decomposes acetone into methane gas",
                        "They react to form an explosive precipitate",
                        "Acetone forms an ideal gas above chloroform"
                    ],
                    "answer": "Formation of new hydrogen bonds between chloroform's hydrogen and acetone's carbonyl oxygen strengthens intermolecular attraction",
                    "explanation": "Hydrogen bonding ($Cl_3C-H \\cdots O=C(CH_3)_2$) between different molecules creates stronger attractive forces ($A-B > A-A, B-B$), lowering vapor pressure (negative deviation)."
                },
                {
                    "id": "ch2_m12_q04",
                    "question": "What is an 'azeotropic mixture'?",
                    "options": [
                        "A constant-boiling liquid mixture that distills without changing its composition",
                        "A solution that never boils at any temperature",
                        "A mixture of two immiscible solids",
                        "A solution with zero vapor pressure"
                    ],
                    "answer": "A constant-boiling liquid mixture that distills without changing its composition",
                    "explanation": "Azeotropes boil at a constant temperature and possess identical vapor and liquid compositions, preventing separation by fractional distillation."
                },
                {
                    "id": "ch2_m12_q05",
                    "question": "What type of deviation from Raoult's Law is displayed by an Ethanol-Water mixture containing 95.6% ethanol by volume?",
                    "options": [
                        "Positive deviation, forming a Minimum Boiling Azeotrope",
                        "Negative deviation, forming a Maximum Boiling Azeotrope",
                        "Zero deviation (Ideal Solution)",
                        "Complete phase separation into two immiscible layers"
                    ],
                    "answer": "Positive deviation, forming a Minimum Boiling Azeotrope",
                    "explanation": "Intermolecular hydrogen bonding between ethanol and water is weaker than in pure water, leading to higher vapor pressure and a minimum boiling point (78.15°C)."
                },
                {
                    "id": "ch2_m12_q06",
                    "question": "Why does dissolving non-volatile table sugar in pure water LOWER the vapor pressure of the water?",
                    "options": [
                        "Non-volatile sugar molecules occupy part of the liquid surface area, reducing the fraction of surface available for water molecules to escape into vapor",
                        "Sugar chemically destroys water molecules",
                        "Sugar increases atmospheric pressure above the container",
                        "Sugar absorbs all kinetic energy from the solvent"
                    ],
                    "answer": "Non-volatile sugar molecules occupy part of the liquid surface area, reducing the fraction of surface available for water molecules to escape into vapor",
                    "explanation": "Vaporization is a surface phenomenon. Solute particles displace solvent molecules at the surface, decreasing the escape rate and lowering vapor pressure."
                },
                {
                    "id": "ch2_m12_q07",
                    "question": "According to Raoult's Law, what is the Relative Lowering of Vapor Pressure ($[p^\\circ - P] / p^\\circ$) for a dilute solution of a non-volatile non-electrolyte solute?",
                    "options": [
                        "Equal to the mole fraction of the solute ($x_B$)",
                        "Equal to the molarity of the solution",
                        "Equal to the molality of the solvent",
                        "Equal to the boiling point of the solvent"
                    ],
                    "answer": "Equal to the mole fraction of the solute ($x_B$)",
                    "explanation": "Raoult's Law dictates that relative lowering of vapor pressure $(p^\\circ - P)/p^\\circ = x_B$."
                },
                {
                    "id": "ch2_m12_q08",
                    "question": "Which thermodynamic criteria are satisfied for an ideal binary solution of components A and B?",
                    "options": [
                        "$\\Delta H_{\\text{mix}} = 0$ and $\\Delta V_{\\text{mix}} = 0$",
                        "$\\Delta H_{\\text{mix}} > 0$ and $\\Delta V_{\\text{mix}} > 0$",
                        "$\\Delta H_{\\text{mix}} < 0$ and $\\Delta V_{\\text{mix}} < 0$",
                        "$\\Delta S_{\\text{mix}} = 0$ and $\\Delta G_{\\text{mix}} = 0$"
                    ],
                    "answer": "$\\Delta H_{\\text{mix}} = 0$ and $\\Delta V_{\\text{mix}} = 0$",
                    "explanation": "In ideal solutions, mixing releases or absorbs zero heat ($\\Delta H_{\\text{mix}} = 0$) and produces zero volume contraction/expansion ($\\Delta V_{\\text{mix}} = 0$)."
                },
                {
                    "id": "ch2_m12_q09",
                    "question": "What experimental technique uses dry air passed successively through solution and solvent bulbs to measure relative lowering of vapor pressure?",
                    "options": [
                        "Ostwald and Walker dynamic method",
                        "Victor Meyer method",
                        "Beckmann freezing method",
                        "Dumas bulb method"
                    ],
                    "answer": "Ostwald and Walker dynamic method",
                    "explanation": "The Ostwald-Walker method passes dry air through solution bulbs, pure solvent bulbs, and $CaCl_2$ guard tubes to measure mass losses corresponding to vapor pressures."
                },
                {
                    "id": "ch2_m12_q10",
                    "question": "If pure water has a vapor pressure of 24.0 mmHg at 25°C, what happens to vapor pressure if 1 mole of glucose is added to 99 moles of water?",
                    "options": [
                        "It drops to 23.76 mmHg (lowered by 1%)",
                        "It increases to 48.0 mmHg",
                        "It drops to zero",
                        "It remains exactly 24.0 mmHg"
                    ],
                    "answer": "It drops to 23.76 mmHg (lowered by 1%)",
                    "explanation": "Mole fraction $x_B = 1 / (1 + 99) = 0.01$. $\\Delta P = P^\\circ \\times x_B = 24.0 \\times 0.01 = 0.24\\text{ mmHg}$. New pressure $P = 24.0 - 0.24 = 23.76\\text{ mmHg}$."
                }
            ]
        },
        {
            "id": "m13",
            "moduleNumber": 13,
            "title": "Elevation of Boiling Point, Depression of Freezing Point & Osmotic Pressure",
            "tagline": "Ebullioscopic constant (Kb), cryoscopic constant (Kf), road de-icing with salt, van 't Hoff factor (i), association/dissociation, and osmotic pressure (pi = iCRT).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Elevation of Boiling Point (Ebullioscopy)</h3><p>Because adding a non-volatile solute lowers vapor pressure, a solution must be heated to a higher temperature before its vapor pressure matches external atmospheric pressure. The boiling point elevation ($\\Delta T_b$) is directly proportional to molal concentration ($m$):</p><p>$$\\Delta T_b = T_b - T_b^\\circ = i \\cdot K_b \\cdot m = i \\cdot K_b \\cdot \\frac{w_B \\times 1000}{M_B \\times w_A}$$</p><p>where $K_b$ is the <b>Molal Elevation Constant (Ebullioscopic Constant)</b>. For water, $K_b = 0.512\\text{ K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$.</p><h3>2. Depression of Freezing Point (Cryoscopy)</h3><p>At freezing point, liquid solvent and solid solvent exist in dynamic equilibrium with identical vapor pressures. Solute lowers liquid vapor pressure, so freezing occurs at a lower temperature:</p><p>$$\\Delta T_f = T_f^\\circ - T_f = i \\cdot K_f \\cdot m = i \\cdot K_f \\cdot \\frac{w_B \\times 1000}{M_B \\times w_A}$$</p><p>where $K_f$ is the <b>Molal Depression Constant (Cryoscopic Constant)</b>. For water, $K_f = 1.86\\text{ K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$. Camphor has an enormous $K_f = 40.0\\text{ K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$ (Rast's macro-method for molecular weight determination).</p><ul><li><b>Road De-Icing</b>: Spreading Rock Salt ($NaCl$) or Calcium Chloride ($CaCl_2$) on snow-covered roads in cold climates depresses the freezing point of water to $-21^\\circ\\text{C}$ ($NaCl$) or $-50^\\circ\\text{C}$ ($CaCl_2$), melting the ice pack.</li></ul><h3>3. Osmotic Pressure ($\\pi$) & Jacobus van 't Hoff Factor ($i$)</h3><p><b>Osmosis</b> is the spontaneous net flow of solvent molecules through a semi-permeable membrane (SPM, e.g., copper ferrocyanide $Cu_2[Fe(CN)_6]$, cellophane) from dilute solution (or pure solvent) into concentrated solution.</p><p><b>Osmotic Pressure ($\\pi$)</b> is the exact hydrostatic pressure that must be applied to the solution to prevent the inward flux of solvent:</p><p>$$\\pi = i \\cdot C \\cdot R \\cdot T = i \\cdot \\left(\\frac{n}{V}\\right) R T$$</p><ul><li><b>Van 't Hoff Factor ($i$)</b>: Measures ionic dissociation or molecular association in solution: $i = \\frac{\\text{Actual number of particles}}{\\text{Theoretical particles calculated}}$.</li><li><b>Dissociation ($i > 1$)</b>: For $NaCl \\rightarrow Na^+ + Cl^-$, $i = 2$. For $CaCl_2 \\rightarrow Ca^{2+} + 2Cl^-$, $i = 3$. For $Al_2(SO_4)_3$, $i = 5$. Degree of dissociation: $\\alpha = (i - 1)/(n - 1)$.</li><li><b>Association ($i < 1$)</b>: Acetic acid in benzene dimerizes via hydrogen bonding ($2CH_3COOH \\rightleftharpoons (CH_3COOH)_2$), yielding $i \\approx 0.5$. Degree of association: $\\alpha = (1 - i)/(1 - 1/n)$.</li></ul>",
            "pointsToRemember": [
                "Boiling point elevates ($\\Delta T_b = i K_b m$) and freezing point depresses ($\\Delta T_f = i K_f m$) when non-volatile solute is added.",
                "Rock salt ($NaCl$) and $CaCl_2$ clear snow from highways by lowering water's freezing point far below 0°C.",
                "Osmotic pressure $\\pi = iCRT$ is the premier colligative method for determining molar masses of polymers and biomolecules (proteins/DNA)."
            ],
            "keyNotes": [
                "For equimolar solutions, $CaCl_2$ ($i=3$) produces greater freezing point depression than $NaCl$ ($i=2$) or Glucose ($i=1$)."
            ],
            "questions": [
                {
                    "id": "ch2_m13_q01",
                    "question": "Why is common rock salt ($NaCl$) or Calcium chloride ($CaCl_2$) spread over snowy roads during winter in temperate countries?",
                    "options": [
                        "It depresses the freezing point of water below 0°C, causing road ice and snow to melt into liquid brine",
                        "It reacts exothermically with nitrogen to ignite the ice",
                        "It dissolves the asphalt to create friction",
                        "It attracts solar ultraviolet rays to boil the snow"
                    ],
                    "answer": "It depresses the freezing point of water below 0°C, causing road ice and snow to melt into liquid brine",
                    "explanation": "Dissolving salt in ice creates a brine solution with a depressed freezing point (down to -21°C for $NaCl$ and -50°C for $CaCl_2$), preventing ice formation."
                },
                {
                    "id": "ch2_m13_q02",
                    "question": "Which of the following 0.1 M aqueous solutions will exhibit the LOWEST freezing point (greatest freezing point depression)?",
                    "options": [
                        "0.1 M Aluminum sulfate [$Al_2(SO_4)_3$]",
                        "0.1 M Calcium chloride [$CaCl_2$]",
                        "0.1 M Sodium chloride [$NaCl$]",
                        "0.1 M Glucose [$C_6H_{12}O_6$]"
                    ],
                    "answer": "0.1 M Aluminum sulfate [$Al_2(SO_4)_3$]",
                    "explanation": "Freezing depression $\\Delta T_f \\propto i \\cdot m$. For $Al_2(SO_4)_3$, $i = 5$ ($2Al^{3+} + 3SO_4^{2-}$), producing effective particle concentration $5 \\times 0.1 = 0.5\\text{ M}$, yielding the lowest freezing point."
                },
                {
                    "id": "ch2_m13_q03",
                    "question": "What is the theoretical Van 't Hoff factor ($i$) for complete dissociation of Calcium Chloride ($CaCl_2$)?",
                    "options": [
                        "3",
                        "2",
                        "1",
                        "4"
                    ],
                    "answer": "3",
                    "explanation": "$CaCl_2 \\rightarrow Ca^{2+} + 2Cl^-$. One formula unit yields 1 calcium cation and 2 chloride anions, so $i = 1 + 2 = 3$."
                },
                {
                    "id": "ch2_m13_q04",
                    "question": "Why does acetic acid ($CH_3COOH$) dissolved in benzene have an experimental Van 't Hoff factor ($i$) close to 0.5?",
                    "options": [
                        "Acetic acid molecules dimerize through intermolecular hydrogen bonding into two-molecule clusters",
                        "Benzene ionizes acetic acid into triple ions",
                        "Acetic acid evaporates completely out of benzene",
                        "Benzene oxidizes acetic acid into carbon dioxide"
                    ],
                    "answer": "Acetic acid molecules dimerize through intermolecular hydrogen bonding into two-molecule clusters",
                    "explanation": "In non-polar benzene, two acetic acid molecules form cyclic hydrogen-bonded dimers: $2CH_3COOH \\rightleftharpoons (CH_3COOH)_2$, halving the number of independent particles ($i \\approx 0.5$)."
                },
                {
                    "id": "ch2_m13_q05",
                    "question": "Why is Osmotic Pressure ($\\pi = CRT$) preferred over boiling point elevation or freezing depression for measuring the molecular mass of proteins and synthetic polymers?",
                    "options": [
                        "Osmotic pressure produces large, measurable readings at room temperature, and high temperatures would denature delicate biomolecules",
                        "Proteins do not dissolve in water at freezing temperatures",
                        "Biomolecules lack vapor pressure entirely",
                        "Polymers explode in boiling water"
                    ],
                    "answer": "Osmotic pressure produces large, measurable readings at room temperature, and high temperatures would denature delicate biomolecules",
                    "explanation": "Due to high molar masses, polymers yield negligible $\\Delta T_b$ or $\\Delta T_f$ values, but generate easily measurable osmotic pressure at ambient temperature without thermal denaturation."
                },
                {
                    "id": "ch2_m13_q06",
                    "question": "What happens to human red blood cells (RBCs) when placed in a hypertonic salt solution (>0.9% w/v NaCl)?",
                    "options": [
                        "Water flows out of the cells by exosmosis, causing the red blood cells to shrink and shrivel (crenation)",
                        "Water rushes in by endosmosis, causing them to burst (hemolysis)",
                        "The cells divide by mitosis rapidly",
                        "No change occurs because cell walls are impermeable"
                    ],
                    "answer": "Water flows out of the cells by exosmosis, causing the red blood cells to shrink and shrivel (crenation)",
                    "explanation": "Hypertonic surroundings have higher osmotic pressure than intracellular fluid; water leaves the RBC via exosmosis, causing cell shrinkage (crenation)."
                },
                {
                    "id": "ch2_m13_q07",
                    "question": "What is the Van 't Hoff factor ($i$) for a non-electrolyte solute like Urea or Glucose in aqueous solution?",
                    "options": [
                        "Exactly 1",
                        "Zero",
                        "2",
                        "0.5"
                    ],
                    "answer": "Exactly 1",
                    "explanation": "Non-electrolytes neither dissociate nor associate in solution; 1 mole of dissolved solute remains 1 mole of intact molecules ($i = 1$)."
                },
                {
                    "id": "ch2_m13_q08",
                    "question": "Why does adding a pinch of salt to cooking water slightly raise the boiling point of the water?",
                    "options": [
                        "Dissolved $Na^+$ and $Cl^-$ ions lower the vapor pressure of water, requiring a higher temperature to match atmospheric pressure",
                        "Salt adds thermal calories directly into water",
                        "Salt produces an exothermic nuclear reaction",
                        "Salt destroys the hydrogen bonds completely"
                    ],
                    "answer": "Dissolved $Na^+$ and $Cl^-$ ions lower the vapor pressure of water, requiring a higher temperature to match atmospheric pressure",
                    "explanation": "Adding non-volatile salt lowers the solvent vapor pressure (colligative effect), so water must be heated to a slightly higher temperature to reach atmospheric boiling point."
                },
                {
                    "id": "ch2_m13_q09",
                    "question": "What is the Molal Elevation Constant ($K_b$) also formally known as?",
                    "options": [
                        "Ebullioscopic Constant",
                        "Cryoscopic Constant",
                        "Gas Constant",
                        "Boltzmann Constant"
                    ],
                    "answer": "Ebullioscopic Constant",
                    "explanation": "The constant $K_b$ governing boiling point elevation (ebullioscopy) is termed the Ebullioscopic Constant."
                },
                {
                    "id": "ch2_m13_q10",
                    "question": "What substance is widely used as a synthetic semi-permeable membrane in the laboratory measurement of osmotic pressure (Berkeley-Hartley method)?",
                    "options": [
                        "Copper Ferrocyanide [$Cu_2[Fe(CN)_6]$] deposited in porous porcelain",
                        "Cellulose acetate sponge",
                        "Natural sheep bladder",
                        "Lead plate with microscopic drill holes"
                    ],
                    "answer": "Copper Ferrocyanide [$Cu_2[Fe(CN)_6]$] deposited in porous porcelain",
                    "explanation": "Freshly precipitated copper ferrocyanide inside the pores of rigid earthenware tubes forms a mechanical semi-permeable membrane capable of withstanding hundreds of atmospheres."
                }
            ]
        },
        {
            "id": "m14",
            "moduleNumber": 14,
            "title": "Reverse Osmosis (RO) & Water Desalination Principles",
            "tagline": "Thermodynamics of Reverse Osmosis (P > pi), synthetic semipermeable membranes (cellulose acetate, polyamide), desalination of seawater, and domestic RO water purifiers.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Principle of Reverse Osmosis (RO)</h3><p>In natural <b>osmosis</b>, pure water spontaneously migrates across a semipermeable membrane (SPM) into a saline or contaminated solution until equilibrium osmotic pressure ($\\pi$) is reached.</p><p>If a mechanical hydrostatic pressure ($P$) <b>greater than the osmotic pressure ($P > \\pi$)</b> is applied to the concentrated solution side, the direction of solvent flow is forced into reverse: <b>pure solvent (water) is driven out of the saline solution through the SPM into the fresh water reservoir</b>, leaving concentrated salts and pollutants behind. This process is <b>Reverse Osmosis (RO)</b>.</p><ul><li><b>Driving Condition</b>: $P_{\\text{applied}} > \\pi_{\\text{osmotic}}$. For seawater (TDS $\\approx 35,000\\text{ ppm}$, $\\pi \\approx 27-30\\text{ atm}$), industrial desalination pumps apply pressures of $60 - 80\\text{ bar}$ ($6-8\\text{ MPa}$).</li></ul><h3>2. Semipermeable Membrane Technology</h3><p>Modern commercial RO systems do not use natural animal membranes (which burst under pressure). Instead, they employ high-tech thin-film composite (TFC) membranes:</p><ul><li><b>Cellulose Acetate</b> supported on a porous polymer sheet.</li><li><b>Polyamide Composite Membranes</b>: Extremely thin cross-linked aromatic polyamide active skin layer ($0.2\\,\\mu\\text{m}$) over a polysulfone porous support. These reject $>99.5\\%$ of dissolved inorganic salts ($Na^+, Cl^-, Ca^{2+}, Mg^{2+}$), heavy metals ($As, Pb$), bacteria, viruses, and PFAS 'forever chemicals'.</li><li><b>Spiral Wound Configuration</b>: Membrane sheets and spacers are wrapped concentrically around a central perforated permeate tube to maximize surface area within a compact pressure vessel.</li></ul><h3>3. Applications & Environmental Considerations</h3><ul><li><b>Seawater Desalination</b>: Mega-scale plants in arid nations (Saudi Arabia, UAE, Israel, Chennai/Gujarat in India) supplying municipal drinking water.</li><li><b>Domestic RO Purifiers</b>: Removing excessive Total Dissolved Solids (TDS), arsenic, and fluoride from groundwater.</li><li><b>Brine Rejection Issue</b>: RO generates concentrated reject brine (typically $30-50\\%$ of intake water), raising environmental disposal concerns in coastal ecosystems.</li></ul>",
            "pointsToRemember": [
                "Reverse Osmosis occurs when applied hydrostatic pressure exceeds osmotic pressure ($P > \\pi$), driving water backwards through the SPM.",
                "Thin-film composite (TFC) polyamide membranes reject $>99\\%$ of dissolved salts, heavy metals, and pathogens.",
                "Desalination plants require 60–80 bar pressure to overcome seawater's ~30 bar osmotic pressure."
            ],
            "keyNotes": [
                "RO membranes have pore sizes around 0.1 to 1 nanometer ($1-10\\text{ Å}$), allowing water molecules to pass while sieving out hydrated ions."
            ],
            "questions": [
                {
                    "id": "ch2_m14_q01",
                    "question": "What fundamental physical condition MUST be satisfied for Reverse Osmosis to take place across a semi-permeable membrane?",
                    "options": [
                        "Applied hydrostatic pressure on the concentrated solution must exceed its natural osmotic pressure ($P > \\pi$)",
                        "The solution must be boiled to 100°C",
                        "The solution must be electrified with alternating current",
                        "Pressure must be reduced below atmospheric vacuum"
                    ],
                    "answer": "Applied hydrostatic pressure on the concentrated solution must exceed its natural osmotic pressure ($P > \\pi$)",
                    "explanation": "When applied pressure exceeds osmotic pressure ($P > \\pi$), water molecules are forced against the chemical potential gradient from concentrated solution into pure water."
                },
                {
                    "id": "ch2_m14_q02",
                    "question": "Which polymer material is predominantly utilized in the manufacturing of modern Thin-Film Composite (TFC) Reverse Osmosis membranes?",
                    "options": [
                        "Cross-linked Aromatic Polyamide",
                        "Polyvinyl chloride (PVC)",
                        "Polystyrene foam",
                        "Natural vulcanized rubber"
                    ],
                    "answer": "Cross-linked Aromatic Polyamide",
                    "explanation": "Thin-film composite polyamide membranes offer outstanding salt rejection (>99.5%), high water flux, and mechanical durability under high hydraulic pressures."
                },
                {
                    "id": "ch2_m14_q03",
                    "question": "What is the approximate natural osmotic pressure of typical seawater (TDS ~35,000 mg/L) at room temperature?",
                    "options": [
                        "Approximately 27 to 30 atmospheres",
                        "1.0 atmosphere",
                        "500 atmospheres",
                        "0.1 atmosphere"
                    ],
                    "answer": "Approximately 27 to 30 atmospheres",
                    "explanation": "Seawater has an osmotic pressure of ~27–30 atm (~2.7–3.0 MPa), requiring commercial desalination pumps to operate at 60–80 bar to achieve efficient water recovery."
                },
                {
                    "id": "ch2_m14_q04",
                    "question": "What is the typical pore diameter of a high-performance Reverse Osmosis membrane?",
                    "options": [
                        "0.1 to 1.0 nanometers (1 to 10 Angstroms)",
                        "10 to 50 micrometers",
                        "1 to 2 millimeters",
                        "100 nanometers"
                    ],
                    "answer": "0.1 to 1.0 nanometers (1 to 10 Angstroms)",
                    "explanation": "RO pores are on the order of 0.1–1.0 nm, which is just large enough to permit single water molecules while blocking hydrated ions ($Na^+, Cl^-$) and macromolecules."
                },
                {
                    "id": "ch2_m14_q05",
                    "question": "Why is the disposal of concentrated 'reject brine' from mega-scale coastal seawater desalination plants an environmental challenge?",
                    "options": [
                        "High-salinity, dense brine sinks to the ocean seabed, creating localized hypoxic and hyper-saline zones toxic to marine benthic organisms",
                        "Brine turns ocean water into radioactive uranium",
                        "Brine causes immediate ocean acidification to pH 1.0",
                        "Brine causes massive ocean boiling"
                    ],
                    "answer": "High-salinity, dense brine sinks to the ocean seabed, creating localized hypoxic and hyper-saline zones toxic to marine benthic organisms",
                    "explanation": "Concentrated brine has nearly double the salinity of seawater and high density, sinking to the seafloor where it can suffocate benthic coral and fish habitats unless dispersed."
                },
                {
                    "id": "ch2_m14_q06",
                    "question": "In a household domestic RO water purifier, why is a carbon pre-filter installed before the polyamide RO membrane module?",
                    "options": [
                        "To remove chlorine and chloramines from tap water, which would otherwise chemically degrade and oxidize the polyamide membrane",
                        "To add carbon flavor to drinking water",
                        "To increase water pressure to 100 bar",
                        "To turn acidic water into alkaline milk"
                    ],
                    "answer": "To remove chlorine and chloramines from tap water, which would otherwise chemically degrade and oxidize the polyamide membrane",
                    "explanation": "Polyamide membranes are vulnerable to free chlorine oxidation; an activated carbon pre-filter adsorbs chlorine and protects the membrane."
                },
                {
                    "id": "ch2_m14_q07",
                    "question": "Which Indian state commissioned major seawater reverse osmosis (SWRO) desalination plants at Minjur and Nemmeli to supply city drinking water?",
                    "options": [
                        "Tamil Nadu (Chennai)",
                        "Bihar (Patna)",
                        "Madhya Pradesh (Bhopal)",
                        "Punjab (Amritsar)"
                    ],
                    "answer": "Tamil Nadu (Chennai)",
                    "explanation": "Chennai, Tamil Nadu commissioned the 100 MLD Minjur (2010) and 100 MLD Nemmeli (2013) SWRO plants to overcome severe municipal freshwater shortages."
                },
                {
                    "id": "ch2_m14_q08",
                    "question": "What happens to the Total Dissolved Solids (TDS) level of groundwater after processing through an operational domestic RO purifier?",
                    "options": [
                        "TDS is reduced by 90% to 98%",
                        "TDS increases threefold",
                        "TDS remains completely unchanged",
                        "TDS drops to zero with all hydrogen atoms removed"
                    ],
                    "answer": "TDS is reduced by 90% to 98%",
                    "explanation": "Semipermeable RO membranes typically reject 90–98% of dissolved minerals and salts, significantly reducing groundwater TDS."
                },
                {
                    "id": "ch2_m14_q09",
                    "question": "Which membrane arrangement geometry is standard in domestic and industrial RO modules to pack massive surface area into a compact cylinder?",
                    "options": [
                        "Spiral-Wound membrane configuration",
                        "Spherical hollow globe",
                        "Flat ceramic plate",
                        "Randomly tangled yarn"
                    ],
                    "answer": "Spiral-Wound membrane configuration",
                    "explanation": "Spiral-wound elements roll flat membrane envelopes and mesh spacers around a central perforated permeate tube, packing vast surface area into a compact footprint."
                },
                {
                    "id": "ch2_m14_q10",
                    "question": "Can a standard Reverse Osmosis membrane remove pathogenic viruses and bacteria from contaminated water?",
                    "options": [
                        "Yes, because bacteria (0.5–5 μm) and viruses (20–400 nm) are thousands of times larger than RO pore sizes (~0.1–1 nm)",
                        "No, viruses dissolve the polyamide membrane chemically",
                        "No, bacteria pass freely through all membranes",
                        "Only if the water is heated to 500°C"
                    ],
                    "answer": "Yes, because bacteria (0.5–5 μm) and viruses (20–400 nm) are thousands of times larger than RO pore sizes (~0.1–1 nm)",
                    "explanation": "Microbial pathogens are vastly larger than sub-nanometer RO membrane pores, achieving complete physical rejection."
                }
            ]
        },
        {
            "id": "m15",
            "moduleNumber": 15,
            "title": "True Solutions vs Suspensions vs Colloids — Particle Size & Properties",
            "tagline": "Three-way comparative spectrum of dispersion systems based on particle size: True Solutions (<1 nm), Colloids (1-1000 nm), and Suspensions (>1000 nm).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. The Dispersion Spectrum: Size-Based Classification</h3><p>Thomas Graham (1861) classified substances based on their ability to diffuse through parchment membranes into <b>Crystalloids</b> (readily diffuse, e.g., salts, sugar) and <b>Colloids</b> (glue-like, do not diffuse, e.g., gelatin, albumin, starch). Modern chemistry classifies all dispersed systems into three categories based on the <b>diameter of the dispersed particles</b>:</p><table border='1' cellpadding='5' style='border-collapse:collapse;'><tr><th>Property</th><th>True Solution</th><th>Colloidal System</th><th>Suspension</th></tr><tr><td><b>Particle Diameter</b></td><td>$&lt; 1\\text{ nm}$ ($&lt; 10\\text{ Å}$)</td><td>$1\\text{ nm} - 1000\\text{ nm}$ ($10 - 10,000\\text{ Å}$)</td><td>$&gt; 1000\\text{ nm}$ ($&gt; 1\\,\\mu\\text{m}$)</td></tr><tr><td><b>Homogeneity</b></td><td>Strictly Homogeneous</td><td>Heterogeneous (appears homogeneous to naked eye)</td><td>Strictly Heterogeneous</td></tr><tr><td><b>Filterability</b></td><td>Passes through ordinary filter paper & animal membranes</td><td>Passes through ordinary filter paper, but retained by ultra-filters</td><td>Retained by ordinary filter paper</td></tr><tr><td><b>Settling / Stability</b></td><td>Does not settle under gravity; completely stable</td><td>Does not settle under gravity; stable (settles only in ultra-centrifuge)</td><td>Settles down under gravity upon standing; unstable</td></tr><tr><td><b>Tyndall Effect</b></td><td>Absent (does not scatter light)</td><td>Prominently exhibits Tyndall light scattering</td><td>May scatter light, but is typically opaque</td></tr><tr><td><b>Brownian Motion</b></td><td>Absent (invisible molecular motion)</td><td>Vigorously exhibits zigzag Brownian motion</td><td>May exhibit slow motion under microscope, then settles</td></tr><tr><td><b>Examples</b></td><td>Salt in water, Glucose in water, Air</td><td>Milk, Blood, Ink, Fog, Smoke, Starch sol, Gold sol</td><td>Chalk in water, Muddy river water, Sand in water, Milk of Magnesia</td></tr></table><h3>2. Anatomy of a Colloid: Dispersed Phase & Dispersion Medium</h3><p>A colloidal system consists of two immiscible or distinct phases: (1) <b>Dispersed Phase</b> (the discontinuous internal phase consisting of colloidal particles, analogous to solute), and (2) <b>Dispersion Medium</b> (the continuous external medium in which colloidal particles are suspended, analogous to solvent).</p>",
            "pointsToRemember": [
                "Particle size boundary: True Solutions (<1 nm), Colloids (1 to 1000 nm), Suspensions (>1000 nm).",
                "Colloids pass through ordinary filter paper but are retained by ultra-filters and animal membranes.",
                "Colloids are heterogeneous systems that appear homogeneous to the naked eye and exhibit Tyndall scattering."
            ],
            "keyNotes": [
                "Milk and Blood are colloidal dispersions, while muddy water is a coarse suspension that settles under gravity."
            ],
            "questions": [
                {
                    "id": "ch2_m15_q01",
                    "question": "What is the characteristic particle diameter range for the dispersed phase in a Colloidal System?",
                    "options": [
                        "1 nanometer to 1000 nanometers (1 nm to 1 μm)",
                        "Less than 0.1 nanometers",
                        "Greater than 100 micrometers",
                        "10 to 50 centimeters"
                    ],
                    "answer": "1 nanometer to 1000 nanometers (1 nm to 1 μm)",
                    "explanation": "Colloidal particles range between 1 nm and 1000 nm (10 to 10,000 Å), intermediate between true molecular solutions and coarse suspensions."
                },
                {
                    "id": "ch2_m15_q02",
                    "question": "Why can colloidal particles (such as in milk or starch sol) pass through ordinary laboratory filter paper?",
                    "options": [
                        "The pore size of ordinary filter paper (~several micrometers) is much larger than colloidal particles (1–1000 nm)",
                        "Filter paper dissolves colloidal particles",
                        "Colloidal particles possess zero mass",
                        "Filter paper has an electrical charge repelling the liquid"
                    ],
                    "answer": "The pore size of ordinary filter paper (~several micrometers) is much larger than colloidal particles (1–1000 nm)",
                    "explanation": "Ordinary filter paper pores are several micrometers across, allowing sub-micron colloidal particles to pass freely; only ultra-filters retain them."
                },
                {
                    "id": "ch2_m15_q03",
                    "question": "Which of the following common substances is classified as a Heterogeneous Coarse Suspension rather than a colloid?",
                    "options": [
                        "Muddy river water",
                        "Blood",
                        "Cow's milk",
                        "India ink"
                    ],
                    "answer": "Muddy river water",
                    "explanation": "Muddy water contains large silt and clay particles (>1000 nm) that settle rapidly under gravity upon standing, defining a suspension."
                },
                {
                    "id": "ch2_m15_q04",
                    "question": "Why does a beam of light remain INVISIBLE when shone through a true solution of sodium chloride in water, but becomes clearly illuminated in a colloidal starch sol?",
                    "options": [
                        "Colloidal particles are large enough to scatter incident light (Tyndall Effect), whereas true solution ions are too small to scatter light",
                        "Salt absorbs all visible light completely",
                        "Starch generates light by bioluminescence",
                        "Water turns into a solid mirror in starch"
                    ],
                    "answer": "Colloidal particles are large enough to scatter incident light (Tyndall Effect), whereas true solution ions are too small to scatter light",
                    "explanation": "True solution particles (<1 nm) cannot scatter visible light wavelengths, while colloidal particles (1–1000 nm) scatter light sideways, rendering the beam path visible."
                },
                {
                    "id": "ch2_m15_q05",
                    "question": "What term describes the continuous medium in which colloidal particles are uniformly distributed?",
                    "options": [
                        "Dispersion Medium",
                        "Dispersed Phase",
                        "Discontinuous Phase",
                        "Colloidal Micelle"
                    ],
                    "answer": "Dispersion Medium",
                    "explanation": "The continuous bulk phase is called the dispersion medium (solvent analog), while the dispersed particles constitute the dispersed phase (solute analog)."
                },
                {
                    "id": "ch2_m15_q06",
                    "question": "Under normal gravitational conditions, why do colloidal particles in a stable sol NOT settle to the bottom of the container over time?",
                    "options": [
                        "Continuous random thermal collisions with solvent molecules (Brownian motion) and mutual electrostatic repulsion counteract gravity",
                        "Colloidal particles have negative gravitational mass",
                        "The container walls attract all particles upward",
                        "Gravity does not operate on sub-micron matter"
                    ],
                    "answer": "Continuous random thermal collisions with solvent molecules (Brownian motion) and mutual electrostatic repulsion counteract gravity",
                    "explanation": "Brownian collisions provide thermal agitation that prevents settling, while identical surface charges keep particles from aggregating."
                },
                {
                    "id": "ch2_m15_q07",
                    "question": "What laboratory apparatus uses high centrifugal force (up to tens of thousands of times g) to force colloidal particles to settle?",
                    "options": [
                        "Ultracentrifuge",
                        "Ordinary Buchner funnel",
                        "Barometer",
                        "Manometer"
                    ],
                    "answer": "Ultracentrifuge",
                    "explanation": "The ultracentrifuge (invented by Theodor Svedberg) generates intense centrifugal fields that overcome Brownian motion, sedimenting colloidal macromolecules."
                },
                {
                    "id": "ch2_m15_q08",
                    "question": "Which of the following systems is a True Homogeneous Solution?",
                    "options": [
                        "Clear sugar dissolved in water",
                        "Mayonnaise",
                        "Fog",
                        "Shaving cream"
                    ],
                    "answer": "Clear sugar dissolved in water",
                    "explanation": "Sugar in water forms a single-phase homogeneous true solution with individual sucrose molecules (<1 nm) dispersed uniformly."
                },
                {
                    "id": "ch2_m15_q09",
                    "question": "What happens when a colloidal sol is passed through an ultrafilter membrane impregnated with collodion?",
                    "options": [
                        "Colloidal particles are retained on the filter while the dispersion medium and true electrolytes pass through",
                        "The ultrafilter dissolves instantly",
                        "All components pass through without separation",
                        "Colloidal particles turn into a gas"
                    ],
                    "answer": "Colloidal particles are retained on the filter while the dispersion medium and true electrolytes pass through",
                    "explanation": "Collodion-impregnated ultrafilters have calibrated sub-nanometer pores that retain colloidal particles while permitting solvent and dissolved ions to pass."
                },
                {
                    "id": "ch2_m15_q10",
                    "question": "Thomas Graham originally coined the terms 'Crystalloid' and 'Colloid' in 1861 based on which observational property?",
                    "options": [
                        "Ability or inability to diffuse through an animal parchment membrane",
                        "Melting point in open air",
                        "Color change under sunlight",
                        "Electrical conductivity in solid state"
                    ],
                    "answer": "Ability or inability to diffuse through an animal parchment membrane",
                    "explanation": "Graham found that crystalline substances (salts, urea) diffused readily through parchment membranes, whereas amorphous gelatinous substances (colloids) could not diffuse."
                }
            ]
        },
        {
            "id": "m16",
            "moduleNumber": 16,
            "title": "Classification of Colloids: Sol, Gel, Emulsion, Aerosol & Foam",
            "tagline": "The 8 classes of colloidal dispersions by physical phase combinations, lyophilic vs lyophobic colloids, reversibility, and hydration shells.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. The Eight Types of Colloidal Dispersions</h3><p>Because gases mix completely in all proportions to form homogeneous solutions, a 'gas-in-gas' colloid does not exist. The remaining combinations of Dispersed Phase and Dispersion Medium yield <b>8 distinct colloidal classes</b>:</p><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Dispersed Phase</th><th>Dispersion Medium</th><th>Colloid Type</th><th>Everyday / Industrial Examples</th></tr><tr><td>Solid</td><td>Gas</td><td><b>Solid Aerosol</b></td><td>Smoke, dust storm, automobile exhaust soot</td></tr><tr><td>Liquid</td><td>Gas</td><td><b>Liquid Aerosol</b></td><td>Fog, mist, clouds, insecticide sprays</td></tr><tr><td>Gas</td><td>Liquid</td><td><b>Foam</b></td><td>Whipped cream, shaving foam, soap lather, froth</td></tr><tr><td>Liquid</td><td>Liquid</td><td><b>Emulsion</b></td><td>Milk, mayonnaise, cold cream, butter, cod liver oil</td></tr><tr><td>Solid</td><td>Liquid</td><td><b>Sol</b></td><td>Paint, India ink, blood, starch sol, gold sol, cell fluid</td></tr><tr><td>Gas</td><td>Solid</td><td><b>Solid Foam</b></td><td>Pumice stone, foam rubber, bread, aerogel</td></tr><tr><td>Liquid</td><td>Solid</td><td><b>Gel</b></td><td>Jelly, gelatin dessert, cheese, butter, curd, silica gel</td></tr><tr><td>Solid</td><td>Solid</td><td><b>Solid Sol</b></td><td>Ruby glass, stained glass, precious gemstones (opal)</td></tr></table><h3>2. Lyophilic vs Lyophobic Colloids</h3><p>Colloids are also classified based on the affinity between dispersed phase and dispersion medium:</p><ul><li><b>Lyophilic ('Liquid-Loving') Colloids</b>: Strong attractive forces between particles and solvent. Particles are extensively solvated (hydrated). Easily prepared by simple direct mixing or gentle warming. They are <b>reversible</b> (if solvent is evaporated, the sol can be reconstituted simply by adding solvent). Highly stable and not easily coagulated by trace electrolytes. Examples: Gelatin, Starch, Gum, Albumin, Agar.</li><li><b>Lyophobic ('Liquid-Hating') Colloids</b>: Little or no interaction between particles and solvent. Cannot be prepared by simple mixing; require special chemical or physical dispersion methods (Bredig's electric arc method, peptization, chemical reduction). They are <b>irreversible</b> (once coagulated, cannot be reconstituted by adding solvent). Inherently unstable and easily coagulated by adding small amounts of electrolytes. Examples: Metal sols (Gold sol, Silver sol), Metal sulfides ($As_2S_3$ sol), Metal hydroxides ($Fe(OH)_3$ sol).</li></ul>",
            "pointsToRemember": [
                "There are exactly 8 colloidal types; a gas-in-gas colloid cannot exist because gases always form homogeneous true solutions.",
                "Fog and clouds are Liquid Aerosols (liquid droplets in gas); smoke is a Solid Aerosol (solid soot in gas).",
                "Lyophilic colloids (starch, gelatin) are reversible and highly stable; lyophobic colloids (gold sol, $Fe(OH)_3$) are irreversible and sensitive to electrolytes."
            ],
            "keyNotes": [
                "Ruby glass is a Solid Sol consisting of colloidal gold nanoparticles dispersed in solid silicate glass matrix."
            ],
            "questions": [
                {
                    "id": "ch2_m16_q01",
                    "question": "Why does a 'Gas-in-Gas' colloidal system NOT exist in physical chemistry?",
                    "options": [
                        "All gases mix completely and spontaneously in all proportions to form homogeneous true solutions",
                        "Gas molecules cannot form particles larger than 0.001 nm",
                        "Gravity compresses all gases into liquids",
                        "Gases react chemically whenever mixed"
                    ],
                    "answer": "All gases mix completely and spontaneously in all proportions to form homogeneous true solutions",
                    "explanation": "Gases are completely miscible in all proportions, forming a single-phase homogeneous mixture (true solution), ruling out heterogeneous colloidal states."
                },
                {
                    "id": "ch2_m16_q02",
                    "question": "What type of colloidal system is ordinary atmospheric Fog or Cloud?",
                    "options": [
                        "Liquid Aerosol (liquid droplets dispersed in gas)",
                        "Solid Aerosol",
                        "Liquid Emulsion",
                        "Solid Sol"
                    ],
                    "answer": "Liquid Aerosol (liquid droplets dispersed in gas)",
                    "explanation": "Fog and clouds consist of microscopic liquid water droplets suspended in continuous atmospheric air (gas medium), defining a liquid aerosol."
                },
                {
                    "id": "ch2_m16_q03",
                    "question": "Which of the following common household items is classified as a 'Gel' (liquid dispersed in a solid matrix)?",
                    "options": [
                        "Cheese, Butter, and Jelly",
                        "Shaving cream",
                        "Milk",
                        "Automobile smoke"
                    ],
                    "answer": "Cheese, Butter, and Jelly",
                    "explanation": "Gels have a liquid dispersed phase trapped within a continuous solid fibrous network (e.g., cheese, butter, fruit jelly, curd)."
                },
                {
                    "id": "ch2_m16_q04",
                    "question": "What is the primary difference in reversibility between Lyophilic and Lyophobic sols?",
                    "options": [
                        "Lyophilic sols are reversible (can be reconstituted after drying by adding solvent), whereas lyophobic sols are irreversible",
                        "Lyophobic sols can be reconstituted indefinitely by heating",
                        "Lyophilic sols coagulate permanently upon touch",
                        "Neither type can ever be coagulated"
                    ],
                    "answer": "Lyophilic sols are reversible (can be reconstituted after drying by adding solvent), whereas lyophobic sols are irreversible",
                    "explanation": "Lyophilic particles have high affinity for solvent and re-disperse spontaneously when solvent is re-added; lyophobic sols once precipitated cannot re-disperse without chemical peptizing agents."
                },
                {
                    "id": "ch2_m16_q05",
                    "question": "Pumice stone, a volcanic rock that floats on water, is an example of which colloidal classification?",
                    "options": [
                        "Solid Foam (gas trapped in a solid matrix)",
                        "Liquid Aerosol",
                        "Solid Sol",
                        "Sol"
                    ],
                    "answer": "Solid Foam (gas trapped in a solid matrix)",
                    "explanation": "Pumice is formed when gas bubbles are trapped within rapidly solidifying volcanic lava, creating a solid foam with high buoyancy."
                },
                {
                    "id": "ch2_m16_q06",
                    "question": "Which of the following is a classic example of a Lyophobic Sol?",
                    "options": [
                        "Gold sol or Ferric hydroxide [$Fe(OH)_3$] sol",
                        "Starch in warm water",
                        "Gelatin in water",
                        "Gum arabic solution"
                    ],
                    "answer": "Gold sol or Ferric hydroxide [$Fe(OH)_3$] sol",
                    "explanation": "Metals and metal hydroxides have no natural affinity for water; their sols are lyophobic, irreversible, and readily coagulated by electrolyte addition."
                },
                {
                    "id": "ch2_m16_q07",
                    "question": "What colloidal classification describes shaving foam and whipped cream?",
                    "options": [
                        "Foam (gas dispersed in a liquid)",
                        "Emulsion",
                        "Sol",
                        "Gel"
                    ],
                    "answer": "Foam (gas dispersed in a liquid)",
                    "explanation": "In foam, gas bubbles (dispersed phase) are trapped inside a continuous liquid medium stabilized by surfactant molecules."
                },
                {
                    "id": "ch2_m16_q08",
                    "question": "Precious gemstone Ruby Glass, containing vibrant red color from colloidal gold particles in silica glass, is an example of:",
                    "options": [
                        "Solid Sol (solid dispersed in a solid)",
                        "Gel",
                        "Solid Foam",
                        "Liquid Emulsion"
                    ],
                    "answer": "Solid Sol (solid dispersed in a solid)",
                    "explanation": "Ruby glass is a solid sol in which colloidal gold nanoparticles (solid) are permanently dispersed in solid silicate glass."
                },
                {
                    "id": "ch2_m16_q09",
                    "question": "What method utilizes an electric arc struck between metal electrodes submerged in water to synthesize lyophobic gold or platinum sols?",
                    "options": [
                        "Bredig's Electric Arc Method",
                        "Ostwald's dilution process",
                        "Rast's camphor method",
                        "Haber's catalytic cycle"
                    ],
                    "answer": "Bredig's Electric Arc Method",
                    "explanation": "Georg Bredig's method uses an electric arc to vaporize metal, which immediately condenses in ice-cooled water into colloidal nanoparticles."
                },
                {
                    "id": "ch2_m16_q10",
                    "question": "Why are lyophilic sols (like gelatin and starch) inherently much more stable against coagulation than lyophobic sols?",
                    "options": [
                        "Lyophilic particles possess an extensive protective hydration shell of solvent molecules surrounding their surface charge",
                        "Lyophilic particles have zero surface charge",
                        "Lyophilic particles are held together by nuclear forces",
                        "Lyophilic particles are denser than lead"
                    ],
                    "answer": "Lyophilic particles possess an extensive protective hydration shell of solvent molecules surrounding their surface charge",
                    "explanation": "Stability in lyophilic sols is conferred by two factors: surface charge AND a thick sheath of solvated water molecules that physically prevents agglomeration."
                }
            ]
        },
        {
            "id": "m17",
            "moduleNumber": 17,
            "title": "Optical & Kinetic Properties: Tyndall Effect & Brownian Motion",
            "tagline": "John Tyndall's light scattering, condition for Tyndall effect, blue sky / red sunset, Robert Brown's zigzag motion, ultra-microscope, and sol stability.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Optical Property: The Tyndall Effect (1869)</h3><p>When a converging beam of light passes through a colloidal sol in a darkened room, the path of the beam is illuminated and glows with a bluish light when viewed at right angles. This phenomenon is called the <b>Tyndall Effect</b>, and the illuminated luminous cone is the <b>Tyndall Cone</b>.</p><ul><li><b>Physical Mechanism</b>: Colloidal particles absorb incident light energy and re-radiate (scatter) it in all directions in space. Rayleigh scattering intensity is inversely proportional to the fourth power of wavelength ($I \\propto 1/\\lambda^4$), causing shorter blue wavelengths to scatter much more intensely than red.</li><li><b>Conditions for Tyndall Effect</b>:<ol><li>The diameter of the dispersed particles must not be much smaller than the wavelength of incident light ($d \\approx \\lambda$).</li><li>There must be a large difference between the <b>refractive indices</b> of the dispersed phase and the dispersion medium (prominent in lyophobic sols; weak in lyophilic sols where refractive indices are nearly identical).</li></ol></li><li><b>Everyday Examples</b>: Sunlight streaming through a canopy of tall trees in a dense forest (mist scatters light); projection beam in a dusty movie theater; blue color of the clear daytime sky; red sunrise and sunset (Rayleigh scattering); searchlight beam cutting through fog.</li><li><b>Zsigmondy's Ultramicroscope (1903)</b>: Richard Zsigmondy illuminated colloids perpendicular to the microscope axis, viewing scattered diffraction discs of light rather than the actual particles, earning the 1925 Nobel Prize in Chemistry.</li></ul><h3>2. Kinetic Property: Brownian Motion (1827)</h3><p>Botanist Robert Brown observed under a microscope that pollen grains suspended in water perform a ceaseless, chaotic, zigzag motion. Albert Einstein (1905) and Jean Perrin (1908) proved mathematically and experimentally that <b>Brownian Motion</b> results from the <b>unbalanced, random mechanical bombardment of colloidal particles by fast-moving molecules of the dispersion medium</b>.</p><ul><li><b>Significance</b>: (1) Directly verified the atomic-molecular nature of matter and kinetic theory. (2) Explains the <b>mechanical stability of colloids</b>: continuous agitation acts as an anti-gravitational stirring force, preventing colloidal particles from settling to the bottom.</li><li><b>Velocity Factors</b>: Brownian motion becomes more rapid as <b>particle size decreases</b> and <b>temperature increases</b>, or when medium viscosity decreases.</li></ul>",
            "pointsToRemember": [
                "Tyndall Effect is the lateral scattering of light by colloidal particles ($d \\approx \\lambda$); true solutions cannot scatter light.",
                "Tyndall effect is strong in lyophobic sols due to large refractive index differences between particles and medium.",
                "Brownian motion is chaotic zigzag motion caused by uneven collisions from solvent molecules, providing mechanical stability against gravity."
            ],
            "keyNotes": [
                "Albert Einstein's 1905 paper on Brownian motion provided definitive mathematical proof of the existence of atoms and molecules."
            ],
            "questions": [
                {
                    "id": "ch2_m17_q01",
                    "question": "What optical phenomenon explains why a sunbeam entering a dusty dark room or misty forest canopy becomes vividly visible?",
                    "options": [
                        "Tyndall Effect (light scattering by colloidal dust/droplet particles)",
                        "Total internal reflection",
                        "Photoelectric effect",
                        "Nuclear magnetic resonance"
                    ],
                    "answer": "Tyndall Effect (light scattering by colloidal dust/droplet particles)",
                    "explanation": "Dust particles and water droplets are in the colloidal size range (1–1000 nm) and scatter light laterally, illuminating the beam's trajectory (Tyndall Cone)."
                },
                {
                    "id": "ch2_m17_q02",
                    "question": "What physical mechanism causes the continuous, chaotic zigzag 'Brownian Motion' of colloidal particles?",
                    "options": [
                        "Unbalanced, random kinetic bombardments from thermal collisions with surrounding molecules of the dispersion medium",
                        "Gravitational waves pulsating through liquid",
                        "Repulsion between atomic nuclei inside particles",
                        "Magnetic field lines of planet Earth"
                    ],
                    "answer": "Unbalanced, random kinetic bombardments from thermal collisions with surrounding molecules of the dispersion medium",
                    "explanation": "Solvent molecules constantly strike the colloidal particle from all sides. At any instant, collisions are uneven, transferring net momentum that propels the particle in random directions."
                },
                {
                    "id": "ch2_m17_q03",
                    "question": "Why is the Tyndall Effect prominently visible in Lyophobic sols (like Gold or $As_2S_3$ sol) but very weak or undetectable in Lyophilic sols (like gelatin)?",
                    "options": [
                        "In lyophilic sols, the refractive index of hydrated particles is almost identical to that of the aqueous medium",
                        "Lyophilic particles are made of pure vacuum",
                        "Lyophobic particles absorb 100% of light without scattering",
                        "Gelatin destroys light waves"
                    ],
                    "answer": "In lyophilic sols, the refractive index of hydrated particles is almost identical to that of the aqueous medium",
                    "explanation": "Tyndall scattering requires a large difference between the refractive indices of dispersed phase and medium. Lyophilic particles are heavily hydrated and optically match water."
                },
                {
                    "id": "ch2_m17_q04",
                    "question": "What crucial role does Brownian motion play in maintaining the stability of colloidal dispersions?",
                    "options": [
                        "It provides continuous thermal agitation that counteracts the downward pull of gravity, preventing particles from settling",
                        "It creates a permanent magnetic field",
                        "It freezes particles in fixed lattice positions",
                        "It evaporates excess solvent"
                    ],
                    "answer": "It provides continuous thermal agitation that counteracts the downward pull of gravity, preventing particles from settling",
                    "explanation": "Brownian agitation acts like perpetual stirring, preventing sub-micron colloidal particles from sedimenting to the bottom of the container."
                },
                {
                    "id": "ch2_m17_q05",
                    "question": "Which experimental scientist received the 1925 Nobel Prize in Chemistry for inventing the Ultramicroscope to observe colloidal light scattering?",
                    "options": [
                        "Richard Zsigmondy",
                        "Jean Perrin",
                        "Robert Brown",
                        "Lord Rayleigh"
                    ],
                    "answer": "Richard Zsigmondy",
                    "explanation": "Richard Zsigmondy developed the slit ultramicroscope in 1903, illuminating colloids perpendicular to the visual axis to view individual particle scattering."
                },
                {
                    "id": "ch2_m17_q06",
                    "question": "Under Rayleigh scattering ($I \\propto 1/\\lambda^4$), why does the daytime sky appear blue rather than red?",
                    "options": [
                        "Blue light has a much shorter wavelength than red light and is scattered roughly 10 times more intensely by atmospheric particles",
                        "Nitrogen gas naturally fluoresces blue light",
                        "The oceans reflect blue light upward",
                        "Oxygen absorbs red light exclusively"
                    ],
                    "answer": "Blue light has a much shorter wavelength than red light and is scattered roughly 10 times more intensely by atmospheric particles",
                    "explanation": "Because blue light has a shorter wavelength (~400 nm vs ~700 nm for red), Rayleigh scattering ($I \\propto 1/\\lambda^4$) scatters blue photons far more aggressively across the sky."
                },
                {
                    "id": "ch2_m17_q07",
                    "question": "Under which conditions will Brownian motion of colloidal particles be most vigorous and rapid?",
                    "options": [
                        "High temperature, small particle size, and low medium viscosity",
                        "Low temperature, large particle size, and high viscosity",
                        "Zero Kelvin in a solid crystal",
                        "High viscosity glycerin at freezing temperature"
                    ],
                    "answer": "High temperature, small particle size, and low medium viscosity",
                    "explanation": "Higher temperature increases molecular collision velocities; smaller particles have lower inertia; and lower viscosity reduces drag, maximizing Brownian motion."
                },
                {
                    "id": "ch2_m17_q08",
                    "question": "Why does a projection beam in a cinema movie theater appear as a glowing visible light cone overhead?",
                    "options": [
                        "Colloidal dust particles and suspended smoke in the theater air scatter the projection light (Tyndall Effect)",
                        "The projector lens emits radioactive alpha particles",
                        "Air molecules ionize into glowing plasma",
                        "Light slows down to 10 m/s in theaters"
                    ],
                    "answer": "Colloidal dust particles and suspended smoke in the theater air scatter the projection light (Tyndall Effect)",
                    "explanation": "Colloidal airborne dust and smoke scatter light out of the forward beam into viewers' eyes, illuminating the projection path."
                },
                {
                    "id": "ch2_m17_q09",
                    "question": "Which French physicist was awarded the 1908/1926 Nobel Prize for experimentally measuring Avogadro's number using Brownian motion observations?",
                    "options": [
                        "Jean Perrin",
                        "Marie Curie",
                        "Louis de Broglie",
                        "Henri Becquerel"
                    ],
                    "answer": "Jean Perrin",
                    "explanation": "Jean Perrin conducted quantitative sedimentation equilibrium studies on gamboge emulsions undergoing Brownian motion, experimentally calculating Avogadro's number."
                },
                {
                    "id": "ch2_m17_q10",
                    "question": "Does a true solution of refined sugar in water display a Tyndall cone when a bright flashlight beam is passed through it?",
                    "options": [
                        "No, dissolved sugar molecules are far too small (<1 nm) to scatter visible light wavelengths",
                        "Yes, sugar crystals reflect light like diamonds",
                        "Yes, but only under ultraviolet light",
                        "No, because sugar absorbs 100% of light energy"
                    ],
                    "answer": "No, dissolved sugar molecules are far too small (<1 nm) to scatter visible light wavelengths",
                    "explanation": "True solutions have particle sizes <1 nm, far smaller than light wavelengths (~400–700 nm); they cannot produce Tyndall scattering."
                }
            ]
        },
        {
            "id": "m18",
            "moduleNumber": 18,
            "title": "Surface Charge, Zeta Potential, Electrophoresis & Coagulation (Hardy-Schulze Rule)",
            "tagline": "Origin of charge on colloids, preferential adsorption, Helmholtz electrical double layer, Zeta potential, electrophoresis, electro-osmosis, and the Hardy-Schulze rule.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Origin of Colloidal Charge & Helmholtz Double Layer</h3><p>Colloidal particles always carry an electric charge (either all positive or all negative in a given sol). This like charge produces electrostatic repulsion, preventing agglomeration and conferring colloidal stability.</p><ul><li><b>Preferential Adsorption of Common Ions</b>: When $AgNO_3$ solution is added to excess $KI$ solution, $AgI$ precipitates and preferentially adsorbs the common iodide ion ($I^-$), forming a <b>negatively charged sol</b>: $[AgI]I^-$. Conversely, if $KI$ is added to excess $AgNO_3$, $AgI$ preferentially adsorbs $Ag^+$ ions, forming a <b>positively charged sol</b>: $[AgI]Ag^+$.</li><li><b>Positive Sols</b>: Hydrated metal oxides (e.g., $Fe_2O_3 \\cdot xH_2O, Al_2O_3 \\cdot xH_2O$), basic dye stuffs (Methylene Blue), Hemoglobin.</li><li><b>Negative Sols</b>: Metal sols (Au, Ag, Pt), metal sulfides ($As_2S_3, CdS$), acid dye stuffs (Congo Red, Eosin), Clay, Charcoal, Starch, Gum.</li><li><b>Helmholtz Electrical Double Layer & Zeta Potential</b>: The fixed layer of adsorbed ions attracts counter-ions from solution, creating a mobile diffuse layer. The potential difference between the fixed layer and the diffuse mobile layer is the <b>Electrokinetic Potential or Zeta Potential ($\\zeta$)</b>. High zeta potential ($>\\pm 30\\text{ mV}$) guarantees dispersion stability.</li></ul><h3>2. Electrokinetic Phenomena: Electrophoresis</h3><p><b>Electrophoresis (Cataphoresis)</b> is the directional migration of colloidal particles toward the oppositely charged electrode under an applied external electric field. Positively charged sol particles migrate to the cathode; negatively charged sol particles migrate to the anode.</p><p>If particle movement is physically blocked by a porous membrane, the liquid dispersion medium moves instead: this is <b>Electro-osmosis</b>.</p><h3>3. Coagulation / Flocculation & The Hardy-Schulze Rule</h3><p><b>Coagulation (Precipitation)</b> is the aggregation of colloidal particles into macroscopic precipitates, induced by neutralizing their surface charges.</p><p><b>Hardy-Schulze Law</b> governs coagulation efficacy:</p><ol><li>The coagulating ion is the ion carrying a charge <b>opposite</b> to that of the colloidal particles.</li><li>The coagulating power of an electrolyte is directly proportional to the <b>fourth or sixth power of the valence</b> of the active counter-ion. Higher valence means vastly higher coagulating power and lower Coagulation / Flocculation Value:</li></ol><p>For coagulating a <b>Negatively charged sol</b> (e.g., $As_2S_3$):</p><p>$$Al^{3+} > Ba^{2+} > Na^+ \\quad (\\text{Coagulating Power Ratio } \\approx 1000 : 100 : 1)$$</p><p>For coagulating a <b>Positively charged sol</b> (e.g., $Fe(OH)_3$):</p><p>$$[Fe(CN)_6]^{4-} > PO_4^{3-} > SO_4^{2-} > Cl^-$$</p><ul><li><b>River Delta Formation</b>: River water carries negatively charged colloidal clay and silt. When it meets saline seawater containing multivalent electrolytes ($Na^+, Mg^{2+}, Ca^{2+}$), the clay particles coagulate and precipitate at the river mouth, forming massive deltas (e.g., Sundarbans Delta).</li><li><b>Alum for Water Purification</b>: Potash alum ($KAl(SO_4)_2 \\cdot 12H_2O$) yields trivalent $Al^{3+}$ ions that neutralize and coagulate negatively charged suspended muddy clay in municipal water.</li><li><b>Styptic Action of Alum/Ferric Chloride</b>: Blood is a negatively charged colloidal sol of hemoglobin. Applying alum ($Al^{3+}$) or ferric chloride ($FeCl_3$, $Fe^{3+}$) rapidly coagulates blood at a wound to stop bleeding.</li></ul>",
            "pointsToRemember": [
                "Colloidal particles acquire charge by preferential adsorption of common ions; Zeta potential ($\\zeta$) is the voltage across the double layer.",
                "Electrophoresis is particle migration under electric fields; used in Cottrell smoke precipitators and DNA gel analysis.",
                "Hardy-Schulze Rule: Coagulating power increases dramatically with ion valency: $Al^{3+} > Ba^{2+} > Na^+$ for negative sols; $[Fe(CN)_6]^{4-} > SO_4^{2-} > Cl^-$ for positive sols."
            ],
            "keyNotes": [
                "River deltas form where river water (negatively charged colloidal clay) meets seawater electrolytes ($Na^+, Mg^{2+}$), triggering massive coagulation."
            ],
            "questions": [
                {
                    "id": "ch2_m18_q01",
                    "question": "According to the Hardy-Schulze Law, which of the following electrolytes has the GREATEST coagulating power for a negatively charged Arsenic sulfide ($As_2S_3$) sol?",
                    "options": [
                        "Aluminum chloride ($AlCl_3$, supplying $Al^{3+}$)",
                        "Barium chloride ($BaCl_2$, supplying $Ba^{2+}$)",
                        "Sodium chloride ($NaCl$, supplying $Na^+$)",
                        "Potassium nitrate ($KNO_3$, supplying $K^+$)"
                    ],
                    "answer": "Aluminum chloride ($AlCl_3$, supplying $Al^{3+}$)",
                    "explanation": "For a negative sol, coagulation depends on cation valence. By the Hardy-Schulze rule, trivalent $Al^{3+}$ has much greater coagulating power than divalent $Ba^{2+}$ or monovalent $Na^+$ ($Al^{3+} > Ba^{2+} > Na^+$)."
                },
                {
                    "id": "ch2_m18_q02",
                    "question": "Why does the application of Potash Alum or Ferric Chloride ($FeCl_3$) immediately stop bleeding from a shaving cut?",
                    "options": [
                        "Trivalent cations ($Al^{3+}$ or $Fe^{3+}$) rapidly coagulate negatively charged colloidal blood proteins, forming a protective clot",
                        "Alum acts as a local anesthetic that freezes skin",
                        "Alum causes blood to evaporate instantly",
                        "Alum turns blood cells into pure oxygen gas"
                    ],
                    "answer": "Trivalent cations ($Al^{3+}$ or $Fe^{3+}$) rapidly coagulate negatively charged colloidal blood proteins, forming a protective clot",
                    "explanation": "Blood is a colloidal dispersion of negatively charged albumin/hemoglobin particles. Multivalent cations ($Al^{3+}, Fe^{3+}$) neutralize the charge, precipitating proteins into a clot."
                },
                {
                    "id": "ch2_m18_q03",
                    "question": "What geological landform is produced at river mouths where muddy river water meets saline seawater, driven by colloidal coagulation?",
                    "options": [
                        "River Delta (e.g., Sundarbans Delta)",
                        "Canyon",
                        "Glacial Moraine",
                        "Sand Dune"
                    ],
                    "answer": "River Delta (e.g., Sundarbans Delta)",
                    "explanation": "Muddy river water is a negative colloidal suspension of clay. Seawater electrolytes ($Na^+, Mg^{2+}, Ca^{2+}$) coagulate the clay particles, depositing silt as a delta."
                },
                {
                    "id": "ch2_m18_q04",
                    "question": "What is 'Zeta Potential' (Electrokinetic Potential) in colloidal science?",
                    "options": [
                        "The electrical potential difference between the stationary fixed adsorbed layer of ions and the diffuse mobile layer of counter-ions",
                        "The total nuclear potential of all atoms in the sol",
                        "The potential required to boil the dispersion medium",
                        "The magnetic voltage across the test tube"
                    ],
                    "answer": "The electrical potential difference between the stationary fixed adsorbed layer of ions and the diffuse mobile layer of counter-ions",
                    "explanation": "Zeta potential is the electrical potential drop across the shear plane separating the fixed Stern layer from the mobile Gouy-Chapman diffuse layer."
                },
                {
                    "id": "ch2_m18_q05",
                    "question": "What phenomenon occurs during Electrophoresis when an electric potential is applied across a colloidal sol?",
                    "options": [
                        "Colloidal particles migrate unidirectionally toward the oppositely charged electrode",
                        "The dispersion medium evaporates instantly",
                        "Particles change from negative to positive charge",
                        "Light is emitted with 100% efficiency"
                    ],
                    "answer": "Colloidal particles migrate unidirectionally toward the oppositely charged electrode",
                    "explanation": "Electrophoresis involves the migration of charged colloidal particles toward the cathode (if positively charged) or anode (if negatively charged)."
                },
                {
                    "id": "ch2_m18_q06",
                    "question": "Which industrial pollution-control apparatus uses high-voltage electrostatic electrophoresis (30,000–50,000 V) to precipitate colloidal smoke soot from chimney exhaust?",
                    "options": [
                        "Cottrell Electrostatic Precipitator",
                        "Venturi wet scrubber",
                        "Cyclone separator",
                        "Catalytic converter"
                    ],
                    "answer": "Cottrell Electrostatic Precipitator",
                    "explanation": "Frederick Cottrell's electrostatic precipitator charges smoke particles via corona discharge; the charged soot particles migrate to collector plates and lose charge, dropping as ash."
                },
                {
                    "id": "ch2_m18_q07",
                    "question": "When dilute Silver Nitrate ($AgNO_3$) is added dropwise to an EXCESS of Potassium Iodide ($KI$) solution, what charge does the resulting $AgI$ sol acquire?",
                    "options": [
                        "Negative charge, due to preferential adsorption of common iodide ($I^-$) ions",
                        "Positive charge, due to adsorption of $Ag^+$",
                        "Neutral with zero charge",
                        "Fluctuating alternating charge"
                    ],
                    "answer": "Negative charge, due to preferential adsorption of common iodide ($I^-$) ions",
                    "explanation": "With excess $KI$, $I^-$ ions are in high concentration and preferentially adsorb onto the surface of newly precipitated $AgI$ crystals, forming a negatively charged $[AgI]I^-$ sol."
                },
                {
                    "id": "ch2_m18_q08",
                    "question": "Which of the following anions will have the GREATEST coagulating power for a positively charged Ferric Hydroxide [$Fe(OH)_3$] sol?",
                    "options": [
                        "Potassium ferrocyanide [$[Fe(CN)_6]^{4-}$]",
                        "Phosphate [$PO_4^{3-}$]",
                        "Sulfate [$SO_4^{2-}$]",
                        "Chloride [$Cl^-$]"
                    ],
                    "answer": "Potassium ferrocyanide [$[Fe(CN)_6]^{4-}$]",
                    "explanation": "By the Hardy-Schulze rule, coagulation power for a positive sol increases with anion valency: $[Fe(CN)_6]^{4-} (4-) > PO_4^{3-} (3-) > SO_4^{2-} (2-) > Cl^- (1-)$."
                },
                {
                    "id": "ch2_m18_q09",
                    "question": "Why is Potash Alum added to muddy municipal raw water during the clarification stage of drinking water treatment?",
                    "options": [
                        "$Al^{3+}$ ions neutralize the negative charge on suspended clay/colloid particles, causing them to coagulate and settle as floc",
                        "Alum sweetens the flavor of municipal water",
                        "Alum kills all bacteria by nuclear radiation",
                        "Alum increases water hardness to prevent pipe rust"
                    ],
                    "answer": "$Al^{3+}$ ions neutralize the negative charge on suspended clay/colloid particles, causing them to coagulate and settle as floc",
                    "explanation": "Suspended clay carries negative surface charge. Trivalent aluminum ($Al^{3+}$) hydrolyzes to form gelatinous aluminum hydroxide, neutralizing charges and sweeping particles into settling flocs."
                },
                {
                    "id": "ch2_m18_q10",
                    "question": "What term describes the phenomenon where colloidal particles are prevented from moving, forcing the liquid dispersion medium to migrate through a porous barrier under an applied electric field?",
                    "options": [
                        "Electro-osmosis",
                        "Reverse Osmosis",
                        "Electrophoresis",
                        "Dialysis"
                    ],
                    "answer": "Electro-osmosis",
                    "explanation": "When particle migration (electrophoresis) is physically constrained by a plug or membrane, the mobile counter-ions in the dispersion medium migrate under the electric field (electro-osmosis)."
                }
            ]
        },
        {
            "id": "m19",
            "moduleNumber": 19,
            "title": "Emulsions & Emulsifiers — Micelles, Soaps, Detergents & Cleansing Action",
            "tagline": "O/W vs W/O emulsions, emulsifying agents, critical micelle concentration (CMC), Kraft temperature, soap structure, hydrophilic head vs hydrophobic tail, and cleansing mechanism.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Emulsions: Liquid-in-Liquid Colloidal Systems</h3><p>An <b>emulsion</b> is a colloidal dispersion of two immiscible liquids where one liquid is dispersed as microscopic droplets in the other. Pure oil and water separate rapidly; stable emulsions require a third component called an <b>Emulsifying Agent (Emulsifier)</b> that forms an interfacial protective film around dispersed droplets.</p><ul><li><b>Oil-in-Water (O/W) Emulsions</b>: Oil is the dispersed phase; water is the dispersion medium. Can be diluted with water; conducts electricity; water-soluble dyes color the continuous phase. Examples: <b>Milk</b> (liquid butterfat droplets dispersed in water, stabilized by casein protein), Vanishing cream.</li><li><b>Water-in-Oil (W/O) Emulsions</b>: Water is the dispersed phase; oil is the dispersion medium. Can be diluted with oil; does not conduct electricity; oil-soluble dyes color the continuous phase. Examples: <b>Butter</b>, Cold cream, Cod liver oil.</li><li><b>Demulsification</b>: Breaking an emulsion into separate liquid layers via heating, freezing, centrifugation, or adding chemical deemulsifiers (e.g., churning curd to extract butter).</li></ul><h3>2. Associated Colloids: Micelles & Critical Micelle Concentration (CMC)</h3><p>Certain substances behave as normal strong electrolytes at low concentrations, but aggregate at higher concentrations into colloidal clusters called <b>Micelles</b> (associated colloids). Typical micelles contain $50 - 100$ surfactant molecules.</p><ul><li><b>Critical Micelle Concentration (CMC)</b>: The minimum concentration above which micelle formation occurs. For sodium stearate ($C_{17}H_{35}COONa$), $\\text{CMC} \\approx 10^{-4} - 10^{-3}\\text{ mol/L}$.</li><li><b>Kraft Temperature ($T_k$)</b>: The minimum temperature above which micelle formation takes place.</li></ul><h3>3. Chemical Structure & Cleansing Action of Soaps and Detergents</h3><p><b>Soap</b> is the sodium or potassium salt of long-chain fatty acids (e.g., Sodium Stearate $C_{17}H_{35}COO^- Na^+$, Sodium Oleate, Sodium Palmitate). Its molecule has a dual nature (amphiphilic):</p><ul><li><b>Hydrophobic Tail</b>: Non-polar hydrocarbon chain ($-C_{17}H_{35}$), water-repelling but oil-soluble (lipophilic).</li><li><b>Hydrophilic Head</b>: Polar carboxylate group ($-COO^- Na^+$), water-loving and ionic.</li></ul><p><b>Cleansing Mechanism</b>: Oily dirt adheres tenaciously to cloth fibers. In soapy water, the hydrophobic hydrocarbon tails dissolve inward into the greasy dirt droplet, while the ionic polar heads project outward into the surrounding water. This encapsulates the grease into a spherical <b>micelle</b> with a negatively charged outer surface. The mutual electrostatic repulsion between micelles prevents them from coalescing; when agitated and rinsed with water, the suspended grease micelles are washed away as an emulsion.</p>",
            "pointsToRemember": [
                "O/W emulsions (Milk) have oil droplets in water; W/O emulsions (Butter) have water droplets in oil.",
                "Casein is the natural emulsifying agent that stabilizes fat globules in milk.",
                "Micelles form only above the Critical Micelle Concentration (CMC) and Kraft Temperature ($T_k$).",
                "Soap cleans by forming micelles with hydrophobic tails buried in grease and hydrophilic polar heads interacting with water."
            ],
            "keyNotes": [
                "Synthetic detergents clean effectively even in hard water because their calcium and magnesium salts are water-soluble."
            ],
            "questions": [
                {
                    "id": "ch2_m19_q01",
                    "question": "What type of emulsion is fresh cow's milk?",
                    "options": [
                        "Oil-in-Water (O/W) emulsion",
                        "Water-in-Oil (W/O) emulsion",
                        "Solid Sol",
                        "Liquid Aerosol"
                    ],
                    "answer": "Oil-in-Water (O/W) emulsion",
                    "explanation": "Milk is an oil-in-water (O/W) emulsion where liquid milkfat globules are dispersed in water, stabilized by the milk protein casein."
                },
                {
                    "id": "ch2_m19_q02",
                    "question": "Which natural phosphoprotein serves as the essential emulsifying agent that stabilizes fat droplets in milk?",
                    "options": [
                        "Casein",
                        "Albumin",
                        "Keratin",
                        "Hemoglobin"
                    ],
                    "answer": "Casein",
                    "explanation": "Casein forms an interfacial protective film around fat globules in milk, preventing them from coalescing into a separate butterfat layer."
                },
                {
                    "id": "ch2_m19_q03",
                    "question": "What is 'Critical Micelle Concentration' (CMC)?",
                    "options": [
                        "The threshold concentration of surfactant above which individual amphiphilic molecules aggregate into colloidal micelles",
                        "The concentration at which soap solidifies into a bar",
                        "The concentration where soap dissolves cotton fibers",
                        "The concentration of soap at which it boils"
                    ],
                    "answer": "The threshold concentration of surfactant above which individual amphiphilic molecules aggregate into colloidal micelles",
                    "explanation": "Surfactants behave as normal electrolytes at low dilution; upon reaching CMC, hydrophobic tails self-assemble into spherical micelle cores."
                },
                {
                    "id": "ch2_m19_q04",
                    "question": "What is the 'Kraft Temperature' ($T_k$) in colloid chemistry?",
                    "options": [
                        "The minimum temperature above which micelle formation takes place",
                        "The boiling point of liquid detergents",
                        "The flash point of kerosene",
                        "The temperature where soap hydrolyzes into acid"
                    ],
                    "answer": "The minimum temperature above which micelle formation takes place",
                    "explanation": "The Kraft temperature ($T_k$) is the temperature boundary above which surfactant solubility increases sharply and micelle aggregation occurs."
                },
                {
                    "id": "ch2_m19_q05",
                    "question": "In a soap micelle formed during washing, how are the soap molecules spatially oriented around a droplet of oil or grease?",
                    "options": [
                        "Hydrophobic hydrocarbon tails dissolve inward into the central oil droplet, while hydrophilic carboxylate heads project outward into water",
                        "Hydrophilic heads face inward into oil, while tails face outward into water",
                        "Tails and heads alternate randomly without pattern",
                        "The soap molecule wraps completely around water molecules"
                    ],
                    "answer": "Hydrophobic hydrocarbon tails dissolve inward into the central oil droplet, while hydrophilic carboxylate heads project outward into water",
                    "explanation": "The non-polar lipophilic tails dissolve into the greasy dirt, while polar ionic heads ($-COO^-$) face outward into water, stabilizing the dispersed droplet."
                },
                {
                    "id": "ch2_m19_q06",
                    "question": "Which of the following is a classic example of a Water-in-Oil (W/O) emulsion?",
                    "options": [
                        "Butter and Cold Cream",
                        "Milk",
                        "Vanishing cream",
                        "Soapy lather"
                    ],
                    "answer": "Butter and Cold Cream",
                    "explanation": "In butter and cold cream, microscopic water droplets (dispersed phase) are trapped inside a continuous lipid/oil matrix (W/O emulsion)."
                },
                {
                    "id": "ch2_m19_q07",
                    "question": "Why does a test tube containing an Oil-in-Water (O/W) emulsion conduct electricity, whereas a Water-in-Oil (W/O) emulsion does not?",
                    "options": [
                        "The continuous dispersion medium in O/W is aqueous water containing dissolved ions, which carries electric current",
                        "Oil is an electrical superconductor",
                        "Water blocks all electron movement",
                        "W/O emulsions contain free metallic sodium"
                    ],
                    "answer": "The continuous dispersion medium in O/W is aqueous water containing dissolved ions, which carries electric current",
                    "explanation": "Electrical conductivity is governed by the continuous external phase. In O/W emulsions, continuous aqueous electrolyte conducts current; in W/O, continuous non-conducting oil insulates."
                },
                {
                    "id": "ch2_m19_q08",
                    "question": "What process separates cream from milk or butter from curd through high-speed rotational acceleration?",
                    "options": [
                        "Demulsification via centrifugation",
                        "Electrophoresis",
                        "Dialysis",
                        "Sublimation"
                    ],
                    "answer": "Demulsification via centrifugation",
                    "explanation": "Centrifugation applies high centrifugal forces that overcome interfacial emulsifier stabilization, separating less-dense fat from aqueous whey (demulsification)."
                },
                {
                    "id": "ch2_m19_q09",
                    "question": "Why do synthetic detergents (like Sodium Lauryl Sulfate) clean clothes effectively in hard water containing $Ca^{2+}$ and $Mg^{2+}$ ions, whereas ordinary soaps fail?",
                    "options": [
                        "The calcium and magnesium salts of synthetic alkyl sulfates/sulfonates are water-soluble, preventing insoluble scum formation",
                        "Detergents contain radioactive enzymes that destroy minerals",
                        "Detergents convert calcium into sodium",
                        "Hard water boils immediately upon detergent contact"
                    ],
                    "answer": "The calcium and magnesium salts of synthetic alkyl sulfates/sulfonates are water-soluble, preventing insoluble scum formation",
                    "explanation": "Soaps form sticky insoluble precipitates ($Ca(\\text{stearate})_2$), wasting soap. Detergent calcium and magnesium sulfonates remain freely soluble in water."
                },
                {
                    "id": "ch2_m19_q10",
                    "question": "What chemical name corresponds to common bath soap prepared by saponification of glyceryl tristearate with sodium hydroxide?",
                    "options": [
                        "Sodium Stearate [$C_{17}H_{35}COONa$]",
                        "Sodium Chloride",
                        "Sodium Bicarbonate",
                        "Potassium Nitrate"
                    ],
                    "answer": "Sodium Stearate [$C_{17}H_{35}COONa$]",
                    "explanation": "Saponification of animal/vegetable fats (stearin) with $NaOH$ produces Sodium Stearate ($C_{17}H_{35}COONa$) and byproduct glycerol."
                }
            ]
        },
        {
            "id": "m20",
            "moduleNumber": 20,
            "title": "Hard Water vs Soft Water: Temporary Hardness, Permanent Hardness & Softening Methods",
            "tagline": "Causes of hardness (Ca2+, Mg2+), temporary vs permanent hardness, boiler scale, Clark's process, soda ash method, zeolite (permutit) process, and synthetic ion exchange resins.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Concept of Water Hardness</h3><p><b>Hard Water</b> is water that does not readily produce lather with soap, instead forming an insoluble curdy white precipitate (scum). <b>Soft Water</b> lathers freely and immediately with soap (e.g., rainwater, distilled water).</p><p>Hardness is caused by the presence of dissolved soluble salts of <b>Calcium ($Ca^{2+}$) and Magnesium ($Mg^{2+}$)</b> (and occasionally $Fe^{2+}$):</p><p>$$2 C_{17}H_{35}COO^- Na^+ + Ca^{2+} \\rightarrow (C_{17}H_{35}COO)_2Ca\\downarrow \\text{ (insoluble scum)} + 2Na^+$$</p><h3>2. Temporary Hardness vs Permanent Hardness</h3><ul><li><b>Temporary Hardness (Carbonate Hardness)</b>: Caused by dissolved <b>Bicarbonates of Calcium and Magnesium</b>: $Ca(HCO_3)_2$ and $Mg(HCO_3)_2$. Can be removed easily by simple physical/chemical methods:<ol><li><b>Boiling</b>: Decomposes soluble bicarbonates into insoluble carbonates and hydroxides:$$Ca(HCO_3)_2 \\xrightarrow{\\Delta} CaCO_3\\downarrow + H_2O + CO_2\\uparrow$$$$Mg(HCO_3)_2 \\xrightarrow{\\Delta} Mg(OH)_2\\downarrow + 2CO_2\\uparrow$$(Note: $Mg(OH)_2$ precipitates instead of $MgCO_3$ because $Mg(OH)_2$ has lower solubility product).</li><li><b>Clark's Method</b>: Adding a calculated amount of Slaked Lime [$Ca(OH)_2$]:$$Ca(HCO_3)_2 + Ca(OH)_2 \\rightarrow 2CaCO_3\\downarrow + 2H_2O$$$$Mg(HCO_3)_2 + 2Ca(OH)_2 \\rightarrow 2CaCO_3\\downarrow + Mg(OH)_2\\downarrow + 2H_2O$$</li></ol></li><li><b>Permanent Hardness (Non-Carbonate Hardness)</b>: Caused by dissolved <b>Chlorides and Sulfates of Calcium and Magnesium</b>: $CaCl_2, MgCl_2, CaSO_4, MgSO_4$. <i>Cannot be removed by boiling</i>.</li></ul><h3>3. Industrial Methods for Removing Permanent Hardness</h3><ol><li><b>Washing Soda Method</b>: Treating with sodium carbonate ($Na_2CO_3$):$$CaCl_2 + Na_2CO_3 \\rightarrow CaCO_3\\downarrow + 2NaCl$$$$MgSO_4 + Na_2CO_3 \\rightarrow MgCO_3\\downarrow + Na_2SO_4$$</li><li><b>Calgon's Method</b>: Sodium hexametaphosphate ($Na_6P_6O_{18}$ or $(NaPO_3)_6$, 'Calgon' = <b>Cal</b>cium <b>Gon</b>e). It sequesters $Ca^{2+}$ and $Mg^{2+}$ into highly soluble complex anions: $Na_2[Ca_2(PO_3)_6]^{2-}$, preventing scum.</li><li><b>Zeolite / Permutit Process</b>: Hydrated sodium aluminum orthosilicate ($Na_2Al_2Si_2O_8 \\cdot xH_2O$, abbreviated $Na_2Z$). Hard water passes through a zeolite bed; $Ca^{2+}$ and $Mg^{2+}$ displace $Na^+$:$$Na_2Z + Ca^{2+} \\rightarrow CaZ + 2Na^+$$Exhausted zeolite is easily regenerated by backwashing with a $10\\%$ brine ($NaCl$) solution: $CaZ + 2NaCl \\rightarrow Na_2Z + CaCl_2$.</li><li><b>Synthetic Ion-Exchange Resin Method (Complete Demineralization)</b>: Produces ultra-pure <b>deionized water</b> free from all cations and anions:<ul><li><b>Cation-Exchange Resin ($R-COOH$ or $R-SO_3H$)</b>: Swaps $Ca^{2+}, Mg^{2+}, Na^+$ for $H^+$ ions.</li><li><b>Anion-Exchange Resin ($R-NH_3^+OH^-$)</b>: Swaps $Cl^-, SO_4^{2-}, NO_3^-$ for $OH^-$ ions.</li><li>$H^+ + OH^- \\rightarrow H_2O$ (yielding pure distilled-quality demineralized water).</li></ul></li></ol><h3>4. Hazards of Boiler Scale in Thermal Power Plants</h3><p>When hard water is fed into high-pressure industrial boilers, insoluble $CaSO_4$ and $CaCO_3$ precipitate as a rock-hard inner crust called <b>Boiler Scale</b>. Scale is an extreme thermal insulator; it wastes massive fuel, causes localized overheating of boiler steel, and leads to catastrophic boiler explosions.</p>",
            "pointsToRemember": [
                "Temporary hardness is caused by bicarbonates [$Ca(HCO_3)_2, Mg(HCO_3)_2$] and is removed by boiling or Clark's lime method.",
                "Permanent hardness is caused by chlorides and sulfates ($CaCl_2, MgCl_2, CaSO_4, MgSO_4$) and cannot be removed by boiling.",
                "Permutit/Zeolite process exchanges $Ca^{2+}/Mg^{2+}$ for $Na^+$, regenerated by 10% brine ($NaCl$).",
                "Synthetic ion-exchange resins remove ALL cations and anions, producing 100% pure demineralized/deionized water."
            ],
            "keyNotes": [
                "Boiler scale in thermal power plants insulates tubes, wastes fuel, and causes catastrophic metal rupture."
            ],
            "questions": [
                {
                    "id": "ch2_m20_q01",
                    "question": "What chemical compounds are specifically responsible for causing 'Temporary Hardness' in groundwater?",
                    "options": [
                        "Calcium bicarbonate [$Ca(HCO_3)_2$] and Magnesium bicarbonate [$Mg(HCO_3)_2$]",
                        "Calcium chloride and Magnesium chloride",
                        "Calcium sulfate and Magnesium sulfate",
                        "Sodium chloride and Potassium nitrate"
                    ],
                    "answer": "Calcium bicarbonate [$Ca(HCO_3)_2$] and Magnesium bicarbonate [$Mg(HCO_3)_2$]",
                    "explanation": "Temporary (carbonate) hardness is caused solely by soluble hydrogen carbonates (bicarbonates) of calcium and magnesium, which decompose on boiling."
                },
                {
                    "id": "ch2_m20_q02",
                    "question": "Why does simple thermal boiling remove temporary hardness from water?",
                    "options": [
                        "Soluble bicarbonates decompose into insoluble carbonates [$CaCO_3$] and hydroxides [$Mg(OH)_2$] that precipitate out",
                        "Boiling evaporates the calcium atoms into vapor",
                        "Boiling converts water into hydrochloric acid",
                        "Boiling turns bicarbonates into radioactive isotopes"
                    ],
                    "answer": "Soluble bicarbonates decompose into insoluble carbonates [$CaCO_3$] and hydroxides [$Mg(OH)_2$] that precipitate out",
                    "explanation": "Heating decomposes soluble $Ca(HCO_3)_2$ into insoluble $CaCO_3\\downarrow + H_2O + CO_2\\uparrow$, precipitating the hardness cations."
                },
                {
                    "id": "ch2_m20_q03",
                    "question": "What chemical agent is added in Clark's commercial process to soften temporary hard water?",
                    "options": [
                        "Calculated quantity of Slaked Lime [$Ca(OH)_2$]",
                        "Hydrochloric acid",
                        "Sodium metal",
                        "Copper sulfate"
                    ],
                    "answer": "Calculated quantity of Slaked Lime [$Ca(OH)_2$]",
                    "explanation": "Clark's process treats temporary hard water with a stoichiometric amount of slaked lime ($Ca(OH)_2$), precipitating $CaCO_3$ and $Mg(OH)_2$."
                },
                {
                    "id": "ch2_m20_q04",
                    "question": "Which salts cause 'Permanent Hardness' in water that CANNOT be removed by boiling?",
                    "options": [
                        "Chlorides and Sulfates of Calcium and Magnesium [$CaCl_2, MgCl_2, CaSO_4, MgSO_4$]",
                        "Bicarbonates of Calcium and Magnesium",
                        "Carbonates of Sodium and Potassium",
                        "Nitrates of Iron and Copper"
                    ],
                    "answer": "Chlorides and Sulfates of Calcium and Magnesium [$CaCl_2, MgCl_2, CaSO_4, MgSO_4$]",
                    "explanation": "Permanent (non-carbonate) hardness is caused by dissolved chlorides and sulfates of calcium and magnesium, which are thermally stable and do not precipitate on boiling."
                },
                {
                    "id": "ch2_m20_q05",
                    "question": "What is the chemical name and formula of 'Calgon', widely used in water softening?",
                    "options": [
                        "Sodium Hexametaphosphate [$Na_6P_6O_{18}$ or $(NaPO_3)_6$]",
                        "Sodium Carbonate Decahydrate",
                        "Sodium Tetraborate Decahydrate",
                        "Calcium Phosphate"
                    ],
                    "answer": "Sodium Hexametaphosphate [$Na_6P_6O_{18}$ or $(NaPO_3)_6$]",
                    "explanation": "Calgon ('CALcium GONe') is sodium hexametaphosphate ($Na_6P_6O_{18}$), which forms soluble complex anions with $Ca^{2+}$ and $Mg^{2+}$, preventing scum."
                },
                {
                    "id": "ch2_m20_q06",
                    "question": "In the Zeolite (Permutit) softening process, how is an exhausted zeolite bed regenerated for reuse?",
                    "options": [
                        "By washing with a concentrated 10% aqueous Sodium Chloride (brine) solution",
                        "By heating the zeolite bed to 1000°C",
                        "By flushing with concentrated sulfuric acid",
                        "By exposing the bed to ultraviolet radiation"
                    ],
                    "answer": "By washing with a concentrated 10% aqueous Sodium Chloride (brine) solution",
                    "explanation": "The exhausted $CaZ / MgZ$ resin is regenerated by backwashing with 10% $NaCl$ brine: $CaZ + 2NaCl \\rightarrow Na_2Z + CaCl_2$, restoring active sodium zeolite."
                },
                {
                    "id": "ch2_m20_q07",
                    "question": "Which water treatment method produces completely 'Deionized' or 'Demineralized' water free from BOTH cations and anions?",
                    "options": [
                        "Synthetic Ion-Exchange Resin process (Cation and Anion exchange beds)",
                        "Clark's lime process",
                        "Boiling",
                        "Simple sand filtration"
                    ],
                    "answer": "Synthetic Ion-Exchange Resin process (Cation and Anion exchange beds)",
                    "explanation": "Successive passage through cation resin (swapping cations for $H^+$) and anion resin (swapping anions for $OH^-$) yields pure $H_2O$ without any mineral ions."
                },
                {
                    "id": "ch2_m20_q08",
                    "question": "Why is the formation of 'Boiler Scale' inside industrial steam boilers in power stations dangerous and inefficient?",
                    "options": [
                        "Scale is a poor thermal conductor that wastes massive fuel, causes localized boiler steel overheating, and risks violent explosions",
                        "Scale dissolves the water into chlorine gas",
                        "Scale increases boiler pressure to zero",
                        "Scale accelerates steam flow uncontrollably"
                    ],
                    "answer": "Scale is a poor thermal conductor that wastes massive fuel, causes localized boiler steel overheating, and risks violent explosions",
                    "explanation": "Precipitated $CaSO_4$ scale has low thermal conductivity, requiring higher furnace heat to transfer energy. Overheated steel loses tensile strength and ruptures under high pressure."
                },
                {
                    "id": "ch2_m20_q09",
                    "question": "Why does ordinary toilet soap fail to produce foam in seawater or well water containing calcium ions?",
                    "options": [
                        "Soap reacts with $Ca^{2+}$ to form an insoluble sticky curdy precipitate of Calcium Stearate (scum)",
                        "Seawater turns soap into sugar",
                        "Soap evaporates instantly in salt water",
                        "Soap requires pure nitrogen to foam"
                    ],
                    "answer": "Soap reacts with $Ca^{2+}$ to form an insoluble sticky curdy precipitate of Calcium Stearate (scum)",
                    "explanation": "Soluble sodium stearate reacts with $Ca^{2+}$: $2C_{17}H_{35}COONa + Ca^{2+} \\rightarrow (C_{17}H_{35}COO)_2Ca\\downarrow + 2Na^+$, consuming soap before lather can form."
                },
                {
                    "id": "ch2_m20_q10",
                    "question": "When temporary hard water containing magnesium bicarbonate [$Mg(HCO_3)_2$] is boiled, what compound precipitates out?",
                    "options": [
                        "Magnesium Hydroxide [$Mg(OH)_2$]",
                        "Magnesium Carbonate [$MgCO_3$]",
                        "Magnesium Oxide [$MgO$]",
                        "Magnesium Chloride [$MgCl_2$]"
                    ],
                    "answer": "Magnesium Hydroxide [$Mg(OH)_2$]",
                    "explanation": "Boiling $Mg(HCO_3)_2$ yields $Mg(OH)_2\\downarrow$ because magnesium hydroxide has a significantly lower solubility product than magnesium carbonate ($MgCO_3$)."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_2_CHEMISTRY;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_2_CHEMISTRY;
}
