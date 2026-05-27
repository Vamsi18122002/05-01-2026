let a = document.getElementById("btn")
//Normal Event
let b=0;
a.addEventListener("click",()=>{
    b++;
    console.log("Button Clicked",b)
})

//Throttling
let lastClick=0;
let c = 0;
a.addEventListener("click",()=>{
let current = Date.now()
if(current-lastClick>2000){
        c++
        console.log("throttling",c);
        lastClick = current
}
 })

 //Debouncing
 function debounce(func,delay){
     let timer;
     return function(...args){
        clearTimeout(timer)
     }
     timer = setTimeout(() => {
        func.apply(this, args)
     }, delay);
 }


function throttle(fn, delay) {
  let lastExecution = 0;

  return function () {
    const currentTime = Date.now();

    if (currentTime - lastExecution >= delay) {
      lastExecution = currentTime;
      fn();
    }
  };
}
function test() {
  console.log("Function Called");
}
const throttledFn = throttle(test, 1000);
const interval = setInterval(throttledFn, 200);
setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped");
}, 6000)

//Iterator
const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());