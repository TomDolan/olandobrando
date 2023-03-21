var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
W=window.innerWidth;
H=window.innerHeight;
c.width = W;
c.height = H;
ctx.rect(0,0,W,H);
ctx.fillStyle = "#000";
ctx.fill();


document.getElementById("pointer").style.width = 0 + "px";
document.getElementById("pointer").style.height = 0 + "px";

var pi = Math.PI;

var xpos = -1;
var ypos = -1;
var clicked = 0;
var f = 0;

var guides = 0;
var knit = 1;
var scalemenu = 0;
var colourmenu = 0;
var translatemenu = 0;
var confirmmenu = 0;

var colours = ["#7A6669","#8071CC","#e1a975","#74b9a4","#fbb1bc","#ae1e1e","#182253","#ffffff","#000000"]
var whichcolour = 2;
var d = .2;

dx = 80;
dy = 60;

var nx = W/dx/d;
var ny = H/dy/d+1;
	

rows = 1000;
stitches = 1000;
	
var punchcard = [];
for (var i = 0; i<stitches; i++){
	punchcard[i]=[]
	for (var j = 0; j<rows; j++){
		punchcard[i][j]=1;
	}
}

var undopc=[];
var undolength=0;
var ctrlkey = 0;
var zkey=0;
var canundo=0;


const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const urlPC = urlParams.get('PC')
if (urlPC){
	var punchcardnew = toPC(urlPC);
	if (punchcardnew){
		punchcard = punchcardnew;
	}
}

const urlcolour1 = urlParams.get('colour1')
if (urlcolour1){
	if (checkcolour(urlcolour1)){
		colours[1] = "#"+urlcolour1;
	}
}

const urlcolour2 = urlParams.get('colour2')
if (urlcolour2){
	if (checkcolour(urlcolour2)){
		colours[2] = "#"+urlcolour2;
	}
}

const urlcolour3 = urlParams.get('colour3')
if (urlcolour3){
	if (checkcolour(urlcolour3)){
		colours[3] = "#"+urlcolour3;
	}
}

const urlcolour4 = urlParams.get('colour4')
if (urlcolour4){
	if (checkcolour(urlcolour4)){
		colours[4] = "#"+urlcolour4;
	}
}

const urlcolour5 = urlParams.get('colour5')
if (urlcolour5){
	if (checkcolour(urlcolour5)){
		colours[5] = "#"+urlcolour5;
	}
}

const urlcolour6 = urlParams.get('colour6')
if (urlcolour6){
	if (checkcolour(urlcolour6)){
		colours[6] = "#"+urlcolour6;
	}
}

const urlcolour7 = urlParams.get('colour7')
if (urlcolour7){
	if (checkcolour(urlcolour7)){
		colours[7] = "#"+urlcolour7;
	}
}

const urlcolour8 = urlParams.get('colour8')
if (urlcolour8){
	if (checkcolour(urlcolour8)){
		colours[8] = "#"+urlcolour8;
	}
}

const urlbgcolour = urlParams.get('bgcolour')
if (urlbgcolour){
	if (checkcolour(urlbgcolour)){
		colours[0] = "#"+urlbgcolour;
	}
}

updatecolours();


	
var floatarray = [];
var displayfloats = 0;
var floatsdisplayed = 0;

var xclick;
var yclick;

draw();

function draw(){
	changecolours();
	
	ctx.beginPath();
	ctx.rect(0,0,W,H);
	ctx.fillStyle = colours[0];
	ctx.fill();
	if(knit){
		for (i=0; i<nx && i<1000; i++){
			for(j=Math.round(ny); j>=0; j--){
				ctx.fillStyle = colours[punchcard[(j+rows-1)%rows][i%stitches]];
				drawstitch(i*dx*d, j*dy*d-dy*d, dx*d, 100*d);
			}
		}
	}
}

function drawstitch(x,y,w,h, highlight){
	
	ctx.beginPath();
	ctx.transform(w,0,0,h,x,y);
	ctx.moveTo(0.15,0);
	ctx.bezierCurveTo(-0.1,0.2, 0.05,0.4, 0.43,1.02);
	ctx.bezierCurveTo(0.48,0.75, 0.6,0.75, 0.2,0.1);
	ctx.lineTo(0.15,0);
	
	ctx.transform(-1,0,0,1,1,0);
	ctx.moveTo(0.15,0);
	ctx.bezierCurveTo(-0.1,0.2, 0.05,0.4, 0.43,1.02);
	ctx.bezierCurveTo(0.48,0.75, 0.6,0.75, 0.2,0.1);
	ctx.lineTo(0.15,0);
	ctx.strokeStyle = bgcolour;
	ctx.lineWidth = .07;
	//ctx.stroke();
	ctx.fill();
	
	ctx.resetTransform();
}
		
