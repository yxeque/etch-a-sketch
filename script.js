const grid = document.querySelector("#grid");
const applyBtn = document.querySelector("#applyBtn");
const clearBtn = document.querySelector("#clearBtn");

function createGrid(size) {
  grid.innerHTML = ""; // Clear previous grid

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
    grid.appendChild(cell);
  }

  adjustGridSize(size);
}

function adjustGridSize(size) {
  // Adjust grid size
  grid.style.width = "750px";
  grid.style.height = "750px";

  // Adjust cell size based on the new grid size
  const cellSize = 100 / size; // Calculate the size percentage
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.width = `calc(${cellSize}% - 2px)`; // 2px for the border
    cell.style.height = `calc(${cellSize}% - 2px)`; // 2px for the border
    cell.style.border = "1px solid black";
  });
}

applyBtn.addEventListener("click", () => {
  const gridSizeInput = document.getElementById("gridSize");
  const newSize = parseInt(gridSizeInput.value);

  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a value between 1 and 100.");
  }
});

clearBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
});

createGrid(16); // Initial grid size (16x16)
