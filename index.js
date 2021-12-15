// Your code here
class Polygon {
	constructor(arr) {
		this.arr = arr;
	}
	get countSides() {
		return this.arr.length;
	}
	get perimeter() {
		return this.arr.reduce((a, b) => a + b, 0);
	}
}
class Triangle extends Polygon {
	get isValid() {
		const sorted = this.arr.sort();
		return sorted[0] + sorted[1] > sorted[2] ? true : false;
	}
}
class Square extends Polygon {
	get isValid() {
		return this.arr.every((element, index, array) => element === array[0]);
	}
	get area() {
		return this.arr[0] * this.arr[0];
	}
}
