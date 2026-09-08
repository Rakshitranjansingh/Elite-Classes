# -*- coding: utf-8 -*-
"""
CH10 Part 1: Modules 1 to 10
The Human Eye and the Colourful World (Class 10 Science)
"""
import json

with open('scratch/ch10_bank_questions.json', 'r', encoding='utf-8') as f:
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
# Module 1: Anatomy of the Human Eye
# ==========================================
m01 = {
  "id": "m01", "moduleNumber": 1,
  "title": "Anatomy of the Human Eye: Cornea, Iris, Pupil & Crystalline Lens",
  "tagline": "The biological optical system, refractory components, and aperture regulation by the iris.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Human Eye as an Optical Instrument</h4>
    <p>The human eye is an extraordinary biological optical camera that focuses incoming light onto a light-sensitive screen to produce vision. The eye operates inside a nearly spherical eyeball with an approximate diameter of <strong>$2.3\text{ cm}$</strong>.</p>

    <h4>2. Key Structural Components</h4>
    <ul>
      <li><strong>Cornea:</strong> The transparent, dome-shaped anterior bulge of the eye. Light enters the eye through the cornea. Because of the large refractive index difference between air ($n \approx 1.0$) and the cornea ($n \approx 1.376$), <strong>most of the refraction (nearly $75\text{--}80\%$)</strong> occurs at the outer curved surface of the cornea.</li>
      <li><strong>Iris:</strong> A dark, muscular diaphragm located immediately behind the cornea. It controls the diameter and size of the pupil and contains the pigments that give a person their characteristic eye colour (brown, black, blue, green).</li>
      <li><strong>Pupil:</strong> The central variable aperture regulated by the iris. In bright daylight, the iris contracts the pupil to limit light entry and protect the retina; in dim light, the iris dilates the pupil to allow maximum illumination.</li>
      <li><strong>Crystalline Lens:</strong> A flexible, transparent, fibrous jelly-like double convex lens composed of living proteins. It provides the fine, adjustable refractive tuning necessary to focus objects at varying distances sharply onto the retina.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "The human eyeball is roughly spherical with a diameter of about $2.3\\text{ cm}$.",
    "Most of the refraction of light occurs at the outer surface of the transparent cornea.",
    "The iris regulates the size of the pupil to control the amount of light entering the eye."
  ],
  "keyNotes": [
    "The crystalline lens does not provide the bulk of the eye's refractive power; its crucial function is dynamic adjustment (fine tuning) of focal length for accommodation."
  ],
  "questions": [
    get_bank_q(1, "m01_q01"),
    get_bank_q(2, "m01_q02"),
    get_bank_q(3, "m01_q03"),
    get_bank_q(4, "m01_q04"),
    get_bank_q(21, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "What is the approximate diameter of a normal adult human eyeball?",
      "options": ["1.0 cm", "2.3 cm", "5.0 cm", "0.5 cm"],
      "answer": "2.3 cm",
      "explanation": "The adult human eyeball is an approximately spherical structure with a diameter of roughly 2.3 cm."
    },
    {
      "id": "m01_q07",
      "question": "Where does the MAXIMUM refraction of light entering the eye occur?",
      "options": [
        "At the outer surface of the transparent cornea",
        "At the posterior surface of the crystalline lens",
        "Inside the vitreous humor",
        "On the surface of the retina"
      ],
      "answer": "At the outer surface of the transparent cornea",
      "explanation": "The greatest change in refractive index occurs at the air-cornea interface, where nearly 75-80% of total refraction takes place."
    },
    {
      "id": "m01_q08",
      "question": "Which muscular diaphragm regulates the size of the pupil and gives the human eye its distinct colour?",
      "options": ["Cornea", "Iris", "Ciliary muscle", "Sclera"],
      "answer": "Iris",
      "explanation": "The iris is the pigmented muscular diaphragm behind the cornea that regulates the pupil aperture and determines eye colour."
    },
    {
      "id": "m01_q09",
      "question": "Why does a person walking from bright outdoor sunlight into a dimly lit cinema hall struggle to see clearly for a few moments?",
      "options": [
        "The crystalline lens temporarily hardens into solid glass",
        "The pupil was constricted in bright light and requires time for the iris to dilate to admit more light",
        "The retina stops functioning in the dark",
        "The cornea changes colour to yellow"
      ],
      "answer": "The pupil was constricted in bright light and requires time for the iris to dilate to admit more light",
      "explanation": "In bright light, the pupil is constricted; entering dim light requires a short delay for the iris muscles to dilate the pupil and rods to adapt."
    },
    {
      "id": "m01_q10",
      "question": "What is the physical composition and nature of the crystalline lens of the human eye?",
      "options": [
        "A rigid, hollow glass sphere filled with air",
        "A flexible, transparent, fibrous jelly-like material composed of protein fibres",
        "A flat crystal of quartz",
        "A metallic reflector"
      ],
      "answer": "A flexible, transparent, fibrous jelly-like material composed of protein fibres",
      "explanation": "The human crystalline lens is made of transparent, flexible, fibrous proteinaceous layers whose curvature can be altered by ciliary muscles."
    }
  ]
}
modules_1_to_10.append(m01)

