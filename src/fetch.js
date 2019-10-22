function getInput() {
    const input = document.querySelector("#info").value;
    console.log(input);
    return input;
}

async function getInfo(input) {
    try {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=";
        const APIkey = "&APPID=c01628e1847e606b2aa11a01139d37e2";
        const response = await fetch(url + input + APIkey, {
            mode: "cors"
        });
        console.log(response);
    } catch {
        console.log("get error");
    }
}
export { getInput, getInfo };