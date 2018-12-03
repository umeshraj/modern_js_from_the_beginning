let val;
// Date documentation on Mozilla website

// today's date by default
const today = new Date();

// set specific date
let birthday = new Date('9-10-1981');
// more specific
birthday = new Date('9-10-1981 11:23:00');
// other ways
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

// Getting parts of day
val = today.getMonth();  // month is zero based
val = today.getDate();
val = today.getDay();  // Sunday is 0
val = today.getFullYear();
val = today. getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// timestamp (time passed since Jan 1 1970)
val = today.getTime();

// Setting date values
birthday.setMonth(2);
birthday.setDate(18);
birthday.setFullYear(1977);
birthday.setHours(3);
birthday.setMinutes(21);
birthday.setSeconds(11);


val = birthday;

console.log(val);