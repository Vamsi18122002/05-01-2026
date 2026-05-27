console.log("functions :- It is a block of code to do some task and return some value")
console.log("1.Function Declaration")
function task(){
        console.log("It is a function declaration")}
task()
console.log("2.Function Expression")

console.log("I.Named Function Expression")
console.log("II.Ananymous Function Expression")
console.log("III.Arrow Function Expression")

console.log("I.Named Function Expression")
var compare = function check() {
    var n1 = 15
    var n2 = 10
    console.log(n1 > n2 ? "n1 is greater" : "n2 is greater")
}
compare()

var calculateInterest = function interestCalc() {
    var p = 1000
    var t = 2
    var r = 5
    return"Simple Interest:", (p * t * r) / 100
}
console.log(calculateInterest())

console.log("II.Anonymous Function Expression")
var fruitList = function() {
    var fruits = ["Apple", "Banana", "Orange"]
    console.log("Fruits:", fruits.join(" & "))}
fruitList();

var countDown = function run(n) {
    console.log(n)
    if(n > 0){ 
        run(n - 1)}}
countDown(3)

console.log("III.Arrow Function Expression")
var Random_Num = function() {
    console.log("Random:", Math.random()*100) //math.random gives always between 0 and 1
}
Random_Num()

var Upper = () => {
    var text = "This is One of Function Expression"
    return text.toUpperCase()
}
console.log(Upper())

console.log("High Priority and Low Priority")

function priority(a=null,b=100){//null and number has same priority
    console.log(a,b)
}
priority(10,null)

function priority1(a=undefined,b=11,c=null,d=undefined){
    console.log(a,b,c,d)
} 
priority1(2,undefined,undefined,null)

function priority2(a=true,b=10,c="a",d=46){//boolean , number & String has a same Priority
    console.log(a,b,c,d)
}
priority2(53,true,46,"a")

console.log("Low Priority")
function priority3(a=10n, b=200n) {
    // BigInt values have same low priority
    console.log(a, b);
}
priority3(999999999999n, 1234567890n);

function priority4(a=Symbol("a"), b=Symbol("b")) {
    // Both symbols have same lowest priority 
    console.log(a, b);
}
priority4(Symbol("x"), Symbol("y"));

// High Priority
//number,boolean,String,null,undefined
//Low Priority
//symbol,bigint  

//varying number of Arguments and Parameters

//Default Parameter
function DP(a=7,b=4){
    console.log(a+b)
}
DP()

//Argument Object 
function AO(a,b,c){
    console.log(a, b, c)
    console.log(arguments)
}
AO(10,20,30,40,50)

//Rest Parameter
function RP(a,b,c,...d){
    console.log(a,b,c)
    console.log(d)
}
RP(100,200,300,400,500,600,700,800)