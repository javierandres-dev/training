/**
Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */
// Class
class Movie {
  // Method constructor to create a instance, it receives a object
  constructor({ id, title, director, year, country, genre, clasification }) {
    // Propierties
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.country = country;
    this.genre = genre;
    this.clasification = clasification;
    // Methods that are executed at creating an instance
    this.validateId(id);
    this.validateTitle(title);
    this.validateDirector(director);
    this.validateYear(year);
    this.validateCountry(country);
    this.validateGenre(genre);
    this.validateClasification(clasification);
  }
  // Static attribute to get the valid genres list according to IMDb
  static get genresList() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  // Static method to show the valid genres list according to IMDb
  static allowGenres() {
    return console.info(
      `The acepted genres are: ${Movie.genresList.join(", ")}`
    );
  }
  // Method to validate that the argument is a string
  validateString(value) {
    if (value === undefined) return console.error("Argument missing.");
    if (typeof value !== "string")
      return console.warn("Argument isn't a string");
    if (value.length === 0) return console.warn("Argument empty.");
    return true;
  }
  // Method to validate that the argument is a number
  validateNumber(value) {
    if (value === undefined) return console.error("Argument missing");
    if (typeof value !== "number")
      return console.warn("Argument isn't a number");
    return true;
  }
  // Method to validate that the argument is an array
  validateArray(value) {
    if (!(value instanceof Array))
      return console.error(
        "Argument doesn't accomplish with the requirimients."
      );
    if (value.length === 0) return console.warn("Argument empty");
    return true;
  }
  // Method to validate that the argument is a valid id according to IMDb
  validateId(value) {
    if (this.validateString(value)) {
      if (value.length !== 9) return console.warn("Id argument size invalid.");
      let imdbId = new RegExp(/^([a-z]){2}([0-9]){7}$/);
      //console.log(imdbId);
      if (imdbId.test(value) === false)
        return console.warn(
          "Id argument doesn't accomplish with the requirements."
        );
      return true;
    }
  }
  // Method to validate that the argument is valid
  validateTitle(value) {
    if (this.validateString(value)) {
      if (value.length > 100)
        return console.warn(
          "title argument doesn't accomplish with the requiriments."
        );
      return true;
    }
  }
  // Method to validate that the argument is valid
  validateDirector(value) {
    if (this.validateString(value)) {
      if (value.length > 50)
        return console.warn(
          "Director argument doesn't accomplish with the requirements."
        );
      return true;
    }
  }
  // Method to validate that the argument is valid
  validateYear(value) {
    if (this.validateNumber(value)) {
      let allow = new RegExp(/^([0-9]{4})$/);
      if (allow.test(value) !== true)
        console.warn("Year argument doesn't accomplish with the requiriments.");
      return true;
    }
  }
  // Method to validate that the argument is valid
  validateCountry(value) {
    if (this.validateArray(value)) {
      for (let i of value) {
        if (this.validateString(i) !== true)
          return console.warn(
            "Country argument doesn't accomplish with the requiriments."
          );
      }
      return true;
    }
  }
  // Method to validate that the argument is valid
  validateGenre(value) {
    if (this.validateArray(value)) {
      for (let i of value) {
        if (this.validateString(i) !== true)
          return console.warn(
            "Genre argument doesn't accomplish with the requiriments."
          );
      }
      for (let i of value) {
        //console.log(i);
        if (Movie.genresList.includes(i) !== true)
          return console.warn(
            `Genre argument doesn't accomplish with the requirement.\nThe acepted genres are: ${Movie.genresList.join(
              ", "
            )}.`
          );
      }
      return true;
    }
  }
  // Method to validate that the argument is valid
  validateClasification(value) {
    if (this.validateNumber(value)) {
      if (value < 0 || value > 10)
        return console.warn(
          "Clasification argument doesn't accomplish with the requiriments."
        );
      this.clasification = value.toFixed(1);
      return true;
    }
  }
  // Method to show movie data sheet
  dataSheet() {
    return console.info(`
  Data Sheet\n\t--------
  * IMDb Id: ${this.id}
  * Title: ${this.title}
  * Director: ${this.director}
  * Year: ${this.year}
  * Country: ${this.country.join("-")}
  * Genre: ${this.genre.join(", ")}
  * IMDb Clasification: ${this.clasification}/10
  \t--------
  `);
  }
}
// An array with three objects
const movies = [
  {
    id: "tt0068646",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    country: ["USA"],
    genre: ["Crime", "Drama"],
    clasification: 9.2,
  },
  {
    id: "tt0109830",
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    country: ["USA"],
    genre: ["Drama", "Romance"],
    clasification: 8.8,
  },
  {
    id: "tt0093773",
    title: "Predator",
    director: "John McTiernan",
    year: 1987,
    country: ["USA"],
    genre: ["Action", "Adventure", "Sci-Fi"],
    clasification: 7.8,
  },
];
// Create three movies and print by console its data sheet
movies.forEach((movie) => new Movie(movie).dataSheet());
