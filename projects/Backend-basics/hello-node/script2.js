const http = require("http");
const server = http.createServer((request, response) => {
  let header = request.headers;
  let method = request.method;
  let url = request.url;

  if (method === "GET" && url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    response.end("<h1> hello form node</h1>");
  }
});
server.listen(3000);
