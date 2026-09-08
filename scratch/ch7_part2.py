# -*- coding: utf-8 -*-
"""
CH7 Part 2: Modules 11 to 20
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

modules_11_to_20 = []

# ==========================================
# Module 11: Fertilisation in Flowering Plants
# ==========================================
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Fertilisation in Flowering Plants: Pollen Tube Chemotropism & Syngamy",
  "tagline": "Pollen tube germination on the stigma, chemotropic journey through style, and fusion of male and female gametes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Pollen Grain Germination on the Stigma</h4>
    <p>When compatible pollen grains land on the receptive, sticky stigma of the carpel, they absorb moisture and sugary secretions secreted by the stigmatic papillae. This initiates germination: the pollen grain produces a microscopic projection called a <strong>pollen tube</strong> that emerges through one of its germ pores.</p>
    
    <h4>2. Chemotropism Through the Style</h4>
    <p>The pollen tube grows downwards through the tissue of the style towards the ovary. This directional growth is guided by chemical signals secreted by the female tissues (a classic example of <strong>chemotropism</strong>). The pollen tube carries two non-motile male gametes within its cytoplasm as it elongates.</p>

    <h4>3. Entry into Ovule & Syngamy (Fertilisation)</h4>
    <p>Upon reaching the ovary, the pollen tube enters the ovule through a tiny aperture called the <strong>micropyle</strong> and penetrates the embryo sac. The tip of the pollen tube bursts open, discharging the two male gametes:</p>
    <ul>
      <li><strong>Syngamy (True Fertilisation):</strong> One male gamete (haploid, $n$) fuses with the female egg cell (haploid, $n$) to form a diploid ($2n$) cell called the <strong>zygote</strong>. This single-celled zygote represents the starting point of the next sporophytic generation.</li>
      <li><strong>Triple Fusion:</strong> The second male gamete ($n$) moves to the centre and fuses with the two haploid polar nuclei ($n + n$) to form a triploid ($3n$) primary endosperm nucleus (PEN), which subsequently develops into nutrient-rich <strong>endosperm</strong> tissue to nourish the growing embryo.</li>
    </ul>

    <h4>4. Double Fertilisation</h4>
    <p>Because two distinct fusions take place within the embryo sac of flowering plants—syngamy ($n + n \rightarrow 2n$) and triple fusion ($n + n + n \rightarrow 3n$)—this unique phenomenon is termed <strong>double fertilisation</strong>. It is an evolutionary hallmark exclusive to angiosperms.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Pollen tube growth down the style towards the ovule is guided by chemical attractants (chemotropism).",
    "Syngamy is the fusion of one haploid male gamete with the haploid egg cell to form a diploid zygote ($2n$).",
    "Double fertilisation comprises syngamy and triple fusion, resulting in the diploid zygote and triploid nutritive endosperm."
  ],
  "keyNotes": "Double fertilisation ensures that nutritive endosperm tissue is produced only when successful fertilisation has occurred, conserving vital plant resources.",
  "questions": [
    get_bank_q(76, "m11_q01"),
    get_bank_q(91, "m11_q02"),
    get_bank_q(98, "m11_q03"),
    get_bank_q(83, "m11_q04"),
    get_bank_q(71, "m11_q05"),
    {
      "id": "m11_q06",
      "question": "What type of directional tropism guides the pollen tube towards the ovule inside the flower's carpel?",
      "options": ["Phototropism", "Chemotropism", "Geotropism", "Hydrotropism"],
      "answer": "Chemotropism",
      "explanation": "Pollen tube growth down the style towards the ovary is a response to chemical secretions released by the ovule and stigma tissues, known as chemotropism."
    },
    {
      "id": "m11_q07",
      "question": "In flowering plants, the fusion of the second male gamete with the two central polar nuclei results in the formation of:",
      "options": ["Diploid zygote", "Triploid endosperm nucleus", "Haploid antipodal cell", "Diploid seed coat"],
      "answer": "Triploid endosperm nucleus",
      "explanation": "Triple fusion involves the fusion of one haploid male gamete (n) with two polar nuclei (n + n), producing a triploid (3n) endosperm nucleus that nourishes the embryo."
    },
    {
      "id": "m11_q08",
      "question": "Through which microscopic opening in the ovule does the pollen tube typically enter the embryo sac?",
      "options": ["Stoma", "Micropyle", "Chalaza", "Funicle"],
      "answer": "Micropyle",
      "explanation": "The micropyle is the small pore or aperture in the integuments of an ovule through which the pollen tube enters to discharge male gametes."
    },
    {
      "id": "m11_q09",
      "question": "What is the ploidy level of the functional zygote formed immediately after syngamy in angiosperms?",
      "options": ["Haploid (n)", "Diploid (2n)", "Triploid (3n)", "Tetraploid (4n)"],
      "answer": "Diploid (2n)",
      "explanation": "Syngamy unites a haploid male gamete (n) with a haploid female egg (n), restoring the full somatic diploid chromosome number (2n)."
    },
    {
      "id": "m11_q10",
      "question": "Why is the reproductive process in angiosperms referred to as 'double fertilisation'?",
      "options": [
        "Two pollen grains fertilise two separate ovules simultaneously",
        "Two separate fusions occur: syngamy (egg + sperm) and triple fusion (polar nuclei + sperm)",
        "Fertilisation occurs twice in the same blooming season",
        "Both petals and sepals fuse to form the seed coat"
      ],
      "answer": "Two separate fusions occur: syngamy (egg + sperm) and triple fusion (polar nuclei + sperm)",
      "explanation": "Double fertilisation specifically designates the two distinct fusion events occurring inside the embryo sac: syngamy forming the diploid zygote and triple fusion forming the triploid endosperm."
    }
  ]
}
modules_11_to_20.append(m11)

# ==========================================
# Module 12: Post-Fertilisation Changes & Seed Germination
# ==========================================
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Post-Fertilisation Changes, Seed Architecture & Germination",
  "tagline": "Transformation of floral organs: ovule to seed, ovary to fruit, and embryonic development.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Post-Fertilisation Transformation of Floral Organs</h4>
    <p>Following successful double fertilisation, significant morphological and physiological transformations occur in the flower:</p>
    <ul>
      <li><strong>Zygote:</strong> Divides repeatedly by mitosis to develop into an <strong>embryo</strong> with future root and shoot systems.</li>
      <li><strong>Ovule:</strong> Develops a tough, protective outer coat (testa) and gradually matures into a <strong>seed</strong>.</li>
      <li><strong>Ovary:</strong> Swells, accumulates sugars and nutrients, and ripens to form the <strong>fruit</strong>.</li>
      <li><strong>Sepals, Petals, Stamens, Style, and Stigma:</strong> Have fulfilled their functions; they generally wither, shrivel, and fall off (though in some fruits like brinjal and tomato, persistent sepals remain attached).</li>
    </ul>

    <h4>2. Seed Architecture & Embryo Anatomy</h4>
    <p>A mature dicot seed (e.g., gram or pea) consists of three essential parts:</p>
    <ul>
      <li><strong>Seed Coat (Testa):</strong> Tough outer protective layer guarding against desiccation and mechanical injury.</li>
      <li><strong>Cotyledons (Seed Leaves):</strong> Fleshy storage organs containing reserve food (proteins, starch, lipids) to sustain the seedling before true photosynthesis begins.</li>
      <li><strong>Embryonal Axis:</strong> Comprises the <strong>radicle</strong> (the future root that grows geotropically downward) and the <strong>plumule</strong> (the future shoot that grows phototropically upward).</li>
    </ul>

    <h4>3. Seed Germination</h4>
    <p>Seeds remain in a dormant, quiescent state of suspended metabolic animation until favourable conditions are provided:</p>
    <ul>
      <li><strong>Adequate Moisture (Water):</strong> Imbibed through the micropyle to hydrate dehydrated tissues and activate digestive hydrolytic enzymes (such as amylases).</li>
      <li><strong>Oxygen:</strong> Essential for continuous aerobic respiration to synthesize cellular ATP needed for rapid cell division.</li>
      <li><strong>Suitable Temperature:</strong> Provides optimal kinetic energy for embryonic metabolic enzymes.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Post-fertilisation: the ovule develops into the seed, while the ovary ripens into the fruit.",
    "The embryo consists of the plumule (future shoot), radicle (future root), and cotyledons (food stores).",
    "Germination requires water (imbibition and enzyme activation), oxygen (aerobic cellular respiration), and suitable temperature."
  ],
  "keyNotes": "The seed coat protects the dormant embryo, while cotyledons or endosperm provide energy reserves until newly sprouted green leaves can perform photosynthesis.",
  "questions": [
    get_bank_q(85, "m12_q01"),
    {
      "id": "m12_q02",
      "question": "Which anatomical structure of a flower develops into the fruit after successful fertilisation?",
      "options": ["Ovule", "Ovary", "Stigma", "Style"],
      "answer": "Ovary",
      "explanation": "After fertilisation, the floral ovary grows rapidly, ripens, and transforms into the fruit enclosing the seeds."
    },
    {
      "id": "m12_q03",
      "question": "The tough, resistant outer coat of a mature seed develops directly from which floral structure?",
      "options": ["Ovary wall", "Integuments of the ovule", "Petals", "Anther wall"],
      "answer": "Integuments of the ovule",
      "explanation": "The integuments surrounding the ovule harden and dehydrate to form the protective seed coat (testa)."
    },
    {
      "id": "m12_q04",
      "question": "In a germinating seed, which embryonic part emerges first to establish the primary root system?",
      "options": ["Plumule", "Radicle", "Cotyledon", "Hypocotyl"],
      "answer": "Radicle",
      "explanation": "The radicle emerges first through the micropyle, anchoring the seedling in soil and absorbing water and minerals."
    },
    {
      "id": "m12_q05",
      "question": "Which part of the embryo develops into the future shoot bearing the leaves and stem?",
      "options": ["Radicle", "Plumule", "Testa", "Micropyle"],
      "answer": "Plumule",
      "explanation": "The plumule is the embryonic shoot tip that grows upward towards light to form the leafy shoot system."
    },
    {
      "id": "m12_q06",
      "question": "What is the primary physiological function of cotyledons in non-endospermic seeds such as gram and pea?",
      "options": [
        "To absorb carbon dioxide from atmospheric air",
        "To store reserve food materials to nourish the germinating embryo",
        "To protect the flower from herbivorous insects",
        "To attract insect pollinators by emitting sweet nectar"
      ],
      "answer": "To store reserve food materials to nourish the germinating embryo",
      "explanation": "In dicots like gram, bean, and pea, cotyledons store starch, proteins, and fats that are hydrolysed to fuel embryonic growth until photosynthesis commences."
    },
    {
      "id": "m12_q07",
      "question": "What happens to the petals, sepals, and stamens in the majority of flowering plants after fertilisation?",
      "options": [
        "They turn green and become cotyledons",
        "They wither, shrivel, and fall off",
        "They fuse together to create the embryo",
        "They enlarge to form the seed coat"
      ],
      "answer": "They wither, shrivel, and fall off",
      "explanation": "Once pollination and fertilisation are complete, non-essential accessory organs (petals, sepals, stamens) wither and drop off."
    },
    {
      "id": "m12_q08",
      "question": "Why is water essential for initiating seed germination?",
      "options": [
        "It cools down the seed to induce dormancy",
        "It softens the seed coat and hydrates enzymes to mobilise stored nutrients",
        "It directly provides glucose for the embryo",
        "It triggers chlorophyll breakdown in the radicle"
      ],
      "answer": "It softens the seed coat and hydrates enzymes to mobilise stored nutrients",
      "explanation": "Imbibition of water softens the impermeable seed coat, swells embryonic cells, and activates metabolic enzymes like amylase and proteases."
    },
    {
      "id": "m12_q09",
      "question": "Why do dry seeds fail to germinate if placed in water in an airtight container completely devoid of oxygen?",
      "options": [
        "Water cannot enter without oxygen pressure",
        "Aerobic cellular respiration cannot occur to generate ATP for cellular growth",
        "Cotyledons decompose instantly in water",
        "The plumule requires oxygen to produce pollen grains"
      ],
      "answer": "Aerobic cellular respiration cannot occur to generate ATP for cellular growth",
      "explanation": "Germination involves rapid cell division and synthesis, demanding substantial metabolic energy (ATP) generated via aerobic cellular respiration."
    },
    {
      "id": "m12_q10",
      "question": "In which of the following vegetables does the calyx (sepals) remain persistently attached to the ripe fruit?",
      "options": ["Mango", "Brinjal (Eggplant)", "Apple", "Gram"],
      "answer": "Brinjal (Eggplant)",
      "explanation": "In members of the Solanaceae family such as brinjal (eggplant) and tomato, the green sepals (calyx) persist and remain attached to the fruit base."
    }
  ]
}
modules_11_to_20.append(m12)

# ==========================================
# Module 13: Reproduction in Humans: Adolescence & Puberty
# ==========================================
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Human Reproduction: Adolescence, Puberty & Secondary Sexual Characteristics",
  "tagline": "Somatic growth vs reproductive maturity, endocrine orchestration by testosterone and estrogen.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. General Growth vs Reproductive Maturity</h4>
    <p>Human development progresses through childhood with steady somatic enlargement—bones lengthen, body mass increases, and milk teeth are replaced by permanent dentition. However, during the teenage years, general somatic growth slows down while a distinct phase of sexual and reproductive maturation begins, known as <strong>puberty</strong>.</p>

    <h4>2. What is Puberty?</h4>
    <p>Puberty is the developmental transition phase during which gonads (testes in males and ovaries in females) become functionally active, commence production of mature gametes (sperms and ova), and secrete sex hormones that trigger secondary sexual characteristics.</p>

    <h4>3. Common Physical Changes in Both Sexes</h4>
    <ul>
      <li>Thick hair growth in new body regions: armpits (axillae) and pubic region between the thighs.</li>
      <li>Finer hair development on limbs, legs, and face.</li>
      <li>Increased activity of <strong>sebaceous (oil) glands</strong> and sweat glands in the skin, frequently resulting in adolescent acne and pimples.</li>
      <li>Heightened self-awareness and emotional sensitivity.</li>
    </ul>

    <h4>4. Gender-Specific Secondary Sexual Characteristics</h4>
    <ul>
      <li><strong>In Boys (Driven by Testosterone):</strong> Enlargement of testes and penis; development of facial hair (moustache, beard); deepening of voice due to enlargement of the larynx ("Adam's apple"); broader shoulders and chest; occasional nighttime erections.</li>
      <li><strong>In Girls (Driven by Estrogen & Progesterone):</strong> Enlargement and development of breast tissue with darkening of nipple areolas; widening of the pelvis and hips; deposition of subcutaneous fat; initiation of ovulation and the <strong>menstrual cycle</strong> (menarche).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Puberty is the period when reproductive organs mature and gamete production commences.",
    "Testosterone governs male secondary sexual traits (deep voice, facial hair, muscular build).",
    "Estrogen and progesterone govern female secondary traits (breast development, hip widening, menstrual cycle onset)."
  ],
  "keyNotes": "Secondary sexual characteristics serve as biological signals of reproductive maturity, driven by endocrine secretions from the pituitary gland and gonads.",
  "questions": [
    get_bank_q(31, "m13_q01"),
    get_bank_q(32, "m13_q02"),
    get_bank_q(86, "m13_q03"),
    {
      "id": "m13_q04",
      "question": "Which endocrine gland at the base of the brain orchestrates the onset of puberty by releasing gonadotropic hormones?",
      "options": ["Adrenal gland", "Pituitary gland", "Thyroid gland", "Pancreas"],
      "answer": "Pituitary gland",
      "explanation": "The anterior pituitary gland secretes LH (Luteinizing Hormone) and FSH (Follicle Stimulating Hormone) that stimulate the gonads to produce sex hormones."
    },
    {
      "id": "m13_q05",
      "question": "What is the primary male sex hormone responsible for deepening of the voice and facial hair growth at puberty?",
      "options": ["Estrogen", "Progesterone", "Testosterone", "Insulin"],
      "answer": "Testosterone",
      "explanation": "Testosterone, produced by the Leydig cells of the testes, drives male secondary sexual characteristics."
    },
    {
      "id": "m13_q06",
      "question": "The onset of the first menstrual cycle in adolescent human females is scientifically termed:",
      "options": ["Menopause", "Menarche", "Gestation", "Parturition"],
      "answer": "Menarche",
      "explanation": "Menarche marks the initiation of the first menstrual cycle during female puberty, typically occurring between ages 11 and 14."
    },
    {
      "id": "m13_q07",
      "question": "Why does a boy's voice deepen and become cracked or hoarse during early puberty?",
      "options": [
        "Infection of the trachea",
        "Enlargement and protrusion of the larynx (Adam's apple) and lengthening of vocal cords",
        "Shrinkage of the pharynx",
        "Accumulation of mucous in bronchial tubes"
      ],
      "answer": "Enlargement and protrusion of the larynx (Adam's apple) and lengthening of vocal cords",
      "explanation": "Under testosterone influence, the cartilaginous larynx grows prominently (Adam's apple) and vocal cords thicken and lengthen, lowering the pitch."
    },
    {
      "id": "m13_q08",
      "question": "Which ovarian hormone is primarily responsible for the development of secondary sexual traits such as breast enlargement in adolescent girls?",
      "options": ["Testosterone", "Estrogen", "Adrenaline", "Thyroxine"],
      "answer": "Estrogen",
      "explanation": "Estrogen produced by developing ovarian follicles promotes female secondary sexual traits, including breast development and fat deposition."
    },
    {
      "id": "m13_q09",
      "question": "Why do adolescents frequently develop facial pimples and acne during puberty?",
      "options": [
        "Deficiency of red blood cells",
        "Hyperactivity and increased secretion of sebaceous (oil) and sweat glands in the skin",
        "Excessive calcium deposition in facial bones",
        "Dehydration of epidermal keratinocytes"
      ],
      "answer": "Hyperactivity and increased secretion of sebaceous (oil) and sweat glands in the skin",
      "explanation": "Surging sex hormones during puberty stimulate sebaceous glands, causing increased sebum production that clogs pores and fosters acne-causing bacteria."
    },
    {
      "id": "m13_q10",
      "question": "At puberty, somatic body growth slows down because:",
      "options": [
        "Cells lose the ability to divide mitotically",
        "Body resources are redirected towards the maturation of reproductive tissues and organs",
        "Food intake drops significantly during teenage years",
        "The skeletal system stops responding to human growth hormone entirely"
      ],
      "answer": "Body resources are redirected towards the maturation of reproductive tissues and organs",
      "explanation": "During puberty, energy and nutritional resources prioritize the maturation of primary reproductive structures and gamete-producing gonads."
    }
  ]
}
modules_11_to_20.append(m13)

# ==========================================
# Module 14: Male Reproductive System: Testes & Scrotum
# ==========================================
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Male Reproductive System: Testes, Scrotum & Vas Deferens",
  "tagline": "Spermatogenesis thermoregulation, testicular anatomy, and sperm transport pathways.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Anatomical Position of the Testes & The Scrotum</h4>
    <p>The male gonads, a pair of oval <strong>testes</strong>, lie outside the primary abdominal cavity within a pouch of pigmented skin called the <strong>scrotum</strong>. This anatomical arrangement is crucial for thermoregulation:</p>
    <ul>
      <li>Human core body temperature is approximately $37^\circ\text{C}$ ($98.6^\circ\text{F}$), which is too high for viable sperm formation.</li>
      <li>The scrotum maintains a localized temperature roughly <strong>$2\text{ to }2.5^\circ\text{C}$ lower</strong> than abdominal core temperature, providing the optimal thermal environment required for <strong>spermatogenesis</strong>.</li>
    </ul>

    <h4>2. Dual Endocrine and Exocrine Functions of the Testes</h4>
    <ul>
      <li><strong>Exocrine Function:</strong> Continuous production of millions of microscopic male gametes (sperms) inside convoluted seminiferous tubules.</li>
      <li><strong>Endocrine Function:</strong> Interstitial Leydig cells produce the steroid hormone <strong>testosterone</strong>, which regulates spermatogenesis and maintains male secondary sexual characteristics.</li>
    </ul>

    <h4>3. Sperm Duct (Vas Deferens) Pathway</h4>
    <p>Mature sperms leave the coiled epididymis and travel upward through the <strong>vas deferens</strong> (sperm duct). The vas deferens loops over the urinary bladder, where it is joined by ducts from the seminal vesicles to form the ejaculatory duct, which merges into the urethra.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "The scrotum suspends testes outside the abdomen to maintain a temperature $2\text{ to }2.5^\circ\text{C}$ below body temperature.",
    "Testes perform two essential roles: sperm production (gametogenesis) and testosterone secretion (endocrine).",
    "The vas deferens conveys sperms from the epididymis towards the urethra."
  ],
  "keyNotes": "If the testes fail to descend into the scrotum during foetal development (cryptorchidism), viable sperm production is halted due to higher abdominal temperatures, resulting in male sterility.",
  "questions": [
    get_bank_q(33, "m14_q01"),
    get_bank_q(34, "m14_q02"),
    get_bank_q(73, "m14_q03"),
    get_bank_q(88, "m14_q04"),
    get_bank_q(92, "m14_q05"),
    {
      "id": "m14_q06",
      "question": "What is the optimal temperature difference maintained by the human scrotum compared to core body temperature?",
      "options": ["10°C higher", "2 to 2.5°C lower", "5°C higher", "Exact same temperature"],
      "answer": "2 to 2.5°C lower",
      "explanation": "The scrotum maintains testicular temperature 2 to 2.5°C lower than normal body temperature (37°C), which is essential for viable spermatogenesis."
    },
    {
      "id": "m14_q07",
      "question": "Which specific cells in the interstitial spaces of the testes synthesize and secrete testosterone?",
      "options": ["Sertoli cells", "Leydig (interstitial) cells", "Acinar cells", "Goblet cells"],
      "answer": "Leydig (interstitial) cells",
      "explanation": "Leydig cells located in the connective tissue spaces between seminiferous tubules synthesize testosterone under pituitary LH stimulation."
    },
    {
      "id": "m14_q08",
      "question": "What surgical procedure involves cutting and ligating the vas deferens to prevent sperm discharge during ejaculation?",
      "options": ["Tubectomy", "Vasectomy", "Oophorectomy", "Hysterectomy"],
      "answer": "Vasectomy",
      "explanation": "A vasectomy is the surgical ligation of the vas deferens, permanently preventing sperm from entering the ejaculatory duct."
    },
    {
      "id": "m14_q09",
      "question": "Where are mature sperms temporarily stored and granted final physiological motility prior to ejaculation?",
      "options": ["Urinary bladder", "Epididymis", "Prostate gland", "Kidney"],
      "answer": "Epididymis",
      "explanation": "The epididymis is the tightly coiled duct on the posterior surface of each testis where immature sperms mature, gain motility, and are stored."
    },
    {
      "id": "m14_q10",
      "question": "What would be the clinical consequence if both testes remained inside the pelvic cavity and failed to descend into the scrotum?",
      "options": [
        "Normal fertility but absence of testosterone",
        "Sterility due to impaired spermatogenesis caused by elevated temperature",
        "Overproduction of hyperactive sperms",
        "Development of ovaries instead of testes"
      ],
      "answer": "Sterility due to impaired spermatogenesis caused by elevated temperature",
      "explanation": "Elevated abdominal temperature impairs sperm production, leading to sterility, even though testosterone secretion may remain largely intact."
    }
  ]
}
modules_11_to_20.append(m14)

# ==========================================
# Module 15: Accessory Glands, Semen & Urethra
# ==========================================
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Accessory Sex Glands, Semen Composition & The Common Urethra",
  "tagline": "Seminal vesicles, prostate gland, alkaline fluid protection, and the dual-purpose male urethra.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Male Accessory Glands</h4>
    <p>Along the path of the vas deferens, secretions from two major accessory glands are discharged into the reproductive tract:</p>
    <ul>
      <li><strong>Seminal Vesicles (Paired):</strong> Secrete a thick, yellowish, alkaline fluid rich in <strong>fructose</strong> (which serves as an energy substrate for sperm flagellar motion), ascorbic acid, and prostaglandins.</li>
      <li><strong>Prostate Gland (Single, Chestnut-shaped):</strong> Encircles the neck of the bladder and urethra. It contributes a milky, slightly alkaline fluid containing citrate, calcium, and proteolytic enzymes that neutralize acidity.</li>
    </ul>

    <h4>2. Composition & Biological Significance of Semen</h4>
    <p><strong>Semen</strong> is a viscous fluid mixture consisting of sperm cells (~10% volume) suspended in glandular seminal plasma (~90% volume). This fluid serves three indispensable functions:</p>
    <ol>
      <li><strong>Fluid Transport Medium:</strong> Provides a liquid vehicle allowing sperms to swim towards the female oviduct.</li>
      <li><strong>Nutrition:</strong> Fructose from the seminal vesicles supplies carbohydrate fuel for continuous mitochondrial ATP generation in the sperm middle piece.</li>
      <li><strong>Acid Neutralization:</strong> The alkaline pH of seminal plasma protects fragile sperms by buffering the acidic environment of both the male urethra and the female vagina.</li>
    </ol>

    <h4>3. Dual-Function Urethra & The Penis</h4>
    <p>In human males, the <strong>urethra</strong> forms a single common conduit originating from the urinary bladder, traversing the prostate and the erectile shaft of the penis. It performs two distinct exocrine roles at different times: the excretion of urine and the expulsion of semen (ejaculation). Sphincter muscles at the bladder base prevent urine passage during ejaculation.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Accessory glands (prostate and seminal vesicles) contribute seminal plasma to form semen.",
    "Seminal fluid provides fructose for energy, a fluid medium for motility, and alkaline buffers against acid.",
    "The male urethra serves as a shared conduit for both urine and semen, though never simultaneously."
  ],
  "keyNotes": "Sperm motility is heavily dependent on ATP produced by mitochondria tightly wrapped around the sperm flagellum's middle piece, fueled by fructose in seminal fluid.",
  "questions": [
    get_bank_q(35, "m15_q01"),
    get_bank_q(36, "m15_q02"),
    get_bank_q(37, "m15_q03"),
    {
      "id": "m15_q04",
      "question": "Which specific sugar present in seminal vesicle fluid serves as the direct metabolic fuel for sperm motility?",
      "options": ["Glucose", "Fructose", "Sucrose", "Lactose"],
      "answer": "Fructose",
      "explanation": "Seminal vesicles secrete fructose, which sperm mitochondria metabolize via cellular respiration to generate ATP for flagellar propulsion."
    },
    {
      "id": "m15_q05",
      "question": "Why is the alkaline nature of prostatic and seminal secretions critical for sperm survival?",
      "options": [
        "It breaks down the sperm cell membrane",
        "It neutralizes the lethal acidity of the female vagina and male urethra",
        "It causes blood clotting inside the vas deferens",
        "It converts sperms into somatic cells"
      ],
      "answer": "It neutralizes the lethal acidity of the female vagina and male urethra",
      "explanation": "The vaginal environment is naturally acidic (pH ~4.0) to inhibit pathogens; alkaline seminal fluid neutralizes this acid to ensure sperm viability."
    },
    {
      "id": "m15_q06",
      "question": "In human males, which tube serves as a common passageway for discharging both urine and semen to the outside?",
      "options": ["Ureter", "Vas deferens", "Urethra", "Epididymis"],
      "answer": "Urethra",
      "explanation": "The male urethra extends from the urinary bladder through the penis, functioning as a shared conduit for both urination and ejaculation."
    },
    {
      "id": "m15_q07",
      "question": "Which portion of a mature human sperm cell contains a dense spiral of mitochondria producing motility energy?",
      "options": ["Head", "Acrosome", "Middle piece", "Tail end"],
      "answer": "Middle piece",
      "explanation": "The middle piece contains numerous mitochondria arranged spirally around the axial filament, generating ATP for the whiplike lashing of the tail."
    },
    {
      "id": "m15_q08",
      "question": "What is the specialized enzyme-filled cap at the anterior tip of the human sperm head called?",
      "options": ["Centrosome", "Acrosome", "Nucleolus", "Basal body"],
      "answer": "Acrosome",
      "explanation": "The acrosome is a lysosome-derived cap containing hydrolytic enzymes (hyaluronidase) that dissolve the protective coats of the ovum during fertilization."
    },
    {
      "id": "m15_q09",
      "question": "Which organ surrounds the base of the male urethra and can cause urinary difficulties in elderly men when enlarged?",
      "options": ["Seminal vesicle", "Prostate gland", "Bulbourethral gland", "Testis"],
      "answer": "Prostate gland",
      "explanation": "The prostate gland encircles the upper part of the urethra; benign prostatic hyperplasia (BPH) constricts the urethra, causing urination difficulties."
    },
    {
      "id": "m15_q10",
      "question": "Semen consists of approximately what proportion of fluid secretions from accessory glands compared to sperm volume?",
      "options": [
        "1% accessory fluids, 99% sperms",
        "50% accessory fluids, 50% sperms",
        "90% accessory fluids, 10% sperms",
        "0% fluids (it is entirely composed of dry cells)"
      ],
      "answer": "90% accessory fluids, 10% sperms",
      "explanation": "Seminal plasma produced by the seminal vesicles and prostate makes up roughly 90% of total semen volume, providing nutrition and transport for sperms."
    }
  ]
}
modules_11_to_20.append(m15)

# ==========================================
# Module 16: Female Reproductive System: Ovaries & Oviducts
# ==========================================
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Female Reproductive System: Ovaries, Fallopian Tubes & Uterus",
  "tagline": "Ovarian foliculogenesis, ciliated oviducts, and the muscular architecture of the uterus.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Ovaries (Primary Female Gonads)</h4>
    <p>A human female has a pair of almond-shaped <strong>ovaries</strong> situated in the lower abdominal pelvic cavity on either side of the uterus. The ovaries perform two fundamental functions:</p>
    <ul>
      <li><strong>Oogenesis:</strong> At birth, a female's ovaries already contain thousands of immature follicles. Starting at puberty, one mature egg (ovum) is released alternately every 28 days by one of the ovaries (a process called <strong>ovulation</strong>).</li>
      <li><strong>Endocrine Function:</strong> Ovarian cells synthesize the female steroid sex hormones <strong>estrogen</strong> (promotes follicular growth and secondary sexual traits) and <strong>progesterone</strong> (prepares and maintains the uterine lining for pregnancy).</li>
    </ul>

    <h4>2. Fallopian Tubes (Oviducts)</h4>
    <p>Each ovary is flanked by a muscular tube called the <strong>fallopian tube</strong> (or oviduct). The tube ends near the ovary in a funnel-shaped opening fringed with finger-like projections (fimbriae) that sweep up the ovulated egg.</p>
    <p>The interior lumen of the oviduct is lined with <strong>ciliated epithelial cells</strong> whose rhythmic, coordinated beating propels the non-motile ovum towards the uterus. The ampulla-isthmus junction of the fallopian tube is the precise biological site where <strong>fertilisation</strong> normally occurs.</p>

    <h4>3. The Uterus (Womb) & Birth Canal</h4>
    <p>The two oviducts unite into an elastic, hollow, inverted pear-shaped muscular organ called the <strong>uterus</strong> (womb):</p>
    <ul>
      <li><strong>Endometrium:</strong> The inner glandular and vascular mucous membrane that thickens every month to receive and nourish an implanted embryo.</li>
      <li><strong>Myometrium:</strong> A thick layer of smooth muscle capable of powerful rhythmic contractions during childbirth (parturition).</li>
      <li><strong>Cervix & Vagina:</strong> The uterus opens through a narrow neck called the <strong>cervix</strong> into the muscular canal known as the <strong>vagina</strong>, which receives the penis during copulation and serves as the birth canal.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Ovaries release one mature ovum each month and secrete the hormones estrogen and progesterone.",
    "Cilia lining the fallopian tubes move the ovum towards the uterus; fertilisation occurs within the oviduct.",
    "The uterus is an elastic muscular chamber lined by the vascular endometrium, designed to support foetal growth."
  ],
  "keyNotes": "Unlike males who produce hundreds of millions of sperms continuously throughout life, females are born with a finite reservoir of primary oocytes, of which only about 400 will ever mature and ovulate.",
  "questions": [
    get_bank_q(38, "m16_q01"),
    get_bank_q(74, "m16_q02"),
    get_bank_q(96, "m16_q03"),
    {
      "id": "m16_q04",
      "question": "What type of epithelial tissue lines the interior lumen of the fallopian tube to move the non-motile egg towards the uterus?",
      "options": ["Squamous epithelium", "Ciliated epithelium", "Stratified keratinized epithelium", "Cartilaginous tissue"],
      "answer": "Ciliated epithelium",
      "explanation": "Rhythmic wave-like beating of microscopic cilia on oviduct epithelial cells propels the egg down the fallopian tube towards the uterus."
    },
    {
      "id": "m16_q05",
      "question": "What is the normal shape and structural nature of the human uterus (womb)?",
      "options": [
        "A rigid spherical bone cage",
        "A hollow, inverted pear-shaped, highly elastic muscular organ",
        "A thin, membranous straight tube",
        "A multi-chambered sac filled with air"
      ],
      "answer": "A hollow, inverted pear-shaped, highly elastic muscular organ",
      "explanation": "The uterus is an inverted pear-shaped muscular organ with thick smooth-muscle walls capable of tremendous expansion during pregnancy."
    },
    {
      "id": "m16_q06",
      "question": "What is the narrow lower neck of the uterus that connects into the vagina called?",
      "options": ["Cervix", "Clitoris", "Fallopian funnel", "Perimetrium"],
      "answer": "Cervix",
      "explanation": "The cervix is the narrow muscular neck at the bottom of the uterus opening into the vagina."
    },
    {
      "id": "m16_q07",
      "question": "Which ovarian hormone is primarily responsible for vascularizing and maintaining the uterine endometrium during the post-ovulatory phase?",
      "options": ["Adrenaline", "Progesterone", "Thyroxine", "Insulin"],
      "answer": "Progesterone",
      "explanation": "Progesterone secreted by the corpus luteum stimulates glandular growth and vascular development of the uterine endometrium, preparing it for implantation."
    },
    {
      "id": "m16_q08",
      "question": "What constitutes the 'birth canal' through which a baby passes during natural delivery?",
      "options": ["Ureter and urethra", "Cervix and vagina", "Oviduct and ovary", "Abdominal rectus and bladder"],
      "answer": "Cervix and vagina",
      "explanation": "The cervical canal together with the muscular vagina constitutes the birth canal."
    },
    {
      "id": "m16_q09",
      "question": "On average, how many mature ova are normally released by the ovaries during each human menstrual cycle?",
      "options": ["1 egg", "100 eggs", "Thousands of eggs", "Millions of eggs"],
      "answer": "1 egg",
      "explanation": "In human females, typically only one egg is released per month alternately by one of the ovaries during ovulation."
    },
    {
      "id": "m16_q10",
      "question": "Which finger-like projections at the ovarian end of the fallopian tube help capture the ovulated egg?",
      "options": ["Villi", "Fimbriae", "Papillae", "Flagella"],
      "answer": "Fimbriae",
      "explanation": "Fimbriae are finger-like ciliated fringes at the distal end of the fallopian tube that sweep over the ovary to catch the released ovum."
    }
  ]
}
modules_11_to_20.append(m16)

# ==========================================
# Module 17: Ovulation, Fertilisation & Cleavage
# ==========================================
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Ovulation, Fertilisation in the Fallopian Tube & Embryonic Cleavage",
  "tagline": "Sperm transit, acrosomal penetration, syngamy in the oviduct, and mitotic cleavage to the blastocyst.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Ovulation & Ovum Viability</h4>
    <p>Midway through the 28-day menstrual cycle (around Day 14), an LH surge triggers the rupture of a mature Graafian follicle, discharging a viable secondary oocyte into the pelvic peritoneal space, from where it is swiftly drawn into the fallopian tube. An ovulated egg remains viable for fertilisation for roughly <strong>24 to 48 hours</strong>.</p>

    <h4>2. Sperm Transit & The Site of Fertilisation</h4>
    <p>During copulation (coitus), several hundred million sperms are deposited into the vagina. Swimming upwards via flagellar lashing through the cervix and across the uterus, a few thousand sperms reach the fallopian tubes. <strong>Fertilisation takes place in the fallopian tube (oviduct)</strong>, specifically in the ampullary region.</p>

    <h4>3. Acrosomal Reaction & Syngamy</h4>
    <p>When a sperm encounters the ovum:</p>
    <ul>
      <li>Its <strong>acrosome</strong> releases hydrolytic enzymes (including hyaluronidase and acrosin) that digest the corona radiata and zona pellucida surrounding the egg.</li>
      <li>Upon contact between the first sperm head and the egg plasma membrane, a rapid electrical depolarization and cortical reaction occur. This alters the zona pellucida, <strong>blocking polyspermy</strong> (entry of additional sperms) to preserve diploidy.</li>
      <li>The sperm nucleus enters the ovum cytoplasm, and the haploid male pronucleus fuses with the haploid female pronucleus (<strong>syngamy</strong>), forming a single diploid ($2n = 46\text{ chromosomes}$) <strong>zygote</strong>.</li>
    </ul>

    <h4>4. Early Cleavage & Journey to the Uterus</h4>
    <p>As the zygote is propelled slowly along the oviduct by ciliary action and peristaltic contractions, it undergoes rapid mitotic divisions known as <strong>cleavage</strong>: $1 \rightarrow 2 \rightarrow 4 \rightarrow 8 \rightarrow 16\text{ cells}$ (morula), eventually forming a hollow ball of cells called the <strong>blastocyst</strong> over 4 to 6 days.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Fertilisation normally occurs in the fallopian tube (oviduct), not in the uterus or vagina.",
    "The acrosomal reaction enables sperm penetration, and the cortical block prevents polyspermy.",
    "The single-celled diploid zygote divides mitotically (cleavage) into a hollow blastocyst while travelling to the uterus."
  ],
  "keyNotes": "Fertilisation can occur only if both sperm and ovum are transported simultaneously to the ampullary-isthmic junction of the fallopian tube within the narrow fertile window.",
  "questions": [
    get_bank_q(39, "m17_q01"),
    get_bank_q(99, "m17_q02"),
    get_bank_q(100, "m17_q03"),
    {
      "id": "m17_q04",
      "question": "Where does fertilisation of the human egg by a sperm normally occur under physiological conditions?",
      "options": ["Vagina", "Uterus", "Fallopian tube (oviduct)", "Ovary"],
      "answer": "Fallopian tube (oviduct)",
      "explanation": "Fertilisation between the sperm and ovum takes place within the ampullary region of the fallopian tube (oviduct)."
    },
    {
      "id": "m17_q05",
      "question": "What prevents multiple sperms from fertilising a single human egg (polyspermy)?",
      "options": [
        "Sperms run out of energy after one touches the egg",
        "A biochemical cortical reaction rapidly hardens the zona pellucida upon entry of the first sperm",
        "The uterus expels all other sperms into the bloodstream",
        "The egg's mitochondria destroy excess sperms"
      ],
      "answer": "A biochemical cortical reaction rapidly hardens the zona pellucida upon entry of the first sperm",
      "explanation": "Contact with the first sperm triggers cortical granule exocytosis, modifying the zona pellucida and permanently blocking polyspermy."
    },
    {
      "id": "m17_q06",
      "question": "How long does an ovulated human egg generally remain viable and capable of being fertilised in the fallopian tube?",
      "options": ["2 hours", "24 to 48 hours", "14 days", "28 days"],
      "answer": "24 to 48 hours",
      "explanation": "A human ovum remains viable for fertilisation for about 24 to 48 hours after ovulation."
    },
    {
      "id": "m17_q07",
      "question": "What is the series of rapid mitotic cell divisions that converts the single-celled zygote into a multicellular embryo called?",
      "options": ["Meiosis", "Cleavage", "Metamorphosis", "Budding"],
      "answer": "Cleavage",
      "explanation": "Cleavage refers to the rapid succession of mitotic divisions where cell number increases without overall growth in total embryonic mass."
    },
    {
      "id": "m17_q08",
      "question": "What is the hollow sphere of embryonic cells called that reaches the uterus ready for implantation?",
      "options": ["Zygote", "Blastocyst (Blastula)", "Gastrula", "Gamete"],
      "answer": "Blastocyst (Blastula)",
      "explanation": "Around 5 to 6 days after fertilisation, the dividing embryo reaches the stage of a hollow fluid-filled ball called a blastocyst."
    },
    {
      "id": "m17_q09",
      "question": "How many total chromosomes are restored in the nucleus of a normal human zygote upon syngamy?",
      "options": ["23 chromosomes", "46 chromosomes (23 pairs)", "92 chromosomes", "12 chromosomes"],
      "answer": "46 chromosomes (23 pairs)",
      "explanation": "Syngamy combines 23 maternal chromosomes from the ovum and 23 paternal chromosomes from the sperm, establishing the diploid human complement of 46 chromosomes."
    },
    {
      "id": "m17_q10",
      "question": "If a woman ovulates on Day 14 of her 28-day cycle, during which window is intercourse most likely to result in pregnancy?",
      "options": ["Days 1 to 5", "Days 11 to 16", "Days 22 to 26", "Days 27 to 28"],
      "answer": "Days 11 to 16",
      "explanation": "Because sperms can survive in the female tract for up to 3 days and the egg survives 24-48 hours, Days 11-16 represent the peak fertile window."
    }
  ]
}
modules_11_to_20.append(m17)

# ==========================================
# Module 18: Implantation, Placenta & Gestation
# ==========================================
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Implantation, The Placenta & Human Gestation",
  "tagline": "Endometrial embedding, the disc-shaped placenta, nutrient exchange, and foetal development.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Implantation in the Uterine Wall</h4>
    <p>Approximately 6 to 9 days after fertilisation, the developing blastocyst reaches the uterus. Trophoblast cells on its outer perimeter secrete proteolytic enzymes that digest a small pocket in the soft, spongy, vascularized <strong>endometrium</strong>. The embryo sinks into the tissue and becomes completely embedded—a vital event termed <strong>implantation</strong>. Implantation confirms the biological establishment of pregnancy.</p>

    <h4>2. The Placenta: Structure & Adaptations</h4>
    <p>Following implantation, a specialized intimate physiological connection develops between the maternal body and the developing embryo: the <strong>placenta</strong>. Structurally:</p>
    <ul>
      <li>It is a <strong>disc-shaped vascular organ</strong> embedded firmly in the uterine wall.</li>
      <li>On the embryo's side, it contains millions of branching, microscopic <strong>chorionic villi</strong> that vastly expand surface area for exchange.</li>
      <li>On the mother's side, maternal tissue forms large open blood spaces (lacunae) that surround and bathe the villi in maternal arterial blood.</li>
    </ul>

    <h4>3. Essential Transport Functions of the Placenta</h4>
    <ul>
      <li><strong>Nutrition:</strong> Glucose, amino acids, fatty acids, vitamins, and minerals diffuse across the thin placental barrier from maternal blood into foetal blood.</li>
      <li><strong>Respiration:</strong> Dissolved oxygen ($O_2$) diffuses from maternal haemoglobin across to foetal haemoglobin, while foetal carbon dioxide ($CO_2$) diffuses into the maternal circulation for elimination by the mother's lungs.</li>
      <li><strong>Excretion:</strong> Metabolic waste products generated by the growing foetus (such as urea and creatinine) diffuse across the placenta into maternal blood for filtration by the mother's kidneys.</li>
      <li><strong>Endocrine Function:</strong> The placenta secretes hormones including human chorionic gonadotropin (hCG), estrogen, and progesterone to sustain pregnancy.</li>
    </ul>

    <h4>4. Umbilical Cord & Gestation Period</h4>
    <p>The embryo is anchored to the placenta via the <strong>umbilical cord</strong>, which contains umbilical arteries and an umbilical vein carrying blood between foetus and placenta. The total duration of human pregnancy—from fertilisation to childbirth—is the <strong>gestation period</strong>, which lasts approximately <strong>9 months (roughly 280 days or 40 weeks)</strong> from the last menstrual period.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Implantation is the embedding of the blastocyst into the thickened, vascular uterine endometrium.",
    "The placenta is a disc-shaped organ with chorionic villi providing a vast surface area for nutrient and waste exchange.",
    "The human gestation period lasts approximately 9 months (~280 days), concluding with childbirth (parturition)."
  ],
  "keyNotes": "Maternal and foetal blood systems do not mix directly; exchange occurs strictly by diffusion across the thin cellular membrane of the placental villi, protecting the foetus from maternal blood pressure and incompatibilities.",
  "questions": [
    get_bank_q(40, "m18_q01"),
    get_bank_q(41, "m18_q02"),
    get_bank_q(42, "m18_q03"),
    get_bank_q(94, "m18_q04"),
    {
      "id": "m18_q05",
      "question": "What is the structural adaptation on the embryo's side of the placenta that maximizes surface area for nutrient diffusion?",
      "options": ["Ciliated flagella", "Microscopic chorionic villi", "Smooth keratinized scales", "Calcified plates"],
      "answer": "Microscopic chorionic villi",
      "explanation": "Chorionic villi provide an immense surface area for the diffusion of glucose, amino acids, and oxygen from maternal blood spaces to the embryo."
    },
    {
      "id": "m18_q06",
      "question": "Which flexible vascular structure connects the developing foetus directly to the placenta?",
      "options": ["Fallopian tube", "Umbilical cord", "Cervix", "Amniotic duct"],
      "answer": "Umbilical cord",
      "explanation": "The umbilical cord contains blood vessels that transport blood between the foetus and the placenta."
    },
    {
      "id": "m18_q07",
      "question": "Which of the following metabolic waste substances produced by the foetus diffuses across the placenta into maternal blood for excretion?",
      "options": ["Glucose", "Urea", "Glycogen", "Bile salts"],
      "answer": "Urea",
      "explanation": "Urea and carbon dioxide generated by the foetus diffuse across the placenta into the mother's circulation for removal by her kidneys and lungs."
    },
    {
      "id": "m18_q08",
      "question": "Why do maternal blood and foetal blood normally NOT mix directly in the placenta?",
      "options": [
        "Maternal blood has no cells",
        "They are separated by a thin placental membrane barrier across which substances diffuse",
        "Foetal blood flows backward into the uterus",
        "Maternal blood is solid inside the placenta"
      ],
      "answer": "They are separated by a thin placental membrane barrier across which substances diffuse",
      "explanation": "A thin cellular placental barrier prevents direct blood mixing, avoiding lethal immune rejection and protecting delicate foetal capillaries from high maternal blood pressure."
    },
    {
      "id": "m18_q09",
      "question": "What is the average duration of the human gestation period from conception to birth?",
      "options": ["3 months (~90 days)", "6 months (~180 days)", "9 months (~280 days)", "12 months (~365 days)"],
      "answer": "9 months (~280 days)",
      "explanation": "Human gestation spans approximately 9 months, or roughly 280 days (40 weeks), culminating in labour and birth."
    },
    {
      "id": "m18_q10",
      "question": "The powerful rhythmic contractions of which uterine layer drive the expulsion of the baby during childbirth (parturition)?",
      "options": ["Endometrium", "Myometrium (muscular wall)", "Peritoneum", "Placental villi"],
      "answer": "Myometrium (muscular wall)",
      "explanation": "The thick smooth-muscle wall of the uterus (myometrium) contracts rhythmically under the influence of oxytocin to deliver the baby."
    }
  ]
}
modules_11_to_20.append(m18)

# ==========================================
# Module 19: The Menstrual Cycle
# ==========================================
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "The Menstrual Cycle: Endometrial Preparation & Menstruation",
  "tagline": "Cyclic uterine preparation, luteal breakdown, and the physiological process of menstrual bleeding.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The 28-Day Biological Cycle</h4>
    <p>Starting at puberty (menarche) and concluding at menopause (typically around age 45-50), the human female reproductive system undergoes a regular monthly cycle of hormonal and histological modifications known as the <strong>menstrual cycle</strong>. Its average duration is <strong>28 days</strong>.</p>

    <h4>2. Uterine Preparation for Anticipated Pregnancy</h4>
    <p>Every month, the female body prepares systematically for the possibility of fertilisation:</p>
    <ul>
      <li>Under the influence of rising <strong>estrogen</strong> secreted by developing ovarian follicles, the uterine lining (endometrium) thickens, becomes spongy, and proliferates with a dense network of capillary blood vessels.</li>
      <li>Following ovulation (around Day 14), the ruptured follicle in the ovary transforms into a temporary yellow glandular body called the <strong>corpus luteum</strong>, which pours out substantial amounts of <strong>progesterone</strong> to further stabilize and maintain the rich endometrium.</li>
    </ul>

    <h4>3. What Happens When the Egg is NOT Fertilised?</h4>
    <p>If the released ovum is not fertilised by a sperm within its 24-48 hour viability window, the biological machinery shifts:</p>
    <ol>
      <li>The unfertilised egg dies and degenerates.</li>
      <li>Without pregnancy signals (such as hCG), the <strong>corpus luteum degenerates</strong> into fibrous scar tissue.</li>
      <li>Blood levels of progesterone and estrogen drop drastically.</li>
      <li>Deprived of hormonal support, the thick, vascular uterine endometrium can no longer be sustained. Its capillaries constrict, break down, and the spongy lining sloughs off.</li>
    </ol>

    <h4>4. Menstruation (The Menstrual Flow)</h4>
    <p>The detached pieces of endometrial tissue, unfertilised ovum, mucous, and blood are discharged through the cervix and out through the vagina. This process is called <strong>menstruation</strong>:</p>
    <ul>
      <li>The bleeding phase typically lasts between <strong>3 to 5 days</strong> (sometimes up to 7 days).</li>
      <li>Day 1 of bleeding marks the official start (Day 1) of a new menstrual cycle, during which new ovarian follicles begin maturing for the next cycle.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "The menstrual cycle repeats roughly every 28 days from puberty (menarche) until menopause (~45-50 years).",
    "If fertilisation fails, the corpus luteum degenerates, progesterone drops, and the uterine lining sloughs off.",
    "Menstrual discharge consists of discarded endometrial lining, blood, mucus, and the unfertilised egg, lasting 3 to 5 days."
  ],
  "keyNotes": "The temporary cessation of the menstrual cycle is usually the earliest physiological indicator of pregnancy in a healthy, sexually active woman.",
  "questions": [
    get_bank_q(43, "m19_q01"),
    get_bank_q(44, "m19_q02"),
    get_bank_q(81, "m19_q03"),
    get_bank_q(77, "m19_q04"),
    {
      "id": "m19_q05",
      "question": "What is the typical average duration of the human menstrual cycle?",
      "options": ["7 days", "14 days", "28 days", "60 days"],
      "answer": "28 days",
      "explanation": "The human menstrual cycle typically repeats on an average 28-day cycle, although normal cycles can vary between 21 and 35 days."
    },
    {
      "id": "m19_q06",
      "question": "The permanent cessation of menstrual cycles and reproductive fertility in women around age 45-50 is termed:",
      "options": ["Menarche", "Menopause", "Amenorrhea", "Ovulation"],
      "answer": "Menopause",
      "explanation": "Menopause marks the permanent physiological end of ovarian follicular activity and menstrual periods in women, usually around age 45-50."
    },
    {
      "id": "m19_q07",
      "question": "What sudden hormonal change triggers the breakdown and shedding of the uterine endometrium during menstruation?",
      "options": [
        "Sharp drop in blood levels of progesterone and estrogen",
        "Massive spike in adrenaline",
        "Sudden increase in testosterone",
        "Excess secretion of growth hormone"
      ],
      "answer": "Sharp drop in blood levels of progesterone and estrogen",
      "explanation": "Degeneration of the corpus luteum causes a steep drop in progesterone and estrogen levels, starving the endometrium of hormonal support and triggering its sloughing."
    },
    {
      "id": "m19_q08",
      "question": "How long does the menstrual bleeding phase typically last in a healthy adolescent girl?",
      "options": ["1 hour", "3 to 5 days", "14 days", "28 days"],
      "answer": "3 to 5 days",
      "explanation": "The menstrual flow phase usually lasts between 3 to 5 days, during which the vascular lining is expelled."
    },
    {
      "id": "m19_q09",
      "question": "What is the primary biological reason the uterine lining thickens and becomes richly vascularized each month?",
      "options": [
        "To store excess water for kidney filtration",
        "To receive, nourish, and support a potentially implanted blastocyst",
        "To cool the internal temperature of the abdominal pelvis",
        "To produce antibodies against incoming sperms"
      ],
      "answer": "To receive, nourish, and support a potentially implanted blastocyst",
      "explanation": "The endometrium proliferates to provide an optimal nutrient-rich bed for embryonic implantation in anticipation of pregnancy."
    },
    {
      "id": "m19_q10",
      "question": "Why is the absence of a scheduled menstrual period often the first noticeable sign of pregnancy?",
      "options": [
        "The ovaries dissolve permanently upon conception",
        "The implanted blastocyst produces hCG, maintaining the corpus luteum and high progesterone levels that preserve the endometrium",
        "Blood is redirected entirely to the mother's brain",
        "The cervix closes with solid bone"
      ],
      "answer": "The implanted blastocyst produces hCG, maintaining the corpus luteum and high progesterone levels that preserve the endometrium",
      "explanation": "After implantation, embryonic hCG keeps the corpus luteum active to continuously secrete progesterone, preventing endometrial breakdown and menstruation."
    }
  ]
}
modules_11_to_20.append(m19)

# ==========================================
# Module 20: Reproductive Health & Contraception
# ==========================================
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Reproductive Health: STDs, Contraceptive Strategies & Social Responsibility",
  "tagline": "Bacterial vs viral STDs, mechanical/chemical/surgical contraception, and ethical considerations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Sexually Transmitted Diseases (STDs / STIs)</h4>
    <p>Sexual intercourse involves intimate physical contact and exchange of body fluids, creating potential transmission routes for infectious pathogens:</p>
    <ul>
      <li><strong>Bacterial STDs:</strong> Caused by bacterial pathogens—notably <strong>Gonorrhoea</strong> (<em>Neisseria gonorrhoeae</em>) and <strong>Syphilis</strong> (<em>Treponema pallidum</em>). These cause painful urination, genital sores, and discharge, but can generally be cured if treated promptly with targeted antibiotics.</li>
      <li><strong>Viral STDs:</strong> Caused by viruses—such as <strong>Genital Warts</strong> (Human Papillomavirus / HPV) and <strong>HIV-AIDS</strong> (Human Immunodeficiency Virus). Viral STDs cannot be eradicated by antibiotics and often persist as chronic or life-threatening infections damaging the immune system.</li>
    </ul>

    <h4>2. Methods of Contraception (Family Planning)</h4>
    <p>Contraception comprises techniques and devices designed to prevent unwanted pregnancy:</p>
    <ul>
      <li><strong>1. Mechanical Barrier Methods:</strong> Condoms (worn over the penis) or diaphragms/caps (inserted into the female vagina). Condoms prevent sperm from entering the female genital tract and are the <strong>only contraceptive method that provides dual protection</strong> against both pregnancy and STDs/HIV.</li>
      <li><strong>2. Chemical / Hormonal Methods:</strong> Oral contraceptive pills contain synthetic estrogen and progesterone analogs that alter hormonal feedback, preventing ovulation. (Side effects: hormonal imbalances, nausea, weight fluctuations).</li>
      <li><strong>3. Intrauterine Devices (IUDs):</strong> Small devices like <strong>Copper-T</strong> inserted into the uterus by a trained medical professional. Copper ions released suppress sperm motility and fertilising capacity, while preventing implantation.</li>
      <li><strong>4. Surgical Methods (Sterilization):</strong>
        <ul>
          <li><strong>Vasectomy:</strong> In males, a small portion of both vasa deferentia is cut and ligated, preventing sperm from entering semen.</li>
          <li><strong>Tubectomy:</strong> In females, both fallopian tubes are cut and ligated, blocking egg transit and sperm passage.</li>
          <li>Both methods provide near 100% permanent birth control without altering sexual desire or hormone secretion, but are difficult to reverse.</li>
        </ul>
      </li>
    </ul>

    <h4>3. Social Issues: Female Foeticide & The Child Sex Ratio</h4>
    <p>The illegal misuse of prenatal diagnostic ultrasound techniques to determine the sex of the foetus has led to indiscriminate sex-selective abortion of female foetuses (<strong>female foeticide</strong>). This has skewed the child sex ratio in many regions. Consequently, prenatal sex determination is strictly prohibited and made a punishable criminal offence by law (PCPNDT Act).</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "STDs can be bacterial (Gonorrhoea, Syphilis - treatable with antibiotics) or viral (Warts, HIV-AIDS - chronic).",
    "Condoms provide unique dual protection: preventing pregnancy and shielding against transmission of STDs/HIV.",
    "Surgical sterilization (vasectomy in males, tubectomy in females) is highly effective and irreversible.",
    "Prenatal sex determination is legally banned to prevent female foeticide and protect the sex ratio."
  ],
  "keyNotes": "Contraceptive pills and Copper-T devices prevent conception but offer zero physical protection against sexually transmitted infections like HIV.",
  "questions": [
    get_bank_q(45, "m20_q01"),
    get_bank_q(46, "m20_q02"),
    get_bank_q(47, "m20_q03"),
    get_bank_q(48, "m20_q04"),
    get_bank_q(49, "m20_q05"),
    get_bank_q(50, "m20_q06"),
    get_bank_q(79, "m20_q07"),
    get_bank_q(82, "m20_q08"),
    get_bank_q(97, "m20_q09"),
    {
      "id": "m20_q10",
      "question": "Why has the government legally banned prenatal sex determination via ultrasound?",
      "options": [
        "Ultrasound waves damage foetal hearing permanently",
        "To prevent sex-selective female foeticide and maintain a balanced demographic sex ratio",
        "It consumes too much institute electrical power",
        "To encourage large family sizes"
      ],
      "answer": "To prevent sex-selective female foeticide and maintain a balanced demographic sex ratio",
      "explanation": "Prenatal sex determination was banned under the PCPNDT Act to curb female foeticide and protect the girl child, ensuring a healthy gender balance in society."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch7_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 7 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
