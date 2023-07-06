"use strict";

const body = document.querySelector("body");
const container = document.createElement("div");
container.style.display = "flex";
container.id = "container";
body.appendChild(container);

function buildCanvas() {
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    gridItem.id = `gridItem-${i}`;
    gridItem.textContent = i;
    container.appendChild(gridItem);

    gridItem.addEventListener("mouseenter", draw);
  }
}

buildCanvas();

function draw() {
  const gridItem = document.querySelector(".gridItem");

  this.classList.add("colored");
}
