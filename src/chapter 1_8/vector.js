function Vector(x, y){
    this.x = x;
    this.y = y;
}

Object.defineProperty(Vector.prototype, "length", {
    get: function(){return Math.sqrt(this.x*this.x +this.y*this.y);}
});

Vector.prototype.plus = function(v){
    return new Vector(this.x + v.x, this.y + v.y);
};
Vector.prototype.minus = function(v){
    return new Vector(this.x - v.x, this.y - v.y);
};

//---- Test ------------------------------------
function testVector(){
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);

    if (p1.x !== 10) return 'Error: p1.x != 10';
    if (p1.y !== 20) return 'Error: p1.y != 20';
    if (p2.x !== -10) return 'Error: p2.x != -10';
    if (p3.x !== 0) return 'Error: p3.x != 0';
    if (p3.y !== 25) return 'Error: p3.y != 25';
    return 'All right!';
}

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length);
console.log(testVector());
