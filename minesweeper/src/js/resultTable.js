import { variables } from "./variables.js";
import { config } from "./config.js";

export let resultTable = [];
export let isSetResult = { value: false };

export const getResult = (level) =>
  resultTable
    .filter((e) => e.value == level)
    .sort((a, b) => a.secCount - b.secCount);

export const setResult = () => {
  if (!isSetResult.value) {
    console.log("variables", JSON.parse(JSON.stringify(variables)));
    resultTable = [
      ...resultTable,
      {
        name: variables.userName,
        result: variables.clickCounter,
        value: config.level.value,
        levelName: config.level.name,
        secCount: variables.secCount,
      },
    ];
    isSetResult.value = true;
  }

  savelocalStorage();
};

export const savelocalStorage = () =>
  localStorage.setItem("minesweeperResultTable", JSON.stringify(resultTable));
export const loadlocalStorageResult = () => {
  const resultTablelocalStorage = JSON.parse(
    localStorage.getItem("minesweeperResultTable")
  );
  if (resultTablelocalStorage) {
    resultTable = resultTablelocalStorage;
  }
};

export function getNameLevel(nuber) {
  return config.levelConfinArray.find((e) => e.value == nuber).name;
}
