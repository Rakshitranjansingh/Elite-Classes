#!/usr/bin/env node
/* =============================================================================
   ELITE CLASSES — Course Manager Automation Tool
   Usage:
     node manage_course.js add --id <id> --name <name> --cls <cls> --fee <fee> --subjects <list>
     node manage_course.js list
   ============================================================================= */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../../../');
const coursesFile = path.join(rootDir, 'data/courses.json');

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

function getCourses() {
    if (fs.existsSync(coursesFile)) {
        try {
            return JSON.parse(fs.readFileSync(coursesFile, 'utf8'));
        } catch (e) {
            return [];
        }
    }
    return [];
}

function saveCourses(courses) {
    const dir = path.dirname(coursesFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(coursesFile, JSON.stringify(courses, null, 2), 'utf8');
}

function run() {
    const { command, params } = parseArgs();

    if (command === 'list') {
        const courses = getCourses();
        console.log(`\n📚 Total Courses: ${courses.length}`);
        courses.forEach(c => {
            console.log(`  - [${c.id}] ${c.name} (${c.cls}) | Fee: ₹${c.fee}/mo | Subjects: ${c.subjects}`);
        });
        return;
    }

    if (command === 'add') {
        if (!params.id || !params.name || !params.cls) {
            console.error('❌ Error: Missing required params: --id, --name, --cls');
            process.exit(1);
        }

        const courses = getCourses();
        const existing = courses.find(c => c.id === params.id);
        const courseObj = {
            id: params.id,
            name: params.name,
            cls: params.cls,
            fee: parseFloat(params.fee || 2500),
            subjects: params.subjects || 'General',
            created_at: new Date().toISOString()
        };

        if (existing) {
            Object.assign(existing, courseObj);
            console.log(`✅ Updated existing course: ${params.id}`);
        } else {
            courses.push(courseObj);
            console.log(`✅ Added new course: ${params.id}`);
        }

        saveCourses(courses);
        console.log(`   Name: ${courseObj.name}`);
        console.log(`   Class: ${courseObj.cls}`);
        console.log(`   Fee: ₹${courseObj.fee}/mo`);
    }
}

run();
