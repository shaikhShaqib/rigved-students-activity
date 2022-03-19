class person {
    public name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends person {
    constructor(name, age) {
        super(name, age)
    }
    printData(): void {
        // we can access age as it is inherited
        document.write(`<p>Name: ${this.name}, Age: ${this.age}</p>`);
    }
}

let e = new Employee('alex', 35);
e.printData();
e.name = 'Alex';
e.printData();