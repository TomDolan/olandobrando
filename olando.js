var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
W=window.innerWidth;
H=window.innerHeight;
c.width = W;
c.height = H;
ctx.beginPath();
ctx.rect(0,0,W,H);
ctx.fillStyle = "#e3e3e5";
ctx.fill();

var pi = Math.PI;
var t = 0;
var dt = .03;
var xpos = 0; 
var ypos = 0;

var timeout;
var moving = 0;
var toffset = 0;
var xoffset = 0;
ctx.lineWidth = 1;

draw();

function draw() {
	ctx.beginPath();
	ctx.rect(0,0,W,H);
	ctx.fillStyle = "#e3e3e5";
	ctx.fill();
	
	if (W>H){
		var olandoh = H/3;
	} else {
		var olandoh = H/2-50*6/3;
	}
	
	var olandor = Math.min(W,H)/14;
		
	if (2*pi*((t+30)%60)/60<pi-.1 || 2*pi*((t+30)%60)/60>pi+.1 || !moving){
		drawolando2(W/2-32*olandor/5,olandoh,olandor);
	} else {
		drawolandostatic(W/2-32*olandor/5,olandoh,olandor);
	}
	
	if (moving){
		t=(xpos-xoffset)/W*120+toffset+60*W;
	} else {
		t+=dt;
	}
	//t=(xpos+W/2)/W*120+30;
	window.requestAnimationFrame(draw);
}

function drawolando1(x,y,r){
	u = r/2.5
	
	ctx.save();
	ctx.transform(1,0,0,-1,x,H-y);
	
	ctx.fillStyle = "#e3e3e5";
	
	//o
	ctx.save();
	ctx.transform(1,0,0,1,2*r,r);
	ctx.rotate(pi/2);
	drawbullet(0,r,r,2*pi*((t+15)%60)/60,1);
	ctx.restore();
	//ctx.beginPath();
	//ctx.arc(r,r,r,0,2*pi);
	//ctx.stroke();
	//l
	ctx.beginPath();
	ctx.rect(6*u,0,2*u,16/5*r);
	ctx.stroke();
	//a
	drawbullet(r+9*u,r,r,2*pi*(t%60)/60);
	//ctx.beginPath();
	//ctx.arc(r+9*u,r,r,pi/2,3*pi/2);
	//ctx.lineTo(14*u,0);
	//ctx.lineTo(14*u,2*r);
	//ctx.closePath();
	//ctx.stroke();
	//n
// 	ctx.beginPath();
// 	ctx.arc(r+15*u,r,r,0,pi);
// 	ctx.lineTo(15*u,0);
// 	ctx.lineTo(20*u,0);
// 	ctx.closePath();
// 	ctx.stroke();
	
	
	ctx.save();
	ctx.transform(1,0,0,1,2*r+15*u,r);
	ctx.rotate(pi/2);
	drawbullet(0,r,r,2*pi*((t+30)%60)/60);
	ctx.restore();
	//d
	ctx.beginPath();
	ctx.arc(r+21*u,r,r,pi/2,3*pi/2);
	ctx.lineTo(26*u,0);
	ctx.lineTo(26*u,16/5*r);
	ctx.lineTo(24*u,16/5*r);
	ctx.lineTo(24*u,2*r);
	ctx.closePath();
	ctx.stroke();
	//o
	drawbullet(r+27*u,r,r,2*pi*((t+45)%60)/60,1);
	
	ctx.restore();
}

function drawolando2(x,y,r){
	u = r/2.5
	
	ctx.save();
	ctx.transform(1,0,0,-1,x,H-y);
	
	ctx.fillStyle = "#e3e3e5";
	
	//o
	ctx.save();
	ctx.transform(1,0,0,1,2*r,r);
	ctx.rotate(pi/2);
	drawbullet(0,r,r,2*pi*((t+15)%60)/60,1);
	ctx.restore();
	//l/d
	ctx.save();
	ctx.transform(1,0,0,1,16*u,8/5*r);
	ctx.rotate(-2*pi*((t/2)%60)/60);
	ctx.beginPath();
	ctx.rect(-10*u,-8/5*r,2*u,16/5*r);
	ctx.rect(8*u,-8/5*r,2*u,16/5*r);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	//a
	drawbullet(r+9*u,r,r,2*pi*(t%60)/60);
	//n
	ctx.save();
	ctx.transform(1,0,0,1,2*r+15*u,r);
	ctx.rotate(pi/2);
	drawbullet(0,r,r,2*pi*((t+30)%60)/60);
	ctx.restore();
	//d
	drawbullet(r+21*u,r,r,2*pi*(t%60)/60,1);
	//o
	ctx.save();
	ctx.transform(1,0,0,1,2*r+27*u,r);
	ctx.rotate(pi/2);
	drawbullet(0,r,r,2*pi*((t+15)%60)/60);
	ctx.restore();
	//coverd(r+21*u,r,r,2*pi*(t%60)/60,1);
	
	ctx.restore();
}

