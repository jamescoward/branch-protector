const exec = require('child_process').exec;

const getBranch = () => {
  return new Promise((resolve, reject) => {
    const child = exec('git symbolic-ref --short HEAD', (err, stdout, stderr) => {
      if (err) {
        reject(err);
      }
      resolve(stdout);
    });
  });
}

module.exports = getBranch;