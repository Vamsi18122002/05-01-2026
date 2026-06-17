console.log("LOCAL STORAGE");
// setItem() - Store Data
localStorage.setItem("name", "Vasikar");
localStorage.setItem("class", "10th");
localStorage.setItem("city", "Anantapur");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("class"));
console.log(localStorage.getItem("city"));

localStorage.setItem("class", "12th");
console.log(localStorage.getItem("class"));
console.log("Local Storage Count:", localStorage.length);

console.log("First Key:", localStorage.key(0));
localStorage.removeItem("city");
console.log(localStorage.getItem("city"));

// Store Object
let student = {
    name: "Vasikar",
    age: 20,
    course: "JavaScript"
};
localStorage.setItem("student", JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem("student")));

let skills = ["HTML", "CSS", "JavaScript"];
localStorage.setItem("skills", JSON.stringify(skills));
console.log(JSON.parse(localStorage.getItem("skills")));


console.log("SESSION STORAGE");
// setItem() - Store Data
sessionStorage.setItem("username", "Vamsi");
sessionStorage.setItem("role", "Student");

// getItem() - Get Data
console.log(sessionStorage.getItem("username"));
console.log(sessionStorage.getItem("role"));

sessionStorage.setItem("role", "Developer");
console.log(sessionStorage.getItem("role"));


console.log("Session Storage Count:", sessionStorage.length);
console.log("Session First Key:", sessionStorage.key(0));
sessionStorage.removeItem("username");

console.log(sessionStorage.getItem("username"));

let user = {
    id: 101,
    name: "Vamsi"
};

sessionStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(sessionStorage.getItem("user")));
