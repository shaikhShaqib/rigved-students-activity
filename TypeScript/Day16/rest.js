// here x and y would be of any type.
function test(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var res = x;
    for (var _a = 0, y_1 = y; _a < y_1.length; _a++) {
        var i = y_1[_a];
        res += i;
    }
    return res;
}
// here x and y must have numbers.
function sum(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var res = x;
    for (var _a = 0, y_2 = y; _a < y_2.length; _a++) {
        var i = y_2[_a];
        res += i;
    }
    return res;
}
var r = test(10, '20', '30', 40);
document.write("<p>Result = ".concat(r, "</p>"));
r = sum(10, 20, 30, 40);
document.write("<p>Result = ".concat(r, "</p>"));
