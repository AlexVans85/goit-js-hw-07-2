// console.log("task 3")
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]

const ulList = document.querySelector("#gallery")
console.log(ulList)

images.forEach((el) => {
  const t = ulList.insertAdjacentHTML(
    "beforeend",
    `<li class="photo-item"><img class="img-item" src=${el.url} alt=${el.alt} width="320" /></li>`
  )
})

ulList.style.color = "green"

// разобраться со стилями
// некоторые работают некоторые
// не работают:
// 1. не становятся в ряд
// 2. не работает листстайл нон - ulList.style.listStyle = "none"
