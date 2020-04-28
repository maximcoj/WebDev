const form = document.forms[0];

// sinusNumber это name у input 
form.onsubmit = function (e) {
	e.preventDefault();
	let sinNumber = form.elements.sinusNumber.value;
	console.log(Math.sin(sinNumber));
	return Math.sin(sinNumber);
}