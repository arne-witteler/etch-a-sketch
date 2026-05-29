let container = document.getElementById("container");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 16 * 16; i++) {
  let smallDiv = document.createElement("div");
  smallDiv.classList.add("small__div");
  smallDiv.setAttribute("id", `square${i}`);
  container.append(smallDiv);

  smallDiv.addEventListener("mouseover", (event) => {
    smallDiv.style.backgroundColor = getRandomColor();
})
}
