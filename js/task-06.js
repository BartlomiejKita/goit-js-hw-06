const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
	if (input.value.length == input.getAttribute("data-length")) {
		input.classList.remove("invalid");
		input.classList.add("valid");
	} else {
		input.classList.add("invalid");
		input.classList.remove("valid");
	}
});


// second solution


// document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) {
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };
