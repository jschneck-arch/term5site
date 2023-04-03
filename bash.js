export function runCommand(command) {
  return new Promise(resolve => {
    let output = '';

    const process = require('child_process').spawn('/bin/bash');

    process.stdout.on('data', data => {
      output += data;
    });

    process.stderr.on('data', data => {
      output += data;
    });

    process.on('close', () => {
      resolve(output);
    });

    process.stdin.write(command + '\n');
    process.stdin.end();
  });
}
