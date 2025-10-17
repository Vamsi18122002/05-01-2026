// IIFE(Immediately Innocable function expression)
// A function that runs as soon as it is created.

// why use

// closure
var O1 = (() =>{

    var n ="Hai"
    var m ="Hello"
    console.log(n, m)

})();


// keep variables private
(function() {
    let secret = "Iam private";
    console.log(secret); 
})();
console.log(typeof secret); 


//Runs setup code immediately
 (function() {
    console.log("code runs now");
})();
