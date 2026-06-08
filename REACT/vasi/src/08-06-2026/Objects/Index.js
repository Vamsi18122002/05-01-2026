//create the Object
const person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person);

//object.keys
const person1 = {
    name: "John",
    age: 25
};
console.log(Object.keys(person1));

//Copying Of Objects
const obj1 = {
    name: "John"
};

const obj2 = obj1;
obj2.name = "David";

console.log(obj1.name); 
console.log(obj2.name); 

//Shallow Copy
const obj3 = {
    name: "John",
    age: 25
};

const obj4 = { ...obj3 };
obj4.name = "David";

console.log(obj3.name);
console.log(obj4.name);

//Deep Copy
const obj5 = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
};

const obj6 = structuredClone(obj5);
obj6.address.city = "Vijayawada";

console.log(obj5.address.city);

//Object Destructuring
const person3 = {
  name: "John",
  age: 25,
  city: "Hyderabad"
};

const { name, age, city } = person3;

console.log(name);
console.log(age); 
console.log(city); 