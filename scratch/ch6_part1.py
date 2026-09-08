# -*- coding: utf-8 -*-
"""
CH6 Part 1: Modules 1 to 10
Control and Coordination (Class 10 Science)
"""
import json

with open('scratch/ch6_bank_questions.json', 'r', encoding='utf-8') as f:
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

# Module 1
m01 = {
  "id": "m01", "moduleNumber": 1,
  "title": "Nervous System & Sensory Receptors: Gustatory & Olfactory Detection",
  "tagline": "How organisms perceive environmental stimuli through specialized sensory organs.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Living organisms do not exist in isolation. Changes in the surrounding environment to which an organism responds and reacts are called <strong>stimuli</strong> (singular: stimulus), such as light, sound, smell, taste, heat, and touch. The working together of various organs in a systematic manner to produce an appropriate response is called <strong>coordination</strong>.</p>

<h3>Specialized Sensory Receptors:</h3>
<p>In animals, control and coordination are mediated by two complementary systems: the <strong>nervous system</strong> and the <strong>endocrine system</strong>. Specialized groups of cells that detect environmental stimuli are located in our sense organs and are called <strong>receptors</strong>:</p>
<ul>
  <li><strong>Gustatory Receptors:</strong> Located in the taste buds of the <strong>tongue</strong>, specialized for detecting different <strong>tastes</strong> (sweet, salty, sour, bitter, and umami).</li>
  <li><strong>Olfactory Receptors:</strong> Situated in the epithelial lining of the <strong>nasal cavity</strong>, specialized for detecting chemical <strong>smells and odours</strong>.</li>
  <li><strong>Photoreceptors:</strong> Located in the retina of the <strong>eyes</strong>, specialized for detecting <strong>light</strong> and visual images.</li>
  <li><strong>Phonoreceptors:</strong> Located in the inner <strong>ears</strong>, specialized for detecting <strong>sound</strong> vibrations and maintaining balance.</li>
  <li><strong>Thermoreceptors / Tangoreceptors:</strong> Located in the <strong>skin</strong>, detecting <strong>heat, cold, and touch/pressure</strong>.</li>
</ul>

<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Daily Life Connection: Food Taste During a Head Cold</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Why does food seem completely bland and tasteless when you have a severe common cold? True food flavour is a combined perception of taste (from tongue gustatory receptors) and aroma (from nasal olfactory receptors). When mucus blocks the olfactory epithelium, sensory input from smell is lost, and the brain perceives only basic taste, making food feel dull!</p>
</div>
""",
  "pointsToRemember": [
    "Receptors in sense organs detect external stimuli (light, sound, smell, taste, heat).",
    "Gustatory receptors in the tongue detect taste; Olfactory receptors in the nose detect smell.",
    "Perception of food flavour relies on combined inputs from both gustatory and olfactory receptors."
  ],
  "keyNotes": [
    "Exam Highlight: Know the locations and functions of Gustatory receptors (tongue - taste) and Olfactory receptors (nose - smell)."
  ],
  "questions": [
    get_bank_q(1, "m01_q01"), get_bank_q(2, "m01_q02"), get_bank_q(3, "m01_q03"),
    get_bank_q(4, "m01_q04"), get_bank_q(5, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "Which sensory receptors located on the human tongue are responsible for detecting chemical tastes in food?",
      "options": [
        "Olfactory receptors",
        "Gustatory receptors",
        "Photoreceptors",
        "Phonoreceptors"
      ],
      "answer": "Gustatory receptors",
      "explanation": "Gustatory receptors in the lingual taste buds detect dissolved chemical tastes."
    },
    {
      "id": "m01_q07",
      "question": "Why does food taste noticeably bland and unappealing when a person is suffering from a severe head cold with a blocked nose?",
      "options": [
        "Salivary glands stop working completely.",
        "Excess mucus blocks olfactory receptors in the nasal cavity, eliminating the crucial olfactory component of flavour perception.",
        "Teeth lose their enamel.",
        "The tongue turns into bone."
      ],
      "answer": "Excess mucus blocks olfactory receptors in the nasal cavity, eliminating the crucial olfactory component of flavour perception.",
      "explanation": "Flavour perception relies on olfactory smell signals; when blocked by cold mucus, food tastes flat."
    },
    {
      "id": "m01_q08",
      "question": "What type of sensory receptors are located inside the human inner ear to detect auditory acoustic vibrations?",
      "options": [
        "Photoreceptors",
        "Phonoreceptors",
        "Gustatory receptors",
        "Thermoreceptors"
      ],
      "answer": "Phonoreceptors",
      "explanation": "Phonoreceptors (hair cells of the organ of Corti in the cochlea) convert sound waves into nerve impulses."
    },
    {
      "id": "m01_q09",
      "question": "What scientific term describes any detectable environmental change (such as sudden heat or a bright flash) to which an organism responds?",
      "options": [
        "Metabolism",
        "Stimulus (plural: stimuli)",
        "Transpiration",
        "Dialysis"
      ],
      "answer": "Stimulus (plural: stimuli)",
      "explanation": "A stimulus is any internal or external change in the environment that evokes a physiological or behavioral response."
    },
    {
      "id": "m01_q10",
      "question": "Where are the primary olfactory receptors located in the human body?",
      "options": [
        "In the retina of the eye",
        "In the mucous membrane lining the upper nasal cavity",
        "In the eardrum",
        "In the stomach lining"
      ],
      "answer": "In the mucous membrane lining the upper nasal cavity",
      "explanation": "Olfactory sensory neurons are embedded in the olfactory epithelium at the roof of the nasal cavity."
    }
  ]
}
modules_1_to_10.append(m01)

# Module 2
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Structure of a Neuron: Dendrites, Cyton, Axon & Nerve Endings",
  "tagline": "The structural and functional unit of the nervous system and unidirectional signal flow.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The <strong>neuron</strong> (nerve cell) is the structural and functional unit of the nervous system. Neurons are specialized cells capable of receiving, conducting, and transmitting electrical impulses. A typical neuron consists of three distinct regions:</p>

<h3>Anatomical Components of a Neuron:</h3>
<ol>
  <li><strong>Dendrites:</strong><br>
  Fine, branched, finger-like projections radiating outward from the cell body. The tip of a dendrite acquires information from receptors or adjacent neurons, converting chemical stimuli into an <strong>electrical impulse</strong>.</li>
  <li><strong>Cell Body (Cyton or Soma):</strong><br>
  The expanded central region containing a prominent nucleus and granular cytoplasm with cell organelles. It integrates incoming signals from dendrites.</li>
  <li><strong>Axon:</strong><br>
  A single, long, cylindrical cytoplasmic fiber extending from the cyton. The axon conducts the electrical impulse rapidly away from the cell body toward its destination. In many neurons, the axon is insulated by a protective fatty sheath called the <strong>myelin sheath</strong>, which drastically speeds up impulse conduction.</li>
  <li><strong>Nerve Endings (Axon Terminals):</strong><br>
  The distal branched tip of the axon containing microscopic bulbous swellings called synaptic knobs filled with chemical neurotransmitter vesicles.</li>
</ol>

<h3>Unidirectional Electrical Transmission Pathway:</h3>
<p>Within a single neuron, the electrical nerve impulse travels strictly in <strong>one direction</strong>:</p>
<p style="text-align:center; font-weight:bold; font-size:1.1em; color:#1e3a8a;">
  $\text{Dendrite} \longrightarrow \text{Cell Body (Cyton)} \longrightarrow \text{Axon} \longrightarrow \text{Axon Terminal (Nerve Ending)}$
</p>
""",
  "pointsToRemember": [
    "A neuron consists of Dendrites (receive information), Cyton (cell body with nucleus), and an Axon (conducts impulse away).",
    "Signal conduction inside a neuron is strictly unidirectional: Dendrite → Cyton → Axon → Nerve ending.",
    "The fatty myelin sheath insulates axons to accelerate nerve impulse conduction."
  ],
  "keyNotes": [
    "Board Diagram Classic: Practice drawing a clean labelled diagram of a neuron showing Dendrites, Cell Body, Nucleus, Axon, Myelin Sheath, and Nerve Endings."
  ],
  "questions": [
    get_bank_q(6, "m02_q01"), get_bank_q(7, "m02_q02"), get_bank_q(8, "m02_q03"),
    get_bank_q(9, "m02_q04"), get_bank_q(10, "m02_q05"),
    {
      "id": "m02_q06",
      "question": "Which part of a neuron initially acquires information or detects environmental stimuli at its tip?",
      "options": [
        "Axon terminal",
        "Dendrite",
        "Myelin sheath",
        "Synaptic cleft"
      ],
      "answer": "Dendrite",
      "explanation": "Dendritic tips possess receptor membranes that detect signals and trigger an electrical impulse."
    },
    {
      "id": "m02_q07",
      "question": "What is the correct sequence of nerve impulse transmission through a single neuron?",
      "options": [
        "Axon -> Cyton -> Dendrite",
        "Dendrite -> Cyton (cell body) -> Axon -> Nerve ending",
        "Cyton -> Dendrite -> Axon",
        "Nerve ending -> Axon -> Dendrite"
      ],
      "answer": "Dendrite -> Cyton (cell body) -> Axon -> Nerve ending",
      "explanation": "Nerve impulses are strictly unidirectional: acquired by dendrites, passed to the cell body, conducted down the axon to nerve endings."
    },
    {
      "id": "m02_q08",
      "question": "What is the primary biological function of the fatty myelin sheath covering the axons of many neurons?",
      "options": [
        "To digest dead neurons",
        "To provide electrical insulation that drastically accelerates the speed of nerve impulse propagation",
        "To produce red blood cells",
        "To generate cerebrospinal fluid"
      ],
      "answer": "To provide electrical insulation that drastically accelerates the speed of nerve impulse propagation",
      "explanation": "Myelin acts as an electrical insulator, facilitating fast saltatory conduction from node to node."
    },
    {
      "id": "m02_q09",
      "question": "What is the single, long, cylindrical cytoplasmic fiber that conducts an electrical nerve impulse away from the neuron cell body called?",
      "options": [
        "Dendrite",
        "Axon",
        "Cilium",
        "Pseudopodium"
      ],
      "answer": "Axon",
      "explanation": "The axon is the long projection conducting action potentials away from the cyton toward target cells."
    },
    {
      "id": "m02_q10",
      "question": "Which microscopic organelle inside the neuron's cell body is the metabolic control center containing genetic material?",
      "options": [
        "Centriole",
        "Nucleus",
        "Chloroplast",
        "Vacuole"
      ],
      "answer": "Nucleus",
      "explanation": "The nucleus inside the cyton regulates cellular metabolism and protein synthesis of the nerve cell."
    }
  ]
}
modules_1_to_10.append(m02)

