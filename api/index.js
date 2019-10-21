const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
    
    } else if (req.method === 'POST' && req.url === '/') {
        req.on('data', (chunk) => {

        });
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify({'message': 'Done'}));
    } else {
        res.write('Not found');
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
