import { getMoviePosterUrl } from "../utils/movie-utils";
export { createMovieGrid };

function createPosterGrid(path) {
  const element = document.createElement("img");
  element.src = getMoviePosterUrl(path);
  element.className = "grid-poster";
  return element;
}

function createTitleGrid(title) {
  const element = document.createElement("div");
  element.className = "grid-title";
  element.textContent = title;
  return element;
}

function createDataGrid(rating, year, category) {
  const element = document.createElement("div");
  element.className = "grid-data";
  element.textContent = `Rating: ${rating} | ${year} | ${category}`;
  return element;
}
function createDescriptionGrid(description) {
  const element = document.createElement("p");
  element.className = "description-grid";
  element.textContent = description;
  return element;
}
function estiloDirector() {
  element.className = "span";
}
function createDirectorGrid(director) {
  const element = document.createElement("p");
  element.className = "director-grid";
  element.textContent = `Director: ${director}`;
  return element;
}
function createActorsGrid(actors) {
  const element = document.createElement("p");
  element.className = "actors-grid";
  element.textContent = `Actors: ${actors}`;
  return element;
}

function createMovieGrid(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "grid-movie";
  movieElement.appendChild(createPosterGrid(movieObj.poster));
  movieElement.appendChild(createTitleGrid(movieObj.title));
  movieElement.appendChild(
    createDataGrid(movieObj.rating, movieObj.year, movieObj.category)
  );
  movieElement.appendChild(createDescriptionGrid(movieObj.description));
  movieElement.appendChild(createDirectorGrid(movieObj.director));
  movieElement.appendChild(createActorsGrid(movieObj.actors));

  return movieElement;
}

export function showGrid(copiaMovies) {
  document.querySelector("#root").innerHTML = "";

  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container-grid";

  for (let i = 0; i < copiaMovies.length; i++) {
    const movieElement = createMovieGrid(copiaMovies[i]);
    movieContainer.appendChild(movieElement);
  }

  document.querySelector("#root").appendChild(movieContainer);
}
