let ar = document.getElementById("btn")
let current = Date.now()
let lastclick=0
ar.addEventListener("click",()=>{
     if(current-lastclick > 2000){
        console.log("Throttling")
        lastclick = current;
     }
})