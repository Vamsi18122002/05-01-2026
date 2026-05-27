console.log("1.primitive Datatypes")
console.log("NUMBER --> It is used for digits")
var a = 10
console.log(a)
console.log(typeof a)

console.log("Boolean --> It is used for True/False")
var b = true
console.log(b)
console.log(typeof b) 

console.log("String --> It is using the Double Quotes")
var c = "vasikar"
console.log(c)
console.log(typeof c)

console.log("undefined --> used for value declared but not assigned")
var d
console.log(d)
console.log(typeof d)//undefined

console.log("null--> it is used for no value")
var e=null
console.log(e)
console.log(typeof e)//object

console.log("BigInt --> It is used for Large Integers")
var f = 7644664345
console.log(f)
console.log(typeof f)//number

console.log("SYMBOL --> It is used for unique and immutable")
var g = Symbol('id');
var h = Symbol('id');
console.log(g === h); 
console.log(typeof g)
console.log(typeof h)

// Reference Datatypes

// Array
// object
// functions
// ecma script->6 map, weak map, set, weak set
// Ecma Script is a organisation and it is added the updates and new features to JavaScript
// Array
// collection of data(homogeneous(same kind of data) or heterogeneous(Different kind of data))

// apple banana orange \ homogeneous data
// 1 2 3 \ homogeneous data

// 1,2,3....apple,banana,true\ heterogeneous data
var Apple = "apple"
var Banana = "Banana"
var A = [1,2,3,Apple,Banana,"vasi",true,false,null,undefined,[10,20,30,40,50]]

console.log(A.length)
console.log(A)
console.log(A[10][1])