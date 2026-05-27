var btn = document.getElementById("toggleBtn");

btn.onclick = function() {
    var body = document.body;

    if (body.className === "dark-mode") {
        body.className = "";
    } else {
        body.className = "dark-mode";
    }
}
