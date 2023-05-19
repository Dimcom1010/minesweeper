import { getResult } from "./resultTable.js";
export function table() {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const thName = document.createElement("th");
  const thClick = document.createElement("th");
  const thSec = document.createElement("th");
  const thLevel = document.createElement("th");

  thName.innerText = "Name";
  tr.appendChild(thName);

  thClick.innerText = "clicks";
  tr.appendChild(thClick);

  thSec.innerText = "sec.";
  tr.appendChild(thSec);

  thLevel.innerText = "level";
  tr.appendChild(thLevel);

  table.appendChild(tr);
  for (let x = 4; x >= 1; x--) {
    if (getResult(x)?.length) {
      getResult(x).forEach((e) => {
        const tr = document.createElement("tr");
        const thName = document.createElement("td");
        const thClick = document.createElement("td");
        const thLevel = document.createElement("td");
        const thSec = document.createElement("td");
        thName.innerText = e.name;
        tr.appendChild(thName);
        thClick.innerText = e.result;
        tr.appendChild(thClick);
        thSec.innerText = `${e.secCount}s`;
        tr.appendChild(thSec);
        thLevel.innerText = e.levelName;
        tr.appendChild(thLevel);

        table.appendChild(tr);
      });
    }
  }

  return table;
}
