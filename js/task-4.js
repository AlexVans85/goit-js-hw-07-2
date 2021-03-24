const decrBtn = document.querySelector('button[data-action = "decrement"]')
const incrBtn = document.querySelector('button[data-action = "increment"]')
const counter = document.querySelector("#value")

// let counterValue = 0

decrBtn.addEventListener("click", () => {
  //   counterValue -= 1
  counter.textContent = Number(counter.textContent) - 1
})

incrBtn.addEventListener("click", () => {
  counter.textContent = Number(counter.textContent) + 1
})
