let fs = require('fs');
let data = fs.readFileSync('activityFile.json');
let jsonStr = data.toString();
let jsObj = JSON.parse(jsonStr);

for( let i = 0; i < jsObj.length; i++) {
    let{id,name,salary} = jsObj[i];
    console.log(`Id = ${id}, Name = ${name}, Salary = ${salary}`);
}