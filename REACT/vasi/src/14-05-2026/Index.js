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
  { id: 5, customer: "Chanti", total:2000, status: "cancelled" } ];
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
    console.log(this.name); }
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