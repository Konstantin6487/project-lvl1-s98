import readlineSync from 'readline-sync';

const stepsCount = 3;
const minInt = 0;
const maxInt = 100;
const operations = ['+', '-', '*'];

const calcPairSum = (x, y) => (x + y).toString();
const calcPairProd = (x, y) => (x * y).toString();
const calcPairDiff = (x, y) => (x - y).toString();

const getCorrAmount = (arr) => {
  switch (arr[1]) {
    case '+':
      return calcPairSum(arr[0], arr[2]);
    case '-':
      return calcPairDiff(arr[0], arr[2]);
    case '*':
      return calcPairProd(arr[0], arr[2]);
    default:
      return console.log('invalid operation');
  }
};

const calcRandInt = (min = minInt, max = maxInt) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};

const fillMathExprArr = (count = stepsCount, acc = []) => {
  if (count === 0) {
    return acc;
  }
  const leftInt = calcRandInt();
  const rightInt = calcRandInt();
  const oprIndex = calcRandInt(0, operations.length - 1);
  return fillMathExprArr(count - 1, [[leftInt, operations[oprIndex], rightInt], ...acc]);
};

const mathExprArr = fillMathExprArr();
const mathExprArrLen = mathExprArr.length;

export default () => {
  console.log('Welcome to Brain Games!\nWhat is the result of the expression?');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const runGame = (currStep, arr) => {
    if (currStep === mathExprArrLen) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const answer = readlineSync.question(`Question: ${arr[currStep].join(' ')} `);
    if (getCorrAmount(arr[currStep]) === answer) {
      console.log(`Your answer: ${answer}\nCorrect!\n`);
      return runGame(currStep + 1, arr);
    }
    if (getCorrAmount(arr[currStep]) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrAmount(arr[currStep])}'.\nLet's try again, ${userName}!`);
    }
    return false;
  };
  return runGame(0, mathExprArr);
};
