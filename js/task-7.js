const refs = {
  inputValue: document.querySelector("#font-size-control"),
  spanValue: document.querySelector("#text"),
}

refs.inputValue.addEventListener("input", onInputChange)
function onInputChange(event) {
  refs.spanValue.style.fontSize = event.currentTarget.value + "px"
}
