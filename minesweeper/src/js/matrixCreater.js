import {addBombs} from "./addBombs.js" 
export function matrixCreater(matrixWidth = 10, matrixHeight = 10, bombs = 10) {
    const matrix =
        Array.from({ length: matrixHeight }, () =>
            Array.from({ length: matrixWidth }, () => 0
            ));
            addBombs(bombs,matrix)    
    return matrix
}