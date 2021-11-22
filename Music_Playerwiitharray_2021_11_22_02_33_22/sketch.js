var arr = ['play this song',' Stop song playing']
var song;
var slider;

function setup() {
  
  createCanvas(700, 400);
  var startsong1 = createButton(arr[0]);
  startsong1.mousePressed(startsong1event);
  startsong1.position(30,120)
  var stopallsongs = createButton (arr[1]);
  stopallsongs.mousePressed(stopsong1event);
  var startsong2 = createButton(arr[0]);
  startsong2.mousePressed(startsong2event);
  startsong2.position(250,120)
  var startsong3 = createButton(arr[1]);
  startsong3.mousePressed(startsong3event);
  startsong3.position(450,120);
  var startsong4 = createButton(arr[1]);
  startsong4.mousePressed(startsong4event);
  startsong4.position(30, 240);
  var startsong5= createButton (arr[1]);
  startsong5.mousePressed(startsong5event);
  startsong5.position(250, 240);
}
function loaded1(){
  song.play();
}


function draw() {
  background(220);
  fill(255,0,0);
  rect(30,80,155, 30);
  fill(255,255,255);
  rect (250,80, 155, 30);
  fill(9, 186, 217);
  rect (450,80, 155, 30);
  fill (2, 13, 222);
  rect(30,200,155, 30);
  fill(247, 2, 158);
  rect(250,200,155, 30);
}
function stopsong1event(){
  song.stop();
  
}

function startsong1event(){
  
  song = loadSound ('Song1.mp3.mp3', loaded1);
  
  
}
function startsong2event(){
  song = loadSound('song2.mp3', loaded1);
  
}
function startsong3event(){
  song = loadSound('song3.mp3', loaded1);
  
}
function startsong4event(){
  song = loadSound('song4.mp3', loaded1);
  
}
function startsong5event(){
  song = loadSound('song5.mp3', loaded1);
  
}
