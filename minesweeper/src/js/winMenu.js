import { modal } from "./index.js"
import { resultMenu } from "./resultMenu.js"
import { mainMenu } from "./mainMenu.js"
import { variables } from "./variables.js"

export function winMenu() {
    const winMenu = document.createElement('div');
    winMenu.classList.add('maim');

    const winHader = document.createElement('div');
    winHader.classList.add('maim__header');
    winHader.innerText='Вы победили'
    winMenu.appendChild(winHader)
    const resultHader = document.createElement('div');
    resultHader.classList.add('maim__result');
    resultHader.innerText=`Результат: ${variables.clickCounter} кликов ${variables.secCount}с`
    winMenu.appendChild(resultHader)

    const winBody = document.createElement('div');
    winBody.classList.add('maim__body');

    const winGameButton = document.createElement('div');
    winGameButton.classList.add('button');
    winGameButton.innerText='Попробовать ещё';
    winGameButton.addEventListener('click',()=>{modal.addContent(mainMenu())})
    winBody.appendChild(winGameButton);
    winMenu.appendChild(winBody)

    const endFooter = document.createElement('div');
    endFooter.classList.add('maim__footer');

    const resultButton = document.createElement('div');
    resultButton.classList.add('button');
    resultButton.innerText='Результаты';
    resultButton.addEventListener('click',()=>{modal.addContent(resultMenu())})

    endFooter.appendChild(resultButton)
    
    winMenu.appendChild(endFooter)
    
    return winMenu
}

