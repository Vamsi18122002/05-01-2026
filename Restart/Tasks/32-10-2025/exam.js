function palindrome(s){
   var k = s.split("").reverse().join("")
   if(s==k){
    console.log("It is a palindrome number")
   }else{
    console.log("It is not a palindrome number")
   }
}
palindrome("121")

function sl(s){
    largest =0
    secondlargest = 0
    for(let num of s){
        if(num > largest){
            secondlargest = largest
            largest = num
        }else if(num > secondlargest && num < largest){
            secondlargest = num
        }
       
    }
    return secondlargest

}
console.log(sl([1,2,3,4]))



function dc(t){
    if(t % 3 == 0 && t % 5 == 0){
        console.log(t,"is divisible by 3 and 5")
    }
}
dc(15)


function mt(u){
    
    for(let i=1;i<=10;i++){

        console.log(u+"x"+i+"="+(u*i))
    }
}
mt(19)


function fibonacci(a,b){
    
}
