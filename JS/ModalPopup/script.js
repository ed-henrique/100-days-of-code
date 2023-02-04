const modal = document.querySelector(".modal");
const testButton = document.querySelector(".btn");
const modalContent = document.querySelector(".modal-content");

const openModal = (e) => {
	e.preventDefault();
	modal.style.display = "block";
};

const closeModal = () => {
	modalContent.classList.add("slide-up");
	setTimeout(() => {
		modal.style.display = "none";
		modalContent.classList.remove("slide-up");
	}, 500);
};

testButton.addEventListener("click", openModal);
modal.addEventListener("click", closeModal);
