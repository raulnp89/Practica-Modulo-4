import { categories } from "../data/movie-categories";
export { addCategory };

/*****************Boton*********************************************************/

const movieCategory = document.getElementById("movie-category");

function addCategory() {
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

/********************************************************************************/
