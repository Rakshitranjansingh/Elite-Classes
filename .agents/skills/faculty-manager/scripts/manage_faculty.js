#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — Faculty & Staff Management Automation Tool
   Usage:
     node manage_faculty.js list
     node manage_faculty.js add-teacher --name <name> --phone <phone> --subjects <list> --classes <list> --salary <amt>
   ============================================================================= */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../../../');
const facultyFile = path.join(rootDir, 'data/faculty.json');

function parseArgs() {
    const args = process.argv.slice(2);
    const command = args[0] || 'list';
    const params = {};
    for (let i = 1; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, '');
        params[key] = args[i + 1];
    }
    return { command, params };
}

function getFaculty() {
    if (fs.existsSync(facultyFile)) {
        try {
            return JSON.parse(fs.readFileSync(facultyFile, 'utf8'));
        } catch (e) {
            return [];
        }
    }
    return [];
}

function saveFaculty(data) {
    const dir = path.dirname(facultyFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(facultyFile, JSON.stringify(data, null, 2), 'utf8');
}

function run() {
    const { command, params } = parseArgs();

    if (command === 'list') {
        const faculty = getFaculty();
        console.log(`\n👨‍🏫 Total Faculty & Staff: ${faculty.length}`);
        faculty.forEach(f => {
            console.log(`  - [${f.id}] ${f.name} | Role: ${f.role} | Subjects: ${f.subjects || 'N/A'} | Classes: ${f.classes || 'All'}`);
        });
        return;
    }

    if (command === 'add-teacher') {
        if (!params.name || !params.phone) {
            console.error('❌ Error: Missing required params: --name, --phone');
            process.exit(1);
        }

        const faculty = getFaculty();
        const pin = Math.floor(100000 + Math.random() * 900000).toString();
        const id = `fac_${Date.now().toString().slice(-6)}`;

        const newTeacher = {
            id: id,
            name: params.name,
            phone: params.phone.replace(/\D/g, '').slice(-10),
            role: 'Faculty',
            is_teacher: true,
            subjects: params.subjects || 'General',
            classes: params.classes || 'Class 10',
            salary: parseFloat(params.salary || 35000),
            pin: pin,
            created_at: new Date().toISOString()
        };

        faculty.push(newTeacher);
        saveFaculty(faculty);

        console.log(`\n🎉 Faculty Member Added Successfully!`);
        console.log(`   ID       : ${newTeacher.id}`);
        console.log(`   Name     : ${newTeacher.name}`);
        console.log(`   Subjects : ${newTeacher.subjects}`);
        console.log(`   Classes  : ${newTeacher.classes}`);
        console.log(`   PIN (Confidential) : ${newTeacher.pin}`);
    }
}

run();
