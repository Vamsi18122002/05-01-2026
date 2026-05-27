console.log("Output Methods")

alert("Hello User!") 

document.write("Welcome Back User")

let a = document.getElementById("h1")
console.log(a)

let b = document.getElementById("para")
console.log(b)

//BOM(Browser Object Model)

console.log(screen.width)

console.log(screen.height)

console.log(navigator.userAgent)

console.log("Common Methods")

let data= prompt("Enter the value")

let m = parseInt(data)
console.log(typeof(m))

let n = m.toString()
console.log(typeof(n))

let f = 10.342534346
console.log(f.toFixed(3))

let obj = {
    name: "Alex",
    age: 30
}

let jsonData = JSON.stringify(obj)
console.log(jsonData)

let parsedData = JSON.parse(jsonData)
console.log(parsedData)
