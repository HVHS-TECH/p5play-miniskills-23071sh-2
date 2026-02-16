/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
cnv = new Canvas(800, 700);
world.gravity.y = 10;

//box = new Sprite(100, 100, 50, 100, 'd');
//box.color = 'purple';
//box.rotationSpeed = 2;
//box.vel.x = 2;
//platform_1 = new Sprite(180, 300, 15, 300, 'k');
//platform_1.rotation = 90

//circle = new Sprite(200, 100, 80,);
//circle.color = 'purple';
//circle.rotationSpeed = 2;
//circle.vel.x = 2;
//platform_2 = new Sprite(500, 500, 15, 350, 'k');
//platform_2.rotation = 90

//Group for the aliens
alienGroup = new Group();

for (i = 0; i < 20; i++) {
alien = new Sprite(90, 300, 30, 30 , 'd');
alien.vel.x = 2;
alien.vel.y = 3;
alien.bounciness = 0.9;
alien.friction = 0;
alienGroup.add(alien);
}

ball_1 = new Sprite(width/3, height/3, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 2;
ball_1.bounciness = 1;
ball_1.friction = 0;
ball_1.drag = 0;

wallRH  = new Sprite(800, height/2, 9, height, 'k');
wallRH.color = 'black';

wallLH  = new Sprite(0, height/2, 9, height, 'k');
wallLH.color = 'blue';

wallTop  = new Sprite(width/2, 0.1, width, 8, 'k');
wallTop.color = 'purple';

wallBot  = new Sprite(width/2, 699, width, 8, 'k');
wallBot.color = 'green';

// Register a callback:
// if any alien in alienGroup collides with ball_1, call func2Call
alienGroup.collides(ball_1, func2Call);

function func2Call(alien, ball_1) {
// Delete the alien which was hit
alien.remove();
}
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