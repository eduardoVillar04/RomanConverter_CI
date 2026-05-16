const input = document.getElementById("input");
const result = document.getElementById("result");
const error = document.getElementById("error");
const mode = document.getElementById("mode");
let lastError = null;
let inputTimeout = null;

input.addEventListener("input", handleInput);
mode.addEventListener("change", reset);

function reset() {
	input.value = "";
	result.textContent = "";
	error.textContent = "";
}

// Check for moments where user is not inputting more letters in order to track
function handleInput() {
	convert();

	clearTimeout(inputTimeout);

	inputTimeout = setTimeout(() => {
		const value = input.value.trim();

		if (value === "") return;

		gtag("event", "user_input", {
			"input_value": value,
			"type_of_conversion": mode.value,
			"timestamp": new Date().toISOString()
		});
	}, 500);
}

function convert() {
	result.textContent = "";
	error.textContent = "";

	const value = input.value.trim();

	if (value === "") return;

	if (mode.value === "intToRoman") {
		const num = Number(value);

		if (!Number.isInteger(num) || num < 1 || num > 3999) {
			setError("Enter an integer between 1 and 3999.");
			return;
		}

		result.textContent = intToRoman(num);
	} else {
		if (!/^[IVXLCDM]+$/i.test(value)) {
			setError("Enter a valid Roman numeral.");
			return;
		}

		const converted = romanToInt(value.toUpperCase());

		if (converted === null) {
			setError("Invalid Roman numeral format.");
			return;
		}

		result.textContent = converted;
	}
}

function setError(errorStr) {
	error.textContent = errorStr;

	// dont have duplicated errors
	if (lastError === errorStr) return;

	lastError = errorStr;

	// tracj errors with context
	gtag("event", "conversion_error", {
		"error_string": errorStr,
		"mode": mode.value,
		"input_value": input.value.trim(),
		"timestamp": new Date().toISOString()
	});
}

function intToRoman(num) {
	const map = [
		[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],
		[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],
		[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]
	];

	let res = "";

	for (let [val, sym] of map) {
		while (num >= val) {
			res += sym;
			num -= val;
		}
	}

	return res;
}

function romanToInt(str) {
	const map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
	let total = 0;

	for (let i = 0; i < str.length; i++) {
		let curr = map[str[i]];
		let next = map[str[i+1]];

		if (next > curr) {
			total += next - curr;
			i++;
		} else {
			total += curr;
		}
	}

	// Reject values outside allowed range
	if (total < 1 || total > 3999) return null;

	// Reject invalid formatting (like IIII, VV, etc.)
	if (intToRoman(total) !== str) return null;

	return total;
}

// show animation when result updates
const observer = new MutationObserver(()=>{
	result.classList.remove("show");
	void result.offsetWidth;
	if(result.textContent!=="") result.classList.add("show");
});
observer.observe(result,{childList:true});

// dark mode toggle
document.getElementById("themeToggle").onclick = () => {
	document.body.classList.toggle("dark");
};