# ==========================================
# Module 2: Photoreceptors & Signal Transmission
# ==========================================
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Retinal Photoreceptors: Rods vs Cones, Optic Nerve & Blind Spot",
  "tagline": "Rods for dim-light scotopic vision, cones for photopic colour vision, and electrical transmission.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Retina: The Neural Screen of the Eye</h4>
    <p>The <strong>retina</strong> is a delicate, semi-transparent inner membrane lining the back of the eye. It is densely packed with millions of specialized, light-sensitive sensory cells called <strong>photoreceptors</strong>. The crystalline lens casts a <strong>real and inverted image</strong> of the external world onto the retina.</p>

    <h4>2. Rods vs Cones (Photoreceptor Cells)</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Feature</th><th>Rods (Cylindrical)</th><th>Cones (Conical)</th></tr></thead>
      <tbody>
        <tr><td><strong>Lighting Condition</strong></td><td>Dim light / Twilight (Scotopic vision)</td><td>Bright light / Daylight (Photopic vision)</td></tr>
        <tr><td><strong>Colour Perception</strong></td><td>No colour (Monochromatic gray scale)</td><td>High-acuity colour vision (Red, Green, Blue)</td></tr>
        <tr><td><strong>Photopigment</strong></td><td>Rhodopsin (Visual purple, Vitamin A dependent)</td><td>Iodopsins / Photopsins</td></tr>
        <tr><td><strong>Abundance & Location</strong></td><td>~120 million, concentrated in retinal periphery</td><td>~6 million, concentrated at central fovea (macula)</td></tr>
      </tbody>
    </table>

    <h4>3. Signal Generation & The Optic Nerve</h4>
    <p>When light strikes the photoreceptors, photochemical reactions generate electrical impulses (action potentials). These signals are relayed via bipolar and ganglion cells to the <strong>optic nerve</strong>, which transmits them to the visual cortex of the brain. The brain flips the inverted signals right-side up, constructing conscious upright perception.</p>

    <h4>4. The Blind Spot</h4>
    <p>The circular region on the retina where the optic nerve fibers exit the eyeball to enter the brain contains <strong>zero rods and zero cones</strong>. Any image falling onto this anatomical point cannot be detected, and is therefore termed the <strong>blind spot</strong>.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "The retina forms the neural screen containing photoreceptors; images cast on it are real and inverted.",
    "Rods operate in dim light without colour perception; Cones operate in bright light and perceive colours.",
    "The blind spot is the region where the optic nerve leaves the retina, containing zero photoreceptor cells."
  ],
  "keyNotes": [
    "Nocturnal animals such as owls have retinas packed almost entirely with rods and very few cones, giving them exceptional night vision but very poor colour discrimination."
  ],
  "questions": [
    get_bank_q(5, "m02_q01"),
    get_bank_q(6, "m02_q02"),
    get_bank_q(22, "m02_q03"),
    get_bank_q(51, "m02_q04"),
    {
      "id": "m02_q05",
      "question": "What type of image is naturally formed by the human eye lens system on the retina?",
      "options": ["Virtual and erect", "Real and inverted", "Virtual and magnified", "Real and erect"],
      "answer": "Real and inverted",
      "explanation": "Because the eye uses a converging convex lens system, it focuses a real and inverted image on the retinal screen."
    },
    {
      "id": "m02_q06",
      "question": "Which light-sensitive cells in the human retina are specialized for sharp colour vision in daylight?",
      "options": ["Rods", "Cones", "Ganglion cells", "Ciliary cells"],
      "answer": "Cones",
      "explanation": "Cone cells respond to bright light and contain pigments sensitive to red, green, and blue wavelengths, enabling colour vision."
    },
    {
      "id": "m02_q07",
      "question": "Why is nocturnal vision in an owl exceptionally sensitive in the dark?",
      "options": [
        "Its cornea emits green light",
        "Its retina contains a vast majority of highly sensitive rod cells and very few cones",
        "It lacks an optic nerve",
        "Its pupils never dilate"
      ],
      "answer": "Its retina contains a vast majority of highly sensitive rod cells and very few cones",
      "explanation": "Rod cells have high sensitivity to dim light, allowing nocturnal animals to detect minimal photons at night."
    },
    {
      "id": "m02_q08",
      "question": "Why is a specific region on the retina called the 'Blind Spot'?",
      "options": [
        "It is scarred by intense sunlight",
        "It lacks both rods and cones because the optic nerve exits the eyeball at that exact site",
        "Blood vessels completely freeze at that spot",
        "It reflects 100% of light back out"
      ],
      "answer": "It lacks both rods and cones because the optic nerve exits the eyeball at that exact site",
      "explanation": "At the point where the optic nerve leaves the eye, there are no photoreceptors, making that region completely insensitive to light."
    },
    {
      "id": "m02_q09",
      "question": "Which nutrient is essential for the synthesis of the visual purple pigment (rhodopsin) in rod cells to prevent night blindness?",
      "options": ["Vitamin C", "Vitamin A", "Vitamin D", "Iron"],
      "answer": "Vitamin A",
      "explanation": "Retinal (derived from Vitamin A) is the chromophore of rhodopsin; its deficiency impairs rod function, causing nyctalopia (night blindness)."
    },
    {
      "id": "m02_q10",
      "question": "How does the human brain process the inverted image cast on the retina?",
      "options": [
        "It flips the electrical signals so we perceive objects right-side up",
        "We always see the world upside-down",
        "It reflects the light out through the pupil",
        "It stores inverted images in the ear"
      ],
      "answer": "It flips the electrical signals so we perceive objects right-side up",
      "explanation": "The visual cortex in the occipital lobe interprets the neural electrical impulses and inverts the mental image so we perceive objects right-side up."
    }
  ]
}
modules_1_to_10.append(m02)

# ==========================================
# Module 3: Power of Accommodation
# ==========================================
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Power of Accommodation: Ciliary Muscles & Dynamic Focal Adjustment",
  "tagline": "How ciliary muscles contract and relax to alter lens curvature for near and distant vision.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Power of Accommodation?</h4>
    <p>Because the distance between the eye lens and the retina is physically fixed by the eyeball geometry ($v \approx 2.3\text{ cm}$), the eye cannot move its retina backward or forward to focus. Instead, it must dynamically modify its <strong>focal length</strong>. The ability of the human eye lens to adjust its focal length to focus objects at varying distances sharply onto the retina is called the <strong>power of accommodation</strong>.</p>

    <h4>2. Mechanism for Viewing Distant Objects (Relaxed Eye)</h4>
    <ul>
      <li>When viewing distant objects (at infinity):</li>
      <li>The ring of <strong>ciliary muscles relaxes</strong>.</li>
      <li>Suspensory ligaments are pulled taut, stretching the crystalline lens.</li>
      <li>The lens becomes <strong>thinner and flatter</strong> (its radius of curvature increases).</li>
      <li>Its focal length <strong>increases</strong> to its maximum (~$2.3\text{ cm}$), sharply focusing distant parallel rays onto the retina without eye strain.</li>
    </ul>

    <h4>3. Mechanism for Viewing Near Objects (Accommodated Eye)</h4>
    <ul>
      <li>When viewing close objects (e.g., reading a book at $25\text{ cm}$):</li>
      <li>The <strong>ciliary muscles contract</strong>.</li>
      <li>Suspensory ligaments slacken, allowing the elastic lens to bulge outward.</li>
      <li>The lens becomes <strong>thicker and more convex</strong> (its radius of curvature decreases).</li>
      <li>Its focal length <strong>decreases</strong>, increasing converging power to focus divergent near rays sharply onto the retina.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Power of accommodation is the ability of the eye lens to alter its focal length using ciliary muscles.",
    "Distant vision: Ciliary muscles relax $\\rightarrow$ lens becomes thin $\\rightarrow$ focal length increases.",
    "Near vision: Ciliary muscles contract $\\rightarrow$ lens becomes thick $\\rightarrow$ focal length decreases."
  ],
  "keyNotes": [
    "The focal length of the eye lens cannot be decreased below a certain minimum limit; attempting to read a book closer than 25 cm causes eye strain and blurry vision."
  ],
  "questions": [
    get_bank_q(7, "m03_q01"),
    get_bank_q(8, "m03_q02"),
    get_bank_q(23, "m03_q03"),
    get_bank_q(52, "m03_q04"),
    {
      "id": "m03_q05",
      "question": "What anatomical structures directly alter the curvature and focal length of the crystalline eye lens?",
      "options": ["Iris muscles", "Ciliary muscles", "Retinal ganglion cells", "Corneal epithelium"],
      "answer": "Ciliary muscles",
      "explanation": "Ciliary muscles attach to the eye lens via suspensory ligaments; their contraction or relaxation changes lens curvature."
    },
    {
      "id": "m03_q06",
      "question": "When a person looks at a distant mountain, what is the physiological state of their ciliary muscles and eye lens?",
      "options": [
        "Ciliary muscles contract, and lens becomes thick",
        "Ciliary muscles relax, and lens becomes thin with increased focal length",
        "Ciliary muscles vibrate rapidly",
        "Lens completely flattens into a plane mirror"
      ],
      "answer": "Ciliary muscles relax, and lens becomes thin with increased focal length",
      "explanation": "For distant objects, ciliary muscles are fully relaxed, making the lens thin with maximum focal length (~2.3 cm)."
    },
    {
      "id": "m03_q07",
      "question": "When shifting gaze from a distant blackboard to a notebook 25 cm away, the eye lens must:",
      "options": [
        "Increase its focal length",
        "Decrease its focal length by contracting ciliary muscles to become thicker",
        "Shift physically 2 cm backwards towards the skull",
        "Change its colour to dark blue"
      ],
      "answer": "Decrease its focal length by contracting ciliary muscles to become thicker",
      "explanation": "Focusing near objects requires higher converging power, achieved by contracting ciliary muscles to make the lens thicker (shorter focal length)."
    },
    {
      "id": "m03_q08",
      "question": "Why does attempting to read fine print held only 5 cm from the eye cause severe eye strain and blurred vision?",
      "options": [
        "The light from the print is absorbed by the cornea",
        "The ciliary muscles cannot contract enough to decrease the focal length beyond its physical limit",
        "The pupil completely shuts down",
        "Rods are destroyed by close reading"
      ],
      "answer": "The ciliary muscles cannot contract enough to decrease the focal length beyond its physical limit",
      "explanation": "The human crystalline lens has a minimum focal length limit; it cannot accommodate objects closer than the near point (25 cm)."
    },
    {
      "id": "m03_q09",
      "question": "The physiological capacity of the eye to focus sharply on both near and distant objects is termed:",
      "options": ["Presbyopia", "Power of Accommodation", "Astigmatism", "Dispersion limit"],
      "answer": "Power of Accommodation",
      "explanation": "Accommodation is the active adjustment of the eye's focal length to maintain clear retinal focus across varying distances."
    },
    {
      "id": "m03_q10",
      "question": "During distant vision with ciliary muscles completely relaxed, the human eye is said to be:",
      "options": ["Hyper-accommodated", "Unaccommodated (at rest)", "Presbyopic", "Astigmatic"],
      "answer": "Unaccommodated (at rest)",
      "explanation": "Viewing objects at optical infinity requires zero muscular effort, meaning the eye is unaccommodated and fully relaxed."
    }
  ]
}
modules_1_to_10.append(m03)

