console.log("Loops in JavaScirpt")
console.log("1.for loop")
var obj = {name:"vasikar",ID:123,worker:true}
var value = Object.values(obj)
console.log(value)
for(let k=0;k<value.length;k++){
    function access(a){
        switch (value[a]) {
            case "vasikar":
                console.log("Name of the person is vasikar")
                break;
            case 123:
                console.log("123 is the Id of that person vasikar")
                break
            case true:
                console.log("vasikar is the worker")
                break
            default:
                console.log("Don't know")}}
access(k)}
console.log("2.while loop")
let l="A"
while(l<="D"){
    console.log(l)
    l=String.fromCharCode(l.charCodeAt(0) + 1);
}
console.log("while loop using Array, Ananymous function Expression and while loop")
var  arr = ["robot",123,true,undefined]
let m=0
while(m<arr.length){
    var p = function (n){
        switch(arr[n]){
            case "robot":
                console.log("robot is the machine")
                break
            case 123:
                console.log("123 is the number")
                break
            case true:
                console.log("true is the boolean value")
                break
            case undefined:
                console.log(" Value is Declared but not assigned")
                break
            default:
                console.log("This is not in Array")       
               } }
    p(m)
    m++ } 
console.log("3.do-while loop")
var num = 2;     
var count1 = 0;   
do {
    let i = 2;
    let isPrime = true;     
    do {
        if (num % i === 0 && num !== i) {
            isPrime = false;
            break;}
        i++;
    } while (i < num);
    if (isPrime) {
        console.log(num);
        count1++;
    } num++;
} while (count1 < 10);