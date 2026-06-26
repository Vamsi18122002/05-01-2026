const fruits = ["Apple", "Banana", "Orange"];
console.log("Original Array:", fruits);

// push() - Add element to end
fruits.push("Mango");
console.log("After push:", fruits);

// pop() - Remove last element
fruits.pop();
console.log("After pop:", fruits);

// unshift() - Add element to beginning
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

// shift() - Remove first element
fruits.shift();
console.log("After shift:", fruits);

// indexOf() - Find first index
console.log("Index of Banana:", fruits.indexOf("Banana"));

// lastIndexOf() - Find last index
const nums1 = [1, 2, 3, 2];
console.log("Last Index of 2:", nums1.lastIndexOf(2));

// includes() - Check existence
console.log("Contains Orange:", fruits.includes("Orange"));

// join() - Convert array to string
console.log("Joined:", fruits.join(", "));

// slice() - Copy part of array
console.log("Slice:", fruits.slice(0, 2));

// splice() - Add/Remove elements
fruits.splice(1, 1, "Kiwi");
console.log("After splice:", fruits);

// reverse() - Reverse array
console.log("Reversed:", [...fruits].reverse());

// sort() - Sort array
console.log("Sorted:", [...fruits].sort());

// concat() - Merge arrays
const moreFruits = ["Mango", "Pineapple"];
console.log("Concat:", fruits.concat(moreFruits));

// forEach() - Loop through array
console.log("\nforEach:");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// map() - Create new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Map:", upperFruits);

// filter() - Filter values
const longNames = fruits.filter(fruit => fruit.length > 5);
console.log("Filter:", longNames);

// find() - First matching value
console.log("Find:", fruits.find(fruit => fruit.startsWith("O")));

// findIndex() - Index of matching value
console.log("Find Index:", fruits.findIndex(fruit => fruit === "Orange"));

// every() - Check all elements
const evenNumbers = [2, 4, 6, 8];
console.log("Every:", evenNumbers.every(num => num % 2 === 0));

// some() - Check at least one element
const numbers = [1, 3, 5, 8];
console.log("Some:", numbers.some(num => num % 2 === 0));

// reduce() - Reduce array
const total = [1, 2, 3, 4].reduce((sum, num) => sum + num, 0);
console.log("Reduce:", total);

// fill()
const fillArray = [1, 2, 3, 4];
fillArray.fill(0);
console.log("Fill:", fillArray);

// flat()
const nested = [1, [2, 3], [4, [5]]];
console.log("Flat (1):", nested.flat());
console.log("Flat (2):", nested.flat(2));

// at()
console.log("At(0):", fruits.at(0));
console.log("At(-1):", fruits.at(-1));

// entries()
console.log("\nEntries:");
for (const [index, value] of fruits.entries()) {
    console.log(index, value);
}

// keys()
console.log("\nKeys:");
for (const key of fruits.keys()) {
    console.log(key);
}

// values()
console.log("\nValues:");
for (const value of fruits.values()) {
    console.log(value);
}

// Array.from()
const str = "HELLO";
console.log("Array.from:", Array.from(str));

// Array.of()
console.log("Array.of:", Array.of(10, 20, 30));

// Array.isArray()
console.log("Is Array:", Array.isArray(fruits));
console.log("Is Array:", Array.isArray("Hello"));

//array destructuring
const Address = ["Ananthapur", "Yellanur", "Tadipatri"];
const [first, second, third] = Address;

console.log(first); 
console.log(second);
console.log(third); 
