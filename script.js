let container = document.getElementById("container");
const resizeGridButton = document.querySelector("#new-grid-button");
const clearGridButton = document.querySelector("#clear-button");

createGrid(16);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let smallDiv = document.createElement("div");
    smallDiv.classList.add("small__div");
    smallDiv.setAttribute("id", `square${i}`);
    smallDiv.style.width = `${100 / gridSize}%`;
    smallDiv.style.height = `${100 / gridSize}%`;
    container.append(smallDiv);

    smallDiv.addEventListener("mouseover", () => {
      smallDiv.style.backgroundColor = getRandomColor();
    });
  };
}

resizeGridButton.addEventListener("click", () => {
  let gridSize = prompt("Enter a number between 2 and 100:");

  if (gridSize >= 2 && gridSize <= 100) {
    container.innerHTML = "";
    createGrid(gridSize);
  } 
});

clearGridButton.addEventListener("click", () => {
  const allSquares = document.querySelectorAll('.small__div');

  allSquares.forEach((square) => square.style.backgroundColor = "white"); 
});