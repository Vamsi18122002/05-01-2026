console.log("this keyword : the object I am inside right now")// we use this keyword to refer the current object and  avoid confusion //parent object: window object
console.log(this)
function hai(){                      //In normal function 
    console.log(this)}
hai()
let c = function std(x,y){
    console.log(this)
    return x ** y
}
console.log(c(239,2))
let obj1 = {name :"sivayya",         //Inside the object
    hello(){
        console.log(this)
    },
    hello1:()=>{                    
        console.log(this)
    }}
let d = () => {                       //In arrow function 
    console.log(this)      }
d()
obj1.hello()
obj1.hello1()                    //in arrow function we have to add the call(),apply(),bind() function methods
//call
function hello(a,b,c){
    console.log(this)
    console.log(a,b,c)
} 
hello.call(obj1,"kaashi","raashi","sashi")
//apply
function hello2(e,f,g,h){
    console.log(this)
    console.log(e+f+g+h)}
hello2.apply(obj1,[54376,32488,71513,73527])
//bind
function hello3(i,j,k,l,m){
    console.log(this)
    console.log(i,j,k,l,m)
}
hello3.bind(obj1,true,false,1929,4849,"chitti")()
//Nested object
let tm = {
  name: "Parent",
  child: {
    name: "Child",
    show: () => {
      console.log(this); 
    }
  }
};
tm.child.show();
function greet(a,b){
    console.log(this)
    console.log(a+b)
}
greet.call(tm,1000,"vasi")
function greet2(c,d,e,f){
    console.log(this)
    console.log(c-d-e-f)
}
greet2.apply(tm,[28,false,true,1])
function greet3(g,h,i,j,k,l){
    console.log(this)
    console.log(g*h*i*j*k*l)
}
greet3.bind(tm,6,7,8,9,10,100)()

let x = (p,q) =>{
    console.log(this)
    console.log(p,q)
}
x.call(tm,"masthan","basha")

let m = (p,q,r,s) => {
    console.log(this)
    console.log(p+q+r+s)
}
m.apply(tm,[123,456,789,9845])

let o = (p,q,r,s,t,u) => {
    console.log(this)
    console.log(p,q,r,s,t,u)
}
o.bind(tm,true,false,29455,"adventure",83743,"turn")()