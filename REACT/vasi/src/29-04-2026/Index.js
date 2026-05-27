const numbers = {
  current: 1,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { done: true };
    }}
  };

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

//Generator
function* number() {
  yield 11;
  yield 12;
  yield 13;
}
const gen = number();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//Local Storage
localStorage.setItem("username", "Ravi");

console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
localStorage.clear();

//Session storage
sessionStorage.setItem("theme", "dark");

console.log(sessionStorage.getItem("theme"));
sessionStorage.removeItem("theme");
sessionStorage.clear();

// CALLBACK FUNCTION
function getUser(callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Ravi",
            age: 25
        };
        callback(user);
    }, 2000);
}
function displayUser(user) {
    console.log("User Details:");
    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Age:", user.age);    
}
getUser(displayUser);

// ERROR HANDLING
function divideNumbers(a, b) {
    try {

        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }

        let result = a / b;
        console.log("Result:", result);

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        console.log("Calculation completed");}
    }
divideNumbers(10, 2);
divideNumbers(10, 0);