import readlineSync from 'readline-sync';

const intCount = 3;
const minInt = 0;
const maxInt = 100;

const checkParity = (val) => {
  if (val === 0 || val % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const fillRandArr = (min = minInt, max = maxInt, count = intCount, acc = []) => {
  const calcRandInt = Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
  return count === 0 ? acc : fillRandArr(min, max, count - 1, [calcRandInt, ...acc]);
};

const intArr = fillRandArr();
const intArrLength = intArr.length;

export default () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const runGame = (count, arr) => {
    if (count === intArrLength) {
      return `Congratulations, ${userName}!`;
    }
    const answer = readlineSync.question(`Question: ${arr[count]} `);
    if (checkParity(arr[count]) === answer) {
      console.log(`Your answer: ${answer}\nCorrect!\n`);
      return runGame(count + 1, arr);
    }
    if (checkParity(arr[count]) !== answer) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${checkParity(arr[count])}'.\nLet's try again, ${userName}!`;
    }
    return false;
  };
  return runGame(0, intArr);
};
