const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);


// Пишу все условия победы игрока, если нет, значит победил компьютер
if (player == computer) {
	console.log("Ничия");
} else if (player == 0 && computer == 1) {
	console.log("Player win");
} else if (player == 1 && computer == 2) {
	console.log("Player win");
} else if (player == 2 && computer == 0) {
	console.log("Player win");
} else {
	console.log("Computer win");
}



