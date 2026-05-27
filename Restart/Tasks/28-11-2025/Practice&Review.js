console.log("swap of two numbers")
let temp
function swapping(a,b){
    console.log("Before Swapping: "+a,b)
    temp = a
    a = b
    b = temp
    console.log("After Swapping: "+a,b)
}
swapping(5,10)

function ASwapping(x,y){
    console.log("Before Swapping: "+x,y)
    x = x+y
    y = x-y 
    x = x-y
    console.log("After Swapping; "+x,y)
}
ASwapping(15,20)


let temp1
function swapping1(a=[1,2,3],b=[4,5,6]){
    console.log("Before Swapping: a:"+a,"b:"+b)
    temp1 = a
    a = b
    b = temp1
    console.log("After Swapping:  a:"+a,"b:"+b)
}
swapping1()


function armstrong(num){
    let str = String(num)
    let sum =0
    for(let i=0;i<str.length;i++){
        let l = Number(str[i])
        sum += l ** str.length
    }
    return sum
}
let m = 153
let k = armstrong(m)
if(k == m){
    console.log("armstrong number")
}else{
    console.log("not armstrong number")
}


function prime(num){
    let count = 0
    for(let i=0;i<=num;i++){
        if(num % i == 0){
            count++
        }
    }
    if(count===2){
        console.log("it is a prime number")

    }else{
        console.log("It is not a prime number")
    }
}
prime(347)

