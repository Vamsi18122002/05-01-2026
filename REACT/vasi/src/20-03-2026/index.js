const obj1 = {
  name: "Alice",
  age: 25,
  address: { city: "NY", zip: 10001 }
};

const obj2 = {
  name: "Alice",
  age: 26,
  address: { city: "LA", zip: 10001 }
};
console.log(getObjectDifference(obj1, obj2));


function getObjectDifference(obj1, obj2) {
  function isObject(val) {
    return val && typeof val === "object" && !Array.isArray(val);
  }

  function diff(o1, o2) {
    const result = {};

    const keys = new Set([...Object.keys(o1 || {}), ...Object.keys(o2 || {})]);

    for (let key of keys) {
      const val1 = o1 ? o1[key] : undefined;
      const val2 = o2 ? o2[key] : undefined;

     
      if (isObject(val1) && isObject(val2)) {
        const nestedDiff = diff(val1, val2);
        if (Object.keys(nestedDiff).length > 0) {
          result[key] = nestedDiff;
        }
      }
      
      else if (Array.isArray(val1) && Array.isArray(val2)) {
        if (JSON.stringify(val1) !== JSON.stringify(val2)) {
          result[key] = val2;
        }
      }
     
      else if (val1 !== val2) {
        result[key] = val2;
      }
    }

    return result;
  }

  return diff(obj1, obj2);
}