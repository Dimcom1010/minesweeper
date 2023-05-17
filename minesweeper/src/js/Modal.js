import {mainMenu} from "./mainMenu.js"
import {endMenu} from "./endMenu.js"
import {variables} from "./variables.js"
export class Modal{
    isOpenMenu=false

    init() {
        const body = document.querySelector('body');
        
        const back = document.createElement('div');
        back.classList.add('back');
        back.classList.add('back_hidden');
        body.appendChild(back)

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.classList.add('modal_hidden');

        const cross = document.createElement('div');
        cross.classList.add('cross');

        cross.addEventListener('click',()=>{
            variables.isPlay && this.close();
        },true)

        back.appendChild(cross)
        back.appendChild(modal)
    }
    open() {
        const back = document.querySelector('.back');
        const modal = document.querySelector('.modal');
        back.classList.remove('back_hidden');
        modal.classList.remove('modal_hidden');
        this.addContent(mainMenu())

    }
    openEndMenu(){
        const back = document.querySelector('.back');
        const modal = document.querySelector('.modal');
        back.classList.remove('back_hidden');
        modal.classList.remove('modal_hidden');
        this.addContent(endMenu())
    }
    close() {
        this.clearContent()
        const back = document.querySelector('.back');
        const modal = document.querySelector('.modal');
        back.classList.add('back_hidden');
        modal.classList.add('modal_hidden');

    }
    click(){
        this.isOpenMenu=!this.isOpenMenu
        this.isOpenMenu?this.open():this.close()
    }
    addContent(node){
        const modal = document.querySelector('.modal');
        while (modal.firstChild) {
            modal.removeChild(modal.firstChild);
          }
        modal.appendChild(node)
    }
    clearContent(){
        const modal = document.querySelector('.modal');
        while (modal.firstChild) {
            modal.removeChild(modal.firstChild);
          }
    }
}





