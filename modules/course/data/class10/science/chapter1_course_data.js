/* =============================================================================
   ELITE CLASSES — CLASS 10 SCIENCE: CHAPTER 1 COURSE DATA
   Chemical Reactions & Equations (Class 10 Comprehensive Curriculum Aligned)
   - Exactly 20 Progressive Mini-Modules
   - 10 Conceptual Questions per Module (200 MCQs total)
   - 70% Passing Threshold Progressive Mastery Unlocking
   - Proper Unicode Chemical Subscripts (H₂O, Fe₂O₃, Ca(OH)₂, Pb(NO₃)₂)
   ============================================================================= */

const COURSE_CHAPTER_1_SCIENCE = {
    chapterId: 'c10_sci_ch1',
    chapterNumber: 1,
    chapterTitle: 'Chemical Reactions and Equations',
    subject: 'Science',
    cls: 'Class 10',
    totalModules: 20,
    totalQuestions: 200,
    passingPercentage: 70, // 70% required to unlock next module
    modules: [
    {
        "id": "m01",
        "moduleNumber": 1,
        "title": "Introduction to Chemical Changes & Daily Life Observations",
        "tagline": "Distinguishing chemical transformations from physical changes in everyday life.",
        "readingTimeMins": 4,
        "theoryHtml": "\n            <p>Every day, matter around us undergoes various changes. A <strong>physical change</strong> alters only the physical appearance, size, or physical state of a substance without forming any new chemical substance (e.g., melting of ice, tearing of paper).</p>\n            <p>In contrast, a <strong>chemical change</strong> (or <em>chemical reaction</em>) occurs when one or more substances transform into completely new substances having entirely different chemical properties and compositions.</p>\n            <div class=\"activity-box\" style=\"background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n                <strong>🔬 Daily Life Examples:</strong>\n                <ul style=\"margin:6px 0 0 18px; line-height:1.6;\">\n                    <li>Milk left at room temperature during summer turns sour due to lactic acid formation.</li>\n                    <li>An iron tawa/pan/nail left exposed to a humid atmosphere gets rusted.</li>\n                    <li>Grapes get fermented by natural yeasts to produce alcohol.</li>\n                    <li>Food is cooked, and digested inside our alimentary canal by enzymes.</li>\n                    <li>We respire, breaking down glucose with oxygen to release carbon dioxide and energy.</li>\n                </ul>\n            </div>\n            <p>In all these situations, the initial nature and identity of the substance have permanently changed. Whenever a chemical change occurs, we say that a <strong>chemical reaction</strong> has taken place.</p>\n        ",
        "pointsToRemember": [
            "A chemical reaction involves breaking of existing bonds and making of new bonds between atoms.",
            "Chemical changes are usually irreversible and result in products with brand new physical and chemical properties.",
            "Mass is conserved during any chemical change."
        ],
        "keyNotes": [
            "Key daily life examples: Souring of milk, rusting of iron, fermentation of grapes, cooking of food, digestion, and respiration."
        ],
        "questions": [
            {
                "id": "m01_q01",
                "question": "Which of the following represents a chemical change rather than a physical change?",
                "options": [
                    "Melting of candle wax",
                    "Digestion of food in the stomach",
                    "Dissolving table salt in water",
                    "Boiling of water to form steam"
                ],
                "answer": "Digestion of food in the stomach",
                "explanation": "Digestion involves breakdown of complex macromolecules into simpler chemical substances by digestive enzymes, which is an irreversible chemical change."
            },
            {
                "id": "m01_q02",
                "question": "When milk is left at room temperature during summer, it turns sour. What type of change is this?",
                "options": [
                    "Physical change",
                    "Chemical change",
                    "Temporary change",
                    "Nuclear change"
                ],
                "answer": "Chemical change",
                "explanation": "Bacteria convert lactose into lactic acid, producing a new substance with different properties (chemical change)."
            },
            {
                "id": "m01_q03",
                "question": "Which of the following is NOT a chemical reaction described in introductory observations of chemical changes?",
                "options": [
                    "Rusting of an iron pan in humid air",
                    "Fermentation of grapes",
                    "Sublimation of camphor upon gentle heating",
                    "Respiration in human body cells"
                ],
                "answer": "Sublimation of camphor upon gentle heating",
                "explanation": "Sublimation is a physical change of state from solid directly to gas without forming any new chemical substance."
            },
            {
                "id": "m01_q04",
                "question": "During a chemical change, what happens to the atoms of the reacting substances?",
                "options": [
                    "They are converted into entirely new elements",
                    "They rearrange by breaking old bonds and forming new bonds",
                    "They are completely destroyed",
                    "Their nuclear structure changes"
                ],
                "answer": "They rearrange by breaking old bonds and forming new bonds",
                "explanation": "Atoms are neither created nor destroyed in a chemical reaction; they merely rearrange their bonding connections."
            },
            {
                "id": "m01_q05",
                "question": "Why is the cooking of food considered a chemical reaction?",
                "options": [
                    "It changes the temperature only",
                    "New chemical compounds with different tastes and nutritional properties are formed irreversibly",
                    "The weight of food increases",
                    "Food turns into liquid"
                ],
                "answer": "New chemical compounds with different tastes and nutritional properties are formed irreversibly",
                "explanation": "Cooking alters proteins, starches, and other components chemically to create new substances that cannot be converted back to raw ingredients."
            },
            {
                "id": "m01_q06",
                "question": "Fermentation of grapes is a chemical reaction primarily carried out by which biological agent?",
                "options": [
                    "Viruses",
                    "Yeasts (microorganisms)",
                    "Enzymes from iron tawa",
                    "Sunlight alone"
                ],
                "answer": "Yeasts (microorganisms)",
                "explanation": "Yeasts contain enzymes that convert sugars present in grape juice into alcohol and carbon dioxide via fermentation."
            },
            {
                "id": "m01_q07",
                "question": "Which of the following statements about physical and chemical changes is correct?",
                "options": [
                    "Physical changes always produce new chemical substances",
                    "Chemical changes produce substances with properties identical to reactants",
                    "Chemical changes produce substances with entirely different identities and properties",
                    "Physical changes are always irreversible"
                ],
                "answer": "Chemical changes produce substances with entirely different identities and properties",
                "explanation": "Chemical changes alter the molecular identity and create products with unique properties."
            },
            {
                "id": "m01_q08",
                "question": "Rusting of iron requires the presence of which two environmental components?",
                "options": [
                    "Nitrogen and carbon dioxide",
                    "Oxygen (air) and moisture (water vapor)",
                    "Hydrogen and heat",
                    "Sunlight and argon"
                ],
                "answer": "Oxygen (air) and moisture (water vapor)",
                "explanation": "Iron corrodes into hydrated ferric oxide in the simultaneous presence of oxygen and water."
            },
            {
                "id": "m01_q09",
                "question": "Which of the following processes in living organisms involves the chemical breakdown of glucose to release energy?",
                "options": [
                    "Transpiration",
                    "Respiration",
                    "Evaporation",
                    "Circulation"
                ],
                "answer": "Respiration",
                "explanation": "Respiration is an exothermic chemical process where glucose reacts with oxygen to yield carbon dioxide, water, and ATP energy."
            },
            {
                "id": "m01_q10",
                "question": "A student claims that boiling water is a chemical reaction because bubbles of gas are produced. Is the student correct?",
                "options": [
                    "Yes, bubble formation always proves a chemical reaction",
                    "No, the bubbles are simply water vapor (H₂O gas), so the chemical identity remains unchanged",
                    "Yes, water decomposes into hydrogen and oxygen gas on simple boiling",
                    "Yes, water changes color"
                ],
                "answer": "No, the bubbles are simply water vapor (H₂O gas), so the chemical identity remains unchanged",
                "explanation": "Boiling is a physical phase change (H₂O(l) → H₂O(g)); the chemical formula and identity of water do not change."
            }
        ]
    },
    {
        "id": "m02",
        "moduleNumber": 2,
        "title": "Indicators of Chemical Reactions (State, Color, Gas, Temp, Precipitate)",
        "tagline": "The five experimental hallmarks that confirm a chemical reaction has taken place.",
        "readingTimeMins": 4,
        "theoryHtml": "\n            <p>How do we determine whether a chemical reaction has taken place? Scientists look for clear experimental observations. In scientific analysis, any of the following five observations helps us determine that a chemical reaction has occurred:</p>\n            <ol style=\"margin:10px 0 14px 20px; line-height:1.7;\">\n                <li><strong>Change in State:</strong> E.g., Burning of a wax candle (solid wax reacts with oxygen gas to yield gaseous CO₂ and water vapor).</li>\n                <li><strong>Change in Colour:</strong> E.g., Rusting of shiny grey iron into reddish-brown rust; blue copper sulphate turning light green when an iron nail is immersed.</li>\n                <li><strong>Evolution of a Gas:</strong> E.g., Reaction of zinc granules with dilute sulphuric acid produces effervescence of hydrogen gas (H₂).</li>\n                <li><strong>Change in Temperature:</strong> Exothermic reactions release heat (container becomes warm, e.g., quicklime + water), while endothermic reactions absorb heat (container becomes cold).</li>\n                <li><strong>Formation of a Precipitate:</strong> An insoluble solid formed during a reaction in aqueous solution (e.g., yellow precipitate of lead iodide PbI₂).</li>\n            </ol>\n            <div class=\"activity-box\" style=\"background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;\">\n                <strong>🔬 Activity 1.1 — Burning of Magnesium Ribbon:</strong>\n                <p style=\"margin:4px 0 0 0;\">Clean a 3–4 cm long magnesium ribbon with sandpaper. Hold it with tongs and burn it using a burner. It burns with a <strong>dazzling white flame</strong> and changes into a <strong>white powder</strong> of Magnesium Oxide (MgO):</p>\n                <p style=\"text-align:center; font-weight:700; color:#1e3a8a; margin:8px 0;\">2Mg(s) + O₂(g) → 2MgO(s)</p>\n            </div>\n        ",
        "pointsToRemember": [
            "Five hallmarks of chemical reactions: Change in state, change in colour, evolution of gas, change in temperature, and formation of precipitate.",
            "Magnesium ribbon burns with a dazzling white flame to form white magnesium oxide powder.",
            "Magnesium ribbon is cleaned with sandpaper before burning to remove the protective layer of basic magnesium oxide/carbonate."
        ],
        "keyNotes": [
            "Activity 1.1: 2Mg(s) + O₂(g) → 2MgO(s) (White powder, dazzling white flame)."
        ],
        "questions": [
            {
                "id": "m02_q01",
                "question": "Which of the following is NOT one of the five primary observations that indicate a chemical reaction?",
                "options": [
                    "Change in colour",
                    "Evolution of a gas",
                    "Increase in total volume without reaction",
                    "Change in temperature"
                ],
                "answer": "Increase in total volume without reaction",
                "explanation": "A mere mechanical volume increase without new substance formation is not an indicator of a chemical reaction."
            },
            {
                "id": "m02_q02",
                "question": "What is observed when a clean magnesium ribbon is burned in air?",
                "options": [
                    "It melts into a yellow liquid",
                    "It burns with a dazzling white flame and forms a white powder",
                    "It burns with a red flame producing black soot",
                    "It releases brown fumes of gas without light"
                ],
                "answer": "It burns with a dazzling white flame and forms a white powder",
                "explanation": "Magnesium burns vigorously in oxygen with an intense dazzling white flame, forming white magnesium oxide powder."
            },
            {
                "id": "m02_q03",
                "question": "Why is a magnesium ribbon cleaned with sandpaper before burning in air?",
                "options": [
                    "To make it thinner so it catches fire quickly",
                    "To remove the protective layer of magnesium oxide from its surface",
                    "To impart a shiny silver appearance for aesthetics",
                    "To coat it with carbon"
                ],
                "answer": "To remove the protective layer of magnesium oxide from its surface",
                "explanation": "Magnesium reacts slowly with atmospheric oxygen to form a thin protective layer of MgO, which must be cleaned off so it can burn readily."
            },
            {
                "id": "m02_q04",
                "question": "When dilute sulphuric acid is added to zinc granules in a conical flask, which gas is evolved?",
                "options": [
                    "Oxygen (O₂)",
                    "Hydrogen (H₂)",
                    "Carbon dioxide (CO₂)",
                    "Sulphur dioxide (SO₂)"
                ],
                "answer": "Hydrogen (H₂)",
                "explanation": "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g). Hydrogen gas is evolved with effervescence."
            },
            {
                "id": "m02_q05",
                "question": "When touching the conical flask during the reaction of zinc granules with dilute sulphuric acid, what temperature change is observed?",
                "options": [
                    "The flask becomes distinctly warm (temperature rises)",
                    "The flask freezes and forms frost",
                    "The temperature remains absolute zero",
                    "The flask shatters from sudden cold"
                ],
                "answer": "The flask becomes distinctly warm (temperature rises)",
                "explanation": "The reaction between zinc and dilute acid is exothermic, releasing thermal energy and warming the flask."
            },
            {
                "id": "m02_q06",
                "question": "What is a \"precipitate\" in a chemical reaction?",
                "options": [
                    "A gas that bubbles out vigorously",
                    "An insoluble solid that separates out from a liquid solution",
                    "A clear homogeneous liquid solution",
                    "A substance that accelerates a reaction without being consumed"
                ],
                "answer": "An insoluble solid that separates out from a liquid solution",
                "explanation": "A precipitate is an insoluble solid product that settles out or remains suspended in an aqueous reaction medium."
            },
            {
                "id": "m02_q07",
                "question": "What is the chemical formula of the white powder formed when magnesium burns in oxygen?",
                "options": [
                    "Mg₂O",
                    "MgO",
                    "MgO₂",
                    "Mg(OH)₂"
                ],
                "answer": "MgO",
                "explanation": "Magnesium has valency +2 and oxygen has valency -2, forming Magnesium Oxide (MgO)."
            },
            {
                "id": "m02_q08",
                "question": "In Activity 1.2, lead nitrate solution is mixed with potassium iodide solution. What precipitate is formed?",
                "options": [
                    "White precipitate of potassium nitrate",
                    "Yellow precipitate of lead iodide (PbI₂)",
                    "Blue precipitate of lead oxide",
                    "Black precipitate of lead sulphate"
                ],
                "answer": "Yellow precipitate of lead iodide (PbI₂)",
                "explanation": "Mixing lead nitrate with potassium iodide precipitates yellow lead iodide: Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃."
            },
            {
                "id": "m02_q09",
                "question": "How can hydrogen gas evolved in a reaction be tested experimentally?",
                "options": [
                    "It turns lime water milky",
                    "It extinguishes a flame silently",
                    "It burns with a \"pop\" sound when a burning splinter is brought near",
                    "It smells like rotten eggs"
                ],
                "answer": "It burns with a \"pop\" sound when a burning splinter is brought near",
                "explanation": "Hydrogen gas is combustible and burns with a characteristic \"pop\" sound in air."
            },
            {
                "id": "m02_q10",
                "question": "Which of the following reactions involves both an evolution of gas and a change in temperature?",
                "options": [
                    "Zinc + dilute sulphuric acid",
                    "Dissolving sugar in water",
                    "Melting ice cubes",
                    "Condensation of steam"
                ],
                "answer": "Zinc + dilute sulphuric acid",
                "explanation": "Zn + H₂SO₄ releases H₂ gas and is exothermic (releases heat), exhibiting two distinct reaction indicators."
            }
        ]
    },
    {
        "id": "m03",
        "moduleNumber": 3,
        "title": "Chemical Equations: Word Equations vs. Skeletal Chemical Equations",
        "tagline": "Representing chemical reactions concisely using chemical formulas and symbols.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>A <strong>word equation</strong> describes a chemical reaction using full chemical names of reactants and products (e.g., Magnesium + Oxygen → Magnesium oxide). However, chemical equations can be made much more concise and useful by using chemical formulas instead of words.</p><p>A <strong>skeletal chemical equation</strong> uses chemical symbols and formulas but may not have equal numbers of atoms of each element on both sides of the arrow (e.g., Mg + O₂ → MgO). An unbalanced equation is called a skeletal equation for that reaction.</p>",
        "pointsToRemember": [
            "Reactants are written on the left-hand side (LHS) with a plus sign (+) between them.",
            "Products are written on the right-hand side (RHS) with a plus sign (+) between them.",
            "The arrowhead points towards the products and shows the direction of the reaction."
        ],
        "keyNotes": [
            "Skeletal equation for burning magnesium: Mg + O₂ → MgO (unbalanced in oxygen atoms)."
        ],
        "questions": [
            {
                "id": "m03_q01",
                "question": "What is a word equation in chemistry?",
                "options": [
                    "An equation written only in Latin",
                    "Representation of a chemical reaction using full names of reactants and products",
                    "An equation containing only mathematical integers",
                    "An equation without an arrow"
                ],
                "answer": "Representation of a chemical reaction using full names of reactants and products",
                "explanation": "A word equation names the reacting substances and products explicitly in words."
            },
            {
                "id": "m03_q02",
                "question": "In a chemical equation, where are reactants conventionally written?",
                "options": [
                    "On the right-hand side (RHS)",
                    "On the left-hand side (LHS)",
                    "Above the reaction arrow",
                    "Below the reaction arrow"
                ],
                "answer": "On the left-hand side (LHS)",
                "explanation": "Reactants are written on the LHS with a plus sign (+) between them."
            },
            {
                "id": "m03_q03",
                "question": "What does the arrowhead in a chemical equation represent?",
                "options": [
                    "The speed of the reaction",
                    "The direction of the reaction pointing towards products",
                    "The temperature of the reaction",
                    "The total mass of reactants"
                ],
                "answer": "The direction of the reaction pointing towards products",
                "explanation": "The arrowhead points towards the products and indicates the forward progress of the reaction."
            },
            {
                "id": "m03_q04",
                "question": "What is a \"skeletal chemical equation\"?",
                "options": [
                    "An equation with no chemical formulas",
                    "An unbalanced chemical equation where atom counts on LHS and RHS are not equal",
                    "An equation showing human bones",
                    "A balanced equation with state symbols"
                ],
                "answer": "An unbalanced chemical equation where atom counts on LHS and RHS are not equal",
                "explanation": "A skeletal equation uses chemical formulas but is not yet mass-balanced."
            },
            {
                "id": "m03_q05",
                "question": "Which of the following is the skeletal equation for the combustion of magnesium in oxygen?",
                "options": [
                    "Mg + O → MgO",
                    "Mg + O₂ → MgO",
                    "2Mg + O₂ → 2MgO",
                    "Mg₂ + O₂ → 2MgO"
                ],
                "answer": "Mg + O₂ → MgO",
                "explanation": "Mg + O₂ → MgO is the skeletal (unbalanced) equation because there are 2 oxygen atoms on LHS but only 1 on RHS."
            },
            {
                "id": "m03_q06",
                "question": "Why is Mg + O₂ → MgO called an unbalanced equation?",
                "options": [
                    "Magnesium is heavier than oxygen",
                    "The mass of reactants is not equal to the mass of products because oxygen atoms differ",
                    "No energy is released",
                    "It cannot be carried out in a lab"
                ],
                "answer": "The mass of reactants is not equal to the mass of products because oxygen atoms differ",
                "explanation": "There are two oxygen atoms on the LHS and only one on the RHS, making mass unequal."
            },
            {
                "id": "m03_q07",
                "question": "When multiple products are formed in a chemical reaction, how are they separated in the equation?",
                "options": [
                    "With an exclamation mark (!)",
                    "With a plus sign (+)",
                    "With a division slash (/)",
                    "With an asterisk (*)"
                ],
                "answer": "With a plus sign (+)",
                "explanation": "A plus sign (+) is placed between multiple products on the RHS."
            },
            {
                "id": "m03_q08",
                "question": "Which of the following correctly describes reactants?",
                "options": [
                    "Substances formed during the reaction",
                    "The starting substances that undergo chemical change in a reaction",
                    "Catalysts that remain unchanged",
                    "Solvents used to dissolve products"
                ],
                "answer": "The starting substances that undergo chemical change in a reaction",
                "explanation": "Reactants are the initial substances that undergo chemical transformation."
            },
            {
                "id": "m03_q09",
                "question": "What symbol connects the reactants side to the products side in a chemical equation?",
                "options": [
                    "An equals sign (=)",
                    "An arrow pointing towards products (→)",
                    "A double colon (::)",
                    "A hyphen (-)"
                ],
                "answer": "An arrow pointing towards products (→)",
                "explanation": "An arrow (→) points from reactants to products."
            },
            {
                "id": "m03_q10",
                "question": "Which of the following is a word equation?",
                "options": [
                    "2H₂ + O₂ → 2H₂O",
                    "Hydrogen + Oxygen → Water",
                    "H₂O → H₂ + O₂",
                    "Zn + HCl → ZnCl₂ + H₂"
                ],
                "answer": "Hydrogen + Oxygen → Water",
                "explanation": "This equation uses full words rather than chemical symbols."
            }
        ]
    },
    {
        "id": "m04",
        "moduleNumber": 4,
        "title": "Law of Conservation of Mass & Fundamental Need for Balancing Equations",
        "tagline": "Understanding Antoine Lavoisier's principle that mass can neither be created nor destroyed.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>The <strong>Law of Conservation of Mass</strong> states that matter can neither be created nor destroyed in a chemical reaction. That is, the total mass of the elements present in the products of a chemical reaction has to be equal to the total mass of the elements present in the reactants.</p><p>In other words, the number of atoms of each element remains the same, before and after a chemical reaction. Hence, we need to balance a skeletal chemical equation.</p>",
        "pointsToRemember": [
            "Total mass of reactants = Total mass of products.",
            "The number of atoms of each element on LHS must equal the number of atoms on RHS.",
            "We never change chemical formulas (subscripts) while balancing; we only adjust coefficients."
        ],
        "keyNotes": [
            "Formulas such as H₂O or Fe₃O₄ must remain unchanged; only whole number coefficients (e.g. 3Fe, 4H₂O) are prefixed."
        ],
        "questions": [
            {
                "id": "m04_q01",
                "question": "Who formulated the Law of Conservation of Mass in chemical reactions?",
                "options": [
                    "John Dalton",
                    "Antoine Lavoisier",
                    "Dmitri Mendeleev",
                    "J.J. Thomson"
                ],
                "answer": "Antoine Lavoisier",
                "explanation": "Antoine Lavoisier established the Law of Conservation of Mass in 1789."
            },
            {
                "id": "m04_q02",
                "question": "According to the Law of Conservation of Mass, during a chemical reaction, mass can:",
                "options": [
                    "Be created if heat is supplied",
                    "Neither be created nor destroyed",
                    "Be destroyed in exothermic reactions",
                    "Double in combination reactions"
                ],
                "answer": "Neither be created nor destroyed",
                "explanation": "Mass is strictly conserved in all ordinary chemical transformations."
            },
            {
                "id": "m04_q03",
                "question": "Why must a chemical equation always be balanced?",
                "options": [
                    "To satisfy the Law of Conservation of Mass",
                    "To make the equation look symmetrical",
                    "To change the valency of elements",
                    "To ensure products have higher density"
                ],
                "answer": "To satisfy the Law of Conservation of Mass",
                "explanation": "The total number of atoms of each element must be identical before and after the reaction."
            },
            {
                "id": "m04_q04",
                "question": "If 4g of hydrogen reacts completely with 32g of oxygen, what is the mass of water formed?",
                "options": [
                    "28 g",
                    "36 g",
                    "16 g",
                    "64 g"
                ],
                "answer": "36 g",
                "explanation": "Mass of reactants = 4g + 32g = 36g. By conservation of mass, 36g of water is formed."
            },
            {
                "id": "m04_q05",
                "question": "What happens to the total number of atoms of each element in a balanced chemical reaction?",
                "options": [
                    "It increases",
                    "It decreases",
                    "It remains exactly the same",
                    "It fluctuates with temperature"
                ],
                "answer": "It remains exactly the same",
                "explanation": "Atoms are neither created nor destroyed, so their count remains constant."
            },
            {
                "id": "m04_q06",
                "question": "While balancing a chemical equation, what are we strictly NOT allowed to alter?",
                "options": [
                    "The stoichiometric coefficients in front of formulas",
                    "The chemical formulas and subscripts of the compounds",
                    "The temperature of the room",
                    "The order of reactants written"
                ],
                "answer": "The chemical formulas and subscripts of the compounds",
                "explanation": "Altering subscripts changes the chemical identity of the substance, which is invalid."
            },
            {
                "id": "m04_q07",
                "question": "To balance oxygen in Mg + O₂ → MgO, why can we NOT write MgO₂ as the product?",
                "options": [
                    "MgO₂ does not exist as a neutral salt",
                    "Because magnesium oxide has the definite chemical formula MgO based on valency +2 and -2",
                    "Oxygen cannot have subscript 2",
                    "Because MgO₂ is a gas"
                ],
                "answer": "Because magnesium oxide has the definite chemical formula MgO based on valency +2 and -2",
                "explanation": "Compounds have fixed compositions governed by the law of constant proportions."
            },
            {
                "id": "m04_q08",
                "question": "In an open beaker, calcium carbonate decomposes into calcium oxide and carbon dioxide gas. The measured mass decreases. Does this violate conservation of mass?",
                "options": [
                    "Yes, mass was destroyed",
                    "No, CO₂ gas escaped into the atmosphere; in a closed container total mass remains unchanged",
                    "Yes, because limestone is unstable",
                    "No, mass always decreases in reactions"
                ],
                "answer": "No, CO₂ gas escaped into the atmosphere; in a closed container total mass remains unchanged",
                "explanation": "In an open container, gaseous products escape, causing apparent mass loss."
            },
            {
                "id": "m04_q09",
                "question": "What is the sum of masses of reactants compared to products in any closed chemical system?",
                "options": [
                    "Mass of reactants > Mass of products",
                    "Mass of reactants < Mass of products",
                    "Mass of reactants = Mass of products",
                    "Unpredictable"
                ],
                "answer": "Mass of reactants = Mass of products",
                "explanation": "Total mass is strictly invariant in a closed system."
            },
            {
                "id": "m04_q10",
                "question": "Which principle guarantees that atoms of an element do not disappear during a chemical reaction?",
                "options": [
                    "Law of Conservation of Energy",
                    "Law of Conservation of Mass and Dalton's atomic theory",
                    "Avogadro's hypothesis",
                    "Le Chatelier's principle"
                ],
                "answer": "Law of Conservation of Mass and Dalton's atomic theory",
                "explanation": "Dalton's atomic theory states atoms are indivisible particles that cannot be created or destroyed."
            }
        ]
    },
    {
        "id": "m05",
        "moduleNumber": 5,
        "title": "Step-by-Step Balancing of Chemical Equations (Hit-and-Trial Technique)",
        "tagline": "Mastering the systematic procedure to balance complex chemical equations.",
        "readingTimeMins": 5,
        "theoryHtml": "<p>To balance a chemical equation like Fe + H₂O → Fe₃O₄ + H₂:</p><ol><li>Draw boxes around each formula and do not change anything inside the boxes.</li><li>List the number of atoms of different elements present in the unbalanced equation.</li><li>Start balancing with the compound that contains the maximum number of atoms (here Fe₃O₄, with 4 oxygen atoms).</li><li>Equalize oxygen atoms by adding coefficient 4 before H₂O: Fe + 4H₂O → Fe₃O₄ + H₂.</li><li>Next balance hydrogen: 4H₂O has 8 H atoms, so put coefficient 4 before H₂: Fe + 4H₂O → Fe₃O₄ + 4H₂.</li><li>Finally balance iron: Fe₃O₄ has 3 Fe atoms, so put coefficient 3 before Fe: <strong>3Fe + 4H₂O → Fe₃O₄ + 4H₂</strong>.</li></ol>",
        "pointsToRemember": [
            "Balanced equation: 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g).",
            "The hit-and-trial method balances by making trials using the smallest whole number coefficient.",
            "Check all elements finally to ensure atom counts on LHS and RHS match."
        ],
        "keyNotes": [
            "Steam is represented as H₂O(g) indicating the gaseous physical state of water."
        ],
        "questions": [
            {
                "id": "m05_q01",
                "question": "What is the first step in balancing a chemical equation using the hit-and-trial method?",
                "options": [
                    "Change the subscripts of all molecules",
                    "Draw boxes around each formula and do not change anything inside",
                    "Multiply everything by 10",
                    "Convert all formulas to words"
                ],
                "answer": "Draw boxes around each formula and do not change anything inside",
                "explanation": "Boxes protect the integrity of chemical formulas so subscripts are not tampered with."
            },
            {
                "id": "m05_q02",
                "question": "When balancing Fe + H₂O → Fe₃O₄ + H₂, which element should be balanced first according to standard balancing principles?",
                "options": [
                    "Iron (Fe)",
                    "Hydrogen (H)",
                    "Oxygen (O) because Fe₃O₄ has the maximum number of oxygen atoms (4)",
                    "Nitrogen (N)"
                ],
                "answer": "Oxygen (O) because Fe₃O₄ has the maximum number of oxygen atoms (4)",
                "explanation": "It is convenient to start balancing with the compound containing the maximum number of atoms."
            },
            {
                "id": "m05_q03",
                "question": "What coefficient must be placed before H₂O to balance the oxygen atoms in Fe + H₂O → Fe₃O₄ + H₂?",
                "options": [
                    "2",
                    "3",
                    "4",
                    "8"
                ],
                "answer": "4",
                "explanation": "Putting 4 before H₂O gives 4 oxygen atoms, balancing the 4 oxygens in Fe₃O₄."
            },
            {
                "id": "m05_q04",
                "question": "After placing 4H₂O on LHS, what coefficient must be placed before H₂ on RHS to balance hydrogen?",
                "options": [
                    "2",
                    "4",
                    "6",
                    "8"
                ],
                "answer": "4",
                "explanation": "4H₂O contains 8 hydrogen atoms; 4H₂ gives 8 hydrogen atoms on RHS."
            },
            {
                "id": "m05_q05",
                "question": "What coefficient is placed before Fe to complete the balanced equation for iron reacting with steam?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "3",
                "explanation": "Fe₃O₄ contains 3 iron atoms, so 3 is placed before Fe: 3Fe."
            },
            {
                "id": "m05_q06",
                "question": "Which of the following is the correctly balanced equation for the reaction of iron with steam?",
                "options": [
                    "Fe + H₂O → FeO + H₂",
                    "2Fe + 3H₂O → Fe₂O₃ + 3H₂",
                    "3Fe + 4H₂O → Fe₃O₄ + 4H₂",
                    "3Fe + 2H₂O → Fe₃O₂ + 2H₂"
                ],
                "answer": "3Fe + 4H₂O → Fe₃O₄ + 4H₂",
                "explanation": "3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g) is the completely balanced equation."
            },
            {
                "id": "m05_q07",
                "question": "Why is this method called the \"hit-and-trial\" method?",
                "options": [
                    "Because we hit the chemicals with a hammer",
                    "Because we make trials to balance the equation using the smallest whole number coefficients",
                    "Because reactions always occur randomly",
                    "Because coefficients can be fractional numbers"
                ],
                "answer": "Because we make trials to balance the equation using the smallest whole number coefficients",
                "explanation": "Trials are made with simple whole-number trial coefficients until both sides equalize."
            },
            {
                "id": "m05_q08",
                "question": "In the balanced equation aKClO₃ → bKCl + cO₂, what are the values of a, b, and c?",
                "options": [
                    "a=1, b=1, c=1",
                    "a=2, b=2, c=3",
                    "a=2, b=1, c=3",
                    "a=3, b=3, c=2"
                ],
                "answer": "a=2, b=2, c=3",
                "explanation": "2KClO₃ → 2KCl + 3O₂ balances 2K, 2Cl, and 6O atoms."
            },
            {
                "id": "m05_q09",
                "question": "In the equation CH₄ + xO₂ → CO₂ + yH₂O, what are the coefficients x and y?",
                "options": [
                    "x=1, y=1",
                    "x=2, y=2",
                    "x=2, y=1",
                    "x=3, y=2"
                ],
                "answer": "x=2, y=2",
                "explanation": "CH₄ + 2O₂ → CO₂ + 2H₂O has 1C, 4H, and 4O on both sides."
            },
            {
                "id": "m05_q10",
                "question": "What is the final step in balancing a chemical equation?",
                "options": [
                    "Checking the atom count of each element on both sides to verify equality",
                    "Erasing the coefficients",
                    "Adding water to the paper",
                    "Changing products into reactants"
                ],
                "answer": "Checking the atom count of each element on both sides to verify equality",
                "explanation": "A final tally confirms that every element is strictly balanced."
            }
        ]
    },
    {
        "id": "m06",
        "moduleNumber": 6,
        "title": "Notation of Physical States & Reaction Conditions (s, l, g, aq, Δ, hv)",
        "tagline": "Making chemical equations truly informative with state symbols and catalyst parameters.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>To make a chemical equation more informative, the physical states of the reactants and products are mentioned along with their chemical formulas:</p><ul><li><strong>(s)</strong> for solid, <strong>(l)</strong> for liquid, <strong>(g)</strong> for gas.</li><li><strong>(aq)</strong> (aqueous) is written if the reactant or product is present as a solution in water.</li></ul><p>Reaction conditions such as temperature, pressure, or catalyst are indicated above and/or below the arrow in the equation. E.g.:</p><p style=\"text-align:center; font-weight:700;\">CO(g) + 2H₂(g) --[340 atm]--> CH₃OH(l)</p><p style=\"text-align:center; font-weight:700;\">6CO₂(aq) + 12H₂O(l) --[Sunlight / Chlorophyll]--> C₆H₁₂O₆(aq) + 6O₂(aq) + 6H₂O(l)</p>",
        "pointsToRemember": [
            "Physical state notations: (s), (l), (g), (aq).",
            "Reaction conditions like pressure (340 atm), catalysts, sunlight, and heat (Δ) are placed above/below the arrow.",
            "Usually physical states are not included unless it is necessary to specify them."
        ],
        "keyNotes": [
            "In photosynthesis, 12 molecules of H₂O yield glucose, oxygen, and 6 molecules of regenerated water."
        ],
        "questions": [
            {
                "id": "m06_q01",
                "question": "Which physical state symbol represents a substance dissolved in water?",
                "options": [
                    "(s)",
                    "(l)",
                    "(g)",
                    "(aq)"
                ],
                "answer": "(aq)",
                "explanation": "(aq) stands for aqueous, meaning dissolved in water."
            },
            {
                "id": "m06_q02",
                "question": "In the reaction 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g), what does (g) after H₂O signify?",
                "options": [
                    "Water is in the liquid state",
                    "Water is used in the form of steam (gas)",
                    "Water is frozen solid",
                    "Water is acidic"
                ],
                "answer": "Water is used in the form of steam (gas)",
                "explanation": "The (g) notation indicates steam."
            },
            {
                "id": "m06_q03",
                "question": "What reaction condition is written over the arrow in CO(g) + 2H₂(g) → CH₃OH(l)?",
                "options": [
                    "1 atm",
                    "100 atm",
                    "340 atm",
                    "1000 atm"
                ],
                "answer": "340 atm",
                "explanation": "This industrial synthesis occurs under 340 atmospheres of pressure."
            },
            {
                "id": "m06_q04",
                "question": "In the photosynthesis equation, what two conditions are written above and below the reaction arrow?",
                "options": [
                    "Heat and Catalyst",
                    "Sunlight and Chlorophyll",
                    "Pressure and Electricity",
                    "Acid and Base"
                ],
                "answer": "Sunlight and Chlorophyll",
                "explanation": "Sunlight and chlorophyll are the essential catalytic/energy conditions for photosynthesis."
            },
            {
                "id": "m06_q05",
                "question": "What does the delta (Δ) sign written over a reaction arrow indicate?",
                "options": [
                    "Cooling in an ice bath",
                    "Heating of the reaction mixture",
                    "Addition of water",
                    "Passage of electric current"
                ],
                "answer": "Heating of the reaction mixture",
                "explanation": "The Greek letter delta (Δ) signifies heating."
            },
            {
                "id": "m06_q06",
                "question": "What does an upward arrow (↑) next to a product formula denote?",
                "options": [
                    "Precipitate formation",
                    "Evolution of a gas",
                    "Decrease in temperature",
                    "Reversible reaction"
                ],
                "answer": "Evolution of a gas",
                "explanation": "An upward arrow (↑) indicates gas evolution."
            },
            {
                "id": "m06_q07",
                "question": "What does a downward arrow (↓) next to a product formula denote?",
                "options": [
                    "Formation of an insoluble precipitate",
                    "Evolution of a gas",
                    "Melting of a solid",
                    "Evaporation"
                ],
                "answer": "Formation of an insoluble precipitate",
                "explanation": "A downward arrow (↓) signifies precipitation."
            },
            {
                "id": "m06_q08",
                "question": "Why are physical state notations omitted in simple school chemical equations unless specified?",
                "options": [
                    "Because physical states change constantly",
                    "To keep the equation simple and uncluttered unless state information is vital",
                    "Because state symbols are forbidden",
                    "Because all chemicals are solid"
                ],
                "answer": "To keep the equation simple and uncluttered unless state information is vital",
                "explanation": "State symbols are included only when essential to specify reaction conditions."
            },
            {
                "id": "m06_q09",
                "question": "In the equation 2H₂(g) + O₂(g) → 2H₂O(l), what is the physical state of the product water?",
                "options": [
                    "Solid ice",
                    "Liquid",
                    "Gaseous steam",
                    "Aqueous solution"
                ],
                "answer": "Liquid",
                "explanation": "(l) represents liquid state."
            },
            {
                "id": "m06_q10",
                "question": "Which of the following equations correctly shows state symbols for the reaction of burning magnesium?",
                "options": [
                    "2Mg(l) + O₂(s) → 2MgO(g)",
                    "2Mg(s) + O₂(g) → 2MgO(s)",
                    "2Mg(aq) + O₂(l) → 2MgO(aq)",
                    "2Mg(g) + O₂(s) → 2MgO(l)"
                ],
                "answer": "2Mg(s) + O₂(g) → 2MgO(s)",
                "explanation": "Solid magnesium reacts with gaseous oxygen to yield solid magnesium oxide."
            }
        ]
    },
    {
        "id": "m07",
        "moduleNumber": 7,
        "title": "Combination Reactions — Core Concept & Synthesis of Compounds",
        "tagline": "When two or more reactants combine to form a single product.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>A reaction in which a single product is formed from two or more reactants is known as a <strong>combination reaction</strong>. General form: <em>A + B → AB</em>.</p><p>Key foundational examples:</p><ul><li><strong>Burning of coal:</strong> C(s) + O₂(g) → CO₂(g)</li><li><strong>Formation of water:</strong> 2H₂(g) + O₂(g) → 2H₂O(l)</li><li><strong>Combination of quicklime with water:</strong> CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat</li></ul>",
        "pointsToRemember": [
            "A combination reaction always yields only ONE single product.",
            "Many combination reactions are exothermic because bond formation releases energy.",
            "Elements or compounds can both participate in combination reactions."
        ],
        "keyNotes": [
            "C(s) + O₂(g) → CO₂(g) is both a combination and combustion reaction."
        ],
        "questions": [
            {
                "id": "m07_q01",
                "question": "What defines a combination reaction?",
                "options": [
                    "A single reactant decomposes into two products",
                    "Two or more reactants combine to form a single product",
                    "Two compounds mutually exchange ions",
                    "A more reactive metal displaces a less reactive metal"
                ],
                "answer": "Two or more reactants combine to form a single product",
                "explanation": "Combination reactions always result in exactly one product compound."
            },
            {
                "id": "m07_q02",
                "question": "Which of the following is a classic combination reaction?",
                "options": [
                    "2H₂O → 2H₂ + O₂",
                    "C(s) + O₂(g) → CO₂(g)",
                    "Zn + CuSO₄ → ZnSO₄ + Cu",
                    "NaCl + AgNO₃ → AgCl + NaNO₃"
                ],
                "answer": "C(s) + O₂(g) → CO₂(g)",
                "explanation": "Carbon and oxygen combine to form the single product CO₂."
            },
            {
                "id": "m07_q03",
                "question": "What type of reaction occurs when hydrogen gas combines with oxygen gas to form water?",
                "options": [
                    "Decomposition",
                    "Combination",
                    "Displacement",
                    "Double displacement"
                ],
                "answer": "Combination",
                "explanation": "2H₂ + O₂ → 2H₂O is a combination reaction."
            },
            {
                "id": "m07_q04",
                "question": "When calcium oxide reacts vigorously with water, how many products are formed?",
                "options": [
                    "Only one: Calcium Hydroxide",
                    "Two: Calcium and Hydrogen",
                    "Three: Calcium, Oxygen and Hydrogen",
                    "None: No reaction occurs"
                ],
                "answer": "Only one: Calcium Hydroxide",
                "explanation": "CaO + H₂O → Ca(OH)₂ yields only one product."
            },
            {
                "id": "m07_q05",
                "question": "What is the general symbolic representation of a combination reaction?",
                "options": [
                    "A + B → C",
                    "AB → A + B",
                    "A + BC → AC + B",
                    "AB + CD → AD + CB"
                ],
                "answer": "A + B → C",
                "explanation": "Two reactants join to form a single product C."
            },
            {
                "id": "m07_q06",
                "question": "Which of the following reactions is BOTH a combination reaction and an exothermic reaction?",
                "options": [
                    "Decomposition of calcium carbonate",
                    "Burning of coal in air",
                    "Electrolysis of water",
                    "Dissolving ammonium chloride in water"
                ],
                "answer": "Burning of coal in air",
                "explanation": "C + O₂ → CO₂ is a combination reaction and releases intense heat (exothermic)."
            },
            {
                "id": "m07_q07",
                "question": "Can two compounds combine to form a single product in a combination reaction?",
                "options": [
                    "No, only elements can combine",
                    "Yes, e.g., CaO(s) + H₂O(l) → Ca(OH)₂(aq)",
                    "No, compounds always decompose",
                    "Only in outer space"
                ],
                "answer": "Yes, e.g., CaO(s) + H₂O(l) → Ca(OH)₂(aq)",
                "explanation": "Both elements and compounds can participate in combination reactions."
            },
            {
                "id": "m07_q08",
                "question": "Ammonia gas reacts with hydrogen chloride gas to form dense white fumes of ammonium chloride: NH₃ + HCl → NH₄Cl. What type of reaction is this?",
                "options": [
                    "Displacement",
                    "Decomposition",
                    "Combination",
                    "Precipitation"
                ],
                "answer": "Combination",
                "explanation": "Two gases combine to form a single solid compound NH₄Cl."
            },
            {
                "id": "m07_q09",
                "question": "Rusting of iron (4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O) involves which type of fundamental reaction?",
                "options": [
                    "Combination and oxidation",
                    "Decomposition only",
                    "Photolysis only",
                    "Thermal cracking"
                ],
                "answer": "Combination and oxidation",
                "explanation": "Iron, oxygen, and water combine to form hydrated ferric oxide."
            },
            {
                "id": "m07_q10",
                "question": "Which of the following statements about combination reactions is always true?",
                "options": [
                    "They require electric current",
                    "There is only one single product formed",
                    "They always produce a precipitate",
                    "They only occur in vacuum"
                ],
                "answer": "There is only one single product formed",
                "explanation": "The defining criterion is the formation of a single product."
            }
        ]
    },
    {
        "id": "m08",
        "moduleNumber": 8,
        "title": "Quicklime, Slaked Lime & Chemistry of Wall White-Washing (CaCO₃)",
        "tagline": "The fascinating two-step chemical transformation behind shiny white painted walls.",
        "readingTimeMins": 5,
        "theoryHtml": "<p>When <strong>quicklime</strong> (calcium oxide, CaO) reacts vigorously with water, it produces <strong>slaked lime</strong> (calcium hydroxide, Ca(OH)₂), releasing a large amount of heat:</p><p style=\"text-align:center; font-weight:700;\">CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat</p><p>A solution of slaked lime produced by this reaction is applied to whitewash walls. Calcium hydroxide reacts slowly with carbon dioxide in the air to form a thin, shiny layer of <strong>calcium carbonate</strong> (CaCO₃) on the walls:</p><p style=\"text-align:center; font-weight:700;\">Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)</p><p>Calcium carbonate is formed after two to three days of whitewashing and gives a shiny white finish to the walls. Notably, the chemical formula for marble is also <strong>CaCO₃</strong>!</p>",
        "pointsToRemember": [
            "Quicklime = Calcium Oxide (CaO).",
            "Slaked lime = Calcium Hydroxide (Ca(OH)₂).",
            "Limestone / Marble / Chalk / Egg shells = Calcium Carbonate (CaCO₃).",
            "White washing shines after 2-3 days because CaCO₃ takes time to form from atmospheric CO₂."
        ],
        "keyNotes": [
            "Ca(OH)₂ solution is also known as lime water; it turns milky when CO₂ is bubbled through it."
        ],
        "questions": [
            {
                "id": "m08_q01",
                "question": "What is the chemical name and formula of quicklime?",
                "options": [
                    "Calcium carbonate, CaCO₃",
                    "Calcium hydroxide, Ca(OH)₂",
                    "Calcium oxide, CaO",
                    "Calcium sulphate, CaSO₄"
                ],
                "answer": "Calcium oxide, CaO",
                "explanation": "Quicklime is calcium oxide (CaO)."
            },
            {
                "id": "m08_q02",
                "question": "What is the common name of Calcium Hydroxide, Ca(OH)₂?",
                "options": [
                    "Quicklime",
                    "Slaked lime",
                    "Limestone",
                    "Bleaching powder"
                ],
                "answer": "Slaked lime",
                "explanation": "Ca(OH)₂ is commonly called slaked lime."
            },
            {
                "id": "m08_q03",
                "question": "What is observed when water is added to quicklime in a beaker?",
                "options": [
                    "The beaker becomes icy cold",
                    "Vigorous hissing reaction with huge heat release and formation of slaked lime",
                    "No reaction takes place",
                    "A yellow gas is evolved"
                ],
                "answer": "Vigorous hissing reaction with huge heat release and formation of slaked lime",
                "explanation": "The reaction is highly exothermic and hisses as steam is generated."
            },
            {
                "id": "m08_q04",
                "question": "Why do walls whitewashed with slaked lime develop a shiny finish after 2 to 3 days?",
                "options": [
                    "Slaked lime evaporates leaving paint behind",
                    "Ca(OH)₂ reacts with atmospheric CO₂ to form a shiny layer of CaCO₃",
                    "Sunlight bleaches the wall",
                    "Dust settles on the surface"
                ],
                "answer": "Ca(OH)₂ reacts with atmospheric CO₂ to form a shiny layer of CaCO₃",
                "explanation": "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l). Calcium carbonate provides the shiny finish."
            },
            {
                "id": "m08_q05",
                "question": "Which of the following natural substances has the same chemical formula (CaCO₃) as marble?",
                "options": [
                    "Limestone",
                    "Chalk",
                    "Eggshells",
                    "All of the above"
                ],
                "answer": "All of the above",
                "explanation": "Limestone, marble, chalk, and eggshells are all forms of calcium carbonate."
            },
            {
                "id": "m08_q06",
                "question": "What happens when carbon dioxide gas is passed through clear lime water for a short time?",
                "options": [
                    "It turns milky due to insoluble white CaCO₃ precipitate",
                    "It turns dark blue",
                    "It begins to boil instantly",
                    "It catches fire"
                ],
                "answer": "It turns milky due to insoluble white CaCO₃ precipitate",
                "explanation": "Formation of insoluble CaCO₃ turns lime water milky."
            },
            {
                "id": "m08_q07",
                "question": "What happens if excess carbon dioxide gas is continuously bubbled through the milky lime water?",
                "options": [
                    "The milkiness thickens into solid stone",
                    "The milkiness disappears because soluble calcium hydrogen carbonate Ca(HCO₃)₂ is formed",
                    "The solution turns green",
                    "Chlorine gas is released"
                ],
                "answer": "The milkiness disappears because soluble calcium hydrogen carbonate Ca(HCO₃)₂ is formed",
                "explanation": "CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂(aq), which is soluble in water."
            },
            {
                "id": "m08_q08",
                "question": "Is the reaction of quicklime with water exothermic or endothermic?",
                "options": [
                    "Endothermic",
                    "Exothermic",
                    "Neutral",
                    "Photolytic"
                ],
                "answer": "Exothermic",
                "explanation": "A huge amount of heat is liberated; the container becomes extremely hot."
            },
            {
                "id": "m08_q09",
                "question": "What is the chemical equation for the slaking of lime?",
                "options": [
                    "CaO + CO₂ → CaCO₃",
                    "CaO + H₂O → Ca(OH)₂ + Heat",
                    "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
                    "CaCO₃ → CaO + CO₂"
                ],
                "answer": "CaO + H₂O → Ca(OH)₂ + Heat",
                "explanation": "This is the synthesis of slaked lime from quicklime and water."
            },
            {
                "id": "m08_q10",
                "question": "Which of the following is used in white-washing walls?",
                "options": [
                    "Solution of slaked lime (Ca(OH)₂)",
                    "Sulphuric acid",
                    "Copper sulphate",
                    "Barium chloride"
                ],
                "answer": "Solution of slaked lime (Ca(OH)₂)",
                "explanation": "A solution of slaked lime is applied to whitewash walls."
            }
        ]
    },
    {
        "id": "m09",
        "moduleNumber": 9,
        "title": "Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay",
        "tagline": "Reactions in which heat energy is released along with the formation of products.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>Reactions in which heat is released along with the formation of products are called <strong>exothermic chemical reactions</strong>.</p><p>Key foundational examples:</p><ol><li><strong>Burning of natural gas:</strong> CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + Heat</li><li><strong>Respiration:</strong> Food carbohydrates are broken down into glucose. Glucose combines with oxygen in cells to provide energy:<br><strong>C₆H₁₂O₆(aq) + 6O₂(aq) → 6CO₂(aq) + 6H₂O(l) + Energy</strong></li><li><strong>Decomposition of vegetable matter</strong> into compost is also an exothermic process.</li></ol>",
        "pointsToRemember": [
            "Exothermic reactions release thermal energy (ΔH is negative).",
            "Respiration is an exothermic reaction vital for cellular energy (ATP).",
            "Decomposition of organic matter into compost generates heat and is exothermic."
        ],
        "keyNotes": [
            "Natural gas is primarily methane (CH₄)."
        ],
        "questions": [
            {
                "id": "m09_q01",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q02",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q03",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q04",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q05",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q06",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q07",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q08",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q09",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            },
            {
                "id": "m09_q10",
                "question": "Regarding Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Exothermic Reactions — Respiration, Fuel Combustion & Biomass Decay), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m10",
        "moduleNumber": 10,
        "title": "Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄",
        "tagline": "Breaking down a single reactant into multiple simpler substances using heat.",
        "readingTimeMins": 5,
        "theoryHtml": "<p>A reaction in which a single reactant breaks down to give simpler products is called a <strong>decomposition reaction</strong>. General form: <em>AB → A + B</em>.</p><div class=\"activity-box\" style=\"background:#ecfdf5; border-left:4px solid #10b981; padding:12px 16px; margin:14px 0; border-radius:6px;\"><strong>🔬 Activity 1.5 — Heating Ferrous Sulphate:</strong><p>Green ferrous sulphate crystals (FeSO₄·7H₂O) lose their water of crystallization when heated, changing colour to white anhydrous FeSO₄. On further strong heating, it decomposes into ferric oxide, sulphur dioxide, and sulphur trioxide:</p><p style=\"text-align:center; font-weight:700; color:#065f46;\">2FeSO₄(s) --[Heat]--> Fe₂O₃(s) + SO₂(g) + SO₃(g)</p><p>Ferric oxide (Fe₂O₃) is a reddish-brown solid, while SO₂ and SO₃ are gases with the characteristic choking smell of burning sulphur.</p></div>",
        "pointsToRemember": [
            "Decomposition is the exact opposite of combination.",
            "Ferrous sulphate crystals are green (FeSO₄·7H₂O) and turn reddish-brown Fe₂O₃ on thermal decomposition.",
            "SO₂ and SO₃ gases have the pungent odor of burning sulphur."
        ],
        "keyNotes": [
            "Thermal decomposition requires heat energy to break chemical bonds."
        ],
        "questions": [
            {
                "id": "m10_q01",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q02",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q03",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q04",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q05",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q06",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q07",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q08",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q09",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            },
            {
                "id": "m10_q10",
                "question": "Regarding Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Decomposition Reactions — Core Concept & Thermal Breakdown of FeSO₄), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m11",
        "moduleNumber": 11,
        "title": "Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)",
        "tagline": "Industrial manufacturing of quicklime and laboratory identification of nitrogen dioxide.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>Decomposition of <strong>calcium carbonate</strong> (limestone) to calcium oxide (quicklime) and carbon dioxide on heating is an important thermal decomposition reaction used in various industries, including the manufacture of cement:</p><p style=\"text-align:center; font-weight:700;\">CaCO₃(s) --[Heat]--> CaO(s) + CO₂(g)</p><p>In <strong>Activity 1.6</strong>, heating white lead nitrate powder in a boiling tube decomposes with crackling sounds, releasing pungent <strong>brown fumes of nitrogen dioxide (NO₂)</strong> gas and leaving behind a yellow residue of lead oxide (PbO):</p><p style=\"text-align:center; font-weight:700;\">2Pb(NO₃)₂(s) --[Heat]--> 2PbO(s) + 4NO₂(g) + O₂(g)</p>",
        "pointsToRemember": [
            "Decomposition of CaCO₃ yields quicklime (CaO), an essential raw material for cement.",
            "Heating lead nitrate produces visible brown fumes of NO₂ gas.",
            "Lead monoxide (PbO) is a yellow solid residue."
        ],
        "keyNotes": [
            "NO₂ is an acidic, reddish-brown toxic gas."
        ],
        "questions": [
            {
                "id": "m11_q01",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q02",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q03",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q04",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q05",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q06",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q07",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q08",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q09",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m11_q10",
                "question": "Regarding Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes), which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Thermal Decomposition of Limestone (CaCO₃) & Lead Nitrate (NO₂ Fumes)), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m12",
        "moduleNumber": 12,
        "title": "Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)",
        "tagline": "Splitting chemical bonds using direct electric current in an electrolytic cell.",
        "readingTimeMins": 5,
        "theoryHtml": "<p>When electric current is passed through acidified water (Activity 1.7), water decomposes into hydrogen and oxygen gases:</p><p style=\"text-align:center; font-weight:700;\">2H₂O(l) --[Electricity]--> 2H₂(g) + O₂(g)</p><ul><li><strong>Cathode (-ve electrode):</strong> Attracts H⁺ ions; Hydrogen gas (H₂) is collected.</li><li><strong>Anode (+ve electrode):</strong> Attracts OH⁻ ions; Oxygen gas (O₂) is collected.</li><li><strong>Volume Ratio:</strong> Since the water molecule formula is H₂O (2 hydrogen atoms to 1 oxygen atom), the volume of hydrogen gas collected at the cathode is <strong>double (2:1 ratio)</strong> the volume of oxygen gas collected at the anode!</li></ul>",
        "pointsToRemember": [
            "Electrolysis is decomposition carried out by an electric current.",
            "Hydrogen gas is collected at the cathode (negative electrode).",
            "Oxygen gas is collected at the anode (positive electrode).",
            "Volume ratio of H₂ to O₂ is strictly 2:1."
        ],
        "keyNotes": [
            "A few drops of dilute sulphuric acid are added to pure water because pure water is a poor conductor of electricity."
        ],
        "questions": [
            {
                "id": "m12_q01",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q02",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q03",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q04",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q05",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q06",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q07",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q08",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q09",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m12_q10",
                "question": "Regarding Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio), which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Electrolytic Decomposition — Electrolysis of Water (2:1 Volume Ratio)), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m13",
        "moduleNumber": 13,
        "title": "Photolytic (Sunlight) Decomposition — Silver Halides & Photography",
        "tagline": "Light-induced cleavage of silver chloride and silver bromide.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>When white silver chloride (AgCl) is placed in sunlight in a china dish (Activity 1.8), it turns grey due to the decomposition of silver chloride into silver and chlorine by light:</p><p style=\"text-align:center; font-weight:700;\">2AgCl(s) --[Sunlight]--> 2Ag(s) + Cl₂(g)</p><p>Similarly, pale yellow silver bromide (AgBr) behaves in the same way:</p><p style=\"text-align:center; font-weight:700;\">2AgBr(s) --[Sunlight]--> 2Ag(s) + Br₂(g)</p><p>The above photolytic reactions were traditionally used in <strong>black and white photography</strong>!</p>",
        "pointsToRemember": [
            "Photolytic decomposition is triggered by photons of sunlight.",
            "White AgCl turns grey Ag in sunlight.",
            "Pale yellow AgBr decomposes into grey Ag and bromine gas.",
            "Both AgCl and AgBr were used in black and white photographic film emulsions."
        ],
        "keyNotes": [
            "Silver salts are stored in dark amber-colored bottles to prevent accidental photolysis from ambient light."
        ],
        "questions": [
            {
                "id": "m13_q01",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q02",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q03",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q04",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q05",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q06",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q07",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q08",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q09",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            },
            {
                "id": "m13_q10",
                "question": "Regarding Photolytic (Sunlight) Decomposition — Silver Halides & Photography, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Photolytic (Sunlight) Decomposition — Silver Halides & Photography), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m14",
        "moduleNumber": 14,
        "title": "Endothermic Reactions & Energy Absorption in Chemical Cleavage",
        "tagline": "Reactions that require heat, light, or electricity to proceed.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>We have seen that decomposition reactions require energy either in the form of <strong>heat</strong> (thermal), <strong>light</strong> (photolytic), or <strong>electricity</strong> (electrolytic) for breaking down the reactants.</p><p>Reactions in which energy is absorbed are known as <strong>endothermic reactions</strong>. The temperature of the reaction mixture drops during an endothermic process.</p><p>E.g., Mixing barium hydroxide with ammonium chloride in a test tube causes a sharp drop in temperature; the test tube feels icy cold:</p><p style=\"text-align:center; font-weight:700;\">Ba(OH)₂·8H₂O + 2NH₄Cl → BaCl₂ + 2NH₃ + 10H₂O (Endothermic)</p>",
        "pointsToRemember": [
            "Endothermic reactions absorb energy from their surroundings.",
            "All decomposition reactions are endothermic because energy input is mandatory to cleave chemical bonds.",
            "Endothermic processes cause a decrease in ambient temperature."
        ],
        "keyNotes": [
            "Photosynthesis is also an endothermic reaction driven by absorbed solar energy."
        ],
        "questions": [
            {
                "id": "m14_q01",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q02",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q03",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q04",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q05",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q06",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q07",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q08",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q09",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            },
            {
                "id": "m14_q10",
                "question": "Regarding Endothermic Reactions & Energy Absorption in Chemical Cleavage, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Endothermic Reactions & Energy Absorption in Chemical Cleavage), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m15",
        "moduleNumber": 15,
        "title": "Displacement Reactions — Iron Nail in Copper Sulphate Solution",
        "tagline": "When a more reactive metal displaces a less reactive metal from its salt solution.",
        "readingTimeMins": 5,
        "theoryHtml": "<p>A reaction in which a more reactive element displaces or removes another less reactive element from its compound (salt solution) is called a <strong>displacement reaction</strong>.</p><div class=\"activity-box\" style=\"background:#eff6ff; border-left:4px solid #3b82f6; padding:12px 16px; margin:14px 0; border-radius:6px;\"><strong>🔬 Activity 1.9 — Iron Nail in Copper Sulphate:</strong><p>Clean iron nails are immersed in blue copper sulphate (CuSO₄) solution for 20 minutes:</p><p style=\"text-align:center; font-weight:700; color:#1e40af;\">Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)</p><p>Observations:</p><ol><li>The iron nail becomes covered with a <strong>reddish-brown coating of copper metal</strong>.</li><li>The blue color of copper sulphate solution fades and turns into a <strong>light green solution of ferrous sulphate (FeSO₄)</strong>.</li></ol></div>",
        "pointsToRemember": [
            "Iron is more reactive than copper, so it displaces copper from CuSO₄.",
            "Solution changes color from blue to light green.",
            "Iron nail gets coated with reddish-brown copper metal."
        ],
        "keyNotes": [
            "If a copper wire is placed in FeSO₄ solution, no reaction takes place because copper is less reactive than iron."
        ],
        "questions": [
            {
                "id": "m15_q01",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q02",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q03",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q04",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q05",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q06",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q07",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q08",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q09",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            },
            {
                "id": "m15_q10",
                "question": "Regarding Displacement Reactions — Iron Nail in Copper Sulphate Solution, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Displacement Reactions — Iron Nail in Copper Sulphate Solution), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m16",
        "moduleNumber": 16,
        "title": "Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts",
        "tagline": "Comparing relative metallic reactivities using single displacement benchmarks.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>Other prominent displacement reactions from core curriculum:</p><p><strong>1. Zinc with Copper Sulphate:</strong></p><p style=\"text-align:center; font-weight:700;\">Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)</p><p>Zinc displaces copper because zinc is more reactive than copper. The blue color of CuSO₄ completely decolourises to form a colourless zinc sulphate solution.</p><p><strong>2. Lead with Copper Chloride:</strong></p><p style=\"text-align:center; font-weight:700;\">Pb(s) + CuCl₂(aq) → PbCl₂(aq) + Cu(s)</p><p>Lead is more reactive than copper; hence, it displaces copper from copper chloride solution.</p><p><strong>Deduction:</strong> Zinc, iron, and lead are all more reactive elements than copper!</p>",
        "pointsToRemember": [
            "Reactivity order: Zinc > Iron > Lead > Copper.",
            "Zinc displaces copper from CuSO₄, turning blue solution colourless.",
            "Lead displaces copper from green CuCl₂ solution."
        ],
        "keyNotes": [
            "Non-metals also exhibit displacement reactions (e.g., chlorine displacing bromine from bromides)."
        ],
        "questions": [
            {
                "id": "m16_q01",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q02",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q03",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q04",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q05",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q06",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q07",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q08",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q09",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            },
            {
                "id": "m16_q10",
                "question": "Regarding Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Reactivity Series Deductions — Reactions of Zinc & Lead with Copper Salts), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m17",
        "moduleNumber": 17,
        "title": "Double Displacement & Precipitation Reactions (BaSO₄ Formation)",
        "tagline": "Mutual exchange of ions between two ionic compounds in aqueous solution.",
        "readingTimeMins": 5,
        "theoryHtml": "<p>Reactions in which there is an <strong>exchange of ions</strong> between the reactants are called <strong>double displacement reactions</strong>.</p><p>In Activity 1.10, sodium sulphate solution is mixed with barium chloride solution in a test tube:</p><p style=\"text-align:center; font-weight:700;\">Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)</p><p>Observations:</p><ul><li>A <strong>white precipitate of barium sulphate (BaSO₄)</strong> is formed instantly by the reaction of SO₄²⁻ and Ba²⁺ ions.</li><li>Sodium chloride remains dissolved in the solution as spectator ions.</li></ul><p>Any reaction that produces an insoluble precipitate can also be called a <strong>precipitation reaction</strong>.</p>",
        "pointsToRemember": [
            "Double displacement involves mutual exchange of cations and anions.",
            "Precipitate formed: White Barium Sulphate (BaSO₄).",
            "All precipitation reactions are double displacement reactions."
        ],
        "keyNotes": [
            "Another example: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ (Yellow) + 2KNO₃(aq)."
        ],
        "questions": [
            {
                "id": "m17_q01",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q02",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q03",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q04",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q05",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q06",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q07",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q08",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q09",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m17_q10",
                "question": "Regarding Double Displacement & Precipitation Reactions (BaSO₄ Formation), which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Double Displacement & Precipitation Reactions (BaSO₄ Formation)), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m18",
        "moduleNumber": 18,
        "title": "Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)",
        "tagline": "The dual nature of oxidation and reduction operating simultaneously in chemical systems.",
        "readingTimeMins": 5,
        "theoryHtml": "<p><strong>Oxidation:</strong></p><ul><li>Gain of oxygen, or</li><li>Loss of hydrogen, or</li><li>Loss of electrons.</li></ul><p><strong>Reduction:</strong></p><ul><li>Loss of oxygen, or</li><li>Gain of hydrogen, or</li><li>Gain of electrons.</li></ul><p>In <strong>Activity 1.11</strong>, heating brown copper powder in a china dish coats it with black copper(II) oxide:</p><p style=\"text-align:center; font-weight:700;\">2Cu + O₂ --[Heat]--> 2CuO (Oxidation of Cu)</p><p>When hydrogen gas is passed over this heated black CuO, the surface turns brown again as the reverse reaction takes place:</p><p style=\"text-align:center; font-weight:700;\">CuO + H₂ --[Heat]--> Cu + H₂O</p><p>In this reaction, CuO loses oxygen and is <em>reduced</em> to Cu. H₂ gains oxygen and is <em>oxidized</em> to H₂O. Such reactions where one reactant gets oxidized while the other gets reduced are called <strong>oxidation-reduction reactions or REDOX reactions</strong>.</p>",
        "pointsToRemember": [
            "Oxidation = Gain of O or Loss of H.",
            "Reduction = Loss of O or Gain of H.",
            "Redox reaction: Both oxidation and reduction occur simultaneously.",
            "Oxidizing agent: Substance that gives oxygen or removes hydrogen (gets reduced itself).",
            "Reducing agent: Substance that removes oxygen or gives hydrogen (gets oxidized itself)."
        ],
        "keyNotes": [
            "In ZnO + C → Zn + CO: ZnO is reduced to Zn; Carbon is oxidized to CO."
        ],
        "questions": [
            {
                "id": "m18_q01",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q02",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q03",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q04",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q05",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q06",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q07",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q08",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q09",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            },
            {
                "id": "m18_q10",
                "question": "Regarding Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer), which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Oxidation, Reduction & Redox Reactions (Electron & Oxygen Transfer)), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m19",
        "moduleNumber": 19,
        "title": "Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina",
        "tagline": "The destructive atmospheric oxidation of metals and its protective prevention.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>When a metal is attacked by substances around it such as moisture, acids, and oxygen, it is said to corrode and the process is called <strong>corrosion</strong>.</p><p>Prominent examples in curriculum:</p><ol><li><strong>Rusting of Iron:</strong> Shiny iron objects get coated with a reddish-brown flaky powder when left in moist air for some time. Rust is hydrated ferric oxide (Fe₂O₃·xH₂O).</li><li><strong>Black coating on Silver:</strong> Silver reacts with trace sulphur compounds in air to form black silver sulphide (Ag₂S).</li><li><strong>Green coating on Copper:</strong> Copper reacts with moist carbon dioxide in air to form a green coating of basic copper carbonate (CuCO₃·Cu(OH)₂).</li></ol><p>Corrosion causes enormous damage to car bodies, bridges, iron railings, ships, and to all objects made of metals, especially those of iron.</p>",
        "pointsToRemember": [
            "Corrosion is oxidation of metals by atmospheric moisture and gases.",
            "Rust = Reddish-brown hydrated ferric oxide (Fe₂O₃·xH₂O).",
            "Silver tarnish = Black Ag₂S; Copper patina = Green basic copper carbonate.",
            "Corrosion can be prevented by painting, oiling, greasing, galvanizing, or alloying."
        ],
        "keyNotes": [
            "Galvanization is the method of protecting iron from rusting by coating it with a thin layer of zinc."
        ],
        "questions": [
            {
                "id": "m19_q01",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q02",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q03",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q04",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q05",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q06",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q07",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q08",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q09",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            },
            {
                "id": "m19_q10",
                "question": "Regarding Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Corrosion — Rusting Mechanism, Silver Tarnishing & Green Copper Patina), this is the core established concept tested on board examinations."
            }
        ]
    },
    {
        "id": "m20",
        "moduleNumber": 20,
        "title": "Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging",
        "tagline": "Preventing the unpleasant taste and foul odor caused by food oxidation.",
        "readingTimeMins": 4,
        "theoryHtml": "<p>When fats and oils are oxidized, they become <strong>rancid</strong> and their smell and taste change dramatically. This phenomenon is known as <strong>rancidity</strong>.</p><p>Methods to prevent rancidity (Core Curriculum):</p><ol><li><strong>Adding Antioxidants:</strong> Substances which prevent oxidation (antioxidants like BHA, BHT, Vitamin C) are added to foods containing fats and oils.</li><li><strong>Flushing with Inert Gas:</strong> Manufacturers of potato chips flush bags of chips with an unreactive gas such as <strong>nitrogen (N₂)</strong> to prevent the chips from oxidizing.</li><li><strong>Airtight Containers:</strong> Keeping food in airtight containers helps to slow down oxidation by limiting exposure to atmospheric oxygen.</li><li><strong>Refrigeration:</strong> Low temperatures slow down the rate of oxidation reactions.</li></ol>",
        "pointsToRemember": [
            "Rancidity is the aerial oxidation of fats and oils leading to unpleasant odor and sour taste.",
            "Antioxidants retard oxidation reactions.",
            "Potato chip bags are flushed with Nitrogen (N₂) gas to displace oxygen and prevent rancidity.",
            "Airtight packaging and refrigeration extend shelf life."
        ],
        "keyNotes": [
            "Nitrogen is used because it is an inert, unreactive diatomic gas under normal storage conditions."
        ],
        "questions": [
            {
                "id": "m20_q01",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 1)",
                "options": [
                    "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Energy release characterizes exothermic reactions such as cellular respiration and fuel combustion.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q02",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 2)",
                "options": [
                    "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Thermal decomposition requires heat input to cleave a single reactant into simpler fragments.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q03",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 3)",
                "options": [
                    "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Green ferrous sulphate crystals decompose into reddish-brown Fe₂O₃ and pungent gases SO₂ and SO₃.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q04",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 4)",
                "options": [
                    "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Electrolysis of water produces hydrogen at cathode and oxygen at anode in a strict 2:1 volume ratio.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q05",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 5)",
                "options": [
                    "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Photolytic decomposition of AgCl and AgBr in sunlight yields metallic silver and was used in photography.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q06",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 6)",
                "options": [
                    "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Endothermic reactions absorb energy from surroundings, causing ambient temperature to drop.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q07",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 7)",
                "options": [
                    "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Iron displaces copper from blue CuSO₄ solution, yielding light green FeSO₄ and a reddish-brown copper coat.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q08",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 8)",
                "options": [
                    "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Reactivity order confirmed by displacement benchmarks is Zinc > Iron > Lead > Copper.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q09",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 9)",
                "options": [
                    "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Barium chloride and sodium sulphate react by double displacement to yield an insoluble white precipitate of BaSO₄.",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            },
            {
                "id": "m20_q10",
                "question": "Regarding Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging, which of the following statements represents an accurate Class 10 scientific fact? (Concept 10)",
                "options": [
                    "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                    "Reactants in this reaction never undergo changes in oxidation state or color under any circumstances.",
                    "Mass is destroyed during this reaction in open atmospheric containers violating conservation laws.",
                    "Only non-metallic elements can participate in this specific chemical transformation."
                ],
                "answer": "Redox reactions involve simultaneous oxidation (gain of O / loss of H) and reduction (loss of O / gain of H).",
                "explanation": "As established in Chapter 1 (Rancidity — Oxidation of Fats/Oils, Antioxidants & Nitrogen Packaging), this is the core established concept tested on board examinations."
            }
        ]
    }
]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_1_SCIENCE;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_1_SCIENCE;
}
