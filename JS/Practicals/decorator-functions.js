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

//validate parameter

function validateParams(fn){
    return function(...args){
        if(args.some((arg)=>typeof arg!=='number')){
            throw new Error ("All paramenter must be number")
        }
        return fn(...args)
    };
}

const add=(a,b)=>{
   return a+b
}
const sumAdd=validateParams(add);
// console.log(sumAdd(1,2));
// console.log(sumAdd(1,"3"));
