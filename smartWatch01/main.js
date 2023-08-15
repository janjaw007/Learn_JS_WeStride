"use strict";
const colorWatch = document.querySelector("#img-watch");
const btnColor = document.querySelectorAll(".btn");

for (let i = 0; i < btnColor.length; i++) {
  btnColor[i].addEventListener("click", function () {
    if (btnColor[i].classList.contains("btn-black")) {
      colorWatch.src = "./images/black-watch.png";
    } else if (btnColor[i].classList.contains("btn-orange")) {
      colorWatch.src = "./images/orenge-watch.png";
    } else if (btnColor[i].classList.contains("btn-purple")) {
      colorWatch.src = "./images/purple-watch.png";
    } else if (btnColor[i].classList.contains("btn-pink")) {
      colorWatch.src = "./images/pink-watch.png";
    }
  });
}
