import { categories } from "../data/movie-categories";
export { addSort };

/**************************Sort by****************************************** */

const sortBy = document.getElementById("search-filter");

function addSort() {
  const optionsData = [
    { text: "Title alphabetically in ascending order.", value: "title-asc" },
    { text: "Title alphabetically in descending order.", value: "title-desc" },
    {
      text: "Director alphabetically in ascending order.",
      value: "director-asc",
    },
    {
      text: "Director alphabetically in descending order.",
      value: "director-desc",
    },
    { text: "Year in ascending order.", value: "year-asc" },
    { text: "Year in descending order.", value: "year-desc" },
  ];

  optionsData.forEach((data) => {
    const element = document.createElement("option");
    element.textContent = data.text;
    element.value = data.value;
    sortBy.appendChild(element);
  });
}

addSort();
