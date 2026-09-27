#!/usr/bin/env python3
"""
Elite Classes — UPSC Polity Modules Content Synthesizer
Populates Modules 34-41 (and 19, 25) with authentic, high-yield UPSC content.
"""

import os
import sys
import json
import time
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
import google.generativeai as genai

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_FILE = os.path.join(BASE_DIR, 'catalog', 'upsc_curriculum_catalog.json')
SUBJECTS_DIR = os.path.join(BASE_DIR, 'subjects')

from generate_upsc_microtopics import load_api_keys, PROMPT_TEMPLATE, slugify

API_KEYS = load_api_keys()
MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-3.5-flash-lite', 'gemini-flash-latest']

POLITY_NEW_MODULES = [
    {
        "topicId": "polity_cooperative_societies",
        "subtopics": [
            "Constitutional Framework: 97th CAA 2011, Article 19(1)(c), Article 43B, and Part IX-B",
            "Judicial Scrutiny: Supreme Court Verdict in Union of India v. Rajendra N. Shah (2021)",
            "Multi-State Cooperative Societies (Amendment) Act 2023 & Electoral Reforms in Cooperatives",
            "Ministry of Cooperation, Computerization of PACS & Three-Tier Rural Cooperative Credit"
        ]
    },
    {
        "topicId": "polity_languages_and_related_provisions",
        "subtopics": [
            "Official Language of the Union & Regional Languages (Articles 343 to 347)",
            "Language of the Supreme Court, High Courts & Authoritative Legal Texts (Articles 348 to 349)",
            "Special Directives: Linguistic Minorities (Articles 350, 350A, 350B) & Development of Hindi (Article 351)",
            "Eighth Schedule Languages, Classical Language Status Criteria & Official Languages Act 1963"
        ]
    },
    {
        "topicId": "polity_other_constitutional_dimensions_rights_and_liabilities_of_the_government",
        "subtopics": [
            "Suits and Proceedings by or against the Union and the States (Article 300)",
            "Government Contracts, Property, and Obligations (Articles 298 to 299)",
            "Evolution of Sovereign Immunity vs State Tortious Liability (Kasturi Lal to Rudul Sah)",
            "Epistolary Jurisdiction, Public Interest Litigation (PIL) & Unwritten Constitutional Conventions"
        ]
    },
    {
        "topicId": "polity_special_provisions_relating_to_certain_classes",
        "subtopics": [
            "Political Reservations in Lok Sabha and Legislative Assemblies (Articles 330, 332, 334 & 104th CAA 2019)",
            "Claims of SCs and STs to Public Services and Scope of Article 335",
            "Identification and Notification of Socially and Educationally Backward Classes: 102nd & 105th CAA",
            "Constitutional Jurisprudence on Sub-classification within Reserved Categories & Creamy Layer"
        ]
    },
    {
        "topicId": "polity_elections_and_political_parties_electoral_funding_voting_recent_development_electoral_polities_representation_of_people_s_act_and_working_of_the_political_system_since_independence",
        "subtopics": [
            "Election Commission of India: Mandate, Independence & Chief Election Commissioner Act 2023",
            "Representation of the People Act 1950: Delimitation, Voter Registration & Electoral Rolls",
            "Representation of the People Act 1951: Candidate Qualifications, Disqualifications, Corrupt Practices & Election Petitions",
            "Electoral Funding Reforms: Electoral Bonds Judgment, Electoral Trusts & Transparency",
            "Criminalization of Politics, Section 8 of RPA 1951 & Political Accountability",
            "Simultaneous Elections (One Nation One Election), EVM-VVPAT Integrity & Model Code of Conduct"
        ]
    },
    {
        "topicId": "polity_anti_defection_law",
        "subtopics": [
            "Tenth Schedule Architecture: 52nd CAA 1985, 91st CAA 2003 & Disqualification Grounds",
            "Role and Discretionary Powers of the Presiding Officer: Kihoto Hollohan (1992) & Keisham Meghachandra (2020)",
            "Mergers, Splits, and Legal Loopholes: Analysis of Recent Political Crises & Maharashtra Verdict (2023)",
            "Institutional Recommendations for Anti-Defection Reforms: Dinesh Goswami, NCRWC & Law Commission"
        ]
    },
    {
        "topicId": "polity_public_services_posts_like_cabinet_secretary_chief_secretary_etc",
        "subtopics": [
            "Constitutional Status of Civil Services: Articles 308 to 314, Doctrine of Pleasure & Article 311 Safeguards",
            "Cabinet Secretary: Role, Mandate, Cabinet Secretariat & Coordination of Union Administration",
            "Chief Secretary: Pivot of State Administration, Relations with Chief Minister & Crisis Management",
            "Civil Services Reforms: 2nd ARC Recommendations, Mission Karmayogi & The Lateral Entry Paradigm"
        ]
    },
    {
        "topicId": "polity_current_affairs",
        "subtopics": [
            "Landmark Constitution Bench Verdicts: Article 370 Abrogation & Federalism Dynamics",
            "Evolving Federal Jurisprudence: Governor's Assent to Bills (Article 200) & Federal Relations",
            "Digital Rights, Privacy Jurisprudence & Interplay with RTI (Digital Personal Data Protection Act 2023)",
            "Gender Parity & Political Empowerment: Nari Shakti Vandan Adhiniyam (106th CAA 2023)"
        ]
    },
    {
        "topicId": "polity_cabinet_committee_s_and_parliamentary_committee",
        "subtopics": [
            "Cabinet Committees: Features, Composition, Functions & Role of CCS and ACC",
            "Departmentally Related Standing Committees (DRSCs): Scrutiny of Demands for Grants & Bills",
            "Financial Committees of Parliament: Public Accounts Committee (PAC), Estimates Committee & COPU",
            "Ad Hoc Committees, Joint Parliamentary Committees (JPC) & Select Committees in Parliamentary Oversight"
        ]
    },
    {
        "topicId": "polity_subordinate_courts_district_courts_gram_nyayalayas_adrs_nalsa_etc",
        "subtopics": [
            "Hierarchy of Subordinate Judiciary: District Courts, Sessions Courts & Appointment of Judges (Articles 233-237)",
            "Gram Nyayalayas Act 2008: Grassroots Justice Delivery, Jurisdiction & Operational Challenges",
            "Alternative Dispute Resolution (ADR): Mediation Act 2023, Arbitration & Lok Adalats",
            "Legal Services Authorities Act 1987 & NALSA: Free Legal Aid (Article 39A) & Access to Justice"
        ]
    }
]

