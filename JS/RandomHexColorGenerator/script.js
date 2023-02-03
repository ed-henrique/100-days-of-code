const color = document.querySelector(".random-color");
const generateColorButton = document.querySelector(".generate-color");

const generateRandomColor = () => {
	const randomColor = `#${Math.random().toString(16).substring(2, 8)}`;

	color.innerHTML = randomColor;
	document.body.style.backgroundColor = randomColor;
};

generateRandomColor();

generateColorButton.addEventListener("click", generateRandomColor);
