var letterCount = function(word){
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');
  word = word.replace(/[,.;?!]/g, '');
  var charObj = {};
  for (var char = 0; char < word.length; char++) {
    if (charObj[word[char]]) {
      charObj[word[char]] += 1;
    } else {
      charObj[word[char]] = 1;
    }
  }
  Object.keys(charObj).forEach(function(character) {
    console.log(character + " - " + charObj[character]);
  }
    )
};
console.log(letterCount("Hello user!!"));
