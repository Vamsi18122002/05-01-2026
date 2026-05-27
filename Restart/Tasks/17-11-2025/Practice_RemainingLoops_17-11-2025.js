console.log("1.for of loop :- It is used in Arrays")
let array1 =["vasikar",100,true,null,undefined]
console.log(array1)
for(a of array1){
    console.log(a)
}

console.log("2.for in loop ")
let Student_Details = {name:"siva",RollNo:123,class:"10th",passed:true}
console.log(Student_Details)
for(b in Student_Details){
    console.log(b, Student_Details[b])
}

for (c in array1){
    console.log(c)
}

// for(d of Student_Details){
//     console.log(d) 
// }

// console.log("Infinite Loop")
// while(true){
//     console.log("Hello Hai")
// }

console.log("functions :- It is a block of code to do some task and return some value")
console.log("1.Function Declaration")
function hai(){
    console.log("Hello World")
}
hai()

function msg(){
    return "It is a return function"
}
console.log(msg())

console.log("2.Function Expression")

console.log("I.Named Function Expression")
console.log("II.Ananymous Function Expression")
console.log("III.Arrow Function Expression")

