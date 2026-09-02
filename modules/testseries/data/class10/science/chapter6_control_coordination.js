/* =========================================================================
   ELITE CLASSES — CLASS 10 SCIENCE TEST SERIES
   Chapter 6: Control and Coordination (100 Questions Master Assessment)
   NCERT Standard Assessment with Proper Scientific Typography & Terminology
   Difficulty Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10ScienceChapter6FullBank = {
    id: 'ts_c10_sci_ch6',
    title: 'Chapter 6: Control and Coordination Assessment',
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
        // Direct NCERT Concepts, Anatomy, Definitions, Reflexes & Glands
        // =================================================================
        {
            id: 1,
            question: "Which sensory receptors located in the human tongue are responsible for detecting taste?",
            options: [
                { key: 'A', text: "Olfactory receptors" },
                { key: 'B', text: "Gustatory receptors" },
                { key: 'C', text: "Photoreceptors" },
                { key: 'D', text: "Thermoreceptors" }
            ],
            correct_option: 'B',
            explanation: "Gustatory receptors present in taste buds on the tongue detect sweet, salty, sour, bitter, and umami tastes."
        },
        {
            id: 2,
            question: "Which sensory receptors located in the nasal epithelium are specialized for detecting smell?",
            options: [
                { key: 'A', text: "Gustatory receptors" },
                { key: 'B', text: "Olfactory receptors" },
                { key: 'C', text: "Phonoreceptors" },
                { key: 'D', text: "Baroreceptors" }
            ],
            correct_option: 'B',
            explanation: "Olfactory receptors in the upper nasal cavity detect airborne odorant molecules."
        },
        {
            id: 3,
            question: "In a typical neuron, where is environmental information first acquired as a chemical reaction that creates an electrical impulse?",
            options: [
                { key: 'A', text: "Axon terminal" },
                { key: 'B', text: "Dendritic tip" },
                { key: 'C', text: "Myelin sheath" },
                { key: 'D', text: "Node of Ranvier" }
            ],
            correct_option: 'B',
            explanation: "Information from receptors is first acquired at the dendritic tip of a neuron, initiating an electrical nerve impulse."
        },
        {
            id: 4,
            question: "What is the correct pathway of an electrical impulse travelling through a single neuron?",
            options: [
                { key: 'A', text: "Axon → Cell body → Dendrite → Nerve ending" },
                { key: 'B', text: "Dendrite → Cell body (Cyton) → Axon → Axonal nerve ending" },
                { key: 'C', text: "Nerve ending → Axon → Dendrite → Cell body" },
                { key: 'D', text: "Cell body → Dendrite → Axon → Synapse" }
            ],
            correct_option: 'B',
            explanation: "An impulse travels unidirectionally: Dendrite receives signal → Cell body (cyton) integrates → Axon conducts → Axon terminal releases neurotransmitter."
        },
        {
            id: 5,
            question: "The microscopic physical gap across which chemicals diffuse between two adjacent neurons is called a:",
            options: [
                { key: 'A', text: "Dendrite" },
                { key: 'B', text: "Synapse" },
                { key: 'C', text: "Axon" },
                { key: 'D', text: "Neuromuscular plate" }
            ],
            correct_option: 'B',
            explanation: "A synapse is the microscopic junction between the terminal arborization of one neuron and the dendrite of the adjacent neuron."
        },
        {
            id: 6,
            question: "What happens at the synapse when an electrical nerve impulse reaches the axonal nerve ending?",
            options: [
                { key: 'A', text: "The neuron bursts" },
                { key: 'B', text: "Chemical neurotransmitters are released that diffuse across the synaptic cleft and generate an electrical impulse in the next neuron" },
                { key: 'C', text: "Electricity jumps as an electric spark" },
                { key: 'D', text: "The impulse is completely destroyed" }
            ],
            correct_option: 'B',
            explanation: "At the axon terminus, the electrical impulse triggers exocytosis of neurotransmitter vesicles across the synaptic cleft."
        },
        {
            id: 7,
            question: "A sudden, involuntary, protective motor response to an environmental stimulus without conscious thinking is known as a:",
            options: [
                { key: 'A', text: "Voluntary action" },
                { key: 'B', text: "Reflex action" },
                { key: 'C', text: "Tropic movement" },
                { key: 'D', text: "Conditioned response" }
            ],
            correct_option: 'B',
            explanation: "A reflex action is a rapid, automatic, unconscious response to a peripheral stimulus (e.g. withdrawing hand from flame)."
        },
        {
            id: 8,
            question: "Where are reflex arcs primarily formed and integrated in the human central nervous system for rapid response?",
            options: [
                { key: 'A', text: "Spinal cord" },
                { key: 'B', text: "Cerebrum" },
                { key: 'C', text: "Cerebellum" },
                { key: 'D', text: "Medulla" }
            ],
            correct_option: 'A',
            explanation: "Reflex arcs are formed directly in the spinal cord where sensory and motor neurons interface via relay interneurons."
        },
        {
            id: 9,
            question: "What are the components of a complete reflex arc in the correct functional sequence?",
            options: [
                { key: 'A', text: "Receptor → Motor neuron → Spinal cord → Sensory neuron → Effector" },
                { key: 'B', text: "Receptor (Skin) → Sensory neuron → Relay neuron in Spinal Cord → Motor neuron → Effector (Muscle)" },
                { key: 'C', text: "Effector → Sensory neuron → Brain → Motor neuron → Receptor" },
                { key: 'D', text: "Spinal cord → Receptor → Sensory neuron → Motor neuron" }
            ],
            correct_option: 'B',
            explanation: "Reflex sequence: Stimulus → Receptor → Sensory afferent neuron → Relay neuron in Spinal Cord → Motor efferent neuron → Effector organ (muscle)."
        },
        {
            id: 10,
            question: "Which two major organs constitute the Central Nervous System (CNS) of human beings?",
            options: [
                { key: 'A', text: "Brain and Spinal cord" },
                { key: 'B', text: "Cranial nerves and Spinal nerves" },
                { key: 'C', text: "Heart and Lungs" },
                { key: 'D', text: "Sympathetic and Parasympathetic nerves" }
            ],
            correct_option: 'A',
            explanation: "The Central Nervous System (CNS) consists of the Brain and the Spinal Cord."
        },
        {
            id: 11,
            question: "The Peripheral Nervous System (PNS) is composed of which two sets of nerves?",
            options: [
                { key: 'A', text: "Cranial nerves (arising from brain) and Spinal nerves (arising from spinal cord)" },
                { key: 'B', text: "Optic and Auditory nerves only" },
                { key: 'C', text: "Motor neurons only" },
                { key: 'D', text: "Sensory nerves only" }
            ],
            correct_option: 'A',
            explanation: "The PNS comprises 12 pairs of Cranial nerves arising from the brain and 31 pairs of Spinal nerves arising from the spinal cord."
        },
        {
            id: 12,
            question: "Which part of the human brain is the main thinking centre and receives sensory impulses for sight, hearing, and smell?",
            options: [
                { key: 'A', text: "Fore-brain (Cerebrum)" },
                { key: 'B', text: "Mid-brain" },
                { key: 'C', text: "Hind-brain (Cerebellum)" },
                { key: 'D', text: "Medulla" }
            ],
            correct_option: 'A',
            explanation: "The fore-brain (cerebrum) is the seat of consciousness, intelligence, voluntary control, memory, and sensory perception."
        },
        {
            id: 13,
            question: "The sensation of hunger and the feeling of satiety ('feeling full after eating') is controlled by a centre located in the:",
            options: [
                { key: 'A', text: "Fore-brain" },
                { key: 'B', text: "Mid-brain" },
                { key: 'C', text: "Cerebellum" },
                { key: 'D', text: "Spinal cord" }
            ],
            correct_option: 'A',
            explanation: "The hunger and satiety regulating centres are situated in the hypothalamus within the fore-brain."
        },
        {
            id: 14,
            question: "Which part of the hind-brain is responsible for precision of voluntary actions, walking in a straight line, and maintaining body posture and balance?",
            options: [
                { key: 'A', text: "Cerebrum" },
                { key: 'B', text: "Cerebellum" },
                { key: 'C', text: "Medulla" },
                { key: 'D', text: "Pons" }
            ],
            correct_option: 'B',
            explanation: "The cerebellum coordinates muscular precision, equilibrium, and physical posture."
        },
        {
            id: 15,
            question: "Involuntary actions such as blood pressure, salivation, swallowing, and vomiting are controlled by which part of the hind-brain?",
            options: [
                { key: 'A', text: "Cerebrum" },
                { key: 'B', text: "Cerebellum" },
                { key: 'C', text: "Medulla oblongata" },
                { key: 'D', text: "Hypothalamus" }
            ],
            correct_option: 'C',
            explanation: "The medulla oblongata in the hind-brain houses autonomous reflex centres controlling blood pressure, respiration, salivation, and vomiting."
        },
        {
            id: 16,
            question: "How is the delicate human brain physically protected inside the head from mechanical shocks and injuries?",
            options: [
                { key: 'A', text: "By thick hair only" },
                { key: 'B', text: "It sits inside a bony cranium (skull) and is surrounded by shock-absorbing cerebrospinal fluid (CSF) within meninges" },
                { key: 'C', text: "By solid cartilage" },
                { key: 'D', text: "By muscle layers only" }
            ],
            correct_option: 'B',
            explanation: "The brain is encased within the bony cranium and cushioned by cerebrospinal fluid (CSF) inside meningeal membranes."
        },
        {
            id: 17,
            question: "The spinal cord is protected from physical injury by which bony structure running down the back?",
            options: [
                { key: 'A', text: "Rib cage" },
                { key: 'B', text: "Vertebral column (Backbone)" },
                { key: 'C', text: "Pelvis" },
                { key: 'D', text: "Clavicle" }
            ],
            correct_option: 'B',
            explanation: "The neural canal of the vertebral column (backbone) encloses and protects the spinal cord."
        },
        {
            id: 18,
            question: "How do muscle cells physically contract and change shape in response to nervous electrical impulses?",
            options: [
                { key: 'A', text: "They lose all their water" },
                { key: 'B', text: "Special contractile proteins (actin and myosin) change their shape and arrangement in the cell, causing the muscle fibre to shorten" },
                { key: 'C', text: "Muscle cells divide into two" },
                { key: 'D', text: "Muscle cells turn into bone" }
            ],
            correct_option: 'B',
            explanation: "Nerve impulses trigger intracellular calcium release, causing actin and myosin filaments to slide over each other and shorten the muscle cell."
        },
        {
            id: 19,
            question: "The immediate drooping and folding of leaves in the sensitive plant (Mimosa pudica / Chhui-mui) upon touch is an example of:",
            options: [
                { key: 'A', text: "Growth-dependent phototropism" },
                { key: 'B', text: "Nastic movement independent of growth (Thigmonasty)" },
                { key: 'C', text: "Geotropism" },
                { key: 'D', text: "Chemotropism" }
            ],
            correct_option: 'B',
            explanation: "Mimosa leaf drooping is a rapid, non-directional thigmonastic movement caused by turgor pressure changes in pulvini cells, independent of growth."
        },
        {
            id: 20,
            question: "How do plant cells in the sensitive plant (Mimosa pudica) change their shape to cause leaf drooping without muscle tissue?",
            options: [
                { key: 'A', text: "By breaking cell walls" },
                { key: 'B', text: "By changing the amount of water in them, resulting in swelling or shrinking" },
                { key: 'C', text: "By contracting muscle proteins" },
                { key: 'D', text: "By producing electricity" }
            ],
            correct_option: 'B',
            explanation: "Plant cell movement is mediated by rapid osmotic turgor shifts: water leaves the lower pulvinus cells, shrinking them and causing the leaf to droop."
        },
        {
            id: 21,
            question: "The bending of plant shoots towards light and bending of roots away from light is known as:",
            options: [
                { key: 'A', text: "Geotropism" },
                { key: 'B', text: "Phototropism" },
                { key: 'C', text: "Hydrotropism" },
                { key: 'D', text: "Chemotropism" }
            ],
            correct_option: 'B',
            explanation: "Phototropism is directional growth in response to light. Shoots show positive phototropism; roots show negative phototropism."
        },
        {
            id: 22,
            question: "The downward growth of plant roots towards the pull of gravity and upward growth of shoots away from earth is called:",
            options: [
                { key: 'A', text: "Phototropism" },
                { key: 'B', text: "Geotropism" },
                { key: 'C', text: "Thigmotropism" },
                { key: 'D', text: "Hydrotropism" }
            ],
            correct_option: 'B',
            explanation: "Geotropism is directional growth in response to gravity. Roots are positively geotropic; shoots are negatively geotropic."
        },
        {
            id: 23,
            question: "Which of the following is a classic example of chemotropism in flowering plants?",
            options: [
                { key: 'A', text: "Bending of shoot towards window" },
                { key: 'B', text: "Growth of a pollen tube down the style towards the ovule in the ovary" },
                { key: 'C', text: "Drooping of Mimosa leaves" },
                { key: 'D', text: "Coiling of tendril around a stick" }
            ],
            correct_option: 'B',
            explanation: "Growth of the pollen tube toward the embryo sac within an ovule is guided by sugary chemical attractants secreted by the synergids (chemotropism)."
        },
        {
            id: 24,
            question: "The directional growth movement of plant roots towards soil moisture and water sources is called:",
            options: [
                { key: 'A', text: "Phototropism" },
                { key: 'B', text: "Hydrotropism" },
                { key: 'C', text: "Geotropism" },
                { key: 'D', text: "Thigmonasty" }
            ],
            correct_option: 'B',
            explanation: "Hydrotropism is the directional positive growth response of root tips toward higher moisture gradients in soil."
        },
        {
            id: 25,
            question: "Which plant hormone is synthesized at the growing shoot tip and promotes cell elongation causing phototropic bending?",
            options: [
                { key: 'A', text: "Abscisic acid" },
                { key: 'B', text: "Auxin" },
                { key: 'C', text: "Cytokinin" },
                { key: 'D', text: "Ethylene" }
            ],
            correct_option: 'B',
            explanation: "Auxin (e.g. IAA) synthesised at the apical meristem diffuses to the shaded side, stimulating elongation of cells away from light so the stem bends towards light."
        },
        {
            id: 26,
            question: "Which plant hormone, like auxin, promotes stem growth and elongation of internodes?",
            options: [
                { key: 'A', text: "Gibberellins" },
                { key: 'B', text: "Abscisic acid" },
                { key: 'C', text: "Insulin" },
                { key: 'D', text: "Adrenaline" }
            ],
            correct_option: 'A',
            explanation: "Gibberellins promote stem elongation, bolting, and breaking of seed dormancy."
        },
        {
            id: 27,
            question: "Which plant hormone is present in greatest concentration in areas of rapid cell division, such as developing fruits and seeds?",
            options: [
                { key: 'A', text: "Abscisic acid" },
                { key: 'B', text: "Cytokinins" },
                { key: 'C', text: "Auxin" },
                { key: 'D', text: "Thyroxin" }
            ],
            correct_option: 'B',
            explanation: "Cytokinins actively stimulate cytokinesis (cell division) and are abundant in actively proliferating tissues like root apices, developing seeds, and fruits."
        },
        {
            id: 28,
            question: "Which plant hormone acts as a growth inhibitor and induces wilting and abscission of leaves?",
            options: [
                { key: 'A', text: "Auxin" },
                { key: 'B', text: "Gibberellin" },
                { key: 'C', text: "Abscisic acid (ABA)" },
                { key: 'D', text: "Cytokinin" }
            ],
            correct_option: 'C',
            explanation: "Abscisic acid (ABA) is a plant stress hormone that inhibits growth, causes stomatal closure during drought, and promotes leaf senescence and wilting."
        },
        {
            id: 29,
            question: "How do pea plant tendrils coil tightly around a physical support wire or bamboo stick (Thigmotropism)?",
            options: [
                { key: 'A', text: "The side touching the support grows faster" },
                { key: 'B', text: "Auxin diffuses away from the contact point; the part of the tendril away from the support grows much faster than the contact part, causing it to circle and cling" },
                { key: 'C', text: "The tendril produces sticky glue" },
                { key: 'D', text: "The tendril undergoes electric shock" }
            ],
            correct_option: 'B',
            explanation: "Contact with support inhibits cell elongation on the inner touching surface, while auxins stimulate rapid elongation on the outer side, coiling the tendril."
        },
        {
            id: 30,
            question: "Which emergency hormone is secreted directly into the blood by adrenal glands in scary or stress situations ('Fight or Flight' response)?",
            options: [
                { key: 'A', text: "Thyroxin" },
                { key: 'B', text: "Adrenaline" },
                { key: 'C', text: "Insulin" },
                { key: 'D', text: "Oestrogen" }
            ],
            correct_option: 'B',
            explanation: "Adrenaline (epinephrine) from the adrenal medulla prepares the body for physical emergency by elevating heart rate, blood pressure, and skeletal muscle blood flow."
        },
        {
            id: 31,
            question: "What physiological changes occur in the body when adrenaline is released into the bloodstream?",
            options: [
                { key: 'A', text: "Heart rate slows down and breathing stops" },
                { key: 'B', text: "Heart beats faster, breathing rate increases, and blood is diverted from skin/digestive tract to skeletal muscles" },
                { key: 'C', text: "Blood pressure drops to zero" },
                { key: 'D', text: "Digestive juices double their secretion" }
            ],
            correct_option: 'B',
            explanation: "Adrenaline accelerates cardiac output, contracts smooth muscles around visceral arterioles (diverting blood to skeletal muscles), and increases ventilation rate."
        },
        {
            id: 32,
            question: "Which mineral element is essential for the thyroid gland to synthesize thyroxin hormone?",
            options: [
                { key: 'A', text: "Iron" },
                { key: 'B', text: "Iodine" },
                { key: 'C', text: "Calcium" },
                { key: 'D', text: "Sodium" }
            ],
            correct_option: 'B',
            explanation: "Iodine is a vital inorganic constituent of thyroxin (tetraiodothyronine / T4) produced by the thyroid gland."
        },
        {
            id: 33,
            question: "Deficiency of dietary iodine in humans causes enlargement of the thyroid gland, leading to the clinical condition called:",
            options: [
                { key: 'A', text: "Diabetes" },
                { key: 'B', text: "Goitre (Swollen neck)" },
                { key: 'C', text: "Dwarfism" },
                { key: 'D', text: "Gigantism" }
            ],
            correct_option: 'B',
            explanation: "Iodine deficiency prevents thyroxin synthesis, prompting pituitary TSH hypersecretion and compensatory hypertrophy of the thyroid gland (endemic goitre)."
        },
        {
            id: 34,
            question: "What is the primary physiological function of thyroxin hormone secreted by the thyroid gland?",
            options: [
                { key: 'A', text: "Regulates carbohydrate, protein, and fat basal metabolism to provide the optimal balance for growth" },
                { key: 'B', text: "Lowers blood glucose levels" },
                { key: 'C', text: "Produces sperm cells" },
                { key: 'D', text: "Controls pupil dilation" }
            ],
            correct_option: 'A',
            explanation: "Thyroxin sets the basal metabolic rate (BMR), regulating cellular respiration, tissue differentiation, and nutrient metabolism."
        },
        {
            id: 35,
            question: "Growth hormone (GH) is secreted by which endocrine gland located at the base of the brain?",
            options: [
                { key: 'A', text: "Thyroid gland" },
                { key: 'B', text: "Pituitary gland" },
                { key: 'C', text: "Adrenal gland" },
                { key: 'D', text: "Pancreas" }
            ],
            correct_option: 'B',
            explanation: "The anterior pituitary gland secretes Growth Hormone (somatotropin), which stimulates cellular hypertrophy, mitotic division, and skeletal growth."
        },
        {
            id: 36,
            question: "Deficiency of growth hormone during childhood leads to which medical condition?",
            options: [
                { key: 'A', text: "Gigantism" },
                { key: 'B', text: "Pituitary Dwarfism" },
                { key: 'C', text: "Goitre" },
                { key: 'D', text: "Diabetes" }
            ],
            correct_option: 'B',
            explanation: "Hyposecretion of GH in prepubertal children impairs bone and tissue elongation, causing proportionate dwarfism."
        },
        {
            id: 37,
            question: "Hypersecretion (excessive secretion) of growth hormone during childhood leads to:",
            options: [
                { key: 'A', text: "Dwarfism" },
                { key: 'B', text: "Gigantism" },
                { key: 'C', text: "Goitre" },
                { key: 'D', text: "Diabetes insipidus" }
            ],
            correct_option: 'B',
            explanation: "Excessive pituitary GH secretion before epiphyseal plate fusion results in abnormal vertical skeletal overgrowth (gigantism)."
        },
        {
            id: 38,
            question: "Which male sex hormone secreted by the testes is responsible for the physical changes associated with puberty in boys?",
            options: [
                { key: 'A', text: "Oestrogen" },
                { key: 'B', text: "Testosterone" },
                { key: 'C', text: "Progesterone" },
                { key: 'D', text: "Thyroxin" }
            ],
            correct_option: 'B',
            explanation: "Testosterone produced by testicular Leydig cells stimulates secondary male sexual characteristics (deepening of voice, facial hair, muscular build) and spermatogenesis."
        },
        {
            id: 39,
            question: "Which female sex hormone secreted by ovaries is responsible for secondary sexual characteristics and menstrual cycle regulation in girls?",
            options: [
                { key: 'A', text: "Testosterone" },
                { key: 'B', text: "Oestrogen and Progesterone" },
                { key: 'C', text: "Adrenaline" },
                { key: 'D', text: "Insulin" }
            ],
            correct_option: 'B',
            explanation: "Oestrogen controls female secondary sexual traits and uterine proliferation; progesterone prepares and maintains the uterine endometrium for pregnancy."
        },
        {
            id: 40,
            question: "Which hormone is produced by beta cells of the islets of Langerhans in the pancreas to lower and regulate blood sugar levels?",
            options: [
                { key: 'A', text: "Glucagon" },
                { key: 'B', text: "Insulin" },
                { key: 'C', text: "Thyroxin" },
                { key: 'D', text: "Adrenaline" }
            ],
            correct_option: 'B',
            explanation: "Insulin facilitates cellular uptake and storage of glucose as glycogen in liver and muscle cells, lowering blood glucose concentration."
        },
        {
            id: 41,
            question: "A chronic deficiency or malfunction of insulin hormone causes high blood glucose and glucose in urine, a condition known as:",
            options: [
                { key: 'A', text: "Goitre" },
                { key: 'B', text: "Diabetes mellitus" },
                { key: 'C', text: "Dwarfism" },
                { key: 'D', text: "Hypertension" }
            ],
            correct_option: 'B',
            explanation: "Insulin insufficiency prevents glucose utilization, causing hyperglycemia and glucosuria (Diabetes mellitus)."
        },
        {
            id: 42,
            question: "The precise timing and quantity of hormone release in the human body is regulated by an automatic regulatory system called a:",
            options: [
                { key: 'A', text: "Reflex arc" },
                { key: 'B', text: "Feedback mechanism" },
                { key: 'C', text: "Photoperiod" },
                { key: 'D', text: "Peristalsis" }
            ],
            correct_option: 'B',
            explanation: "Negative feedback mechanisms adjust endocrine secretion: rising blood glucose triggers insulin release; as glucose drops, insulin output is down-regulated."
        },
        {
            id: 43,
            question: "Which part of the brain secretes releasing hormones (like Growth Hormone Releasing Factor) that stimulate the pituitary gland?",
            options: [
                { key: 'A', text: "Cerebellum" },
                { key: 'B', text: "Hypothalamus" },
                { key: 'C', text: "Medulla" },
                { key: 'D', text: "Pons" }
            ],
            correct_option: 'B',
            explanation: "The hypothalamus synthesizes neurohormonal releasing and inhibiting factors that regulate anterior pituitary gland secretions."
        },
        {
            id: 44,
            question: "Which of the following is a plant growth inhibitor?",
            options: [
                { key: 'A', text: "Auxin" },
                { key: 'B', text: "Gibberellin" },
                { key: 'C', text: "Cytokinin" },
                { key: 'D', text: "Abscisic acid" }
            ],
            correct_option: 'D',
            explanation: "Abscisic acid (ABA) is a phytohormone that inhibits growth, induces dormancy, and promotes leaf abscission."
        },
        {
            id: 45,
            question: "Which part of the neuron transmits impulses AWAY from the cell body toward a synapse or effector muscle?",
            options: [
                { key: 'A', text: "Dendrite" },
                { key: 'B', text: "Axon" },
                { key: 'C', text: "Nucleus" },
                { key: 'D', text: "Receptor" }
            ],
            correct_option: 'B',
            explanation: "The axon is the single long cylindrical cytoplasmic extension conducting impulses away from the cyton to the synapse."
        },
        {
            id: 46,
            question: "Why does the mouth water reflexively when we see or smell appetizing food?",
            options: [
                { key: 'A', text: "It is a voluntary conscious decision" },
                { key: 'B', text: "It is an unconditioned autonomic involuntary reflex mediated through cranial nerves from the brainstem" },
                { key: 'C', text: "Salivary glands contract mechanically due to jaw pressure" },
                { key: 'D', text: "Food touches the stomach directly" }
            ],
            correct_option: 'B',
            explanation: "Olfactory and visual sensory inputs trigger parasympathetic salivary reflex centres in the medulla to stimulate salivary secretion."
        },
        {
            id: 47,
            question: "What is the primary function of the cranial meninges containing cerebrospinal fluid (CSF)?",
            options: [
                { key: 'A', text: "To store blood" },
                { key: 'B', text: "To provide buoyancy and absorb mechanical shocks protecting neural tissues" },
                { key: 'C', text: "To digest glucose" },
                { key: 'D', text: "To produce electrical sparks" }
            ],
            correct_option: 'B',
            explanation: "Meninges and CSF create a hydromechanical cushion that absorbs external impacts, preventing brain contusion against the skull."
        },
        {
            id: 48,
            question: "Which endocrine gland is located on top of each kidney?",
            options: [
                { key: 'A', text: "Thyroid gland" },
                { key: 'B', text: "Adrenal gland" },
                { key: 'C', text: "Pituitary gland" },
                { key: 'D', text: "Thymus" }
            ],
            correct_option: 'B',
            explanation: "The paired suprarenal adrenal glands cap the superior pole of each kidney."
        },
        {
            id: 49,
            question: "Which part of the human brain controls respiration, heartbeat, and peristalsis?",
            options: [
                { key: 'A', text: "Cerebrum" },
                { key: 'B', text: "Cerebellum" },
                { key: 'C', text: "Medulla oblongata and Pons in hind-brain" },
                { key: 'D', text: "Olfactory lobes" }
            ],
            correct_option: 'C',
            explanation: "The brainstem (medulla and pons) houses autonomic cardiovascular, respiratory, and vasomotor reflex pacemakers."
        },
        {
            id: 50,
            question: "A plant kept in a horizontal orientation exhibits upward bending of shoot and downward bending of root. This demonstrates:",
            options: [
                { key: 'A', text: "Chemotropism" },
                { key: 'B', text: "Negative geotropism of shoot and positive geotropism of root" },
                { key: 'C', text: "Thigmotropism" },
                { key: 'D', text: "Hydrotropism" }
            ],
            correct_option: 'B',
            explanation: "Gravitational auxin redistribution causes horizontal shoots to bend upward (-ve geotropism) and roots to curve downward (+ve geotropism)."
        },

        // =================================================================
        // TIER 2: MEDIUM QUESTIONS (Q51 - Q60)
        // Single-Step Mechanisms, Synaptic Dynamics & Hormone Functions
        // =================================================================
        {
            id: 51,
            question: "Why does blocking the nasal passages (pinching nose) during a cold or when eating food reduce the appreciation of food flavour?",
            options: [
                { key: 'A', text: "Gustatory receptors are damaged by a cold" },
                { key: 'B', text: "Perception of flavour is a complex combined olfactory-gustatory sensation; blocking airflow prevents volatile food aromas from reaching olfactory receptors" },
                { key: 'C', text: "Cold acidifies saliva" },
                { key: 'D', text: "Sugar fails to dissolve in mouth" }
            ],
            correct_option: 'B',
            explanation: "Flavour perception integrates tongue taste (sweet, sour, salty, bitter) with retro-nasal olfactory aroma detection. Nasal obstruction eliminates olfactory input."
        },
        {
            id: 52,
            question: "What are the two distinct categories of plant movements?",
            options: [
                { key: 'A', text: "Voluntary and involuntary movements" },
                { key: 'B', text: "Movements dependent on growth (tropic) and movements independent of growth (nastic)" },
                { key: 'C', text: "Muscular and skeletal movements" },
                { key: 'D', text: "Blood-driven and air-driven movements" }
            ],
            correct_option: 'B',
            explanation: "Plants exhibit growth-dependent directional movements (tropisms: phototropism, geotropism) and growth-independent rapid turgor movements (nastic: Mimosa drooping)."
        },
        {
            id: 53,
            question: "Why do cells NOT transmit electrical impulses continually without any pause?",
            options: [
                { key: 'A', text: "Neurons run out of blood" },
                { key: 'B', text: "After generating and conducting an impulse, a neuron requires a refractory recovery interval to reset its ion channels and resting membrane potential" },
                { key: 'C', text: "Brain turns off every second" },
                { key: 'D', text: "Synapses melt under continuous current" }
            ],
            correct_option: 'B',
            explanation: "Following an action potential, refractory periods (sodium channel inactivation and potassium repolarization) prevent continuous firing."
        },
        {
            id: 54,
            question: "Why is chemical communication via hormones an essential evolutionary complement to electrical nervous communication?",
            options: [
                { key: 'A', text: "Hormones move faster than electricity" },
                { key: 'B', text: "Electrical impulses only reach cells connected by nerves, whereas hormones diffuse via bloodstream to reach every tissue steadily and persistently" },
                { key: 'C', text: "Hormones destroy all nerve cells" },
                { key: 'D', text: "Nerves only exist in the brain" }
            ],
            correct_option: 'B',
            explanation: "Nervous impulses are rapid and localized to innervated targets. Hormonal signals circulate systemically, providing sustained coordination across non-innervated cells."
        },
        {
            id: 55,
            question: "In the negative feedback regulation of blood sugar, what happens when blood glucose levels return to normal following insulin secretion?",
            options: [
                { key: 'A', text: "Pancreatic beta cells increase insulin output" },
                { key: 'B', text: "Pancreatic cells detect normalized glucose and down-regulate insulin secretion to prevent hypoglycemia" },
                { key: 'C', text: "Pituitary gland secretes adrenaline" },
                { key: 'D', text: "Kidneys excrete all remaining insulin" }
            ],
            correct_option: 'B',
            explanation: "Decreased blood glucose reduces stimulatory influx into pancreatic beta cells, shutting off further insulin release."
        },
        {
            id: 56,
            question: "What is the difference between a voluntary action (like writing or moving a chair) and an involuntary action (like heartbeat or peristalsis)?",
            options: [
                { key: 'A', text: "Voluntary actions are executed unconsciously; involuntary actions require thinking" },
                { key: 'B', text: "Voluntary actions are initiated by conscious cerebral thinking via somatic nerves; involuntary actions are regulated autonomously by mid-brain and hind-brain" },
                { key: 'C', text: "Voluntary actions do not involve muscles" },
                { key: 'D', text: "Involuntary actions occur only in plants" }
            ],
            correct_option: 'B',
            explanation: "Voluntary actions involve conscious cortical decision-making acting on skeletal muscles; involuntary actions are autonomous visceral activities managed by the brainstem."
        },
        {
            id: 57,
            question: "Why do sunflower heads track the sun across the sky during the day?",
            options: [
                { key: 'A', text: "It is an immediate nastic turgor response without growth" },
                { key: 'B', text: "It is a slow growth-related phototropic movement mediated by differential auxin redistribution along the stem" },
                { key: 'C', text: "The flower contains magnetic iron" },
                { key: 'D', text: "Sunflowers move by animal muscles" }
            ],
            correct_option: 'B',
            explanation: "Heliotropism in young sunflower stems is driven by rhythmic, asymmetric auxin-mediated stem cell elongation following the solar azimuth."
        },
        {
            id: 58,
            question: "What would be the clinical consequence if a person suffers a severe mechanical injury to their spinal cord?",
            options: [
                { key: 'A', text: "Loss of memory only" },
                { key: 'B', text: "Disruption of both sensory input signals traveling to the brain and motor commands traveling from the brain to peripheral effectors below the injury level, causing paralysis" },
                { key: 'C', text: "Complete blindness" },
                { key: 'D', text: "Stomach stops secreting acid" }
            ],
            correct_option: 'B',
            explanation: "Spinal cord transection severs ascending sensory tracts and descending motor tracts, causing loss of sensation and voluntary motor paralysis below the lesion."
        },
        {
            id: 59,
            question: "What is the key functional distinction between an endocrine gland and an exocrine gland?",
            options: [
                { key: 'A', text: "Endocrine glands secrete enzymes; exocrine glands secrete hormones" },
                { key: 'B', text: "Endocrine glands are ductless and release hormones directly into bloodstream; exocrine glands secrete products through ducts onto epithelial surfaces" },
                { key: 'C', text: "Endocrine glands are found only in brain" },
                { key: 'D', text: "Exocrine glands have no cells" }
            ],
            correct_option: 'B',
            explanation: "Endocrine glands (pituitary, thyroid, adrenal) secrete hormones directly into vascular capillaries; exocrine glands (salivary, sweat) discharge via ducts."
        },
        {
            id: 60,
            question: "Which gland in the human body functions as BOTH an exocrine gland (secreting digestive enzymes) and an endocrine gland (secreting hormones)?",
            options: [
                { key: 'A', text: "Thyroid gland" },
                { key: 'B', text: "Pancreas (Heterocrine gland)" },
                { key: 'C', text: "Pituitary gland" },
                { key: 'D', text: "Adrenal gland" }
            ],
            correct_option: 'B',
            explanation: "The pancreas is a composite gland: exocrine acini secrete pancreatic digestive juice into the duodenum; endocrine islets of Langerhans secrete insulin and glucagon into blood."
        },

        // =================================================================
        // TIER 3: HARD QUESTIONS (Q61 - Q70)
        // Multi-Step Neural Circuits, Tropism Mechanics & Hormonal Pathologies
        // =================================================================
        {
            id: 61,
            question: "In the classic phototropism experiment, if the apical coleoptile tip of an oat seedling is cut off (decapitated) and light is shone from one side, what happens?",
            options: [
                { key: 'A', text: "The stump bends immediately towards light" },
                { key: 'B', text: "The seedling stops bending towards light because the site of auxin synthesis (shoot apex) has been removed" },
                { key: 'C', text: "The seedling bends away from light" },
                { key: 'D', text: "The roots turn into leaves" }
            ],
            correct_option: 'B',
            explanation: "Went's experiment demonstrated that the shoot apex is the primary site of auxin perception and synthesis; without the tip, asymmetric auxin distribution cannot occur."
        },
        {
            id: 62,
            question: "If an agar block containing absorbed auxin is placed unilaterally on one side of a decapitated seedling kept in complete darkness, what will be observed?",
            options: [
                { key: 'A', text: "The shoot remains straight" },
                { key: 'B', text: "The shoot bends away from the side with the agar block because auxin stimulates cellular elongation on that side" },
                { key: 'C', text: "The seedling dies instantly" },
                { key: 'D', text: "Roots grow out of the top" }
            ],
            correct_option: 'B',
            explanation: "Auxin diffuses from the agar into that half of the stem, accelerating cell expansion on that flank and forcing curvature away from the agar block even in the dark."
        },
        {
            id: 63,
            question: "Why do nerve impulses cross a chemical synapse in ONLY ONE direction (from axon terminal to dendrite, never in reverse)?",
            options: [
                { key: 'A', text: "Dendrites contain toxic acids" },
                { key: 'B', text: "Neurotransmitter storage vesicles are present exclusively in presynaptic axon endings, and specific neurotransmitter receptor sites are located solely on postsynaptic dendritic membranes" },
                { key: 'C', text: "Electricity can only flow downhill" },
                { key: 'D', text: "Myelin sheaths block reverse currents" }
            ],
            correct_option: 'B',
            explanation: "Synaptic transmission is unidirectional due to anatomical asymmetry: neurotransmitter vesicles exist only presynaptically, and matching ligand-gated receptors exist only postsynaptically."
        },
        {
            id: 64,
            question: "In the human brain, which specific anatomical structure acts as the relay station connecting the cerebrum, cerebellum, and spinal cord while coordinating visual and auditory reflex arcs?",
            options: [
                { key: 'A', text: "Mid-brain" },
                { key: 'B', text: "Corpus callosum" },
                { key: 'C', text: "Olfactory lobe" },
                { key: 'D', text: "Frontal bone" }
            ],
            correct_option: 'A',
            explanation: "The mid-brain contains the corpora quadrigemina and cerebral peduncles, connecting forebrain with hindbrain and mediating pupillary and acoustic reflexes."
        },
        {
            id: 65,
            question: "How does the autonomic nervous system interact with adrenaline during sudden sympathetic activation?",
            options: [
                { key: 'A', text: "Sympathetic nerves stimulate the adrenal medulla to secrete adrenaline, amplifying and sustaining systemic 'fight-or-flight' physiological responses" },
                { key: 'B', text: "Adrenaline destroys all sympathetic nerves" },
                { key: 'C', text: "Parasympathetic nerves secrete adrenaline" },
                { key: 'D', text: "Adrenaline stops all nerve signals" }
            ],
            correct_option: 'A',
            explanation: "Sympathetic preganglionic splanchnic fibres directly innervate chromaffin cells in the adrenal medulla, triggering a systemic adrenaline surge for survival arousal."
        },
        {
            id: 66,
            question: "Why do doctors advise diabetic patients to limit refined dietary carbohydrates while administering subcutaneous insulin injections?",
            options: [
                { key: 'A', text: "Carbohydrates destroy insulin" },
                { key: 'B', text: "In diabetes, insufficient endogenous insulin or insulin resistance impairs cellular glucose uptake; restricting dietary carbohydrates prevents acute postprandial glycemic spikes while injected insulin facilitates baseline glucose utilization" },
                { key: 'C', text: "Carbohydrates convert into adrenaline" },
                { key: 'D', text: "Insulin cannot dissolve in water" }
            ],
            correct_option: 'B',
            explanation: "Dietary carb control reduces glycemic load; exogenous insulin lowers blood glucose by promoting glycogenesis and cellular transport, preventing ketoacidosis and vascular damage."
        },
        {
            id: 67,
            question: "How does geotropism operate at the cellular level in horizontally placed roots?",
            options: [
                { key: 'A', text: "Auxin accumulates on the upper side of the root" },
                { key: 'B', text: "Gravity causes statoliths to sediment, accumulating high auxin concentrations on the lower side; in roots (unlike stems), high auxin inhibits cell elongation, so the upper cells grow faster, bending the root downward" },
                { key: 'C', text: "Roots have muscle fibres" },
                { key: 'D', text: "Root cells dissolve in soil" }
            ],
            correct_option: 'B',
            explanation: "Roots are hyper-sensitive to auxin: supra-optimal auxin on the lower side inhibits cell expansion, allowing faster elongation on top and causing downward root bending."
        },
        {
            id: 68,
            question: "Which of the following endocrine gland dysfunctions is correctly matched with its clinical manifestation?",
            options: [
                { key: 'A', text: "Thyroid hyposecretion in adults → Dwarfism" },
                { key: 'B', text: "Pancreatic beta-cell failure → Diabetes mellitus" },
                { key: 'C', text: "Pituitary hypersecretion in childhood → Goitre" },
                { key: 'D', text: "Adrenal failure → Gigantism" }
            ],
            correct_option: 'B',
            explanation: "Destruction or dysfunction of pancreatic beta cells results in absolute insulin deficiency and Diabetes mellitus."
        },
        {
            id: 69,
            question: "Why is an intoxicated person under the influence of heavy alcohol intake unable to walk in a straight line or coordinate motor balance?",
            options: [
                { key: 'A', text: "Alcohol temporarily impairs and depresses the coordination centres of the cerebellum" },
                { key: 'B', text: "Alcohol destroys the bones in legs" },
                { key: 'C', text: "Alcohol stimulates the thyroid gland" },
                { key: 'D', text: "Alcohol increases muscle strength too much" }
            ],
            correct_option: 'A',
            explanation: "Ethanol depresses cerebellar Purkinje cell networks, disrupting cerebellar coordination of voluntary motor output, proprioception, and equilibrium (ataxia)."
        },
        {
            id: 70,
            question: "What is the role of association areas in the human cerebral cortex?",
            options: [
                { key: 'A', text: "They only pump blood" },
                { key: 'B', text: "They integrate incoming sensory information with stored memories and inputs from other receptors to make decisions and formulate motor responses" },
                { key: 'C', text: "They secrete digestive enzymes" },
                { key: 'D', text: "They control reflex actions without nerves" }
            ],
            correct_option: 'B',
            explanation: "Cortical association areas are higher-order integrative networks linking primary sensory and motor cortices with memory, learning, and reasoning centres."
        },

        // =================================================================
        // TIER 4: TRICKY QUESTIONS (Q71 - Q90)
        // Subtle NCERT Footnotes, Distractors & Complex Concepts
        // =================================================================
        {
            id: 71,
            question: "Which of the following pairs of plant movements are BOTH independent of growth?",
            options: [
                { key: 'A', text: "Bending of shoot towards light and downward growth of root" },
                { key: 'B', text: "Folding of Mimosa pudica leaves on touch and stomatal opening/closing by guard cell turgor" },
                { key: 'C', text: "Pollen tube growth and tendril coiling" },
                { key: 'D', text: "Seed germination and sunflower tracking" }
            ],
            correct_option: 'B',
            explanation: "Both Mimosa leaf folding and stomatal opening/closing are non-growth reversible turgor-driven nastic movements mediated by osmotic ion fluxes."
        },
        {
            id: 72,
            question: "Why does the pupil of the human eye constrict automatically when exposed to bright sunlight?",
            options: [
                { key: 'A', text: "It is a voluntary movement" },
                { key: 'B', text: "It is an involuntary autonomic reflex (pupillary light reflex) mediated through the mid-brain to protect the retina from excessive light" },
                { key: 'C', text: "It is a growth movement" },
                { key: 'D', text: "The cornea dissolves in bright light" }
            ],
            correct_option: 'B',
            explanation: "Bright light stimulates retinal photoreceptors $\\rightarrow$ optic nerve $\\rightarrow$ pretectal nucleus in the mid-brain $\\rightarrow$ oculomotor parasympathetic constrictor pupillae."
        },
        {
            id: 73,
            question: "Which of the following hormones is synthesized by the hypothalamus and transported to the posterior pituitary for release?",
            options: [
                { key: 'A', text: "Insulin" },
                { key: 'B', text: "Antidiuretic hormone (Vasopressin) and Oxytocin" },
                { key: 'C', text: "Thyroxin" },
                { key: 'D', text: "Testosterone" }
            ],
            correct_option: 'B',
            explanation: "Hypothalamic neurosecretory cells synthesize ADH and oxytocin, which are stored in and released from the neurohypophysis (posterior pituitary)."
        },
        {
            id: 74,
            question: "What is the crucial difference between the movement of a sensitive plant's leaf and the movement of our legs when walking?",
            options: [
                { key: 'A', text: "Plant movement uses muscle proteins; human walking uses water" },
                { key: 'B', text: "Plant movement is driven by water turgor changes without specialised muscle or nervous tissue; human walking is a voluntary action controlled by cerebrum and cerebellum using specialized contractile muscle proteins and nerves" },
                { key: 'C', text: "Walking is a reflex action only" },
                { key: 'D', text: "Plants walk at night" }
            ],
            correct_option: 'B',
            explanation: "Plant movements rely on cell swelling/shrinking via osmotic water fluxes without nerves/muscles. Human locomotion involves central voluntary nervous integration and actomyosin cross-bridge cycling."
        },
        {
            id: 75,
            question: "Which part of the brain controls the rhythmic regulation of breathing and works in conjunction with the medulla?",
            options: [
                { key: 'A', text: "Pons" },
                { key: 'B', text: "Cerebellum" },
                { key: 'C', text: "Frontal lobe" },
                { key: 'D', text: "Thalamus" }
            ],
            correct_option: 'A',
            explanation: "The pneumotaxic and apneustic respiratory centres located in the pons modulate medullary respiratory rhythmicity."
        },
        {
            id: 76,
            question: "Why does the administration of iodised table salt prevent goitre in populations living in mountainous or sub-Himalayan regions?",
            options: [
                { key: 'A', text: "Mountain air lacks oxygen" },
                { key: 'B', text: "Mountain soils are leached of iodine by glacial runoff, resulting in iodine-deficient local crops; iodised salt supplies the dietary iodine required for thyroxin synthesis" },
                { key: 'C', text: "Iodine is a protein" },
                { key: 'D', text: "Salt cools the thyroid" }
            ],
            correct_option: 'B',
            explanation: "Soils in mountainous regions lack iodine. Consuming potassium iodate/iodide-fortified salt prevents thyroid hypertrophy and endemic goitre."
        },
        {
            id: 77,
            question: "When a person accidentally steps on a sharp thorn, they instantly pull their foot away and then shout in pain. What explains this sequence of events?",
            options: [
                { key: 'A', text: "Thinking occurred before the reflex" },
                { key: 'B', text: "The spinal reflex arc executes immediate muscular withdrawal in milliseconds, while collateral sensory neurons simultaneously transmit pain impulses up the spinal cord to the cerebral cortex for conscious perception and vocalization" },
                { key: 'C', text: "Thorn acts directly on brain" },
                { key: 'D', text: "Foot muscles have their own brain" }
            ],
            correct_option: 'B',
            explanation: "The local polysynaptic spinal reflex completes withdrawal before ascending spinothalamic tracts reach the somatosensory cortex for conscious pain awareness."
        },
        {
            id: 78,
            question: "Which of the following statements regarding plant hormones (phytohormones) is INCORRECT?",
            options: [
                { key: 'A', text: "Auxins promote apical cell elongation" },
                { key: 'B', text: "Gibberellins stimulate stem elongation" },
                { key: 'C', text: "Cytokinins inhibit cell division and cause premature leaf fall" },
                { key: 'D', text: "Abscisic acid promotes dormancy and stomatal closure" }
            ],
            correct_option: 'C',
            explanation: "Statement C is false. Cytokinins PROMOTE cell division and delay leaf senescence; Abscisic acid promotes leaf fall."
        },
        {
            id: 79,
            question: "In the human endocrine system, which gland is responsible for regulating blood calcium and phosphate levels?",
            options: [
                { key: 'A', text: "Parathyroid glands (secreting Parathormone)" },
                { key: 'B', text: "Adrenal cortex" },
                { key: 'C', text: "Pineal gland" },
                { key: 'D', text: "Pancreas" }
            ],
            correct_option: 'A',
            explanation: "Parathyroid glands secrete parathormone (PTH), which elevates serum calcium by stimulating bone resorption and renal calcium reabsorption."
        },
        {
            id: 80,
            question: "Why do auxins cause tendrils of climbing plants (like peas) to circle around a bamboo stake upon contact?",
            options: [
                { key: 'A', text: "Auxin is destroyed by light" },
                { key: 'B', text: "Mechanical touch triggers rapid migration of auxin to the non-contact side, accelerating outer cellular elongation relative to the inner touching side" },
                { key: 'C', text: "The bamboo stake secretes sugar" },
                { key: 'D', text: "The tendril stops growing" }
            ],
            correct_option: 'B',
            explanation: "Thigmotropic touch signals cause basipetal/lateral auxin translocation to the outer flank, promoting asymmetric differential growth."
        },
        {
            id: 81,
            question: "What is the primary function of the hormone melatonin secreted by the pineal gland?",
            options: [
                { key: 'A', text: "Digests proteins" },
                { key: 'B', text: "Regulates 24-hour diurnal biological rhythms (sleep-wake cycle) and body temperature" },
                { key: 'C', text: "Increases blood sugar" },
                { key: 'D', text: "Causes dwarfism" }
            ],
            correct_option: 'B',
            explanation: "Melatonin produced by the pineal gland regulates circadian sleep-wake cycles, pigmentation, and seasonal biological clocks."
        },
        {
            id: 82,
            question: "What happens when a potted plant is placed horizontally in a dark box illuminated ONLY from a small pinhole at the bottom?",
            options: [
                { key: 'A', text: "Shoot grows upward only" },
                { key: 'B', text: "Shoot bends downward towards the light source (positive phototropism overriding negative geotropism)" },
                { key: 'C', text: "Plant turns into roots" },
                { key: 'D', text: "Zero growth occurs" }
            ],
            correct_option: 'B',
            explanation: "Phototropic response to directional illumination is strong and can reorient shoot growth toward the light vector even if it directs growth downward."
        },
        {
            id: 83,
            question: "Which of the following is a symptom of hypothyroidism in infants (Cretinism)?",
            options: [
                { key: 'A', text: "Excessive height" },
                { key: 'B', text: "Stunted physical growth and severe mental/cognitive impairment" },
                { key: 'C', text: "High blood pressure" },
                { key: 'D', text: "Excessive energy" }
            ],
            correct_option: 'B',
            explanation: "Congenital thyroid deficiency in infancy impairs neurogenesis and skeletal development, resulting in cretinism."
        },
        {
            id: 84,
            question: "Which division of the autonomic nervous system is responsible for 'Rest and Digest' activities (slowing heart rate, stimulating salivation and digestion)?",
            options: [
                { key: 'A', text: "Sympathetic nervous system" },
                { key: 'B', text: "Parasympathetic nervous system" },
                { key: 'C', text: "Somatic sensory system" },
                { key: 'D', text: "Voluntary motor cortex" }
            ],
            correct_option: 'B',
            explanation: "The parasympathetic system conserves energy, slowing cardiac rate and promoting gastrointestinal peristalsis and secretion."
        },
        {
            id: 85,
            question: "What is the primary role of the thymus gland in the human body?",
            options: [
                { key: 'A', text: "Secretes insulin" },
                { key: 'B', text: "Secretes thymosin, which aids in the maturation and differentiation of T-lymphocytes for cell-mediated immunity" },
                { key: 'C', text: "Filters urine" },
                { key: 'D', text: "Regulates calcium" }
            ],
            correct_option: 'B',
            explanation: "The thymus produces thymosin peptide hormones essential for T-cell immunocompetence during early life."
        },
        {
            id: 86,
            question: "Why do plants wilt and shed leaves during severe prolonged drought?",
            options: [
                { key: 'A', text: "Excessive cytokinin production" },
                { key: 'B', text: "Elevated levels of abscisic acid (ABA) close stomata to conserve water and trigger senescence and leaf abscission" },
                { key: 'C', text: "Auxin melts the leaves" },
                { key: 'D', text: "Roots absorb soil nitrogen" }
            ],
            correct_option: 'B',
            explanation: "Water stress synthesizes ABA in roots and leaves, triggering guard cell potassium efflux (stomatal closure) and abscission zone development."
        },
        {
            id: 87,
            question: "What prevents the transmission of electrical nerve impulses from jumping uncontrollably between adjacent parallel axon fibres in a nerve bundle?",
            options: [
                { key: 'A', text: "High blood flow" },
                { key: 'B', text: "Insulating fatty myelin sheaths covering the axons" },
                { key: 'C', text: "Bone layers" },
                { key: 'D', text: "Air pockets" }
            ],
            correct_option: 'B',
            explanation: "Myelin sheaths produced by Schwann cells/oligodendrocytes provide electrical insulation, preventing cross-talk and enabling saltatory conduction."
        },
        {
            id: 88,
            question: "In the male reproductive system, which hormone is required both for developing secondary sexual traits and for stimulating the production of sperms?",
            options: [
                { key: 'A', text: "Insulin" },
                { key: 'B', text: "Testosterone" },
                { key: 'C', text: "Thyroxin" },
                { key: 'D', text: "Adrenaline" }
            ],
            correct_option: 'B',
            explanation: "Testosterone acts locally on testicular seminiferous tubules to stimulate spermatogenesis and systemically to induce male virilization."
        },
        {
            id: 89,
            question: "Which of the following actions is a pure cranial reflex (integrated in the brainstem rather than the spinal cord)?",
            options: [
                { key: 'A', text: "Knee-jerk reflex" },
                { key: 'B', text: "Blinking of eyes when an object approaches, and salivation at the sight of food" },
                { key: 'C', text: "Withdrawing hand from a hot kettle" },
                { key: 'D', text: "Stepping back from a thorn" }
            ],
            correct_option: 'B',
            explanation: "Corneal blink and salivation reflexes are mediated through cranial nerves (trigeminal, facial, glossopharyngeal) via brainstem centres."
        },
        {
            id: 90,
            question: "Why do ripened fruits (like bananas or apples) accelerate the ripening of other unripened fruits kept nearby in the same basket?",
            options: [
                { key: 'A', text: "They secrete liquid auxin" },
                { key: 'B', text: "Ripening fruits release the gaseous phytohormone ethylene, which diffuses through air to stimulate ripening enzymes in adjacent fruits" },
                { key: 'C', text: "They absorb all oxygen" },
                { key: 'D', text: "They produce heat" }
            ],
            correct_option: 'B',
            explanation: "Ethylene (C₂H₄) is a volatile gaseous plant hormone that promotes fruit softening, starch conversion to sugars, and chlorophyll breakdown."
        },

        // =================================================================
        // TIER 5: VERY VERY HARD QUESTIONS (Q91 - Q100)
        // Advanced Multi-Concept Synthesis, Neurophysiology & Endocrine Feedback
        // =================================================================
        {
            id: 91,
            question: "In a laboratory experiment on action potential conduction, if a motor axon is treated with a neurotoxin that selectively blocks voltage-gated potassium (K⁺) channels, what will be the direct electrophysiological consequence?",
            options: [
                { key: 'A', text: "Resting membrane potential becomes positive immediately" },
                { key: 'B', text: "The neuron can depolarize, but repolarization back to the resting negative potential is severely prolonged/blocked, preventing generation of subsequent impulses" },
                { key: 'C', text: "Neurotransmitter vesicles explode" },
                { key: 'D', text: "The axon conducts at the speed of light" }
            ],
            correct_option: 'B',
            explanation: "Voltage-gated K⁺ channels mediate outward repolarising current. Blocking them prevents rapid membrane repolarisation, maintaining prolonged refractory depolarization."
        },
        {
            id: 92,
            question: "Consider a patient presenting with elevated blood thyroxin (T4) levels, tachycardia, heat intolerance, weight loss despite increased appetite, and a low level of thyroid-stimulating hormone (TSH). What is the underlying endocrine mechanism?",
            options: [
                { key: 'A', text: "Hypothalamic tumor producing excess TSH" },
                { key: 'B', text: "Primary hyperthyroidism (Graves' disease) where autonomous excess thyroxin exerts powerful negative feedback inhibition on the pituitary gland, suppressing TSH" },
                { key: 'C', text: "Dietary iodine deficiency" },
                { key: 'D', text: "Failure of adrenal glands" }
            ],
            correct_option: 'B',
            explanation: "In primary hyperthyroidism, autonomous overproduction of thyroxin by the thyroid gland triggers strong negative feedback at the anterior pituitary, suppressing TSH secretion."
        },
        {
            id: 93,
            question: "A plant seedling is grown inside a horizontally rotating clinostat (a device that rotates slowly around a horizontal axis at 1 rpm). What pattern of shoot and root growth will be observed?",
            options: [
                { key: 'A', text: "Shoot bends upward, root bends downward" },
                { key: 'B', text: "Both shoot and root continue to grow straight horizontally without curving, because continuous rotation equally distributes gravitational stimulus on all sides" },
                { key: 'C', text: "Roots grow into the shoot" },
                { key: 'D', text: "Plant stops cell division entirely" }
            ],
            correct_option: 'B',
            explanation: "A clinostat continuously rotates the plant, neutralizing the unidirectional gravity vector. Auxin is uniformly distributed on all sides, preventing geotropic curvature."
        },
        {
            id: 94,
            question: "In synaptic transmission, what is the precise biochemical sequence triggered when an action potential arrives at the presynaptic axon terminal?",
            options: [
                { key: 'A', text: "Voltage-gated Ca²⁺ channels open $\\rightarrow$ Ca²⁺ influx $\\rightarrow$ Synaptic vesicle exocytosis $\\rightarrow$ Neurotransmitter diffusion across cleft $\\rightarrow$ Binding to ligand-gated postsynaptic receptors $\\rightarrow$ Postsynaptic ion influx" },
                { key: 'B', text: "K⁺ channels open $\\rightarrow$ Vesicles dissolve in blood $\\rightarrow$ Dendrite contracts" },
                { key: 'C', text: "DNA is transcribed into neurotransmitters $\\rightarrow$ Electrical spark across synapse" },
                { key: 'D', text: "Myelin melts $\\rightarrow$ Current jumps to next cell body" }
            ],
            correct_option: 'A',
            explanation: "Depolarization opens presynaptic Ca²⁺ channels. Calcium influx triggers SNARE-mediated fusion of acetylcholine vesicles, releasing transmitter to gate postsynaptic ionophores."
        },
        {
            id: 95,
            question: "Why does the removal of the apical bud (decapitation / pruning) in tea plantations and garden hedges promote dense, bushy lateral growth?",
            options: [
                { key: 'A', text: "Pruning stimulates abscisic acid synthesis" },
                { key: 'B', text: "The apical bud produces high auxin concentrations that maintain 'apical dominance' by suppressing lateral axillary buds; removing the apex eliminates auxin inhibition, allowing cytokinins to stimulate lateral branching" },
                { key: 'C', text: "Pruning causes the roots to grow into branches" },
                { key: 'D', text: "Sunlight enters the roots directly" }
            ],
            correct_option: 'B',
            explanation: "Apical dominance is mediated by basipetal auxin flow from the shoot apex. Decapitation removes this apical auxin clamp, allowing endogenous cytokinins to activate dormant axillary buds."
        },
        {
            id: 96,
            question: "A neurosurgeon testing cortical localization stimulates a specific region on the precentral gyrus of the left cerebral cortex during awake brain surgery. What motor response will be elicited in the patient?",
            options: [
                { key: 'A', text: "Involuntary pupil constriction in left eye" },
                { key: 'B', text: "Contraction of voluntary skeletal muscles on the contralateral (right) side of the patient's body" },
                { key: 'C', text: "Sudden secretion of insulin from pancreas" },
                { key: 'D', text: "Complete loss of hearing in left ear" }
            ],
            correct_option: 'B',
            explanation: "The primary motor cortex on the precentral gyrus maps motor outputs that decussate (cross over) in the medullary pyramids, controlling contralateral voluntary musculature."
        },
        {
            id: 97,
            question: "In a patient with Type 1 Diabetes Mellitus, autoimmune destruction of which specific cell population in the pancreas leads to an absolute inability to synthesize insulin?",
            options: [
                { key: 'A', text: "Alpha cells of islets" },
                { key: 'B', text: "Beta cells ($\\beta$-cells) of the islets of Langerhans" },
                { key: 'C', text: "Pancreatic acinar cells" },
                { key: 'D', text: "Ductal epithelial cells" }
            ],
            correct_option: 'B',
            explanation: "Type 1 Diabetes involves cell-mediated autoimmune destruction of pancreatic beta cells, abolishing proinsulin synthesis."
        },
        {
            id: 98,
            question: "What is the physiological basis of 'saltatory conduction' along myelinated nerve fibres compared to continuous unmyelinated conduction?",
            options: [
                { key: 'A', text: "Myelin conducts electricity like copper wire" },
                { key: 'B', text: "Myelin sheaths insulate the axon except at Nodes of Ranvier, forcing action potentials to jump from node to node, vastly increasing conduction velocity up to 120 m/s with minimal energy expenditure" },
                { key: 'C', text: "Salt crystals in myelin create sparks" },
                { key: 'D', text: "Myelinated fibres do not use sodium ions" }
            ],
            correct_option: 'B',
            explanation: "Myelin provides high transmembrane resistance and low capacitance. Voltage-gated Na⁺ channels clustered at Ranvier nodes allow depolarizing currents to jump electrotonically between nodes."
        },
        {
            id: 99,
            question: "Consider an experimental seedling exposed to unilateral blue light (450 nm) versus red light (660 nm). Why does phototropic bending occur vigorously under blue light but negligibly under red light?",
            options: [
                { key: 'A', text: "Auxin only absorbs red light" },
                { key: 'B', text: "Phototropin photoreceptors at the shoot tip specifically absorb blue light wavelengths to trigger asymmetric lateral auxin phosphorylation and translocation" },
                { key: 'C', text: "Red light destroys all plant cells" },
                { key: 'D', text: "Blue light freezes the stem" }
            ],
            correct_option: 'B',
            explanation: "Phototropins (phot1/phot2) are blue-light flavoprotein photoreceptors whose kinase activation establishes the lateral auxin concentration gradient driving phototropism."
        },
        {
            id: 100,
            question: "How does the hypothalamus-pituitary-adrenal (HPA) axis differ functionally from the immediate sympathetic-adrenal medullary (SAM) pathway during severe prolonged stress?",
            options: [
                { key: 'A', text: "SAM provides immediate neural-adrenaline fight-or-flight within seconds, while HPA releases CRH $\\rightarrow$ ACTH $\\rightarrow$ Cortisol over hours to sustain gluconeogenesis and stress adaptation" },
                { key: 'B', text: "HPA works in milliseconds; SAM takes days" },
                { key: 'C', text: "Both systems secrete identical amounts of insulin" },
                { key: 'D', text: "SAM only functions in plants" }
            ],
            correct_option: 'A',
            explanation: "The SAM axis provides instantaneous catecholamine surge via sympathetic splanchnic nerves. The HPA axis provides sustained hormonal glucocorticoid release (cortisol) to mobilize energy stores."
        }
    ]
};
