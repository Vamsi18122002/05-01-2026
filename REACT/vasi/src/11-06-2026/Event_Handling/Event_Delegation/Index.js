const list = document.getElementById("list");

list.addEventListener("click", (event) => {
    console.log("Clicked:", event.target.textContent);
});