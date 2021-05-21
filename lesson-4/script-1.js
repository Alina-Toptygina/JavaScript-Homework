
              
	var max = 999;
   var object = {
       number: Math.round(Math.random() * max), 
       units: 0,
       tens: 0,
       hundreds: 0,
   };
    

numberObject(object.number);

function numberObject(number) {
 if (object.number <= 9) {
      object.units = object.number;
   } else if (object.number <= 999) {
      	object.units = Math.floor(object.number % 10);
      	object.tens = Math.floor(object.number / 10 % 10);
      	object.hundreds = Math.floor(object.number / 100 % 10);
	}
		return object;
	}

   console.log("Число: " + object.number);
   console.log("Единицы: " + object.units);
   console.log("Десятки: " + object.tens);
   console.log("Сотни: " + object.hundreds);