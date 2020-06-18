'use strict';
//**************Задача 1
function getSolutions( a, b, c ) {
  let d = b**2 - 4 * a * c; //дискриминант

  if (d < 0) {
    return {
      D: d,
      roots: []
    } 
  } else if (d === 0) {
    let x1 = - b / (2 * a);
    return {
      D: d,
      roots: [x1]
    }
  } else if (d > 0) {
    let x1 = (-b  + Math.sqrt(d)) / (2 * a);
    let x2 = (-b  - Math.sqrt(d)) / (2 * a);
    return {
      D: d,
      roots: [x1, x2]
    }
  }  
  //return result;
}


function showSolutionsMessage( a, b, c ) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень ${result.roots} = значение_корня`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. ${result.roots[0]} = значение_корня_1, ${result.roots[1]} = значение_корня_2`);
  }

}


//**************Задача 2
function getAverageScore(data) {
  let averageData = {};

  //функция getAverageScore должна считать среднюю оценку для пустого объекта
  if (Object.entries(data).length === 0 && data.constructor === Object) {
    for (let subject in data) {
      averageData[subject] = 0;
    }
  averageData.average = 0;
  }else {

  for (let subject in data) {
      averageData[subject] = getAverageMark(data[subject]);
  }

  // let arrayOfAverageMarks = [];
  // for (let subject in averageData) {
  //   arrayOfAverageMarks.push(averageData[subject]);
  // }

  //averageData.average = getAverageMark(arrayOfAverageMarks);
  averageData.average = getAverageMark(Object.values(averageData));
  //averageData.average = getAverageMark([averageData.algebra, averageData.chemistry, averageData.english, averageData.french, averageData.geometry, averageData.music, averageData.physics, averageData.poetry, averageData.russian]);
  }

  return averageData;
}


function getAverageMark(marks){
  if (marks.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
      sum = sum + marks[i];
  }
    
  return sum / marks.length;
}



//**************Задача 3
function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  }

}


function getDecodedValue(secret) {
  // if (secret === 0) {
  //   return 'Родриго';
  // }
  // if (secret === 1) {
  //   return 'Эмильо';
  // }
  return (secret === 0) ? 'Родриго' : 'Эмильо';
}