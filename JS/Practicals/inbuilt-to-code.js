
//Math.trunc 
console.log(Math.trunc(1233.42332));

let a=33.33
// 1.use loop
let b=a+''
let res=''
for(let item of b){
    if(item=='.'){
        break;
    }else{
        res+=item
    }
}
//2.use module 
let result=a-(a%1)
console.log(parseInt(res))

