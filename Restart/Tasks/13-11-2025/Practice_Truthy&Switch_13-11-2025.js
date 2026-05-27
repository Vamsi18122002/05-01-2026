console.log("Truthy and Falsy Values in JavaScript")

var A = function Truthy(){
    if(true && 1 && 'hi'&& "hello" && " " && ' ' && ` ` && "123" && "false" && {} && [] && "false & 0"){
        console.log("Truthy case")
    }else{
        console.log("Falsy case")}
}
A()


var B =()=>{
    if(0 && false && null && undefined && NaN && 0n && -0){
        console.log("Truthy case")
    }else{
        console.log("Falsy case") }  
}
B()

// Switch Statement using Named function Expression & Array
var D = function(){
    var Apple = "pineapple"
    var A = [true,1,Apple,"vasikar",null,undefined,1232345n]
    switch(A[3]){
        case true:
            console.log("true value is index at 0 in the Array")
            break
        case 1:
            console.log("1 value is index at 1 in the Array")
            break
        case Apple:
            console.log("pineapple is index at 2 in the Array")
            break
        case "vasikar":
            console.log("vasikar is index at 3 in the Array")
            break
        case null:
            console.log("null is index at 4 in the Array")
            break
        case undefined:
            console.log("undefined is index at 5 in the Array")
            break
        case 1232345n:
            console.log("1232345n is index at 6 in the Array")
            break
        default:
            console.log("This is not in the Array") 
        }
        
}
D()

// Switch Statement using Arrow Function Expression & Object
var E =()=>{
    var Student_Details = {Name:"siva shankar",Rollno:45,class:"9th",passed:true}
    switch (Student_Details["passed"]) {
        case "siva shankar":
            console.log("siva shankar is the name of student")
            break
        case 45:
            console.log("45 is the Rollono of Student")
            break
        case true:
            console.log("He is passed all the subjects.") 
            break
        default:
            console.log("This is not in the Student_Details object")
        }
}
E()

var places =["Golconda Fort","charminar","Ramoji Film City"]
for(let i=0;i<places.length;i++){
    function value(i){
    switch(i){
        case "Golconda Fort":
            console.log("Golconda Fort is Massive fort with a fascinating sound")
            break
        case "charminar":
            console.log("charminar is Hyderabad city’s iconic symbol")
            break
        case "Ramoji Film City":
            console.log("Ramoji Film City is one of the biggest film studio complexes in the world")
            break
        default:
            console.log("not in the Hyderabad") 
        }
    }
value(places[i])
}

// condition?true:false
var a = (2<3)&&(3<4)&&(5<7)?"These conditions are true":"These conditons are false"
console.log(a)