function* fibnacci(){
    let prev=0,curr=1;
    while(true){
        yield curr;
        [prev,curr]=[curr,prev+curr]
    }
}

let fib=fibnacci()

for(let i=1;i<10;i++){
    console.log(fib.next().value)
}


//pagination 

function* records(){
    for(let i=1;i<20;i++){
        yield {id:i,name:`User ${i}`}
    }
}


function getPage(rec,pageNum,pageSize){
    const gen=rec();
    const start=(pageNum-1)*pageSize;
    const end=start+pageSize;
    const pageData=[];
    
    let i=0;
    for(let r of gen){
        if(i >= start && i <end){
            pageData.push(r);
        }
        i++;
        if(i>=end) break;
    }
    return pageData;
}

console.log(getPage(records,1,5))