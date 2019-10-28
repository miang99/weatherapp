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

  // show temperature
  console.log(response.main.temp);
  /*createElement({
    parent: container,
    element: "p",
    className: "description",
    content: response.main.temp
  }); */
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
  console.log(content);
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

// contain wind.speed, clouds.all, rain.1h, rain.3h, .....
function createTable() {
  // loop
}

// create error notice
function coverToCelcius(temp) {
  return temp - 273.15;
}

export { displayResult };
