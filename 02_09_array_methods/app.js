// create some array

// regular/recommended way
const numbers = [43, 56, 33, 23, 44, 5];

// using aray object
const numbers2 = new Array(22, 33, 4, 8 ,11);

// arrays can be strings
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];

// array can be of different data types
const mixed = [1, 'um', true, null, undefined, {a:1, b:2}, new Date()];
console.log(mixed)

let val;
// get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// get single value
val = numbers[3];
val = numbers[0];

// Arrays are mutable; insertion
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(44);

// MUTATING ARRAYS WITH FUNCTIONS

// adding to end of array
numbers.push(-1111);
// add to start
numbers.unshift(121);

// take off from end
numbers.pop();
// take off from front
numbers.shift();
// splice values (NOT SLICE LIKE IN STRING)
numbers.splice(3, 1);
// reverse
numbers.reverse();
// concat arrays
val = numbers.concat(numbers2);
// sort
val = fruits.sort();
// sorting numbers (happens on first number!!)
val = numbers.sort()
// sort using the compare function
val = numbers.sort(function(x, y){
    return x-y;
});

// reverse sort
val = numbers.sort(function(x, y){
    return y-x;
});

// finding
function under50(num){
    return num < 50;
}
// return first number meeting criterion
val = numbers.find(under50);


console.log(numbers);
console.log(val);