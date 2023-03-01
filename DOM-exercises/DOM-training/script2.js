const body = document.body

const div = document.createElement("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// // div.innerText = "Hellooooooo"
// // div.textContent = "Double helloooo"
// const strong = document.createElement("strong")
// strong.innerText = "Hello double time"

// div.innerHTML = "<strong>Hellloooooooo</strong>"

// div.append(strong)
// body.append(div)

// spanBye.remove()

console.log(spanHi.setAttribute("title", "monkey"))
spanHi.id = "Monkeys"
spanHi.innerHTML = "Monkeys"
spanHi.removeAttribute("id")

spanHi.classList.add("power")
spanHi.style.color = "red"
spanHi.style.backgroundColor = "yellow"