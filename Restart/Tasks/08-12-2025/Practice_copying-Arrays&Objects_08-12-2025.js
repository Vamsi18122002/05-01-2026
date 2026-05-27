console.log("Copying on Objects & Arrays")

console.log("normal copy")
var ob1 = {a:"one",b:"two"}
var ob2 = ob1
console.log("before ob2",ob2)
 ob2.c = "three"
 console.log("after ob2",ob2)
 console.log("ob1",ob1)

 console.log("shallow copy")
var ob3 = {a:"one",b:"two"}
var ob4 = {...ob3}
 ob4.c = "three"
 console.log(ob3)
 console.log(ob4)
 var ob5 = {a1:123,a2:456,ob6:{a3:789,a4:1011}}
 var ob7 = {...ob5}
 ob7.a1=111  //it perform on primitive datatypes are in different locations
console.log(ob7)
 console.log(ob5)
 ob7.ob6.a4=5566 //it perform on  reference datatypes are in same location
 console.log(ob7)
 console.log(ob5)

 console.log("deep copy")
 var obj6 = JSON.parse(JSON.stringify(ob5))
 console.log(ob5)
 console.log(obj6)
 obj6.a1=50      //it perform on primitive datatypes are in different locations
 console.log(obj6)
 console.log(ob5)  
 obj6.ob6.a3= 1000 //it perform on  reference datatypes are in different location
 console.log(ob5)
 console.log(obj6)

console.log("copying on Arrays")

console.log("normal copy")
var arr1 = ["vasikar",true,null,"10th",["jeeva","hari","sravan"],123] 
var arr2  = arr1
console.log(arr2)
arr1[0] = "pooja"
console.log(arr1)
console.log(arr2)
arr2[6] = "sivudu"
console.log(arr2)
console.log(arr1)

console.log("shallow copy")
var arr5 = ["vasikar",true,null,"10th",["jeeva","hari","sravan"],123]
var arr3 = [...arr5]
arr5[1]=false//it perform on primitive datatypes are in different locations
console.log(arr5)
console.log(arr3)
arr3[4][3] = "1j"   //it perform on  reference datatypes are in same location
console.log(arr3)
console.log(arr5)

console.log("deep copy")
 var arr8 = JSON.parse(JSON.stringify(arr5))
 console.log(arr8)
 arr8[2]=50      //it perform on primitive datatypes are in different locations
 console.log(arr8)
 console.log(arr5)  
 arr8[4][4] = "3r"//it perform on  reference datatypes are in different location
 console.log(arr5)
 console.log(arr8)

console.log("<-----Date()----->")
let today = new Date()
console.log(today)

console.log("<-----Template String----->")
var a = false
var b = true

console.log("The value of a is",a,"The value of b is",b,"and their sum a+b is",(a+b))
console.log(`The value of a is ${a} The value of b is ${b} and their sum a+b is ${a+b}`)









