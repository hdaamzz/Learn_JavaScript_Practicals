// Polyfill for Array.reduce()
if (!Array.prototype.customReduce) {
    Array.prototype.customReduce = function(callback, initialValue) {
        if (this == null) {
            throw new TypeError('this is null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        const arr = Object(this);
        const len = arr.length >>> 0;
        let index = 0;
        let accumulator;

        if (arguments.length >= 2) {
            accumulator = initialValue;
        } else {
            if (len === 0) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            // Find the first non-empty index
            while (index < len && !(index in arr)) {
                index++;
            }
            if (index >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            accumulator = arr[index++];
        }

        while (index < len) {
            if (index in arr) {
                accumulator = callback.call(undefined, accumulator, arr[index], index, arr);
            }
            index++;
        }

        return accumulator;
    };
}

// Usage example of reduce polyfill
const numbers = [1, 2, 3, 4];
const sum = numbers.customReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10