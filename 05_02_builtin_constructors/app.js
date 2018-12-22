// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

// name1.foo = 'bar' does not work!

console.log(typeof name1);  // string
console.log(typeof name2);  // object!

// comparison failues (== will work, === fails)
if(name2 === 'Jeff'){
    console.log("YES");
}else{
    console.log("NO!!");
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2);

// Functions 

const getSum1 = function(x, y){
    return x + y;
}
console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return x + y');
console.log(getSum2(1, 1))

// Objects
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'});
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr2);

// Regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');  // need espace for \
console.log(re1);
console.log(re2);