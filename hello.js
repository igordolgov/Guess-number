let randomNumber = Math.floor(Math.random() * 1000) + 1; 
// Случайное целое число от 1 до 1000

function guessNumber() {
	while (true) {
		let answer = prompt ('Угадай число (от 1 до 1000)');

		if (answer == null) {
      		alert ('Пока!');
			break;
		}
		else if (isNaN (parseInt (answer))) {
			alert ('Введи число!');
		}
		else if (answer > randomNumber) {
			alert ('Меньше');
		}
		else if (answer < randomNumber) {
			alert ('Больше');
		}
		else if (answer == randomNumber) {
			alert ('Правильно!');
		}
	}
}
	guessNumber();