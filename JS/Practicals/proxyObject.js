const user={
    name:'dilshad',
    age:23
}

// const handler={
//     get:(target,property)=>{
//         console.log(`Accessing Property ${property}`);
//         return target[property]
//     }
// }

// const proxy=new Proxy(user,handler);
// console.log(proxy.age)


const handler={
    set:(target,property,value)=>{
        if(property =='name'){
            target[property]=value.trim().replace(/[^a-zA-Z\s]/g,'');
            
        }else if(property =='age'){
            target[property]=value
        }
        return true
    }
}

// const target={
//     sercetData:"This  is a secret",
//     publicDate:"This is public"
// }

// const handler={
//     get:(target,property,receiver)=>{
//         if(property==='secretData' && receiver!=autherizedUser){
//             console.log('Unathorized access attempt');
//             return 'Access Denied'
//         }
//         console.log(`Accessing property : ${property}`);
//         return target[property]
//     }
// }
// const autherizedUser={name:"Jhon"}

// const proxy=new Proxy(target,handler)

// console.log(proxy.secretData)

// const handler={
//     deleteProperty:(target,property)=>{
//         if(property =='name'){
//             throw new Error ("you cant delete name field")
//         }else{
//             console.log(`${property} deleted~!`)
//           return delete target[property]
//         }
//     }
// }



// const proxy =new Proxy(user,handler);
// delete proxy.age
// console.log(user)

// const target=function (x,y){
//     return x+y;
// }


// const handler={
//     apply:(target,thisArg,args)=>{
//         console.log(`called with argument ${args}`)
//         return target(...args)*2
//     }
// }

// const proxy=new Proxy (target,handler);
// console.log(proxy(2,7))




















