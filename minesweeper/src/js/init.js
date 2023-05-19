import { Box } from "./Box.js";
import { variables } from "./variables.js";
import { config } from "./config.js";
import { addMenuButton, remuveMenuButton } from "./menuButton.js";

export function init(countBoxWidth, countBoxHeight, matrix) {
  const boxWidth = 100 / countBoxWidth;
  const boxHeight = 100 / countBoxHeight;

  const body = document.querySelector("body");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  body.classList.add("body");

  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);

  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const result = document.createElement("div");
  result.classList.add("result");
  header.appendChild(result);
  const resultUser = document.createElement("div");
  resultUser.classList.add("result__user");
  resultUser.innerText = `Name: ${variables.userName}`;
  result.appendChild(resultUser);

  const resultComplexity = document.createElement("div");
  resultComplexity.classList.add("result__level");
  resultComplexity.innerText = `Level: ${config.level.name} ${config.level.info}`;
  result.appendChild(resultComplexity);

  const resultClicks = document.createElement("div");
  resultClicks.classList.add("result__clicks");
  resultClicks.innerText = `Clicks: ${variables.clickCounter}`;
  result.appendChild(resultClicks);
  variables.isPlay ? addMenuButton() : remuveMenuButton();
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  container.appendChild(wrapper);

  matrix.forEach((e, y) => {
    e.forEach((i, x) => {
      const box = new Box(boxWidth, boxHeight, x, y);
      wrapper.appendChild(box.creater());
    });
  });
}

export function updateClickCounter() {
  const clickCounter = document.querySelector(".result__clicks");
  clickCounter &&
    (clickCounter.innerText = `Clicks: ${variables.clickCounter}`);
}
