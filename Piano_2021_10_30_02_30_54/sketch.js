var notes = [60, 62, 64 , 65, 67, 69 , 71];
var osc;
function setup() {
  createCanvas(720, 400);
  osc = new p5.TriOsc();
  osc.start();
  osc.amp(0);
  
  
  
  
}
function playNote(note, duration){
  osc.freq(midiToFreq(note));
  osc.fade(0.4,0,2);
  if(duration){
    setTimeout (function(){
      osc.fade(0,0.2);
}, duration -50);
}
}  

function draw() {
  var w = width/ notes.length;
  for (var i = 0; i< notes.length; i++ ){
    var x = i * w;
    if (mouseX > x && mouseX < x + w && mouseY < height ){
      if (mouseIsPressed ){
        fill (100, 255, 200);
      } else { 
        fill (127);
      }
    } else {
      fill (200);
    }
    rect(x,0, w -1, height -1 )
 }
}  
function mousePressed(){
  var key = floor(map( mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}
function MouseRealeased(){
  osc.fade(0,0.5);
}