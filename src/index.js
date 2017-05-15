import readlineSync from 'readline-sync';

// Wait for user's response.
export default () => readlineSync.question('May I have your name? ');
