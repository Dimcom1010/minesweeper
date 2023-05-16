import { config} from "./config.js";
export function levelMenu() {

    const levelMenu = document.createElement('div');
    levelMenu.classList.add('level');
    
    config.levelConfinArray.forEach(e=>{
        const levelItem= document.createElement('div');
        levelItem.classList.add('button');
        levelItem.innerText=e.name;
        levelItem.addEventListener('click',()=>config.difficultyLevel(e.value))
        levelMenu.appendChild(levelItem)

    })



    
    return levelMenu
}

