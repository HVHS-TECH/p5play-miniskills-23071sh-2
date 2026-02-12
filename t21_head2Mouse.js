/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(500, 500);
width = random(300,600);
height = random(300,600);

red = new Sprite(50, 50, 100, 100);
red.color = 'red';

green = new Sprite(400, 50, 100, 100);
green.color = 'green';

blue = new Sprite(50, 450 ,  100, 100);
blue.color = 'blue';

yellow = new Sprite(400, 450, 100, 100);
yellow.color = 'yellow';

purple = new Sprite(350, 400 ,  100,100);
purple.color = 'purple';
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/