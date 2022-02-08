// The Factory Pattern Concept

interface IProduct {
	name: string;
}

class ConcreteProduct implements IProduct {
	name = '';
}

class ConcreteProductA extends ConcreteProduct {
	constructor() {
		super();
		this.name = 'ConcreteProductA';
	}
}

class ConcreteProductB extends ConcreteProduct {
	constructor() {
		super();
		this.name = 'ConcreteProductB';
	}
}

class ConcreteProductC extends ConcreteProduct {
	constructor() {
		super();
		this.name = 'ConcreteProductC';
	}
}

class Creator {
	static createObject(someProperty: string): IProduct {
		switch (someProperty) {
			case 'a':
				return new ConcreteProductA();
			case 'b':
				return new ConcreteProductB();
			case 'c':
				return new ConcreteProductC();
			default:
				throw new Error('Invalid product');
		}
	}
}

// The Client
const product = Creator.createObject('a');
console.log(product.name); // ConcreteProductA
// const product2 = Creator.createObject('d');
// console.log(product2.name); // Error - Invalid product
