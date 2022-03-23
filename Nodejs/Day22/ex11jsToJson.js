let fs = require('fs');
let employee = {id: 1, name: "Alex", salary: 32000};
let jsonStr = JSON.stringify(employee);

console.log(employee);
console.log(jsonStr);

fs.writeFileSync('emp.json',jsonStr);
console.log('Done...');
