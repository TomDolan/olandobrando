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

	if (brando){
		boxwidth = 21*letterradius + 1*letterwidth + 11*letterspacing;
		
		paper.transform(1,0,0,-1,0,40);

		paper.beginPath();
		
		if (letterhole){
			//o
			paper.arc(letterradius,0,letterradius,0,2*pi);
			paper.arc(letterradius,0,letterradius-letterwidth,0,2*pi,-1);
			//l
			paper.rect(2*letterradius+letterspacing,-letterradius,letterwidth,letterheight);
			paper.moveTo(3*letterradius+2*letterspacing+letterwidth,0);
			//a
			paper.arc(3*letterradius+2*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,-letterradius);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.lineTo(3*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.arc(3*letterradius+2*letterspacing+letterwidth,0,letterradius-letterwidth,-pi/2,pi/2,-1);
			paper.lineTo(4*letterradius+2*letterspacing,letterradius-letterwidth,-1);
			paper.lineTo(4*letterradius+2*letterspacing,-letterradius+letterwidth,-1);
			paper.lineTo(3*letterradius+2*letterspacing+letterwidth,-letterradius+letterwidth,-1);
			paper.moveTo(5*letterradius+3*letterspacing+letterwidth,0);
			//n
			paper.arc(5*letterradius+3*letterspacing+letterwidth,0,letterradius,0,pi);
			paper.lineTo(4*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(4*letterradius+3*letterspacing+2*letterwidth,-letterradius);
			paper.lineTo(4*letterradius+3*letterspacing+2*letterwidth,0);
			paper.arc(5*letterradius+3*letterspacing+letterwidth,0,letterradius-letterwidth,-pi,0,-1);
			paper.lineTo(6*letterradius+3*letterspacing,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,0);
			paper.moveTo(7*letterradius+4*letterspacing+letterwidth,0);
			//d
			paper.arc(7*letterradius+4*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterradius);
			paper.lineTo(7*letterradius+4*letterspacing+letterwidth,letterradius);
			paper.arc(7*letterradius+4*letterspacing+letterwidth,0,letterradius-letterwidth,-pi/2,pi/2,-1);
			paper.lineTo(8*letterradius+4*letterspacing,letterradius-letterwidth,-1);
			paper.lineTo(8*letterradius+4*letterspacing,-letterradius+letterwidth,-1);
			paper.lineTo(7*letterradius+4*letterspacing+letterwidth,-letterradius+letterwidth,-1);
			paper.moveTo(9*letterradius+5*letterspacing+letterwidth,0);
			//o
			paper.arc(9*letterradius+5*letterspacing+letterwidth,0,letterradius,0,2*pi);
			paper.arc(9*letterradius+5*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi,-1);
			paper.moveTo(11*letterradius+6*letterspacing+letterwidth,0);
			//b
			paper.arc(11*letterradius+6*letterspacing+letterwidth,0,letterradius,-pi/2,pi/2);
			paper.lineTo(10*letterradius+6*letterspacing+2*letterwidth,letterradius);
			paper.lineTo(10*letterradius+6*letterspacing+2*letterwidth,letterheight-letterradius);
			paper.lineTo(10*letterradius+6*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(10*letterradius+6*letterspacing+letterwidth,-letterradius);
			paper.lineTo(11*letterradius+6*letterspacing+letterwidth,-letterradius);
			paper.arc(11*letterradius+6*letterspacing+letterwidth,0,letterradius-letterwidth,pi/2,3*pi/2,-1);
			paper.lineTo(10*letterradius+6*letterspacing+2*letterwidth,-letterradius+letterwidth);
			paper.lineTo(10*letterradius+6*letterspacing+2*letterwidth,letterradius-letterwidth);
			paper.lineTo(11*letterradius+6*letterspacing+letterwidth,letterradius-letterwidth);
			paper.moveTo(13*letterradius+7*letterspacing+letterwidth,0);
			//r
			paper.arc(13*letterradius+7*letterspacing+letterwidth,0,letterradius,pi/2,pi);
			paper.lineTo(12*letterradius+7*letterspacing+letterwidth,-letterradius);
			paper.lineTo(12*letterradius+7*letterspacing+letterwidth+letterwidth,-letterradius);
			paper.lineTo(12*letterradius+7*letterspacing+letterwidth+letterwidth,0);
			paper.arc(13*letterradius+7*letterspacing+letterwidth,0,letterradius-letterwidth,pi,pi/2,-1);
			paper.lineTo(13*letterradius+7*letterspacing+letterwidth,letterradius);
			paper.moveTo(14*letterradius+8*letterspacing+letterwidth,0);
			//a
			paper.arc(14*letterradius+8*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(15*letterradius+8*letterspacing+letterwidth,-letterradius);
			paper.lineTo(15*letterradius+8*letterspacing+letterwidth,letterradius);
			paper.lineTo(14*letterradius+8*letterspacing+letterwidth,letterradius);
			paper.arc(14*letterradius+8*letterspacing+letterwidth,0,letterradius-letterwidth,-pi/2,pi/2,-1);
			paper.lineTo(15*letterradius+8*letterspacing,letterradius-letterwidth,-1);
			paper.lineTo(15*letterradius+8*letterspacing,-letterradius+letterwidth,-1);
			paper.lineTo(14*letterradius+8*letterspacing+letterwidth,-letterradius+letterwidth,-1);
			paper.moveTo(16*letterradius+9*letterspacing+letterwidth,0);
			//n
			paper.arc(16*letterradius+9*letterspacing+letterwidth,0,letterradius,0,pi);
			paper.lineTo(15*letterradius+9*letterspacing+letterwidth,-letterradius);
			paper.lineTo(15*letterradius+9*letterspacing+2*letterwidth,-letterradius);
			paper.lineTo(15*letterradius+9*letterspacing+2*letterwidth,0);
			paper.arc(16*letterradius+9*letterspacing+letterwidth,0,letterradius-letterwidth,-pi,0,-1);
			paper.lineTo(17*letterradius+9*letterspacing,-letterradius);
			paper.lineTo(17*letterradius+9*letterspacing+letterwidth,-letterradius);
			paper.lineTo(17*letterradius+9*letterspacing+letterwidth,0);
			paper.moveTo(18*letterradius+10*letterspacing+letterwidth,0);
			//d
			paper.arc(18*letterradius+10*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(19*letterradius+10*letterspacing+letterwidth,-letterradius);
			paper.lineTo(19*letterradius+10*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(19*letterradius+10*letterspacing,letterheight-letterradius);
			paper.lineTo(19*letterradius+10*letterspacing,letterradius);
			paper.lineTo(18*letterradius+10*letterspacing+letterwidth,letterradius);
			paper.arc(18*letterradius+10*letterspacing+letterwidth,0,letterradius-letterwidth,-pi/2,pi/2,-1);
			paper.lineTo(19*letterradius+10*letterspacing,letterradius-letterwidth,-1);
			paper.lineTo(19*letterradius+10*letterspacing,-letterradius+letterwidth,-1);
			paper.lineTo(18*letterradius+10*letterspacing+letterwidth,-letterradius+letterwidth,-1);
			paper.moveTo(20*letterradius+11*letterspacing+letterwidth,0);
			//o
			paper.arc(20*letterradius+11*letterspacing+letterwidth,0,letterradius,0,2*pi);
			paper.arc(20*letterradius+11*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi,-1);
			
		} else {
			//o
			paper.arc(letterradius,0,letterradius,0,2*pi);
			//l
			paper.rect(2*letterradius+letterspacing,-letterradius,letterwidth,letterheight);
			paper.moveTo(3*letterradius+2*letterspacing+letterwidth,0);
			//a
			paper.arc(3*letterradius+2*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,-letterradius);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.lineTo(3*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.moveTo(5*letterradius+3*letterspacing+letterwidth,0);
			//n
			paper.arc(5*letterradius+3*letterspacing+letterwidth,0,letterradius,0,pi);
			paper.lineTo(4*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,0);
			paper.moveTo(7*letterradius+4*letterspacing+letterwidth,0);
			//d
			paper.arc(7*letterradius+4*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterradius);
			paper.lineTo(7*letterradius+4*letterspacing+letterwidth,letterradius);
			paper.moveTo(9*letterradius+5*letterspacing+letterwidth,0);
			//o
			paper.arc(9*letterradius+5*letterspacing+letterwidth,0,letterradius,0,2*pi);
			paper.moveTo(11*letterradius+6*letterspacing+letterwidth,0);
			//b
			paper.arc(11*letterradius+6*letterspacing+letterwidth,0,letterradius,-pi/2,pi/2);
			paper.lineTo(10*letterradius+6*letterspacing+2*letterwidth,letterradius);
			paper.lineTo(10*letterradius+6*letterspacing+2*letterwidth,letterheight-letterradius);
			paper.lineTo(10*letterradius+6*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(10*letterradius+6*letterspacing+letterwidth,-letterradius);
			paper.lineTo(11*letterradius+6*letterspacing+letterwidth,-letterradius);
			paper.moveTo(13*letterradius+7*letterspacing+letterwidth,0);
			//r
			paper.arc(13*letterradius+7*letterspacing+letterwidth,0,letterradius,pi/2,pi);
			paper.lineTo(12*letterradius+7*letterspacing+letterwidth,-letterradius);
			paper.lineTo(13*letterradius+7*letterspacing+letterwidth,-letterradius);
			paper.lineTo(13*letterradius+7*letterspacing+letterwidth,letterradius);
			paper.moveTo(14*letterradius+8*letterspacing+letterwidth,0);
			//a
			paper.arc(14*letterradius+8*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(15*letterradius+8*letterspacing+letterwidth,-letterradius);
			paper.lineTo(15*letterradius+8*letterspacing+letterwidth,letterradius);
			paper.lineTo(14*letterradius+8*letterspacing+letterwidth,letterradius);
			paper.moveTo(16*letterradius+9*letterspacing+letterwidth,0);
			//n
			paper.arc(16*letterradius+9*letterspacing+letterwidth,0,letterradius,0,pi);
			paper.lineTo(15*letterradius+9*letterspacing+letterwidth,-letterradius);
			paper.lineTo(17*letterradius+9*letterspacing+letterwidth,-letterradius);
			paper.lineTo(17*letterradius+9*letterspacing+letterwidth,0);
			paper.moveTo(18*letterradius+10*letterspacing+letterwidth,0);
			//d
			paper.arc(18*letterradius+10*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(19*letterradius+10*letterspacing+letterwidth,-letterradius);
			paper.lineTo(19*letterradius+10*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(19*letterradius+10*letterspacing,letterheight-letterradius);
			paper.lineTo(19*letterradius+10*letterspacing,letterradius);
			paper.lineTo(18*letterradius+10*letterspacing+letterwidth,letterradius);
			paper.moveTo(20*letterradius+11*letterspacing+letterwidth,0);
			//o
			paper.arc(20*letterradius+11*letterspacing+letterwidth,0,letterradius,0,2*pi);
			
		}
		paper.fill();
		
	} else {
		boxwidth = 5*letterradius*2 + letterwidth + 5*letterspacing;
	
		paper.transform(1,0,0,-1,0,40);

		paper.beginPath();
		
		if (letterhole){
			//o
			paper.arc(letterradius,0,letterradius,0,2*pi);
			paper.arc(letterradius,0,letterradius-letterwidth,0,2*pi,-1);
			//l
			paper.rect(2*letterradius+letterspacing,-letterradius,letterwidth,letterheight);
			paper.moveTo(3*letterradius+2*letterspacing+letterwidth,0);
			//a
			paper.arc(3*letterradius+2*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,-letterradius);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.lineTo(3*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.arc(3*letterradius+2*letterspacing+letterwidth,0,letterradius-letterwidth,-pi/2,pi/2,-1);
			paper.lineTo(4*letterradius+2*letterspacing,letterradius-letterwidth,-1);
			paper.lineTo(4*letterradius+2*letterspacing,-letterradius+letterwidth,-1);
			paper.lineTo(3*letterradius+2*letterspacing+letterwidth,-letterradius+letterwidth,-1);
			paper.moveTo(5*letterradius+3*letterspacing+letterwidth,0);
			//n
			paper.arc(5*letterradius+3*letterspacing+letterwidth,0,letterradius,0,pi);
			paper.lineTo(4*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(4*letterradius+3*letterspacing+2*letterwidth,-letterradius);
			paper.lineTo(4*letterradius+3*letterspacing+2*letterwidth,0);
			paper.arc(5*letterradius+3*letterspacing+letterwidth,0,letterradius-letterwidth,-pi,0,-1);
			paper.lineTo(6*letterradius+3*letterspacing,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,0);
			paper.moveTo(7*letterradius+4*letterspacing+letterwidth,0);
			//d
			paper.arc(7*letterradius+4*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterradius);
			paper.lineTo(7*letterradius+4*letterspacing+letterwidth,letterradius);
			paper.arc(7*letterradius+4*letterspacing+letterwidth,0,letterradius-letterwidth,-pi/2,pi/2,-1);
			paper.lineTo(8*letterradius+4*letterspacing,letterradius-letterwidth,-1);
			paper.lineTo(8*letterradius+4*letterspacing,-letterradius+letterwidth,-1);
			paper.lineTo(7*letterradius+4*letterspacing+letterwidth,-letterradius+letterwidth,-1);
			paper.moveTo(9*letterradius+5*letterspacing+letterwidth,0);
			//o
			paper.arc(9*letterradius+5*letterspacing+letterwidth,0,letterradius,0,2*pi);
			paper.arc(9*letterradius+5*letterspacing+letterwidth,0,letterradius-letterwidth,0,2*pi,-1);
			
		} else {
			//o
			paper.arc(letterradius,0,letterradius,0,2*pi);
			//l
			paper.rect(2*letterradius+letterspacing,-letterradius,letterwidth,letterheight);
			paper.moveTo(3*letterradius+2*letterspacing+letterwidth,0);
			//a
			paper.arc(3*letterradius+2*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,-letterradius);
			paper.lineTo(4*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.lineTo(3*letterradius+2*letterspacing+letterwidth,letterradius);
			paper.moveTo(5*letterradius+3*letterspacing+letterwidth,0);
			//n
			paper.arc(5*letterradius+3*letterspacing+letterwidth,0,letterradius,0,pi);
			paper.lineTo(4*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,-letterradius);
			paper.lineTo(6*letterradius+3*letterspacing+letterwidth,0);
			paper.moveTo(7*letterradius+4*letterspacing+letterwidth,0);
			//d
			paper.arc(7*letterradius+4*letterspacing+letterwidth,0,letterradius,pi/2,3*pi/2);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing+letterwidth,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterheight-letterradius);
			paper.lineTo(8*letterradius+4*letterspacing,letterradius);
			paper.lineTo(7*letterradius+4*letterspacing+letterwidth,letterradius);
			paper.moveTo(9*letterradius+5*letterspacing+letterwidth,0);
			//o
			paper.arc(9*letterradius+5*letterspacing+letterwidth,0,letterradius,0,2*pi);
		}
		paper.fill();
	}

	paper.resetTransform();
}

function init(){
	W=Math.min(600,window.innerWidth*.9);
	H=61;
	c.width = W*2;
	c.height = H*2;
	c.style.width = W+"px";
	c.style.height = H+"px";
	//paper.fillStyle = bgc;
	//paper.fillRect(0,0,W,H);
	paper.clearRect(0,0,W,H)
	paper.scale(2,2);
}

function randomise(){
	init();

	letterspacing = Math.random()*(scale-1)+1;
	letterradius = scale;
	//letterheight = letterradius*2+Math.random()*(2*scale)+1;
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
	document.getElementById("header").style.backgroundColor = fgc;
	document.getElementById("footer").style.backgroundColor = fgc;
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
	document.getElementById("header").style.backgroundColor = fgc;
	document.getElementById("footer").style.backgroundColor = fgc;
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
instaW=40;
c2.width = instaW*2;
c2.height = instaW*2;
c2.style.width = instaW+"px";
c2.style.height = instaW+"px";
paper2.scale(2,2);
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
var logo = document.getElementById("logobox");
var content = document.getElementById("content");

function expandmenu() {
	var x = document.getElementById("menu");
	if (x.className === "menu") {
		x.className += " expanded";
	} else {
		x.className = "menu";
	}
}

function stickyolando() {
	var x = document.getElementById("menu");
	if (window.pageYOffset > 40 && x.className === "menu") {
		logo.classList.add("stickylogo");
	} else {
		logo.classList.remove("stickylogo");
	}
}

