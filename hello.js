const timesRepeat = 10;
const character = 'X';

// Write some loop that repeats 'X' that many times

let answer = ''; // We need to start with an empty string and assign it to a variable, don't forget this step
for (let i = 0; i < timesRepeat; i++) {
  answer = answer + character;
}
console.log(answer); // Will output XXXXXXXXXX

// Functions

const addTwo = (number) => {
  return number +2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

const greet = (firstName, lastName, honorific, greeting) => {
  return `${greeting} ${honorific} ${lastName}! Thanks for joining us. Enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet('Giulia', 'Zeni', 'Ma\'am', 'Servus'));
console.log(greet('Vince', 'Inez', 'Lord', 'Nihao'));

/* Another example */

const myHomeCity = 'Pordenone';
const myHomeRegion = 'Friuli';
const myHomeCountry = 'Italy';

const myOrigin = (city, region, country) => {
  console.log(`I am from ${city}, a city in ${region}, ${country}.`);
}

myOrigin(myHomeCity, myHomeRegion, myHomeCountry);
myOrigin('Bergamo', 'Lombaria', myHomeCountry);

// On line 22 we returned something, on line 35 we didn't. We don't necessarily need to return. We can just call the functions with different parameters (in parenthesis).