# ==========================================
# Module 4: Near Point & Far Point
# ==========================================
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Range of Normal Human Vision: Near Point ($D = 25\\text{ cm}$) & Far Point",
  "tagline": "Least distance of distinct vision, optical infinity, and normal visual span.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Near Point (Least Distance of Distinct Vision)</h4>
    <p>The minimum distance at which an object can be seen most distinctly without any strain or fatigue on the eye muscles is called the <strong>Least Distance of Distinct Vision (LDDV)</strong>, or the <strong>Near Point</strong> of the eye:</p>
    <ul>
      <li>For a normal, healthy young adult eye, the near point is comfortably located at <strong>$D = 25\text{ cm}$</strong>.</li>
      <li>If an object is brought closer than $25\text{ cm}$, the ciliary muscles must strain excessively, and the resulting image becomes fuzzy and unfocused.</li>
    </ul>

    <h4>2. The Far Point of the Eye</h4>
    <p>The farthest point up to which the eye can see objects clearly without any accommodation is called the <strong>Far Point</strong> of the eye:</p>
    <ul>
      <li>For a normal human eye, the far point is at <strong>infinity ($\infty$)</strong>. (This is why we can clearly see stars millions of light-years away on a clear night without muscular strain).</li>
    </ul>

    <h4>3. The Range of Normal Vision</h4>
    <p>The total functional visual span of a normal human eye extends seamlessly from <strong>$25\text{ cm}$ to infinity ($\infty$)</strong>.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Near point (Least Distance of Distinct Vision) of a normal adult eye is $25\\text{ cm}$.",
    "Far point of a normal eye is at infinity ($\\infty$).",
    "The range of normal vision spans from $25\\text{ cm}$ to infinity without muscular strain."
  ],
  "keyNotes": [
    "Young children often have a near point closer than 25 cm (~7 to 10 cm) because their crystalline lenses are highly elastic; with advancing age, the lens gradually hardens, pushing the near point outward."
  ],
  "questions": [
    get_bank_q(9, "m04_q01"),
    get_bank_q(10, "m04_q02"),
    get_bank_q(24, "m04_q03"),
    get_bank_q(50, "m04_q04"),
    {
      "id": "m04_q05",
      "question": "What is the value of the least distance of distinct vision (near point) for a normal young adult eye?",
      "options": ["25 m", "2.5 cm", "25 cm", "Infinity"],
      "answer": "25 cm",
      "explanation": "The standard near point for a normal young adult eye is 25 cm (0.25 m)."
    },
    {
      "id": "m04_q06",
      "question": "What is the far point of a healthy, normal human eye?",
      "options": ["1 kilometre", "25 metres", "Infinity (∞)", "25 cm"],
      "answer": "Infinity (∞)",
      "explanation": "A normal eye can see distant objects such as the Moon and stars clearly; its far point is at optical infinity."
    },
    {
      "id": "m04_q07",
      "question": "What is the complete range of clear vision for a normal human eye?",
      "options": [
        "From 0 cm to 25 cm",
        "From 25 cm to infinity (∞)",
        "From 10 cm to 100 cm",
        "From 2.3 cm to 25 cm"
      ],
      "answer": "From 25 cm to infinity (∞)",
      "explanation": "A normal eye can focus sharply on any object positioned between 25 cm (near point) and infinity (far point)."
    },
    {
      "id": "m04_q08",
      "question": "Why can an astronomer view the Andromeda galaxy located 2.5 million light-years away with the naked eye under dark skies?",
      "options": [
        "The eye magnifies light by 1000 times",
        "The far point of the human eye is at infinity, requiring zero accommodation to focus parallel incoming rays",
        "The cornea emits light beams to the galaxy",
        "The pupil expands to 5 cm in diameter"
      ],
      "answer": "The far point of the human eye is at infinity, requiring zero accommodation to focus parallel incoming rays",
      "explanation": "Light from distant celestial bodies arrives as parallel rays, which are focused naturally onto the retina by the relaxed eye."
    },
    {
      "id": "m04_q09",
      "question": "If a student can read a book placed 25 cm away with ease but cannot clearly read the whiteboard at 5 metres, what defect is present?",
      "options": ["Hypermetropia", "Myopia (Near-sightedness)", "Presbyopia", "Cataract"],
      "answer": "Myopia (Near-sightedness)",
      "explanation": "Clear near vision combined with blurred distant vision is the classic symptom of myopia."
    },
    {
      "id": "m04_q10",
      "question": "If an elderly person comfortably reads a signboard at 50 metres but holds newspapers at arm's length (60 cm) to read, what has happened?",
      "options": [
        "Their far point shifted to 25 cm",
        "Their near point has receded beyond the normal 25 cm due to loss of lens elasticity",
        "Their cornea became completely opaque",
        "Their eyeball elongated"
      ],
      "answer": "Their near point has receded beyond the normal 25 cm due to loss of lens elasticity",
      "explanation": "A receding near point (> 25 cm) caused by age-related loss of accommodation is characteristic of presbyopia/hypermetropia."
    }
  ]
}
modules_1_to_10.append(m04)