function drawolandostatic(x,y,r){
	u = r/2.5
	ctx.save();
	ctx.transform(1,0,0,-1,x,H-y);
	
	ctx.fillStyle = "#e3e3e5";
	ctx.strokeStyle = "#111";
	
	//o
	ctx.beginPath();
	ctx.arc(r,r,r,0,2*pi);
	ctx.fill();
	ctx.stroke();
	//l
	ctx.beginPath();
	ctx.rect(6*u,0,2*u,16/5*r);
	ctx.fill();
	ctx.stroke();
	//a
	ctx.beginPath();
	ctx.arc(r+9*u,r,r,pi/2,3*pi/2);
	ctx.lineTo(14*u,0);
	ctx.lineTo(14*u,2*r);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//n
	ctx.beginPath();
	ctx.arc(r+15*u,r,r,0,pi);
	ctx.lineTo(15*u,0);
	ctx.lineTo(20*u,0);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//d
	ctx.beginPath();
	ctx.arc(r+21*u,r,r,pi/2,3*pi/2);
	ctx.lineTo(26*u,0);
	ctx.lineTo(26*u,16/5*r);
	ctx.lineTo(24*u,16/5*r);
	ctx.lineTo(24*u,2*r);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//o
	ctx.beginPath();
	ctx.arc(r+27*u,r,r,0,2*pi);
	ctx.fill();
	ctx.stroke();
	
	ctx.restore();
}

function drawbullet(x,y,r,xr,sign){
	if (sign){
		xr = 2*pi-xr;
	}
	u = r/2.5
	ctx.save()
	ctx.transform(1,0,0,1,x,y);
	
	ctx.fillStyle = "#e3e3e5";
	ctx.strokeStyle = "#111";
	if (xr>=0 && xr<pi/2) {
		// 0 < xr <pi/2
		ctx.beginPath();
		ctx.arc(0,0,r,pi/2,3*pi/2);
		ctx.lineTo(r*Math.cos(xr), -r);
		ctx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, 3*pi/2, 5*pi/2);
		ctx.lineTo(0, r);
		ctx.fill();
		ctx.stroke();
	} else if (xr>=pi/2 && xr<pi) {
		// pi/2 < xr < pi
		ctx.beginPath();
		ctx.arc(0,0,r,3*pi/2,5*pi/2);
		ctx.lineTo(r*Math.cos(xr), r);
		ctx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		ctx.lineTo(0, -r);
		ctx.fill();
		ctx.stroke();
	} else if (xr>=pi && xr<3*pi/2) {
		// pi < xr < 3*pi/2
		ctx.beginPath();
		ctx.arc(0,0,r,3*pi/2,5*pi/2);
		ctx.lineTo(r*Math.cos(xr), r);
		ctx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		ctx.lineTo(0, -r);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, -pi/2, pi/2);
		ctx.stroke();
	} else if (xr>=3*pi/2 && xr<=2*pi) {
		// 3*pi/2 < xr < 2*pi
		ctx.beginPath();
		ctx.arc(0,0,r,pi/2,3*pi/2);
		ctx.lineTo(r*Math.cos(xr), -r);
		ctx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, 3*pi/2, 5*pi/2);
		ctx.lineTo(0, r);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		ctx.stroke();
	} else {
		//alert(xr);
	}

	
	ctx.restore();
}
		
window.onresize = function() {
	W=window.innerWidth;
	H=window.innerHeight;
	c.width = W;
	c.height = H;
	ctx.fillStyle = '#e3e3e5';
	ctx.fillRect(0,0,W,H);
	draw();
}

document.getElementById("canvasbox").onmousemove = coords;

function coords(e){
	xpos = e.clientX;
	ypos = e.clientY;
	if(!moving){
		toffset = t;
		xoffset = xpos;
	}
	moving = 1;
	clearTimeout(timeout);
	if (2*pi*((t+30)%60)/60<pi-.1 || 2*pi*((t+30)%60)/60>pi+.1){
		timeout = setTimeout(function(){notmoving();}, 50);
	} else {
		timeout = setTimeout(function(){notmoving();}, 5000);
	}
}

function notmoving() {
	moving = 0;
}
