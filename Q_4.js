/*
countOddFromZeroToNum function get argument num , the argument 'num' is a positive number.
the function returns the amount of the odd numbers from 0 to num (inclusive).
*/
const countOddFromZeroToNum = (num) => {
  //Your Code Here :-)
  if (num % 2 === 0) return num / 2;
  return (num + 1) / 2;
};
