/* =========================================================================
   ELITE CLASSES — CLASS 10 SCIENCE TEST SERIES
   Chapter 12: Magnetic Effects of Electric Current (100 Questions Master Assessment)
   NCERT Standard Assessment with Proper Scientific & Mathematical Typography
   Difficulty Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10ScienceChapter12FullBank = {
    id: 'ts_c10_sci_ch12',
    title: 'Chapter 12: Magnetic Effects of Electric Current Assessment',
    subject: 'Science',
    cls: 'Class 10',
    duration_mins: 90,
    total_marks: 400,
    marks_per_question: 4,
    negative_mark: 1,
    questions_count: 100,
    questions: [
        // =================================================================
        // TIER 1: EASY QUESTIONS (Q1 - Q50)
        // Direct NCERT Concepts, Oersted Experiment, Field Lines, Solenoid, Rules & Wiring
        // =================================================================
        {
            id: 1,
            question: "Which scientist first discovered in 1820 that an electric current flowing through a metallic wire produces a magnetic field that deflects a nearby compass needle?",
            options: [
                { key: 'A', text: "Michael Faraday" },
                { key: 'B', text: "Hans Christian Oersted" },
                { key: 'C', text: "James Clerk Maxwell" },
                { key: 'D', text: "André-Marie Ampère" }
            ],
            correct_option: 'B',
            explanation: "Hans Christian Oersted discovered electromagnetism in 1820 when he noticed a compass needle deflect near a current-carrying wire."
        },
        {
            id: 2,
            question: "A compass needle placed near a magnet behaves as a small:",
            options: [
                { key: 'A', text: "Bar magnet" },
                { key: 'B', text: "Electric dipole" },
                { key: 'C', text: "Non-magnetic pointer" },
                { key: 'D', text: "Electromagnet" }
            ],
            correct_option: 'A',
            explanation: "A magnetic compass needle is a small pivoted permanent bar magnet whose ends align with magnetic field lines."
        },
        {
            id: 3,
            question: "Outside a bar magnet, magnetic field lines emerge from the __________ pole and merge/enter at the __________ pole.",
            options: [
                { key: 'A', text: "South; North" },
                { key: 'B', text: "North; South" },
                { key: 'C', text: "East; West" },
                { key: 'D', text: "Positive; Negative" }
            ],
            correct_option: 'B',
            explanation: "By universal scientific convention, external magnetic field lines emerge from the North pole and enter the South pole."
        },
        {
            id: 4,
            question: "Inside the body of a bar magnet, what is the direction of magnetic field lines?",
            options: [
                { key: 'A', text: "From North pole to South pole" },
                { key: 'B', text: "From South pole to North pole (forming closed continuous loops)" },
                { key: 'C', text: "Radially outwards" },
                { key: 'D', text: "There are no field lines inside a magnet" }
            ],
            correct_option: 'B',
            explanation: "Inside the magnet, field lines run from South to North, making magnetic field lines continuous closed curves."
        },
        {
            id: 5,
            question: "Why can NO two magnetic field lines ever intersect or cross each other?",
            options: [
                { key: 'A', text: "They repel because they have identical mass" },
                { key: 'B', text: "If they intersected, a compass needle placed at the point of intersection would have to point simultaneously in two different directions, which is physically impossible" },
                { key: 'C', text: "They travel at the speed of light" },
                { key: 'D', text: "Magnetic fields exist only in vacuum" }
            ],
            correct_option: 'B',
            explanation: "At any point in space, the net magnetic field vector has a unique direction. Intersection would imply two resultant vectors, which is impossible."
        },
        {
            id: 6,
            question: "What does the degree of closeness (crowding) of magnetic field lines in a given region indicate?",
            options: [
                { key: 'A', text: "The temperature of the magnet" },
                { key: 'B', text: "The relative strength of the magnetic field (closer lines signify a stronger magnetic field)" },
                { key: 'C', text: "The electric charge of the magnet" },
                { key: 'D', text: "The speed of magnetic waves" }
            ],
            correct_option: 'B',
            explanation: "Magnetic flux density (line crowding) directly represents magnetic field intensity; field lines are most crowded near the poles where the field is strongest."
        },
        {
            id: 7,
            question: "What is the pattern of magnetic field lines produced around a straight current-carrying metallic conductor?",
            options: [
                { key: 'A', text: "Parallel straight lines along the wire" },
                { key: 'B', text: "Concentric circles centred on the conductor in a plane perpendicular to the wire" },
                { key: 'C', text: "Radial straight lines pointing outwards" },
                { key: 'D', text: "Helical spirals only" }
            ],
            correct_option: 'B',
            explanation: "Field lines around a straight current-carrying wire form coaxial concentric circles lying in perpendicular planes."
        },
        {
            id: 8,
            question: "Which rule is used to find the direction of magnetic field lines around a straight current-carrying conductor?",
            options: [
                { key: 'A', text: "Fleming's left-hand rule" },
                { key: 'B', text: "Right-Hand Thumb Rule (or Maxwell's Corkscrew Rule)" },
                { key: 'C', text: "Ohm's rule" },
                { key: 'D', text: "Snell's rule" }
            ],
            correct_option: 'B',
            explanation: "Right-Hand Thumb Rule: Point right thumb in current direction; wrapped fingers show the direction of concentric magnetic field lines."
        },
        {
            id: 9,
            question: "If the electric current flowing through a straight vertical copper wire is DOUBLED, what happens to the magnetic field strength at a fixed distance from the wire?",
            options: [
                { key: 'A', text: "It is halved" },
                { key: 'B', text: "It is doubled (B ∝ I)" },
                { key: 'C', text: "It quadruples" },
                { key: 'D', text: "It becomes zero" }
            ],
            correct_option: 'B',
            explanation: "The magnetic field produced by a straight conductor is directly proportional to current (B ∝ I)."
        },
        {
            id: 10,
            question: "As the distance (r) from a straight current-carrying conductor INCREASES, the magnetic field strength (B):",
            options: [
                { key: 'A', text: "Increases linearly" },
                { key: 'B', text: "Decreases inversely with distance (B ∝ 1/r)" },
                { key: 'C', text: "Remains constant" },
                { key: 'D', text: "Becomes negative" }
            ],
            correct_option: 'B',
            explanation: "Magnetic field strength drops off inversely with radial distance from a straight wire (B ∝ 1/r)."
        },
        {
            id: 11,
            question: "A long horizontal power line carries current from East to West. Viewed from the East end, what is the direction of the magnetic field lines around the wire?",
            options: [
                { key: 'A', text: "Anti-clockwise" },
                { key: 'B', text: "Clockwise" },
                { key: 'C', text: "Towards the North" },
                { key: 'D', text: "Towards the South" }
            ],
            correct_option: 'B',
            explanation: "Applying the Right-Hand Thumb Rule with thumb pointing West (into the page from East), fingers curl in a clockwise direction."
        },
        {
            id: 12,
            question: "At the center of a circular current-carrying coil of wire, the magnetic field lines appear as:",
            options: [
                { key: 'A', text: "Tiny concentric circles" },
                { key: 'B', text: "Parallel straight lines perpendicular to the plane of the coil" },
                { key: 'C', text: "Radial outward spikes" },
                { key: 'D', text: "Zero lines" }
            ],
            correct_option: 'B',
            explanation: "The curvature of concentric field loops from opposite sides of the circular loop cancels out, creating straight, uniform perpendicular field lines at the centre."
        },
        {
            id: 13,
            question: "If a circular coil of wire has 'n' turns instead of a single turn, the magnetic field produced at its centre is:",
            options: [
                { key: 'A', text: "n times smaller" },
                { key: 'B', text: "n times larger (as the magnetic field of each individual turn adds up constructively in the same direction)" },
                { key: 'C', text: "n² times larger" },
                { key: 'D', text: "Independent of n" }
            ],
            correct_option: 'B',
            explanation: "Since currents in all n turns circulate in the same direction, their magnetic fields superimpose linearly: B = n × B_single."
        },
        {
            id: 14,
            question: "A long cylindrical coil of many closely wrapped circular turns of insulated copper wire is called a:",
            options: [
                { key: 'A', text: "Rheostat" },
                { key: 'B', text: "Solenoid" },
                { key: 'C', text: "Voltmeter" },
                { key: 'D', text: "Commutator" }
            ],
            correct_option: 'B',
            explanation: "A solenoid consists of a helical coil of insulated copper wire wound in the shape of a cylinder."
        },
        {
            id: 15,
            question: "The magnetic field pattern produced by a current-carrying solenoid is virtually identical to that of a:",
            options: [
                { key: 'A', text: "Single straight wire" },
                { key: 'B', text: "Bar magnet" },
                { key: 'C', text: "Horseshoe magnet only" },
                { key: 'D', text: "Point electric charge" }
            ],
            correct_option: 'B',
            explanation: "A current-carrying solenoid has dipole field lines emerging from one face (North pole) and re-entering the opposite face (South pole), mimicking a bar magnet."
        },
        {
            id: 16,
            question: "The magnetic field lines INSIDE a long current-carrying solenoid are in the form of parallel straight lines. This indicates that the magnetic field inside the solenoid is:",
            options: [
                { key: 'A', text: "Zero at the centre" },
                { key: 'B', text: "Uniform (same magnitude and direction at all interior points)" },
                { key: 'C', text: "Maximum at the edges and zero inside" },
                { key: 'D', text: "Continuously fluctuating" }
            ],
            correct_option: 'B',
            explanation: "Parallel equidistant field lines represent a spatially uniform magnetic field throughout the interior cavity of a long solenoid."
        },
        {
            id: 17,
            question: "An electromagnet consists of a core of __________ placed inside a current-carrying solenoid coil.",
            options: [
                { key: 'A', text: "Copper" },
                { key: 'B', text: "Soft iron" },
                { key: 'C', text: "Aluminium" },
                { key: 'D', text: "Wood" }
            ],
            correct_option: 'B',
            explanation: "Soft iron has high magnetic permeability and low retentivity; it strongly magnifies magnetic fields when energized and readily demagnetizes when current is switched off."
        },
        {
            id: 18,
            question: "Which French scientist suggested that since a current-carrying conductor exerts a magnetic force on a magnet, a magnet must also exert an equal and opposite force on the conductor?",
            options: [
                { key: 'A', text: "Isaac Newton" },
                { key: 'B', text: "André-Marie Ampère" },
                { key: 'C', text: "Charles Coulomb" },
                { key: 'D', text: "Alessandro Volta" }
            ],
            correct_option: 'B',
            explanation: "André-Marie Ampère applied Newton's third law to electromagnetism, proposing reciprocal mechanical forces between magnets and conductors."
        },
        {
            id: 19,
            question: "When is the mechanical force experienced by a current-carrying conductor placed in an external magnetic field MAXIMUM?",
            options: [
                { key: 'A', text: "When the conductor is parallel to the magnetic field (θ = 0°)" },
                { key: 'B', text: "When the conductor is perpendicular to the magnetic field (θ = 90°)" },
                { key: 'C', text: "When the conductor is anti-parallel (θ = 180°)" },
                { key: 'D', text: "When the current is zero" }
            ],
            correct_option: 'B',
            explanation: "Force F = I L B sin θ; maximum force (F_max = ILB) occurs when θ = 90° (current perpendicular to magnetic field)."
        },
        {
            id: 20,
            question: "When a current-carrying conductor is placed PARALLEL to the direction of a magnetic field (θ = 0° or 180°), what is the magnitude of the magnetic force acting on it?",
            options: [
                { key: 'A', text: "Maximum force" },
                { key: 'B', text: "Zero (F = 0)" },
                { key: 'C', text: "Half of maximum" },
                { key: 'D', text: "Infinity" }
            ],
            correct_option: 'B',
            explanation: "Since sin 0° = sin 180° = 0, no magnetic Lorentz force acts on a conductor aligned parallel to magnetic field lines."
        },
        {
            id: 21,
            question: "Which hand rule is used to determine the direction of mechanical force (or motion) acting on a current-carrying conductor in a magnetic field?",
            options: [
                { key: 'A', text: "Fleming's right-hand rule" },
                { key: 'B', text: "Fleming's left-hand rule" },
                { key: 'C', text: "Right-hand thumb rule" },
                { key: 'D', text: "Maxwell's corkscrew rule" }
            ],
            correct_option: 'B',
            explanation: "Fleming's left-hand rule determines motor force: Forefinger = Field, Middle finger = Current, Thumb = Force/Motion."
        },
        {
            id: 22,
            question: "In Fleming's Left-Hand Rule, what do the Forefinger, Middle finger, and Thumb represent, respectively?",
            options: [
                { key: 'A', text: "Forefinger: Current; Middle finger: Force; Thumb: Field" },
                { key: 'B', text: "Forefinger: Magnetic Field; Middle finger: Electric Current; Thumb: Force / Motion" },
                { key: 'C', text: "Forefinger: Force; Middle finger: Field; Thumb: Current" },
                { key: 'D', text: "Forefinger: Voltage; Middle finger: Resistance; Thumb: Power" }
            ],
            correct_option: 'B',
            explanation: "Forefinger points in Magnetic Field (B), Middle finger in Current (I), and outstretched Thumb indicates Direction of Force (F)."
        },
        {
            id: 23,
            question: "An electron enters a uniform magnetic field directed horizontally from left to right. If the electron is moving vertically downwards, what is the direction of the magnetic force acting on it?",
            options: [
                { key: 'A', text: "Towards the left" },
                { key: 'B', text: "Into the page" },
                { key: 'C', text: "Out of the page (towards the viewer)" },
                { key: 'D', text: "Vertically upwards" }
            ],
            correct_option: 'C',
            explanation: "Electron downwards ⇒ conventional current is upwards. Field is rightwards. Applying Fleming's left-hand rule (Forefinger right, Middle finger up) gives Thumb pointing out of the page."
        },
        {
            id: 24,
            question: "A positively charged alpha particle projected towards the West is deflected towards the North by a magnetic field. What is the direction of the magnetic field?",
            options: [
                { key: 'A', text: "Towards the South" },
                { key: 'B', text: "Towards the East" },
                { key: 'C', text: "Downwards (into the plane)" },
                { key: 'D', text: "Upwards (out of the plane / vertically upward)" }
            ],
            correct_option: 'D',
            explanation: "Positive charge West ⇒ Current I = West. Force F = North (Thumb). Middle finger = West, Thumb = North ⇒ Forefinger points vertically upwards."
        },
        {
            id: 25,
            question: "Which of the following physical properties of a proton can change when it enters and moves freely in a magnetic field?",
            options: [
                { key: 'A', text: "Mass only" },
                { key: 'B', text: "Speed only" },
                { key: 'C', text: "Velocity and momentum (direction of motion changes while speed remains constant)" },
                { key: 'D', text: "Electric charge" }
            ],
            correct_option: 'C',
            explanation: "Magnetic force is always perpendicular to velocity ($F \perp v$), doing zero work. Kinetic energy and speed remain constant, but directional velocity and momentum change continuously."
        },
        {
            id: 26,
            question: "In the human body, which two primary organs produce significant internal magnetic fields due to bio-electric nerve conduction?",
            options: [
                { key: 'A', text: "Lungs and stomach" },
                { key: 'B', text: "Heart and brain" },
                { key: 'C', text: "Kidneys and liver" },
                { key: 'D', text: "Bones and skin" }
            ],
            correct_option: 'B',
            explanation: "Action potentials and ionic currents generate measurable biomagnetic fields in the heart (magnetocardiography) and brain (magnetoencephalography)."
        },
        {
            id: 27,
            question: "Which medical diagnostic imaging technique utilizes internal biomagnetic fields and external magnetic gradients to obtain high-resolution images of human organs?",
            options: [
                { key: 'A', text: "X-Ray Radiography" },
                { key: 'B', text: "Magnetic Resonance Imaging (MRI)" },
                { key: 'C', text: "Electrocardiogram (ECG)" },
                { key: 'D', text: "Ultrasound" }
            ],
            correct_option: 'B',
            explanation: "MRI uses nuclear magnetic resonance of hydrogen protons in tissue water to generate diagnostic cross-sectional images."
        },
        {
            id: 28,
            question: "What is the voltage and frequency of the domestic AC electric power supplied to households in India?",
            options: [
                { key: 'A', text: "110 V at 60 Hz" },
                { key: 'B', text: "220 V at 50 Hz" },
                { key: 'C', text: "440 V at 50 Hz" },
                { key: 'D', text: "220 V at 100 Hz" }
            ],
            correct_option: 'B',
            explanation: "Standard domestic single-phase alternating current supply in India is 220 V RMS at a frequency of 50 Hz."
        },
        {
            id: 29,
            question: "In a standard domestic 3-wire electrical supply cable, what are the standard insulation colours for the Live, Neutral, and Earth wires in India?",
            options: [
                { key: 'A', text: "Live: Black; Neutral: Red; Earth: Green" },
                { key: 'B', text: "Live: Red; Neutral: Black; Earth: Green" },
                { key: 'C', text: "Live: Green; Neutral: Red; Earth: Black" },
                { key: 'D', text: "Live: White; Neutral: Blue; Earth: Yellow" }
            ],
            correct_option: 'B',
            explanation: "Traditional colour codes in Indian domestic wiring: Live = Red (or brown), Neutral = Black (or blue), Earth = Green (or green/yellow)."
        },
        {
            id: 30,
            question: "What is the potential difference between the Live wire and the Neutral wire in an Indian household supply?",
            options: [
                { key: 'A', text: "0 V" },
                { key: 'B', text: "220 V" },
                { key: 'C', text: "440 V" },
                { key: 'D', text: "110 V" }
            ],
            correct_option: 'B',
            explanation: "The live wire is at 220 V while the neutral wire is grounded at local substations to 0 V, maintaining a 220 V potential difference."
        },
        {
            id: 31,
            question: "What is the safety function of connecting the green-insulated EARTH WIRE to the metal body of appliances like refrigerators, electric irons, and geysers?",
            options: [
                { key: 'A', text: "To increase power consumption" },
                { key: 'B', text: "To provide a low-resistance return path to ground, safely dissipating leakage current and tripping the circuit breaker/fuse to prevent lethal electric shocks" },
                { key: 'C', text: "To cool the appliance" },
                { key: 'D', text: "To generate magnetic fields" }
            ],
            correct_option: 'B',
            explanation: "Earthing clamps the exposed metallic chassis to zero earth potential; any insulation fault diverts live current straight to ground, protecting users from electric shock."
        },
        {
            id: 32,
            question: "What are the two standard domestic circuit ratings commonly installed in houses?",
            options: [
                { key: 'A', text: "1 A and 2 A circuits" },
                { key: 'B', text: "15 A circuit (for high-power appliances like geysers/AC) and 5 A circuit (for low-power lighting/fans)" },
                { key: 'C', text: "50 A and 100 A circuits" },
                { key: 'D', text: "220 A and 440 A circuits" }
            ],
            correct_option: 'B',
            explanation: "Domestic circuits are split into 15 A power lines for heavy heating/cooling loads and 5 A lighting circuits for standard small electronics."
        },
        {
            id: 33,
            question: "What hazardous electrical event occurs when the live wire and neutral wire come into direct contact due to damaged insulation or appliance fault?",
            options: [
                { key: 'A', text: "Open-circuiting" },
                { key: 'B', text: "Short-circuiting (circuit resistance drops to near zero and current surges dramatically)" },
                { key: 'C', text: "Electrolysis" },
                { key: 'D', text: "Earthing" }
            ],
            correct_option: 'B',
            explanation: "A direct live-to-neutral contact bypasses load resistance, causing a sudden massive current spike (short-circuit) that can trigger fires."
        },
        {
            id: 34,
            question: "What causes electrical OVERLOADING in a domestic circuit?",
            options: [
                { key: 'A', text: "Connecting too many heavy appliances to a single socket simultaneously OR sudden voltage spikes OR direct short-circuit" },
                { key: 'B', text: "Using LED bulbs only" },
                { key: 'C', text: "Turning off all appliances" },
                { key: 'D', text: "Proper earthing of sockets" }
            ],
            correct_option: 'A',
            explanation: "Overloading occurs when total connected load exceeds the rated current-carrying capacity of the wiring, overheating cables."
        },
        {
            id: 35,
            question: "At the time of a short-circuit, the electric current in the circuit:",
            options: [
                { key: 'A', text: "Reduces substantially" },
                { key: 'B', text: "Increases heavily" },
                { key: 'C', text: "Does not change" },
                { key: 'D', text: "Varies periodically" }
            ],
            correct_option: 'B',
            explanation: "When resistance drops to almost zero (R → 0), current I = V/R surges to dangerously high levels."
        },
        {
            id: 36,
            question: "An electric oven of power rating 2.0 kW (2000 W) is operated on a 220 V line with a 5 A fuse rating. What will happen?",
            options: [
                { key: 'A', text: "The oven operates normally" },
                { key: 'B', text: "The current drawn is I = 2000/220 = 9.09 A; since 9.09 A > 5 A, the fuse will heat up, melt, and break the circuit to prevent fire" },
                { key: 'C', text: "The voltage will double to 440 V" },
                { key: 'D', text: "The meter will spin backwards" }
            ],
            correct_option: 'B',
            explanation: "The oven draws 9.09 A, exceeding the 5 A fuse threshold; Joule heating melts the fuse element, interrupting power."
        },
        {
            id: 37,
            question: "According to the Clock Face Rule, if the current viewed looking at a circular face of a coil flows in a CLOCKWISE direction, that face behaves as a:",
            options: [
                { key: 'A', text: "North pole (N)" },
                { key: 'B', text: "South pole (S)" },
                { key: 'C', text: "Neutral pole" },
                { key: 'D', text: "Electric positive pole" }
            ],
            correct_option: 'B',
            explanation: "Clockwise current produces magnetic field lines entering the face, characteristic of a South magnetic pole."
        },
        {
            id: 38,
            question: "According to the Clock Face Rule, if the current viewed looking at a circular face of a coil flows in an ANTI-CLOCKWISE direction, that face behaves as a:",
            options: [
                { key: 'A', text: "South pole (S)" },
                { key: 'B', text: "North pole (N)" },
                { key: 'C', text: "Non-magnetic face" },
                { key: 'D', text: "Negative terminal" }
            ],
            correct_option: 'B',
            explanation: "Anti-clockwise current produces field lines emerging outward from the face, characteristic of a North magnetic pole."
        },
        {
            id: 39,
            question: "What is the magnetic field strength at the exact centre of a current-carrying solenoid of length L with n turns per unit length carrying current I?",
            options: [
                { key: 'A', text: "B = 0" },
                { key: 'B', text: "B = μ₀ n I" },
                { key: 'C', text: "B = μ₀ / (n I)" },
                { key: 'D', text: "B = n I / μ₀" }
            ],
            correct_option: 'B',
            explanation: "The uniform axial magnetic field inside an ideal solenoid is B = μ₀ n I."
        },
        {
            id: 40,
            question: "Which material is PERMANENTLY magnetized to make powerful permanent magnets (such as Alnico)?",
            options: [
                { key: 'A', text: "Soft iron" },
                { key: 'B', text: "Hard steel / Carbon steel / Alnico alloy" },
                { key: 'C', text: "Copper" },
                { key: 'D', text: "Zinc" }
            ],
            correct_option: 'B',
            explanation: "Hard ferromagnetic materials (steel, Alnico) possess high retentivity and coercivity, retaining permanent magnetism."
        },
        {
            id: 41,
            question: "Why is soft iron preferred over steel for making the cores of electromagnets and transformer cores?",
            options: [
                { key: 'A', text: "Soft iron is an insulator" },
                { key: 'B', text: "Soft iron acquires high magnetization rapidly when current flows and loses almost all magnetism instantly when current is cut off (low retentivity)" },
                { key: 'C', text: "Soft iron melts at room temperature" },
                { key: 'D', text: "Steel cannot be magnetized" }
            ],
            correct_option: 'B',
            explanation: "Soft iron's narrow hysteresis loop allows instant magnetization and demagnetization without residual hysteresis losses."
        },
        {
            id: 42,
            question: "In a laboratory setup, a suspended aluminium rod AB placed between the poles of a horseshoe magnet is displaced when current flows. If the direction of current is reversed, what happens to the rod?",
            options: [
                { key: 'A', text: "It stops moving" },
                { key: 'B', text: "It is displaced in the EXACT OPPOSITE direction" },
                { key: 'C', text: "It drops vertically downwards" },
                { key: 'D', text: "It begins to rotate 360° continuously" }
            ],
            correct_option: 'B',
            explanation: "Reversing current reverses the Lorentz force vector (F = I L × B), reversing the mechanical displacement direction."
        },
        {
            id: 43,
            question: "In the same suspended rod experiment, what happens if the current is kept unchanged, but the magnetic poles are interchanged (North and South swapped)?",
            options: [
                { key: 'A', text: "The rod stays stationary" },
                { key: 'B', text: "The direction of displacement of the rod is reversed" },
                { key: 'C', text: "The rod catches fire" },
                { key: 'D', text: "The magnetic field disappears" }
            ],
            correct_option: 'B',
            explanation: "Reversing the magnetic field vector B reverses the force vector F."
        },
        {
            id: 44,
            question: "What happens to the displacement of the suspended rod AB if the current through the rod is INCREASED?",
            options: [
                { key: 'A', text: "Displacement decreases" },
                { key: 'B', text: "Displacement increases (greater mechanical force F ∝ I)" },
                { key: 'C', text: "Displacement becomes zero" },
                { key: 'D', text: "Displacement direction rotates 90°" }
            ],
            correct_option: 'B',
            explanation: "Magnetic force is proportional to current (F = ILB); higher current generates greater accelerating force and displacement."
        },
        {
            id: 45,
            question: "What happens to the displacement of the rod AB if a STRONGER horseshoe magnet is used?",
            options: [
                { key: 'A', text: "Displacement decreases" },
                { key: 'B', text: "Displacement increases (force F ∝ B)" },
                { key: 'C', text: "Rod becomes non-magnetic" },
                { key: 'D', text: "Current stops flowing" }
            ],
            correct_option: 'B',
            explanation: "Stronger magnetic flux density B increases the Lorentz force F = ILB."
        },
        {
            id: 46,
            question: "What happens to the displacement of the rod AB if the length (L) of the rod placed in the magnetic field is INCREASED?",
            options: [
                { key: 'A', text: "Displacement decreases to zero" },
                { key: 'B', text: "Displacement increases (force F ∝ L)" },
                { key: 'C', text: "Direction reverses" },
                { key: 'D', text: "Resistance becomes zero" }
            ],
            correct_option: 'B',
            explanation: "The force experienced is proportional to the active length of conductor interacting with the field (F = ILB)."
        },
        {
            id: 47,
            question: "Which of the following common electrical devices operate on the principle of force acting on a current-carrying conductor in a magnetic field?",
            options: [
                { key: 'A', text: "Electric motor, Loudspeaker, Galvanometer, and Ammeter" },
                { key: 'B', text: "Electric toaster and electric iron" },
                { key: 'C', text: "Solar panel only" },
                { key: 'D', text: "Electric kettle only" }
            ],
            correct_option: 'A',
            explanation: "Motors, audio speakers, and analog meters convert magnetic Lorentz force on current coils into mechanical motion."
        },
        {
            id: 48,
            question: "Why is a fuse wire always encased in a cartridge made of non-flammable PORCELAIN or ceramic with metal caps?",
            options: [
                { key: 'A', text: "To make it look attractive" },
                { key: 'B', text: "Porcelain is a high-grade electrical insulator that withstands high arcing temperatures when the fuse melts without catching fire" },
                { key: 'C', text: "To conduct electricity" },
                { key: 'D', text: "To store magnetic charge" }
            ],
            correct_option: 'B',
            explanation: "Porcelain provides thermal insulation and arc suppression, safely containing high-temperature metal vapors during fuse blowouts."
        },
        {
            id: 49,
            question: "What is the magnetic field strength inside a current-carrying solenoid at its ENDS compared to the centre?",
            options: [
                { key: 'A', text: "Equal to the centre" },
                { key: 'B', text: "Exactly half of the magnetic field at the centre (B_end = 1/2 B_centre)" },
                { key: 'C', text: "Zero" },
                { key: 'D', text: "Double the centre" }
            ],
            correct_option: 'B',
            explanation: "At the open ends of a long solenoid, field lines flare outwards, reducing axial field intensity to exactly B = 1/2 μ₀nI."
        },
        {
            id: 50,
            question: "The unit of magnetic field strength named the 'oersted' honors Hans Christian Oersted. In SI units, magnetic field is measured in:",
            options: [
                { key: 'A', text: "Newton (N)" },
                { key: 'B', text: "Tesla (T, where 1 T = 1 N / (A m))" },
                { key: 'C', text: "Coulomb" },
                { key: 'D', text: "Volt" }
            ],
            correct_option: 'B',
            explanation: "The SI unit of magnetic field intensity B is the tesla (T). 1 T = 1 N A⁻¹ m⁻¹."
        },

        // =================================================================
        // TIER 2: MEDIUM QUESTIONS (Q51 - Q60)
        // Two-Step Right Hand / Left Hand Applications & Deflection Calculations
        // =================================================================
        {
            id: 51,
            question: "Imagine you are sitting in a chamber with your back to one wall. An electron beam traveling horizontally from the back wall towards the front wall is deflected strongly to your RIGHT by a magnetic field. What is the direction of the magnetic field?",
            options: [
                { key: 'A', text: "Towards the left" },
                { key: 'B', text: "Vertically downwards (towards the floor)" },
                { key: 'C', text: "Vertically upwards" },
                { key: 'D', text: "Towards the front wall" }
            ],
            correct_option: 'B',
            explanation: "Electron forward ⇒ Conventional current I is backward (towards back wall). Deflection force F is to the Right. Applying Fleming's left-hand rule: Middle finger (Current) pointing back, Thumb (Force) pointing right ⇒ Forefinger (Magnetic field) points vertically downwards."
        },
        {
            id: 52,
            question: "A uniform magnetic field exists vertically downwards into the plane of the paper. A proton enters this field horizontally moving from left to right. What path will the proton follow?",
            options: [
                { key: 'A', text: "It continues in a straight line with increasing speed" },
                { key: 'B', text: "It deflects upwards towards the top of the page in a circular arc with constant speed" },
                { key: 'C', text: "It deflects downwards" },
                { key: 'D', text: "It stops instantly" }
            ],
            correct_option: 'B',
            explanation: "Proton moving right ⇒ Current I = Right. Field B = Into paper. Middle finger Right, Forefinger Into paper ⇒ Thumb points upwards towards the top of page."
        },
        {
            id: 53,
            question: "A circular wire loop is lying horizontally on a table. When viewed from above, electric current flows through the loop in a CLOCKWISE direction. What is the direction of the magnetic field at points INSIDE and OUTSIDE the loop?",
            options: [
                { key: 'A', text: "Inside: Upwards; Outside: Downwards" },
                { key: 'B', text: "Inside: Directed vertically downwards into the table; Outside: Directed vertically upwards out of the table" },
                { key: 'C', text: "Horizontal in both regions" },
                { key: 'D', text: "Zero in both regions" }
            ],
            correct_option: 'B',
            explanation: "By Right-Hand Thumb Rule, curling right fingers clockwise forces the thumb to point downwards into the table inside the loop, and field lines loop back upwards outside the coil."
        },
        {
            id: 54,
            question: "An electrical appliance of power 3.3 kW (3300 W) is operated on a 220 V line. Why is it dangerous to plug this appliance into a 5 A domestic socket?",
            options: [
                { key: 'A', text: "The appliance will produce cold air" },
                { key: 'B', text: "The appliance draws current I = 3300/220 = 15 A; drawing 15 A through a 5 A-rated socket causes severe resistive overheating of the wiring, melting insulation and creating a fire hazard" },
                { key: 'C', text: "The appliance will reverse its rotation" },
                { key: 'D', text: "The supply frequency will drop to 0 Hz" }
            ],
            correct_option: 'B',
            explanation: "Operating a 15 A load on a 5 A socket causes excessive I²R heating, risking electrical fire."
        },
        {
            id: 55,
            question: "A straight wire of length 0.2 m carries a current of 5 A at right angles to a uniform magnetic field of 0.5 T. What is the magnetic force acting on the wire?",
            options: [
                { key: 'A', text: "5.0 N" },
                { key: 'B', text: "0.5 N (F = I L B = 5 × 0.2 × 0.5 = 0.5 N)" },
                { key: 'C', text: "0.05 N" },
                { key: 'D', text: "1.0 N" }
            ],
            correct_option: 'B',
            explanation: "F = I L B sin 90° = 5 A × 0.2 m × 0.5 T = 0.5 N."
        },
        {
            id: 56,
            question: "Two parallel wires carry steady currents in the SAME direction. What is the nature of the magnetic interaction between them?",
            options: [
                { key: 'A', text: "They repel each other" },
                { key: 'B', text: "They attract each other (Ampère's force law: parallel currents attract, anti-parallel currents repel)" },
                { key: 'C', text: "They exert zero force" },
                { key: 'D', text: "They rotate continuously" }
            ],
            correct_option: 'B',
            explanation: "Parallel currents in the same direction generate attractive magnetic forces; opposing anti-parallel currents repel."
        },
        {
            id: 57,
            question: "How does the magnetic field (B) at the centre of a circular loop change if its radius (r) is DOUBLED while keeping the current (I) constant?",
            options: [
                { key: 'A', text: "It doubles" },
                { key: 'B', text: "It is halved (B ∝ 1/r)" },
                { key: 'C', text: "It quadruples" },
                { key: 'D', text: "It remains unchanged" }
            ],
            correct_option: 'B',
            explanation: "At the centre of a circular loop B = μ₀I / (2r); doubling radius r halves the magnetic field strength."
        },
        {
            id: 58,
            question: "Which of the following precautions is ESSENTIAL to prevent electrical overloading in domestic household circuits?",
            options: [
                { key: 'A', text: "Connecting multiple high-power heaters to a single multi-plug extension cord" },
                { key: 'B', text: "Distributing high-wattage appliances across separate 15 A circuits, avoiding multiple loads on single sockets, and installing appropriately rated fuses/MCBs" },
                { key: 'C', text: "Removing all earth wires" },
                { key: 'D', text: "Replacing copper wires with thin iron wires" }
            ],
            correct_option: 'B',
            explanation: "Proper circuit segmentation and fuse protection prevent current overload."
        },
        {
            id: 59,
            question: "A compass needle is placed near a vertical current-carrying wire. If the current in the wire flows downwards (from ceiling to floor), in what direction does the North pole of the compass needle deflect when placed to the EAST of the wire?",
            options: [
                { key: 'A', text: "Towards the East" },
                { key: 'B', text: "Towards the South" },
                { key: 'C', text: "Towards the North" },
                { key: 'D', text: "Towards the West" }
            ],
            correct_option: 'B',
            explanation: "Current downwards ⇒ right hand thumb points down. Looking from above, field lines circulate CLOCKWISE. At the East position, the tangent to a clockwise circle points SOUTH."
        },
        {
            id: 60,
            question: "What is the primary difference between a short-circuit and an overload in a domestic electrical network?",
            options: [
                { key: 'A', text: "A short-circuit is caused by direct zero-resistance contact between live and neutral wires; an overload is caused when total operating wattage of connected appliances exceeds line capacity" },
                { key: 'B', text: "A short-circuit only happens in DC circuits" },
                { key: 'C', text: "Overloading reduces current to zero" },
                { key: 'D', text: "There is no difference between them" }
            ],
            correct_option: 'A',
            explanation: "Short-circuit is an accidental low-impedance path; overload is excessive aggregate operational power demand."
        },

        // =================================================================
        // TIER 3: HARD QUESTIONS (Q61 - Q70)
        // Multi-Step Vector Analysis, Solenoid Design & Magnetic Lorentz Dynamics
        // =================================================================
        {
            id: 61,
            question: "A solenoid of length 0.5 m has 500 turns and carries a current of 2 A. What is the magnetic field intensity (B) at its centre? (Take μ₀ = 4π × 10⁻⁷ T m A⁻¹)",
            options: [
                { key: 'A', text: "1.26 × 10⁻³ T" },
                { key: 'B', text: "2.51 × 10⁻³ T (2.51 mT) [n = 500/0.5 = 1000 turns/m; B = (4π × 10⁻⁷)(1000)(2) ≈ 2.513 × 10⁻³ T]" },
                { key: 'C', text: "5.02 × 10⁻² T" },
                { key: 'D', text: "6.28 × 10⁻⁴ T" }
            ],
            correct_option: 'B',
            explanation: "Turns per metre n = 500 / 0.5 = 1000 m⁻¹. B = μ₀ n I = (4π × 10⁻⁷) × 1000 × 2 = 8π × 10⁻⁴ = 2.513 × 10⁻³ T."
        },
        {
            id: 62,
            question: "An electron with charge 1.6 × 10⁻¹⁹ C moves with a velocity of 3 × 10⁶ m/s perpendicular to a uniform magnetic field of 0.2 T. What is the magnitude of the magnetic force acting on the electron?",
            options: [
                { key: 'A', text: "9.6 × 10⁻¹⁴ N" },
                { key: 'B', text: "9.6 × 10⁻¹⁴ N [F = q v B = (1.6 × 10⁻¹⁹)(3 × 10⁶)(0.2) = 9.6 × 10⁻¹⁴ N]" },
                { key: 'C', text: "4.8 × 10⁻¹³ N" },
                { key: 'D', text: "1.6 × 10⁻¹⁵ N" }
            ],
            correct_option: 'B',
            explanation: "F = q v B sin 90° = 1.6 × 10⁻¹⁹ C × 3 × 10⁶ m/s × 0.2 T = 9.6 × 10⁻¹⁴ N."
        },
        {
            id: 63,
            question: "A horizontal wire carrying a current I is suspended in mid-air in Earth's magnetic field. For magnetic force to balance gravity (acting downwards), what must be the orientation of current and magnetic field?",
            options: [
                { key: 'A', text: "Current West to East, Magnetic field horizontally South to North" },
                { key: 'B', text: "Current East to West, Magnetic field South to North" },
                { key: 'C', text: "Current North to South, Field East to West" },
                { key: 'D', text: "Current vertically upwards" }
            ],
            correct_option: 'A',
            explanation: "By Fleming's left hand rule: Force upwards (Thumb). Field North (Forefinger). Middle finger points East (Current West to East). Force balances downward gravity mg."
        },
        {
            id: 64,
            question: "Why does the magnetic force acting on a moving charged particle in a magnetic field do NO WORK on the particle (Work W = 0)?",
            options: [
                { key: 'A', text: "The particle has no mass" },
                { key: 'B', text: "The magnetic Lorentz force is always perpendicular to the instantaneous velocity vector (F ⊥ v), so the scalar dot product F · v = 0 and power/work is zero" },
                { key: 'C', text: "Magnetic field is not energy" },
                { key: 'D', text: "Particle stops immediately" }
            ],
            correct_option: 'B',
            explanation: "Since force is perpendicular to displacement (dW = F · ds = F ds cos 90° = 0), magnetic fields cannot change kinetic energy, only direction."
        },
        {
            id: 65,
            question: "A wire carrying current I is placed inside a uniform magnetic field. If the angle between the wire and the field is increased from 30° to 90°, by what factor does the magnetic force increase?",
            options: [
                { key: 'A', text: "Increases by 3 times" },
                { key: 'B', text: "Doubles (increases by a factor of 2, since sin 90° / sin 30° = 1 / 0.5 = 2)" },
                { key: 'C', text: "Increases by √3 times" },
                { key: 'D', text: "Remains unchanged" }
            ],
            correct_option: 'B',
            explanation: "F ∝ sin θ. F(90°) / F(30°) = sin 90° / sin 30° = 1 / 0.5 = 2."
        },
        {
            id: 66,
            question: "In a house, ten 60 W bulbs, five 100 W fans, and one 1000 W geyser are operated simultaneously on 220 V. What is the total current drawn from the mains?",
            options: [
                { key: 'A', text: "5.0 A" },
                { key: 'B', text: "9.55 A (Total P = 600 + 500 + 1000 = 2100 W; I = 2100 / 220 ≈ 9.55 A)" },
                { key: 'C', text: "15.0 A" },
                { key: 'D', text: "21.0 A" }
            ],
            correct_option: 'B',
            explanation: "Total Power P = (10 × 60) + (5 × 100) + 1000 = 600 + 500 + 1000 = 2100 W. Current I = 2100 W / 220 V = 9.545 A ≈ 9.55 A."
        },
        {
            id: 67,
            question: "Why does a compass needle placed along the central longitudinal axis of a long current-carrying solenoid align EXACTLY parallel to the axis?",
            options: [
                { key: 'A', text: "The magnetic field is zero on the axis" },
                { key: 'B', text: "The internal magnetic field lines inside a solenoid form uniform, parallel straight lines directed along the longitudinal axis" },
                { key: 'C', text: "The compass needle is shielded from magnetism" },
                { key: 'D', text: "Electric current flows through the compass" }
            ],
            correct_option: 'B',
            explanation: "Inside the solenoid, the axial magnetic field vector B is uniform and oriented parallel to the cylinder axis."
        },
        {
            id: 68,
            question: "Two circular concentric coils of radii r₁ = 5 cm and r₂ = 10 cm carry currents I₁ = 2 A and I₂ = 4 A in OPPOSITE directions. What is the net magnetic field at their common centre?",
            options: [
                { key: 'A', text: "Double the field of coil 1" },
                { key: 'B', text: "Zero (B₁ = μ₀(2)/(2×0.05) = 20μ₀; B₂ = μ₀(4)/(2×0.10) = 20μ₀; since opposite, B_net = 20μ₀ - 20μ₀ = 0)" },
                { key: 'C', text: "40 μ₀" },
                { key: 'D', text: "10 μ₀" }
            ],
            correct_option: 'B',
            explanation: "B₁ = μ₀I₁ / 2r₁ = μ₀(2) / (0.1) = 20μ₀. B₂ = μ₀I₂ / 2r₂ = μ₀(4) / (0.2) = 20μ₀. Opposing directions cancel: B_net = 0."
        },
        {
            id: 69,
            question: "When an electron and a proton enter a uniform magnetic field with the SAME kinetic energy perpendicular to the field, how do their radii of curvature compare (m_p ≈ 1836 m_e)?",
            options: [
                { key: 'A', text: "Both follow identical radii" },
                { key: 'B', text: "Proton follows a much larger radius (r = √(2mK) / (qB), so r_p / r_e = √(m_p / m_e) ≈ √1836 ≈ 42.8 times larger)" },
                { key: 'C', text: "Electron follows a larger radius" },
                { key: 'D', text: "Proton moves in a straight line" }
            ],
            correct_option: 'B',
            explanation: "Radius r = p / qB = √(2mK) / (qB). Since K and q are equal, r ∝ √m; the proton's larger mass gives a ~43× larger radius."
        },
        {
            id: 70,
            question: "Why does an electric current in a metallic wire produce a magnetic field, whereas stationary electrostatic charges produce ONLY an electric field?",
            options: [
                { key: 'A', text: "Stationary charges have no electric field" },
                { key: 'B', text: "Moving charges create a dynamic changing electric flux that generates a circulating magnetic field according to Maxwell-Ampère electrodynamics" },
                { key: 'C', text: "Electrons are tiny magnets when moving" },
                { key: 'D', text: "Metals become cold when current flows" }
            ],
            correct_option: 'B',
            explanation: "Special relativity and Maxwell's equations demonstrate that moving charge elements generate magnetic fields via Lorentz transformations of electrostatic Coulomb fields."
        },

        // =================================================================
        // TIER 4: TRICKY QUESTIONS (Q71 - Q90)
        // Deflection Traps, Neutral Points, Earth Wire Disconnects & Edge Cases
        // =================================================================
        {
            id: 71,
            question: "A compass needle is placed directly UNDER a horizontal wire carrying current from South to North. In which direction will the North pole of the needle deflect (SNOW rule)?",
            options: [
                { key: 'A', text: "Towards the East" },
                { key: 'B', text: "Towards the West (SNOW rule: Current South to North Over wire deflects North pole to West; but wire is OVER needle, so it deflects West)" },
                { key: 'C', text: "Towards the South" },
                { key: 'D', text: "Vertically downwards" }
            ],
            correct_option: 'B',
            explanation: "SNOW Rule: If current flows from South to North in a wire placed Over a needle, the North pole deflects West."
        },
        {
            id: 72,
            question: "If the compass needle in Question 71 is moved and placed directly ABOVE the wire carrying current from South to North, where will its North pole deflect?",
            options: [
                { key: 'A', text: "Towards the West" },
                { key: 'B', text: "Towards the East" },
                { key: 'C', text: "Towards the North" },
                { key: 'D', text: "Towards the South" }
            ],
            correct_option: 'B',
            explanation: "Moving from below the wire to above the wire inverts the tangent to the concentric field line, deflecting the North pole East."
        },
        {
            id: 73,
            question: "What is a 'neutral point' in a magnetic field mapping experiment of a bar magnet placed in Earth's magnetic field?",
            options: [
                { key: 'A', text: "A point where the magnet's temperature is 0°C" },
                { key: 'B', text: "A spatial point where the magnetic field of the bar magnet is EXACTLY equal in magnitude and opposite in direction to Earth's horizontal magnetic field, resulting in ZERO net magnetic field" },
                { key: 'C', text: "The centre of the magnet" },
                { key: 'D', text: "The North pole of the magnet" }
            ],
            correct_option: 'B',
            explanation: "At a neutral point, vector cancellation between the magnet's field and Earth's field yields B_net = 0; a compass needle points in any random direction."
        },
        {
            id: 74,
            question: "What happens to the magnetic field strength inside a solenoid if a soft iron rod is inserted into its hollow core while current is flowing?",
            options: [
                { key: 'A', text: "The field drops to zero" },
                { key: 'B', text: "The magnetic field strength increases tremendously (by hundreds of times due to high relative magnetic permeability μ_r of soft iron)" },
                { key: 'C', text: "The field remains identical" },
                { key: 'D', text: "The current reverses" }
            ],
            correct_option: 'B',
            explanation: "Soft iron core domains align with the solenoid field, multiplying total magnetic flux density B = μ_r μ₀ n I by a factor of μ_r ≈ 1000–5000."
        },
        {
            id: 75,
            question: "If a charged particle is at REST (velocity v = 0) in a strong magnetic field of 10 Tesla, what is the magnetic force acting on it?",
            options: [
                { key: 'A', text: "10 N" },
                { key: 'B', text: "Zero (F = q v B sin θ = 0 when v = 0)" },
                { key: 'C', text: "100 N" },
                { key: 'D', text: "Infinity" }
            ],
            correct_option: 'B',
            explanation: "Magnetic fields exert Lorentz forces ONLY on moving charges; stationary charges experience no magnetic force."
        },
        {
            id: 76,
            question: "A neutron is moving horizontally with a speed of 10⁶ m/s perpendicular to a strong magnetic field. What is the deflection experienced by the neutron?",
            options: [
                { key: 'A', text: "Deflected upwards" },
                { key: 'B', text: "Zero deflection (neutron has zero net electric charge q = 0, so F = qvB = 0)" },
                { key: 'C', text: "Deflected into the page" },
                { key: 'D', text: "Stops instantly" }
            ],
            correct_option: 'B',
            explanation: "Neutrons are electrically neutral (q = 0); hence magnetic Lorentz force F = 0 and their trajectory is completely undeflected."
        },
        {
            id: 77,
            question: "Why is an alternating current (AC) preferred over direct current (DC) for large-scale commercial power generation and long-distance transmission?",
            options: [
                { key: 'A', text: "AC is non-magnetic" },
                { key: 'B', text: "AC voltage can be stepped up to extremely high voltages (using transformers) to minimize I²R transmission losses over long distances, and then stepped down safely for domestic use" },
                { key: 'C', text: "DC cannot flow through wires" },
                { key: 'D', text: "AC uses zero copper" }
            ],
            correct_option: 'B',
            explanation: "Transformers can effortlessly step AC voltages up to hundreds of kilovolts, reducing current and line heating losses."
        },
        {
            id: 78,
            question: "What is the frequency of direct current (DC) supplied by a chemical battery?",
            options: [
                { key: 'A', text: "50 Hz" },
                { key: 'B', text: "0 Hz (DC does not alternate direction with time)" },
                { key: 'C', text: "60 Hz" },
                { key: 'D', text: "100 Hz" }
            ],
            correct_option: 'B',
            explanation: "Direct current flows in a unidirectional steady path; its time period is infinite and frequency is 0 Hz."
        },
        {
            id: 79,
            question: "If a 50 Hz alternating current (AC) supplies an electric bulb, how many times does the current change its direction in ONE SECOND?",
            options: [
                { key: 'A', text: "50 times" },
                { key: 'B', text: "100 times (in each complete cycle of 50 Hz, current reverses direction twice, so 50 × 2 = 100 reversals per second)" },
                { key: 'C', text: "25 times" },
                { key: 'D', text: "200 times" }
            ],
            correct_option: 'B',
            explanation: "Each AC sine wave cycle has one positive half-cycle and one negative half-cycle (2 direction changes). 50 Hz ⇒ 50 × 2 = 100 direction changes/second."
        },
        {
            id: 80,
            question: "In a domestic circuit, what happens if an appliance switch is placed in the NEUTRAL wire instead of the LIVE wire?",
            options: [
                { key: 'A', text: "The appliance cannot be turned on" },
                { key: 'B', text: "When switched off, the appliance stops working, but its internal elements remain at high live potential (220 V), presenting a fatal shock hazard if touched" },
                { key: 'C', text: "The fuse blows instantly" },
                { key: 'D', text: "The voltage drops to zero everywhere" }
            ],
            correct_option: 'B',
            explanation: "Switches must always be in the live wire so that switching off isolates the appliance from 220 V live mains."
        },
        {
            id: 81,
            question: "Why is the earth pin in a standard 3-pin power plug designed to be THICKER and LONGER than the live and neutral pins?",
            options: [
                { key: 'A', text: "To carry more voltage" },
                { key: 'B', text: "Longer pin ensures the appliance is grounded FIRST before live connection is made during insertion, and thicker pin prevents accidental insertion into live sockets" },
                { key: 'C', text: "To reduce resistance of live wire" },
                { key: 'D', text: "It is a manufacturing defect" }
            ],
            correct_option: 'B',
            explanation: "The longer earth pin engages first and disengages last for safety; the thicker diameter prevents misinsertion into narrow live/neutral slots."
        },
        {
            id: 82,
            question: "A current-carrying straight wire is placed in an external magnetic field. Under what angle between wire and field is the force acting on the wire HALF of its maximum value?",
            options: [
                { key: 'A', text: "θ = 45°" },
                { key: 'B', text: "θ = 30° (since sin 30° = 0.5)" },
                { key: 'C', text: "θ = 60°" },
                { key: 'D', text: "θ = 0°" }
            ],
            correct_option: 'B',
            explanation: "F = F_max · sin θ = F_max / 2 ⇒ sin θ = 0.5 ⇒ θ = 30° (or 150°)."
        },
        {
            id: 83,
            question: "Two long parallel conductors carry equal currents in opposite directions (anti-parallel). What is the magnetic field at the exact midpoint between the two wires?",
            options: [
                { key: 'A', text: "Zero" },
                { key: 'B', text: "Twice the magnetic field produced by either wire individually, directed in the same sense" },
                { key: 'C', text: "Four times the field" },
                { key: 'D', text: "Infinitely large" }
            ],
            correct_option: 'B',
            explanation: "By the right-hand thumb rule, opposing currents produce concentric field loops that point in the SAME direction at the midpoint, adding to 2B."
        },
        {
            id: 84,
            question: "Two long parallel conductors carry equal currents in the SAME direction. What is the magnetic field at the exact midpoint between the two wires?",
            options: [
                { key: 'A', text: "Twice the field" },
                { key: 'B', text: "Zero (fields produced by the two identical parallel currents point in opposite directions at the midpoint and cancel out)" },
                { key: 'C', text: "Four times the field" },
                { key: 'D', text: "Infinity" }
            ],
            correct_option: 'B',
            explanation: "Equal parallel currents generate equal and opposite magnetic field vectors at the midpoint: B_net = B₁ - B₂ = 0."
        },
        {
            id: 85,
            question: "Which of the following materials is DIAMAGNETIC and is weakly repelled by a strong magnetic field?",
            options: [
                { key: 'A', text: "Iron" },
                { key: 'B', text: "Bismuth and Copper" },
                { key: 'C', text: "Cobalt" },
                { key: 'D', text: "Nickel" }
            ],
            correct_option: 'B',
            explanation: "Diamagnetic substances (bismuth, copper, water) develop weak opposing induced magnetism and are repelled by external magnetic fields."
        },
        {
            id: 86,
            question: "What is the shape of magnetic field lines produced by a current flowing through a flat circular spiral (Archimedean spiral)?",
            options: [
                { key: 'A', text: "Concentric spheres" },
                { key: 'B', text: "Concentric curves that reinforce at the core to produce a strong axial field" },
                { key: 'C', text: "Purely radial lines" },
                { key: 'D', text: "Zero field" }
            ],
            correct_option: 'B',
            explanation: "All turns of the flat spiral carry current in the same sense, superimposing magnetic field flux along the central perpendicular axis."
        },
        {
            id: 87,
            question: "A positive charge (+q) is moving vertically UPWARDS. A magnetic field is applied horizontally towards the NORTH. In which direction is the positive charge deflected?",
            options: [
                { key: 'A', text: "Towards the East" },
                { key: 'B', text: "Towards the West" },
                { key: 'C', text: "Towards the South" },
                { key: 'D', text: "Downwards" }
            ],
            correct_option: 'B',
            explanation: "Velocity/Current = Upwards (Middle finger). Field = North (Forefinger). Applying Fleming's left hand rule gives Thumb pointing WEST."
        },
        {
            id: 88,
            question: "If the positive charge in Question 87 were replaced by an electron (-e) moving vertically UPWARDS in the same Northward magnetic field, where would it deflect?",
            options: [
                { key: 'A', text: "Towards the West" },
                { key: 'B', text: "Towards the East" },
                { key: 'C', text: "Towards the North" },
                { key: 'D', text: "Towards the South" }
            ],
            correct_option: 'B',
            explanation: "For an electron, conventional current is Downwards (opposite to velocity). Reversing current inverts force from West to EAST."
        },
        {
            id: 89,
            question: "What is the direction of magnetic field lines around a straight vertical lightning bolt carrying electrons DOWNWARDS from a cloud to the ground?",
            options: [
                { key: 'A', text: "Clockwise when viewed from above" },
                { key: 'B', text: "Anti-clockwise when viewed from above (since downward electron flow means conventional current is UPWARDS)" },
                { key: 'C', text: "Vertically downwards" },
                { key: 'D', text: "Radial outward" }
            ],
            correct_option: 'B',
            explanation: "Electrons moving down ⇒ Conventional current is UPWARDS. By Right-Hand Thumb Rule with thumb pointing up, fingers curl ANTI-CLOCKWISE when viewed from above."
        },
        {
            id: 90,
            question: "Why do high-voltage transmission lines hum with a low acoustic buzzing sound (mains hum)?",
            options: [
                { key: 'A', text: "Electrons collide with air molecules" },
                { key: 'B', text: "Electromagnetic alternating forces at 100 Hz (twice the 50 Hz mains frequency) vibrate conductors and transformer laminations via magnetostriction and air ionization (corona discharge)" },
                { key: 'C', text: "Wind friction only" },
                { key: 'D', text: "Voltage drops to zero" }
            ],
            correct_option: 'B',
            explanation: "Alternating magnetic forces (proportional to I² at 2f = 100 Hz) cause magnetostrictive mechanical vibrations in transformers and line hardware."
        },

        // =================================================================
        // TIER 5: VERY VERY HARD QUESTIONS (Q91 - Q100)
        // Advanced Relativistic Dynamics, Multi-Conductor Systems & Torque Analysis
        // =================================================================
        {
            id: 91,
            question: "A rectangular current-carrying coil of dimensions a × b with N turns carrying current I is placed in a uniform magnetic field B parallel to the plane of the coil. What is the deflecting torque (τ) acting on the coil?",
            options: [
                { key: 'A', text: "τ = 0" },
                { key: 'B', text: "τ = N I A B (where Area A = a × b)" },
                { key: 'C', text: "τ = N I B / A" },
                { key: 'D', text: "τ = N I² A B" }
            ],
            correct_option: 'B',
            explanation: "Torque on a planar coil is τ = N I A B sin θ; when field is parallel to plane of coil (θ = 90° between normal and field), maximum torque is τ = NIAB."
        },
        {
            id: 92,
            question: "A proton and an alpha particle (charge q_α = 2e, mass m_α = 4m_p) enter a uniform magnetic field with the SAME VELOCITY perpendicular to the field. What is the ratio of their orbital time periods (T_p : T_α)?",
            options: [
                { key: 'A', text: "1 : 1" },
                { key: 'B', text: "1 : 2 [T = (2πm) / (qB) ⇒ T_p/T_α = (m_p/m_α) × (q_α/q_p) = (1/4) × (2/1) = 1/2]" },
                { key: 'C', text: "2 : 1" },
                { key: 'D', text: "1 : 4" }
            ],
            correct_option: 'B',
            explanation: "Orbital period T = 2πm / (qB). T_p / T_α = (m_p / (4m_p)) × (2e / e) = 2/4 = 1/2 (1 : 2)."
        },
        {
            id: 93,
            question: "An electric transmission cable of radius R carries a uniformly distributed steady current I. What is the magnetic field inside the wire at a radial distance r < R from the axis (Ampère's Circuital Law)?",
            options: [
                { key: 'A', text: "B = 0" },
                { key: 'B', text: "B = (μ₀ I r) / (2π R²) (magnetic field increases linearly from zero at the center to maximum at the surface)" },
                { key: 'C', text: "B = μ₀ I / (2π r)" },
                { key: 'D', text: "B = μ₀ I R / (2π r²)" }
            ],
            correct_option: 'B',
            explanation: "By Ampère's law: ∮ B · dl = μ₀ I_enclosed ⇒ B(2πr) = μ₀ I(πr²/πR²) ⇒ B = (μ₀ I r) / (2πR²)."
        },
        {
            id: 94,
            question: "A particle with charge q and mass m enters a crossed electric field E (vertical) and magnetic field B (horizontal) such that both fields and velocity v are mutually perpendicular. For what velocity v will the particle pass through without any deflection (Velocity Selector)?",
            options: [
                { key: 'A', text: "v = B / E" },
                { key: 'B', text: "v = E / B (electric force qE balances magnetic Lorentz force qvB)" },
                { key: 'C', text: "v = E × B" },
                { key: 'D', text: "v = √(E / B)" }
            ],
            correct_option: 'B',
            explanation: "For zero net deflection, F_net = qE - qvB = 0 ⇒ qvB = qE ⇒ v = E / B."
        },
        {
            id: 95,
            question: "Two infinitely long straight parallel wires separated by distance d = 10 cm carry currents I₁ = 10 A and I₂ = 20 A in the same direction. What is the magnetic force per unit length (F/L) exerted between the wires?",
            options: [
                { key: 'A', text: "4 × 10⁻⁴ N/m (attractive)" },
                { key: 'B', text: "4 × 10⁻⁴ N/m (attractive) [F/L = (μ₀ I₁ I₂) / (2π d) = (4π × 10⁻⁷ × 10 × 20) / (2π × 0.1) = 4 × 10⁻⁴ N/m]" },
                { key: 'C', text: "2 × 10⁻³ N/m (repulsive)" },
                { key: 'D', text: "8 × 10⁻⁵ N/m" }
            ],
            correct_option: 'B',
            explanation: "F/L = (μ₀ I₁ I₂) / (2π d) = (2 × 10⁻⁷ × 10 × 20) / 0.1 = 4 × 10⁻⁴ N/m (attractive for parallel currents)."
        },
        {
            id: 96,
            question: "A current I flows through a flexible circular loop of wire placed in a uniform perpendicular magnetic field. Why does the loop expand into a perfect CIRCLE?",
            options: [
                { key: 'A', text: "Thermal expansion" },
                { key: 'B', text: "Magnetic Lorentz forces acting on every infinitesimal current element point radially outwards (dF = I dl × B), maximizing enclosed area and magnetic flux" },
                { key: 'C', text: "Gravity pulls it into a circle" },
                { key: 'D', text: "Electrons push each other by Coulomb force only" }
            ],
            correct_option: 'B',
            explanation: "Radial Lorentz outward forces expand the loop into a circular geometry to maximize enclosed magnetic flux."
        },
        {
            id: 97,
            question: "A long straight solenoid of radius R and n turns/m carries a current I. What is the magnetic field intensity B at an axial distance far OUTSIDE the solenoid?",
            options: [
                { key: 'A', text: "B = μ₀ n I" },
                { key: 'B', text: "B ≈ 0 (external magnetic field of an infinitely long tightly wound solenoid is practically zero)" },
                { key: 'C', text: "B = 2 μ₀ n I" },
                { key: 'D', text: "B = μ₀ I / (2π R)" }
            ],
            correct_option: 'B',
            explanation: "For an ideal long solenoid, exterior field contributions from opposite sides cancel out, resulting in B_ext ≈ 0."
        },
        {
            id: 98,
            question: "In a domestic circuit with a supply voltage of 220 V and a 15 A main fuse, what is the MAXIMUM number of 750 W electric irons that can be operated simultaneously without blowing the fuse?",
            options: [
                { key: 'A', text: "5 irons" },
                { key: 'B', text: "4 irons [P_max = 220 × 15 = 3300 W; n = 3300 / 750 = 4.4 ⇒ maximum 4 irons]" },
                { key: 'C', text: "3 irons" },
                { key: 'D', text: "6 irons" }
            ],
            correct_option: 'B',
            explanation: "Total safe power = 220 V × 15 A = 3300 W. Number of irons = 3300 / 750 = 4.4 ⇒ max 4 full irons (3000 W = 13.6 A < 15 A; 5 irons would draw 17.0 A and blow the fuse)."
        },
        {
            id: 99,
            question: "Why does the earth wire in a domestic 3-pin plug carry ZERO current under normal operating conditions, but carry a massive current during an insulation failure?",
            options: [
                { key: 'A', text: "Earth wire is broken normally" },
                { key: 'B', text: "Under normal conditions, the metal chassis is isolated from the live supply (open circuit); during a fault, live conductor touches the chassis, completing a direct low-resistance loop to ground" },
                { key: 'C', text: "Earth wire generates voltage" },
                { key: 'D', text: "Earth wire only conducts AC" }
            ],
            correct_option: 'B',
            explanation: "The earth wire is an inactive safety conductor that only conducts when an internal fault bridges the 220 V live wire to the appliance frame."
        },
        {
            id: 100,
            question: "A toroidal solenoid (toroid) of mean radius R and total turns N carries current I. What is the magnetic field inside the core of the toroid?",
            options: [
                { key: 'A', text: "B = (μ₀ N I) / (2π R)" },
                { key: 'B', text: "B = (μ₀ N I) / (2π R) [where n = N / (2πR) is turns per unit circumference]" },
                { key: 'C', text: "B = 0" },
                { key: 'D', text: "B = μ₀ N I R" }
            ],
            correct_option: 'B',
            explanation: "By Ampère's circuital law along the circular core path: ∮ B · dl = B(2πR) = μ₀ N I ⇒ B = (μ₀ N I) / (2πR)."
        }
    ]
};
