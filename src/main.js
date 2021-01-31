
const defaultValues = {
	classes: {
		firstcliker: 'firstcliker',
		secondcliker: 'secondcliker',
		thirdcliker: 'thirdcliker',
		fourthcliker: 'fourthcliker',
		sixcliker : 'sixcliker',
		sevencliker: 'sevencliker',
	}
}


const sitebarList = document.querySelector(".sitebar_list");
sitebarList.addEventListener("click", handler);


function handler(event) {

	const firstcliker = defaultValues.classes.firstcliker;
	const secondcliker = defaultValues.classes.secondcliker;
	const thirdcliker = defaultValues.classes.thirdcliker;
	const fourthcliker = defaultValues.classes.fourthcliker;
	const sixcliker = defaultValues.classes.sixcliker;
	const sevencliker = defaultValues.classes.sevencliker;

	const showTable = document.querySelector(".table_class");
	const showColorButton = document.querySelector(".rainbow_buttons");
	const showSlider = document.querySelector(".hidenslidertext");
	const showStudents = document.querySelector(".mainform");
	const showMain = document.querySelector(".container");
	const showMap = document.querySelector(".google_map");

	const template = document.querySelectorAll('.template');
	template.forEach(item => item.classList.add("hide"));



	if (event.target.className === firstcliker) {
		showTable.classList.add("show");
		showTable.classList.remove("hide");
	}
	if (event.target.className === secondcliker) {
		showMain.classList.add("show");
		showMain.classList.remove("hide");
	}
	if (event.target.className === thirdcliker) {
		showColorButton.classList.add("show");
		showColorButton.classList.remove("hide");
	}
	if (event.target.className === fourthcliker) {
		showSlider.classList.add("show");
		showSlider.classList.remove("hide");
	}

	if (event.target.className === sixcliker) {
		showStudents.classList.add("show");
		showStudents.classList.remove("hide");
	}
	if (event.target.className === sevencliker) {
		showMap.classList.add("show");
		showMap.classList.remove("hide");
	}
}







// Second
// let sitebarList  = document.querySelector(".sitebar_list");
//
//
// sitebarList.addEventListener("click", handler);
//
// function handler(event){
//
// 	document.querySelectorAll('.template').forEach(item => item.style.display ="none");
// 	if (event.target.className=="secondcliker") {
// 		document.querySelector(".container").style.display ="block";
// 	}
// 	else if (event.target.className=="firstcliker") {
// 		document.querySelector(".table_class").style.display ="block";
// 	}
// 	else if (event.target.className=="thirdcliker") {
// 		document.querySelector(".rainbow_buttons").style.display ="block";
// 	}
// 	else if (event.target.className=="fourthcliker") {
// 		document.querySelector(".hidenslidertext").style.display ="block";
// 	}
// 	else if(event.target.className=="fivecliker") {
// 		document.querySelector(".videoslider").style.display ="block";
//
// 	} else if (event.target.className=="sixcliker"){
// 		document.querySelector(".mainform").style.display ="block";
// 	}
//
// }
