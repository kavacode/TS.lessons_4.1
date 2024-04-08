class Main {
	protected _color: string;
	protected _name: string;

	constructor(color: string, name: string) {
		 this._color = color;
		 this._name = name;
	}

	public get color(): string {
		 return this._color;
	}

	public get name(): string {
		 return this._name;
	}

}

class Circle extends Main {
	private _radius: number;

	constructor(color: string, radius: number) {
		 super(color, "Circle");
		 this._radius = radius;
	}

	public get radius(): number {
		 return this._radius;
	}

	public calculateArea(): number {
		 return Math.PI * this._radius ** 2;
	}
}

class Rectangle extends Main {
	private _width: number;
	private _height: number;

	constructor(color: string, width: number, height: number) {
		 super(color, "Rectangle");
		 this._width = width;
		 this._height = height;
	}

	public get width(): number {
		 return this._width;
	}

	public get height(): number {
		 return this._height;
	}

	public calculateArea(): number {
		 return this._width * this._height;
	}

	public print(): void {
		 console.log(`Area of ${this._color} ${this._name} = ${this.calculateArea()}`);
	}
}

class Square extends Rectangle {
	constructor(color: string, side: number) {
		 super(color, side, side);
		 this._name = "Square";
	}
}

class Triangle extends Main {
	private _base: number;
	private _height: number;

	constructor(color: string, base: number, height: number) {
		 super(color, "Triangle");
		 this._base = base;
		 this._height = height;
	}

	public get base(): number {
		 return this._base;
	}

	public get height(): number {
		 return this._height;
	}

	public calculateArea(): number {
		 return 0.5 * this._base * this._height;
	}
}







const circle = new Circle("orange", 7);
console.log(`Area of ${circle.color} ${circle.name} = ${circle.calculateArea()}`);
//Area of orange Circle = 153.93804002589985
const rectangle = new Rectangle("purple", 3, 8);
rectangle.print();
//Area of purple Rectangle = 24
const square = new Square("pink", 5);
square.print();
//Area of pink Square = 25
const triangle = new Triangle("cyan", 6, 9);
console.log(`Area of ${triangle.color} ${triangle.name} = ${triangle.calculateArea()}`);
//Area of cyan Triangle = 27