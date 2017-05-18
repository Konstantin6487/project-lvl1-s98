import engine from '../engine';
import { stepsCount } from '../initial';
import calcRandInt from '../utils';

const getCorrAnswer = (val) => {
  if (val === 0 || val % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const fillRandArr = (count = stepsCount, acc = []) => {
  const randInt = calcRandInt();
  return count === 0 ? acc : fillRandArr(count - 1, [randInt, ...acc]);
};

const userMessage = 'Answer "yes" if number even otherwise answer "no".\n';
const intArr = fillRandArr();
const intArrlength = intArr.length;

export default () => engine(userMessage, intArr, intArrlength, getCorrAnswer);
