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

const brainProgression = () => {
  const getRandInt = (min = 0, max = 100) => {
    const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
    return Math.round(rand);
  };
  const getProgress = (int, step, intIndex = 0, acc = []) => {
    if (intIndex > 9) {
      return acc;
    }
    return getProgress(int + step, step, intIndex + 1, [...acc, int]);
  };
  const currProgress = getProgress(getRandInt(), getRandInt());
  const randElemPos = getRandInt(0, 9);
  const correctAnswer = currProgress[randElemPos];
  const currQuestion = currProgress.map((item, i) => {
    if (i === randElemPos) {
      return '..';
    }
    return item;
  }).join(' ');
  const textTask = 'What number is missing in this progression?\n';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};

export default () => engine(brainProgression);
