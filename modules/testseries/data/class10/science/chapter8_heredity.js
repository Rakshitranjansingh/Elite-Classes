/* =========================================================================
   ELITE CLASSES — CLASS 10 SCIENCE TEST SERIES
   Chapter 8: Heredity (100 Questions Master Assessment)
   NCERT Standard Assessment with Proper Scientific Typography & Terminology
   Difficulty Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10ScienceChapter8FullBank = {
    id: 'ts_c10_sci_ch8',
    title: 'Chapter 8: Heredity Assessment',
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
        // Direct NCERT Concepts, Definitions, Mendelian Ratios & Sex Determination
        // =================================================================
        {
            id: 1,
            question: "The transmission of genetically determined characters and traits from parents to their offspring is known as:",
            options: [
                { key: 'A', text: "Respiration" },
                { key: 'B', text: "Heredity" },
                { key: 'C', text: "Translocation" },
                { key: 'D', text: "Excretion" }
            ],
            correct_option: 'B',
            explanation: "Heredity refers to the biological mechanism by which genetic characteristics and traits are faithfully transmitted across successive generations."
        },
        {
            id: 2,
            question: "Who is universally regarded as the 'Father of Genetics' for his pioneering mathematical hybridization experiments on garden peas?",
            options: [
                { key: 'A', text: "Charles Darwin" },
                { key: 'B', text: "Gregor Johann Mendel" },
                { key: 'C', text: "Louis Pasteur" },
                { key: 'D', text: "Robert Hooke" }
            ],
            correct_option: 'B',
            explanation: "Gregor Johann Mendel (1822–1884) formulated the fundamental laws of inheritance through statistical hybridization crosses in garden peas."
        },
        {
            id: 3,
            question: "Which plant species was chosen by Gregor Mendel for his classic hybridization experiments on the inheritance of traits?",
            options: [
                { key: 'A', text: "Sweet pea (Lathyrus odoratus)" },
                { key: 'B', text: "Garden pea (Pisum sativum)" },
                { key: 'C', text: "Mustard (Brassica nigra)" },
                { key: 'D', text: "Sunflower (Helianthus annuus)" }
            ],
            correct_option: 'B',
            explanation: "Mendel selected the garden pea (Pisum sativum) due to its well-defined contrasting traits, short life cycle, and bisexual self-pollinating flowers."
        },
        {
            id: 4,
            question: "In an asexually reproducing population, if trait A is present in 10% of individuals and trait B is present in 60% of individuals, which trait is likely to have arisen EARLIER in evolutionary time?",
            options: [
                { key: 'A', text: "Trait A" },
                { key: 'B', text: "Trait B" },
                { key: 'C', text: "Both arose at the exact same moment" },
                { key: 'D', text: "Neither trait is heritable" }
            ],
            correct_option: 'B',
            explanation: "In asexual lineages with clonal replication, traits arising earlier accumulate and replicate over more generations, establishing a higher population frequency (60%)."
        },
        {
            id: 5,
            question: "In human populations, which earlobe attachment phenotype represents the dominant allele variant?",
            options: [
                { key: 'A', text: "Attached earlobes" },
                { key: 'B', text: "Free (unattached) earlobes" },
                { key: 'C', text: "Pointed earlobes" },
                { key: 'D', text: "Absent earlobes" }
            ],
            correct_option: 'B',
            explanation: "Free (hanging) earlobes are governed by a dominant autosomal allele, whereas attached earlobes represent a homozygous recessive condition."
        },
        {
            id: 6,
            question: "When Mendel crossed a pure-breeding tall pea plant (TT) with a pure-breeding short dwarf pea plant (tt), what was the phenotype of the F1 generation progeny?",
            options: [
                { key: 'A', text: "50% Tall and 50% Short" },
                { key: 'B', text: "100% Tall plants (no medium-height plants)" },
                { key: 'C', text: "100% Short plants" },
                { key: 'D', text: "100% Medium-height plants" }
            ],
            correct_option: 'B',
            explanation: "All F1 plants were phenotypically tall (Tt genotype) because the dominant allele 'T' completely masks the recessive allele 't'."
        },
        {
            id: 7,
            question: "What is the phenotypic ratio of tall to dwarf plants obtained in the F2 generation of a Mendelian monohybrid cross (Tt × Tt)?",
            options: [
                { key: 'A', text: "1 : 1" },
                { key: 'B', text: "3 : 1 (3 Tall : 1 Dwarf)" },
                { key: 'C', text: "9 : 3 : 3 : 1" },
                { key: 'D', text: "1 : 2 : 1" }
            ],
            correct_option: 'B',
            explanation: "In the F2 generation of a monohybrid cross, 75% of progeny exhibit the dominant tall phenotype and 25% exhibit the dwarf phenotype (3:1 ratio)."
        },
        {
            id: 8,
            question: "What is the genotypic ratio of TT : Tt : tt in the F2 generation of a Mendelian monohybrid cross?",
            options: [
                { key: 'A', text: "3 : 1" },
                { key: 'B', text: "1 : 2 : 1 (1 TT : 2 Tt : 1 tt)" },
                { key: 'C', text: "9 : 3 : 3 : 1" },
                { key: 'D', text: "2 : 1 : 1" }
            ],
            correct_option: 'B',
            explanation: "Self-pollination of heterozygous F1 plants (Tt × Tt) yields 25% homozygous tall (TT), 50% heterozygous tall (Tt), and 25% homozygous dwarf (tt) (1:2:1)."
        },
        {
            id: 9,
            question: "A cross between pea plants involving TWO pairs of contrasting characters (such as seed shape and seed colour) is termed a:",
            options: [
                { key: 'A', text: "Monohybrid cross" },
                { key: 'B', text: "Dihybrid cross" },
                { key: 'C', text: "Test cross" },
                { key: 'D', text: "Reciprocal cross" }
            ],
            correct_option: 'B',
            explanation: "A dihybrid cross tracks the simultaneous inheritance and assortment of two distinct gene pairs controlling two different traits."
        },
        {
            id: 10,
            question: "In Mendel's dihybrid cross between a pure round yellow-seeded pea plant (RRYY) and a wrinkled green-seeded pea plant (rryy), what was the phenotype of all F1 offspring?",
            options: [
                { key: 'A', text: "Wrinkled and green seeds" },
                { key: 'B', text: "Round and yellow seeds (RrYy)" },
                { key: 'C', text: "Round and green seeds" },
                { key: 'D', text: "Wrinkled and yellow seeds" }
            ],
            correct_option: 'B',
            explanation: "All F1 individuals were heterozygous Round Yellow (RrYy), expressing both dominant traits (Round 'R' and Yellow 'Y')."
        },
        {
            id: 11,
            question: "What is the classic Mendelian phenotypic dihybrid ratio observed in the F2 generation following self-pollination of RrYy plants?",
            options: [
                { key: 'A', text: "1 : 1 : 1 : 1" },
                { key: 'B', text: "9 : 3 : 3 : 1" },
                { key: 'C', text: "3 : 1" },
                { key: 'D', text: "1 : 2 : 1" }
            ],
            correct_option: 'B',
            explanation: "The F2 dihybrid phenotypic ratio is 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1)."
        },
        {
            id: 12,
            question: "Out of a total of 556 seeds harvested by Mendel in an F2 dihybrid cross, how many seeds exhibited the double recessive 'wrinkled green' phenotype?",
            options: [
                { key: 'A', text: "315" },
                { key: 'B', text: "108" },
                { key: 'C', text: "101" },
                { key: 'D', text: "32 (approximately 1/16 of total)" }
            ],
            correct_option: 'D',
            explanation: "In Mendel's dihybrid data: 315 Round Yellow, 108 Round Green, 101 Wrinkled Yellow, and exactly 32 Wrinkled Green (32/556 ≈ 1/16)."
        },
        {
            id: 13,
            question: "Which Mendelian principle states that alleles of two or more different gene pairs assort independently of one another during gamete formation?",
            options: [
                { key: 'A', text: "Law of Dominance" },
                { key: 'B', text: "Law of Segregation" },
                { key: 'C', text: "Law of Independent Assortment" },
                { key: 'D', text: "Law of Acquired Traits" }
            ],
            correct_option: 'C',
            explanation: "The Law of Independent Assortment states that factors (genes) for different traits segregate independently when gametes are formed."
        },
        {
            id: 14,
            question: "A specific segment of cellular DNA that contains coded nucleotide information for synthesizing one particular protein is called a:",
            options: [
                { key: 'A', text: "Chromosome" },
                { key: 'B', text: "Gene" },
                { key: 'C', text: "Ribosome" },
                { key: 'D', text: "Centromere" }
            ],
            correct_option: 'B',
            explanation: "A gene is a functional unit of heredity consisting of a defined DNA sequence encoding a specific polypeptide or protein."
        },
        {
            id: 15,
            question: "How do genes biologically determine physical characteristics (like plant height) in living cells?",
            options: [
                { key: 'A', text: "By changing blood color" },
                { key: 'B', text: "By encoding enzymes that control the rate and synthesis of specific hormones (e.g. plant growth hormones)" },
                { key: 'C', text: "By physical magnetic attraction" },
                { key: 'D', text: "By generating electricity" }
            ],
            correct_option: 'B',
            explanation: "Genes encode functional enzyme proteins: an efficient enzyme produces abundant growth hormone (tall plant); a mutated defective enzyme yields deficient hormone (dwarf plant)."
        },
        {
            id: 16,
            question: "How many pairs of chromosomes are normally present in the somatic (body) cells of a human being?",
            options: [
                { key: 'A', text: "20 pairs (40 chromosomes)" },
                { key: 'B', text: "23 pairs (46 chromosomes)" },
                { key: 'C', text: "46 pairs (92 chromosomes)" },
                { key: 'D', text: "12 pairs (24 chromosomes)" }
            ],
            correct_option: 'B',
            explanation: "Human diploid somatic cells contain 23 pairs of chromosomes (46 chromosomes total: 22 pairs of autosomes + 1 pair of sex chromosomes)."
        },
        {
            id: 17,
            question: "Out of the 23 chromosome pairs in human cells, how many pairs are autosomes (chromosomes that are perfectly matched and identical in males and females)?",
            options: [
                { key: 'A', text: "1 pair" },
                { key: 'B', text: "22 pairs" },
                { key: 'C', text: "23 pairs" },
                { key: 'D', text: "44 pairs" }
            ],
            correct_option: 'B',
            explanation: "Humans have 22 pairs of autosomes controlling non-sex-linked somatic traits, identical in both sexes."
        },
        {
            id: 18,
            question: "What is the sex chromosome combination present in normal human biological females?",
            options: [
                { key: 'A', text: "XY" },
                { key: 'B', text: "XX" },
                { key: 'C', text: "YY" },
                { key: 'D', text: "XO" }
            ],
            correct_option: 'B',
            explanation: "Human females possess two homomorphic, normal-sized X sex chromosomes (44 + XX)."
        },
        {
            id: 19,
            question: "What is the sex chromosome combination present in normal human biological males?",
            options: [
                { key: 'A', text: "XX" },
                { key: 'B', text: "XY" },
                { key: 'C', text: "YY" },
                { key: 'D', text: "XXX" }
            ],
            correct_option: 'B',
            explanation: "Human males possess a heteromorphic mismatched pair consisting of one normal-sized X chromosome and one short Y chromosome (44 + XY)."
        },
        {
            id: 20,
            question: "Which parent's gamete genetically determines the sex of the newborn child in human beings?",
            options: [
                { key: 'A', text: "Mother's ovum" },
                { key: 'B', text: "Father's sperm" },
                { key: 'C', text: "Both parents equally determine sex" },
                { key: 'D', text: "Environmental temperature" }
            ],
            correct_option: 'B',
            explanation: "All maternal ova carry an X chromosome. The father produces 50% X-bearing and 50% Y-bearing sperms; fertilization by a Y-sperm yields a boy, and by an X-sperm yields a girl."
        },
        {
            id: 21,
            question: "What is the statistical probability of having a male child versus a female child in every human pregnancy?",
            options: [
                { key: 'A', text: "3 : 1" },
                { key: 'B', text: "1 : 1 (50% chance of a boy and 50% chance of a girl)" },
                { key: 'C', text: "9 : 3" },
                { key: 'D', text: "100% boy" }
            ],
            correct_option: 'B',
            explanation: "Since X-bearing and Y-bearing sperms are produced in exactly equal 50:50 proportions, each conception carries an equal 50% probability of being male or female."
        },
        {
            id: 22,
            question: "In which of the following animals is the sex of the developing offspring determined by environmental incubation temperature rather than sex chromosomes?",
            options: [
                { key: 'A', text: "Human beings" },
                { key: 'B', text: "Certain reptiles (e.g. lizards, turtles, crocodiles)" },
                { key: 'C', text: "Pea plants" },
                { key: 'D', text: "Drosophila fruit flies" }
            ],
            correct_option: 'B',
            explanation: "In several reptiles, temperature-dependent sex determination (TSD) dictates whether embryos develop into males or females based on clutch incubation temperature."
        },
        {
            id: 23,
            question: "In which of the following animals can individuals naturally change their sex during their lifetime, proving sex is not genetically fixed?",
            options: [
                { key: 'A', text: "Snails" },
                { key: 'B', text: "Dogs" },
                { key: 'C', text: "Pea plants" },
                { key: 'D', text: "Humans" }
            ],
            correct_option: 'A',
            explanation: "Snails can switch sex based on developmental or environmental cues, demonstrating that sex determination in them is non-genetic."
        },
        {
            id: 24,
            question: "An organism with two identical alleles for a given gene locus (such as TT or tt) is described as:",
            options: [
                { key: 'A', text: "Heterozygous" },
                { key: 'B', text: "Homozygous" },
                { key: 'C', text: "Hemizygous" },
                { key: 'D', text: "Polyploid" }
            ],
            correct_option: 'B',
            explanation: "Homozygous organisms possess identical alleles for a gene locus (homozygous dominant TT or homozygous recessive tt)."
        },
        {
            id: 25,
            question: "An organism possessing two different alleles for a given gene (such as Tt) is described as:",
            options: [
                { key: 'A', text: "Homozygous" },
                { key: 'B', text: "Heterozygous (Hybrid)" },
                { key: 'C', text: "Aneuploid" },
                { key: 'D', text: "Haploid" }
            ],
            correct_option: 'B',
            explanation: "Heterozygous individuals have two distinct alleles for a particular locus (e.g. Tt, Rr)."
        },
        {
            id: 26,
            question: "The observable physical or physiological expression of a genetic trait (such as 'Tall' or 'Short') is termed its:",
            options: [
                { key: 'A', text: "Genotype" },
                { key: 'B', text: "Phenotype" },
                { key: 'C', text: "Karyotype" },
                { key: 'D', text: "Gamete" }
            ],
            correct_option: 'B',
            explanation: "Phenotype is the observable structural or functional manifestation of an organism's genotype."
        },
        {
            id: 27,
            question: "The underlying genetic and allelic constitution of an organism (such as TT, Tt, or tt) is termed its:",
            options: [
                { key: 'A', text: "Phenotype" },
                { key: 'B', text: "Genotype" },
                { key: 'C', text: "Serotype" },
                { key: 'D', text: "Ecotype" }
            ],
            correct_option: 'B',
            explanation: "Genotype refers to the specific allelic genetic makeup of an organism for a given gene locus."
        },
        {
            id: 28,
            question: "Which of the following represents a homozygous recessive genotype for seed shape in pea plants?",
            options: [
                { key: 'A', text: "RR" },
                { key: 'B', text: "Rr" },
                { key: 'C', text: "rr (Wrinkled seeds)" },
                { key: 'D', text: "YY" }
            ],
            correct_option: 'C',
            explanation: "'rr' represents the homozygous recessive genotype expressing the wrinkled seed phenotype."
        },
        {
            id: 29,
            question: "In pea plants, what flower colours did Mendel identify as dominant and recessive, respectively?",
            options: [
                { key: 'A', text: "White (dominant) and Violet (recessive)" },
                { key: 'B', text: "Violet (dominant) and White (recessive)" },
                { key: 'C', text: "Yellow (dominant) and Red (recessive)" },
                { key: 'D', text: "Green (dominant) and Blue (recessive)" }
            ],
            correct_option: 'B',
            explanation: "Violet flower colour is dominant (W / V), and white flower colour is recessive (w / v)."
        },
        {
            id: 30,
            question: "Why do asexually propagated sugarcane fields show very little variation among individual plants?",
            options: [
                { key: 'A', text: "Sugarcane plants have no DNA" },
                { key: 'B', text: "They are grown by vegetative cloning involving mitotic division from a single parent with negligible DNA copying inaccuracies" },
                { key: 'C', text: "Sugarcane produces too many seeds" },
                { key: 'D', text: "They reproduce by multiple fission" }
            ],
            correct_option: 'B',
            explanation: "Sugarcane is vegetatively propagated through stem setts; progeny inherit an exact duplicate of the parental genome without meiotic assortment."
        },
        {
            id: 31,
            question: "In a human cell, how many total chromosomes are present in a mature sperm cell or unfertilised ovum (gamete)?",
            options: [
                { key: 'A', text: "46 chromosomes" },
                { key: 'B', text: "23 chromosomes (Haploid, n)" },
                { key: 'C', text: "92 chromosomes" },
                { key: 'D', text: "12 chromosomes" }
            ],
            correct_option: 'B',
            explanation: "Human gametes are haploid (n = 23), containing 22 autosomes plus 1 sex chromosome (X or Y)."
        },
        {
            id: 32,
            question: "What restores the normal diploid chromosome number (46 chromosomes) in the newly formed human zygote?",
            options: [
                { key: 'A', text: "Mitosis" },
                { key: 'B', text: "Fertilisation (Syngamy of haploid sperm n=23 and haploid ovum n=23)" },
                { key: 'C', text: "Meiosis" },
                { key: 'D', text: "Transpiration" }
            ],
            correct_option: 'B',
            explanation: "Syngamy unites paternal haploid (n=23) and maternal haploid (n=23) pronuclei, restoring the somatic diploid (2n=46) state."
        },
        {
            id: 33,
            question: "What term is given to alternative forms or variants of a single gene occupying the same locus on homologous chromosomes?",
            options: [
                { key: 'A', text: "Enzymes" },
                { key: 'B', text: "Alleles (Allelomorphs)" },
                { key: 'C', text: "Centrioles" },
                { key: 'D', text: "Plasmids" }
            ],
            correct_option: 'B',
            explanation: "Alleles are alternative nucleotide variants of a gene (e.g., 'T' for tallness and 't' for dwarfness) governing contrasting traits."
        },
        {
            id: 34,
            question: "Why did Mendel's F1 generation plants fail to show any intermediate or blended traits (such as medium-height stems)?",
            options: [
                { key: 'A', text: "Traits blend only in the roots" },
                { key: 'B', text: "Inherited factors (genes) are discrete particulate units that maintain their integrity without blending, with the dominant allele fully masking the recessive one" },
                { key: 'C', text: "Dwarf genes were destroyed permanently" },
                { key: 'D', text: "Pea plants cannot grow to medium height" }
            ],
            correct_option: 'B',
            explanation: "Mendelian inheritance is particulate: genes do not blend or dilute; in heterozygotes, dominant alleles are fully expressed while recessive alleles remain intact."
        },
        {
            id: 35,
            question: "A man with blood group A marries a woman with blood group O, and their daughter has blood group O. What are the genotypes of the father and mother?",
            options: [
                { key: 'A', text: "Father: IA IA; Mother: ii" },
                { key: 'B', text: "Father: IA i (Heterozygous); Mother: ii (Homozygous recessive)" },
                { key: 'C', text: "Father: ii; Mother: IA IA" },
                { key: 'D', text: "Father: IA IB; Mother: ii" }
            ],
            correct_option: 'B',
            explanation: "Blood group O requires the homozygous recessive genotype 'ii'. The daughter inherits one 'i' from the mother (ii) and must inherit the second 'i' from the father, proving the father is heterozygous IA i."
        },
        {
            id: 36,
            question: "Which of the following blood group alleles in the human ABO system are co-dominant to each other, and dominant over allele 'i'?",
            options: [
                { key: 'A', text: "IA and IB" },
                { key: 'B', text: "IA and i" },
                { key: 'C', text: "IB and i" },
                { key: 'D', text: "Only allele i" }
            ],
            correct_option: 'A',
            explanation: "Alleles IA and IB are codominant (producing blood group AB in IA IB individuals) and both are completely dominant over recessive allele i."
        },
        {
            id: 37,
            question: "In human males, why does the Y chromosome appear distinctly smaller in size under a microscope compared to the X chromosome?",
            options: [
                { key: 'A', text: "It has no genes" },
                { key: 'B', text: "The Y chromosome is structurally shorter, containing fewer genes than the much larger X chromosome" },
                { key: 'C', text: "It is made of RNA" },
                { key: 'D', text: "It shrinks with age" }
            ],
            correct_option: 'B',
            explanation: "The human Y chromosome is a smaller acrocentric chromosome with significantly fewer genes compared to the large submetacentric X chromosome."
        },
        {
            id: 38,
            question: "How many types of genetically distinct gametes can be produced by a heterozygous tall pea plant (Tt)?",
            options: [
                { key: 'A', text: "1 type (Tt)" },
                { key: 'B', text: "2 types (50% T and 50% t)" },
                { key: 'C', text: "4 types (TT, Tt, tT, tt)" },
                { key: 'D', text: "3 types" }
            ],
            correct_option: 'B',
            explanation: "According to the Law of Segregation, heterozygous Tt plants produce two equal classes of gametes: 50% with allele 'T' and 50% with allele 't'."
        },
        {
            id: 39,
            question: "How many types of genetically distinct gametes are produced by a dihybrid F1 pea plant with genotype RrYy?",
            options: [
                { key: 'A', text: "2 types (RY and ry)" },
                { key: 'B', text: "4 types (RY, Ry, rY, ry in 1:1:1:1 ratio)" },
                { key: 'C', text: "16 types" },
                { key: 'D', text: "8 types" }
            ],
            correct_option: 'B',
            explanation: "Due to independent assortment of R/r and Y/y, the dihybrid forms 4 types of gametes in equal 25% frequencies: RY, Ry, rY, and ry."
        },
        {
            id: 40,
            question: "Which of the following is an example of an acquired trait that CANNOT be inherited by biological offspring?",
            options: [
                { key: 'A', text: "Attached earlobe" },
                { key: 'B', text: "Loss of a finger in an accident / Muscle enlargement from gym weightlifting" },
                { key: 'C', text: "Eye colour" },
                { key: 'D', text: "Blood group" }
            ],
            correct_option: 'B',
            explanation: "Acquired somatic traits (scar tissue, muscle hypertrophy, weight loss) alter non-reproductive somatic cells without modifying germline DNA, and cannot be inherited."
        },
        {
            id: 41,
            question: "Why do changes in non-reproductive somatic body tissues (such as weight loss during starvation) fail to be passed on to future generations?",
            options: [
                { key: 'A', text: "Somatic cells have no proteins" },
                { key: 'B', text: "Somatic tissue changes do not alter the nucleotide sequence of DNA in the germ cells (sperms and ova)" },
                { key: 'C', text: "Only female parents pass on traits" },
                { key: 'D', text: "Somatic cells destroy all mutations" }
            ],
            correct_option: 'B',
            explanation: "Only genetic changes occurring in germline DNA of gametogenic cells are transmitted across generations."
        },
        {
            id: 42,
            question: "When a pure tall violet-flowered pea plant (TTWW) is crossed with a pure short white-flowered pea plant (ttww), what will be the appearance of the F1 progeny?",
            options: [
                { key: 'A', text: "Short with white flowers" },
                { key: 'B', text: "All tall with violet flowers (TtWw)" },
                { key: 'C', text: "Medium with pink flowers" },
                { key: 'D', text: "Tall with white flowers" }
            ],
            correct_option: 'B',
            explanation: "Both Tall ('T') and Violet ('W') are dominant; F1 progeny are double heterozygous TtWw exhibiting the tall violet phenotype."
        },
        {
            id: 43,
            question: "What is the key advantage of sexual reproduction over asexual reproduction in driving evolution?",
            options: [
                { key: 'A', text: "It consumes less energy" },
                { key: 'B', text: "It creates rapid and extensive genetic variation by combining alleles from two parents, increasing adaptive survival capacity" },
                { key: 'C', text: "It produces identical copies" },
                { key: 'D', text: "It requires only one parent" }
            ],
            correct_option: 'B',
            explanation: "Sexual reproduction generates novel combinatorial genetic diversity via meiotic crossing over, independent assortment, and biparental syngamy."
        },
        {
            id: 44,
            question: "What was the main reason Mendel succeeded in discovering the fundamental laws of heredity where earlier scientists had failed?",
            options: [
                { key: 'A', text: "He used electron microscopes" },
                { key: 'B', text: "He focused on one or two clear contrasting traits at a time and applied rigorous quantitative mathematical counting to all progeny across generations" },
                { key: 'C', text: "He crossed animals only" },
                { key: 'D', text: "He studied only wild plants" }
            ],
            correct_option: 'B',
            explanation: "Mendel's rigorous scientific method tracked discrete unitary traits in pure lines and evaluated large sample statistical ratios."
        },
        {
            id: 45,
            question: "In a testcross to determine whether a tall pea plant is homozygous (TT) or heterozygous (Tt), what plant must it be crossed with?",
            options: [
                { key: 'A', text: "Homozygous tall plant (TT)" },
                { key: 'B', text: "Homozygous dwarf plant (tt)" },
                { key: 'C', text: "Heterozygous tall plant (Tt)" },
                { key: 'D', text: "Any random plant" }
            ],
            correct_option: 'B',
            explanation: "A testcross crosses an individual of dominant phenotype with a homozygous recessive tester (tt); if all offspring are tall it is TT; if 50% are dwarf it is Tt."
        },
        {
            id: 46,
            question: "Which of the following chromosome combinations will produce a normal human male zygote?",
            options: [
                { key: 'A', text: "44 Autosomes + XX" },
                { key: 'B', text: "44 Autosomes + XY" },
                { key: 'C', text: "22 Autosomes + Y" },
                { key: 'D', text: "44 Autosomes + YY" }
            ],
            correct_option: 'B',
            explanation: "A normal human male somatic karyotype is 46,XY (44 autosomes + 1 X chromosome + 1 Y chromosome)."
        },
        {
            id: 47,
            question: "Which of the following chromosome combinations will produce a normal human female zygote?",
            options: [
                { key: 'A', text: "44 Autosomes + XY" },
                { key: 'B', text: "44 Autosomes + XX" },
                { key: 'C', text: "44 Autosomes + XO" },
                { key: 'D', text: "22 Autosomes + X" }
            ],
            correct_option: 'B',
            explanation: "A normal human female somatic karyotype is 46,XX (44 autosomes + two X chromosomes)."
        },
        {
            id: 48,
            question: "What did Mendel call the particulate physical units of inheritance that we now know as 'genes'?",
            options: [
                { key: 'A', text: "Enzymes" },
                { key: 'B', text: "Factors" },
                { key: 'C', text: "Plasmids" },
                { key: 'D', text: "Centrosomes" }
            ],
            correct_option: 'B',
            explanation: "Mendel termed inherited discrete genetic elements 'factors' (Elemente), later renamed 'genes' by Wilhelm Johannsen in 1909."
        },
        {
            id: 49,
            question: "In pea plants, which pair of seed traits represents the DOMINANT forms?",
            options: [
                { key: 'A', text: "Wrinkled shape and Green colour" },
                { key: 'B', text: "Round shape and Yellow colour" },
                { key: 'C', text: "Wrinkled shape and Yellow colour" },
                { key: 'D', text: "Round shape and Green colour" }
            ],
            correct_option: 'B',
            explanation: "Round seed shape (R) and Yellow cotyledon colour (Y) are dominant over wrinkled shape (r) and green colour (y)."
        },
        {
            id: 50,
            question: "If a homozygous round seed plant (RR) is crossed with a wrinkled seed plant (rr), what percentage of the F2 generation will have round seeds?",
            options: [
                { key: 'A', text: "25%" },
                { key: 'B', text: "50%" },
                { key: 'C', text: "75% (3/4 of F2)" },
                { key: 'D', text: "100%" }
            ],
            correct_option: 'C',
            explanation: "Selfing F1 (Rr × Rr) yields 1 RR + 2 Rr (75% round seeds) and 1 rr (25% wrinkled seeds)."
        },

        // =================================================================
        // TIER 2: MEDIUM QUESTIONS (Q51 - Q60)
        // Single-Step Genetic Crosses, Punnett Squares & Cytogenetics
        // =================================================================
        {
            id: 51,
            question: "A Mendelian experiment bred tall pea plants bearing violet flowers with short pea plants bearing white flowers. All F1 progeny bore violet flowers, but approximately half of them were short. What was the exact genotype of the tall violet parent plant?",
            options: [
                { key: 'A', text: "TTWW" },
                { key: 'B', text: "TtWW" },
                { key: 'C', text: "TTww" },
                { key: 'D', text: "TtWw" }
            ],
            correct_option: 'B',
            explanation: "Since all progeny had violet flowers, the parent was homozygous dominant for violet ('WW'). Since half were short (1:1 ratio with tt), the parent was heterozygous for height ('Tt'). Thus: TtWW."
        },
        {
            id: 52,
            question: "A cross between a heterozygous tall plant (Tt) and a homozygous dwarf plant (tt) produces what expected phenotypic ratio of offspring?",
            options: [
                { key: 'A', text: "3 Tall : 1 Dwarf" },
                { key: 'B', text: "1 Tall : 1 Dwarf (50% Tall, 50% Dwarf)" },
                { key: 'C', text: "All Tall" },
                { key: 'D', text: "All Dwarf" }
            ],
            correct_option: 'B',
            explanation: "This monohybrid testcross (Tt × tt) yields 50% Tt (Tall) and 50% tt (Dwarf), giving a 1:1 phenotypic ratio."
        },
        {
            id: 53,
            question: "Why did Mendel formulate the hypothesis that each sexually reproducing organism must carry TWO copies of each gene, but each gamete receives only ONE copy?",
            options: [
                { key: 'A', text: "To prevent cells from becoming too large" },
                { key: 'B', text: "Because if gametes had two copies, each new generation would end up with twice the chromosome number and DNA content of its parents" },
                { key: 'C', text: "Because pollen grains have no nuclei" },
                { key: 'D', text: "To eliminate recessive traits permanently" }
            ],
            correct_option: 'B',
            explanation: "Meiotic reduction to a single gene set per gamete prevents exponential doubling of genomic DNA content across successive generations."
        },
        {
            id: 54,
            question: "In an F2 dihybrid generation of 16 possible combinations (RrYy × RrYy), how many offspring are RECOMBINANTS exhibiting new combinations of traits absent in the true-breeding parental lines (RRYY and rryy)?",
            options: [
                { key: 'A', text: "1 out of 16" },
                { key: 'B', text: "6 out of 16 (3 Round Green + 3 Wrinkled Yellow = 37.5%)" },
                { key: 'C', text: "9 out of 16" },
                { key: 'D', text: "10 out of 16" }
            ],
            correct_option: 'B',
            explanation: "Parental phenotypes are Round Yellow (9/16) and Wrinkled Green (1/16). Recombinant non-parental phenotypes are Round Green (3/16) and Wrinkled Yellow (3/16), totaling 6/16."
        },
        {
            id: 55,
            question: "A woman with homozygous blood group B (IB IB) has a child with a man who has homozygous blood group A (IA IA). What will be the blood group of their child?",
            options: [
                { key: 'A', text: "Blood group A" },
                { key: 'B', text: "Blood group B" },
                { key: 'C', text: "Blood group AB (100% IA IB)" },
                { key: 'D', text: "Blood group O" }
            ],
            correct_option: 'C',
            explanation: "Mother contributes allele IB and father contributes allele IA. The child is 100% IA IB (Blood group AB due to codominance)."
        },
        {
            id: 56,
            question: "What is the physical cytological basis that explains Mendel's Law of Independent Assortment in modern genetics?",
            options: [
                { key: 'A', text: "All genes are on a single long DNA thread" },
                { key: 'B', text: "Genes are located on distinct, separate pairs of homologous chromosomes that align and segregate independently on the meiotic metaphase plate" },
                { key: 'C', text: "Mitochondria divide before the nucleus" },
                { key: 'D', text: "Enzymes cut DNA randomly" }
            ],
            correct_option: 'B',
            explanation: "Non-homologous chromosome pairs orient independently during meiotic Metaphase I, distributing non-allelic unlinked genes independently into gametes."
        },
        {
            id: 57,
            question: "If a couple has already given birth to three daughters in a row, what is the exact probability that their fourth child will be a boy?",
            options: [
                { key: 'A', text: "100%" },
                { key: 'B', text: "50% (1/2, because each pregnancy is an independent genetic event)" },
                { key: 'C', text: "12.5%" },
                { key: 'D', text: "25%" }
            ],
            correct_option: 'B',
            explanation: "Each conception is an independent probabilistic event; paternal sperm segregation guarantees an exact 50% chance of XY (boy) on every pregnancy."
        },
        {
            id: 58,
            question: "What would happen if a mutated gene encodes an enzyme that is completely NON-FUNCTIONAL in the biosynthetic pathway of a plant growth hormone?",
            options: [
                { key: 'A', text: "The plant grows to gigantic height" },
                { key: 'B', text: "Insufficient growth hormone is synthesized, causing the plant to remain dwarf (short phenotype)" },
                { key: 'C', text: "The plant turns into a fungus" },
                { key: 'D', text: "The seeds turn into flowers" }
            ],
            correct_option: 'B',
            explanation: "A null mutation in the hormone synthase gene (e.g. GA 3-beta-hydroxylase for gibberellin) prevents hormone synthesis, yielding a dwarf phenotype."
        },
        {
            id: 59,
            question: "In a monohybrid cross of heterozygous round seeded plants (Rr × Rr), what fraction of the round-seeded progeny is GENOTYPICALLY HETEROZYGOUS (Rr)?",
            options: [
                { key: 'A', text: "1/4" },
                { key: 'B', text: "2/3 (approximately 66.7% of round seeds)" },
                { key: 'C', text: "1/2" },
                { key: 'D', text: "3/4" }
            ],
            correct_option: 'B',
            explanation: "Total round progeny comprise 1 RR + 2 Rr = 3. Among these round seeds, the proportion of heterozygous Rr is 2/3 (66.7%)."
        },
        {
            id: 60,
            question: "Why is the inheritance of light-coloured eyes in children when both parents have light eyes insufficient evidence by itself to prove whether light eye colour is dominant or recessive?",
            options: [
                { key: 'A', text: "Eye colour is not controlled by DNA" },
                { key: 'B', text: "If light eyes are recessive (bb × bb), all children are bb; if light eyes are homozygous dominant (BB × BB), all children are also BB. Without observing crosses with dark-eyed individuals across generations, dominance cannot be deduced" },
                { key: 'C', text: "Children always have different eyes from parents" },
                { key: 'D', text: "Eye colour depends only on sunlight" }
            ],
            correct_option: 'B',
            explanation: "Crossing two like-phenotype parents (light × light) yields 100% light-eyed offspring under both homozygous dominant (BB) and homozygous recessive (bb) models; determining dominance requires outcrossing to dark eyes."
        },

        // =================================================================
        // TIER 3: HARD QUESTIONS (Q61 - Q70)
        // Multi-Step Dihybrid Arithmetic, Pedigrees & Molecular Genetics
        // =================================================================
        {
            id: 61,
            question: "In an F2 dihybrid generation of 1600 pea plants derived from crossing RRYY × rryy, how many plants are expected to be 'Round Green' and 'Wrinkled Yellow', respectively?",
            options: [
                { key: 'A', text: "900 Round Green and 100 Wrinkled Yellow" },
                { key: 'B', text: "300 Round Green and 300 Wrinkled Yellow (3/16 of 1600 each)" },
                { key: 'C', text: "100 Round Green and 300 Wrinkled Yellow" },
                { key: 'D', text: "400 Round Green and 400 Wrinkled Yellow" }
            ],
            correct_option: 'B',
            explanation: "Expected frequencies: Round Green = 3/16 × 1600 = 300 plants; Wrinkled Yellow = 3/16 × 1600 = 300 plants."
        },
        {
            id: 62,
            question: "A plant with genotype Tt Rr is crossed with a plant of genotype tt rr (Dihybrid Testcross). What will be the resulting phenotypic ratio of the offspring?",
            options: [
                { key: 'A', text: "9 : 3 : 3 : 1" },
                { key: 'B', text: "1 : 1 : 1 : 1 (25% Tall Round : 25% Tall Wrinkled : 25% Dwarf Round : 25% Dwarf Wrinkled)" },
                { key: 'C', text: "3 : 1" },
                { key: 'D', text: "1 : 2 : 1" }
            ],
            correct_option: 'B',
            explanation: "A dihybrid testcross (TtRr × ttrr) matches gamete proportions (1 TR : 1 Tr : 1 tR : 1 tr) directly with the tester's 'tr' gamete, producing a 1:1:1:1 phenotypic ratio."
        },
        {
            id: 63,
            question: "How many genetically distinct genotypes are produced in the F2 generation of a classic Mendelian dihybrid cross (RrYy self-pollinated)?",
            options: [
                { key: 'A', text: "4 genotypes" },
                { key: 'B', text: "9 genotypes (RRYY, RRYy, RRyy, RrYY, RrYy, Rryy, rrYY, rrYy, rryy)" },
                { key: 'C', text: "16 genotypes" },
                { key: 'D', text: "8 genotypes" }
            ],
            correct_option: 'B',
            explanation: "A dihybrid cross produces 4 phenotypes (9:3:3:1) but exactly 3 × 3 = 9 distinct genotypes."
        },
        {
            id: 64,
            question: "If an unfertilised human ovum is accidentally fertilized by a sperm that lacks any sex chromosome (nullisomic, 22+0), what will be the sex chromosome constitution of the zygote?",
            options: [
                { key: 'A', text: "44 + XX" },
                { key: 'B', text: "44 + X0 (Turner syndrome)" },
                { key: 'C', text: "44 + XY" },
                { key: 'D', text: "44 + YY" }
            ],
            correct_option: 'B',
            explanation: "Maternal X (22+X) plus paternal nullisomy (22+0) yields 45,X0 monosomy (Turner syndrome)."
        },
        {
            id: 65,
            question: "What is the genetic mechanism that guarantees an equal 50:50 genetic contribution of nuclear DNA from male and female parents to their child?",
            options: [
                { key: 'A', text: "Both parents donate blood" },
                { key: 'B', text: "Meiotic reduction halves homologous chromosome pairs so each gamete carries exactly 23 maternal or paternal chromosomes, which fuse upon syngamy" },
                { key: 'C', text: "Father donates all DNA; mother provides only cytoplasm" },
                { key: 'D', text: "Hormones equalize gene counts" }
            ],
            correct_option: 'B',
            explanation: "Biparental syngamy unites 23 paternal nuclear chromosomes with 23 maternal nuclear chromosomes to re-establish the 46-chromosome diploid genome."
        },
        {
            id: 66,
            question: "In dogs, if black coat colour (B) is dominant over brown coat colour (b), what cross should an investigator design to determine the dominance relationship and unknown genotype of a black dog?",
            options: [
                { key: 'A', text: "Breed the black dog with another black dog only" },
                { key: 'B', text: "Testcross the black dog with a pure-breeding brown dog (bb); if any brown puppies appear, the black dog is heterozygous (Bb); if all puppies are black, it is homozygous (BB)" },
                { key: 'C', text: "Feed the dog different foods" },
                { key: 'D', text: "Count the number of hairs" }
            ],
            correct_option: 'B',
            explanation: "A testcross with the homozygous recessive brown mate (bb) unmasks whether the dominant black parent carries a hidden recessive allele 'b'."
        },
        {
            id: 67,
            question: "Why would Mendel's Law of Independent Assortment FAIL to hold true if two different gene loci were situated very close together on the SAME chromosome?",
            options: [
                { key: 'A', text: "The genes would destroy each other" },
                { key: 'B', text: "Closely linked genes on the same chromosome tend to be inherited together as a linkage group and do not assort independently into gametes" },
                { key: 'C', text: "The plant would turn into a dwarf" },
                { key: 'D', text: "Pollen grains would become sterile" }
            ],
            correct_option: 'B',
            explanation: "Genetic linkage occurs when syntenic genes are physically contiguous on the same chromosome, preventing independent meiotic segregation."
        },
        {
            id: 68,
            question: "If a human sperm carrying a Y chromosome fertilizes a mature ovum, why does the resulting zygote develop male gonads (testes) rather than ovaries?",
            options: [
                { key: 'A', text: "Y chromosome has more sugar" },
                { key: 'B', text: "The Y chromosome carries the SRY gene (Sex-determining Region Y) which initiates testicular differentiation and testosterone secretion in early embryonic development" },
                { key: 'C', text: "X chromosome is destroyed" },
                { key: 'D', text: "The mother's uterus turns into testes" }
            ],
            correct_option: 'B',
            explanation: "The master testis-determining factor SRY on the short arm of the Y chromosome triggers undifferentiated bipotential gonadal ridges to develop into testes."
        },
        {
            id: 69,
            question: "A cross between two heterozygous tall pea plants (Tt × Tt) yields 400 total offspring. Statistically, how many of these plants are expected to be PURE-BREEDING (homozygous)?",
            options: [
                { key: 'A', text: "100 plants" },
                { key: 'B', text: "200 plants (100 TT + 100 tt = 50% of total)" },
                { key: 'C', text: "300 plants" },
                { key: 'D', text: "400 plants" }
            ],
            correct_option: 'B',
            explanation: "Genotypic distribution: 1/4 TT (100) + 1/2 Tt (200) + 1/4 tt (100). Pure-breeding homozygotes are TT + tt = 100 + 100 = 200 plants (50%)."
        },
        {
            id: 70,
            question: "In human genetics, why is a father UNABLE to pass an X-linked recessive genetic disorder (such as red-green colour blindness or hemophilia) directly to his son?",
            options: [
                { key: 'A', text: "Fathers have no X chromosomes" },
                { key: 'B', text: "A father always contributes his Y chromosome to his biological son; the son inherits his single X chromosome exclusively from his mother" },
                { key: 'C', text: "Sons destroy the X chromosome" },
                { key: 'D', text: "Y chromosome cures all diseases" }
            ],
            correct_option: 'B',
            explanation: "A male child receives his Y chromosome from his father and his X chromosome from his mother; thus, paternal X-linked alleles pass only to daughters."
        },

        // =================================================================
        // TIER 4: TRICKY QUESTIONS (Q71 - Q90)
        // Subtle Traps, ABO Blood Inheritance, Non-Mendelian Scenarios & Exceptions
        // =================================================================
        {
            id: 71,
            question: "A child has blood group O. If the mother has blood group B, which of the following CANNOT possibly be the blood group of the biological father?",
            options: [
                { key: 'A', text: "Blood group A" },
                { key: 'B', text: "Blood group B" },
                { key: 'C', text: "Blood group AB (IA IB)" },
                { key: 'D', text: "Blood group O" }
            ],
            correct_option: 'C',
            explanation: "A child with group O (ii) must inherit one 'i' allele from each parent. A man with group AB (IA IB) possesses no 'i' allele and cannot father a group O child."
        },
        {
            id: 72,
            question: "In garden peas, yellow cotyledon colour (Y) is dominant over green cotyledon colour (y), and round seed shape (R) is dominant over wrinkled shape (r). What is the phenotype of a plant with genotype Rr yy?",
            options: [
                { key: 'A', text: "Round and yellow" },
                { key: 'B', text: "Round and green" },
                { key: 'C', text: "Wrinkled and yellow" },
                { key: 'D', text: "Wrinkled and green" }
            ],
            correct_option: 'B',
            explanation: "Genotype 'Rr' produces the dominant Round shape, while 'yy' produces the homozygous recessive Green colour."
        },
        {
            id: 73,
            question: "What is the expected phenotypic ratio when a plant with genotype Rr Yy is testcrossed with rr yy?",
            options: [
                { key: 'A', text: "9 : 3 : 3 : 1" },
                { key: 'B', text: "1 : 1 : 1 : 1 (Round Yellow : Round Green : Wrinkled Yellow : Wrinkled Green)" },
                { key: 'C', text: "3 : 1" },
                { key: 'D', text: "1 : 2 : 1" }
            ],
            correct_option: 'B',
            explanation: "A dihybrid testcross (RrYy × rryy) yields 1 Round Yellow : 1 Round Green : 1 Wrinkled Yellow : 1 Wrinkled Green (1:1:1:1)."
        },
        {
            id: 74,
            question: "Which of the following cellular processes ensures that every daughter cell produced by binary fission in bacteria receives an exact copy of the parent's genetic material?",
            options: [
                { key: 'A', text: "Meiosis" },
                { key: 'B', text: "Semi-conservative DNA replication" },
                { key: 'C', text: "Transpiration" },
                { key: 'D', text: "Phagocytosis" }
            ],
            correct_option: 'B',
            explanation: "Bacterial chromosome duplication relies on semi-conservative DNA replication prior to binary fission."
        },
        {
            id: 75,
            question: "If a homozygous tall plant (TT) is crossed with a heterozygous tall plant (Tt), what percentage of the progeny will be PHENOTYPICALLY TALL?",
            options: [
                { key: 'A', text: "50%" },
                { key: 'B', text: "75%" },
                { key: 'C', text: "100% (All tall)" },
                { key: 'D', text: "25%" }
            ],
            correct_option: 'C',
            explanation: "TT × Tt yields 50% TT and 50% Tt; all 100% of the offspring exhibit the dominant tall phenotype."
        },
        {
            id: 76,
            question: "Why do identical (monozygotic) human twins share exactly identical genotypes and phenotypic traits at birth, while fraternal (dizygotic) twins do NOT?",
            options: [
                { key: 'A', text: "Identical twins develop from a single fertilized zygote that splits into two embryos, sharing 100% identical DNA; fraternal twins arise from two separate eggs fertilized by two different sperms" },
                { key: 'B', text: "Fraternal twins have no father" },
                { key: 'C', text: "Identical twins have no chromosomes" },
                { key: 'D', text: "Fraternal twins develop outside the mother" }
            ],
            correct_option: 'A',
            explanation: "Monozygotic twins originate from cleavage of a single zygote (identical genomes); dizygotic twins originate from two separate ovulations/fertilizations (share ~50% alleles like siblings)."
        },
        {
            id: 77,
            question: "Which of the following represents a reciprocal cross for the parental cross: Female Tall (TT) × Male Dwarf (tt)?",
            options: [
                { key: 'A', text: "Female Tall (TT) × Male Tall (TT)" },
                { key: 'B', text: "Female Dwarf (tt) × Male Tall (TT)" },
                { key: 'C', text: "Female Dwarf (tt) × Male Dwarf (tt)" },
                { key: 'D', text: "Female Heterozygous (Tt) × Male Dwarf (tt)" }
            ],
            correct_option: 'B',
            explanation: "A reciprocal cross reverses the sexes associated with each parental phenotype (Female Dwarf tt × Male Tall TT)."
        },
        {
            id: 78,
            question: "How many total autosomes are present in a normal human UNFERTILISED OVUM?",
            options: [
                { key: 'A', text: "44 autosomes" },
                { key: 'B', text: "22 autosomes" },
                { key: 'C', text: "23 autosomes" },
                { key: 'D', text: "46 autosomes" }
            ],
            correct_option: 'B',
            explanation: "A mature secondary oocyte/ovum contains 22 autosomes plus 1 X sex chromosome (total 23 chromosomes)."
        },
        {
            id: 79,
            question: "In an F2 dihybrid cross (RrYy selfed), what is the probability of obtaining an offspring that is HOMOZYGOUS for BOTH dominant traits (RRYY)?",
            options: [
                { key: 'A', text: "9/16" },
                { key: 'B', text: "1/16" },
                { key: 'C', text: "3/16" },
                { key: 'D', text: "4/16" }
            ],
            correct_option: 'B',
            explanation: "The double homozygous dominant genotype RRYY appears in only 1 out of 16 squares in the dihybrid Punnett table (probability = 1/16)."
        },
        {
            id: 80,
            question: "Why does a woman who suffers from severe malnutrition during pregnancy give birth to an infant with low birth weight, but the infant's own biological children have normal birth weight when properly nourished?",
            options: [
                { key: 'A', text: "Low birth weight is a dominant mutation" },
                { key: 'B', text: "Maternal undernutrition causes an acquired phenotypic change in somatic tissue that does not alter germline DNA sequences, so it is not inherited by the next generation" },
                { key: 'C', text: "Children inherit traits only from grandparents" },
                { key: 'D', text: "Nutrients alter DNA permanently" }
            ],
            correct_option: 'B',
            explanation: "Nutritional deficits affect somatic fetal intrauterine growth without changing gametogenic nucleotide sequences, so offspring with adequate nutrition attain normal weight."
        },
        {
            id: 81,
            question: "What is the total number of genotypically distinct gametes that can be produced by an individual with genotype Aa Bb Cc (trihybrid)?",
            options: [
                { key: 'A', text: "3" },
                { key: 'B', text: "6" },
                { key: 'C', text: "8 (2³ = 8)" },
                { key: 'D', text: "16" }
            ],
            correct_option: 'C',
            explanation: "The formula for number of gamete types is 2ⁿ, where n is the number of heterozygous gene pairs. For Aa Bb Cc: 2³ = 8 distinct gametic genotypes."
        },
        {
            id: 82,
            question: "In a monohybrid cross between pure tall (TT) and pure dwarf (tt) pea plants, what proportion of the F2 tall plants are CARRIERS (heterozygous Tt)?",
            options: [
                { key: 'A', text: "1/4" },
                { key: 'B', text: "2/3 (66.7% of tall plants)" },
                { key: 'C', text: "1/2" },
                { key: 'D', text: "3/4" }
            ],
            correct_option: 'B',
            explanation: "The F2 tall pool consists of 1 TT and 2 Tt (total 3 tall). Heterozygous carriers constitute 2/3 (66.7%) of tall individuals."
        },
        {
            id: 83,
            question: "Which of the following parental crosses will yield offspring displaying a 1 : 1 genotypic and phenotypic ratio?",
            options: [
                { key: 'A', text: "TT × TT" },
                { key: 'B', text: "Tt × tt (Monohybrid testcross)" },
                { key: 'C', text: "Tt × Tt" },
                { key: 'D', text: "TT × tt" }
            ],
            correct_option: 'B',
            explanation: "Tt × tt yields 50% Tt (Tall) and 50% tt (Dwarf), giving an identical 1:1 ratio for both genotype and phenotype."
        },
        {
            id: 84,
            question: "If a human somatic cell undergoes mitotic division, how many chromosomes will be present in each of the two resulting daughter cells?",
            options: [
                { key: 'A', text: "23 chromosomes" },
                { key: 'B', text: "46 chromosomes (23 pairs)" },
                { key: 'C', text: "92 chromosomes" },
                { key: 'D', text: "12 chromosomes" }
            ],
            correct_option: 'B',
            explanation: "Equational mitotic division maintains chromosome constancy, yielding two diploid daughter cells with 46 chromosomes each."
        },
        {
            id: 85,
            question: "Why are sons and daughters equally likely to inherit an autosomal dominant trait from a heterozygous affected father?",
            options: [
                { key: 'A', text: "Autosomes are present only in males" },
                { key: 'B', text: "Autosomal chromosomes segregate equally and independently of sex chromosomes to both male and female offspring" },
                { key: 'C', text: "Only daughters inherit autosomes" },
                { key: 'D', text: "Y chromosome carries all autosomal genes" }
            ],
            correct_option: 'B',
            explanation: "Autosomes are distributed symmetrically to both sexes, giving sons and daughters an identical 50% probability of receiving the mutant allele."
        },
        {
            id: 86,
            question: "What is the phenotypic outcome if a pure-breeding violet flower plant (WW) is crossed with a heterozygous violet flower plant (Ww)?",
            options: [
                { key: 'A', text: "50% Violet and 50% White" },
                { key: 'B', text: "100% Violet flowers" },
                { key: 'C', text: "100% White flowers" },
                { key: 'D', text: "75% Violet and 25% White" }
            ],
            correct_option: 'B',
            explanation: "WW × Ww produces 50% WW and 50% Ww; all 100% of progeny express the dominant violet flower phenotype."
        },
        {
            id: 87,
            question: "Which of the following terms describes the complete set of chromosomes in a species arranged by size, centromere position, and banding pattern?",
            options: [
                { key: 'A', text: "Phenotype" },
                { key: 'B', text: "Karyotype" },
                { key: 'C', text: "Genotype" },
                { key: 'D', text: "Allele" }
            ],
            correct_option: 'B',
            explanation: "A karyotype is the standardized photographic or schematic arrangement of a metaphase chromosome complement."
        },
        {
            id: 88,
            question: "In humans, if a father possesses blood group AB (IA IB) and the mother possesses blood group O (ii), what blood groups are POSSIBLE in their biological children?",
            options: [
                { key: 'A', text: "Only Blood group AB and O" },
                { key: 'B', text: "Blood group A (IA i) and Blood group B (IB i) with equal 50% probability" },
                { key: 'C', text: "Only Blood group O" },
                { key: 'D', text: "Only Blood group AB" }
            ],
            correct_option: 'B',
            explanation: "IA IB × ii yields 50% IA i (Group A) and 50% IB i (Group B). Neither Group AB nor Group O is possible."
        },
        {
            id: 89,
            question: "Why do bacterial populations in a pond show fewer morphological variations than a herd of deer inhabiting the surrounding forest?",
            options: [
                { key: 'A', text: "Bacteria have no enzymes" },
                { key: 'B', text: "Bacteria reproduce predominantly asexually through binary fission generating minor copying errors, whereas deer reproduce sexually combining genetic variations from two diverse parents" },
                { key: 'C', text: "Deer drink more water" },
                { key: 'D', text: "Bacteria live in colder water" }
            ],
            correct_option: 'B',
            explanation: "Asexual clonal reproduction generates limited variation through point replication errors; sexual reproduction produces vast genetic diversity through meiotic recombination and outcrossing."
        },
        {
            id: 90,
            question: "What is the expected genotypic ratio in the progeny of a cross between two heterozygous individuals for a single gene locus (Aa × Aa)?",
            options: [
                { key: 'A', text: "3 : 1" },
                { key: 'B', text: "1 AA : 2 Aa : 1 aa (1:2:1)" },
                { key: 'C', text: "9 : 3 : 3 : 1" },
                { key: 'D', text: "1 : 1" }
            ],
            correct_option: 'B',
            explanation: "Heterozygous monohybrid selfing (Aa × Aa) yields 1/4 AA, 1/2 Aa, and 1/4 aa (1:2:1 genotypic ratio)."
        },

        // =================================================================
        // TIER 5: VERY VERY HARD QUESTIONS (Q91 - Q100)
        // Advanced Multi-Concept Synthesis, Complex Probability & Epistasis
        // =================================================================
        {
            id: 91,
            question: "In a trihybrid self-cross between two individuals of genotype Tt Rr Yy, what is the probability of obtaining an offspring that is HOMOZYGOUS RECESSIVE for ALL THREE traits (tt rr yy)?",
            options: [
                { key: 'A', text: "1/16" },
                { key: 'B', text: "1/64 (1/4 × 1/4 × 1/4)" },
                { key: 'C', text: "3/64" },
                { key: 'D', text: "9/64" }
            ],
            correct_option: 'B',
            explanation: "For independent unlinked genes: P(tt) = 1/4, P(rr) = 1/4, P(yy) = 1/4. P(tt rr yy) = 1/4 × 1/4 × 1/4 = 1/64."
        },
        {
            id: 92,
            question: "A man with blood group A and a woman with blood group B have a child with blood group O. What is the probability that their NEXT child will have blood group AB?",
            options: [
                { key: 'A', text: "0%" },
                { key: 'B', text: "25% (1/4 probability)" },
                { key: 'C', text: "50%" },
                { key: 'D', text: "75%" }
            ],
            correct_option: 'B',
            explanation: "Having a group O child (ii) proves parents are IA i and IB i. Cross IA i × IB i produces: 1/4 IA IB (AB), 1/4 IA i (A), 1/4 IB i (B), 1/4 ii (O). Probability of AB = 25%."
        },
        {
            id: 93,
            question: "In pea plants, tallness (T) is dominant over dwarfness (t), and yellow seed (Y) is dominant over green seed (y). A plant of genotype Tt Yy is self-pollinated and produces 800 seeds. How many seeds are expected to be BOTH TALL AND GREEN?",
            options: [
                { key: 'A', text: "450 seeds" },
                { key: 'B', text: "150 seeds (3/16 of 800)" },
                { key: 'C', text: "50 seeds" },
                { key: 'D', text: "200 seeds" }
            ],
            correct_option: 'B',
            explanation: "P(Tall) = 3/4; P(Green) = 1/4. P(Tall Green) = 3/4 × 1/4 = 3/16. In 800 seeds: 3/16 × 800 = 150 seeds."
        },
        {
            id: 94,
            question: "In an experimental pedigree analysis, two normal parents have a child with an autosomal recessive metabolic disorder (Phenylketonuria / PKU). What is the probability that their next healthy, unaffected child is a CARRIER (heterozygous) of the mutant PKU allele?",
            options: [
                { key: 'A', text: "1/4" },
                { key: 'B', text: "2/3 (approximately 66.7%)" },
                { key: 'C', text: "1/2" },
                { key: 'D', text: "3/4" }
            ],
            correct_option: 'B',
            explanation: "Both parents are carriers (Pp × Pp). Among unaffected offspring (PP, Pp, Pp), 2 out of 3 (2/3) are heterozygous carriers (Pp)."
        },
        {
            id: 95,
            question: "A plant heterozygous for three independent genes (Aa Bb Cc) is testcrossed with an individual of genotype aa bb cc. How many distinct phenotypic classes will appear in the progeny, and in what ratio?",
            options: [
                { key: 'A', text: "4 classes in 9:3:3:1 ratio" },
                { key: 'B', text: "8 phenotypic classes in equal 1:1:1:1:1:1:1:1 ratio" },
                { key: 'C', text: "16 classes in 1:2:1 ratio" },
                { key: 'D', text: "2 classes in 1:1 ratio" }
            ],
            correct_option: 'B',
            explanation: "A trihybrid testcross (AaBbCc × aabbcc) generates 2³ = 8 distinct phenotypic classes in equal 1:1:1:1:1:1:1:1 proportions."
        },
        {
            id: 96,
            question: "Why does the presence of a single functional dominant allele 'T' in a heterozygous pea plant (Tt) result in the SAME full tall height as a homozygous dominant plant (TT)?",
            options: [
                { key: 'A', text: "The recessive allele is physically deleted" },
                { key: 'B', text: "The single 'T' allele produces sufficient functional gibberellin-biosynthesizing enzyme above the critical physiological threshold required for maximal stem cell elongation" },
                { key: 'C', text: "Dwarf genes turn into tall genes" },
                { key: 'D', text: "Heterozygotes have double the chromosomes" }
            ],
            correct_option: 'B',
            explanation: "Enzymatic haplosufficiency: one functional 'T' allele synthesizes adequate active enzyme to generate normal gibberellin levels, achieving full wild-type stem elongation."
        },
        {
            id: 97,
            question: "Consider a population of 1000 pea plants in an F2 monohybrid generation exhibiting 750 tall and 250 dwarf plants. If ALL the 750 tall plants are individually self-pollinated, what will be the total proportion of dwarf plants in the resulting F3 generation?",
            options: [
                { key: 'A', text: "Zero dwarf plants" },
                { key: 'B', text: "1/6 of total F3 progeny (approximately 16.67%)" },
                { key: 'C', text: "1/4 of total F3 progeny" },
                { key: 'D', text: "1/2 of total F3 progeny" }
            ],
            correct_option: 'B',
            explanation: "The 750 tall plants comprise 250 TT (1/3) and 500 Tt (2/3). TT selfing yields 0 dwarf; 2/3 Tt selfing yields 1/4 dwarf offspring. Total F3 dwarf proportion = 2/3 × 1/4 = 2/12 = 1/6 (16.67%)."
        },
        {
            id: 98,
            question: "In a forensic paternity dispute, a child with blood group O is claimed by a mother of blood group A. The putative father has blood group AB. Can this man be the biological father?",
            options: [
                { key: 'A', text: "Yes, because blood group AB is universal donor" },
                { key: 'B', text: "No, because a man with genotype IA IB produces only IA or IB gametes and cannot transmit the recessive 'i' allele required for blood group O (ii)" },
                { key: 'C', text: "Yes, if the mother has group O" },
                { key: 'D', text: "Yes, with 50% probability" }
            ],
            correct_option: 'B',
            explanation: "An AB male produces either IA or IB gametes. A child with genotype ii must receive 'i' from both biological parents, genetically excluding the AB male."
        },
        {
            id: 99,
            question: "In Drosophila fruit flies, eye colour is X-linked with red eyes (Xʷ⁺) dominant over white eyes (Xʷ). If a white-eyed female (XʷXʷ) is crossed with a red-eyed male (Xʷ⁺Y), what will be the eye colour of their male and female progeny?",
            options: [
                { key: 'A', text: "All males and females are red-eyed" },
                { key: 'B', text: "100% of female progeny are red-eyed (Xʷ⁺Xʷ) and 100% of male progeny are white-eyed (XʷY)" },
                { key: 'C', text: "All males and females are white-eyed" },
                { key: 'D', text: "50% red females and 50% white females" }
            ],
            correct_option: 'B',
            explanation: "Criss-cross inheritance: Daughters receive Xʷ⁺ from the father (red eyes); sons receive Xʷ from the mother and Y from the father (hemizygous white eyes)."
        },
        {
            id: 100,
            question: "How does chromosomal non-disjunction during meiotic Anaphase I or II lead to aneuploid genetic conditions such as Down syndrome (Trisomy 21)?",
            options: [
                { key: 'A', text: "DNA melts at high temperature" },
                { key: 'B', text: "Failure of homologous chromosomes or sister chromatids to separate properly results in gametes with n+1 (24) chromosomes, which upon normal fertilization produce a 2n+1 (47) trisomic zygote" },
                { key: 'C', text: "All chromosomes are converted into sex chromosomes" },
                { key: 'D', text: "Zygote lacks all ribosomes" }
            ],
            correct_option: 'B',
            explanation: "Non-disjunction during gametogenesis produces gametes with an extra copy of chromosome 21 (n+1 = 24), leading to trisomy 21 (47, +21, Down syndrome) upon syngamy."
        }
    ]
};
