import { config } from "./config.js";

export const checkWin = () => {
    const conunt = document.querySelectorAll(".box_clear");
    return conunt.length === config.height * config.height - config.bombs;
};
