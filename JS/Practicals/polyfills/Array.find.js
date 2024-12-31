// Polyfill for Array.find()
if (!Array.prototype.customFind) {
    Array.prototype.customFind = function(callback, thisArg) {
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
                const element = arr[i];
                if (callback.call(thisArg, element, i, arr)) {
                    return element;
                }
            }
        }

        return undefined;
    };
}