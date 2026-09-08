# -*- coding: utf-8 -*-
"""
CH7 Part 1: Modules 1 to 10
How do Organisms Reproduce? (Class 10 Science)
"""
import json

with open('scratch/ch7_bank_questions.json', 'r', encoding='utf-8') as f:
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
  "title": "Significance of Reproduction & The Mechanism of DNA Replication",
  "tagline": "Species continuity, chromosomes in the cell nucleus, and biochemical DNA copying.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Unlike nutrition, respiration, or excretion, reproduction is not essential to maintain the life of an individual organism. An animal can live a full lifespan without ever reproducing. Why, then, does an organism expend large amounts of precious metabolic energy on reproduction?</p>
<p><strong>The Biological Purpose:</strong> Reproduction is essential for the <strong>perpetuation and continuity of a species</strong> across generations. Without reproduction, existing individuals would age and die, leading to total species extinction.</p>

<h3>The Molecular Blueprint — DNA:</h3>
<ul>
  <li>Organisms look similar to their parents because their body designs and physiological structures are similar. The master blueprint for body design is stored in the <strong>cell nucleus</strong>.</li>
  <li>Inside the nucleus, genetic information is carried by chromosomes in the form of <strong>DNA (Deoxyribonucleic Acid)</strong> molecules.</li>
  <li>A specific sequence of DNA containing instructions for making a functional cellular protein is called a <strong>gene</strong>. If the information in DNA changes, different proteins are synthesized, altering cellular structure and body design.</li>
</ul>

<h3>The Basic Event in Reproduction — DNA Copying (Replication):</h3>
<ol>
  <li>The foundational molecular event in any reproducing cell is creating an exact copy of its DNA using biochemical enzymatic replication machinery.</li>
  <li><strong>Cellular Apparatus Creation:</strong> Making DNA copies alone is not enough; naked DNA cannot survive independently in the environment! Therefore, DNA copying is accompanied by the creation of an additional <strong>cellular apparatus</strong> (cytoplasm, cell membrane, and organelles).</li>
  <li><strong>Cell Division:</strong> The two DNA copies separate, each accompanied by its own cellular apparatus, effectively splitting one parent cell into two daughter cells.</li>
</ol>
""",
  "pointsToRemember": [
    "Reproduction is necessary for species continuity and prevents species extinction.",
    "DNA (Deoxyribonucleic Acid) in the nucleus carries the genetic instructions for making proteins.",
    "The basic event in reproduction is DNA replication accompanied by the creation of an additional cellular apparatus."
  ],
  "keyNotes": [
    "Board Highlight: State the basic event in reproduction (Creation of a DNA copy alongside an additional cellular apparatus)."
  ],
  "questions": [
    get_bank_q(1, "m01_q01"), get_bank_q(2, "m01_q02"), get_bank_q(3, "m01_q03"),
    get_bank_q(4, "m01_q04"), get_bank_q(5, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "Which cellular macromolecule located inside chromosomes in the cell nucleus serves as the information source for protein synthesis?",
      "options": [
        "Cellulose",
        "DNA (Deoxyribonucleic Acid)",
        "Starch",
        "Glycogen"
      ],
      "answer": "DNA (Deoxyribonucleic Acid)",
      "explanation": "DNA contains the nucleotide sequences (genes) that encode instructions for synthesizing cellular proteins."
    },
    {
      "id": "m01_q07",
      "question": "Why must DNA replication in a reproducing cell be accompanied by the creation of an additional cellular apparatus?",
      "options": [
        "DNA evaporates if exposed to sunlight.",
        "A naked DNA copy cannot survive or function on its own without cellular cytoplasm, organelles, and enzymes.",
        "DNA turns into bone if left alone.",
        "The cell nucleus requires two nucleoli."
      ],
      "answer": "A naked DNA copy cannot survive or function on its own without cellular cytoplasm, organelles, and enzymes.",
      "explanation": "A functioning cell requires metabolic organelles, enzymes, and membrane boundaries alongside the genome."
    },
    {
      "id": "m01_q08",
      "question": "Why is reproduction considered vital for a biological species, even though an individual organism can survive without reproducing?",
      "options": [
        "Reproduction cools the atmosphere.",
        "Reproduction ensures the continuity of the species from one generation to the next, preventing species extinction.",
        "Reproduction produces mineral salts.",
        "Reproduction is only necessary for plants."
      ],
      "answer": "Reproduction ensures the continuity of the species from one generation to the next, preventing species extinction.",
      "explanation": "Species continuity relies on new offspring replacing aging and dying individuals over evolutionary time."
    },
    {
      "id": "m01_q09",
      "question": "What fundamental cellular change occurs if the nucleotide base sequence of a DNA molecule is altered by a mutation?",
      "options": [
        "The cell turns into a rock.",
        "Different proteins will be synthesized, altering cellular structure and body design.",
        "All blood vessels vanish.",
        "The cell loses its mass entirely."
      ],
      "answer": "Different proteins will be synthesized, altering cellular structure and body design.",
      "explanation": "Altering DNA sequence changes the mRNA transcript and resulting amino acid sequence of proteins."
    },
    {
      "id": "m01_q10",
      "question": "What is the specific functional segment of a nuclear DNA molecule that carries the instructions for making a particular protein called?",
      "options": [
        "Centriole",
        "Gene",
        "Vacuole",
        "Chloroplast"
      ],
      "answer": "Gene",
      "explanation": "A gene is the fundamental physical and functional unit of heredity composed of DNA coding sequences."
    }
  ]
}
modules_1_to_10.append(m01)

# Module 2
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Genetic Variation: Mechanism, Niche Stability & Evolutionary Survival",
  "tagline": "Why subtle DNA copying inaccuracies are essential for species survival in fluctuating niches.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>No biochemical reaction is $100\%$ perfectly accurate. Therefore, during the biochemical process of DNA copying, subtle inaccuracies inevitably slip in. As a result, the two DNA copies produced are similar to the original, but not completely identical. These subtle differences introduced during DNA copying are called <strong>variations</strong>.</p>

<h3>Variations and Ecological Niches:</h3>
<ul>
  <li>Populations of reproducing organisms occupy well-defined places or habitats in an ecosystem, called <strong>ecological niches</strong>.</li>
  <li>The stability of a species population depends on maintaining body design features suitable for that specific niche.</li>
  <li>However, ecological niches can change drastically due to unpredictable environmental fluctuations beyond the control of organisms:
    <ul>
      <li>Global warming or sudden temperature spikes.</li>
      <li>Water levels drying up (drought) or flooding.</li>
      <li>Meteorite impacts or volcanic ash clouds.</li>
    </ul>
  </li>
</ul>

<h3>How Variation Saves a Species from Total Extinction:</h3>
<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Classic Biological Thought Experiment: Bacteria in Warming Waters</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Consider a population of bacteria living in temperate pond water. If the water temperature suddenly rises dramatically due to global warming, the vast majority of normal bacteria that cannot tolerate heat will die. However, if there are a few <strong>variant individuals</strong> in the population that possess a heat-resistant variation (due to minor DNA copying differences), those few variants will survive, reproduce, and repopulate the pond! Thus, <strong>variation is beneficial to the survival of species over time</strong>, serving as the raw material for organic evolution.</p>
</div>
""",
  "pointsToRemember": [
    "DNA copying is not 100% error-free; subtle inaccuracies generate variations in offspring.",
    "Variations may not benefit an individual organism, but are crucial for species survival during environmental crises.",
    "Heat-resistant bacterial variants survive when water temperatures spike, preventing total species extinction.",
    "Variation is the fundamental raw material for organic evolution."
  ],
  "keyNotes": [
    "Core Board Question: Why is variation beneficial to the species even if it may not be necessary for the individual? (Cite the example of heat-resistant bacteria surviving a sudden temperature rise in water)."
  ],
  "questions": [
    get_bank_q(51, "m02_q01"), get_bank_q(52, "m02_q02"), get_bank_q(53, "m02_q03"),
    get_bank_q(54, "m02_q04"), get_bank_q(55, "m02_q05"),
    {
      "id": "m02_q06",
      "question": "Why is genetic variation within a population considered beneficial for the long-term survival of a species?",
      "options": [
        "It guarantees that all individuals become identical clones.",
        "It enables some variant individuals to survive unexpected environmental fluctuations (such as temperature rises or droughts) that would otherwise wipe out the entire species.",
        "It allows organisms to stop eating food.",
        "It turns bacteria into plants."
      ],
      "answer": "It enables some variant individuals to survive unexpected environmental fluctuations (such as temperature rises or droughts) that would otherwise wipe out the entire species.",
      "explanation": "Genetic heterogeneity ensures that environmental catastrophes do not eliminate 100% of a population."
    },
    {
      "id": "m02_q07",
      "question": "What is the primary cellular origin of genetic variations that arise during asexual reproduction?",
      "options": [
        "Sudden radioactive decay of cell walls",
        "Subtle inaccuracies and minor biochemical errors occurring during DNA replication",
        "Mixing of blood from parents",
        "Excessive water absorption"
      ],
      "answer": "Subtle inaccuracies and minor biochemical errors occurring during DNA replication",
      "explanation": "DNA polymerases have inherent error rates; minor replication inaccuracies introduce genetic variation."
    },
    {
      "id": "m02_q08",
      "question": "If a temperate pond populated by bacteria experiences a severe heatwave due to global warming, which bacterial cells are most likely to survive and repopulate?",
      "options": [
        "The oldest bacterial cells",
        "Variant bacterial individuals possessing thermal heat-resistant enzyme adaptations",
        "Bacteria that have lost their DNA",
        "All bacteria die equally"
      ],
      "answer": "Variant bacterial individuals possessing thermal heat-resistant enzyme adaptations",
      "explanation": "Pre-existing heat-tolerant variants have a selective survival advantage under elevated temperatures."
    },
    {
      "id": "m02_q09",
      "question": "What ecological term describes the specific habitat or environmental place a reproducing population occupies in an ecosystem?",
      "options": [
        "Trophic level",
        "Ecological niche",
        "Biome",
        "Food web"
      ],
      "answer": "Ecological niche",
      "explanation": "An ecological niche encompasses the physical environment and functional role of a species population."
    },
    {
      "id": "m02_q10",
      "question": "What would happen to a population of organisms whose DNA copying was 100% error-free with ZERO variations over millions of years?",
      "options": [
        "They would become immortal.",
        "They would be completely unable to adapt to environmental changes and would face high risk of extinction when niches alter.",
        "They would turn into humans.",
        "They would reproduce without energy."
      ],
      "answer": "They would be completely unable to adapt to environmental changes and would face high risk of extinction when niches alter.",
      "explanation": "Without genetic variation, a species lacks the plasticity to evolve and adapt to shifting environments."
    }
  ]
}
modules_1_to_10.append(m02)

