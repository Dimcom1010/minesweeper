
import { matrixZerroMapWithNeighbors } from "./index.js"
import { variables } from "./variables.js";
import { updateClickCounter } from "./init.js";
export function multiOpener(x, y) {
    matrixZerroMapWithNeighbors.forEach(e => {
        if (e) {
            e.forEach(i => {
                if (i[0] == y && i[1] == x) {
                    e.forEach(box => {
                        const constboxs = document.querySelector(`div[x="${box[1]}"][y="${box[0]}"]`);
                        const clickEvent = new Event("click");
                        const clicks=variables.clickCounter
                        constboxs.dispatchEvent(clickEvent);
                        variables.clickCounter=clicks;
                        updateClickCounter()
                    })
                }
            })
        }
    })
}
//Text complited

