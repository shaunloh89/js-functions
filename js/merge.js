var merge = function(arr1, arr2){
  
  var carr = arr1.concat(arr2);
  carr.sort(function(a, b) {
  return a - b;
  });
  return carr;
  
  
}