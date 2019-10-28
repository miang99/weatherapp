// Header for both success and failure result
function displayResult(response) {
  const container = document.querySelector("#result");
  console.log(response.name);

  //create header
  createElement({
    parent: container,
    element: "h1",
    className: "header",
    content: response.name
  });

  // create description
  createElement({
    parent: container,
    element: "p",
    className: "description",
    content: response.weather[0][description]
  });
}
/*
function createHeader({ parent, city }) {
  const header = document.createElement("h1");
  header.innerText = `Weather in ${city}`;
  header.className = "header";
  parent.appendChild(header);
}
*/
function creatElement({ parent, element, className, content }) {
  const child = document.createElement(element);
  child.innerText = content;
  child.className = className;
  parent.appendChild(child);
}
/*
function createDescription({ parent, description }) {
  const child = document.createElement("div");
  child.innerText = description;
  child.className = "description";
  parent.appendChild(child);
}

function createTempDescription({ parent, temp, icon }) {
  const child = document.createElement("p");
  child.innerText = converToCelcius(temp);
  parent.appendChild(child);
}
*/
function createTable() {
  // loop
}

// create error notice
function coverToCelcius(temp) {
  //convert
}

export { displayResult };
