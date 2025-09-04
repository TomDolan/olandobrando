

var c = document.getElementById("gamescreen");
var ctx = c.getContext("2d");

const dpr = window.devicePixelRatio; //2
const rect = c.getBoundingClientRect();

c.width = rect.width * dpr;
c.height = rect.height * dpr;

ctx.scale(dpr, dpr);

W=rect.width;
H=rect.height;

c.style.width = W+"px";
c.style.height = H+"px";

var X=[];
var Y=[];

var nx = 300;
var ny = nx/W*H;

var t=0;
var pi = Math.PI;

for (var i = 0; i<=nx; i++){
	X[i]=[];
	Y[i]=[];
	for (var j = 0; j<=ny; j++){
		X[i][j]=i*(W)/nx;
		Y[i][j]=j*(H)/ny;
	}
}

var pageX=W/2;
var pageY=H/2;
var dx = 0;
var dy = 0;
var r = 0;
var forceX = 0;
var forceY = 0;

var bgr=0;
var bgg=0;
var bgb=0;
var lights = 0;

draw();

function draw(){
	ctx.rect(0, 0, W, H);
	if (lights){
		ctx.fillStyle = "rgba(" + bgr + "," + bgg + "," + bgb + "," + 1+ ")";
		
	} else {
		ctx.fillStyle = "#000";
	}
	ctx.fill();
	
	bgr = Math.pow(Math.sin(t/120),6)*255;
	bgg = Math.pow(Math.sin(t/110+104),6)*255;
	bgb = Math.pow(Math.sin(t/100+106),6)*255;
	
	if (t%300>250){
		bgr = Math.pow(Math.sin(t/2),6)*255;
		bgg = Math.pow(Math.sin(t/2.1+104),6)*255;
		bgb = Math.pow(Math.sin(t/2.2+106),6)*255;
	}
	
	//ctx.clearRect(0, 0, W, H);
	ctx.beginPath();
	for (var i = 0; i<nx; i++){
		for (var j = 0; j<ny; j++){
			ctx.moveTo(X[i][j+1], Y[i][j+1]);
			ctx.lineTo(X[i][j], Y[i][j]);
			ctx.lineTo(X[i+1][j], Y[i+1][j]);
		}
 		ctx.moveTo(X[i][ny], Y[i][ny]);
 		ctx.lineTo(X[i+1][ny], Y[i+1][ny]);
	}
	
	for (var j=0; j<ny; j++){
		ctx.moveTo(X[nx][j], Y[nx][j]);
		ctx.lineTo(X[nx][j+1], Y[nx][j+1]);
	}
	ctx.lineWidth = .7;
	if (lights){
		ctx.strokeStyle = "rgba(" + (255-bgr) + "," + (255-bgg) + "," + (255-bgb) + "," + 1+ ")";
	} else {
		ctx.strokeStyle = "#fff";
	}
	ctx.stroke();
// 	ctx.beginPath();
// 	ctx.arc(pageX, pageY, 50, 0, 2 * Math.PI);
// 	if (lights){
// 		ctx.fillStyle = "rgba(" + (255-bgr) + "," + (255-bgg) + "," + (255-bgb) + "," + 1+ ")";
// 	} else {
// 		ctx.fillStyle = "#fff";
// 	}
// 	ctx.fill();
//	ctx.filter = "blur(1px)";
}

function move(){
	for (var i = 0; i<=nx; i++){
		for (var j = 0; j<=ny; j++){
			
			dx = pageX-X[i][j];
			dy = pageY-Y[i][j];
			r = Math.sqrt(dx*dx + dy*dy);
			
			if (!mouseDown){				
				dx += 5*(Math.random()-.5);
				dy += 5*(Math.random()-.5);
			}
			
            if (r>1){
	            forceX = (dx / Math.sqrt(r)) * 3.5;
    	        forceY = (dy / Math.sqrt(r)) * 3.5;
			}
			
			//alert(offsetr);
			
			
//			X[i][j]=i*(W)/nx + Math.sin( (t/10000*(i-nx/2))*W/pi )*W/nx;
//			Y[i][j]=j*(H)/ny + Math.sin( (t/10000*(j-ny/2))*H/pi )*H/ny;
			
			X[i][j]=i*(W+800)/nx-400 + Math.sin( (t/500000*(i-nx/2))*W/pi )*W/nx;
			Y[i][j]=j*(H+800)/ny-400 + Math.sin( (t/500000*(j-ny/2))*H/pi )*H/ny;	
			
			X[i][j]+=forceX*2;
			Y[i][j]+=forceY*2;	
			

		}
	}
	t++;
	draw();
}

let round = 0;

function loopGame(){
    move();
    round++;
    if (round < 1000) {
        setTimeout(loopGame, 50)
    }
}

loopGame();

function mousemove(event) {
  pageX = event.pageX;
  pageY = event.pageY;
}

document.addEventListener("mousemove", mousemove, false);
document.addEventListener("mouseenter", mousemove, false);
document.addEventListener("mouseleave", mousemove, false);

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    lights = 1-lights;
  }
}
