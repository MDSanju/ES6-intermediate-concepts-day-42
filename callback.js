// call back function method
function welcomeMessage(itsName, greedHandler) {
    // it's call on here, means output is generating from this calling below, it means inside function. That's why it's called (call back function)
    greedHandler(itsName);
}

// const fullName = 'Trout and Coffee';
// welcomeMessage(fullName);

// const names = ['Joe', 'Branden', 'Kayle'];
// welcomeMessage(names);

// const myObj = {
//     name: 'Kayle',
//     age: 30,
//     country: 'USA'
// };

function greetMorning(name) {
    console.log('Good morning', name);
}

// we can pass another function using the method of call back function to get different value through one time calling on line number: 4
function greetAfternoom(name) {
    console.log('Good afternoon', name);
}

// another example to get it clearly
function greetEvening(name) {
    console.log('Good evening', name);
}

welcomeMessage('Tom Hanks', greetMorning);

// pass parameters for getting second result
welcomeMessage('Kayle', greetAfternoom);

// pass parameters for another example
welcomeMessage('Ally Browne', greetEvening);