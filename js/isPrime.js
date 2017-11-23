var isPrime = function(num){
  
  var factorCount = 0;
  
  for (var k = 0; k <= num; k++){
    
    if (num != 0){
      if (num%k === 0){
        factorCount +=1;
      }
    }  
    }
    
    if (factorCount == 2){
      
    return true;
    
  }
  
  return false;
  
}