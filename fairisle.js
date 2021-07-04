var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
W=window.innerWidth;
H=window.innerHeight;
c.width = W;
c.height = H;
ctx.rect(0,0,W,H);
ctx.fillStyle = "#000";
ctx.fill();



var xpos = -1;
var ypos = -1;
var clicked = 0;

var guides = 0;
var knit = 1;
var scalemenu = 0;
var colourmenu = 0;
var translatemenu = 0;
var confirmmenu = 0;

var colour1 = "#C6ACEC";
var colour1 = "#228C63";
var bgcolour = "#5A92C4";


var d = .2;

var nx = W/80/d;
var ny = H/65/d+1;
	
var punchcard = [];
punchcard=PC_littleheartscheck;//toPC("PC_vagesticleb1gm0n3y$$");

var floatarray = [];
var displayfloats = 0;
var floatsdisplayed = 0;

rows = punchcard.length;
stitches = punchcard[0].length;
document.getElementById("length-icon").value = rows;

const queryString = window.location.search;
console.log(queryString);
		
var punchw = (stitches-1)*80*d;
var punchh = (rows-1)*80*d;
var punchx = W/2-punchw/2;
var punchy = Math.max(H/2-punchh/2,20);


draw();

function draw(){
	if (floatsdisplayed){
		floatsdisplayed = 0;
	}
	ctx.beginPath();
	ctx.rect(0,0,W,H);
	ctx.fillStyle = document.getElementById("colourbg").value;
	ctx.fill();
	if(knit){
		if (displayfloats) {
			checkfloats();
		}
		for (i=0; i<nx && i<1000; i++){
			for(j=0; j<ny && j<1000; j++){
				if (punchcard[(j+rows-1)%rows][i%stitches]){
					ctx.fillStyle = document.getElementById("colour1").value;
				} else {
					ctx.fillStyle = document.getElementById("colour2").value;
				}		
				var highlight = 0;
				if (displayfloats){
 					if (floatarray[(j+rows-1)%rows][i%stitches]){
 						highlight = 1;
					}
 				}
				drawstitch(i*80*d, j*65*d-65*d, 80*d, 100*d, highlight);
			}
		}
	
		if (guides){
			ctx.strokeStyle = "#ddd";
			ctx.lineWidth = 2;
			ctx.beginPath();
			for (i = 0; rows*65*d*i < H; i++){
				ctx.moveTo(0, rows*65*d*i+15*d);
				ctx.lineTo(W, rows*65*d*i+15*d);
			}
			for (j = 0; stitches*80*d*j < W; j++){
				ctx.moveTo(stitches*80*d*j, 0);
				ctx.lineTo(stitches*80*d*j, H);
			}
		
			ctx.stroke();
		}
	} else {
		
		punchw = (stitches-1)*80*d;
		punchh = (rows-1)*80*d;
		punchx = W/2-punchw/2;
		punchy = Math.max(H/2-punchh/2,20);
		
		ctx.fillStyle = "#eee";
		ctx.beginPath();
		ctx.rect(punchx-50*d, punchy-50*d, punchw+100*d, punchh+100*d);
		ctx.fill();
		
		ctx.fillStyle = "#222";
		ctx.strokeStyle = "#444";
			ctx.lineWidth = 1;
		for (i=0; i<stitches; i++){
			for(j=0; j<rows; j++){
				if (punchcard[j][i]){
					ctx.beginPath();
					ctx.arc(punchx+i*80*d, punchy+j*80*d, 25*d, 0, 2 * Math.PI);
					ctx.fill();
				} else {
					ctx.beginPath();
					ctx.arc(punchx+i*80*d, punchy+j*80*d, 25*d, 0, 2 * Math.PI);
					ctx.stroke();
				}
			}
		}
	}
}

function drawstitch(x,y,w,h, highlight){
	ctx.beginPath();
	ctx.transform(w,0,0,h,x,y);
	ctx.moveTo(0.15,0);
	ctx.bezierCurveTo(-0.1,0.2, 0.05,0.4, 0.4,1.02);
	ctx.bezierCurveTo(0.48,0.75, 0.6,0.75, 0.2,0.1);
	ctx.lineTo(0.15,0);
	
	ctx.transform(-1,0,0,1,1,0);
	ctx.moveTo(0.15,0);
	ctx.bezierCurveTo(-0.1,0.2, 0.05,0.4, 0.4,1.02);
	ctx.bezierCurveTo(0.48,0.75, 0.6,0.75, 0.2,0.1);
	ctx.lineTo(0.15,0);
	ctx.fill();	
	
	if (highlight) {
		ctx.strokeStyle = "#f00";
		ctx.lineWidth = .1;
		ctx.stroke();
	}
	ctx.resetTransform();
}
		