# Module 3
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Synapse & Neurotransmission: Electrical-Chemical Transduction",
  "tagline": "How impulses cross microscopic gaps between neurons using chemical neurotransmitters.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Neurons in the nervous system are not physically fused in continuous pipelines. Instead, they lie in microscopic proximity to one another, separated by an extremely narrow gap called a <strong>synapse</strong> (or synaptic cleft, roughly $20\text{ nanometres}$ wide).</p>

<h3>What Happens at a Synapse?</h3>
<p>Electrical charges cannot jump across the fluid-filled synaptic cleft on their own. Therefore, nature converts the electrical signal into a <strong>chemical signal</strong> to cross the gap:</p>
<ol>
  <li><strong>Arrival of Electrical Impulse:</strong><br>
  An electrical nerve impulse travels down the axon until it reaches the bulbous <strong>nerve endings (synaptic knobs)</strong>.</li>
  <li><strong>Release of Neurotransmitters:</strong><br>
  The electrical wave triggers microscopic membrane vesicles to fuse with the presynaptic membrane, releasing chemical messengers called <strong>neurotransmitters</strong> (such as acetylcholine) into the synaptic gap.</li>
  <li><strong>Diffusion & Generation of New Impulse:</strong><br>
  The chemical neurotransmitters diffuse across the narrow synapse and bind to specific receptor proteins on the dendritic membrane of the next adjacent neuron.</li>
  <li><strong>Triggering Next Impulse:</strong><br>
  This chemical binding opens ion channels, setting off an identical <strong>new electrical impulse</strong> in the second neuron.</li>
</ol>

<h3>Neuromuscular Junction (NMJ):</h3>
<p>A similar chemical synapse exists between a motor neuron terminal and a muscle cell, known as a <strong>neuromuscular junction</strong>. When the nerve impulse arrives, chemical release triggers muscle fibers to contract.</p>

