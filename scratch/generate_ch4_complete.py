# -*- coding: utf-8 -*-
"""
ELITE CLASSES - CHAPTER 4 DEEP COURSE BUILDER
Carbon and its Compounds (Class 10 Science)
Generates 20 authentic mini-modules, 200 questions, zero template boilerplate, zero mentions of NCERT.
"""
import json

with open('scratch/ch4_bank_questions.json', 'r', encoding='utf-8') as f:
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

modules_data = []
