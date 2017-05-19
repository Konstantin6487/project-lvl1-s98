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

const brainEven = () => {
  const getRandInt = (min = 0, max = 100) => {
    const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
    return Math.round(rand);
  };
  const getCorrAnswer = (val) => {
    if (val === 0 || val % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const currQuestion = getRandInt();
  const correctAnswer = getCorrAnswer(currQuestion);
  const textTask = 'Answer "yes" if number even otherwise answer "no".\n';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};

export default () => engine(brainEven);
