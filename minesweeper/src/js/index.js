import { matrixCreater } from "./matrixCreater.js"
import { matrixInfoFiller } from "./matrixInfoFiller.js"
import { clickMarker } from "./clickMarker.js"
import { addBombs } from "./addBombs.js"
import { init } from "./init.js"
import { createZerroMap } from "./createZerroMap.js"

console.log('START');
const width = 5
const height = 5
const bombs = 15
const firstclickX = 1
const firstclickY = 0
if (width * height < bombs) {
    console.error("Слишком маленькое поле , бомбы не помещаются")
}
const initMatrix = await matrixCreater(width, height)

init(width, height, initMatrix)


const matrixWithFirstClick = clickMarker(firstclickX, firstclickY, await matrixCreater(width, height, initMatrix))
export const matrixWithBombs = await addBombs(bombs, matrixWithFirstClick)
export const matrixInfoBombsAround = await matrixInfoFiller(await matrixCreater(width + 2, height + 2), matrixWithBombs)
export const matrixZerroMap=[]
createZerroMap()

// console.log('matrixWithBombs',matrixWithBombs);
// console.log('matrixInfoBombsAround',matrixInfoBombsAround);

