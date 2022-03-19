function test (a: number, b?: number, c?: number) {
    document.write(`<p>a = ${a}, b = ${b}, c = ${c}</p>`);
}

test(20);
test(20,30);
test(20,30,40);

// here user has lastname as an optional property.
let user : {firstName: string, lastName?: string, contact: number};
document.write(`<p>Name: ${user.firstName}, contact no: ${user.contact}</p>`);