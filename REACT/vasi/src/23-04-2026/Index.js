 console.log("Iterators:- It is used for arrys and Go through items one by one")
let arr = ["vasikar",true,null,1564]
let k = arr[Symbol.iterator]() 

console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

console.log("Generator:- It is a special function that creates an iterator for you")
function* greeting(){
    yield "Good Morning"
    yield "vasikar"
    yield "How are you"
}
let m = greeting()
console.log(m.next()) 
console.log(m.next())
console.log(m.next())
console.log(m.next())

console.log("Error Handling")
console.log("try/catch")
console.log("finally")
try {
    console.log(hello)
} catch (error) {
    console.log(error)
}
console.log("Error occured")

try {
    throw("error")
} catch (error) {
    console.log(error)
}
finally{
    console.log("code completed")
}
try {
    let num = 0;

    if (num === 0) {
        throw new Error("Cannot divide by zero!");
    }

    let result = 10 / num;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("local storage")
console.log("session storage")

localStorage.setItem("name","vasikar")
console.log(localStorage.getItem("name"))

localStorage.setItem("class","10th")
console.log(localStorage.getItem("class"))

sessionStorage.setItem("name","vamsi")
console.log(sessionStorage.getItem("name")) 

console.log(sessionStorage.removeItem("name"))

console.log(localStorage.clear()) 

console.log("API Calls");

// ---------------- FETCH (GET) ----------------
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log("Fetch Data:", data))
  .catch(err => console.error("Fetch Error:", err));

// ================= API METHODS =================
// console.log("API Methods");

// // POST
// fetch.post("https://jsonplaceholder.typicode.com/users", {
//   name: "John Doe",
//   email: "john@example.com"
// })
// .then(res => console.log("POST:", res.data))
// .catch(err => console.error("POST Error:", err));

// // PUT
// fetch.put("https://jsonplaceholder.typicode.com/users/1", {
//   name: "Updated Name",
//   email: "updated@example.com"
// })
// .then(res => console.log("PUT:", res.data))     
// .catch(err => console.error("PUT Error:", err));

// //PATCH
// fetch.patch("https://jsonplaceholder.typicode.com/users/1", {
//   name: "Partially Updated"
// })
// .then(res => console.log("PATCH:", res.data))
// .catch(err => console.error("PATCH Error:", err));

// // DELETE
// fetch.delete("https://jsonplaceholder.typicode.com/users/1")
//   .then(() => console.log("DELETE: User deleted"))
//   .catch(err => console.error("DELETE Error:", err));


//console.log("Employee Management System");
let employees = ["Ravi", "Kiran", "Vamsi", "Suresh"];
let emp = employees[Symbol.iterator]();

console.log(emp.next());
console.log(emp.next());
console.log(emp.next());
console.log(emp.next());
console.log(emp.next()); 

function* messages() {
    yield "Welcome Employees";
    yield "Attendance Started";
    yield "Work Hard";
}
let msg = messages();

console.log(msg.next());
console.log(msg.next());
console.log(msg.next());
console.log(msg.next());

try {
    let name = "";

    if (name === "") {
        throw new Error("Employee name required");
    }
    console.log(name);

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Code Completed");
}

localStorage.setItem("company", "TCS");
console.log(localStorage.getItem("company"));

sessionStorage.setItem("loginUser", "Ravi");
console.log(sessionStorage.getItem("loginUser"));

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log("Fetch Data:", data))
.catch(error => console.log(error));

// axios.post("https://jsonplaceholder.typicode.com/users", {
//     name: "Ravi",
//     role: "Developer"
// // })
// .then(response => console.log("Employee Added:", response.data))
// .catch(error => console.log(error));