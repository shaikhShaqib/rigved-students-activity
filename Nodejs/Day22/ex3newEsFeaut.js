class calci{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return (this.x + this.y);
    }
    findMin(...v) {
        let temp = v[0];
        v.forEach((item) => {
            if (item < temp) {
                temp = item;
            }
        });
        return temp;
    }
}

let c = new calci(20,30);
let r = c.add();
console.log(`Result = ${r}`);

let min = c.findMin(12,43,23,12,1);
console.log(`Min value is = ${min}`);