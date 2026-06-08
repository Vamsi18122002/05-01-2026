 // 1.Function declaration 
function greet(){  
}
greet()

//2.Function Expression 
function get(){
 var a = 16;
 console.log(a)
}
get()

//1.Named Function Expression
var m = function t(){
 let n = 253;
 console.log(n)
}
m()

//2.Ananyous Function Expression
var o = function(k=252){
    console.log(k);
}
o()

//3.Arrow Function Expression
var q = (a,b)=>{
    return a*b;
}
console.log(q(23,2));

