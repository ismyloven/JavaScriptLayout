function addTable() {
	var body = document.querySelector("body");
	var numRows = document.getElementById("rows");
	var numColumns = document.getElementById("columns");
	var firstTable = document.querySelector("table");
	var rows = numRows.value;
	var columns = numColumns.value;


	var newTable = document.createElement("table");
	newTable.setAttribute("border", "1");
	newTable.setAttribute("width", 200);
	newTable.setAttribute("height", 100);

	for (var i = 0; i < columns; i++) {
		var tr = document.createElement("tr");
		for (var j = 0; j < rows; j++) {
			var td = document.createElement("td");
			var text = document.createTextNode((i + 1) + "." + (j + 1));
			td.appendChild(text);
			tr.appendChild(td);

		}
		newTable.appendChild(tr);
	}

	if (firstTable == null) {
		return body.appendChild(newTable);
	} else {
		body.appendChild(newTable);
		return document.body.replaceChild(newTable,firstTable);
	}
}