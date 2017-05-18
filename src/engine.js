import readlineSync from 'readline-sync';

export default (task, dataArr, dataArrLength, getCorrect) => {
  console.log(`Welcome to Brain Games!\n${task}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  if (task === undefined) {
    return console.log(`Hello, ${userName}!\n`);
  }
  console.log(`Hello, ${userName}!\n`);

  const runGame = (currStep, arr) => {
    if (currStep === dataArrLength) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const answer = readlineSync.question(`Question: ${typeof arr[currStep] === 'string' ? arr[currStep] : arr[currStep].join(' ')}`);
    if (getCorrect(arr[currStep]) === answer) {
      console.log(`Your answer: ${answer}\nCorrect!\n`);
      return runGame(currStep + 1, arr);
    }
    if (getCorrect(arr[currStep]) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrect(arr[currStep])}'.\nLet's try again, ${userName}!`);
    }
    return false;
  };
  return runGame(0, dataArr);
};
