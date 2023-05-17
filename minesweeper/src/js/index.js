import { matrixCreater } from "./matrixCreater.js";
import { matrixInfoFiller } from "./matrixInfoFiller.js";
import { clickMarker } from "./clickMarker.js";
import { addBombs } from "./addBombs.js";
import { init,updateClickCounter } from "./init.js";
import { Modal } from "./Modal.js";
import { config } from "./config.js";
import { variables } from "./variables.js";
import { addMenuButton } from "./menuButton.js";
import { groupZeroCoordinatesWithNeighbors } from "./groupZeroCoordinates.js";

console.log('START');

export let modal = new Modal
modal.init()
modal.open()
let initMatrix
export let matrixWithFirstClick
export let matrixWithBombs
export let matrixInfoBombsAround
export let matrixZerroMapWithNeighbors

export async function selectLevel() {
    modal.close()
    variables.isNotClick = true;
    initMatrix = await matrixCreater(config.width, config.height);
    init(config.width, config.height, initMatrix);
}

export async function start() {
    setTimeout(()=> firstClick(),100)
    initMatrix = await matrixCreater(config.width, config.height);
    init(config.width, config.height, initMatrix);
    modal.init()
    matrixWithFirstClick = clickMarker(variables.firstclickX, variables.firstclickY, await matrixCreater(config.width, config.height, initMatrix));
    matrixWithBombs = await addBombs(config.bombs, matrixWithFirstClick);
    matrixInfoBombsAround = await matrixInfoFiller(await matrixCreater(config.width + 2, config.height + 2), matrixWithBombs);
    matrixZerroMapWithNeighbors = groupZeroCoordinatesWithNeighbors(matrixInfoBombsAround);
}
export function gameOver() {
    console.log("КОНЕЦ");
    variables.isNotClick = true;
    variables.isPlay = false;
    modal.openEndMenu()
    variables.clickCounter=0
    updateClickCounter()
}

function firstClick(){
    variables.isPlay = true;
    addMenuButton();
    const constboxs = document.querySelector(`div[x="${variables.firstclickX}"][y="${variables.firstclickY}"]`);
    const clickEvent = new Event("click");
    constboxs.dispatchEvent(clickEvent);
}