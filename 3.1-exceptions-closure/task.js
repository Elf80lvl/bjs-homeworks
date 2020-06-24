function parseCount(input) {
  //debugger;
  if (isNaN(parseInt(input))) {
    throw new Error("Невалидное значение");
  } else return Number.parseInt(input);
}


function validateCount(input) {
  try {
    return parseCount(input);
  } catch(e) {
    return e;
  }
}


//***********Задача 2 */
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


function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch{
    return new Triangle(a, b, c).getArea();
   
  }

}

//per: new Triangle(a, b, c).prototype.getPerimeter = function(){return "Ошибка! Неправильный треугольник"},
      //area: new Triangle(a, b, c).protorype.getArea = function(){return "Ошибка! Неправильный треугольник"}

// return {
//   perimeter: "Ошибка! Неправильный треугольник",
//   area: "Ошибка! Неправильный треугольник"
// }