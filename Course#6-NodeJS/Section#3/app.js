const http = require("http");
const server= http.createServer((req, res) => {
  console.log("Request Object", req);
});
console.log(server);
