// Strings

const greeting = 'Hi, ';
const myName = 'Giulia Zeni';
const fullGreeting = `${greeting} ${myName}. How are you?`;
console.log(fullGreeting);

// Booleans

let isSkyGreen = false;
let iAmYoung = true;

// Numbers: JS doesn't distinguish between integers and decimals. They are all numbers.

let babyWeight = 10.5;
console.log(babyWeight);

// If statements

if (isSkyGreen) {
  console.log('Luckily, the sky is not green');
} else {
  console.log('OMG, the sky turned green!');
}

if (2 + 2 === 4) {
  console.log('The mathematical principles still hold true.');
} else {
  console.log('Uh, panic?');
}

const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
  console.log('Lots of nachos for myself!');
} else if (friendsAtYourParty <= 4) {
  console.log('Let\'s play a board game');
} else {
  console.log('Let\'s dance!');
}
