const timesRepeat = 10;
const character = 'X';

// Some loop that repeats 'X' that many times

let answer = '';
for (let i = 0; i < timesRepeat; i++) {
  answer = answer + character;
}
console.log(answer);

function addTwo(number) {
  return number +2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
