// here x and y would be of any type.
function test(x,...y) {
    let res = x;
    for(let i of y) {
        res += i; 
    }
    return res;
}

// here x and y must have numbers.
function sum(x : number, ...y : number[]) {
    let res = x;
    for(let i of y) {
        res += i;
    }
    return res;
}

let r = test(10,'20','30',40);
document.write(`<p>Result = ${r}</p>`);

r = sum(10,20,30,40);
document.write(`<p>Result = ${r}</p>`);