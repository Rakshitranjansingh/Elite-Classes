#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — Student Onboarding Automation Tool
   Usage:
     node onboard_student.js create --name <name> --phone <phone> --cls <cls> --fee <fee> --parent <parent>
     node onboard_student.js list
   ============================================================================= */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../../../');
const studentsFile = path.join(rootDir, 'data/students.json');

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

function getStudents() {
    if (fs.existsSync(studentsFile)) {
        try {
            return JSON.parse(fs.readFileSync(studentsFile, 'utf8'));
        } catch (e) {
            return [];
        }
    }
    return [];
}

function saveStudents(students) {
    const dir = path.dirname(studentsFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(studentsFile, JSON.stringify(students, null, 2), 'utf8');
}

function run() {
    const { command, params } = parseArgs();

    if (command === 'list') {
        const students = getStudents();
        console.log(`\n🎓 Total Enrolled Students: ${students.length}`);
        students.forEach(s => {
            console.log(`  - [${s.id}] ${s.name} (${s.cls}) | Phone: ${s.phone} | Parent: ${s.parent || 'N/A'}`);
        });
        return;
    }

    if (command === 'create') {
        if (!params.name || !params.phone || !params.cls) {
            console.error('❌ Error: Missing required params: --name, --phone, --cls');
            process.exit(1);
        }

        const cleanPhone = params.phone.replace(/\D/g, '').slice(-10);
        if (cleanPhone.length !== 10) {
            console.error('❌ Error: Phone number must be exactly 10 digits.');
            process.exit(1);
        }

        const students = getStudents();
        const existing = students.find(s => s.phone === cleanPhone);
        if (existing) {
            console.error(`❌ Error: Student with phone ${cleanPhone} already exists: [${existing.id}] ${existing.name}`);
            process.exit(1);
        }

        const pin = Math.floor(100000 + Math.random() * 900000).toString();
        const studentId = `st_${Date.now().toString().slice(-6)}`;

        const newStudent = {
            id: studentId,
            name: params.name,
            phone: cleanPhone,
            cls: params.cls,
            parent: params.parent || 'Parent',
            fee: parseFloat(params.fee || 2500),
            pin: pin,
            created_at: new Date().toISOString()
        };

        students.push(newStudent);
        saveStudents(students);

        console.log(`\n🎉 Student Enrolled Successfully!`);
        console.log(`   Student ID : ${newStudent.id}`);
        console.log(`   Name       : ${newStudent.name}`);
        console.log(`   Class      : ${newStudent.cls}`);
        console.log(`   Phone      : ${newStudent.phone}`);
        console.log(`   PIN (Confidential) : ${newStudent.pin}`);
        console.log(`\n📱 WhatsApp Onboarding Dispatch:`);
        console.log(`   "Welcome ${newStudent.name} to Elite Classes! Your student portal account is ready. Login at: https://eliteclasses.in/ with Phone: ${newStudent.phone} and PIN: ${newStudent.pin}"`);
    }
}

run();
