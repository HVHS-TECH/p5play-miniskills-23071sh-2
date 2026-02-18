/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
if (kb.pressing('left')) {
box.vel.x = '-10';
}
else if (kb.pressing ('right')) {
box.vel.x = '10';    
};

if (kb.released('left')) {
box.vel.x = '0';
}
else if (kb.released ('right')) {
box.vel.x = '0';    
};

}

/*******************************************************/
//  END OF APP
/*******************************************************/