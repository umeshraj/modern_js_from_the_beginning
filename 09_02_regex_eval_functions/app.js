let re;

// regex literal
re = /hello/; //
re = /hello/i; // i = case-insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in array (if match) else null
// const result = re.exec("hello world");

// console.log(result);
// console.log(result[0]);  // what it matched Hello or hello based on re /i
// console.log(result.index);
// console.log(result.input);

// // test() - Return true or false
// const result = re.test("Hello");
// console.log(result);

// // match() - Return result in array or null (almost like exec, but opposite i/p o/p)
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// // search() - Returns index of first match; if not found returns -1 (like indexof)
// const str = "Hello there";
// const result = str.search(re);
// console.log(result);

// replace() - Returns new string with some or all matches of a pattern
const str = "Hello there. Hello";
const newStr = str.replace(re, "hi");
console.log(newStr);
