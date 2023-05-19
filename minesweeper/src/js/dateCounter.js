import { variables } from "./variables.js";
export function startDateCounter() {
  variables.dateStart=new Date();
  }
export function endDateCounter() {
  variables.dateEnd=new Date();
  variables.secCount=Math.round(parseFloat((variables.dateEnd-variables.dateStart)/1000) * 100) / 100;
  }
