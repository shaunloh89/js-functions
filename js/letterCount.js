function letterCount(word) {
	tally = {};
	for (var i = 0; i < word.length; i++) {
		tally[word.split("")[i]] = 0;
	}
	for (var i = 0; i < word.length; i++) {
		tally[word.split("")[i]] += 1;
	}
	for (var i = 0; i < Object.keys(tally).length; i++) {
		var letter = String(Object.keys(tally)[i]);
		var count = String(Object.values(tally)[i]);
		console.log(letter + ": " + count);
	}
	// return tally;
}

console.log(letterCount("supercalifragilisticexpialidocious"));

function altLetterCount(word) {
	tally = {};
	for (var i = 0; i < word.length; i++) {
		/*
		1. If key exists in object `tally`, increase the count by one. 
		2. Otherwise, create a new key and set count to 1
		*/
		if (tally[word.charAt(i)]) {
			tally[word.charAt(i)] += 1;
		} else {
			tally[word.charAt(i)] = 1;
		}
	}
	return tally;
}

console.log(altLetterCount("supercalifragilisticexpialidocious"));

var chingTongletterCount = function(word){
  word = word.toLowerCase();
  var charObj = {};
  for (var char = 0; char < word.length; char++) {
    if (charObj.hasOwnProperty(word[char]) === true) {
      charObj[word[char]] += 1;
    } else {
      charObj[word[char]] = 1;
    }
  }
  Object.keys(charObj).forEach(function(character) {
    console.log(character + ": " + charObj[character]);
  }
    )
};

console.log(chingTongletterCount("Hello"));
