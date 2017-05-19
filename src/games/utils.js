export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      return 'error';
  }
};
export const getRandInt = (min = 100, max = 9999) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};
