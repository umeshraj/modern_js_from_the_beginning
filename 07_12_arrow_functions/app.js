// // Regular function
// const sayHello = function() {
//   console.log("Hello");
// };

// // First step in arrow function: replace function with =>
// const sayHello = () => {
//   console.log("Hello");
// };

// // One line function without {}
// const sayHello = () => console.log("Hello");

// sayHello();

// // Returning something
// // old way
// const sayHello = function() {
//   return "Hello";
// };
// arrow function return
// const sayHello = () => "Hello";

// // trouble if returning object literal
// const sayHello = () => ({ msg: "Hello" });

// console.log(sayHello());

// with parameters
// const sayHello = (name) => console.log(`Hello ${name}`);

// // non need for () for single params
// const sayHello = name => console.log(`Hello ${name}`);

// // multiple params need ()
// const sayHello = (firstname, lastName) =>
//   console.log(`Hello ${firstname} ${lastName}`);

// sayHello("Brad", "Traversy");

// Arrow functions in callbacks
const users = ["Nathan", "John", "William"];

// // names using map the old way
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// // shorter using arrow function
// const nameLengths = users.map(name => {
//   return name.length;
// });

// Arrow function shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
