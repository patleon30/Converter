let input = document.getElementById("input");
let c = document.getElementById("C");
let f = document.getElementById("F")
let output = document.getElementById("output")
let converter = document.getElementById("converter")
let clear = document.getElementById("clear")

function toCelsius () {
	console.log("toCelsius running")
	let cValue = (input.value - 32) * 5/9;
	outputTemp(cValue, "C&deg;");
}

function toFahrenheit () {
	console.log("toFahrenheit running")
	let fValue = (input.value * 9/5) + 32;
	outputTemp(fValue, "F&deg;");
}


function clearEverything() {
	input.value = "";
	output.innerHTML = "";
	f.checked = false;
	c.checked = false;
}
function outputTemp(temp, degree) {
	output.innerHTML = `${temp} ${degree}`
	colors(temp ,degree)
}

function checkInput() {
	if (input.value && (c.checked || f.checked)){
		determineConverter()
	}	
}
function colors(temp, degree) {
	switch (D) {
	
	case "&deg;F":
	
	if (T > 90) {
	
	output.classlist.add("red");
	
	} else if (T < 32) {
	
	output.classlist.add ("lightblue");

	} else {
	output.classlist.add("green");
	}
	break;
	}
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent); 
  if (c.checked){
  	toFahrenheit()
  } else {
  	toCelsius()
  }
}

// Assign a function to be executed when the button is clicked
converter.addEventListener("click", checkInput);
clear.addEventListener("click", clearEverything);
input.addEventListener("keyup", function(e){
	if (e.keyCode === 13){
		checkInput()
	}
});



