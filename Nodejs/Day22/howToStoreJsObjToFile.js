let r = require('readline-sync');
let fs = require('fs');

// firstly u need to assume there's already an array in file
let data = fs.readFileSync('emp.json');
let dataStr = data.toString(); // converts the byte stream to string
let jsArr = undefined;

if(dataStr.length < 1 || dataStr == "") {
    jsArr = [];
} else {
    jsArr = JSON.parse(dataStr);
}

let n = r.question('Enter Name: ');
let a = r.questionInt('Enter Age: ');
let emp = {Name: n, Age: a};

jsArr.push(emp); // pushes javascript object to js array
let jsonArr = JSON.stringify(jsArr); //xonverts javascript array to json array
fs.writeFileSync('emp.json',jsonArr); //write jsonArray to the file
