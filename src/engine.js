import readlineSync from 'readline-sync';

const car = pair => pair('car');
const cdr = pair => pair('cdr');

export default (game) => {
  console.log(`Welcome to Brain Games!\n${typeof game === 'function' ? car(game()) : ''}`);
  const userName = readlineSync.question('May I have your name? ');
  if (!game) {
    return console.log(`Hello, ${userName}!`);
  }
  console.log(`Hello, ${userName}!\n`);
  const runGame = (currStep, questAnswPair) => {
    if (currStep === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const userAnswer = readlineSync.question(`Question: ${car(questAnswPair)} `);
    if (cdr(questAnswPair) === userAnswer) {
      console.log(`Your answer: ${userAnswer}\nCorrect!\n`);
      return runGame(currStep + 1, cdr(game()));
    }
    if (cdr(questAnswPair) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questAnswPair)}'.\nLet's try again, ${userName}!`);
    }
    return false;
  };
  return runGame(0, cdr(game()));
};
