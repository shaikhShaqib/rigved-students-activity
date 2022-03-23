let fs = require('fs');
let data = fs.readFileSync("emp.json");
let jsonStr = data.toString();
let jsObj = JSON.parse(jsonStr);
console.log(jsonStr);
console.log(jsObj);

let {id,name,sal} = jsObj;
console.log(`Id = ${id}, Name = ${name}, Salary = ${sal}`);