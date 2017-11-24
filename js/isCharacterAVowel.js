// isCharacterAVowel(num)
//
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

var regex = /[aeiou]/i;

function isCharacterAVowel(num) {
  console.log(regex.test(num));
}

isCharacterAVowel('A');
