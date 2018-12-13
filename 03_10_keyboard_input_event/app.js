const form = document.querySelector('form');  // note form tag (like h2!)
const taskInput = document.getElementById('task'); 
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// clear input in form
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Events on input (not the form)

// Key down (any key: esc, pgup etc)
taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// // Key press (for characters)
// taskInput.addEventListener('keypress', runEvent);
// // Focus
// taskInput.addEventListener('focus', runEvent);
// // Blur
// taskInput.addEventListener('blur', runEvent);
// // Cut 
// taskInput.addEventListener('cut', runEvent);
// // Paste
// taskInput.addEventListener('paste', runEvent);
// // Input (event): anything type, paste, cut..
// taskInput.addEventListener('input', runEvent);

// change event (on a select list)
// select.addEventListener('change', runEvent);



function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // Get input value in form
    // console.log(taskInput.value);

    // console.log(e.target.value);
    // heading.innerText = e.target.value;

    // e.preventDefault();
}