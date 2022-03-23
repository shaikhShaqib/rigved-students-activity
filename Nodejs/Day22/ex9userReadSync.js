let fs = require('fs');
let data = fs.readFileSync("textFile.txt");
let userInfo = data.toString();
let userItems = userInfo.split(";");
// object destructure syntax
let [name,age,gender] = userItems;
console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
