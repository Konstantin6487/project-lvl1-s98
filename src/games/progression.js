import engine from '../index';
import { cons, getRandInt } from '../utils';

const brainProgression = () => {
  const getProgress = (int, step, intIndex = 0, acc = []) => {
    if (intIndex > 9) {
      return acc;
    }
    return getProgress(int + step, step, intIndex + 1, [...acc, int]);
  };
  const currProgress = getProgress(getRandInt(), getRandInt());
  const randElemPos = getRandInt(0, 9);
  const correctAnswer = currProgress[randElemPos];
  currProgress[randElemPos] = '..';
  const currQuestion = currProgress.join(' ');
  const textTask = 'What number is missing in this progression?';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};

export default () => engine(brainProgression);
