
let number = prompt("Введите число");
number = parseInt(number);
// number = Number(number);

if (number == 0){
	console.log("Вы ввели ноль, перезагрузите страницу, давайте другое число");
} else if (number < 0) {
	console.log(Math.abs(number)); 
} else {
	console.log(number);
}

