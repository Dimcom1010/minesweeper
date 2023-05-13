import {matrixCreater} from "./matrixCreater.js"
import {matrixInfoFiller} from "./matrixInfoFiller.js"
import {addBombs} from "./addBombs.js" 

console.log('START');
const WIDTH=10
const HEIGHT=10
const BOMBS=1
const firstclickX=0
const firstclickY=0
if(WIDTH*HEIGHT<BOMBS){
    console.error("Слишком маленькое поле , бомбы не помещаются")
}
// "c" - обозначение того что на кнопку нажали
// 1 - обозначение установленной бомбы

const matrixWithFirstClick=await matrixCreater(WIDTH,HEIGHT)
matrixWithFirstClick[firstclickX][firstclickY]="с"
const matrixWithBombs=await addBombs(BOMBS,matrixWithFirstClick)
const matrixInfoBombsAround=await matrixInfoFiller(await matrixCreater(WIDTH+2,HEIGHT+2),matrixWithBombs)

console.log('matrixWithBombs',matrixWithBombs);
console.log('matrixInfoBombsAround',matrixInfoBombsAround);

