console.log("Operators -->  Operators are used in Combination with variables to do a functionality")
console.log("I.Arithmetic Operators")
console.log("II.Assignment Operators")
console.log("III.Comparison Operators")
console.log("IV.Logical Operators")
console.log("V.Ternary Operator")
console.log("VI.Concatenation Operator")
console.log("VII.Bitwise Operators")

console.log("I.Arithmetic Operators --> (+,-,*,/,%,++,--,**)")
var a = 10
var b = 2
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a%b)
console.log(a++) //10
console.log(a) //11
console.log(++a) //12
console.log(a--) //12
console.log(--a) //10
console.log(a**b) 
console.log("II.Assignment Operators --> (+=,-=,*=,/=,%=)")
var c = 16
var d = 4   
console.log(c+=d)//20
console.log(c) //20
console.log(c-=d) //16
console.log(c) //16
console.log(c*=d)//64
console.log(c)//64
console.log(c/=d)//16
console.log(c)//16
console.log(c%=d)//0
console.log("III.Comparison Operators --> (>, <, >=, <=, ==, ===,!==, !=)")
var e = 34
var f = 43
console.log(e>f)//false
console.log(e<f)//true
var g = 10
var h = 10
console.log(g<h)//false
console.log(g<=h)//true
console.log(g>=h)//true
var i = "20"
var j = 20
var k = 20
console.log(i==j)//true
console.log(i===j)//false
console.log(j===k)//true
var l = 4
var m = "4"
console.log(l!==m)//true
console.log(l!=m)//false

console.log("IV.Tenary Operator")
// condition ? "True Statement": "False Statement"
var n = (10>3)?"10 is greater than 3":"10 is less than 3"
console.log(n)

console.log("V.Logical Operator --> (&&,||,!)")
console.log((8>7) && (3>5))

console.log((4<6) || (2>7))

console.log(!(4>2))

console.log("VI.Concatenation Operator --> combine the Strings")
var firstName = "vamsi"
var lastName = "Mallu"
console.log(firstName +" "+ lastName)

// Template Literal
console.log(`my name is ${firstName} ${lastName} and Iam working as a Associate Software Engineer`)

var x = 13
var y = 34
var z = x*y
console.log(`Multiplication of 13 and 34 is ${z}`)
