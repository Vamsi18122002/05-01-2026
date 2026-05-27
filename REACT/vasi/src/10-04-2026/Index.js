console.log("1.Normal Event")
console.log("2.Throttling")
console.log("3.Debouncing")

//Normal Event
let a = document.getElementById("btn")
let b=0
a.addEventListener("click",()=>{
    b++
    console.log("button Clicked :",b)
})


//Throttling
let lastClick = 0
let c = 0
a.addEventListener("click",()=>{
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

let d=0
let m = setTimeout(()=>{  
    d++
    console.log("value of d",d)
},2000)
clearTimeout(m)

//Settimeout
function greet() {
  console.log("Hello!");
}
const timerId = setTimeout(greet, 5000);
setTimeout(() => {
  clearTimeout(timerId);
  console.log("Greeting cancelled");
}, 2000);