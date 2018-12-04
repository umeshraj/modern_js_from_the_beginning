// FOR LOOP

for(let i=0; i<10; i++){
    if (i === 2){
        console.log('2 is my favorite number');
        continue;
    }
    
    if (i === 5){
        console.log('Break the loop at 5');
        break;
    }

    console.log('Number ' + i);
}


// WHILE LOOP
let i = 0;
while (i < 10){
    console.log('Number ' + i);
    i++;
}


// DO WHILE

let j = 100;
do{
    console.log('Number ' + j);
    j++;
}while(j < 10);


// LOOP THRU ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// (TRADITIONAL)
for (let i=0; i<cars.length; i++){
    console.log(cars[i]);
}

// FOR EACH WITH 1 PARAM
cars.forEach(function(car){
    console.log(car);
});

// FOR EACH WITH 2 PARAMS
cars.forEach(function(car, index){
    console.log(`${index}: ${car}`);
});

// FOR EACH WITH 3 PARAMS
cars.forEach(function(car, index, fullArray){
    console.log(`${index}: ${car}`);
    console.log(fullArray.length);
});


// MAP

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sarah'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id;
})
console.log(ids);


// FOR IN LOOP (FOR KEY: VALUE PAIRS)

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 90
}

for (let x in user){
    // console.log(x);
    console.log(`${x}: ${user[x]}`);
}