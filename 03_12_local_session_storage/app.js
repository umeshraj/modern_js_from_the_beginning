// set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30')  // note 30 is string for storage

// set session storage item
sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// clear all items
localStorage.clear();

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age')

console.log(name, age);

// save from form to local storage
document.querySelector('form').addEventListener('submit', 
function(e){
    console.log(e.target);
    const task = document.getElementById('task').value;

    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
})

// // note converting string to array for use in forEach
// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function(task){
//     console.log(task);
// })