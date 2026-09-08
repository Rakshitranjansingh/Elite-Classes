# -*- coding: utf-8 -*-
"""
CH8 Part 2: Modules 11 to 20
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

modules_11_to_20 = []

# ==========================================
# Module 11: Chromosomal Basis of Inheritance
# ==========================================
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Chromosomal Basis of Inheritance: Diploid Cells & Meiotic Gamete Formation",
  "tagline": "Homologous pairs in somatic cells, meiotic reduction division, and restoration of diploidy by fertilisation.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Chromosomes Carry Hereditary Units</h4>
    <p>Each cell of an organism contains long, thread-like structures called <strong>chromosomes</strong> in its nucleus, composed of DNA tightly coiled around histone proteins. Genes are organized in a linear sequence along these chromosomes. In sexually reproducing organisms, somatic (body) cells are <strong>diploid ($2n$)</strong>, meaning chromosomes exist in matched homologous pairs—one inherited from the male parent and the other from the female parent.</p>

    <h4>2. Why Gametes Must Be Haploid ($n$)</h4>
    <p>If gametes (sperms and ova) were diploid like somatic cells, their fusion during fertilisation would double the chromosome count every single generation ($2n + 2n = 4n$, then $8n$, $16n$...), resulting in catastrophic biological chaos. To prevent this, specialized germ cells undergo <strong>meiosis (reduction division)</strong>:</p>
    <ul>
      <li>During meiosis, homologous chromosome pairs separate.</li>
      <li>Each resulting gamete receives only <strong>one chromosome from each pair</strong>, making the gamete <strong>haploid ($n$)</strong>.</li>
    </ul>

    <h4>3. Restoration of Diploidy by Fertilisation</h4>
    <p>When a haploid sperm cell ($n$) unites with a haploid ovum ($n$) during fertilisation (syngamy), the original species-specific diploid chromosome number ($n + n = 2n$) is precisely restored in the single-celled zygote, ensuring genomic stability across infinite generations.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Somatic body cells are diploid ($2n$) with chromosomes occurring in matched homologous pairs.",
    "Meiosis halves the chromosome count to produce haploid ($n$) gametes carrying one set of genes.",
    "Fertilisation unites haploid gametes ($n + n = 2n$) to restore species-specific diploidy in the zygote."
  ],
  "keyNotes": [
    "The parallel behaviour of Mendel's particulate factors and physical chromosomes during meiosis confirmed the Chromosomal Theory of Inheritance formulated by Sutton and Boveri."
  ],
  "questions": [
    get_bank_q(16, "m11_q01"),
    get_bank_q(31, "m11_q02"),
    get_bank_q(32, "m11_q03"),
    get_bank_q(38, "m11_q04"),
    get_bank_q(39, "m11_q05"),
    {
      "id": "m11_q06",
      "question": "How many total chromosomes are present in a normal human somatic (body) cell?",
      "options": ["23 chromosomes", "46 chromosomes (23 pairs)", "92 chromosomes", "44 chromosomes"],
      "answer": "46 chromosomes (23 pairs)",
      "explanation": "Human somatic cells are diploid (2n) containing 46 chromosomes organized into 23 homologous pairs."
    },
    {
      "id": "m11_q07",
      "question": "How many chromosomes are carried by a normal, mature human ovum or sperm cell?",
      "options": ["46 chromosomes", "23 chromosomes", "2 chromosomes", "12 chromosomes"],
      "answer": "23 chromosomes",
      "explanation": "Human gametes are haploid (n) formed via meiosis, containing exactly 23 unpaired chromosomes."
    },
    {
      "id": "m11_q08",
      "question": "What vital biological outcome is achieved by meiotic reduction division in the human life cycle?",
      "options": [
        "It doubles the chromosome number in each generation",
        "It halves the chromosome number in gametes to prevent doubling upon fertilisation",
        "It converts all recessive genes into dominant ones",
        "It eliminates mitochondrial DNA"
      ],
      "answer": "It halves the chromosome number in gametes to prevent doubling upon fertilisation",
      "explanation": "Meiosis reduces chromosome number from diploid (2n) to haploid (n), so fertilisation restores the constant species diploid number."
    },
    {
      "id": "m11_q09",
      "question": "Who independently pointed out that the behaviour of chromosomes during meiosis parallels the behaviour of Mendel's factors?",
      "options": ["Walter Sutton and Theodor Boveri", "Charles Darwin and Lamarck", "Robert Hooke and Leeuwenhoek", "Watson and Crick"],
      "answer": "Walter Sutton and Theodor Boveri",
      "explanation": "Sutton and Boveri (1902) formulated the Chromosomal Theory of Inheritance, uniting Mendelian genetics with cytology."
    },
    {
      "id": "m11_q10",
      "question": "A cell that possesses two complete sets of homologous chromosomes, one from each biological parent, is termed:",
      "options": ["Haploid", "Diploid", "Aneuploid", "Polyploid"],
      "answer": "Diploid",
      "explanation": "Diploid (2n) cells possess two homologous sets of chromosomes, one contributed by the maternal parent and one by the paternal parent."
    }
  ]
}
modules_11_to_20.append(m11)

# ==========================================
# Module 12: Environmental Sex Determination
# ==========================================
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Environmental & Temperature-Dependent Sex Determination",
  "tagline": "Non-genetic sex determination in reptiles, snails, and temperature-dependent incubation of eggs.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Is Sex Always Genetically Determined?</h4>
    <p>In many animal species, sex is not dictated by chromosomes or genes at fertilisation. Instead, external environmental cues encountered during embryonic development or adulthood dictate whether an individual matures as a male or female.</p>

    <h4>2. Temperature-Dependent Sex Determination (TSD) in Reptiles</h4>
    <p>In several reptiles, the incubation temperature of the eggs during a critical thermosensitive period of embryonic development determines the sex of the hatchling:</p>
    <ul>
      <li><strong>Turtles (e.g., Green Sea Turtle):</strong> High incubation temperatures ($>31^\circ\text{C}$) yield predominantly female hatchlings, whereas lower incubation temperatures ($<28^\circ\text{C}$) produce predominantly male hatchlings ("Hot chicks and cool dudes").</li>
      <li><strong>Alligators & Crocodiles:</strong> The pattern is reversed or intermediate: higher temperatures ($32\text{--}34^\circ\text{C}$) typically produce males, while lower ($<31^\circ\text{C}$) or higher extreme temperatures yield females.</li>
    </ul>

    <h4>3. Snail Sex Plasticity (Crepidula & Land Snails)</h4>
    <p>In certain snails, such as marine slipper snails and some terrestrial gastropods, individuals can actually <strong>change their sex</strong> based on social contact, population density, or age. An individual may start life as a male and later transition into a female when settled alone, demonstrating that sex determination in these species is entirely non-genetic.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "In many organisms, sex determination is environmental and non-genetic.",
    "In reptiles (turtles, lizards, alligators), incubation temperature of eggs determines offspring sex.",
    "Snails can change their sex during their adult lifetime, proving sex is not fixed by genes in all species."
  ],
  "keyNotes": [
    "Temperature-dependent sex determination poses significant conservation risks today; rising global temperatures due to climate change skew turtle populations overwhelmingly toward females."
  ],
  "questions": [
    {
      "id": "m12_q01",
      "question": "In which of the following organisms is the sex of the offspring determined by the temperature at which fertilised eggs are incubated?",
      "options": ["Human beings", "Reptiles (such as turtles and alligators)", "Pea plants", "Fruit flies (Drosophila)"],
      "answer": "Reptiles (such as turtles and alligators)",
      "explanation": "In many reptiles, such as turtles, alligators, and lizards, the incubation temperature of eggs during embryonic development determines hatchling sex."
    },
    {
      "id": "m12_q02",
      "question": "Which of the following animals can alter its sex during its lifetime, demonstrating that sex is not genetically fixed in all organisms?",
      "options": ["Snails", "Chimpanzees", "Dogs", "Sparrows"],
      "answer": "Snails",
      "explanation": "In certain snails (like slipper limpets), individuals can change their biological sex based on age and social environment."
    },
    {
      "id": "m12_q03",
      "question": "In green sea turtles, what is the phenotypic effect of incubating clutches of eggs at higher temperatures (>31°C)?",
      "options": [
        "All hatchlings become male",
        "All hatchlings become female",
        "Eggs fail to develop shells",
        "Offspring develop two heads"
      ],
      "answer": "All hatchlings become female",
      "explanation": "In turtles, high incubation temperatures stimulate aromatase enzyme activity, producing overwhelmingly female hatchlings."
    },
    {
      "id": "m12_q04",
      "question": "What is the primary ecological threat posed by global warming to turtle populations exhibiting temperature-dependent sex determination?",
      "options": [
        "Eggs freeze inside the sand",
        "Severe skewing of the sex ratio towards almost 100% females, leading to reproductive collapse",
        "Turtles lose their shells",
        "Turtles migrate to freshwater lakes"
      ],
      "answer": "Severe skewing of the sex ratio towards almost 100% females, leading to reproductive collapse",
      "explanation": "Rising nesting sand temperatures skew the population heavily toward females, resulting in an extreme scarcity of breeding males."
    },
    {
      "id": "m12_q05",
      "question": "In contrast to reptiles, human sex determination is:",
      "options": [
        "Purely temperature-dependent during maternal pregnancy",
        "Genetically determined at the exact moment of fertilisation by sex chromosomes",
        "Determined by the mother's dietary calcium levels",
        "Reversible after puberty"
      ],
      "answer": "Genetically determined at the exact moment of fertilisation by sex chromosomes",
      "explanation": "In humans, sex is determined strictly by the chromosomal constitution of the sperm uniting with the egg at syngamy."
    },
    {
      "id": "m12_q06",
      "question": "What enzyme converts androgens into estrogens in temperature-dependent reptile embryos in response to heat?",
      "options": ["Aromatase", "Amylase", "Pepsin", "DNA polymerase"],
      "answer": "Aromatase",
      "explanation": "Aromatase converts testosterone into estradiol; its temperature-sensitive expression controls sexual differentiation in many reptiles."
    },
    {
      "id": "m12_q07",
      "question": "In American alligators, eggs incubated at intermediate temperatures around 32-34°C produce predominantly:",
      "options": ["Females", "Males", "Sterile individuals", "Hermaphrodites"],
      "answer": "Males",
      "explanation": "In alligators, intermediate incubation temperatures (32-34°C) yield males, whereas lower or higher temperatures yield females."
    },
    {
      "id": "m12_q08",
      "question": "Which of the following organisms relies strictly on genetic sex chromosomes (XY or ZW) rather than environmental temperature?",
      "options": ["Sea turtles", "Humans", "Alligators", "Leopard geckos"],
      "answer": "Humans",
      "explanation": "Humans rely strictly on the genetic XX-XY chromosomal mechanism, entirely unaffected by ambient environmental temperatures."
    },
    {
      "id": "m12_q09",
      "question": "In sequential hermaphroditic marine snails, an individual that starts life as a male and later becomes female is termed:",
      "options": ["Protandrous", "Protogynous", "Dioecious", "Aneuploid"],
      "answer": "Protandrous",
      "explanation": "Protandry refers to an animal maturing first as a male and subsequently transitioning into a female during its lifecycle."
    },
    {
      "id": "m12_q10",
      "question": "Can human parents influence the sex of their child by altering room temperature during gestation?",
      "options": [
        "Yes, warm rooms produce girls",
        "Yes, cold rooms produce boys",
        "No, human sex is determined strictly genetically at fertilisation",
        "Yes, but only during the third trimester"
      ],
      "answer": "No, human sex is determined strictly genetically at fertilisation",
      "explanation": "Human embryo sex is fixed at fertilisation by the sex chromosome (X or Y) delivered by the sperm; external temperature has zero effect."
    }
  ]
}
modules_11_to_20.append(m12)

# ==========================================
# Module 13: Human Karyotype & Sex Chromosomes
# ==========================================
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Human Karyotype: Autosomes vs Sex Chromosomes (Allosomes)",
  "tagline": "22 pairs of autosomes, 1 pair of allosomes, and structural dimorphism of X and Y chromosomes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Human Chromosome Complement</h4>
    <p>Every normal human somatic cell nucleus contains exactly <strong>46 chromosomes</strong> organized into <strong>23 pairs</strong>. These 23 pairs are classified into two distinct categories:</p>
    <ul>
      <li><strong>Autosomes (22 Pairs / 44 Chromosomes):</strong> Chromosomes numbered 1 through 22 that are identical in morphological structure in both biological males and females. Autosomes govern general somatic traits such as height, eye colour, skin pigmentation, and metabolic enzymes.</li>
      <li><strong>Sex Chromosomes / Allosomes (1 Pair / 2 Chromosomes):</strong> The 23rd pair that determines the biological sex of the individual.</li>
    </ul>

    <h4>2. The Allosomes: X and Y Chromosomes</h4>
    <p>The sex chromosomes exhibit marked structural and genetic dimorphism:</p>
    <ul>
      <li><strong>In Biological Females:</strong> The 23rd pair consists of two matched, large, metacentric chromosomes: $\mathbf{XX}$. Both chromosomes are identical in size and shape (homomorphic). A female's karyotype is represented as $44 + XX$.</li>
      <li><strong>In Biological Males:</strong> The 23rd pair is mismatched (heteromorphic) consisting of one normal-sized $\mathbf{X}$ chromosome and one distinctly smaller, truncated $\mathbf{Y}$ chromosome: $\mathbf{XY}$. A male's karyotype is represented as $44 + XY$.</li>
    </ul>

    <h4>3. The Role of the Y Chromosome</h4>
    <p>The human Y chromosome is physically much smaller than the X chromosome and contains fewer genes. However, it carries a master switch gene called the <strong>SRY gene</strong> (Sex-determining Region Y) that triggers the embryonic development of testes, initiating male sexual differentiation.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Human cells contain 23 pairs of chromosomes: 22 pairs of autosomes and 1 pair of sex chromosomes.",
    "Biological females have two matching X chromosomes ($XX$); males have one X and one smaller Y ($XY$).",
    "The SRY gene on the Y chromosome acts as the primary genetic switch directing male testis development."
  ],
  "keyNotes": [
    "The 22 pairs of autosomes are perfectly paired in both sexes; only the male sex chromosome pair ($XY$) is heteromorphic (mismatched in size)."
  ],
  "questions": [
    get_bank_q(17, "m13_q01"),
    get_bank_q(18, "m13_q02"),
    get_bank_q(19, "m13_q03"),
    get_bank_q(37, "m13_q04"),
    {
      "id": "m13_q05",
      "question": "How many pairs of AUTOSOMES are present in a normal human diploid somatic cell?",
      "options": ["23 pairs", "22 pairs", "1 pair", "46 pairs"],
      "answer": "22 pairs",
      "explanation": "Out of the 23 pairs of chromosomes in human somatic cells, exactly 22 pairs are autosomes."
    },
    {
      "id": "m13_q06",
      "question": "What is the sex chromosome composition of a normal biological human male?",
      "options": ["XX", "XY", "YY", "XO"],
      "answer": "XY",
      "explanation": "Human males possess one X chromosome and one Y chromosome (XY) as their 23rd chromosomal pair."
    },
    {
      "id": "m13_q07",
      "question": "What is the sex chromosome composition of a normal biological human female?",
      "options": ["XY", "XX", "YY", "XXY"],
      "answer": "XX",
      "explanation": "Human females possess two identical, homomorphic X chromosomes (XX) as their 23rd chromosomal pair."
    },
    {
      "id": "m13_q08",
      "question": "Why does the human Y chromosome appear distinctly smaller than the X chromosome under a microscope?",
      "options": [
        "It lacks a centromere",
        "It contains significantly fewer genes and much less DNA content than the large X chromosome",
        "It is made of RNA instead of DNA",
        "It shrinks after every cell division"
      ],
      "answer": "It contains significantly fewer genes and much less DNA content than the large X chromosome",
      "explanation": "The Y chromosome has degenerated over evolutionary time, retaining only ~55-70 protein-coding genes compared to ~900-1000 genes on the X chromosome."
    },
    {
      "id": "m13_q09",
      "question": "Which master switch gene located on the human Y chromosome directs the undifferentiated gonads to develop into testes?",
      "options": ["SRY gene", "BRCA1 gene", "Lac operon", "p53 gene"],
      "answer": "SRY gene",
      "explanation": "The SRY (Sex-determining Region Y) gene on the Y chromosome encodes testis-determining factor, initiating male differentiation."
    },
    {
      "id": "m13_q10",
      "question": "What is the complete chromosomal notation for the karyotype of a normal human male somatic cell?",
      "options": ["44 + XX", "44 + XY", "46 + XY", "22 + XY"],
      "answer": "44 + XY",
      "explanation": "A normal male karyotype has 44 autosomes plus one X and one Y chromosome (44 + XY = 46 chromosomes)."
    }
  ]
}
modules_11_to_20.append(m13)

# ==========================================
# Module 14: Mechanism of Human Sex Determination
# ==========================================
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Mechanism of Human Sex Determination: Equal 50% Probability",
  "tagline": "Homogametic females, heterogametic males, and the 1:1 statistical sex ratio.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Gametogenesis in Females (Homogametic Sex)</h4>
    <p>Because a biological female has two matching $X$ chromosomes ($44 + XX$), all ova produced during oogenesis receive 22 autosomes and <strong>one $X$ chromosome</strong> ($22 + X$). Therefore, human females are <strong>homogametic</strong>—they produce only one kind of gamete regarding sex chromosomes.</p>

    <h4>2. Gametogenesis in Males (Heterogametic Sex)</h4>
    <p>A biological male has mismatched sex chromosomes ($44 + XY$). During spermatogenesis, homologous chromosomes segregate in meiosis, producing two distinct types of sperms in equal numbers ($50\%$ each):</p>
    <ul>
      <li><strong>50% Gynosporms:</strong> Carry an $X$ chromosome ($22 + X$).</li>
      <li><strong>50% Androsperms:</strong> Carry a $Y$ chromosome ($22 + Y$).</li>
    </ul>
    <p>Hence, human males are <strong>heterogametic</strong>.</p>

    <h4>3. The Genetic Cross & Punnett Square</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; text-align:center; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Sperm (Father) \ Ovum (Mother)</th><th>$X$ ($100\%$)</th></tr></thead>
      <tbody>
        <tr><td><strong>$X$-bearing Sperm ($50\%$)</strong></td><td>$XX$ $\rightarrow$ <strong>Female child (Girl)</strong></td></tr>
        <tr><td><strong>$Y$-bearing Sperm ($50\%$)</strong></td><td>$XY$ $\rightarrow$ <strong>Male child (Boy)</strong></td></tr>
      </tbody>
    </table>

    <h4>4. Equal 50% Statistical Probability</h4>
    <p>Because $X$-bearing and $Y$-bearing sperms are produced in equal numbers ($1:1$) and each has an equal chance of fertilising the ovum, every single pregnancy carries an exact <strong>$50\%$ probability ($1/2$) of being a boy</strong> and a <strong>$50\%$ probability ($1/2$) of being a girl</strong>, regardless of how many children a couple already has.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Females are homogametic ($XX$) and produce only $X$-bearing ova ($100\%$).",
    "Males are heterogametic ($XY$) and produce $50\%$ $X$-bearing sperms and $50\%$ $Y$-bearing sperms.",
    "The statistical probability of bearing a male or female child is strictly $1:1$ ($50\%$ each) at every conception."
  ],
  "keyNotes": [
    "Previous births have zero mathematical influence on the sex of future offspring; each conception is an independent 50% probability event."
  ],
  "questions": [
    get_bank_q(13, "m14_q01"),
    get_bank_q(20, "m14_q02"),
    get_bank_q(61, "m14_q03"),
    get_bank_q(62, "m14_q04"),
    {
      "id": "m14_q05",
      "question": "Why are human females called the 'homogametic sex'?",
      "options": [
        "They produce two different kinds of eggs",
        "All mature ova produced contain only one type of sex chromosome (an X chromosome)",
        "They do not produce gametes",
        "They carry XY chromosomes"
      ],
      "answer": "All mature ova produced contain only one type of sex chromosome (an X chromosome)",
      "explanation": "Because women have two X chromosomes (XX), all eggs produced through meiosis receive 22 autosomes + one X chromosome."
    },
    {
      "id": "m14_q06",
      "question": "What percentage of mature sperms produced by a healthy human male carry an X chromosome?",
      "options": ["0%", "25%", "50%", "100%"],
      "answer": "50%",
      "explanation": "Due to meiotic segregation of XY chromosomes, exactly 50% of sperms carry the X chromosome and 50% carry the Y chromosome."
    },
    {
      "id": "m14_q07",
      "question": "What is the biological sex of a child formed when an X-bearing ovum is fertilised by a Y-bearing sperm?",
      "options": ["Male (Boy)", "Female (Girl)", "Hermaphrodite", "Variable depending on diet"],
      "answer": "Male (Boy)",
      "explanation": "Fertilisation of an X ovum by a Y sperm produces an XY zygote, which develops into a biological male child."
    },
    {
      "id": "m14_q08",
      "question": "What is the mathematical probability of a pregnant woman giving birth to a baby boy at any given pregnancy?",
      "options": ["25% (1/4)", "50% (1/2)", "75% (3/4)", "100%"],
      "answer": "50% (1/2)",
      "explanation": "Because X-bearing and Y-bearing sperms are produced in equal numbers, there is an exact 50% (1/2) chance of either sex."
    },
    {
      "id": "m14_q09",
      "question": "If a couple already has four biological daughters, what is the probability that their fifth child will be a son?",
      "options": ["10% (very low)", "50% (1/2)", "100% (guaranteed)", "0%"],
      "answer": "50% (1/2)",
      "explanation": "Each conception is an independent random statistical event with an exact 50% probability of either sex."
    },
    {
      "id": "m14_q10",
      "question": "Which of the following genetic formulas correctly represents the chromosomal makeup of a human sperm cell?",
      "options": ["44 + XY", "22 + X or 22 + Y", "23 + XY", "46 + X"],
      "answer": "22 + X or 22 + Y",
      "explanation": "A haploid human sperm cell contains 22 autosomes plus either an X or a Y sex chromosome (22 + X or 22 + Y)."
    }
  ]
}
modules_11_to_20.append(m14)

# ==========================================
# Module 15: Debunking Social Stigma (Paternal Sex Determination)
# ==========================================
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Paternal Determination of Offspring Sex & Debunking Social Stigma",
  "tagline": "Scientific evidence proving the father determines child sex, eradicating gender-based discrimination.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Biological Evidence: The Father Dictates Offspring Sex</h4>
    <p>In human reproduction, the biological sex of the child is entirely determined by <strong>which type of sperm from the father</strong> fertilises the mother's egg:</p>
    <ul>
      <li>The mother can donate <strong>only an $X$ chromosome</strong> because her sex chromosome complement is exclusively $XX$.</li>
      <li>The father produces two distinct populations of gametes: $50\%$ carry an $X$ chromosome and $50\%$ carry a $Y$ chromosome.</li>
      <li>If an $X$-bearing sperm fertilises the egg $\rightarrow$ $X + X = XX$ ($\text{Female}$).</li>
      <li>If a $Y$-bearing sperm fertilises the egg $\rightarrow$ $X + Y = XY$ ($\text{Male}$).</li>
    </ul>

    <h4>2. Debunking Social Stigma Against Women</h4>
    <p>In many patriarchal societies, women are unjustly blamed, harassed, and ostracized for giving birth to female children. Modern cytogenetics provides definitive scientific proof that:</p>
    <ol>
      <li>The mother has <strong>zero biological control</strong> over the sex of the child, as she contributes an identical $X$ chromosome in every single ovum.</li>
      <li>The genetic determinant of sex is strictly the paternal gamete (the sperm).</li>
      <li>Even from the father's perspective, whether an $X$-sperm or $Y$-sperm reaches the egg first is an entirely random, natural statistical event governed by chance.</li>
    </ol>

    <h4>3. Legal Protections: Banning Pre-Natal Sex Determination</h4>
    <p>To eliminate sex-selective abortion (female foeticide) arising from this unscientific preference for sons, the Pre-Conception and Pre-Natal Diagnostic Techniques (<strong>PCPNDT</strong>) Act strictly criminalizes determining or disclosing the sex of a foetus using ultrasound or amniocentesis.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "The father genetically determines the child's sex because only he produces $Y$-bearing sperms.",
    "Women contribute an identical $X$ chromosome to every child and have zero role in determining sex.",
    "Blaming mothers for bearing daughters is scientifically baseless; prenatal sex testing is illegal under the PCPNDT Act."
  ],
  "keyNotes": [
    "Science conclusively proves that the mother provides only an X chromosome; the father's sperm alone dictates whether the child develops into a boy (XY) or girl (XX)."
  ],
  "questions": [
    get_bank_q(63, "m15_q01"),
    get_bank_q(64, "m15_q02"),
    get_bank_q(65, "m15_q03"),
    get_bank_q(66, "m15_q04"),
    {
      "id": "m15_q05",
      "question": "Which parent's gamete genetically determines whether the unborn child will be a boy or a girl?",
      "options": ["The mother's ovum", "The father's sperm", "Both parents contribute equally", "Neither, it depends on sunlight"],
      "answer": "The father's sperm",
      "explanation": "Because the mother only provides X chromosomes, the child's sex depends entirely on whether the father's fertilising sperm carries an X or a Y chromosome."
    },
    {
      "id": "m15_q06",
      "question": "Why is it scientifically absurd and unjust to blame a woman for giving birth to female children?",
      "options": [
        "Women have no chromosomes",
        "All eggs produced by the mother carry only X chromosomes, so she has zero influence over the sex of the child",
        "Women produce more Y chromosomes than men",
        "Ova destroy all male hormones"
      ],
      "answer": "All eggs produced by the mother carry only X chromosomes, so she has zero influence over the sex of the child",
      "explanation": "Mothers contribute only an X chromosome to all offspring; the paternal sperm alone determines whether the zygote becomes XX (female) or XY (male)."
    },
    {
      "id": "m15_q07",
      "question": "Which Indian legislation prohibits sex-selection and pre-natal sex determination to combat female foeticide?",
      "options": ["PCPNDT Act", "Right to Education Act", "Factories Act", "Wildlife Protection Act"],
      "answer": "PCPNDT Act",
      "explanation": "The Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act strictly bans prenatal sex determination to prevent female foeticide."
    },
    {
      "id": "m15_q08",
      "question": "What is the primary motive behind the statutory ban on disclosing foetal sex via ultrasound scanning?",
      "options": [
        "Ultrasound waves damage foetal hearing",
        "To prevent sex-selective female foeticide and maintain a healthy demographic gender balance",
        "To reduce doctor consultation fees",
        "To promote hospital privacy"
      ],
      "answer": "To prevent sex-selective female foeticide and maintain a healthy demographic gender balance",
      "explanation": "Banning foetal sex disclosure prevents sex-selective abortions that cause an unnatural deficit of girls in the population."
    },
    {
      "id": "m15_q09",
      "question": "Can a human father pass his Y chromosome directly to his biological daughter?",
      "options": [
        "Yes, 50% of daughters receive a Y chromosome",
        "No, daughters inherit the father's X chromosome; only sons inherit the father's Y chromosome",
        "Yes, if the mother has XX chromosomes",
        "Only under extreme cold conditions"
      ],
      "answer": "No, daughters inherit the father's X chromosome; only sons inherit the father's Y chromosome",
      "explanation": "A father passes his X chromosome to all daughters (making them XX) and his Y chromosome to all sons (making them XY)."
    },
    {
      "id": "m15_q10",
      "question": "In human fertilisation, what determines whether an X-bearing or Y-bearing sperm fertilises the ovum?",
      "options": [
        "The mother's blood pressure",
        "Pure statistical chance and random motility during sperm transit",
        "The time of day coitus takes place",
        "The phase of the moon"
      ],
      "answer": "Pure statistical chance and random motility during sperm transit",
      "explanation": "Fertilisation is a stochastic (random) biological process where both X and Y sperms have an equal opportunity to reach and penetrate the ovum."
    }
  ]
}
modules_11_to_20.append(m15)

# ==========================================
# Module 16: Evolution Connection & Natural Selection
# ==========================================
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Heredity & Evolution: Variations as Raw Material for Natural Selection",
  "tagline": "How heritable variations confer differential survival advantages in shifting ecological niches.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Connecting Heredity to Evolution</h4>
    <p><strong>Evolution</strong> is the gradual, progressive change in the heritable characteristics of biological populations over successive generations. Heredity is the transmission engine of evolution: without heritable variation passed through germ-line DNA, evolution by natural selection could not occur.</p>

    <h4>2. The Beetle Population Case Study (Natural Selection)</h4>
    <p>Consider a population of red beetles living on green leafy bushes:</p>
    <ul>
      <li><strong>Predation Pressure:</strong> Crows see the red beetles easily against the green foliage and feed on them in large numbers.</li>
      <li><strong>Novel Variation:</strong> A rare mutation during reproduction produces a <strong>green beetle variant</strong>. This green trait is heritable and passed to its progeny.</li>
      <li><strong>Survival Advantage:</strong> Crows cannot easily spot the green beetles camouflaged against green leaves. While red beetles are eaten, green beetles survive, reproduce, and multiply.</li>
      <li><strong>Evolutionary Outcome:</strong> Over generations, the frequency of the green allele increases until the population evolves to become predominantly green—a classic illustration of <strong>natural selection</strong> acting on heritable variation.</li>
    </ul>

    <h4>3. Genetic Drift (Random Flukes)</h4>
    <p>Now consider a blue beetle variant arising in the same red population. Blue beetles are just as visible to crows as red beetles, conferring zero survival advantage. However, suppose an elephant stomps on the bush, randomly crushing most red beetles by sheer accident. By chance, the few surviving beetles happen to be blue. They reproduce, and the population becomes blue. This change in allele frequencies due to random chance rather than selection is called <strong>genetic drift</strong>.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Heritable variations in germ-cell DNA provide the raw material upon which natural selection operates.",
    "Natural selection favours variations that confer adaptive survival advantages in a given ecological niche.",
    "Genetic drift causes random fluctuations in allele frequencies in small populations due to chance events."
  ],
  "keyNotes": [
    "Natural selection directs evolution toward greater adaptation, whereas genetic drift causes random changes without necessarily promoting survival fitness."
  ],
  "questions": [
    get_bank_q(67, "m16_q01"),
    get_bank_q(68, "m16_q02"),
    get_bank_q(69, "m16_q03"),
    get_bank_q(43, "m16_q04"),
    {
      "id": "m16_q05",
      "question": "In the green bush beetle example, why did the green colour variation provide a decisive survival advantage?",
      "options": [
        "Green beetles fly three times faster",
        "Green colour camouflaged them against green leaves, protecting them from predatory crows",
        "Green beetles were poisonous to crows",
        "Green beetles could photosynthesize"
      ],
      "answer": "Green colour camouflaged them against green leaves, protecting them from predatory crows",
      "explanation": "Camouflage against green foliage prevented crows from visually spotting green beetles, allowing them to survive and reproduce."
    },
    {
      "id": "m16_q06",
      "question": "The process whereby organisms better adapted to their environment tend to survive and produce more offspring is termed:",
      "options": ["Artificial selection", "Natural selection", "Clonal propagation", "Emasculation"],
      "answer": "Natural selection",
      "explanation": "Natural selection, formulated by Charles Darwin, is the mechanism of evolutionary change based on differential survival and reproduction."
    },
    {
      "id": "m16_q07",
      "question": "Random changes in the frequency of alleles in a small population caused by sheer accidental chance rather than adaptation are called:",
      "options": ["Natural selection", "Genetic drift", "Speciation", "Gene therapy"],
      "answer": "Genetic drift",
      "explanation": "Genetic drift refers to random fluctuations in allele frequencies in a gene pool resulting from chance events (e.g., natural disasters)."
    },
    {
      "id": "m16_q08",
      "question": "In which type of population does genetic drift produce the most pronounced evolutionary impact?",
      "options": ["Very small, isolated populations", "Extremely large continental populations", "Worldwide human populations", "Infinite oceanic populations"],
      "answer": "Very small, isolated populations",
      "explanation": "Genetic drift exerts a dramatic effect in small populations where chance accidents can easily eliminate or fix rare alleles."
    },
    {
      "id": "m16_q09",
      "question": "Why is sexual reproduction advantageous over asexual reproduction in driving long-term evolutionary survival?",
      "options": [
        "It uses less cellular energy",
        "It constantly generates novel genetic combinations and variations to adapt to changing environments",
        "It produces offspring twice as fast",
        "It stops DNA mutations completely"
      ],
      "answer": "It constantly generates novel genetic combinations and variations to adapt to changing environments",
      "explanation": "Sexual reproduction recombines alleles, generating extensive genetic diversity essential for adapting to unpredictable ecological changes."
    },
    {
      "id": "m16_q10",
      "question": "If a beetle variation provides NO survival advantage (e.g., blue colour against green leaves), how can it still become dominant in a small population?",
      "options": [
        "Through genetic drift caused by an accidental event that wipes out other variants",
        "Through natural selection",
        "By producing seeds",
        "By converting leaves into flowers"
      ],
      "answer": "Through genetic drift caused by an accidental event that wipes out other variants",
      "explanation": "By random chance (such as an elephant crushing most red beetles), the surviving blue beetles reproduce, establishing the trait via genetic drift."
    }
  ]
}
modules_11_to_20.append(m16)

# ==========================================
# Module 17: Weismann's Germplasm Theory
# ==========================================
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Germ Plasm vs Somatoplasm: The Molecular Impossibility of Lamarckism",
  "tagline": "Weismann's barrier, germline DNA stability, and why starvation or mutilations are not inherited.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Jean-Baptiste Lamarck's Flawed Hypothesis</h4>
    <p>In the early 19th century, French biologist Jean-Baptiste Lamarck proposed the <strong>Theory of Inheritance of Acquired Characters</strong>. He hypothesized that physical changes acquired by an organism through the "use and disuse of organs" during its lifetime (e.g., a giraffe stretching its neck to reach high leaves) are directly transmitted to its offspring.</p>

    <h4>2. August Weismann's Germ Plasm Theory (1892)</h4>
    <p>German evolutionary biologist August Weismann dismantled Lamarckism by drawing a fundamental biological distinction between two cell lineages:</p>
    <ul>
      <li><strong>Somatoplasm (Somatic Cells):</strong> Cells forming all ordinary body tissues—muscles, bones, nerves, and skin. Somatic cells perform physiological body tasks but die with the individual.</li>
      <li><strong>Germ Plasm (Germ Cells / Gametes):</strong> Cells set aside early in embryogenesis dedicated exclusively to reproduction (sperms and ova). The germ plasm represents an unbroken immortal continuum across generations.</li>
    </ul>

    <h4>3. The Weismann Barrier</h4>
    <p>Genetic information flows strictly from the <strong>germline to somatic tissues</strong> during development, never in reverse. Somatic environmental modifications—such as severe starvation reducing body mass, amputation of a limb, or sun-tanned skin—alter only somatic proteins. Because there is no molecular mechanism for somatic changes to back-mutate the nucleotide sequence of germline DNA, acquired characters are <strong>never inherited</strong>.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Lamarck hypothesized inheritance of acquired traits through use and disuse; Weismann disproved this experimentally.",
    "Weismann's Germ Plasm Theory: Genetic info resides in germ cells and is segregated from somatic body cells.",
    "The 'Weismann Barrier' prevents somatic cellular changes from altering nucleotide sequences in gametes."
  ],
  "keyNotes": [
    "Only mutations that occur in the DNA of germ cells (sperms and ova) can be transmitted to subsequent generations."
  ],
  "questions": [
    get_bank_q(41, "m17_q01"),
    get_bank_q(80, "m17_q02"),
    get_bank_q(70, "m17_q03"),
    get_bank_q(71, "m17_q04"),
    {
      "id": "m17_q05",
      "question": "Who proposed the 'Theory of Inheritance of Acquired Characters' that was later refuted by modern genetics?",
      "options": ["Jean-Baptiste Lamarck", "Gregor Mendel", "August Weismann", "Walter Sutton"],
      "answer": "Jean-Baptiste Lamarck",
      "explanation": "Lamarck proposed that traits acquired through use and disuse during an organism's lifetime could be inherited by its offspring."
    },
    {
      "id": "m17_q06",
      "question": "Why does a beetle population starved due to plant disease experience reduced body weight that is NOT passed to future well-fed generations?",
      "options": [
        "Starvation alters the beetle's exoskeleton colour",
        "Weight loss is a somatic phenotypic response to nutrient scarcity, leaving germ-cell DNA unaltered",
        "Starvation converts beetles into flies",
        "Beetles stop reproducing when hungry"
      ],
      "answer": "Weight loss is a somatic phenotypic response to nutrient scarcity, leaving germ-cell DNA unaltered",
      "explanation": "Under-nutrition reduces somatic body tissue mass without altering the genetic nucleotide sequences inside gametes."
    },
    {
      "id": "m17_q07",
      "question": "What is the principle known as the 'Weismann Barrier'?",
      "options": [
        "A membrane surrounding the nucleus",
        "The strict unidirectional flow of genetic information from germ cells to somatic cells, preventing somatic feedback into gametes",
        "A physical wall between testes and ovaries",
        "A protective coat on seeds"
      ],
      "answer": "The strict unidirectional flow of genetic information from germ cells to somatic cells, preventing somatic feedback into gametes",
      "explanation": "The Weismann barrier asserts that changes occurring in somatic tissues cannot feed back to alter the hereditary germ-line DNA."
    },
    {
      "id": "m17_q08",
      "question": "Which of the following alterations CAN be inherited by biological offspring?",
      "options": [
        "A gene mutation in a spermatogonium cell inside the testis",
        "A scar resulting from a burn on the forearm",
        "Fluency in speaking three foreign languages",
        "Muscle hypertrophy from daily gym workouts"
      ],
      "answer": "A gene mutation in a spermatogonium cell inside the testis",
      "explanation": "Spermatogonia are germ cells; a mutation in their DNA is carried by mature sperms and transmitted to offspring."
    },
    {
      "id": "m17_q09",
      "question": "If a woman pierces her ears for earrings, why are her daughters not born with pierced earlobes?",
      "options": [
        "Ear piercing only alters cartilage in somatic tissue without affecting reproductive gamete DNA",
        "Ear piercing is dominant only in males",
        "The piercing heals inside the uterus",
        "Daughters inherit traits only from fathers"
      ],
      "answer": "Ear piercing only alters cartilage in somatic tissue without affecting reproductive gamete DNA",
      "explanation": "Piercing is an acquired somatic modification that has zero effect on the nucleotide sequence of germ-line chromosomes."
    },
    {
      "id": "m17_q10",
      "question": "Which of the following scientists conducted the famous 20-generation tail-docking experiment on mice?",
      "options": ["August Weismann", "Gregor Mendel", "Charles Darwin", "Hugo de Vries"],
      "answer": "August Weismann",
      "explanation": "August Weismann amputated the tails of mice over 20 generations to decisively disprove Lamarck's theory of acquired inheritance."
    }
  ]
}
modules_11_to_20.append(m17)

# ==========================================
# Module 18: Speciation Basics & Genetic Isolation
# ==========================================
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Speciation Basics: Geographical Isolation & Genetic Divergence",
  "tagline": "How reproductive barriers, gene pool separation, and natural selection lead to the origin of new species.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Speciation?</h4>
    <p>A <strong>species</strong> is a population of reproducing organisms that can freely interbreed among themselves under natural conditions to produce fertile offspring. <strong>Speciation</strong> is the evolutionary process by which an existing ancestral species splits into two or more genetically distinct, reproductively isolated descendant species.</p>

    <h4>2. Primary Drivers of Speciation</h4>
    <ul>
      <li><strong>1. Geographical Isolation (Allopatric Barrier):</strong> A physical geographical barrier—such as the emergence of a wide mountain range, a major river widening, or continental drift—subdivides a continuous population into isolated sub-populations. Gene flow between these groups drops to zero.</li>
      <li><strong>2. Genetic Drift:</strong> In each separated sub-population, random chance events alter allele frequencies independently over generations.</li>
      <li><strong>3. Differing Natural Selection Pressures:</strong> Each isolated sub-population encounters distinct ecological challenges—different predators, ambient temperatures, vegetation, and food sources. Natural selection favours different adaptive variations in each group.</li>
    </ul>

    <h4>3. Reproductive Isolation (The Final Threshold)</h4>
    <p>Over thousands of generations, accumulated genetic differences in DNA, chromosome structure, mating rituals, and gamete biochemistry become so profound that even if the geographical barrier disappears, individuals from the two groups <strong>can no longer interbreed to produce fertile offspring</strong>. At this point, speciation is complete.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "A species is a group of interbreeding individuals capable of producing fertile offspring.",
    "Speciation occurs through geographical isolation, independent genetic drift, and differing natural selection.",
    "Reproductive isolation marks the permanent emergence of a new species when interbreeding is no longer possible."
  ],
  "keyNotes": [
    "Geographical isolation can lead to speciation only in sexually reproducing organisms; it does not drive speciation in strictly self-pollinating or asexually dividing species."
  ],
  "questions": [
    get_bank_q(72, "m18_q01"),
    get_bank_q(73, "m18_q02"),
    get_bank_q(74, "m18_q03"),
    {
      "id": "m18_q04",
      "question": "What is the biological definition of a species?",
      "options": [
        "A group of organisms that look identical under an optical microscope",
        "A group of naturally interbreeding organisms capable of producing viable, fertile offspring",
        "All organisms living in the same geographical forest",
        "Organisms that consume the exact same food source"
      ],
      "answer": "A group of naturally interbreeding organisms capable of producing viable, fertile offspring",
      "explanation": "A biological species consists of organisms capable of interbreeding in nature to produce fertile, viable offspring."
    },
    {
      "id": "m18_q05",
      "question": "Which of the following physical barriers can cause geographical isolation between sub-populations?",
      "options": [
        "Formation of a wide mountain range or new river channel",
        "A drop in atmospheric oxygen by 0.1%",
        "A cloudy day in summer",
        "A change in leaf texture"
      ],
      "answer": "Formation of a wide mountain range or new river channel",
      "explanation": "Physical geographical barriers like rivers, oceans, or mountain ranges split populations and prevent gene flow."
    },
    {
      "id": "m18_q06",
      "question": "Why does geographical isolation NOT cause speciation in strictly asexually reproducing organisms like bacteria?",
      "options": [
        "Bacteria do not have cell membranes",
        "Bacteria reproduce by binary fission without interbreeding, so reproductive isolation has no functional meaning",
        "Bacteria cannot survive on mountains",
        "Bacteria do not possess DNA"
      ],
      "answer": "Bacteria reproduce by binary fission without interbreeding, so reproductive isolation has no functional meaning",
      "explanation": "Speciation via geographical isolation relies on stopping sexual gene flow between interbreeding populations."
    },
    {
      "id": "m18_q07",
      "question": "At what definitive point can two diverging populations be declared two separate species?",
      "options": [
        "When they develop different body colours",
        "When they are permanently unable to interbreed and produce fertile offspring upon contact",
        "When they move 10 kilometers apart",
        "When their life expectancy differs by 1 year"
      ],
      "answer": "When they are permanently unable to interbreed and produce fertile offspring upon contact",
      "explanation": "Reproductive isolation—the inability to interbreed and generate fertile offspring—is the definitive criterion for distinct species."
    },
    {
      "id": "m18_q08",
      "question": "What term describes the exchange of genes between different interbreeding populations of the same species?",
      "options": ["Gene flow", "Genetic drift", "Speciation", "Cloning"],
      "answer": "Gene flow",
      "explanation": "Gene flow is the transfer of genetic material between populations through migration and interbreeding."
    },
    {
      "id": "m18_q09",
      "question": "What role does natural selection play in speciation among geographically isolated populations?",
      "options": [
        "It preserves identical traits in both groups",
        "It selects different adaptive variations suited to each sub-population's unique local environment",
        "It accelerates the return of the geographical barrier",
        "It forces all organisms to stop mating"
      ],
      "answer": "It selects different adaptive variations suited to each sub-population's unique local environment",
      "explanation": "Different local habitats present different selective pressures, steering isolated gene pools along divergent evolutionary paths."
    },
    {
      "id": "m18_q10",
      "question": "Which of the following is a classic pre-zygotic reproductive isolating mechanism?",
      "options": [
        "Different mating seasons or courtship behaviours",
        "Shared geographical territory",
        "Identical chromosome count",
        "Consuming the same water source"
      ],
      "answer": "Different mating seasons or courtship behaviours",
      "explanation": "Behavioural differences in courtship songs or incompatible breeding seasons prevent mating, maintaining reproductive isolation."
    }
  ]
}
modules_11_to_20.append(m18)

# ==========================================
# Module 19: ABO Blood Groups & Multiple Alleles
# ==========================================
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "ABO Blood Group Inheritance: Multiple Alleles & Co-dominance",
  "tagline": "The three alleles I^A, I^B, and i; co-dominance in AB blood, and inheritance problem-solving.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The ABO Blood Group System</h4>
    <p>In human beings, the ABO blood group is controlled by a single gene: the <strong>$I$ gene</strong> (isoagglutinogen) located on chromosome 9. This gene governs the production of glycoprotein antigens protruding from the plasma membrane of red blood cells (erythrocytes).</p>

    <h4>2. Multiple Alleles</h4>
    <p>Unlike classic Mendelian traits that feature only two alleles, the human $I$ gene exists in <strong>three alternative allelic forms (multiple allelism)</strong>:</p>
    <ul>
      <li>$\mathbf{I^A}$: Produces antigen A on red blood cells (Dominant over $i$).</li>
      <li>$\mathbf{I^B}$: Produces antigen B on red blood cells (Dominant over $i$).</li>
      <li>$\mathbf{i}$: Produces no surface antigen (Recessive allele).</li>
    </ul>
    <p>Because every individual is diploid, each person can carry at most <strong>any two</strong> of these three alleles.</p>

    <h4>3. Co-dominance in Blood Group AB</h4>
    <p>When both dominant alleles $\mathbf{I^A}$ and $\mathbf{I^B}$ are present together in an individual ($\mathbf{I^A I^B}$), neither allele masks the other. Instead, <strong>both express fully and simultaneously</strong>, producing both antigen A and antigen B on erythrocytes. This phenomenon is called <strong>co-dominance</strong>.</p>

    <h4>4. Genotypes and Phenotypes</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Blood Group (Phenotype)</th><th>Possible Genotype(s)</th><th>Antigens on RBCs</th></tr></thead>
      <tbody>
        <tr><td><strong>Type A</strong></td><td>$I^A I^A$ or $I^A i$</td><td>Antigen A</td></tr>
        <tr><td><strong>Type B</strong></td><td>$I^B I^B$ or $I^B i$</td><td>Antigen B</td></tr>
        <tr><td><strong>Type AB</strong></td><td>$I^A I^B$ (Co-dominant)</td><td>Both Antigen A & B</td></tr>
        <tr><td><strong>Type O</strong></td><td>$ii$ (Homozygous recessive)</td><td>Neither Antigen</td></tr>
      </tbody>
    </table>
  </div>
</div>
""",
  "pointsToRemember": [
    "Human ABO blood groups are controlled by the gene $I$ which has three alleles: $I^A$, $I^B$, and $i$.",
    "Alleles $I^A$ and $I^B$ are completely dominant over recessive $i$.",
    "Alleles $I^A$ and $I^B$ are co-dominant with each other, producing blood group AB in heterozygous $I^A I^B$ individuals."
  ],
  "keyNotes": [
    "A child with blood group O ($ii$) born to a mother with blood group A must mean the mother's genotype is heterozygous $I^A i$ and the father must carry at least one recessive $i$ allele."
  ],
  "questions": [
    get_bank_q(35, "m19_q01"),
    get_bank_q(36, "m19_q02"),
    get_bank_q(75, "m19_q03"),
    get_bank_q(76, "m19_q04"),
    {
      "id": "m19_q05",
      "question": "How many total distinct alleles control the ABO blood group system in the human population?",
      "options": ["Two alleles", "Three alleles (I^A, I^B, i)", "Four alleles", "Six alleles"],
      "answer": "Three alleles (I^A, I^B, i)",
      "explanation": "The human ABO blood group system is governed by three multiple alleles: I^A, I^B, and i."
    },
    {
      "id": "m19_q06",
      "question": "What genetic phenomenon is illustrated when an individual with genotype I^A I^B exhibits both A and B antigens equally?",
      "options": ["Complete dominance", "Co-dominance", "Incomplete dominance", "Polygenic inheritance"],
      "answer": "Co-dominance",
      "explanation": "In co-dominance, both alleles express their phenotypic effects simultaneously and fully in the heterozygote."
    },
    {
      "id": "m19_q07",
      "question": "What is the only possible genotype of an individual possessing blood group O?",
      "options": ["I^A i", "I^B i", "I^A I^B", "ii"],
      "answer": "ii",
      "explanation": "Blood group O is homozygous recessive, requiring two copies of the 'i' allele (ii)."
    },
    {
      "id": "m19_q08",
      "question": "A man with blood group A marries a woman with blood group B. Their first child has blood group O. What are the genotypes of the parents?",
      "options": [
        "Father: I^A I^A; Mother: I^B I^B",
        "Father: I^A i; Mother: I^B i",
        "Father: I^A I^B; Mother: ii",
        "Father: ii; Mother: I^B I^B"
      ],
      "answer": "Father: I^A i; Mother: I^B i",
      "explanation": "For a child to have blood group O (ii), each parent must donate a recessive 'i' allele, meaning both must be heterozygous (I^A i and I^B i)."
    },
    {
      "id": "m19_q09",
      "question": "How many possible genotypes and how many possible phenotypes exist in the human ABO blood group system?",
      "options": [
        "6 genotypes and 4 phenotypes",
        "4 genotypes and 4 phenotypes",
        "3 genotypes and 6 phenotypes",
        "6 genotypes and 6 phenotypes"
      ],
      "answer": "6 genotypes and 4 phenotypes",
      "explanation": "The 6 genotypes (I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii) produce 4 phenotypes (A, B, AB, O)."
    },
    {
      "id": "m19_q10",
      "question": "Can two parents with blood group O (ii) ever have a biological child with blood group A or B?",
      "options": [
        "Yes, 50% of the time",
        "No, because blood group O parents carry only recessive 'i' alleles and lack the I^A or I^B alleles",
        "Yes, if the child is male",
        "Yes, under warm climate conditions"
      ],
      "answer": "No, because blood group O parents carry only recessive 'i' alleles and lack the I^A or I^B alleles",
      "explanation": "Two 'ii' parents can produce only 'i'-bearing gametes, so all their biological offspring must have blood group O (ii)."
    }
  ]
}
modules_11_to_20.append(m19)

