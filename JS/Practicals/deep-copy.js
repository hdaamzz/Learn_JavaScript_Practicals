//object deep copy without builtin methods 

function deepCopy(obj){
    if(obj ===null || typeof obj !=='object'){
        return obj
    }
    let copy=Array.isArray(obj)?[]:{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key]=deepCopy(obj[key])
        }
    }
    return copy;
}

// Example Usage
let original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        zip: "10001"
    }
};

let copied = deepCopy(original);

copied.name = "Doe"; // Change the name
copied.hobbies.push("traveling"); // Add a new hobby

console.log(original); // Original remains unchanged
console.log(copied);


//Array deep copy without builtin methods 

function deepCopyArray(arr){
    if(!Array.isArray(arr)){
        throw new Error('Input is not an array');
    }
    let copy=[]
    for(let item of arr){
        if(typeof item ==='object' && item !== null ){
            copy.push(deepCopyArray(item))
        }else{
            copy.push(item);
        }
    }
    return copy;
}

// Example
let arr = [1, [2, 3], { a: 4 }];
let copiedArr = deepCopyArray(arr);
console.log(copiedArr);

