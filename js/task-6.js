{
  /* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" /> */
}

console.log("lllllssss")

const refs = {
  input: document.querySelector("#validation-input"),
}

refs.input.addEventListener("blur", onInputValidation)

function onInputValidation(event) {
  console.log(event.currentTarget.value)

  if (event.currentTarget.value.length === +refs.input.dataset.length) {
    refs.input.classList.add("valid")
    refs.input.classList.remove("invalid")
  } else {
    refs.input.classList.add("invalid")
    refs.input.classList.remove("valid")
  }
}
