//1.copying of arrays
console.log("1.Normal Copy")
var arr1 = [1,2,["anil","billa",[true,null]]];
var arr2 = arr1;
console.log(arr1);
console.log(arr2);

console.log("2.shallow copy")
var arr5 = ["vasikar",true,null,"10th",["jeeva","hari","sravan"],123]
var arr3 = [...arr5]
arr5[1]=false;
console.log(arr3)
arr3[4][3] = "1j";
console.log(arr3)
console.log(arr5) 

console.log("3.Deep copy")
 var arr8 = JSON.parse(JSON.stringify(arr5))
 console.log(arr8)
 arr8[2]=50;   
 console.log(arr8)  
 arr8[4][4] = "3r";
 console.log(arr5)
 console.log(arr8)

 //2.copying of Objects
console.log("1.normal copy")
var ob1 = {a:"one",b:"two"}
var ob2 = ob1
console.log("before ob2",ob2)
 ob2.c = "three"
 console.log("after ob2",ob2)
 console.log("ob1",ob1)

 console.log("2.shallow copy")
var ob3 = {a:"one",b:"two"}
var ob4 = {...ob3}
 ob4.c = "three"
 console.log(ob3)
 console.log(ob4)
 var ob5 = {a1:123,a2:456,ob6:{a3:789,a4:1011}}
 var ob7 = {...ob5}
 ob7.a1=111  
 ob7.ob6.a4=5566 
 console.log(ob7)
 console.log(ob5)

 console.log("3.deep copy")
 var obj6 = JSON.parse(JSON.stringify(ob5))
 console.log(ob5)
 console.log(obj6)
 obj6.a1=50     
 obj6.ob6.a3= 1000 
 console.log(ob5)
 console.log(obj6)

 //array destructuring
 const arr = [10, 20, 30];
 const [a, b, c] = arr;

console.log(a);
console.log(b); 
console.log(c); 

//object destructuring
const person = {
  name: "John",
  age: 25
};
const { name, age } = person;

console.log(name); 
console.log(age);  