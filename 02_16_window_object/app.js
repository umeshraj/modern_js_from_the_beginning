// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log is part of window
console.log(123);
window.console.log(123);

// // Alert
// window.alert('Hello, world!');
// alert('Hello, world!');

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// } else{
//     console.log('NO');
// }

// height/width of window
let val;

// outer height and width
val  = window.outerHeight;
val = window.outerWidth;

// inner height and width
val  = window.innerHeight;
val = window.innerWidth;

// Scroll points (for triggering an animation)
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
// get everything (protocol, hostname, port)
val = window.location.href; 
// search params in url
val = window.location.search;

// REDIRECT
// note we are now setting href
// window.location.href = 'http://google.com';
// window.location.reload();

// History Object
// window.history.go(-1);
val = window.history.length;

// Navigator object (not window, but browser: chrome, firefox etc)
// named for netscape
val = window.navigator;
val = window.navigator.appName;  // should give navigator, ie
val = window.navigator.appVersion; // browser version
val = window.navigator.userAgent;
val = window.navigator.platform;
val =  window.navigator.vendor;
val = window.navigator.language;

console.log(val);