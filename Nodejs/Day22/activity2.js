let read=require('readline-sync');
let fs=require('fs');
let i = read.questionInt('Enter your id: ');
let n = read.question('Enter your name: ');
let s = read.questionInt('Enter your salary: ');
let employee = {id: i, name: n, salary: s};
let jsonString = JSON.stringify(employee);
let data = fs.readFileSync('activityFile.json').toString();
if(data.endsWith('}]') == true){
    let s1 = data.slice(1,(data.length-1))
    let s2 = data.slice(0,(data.length-1))
    let out = `${s2},\n${jsonString}]`
    fs.writeFileSync('activityFile.json',out);
    console.log('Done...')
}else{
    let out = `[${jsonString}]`
    fs.writeFileSync('activityFile.json',out);
    console.log('Done...')
}