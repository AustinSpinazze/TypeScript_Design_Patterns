"use strict";
class Cat {
    constructor(name, age) {
        this.customProperty = 1234; // Classes can also have their own methods in variables outside of the interface
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log(`Feeding ${this.name} the cat ${amount} kg of ${food}`);
    }
}
class Hamster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log(`Feeding ${this.name} the hamster ${amount} kg of ${food}`);
    }
    // Classes can also have their own methods in variables outside of the interface
    customMethod() {
        console.log('This is a custom method');
        return true;
    }
}
const cat = new Cat('Mittens', 2);
cat.feed('fish', 2);
const hamster = new Hamster('Hammy', 1);
hamster.feed('carrots', 1);
