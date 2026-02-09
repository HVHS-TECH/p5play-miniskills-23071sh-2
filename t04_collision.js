/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
cnv = new Canvas(800, 700);
world.gravity.y = 10;

box = new Sprite(200, 300, 50, 100, 'd');
box.color = 'purple';
box.rotationSpeed = 2;
box.vel.x = 2;
platform_1 = new Sprite(300, 300, 50, 100, 'k');

circle = new Sprite(400, 300, 80,);
circle.color = 'purple';
circle.rotationSpeed = 2;
circle.vel.x = 2;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background(grey);	
}

/*******************************************************/
//  END OF APP
/*******************************************************/