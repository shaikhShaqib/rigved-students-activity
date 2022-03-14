interface A {
    name : string;
}

interface B {
    phone : number;
}

// obj is of both a and b.
let obj : A & B;
obj = {name: 'alex', phone: 8323487320};
document.write(`<p>Name = ${obj.name}, Mobile no = ${obj.phone}</p>`);