// Basic Prototype Example
function Person(name) {
    this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function() {
    return `Hello, I'm ${this.name}`;
};

const john = new Person("John");
console.log(john.sayHello());  // Output: "Hello, I'm John"
// ------------------------------------------------------------------

//Prototype chain 

function Animal(name){
    this.name=name
};

Animal.prototype.makeSound=function(){
    return " A animal sound"
}

function Dog(name,breed){
    Animal.call(this,name);
    this.breed=breed
}

Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.makeSound=function (){
    return " bow bow"
}

const arjun=new Dog("Arjun","Nadan Naya");

console.log(arjun.name);
console.log(arjun.breed);
console.log(arjun.makeSound());


// Check prototype chain
console.log(arjun instanceof Dog);    // true
console.log(arjun instanceof Animal); //true


// -----------------------------------------------------------------------

// Property Lookup Example
function Vehicle() {
    this.wheels = 4;
}

Vehicle.prototype.type = "Generic";

function Car(brand) {
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const toyota = new Car("Toyota");

console.log(toyota.brand);  // "Toyota" (own property)
console.log(toyota.wheels); // 4 (inherited from Vehicle)
console.log(toyota.type);   // "Generic" (inherited from Vehicle.prototype)


// ---------------------------------------------------------------------------------
// Modern JavaScript Class Syntax (still uses prototypes under the hood):
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Some sound";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        return "Woof!";
    }

    getInfo() {
        return `${this.name} is a ${this.breed}`;
    }
}

const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.getInfo());   // "Buddy is a Golden Retriever"
console.log(buddy.makeSound()); // "Woof!"


// Understanding prototypes is crucial for:

// Inheritance in JavaScript
// Memory efficiency (shared methods)
// Understanding how JavaScript objects work
// Implementing custom inheritance patterns
// Debugging property lookups


// ----------------------------------------------------------------------------
// Let's understand the difference between __proto__ and prototype
function Person(name) {
    this.name = name;
}

// Adding method to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const john1 = new Person("John");

// 1. prototype is a property of constructor functions
console.log(Person.prototype);  // { greet: [Function], constructor: ... }
console.log(john1.prototype);    // undefined (regular objects don't have prototype)

// 2. __proto__ is a property of all objects
console.log(john1.__proto__);    // { greet: [Function], constructor: ... }
console.log(john1.__proto__ === Person.prototype);  // true

// Key Differences:

// Ownership:

// prototype is a property of constructor functions only
// __proto__ is a property of all objects


// Purpose:

// prototype is used to establish what will become __proto__ for instances
// __proto__ is the actual link that JavaScript uses for the prototype chain

// Modern Usage:

// __proto__ is considered deprecated for direct manipulation
// Modern alternatives are Object.getPrototypeOf() and Object.setPrototypeOf()


// Best Practices:

// Avoid using __proto__ directly; it's deprecated
// Use Object.getPrototypeOf() and Object.setPrototypeOf()
// For creating objects with specific prototypes, use Object.create()
// When possible, use class syntax for clearer inheritance patterns