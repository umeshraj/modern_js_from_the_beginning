// Create element
const li = document.createElement('li');  // object (not str) <li></li>

// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add attributes
li.setAttribute('title', 'New Item');

// Create text node and append as child
const txt = document.createTextNode('Hello, World!');
li.appendChild(txt);
// create new link element
const link = document.createElement('a');
link.className = "delete-item secondary-content";
link.href = '#';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);