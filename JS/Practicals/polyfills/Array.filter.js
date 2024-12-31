if(!Array.prototype.customFilter){
    Array.prototype.customFilter=function(callback,thisArgs){
        if(this == null){
            throw new TypeError(" this is null or undefined");
        }
        if(typeof callback !== 'function'){
            throw new TypeError(callback + ' is not a function');
        }

        const arr=Object(this)
        const len=arr.length >>>0
        const result=[]

        for(let i=0;i<len;i++){
            if(i in arr){
                if(callback.call(thisArgs,arr[i],i,arr)){
                    result.push(arr[i])
                }
            }
        }
       return result 
    };

}

const numbers=[1,2,3,4,5];

const filterNums=numbers.customFilter(x=>x%2==0)
console.log(filterNums);
