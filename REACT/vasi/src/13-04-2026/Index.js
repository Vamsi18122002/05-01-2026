console.log("Promise is in the pending state, and in the future it will either success or failure.")
let p1 = new Promise((resolve,reject)=>{
    let status = false
    if(status){
        resolve("completed")
    }else{
        reject("pending")
    } 
})  
.then(()=>{
    console.log("possible")
})
.catch(()=>{
    console.log("impossible")
})
// Promise.all
let promise1 = Promise.resolve("gone")
let promise2 = Promise.reject("Still Struggling")
Promise.all([promise1,promise2])
.then(()=>{
    console.log("getting")
})
.catch((e)=>{ 
    console.log(e)
})
let p12 = Promise.resolve("All is Well")
let p123= Promise.resolve("Still pending")
Promise.all([p12,p123])
.then((k)=>{
    console.log(k)
})
.catch((e)=>{ 
    console.log(e)
})

//Promise.race
let pa = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("pa done")
    },7000)
})
let pb = new Promise((reject)=>{
    setTimeout(()=>{
        reject("pb is not fulfilled")
    },6000)
})
Promise.race([pa,pb])
.then((g)=>{
    console.log(g)
})
.catch((h)=>{
    console.log(h)
})
//Promise.allSettled()
Promise.allSettled([pa,pb])

.then((a)=>{
    console.log(a)
})

//Promise.any()
Promise.any([pa,pb])

.then((p)=>{
    console.log(p)
})

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

//call back
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
greet("John", sayBye);

