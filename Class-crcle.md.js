class Circle {
constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
}

get radius() {
    return this._radius;
}

set radius(radius) {
    this._radius = radius;
}

get color() {
    return this._color;
}

set color(color) {
    this._color = color;
}

toString() {
    return `Circle[radius=${this._radius},color=${this._color}]`;
}

getArea() {
    return Math.PI * this._radius * this._radius;
}

getCircumference() {
    return 2 * Math.PI * this._radius;
}
}


const circle = new Circle(2.5, "blue");
console.log(circle.toString()); 
console.log("Area:", circle.getArea()); 
console.log("Circumference:", circle.getCircumference());