
import { modal } from "./index.js"

export function addMenuButton() {
    remuveMenuButton()
    const header = document.querySelector('.header');
    const menuButton = document.createElement('div');
    menuButton.classList.add('button');
    menuButton.setAttribute('type', 'main')
    menuButton.innerText = 'Menu';
    menuButton.addEventListener('click', () => modal.click())
    header.appendChild(menuButton)
}
export function remuveMenuButton() {
    const menuButton = document.querySelector('[type="main"]');
    menuButton && (menuButton.remove())
}




