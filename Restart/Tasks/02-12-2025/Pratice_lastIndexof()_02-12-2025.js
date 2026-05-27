console.log("LastIndexof() : lastIndexOf() is a method that searches for a value in a list, string, or array and returns the last position where it appears.")
function lio(text){ //on String data
    let index = text.lastIndexOf("hello")
    console.log(index)
}
lio("hello1 world hello 5374hello345")

function lio1(nums){  //on array data
    let y = nums.lastIndexOf(2)
    return y
}
console.log(lio1([1, 2, 3, 4, 2, 1, 2]))

function lio2(str){ // data not present in the array then it returns -1
    let m = str.lastIndexOf("esh")
    console.log(m)
}
lio2(["mallesh", "ramesh", "suresh"])

function lio3(str){ 
    let m = str.lastIndexOf("esh")
    console.log(m)
}
lio3("mallesh ramesh suresh")

console.log("Assigning an empty array using the splice() method.")
function emptyArray(arr) {
    arr.splice(0, arr.length-1)
    return arr
}
let data = [5, 10, 15]
console.log(emptyArray(data))

function spilicing2(colors){
    colors.splice(0, 0,"white")
    console.log(colors)
}
spilicing2(["red", "green", "blue"])

console.log("Different ways to combining the arrays")
function combining(){
    let a = [1, 2];  //concatenation
    let b = [3, 4];
    let result = a.concat(b);
    console.log(result);
}
combining()

function combine(a,b){
    let c = a.concat(b)
    console.log(c)
}
combine("vasi","kar")
function combining1(d, c){
    let result1 = [...d, ...c]; //spread Operator
    console.log(result1)
}
combining1(["abcd","cdef"], ["ghij", "klmn"])

function combining2(e, f){
    e.push(...f); //using push with spread operator
    return e
}
console.log(combining2(["vasi", "kasi"],[123, 394]))
//elements are ascending order without using sort method 
function ascending(arr1){
   
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {

                // swap values
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }

    console.log(arr1);   // [1, 2, 3, 5, 8]

}
ascending([5, 3, 8, 1, 2])