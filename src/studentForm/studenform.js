

let formbut  = document.querySelector(".sixcliker");
let formstudents  = document.querySelector(".mainform");

formbut.addEventListener("click", formHandler);

function formHandler(){
	 if(formstudents.style.display =="block"){
		 formstudents.style.display ="none";
	 } else{
		 formstudents.style.display ="block";
	 }
}
