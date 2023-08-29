// First homework task
function getGreeting(name, surname) {
    return (`Hi ${name} ${surname}! Good to see you`)
}
const greeting = getGreeting('John', 'Smith');
console.log(greeting);
// Second homework task
function isThisMyName(name) {
    return !!(name.includes('Szymon'))
}
console.log(isThisMyName('Maciej'));
console.log(isThisMyName('Szymon'));

// Third homework task
function isThisBoolean(value) {
    return (value === false || value === true);
}

// Fourth homework task
function getCircleArea(radius) {
    return Math.round(2 * Math.PI * radius);
}
const radius = 5;
const area = getCircleArea(radius);
console.log(area);
// Fifth homework task
function getCirclesAreaSum(radius1, radius2) {
    return (getCircleArea(radius1) + getCircleArea(radius2));
}
console.log(getCirclesAreaSum(5, 8));