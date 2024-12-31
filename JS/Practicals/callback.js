function add(a,b,callback){
    setTimeout(()=>{
        console.log("Fetching add data...");
        callback(null,a+b)
    },1000)
}
function sub(a,b,callback){
    setTimeout(()=>{
        console.log("Fetching sub data...");
        callback(null,a-b)
    },1000)
}
function mul(a,b,callback){
    setTimeout(()=>{
        console.log("Fetching mul data...");
        callback(null,a*b)
    },1000)
}

function div(a,b,callback){
    setTimeout(()=>{
        console.log("Fetching div data...");
        callback(null,a/b)
    },1000)
}

add(1,200,(err,total)=>{
    if(err){
        console.error(err);
        
    }else{
        sub(total,10,(err,subed)=>{
            if(err){
                console.error(err);
                
            }else{
                mul(subed,5,(err,res)=>{
                    if(err){
                        console.error(err);
                        
                    }else{
                        div(res,2,(err,final)=>{
                            console.log("Result : ",final);
                        })
                    }
                })
            }
        })
    }
})


//consvert to promise

function adding(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Fetching add data...");
            res(a+b)
        },1000)
    })
}

function subbing(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Fetching sub data...");
            res(a-b)
        },1000)
    })
}

function multing(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Fetching mul data...");
            res(a*b)
        },1000)
    })
}

function divving(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Fetching div data...");
            res(a/b)
        },1000)
    })
}

adding(50,50)
.then(sum=>subbing(sum,2))
.then(sub=>multing(sub,5))
.then(mul=>divving(mul,2))
.then(res=>console.log(res))
.catch((err)=>console.error(err))


async function calculate() {
    try {
        const sum = await adding(10,20);
        const subVal = await subbing(sum,20);
        const mulVal= await multing(subVal,5);
        const total= await divving(mulVal,2)

        console.log(total)
    } catch (error) {
        console.error(error);
        
    }
}
calculate()