<h3>Why Synaptic Transmission Is Strictly Unidirectional:</h3>
<p>Synapses act as <strong>one-way biological valves</strong> because chemical neurotransmitters are stored and released ONLY by axon terminals, and neurotransmitter receptors are located ONLY on dendrites. An impulse cannot travel backwards from dendrite to axon!</p>
""",
  "pointsToRemember": [
    "A synapse is a microscopic junction between the nerve ending of one neuron and the dendrite of the next.",
    "At a synapse, electrical impulses trigger the release of chemical neurotransmitters that diffuse across the gap.",
    "Synapses ensure unidirectional impulse flow: axon terminals release chemicals, and dendritic receptors receive them."
  ],
  "keyNotes": [
    "Core Board Question: Explain what happens at a synapse when an electrical impulse reaches an axon terminal (chemical neurotransmitters are released, diffuse across the cleft, and initiate a new electrical impulse in the next dendrite)."
  ],
  "questions": [
    get_bank_q(11, "m03_q01"), get_bank_q(12, "m03_q02"), get_bank_q(13, "m03_q03"),
    get_bank_q(14, "m03_q04"), get_bank_q(15, "m03_q05"),
    {
      "id": "m03_q06",
      "question": "What is the microscopic fluid-filled gap separating the axon terminal of one neuron from the dendrite of the next neuron called?",
      "options": [
        "Node of Ranvier",
        "Synapse (synaptic cleft)",
        "Myelin sheath",
        "Neuromuscular bridge"
      ],
      "answer": "Synapse (synaptic cleft)",
      "explanation": "A synapse is the specialized junction across which neurons communicate via neurotransmitters."
    },
    {
      "id": "m03_q07",
      "question": "Why can an electrical nerve impulse travel across a synapse in ONLY ONE direction and never in reverse?",
      "options": [
        "Blood pressure pushes the impulse forward.",
        "Chemical neurotransmitters are released exclusively by axon terminals and their corresponding receptors exist exclusively on dendrites.",
        "Dendrites repel all chemicals.",
        "The brain actively stops backwards electricity."
      ],
      "answer": "Chemical neurotransmitters are released exclusively by axon terminals and their corresponding receptors exist exclusively on dendrites.",
      "explanation": "Because neurotransmitter vesicles reside only in presynaptic knobs and receptors only on postsynaptic dendrites, flow is one-way."
    },
    {
      "id": "m03_q08",
      "question": "What chemical messengers are released by synaptic vesicles into the synaptic cleft upon the arrival of an electrical impulse?",
      "options": [
        "Digestive enzymes",
        "Neurotransmitters (such as acetylcholine)",
        "Hydrochloric acid",
        "Haemoglobin molecules"
      ],
      "answer": "Neurotransmitters (such as acetylcholine)",
      "explanation": "Neurotransmitters are chemical ligands released to transduce electrical signals across the synaptic gap."
    },
    {
      "id": "m03_q09",
      "question": "What is the specialized anatomical junction between a motor neuron axon terminal and a skeletal muscle fiber termed?",
      "options": [
        "Neuromuscular junction (motor end-plate)",
        "Intervertebral disc",
        "Synovial joint",
        "Alveolar capillary"
      ],
      "answer": "Neuromuscular junction (motor end-plate)",
      "explanation": "The junction where motor neurons synapse onto muscle fibers to stimulate contraction is the neuromuscular junction."
    },
    {
      "id": "m03_q10",
      "question": "At the synapse, the signal changes form twice. What is the correct sequence of forms the signal adopts?",
      "options": [
        "Light -> Sound -> Heat",
        "Electrical impulse -> Chemical signal (neurotransmitter) -> Electrical impulse",
        "Chemical -> Mechanical -> Chemical",
        "Magnetic -> Gravitational -> Electrical"
      ],
      "answer": "Electrical impulse -> Chemical signal (neurotransmitter) -> Electrical impulse",
      "explanation": "Electrical action potential triggers chemical neurotransmitter release, which regenerates an electrical impulse in the next neuron."
    }
  ]
}
modules_1_to_10.append(m03)

# Module 4
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Reflex Actions & The Reflex Arc: Spinal Cord Emergency Circuits",
  "tagline": "Rapid, involuntary protective motor responses bypassing conscious brain processing.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Imagine accidentally touching a red-hot iron pan. You instantly jerk your hand away before you even consciously perceive pain or think about what to do! How does your body accomplish this life-saving reaction in a fraction of a second?</p>

<h3>What Is a Reflex Action?</h3>
<p>A <strong>reflex action</strong> is an extremely rapid, automatic, and involuntary response of an effector organ (muscle or gland) to a sensory stimulus, conducted without the conscious involvement or deliberation of the brain.</p>
<p><em>Examples:</em> Withdrawing hand from a hot object, blinking when an object approaches the eye, knee-jerk reflex, coughing, and sneezing.</p>

<h3>The Reflex Arc:</h3>
<p>The neural pathway taken by nerve impulses during a reflex action is called a <strong>reflex arc</strong>. It consists of five anatomical components linked in sequence:</p>
<ol>
  <li><strong>Receptor:</strong> Sensory cells in the skin detect the noxious stimulus (e.g. intense heat).</li>
  <li><strong>Sensory Neuron (Afferent):</strong> Conducts the electrical nerve impulse from the receptor into the spinal cord.</li>
  <li><strong>Relay Neuron (Interneuron):</strong> Located inside the gray matter of the <strong>spinal cord</strong>, connects the sensory neuron directly to the motor neuron. Simultaneously, it sends an informational signal upward to the brain for conscious memory recording.</li>
  <li><strong>Motor Neuron (Efferent):</strong> Carries the motor command impulse rapidly out of the spinal cord to the target muscle.</li>
  <li><strong>Effector Organ:</strong> Muscle in the arm contracts instantly, jerking the hand safely away from danger!</li>
</ol>

<h3>Why Did Reflex Arcs Evolve in the Spinal Cord?</h3>
<p>The thinking process of the complex brain involves thousands of synaptic delays and conscious decision-making, which takes far too long ($>0.5\text{ seconds}$). In life-threatening emergencies, every millisecond counts! Reflex arcs evolved in the <strong>spinal cord</strong> as efficient emergency short-circuits that execute immediate protective movements before tissue burns occur.</p>
""",
  "pointsToRemember": [
    "A reflex action is an automatic, involuntary response to a stimulus executed without conscious brain thought.",
    "Reflex Arc sequence: Receptor → Sensory neuron → Spinal cord (Relay neuron) → Motor neuron → Effector muscle.",
    "Reflex arcs evolved in the spinal cord because brain processing is too slow to prevent physical injury."
  ],
  "keyNotes": [
    "Board Flowchart Classic: Trace the sequence of a reflex arc: Stimulus → Receptor in skin → Sensory neuron → Spinal cord (Relay neuron) → Motor neuron → Effector (muscle) → Response."
  ],
  "questions": [
    get_bank_q(46, "m04_q01"), get_bank_q(47, "m04_q02"), get_bank_q(48, "m04_q03"),
    get_bank_q(49, "m04_q04"), get_bank_q(50, "m04_q05"),
    {
      "id": "m04_q06",
      "question": "What is the complete anatomical pathway traced by a nerve impulse during a spinal reflex action (a reflex arc)?",
      "options": [
        "Effector -> Motor neuron -> Brain -> Sensory neuron -> Receptor",
        "Receptor -> Sensory neuron -> Spinal cord (Relay neuron) -> Motor neuron -> Effector (Muscle)",
        "Sensory neuron -> Effector -> Motor neuron -> Receptor",
        "Brain -> Spinal cord -> Effector -> Receptor"
      ],
      "answer": "Receptor -> Sensory neuron -> Spinal cord (Relay neuron) -> Motor neuron -> Effector (Muscle)",
      "explanation": "A reflex arc starts at a receptor, passes via sensory neuron into the spinal cord relay neuron, and exits via motor neuron to the effector."
    },
    {
      "id": "m04_q07",
      "question": "Why did reflex arcs evolve primarily within the spinal cord rather than relying on conscious brain processing?",
      "options": [
        "The brain contains no neurons.",
        "Brain processing involves extensive synaptic deliberations that are too slow to prevent severe tissue injury in sudden physical emergencies.",
        "The spinal cord is larger than the brain.",
        "Reflexes only occur while sleeping."
      ],
      "answer": "Brain processing involves extensive synaptic deliberations that are too slow to prevent severe tissue injury in sudden physical emergencies.",
      "explanation": "Spinal reflexes short-circuit processing time, executing protective motor withdrawals in milliseconds."
    },
    {
      "id": "m04_q08",
      "question": "In the reflex action of withdrawing a hand from a flame, what organ or tissue serves as the 'effector'?",
      "options": [
        "Heat receptor in the fingertip",
        "Arm muscle that contracts to pull the hand away",
        "The cerebral cortex",
        "The spinal nerve root"
      ],
      "answer": "Arm muscle that contracts to pull the hand away",
      "explanation": "The effector is the responding muscle or gland that executes the physical motor action."
    },
    {
      "id": "m04_q09",
      "question": "What type of neuron resides completely within the central nervous system (spinal cord) to bridge sensory and motor pathways?",
      "options": [
        "Sensory neuron",
        "Relay neuron (interneuron)",
        "Motor neuron",
        "Autonomic ganglion"
      ],
      "answer": "Relay neuron (interneuron)",
      "explanation": "Relay neurons in the spinal cord gray matter integrate sensory input and transmit it directly to motor neurons."
    },
    {
      "id": "m04_q10",
      "question": "Does the brain receive any information about a spinal reflex action?",
      "options": [
        "No, the brain never discovers what happened.",
        "Yes, while the reflex executes in the spinal cord, collateral nerve fibres simultaneously relay the signal to sensory areas of the brain for conscious awareness.",
        "Yes, the brain must approve the reflex before the arm moves.",
        "Only if the person is looking directly at the flame."
      ],
      "answer": "Yes, while the reflex executes in the spinal cord, collateral nerve fibres simultaneously relay the signal to sensory areas of the brain for conscious awareness.",
      "explanation": "The reflex executes autonomously at the spinal cord level, while ascending sensory tracts inform the brain of the event."
    }
  ]
}
modules_1_to_10.append(m04)

