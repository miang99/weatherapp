import { getInput, getInfo } from "./fetch";

document.querySelector("#input").addEventListener("submit", e => {
    e.preventDefault();
    getInfo(getInput());
});