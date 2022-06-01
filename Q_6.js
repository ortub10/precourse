/*
divideOrHasSeven function recieve 2 arguments:
'start' and 'end'. The function return the amount of numbers that have one of:
1. have the number 7 in one of the digits.
2. the number divide by 7.
*/
const divideOrHasSeven = (start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0 || i % 10 === 7 || Math.floor(i / 10) === 7) count++;
  }
  if (start === 0) count--;
  return count;
};
