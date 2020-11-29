
let line =document.querySelector(".line");
let slides =document.querySelectorAll(".slide");
let sliderWidth =document.querySelector(".sliderhome").offsetWidth;
let widthArray = [0];
let lineWidth =0;
let offset = 0;
let step =0;
let balancer =0;

for(let i =0; i < slides.length; i++){
	widthArray.push(slides[i].offsetWidth);
	lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth +"px";


function newslider() {
	balancer =lineWidth - sliderWidth -(offset+ widthArray[step]);
	if(balancer>=0){
		offset = offset + widthArray[step];
		line.style.left = -offset + "px";
	} else{
		line.style.left = -(lineWidth - sliderWidth)+"px";
		offset =0;
		step = -1;
	}
   if(step +1 == slides.length){
   	offset= 0;
   	step =0;
   } else{
   	step++;
   }
}
setInterval(newslider,2000);



let fiveclik = document.querySelector(".fivecliker");
let videoslid = document.querySelector(".videoslider");


fiveclik.addEventListener('click', handler19);

function handler19 (){
	if(videoslid.style.display == "block"){
		videoslid.style.display = "none";

	} else {
		videoslid.style.display = "block";
	}
}






























