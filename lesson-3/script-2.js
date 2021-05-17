var card = [
	{
		title: "Товар №1 ",
		price: 100,
		count: 1
	},
	{
		title: "Товар №2 ",
		price: 200,
		count: 3
	},
	{
		title: "Товар №1 ",
		price: 300,
		count: 5
	}
		];


var sum = 0;

function countBasketPrice(card) {
	for (var item of card) {
      sum += item.price * item.count;
   }
   	return sum;
	}

 alert("Сумма корзины равна: " + countBasketPrice(card) + " руб.");