const fs = require('fs');
const assert = require('assert');

const subjects = ['polity', 'history', 'geography', 'economy', 'csat', 'physics', 'chemistry', 'biology'];

subjects.forEach(sub => {
    // 1. Check test series portal
    const testPortalPath = `modules/testseries/data/civilservices/${sub}/${sub}_civil.html`;
    assert(fs.existsSync(testPortalPath), `Missing test portal for ${sub}: ${testPortalPath}`);
});

// Check master course hub & test hub
assert(fs.existsSync('modules/course/civilservices/courses_civilservices.html'), 'Missing master courses_civilservices.html');
assert(fs.existsSync('modules/testseries/data/civilservices/testseries_civilservices.html'), 'Missing master testseries_civilservices.html');

console.log('ALL CIVIL SERVICES HUBS AND TEST SERIES VERIFIED SUCCESSFULLY!');
