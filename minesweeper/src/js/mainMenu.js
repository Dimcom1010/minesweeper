import { modal } from "./index.js"
import { resultMenu } from "./resultMenu.js"
import { levelMenu } from "./levelMenu.js"
export function mainMenu() {
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('maim');
    

    const mainHader = document.createElement('div');
    mainHader.classList.add('maim__header');
    mainHader.innerText='Осносное меню'
    mainMenu.appendChild(mainHader)

    const mainBody = document.createElement('div');
    mainBody.classList.add('maim__body');
    mainBody.appendChild(levelMenu())
    mainMenu.appendChild(mainBody)

    const mainFooter = document.createElement('div');
    mainFooter.classList.add('maim__footer');

    const resultButton = document.createElement('div');
    resultButton.classList.add('button');
    resultButton.innerText='Результаты';
    resultButton.addEventListener('click',()=>{modal.addContent(resultMenu())})

    mainFooter.appendChild(resultButton)
    
    mainMenu.appendChild(mainFooter)
    
    return mainMenu
}

