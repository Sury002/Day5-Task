class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


const movie = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log("Movie Title: " + movie.title);
console.log("Studio: " + movie.studio);
console.log("Rating: " + movie.rating);