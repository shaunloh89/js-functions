// letterCount(word)
//
// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple" would print the following:
//
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Loop through each letter, and increment the value to a key in an object. The key should be that object.
//
// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.


// convert string lowercase
// string become array
  // loop through the array
  // check each element is a letters
  // if letter exist, add to object with a plus equal
  // else make letter object = 1
// use a for in loop to console log

var reg = /[a-z]/;
var obj = {}

function letterCount(word) {
  word = word.toLowerCase().split('');
  for (var i = 0; i < word.length; i++) {
    if (reg.test(word[i])) {
      if (obj[word[i]]) {
      obj[word[i]] += 1;
    } else {
      obj[word[i]] = 1;
    }
    }
  }

  for (var key in obj) {
    console.log(key + ' - ' + obj[key]);
  }

}


letterCount('Bobby Love to EAT ALOT');
