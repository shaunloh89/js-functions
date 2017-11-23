var findLongestWord = function(a){
  
  var length = 0;
  
  for (var i = 0; i < a.length; i++){
    
    if(a[i].length > length){
      
      length = a[i].length;
      
    }
    
  }
  
    return length;
}