window.onresize = function() {
	W=window.innerWidth;
	H=window.innerHeight;
	c.width = W;
	c.height = H;
	nx = W/80/d;
	ny = H/65/d+1;
	ctx.fillStyle = '#fff';
	ctx.fillRect(0,0,W,H);
	draw();
}


document.getElementById("canvasbox").onmousemove = coords;
document.getElementById("canvasbox").onmousedown = click;

function coords(e){
	xpos = e.clientX;
	ypos = e.clientY;
}

function click (){
	closemenus();
	clicked = 1;
	if (knit){
		gridi = parseInt((xpos)/W*nx)%stitches;
		gridj = parseInt((ypos)/H*ny+.25+rows-1)%rows;
		punchcard[gridj][gridi]=1-punchcard[gridj][gridi];
	} else {
		if(xpos<(punchx-37.5*d) || xpos>(punchx+punchw+37.5*d) || ypos<(punchy-37.5*d) || ypos>(punchy+punchh+37.5*d)){
		} else {
			gridi = parseInt((xpos-(punchx-37.5*d))/(punchw+12.5)*stitches);
			gridj = parseInt((ypos-(punchy-37.5*d))/(punchh+12.5)*rows);
			punchcard[gridj][gridi]=1-punchcard[gridj][gridi];
		}
	}
	draw()
}

function savescreen() {
	closemenus();
  	document.getElementById("savescreen").style.display = "block";
	
	document.getElementById("codetext").value = tocode(punchcard);
}

function cancelsave() {
  	document.getElementById("savescreen").style.display = "none";
}

function copyimg(){
	c.toBlob(function(blob) { 
    	const item = new ClipboardItem({ "image/png": blob });
    	navigator.clipboard.write([item]); 
	});	
}

function copycode(){
	var copyText = document.getElementById("codetext");
	
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	copyText.blur();
}

function copyarray(){
	var copyText = document.getElementById("codetext");
	var str = "[";
	
	for (i=0; i<rows-1; i++){
		str += "[";
		for (j=0; j<stitches-1; j++){
			str += punchcard[i][j] + ", ";
		}
		str += punchcard[i][stitches-1] + "],";
	}
	str += "[";
	for (j=0; j<stitches-1; j++){
		str += punchcard[rows-1][j] + ", ";
	}
	str += punchcard[rows-1][stitches-1] + "]]";

	copyText.value = str;
	
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	 
	copyText.value = tocode(punchcard);
	copyText.blur();
}

function saveimg(){
	  var link = document.createElement('a');
	  link.download = 'Punchcard.png';
	  link.href = document.getElementById('canvas').toDataURL()
	  link.click();
}

/* 
function savearray(){
	var blob = new Blob([document.getElementById("arraytext").value],
                { type: "text/plain;charset=utf-8" });
    
	var link = document.createElement("a"),
			url = URL.createObjectURL(blob);
	link.href = url;
	link.download = "punchcard.txt";
	document.body.appendChild(link);
	link.click();
	setTimeout(function() {
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);  
	}, 0); 
}
 */

/* 
function copyarray() {
	closemenus();
	var copyText = document.getElementById("arraytext");
	var name = copyText.value;
	
	var str = "PC_" + name + " = [";
	
	for (i=0; i<rows-1; i++){
		str += "[";
		for (j=0; j<stitches-1; j++){
			str += punchcard[i][j] + ", ";
		}
		str += punchcard[i][stitches-1] + "],";
	}
	str += "[";
	for (j=0; j<stitches-1; j++){
		str += punchcard[rows-1][j] + ", ";
	}
	str += punchcard[rows-1][stitches-1] + "]];";

	copyText.value = str;
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	
	copyText.value = name;
}
 */

