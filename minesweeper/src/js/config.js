import { selectLevel } from "./index.js";
import { variables } from "./variables.js";
import { updateClickCounter } from "./init.js";
export const config = {
    width: 10,
    height: 10,
    bombs: 20,
    level: { name: "", value: 0,info:'' },
    levelConfinArray: [
        { name: "Для тестов ", value: 1,info:'(5x5 2 бомбы)' },
        { name: "Лёгкий ", value: 2,info:'(10x10 10 бомб)' },
        { name: "Средний ", value: 3,info:'(15x15 30 бомб)' },
        { name: "Тяжёлый ", value: 4 ,info:'(20x20 100 бомб)'},
    ],
    difficultyLevel: (levet) => _setDifficultyLevel(levet),
};
function _setDifficultyLevel(levet) {
    if (levet.value == 1) {
        config.bombs = 2;
        config.width = 5;
        config.height = 5;
    }
    if (levet.value == 2) {
        config.bombs = 10;
        config.width = 10;
        config.height = 10;
    }
    if (levet.value == 3) {
        config.bombs = 30;
        config.width = 15;
        config.height = 15;
    }
    if (levet.value == 4) {
        config.bombs = 100;
        config.width = 20;
        config.height = 20;
    }
    config.level.name=config.levelConfinArray[levet.value-1].name;
    config.level.value=levet.value;
    config.level.info= `(${config.width}X${config.height} ${config.bombs} бомб )`
    variables.clickCounter = 0;
    updateClickCounter();
    selectLevel();
}

export const savelocalUser = () =>
    localStorage.setItem("minesweeperUser", JSON.stringify(variables.userName));
export const loadlocalStorageUser = () => {
    const userNamelocalStorage = JSON.parse(
        localStorage.getItem("minesweeperUser")
    );
    if (userNamelocalStorage) {
        variables.userName = userNamelocalStorage;
    }
};
