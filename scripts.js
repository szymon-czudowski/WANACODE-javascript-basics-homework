function getGreeting(name, surname) {
    console.log(`Hi ${name} ${surname}! Good to see you`)
}
const greeting = getGreeting('John', 'Smith');

console.log(greeting);

function isThisMyName(name) {
    if (name === 'Szymon') {
        return true;
    } else {
        return false;
    }
}
console.log(isThisMyName('Maciek'));
console.log(isThisMyName('Szymon'));