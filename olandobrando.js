///////////logo//////////////////

var c = document.getElementById("logo");
var paper = c.getContext("2d");

bgc = '#1a1a1a';//'#f1f3f5';
fgc = '#fafafa';//'#F8727E';
pi = Math.PI;

scale = 18;
brando = 0;

init();
fav();

function draw(){
	paper.fillStyle= fgc;
	/*paper.beginPath();
	paper.arc(0,100,100,0,Math.PI)
	paper.arc(-85,15,15,Math.PI,3*Math.PI/2)
	paper.arc(-85,-15,15,Math.PI/2,Math.PI)
	paper.arc(0,-100,100,Math.PI,5*Math.PI/4)
	paper.arc(0,-100,100,7*Math.PI/4,2*Math.PI)
	paper.arc(85,-15,15,0,Math.PI/2)
	paper.arc(85,15,15,-Math.PI/2,0)
	paper.fill();*/

	/*paper.beginPath();
	paper.moveTo(-boxwidth/2,-H/2);
	paper.lineTo(-boxwidth/2,H/2);
	paper.moveTo(boxwidth/2,-H/2);
	paper.lineTo(boxwidth/2,H/2);
	paper.moveTo(-W/2,-letterradius);
	paper.lineTo(W/2,-letterradius);
	paper.moveTo(-W/2,letterheight-letterradius);
	paper.lineTo(W/2,letterheight-letterradius);
	paper.stroke();*/

	if (brando){
		boxwidth = 21*letterradius + 1*letterwidth + 11*letterspacing;
		paper.transform(1,0,0,-1,boxwidth/2,40);
		//letters
		paper.beginPath();
		//o
		paper.arc(-boxwidth/2+letterradius,0,letterradius,0,2*pi);
		//l
		paper.rect(-boxwidth/2+2*letterradius+letterspacing,-letterradius,letterwidth,letterheight);
		paper.moveTo(boxwidth/2-7*letterradius-3*letterspacing,0);
		//a
		paper.arc(-boxwidth/2+3*letterradius+2*letterspacing+letterwidth,0,letterradius,0,2*pi);
		paper.rect(-boxwidth/2+3*letterradius+2*letterspacing+letterwidth,-letterradius,letterradius,letterradius*2);
		paper.moveTo(-boxwidth/2-5*letterradius-2*letterspacing,0);
		//n
		paper.arc(-boxwidth/2+5*letterradius+3*letterspacing+letterwidth,0,letterradius,0,2*pi);
		paper.rect(-boxwidth/2+4*letterradius+3*letterspacing+letterwidth,-letterradius,letterradius*2,letterradius);
		paper.moveTo(-boxwidth/2-3*letterradius-letterspacing,0);
		//d
		paper.arc(-boxwidth/2+7*letterradius+4*letterspacing+letterwidth,0,letterradius,0,2*pi);
		paper.rect(-boxwidth/2+7*letterradius+4*letterspacing+letterwidth,-letterradius,letterradius,letterradius*2);
		paper.rect(-boxwidth/2+8*letterradius+4*letterspacing,-letterradius,letterwidth,letterheight);
		paper.moveTo(-boxwidth/2-letterradius,0);
		//o
		paper.arc(-boxwidth/2+9*letterradius+5*letterspacing+letterwidth,0,letterradius,0,2*pi);
		//b
		paper.arc(-boxwidth/2+11*letterradius+6*letterspacing+letterwidth,0,letterradius,0,2*pi);
		paper.rect(-boxwidth/2+10*letterradius+6*letterspacing+letterwidth,-letterradius,letterradius,letterradius*2);
		paper.rect(-boxwidth/2+10*letterradius+6*letterspacing+letterwidth,-letterradius,letterwidth,letterheight);
		paper.moveTo(-boxwidth/2-letterradius,0);
		//r
		paper.moveTo(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0);
		paper.arc(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
		paper.rect(-boxwidth/2+12*letterradius+7*letterspacing+letterwidth,-letterradius,letterradius,letterradius);
		paper.moveTo(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0);
		//a
		paper.arc(boxwidth/2-7*letterradius-3*letterspacing,0,letterradius,0,2*pi);
		paper.rect(boxwidth/2-7*letterradius-3*letterspacing,-letterradius,letterradius,letterradius*2);
		paper.moveTo(boxwidth/2-5*letterradius-2*letterspacing,0);
		//n
		paper.arc(boxwidth/2-5*letterradius-2*letterspacing,0,letterradius,0,2*pi);
		paper.rect(boxwidth/2-6*letterradius-2*letterspacing,-letterradius,letterradius*2,letterradius);
		paper.moveTo(boxwidth/2-3*letterradius-letterspacing,0);
		//d
		paper.arc(boxwidth/2-3*letterradius-letterspacing,0,letterradius,0,2*pi);
		paper.rect(boxwidth/2-3*letterradius-letterspacing,-letterradius,letterradius,letterradius*2);
		paper.rect(boxwidth/2-2*letterradius-letterspacing-letterwidth,-letterradius,letterwidth,letterheight);
		paper.moveTo(boxwidth/2-letterradius,0);
		//o
		paper.arc(boxwidth/2-letterradius,0,letterradius,0,2*pi);
		paper.fill();

		if (letterhole){
		//letters holes
		paper.fillStyle = bgc;
		paper.beginPath();
		//o
		paper.arc(-boxwidth/2+letterradius,0,letterradius-letterwidth,0,2*pi);
		//l
		//a
		paper.arc(-boxwidth/2+3*letterradius+2*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi);
		paper.rect(-boxwidth/2+3*letterradius+2*letterspacing+letterwidth,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(-boxwidth/2-5*letterradius-2*letterspacing,0);
		//n
		paper.arc(-boxwidth/2+5*letterradius+3*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi);
		paper.rect(-boxwidth/2+4*letterradius+3*letterspacing+2*letterwidth,-letterradius-1,letterradius*2-letterwidth*2,letterradius+1);
		paper.moveTo(-boxwidth/2-3*letterradius-letterspacing,0);
		//d
		paper.arc(-boxwidth/2+7*letterradius+4*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi);
		paper.rect(-boxwidth/2+7*letterradius+4*letterspacing+letterwidth,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(-boxwidth/2-letterradius,0);
		//o
		paper.arc(-boxwidth/2+9*letterradius+5*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi);
		//b
		paper.arc(-boxwidth/2+11*letterradius+6*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi);
		paper.rect(-boxwidth/2+10*letterradius+6*letterspacing+2*letterwidth,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(-boxwidth/2-letterradius,0);
		//r
		paper.moveTo(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0);
		paper.arc(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0,letterradius-letterwidth,pi/2,3*pi/2);
		paper.rect(-boxwidth/2+12*letterradius+7*letterspacing+letterwidth+letterwidth,-letterradius-1,letterradius-letterwidth+1,letterradius+1);
		paper.rect(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0,1,letterradius-letterwidth);
		paper.moveTo(-boxwidth/2+13*letterradius+7*letterspacing+letterwidth,0);
		//a
		paper.arc(boxwidth/2-7*letterradius-3*letterspacing,0,letterradius-letterwidth,0,2*pi);
		paper.rect(boxwidth/2-7*letterradius-3*letterspacing,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(boxwidth/2-5*letterradius-2*letterspacing,0);
		//n
		paper.arc(boxwidth/2-5*letterradius-2*letterspacing,0,letterradius-letterwidth,0,2*pi);
		paper.rect(boxwidth/2-6*letterradius-2*letterspacing+letterwidth,-letterradius-1,letterradius*2-letterwidth*2,letterradius+1);
		paper.moveTo(boxwidth/2-3*letterradius-letterspacing,0);
		//d
		paper.arc(boxwidth/2-3*letterradius-letterspacing,0,letterradius-letterwidth,0,2*pi);
		paper.rect(boxwidth/2-3*letterradius-letterspacing,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(boxwidth/2-letterradius,0);
		//o
		paper.arc(boxwidth/2-letterradius,0,letterradius-letterwidth,0,2*pi);
	
		paper.fill();
		}
	} else {
		boxwidth = 5*letterradius*2 + letterwidth + 5*letterspacing;
		paper.transform(1,0,0,-1,boxwidth/2,40);
		//letters
		paper.beginPath();
		//o
		paper.arc(-boxwidth/2+letterradius,0,letterradius,0,2*pi);
		//l
		paper.rect(-boxwidth/2+2*letterradius+letterspacing,-letterradius,letterwidth,letterheight);
		paper.moveTo(boxwidth/2-7*letterradius-3*letterspacing,0);
		//a
		paper.arc(boxwidth/2-7*letterradius-3*letterspacing,0,letterradius,0,2*pi);
		paper.rect(boxwidth/2-7*letterradius-3*letterspacing,-letterradius,letterradius,letterradius*2);
		paper.moveTo(boxwidth/2-5*letterradius-2*letterspacing,0);
		//n
		paper.arc(boxwidth/2-5*letterradius-2*letterspacing,0,letterradius,0,2*pi);
		paper.rect(boxwidth/2-6*letterradius-2*letterspacing,-letterradius,letterradius*2,letterradius);
		paper.moveTo(boxwidth/2-3*letterradius-letterspacing,0);
		//d
		paper.arc(boxwidth/2-3*letterradius-letterspacing,0,letterradius,0,2*pi);
		paper.rect(boxwidth/2-3*letterradius-letterspacing,-letterradius,letterradius,letterradius*2);
		paper.rect(boxwidth/2-2*letterradius-letterspacing-letterwidth,-letterradius,letterwidth,letterheight);
		paper.moveTo(boxwidth/2-letterradius,0);
		//o
		paper.arc(boxwidth/2-letterradius,0,letterradius,0,2*pi);
		paper.fill();

		if (letterhole){
		//letters holes
		paper.fillStyle = bgc;
		paper.beginPath();
		//o
		paper.arc(-boxwidth/2+letterradius,0,letterradius-letterwidth,0,2*pi);
		//l
		//a
		paper.arc(boxwidth/2-7*letterradius-3*letterspacing,0,letterradius-letterwidth,0,2*pi);
		paper.rect(boxwidth/2-7*letterradius-3*letterspacing,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(boxwidth/2-5*letterradius-2*letterspacing,0);
		//n
		paper.arc(boxwidth/2-5*letterradius-2*letterspacing,0,letterradius-letterwidth,0,2*pi);
		paper.rect(boxwidth/2-6*letterradius-2*letterspacing+letterwidth,-letterradius-1,letterradius*2-letterwidth*2,letterradius+1);
		paper.moveTo(boxwidth/2-3*letterradius-letterspacing,0);
		//d
		paper.arc(boxwidth/2-3*letterradius-letterspacing,0,letterradius-letterwidth,0,2*pi);
		paper.rect(boxwidth/2-3*letterradius-letterspacing,-letterradius+letterwidth,letterradius-letterwidth,letterradius*2-letterwidth*2);
		paper.moveTo(boxwidth/2-letterradius,0);
		//o
		paper.arc(boxwidth/2-letterradius,0,letterradius-letterwidth,0,2*pi);
		paper.fill();
		}
	}

	paper.resetTransform();
}

function init(){
	W=600;
	H=61;
	c.width = W;
	c.height = H;
	//paper.fillStyle = bgc;
	//paper.fillRect(0,0,W,H);
	paper.clearRect(0,0,W,H)
}

window.onresize = function() {
	init();
	draw();
}

function randomise(){
	init();

	letterspacing = Math.random()*(scale-1)+1;
	letterradius = scale;
	letterheight = letterradius*2+Math.random()*(2*scale)+1;
	letterwidth = Math.max(1,Math.random()*letterradius);
	letterhole = Math.random()>.5;


	draw()
}

function fav(){
	init();

	letterspacing = 4;
	letterradius = scale;
	letterheight = 80;
	letterwidth = 15;
	letterhole = 0;


	draw()
}

colourrandomness = 0;

function grey(){
	fgc = '#fafafa';
	colourrandomness = 0;
	init();

	draw()

	document.getElementById("changingheadercolour").style.backgroundColor = fgc;
}

function colour(){
	colourrandomness ++;
	fullrandom = 20;
	if (colourrandomness>20){
		fgc = getRandomColor();
	} else {
		fgc = "hsl("+ Math.round(360*Math.random()) +","+ Math.round(100*colourrandomness/20*Math.random()) +"%,"+ Math.round(100-100*colourrandomness/20*Math.random()) +"%)";
	}	
	init();

	draw();

	document.getElementById("changingheadercolour").style.backgroundColor = fgc;
}

function brandoornot(){
	init();

	brando = 1-brando;

	draw()
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

////////////////insta////////////////////

// Initialise canvas
var c2 = document.getElementById("insta");
var paper2 = c2.getContext("2d");
instaW=50;
c2.width = instaW;
c2.height = instaW;
paper2.fillStyle = "#F8727E";

paper2.beginPath();
paper2.moveTo(instaW/4+1,1);
paper2.lineTo(instaW-instaW/4+1,1);
paper2.arcTo(instaW-1,1,instaW-1,instaW/4+1,instaW/4);
paper2.lineTo(instaW-1,instaW-instaW/4+1);
paper2.arcTo(instaW-1,instaW-1,instaW-instaW/4+1,instaW-1,instaW/4);
paper2.lineTo(instaW/4+1,instaW-1);
paper2.arcTo(1,instaW-1,1,instaW-instaW/4+1,instaW/4);
paper2.lineTo(1,instaW/4+1);
paper2.arcTo(1,1,instaW/4+1,1,instaW/4);

paper2.moveTo(3*instaW/4,instaW/2);
paper2.arc(instaW/2,instaW/2,instaW/4,0,2*pi,-1);
paper2.moveTo(3*instaW/4+instaW/16,instaW/4-instaW/16);
paper2.arc(3*instaW/4,instaW/4,instaW/16,0,2*pi,-1);
paper2.moveTo(0,instaW/2);
paper2.fill();

/////////////////menu///////////////////////

window.onscroll = function() {stickyolando()};
var x = document.getElementById("menu");
var logo = document.getElementById("logobox");
var logoheight = logo.offsetTop;
var content = document.getElementById("content");

function expandmenu() {
	if (x.className === "menu") {
		x.className += " expanded";
	} else {
		x.className = "menu";
	}
}

function stickyolando() {
  if (window.pageYOffset > logoheight) {
	logo.classList.add("stickylogo");
	content.classList.add("stickycontent");
	x.className = "menu";
  } else {
	logo.classList.remove("stickylogo");
	content.classList.remove("stickycontent");
  }
}