# Module 5
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Protection of the Central Nervous System: Cranium, Meninges, CSF & Spine",
  "tagline": "Multi-layered anatomical defenses shielding the delicate brain and spinal cord.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The <strong>Central Nervous System (CNS)</strong>—comprising the <strong>Brain</strong> and the <strong>Spinal Cord</strong>—is the master coordination center of the body. Because neural tissue is soft, delicate, and has virtually zero regenerative capacity if mechanically crushed, nature has engineered elaborate multi-layered physical armor to protect it:</p>

<h3>1. Physical Protection of the Brain:</h3>
<ul>
  <li><strong>The Cranium (Bony Skull):</strong> The brain sits enclosed within a sturdy, rigid bony casing called the <strong>cranium</strong> (brain box), which shields it from direct impacts and punctures.</li>
  <li><strong>Meninges (Three Membranes):</strong> Beneath the bone, the brain is enveloped by three protective connective tissue membranes called meninges (Dura mater, Arachnoid mater, and Pia mater).</li>
  <li><strong>Cerebrospinal Fluid (CSF):</strong>
    <ul>
      <li>The space between the meninges and internal brain ventricles is filled with a clear, watery fluid called <strong>cerebrospinal fluid (CSF)</strong>.</li>
      <li><strong>Shock Absorption:</strong> The CSF acts as a hydraulic shock-absorbing cushion. When the head suffers a sudden blow or jolt, the fluid dissipates kinetic energy, preventing the brain from colliding violently with the hard inner walls of the cranium.</li>
      <li><strong>Buoyancy:</strong> CSF suspends the brain in neutral buoyancy, reducing its effective weight from $1400\text{ g}$ to just $50\text{ g}$, preventing the brain's base from being crushed under its own weight!</li>
    </ul>
  </li>
</ul>

