/*******************************************************/
// P5.play: t20_load_images
// Add images
// Written by ???
/*******************************************************/
function preload() {
  imgBG   = loadImage('../assets/img/space.jfif');
  imgFace = loadImage('../assets/img/face.png');
}

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
cnv = new Canvas(900, 700);

ball_1 = new Sprite(width/3, height/3, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 2;
ball_1.bounciness = 1;
ball_1.friction = 0;
ball_1.drag = 0;
ball_1.image = (imgFace);
imgFace.resize(50, 50);

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background(imgBG); 		
}

/*******************************************************/
//  END OF APP
/*******************************************************/