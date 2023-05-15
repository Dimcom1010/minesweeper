import {matrixInfoBombsAround} from "./index.js"
import {matrixZerroMap} from "./index.js"


export function createZerroMap(){

    const x=0;
    const y=0;
    const maxX=matrixInfoBombsAround.length-1
    const maxY=matrixInfoBombsAround[0].length-1
    const startMapZeroIndex=0
    const checked =[]

    const _chekedFunc=(x,y)=>{
        
    }

    const _rec=(x,y)=>{
        console.log('_rec(x,y)')
        checked.push(`${x}/${y}`)
        if (!matrixInfoBombsAround[y][x]){
            matrixZerroMap.push([])
            _chekedFunc(x,y)
            
        }else{
            if(x==maxX && y==maxY){ return }

            if(x<=maxX){
                x++;
            }else{
                y++
                x=0;
            }
            _rec(x,y)
        }
    }

  

    console.log('matrixInfoBombsAround!',matrixInfoBombsAround);

   _rec(x,y)
   

}
//Text complited