import engine from './engine';
import brainCalc from './games/calc';
import brainEven from './games/even';
import brainGCD from './games/gcd';

export const launchBrainGames = () => engine();
export const launchBrainCalc = () => engine(brainCalc);
export const launchBrainEven = () => engine(brainEven);
export const launchBrainGCD = () => engine(brainGCD);
