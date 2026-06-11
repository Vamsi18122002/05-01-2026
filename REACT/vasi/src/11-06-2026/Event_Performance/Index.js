//Normal Event
let a = document.getElementById("btn")
let b = 0;
a.addEventListener("click", ()=>{
    b++
console.log("Button Clicked", b)})

//Throttling
let lastClick = 0;
let c = 0;
a.addEventListener("click", ()=>  {
let current = Date.now()
if(current - lastClick > 2000){
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

