function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const number = document.querySelector("input");
const btnCreate = document.querySelector("data-create");
const btnDestroy = document.querySelector("data-destroy");
const createBox = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
	for (let i = 0; i <= number.value; i++) {
		let div = document.createElement("div");
		createBox.append("div");
	}
}
