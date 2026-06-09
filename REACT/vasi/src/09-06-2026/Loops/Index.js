const numbers = [1, 2, 3, 4, 2, 5, 3, 6];
const duplicates = [];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
        }
    }
}
console.log("Duplicate values:", duplicates);

let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}


let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

const person = {
    name: "John",
    age: 25,
    city: "New York"
};
for (const key in person) {
    console.log(key, ":", person[key]);
}

const arr = ["A", "B", "C"];
// for...in
for (const index in arr) {
    console.log(index);
}

// for...of
for (const value of arr) {
    console.log(value);
}


const Vegetables = ["chilli", "Tamota", "potato"];

Vegetables.forEach((fruit) => {
    console.log(fruit);
});

