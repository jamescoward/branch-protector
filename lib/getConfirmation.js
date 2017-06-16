const readline = require('readline');

const getConfirmation = (branch, action) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(`You are currently on ${branch} are you sure you want to ${action}? (yes/no) `, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

module.exports = getConfirmation;