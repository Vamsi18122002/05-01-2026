console.log("Traversing the DOM(Document Object Model)")
let a = document.getElementById("name")
console.log(a)
let b = a.parentElement
console.log(b)
let c = b.children
console.log(c)
let d = b.firstElementChild
console.log(d)
let e = b.lastElementChild
console.log(e)
let g = document.getElementById("delete")
console.log(g.previousElementSibling)
console.log(g.nextElementSibling)
let h = document.querySelectorAll("*")
console.log(h)

console.log("Creating the DOM(Document Object Model)")
let newElement = document.createElement("h1")
newElement.innerText = "linkedin_profile"
console.log("new one created :",newElement)
let adding = b.prepend(newElement)
console.log(adding)

let newElement2 = document.createElement("h5")
newElement2.innerText = "9876543210"
let adding2 = b.appendChild(newElement2)
console.log(adding2)

let Element = document.querySelector("div")
Element.before(" Good Morning ")

let Element2 = document.querySelector("script")
Element2.after(" Thanking You  ")

let btn = document.getElementById("btn")
console.log(btn)

// btn.onclick = function(){
//     alert("Button Clicked")
//     console.log("Button Clicked")
// }

//addEventListener
function cl(){
    alert("Button clicked")
}
btn.addEventListener("click", cl)

let btn1 = document.getElementById("btn1")
console.log(btn1)


btn1.addEventListener("dblclick", () => {
    console.log("Double clicked");
});


// //DOM Methods
// console.log(document)
// console.log(document.getElementById("heading"))
// console.log(document.getElementsByClassName("formattingTags"))
// console.log(document.getElementsByTagName("marquee"))
// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".formattingTags"))
// console.log(document.querySelector("#heading"))
// console.log(document.querySelectorAll("#heading"))

// //Traversing the DOM
// var a = document.getElementById("section1")
// console.log(a)
// console.log(a.parentElement)
//  console.log(a.children)
// console.log(a.firstElementChild)
// console.log(a.lastElementChild)
// var b = document.getElementById("heading")
// console.log(b.previousElementSibling)
// console.log(b.nextElementSibling)

// var c = document.createElement("a")
// c.innerText="welcome to anchor tag"
// console.log(c)

// a.append(c)
// // let d = document
// // a.prepend(c)
// var e = document.getElementById("heading")
// e.after("byeeee")
// e.before("haiii")