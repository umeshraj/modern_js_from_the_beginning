// document.getElementById()
// Can't select class or tags

const taskTitle = document.getElementById('task-title');
console.log(taskTitle);

// Get things from the selected element
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change sytling of selected element with 'style'
// Ideally do this with CSS, but can be done here with JS too
taskTitle.style.background = '#333';
taskTitle.style.color = '#FFF';
taskTitle.style.padding = '5px';
// Make it disappear
// taskTitle.style.display = 'none';

// Change text content
taskTitle.textContent = 'Task LIST';
taskTitle.innerText = 'My tasks';
taskTitle.innerHTML = '<span style="color:red"> Task List </span>';


// document.querySelector()
// newer and more powerful like JQuery!

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';  // picks only first one
// sub classes (nested elements)
document.querySelector('ul li').style.color = 'blue';  // picks only first one
// css pseudo classes (CSS 3)
document.querySelector('li:last-child').style.color = 'green';
// color of 3rd child
document.querySelector('li:nth-child(3)').style.color = 'yellow';
// text content of 4th child
document.querySelector('li:nth-child(4)').textContent = 'Hello!';
// With CSS 3 you can select odd/even things to work on
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
