// // Using anonymous or unnamed function 
// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('Hello, World!');
    
//     // use e = eventObject to prevent default refresh behavious
//     // e.preventDefault();
// })

// Using named function 
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
    // console.log('Clicked from named function!');

    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;  // all classes as a string
    val = e.target.classList;  // all classes as a collection

    e.target.innerText = 'Hello'; 

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords of event relative to window
    val = e.clientY;  // will change if you click at top/bottom of button!
    val = e.clientX;

    // Coords of even relative to element (not window)
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}