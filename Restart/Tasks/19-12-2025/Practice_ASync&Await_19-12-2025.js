console.log("Async and Await:- let us wait for slow tasks without asking stop the whole program")

function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}
async function hello1(){
    return await hai()
}
let s = hello1()
console.log(s)

console.log("Iterators:- It is used for arrys and Go through items one by one")

let arr = ["vasikar",true,null,1564]
let k = arr[Symbol.iterator]() 

console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

console.log("Generator:- It is a special function that creates an iterator for you")

function* greeting(){
    yield "Good Morning"
    yield "vasikar"
    yield "How are you"
}
let m = greeting()
console.log(m.next())
console.log(m.next())
console.log(m.next())
console.log(m.next())

console.log("Array Destructuring")

let a = ["shankara",12345,"10th",false]
let  [A,B,C,D] = a  //Array Destructring

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(A,B,C,D) 

let Students = ["ramesh","suresh","mallesh",["raju","ranga"]];
let [F, G, H, [J, K]] = Students;
console.log(F, G, H, J, K);

console.log("Object Destructuring")

let worker = {f_name:"shameer",salary:"15000",Type:"typing"}
let {f_name,salary,type} = worker
console.log(f_name,salary,type)

let student = {name: "ravi",age: 20,city: "hyderabad",friends:{f1: "ram",f2: "krish"}};
let { name, age, city, friends: { f1, f2 } } = student;  
console.log(name, age, city, f1, f2);
