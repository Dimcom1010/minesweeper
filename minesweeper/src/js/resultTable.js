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

export const getResult = (level) =>
    resultTable
        .filter((e) => e.level == level)
        .sort((a, b) => a.clickCounter - b.clickCounter);
export const setResult = () => {
    resultTable = [
        ...resultTable,
        {
            name: config.userName,
            result: variables.clickCounter,
            level: config.level.value,
            levelName: config.level.name,
        },
    ];
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
    console.log("resultTable1", resultTable);
};

export function getNameLevel(nuber) {
    return config.levelConfinArray.find((e) => e.value == nuber).name;
}
