const http = require("http");

http.createServer((req, res) => {
    res.end("Hello Nodejs");
}).listen(3000);