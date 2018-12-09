let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes. Returns NodeList
val = list.childNodes;  // text nodes extra for line breaks
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// child nodes give us all types of nodes, not just elements. childres gives only elements. Most like you will use children (not childNodes).

// Get childres element nodes (i.e.without linebreak). Returns HTMLCollection
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello, world!';

// Children of children
val = list.children[3].children[0];
// modify contents of children of children
list.children[3].children[0].id = 'test-link';

// first child
val = list.firstChild;  // like childNode, give first text or element
val = list.firstElementChild; // first actual element w/o text nodes. Most used
// last child
val = list.lastChild;  // like childNode, give first text or element
val = list.lastElementChild; // first actual element w/o text nodes. Most used

// count child elements
val = list.childElementCount;


// Get parent nodes
val = listItem.parentNode;
val = listItem.parentElement;  // most cases will same as parentNode
// parents of parents
val = listItem.parentElement.parentElement; 

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;  // next element
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;  // next element = null!


console.log(val);