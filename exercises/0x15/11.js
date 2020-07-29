/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 4 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros
que pertenezcan a ese género usando un el método que devuelve la información
*/
class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
    infoBook() {
        return (`Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\nGenre: ${this.genre}`);
    }
    infoAuthor() {
        return this.author;
    }
    infoGenre() {
        return this.genre;
    }
}
//const a = new Book('Aprendiendo JS', 'MDN', '2020', 'Educación');
//console.log(a.infoBook());
const errorMessage = (errorCode) => {
    if (errorCode === 1) {
        return alert(`Error: All fields are required.  Try again.`);
    }
    if (errorCode === 2) {
        return alert(`In the year field four numbers required. (Example: 2020).  Try again.`);
    }
    if (errorCode === 3) {
        return alert(`This genre don't exist.  Try again.`);
    }
};
const books = [];
let amount = 0;
while (amount < 4) {
    amount++;
    const title = prompt(`Book ${amount} - Enter title: `);
    if (title === '') {
        errorMessage(1);
        break;
    }
    const author = prompt(`Book ${amount} - Enter author: `);
    if (author === '') {
        errorMessage(1);
        break;
    }
    let year = prompt(`Book ${amount} - Enter year: (YYYY)`);
    if (year.length != 4 || year === '' || isNaN(year)) {
        errorMessage(2);
        break;
    } else {
        year = parseInt(year);
    }
    const genre = prompt(`Book ${amount} - Enter genre: (aventuras, terror o fantasía)`);
    if (genre === '') {
        errorMessage(1);
        break;
    }
    if (genre !== 'aventuras' && genre !== 'terror' && genre !== 'fantasía') {
        errorMessage(3);
        break;
    }
    const book = new Book(title, author, year, genre);
    books.push(book);
}
//console.log(books);
const showAllBooks = () => {
    console.log(`All books:`);
    for (book of books) {
        console.log(`${book.infoBook()}`);
    }
}
showAllBooks();
const showAllAuthors = () => {
    console.log(`All authors:`);
    for (book of books) {
        console.log(`${book.infoAuthor()}`);
    }
}
showAllAuthors();
const showByGenre = (findGenre) => {
    console.log(`Books with genre ${findGenre}:`);
    for (book of books) {
        if (book.genre === findGenre) {
            console.log(`${book.infoBook()}`);
        }
    }
}
const findGenre = prompt('Enter a genre: ');
showByGenre(findGenre);