// Require http module
var http = require("http");
console.log(typeof http);

// Create server
http.createServer(function (req, res) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "this is the example of node.js web based application"
    res.end('This is the example of node.js web-based application \n');

// console will display the message
}).listen(5000, () => console.log('Server running at http://127.0.0.1:5000/'));