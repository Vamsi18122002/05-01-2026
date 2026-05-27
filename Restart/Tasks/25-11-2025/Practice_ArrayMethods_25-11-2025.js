console.log("Array: Collection of Homogeneous Data (or) Heterogeneous Data")
console.log("Array Methods in JavaScript")
console.log("1.push()")
console.log("2.unshift()")
console.log("3.Pop()")
console.log("4.shift()")
console.log("5.splice()")

console.log("1.push() : This method adding array item to last")
let arr = [1000,true,"vasikar",null,undefined,false,]
console.log(arr)
let str=""
for(let i=0;i<=arr.length-1;i++){
    str += arr[i]+" "
}
console.log(str)

function pushed(){  //adding array item to end of the array
    arr.push(5)
    console.log(arr)
}
pushed()

function pushed1(a){
    arr.push(a)
    return arr
}
console.log(pushed1(9000))

function unshifted(){ //adding array item to start of the array
    arr.unshift(2000)
    console.log(arr)
}
unshifted()

function unshifted1(b){
    arr.unshift(b)
    return b
}
unshifted1("NYB")

function poped(){  //Removing array item to end of the array
    arr.pop()
    console.log(arr)
}
poped()

function shifted(){ //Removing array item to start of the array
    arr.shift(2000)
    console.log(arr)
} 
shifted()

//splice(indexvalue,removecount,new)
function splicing() { //In the array anywhere add it 
    arr.splice(0,0,"vamsi")
    return arr
}
console.log(splicing())

function splicing2(){
    arr.splice(0,1)
    console.log(arr)
}
splicing2()

function splicing3(){
    arr.splice(1,0,"nagepalli")
    console.log(arr)
}
splicing3()

  
//how to find length without using function
let count = 0
let arr1 = ["sivudu",108,true,"jagan",420,false]
for(let num1 of arr1){
    count++
} 
console.log("Length: "+count)