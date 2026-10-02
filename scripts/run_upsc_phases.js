/**
 * run_upsc_phases.js
 * Master orchestrator for generating UPSC Chapter Tests across defined phases
 * Strictly uses Gemini 3.1 Flash Lite & Gemini 3.5 Flash Lite
 */
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const PHASES = [
  {
    phase: 1,
    name: 'Foundation GS-I & GS-III',
    subjects: ['ancient_history', 'art_and_culture', 'disaster_mgmt']
  },
  {
    phase: 2,
    name: 'Core GS-I History & Society',
    subjects: ['society', 'indian_society', 'medieval_history', 'modern_history']
  },
  {
    phase: 3,
    name: 'Core GS-II Polity, IR & Security',
    subjects: ['polity', 'governance_ethics', 'internal_security', 'ir']
  },
  {
    phase: 4,
    name: 'Core GS-III Economy, Environment & Tech',
    subjects: ['economy', 'environment', 'science_tech', 'history', 'geography']
  }
];

function runSubject(subject) {
  return new Promise((resolve, reject) => {
    console.log(`\n================================================================`);
    console.log(`>>> STARTING SUBJECT: ${subject.toUpperCase()}`);
    console.log(`================================================================\n`);

    const scriptPath = path.join(__dirname, 'generate_upsc_tests.js');
    const child = spawn(process.execPath, [scriptPath, '--subject', subject], {
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`\n>>> SUBJECT COMPLETE: ${subject}\n`);
        resolve();
      } else {
        console.warn(`\n>>> SUBJECT FINISHED WITH CODE ${code}: ${subject}\n`);
        resolve(); // Continue to next subject even on non-zero exit
      }
    });

    child.on('error', (err) => {
      console.error(`\n>>> SUBJECT ERROR (${subject}):`, err);
      resolve();
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const targetPhase = args.includes('--phase') ? parseInt(args[args.indexOf('--phase') + 1]) : null;

  for (const p of PHASES) {
    if (targetPhase && p.phase !== targetPhase) continue;

    console.log(`\n################################################################`);
    console.log(`### EXECUTING PHASE ${p.phase}: ${p.name}`);
    console.log(`################################################################\n`);

    for (const subject of p.subjects) {
      await runSubject(subject);
      // Refresh portals
      try {
        const portalScript = path.join(__dirname, 'generate_upsc_portals.js');
        const { execSync } = require('child_process');
        execSync(`node "${portalScript}" --all`, { stdio: 'pipe' });
      } catch (e) {}
    }
  }

  console.log('\n================================================================');
  console.log('ALL REQUESTED PHASES COMPLETED!');
  console.log('================================================================\n');
}

main().catch(console.error);
