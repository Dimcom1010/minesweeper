import { matrixWithBombs } from "./index.js"

export function clickCheker(x, y) {
    const pressedBox = matrixWithBombs[y][x]
    return pressedBox === 'bomb'
}
//Text complited
