
const form = document.forms[0];
const temp = document.querySelector(".temp");
const speed = document.querySelector(".speed");

form.onsubmit = function (e) {
	e.preventDefault();

	// получаю значение города, api и формирую ссылку на строку
	const city = form.elements.city.value;
	const apiKey = "ac6788ea25f495aef5fd294c21df3fee";
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;

	// делаю запрос
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		// показывает ошибку и статус
		console.log(xhr.status+' '+xhr.statusText);
	} else {
		// парсинг строки в json объект
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);

		temp.innerHTML = Math.round(DATA.main.temp - 273);
		speed.innerHTML = DATA.wind.speed + ' m/s';
	}
}














// api.openweathermap.org/data/2.5/weather?q=Miami&appid=ac6788ea25f495aef5fd294c21df3fee
// const apiString = '[{"city" : "Moscow","temp" : 10,"pressure" : 250},{"city" : "Miami","temp" : 28,"pressure" : 200},{"city" : "Beijing","temp" : 15,"pressure" : 210}]';

// const DATA = JSON.parse(apiString);

// console.log(DATA);

// const apiString = JSON.stringify(DATA);
// console.log(apiString);



