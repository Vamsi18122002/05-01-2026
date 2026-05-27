console.log("Generator:- It is a special function that creates an iterator for you")
function* greet(){
    yield "Hello Hai"
    yield "Good Morning"
    yield "How are You"
}
let k = greet()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())


console.log("local storage")
console.log("session storage")
localStorage.setItem("name","vasikar")
console.log(localStorage.getItem("name"))
localStorage.setItem("class","10th")
console.log(localStorage.getItem("class"))
sessionStorage.setItem("age","17years")
console.log(sessionStorage.getItem("age")) 

console.log(sessionStorage.removeItem("name"))
console.log(localStorage.clear()) 


// Generator
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numbers();
// sessionStorage (temporary)
sessionStorage.setItem("current", gen.next().value);
// localStorage (permanent)
localStorage.setItem("username", "Sai");
console.log("Session Storage:", sessionStorage.getItem("current"));
console.log("Local Storage:", localStorage.getItem("username"));

