console.log("Functional Programming")
console.log("IIFE")
console.log("First class function")
console.log("pure function")
console.log("impure function")
console.log("High order function")

console.log("IIFE - immediately invoked function expression")
console.log("it is used for keep variable private , avoid global pollution, immediately running the code");
(function () {
    let msg = ""
    console.log()
})();
let p = (function (){
    var m ="vasi"
    var n = 10
   return m+n
})()
console.log(p)
console.log("first class function")
 console.log("without first class functions , javascript wouldn't be powerful or flexible")
 function dosomething(fun){
    console.log(fun)  
 }
 dosomething(function(){
    console.log("Do Something")
 })
function st(r){
    let a = r()
    console.log(a) // 1
}
st(function(){
    let k = true 
    let l = false 
    return k+l
})
console.log("pure function : it is a function depends on the only inputs and cause no side effects")//less bugs,easy to test
function pure(x,y){ //-->same inputs and same outputs
    return x*y
}
console.log(pure(19,19))
function pure2(c = 1,d = true){
    console.log(c+d)  }
pure2()
console.log("Impure function: It is a function depends on external things")//show messages, change the values
let value ="kaashi"
function impure(s){
    return s + value  
}
console.log(impure(420))
console.log("High Order function: a function takes a function and returns a function")
function outer() {
    return function () {
        console.log("I am inside!");
    }; }
let inner = outer(); 
inner();

console.log("function currying : Breaking a function into smaller functions that take one input at a time.")
function multiply(a) {
    return function(b) {
        return function(c){
            return function(d){
                return a*b*c*d
            } } }; }
console.log(multiply(2)(5)(8)(10));

console.log("this keyword : The object that is currently calling the function.")
console.log(this)
let user = {
  name: "Ravi",
  show() {
    console.log(this.name); 
  }
};

user.show();



for(let i=1;i<4;i++){
    line =""
    for(let j=1;j<=i;j++){
        line += j+" "
    }
    console.log(line)
}
function rev(str){
    line=""
    for(let i=str.length-1;i>=0;i--){
        line += str[i]
    }
    console.log(line)
} 
rev("vamsi")


function arraySum(arr){
    sum=0
    for(let num of arr){
        sum += num
    }
    console.log(sum)
}
arraySum([2,3,4,5])


function cw(str1){
    count =0
    for(let i=0;i<=str1.length-1;i++){
        str1[i]
        count++
    }
   console.log(count)
}
cw("vasikar")


function palin(str2){
    rev=""
    for(let i=str2.length-1;i>=0;i--){
        rev += str2[i]

    }
    return rev
}
let str3 = "121"
let a = palin(str3)
if(a == str3){
    console.log("It is a palindrome")
}else{
    console.log("It is not a palindrome")
}


function fib(n){
    let a=0,b=1
    console.log(a)
    console.log(b)
    
    for(let i=3;i<=n;i++){
        let c = a+b
        console.log(c)
        a = b
        b = c
    }

}
fib(10)


