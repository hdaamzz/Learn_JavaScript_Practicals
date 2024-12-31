if(!Array.prototype.customMap){
    Array.prototype.customMap=function(callback,thisArgs){
        if(this == null){
            throw new TypeError('this is null or undefined');
        }
        if(typeof callback !== 'function'){
            throw new TypeError(callback+'is not a function');
        }

        const arr=Object(this);
        const len=arr.length>>>0;
        const result=new Array(len);

        for(let i=0;i<len;i++){
            if(i in arr){
                result[i]=callback.call(thisArgs,arr[i],i,arr);
            }
        }
        return result;
    };
}

const numbers=[1,2,3,4,5];
const newArr=numbers.customMap(x=>x*2);
console.log(newArr);
