import { clickCheker } from "./clickCheker.js";
import { clickMarker } from "./clickMarker.js";
import { variables } from "./variables.js";
import { updateClickCounter } from "./init.js";
import { multiOpener } from "./multiOpener.js";
import { checkWin } from "./checkWin.js";
import { setResult } from "./resultTable.js";
import { endDateCounter } from "./dateCounter.js";
import { audioClick, audioBoom, audioWin } from "./audio.js";
import { start, modal, gameOver, matrixInfoBombsAround } from "./index.js";

export class Box {
  isOpen = false;
  isMark = false;
  constructor(width, height, positionX, positionY) {
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  creater() {
    this.box = document.createElement("div");
    this.box.classList.add("box");
    this.box.setAttribute("x", this.positionX);
    this.box.setAttribute("y", this.positionY);
    this.box.style.width = `${this.width}%`;
    this.box.style.height = `${this.height}%`;
    const saveThis = this;
    this.box.addEventListener(
      "contextmenu",
      function (event) {
        event.preventDefault();
        saveThis.clickRightButton();
      },
      true
    );
    this.box.addEventListener("click", this.clickLeftButton.bind(this));
    return this.box;
  }

  clickRightButton() {
    const audio = "src/audio/click.mp3";
    audioClick();
    if (!variables.isNotClick) {
      !this.isOpent && (this.isMark = !this.isMark);
      if (!this.isOpent) {
        if (this.isMark) {
          this.box.classList.add("box_mark");
        } else {
          this.box.classList.remove("box_mark");
        }
      }
    }
  }

  clickLeftButton() {
    const audio = "src/audio/click.mp3";
    audioClick();
    if (variables.isNotClick) {
      variables.isNotClick = false;
      variables.firstclickX = this.positionX;
      variables.firstclickY = this.positionY;
      start();
    } else {
      if (!this.isOpent && !this.isMark) {
        variables.clickCounter++;
        updateClickCounter();
        this.openBox();
      }
    }
  }

  async openBox() {
    this.isOpent = true;
    const isBomb = clickCheker(this.positionX, this.positionY);
    if (isBomb) {
      this.box.classList.add("box_mina");

      setTimeout(() => audioBoom(), 200);
      setTimeout(() => gameOver(), 1500);
    } else {

      const bombsAround = matrixInfoBombsAround[this.positionY][this.positionX];
      this.box.classList.add(`number_${bombsAround}`);
      
      this.box.innerText = bombsAround;
      clickMarker(this.positionX, this.positionY);
      const boxCount = matrixInfoBombsAround[this.positionY][this.positionX];
      !boxCount && multiOpener(this.positionX, this.positionY);

      if (checkWin()) {
        setTimeout(() => setResult(), 100);
        setTimeout(() => audioWin(), 400);
        endDateCounter();
        modal.crossDisable();
        modal.openWinMenu();
      }
    }
  }
}
