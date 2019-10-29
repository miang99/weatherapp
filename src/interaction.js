function showResetButton() {
  console.log("show reset button");
  const resetButton = document.querySelector("#reset");
  console.log(resetButton);
  resetButton.style.display = "block";
  resetButton.addEventListener("click", reset);
}

function reset(e) {
  // hide the feedback section
  e.target.style.display = "none";
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#result").style.display = "none";
  document.querySelector("#error").style.display = "none";

  // show input section
  const input = document.querySelector("#form");
  input.value = "";
  input.style.display = "block";
}

export { showResetButton };
