document.addEventListener("DOMContentLoaded", loadData);

document.getElementById("regForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let course = document.getElementById("course").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;

let valid = true;

document.querySelectorAll(".error").forEach(el => el.innerText="");

if(name===""){
document.getElementById("nameError").innerText="Name is required";
valid=false;
}
if(email===""){
document.getElementById("emailError").innerText="Email is required";
valid=false;
}
if(course===""){
document.getElementById("courseError").innerText="Course is required";
valid=false;
}
let passwordPattern=/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

if(!passwordPattern.test(password)){
document.getElementById("passwordError").innerText="Password must be 8+ chars, 1 uppercase, 1 number";
valid=false;
}
if(confirm!==password){
document.getElementById("confirmError").innerText="Passwords do not match";
valid=false;
}
if(valid){
let userData={
name:name,
email:email,
course:course
};
localStorage.setItem("studentData", JSON.stringify(userData));
alert("Registration Successful!");
}
});
function loadData(){
let data = localStorage.getItem("studentData");
if(data){
let user = JSON.parse(data);
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("course").value = user.course;
}}
