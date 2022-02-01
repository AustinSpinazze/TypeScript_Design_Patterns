// From the Docs - One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”.
// In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

// Definition - An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the
// deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.
interface IAnimal {
	name: string;
	age: number;

	feed(food: string, amount: number): void;
}

class Cat implements IAnimal {
	name: string;
	age: number;
	customProperty = 1234; // Classes can also have their own methods in variables outside of the interface

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	feed(food: string, amount: number): void {
		console.log(`Feeding ${this.name} the cat ${amount} kg of ${food}`);
	}
}

class Hamster implements IAnimal {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	feed(food: string, amount: number): void {
		console.log(`Feeding ${this.name} the hamster ${amount} kg of ${food}`);
	}

	// Classes can also have their own methods in variables outside of the interface
	customMethod(): boolean {
		console.log('This is a custom method');
		return true;
	}
}

const cat = new Cat('Mittens', 2);
cat.feed('fish', 2);
const hamster = new Hamster('Hammy', 1);
hamster.feed('carrots', 1);
