const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", (event) => {
	if (nameIn.value == "") {
		nameOut.textContent = "Anonymous";
	} else {
		nameOut.textContent = event.currentTarget.value;
	}
});
