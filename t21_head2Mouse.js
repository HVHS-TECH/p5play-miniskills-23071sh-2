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
cnv = new Canvas(800, 700);
world.gravity.y = 10;

//circle = new Sprite(400, 300, 80,);
//circle.color = 'purple';
//circle.rotationSpeed = 2;
//circle.vel.x = 2;

box = new Sprite(200, 300, 50, 100, 'd');
box.color = 'purple';
box.rotationSpeed = 2;
box.vel.x = 2;

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('grey');	

box.moveTowards(mouseX, mouseY, 1);
if (mouse.presses()) {
box.moveTo(50, 50, 3);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/