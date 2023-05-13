
export async function matrixCreater(matrixWidth, matrixHeight) {
    const matrix =
        Array.from({ length: matrixHeight }, () =>
            Array.from({ length: matrixWidth }, () => 0
            ));

    return matrix
}
//Text complited
