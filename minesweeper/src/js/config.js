
import {restart} from "./index.js"
export const config = {
    userName: '',
    width: 10,
    height: 10,
    bombs: 20,
    levelConfinArray: [
        { name: 'Очень лёгкий (5x5 3 бомбы)', value: 1 },
        { name: 'Лёгкий (10x10 10 бомб)', value: 2 },
        { name: 'Средний (15x15 30 бомб)', value: 3 },
        { name: 'Тяжёлый (20x20 100 бомб)', value: 4 }],
    difficultyLevel: (levet) => _setDifficultyLevel(levet)

}
function _setDifficultyLevel(levet) {
    console.log('_setDifficultyLevel');
    if (levet == 1) {
        config.bombs = 3;
        config.width = 5;
        config.height = 5;
    }
    if (levet == 2) {
        config.bombs = 10;
        config.width = 10;
        config.height = 10;
    }
    if (levet == 3) {
        config.bombs = 30;
        config.width = 15;
        config.height = 15;
    }
    if (levet == 4) {
        config.bombs = 100;
        config.width = 20;
        config.height = 20;
    }
    restart()
}