# Module 3
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Asexual Reproduction: Binary Fission (Amoeba, Leishmania) & Multiple Fission",
  "tagline": "Cellular cleavage planes, kala-azar flagellum orientation, and Plasmodium encystment.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p><strong>Asexual reproduction</strong> is the mode of reproduction in which a single parent produces offspring without the involvement of gamete formation or fertilisation. The offspring are genetically identical to the parent (clones). In unicellular organisms, cell division leads to the creation of new individuals.</p>

<h3>1. Binary Fission:</h3>
<p>In <strong>binary fission</strong>, a mature parent unicellular organism divides into two equal daughter cells:</p>
<ul>
  <li><strong>Binary Fission in Amoeba (Simple Fission):</strong><br>
  Amoeba has an irregular, non-fixed body shape. During division, the nucleus elongates and divides (karyokinesis), followed by division of the cytoplasm (cytokinesis). In Amoeba, <strong>splitting into two cells can take place in ANY plane</strong>.</li>
  <li><strong>Binary Fission in Leishmania (Definite Orientation):</strong><br>
  <em>Leishmania</em> is a protozoan parasite that causes the deadly tropical disease <strong>kala-azar</strong> (black fever). <em>Leishmania</em> has a definite elongated body structure with a whip-like <strong>flagellum</strong> at one end. In <em>Leishmania</em>, binary fission occurs in a <strong>definite longitudinal plane relative to the flagellum</strong>!</li>
</ul>

<h3>2. Multiple Fission — Plasmodium:</h3>
<ul>
  <li><em>Plasmodium</em> is the protozoan parasite that causes <strong>malaria</strong> in humans.</li>
  <li>Under unfavourable conditions, <em>Plasmodium</em> develops a tough, protective cyst wall around itself.</li>
  <li>Inside the cyst, the nucleus divides repeatedly by repeated mitosis into <strong>many daughter nuclei</strong>. Each nucleus gathers a small portion of cytoplasm around it to form dozens of miniature daughter cells.</li>
  <li>When favorable conditions return, the protective cyst ruptures, liberating many daughter cells simultaneously—a process known as <strong>multiple fission</strong>.</li>
