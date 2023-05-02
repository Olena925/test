const numberOfFilms = +prompt("Скільки фільмів ви вже продивились?", "");// так як відповіддю буде число перед promt ми поставили +

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
	b = prompt("На скільки оцінете його?", ""),
	c = prompt("Улюблений з переглянутих фільмів?", ""),
	d = prompt("На скільки оцінете його?", "");


personalMovieDB.movies[a] = b;   
personalMovieDB.movies[c] = d;   

console.log(personalMovieDB);