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
  // findBookBy (type, value) {
  //   for (let book in this.books) {
  //     if(book[type] === value) return book[type];
  //   }
  //   return null;
  // }

  findBookBy (type, value) {
    for (let book in this.books) {
      if(book[type] === value) return book[type].name;
    }
    return null;
  }

  
}