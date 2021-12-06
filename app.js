const Translatebtn = document.querySelector(".translate-btn");
const txtInput = document.querySelector(".txt-input");
console.log(txtInput);
function clickEventHandler() {
  console.log("clicked!");
  console.log("Input", txtInput.value);
}

Translatebtn.addEventListener("click", clickEventHandler);