</ul>
""",
  "pointsToRemember": [
    "In Amoeba, binary fission can occur in any plane.",
    "In Leishmania (causes kala-azar), binary fission occurs longitudinally in a definite orientation relative to its whip-like flagellum.",
    "In Plasmodium (malarial parasite), multiple fission divides one parent into many daughter cells simultaneously inside a protective cyst."
  ],
  "keyNotes": [
    "Board Highlight: Distinguish binary fission in Amoeba (any plane) vs Leishmania (definite longitudinal orientation relative to flagellum) vs multiple fission in Plasmodium."
  ],
  "questions": [
    get_bank_q(6, "m03_q01"), get_bank_q(7, "m03_q02"), get_bank_q(8, "m03_q03"),
    get_bank_q(9, "m03_q04"), get_bank_q(10, "m03_q05"),
    {
      "id": "m03_q06",
      "question": "In which unicellular protozoan parasite (causing kala-azar) does binary fission occur in a definite longitudinal orientation relative to its whip-like flagellum?",
      "options": [
        "Amoeba proteus",
        "Leishmania",
        "Plasmodium vivax",
        "Paramoecium caudatum"
      ],
      "answer": "Leishmania",
      "explanation": "Leishmania has a flagellum at one end; binary fission occurs longitudinally along a fixed plane relative to this structure."
    },
    {
      "id": "m03_q07",
      "question": "Which of the following organisms reproduces asexually by multiple fission inside a protective cyst?",
      "options": [
        "Amoeba in flowing water",
        "Plasmodium (the malarial parasite)",
        "Hydra",
        "Yeast"
      ],
      "answer": "Plasmodium (the malarial parasite)",
      "explanation": "Plasmodium divides repeatedly inside a cyst to produce many daughter merozoites simultaneously via multiple fission."
    },
    {
      "id": "m03_q08",
      "question": "How does the plane of cell division during binary fission in Amoeba differ from that in Leishmania?",
      "options": [
        "Amoeba divides only horizontally, while Leishmania divides into four.",
        "In Amoeba, binary fission can occur in any arbitrary plane, whereas in Leishmania it occurs strictly in a definite longitudinal plane.",
        "Both divide in identical circular planes.",
        "Amoeba never undergoes binary fission."
      ],
      "answer": "In Amoeba, binary fission can occur in any arbitrary plane, whereas in Leishmania it occurs strictly in a definite longitudinal plane.",
      "explanation": "Amoeba has an irregular shape allowing division in any plane; Leishmania's whip-like flagellum fixes division longitudinally."
    },
    {
      "id": "m03_q09",
      "question": "What human tropical infectious disease is transmitted by sandflies and caused by the flagellated parasite Leishmania?",
      "options": [
        "Malaria",
        "Kala-azar (black fever)",
        "Amoebic dysentery",
        "Typhoid"
      ],
      "answer": "Kala-azar (black fever)",
      "explanation": "Leishmania donovani is the protozoan causative agent of visceral leishmaniasis (kala-azar)."
    },
    {
      "id": "m03_q10",
      "question": "During multiple fission in Plasmodium, what happens to the parent cell when favorable environmental conditions arrive?",
      "options": [
        "The parent cell turns into an egg.",
        "The protective cyst ruptures, releasing dozens of independent daughter cells simultaneously.",
        "The parent cell dissolves with zero surviving offspring.",
        "The cyst permanently turns into rock."
      ],
      "answer": "The protective cyst ruptures, releasing dozens of independent daughter cells simultaneously.",
      "explanation": "Rupture of the mature cyst wall releases multiple daughter cells to infect new host erythrocytes."
    }
  ]
}
modules_1_to_10.append(m03)

# Module 4
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Asexual Reproduction: Fragmentation (Spirogyra) & Regeneration (Planaria)",
  "tagline": "Simple multi-cellular fragmentation and specialized regenerative stem cells.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Fragmentation in Spirogyra:</h3>
<p>In simple multicellular organisms with simple body designs, simple reproductive methods still work:</p>
<ul>
  <li><em>Spirogyra</em> is a filamentous green alga floating in ponds.</li>
  <li>Upon reaching maturity, a long filament simply breaks up into smaller pieces or <strong>fragments</strong>.</li>
  <li>Each fragment grows by simple mitotic cell division into a new, complete filament of <em>Spirogyra</em>.</li>
  <li>This process is called <strong>fragmentation</strong>.</li>
</ul>

<h3>2. Regeneration in Planaria and Hydra:</h3>
<p>If an organism is sliced or broken into multiple pieces, many of those pieces can grow into separate, complete individuals. This developmental capacity is called <strong>regeneration</strong>:</p>
<ul>
  <li>Simple freshwater organisms like <strong>Planaria (flatworm)</strong> and <strong>Hydra</strong> show astonishing regenerative capacity.</li>
  <li>If a single Planaria is cut into three pieces (head, trunk, tail), <strong>each piece regenerates the missing body segments</strong>, yielding three complete living flatworms!</li>
  <li><strong>Cellular Mechanism:</strong> Regeneration is carried out by specialized <strong>regenerative cells</strong> (stem-like cells). These cells proliferate into a mass of cells, which then undergo morphological differentiation into specialized tissues and organs in an organized sequence.</li>
</ul>

<h3>Why Complex Multicellular Organisms (Like Humans) Cannot Regenerate from Fragments:</h3>
<p>Why cannot a human or dog regenerate a whole body if a piece of tissue is cut off?</p>
<ul>
  <li>Complex multicellular organisms are not simply random collections of cells!</li>
  <li>They have <strong>specialized cells organized into distinct tissues, tissues organized into organs</strong>, and organs placed at specific anatomical locations in the body.</li>
  <li>Specialized differentiated cells (like heart muscle or brain neurons) have lost the developmental pluripotency to revert into totipotent stem cells. Cell-by-cell division cannot rebuild this intricate multi-organ architecture from an isolated fragment!</li>
</ul>
""",
  "pointsToRemember": [
    "Spirogyra reproduces by fragmentation: mature filaments simply break into pieces, each growing into a new filament.",
    "Planaria and Hydra show regeneration: cut pieces regrow into complete organisms via specialized regenerative cells.",
    "Complex multicellular organisms cannot reproduce by fragmentation because specialized tissues and organs cannot be generated by simple cell division from random pieces."
  ],
  "keyNotes": [
    "Core Board Question: Why cannot complex organisms like humans reproduce by fragmentation? (Complex organisms have organized tissues and organs in specific locations; specialized cells cannot regenerate a whole multi-organ body)."
  ],
  "questions": [
    get_bank_q(11, "m04_q01"), get_bank_q(12, "m04_q02"), get_bank_q(13, "m04_q03"),
    get_bank_q(14, "m04_q04"), get_bank_q(15, "m04_q05"),
    {
      "id": "m04_q06",
      "question": "Which of the following filamentous green algae reproduces simply by breaking up into fragments upon reaching maturity?",
      "options": [
        "Amoeba",
        "Spirogyra",
        "Planaria",
        "Rhizopus"
      ],
      "answer": "Spirogyra",
      "explanation": "Spirogyra is a simple multicellular filamentous alga that reproduces by fragmentation."
    },
    {
      "id": "m04_q07",
      "question": "Why can simple organisms like Spirogyra reproduce by fragmentation, whereas complex multicellular organisms like humans cannot?",
      "options": [
        "Humans do not live in water.",
        "In complex organisms, specialized cells are organized into intricate tissues and organs; a whole body cannot be rebuilt from random cell division of an isolated fragment.",
        "Complex organisms have no cell division.",
        "Spirogyra has a brain in each cell."
      ],
      "answer": "In complex organisms, specialized cells are organized into intricate tissues and organs; a whole body cannot be rebuilt from random cell division of an isolated fragment.",
      "explanation": "High tissue differentiation and organ systems preclude whole-body regeneration from detached fragments."
    },
    {
      "id": "m04_q08",
      "question": "If a freshwater flatworm Planaria is cut horizontally into three separate pieces (head, middle, and tail), what will be observed after several days?",
      "options": [
        "All three pieces die immediately.",
        "Each of the three pieces regenerates its missing body segments to form three complete, living Planaria.",
        "Only the head piece survives.",
        "The pieces fuse back together into one giant worm."
      ],
      "answer": "Each of the three pieces regenerates its missing body segments to form three complete, living Planaria.",
      "explanation": "Planaria possesses abundant pluripotential neoblast stem cells that regenerate complete organisms from cut segments."
    },
    {
      "id": "m04_q09",
      "question": "What specialized cells are responsible for carrying out regeneration in organisms like Planaria and Hydra?",
      "options": [
        "Red blood cells",
        "Specialized regenerative cells (stem cells) that proliferate and differentiate into diverse tissue types",
        "Bone cells",
        "Chloroplasts"
      ],
      "answer": "Specialized regenerative cells (stem cells) that proliferate and differentiate into diverse tissue types",
      "explanation": "Regenerative cells divide to form a blastema of cells that undergo developmental differentiation."
    },
    {
      "id": "m04_q10",
      "question": "Why is regeneration strictly considered a developmental repair process rather than a standard reproductive method in most natural habitats?",
      "options": [
        "Regeneration requires zero water.",
        "Most organisms do not depend on being cut or injured into pieces in order to reproduce in nature.",
        "Regeneration only happens in laboratory test tubes.",
        "Regenerated animals cannot eat."
      ],
      "answer": "Most organisms do not depend on being cut or injured into pieces in order to reproduce in nature.",
      "explanation": "Regeneration is an accidental survival adaptation rather than a primary evolutionary reproductive strategy."
    }
  ]
}
modules_1_to_10.append(m04)

