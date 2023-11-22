import { categories } from "../data/movie-categories";
import { movies } from "../data/movies";
import { copiaMovies } from "./practice1";
/*******************************Boton*******************************************/

let filter = document.querySelector(".filter-categories");
let select = document.createElement("select");
select.addEventListener("change", filterCategory);
select.className = "filter-by-categories";

filter.appendChild(select);

const movieCategory = document.querySelector(".filter-by-categories");

export function addCategory() {
  const options = [];

  for (const [key, value] of Object.entries(categories)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    options.push(option);
  }

  options.sort((a, b) => a.textContent.localeCompare(b.textContent));

  while (movieCategory.firstChild) {
    movieCategory.removeChild(movieCategory.firstChild);
  }

  options.forEach((option) => {
    movieCategory.appendChild(option);
  });
}

addCategory();

const defaultOption = document.createElement("option");
defaultOption.value = "filter-by";
defaultOption.textContent = "Filter by categories:";
defaultOption.selected = "true";
movieCategory.insertBefore(defaultOption, movieCategory.firstChild);

/***********************************************************************/
import { createMovieGrid } from "./grid";
import { createMovieList } from "./lista";
import { isListView } from "./practice1";



function filterCategory(e) {
  let value = e.target.value;
  let valueEsValido = Object.values(categories).find(
    (a) => a.toLowerCase() === value.toLowerCase()
  );

  if (valueEsValido !== undefined) {
    let peliculasFiltradas = copiaMovies.filter(
      (film) => film.category.toLowerCase().includes(value)
    );

    let loadedMovieContainer = isListView
      ? document.querySelector(".movie-container-list")
      : document.querySelector(".movie-container-grid");

    loadedMovieContainer.innerHTML = "";

    for (let i = 0; i < peliculasFiltradas.length; i++) {
      const movie = peliculasFiltradas[i];
      const movieElement = isListView ? createMovieList(movie) : createMovieGrid(movie);
      loadedMovieContainer.appendChild(movieElement);
    }
  } else {
    let loadedMovieContainer = isListView
      ? document.querySelector(".movie-container-list")
      : document.querySelector(".movie-container-grid");

    loadedMovieContainer.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      const movieElement = isListView ? createMovieList(movie) : createMovieGrid(movie);
      loadedMovieContainer.appendChild(movieElement);
    }
  }
}