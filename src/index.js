import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

export default (game) => {
  console.log(`Welcome to Brain Games!\n${car(game())}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const runGame = (currStep, questAnswPair) => {
    if (currStep === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const userAnswer = readlineSync.question(`Question: ${car(questAnswPair)} `);
    if (cdr(questAnswPair) === userAnswer) {
      console.log(`Your answer: ${userAnswer}\nCorrect!`);
      return runGame(currStep + 1, cdr(game()));
    }
    if (cdr(questAnswPair) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questAnswPair)}'.\nLet's try again, ${userName}!`);
    }
    return false;
  };
  return runGame(0, cdr(game()));
};
