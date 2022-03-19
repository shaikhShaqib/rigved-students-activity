var emp = /** @class */ (function () {
    function emp(id, name) {
        this.id = id;
        this.name = name;
    }
    // accessible outside the class
    emp.prototype.display = function () {
        document.write("<p>Id: ".concat(this.id, ", Name: ").concat(this.name, "</p>"));
    };
    emp.prototype.getId = function () {
        return this.id;
    };
    emp.prototype.setName = function (name) {
        this.name = name;
    };
    return emp;
}());
var e1 = new emp(100, 'radhe');
var e2 = new emp(200, 'devil');
e1.display();
e2.display();
