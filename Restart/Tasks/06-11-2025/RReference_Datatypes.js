console.log("DATE --> It is used to Work with date and time")
let today = new Date();
console.log(today);
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDay())

console.log("RegExp --> used to find patterns in text(like searching for words, numbers,etc)")

let pattern = /cat/i        //i  --> A flag that means ignore case
let text = "I love my Cat"
console.log(text.match(pattern))    //like /(?<animal>cat)/
console.log(typeof(text.match(pattern)))

let pattern2 = /(?<Fruit>Apple)/i
var text2 = "I want Another APPLE"
console.log(text2.match(pattern2)) 

console.log("Ecma Script -->6th version  (map, weakmap, set, weakset)")
console.log("It is a Organisation and used for updated and new features added to JavaScript")

console.log("map --> The data stored in key-value pairs and key can be any datatype")
let m = new Map()
m.set('name', 'Alice')
m.set(123, 'ID number')  
console.log(m)   
console.log(m.get('name'))

console.log("weakmap --> The data stored in key-value pairs and key must be string and weakly referenced")
let n = new WeakMap()
let obj ={}
n.set(obj,'80k')
console.log(n)
console.log(n.get(obj))

console.log("set --> It is a collection of unique values(i.e.,does not allowed duplicates)")
let numbers = new Set()
numbers.add(10)
numbers.add(20)
numbers.add(10)
numbers.add(30)
console.log(numbers)
numbers.delete(10)
console.log(numbers)

console.log("weakset --> It is a collection of unique values and it can store only objects and those objects automatically deleted when you don't use them anymore.")
let ws = new WeakSet();
let obj1 = { name: "John" };
let obj2 = { name: "Doe" };
ws.add(obj1);
ws.add(obj2);
console.log(ws.has(obj1)); 
console.log(ws.has(obj2))
