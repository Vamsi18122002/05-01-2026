// function isPalindrome(str){
//     let original = str.toLowerCase();
//     let rev=""
//     for(let i=original.length-1;i>=0;i--){
//          rev  += original[i] 
//     }
//     if(original === rev){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }
// isPalindrome("Racecar")
// isPalindrome("Hello")



// function countVowels(str){
//     let count =0;
//     for(let i=0;i<=str.length-1;i++){
//         if(str[i] == "a"||str[i] =="e" || str[i] =="i"||str[i]=="o"||str[i]=="u"||str[i] == "A"||str[i] =="E" || str[i] =="I"||str[i]=="O"||str[i]=="U"){
//                 count++
//         } 
//     }
//     console.log(count)
// }

// countVowels("JavaScript");
// countVowels("HELLO")

// function evaluateExpression(a,b,c){ 
//     if((a+b)>c){ 
//         return true 
//     }else if((b-c)<a){ 
//         return false 
//     } 
// }
// let d = evaluateExpression(18,45,17)
// console.log(d) 

// function maxOfThree(a,b,c){
//     return a > b ? (a > c ? a : c) : (b > c ? b : c)
// }
// let e = maxOfThree(5,10,8)
// console.log(e)

 

// function finalGrade(score, attendance){ 
//     if(score>90 && attendance >75 ){ 
//         console.log("A+") 
//     } else if(score>75 && attendance > 60){ 
//         console.log("B") 
//     } else { 
//         console.log("C") 
//     } 
// }
// let f = finalGrade(80,65)
// console.log(f) 

function createMultiplier(a){
    let b = a * 3;
    return multiplyBy3(c){
        console.log(b*c)
    }
 }
const multiplyBy3 = createMultiplier(3);
multiplyBy3(5)
