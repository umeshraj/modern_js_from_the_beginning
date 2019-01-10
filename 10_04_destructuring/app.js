// Destructuring assignment

let a, b;
[a, b] = [100, 200];

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

// Objects
({ a, b } = { a: 100, b: 200, c: 300, d: 400 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400 });
console.log(a);
console.log(b);
console.log(rest);

// Array destructuring
const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);

// Object destructuring
const person = {
  name: "John Doe",
  age: 32,
  city: "Miami, FL",
  gender: "Male",
  sayHello: function() {
    console.log("Hello");
  }
};

// Old ES5 way
const name = person.name,
  age = person.age,
  city = person.city,
  gender = person.gender;
console.log(name, age, city, gender);

// New ES6 way
const { sayHello, name, age, city } = person;
console.log(name, age, city);
sayHello();
