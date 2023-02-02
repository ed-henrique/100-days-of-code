const number = document.querySelector(".random-number");
const generateNumberButton = document.querySelector(".generate-number");

const INCLUSIVE_LOWER_LIMIT = 0;
const EXCLUSIVE_UPPER_LIMIT = 11;

const generateRandomNumber = () => {
	const randomNumber = Math.floor(
		Math.random() * EXCLUSIVE_UPPER_LIMIT + INCLUSIVE_LOWER_LIMIT,
	);

	number.innerHTML = randomNumber;
};

generateRandomNumber();

generateNumberButton.addEventListener("click", generateRandomNumber);
