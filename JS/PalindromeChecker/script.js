const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// I did this one on my own

function palindromeCheck() {
	const word = document.querySelector(".input-text").value;

	let endIndex = word.length - 1;
	let isPalindrome = true;

	if (word.length === 2) {
		isPalindrome = word[0] === word[1];
	}

	for (
		let startIndex = 0;
		Math.abs(startIndex - endIndex) > 1 && isPalindrome;
		startIndex++, endIndex--
	) {
		if (word[startIndex] !== word[endIndex]) {
			isPalindrome = false;
			break;
		}
	}

	isPalindrome
		? (result.innerHTML = `${word.toUpperCase()} is a palindrome!`)
		: (result.innerHTML = `${word.toUpperCase()} is NOT a palindrome!`);
}

// This one is from the course

function palindromeCheck2() {
	const word = document.querySelector(".input-text").value;
	const wordLength = word.length;

	const start = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();
	const end = word
		.substring(Math.round(wordLength / 2), wordLength)
		.toLowerCase();

	// const flippedLastPart = end.split("").reverse().join("");
	const flippedLastPart = [...end].reverse().join("");

	start === flippedLastPart
		? (result.innerHTML = `${word.toUpperCase()} is a palindrome!`)
		: (result.innerHTML = `${word.toUpperCase()} is NOT a palindrome!`);
}

btn.addEventListener("click", palindromeCheck2);
