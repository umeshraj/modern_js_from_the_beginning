// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2"); // with identifier

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);

// No two symbols can be the same
console.log(Symbol() === Symbol());
// Cannot convert Symbol to a string
// console.log(`Hello ${sym1}`);

// But you can wrap a symbol around a string
console.log(`Hello ${String(sym1)}`);
console.log(`Hello ${sym1.toString()}`);

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};
myObj[KEY1] = "Prop1"; // we can't doe myObj.KEY1 for Symbols
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";
// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("123")]: "prop2" }));
