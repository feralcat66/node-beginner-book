function start() {
  console.log('Request handler \'start\' was called.');

  function sleep(milliSeconds) {
    const startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000);
  return 'This is the Start';
}

function upload() {
  console.log('Request handler \'upload\' was called');
  return 'Yee haw! This is the upload!';
}

module.exports = {
  start,
  upload,
};

