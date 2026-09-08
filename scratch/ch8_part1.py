# -*- coding: utf-8 -*-
"""
CH8 Part 1: Modules 1 to 10
Heredity (Class 10 Science)
"""
import json

with open('scratch/ch8_bank_questions.json', 'r', encoding='utf-8') as f:
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

# ==========================================
# Module 1: Heredity & Accumulation of Variations
# ==========================================
m01 = {
  "id": "m01", "moduleNumber": 1,
  "title": "Heredity & Accumulation of Variations during Reproduction",
  "tagline": "Transmission of traits, DNA copying inaccuracy, and phenotypic variation in asexual vs sexual reproduction.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Definition of Heredity</h4>
    <p><strong>Heredity</strong> refers to the biological mechanism by which physical, biochemical, and physiological characteristics (traits) are transmitted from parents to their biological offspring across successive generations. The basic blueprint for all inherited traits resides within the chromosomes present in the cell nucleus, encoded in molecules of deoxyribonucleic acid (<strong>DNA</strong>).</p>

    <h4>2. Variations during Reproduction</h4>
    <p>Reproduction inherently creates new individuals that resemble their parents while exhibiting subtle or pronounced differences. These differences in traits among individuals of the same species are termed <strong>variations</strong>:</p>
    <ul>
      <li><strong>In Asexual Reproduction:</strong> Because a single parent divides mitotically without gamete fusion, variation is extremely minimal—arising solely from minor biochemical inaccuracies during DNA replication. For example, in a field of sugarcane grown by stem cuttings, millions of plants display near-identical morphological traits.</li>
      <li><strong>In Sexual Reproduction:</strong> Involves the fusion of two distinct gametes derived from two separate parents, each contributing half of the genetic information. The crossing over during meiosis combined with random union of gametes generates vast phenotypic diversity.</li>
    </ul>

    <h4>3. Accumulation of Variations across Generations</h4>
    <p>When a bacterium divides by binary fission, it gives rise to two daughter bacteria. If one daughter possesses a minor mutation (for instance, tolerance to higher heat), its subsequent progeny will inherit this variation along with newly generated differences. Over successive generations, variations accumulate within the gene pool, providing the essential substrate for natural selection and evolutionary survival in changing environments.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Heredity is the biological transmission of traits from parents to offspring governed by cellular DNA.",
    "Asexual reproduction produces clones with very low variation; sexual reproduction generates substantial diversity.",
    "Variations accumulate over generations and provide adaptability to shifting environmental niches (e.g., heat-resistant bacteria)."
  ],
  "keyNotes": [
    "Depending on the nature of variations, different individuals possess distinct survival advantages in varying environmental conditions."
  ],
  "questions": [
    get_bank_q(1, "m01_q01"),
    get_bank_q(2, "m01_q02"),
    get_bank_q(3, "m01_q03"),
    get_bank_q(21, "m01_q04"),
    get_bank_q(30, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "What is the primary cellular source of novel variations arising during asexual reproduction?",
      "options": [
        "Biochemical inaccuracies during enzymatic DNA replication",
        "Meiotic crossing over between homologous chromosomes",
        "Fusion of gametes from two distinct parental plants",
        "Digestion of cellular starch by amylase"
      ],
      "answer": "Biochemical inaccuracies during enzymatic DNA replication",
      "explanation": "In asexual reproduction, where no meiotic recombination occurs, minor copying errors during DNA replication are the sole source of genetic variations."
    },
    {
      "id": "m01_q07",
      "question": "Why do sexually reproducing populations exhibit vastly higher phenotypic diversity than asexually reproducing ones?",
      "options": [
        "They consume more dietary protein",
        "Two parental genomes recombine via meiosis and fertilisation to produce unique gene combinations",
        "Their cells divide at three times the speed",
        "They do not rely on cellular DNA"
      ],
      "answer": "Two parental genomes recombine via meiosis and fertilisation to produce unique gene combinations",
      "explanation": "Sexual reproduction shuffles alleles through meiotic independent assortment, crossing over, and random syngamy from two parents, creating immense diversity."
    },
    {
      "id": "m01_q08",
      "question": "If a sudden heatwave strikes a pond, which bacterial population is most likely to survive?",
      "options": [
        "A population of identical clones possessing zero heat tolerance",
        "A diverse population containing pre-existing heat-resistant variant individuals",
        "Only bacteria that stop reproducing completely",
        "Only bacteria lacking cell walls"
      ],
      "answer": "A diverse population containing pre-existing heat-resistant variant individuals",
      "explanation": "Pre-existing genetic variants with heat-resistant enzymes survive the temperature spike, proliferate, and ensure the survival of the species."
    },
    {
      "id": "m01_q09",
      "question": "Asexual clones in a commercial sugarcane plantation exhibit very little morphological variation because:",
      "options": [
        "Sugarcane lacks DNA",
        "All plants are produced from vegetative cuttings with identical genetic material derived from a single parent",
        "Sugarcane flowers every 24 hours",
        "Soil nutrients suppress all gene expression"
      ],
      "answer": "All plants are produced from vegetative cuttings with identical genetic material derived from a single parent",
      "explanation": "Vegetative propagation in sugarcane relies exclusively on mitotic division of parental tissues, producing genetic clones."
    },
    {
      "id": "m01_q10",
      "question": "Which of the following best describes the evolutionary significance of genetic variation in a population?",
      "options": [
        "It guarantees that all individuals remain identical",
        "It provides raw material for natural selection to preserve species against unpredictable niche changes",
        "It eliminates all dominant alleles from the gene pool",
        "It halts cellular respiration in older individuals"
      ],
      "answer": "It provides raw material for natural selection to preserve species against unpredictable niche changes",
      "explanation": "Genetic variation ensures that at least some individuals possess traits that allow them to survive changing climates, predators, or novel pathogens."
    }
  ]
}
modules_1_to_10.append(m01)

