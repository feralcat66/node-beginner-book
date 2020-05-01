const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + 'received');

    route(handle, pathname);

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const content = route(handle, pathname);
    response.write(content);
    response.end();
  }
  http.createServer(onRequest).listen(6543);
  console.log('Server has started.');
}

module.exports = {
  start 
};




