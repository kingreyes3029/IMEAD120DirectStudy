var word = 'congo';
var word2 = 'denmark';
var WIDTH = 700;
var HEIGHT = 400;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	textSize(32);
	background(220);
	var inp = createInput('');
	var button = createButton('write congo then press button');
	button.mousePressed(mouseEvent);
  inp.input(myInputEvent);
  var inp2 = createInput('');
   var button2= createButton('write denmark then press button');
  button2.mousePressed(mouseEvent2);
  
  inp2.input(myInputEvent2)
}

function mouseEvent() {
	if (word === 'congo') {
		fill(227,227,20);
        rect(300,100,256,270);
        fill(33,150,59);
        triangle(300,285,300,100,485,100);
        fill(166,45,45);
        triangle(555,370,345, 370,555,175);
	} 
      
    
}
function mouseEvent2(){
  if (word2 === 'denmark'){
     fill(255,0,0);
  rect(20,100,250,175);
  fill(255,255,255);
  rect (20,175,250,20);
  fill(255,255,255);
  rect (100,100,20,175);
  }
}

function myInputEvent() {
	
	word = this.value();
  
  
}
function myInputEvent2(){
  word2 = this.value();
}