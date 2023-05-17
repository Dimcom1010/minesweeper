
import {selectLevel} from "./index.js"
export const config = {
    userName: '',
    width: 10,
    height: 10,
    bombs: 20,
    level:'',
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
        config.level = levet.name;
    }
    if (levet.value == 2) {
        config.bombs = 10;
        config.width = 10;
        config.height = 10;
        config.level = levet.name;
    }
    if (levet.value == 3) {
        config.bombs = 30;
        config.width = 15;
        config.height = 15;
        config.level = levet.name;
    }
    if (levet.value == 4) {
        config.bombs = 100;
        config.width = 20;
        config.height = 20;
        config.level = levet.name;
    }
    selectLevel()
}