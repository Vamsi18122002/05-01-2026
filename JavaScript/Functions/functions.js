// functions

// what is a function
//  It is a block of code to do some task and return some value

// how define a function

// a)function declaration
// function function_name(){
// return }

// function hello(){
//     return'hello world'
// }

// console.log(hello())

// // b)function expression

// //  i)Named function
// //    var hello = function Hello(){
// //      return }

// var hello1 = function Hello(){
//     return 'hello world from named function'
// }
// console.log(hello1())

// //  ii)Ananymous function
// //    var hello = function(){
// //       return }

// var hello2 = function(){
//     return'hello world from ananymous function'
// }
// console.log(hello2())

// //  iii)Arrow function
// //     var hello = () => {
// //   }

// var hello3 = () => 'hello world from arrow function';
// console.log(hello3())



// arguments and parameters

// arguments
// arguments are the values which are given at the time of function calling

// parameters (or) place holders
// parameters are used to store the values of the function declaration



// function abcd(a,b){
//     console.log(a,b)
// }

// abcd(10,20,30,40)  //in this function we have 4 arguments but 2 parameters only so,to get remaining  we have a two ways
// // i)arguments object E.S-5
// // ii)rest parameters  E.S-6


// // i)arguments object
// function fghi(f,g){
//     console.log(f,g)
//     console.log(arguments) 
// }
// fghi(60,70,80,90)



// // ii)Rest Parameter
// // rest parameter is also a parameter
// // how to define a rest parameter "...restparameter"
// // reset parameter must be the last parameter in the parameter list

// function restparameter(a,b,d,e,f,...c){
//     console.log(a,b,d,e,f)
//     console.log(c)
// }
// restparameter(1,2,3,4,5,6,7,8,9,10,11,12)



// // Arrow function E.S-6

// var z = (val1,val2,val3,val4,...val5) => {
//     console.log(val1,val2)
//     console.log(val3,val4)
//     console.log(val5)
// }
// z(100,200,300,400,500,600,700,800,900,1000)

// Rest Parameter: It is used to collect all remaining arguments in single array variable

// Arguments: Arguments are the values which are given at time of function calling

// Parameters : Parameters are the place holders which are used to store the values of function declaration


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


// function declartion using Hoisting
// sum()

// function sum(){
//     console.log("1")
// }

// function expression using Hoisting 

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