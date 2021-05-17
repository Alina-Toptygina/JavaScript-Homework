
// не поняла, как сделать через while

var array = [];
var n = 100;

nextPrime:
for (var i = 2; i <= n; i++) { 
  for (var j = 2; j < i; j++) { 
     if (i % j == 0) continue nextPrime; 
  }
 		array[i] = i++;
 		console.log(j);  
  }


  /* function findPrime(n) {
      const primes = [];
      loop1:
      	for (var j = 0; primes.length < n; j++) {
      loop2:
         for(var i = 2; i < j; i++){
         if(j % i === 0){
            continue loop1;
        }
      }

      if (j > 1) primes.push(j);
       	console.log(primes);
    	}
     
    }
     
    findPrime(100); */
