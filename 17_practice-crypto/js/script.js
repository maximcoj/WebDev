let crypto = [  
	{    
		name : "Bitcoin",    
		price: 1388.37  
	},  
	{    
		name : "Ethereum",    
		price: 716  
	},  
	{    
		name : "Litecoin",    
		price: 140  
	}
]

const bitcoin = document.querySelector('.bitcoin');
const ethereum = document.querySelector('.ethereum');
const litecoin = document.querySelector('.litecoin');

// Пустой массив, чтобы добавлять туда значение валюты
let arrValues = [];

for (currency in crypto) {

	let cryptoCurrency = crypto[currency];

	// Вывожу значение валюты в dom
	if (cryptoCurrency.name == "Bitcoin") {
		bitcoin.querySelector('.price').innerHTML = cryptoCurrency.price;
	} else if (cryptoCurrency.name == "Ethereum") {
		ethereum.querySelector('.price').innerHTML = cryptoCurrency.price;
	} else {
		litecoin.querySelector('.price').innerHTML = cryptoCurrency.price;
	}

	// добавляю значение валюты в массив
	arrValues.push(cryptoCurrency.price);
}

// функция, чтобы сравнивать числа в массиве
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

// Получаю максимальное значение из массива, чтобы относительно него строить длинну
let highest = getMaxOfArray(arrValues);

// получаю объект с полосками
let scales = document.querySelectorAll(".scale");

// для каждого числа вывожу столбик соответствующей длинны
for (value in arrValues) {
	scales[value].style.width = (arrValues[value] / highest) * 100 + "%"; ;
}


// if (arrValues[0] == highest && arrValues[1] < highest && arrValues[2] < highest) {
// 	bitcoin.querySelector('.scale').style.width = "100%";
// 	ethereum.querySelector('.scale').style.width = (arrValues[1] / highest) * 100 + "%";
// 	litecoin.querySelector('.scale').style.width = (arrValues[2] / highest) * 100 + "%";
// }