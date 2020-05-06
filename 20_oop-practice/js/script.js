
window.addEventListener('load', function() {

	class Person {
		constructor (name) {
			this.name = name;
			this.happiness = 0;
		}
		hasCat() {
			return this.happiness = this.happiness + 1;
		}
		hasRest() {
			return this.happiness = this.happiness + 1;
		}
		hasMoney() {
			return this.happiness = this.happiness + 1;
		}
		isSunny() {
		
			// получаю значение города, api и формирую ссылку на строку
			const city = 'moscow';
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

				// получаю температуру
				let temp = Math.round(DATA.main.temp - 273);

				if (temp >= 15) {
					this.happiness = this.happiness + 1;
					return this.happiness;
				} else {
					return this.happiness;
				}
			}
		}
	}

	// получаю форму
	const form = document.forms[0];

	form.onsubmit = function (e) {
		e.preventDefault();

		// получаю данные из переменных
		const name = form.elements.name.value;
		const cat = form.elements.cat.value;
		const rest = form.elements.rest.value;
		const money = form.elements.money.value;

		let newPerson = new Person(name);

		if (cat == "yes" && rest == "yes" && money == "yes") {
			newPerson.hasCat();
			newPerson.hasRest();
			newPerson.hasMoney();
			console.log(newPerson);
		}

		newPerson.isSunny();

		const personName = document.querySelector('.personName');
		const personIcons = document.querySelector('.icon');
		
		// вставляю значение имени в dom
		personName.innerHTML = newPerson.name;
		
		// вставляю соответствующий эмоджи в dom
		if (newPerson.happiness > 3) {
			personIcons.innerHTML = "😁";
		} else if (newPerson.happiness >= 2) {
			personIcons.innerHTML = "😐";
		} else {
			personIcons.innerHTML = "☹️";
		} 
	} 
		
});


