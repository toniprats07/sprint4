// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movies => movies.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let peliculasDirigidas = array.filter(movies => movies.director === director);
  console.log("EXERCICE 2 ->", peliculasDirigidas);
  return peliculasDirigidas;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let nota = getMoviesFromDirector(array,director);
  let puntuacion = nota.reduce((acumulador, siguienteValor) => {
    return acumulador + siguienteValor.score
  }, 0);
  let promedio = puntuacion / nota.length;
  return promedio;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let peliculasOrdenadas = [...array].sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  //devolver array solo de 20 películas
  let n = 20;
  let peliculas = peliculasOrdenadas.slice(0, n);
  return peliculas.map(movies => movies.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let ordenadoAnyo = [...array].sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
  return ordenadoAnyo;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
