const http = require("http"); // Out of the box - Node handles imports! CJS/ESM

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 201;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("x-test-header", "thisisatest")
  res.end("<h1>Hello, World!!</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// // 