//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
	str = JSON.stringify(this);
	str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
	const lastIndex = str.length - 1;
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[lastIndex - i]) {
			return false;
		}
	}
	return true;
};

function getAverageMark(marks) {
	// код для задачи №2 писать здесь
	// почему так просто? Это уже делали
	if (marks.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum = sum + marks[i];
	}
	average = sum / marks.length;
	return roundedAverage = Math.round(average);
}

function checkBirthday(birthday) {
	// код для задачи №3 писать здесь
	let now = Math.round((new Date()).getTime() / 1000); // Получить текущую дату в Unix Timestamp и записать в переменную now
	console.log('now: ' + now);

	let userDate = new Date(birthday);
	console.log('userDate: ' + userDate);

	birthday = Math.round(userDate.getTime() / 1000);
	console.log('birthday: ' + birthday);

	let diff = now - birthday;
	console.log('diff: ' + diff);

	let verdict = diff / 31556952;
	console.log(verdict);
    return verdict >= 18;
}