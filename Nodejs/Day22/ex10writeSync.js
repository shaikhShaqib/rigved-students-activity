let fs = require('fs');
let message = "Hello, My name is shaqib\n";
fs.writeFileSync('textFile.txt',message,{flag: 'a+'});
console.log("Done....");