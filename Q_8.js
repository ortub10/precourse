/*
capitalize function receive 1 argument 'word'
the function return word that capitalize all vowel letters (a, e, i, o, u,y)
*/

//option1
const capitalize = (word) => {
  let vowelLetters = "aeiouy";
  let arr = word.split("");
  let retWord = arr.map(function (letter) {
    if (vowelLetters.includes(letter)) return letter.toUpperCase();
    return letter;
  });

  return retWord.join("");
};

//option2
const capitalize2 = (word) => {
  let vowelLetters = "aeiouy";
  let retWord = "";
  for (let i = 0; i < word.length; i++) {
    if (vowelLetters.includes(word[i])) retWord += word[i].toUpperCase();
    else retWord += word[i];
  }
  return retWord;
};