# Module 5
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Asexual Reproduction: Budding in Hydra and Yeast",
  "tagline": "Cellular proliferation, miniature body morphogenesis, and detachment of offspring.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Budding in Hydra:</h3>
<p>In <strong>Hydra</strong> (a freshwater cnidarian), asexual reproduction takes place through the formation of a <strong>bud</strong>:</p>
<ul>
  <li>Organisms such as Hydra use specialized <strong>regenerative cells</strong> for reproduction in the process of budding.</li>
  <li>A bud develops as an <strong>outgrowth due to repeated mitotic cell divisions</strong> at one specific site on the tubular body column.</li>
  <li>As the bud continues to grow, it undergoes morphogenesis—developing a mouth, body cavity, and miniature tentacles at its tip, developing into a <strong>miniature Hydra</strong>.</li>
  <li>When fully mature, the tiny daughter Hydra detaches from the parent body by constricting at its base, settling onto a substrate as an independent, free-living individual!</li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Budding in Yeast (Unicellular Ascomycete Fungus):</h3>
<ul>
  <li>Yeast is a single-celled fungus that reproduces rapidly by budding under warm, sugar-rich conditions.</li>
  <li>A small bulb-like projection, called a <strong>bud</strong>, protrudes outward from the parent cell membrane.</li>
  <li>The parent nucleus divides mitotically, and one daughter nucleus migrates into the growing bud.</li>
  <li>The bud can either detach immediately to become an independent yeast cell, or remain attached and produce further buds in rapid succession, forming long <strong>chains of yeast cells</strong>.</li>
