import { modal } from "./index.js";
import { resultMenu } from "./resultMenu.js";
import { mainMenu } from "./mainMenu.js";

export function endMenu() {
  const endMenu = document.createElement("div");
  endMenu.classList.add("maim");

  const endHader = document.createElement("div");
  endHader.classList.add("maim__header");
  endHader.innerText = "You've lost";
  endMenu.appendChild(endHader);

  const endBody = document.createElement("div");
  endBody.classList.add("maim__body");

  const newGameButton = document.createElement("div");
  newGameButton.classList.add("button");
  newGameButton.innerText = "Try to play again";
  newGameButton.addEventListener("click", () => {
    modal.addContent(mainMenu());
  });
  endBody.appendChild(newGameButton);
  endMenu.appendChild(endBody);

  const endFooter = document.createElement("div");
  endFooter.classList.add("maim__footer");

  const resultButton = document.createElement("div");
  resultButton.classList.add("button");
  resultButton.innerText = "Results table";
  resultButton.addEventListener("click", () => {
    modal.addContent(resultMenu());
  });

  endFooter.appendChild(resultButton);

  endMenu.appendChild(endFooter);

  return endMenu;
}
