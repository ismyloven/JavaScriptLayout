function addTable() {
	var body = document.querySelector("body");
	var numRows = document.getElementById("rows");
	var numColumns = document.getElementById("columns");
	var firstTable = document.querySelector("table");
	var rows = numRows.value;
	var columns = numColumns.value;

	var  table = document.createElement("table");
	table.setAttribute("border", "1");
	table.setAttribute("width", 100);
	table.setAttribute("height", 100);

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
		var newTable = body.appendChild(table);
		return document.body.replaceChild(newTable, firstTable);
	}
}


