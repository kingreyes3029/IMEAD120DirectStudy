var fill1 = [255,0,0];
var fill2 = [255,255,255];
var fill3 = [227,227,20];
var fill4 = [33,150,59];
var fill5 = [166,45,45];
function setup() {
  createCanvas(700, 400);
}

function draw() {
  //Denmark Flag
  background(220);
  fill(fill1);
  rect(20,100,250,175);
  fill(fill2);
  rect (20,175,250,20);
  fill(fill2);
  rect (100,100,20,175);
  
  //Congo Flag
  fill(fill3);
  rect(300,100,256,270);
  fill(fill4);
  triangle(300,285,300,100,485,100);
  fill(fill5);
  triangle(555,370,345, 370,555,175);
}