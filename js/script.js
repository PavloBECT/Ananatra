"use strict";

let mnumberOfFilms;

function start() {
    mnumberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');
    while (mnumberOfFilms == '' || mnumberOfFilms == null || isNaN(mnumberOfFilms))
        mnumberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');
}

start();

const personalMovieDB = {
    count: mnumberOfFilms,
    movies: {} ,
    actors: {},
    genres: [],
    private: false
}

let isFinish = false;

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10 ) alert('Ви подивилися занадто мало фільмів...')
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) alert('Ви класичной глядач!')
                else if (personalMovieDB.count >= 30) alert('Ви кіноман!')
                    else alert('Сталася помилка...');
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden.private)
        console.log(hidden);
}
showMyDB(personalMovieDB);

function writeYourGenres () {
    for (let i = 0; i <3; i++) {
        const a = prompt (`Ваш улюблений жанр під номером ${i+1}`, '');
        personalMovieDB.genres[i] = a;
    }
}
writeYourGenres();

//showMyDB();