</ul>
""",
  "pointsToRemember": [
    "Budding in Hydra uses regenerative cells to form an outgrowth (bud) at a specific site.",
    "The bud develops into a miniature Hydra with tentacles and detaches upon maturity.",
    "In single-celled yeast, budding forms small bulb-like outgrowths that can form continuous chains of cells."
  ],
  "keyNotes": [
    "Exam Diagrams: Be ready to identify and draw stages of budding in Hydra (outgrowth → miniature Hydra with tentacles → detachment) and budding in yeast."
  ],
  "questions": [
    get_bank_q(16, "m05_q01"), get_bank_q(17, "m05_q02"), get_bank_q(18, "m05_q03"),
    get_bank_q(19, "m05_q04"), get_bank_q(20, "m05_q05"),
    {
      "id": "m05_q06",
      "question": "How does a freshwater Hydra reproduce asexually under favorable environmental conditions?",
      "options": [
        "By forming spores inside a sporangium",
        "By producing an outgrowth (bud) using regenerative cells that develops tentacles and detaches upon maturity",
        "By binary fission in a vertical plane",
        "By shedding seeds"
      ],
      "answer": "By producing an outgrowth (bud) using regenerative cells that develops tentacles and detaches upon maturity",
      "explanation": "Hydra undergoes budding: repeated cell division produces a lateral bud that matures and detaches."
    },
    {
      "id": "m05_q07",
      "question": "In the single-celled fungus yeast, what is the small bulb-like outgrowth produced on the parent cell body called?",
      "options": [
        "Spore",
        "Bud",
        "Pseudopodium",
        "Cilium"
      ],
      "answer": "Bud",
      "explanation": "Yeast divides asymmetrically, producing small bulb-like protrusions termed buds."
    },
    {
      "id": "m05_q08",
      "question": "What happens when a daughter Hydra bud reaches complete physiological maturity on the parent body?",
      "options": [
        "It consumes the parent body completely.",
        "It detaches from the parent body to live as an independent separate organism.",
        "It turns into a plant root.",
        "It dissolves back into the parent."
      ],
      "answer": "It detaches from the parent body to live as an independent separate organism.",
      "explanation": "Upon reaching maturity, the basal junction constricts, allowing the young Hydra to detach."
    },
    {
      "id": "m05_q09",
      "question": "Which of the following organisms can reproduce by BOTH budding and regeneration?",
      "options": [
        "Amoeba",
        "Hydra",
        "Spirogyra",
        "Plasmodium"
      ],
      "answer": "Hydra",
      "explanation": "Hydra possesses high regenerative capability and routinely reproduces asexually via budding."
    },
    {
      "id": "m05_q10",
      "question": "Under a microscope, what characteristic visual appearance is observed in rapidly growing yeast cultures in warm sugar solution?",
      "options": [
        "Long green filaments",
        "Small circular yeast cells with projecting buds, often forming branched chains of cells",
        "Swimming flagellated worms",
        "Square blue crystals"
      ],
      "answer": "Small circular yeast cells with projecting buds, often forming branched chains of cells",
      "explanation": "Fast mitotic budding produces interconnected chains of budding yeast cells before separation."
    }
  ]
}
modules_1_to_10.append(m05)

# Module 6
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "Vegetative Propagation: Natural (Bryophyllum, Potato) & Artificial Techniques",
  "tagline": "Root, stem, and leaf regeneration, cutting, layering, grafting, and seedless crops.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>In many plants, new individuals can develop from vegetative body parts—such as <strong>roots, stems, and leaves</strong>—without seeds or sexual fertilisation. This mode of asexual reproduction is called <strong>vegetative propagation</strong>.</p>

<h3>1. Natural Vegetative Propagation:</h3>
<ul>
  <li><strong>By Leaves (*Bryophyllum*):</strong> The leaves of <em>Bryophyllum</em> (sprout-leaf plant) develop adventitious buds along their notched leaf margins. When a mature leaf detaches and falls onto moist soil, each bud sprouts roots and shoots, developing into an independent new plant!</li>
  <li><strong>By Underground Stems (Tuber / Rhizome):</strong>
    <ul>
      <li><em>Potato:</em> A potato tuber has notches called <strong>'eyes'</strong>, which are vegetative buds. Pieces of potato containing an eye sprout into potato plants when planted in moist soil.</li>
      <li><em>Ginger and Turmeric:</em> Propagate through underground modified stems called <strong>rhizomes</strong>.</li>
      <li><em>Onion and Garlic:</em> Propagate through modified underground <strong>bulbs</strong>.</li>
    </ul>
  </li>
  <li><strong>By Roots:</strong> Sweet potato (<em>Ipomoea</em>), Dahlia, and Guava develop adventitious buds on their swollen tuberous roots that grow into new plants.</li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Artificial Vegetative Propagation:</h3>
<p>Horticulturists and farmers utilize artificial propagation methods to cultivate commercial crops:</p>
<ul>
  <li><strong>Cutting:</strong> A healthy stem piece with nodes is cut and planted in moist soil (e.g. rose, sugarcane, money plant).</li>
  <li><strong>Layering:</strong> A lower branch is bent down, buried under moist soil while still attached to the parent plant until adventitious roots sprout, then severed (e.g. jasmine, lemon).</li>
  <li><strong>Grafting:</strong> The stem cutting of a desirable shoot (<strong>scion</strong>) is bound to the rooted stem base of another plant (<strong>stock</strong>), combining root vigor with superior fruit quality (e.g. apple, mango, rose).</li>
</ul>

<h3>Key Commercial Advantages of Vegetative Propagation:</h3>
<ol>
  <li><strong>Propagation of Seedless Varieties:</strong> Allows the cultivation of crops that have lost the capacity to produce viable seeds (e.g. <strong>banana, seedless grapes, orange, rose, and jasmine</strong>).</li>
  <li><strong>Genetic Uniformity:</strong> All offspring are <strong>genetically identical (clones)</strong> to the parent, preserving desirable commercial traits (taste, yield, disease resistance).</li>
  <li><strong>Faster Maturity:</strong> Plants raised vegetatively bear flowers and fruits <strong>much earlier</strong> than plants grown from seeds.</li>
</ol>
""",
  "pointsToRemember": [
    "Vegetative propagation produces new plants from roots, stems, or leaves.",
    "Bryophyllum propagates via adventitious buds on leaf margins; potatoes propagate via stem tuber 'eyes'.",
    "Commercial advantages: cultivates seedless plants (banana, rose, jasmine), preserves genetic uniformity, and yields earlier flowering/fruiting."
  ],
  "keyNotes": [
    "Board Highlight: State two commercial advantages of vegetative propagation (Can grow seedless plants like banana/orange; offspring are genetically identical to parent plant)."
  ],
  "questions": [
    get_bank_q(21, "m06_q01"), get_bank_q(22, "m06_q02"), get_bank_q(23, "m06_q03"),
    get_bank_q(24, "m06_q04"), get_bank_q(25, "m06_q05"),
    {
      "id": "m06_q06",
      "question": "Which plant is famously adapted to propagate vegetatively through adventitious buds situated along the notched margins of its leaves?",
      "options": [
        "Pisum sativum",
        "Bryophyllum",
        "Spirogyra",
        "Hydra"
      ],
      "answer": "Bryophyllum",
      "explanation": "Bryophyllum leaves produce vegetative buds in marginal notches that sprout into plantlets upon falling on moist soil."
    },
    {
      "id": "m06_q07",
      "question": "Which of the following commercially grown plants has lost the biological capacity to produce viable seeds and is propagated EXCLUSIVELY by vegetative methods?",
      "options": [
        "Wheat",
        "Cultivated Banana, Rose, and Jasmine",
        "Mustard",
        "Pea"
      ],
      "answer": "Cultivated Banana, Rose, and Jasmine",
      "explanation": "Edible bananas, garden roses, and jasmine produce sterile seeds and rely on vegetative propagation."
    },
    {
      "id": "m06_q08",
      "question": "What vegetative structures on a potato tuber sprout into independent potato plants when planted in soil?",
      "options": [
        "Flower buds",
        "Notches containing vegetative buds, commonly called 'eyes'",
        "Root hairs",
        "Tendrils"
      ],
      "answer": "Notches containing vegetative buds, commonly called 'eyes'",
      "explanation": "Potato eyes are nodal depressions containing dormant vegetative buds that sprout into new plants."
    },
    {
      "id": "m06_q09",
      "question": "In the horticultural technique of grafting, what are the rooted lower portion and the inserted upper shoot portion called?",
      "options": [
        "Stock (rooted portion) and Scion (attached upper shoot)",
        "Stigma and Anther",
        "Plumule and Radicle",
        "Ovule and Pollen"
      ],
      "answer": "Stock (rooted portion) and Scion (attached upper shoot)",
      "explanation": "The rooted base is the stock; the grafted branch bearing desired fruit/flower qualities is the scion."
    },
    {
      "id": "m06_q10",
      "question": "Why do commercial orchard farmers prefer fruit trees raised by vegetative propagation over those grown from seeds?",
      "options": [
        "Vegetative plants require zero water.",
        "Vegetatively propagated trees bear flowers and fruits much earlier, and preserve identical high fruit quality across all trees.",
        "Vegetative trees grow 500 meters tall.",
        "They turn into evergreen conifers."
      ],
      "answer": "Vegetatively propagated trees bear flowers and fruits much earlier, and preserve identical high fruit quality across all trees.",
      "explanation": "Vegetative propagation eliminates the juvenile seed phase, accelerating fruiting while preserving genetic uniformity."
    }
  ]
}
modules_1_to_10.append(m06)

# Module 7
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Plant Tissue Culture (Micropropagation) & Spore Formation in Rhizopus",
  "tagline": "Sterile callus culture, disease-free cloning, and thick-walled fungal sporangiospores.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Plant Tissue Culture (Micropropagation):</h3>
<p><strong>Tissue culture</strong> is a modern biotechnological technique used to propagate thousands of plants from a tiny pinch of plant tissue under strictly sterile laboratory conditions:</p>
<ol>
  <li><strong>Tissue Isolation:</strong> A small group of cells or tissue is removed from the growing apical tip of a desired parent plant.</li>
  <li><strong>Callus Formation:</strong> The cells are placed in an artificial liquid or agar nutrient medium containing vitamins, salts, and sucrose. The cells divide rapidly to form an unorganized, undifferentiated mass of cells called a <strong>callus</strong>.</li>
  <li><strong>Hormonal Differentiation:</strong> The callus is transferred to a second medium containing specific ratios of plant hormones (<strong>auxins and cytokinins</strong>) that stimulate the differentiation of roots and shoots, forming miniature <strong>plantlets</strong>.</li>
  <li><strong>Hardening:</strong> The plantlets are transplanted into sterile soil and greenhouse nurseries to grow into mature plants.</li>
  <li><strong>Key Advantages:</strong>
    <ul>
      <li>Thousands of plants can be grown from a single parent in a fraction of the time.</li>
      <li>Plants can be grown in <strong>completely disease-free, virus-free conditions</strong> (since apical meristems are free of viruses).</li>
      <li>Widely used for ornamental plants (orchids, carnations, chrysanthemums).</li>
    </ul>
  </li>
