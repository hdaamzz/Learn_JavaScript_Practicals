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
