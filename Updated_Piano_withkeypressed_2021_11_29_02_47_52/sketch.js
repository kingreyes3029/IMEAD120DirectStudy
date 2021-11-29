
var notes = [ 60, 62, 64, 65, 67, 69, 71];
var blacknotes = [59, 69, 75];
var osc;

function setup() {
  createCanvas(720, 400);
  

  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}


function playNote(note, duration) {
  osc.freq(midiToFreq(note));
 
  osc.fade(0.5,0.2);

  
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {

 

  
  var w = 240/ notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;
   
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      
      if (mouseIsPressed) {
        fill(100,255,200);
      
      } else {
        fill(127);
      }
    } else {
      fill(200);
    }


    
    rect(x, 0, w, height);
  }
  var wi = 250/ blacknotes.length;
  for (var o = 0; o < blacknotes.length; o++) {
    var y = o * wi;
   
    if (mouseX > y && mouseX < y + wi && mouseY < height) {
      
      if (mouseIsPressed) {
        fill(13, 13, 13);
     
      } else {
        fill(127);
      }
    } else {
      fill(13);
    }


   
    rect(y, 0, wi-50, height-200);
  }

}


function mousePressed() {
 
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
  var key2 = floor(map(mouseX, 0, width, 0,blacknotes.length));
  playNote(notes[key]);
}
function  keyPressed() {
 
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
  var key2 = floor(map(mouseX, 0, width, 0,blacknotes.length));
  playNote(notes[key]);
}


function mouseReleased() {
  osc.fade(0,0.5);
}
function  keyReleased() {
  osc.fade(0,0.5);
}

