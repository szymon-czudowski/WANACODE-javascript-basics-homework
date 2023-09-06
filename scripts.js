// First homework task
function getGreeting(name, surname) {
    return `Hi "${name} ${surname}"! What's up?`;
}
const greeting = getGreeting('John', 'Smith');
console.log(greeting);
// Second homework task
function isThisMyName(name) {
    return name.includes('Szymon');
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
    return getCircleArea(radius1) + getCircleArea(radius2);
}
console.log(getCirclesAreaSum(5, 8));

// Sixth homework task
function rockPaperScissors(player1Movement, player2Movement) {
    if (player1Movement === player2Movement ) {
        return 0;
    } else if (
        player1Movement === 'scissors' && player2Movement === 'paper' ||
        player1Movement === 'paper' && player2Movement === 'rock' ||
        player1Movement === 'rock' && player2Movement === 'scissors'
    ) {
        return 1;
    } else {
        return 2;
    }
}
function highAndLow(numbers){
    let arrayOfNumbers = numbers.split(' ').map(numStr => parseInt(numStr, 10))
    let minNumber = Math.min(...arrayOfNumbers);
    let maxNumber = Math.max(...arrayOfNumbers);
    let minNumberOutput = minNumber.toString(10);
    let maxNumberOutput = maxNumber.toString(10);
    return `${minNumberOutput} ${maxNumberOutput}`;
}

console.log(highAndLow(numbers))
