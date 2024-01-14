const grid = document.querySelector("#grid");
const applyBtn = document.querySelector("#applyBtn");
const clearBtn = document.querySelector("#clearBtn");
const randomizeBtn = document.querySelector("#randomizeBtn");
let isRandomizing = false;

function createGrid(size) {
  grid.innerHTML = ""; // Clear previous grid

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", function () {
      if (isRandomizing) {
        const randomColor = getRandomColor();
        cell.style.backgroundColor = randomColor;
      } else {
        cell.style.backgroundColor = "black";
      }
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

randomizeBtn.addEventListener("click", function () {
  isRandomizing = !isRandomizing; // Toggle the flag
});

function randomizeColors(cells) {
  cells.forEach((cell) => {
    const randomColor = getRandomColor();
    cell.style.backgroundColor = randomColor;
  });
}

function resetColors(cells) {
  cells.forEach((cell) => {
    cell.style.backgroundColor = ""; // Reset to default color
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(16); // Initial grid size (16x16)
