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

// indexOf() - Find index
console.log("Index of Banana:", fruits.indexOf("Banana"));

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

// forEach() - Loop through array
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// map() - Create new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Map:", upperFruits);

// filter() - Filter values
const longNames = fruits.filter(fruit => fruit.length > 5);
console.log("Filter:", longNames);

//deep copy
const arr1 = [1, 2, [3, 4]];
const arr2 = structuredClone(arr1);

arr2[2][0] = 999;

console.log(arr1); 
console.log(arr2); 

// Shallow copy
const arr3 = [1, 2, [3, 4]];
const arr4 = [...arr3]; 

arr4[0] = 100;

console.log(arr3); 
console.log(arr4); 

//array destructuring
const Address = ["Ananthapur", "Yellanur", "Tadipatri"];
const [first, second, third] = Address;

console.log(first); 
console.log(second);
console.log(third); 

