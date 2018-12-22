// Object literal. Just key/value pairs
const umesh = {
    name: 'Umesh',
    age: 100
}

console.log(umesh);
console.log(umesh.age);

// Person constructor
function Person(name, weight, dob){
    this.name = name;
    this.weight = weight;
    this.birthday = new Date(dob)
    console.log(this);

    // method
    this.calculateAge = function(){
        // diff is a number; not a date
        const diff = Date.now() - this.birthday.getTime();
        // convert diff to a date
        const ageDate = new Date(diff);
        //  subtract UTFFullYear()
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// In global scope, "this" gives you the window object!
console.log(this); 
// this.alert('Hello, world!');

const brad = new Person('Brad', 20, '10-11-2000');
const john = new Person('John', 30, '2-5,1999');
// console.log(brad);
console.log(john.weight);
console.log(brad.birthday);
console.log(brad.calculateAge());