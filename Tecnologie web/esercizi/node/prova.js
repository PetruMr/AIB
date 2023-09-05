let n = 5;
function Rettangolo(base, altezza) {
    this.base = base;
    this.altezza = altezza;
    this.area = function() { return this.base * this.altezza; };
}


let x = new Rettangolo(2, 3);

Rettangolo.prototype.perimetro = function() { return 2 * (this.base + this.altezza); };
//x.perimetro = function() { return 2 * (this.base + this.altezza); };

let y = new Rettangolo(3, 4);

y.perimetro();

console.log(x.area()); // 6
console.log(x.perimetro()); // 10