<h3>2. Physical Protection of the Spinal Cord:</h3>
<p>The spinal cord is a thick cylindrical bundle of nerve fibers extending downward from the medulla of the brain. It is encased and protected within the hard, bony <strong>vertebral column (backbone / spine)</strong>, surrounded by meninges and cerebrospinal fluid.</p>
""",
  "pointsToRemember": [
    "The brain is protected by a bony cranium, three protective membranes (meninges), and shock-absorbing cerebrospinal fluid (CSF).",
    "Cerebrospinal fluid provides hydraulic cushioning against mechanical shocks and imparts buoyancy to the brain.",
    "The spinal cord is protected by the flexible, bony vertebral column (backbone)."
  ],
  "keyNotes": [
    "Exam Question: How is the delicate human brain protected from mechanical injury? Mention all three defenses: Cranium (skull), Meninges, and Cerebrospinal fluid (CSF)."
  ],
  "questions": [
    get_bank_q(16, "m05_q01"), get_bank_q(17, "m05_q02"), get_bank_q(18, "m05_q03"),
    get_bank_q(19, "m05_q04"), get_bank_q(20, "m05_q05"),
    {
      "id": "m05_q06",
      "question": "What three anatomical defenses collectively shield the delicate human brain from external mechanical injury and shocks?",
      "options": [
        "Hair, teeth, and tongue",
        "The bony cranium (skull), three protective meningeal membranes, and fluid-filled cerebrospinal fluid (CSF)",
        "Rib cage, sternum, and diaphragm",
        "Cartilage rings and alveolar sacs"
      ],
      "answer": "The bony cranium (skull), three protective meningeal membranes, and fluid-filled cerebrospinal fluid (CSF)",
      "explanation": "The skull bone, connective tissue meninges, and hydraulic cushion of CSF provide comprehensive protection."
    },
    {
      "id": "m05_q07",
      "question": "What is the primary physiological role of cerebrospinal fluid (CSF) surrounding the brain and spinal cord?",
      "options": [
        "To digest dietary starch",
        "To act as a shock-absorbing hydraulic cushion that dissipates mechanical blows and provides neutral buoyancy",
        "To transport red blood cells into the brain",
        "To produce thyroxin hormone"
      ],
      "answer": "To act as a shock-absorbing hydraulic cushion that dissipates mechanical blows and provides neutral buoyancy",
      "explanation": "CSF acts as a shock absorber, protecting soft neural tissues from colliding with the rigid skull."
    },
    {
      "id": "m05_q08",
      "question": "Which flexible, segmented bony structure encloses and physically protects the spinal cord along the dorsal midline of the human body?",
      "options": [
        "Pelvic girdle",
        "Vertebral column (backbone)",
        "Pectoral girdle",
        "Sternum"
      ],
      "answer": "Vertebral column (backbone)",
      "explanation": "The vertebral column (composed of 33 interlocking vertebrae) houses and protects the spinal cord."
    },
    {
      "id": "m05_q09",
      "question": "What are the three protective connective tissue membranes surrounding the brain and spinal cord collectively termed?",
      "options": [
        "Pleura",
        "Pericardium",
        "Meninges",
        "Peritoneum"
      ],
      "answer": "Meninges",
      "explanation": "The meninges (dura mater, arachnoid mater, pia mater) envelop the central nervous system."
    },
    {
      "id": "m05_q10",
      "question": "Bacterial or viral infection causing inflammation of the protective membranes covering the brain and spinal cord is clinically diagnosed as:",
      "options": [
        "Goitre",
        "Meningitis",
        "Diabetes mellitus",
        "Pneumonia"
      ],
      "answer": "Meningitis",
      "explanation": "Inflammation of the meninges is called meningitis, a medical emergency threatening central neural structures."
    }
  ]
}
modules_1_to_10.append(m05)

# Module 6
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "The Human Brain: Forebrain (Cerebrum, Sensory, Association & Hunger)",
  "tagline": "The master cerebral cortex, conscious thought, memory, and voluntary action command.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The human brain is the most intricate organ in the known universe, comprising roughly $86\text{ billion}$ neurons. Anatomically, the brain is divided into three primary regions: the <strong>Forebrain</strong>, the <strong>Midbrain</strong>, and the <strong>Hindbrain</strong>.</p>

<h3>The Forebrain — Main Thinking Center:</h3>
<p>The forebrain consists predominantly of the <strong>Cerebrum</strong>, which forms the largest and most complex portion of the brain (making up about $80\%$ of its mass). The cerebrum is divided into left and right cerebral hemispheres, with deeply folded cortex surfaces that pack billions of neurons.</p>

<h3>Functional Zones of the Cerebrum:</h3>
<ol>
  <li><strong>Sensory Areas:</strong> Distinct, dedicated cortical regions receive and register sensory nerve impulses from sense organs:
    <ul>
      <li><em>Visual Area:</em> In the occipital lobe, processes vision.</li>
      <li><em>Auditory Area:</em> In the temporal lobe, processes hearing.</li>
      <li><em>Olfactory & Gustatory Areas:</em> Process smell and taste.</li>
    </ul>
  </li>
  <li><strong>Association Areas:</strong><br>
  Large, highly developed cortical zones that do not receive direct sensory inputs or output motor signals. Instead, they <strong>integrate incoming sensory information with stored memories</strong> and experiences, facilitating reasoning, logical analysis, learning, language comprehension, and conscious decision-making.</li>
  <li><strong>Motor Areas:</strong><br>
  Frontal lobe regions that formulate motor commands and send impulses to skeletal muscles to control <strong>voluntary movements</strong> (e.g. deciding to lift a pen, write, or walk).</li>
  <li><strong>Hunger and Satiety Center:</strong><br>
  A specialized region located within the forebrain (in the <strong>hypothalamus</strong>) monitors blood glucose levels and gastric fullness, creating the conscious sensation of being hungry or feeling full!</li>
</ol>
""",
  "pointsToRemember": [
    "The forebrain (Cerebrum) is the main thinking and decision-making center of the brain.",
    "Cerebral cortex has sensory areas, association areas (thinking, memory, logic), and motor areas (voluntary actions).",
    "A specialized center in the forebrain (hypothalamus) controls the sensation of hunger."
  ],
  "keyNotes": [
    "Core Function: The forebrain is responsible for thinking, memory, consciousness, voluntary actions, sensory interpretation, and hunger."
  ],
  "questions": [
    get_bank_q(56, "m06_q01"), get_bank_q(57, "m06_q02"), get_bank_q(58, "m06_q03"),
    get_bank_q(59, "m06_q04"), get_bank_q(60, "m06_q05"),
    {
      "id": "m06_q06",
      "question": "Which major division of the human brain constitutes the primary thinking, intellectual, and memory center?",
      "options": [
        "Spinal cord",
        "Forebrain (specifically the Cerebrum)",
        "Cerebellum",
        "Medulla oblongata"
      ],
      "answer": "Forebrain (specifically the Cerebrum)",
      "explanation": "The cerebrum of the forebrain coordinates cognition, conscious thought, learning, and reasoning."
    },
    {
      "id": "m06_q07",
      "question": "In which part of the human brain is the specialized center responsible for detecting the sensation of hunger and fullness located?",
      "options": [
        "Cerebellum",
        "Medulla",
        "Forebrain (Hypothalamus)",
        "Spinal cord"
      ],
      "answer": "Forebrain (Hypothalamus)",
      "explanation": "The hunger and satiety centers are located in the hypothalamic region of the forebrain."
    },
    {
      "id": "m06_q08",
      "question": "What is the primary biological function of 'association areas' inside the human cerebral cortex?",
      "options": [
        "To pump blood through brain ventricles",
        "To integrate incoming sensory signals with stored memories and past experiences to make conscious decisions",
        "To control heartbeat and blood pressure",
        "To manufacture bone marrow"
      ],
      "answer": "To integrate incoming sensory signals with stored memories and past experiences to make conscious decisions",
      "explanation": "Association areas combine multiple sensory modalities with memories to generate higher cognitive thought."
    },
    {
      "id": "m06_q09",
      "question": "Which lobe of the cerebral cortex contains the primary visual processing area responsible for sight?",
      "options": [
        "Frontal lobe",
        "Occipital lobe",
        "Temporal lobe",
        "Parietal lobe"
      ],
      "answer": "Occipital lobe",
      "explanation": "The visual cortex is situated in the occipital lobe at the posterior base of the cerebrum."
    },
    {
      "id": "m06_q10",
      "question": "Which of the following activities is regulated directly by the motor area of the forebrain?",
      "options": [
        "Peristalsis in the intestine",
        "Deciding to raise your hand and write notes in class (voluntary action)",
        "Heartbeat rate",
        "Salivation at the smell of food"
      ],
      "answer": "Deciding to raise your hand and write notes in class (voluntary action)",
      "explanation": "Voluntary, conscious motor movements are initiated by the motor cortex of the frontal lobe."
    }
  ]
}
modules_1_to_10.append(m06)

# Module 7
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "The Midbrain & Hindbrain: Cerebellum, Medulla & Pons",
  "tagline": "Precision motor balance, vital involuntary centers, and respiratory regulation.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>While the forebrain governs conscious thought, the <strong>Midbrain</strong> and <strong>Hindbrain</strong> regulate vital involuntary processes and automatic motor coordination.</p>

<h3>1. The Midbrain:</h3>
<p>The midbrain connects the forebrain to the hindbrain. It acts as a reflex coordination center for <strong>visual and auditory reflexes</strong>, controlling involuntary movements of the head, neck, and trunk in response to sudden sights or sounds, and regulating pupillary light reflexes.</p>

