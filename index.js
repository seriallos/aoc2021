import { performance } from 'perf_hooks';

import _ from 'lodash';

import { getInput } from './util.js';

async function main() {
  const day = parseInt(process.argv[2], 10);

  if (!day || day > 25) {
    console.log('Invalid day input');
    process.exit(1);
  }

  try {
    const testInput = await getInput(day, 'test.txt');
    const realInput = await getInput(day, 'input.txt');

    const module = await import(`./day${day}/solution.js`);
    const solve = module.default;

    console.log('Test Input');
    console.log('===================================');
    const testStart = performance.now();
    solve(testInput);
    const testDuration = performance.now() - testStart;
    console.log(`Runtime: ${_.round(testDuration, 3)}ms`);

    console.log();
    console.log();

    console.log('Real Input');
    console.log('===================================');
    const realStart = performance.now();
    solve(realInput);
    const realDuration = performance.now() - realStart;
    console.log(`Runtime: ${_.round(realDuration, 3)}ms`);
  } catch (err) {
    console.log(err);
  }
}

main();
