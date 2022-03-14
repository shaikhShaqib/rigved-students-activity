class emp {
    // accessed only inside a class
    private readonly id : number;
    private name : string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    // accessible outside the class
    public display(): void {
        document.write(`<p>Id: ${this.id}, Name: ${this.name}</p>`);
    }

    public getId(): number {
        return this.id;
    }

    public setName(name: string) : void {
        this.name = name;
    }
}

let e1 = new emp(100,'radhe');
let e2 = new emp(200,'devil');
e1.display();
e2.display();