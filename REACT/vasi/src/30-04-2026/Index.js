console.log("Promise is in the pending state, and in the future it will either success or failure.")
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
console.log("Event Loop: the system that manages when code runs in JavaScript")
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

 //Normal Event
let ar = document.getElementById("btn")
let jb=0
ar.addEventListener("click",()=>{
    jb++
    console.log("button Clicked :",jb)
})

//Throttling
let lastClick = 0
let c = 0
ar.addEventListener("click",()=>{
let current = Date.now()
if(current-lastClick > 2000){
    c++
    console.log("throttling",c)
    lastClick = current
}
})

//Debouncing
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); 

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}