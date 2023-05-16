import { modal } from "./index.js"
import { mainMenu } from "./mainMenu.js"
export function resultMenu() {
    const resultMenu = document.createElement('div');
    resultMenu.classList.add('maim');
    

    const resultHader = document.createElement('div');
    resultHader.classList.add('maim__header');
    resultHader.innerText='Результаты'
    resultMenu.appendChild(resultHader)

    const resultBody = document.createElement('div');
    resultBody.classList.add('maim__body');
    resultMenu.appendChild(resultBody)

    const resultFooter = document.createElement('div');
    resultFooter.classList.add('maim__footer');

    const mainButton = document.createElement('div');
    mainButton.classList.add('button');
    mainButton.innerText='Основное меню';
    mainButton.addEventListener('click',()=>{modal.addContent(mainMenu())})
    resultFooter.appendChild(mainButton)

    resultMenu.appendChild(resultFooter)
    
    return resultMenu
}

