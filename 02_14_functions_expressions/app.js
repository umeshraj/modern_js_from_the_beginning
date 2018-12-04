// FUNCTION DECLARATION

function greet(firstName='John', lastName='Doe'){
    // default parameters old style
    // if (typeof firstName === 'undefined') firstName = 'John';
    // if (typeof lastName === 'undefined') lastName = 'Doe';

    // console.log('Hello!')
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}
console.log(greet());


// FUNCTION EXPRESSIONS

const square = function(x=3){
    return x*x;
};
console.log(square());


// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IFFE Ran..')
}
)();

(function(name){
    console.log('Hello ' + name)
}
)('Umesh');


// PROPERTY METHODS 

const todo = {
    add: function(){
        console.log('Add todo..s');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

// Adding function to object literal "outside"
todo.delete = function(){
    console.log('Delete todo...')
}

todo.add();
todo.edit(25);
todo.delete();