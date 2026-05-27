console.log("7.typeof Operator --> It is used to check the type of value")
var b1 = 10
var b2 = "Sivudu"
var b3 = true
var b4 = "100"
var b5 = null
var b6 = undefined
console.log(typeof(b1))
console.log(typeof(b2))
console.log(typeof(b3))
console.log(typeof(b4))
console.log(typeof(b5))
console.log(typeof(b6))
console.log("8.Concatenation Operator --> Combining of values")
var b5 = "bhaktha"
var b6 = "kanappa"
console.log(b5+b6)
var b7 = "vasi"
var b8 = 1
console.log(b7 + b8)
console.log("Conditional Statements In JavaScript ")
console.log("I.if Statement")
console.log("II.if....else Statement")
console.log("III. if...else if...else Statement")
console.log("IV. switch Statement")
console.log("I.if Statement")

var a = 5
var b = 10
if(a < b){
    console.log("a is less than the b")
}
console.log("Program Ended") 


console.log("II.if....else Statement") 
var c = 45
var d = 18
if(c <  d){
    console.log("c is less than the d")
} else{
    console.log("c is greater than the d")
}
console.log("Program Ended")


var e = 0 
if(e>0){
    console.log("It is a positive number")
}else if(e<0){
    console.log("It is a negative number")
} else{
    console.log("It is a zero")
}
console.log("Program Ended")


console.log("Switch Case --> Exact value and also used for decision making")
var season = "winter"
switch (season) {
    case "summer":
        console.log("This is a summer season");
        break;
    case "Spring":
        console.log("This is a Spring Season");
        break;
    case "Winter":
        console.log("This is a winter season")
    default:
        console.log("This one is not in the list")
        break;
}