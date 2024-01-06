const container = document.getElementById("container");
const applyBtn = document.getElementById("applyBtn");

function createGrid(size) {
  container.innerHTML = ""; // Clear previous grid

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", function () {
      pixel.style.backgroundColor = "black";
    });
    container.appendChild(pixel);
  }

  // Adjust container size
  container.style.width = "750px";
  container.style.height = "750px";

  // Adjust pixel size based on the new grid size
  const pixelSize = 100 / size; // Calculate the size percentage
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.width = `calc(${pixelSize}% - 2px)`; // 2px for the border
    pixel.style.height = `calc(${pixelSize}% - 2px)`; // 2px for the border
    pixel.style.border = "1px solid black";
  });
}

applyBtn.addEventListener("click", function () {
  const gridSizeInput = document.getElementById("gridSize");
  const newSize = parseInt(gridSizeInput.value);

  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a value between 1 and 100.");
  }
});

createGrid(16); // Initial grid size (16x16)
