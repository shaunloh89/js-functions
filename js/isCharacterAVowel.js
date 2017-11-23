var vowel = ['a', 'e', 'i', 'o', 'u'];

var isCharacterAVowel = function(a){
  
  for (var i = 0; i < vowel.length; i++) {
    
    if (a == vowel[i]){
      
      return true;
      
    } 
    
  }
  
  return false;
  
}