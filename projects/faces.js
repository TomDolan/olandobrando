document.getElementById("facesanimation").onclick = function() {animatefacesanimation()};
document.getElementById("facesanimationsubtitle").onclick = function() {animatefacesanimation()};

function animatefacesanimation() {
	if(document.getElementById("facesanimation").getAttribute('src')=="projectimages/faces/frame1.png"){
		document.getElementById("facesanimation").src = "projectimages/faces/animation.gif";
	} else if (document.getElementById("facesanimation").getAttribute('src')=="projectimages/faces/animation.gif"){
		document.getElementById("facesanimation").src = "projectimages/faces/frame1.png";
	} else {
		alert("error")
	}
}