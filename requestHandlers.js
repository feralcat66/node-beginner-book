const exec = require('child_process').exec;

function start() {
  console.log('Request handler \'start\' was called.');
  let content = 'empty';

  exec('ls -lah', function(error, stdout, stderr) {
    content = stdout;
  });

  return content;
}

function upload() {
  console.log('Request handler \'upload\' was called');
  return 'Yee haw! This is the upload!';
}

module.exports = {
  start,
  upload,
};
