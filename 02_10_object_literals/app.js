// super basic object literal
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 1987; 
    },
    // return with access to property
    getBirthYearSmart: function(){
        return 2017 - this.age;
    }
};

let val;

val = person;

// get specific value 
val = person.firstName;  // recommended
val = person['firstName'];  

val = person.lastName;
val = person.age;
val = person.hobbies[1];
// access by both . and []
val = person.address.state;
val = person.address['city'];
// note you need () for function
val = person.getBirthYear();
console.log(val);

// ARRAYS OF OBJECTS
const people = [
    {name: 'umesh', age: 10},
    {name: 'abc', age: 100},
    {name: 'nancy', age: 35}
]

for (let i=0; i<people.length; i++){
    console.log(people[i].name)
}