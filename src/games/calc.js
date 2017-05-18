import engine from '../engine';
import { stepsCount } from '../initial';
import calcRandInt from '../utils';

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

const fillMathExprArr = (count = stepsCount, acc = []) => {
  if (count === 0) {
    return acc;
  }
  const leftInt = calcRandInt();
  const rightInt = calcRandInt();
  const oprIndex = calcRandInt(0, operations.length - 1);
  return fillMathExprArr(count - 1, [[leftInt, operations[oprIndex], rightInt], ...acc]);
};

const userMessage = 'What is the result of the expression?\n';
const mathExprArr = fillMathExprArr();
const mathExprArrLen = mathExprArr.length;

export default() => engine(userMessage, mathExprArr, mathExprArrLen, getCorrAmount);
