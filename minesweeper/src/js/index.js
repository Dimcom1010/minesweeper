import { matrixCreater } from "./matrixCreater.js";
import { matrixInfoFiller } from "./matrixInfoFiller.js";
import { clickMarker } from "./clickMarker.js";
import { addBombs } from "./addBombs.js";
import { init } from "./init.js";
import { Modal } from "./Modal.js";
import { config} from "./config.js";
import { groupZeroCoordinatesWithNeighbors } from "./groupZeroCoordinates.js";

console.log('START');

const firstclickX = 1;
const firstclickY = 0;

let initMatrix = await matrixCreater(config.width, config.height);
init(config.width, config.height, initMatrix);
export const modal = new Modal
modal.init()
export let matrixWithFirstClick = clickMarker(firstclickX, firstclickY, await matrixCreater(config.width, config.height, initMatrix));
export let matrixWithBombs = await addBombs(config.bombs, matrixWithFirstClick);
export let matrixInfoBombsAround = await matrixInfoFiller(await matrixCreater(config.width + 2, config.height + 2), matrixWithBombs);
export let matrixZerroMapWithNeighbors=groupZeroCoordinatesWithNeighbors(matrixInfoBombsAround);

export async function restart(){
    initMatrix = await matrixCreater(config.width, config.height);
    init(config.width, config.height, initMatrix);
    modal.init()
    matrixWithFirstClick = clickMarker(firstclickX, firstclickY, await matrixCreater(config.width, config.height, initMatrix));
    matrixWithBombs = await addBombs(config.bombs, matrixWithFirstClick);
    matrixInfoBombsAround = await matrixInfoFiller(await matrixCreater(config.width + 2, config.height + 2), matrixWithBombs);
    matrixZerroMapWithNeighbors=groupZeroCoordinatesWithNeighbors(matrixInfoBombsAround);
} 
