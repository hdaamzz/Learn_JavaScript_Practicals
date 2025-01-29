//--turn first letter to uppercase

let str="dillllssshaaaadd";
let res=''
for(let i=0;i<str.length;i++){
    if(i==0){
        let code=str.charCodeAt('d')
        res+=String.fromCharCode(code-32)
    }else{
        res+=str[i]
    }
    if(i==str.length-1){
        str=res
    }
}
console.log(str);

//find the longest non repeating substring in a string
let curr='';
let max=''
for(let i=0;i<word.length;i++){
    if(curr.includes(word[i])){
        if(curr.length>max.length){
            max=curr;
        };
        curr = curr.slice(curr.indexOf(word[i]) + 1);
    }
    curr+=word[i]
}
if (curr.length > max.length) {
    max = curr;
}

//find tomorrow’s date
let today=new Date();

let tomorrow=new Date();
tomorrow.setDate(today.getDate()-1)

// throw custom error type
class CustomError extends Error{
    constructor(msg){
        super(msg);
        this.name="Custom hd Error";
    }
}
try{
    throw new CustomError("This is a custom error message!")
}catch(err){
    if( err instanceof CustomError){
        console.error(`Caught a CustomError: ${err.message}`);
    }else{
         console.error(`An unexpected error occurred: ${err.message}`);
    }
}