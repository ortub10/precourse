/*
getWordByNumber is a function that get a argument 'num', num is a number between 0-9.
The function should return the number in words, i.e. if 'num=3' will return "three".
if the argument is out of range return 'invalid'.
*/

const getWordByNumber = (num) => {
  //Your Code Here :-)
  let obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  if (num < 0 || num > 9 || typeof num !== "number") return "invalid";
  return obj[`${num}`];
};
