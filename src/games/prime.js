import engine from '../index';
import { cons, getRandInt } from '../utils';

const brainPrime = () => {
  const currQuestion = getRandInt(2);
  const isPrime = (num, i = 2) => {
    if (i >= num) {
      return true;
    }
    return num % i === 0 ? false : isPrime(num, i + 1);
  };
  const correctAnswer = isPrime(currQuestion) ? 'yes' : 'no';
  const textTask = 'Answer "yes" if the number prime otherwise please answer "no".';
  return cons(textTask, cons(currQuestion, correctAnswer));
};

export default () => engine(brainPrime);
