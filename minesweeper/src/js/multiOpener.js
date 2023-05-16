
import { matrixZerroMapWithNeighbors } from "./index.js"

export function multiOpener(x, y) {
    matrixZerroMapWithNeighbors.forEach(e => {
        if (e) {
            e.forEach(i => {
                if (i[0] == y && i[1] == x) {
                    e.forEach(box => {
                        const constboxs = document.querySelector(`div[x="${box[1]}"][y="${box[0]}"]`);
                        const clickEvent = new Event("click");
                        constboxs.dispatchEvent(clickEvent);
                    })
                }
            })
        }
    })
}
//Text complited

