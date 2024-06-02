var ratio = window.devicePixelRatio;
var ocanvas = document.getElementById("scrollingo");
oW=50;
oH=50;
ocanvas.width = oW*ratio;
ocanvas.height = oH*ratio;
var octx = ocanvas.getContext("2d");
octx.scale(ratio, ratio);

var pi = Math.PI;
var t = window.scrollY/50*-1;;

octx.lineWidth = 1;

var bgcolour = "#e3e3e5";
var fgcolour = "#111";

octx.fillStyle = bgcolour;
octx.strokeStyle = fgcolour;

drawo();

function drawo(){
	octx.clearRect(0, 0, oW, oH); 
	x=12;
	y=6;
	r=18;
	u = r/2.5
	
	octx.save();
	octx.transform(1,0,0,-1,x,oH-y);
	
	octx.fillStyle = bgcolour;
	octx.strokeStyle = fgcolour;
	
	// o
	octx.save();
	octx.transform(1,0,0,1,2*r,r);
	octx.rotate(pi/2);
	drawbullet(0,r,r,2*pi*((t+15)%60)/60,1);
	octx.restore();
	
	octx.restore();
}

function drawbullet(x,y,r,xr,sign){
	if (sign){
		xr = 2*pi-xr;
	}
	u = r/2.5
	octx.save()
	octx.transform(1,0,0,1,x,y);
	xr = (xr+100*pi)%(2*pi);
	
	octx.fillStyle = "rgba(227, 227, 229, 0.75)";
	octx.strokeStyle = fgcolour;
	if (xr>=0 && xr<pi/2) {
		// 0 < xr <pi/2
		octx.beginPath();
		octx.arc(0,0,r,pi/2,3*pi/2);
		octx.lineTo(r*Math.cos(xr), -r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, 3*pi/2, 5*pi/2);
		octx.lineTo(0, r);
		octx.fill();
		octx.stroke();
	} else if (xr>=pi/2 && xr<pi) {
		// pi/2 < xr < pi
		octx.beginPath();
		octx.arc(0,0,r,3*pi/2,5*pi/2);
		octx.lineTo(r*Math.cos(xr), r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		octx.lineTo(0, -r);
		octx.fill();
		octx.stroke();
	} else if (xr>=pi && xr<3*pi/2) {
		// pi < xr < 3*pi/2
		octx.beginPath();
		octx.arc(0,0,r,3*pi/2,5*pi/2);
		octx.lineTo(r*Math.cos(xr), r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		octx.lineTo(0, -r);
		octx.fill();
		octx.stroke();
		octx.beginPath();
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, -pi/2, pi/2);
		octx.stroke();
	} else if (xr>=3*pi/2 && xr<=2*pi) {
		// 3*pi/2 < xr < 2*pi
		octx.beginPath();
		octx.arc(0,0,r,pi/2,3*pi/2);
		octx.lineTo(r*Math.cos(xr), -r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, 3*pi/2, 5*pi/2);
		octx.lineTo(0, r);
		octx.fill();
		octx.stroke();
		octx.beginPath();
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		octx.stroke();
	} else {
		alert(xr);
	}
	
	octx.restore();
}

document.onscroll = function(){
	
	t=window.scrollY/50*1;
	//document.getElementById("tester").innerHTML = t;
	drawo();
	
};