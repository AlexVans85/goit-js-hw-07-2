// оздай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div,
// // сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  create: document.querySelector('button[data-action = "render"]'),
  reset: document.querySelector('button[data-action = "destroy"]'),
  divGeneral: document.querySelector("#controls"),
  box: document.querySelector("#boxes"),
  input: document.querySelector("#controls > input"),
}

function createBoxes(amount) {
  let width = 30
  let height = 30
  let squareArr = []
  for (let index = 0; index < amount; index++) {
    const square = document.createElement("div")
    square.style.width = `${width}px`
    square.style.height = `${height}px`
    square.style.background = get_rand_color()
    square.style.marginTop = "10px"

    width += 20
    height += 20

    refs.box.append(square)
  }
}

refs.create.addEventListener("click", qwonyitySquears)

function qwonyitySquears() {
  const inputValue = Number(refs.input.value)
  createBoxes(inputValue)
  refs.input.value = ""
}

refs.reset.addEventListener("click", resetFn)

function resetFn() {
  refs.box.innerHTML = ""
  refs.input.value = ""
}

function get_rand_color() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16)
  while (color.length < 6) {
    color = "0" + color
  }
  return "#" + color
}

refs.input.addEventListener("change", () => (refs.box.innerHTML = ""))
