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

let de=0
let mw = setTimeout(()=>{  
    de++
    console.log("value of d",de)
},2000)
clearTimeout(mw)

//Settimeout
function greet() {
  console.log("Hello!");
}
const timerId = setTimeout(greet, 5000);
setTimeout(() => {
  clearTimeout(timerId);
  console.log("Greeting cancelled");
}, 2000);


let count = 0;
const timer = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(timer);
    console.log("Stopped");
  }
}, 1000);
 
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