def generate_item(meta, key_idx):
    target_path = meta['targetPath']
    if os.path.exists(target_path):
        return meta['subTopicId'], True, "File exists"

    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    
    prompt = PROMPT_TEMPLATE.format(
        subject="POLITY",
        topic=meta["topicTitle"],
        subtopic=meta["subTopicTitle"],
        remarks="UPSC Civil Services Standard",
        lectures="1-2 Hours",
        microtopic_id=meta["subTopicId"],
        subject_id="polity",
        topic_id=meta["topicId"]
    )

    last_err = ""
    for offset in range(len(API_KEYS) * 2):
        current_key = API_KEYS[(key_idx + offset) % len(API_KEYS)]
        genai.configure(api_key=current_key)
        for model_name in MODELS:
            try:
                model = genai.GenerativeModel(model_name)
                resp = model.generate_content(prompt)
                text = resp.text.strip()
                if text.startswith('```'):
                    text = re.sub(r'^```(?:json)?\s*', '', text)
                    text = re.sub(r'\s*```$', '', text)
                data = json.loads(text)
                with open(target_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                return meta['subTopicId'], True, f"Generated with {model_name}"
            except Exception as e:
                last_err = str(e)
                if "429" in last_err or "quota" in last_err.lower() or "ResourceExhausted" in last_err:
                    time.sleep(4)
                else:
                    time.sleep(1)

    return meta['subTopicId'], False, f"Failed: {last_err[:80]}"

def main():
    print(f"Loading catalog from {CATALOG_FILE}...")
    with open(CATALOG_FILE, 'r', encoding='utf-8') as f:
        catalog = json.load(f)

    polity = next((s for s in catalog['subjects'] if s['subjectId'] == 'polity'), None)
    if not polity:
        print("ERROR: Polity subject not found!")
        return

    work_items = []
    
    for mod_spec in POLITY_NEW_MODULES:
        t_id = mod_spec['topicId']
        topic = next((t for t in polity['topics'] if t['topicId'] == t_id), None)
        if not topic:
            print(f"Topic {t_id} not found in catalog!")
            continue

        topic_slug = slugify(topic['topicTitle'])
        topic['subtopics'] = []

        for st_title in mod_spec['subtopics']:
            st_slug = slugify(st_title)
            st_id = f"{t_id}_{st_slug}"
            data_path = f"subjects/polity/topics/{topic_slug}/{st_slug}.json"
            target_path = os.path.join(BASE_DIR, 'subjects', 'polity', 'topics', topic_slug, f"{st_slug}.json")

            topic['subtopics'].append({
                "subTopicId": st_id,
                "subTopicTitle": st_title,
                "sourcePage": 12,
                "dataPath": data_path
            })

            work_items.append({
                "subTopicId": st_id,
                "subTopicTitle": st_title,
                "topicId": t_id,
                "topicTitle": topic['topicTitle'],
                "targetPath": target_path
            })

    # Recalculate catalog totals
    total_subtopics = sum(len(t.get('subtopics', [])) for s in catalog['subjects'] for t in s.get('topics', []))
    catalog['metadata']['totalSubtopics'] = total_subtopics

    with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
        json.dump(catalog, f, indent=2, ensure_ascii=False)

    print(f"Updated catalog: now {total_subtopics} total subtopics across all subjects.")
    print(f"Synthesizing {len(work_items)} Polity micro-topics with parallel workers...")

    success_cnt = 0
    with ThreadPoolExecutor(max_workers=2) as executor:
        futures = {executor.submit(generate_item, item, idx): item for idx, item in enumerate(work_items)}
        for future in as_completed(futures):
            item = futures[future]
            st_id, ok, msg = future.result()
            if ok:
                success_cnt += 1
                print(f"[{success_cnt}/{len(work_items)}] [OK] {item['subTopicTitle'][:50]}... ({msg})")
            else:
                print(f"[FAIL] {item['subTopicTitle']} ({msg})")

    print(f"\nAll done! Successfully generated {success_cnt}/{len(work_items)} micro-topics.")

if __name__ == '__main__':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
    main()
