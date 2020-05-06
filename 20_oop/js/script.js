
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