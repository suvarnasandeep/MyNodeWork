const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server created and running on port ", req);
});

server.listen(3000);
