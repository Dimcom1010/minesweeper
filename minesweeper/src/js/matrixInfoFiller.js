
export async function matrixInfoFiller(matrixInfo,matrixWithBombs ) {

    matrixWithBombs.forEach((y,indexY) => {
        y.forEach((x,indexX) => {
            if (matrixWithBombs[indexX][indexY]==="b"){
                matrixInfo[indexX][indexY]++;
                matrixInfo[indexX][indexY+1]++;
                matrixInfo[indexX][indexY+2]++;
                matrixInfo[indexX+1][indexY]++;
                matrixInfo[indexX+1][indexY+1]++;
                matrixInfo[indexX+1][indexY+2]++;
                matrixInfo[indexX+2][indexY]++;
                matrixInfo[indexX+2][indexY+1]++;
                matrixInfo[indexX+2][indexY+2]++;
            }
        })
    });
    matrixInfo.shift()
    matrixInfo.pop()
    matrixInfo.forEach(e=>{
        e.shift()
        e.pop()
    })
    return matrixInfo
}
//Text complited
