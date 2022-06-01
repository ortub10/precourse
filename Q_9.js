/*
longestWord function receive 1 argument 'sentence',
the function return the longest word in the sentence,
only letters will be counted (numbers and special signs will be ignored)
*/
const longestWord = (sentence) => {
  let arr = sentence.split(" ");
  let longestWotd;
  let maxLength = 0;
  let tempMax;
  for (let i = 0; i < arr.length; i++) {
    tempMax = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (/[a-zA-Z]/.test(arr[i][j])) tempMax++;
      else arr[i] = arr[i].split(arr[i][j]).join("");
    }
    if (tempMax > maxLength) {
      maxLength = tempMax;
      longestWotd = arr[i];
    }
  }
  return longestWotd;
};
