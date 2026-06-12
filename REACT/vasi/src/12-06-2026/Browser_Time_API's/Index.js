//Settimeout
let de=0
let mw = setTimeout(()=>{  
    de++
    console.log("value of d",de)
},2000)
clearTimeout(mw)

function greet() {
  console.log("Hello!");
}
const timerId = setTimeout(greet, 5000);
setTimeout(() => {
  clearTimeout(timerId);
  console.log("Greeting cancelled");
}, 2000);
 

let count = 1;
let intervalid = setTimeout(()=>{
    console.log("Count:", count);
    count++;
    
    if (count > 5) {
        clearInterval(intervalId);
        console.log("Interval Stopped");
    }
}, 1000);
