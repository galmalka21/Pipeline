const http = require('http');

// Define the port the server will listen on
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Send the response body
    res.end('Hello, World!\n');
});

// Make the server listen on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
