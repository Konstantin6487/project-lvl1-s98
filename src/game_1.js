import readlineSync from 'readline-sync';

const numOfIntegers = 3;
const minRandVal = 0;
const maxRandVal = 100;

const isEven = (value) => {
  switch (true) {
    case value === 0 || value % 2 === 0:
      return 'yes';
    default:
      return 'no';
  }
};

const randomInt = (min = minRandVal, max = maxRandVal, count = numOfIntegers, acc = []) => {
  const num = Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
  return count === 0 ? acc : randomInt(min, max, count - 1, [num, ...acc]);
};

const myArr = randomInt();
const myArrlengh = myArr.length;

export default () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const iter = (i, arr) => {
    if (i === myArrlengh) {
      return `Congratulations, ${userName}!`;
    }
    const answer = readlineSync.question(`Question: ${arr[i]} `);
    if (isEven(arr[i]) === answer) {
      console.log(`Your answer: ${answer}\nCorrect!`);
      return iter(i + 1, arr);
    }
    if (isEven(arr[i]) !== answer) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${isEven(arr[i])}'.\nLet's try again, ${userName}!`;
    }
    return false;
  };
  return iter(0, myArr);
};
