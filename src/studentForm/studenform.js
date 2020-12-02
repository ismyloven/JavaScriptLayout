

let editButton =document.querySelector(".edit_button");
let deleteButton =document.querySelector(".delete_button");
let saveButton =document.querySelector(".save_button");

let studentName= document.querySelector(".firstname");
let studentSurname= document.querySelector(".lastname");
let studentEnrerDate= document.querySelector(".enterdate");
let studentExitDate= document.querySelector(".exitdate");
let studentAge= document.querySelector(".age");
let studentCourse= document.querySelector(".coursename");
let tableResult = document.querySelector(".student_table__form");

function saveResult() {
	let newRow = document.createElement("tr");
	let ChooseColumn = document.createElement("td");
	let nameColumn = document.createElement("td");
	let surNameColumn = document.createElement("td");
	let ageColumn = document.createElement("td");
	let courseColumn = document.createElement("td");
	let enterDayColumn = document.createElement("td");
	let endDayColumn = document.createElement("td");
	let iconsColumn = document.createElement("td");

	tableResult.appendChild(newRow);
	newRow.classList.add(`${studentName.value}`);
	newRow.appendChild(ChooseColumn);

	ChooseColumn.innerHTML = `<input type="checkbox" name="${studentName.value}">`;

	newRow.appendChild(nameColumn);
	nameColumn.innerHTML = studentName.value;

	newRow.appendChild(surNameColumn);
	surNameColumn.innerHTML = studentSurname.value;

	newRow.appendChild(ageColumn);
	ageColumn.innerHTML = studentAge.value;

	newRow.appendChild(courseColumn);
	courseColumn.innerHTML = studentCourse.value;

	newRow.appendChild(enterDayColumn);
	enterDayColumn.innerHTML = studentEnrerDate.value;

	newRow.appendChild(endDayColumn);
	endDayColumn.innerHTML = studentExitDate.value;

	newRow.appendChild(iconsColumn);
	iconsColumn.innerHTML= `<img class="action_icons edititem" src="./studentForm/icons/pencil.png"> <img class="action_icons saveitem" src="./studentForm/icons/disk.png"> <img class="action_icons deleteitem" src="./studentForm/icons/delete.png">`;
}


function deleteResult() {
	let element = document.querySelectorAll('input[type=checkbox]');
	console.log(element);
	for (let i = 0; i < element.length; i++) {
		if (element[i].checked) {
			let deleteElement = document.querySelector(`.${element[i].name}`);
			tableResult.removeChild(deleteElement);
		}
	}
}

// function editResult() {
//     let element2 = document.querySelectorAll('input[type=checkbox]');
//     console.log(element2);
//     for (let i = 0; i < element2.length; i++) {
//         if (element2[i].checked) {
//             let editElement = document.querySelector(`.${element2[i].name}`);
//             tableResult.replaceChild(tableResult,editElement);
//         }
//     }
// }

deleteButton.addEventListener("click", deleteResult);
saveButton.addEventListener("click", saveResult);
// editButton.addEventListener("click", editResult);




