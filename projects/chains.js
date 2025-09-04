document.getElementById("initialchain").onclick = function() {initialchainfloats()};
document.getElementById("initialchainsubtitle").onclick = function() {initialchainfloats()};

function initialchainfloats() {
	if(document.getElementById("initialchain").getAttribute('src')=="projectimages/chains/initialchainerror.png"){
		document.getElementById("initialchain").src = "projectimages/chains/initialchain.png";
	} else if (document.getElementById("initialchain").getAttribute('src')=="projectimages/chains/initialchain.png"){
		document.getElementById("initialchain").src = "projectimages/chains/initialchainerror.png";
	} else {
		alert("error")
	}
}

document.getElementById("plainchain").onclick = function() {plainchainfloats()};
document.getElementById("plainchainsubtitle").onclick = function() {plainchainfloats()};

function plainchainfloats() {
	if(document.getElementById("plainchain").getAttribute('src')=="projectimages/chains/plainchainfloats.png"){
		document.getElementById("plainchain").src = "projectimages/chains/plainchain.png";
	} else if (document.getElementById("plainchain").getAttribute('src')=="projectimages/chains/plainchain.png"){
		document.getElementById("plainchain").src = "projectimages/chains/plainchainfloats.png";
	} else {
		alert("error")
	}
}

document.getElementById("diagonalchain").onclick = function() {diagonalchange()};
document.getElementById("diagonalchainsubtitle").onclick = function() {diagonalchange()};

function diagonalchange() {
	if(document.getElementById("diagonalchain").getAttribute('src')=="projectimages/chains/diagonal0.png"){
		document.getElementById("diagonalchain").src = "projectimages/chains/roundtosquare.gif";
	} else if (document.getElementById("diagonalchain").getAttribute('src')=="projectimages/chains/roundtosquare.gif"){
		document.getElementById("diagonalchain").src = "projectimages/chains/squaretoround.gif";
	} else if (document.getElementById("diagonalchain").getAttribute('src')=="projectimages/chains/squaretoround.gif"){
		document.getElementById("diagonalchain").src = "projectimages/chains/roundtosquare.gif";
	} else {
		alert("error")
	}
}