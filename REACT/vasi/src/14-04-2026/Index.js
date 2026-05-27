console.log("Error Handling")
console.log("try/catch")
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
try {
    let num = 0;

    if (num === 0) {
        throw new Error("Cannot divide by zero!");
    }

    let result = 10 / num;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}

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