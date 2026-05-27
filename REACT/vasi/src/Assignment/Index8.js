// let p1 = Promise.resolve("fulfill")
// let p2 = Promise.reject("error")

let p1 = new Promise((resolve, reject) => { "fulfill", "error" })
console.log(Promise.allSettled())
.then()
    console.log("[Status:FulFilled, Value: result")
.catch()
    console.log("[Status:rejected, reason:error")
