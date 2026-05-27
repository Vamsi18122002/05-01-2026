console.log("<-----Math Object()------>")  
var num = 242424.2424
var a = Math.floor(num)
console.log(`The Math.floor() value of a num is : ${a}`) 

var b = Math.ceil(num)
console.log(`The Math.ceil() value of a num is : ${b}`) 

var c = Math.round(10.5)
console.log(`The Math.round() value is : ${c}`) 

var f = Math.sqrt(207936)
console.log(`The Math.sqrt() value is: ${f}`)

var g = Math.pow(45,3)
console.log(`The Math.pow() value is : ${g} `)

var h = Math.abs(-200)
console.log(`The Math.abs() value is : ${h}`)

var i = Math.cbrt(343)
console.log(`The Math.cbrt() value is : ${i}`)

var j = Math.trunc(2534365.455464)
console.log(`The Math.trunc() value is : ${j}`)

var d = Math.min(4/10,5/9,6/8,2/5)
console.log(`The Math.min() value is : ${d}`) 

var e = Math.max(4/10,5/9,6/8,2/5)
console.log(`The Math.max() value is : ${e}`) 

console.log("Random values are between the range of min and max")
const min = 1000
const max = 9999
console.log(Math.round(Math.random()*(max-min))+min)

function studentdata(name){
    var data={vamsi:{telugu:70,english:70,Maths:40},Madhu:{telugu:56,english:79,Maths:89},Kiran:{
    telugu:50,english:60,Maths:70} }
    var student = data[name]
    var marks=student.telugu + student.english + student.Maths
    var percent = (marks/300)*100
    console.log(`CGPA : ${Math.floor(percent)}%`)
}
studentdata("vamsi")
studentdata("Madhu")
studentdata("Kiran") 

console.log("<----String Methods---->")

let text = "Hello";
console.log(`The value of Hello.length is : ${text.length}`); 

let s = text.slice(0, 2)
console.log(`The value of Hello.slice(0, 2) is : ${s}`); 
let t = text.slice(3)
console.log(`The value of Hello.slice(3) is : ${t}`);    

let u = "Hello World"
let v = u.includes("World")
console.log(`The value of Hello World.includes("World") is : ${v}`); 

let w = u.toUpperCase()
console.log(`The value of text.toUpperCase() is : ${w}`); 
let x = w.toLowerCase()
console.log(`The value of text.toLowerCase() is : ${x}`); 

let y = text.charAt(1); 
console.log(`The value of Hello.charAt(1) is : ${y}`); 

let z = text.charCodeAt(2);
console.log(`The value of Hello.charcodeAt(2) is : ${z}`); 

let a1 = text.at(-1); 
console.log(`The value of Hello.at(-1) is : ${a1}`); 

let a2 = u.replace("World", "JavaScript")
console.log(`The value of Hello World.replace() is : ${a2}`); 

let a3 = "  vasikar  ".trim()
console.log(`The value of "  vasikar  ".trim() is:${a3}`); 