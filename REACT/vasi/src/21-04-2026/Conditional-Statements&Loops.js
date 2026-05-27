console.log("Conditional Statements");
// 1.if Statemnt
var a = true
if(a==true){
    console.log(a)
}
//2.if-else Statement
var b = 324;
var c = 535;
if(b>c){
    console.log("b is greater than the c")
}else{
    console.log("b is less than the c")
}
//3.if else ladder
var k = -34325;
if(k>0){
    console.log("positive")
}else if(k<0){
    console.log("negative")
}else{
    console.log("zero")
}
//4.Switch Statement
var fruit = "grape"
switch (fruit) {
    case "banana":
        console.log("It is a banana");
        break;
    case "orange":
        console.log("It is a Orange");
        break;
    case "grape":
        console.log("It is a grape");
        break;
    default:
        console.log("Not in the List")
        break;
}
//Ternary Operator
var m =(1413215>2425353)?"true":"false";
console.log(m)

//Looping Statements
//1.for loop
for(var i=0;i<=5;i++){
    console.log(i)
}
//2.while loop
var p = 10;
while(p<=20){
    console.log("This is while loop");
    p+=2;
}
//3.do-while loop
var s = 100;
do {
    console.log(s)
    s-=10;
} while (s>=50);

//4.for of Loop
let numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}
//5.for in loop
let number1 = [10, 20, 30];

for (let index in number1) {
    console.log(index);
}