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
let arr=[1,3,7,2,8,5,24,23,33,33,6,8];
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

// .find largest substring without vowels from a string

function findLargestSubString(str){
    let splited=str.split('');
    let vowels=["a","e","i","o","u"];
    let maxLength=1,currLength=1,start=0,maxLengthIndex=0;
    for(let i=1;i<splited.length;i++){
        if(!vowels.includes(splited[i])){
            currLength++
        }else{
            if(currLength > maxLength){
                maxLength=currLength;
                maxLengthIndex=start
            }
            currLength=1;
            start=i;
        }
    }
    if(currLength > maxLength){
        maxLength=currLength;
        maxLengthIndex=start
    }
    let res=splited.slice(maxLengthIndex,maxLengthIndex+maxLength)
    return res.join('')
}

// .Find the longest non-repeating substring in a string.
function longestNonRepeatingSubstring(str){
    let indexMap={},maxLength=0,start=0,sub="";
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char in indexMap && indexMap[char] >= start){
            start=indexMap[char]+1
        }
        indexMap[char]=i;
        let currLength=i-start+1;
        if(currLength > maxLength){
            maxLength=currLength;
            sub=str.slice(start,i+1)
        }
    }
    return sub
}

// find count of sub string of from a string 

function countSubstring(str,sub){
    let count=0,index=0;
    while((index=str.indexOf(sub,index))!== -1){
        count++;
        index+=sub.length;
    }
    return count;
}

function countSubstring1(str,sub){
    if(sub.length===0)return 0;
    return str.split(sub).length-1
}


// Sorting in descending order of array

function bubble(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}


//remove duplicate even numbers from array
function removeDuplicateEvenNumber(arr){
    let seen=new Set();
    return arr.filter((num)=>{
        if(num%2==0){
            if(seen.has(num)){
                return false
            }
            seen.add(num)
        }
        return true
    })
}
//removeduplicate even numbers from array without set
function removeEven(arr){
    const unique=[];
    for(let i=0;i<arr.length;i++){
        const num=arr[i];
        if(num%2==0){
            let isDup=false;
            for(let j=0;j<unique.length;j++){
                if(unique[j]==num){
                    isDup=true;
                    break
                }
            }
            if(!isDup){
                unique.push(num)
            }
        }else{
            unique.push(num)
        }
    }
    arr=unique
    return arr
}

// function to remove last property from an object
function removeObjectLastProperty(obj){
    let keys=Object.keys(obj);
    return delete obj[keys[keys.length-1]]
}

// find sum of age less than 30

const ages=[{ age: 28, name: "John Doe" },
    { age: 34, name: "Jane Smith" },
    { age: 29, name: "Alice Johnson" },
    { age: 42, name: "Bob Brown" }]
    
    function findSum(arr){
        let sum=0
        for(let i=0;i<ages.length;i++){
            let item=ages[i]
            if(item.age < 30){
                sum+=item.age
            }
        }
        return sum
    }

//sub array with max number of element in continously increasing order
function longestSequenze(arr){
    let res=[]
    let start=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1] || i == arr.length-1){
            let temp=arr.slice(start,i+1)
            if(res.length < temp.length){
                res=temp;
            }
            start+=temp.length
            
        }
    }
    return res
}

//generate n number of prime number
function generateNprime(n,res=[],flag){
    let curr=2
    while(res.length<n){
        let flag=false
        for(let j=2;j<=Math.sqrt(curr);j++){
            if(curr%j==0){
                flag=true
                break;
            }
        }
        if(!flag){
            res.push(curr)
        }
        curr++
    }
    return res
}

//remove Nth element
function removeNthElement(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== n) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

//--remove largest element in an array

let find=[2,3,5,8,5,3,7,8,6,65,5,4,3,2,2,34]

let maxI=0;

for(let i=0;i<find.length;i++){
    if(find[i]>find[maxI]){
        maxI=i
    }
}
for(let i=maxI;i<find.length-1;i++){
    find[i]=find[i+1];
}

//remove adjacent odd elements from array,

let ar=[1,2,3,3,3,4,5,1,6,7,7,8,98,8,8,11];
function removeadjacentodd(ar,res=[]){
    for(let i=0;i<ar.length;i++){
        if(!(ar[i]%2==1 && ar[i-1]%2==1)){
            res.push(ar[i])
        }
    }
    return res
}
