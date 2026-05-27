console.log("Scope of Variabbles")
//Accessing and lifetime of that vairable
//1.Global Scope
//2.Function Scope
//3.Block Scope
console.log("1.Global Scope: Outside the function or block variable is declared") 
let e1 = 100;  // global
console.log(e1);  
function scope() {
  console.log(e1)
}
scope()
console.log("2.Function Scope: Inside the function variable is declared")
console.log("Var - It is a Functional Scope")
function scope2() {
  var abc = 200;  // function scope
  console.log(abc)
}
//console.log(e2);
scope2()
//console.log(abc)

console.log("Block Scope: with in {}")
console.log("let and const are the Block Scope")
{
 var c20 = 30;  
 let c21 = 40; //block scope
  console.log(c20)
  console.log(c21)}
 console.log(c20)
 //console.log(c21)
//function scope var, let, const 
//var - It can be accessed outside the function
//let , const - cannot be accessed outside the function

//block scope var, let, const
//var - It can be accessed outside the function
//let, const - cannot be accessed outside the function
console.log("Recursive Function : A function calling itseif")
sum=0
function rec(n){ //sum of first 10 natural numbers
if(n<=10){
    sum += n
    rec(n+1)
}}
rec(1)
console.log(sum) 
sum1=0
count=0
function rec1(p){//sum of first 10 even numbers
    if(count===10){
        return
    }
    if(p % 2 == 0){
        sum1 += p
        count++}
    rec1(p+1)}
rec1(1)
console.log(sum1)
function greater(a,b){
    if(a>b){
        console.log("a is Greater than b")
    }else{
        console.log("b is greater than a")
    }}
greater(10,5)


