//global scope
//var a = 12
// var b = 40
// function scope(){
//          {     
//             var b = 30
//             console.log(b)  
//             console.log("2. ",a)
//    }
//     console.log(b)
//      console.log("3. ",a)
//  }
//  scope()
//  console.log("4. ",a)
//  console.log(b)

//functional scope
function scope1(){
    var c = 50
    {
        console.log(c)
    }
    console.log(c)
}
// console.log(c)
scope1()
console.log(c)