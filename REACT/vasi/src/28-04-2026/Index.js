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