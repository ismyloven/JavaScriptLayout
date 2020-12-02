
let sitebarList  = document.querySelector(".sitebar_list");


sitebarList.addEventListener("click", handler);

function handler(event){

	document.querySelectorAll('.template').forEach(item => item.style.display ="none");
	if (event.target.className=="secondcliker") {
		document.querySelector(".container").style.display ="block";
	}
	else if (event.target.className=="firstcliker") {
		document.querySelector(".table_class").style.display ="block";
	}
	else if (event.target.className=="thirdcliker") {
		document.querySelector(".rainbow_buttons").style.display ="block";
	}
	else if (event.target.className=="fourthcliker") {
		document.querySelector(".hidenslidertext").style.display ="block";
	}
	else if(event.target.className=="fivecliker") {
		document.querySelector(".videoslider").style.display ="block";

	} else if (event.target.className=="sixcliker"){
		document.querySelector(".mainform").style.display ="block";
	}

}
