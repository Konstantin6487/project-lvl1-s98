import readlineSync from 'readline-sync';

const stepsCount = 3;
const minInt = 0;
const maxInt = 100;

const getCorrAnswer = (val) => {
  if (val === 0 || val % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const calcRandInt = (min = minInt, max = maxInt) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};

const fillRandArr = (min = minInt, max = maxInt, count = stepsCount, acc = []) => {
  const randInt = calcRandInt(min, max);
  return count === 0 ? acc : fillRandArr(min, max, count - 1, [randInt, ...acc]);
};

const intArr = fillRandArr();
const intArrLength = intArr.length;

export default () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const runGame = (currStep, arr) => {
    if (currStep === intArrLength) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const answer = readlineSync.question(`Question: ${arr[currStep]} `);
    if (getCorrAnswer(arr[currStep]) === answer) {
      console.log(`Your answer: ${answer}\nCorrect!\n`);
      return runGame(currStep + 1, arr);
    }
    if (getCorrAnswer(arr[currStep]) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrAnswer(arr[currStep])}'.\nLet's try again, ${userName}!`);
    }
    return false;
  };
  return runGame(0, intArr);
};
