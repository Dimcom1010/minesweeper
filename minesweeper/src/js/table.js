import {getResult} from "./resultTable.js"
export function table() {

    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const thName = document.createElement('th');
    const thClick = document.createElement('th');
    const thLevel = document.createElement('th');

    thName.innerText='имя'
    tr.appendChild(thName)

    thClick.innerText='количество кликов'
    tr.appendChild(thClick)

    thLevel.innerText='сложность'
    tr.appendChild(thLevel)
    table.appendChild(tr)

    for (let x=1;x<=4;x++){
        if (getResult(x).length){
            getResult(x).forEach(e=>{
                const tr = document.createElement('tr');
                const thName = document.createElement('td');
                const thClick = document.createElement('td');
                const thLevel = document.createElement('td');
                thName.innerText=e.name
                tr.appendChild(thName)
                thClick.innerText=e.result
                tr.appendChild(thClick)
                thLevel.innerText=e.levelName
                tr.appendChild(thLevel)
                table.appendChild(tr)
            })
        }
    }

    


    
    return table
}

