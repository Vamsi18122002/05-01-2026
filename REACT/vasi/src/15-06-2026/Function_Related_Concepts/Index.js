//Immediately Invoked Function Expression(IIFE)
//It is a function that is defined and executed immediately after it is created.
(function (name) {
    console.log("Hello, " + name);
})("John"); 

//function Currying
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(add(1)(2)(3)); 

//First class Function
function greet(name) {
  return `Hello ${name}`;
}

// Assign to a variable
const fn = greet;

// Pass as argument
function execute(callback) {
  console.log(callback("John"));
}

execute(fn);

// Return a function
function outer() {
  return () => console.log("Returned Function");
}

const returnedFn = outer();
returnedFn();

//Higher Order Function
function greet(name) {
  return `Hello ${name}`;
}

function execute(callback) { 
  console.log(callback("John"));
}

execute(greet);

//Pure function
function square(num) {
  return num * num;
}

console.log(square(4)); 
console.log(square(4)); 


//Impure Function
let count = 0;

function increment() {
  count++;
  return count;
}

console.log(increment()); 
console.log(increment());


//Recursive Function
function factorial(n) {
    if (n === 0) { 
        return 1;
    }
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); 