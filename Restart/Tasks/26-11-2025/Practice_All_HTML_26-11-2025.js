let count=0
function vowelConsonants(str){
    for(let i=0;i<=str.length-1;i++){
        if(str[i]=='a'|| str[i]=='e'||str[i] =='i'||str[i]=='o'||str[i]=='u'){
                count++
        }
    }
    // console.log(count)
    console.log(str.length-count)
}
vowelConsonants("vamsi")


// function vowelConsonantscount(str1){
//     for(let i=0;i<=str1.length-1;i++){
let line=""
function reverseString(revstr){ 
    for(let i=revstr.length-1;i>=0;i--){
        line += revstr[i]
    }
    console.log(line)
}
reverseString("prashanth")


let sum = 0
function ArraySum(arr){
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    console.log(sum)
}
ArraySum([10,20,30,40,50])

