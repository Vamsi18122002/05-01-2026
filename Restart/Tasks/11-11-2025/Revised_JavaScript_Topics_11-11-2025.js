console.log("<--------Practice------->")
console.log("Introduction to JavaScript")

console.log("JavaScript --->It is used for Static webpage converts into dynamic webpage ")
console.log("JavaScript Engine runs the javaScript code")
console.log("The browser reads the HTML file. When it finds a <script> tag, it uses the JavaScript engine to read and execute the JavaScript code.");

console.log("Types of Datatypes")
console.log("1.primitive datatypes")
console.log("2.Reference Datatypes")

console.log("1.primitive Datatypes --> Single value and Single Memory Location" )
console.log("Number---> It is used for digits")
var a = 10
console.log(a)
console.log(typeof a)

console.log("Boolean --> It is used for True/False")
var c = true
console.log(c)
console.log(typeof c)

console.log("String ---> It is used in Double Quotes")
var d = "Hima Sree"
console.log(d)
console.log(typeof d)

console.log("Null ---> It is used for no value")
var e = null
console.log(e)
console.log(typeof e)


console.log("Undefined --> It is used for value is declared yet not assigned")
var g
console.log(g)
console.log(typeof g)


console.log("Symbol ---> It is used for unique identifiers")
var h = Symbol("id")
var i = Symbol("id")
console.log(h === i)

console.log("BigInt ---> It is used for large integers")
var j = 325346457565854453n
console.log(j)
console.log(typeof j)



console.log("Reference Datatypes ---> multiple values in single memory location")

console.log("1.Array")
console.log("2.Objects")
console.log("3.Functions")
console.log("ecma script->6 map, weak map, set, weak set")
console.log("Ecma Script is a organisation and it is added the updates and new features to JavaScript")


console.log("1.Array---> collection of data(homogeneous(same kind of data) or heterogeneous(Different kind of data)")
// apple banana orange\ homogeneous data
// 1 2 3 \ homogeneous data

// 1,2,3....apple,banana,true\ heterogeneous data
var Apple = "pineapple"
var fruit = "Dragon_Fruit"
var A = [true,1,Apple,"vasikar",[10,20,30,40,50],false,fruit,null,undefined]
console.log(A.length)
console.log(A[4][1])
console.log(A[2])
console.log(A)


console.log("2.Objects ---> It is a collection of key-value pair")
// key:value
var B = { name:"mirai",
        class:"10th",
        rollno:7,
        passed:true }

console.log("we have a 2 ways accessing the data")
console.log(B.name)
console.log(B["class"])
console.log(B["passed"])

console.log("3.Functions ---> It is a block of code to do some task and return some value")
console.log("i.Function Declaration")
console.log("ii.Function Expression")

console.log(" i.Function Declaration")
function hello(){
    return "hello this is function declaration"
}
var a = hello()
console.log(a)

console.log(" ii.Function Expression")
console.log("  i.Named Function Expression")
var m = function add(){
    var c = "10"
    var d = 100
    console.log("   ",c+d)
}
m()

var p = function add(){
    var c = 10
    var d = 100
    console.log("   ",c+d)
}
p()

console.log("  ii.Ananymous Function Expression")
var n = function(){
    var e = true
    var f = 1
    console.log("   ",e+f)
}
n()

var q = function(){
    var g = false
    var h = 1
    console.log("   ",g+h)
}
q()

console.log("  iii.Arrow Function Expression")
var o = () => {
    var g = "vasikar"
    var h = false
    console.log("   ",g+h)
}
o()

var r = () => {
    var i = "chitti"
    var j = 10
    console.log("   ", i+j)
}
r()