import { createMovieList } from "../practice/lista";
import { createMovieGrid } from "../practice/grid";


const buttonList = document.getElementById("#button-list");
const buttonGrid = document.getElementById("#button-grid");



document.querySelector("#button-grid").addEventListener("click", () => {
  showGrid();
})

document.querySelector("#button-list").addEventListener("click", () => {
  showList();
})

function showGrid (){
  document.querySelector(".movie-container-list").style.display = "none";
  document.querySelector(".movie-container-grid").style.display = "flex";
}

function showList (){
  document.querySelector(".movie-container-list").style.display = "block";
  document.querySelector(".movie-container-grid").style.display = "none";
}