# ==========================================
# Module 5: Myopia & Concave Lens Correction
# ==========================================
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Defects of Vision: Myopia (Near-Sightedness) & Concave Lens Correction",
  "tagline": "Causes, shift of far point, formation of image in front of retina, and diverging lens fix.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Myopia (Near-Sightedness)?</h4>
    <p><strong>Myopia</strong> is a refractive defect of vision in which a person can see nearby objects with crystal clarity, but <strong>cannot see distant objects distinctly</strong>. The far point of a myopic eye is no longer at infinity; it has shifted closer to a finite distance (e.g., $1.5\text{ m}$ or $80\text{ cm}$).</p>

    <h4>2. Physiological Causes of Myopia</h4>
    <p>Myopia arises due to either of two biological causes:</p>
    <ol>
      <li><strong>Excessive Curvature of the Cornea / Eye Lens:</strong> The eye lens is too thick and has excessive converging power (focal length is too short).</li>
      <li><strong>Elongation of the Eyeball:</strong> The anteroposterior diameter of the eyeball is abnormally long, meaning the distance between the lens and the retina is too large.</li>
    </ol>

    <h4>3. Ray Diagram & Image Formation</h4>
    <p>In a myopic eye, parallel rays arriving from a distant object ($u = \infty$) converge excessively and intersect <strong>in front of the retina</strong> (in the vitreous humor), creating a blurry, unfocused patch on the retina.</p>

    <h4>4. Optical Correction using a Concave Lens</h4>
    <p>To correct myopia, a spectacle lens of appropriate power made of a <strong>concave (diverging) lens</strong> is placed in front of the eye:</p>
    <ul>
      <li>The concave lens diverges the incoming parallel rays slightly before they enter the eye.</li>
      <li>These diverged rays appear to originate from the person's defective <strong>far point ($F$)</strong>.</li>
      <li>The eye lens then effortlessly focuses these rays precisely onto the <strong>retina</strong>.</li>
    </ul>
    <p>Formula for required focal length: to see distant objects ($u = -\infty$) sharply when the far point is at distance $d$ ($v = -d$), the lens formula gives $f = -d$. Hence, the corrective lens must have a <strong>negative focal length</strong> and <strong>negative power</strong> ($P < 0$).</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Myopia: Near objects are clear, distant objects are blurry; far point shifts from infinity to a finite distance.",
    "Causes: Excessive curvature of the eye lens (too converging) or elongation of the eyeball.",
    "Image forms IN FRONT of the retina; corrected using a CONCAVE (diverging) lens of power $P < 0$."
  ],
  "keyNotes": [
    "The focal length of the corrective concave lens must equal the negative of the myopic person's far point ($f = -d$)."
  ],
  "questions": [
    get_bank_q(11, "m05_q01"),
    get_bank_q(12, "m05_q02"),
    get_bank_q(13, "m05_q03"),
    get_bank_q(14, "m05_q04"),
    get_bank_q(25, "m05_q05"),
    {
      "id": "m05_q06",
      "question": "Where does the image of a distant object form in an uncorrected myopic eye?",
      "options": ["Behind the retina", "In front of the retina", "Exactly on the optic disc", "Inside the cornea"],
      "answer": "In front of the retina",
      "explanation": "Due to excessive converging power or an elongated eyeball, rays focus in front of the retina rather than on it."
    },
    {
      "id": "m05_q07",
      "question": "Which type of lens is prescribed to correct myopia (near-sightedness)?",
      "options": ["Convex lens", "Concave lens", "Cylindrical convex lens", "Bifocal convex lens"],
      "answer": "Concave lens",
      "explanation": "A concave (diverging) lens diverges incoming parallel rays so they appear to originate from the myopic far point, focusing sharply on the retina."
    },
    {
      "id": "m05_q08",
      "question": "A person with myopia has a far point of 80 cm. What should be the focal length and power of the corrective lens required to restore normal distant vision?",
      "options": [
        "f = -80 cm, P = -1.25 D",
        "f = +80 cm, P = +1.25 D",
        "f = -50 cm, P = -2.0 D",
        "f = -100 cm, P = -1.0 D"
      ],
      "answer": "f = -80 cm, P = -1.25 D",
      "explanation": "u = -∞, v = -80 cm = -0.8 m. 1/f = 1/v - 1/u = -1/0.8 => f = -0.8 m = -80 cm. Power P = 1/f = 1/(-0.8) = -1.25 D."
    },
    {
      "id": "m05_q09",
      "question": "What happens to the far point of a human eye when it develops myopia?",
      "options": [
        "It recedes to billions of light years",
        "It shifts from infinity closer to the eye at a finite distance",
        "It becomes identical to the near point at 25 cm",
        "It shifts behind the head"
      ],
      "answer": "It shifts from infinity closer to the eye at a finite distance",
      "explanation": "In myopia, the far point is no longer at infinity; it moves inward to a finite distance (e.g., 1 m, 2 m, or 80 cm)."
    },
    {
      "id": "m05_q10",
      "question": "Why does an elongated eyeball cause myopia?",
      "options": [
        "The retina is moved too far back relative to the lens's focal plane, so rays converge before reaching the retina",
        "The cornea shrinks",
        "Light travels slower through the optic nerve",
        "The iris falls off"
      ],
      "answer": "The retina is moved too far back relative to the lens's focal plane, so rays converge before reaching the retina",
      "explanation": "When the eyeball is elongated, the retina is positioned farther back than the focal point of the relaxed eye lens, causing rays to meet in front of the retina."
    }
  ]
}
modules_1_to_10.append(m05)

