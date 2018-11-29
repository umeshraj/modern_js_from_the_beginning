// var, let, const

// // VAR Usage
// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// // init variable
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Cannot start with a number

// // multi-word vars
// var firstName = 'Umesh';  // camel case
// var first_name = 'Umesh'; // snake case
// var FirstName = 'Umesh';  // Pascal case
// var firstname = 'Umesh'; // avoid


// // LET usage
// let name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// CONST usage
// const name = 'Umesh';
// console.log(name);
// name = 'Raj';  // will not work

// const test;  // will not work

// const object can be modified
const person = {
    name: 'Umesh',
    age: 101
};

console.log(person);

person.name = 'Sara';
console.log(person);

// const array can be modified
const array = [1, 2, 3,]
console.log(array);
array.push(10);
console.log(array);