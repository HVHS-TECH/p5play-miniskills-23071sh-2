/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
cnv = new Canvas(800, 700);

//Diagonal line 
//for (var i = 0; i < 10; i++) {
// var block = new Sprite(i*80 + 40, i*80, 40, 50);
//block.color = color(255, 0, 0); // Red color

//Horizontal line 
//for (var i = 0; i < 10; i++) {
//var block = new Sprite(50, i*60 + 80, 40, 50);
//block.color = color(255, 0, 0);

//Pyramid 
//for (var i = 0; i < 10; i++) {
//var block = new Sprite(400, i*80 + 30, i*60 - 2, 50);
//block.color = color(255, 0, 0);

for (var row = 0; row < 10; row++){
for (var i = 0; i < 10; i++) {
  var block = new Sprite(i * 80 + 40, row * 80 + 40, 50, 50);
    block.color = color(255, 0, 0);//red color
}
}



}












	
/*******************************************************/
// draw()
/*******************************************************/
function draw(){
background('grey');
}



/*******************************************************/
//  END OF APP
/*******************************************************/