# ==========================================
# Module 6: Hypermetropia & Convex Lens Correction
# ==========================================
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "Defects of Vision: Hypermetropia (Far-Sightedness) & Convex Lens Correction",
  "tagline": "Causes, shift of near point beyond 25 cm, image formation behind retina, and converging lens fix.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Hypermetropia (Far-Sightedness)?</h4>
    <p><strong>Hypermetropia</strong> (or hyperopia) is a refractive defect in which a person can see distant objects clearly, but <strong>struggles to see nearby objects distinctly</strong>. The near point of a hypermetropic eye recedes beyond the normal $25\text{ cm}$ (e.g., moving out to $50\text{ cm}$, $1\text{ m}$, or more). To read comfortably, the person must hold reading material far away from their eyes.</p>

    <h4>2. Physiological Causes of Hypermetropia</h4>
    <p>Hypermetropia arises from either of two biological defects:</p>
    <ol>
      <li><strong>Focal Length of Eye Lens is Too Long:</strong> The eye lens is too flat/thin and lacks adequate converging power.</li>
      <li><strong>Eyeball has Become Too Short:</strong> The anteroposterior diameter of the eyeball is abnormally short, so the retina is located too close to the eye lens.</li>
    </ol>

    <h4>3. Ray Diagram & Image Formation</h4>
    <p>Divergent light rays from an object placed at the normal near point ($u = -25\text{ cm}$) are not converged sufficiently by the weak eye lens. Consequently, the rays converge towards a focal point <strong>behind the retina</strong>, producing a blurry image on the retina.</p>

    <h4>4. Optical Correction using a Convex Lens</h4>
    <p>Hypermetropia is corrected using spectacles equipped with a <strong>convex (converging) lens</strong> of appropriate power:</p>
    <ul>
      <li>The convex lens provides the additional converging power required.</li>
      <li>It bends incoming divergent rays from the normal near point ($N = 25\text{ cm}$) so that they appear to emanate from the person's receded <strong>defective near point ($N'$)</strong>.</li>
      <li>The eye lens then effortlessly brings the rays to a sharp focus precisely on the <strong>retina</strong>.</li>
      <li>Corrective spectacles for hypermetropia have a <strong>positive focal length</strong> and <strong>positive power</strong> ($P > 0$).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Hypermetropia: Distant objects are clear, nearby objects are blurry; near point recedes beyond $25\\text{ cm}$.",
    "Causes: Focal length of eye lens is too long (insufficient convergence) or eyeball is too short.",
    "Image forms BEHIND the retina; corrected using a CONVEX (converging) lens of power $P > 0$."
  ],
  "keyNotes": [
    "A hypermetropic person reading a newspaper holds it at arm's length because their defective near point has moved beyond the standard 25 cm."
  ],
  "questions": [
    get_bank_q(15, "m06_q01"),
    get_bank_q(16, "m06_q02"),
    get_bank_q(17, "m06_q03"),
    get_bank_q(18, "m06_q04"),
    get_bank_q(26, "m06_q05"),
    {
      "id": "m06_q06",
      "question": "Where does the image of an object placed at the normal near point (25 cm) form in an uncorrected hypermetropic eye?",
      "options": ["In front of the retina", "Behind the retina", "Directly on the cornea", "At the blind spot"],
      "answer": "Behind the retina",
      "explanation": "Because the eye lens lacks converging power or the eyeball is too short, rays focus behind the retina."
    },
    {
      "id": "m06_q07",
      "question": "Which type of lens is prescribed to correct hypermetropia (far-sightedness)?",
      "options": ["Concave lens", "Convex lens", "Cylindrical diverging lens", "Plano-concave lens"],
      "answer": "Convex lens",
      "explanation": "A convex (converging) lens provides the extra convergence needed to focus light from 25 cm onto the retina."
    },
    {
      "id": "m06_q08",
      "question": "A hypermetropic person has a near point of 1.0 metre (100 cm). What is the power of the convex lens required to allow reading at the normal 25 cm near point?",
      "options": ["+3.0 D", "-3.0 D", "+1.0 D", "+4.0 D"],
      "answer": "+3.0 D",
      "explanation": "u = -25 cm = -0.25 m, v = -100 cm = -1.0 m. 1/f = 1/v - 1/u = -1/1.0 - (-1/0.25) = -1 + 4 = +3.0 m^-1. Power P = +3.0 D."
    },
    {
      "id": "m06_q09",
      "question": "Why does an eyeball that is 'too short' result in hypermetropia?",
      "options": [
        "The retina is situated too close to the lens, so light rays reach the retinal surface before they have finished converging",
        "The cornea falls off",
        "The iris produces too much melanin",
        "The optic nerve stops firing"
      ],
      "answer": "The retina is situated too close to the lens, so light rays reach the retinal surface before they have finished converging",
      "explanation": "A shortened eyeball places the retina in front of the lens's focal plane, so rays hit the retina before converging, focusing behind it."
    },
    {
      "id": "m06_q10",
      "question": "If an optician prescribes reading glasses with a power of P = +2.5 D, what vision defect is being corrected?",
      "options": ["Myopia", "Hypermetropia / Presbyopia", "Cataract", "Colour blindness"],
      "answer": "Hypermetropia / Presbyopia",
      "explanation": "Positive power indicates a converging (convex) lens, which is used exclusively to correct hypermetropia or presbyopic reading difficulty."
    }
  ]
}
modules_1_to_10.append(m06)