</ol>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Spore Formation in *Rhizopus* (Bread Mould):</h3>
<p>When moist bread is kept in a warm, dark place for a few days, a white, fluffy cotton-like growth appears, which soon turns black. This is the fungus <strong>Rhizopus (common bread mould)</strong>:</p>
<ul>
  <li><strong>Vegetative Structure:</strong> The non-reproductive vegetative body consists of a thread-like network of branching filaments called <strong>hyphae</strong>.</li>
  <li><strong>Reproductive Structures (Sporangia):</strong>
    <ul>
      <li>Certain hyphae grow vertically upward as erect stalks called <strong>sporangiophores</strong>.</li>
      <li>At the tip of each sporangiophore develops a swollen, rounded knob-like structure called a <strong>sporangium</strong>.</li>
      <li>Inside each sporangium, the nucleus divides repeatedly to produce hundreds of microscopic, dust-like reproductive cells called <strong>spores</strong>.</li>
    </ul>
  </li>
  <li><strong>Spore Survival Adaptation:</strong> Each microscopic spore is enveloped in a <strong>thick, tough protective wall</strong> that shields it from dehydration, extreme heat, and adverse environmental conditions. When the mature sporangium bursts, spores are blown into the air. When a spore lands on a moist, warm organic food surface (like bread), it germinates into new hyphae!</li>
</ul>
""",
  "pointsToRemember": [
    "Tissue culture grows whole plants from cell scraps in nutrient media with hormones via an undifferentiated callus.",
    "Tissue culture allows disease-free, virus-free micropropagation of ornamental plants.",
    "Rhizopus produces spores inside bulbous sporangia on erect hyphae; spores have thick protective walls to survive adverse conditions."
  ],
  "keyNotes": [
    "Board Highlight: State the biological structure of bread mould: Vegetative thread-like hyphae, erect stalks, and bulbous sporangia containing thick-walled spores."
  ],
  "questions": [
    get_bank_q(26, "m07_q01"), get_bank_q(27, "m07_q02"), get_bank_q(28, "m07_q03"),
    get_bank_q(29, "m07_q04"), get_bank_q(30, "m07_q05"),
    {
      "id": "m07_q06",
      "question": "What is the undifferentiated, rapidly dividing mass of cells formed during the initial stage of plant tissue culture called?",
      "options": [
        "Zygote",
        "Callus",
        "Embryo",
        "Sporangium"
      ],
      "answer": "Callus",
      "explanation": "In tissue culture, explant cells proliferate in nutrient agar to form an unorganised cell mass called a callus."
    },
    {
      "id": "m07_q07",
      "question": "What major sanitary and phytosanitary advantage does plant tissue culture offer for commercial orchid and ornamental growers?",
      "options": [
        "Plants grow without needing water.",
        "Thousands of disease-free and virus-free plantlets can be cloned from a tiny virus-free apical meristem in sterile culture.",
        "Plants turn into gold.",
        "It eliminates the need for photosynthesis."
      ],
      "answer": "Thousands of disease-free and virus-free plantlets can be cloned from a tiny virus-free apical meristem in sterile culture.",
      "explanation": "Apical meristems are naturally free of viruses; culturing them yields certified disease-free commercial crops."
    },
    {
      "id": "m07_q08",
      "question": "In the common bread mould Rhizopus, what are the erect reproductive structures that bear bulbous spore-filled sporangia called?",
      "options": [
        "Root hairs",
        "Hyphae (specifically erect sporangiophores)",
        "Stomata",
        "Pollen grains"
      ],
      "answer": "Hyphae (specifically erect sporangiophores)",
      "explanation": "Erect aerial hyphae termed sporangiophores elevate the knob-like sporangia into air currents."
    },
    {
      "id": "m07_q09",
      "question": "How do the microscopic spores of Rhizopus survive dry, hot, and unfavorable environmental conditions until they find food?",
      "options": [
        "They hide inside living animals.",
        "Each spore is enveloped by a thick, tough protective outer wall that shields it from dehydration and heat.",
        "They carry tiny water bottles.",
        "They turn into seeds."
      ],
      "answer": "Each spore is enveloped by a thick, tough protective outer wall that shields it from dehydration and heat.",
      "explanation": "The durable, desiccation-resistant spore wall enables survival in harsh air currents until moist substrata are reached."
    },
    {
      "id": "m07_q10",
      "question": "Which two plant hormones are added in calibrated ratios to the tissue culture medium to induce root and shoot differentiation from the callus?",
      "options": [
        "Adrenaline and Insulin",
        "Auxins and Cytokinins",
        "Abscisic acid and Ethylene",
        "Thyroxin and Testosterone"
      ],
      "answer": "Auxins and Cytokinins",
      "explanation": "Balancing auxin (root promoting) and cytokinin (shoot promoting) ratios drives organogenesis in plant tissue culture."
    }
  ]
}
modules_1_to_10.append(m07)

# Module 8
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Why Sexual Reproduction? Genetic Diversity & Meiotic Halving",
  "tagline": "Combining genomic variations from two parents without doubling chromosome counts.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>While asexual reproduction is fast and requires only one parent, it produces offspring that are nearly identical clones. Why, then, did complex multicellular life evolve the intricate, energy-expensive mechanism of <strong>sexual reproduction</strong>?</p>

<h3>1. The Evolution of Genetic Variation:</h3>
<ul>
  <li>In asexual reproduction, the only source of variation is accidental DNA replication errors (which are infrequent and slow).</li>
  <li><strong>Sexual reproduction incorporates the DNA of two different parent individuals</strong>. When two distinct sets of genetic variations are combined during fertilisation, every offspring inherits a unique, novel combination of traits!</li>
  <li>This greatly enhances <strong>genetic diversity</strong>, providing evolutionary resilience and enabling species to adapt rapidly to changing environmental niches.</li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. The Problem of Doubling Chromosomes & The Solution of Meiosis:</h3>
<p>If each new generation were to combine the complete chromosome content of two parents ($2n + 2n$), the offspring would have double the number of chromosomes ($4n$), the next generation $8n$, and the genetic order would degenerate into chaos!</p>
<p><strong>Nature's Elegant Solution — Reduction Division (Meiosis):</strong></p>
<ol>
  <li>Sexually reproducing organisms have specialized reproductive tissues that undergo a reductional cell division called <strong>meiosis</strong>.</li>
  <li>Meiosis halves the number of chromosomes and DNA content in the specialized germ cells (<strong>gametes</strong>), converting diploid ($2n$) germ cells into <strong>haploid ($n$) gametes</strong>:
    $$\text{Diploid Parent Cells } (2n) \xrightarrow{\text{Meiosis}} \text{Haploid Gametes } (n)$$
  </li>
  <li>During fertilisation, the male gamete ($n$) and female gamete ($n$) fuse:
    $$n\text{ (Sperm / Pollen)} + n\text{ (Egg / Ovum)} \longrightarrow 2n\text{ (Zygote)}$$
  </li>
  <li>This completely <strong>restores the original species-specific diploid chromosome number ($2n$)</strong> and normal DNA content in the offspring!</li>
</ol>
""",
  "pointsToRemember": [
    "Sexual reproduction combines genetic variations from two parents, accelerating diversity and evolution.",
    "Meiosis (reduction division) halves chromosome numbers in gametes (2n → n).",
    "Fertilisation fuses two haploid gametes (n + n) to restore the original diploid chromosome number (2n) in the zygote."
  ],
  "keyNotes": [
    "Board Highlight: Explain how the original chromosome number is maintained across generations in sexual reproduction: Meiosis halves chromosomes in gametes; fertilisation restores the diploid number."
  ],
  "questions": [
    get_bank_q(56, "m08_q01"), get_bank_q(57, "m08_q02"), get_bank_q(58, "m08_q03"),
    get_bank_q(59, "m08_q04"), get_bank_q(60, "m08_q05"),
    {
      "id": "m08_q06",
      "question": "What type of cellular division occurs during gametogenesis to halve the chromosome number from diploid (2n) to haploid (n)?",
      "options": [
        "Mitosis",
        "Meiosis (reduction division)",
        "Binary fission",
        "Budding"
      ],
      "answer": "Meiosis (reduction division)",
      "explanation": "Meiosis halves somatic chromosome numbers, producing haploid gametes with one set of chromosomes."
    },
    {
      "id": "m08_q07",
      "question": "If human somatic body cells contain 46 chromosomes (23 pairs), how many chromosomes are present in a human sperm or ovum?",
      "options": [
        "46 chromosomes",
        "23 chromosomes (haploid, n)",
        "92 chromosomes",
        "12 chromosomes"
      ],
      "answer": "23 chromosomes (haploid, n)",
      "explanation": "Gametes contain half the somatic chromosome complement: 23 individual chromosomes."
    },
    {
      "id": "m08_q08",
      "question": "How does sexual reproduction prevent the doubling of chromosome numbers in each successive generation?",
      "options": [
        "Half of the chromosomes are digested by stomach acid.",
        "Gametes are produced by meiosis with half the chromosome count; fertilisation between two haploid gametes restores the original diploid number in the zygote.",
        "Chromosomes dissolve in air.",
        "Parents lose all their chromosomes."
      ],
      "answer": "Gametes are produced by meiosis with half the chromosome count; fertilisation between two haploid gametes restores the original diploid number in the zygote.",
      "explanation": "The alternation of meiotic chromosome halving (n) and fertilisation (n + n = 2n) maintains constant ploidy."
    },
    {
      "id": "m08_q09",
      "question": "What major evolutionary advantage does sexual reproduction possess over asexual reproduction?",
      "options": [
        "It requires only one parent.",
        "It combines genetic variations from two different parent individuals, generating unique trait combinations that drive natural selection.",
        "It is 100 times faster.",
        "It produces identical clones."
      ],
      "answer": "It combines genetic variations from two different parent individuals, generating unique trait combinations that drive natural selection.",
      "explanation": "Genetic recombination and crossing over produce diverse phenotypes, enhancing evolutionary adaptiveness."
    },
    {
      "id": "m08_q10",
      "question": "A plant species has 2n = 24 chromosomes in its root vegetative cells. How many chromosomes will be found in its pollen grains and in its fertilized zygote respectively?",
      "options": [
        "24 in pollen, 48 in zygote",
        "12 in pollen (haploid, n), and 24 in zygote (diploid, 2n)",
        "12 in pollen, 12 in zygote",
        "6 in pollen, 12 in zygote"
      ],
      "answer": "12 in pollen (haploid, n), and 24 in zygote (diploid, 2n)",
      "explanation": "Pollen gametes are haploid (n = 12); the zygote resulting from gamete fusion is diploid (2n = 24)."
    }
  ]
}
modules_1_to_10.append(m08)

