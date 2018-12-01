const name = 'Umesh';
const age = 89;
const job = 'Scientist';
const city = 'New York';

function hello(name){
    return 'Hello '.concat(name);
}

// Without template strings (ES5 way)
html = '<ul> <li> Name: ' + name + '</li> <li>Age: ' + age + ' </li> <li> Job: '+ job + '</li> <li>City: ' + city + '</li></ul>'



// Little bit cleaner
html = 
    '<ul>' +
    '<li> Name: ' + name + '</li>' +
    '<li>Age: ' + age + ' </li>' +
    '<li> Job: '+ job + '</li>' +
    '<li>City: ' + city + '</li>' + 
    '</ul>';

// with template literal/string (es6)
html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${10 + 12}</li>
    <li>${hello(name)}</li>
    <li>${age > 30 ? 'You are under 30' : 'You are over 30'}</li>
    </ul>
`

document.body.innerHTML = html;

