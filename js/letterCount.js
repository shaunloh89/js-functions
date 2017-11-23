var letterCount = function(a){
  
  var string = a.replace(/\s/g, "");
  var stringArray = string.split("");
  var countArray = [];
  
  for (var i = 0; i < stringArray.length; i++){
    
    var letter = stringArray[i].toLowerCase();
    countArray[letter] = (countArray[letter] || 0) + 1;

  }
  
  console.log(countArray);

}