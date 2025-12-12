"use strict";

const mnumberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: mnumberOfFilms,
    movies: {} ,
    actors: {},
    genres: [],
    private: false
}

let isFinish = false;

while (!isFinish) {
    const a = prompt ('Один з останніх фільмів, що ви дивилися?', '');
    if (a == null || a.length == 0 || a.length > 50) {
        alert('Недопустима назва фільму');
        continue;
    }    
    const b = prompt('На скільки оцінююте?', '');
    personalMovieDB.movies[a] = b;
    isFinish = confirm ('Завершити?');
}

if (mnumberOfFilms < 10 ) alert('Ви подивилися занадто мало фільмів...')
    else if (mnumberOfFilms >= 10 && mnumberOfFilms < 30 ) alert('Ви класичной глядач!')
            else if (mnumberOfFilms >= 30) alert('Ви кіноман!')
                else alert('Сталася помилка...');


