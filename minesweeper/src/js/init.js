import { Box } from "./Box.js"
export function init(countBoxWidth, countBoxHeight, matrix) {

    const boxWidth = 100 / countBoxWidth
    const boxHeight = 100 / countBoxHeight

    const body = document.querySelector('body');
    body.classList.add('body');



    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container)

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    container.appendChild(wrapper);

    matrix.forEach((e,y) => {
        e.forEach((i,x) => {
            const box = new Box(boxWidth, boxHeight,x,y)
            wrapper.appendChild(box.creater());
        })
    });


}
//Text complited
