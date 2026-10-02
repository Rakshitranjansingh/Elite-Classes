const fs = require('fs');
const assert = require('assert');

const subjects = [
    'ancient_history', 'art_and_culture', 'disaster_mgmt', 'economy',
    'environment', 'geography', 'governance_ethics', 'history',
    'indian_society', 'internal_security', 'ir', 'medieval_history',
    'modern_history', 'polity', 'science_tech', 'society'
];

subjects.forEach(sub => {
    // 1. Check UPSC test series portal
    const testPortalPath = `modules/testseries/data/civilservices/UPSC/Chaptertests/${sub}/${sub}_upsc.html`;
    assert(fs.existsSync(testPortalPath), `Missing UPSC test portal for ${sub}: ${testPortalPath}`);
});

// Check master course hub & test hub
assert(fs.existsSync('modules/course/civilservices/courses_civilservices.html'), 'Missing master courses_civilservices.html');
assert(fs.existsSync('modules/testseries/data/civilservices/testseries_civilservices.html'), 'Missing master testseries_civilservices.html');

console.log('ALL CIVIL SERVICES HUBS AND TEST SERIES VERIFIED SUCCESSFULLY!');
