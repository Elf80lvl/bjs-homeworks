'use strict';

function getResult(a,b,c){
    // код для задачи №1 писать здесь

    let dis;
    let array = [];

    dis = Math.pow(b, 2) - 4 * a * c;

    if (dis === 0) {
        array.push(-b / 2 * a); 
     } else if (dis > 0) {
        array.push((-b  + Math.sqrt(dis)) / (2 * a));
        array.push((-b  - Math.sqrt(dis)) / (2 * a));
     }
     return array;
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark;

    if (marks.length === 0) return 0;
    if (marks.length > 5) {
        console.log('Оценок больше 5ти');
        marks.splice(5, marks.length - 4)
      }
      let sum = 0;
      for (let i = 0; i < marks.length; i++) {
          sum = sum + marks[i];
      }
      
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let date = new Date().getFullYear();
    let result = '';

    if ((date - dateOfBirthday.getFullYear()) >= 18) {
        result += `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result += `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}