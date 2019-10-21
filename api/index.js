// TODO
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
