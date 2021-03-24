const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

ingredients.forEach((el) => {
  const liRef = document.createElement("li")
  liRef.textContent = el

  const parentUl = document.querySelector("#ingredients")
  parentUl.append(liRef)
})