window.onresize = function() {
	W=window.innerWidth;
	H=window.innerHeight;
	c.width = W;
	c.height = H;
	nx = W/dx/d;
	ny = H/dy/d+1;
	ctx.fillStyle = '#fff';
	ctx.fillRect(0,0,W,H);
	draw();
}


document.getElementById("canvasbox").onmousemove = coords;
document.getElementById("canvasbox").onmousedown = click;
document.getElementById("canvasbox").onmouseup = declick;
document.getElementById("canvasbox").ontouchstart = nocursor;

document.addEventListener("mouseleave", function(event){

  if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
  {

     clicked = 0;

  }
});

function coords(e){
	xpos = e.clientX;
	ypos = e.clientY;
	if (clicked) {
		gridi = parseInt((xpos)/W*nx)%stitches;
		gridj = parseInt((ypos)/H*(ny-1)+rows)%rows;
		if (punchcard[gridj][gridi]!=whichcolour){
			var oldcolour=punchcard[gridj][gridi];
			punchcard[gridj][gridi]=whichcolour;
			xclick = parseInt((xpos)/W*nx);
			yclick = parseInt((ypos)/H*(ny-1));
		
			ctx.beginPath();
			ctx.fillStyle = colours[whichcolour];
			drawstitch(gridi*dx*d, (gridj+1)*dy*d-dy*d, dx*d, 100*d);
		}
	}
 }

function click (e){
	closemenus();
	savestate();
	
	
		gridi = parseInt((xpos)/W*nx)%stitches;
		gridj = parseInt((ypos)/H*(ny-1)+rows)%rows;
		var oldcolour=punchcard[gridj][gridi];
		punchcard[gridj][gridi]=whichcolour;
		if (f){
			clicked=0;
			fill(gridi, gridj,oldcolour);
		}else if (e.shiftKey){
			clicked=0;
			linebetween(xclick,yclick,parseInt((xpos)/W*nx),parseInt((ypos)/H*(ny-1)),whichcolour);
		}else {
			clicked=1;
		}
		xclick = parseInt((xpos)/W*nx);
		yclick = parseInt((ypos)/H*(ny-1));
		
		ctx.beginPath();
		ctx.fillStyle = colours[whichcolour];
		drawstitch(gridi*dx*d, (gridj+1)*dy*d-dy*d, dx*d, 100*d);
}

function declick (){
	clicked = 0;
	draw();
}

function nocursor (){
  	document.getElementById("pointer").style.display = "none";
}

document.getElementById("iconbox").onmouseover = function(){
  	document.getElementById("pointer").style.display = "none";
  	document.body.style.cursor = 'auto';
};

document.getElementById("canvas").onmouseover = function(){
  	document.getElementById("pointer").style.display = "block";
  	document.body.style.cursor = 'none';
};
document.getElementById("canvas").onmousemove = function(){
	if (knit){
	  	document.getElementById("pointer").style.width = (100*d)+4 + "px";
  		document.getElementById("pointer").style.height = (100*d)+4 + "px";
 	 	document.getElementById("pointer").style.left = parseInt((xpos)/W*nx)*W/nx-2 + "px";
  		document.getElementById("pointer").style.top = parseInt((ypos)/H*(ny-1))*H/(ny-1)-2 + "px";
	} 
};

function fill(gridi, gridj, clicked){
	if (whichcolour==clicked){
		return;
	}
	var queue = [];
	queue[0] = [gridi, gridj];
	while (queue.length>0){
		var currentpoint = queue.pop();
		var uppoint = [currentpoint[0], (currentpoint[1]-1+rows)%rows];
		var downpoint = [currentpoint[0], (currentpoint[1]+1)%rows];
		var leftpoint = [(currentpoint[0]-1+stitches)%stitches, currentpoint[1]];
		var rightpoint = [(currentpoint[0]+1)%stitches, currentpoint[1]];
		if (punchcard[uppoint[1]][uppoint[0]]==clicked){
			queue.push([uppoint[0],uppoint[1]]);
			punchcard[uppoint[1]][uppoint[0]]=whichcolour;
		}
		if (punchcard[downpoint[1]][downpoint[0]]==clicked){
			queue.push([downpoint[0],downpoint[1]]);
			punchcard[downpoint[1]][downpoint[0]]=whichcolour;
		}
		if (punchcard[leftpoint[1]][leftpoint[0]]==clicked){
			queue.push([leftpoint[0],leftpoint[1]]);
			punchcard[leftpoint[1]][leftpoint[0]]=whichcolour;
		}
		if (punchcard[rightpoint[1]][rightpoint[0]]==clicked){
			queue.push([rightpoint[0],rightpoint[1]]);
			punchcard[rightpoint[1]][rightpoint[0]]=whichcolour;
		}
	}
}

