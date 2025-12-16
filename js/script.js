"use strict";

const personalMovieDB = {
    count: 0,
    movies: {} ,
    actors: {},
    genres: [],
    private: false,
    start: function() {
        this.count = +prompt('Скільки фільмів ви вже подивилися?', '').trim();
        while (this.count == '' || this.count == null || isNaN(this.count))
            this.count = +prompt('Скільки фільмів ви вже подивилися?', '');
    },
    rememberMyFilms: function() {
    let isFinish = false;    
    while (!isFinish) {
            const a = prompt ('Один з останніх фільмів, що ви дивилися?', '').trim();
            if (a == null || a.length == 0 || a.length > 50) {
                alert('Недопустима назва фільму');
                continue;
            }    
            const b = prompt('На скільки оцінююте?', '')?.trim();
            this.movies[a] = b;
            isFinish = confirm ('Завершити?');
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10 ) alert('Ви подивилися занадто мало фільмів...')
            else if (this.count >= 10 && this.count < 30 ) alert('Ви класичной глядач!')
                    else if (this.count >= 30) alert('Ви кіноман!')
                        else alert('Сталася помилка...');
    },
    showMyDB: function () {
            if (!this.private) console.log(this);
        },
    togleVisibleMyDB: function() {
        this.private = !this.private;
    },
    writeYourGenres: function() {
        for (let i = 1; i <2; i++) {
            /* let genre = prompt (`Ваш улюблений жанр під номером ${i+1}`, '');
            if (genre == "" || genre == null){
                i--;
            } else this.genres[i] = genre; */

            let genre = prompt (`Введіть ваші улюблкні жанри через кому`, '');
            if (genre == "" || genre == null){
                i--;
            } else {
                this.genres = genre.split(", ");
                this.genres.sort();
            } 
        }
        this.genres.forEach((item, i) =>{
            console.log(`Улюблений жанр ${i+1} - це ${item}`);
        });
    }
}

//showMyDB();
