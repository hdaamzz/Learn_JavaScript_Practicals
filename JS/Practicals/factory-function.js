function factory(name,age){
    return {
        name:name,
        age:age,
        greet:()=>{
            console.log(`my name is ${name} and my age is ${age}`);
            
        }
    }
}
let obj=factory("Alice",33)
obj.greet()
console.log(factory("Alice",33));
