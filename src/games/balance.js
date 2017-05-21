import engine from '../';
import { cons, getRandInt } from '../utils';

const brainBalance = () => {
  const getCorrAnswer = (int) => {
    const intToArr = Array.from(int.toString()).map(Number);
    if (intToArr.every(item => item === intToArr[0])) {
      return intToArr.join('');
    }
    const fixLengthArr = intToArr.slice().fill(0);
    let sumOfDigits = intToArr.reduce((acc, item) => acc + item);
    const fn = (arr = fixLengthArr) => {
      const newArr = arr.reduce((acc, _, i) => {
        if (sumOfDigits === 0) {
          return acc;
        }
        sumOfDigits -= 1;
        acc[i] += 1;
        return acc;
      }, arr);
      return sumOfDigits === 0 ? newArr.reverse().join('') : fn(newArr);
    };
    return fn();
  };
  const currQuestion = getRandInt(100, 500);
  const correctAnswer = getCorrAnswer(currQuestion);
  const textTask = 'Balance the given number.';
  return cons(textTask, cons(currQuestion, correctAnswer));
};

export default () => engine(brainBalance);
