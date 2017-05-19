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

const brainBalance = () => {
  const getRandInt = (min = 100, max = 9999) => {
    const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
    return Math.round(rand);
  };
  const getCorrAnswer = (int) => {
    const arr = String(int).split('').sort().map(item => +item);
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 1) {
      for (let j = 0; j < arrLength; j += 1) {
        if ((arr[i + j] - arr[i]) > 1) {
          arr[i] += 1;
          arr[i + j] -= 1;
        }
      }
    }
    const sortArr = arr.sort();
    return sortArr[arrLength - 1] - sortArr[0] > 1 ? getCorrAnswer(sortArr.join('')) : sortArr.join('');
  };
  const currQuestion = getRandInt();
  const correctAnswer = getCorrAnswer(currQuestion);
  const textTask = 'Balance the given number.\n';
  return cons(textTask, cons(currQuestion, correctAnswer));
};

export default () => engine(brainBalance);
