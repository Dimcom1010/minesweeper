import { loadlocalStorageResult } from "./resultTable.js";
import { loadlocalStorageUser } from "./config.js";

export const localStorage = () => {
    loadlocalStorageResult();
    loadlocalStorageUser();
};
