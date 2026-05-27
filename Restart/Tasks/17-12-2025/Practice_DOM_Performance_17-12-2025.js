console.log("DOM Performance in JavaScript")
console.log("1.Normal Event")
console.log("2.Throttling")

//1.Normal Event
let a = document.getElementById("btn")
let b=0
a.addEventListener("click",()=>{
    b++
    console.log("Button Clicked:",b)
})

// a.addEventListener("click",()=>{
//   console.log("another example for normal event")
// })

//2.Throttling
let lastClick = 0
let c =0
a.addEventListener("click",()=>{
    let current = Date.now()
    if(current-lastClick > 2000){
        c++
        console.log("throttling",c)
        lastClick = current
    }   
})

// //3.Debouncing
let d=0
let k=setTimeout(()=>{
    d++
    console.log("value of d",d)
},2000)
clearTimeout(k)

//call back Functions
function function1(s){
    console.log(s)
}
function one(a,b,c){
    console.log("one function is executed")
    c(a+b)
}
one(1,2,function1)

//promise
let p = new Promise(() =>{
    let status = false
    if(status){
        console.log("resolved")
    }else{
        console.log("rejected")
    }
})

// function season(m){
//  switch (m) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("winter")
//         break;
//     case  3:
//     case 4:
//     case   5:
//         console.log("spring")
//         break;
//     case 6,7,8:
//         console.log("summer")
//         break;
//     case 9,10,11:
//         console.log("autumn")
//     default:
//         console.log("out of month")
//         break;
//  }
// }
// season(1)

