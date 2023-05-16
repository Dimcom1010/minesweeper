import { Box } from "./Box.js"
import { modal } from "./index.js"

export function init(countBoxWidth, countBoxHeight, matrix) {

    const boxWidth = 100 / countBoxWidth
    const boxHeight = 100 / countBoxHeight

    const body = document.querySelector('body');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    body.classList.add('body');


    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container)

    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header)

    const result = document.createElement('div');
    result.classList.add('result');
    header.appendChild(result)
    const resultUser = document.createElement('div');
    resultUser.classList.add('result__user');
    resultUser.innerText='Игрок';
    result.appendChild(resultUser)

    const resultComplexity = document.createElement('div');
    resultComplexity.classList.add('result__clicks');
    resultComplexity.innerText='Сложность';
    result.appendChild(resultComplexity)
    
    const resultClicks = document.createElement('div');
    resultClicks.classList.add('result__clicks');
    resultClicks.innerText='Количество кликов';
    result.appendChild(resultClicks)

    const menuButton = document.createElement('div');
    menuButton.classList.add('button');
    menuButton.innerText='Menu';
    menuButton.addEventListener('click',()=>modal.click())
    header.appendChild(menuButton)

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

