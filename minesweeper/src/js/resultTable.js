

import {variables} from "./variables.js"
import {config} from "./config.js"


export let resultTable=[

 ]

 export const getResult =(level)=>  resultTable.filter(e=>e.level==level).sort((a,b)=>a.clickCounter-b.clickCounter);
 export const setResult =()=>resultTable= [...resultTable, {name:config.userName,result: variables.clickCounter,level:config.level.value,levelName:config.level.name}];
 
 export const savelocalStorage =()=> localStorage.setItem("minesweeperResultTable", JSON.stringify(resultTable));
 export const loadlocalStorageResult =()=>resultTable=JSON.parse(localStorage.getItem("minesweeperResultTable"));
 
 export function getNameLevel(nuber){return config.levelConfinArray.find(e=>e.value==nuber).name}