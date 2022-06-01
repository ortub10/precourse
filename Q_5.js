/*
In Mathematics, the factorial of n is denoted by n! and calculated by 
the product of integer numbers from 1 to n. For instance:
5! = 5 x 4 x 3 x 2 x 1 5! = 120
function numFactorial that get a whole number (n) and return N factorial
*/
const numFactorial = (num) => {
  //Your Code Here :-)
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
};