# ==========================================
# Module 7: Presbyopia & Bifocal Lenses
# ==========================================
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Presbyopia: Old Age Vision Defect & Bifocal Correction",
  "tagline": "Loss of accommodation elasticity with age, ciliary muscle weakening, and two-part bifocal lenses.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Presbyopia?</h4>
    <p><strong>Presbyopia</strong> (from Greek: "aging eye") is the progressive, age-related decline in the power of accommodation. As a person grows older (typically past age 40–45), the near point gradually recedes, making it difficult to read comfortably without corrective lenses.</p>

    <h4>2. Biological Causes of Presbyopia</h4>
    <p>Unlike childhood refractive errors that stem from eyeball geometry, presbyopia is an inevitable physiological aging phenomenon caused by:</p>
    <ul>
      <li><strong>Gradual Weakening of Ciliary Muscles:</strong> Aging reduces the contractile force of the ciliary muscle fibers.</li>
      <li><strong>Loss of Elasticity in the Crystalline Lens:</strong> The protein matrix inside the lens densifies and hardens, reducing its physical flexibility to bulge into a thicker curvature.</li>
    </ul>

    <h4>3. Presbyopia with Co-existing Myopia (Bifocal Lenses)</h4>
    <p>Frequently, an elderly individual suffers from <strong>both myopia and presbyopia</strong>—they cannot see distant street signs clearly (myopia) AND cannot read a book clearly (presbyopia). Such individuals require <strong>bifocal lenses</strong>:</p>
    <ul>
      <li><strong>Upper Portion:</strong> Consists of a <strong>concave lens</strong> to facilitate clear distant vision.</li>
      <li><strong>Lower Portion:</strong> Consists of a <strong>convex lens</strong> to facilitate clear reading and near vision.</li>
    </ul>
    <p>Modern spectacles often use progressive addition lenses (PALs) with seamless gradient power transitions without visible dividing lines.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Presbyopia is age-related loss of accommodation caused by weakening of ciliary muscles and hardening of the lens.",
    "The near point recedes with age, making reading at $25\\text{ cm}$ difficult.",
    "Bifocal lenses correct simultaneous myopia and presbyopia: upper portion is concave (distant), lower is convex (reading)."
  ],
  "keyNotes": [
    "Presbyopia is sometimes called 'old age hypermetropia' because both feature a receded near point, but their biological causes differ (ciliary aging vs eyeball geometry)."
  ],
  "questions": [
    get_bank_q(19, "m07_q01"),
    get_bank_q(20, "m07_q02"),
    get_bank_q(27, "m07_q03"),
    get_bank_q(53, "m07_q04"),
    {
      "id": "m07_q05",
      "question": "What is the primary biological cause of presbyopia in elderly individuals?",
      "options": [
        "Infection by bacteria",
        "Gradual weakening of ciliary muscles and diminishing flexibility of the crystalline lens",
        "Retinal detachment",
        "Shrinkage of the cornea"
      ],
      "answer": "Gradual weakening of ciliary muscles and diminishing flexibility of the crystalline lens",
      "explanation": "Aging causes ciliary muscles to lose contractile strength and the crystalline lens to lose its elastic ability to change curvature."
    },
    {
      "id": "m07_q06",
      "question": "In a traditional bifocal spectacle lens, which type of lens is incorporated into the UPPER portion?",
      "options": ["Convex lens for reading", "Concave lens for distant vision", "Cylindrical lens", "Plane glass"],
      "answer": "Concave lens for distant vision",
      "explanation": "The upper portion of a bifocal lens is a concave lens used to view distant objects, while the lower portion is convex for reading."
    },
    {
      "id": "m07_q07",
      "question": "In a traditional bifocal spectacle lens, which type of lens is incorporated into the LOWER portion?",
      "options": ["Concave lens for distant vision", "Convex lens for near reading vision", "Prism", "Mirrored glass"],
      "answer": "Convex lens for near reading vision",
      "explanation": "The lower portion is a convex lens that aids near vision for reading books and close work."
    },
    {
      "id": "m07_q08",
      "question": "Can a person who has had perfect vision their entire life develop presbyopia around age 45-50?",
      "options": [
        "No, presbyopia only occurs in people who were already near-sighted",
        "Yes, presbyopia is a universal, natural aging process affecting the crystalline lens in all humans",
        "Only if they work under fluorescent lamps",
        "Only if they experience an eye injury"
      ],
      "answer": "Yes, presbyopia is a universal, natural aging process affecting the crystalline lens in all humans",
      "explanation": "Presbyopia is an unavoidable physiological consequence of aging as lens proteins naturally stiffen over time."
    },
    {
      "id": "m07_q09",
      "question": "How do modern 'progressive addition lenses' (PALs) improve upon traditional bifocal spectacles?",
      "options": [
        "They eliminate the visible horizontal dividing line and provide a smooth, continuous transition from distant to near power",
        "They are made of heavy lead glass",
        "They glow in the dark",
        "They require daily battery recharging"
      ],
      "answer": "They eliminate the visible horizontal dividing line and provide a smooth, continuous transition from distant to near power",
      "explanation": "Progressive lenses provide seamless focal transitions between distance, intermediate, and reading zones without an abrupt visible line."
    },
    {
      "id": "m07_q10",
      "question": "How does simple presbyopia (without myopia) differ biologically from true hypermetropia?",
      "options": [
        "Presbyopia involves eye redness",
        "Hypermetropia is caused by a shortened eyeball or flat lens present from youth, whereas presbyopia stems from aging of ciliary muscles and lens elasticity",
        "Presbyopia affects only one eye",
        "Hypermetropia cannot be corrected with glasses"
      ],
      "answer": "Hypermetropia is caused by a shortened eyeball or flat lens present from youth, whereas presbyopia stems from aging of ciliary muscles and lens elasticity",
      "explanation": "Hypermetropia is an anatomical refractive error; presbyopia is an age-related loss of accommodation capacity."
    }
  ]
}
modules_1_to_10.append(m07)

# ==========================================
# Module 8: Cataract, Astigmatism & Binocular Vision
# ==========================================
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Cataract, Astigmatism & Why We Have Two Eyes (Binocular Vision)",
  "tagline": "Opacification of crystalline lens, asymmetrical corneal curvature, and stereoscopic depth perception.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Cataract: Opacification of the Crystalline Lens</h4>
    <p>In elderly individuals, the crystalline protein structure of the eye lens may gradually denature, aggregate, and become cloudy or milky. This condition is called a <strong>cataract</strong>:</p>
    <ul>
      <li>Causes partial or complete loss of vision by scattering incoming light and preventing a clear image on the retina.</li>
      <li>Cataracts <strong>cannot be corrected with spectacles or eye drops</strong>.</li>
      <li>Vision is completely restored through <strong>cataract surgery</strong>, where the opaque natural lens is surgically emulsified (phacoemulsification) and replaced with an artificial plastic <strong>intraocular lens (IOL)</strong>.</li>
    </ul>

    <h4>2. Astigmatism</h4>
    <p><strong>Astigmatism</strong> occurs when the cornea (or eye lens) is not perfectly spherical, but curved more in one meridian than another (shaped like an American football or rugby ball rather than a basketball). As a result, horizontal and vertical lines cannot be brought to a sharp focus simultaneously. It is corrected using <strong>cylindrical lenses</strong>.</p>

    <h4>3. Why Do We Have Two Eyes Instead of One?</h4>
    <p>Having two forward-facing eyes confers profound evolutionary and perceptual benefits:</p>
    <ol>
      <li><strong>Wider Horizontal Field of View:</strong> A single human eye affords a horizontal field of view of approximately $150^\circ$, whereas two eyes combined provide a panoramic view of about <strong>$180^\circ$</strong>.</li>
      <li><strong>Stereoscopic Vision (Depth Perception / 3D Vision):</strong> Because our two eyes are separated horizontally by a few centimetres (~$6.5\text{ cm}$), each eye captures a slightly different perspective of a scene. The brain fuses these two disparate images into a single three-dimensional mental image, computing precise depth, distance, and spatial volume.</li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "Cataract is the clouding/milky opacification of the crystalline lens; cured surgically by implanting an intraocular lens (IOL).",
    "Astigmatism is caused by non-spherical corneal curvature; corrected with cylindrical lenses.",
    "Two eyes expand horizontal field of view to $180^\\circ$ and provide stereoscopic 3D depth perception."
  ],
  "keyNotes": [
    "Prey animals (like rabbits and deer) have eyes on opposite sides of their head to maximize visual coverage (~360°) to spot predators, but sacrifice 3D depth perception. Predators and humans have forward-facing eyes to maximize stereoscopic depth perception for hunting."
  ],
  "questions": [
    get_bank_q(28, "m08_q01"),
    get_bank_q(54, "m08_q02"),
    get_bank_q(55, "m08_q03"),
    {
      "id": "m08_q04",
      "question": "What is the medical condition where the crystalline lens of older adults becomes cloudy and milky, causing vision loss?",
      "options": ["Myopia", "Glaucoma", "Cataract", "Astigmatism"],
      "answer": "Cataract",
      "explanation": "A cataract is the progressive clouding or opacification of the eye's crystalline lens due to protein aggregation."
    },
    {
      "id": "m08_q05",
      "question": "How is vision effectively and permanently restored in a patient suffering from a mature cataract?",
      "options": [
        "By wearing high-power convex reading spectacles",
        "By surgical removal of the opaque lens and replacement with an artificial intraocular lens (IOL)",
        "By taking oral vitamin A tablets",
        "By wearing polarized sunglasses"
      ],
      "answer": "By surgical removal of the opaque lens and replacement with an artificial intraocular lens (IOL)",
      "explanation": "Cataracts cannot be fixed with spectacles; surgical extraction of the cloudy lens and replacement with a clear IOL is required."
    },
    {
      "id": "m08_q06",
      "question": "What type of corrective lens is used to compensate for astigmatism caused by uneven corneal curvature?",
      "options": ["Spherical concave lens", "Cylindrical lens", "Bifocal convex lens", "Prismatic lens"],
      "answer": "Cylindrical lens",
      "explanation": "A cylindrical lens has different focal powers in different meridians, compensating for the asymmetrical curvature of an astigmatic cornea."
    },
    {
      "id": "m08_q07",
      "question": "What is the combined horizontal visual field of view provided by two forward-facing human eyes?",
      "options": ["90°", "150°", "180°", "360°"],
      "answer": "180°",
      "explanation": "A single eye provides roughly 150° of view, while both forward-facing eyes together provide a 180° panoramic visual field."
    },
    {
      "id": "m08_q08",
      "question": "What is the primary optical advantage of having two forward-facing eyes separated by a few centimetres?",
      "options": [
        "It doubles the brightness of sunlight",
        "It provides stereoscopic depth perception (3D vision) by combining two slightly disparate retinal views",
        "It prevents eye fatigue",
        "It allows seeing in total darkness"
      ],
      "answer": "It provides stereoscopic depth perception (3D vision) by combining two slightly disparate retinal views",
      "explanation": "Horizontal separation between the eyes provides two slightly different perspectives; the brain calculates depth from retinal disparity."
    },
    {
      "id": "m08_q09",
      "question": "Why do prey animals like deer and rabbits have their eyes positioned on the lateral sides of their skull?",
      "options": [
        "To maximize their field of view to nearly 360° to detect approaching predators from any direction",
        "To read fine grass text",
        "To see in the ultraviolet spectrum",
        "Because their eyes are too large to fit in front"
      ],
      "answer": "To maximize their field of view to nearly 360° to detect approaching predators from any direction",
      "explanation": "Lateral eye placement affords nearly 360° panoramic surveillance, enabling prey to spot approaching predators from all angles."
    },
    {
      "id": "m08_q10",
      "question": "If you close one eye and attempt to touch the tips of two pens held horizontally in front of you, why is it significantly harder?",
      "options": [
        "Because light stops entering the open eye",
        "Because closing one eye eliminates binocular stereoscopic depth perception, making distance estimation difficult",
        "Because the pen becomes invisible",
        "Because of sudden astigmatism"
      ],
      "answer": "Because closing one eye eliminates binocular stereoscopic depth perception, making distance estimation difficult",
      "explanation": "Monocular vision lacks binocular depth cues, impairing precise estimation of relative distances in three dimensions."
    }
  ]
}
modules_1_to_10.append(m08)

