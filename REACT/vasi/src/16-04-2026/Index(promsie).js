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
console.log("Async and Await:- let us wait for slow tasks without asking stop the whole program")
function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}
async function hello1(){  //makes a function to return a promise
    return await hai()    //wait for the result
}
let s = hello1()
console.log(s) 


console.log("Event Loop : the system that manages when code runs in JavaScript")
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End"); 

console.log(this)

const user = {
  name: "Sai",
  show() {
    console.log(this.name);
  }
};
user.show(); 

