let fs = require('fs');
let data = fs.readFileSync("textFile.txt");
let content = data.toString();
console.log(content);