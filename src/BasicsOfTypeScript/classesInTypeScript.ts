// TypeScript Classes are like a blueprint for creating objects. They are a way of defining the properties and methods that an object should have.
class Dog {
	name: string;
	stepsWalked: number = 0;

	constructor(name: string) {
		this.name = name;
		// this.stepsWalked = 0; could also initialize in constructor if not initialized already in class
	}

	// Arrow function in TypeScript - returns nothing because void method
	walk = (steps: number): void => {
		console.log(this.name + ' the dog has walked ' + steps + ' steps');
		this.stepsWalked += steps;
	};

	// Regular function in TypeScript - returns a number
	totalStepsWalked(): number {
		return this.stepsWalked;
	}
}

const dog = new Dog('Bailey');
dog.walk(20);
dog.walk(20);
console.log(
	dog.name +
		' the dog, has walked a total of ' +
		dog.totalStepsWalked() +
		' steps'
);
