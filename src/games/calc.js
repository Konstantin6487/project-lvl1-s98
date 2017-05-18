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

export default () => {
  const statements = ['+', '-', '*'];
  const getRandInt = (min = 0, max = 100) => {
    const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
    return Math.round(rand);
  };
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
  const textTask = 'What is the result of the expression?\n';
  return cons(textTask, cons(currQuestion, String(correctAnswer)));
};
