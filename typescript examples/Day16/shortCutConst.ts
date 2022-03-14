class person {
    // short hand for creating a constructor.
    constructor(public name: string, public age: number){}

    display() : void {
        document.write(`<p>Name: ${this.name}, Age: ${this.age}</p>`);
    }
}

let p = new person('Bruce', 22);
p.display(); 