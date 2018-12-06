let val;

val = document;
// html collection
val = document.all;
val = document.all[0];  // html part
val = document.all[1]; // head
val = document.all[2]; // meta
val = document.all.length; // property accesses to # elements in dom
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Selecting without selectors (not recommended)

// selecting forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method    // methods for forms
val = document.forms[0].action    // if there is an action to the form

// selecting links
val = document.links;   // gives you a list of links on page
val = document.links[0];    // specific link
val = document.links[0].id; // id for specific link
val = document.links[0].className;  // classnames for link as a string
val = document.links[0].classList;  // classnames for link as a list
val = document.links[0].classList[0];   //first classname

// accessing images
val = document.images;

// accessinng linked scripts
val = document.scripts;
// access attributes for scripts
val = document.scripts[2].getAttribute('src');  // this app.js

// Converting HTML collection into array for using forEach
let scripts = document.scripts;
// following won't work if not array
// scripts.forEach(function(script){
//     console.log(script);    
// });

// print full script code
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script){
    console.log(script);
});
// print just the script source
scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val);