# Module 9
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Sexual Reproduction in Flowering Plants: Floral Anatomy & Whorls",
  "tagline": "The four concentric whorls: Calyx, Corolla, Androecium (stamens), and Gynoecium (carpels).",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>In angiosperms (flowering plants), the <strong>flower</strong> is the specialized reproductive organ. A complete flower consists of four concentric rings or <strong>whorls</strong> arranged on an expanded stem base called the <strong>thalamus (receptacle)</strong>:</p>

<h3>The Four Floral Whorls:</h3>
<ol>
  <li><strong>Calyx (Sepals):</strong><br>
  The outermost green, leaf-like whorl. Protects the delicate inner floral organs during the young <strong>bud stage</strong>.</li>
  <li><strong>Corolla (Petals):</strong><br>
  The brightly colored, fragrant, and nectar-producing whorl. Attracts biotic pollinators (bees, butterflies, moths, birds) for cross-pollination.</li>
  <li><strong>Androecium (Stamens) — The Male Reproductive Organ:</strong><br>
  Each stamen consists of:
    <ul>
      <li>A slender stalk called the <strong>filament</strong>.</li>
      <li>A bilobed terminal head called the <strong>anther</strong>. The anther produces millions of fine, yellowish, microscopic <strong>pollen grains</strong> containing the male germ cells.</li>
    </ul>
  </li>
  <li><strong>Gynoecium / Pistil (Carpels) — The Female Reproductive Organ:</strong><br>
  Located at the center of the flower. Each carpel consists of three distinct parts:
    <ul>
      <li><strong>Stigma:</strong> The sticky, receptive terminal landing pad for pollen grains.</li>
      <li><strong>Style:</strong> The slender, elongated middle neck tube.</li>
      <li><strong>Ovary:</strong> The swollen basal chamber containing one or more <strong>ovules</strong>. Inside each ovule is an <strong>embryo sac</strong> containing the female germ cell (the <strong>egg cell / ovum</strong>).</li>
    </ul>
  </li>
</ol>

<h3>Unisexual vs Bisexual Flowers:</h3>
<ul>
  <li><strong>Bisexual Flowers:</strong> Contain <strong>both</strong> stamens and carpels in the same flower. Examples: <strong>Mustard</strong>, <strong>Hibiscus</strong> (China rose).</li>
  <li><strong>Unisexual Flowers:</strong> Contain <strong>either</strong> stamens OR carpels, but not both. Examples: <strong>Papaya</strong>, <strong>Watermelon</strong>.</li>
