function identity(a) {
    return a;
}
var a1 = identity('Hello');
var a2 = identity(322);
var a3 = identity(true);
document.write("<p>a1 = ".concat(a1, ", a2 = ").concat(a2, ", a3 = ").concat(a3, "</p>"));
