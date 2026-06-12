console.log("Promise: It is an object representing a future result of an asynchronous operation.")
let promise1 = Promise.resolve("gone")
let promise2 = Promise.reject("Still Struggling")

//Promise.all()
Promise.all([promise1,promise2])
.then(()=>{
    console.log("getting")
})
.catch((e)=>{ 
    console.log(e)
})
let p12 = Promise.resolve("All is Well")
let p123= Promise.resolve("Still pending")
Promise.all([p12,p123])
.then((k)=>{
    console.log(k)
})
.catch((e)=>{ 
    console.log(e)
})

// Promise.allSettled()
let p4 = Promise.resolve("Success");
let p5 = Promise.reject("Failed");

Promise.allSettled([p4, p5])
.then(result => {
    console.log("Promise.allSettled():", result);
});

// Promise.race()
let race1 = new Promise(resolve =>
    setTimeout(() => resolve("Race Winner"), 1000)
);

let race2 = new Promise(resolve =>
    setTimeout(() => resolve("Second Place"), 2000)
);

Promise.race([race1, race2])
.then(result => {
    console.log("Promise.race():", result);
});

// Promise.any()
let any1 = Promise.reject("Error 1");
let any2 = Promise.resolve("First Successful Promise");
let any3 = Promise.resolve("Another Success");

Promise.any([any1, any2, any3])
.then(result => {
    console.log("Promise.any():", result);
})
.catch(error => {
    console.log(error);
});