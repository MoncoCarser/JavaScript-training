var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function randomColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

function backgroundColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomColours() {
	color1.setAttribute("value", "#" + randomColor());
	color2.setAttribute("value", "#" + randomColor());
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
} // BUG: after adjusting colours freely, button stops working.

color1.addEventListener("input", backgroundColor)
color2.addEventListener("input", backgroundColor)

