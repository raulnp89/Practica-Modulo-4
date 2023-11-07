import { categories } from "../data/movie-categories";
export {buscador}

/***********************Buscador*************************************/

const searchButton = document.getElementById("search-header");
searchButton.addEventListener("click", buscador());

function buscador() {
  const element = document.createElement("input");
  element.type = "text";
  element.placeholder = "Search: ";

  const container = document.getElementById("search-header");
  container.appendChild(element);
}