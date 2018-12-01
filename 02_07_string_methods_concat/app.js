const firstName = 'Umesh';
const lastName = 'Rajashekar';
const age = 97;
const str = 'Hello. My name is Umesh. I am a boy.'
const tags = 'math,science,ml,dl';

let val;

// string concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

// Append
val = 'umesh';
val += ' rajashekar';

val = "Hello! My name is " + firstName + " and I am " + age;

// Escaping
val = 'That\'s awesome. I can\'t wait.';

// Length
val = firstName.length;

// concat method
val = firstName.concat(' ', lastName, 'test');

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Extract index
val = firstName[0];

// indexOf
val = firstName.indexOf('m');
val = firstName.lastIndexOf('s');

// charAt
val = firstName.charAt(2)
// get last character
val = firstName.charAt(firstName.length-1);

// substring
val = firstName.substring(1, 3);

// slice (similar to substring)
val = firstName.slice(1, 3);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Umesh', 'Moose');

// includes()
val = str.includes('Hello');

console.log(val);