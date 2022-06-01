/*
sumArray function receive 1 argument 'arr' 
the function return sum of arr
*/
const sumArray = (arr) => {
  let sum = arr.reduce(function (prev, current) {
    return prev + current;
  }, 0);

  return sum;
};
