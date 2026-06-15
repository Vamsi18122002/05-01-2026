//Async&Await
console.log("Async and Await:- let us wait for slow tasks without asking stop the whole program")
function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}
async function hello1(){
    return await hai()
}
let s = hello1()
console.log(s)

//callback
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("John", sayBye);

function processUser(callback) {
    console.log("Processing user...");
    callback();
}

processUser(function () {
    console.log("User processed successfully!");
});

console.log("Start");

setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");