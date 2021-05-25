
	var a = document.getElementById("divUn");
	var b = document.getElementById("divDeux");
	/*
	var c = document.getElementById("flecheUn");
	var d = document.getElementById("flecheDeux");
*/	
var nombreDiv = 1;
/*
var i =0;

function increment() {
	 b.style.display = "none";
	 c.style.visibility = "hidden";
	 d.style.visibility = "visible";
	 a.style.display = "flex";
}
function incrementdeux() {
	 a.style.display = "none";
	 d.style.visibility = "hidden";
	 c.style.visibility = "visible";
	 b.style.display = "flex";
}
*/

function increment(){
	nombreDiv++;
		if (nombreDiv<1) {
		nombreDiv=2;
	}
	else if (nombreDiv >2) {
 nombreDiv=1;
}
	console.log(nombreDiv);
	if (nombreDiv ==1) {
	a.style.display = "flex";
 b.style.display = "none";
}
else if (nombreDiv >=1) {
 a.style.display = "none";
 b.style.display = "flex";
}
}
function décrement(){
	nombreDiv--;
	if (nombreDiv<1) {
		nombreDiv=2;
	}
	else if (nombreDiv >2) {
 nombreDiv=1;
}
	console.log(nombreDiv);
	if (nombreDiv ==1) {
	a.style.display = "flex";
 b.style.display = "none";
}
else if (nombreDiv >=1) {
 a.style.display = "none";
 b.style.display = "flex";
}
}
/*
function increment(){
for (var i=0; i<2; i+=1) {
	nombreDiv +=1;
}
}
*/


