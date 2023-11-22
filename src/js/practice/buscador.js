import { categories } from "../data/movie-categories";
import { movies } from "../data/movies";
import { showGrid } from "./grid";
import { showList } from "./lista";

export function mostrarResultadosBusqueda(movies, isListView) {
  if (isListView) {
    showList(movies);
  } else {
    showGrid(movies);
  }
}
