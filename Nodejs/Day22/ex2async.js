let x = 10;
let y = 30;
let z = x + y;
console.log(`z = ${z}`);
setTimeout(()=>{
    console.log('inside callback function');
},0);
console.log('end');