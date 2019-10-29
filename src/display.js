// Header for both success and failure result
function displayResult(response) {
  const container = document.querySelector("#result");
  console.log(response.name);

  //create header
  createContent({
    parent: container,
    element: "h1",
    nameClass: "header",
    content: `Weather in ${response.name}`
  });

  // create description
  createContent({
    parent: container,
    element: "p",
    nameClass: "description",
    content: response.weather[0].description
  });

  // show temperature
  const temp = Math.round(convertToCelcius(response.main.temp));
  createContent({
    parent: container,
    element: "h3",
    className: "description",
    content: `${temp}\xB0C`
  });
}

function createContent({ parent, element, nameClass, content }) {
  console.log("in process");
  const child = document.createElement(element);
  child.innerText = content;
  child.className = nameClass;
  parent.appendChild(child);
}

// contain wind.speed, clouds.all, rain.1h, rain.3h, .....
function createTable() {
  // loop
}

// create error notice
function convertToCelcius(temp) {
  return temp - 273.15;
}

export { displayResult };
