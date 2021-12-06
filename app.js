const Translatebtn = document.querySelector(".translate-btn");
const txtInput = document.querySelector(".txt-input");
const Output = document.querySelector(".Output");
const url = "https://api.funtranslations.com/translate/minion.json";
// const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
  return url + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occuerd", error);
}

function clickEventHandler() {
  const inputText = txtInput.value; //taking input

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      const translatetext = json.contents.translated;
      Output.innerText = translatetext;
    }) //output
    .catch(errorHandler);
}

Translatebtn.addEventListener("click", clickEventHandler);
