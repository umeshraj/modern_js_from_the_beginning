class Person{
    constructor(firstName, lastName, dob) {
        this.firstname = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    // method
    greeting(){
        return `Hello there ${this.firstname} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

// create object same as before
const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMarried('Thompson');
console.log(mary);

// can't use mary.addNumbers(1, 2)
// console.log(mary.addNumbers(1, 2));

// to use static methods, use the class name
console.log(Person.addNumbers(1, 2));