<h3>2. The Hindbrain — Three Specialized Components:</h3>
<p>The hindbrain consists of three distinct anatomical structures:</p>
<ol>
  <li><strong>The Cerebellum ('Little Brain'):</strong>
    <ul>
      <li>Located at the back of the head beneath the cerebrum.</li>
      <li><strong>Motor Precision:</strong> Coordinates and refines voluntary movements initiated by the cerebrum, ensuring smooth, accurate motor execution.</li>
      <li><strong>Posture and Equilibrium:</strong> Works with the inner ear to maintain physical <strong>balance and posture</strong> of the body.</li>
      <li><em>Examples:</em> Walking in a straight line, riding a bicycle, balancing on one foot, and picking up a fallen pencil with your fingertips.</li>
      <li><em>Alcohol Effect:</em> Alcohol consumption severely impairs cerebellar function, causing slurred speech and staggering, uncoordinated gait.</li>
    </ul>
  </li>
  <li><strong>The Medulla (Medulla Oblongata):</strong>
    <ul>
      <li>Continues downward into the spinal cord.</li>
      <li>Controls all <strong>vital involuntary actions</strong> essential for survival:
        <ul>
          <li>Cardiovascular center (heartbeat rate and blood pressure).</li>
          <li>Autonomic digestive reflexes: <strong>salivation</strong>, swallowing, and <strong>vomiting</strong>.</li>
          <li>Respiratory rhythm.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>The Pons:</strong>
    <ul>
      <li>Bridges different parts of the brain and works with the medulla to regulate the <strong>rate and rhythm of respiration</strong>.</li>
    </ul>
  </li>
</ol>
""",
  "pointsToRemember": [
    "Cerebellum controls precision of voluntary movements and maintains posture and body balance.",
    "Medulla oblongata controls vital involuntary actions: blood pressure, salivation, vomiting, and heartbeat.",
    "Pons regulates respiration rhythm; Midbrain controls visual and auditory reflexes."
  ],
  "keyNotes": [
    "Board Highlight: Walking in a straight line, riding a bicycle, and picking up a pencil are all coordinated by the CEREBELLUM; involuntary vomiting, BP, and salivation are controlled by the MEDULLA."
  ],
  "questions": [
    get_bank_q(21, "m07_q01"), get_bank_q(22, "m07_q02"), get_bank_q(23, "m07_q03"),
    get_bank_q(24, "m07_q04"), get_bank_q(25, "m07_q05"),
    {
      "id": "m07_q06",
      "question": "Which specific part of the human hindbrain is responsible for maintaining posture, equilibrium, and the precision of voluntary motor acts (such as riding a bicycle or walking in a straight line)?",
      "options": [
        "Cerebrum",
        "Cerebellum",
        "Hypothalamus",
        "Medulla oblongata"
      ],
      "answer": "Cerebellum",
      "explanation": "The cerebellum coordinates muscle groups to ensure balance, equilibrium, and precision of voluntary motor activities."
    },
    {
      "id": "m07_q07",
      "question": "Which of the following involuntary physiological functions is directly controlled by the medulla oblongata?",
      "options": [
        "Blood pressure, salivation, and vomiting reflex",
        "Conscious memory of historical dates",
        "Visual colour discrimination",
        "Solving mathematical equations"
      ],
      "answer": "Blood pressure, salivation, and vomiting reflex",
      "explanation": "The medulla oblongata controls involuntary visceral reflexes including cardiovascular, respiratory, salivation, and vomiting."
    },
    {
      "id": "m07_q08",
      "question": "Why does a severely intoxicated person stagger unpredictably and struggle to walk in a straight line?",
      "options": [
        "Alcohol destroys bones in the feet instantly.",
        "Alcohol depresses and impairs the cerebellum, disrupting motor coordination, equilibrium, and muscular precision.",
        "Alcohol paralyzes the lungs.",
        "Alcohol freezes the spinal cord."
      ],
      "answer": "Alcohol depresses and impairs the cerebellum, disrupting motor coordination, equilibrium, and muscular precision.",
      "explanation": "The cerebellum is particularly sensitive to alcohol, causing ataxia (uncoordinated staggering gait)."
    },
    {
      "id": "m07_q09",
      "question": "What part of the brain coordinates involuntary visual and auditory reflex movements of the head and neck in response to sudden stimuli?",
      "options": [
        "Midbrain",
        "Cerebellum",
        "Pons",
        "Vertebral column"
      ],
      "answer": "Midbrain",
      "explanation": "The midbrain contains the superior and inferior colliculi responsible for visual and auditory tracking reflexes."
    },
    {
      "id": "m07_q10",
      "question": "Damage to which part of the brainstem is immediately fatal because it arrests heartbeat and spontaneous breathing?",
      "options": [
        "Occipital cortex",
        "Medulla oblongata",
        "Frontal lobe",
        "Cerebral cortex"
      ],
      "answer": "Medulla oblongata",
      "explanation": "The medulla controls essential cardiac and respiratory centers; damage halts vital autonomic life functions."
    }
  ]
}
modules_1_to_10.append(m07)

# Module 8
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Comparison of Nervous Actions: Voluntary, Involuntary & Reflex Actions",
  "tagline": "Conscious decisions, autonomic housekeeping, and emergency spinal reflexes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>To master human neurobiology, we must systematically distinguish between the three broad classes of actions executed by the nervous system:</p>

<table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:0.95em;">
  <tr style="background:#e2e8f0; font-weight:bold; text-align:center;">
    <td style="padding:8px; border:1px solid #cbd5e1;">Feature</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Voluntary Actions</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Involuntary Actions</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Reflex Actions</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold;">Conscious Control</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Under direct conscious, deliberate willpower.</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Not under conscious control; automatic housekeeping.</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Instantaneous; bypasses conscious deliberation.</td>
  </tr>
  <tr style="background:#f8fafc;">
    <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold;">Controlling Center</td>
    <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Cerebrum (Forebrain)</strong></td>
    <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Medulla & Midbrain</strong></td>
    <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Spinal Cord</strong> (mostly)</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold;">Speed of Response</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Slowest (requires thinking and analysis).</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Continuous and steady rate.</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Extremely fast and immediate.</td>
  </tr>
  <tr style="background:#f8fafc;">
    <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold;">Examples</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Writing, speaking, kicking a football, clapping.</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Heartbeat, blood pressure, peristalsis, digestion.</td>
    <td style="padding:8px; border:1px solid #cbd5e1;">Withdrawing hand from hot flame, knee jerk, pupil constriction.</td>
  </tr>
</table>

<h3>Peripheral Nervous System (PNS):</h3>
<p>The Central Nervous System (brain and spinal cord) communicates with all body parts via the <strong>Peripheral Nervous System (PNS)</strong>, which consists of:</p>
<ul>
  <li><strong>Cranial Nerves:</strong> $12\text{ pairs}$ arising directly from the brain, innervating the head, neck, and facial sense organs.</li>
  <li><strong>Spinal Nerves:</strong> $31\text{ pairs}$ arising from the spinal cord, innervating the trunk and limbs.</li>
</ul>
""",
  "pointsToRemember": [
    "Voluntary actions are consciously initiated by the cerebrum (forebrain).",
    "Involuntary actions (heartbeat, peristalsis) are automatically regulated by the medulla and midbrain.",
    "Reflex actions are sudden, involuntary emergency responses mediated predominantly by the spinal cord.",
    "PNS consists of 12 pairs of cranial nerves and 31 pairs of spinal nerves."
  ],
  "keyNotes": [
    "Exam Question: Differentiate between a voluntary action, an involuntary action, and a reflex action giving one example of each."
  ],
  "questions": [
    get_bank_q(66, "m08_q01"), get_bank_q(67, "m08_q02"), get_bank_q(68, "m08_q03"),
    get_bank_q(69, "m08_q04"), get_bank_q(70, "m08_q05"),
    {
      "id": "m08_q06",
      "question": "Which region of the human central nervous system directly initiates and governs conscious voluntary actions like writing an essay?",
      "options": [
        "Spinal cord",
        "Cerebral cortex of the forebrain",
        "Medulla oblongata",
        "Hypothalamus"
      ],
      "answer": "Cerebral cortex of the forebrain",
      "explanation": "Voluntary motor output is initiated consciously in the motor cortex of the cerebrum."
    },
    {
      "id": "m08_q07",
      "question": "How many pairs of cranial nerves and spinal nerves constitute the human Peripheral Nervous System (PNS)?",
      "options": [
        "10 pairs cranial, 20 pairs spinal",
        "12 pairs cranial nerves and 31 pairs spinal nerves",
        "24 pairs cranial nerves and 12 pairs spinal nerves",
        "50 pairs cranial nerves and 100 pairs spinal nerves"
      ],
      "answer": "12 pairs cranial nerves and 31 pairs spinal nerves",
      "explanation": "The human PNS comprises 12 pairs of cranial nerves and 31 pairs of spinal nerves."
    },
    {
      "id": "m08_q08",
      "question": "Which of the following physiological actions is classified as an involuntary autonomic action rather than a spinal reflex?",
      "options": [
        "Jerking hand away from a sharp needle",
        "Continuous rhythmic peristaltic movement of the gut pushing food",
        "Blinking when an insect hits the cornea",
        "Knee-jerk upon tendon tap"
      ],
      "answer": "Continuous rhythmic peristaltic movement of the gut pushing food",
      "explanation": "Peristalsis is continuous autonomic smooth muscle contraction controlled by the medulla, not an emergency reflex."
    },
    {
      "id": "m08_q09",
      "question": "Why can reflex actions execute with vastly greater speed than voluntary actions?",
      "options": [
        "Reflex signals travel through air instead of nerves.",
        "Reflex pathways involve only two or three synapses in the spinal cord without requiring conscious cerebral cortex processing.",
        "Reflex actions have no sensory neurons.",
        "Motor neurons do not participate in reflexes."
      ],
      "answer": "Reflex pathways involve only two or three synapses in the spinal cord without requiring conscious cerebral cortex processing.",
      "explanation": "The short pathway and few synapses in the spinal reflex arc yield lightning-fast response times."
    },
    {
      "id": "m08_q10",
      "question": "Which of the following pairs correctly matches the action with its controlling neural center?",
      "options": [
        "Writing a letter — Medulla oblongata",
        "Vomiting — Cerebellum",
        "Maintaining balance on bicycle — Cerebellum",
        "Knee-jerk reflex — Cerebrum"
      ],
      "answer": "Maintaining balance on bicycle — Cerebellum",
      "explanation": "The cerebellum is specifically responsible for motor precision, balance, and equilibrium."
    }
  ]
}
modules_1_to_10.append(m08)

