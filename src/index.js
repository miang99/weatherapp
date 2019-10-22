import { getInput, getInfo } from "./fetch.js";
import {get } from "http";
const run = e => {
    e.preventDefault;
};
document.querySelector("#input").addEventListener("submit", e => {
    e.preventDefault();
    getInfo(getInput());
});