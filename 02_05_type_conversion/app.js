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