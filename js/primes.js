var primes = function(times){
  
  var primeArray = [];

  for (var i = 0; i < times; i++){
    
    if (isPrime(i)){

      primeArray.push(i);
      
    }
    
  }
  
  if (primeArray == 0){
  
    console.log("There are no prime numbers available.")  
    
  } else {
    
    return primeArray;
  }
}