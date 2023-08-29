// First homework task
function getGreeting(name, surname) {
    console.log(`Hi ${name} ${surname}! Good to see you`)
}
const greeting = getGreeting('John', 'Smith');
console.log(greeting);
// Second homework task
function isThisMyName(name) {
    return !!(name.includes('Szymon'))
}
console.log(isThisMyName('Maciej'));
console.log(isThisMyName('Szymon'));
