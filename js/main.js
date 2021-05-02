var titulo = document.getElementById("titulo");

var up = true;
var value = 0;
var increment = 0.01;
var ceiling = 1;

function fade(){

	if (up == true && value <= ceiling) {
		value += increment

		if (value == ceiling) {
			up = false;
		}
	} else {
		up = false;
		value -= increment;

		if (value <= 0) {
			up = true;
		}
	}

	titulo.style.opacity = value;
	window.requestAnimationFrame(fade);
}

window.requestAnimationFrame(fade);

