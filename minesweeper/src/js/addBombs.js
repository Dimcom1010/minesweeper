import { getRandom } from "./random.js"
export async function addBombs(bombs, matrix) {
    let iteration = bombs;
    const matrixW = matrix.length;
    const matrixH = matrix[0].length;
    while (iteration) {
        const x = getRandom(matrixW - 1);
        const y = getRandom(matrixH - 1);
        const selectMatrixPoint=matrix[x][y]
        if(!selectMatrixPoint){
            matrix[x][y]='b';
            iteration--;
        }
    }
    return matrix
}
//Text complited