function load_options() {
	for (let i = 0; i < servicesList.length; i++) {
		const main = document.getElementById("services-list");
		const li = document.createElement("li");
		const input = document.createElement("input");
		input.type = "checkbox";
		const label = document.createElement("label");

		input.id = servicesList[i].id;
		input.value = servicesList[i].title;
		
		if (typeof localStorage[servicesList[i].id] === "undefined") {
			input.checked = true;
		}

		label.htmlFor = servicesList[i].id;
		label.innerHTML = servicesList[i].title;

		main.appendChild(li);
		li.appendChild(input);
		li.appendChild(label);
	}
}

function restore_options() {
	for (let i = 0; i < servicesList.length; i++) {
		if (localStorage[servicesList[i].id] == "true") {
			document.getElementById(servicesList[i].id).checked = true;
		}	
	}
}

function save_options() {
	for (let i = 0; i < servicesList.length; i++) {
		localStorage[servicesList[i].id] = document.getElementById(servicesList[i].id).checked;
	}
}

function select_all() {
	a = document.querySelectorAll("input[type=checkbox]");
  Array.prototype.forEach.call(a, function(radio) {
    radio.checked = true;
  });
	save_options();
}

function select_none() {
	a = document.querySelectorAll("input[type=checkbox]");
  Array.prototype.forEach.call(a, function(radio) {
    radio.checked = false;
  });
	save_options();
}

document.addEventListener("DOMContentLoaded", function() {
	load_options();
	restore_options();
	//document.getElementById("select-all").addEventListener("click", select_all);
	//document.getElementById("select-none").addEventListener("click", select_none);
	a = document.querySelectorAll("input[type=checkbox]");
  Array.prototype.forEach.call(a, function(radio) {
    radio.addEventListener("change", function() {
  	  save_options();
    });
  });
});


//if (localStorage[servicesList[i].toLowerCase().replace(/\s+/g, "-")] == "true") {