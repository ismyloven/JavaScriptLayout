function addTable() {
	var body = document.querySelector("body");
	var numRows = document.getElementById("rows");
	var numColumns = document.getElementById("columns");
	var firstTable = document.querySelector("table");
	var rows = numRows.value;
	var columns = numColumns.value;
	var newTable;

	var table = document.createElement("table");
	table.setAttribute("border", "1");
	table.setAttribute("width", 600);
	table.setAttribute("height", 200);

	for (var i = 0; i < columns; i++) {
		var tr = document.createElement("tr");
		for (var j = 0; j < rows; j++) {
			var td = document.createElement("td");
			var text = document.createTextNode((i + 1) + "." + (j + 1));
			td.appendChild(text);
			tr.appendChild(td);

		}
		table.appendChild(tr);
	}

	if (firstTable == null) {
		return body.appendChild(table);
	} else {
		newTable = body.appendChild(table);
		return document.body.replaceChild(newTable, firstTable);
	}
}

// first clicker

let button = document.querySelector(".firstcliker");
let text = document.querySelector(".table_class");


button.addEventListener("click", handler);


function handler() {

	if (text.style.display == "block") {
		text.style.display = "none";

	} else {
		text.style.display = "block";
	}
}


// second clicker About JS

let button2 = document.querySelector(".secondcliker");
let text2 = document.querySelector(".container");


button2.addEventListener("click", handler2);


function handler2() {

	if (text2.style.display == "block") {
		text2.style.display = "none";

	} else {
		text2.style.display = "block";
	}

}









