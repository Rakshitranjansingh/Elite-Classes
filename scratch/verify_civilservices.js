const fs = require('fs');
const assert = require('assert');

const subjects = ['polity', 'history', 'geography', 'economy', 'csat', 'physics', 'chemistry', 'biology'];

subjects.forEach(sub => {
    // 1. Check course hub & player
    const hubPath = `modules/course/civilservices/${sub}/${sub}_course_hub.html`;
    const playerPath = `modules/course/civilservices/${sub}/course_player.html`;
    assert(fs.existsSync(hubPath), `Missing course hub for ${sub}: ${hubPath}`);
    assert(fs.existsSync(playerPath), `Missing course player for ${sub}: ${playerPath}`);

    // 2. Check course data dir
    const dataDir = `modules/course/data/civilservices/${sub}`;
    assert(fs.existsSync(dataDir), `Missing course data dir for ${sub}: ${dataDir}`);

    // 3. Check test series portal
    const testPortalPath = `modules/testseries/data/civilservices/${sub}/${sub}_civil.html`;
    assert(fs.existsSync(testPortalPath), `Missing test portal for ${sub}: ${testPortalPath}`);
});

// Check master test hub
assert(fs.existsSync('modules/testseries/data/civilservices/testseries_civilservices.html'), 'Missing master testseries_civilservices.html');

console.log('ALL 8 CIVIL SERVICES SUBJECTS AND MASTER HUBS VERIFIED SUCCESSFULLY!');
