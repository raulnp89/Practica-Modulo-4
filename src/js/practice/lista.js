import { getMoviePosterUrl } from "../utils/movie-utils";
export { createMovieList };

function createPosterList(path) {
  const moviePosterWidth = 400;
  const element = document.createElement("img");
  element.src = getMoviePosterUrl(path, moviePosterWidth);
  element.className = "list-poster";
  return element;
}

function createTitleList(title) {
  const element = document.createElement("div");
  element.className = "list-title";
  element.textContent = title;
  return element;
}

function createDataList(rating, year, category) {
  const element = document.createElement("div");
  element.className = "list-data";

  const starRating = createStarRating(rating, 10);
  element.appendChild(starRating);
  element.innerHTML += ` | ${year} | ${category}`;
  return element;

  element.textContent = `Rating: ${rating} | ${year} | ${category}`;
  return element;
}

function createStarRating(rating, maxRating) {
  const starRatingElement = document.createElement("div");
  starRatingElement.className = "star-rating";

  for (let i = 1; i <= maxRating; i++) {
    const star = document.createElement("span");
    if (i <= rating) {
      star.textContent = "★";
    } else {
      star.textContent = "☆";
    }
    starRatingElement.appendChild(star);
  }

  return starRatingElement;
}

function createDescriptionList(description) {
  const element = document.createElement("p");
  element.className = "description-list";
  element.textContent = description;
  return element;
}

function createDirectorList(director) {
  const element = document.createElement("p");
  element.className = "director-list";
  element.textContent = `Director: ${director}`;
  return element;
}

function createActorsList(actors) {
  const element = document.createElement("p");
  element.className = "actors-list";
  element.textContent = `Actors: ${actors}`;
  return element;
}

function createMovieList(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "list-movie";
  movieElement.appendChild(createPosterList(movieObj.poster));
  movieElement.appendChild(createTitleList(movieObj.title));
  movieElement.appendChild(
    createDataList(movieObj.rating, movieObj.year, movieObj.category)
  );
  movieElement.appendChild(createDescriptionList(movieObj.description));
  movieElement.appendChild(createDirectorList(movieObj.director));
  movieElement.appendChild(createActorsList(movieObj.actors));
  return movieElement;
}

// function sortMovies(copiaMovies) {
//   return copiaMovies.sort((a, b) => a.title.localeCompare(b.title));
// }

export function showList(copiaMovies) {
  document.querySelector("#root").innerHTML = "";

  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container-list";

  // const sortedMovies = sortMovies(copiaMovies);

  for (let i = 0; i < copiaMovies.length; i++) {
    // const copiaMovies = sortedMovies[i];
    const movieElement = createMovieList(copiaMovies[i]);
    movieContainer.appendChild(movieElement);
  }

  document.querySelector("#root").appendChild(movieContainer);
}
