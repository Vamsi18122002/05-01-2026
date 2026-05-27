//CallBack Function
function greeting(name, callback) {
  console.log("Hello " + name);
  callback();
}
function bye() {
  console.log("Goodbye!");
}
greeting("Sai", bye);


function wish(L,M,N){
    console.log("x = "+L)
    M()
    N()
}
function M(){
    console.log("It is a callback function")
}
function N(){
    console.log("It is a N callback function")
}
wish(133223,M,N)


try {
    let x = y + 10; // y is not defined
    console.log(x);
}
catch(error) {
    console.log("Error occurred:");
    console.log(error.message);
}