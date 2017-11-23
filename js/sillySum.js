var sillySum = function(a){
  
  var result = 0;
  
  for (var i = 0; i < a.length; i++){
    
    result += a[i] * i;
    console.log(result);
    
  }
  
  return result;
  
}