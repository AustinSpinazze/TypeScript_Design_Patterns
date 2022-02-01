// Abstract Classes in TypeScript are classes that cannot be instantiated. They are useful for defining interfaces that other classes must implement.
// They are useful for defining base classes that act as a blueprint for other classes. The class which implements the abstract class must implement all the abstract methods of the class.

class Car {
	model: string;
	color: string;

	constructor(model: string, color: string) {
		this.model = model;
		this.color = color;
	}

	drive(speed: number, direction: string): void {
		console.log(
			`The ${this.constructor.name} ${this.model} is driving at ${speed} km/h in the direction of ${direction}`
		);
	}
}

class Ford extends Car {
	isDriving: boolean;
	// Be aware of overriding any properties in the extended class as they will have
	// precedence over the the equivalent properties in the base/abstract class.
	model = 'GMC';

	constructor(model: string, color: string, isDriving: boolean) {
		super(model, color);
		// By initializing this.model here in the constructor it will then override Ford
		// class's model property and still use the Car class's model property (the
		// parameter passed in the constructor).
		this.model = model;
		this.isDriving = isDriving;
	}

	drive(speed: number, direction: string): void {
		if (this.isDriving) {
			super.drive(speed, direction);
		} else {
			console.log(
				`The ${this.constructor.name} ${this.model} is not driving`
			);
		}
	}
}
class Tesla extends Car {}

const ford = new Ford('Explorer', 'Red', false);
const tesla = new Tesla('Model X', 'Blue');
ford.drive(100, 'North');
tesla.drive(200, 'South');
