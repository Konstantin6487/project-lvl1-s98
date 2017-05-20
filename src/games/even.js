import engine from '../index';
import { cons, getRandInt } from '../utils';

const brainEven = () => {
  const getCorrAnswer = (val) => {
    if (val === 0 || val % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const currQuestion = getRandInt();
  const correctAnswer = getCorrAnswer(currQuestion);
  const textTask = 'Answer "yes" if number even otherwise answer "no".';
  return cons(textTask, cons(currQuestion, correctAnswer));
};

export default () => engine(brainEven);
