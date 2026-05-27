// DOM
//Document Object Model
//It will attach the document in the form of tree structure

console.log(document)

console.log("<-----getElementById----->")

let a = document.getElementById("h1")
console.log(a)
let b = document.getElementById("h3")
console.log(b)
let c = document.getElementById("h2")
console.log(c)

console.log("<-----getElementByClassName----->")

let d = document.getElementsByClassName("heading")
console.log(d)
let e = document.getElementsByClassName("h2")
console.log(e)
let f = document.getElementsByClassName("h3")
console.log(f)
let q = document.getElementsByClassName("h6")
console.log(q)

console.log("<-----getElementByTagName----->")

let g = document.getElementsByTagName("u")
console.log(g)
let h = document.getElementsByTagName("h1")
console.log(h)
let p = document.getElementsByTagName("h6")
console.log(p)

console.log("<----queryselector----->")

let i = document.querySelector("u")
console.log(i)
let j = document.querySelector("h1")
console.log(j)
let k = document.querySelector(".h3")
console.log(k)
let n = document.querySelector("h5")
console.log(n)

console.log("<----queryselectorall---->")

let l = document.querySelectorAll("h1")
console.log(l)
let m = document.querySelectorAll(".heading")
console.log(m)
let o = document.querySelectorAll("video")
console.log(o)