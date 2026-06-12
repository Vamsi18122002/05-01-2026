 console.log("Iterators:- It is used for arrys and Go through items one by one")
let arr = ["vasi",undefined, false,null,3264]
let k = arr[Symbol.iterator]() 
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

console.log("Generator:- It is a special function that creates an iterator for you")
function* greeting(){
    yield "Good Morning"
    yield "vasi"
    yield "How are you"
} 
let m = greeting()
console.log(m.next()) 
console.log(m.next())
console.log(m.next())
console.log(m.next())

