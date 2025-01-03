const fs=require('fs');


//read a file

let readableStream=fs.createReadStream('mypage.txt',{encoding:'utf8'})

readableStream.on('data',(chunk)=>{
    console.log(`Reading chunk  ${chunk}`);
})
readableStream.on('end',()=>{
    console.log('Finished');
    
})
//write a file

const writableStream=fs.createWriteStream('newData.txt')

writableStream.write('All he could think about was how it would all end. There was still a bit of uncertainty in the equation,but the basics were there for anyone to see.');

writableStream.write('No matter how much he tried to see the positive');
writableStream.end();

const updateStream=fs.createWriteStream('setnewData.txt')
for(let i=0;i<10;i++){
    setTimeout(()=>{
        let time=new Date
        updateStream.write(`${time}`)
    },5000)
        
}
for(let i=0;i<10;i++){
    setTimeout(()=>{
        let time=new Date
        updateStream.write(`${time}`)
    },5000)
        
}
