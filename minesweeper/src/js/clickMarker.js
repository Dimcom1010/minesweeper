import {matrixWithBombs} from "./index.js"
// "c" - обозначение того что на кнопку нажали

export function clickMarker(x, y, matrix){
    if(matrix){
        matrix[y][x] = "с";
        return matrix;
    }else{
        matrixWithBombs[y][x]="c";
    }

}
//Text complited