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
    // return verdict
}