let arr=[1,"33",true,43,"apple",43]

let set=new Set(arr)

console.log(set);//Set(5) { 1, '33', true, 43, 'apple' }

set.add(10)
console.log(set);//Set(6) { 1, '33', true, 43, 'apple', 10 }

set.delete(true);
console.log(set);//Set(5) { 1, '33', 43, 'apple', 10 }

console.log(set.has(10));//true

console.log(set.keys());//[Set Iterator] { 1, '33', 43, 'apple', 10 }

console.log(set.values());//[Set Iterator] { 1, '33', 43, 'apple', 10 }

console.log(set.entries());
//[Set Entries] {
//     [ 1, 1 ],
//     [ '33', '33' ],
//     [ 43, 43 ],
//     [ 'apple', 'apple' ],
//     [ 10, 10 ]
//   }

set.clear()
console.log(set);//Set(0) {}

