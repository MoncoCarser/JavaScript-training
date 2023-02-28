
const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
	console.log("Grandparent");
})

parent.addEventListener("click", e => {
	console.log("Parent");
})

child.addEventListener("click", e => {
	console.log("Child");
}, { once: true}) // with once: true this event only happens on the first time

document.addEventListener("click", e => {
	console.log("Document");
})