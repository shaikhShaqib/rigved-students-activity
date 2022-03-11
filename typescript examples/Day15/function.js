// this function does not return any value.
function test(a, b) {
    document.write("test() a = ".concat(a, ", b = ").concat(b));
}
// this functions returns values. 
function test1(a, b) {
    document.write("<p>test1() a = ".concat(a, ", b = ").concat(b, "</p>"));
    return (a + b);
}
function test2(a, b) {
    document.write("<p>test1() a = ".concat(a, ", b = ").concat(b, "</p>"));
    return (a + b);
}
test(10, 20);
var r = test1(24, 36);
document.write("<p>Result of test1() is: ".concat(r));
var r1 = test2(15, 45);
document.write("<p>Result of test2() is: ".concat(r1));
