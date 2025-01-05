//Reverse each word in a string without using any built in methods.

function reverseEachWord(input) {
    let result = '';
    let word = '';
    
    for (let char of input + ' ') {
        if (char === ' ') {
            // Reverse and add the collected word
            for (let i = word.length - 1; i >= 0; i--) {
                result += word[i];
            }
            result += char;
            word = '';
        } else {
            word += char;
        }
    }
    return result;
}
const rev=reverseEachWord("hello world");
console.log(rev);

// Second largest in an array.

function findSecondLargest(arr){
    if(arr.length < 2){
        return 
    }
    let largest=-Infinity;
    let secondLargest=-Infinity;
    for(let value of arr){
        if(value > largest){
            secondLargest=largest;
            largest=value;
        }
        if(value > secondLargest && value !== largest){
            secondLargest=value
        }
    }
    return secondLargest;
}
let arr=[1,3,7,2,8,5,24,23,33,6,8];
console.log(findSecondLargest(arr));

//find combination of two numbers given sum as 4?

function findPairsWithSum(arr,target){
    const pairs=[];
    let seen =new Set()
    for(let num of arr){
        const combination=target-num;
        if(seen.has(combination)){
            pairs.push([combination,num])
        }
        seen.add(num)
    }
    return pairs;
}
console.log(findPairsWithSum(arr,7));

