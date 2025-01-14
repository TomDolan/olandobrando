var ratio = window.devicePixelRatio;
var ocanvas = document.getElementById("scrollingo");
oW=50;
oH=50;
ocanvas.width = oW*ratio;
ocanvas.height = oH*ratio;
var octx = ocanvas.getContext("2d");
octx.scale(ratio, ratio);

var landocanvas = document.getElementById("scrollinglando");
landoW=200;
landoH=50;
landocanvas.width = landoW*ratio;
landocanvas.height = landoH*ratio;
var landoctx = landocanvas.getContext("2d");
landoctx.scale(ratio, ratio);

var pi = Math.PI;
var t = window.scrollY/50*-1;
var landostuck=1;

octx.lineWidth = 1;

var bgcolour = "#e3e3e5";
var fgcolour = "#111";

octx.fillStyle = bgcolour;
octx.strokeStyle = fgcolour;

landoctx.fillStyle = bgcolour;
landoctx.strokeStyle = fgcolour;

drawo();
drawlando();

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

function drawlando(){
	landoctx.clearRect(0, 0, 200, 50); 
	r = 18;
	u = r/2.5;
	landoctx.save();
	landoctx.transform(1,0,0,-1,-2*r-2,landoH-6);
	//l
	landoctx.beginPath();
	landoctx.rect(6*u,0,2*u,8*u);
	landoctx.stroke();
	//a
	landoctx.beginPath();
	landoctx.arc(r+9*u,r,r,pi/2,3*pi/2);
	landoctx.lineTo(14*u,0);
	landoctx.lineTo(14*u,2*r);
	landoctx.closePath();
	landoctx.stroke();
	//n
	landoctx.beginPath();
	landoctx.arc(r+15*u,r,r,0,pi);
	landoctx.lineTo(15*u,0);
	landoctx.lineTo(20*u,0);
	landoctx.closePath();
	landoctx.stroke();
	//d
	landoctx.beginPath();
	landoctx.arc(r+21*u,r,r,pi/2,3*pi/2);
	landoctx.lineTo(26*u,0);
	landoctx.lineTo(26*u,8*u);
	landoctx.lineTo(24*u,8*u);
	landoctx.lineTo(24*u,2*r);
	landoctx.closePath();
	landoctx.stroke();
	//o
	landoctx.beginPath();
	landoctx.arc(r+27*u,r,r,0,2*pi);
	landoctx.stroke();
	
	landoctx.restore();
}

function drawbullet(x,y,r,xr,sign){
	if (sign){
		xr = 2*pi-xr;
	}
	u = r/2.5
	octx.save()
	octx.transform(1,0,0,1,x,y);
	xr = (xr+100*pi)%(2*pi);
	
	octx.fillStyle = bgcolour;
	octx.strokeStyle = fgcolour;
	if (xr>=0 && xr<pi/2) {
		// 0 < xr <pi/2
		octx.beginPath();
		octx.arc(0,0,r,pi/2,3*pi/2);
		octx.lineTo(r*Math.cos(xr), -r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, 3*pi/2, 5*pi/2);
		octx.lineTo(0, r);
		octx.stroke();
	} else if (xr>=pi/2 && xr<pi) {
		// pi/2 < xr < pi
		octx.beginPath();
		octx.arc(0,0,r,3*pi/2,5*pi/2);
		octx.lineTo(r*Math.cos(xr), r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		octx.lineTo(0, -r);
		octx.stroke();
	} else if (xr>=pi && xr<3*pi/2) {
		// pi < xr < 3*pi/2
		octx.beginPath();
		octx.arc(0,0,r,3*pi/2,5*pi/2);
		octx.lineTo(r*Math.cos(xr), r);
		octx.ellipse(r*Math.cos(xr), 0, r*(Math.sin(xr)*Math.sin(xr)), r, 0, pi/2, 3*pi/2);
		octx.lineTo(0, -r);
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
	drawo();
	if (window.scrollY==0){
		document.getElementById("scrollinglando").style.position = "fixed";
		landostuck=1;
	} else if (window.scrollY>0&&landostuck){
		landostuck=0;
		document.getElementById("scrollinglando").style.position = "static";
	}
};


document.onvisibilitychange = async(evt) => {
  if (document.visibilityState === "hidden") {
  } else {
		drawo();
		drawlando();
  }
};


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}