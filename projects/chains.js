var nsquare=0;
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
		setTimeout(roundsquareswap, 100);
		setTimeout(roundsquareswap, 200);
		setTimeout(roundsquareswap, 300);
		setTimeout(roundsquareswap, 400);
		setTimeout(roundsquareswap, 500);
		setTimeout(roundsquareswap, 600);
		setTimeout(roundsquareswap, 700);
		setTimeout(roundsquareswap, 800);
		setTimeout(roundsquareswap, 900);
	} else if (document.getElementById("diagonalchain").getAttribute('src')=="projectimages/chains/diagonal9.png"){
		setTimeout(squareroundswap, 100);
		setTimeout(squareroundswap, 200);
		setTimeout(squareroundswap, 300);
		setTimeout(squareroundswap, 400);
		setTimeout(squareroundswap, 500);
		setTimeout(squareroundswap, 600);
		setTimeout(squareroundswap, 700);
		setTimeout(squareroundswap, 800);
		setTimeout(squareroundswap, 900);
	}
}

function roundsquareswap(){
	nsquare=nsquare+1;
	if(nsquare>9){
		alert("more");
		nsquare=9;
		return;
	}
	document.getElementById("diagonalchain").src = "projectimages/chains/diagonal"+nsquare+".png";
}

function squareroundswap(){
	nsquare=nsquare-1;
	if(nsquare<0){
		alert("less");
		nsquare=0;
		return;
	}
	document.getElementById("diagonalchain").src = "projectimages/chains/diagonal"+nsquare+".png";
}