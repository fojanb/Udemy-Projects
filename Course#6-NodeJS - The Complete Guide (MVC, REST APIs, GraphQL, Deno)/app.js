const tutorial = require("./tutorial");
const fs = require("fs");
fs.writeFileSync("Hello.txt","Hello from Node.js:)")
// "require" is the same as "import" in react-app. but "require" used in JS.
console.log("Hi, I am from node js!");
console.log(typeof tutorial);
console.log(tutorial);
console.log("-------------------------")
console.log(tutorial.sum(9, 11));
console.log(tutorial.PI);
console.log(tutorial.numCol);
console.log(tutorial.numCol.colors[2]);


// Working With Modules : Node Modules are basicaly Javascript files!
// Javascript on Server => Node.js