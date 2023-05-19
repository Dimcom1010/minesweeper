export function matrixInfoFiller(matrixInfo, matrixWithBombs) {
  matrixWithBombs.forEach((y, indexY) => {
    y.forEach((x, indexX) => {
      if (matrixWithBombs[indexY][indexX] === "bomb") {
        matrixInfo[indexY][indexX]++;
        matrixInfo[indexY][indexX + 1]++;
        matrixInfo[indexY][indexX + 2]++;
        matrixInfo[indexY + 1][indexX]++;
        matrixInfo[indexY + 1][indexX + 1]++;
        matrixInfo[indexY + 1][indexX + 2]++;
        matrixInfo[indexY + 2][indexX]++;
        matrixInfo[indexY + 2][indexX + 1]++;
        matrixInfo[indexY + 2][indexX + 2]++;
      } else {
      }
    });
  });
  matrixInfo.shift();
  matrixInfo.pop();
  matrixInfo.forEach((e) => {
    e.shift();
    e.pop();
  });
  return matrixInfo;
}