# Module 9
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Coordination in Plants: Growth-Independent (Nastic) Movements in Mimosa",
  "tagline": "The sensitive touch-me-not plant, turgor pressure shifts, and electrical-chemical signaling.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Unlike animals, plants have <strong>no nervous system and no muscle tissue</strong>. How, then, do plants perceive sensations and respond to environmental stimuli?</p>
<p>Plants display two fundamentally distinct types of movement:</p>
<ol>
  <li><strong>Movement Independent of Growth (Nastic Movements):</strong> Immediate, non-directional physical responses.</li>
  <li><strong>Movement Dependent on Growth (Tropic Movements):</strong> Slower, directional growth responses.</li>
</ol>

<h3>Immediate Response to Touch — The Sensitive Plant (*Mimosa pudica*):</h3>
<p>When the leaves of <em>Mimosa pudica</em> (the 'touch-me-not' or <em>chhui-mui</em> plant) are touched, the leaflets fold together and the leaf droops rapidly within a couple of seconds!</p>

<h3>How Does *Mimosa* Accomplish Movement Without Nerves or Muscles?</h3>
<ul>
  <li><strong>Information Transmission:</strong> The point of touch and the point of movement are different. The plant uses <strong>electrical-chemical signals</strong> to convey the touch stimulus from cell to cell throughout the leaf.</li>
  <li><strong>Cellular Mechanism (Turgor Pressure Shifts):</strong>
    <ul>
      <li>In animals, muscle cells move by changing their shape through specialized contractile proteins (actin and myosin).</li>
      <li>Plants have no contractile proteins! Instead, plant cells change their shape by <strong>altering the amount of water inside them (turgor pressure)</strong>.</li>
      <li>At the base of each leaflet and petiole is a swollen pad of tissue called the <strong>pulvinus</strong>.</li>
      <li>Upon receiving the electrical-chemical signal, cells in the lower half of the pulvinus rapidly pump out potassium ions ($\text{K}^+$), causing water to leave the cells abruptly by <strong>exosmosis</strong>.</li>
      <li>The cells lose turgor pressure and collapse, causing the leaflets to fold and the petiole to drop downwards!</li>
      <li>After a few minutes, water returns into the pulvinus cells, turgidity is restored, and the leaf re-erects.</li>
    </ul>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Plants have no nervous system or muscles; they communicate using electrical-chemical signals.",
    "Nastic movements (like Mimosa pudica drooping) are independent of growth and non-directional.",
    "Plant cells change shape by changing water volume (turgor pressure shifts) in pulvini cells."
  ],
  "keyNotes": [
    "Board Highlight: Contrast how animal muscles change shape (contractile proteins) vs how plant cells change shape (osmotic changes in water volume / turgidity)."
  ],
  "questions": [
    get_bank_q(71, "m09_q01"), get_bank_q(72, "m09_q02"), get_bank_q(73, "m09_q03"),
    get_bank_q(74, "m09_q04"), get_bank_q(75, "m09_q05"),
    {
      "id": "m09_q06",
      "question": "How do plant cells in the pulvinus of Mimosa pudica change their shape to cause the rapid folding and drooping of leaves?",
      "options": [
        "By contracting actin and myosin protein filaments like animal muscle cells",
        "By rapidly altering the volume of water inside them (changing turgor pressure)",
        "By breaking their cell walls",
        "By melting their cytoplasm"
      ],
      "answer": "By rapidly altering the volume of water inside them (changing turgor pressure)",
      "explanation": "Plant cells lack muscle proteins; movement is driven purely by rapid osmotic shifts in turgor pressure."
    },
    {
      "id": "m09_q07",
      "question": "What is the common botanical name of the 'touch-me-not' sensitive plant that demonstrates growth-independent nastic movement?",
      "options": [
        "Pisum sativum",
        "Mimosa pudica (Chhui-mui)",
        "Cuscuta reflexa",
        "Croton variegatum"
      ],
      "answer": "Mimosa pudica (Chhui-mui)",
      "explanation": "Mimosa pudica is the sensitive touch-me-not plant exhibiting seismonastic leaf folding."
    },
    {
      "id": "m09_q08",
      "question": "How is information about touch transmitted from the tip of a touched leaflet to the pulvinus base in Mimosa pudica?",
      "options": [
        "Via red blood cells in veins",
        "Through electrical-chemical signals passing from cell to cell",
        "Via myelinated spinal nerves",
        "By mechanical strings inside xylem"
      ],
      "answer": "Through electrical-chemical signals passing from cell to cell",
      "explanation": "Plants utilize electrical-chemical waves through plasmodesmata and vascular parenchyma to transmit touch stimuli."
    },
    {
      "id": "m09_q09",
      "question": "Why is the rapid drooping of Mimosa pudica leaves classified as a 'nastic movement' rather than a 'tropic movement'?",
      "options": [
        "It involves flowering.",
        "It is non-directional and independent of growth, occurring in the same manner regardless of where the touch is applied.",
        "It takes 5 years to complete.",
        "It only occurs underground."
      ],
      "answer": "It is non-directional and independent of growth, occurring in the same manner regardless of where the touch is applied.",
      "explanation": "Nastic movements are non-directional and reversible turgor-driven responses independent of growth direction."
    },
    {
      "id": "m09_q10",
      "question": "What swollen motor tissue pad at the base of the petiole and leaflets regulates leaf drooping in sensitive plants?",
      "options": [
        "Pulvinus",
        "Stoma",
        "Lenticel",
        "Apical bud"
      ],
      "answer": "Pulvinus",
      "explanation": "The pulvinus contains thin-walled parenchymatous motor cells that rapidly swell or shrink osmotically."
    }
  ]
}
modules_1_to_10.append(m09)

