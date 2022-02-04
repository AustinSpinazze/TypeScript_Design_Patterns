"use strict";
// Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself.
// Can create more than one instance of a class and each instance will have its own memory space. Meaning each instance will have its own copy of properties.
class ClassWithProperty {
    constructor() {
        this.abc = 123;
    }
}
// Can create more than one instance of static class but each instance will share the same memory space. Meaning each instance will share the same properties.
class ClassWithStaticProperty {
}
ClassWithStaticProperty.abc = 123;
// Can create more than one instance of a class and each instance will have its own memory space. Meaning each instance will have its own independent copy of methods.
class ClassWithMethod {
    method() {
        return 123;
    }
}
// Can create more than one instance of static class but each instance will share the same memory space. Meaning each instance will share the same methods.
class ClassWithStaticMethod {
    static method() {
        return 123;
    }
}
const classWithProperty = new ClassWithProperty();
console.log(classWithProperty.abc);
const classWithStaticProperty = new ClassWithStaticProperty();
// console.log(classWithStaticProperty.abc); // Error: Cannot access 'abc' because it is a static property of the class 'ClassWithStaticProperty' and does not exist in classWithStaticProperty instance.
// You must reference the property via the class name (in this case ClassWithStaticProperty) instead.
console.log(ClassWithStaticProperty.abc);
const classWithMethod = new ClassWithMethod();
console.log(classWithMethod.method());
const classWithStaticMethod = new ClassWithStaticMethod();
// console.log(classWithStaticMethod.method()); // Error: Cannot access 'method' because it is a static method of the class 'ClassWithStaticMethod' and does not exist in classWithStaticMethod instance.
// You must reference the method via the class name (in this case ClassWithStaticMethod) instead.
console.log(ClassWithStaticMethod.method());
// Example of a good use case for static members.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
// Obviously using Math.pi is a better way to do this but this is just an example.
Circle.PI = 3.14;
console.log(`Circle.PI = ${Circle.PI}`);
const circle = new Circle(1);
const circle2 = new Circle(2);
const circle3 = new Circle(3);
console.log(`Circle Area = ${Circle.PI * Math.pow(circle.radius, 2)}`);
console.log(`Circle2 Area = ${Circle.PI * Math.pow(circle2.radius, 2)}`);
console.log(`Circle3 Area = ${Circle.PI * Math.pow(circle3.radius, 2)}`);
