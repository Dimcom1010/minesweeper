import { variables } from "./variables.js";
import { config } from "./config.js";

export let resultTable = [
    {
        name: "name",
        result: 10,
        level: 1,
        levelName: "такое ",
    },
];
export let isSetResult = { value: false };

export const getResult = (level) =>
    resultTable
        .filter((e) => e.level == level)
        .sort((a, b) => a.clickCounter - b.clickCounter);
export const setResult = () => {
    if (!isSetResult.value) {
        resultTable = [
            ...resultTable,
            {
                name: variables.userName,
                result: variables.clickCounter,
                level: config.level.value,
                levelName: config.level.name,
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
