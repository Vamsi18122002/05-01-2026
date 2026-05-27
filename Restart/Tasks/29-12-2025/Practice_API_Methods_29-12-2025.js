console.log(" API Methods")
console.log("GET - to retrive the data")
console.log("POST - to send the data")
console.log("PUT - change the entire data")
console.log("PATCH - update the particular data")
console.log("DELETE - delete the data")

fetch("https://jsonplaceholder.typicode.com/users")
        .then((d) => {
            return d.json()
            // console.log(d)
            // console.log(d.json())
        })
        .then((f) =>
            console.log(f)
        )
        .catch((e) => {
            console.log("Error:", e)
        })