# Module 10
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Directional Movements: Phototropism & The Role of Auxin",
  "tagline": "Light-directed growth, apical auxin synthesis, and differential cell elongation.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Unlike rapid nastic movements, <strong>tropic movements (tropisms)</strong> are slow, directional movements in plants where the direction of growth is directly determined by the direction of the environmental stimulus.</p>
<ul>
  <li>If the growth is <em>towards</em> the stimulus, it is called a <strong>positive tropism</strong>.</li>
  <li>If the growth is <em>away from</em> the stimulus, it is called a <strong>negative tropism</strong>.</li>
</ul>

<h3>Phototropism (Response to Light):</h3>
<p>The directional bending of plant parts in response to light is called <strong>phototropism</strong>:</p>
<ul>
  <li><strong>Plant Shoots (Stems):</strong> Bend towards light $\implies$ <strong>Positive Phototropism</strong> (optimizes sunlight capture for photosynthesis).</li>
  <li><strong>Plant Roots:</strong> Grow away from light $\implies$ <strong>Negative Phototropism</strong>.</li>
</ul>

<h3>The Chemical Mechanism — How Auxin Causes Shoot Bending:</h3>
<p>How does a plant shoot physically bend towards an incoming light source?</p>
<ol>
  <li><strong>Synthesis of Auxin:</strong> The plant hormone <strong>auxin</strong> is synthesized primarily at the growing apical tip of the shoot.</li>
  <li><strong>Diffusion to the Shaded Side:</strong> When sunlight shines directly from above, auxin is distributed uniformly across the tip, causing straight vertical growth. However, when light comes from <strong>one side only (unilateral illumination)</strong>, auxin molecules diffuse away from light toward the <strong>shaded, darker side</strong> of the shoot.</li>
  <li><strong>Differential Cell Elongation:</strong> The higher concentration of auxin on the shaded side stimulates cells on that side to <strong>elongate significantly more</strong> than cells on the illuminated side.</li>
  <li><strong>Bending Toward Light:</strong> Because the shaded side grows longer and faster than the lit side, the stem physically bends over towards the light source!</li>
</ol>
""",
  "pointsToRemember": [
    "Phototropism is directional growth in response to light: shoots show positive phototropism; roots show negative phototropism.",
    "Auxin is synthesised at shoot tips and diffuses to the shaded side during unilateral light.",
    "Higher auxin concentration on the shaded side causes cells there to elongate more, bending the shoot towards light."
  ],
  "keyNotes": [
    "Board Classic: Explain how auxin causes a plant shoot to bend towards light (Auxin diffuses to shaded side → promotes cell elongation on shaded side → unequal growth causes bending towards light)."
  ],
  "questions": [
    get_bank_q(61, "m10_q01"), get_bank_q(62, "m10_q02"), get_bank_q(63, "m10_q03"),
    get_bank_q(64, "m10_q04"), get_bank_q(65, "m10_q05"),
    {
      "id": "m10_q06",
      "question": "What happens to the phototropic bending of a plant seedling shoot if its apical tip is decapitated (cut off) before unilateral light exposure?",
      "options": [
        "The shoot bends twice as fast towards the light.",
        "The shoot fails to bend towards light because the site of auxin synthesis (the tip) has been removed.",
        "The shoot grows into the soil.",
        "The stem turns into a flower immediately."
      ],
      "answer": "The shoot fails to bend towards light because the site of auxin synthesis (the tip) has been removed.",
      "explanation": "Auxin is synthesized at the apical shoot tip; without the tip, auxin cannot be produced to drive differential elongation."
    },
    {
      "id": "m10_q07",
      "question": "When a seedling is illuminated unilaterally from one side, to which side of the stem does the plant hormone auxin migrate?",
      "options": [
        "Towards the brightly illuminated side",
        "Towards the shaded, darker side of the stem",
        "Directly into the root tips",
        "Into the seed coat"
      ],
      "answer": "Towards the shaded, darker side of the stem",
      "explanation": "Auxin is photodestroyed or transported laterally away from light, concentrating on the shaded side."
    },
    {
      "id": "m10_q08",
      "question": "How does an increased concentration of auxin affect cell growth in a plant shoot?",
      "options": [
        "It causes cells to shrink and die.",
        "It stimulates cells to elongate and grow longer.",
        "It prevents cells from absorbing water.",
        "It stops all cell division."
      ],
      "answer": "It stimulates cells to elongate and grow longer.",
      "explanation": "Auxin loosens cell wall fibers (acid growth hypothesis), promoting rapid cell elongation in shoots."
    },
    {
      "id": "m10_q09",
      "question": "Which of the following plant organs exhibits POSITIVE phototropism by growing towards the light source?",
      "options": [
        "Primary tap root",
        "Shoot stem and foliage",
        "Root hairs",
        "Underground tuber"
      ],
      "answer": "Shoot stem and foliage",
      "explanation": "Plant shoots grow towards light (positive phototropism) to maximize solar radiation for photosynthesis."
    },
    {
      "id": "m10_q10",
      "question": "What type of tropism do plant roots display in response to directional light?",
      "options": [
        "Positive phototropism",
        "Negative phototropism (growing away from light)",
        "Chemotropism",
        "Thigmotropism"
      ],
      "answer": "Negative phototropism (growing away from light)",
      "explanation": "Roots grow away from light into the soil, displaying negative phototropism."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch6_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Chapter 6 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
