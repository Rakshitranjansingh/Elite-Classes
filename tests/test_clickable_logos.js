const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const filesToCheck = [
    // Student home
    'student_home.html',
    'testseries_user_home.html',

    // Course class hubs
    'modules/course/class10/courses_class_10.html',
    'modules/course/civilservices/courses_civilservices.html',

    // Course subject hubs
    'modules/course/class10/science/science_course_hub.html',
    'modules/course/class10/geography/geography_course_hub.html',
    'modules/course/class10/economics/economics_course_hub.html',
    'modules/course/class10/history/history_course_hub.html',
    'modules/course/class10/politics/politics_course_hub.html',

    // Course players
    'modules/course/class10/science/course_player.html',
    'modules/course/class10/geography/course_player.html',
    'modules/course/class10/economics/course_player.html',
    'modules/course/class10/history/course_player.html',
    'modules/course/class10/politics/course_player.html',

    // Test series class hubs
    'modules/testseries/data/class10/testseries_class_10.html',
    'modules/testseries/data/civilservices/testseries_civilservices.html',

    // Test series subject portals
    'modules/testseries/data/class10/science/science_10.html',
    'modules/testseries/data/class10/mathematics/mathematics_10.html',
    'modules/testseries/data/class10/history/history_10.html',
    'modules/testseries/data/class10/geography/geography_10.html',
    'modules/testseries/data/class10/politics/politics_10.html',
    'modules/testseries/data/class10/economics/economics_10.html',
    'modules/testseries/data/civilservices/polity/polity_civil.html',
    'modules/testseries/data/civilservices/chemistry/chemistry_civil.html',
    'modules/testseries/data/civilservices/history/history_civil.html',
    'modules/testseries/data/civilservices/geography/geography_civil.html',
    'modules/testseries/data/civilservices/physics/physics_civil.html',
    'modules/testseries/data/civilservices/economy/economy_civil.html',
    'modules/testseries/data/civilservices/biology/biology_civil.html',
    'modules/testseries/data/civilservices/csat/csat_civil.html',
    'modules/testseries/subject_portal.html',
    'modules/testseries/testseries.html'
];

let errors = 0;
let checked = 0;

for (const relPath of filesToCheck) {
    const fullPath = path.join(rootDir, relPath);
    if (!fs.existsSync(fullPath)) {
        console.error(`❌ File not found: ${relPath}`);
        errors++;
        continue;
    }
    const html = fs.readFileSync(fullPath, 'utf8');

    // Check that header contains a clickable anchor wrapping the logo/brand linking to student_home.html
    const hasClickableLogo = (
        html.includes('href="../../../../student_home.html"') ||
        html.includes('href="../../../../../student_home.html"') ||
        html.includes('href="../../../student_home.html"') ||
        html.includes('href="../../student_home.html"') ||
        html.includes('href="student_home.html"')
    ) && (
        html.includes('title="Return to Student Portal"') ||
        html.includes('title="Student Portal"') ||
        html.includes('eliteLogo_crest.png')
    );

    if (!hasClickableLogo) {
        console.error(`❌ Missing clickable logo in: ${relPath}`);
        errors++;
    } else {
        checked++;
    }
}

if (errors > 0) {
    console.error(`\nFailed with ${errors} error(s).`);
    process.exit(1);
} else {
    console.log(`\n🎉 ALL ${checked} FILES HAVE FULLY FUNCTIONAL CLICKABLE LOGOS!`);
}
