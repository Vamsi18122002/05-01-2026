const message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

checkAuth();

loginBtn.addEventListener("click", () => {
  localStorage.setItem("authToken", "892174HFIUH"); 
  checkAuth();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("authToken");
  checkAuth();
});

function checkAuth() {
  const token = localStorage.getItem("authToken");

  if (token) {
    message.innerText = "Hello User";
    loginBtn.style.display = "none"; 
    logoutBtn.style.display = "inline";
  } else {
    message.innerText = "Please Login";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
  }
}