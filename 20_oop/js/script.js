

// class User {
// 	constructor (name, email, password) {
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 	}
// 	sayHi () {
// 		return "Hello " + this.name;
// 	}
// }

// class Female extends User {
// 	sayHi () {
// 		return "Привет " + this.name + " ты красавица"
// 	}
// }

// let Fedya = new User('Федя', 'feyad@davai.ru', 'qwerty');
// console.log(Fedya);

// let Valeri = new Female('Лера', 'lera@hot.ru', 'qwerty');

// console.log(Valeri.sayHi());

class Customer {
	constructor (name) {
		this.name = name;
	}
	buy () {
		console.log('Куплено');
	}
}

class childCustomer extends Customer {
	getPresent () {
		console.log('Шарик в подарок');
		// return 'Шарик в подарок';
	}
}

let Dima = new childCustomer('Дима');

console.log(Dima.getPresent());