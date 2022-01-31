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
