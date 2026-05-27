console.log("Operators --> It is used for combination with variables to do a functionality")
console.log("1.Arithmetic Operators")
console.log("2.Assignment Operators")
console.log("3.comparison Operators")
console.log("4.Logical Operators")
console.log("5.Bitwise Operators")
console.log("6..Ternary Operator") 
console.log("1.Arithmetic Operators -->(+, -, *, /, %, ++, --, **")
var a = 22610
var b = 10
var c = a + b
console.log("Addition : ",c)
var d = a - b
console.log("Subtraction : ",d)
var e = a * b
console.log("Multiplication : ",e)
var f = a / b
console.log("Division : ",f)
var g = a % b
console.log("Remainder : ",g)
var m = 2 ** 5
console.log("Exponentation : ",m)
var i = a++
console.log("Post Increment",i)
var j = ++b
console.log("Pre Increment",j)
var k = --a
console.log("Pre Decrement",k)
var l = b--
console.log("Post Decrement",l)
console.log("2.Assignment Operators --> (+=, -=, *=, /=, %=, **=)")
var A = 100
var B = 20
var G = 300
A += B
console.log("Add and Assign : ",A)
A -= B
console.log("Subtract and Assign : ",A)
A *= B
console.log("Multiply and Assign : ",A)
A /= B
console.log("Divide and Assign : ",A)
B %= A
console.log("Modulus and Assign : ",B)
G **= 2
console.log("Exponentation and Assign : ",G)
console.log("3.Comparison Operators --> (>, <, >=, <=, ==, ===, !=, !==)")
var M = 10
var N = 20
var O = 10
console.log("Greater than : ",M > N)
console.log("Less than : ",M < N) 
console.log("Less than or equal : ",M <= O)
console.log("Greater than or equal : ",M >= O)
console.log("Loose equality --> It is used for only value is equal")
var a3 = '1000'
var a4 = 1000
console.log("this "+a3+" and "+a4+" is loose equality: ",a3 == a4)
console.log("strictly equality --> It is used for check value and type are equal")
var a1 = 300
var a2 = '300'
console.log("this "+a1+" and "+a2+" is strictly equality: ",a1 === a2)
console.log("Inequality Operator (!=,!==)")
var a5 = "vasikar"
var a6 = 100
console.log(a5 !== a6)
var a7 = "100"
var a8 = 10
console.log(a7 != a8)
console.log("4.Ternary Operator")
// Syntax:-
// condition ? TrueCase : FalseCase
var b1 = ("abc"<"abcd")?"abc is Less than the abcd":"abc is Greater than the abcd"
console.log(b1)
console.log("5.Logical Operator --> (&&, ||, !)")
var b2 = "vasikar"
var b3 = "vasu"
console.log(b2<b3)
console.log((b2<b3) && (b3<b2))
console.log((b2<b3) || (b3<b2))
console.log(!(b2<b3))
console.log("6.Bitwise Operator--> &, |, ~, ^, >>, <<")//It is used for Operation perform on binary values(i.e.,0,1)
var a = 14
var b = 11
console.log(a&b)
console.log(a|b)
console.log(a^b)
console.log(10>>1)
console.log(10<<1)



