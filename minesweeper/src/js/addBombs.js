import { getRandom } from "./random.js"

// 'bomb' - обозначение установленной бомбы

export async function addBombs(bombs, matrix) {
    let iteration = bombs;
    const matrixW = matrix.length;
    const matrixH = matrix[0].length;
    while (iteration) {
        const x = getRandom(matrixW );
        const y = getRandom(matrixH );
        const selectMatrixPoint=matrix[x][y]
        if(!selectMatrixPoint){
            matrix[x][y]='bomb';
            iteration--;
        }
    }
    return matrix
}
//Text complited