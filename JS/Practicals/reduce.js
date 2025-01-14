// Sum of All Numbers

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

//Find the Largest Number
const largest = numbers.reduce((max, current) => {
    return current > max ? current : max;
  }, numbers[0]);

//Find the Smallest Number

const smallest = numbers.reduce((min, current) => {
  return current < min ? current : min;
}, numbers[0]);

//Count Occurrences of Each Element

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const countObj = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

//Find Second Largest Number

const secondLargest = numbers.reduce((acc, curr) => {
    if (curr > acc.largest) {
        acc.secondLargest = acc.largest;
        acc.largest = curr;
    } else if (curr > acc.secondLargest && curr !== acc.largest) {
        acc.secondLargest = curr;
    }
    return acc;
}, { largest: -Infinity, secondLargest: -Infinity }).secondLargest;

//Sum of Even Numbers
const sumOfEvens = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);

// Sum of Odd Numbers
const sumOfOdds = numbers.reduce((acc, curr) => curr % 2 !== 0 ? acc + curr : acc, 0);

// Flatten an Array of Arrays
const flattened = nestedArrays.reduce((acc, curr) => acc.concat(curr), []);

// Group Objects by a Property
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];
const groupedByAge = people.reduce((acc, curr) => {
    (acc[curr.age] = acc[curr.age] || []).push(curr);
    return acc;
}, {});

// Find Maximum Product of Two Numbers
const maxProduct = numbers.reduce((acc, curr, index, arr) => {
    const product = arr.reduce((max, num, i) => 
        i !== index ? Math.max(max, curr * num) : max
    , 0);
    return Math.max(acc, product);
}, 0);

// Remove Duplicates
const uniqueNumbers = numbers.reduce((acc, curr) => 
    acc.includes(curr) ? acc : [...acc, curr]
, []);

// Calculate Average
const average = numbers.reduce((acc, curr, index, array) => 
    index === array.length - 1 ? (acc + curr) / array.length : acc + curr
, 0);

// Find Most Frequent Element
const mostFrequent = numbers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
const mostFrequentElement = Object.keys(mostFrequent).reduce((a, b) => 
    mostFrequent[a] > mostFrequent[b] ? a : b
);

// Reverse a String
const str = 'hello';
const reversed = str.split('').reduce((acc, curr) => curr + acc, '');

// Find Longest Word in an Array
const words = ['short', 'longer', 'longest'];
const longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
);

// Sum of Squares
const sumOfSquares = numbers.reduce((acc, curr) => acc + (curr * curr), 0);

// Merge Multiple Objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => ({ ...acc, ...curr }), {});

// Find Difference Between Largest and Smallest
const difference = numbers.reduce((acc, curr) => {
    acc.min = Math.min(acc.min, curr);
    acc.max = Math.max(acc.max, curr);
    return acc;
}, { min: Infinity, max: -Infinity });
const result = difference.max - difference.min;

// Check if All Elements Satisfy a Condition
const allEven = numbers.reduce((acc, curr) => acc && curr % 2 === 0, true);

// Calculate Factorial
const factorial = Array.from({ length: number }, (_, i) => i + 1)
    .reduce((acc, curr) => acc * curr, 1);

//find third largest 
const res = numbers.reduce((acc, curr) => {
    const { largest, secondLargest, thirdLargest } = acc;
  
    if (curr > largest) {
      acc.thirdLargest = acc.secondLargest;
      acc.secondLargest = acc.largest;
      acc.largest = curr;
    } else if (curr > secondLargest && curr !== largest) {
      acc.thirdLargest = acc.secondLargest;
      acc.secondLargest = curr;
    } else if (curr > thirdLargest && curr !== largest && curr !== secondLargest) {
      acc.thirdLargest = curr;
    }
  
    return acc;
  }, { largest: null, secondLargest: null, thirdLargest: null });
  
console.log(res.thirdLargest);

// remove duplicate even numbers from array
function removeDuplicateEvenNumber2(arr){
    let seen=new Set();
    return arr.reduce((acc,num)=>{
        if(num%2==0){
            if(!seen.has(num)){
                seen.add(num);
                acc.push(num)
            }
        }else{
            acc.push(num)
        }
        return acc
    },[])
}
