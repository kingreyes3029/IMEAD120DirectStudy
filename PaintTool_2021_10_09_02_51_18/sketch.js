function setup() {
  createCanvas(800, 400);
  background(220);
    var button = createButton('this color is red');
  button.mousePressed(mouseEvent);
  var button2 = createButton('This color is Blue');
  button2.mousePressed(mouseEvent2);
  var button3 = createButton('this color is white');
  button3.mousePressed(mouseEvent3);
  var button4 = createButton('earse drawing');
  button4.mousePressed(mouseEvent4);
    
}

function draw() {
 var x = mouseX;
  var y = mouseY; 
  ellipse (x ,y , 25, 25);
  
  
  
 
}
function mouseEvent() {
	
  fill(237, 34, 93 ,);
  noStroke();
  
    
}
function mouseEvent2(){
  fill(5, 153, 227 );
  noStroke();
}
function mouseEvent3(){
  fill(252 );
  noStroke();
}
function mouseEvent4(){
  fill(220 );
  noStroke();
}