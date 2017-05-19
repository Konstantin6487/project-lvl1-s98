import engine from '../engine';

const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      return 'error';
  }
};

const brainGCD = () => {
  const getRandInt = (min = 0, max = 100) => {
    const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
    return Math.round(rand);
  };
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
  const textTask = 'Find the greatest common divisor of given numbers.\n';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};

export default () => engine(brainGCD);