# ==========================================
# Module 9: Refraction through a Glass Prism
# ==========================================
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Refraction of Light through a Triangular Glass Prism",
  "tagline": "Prism geometry, non-parallel refracting faces, and the Angle of Deviation (δ).",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Geometry of a Triangular Glass Prism</h4>
    <p>A <strong>triangular glass prism</strong> is a transparent optical medium bounded by two triangular bases and three rectangular lateral refracting faces inclined at an angle to each other:</p>
    <ul>
      <li><strong>Angle of the Prism ($A$):</strong> The angle between the two lateral refracting surfaces (typically $60^\circ$ in an equilateral prism).</li>
    </ul>

    <h4>2. Tracing a Monochromatic Ray through a Prism</h4>
    <p>Unlike a parallel glass slab where emergent rays are parallel to incident rays, the non-parallel refracting faces of a prism cause a net <strong>angular deviation</strong>:</p>
    <ol>
      <li><strong>First Surface ($AB$):</strong> Ray travels from air (rarer) into glass (denser). It bends <strong>towards the normal</strong> ($\angle i > \angle r_1$).</li>
      <li><strong>Second Surface ($AC$):</strong> Refracted ray inside glass strikes the second inclined face and emerges into air (rarer). It bends <strong>away from the normal</strong> ($\angle r_2 < \angle e$).</li>
      <li><strong>Net Bending:</strong> The ray is bent <strong>towards the thicker base</strong> of the prism at both interfaces!</li>
    </ol>

    <h4>3. The Angle of Deviation ($\delta$ or $D$)</h4>
    <p>If we extend the incident ray straight forward and extend the emergent ray backwards, the angle between the original direction of the incident ray and the emergent ray is called the <strong>Angle of Deviation ($\delta$)</strong>.</p>
    <p>By geometry:</p>
    $$A + \delta = i + e$$
    <p>Where $A$ is the prism angle, $\delta$ is deviation, $i$ is angle of incidence, and $e$ is angle of emergence.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "A prism has inclined refracting faces, bending light towards its thicker base.",
    "Angle of Deviation ($\\delta$): Angle between the incident ray produced forward and emergent ray produced backward.",
    "Fundamental prism equation: $A + \\delta = i + e$."
  ],
  "keyNotes": [
    "In a parallel rectangular slab, deviation $\\delta = 0^\\circ$ (rays are parallel); in a triangular prism, the non-parallel faces produce a non-zero angular deviation $\\delta$."
  ],
  "questions": [
    get_bank_q(29, "m09_q01"),
    get_bank_q(56, "m09_q02"),
    get_bank_q(57, "m09_q03"),
    {
      "id": "m09_q04",
      "question": "What is the angle between the two lateral refracting faces of a triangular prism called?",
      "options": ["Angle of deviation", "Angle of the prism (A)", "Critical angle", "Glancing angle"],
      "answer": "Angle of the prism (A)",
      "explanation": "The angle between the two lateral faces through which light enters and emerges is the angle of the prism (A)."
    },
    {
      "id": "m09_q05",
      "question": "What is the angle between the incident ray produced forward and the emergent ray produced backward through a prism called?",
      "options": ["Angle of emergence", "Angle of incidence", "Angle of deviation (δ)", "Angle of refraction"],
      "answer": "Angle of deviation (δ)",
      "explanation": "The angle of deviation δ measures the net angular bend suffered by the ray of light in passing through the prism."
    },
    {
      "id": "m09_q06",
      "question": "In which direction does a ray of light bend as it passes through a standard triangular glass prism surrounded by air?",
      "options": [
        "Towards the apex (thin top)",
        "Towards the base (thick bottom) at both surfaces",
        "It does not bend at all",
        "Backward towards the light bulb"
      ],
      "answer": "Towards the base (thick bottom) at both surfaces",
      "explanation": "Because glass is optically denser than air, refractions at both inclined surfaces bend the ray towards the thicker base."
    },
    {
      "id": "m09_q07",
      "question": "Which mathematical equation correctly relates angle of prism (A), angle of deviation (δ), angle of incidence (i), and angle of emergence (e)?",
      "options": ["A + δ = i + e", "A + i = δ + e", "A × δ = i × e", "A - δ = i - e"],
      "answer": "A + δ = i + e",
      "explanation": "Geometric optics proves that for any triangular prism, A + δ = i + e."
    },
    {
      "id": "m09_q08",
      "question": "In an experiment with an equilateral prism (A = 60°), the angle of incidence is 48° and the angle of emergence is 48°. What is the angle of deviation?",
      "options": ["36°", "48°", "60°", "24°"],
      "answer": "36°",
      "explanation": "A + δ = i + e => 60° + δ = 48° + 48° = 96° => δ = 96° - 60° = 36°."
    },
    {
      "id": "m09_q09",
      "question": "Why does a parallel-sided glass slab produce ZERO angular deviation while a triangular prism produces significant deviation?",
      "options": [
        "Glass slabs are made of ice",
        "In a slab, the two refracting faces are strictly parallel, so the second refraction cancels the first; in a prism, the faces are inclined at an angle",
        "Prisms have higher chemical density",
        "Slabs absorb all light"
      ],
      "answer": "In a slab, the two refracting faces are strictly parallel, so the second refraction cancels the first; in a prism, the faces are inclined at an angle",
      "explanation": "Inclined refracting faces mean the ray strikes the second boundary at an angle that amplifies, rather than cancels, the first bending."
    },
    {
      "id": "m09_q10",
      "question": "At the condition of minimum deviation (δ = δ_min) in a symmetric triangular prism, how does the refracted ray travel inside the prism?",
      "options": [
        "Perpendicular to the base",
        "Parallel to the base of the prism",
        "Along the normal to the apex",
        "It bounces internally 10 times"
      ],
      "answer": "Parallel to the base of the prism",
      "explanation": "At minimum deviation, the ray passes symmetrically through the prism, travelling parallel to the base (with i = e and r1 = r2)."
    }
  ]
}
modules_1_to_10.append(m09)

