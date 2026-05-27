const form = document.getElementById("form");

window.onload = () => {
  const data = JSON.parse(localStorage.getItem("formData"));
  if (data) {
    name.value = data.name;
    email.value = data.email;
    phone.value = data.phone;
  }
};

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let phone = document.getElementById("phone").value;

  let passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if(name === ""){
    nameErr.innerText="Name required";
    return;
  }

  if(!passRegex.test(pass)){
    passErr.innerText="Password must have 8 chars, 1 uppercase, 1 number";
    return;
  }

  if(pass !== confirm){
    confirmErr.innerText="Passwords not matching";
    return;
  }

  const data = {name,email,phone};

  localStorage.setItem("formData",JSON.stringify(data));

  alert("Form Submitted");
}); 