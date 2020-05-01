const form = document.forms[0];

// sinusNumber это name у input 
form.onsubmit = function (e) {
	e.preventDefault();
	let sinNumber = form.elements.sinusNumber.value;
	sinNumber = sinNumber * Math.PI/180;
	return Math.sin(sinNumber);
}