# ==========================================
# Module 10: Dispersion of White Light
# ==========================================
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Dispersion of White Light by a Glass Prism & The VIBGYOR Spectrum",
  "tagline": "Splitting of polychromatic light, wavelength-dependent deviation, and red vs violet bending.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Dispersion of Light?</h4>
    <p>In 1665, Sir Isaac Newton discovered that when a narrow beam of sunlight (white light) passes through a triangular glass prism, the emerging beam splits into an exquisite multi-coloured band of colours. The phenomenon of the <strong>splitting of white light into its component constituent colours</strong> upon passing through a refracting medium is called <strong>dispersion of light</strong>.</p>

    <h4>2. The Visible Spectrum (VIBGYOR)</h4>
    <p>The colourful band produced on a white screen is termed the <strong>visible spectrum</strong>, arranged in order of decreasing wavelength and increasing deviation:</p>
    <ul>
      <li><strong>V</strong> — Violet (Shortest wavelength $\lambda \approx 400\text{ nm}$, Most deviated)</li>
      <li><strong>I</strong> — Indigo</li>
      <li><strong>B</strong> — Blue</li>
      <li><strong>G</strong> — Green</li>
      <li><strong>Y</strong> — Yellow (Mean colour of the spectrum)</li>
      <li><strong>O</strong> — Orange</li>
      <li><strong>R</strong> — Red (Longest wavelength $\lambda \approx 700\text{ nm}$, Least deviated)</li>
    </ul>

    <h4>3. The Physical Cause of Dispersion</h4>
    <p>While all colours of light travel at the exact same universal speed in vacuum ($c \approx 3 \times 10^8\text{ m/s}$), they travel at <strong>different speeds in a transparent material medium</strong> such as glass:</p>
    <ul>
      <li><strong>Red light</strong> has the longest wavelength, travels the fastest in glass, encounters the smallest refractive index ($n_\text{red} < n_\text{violet}$), and therefore bends (deviates) the <strong>least</strong>.</li>
      <li><strong>Violet light</strong> has the shortest wavelength, travels the slowest in glass, encounters the highest refractive index, and therefore bends (deviates) the <strong>most</strong>.</li>
    </ul>
    <p>This differential bending at both prism faces spreads the colours out into a continuous fan-like spectrum.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Dispersion is the splitting of polychromatic white light into its constituent component colours.",
    "The spectrum sequence from base to apex is VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red).",
    "Violet light deviates the most (slowest in glass); Red light deviates the least (fastest in glass)."
  ],
  "keyNotes": [
    "White light is not a single colour; it is a composite polychromatic mixture of seven distinct spectral colours discovered by Isaac Newton."
  ],
  "questions": [
    get_bank_q(30, "m10_q01"),
    get_bank_q(58, "m10_q02"),
    get_bank_q(59, "m10_q03"),
    get_bank_q(80, "m10_q04"),
    {
      "id": "m10_q05",
      "question": "Which colour of white light suffers the MAXIMUM deviation when passing through a triangular glass prism?",
      "options": ["Red", "Yellow", "Green", "Violet"],
      "answer": "Violet",
      "explanation": "Violet light has the shortest wavelength and slowest speed in glass, giving it the highest refractive index and maximum deviation."
    },
    {
      "id": "m10_q06",
      "question": "Which colour of white light suffers the LEAST deviation when passing through a triangular glass prism?",
      "options": ["Red", "Orange", "Blue", "Violet"],
      "answer": "Red",
      "explanation": "Red light has the longest wavelength and travels fastest in glass, encountering the lowest refractive index and bending the least."
    },
    {
      "id": "m10_q07",
      "question": "What is the acronym used to recall the sequence of colours in the visible spectrum from bottom to top?",
      "options": ["ROYGBIV", "VIBGYOR", "SPECTRUM", "NEWTON"],
      "answer": "VIBGYOR",
      "explanation": "VIBGYOR represents Violet, Indigo, Blue, Green, Yellow, Orange, Red in order of decreasing deviation from the prism base."
    },
    {
      "id": "m10_q08",
      "question": "Who was the first scientist to demonstrate using a glass prism that sunlight is composed of seven constituent colours?",
      "options": ["Galileo Galilei", "Sir Isaac Newton", "Albert Einstein", "Thomas Young"],
      "answer": "Sir Isaac Newton",
      "explanation": "Isaac Newton (1665) conducted the classic prism dispersion and recombination experiments."
    },
    {
      "id": "m10_q09",
      "question": "Why does a parallel-sided rectangular glass slab NOT display dispersion into seven colours on an exit screen?",
      "options": [
        "Glass slabs absorb all colours except white",
        "Colors split slightly at the first face but recombine upon emerging from the parallel second face, leaving only a parallel white beam with minor edge fringing",
        "Slabs do not have a refractive index",
        "Because sunlight cannot enter flat glass"
      ],
      "answer": "Colors split slightly at the first face but recombine upon emerging from the parallel second face, leaving only a parallel white beam with minor edge fringing",
      "explanation": "Parallel faces cause the different colours to emerge parallel to each other, overlapping and recombining into white light."
    },
    {
      "id": "m10_q10",
      "question": "In vacuum, which colour of light travels the fastest?",
      "options": [
        "Red travels faster than violet",
        "Violet travels faster than red",
        "All colours of electromagnetic radiation travel at the EXACT SAME universal speed in vacuum (c = 3 × 10^8 m/s)",
        "Green light travels fastest"
      ],
      "answer": "All colours of electromagnetic radiation travel at the EXACT SAME universal speed in vacuum (c = 3 × 10^8 m/s)",
      "explanation": "In vacuum, there is no material medium to cause dispersion; all electromagnetic waves travel at precisely c = 3 × 10^8 m/s."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch10_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 10 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
