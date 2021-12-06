// <<<How to Create a Server in Node.js>>>
// Fully Functional Web Server------Start
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  // url is simply everythings that comes after localhost:3000
  console.log("--------------------------------");
  console.log(req.method);
  console.log("--------------------------------");
  console.log(req.headers);
  const url = req.url;
  const method = req.method;
  switch (url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.write(
        `<html>
          <head>
            <title>Form</title>
          </head>
          <body>
            <form action="/message" method="POST">
            <input type="text" placeholder="Username" name="message"/>
            <button type="submit">Send</button>
            </form>
          </body>
        </html>`
      );
      if(url==="/message" && method==="POST"){
      fs.writeFileSync("./user.txt","user")
      }
      res.end();
      break;
    case "/about":
      res.setHeader("Content-Type", "text/html");
      res.write(
        `<html>
          <head>
            <title>About</title>
          </head>
          <body><h1>About</h1></body>
        </html>`
      );
      res.end();
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      res.write(
        `<html>
          <head>
          <title>Wrong Route</title>
          </head>
          <body>
          <h1>Please enter a valid route</h1>
          </body>
        </html>`
      );
      res.end();
  }

  // For quiting server:
  // process.exit();

  // res.end(); //At this line, The nodeJs are getting back to the user. and we can not
  // continue "write()" after this line.
});
server.listen(3000);
// Fully Functional Web Server------End
// --------------------------------------------------------
// Some notes :
// When a user insert a URL (in the above example, localhost:3000) or clicking on a link , they are actually a GET request.And this is actually means sending a message(request) to the server.See?super easy!
// But when a user insert her infos into a form it is actually a POST request.
