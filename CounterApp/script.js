const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

const add = document.querySelector(".add");
const sub = document.querySelector(".subtract");
const resetCount = document.querySelector(".reset");

buttons.addEventListener("click", (e) => {
    const button = e.target.classList;

	if (button.contains("add")) {
		count.innerHTML++;
	} else if (button.contains("reset")) {
        count.innerHTML = 0;
	} else if (button.contains("subtract")) {
        count.innerHTML--;
	}
    
    setColor();
});

function setColor() {
	if (count.innerHTML > 0) {
		count.style.color = "yellow";
	} else if (count.innerHTML < 0) {
		count.style.color = "orangered";
	} else {
		count.style.color = "var(--white)";
	}
}

/*
add.addEventListener("click", () => {
	count.innerHTML++;
});

sub.addEventListener("click", () => {
	count.innerHTML--;
});

resetCount.addEventListener("click", () => {
	count.innerHTML = 0;
});
*/
