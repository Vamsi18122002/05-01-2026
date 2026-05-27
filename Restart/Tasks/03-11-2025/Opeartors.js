console.log("OPerators in JavaScript --> It is used to combination with variables to do a functionality ")
console.log("1.Arithmetic Operators")
console.log("2.Assignment Operators")
console.log("3.comparison Operators")
console.log("i.Relational Operators")
console.log("ii..Equality Operators")
console.log("4.Logical Operators")
console.log("5.Bitwise Operators")
console.log("6..Ternary Operator") 
console.log("7.typeof Operator")
console.log("8.string Operator --> +(concatenation Operator)")

console.log("1.Arithmetic Operators")
console.log("Addition --> +")
console.log("Subtraction --> -")
console.log("multiplication --> *")
console.log("divison --> /")
console.log("Remainder --> %")
console.log("exponentation --> **")
console.log("Increment --> ++")
console.log("Decrement --> --")
var a = 20
var b = 10
var c = a + b
console.log(c)
var d = a - b
console.log(d)
var e = a * b
console.log(e)
var f = a / b
console.log(f)
var g = a % b
console.log(g)
var m = 2 ** 5
console.log(m)
var i = a++
console.log(i)
var j = ++b
console.log(j)
var k = --a
console.log(k)
var l = b--
console.log(l)
console.log("2.Assignment Operators")
console.log("Add and Assign --> +=")
console.log("Subtract and Assign --> -=")
console.log("Multiply and Assign --> *=")
console.log("Divide and Assign --> /=")
console.log("Modulus and Assign --> %=")
console.log("Exponentation and Assign --> **=")
var A = 10
var B = 20
A += B
console.log(A)
B -= A
console.log(B)
A *= B
console.log(A)
B /= A
console.log(B)
B %= A
console.log(B)
B **= A
console.log(B)
console.log("3.Comparison Operators")
console.log("i.Relational Operators")
console.log("greater than = '>'")
console.log("less than = '<'")
console.log("greater than or equal -- '>='")
console.log("less than or equal -- '<='")
var M = 10
var N = 20
var P = M > N
console.log(P)
var Q = M < N
console.log(Q) 
console.log(M <= N)
console.log(M >= N)
console.log("ii.Equality Operator (===, ==)")
console.log("strictly equality --> It is used for check value and type are equal")
var a1 = 10
var a2 = '10'
console.log("this "+a1+" and "+a2+" is strictly equality: ",a1 === a2)


console.log("Loose equality --> It is used for only value is equal")
var a3 = '10'
var a4 = 10
console.log("this "+a3+" and "+a4+" is loose equality: ",a3 == a4)

console.log("Inequality Operator (!=,!==)")
var a5 = "vasikar"
var a6 = 10
console.log(a5 !== a6)

var a7 = "100"
var a8 = 10
console.log(a7 != a8)

  
console.log("4.Logical Operators --> &&, ||, !")
var a9 = 6
var a10 = 1
console.log(a9 && a10)

var a11 = 4
var a12 = 0
console.log(a11 || a12)

console.log(!a12)
console.log(!1)

console.log("5.Bitwise Operator --> &, |, ~, ^, >>, <<")
var a = 5
var b = 3

console.log(a&b)

console.log(a|b)

console.log(a^b)

console.log(10>>1)

console.log(10<<1) 

console.log("6.Ternary Operator")
// syntax:
// condition ? TrueCase : FalseCase

console.log(3>2?console.log("truecase"):console.log("falsecase"))
console.log(3<2?console.log("truecase"):console.log("falsecase"))

var a = 7
var b = 7
console.log(a==b?console.log("truecase"):console.log("falsecase"))
console.log(a===b?console.log("truecase"):console.log("falsecase"))

console.log(a!=b?console.log("true"):console.log("false"))
console.log(a!==b?console.log("true"):console.log("false"))


