console.log("2.Objects --->  Objects are Collection of Key-value pair")
console.log("how to define object {}(curly braces)")
console.log("To access individual item 'Object.Keyname'")
console.log("square brackets 'Object[keyname]'")

var A = {name:"vasikar",
         phno:9999999999,
         mobile:"iphone",
         designation:"Associate Software Engineer"}

console.log(A.designation)//accesing the data
console.log(A["phno"])// another type of accesing the data

var B = {name:true,
        book:"text book",
        price:199}

console.log(B.name)
console.log(B["book"])

console.log("3.Functions ---> It is a block of code to do some task and return some value")
console.log("i.Function declaration")
console.log("ii.Function Expression")
// Syntax: 
//      function function_name(user choice){
//      }

console.log("/////--- i.Function declaration ---/////")
function vasi(){
    return "Hello"
}
console.log(vasi())

function kaasi(){
    console.log("Hai")
}
kaasi()


console.log("/////--- ii.Function Expression ---/////")
console.log(" 1.Named function expression ")

var a = function hello(){
    var b = "Hai everyone! ";
    var c = "Hello Good Morning";
    console.log(b + c)
   
}
a()

 var d = function add(){
    var e = 10;
    var f = 20;
    return e+f
 }
 console.log(d())

 console.log(" 2.Ananymous function expression")
var g = function(){//IN this there is no function name
    var h = false;// 0
    var i = 1
    console.log(h + i)
}
g()

var j = function(){
    var k = "raashi"
    var l = 10
    return k+l
}
console.log(j())

console.log(" 3.Arrow Function Expression")
var m = ()=>{
    var n = "always "
    var o = true //String data
    console.log(n+o)
}
m()

var p = ()=>{
    var q = 100
    var r = 100.35
    return q+r
}
console.log(p())


// variables
console.log("Variables ---> A variable is used to store data value")
console.log("javascript provides 3 ways to declare a variable")
console.log("1.var")
console.log("2.let")
console.log("3.const")


var aa=10
console.log(aa)

let aaa=20
console.log(aaa)

const aaaa=30
console.log(aaaa)



