import engine from '../';
import { cons, getRandInt } from '../utils';

const brainEven = () => {
  const isEven = val => val === 0 || val % 2 === 0;
  const currQuestion = getRandInt();
  const correctAnswer = isEven(currQuestion) ? 'yes' : 'no';
  const textTask = 'Answer "yes" if number even otherwise answer "no".';
  return cons(textTask, cons(currQuestion, correctAnswer));
};

export default () => engine(brainEven);
