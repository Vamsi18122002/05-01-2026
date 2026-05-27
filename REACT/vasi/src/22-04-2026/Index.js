//Objects : It is a Collecttion of Key-value Pair

let person = {
  name: "bhanu",
  age: 21,
  city: "USA"
};

//Creating Objects
//Object Literal
let tractor = {
  brand: "Powertrac",
  model: "Powertrac439",
  year: 2020
};

//New Object
let car = new Object();
car.brand = "Mahindra";
car.model = "Camry";

//Constructor
function Emp(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Emp("John", 25);

//this keyword 
// let person = {
//   name: "John",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };
// person.greet();

//Destructuring
// let person = {
//   name: "John",
//   age: 25
// };
// let { name, age } = person;
// console.log(name); 

let student = {
  name: "Rahul", 
  age: 21,
  marks: {
    math: 90,
    science: 85,
    english: 88
  }
};
console.log(student.name);
console.log(student.age);
console.log(student.marks.math);

student.city = "Delhi";
student.age = 22;

delete student.marks.english;

for (let key in student) {
  console.log(key, student[key]);
}
let total = student.marks.math + student.marks.science;
console.log("Total Marks =", total);


console.log("Selecting DOM Elements")
let a = document.getElementById("head")
console.log(a)
let b = document.getElementById("h3")
console.log(b)

let d = document.getElementsByClassName("heading")
console.log(d)
let e = document.getElementsByClassName("h2")
console.log(e)

let g = document.getElementsByTagName("u")
console.log(g)
let h = document.getElementsByTagName("h1")
console.log(h)

let i = document.querySelector("u") 
console.log(i)
let j = document.querySelector("h1")
console.log(j)
let k = document.querySelector(".h3")
console.log(k)

let l = document.querySelectorAll("h1")
console.log(l)
let m = document.querySelectorAll(".heading")
console.log(m) 

const firstItem = document.querySelector('.item');
console.log(firstItem.parentElement);

const menu = document.getElementById('menu');
console.log(menu.children);
console.log(menu.firstElementChild.textContent);
console.log(menu.lastElementChild.textContent); 

const first = document.querySelector('.item');
console.log(first.nextElementSibling);
console.log(first.previousElementSibling);
console.log(first.nextSibling);
console.log(first.previousSibling);

const orders = [
  { id: 1, customer: "Ravi", total: 1200, status: "delivered" },
  { id: 2, customer: "Priya", total: 800, status: "pending" },
  { id: 3, customer: "Arjun", total: 1500, status: "delivered" },
  { id: 4, customer: "Sneha", total: 500, status: "cancelled" },
  { id: 5, customer: "Chanti", total:2000, status: "cancelled" }
];

const summaries = orders.map(order => ({
  orderId: order.id,
  customer: order.customer,
  amount: `₹${order.total}`
}));
console.log(summaries);

const dop = orders.filter(dp => (
    dp.status === "delivered"
))
console.log(dop)

const revenue = orders
  .filter(order => order.status === "cancelled")
  .reduce((sum, order) => sum + order.total, 0);

console.log(revenue);
console.log("Promise is in the pending state, and in the future it will either success or failure.")
let promise1 = Promise.resolve("gone")
let promise2 = Promise.reject("Still Struggling")
Promise.all([promise1,promise2])
.then(()=>{
    console.log("getting")
})
.catch((e)=>{ 
    console.log(e)
})
let p12 = Promise.resolve("All is Well")
let p123= Promise.resolve("Still pending")
Promise.all([p12,p123])
.then((k)=>{
    console.log(k)
})
.catch((e)=>{ 
    console.log(e)
})

console.log("Event Loop : the system that manages when code runs in JavaScript")
console.log("Start");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("End"); 

console.log(this)
const user = {
  name: "Sai",
  show() {
    console.log(this.name);
  }
};
user.show(); 

console.log("Async and Await:- let us wait for slow tasks without asking stop the whole program")
function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}
async function hello1(){
    return await hai()
}
let s = hello1()
console.log(s)

//Normal Event
let ar = document.getElementById("btn")
let jb=0
ar.addEventListener("click",()=>{
    jb++
    console.log("button Clicked :",jb)
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
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); 

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let de=0
let mw = setTimeout(()=>{  
    de++
    console.log("value of d",de)
},2000)
clearTimeout(mw)

//Settimeout
function greet() {
  console.log("Hello!");
}
const timerId = setTimeout(greet, 5000);
setTimeout(() => {
  clearTimeout(timerId);
  console.log("Greeting cancelled");
}, 2000);
 