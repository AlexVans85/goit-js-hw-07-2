const categories = document.querySelector(".item")

const amountCategories = categories.getElementsByTagName("li").length
console.log(amountCategories)

const nameOfCategories = categories.firstElementChild.textContent
console.log(nameOfCategories)

console.log(`Категория: ${nameOfCategories}`)
console.log(`Количество: ${amountCategories}`)
