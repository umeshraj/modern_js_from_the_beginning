// REPLACE ELEMENTS

// Create element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';  // using id of heading to replace
// new text node
newText = document.createTextNode('Task List');
newHeading.appendChild(newText);

// Get old heading
const oldHeading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action');
// const cardAction = oldHeading.parentElement;

// replace child
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
lis[0].remove()

// remove child element
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// add remove classes
let val;
val = link.className;  // string of classnames it belongs to
val = link.classList;  // list of all classes it belongs to
val = link.classList[0];  // get first class name
link.classList.add('test');  // add a new class
val = link;
link.classList.remove('test');  // remove a class name
val = link;

// add remove attributes
val = link.getAttribute('href');  // get attribute for link
val = link.setAttribute('href', 'http://www.google.com');  // set attribute
val = link.hasAttribute('href');  // check if attribute exists
val = link.hasAttribute('title'); // should be false
// setting an attribute
link.setAttribute('title','Google'); // setting an attribute
// remove an attribute
link.removeAttribute('title');
val = link

console.log(val);