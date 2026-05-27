console.log("Reference Datatypes --> Multiple values in Single Memory Location")

console.log("I.Array")
console.log("II.object")
console.log("III.functions")
console.log("ecma script->6 map, weak map, set, weak set")
console.log("Ecma Script is a organisation and it is added the updates and new features to JavaScript")

console.log("I.Array")
console.log("collection of data(homogeneous(same kind of data) or heterogeneous(Different kind of data)")
// apple banana orange \ homogeneous data
// 1 2 3 \ homogeneous data 
// 1,2,3....apple,banana,true\ heterogeneous data
var Apple = "pineapple"
var fruit = "Dragon_Fruit"
var A = [true,1,Apple,"vasikar",[10,20,30,40,50],false,fruit,null,undefined]
console.log(A.length)
console.log(A[4][1])
console.log(A[2])
console.log(A) 


console.log("II.Object --> Collection of key-value pairs")

var employee_details = {name:"Kaashi",IDNo:1234, salary:"15K", documents:true}
var a = employee_details
console.log(a)
// Accessing the data. we have two types
console.log(a["IDNo"])
console.log(a.salary)


console.log("III.Functions --> It is a block of code to do some task and return some value")
console.log("Function Declaration")
console.log("Function Expression")

console.log("Function Declaration")
var b = function hello(){
    return "hello"
}
console.log(b())

console.log("Function Expression")
console.log("Named Function Expression")
console.log("Ananymous Function Expression")
console.log("Arrow Function Expression")



console.log("Named Function Expression")
var c = function add(){
    var d = 19
    var e = 34
    console.log(d+e)
}
c()

var d = function subtract(){
     var e = 67
     var f =24
     return e-f
}
console.log(d())

console.log("Ananymous Function Expression")
var e = function(){
    var a = "NYB"
    var b = "Infotech"
    console.log(a+b)
}
e()


var f = function(){
    var a = "vasi"
    var b = 1
    return a+b
}
console.log(f())


console.log("Arrow Function Expression")
var g = () =>{
    var a = true
    var b = "chitti"
    console.log(a+b)
}
g()

var h = () => {
    var a = 1
    var b = true
    return a+b
}
console.log(h())