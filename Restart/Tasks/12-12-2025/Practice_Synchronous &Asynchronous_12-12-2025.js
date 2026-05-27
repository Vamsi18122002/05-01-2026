console.log("synchronous :- The code Runs line to line ,top to bottom")

console.log("1.start");
console.log("2.Between the start and stop");
console.log("3.stop");

console.log("Start");
function slowTask() {
  for (let i = 0; i < 3e9; i++) {} 
}
slowTask(); //(some delay)
console.log("End");

console.log("Asynchronous:- Asynchronous means JavaScript can start a task and continue doing other work without waiting for the task to finish.")
console.log("1.One");
setTimeout(()=>{
    console.log("2.Two")
},1000)
console.log("3.Three");

setTimeout(()=>{
    console.log("Another Example for Asynchronous")
},2000)
setTimeout(() => {
    console.log("1.start")
},5000)
setTimeout(()=>{
    console.log("between line start and stop")
},4000)
setTimeout(()=>{
    console.log("3.stop")
},3000)

//setInterval 
let a = setInterval(()=>{
    console.log("looping type we use setInterval")
},6000)

//clearInterval
setTimeout(() =>{
    clearInterval(a)
},18000)

//hello world printed 2 times
let b=setInterval(()=>{
    console.log("hello world")
},2) //2=2milliseconds
setTimeout(()=>{
    clearInterval(b)
},10)

let count = 0
let m = setInterval(()=>{
    count++
    console.log("something happen")
    if(count === 5){
        clearInterval(m)
    }
},7000)

//clearTimeout
const timer = setTimeout(() => {
  console.log("This will NOT run");
}, 3000);

clearTimeout(timer);



// //DOM Methods
// console.log(document)
// console.log(document.getElementById("heading"))
// console.log(document.getElementsByClassName("formattingTags"))
// console.log(document.getElementsByTagName("marquee"))
// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".formattingTags"))
// console.log(document.querySelector("#heading"))
// console.log(document.querySelectorAll("#heading"))

// //Traversing the DOM
// let a = document.getElementById("section1")
// console.log(a)
// console.log(a.parentElement)
//  console.log(a.children)
// console.log(a.firstElementChild)
// console.log(a.lastElementChild)
// let b = document.getElementById("heading")
// console.log(b.previousElementSibling)
// console.log(b.nextElementSibling)

// let c = document.createElement("a")
// c.innerText="welcome to anchor tag"
// console.log(c)

// a.append(c)
// // let d = document
// // a.prepend(c)
// let e = document.getElementById("heading")
// e.after("byeeee")
// e.before("hai")