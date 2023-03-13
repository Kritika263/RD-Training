const http = require("http");

const url = require('url');
const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const name = queryObject.name;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
});
const port = 5000; 
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});