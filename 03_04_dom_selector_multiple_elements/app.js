// document.getElementsByClassName 

const items = document.getElementsByClassName('collection-item'); // returns HTML collection
console.log(items);  
console.log(items[0]);
// modifying items
items[0].style.color = 'red';
items[3].textContent = 'Hello, World!';
// We don't have to select from Global scope as above
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);


// document.getElementsByTagName()

let lis = document.getElementsByTagName('li'); // returns HTML collection
console.log(lis);  
console.log(lis[0]);
// // modifying items
lis[0].style.color = 'red';
lis[3].textContent = 'Hello, World!';

// HTML collection is not an array. 
// Convert HTML collection to array
lis = Array.from(lis);
lis.reverse();  // an array method
console.log(lis);
// Since it is an array, we can use forEach
lis.forEach(function(li){
    console.log(li.className);
    li.textContent = 'Hello';
})
// remember you can pass index to forEach
lis.forEach(function(li, index){
    li.textContent = `${index}: Hello`;
})


// document.querySelectorAll()

// you can use css, like jquery
// we are first getting ul with class=collection and inside that li w/ class=.collection-item
const items2 = document.querySelectorAll('ul.collection li.collection-item');
console.log(items2);
// Note output is not html collection, but nodelist

// using forEach w/o converting to array
// remember you can pass index to forEach
items2.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
})

// Selecting all odds and evens
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even');

// access odd with forEach
liOdd.forEach(function(li){
    li.style.background = '#ccc';
});

// access even with a different for loop
for (let i=0; i<liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}
// Note you can use for loop with HTML collection (since length can be used for HTML collection) just not forEach