# ==========================================
# Module 2: Inherited vs Acquired Traits
# ==========================================
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Inherited Traits vs Acquired Traits: Somatic vs Germ Cells",
  "tagline": "Transmission through reproductive germ cells vs environmental modifications in somatic tissues.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Inherited Traits</h4>
    <p><strong>Inherited traits</strong> are genetically determined characteristics passed down from parents to offspring through the DNA of reproductive cells (gametes: sperms and ova). Examples include eye colour (brown vs blue), natural hair texture (curly vs straight), earlobe attachment (free vs attached), and ABO blood groups.</p>
    <p>Because the genetic instructions are coded into the germ-line DNA, inherited traits are permanent and transmissible to subsequent generations.</p>

    <h4>2. Acquired Traits</h4>
    <p><strong>Acquired traits</strong> are phenotypic modifications developed by an organism during its lifetime as an adaptive response to environmental factors, lifestyle, injury, or learning. Examples include muscular hypertrophy from athletic weightlifting, scars from surgery, knowledge of a foreign language, and weight loss caused by starvation.</p>

    <h4>3. Somatic Cells vs Germ Cells</h4>
    <p>The crucial biological distinction lies in the cellular location of the alteration:</p>
    <ul>
      <li><strong>Somatic Cells:</strong> Form the non-reproductive tissues of the body (muscles, skin, bones). Environmental changes to somatic tissues do not alter the nucleotide sequence of DNA in germ cells, and therefore <strong>cannot be passed to offspring</strong>.</li>
      <li><strong>Germ Cells (Gametes):</strong> Produce eggs and sperm. Only mutations or alleles present in germ-cell DNA are transmitted during fertilisation.</li>
    </ul>

    <h4>4. August Weismann's Experiment</h4>
    <p>August Weismann disproved the inheritance of acquired traits by amputating the tails of mice over 20 successive generations. Every generation of newborn mice was born with a full-length tail, conclusively proving that mutilation of somatic tissue does not alter germ-cell DNA.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Inherited traits are encoded in germ-cell DNA and transmitted across generations (e.g., earlobe attachment, eye colour).",
    "Acquired traits develop during an individual's lifetime in somatic tissues and cannot be inherited (e.g., muscular build, scars).",
    "Weismann's tail-docking experiment conclusively demonstrated that somatic alterations do not affect the germ plasm."
  ],
  "keyNotes": [
    "Changes in non-reproductive (somatic) tissues cannot be passed on to the DNA of the germ cells, so acquired traits do not drive heredity or direct evolution."
  ],
  "questions": [
    get_bank_q(4, "m02_q01"),
    get_bank_q(22, "m02_q02"),
    get_bank_q(40, "m02_q03"),
    get_bank_q(60, "m02_q04"),
    get_bank_q(80, "m02_q05"),
    {
      "id": "m02_q06",
      "question": "Which of the following is a classic example of an inherited trait in human beings?",
      "options": [
        "Ability to speak fluent French",
        "Attached vs free earlobes",
        "Calluses on a guitarist's fingers",
        "Loss of an arm in an accident"
      ],
      "answer": "Attached vs free earlobes",
      "explanation": "Attached vs free earlobes is a genetically determined Mendelian trait governed by chromosomal DNA."
    },
    {
      "id": "m02_q07",
      "question": "Why can an Olympic weightlifter with massive muscular development NOT pass this muscularity to his newborn child?",
      "options": [
        "Muscles do not contain proteins",
        "Muscular hypertrophy is a somatic adaptation that does not alter germ-cell DNA",
        "Sperm cells carry no cytoplasm",
        "Testosterone is not an endocrine hormone"
      ],
      "answer": "Muscular hypertrophy is a somatic adaptation that does not alter germ-cell DNA",
      "explanation": "Muscle hypertrophy affects somatic muscle cells; it does not change the DNA sequence inside gametes (sperm cells)."
    },
    {
      "id": "m02_q08",
      "question": "In August Weismann's experiment, mice had their tails amputated for 20 successive generations. Why were the 21st generation mice born with normal tails?",
      "options": [
        "Tails regrew inside the uterus",
        "Somatic injury does not alter the genes in reproductive germ cells",
        "Mice possess an anti-cutting gene in their fur",
        "The mice learned to hide their tails"
      ],
      "answer": "Somatic injury does not alter the genes in reproductive germ cells",
      "explanation": "Cutting the tail alters somatic tissue only; the germ cells continue to carry the unmutated DNA instructions for tail development."
    },
    {
      "id": "m02_q09",
      "question": "Which cell lineage carries the genetic blueprint from one generation to the next in sexually reproducing organisms?",
      "options": ["Somatic cells", "Germ cells (gametes)", "Epidermal cells", "Erythrocytes"],
      "answer": "Germ cells (gametes)",
      "explanation": "Germ cells (sperms and ova) alone undergo meiosis to transmit genomic information to the next generation."
    },
    {
      "id": "m02_q10",
      "question": "If a person gets a permanent tattoo on their arm, will their biological child be born with a tattoo? Why or why not?",
      "options": [
        "Yes, because tattoos alter epidermal DNA",
        "No, because ink deposition in the dermis is an acquired somatic change that cannot affect gametic DNA",
        "Yes, if both parents have identical tattoos",
        "Only male children will inherit the tattoo"
      ],
      "answer": "No, because ink deposition in the dermis is an acquired somatic change that cannot affect gametic DNA",
      "explanation": "Tattoos are external somatic modifications; they do not alter germ-line DNA in sperms or eggs."
    }
  ]
}
modules_1_to_10.append(m02)

# ==========================================
# Module 3: Mendel & Garden Pea (Pisum sativum)
# ==========================================
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Gregor Johann Mendel: The Father of Genetics & Choice of Pea Plant",
  "tagline": "Scientific methodology, statistical record-keeping, and the seven contrasting traits of Pisum sativum.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Gregor Johann Mendel (1822–1884)</h4>
    <p>Gregor Johann Mendel, an Austrian monk and scientist working in the monastery garden at Brno, conducted hybridization experiments between 1856 and 1863 that laid the mathematical foundations of modern genetics. Mendel was the first to combine rigorous experimental biology with <strong>mathematical statistics and large sample sizes</strong>.</p>

    <h4>2. Why Did Mendel Choose the Garden Pea (Pisum sativum)?</h4>
    <p>The garden pea was the ideal model organism for several compelling biological reasons:</p>
    <ul>
      <li><strong>Distinct Contrasting Traits:</strong> Displayed clear-cut, easily observable alternative traits with no intermediate forms (e.g., tall vs dwarf, violet vs white flowers).</li>
      <li><strong>Bisexual Flowers & Natural Self-Pollination:</strong> Pea flowers are naturally self-pollinating because petals enclose the reproductive whorls, ensuring pure-breeding parent lines.</li>
      <li><strong>Easy Artificial Cross-Pollination:</strong> Cross-breeding could easily be manipulated by <em>emasculation</em> (removal of anthers before dehiscence) and manual dusting of selected pollen onto the stigma.</li>
      <li><strong>Short Life Cycle & High Seed Yield:</strong> Annual herb completing its life cycle in a single season, producing hundreds of seeds per pod, allowing statistical analysis over multiple generations.</li>
    </ul>

    <h4>3. The Seven Contrasting Traits Studied by Mendel</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Character</th><th>Dominant Trait</th><th>Recessive Trait</th></tr></thead>
      <tbody>
        <tr><td>Plant Height</td><td>Tall (T)</td><td>Dwarf (t)</td></tr>
        <tr><td>Flower Colour</td><td>Violet / Purple (W)</td><td>White (w)</td></tr>
        <tr><td>Flower Position</td><td>Axial (A)</td><td>Terminal (a)</td></tr>
        <tr><td>Pod Shape</td><td>Inflated / Full (I)</td><td>Constricted (i)</td></tr>
        <tr><td>Pod Colour</td><td>Green (G)</td><td>Yellow (g)</td></tr>
        <tr><td>Seed Shape</td><td>Round (R)</td><td>Wrinkled (r)</td></tr>
        <tr><td>Seed Colour</td><td>Yellow (Y)</td><td>Green (y)</td></tr>
      </tbody>
    </table>
  </div>
