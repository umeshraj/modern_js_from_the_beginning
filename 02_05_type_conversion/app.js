let val;

// Number to string
val = String(512);
val = String(10 + 12);

// Boolean to string
val = String(true);

// Date to a string
val = String(new Date());

// Array to string
val = String([1, 2, 3])

// toString() method
val = (512).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

// String to number
console.log('To numbers');

val = Number('512');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

// Other ways to parse
val = parseInt('100.1');
val = parseFloat('10.12');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// JS type coercion
const val1 = String(5);
const val2 = 6;
const valSum = val1 + val2;

console.log(valSum);
console.log(typeof valSum);
