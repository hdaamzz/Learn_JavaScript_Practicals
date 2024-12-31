// Polyfill for Array.forEach()
if (!Array.prototype.customForEach) {
    Array.prototype.customForEach = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('this is null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        const arr = Object(this);
        const len = arr.length >>> 0;

        for (let i = 0; i < len; i++) {
            if (i in arr) {
                callback.call(thisArg, arr[i], i, arr);
            }
        }
    };
}