function changelength(){
	closemostmenus();
	var newn = document.getElementById("length-icon").value;
	if (!parseInt(newn)) {
		alert("Whoa cowboy")
		document.getElementById("length-icon").value = rows;
		return;
	}
	var newn = parseInt(newn);
	if (newn>250) {
		alert("Why so big?");
		document.getElementById("length-icon").value = rows;
		return;
	}
	if (newn>rows){
		for (i = rows; i<newn; i++){
			punchcard[i] = [];
			for (j = 0; j < stitches; j++){
				punchcard[i][j] = punchcard[i%rows][j];
			}
		}
		rows = newn;
		draw();
	} else if (newn<rows) {
		rows = newn;
		draw();
	}
	
}

function guidesonoff(){
	closemenus();
	guides = 1-guides;
	if(guides) {
		document.getElementById("grid-icon").classList.remove("icon-img");
		document.getElementById("grid-icon").classList.add("icon-img-clicked");
	} else {
		document.getElementById("grid-icon").classList.remove("icon-img-clicked");
		document.getElementById("grid-icon").classList.add("icon-img");
	}
	draw();
}

function changescale(){
	var newscale = document.getElementById("scale").value;
	d = .2*newscale/50
	nx = W/80/d;
	ny = H/65/d+1;
	draw();
}

function changeview(){
	closemenus();
	knit = 1-knit
	if (knit){
		document.getElementById("view-icon").src = "punchcard-icon.png";
		document.getElementById("view-helpbox").innerHTML = "Punchcard View";
	} else {
		document.getElementById("view-icon").src = "knit-icon.png";
		document.getElementById("view-helpbox").innerHTML = "Knit View";
	}
	draw();
}

function openscreen() {
	closemenus();
  	document.getElementById("openscreen").style.display = "block";
  	document.getElementById("openbox").style.display = "block";
  	document.getElementById("confirmbox").style.display = "none";
}

function confirmreset() {
	closemenus();
  	document.getElementById("openbox").style.display = "none";
  	document.getElementById("confirmbox").style.display = "block";
}

function cancelreset() {
	closescreen();
}

function closescreen() {
  	document.getElementById("openscreen").style.display = "none";
}

function reset(){
	for (i = 0; i<rows; i++){
		punchcard[i] = [];
		for (j = 0; j < stitches; j++){
			punchcard[i][j] = 0;
		}
	}
  	document.getElementById("openscreen").style.display = "none";
	draw();
}

function openbutton(){
	var str = document.getElementById("codetextinput").value;
	if (str) {
		if (toPC(str)) {
			punchcard = toPC(str);
		
			document.getElementById("openscreen").style.display = "none";

			rows = punchcard.length;
			stitches = punchcard[0].length;
			document.getElementById("length-icon").value = rows;
		
			draw();
		}
	}
}

function shiftup(){
	var temp = [];
	temp = punchcard[0]
	for (i = 0; i<rows-1; i++){
		punchcard[i] = punchcard[i+1];
	}
	punchcard[rows-1]=temp;
	draw();
}

function shiftdown(){
	var temp = [];
	temp = punchcard[rows-1]
	for (i = rows-1; i>0; i--){
		punchcard[i] = punchcard[i-1];
	}
	punchcard[0]=temp;
	draw();
}

function shiftleft(){
	var temp = [];
	for (i = 0; i < rows; i++){
		temp[i] = punchcard[i][0];
	}
	for (i = 0; i<stitches-1; i++){
		for (j = 0; j<rows; j++){
			punchcard[j][i] = punchcard[j][i+1];
		}
	}
	for (i = 0; i < rows; i++){
		punchcard[i][stitches-1] = temp[i];
	}
	draw();
}

function shiftright(){
	var temp = [];
	for (i = 0; i < rows; i++){
		temp[i] = punchcard[i][stitches-1];
	}
	for (i = stitches-1; i>0; i--){
		for (j = 0; j<rows; j++){
			punchcard[j][i] = punchcard[j][i-1];
		}
	}
	for (i = 0; i < rows; i++){
		punchcard[i][0] = temp[i];
	}
	draw();
}

function longfloats(){
	closemenus();
	if (displayfloats){
		document.getElementById("floats-icon").classList.remove("icon-img-clicked");
		document.getElementById("floats-icon").classList.add("icon-img");
		displayfloats = 0;
		draw();
	} else {
		document.getElementById("floats-icon").classList.remove("icon-img");
		document.getElementById("floats-icon").classList.add("icon-img-clicked");
		checkfloats();
		displayfloats = 1;
		draw();
	}
}

