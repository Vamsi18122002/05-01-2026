const map = new Map();
map.set("name", "John");
map.set("age", 25);

console.log(map.get("name")); 
console.log(map.has("age"));  
console.log(map.size);      


const weakMap = new WeakMap();
let user = {
  id: 1,
  name: "Alice",
};
weakMap.set(user, {
  role: "Admin",
});
console.log(weakMap.get(user));
console.log(weakMap.has(user));


const set = new Set();
set.add("John");
set.add("Alice");
set.add("John"); 

console.log(set);
console.log(set.has("John"));
console.log(set.size);

set.delete("Alice");
console.log(set.has("Alice"));


const weakSet = new WeakSet();
let employee = {
  id: 101,
  name: "Bob",
};
weakSet.add(employee);
console.log(weakSet.has(employee)); 

weakSet.delete(employee);
console.log(weakSet.has(employee)); 