//It allows a event triggered on child element to Propagate to its parent element
let a = document.getElementById("grandparent")
a.addEventListener("click", function () {
    console.log("Grandparent clicked");
});

let b = document.getElementById("parent")
b.addEventListener("click", function () {
    console.log("Parent clicked");
});

let c = document.getElementById("child")
c.addEventListener("click", function () {
    console.log("Child clicked");
});