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

// Loops

let peopleAtYourParty = 0;
while (peopleAtYourParty < 10) {
  console.log('Another friend joined your party');
  peopleAtYourParty += 1; // or peopleAtYourParty++
}
console.log(peopleAtYourParty);

let galsAtYourParty = 0;
for (let i = 0; i < 10; i++) { // Common way of writing for loops in JS, I can only write variables in there
  galsAtYourParty++;
}
console.log(galsAtYourParty);

/* We could do this starting at 10 and going down to 0, so:
let galsAtYourParty = 10;
for (let i = 10; i > 0; i--) {
    galsAtYourParty--;
  }
*/

// Builtins

number = 5.1;
const roundedNumber = Math.ceil(number);
console.log(roundedNumber); // 6

number1 = 5.3;
const roundedNumber1 = Math.round(number1);
console.log(roundedNumber1); // 5

/* */

const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo = "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringLookFor = 'cute';

console.log(testStringOne.includes(stringLookFor)); // false
console.log(testStringTwo.includes(stringLookFor)); // true

// How many milliseconds have elapsed since Jan 1 1970?

console.log(Date.now());

// Objects

const person = {
  name: 'Giulia Zeni', // name, city, state... are PROPERTIES of this object and they are the key, after the colon is the value
  city: 'Berlin',
  state: 'Germany',
  favouriteFood: 'Hummus',
  wantsHummusRightNow: true,
  portionsOfHummusWanted: 10,
};
console.log(person); // Object { name: "Giulia Zeni", city: "Berlin", state: "Germany", favouriteFood: "Hummus", wantsHummusRightNow: true, portionsOfHummusWanted: 10 }
console.log(person.name); // Giulia Zeni

// Objects and if statements

const person1 = {
  name: 'Angie',
  ageRange: '25-35',
};
const person2 = {
  name: 'Francesca',
  ageRange: '65-75',
};

const suggestMusic = (person) => {
  if (person.ageRange === '25-35') {
    console.log('Try Daft Punk');
  } else if (person.ageRange === '65-75') {
  console.log('Try Johnny Cash');
  } else {
    console.log('Try David Bowie, everyone likes him!');
  };
}

suggestMusic(person1);
suggestMusic(person2);

// A function inside an Object

const dog = {
  name: 'Luna',
  speak() {
    console.log('woof woof');
  },
};

dog.speak();

// Nested Objects

const me = {
  name: {
    first: 'Giulia',
    last: 'Zeni',
  },
  location: {
    streetNumber: 47,
    city: 'Berlin',
    country: 'Germany',
    zipCode: 10409,
  },
};

console.log(me.name.last); // Zeni
console.log(me.location.city); // Berlin

// 'This' keyword

const you = {
  name: {
    first: 'Vince',
    last: 'Zeni'
  },
  location: {
    streetNumber: 47,
    streetName: Ostseestraße,
    city: 'Berlin',
    country: 'Germany',
    zipCode: 10409,
  },
  getAddress() {
    return `
    ${this.name.first} ${this.name.last}
    ${this.location.streetName} ${this.location.streetNumber}
    ${this.zipCode}, ${this.location.city}
    ${this.location.country}
    `;
  },
};

console.log(you.getAddress()); /* throws an error: Uncaught SyntaxError: redeclaration of const you
<anonymous> debugger eval code:1 */

// Arrays

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wedneday',];
console.log(daysOfTheWeek[2]); // Wednesday
console.log(daysOfTheWeek.length); // 3
console.log(daysOfTheWeek.join(' § ')); // Monday § Tuesday § Wedneday

/* An array of objects */

const courses = [
  { teacher: 'Will Sentance', course: 'JavaScript' },
  { teacher: 'Sarah Drasner', course: 'Intro to Vue' },
  { teacher: 'Scott Moss', course: 'Node.js' },
];

courses.push({ teacher: 'Jen Kramer', course: 'CSS'});
console.log(courses); /* 0: Object { teacher: "Will Sentance", course: "JavaScript" }
​
1: Object { teacher: "Sarah Drasner", course: "Intro to Vue" }
​
2: Object { teacher: "Jen Kramer", course: "CSS" } */

courses[0] = { teacher: 'Giulia Zeni', course: 'Italian' }; // To replace the course at index 0 with a new object
courses[0].course = 'React'; // If I want to change just the course but not the teacher
const jen = courses.pop(); // deletes the last course in the array, which is Jen's course (we had added it on line 194)
console.log(jen); // { teacher: 'Jen Kramer', course: 'CSS'}
console.log(courses.shift()); // removes the first course, Will's
courses.unshift(jen); // Jen's course is now the first on the list

// Looping through an array

const cities = [
  'Venice',
  'Milan',
  'Berlin',
  'Oslo',
  'Copenhagen',
];

// Loop method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]); // What is the i there? It's actually the index. So console.log(cities[i])'s output would be 0 1 2 3 4
};

for (let i = 0; i < cities.length; i++) {
  console.log(i, cities[i]); // The 'i' shows the index before the city name
};

// Loop method 2
const logCity = (city) => {
  console.log(city);
};

cities.forEach(logCity); // this runs the function logCity on each item of the array

let timesCalled = 0;
logCity = (city) => { // is this line correct? or do I need const?
  console.log(timesCalled, city);
  timesCalled++;
};
cities.forEach(logCity);
