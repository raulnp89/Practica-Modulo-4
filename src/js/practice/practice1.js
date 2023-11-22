import { showGrid } from "../practice/grid";
import { showList } from "../practice/lista";
import { movies } from "../data/movies";
import { mostrarResultadosBusqueda } from "../practice/buscador";
import { addCategory } from "./filtro-categoria";
import { filterCategory } from "./filtro-categoria";
import { addSort } from "./sort";
import { ordenarPeliculas } from "./sort";

export let isListView;
export let copiaMovies = movies.slice();
showGrid(copiaMovies);

const buttonGrid = document.getElementById("button-grid");

buttonGrid.addEventListener("click", () => {
  showGrid(copiaMovies);
  isListView = false;
});

const buttonList = document.getElementById("button-list");

buttonList.addEventListener("click", () => {
  showList(copiaMovies);
  isListView = true;
});

const inputSearch = document.querySelector("#barra-busqueda");

inputSearch.addEventListener("keyup", () => {
  console.log("ok");
  let valor = inputSearch.value.toLowerCase();
  copiaMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(valor) ||
      movie.director.toLowerCase().includes(valor) ||
      movie.actors.toLowerCase().includes(valor) ||
      movie.year.toString().includes(valor)
    );
  });
  mostrarResultadosBusqueda(copiaMovies, isListView);
});
/************************************************************/
let sort = document.querySelector(".sort-categories");
let select = document.createElement("select");
select.className = "sort-filter";
select.addEventListener("change", showSortedMovies);

addSort(select);
sort.appendChild(select);

function showSortedMovies() {
  copiaMovies = ordenarPeliculas(copiaMovies, select.value);
  if (isListView === true) {
    showList(copiaMovies);
  } else {
    showGrid(copiaMovies);
  }
}
showSortedMovies();
/***********************************************************/