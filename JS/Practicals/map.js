const map = new Map();
console.log(map);//Map(0) {}

map.set('name', 'Alice');
map.set('age', 25);
console.log(map); // Map(2) { 'name' => 'Alice', 'age' => 25 }


console.log(map.get('name')); // Alice
console.log(map.get('age'));// 25


console.log(map.has('name')); // true
console.log(map.has('gender')); // false

map.delete('age');
console.log(map); // Map(1) { 'name' => 'Alice' }


console.log(map.size); // 1

map.set('age', 25);

for (const key of map.keys()) {
    console.log(key);
}
// name
// age
for (const value of map.values()) {
    console.log(value);
}
// Alice
// 25

for (const [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}
// name: Alice
// age: 25

map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// name: Alice
// age: 25

const array = Array.from(map);//or use spread
console.log(array); // [ [ 'name', 'Alice' ], [ 'age', 25 ] ]

// Map vs Object
// Map keys can be of any type (object, function, etc.).
// Object keys are always strings or symbols.

// Map is a versatile structure for managing key-value pairs.
// It supports various key types, including objects and functions.
// Useful for scenarios requiring efficient lookups or iteration over entries.