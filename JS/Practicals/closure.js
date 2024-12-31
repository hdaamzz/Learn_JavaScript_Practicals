// 1. Private Counter with Multiple Operations
function createCounter(initialValue = 0) {
    let count = initialValue
    return {
        increment: (step = 1) => {
            count += step;
            return count;
        },
        decrement: (step = 1) => {
            count -= step;
            return count
        },
        getValue: () => count,
        reset: () => {
            count = initialValue;
            return count
        }
    };
}
const count = createCounter(0);

// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment(4));
// count.reset()
// console.log(count.decrement(10));
// console.log(count.increment(4));

// 2. Memoization using Closure
function memoize(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Fetching the cache');
            return cache.get(key)
        }
        const result = fn(...args);
        cache.set(key, result);
        console.log('Calculating and caching');
        return result;
    };
}

const expensiveCalculation = memoize((n) => {
    return new Promise(res => setTimeout(() => res(n * 2), 1000));
})

// expensiveCalculation(10)
//     .then(result => console.log("Result:", result))
//     .catch(error => console.error("Error:", error));

// expensiveCalculation(10)
//     .then(result => console.log("Result:", result))
//     .catch(error => console.error("Error:", error));
// expensiveCalculation(12)
//     .then(result => console.log("Result:", result))
//     .catch(error => console.error("Error:", error));


// 3. Function Rate Limiter

function rateLimiter(fn,delay){
    let lastRun=0;
    
    return function (...args){
        const now = Date.now();

        if (now - lastRun >= delay){
            lastRun=now;
            return fn.apply(this,args);
        }else{
            console.log(`please wait ${delay - (now - lastRun)} ms before next call`);
            
        }
    };
}

const slowFunction=rateLimiter(()=>console.log('executed'),4000);


// slowFunction()
// slowFunction()
// slowFunction()
// setTimeout(slowFunction,3000)
// setTimeout(slowFunction,4000)
// slowFunction()
// setTimeout(slowFunction,5000)

// Common use cases:

// Throttling API requests
// Controlling game mechanics (shooting, power-ups)
// Limiting form submissions
// Preventing button spam
// Controlling animation frame rates

