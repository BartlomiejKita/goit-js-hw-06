let counterValue = 0;

const totalValue = document.getElementById("value");
totalValue.innerHTML = counterValue;

const increment = () => {
	counterValue++;
	totalValue.innerHTML = counterValue;
};

const decrement = () => {
	counterValue--;
	totalValue.innerHTML = counterValue;
};

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
