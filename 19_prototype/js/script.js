
// let animal = {
// 	canEat : true,
// 	hasParents : true,
// }

// let cow = {
// 	givesMilk : true,
// 	__proto__ : animal
// }

// console.log(cow.givesMilk); // true
// console.log(cow.canEat); // true


// for (key in cow) {
// 	console.log(key);
// }


// let Users = {
// 	hasAccesToProfile: true,
// 	approved: true,
// 	sayHi: function() {return "Привет"}
// }

// // это класс, который генерирует экземпляр
// function User(name, email, password) {
// 	// конструктор
// 	this.name = name;
// 	this.email = email;
// 	this.password = password;
// 	this.__proto__ = Users;
// }

// // это эземпляр
// let Fedya = new User('Федя', 'feyad@davai.ru', 'qwerty');

// console.log(Fedya);
// console.log(Fedya.sayHi());

// // это класс
// function UserF(name, email, password) {
// 	// конструктор
// 	this.name = name;
// 	this.email = email;
// 	this.password = password;
// 	this.__proto__ = Users;
// 	// переписываем функцию
// 	this.sayHi = function() {return "Привет " + this.name + " ты красавица"}
// }

// // эземпляр
// let Valeri = new UserF('Лера', 'lera@hot.ru', 'qwerty');

// console.log(Valeri.sayHi());


class User {
	constructor (name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi () {
		return "Hello " + this.name;
	}
}

class Female extends User {
	sayHi () {
		return "Привет " + this.name + " ты красавица"
	}
}

let Fedya = new User('Федя', 'feyad@davai.ru', 'qwerty');
console.log(Fedya);

let Valeri = new Female('Лера', 'lera@hot.ru', 'qwerty');

console.log(Valeri.sayHi());