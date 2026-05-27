console.log("Intro to Git and GitHub")
console.log("Git:- Git is a version control system.")//tool
console.log("It helps you track changes in your code over time.")
console.log("GitHub:- GitHub is a cloud platform that stores Git repositories online.")
//services that hosts git projects

console.log("Git Commands")
console.log("git init")         
console.log("git status")   
console.log(`git commit -m "messsage"`)     
console.log("git add .")         
console.log("git branch")        
console.log("git push")          
console.log("git pull")          

let data = []
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            data = users;
            displayUsers(data)
        })
        .catch(error => {
            console.log("Error:", error)
        })
}

function clearData() {
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
}

function displayUsers(users) {
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    
    users.forEach(u => {
        let tr = document.createElement("tr")

        let values = [
            u.name,
            u.username,
            u.email,
            u.address.geo.lat,
            u.address.geo.lng
        ]
        values.forEach(value => {
            let td = document.createElement("td")
            td.textContent = value
            tr.appendChild(td)
        })

        tbody.appendChild(tr)
    })
}