</div>
""",
  "pointsToRemember": [
    "Gregor Mendel is universally recognized as the 'Father of Modern Genetics'.",
    "Pisum sativum was selected due to clear contrasting traits, short life span, natural self-pollination, and high seed yield.",
    "Mendel studied 7 contrasting character pairs, including tall/dwarf stem, round/wrinkled seeds, and yellow/green cotyledons."
  ],
  "keyNotes": [
    "Mendel's monumental success stemmed from studying one or two traits at a time and applying quantitative mathematical ratios to biological data."
  ],
  "questions": [
    get_bank_q(5, "m03_q01"),
    get_bank_q(23, "m03_q02"),
    get_bank_q(51, "m03_q03"),
    {
      "id": "m03_q04",
      "question": "What is the scientific biological name of the garden pea plant selected by Gregor Mendel?",
      "options": ["Pisum sativum", "Solanum tuberosum", "Brassica oleracea", "Oryza sativa"],
      "answer": "Pisum sativum",
      "explanation": "Mendel worked with the garden pea, scientifically named Pisum sativum."
    },
    {
      "id": "m03_q05",
      "question": "Which of the following was a major reason why Pisum sativum was ideally suited for hybridization experiments?",
      "options": [
        "It takes 50 years to produce flowers",
        "It naturally self-pollinates and exhibits sharply contrasting, discrete morphological characters",
        "It reproduces solely through underground tubers",
        "Its flowers have no pistils"
      ],
      "answer": "It naturally self-pollinates and exhibits sharply contrasting, discrete morphological characters",
      "explanation": "Pea plants have distinct contrasting characters, natural self-pollination, a short life cycle, and allow easy artificial hybridization."
    },
    {
      "id": "m03_q06",
      "question": "What is the surgical removal of immature anthers from a bisexual flower bud before self-pollination called?",
      "options": ["Emasculation", "Bagging", "Germination", "Syngamy"],
      "answer": "Emasculation",
      "explanation": "Emasculation is the removal of anthers from bisexual flowers to prevent unwanted self-pollination during artificial hybridization."
    },
    {
      "id": "m03_q07",
      "question": "Which of the following seed traits was identified as DOMINANT by Mendel?",
      "options": ["Wrinkled seed shape", "Green seed colour", "Round seed shape", "Constricted seed coat"],
      "answer": "Round seed shape",
      "explanation": "Round seed shape (R) is dominant over wrinkled seed shape (r); yellow seed colour (Y) is dominant over green (y)."
    },
    {
      "id": "m03_q08",
      "question": "Regarding stem height in pea plants, what are the dominant and recessive phenotypes?",
      "options": [
        "Tall is dominant; Dwarf is recessive",
        "Dwarf is dominant; Tall is recessive",
        "Medium height is dominant; Tall is recessive",
        "Both are co-dominant"
      ],
      "answer": "Tall is dominant; Dwarf is recessive",
      "explanation": "Tallness (T) is dominant over dwarfism (t) in Pisum sativum."
    },
    {
      "id": "m03_q09",
      "question": "Regarding pod colour in pea plants, which trait is dominant over the other?",
      "options": [
        "Green pod colour is dominant over yellow pod colour",
        "Yellow pod colour is dominant over green pod colour",
        "White pod colour is dominant over violet pod colour",
        "All pods are red"
      ],
      "answer": "Green pod colour is dominant over yellow pod colour",
      "explanation": "In pea pods, green pod colour (G) is dominant over yellow pod colour (g), whereas in seeds, yellow is dominant over green."
    },
    {
      "id": "m03_q10",
      "question": "What groundbreaking methodological approach distinguished Mendel's experiments from previous breeders?",
      "options": [
        "Using electron microscopes",
        "Applying mathematical statistics, ratios, and large sample sizes to biological heredity",
        "Using radioactive isotopes",
        "Cloning somatic cells in nutrient agar"
      ],
      "answer": "Applying mathematical statistics, ratios, and large sample sizes to biological heredity",
      "explanation": "Mendel was the first to maintain exact numerical counts, tracking discrete individual traits using mathematical ratios."
    }
  ]
}
modules_1_to_10.append(m03)

# ==========================================
# Module 4: Monohybrid Cross & F1 Generation
# ==========================================
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Mendel's Monohybrid Cross: Pure Breeding Parents & The F1 Generation",
  "tagline": "Tracking a single trait, dominance vs recessiveness, and 100% tall F1 progeny.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is a Monohybrid Cross?</h4>
    <p>A <strong>monohybrid cross</strong> is a breeding experiment between two parent organisms that differ in only <strong>one pair of contrasting traits</strong> (for example, plant height: tall vs dwarf).</p>

    <h4>2. Setting Up the Parental Generation (P Generation)</h4>
    <p>Mendel started with <strong>pure-breeding (homozygous)</strong> parental lines obtained by allowing plants to self-pollinate for many successive generations until all offspring bred true:</p>
    <ul>
      <li>Homozygous Tall Parent: Genotype $TT$ (carries two identical dominant alleles for tallness).</li>
      <li>Homozygous Dwarf Parent: Genotype $tt$ (carries two identical recessive alleles for dwarfness).</li>
    </ul>

    <h4>3. Cross-Pollination and the F1 Generation</h4>
    <p>Mendel dusted pollen from the dwarf plant ($tt$) onto the emasculated stigma of the tall plant ($TT$) and vice-versa (reciprocal cross). During gamete formation (meiosis):</p>
    <ul>
      <li>$TT$ parent produces gametes with allele $T$.</li>
      <li>$tt$ parent produces gametes with allele $t$.</li>
    </ul>
    <p>Fertilisation yields the <strong>First Filial Generation ($F_1$)</strong>: $T \times t \rightarrow Tt$ (heterozygous). Every single plant in the $F_1$ generation was <strong>100% phenotypically Tall</strong>. Not a single dwarf plant or medium-height plant appeared.</p>

    <h4>4. Principle of Dominance</h4>
    <p>From this result, Mendel concluded that:</p>
    <ul>
      <li>Traits are controlled by discrete particulate entities which he termed <strong>factors</strong> (now known as <strong>genes</strong>).</li>
      <li>In a heterozygous individual ($Tt$), only one factor expresses itself phenotypically—this is the <strong>dominant allele</strong> ($T$).</li>
      <li>The factor that remains masked or unexpressed in the presence of the dominant allele is the <strong>recessive allele</strong> ($t$).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "A monohybrid cross tracks the inheritance of a single contrasting character pair (e.g., height).",
    "Crossing pure tall ($TT$) and pure dwarf ($tt$) produces 100% tall heterozygous ($Tt$) $F_1$ progeny.",
    "The Principle of Dominance states that the dominant allele masks the recessive allele in the heterozygous state."
  ],
  "keyNotes": [
    "Recessive traits are not lost or destroyed in the $F_1$ generation; they simply remain hidden and unexpressed until the recessive alleles pair together in the homozygous condition ($tt$)."
  ],
  "questions": [
    get_bank_q(6, "m04_q01"),
    get_bank_q(24, "m04_q02"),
    get_bank_q(52, "m04_q03"),
    {
      "id": "m04_q04",
      "question": "What was the phenotypic appearance of ALL plants in the F1 generation of Mendel's tall vs dwarf monohybrid cross?",
      "options": ["100% Tall", "100% Dwarf", "50% Tall, 50% Dwarf", "100% Intermediate (Medium height)"],
      "answer": "100% Tall",
      "explanation": "Because tallness (T) is completely dominant over dwarfism (t), all heterozygous (Tt) F1 offspring exhibit the tall phenotype."
    },
    {
      "id": "m04_q05",
      "question": "What is the genotype of the F1 progeny obtained by crossing homozygous tall (TT) and homozygous dwarf (tt) pea plants?",
      "options": ["TT", "Tt", "tt", "TTtt"],
      "answer": "Tt",
      "explanation": "Each F1 plant inherits allele 'T' from the tall parent and allele 't' from the dwarf parent, resulting in the heterozygous genotype Tt."
    },
    {
      "id": "m04_q06",
      "question": "What term did Mendel use to describe the physical units of inheritance that control traits?",
      "options": ["Chromosomes", "Factors", "Histones", "Plasmids"],
      "answer": "Factors",
      "explanation": "Mendel used the word 'factors' to describe the discrete particulate carriers of heredity, which are today known as genes."
    },
    {
      "id": "m04_q07",
      "question": "An allele is defined as:",
      "options": [
        "A group of chromosomes in the cytoplasm",
        "An alternative variant form of a given gene",
        "A protein synthesized in ribosomes",
        "An enzyme in mitochondria"
      ],
      "answer": "An alternative variant form of a given gene",
      "explanation": "Alleles are alternative forms of the same gene located at corresponding loci on homologous chromosomes (e.g., T and t)."
    },
    {
      "id": "m04_q08",
      "question": "Why did NO dwarf plants appear in Mendel's F1 generation?",
      "options": [
        "The dwarf allele was mutated into a flower gene",
        "The dwarf allele is recessive and is masked phenotypically by the dominant tall allele",
        "Dwarf seeds cannot absorb water",
        "Mendel destroyed the dwarf plants"
      ],
      "answer": "The dwarf allele is recessive and is masked phenotypically by the dominant tall allele",
      "explanation": "Under Mendel's Principle of Dominance, a single copy of the dominant allele (T) completely masks the expression of the recessive allele (t)."
    },
    {
      "id": "m04_q09",
      "question": "An individual having two identical alleles for a specific gene (such as TT or tt) is termed:",
      "options": ["Heterozygous", "Homozygous", "Hemizygous", "Polyploid"],
      "answer": "Homozygous",
      "explanation": "Homozygous organisms possess two identical alleles for a particular trait (e.g., TT is homozygous dominant, tt is homozygous recessive)."
    },
    {
      "id": "m04_q10",
      "question": "If a pure violet-flowered pea plant (WW) is crossed with a pure white-flowered plant (ww), what percentage of F1 plants will bear violet flowers?",
      "options": ["25%", "50%", "75%", "100%"],
      "answer": "100%",
      "explanation": "Violet (W) is dominant over white (w). All F1 offspring have genotype Ww and produce 100% violet flowers."
    }
  ]
}
modules_1_to_10.append(m04)

# ==========================================
# Module 5: F2 Generation of Monohybrid Cross
# ==========================================
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "F2 Generation of Monohybrid Cross: 3:1 Phenotypic & 1:2:1 Genotypic Ratios",
  "tagline": "Self-pollination of F1 hybrids, reappearance of dwarfism, and mathematical genetics.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Self-Pollination of F1 Hybrids</h4>
    <p>To investigate whether the dwarf trait was permanently lost, Mendel allowed the heterozygous $F_1$ tall plants ($Tt$) to self-pollinate ($Tt \times Tt$). The resulting generation is the <strong>Second Filial Generation ($F_2$)</strong>.</p>

    <h4>2. Reappearance of the Recessive Trait</h4>
    <p>In the $F_2$ generation, the dwarf trait suddenly <strong>reappeared in one-quarter of the total offspring</strong> without any blending or intermediate heights. Out of 1,064 $F_2$ plants counted by Mendel:</p>
    <ul>
      <li>787 were Tall</li>
      <li>277 were Dwarf</li>
      <li>The mathematical ratio was approximately $2.84:1 \approx \mathbf{3:1}$.</li>
    </ul>

    <h4>3. Punnett Square Analysis</h4>
    <p>When the $Tt$ plant produces gametes, $50\%$ carry allele $T$ and $50\%$ carry allele $t$:</p>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Male \ Female Gametes</th><th>$T$ ($50\%$)</th><th>$t$ ($50\%$)</th></tr></thead>
      <tbody>
        <tr><td><strong>$T$ ($50\%$)</strong></td><td>$TT$ (Tall)</td><td>$Tt$ (Tall)</td></tr>
        <tr><td><strong>$t$ ($50\%$)</strong></td><td>$Tt$ (Tall)</td><td>$tt$ (Dwarf)</td></tr>
      </tbody>
    </table>

    <h4>4. Phenotypic vs Genotypic Ratios in F2</h4>
    <ul>
      <li><strong>Phenotypic Ratio (Observable appearance):</strong> $\mathbf{3\text{ Tall} : 1\text{ Dwarf}}$ ($75\%$ tall, $25\%$ dwarf).</li>
      <li><strong>Genotypic Ratio (Genetic constitution):</strong> $\mathbf{1\,TT : 2\,Tt : 1\,tt}$ ($1:2:1$).</li>
    </ul>
    <p>This proved that recessive alleles remain intact within hybrids without altering their integrity.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Selfing the $F_1$ generation ($Tt \times Tt$) produces the $F_2$ generation with reappearance of the recessive trait.",
    "Monohybrid $F_2$ Phenotypic Ratio is $\mathbf{3:1}$ ($3\text{ dominant} : 1\text{ recessive}$).",
    "Monohybrid $F_2$ Genotypic Ratio is $\mathbf{1:2:1}$ ($1\,TT : 2\,Tt : 1\,tt$)."
  ],
  "keyNotes": [
    "The reappearance of the dwarf phenotype in $F_2$ proves that alleles do not blend or contaminate each other in heterozygotes."
  ],
  "questions": [
    get_bank_q(7, "m05_q01"),
    get_bank_q(25, "m05_q02"),
    get_bank_q(50, "m05_q03"),
    get_bank_q(90, "m05_q04"),
    {
      "id": "m05_q05",
      "question": "What is the expected phenotypic ratio in the F2 generation of a classic Mendelian monohybrid cross?",
      "options": ["1:1", "3:1", "9:3:3:1", "1:2:1"],
      "answer": "3:1",
      "explanation": "The phenotypic ratio of dominant to recessive in the F2 generation of a monohybrid cross is 3:1."
    },
    {
      "id": "m05_q06",
      "question": "What is the exact genotypic ratio in the F2 generation of Mendel's monohybrid cross between Tt x Tt?",
      "options": ["3:1", "1:2:1 (1 TT : 2 Tt : 1 tt)", "9:3:3:1", "1:1:1:1"],
      "answer": "1:2:1 (1 TT : 2 Tt : 1 tt)",
      "explanation": "Genotypically, 1/4 are homozygous dominant (TT), 2/4 are heterozygous (Tt), and 1/4 are homozygous recessive (tt), giving a 1:2:1 ratio."
    },
    {
      "id": "m05_q07",
      "question": "If 800 pea plants are obtained in the F2 generation of a monohybrid cross (Tt x Tt), approximately how many are expected to be dwarf?",
      "options": ["800", "600", "400", "200"],
      "answer": "200",
      "explanation": "Dwarf plants constitute 25% (1/4) of the F2 generation: 1/4 × 800 = 200 plants."
    },
    {
      "id": "m05_q08",
      "question": "Among the tall plants appearing in the F2 generation (TT and Tt), what fraction is heterozygous (Tt)?",
      "options": ["1/3", "2/3", "1/4", "3/4"],
      "answer": "2/3",
      "explanation": "Out of the 3 tall plants (1 TT + 2 Tt), two are heterozygous, so the fraction is 2/3 (roughly 66.7%)."
    },
    {
      "id": "m05_q09",
      "question": "What graphical checkerboard tool invented by Reginald Punnett is used to calculate genotypic probabilities?",
      "options": ["Pedigree chart", "Punnett Square", "Karyotype", "Chromatogram"],
      "answer": "Punnett Square",
      "explanation": "A Punnett square is a diagrammatic grid used to predict the genotypes of a particular cross or breeding experiment."
    },
    {
      "id": "m05_q10",
      "question": "Why did the dwarf trait reappear in the F2 generation even though it was completely absent in the F1 generation?",
      "options": [
        "The dwarf allele mutated spontaneously during flower opening",
        "The recessive allele 't' segregated cleanly into gametes during meiosis without blending with 'T'",
        "The soil lost nitrogen during self-pollination",
        "The plants were exposed to cooler weather"
      ],
      "answer": "The recessive allele 't' segregated cleanly into gametes during meiosis without blending with 'T'",
      "explanation": "Alleles segregate during gametogenesis; when two 't'-bearing gametes fuse ($t \times t$), the homozygous dwarf genotype is re-established."
    }
  ]
}
modules_1_to_10.append(m05)

# ==========================================
# Module 6: Principle of Segregation & Gametes
# ==========================================
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "Mendel's First Law: The Principle of Segregation (Purity of Gametes)",
  "tagline": "Meiotic separation of paired alleles, haploid gametes, and the law of purity of gametes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Principle of Segregation (Mendel's First Law)</h4>
    <p>Mendel formulated the <strong>Principle of Segregation</strong> based on his monohybrid cross observations:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "The two alleles of a gene pair separate (segregate) during gamete formation, such that each gamete receives only one allele from the pair."
    </blockquote>

    <h4>2. Cellular & Meiotic Basis of Segregation</h4>
    <p>In somatic diploid cells ($2n$), homologous chromosomes exist in pairs. One chromosome carries allele $T$ while the other carries allele $t$. During <strong>Anaphase I of meiosis</strong>:</p>
    <ul>
      <li>Homologous chromosomes separate and migrate to opposite poles of the dividing cell.</li>
      <li>Consequently, the paired alleles $T$ and $t$ physically segregate into different daughter cells.</li>
      <li>Each gamete (sperm or egg cell) is <strong>haploid ($n$)</strong> and carries strictly <strong>one allele</strong> for any given gene.</li>
    </ul>

    <h4>3. The Law of Purity of Gametes</h4>
    <p>Because a gamete can never carry two alleles for the same gene, it is always "pure" for whichever allele it receives. A gamete never contains a blended or contaminated intermediate mixture. When two gametes unite at fertilisation, the paired diploid condition ($2n$) is restored in the zygote.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Mendel's First Law (Law of Segregation): Alleles separate during gamete formation; each gamete carries one allele.",
    "Segregation corresponds to the physical separation of homologous chromosomes during Anaphase I of meiosis.",
    "Gametes are always pure for a single trait (the Law of Purity of Gametes)."
  ],
  "keyNotes": [
    "The Law of Segregation has no biological exceptions in all normally functioning meiotic systems; every gamete is strictly haploid."
  ],
  "questions": [
    get_bank_q(8, "m06_q01"),
    get_bank_q(26, "m06_q02"),
    get_bank_q(53, "m06_q03"),
    {
      "id": "m06_q04",
      "question": "What is another well-known scientific name for Mendel's Principle of Segregation?",
      "options": [
        "Law of Independent Assortment",
        "Law of Purity of Gametes",
        "Law of Natural Selection",
        "Law of Acquired Characters"
      ],
      "answer": "Law of Purity of Gametes",
      "explanation": "The Law of Segregation is also known as the Law of Purity of Gametes because gametes receive only one unblended allele of each gene pair."
    },
    {
      "id": "m06_q05",
      "question": "During which specific stage of meiotic cell division do homologous chromosomes physically segregate to opposite poles?",
      "options": ["Prophase II", "Metaphase II", "Anaphase I", "Telophase II"],
      "answer": "Anaphase I",
      "explanation": "During Anaphase I of meiosis, homologous chromosomes separate and move towards opposite poles, causing allele segregation."
    },
    {
      "id": "m06_q06",
      "question": "How many alleles for a specific gene does a single mature human sperm or egg carry?",
      "options": ["One allele", "Two alleles", "Four alleles", "Twenty-three alleles"],
      "answer": "One allele",
      "explanation": "Gametes are haploid (n) and carry exactly one allele for each gene."
    },
    {
      "id": "m06_q07",
      "question": "A heterozygous plant with genotype Tt will produce what types of gametes and in what ratio?",
      "options": [
        "100% T gametes",
        "100% t gametes",
        "50% T gametes and 50% t gametes (1:1 ratio)",
        "75% T gametes and 25% t gametes"
      ],
      "answer": "50% T gametes and 50% t gametes (1:1 ratio)",
      "explanation": "Segregation ensures that half the gametes receive the T allele and half receive the t allele in equal 50:50 proportion."
    },
    {
      "id": "m06_q08",
      "question": "Which of the following events restores the diploid (2n) state of paired alleles in the life cycle?",
      "options": ["Meiosis", "Fertilisation (Syngamy)", "Mitosis", "Transpiration"],
      "answer": "Fertilisation (Syngamy)",
      "explanation": "Fertilisation unites the haploid maternal gamete (n) and haploid paternal gamete (n), restoring the paired diploid (2n) state."
    },
    {
      "id": "m06_q09",
      "question": "Why is the Law of Segregation considered universal with no exceptions in diploid sexually reproducing organisms?",
      "options": [
        "Because DNA replication is always 100% error-free",
        "Because meiotic reduction division strictly segregates homologous chromosome pairs in all normal gametes",
        "Because all plants have flowers",
        "Because dominant alleles eliminate recessive alleles"
      ],
      "answer": "Because meiotic reduction division strictly segregates homologous chromosome pairs in all normal gametes",
      "explanation": "Reduction division inherently splits homologous chromosome pairs, ensuring each viable gamete receives one chromosome from each pair."
    },
    {
      "id": "m06_q10",
      "question": "If a plant has the homozygous genotype tt, what percentage of its gametes will carry the 't' allele?",
      "options": ["0%", "25%", "50%", "100%"],
      "answer": "100%",
      "explanation": "Since the plant carries only 't' alleles, 100% of its gametes will inevitably carry the 't' allele."
    }
  ]
}
modules_1_to_10.append(m06)

# ==========================================
# Module 7: Dihybrid Cross Setup & F1
# ==========================================
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Mendel's Dihybrid Cross: Tracking Two Traits Simultaneously & F1 Generation",
  "tagline": "Seed shape and seed colour, pure-breeding parents RRYY x rryy, and dihybrid F1 progeny.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is a Dihybrid Cross?</h4>
    <p>A <strong>dihybrid cross</strong> is a breeding experiment between two parent organisms that differ in <strong>two distinct pairs of contrasting traits</strong> simultaneously (e.g., seed shape and seed colour).</p>

    <h4>2. Choosing Contrasting Parental Characters</h4>
    <p>Mendel selected two well-defined seed characters in <em>Pisum sativum</em>:</p>
    <ul>
      <li><strong>Seed Shape:</strong> Round ($R$, dominant) vs Wrinkled ($r$, recessive).</li>
      <li><strong>Seed Colour:</strong> Yellow ($Y$, dominant) vs Green ($y$, recessive).</li>
    </ul>

    <h4>3. The Parental Generation (P Generation)</h4>
    <p>Mendel crossed two pure-breeding (homozygous) parental lines:</p>
    <ul>
      <li><strong>Parent 1:</strong> Round Yellow seeds — Genotype $\mathbf{RRYY}$. (Produces gametes carrying alleles $\mathbf{RY}$).</li>
      <li><strong>Parent 2:</strong> Wrinkled Green seeds — Genotype $\mathbf{rryy}$. (Produces gametes carrying alleles $\mathbf{ry}$).</li>
    </ul>

    <h4>4. The F1 Dihybrid Progeny</h4>
    <p>Upon cross-pollination, the fusion of an $RY$ gamete with an $ry$ gamete produces the $F_1$ generation:</p>
    <ul>
      <li>Genotype: $\mathbf{RrYy}$ (double heterozygous).</li>
      <li>Phenotype: $\mathbf{100\%\text{ Round Yellow seeds}}$.</li>
    </ul>
    <p>This confirmed that the dominant alleles ($R$ for round shape and $Y$ for yellow colour) completely suppress the recessive alleles ($r$ for wrinkled shape and $y$ for green colour) in the $F_1$ generation.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "A dihybrid cross tracks two pairs of contrasting traits simultaneously (e.g., seed shape and seed colour).",
    "Crossing pure Round Yellow ($RRYY$) with Wrinkled Green ($rryy$) yields $100\%$ Round Yellow ($RrYy$) in $F_1$.",
    "The $F_1$ dihybrid plants are heterozygous for both gene pairs ($RrYy$)."
  ],
  "keyNotes": [
    "In the $F_1$ generation, both dominant phenotypes (Round and Yellow) express together, demonstrating that dominance applies to multiple traits simultaneously."
  ],
  "questions": [
    get_bank_q(9, "m07_q01"),
    get_bank_q(27, "m07_q02"),
    get_bank_q(54, "m07_q03"),
    {
      "id": "m07_q04",
      "question": "What is the genotype of the F1 generation in Mendel's dihybrid cross between RRYY and rryy?",
      "options": ["RRYY", "rryy", "RrYy", "Rryy"],
      "answer": "RrYy",
      "explanation": "Fusion of an RY gamete from the dominant parent with an ry gamete from the recessive parent results in the heterozygous dihybrid genotype RrYy."
    },
    {
      "id": "m07_q05",
      "question": "What phenotype was observed in 100% of the F1 plants in Mendel's dihybrid cross?",
      "options": [
        "Round Green seeds",
        "Wrinkled Yellow seeds",
        "Round Yellow seeds",
        "Wrinkled Green seeds"
      ],
      "answer": "Round Yellow seeds",
      "explanation": "Both round seed shape (R) and yellow seed colour (Y) are dominant, so all RrYy F1 seeds appear round and yellow."
    },
    {
      "id": "m07_q06",
      "question": "How many different types of alleles are combined in the F1 dihybrid genotype RrYy?",
      "options": ["1", "2", "4 (R, r, Y, y)", "8"],
      "answer": "4 (R, r, Y, y)",
      "explanation": "The dihybrid genotype RrYy combines 4 distinct alleles: two for shape (R, r) and two for colour (Y, y)."
    },
    {
      "id": "m07_q07",
      "question": "How many pairs of contrasting characters are analyzed in a dihybrid cross?",
      "options": ["One pair", "Two pairs", "Three pairs", "Seven pairs"],
      "answer": "Two pairs",
      "explanation": "A dihybrid cross involves tracking the inheritance of two contrasting character pairs simultaneously."
    },
    {
      "id": "m07_q08",
      "question": "What gametes can be produced by a pure-breeding plant with the genotype rryy?",
      "options": ["ry only", "RY only", "Ry and rY", "r and y as separate gametes"],
      "answer": "ry only",
      "explanation": "Being homozygous recessive for both genes, the plant can produce gametes carrying only the 'ry' combination."
    },
    {
      "id": "m07_q09",
      "question": "What gametes can be produced by a pure-breeding plant with the genotype RRYY?",
      "options": ["RY only", "ry only", "Ry and rY", "Rr and Yy"],
      "answer": "RY only",
      "explanation": "Homozygous dominant for both genes, the plant produces gametes containing only the 'RY' allele combination."
    },
    {
      "id": "m07_q10",
      "question": "Why did neither green seed colour nor wrinkled seed shape appear in the F1 generation of Mendel's dihybrid cross?",
      "options": [
        "Because green and wrinkled alleles were destroyed by enzymes",
        "Because both alleles are recessive and completely masked by the dominant alleles R and Y",
        "Because Mendel only planted yellow seeds",
        "Because wrinkled seeds cannot germinate"
      ],
      "answer": "Because both alleles are recessive and completely masked by the dominant alleles R and Y",
      "explanation": "In the heterozygous condition (RrYy), the dominant alleles R and Y express their phenotypes, masking the recessive r and y alleles."
    }
  ]
}
modules_1_to_10.append(m07)

# ==========================================
# Module 8: F2 Generation of Dihybrid Cross
# ==========================================
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "F2 Generation of Dihybrid Cross: The 9:3:3:1 Phenotypic Ratio",
  "tagline": "Self-pollination of F1 dihybrids, 16-box Punnett square, and novel recombinant phenotypes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Self-Pollination of F1 Dihybrids ($RrYy \times RrYy$)</h4>
    <p>When Mendel allowed $F_1$ dihybrid plants ($RrYy$) to self-pollinate, each plant produced four distinct types of gametes in equal proportions ($25\%$ each):</p>
    <ul>
      <li>$\mathbf{RY}$ ($25\%$) — Parental combination</li>
      <li>$\mathbf{Ry}$ ($25\%$) — Recombinant combination</li>
      <li>$\mathbf{rY}$ ($25\%$) — Recombinant combination</li>
      <li>$\mathbf{ry}$ ($25\%$) — Parental combination</li>
    </ul>

    <h4>2. The 16-Square Punnett Grid</h4>
    <p>Random fertilization among these 4 types of male and female gametes produces $4 \times 4 = 16$ possible genetic combinations in the $F_2$ generation:</p>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; font-size:0.85rem; text-align:center; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Gametes</th><th>$RY$</th><th>$Ry$</th><th>$rY$</th><th>$ry$</th></tr></thead>
      <tbody>
        <tr><td><strong>$RY$</strong></td><td>$RRYY$ (R-Y)</td><td>$RRYy$ (R-Y)</td><td>$RrYY$ (R-Y)</td><td>$RrYy$ (R-Y)</td></tr>
        <tr><td><strong>$Ry$</strong></td><td>$RRYy$ (R-Y)</td><td>$RRyy$ (R-G)</td><td>$RrYy$ (R-Y)</td><td>$Rryy$ (R-G)</td></tr>
        <tr><td><strong>$rY$</strong></td><td>$RrYY$ (R-Y)</td><td>$RrYy$ (R-Y)</td><td>$rrYY$ (W-Y)</td><td>$rrYy$ (W-Y)</td></tr>
        <tr><td><strong>$ry$</strong></td><td>$RrYy$ (R-Y)</td><td>$Rryy$ (R-G)</td><td>$rrYy$ (W-Y)</td><td>$rryy$ (W-G)</td></tr>
      </tbody>
    </table>

    <h4>3. The Dihybrid Phenotypic Ratio (9:3:3:1)</h4>
    <p>Counting the 16 combinations reveals four distinct phenotypic classes:</p>
    <ol>
      <li><strong>Round Yellow:</strong> $\mathbf{9/16}$ (Both dominant traits — Parental phenotype)</li>
      <li><strong>Round Green:</strong> $\mathbf{3/16}$ (Dominant shape, recessive colour — <em>Novel Recombinant</em>)</li>
      <li><strong>Wrinkled Yellow:</strong> $\mathbf{3/16}$ (Recessive shape, dominant colour — <em>Novel Recombinant</em>)</li>
      <li><strong>Wrinkled Green:</strong> $\mathbf{1/16}$ (Both recessive traits — Parental phenotype)</li>
    </ol>
    <p>The classic dihybrid phenotypic ratio is $\mathbf{9 : 3 : 3 : 1}$.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Dihybrid $F_1$ plants produce 4 types of gametes: $RY$, $Ry$, $rY$, $ry$ in a $1:1:1:1$ ratio.",
    "The 16-box Punnett square produces a phenotypic ratio of $\mathbf{9:3:3:1}$.",
    "Novel recombinant classes (Round Green and Wrinkled Yellow) prove that traits sort independently."
  ],
  "keyNotes": [
    "The appearance of new combinations not present in either original parent (Round Green and Wrinkled Yellow) demonstrated that seed shape and seed colour are inherited completely independently."
  ],
  "questions": [
    get_bank_q(10, "m08_q01"),
    get_bank_q(28, "m08_q02"),
    get_bank_q(55, "m08_q03"),
    get_bank_q(93, "m08_q04"),
    {
      "id": "m08_q05",
      "question": "What is the phenotypic ratio obtained in the F2 generation of a classic Mendelian dihybrid cross?",
      "options": ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
      "answer": "9:3:3:1",
      "explanation": "The dihybrid F2 phenotypic ratio is 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green)."
    },
    {
      "id": "m08_q06",
      "question": "Which of the following phenotypic classes in the dihybrid F2 generation represent novel RECOMBINANT phenotypes not seen in the original parents?",
      "options": [
        "Round Yellow and Wrinkled Green",
        "Round Green and Wrinkled Yellow",
        "Only Round Yellow",
        "Only Wrinkled Green"
      ],
      "answer": "Round Green and Wrinkled Yellow",
      "explanation": "The original parents were Round Yellow and Wrinkled Green. Round Green (3/16) and Wrinkled Yellow (3/16) are newly recombined phenotypes."
    },
    {
      "id": "m08_q07",
      "question": "What fraction of the total F2 progeny in a dihybrid cross is homozygous recessive for BOTH traits (rryy)?",
      "options": ["9/16", "3/16", "1/16", "1/4"],
      "answer": "1/16",
      "explanation": "Only 1 out of the 16 combinations (rryy, bottom-right box of the Punnett square) is homozygous recessive for both traits."
    },
    {
      "id": "m08_q08",
      "question": "If 1600 seeds are collected from an F2 dihybrid generation, approximately how many seeds are expected to be Round Green?",
      "options": ["900", "300", "100", "160"],
      "answer": "300",
      "explanation": "Round Green represents 3/16 of the total progeny: (3/16) × 1600 = 300 seeds."
    },
    {
      "id": "m08_q09",
      "question": "How many total boxes (genotypic combinations) are present in the Punnett square of a dihybrid cross?",
      "options": ["4", "8", "16", "64"],
      "answer": "16",
      "explanation": "Since each parent produces 4 types of gametes, the grid has 4 × 4 = 16 boxes."
    },
    {
      "id": "m08_q10",
      "question": "What is the proportion of parental phenotypes compared to recombinant phenotypes in the dihybrid F2 generation?",
      "options": [
        "10 parental : 6 recombinant (10/16 vs 6/16)",
        "8 parental : 8 recombinant",
        "16 parental : 0 recombinant",
        "1 parental : 15 recombinant"
      ],
      "answer": "10 parental : 6 recombinant (10/16 vs 6/16)",
      "explanation": "Parental phenotypes are 9 (Round Yellow) + 1 (Wrinkled Green) = 10/16. Recombinant phenotypes are 3 (Round Green) + 3 (Wrinkled Yellow) = 6/16."
    }
  ]
}
modules_1_to_10.append(m08)

# ==========================================
# Module 9: Principle of Independent Assortment
# ==========================================
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Mendel's Second Law: The Principle of Independent Assortment",
  "tagline": "Independent sorting of distinct gene pairs during gamete formation and meiotic chromosomal alignment.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Principle of Independent Assortment (Mendel's Second Law)</h4>
    <p>From the dihybrid cross results, Mendel formulated his <strong>Second Law of Inheritance</strong>:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "When two pairs of traits are combined in a hybrid, the segregation of one pair of characters is completely independent of the segregation of the other pair of characters during gamete formation."
    </blockquote>

    <h4>2. Independent Behaviour of Gene Pairs</h4>
    <p>Consider the dihybrid individual $RrYy$:</p>
    <ul>
      <li>The allele pair for seed shape ($R$ and $r$) segregates independently into gametes ($50\% R : 50\% r$).</li>
      <li>The allele pair for seed colour ($Y$ and $y$) also segregates independently into gametes ($50\% Y : 50\% y$).</li>
      <li>Because their sorting is completely unrelated, the probability of an allele combination is the mathematical product of their independent probabilities:
        $$\text{P}(RY) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4} = 25\%$$
        $$\text{P}(Ry) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4} = 25\%$$
        $$\text{P}(rY) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4} = 25\%$$
        $$\text{P}(ry) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4} = 25\%$$
      </li>
    </ul>

    <h4>3. Chromosomal Mechanism of Independent Assortment</h4>
    <p>During <strong>Metaphase I of meiosis</strong>, non-homologous chromosome pairs align randomly at the equatorial plate. The orientation of the chromosome pair carrying the gene for seed shape has zero influence on the orientation of the chromosome pair carrying the gene for seed colour. This random assortment generates unique gametic combinations.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Mendel's Second Law: Allele pairs for different traits segregate independently during gamete formation.",
    "Independent assortment occurs during Metaphase I and Anaphase I of meiosis for genes located on different chromosomes.",
    "Four types of gametes are formed in equal $1:1:1:1$ frequency ($25\%$ each) from a dihybrid ($RrYy$)."
  ],
  "keyNotes": [
    "Independent assortment holds true for genes that are located on separate (non-homologous) chromosomes or far apart on the same chromosome."
  ],
  "questions": [
    get_bank_q(11, "m09_q01"),
    get_bank_q(29, "m09_q02"),
    get_bank_q(56, "m09_q03"),
    {
      "id": "m09_q04",
      "question": "What is the ratio of the four types of gametes (RY : Ry : rY : ry) produced by an F1 dihybrid pea plant (RrYy)?",
      "options": ["9:3:3:1", "1:1:1:1", "3:1", "1:2:1"],
      "answer": "1:1:1:1",
      "explanation": "Due to independent assortment, the 4 types of gametes are produced in equal frequencies: 25% RY, 25% Ry, 25% rY, and 25% ry (1:1:1:1 ratio)."
    },
    {
      "id": "m09_q05",
      "question": "During which phase of meiosis does the physical independent alignment of non-homologous chromosome pairs take place?",
      "options": ["Prophase II", "Metaphase I", "Telophase I", "Cytokinesis"],
      "answer": "Metaphase I",
      "explanation": "Random orientation and alignment of different homologous chromosome pairs along the equatorial metaphase plate occurs during Metaphase I."
    },
    {
      "id": "m09_q06",
      "question": "Mendel's Law of Independent Assortment is based directly on observations from which type of genetic cross?",
      "options": ["Monohybrid cross", "Dihybrid cross", "Test cross with one trait", "Clonal propagation"],
      "answer": "Dihybrid cross",
      "explanation": "The Law of Independent Assortment requires analyzing at least two pairs of traits simultaneously (a dihybrid cross)."
    },
    {
      "id": "m09_q07",
      "question": "If two genes are located very close to each other on the EXACT SAME chromosome, what genetic phenomenon can prevent independent assortment?",
      "options": ["Linkage", "Segregation", "Dominance", "Epistasis"],
      "answer": "Linkage",
      "explanation": "Genes situated closely on the same chromosome tend to be inherited together as a unit (genetic linkage), an exception to independent assortment."
    },
    {
      "id": "m09_q08",
      "question": "In a dihybrid cross, if you examine ONLY the seed shape trait (Round vs Wrinkled) in the F2 generation, what ratio do you obtain?",
      "options": ["3 Round : 1 Wrinkled", "9 Round : 3 Wrinkled", "1:1", "All are round"],
      "answer": "3 Round : 1 Wrinkled",
      "explanation": "Out of 16 boxes: 12 are Round and 4 are Wrinkled, which simplifies to the classic 3:1 monohybrid ratio (12:4 = 3:1)."
    },
    {
      "id": "m09_q09",
      "question": "In a dihybrid cross, if you examine ONLY the seed colour trait (Yellow vs Green) in the F2 generation, what ratio do you obtain?",
      "options": ["1:2:1", "3 Yellow : 1 Green", "9 Yellow : 7 Green", "All are yellow"],
      "answer": "3 Yellow : 1 Green",
      "explanation": "Out of 16 boxes: 12 are Yellow and 4 are Green, which also simplifies to 3:1 (12:4 = 3:1)."
    },
    {
      "id": "m09_q10",
      "question": "How does multiplying the independent monohybrid ratios (3:1) for shape and colour yield the dihybrid ratio?",
      "options": [
        "(3 Round + 1 Wrinkled) × (3 Yellow + 1 Green) = 9 Round-Yellow + 3 Round-Green + 3 Wrinkled-Yellow + 1 Wrinkled-Green",
        "It cannot be mathematically calculated",
        "By dividing 16 by 4",
        "By subtracting recessive from dominant"
      ],
      "answer": "(3 Round + 1 Wrinkled) × (3 Yellow + 1 Green) = 9 Round-Yellow + 3 Round-Green + 3 Wrinkled-Yellow + 1 Wrinkled-Green",
      "explanation": "Independent assortment mathematically means the probabilities multiply: (3:1) × (3:1) = 9:3:3:1."
    }
  ]
}
modules_1_to_10.append(m09)

# ==========================================
# Module 10: How do Traits Get Expressed?
# ==========================================
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Molecular Basis of Heredity: How do Genes Express Traits?",
  "tagline": "Cellular DNA, genes as instruction codes, protein/enzyme synthesis, and hormone regulation of traits.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Genes as Segments of Cellular DNA</h4>
    <p>Mendel's mysterious "factors" are now known to be <strong>genes</strong>—specific segments of <strong>cellular DNA</strong> (deoxyribonucleic acid) located at defined positions on chromosomes. A gene contains the coded nucleotide sequence that provides the instructions for synthesizing a specific <strong>protein</strong>.</p>

    <h4>2. The Biochemical Pathway of Trait Expression</h4>
    <p>How does a gene determine a physical trait such as plant height? Consider the molecular chain of events:</p>
    <ol>
      <li><strong>DNA Segment (Gene):</strong> Carries the nucleotide code for an enzyme involved in synthesizing a plant growth hormone (such as <strong>gibberellin</strong>).</li>
      <li><strong>Functional Enzyme Production:</strong> The dominant allele ($T$) contains the correct code to produce a fully functional, highly efficient enzyme.</li>
      <li><strong>Hormone Synthesis:</strong> This active enzyme synthesizes an abundant amount of gibberellin growth hormone.</li>
      <li><strong>Phenotypic Manifestation:</strong> Abundant gibberellin triggers rapid cell elongation in the stem, producing a <strong>Tall pea plant</strong>.</li>
    </ol>

    <h4>3. The Mechanism of Recessive Alleles</h4>
    <p>What makes the dwarf allele ($t$) recessive? An alteration (mutation) in the nucleotide sequence of the gene produces an enzyme that is less efficient, defective, or absent altogether. Consequently, significantly less growth hormone is synthesized, stem elongation is stunted, and the plant remains <strong>Dwarf</strong>.</p>
    <p>In a heterozygous plant ($Tt$), the single copy of the dominant allele ($T$) produces sufficient active enzyme to synthesize enough hormone for full tallness—which is why $T$ is dominant over $t$.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "A gene is a functional segment of cellular DNA providing instructions to synthesize a specific protein.",
    "Proteins act as enzymes that catalyze biochemical reactions, such as synthesis of growth hormones.",
    "Dominant alleles code for efficient enzymes, while recessive alleles often code for defective or inactive enzymes."
  ],
  "keyNotes": [
    "The central dogma of genetics connects genotype to phenotype: Gene (DNA) $\\rightarrow$ mRNA $\\rightarrow$ Functional Protein (Enzyme) $\\rightarrow$ Biochemical Product (Hormone) $\\rightarrow$ Observable Physical Trait."
  ],
  "questions": [
    get_bank_q(12, "m10_q01"),
    get_bank_q(57, "m10_q02"),
    get_bank_q(58, "m10_q03"),
    get_bank_q(59, "m10_q04"),
    {
      "id": "m10_q05",
      "question": "At the molecular level, what constitutes a gene?",
      "options": [
        "A carbohydrate molecule stored in the liver",
        "A specific functional segment of cellular DNA providing instructions to synthesize a protein",
        "A lipid droplet floating in the cytoplasm",
        "A calcium crystal in bone tissue"
      ],
      "answer": "A specific functional segment of cellular DNA providing instructions to synthesize a protein",
      "explanation": "A gene is a distinct sequence of nucleotides within cellular DNA that codes for the synthesis of a specific polypeptide or protein."
    },
    {
      "id": "m10_q06",
      "question": "Which plant growth hormone promotes stem elongation, causing pea plants with the dominant 'T' allele to grow tall?",
      "options": ["Abscisic acid", "Gibberellin", "Insulin", "Adrenaline"],
      "answer": "Gibberellin",
      "explanation": "The 'T' gene codes for an enzyme that synthesizes gibberellin, a plant hormone that promotes stem elongation and internode growth."
    },
    {
      "id": "m10_q07",
      "question": "Why does a pea plant with the homozygous recessive genotype 'tt' remain dwarf?",
      "options": [
        "It produces too much gibberellin",
        "The mutated 't' gene codes for a non-functional or less efficient enzyme, producing insufficient growth hormone",
        "It lacks chromosomes altogether",
        "Its roots cannot absorb water"
      ],
      "answer": "The mutated 't' gene codes for a non-functional or less efficient enzyme, producing insufficient growth hormone",
      "explanation": "The recessive allele 't' has an altered sequence resulting in a less efficient enzyme, producing deficient hormone and stunted height."
    },
    {
      "id": "m10_q08",
      "question": "Why is the heterozygous plant 'Tt' just as tall as the homozygous 'TT' plant?",
      "options": [
        "The 't' allele is destroyed by white blood cells",
        "One copy of the dominant 'T' allele produces enough active enzyme to synthesize the required threshold of growth hormone",
        "The 't' allele produces a growth-promoting poison",
        "It is shorter, but human eyes cannot tell"
      ],
      "answer": "One copy of the dominant 'T' allele produces enough active enzyme to synthesize the required threshold of growth hormone",
      "explanation": "A single functional allele (T) produces sufficient active enzyme to make ample gibberellin, producing the full tall phenotype."
    },
    {
      "id": "m10_q09",
      "question": "What is the universal biochemical intermediary that conveys genetic instructions from nuclear DNA to cytoplasmic ribosomes for protein synthesis?",
      "options": ["Glucose", "Messenger RNA (mRNA)", "Hemoglobin", "ATP synthase"],
      "answer": "Messenger RNA (mRNA)",
      "explanation": "Information in DNA is transcribed into mRNA, which carries the code to ribosomes where proteins are synthesized."
    },
    {
      "id": "m10_q10",
      "question": "Which cellular organelle houses the chromosomes carrying an organism's genomic DNA in eukaryotic cells?",
      "options": ["Cell wall", "Nucleus", "Vacuole", "Ribosome"],
      "answer": "Nucleus",
      "explanation": "In eukaryotic organisms, chromosomes carrying genetic DNA are enclosed within the membrane-bound cell nucleus."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch8_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 8 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
