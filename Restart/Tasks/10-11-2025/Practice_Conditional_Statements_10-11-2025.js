console.log("Bitwise Operator --> &, |, ~, ^, >>, <<")
var a = 15
var b = 10
console.log(a&b)
console.log(a|b)
console.log(a^b)
console.log(10>>1)
console.log(10<<1)  

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

console.log("III. if...else if...else Statement") 
var e = 0 
if(e>0){
    console.log("It is a positive number")
}else if(e<0){
    console.log("It is a negative number")
} else{
    console.log("It is a zero")
}
console.log("Program Ended")

console.log("IV. Switch Statement --> It is used when we have multiple conditions");
var season = "summer";
switch (season) {
    case "summer":
        console.log("In the summer season, the weather is very hot.");
        break;
    case "winter":
        console.log("In the winter season, the weather is very cold.");
        break;
    case "spring":
        console.log("In the spring season, the weather is mild and flowers start to bloom.");
        break;
    case "autumn":
        console.log("In the autumn season, the weather becomes cool and leaves start to fall.");
        break;
    default:
        console.log("Please enter a valid season name.");
}
