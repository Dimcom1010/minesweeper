
import { selectLevel, matrixWithFirstClick, matrixWithBombs, matrixInfoBombsAround, matrixZerroMapWithNeighbors } from "./index.js"
import { variables } from "./variables.js"
import { updateClickCounter } from "./init.js";
export const config = {
    userName: 'User',
    width: 10,
    height: 10,
    bombs: 20,
    level: { name: '', value: 0 },
    levelConfinArray: [
        { name: 'Очень лёгкий (5x5 3 бомбы)', value: 1 },
        { name: 'Лёгкий (10x10 10 бомб)', value: 2 },
        { name: 'Средний (15x15 30 бомб)', value: 3 },
        { name: 'Тяжёлый (20x20 100 бомб)', value: 4 }],
    difficultyLevel: (levet) => _setDifficultyLevel(levet)

}
function _setDifficultyLevel(levet) {
    if (levet.value == 1) {
        config.bombs = 3;
        config.width = 5;
        config.height = 5;
        config.level = { name: 'Очень лёгкий (5x5 3 бомбы)', value: 1 }
    }
    if (levet.value == 2) {
        config.bombs = 10;
        config.width = 10;
        config.height = 10;
        config.level = { name: 'Лёгкий (10x10 10 бомб)', value: 2 }
    }
    if (levet.value == 3) {
        config.bombs = 30;
        config.width = 15;
        config.height = 15;
        config.level = { name: 'Средний (15x15 30 бомб)', value: 3 }
    }
    if (levet.value == 4) {
        config.bombs = 100;
        config.width = 20;
        config.height = 20;
        config.level = { name: 'Тяжёлый (20x20 100 бомб)', value: 4 }
    }


    console.log(config)
    variables.clickCounter = 0
    updateClickCounter()
    selectLevel()
}

const configData = {
    config: {
        userName: config.userName,
        width: config.width,
        height: config.height,
        bombs: config.bombs,
        level: { name: config.level.name, value: config.level.value },
    },
    matrixs: {
        matrixWithFirstClick: JSON.parse(JSON.stringify(matrixWithFirstClick)),
        matrixWithBombs: JSON.parse(JSON.stringify(matrixWithBombs)),
        matrixInfoBombsAround: JSON.parse(JSON.stringify(matrixInfoBombsAround)),
        matrixZerroMapWithNeighbors: JSON.parse(JSON.stringify(matrixZerroMapWithNeighbors)),
    }
}

export const savelocalStorageConfig = () => localStorage.setItem("minesweeperResultTable", JSON.stringify(resultTable));
export const loadlocalStorageResultConfig = () => resultTable = JSON.parse(localStorage.getItem("minesweeperResultTable"));
