const Shapes = require('./Shapes');


class Rectangle extends Shapes {
    constructor(name, sideOne, sideTwo){
    super(name);
        this.sideOne = 10;
        this.sideTwo = 10;
        this.name = 'Rectangle';
    }

    getArea(){
        return this.sideOne * this.sideTwo;
    }

    isSquared(sideOne, sideTwo){
        return this.sideOne === this.sideTwo;
    }


}

module.exports = Rectangle;


b1 = new Rectangle("dog", 15, 10)
console.log(b1.getArea());
console.log(b1.getArea());
