function test(a, b, c) {
    document.write("<p>a = ".concat(a, ", b = ").concat(b, ", c = ").concat(c, "</p>"));
}
test(20);
test(20, 30);
test(20, 30, 40);
// here user has lastname as an optional property.
var user;
document.write("<p>Name: ".concat(user.firstName, ", contact no: ").concat(user.contact, "</p>"));