function linebetween(x1,y1,x2,y2,colour){
	var rise = y2-y1;
	var run = x2-x1;
	if(run==0){
		if(y2<y1){
			var ytemp=y2;
			y2 = y1;
			y1=ytemp;
		}
		for (var y = y1; y<y2+1; y++){
			punchcard[(y+rows)%rows][(x1+stitches)%stitches]=colour;
		}
	} else {
		var m = rise/run;
		if (m>=0){
			var adjust=1;
		} else {
			var adjust=-1;
		}
		var offset = 0;
		if (m<=1 && m>=-1){
			var delta = Math.abs(rise)*2;
			var threshold = Math.abs(run);
			var thresholdinc = Math.abs(run)*2;
			var y = y1;
			if (x2<x1){
				y=y2;
				var xtemp = x2;
				x2 = x1;
				x1 = xtemp;
			}
			for (var x = x1; x<x2+1; x++ ){
				punchcard[(y+rows)%rows][(x+stitches)%stitches]=colour;
				offset+=delta;
				if (offset>=threshold){
					y+=adjust;
					threshold+=thresholdinc;
				}
			}
		} else {
			var delta = Math.abs(run)*2;
			var threshold = Math.abs(rise);
			var thresholdinc = Math.abs(rise)*2;
			var x = x1;
			if (y2<y1){
				x=x2;
				var ytemp = y2;
				y2 = y1;
				y1 = ytemp;
			}
			for (var y = y1; y<y2+1; y++ ){
				punchcard[(y+rows)%rows][(x+stitches)%stitches]=colour;
				offset+=delta;
				if (offset>=threshold){
					x+=adjust;
					threshold+=thresholdinc;
				}
			}
		}
	}
}

