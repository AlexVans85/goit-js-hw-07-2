// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector("#name-input"),
  spanValue: document.querySelector("#name-output"),
}

refs.input.addEventListener("input", onInputChange)

function onInputChange(event) {
  //   refs.spanValue.textContent = event.currentTarget.value
  console.log(refs.spanValue.textContent)

  if (event.currentTarget.value === "") {
    refs.spanValue.textContent = "Незнакомец"
    console.log(refs.spanValue.textContent)
  } else {
    refs.spanValue.textContent = event.currentTarget.value
    console.log(refs.spanValue.textContent)
    //
  }
}
