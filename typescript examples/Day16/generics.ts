function identity<T>(a: T) {
    return a;
}

let a1 : string = identity<string>('Hello');
let a2 : number = identity<number>(322);
let a3 : boolean = identity<boolean>(true);
document.write(`<p>a1 = ${a1}, a2 = ${a2}, a3 = ${a3}</p>`);