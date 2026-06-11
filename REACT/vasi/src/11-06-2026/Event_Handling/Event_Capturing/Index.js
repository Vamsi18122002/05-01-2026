const parent = document.getElementById("parent");
parent.addEventListener("click",() => {
        console.log("Parent clicked");
    },
    true // capturing
);

const child = document.getElementById("child");
child.addEventListener("click", () => {
        console.log("Child clicked");
    },
    true // capturing
);