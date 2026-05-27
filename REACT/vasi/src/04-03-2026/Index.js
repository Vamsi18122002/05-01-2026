console.log("DOM Performance in JavaScript")
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
let d=0
let m = setTimeout(()=>{
    d++
    console.log("value of d",d)
},2000)
clearTimeout(m)