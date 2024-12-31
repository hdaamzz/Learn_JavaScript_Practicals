// A constructor function in JavaScript is a special type of function used to create and 
// initialize objects. It is invoked with the new keyword and typically starts with a 
// capital letter to indicate that it's intended to be used as a constructor.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
Person.prototype.welcome=function (){
    console.log(`Welcome ${this.name}`);
}

const person1=new Person("Dilshad",22);
person1.greet()
person1.welcome()


