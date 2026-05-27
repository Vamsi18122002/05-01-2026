let name = "Rahul";
let age = 20;
let isStudent = true;

let subjects = ["Math", "Science", "English"];

let person = {
  name: name,
  age: age
};
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Subjects:", subjects.join(", "));
console.log("Person Object:", person);

function introduce() {
  console.log("Hello, my name is " + name + " and I am " + age + " years old.");
}

introduce();