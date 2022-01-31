"use strict";
class Dog {
    constructor(name) {
        this.stepsWalked = 0;
        // Arrow function in TypeScript - returns nothing because void method
        this.walk = (steps) => {
            console.log(this.name + ' the dog has walked ' + steps + ' steps');
            this.stepsWalked += steps;
        };
        this.name = name;
        // this.stepsWalked = 0; could also initialize in constructor if not initialized already in class
    }
    // Regular function in TypeScript - returns a number
    totalStepsWalked() {
        return this.stepsWalked;
    }
}
const dog = new Dog('Bailey');
dog.walk(20);
dog.walk(20);
console.log(dog.name +
    ' the dog, has walked a total of ' +
    dog.totalStepsWalked() +
    ' steps');
