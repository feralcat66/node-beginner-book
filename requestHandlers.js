function start() {
  console.log(`Request handler 'start' was called.`);
  return `We startin' up`
}

function upload() {
  console.log(`Request handler 'upload was called`);
  return `yee haw upload!`
}

module.exports = {
  start,
  upload,
};

