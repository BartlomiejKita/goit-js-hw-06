function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {
	bodyColor.style.backgroundColor = getRandomHexColor();
	color.textContent = getRandomHexColor();
});