</ul>
""",
  "pointsToRemember": [
    "A flower consists of four whorls: Sepals (protection), Petals (pollinator attraction), Stamens (male), and Carpels (female).",
    "Stamens consist of filament and anther (produces pollen); Carpels consist of stigma, style, and ovary (contains ovules with egg cells).",
    "Bisexual flowers contain both stamens and carpels (Mustard, Hibiscus); Unisexual flowers have either stamens or carpels (Papaya, Watermelon)."
  ],
  "keyNotes": [
    "Board Diagram Classic: Practice drawing a longitudinal section (LS) of a flower, clearly labelling Sepal, Petal, Stamen (Anther, Filament), and Carpel (Stigma, Style, Ovary, Ovule)."
  ],
  "questions": [
    get_bank_q(61, "m09_q01"), get_bank_q(62, "m09_q02"), get_bank_q(63, "m09_q03"),
    get_bank_q(64, "m09_q04"), get_bank_q(65, "m09_q05"),
    {
      "id": "m09_q06",
      "question": "Which of the following flowers is classified as UNISEXUAL because it contains either stamens or carpels, but not both?",
      "options": [
        "Hibiscus",
        "Mustard",
        "Papaya and Watermelon",
        "Rose"
      ],
      "answer": "Papaya and Watermelon",
      "explanation": "Papaya and watermelon produce separate male (staminate) and female (pistillate) unisexual flowers."
    },
    {
      "id": "m09_q07",
      "question": "What are the three anatomical parts that constitute the female reproductive organ (carpel/pistil) of a flower?",
      "options": [
        "Anther, Filament, and Pollen",
        "Stigma (sticky tip), Style (middle tube), and Ovary (swollen base containing ovules)",
        "Sepal, Petal, and Receptacle",
        "Cotyledon, Plumule, and Radicle"
      ],
      "answer": "Stigma (sticky tip), Style (middle tube), and Ovary (swollen base containing ovules)",
      "explanation": "The carpel consists of receptive stigma, conducting style, and basal ovule-bearing ovary."
    },
    {
      "id": "m09_q08",
      "question": "What structure in the male stamen synthesizes and releases yellow powdery pollen grains containing male germ cells?",
      "options": [
        "Filament",
        "Anther",
        "Stigma",
        "Petal"
      ],
      "answer": "Anther",
      "explanation": "The bilobed anther houses microsporangia where pollen grains develop via meiosis."
    },
    {
      "id": "m09_q09",
      "question": "Where is the female egg cell (ovum) located inside the carpel of a flowering plant?",
      "options": [
        "Inside the pollen grain",
        "Inside the embryo sac within an ovule situated in the ovary",
        "On the surface of the stigma",
        "Inside the sepals"
      ],
      "answer": "Inside the embryo sac within an ovule situated in the ovary",
      "explanation": "The female gamete (egg cell) is enclosed within the embryo sac inside an ovarian ovule."
    },
    {
      "id": "m09_q10",
      "question": "Which floral whorl is brightly colored, fragrant, and secretes sugary nectar to attract insect pollinators?",
      "options": [
        "Calyx (sepals)",
        "Corolla (petals)",
        "Androecium",
        "Thalamus"
      ],
      "answer": "Corolla (petals)",
      "explanation": "Petals use pigment color, volatile scent, and nectar guides to attract biotic pollinators."
    }
  ]
}
modules_1_to_10.append(m09)

# Module 10
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Pollination: Self-Pollination vs Cross-Pollination & Pollinators",
  "tagline": "Pollen transfer mechanisms, biotic vectors, and evolutionary advantages of outcrossing.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>For sexual reproduction in plants to succeed, the non-motile male germ cells enclosed inside pollen grains must be transported to the female carpel. The process of transferring pollen grains from the anther to the receptive stigma of a flower is called <strong>pollination</strong>.</p>

<h3>Two Types of Pollination:</h3>
<ol>
  <li><strong>Self-Pollination:</strong><br>
  The transfer of pollen grains from the anther to the stigma of the <strong>same flower</strong> or another flower on the <strong>same parent plant</strong>.<br>
  <em>Characteristics:</em> Does not require external pollinating agents; preserves genetic purity; yields lower genetic variation. Common in closed flowers (cleistogamy) like pea, wheat, and rice.</li>
  <li><strong>Cross-Pollination:</strong><br>
  The transfer of pollen grains from the anther of one flower to the stigma of a flower on a <strong>completely different plant of the same species</strong>.<br>
  <em>Characteristics:</em> Introduces new genetic variations and produces hardier offspring with higher adaptability. Requires external pollinating agents.</li>
</ol>

<h3>Pollinating Agents (Vectors):</h3>
<ul>
  <li><strong>Biotic (Living) Agents:</strong> Insects (bees, butterflies, moths), birds, and bats. Flowers pollinated by insects are brightly colored, fragrant, and produce sticky pollen grains and sweet nectar.</li>
  <li><strong>Abiotic (Non-Living) Agents:</strong>
    <ul>
      <li><strong>Wind (Anemophily):</strong> Grasses, maize, corn. Flowers are dull, small, non-scented, but produce huge quantities of lightweight, non-sticky pollen and large, feathery stigmas to catch windborne grains.</li>
      <li><strong>Water (Hydrophily):</strong> Submerged aquatic plants like <em>Vallisneria</em> and <em>Hydrilla</em>.</li>
    </ul>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Pollination is the transfer of pollen grains from anther to stigma.",
    "Self-pollination occurs within the same flower/plant; Cross-pollination transfers pollen between different plants of the same species.",
    "Cross-pollination is mediated by biotic agents (insects, birds) or abiotic agents (wind, water) and generates higher genetic diversity."
  ],
  "keyNotes": [
    "Exam Question: Differentiate between self-pollination and cross-pollination. Why is cross-pollination favored in nature? (It introduces genetic variation and hardier offspring)."
  ],
  "questions": [
    get_bank_q(66, "m10_q01"), get_bank_q(67, "m10_q02"), get_bank_q(68, "m10_q03"),
    get_bank_q(69, "m10_q04"), get_bank_q(70, "m10_q05"),
    {
      "id": "m10_q06",
      "question": "What biological term describes the transfer of pollen grains from the anther of a flower to the stigma of another flower on a DIFFERENT plant of the same species?",
      "options": [
        "Self-pollination",
        "Cross-pollination",
        "Parthenogenesis",
        "Transpiration"
      ],
      "answer": "Cross-pollination",
      "explanation": "Cross-pollination (xenogamy) transfers pollen between flowers of genetically distinct plants of the same species."
    },
    {
      "id": "m10_q07",
      "question": "What floral adaptations are typically observed in wind-pollinated flowers such as maize and grasses?",
      "options": [
        "Giant red petals dripping with sweet perfume",
        "Small, non-showy flowers with immense quantities of light, dry, non-sticky pollen and large feathery stigmas",
        "Flowers that only open underwater",
        "Flowers smelling of rotten meat"
      ],
      "answer": "Small, non-showy flowers with immense quantities of light, dry, non-sticky pollen and large feathery stigmas",
      "explanation": "Wind-pollinated plants produce lightweight aerodynamic pollen and feathery stigmas to capture airborne grains."
    },
    {
      "id": "m10_q08",
      "question": "Why is cross-pollination generally favored over self-pollination in natural ecosystems?",
      "options": [
        "It eliminates the need for petals.",
        "It combines genetic variations from two different plants, resulting in greater genetic diversity and hardier offspring.",
        "It stops seed formation completely.",
        "It makes plants resistant to gravity."
      ],
      "answer": "It combines genetic variations from two different plants, resulting in greater genetic diversity and hardier offspring.",
      "explanation": "Cross-pollination introduces novel alleles, increasing heterozygosity and hybrid vigor."
    },
    {
      "id": "m10_q09",
      "question": "What is the primary function of the sticky surface coating present on the mature stigma of a flower?",
      "options": [
        "To digest the petals",
        "To trap and hold pollen grains firmly upon contact and stimulate pollen germination",
        "To poison bees",
        "To absorb sunlight"
      ],
      "answer": "To trap and hold pollen grains firmly upon contact and stimulate pollen germination",
      "explanation": "Sticky stigmatic secretions physically anchor incoming pollen grains and provide nutrients for germination."
    },
    {
      "id": "m10_q10",
      "question": "Which of the following organisms acts as a biotic (living) pollinator for flowering plants?",
      "options": [
        "Wind",
        "Honeybees and butterflies",
        "Rainwater",
        "Gravity"
      ],
      "answer": "Honeybees and butterflies",
      "explanation": "Insects such as honeybees are prominent biotic vectors carrying pollen between blossoms."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch7_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Chapter 7 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
