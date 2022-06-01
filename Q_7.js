/*
primeNumberFromOneToN function receive 1 argument 'n'
the function return the amount of Prime numbers from 1 to n
*/
const primeNumberFromOneToN = (n) => {
  let count = 0,
    tempCount = 0;
  let flag = true;
  for (let i = 2; i <= n; i++) {
    flag = true;
    tempCount = 0;
    for (let j = 2; j <= Math.floor(i / 2) && flag; j++) {
      if (i % j === 0) tempCount++;
      if (tempCount > 0) flag = false;
    }
    if (flag) count++;
  }
  return count;
};
