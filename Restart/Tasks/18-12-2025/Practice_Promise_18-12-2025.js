console.log("Promise is in the pending state, and in the future it will either success or failure.")
let p = new Promise(()=> {
    let status = true
    if(status){
        console.log("success")
    }else{
        console.log("failed")
    } 
})
let p1 = new Promise((resolve,reject)=>{
    let status = false
    if(status){
        resolve("completed")
    }else{
        reject("pending")
    }
})  
.then(()=>{
    console.log("possible")
})
.catch(()=>{
    console.log("impossible")
})

//Promise Combinator Types
// Promise.all
// Promise.race
// Promise.any

// Promise.all
let promise1 = Promise.resolve("gone")
let promise2 = Promise.reject("Still Struggling")
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

//Promise.race
let pa = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("pa done")
    },7000)
})
let pb = new Promise((reject)=>{
    setTimeout(()=>{
        reject("pb is not fulfilled")
    },6000)
})
Promise.race([pa,pb])
.then((g)=>{
    console.log(g)
})
.catch((h)=>{
    console.log(h)
})
//Promise.allSettled()
Promise.allSettled([pa,pb])

.then((a)=>{
    console.log(a)
})

//Promise.any()
Promise.any([pa,pb])

.then((p)=>{
    console.log(p)
})
