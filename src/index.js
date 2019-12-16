import { getInput, getInfo } from "./fetch";

document.querySelector("#input").addEventListener("submit", e => {
  e.preventDefault();
  console.log("hello");
  document.querySelector("#form").style.display = "none";
  getInfo(getInput());
});
