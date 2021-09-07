// const { log } = require('console');
const http = require('http');
const os = require('os');

console.log("Unhealthy Kubia server starting ...");

var requestCount = 0;
var maxRequestCount = 5;

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    requestCount++;
    if (requestCount > maxRequestCount) {
        response.writeHead(500);
        response.end("I am not well");
        return;
    }
    response.writeHead(200);
    response.end("You've hit " + os.hostname() + " // " + os.version() + "\n");
};

var www = http.createServer(handler)
www.listen(8080);
