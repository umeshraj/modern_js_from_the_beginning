// SETS - store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("a string");
set1.add({ name: "John" });
set1.add(true);
set1.add(100); // won't add again
console.log(set1);

// another way of making sets
const set2 = new Set([1, true, "string"]);
console.log(set2);

// get count
console.log(set1.size);

// check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "John" }));

console.log({ name: "John" } === { name: "John" }); // ref type => false
console.log("hello" === "hello"); // primite type => true

// Delete from set
set1.delete(100);
console.log(set1);

// ITERATE THROUGH SETS
// for..of (set1.keys(), set1.values(), set1.entries())
for (let item of set1) {
  console.log(item);
}

// forEach
set1.forEach(value => console.log(value));

// CONVERT TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
