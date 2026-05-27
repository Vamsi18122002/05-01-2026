// Hoisting
// Accessing the memory values even before it's Execution

// By using var
console.log(a,b) //it will stored in global scope and undefined printed
var a = 10
var b = 20
console.log(a,b)

// By using let, const
// console.log(A,B) //it will stored in temporary dead zone and reference error will be printed 
let A = 100
const B = "Hello"
console.log(A,B)

// k() //type error
var k = function hai(){
    console.log("hai")
}
k()

// closure
// Inner function remembers variables from outer function's scope
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

const counter = outer();
counter();
counter();
counter();

// Scope
// Accessibility and lifetime of that variable

// let var const
// var a = 10
// var b = 20
// let c = 30
// const d = 40
// // global scope
// function sum(){
//     // block scope
//     a = 30
//     c = 60
//     console.log(a,b,a+b)
//     console.log(c,d,c+d)
// }
// console.log(a,b)
// console.log(c,d)

// sum()
// console.log(a,b)
// console.log(c,d)


// // 
// let e = 10
// // global scope
// function sum(){
//     // block scope
//     {
//         let e = 1
//         let f = 2
//         console.log(e,f)
//     }
//     console.log(e)
// }

// sum()

let e = 10;
const f = 20;
// global scope

function sum() {
    // local scope
    let g = 30
    {
        // block scope
        let e = 1; 
        let f = 2; 
        console.log(e, f);
    }
    console.log(e,f);
    console.log(g);
    
}

sum();



//               scope                Hoisting                             Intialisation   
// var -->      functional              yes                                 no needed
// let -->      block                   yes(but differently)                no needed       
// const -->      block                  if they are not stored in script    needed
//                                      they may support hoisting


//           TDZ(Temporary Dead Zone)        Redeclaration         Reintialisation
// var           it didn't goes                 yes                     yes
// let          it goes                         no                      yes
// const        it goes                         no                       no




// closure:
// Inner function remembers variables from outer function


// How it works with inner and outdr functions
function outerFunction() {
  let count=0;

  function innerFunction() {
    count++;
    console.log(count)
  }

  return innerFunction;
}

const os = outerFunction(); 
os(); 
os();
os();




// IIFE(Immediately Innocable function expression)

var O1 = (() =>{

    var n ="Hai"
    var m ="Hello"
    console.log(n, m)

})()