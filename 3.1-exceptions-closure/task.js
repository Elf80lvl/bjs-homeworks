function parseCount(input) {
  a = parseInt(input);
  if (isNaN(a)) {
    throw new Error("Невалидное значение");
  } else return a;
}


function validateCount(input) {
  try {
    return parseCount(input);
  } catch(e) {
    return e;
  }
}


//***********Задача 2 */
//Для конструктора класса треугольника конструкция if/else достаточно сложная…можно было сделать просто проверку if с выбрасыванием исключения, а дальше после условия или перед ним выполнять присваивания…условие ведь не сработает.
class Triangle {
  constructor (a, b, c){
    if ( (a + b >= c) && (a + c >= b) && (b + c >= a) ) {
      console.log('Треугольник существует');
      this.a = a;
      this.c = c;
      this.b = b;
    } else {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }
  
  getPerimeter (){
    return this.a + this.b + this.c;
  }

  getArea (){
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
    return parseFloat(s.toFixed(3));
  }
}

//Для возвращаемого объекта, если описать его свойствами со значениями стрелочных функций, то запись будет заметно короче, примерно как у вас строки 65-68, только функции должны быть.
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch{
    return {
      getPerimeter (){
        return "Ошибка! Неправильный треугольник";
      },
      getArea(){
        return "Ошибка! Неправильный треугольник";
      }
      
    }
   
  }

}

//per: new Triangle(a, b, c).prototype.getPerimeter = function(){return "Ошибка! Неправильный треугольник"},
//area: new Triangle(a, b, c).protorype.getArea = function(){return "Ошибка! Неправильный треугольник"}

// return {
//   perimeter: "Ошибка! Неправильный треугольник",
//   area: "Ошибка! Неправильный треугольник"
// }