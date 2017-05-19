import engine from '../engine';
import { cons, getRandInt } from '../utils';

const brainGCD = () => {
  const getLeftArg = getRandInt();
  const getRightArg = getRandInt();
  const currQuestion = `${getLeftArg} ${getRightArg}`;
  const getCorrAnswer = (a, b) => {
    if (b === 0) {
      return a;
    }
    return getCorrAnswer(b, a % b);
  };
  const correctAnswer = getCorrAnswer(getLeftArg, getRightArg);
  const textTask = 'Find the greatest common divisor of given numbers.';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};

export default () => engine(brainGCD);
