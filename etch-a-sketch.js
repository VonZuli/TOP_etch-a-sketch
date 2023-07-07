"use strict";
const body = document.querySelector("body");
const container = document.createElement("div");
const resetCanvasBtn = document.createElement("button");
// const gridItem = document.querySelector(".canvasItem");

function buildCanvas() {
  container.style.display = "flex";
  container.id = "container";
  resetCanvasBtn.id = "resetCanvasBtn";
  resetCanvasBtn.textContent = "Select Canvas Size";

  resetCanvasBtn.addEventListener("click", resizeCanvas);

  body.appendChild(resetCanvasBtn);
  body.appendChild(container);

  for (let i = 0; i < 16 * 16; i++) {
    const canvasItem = document.createElement("div");
    canvasItem.className = "canvasItem";
    canvasItem.id = `canvasItem-${i}`;
    canvasItem.addEventListener("mouseenter", draw);

    container.appendChild(canvasItem);
  }
}

function draw() {
  // this.classList.add("colored");
  this.style.backgroundColor = randomColor();
}

function resizeCanvas() {
  let userPrompt = prompt(
    "Please enter the size of canvas you would like (all entries are squared): "
  );

  let userEntry = parseInt(userPrompt);

  if (isNaN(userEntry) || userEntry > 64 || userEntry <= 0) {
    alert("Please enter a number greater than 0 and less than or equal to 20.");
    resizeCanvas();
  } else {
    const container = document.getElementById("container");
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    for (let i = 0; i < userEntry * userEntry; i++) {
      const canvasItem = document.createElement("div");
      canvasItem.className = "canvasItem";
      canvasItem.id = `canvasItem-${i}`;
      canvasItem.addEventListener("mouseenter", draw);

      container.appendChild(canvasItem);
    }
  }
}

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  // let a = 0.1;
  // while (a < 1) {
  //   a += a;
  // }
  return `rgba(${r},${g},${b})`;
  // return `rgba(${r},${g},${b},${a})`;
};

buildCanvas();
