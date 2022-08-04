"use strict";
const input = document.querySelector("#validation-input");

const validation = () => {
	if (input.value.length == input.getAttribute("data-length")) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else {
		input.classList.add("invalid");
		input.classList.remove("valid");
	}
};

input.addEventListener("blur", validation);

// second solution

// document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') == this.value.length) {
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };
