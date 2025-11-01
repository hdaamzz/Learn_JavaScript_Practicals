//validate params
function add(a,b){
    return a+b;
}
function validateNum(fn){
    return function (a,b){
        if(typeof a !== "number" || typeof b!=="number" ){
            throw new Error("Both arg is not number")
        }
        return fn(a,b);
    };
}

const safeAdd=validateNum(add);
console.log(safeAdd(10,10))
// console.log(safeAdd(10,true))

//count the number of function calls

function countCalls(func){
    let count=0;
    return function (...args){
        count++;
        console.log(`function called ${count} times..`);
        return func(...args)
    }
}
const greet=()=>console.log("Hello");

const decorateGreet=countCalls(greet);
console.log(countCalls(greet));

decorateGreet()
decorateGreet()
decorateGreet()

//
function decoratorFunc(func){
    return function(...args){
        console.log("inside fuction called")
        return func(...args)
    }
}
function greet1(){
    console.log("Hello world")
}

const dec=decoratorFunc(greet1);

dec()
