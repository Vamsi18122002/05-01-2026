console.log("WEB STORAGE")
console.log("local storage")
console.log("session storage")

localStorage.setItem("name","vasikar")
console.log(localStorage.getItem("name"))

localStorage.setItem("class","10th")
console.log(localStorage.getItem("class"))

sessionStorage.setItem("name","vamsi")
console.log(sessionStorage.getItem("name"))

console.log(sessionStorage.removeItem("name"))

console.log(localStorage.clear())


console.log("Error Handling")
console.log("try/catch")
console.log("throw")
console.log("finally")
try {
    console.log(hello)
} catch (error) {
    console.log(error)
}
console.log("Error occured")

try {
    throw("error")
} catch (error) {
    console.log(error)
}
finally{
    console.log("code completed")
}