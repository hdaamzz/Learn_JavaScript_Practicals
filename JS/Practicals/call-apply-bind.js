// Let's create a base object for demonstration
const person = {
    name: "John",
    greet: function(city, country) {
        return `Hello, I'm ${this.name} from ${city}, ${country}`;
    }
};

// Another object without greet method
const anotherPerson = {
    name: "Mike"
};


//-------------------------------------------------------------------------------------------
// call(): Calls a function with a given this value and arguments provided individually

// Basic call() usage
const result1 = person.greet.call(anotherPerson, "New York", "USA");
console.log(result1);  // "Hello, I'm Mike from New York, USA"

// Practical example with call()
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price, category) {
    // Call Product constructor using 'this' context
    Product.call(this, name, price);
    this.category = category;
}

const food = new Food("Pizza", 10, "Italian");
console.log(food);  // { name: "Pizza", price: 10, category: "Italian" }

// ---------------------------------------------------------------------------------//
// apply(): Similar to call(), but arguments are passed as an array


// Basic apply() usage
const args = ["London", "UK"];
const result2 = person.greet.apply(anotherPerson, args);
console.log(result2);  // "Hello, I'm Mike from London, UK"

// Practical example with apply()
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, numbers);
console.log(max);  // 5

// Modern alternative using spread operator
console.log(Math.max(...numbers));  // 5


// --------------------------------------------------------------------------------//
//bind(): Creates a new function with a fixed this value

// Basic bind() usage
const greetMike = person.greet.bind(anotherPerson);
console.log(greetMike("Paris", "France"));  // "Hello, I'm Mike from Paris, France"

// Partial application with bind()
const greetMikeUSA = person.greet.bind(anotherPerson, "New York", "USA");
console.log(greetMikeUSA());  // "Hello, I'm Mike from New York, USA"

//------------------------------------------------------------------------------------

// Method Borrowing:

const calculator = {
    numbers: [],
    sum: function() {
        return this.numbers.reduce((a, b) => a + b, 0);
    }
};

const calc1 = { numbers: [1, 2, 3] };
const calc2 = { numbers: [4, 5, 6] };

console.log(calculator.sum.call(calc1));  // 6
console.log(calculator.sum.call(calc2));  // 15


//-------------------------------------------------------
//Function Currying:

function multiply(a, b) {
    return a * b;
}

// Create specialized functions using bind
const multiplyByTwo = multiply.bind(null, 2);
const multiplyByTen = multiply.bind(null, 10);

console.log(multiplyByTwo(4));   // 8
console.log(multiplyByTen(5));   // 50


//---------------------------------------------------------

//key diffrenece
// Function to demonstrate differences
function demo(a, b) {
    console.log(this.name, a, b);
}

const obj = { name: "John" };

// call - immediate execution with individual arguments
demo.call(obj, 1, 2);     // "John 1 2"

// apply - immediate execution with array of arguments
demo.apply(obj, [1, 2]);  // "John 1 2"

// bind - returns new function, can be executed later
const boundDemo = demo.bind(obj, 1);
boundDemo(2);             // "John 1 2"

// Remember:

// call and apply execute immediately, while bind returns a new function
// call takes individual arguments, apply takes array of arguments
// bind allows partial application of arguments
// All three methods are used to control the this context in functions