const original = {
  name: "John",
  skills: ["JS", "React"],
  address: { city: "NY" }
};

original.self = original;
const copied = deepClone(original);
                   
console.log(copied);
console.log(copied.self === copied); 


function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (seen.has(obj)) {
    return seen.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};
  seen.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], seen);
    }
  }

  return clone;
}

