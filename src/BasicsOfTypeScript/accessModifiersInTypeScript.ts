// In JavaScript all classes, class properties, and class methods are public by default. So technically there is no need to specify the public access modifier in your TypeScript but it is still good practice as it makes your code more readable.

class Person {
	name: string;
	public height: string = '';
	private weight: number = 0;
	// Adding # is shorthand for private. Needs to be consistent with the constructor.
	#address: string = '';
	protected age: number = 0;

	constructor(
		name: string,
		height: string,
		weight: number,
		address: string,
		age: number
	) {
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.#address = address;
		this.age = age;
	}

	public customPublicMethod(): void {
		console.log(
			`(Public Method) ${this.name} is ${this.age} years old. He is ${
				this.height
			} tall and weighs ${this.weight} pounds and lives at ${
				this.#address
			}.`
		);
	}

	private customPrivateMethod(): void {
		console.log(
			`(Private Method) ${this.name} is ${this.age} years old. He is ${
				this.height
			} tall and weighs ${this.weight} pounds and lives at ${
				this.#address
			}.`
		);
	}

	protected customProtectedMethod(): void {
		console.log(
			`(Protected Method) ${this.name} is ${this.age} years old. He is ${
				this.height
			} tall and weighs ${this.weight} pounds and lives at ${
				this.#address
			}.`
		);
	}
}

// Abstract classes/Sub classes cannot access private methods/properties but can access public and protected methods/properties.
class Employee extends Person {
	constructor(
		name: string,
		height: string,
		weight: number,
		address: string,
		age: number
	) {
		super(name, height, weight, address, age);
		console.log(
			`(Constructor) ${this.name} is ${this.age} years old and ${this.height} feet tall.`
		);
	}
}

const person = new Person('Austin', "5'10", 190, '123 Main St', 27);
// Private and Protected properties/methods cannnot be accessed outside of the class.
// console.log(person.name, person.height);
person.customPublicMethod();
// person.customPrivateMethod();
// person.customProtectedMethod();