# ==========================================
# Module 20: Comprehensive Mendelian Problem Solving
# ==========================================
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Comprehensive Genetics Problem Solving: Ratios, Crosses & Pedigree Logic",
  "tagline": "Mastery problem-solving for monohybrid, dihybrid, test cross, and human genetic pedigrees.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Genetic Cross Problem-Solving Protocol</h4>
    <p>To deterministically solve any Mendelian genetics numerical or conceptual problem:</p>
    <ol>
      <li><strong>Identify Alleles:</strong> Assign uppercase letters to dominant alleles ($T, R, Y$) and corresponding lowercase letters to recessive alleles ($t, r, y$).</li>
      <li><strong>Deduce Parental Genotypes:</strong> Use phenotypic clues. If a parent displays the recessive phenotype, its genotype is always homozygous recessive (e.g., $tt$, $rr$). If a parent displays a dominant trait but has a recessive offspring, that parent must be heterozygous (e.g., $Tt$).</li>
      <li><strong>Determine Gametes:</strong> Segregate alleles cleanly into haploid gametes ($T$ and $t$, or $RY, Ry, rY, ry$).</li>
      <li><strong>Construct the Punnett Grid:</strong> Cross all possible male and female gametes to calculate genotypic and phenotypic probabilities.</li>
    </ol>

    <h4>2. The Test Cross (Mendel's Diagnostic Tool)</h4>
    <p>How can you determine whether a tall pea plant is homozygous dominant ($TT$) or heterozygous ($Tt$)? You perform a <strong>test cross</strong> by breeding the individual of unknown genotype with a <strong>homozygous recessive ($tt$)</strong> individual:</p>
    <ul>
      <li>If the unknown is homozygous ($TT \times tt$): $100\%$ of progeny are tall ($Tt$).</li>
      <li>If the unknown is heterozygous ($Tt \times tt$): Progeny segregate into $\mathbf{1\text{ Tall} : 1\text{ Dwarf}}$ ($50\% : 50\%$). The appearance of even a single dwarf plant proves the tall parent was heterozygous!</li>
    </ul>

    <h4>3. Summary of Standard Mendelian Ratios</h4>
    <ul>
      <li><strong>Monohybrid $F_2$ Phenotypic Ratio:</strong> $3 : 1$</li>
      <li><strong>Monohybrid $F_2$ Genotypic Ratio:</strong> $1 : 2 : 1$ ($1\,TT : 2\,Tt : 1\,tt$)</li>
      <li><strong>Monohybrid Test Cross Ratio:</strong> $1 : 1$ ($1\,Tt : 1\,tt$)</li>
      <li><strong>Dihybrid $F_2$ Phenotypic Ratio:</strong> $9 : 3 : 3 : 1$</li>
      <li><strong>Dihybrid Test Cross Ratio:</strong> $1 : 1 : 1 : 1$</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "A test cross breeds an individual with unknown dominant phenotype against a homozygous recessive ($tt$) tester.",
    "A $1:1$ test cross ratio proves the dominant parent is heterozygous ($Tt$); a $100\%$ dominant result proves homozygosity ($TT$).",
    "Mastery of Mendelian ratios ($3:1$, $1:2:1$, $9:3:3:1$, $1:1$, $1:1:1:1$) enables rapid analysis of complex genetic crosses."
  ],
  "keyNotes": [
    "In all genetic calculations, probabilities multiply for independent events (Rule of Multiplication: $1/2 \times 1/2 = 1/4$) and add for mutually exclusive alternatives (Rule of Addition: $1/4 + 1/4 = 1/2$)."
  ],
  "questions": [
    get_bank_q(77, "m20_q01"),
    get_bank_q(78, "m20_q02"),
    get_bank_q(79, "m20_q03"),
    get_bank_q(91, "m20_q04"),
    get_bank_q(92, "m20_q05"),
    get_bank_q(94, "m20_q06"),
    get_bank_q(95, "m20_q07"),
    get_bank_q(96, "m20_q08"),
    get_bank_q(97, "m20_q09"),
    {
      "id": "m20_q10",
      "question": "What is the expected phenotypic ratio in the progeny of a test cross involving a heterozygous tall pea plant (Tt x tt)?",
      "options": ["3:1", "1:1 (50% Tall : 50% Dwarf)", "1:2:1", "100% Tall"],
      "answer": "1:1 (50% Tall : 50% Dwarf)",
      "explanation": "Crossing Tt with tt produces 50% Tt (Tall) and 50% tt (Dwarf), giving the classic 1:1 test cross ratio."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch8_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 8 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
