// this function does not return any value.
function test(a : number, b : number) : void{
    document.write(`test() a = ${a}, b = ${b}`);
}

// this functions returns values. 
function test1(a : number, b : number) : number {
    document.write(`<p>test1() a = ${a}, b = ${b}</p>`);
    return (a+b);
}

function test2(a : number, b : number) : number|string {
    document.write(`<p>test1() a = ${a}, b = ${b}</p>`);
    return (a+b);
}

test(10,20);

let r = test1(24,36);
document.write(`<p>Result of test1() is: ${r}`)

let r1 = test2(15,45);
document.write(`<p>Result of test2() is: ${r1}`)