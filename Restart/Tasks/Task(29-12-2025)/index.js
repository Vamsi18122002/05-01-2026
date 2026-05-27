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
