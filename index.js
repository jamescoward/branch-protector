#!/usr/bin/env node

const getBranch = require('./lib/getBranch');

const protectedBranch = process.argv[2];
let action = process.argv[3];
if (!action) {
  action = 'push'
}

// fail safe
process.exitCode = 1;

if (!protectedBranch) {
  process.stdout.write('No branch was provided\n');
  process.stdout.write('USAGE: branch-protector <BRANCH-TO-PROTECT>\n');
} else {
  getBranch().then((branch) => {
    if (branch.trim() !== protectedBranch) {
      // we good
      process.exitCode = 0;
    } else {
      process.stdout.write(`Tried to ${action} to protected branch ${protectedBranch}!\n`);
    }
  });
}
