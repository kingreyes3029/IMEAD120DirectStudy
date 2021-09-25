function setup() {
  createCanvas(700, 400);
}

function draw() {
  //Denmark Flag
  background(220);
  fill(255,0,0);
  rect(20,100,250,175);
  fill(255,255,255);
  rect (20,175,250,20);
  fill(255,255,255);
  rect (100,100,20,175);
  
  //Congo Flag
  fill(227,227,20);
  rect(300,100,256,270);
  fill(33,150,59);
  triangle(300,285,300,100,485,100);
  fill(166,45,45);
  triangle(555,370,345, 370,555,175);
}