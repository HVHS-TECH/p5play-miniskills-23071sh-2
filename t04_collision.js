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

box = new Sprite(100, 100, 50, 100, 'd');
box.color = 'purple';
box.rotationSpeed = 2;
box.vel.x = 2;
platform_1 = new Sprite(180, 300, 15, 300, 'k');
platform_1.rotation = 90

circle = new Sprite(200, 100, 80,);
circle.color = 'purple';
circle.rotationSpeed = 2;
circle.vel.x = 2;
platform_2 = new Sprite(500, 500, 15, 350, 'k');
platform_2.rotation = 90

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('grey');	
}

/*******************************************************/
//  END OF APP
/*******************************************************/