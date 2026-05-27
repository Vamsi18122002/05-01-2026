console.log("Variable behaviors in JavaScript")
console.log("I.Re-declaration")
console.log("II.Re-assignment")
console.log("III.Intialization")
console.log("IV.Hoisting")
console.log("V.Scope")
                        // var          let          const
// redeclaration           Yes           No           No
// reassignment            Yes           Yes          No
// Intialization           Yes           Yes          No
// Hoisting                Yes           No           No

var a =10 //Redeclartion for var On number data
console.log(a)
var a =30
console.log(a)

// let a3 =100 //Redeclartion for let On number data
// console.log(a3)
// let a3 =300
// console.log(a)

// const a8 =1000 //Redeclartion for const On number data
// console.log(a8)
// const a8 =300
// console.log(a8)

var b1 =40 //Reassignment for var On number data
console.log(b1)
 b1 =70
console.log(b1)

let b6 =40 //Reassignment for let On number data
console.log(b6)
 b6 =70
console.log(b6)

// const A=240 //Reassignment for const On number data
// console.log(A)
// A =690
// console.log(A)

var c1 =2340 //Intialization for var On number data
console.log(c1)

let c6 =40 //Intialization for let On number data
console.log(c6)

// const c11 //Intialization for const On number data
// console.log(c11)

//Accessing the memory values even before it's execution
console.log(h) //Hoisting for var on number data
var h = 987
console.log(h)

var a1 ="vasi" //Redeclaration for var On String data
console.log(a1)
var a1 ="sasi"
console.log(a1)

var b =true //Redeclaration for var On Boolean data
console.log(b)
var b =false
console.log(b)

var c =["sivudu",100,true] //Redeclaration for var On array data
console.log(c)
var c=["vasi",200,false]
console.log(c)

var Details ={name:"bheem",id:123} //Redeclaration for var On Object data
console.log(Details)
var Details={name:"dharmaraju",id:456}
console.log(Details)

// let a4 ="vasikar" //Redeclaration for let On String data
// console.log(a4)
// let a4 ="vardhan"
// console.log(a4)

// let a5 =true //Redeclaration for let On Boolean data
// console.log(a5)
// let a5 =false
// console.log(a5)

// let a6 =["nakuludu",1000,true] //Redeclaration for let On array data
// console.log(a6)
// let a6=["sahadevudu",2000,false]
// console.log(a6)

// let a7 ={name:"rama",id:832} //Redeclaration for let On Object data
// console.log(a7)
// let a7={name:"lakshmana",id:767}
// console.log(a7)

// const a9 ="Dhamodar" //Redeclaration for const On String data
// console.log(a9)
// const a9 ="Tulasi"
// console.log(a9)

// const a10 =true //Redeclaration for const On Boolean data
// console.log(a10)
// const a10 =false
// console.log(a10)

// const a11 =["nayakudu",10000,true] //Redeclaration for const On array data
// console.log(a11)
// const a11=["prabhu",20000,false]
// console.log(a11)

// const a12={name:"a",id:832} //Redeclaration for const On Object data
// console.log(a12)
// const a12={name:"b",id:767}
// console.log(a12)


// Reassignment
var b2 ="imran" //Reassignment for var On String data
console.log(b2)
 b2 ="irfan"
console.log(b2)

var b3 =true //Reassignment for var On Boolean data
console.log(b3)
 b3 =false
console.log(b3)

var b4 =["sidduu",2100,true] //Reassignment for var On array data
console.log(b4)
 b4=["vasi",4200,false]
console.log(b4)

var b5 ={name:"bala",id:1423} //Reassignment for var On Object data
console.log(b5)
 b5={name:"raju",id:4256}
console.log(b5)

let b8 ="imran" //Reassignment for let On String data
console.log(b8)
 b8 ="irfan"
console.log(b8)

let b10 =true //Reassignment for let On Boolean data
console.log(b10)
 b10 =false
console.log(b10)

let b12 =["suman",7100,true] //Reassignment for let On array data
console.log(b12)
 b12=["simran",8000,false]
console.log(b12)

let b13 ={name:"asha",id:1723} //Reassignment for let On Object data
console.log(b13)
 b13={name:"juliet",id:6456}
console.log(b13)

//const 
// const B ="indu" //Reassignment for const On String data
// console.log(B)
//  B ="nataraj"
// console.log(B)

// const C =true //Reassignment for const On Boolean data
// console.log(C)
//  C =false
// console.log(C)

// const E =["suman",7100,true] //Reassignment for const On array data
// console.log(E)
//  E=["simran",8000,false]
// console.log(E)

// const F ={name:"arjun",id:6477} //Reassignment for const On Object data
// console.log(F)
//  F={name:"john",id:6896}
// console.log(F)

// variable can be declared and assign a value at a time
var c2 ="ayaan" //Intialization for var On String data
console.log(c2)

var c3 =true //Intialization for var On Boolean data
console.log(c3)

var c4 =["uday",2100,true] //Intialization for var On array data
console.log(c4)

var c5 ={name:"bapuji",id:1423} //Intialization for var On Object data
console.log(c5)

let c7 ="iqbal" //Intialization for let On String data
console.log(c7)

let c8 =true //Intialization for let On Boolean data
console.log(c8)

var c9 =["sankar",2100,true] //Intialization for let On array data
console.log(c9)

var c10 ={name:"ansari",id:1423} //Intialization for let On Object data
console.log(c10)

// const c12//Intialization for const On String data
// console.log(c12)

// const c13 //Intialization for const On Boolean data
// console.log(c13)

// const c14 //Intialization for const On array data
// console.log(c14)

// const c15  //Intialization for const On Object data
// console.log(c15)

console.log(arr) //Hoisting for var on array data
var arr =["mango",648,true]
console.log(arr)

// console.log(i) //Hoisting for let on number data
// let i = 9249
// console.log(i)

// console.log(arr1) //Hoisting for let on array data
// let arr1 =["potato",893,false]
// console.log(arr1)

//const

// console.log(j) //Hoisting for const on number data
// const j = 12345
// console.log(j)

// console.log(arr2) //Hoisting for const on array data
// const arr2 =["lemon",6248,true]
// console.log(arr2)

