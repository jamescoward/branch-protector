#!/usr/bin/env node

const getBranch = require('./lib/getBranch');
const getConfirmation = require('./lib/getConfirmation');

const protectedBranch = process.argv[2];
let action = process.argv[3];
if(!action) {
  action = 'push'
}

// fail safe
process.exitCode = 1;

if (!protectedBranch) {
  process.stdout.write('No branch was provided\n');
  process.stdout.write('USAGE: branch-protector <BRANCH-TO-PROTECT>\n');
} else {
  getBranch().then((branch) => {
    const trimmedBranch = branch.trim();
    if (trimmedBranch === protectedBranch) {
      return getConfirmation(branch.trim(), action);
    }
    return 'yes';
  }).then((answer) => {
    const lowerTrim = answer.toLowerCase().trim();
    if (lowerTrim === 'yes' || lowerTrim === 'y') {
      process.exitCode = 0;
    }
  });
}
