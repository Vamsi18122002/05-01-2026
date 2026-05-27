let passCount = 0;
let failCount = 0;
let total = 0;

for (let i = 1; i <= 5; i++) {
    let marks = parseInt(prompt("Enter marks of student " + i + ":"));

    total += marks;

    if (marks >= 40) {
        passCount++;
    } else {
        failCount++;
    }
}

let average = total / 5;
console.log("Passed Students: " + passCount);
console.log("Failed Students: " + failCount);
console.log("Average Marks: " + average.toFixed(2));