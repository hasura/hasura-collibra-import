const USERNAME = "admin";
const process = require("process");

const commandsFile = process.argv[2];

if (!commandsFile) {
  console.log("Usage: node convert.js <commands-file>");
}
console.log("Using commands file: ", commandsFile);
