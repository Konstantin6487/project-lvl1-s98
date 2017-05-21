import engine from '../';
import { cons, getRandInt } from '../utils';

const brainCalc = () => {
  const statements = ['+', '-', '*'];
  const leftArg = getRandInt();
  const rightArg = getRandInt();
  const mathStat = statements[getRandInt(0, statements.length - 1)];
  const currQuestion = `${leftArg} ${mathStat} ${rightArg}`;
  const getCorrAnswer = (a, b, c) => {
    switch (b) {
      case '+':
        return a + c;
      case '-':
        return a - c;
      case '*':
        return a * c;
      default:
        return 'error';
    }
  };
  const correctAnswer = getCorrAnswer(leftArg, mathStat, rightArg);
  const textTask = 'What is the result of the expression?';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};

export default () => engine(brainCalc);
