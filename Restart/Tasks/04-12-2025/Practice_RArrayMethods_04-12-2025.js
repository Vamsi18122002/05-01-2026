console.log("<-----Testing the array------->")
console.log("some and every")
function TA(arr){
    console.log(arr.some(i => i>90))  //this condition obeys the atleast one it gets true i.e.,like or(|) operator
    console.log(arr.every(i => i>300)) //this condition is all array elements are statisfied then it will be true
}
TA([100,200,300,400,500])
let arr1 = ["anil","bhaskar","chanti","damodar"]
    console.log(arr1.some(i=> i>"d"))
    console.log(arr1.every(i=> i>"b"))

function joi(){
    console.log("<----join------>")
    let j = arr1.join("-")
    console.log(j)
}
joi()
function joi2(){
    let k = arr1.join("&")
    console.log(k)
}
joi2()
 
console.log("<------sort()-------->")
let arr = [5, 35, 8, 71, 2, 25, 6, 11]
console.log("ascending order with sort method",arr.sort())
console.log("ascending order with ananymous function in sort method",arr.sort(function(a, b) {
    return a - b
}));
console.log("ascending order with arrow function in sort method",arr.sort((a, b) => a - b));

function sort(){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {  // 35 > 8
                let temp = arr[i];     //temp=35
                arr[i] = arr[j];   //arr[j]=8
                arr[j] = temp; // arr[j+1]=35
            } } }
    console.log(arr);
}
sort() 
 console.log("<----Swapping----->")
function swapping(a,b){
    console.log("before:","a:",a,"b:",b)
    let temp = a //temp =5
    a = b //a=10
    b = temp //b=5
    console.log("After","a:",a,"b:",b)
}
swapping(5,10)
console.log("<-----Removing Duplicates----->")
let arr2 = ["ayodhya","aranyam","bharatudu","bheemudu","ayodhya"]
console.log(...new Set(arr2))

let arr3 = [1,2,3,4,5,4,3,2,1]
console.log(...new Set(arr3))

console.log("<----flattening the array---->")
let arr4 = [1,2,3,[4,5,[6,7]]]
console.log(arr4.flat(2))

let arr5 = ["a","b","c",["d","e",["f"],"g"],"h"]
console.log(arr5.flat(0))
console.log(arr5.flat(1))
console.log(arr5.flat(2))

console.log("<----map(), filter() and reduce()---->")
 let arr6 = [100,200,300,400,500]
 console.log(arr6.map(i => i*11)) //transform each element

 console.log(arr6.map(i => i/10))

 console.log(arr6.filter(i => i>300)) //select elements

let result = arr6.reduce((acc, curr) => acc + curr); //combine elements
console.log(result);
 
 let arr7 = [1,2,3,4,5]
console.log(arr7.reduce((a, b) => a * b))


