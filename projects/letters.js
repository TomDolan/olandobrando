document.getElementById("checkerboardletters").onclick = function() {checkerboardletterszoom()};
document.getElementById("checkerboardletterssubtitle").onclick = function() {checkerboardletterszoom()};

function checkerboardletterszoom() {
	if(document.getElementById("checkerboardletters").getAttribute('src')=="projectimages/letters/checkerboardletters.png"){
		document.getElementById("checkerboardletters").src = "projectimages/letters/checkerboardletterszoom.png";
	} else if (document.getElementById("checkerboardletters").getAttribute('src')=="projectimages/letters/checkerboardletterszoom.png"){
		document.getElementById("checkerboardletters").src = "projectimages/letters/checkerboardletterszoomzoom.png";
	} else if (document.getElementById("checkerboardletters").getAttribute('src')=="projectimages/letters/checkerboardletterszoomzoom.png"){
		document.getElementById("checkerboardletters").src = "projectimages/letters/checkerboardletters.png";
	} else {
		alert("error")
	}
}