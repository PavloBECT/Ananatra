"use strict";

const mnumberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: mnumberOfFilms,
    movies: {} ,
    actors: {},
    genres: [],
    private: false
}

const a = prompt ('Один з останніх фільмів, що ви дивилися?', ''),
      b = prompt('На скільки оцінююте?', ''),
      c = prompt ('Один з останніх фільмів, що ви дивилися?', ''),
      d = prompt('На скільки оцінююте?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);