function checkfloats() {
	var atleast = 8;
		for (i = 0; i < rows; i++){
			var floatl = 1;
			floatarray[i] = [];
			for (j = 1; j<stitches; j++){
				floatarray[i][j] = 0;
			}
			for (j = 1; j < stitches+atleast; j++){
				if (punchcard[i][j%stitches]==punchcard[i][(j-1)%stitches]){
					floatl++;
					if (floatl>=atleast){
						for (k = 0; k<atleast; k++) {
							floatarray[i][(j+stitches-k)%stitches] = 1;
						}
					}
				} else {
					floatl=1;
				}
			}
		}
}

var lengthicon = document.getElementById("length-icon");
lengthicon.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   changelength();
  }
});

var opentext = document.getElementById("codetextinput");
opentext.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   openbutton();
  }
});


function openzoommenu() {
	if (!scalemenu){
		closemenus();
		scalemenu = 1
		document.getElementById("scalemenu").style.display = "block";
	} else {
		closemenus();
	}
}

function opencolourmenu() {
	if (!colourmenu){
		closemenus();
		colourmenu = 1
		document.getElementById("colourmenu").style.display = "block";
	} else {
		closemenus();
	}
}

function opentranslatemenu() {
	if (!translatemenu){
		closemenus();
		translatemenu = 1
		document.getElementById("translatemenu").style.display = "block";
	} else {
		closemenus();
	}
}

function openconfirmmenu() {
	if (!confirmmenu){
		confirmmenu = 1;
		document.getElementById("confirmmenu").style.display = "block";
		document.getElementById("lengthhelp").style.display = "none";
		closemostmenus();
	}
}

function clickconfirmmenu() {
	if (confirmmenu){
		confirmmenu = 0;
		document.getElementById("confirmmenu").style.display = "none";
		document.getElementById("lengthhelp").style.display = "block";
		changelength();
	}
}

function closemenus(){
	document.getElementById("scalemenu").style.display = "none";
	scalemenu = 0;
	document.getElementById("colourmenu").style.display = "none";
	colourmenu = 0;
	document.getElementById("translatemenu").style.display = "none";
	translatemenu = 0;
	document.getElementById("confirmmenu").style.display = "none";
	document.getElementById("lengthhelp").style.display = "block";
	confirmmenu = 0;
}

function closemostmenus() {
	document.getElementById("scalemenu").style.display = "none";
	scalemenu = 0;
	document.getElementById("colourmenu").style.display = "none";
	colourmenu = 0;
	document.getElementById("translatemenu").style.display = "none";
	translatemenu = 0;
}

function tocode(str) {
	var code = "PC_"
	for (i = 0; i < str.length; i ++) {
		var result = str[i].join('')
		code += to64(result.substr(0, 6)) + to64(result.substr(6, 6)) + to64(result.substr(12, 6)) + to64(result.substr(18, 6));
	}
	return code;
}

function to64(str){
	var result = parseInt(str,2);
	if (result>=38 && result<64) {
		result+=59;
	} else if (result==37) {
		result+=58;
	} else if (result>=11 && result<37) {
		result+=54;
	}  else if (result>=1 && result<11) {
		result+=47;
	}  else if (result==0) {
		result = 36;
	} else {
		alert("! " + result)
	}
	return String.fromCharCode(result);
}

function toPC(str) {
	PC = [];
	if (str[0]=="P" && str[1]=="C" && str[2]=="_"){
		if ((str.length-3)%4!=0||str.length==3){
			alert("wrong length")
			return;
		}
		for (i = 3; i < str.length; i +=4) {
			PC[(i-3)/4] = [];
			for (j = 0; j < 4; j ++) {
				result=tobin(str[i+j]);
				for (k = 0; k < 6; k ++) {
					PC[(i-3)/4][j*6+k] = parseInt(result[k]);
				}
			}
		}
		return PC;
	} else {
		alert("wrong format")
	}
}

function tobin(str) {
	result = str.charCodeAt(0);
	if (result == 36) {
		return "000000";
	} else if (result>=48 && result<58) {
		result-=47;
	} else if (result>=65 && result<91) {
		result-=54;
	} else if (result==95) {
		result-=58;
	} else if (result>=97 && result<123) {
		result-=59;
	} else {
		alert("invalid character")
	}
	result = result.toString(2);
	result = "000000".substr(result.length) + result;
	return result;
}



