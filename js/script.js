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

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector(".wrapper");

console.dir(box);

/* box.style.backgroundColor = "blue";
box.style.width = "500px"; */

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("Я був тут!!!");


div.classList.add("black");

//document.body.append(div);
//document.body.appendChild(div);   //застаріла форма
wrapper.append(div);
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[0]); //застаріла форма

//circles[0].remove();
//wrapper.removeChild(hearts[1]);     //застаріла форма

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);    //застаріла форма

div.innerHTML = "<h1>Hello world!</h1>";
//div.textContent = "HELLO";

div.insertAdjacentHTML("afterbegin", "<h2>Ahoj!</h2>");