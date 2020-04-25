
let haveEnough = (money, howManyApples, howManyBattons, applePrice, battonPrice) => {
	money = money - (howManyApples * applePrice + howManyBattons * battonPrice);
	if (money >= 0) {
		return "Вам хватает денег на покупки";
	} else {
		return "Вам не хватает денег на покупки";
	}
}



