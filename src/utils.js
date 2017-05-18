import { minInt, maxInt } from './initial';

export default (min = minInt, max = maxInt) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};
