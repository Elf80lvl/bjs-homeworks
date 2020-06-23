class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }  

  fix(){
    this.state = this.state * 1.5;
  }

  set state(number){
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state(){
    return this._state;
  }
}


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}


class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}


class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, ){
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}


class FantasticBook  extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook  extends Book {
  constructor(name, author, releaseDate, pagesCount){
    super(name, author, releaseDate, pagesCount);
    this.type = 'detective';
  }
}



//**********Задача 2
class Library {
  constructor(name) {
    if (typeof name === 'string') {
      this.name = name;
    } else {
      console.log('Конструктор класса должен принимать название библиотеки name (строка)');
    }
    this.books = [];
  }

  //Реализуйте метод addBook(book), который будет в качестве аргумента принимать объект (книгу или журнал). Метод должен добавлять книгу в хранилище books, только если состояние state книги больше 30.
  addBook (book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }

  //Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ, по которому будет производиться поиск (тип, автор, название, год выпуска и пр.) и искомое значение. Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
  findBookBy (type, value) {
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i][type] === value) {
        return this.books[i];
      } else return null;
    }
  }


  giveBookByName (bookName) {
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].name === bookName) {
        this.books.splice(i, 1)[0];
      } else return null;
    }
  }

  // giveBookByName (bookName) {
  //   for (let i = 0; i < this.books.length; i++){
  //     if (this.books[i].name === bookName) {
  //       const a = this.books.splice(i, 1)[0];
  //       return a;
  //     } else return null;
  //   }
  // }

  // giveBookByName (bookName) {
  //   let obj = this.books.find(obj => obj.name == bookName);
  //   this.books.splice();
  //   return obj;
  // }

  
}


const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", 'Мурзилка'));
console.log(library.findBookBy("releaseDate", 1924));

console.log(library.giveBookByName("Машина времени"));

//library.books.find(a => a.name === 'Мурзилка');




//*****************Задача 3
class StudentLog {
  constructor (studentName) {
    this.studentName = studentName;
    //this.subject = [];
  }

  getName() {
    return this.studentName;
  }

  addGrade(grade, subject) {
    if (grade >= 1 && grade <= 5) {
      this.subject = 
    } else {
      console.log('Ошибка. Оценка должна быть в пределах от 1 до 5, ваша оценка: ' + grade);
    }
    return Object.keys(this).length - 1; // Метод возвращает количество поставленных оценок по данному предмету.
  }

  getAverageBySubject(subject){
    
  }
}

