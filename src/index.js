import { getInput, getInfo } from "./fetch";

document.querySelector("#input").addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#form").style.display = "none";
  getInfo(getInput());
});
