const Translatebtn = document.querySelector(".translate-btn");
const txtInput = document.querySelector(".txt-input");
const Output = document.querySelector(".Output");

function clickEventHandler() {
  Output.innerText = "go to hell " + txtInput.value;
}

Translatebtn.addEventListener("click", clickEventHandler);
