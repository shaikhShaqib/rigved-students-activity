var person = /** @class */ (function () {
    // short hand for creating a constructor.
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.display = function () {
        document.write("<p>Name: ".concat(this.name, ", Age: ").concat(this.age, "</p>"));
    };
    return person;
}());
var p = new person('Bruce', 22);
p.display();
