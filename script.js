const container = document.getElementById("container");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", function () {
      pixel.style.backgroundColor = "black";
    });
    container.appendChild(pixel);
  }
}

createGrid(16);
