// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listerners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter task event
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e){
    if (taskInput.value === ''){
        alert('Add a task');
    }else{
        // create li element
        const li = document.createElement('li');
        // add className to help materialize
        li.className = 'collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class = "fa fa-remove" </i>';
        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    }
    e.preventDefault();
}

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear tasks
function clearTasks(){
    // Just remove innerHTML for ul
    // taskList.innerHTML = ''; 

    // faster to loop through
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item  = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) !=-1){
                task.style.display = 'block';
            }else{
                task.style.display = 'none';
            }
        });
}