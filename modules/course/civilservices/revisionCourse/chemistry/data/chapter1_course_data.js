/* =============================================================================
   ELITE CLASSES — CIVIL SERVICES: CHEMISTRY REVISION COURSE
   CHAPTER 1: ATOMIC STRUCTURE, SUBATOMIC PARTICLES & QUANTUM MECHANICAL MODEL
   - Exactly 20 Progressive Mini-Modules
   - 10 High-Yield Conceptual MCQs per Module (200 MCQs total)
   - 70% Mastery Progressive Unlocking Threshold
   - Complete Pedagogical Standard Notes & Chemical Equation Analyses
   ============================================================================= */

const COURSE_CHAPTER_1_CHEMISTRY = {
    "chapterId": "cs_chem_ch1",
    "chapterNumber": 1,
    "chapterTitle": "Atomic Structure, Subatomic Particles & Quantum Mechanical Model",
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
            "title": "Dalton's Atomic Theory & Ancient Indian Parmanu Concept",
            "tagline": "Historical evolution of atomic theory from Maharishi Kanad's Vaisheshika Sutra to John Dalton's 1808 scientific formulation.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>The philosophical idea of the indivisibility of matter was first articulated in ancient India around 600–500 BCE by the philosopher Maharishi Kanad (Kashyapa). In his treatise 'Vaisheshika Sutra', Kanad postulated that if matter (Padartha) is subdivided continuously, a stage is reached beyond which further division is impossible; he designated these ultimate indivisible particles as 'Parmanu'.</p><p>In 1808, British chemist John Dalton transformed this philosophical concept into the first scientific atomic theory in his work 'A New System of Chemical Philosophy'. Dalton stated that all matter is composed of minute, indivisible, and indestructible particles called atoms.</p><p>Dalton's core postulates asserted: (1) All atoms of a given element are identical in mass, size, and chemical properties; (2) Atoms of different elements have different masses and chemical behaviors; (3) Compounds are formed when atoms of different elements combine in simple whole-number numerical ratios; and (4) A chemical reaction involves only the separation, combination, or rearrangement of atoms—atoms are neither created nor destroyed.</p><p>While modern physics established that the atom is indeed divisible into subatomic constituents (electrons, protons, neutrons) and that isotopes possess different masses, Dalton's theory provided the first successful framework explaining the fundamental laws of chemical combination.</p>",
            "pointsToRemember": [
                "Maharishi Kanad (c. 600 BCE) proposed the 'Parmanu' concept in the Vaisheshika Sutra.",
                "John Dalton proposed the first scientific Atomic Theory in 1808 ('A New System of Chemical Philosophy').",
                "Dalton postulated that atoms are indivisible, indestructible, and combine in simple whole-number ratios.",
                "Modern revisions: Atoms are divisible (into subatomic particles), and isotopes have different atomic masses."
            ],
            "keyNotes": [
                "Dalton's theory successfully explained the Laws of Conservation of Mass, Definite Proportions, and Multiple Proportions, but failed to explain Gay-Lussac's Law of Gaseous Volumes."
            ],
            "questions": [
                {
                    "id": "ch1_m01_q01",
                    "question": "Which ancient Indian philosopher postulated around 600-500 BCE that all matter is composed of indivisible particles called 'Parmanu'?",
                    "options": [
                        "Maharishi Kanad",
                        "Aryabhata",
                        "Varahamihira",
                        "Charaka"
                    ],
                    "answer": "Maharishi Kanad",
                    "explanation": "Maharishi Kanad founded the Vaisheshika school of philosophy and conceptualized 'Parmanu' as the ultimate indivisible unit of matter."
                },
                {
                    "id": "ch1_m01_q02",
                    "question": "In which year did British schoolmaster John Dalton formally publish his scientific Atomic Theory?",
                    "options": [
                        "1789",
                        "1808",
                        "1897",
                        "1911"
                    ],
                    "answer": "1808",
                    "explanation": "John Dalton published his groundbreaking scientific atomic theory in 1808 in 'A New System of Chemical Philosophy'."
                },
                {
                    "id": "ch1_m01_q03",
                    "question": "Which fundamental law of chemical combination states that mass can neither be created nor destroyed during a chemical reaction?",
                    "options": [
                        "Law of Conservation of Mass",
                        "Law of Definite Proportions",
                        "Law of Multiple Proportions",
                        "Avogadro's Law"
                    ],
                    "answer": "Law of Conservation of Mass",
                    "explanation": "Formulated by Antoine Lavoisier in 1789, the Law of Conservation of Mass states that total mass remains constant in a chemical reaction."
                },
                {
                    "id": "ch1_m01_q04",
                    "question": "According to Dalton's atomic theory, what happens to atoms during a chemical reaction?",
                    "options": [
                        "Atoms are destroyed into pure energy",
                        "Atoms are rearranged, combined, or separated without being created or destroyed",
                        "Atoms split into subatomic quarks permanently",
                        "Atoms double in mass"
                    ],
                    "answer": "Atoms are rearranged, combined, or separated without being created or destroyed",
                    "explanation": "Dalton stated that chemical reactions consist solely of the rearrangement, combination, or separation of indestructible atoms."
                },
                {
                    "id": "ch1_m01_q05",
                    "question": "The discovery of which physical entities directly disproved Dalton's postulate that all atoms of a given element have identical mass?",
                    "options": [
                        "Isotopes",
                        "Isobars",
                        "Allotropes",
                        "Isotones"
                    ],
                    "answer": "Isotopes",
                    "explanation": "Isotopes (atoms of the same element having the same atomic number but different mass numbers, e.g., ¹²C and ¹⁴C) proved Dalton wrong."
                },
                {
                    "id": "ch1_m01_q06",
                    "question": "What classical text contains Maharishi Kanad's philosophical discourse on atomic indivisibility?",
                    "options": [
                        "Vaisheshika Sutra",
                        "Sushruta Samhita",
                        "Surya Siddhanta",
                        "Arthashastra"
                    ],
                    "answer": "Vaisheshika Sutra",
                    "explanation": "Kanad's foundational philosophical principles of matter and Parmanu are expounded in the Vaisheshika Sutra."
                },
                {
                    "id": "ch1_m01_q07",
                    "question": "Which empirical gas law could NOT be satisfactorily explained by Dalton's original atomic theory?",
                    "options": [
                        "Gay-Lussac's Law of Gaseous Volumes",
                        "Boyle's Law",
                        "Charles's Law",
                        "Graham's Law of Diffusion"
                    ],
                    "answer": "Gay-Lussac's Law of Gaseous Volumes",
                    "explanation": "Dalton could not explain why gases combine in simple integer ratios of volumes under constant temperature and pressure."
                },
                {
                    "id": "ch1_m01_q08",
                    "question": "What is the modern definition of an atom in standard chemical terminology?",
                    "options": [
                        "The smallest particle of an element that retains its chemical identity and takes part in a chemical reaction",
                        "An indivisible solid marble without internal structure",
                        "A microscopic cluster of pure energy without mass",
                        "A subatomic particle identical to a proton"
                    ],
                    "answer": "The smallest particle of an element that retains its chemical identity and takes part in a chemical reaction",
                    "explanation": "An atom is the smallest unit of an element that preserves its unique chemical properties and participates in chemical bonding."
                },
                {
                    "id": "ch1_m01_q09",
                    "question": "Which scientist is universally celebrated as the 'Father of Modern Chemistry' for formulating the Law of Conservation of Mass?",
                    "options": [
                        "Antoine Lavoisier",
                        "John Dalton",
                        "Robert Boyle",
                        "Joseph Priestley"
                    ],
                    "answer": "Antoine Lavoisier",
                    "explanation": "Antoine-Laurent de Lavoisier established quantitative chemistry and the Law of Conservation of Mass, earning the title 'Father of Modern Chemistry'."
                },
                {
                    "id": "ch1_m01_q10",
                    "question": "Dalton represented elements using which unique notation system before modern alphabetical symbols were introduced by Berzelius?",
                    "options": [
                        "Pictographic circle-and-dot symbols",
                        "Latin roman numerals",
                        "Greek alphabets",
                        "Binary numbers"
                    ],
                    "answer": "Pictographic circle-and-dot symbols",
                    "explanation": "Dalton devised unique circular pictograms containing lines, dots, and letters to visually represent atoms of different elements."
                }
            ]
        },
        {
            "id": "m02",
            "moduleNumber": 2,
            "title": "Fundamental Laws of Chemical Combination",
            "tagline": "Stoichiometric foundations: Conservation of Mass, Constant Composition, Multiple Proportions, and Reciprocal Proportions.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>Quantitative chemistry rests upon five fundamental empirical laws of chemical combination that govern the formation of chemical compounds from their constituent elements.</p><p>The **Law of Conservation of Mass** (Antoine Lavoisier, 1789) dictates that during any physical or chemical transformation, total mass remains unchanged; total mass of reactants equals total mass of products.</p><p>The **Law of Constant Composition / Definite Proportions** (Joseph Proust, 1799) states that a pure chemical compound always contains exactly the same elements combined together in the same fixed proportion by mass, irrespective of its source or method of preparation. For example, pure water ($H_2O$) always contains hydrogen and oxygen in a 1:8 mass ratio (2 g of H to 16 g of O).</p><p>The **Law of Multiple Proportions** (John Dalton, 1803) specifies that when two elements combine to form more than one compound, the different masses of one element that combine with a fixed mass of the other element bear a simple whole-number ratio. For instance, in carbon monoxide ($CO$) and carbon dioxide ($CO_2$), 12 g of carbon combines with 16 g and 32 g of oxygen respectively; the oxygen ratio is a simple 16:32 = 1:2.</p><p>The **Law of Gaseous Volumes** (Gay-Lussac, 1808) shows that gases react in simple volume ratios at constant temperature and pressure, which was subsequently rationalized by **Avogadro's Law** (1811): equal volumes of all gases under identical conditions contain equal numbers of molecules.</p>",
            "pointsToRemember": [
                "Law of Conservation of Mass: Lavoisier (1789) - Total mass of reactants = Total mass of products.",
                "Law of Definite Proportions: Proust (1799) - A compound always contains fixed mass ratios of elements (Water = 1:8 H:O).",
                "Law of Multiple Proportions: Dalton (1803) - $CO$ vs $CO_2$ has oxygen ratio 1:2 for fixed carbon mass.",
                "Gay-Lussac's Law & Avogadro's Hypothesis (1811): Equal volumes of gases contain equal numbers of molecules ($V \\propto n$)."
            ],
            "keyNotes": [
                "The Law of Multiple Proportions applies only when two elements combine to form distinct compounds, such as $H_2O$ and $H_2O_2$ (oxygen ratio 16:32 = 1:2), or $NO, NO_2, N_2O, N_2O_3, N_2O_5$."
            ],
            "questions": [
                {
                    "id": "ch1_m02_q01",
                    "question": "Who formulated the Law of Constant Composition (Definite Proportions) in 1799?",
                    "options": [
                        "Joseph Proust",
                        "Antoine Lavoisier",
                        "John Dalton",
                        "Amedeo Avogadro"
                    ],
                    "answer": "Joseph Proust",
                    "explanation": "French chemist Joseph Proust formulated the Law of Definite Proportions based on cuprite and copper carbonate analyses."
                },
                {
                    "id": "ch1_m02_q02",
                    "question": "In water (H₂O), what is the fixed mass ratio of Hydrogen to Oxygen, demonstrating Proust's Law?",
                    "options": [
                        "1 : 8",
                        "1 : 2",
                        "2 : 1",
                        "1 : 16"
                    ],
                    "answer": "1 : 8",
                    "explanation": "Hydrogen has atomic mass ~1 and oxygen ~16. In H₂O, mass ratio of H to O is (2 × 1) : 16 = 2 : 16 = 1 : 8."
                },
                {
                    "id": "ch1_m02_q03",
                    "question": "Which law is illustrated by the formation of Carbon Monoxide (CO) and Carbon Dioxide (CO₂) from Carbon and Oxygen?",
                    "options": [
                        "Law of Multiple Proportions",
                        "Law of Conservation of Mass",
                        "Law of Reciprocal Proportions",
                        "Graham's Law"
                    ],
                    "answer": "Law of Multiple Proportions",
                    "explanation": "For a fixed mass of carbon (12 g), oxygen masses are 16 g (CO) and 32 g (CO₂), forming a simple ratio 1:2 (Dalton's Law of Multiple Proportions)."
                },
                {
                    "id": "ch1_m02_q04",
                    "question": "Nitrogen and oxygen form five different oxides (N₂O, NO, N₂O₃, NO₂, N₂O₅). This series provides classic verification of:",
                    "options": [
                        "Law of Multiple Proportions",
                        "Law of Constant Proportions",
                        "Boyle's Law",
                        "Henry's Law"
                    ],
                    "answer": "Law of Multiple Proportions",
                    "explanation": "The varying masses of oxygen (16, 32, 48, 64, 80 g) combining with a fixed mass of nitrogen (28 g) illustrate the Law of Multiple Proportions."
                },
                {
                    "id": "ch1_m02_q05",
                    "question": "Avogadro's Law states that at equal temperature and pressure, equal volumes of all gases contain:",
                    "options": [
                        "Equal number of molecules",
                        "Equal number of electrons",
                        "Equal mass in grams",
                        "Equal density"
                    ],
                    "answer": "Equal number of molecules",
                    "explanation": "Avogadro's hypothesis (1811) states that equal volumes of gases at identical temperature and pressure contain identical numbers of molecules."
                },
                {
                    "id": "ch1_m02_q06",
                    "question": "What is the volume occupied by one mole of an ideal gas at Standard Temperature and Pressure (STP: 273.15 K, 1 atm)?",
                    "options": [
                        "22.4 liters",
                        "11.2 liters",
                        "44.8 liters",
                        "1.0 liter"
                    ],
                    "answer": "22.4 liters",
                    "explanation": "At STP (0°C, 1 atm), one mole of any ideal gas occupies approximately 22.414 liters (molar volume)."
                },
                {
                    "id": "ch1_m02_q07",
                    "question": "When hydrogen and oxygen react to form water: 2H₂(g) + O₂(g) → 2H₂O(g), the volumes are 2:1:2. This exemplifies:",
                    "options": [
                        "Gay-Lussac's Law of Combining Gaseous Volumes",
                        "Dulong-Petit Law",
                        "Dalton's Partial Pressure Law",
                        "Charles's Law"
                    ],
                    "answer": "Gay-Lussac's Law of Combining Gaseous Volumes",
                    "explanation": "Gay-Lussac's Law states that when gases react chemically, they do so in volumes that bear simple whole-number ratios."
                },
                {
                    "id": "ch1_m02_q08",
                    "question": "Under Einstein's mass-energy equivalence ($E = mc^2$), why is Lavoisier's conservation of mass still practically valid in ordinary chemical reactions?",
                    "options": [
                        "The energy change ($\\Delta E$) in chemical reactions corresponds to an infinitesimally undetectable mass difference ($\\Delta m = \\Delta E/c^2$)",
                        "Mass literally cannot convert to energy ever",
                        "Chemical reactions involve nuclear fission",
                        "Reactants always weigh more than products"
                    ],
                    "answer": "The energy change ($\\Delta E$) in chemical reactions corresponds to an infinitesimally undetectable mass difference ($\\Delta m = \\Delta E/c^2$)",
                    "explanation": "Because c² is huge (~9 × 10¹⁶ m²/s²), the mass defect corresponding to ordinary chemical bond energies (~kJ/mol) is undetectable on balances."
                },
                {
                    "id": "ch1_m02_q09",
                    "question": "Who formulated the Law of Reciprocal (Equivalent) Proportions in 1792?",
                    "options": [
                        "Jeremias Richter",
                        "Joseph Priestley",
                        "Humphry Davy",
                        "Carl Scheele"
                    ],
                    "answer": "Jeremias Richter",
                    "explanation": "German chemist Jeremias Richter formulated the Law of Reciprocal Proportions, laying the groundwork for chemical stoichiometry."
                },
                {
                    "id": "ch1_m02_q10",
                    "question": "Two samples of cupric carbonate (one natural malachite and one synthetic lab precipitate) have identical percentage compositions. This proves:",
                    "options": [
                        "Law of Constant Composition (Definite Proportions)",
                        "Law of Multiple Proportions",
                        "Law of Conservation of Energy",
                        "Avogadro's Law"
                    ],
                    "answer": "Law of Constant Composition (Definite Proportions)",
                    "explanation": "Proust's classic experiment showed natural and synthetic cupric carbonate possess identical element percentages by mass."
                }
            ]
        },
        {
            "id": "m03",
            "moduleNumber": 3,
            "title": "Discovery of the Electron & Cathode Ray Tube Experiments",
            "tagline": "William Crookes' discharge tube, J.J. Thomson's 1897 cathode ray experiments, properties of cathode rays, and electron identity.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>The discovery of the electron demonstrated that the atom is not an indivisible entity, inaugurating the era of modern atomic and subatomic physics.</p><p>In the late 19th century, scientists led by Julius Plücker and Sir William Crookes investigated the conduction of electricity through gases at very low pressures (approx $10^{-2}$ to $10^{-4}$ mm Hg) inside evacuated glass tubes known as **Crookes discharge tubes**.</p><p>When high electrical voltage (10,000 to 20,000 volts) was applied across the electrodes, invisible radiation originated from the negative electrode (cathode) and travelled toward the positive electrode (anode). These rays, termed **Cathode Rays**, caused a greenish fluorescence when striking the glass wall behind a perforated anode coated with zinc sulfide (ZnS).</p><p>In 1897, British physicist **Sir Joseph John (J.J.) Thomson** conducted exhaustive experiments and proved that cathode rays: (1) Travel in straight lines casting sharp shadows of opaque objects; (2) Possess mechanical kinetic energy, rotating lightweight paddle wheels placed in their path; (3) Are deflected toward the positive plate in an electric field and deflected by magnetic fields, proving they are streams of negatively charged particles; and (4) Possess properties completely independent of the gas inside the tube and the material of the cathode.</p><p>Thomson called these universal negatively charged corpuscles 'electrons' (a name originally coined by G.J. Stoney in 1891). Thomson was awarded the Nobel Prize in Physics in 1906 for this historic breakthrough.</p>",
            "pointsToRemember": [
                "Cathode rays originate from the cathode (negative electrode) at low pressure (<0.01 mm Hg) and high voltage (>10 kV).",
                "Discovered by William Crookes; particle nature and electron identification established by J.J. Thomson in 1897.",
                "Properties: Travel in straight lines, possess momentum (rotate paddle wheels), deflect toward positive electric plates.",
                "G.J. Stoney (1891) coined the term 'electron'; J.J. Thomson won the 1906 Nobel Prize."
            ],
            "keyNotes": [
                "Cathode rays are independent of the nature of the gas inside the tube and the cathode material, proving that the electron is a universal constituent of all matter."
            ],
            "questions": [
                {
                    "id": "ch1_m03_q01",
                    "question": "In which year did J.J. Thomson conclusively establish the existence and particle nature of the electron?",
                    "options": [
                        "1897",
                        "1808",
                        "1911",
                        "1932"
                    ],
                    "answer": "1897",
                    "explanation": "J.J. Thomson demonstrated the nature of cathode rays as subatomic negative corpuscles in 1897."
                },
                {
                    "id": "ch1_m03_q02",
                    "question": "Who originally coined the term 'electron' in 1891 for the fundamental unit of electric charge?",
                    "options": [
                        "George Johnstone Stoney",
                        "J.J. Thomson",
                        "Ernest Rutherford",
                        "Michael Faraday"
                    ],
                    "answer": "George Johnstone Stoney",
                    "explanation": "Irish physicist G.J. Stoney introduced the term 'electron' in 1891 to describe the fundamental unit of electrical charge."
                },
                {
                    "id": "ch1_m03_q03",
                    "question": "In a Crookes discharge tube, what atmospheric pressure is typically maintained to observe cathode rays?",
                    "options": [
                        "Very low pressure (approx 0.01 mm Hg to 0.001 mm Hg)",
                        "High pressure (10 atmospheres)",
                        "Standard 1 atmosphere (760 mm Hg)",
                        "Zero pressure (pure vacuum with no gas atoms ever)"
                    ],
                    "answer": "Very low pressure (approx 0.01 mm Hg to 0.001 mm Hg)",
                    "explanation": "Cathode rays appear when gas pressure inside the tube is reduced to approximately 10⁻² to 10⁻⁴ mm of mercury."
                },
                {
                    "id": "ch1_m03_q04",
                    "question": "What experimental observation proved that cathode rays possess mechanical kinetic energy and momentum?",
                    "options": [
                        "They rotated a light mica pinwheel/paddle placed in their path",
                        "They turned water into ice",
                        "They produced sound waves audible across the room",
                        "They caused the glass tube to turn magnetic"
                    ],
                    "answer": "They rotated a light mica pinwheel/paddle placed in their path",
                    "explanation": "The rotation of a lightweight paddle wheel placed in the cathode ray path proved that the particles possess mass and momentum."
                },
                {
                    "id": "ch1_m03_q05",
                    "question": "When an electric field is applied perpendicular to the path of cathode rays, towards which plate do they deflect?",
                    "options": [
                        "Deflect towards the positive plate (anode)",
                        "Deflect towards the negative plate (cathode)",
                        "They pass through completely undeflected",
                        "They bounce back 180 degrees"
                    ],
                    "answer": "Deflect towards the positive plate (anode)",
                    "explanation": "Cathode rays are deflected toward the positively charged electrical plate, proving they carry a negative electrical charge."
                },
                {
                    "id": "ch1_m03_q06",
                    "question": "Which phosphor material is standardly coated on the glass wall of discharge tubes to produce bright green scintillation upon cathode ray impact?",
                    "options": [
                        "Zinc Sulfide (ZnS)",
                        "Sodium Chloride (NaCl)",
                        "Calcium Oxide (CaO)",
                        "Lead Sulfate"
                    ],
                    "answer": "Zinc Sulfide (ZnS)",
                    "explanation": "Zinc sulfide (ZnS) phosphors emit bright green fluorescent flashes when struck by energetic electrons."
                },
                {
                    "id": "ch1_m03_q07",
                    "question": "Why did J.J. Thomson conclude that the electron is a universal constituent of all matter?",
                    "options": [
                        "The properties and charge-to-mass ratio of cathode rays remained identical regardless of the gas used or cathode metal chosen",
                        "Electrons are found floating in outer space alone",
                        "All elements have the same atomic weight",
                        "Electrons can be seen with optical microscopes"
                    ],
                    "answer": "The properties and charge-to-mass ratio of cathode rays remained identical regardless of the gas used or cathode metal chosen",
                    "explanation": "The e/m ratio was independent of the gas inside the tube and the cathode material, proving electrons are universal."
                },
                {
                    "id": "ch1_m03_q08",
                    "question": "For which monumental achievement was J.J. Thomson awarded the Nobel Prize in Physics in 1906?",
                    "options": [
                        "Theoretical and experimental investigations on the conduction of electricity by gases and discovery of the electron",
                        "Formulation of the periodic table",
                        "Splitting of the uranium nucleus",
                        "Discovery of radioactivity"
                    ],
                    "answer": "Theoretical and experimental investigations on the conduction of electricity by gases and discovery of the electron",
                    "explanation": "Thomson received the 1906 Nobel Prize in Physics for his research on the conduction of electricity by gases."
                },
                {
                    "id": "ch1_m03_q09",
                    "question": "What type of radiation is generated when high-energy cathode rays strike a heavy metal target (such as tungsten)?",
                    "options": [
                        "X-rays (Roentgen rays)",
                        "Alpha rays",
                        "Infrared heat waves",
                        "Cosmic microwave background"
                    ],
                    "answer": "X-rays (Roentgen rays)",
                    "explanation": "As discovered by Wilhelm Roentgen in 1895, high-speed electrons decelerating in heavy metal targets produce X-rays (Bremsstrahlung)."
                },
                {
                    "id": "ch1_m03_q10",
                    "question": "In which direction do cathode rays travel within a discharge tube?",
                    "options": [
                        "In straight lines from the cathode (negative) toward the anode (positive)",
                        "From anode to cathode",
                        "In circular spirals around the glass",
                        "Randomly in all directions like Brownian motion"
                    ],
                    "answer": "In straight lines from the cathode (negative) toward the anode (positive)",
                    "explanation": "Cathode rays emerge perpendicular to the cathode surface and travel in straight lines towards the anode."
                }
            ]
        },
        {
            "id": "m04",
            "moduleNumber": 4,
            "title": "Charge-to-Mass Ratio (e/m) & Millikan's Oil Drop Experiment",
            "tagline": "Mathematical measurement of electron e/m ratio by J.J. Thomson and absolute charge determination by R.A. Millikan.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>In 1897, J.J. Thomson accomplished the precise determination of the **charge-to-mass ratio ($e/m_e$)** of the electron by subjecting a collimated beam of cathode rays to mutually perpendicular (crossed) electric ($E$) and magnetic ($B$) fields.</p><p>By adjusting the field strengths such that the electric force ($F_e = eE$) exactly balanced the magnetic Lorentz force ($F_m = evB$), the electrons passed through without any deflection. Equating $eE = evB$ yielded the electron velocity $v = E/B$. By measuring the deflection when only one field operated, Thomson computed the universal ratio:</p><p>$$e/m_e = 1.758820 \\times 10^{11} \\text{ C/kg} \\quad (\\approx 1.76 \\times 10^8 \\text{ C/g})$$</p><p>In 1909, American physicist **Robert Andrews Millikan** devised the ingenious **Oil Drop Experiment** to measure the absolute electrical charge of an electron. Fine droplets of oil sprayed by an atomizer were charged by ionizing X-rays. By balancing gravitational downward pull ($mg$) against upward electrostatic force ($qE$), Millikan observed that the charge ($q$) on every droplet was always an integral multiple of an elementary quantum: $q = ne$ (where $n = 1, 2, 3...$).</p><p>Millikan determined the elementary charge of an electron: $e = -1.6022 \\times 10^{-19} \\text{ Coulombs}$.</p><p>Combining Thomson's $e/m$ ratio and Millikan's charge $e$, the rest mass of an electron was calculated with extraordinary accuracy:</p><p>$$m_e = \\frac{e}{e/m} = \\frac{1.6022 \\times 10^{-19} \\text{ C}}{1.7588 \\times 10^{11} \\text{ C/kg}} = 9.10938 \\times 10^{-31} \\text{ kg} \\quad (\\approx 9.11 \\times 10^{-28} \\text{ g})$$</p><p>This proved that the electron has a mass approximately **1/1837th (or ~1/2000th)** of the mass of a hydrogen atom ($1.67 \\times 10^{-24}$ g).</p>",
            "pointsToRemember": [
                "J.J. Thomson measured $e/m_e = 1.7588 \\times 10^{11} \\text{ C/kg}$ using crossed electric and magnetic fields.",
                "R.A. Millikan measured electron charge $e = -1.6022 \\times 10^{-19} \\text{ C}$ via the Oil Drop Experiment (quantization of charge: $q = ne$).",
                "Rest mass of electron: $m_e = 9.109 \\times 10^{-31} \\text{ kg} \\approx \\frac{1}{1837}$ of hydrogen atom mass.",
                "Millikan won the 1923 Nobel Prize in Physics for elementary charge determination and photoelectric work."
            ],
            "keyNotes": [
                "The principle $q = ne$ proved the quantization of electric charge, establishing that electric charge occurs exclusively in discrete packets."
            ],
            "questions": [
                {
                    "id": "ch1_m04_q01",
                    "question": "What is the precise charge-to-mass ratio (e/m) of an electron as measured by J.J. Thomson?",
                    "options": [
                        "1.76 × 10¹¹ C/kg",
                        "9.11 × 10⁻³¹ C/kg",
                        "1.60 × 10⁻¹⁹ C/kg",
                        "6.02 × 10²³ C/kg"
                    ],
                    "answer": "1.76 × 10¹¹ C/kg",
                    "explanation": "The charge-to-mass ratio of the electron determined by Thomson is approximately 1.7588 × 10¹¹ Coulombs per kilogram."
                },
                {
                    "id": "ch1_m04_q02",
                    "question": "Which historic experiment determined the absolute elementary electrical charge (e) on an electron?",
                    "options": [
                        "Millikan's Oil Drop Experiment",
                        "Rutherford's Alpha Scattering Experiment",
                        "Davisson-Germer Experiment",
                        "Stern-Gerlach Experiment"
                    ],
                    "answer": "Millikan's Oil Drop Experiment",
                    "explanation": "Robert A. Millikan determined the charge on the electron in 1909 using charged microscopic oil droplets in an electric field."
                },
                {
                    "id": "ch1_m04_q03",
                    "question": "What is the universally accepted absolute negative electrical charge carried by a single electron?",
                    "options": [
                        "-1.602 × 10⁻¹⁹ Coulombs",
                        "-9.11 × 10⁻²⁸ Coulombs",
                        "-1.76 × 10¹¹ Coulombs",
                        "-4.8 × 10⁻¹⁰ Coulombs only"
                    ],
                    "answer": "-1.602 × 10⁻¹⁹ Coulombs",
                    "explanation": "The elementary electrical charge of an electron is -1.6022 × 10⁻¹⁹ Coulombs."
                },
                {
                    "id": "ch1_m04_q04",
                    "question": "What is the rest mass of an electron in kilograms?",
                    "options": [
                        "9.109 × 10⁻³¹ kg",
                        "1.673 × 10⁻²⁷ kg",
                        "1.675 × 10⁻²⁷ kg",
                        "9.109 × 10⁻²⁸ kg"
                    ],
                    "answer": "9.109 × 10⁻³¹ kg",
                    "explanation": "The rest mass of the electron is 9.10938 × 10⁻³¹ kg (or 9.109 × 10⁻²⁸ g)."
                },
                {
                    "id": "ch1_m04_q05",
                    "question": "The mass of an electron is approximately what fraction of the mass of a Hydrogen atom (or proton)?",
                    "options": [
                        "1 / 1837th (approx 1/2000th)",
                        "1 / 100th",
                        "1 / 10th",
                        "Equal to hydrogen atom mass"
                    ],
                    "answer": "1 / 1837th (approx 1/2000th)",
                    "explanation": "The mass of an electron is roughly 1/1837 (approx 0.000548 amu) of a hydrogen atom's mass, making it negligible in atomic mass calculations."
                },
                {
                    "id": "ch1_m04_q06",
                    "question": "What fundamental physical principle did Millikan's observation 'q = ne' demonstrate regarding electric charge?",
                    "options": [
                        "Quantization of electric charge",
                        "Conservation of momentum",
                        "Relativistic mass dilation",
                        "Wave-particle duality"
                    ],
                    "answer": "Quantization of electric charge",
                    "explanation": "The formula q = ne established that all observable electric charges exist as integral multiples of the elementary charge e (quantization)."
                },
                {
                    "id": "ch1_m04_q07",
                    "question": "In Thomson's e/m experiment, how were the electric and magnetic fields oriented relative to each other and to the electron beam?",
                    "options": [
                        "Mutually perpendicular to each other and to the beam direction (crossed fields)",
                        "Parallel to each other and to the beam",
                        "In opposite directions along the same line",
                        "At a 45 degree angle"
                    ],
                    "answer": "Mutually perpendicular to each other and to the beam direction (crossed fields)",
                    "explanation": "Thomson utilized crossed (mutually perpendicular) electric and magnetic fields to achieve zero net deflection."
                },
                {
                    "id": "ch1_m04_q08",
                    "question": "What ionizing agent was used by Millikan in his oil drop chamber to produce charges on the oil droplets?",
                    "options": [
                        "X-rays",
                        "Infrared rays",
                        "Microwaves",
                        "Alpha rays from radon alone"
                    ],
                    "answer": "X-rays",
                    "explanation": "Millikan ionized air molecules in the chamber using X-rays; the oil droplets captured these gaseous ions to become charged."
                },
                {
                    "id": "ch1_m04_q09",
                    "question": "What is the relative mass of an electron on the unified atomic mass scale (amu)?",
                    "options": [
                        "0.000548 amu",
                        "1.00727 amu",
                        "1.00866 amu",
                        "0 amu strictly"
                    ],
                    "answer": "0.000548 amu",
                    "explanation": "On the atomic mass scale (where ¹²C = 12.000), the electron mass is 0.00054858 amu."
                },
                {
                    "id": "ch1_m04_q10",
                    "question": "In what year was Robert A. Millikan awarded the Nobel Prize in Physics for measuring the elementary charge of electricity?",
                    "options": [
                        "1923",
                        "1906",
                        "1911",
                        "1932"
                    ],
                    "answer": "1923",
                    "explanation": "Millikan received the 1923 Nobel Prize in Physics for his work on the elementary charge of electricity and the photoelectric effect."
                }
            ]
        },
        {
            "id": "m05",
            "moduleNumber": 5,
            "title": "Discovery of the Proton: Canal Rays & Eugen Goldstein",
            "tagline": "Discovery of anode rays (canal rays), Goldstein's perforated cathode experiments, and Rutherford's identification of the proton in 1919.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>Because atoms are electrically neutral entities, the discovery of the negatively charged electron necessitated the existence of a balancing positive charge within the atom.</p><p>In 1886, German physicist **Eugen Goldstein** used a modified discharge tube featuring a **perforated cathode**. When electrical discharge passed through the low-pressure gas, Goldstein observed luminous rays travelling in the direction opposite to cathode rays—originating from the anode and passing through the perforations (canals) of the cathode.</p><p>Goldstein designated these streams as **Canal Rays** (or **Anode Rays**). Subsequent investigations by Wilhelm Wien and J.J. Thomson established their key properties: (1) They travel in straight lines; (2) They are deflected toward the negative plate in an electric field, confirming they carry positive charge; and (3) Crucially, unlike cathode rays, their charge-to-mass ratio ($e/m$) **depends heavily on the nature of the gas** inside the discharge tube.</p><p>The reason for this variation is that anode rays are not emitted by the anode metal itself, but are **positive residual ions** formed when cathode electrons collide with and knock electrons out of neutral gas atoms ($M + e^- \\rightarrow M^+ + 2e^-$).</p><p>The lightest and smallest positive ion was obtained when **Hydrogen gas** was placed in the tube ($H \\rightarrow H^+ + e^-$). In 1919, **Ernest Rutherford** established that this fundamental positive unit is an indivisible subatomic constituent present in all atomic nuclei, officially naming it the **Proton** (from Greek 'protos', meaning first).</p>",
            "pointsToRemember": [
                "Eugen Goldstein discovered Canal Rays (Anode Rays) in 1886 using a perforated cathode.",
                "Anode rays are positively charged ions formed by ionization of the residual gas inside the tube.",
                "The e/m ratio of anode rays depends on the gas used; it is maximum for Hydrogen gas.",
                "Ernest Rutherford proved the proton is a universal fundamental constituent of all atoms in 1919."
            ],
            "keyNotes": [
                "The charge of a proton is exactly equal in magnitude to that of an electron ($+1.6022 \\times 10^{-19}$ C), but opposite in sign; its mass is $1.6726 \\times 10^{-27}$ kg (~1836 times heavier than an electron)."
            ],
            "questions": [
                {
                    "id": "ch1_m05_q01",
                    "question": "Who discovered Canal Rays (positive rays) in 1886 using a discharge tube with a perforated cathode?",
                    "options": [
                        "Eugen Goldstein",
                        "J.J. Thomson",
                        "Ernest Rutherford",
                        "James Chadwick"
                    ],
                    "answer": "Eugen Goldstein",
                    "explanation": "German physicist Eugen Goldstein discovered canal rays in 1886 passing through holes in a perforated cathode."
                },
                {
                    "id": "ch1_m05_q02",
                    "question": "Why did the charge-to-mass ratio (e/m) of anode rays vary with different gases inside the discharge tube?",
                    "options": [
                        "Anode rays are positive ions of the residual gas whose masses differ according to the gas element",
                        "The cathode disintegrated into the gas",
                        "Electrons changed mass in different gases",
                        "Anode rays have zero mass"
                    ],
                    "answer": "Anode rays are positive ions of the residual gas whose masses differ according to the gas element",
                    "explanation": "Anode rays are positive gaseous ions created by electron impact; heavier gas atoms produce ions with greater mass, lowering e/m."
                },
                {
                    "id": "ch1_m05_q03",
                    "question": "For which gas in the discharge tube did anode rays yield the maximum charge-to-mass ratio (e/m)?",
                    "options": [
                        "Hydrogen (H₂)",
                        "Helium (He)",
                        "Oxygen (O₂)",
                        "Nitrogen (N₂)"
                    ],
                    "answer": "Hydrogen (H₂)",
                    "explanation": "Hydrogen has the lightest atomic mass (m = 1 amu), giving the highest charge-to-mass ratio (e/m) among all positive ions."
                },
                {
                    "id": "ch1_m05_q04",
                    "question": "In which year did Ernest Rutherford formally identify the hydrogen ion (H⁺) as the universal fundamental particle named the 'proton'?",
                    "options": [
                        "1919",
                        "1886",
                        "1897",
                        "1932"
                    ],
                    "answer": "1919",
                    "explanation": "In 1919, Rutherford proved that hydrogen nuclei are constituent parts of all atoms, designating them 'protons'."
                },
                {
                    "id": "ch1_m05_q05",
                    "question": "What is the absolute positive electrical charge carried by a single proton?",
                    "options": [
                        "+1.602 × 10⁻¹⁹ Coulombs",
                        "-1.602 × 10⁻¹⁹ Coulombs",
                        "+9.11 × 10⁻³¹ Coulombs",
                        "+1.76 × 10¹¹ Coulombs"
                    ],
                    "answer": "+1.602 × 10⁻¹⁹ Coulombs",
                    "explanation": "The charge of a proton is equal in magnitude and opposite in sign to the electron: +1.6022 × 10⁻¹⁹ C."
                },
                {
                    "id": "ch1_m05_q06",
                    "question": "What is the absolute rest mass of a proton in kilograms?",
                    "options": [
                        "1.6726 × 10⁻²⁷ kg",
                        "9.109 × 10⁻³¹ kg",
                        "1.6749 × 10⁻²⁷ kg",
                        "1.000 × 10⁻²⁴ kg"
                    ],
                    "answer": "1.6726 × 10⁻²⁷ kg",
                    "explanation": "The rest mass of a proton is 1.67262 × 10⁻²⁷ kg (approx 1.00727 amu)."
                },
                {
                    "id": "ch1_m05_q07",
                    "question": "How many times heavier is a proton compared to the rest mass of an electron?",
                    "options": [
                        "Approximately 1,836 times heavier",
                        "Approximately 10 times heavier",
                        "Exactly 100 times heavier",
                        "They have equal mass"
                    ],
                    "answer": "Approximately 1,836 times heavier",
                    "explanation": "A proton (1.6726 × 10⁻²⁷ kg) is approximately 1,836 times more massive than an electron (9.109 × 10⁻³¹ kg)."
                },
                {
                    "id": "ch1_m05_q08",
                    "question": "What is the origin of canal rays inside a gas discharge tube?",
                    "options": [
                        "They are positive ions formed when high-velocity cathode rays collide with neutral gas atoms, ejecting electrons",
                        "They are emitted directly from the surface of the anode metal",
                        "They leak from the external battery",
                        "They are cosmic rays entering through glass"
                    ],
                    "answer": "They are positive ions formed when high-velocity cathode rays collide with neutral gas atoms, ejecting electrons",
                    "explanation": "Canal rays originate in the gas volume between electrodes when ionizing cathode electrons strip electrons from gas atoms."
                },
                {
                    "id": "ch1_m05_q09",
                    "question": "Which term derived from the Greek word 'protos' (meaning first) was chosen by Rutherford for the fundamental positive particle?",
                    "options": [
                        "Proton",
                        "Positron",
                        "Photon",
                        "Pion"
                    ],
                    "answer": "Proton",
                    "explanation": "Rutherford coined the word 'proton' from Greek 'protos' to signify its fundamental, primary building block status."
                },
                {
                    "id": "ch1_m05_q10",
                    "question": "What nuclear reaction carried out by Rutherford in 1919 provided the first artificial transmutation and verified the proton?",
                    "options": [
                        "Bombardment of Nitrogen-14 with alpha particles: ¹⁴N + ⁴He → ¹⁷O + ¹H (proton)",
                        "Bombardment of Uranium with neutrons",
                        "Electrolysis of heavy water",
                        "Fission of Radium"
                    ],
                    "answer": "Bombardment of Nitrogen-14 with alpha particles: ¹⁴N + ⁴He → ¹⁷O + ¹H (proton)",
                    "explanation": "Rutherford bombarded nitrogen gas with alpha particles, producing oxygen-17 and ejecting energetic hydrogen nuclei (protons)."
                }
            ]
        },
        {
            "id": "m06",
            "moduleNumber": 6,
            "title": "Discovery of the Neutron: James Chadwick's Experiment (1932)",
            "tagline": "Alpha bombardment of beryllium, discovery of the neutral subatomic particle, nuclear mass deficit, and isotope explanation.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>By the 1920s, physicists recognized an inexplicable discrepancy in atomic mass: while hydrogen had 1 proton and mass 1 amu, helium had 2 protons (nuclear charge +2) but an atomic mass of 4 amu. Ernest Rutherford predicted the existence of an electrically neutral particle of mass roughly equal to a proton to account for this missing nuclear mass.</p><p>In 1932, British physicist **James Chadwick** (Rutherford's student at the Cavendish Laboratory) performed the definitive experiment: he bombarded a thin sheet of **Beryllium** with high-velocity **alpha particles** ($\u0007lpha$, $^4_2He$) emitted by radioactive Polonium.</p><p>The bombardment produced a mysterious, highly penetrating radiation that was completely unaffected by electric or magnetic fields. When this neutral radiation struck a paraffin wax target, it knocked out high-energy protons with immense force.</p><p>By analyzing the conservation of momentum and energy of the ejected protons, Chadwick deduced that the radiation consisted of uncharged, neutral subatomic particles possessing a mass slightly greater than that of a proton. He named these particles **Neutrons**:</p><p>$$^9_4Be + ^4_2He \\rightarrow ^{12}_6C + ^1_0n \\quad (\\text{neutron})$$</p><p>Chadwick was awarded the **Nobel Prize in Physics in 1935** for this discovery, completing the fundamental triumvirate of subatomic particles (electron, proton, neutron).</p>",
            "pointsToRemember": [
                "James Chadwick discovered the Neutron in 1932 by bombarding Beryllium with alpha particles ($^9_4Be + ^4_2He \\rightarrow ^{12}_6C + ^1_0n$).",
                "Neutrons are electrically neutral (charge = 0) with mass $1.6749 \\times 10^{-27}$ kg (slightly heavier than proton).",
                "Resolved the mystery of atomic mass and explained the existence of isotopes.",
                "Chadwick was awarded the 1935 Nobel Prize in Physics."
            ],
            "keyNotes": [
                "The common hydrogen atom (Protium, $^1_1H$) is the ONLY atom in the universe that contains NO neutrons in its nucleus (it consists of 1 proton and 1 electron)."
            ],
            "questions": [
                {
                    "id": "ch1_m06_q01",
                    "question": "In which year did British physicist James Chadwick discover the neutron?",
                    "options": [
                        "1932",
                        "1897",
                        "1911",
                        "1919"
                    ],
                    "answer": "1932",
                    "explanation": "James Chadwick conclusively proved the existence of the neutron at the Cavendish Laboratory in 1932."
                },
                {
                    "id": "ch1_m06_q02",
                    "question": "Which light metal target did Chadwick bombard with alpha particles to eject neutral neutrons?",
                    "options": [
                        "Beryllium (Be)",
                        "Gold (Au)",
                        "Lead (Pb)",
                        "Uranium (U)"
                    ],
                    "answer": "Beryllium (Be)",
                    "explanation": "Chadwick bombarded a thin foil of Beryllium-9 with alpha particles: ⁹₄Be + ⁴₂He → ¹²₆C + ¹₀n."
                },
                {
                    "id": "ch1_m06_q03",
                    "question": "What target material did the penetrating neutron radiation strike, causing energetic protons to be ejected?",
                    "options": [
                        "Paraffin wax (rich in hydrogen)",
                        "Solid iron sheet",
                        "Heavy tungsten block",
                        "Graphite rod"
                    ],
                    "answer": "Paraffin wax (rich in hydrogen)",
                    "explanation": "Paraffin wax contains dense hydrogen atoms; neutrons collided with protons in the wax, knocking them out with measurable velocity."
                },
                {
                    "id": "ch1_m06_q04",
                    "question": "What is the absolute electrical charge of a neutron?",
                    "options": [
                        "Zero (electrically neutral)",
                        "+1.602 × 10⁻¹⁹ C",
                        "-1.602 × 10⁻¹⁹ C",
                        "+3.2 × 10⁻¹⁹ C"
                    ],
                    "answer": "Zero (electrically neutral)",
                    "explanation": "The neutron carries zero electrical charge, making it impervious to electrostatic and magnetic deflections."
                },
                {
                    "id": "ch1_m06_q05",
                    "question": "What is the absolute rest mass of a neutron in kilograms?",
                    "options": [
                        "1.6749 × 10⁻²⁷ kg",
                        "1.6726 × 10⁻²⁷ kg",
                        "9.109 × 10⁻³¹ kg",
                        "1.000 × 10⁻²⁴ kg"
                    ],
                    "answer": "1.6749 × 10⁻²⁷ kg",
                    "explanation": "The rest mass of a neutron is 1.67493 × 10⁻²⁷ kg (approx 1.00866 amu), making it marginally heavier than a proton."
                },
                {
                    "id": "ch1_m06_q06",
                    "question": "Which is the only chemical element whose primary natural isotope contains NO neutrons in its nucleus?",
                    "options": [
                        "Hydrogen (Protium, ¹H)",
                        "Helium (⁴He)",
                        "Lithium (⁶Li)",
                        "Boron (¹⁰B)"
                    ],
                    "answer": "Hydrogen (Protium, ¹H)",
                    "explanation": "Protium (¹₁H), the most abundant isotope of hydrogen, consists of exactly one proton and zero neutrons."
                },
                {
                    "id": "ch1_m06_q07",
                    "question": "In which year was James Chadwick awarded the Nobel Prize in Physics for discovering the neutron?",
                    "options": [
                        "1935",
                        "1906",
                        "1923",
                        "1950"
                    ],
                    "answer": "1935",
                    "explanation": "Chadwick was awarded the Nobel Prize in Physics in 1935 for his discovery of the neutron."
                },
                {
                    "id": "ch1_m06_q08",
                    "question": "What radioactive element did Chadwick use as the natural source of energetic alpha particles in his apparatus?",
                    "options": [
                        "Polonium",
                        "Radium alone",
                        "Uranium ore",
                        "Thorium"
                    ],
                    "answer": "Polonium",
                    "explanation": "A disc of radioactive Polonium served as the alpha-particle emitter in Chadwick's experiment."
                },
                {
                    "id": "ch1_m06_q09",
                    "question": "What is the stability of a free neutron outside an atomic nucleus?",
                    "options": [
                        "Unstable, undergoing beta decay with a half-life of approx 10 to 15 minutes (n → p + e⁻ + ν̅)",
                        "Permanently stable for billions of years",
                        "Decays in 1 microsecond",
                        "Splits into two alpha particles"
                    ],
                    "answer": "Unstable, undergoing beta decay with a half-life of approx 10 to 15 minutes (n → p + e⁻ + ν̅)",
                    "explanation": "An isolated free neutron is unstable and undergoes radioactive beta decay with a half-life of ~10.2 minutes (approx 880 seconds)."
                },
                {
                    "id": "ch1_m06_q10",
                    "question": "Why do neutrons possess extraordinary penetrating power through dense matter compared to protons or alpha particles?",
                    "options": [
                        "Because they carry zero electric charge and experience no electrostatic Coulomb repulsion from atomic electrons or nuclei",
                        "Because they travel faster than light",
                        "Because they are microscopic black holes",
                        "Because their mass is zero"
                    ],
                    "answer": "Because they carry zero electric charge and experience no electrostatic Coulomb repulsion from atomic electrons or nuclei",
                    "explanation": "Lacking charge, neutrons do not experience Coulomb repulsion from positive atomic nuclei or drag from electron clouds."
                }
            ]
        },
        {
            "id": "m07",
            "moduleNumber": 7,
            "title": "Modern Structure of the Atom: Isotopes, Isobars & Isotones",
            "tagline": "Atomic number (Z), mass number (A), nuclear symbols, isotopes, isobars, isotones, isodiaphers, and isoelectronic species.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>The modern model of the atom depicts a minute, extremely dense, positively charged central **nucleus** (composed of **protons and neutrons**, collectively termed **nucleons**) surrounded by a diffuse cloud of **electrons** in designated orbitals.</p><p>The identity and chemical nature of an element is determined exclusively by its **Atomic Number ($Z$)**, which equals the total number of protons in its nucleus. In a neutral atom, $Z$ also equals the number of orbiting electrons.</p><p>The **Mass Number ($A$)** is the total count of nucleons (protons + neutrons): $A = Z + N$, where $N$ is the number of neutrons ($N = A - Z$). An element is officially symbolized as $^A_Z X$.</p><p>Based on nucleon and electron configurations, atoms are classified into distinct nuclear categories:</p><p>• **Isotopes**: Atoms of the same element having the **same atomic number ($Z$)** but **different mass numbers ($A$)** due to differing neutron counts (e.g., Hydrogen isotopes: Protium $^1_1H$, Deuterium $^2_1H$, Tritium $^3_1H$; Carbon isotopes: $^{12}_6C, ^{13}_6C, ^{14}_6C$). Isotopes share identical chemical properties but differ in physical properties.</p><p>• **Isobars**: Atoms of different elements having the **same mass number ($A$)** but **different atomic numbers ($Z$)** (e.g., $^{40}_{18}Ar$, $^{40}_{19}K$, $^{40}_{20}Ca$). They have different chemical properties.</p><p>• **Isotones**: Atoms of different elements containing the **same number of neutrons ($N = A - Z$)** (e.g., $^{14}_6C$ and $^{16}_8O$, both having $N = 8$).</p><p>• **Isoelectronic species**: Atoms, molecules, or ions containing the **exact same total number of electrons** (e.g., $N^{3-}, O^{2-}, F^-, Ne, Na^+, Mg^{2+}, Al^{3+}$ each possess 10 electrons).</p>",
            "pointsToRemember": [
                "Atomic Number ($Z$) = Number of Protons; Mass Number ($A$) = Protons + Neutrons ($Z + N$).",
                "Isotopes: Same $Z$, different $A$ (e.g., $^{35}_{17}Cl$ and $^{37}_{17}Cl$). Same chemical properties.",
                "Isobars: Same $A$, different $Z$ (e.g., $^{40}_{18}Ar$ and $^{40}_{20}Ca$). Different chemical properties.",
                "Isotones: Same neutron count ($A - Z$) (e.g., $^{31}_{15}P$ and $^{32}_{16}S$, $N = 16$).",
                "Isoelectronic species: Same total electron count (e.g., $Na^+, Ne, F^-$ all have 10 electrons)."
            ],
            "keyNotes": [
                "Tritium ($^3_1H$) is the only radioactive isotope of hydrogen, emitting low-energy beta particles with a half-life of approx 12.3 years."
            ],
            "questions": [
                {
                    "id": "ch1_m07_q01",
                    "question": "What fundamental property uniquely defines the identity and position of an element in the periodic table?",
                    "options": [
                        "Atomic Number (Z, number of protons)",
                        "Mass Number (A)",
                        "Number of neutrons",
                        "Valency in water"
                    ],
                    "answer": "Atomic Number (Z, number of protons)",
                    "explanation": "The atomic number (Z), representing the nuclear proton count, uniquely identifies the chemical element."
                },
                {
                    "id": "ch1_m07_q02",
                    "question": "Atoms of the same element having identical atomic number (Z) but differing mass numbers (A) are termed:",
                    "options": [
                        "Isotopes",
                        "Isobars",
                        "Isotones",
                        "Isomers"
                    ],
                    "answer": "Isotopes",
                    "explanation": "Isotopes have the same number of protons (same Z) but different numbers of neutrons, resulting in different mass numbers."
                },
                {
                    "id": "ch1_m07_q03",
                    "question": "Which among the following pairs represents classic Isobars?",
                    "options": [
                        "⁴⁰₁₈Ar and ⁴⁰₂₀Ca",
                        "¹²₆C and ¹⁴₆C",
                        "¹⁴₆C and ¹⁶₈O",
                        "¹H and ²H"
                    ],
                    "answer": "⁴⁰₁₈Ar and ⁴⁰₂₀Ca",
                    "explanation": "Argon-40 and Calcium-40 share the identical mass number A = 40, despite different atomic numbers (Z = 18 and 20)."
                },
                {
                    "id": "ch1_m07_q04",
                    "question": "What are atoms of different chemical elements that contain the same number of neutrons (A - Z) called?",
                    "options": [
                        "Isotones",
                        "Isotopes",
                        "Isobars",
                        "Isomorphs"
                    ],
                    "answer": "Isotones",
                    "explanation": "Isotones are nuclides with identical neutron counts (N = A - Z), such as ¹⁴₆C (8 neutrons) and ¹⁶₈O (8 neutrons)."
                },
                {
                    "id": "ch1_m07_q05",
                    "question": "Which isotope of hydrogen is radioactive, decaying via beta emission?",
                    "options": [
                        "Tritium (³₁H)",
                        "Protium (¹₁H)",
                        "Deuterium (²₁H)",
                        "Orthohydrogen"
                    ],
                    "answer": "Tritium (³₁H)",
                    "explanation": "Tritium (³₁H, containing 1 proton and 2 neutrons) is radioactive, with a half-life of 12.32 years."
                },
                {
                    "id": "ch1_m07_q06",
                    "question": "How many neutrons are present in the nucleus of an atom of Uranium-238 (²³⁸₉₂U)?",
                    "options": [
                        "146 neutrons",
                        "92 neutrons",
                        "238 neutrons",
                        "330 neutrons"
                    ],
                    "answer": "146 neutrons",
                    "explanation": "Number of neutrons N = A - Z = 238 - 92 = 146 neutrons."
                },
                {
                    "id": "ch1_m07_q07",
                    "question": "Which group of ions/atoms constitutes an isoelectronic series with 10 electrons?",
                    "options": [
                        "N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺",
                        "H⁺, He, Li⁺",
                        "Cl⁻, Ar, K⁺, Ca²⁺",
                        "Fe²⁺ and Fe³⁺"
                    ],
                    "answer": "N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺",
                    "explanation": "N³⁻ (7+3=10), O²⁻ (8+2=10), F⁻ (9+1=10), Ne (10), Na⁺ (11-1=10), Mg²⁺ (12-2=10) all have exactly 10 electrons."
                },
                {
                    "id": "ch1_m07_q08",
                    "question": "Why do isotopes of an element exhibit virtually identical chemical behavior?",
                    "options": [
                        "Because they possess the identical number and arrangement of valence electrons",
                        "Because they have the same number of neutrons",
                        "Because their nuclear masses are identical",
                        "Because they have no charge"
                    ],
                    "answer": "Because they possess the identical number and arrangement of valence electrons",
                    "explanation": "Chemical reactivity is governed by electronic configuration (valence electrons), which is identical for all isotopes of an element."
                },
                {
                    "id": "ch1_m07_q09",
                    "question": "Heavy Water (D₂O), widely utilized as a neutron moderator in nuclear power reactors, contains which isotope of hydrogen?",
                    "options": [
                        "Deuterium (²₁H)",
                        "Protium (¹₁H)",
                        "Tritium (³₁H)",
                        "Hydride ion"
                    ],
                    "answer": "Deuterium (²₁H)",
                    "explanation": "Heavy water is deuterium oxide (D₂O), containing the stable heavy isotope deuterium (²₁H)."
                },
                {
                    "id": "ch1_m07_q10",
                    "question": "What are nuclides having the same difference between neutrons and protons (N - Z) known as?",
                    "options": [
                        "Isodiaphers",
                        "Isotones",
                        "Isobars",
                        "Isotopes"
                    ],
                    "answer": "Isodiaphers",
                    "explanation": "Isodiaphers are nuclides that have the same isotopic excess (N - Z), such as ²³⁸₉₂U (N-Z = 54) and ²³⁴₉₀Th (N-Z = 54)."
                }
            ]
        },
        {
            "id": "m08",
            "moduleNumber": 8,
            "title": "Thomson's Plum Pudding Model & Its Historical Significance",
            "tagline": "J.J. Thomson's 1898 atomic model, positive spherical matrix, embedded electrons, electrostatic stability, and failure.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>Following his discovery of the electron in 1897, **Sir J.J. Thomson** proposed the first comprehensive physical model of the atom in **1898**, popularly celebrated as the **Plum Pudding Model** (or Watermelon Model / Raisin Cake Model).</p><p>Thomson visualized the atom as a uniform, spherical cloud of positive electricity of radius approximately **$10^{-10}$ meters (0.1 nanometer)**, within which individual negatively charged electrons were embedded at regular intervals, analogous to plums (raisins) embedded in an English Christmas pudding or seeds distributed within a watermelon pulp.</p><p>The total negative charge of the embedded electrons was postulated to be exactly equal in magnitude to the positive charge of the surrounding spherical matrix, ensuring that the atom as a whole is **electrically neutral** and held together in electrostatic equilibrium.</p><p>Thomson's model represented an important intellectual advance: it was the first atomic model to incorporate subatomic electrons and successfully explained electrical neutrality, thermionic emission, and photoelectric ionization.</p><p>However, the Plum Pudding Model had fatal limitations: (1) It was a completely static model that could not explain atomic line emission spectra; and (2) It could not account for the large-angle deflections observed in Ernest Rutherford's alpha particle scattering experiment, leading to its complete abandonment.</p>",
            "pointsToRemember": [
                "Proposed by J.J. Thomson in 1898; first physical model incorporating subatomic electrons.",
                "Visualized atom as a uniform positively charged sphere ($r \\approx 10^{-10}$ m) with embedded electrons.",
                "Nicknamed the 'Plum Pudding Model', 'Watermelon Model', or 'Raisin Cake Model'.",
                "Explained electrical neutrality, but failed to explain atomic emission spectra and alpha particle scattering."
            ],
            "keyNotes": [
                "Thomson's model assumed positive charge was spread uniformly throughout the entire volume of the atom, which Rutherford proved was concentrated in an ultra-dense nucleus."
            ],
            "questions": [
                {
                    "id": "ch1_m08_q01",
                    "question": "In which year did J.J. Thomson propose the famous 'Plum Pudding' atomic model?",
                    "options": [
                        "1898",
                        "1808",
                        "1911",
                        "1926"
                    ],
                    "answer": "1898",
                    "explanation": "J.J. Thomson formulated his Plum Pudding atomic model in 1898, shortly after discovering the electron."
                },
                {
                    "id": "ch1_m08_q02",
                    "question": "In Thomson's Plum Pudding model, what was visualized as being analogous to the 'seeds' in a watermelon?",
                    "options": [
                        "Electrons",
                        "Protons",
                        "Neutrons",
                        "Alpha particles"
                    ],
                    "answer": "Electrons",
                    "explanation": "Electrons were visualized as discrete particles embedded within a diffuse positive sphere, like seeds in a watermelon."
                },
                {
                    "id": "ch1_m08_q03",
                    "question": "What was the approximate atomic radius assumed in Thomson's atomic sphere?",
                    "options": [
                        "10⁻¹⁰ meters (1 Angstrom)",
                        "10⁻⁶ meters",
                        "10⁻¹⁵ meters",
                        "1 meter"
                    ],
                    "answer": "10⁻¹⁰ meters (1 Angstrom)",
                    "explanation": "Thomson assumed a spherical atom of radius ~10⁻¹⁰ m (0.1 nm or 1 Å), which correctly matches atomic dimensions."
                },
                {
                    "id": "ch1_m08_q04",
                    "question": "How did Thomson's model account for the overall electrical neutrality of an atom?",
                    "options": [
                        "The total negative charge of embedded electrons exactly equals the total positive charge of the spherical matrix",
                        "Atoms have no electric charge inside them",
                        "Electrons neutralize protons by destroying them",
                        "Atoms absorb negative ions from the air"
                    ],
                    "answer": "The total negative charge of embedded electrons exactly equals the total positive charge of the spherical matrix",
                    "explanation": "Electrostatic balance between the uniform positive sphere and the embedded negative electrons produced net neutrality."
                },
                {
                    "id": "ch1_m08_q05",
                    "question": "Which landmark experiment conclusively disproved J.J. Thomson's Plum Pudding atomic model?",
                    "options": [
                        "Rutherford's Alpha Particle Scattering Experiment (1911)",
                        "Millikan's Oil Drop Experiment",
                        "Davisson-Germer Experiment",
                        "Young's Double Slit Experiment"
                    ],
                    "answer": "Rutherford's Alpha Particle Scattering Experiment (1911)",
                    "explanation": "Rutherford's alpha scattering demonstrated that positive charge is concentrated in a tiny nucleus, disproving Thomson's uniform sphere."
                },
                {
                    "id": "ch1_m08_q06",
                    "question": "Why could Thomson's model not explain the emission of sharp, discrete spectral lines by excited hydrogen gas?",
                    "options": [
                        "It was a static electrostatic model without quantized electron energy levels",
                        "It assumed electrons were infinitely heavy",
                        "It was formulated before electricity was known",
                        "It predicted all atoms are radioactive"
                    ],
                    "answer": "It was a static electrostatic model without quantized electron energy levels",
                    "explanation": "Because electrons were static within the positive sphere, the model had no mechanism for quantized photon emission."
                },
                {
                    "id": "ch1_m08_q07",
                    "question": "What popular vernacular name in India is commonly applied to Thomson's atomic model?",
                    "options": [
                        "Watermelon Model (Tarbooj Model)",
                        "Laddu Model",
                        "Gulab Jamun Model",
                        "Roti Model"
                    ],
                    "answer": "Watermelon Model (Tarbooj Model)",
                    "explanation": "In Indian textbooks, it is universally known as the Watermelon Model, comparing electrons to black seeds in red pulp."
                },
                {
                    "id": "ch1_m08_q08",
                    "question": "According to Thomson, how did electrons behave inside the positive sphere when thermally excited?",
                    "options": [
                        "They vibrated around their equilibrium positions, emitting electromagnetic radiation",
                        "They flew into outer space immediately",
                        "They transformed into protons",
                        "They stopped moving completely"
                    ],
                    "answer": "They vibrated around their equilibrium positions, emitting electromagnetic radiation",
                    "explanation": "Thomson hypothesized that electrons oscillate around equilibrium points, attempting to explain light emission classically."
                },
                {
                    "id": "ch1_m08_q09",
                    "question": "What major physical property of the atom did Thomson's model successfully explain for the first time?",
                    "options": [
                        "Atomic electrical neutrality and the presence of subatomic electrons",
                        "The existence of isotopes",
                        "Nuclear fission",
                        "Quantum spin"
                    ],
                    "answer": "Atomic electrical neutrality and the presence of subatomic electrons",
                    "explanation": "It was the first model to provide a physical framework for atomic neutrality and subatomic electron incorporation."
                },
                {
                    "id": "ch1_m08_q10",
                    "question": "What fundamental flaw regarding the distribution of positive charge caused the collapse of Thomson's model?",
                    "options": [
                        "Assuming positive charge was spread diffusely across the entire atom rather than concentrated in a dense core",
                        "Assuming positive charge was zero",
                        "Assuming electrons orbited at the speed of light",
                        "Assuming atoms had square geometry"
                    ],
                    "answer": "Assuming positive charge was spread diffusely across the entire atom rather than concentrated in a dense core",
                    "explanation": "Thomson incorrectly assumed positive charge occupied the whole atomic volume; Rutherford proved it occupies a tiny fraction (<10⁻¹⁵ m)."
                }
            ]
        },
        {
            "id": "m09",
            "moduleNumber": 9,
            "title": "Rutherford's Alpha Particle Scattering Experiment (1911)",
            "tagline": "Geiger-Marsden gold foil experiment, experimental setup, observations, large-angle deflections, and mathematical deduction.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>In 1911, New Zealand-born physicist **Ernest Rutherford**—along with his colleagues **Hans Geiger** and **Ernest Marsden** at the University of Manchester—performed the epoch-making **Alpha Particle Scattering Experiment** (the Gold Foil Experiment) that revolutionized our understanding of atomic architecture.</p><p>The experimental setup comprised: (1) A radioactive source of energetic alpha particles (doubly ionized helium nuclei, $^4_2He^{2+}$, emitted by bismuth/radium) collimated by lead blocks into a narrow beam; (2) An extremely thin sheet of **Gold Foil** of thickness approximately **$100 \\text{ nm}$ ($10^{-7}$ m or ~1,000 atoms thick)**; and (3) A circular rotating fluorescent screen coated with **Zinc Sulfide (ZnS)** viewed through a movable microscope to detect tiny flashes of light (scintillations).</p><p>If Thomson's plum pudding model had been correct, the positive charge was so diffusely spread that the massive, high-speed alpha particles would experience minimal deflection and pass straight through with deflections rarely exceeding a fraction of a degree.</p><p>However, the experimental observations were astounding:</p><p>1. **Most alpha particles (~99%)** passed straight through the gold foil with **zero deflection**.</p><p>2. **A small fraction (~1 in 8,000)** suffered deflection through **moderate to large angles ($>90^\\circ$)**.</p><p>3. **An extraordinarily tiny fraction (~1 in 20,000)** was deflected by nearly **$180^\\circ$**, rebounding back along its original trajectory.</p><p>Rutherford famously remarked: *'It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.'*</p>",
            "pointsToRemember": [
                "Conducted in 1911 by Ernest Rutherford, Hans Geiger, and Ernest Marsden.",
                "Target: Thin gold foil (~100 nm thick); Probe: High-energy alpha particles ($^4_2He^{2+}$); Detector: ZnS fluorescent screen.",
                "Observation 1: >99% alpha particles passed straight undeflected $\\rightarrow$ Atom is mostly empty space.",
                "Observation 2: Small fraction deflected through large angles ($>90^\\circ$) $\\rightarrow$ Positive charge is concentrated in a tiny dense core.",
                "Observation 3: ~1 in 20,000 rebounded at $180^\\circ$ $\\rightarrow$ Entire mass and positive charge reside in the nucleus."
            ],
            "keyNotes": [
                "Gold was specifically chosen because of its supreme malleability, allowing it to be beaten into sheets only a few hundred atoms thick, ensuring single-scattering conditions."
            ],
            "questions": [
                {
                    "id": "ch1_m09_q01",
                    "question": "Who performed the famous gold foil alpha scattering experiment under Ernest Rutherford's direction in 1911?",
                    "options": [
                        "Hans Geiger and Ernest Marsden",
                        "John Dalton and Joseph Proust",
                        "James Chadwick and Niels Bohr",
                        "Max Planck and Albert Einstein"
                    ],
                    "answer": "Hans Geiger and Ernest Marsden",
                    "explanation": "Hans Geiger and undergraduate Ernest Marsden conducted the experimental measurements under Rutherford's guidance."
                },
                {
                    "id": "ch1_m09_q02",
                    "question": "What is the physical nature of the 'alpha particle' (α) used as the projectile in Rutherford's experiment?",
                    "options": [
                        "A doubly ionized Helium nucleus (⁴₂He²⁺)",
                        "A single high-energy electron",
                        "An electromagnetic gamma ray photon",
                        "A neutral neutron"
                    ],
                    "answer": "A doubly ionized Helium nucleus (⁴₂He²⁺)",
                    "explanation": "Alpha particles are fast-moving helium nuclei consisting of 2 protons and 2 neutrons with a +2 elementary charge."
                },
                {
                    "id": "ch1_m09_q03",
                    "question": "Why was Gold (Au) chosen as the metal foil for the alpha scattering experiment?",
                    "options": [
                        "Its exceptional malleability allows hammering into an ultra-thin foil (~100 nm thick)",
                        "Gold is the cheapest metal available",
                        "Gold does not conduct electricity",
                        "Gold has no protons"
                    ],
                    "answer": "Its exceptional malleability allows hammering into an ultra-thin foil (~100 nm thick)",
                    "explanation": "Gold is the most malleable metal known, permitting foils as thin as ~10⁻⁷ m (about 1,000 atoms thick) to ensure single scattering."
                },
                {
                    "id": "ch1_m09_q04",
                    "question": "What was the most common trajectory observed for alpha particles passing through the gold foil?",
                    "options": [
                        "Over 99% passed straight through undeflected",
                        "All particles bounced back 180 degrees",
                        "All particles were absorbed into the foil",
                        "They were deflected at exactly 90 degrees"
                    ],
                    "answer": "Over 99% passed straight through undeflected",
                    "explanation": "The vast majority (>99%) of alpha particles traversed the foil undeflected, demonstrating that the atom is mostly empty space."
                },
                {
                    "id": "ch1_m09_q05",
                    "question": "Approximately what fraction of alpha particles suffered large-angle deflections or bounced back at 180 degrees?",
                    "options": [
                        "About 1 in 20,000",
                        "About 50%",
                        "Every second particle",
                        "Zero particles ever deflected"
                    ],
                    "answer": "About 1 in 20,000",
                    "explanation": "Only about 1 in 20,000 particles rebounded backward (~180°), indicating that the positive central core is extremely small."
                },
                {
                    "id": "ch1_m09_q06",
                    "question": "What detector was used in the experiment to observe the scattered alpha particles?",
                    "options": [
                        "A zinc sulfide (ZnS) coated screen viewed through a microscope to count scintillations",
                        "A photographic film developed after a month",
                        "A Geiger-Muller tube directly connected to a computer",
                        "A thermometer"
                    ],
                    "answer": "A zinc sulfide (ZnS) coated screen viewed through a microscope to count scintillations",
                    "explanation": "Alpha particles struck a ZnS screen, producing microscopic flashes of light (scintillations) counted manually."
                },
                {
                    "id": "ch1_m09_q07",
                    "question": "Rutherford compared the rebound of an alpha particle to firing a 15-inch artillery shell at:",
                    "options": [
                        "A piece of tissue paper",
                        "A brick wall",
                        "A steel vault",
                        "A granite mountain"
                    ],
                    "answer": "A piece of tissue paper",
                    "explanation": "Rutherford famously remarked that it was as astonishing as firing a 15-inch shell at tissue paper and having it bounce back."
                },
                {
                    "id": "ch1_m09_q08",
                    "question": "What mathematical relationship governs the number of scattered particles (N) as a function of scattering angle (θ) in Rutherford's formula?",
                    "options": [
                        "N(θ) ∝ 1 / sin⁴(θ/2)",
                        "N(θ) ∝ sin(θ)",
                        "N(θ) ∝ cos²(θ)",
                        "N(θ) = constant"
                    ],
                    "answer": "N(θ) ∝ 1 / sin⁴(θ/2)",
                    "explanation": "Rutherford's scattering formula shows that the number of scattered particles is inversely proportional to sin⁴(θ/2)."
                },
                {
                    "id": "ch1_m09_q09",
                    "question": "What fundamental force was responsible for deflecting the alpha particles away from the gold nuclei?",
                    "options": [
                        "Electrostatic (Coulombic) repulsive force between like positive charges",
                        "Gravitational attraction",
                        "Strong nuclear force",
                        "Magnetic dipole attraction"
                    ],
                    "answer": "Electrostatic (Coulombic) repulsive force between like positive charges",
                    "explanation": "The positive alpha particle (+2e) and the dense positive gold nucleus (+79e) repel each other via Coulomb's electrostatic law."
                },
                {
                    "id": "ch1_m09_q10",
                    "question": "What is the distance of closest approach (r₀) in head-on alpha scattering a direct measure of?",
                    "options": [
                        "The upper limit of the physical size of the atomic nucleus",
                        "The speed of light",
                        "The mass of the electron",
                        "The room temperature"
                    ],
                    "answer": "The upper limit of the physical size of the atomic nucleus",
                    "explanation": "At the distance of closest approach, alpha kinetic energy converts entirely to electrostatic potential energy, estimating nuclear size."
                }
            ]
        },
        {
            "id": "m10",
            "moduleNumber": 10,
            "title": "Rutherford's Planetary Nuclear Model & Its Limitations",
            "tagline": "Postulates of the nuclear atom, radius of nucleus vs atom, Maxwell's electrodynamic collapse, and spectral failure.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>From the alpha scattering observations, Ernest Rutherford formulated the **Nuclear Model of the Atom** (1911), earning him the title 'Father of Nuclear Physics'.</p><p>Rutherford's core postulates established:</p><p>1. **The Nucleus**: The entire positive charge and almost the entire mass of the atom are concentrated in an extraordinarily small, dense central region called the **nucleus**.</p><p>2. **Empty Space**: The radius of an atom is approximately **$10^{-10}$ m ($1 \\text{ Å}$)**, whereas the radius of the nucleus is approximately **$10^{-15}$ m to $10^{-14}$ m ($1 \\text{ to } 10 \\text{ Fermi/femtometer}$)**. The nuclear volume is only $10^{-15}$th of the total atomic volume, making the atom overwhelmingly empty space.</p><p>3. **Extranuclear Electrons**: Negatively charged electrons revolve around the nucleus at high speeds in circular orbits, analogous to planets revolving around the Sun (hence the **Planetary Model**). The electrostatic attraction between the positive nucleus and negative electrons provides the required centripetal force ($F_c = mv^2/r = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Ze^2}{r^2}$).</p><p>**Major Limitations of Rutherford's Model**:</p><p>1. **Inability to Explain Atomic Stability**: Under James Clerk Maxwell's classical electromagnetic theory, an accelerating charged particle (such as an electron in circular orbit, experiencing continuous centripetal acceleration $v^2/r$) must continuously radiate electromagnetic energy. Losing energy, the electron's orbit must spiral inward until it collapses into the nucleus in approximately **$10^{-8}$ seconds**. Thus, Rutherford's atom is fundamentally unstable, contradicting the observable permanence of matter.</p><p>2. **Inability to Explain Atomic Spectra**: If an electron spirals inward continuously radiating energy, it should emit a continuous spectrum of light. In reality, atoms emit sharp, discrete line spectra.</p>",
            "pointsToRemember": [
                "Rutherford established the central nucleus ($r \\approx 10^{-15}$ m) containing all positive charge and mass.",
                "Atom size: ~$10^{-10}$ m; Nucleus size: ~$10^{-15}$ m (atom is $100,000$ times larger than its nucleus).",
                "Planetary model: Electrons orbit nucleus like planets orbit the Sun; centripetal force provided by Coulomb attraction.",
                "Classical failure: Maxwell's electrodynamics dictates orbiting electrons must radiate energy and spiral into the nucleus within $10^{-8}$ s.",
                "Could not explain the discrete line emission spectra of elements."
            ],
            "keyNotes": [
                "If an atom were scaled up to the size of a giant sports stadium, the nucleus would be no larger than a marble placed in the center, illustrating the immense emptiness of atomic structure."
            ],
            "questions": [
                {
                    "id": "ch1_m10_q01",
                    "question": "What is the approximate diameter of an atomic nucleus compared to the overall diameter of an atom?",
                    "options": [
                        "Nucleus is approx 10⁻¹⁵ m, while atom is approx 10⁻¹⁰ m (atom is ~100,000 times larger)",
                        "Nucleus and atom have identical size",
                        "Nucleus is larger than the atom",
                        "Nucleus is 10⁻³ meters"
                    ],
                    "answer": "Nucleus is approx 10⁻¹⁵ m, while atom is approx 10⁻¹⁰ m (atom is ~100,000 times larger)",
                    "explanation": "The atom (10⁻¹⁰ m) is roughly 100,000 times larger than the nucleus (10⁻¹⁵ m), meaning atomic volume is 10¹⁵ times nuclear volume."
                },
                {
                    "id": "ch1_m10_q02",
                    "question": "What physical unit of length, equal to 10⁻¹⁵ meters, is commonly used to express nuclear dimensions?",
                    "options": [
                        "Fermi (Femtometer)",
                        "Angstrom",
                        "Nanometer",
                        "Micron"
                    ],
                    "answer": "Fermi (Femtometer)",
                    "explanation": "1 Fermi (or femtometer, fm) equals 10⁻¹⁵ meters, named in honor of nuclear pioneer Enrico Fermi."
                },
                {
                    "id": "ch1_m10_q03",
                    "question": "In Rutherford's planetary model, what provides the centripetal force required to keep revolving electrons in orbit?",
                    "options": [
                        "Electrostatic attraction between the positive nucleus and negative electrons",
                        "Gravitational attraction between protons and electrons",
                        "Magnetic repulsion",
                        "Nuclear strong force"
                    ],
                    "answer": "Electrostatic attraction between the positive nucleus and negative electrons",
                    "explanation": "Coulombic electrostatic attraction between the positive nucleus (+Ze) and electron (-e) provides the centripetal force (mv²/r)."
                },
                {
                    "id": "ch1_m10_q04",
                    "question": "According to James Clerk Maxwell's classical electromagnetic theory, why was Rutherford's planetary atom unstable?",
                    "options": [
                        "An accelerating revolving charge must continuously radiate energy and spiral into the nucleus in ~10⁻⁸ seconds",
                        "Electrons would become too heavy to move",
                        "Nuclei would explode due to thermal heat",
                        "Gravity would tear the atom apart"
                    ],
                    "answer": "An accelerating revolving charge must continuously radiate energy and spiral into the nucleus in ~10⁻⁸ seconds",
                    "explanation": "Classical electrodynamics dictates that accelerating charges emit radiation; a spiraling electron would hit the nucleus in ~10⁻⁸ s."
                },
                {
                    "id": "ch1_m10_q05",
                    "question": "What type of emission spectrum did classical physics predict for a spiraling Rutherford electron?",
                    "options": [
                        "A continuous spectrum across all wavelengths",
                        "A discrete line spectrum",
                        "Zero radiation",
                        "Only radio waves"
                    ],
                    "answer": "A continuous spectrum across all wavelengths",
                    "explanation": "Continuously changing orbital radius and frequency would emit a continuous spectrum, whereas real atoms emit sharp line spectra."
                },
                {
                    "id": "ch1_m10_q06",
                    "question": "What famous analogy did Rutherford use to describe electrons revolving around the central nucleus?",
                    "options": [
                        "Planets revolving around the Sun in the solar system",
                        "Ships sailing on an ocean",
                        "Bees buzzing around a hive",
                        "Clouds surrounding a mountain"
                    ],
                    "answer": "Planets revolving around the Sun in the solar system",
                    "explanation": "Rutherford likened his atom to a miniature solar system, with the nucleus as the Sun and electrons as orbiting planets."
                },
                {
                    "id": "ch1_m10_q07",
                    "question": "Who is universally acclaimed in science history as the 'Father of Nuclear Physics'?",
                    "options": [
                        "Ernest Rutherford",
                        "J.J. Thomson",
                        "Niels Bohr",
                        "Albert Einstein"
                    ],
                    "answer": "Ernest Rutherford",
                    "explanation": "Ernest Rutherford is celebrated as the Father of Nuclear Physics for discovering the nucleus and alpha/beta radiation."
                },
                {
                    "id": "ch1_m10_q08",
                    "question": "What mathematical law relates the nuclear radius (R) to its mass number (A)?",
                    "options": [
                        "R = R₀ · A^(1/3)  (where R₀ ≈ 1.2 to 1.4 fm)",
                        "R = R₀ · A²",
                        "R = R₀ / A",
                        "R = R₀ · A"
                    ],
                    "answer": "R = R₀ · A^(1/3)  (where R₀ ≈ 1.2 to 1.4 fm)",
                    "explanation": "The empirical formula for nuclear radius is R = R₀ · A^(1/3), showing that nuclear density is constant across all elements."
                },
                {
                    "id": "ch1_m10_q09",
                    "question": "What is the approximate order of magnitude of the density of an atomic nucleus?",
                    "options": [
                        "~10¹⁷ kg/m³ (immensely dense)",
                        "~1,000 kg/m³ (like water)",
                        "~10³ kg/m³",
                        "~1 kg/m³"
                    ],
                    "answer": "~10¹⁷ kg/m³ (immensely dense)",
                    "explanation": "Nuclear density is unimaginably colossal, approximately 2.3 × 10¹⁷ kg/m³ (one cubic centimeter weighs ~200 million tons)."
                },
                {
                    "id": "ch1_m10_q10",
                    "question": "Which fundamental limitation of Rutherford's model did Niels Bohr successfully resolve in 1913?",
                    "options": [
                        "Both atomic stability and discrete line emission spectra by introducing quantized stationary orbits",
                        "The discovery of the neutron",
                        "The wave nature of sound",
                        "The theory of relativity"
                    ],
                    "answer": "Both atomic stability and discrete line emission spectra by introducing quantized stationary orbits",
                    "explanation": "Bohr solved both dilemmas by postulating non-radiating stationary orbits where angular momentum is quantized."
                }
            ]
        },
        {
            "id": "m11",
            "moduleNumber": 11,
            "title": "Electromagnetic Radiation & Planck's Quantum Theory",
            "tagline": "Wave properties of light ($c = \nu\\lambda$), blackbody radiation, ultraviolet catastrophe, and Planck's quantum equation ($E = h\nu$).",
            "readingTimeMins": 5,
            "theoryHtml": "<p>To resolve the crisis of atomic structure, physics turned to the study of the interaction of matter with **electromagnetic radiation (EMR)**.</p><p>According to James Clerk Maxwell's wave theory (1870), light and EMR travel through space as oscillating, mutually perpendicular electric and magnetic waves with constant velocity $c = 3.0 \\times 10^8 \\text{ m/s}$ in vacuum. A wave is characterized by: (1) **Wavelength** ($\\lambda$); (2) **Frequency** ($\\nu$), where $c = \\nu \\lambda$; and (3) **Wavenumber** ($\\bar{\\nu} = 1/\\lambda$).</p><p>However, classical continuous wave theory completely failed to explain two critical phenomena: (1) **Blackbody Radiation** (the distribution of radiation emitted by an ideal thermal absorber/emitter, which classical Rayleigh-Jeans theory predicted would diverge to infinity at high frequencies—the 'Ultraviolet Catastrophe'); and (2) The **Photoelectric Effect**.</p><p>In 1900, German theoretical physicist **Max Planck** resolved this crisis by proposing **Planck's Quantum Theory**. Planck made the revolutionary postulate that atoms and molecules can emit or absorb energy **only in discrete, indivisible packets** (quanta), and NOT in a continuous stream.</p><p>The energy ($E$) of a single quantum (packet) is directly proportional to the frequency ($\\nu$) of the radiation:</p><p>$$E = h\\nu = \\frac{hc}{\\lambda}$$</p><p>where **$h$ is Planck's Constant**: $h = 6.62607015 \\times 10^{-34} \\text{ J}\\cdot\\text{s} \\quad (\\text{or } 6.626 \\times 10^{-27} \\text{ erg}\\cdot\\text{s})$.</p><p>Total energy emitted or absorbed is quantized in integral multiples of $h\\nu$: $E_{total} = nh\\nu$ (where $n = 1, 2, 3...$). Planck was awarded the **Nobel Prize in Physics in 1918** for originating quantum theory.</p>",
            "pointsToRemember": [
                "Electromagnetic waves travel at $c = 3 \\times 10^8$ m/s; wave equation: $c = \\nu\\lambda$ and $\\bar{\\nu} = 1/\\lambda$.",
                "Max Planck formulated Quantum Theory in 1900 to explain blackbody radiation curves.",
                "Energy is emitted or absorbed in discrete packets called 'quanta': $E = h\\nu = \\frac{hc}{\\lambda}$.",
                "Planck's constant: $h = 6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$. Planck won the 1918 Nobel Prize."
            ],
            "keyNotes": [
                "An ideal blackbody is a perfect absorber and perfect emitter of all wavelengths of radiation. The peak emission wavelength ($\\lambda_{max}$) shifts to shorter wavelengths as temperature rises (Wien's Displacement Law: $\\lambda_{max} T = b$)."
            ],
            "questions": [
                {
                    "id": "ch1_m11_q01",
                    "question": "Who proposed the Quantum Theory of radiation in 1900, postulating that energy is emitted in discrete packets called quanta?",
                    "options": [
                        "Max Planck",
                        "Albert Einstein",
                        "Niels Bohr",
                        "Louis de Broglie"
                    ],
                    "answer": "Max Planck",
                    "explanation": "German theoretical physicist Max Planck revolutionized physics in 1900 by postulating quantized energy packets."
                },
                {
                    "id": "ch1_m11_q02",
                    "question": "What is the precise numerical value of Planck's Constant (h) in SI units?",
                    "options": [
                        "6.626 × 10⁻³⁴ J·s",
                        "3.00 × 10⁸ m/s",
                        "1.602 × 10⁻¹⁹ C",
                        "9.109 × 10⁻³¹ kg"
                    ],
                    "answer": "6.626 × 10⁻³⁴ J·s",
                    "explanation": "Planck's constant is defined exactly as 6.62607015 × 10⁻³⁴ Joule-seconds (J·s)."
                },
                {
                    "id": "ch1_m11_q03",
                    "question": "What is the mathematical equation relating the energy of a quantum (E) to its frequency (ν)?",
                    "options": [
                        "E = hν",
                        "E = mc²",
                        "E = 1/2 mv²",
                        "E = h / ν"
                    ],
                    "answer": "E = hν",
                    "explanation": "Planck's equation states that quantum energy is directly proportional to frequency: E = hν = hc/λ."
                },
                {
                    "id": "ch1_m11_q04",
                    "question": "What classical physics failure—predicting infinite energy emission at short wavelengths from a blackbody—was resolved by Planck?",
                    "options": [
                        "The Ultraviolet Catastrophe",
                        "The Greenhouse Effect",
                        "The Doppler Effect",
                        "The Compton Shift"
                    ],
                    "answer": "The Ultraviolet Catastrophe",
                    "explanation": "The Rayleigh-Jeans law predicted infinite radiation at UV frequencies (Ultraviolet Catastrophe), resolved by Planck's quantization."
                },
                {
                    "id": "ch1_m11_q05",
                    "question": "What is the unit of 'Wavenumber' (ν̅), defined as the number of wavelengths per unit length?",
                    "options": [
                        "m⁻¹ or cm⁻¹",
                        "Seconds (s)",
                        "Hertz (Hz)",
                        "Joules (J)"
                    ],
                    "answer": "m⁻¹ or cm⁻¹",
                    "explanation": "Wavenumber (ν̅ = 1/λ) represents spatial frequency, measured in reciprocal meters (m⁻¹) or reciprocal centimeters (cm⁻¹)."
                },
                {
                    "id": "ch1_m11_q06",
                    "question": "What term is specifically assigned to a quantum of electromagnetic light radiation?",
                    "options": [
                        "Photon",
                        "Phonon",
                        "Gluon",
                        "Graviton"
                    ],
                    "answer": "Photon",
                    "explanation": "A quantum of light is called a photon, carrying localized energy E = hν and momentum p = h/λ."
                },
                {
                    "id": "ch1_m11_q07",
                    "question": "In the electromagnetic spectrum, which radiation has the highest frequency and shortest wavelength?",
                    "options": [
                        "Gamma rays",
                        "Radio waves",
                        "Visible light",
                        "Infrared rays"
                    ],
                    "answer": "Gamma rays",
                    "explanation": "Gamma rays possess the shortest wavelengths (<0.01 nm) and highest frequencies/energies in the electromagnetic spectrum."
                },
                {
                    "id": "ch1_m11_q08",
                    "question": "According to Wien's Displacement Law (λ_max · T = constant), what happens to the color of a heated blackbody iron rod as temperature rises?",
                    "options": [
                        "Shifts from dull red to bright orange, yellow, and finally white/blue (shorter wavelengths)",
                        "Shifts from violet to red",
                        "Stays permanently red",
                        "Turns completely black"
                    ],
                    "answer": "Shifts from dull red to bright orange, yellow, and finally white/blue (shorter wavelengths)",
                    "explanation": "As temperature increases, peak emission shifts to shorter, higher-energy wavelengths (from red to yellow to white/blue)."
                },
                {
                    "id": "ch1_m11_q09",
                    "question": "If radiation A has twice the frequency of radiation B (ν_A = 2ν_B), what is the ratio of energy of photon A to photon B?",
                    "options": [
                        "2 : 1",
                        "1 : 2",
                        "4 : 1",
                        "1 : 1"
                    ],
                    "answer": "2 : 1",
                    "explanation": "Since E = hν, energy is directly proportional to frequency: E_A / E_B = ν_A / ν_B = 2/1."
                },
                {
                    "id": "ch1_m11_q10",
                    "question": "In what year was Max Planck awarded the Nobel Prize in Physics for his discovery of energy quanta?",
                    "options": [
                        "1918",
                        "1905",
                        "1921",
                        "1933"
                    ],
                    "answer": "1918",
                    "explanation": "Max Planck was awarded the 1918 Nobel Prize in Physics in recognition of the services he rendered to the advancement of physics by his discovery of energy quanta."
                }
            ]
        },
        {
            "id": "m12",
            "moduleNumber": 12,
            "title": "Photoelectric Effect & Einstein's Photon Theory (1905)",
            "tagline": "Heinrich Hertz's discovery, Philipp Lenard's observations, Einstein's photoelectric equation, work function, and threshold frequency.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>The **Photoelectric Effect** was first observed by Heinrich Hertz in 1887 and studied systematically by Wilhelm Hallwachs and Philipp Lenard: when clean metal surfaces (especially alkali metals like potassium, cesium, rubidium) are illuminated by ultraviolet or visible light, electrons (photoelectrons) are ejected from the surface.</p><p>Classical wave theory was completely incapable of explaining experimental facts:</p><p>1. **Instantaneous Ejection**: Photoelectrons are emitted without any measurable time lag ($< 10^{-9}$ s), whereas wave theory required hours for a wave front to concentrate sufficient energy on an electron.</p><p>2. **Threshold Frequency ($\nu_0$)**: For every metal, there exists a characteristic minimum frequency $\nu_0$ below which NO electrons are emitted, regardless of light intensity.</p><p>3. **Kinetic Energy Independence from Intensity**: The maximum kinetic energy ($K_{max}$) of photoelectrons depends **strictly on the frequency** of incident light, not on intensity.</p><p>4. **Intensity vs Current**: Increasing light intensity increases only the **number** of photoelectrons emitted per second (photocurrent), not their individual energy.</p><p>In 1905, **Albert Einstein** brilliantly resolved this puzzle in his 'Annus Mirabilis' paper by applying Planck's quantum hypothesis to light itself, proposing that light propagates as discrete corpuscular packets of energy called **Photons** ($E = h\nu$).</p><p>When a photon strikes an electron in the metal, it transfers its entire energy in a one-to-one collision. A minimum amount of energy, termed the **Work Function** ($\\Phi_0 = h\nu_0$), is consumed to overcome atomic binding forces; the remainder appears as the maximum kinetic energy of the ejected photoelectron:</p><p>$$h\nu = \\Phi_0 + K_{max} = h\nu_0 + \\frac{1}{2}m_e v_{max}^2 \\implies K_{max} = h(\\nu - \\nu_0)$$</p><p>Einstein was awarded the **Nobel Prize in Physics in 1921** specifically for his explanation of the photoelectric effect.</p>",
            "pointsToRemember": [
                "Photoelectric effect: Ejection of electrons from metal surfaces when struck by light of frequency $\\nu \\ge \\nu_0$.",
                "Albert Einstein explained it in 1905 using the concept of light particles (photons) ($E = h\\nu$).",
                "Einstein's Photoelectric Equation: $K_{max} = h\\nu - \\Phi_0 = h(\\nu - \\nu_0)$.",
                "Work Function ($\\Phi_0 = h\\nu_0$): Minimum energy required to liberate an electron (Cesium has the lowest work function, ~2.14 eV).",
                "Einstein received the 1921 Nobel Prize in Physics for the Law of the Photoelectric Effect."
            ],
            "keyNotes": [
                "Light intensity determines the number of photons striking per second (photocurrent magnitude), while light frequency determines the energy of each individual photon (stopping potential and kinetic energy)."
            ],
            "questions": [
                {
                    "id": "ch1_m12_q01",
                    "question": "For which monumental scientific achievement was Albert Einstein awarded the Nobel Prize in Physics in 1921?",
                    "options": [
                        "His mathematical explanation of the Photoelectric Effect using light quanta (photons)",
                        "The Special Theory of Relativity (E = mc²)",
                        "The General Theory of Relativity",
                        "Unified Field Theory"
                    ],
                    "answer": "His mathematical explanation of the Photoelectric Effect using light quanta (photons)",
                    "explanation": "Einstein received the 1921 Nobel Prize specifically for his discovery of the law of the photoelectric effect."
                },
                {
                    "id": "ch1_m12_q02",
                    "question": "What is the term for the minimum frequency of light required to eject photoelectrons from a given metal surface?",
                    "options": [
                        "Threshold Frequency (ν₀)",
                        "Critical Angle",
                        "Resonant Frequency",
                        "Bohr Frequency"
                    ],
                    "answer": "Threshold Frequency (ν₀)",
                    "explanation": "Threshold frequency (ν₀) is the minimum characteristic frequency below which no photoemission can occur."
                },
                {
                    "id": "ch1_m12_q03",
                    "question": "What is the 'Work Function' (Φ₀) of a metal?",
                    "options": [
                        "The minimum energy required to eject an electron from the metal surface (Φ₀ = hν₀)",
                        "The electrical energy needed to melt the metal",
                        "The energy required to split the metal nucleus",
                        "The heat generated per hour"
                    ],
                    "answer": "The minimum energy required to eject an electron from the metal surface (Φ₀ = hν₀)",
                    "explanation": "Work function (Φ₀ = hν₀) is the minimum threshold energy required to liberate a conduction electron from the metal lattice."
                },
                {
                    "id": "ch1_m12_q04",
                    "question": "Which metal exhibits the lowest work function (~2.14 eV), making it ideal for photoelectric cells?",
                    "options": [
                        "Cesium (Cs)",
                        "Iron (Fe)",
                        "Copper (Cu)",
                        "Platinum (Pt)"
                    ],
                    "answer": "Cesium (Cs)",
                    "explanation": "Alkali metals, especially Cesium (Cs), have the lowest work functions (~2.14 eV), reacting to visible sunlight."
                },
                {
                    "id": "ch1_m12_q05",
                    "question": "What happens to the maximum kinetic energy of emitted photoelectrons if the intensity of incident light is doubled at constant frequency?",
                    "options": [
                        "Kinetic energy remains completely unchanged",
                        "Kinetic energy doubles",
                        "Kinetic energy quadruples",
                        "Kinetic energy drops to zero"
                    ],
                    "answer": "Kinetic energy remains completely unchanged",
                    "explanation": "Light intensity increases the rate of photon arrivals (photocurrent), but does NOT change individual photon energy or electron kinetic energy."
                },
                {
                    "id": "ch1_m12_q06",
                    "question": "What parameter of incident light directly dictates the maximum kinetic energy (and stopping potential) of photoelectrons?",
                    "options": [
                        "Frequency (or wavelength) of incident radiation",
                        "Intensity of incident beam",
                        "Angle of incidence alone",
                        "Surface area of the metal"
                    ],
                    "answer": "Frequency (or wavelength) of incident radiation",
                    "explanation": "Kinetic energy depends linearly on frequency: K_max = h(ν - ν₀). Higher frequency light produces faster electrons."
                },
                {
                    "id": "ch1_m12_q07",
                    "question": "What is the time delay between the arrival of a photon and the ejection of a photoelectron in experimental physics?",
                    "options": [
                        "Virtually instantaneous (< 10⁻⁹ seconds / 1 nanosecond)",
                        "Several hours",
                        "Exactly 1 minute",
                        "10 milliseconds"
                    ],
                    "answer": "Virtually instantaneous (< 10⁻⁹ seconds / 1 nanosecond)",
                    "explanation": "Photoemission is an instantaneous quantum collision occurring within less than 10⁻⁹ seconds of illumination."
                },
                {
                    "id": "ch1_m12_q08",
                    "question": "What is the 'Stopping Potential' (V₀) in a photoelectric experiment?",
                    "options": [
                        "The negative retarding potential applied to the collector plate that reduces the photocurrent to zero (eV₀ = K_max)",
                        "The voltage that destroys the cathode",
                        "The battery voltage that starts the lamp",
                        "The voltage of house wiring"
                    ],
                    "answer": "The negative retarding potential applied to the collector plate that reduces the photocurrent to zero (eV₀ = K_max)",
                    "explanation": "Stopping potential V₀ is the reverse potential needed to stop the fastest photoelectron, satisfying eV₀ = K_max."
                },
                {
                    "id": "ch1_m12_q09",
                    "question": "Which experimental observation provided definitive proof for the particle (corpuscular photon) nature of light?",
                    "options": [
                        "Photoelectric Effect",
                        "Interference of light",
                        "Diffraction of light",
                        "Polarization of light"
                    ],
                    "answer": "Photoelectric Effect",
                    "explanation": "The photoelectric effect (along with the Compton effect) proved light exists as localized corpuscular packets (photons)."
                },
                {
                    "id": "ch1_m12_q10",
                    "question": "If light of frequency ν strikes a metal with work function Φ₀ where hν < Φ₀, what will happen?",
                    "options": [
                        "Zero photoelectrons will be emitted, regardless of how intense or long the light shines",
                        "Electrons will emit after 1 hour",
                        "Metal will explode",
                        "Electrons emit with negative speed"
                    ],
                    "answer": "Zero photoelectrons will be emitted, regardless of how intense or long the light shines",
                    "explanation": "When incident photon energy hν is below the work function Φ₀, no energy accumulation occurs, and zero emission results."
                }
            ]
        },
        {
            "id": "m13",
            "moduleNumber": 13,
            "title": "Bohr's Postulates: Quantized Orbits & Hydrogen Atom Model",
            "tagline": "Niels Bohr's 1913 quantum postulates, quantized angular momentum ($mvr = nh/2\\pi$), stationary states, and orbital radius/energy formulas.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>In 1913, Danish theoretical physicist **Niels Bohr** resolved the crisis of Rutherford's planetary model by synthesizing Planck's quantum theory, Einstein's photon concept, and Rutherford's nuclear atom into **Bohr's Model of the Hydrogen Atom**.</p><p>Bohr formulated three revolutionary postulates:</p><p>1. **Stationary Orbits**: Electrons in an atom revolve around the nucleus only in certain discrete, non-radiating circular orbits called **stationary states** or energy levels. While in these stationary orbits, electrons do **NOT radiate energy**, completely resolving Maxwell's electrodynamic collapse.</p><p>2. **Quantization of Angular Momentum**: An electron can revolve only in those orbits where its orbital angular momentum ($L$) is an integral multiple of $\\frac{h}{2\\pi}$ (or $\\hbar$):</p><p>$$L = m_e v r = n \\frac{h}{2\\pi} \\quad (\\text{where } n = 1, 2, 3... \\text{ is the Principal Quantum Number})$$</p><p>3. **Quantum Jumps & Frequency Condition**: Radiation is emitted or absorbed only when an electron jumps from one stationary orbit to another. If an electron transitions from a higher energy orbit ($E_2$) to a lower energy orbit ($E_1$), a single photon of discrete frequency $\\nu$ is emitted:</p><p>$$\\Delta E = E_2 - E_1 = h\\nu = \\frac{hc}{\\lambda}$$</p><p>By applying classical centripetal dynamics and quantization, Bohr derived quantitative expressions for single-electron species ($H, He^+, Li^{2+}, Be^{3+}$):</p><p>• **Radius of $n$-th orbit**: $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m_e Z e^2} = 0.529 \\frac{n^2}{Z} \\text{ \\AA} \\quad (52.9 \\text{ pm for } n=1, Z=1, \\text{the Bohr Radius } a_0)$</p><p>• **Velocity of electron**: $v_n = 2.18 \\times 10^6 \\frac{Z}{n} \\text{ m/s}$</p><p>• **Total Energy of $n$-th state**: $E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV/atom} = -2.18 \\times 10^{-18} \\frac{Z^2}{n^2} \\text{ J/atom}$</p><p>The negative sign signifies that the electron is electrostatically bound to the nucleus. As $n \\rightarrow \\infty$, $E = 0$ (a free, ionized electron).</p>",
            "pointsToRemember": [
                "Niels Bohr formulated his quantum model of hydrogen in 1913; awarded the 1922 Nobel Prize in Physics.",
                "Postulate 1: Electrons revolve in non-radiating stationary orbits.",
                "Postulate 2: Angular momentum is quantized: $mvr = n\\frac{h}{2\\pi}$ ($n = 1, 2, 3...$).",
                "Postulate 3: Photon emission upon orbital transition: $\\Delta E = E_2 - E_1 = h\\nu$.",
                "Radius of first Bohr orbit of Hydrogen ($a_0$): $0.529 \\text{ \\AA}$ (52.9 pm); Ground state energy: $-13.6 \\text{ eV}$."
            ],
            "keyNotes": [
                "Bohr's formulas apply strictly to single-electron species (hydrogen-like ions) such as $H, He^+, Li^{2+}, Be^{3+}$; they fail for multi-electron atoms."
            ],
            "questions": [
                {
                    "id": "ch1_m13_q01",
                    "question": "What is the condition for the quantization of orbital angular momentum (L) in Bohr's atomic model?",
                    "options": [
                        "mvr = n(h / 2π)",
                        "mvr = nh",
                        "mvr = h / 4π",
                        "mvr = 2π / nh"
                    ],
                    "answer": "mvr = n(h / 2π)",
                    "explanation": "Bohr postulated that electron angular momentum is quantized in units of h/2π: L = mvr = n(h/2π)."
                },
                {
                    "id": "ch1_m13_q02",
                    "question": "What is the numerical radius of the first stationary Bohr orbit (n=1) of a neutral Hydrogen atom (the Bohr radius, a₀)?",
                    "options": [
                        "0.529 Å (52.9 pm)",
                        "1.000 Å",
                        "0.053 Å",
                        "5.29 Å"
                    ],
                    "answer": "0.529 Å (52.9 pm)",
                    "explanation": "The radius of the first orbit of hydrogen is r₁ = 0.529 Å (or 52.9 picometers)."
                },
                {
                    "id": "ch1_m13_q03",
                    "question": "What is the total energy of an electron in the ground state (n=1) of a Hydrogen atom?",
                    "options": [
                        "-13.6 eV",
                        "+13.6 eV",
                        "-3.4 eV",
                        "0 eV"
                    ],
                    "answer": "-13.6 eV",
                    "explanation": "The ground state energy of hydrogen is E₁ = -13.6 eV (or -2.18 × 10⁻¹⁸ J)."
                },
                {
                    "id": "ch1_m13_q04",
                    "question": "What does the negative sign in the electron energy expression E_n = -13.6/n² eV signify physically?",
                    "options": [
                        "The electron is bound to the nucleus by attractive forces and requires work to be liberated",
                        "The electron has negative mass",
                        "The electron is spinning backwards",
                        "The atom is radioactive"
                    ],
                    "answer": "The electron is bound to the nucleus by attractive forces and requires work to be liberated",
                    "explanation": "Negative total energy indicates a bound state; an external energy of +13.6 eV must be supplied to ionize the electron to infinity (E=0)."
                },
                {
                    "id": "ch1_m13_q05",
                    "question": "What is the ionization energy of a neutral Hydrogen atom in its ground state?",
                    "options": [
                        "+13.6 eV",
                        "+3.4 eV",
                        "+1.51 eV",
                        "0 eV"
                    ],
                    "answer": "+13.6 eV",
                    "explanation": "Ionization energy is the energy required to remove the electron from n=1 to n=∞: E_∞ - E₁ = 0 - (-13.6 eV) = +13.6 eV."
                },
                {
                    "id": "ch1_m13_q06",
                    "question": "What is the energy of an electron in the second Bohr orbit (first excited state, n=2) of Hydrogen?",
                    "options": [
                        "-3.4 eV",
                        "-13.6 eV",
                        "-1.51 eV",
                        "-0.85 eV"
                    ],
                    "answer": "-3.4 eV",
                    "explanation": "Using E_n = -13.6 / n² eV: For n=2, E₂ = -13.6 / 4 = -3.4 eV."
                },
                {
                    "id": "ch1_m13_q07",
                    "question": "Which among the following ions is a 'Hydrogen-like species' to which Bohr's equations can be directly applied?",
                    "options": [
                        "He⁺ (Helium ion with 1 electron)",
                        "He atom",
                        "Li⁺ ion",
                        "Na⁺ ion"
                    ],
                    "answer": "He⁺ (Helium ion with 1 electron)",
                    "explanation": "Bohr theory applies only to single-electron species: H, He⁺ (Z=2), Li²⁺ (Z=3), Be³⁺ (Z=4)."
                },
                {
                    "id": "ch1_m13_q08",
                    "question": "How does the radius of Bohr orbits scale with the principal quantum number (n)?",
                    "options": [
                        "Directly proportional to n² (r_n ∝ n²)",
                        "Directly proportional to n",
                        "Inversely proportional to n",
                        "Independent of n"
                    ],
                    "answer": "Directly proportional to n² (r_n ∝ n²)",
                    "explanation": "Orbital radius scales quadratically with principal quantum number: r_n ∝ n²/Z (r₁:r₂:r₃ = 1:4:9)."
                },
                {
                    "id": "ch1_m13_q09",
                    "question": "What is the ground state energy of a single-electron Li²⁺ ion (Z=3)?",
                    "options": [
                        "-122.4 eV",
                        "-13.6 eV",
                        "-40.8 eV",
                        "-27.2 eV"
                    ],
                    "answer": "-122.4 eV",
                    "explanation": "For hydrogen-like ions, E_n = -13.6 · (Z²/n²) eV. For Li²⁺ (Z=3, n=1): E = -13.6 × 3² = -13.6 × 9 = -122.4 eV."
                },
                {
                    "id": "ch1_m13_q10",
                    "question": "In which year was Niels Bohr awarded the Nobel Prize in Physics for his investigation of the structure of atoms?",
                    "options": [
                        "1922",
                        "1913",
                        "1905",
                        "1932"
                    ],
                    "answer": "1922",
                    "explanation": "Niels Bohr was awarded the Nobel Prize in Physics in 1922 for his services in the investigation of the structure of atoms."
                }
            ]
        },
        {
            "id": "m14",
            "moduleNumber": 14,
            "title": "Atomic Hydrogen Emission Spectra: Spectral Series",
            "tagline": "Rydberg formula, transition wavelengths, Lyman (UV), Balmer (Visible), Paschen, Brackett, Pfund, and Humphrey series.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>When high-voltage electric discharge passes through molecular hydrogen gas at low pressure, $H_2$ molecules dissociate into excited hydrogen atoms. The de-excitation of these atoms produces a discrete **line emission spectrum** comprising distinct series of sharp lines.</p><p>In 1890, Swedish physicist **Johannes Rydberg** devised an empirical mathematical formula describing the wavenumbers ($\\bar{\\nu} = 1/\\lambda$) of all hydrogen spectral lines, which Bohr's model derived theoretically from first principles:</p><p>$$\\bar{\\nu} = \\frac{1}{\\lambda} = R_H Z^2 \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$$</p><p>where **$R_H$ is the Rydberg Constant for Hydrogen**: $R_H = 109,677 \\text{ cm}^{-1} \\quad (1.09737 \\times 10^7 \\text{ m}^{-1})$, and $n_2 > n_1$.</p><p>The spectral transitions are classified into five major series depending on the lower energy level ($n_1$):</p><p>1. **Lyman Series** ($n_1 = 1, n_2 = 2, 3, 4...$): Electronic drops to the ground state ($n=1$). Occurs in the **Ultraviolet (UV)** region.</p><p>2. **Balmer Series** ($n_1 = 2, n_2 = 3, 4, 5...$): Transitions terminating at $n=2$. Occurs in the **Visible spectrum** (first identified by Johann Balmer in 1885; $H_\\alpha$ red line at 656 nm, $H_\\beta$ blue-green line at 486 nm, $H_\\gamma$ at 434 nm, $H_\\delta$ at 410 nm).</p><p>3. **Paschen Series** ($n_1 = 3, n_2 = 4, 5, 6...$): Transitions terminating at $n=3$. Occurs in the **Near-Infrared (IR)** region.</p><p>4. **Brackett Series** ($n_1 = 4, n_2 = 5, 6, 7...$): Transitions terminating at $n=4$. Occurs in the **Mid-Infrared** region.</p><p>5. **Pfund Series** ($n_1 = 5, n_2 = 6, 7, 8...$): Transitions terminating at $n=5$. Occurs in the **Far-Infrared** region.</p><p>The limiting line (series limit) of any series corresponds to $n_2 = \\infty$, giving the shortest wavelength and maximum energy line of that series.</p>",
            "pointsToRemember": [
                "Rydberg Formula: $\\bar{\\nu} = \\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$, where $R_H \\approx 109,677 \\text{ cm}^{-1}$.",
                "Lyman Series ($n_1 = 1$): Ultraviolet (UV) region.",
                "Balmer Series ($n_1 = 2$): Visible region (the ONLY series visible to human eyes).",
                "Paschen ($n_1=3$), Brackett ($n_1=4$), Pfund ($n_1=5$): Infrared (IR) region.",
                "Shortest wavelength of any series corresponds to $n_2 = \\infty$ (Series Limit)."
            ],
            "keyNotes": [
                "The Balmer series is the ONLY spectral series of hydrogen whose prominent lines lie within the visible spectrum (400 nm to 700 nm), allowing historical detection by 19th-century astronomers in stellar spectra."
            ],
            "questions": [
                {
                    "id": "ch1_m14_q01",
                    "question": "Which spectral series of the Hydrogen atom falls within the visible region of the electromagnetic spectrum?",
                    "options": [
                        "Balmer Series",
                        "Lyman Series",
                        "Paschen Series",
                        "Pfund Series"
                    ],
                    "answer": "Balmer Series",
                    "explanation": "The Balmer series (transitions ending at n=2) is the only series falling in the visible spectrum."
                },
                {
                    "id": "ch1_m14_q02",
                    "question": "In which electromagnetic region do the spectral lines of the Lyman series of hydrogen occur?",
                    "options": [
                        "Ultraviolet (UV) region",
                        "Visible region",
                        "Infrared region",
                        "X-ray region"
                    ],
                    "answer": "Ultraviolet (UV) region",
                    "explanation": "Transitions ending at the ground state (n₁=1, Lyman series) involve high energy changes located in the ultraviolet region."
                },
                {
                    "id": "ch1_m14_q03",
                    "question": "What is the approximate numerical value of the Rydberg constant for Hydrogen (R_H)?",
                    "options": [
                        "109,677 cm⁻¹ (approx 1.097 × 10⁷ m⁻¹)",
                        "6.626 × 10⁻³⁴ cm⁻¹",
                        "3.00 × 10⁸ cm⁻¹",
                        "1.602 × 10⁻¹⁹ cm⁻¹"
                    ],
                    "answer": "109,677 cm⁻¹ (approx 1.097 × 10⁷ m⁻¹)",
                    "explanation": "The Rydberg constant for hydrogen is R_H = 109,677 cm⁻¹ (or 1.09737 × 10⁷ m⁻¹)."
                },
                {
                    "id": "ch1_m14_q04",
                    "question": "Which spectral series of Hydrogen corresponds to electronic transitions terminating at the energy level n₁ = 3?",
                    "options": [
                        "Paschen Series",
                        "Lyman Series",
                        "Balmer Series",
                        "Brackett Series"
                    ],
                    "answer": "Paschen Series",
                    "explanation": "The Paschen series corresponds to transitions from higher levels (n₂ = 4, 5, 6...) down to n₁ = 3, in the near-infrared."
                },
                {
                    "id": "ch1_m14_q05",
                    "question": "What transition produces the first (longest wavelength) line (H_α line) of the Balmer series in hydrogen?",
                    "options": [
                        "n = 3 to n = 2",
                        "n = 2 to n = 1",
                        "n = 4 to n = 2",
                        "n = ∞ to n = 2"
                    ],
                    "answer": "n = 3 to n = 2",
                    "explanation": "The H_α red line (λ = 656.3 nm) arises from the lowest-energy transition of the Balmer series: from n=3 to n=2."
                },
                {
                    "id": "ch1_m14_q06",
                    "question": "What value of n₂ corresponds to the 'series limit' (shortest wavelength, highest frequency) for any spectral series?",
                    "options": [
                        "n₂ = ∞ (infinity)",
                        "n₂ = n₁ + 1",
                        "n₂ = 10",
                        "n₂ = 0"
                    ],
                    "answer": "n₂ = ∞ (infinity)",
                    "explanation": "The series limit represents an electron captured from rest at infinity (n₂ = ∞), producing maximum photon energy and minimum λ."
                },
                {
                    "id": "ch1_m14_q07",
                    "question": "In which electromagnetic region do the Paschen, Brackett, and Pfund series lie?",
                    "options": [
                        "Infrared (IR) region",
                        "Ultraviolet (UV) region",
                        "Visible light region",
                        "Gamma ray region"
                    ],
                    "answer": "Infrared (IR) region",
                    "explanation": "Paschen (n₁=3), Brackett (n₁=4), and Pfund (n₁=5) lines correspond to lower-energy drops in the infrared spectrum."
                },
                {
                    "id": "ch1_m14_q08",
                    "question": "How many total spectral lines are emitted when an electron in a hydrogen atom de-excites from n = 5 to the ground state (n = 1)?",
                    "options": [
                        "10 lines  [n(n-1)/2 = 5×4/2]",
                        "5 lines",
                        "4 lines",
                        "25 lines"
                    ],
                    "answer": "10 lines  [n(n-1)/2 = 5×4/2]",
                    "explanation": "The total number of possible spectral emission lines is given by N = Δn(Δn + 1)/2 = (5-1)(5)/2 = 4 × 5 / 2 = 10 lines."
                },
                {
                    "id": "ch1_m14_q09",
                    "question": "Which line in a spectral series possesses the minimum frequency and minimum energy?",
                    "options": [
                        "The first line of the series (transition from n₂ = n₁ + 1)",
                        "The series limit (n₂ = ∞)",
                        "The middle line",
                        "All lines have equal energy"
                    ],
                    "answer": "The first line of the series (transition from n₂ = n₁ + 1)",
                    "explanation": "The first line (n₂ = n₁ + 1) represents the smallest energy gap (ΔE = hν), hence the minimum frequency and longest wavelength."
                },
                {
                    "id": "ch1_m14_q10",
                    "question": "Who discovered the far-infrared spectral series of hydrogen corresponding to n₁ = 5?",
                    "options": [
                        "August Herman Pfund",
                        "Theodore Lyman",
                        "Johann Balmer",
                        "Louis Paschen"
                    ],
                    "answer": "August Herman Pfund",
                    "explanation": "American physicist August Herman Pfund discovered the Pfund series (n₁=5) in 1924."
                }
            ]
        },
        {
            "id": "m15",
            "moduleNumber": 15,
            "title": "Limitations of the Bohr Model: Fine Structure, Zeeman & Stark Effects",
            "tagline": "Shortcomings of Bohr's theory: Multi-electron spectra, fine doublet splitting, magnetic Zeeman effect, and electric Stark effect.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>Although Niels Bohr's model was a historic milestone that quantitatively solved the hydrogen atom, it encountered insurmountable obstacles when applied to more complex physical systems.</p><p>**Major Limitations of the Bohr Model**:</p><p>1. **Failure for Multi-Electron Atoms**: Bohr's theory could not calculate energy levels or predict spectral lines for any atom with more than one electron (such as neutral Helium with 2 electrons, Lithium with 3 electrons, etc.). It could not account for inter-electronic electrostatic repulsions.</p><p>2. **Fine Structure of Spectral Lines**: When observed under high-resolution spectroscopes, single spectral lines of hydrogen were discovered to consist of closely spaced multiple lines (doublets and triplets). Bohr's simple circular orbits could not account for this fine structure (later addressed by Arnold Sommerfeld's introduction of elliptical orbits and relativistic mass corrections).</p><p>3. **Zeeman Effect**: When an emitting gaseous light source is placed inside a **magnetic field**, each spectral line splits into several closely spaced component lines. Bohr's model offered no explanation for this magnetic splitting.</p><p>4. **Stark Effect**: Similarly, when an emitting atom is placed inside a strong **external electric field**, its spectral lines split into multiple components. Bohr's theory was silent on this electric perturbation.</p><p>5. **Inability to Explain Chemical Bonding & Geometry**: The model could not explain why atoms combine to form molecules with definite directional geometries (such as the bent shape of $H_2O$ or tetrahedral $CH_4$).</p><p>6. **Violation of Modern Quantum Principles**: Bohr's model treated the electron as a localized classical particle moving in well-defined circular planar trajectories of precise radius and momentum, fundamentally violating the **de Broglie wave-particle duality** and the **Heisenberg Uncertainty Principle**.</p>",
            "pointsToRemember": [
                "Bohr model is strictly valid ONLY for 1-electron species ($H, He^+, Li^{2+}, Be^{3+}$); fails completely for multi-electron atoms.",
                "Could not explain fine structure (closely spaced spectral doublets).",
                "Zeeman Effect: Splitting of spectral lines in a magnetic field (unexplained by Bohr).",
                "Stark Effect: Splitting of spectral lines in an electric field (unexplained by Bohr).",
                "Violated the Heisenberg Uncertainty Principle by defining exact orbits."
            ],
            "keyNotes": [
                "Arnold Sommerfeld modified Bohr's model in 1916 by introducing elliptical orbits with azimuthal quantum numbers, partially explaining fine structure, but the model remained a semi-classical hybrid."
            ],
            "questions": [
                {
                    "id": "ch1_m15_q01",
                    "question": "What is the phenomenon of splitting of spectral lines under the influence of an external magnetic field called?",
                    "options": [
                        "Zeeman Effect",
                        "Stark Effect",
                        "Raman Effect",
                        "Tyndall Effect"
                    ],
                    "answer": "Zeeman Effect",
                    "explanation": "The Zeeman effect is the splitting of atomic spectral lines into multiple components in the presence of a static magnetic field."
                },
                {
                    "id": "ch1_m15_q02",
                    "question": "What is the phenomenon of splitting of spectral lines under the influence of an external electric field called?",
                    "options": [
                        "Stark Effect",
                        "Zeeman Effect",
                        "Photoelectric Effect",
                        "Compton Effect"
                    ],
                    "answer": "Stark Effect",
                    "explanation": "The Stark effect is the splitting and shifting of atomic spectral lines caused by an applied electric field."
                },
                {
                    "id": "ch1_m15_q03",
                    "question": "Why does Bohr's atomic model fail completely for neutral Helium (He) atoms?",
                    "options": [
                        "Helium has two electrons, and Bohr's model cannot account for mutual electron-electron repulsive forces",
                        "Helium is an inert gas without mass",
                        "Helium has no nucleus",
                        "Helium exists only in outer space"
                    ],
                    "answer": "Helium has two electrons, and Bohr's model cannot account for mutual electron-electron repulsive forces",
                    "explanation": "Bohr's model cannot solve the three-body problem of multi-electron atoms involving inter-electronic repulsion."
                },
                {
                    "id": "ch1_m15_q04",
                    "question": "What experimental observation involving high-resolution spectroscopy revealed that hydrogen spectral lines are not single lines?",
                    "options": [
                        "Fine Structure (doublet/triplet splitting)",
                        "Blackbody radiation",
                        "X-ray diffraction",
                        "Alpha scattering"
                    ],
                    "answer": "Fine Structure (doublet/triplet splitting)",
                    "explanation": "High-resolution instruments revealed 'fine structure'—individual lines split into closely spaced multiplets due to spin-orbit coupling."
                },
                {
                    "id": "ch1_m15_q05",
                    "question": "Which fundamental modern quantum principle is directly violated by Bohr's concept of fixed, well-defined circular electron orbits?",
                    "options": [
                        "Heisenberg's Uncertainty Principle",
                        "Law of Conservation of Mass",
                        "Avogadro's Law",
                        "Dalton's Law"
                    ],
                    "answer": "Heisenberg's Uncertainty Principle",
                    "explanation": "Heisenberg's principle proves that an electron cannot possess simultaneously well-defined position (radius) and momentum (orbit)."
                },
                {
                    "id": "ch1_m15_q06",
                    "question": "Who modified Bohr's circular model in 1916 by introducing elliptical orbits to explain fine structure?",
                    "options": [
                        "Arnold Sommerfeld",
                        "Erwin Schrödinger",
                        "Werner Heisenberg",
                        "Wolfgang Pauli"
                    ],
                    "answer": "Arnold Sommerfeld",
                    "explanation": "German physicist Arnold Sommerfeld extended Bohr's theory by introducing elliptical orbits and relativistic electron velocities."
                },
                {
                    "id": "ch1_m15_q07",
                    "question": "Why could Bohr's theory not explain the 3D shapes and bond angles of polyatomic molecules like H₂O and CH₄?",
                    "options": [
                        "It treated electron orbits as flat, two-dimensional planar rings rather than 3D spatial probability clouds",
                        "It assumed electrons have zero mass",
                        "It was invented before water was discovered",
                        "It banned molecular formation"
                    ],
                    "answer": "It treated electron orbits as flat, two-dimensional planar rings rather than 3D spatial probability clouds",
                    "explanation": "Planar 2D Bohr orbits provide no basis for the spatial directional bonding and stereochemistry of molecules."
                },
                {
                    "id": "ch1_m15_q08",
                    "question": "Which Indian physicist won the Nobel Prize in Physics in 1930 for discovering the inelastic scattering of light by molecules?",
                    "options": [
                        "Sir C.V. Raman",
                        "Homi Bhabha",
                        "S.N. Bose",
                        "Meghnad Saha"
                    ],
                    "answer": "Sir C.V. Raman",
                    "explanation": "Sir Chandrasekhara Venkata Raman won the 1930 Nobel Prize in Physics for discovering the Raman Effect."
                },
                {
                    "id": "ch1_m15_q09",
                    "question": "What property of spectral lines—why some lines are intensely bright while others are extremely faint—could Bohr's model NOT explain?",
                    "options": [
                        "Relative intensity of spectral lines",
                        "Wavelength of the lines",
                        "Color of the lines",
                        "Frequency of light"
                    ],
                    "answer": "Relative intensity of spectral lines",
                    "explanation": "Bohr could calculate line frequencies for hydrogen, but had no quantum transition probability mechanics to explain line intensities."
                },
                {
                    "id": "ch1_m15_q10",
                    "question": "The total failure of the semi-classical Bohr-Sommerfeld theory paved the way for which modern paradigm of physics in the 1920s?",
                    "options": [
                        "Quantum Mechanics (Wave Mechanics)",
                        "Aristotelian Mechanics",
                        "Classical Newtonian Mechanics",
                        "Ether Vortex Theory"
                    ],
                    "answer": "Quantum Mechanics (Wave Mechanics)",
                    "explanation": "These failures demonstrated the necessity for a complete quantum mechanical revolution led by de Broglie, Heisenberg, and Schrödinger."
                }
            ]
        },
        {
            "id": "m16",
            "moduleNumber": 16,
            "title": "Dual Nature of Matter: Louis de Broglie Equation",
            "tagline": "Wave-particle duality, de Broglie relation ($λ = h/p$), Davisson-Germer electron diffraction, and microscopic vs macroscopic significance.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>Just as radiant energy (light) exhibits dual wave-particle character—behaving as waves in interference and diffraction, and as particles (photons) in the photoelectric effect—French physicist **Prince Louis de Broglie** proposed in **1924** that **matter must also possess a dual character**.</p><p>De Broglie postulated that any moving material particle (whether an electron, proton, atom, or cricket ball) has an associated wave, termed a **Matter Wave** (or de Broglie wave).</p><p>By synthesizing Planck's energy equation ($E = h\nu$) and Einstein's mass-energy equation ($E = mc^2$), de Broglie derived his monumental relation:</p><p>$$mc^2 = h\nu = h\\frac{c}{\\lambda} \\implies \\lambda = \\frac{h}{mc} \\implies \\lambda = \\frac{h}{mv} = \\frac{h}{p}$$</p><p>where **$\\lambda$ is the de Broglie wavelength**, **$m$ is particle mass**, **$v$ is velocity**, and **$p = mv$ is linear momentum**.</p><p>In terms of kinetic energy ($K = \\frac{p^2}{2m} \\implies p = \\sqrt{2mK}$):</p><p>$$\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}} \\quad (\\text{for an electron accelerated through potential } V: \\lambda = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA})$$</p><p>**Experimental Verification**: In 1927, **Clinton Davisson and Lester Germer** (USA), and independently **George Paget Thomson** (UK, son of J.J. Thomson), proved the wave nature of electrons by demonstrating that an electron beam undergoes **diffraction** through a Nickel crystal lattice, exactly like X-rays. De Broglie was awarded the Nobel Prize in Physics in 1929, and Davisson and G.P. Thomson shared the 1937 Nobel Prize.</p><p>**Macroscopic Inapplicability**: For everyday macroscopic objects (e.g., a 0.1 kg ball moving at 10 m/s), $\\lambda = \\frac{6.63 \\times 10^{-34}}{0.1 \\times 10} \\approx 6.63 \\times 10^{-34} \\text{ m}$—a wavelength so sub-microscopically tiny that its wave properties are completely undetectable. For an electron, however, $\\lambda \\approx 10^{-10} \\text{ m}$ (comparable to interatomic spacings), making wave effects dominant.</p>",
            "pointsToRemember": [
                "Louis de Broglie proposed matter waves in 1924: $\\lambda = \\frac{h}{mv} = \\frac{h}{p}$. Awarded 1929 Nobel Prize.",
                "For an electron accelerated through $V$ volts: $\\lambda = \\frac{1.227}{\\sqrt{V}} \\text{ nm} = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA}$.",
                "Experimental proof: Davisson-Germer experiment (1927) demonstrated electron diffraction through Nickel crystals.",
                "Wave nature is significant only for subatomic microscopic particles (electrons, protons); negligible for macroscopic bodies."
            ],
            "keyNotes": [
                "Irony of physics history: J.J. Thomson won the Nobel Prize in 1906 for proving the electron is a PARTICLE; his son G.P. Thomson won the Nobel Prize in 1937 for proving the electron is a WAVE."
            ],
            "questions": [
                {
                    "id": "ch1_m16_q01",
                    "question": "Who formulated the hypothesis in 1924 that all moving matter particles possess associated wave properties (matter waves)?",
                    "options": [
                        "Louis de Broglie",
                        "Max Planck",
                        "Albert Einstein",
                        "Arthur Compton"
                    ],
                    "answer": "Louis de Broglie",
                    "explanation": "French physicist Louis de Broglie proposed that moving particles have an associated wavelength λ = h/p in his doctoral thesis."
                },
                {
                    "id": "ch1_m16_q02",
                    "question": "What is the mathematical formulation of the de Broglie wavelength (λ) of a moving particle of mass m and velocity v?",
                    "options": [
                        "λ = h / mv",
                        "λ = mv / h",
                        "λ = h · mv",
                        "λ = m / hv"
                    ],
                    "answer": "λ = h / mv",
                    "explanation": "The de Broglie relation is λ = h / p = h / mv, where h is Planck's constant and p is linear momentum."
                },
                {
                    "id": "ch1_m16_q03",
                    "question": "Which landmark experiment in 1927 provided the first direct experimental verification of the wave nature of electrons?",
                    "options": [
                        "Davisson-Germer Experiment (electron diffraction by nickel crystal)",
                        "Millikan's Oil Drop Experiment",
                        "Rutherford's Alpha Scattering",
                        "Cavendish Experiment"
                    ],
                    "answer": "Davisson-Germer Experiment (electron diffraction by nickel crystal)",
                    "explanation": "Clinton Davisson and Lester Germer observed electron diffraction rings from a nickel crystal, verifying de Broglie's wave formula."
                },
                {
                    "id": "ch1_m16_q04",
                    "question": "Why are wave properties undetectable when observing macroscopic objects (like a moving cricket ball or car)?",
                    "options": [
                        "Because their large mass makes their de Broglie wavelength unimaginably tiny (~10⁻³⁴ m), far below any detectable limit",
                        "Macroscopic objects have no momentum",
                        "Planck's constant is too large",
                        "Gravity destroys matter waves instantly"
                    ],
                    "answer": "Because their large mass makes their de Broglie wavelength unimaginably tiny (~10⁻³⁴ m), far below any detectable limit",
                    "explanation": "Due to large mass m in the denominator of λ = h/mv, macroscopic wavelengths (~10⁻³⁴ m) are far smaller than atomic dimensions."
                },
                {
                    "id": "ch1_m16_q05",
                    "question": "What is the approximate de Broglie wavelength of an electron accelerated through an electrical potential difference of 100 Volts?",
                    "options": [
                        "1.227 Å (0.123 nm)",
                        "12.27 nm",
                        "100 Å",
                        "0.001 Å"
                    ],
                    "answer": "1.227 Å (0.123 nm)",
                    "explanation": "Using λ = 12.27 / √V Å: For V = 100 V, λ = 12.27 / √100 = 12.27 / 10 = 1.227 Å (comparable to X-rays)."
                },
                {
                    "id": "ch1_m16_q06",
                    "question": "In what year was Prince Louis de Broglie awarded the Nobel Prize in Physics for his discovery of the wave nature of electrons?",
                    "options": [
                        "1929",
                        "1905",
                        "1918",
                        "1937"
                    ],
                    "answer": "1929",
                    "explanation": "Louis de Broglie was awarded the Nobel Prize in Physics in 1929 for his discovery of the wave nature of electrons."
                },
                {
                    "id": "ch1_m16_q07",
                    "question": "How does the de Broglie wavelength of a particle change if its kinetic energy is quadrupled?",
                    "options": [
                        "Wavelength is halved (λ ∝ 1/√K)",
                        "Wavelength doubles",
                        "Wavelength quadruples",
                        "Wavelength remains unchanged"
                    ],
                    "answer": "Wavelength is halved (λ ∝ 1/√K)",
                    "explanation": "Since λ = h / √(2mK), wavelength is inversely proportional to the square root of kinetic energy: √4 = 2, so λ is halved."
                },
                {
                    "id": "ch1_m16_q08",
                    "question": "What modern scientific instrument utilizes the wave nature of high-energy electrons to achieve magnifications exceeding 1,000,000×?",
                    "options": [
                        "Transmission Electron Microscope (TEM)",
                        "Optical Light Microscope",
                        "Astronomical Telescope",
                        "Cathode Ray Oscilloscope"
                    ],
                    "answer": "Transmission Electron Microscope (TEM)",
                    "explanation": "Electron microscopes utilize electron matter waves (~0.005 nm), circumventing the optical diffraction limit to image atoms."
                },
                {
                    "id": "ch1_m16_q09",
                    "question": "How did de Broglie's wave concept explain Bohr's postulate of quantized angular momentum (mvr = nh/2π)?",
                    "options": [
                        "By requiring that stationary orbits must accommodate a whole number of standing electron wavelengths: 2πr = nλ",
                        "By proving electrons are magnetic needles",
                        "By showing orbits are square",
                        "By eliminating Planck's constant"
                    ],
                    "answer": "By requiring that stationary orbits must accommodate a whole number of standing electron wavelengths: 2πr = nλ",
                    "explanation": "A stable standing wave around a circular orbit requires circumference 2πr = nλ = n(h/mv), which directly yields mvr = nh/2π."
                },
                {
                    "id": "ch1_m16_q10",
                    "question": "Which British physicist shared the 1937 Nobel Prize with Clinton Davisson for demonstrating electron diffraction through thin foils?",
                    "options": [
                        "George Paget Thomson",
                        "J.J. Thomson",
                        "William Henry Bragg",
                        "Charles Barkla"
                    ],
                    "answer": "George Paget Thomson",
                    "explanation": "G.P. Thomson demonstrated electron diffraction through gold and celluloid films, sharing the 1937 Nobel Prize with Davisson."
                }
            ]
        },
        {
            "id": "m17",
            "moduleNumber": 17,
            "title": "Heisenberg's Uncertainty Principle",
            "tagline": "Werner Heisenberg's 1927 principle, mathematical formulation ($\\Delta x \\cdot \\Delta p \\ge h/4\\pi$), macroscopic insignificance, and end of classical trajectories.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>A direct, unavoidable consequence of the dual wave-particle nature of matter is that classical concepts of precise determinism and definite trajectories cannot be applied to the subatomic world.</p><p>In 1927, German theoretical physicist **Werner Heisenberg** formulated the **Uncertainty Principle**: *'It is physically impossible to measure simultaneously and with absolute precision both the position and momentum (or velocity) of a microscopic subatomic particle.'*</p><p>Mathematically, if $\\Delta x$ is the uncertainty in measuring position and $\\Delta p_x$ is the uncertainty in measuring momentum along the same axis:</p><p>$$\\Delta x \\cdot \\Delta p_x \\ge \\frac{h}{4\\pi} \\quad \\left( \\text{or } \\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} \\right)$$</p><p>Substituting momentum uncertainty $\\Delta p = m \\Delta v$ (for a particle of fixed mass $m$):</p><p>$$\\Delta x \\cdot \\Delta v_x \\ge \\frac{h}{4\\pi m}$$</p><p>**Physical Origin**: To 'see' and measure the position of an electron, one must illuminate it with a photon of very short wavelength $\\lambda$ (to minimize diffraction blurring, $\\Delta x \\approx \\lambda$). However, a short-wavelength photon carries immense momentum ($p = h/\\lambda$). During the collision, the photon unpredictably kicks the electron, violently changing its momentum ($\\Delta p$). Thus, the very act of measurement inevitably perturbs the measured system.</p><p>Another complementary formulation links **Energy ($E$) and Time ($t$)**:</p><p>$$\\Delta E \\cdot \\Delta t \\ge \\frac{h}{4\\pi}$$</p><p>**Philosophical Impact**: Heisenberg's principle destroyed the classical Newtonian concept of definite electron 'orbits' (trajectories), replacing them with **three-dimensional probability distributions** (orbitals). Heisenberg received the **Nobel Prize in Physics in 1932** for the creation of quantum mechanics.</p>",
            "pointsToRemember": [
                "Werner Heisenberg formulated the Uncertainty Principle in 1927: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$. Awarded 1932 Nobel Prize.",
                "In terms of velocity: $\\Delta x \\cdot \\Delta v \\ge \\frac{h}{4\\pi m}$.",
                "Energy-Time conjugate formulation: $\\Delta E \\cdot \\Delta t \\ge \\frac{h}{4\\pi}$.",
                "Eliminated the classical concept of fixed, deterministic planetary orbits in atoms.",
                "Significant only for microscopic subatomic particles (electrons); completely negligible for macroscopic bodies."
            ],
            "keyNotes": [
                "If an electron's position is known with absolute certainty ($\\Delta x \rightarrow 0$), its momentum becomes completely uncertain ($\\Delta p \rightarrow \\infty$), and vice versa."
            ],
            "questions": [
                {
                    "id": "ch1_m17_q01",
                    "question": "What is the mathematical formulation of Heisenberg's Uncertainty Principle for position (x) and momentum (p)?",
                    "options": [
                        "Δx · Δp ≥ h / 4π",
                        "Δx · Δp = 0",
                        "Δx / Δp = h",
                        "Δx · Δp ≤ h / 2π"
                    ],
                    "answer": "Δx · Δp ≥ h / 4π",
                    "explanation": "Heisenberg's uncertainty relation states that the product of uncertainties in position and momentum is at least h/4π."
                },
                {
                    "id": "ch1_m17_q02",
                    "question": "In which year did Werner Heisenberg formulate the Uncertainty Principle?",
                    "options": [
                        "1927",
                        "1905",
                        "1913",
                        "1935"
                    ],
                    "answer": "1927",
                    "explanation": "Werner Heisenberg published his uncertainty principle in 1927 while working at Niels Bohr's institute in Copenhagen."
                },
                {
                    "id": "ch1_m17_q03",
                    "question": "What is the alternative conjugate uncertainty relation linking energy (E) and time (t)?",
                    "options": [
                        "ΔE · Δt ≥ h / 4π",
                        "ΔE · Δt = 0",
                        "ΔE / Δt = h",
                        "ΔE · Δt = mc²"
                    ],
                    "answer": "ΔE · Δt ≥ h / 4π",
                    "explanation": "Energy and time form a conjugate pair satisfying the uncertainty relation ΔE · Δt ≥ h/4π."
                },
                {
                    "id": "ch1_m17_q04",
                    "question": "Why does Heisenberg's principle make the classical concept of an electron 'orbit' physically meaningless?",
                    "options": [
                        "An orbit requires simultaneous exact knowledge of both position and velocity at every instant, which is fundamentally forbidden by quantum mechanics",
                        "Electrons travel faster than light",
                        "Orbits exist only for planets",
                        "Electrons have no mass"
                    ],
                    "answer": "An orbit requires simultaneous exact knowledge of both position and velocity at every instant, which is fundamentally forbidden by quantum mechanics",
                    "explanation": "A deterministic trajectory (orbit) requires simultaneous exact position and momentum, which is fundamentally impossible for an electron."
                },
                {
                    "id": "ch1_m17_q05",
                    "question": "What replaced the classical concept of fixed planetary 'orbits' in modern atomic physics?",
                    "options": [
                        "Three-dimensional probability orbitals (electron probability clouds)",
                        "Solid crystal shells",
                        "Magnetic rubber bands",
                        "Two-dimensional flat rings"
                    ],
                    "answer": "Three-dimensional probability orbitals (electron probability clouds)",
                    "explanation": "Fixed orbits were replaced by 'orbitals'—three-dimensional spatial regions where the probability of finding an electron is high (~90–95%)."
                },
                {
                    "id": "ch1_m17_q06",
                    "question": "If the uncertainty in measuring an electron's position is reduced to zero (Δx = 0), what becomes of the uncertainty in its momentum (Δp)?",
                    "options": [
                        "Δp becomes infinite (completely indeterminate)",
                        "Δp becomes zero",
                        "Δp equals Planck's constant",
                        "Δp equals electron mass"
                    ],
                    "answer": "Δp becomes infinite (completely indeterminate)",
                    "explanation": "Since Δx · Δp ≥ h/4π, if Δx → 0, then Δp must mathematically approach infinity (total indeterminacy)."
                },
                {
                    "id": "ch1_m17_q07",
                    "question": "Why is the uncertainty principle practically irrelevant in guiding everyday vehicles, sports, and astronomy?",
                    "options": [
                        "The mass m of macroscopic bodies is so large that the uncertainty product Δx · Δv (≥ h/4πm) is infinitesimally negligible (~10⁻²⁸ m²/s)",
                        "Macroscopic bodies do not contain electrons",
                        "Planck's constant is infinite",
                        "Heisenberg principle applies only to light"
                    ],
                    "answer": "The mass m of macroscopic bodies is so large that the uncertainty product Δx · Δv (≥ h/4πm) is infinitesimally negligible (~10⁻²⁸ m²/s)",
                    "explanation": "For macroscopic masses, the lower bound h/(4πm) is infinitesimal (~10⁻²⁸), rendering quantum uncertainties utterly imperceptible."
                },
                {
                    "id": "ch1_m17_q08",
                    "question": "In what year was Werner Heisenberg awarded the Nobel Prize in Physics for the creation of quantum mechanics?",
                    "options": [
                        "1932",
                        "1921",
                        "1918",
                        "1945"
                    ],
                    "answer": "1932",
                    "explanation": "Heisenberg was awarded the 1932 Nobel Prize in Physics for the creation of quantum mechanics."
                },
                {
                    "id": "ch1_m17_q09",
                    "question": "If an electron (m = 9.11 × 10⁻³¹ kg) has an uncertainty in velocity of 5.7 × 10⁵ m/s, what is the minimum uncertainty in its position?",
                    "options": [
                        "~1.0 × 10⁻¹⁰ m (approx 1 Å, the size of an atom)",
                        "~1 meter",
                        "~10⁻¹⁵ m",
                        "Zero"
                    ],
                    "answer": "~1.0 × 10⁻¹⁰ m (approx 1 Å, the size of an atom)",
                    "explanation": "Δx ≥ h / (4π m Δv) = 6.63 × 10⁻³⁴ / (4 × 3.14 × 9.11 × 10⁻³¹ × 5.7 × 10⁵) ≈ 1.0 × 10⁻¹⁰ m (comparable to atomic diameter)."
                },
                {
                    "id": "ch1_m17_q10",
                    "question": "Which famous thought experiment did Heisenberg propose to illustrate the physical origin of uncertainty?",
                    "options": [
                        "The Gamma-Ray Microscope thought experiment",
                        "Schrödinger's Cat",
                        "Maxwell's Demon",
                        "Einstein's Elevator"
                    ],
                    "answer": "The Gamma-Ray Microscope thought experiment",
                    "explanation": "Heisenberg's gamma-ray microscope showed that a high-energy photon needed to pinpoint electron position alters its momentum."
                }
            ]
        },
        {
            "id": "m18",
            "moduleNumber": 18,
            "title": "Quantum Mechanical Model: Schrödinger Wave Equation & Probability Orbitals",
            "tagline": "Erwin Schrödinger's 1926 wave mechanics, Hamiltonian operator, wave function ($\\psi$), probability density ($|\\psi|^2$), and atomic orbitals.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>In 1926, Austrian theoretical physicist **Erwin Schrödinger** combined de Broglie's wave hypothesis and classical wave mechanics to formulate the foundation of modern chemistry: the **Quantum Mechanical Model of the Atom** (Wave Mechanics).</p><p>Schrödinger treated the electron in an atom not as a classical particle traveling along a path, but as a three-dimensional standing matter wave anchored by the electrostatic attraction of the nucleus.</p><p>The fundamental governing equation is the **Schrödinger Wave Equation**:</p><p>$$\\hat{H}\\psi = E\\psi$$</p><p>where **$\\hat{H}$ is the Hamiltonian Operator** (representing total energy: kinetic + potential), **$E$ is the total quantized energy eigenvalue**, and **$\\psi$ (psi) is the Wave Function**.</p><p>Expanded in three Cartesian coordinates ($x, y, z$):</p><p>$$\\frac{\\partial^2\\psi}{\\partial x^2} + \\frac{\\partial^2\\psi}{\\partial y^2} + \\frac{\\partial^2\\psi}{\\partial z^2} + \\frac{8\\pi^2 m}{h^2}(E - V)\\psi = 0$$</p><p>**Physical Meaning of $\\psi$ and $|\\psi|^2$** (Max Born Interpretation, 1926):</p><p>• The wave function **$\\psi$ by itself has no physical meaning**; it is an amplitude function that can be positive, negative, or complex.</p><p>• However, **$|\\psi|^2$ (or $\\psi^*\\psi$)**, called **Probability Density**, represents the **probability of finding the electron** in a given infinitesimal volume element $dV$ around a point ($x, y, z$).</p><p>• An **Atomic Orbital** is officially defined as: *A three-dimensional region of space around the nucleus where the probability of finding an electron is maximum (typically defined by a 90% to 95% probability contour boundary surface).* Schrödinger shared the **1933 Nobel Prize in Physics** with Paul Dirac.</p>",
            "pointsToRemember": [
                "Erwin Schrödinger formulated wave mechanics in 1926; governing equation: $\\hat{H}\\psi = E\\psi$.",
                "Wave function $\\psi$ has no physical meaning on its own; it represents probability amplitude.",
                "Probability Density $|\\psi|^2$ (Max Born, 1926) represents the probability of finding the electron at a point.",
                "Atomic Orbital: 3D spatial region around the nucleus where probability of electron presence is maximum (~90-95%).",
                "Schrödinger won the 1933 Nobel Prize in Physics."
            ],
            "keyNotes": [
                "A Node is a region or surface where the probability density $|\\psi|^2$ drops to exactly zero. Total nodes in an orbital = $n - 1$ (Radial nodes = $n - l - 1$; Angular nodes = $l$)."
            ],
            "questions": [
                {
                    "id": "ch1_m18_q01",
                    "question": "Who formulated the fundamental wave equation of quantum mechanics (Ĥψ = Eψ) in 1926?",
                    "options": [
                        "Erwin Schrödinger",
                        "Niels Bohr",
                        "Louis de Broglie",
                        "Werner Heisenberg"
                    ],
                    "answer": "Erwin Schrödinger",
                    "explanation": "Austrian theoretical physicist Erwin Schrödinger published his wave mechanics formulation in 1926."
                },
                {
                    "id": "ch1_m18_q02",
                    "question": "According to Max Born's probabilistic interpretation, what does |ψ|² (the square of the wave function) represent physically?",
                    "options": [
                        "Probability density (the probability of finding an electron per unit volume at a given point)",
                        "The charge of the electron",
                        "The velocity of light",
                        "The mass of the nucleus"
                    ],
                    "answer": "Probability density (the probability of finding an electron per unit volume at a given point)",
                    "explanation": "Max Born showed that |ψ|² represents the probability density of finding the electron in space."
                },
                {
                    "id": "ch1_m18_q03",
                    "question": "What is the formal definition of an 'Atomic Orbital' in the quantum mechanical model?",
                    "options": [
                        "A 3-dimensional spatial region around the nucleus where the probability of finding an electron is maximum (~90-95%)",
                        "A circular rigid steel wire on which electrons slide",
                        "A hollow tunnel inside the nucleus",
                        "A planar circular path"
                    ],
                    "answer": "A 3-dimensional spatial region around the nucleus where the probability of finding an electron is maximum (~90-95%)",
                    "explanation": "An orbital is a 3D probability boundary surface enclosing the region where electron probability is ~90–95%."
                },
                {
                    "id": "ch1_m18_q04",
                    "question": "What is a 'Node' in an atomic orbital?",
                    "options": [
                        "A point, plane, or spherical surface where the electron probability density (|ψ|²) is exactly zero",
                        "The center of the nucleus",
                        "The point of maximum electron density",
                        "A chemical bond"
                    ],
                    "answer": "A point, plane, or spherical surface where the electron probability density (|ψ|²) is exactly zero",
                    "explanation": "A node is a region or surface where the probability of finding the electron drops to zero."
                },
                {
                    "id": "ch1_m18_q05",
                    "question": "What is the mathematical operator Ĥ representing total energy (kinetic + potential) in Schrödinger's equation called?",
                    "options": [
                        "Hamiltonian Operator",
                        "Laplacian Operator",
                        "Dirac Operator",
                        "Lagrangian Operator"
                    ],
                    "answer": "Hamiltonian Operator",
                    "explanation": "Ĥ is the Hamiltonian operator, corresponding to the total mechanical energy of the system."
                },
                {
                    "id": "ch1_m18_q06",
                    "question": "How many total nodes (radial + angular) does an atomic orbital with principal quantum number n possess?",
                    "options": [
                        "n - 1",
                        "n",
                        "2l + 1",
                        "n²"
                    ],
                    "answer": "n - 1",
                    "explanation": "The total number of nodes (spherical radial nodes + planar angular nodes) in any orbital is given by n - 1."
                },
                {
                    "id": "ch1_m18_q07",
                    "question": "For a 3p orbital (n=3, l=1), how many radial (spherical) nodes and angular nodes exist?",
                    "options": [
                        "1 radial node (n-l-1 = 3-1-1 = 1) and 1 angular node (l=1)",
                        "2 radial nodes and 0 angular nodes",
                        "0 radial nodes and 2 angular nodes",
                        "3 radial nodes"
                    ],
                    "answer": "1 radial node (n-l-1 = 3-1-1 = 1) and 1 angular node (l=1)",
                    "explanation": "Radial nodes = n - l - 1 = 3 - 1 - 1 = 1; Angular nodes = l = 1. Total nodes = 1 + 1 = 2 (n - 1 = 2)."
                },
                {
                    "id": "ch1_m18_q08",
                    "question": "In which year was Erwin Schrödinger awarded the Nobel Prize in Physics?",
                    "options": [
                        "1933 (shared with Paul Dirac)",
                        "1921",
                        "1905",
                        "1945"
                    ],
                    "answer": "1933 (shared with Paul Dirac)",
                    "explanation": "Schrödinger shared the 1933 Nobel Prize in Physics with British physicist Paul Dirac for the discovery of new productive forms of atomic theory."
                },
                {
                    "id": "ch1_m18_q09",
                    "question": "What spatial boundary surface is typically chosen by chemists to visually depict the shape of an orbital?",
                    "options": [
                        "A contour boundary surface enclosing approx 90% to 95% of total electron probability",
                        "A surface enclosing exactly 100% of probability",
                        "A 10% surface",
                        "A rigid sphere of 1 cm radius"
                    ],
                    "answer": "A contour boundary surface enclosing approx 90% to 95% of total electron probability",
                    "explanation": "Because ψ² approaches zero asymptotically at infinity, a 90–95% probability contour defines the visual boundary of orbitals."
                },
                {
                    "id": "ch1_m18_q10",
                    "question": "Unlike classical orbits which are planar 2D circles, atomic orbitals in wave mechanics are:",
                    "options": [
                        "Three-dimensional spatial electron probability clouds",
                        "One-dimensional lines",
                        "Four-dimensional wormholes",
                        "Rigid solid spheres"
                    ],
                    "answer": "Three-dimensional spatial electron probability clouds",
                    "explanation": "Orbitals are 3D spatial wave distributions characterized by radial and angular probability functions."
                }
            ]
        },
        {
            "id": "m19",
            "moduleNumber": 19,
            "title": "Quantum Numbers & Shapes of Atomic Orbitals",
            "tagline": "Principal ($n$), Azimuthal ($l$), Magnetic ($m_l$), and Spin ($m_s$) quantum numbers; shapes of s, p, d, and f orbitals.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>Solving the Schrödinger wave equation for the hydrogen atom yields three fundamental integer parameters called **Quantum Numbers** ($n, l, m_l$), which completely specify the energy, size, shape, and spatial orientation of an orbital. A fourth quantum number ($m_s$) was introduced later to describe intrinsic electron spin.</p><p>1. **Principal Quantum Number ($n$)**:</p><p>• Identifies the primary electron **shell** (energy level) and determines orbital **size and energy**.</p><p>• Values: $n = 1, 2, 3, 4...$ (designated as shells $K, L, M, N...$). Maximum electrons in shell $n$ = $2n^2$. Maximum orbitals in shell $n$ = $n^2$.</p><p>2. **Azimuthal / Orbital Angular Momentum Quantum Number ($l$)**:</p><p>• Identifies the **subshell** and dictates the **three-dimensional shape** of the orbital.</p><p>• Values: $l = 0, 1, 2... (n-1)$.</p><p>  - $l = 0 \\rightarrow \\mathbf{s}$-orbital: **Spherical**, non-directional shape (1 orbital per subshell).</p><p>  - $l = 1 \\rightarrow \\mathbf{p}$-orbital: **Dumbbell** shape ($p_x, p_y, p_z$; 3 degenerate orbitals).</p><p>  - $l = 2 \\rightarrow \\mathbf{d}$-orbital: **Double-dumbbell** shape ($d_{xy}, d_{yz}, d_{zx}, d_{x^2-y^2}$) and **doughnut/collar** shape ($d_{z^2}$) (5 degenerate orbitals).</p><p>  - $l = 3 \\rightarrow \\mathbf{f}$-orbital: **Complex/diffuse** multi-lobed shape (7 degenerate orbitals).</p><p>3. **Magnetic Quantum Number ($m_l$)**:</p><p>• Dictates the **spatial orientation** of the orbital in space relative to an external magnetic field.</p><p>• Values: $m_l = -l ... 0 ... +l$ (total $2l + 1$ orientations for a given subshell).</p><p>4. **Spin Quantum Number ($m_s$ or $s$)**:</p><p>• Formulated by George Uhlenbeck and Samuel Goudsmit (1925) to account for intrinsic electron angular momentum (electron spin).</p><p>• Values: Exactly two allowed states: $m_s = +\\frac{1}{2}$ (spin-up, $\\uparrow$) and $m_s = -\\frac{1}{2}$ (spin-down, $\\downarrow$).</p>",
            "pointsToRemember": [
                "Principal ($n$): Size and energy of shell ($K, L, M...$); max electrons = $2n^2$.",
                "Azimuthal ($l$): Shape of subshell ($l = 0 \\rightarrow s$ spherical; $l = 1 \\rightarrow p$ dumbbell; $l = 2 \\rightarrow d$ double-dumbbell; $l = 3 \\rightarrow f$ complex).",
                "Magnetic ($m_l$): Spatial orientation ($2l + 1$ values: $-l \\text{ to } +l$).",
                "Spin ($m_s$): Intrinsic spin angular momentum ($+\\frac{1}{2}$ or $-\\frac{1}{2}$).",
                "An orbital can hold a maximum of 2 electrons with opposite spins."
            ],
            "keyNotes": [
                "The d-subshell has 5 orbitals ($d_{xy}, d_{yz}, d_{zx}, d_{x^2-y^2}, d_{z^2}$). Four have double-dumbbell geometry with 4 lobes, while $d_{z^2}$ has 2 lobes along the z-axis and a central toroidal doughnut ring in the xy plane."
            ],
            "questions": [
                {
                    "id": "ch1_m19_q01",
                    "question": "Which quantum number dictates the size and primary energy level of an orbital?",
                    "options": [
                        "Principal Quantum Number (n)",
                        "Azimuthal Quantum Number (l)",
                        "Magnetic Quantum Number (m)",
                        "Spin Quantum Number (s)"
                    ],
                    "answer": "Principal Quantum Number (n)",
                    "explanation": "The principal quantum number (n = 1, 2, 3...) determines the overall size and main energy shell of the orbital."
                },
                {
                    "id": "ch1_m19_q02",
                    "question": "What is the maximum number of electrons that can be accommodated in a shell with principal quantum number n?",
                    "options": [
                        "2n²",
                        "2n",
                        "n²",
                        "4n + 2"
                    ],
                    "answer": "2n²",
                    "explanation": "The maximum electron capacity of shell n is given by the formula 2n² (K=2, L=8, M=18, N=32)."
                },
                {
                    "id": "ch1_m19_q03",
                    "question": "What three-dimensional shape characterizes an 's' orbital (l = 0)?",
                    "options": [
                        "Spherically symmetrical",
                        "Dumbbell-shaped",
                        "Double-dumbbell",
                        "Toroidal doughnut"
                    ],
                    "answer": "Spherically symmetrical",
                    "explanation": "s-orbitals (l=0) are spherically symmetrical, meaning electron probability is identical in all directions from the nucleus."
                },
                {
                    "id": "ch1_m19_q04",
                    "question": "What geometrical shape is characteristic of 'p' orbitals (l = 1)?",
                    "options": [
                        "Dumbbell-shaped with two lobes",
                        "Spherical",
                        "Double-dumbbell with 4 lobes",
                        "Flat triangular"
                    ],
                    "answer": "Dumbbell-shaped with two lobes",
                    "explanation": "p-orbitals have a dumbbell shape consisting of two lobes oriented along coordinate axes (p_x, p_y, p_z)."
                },
                {
                    "id": "ch1_m19_q05",
                    "question": "How many degenerate orbitals exist within any 'd' subshell (l = 2)?",
                    "options": [
                        "5 orbitals (2l + 1 = 2(2) + 1 = 5)",
                        "3 orbitals",
                        "1 orbital",
                        "7 orbitals"
                    ],
                    "answer": "5 orbitals (2l + 1 = 2(2) + 1 = 5)",
                    "explanation": "For l=2, m_l values are -2, -1, 0, +1, +2, providing exactly 5 degenerate d-orbitals holding a maximum of 10 electrons."
                },
                {
                    "id": "ch1_m19_q06",
                    "question": "Which d-orbital exhibits a unique 'dumbbell with a central doughnut/collar' shape oriented along the z-axis?",
                    "options": [
                        "d_z²",
                        "d_xy",
                        "d_x²-y²",
                        "d_yz"
                    ],
                    "answer": "d_z²",
                    "explanation": "The d_z² orbital possesses two lobes along the z-axis surrounded by an electron-density ring (torus) in the xy plane."
                },
                {
                    "id": "ch1_m19_q07",
                    "question": "What are the allowed values of the Spin Quantum Number (m_s) for an electron?",
                    "options": [
                        "+1/2 and -1/2",
                        "0 and 1",
                        "1, 2, 3",
                        "-1, 0, +1"
                    ],
                    "answer": "+1/2 and -1/2",
                    "explanation": "Electron spin is quantized into exactly two orientations: m_s = +1/2 (spin up) and m_s = -1/2 (spin down)."
                },
                {
                    "id": "ch1_m19_q08",
                    "question": "For an electron in a 4d orbital, what are the values of n and l respectively?",
                    "options": [
                        "n = 4, l = 2",
                        "n = 4, l = 1",
                        "n = 3, l = 2",
                        "n = 4, l = 3"
                    ],
                    "answer": "n = 4, l = 2",
                    "explanation": "For '4d': principal quantum number n = 4; subshell letter 'd' corresponds to azimuthal quantum number l = 2."
                },
                {
                    "id": "ch1_m19_q09",
                    "question": "How many total electrons can be accommodated in the entire third principal shell (M-shell, n = 3)?",
                    "options": [
                        "18 electrons (2 × 3² = 18)",
                        "8 electrons",
                        "32 electrons",
                        "2 electrons"
                    ],
                    "answer": "18 electrons (2 × 3² = 18)",
                    "explanation": "Max electrons = 2n² = 2(3)² = 2 × 9 = 18 electrons (2 in 3s, 6 in 3p, 10 in 3d)."
                },
                {
                    "id": "ch1_m19_q10",
                    "question": "Which quantum numbers are derived directly as mathematical solutions to the spatial Schrödinger wave equation?",
                    "options": [
                        "n, l, and m_l (Principal, Azimuthal, Magnetic)",
                        "Only n",
                        "Only spin s",
                        "All four including spin"
                    ],
                    "answer": "n, l, and m_l (Principal, Azimuthal, Magnetic)",
                    "explanation": "n, l, and m_l emerge naturally from the spatial Schrödinger equation; spin (m_s) was added independently for electron spin."
                }
            ]
        },
        {
            "id": "m20",
            "moduleNumber": 20,
            "title": "Electronic Configurations: Aufbau Principle, Pauli Exclusion & Hund's Rule",
            "tagline": "Rules governing electron filling: Aufbau (n+l rule), Pauli exclusion principle, Hund's rule of maximum multiplicity, and anomalies of Cr and Cu.",
            "readingTimeMins": 5,
            "theoryHtml": "<p>The ground-state electronic configuration of any multi-electron atom describes the distribution of electrons among available atomic orbitals, determined strictly by three fundamental quantum rules:</p><p>1. **The Aufbau Principle** (German 'Aufbauen', to build up):</p><p>• In the ground state of an atom, electrons occupy orbitals of **lowest energy first** before occupying higher energy levels.</p><p>• The relative energy of orbitals is dictated by the **$(n + l)$ Rule** (Bohr-Bury Rule):</p><p>  - An orbital with a lower $(n + l)$ value possesses lower energy (e.g., $4s$ has $n+l = 4+0 = 4$, while $3d$ has $n+l = 3+2 = 5$; hence, **$4s$ is filled before $3d$**).</p><p>  - If two orbitals share the same $(n + l)$ value, the orbital with the **lower principal quantum number ($n$)** has lower energy (e.g., $3d$ [$3+2=5$] vs $4p$ [$4+1=5$]; $3d$ is filled before $4p$).</p><p>• Standard orbital filling sequence: $1s \\rightarrow 2s \\rightarrow 2p \\rightarrow 3s \\rightarrow 3p \\rightarrow 4s \\rightarrow 3d \\rightarrow 4p \\rightarrow 5s \\rightarrow 4d \\rightarrow 5p \\rightarrow 6s \\rightarrow 4f \\rightarrow 5d...$</p><p>2. **Pauli's Exclusion Principle** (Wolfgang Pauli, 1925):</p><p>• *'No two electrons in the same atom can have the identical set of all four quantum numbers ($n, l, m_l, m_s$).'*</p><p>• Consequently, an orbital can hold a **maximum of two electrons**, and they must possess **opposite (antiparallel) spins** ($\\uparrow\\downarrow$).</p><p>3. **Hund's Rule of Maximum Multiplicity**:</p><p>• Electron pairing in degenerate orbitals (orbitals of equal energy, such as the three $p$ or five $d$ orbitals) cannot occur until each orbital is **singly occupied by an electron with parallel spin**.</p><p>• Single occupancy minimizes inter-electronic electrostatic repulsion.</p><p>**Anomalous Electronic Configurations of Chromium (Cr) and Copper (Cu)**:</p><p>• **Chromium ($Z = 24$)**: Expected $[Ar] 3d^4 4s^2 \\rightarrow$ Actual: **$[Ar] 3d^5 4s^1$**.</p><p>• **Copper ($Z = 29$)**: Expected $[Ar] 3d^9 4s^2 \\rightarrow$ Actual: **$[Ar] 3d^{10} 4s^1$**.</p><p>• **Reason**: Exactly **half-filled ($d^5$)** and **completely filled ($d^{10}$)** subshells possess extraordinary thermodynamic stability due to: (1) Symmetrical distribution of electron charge, and (2) Maximum exchange energy among parallel-spin electrons.</p>",
            "pointsToRemember": [
                "Aufbau Principle: Fill lowest energy orbital first; energy order given by $(n + l)$ rule ($4s$ fills before $3d$).",
                "Pauli Exclusion Principle (1925): No two electrons can have identical four quantum numbers; max 2 electrons per orbital with opposite spins ($\\uparrow\\downarrow$).",
                "Hund's Rule: Degenerate orbitals are singly occupied with parallel spins before pairing begins.",
                "Chromium ($Z=24$): $[Ar] 3d^5 4s^1$; Copper ($Z=29$): $[Ar] 3d^{10} 4s^1$ (due to half-filled and full-filled stability).",
                "Exchange energy and symmetrical charge distribution confer extra stability to $p^3, p^6, d^5, d^{10}, f^7, f^{14}$ configurations."
            ],
            "keyNotes": [
                "Wolfgang Pauli was awarded the Nobel Prize in Physics in 1945 for his discovery of the Exclusion Principle."
            ],
            "questions": [
                {
                    "id": "ch1_m20_q01",
                    "question": "Which fundamental principle states that 'No two electrons in an atom can have the same set of all four quantum numbers'?",
                    "options": [
                        "Pauli's Exclusion Principle",
                        "Aufbau Principle",
                        "Hund's Rule",
                        "Heisenberg's Uncertainty Principle"
                    ],
                    "answer": "Pauli's Exclusion Principle",
                    "explanation": "Wolfgang Pauli formulated the Exclusion Principle in 1925, limiting any atomic orbital to two electrons of opposite spin."
                },
                {
                    "id": "ch1_m20_q02",
                    "question": "According to the (n + l) rule of the Aufbau principle, why is the 4s orbital filled with electrons before the 3d orbital?",
                    "options": [
                        "4s has a lower (n + l) value (4 + 0 = 4) than 3d (3 + 2 = 5)",
                        "4s has a higher principal quantum number",
                        "3d orbitals do not exist in transition metals",
                        "4s electrons are heavier than 3d electrons"
                    ],
                    "answer": "4s has a lower (n + l) value (4 + 0 = 4) than 3d (3 + 2 = 5)",
                    "explanation": "The (n + l) value of 4s is 4 + 0 = 4, whereas for 3d it is 3 + 2 = 5; lower (n + l) means lower energy, so 4s fills first."
                },
                {
                    "id": "ch1_m20_q03",
                    "question": "Which rule dictates that electrons must occupy degenerate orbitals singly with parallel spins before pairing can take place?",
                    "options": [
                        "Hund's Rule of Maximum Multiplicity",
                        "Aufbau Principle",
                        "Pauli's Exclusion Principle",
                        "Bohr's Correspondence Principle"
                    ],
                    "answer": "Hund's Rule of Maximum Multiplicity",
                    "explanation": "Hund's rule ensures that degenerate orbitals are occupied by one electron each before pairing begins, minimizing repulsion."
                },
                {
                    "id": "ch1_m20_q04",
                    "question": "What is the correct ground-state electronic configuration of Chromium (Cr, atomic number Z = 24)?",
                    "options": [
                        "[Ar] 3d⁵ 4s¹",
                        "[Ar] 3d⁴ 4s²",
                        "[Ar] 3d⁶ 4s⁰",
                        "[Ar] 4s² 4p⁴"
                    ],
                    "answer": "[Ar] 3d⁵ 4s¹",
                    "explanation": "Chromium adopts [Ar] 3d⁵ 4s¹ because the half-filled 3d⁵ subshell provides superior exchange energy and stability."
                },
                {
                    "id": "ch1_m20_q05",
                    "question": "What is the correct ground-state electronic configuration of Copper (Cu, atomic number Z = 29)?",
                    "options": [
                        "[Ar] 3d¹⁰ 4s¹",
                        "[Ar] 3d⁹ 4s²",
                        "[Ar] 3d⁸ 4s² 4p¹",
                        "[Ar] 4s² 4d⁹"
                    ],
                    "answer": "[Ar] 3d¹⁰ 4s¹",
                    "explanation": "Copper transfers an electron from 4s to 3d to achieve the completely filled, extra-stable 3d¹⁰ configuration: [Ar] 3d¹⁰ 4s¹."
                },
                {
                    "id": "ch1_m20_q06",
                    "question": "Why do half-filled (d⁵) and completely filled (d¹⁰) subshells possess extraordinary thermodynamic stability?",
                    "options": [
                        "Maximum exchange energy and symmetrical charge distribution",
                        "They have zero mass",
                        "They repel the nucleus",
                        "Electrons stop spinning"
                    ],
                    "answer": "Maximum exchange energy and symmetrical charge distribution",
                    "explanation": "Symmetrical electron distribution and high quantum mechanical exchange energy among parallel electrons maximize stability."
                },
                {
                    "id": "ch1_m20_q07",
                    "question": "What is the maximum number of electrons that can be accommodated in any single atomic orbital?",
                    "options": [
                        "Exactly 2 electrons (with opposite spins)",
                        "6 electrons",
                        "10 electrons",
                        "14 electrons"
                    ],
                    "answer": "Exactly 2 electrons (with opposite spins)",
                    "explanation": "By Pauli's exclusion principle, a single spatial orbital can hold at most two electrons, which must have opposite spins (+1/2 and -1/2)."
                },
                {
                    "id": "ch1_m20_q08",
                    "question": "How many unpaired electrons are present in the ground state of a neutral Nitrogen atom (N, Z = 7)?",
                    "options": [
                        "3 unpaired electrons  (1s² 2s² 2p_x¹ 2p_y¹ 2p_z¹)",
                        "1 unpaired electron",
                        "0 unpaired electrons",
                        "5 unpaired electrons"
                    ],
                    "answer": "3 unpaired electrons  (1s² 2s² 2p_x¹ 2p_y¹ 2p_z¹)",
                    "explanation": "Nitrogen has configuration 1s² 2s² 2p³, where by Hund's rule, all three 2p orbitals contain one unpaired electron (total 3)."
                },
                {
                    "id": "ch1_m20_q09",
                    "question": "Between the 3d and 4p orbitals, both of which have (n + l) = 5, which orbital has lower energy and fills first?",
                    "options": [
                        "3d orbital fills first because it has a lower principal quantum number (n = 3 vs n = 4)",
                        "4p fills first",
                        "Both fill at the exact same instant",
                        "Neither fills"
                    ],
                    "answer": "3d orbital fills first because it has a lower principal quantum number (n = 3 vs n = 4)",
                    "explanation": "When (n + l) values are identical, the orbital with the smaller principal quantum number (n) possesses lower energy."
                },
                {
                    "id": "ch1_m20_q10",
                    "question": "In which year was Wolfgang Pauli awarded the Nobel Prize in Physics for his formulation of the Exclusion Principle?",
                    "options": [
                        "1945",
                        "1925",
                        "1932",
                        "1954"
                    ],
                    "answer": "1945",
                    "explanation": "Wolfgang Pauli was awarded the 1945 Nobel Prize in Physics after being nominated by Albert Einstein for the Exclusion Principle."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_1_CHEMISTRY;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_1_CHEMISTRY;
}
