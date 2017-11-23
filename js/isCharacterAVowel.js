isCharacterAVowel = function(num) {
  var charArray = num.split("");
  var vowel = ["a", "e", "i", "o", "u"];
  for (var char = 0; char < charArray.length; char++) {
   for (var vowelChar = 0; vowelChar < vowel.length; vowelChar++) {
     if (charArray[char] === vowel[vowelChar]) {
       return true;
     }
   }
  }
  return false;
};
console.log(isCharacterAVowel("bcdghi"));
