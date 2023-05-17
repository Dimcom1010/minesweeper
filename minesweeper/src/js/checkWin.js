
import { matrixWithBombs } from "./index.js"

export const checkWin=()=> matrixWithBombs.reduce((acc,curr)=>[...acc,...curr],[]).includes(0)