function savescreen() {
	closemenus();
  	document.getElementById("savescreen").style.display = "block";
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

function copyarray(){
	var copyx = Math.ceil(nx);
	var copyy=Math.ceil(ny);
	var copyText = document.getElementById("codetext");
	copyText.style.display = "block";
	var str = "[";
	
	for (i=0; i<copyy-1; i++){
		str += "[";
		for (j=0; j<copyx-1; j++){
			str += punchcard[i][j] + ", ";
		}
		str += punchcard[i][copyx-1] + "],";
	}
	str += "[";
	for (j=0; j<copyx-1; j++){
		str += punchcard[copyy-1][j] + ", ";
	}
	str += punchcard[copyy-1][copyx-1] + "]]";

	copyText.value = str;
	
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	 
	copyText.value = tocode(punchcard, rows);
	copyText.blur();
	copyText.style.display = "none";
}

function changescale(){
	var newscale = document.getElementById("scale").value;
	d = .2*newscale/50
	nx = W/dx/d;
	ny = H/dy/d+1;
	draw();
}

function infoscreen() {
	closemenus();
  	document.getElementById("infoscreen").style.display = "block";
}

function closeinfoscreen() {
	closemenus();
  	document.getElementById("infoscreen").style.display = "none";
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
  	document.getElementById("codetextinput").value = "";
}

function reset(){
	savestate();
	for (i = 0; i<rows; i++){
		punchcard[i] = [];
		for (j = 0; j < stitches; j++){
			punchcard[i][j] = 1;
		}
	}
  	document.getElementById("openscreen").style.display = "none";
	draw();
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

function changecolours(){
	var root = document.querySelector(':root');
	colours = [ document.getElementById("bgcolour").value, 
				document.getElementById("colour1").style.backgroundColor,
				document.getElementById("colour2").style.backgroundColor,
				document.getElementById("colour3").style.backgroundColor,
				document.getElementById("colour4").style.backgroundColor,
				document.getElementById("colour5").style.backgroundColor,
				document.getElementById("colour6").style.backgroundColor,
				document.getElementById("colour7").style.backgroundColor,
				document.getElementById("colour8").style.backgroundColor ];
	root.style.setProperty('--bgcolour', colours[0]);
	root.style.setProperty('--colour1', colours[1]);
	root.style.setProperty('--colour2', colours[2]);
	root.style.setProperty('--colour3', colours[3]);
	root.style.setProperty('--colour4', colours[4]);
	root.style.setProperty('--colour5', colours[5]);
	root.style.setProperty('--colour6', colours[6]);
	root.style.setProperty('--colour7', colours[7]);
	root.style.setProperty('--colour8', colours[8]);
}

function updatecolours(){
	var root = document.querySelector(':root');
	document.getElementById("bgcolour").value = colours[0];
	document.getElementById("colourselect").value = colours[whichcolour];
	document.getElementById("colour1").style.backgroundColor = colours[1];
	document.getElementById("colour2").style.backgroundColor = colours[2];
	document.getElementById("colour3").style.backgroundColor = colours[3];
	document.getElementById("colour4").style.backgroundColor = colours[4];
	document.getElementById("colour5").style.backgroundColor = colours[5];
	document.getElementById("colour6").style.backgroundColor = colours[6];
	document.getElementById("colour7").style.backgroundColor = colours[7];
	document.getElementById("colour8").style.backgroundColor = colours[8];
	root.style.setProperty('--bgcolour', colours[0]);
	root.style.setProperty('--colour1', colours[1]);
	root.style.setProperty('--colour2', colours[2]);
	root.style.setProperty('--colour3', colours[3]);
	root.style.setProperty('--colour4', colours[4]);
	root.style.setProperty('--colour5', colours[5]);
	root.style.setProperty('--colour6', colours[6]);
	root.style.setProperty('--colour7', colours[7]);
	root.style.setProperty('--colour8', colours[8]);
}

document.getElementById("colourselect").oninput = function() {selectcolour()};

function selectcolour(){
		document.getElementById("colour"+whichcolour).style.backgroundColor = document.getElementById("colourselect").value;
		var root = document.querySelector(':root');
		root.style.setProperty('--colour'+whichcolour, document.getElementById("colourselect").value);
		colours[whichcolour] = document.getElementById("colourselect").value;
		draw();
}

document.getElementById("bgcolour").oninput = function() {selectbgcolour()};

function selectbgcolour(){
		var root = document.querySelector(':root');
		root.style.setProperty('--bgcolour', document.getElementById("bgcolour").value);
		colours[0] = document.getElementById("bgcolour").value;
		draw();
}

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

function closemenus(){
	document.getElementById("scalemenu").style.display = "none";
	scalemenu = 0;
	document.getElementById("colourmenu").style.display = "none";
	colourmenu = 0;
	document.getElementById("translatemenu").style.display = "none";
	translatemenu = 0;

	
}

function closemostmenus() {
	document.getElementById("scalemenu").style.display = "none";
	scalemenu = 0;
	document.getElementById("colourmenu").style.display = "none";
	colourmenu = 0;
	document.getElementById("translatemenu").style.display = "none";
	translatemenu = 0;
}

function checkcolour(str) {
  return typeof str === 'string'
      && str.length === 6
      && !isNaN(Number('0x' + str))
}

//shortcuts

document.addEventListener('keydown', shortcut);
function shortcut(e) {
  if(e.keyCode==70){
  	f=1;
  }
  if(e.keyCode==37){
  closemenus()
  	shiftleft();
  }
  if(e.keyCode==38){
  closemenus()
  	shiftup();
  }
  if(e.keyCode==39){
  closemenus()
  	shiftright();
  }
  if(e.keyCode==40){
  closemenus()
  	shiftdown();
  }
  if(e.keyCode==90){
	confirmmenu = 0;		
  	undo();
  }
  if(e.keyCode==49){
	whichcolour=1;
  }
  if(e.keyCode==50){
	whichcolour=2;
  }
  if(e.keyCode==51){
	whichcolour=3;
  }
  if(e.keyCode==52){
	whichcolour=4;
  }
  if(e.keyCode==53){
	whichcolour=5;
  }
  if(e.keyCode==54){
	whichcolour=6;
  }
  if(e.keyCode==55){
	whichcolour=7;
  }
  if(e.keyCode==56){
	whichcolour=8;
  }
  if(e.keyCode==57){
	whichcolour=9;
  }
  if(e.keyCode==48){
	whichcolour=0;
  }
}

document.addEventListener('keyup', deshortcut);
function deshortcut(e) {
  if(e.keyCode==70){
  	f=0;
  }
}

function savestate(){
	for (i=0; i<rows; i++){
		undopc[i]=[];
		for(j=0; j<stitches; j++){
			undopc[i][j] = punchcard[i][j];
		}
	}
	undolength=rows;
	canundo=1;
}

function undo(){
	var temppc=[];
	for (i=0; i<rows; i++){
		temppc[i]=[];
		for(j=0; j<stitches; j++){
			temppc[i][j] = punchcard[i][j];
		}
	}
	for (i=0; i<undolength; i++){
		for(j=0; j<stitches; j++){
			punchcard[i][j] = undopc[i][j];
		}
	}
	for (i=0; i<rows; i++){
		undopc[i]=[];
		for(j=0; j<stitches; j++){
			undopc[i][j] = temppc[i][j];
		}
	}
	draw();
}

function swapcolour(colour){
	whichcolour=colour;
	document.getElementById("colourselect").value = colours[whichcolour];
}

Coloris({
  themeMode: 'dark',
  alpha: false
});