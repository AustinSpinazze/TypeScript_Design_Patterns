"use strict";
// In JavaScript all classes, class properties, and class methods are public by default. So technically there is no need to specify the public access modifier in your TypeScript but it is still good practice as it makes your code more readable.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_address;
class Person {
    constructor(name, height, weight, address, age) {
        this.height = '';
        this.weight = 0;
        // Adding # is shorthand for private. Needs to be consistent with the constructor.
        _Person_address.set(this, '');
        this.age = 0;
        this.name = name;
        this.height = height;
        this.weight = weight;
        __classPrivateFieldSet(this, _Person_address, address, "f");
        this.age = age;
    }
    customPublicMethod() {
        console.log(`(Public Method) ${this.name} is ${this.age} years old. He is ${this.height} tall and weighs ${this.weight} pounds and lives at ${__classPrivateFieldGet(this, _Person_address, "f")}.`);
    }
    customPrivateMethod() {
        console.log(`(Private Method) ${this.name} is ${this.age} years old. He is ${this.height} tall and weighs ${this.weight} pounds and lives at ${__classPrivateFieldGet(this, _Person_address, "f")}.`);
    }
    customProtectedMethod() {
        console.log(`(Protected Method) ${this.name} is ${this.age} years old. He is ${this.height} tall and weighs ${this.weight} pounds and lives at ${__classPrivateFieldGet(this, _Person_address, "f")}.`);
    }
}
_Person_address = new WeakMap();
// Abstract classes/Sub classes cannot access private methods/properties but can access public and protected methods/properties.
class Employee extends Person {
    constructor(name, height, weight, address, age) {
        super(name, height, weight, address, age);
        console.log(`(Constructor) ${this.name} is ${this.age} years old and ${this.height} feet tall.`);
    }
}
const person = new Person('Austin', "5'10", 190, '123 Main St', 27);
// Private and Protected properties/methods cannnot be accessed outside of the class.
// console.log(person.name, person.height);
person.customPublicMethod();
// person.customPrivateMethod();
// person.customProtectedMethod();
