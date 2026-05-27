console.log("Event Bubbling :- Event Bubbling travels from child element to parent element")

// let btn = document.getElementById("btn")
// console.log(btn)
let child = document.getElementById("innertext")
child.addEventListener("click", () =>{
console.log("inner h1 clicked")
})
let div = document.getElementById("div")
div.addEventListener("click",()=>{
    console.log("parent clicked")
})
let div1 = document.getElementById("div1")
div1.addEventListener("click",()=>{
    console.log("Parent for outer text clicked")
})
let child123 = document.getElementById("outertext")
child123.addEventListener("click", ()=>{
    console.log(" child for outer text")
})
// console.log("Event Capturing:- Event Bubbling travels from parent element to child element")

// let child1 = document.getElementById("innertext")
// child1.addEventListener("click", () =>{
// console.log("inner h1 clicked")
// },true)
// let div12 = document.getElementById("div")
// div12.addEventListener("click",()=>{
//     console.log("parent clicked")
// },true)
// let div2 = document.getElementById("div1")
// div2.addEventListener("click",()=>{
//     console.log("Top Parent clicked")
// },true)
// let parent2 = document.getElementById("outertext")
// parent2.addEventListener("click", ()=>{
//     console.log("outer text")
// },true)

 console.log("Event delegation")
 let dre = document.getElementById("veg-list")
 dre.addEventListener("click", (e)=>{
    console.log(e.target)
    console.log(e.target.innerText)
})
