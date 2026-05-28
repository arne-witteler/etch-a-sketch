let container = document.getElementById("container");

for (let i = 0; i < 4 * 4; i++) {
  let smallDiv = document.createElement("div");
  smallDiv.classList.add("small__div");
  smallDiv.setAttribute("id", `square${i}`);
  container.append(smallDiv);
}