import {mainMenu} from "./mainMenu.js"
export class Modal{
    isOpenMenu=false

    init() {
        const wrapper = document.querySelector('.wrapper');
        
        const back = document.createElement('div');
        back.classList.add('back');
        back.classList.add('back_hidden');
        wrapper.appendChild(back)
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.classList.add('modal_hidden');
        back.appendChild(modal)
    }
    open() {
        const back = document.querySelector('.back');
        const modal = document.querySelector('.modal');
        back.classList.remove('back_hidden');
        modal.classList.remove('modal_hidden');
        this.addContent(mainMenu())

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
        console.log('node',node)
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





