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